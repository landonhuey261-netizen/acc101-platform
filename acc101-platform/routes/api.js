'use strict';

const express = require('express');
const db = require('../db');
const { requireAuth } = require('./auth');
const { resolveCourse } = require('./course');
const courses = require('../content/courses');
const tutor = require('../lib/tutor');

const router = express.Router();

/**
 * All course API routes live under /api/c/:courseSlug and require both
 * authentication and enrollment in the course.
 */
const courseApi = express.Router({ mergeParams: true });
courseApi.use(requireAuth, resolveCourse);
router.use('/c/:course', courseApi);

function round1(x) {
  return Math.round(x * 10) / 10;
}

/** Normalize a submitted answer index: null or an out-of-range value → null. */
function normAnswer(v, choiceCount) {
  if (v === null || v === undefined || v === '') return null;
  const n = Number(v);
  if (!Number.isInteger(n) || n < 0 || n >= choiceCount) return null;
  return n;
}

/** Grade an answers array against a questions array. Returns counts + per-question results. */
function gradeQuestions(questions, answers) {
  let score = 0;
  const results = questions.map((q, i) => {
    const given = normAnswer(answers ? answers[i] : null, (q.choices || []).length);
    const correct = given !== null && given === q.answer;
    if (correct) score += 1;
    // `answer` (correct choice index) lets the client build tutor prompts.
    return { correct, answer: q.answer, explanation: q.explanation || '' };
  });
  return { score, total: questions.length, results };
}

/* ---------------- quizzes ---------------- */

courseApi.post('/quiz/:num', (req, res, next) => {
  try {
    const num = courses.validModuleNum(req.params.num);
    if (!num) return res.status(400).json({ error: 'Invalid module number (1-12).' });
    const mod = req.course.modules.byNumber[num];
    const questions = mod.quiz || [];
    if (!Array.isArray(req.body.answers)) {
      return res.status(400).json({ error: 'Request body must include answers: [idx|null].' });
    }
    const { score, total, results } = gradeQuestions(questions, req.body.answers);
    const percent = total > 0 ? round1((score / total) * 100) : 0;
    const saved = db.saveQuizScore(req.session.userId, req.courseId, num, percent);
    res.json({ score, total, percent, best: saved.best, results });
  } catch (err) {
    next(err);
  }
});

/* ---------------- assignments ---------------- */

