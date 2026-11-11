'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const crypto = require('node:crypto');
const db = require('../db');
const { signupPage, loginPage, forgotPasswordPage, resetPasswordPage } = require('../views/auth');
const { accountPage } = require('../views/account');
const emailLib = require('../lib/email');

const router = express.Router();

const BCRYPT_COST = 12;
const USERNAME_RE = /^[A-Za-z0-9_]{3,20}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RESET_TOKEN_TTL_MS = 60 * 60 * 1000; // 1 hour

function validateSignup(username, password) {
  if (!USERNAME_RE.test(username || '')) {
    return 'Username must be 3\u201320 characters: letters, numbers, and underscores only.';
  }
  if (!password || password.length < 8) {
    return 'Password must be at least 8 characters long.';
  }
  return null;
}

function validateEmail(email) {
  if (!email) return 'Enter an email address.';
  if (email.length > 254 || !EMAIL_RE.test(email)) {
    return 'Enter a valid email address.';
  }
  return null;
}

function hashResetToken(token) {
  return crypto.createHash('sha256').update(token).digest('hex');
}

/** Log the user in: regenerate the session (fixation protection) then set userId. */
function logIn(req, res, userId, done) {
  req.session.regenerate((err) => {
    if (err) return done(err);
    req.session.userId = userId;
    req.session.save((saveErr) => done(saveErr));
  });
}

router.get('/signup', (req, res) => {
  if (req.session.userId) return res.redirect('/');
  res.send(signupPage(null));
});

router.post('/signup', async (req, res, next) => {
  try {
    if (req.session.userId) return res.redirect('/');
    const username = (req.body.username || '').trim();
    const password = req.body.password || '';
    const email = (req.body.email || '').trim().toLowerCase();

    const errMsg = validateSignup(username, password) || validateEmail(email);
    if (errMsg) return res.status(400).send(signupPage(errMsg));

    if (db.findUserByUsername(username)) {
      return res.status(409).send(signupPage('That username is already taken. Try another one, or log in.'));
    }
    if (db.findUserByEmail(email)) {
      return res.status(409).send(signupPage('That email is already in use.'));
    }

    const passHash = await bcrypt.hash(password, BCRYPT_COST);
    const user = db.createUser(username, passHash, email);
    logIn(req, res, user.id, (err) => {
      if (err) return next(err);
      res.redirect('/');
    });
  } catch (err) {
    next(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.userId) return res.redirect('/');
  res.send(loginPage(null));
});

router.post('/login', async (req, res, next) => {
  try {
    if (req.session.userId) return res.redirect('/');
    const username = (req.body.username || '').trim();
    const password = req.body.password || '';

    const user = db.findUserByUsername(username);
    const ok = user ? await bcrypt.compare(password, user.pass_hash) : false;
    if (!ok) {
      // Generic message: never reveal whether the username exists.
      return res.status(401).send(loginPage('Invalid username or password.'));
    }

    logIn(req, res, user.id, (err) => {
      if (err) return next(err);
      res.redirect('/');
    });
  } catch (err) {
    next(err);
  }
});

router.post('/logout', (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.clearCookie('acc101.sid');
    res.redirect('/');
  });
});

/* ---------------- forgot / reset password ---------------- */

/*
 * In-memory guard for POST /forgot-password: max 5 requests per hour per
 * (IP + identifier) bucket. Same style as the login limiter in server.js.
 * The 429 message is generic — it reveals nothing about the account.
 */
const FORGOT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const FORGOT_MAX_REQUESTS = 5;
const forgotAttempts = new Map(); // "ip|identifier" -> { start, count }

function forgotRateLimited(req, identifier) {
  const ip = req.ip || 'unknown';
  const key = ip + '|' + (identifier || '').toLowerCase();
  const now = Date.now();
  let rec = forgotAttempts.get(key);
  if (!rec || now - rec.start > FORGOT_WINDOW_MS) {
    rec = { start: now, count: 0 };
  }
  rec.count += 1;
  forgotAttempts.set(key, rec);

  // Occasional sweep of stale entries so the map can't grow forever.
  if (forgotAttempts.size > 2000) {
    for (const [k, r] of forgotAttempts) {
      if (now - r.start > FORGOT_WINDOW_MS) forgotAttempts.delete(k);
    }
  }

  return rec.count > FORGOT_MAX_REQUESTS;
}

const FORGOT_GENERIC_INFO =
  'If an account with that information exists, a password reset link was sent to its email.';
const FORGOT_NOT_CONFIGURED_NOTE =
  'Password reset by email isn\u2019t set up yet \u2014 email collegewithoutcollege@gmail.com and we\u2019ll help you.';

