'use strict';

/**
 * Course middleware for the multi-course platform.
 *
 * resolveCourse: validates the :course URL param, loads the course content,
 * and enforces enrollment. On success sets req.course (content object) and
 * req.courseId (DB id).
 *   - malformed slug or unknown course -> 404
 *   - known course but user not enrolled -> 403
 * Assumes requireAuth already ran (pages redirect, API returns 401).
 */

const courses = require('../content/courses');
const db = require('../db');
const { notFoundPage } = require('../views/auth');
const { escapeHtml, layout } = require('../views/helpers');

function currentUser(req) {
  if (!req.session || !req.session.userId) return null;
  return db.findUserById(req.session.userId);
}

function navOpts(req) {
  const user = currentUser(req);
  return {
    user,
    enrolled: user ? db.getEnrolledCourses(user.id) : [],
    currentCourse: null,
  };
}

function forbiddenPage(user, enrolled, course) {
  const body =
    '<section class="narrow">\n' +
    '  <h1>403 \u2014 Not enrolled</h1>\n' +
    '  <p>You are not enrolled in <strong>' + escapeHtml(course.title) + '</strong>.</p>\n' +
    '  <form method="POST" action="/courses/' + escapeHtml(course.slug) + '/enroll">\n' +
    '    <button type="submit" class="btn btn-gold">Enroll now</button>\n' +
    '  </form>\n' +
    '  <p><a href="/">Back to home</a></p>\n' +
    '</section>';
  return layout({ title: 'Not enrolled', user, enrolled, body });
}

function wantsJson(req) {
  return req.path.indexOf('/api/') === 0 || (req.baseUrl || '').indexOf('/api') === 0;
}

function resolveCourse(req, res, next) {
  const raw = req.params.course;
  if (!courses.sanitizeSlug(raw)) {
    if (wantsJson(req)) return res.status(404).json({ error: 'Unknown course.' });
    const nav = navOpts(req);
    return res.status(404).send(notFoundPage(nav.user, nav));
  }
  const course = courses.getCourse(raw);
  const courseId = course ? db.getCourseId(course.slug) : null;
  if (!course || !courseId) {
    if (wantsJson(req)) return res.status(404).json({ error: 'Unknown course.' });
    const nav = navOpts(req);
    return res.status(404).send(notFoundPage(nav.user, nav));
  }

  const userId = req.session && req.session.userId;
  if (!userId || !db.isEnrolled(userId, courseId)) {
    if (wantsJson(req)) {
      return res.status(403).json({ error: 'Not enrolled in this course.' });
    }
    const user = currentUser(req);
    const enrolled = user ? db.getEnrolledCourses(user.id) : [];
    return res.status(403).send(forbiddenPage(user, enrolled, course));
  }

  req.course = course;
  req.courseId = courseId;
  next();
}

module.exports = { resolveCourse, currentUser, navOpts };
