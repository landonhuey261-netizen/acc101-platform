'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db');
const { signupPage, loginPage } = require('../views/auth');

const router = express.Router();

const BCRYPT_COST = 12;
const USERNAME_RE = /^[A-Za-z0-9_]{3,20}$/;

function validateSignup(username, password) {
  if (!USERNAME_RE.test(username || '')) {
    return 'Username must be 3\u201320 characters: letters, numbers, and underscores only.';
  }
  if (!password || password.length < 8) {
    return 'Password must be at least 8 characters long.';
  }
  return null;
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

    const errMsg = validateSignup(username, password);
    if (errMsg) return res.status(400).send(signupPage(errMsg));

    if (db.findUserByUsername(username)) {
      return res.status(409).send(signupPage('That username is already taken. Try another one, or log in.'));
    }

    const passHash = await bcrypt.hash(password, BCRYPT_COST);
    const user = db.createUser(username, passHash);
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

/** Route middleware: require a logged-in user, else redirect to /login. */
function requireAuth(req, res, next) {
  if (req.session && req.session.userId) return next();
  if (req.originalUrl.startsWith('/api/')) {
    return res.status(401).json({ error: 'Login required.' });
  }
  return res.redirect('/login');
}

module.exports = { router, requireAuth };
