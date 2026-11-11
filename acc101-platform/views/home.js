'use strict';

const { escapeHtml, escAttr, layout, progressBar, progressRing, courseComplete } = require('./helpers');
const program = require('../lib/program');

/**
 * Home dashboard (GET /): one card per PROGRAM, in PROGRAMS order.
 * Each card shows the program's blurb, step count, the user's progress
 * (X of N enrolled, Y completed), and a one-click Continue link to the
 * first incomplete module among the user's enrolled courses in that
 * program. "Open program" goes to /programs/<slug>, where the courses
 * live and enrollment happens.
 *
 * Courses that belong to no program are listed separately below the
 * program cards ("Standalone courses") with the same per-course card
 * as the old dashboard. Today every course is in a program, so that
 * section normally renders nothing.
 *
 * opts: { showOnboarding } — true for brand-new accounts with no progress
 * yet; renders the "How this works" card. Each enrolled course carries
 * .grade (from db.computeGrades) and .continueModule ({num,slug,title}|null).
 */
function homePage(user, enrolled, opts) {
  const showOnboarding = !!(opts && opts.showOnboarding);
  const paywall = (opts && opts.paywall) || null;

  // Free-class + ownership status. Grandfathered accounts (created before
  // the paywall went live) get a plain "Full access" note and no free-class
  // prompts; everyone else sees whether their one free class is still open.
  let paywallBanner = '';
  if (paywall) {
    if (paywall.isAdmin) {
      paywallBanner =
        '<div class="callout"><p><strong>Admin account.</strong> You have full access to ' +
        'everything. <a href="/admin">Open the admin panel</a> to give free programs or ' +
        'courses to other accounts.</p></div>\n';
    } else if (paywall.grandfathered) {
      paywallBanner =
        '<div class="callout"><p><strong>Full access.</strong> Your account was created ' +
        'before paid programs began, so every program is open to you.</p></div>\n';
    } else {
      const ownedNames = [...(paywall.owned || []), ...(paywall.grantedPrograms || [])]
        .filter((s, i, a) => a.indexOf(s) === i)
        .map((s) => {
          const found = program.programBySlug(s);
          return found ? found.program.name : s;
        });
      const ownedLine = ownedNames.length > 0
        ? '<p><strong>Programs you own:</strong> ' + escapeHtml(ownedNames.join(', ')) + '.</p>'
        : '<p>You don\u2019t own a program yet \u2014 each one is $50, and it unlocks every course in it.</p>';
      const freeLine = paywall.freeClass
        ? '<p><strong>Your free class: ' + escapeHtml(paywall.freeClassTitle || paywall.freeClass.course_slug) +
          '.</strong> Your one free class is used \u2014 the next course in a program you don\u2019t own costs $50 for the whole program.</p>'
        : '<p><strong>Your free class is still available \u2014 pick any one course, free.</strong> ' +
          'After that, each program is $50 to unlock in full.</p>';
      paywallBanner = '<div class="callout">' + freeLine + ownedLine + '</div>\n';
    }
  }

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

  const emptyState = enrolled.length === 0
    ? '<div class="callout"><p>You are not enrolled in any courses yet. Open a program below and enroll in a course to get started.</p></div>\n'
    : '';

  // One card per program, in PROGRAMS order. Iterating PROGRAMS (rather
  // than hard-coding programs) means a new program appears automatically
  // once its PROGRAMS entry lands.
  const programCards = program.PROGRAMS.map((p, pi) => {
    const inProgram = enrolled
      .filter((c) => {
        const s = program.stepOf(c.slug);
        return s && s.programIndex === pi;
      })
      .sort((a, b) => program.stepOf(a.slug).step - program.stepOf(b.slug).step);
    const total = p.order.length;
    const enrolledCount = inProgram.length;
    const completedCount = inProgram.filter((c) => courseComplete(c.grade)).length;
    // Resume target: the lowest step with an incomplete module.
    let resume = null;
    for (const c of inProgram) {
      if (c.continueModule) {
        resume = { course: c, module: c.continueModule };
        break;
      }
    }
    const slug = program.programSlug(p);
    const resumeBlock = resume
      ? '<p class="continue-row"><a class="btn btn-primary" href="/c/' + escAttr(resume.course.slug) +
        '/modules/' + escAttr(resume.module.slug) + '">Continue: ' + escapeHtml(resume.course.title) +
        ' \u2014 Module ' + resume.module.num + ' \u2014 ' + escapeHtml(resume.module.title) + '</a></p>\n'
      : (enrolledCount > 0 && completedCount === enrolledCount
        ? '<p class="continue-row"><span class="continue-note">You\u2019ve finished every course you\u2019re enrolled in here \u2014 nice work.</span></p>\n'
        : '');
    return (
      '<article class="card course-card">\n' +
      '  <div class="course-card-top">\n' +
      '    <div>\n' +
      '      <h2><a href="/programs/' + escAttr(slug) + '">' + escapeHtml(p.name) + '</a></h2>\n' +
      '      <p>' + escapeHtml(p.blurb) + '</p>\n' +
      '      <p class="module-meta">' + total + ' courses</p>\n' +
      '      <p class="grade-line"><strong>' + enrolledCount + ' of ' + total +
        ' enrolled</strong> \u00b7 ' + completedCount + ' completed</p>\n' +
      '    </div>\n' +
      '  </div>\n' +
      '  ' + progressBar(total > 0 ? (enrolledCount / total) * 100 : 0) + '\n' +
      '  ' + resumeBlock +
      '  <p><a class="btn btn-gold" href="/programs/' + escAttr(slug) + '">Open program</a></p>\n' +
      '</article>'
    );
  }).join('\n');

  // Standalone enrolled courses (no program) keep the old per-course card.
  const standalone = enrolled.filter((c) => !program.stepOf(c.slug));
  const standaloneCards = standalone.map((c) => {
    const grade = c.grade || { total: 0, letter: 'F' };
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
  const standaloneSection = standaloneCards
    ? '<section aria-label="Standalone courses">\n' +
      '  <div class="page-head">\n' +
      '    <h2>Standalone courses</h2>\n' +
      '    <p class="section-sub">Courses that are not part of a program.</p>\n' +
      '  </div>\n' +
      '  <div class="course-list">\n' + standaloneCards + '\n</div>\n' +
      '</section>'
    : '';

  return layout({
    title: 'My programs',
    user,
    enrolled,
    navActive: 'dashboard',
    body:
      '<section class="page-head">\n' +
      '  <h1>My programs</h1>\n' +
      '  <p class="section-sub">Welcome back, ' + escapeHtml(user.username) + '. Pick a program to continue learning.</p>\n' +
      '</section>\n' +
      paywallBanner +
      (showOnboarding ? onboarding : '') +
      emptyState +
      '<section id="programs" aria-label="My programs">\n' +
      '<div class="card-grid">\n' + programCards + '\n</div>\n' +
      '</section>' +
      standaloneSection,
  });
}

module.exports = { homePage };
