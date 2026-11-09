'use strict';

const { escapeHtml, layout } = require('./helpers');
const program = require('../lib/program');

/**
 * Public landing page. Lists every available course (from the content
 * loader), plus the course pitch, how-it-works, and signup CTAs.
 */
function courseCard(c, extra) {
  const moduleCount = c.modules && c.modules.list ? c.modules.list.length : 0;
  const labCount = c.labs ? c.labs.length : 0;
  const e = extra || {};
  return (
    '<article class="card course-card">\n' +
    (e.eyebrow ? '  <p class="eyebrow">' + escapeHtml(e.eyebrow) + '</p>\n' : '') +
    '  <h3>' + escapeHtml(c.title) + '</h3>\n' +
    (c.description ? '  <p>' + escapeHtml(c.description) + '</p>\n' : '') +
    (e.note ? '  <p>' + e.note + '</p>\n' : '') +
    '  <p class="module-meta">' + moduleCount + ' modules \u00b7 auto-graded quizzes \u00b7 ' +
    labCount + ' hands-on labs \u00b7 timed midterm &amp; final</p>\n' +
    '  <p><a class="btn btn-gold" href="/signup">Enroll free</a></p>\n' +
    '</article>'
  );
}

function landingPage(courses) {
  const bySlug = {};
  for (const c of courses) bySlug[c.slug] = c;
  const inAnyProgram = new Set(program.PROGRAMS.flatMap((p) => p.order));
  const others = courses.filter((c) => !inAnyProgram.has(c.slug));

  // One card per program (same shape as the logged-in dashboard): name,
  // blurb, course count, and a link to the program page, where the classes
  // are listed in step order. Visitors see the programs before logging in;
  // enrollment itself still happens after signup.
  const programCards = program.PROGRAMS.map((p) => {
    const programCourses = p.order.map((s) => bySlug[s]).filter(Boolean);
    if (!programCourses.length) return '';
    const slug = program.programSlug(p);
    return (
      '<article class="card course-card">\n' +
      '  <h3><a href="/programs/' + slug + '">' + escapeHtml(p.name) + '</a></h3>\n' +
      '  <p>' + escapeHtml(p.blurb) + '</p>\n' +
      '  <p class="module-meta">' + programCourses.length + ' courses \u00b7 taken in order, step by step</p>\n' +
      '  <p><a class="btn btn-gold" href="/programs/' + slug + '">See the classes</a></p>\n' +
      '</article>'
    );
  }).join('\n');

  const hasPrograms = programCards.length > 0;

  const programsSection = hasPrograms
    ? '<section class="roadmap">\n' +
      '  <h2>Programs</h2>\n' +
      '  <p class="section-sub">Pick a program to see its classes in order. Sign up free to enroll and track your progress.</p>\n' +
      '  <div class="card-grid">\n' + programCards + '\n  </div>\n' +
      '</section>\n'
    : '';

  const otherCards = others.map((c) => courseCard(c)).join('\n');
  const coursesSection =
    '<section class="roadmap">\n' +
    '  <h2>' + (hasPrograms ? 'Standalone courses' : 'Available courses') + '</h2>\n' +
    '  <p class="section-sub">Enroll in any course; your progress is tracked separately per course.</p>\n' +
    '  <div class="card-grid">\n' + (otherCards || '<p>New courses are on the way \u2014 check back soon.</p>') + '\n  </div>\n' +
    '</section>\n';

  return layout({
    title: 'Home',
    user: null,
    body:
      '<section class="hero">\n' +
      '  <div class="hero-inner">\n' +
      '    <img class="hero-logo hero-logo-badge" src="/logo-hero-badge.png" alt="College Without College">\n' +
      '    <p class="eyebrow">College Without College \u00b7 self-paced \u00b7 free to start</p>\n' +
      '    <h1>Real college courses, at your own pace</h1>\n' +
      '    <p class="lede">Accounting, HVAC/R, plumbing, business, economics, and automotive \u2014 full programs ' +
      'with in-depth lectures, worked examples, hands-on assignments with step-by-step solutions, ' +
      'auto-graded quizzes with instant explanations, spreadsheet-style labs, timed exams, and a live ' +
      'gradebook \u2014 everything a real semester delivers, free to start, on your schedule.</p>\n' +
      '    <div class="cta-row">\n' +
      '      <a class="btn btn-gold btn-lg" href="/signup">Start learning free</a>\n' +
      '      <a class="btn btn-outline btn-lg" href="/login">Log in</a>\n' +
      '    </div>\n' +
      '  </div>\n' +
      '</section>\n' +

      programsSection +
      coursesSection +

      '<section class="how-it-works">\n' +
      '  <h2>How it works</h2>\n' +
      '  <div class="steps">\n' +
      '    <div class="step"><span class="step-num">1</span><h3>Study at your pace</h3>' +
      '<p>In-depth modules with lecture notes, worked examples, journal entries, and T-accounts. ' +
      'A suggested weekly schedule keeps you on track.</p></div>\n' +
      '    <div class="step"><span class="step-num">2</span><h3>Practice with feedback</h3>' +
      '<p>Every module has a hands-on assignment with step-by-step solutions and an auto-graded quiz ' +
      'with instant explanations.</p></div>\n' +
      '    <div class="step"><span class="step-num">3</span><h3>Prove your skills</h3>' +
      '<p>Timed midterm and final exams, spreadsheet-style labs, and a live gradebook that tracks ' +
      'your weighted course grade.</p></div>\n' +
      '  </div>\n' +
      '</section>\n' +

      '<section class="teaser">\n' +
      '  <h2>Keep learning after the final</h2>\n' +
      '  <p>Each course includes a curated <strong>Video Library</strong> pairing every module with ' +
      'hand-picked video lessons \u2014 from short overviews to full multi-hour courses \u2014 so you can ' +
      'review any topic or go deeper whenever you like.</p>\n' +
      '  <a class="btn btn-primary" href="/signup">Enroll now \u2014 it\u2019s free</a>\n' +
      '</section>',
  });
}

module.exports = { landingPage };
