'use strict';

const { escapeHtml, layout } = require('./helpers');

/**
 * Public Help page (GET /help). How to get help, the free class, the $50
 * program price, password help, refunds, and the honest limits — no invented
 * contact details, no invented refund policy. The only contact is the
 * support email Landon gave: collegewithoutcollege@gmail.com.
 */
function helpPage(user, enrolled) {
  const email = 'collegewithoutcollege@gmail.com';
  const emailLink = '<a href="mailto:' + email + '">' + email + '</a>';
  return layout({
    title: 'Help',
    user: user || null,
    enrolled: enrolled || [],
    body:
      '<section class="page-head">\n' +
      '  <h1>Help</h1>\n' +
      '  <p class="section-sub">Answers to the questions we get most, and how to reach us.</p>\n' +
      '</section>\n' +
      '<section class="card">\n' +
      '  <h2>How to get help</h2>\n' +
      '  <p>If something is not working or you have a question, email us at ' +
      emailLink + '. Tell us what happened and what you were trying to do, ' +
      'and we will help you sort it out.</p>\n' +
      '  <h2>Your first class is free</h2>\n' +
      '  <p>Every new account gets one free class \u2014 any class you pick, ' +
      'on the house. Try it out before you decide on a whole program.</p>\n' +
      '  <h2>Programs cost $50</h2>\n' +
      '  <p>A program costs $50 and unlocks the whole program \u2014 all its ' +
      'classes, with the quizzes, labs, exams, and gradebook for each.</p>\n' +
      '  <h2>Forgot your password?</h2>\n' +
      '  <p>Use the \u201cForgot password?\u201d link on the login page. If you ' +
      'never added an email to your account, write to ' + emailLink +
      ' and we will help you get back in.</p>\n' +
      '  <h2>Refunds</h2>\n' +
      '  <p>If you need a refund or have a billing question, email ' +
      emailLink + '.</p>\n' +
      '  <h2>What these courses are</h2>\n' +
      '  <ul>\n' +
      '    <li>Prep courses for real-life skills, careers, and certifications \u2014 ' +
      'not accredited degrees. You will not earn a college degree or diploma here.</li>\n' +
      '    <li>College Without College is not affiliated with or endorsed by any college ' +
      'or university.</li>\n' +
      '    <li>Practice exams prepare you for the real certification exams, but they are ' +
      'not the real exams. You still book and sit the real exam with the certifying body.</li>\n' +
      '  </ul>\n' +
      '  <p><a class="btn btn-gold" href="/signup">Start learning free</a> ' +
      '<a class="btn btn-outline" href="/#programs">See the programs</a></p>\n' +
      '</section>',
  });
}

module.exports = { helpPage };
