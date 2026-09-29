'use strict';

const { escapeHtml, escAttr, layout, courseSidebar } = require('./helpers');

const NOT_CONNECTED_HTML =
  '<div class="callout tutor-unavailable" role="status">' +
  '<p><strong>The Course Tutor isn\u2019t connected yet</strong> \u2014 ask the course owner to add an API key.</p>' +
  '<p>Meanwhile, use \u201cHelp me understand\u201d to copy a prompt for your own AI assistant.</p>' +
  '</div>';

/**
 * Dedicated Course Tutor chat page. available: whether ANTHROPIC_API_KEY is
 * configured; when false the page renders the "not connected" state and the
 * chat form is disabled.
 */
function tutorPage(user, course, enrolled, available, modules, doneByNum) {
  const base = '/c/' + course.slug;

  const body =
    '<section class="page-head">\n' +
    '  <p class="eyebrow"><a href="' + escAttr(base) + '/dashboard">' +
    escapeHtml(course.title) + '</a></p>\n' +
    '  <h1>Course Tutor</h1>\n' +
    '  <p class="section-sub">Ask questions about the lectures, key terms, assignments, ' +
    'and quizzes. The tutor explains step by step and helps you work things out yourself.</p>\n' +
    '</section>\n' +
    (available ? '' : NOT_CONNECTED_HTML + '\n') +
    '<section class="tutor-chat" id="tutorChat" data-course-slug="' +
    escAttr(course.slug) + '" aria-label="Course Tutor conversation">\n' +
    '  <div id="tutorLog" class="tutor-log" role="log" aria-live="polite" aria-label="Conversation"></div>\n' +
    '  <div id="tutorContextChip" class="tutor-chip" hidden></div>\n' +
    '  <form id="tutorForm" class="tutor-form" autocomplete="off">\n' +
    '    <label class="visually-hidden" for="tutorInput">Ask the Course Tutor</label>\n' +
    '    <textarea id="tutorInput" rows="2" maxlength="4000" ' +
    'placeholder="Ask a question about the course\u2026"' +
    (available ? '' : ' disabled') + '></textarea>\n' +
    '    <button type="submit" class="btn btn-gold" id="tutorSend"' +
    (available ? '' : ' disabled') + '>Send</button>\n' +
    '  </form>\n' +
    '  <p class="tutor-note">The tutor can\'t help during timed exams, and it ' +
    'answers from your course material \u2014 always double-check tricky numbers against the lectures.</p>\n' +
    '</section>';

  return layout({
    title: 'Course Tutor \u2014 ' + course.title,
    user,
    enrolled,
    currentCourse: { slug: course.slug, title: course.title },
    navActive: 'tutor',
    tutorPage: true, // the floating button is redundant on its own page
    courseNav: courseSidebar({
      course,
      modules: modules || [],
      doneByNum: doneByNum || {},
      current: { type: 'page', key: 'tutor' },
    }),
    scripts: '<script src="/tutor.js" defer></script>',
    body,
  });
}

module.exports = { tutorPage, NOT_CONNECTED_HTML };