courseApi.post('/assignments/:num', (req, res, next) => {
  try {
    const num = courses.validModuleNum(req.params.num);
    if (!num) return res.status(400).json({ error: 'Invalid module number (1-12).' });
    const mod = req.course.modules.byNumber[num];
    const expectedLen = (mod.assignment || []).length;
    const checked = req.body.checked;
    if (!Array.isArray(checked) || checked.length !== expectedLen) {
      return res.status(400).json({
        error: 'Request body must include checked: [bool] with ' + expectedLen + ' entries.',
      });
    }
    db.saveAssignmentChecks(req.session.userId, req.courseId, num, checked.map(Boolean));
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
});

/* ---------------- module completion ---------------- */

courseApi.post('/modules/:num/complete', (req, res, next) => {
  try {
    const num = courses.validModuleNum(req.params.num);
    if (!num) return res.status(400).json({ error: 'Invalid module number (1-12).' });
    db.setModuleDone(req.session.userId, req.courseId, num, 1);
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
});

/* ---------------- progress ---------------- */

courseApi.get('/progress', (req, res, next) => {
  try {
    const user = db.findUserById(req.session.userId);
    if (!user) return res.status(401).json({ error: 'Login required.' });
    res.json({
      user: { username: user.username },
      course: { slug: req.course.slug, title: req.course.title },
      grade: db.computeGrade(user.id, req.courseId),
    });
  } catch (err) {
    next(err);
  }
});

/* ---------------- exams ---------------- */

courseApi.post('/exams/:which', (req, res, next) => {
  try {
    const which = courses.validExam(req.course, req.params.which);
    if (!which) return res.status(400).json({ error: 'Invalid exam (midterm|final).' });
    const exam = req.course.exams[which];
    const questions = exam.questions || [];

    // Server-side time check: the exam page GET stored the start timestamp,
    // keyed by course + exam.
    const startKey = 'examStart_' + req.course.slug + '_' + which;
    const startedAt = req.session[startKey];
    if (!startedAt) {
      return res.status(400).json({ error: 'Exam session not started. Load the exam page first.' });
    }
    const elapsedSec = (Date.now() - startedAt) / 1000;
    const allowedSec = (exam.minutes || 60) * 60 + 300; // limit + 5 min grace
    if (elapsedSec > allowedSec) {
      delete req.session[startKey];
      return res.status(400).json({ error: 'Time expired. Your answers were not recorded.' });
    }

    if (!Array.isArray(req.body.answers)) {
      return res.status(400).json({ error: 'Request body must include answers: [idx|null].' });
    }
    const { score, total, results } = gradeQuestions(questions, req.body.answers);
    const percent = total > 0 ? round1((score / total) * 100) : 0;
    const saved = db.saveExamScore(req.session.userId, req.courseId, which, percent);
    delete req.session[startKey]; // one graded submission per exam page load
    const passPercent = exam.passPercent != null ? Number(exam.passPercent) : null;
    res.json({
      score, total, percent, best: saved.best, results,
      passPercent,
      verdict: passPercent != null ? (percent >= passPercent ? 'PASS' : 'BELOW STANDARD') : null,
    });
  } catch (err) {
    next(err);
  }
});

/* ---------------- labs ---------------- */

function labChecks(lab) {
  const checks = [];
  for (const row of lab.rows || []) {
    for (const inp of row.inputs || []) {
      checks.push({
        key: String(inp.key),
        expected: Number(inp.expected),
        hint: inp.hint || '',
      });
    }
  }
  return checks;
}

courseApi.post('/labs/:id', (req, res, next) => {
  try {
    const lab = courses.findLab(req.course, req.params.id);
    if (!lab) return res.status(400).json({ error: 'Unknown lab id.' });
    const values = (req.body && req.body.values) || {};
    const checks = labChecks(lab);
    if (checks.length === 0) {
      return res.status(400).json({ error: 'This lab has no checkable inputs.' });
    }
    let correctCount = 0;
    const detail = checks.map((c) => {
      const raw = values[c.key];
      const val = raw === null || raw === undefined || raw === '' ? NaN : Number(raw);
      const correct = !Number.isNaN(val) && Math.abs(val - c.expected) <= 0.01;
      if (correct) correctCount += 1;
      return { key: c.key, correct, expected: c.expected, hint: c.hint };
    });
    const percent = round1((correctCount / checks.length) * 100);
    const saved = db.saveLabScore(req.session.userId, req.courseId, lab.id, percent);
    res.json({
      score: correctCount,
      total: checks.length,
      percent,
      best: saved.best,
      detail,
    });
  } catch (err) {
    next(err);
  }
});

/* ---------------- course tutor ---------------- */

/**
 * In-memory rate limiter for the tutor chat endpoint: 20 requests per user
 * per hour, to bound API cost. Swept occasionally so the map can't grow
 * unbounded.
 */
const TUTOR_WINDOW_MS = 60 * 60 * 1000;
const TUTOR_MAX_REQUESTS = 20;
const tutorHits = new Map(); // userId -> [timestamps]

function tutorRateLimited(userId) {
  const now = Date.now();
  let hits = tutorHits.get(userId);
  if (!hits) {
    hits = [];
    tutorHits.set(userId, hits);
  }
  while (hits.length > 0 && now - hits[0] > TUTOR_WINDOW_MS) hits.shift();
  if (hits.length >= TUTOR_MAX_REQUESTS) return true;
  hits.push(now);
  if (tutorHits.size > 5000) {
    for (const [key, arr] of tutorHits) {
      while (arr.length > 0 && now - arr[0] > TUTOR_WINDOW_MS) arr.shift();
      if (arr.length === 0) tutorHits.delete(key);
    }
  }
  return false;
}

/**
 * Exam integrity: true when the session holds an unexpired exam start
 * timestamp for this course's midterm or final (exam in progress).
 */
function examInProgress(req) {
  for (const which of Object.keys(req.course.exams || {})) {
    const key = 'examStart_' + req.course.slug + '_' + which;
    const startedAt = req.session[key];
    if (!startedAt) continue;
    const exam = req.course.exams && req.course.exams[which];
    const allowedSec = ((exam && exam.minutes) || 60) * 60 + 300; // limit + grace
    if ((Date.now() - startedAt) / 1000 <= allowedSec) return true;
    delete req.session[key]; // stale timestamp — clear it
  }
  return false;
}

/** Validate/normalize the optional question context object from the client. */
function sanitizeQuestionContext(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const str = (v, max) => (typeof v === 'string' ? v.slice(0, max) : '');
  const out = {
    question: str(raw.question, 2000),
    studentAnswer: str(raw.studentAnswer, 500),
    correctAnswer: str(raw.correctAnswer, 500),
  };
  if (Array.isArray(raw.choices)) {
    out.choices = raw.choices.filter((c) => typeof c === 'string').slice(0, 8)
      .map((c) => c.slice(0, 500));
  } else {
    out.choices = [];
  }
  if (!out.question) return null;
  return out;
}

courseApi.get('/tutor/history', (req, res, next) => {
  try {
    const rows = db.getTutorHistory(req.session.userId, req.courseId, 100);
    res.json({
      available: tutor.tutorEnabled(),
      messages: rows.map((r) => ({
        role: r.role,
        content: r.content,
        created_at: r.created_at,
      })),
    });
  } catch (err) {
    next(err);
  }
});

courseApi.post('/tutor/chat', (req, res, next) => {
  try {
    const userId = req.session.userId;

    // The tutor must not be usable mid-exam. This check runs first so the
    // exam-integrity guarantee holds regardless of provider configuration.
    if (examInProgress(req)) {
      return res.status(403).json({
        error: 'tutor_blocked_during_exam',
        message: 'The Course Tutor isn\u2019t available while a timed exam is in progress.',
      });
    }

    // No API key configured — the client shows the "not connected" state.
    if (!tutor.tutorEnabled()) {
      return res.status(503).json({
        error: 'tutor_unavailable',
        message:
          'The Course Tutor isn\u2019t connected yet \u2014 ask the course owner to add an API key. ' +
          'Meanwhile, use \u201cHelp me understand\u201d to copy a prompt for your own AI assistant.',
      });
    }

    if (tutorRateLimited(userId)) {
      return res.status(429).json({
        error: 'rate_limited',
        message: 'You\u2019ve reached the tutor\u2019s hourly limit (20 questions). Please try again later.',
      });
    }

    const message = typeof req.body.message === 'string' ? req.body.message.trim() : '';
    if (!message) return res.status(400).json({ error: 'Message is required.' });
    if (message.length > 4000) {
      return res.status(400).json({ error: 'Message is too long (max 4000 characters).' });
    }

    const moduleNum = courses.validModuleNum(req.body.moduleNum);
    const questionContext = sanitizeQuestionContext(req.body.questionContext);

    // Last ~20 history messages for conversational context.
    const history = db.getTutorHistory(userId, req.courseId, 20);
    const messages = history.map((h) => ({ role: h.role, content: h.content }));
    messages.push({ role: 'user', content: message });

    const system = tutor.buildTutorSystemPrompt({
      course: req.course,
      moduleNum,
      questionContext,
    });

    db.saveTutorMessage(userId, req.courseId, 'user', message);

    tutor.chat({ model: tutor.getModel(), system, messages })
      .then((reply) => {
        db.saveTutorMessage(userId, req.courseId, 'assistant', reply);
        res.json({ reply });
      })
      .catch((err) => {
        // Log the provider failure without ever logging the API key.
        console.error('[acc101] tutor chat failed:', err.message || err);
        res.status(502).json({
          error: 'tutor_error',
          message: 'The Course Tutor hit a snag. Please try again in a moment.',
        });
      });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
