'use strict';

/**
 * db.js — persistence layer for the College Without College (multi-course).
 *
 * Uses better-sqlite3. Database lives at
 * ./data/app.db (./data is created automatically if missing).
 *
 * Tables:
 *   users(id, username UNIQUE, pass_hash, created_at, email)
 *   password_resets(id, user_id, token_hash UNIQUE, expires_at, used, created_at)
 *   courses(id, slug UNIQUE, title, description, created_at)
 *   enrollments(user_id, course_id, enrolled_at)            PK(user_id, course_id)
 *   quiz_scores(user_id, course_id, module, best, attempts, updated_at)
 *                                                          PK(user_id, course_id, module)
 *   exam_scores(user_id, course_id, exam, best, attempts, updated_at)
 *                                                          PK(user_id, course_id, exam)
 *   assignment_checks(user_id, course_id, module, checked, updated_at)
 *                                                          PK(user_id, course_id, module)
 *   module_done(user_id, course_id, module, done, updated_at)
 *                                                          PK(user_id, course_id, module)
 *   lab_scores(user_id, course_id, lab_id, best, attempts, updated_at)
 *                                                          PK(user_id, course_id, lab_id)
 *   tutor_messages(id, user_id, course_id, role, content, created_at)
 *                                  one thread per (user_id, course_id)
 *   sessions(sid, sess, expires)                           PK(sid)
 *   paywall_meta(key, value)                               PK(key) — live_at cutoff
 *   purchases(user_id, program_slug, ...)                  PK(user_id, program_slug)
 *   free_classes(user_id, course_slug, granted_at)         PK(user_id)
 *   grants(id, user_id, scope, slug, granted_by, ...)     UNIQUE(user_id, scope, slug)
 */

const path = require('node:path');
const fs = require('node:fs');
const Database = require('better-sqlite3');

const ROOT = path.resolve(__dirname);
const DATA_DIR = path.join(ROOT, 'data');
const DB_PATH = path.join(DATA_DIR, 'app.db');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const db = new Database(DB_PATH);

function tableHasColumn(table, column) {
  try {
    const info = db.prepare('PRAGMA table_info(' + table + ')').all();
    return info.some((c) => c.name === column);
  } catch (err) {
    return false;
  }
}

function tableExists(table) {
  const row = db.prepare(
    "SELECT name FROM sqlite_master WHERE type = 'table' AND name = ?"
  ).get(table);
  return !!row;
}

/* Pre-launch migration: the original single-course schema keyed progress by
 * (user_id, ...) only. If a stale database from that era exists, drop those
 * tables so the course-keyed schema below applies cleanly. */
