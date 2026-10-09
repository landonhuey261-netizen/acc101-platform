'use strict';

const { escapeHtml, escAttr, layout, progressBar, progressRing } = require('./helpers');
const program = require('../lib/program');

/**
 * Home dashboard (GET /): lists the user's ENROLLED courses. Even with a
 * single enrollment this list IS the home page (no auto-redirect).
 * Each entry: progress ring, grade, "Continue where you left off" button
 * pointing at the first incomplete module.
 *
 * opts: { showOnboarding } — true for brand-new accounts with no progress
 * yet; renders the "How this works" card. Each enrolled course carries
 * .grade (from db.computeGrades) and .continueModule ({num,slug,title}|null).
 */
function homePage(user, enrolled, opts) {
  const showOnboarding = !!(opts && opts.showOnboarding);

  const onboarding =
    '<section class="card onboard" aria-labelledby="howItWorks">\n' +
    '  <h2 id="howItWorks">How this works</h2>\n' +
    '  <ol class="onboard-steps">\n' +
    '    <li><strong>Learn.</strong> Read the lecture, key terms, and watch the video in each module.</li>\n' +
    '    <li><strong>Practice.</strong> Work the assignment problems, check the solutions, and tick each problem you solved on your own.</li>\n' +
    '    <li><strong>Check your understanding.</strong> Take the module quiz \u2014 instant feedback, and your best score saves automatically.</li>\n' +
    '    <li><strong>Watch your grade grow.</strong> Everything saves automatically as you go. Your course grade is ' +
    'Assignments 25%, Quizzes 25%, Midterm 20%, Final 30%. Letter grades: A \u2265 90, B \u2265 80, C \u2265 70, D \u2265 60, F &lt; 60.</li>\n' +
    '  </ol>\n' +
    '</section>\n';

  // Program courses first, in program order; standalone courses keep their order.
  const ordered = [...enrolled].sort((a, b) => {
    const sa = program.stepOf(a.slug);
    const sb = program.stepOf(b.slug);
    if (sa && sb) return sa.step - sb.step;
    if (sa) return -1;
    if (sb) return 1;
    return 0;
  });

  const cards = ordered.map((c) => {
    const grade = c.grade || { total: 0, letter: 'F' };
    const stepInfo = program.stepOf(c.slug);
    const cm = c.continueModule;
    const continueBlock = cm
      ? '<p class="continue-row"><a class="btn btn-primary" href="/c/' + escAttr(c.slug) +
        '/modules/' + escAttr(cm.slug) + '">Continue: Module ' + cm.num + ' \u2014 ' +
        escapeHtml(cm.title) + '</a></p>\n'
      : '<p class="continue-row"><span class="continue-note">You\u2019ve finished all 12 modules \u2014 nice work.</span> ' +
        '<a class="btn btn-gold" href="/c/' + escAttr(c.slug) + '/gradebook">See my grades</a></p>\n';
    return (
      '<article class="card course-card">\n' +
      '  <div class="course-card-top">\n' +
      '    <div>\n' +
      '      <h2><a href="/c/' + escAttr(c.slug) + '/dashboard">' + escapeHtml(c.title) + '</a></h2>\n' +
      (c.description ? '      <p>' + escapeHtml(c.description) + '</p>\n' : '') +
      (stepInfo ? '      <p class="module-meta">Step ' + stepInfo.step + ' of ' + stepInfo.total +
        ' \u00b7 HVAC/R Technology program</p>\n' : '') +
      '      <p class="grade-line"><span class="grade-badge grade-' + escapeHtml(grade.letter) + '">' +
      escapeHtml(grade.letter) + '</span> <strong>' + escapeHtml(String(grade.total)) + '%</strong> course grade</p>\n' +
      '    </div>\n' +
      '    ' + progressRing(grade.total) + '\n' +
      '  </div>\n' +
      '  ' + progressBar(grade.total) + '\n' +
      continueBlock +
      '</article>'
    );
  }).join('\n');

  const emptyState = enrolled.length === 0
    ? '<div class="callout"><p>You are not enrolled in any courses yet. Browse the courses below and enroll in one to get started.</p></div>\n'
    : '';

  // Catalog of courses the user is NOT enrolled in yet (program order
  // first), each with a one-click enroll form. This is how a logged-in
  // user discovers the program — the public catalog landing page only
  // shows to logged-out visitors.
  const catalog = (opts && Array.isArray(opts.catalog)) ? opts.catalog : [];
  const orderedCatalog = [...catalog].sort((a, b) => {
    const sa = program.stepOf(a.slug);
    const sb = program.stepOf(b.slug);
    if (sa && sb) return sa.step - sb.step;
    if (sa) return -1;
    if (sb) return 1;
    return 0;
  });
  const catalogCards = orderedCatalog.map((c) => {
    const stepInfo = program.stepOf(c.slug);
    return (
      '<article class="card course-card">\n' +
      '  <div class="course-card-top">\n' +
      '    <div>\n' +
      '      <h2>' + escapeHtml(c.title) + '</h2>\n' +
      (c.description ? '      <p>' + escapeHtml(c.description) + '</p>\n' : '') +
      (stepInfo ? '      <p class="module-meta">Step ' + stepInfo.step + ' of ' + stepInfo.total +
        ' \u00b7 HVAC/R Technology program</p>\n' : '') +
      '    </div>\n' +
      '  </div>\n' +
      '  <form method="POST" action="/courses/' + escAttr(c.slug) + '/enroll">\n' +
      '    <button type="submit" class="btn btn-gold">Enroll now</button>\n' +
      '  </form>\n' +
      '</article>'
    );
  }).join('\n');
  const catalogSection = catalogCards
    ? '<section id="catalog" aria-label="More courses">\n' +
      '  <div class="page-head">\n' +
      '    <h2>Keep going \u2014 more courses</h2>\n' +
      '    <p class="section-sub">Enroll in a course and it moves up into your list above. Program courses are listed in order \u2014 start with the lowest step you have not taken yet.</p>\n' +
      '  </div>\n' +
      '  <div class="course-list">\n' + catalogCards + '\n</div>\n' +
      '</section>'
    : '';

  return layout({
    title: 'My courses',
    user,
    enrolled,
    navActive: 'dashboard',
    body:
      '<section class="page-head">\n' +
      '  <h1>My courses</h1>\n' +
      '  <p class="section-sub">Welcome back, ' + escapeHtml(user.username) + '. Pick a course to continue learning.</p>\n' +
      '</section>\n' +
      (showOnboarding ? onboarding : '') +
      emptyState +
      '<section id="courses" aria-label="My courses">\n' +
      '<div class="course-list">\n' + cards + '\n</div>\n' +
      '</section>' +
      catalogSection,
  });
}

module.exports = { homePage };
