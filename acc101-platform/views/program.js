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
function programPage(user, enrolled, prog, rows) {
  const total = rows.length;
  const enrolledCount = rows.filter((r) => r.enrolled).length;
  const completedCount = rows.filter((r) => r.enrolled && courseComplete(r.grade)).length;
  const slug = program.programSlug(prog);

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
      '  <form method="POST" action="/courses/' + escAttr(r.slug) + '/enroll">\n' +
      '    <button type="submit" class="btn btn-gold">Enroll now</button>\n' +
      '  </form>\n' +
      capstoneNote +
      '</article>'
    );
  }).join('\n');

  return layout({
    title: prog.name,
    user,
    enrolled,
    navActive: 'dashboard',
    body:
      '<section class="page-head">\n' +
      '  <p><a href="/">&larr; My programs</a></p>\n' +
      '  <h1>' + escapeHtml(prog.name) + '</h1>\n' +
      '  <p class="section-sub">' + escapeHtml(prog.blurb) + '</p>\n' +
      '  <p class="grade-line"><strong>' + enrolledCount + ' of ' + total +
        ' enrolled</strong> \u00b7 ' + completedCount + ' completed</p>\n' +
      '  ' + progressBar(total > 0 ? (enrolledCount / total) * 100 : 0) + '\n' +
      '</section>\n' +
      '<section id="courses" aria-label="Courses in this program">\n' +
      '<div class="course-list">\n' + cards + '\n</div>\n' +
      '</section>',
  });
}

module.exports = { programPage };
