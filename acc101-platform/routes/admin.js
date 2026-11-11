'use strict';

/**
 * routes/admin.js — admin panel: grant/revoke free programs and courses.
 *
 * Security: EVERY route here runs requireAuth + requireAdmin. A non-admin
 * gets a 403 (never the panel, never a grant), consistently, on both the
 * GET and the POST routes.
 */

const express = require('express');
const db = require('../db');
const { requireAuth } = require('./auth');
const { currentUser } = require('./course');
const courses = require('../content/courses');
const views = require('../views');
const { errorPage } = require('../views/auth');
const program = require('../lib/program');

const router = express.Router();

function navFor(req) {
  const user = currentUser(req);
  return {
    user,
    enrolled: user ? db.getEnrolledCourses(user.id) : [],
  };
}

/** 403 for non-admins, with the site layout. */
function requireAdmin(req, res, next) {
  if (req.session && req.session.userId && db.isAdmin(req.session.userId)) return next();
  const nav = navFor(req);
  return res.status(403).send(errorPage(nav.user, 403,
    'This page is for the site admin only.', { enrolled: nav.enrolled }));
}

function renderPanel(req, res, message) {
  const nav = navFor(req);
  res.send(views.admin.adminPage(nav.user, nav.enrolled, {
    message: message || null,
    grants: db.listGrants(),
    courses: courses.listCourses().map((c) => ({ slug: c.slug, title: c.title })),
  }));
}

router.get('/admin', requireAuth, requireAdmin, (req, res, next) => {
  try {
    renderPanel(req, res, null);
  } catch (err) {
    next(err);
  }
});

router.post('/admin/grant', requireAuth, requireAdmin, (req, res, next) => {
  try {
    const username = String(req.body.username || '').trim();
    const scope = String(req.body.scope || '').trim();
    const slug = String(req.body.slug || '').trim();

    if (scope !== 'program' && scope !== 'course') {
      return renderPanel(req, res, 'Pick whether to grant a program or a single course.');
    }
    const target = username ? db.findUserByUsername(username) : null;
    if (!target) {
      return renderPanel(req, res, 'No account with the username "' + username + '" exists. Check the spelling and try again.');
    }
    if (scope === 'program') {
      if (!program.programBySlug(slug)) {
        return renderPanel(req, res, 'That program doesn\u2019t exist. Pick one from the list.');
      }
    } else if (!courses.getCourse(slug)) {
      return renderPanel(req, res, 'That course doesn\u2019t exist. Pick one from the list.');
    }
    db.grantAccess(target.id, scope, slug, req.session.userId);
    const what = scope === 'program'
      ? (program.programBySlug(slug).program.name)
      : courses.getCourse(slug).title;
    return renderPanel(req, res,
      'Granted: ' + target.username + ' now has free access to ' + what + '.');
  } catch (err) {
    next(err);
  }
});

router.post('/admin/revoke', requireAuth, requireAdmin, (req, res, next) => {
  try {
    const grantId = Number(req.body.grant_id);
    if (!Number.isInteger(grantId) || grantId <= 0) {
      return renderPanel(req, res, 'That grant couldn\u2019t be found.');
    }
    db.revokeGrant(grantId);
    return renderPanel(req, res, 'Grant revoked.');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
