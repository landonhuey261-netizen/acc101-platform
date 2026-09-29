'use strict';

const { escapeHtml, layout } = require('./helpers');

/**
 * Public landing page. Lists every available course (from the content
 * loader), plus the course pitch, how-it-works, and signup CTAs.
 */
function landingPage(courses) {
  const cards = courses.map((c) => {
    const moduleCount = c.modules && c.modules.list ? c.modules.list.length : 0;
    const labCount = c.labs ? c.labs.length : 0;
    return (
      '<article class="card course-card">\n' +
      '  <h3>' + escapeHtml(c.title) + '</h3>\n' +
      (c.description ? '  <p>' + escapeHtml(c.description) + '</p>\n' : '') +
      '  <p class="module-meta">' + moduleCount + ' modules \u00b7 auto-graded quizzes \u00b7 ' +
      labCount + ' hands-on labs \u00b7 timed midterm &amp; final</p>\n' +
      '  <p><a class="btn btn-gold" href="/signup">Enroll free</a></p>\n' +
      '</article>'
    );
  }).join('\n');

  return layout({
    title: 'College-style courses, self-paced',
    user: null,
    body:
      '<section class="hero">\n' +
      '  <div class="hero-inner">\n' +
      '    <p class="eyebrow">Self-paced \u00b7 college-style \u00b7 free to start</p>\n' +
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

      '<section class="roadmap">\n' +
      '  <h2>Available courses</h2>\n' +
      '  <p class="section-sub">Enroll in any course; your progress is tracked separately per course.</p>\n' +
      '  <div class="card-grid">\n' + (cards || '<p>New courses are on the way \u2014 check back soon.</p>') + '\n  </div>\n' +
      '</section>\n' +

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
