'use strict';

const { escapeHtml, escAttr, stripTags, layout, courseSidebar } = require('./helpers');

function examsListPage(user, course, enrolled, exams, bestBy, modules, doneByNum) {
  const base = '/c/' + course.slug;
  const cards = ['midterm', 'final'].map((which) => {
    const exam = exams[which];
    if (!exam) return '';
    const best = bestBy[which] || 0;
    const startLabel = which === 'midterm' ? 'Start the midterm' : 'Start the final';
    return (
      '<article class="card exam-card">\n' +
      '  <h2>' + escapeHtml(exam.title || (which === 'midterm' ? 'Midterm Exam' : 'Final Exam')) + '</h2>\n' +
      '  <dl class="exam-meta">\n' +
      '    <div><dt>Questions</dt><dd>' + (exam.questions ? exam.questions.length : 0) + '</dd></div>\n' +
      '    <div><dt>Time limit</dt><dd>' + escapeHtml(String(exam.minutes)) + ' minutes</dd></div>\n' +
      '    <div><dt>Best score</dt><dd>' + escapeHtml(String(best)) + '%</dd></div>\n' +
      '  </dl>\n' +
      '  <p class="section-sub">' +
      (which === 'midterm'
        ? 'Covers Modules 1\u20136. The timer starts when the exam page loads and auto-submits when time runs out.'
        : 'Comprehensive: covers Modules 1\u201312. The timer starts when the exam page loads and auto-submits when time runs out.') +
      '</p>\n' +
      '  <a class="btn btn-gold" href="' + base + '/exams/' + which + '">' + startLabel + '</a>\n' +
      '</article>'
    );
  }).join('\n');

  return layout({
    title: 'Exams \u2014 ' + course.title,
    user,
    enrolled,
    currentCourse: { slug: course.slug, title: course.title },
    navActive: 'courses',
    hideTutor: true, // no floating tutor button on exam pages
    courseNav: courseSidebar({
      course,
      modules: modules || [],
      doneByNum: doneByNum || {},
      current: { type: 'page', key: 'exams' },
      hideTutor: true, // no tutor link while in the exam area
    }),
    body:
      '<section class="page-head">\n' +
      '  <p class="eyebrow"><a href="' + base + '/dashboard">' + escapeHtml(course.title) + '</a></p>\n' +
      '  <h1>Exams</h1>\n' +
      '  <p class="section-sub">Timed, auto-graded, and reviewable. Your best score on each exam counts toward your course grade.</p>\n' +
      '</section>\n' +
      '<div class="two-col">\n' + cards + '\n</div>\n' +
      '<div class="callout"><p><strong>Tip:</strong> finish the Module 1\u20136 quizzes and assignments ' +
      'before attempting the midterm, and complete all twelve modules before the final.</p></div>',
  });
}

function examPage(user, course, enrolled, which, exam, modules, doneByNum) {
  const questions = (exam.questions || []).map((q, i) => {
    const choices = (q.choices || []).map((c, ci) =>
      '<label class="choice" data-choice-text="' + escAttr(stripTags(c)) + '">' +
      '<input type="radio" name="q' + i + '" value="' + ci + '"> ' +
      '<span class="choice-letter">' + String.fromCharCode(65 + ci) + '</span> ' +
      '<span>' + escapeHtml(c) + '</span></label>'
    ).join('\n');
    return (
      '<fieldset class="quiz-question" data-qindex="' + i + '" data-question="' + escAttr(stripTags(q.q)) + '">\n' +
      '  <legend><strong>Q' + (i + 1) + '.</strong> ' + escapeHtml(q.q) + '</legend>\n' +
      (q.module ? '  <p class="q-module-tag">Module ' + escapeHtml(String(q.module)) + '</p>\n' : '') +
      choices + '\n' +
      '  <div class="question-feedback" hidden></div>\n' +
      '</fieldset>'
    );
  }).join('\n');

  return layout({
    title: (exam.title || 'Exam') + ' \u2014 ' + course.title,
    user,
    enrolled,
    currentCourse: { slug: course.slug, title: course.title },
    navActive: 'courses',
    hideTutor: true, // no floating tutor button on exam pages
    courseNav: courseSidebar({
      course,
      modules: modules || [],
      doneByNum: doneByNum || {},
      current: { type: 'page', key: 'exams' },
      hideTutor: true, // no tutor link while in the exam area
    }),
    body:
      '<article class="exam-page">\n' +
      '  <header class="page-head">\n' +
      '    <h1>' + escapeHtml(exam.title || (which === 'midterm' ? 'Midterm Exam' : 'Final Exam')) + '</h1>\n' +
      '    <p class="section-sub">' + (exam.questions ? exam.questions.length : 0) +
      ' questions \u00b7 ' + escapeHtml(String(exam.minutes)) + ' minutes \u00b7 auto-submits when time expires</p>\n' +
      '  </header>\n' +
      '  <div class="exam-timer-wrap" role="timer" aria-live="off">\n' +
      '    <span class="exam-timer-label">Time remaining</span>\n' +
      '    <span class="exam-timer" id="examTimer">--:--</span>\n' +
      '  </div>\n' +
      '  <form id="examForm" data-course="' + escAttr(course.slug) + '" data-course-title="' + escAttr(course.title) + '" data-which="' + escAttr(which) + '" data-minutes="' + escapeHtml(String(exam.minutes)) + '" novalidate>\n' +
      questions + '\n' +
      '    <button type="submit" class="btn btn-gold btn-lg">Submit exam</button>\n' +
      '  </form>\n' +
      '  <div id="examResults" class="quiz-results" hidden></div>\n' +
      '</article>',
  });
}

module.exports = { examsListPage, examPage };
