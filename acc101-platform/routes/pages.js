'use strict';

const express = require('express');
const db = require('../db');
const { requireAuth } = require('./auth');
const { resolveCourse, currentUser } = require('./course');
const courses = require('../content/courses');
const views = require('../views');
const { notFoundPage } = require('../views/auth');
const { tutorEnabled } = require('../lib/tutor');

const router = express.Router();

function navFor(req) {
  const user = currentUser(req);
  return {
    user,
    enrolled: user ? db.getEnrolledCourses(user.id) : [],
  };
}

/** { [moduleNumber]: true } for modules the user marked complete. One query. */
function moduleDoneMap(userId, courseId) {
  const map = {};
  for (const r of db.getModuleDone(userId, courseId)) {
    if (r.done === 1) map[r.module] = true;
  }
  return map;
}

/* ---------------- public landing / home ---------------- */

router.get('/', (req, res, next) => {
  try {
    const nav = navFor(req);
    if (!nav.user) {
      return res.send(views.landing.landingPage(courses.listCourses()));
    }
    // Per-course grades in 5 queries total (no N+1 across enrollments).
    const ids = nav.enrolled.map((c) => c.id);
    const grades = db.computeGrades(nav.user.id, ids);
    const showOnboarding = !db.hasAnyProgress(nav.user.id);
    const enrolled = nav.enrolled.map((c) => {
      const grade = grades[c.id];
      // "Continue where you left off": first incomplete module (1..12).
      let continueModule = null;
      const content = courses.getCourse(c.slug);
      if (content) {
        for (let n = 1; n <= 12; n += 1) {
          const pm = grade.perModule[n - 1];
          if (!pm || !pm.done) {
            const mod = content.modules.byNumber[n];
            if (mod) continueModule = { num: mod.number, slug: mod.slug, title: mod.title };
            break;
          }
        }
      }
      return { ...c, grade, continueModule };
    });
    res.send(views.home.homePage(nav.user, enrolled, { showOnboarding }));
  } catch (err) {
    next(err);
  }
});

/* ---------------- account ---------------- */

router.get('/account', requireAuth, (req, res, next) => {
  try {
    const nav = navFor(req);
    res.send(views.account.accountPage(nav.user, nav.enrolled));
  } catch (err) {
    next(err);
  }
});

/* ---------------- enrollment (for future courses) ---------------- */

router.post('/courses/:slug/enroll', requireAuth, (req, res, next) => {
  try {
    const slug = courses.sanitizeSlug(req.params.slug);
    const course = slug ? courses.getCourse(slug) : null;
    const courseId = course ? db.getCourseId(course.slug) : null;
    if (!course || !courseId) {
      const nav = navFor(req);
      return res.status(404).send(notFoundPage(nav.user, nav));
    }
    db.enrollUser(req.session.userId, course.slug);
    res.redirect('/c/' + course.slug + '/dashboard');
  } catch (err) {
    next(err);
  }
});

/* ---------------- course dashboard ---------------- */

router.get('/c/:course/dashboard', requireAuth, resolveCourse, (req, res, next) => {
  try {
    const nav = navFor(req);
    const grade = db.computeGrade(nav.user.id, req.courseId);
    res.send(views.dashboard.dashboardPage(
      nav.user, req.course, nav.enrolled, grade, req.course.modules.list
    ));
  } catch (err) {
    next(err);
  }
});

/* ---------------- modules ---------------- */

router.get('/c/:course/modules/:slug', requireAuth, resolveCourse, (req, res, next) => {
  try {
    const nav = navFor(req);
    const mod = req.course.modules.bySlug[req.params.slug];
    if (!mod) return res.status(404).send(notFoundPage(nav.user, nav));

    let savedChecks = [];
    const row = db.getAssignmentChecks(nav.user.id, req.courseId)
      .find((r) => r.module === mod.number);
    if (row && typeof row.checked === 'string') {
      try {
        const parsed = JSON.parse(row.checked);
        if (Array.isArray(parsed)) savedChecks = parsed;
      } catch (err) { savedChecks = []; }
    }
    const doneRows = db.getModuleDone(nav.user.id, req.courseId);
    const doneRow = doneRows.find((r) => r.module === mod.number);
    const doneByNum = {};
    for (const r of doneRows) {
      if (r.done === 1) doneByNum[r.module] = true;
    }

    res.send(views.module.modulePage(mod, {
      user: nav.user,
      course: req.course,
      enrolled: nav.enrolled,
      prev: req.course.modules.byNumber[mod.number - 1] || null,
      next: req.course.modules.byNumber[mod.number + 1] || null,
      savedChecks,
      done: !!(doneRow && doneRow.done === 1),
      modules: req.course.modules.list,
      doneByNum,
    }));
  } catch (err) {
    next(err);
  }
});

