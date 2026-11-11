'use strict';

const { escapeHtml, escAttr, layout, progressBar, progressRing, courseComplete } = require('./helpers');
const program = require('../lib/program');

/**
 * Program page (GET /programs/<slug>): the program's courses in step order.
 *
 * rows: one entry per course in the program's order:
 *   { slug, title, description, step, total, prereqSlug, prereqTitle,
 *     enrolled, grade, continueModule, isCapstone }
 * Each enrolled row shows a Continue button (first incomplete module) plus
 * its grade ring/bar and a gradebook link; each not-enrolled row shows the
 * same one-click Enroll form the old dashboard catalog used
 * (POST /courses/<slug>/enroll). Prerequisite notes are guidance only, as
 * on the course dashboards — enrollment stays allowed.
 */
function programPage(user, enrolled, prog, rows, opts) {
  const total = rows.length;
  const enrolledCount = rows.filter((r) => r.enrolled).length;
  const completedCount = rows.filter((r) => r.enrolled && courseComplete(r.grade)).length;
  const slug = program.programSlug(prog);
  const o = opts || {};
  const owned = !!o.owned;

  // Price line: owned (or grandfathered) accounts see "Owned"; everyone
  // else sees the plain price, logged in or not.
  const priceLine = owned
    ? '  <p class="grade-line"><strong>Owned</strong> \u00b7 every course in this program is open to you.</p>\n'
    : '  <p class="grade-line"><strong>$50 per program \u00b7 first class free</strong> \u2014 ' +
      (user
        ? 'your first course is free, then $50 unlocks the whole program. <a href="/buy/' + slug + '">Buy this program</a>'
        : 'your first course is free once you sign up, then $50 unlocks the whole program.') +
      '</p>\n';

  const cards = rows.map((r) => {
    const stepLine = 'Step ' + r.step + ' of ' + r.total + ' \u00b7 ' + escapeHtml(prog.name);
    const preNote = (r.prereqSlug && r.prereqTitle)
      ? '      <p class="module-meta">Builds on <a href="/c/' + escAttr(r.prereqSlug) + '/dashboard">' +
        escapeHtml(r.prereqTitle) + '</a> \u2014 take that course first if you have not finished it.</p>\n'
      : '';
    const capstoneNote = r.isCapstone
      ? '      <p>' + escapeHtml(program.capstoneLineOf(prog)) + '</p>\n'
      : '';
    if (r.enrolled) {
      const grade = r.grade || { total: 0, letter: 'F' };
      const cm = r.continueModule;
      const continueBlock = cm
        ? '<p class="continue-row"><a class="btn btn-primary" href="/c/' + escAttr(r.slug) +
          '/modules/' + escAttr(cm.slug) + '">Continue: Module ' + cm.num + ' \u2014 ' +
          escapeHtml(cm.title) + '</a></p>\n'
        : '<p class="continue-row"><span class="continue-note">You\u2019ve finished all 12 modules \u2014 nice work.</span> ' +
          '<a class="btn btn-gold" href="/c/' + escAttr(r.slug) + '/gradebook">See my grades</a></p>\n';
      return (
        '<article class="card course-card">\n' +
        '  <div class="course-card-top">\n' +
        '    <div>\n' +
        '      <h2><a href="/c/' + escAttr(r.slug) + '/dashboard">' + escapeHtml(r.title) + '</a></h2>\n' +
        (r.description ? '      <p>' + escapeHtml(r.description) + '</p>\n' : '') +
        '      <p class="module-meta">' + stepLine + '</p>\n' +
        preNote +
        '      <p class="grade-line"><span class="grade-badge grade-' + escapeHtml(grade.letter) + '">' +
        escapeHtml(grade.letter) + '</span> <strong>' + escapeHtml(String(grade.total)) + '%</strong> course grade</p>\n' +
        '    </div>\n' +
        '    ' + progressRing(grade.total) + '\n' +
        '  </div>\n' +
        '  ' + progressBar(grade.total) + '\n' +
        continueBlock +
        capstoneNote +
        '</article>'
      );
    }
    // Logged-out visitors can't enroll (POST /courses/<slug>/enroll needs a
    // login), so they get signup/login buttons instead of the Enroll form.
    // The class list itself is identical to the logged-in view.
    const enrollBlock = user
      ? '  <form method="POST" action="/courses/' + escAttr(r.slug) + '/enroll">\n' +
        '    <button type="submit" class="btn btn-gold">Enroll now</button>\n' +
        '  </form>\n'
      : '  <p><a class="btn btn-gold" href="/signup">Start learning free</a> ' +
        '<a class="btn btn-outline" href="/login">Log in</a></p>\n' +
        '  <p class="module-meta">Sign up free to enroll in this course and track your progress.</p>\n';
    return (
      '<article class="card course-card">\n' +
      '  <div class="course-card-top">\n' +
      '    <div>\n' +
      '      <h2>' + escapeHtml(r.title) + '</h2>\n' +
      (r.description ? '      <p>' + escapeHtml(r.description) + '</p>\n' : '') +
      '      <p class="module-meta">' + stepLine + '</p>\n' +
      preNote +
      '    </div>\n' +
      '  </div>\n' +
      enrollBlock +
      capstoneNote +
      '</article>'
    );
  }).join('\n');

  // Logged-out visitors see the course count and a signup nudge instead of
  // enrollment progress (they have none yet).
  const headStats = user
    ? '  <p class="grade-line"><strong>' + enrolledCount + ' of ' + total +
      ' enrolled</strong> \u00b7 ' + completedCount + ' completed</p>\n' +
      '  ' + progressBar(total > 0 ? (enrolledCount / total) * 100 : 0) + '\n'
    : '  <p class="grade-line"><strong>' + total + ' courses</strong> \u00b7 free to start \u2014 ' +
      '<a href="/signup">sign up</a> to enroll and track your progress.</p>\n';

  return layout({
    title: prog.name,
    user,
    enrolled,
    navActive: user ? 'dashboard' : null,
    body:
      '<section class="page-head">\n' +
      '  <p><a href="/">&larr; ' + (user ? 'My programs' : 'All programs') + '</a></p>\n' +
      '  <h1>' + escapeHtml(prog.name) + '</h1>\n' +
      '  <p class="section-sub">' + escapeHtml(prog.blurb) + '</p>\n' +
      priceLine +
      headStats +
      '</section>\n' +
      '<section id="courses" aria-label="Courses in this program">\n' +
      '<div class="course-list">\n' + cards + '\n</div>\n' +
      '</section>',
  });
}

module.exports = { programPage };
