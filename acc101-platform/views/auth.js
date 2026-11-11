'use strict';

const { escapeHtml, layout } = require('./helpers');

function formPage({ title, heading, action, submitLabel, error, switchHtml, extraFields }) {
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
      (extraFields || '') +
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
    extraFields:
      '      <div class="form-group">\n' +
      '        <label for="email">Email</label>\n' +
      '        <input id="email" name="email" type="email" autocomplete="email" required maxlength="254">\n' +
      '        <small class="hint">So you can reset your password if you forget it.</small>\n' +
      '      </div>\n',
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
    switchHtml:
      'New here? <a href="/signup">Create an account</a><br>\n' +
      '      <a href="/forgot-password">Forgot password?</a> &middot; <a href="/help">Need help?</a>',
  });
}

/** Green-ish info banner (no .alert-success class exists in the CSS). */
function infoBanner(text) {
  return '<div class="alert" role="status" style="background:#e6f4ea;border:1px solid #a3d9a5;color:#1e4620;">' +
    escapeHtml(text) + '</div>';
}

function forgotPasswordPage(error, info) {
  const err = error
    ? '<div class="alert alert-error" role="alert">' + escapeHtml(error) + '</div>'
    : '';
  const note = info ? infoBanner(info) : '';
  return layout({
    title: 'Forgot password',
    user: null,
    body:
      '<section class="auth-wrap">\n' +
      '  <div class="auth-card">\n' +
      '    <h1>Forgot your password?</h1>\n' +
      '    <p>Enter your username or the email on your account and we\u2019ll send you a link to reset it.</p>\n' +
      err + note +
      '    <form method="POST" action="/forgot-password" novalidate>\n' +
      '      <div class="form-group">\n' +
      '        <label for="identifier">Username or email</label>\n' +
      '        <input id="identifier" name="identifier" type="text" autocomplete="username" required maxlength="254">\n' +
      '      </div>\n' +
      '      <button type="submit" class="btn btn-primary btn-block">Send reset link</button>\n' +
      '    </form>\n' +
      '    <p class="auth-switch"><a href="/login">Back to log in</a> &middot; <a href="/help">Need help?</a></p>\n' +
      '  </div>\n' +
      '</section>',
  });
}

function resetPasswordPage({ error, token, valid, success }) {
  const err = error
    ? '<div class="alert alert-error" role="alert">' + escapeHtml(error) + '</div>'
    : '';
  let inner;
  if (success) {
    inner =
      infoBanner('Your password has been reset.') +
      '    <p><a class="btn btn-primary btn-block" href="/login">Log in with your new password</a></p>\n';
  } else if (!valid) {
    inner =
      '    <p>This password reset link is invalid or has expired. Reset links only work once and expire after 1 hour.</p>\n' +
      '    <p><a class="btn btn-primary btn-block" href="/forgot-password">Request a new reset link</a></p>\n';
  } else {
    inner =
      '    <form method="POST" action="/reset-password" novalidate>\n' +
      '      <input type="hidden" name="token" value="' + escapeHtml(token || '') + '">\n' +
      '      <div class="form-group">\n' +
      '        <label for="password">New password</label>\n' +
      '        <input id="password" name="password" type="password" autocomplete="new-password" required minlength="8">\n' +
      '        <small class="hint">At least 8 characters.</small>\n' +
      '      </div>\n' +
      '      <div class="form-group">\n' +
      '        <label for="password_confirm">Confirm new password</label>\n' +
      '        <input id="password_confirm" name="password_confirm" type="password" autocomplete="new-password" required minlength="8">\n' +
      '      </div>\n' +
      '      <button type="submit" class="btn btn-primary btn-block">Reset password</button>\n' +
      '    </form>\n';
  }
  return layout({
    title: 'Reset password',
    user: null,
    body:
      '<section class="auth-wrap">\n' +
      '  <div class="auth-card">\n' +
      '    <h1>Reset your password</h1>\n' +
      err + inner +
      '    <p class="auth-switch"><a href="/login">Back to log in</a></p>\n' +
      '  </div>\n' +
      '</section>',
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

module.exports = { signupPage, loginPage, forgotPasswordPage, resetPasswordPage, notFoundPage, errorPage };
