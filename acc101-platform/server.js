'use strict';

const path = require('node:path');
const express = require('express');
const session = require('express-session');

const db = require('./db');
const { router: authRouter } = require('./routes/auth');
const pagesRouter = require('./routes/pages');
const apiRouter = require('./routes/api');
const { notFoundPage, errorPage } = require('./views/auth');
const { loginPage } = require('./views/auth');

// Fail fast with a clear message if the ACC 101 course content is missing
// (content is authored in parallel and moved into content/courses/acc101/).
require('./content/courses').requireCourse('acc101');

const app = express();
app.set('trust proxy', 1);

/* ---------------- request parsing + static assets ---------------- */

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

/* ---------------- sessions (SQLite-backed) ---------------- */

const SESSION_SECRET = process.env.SESSION_SECRET;
if (!SESSION_SECRET || SESSION_SECRET === 'change-me-to-a-long-random-string') {
  console.warn(
    '[acc101] WARNING: SESSION_SECRET is not set (or is the default placeholder). ' +
    'Set a long random SESSION_SECRET in production — sessions are insecure without it.'
  );
}

app.use(session({
  name: 'acc101.sid',
  secret: SESSION_SECRET || 'dev-only-insecure-secret-change-me',
  store: db.createSessionStore(session),
  resave: false,
  saveUninitialized: false,
  rolling: true,
  cookie: {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.COOKIE_SECURE === 'true',
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  },
}));

/* ---------------- login rate limiter (in-memory) ---------------- */

const LOGIN_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const LOGIN_MAX_ATTEMPTS = 8;
const loginAttempts = new Map(); // ip -> { start, count }

function loginRateLimiter(req, res, next) {
  if (!(req.method === 'POST' && req.path === '/login')) return next();
  const ip = req.ip || 'unknown';
  const now = Date.now();
  let rec = loginAttempts.get(ip);
  if (!rec || now - rec.start > LOGIN_WINDOW_MS) {
    rec = { start: now, count: 0 };
  }
  rec.count += 1;
  loginAttempts.set(ip, rec);

  // Occasional sweep of stale entries so the map can't grow forever.
  if (loginAttempts.size > 2000) {
    for (const [key, r] of loginAttempts) {
      if (now - r.start > LOGIN_WINDOW_MS) loginAttempts.delete(key);
    }
  }

  if (rec.count > LOGIN_MAX_ATTEMPTS) {
    return res.status(429).send(
      loginPage('Too many login attempts from this address. Please wait 15 minutes and try again.')
    );
  }
  return next();
}
app.use(loginRateLimiter);

/* ---------------- routers ---------------- */

app.use(authRouter);          // /signup, /login, /logout (+ requireAuth helper)
app.use('/api', apiRouter);   // JSON API, all requireAuth
app.use(pagesRouter);         // /, /dashboard, /modules/*, /exams, /labs, /gradebook, /videos

/* ---------------- 404 + error handlers ---------------- */

app.use((req, res) => {
  let user = null;
  let enrolled = [];
  try {
    if (req.session && req.session.userId) {
      user = db.findUserById(req.session.userId);
      if (user) enrolled = db.getEnrolledCourses(user.id);
    }
  } catch (err) { /* ignore */ }
  res.status(404).send(notFoundPage(user, { enrolled }));
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error('[acc101] request error:', err);
  let user = null;
  let enrolled = [];
  try {
    if (req.session && req.session.userId) {
      user = db.findUserById(req.session.userId);
      if (user) enrolled = db.getEnrolledCourses(user.id);
    }
  } catch (lookupErr) { /* ignore */ }
  const status = err.status || 500;
  res.status(status).send(errorPage(user, status,
    status === 500 ? 'An unexpected error occurred. Please try again.' : err.message,
    { enrolled }));
});

/* ---------------- start ---------------- */

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
  console.log('College Without College listening on port ' + PORT);
});

module.exports = app;
