'use strict';

const express = require('express');
const db = require('../db');
const { requireAuth } = require('./auth');
const { resolveCourse, currentUser } = require('./course');
const courses = require('../content/courses');
const views = require('../views');
const { notFoundPage } = require('../views/auth');
const { tutorEnabled } = require('../lib/tutor');
const program = require('../lib/program');
const certs = require('../lib/certs');
const stripe = require('../lib/stripe');

const router = express.Router();

function navFor(req) {
  const user = currentUser(req);
  return {
    user,
    enrolled: user ? db.getEnrolledCourses(user.id) : [],
  };
}

/**
 * Paywall status for a user, for the dashboard / program / buy pages:
 * { grandfathered, owned: [program slugs], freeClass, freeClassTitle }.
 * Grandfathered accounts predate the paywall and never see free-class
 * prompts; everyone else gets one free class, total, on their pick.
 */
function paywallFor(userId) {
  if (!userId) return null;
  const grandfathered = db.isGrandfathered(userId);
  const owned = db.getOwnedPrograms(userId);
  const freeClass = db.getFreeClass(userId);
  let freeClassTitle = null;
  if (freeClass) {
    const row = db.getCourseRow(freeClass.course_slug);
    freeClassTitle = row ? row.title : freeClass.course_slug;
  }
  return { grandfathered, owned, freeClass, freeClassTitle, isAdmin: db.isAdmin(userId),
    grantedPrograms: db.getGrantedPrograms(userId) };
}

/** Look up a program by URL slug, or send the 404 page. Returns the program or null. */
function programOr404(req, res) {
  const raw = String(req.params.slug || '').toLowerCase();
  const found = /^[a-z0-9-]+$/.test(raw) ? program.programBySlug(raw) : null;
  if (!found) {
    const nav = navFor(req);
    res.status(404).send(notFoundPage(nav.user, nav));
    return null;
  }
  return found.program;
}

/** [{ slug, title }] for a program's courses, in program order. */
function programCourseList(prog) {
  return prog.order.map((s) => {
    const c = courses.getCourse(s);
    return c ? { slug: s, title: c.title } : null;
  }).filter(Boolean);
}

/** { [moduleNumber]: true } for modules the user marked complete. One query. */
function moduleDoneMap(userId, courseId) {
  const map = {};
  for (const r of db.getModuleDone(userId, courseId)) {
    if (r.done === 1) map[r.module] = true;
  }
  return map;
}

/**
 * Attach .grade and .continueModule to each enrolled course, in 5 queries
 * total via computeGrades (no N+1 across enrollments). Shared by the
 * dashboard and the program pages.
 */