/* ---------------- exams ---------------- */

router.get('/c/:course/exams', requireAuth, resolveCourse, (req, res, next) => {
  try {
    const nav = navFor(req);
    const bestBy = {};
    for (const r of db.getExamScores(nav.user.id, req.courseId)) bestBy[r.exam] = r.best;
    res.send(views.exams.examsListPage(nav.user, req.course, nav.enrolled, req.course.exams, bestBy,
      req.course.modules.list, moduleDoneMap(nav.user.id, req.courseId)));
  } catch (err) {
    next(err);
  }
});

router.get('/c/:course/exams/:which', requireAuth, resolveCourse, (req, res, next) => {
  try {
    const nav = navFor(req);
    const which = courses.validExam(req.course, req.params.which);
    if (!which) return res.status(404).send(notFoundPage(nav.user, nav));
    // Server-side start time for the exam time-limit check (see routes/api.js),
    // keyed by course + exam so parallel courses can't collide.
    req.session['examStart_' + req.course.slug + '_' + which] = Date.now();
    res.send(views.exams.examPage(nav.user, req.course, nav.enrolled, which, req.course.exams[which],
      req.course.modules.list, moduleDoneMap(nav.user.id, req.courseId)));
  } catch (err) {
    next(err);
  }
});

/* ---------------- labs ---------------- */

router.get('/c/:course/labs', requireAuth, resolveCourse, (req, res, next) => {
  try {
    const nav = navFor(req);
    const bestBy = {};
    for (const r of db.getLabScores(nav.user.id, req.courseId)) bestBy[r.lab_id] = r.best;
    res.send(views.labs.labsListPage(nav.user, req.course, nav.enrolled, req.course.labs, bestBy,
      req.course.modules.list, moduleDoneMap(nav.user.id, req.courseId)));
  } catch (err) {
    next(err);
  }
});

router.get('/c/:course/labs/:id', requireAuth, resolveCourse, (req, res, next) => {
  try {
    const nav = navFor(req);
    const lab = courses.findLab(req.course, req.params.id);
    if (!lab) return res.status(404).send(notFoundPage(nav.user, nav));
    const row = db.getLabScores(nav.user.id, req.courseId).find((r) => r.lab_id === lab.id);
    res.send(views.labs.labPage(nav.user, req.course, nav.enrolled, lab, row ? row.best : 0,
      req.course.modules.list, moduleDoneMap(nav.user.id, req.courseId)));
  } catch (err) {
    next(err);
  }
});

router.get('/c/:course/labs/:id/csv', requireAuth, resolveCourse, (req, res, next) => {
  try {
    const nav = navFor(req);
    const lab = courses.findLab(req.course, req.params.id);
    if (!lab || typeof lab.csv !== 'string') {
      return res.status(404).send(notFoundPage(nav.user, nav));
    }
    const filename = lab.csvFilename || (lab.id + '.csv');
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', 'attachment; filename="' + filename.replace(/"/g, '') + '"');
    res.send(lab.csv);
  } catch (err) {
    next(err);
  }
});

/* ---------------- course tutor ---------------- */

router.get('/c/:course/tutor', requireAuth, resolveCourse, (req, res, next) => {
  try {
    const nav = navFor(req);
    res.send(views.tutor.tutorPage(nav.user, req.course, nav.enrolled, tutorEnabled(),
      req.course.modules.list, moduleDoneMap(nav.user.id, req.courseId)));
  } catch (err) {
    next(err);
  }
});

/* ---------------- gradebook ---------------- */

router.get('/c/:course/gradebook', requireAuth, resolveCourse, (req, res, next) => {
  try {
    const nav = navFor(req);
    const grade = db.computeGrade(nav.user.id, req.courseId);
    res.send(views.gradebook.gradebookPage(
      nav.user, req.course, nav.enrolled, grade, req.course.modules.list
    ));
  } catch (err) {
    next(err);
  }
});

/* ---------------- video library ---------------- */

router.get('/c/:course/videos', requireAuth, resolveCourse, (req, res, next) => {
  try {
    const nav = navFor(req);
    res.send(views.videos.videosPage(nav.user, req.course, nav.enrolled,
      req.course.modules.list, moduleDoneMap(nav.user.id, req.courseId)));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
