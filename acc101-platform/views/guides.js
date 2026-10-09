'use strict';

const { escapeHtml, escAttr, layout, courseSidebar, readAloudControls } = require('./helpers');

/** List of a course's certification study guides (e.g. hvac-cert-prep). */
function guidesListPage(user, course, enrolled, viewedIds, modules, doneByNum) {
  const base = '/c/' + course.slug;
  const guides = course.guides || [];
  const cards = guides.map((g) => {
    const viewed = viewedIds && viewedIds.has(g.id);
    return (
      '<article class="card lab-card">\n' +
      '  <h2>' + escapeHtml(g.title) + '</h2>\n' +
      (g.blurb ? '  <p class="section-sub">' + escapeHtml(g.blurb) + '</p>\n' : '') +
      '  <p class="section-sub">' + (viewed ? '<span class="done-mark">\u2713 reviewed</span>' : 'Not reviewed yet') + '</p>\n' +
      '  <p><a class="btn btn-primary" href="' + base + '/guides/' + escAttr(g.id) + '">Open study guide</a></p>\n' +
      '</article>'
    );
  }).join('\n');

  return layout({
    title: 'Certification Study Guides \u2014 ' + course.title,
    user,
    enrolled,
    currentCourse: { slug: course.slug, title: course.title },
    navActive: 'courses',
    courseNav: courseSidebar({
      course,
      modules: modules || [],
      doneByNum: doneByNum || {},
      current: { type: 'page', key: 'guides' },
    }),
    body:
      '<section class="page-head">\n' +
      '  <p class="eyebrow"><a href="' + base + '/dashboard">' + escapeHtml(course.title) + '</a></p>\n' +
      '  <h1>Certification study guides</h1>\n' +
      '  <p class="section-sub">One focused review guide per certification: the facts and ' +
      'numbers to memorize, the traps that catch people, and the program modules that teach ' +
      'each topic. Reviewing a guide counts toward your certification tracker.</p>\n' +
      '</section>\n' +
      '<section>\n' +
      '  <div class="card-grid">\n' + cards + '\n  </div>\n' +
      '</section>',
  });
}

/** One certification study guide: intro + headed sections of review HTML. */
function guidePage(user, course, enrolled, guide, modules, doneByNum) {
  const base = '/c/' + course.slug;
  const sections = (guide.sections || []).map((s) =>
    '<section>\n  <h2>' + escapeHtml(s.heading) + '</h2>\n' + (s.html || '') + '\n</section>'
  ).join('\n');

  return layout({
    title: guide.title + ' \u2014 ' + course.title,
    user,
    enrolled,
    currentCourse: { slug: course.slug, title: course.title },
    navActive: 'courses',
    courseNav: courseSidebar({
      course,
      modules: modules || [],
      doneByNum: doneByNum || {},
      current: { type: 'page', key: 'guides' },
    }),
    body:
      '<section class="page-head">\n' +
      '  <p class="eyebrow"><a href="' + base + '/guides">Certification study guides</a> \u00b7 ' + escapeHtml(course.title) + '</p>\n' +
      '  <h1>' + escapeHtml(guide.title) + '</h1>\n' +
      (guide.blurb ? '  <p class="section-sub">' + escapeHtml(guide.blurb) + '</p>\n' : '') +
      '</section>\n' +
      readAloudControls('guideReading') +
      '<div id="guideReading" data-ra-reading>\n' + (guide.introHtml || '') + '\n' +
      sections + '\n</div>\n' +
      '<section class="card">\n' +
      '  <p><a class="btn btn-primary" href="' + base + '/exams">Go to the practice exams</a> ' +
      '<a class="btn" href="' + base + '/guides">All study guides</a> ' +
      '<a class="btn" href="' + base + '/dashboard">Certification tracker</a></p>\n' +
      '</section>',
  });
}

module.exports = { guidesListPage, guidePage };
