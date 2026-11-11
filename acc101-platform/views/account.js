'use strict';

const { escapeHtml, escAttr, layout } = require('./helpers');

/**
 * Account page (GET /account): username, email, member-since date,
 * enrolled courses, and a log-out button.
 * `error` is an optional message from the POST /account email form.
 */
function accountPage(user, enrolled, error) {
  const courseItems = enrolled.map((c) =>
    '<li><a href="/c/' + escAttr(c.slug) + '/dashboard">' + escapeHtml(c.title) + '</a>' +
    (c.enrolled_at
      ? ' <span class="muted">\u2014 enrolled ' + escapeHtml(String(c.enrolled_at).slice(0, 10)) + '</span>'
      : '') +
    '</li>'
  ).join('\n');

  const err = error
    ? '<div class="alert alert-error" role="alert">' + escapeHtml(error) + '</div>\n    '
    : '';

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
      '      <div><dt>Email</dt><dd>' + (user.email ? escapeHtml(user.email) : 'No email on file yet') + '</dd></div>\n' +
      (user.created_at
        ? '      <div><dt>Member since</dt><dd>' + escapeHtml(String(user.created_at).slice(0, 10)) + '</dd></div>\n'
        : '') +
      '    </dl>\n' +
      err +
      '    <form method="POST" action="/account" novalidate>\n' +
      '      <div class="form-group">\n' +
      '        <label for="email">Email address</label>\n' +
      '        <input id="email" name="email" type="email" autocomplete="email" required maxlength="254" ' +
      'value="' + escAttr(user.email || '') + '">\n' +
      '        <small class="hint">Add an email so you can reset your password if you forget it.</small>\n' +
      '      </div>\n' +
      '      <button type="submit" class="btn btn-primary">Save email</button>\n' +
      '    </form>\n' +
      '    <form method="POST" action="/logout" style="margin-top:1rem;">\n' +
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