router.get('/forgot-password', (req, res) => {
  if (req.session.userId) return res.redirect('/account');
  res.send(forgotPasswordPage(null, null));
});

router.post('/forgot-password', async (req, res, next) => {
  try {
    if (req.session.userId) return res.redirect('/account');
    const identifier = (req.body.identifier || '').trim();

    if (!identifier) {
      return res.status(400).send(forgotPasswordPage('Enter your username or email.', null));
    }
    if (forgotRateLimited(req, identifier)) {
      return res.status(429).send(forgotPasswordPage(
        'Too many password reset requests. Please wait a while and try again.', null));
    }

    // Look up by username first, then by email. Either way the response
    // below is identical — never reveal whether an account exists.
    const user = db.findUserByUsername(identifier)
      || db.findUserByEmail(identifier.toLowerCase());

    if (user && user.email) {
      const token = crypto.randomBytes(32).toString('hex');
      const expiresAt = new Date(Date.now() + RESET_TOKEN_TTL_MS).toISOString();
      db.createPasswordReset(user.id, hashResetToken(token), expiresAt);
      const resetUrl = req.protocol + '://' + req.get('host') +
        '/reset-password?token=' + token;
      // Only the sha256 hash is stored; the raw token appears solely in
      // this URL (and, in test mode, in the console log from lib/email.js).
      await emailLib.sendPasswordResetEmail(user.email, resetUrl);
    }

    let info = FORGOT_GENERIC_INFO;
    if (!emailLib.isEmailConfigured()) {
      info += ' ' + FORGOT_NOT_CONFIGURED_NOTE;
    }
    res.send(forgotPasswordPage(null, info));
  } catch (err) {
    next(err);
  }
});

router.get('/reset-password', (req, res) => {
  const token = (req.query.token || '').trim();
  const valid = token ? !!db.findValidResetByHash(hashResetToken(token)) : false;
  if (!valid) {
    return res.status(400).send(resetPasswordPage({
      error: 'This password reset link is invalid or has expired.',
      token: null,
      valid: false,
    }));
  }
  res.send(resetPasswordPage({ error: null, token, valid: true }));
});

router.post('/reset-password', async (req, res, next) => {
  try {
    const token = (req.body.token || '').trim();
    const password = req.body.password || '';
    const passwordConfirm = req.body.password_confirm || '';

    const reset = token ? db.findValidResetByHash(hashResetToken(token)) : null;
    if (!reset) {
      return res.status(400).send(resetPasswordPage({
        error: 'This password reset link is invalid or has expired.',
        token: null,
        valid: false,
      }));
    }

    // New-password rules are the same as signup: at least 8 characters.
    if (!password || password.length < 8) {
      return res.status(400).send(resetPasswordPage({
        error: 'Password must be at least 8 characters long.',
        token,
        valid: true,
      }));
    }
    if (password !== passwordConfirm) {
      return res.status(400).send(resetPasswordPage({
        error: 'The passwords don\u2019t match.',
        token,
        valid: true,
      }));
    }

    const passHash = await bcrypt.hash(password, BCRYPT_COST);
    db.updateUserPassword(reset.user_id, passHash);
    db.consumePasswordReset(hashResetToken(token)); // single-use
    res.send(resetPasswordPage({ error: null, token: null, valid: true, success: true }));
  } catch (err) {
    next(err);
  }
});

/* ---------------- account email (POST /account) ---------------- */

router.post('/account', requireAuth, (req, res, next) => {
  try {
    const user = db.findUserById(req.session.userId);
    if (!user) return res.redirect('/login');
    const email = (req.body.email || '').trim().toLowerCase();

    const renderError = (msg) => {
      const enrolled = db.getEnrolledCourses(user.id);
      return res.status(400).send(accountPage(user, enrolled, msg));
    };

    const errMsg = validateEmail(email);
    if (errMsg) return renderError(errMsg);

    const existing = db.findUserByEmail(email);
    if (existing && existing.id !== user.id) {
      return renderError('That email is already in use.');
    }

    db.setUserEmail(user.id, email);
    res.redirect('/account');
  } catch (err) {
    next(err);
  }
});

/** Route middleware: require a logged-in user, else redirect to /login. */
function requireAuth(req, res, next) {
  if (req.session && req.session.userId) return next();
  if (req.originalUrl.startsWith('/api/')) {
    return res.status(401).json({ error: 'Login required.' });
  }
  return res.redirect('/login');
}

module.exports = { router, requireAuth };
