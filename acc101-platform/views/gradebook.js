'use strict';

const { escapeHtml, layout, progressBar, gradeBadge, courseSidebar } = require('./helpers');

function doneByNumFromGrade(grade) {
  const map = {};
  for (const pm of (grade && grade.perModule) || []) {
    if (pm && pm.done) map[pm.module] = true;
  }
  return map;
}

function gradebookPage(user, course, enrolled, grade, modules) {
  const base = '/c/' + course.slug;

  const moduleRows = modules.map((m) => {
    const pm = grade.perModule[m.number - 1] || { quiz: 0, assignPct: 0, done: false };
    return (
      '<tr>\n' +
      '  <td><a href="' + base + '/modules/' + escapeHtml(m.slug) + '">Module ' + m.number + ': ' + escapeHtml(m.title) + '</a></td>\n' +
      '  <td class="num">' + escapeHtml(String(pm.quiz)) + '%</td>\n' +
      '  <td class="num">' + escapeHtml(String(pm.assignPct)) + '%</td>\n' +
      '  <td class="center">' + (pm.done ? '<span class="done-mark">\u2713</span>' : '\u2014') + '</td>\n' +
      '</tr>'
    );
  }).join('\n');

  const labRows = grade.labs.map((l) =>
    '<tr>\n' +
    '  <td><a href="' + base + '/labs/' + escapeHtml(l.id) + '">' + escapeHtml(l.title) + '</a></td>\n' +
    '  <td class="num">' + escapeHtml(String(l.best)) + '%</td>\n' +
    '</tr>'
  ).join('\n');

  return layout({
    title: 'Gradebook \u2014 ' + course.title,
    user,
    enrolled,
    currentCourse: { slug: course.slug, title: course.title },
    navActive: 'gradebook',
    courseNav: courseSidebar({
      course,
      modules: modules || [],
      doneByNum: doneByNumFromGrade(grade),
      current: { type: 'page', key: 'gradebook' },
    }),
    body:
      '<section class="page-head">\n' +
      '  <p class="eyebrow"><a href="' + base + '/dashboard">' + escapeHtml(course.title) + '</a></p>\n' +
      '  <h1>Gradebook</h1>\n' +
      '  <p class="section-sub">' + escapeHtml(user.username) + ' \u00b7 weighted course grade</p>\n' +
      '</section>\n' +

      '<section class="card final-grade">\n' +
      '  <div class="final-grade-main">\n' + gradeBadge(grade.letter) + '\n' +
      '    <div>\n' +
      '      <p class="final-total">' + escapeHtml(String(grade.total)) + '%</p>\n' +
      '      <p class="section-sub">Overall course grade</p>\n' +
      '    </div>\n' +
      '  </div>\n' +
      '  <h2>How your grade is weighted</h2>\n' +
      '  <ul class="weights">\n' +
      '    <li><div><strong>Assignments 25%</strong><span>0.7 \u00d7 assignment self-checks (' + escapeHtml(String(grade.assignAvg)) +
      '%) + 0.3 \u00d7 labs (' + escapeHtml(String(grade.labAvg)) + '%)</span></div>' + progressBar(0.7 * grade.assignAvg + 0.3 * grade.labAvg) + '</li>\n' +
      '    <li><div><strong>Quizzes 25%</strong><span>Best quiz score per module, averaged (' + escapeHtml(String(grade.quizAvg)) + '%)</span></div>' + progressBar(grade.quizAvg) + '</li>\n' +
      '    <li><div><strong>Midterm 20%</strong><span>Best score (' + escapeHtml(String(grade.midterm)) + '%)</span></div>' + progressBar(grade.midterm) + '</li>\n' +
      '    <li><div><strong>Final 30%</strong><span>Best score (' + escapeHtml(String(grade.final)) + '%)</span></div>' + progressBar(grade.final) + '</li>\n' +
      '  </ul>\n' +
      '  <div class="callout"><p><strong>Letter grades:</strong> A \u2265 90, B \u2265 80, C \u2265 70, D \u2265 60, F &lt; 60. ' +
      'Only your <em>best</em> attempt counts for quizzes, exams, and labs. Items you haven\u2019t attempted yet count as 0.</p></div>\n' +
      '</section>\n' +

      '<section>\n' +
      '  <h2>Modules</h2>\n' +
      '  <div class="table-scroll">\n' +
      '  <table class="grade-table">\n' +
      '    <thead><tr><th scope="col">Module</th><th scope="col">Quiz best</th><th scope="col">Assignment</th><th scope="col">Done</th></tr></thead>\n' +
      '    <tbody>\n' + moduleRows + '\n    </tbody>\n' +
      '  </table>\n' +
      '  </div>\n' +
      '</section>\n' +

      '<section class="two-col">\n' +
      '  <div>\n' +
      '    <h2>Exams</h2>\n' +
      '    <div class="table-scroll">\n' +
      '    <table class="grade-table">\n' +
      '      <thead><tr><th scope="col">Exam</th><th scope="col">Best</th></tr></thead>\n' +
      '      <tbody>\n' +
      '        <tr><td><a href="' + base + '/exams/midterm">Midterm</a></td><td class="num">' + escapeHtml(String(grade.midterm)) + '%</td></tr>\n' +
      '        <tr><td><a href="' + base + '/exams/final">Final</a></td><td class="num">' + escapeHtml(String(grade.final)) + '%</td></tr>\n' +
      '      </tbody>\n' +
      '    </table>\n' +
      '    </div>\n' +
      '  </div>\n' +
      '  <div>\n' +
      '    <h2>Labs</h2>\n' +
      '    <div class="table-scroll">\n' +
      '    <table class="grade-table">\n' +
      '      <thead><tr><th scope="col">Lab</th><th scope="col">Best</th></tr></thead>\n' +
      '      <tbody>\n' + (labRows || '<tr><td colspan="2">No labs available yet.</td></tr>') + '\n      </tbody>\n' +
      '    </table>\n' +
      '    </div>\n' +
      '  </div>\n' +
      '</section>',
  });
}

module.exports = { gradebookPage };
