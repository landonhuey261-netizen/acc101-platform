'use strict';

/**
 * Shared HTML helpers: escaping + the site layout shell.
 * ALL user-derived strings must pass through escapeHtml() before rendering.
 */

function escapeHtml(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Escape a string for safe inclusion inside a double-quoted HTML attribute. */
function escAttr(s) {
  return escapeHtml(s);
}

/** Strip HTML tags — used to build plain-text tutor prompts from authored HTML. */
function stripTags(s) {
  return String(s == null ? '' : s).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

/**
 * "Help me understand" button. data-prompt is copied to the clipboard by
 * public/app.js, which then shows the "Copied — paste it to your AI assistant" toast.
 *
 * When the Course Tutor is available, `ask` ({ courseSlug, context }) also adds
 * an "Ask the Course Tutor" button that opens the tutor page with the given
 * context pre-attached (stored in sessionStorage by public/app.js).
 * data-tutor-ask holds JSON: { moduleNum?, questionContext?, prefill? }.
 */
function tutorAskBtn(courseSlug, askContext) {
  return '<button type="button" class="tutor-ask-btn" data-tutor-ask="' +
    escAttr(JSON.stringify(askContext || {})) + '" data-tutor-course="' +
    escAttr(courseSlug) + '">Ask the Course Tutor</button>';
}

function tutorBtn(prompt, ask) {
  let html = '<button type="button" class="tutor-btn" data-prompt="' +
    escAttr(prompt) + '">Help me understand</button>';
  if (ask && ask.courseSlug && ask.context) {
    html += '\n' + tutorAskBtn(ask.courseSlug, ask.context);
  }
  return html;
}

/** Prompt used when a quiz question is answered wrong (client renders it in review). */
function wrongAnswerPrompt(courseTitle, moduleNum, moduleTitle, question, mine, correct) {
  return "I'm taking " + courseTitle + ' (Module ' +
    moduleNum + ': ' + moduleTitle + '). I got this question wrong: ' + question +
    " I answered '" + mine + "'; the correct answer is '" + correct + "'. " +
    "Please explain the underlying concept in simple terms and walk me through " +
    "the reasoning step by step \u2014 don't just restate the answer.";
}

/** Prompt for an assignment problem's tutor button (server-rendered). */
function assignmentPrompt(courseTitle, moduleNum, moduleTitle, promptText) {
  return "I'm taking " + courseTitle + ' (Module ' +
    moduleNum + ': ' + moduleTitle + '). I am working on this assignment problem: ' +
    stripTags(promptText) +
    ' Please explain the underlying concept in simple terms and walk me through ' +
    'the reasoning step by step \u2014 do not just give away the answer.';
}

function progressBar(pct) {
  const p = Math.max(0, Math.min(100, Number(pct) || 0));
  return '<div class="progress-bar" role="progressbar" aria-valuenow="' + p.toFixed(1) +
    '" aria-valuemin="0" aria-valuemax="100"><div class="progress-fill" style="width:' +
    p.toFixed(1) + '%"></div></div>';
}

/** SVG progress ring (e.g. per-course progress on the home page). */
function progressRing(pct) {
  const p = Math.max(0, Math.min(100, Number(pct) || 0));
  const r = 34;
  const c = 2 * Math.PI * r;
  const off = c * (1 - p / 100);
  return '<svg class="progress-ring" viewBox="0 0 80 80" role="img" aria-label="' +
    Math.round(p) + ' percent complete">\n' +
    '  <circle class="ring-bg" cx="40" cy="40" r="' + r + '"></circle>\n' +
    '  <circle class="ring-fill" cx="40" cy="40" r="' + r + '" stroke-dasharray="' +
    c.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) +
    '" transform="rotate(-90 40 40)"></circle>\n' +
    '  <text class="ring-text" x="40" y="42">' + Math.round(p) + '%</text>\n' +
    '</svg>';
}

function gradeBadge(letter) {
  return '<span class="grade-badge grade-' + escapeHtml(letter) + '">' +
    escapeHtml(letter) + '</span>';
}

const { tutorEnabled } = require('../lib/tutor');

/**
 * Course sidebar: the 12 modules in order with done checkmarks and the
 * current module highlighted, plus quick links to the main course sections.
 *
 * Renders BOTH:
 *  - a collapsible <details> stepper shown at the top of the page on small
 *    screens (summary names the current position in plain words), and
 *  - a full sticky sidebar on wide screens (CSS toggles between them).
 *
 * opts: {
 *   course: content course object ({ slug, title, labs }),
 *   modules: array of { number, slug, title } in order,
 *   doneByNum: { [moduleNumber]: true } for completed modules,
 *   current: { type: 'module', num } | { type: 'page', key } | null,
 *   hideTutor: true to omit the Course Tutor link (exam pages)
 * }
 */
function courseSidebar(opts) {
  const course = (opts && opts.course) || {};
  const modules = Array.isArray(opts && opts.modules) ? opts.modules : [];
  const doneByNum = (opts && opts.doneByNum) || {};
  const current = (opts && opts.current) || null;
  const hideTutorLinks = !!(opts && opts.hideTutor);
  const base = '/c/' + course.slug;

  let doneCount = 0;
  const items = modules.map((m) => {
    const done = !!doneByNum[m.number];
    if (done) doneCount += 1;
    const isCurrent = !!current && current.type === 'module' && current.num === m.number;
    const cls = 'module-nav-item' + (done ? ' is-done' : '') + (isCurrent ? ' is-current' : '');
    const inner =
      '<span class="m-check" aria-hidden="true">' + (done ? '\u2713' : '') + '</span>' +
      '<span class="m-num" aria-hidden="true">' + m.number + '</span>' +
      '<span class="m-title">' + escapeHtml(m.title) + '</span>';
    const link = isCurrent
      ? '<span class="m-link" aria-current="page">' + inner + '<span class="visually-hidden">(current module)</span></span>'
      : '<a class="m-link" href="' + base + '/modules/' + escapeHtml(m.slug) + '">' + inner + '</a>';
    return '<li class="' + cls + '">' + link + '</li>';
  }).join('\n');

  const pageKey = current && current.type === 'page' ? current.key : null;
  const pageLink = (key, href, label) =>
    '<li' + (pageKey === key ? ' class="is-current"' : '') + '>' +
    (pageKey === key
      ? '<span aria-current="page">' + label + '</span>'
      : '<a href="' + href + '">' + label + '</a>') +
    '</li>';

  const quickLinks =
    '<ul class="sidebar-links">\n' +
    pageLink('dashboard', base + '/dashboard', 'Course dashboard') + '\n' +
    pageLink('gradebook', base + '/gradebook', 'See my grades') + '\n' +
    pageLink('exams', base + '/exams', 'Exams') + '\n' +
    (course.labs && course.labs.length ? pageLink('labs', base + '/labs', 'Accounting labs') + '\n' : '') +
    pageLink('videos', base + '/videos', 'Video library') + '\n' +
    (hideTutorLinks ? '' : pageLink('tutor', base + '/tutor', 'Course tutor') + '\n') +
    '</ul>';

  // Mobile stepper summary: current position in plain words.
  const pageLabels = {
    dashboard: 'Course dashboard', gradebook: 'Gradebook', exams: 'Exams',
    labs: 'Accounting labs', videos: 'Video library', tutor: 'Course tutor',
  };
  let summaryMain = 'Course contents';
  let summarySub = doneCount + ' of ' + modules.length + ' modules complete';
  if (current && current.type === 'module') {
    const mod = modules.filter((m) => m.number === current.num)[0];
    summaryMain = 'Module ' + current.num + ' of ' + modules.length;
    if (mod) summarySub = mod.title;
  } else if (pageKey && pageLabels[pageKey]) {
    summaryMain = pageLabels[pageKey];
  }

  return (
    '<aside class="course-aside">\n' +
    '  <details class="course-stepper">\n' +
    '    <summary><span class="stepper-main">' + escapeHtml(summaryMain) + '</span>' +
    '<span class="stepper-sub">' + escapeHtml(summarySub) + '</span></summary>\n' +
    '    <nav aria-label="Modules in this course">\n' +
    '      <ol class="module-nav-list">\n' + items + '\n      </ol>\n' +
    '    </nav>\n' +
    '  </details>\n' +
    '  <nav class="course-sidebar" aria-label="Course contents">\n' +
    '    <p class="sidebar-heading">Modules</p>\n' +
    '    <ol class="module-nav-list">\n' + items + '\n    </ol>\n' +
    '    <p class="sidebar-heading">In this course</p>\n' +
    quickLinks + '\n' +
    '  </nav>\n' +
    '</aside>'
  );
}

function layout(opts) {
  const title = opts.title || 'ACC 101';
  const user = opts.user || null;
  const body = opts.body || '';
  const headExtras = opts.headExtras || '';
  const scripts = opts.scripts || '';
  const enrolled = Array.isArray(opts.enrolled) ? opts.enrolled : [];
  const currentCourse = opts.currentCourse || null; // { slug, title }
  const navActive = opts.navActive || null; // dashboard|courses|gradebook|tutor|account
  const courseNav = opts.courseNav || ''; // course sidebar HTML (course pages)

  // Course Tutor: floating button app-wide EXCEPT where opts.hideTutor is set
  // (timed exam pages) or opts.tutorPage (the tutor page itself — the button
  // would just link to the page you're on). Logged-out visitors get no
  // button (tutor requires login). Exam pages also suppress the Tutor nav
  // link and the body data attributes; the tutor page keeps the data
  // attributes because public/tutor.js needs them to enable the chat.
  const hideTutor = !!opts.hideTutor;
  const isTutorPage = !!opts.tutorPage;
  let tutorCourseSlug = null;
  if (user && !hideTutor) {
    tutorCourseSlug =
      (currentCourse && currentCourse.slug) ||
      (enrolled[0] && enrolled[0].slug) ||
      null;
  }
  // data-tutor-available only when a key is configured; the floating button
  // links to the tutor page, which shows the "not connected" state otherwise.
  const tutorAvailable = tutorEnabled();
  const bodyAttrs =
    tutorCourseSlug
      ? ' data-tutor-course="' + escAttr(tutorCourseSlug) + '"' +
        (tutorAvailable ? ' data-tutor-available="1"' : '')
      : '';
  const tutorFab = tutorCourseSlug && !isTutorPage
    ? '<a class="tutor-fab" href="/c/' + escAttr(tutorCourseSlug) + '/tutor" ' +
      'aria-label="Ask the Course Tutor">' +
      '<span class="tutor-fab-icon" aria-hidden="true">?</span>' +
      '<span class="tutor-fab-label">Course Tutor</span></a>\n'
    : '';

  function navItem(key, href, label) {
    return '<a href="' + href + '"' +
      (navActive === key ? ' aria-current="page" class="is-current"' : '') + '>' +
      label + '</a>';
  }

  let navLinks;
  if (user) {
    // Gradebook + Tutor point at the current course when on a course page,
    // otherwise the first enrolled course.
    const courseSlugForLinks =
      (currentCourse && currentCourse.slug) ||
      (enrolled[0] && enrolled[0].slug) ||
      null;
    const gradebookHref = courseSlugForLinks
      ? '/c/' + escAttr(courseSlugForLinks) + '/gradebook'
      : '/';
    navLinks =
      navItem('dashboard', '/', 'Dashboard') +
      navItem('courses', '/#courses', 'My Courses') +
      navItem('gradebook', gradebookHref, 'Gradebook') +
      (tutorCourseSlug
        ? navItem('tutor', '/c/' + escAttr(tutorCourseSlug) + '/tutor', 'Tutor')
        : '') +
      navItem('account', '/account', 'Account');
  } else {
    navLinks = '<a href="/login">Log in</a>' +
      '<a href="/signup" class="nav-cta">Sign up free</a>';
  }

  const userBlock = user
    ? '<div class="user-chip"><span class="username">' + escapeHtml(user.username) +
      '</span>' +
      '<form method="POST" action="/logout" class="inline-form">' +
      '<button type="submit" class="link-btn">Log out</button></form></div>'
    : '';

  const mainInner = courseNav
    ? '<div class="course-layout">\n' +
      '<div class="course-nav-col">' + courseNav + '</div>\n' +
      '<div class="course-main-col">\n' + body + '\n</div>\n' +
      '</div>'
    : body;

  return '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '<head>\n' +
    '<meta charset="utf-8">\n' +
    '<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    '<meta name="description" content="ACC 101: Principles of Financial Accounting — a full self-paced college-style course with lectures, assignments, auto-graded quizzes, labs, exams, and a gradebook.">\n' +
    '<meta name="theme-color" content="#14365e">\n' +
    '<title>' + escapeHtml(title) + ' | ACC 101</title>\n' +
    '<link rel="stylesheet" href="/styles.css">\n' +
    '<link rel="manifest" href="/manifest.json">\n' +
    '<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png">\n' +
    '<link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192.png">\n' +
    headExtras + '\n' +
    '</head>\n' +
    '<body' + bodyAttrs + '>\n' +
    '<a class="skip-link" href="#main">Skip to main content</a>\n' +
    '<header class="site-header">\n' +
    '  <div class="header-inner">\n' +
    '    <a class="brand" href="/">' +
    '<span class="brand-mark" aria-hidden="true">A</span>' +
    '<span class="brand-text">ACC 101 <em>Principles of Financial Accounting</em></span></a>\n' +
    '    <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false">\u2630</button>\n' +
    '    <nav class="main-nav" id="mainNav" aria-label="Primary">' + navLinks + '</nav>\n' +
    '    ' + userBlock + '\n' +
    '  </div>\n' +
    '</header>\n' +
    '<main id="main" class="container">\n' + mainInner + '\n</main>\n' +
    '<footer class="site-footer">\n' +
    '  <div class="container footer-inner">\n' +
    '    <p><strong>ACC 101: Principles of Financial Accounting.</strong> ' +
    'A self-paced, college-style course. All content is original and written for this course.</p>\n' +
    '    <p class="footer-note">Study tip: attempt every assignment problem on your own before opening the solutions.</p>\n' +
    '  </div>\n' +
    '</footer>\n' +
    '<div id="toast" class="toast" role="status" aria-live="polite"></div>\n' +
    tutorFab +
    '<script src="/app.js" defer></script>\n' +
    scripts + '\n' +
    '</body>\n' +
    '</html>';
}

module.exports = {
  escapeHtml,
  escAttr,
  stripTags,
  tutorBtn,
  tutorAskBtn,
  wrongAnswerPrompt,
  assignmentPrompt,
  progressBar,
  progressRing,
  gradeBadge,
  courseSidebar,
  layout,
};
