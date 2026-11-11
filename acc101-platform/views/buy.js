'use strict';

const { escapeHtml, escAttr, layout } = require('./helpers');
const { stripeConfigured, PRICE_CENTS } = require('../lib/stripe');

/**
 * Purchase page (GET /buy/<program-slug>): $50 for the whole program.
 *
 * opts: {
 *   owned: true when the user already owns this program (or is grandfathered),
 *   grandfathered: true when the account predates the paywall,
 *   freeClass: the user's free-class row ({ course_slug, granted_at } | null),
 *   blocked: true when the user just hit the paywall trying to enroll,
 *   error: honest error message to show (payments not connected / Stripe error),
 *   courses: [{ slug, title }] in program order
 * }
 */
function buyPage(user, enrolled, prog, opts) {
  const o = opts || {};
  const slug = prog.slug;
  const price = '$' + (PRICE_CENTS / 100);
  const rows = (o.courses || []).map((c, i) =>
    '      <li>Step ' + (i + 1) + ': ' + escapeHtml(c.title) + '</li>'
  ).join('\n');

  let notice = '';
  if (o.blocked) {
    notice = '<div class="callout"><p>Your free class is already used, so this program ' +
      'costs ' + price + ' to unlock. Buying it unlocks every course in the program.</p></div>\n';
  }
  if (o.error) {
    notice += '<div class="callout"><p>' + escapeHtml(o.error) + '</p></div>\n';
  }

  let actionBlock;
  if (o.owned) {
    actionBlock =
      '<div class="callout"><p><strong>You own this program.</strong> Every course below is ' +
      'already open to you.</p></div>\n' +
      '  <p><a class="btn btn-gold" href="/programs/' + escAttr(slug) + '">Open the program</a></p>\n';
  } else if (!stripeConfigured()) {
    actionBlock =
      '<div class="callout"><p><strong>Payments aren\u2019t connected yet.</strong> ' +
      'Buying isn\u2019t available right now \u2014 check back soon. Your free class still ' +
      'works: pick any one course in this program and enroll free.</p></div>\n';
  } else {
    actionBlock =
      '  <form method="POST" action="/buy/' + escAttr(slug) + '/checkout">\n' +
      '    <button type="submit" class="btn btn-gold btn-lg">Buy this program \u2014 ' + price + '</button>\n' +
      '  </form>\n' +
      '  <p class="module-meta">Secure checkout with Stripe. You\u2019ll come right back here when it\u2019s done.</p>\n';
  }

  const freeOffer = (!o.owned && !o.freeClass)
    ? '  <p>Or use your free class on a course in this program \u2014 ' +
      '<a href="/programs/' + escAttr(slug) + '">pick a course</a> and enroll free. ' +
      'Your first class is free, whichever one you choose.</p>\n'
    : '';

  return layout({
    title: 'Buy ' + prog.name,
    user,
    enrolled,
    body:
      '<section class="page-head">\n' +
      '  <p><a href="/programs/' + escAttr(slug) + '">&larr; ' + escapeHtml(prog.name) + '</a></p>\n' +
      '  <h1>' + escapeHtml(prog.name) + '</h1>\n' +
      '  <p class="section-sub">' + escapeHtml(prog.blurb) + '</p>\n' +
      '</section>\n' +
      notice +
      '<section class="card">\n' +
      '  <h2>' + price + ' for the whole program</h2>\n' +
      '  <p>One payment unlocks every course in this program \u2014 all ' +
      (o.courses || []).length + ' of them, in order, with the quizzes, labs, exams, ' +
      'and gradebook for each. Your first class is free, so you can try a course ' +
      'before you buy the rest.</p>\n' +
      '  <h3>What\u2019s included</h3>\n' +
      '  <ol>\n' + rows + '\n  </ol>\n' +
      actionBlock +
      freeOffer +
      '  <p class="module-meta">Questions or refund requests? Contact us.</p>\n' +
      '</section>',
  });
}

module.exports = { buyPage };