for (const t of ['quiz_scores', 'exam_scores', 'assignment_checks', 'module_done', 'lab_scores']) {
  if (tableExists(t) && !tableHasColumn(t, 'course_id')) {
    db.exec('DROP TABLE ' + t);
  }
}

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    pass_hash TEXT NOT NULL,
    created_at TEXT NOT NULL,
    email TEXT,
    is_admin INTEGER NOT NULL DEFAULT 0
  );
  CREATE TABLE IF NOT EXISTS password_resets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    token_hash TEXT UNIQUE NOT NULL,
    expires_at TEXT NOT NULL,
    used INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL DEFAULT '',
    created_at TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS enrollments (
    user_id INTEGER NOT NULL,
    course_id INTEGER NOT NULL,
    enrolled_at TEXT NOT NULL,
    PRIMARY KEY (user_id, course_id)
  );
  CREATE TABLE IF NOT EXISTS quiz_scores (
    user_id INTEGER NOT NULL,
    course_id INTEGER NOT NULL,
    module INTEGER NOT NULL,
    best REAL NOT NULL DEFAULT 0,
    attempts INTEGER NOT NULL DEFAULT 0,
    updated_at TEXT NOT NULL,
    PRIMARY KEY (user_id, course_id, module)
  );
  CREATE TABLE IF NOT EXISTS exam_scores (
    user_id INTEGER NOT NULL,
    course_id INTEGER NOT NULL,
    exam TEXT NOT NULL,
    best REAL NOT NULL DEFAULT 0,
    attempts INTEGER NOT NULL DEFAULT 0,
    updated_at TEXT NOT NULL,
    PRIMARY KEY (user_id, course_id, exam)
  );
  CREATE TABLE IF NOT EXISTS assignment_checks (
    user_id INTEGER NOT NULL,
    course_id INTEGER NOT NULL,
    module INTEGER NOT NULL,
    checked TEXT NOT NULL DEFAULT '[]',
    updated_at TEXT NOT NULL,
    PRIMARY KEY (user_id, course_id, module)
  );
  CREATE TABLE IF NOT EXISTS module_done (
    user_id INTEGER NOT NULL,
    course_id INTEGER NOT NULL,
    module INTEGER NOT NULL,
    done INTEGER NOT NULL DEFAULT 0,
    updated_at TEXT NOT NULL,
    PRIMARY KEY (user_id, course_id, module)
  );
  CREATE TABLE IF NOT EXISTS lab_scores (
    user_id INTEGER NOT NULL,
    course_id INTEGER NOT NULL,
    lab_id TEXT NOT NULL,
    best REAL NOT NULL DEFAULT 0,
    attempts INTEGER NOT NULL DEFAULT 0,
    updated_at TEXT NOT NULL,
    PRIMARY KEY (user_id, course_id, lab_id)
  );
  CREATE TABLE IF NOT EXISTS guide_views (
    user_id INTEGER NOT NULL,
    course_id INTEGER NOT NULL,
    guide_id TEXT NOT NULL,
    viewed_at TEXT NOT NULL,
    PRIMARY KEY (user_id, course_id, guide_id)
  );
  CREATE TABLE IF NOT EXISTS sessions (
    sid TEXT PRIMARY KEY,
    sess TEXT NOT NULL,
    expires INTEGER NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_sessions_expires ON sessions (expires);
  CREATE TABLE IF NOT EXISTS tutor_messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    course_id INTEGER NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
    content TEXT NOT NULL,
    created_at TEXT NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_tutor_messages_user_course ON tutor_messages (user_id, course_id, id);
  CREATE TABLE IF NOT EXISTS paywall_meta (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS purchases (
    user_id INTEGER NOT NULL,
    program_slug TEXT NOT NULL,
    stripe_session_id TEXT,
    amount_cents INTEGER NOT NULL DEFAULT 5000,
    purchased_at TEXT NOT NULL,
    PRIMARY KEY (user_id, program_slug)
  );
  CREATE TABLE IF NOT EXISTS free_classes (
    user_id INTEGER PRIMARY KEY,
    course_slug TEXT NOT NULL,
    granted_at TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS grants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    scope TEXT NOT NULL CHECK (scope IN ('program', 'course')),
    slug TEXT NOT NULL,
    granted_by INTEGER,
    granted_at TEXT NOT NULL,
    UNIQUE (user_id, scope, slug)
  );
`);

// Migration: admin flag on users (added after the paywall work; older DBs
// gain the column here, new DBs get it from the CREATE TABLE above).
// tableHasColumn guards the ALTER so existing databases migrate cleanly.
if (!tableHasColumn('users', 'is_admin')) {
  db.exec('ALTER TABLE users ADD COLUMN is_admin INTEGER NOT NULL DEFAULT 0');
}

// Migration: email on users (added with the password-reset work; older DBs
// gain the column here, new DBs get it from the CREATE TABLE above).
// tableHasColumn guards the ALTER so existing databases migrate cleanly.
if (!tableHasColumn('users', 'email')) {
  db.exec('ALTER TABLE users ADD COLUMN email TEXT');
}

// One email per account, case-insensitively. Expression index on
// LOWER(email); NULL emails (accounts created before email existed) are
// distinct in SQLite, so old accounts are unaffected.
db.exec('CREATE UNIQUE INDEX IF NOT EXISTS idx_users_email_lower ON users (LOWER(email))');

function nowIso() {
  return new Date().toISOString();
}

/* ------------------------------------------------------------------ */
/* Courses + enrollments                                              */
/* ------------------------------------------------------------------ */

const ACC101_DEFAULT_TITLE = 'ACC 101: Principles of Financial Accounting';
const ACC101_DEFAULT_DESC =
  'A full-semester-style Principles of Financial Accounting course: the accounting cycle, ' +
  'merchandising, inventory, receivables, long-term assets, liabilities, equity, cash flows, ' +
  'and financial statement analysis.';

// Seed one courses row per discovered course directory (content/courses/<slug>),
// preferring title/description from each course's content metadata. Runs with
// ON CONFLICT DO NOTHING so existing rows are never overwritten. Falls back to
// seeding the ACC 101 defaults when content discovery fails, so the server's
// requireCourse('acc101') startup check still reports missing content clearly.
(function seedCourses() {
  const insert = db.prepare(
    'INSERT INTO courses (slug, title, description, created_at) VALUES (?, ?, ?, ?)' +
    ' ON CONFLICT(slug) DO NOTHING'
  );
  let seeded = false;
  try {
    // eslint-disable-next-line global-require
    const courses = require('./content/courses.js');
    for (const course of courses.listCourses()) {
      if (course && course.slug && course.title) {
        insert.run(course.slug, course.title, course.description || '', nowIso());
        seeded = true;
      }
    }
  } catch (err) {
    // Discovery failed; fall through to the ACC 101 default seed below.
  }
  if (!seeded) {
    insert.run('acc101', ACC101_DEFAULT_TITLE, ACC101_DEFAULT_DESC, nowIso());
  }
})();

const stmtCourseBySlug = db.prepare('SELECT * FROM courses WHERE slug = ?');
const stmtCourseById = db.prepare('SELECT * FROM courses WHERE id = ?');

function getCourseRow(slug) {
  return stmtCourseBySlug.get(slug) || null;
}

function getCourseId(slug) {
  const row = getCourseRow(slug);
  return row ? row.id : null;
}

function getCourseSlugById(courseId) {
  const row = stmtCourseById.get(courseId);
  return row ? row.slug : null;
}

const stmtEnroll = db.prepare(
  'INSERT INTO enrollments (user_id, course_id, enrolled_at) VALUES (?, ?, ?)' +
  ' ON CONFLICT(user_id, course_id) DO NOTHING'
);
const stmtIsEnrolled = db.prepare(
  'SELECT 1 FROM enrollments WHERE user_id = ? AND course_id = ?'
);
const stmtEnrolledCourses = db.prepare(
  'SELECT c.id, c.slug, c.title, c.description, e.enrolled_at' +
  ' FROM enrollments e JOIN courses c ON c.id = e.course_id' +
  ' WHERE e.user_id = ? ORDER BY e.enrolled_at ASC'
);

/** Enroll a user in a course (by slug). Returns the course id. */
function enrollUser(userId, courseSlug) {
  const courseId = getCourseId(courseSlug);
  if (!courseId) throw new Error('Cannot enroll: unknown course slug "' + courseSlug + '".');
  stmtEnroll.run(userId, courseId, nowIso());
  return courseId;
}

function isEnrolled(userId, courseId) {
  return !!stmtIsEnrolled.get(userId, courseId);
}

function getEnrolledCourses(userId) {
  return stmtEnrolledCourses.all(userId);
}

/* ------------------------------------------------------------------ */
/* Users                                                              */
/* ------------------------------------------------------------------ */

const stmtCreateUser = db.prepare(
  'INSERT INTO users (username, pass_hash, created_at, email) VALUES (?, ?, ?, ?)'
);
const stmtFindUserByName = db.prepare('SELECT * FROM users WHERE username = ?');
const stmtFindUserById = db.prepare('SELECT * FROM users WHERE id = ?');
const stmtFindUserByEmail = db.prepare('SELECT * FROM users WHERE LOWER(email) = LOWER(?)');

/**
 * Create a user. `email` is optional (older call sites pass only username
 * and pass_hash); when given it should already be trimmed and lowercased.
 */
function createUser(username, passHash, email) {
  stmtCreateUser.run(username, passHash, nowIso(), email || null);
  const user = stmtFindUserByName.get(username);
  // No auto-enroll: a new account starts with zero enrollments, so their
  // first explicit enrollment is their free class (see paywall below).
  return user;
}

function findUserByUsername(username) {
  return stmtFindUserByName.get(username) || null;
}

function findUserById(id) {
  return stmtFindUserById.get(id) || null;
}

/** Case-insensitive email lookup. Returns null when no account has it. */
function findUserByEmail(email) {
  if (!email) return null;
  return stmtFindUserByEmail.get(email) || null;
}

/** Set (or replace) the email on an account. `email` should already be trimmed and lowercased. */
function setUserEmail(userId, email) {
  db.prepare('UPDATE users SET email = ? WHERE id = ?').run(email || null, userId);
  return findUserById(userId);
}

/** Replace the stored password hash for an account. */
function updateUserPassword(userId, passHash) {
  db.prepare('UPDATE users SET pass_hash = ? WHERE id = ?').run(passHash, userId);
}

/* ------------------------------------------------------------------ */
/* Password resets                                                     */
/*                                                                     */
/* Only the sha256 hash of a token is ever stored. Tokens expire after */
/* 1 hour and are single-use (consumed on a successful reset).         */
/* ------------------------------------------------------------------ */

function createPasswordReset(userId, tokenHash, expiresAt) {
  db.prepare(
    'INSERT INTO password_resets (user_id, token_hash, expires_at, created_at)' +
    ' VALUES (?, ?, ?, ?)'
  ).run(userId, tokenHash, expiresAt, nowIso());
  return db.prepare(
    'SELECT * FROM password_resets WHERE token_hash = ?'
  ).get(tokenHash);
}

/**
 * The reset row for a token hash, but only while it is still valid:
 * unused and not yet expired. Returns null for unknown, used, or
 * expired tokens — callers must not distinguish between those cases.
 */
function findValidResetByHash(tokenHash) {
  const row = db.prepare(
    'SELECT * FROM password_resets WHERE token_hash = ? AND used = 0 AND expires_at > ?'
  ).get(tokenHash, nowIso());
  return row || null;
}

/** Mark a reset token used (single-use). Idempotent. */
function consumePasswordReset(tokenHash) {
  db.prepare(
    'UPDATE password_resets SET used = 1 WHERE token_hash = ?'
  ).run(tokenHash);
}

/* ------------------------------------------------------------------ */
/* Paywall: $50 per program, first class free, grandfathering          */
/*                                                                     */
/* Grandfathering uses a first-boot cutoff: the first time the server  */
/* starts (or the first paywall check), the current time is stored as  */
/* paywall_meta.live_at. A user whose account predates that moment     */
/* keeps full access to everything, free, forever. No existing table   */
/* data is altered and no date is hardcoded, so a slipped deploy date  */
/* can't mis-grandfather anyone.                                       */
/* ------------------------------------------------------------------ */

/** Store the first-boot cutoff if it isn't stored yet. Safe under concurrent boots. */
function ensurePaywallLiveAt() {
  db.prepare(
    'INSERT OR IGNORE INTO paywall_meta (key, value) VALUES (?, ?)'
  ).run('live_at', nowIso());
  const row = db.prepare("SELECT value FROM paywall_meta WHERE key = 'live_at'").get();
  return row ? row.value : null;
}

function getPaywallLiveAt() {
  const row = db.prepare("SELECT value FROM paywall_meta WHERE key = 'live_at'").get();
  return row ? row.value : null;
}

/** True when the user's account predates the paywall going live. */
function isGrandfathered(userId) {
  const user = findUserById(userId);
  if (!user) return false;
  const liveAt = ensurePaywallLiveAt();
  if (!liveAt) return false;
  return user.created_at < liveAt;
}

function hasPurchased(userId, programSlug) {
  const row = db.prepare(
    'SELECT 1 FROM purchases WHERE user_id = ? AND program_slug = ?'
  ).get(userId, programSlug);
  return !!row;
}

/** Record a verified program purchase. Replays of the same purchase are no-ops. */
function recordPurchase(userId, programSlug, stripeSessionId, amountCents) {
  db.prepare(
    'INSERT INTO purchases (user_id, program_slug, stripe_session_id, amount_cents, purchased_at)' +
    ' VALUES (?, ?, ?, ?, ?)' +
    ' ON CONFLICT(user_id, program_slug) DO NOTHING'
  ).run(userId, programSlug, stripeSessionId || null,
    Number.isInteger(amountCents) ? amountCents : 5000, nowIso());
}

/** Program slugs this user has bought. */
function getOwnedPrograms(userId) {
  return db.prepare(
    'SELECT program_slug FROM purchases WHERE user_id = ? ORDER BY purchased_at ASC'
  ).all(userId).map((r) => r.program_slug);
}

/** The user's free-class row, or null when it hasn't been used yet. One row per user, max. */
function getFreeClass(userId) {
  return db.prepare(
    'SELECT * FROM free_classes WHERE user_id = ?'
  ).get(userId) || null;
}

/** Consume the user's free class on a course. Throws if it was already used. */
function grantFreeClass(userId, courseSlug) {
  const existing = getFreeClass(userId);
  if (existing) throw new Error('Free class already used.');
  db.prepare(
    'INSERT INTO free_classes (user_id, course_slug, granted_at) VALUES (?, ?, ?)'
  ).run(userId, courseSlug, nowIso());
  return getFreeClass(userId);
}

/* ------------------------------------------------------------------ */
/* Admin accounts + free grants                                        */
/*                                                                     */
/* The site owner's admin account has full free access to everything and */
/* can grant free programs or single courses to any user from the      */
/* admin panel. Admins are bootstrapped from the ADMIN_USERNAME env    */
/* var (comma-separated usernames) — no username is ever hardcoded.    */
/* ------------------------------------------------------------------ */

/** Usernames listed in ADMIN_USERNAME, comma-separated, trimmed. */
function adminUsernames() {
  const raw = process.env.ADMIN_USERNAME || '';
  return raw.split(',').map((s) => s.trim()).filter(Boolean);
}

function setAdmin(userId) {
  db.prepare('UPDATE users SET is_admin = 1 WHERE id = ?').run(userId);
}

/**
 * Stamp is_admin = 1 on every existing user whose username is in the
 * ADMIN_USERNAME list. Called on server start. Returns how many users
 * were stamped. Safe to call repeatedly (idempotent).
 */
function bootstrapAdmins() {
  let stamped = 0;
  for (const name of adminUsernames()) {
    const user = findUserByUsername(name);
    if (user && user.is_admin !== 1) {
      setAdmin(user.id);
      stamped += 1;
    }
  }
  return stamped;
}

/**
 * True when the user is an admin. Checks the is_admin flag first; a live
 * ADMIN_USERNAME match also counts (and stamps the flag) so admin works
 * immediately even if the flag hasn't been stamped yet.
 */
function isAdmin(userId) {
  const user = findUserById(userId);
  if (!user) return false;
  if (user.is_admin === 1) return true;
  if (adminUsernames().indexOf(user.username) !== -1) {
    setAdmin(user.id);
    return true;
  }
  return false;
}

/** Grant a user free access to a program or a single course. Idempotent. */
function grantAccess(userId, scope, slug, grantedBy) {
  if (scope !== 'program' && scope !== 'course') {
    throw new Error('Invalid grant scope: ' + scope);
  }
  db.prepare(
    'INSERT OR IGNORE INTO grants (user_id, scope, slug, granted_by, granted_at)' +
    ' VALUES (?, ?, ?, ?, ?)'
  ).run(userId, scope, slug, grantedBy || null, nowIso());
  return db.prepare(
    'SELECT * FROM grants WHERE user_id = ? AND scope = ? AND slug = ?'
  ).get(userId, scope, slug);
}

function revokeGrant(grantId) {
  db.prepare('DELETE FROM grants WHERE id = ?').run(grantId);
}

/** Every grant, newest first, with usernames resolved for the panel. */
function listGrants() {
  return db.prepare(
    'SELECT g.id, g.user_id, g.scope, g.slug, g.granted_by, g.granted_at,' +
    ' u.username AS username, a.username AS granted_by_name' +
    ' FROM grants g JOIN users u ON u.id = g.user_id' +
    ' LEFT JOIN users a ON a.id = g.granted_by' +
    ' ORDER BY g.granted_at DESC, g.id DESC'
  ).all();
}

/**
 * True when a grant covers this course: a course grant for the exact
 * course slug, or a program grant for the program the course belongs to.
 */
function grantCoversCourse(userId, courseSlug) {
  const direct = db.prepare(
    "SELECT 1 FROM grants WHERE user_id = ? AND scope = 'course' AND slug = ?"
  ).get(userId, courseSlug);
  if (direct) return true;
  try {
    // eslint-disable-next-line global-require
    const program = require('./lib/program');
    const found = program.programOf(courseSlug);
    if (!found) return false;
    const progSlug = program.programSlug(found.program);
    const row = db.prepare(
      "SELECT 1 FROM grants WHERE user_id = ? AND scope = 'program' AND slug = ?"
    ).get(userId, progSlug);
    return !!row;
  } catch (err) {
    return false;
  }
}

/** Alias used by the enrollment gate. */
function hasGrant(userId, courseSlug) {
  return grantCoversCourse(userId, courseSlug);
}

/** True when the user holds a program grant for this exact program. */
function hasProgramGrant(userId, programSlug) {
  const row = db.prepare(
    "SELECT 1 FROM grants WHERE user_id = ? AND scope = 'program' AND slug = ?"
  ).get(userId, programSlug);
  return !!row;
}

/** Program slugs this user holds a grant for. */
function getGrantedPrograms(userId) {
  return db.prepare(
    "SELECT slug FROM grants WHERE user_id = ? AND scope = 'program' ORDER BY granted_at ASC"
  ).all(userId).map((r) => r.slug);
}

/* ------------------------------------------------------------------ */
/* Score / progress writers (all keyed by course)                      */
/* ------------------------------------------------------------------ */

function upsert(table, cols, values) {
  const placeholders = cols.map(() => '?').join(', ');
  const keyCols = tableConflictKey(table);
  const sets = cols
    .filter((c) => keyCols.indexOf(c) === -1)
    .map((c) => c + ' = excluded.' + c)
    .join(', ');
  const sql = 'INSERT INTO ' + table + ' (' + cols.join(', ') + ') VALUES (' + placeholders + ')' +
    ' ON CONFLICT(' + keyCols.join(', ') + ') DO UPDATE SET ' + sets;
  db.prepare(sql).run(...values);
}

function tableConflictKey(table) {
  switch (table) {
    case 'quiz_scores': return ['user_id', 'course_id', 'module'];
    case 'exam_scores': return ['user_id', 'course_id', 'exam'];
    case 'assignment_checks': return ['user_id', 'course_id', 'module'];
    case 'module_done': return ['user_id', 'course_id', 'module'];
    case 'lab_scores': return ['user_id', 'course_id', 'lab_id'];
    default: throw new Error('Unknown table for upsert: ' + table);
  }
}

/** Save a quiz best score (percent). Keeps the higher of the old/new best. */
function saveQuizScore(userId, courseId, moduleNum, percent) {
  const row = db.prepare(
    'SELECT best, attempts FROM quiz_scores WHERE user_id = ? AND course_id = ? AND module = ?'
  ).get(userId, courseId, moduleNum);
  const best = row ? Math.max(row.best, percent) : percent;
  const attempts = row ? row.attempts + 1 : 1;
  upsert('quiz_scores', ['user_id', 'course_id', 'module', 'best', 'attempts', 'updated_at'],
    [userId, courseId, moduleNum, best, attempts, nowIso()]);
  return { best, attempts };
}

/** Save an exam best score (percent). Keeps the higher of the old/new best. */
function saveExamScore(userId, courseId, exam, percent) {
  const row = db.prepare(
    'SELECT best, attempts FROM exam_scores WHERE user_id = ? AND course_id = ? AND exam = ?'
  ).get(userId, courseId, exam);
  const best = row ? Math.max(row.best, percent) : percent;
  const attempts = row ? row.attempts + 1 : 1;
  upsert('exam_scores', ['user_id', 'course_id', 'exam', 'best', 'attempts', 'updated_at'],
    [userId, courseId, exam, best, attempts, nowIso()]);
  return { best, attempts };
}

/** Save lab best score (percent). Keeps the higher of the old/new best. */
function saveLabScore(userId, courseId, labId, percent) {
  const row = db.prepare(
    'SELECT best, attempts FROM lab_scores WHERE user_id = ? AND course_id = ? AND lab_id = ?'
  ).get(userId, courseId, labId);
  const best = row ? Math.max(row.best, percent) : percent;
  const attempts = row ? row.attempts + 1 : 1;
  upsert('lab_scores', ['user_id', 'course_id', 'lab_id', 'best', 'attempts', 'updated_at'],
    [userId, courseId, labId, best, attempts, nowIso()]);
  return { best, attempts };
}

/** Save the assignment self-check array for a module. */
function saveAssignmentChecks(userId, courseId, moduleNum, checkedArray) {
  upsert('assignment_checks', ['user_id', 'course_id', 'module', 'checked', 'updated_at'],
    [userId, courseId, moduleNum, JSON.stringify(checkedArray), nowIso()]);
}

/** Mark a module complete. */
function setModuleDone(userId, courseId, moduleNum, done) {
  upsert('module_done', ['user_id', 'course_id', 'module', 'done', 'updated_at'],
    [userId, courseId, moduleNum, done ? 1 : 0, nowIso()]);
}

/* ------------------------------------------------------------------ */
/* Score / progress readers (all keyed by course)                      */
/* ------------------------------------------------------------------ */

function getQuizScores(userId, courseId) {
  return db.prepare(
    'SELECT module, best, attempts FROM quiz_scores WHERE user_id = ? AND course_id = ?'
  ).all(userId, courseId);
}

function getExamScores(userId, courseId) {
  return db.prepare(
    'SELECT exam, best, attempts FROM exam_scores WHERE user_id = ? AND course_id = ?'
  ).all(userId, courseId);
}

function getAssignmentChecks(userId, courseId) {
  return db.prepare(
    'SELECT module, checked FROM assignment_checks WHERE user_id = ? AND course_id = ?'
  ).all(userId, courseId);
}

function getModuleDone(userId, courseId) {
  return db.prepare(
    'SELECT module, done FROM module_done WHERE user_id = ? AND course_id = ?'
  ).all(userId, courseId);
}

function recordGuideView(userId, courseId, guideId) {
  db.prepare(
    'INSERT OR IGNORE INTO guide_views (user_id, course_id, guide_id, viewed_at) VALUES (?, ?, ?, ?)'
  ).run(userId, courseId, guideId, nowIso());
}

function getGuideViews(userId, courseId) {
  return db.prepare(
    'SELECT guide_id FROM guide_views WHERE user_id = ? AND course_id = ?'
  ).all(userId, courseId);
}

function getLabScores(userId, courseId) {
  return db.prepare(
    'SELECT lab_id, best, attempts FROM lab_scores WHERE user_id = ? AND course_id = ?'
  ).all(userId, courseId);
}

/**
 * True once the user has ANY saved progress anywhere (a quiz, exam,
 * assignment self-check, completed module, or lab score). Used to decide
 * whether the "How this works" onboarding card should be shown.
 * Single query — no per-table round trips.
 */
const stmtHasAnyProgress = db.prepare(
  'SELECT 1 FROM quiz_scores WHERE user_id = ? UNION ALL ' +
  'SELECT 1 FROM exam_scores WHERE user_id = ? UNION ALL ' +
  'SELECT 1 FROM assignment_checks WHERE user_id = ? UNION ALL ' +
  'SELECT 1 FROM module_done WHERE user_id = ? UNION ALL ' +
  'SELECT 1 FROM lab_scores WHERE user_id = ? LIMIT 1'
);

function hasAnyProgress(userId) {
  return !!stmtHasAnyProgress.get(userId, userId, userId, userId, userId);
}

/* ------------------------------------------------------------------ */
/* Course Tutor conversation history (one thread per user + course)    */
/* ------------------------------------------------------------------ */

const stmtSaveTutorMessage = db.prepare(
  'INSERT INTO tutor_messages (user_id, course_id, role, content, created_at)' +
  ' VALUES (?, ?, ?, ?, ?)'
);

/** Append one message to the (user_id, course_id) tutor thread. */
function saveTutorMessage(userId, courseId, role, content) {
  if (role !== 'user' && role !== 'assistant') {
    throw new Error('Invalid tutor message role: ' + role);
  }
  stmtSaveTutorMessage.run(userId, courseId, role, String(content == null ? '' : content), nowIso());
}

/**
 * Recent tutor thread messages for (user_id, course_id), returned in
 * chronological order (oldest first), capped at `limit`.
 */
function getTutorHistory(userId, courseId, limit) {
  const n = Math.max(1, Math.min(500, Number(limit) || 50));
  const rows = db.prepare(
    'SELECT role, content, created_at FROM tutor_messages' +
    ' WHERE user_id = ? AND course_id = ? ORDER BY id DESC LIMIT ?'
  ).all(userId, courseId, n);
  rows.reverse(); // oldest first
  return rows;
}

/* ------------------------------------------------------------------ */
/* Grade computation (per course)                                      */
/*                                                                     */
/* Weights:  Assignments component 25% ( = 0.7 * assignment self-check  */
/*           avg + 0.3 * lab avg ), Quizzes 25%, Midterm 20%,           */
/*           Final 30%. Missing items count as 0.                       */
/* ------------------------------------------------------------------ */

const MODULE_COUNT = 12;

function letterGrade(total) {
  if (total >= 90) return 'A';
  if (total >= 80) return 'B';
  if (total >= 70) return 'C';
  if (total >= 60) return 'D';
  return 'F';
}

function round1(x) {
  return Math.round(x * 10) / 10;
}

/** Labs for a course, loaded tolerantly (missing course content -> empty). */
function courseLabs(courseId) {
  try {
    const slug = getCourseSlugById(courseId);
    if (!slug) return [];
    // eslint-disable-next-line global-require
    const courses = require('./content/courses.js');
    const course = courses.getCourse(slug);
    return (course && course.labs) || [];
  } catch (err) {
    return [];
  }
}

/**
 * Fetch every progress row for one user across several courses in exactly
 * 5 queries (one per progress table), so multi-course pages like home never
 * do N+1 per-course queries. courseIds are validated as positive integers
 * before being interpolated into the IN list.
 */
function progressRowsFor(userId, courseIds) {
  const ids = [...new Set((courseIds || []).map(Number))]
    .filter((n) => Number.isInteger(n) && n > 0);
  const empty = { quiz: [], assign: [], done: [], exam: [], lab: [] };
  if (ids.length === 0) return empty;
  const inList = ids.map(() => '?').join(', ');
  const by = (table, cols) => db.prepare(
    'SELECT ' + cols + ' FROM ' + table +
    ' WHERE user_id = ? AND course_id IN (' + inList + ')'
  ).all(userId, ...ids);
  return {
    quiz: by('quiz_scores', 'course_id, module, best, attempts'),
    assign: by('assignment_checks', 'course_id, module, checked'),
    done: by('module_done', 'course_id, module, done'),
    exam: by('exam_scores', 'course_id, exam, best, attempts'),
    lab: by('lab_scores', 'course_id, lab_id, best, attempts'),
  };
}

/**
 * Pure grade computation from pre-fetched progress rows.
 * rows: { quiz, assign, done, exam, lab } — each an array of row objects
 * for ONE course (as returned by the get* readers or progressRowsFor).
 */
function gradeFromRows(courseId, rows) {
  const quizRows = rows.quiz || [];
  const assignRows = rows.assign || [];
  const doneRows = rows.done || [];
  const examRows = rows.exam || [];
  const labRows = rows.lab || [];

  const quizByModule = {};
  for (const r of quizRows) quizByModule[r.module] = r.best;

  const assignByModule = {};
  for (const r of assignRows) assignByModule[r.module] = r.checked;

  const doneByModule = {};
  for (const r of doneRows) doneByModule[r.module] = r.done === 1;

  const examByName = {};
  for (const r of examRows) examByName[r.exam] = r.best;

  const labById = {};
  for (const r of labRows) labById[r.lab_id] = r.best;

  // Quiz average: mean of best quiz % over modules 1..12 (missing = 0).
  let quizSum = 0;
  for (let n = 1; n <= MODULE_COUNT; n += 1) {
    quizSum += quizByModule[n] || 0;
  }
  const quizAvg = quizSum / MODULE_COUNT;

  // Assignment average: mean over modules of checked/total (missing = 0).
  const perModule = [];
  let assignSum = 0;
  for (let n = 1; n <= MODULE_COUNT; n += 1) {
    let assignPct = 0;
    const raw = assignByModule[n];
    if (typeof raw === 'string' && raw.length > 0) {
      try {
        const arr = JSON.parse(raw);
        if (Array.isArray(arr) && arr.length > 0) {
          const checkedCount = arr.filter(Boolean).length;
          assignPct = (checkedCount / arr.length) * 100;
        }
      } catch (err) {
        assignPct = 0;
      }
    }
    assignSum += assignPct;
    perModule.push({
      module: n,
      quiz: round1(quizByModule[n] || 0),
      assignPct: round1(assignPct),
      done: !!doneByModule[n],
    });
  }
  const assignAvg = assignSum / MODULE_COUNT;

  // Lab average: mean of best lab % over the course's lab ids (missing = 0).
  const labs = courseLabs(courseId);
  const labDetails = [];
  let labSum = 0;
  for (const lab of labs) {
    const best = labById[lab.id] || 0;
    labSum += best;
    labDetails.push({ id: lab.id, title: lab.title, best: round1(best) });
  }
  const labAvg = labs.length > 0 ? labSum / labs.length : 0;

  const assignComponent = 0.7 * assignAvg + 0.3 * labAvg;
  const midterm = examByName.midterm || 0;
  const final = examByName.final || 0;

  const total = 0.25 * assignComponent + 0.25 * quizAvg + 0.20 * midterm + 0.30 * final;

  return {
    total: round1(total),
    letter: letterGrade(total),
    quizAvg: round1(quizAvg),
    assignAvg: round1(assignAvg),
    labAvg: round1(labAvg),
    midterm: round1(midterm),
    final: round1(final),
    perModule,
    labs: labDetails,
  };
}

/** Per-course grade for a single course (5 small queries). */
function computeGrade(userId, courseId) {
  return computeGrades(userId, [courseId])[courseId];
}

/**
 * Per-course grades for several courses, fetched in 5 queries TOTAL
 * (no N+1). Returns { [courseId]: grade }.
 */
function computeGrades(userId, courseIds) {
  const ids = [...new Set((courseIds || []).map(Number))]
    .filter((n) => Number.isInteger(n) && n > 0);
  const rows = progressRowsFor(userId, ids);
  const out = {};
  for (const cid of ids) {
    const pick = (arr) => arr.filter((r) => r.course_id === cid);
    out[cid] = gradeFromRows(cid, {
      quiz: pick(rows.quiz),
      assign: pick(rows.assign),
      done: pick(rows.done),
      exam: pick(rows.exam),
      lab: pick(rows.lab),
    });
  }
  return out;
}

/* ------------------------------------------------------------------ */
/* SQLite session store (for express-session)                          */
/* ------------------------------------------------------------------ */

function createSessionStore(session) {
  const stmtGet = db.prepare('SELECT sess, expires FROM sessions WHERE sid = ?');
  const stmtSet = db.prepare(
    'INSERT INTO sessions (sid, sess, expires) VALUES (?, ?, ?)' +
    ' ON CONFLICT(sid) DO UPDATE SET sess = excluded.sess, expires = excluded.expires'
  );
  const stmtDestroy = db.prepare('DELETE FROM sessions WHERE sid = ?');
  const stmtTouch = db.prepare('UPDATE sessions SET expires = ? WHERE sid = ?');
  const stmtAll = db.prepare('SELECT sid, sess FROM sessions WHERE expires > ?');
  const stmtClear = db.prepare('DELETE FROM sessions');
  const stmtLength = db.prepare('SELECT COUNT(*) AS n FROM sessions WHERE expires > ?');
  const stmtSweep = db.prepare('DELETE FROM sessions WHERE expires <= ?');

  try { stmtSweep.run(Date.now()); } catch (err) { /* ignore */ }

  function expiryFrom(sess) {
    let expires = Date.now() + 30 * 24 * 60 * 60 * 1000; // 30-day default
    if (sess && sess.cookie) {
      if (sess.cookie.expires) {
        const t = new Date(sess.cookie.expires).getTime();
        if (!Number.isNaN(t)) expires = t;
      } else if (typeof sess.cookie.maxAge === 'number') {
        expires = Date.now() + sess.cookie.maxAge;
      }
    }
    return expires;
  }

  class SQLiteStore extends session.Store {
    get(sid, cb) {
      try {
        const row = stmtGet.get(sid);
        if (!row) return cb(null, null);
        if (row.expires <= Date.now()) {
          try { stmtDestroy.run(sid); } catch (err) { /* ignore */ }
          return cb(null, null);
        }
        cb(null, JSON.parse(row.sess));
      } catch (err) {
        cb(err);
      }
    }

    set(sid, sess, cb) {
      try {
        stmtSet.run(sid, JSON.stringify(sess), expiryFrom(sess));
        if (cb) cb(null);
      } catch (err) {
        if (cb) cb(err);
      }
    }

    destroy(sid, cb) {
      try {
        stmtDestroy.run(sid);
        if (cb) cb(null);
      } catch (err) {
        if (cb) cb(err);
      }
    }

    touch(sid, sess, cb) {
      try {
        stmtTouch.run(expiryFrom(sess), sid);
        if (cb) cb(null);
      } catch (err) {
        if (cb) cb(err);
      }
    }

    all(cb) {
      try {
        const rows = stmtAll.all(Date.now());
        cb(null, rows.map((r) => JSON.parse(r.sess)));
      } catch (err) {
        cb(err);
      }
    }

    clear(cb) {
      try {
        stmtClear.run();
        if (cb) cb(null);
      } catch (err) {
        if (cb) cb(err);
      }
    }

    length(cb) {
      try {
        const row = stmtLength.get(Date.now());
        cb(null, row ? row.n : 0);
      } catch (err) {
        cb(err);
      }
    }
  }

  return new SQLiteStore();
}

module.exports = {
  db,
  // courses + enrollments
  getCourseRow,
  getCourseId,
  getCourseSlugById,
  enrollUser,
  isEnrolled,
  getEnrolledCourses,
  // users
  createUser,
  findUserByUsername,
  findUserById,
  findUserByEmail,
  setUserEmail,
  updateUserPassword,
  // password resets
  createPasswordReset,
  findValidResetByHash,
  consumePasswordReset,
  // paywall
  ensurePaywallLiveAt,
  getPaywallLiveAt,
  isGrandfathered,
  hasPurchased,
  recordPurchase,
  getOwnedPrograms,
  getFreeClass,
  grantFreeClass,
  // admin + grants
  adminUsernames,
  setAdmin,
  bootstrapAdmins,
  isAdmin,
  grantAccess,
  revokeGrant,
  listGrants,
  grantCoversCourse,
  hasGrant,
  hasProgramGrant,
  getGrantedPrograms,
  // progress
  saveQuizScore,
  saveExamScore,
  saveLabScore,
  saveAssignmentChecks,
  setModuleDone,
  getQuizScores,
  getExamScores,
  getAssignmentChecks,
  getModuleDone,
  getLabScores,
  recordGuideView,
  getGuideViews,
  computeGrade,
  computeGrades,
  hasAnyProgress,
  letterGrade,
  // tutor
  saveTutorMessage,
  getTutorHistory,
  createSessionStore,
};
