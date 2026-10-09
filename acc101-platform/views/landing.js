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
  const programCourses = program.PROGRAM_ORDER.map((s) => bySlug[s]).filter(Boolean);
  const inProgram = new Set(program.PROGRAM_ORDER);
  const others = courses.filter((c) => !inProgram.has(c.slug));

  const programCards = programCourses.map((c, i) => {
    const pre = program.prereqSlug(c.slug);
    const preCourse = pre ? bySlug[pre] : null;
    const preInfo = pre ? program.stepOf(pre) : null;
    const note = preCourse
      ? 'Prerequisite: ' + escapeHtml(preCourse.title) + ' (Step ' +
        (preInfo ? preInfo.step : '') + ') \u2014 take it first.'
      : '';
    return courseCard(c, { eyebrow: 'Step ' + (i + 1) + ' of ' + programCourses.length, note });
  }).join('\n');

  const programSection = programCourses.length
    ? '<section class="roadmap">\n' +
      '  <h2>The HVAC/R Technology program</h2>\n' +
      '  <p class="section-sub">Eleven courses taken in order, sequenced after Ferris State ' +
      'University\u2019s HVACR Technology (AAS) major courses \u2014 from refrigeration ' +
      'fundamentals to a certification-prep capstone that readies you for the real EPA 608 ' +
      'and NATE exams.</p>\n' +
      '  <div class="card-grid">\n' + programCards + '\n  </div>\n' +
      '</section>\n'
    : '';

  const otherCards = others.map((c) => courseCard(c)).join('\n');
  const coursesSection =
    '<section class="roadmap">\n' +
    '  <h2>' + (programCourses.length ? 'Standalone courses' : 'Available courses') + '</h2>\n' +
    '  <p class="section-sub">Enroll in any course; your progress is tracked separately per course.</p>\n' +
    '  <div class="card-grid">\n' + (otherCards || '<p>New courses are on the way \u2014 check back soon.</p>') + '\n  </div>\n' +
    '</section>\n';

  return layout({
    title: 'Home',
    user: null,
    body:
      '<section class="hero">\n' +
      '  <div class="hero-inner">\n' +
      '    <p class="eyebrow">College Without College \u00b7 self-paced \u00b7 free to start</p>\n' +
      '    <h1>Learn accounting the way college teaches it</h1>\n' +
      '    <p class="lede">In-depth lecture notes with worked examples, hands-on assignments with ' +
      'step-by-step solutions, auto-graded quizzes with instant explanations, spreadsheet-style labs, ' +
      'timed exams, and a live gradebook \u2014 everything a real semester delivers, at your own pace.</p>\n' +
      '    <div class="cta-row">\n' +
      '      <a class="btn btn-gold btn-lg" href="/signup">Start learning free</a>\n' +
      '      <a class="btn btn-outline btn-lg" href="/login">Log in</a>\n' +
      '    </div>\n' +
      '  </div>\n' +
      '</section>\n' +

      programSection +
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
