'use strict';

const { escapeHtml, layout } = require('./helpers');

/**
 * Public About page (GET /about). Who built College Without College, what
 * it is, and the honest limits — no invented biography, no contact address.
 */
function aboutPage(user, enrolled) {
  return layout({
    title: 'About',
    user: user || null,
    enrolled: enrolled || [],
    body:
      '<section class="page-head">\n' +
      '  <h1>About College Without College</h1>\n' +
      '  <p class="section-sub">College-style courses, at your own pace, for a lot less than college.</p>\n' +
      '</section>\n' +
      '<section class="card">\n' +
      '  <h2>What it is</h2>\n' +
      '  <p>College Without College is a set of college-style courses you take at your own ' +
      'pace: in-depth lectures, worked examples, hands-on assignments with step-by-step ' +
      'solutions, auto-graded quizzes with instant explanations, spreadsheet-style labs, ' +
      'timed exams, and a live gradebook \u2014 everything a real semester delivers, ' +
      'on your schedule.</p>\n' +
      '  <p>There are six programs: accounting and business, HVAC/R, plumbing and ' +
      'pipefitting, economics, automotive service technology, and American Sign Language. ' +
      'Each program is a sequence of courses taken in order, step by step, ending in a ' +
      'capstone that readies you for the real certification exams or a finished project.</p>\n' +
      '  <h2>Why I built it</h2>\n' +
      '  <p>\u201cI made this because I was looking to get a college-like experience for cheap ' +
      'that will help prep you for real life skills, careers, and certifications.\u201d</p>\n' +
      '  <p>\u2014 Landon, the builder</p>\n' +
      '  <h2>Pricing</h2>\n' +
      '  <p>Each program is $50, and your first class is free \u2014 pick any one course, ' +
      'on the house, then unlock a whole program when you are ready for the rest of it.</p>\n' +
      '  <h2>Please know</h2>\n' +
      '  <ul>\n' +
      '    <li>These are prep courses, not accredited degrees. You will not earn a college ' +
      'degree or diploma here.</li>\n' +
      '    <li>College Without College is not affiliated with or endorsed by any college or ' +
      'university. Programs are modeled on real college curricula, but the courses ' +
      'themselves are original and independent.</li>\n' +
      '    <li>Practice exams prepare you for the real certification exams, but they are not ' +
      'the real exams. You still book and sit the real exam with the certifying body, ' +
      'and any work-experience requirements are theirs, not ours.</li>\n' +
      '  </ul>\n' +
      '  <p><a class="btn btn-gold" href="/signup">Start learning free</a> ' +
      '<a class="btn btn-outline" href="/#programs">See the programs</a></p>\n' +
      '</section>',
  });
}

module.exports = { aboutPage };
