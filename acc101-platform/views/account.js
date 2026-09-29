'use strict';

const { escapeHtml, escAttr, layout } = require('./helpers');

/**
 * Account page (GET /account): username, member-since date, enrolled
 * courses, and a log-out button. Kept minimal on purpose.
 */
function accountPage(user, enrolled) {
  const courseItems = enrolled.map((c) =>
    '<li><a href="/c/' + escAttr(c.slug) + '/dashboard">' + escapeHtml(c.title) + '</a>' +
    (c.enrolled_at
      ? ' <span class="muted">\u2014 enrolled ' + escapeHtml(String(c.enrolled_at).slice(0, 10)) + '</span>'
      : '') +
    '</li>'
  ).join('\n');

  return layout({
    title: 'My account',
    user,
    enrolled,
    navActive: 'account',
    body:
      '<section class="page-head">\n' +
      '  <h1>My account</h1>\n' +
      '  <p class="section-sub">Your profile and enrolled courses.</p>\n' +
      '</section>\n' +
      '<div class="two-col">\n' +
      '  <section class="card" aria-labelledby="profileHead">\n' +
      '    <h2 id="profileHead">Profile</h2>\n' +
      '    <dl class="kv-list">\n' +
      '      <div><dt>Username</dt><dd>' + escapeHtml(user.username) + '</dd></div>\n' +
      (user.created_at
        ? '      <div><dt>Member since</dt><dd>' + escapeHtml(String(user.created_at).slice(0, 10)) + '</dd></div>\n'
        : '') +
      '    </dl>\n' +
      '    <form method="POST" action="/logout">\n' +
      '      <button type="submit" class="btn">Log out</button>\n' +
      '    </form>\n' +
      '  </section>\n' +
      '  <section class="card" aria-labelledby="coursesHead">\n' +
      '    <h2 id="coursesHead">My courses</h2>\n' +
      (courseItems
        ? '    <ul class="account-courses">\n' + courseItems + '\n    </ul>\n'
        : '    <p>You are not enrolled in any courses yet.</p>\n') +
      '  </section>\n' +
      '</div>',
  });
}

module.exports = { accountPage };
