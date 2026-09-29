'use strict';

const { escapeHtml, layout } = require('./helpers');

function formPage({ title, heading, action, submitLabel, error, switchHtml }) {
  const err = error
    ? '<div class="alert alert-error" role="alert">' + escapeHtml(error) + '</div>'
    : '';
  return layout({
    title,
    user: null,
    body:
      '<section class="auth-wrap">\n' +
      '  <div class="auth-card">\n' +
      '    <h1>' + escapeHtml(heading) + '</h1>\n' +
      err +
      '    <form method="POST" action="' + escapeHtml(action) + '" novalidate>\n' +
      '      <div class="form-group">\n' +
      '        <label for="username">Username</label>\n' +
      '        <input id="username" name="username" type="text" autocomplete="username" required ' +
      'minlength="3" maxlength="20" pattern="[A-Za-z0-9_]+" ' +
      'title="3\u201320 characters: letters, numbers, and underscores only">\n' +
      '        <small class="hint">3\u201320 characters: letters, numbers, and underscores only.</small>\n' +
      '      </div>\n' +
      '      <div class="form-group">\n' +
      '        <label for="password">Password</label>\n' +
      '        <input id="password" name="password" type="password" ' +
      (action === '/login' ? 'autocomplete="current-password"' : 'autocomplete="new-password"') +
      ' required minlength="8">\n' +
      (action === '/signup'
        ? '<small class="hint">At least 8 characters.</small>\n'
        : '') +
      '      </div>\n' +
      '      <button type="submit" class="btn btn-primary btn-block">' + escapeHtml(submitLabel) + '</button>\n' +
      '    </form>\n' +
      '    <p class="auth-switch">' + switchHtml + '</p>\n' +
      '  </div>\n' +
      '</section>',
  });
}

function signupPage(error) {
  return formPage({
    title: 'Sign up',
    heading: 'Create your account',
    action: '/signup',
    submitLabel: 'Sign up',
    error,
    switchHtml: 'Already enrolled? <a href="/login">Log in</a>',
  });
}

function loginPage(error) {
  return formPage({
    title: 'Log in',
    heading: 'Welcome back',
    action: '/login',
    submitLabel: 'Log in',
    error,
    switchHtml: 'New here? <a href="/signup">Create an account</a>',
  });
}

function notFoundPage(user, nav) {
  nav = nav || {};
  return layout({
    title: 'Page not found',
    user,
    enrolled: nav.enrolled,
    currentCourse: nav.currentCourse,
    body:
      '<section class="narrow">\n' +
      '  <h1>404 \u2014 Page not found</h1>\n' +
      '  <p>The page you were looking for doesn\u2019t exist or was moved.</p>\n' +
      '  <p><a class="btn btn-primary" href="/">Back to home</a></p>\n' +
      '</section>',
  });
}

function errorPage(user, statusCode, message, nav) {
  nav = nav || {};
  return layout({
    title: 'Something went wrong',
    user,
    enrolled: nav.enrolled,
    currentCourse: nav.currentCourse,
    body:
      '<section class="narrow">\n' +
      '  <h1>' + escapeHtml(statusCode) + ' \u2014 Something went wrong</h1>\n' +
      '  <p>' + escapeHtml(message || 'An unexpected error occurred. Please try again.') + '</p>\n' +
      '  <p><a class="btn btn-primary" href="/">Back to home</a></p>\n' +
      '</section>',
  });
}

module.exports = { signupPage, loginPage, notFoundPage, errorPage };
