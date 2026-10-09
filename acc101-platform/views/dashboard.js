'use strict';

const { escapeHtml, layout, progressBar, gradeBadge, courseSidebar } = require('./helpers');

/** Build { [moduleNumber]: true } from a grade object's perModule array. */
function doneByNumFromGrade(grade) {
  const map = {};
  for (const pm of (grade && grade.perModule) || []) {
    if (pm && pm.done) map[pm.module] = true;
  }
  return map;
}

/** Per-course dashboard: module cards, grade summary, links. */
function dashboardPage(user, course, enrolled, grade, modules, extra) {
  const base = '/c/' + course.slug;

  const cards = modules.map((m) => {
    const pm = grade.perModule[m.number - 1] || { quiz: 0, assignPct: 0, done: false };
    const doneMark = pm.done ? ' <span class="done-mark" title="Module marked complete">\u2713</span>' : '';
    return (
      '<article class="module-card' + (pm.done ? ' is-done' : '') + '">\n' +
      '  <div class="module-num">' + m.number + '</div>\n' +
      '  <h3><a href="' + base + '/modules/' + escapeHtml(m.slug) + '">' + escapeHtml(m.title) + '</a>' + doneMark + '</h3>\n' +
      '  <p class="module-meta">' + escapeHtml(m.estTime || '') + '</p>\n' +
      '  <dl class="mini-stats">\n' +
      '    <div><dt>Quiz best</dt><dd>' + escapeHtml(String(pm.quiz)) + '%</dd></div>\n' +
      '    <div><dt>Assignment</dt><dd>' + escapeHtml(String(pm.assignPct)) + '%</dd></div>\n' +
      '  </dl>\n' +
      '  <a class="btn btn-small" href="' + base + '/modules/' + escapeHtml(m.slug) + '">' +
      (pm.done ? 'Review' : 'Continue') + '</a>\n' +
      '</article>'
    );
  }).join('\n');

  const labItems = grade.labs.map((l) =>
    '<li><a href="' + base + '/labs/' + escapeHtml(l.id) + '">' + escapeHtml(l.title) + '</a> ' +
    '\u2014 best ' + escapeHtml(String(l.best)) + '%</li>'
  ).join('\n');

  return layout({
    title: course.title,
    user,
    enrolled,
    currentCourse: { slug: course.slug, title: course.title },
    navActive: 'courses',
    courseNav: courseSidebar({
      course,
      modules,
      doneByNum: doneByNumFromGrade(grade),
      current: { type: 'page', key: 'dashboard' },
    }),
    body:
      '<section class="page-head">\n' +
      '  <p class="eyebrow">Course dashboard</p>\n' +
      '  <h1>' + escapeHtml(course.title) + '</h1>\n' +
      (course.description ? '  <p class="section-sub">' + escapeHtml(course.description) + '</p>\n' : '') +
      '</section>\n' +
      (extra && extra.programHtml ? extra.programHtml : '') +

      '<section class="grade-summary card">\n' +
      '  <div class="grade-summary-main">\n' +
      '    <div>\n' +
      '      <h2>Course grade</h2>\n' +
      '      <p class="grade-line">' + gradeBadge(grade.letter) +
      ' <strong>' + escapeHtml(String(grade.total)) + '%</strong></p>\n' +
      '      ' + progressBar(grade.total) + '\n' +
      '    </div>\n' +
      '    <dl class="grade-components">\n' +
      '      <div><dt>Assignments</dt><dd>' + escapeHtml(String(grade.assignAvg)) + '%</dd></div>\n' +
      '      <div><dt>Quizzes</dt><dd>' + escapeHtml(String(grade.quizAvg)) + '%</dd></div>\n' +
      '      <div><dt>Midterm</dt><dd>' + escapeHtml(String(grade.midterm)) + '%</dd></div>\n' +
      '      <div><dt>Final</dt><dd>' + escapeHtml(String(grade.final)) + '%</dd></div>\n' +
      '    </dl>\n' +
      '  </div>\n' +
      '  <p class="card-links">\n' +
      '    <a class="btn btn-small" href="' + base + '/gradebook">See my grades</a> ' +
      '    <a class="btn btn-small" href="' + base + '/exams">Go to exams</a> ' +
      '    <a class="btn btn-small" href="' + base + '/labs">Go to labs</a> ' +
      '    <a class="btn btn-small" href="' + base + '/videos">Video library</a>\n' +
      '  </p>\n' +
      '</section>\n' +

      (extra && extra.certHtml ? extra.certHtml : '') +
      '<section>\n' +
      '  <h2>Modules</h2>\n' +
      '  <div class="card-grid">\n' + cards + '\n  </div>\n' +
      '</section>\n' +

      '<section class="two-col">\n' +
      '  <div class="card">\n' +
      '    <h2>Exams</h2>\n' +
      '    <p>Midterm (best ' + escapeHtml(String(grade.midterm)) + '%) and final (best ' +
      escapeHtml(String(grade.final)) + '%) \u2014 timed, auto-graded.</p>\n' +
      '    <p><a class="btn btn-primary" href="' + base + '/exams">Go to exams</a></p>\n' +
      '  </div>\n' +
      '  <div class="card">\n' +
      '    <h2>' + escapeHtml(course.labsTitle || 'Accounting labs') + '</h2>\n' +
      (labItems ? '    <ul class="lab-list">\n' + labItems + '\n    </ul>\n' : '    <p>Labs are being prepared.</p>\n') +
      '    <p><a class="btn btn-primary" href="' + base + '/labs">Go to labs</a></p>\n' +
      '  </div>\n' +
      '</section>',
  });
}

module.exports = { dashboardPage };
