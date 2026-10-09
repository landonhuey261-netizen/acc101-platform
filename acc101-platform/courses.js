'use strict';

/**
 * Multi-course content loader.
 *
 * Layout:
 *   content/courses/<slug>/course.js          -> { slug, title, description }
 *   content/courses/<slug>/modules/m01.js ... m12.js
 *   content/courses/<slug>/exams.js
 *   content/courses/<slug>/labs.js            (optional; missing -> no labs)
 *
 * Course directories are discovered with fs.readdirSync. Slugs coming from
 * URLs are sanitized with /^[a-z0-9-]+$/ to block path traversal.
 *
 * Exposes: listCourses(), getCourse(slug) (null when unknown/invalid),
 *          requireCourse(slug) (throws a clear error naming the expected path).
 */

const fs = require('node:fs');
const path = require('node:path');

const COURSES_DIR = path.join(__dirname, 'courses');
const SLUG_RE = /^[a-z0-9-]+$/;

function sanitizeSlug(slug) {
  return typeof slug === 'string' && SLUG_RE.test(slug) ? slug : null;
}

function expectedDir(slug) {
  return 'content/courses/' + slug + '/';
}

function loadModuleFile(courseDir, slug, n) {
  const fname = 'm' + String(n).padStart(2, '0') + '.js';
  const full = path.join(courseDir, 'modules', fname);
  try {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const mod = require(full);
    if (!mod || typeof mod.number !== 'number' || !mod.slug || !mod.title) {
      throw new Error('missing required fields (number, slug, title)');
    }
    return mod;
  } catch (err) {
    throw new Error(
      'Course content error [' + slug + ']: could not load ' + expectedDir(slug) +
      'modules/' + fname + ' (' + err.message + ').'
    );
  }
}

function loadCourseDir(slug, dir) {
  let meta;
  try {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    meta = require(path.join(dir, 'course.js'));
  } catch (err) {
    throw new Error(
      'Course content error [' + slug + ']: could not load ' + expectedDir(slug) +
      'course.js (' + err.message + ').'
    );
  }
  if (!meta || !meta.title) {
    throw new Error(
      'Course content error [' + slug + ']: ' + expectedDir(slug) +
      'course.js must export { slug, title, description }.'
    );
  }

  const list = [];
  for (let n = 1; n <= 12; n += 1) list.push(loadModuleFile(dir, slug, n));
  list.sort((a, b) => a.number - b.number);
  const bySlug = {};
  const byNumber = {};
  for (const m of list) {
    bySlug[m.slug] = m;
    byNumber[m.number] = m;
  }

  let exams;
  try {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    exams = require(path.join(dir, 'exams.js'));
  } catch (err) {
    throw new Error(
      'Course content error [' + slug + ']: could not load ' + expectedDir(slug) +
      'exams.js (' + err.message + ').'
    );
  }

  // Labs are optional: a course without labs.js simply has no labs.
  let labs = [];
  try {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const labsRaw = require(path.join(dir, 'labs.js'));
    labs = Array.isArray(labsRaw) ? labsRaw : (labsRaw.labs || labsRaw.list || []);
  } catch (err) {
    labs = [];
  }

  // Certification study guides are optional: only courses with a guides.js
  // (currently hvac-cert-prep) have them.
  let guides = [];
  const guidesPath = path.join(dir, 'guides.js');
  if (fs.existsSync(guidesPath)) {
    const rawGuides = require(guidesPath);
    if (Array.isArray(rawGuides)) {
      guides = rawGuides.filter(
        (g) => g && typeof g.id === 'string' && typeof g.title === 'string'
      );
    }
  }

  return {
    slug,
    title: meta.title,
    description: meta.description || '',
    labsTitle: meta.labsTitle || null,
    subject: meta.subject || null,
    tutorRole: meta.tutorRole || null,
    askExample: meta.askExample || null,
    dir,
    modules: { list, bySlug, byNumber },
    exams,
    labs,
    guides,
  };
}

const cache = new Map();

function getCourse(slug) {
  const clean = sanitizeSlug(slug);
  if (!clean) return null;
  if (cache.has(clean)) return cache.get(clean);
  const dir = path.join(COURSES_DIR, clean);
  let stat = null;
  try {
    stat = fs.statSync(dir);
  } catch (err) {
    return null;
  }
  if (!stat.isDirectory()) return null;
  const course = loadCourseDir(clean, dir);
  cache.set(clean, course);
  return course;
}

/** Throw a clear, actionable error when a required course is absent. */
function requireCourse(slug) {
  const course = getCourse(slug);
  if (!course) {
    throw new Error(
      'ACC 101 startup error: course "' + slug + '" not found. Expected content at ' +
      expectedDir(slug) + ' (course.js, modules/m01.js..m12.js, exams.js, labs.js). ' +
      'If the content is authored at another path, move it there before starting the server.'
    );
  }
  return course;
}

/** Discover every course directory under content/courses/. */
function listCourses() {
  let entries = [];
  try {
    entries = fs.readdirSync(COURSES_DIR, { withFileTypes: true });
  } catch (err) {
    return [];
  }
  const out = [];
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    if (!SLUG_RE.test(e.name)) continue;
    try {
      out.push(getCourse(e.name));
    } catch (err) {
      // Skip unloadable course dirs here; requireCourse() reports them loudly.
    }
  }
  return out.filter(Boolean);
}

function findLab(course, id) {
  return (course.labs || []).find((l) => l && l.id === id) || null;
}

function findGuide(course, id) {
  if (!course || !Array.isArray(course.guides)) return null;
  return course.guides.find((g) => g.id === id) || null;
}

function validModuleNum(n) {
  const num = Number(n);
  return Number.isInteger(num) && num >= 1 && num <= 12 ? num : null;
}

function validExam(course, which) {
  if (!course || !course.exams || typeof which !== 'string') return null;
  return Object.prototype.hasOwnProperty.call(course.exams, which) ? which : null;
}

module.exports = {
  SLUG_RE,
  sanitizeSlug,
  getCourse,
  requireCourse,
  listCourses,
  findLab,
  findGuide,
  validModuleNum,
  validExam,
};