function attachProgress(userId, enrolledList) {
  const ids = enrolledList.map((c) => c.id);
  const grades = db.computeGrades(userId, ids);
  return enrolledList.map((c) => {
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
}

/* ---------------- public landing / home ---------------- */

router.get('/', (req, res, next) => {
  try {
    const nav = navFor(req);
    if (!nav.user) {
      return res.send(views.landing.landingPage(courses.listCourses()));
    }
    const showOnboarding = !db.hasAnyProgress(nav.user.id);
    const enrolled = attachProgress(nav.user.id, nav.enrolled);
    res.send(views.home.homePage(nav.user, enrolled, {
      showOnboarding,
      paywall: paywallFor(nav.user.id),
    }));
  } catch (err) {
    next(err);
  }
});

/* ---------------- about page (public) ---------------- */

router.get('/about', (req, res, next) => {
  try {
    const nav = navFor(req);
    res.send(views.about.aboutPage(nav.user, nav.enrolled));
  } catch (err) {
    next(err);
  }
});

/* ---------------- help page (public) ---------------- */

router.get('/help', (req, res, next) => {
  try {
    const nav = navFor(req);
    res.send(views.help.helpPage(nav.user, nav.enrolled));
  } catch (err) {
    next(err);
  }
});

/* ---------------- program page ---------------- */

// Public: visitors see a program's classes in step order before logging in,
// exactly like the logged-in view — only enrollment (and grades/Continue)
// need an account. Logged-out rows all render as not-enrolled, with
// signup/login buttons instead of the Enroll form.
router.get('/programs/:slug', (req, res, next) => {
  try {
    const raw = String(req.params.slug || '').toLowerCase();
    const found = /^[a-z0-9-]+$/.test(raw) ? program.programBySlug(raw) : null;
    const nav = navFor(req);
    if (!found) {
      return res.status(404).send(notFoundPage(nav.user, nav));
    }
    const prog = found.program;
    const enrolled = nav.user ? attachProgress(nav.user.id, nav.enrolled) : [];
    const enrolledBySlug = {};
    for (const c of enrolled) enrolledBySlug[c.slug] = c;
    const titleOf = (slug) => {
      const c = courses.getCourse(slug);
      return c ? c.title : slug;
    };
    // Step numbers come from the position in the program's order, so a
    // course missing from the content still leaves the other steps numbered
    // correctly. Missing courses are skipped (same as the landing page).
    const rows = prog.order.map((slug, i) => {
      const content = courses.getCourse(slug);
      if (!content) return null;
      const pre = (prog.prereqs && prog.prereqs[slug]) || null;
      const ec = enrolledBySlug[slug] || null;
      return {
        slug,
        title: content.title,
        description: content.description || '',
        step: i + 1,
        total: prog.order.length,
        prereqSlug: pre,
        prereqTitle: pre ? titleOf(pre) : null,
        enrolled: !!ec,
        grade: ec ? ec.grade : null,
        continueModule: ec ? ec.continueModule : null,
        isCapstone: i === prog.order.length - 1,
      };
    }).filter(Boolean);
    const pw = nav.user ? paywallFor(nav.user.id) : null;
    const ownedHere = pw
      ? (pw.isAdmin || pw.grandfathered || pw.owned.indexOf(program.programSlug(prog)) !== -1 ||
        db.hasProgramGrant(nav.user.id, program.programSlug(prog)))
      : false;
    res.send(views.program.programPage(nav.user, nav.enrolled, prog, rows,
      { paywall: pw, owned: ownedHere }));
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

/* ---------------- enrollment (paywall-gated) ---------------- */

// Paywall, enforced server-side at enroll time (once enrolled, the existing
// course-access logic works unchanged), in this order:
//   (1) admin → enroll freely;
//   (2) grandfathered (created before the paywall went live) → freely;
//   (3) program already owned via purchase → freely;
//   (4) grant covers the course (program grant, or course grant) → freely;
//   (5) free class still unused: consume it on this course, then enroll;
//   (6) otherwise: block and send the user to the program's buy page.
router.post('/courses/:slug/enroll', requireAuth, (req, res, next) => {
  try {
    const slug = courses.sanitizeSlug(req.params.slug);
    const course = slug ? courses.getCourse(slug) : null;
    const courseId = course ? db.getCourseId(course.slug) : null;
    if (!course || !courseId) {
      const nav = navFor(req);
      return res.status(404).send(notFoundPage(nav.user, nav));
    }
    const userId = req.session.userId;
    if (!db.isEnrolled(userId, courseId)) {
      const found = program.programOf(course.slug);
      const progSlug = found ? program.programSlug(found.program) : null;
      // Standalone courses (no program) have nothing to buy, so they enroll freely.
      if (progSlug && !db.isAdmin(userId) && !db.isGrandfathered(userId) &&
          !db.hasPurchased(userId, progSlug) && !db.grantCoversCourse(userId, course.slug)) {
        if (!db.getFreeClass(userId)) {
          db.grantFreeClass(userId, course.slug);
        } else {
          return res.redirect('/buy/' + progSlug + '?blocked=1');
        }
      }
    }
    db.enrollUser(userId, course.slug);
    res.redirect('/c/' + course.slug + '/dashboard');
  } catch (err) {
    next(err);
  }
});

/* ---------------- buying a program ($50, Stripe Checkout) ---------------- */

const BUY_ERRORS = {
  'payments-not-connected':
    'Payments aren\u2019t connected yet, so buying isn\u2019t available right now. ' +
    'Your free class still works \u2014 pick any one course and enroll free.',
  unverified:
    'We couldn\u2019t confirm that payment yet. If money left your account, ' +
    'give it a moment and check the program page \u2014 otherwise try again.',
};

function renderBuyPage(req, res, prog, extra) {
  const nav = navFor(req);
  const userId = req.session.userId;
  const grandfathered = db.isGrandfathered(userId);
  const slug = program.programSlug(prog);
  res.send(views.buy.buyPage(nav.user, nav.enrolled, prog, {
    owned: db.isAdmin(userId) || grandfathered || db.hasPurchased(userId, slug) ||
      db.hasProgramGrant(userId, slug),
    grandfathered,
    freeClass: db.getFreeClass(userId),
    blocked: req.query.blocked === '1',
    error: (extra && extra.error) || BUY_ERRORS[req.query.error] || null,
    courses: programCourseList(prog),
  }));
}

router.get('/buy/:slug', requireAuth, (req, res, next) => {
  try {
    const prog = programOr404(req, res);
    if (!prog) return;
    renderBuyPage(req, res, prog, null);
  } catch (err) {
    next(err);
  }
});

router.post('/buy/:slug/checkout', requireAuth, async (req, res, next) => {
  try {
    const prog = programOr404(req, res);
    if (!prog) return;
    const slug = program.programSlug(prog);
    const userId = req.session.userId;
    if (db.isAdmin(userId) || db.isGrandfathered(userId) || db.hasPurchased(userId, slug) ||
        db.hasProgramGrant(userId, slug)) {
      return res.redirect('/programs/' + slug);
    }
    if (!stripe.stripeConfigured()) {
      return res.redirect('/buy/' + slug + '?error=payments-not-connected');
    }
    const base = req.protocol + '://' + req.get('host');
    let session;
    try {
      session = await stripe.createCheckoutSession({
        userId,
        programSlug: slug,
        programName: prog.name,
        successUrl: base + '/buy/' + slug + '/success?session_id={CHECKOUT_SESSION_ID}',
        cancelUrl: base + '/buy/' + slug + '/cancel',
      });
    } catch (err) {
      console.error('[acc101] Stripe checkout failed:', err.message || err);
      return renderBuyPage(req, res, prog, {
        error: 'Checkout couldn\u2019t start right now. Please try again in a moment.',
      });
    }
    if (!session || !session.url) {
      return renderBuyPage(req, res, prog, {
        error: 'Checkout couldn\u2019t start right now. Please try again in a moment.',
      });
    }
    res.redirect(303, session.url);
  } catch (err) {
    next(err);
  }
});

// Success-page verification: retrieve the Checkout Session from Stripe and
// confirm payment_status === 'paid' with metadata matching this user and
// program before recording the purchase. Never trust the redirect alone.
router.get('/buy/:slug/success', requireAuth, async (req, res, next) => {
  try {
    const prog = programOr404(req, res);
    if (!prog) return;
    const slug = program.programSlug(prog);
    const sessionId = typeof req.query.session_id === 'string' ? req.query.session_id : '';
    if (!sessionId || !stripe.stripeConfigured()) {
      return renderBuyPage(req, res, prog, { error: BUY_ERRORS.unverified });
    }
    let session;
    try {
      session = await stripe.retrieveCheckoutSession(sessionId);
    } catch (err) {
      console.error('[acc101] Stripe session lookup failed:', err.message || err);
      return renderBuyPage(req, res, prog, { error: BUY_ERRORS.unverified });
    }
    const meta = (session && session.metadata) || {};
    const paid = session && session.payment_status === 'paid';
    const mine = Number(meta.user_id) === req.session.userId;
    const rightProgram = meta.program_slug === slug;
    if (paid && mine && rightProgram) {
      const amount = Number.isInteger(session.amount_total) ? session.amount_total : 5000;
      db.recordPurchase(req.session.userId, slug, session.id, amount);
      return res.redirect('/programs/' + slug);
    }
    return renderBuyPage(req, res, prog, { error: BUY_ERRORS.unverified });
  } catch (err) {
    next(err);
  }
});

router.get('/buy/:slug/cancel', requireAuth, (req, res, next) => {
  try {
    const prog = programOr404(req, res);
    if (!prog) return;
    res.redirect('/buy/' + program.programSlug(prog));
  } catch (err) {
    next(err);
  }
});

/* ---------------- course dashboard ---------------- */

router.get('/c/:course/dashboard', requireAuth, resolveCourse, (req, res, next) => {
  try {
    const nav = navFor(req);
    const grade = db.computeGrade(nav.user.id, req.courseId);
    const titleOf = (slug) => {
      const c = courses.getCourse(slug);
      return c ? c.title : slug;
    };
    const programHtml = program.programBannerHtml(req.course, grade, titleOf);
    let certHtml = '';
    if (req.course.slug === 'hvac-cert-prep' || req.course.slug === 'plb-cert-prep' || req.course.slug === 'bus-capstone' || req.course.slug === 'eco-capstone' || req.course.slug === 'ase-cert-prep' || req.course.slug === 'asl-capstone') {
      const bestBy = {};
      for (const r of db.getExamScores(nav.user.id, req.courseId)) bestBy[r.exam] = r.best;
      const courseProgress = {};
      for (const slug of certs.ALL_MAPPED_COURSES) {
        const cid = db.getCourseId(slug);
        if (cid) {
          const rows = db.getModuleDone(nav.user.id, cid);
          courseProgress[slug] = {
            done: rows.filter((r) => r.done === 1).length,
            total: 12,
          };
        }
      }
      const guideViews = new Set(
        db.getGuideViews(nav.user.id, req.courseId).map((r) => r.guide_id)
      );
      certHtml = certs.renderCertPanel({ bestBy, courseProgress, guideViews }, req.course.slug);
    }
    res.send(views.dashboard.dashboardPage(
      nav.user, req.course, nav.enrolled, grade, req.course.modules.list,
      { programHtml, certHtml }
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

/* ---------------- certification study guides ---------------- */

router.get('/c/:course/guides', requireAuth, resolveCourse, (req, res, next) => {
  try {
    const nav = navFor(req);
    if (!req.course.guides || !req.course.guides.length) {
      return res.status(404).send(notFoundPage(nav.user, nav));
    }
    const viewed = new Set(
      db.getGuideViews(nav.user.id, req.courseId).map((r) => r.guide_id)
    );
    res.send(views.guides.guidesListPage(nav.user, req.course, nav.enrolled, viewed,
      req.course.modules.list, moduleDoneMap(nav.user.id, req.courseId)));
  } catch (err) {
    next(err);
  }
});

router.get('/c/:course/guides/:guideId', requireAuth, resolveCourse, (req, res, next) => {
  try {
    const nav = navFor(req);
    const guide = courses.findGuide(req.course, req.params.guideId);
    if (!guide) return res.status(404).send(notFoundPage(nav.user, nav));
    db.recordGuideView(nav.user.id, req.courseId, guide.id);
    res.send(views.guides.guidePage(nav.user, req.course, nav.enrolled, guide,
      req.course.modules.list, moduleDoneMap(nav.user.id, req.courseId)));
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
