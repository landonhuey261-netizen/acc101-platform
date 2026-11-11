'use strict';

const { escapeHtml, escAttr, layout } = require('./helpers');
const program = require('../lib/program');

/**
 * Admin panel (GET /admin): grant free programs or single courses to any
 * user, and list/revoke current grants. Admin-only — the route enforces
 * that server-side; this view never renders for a non-admin.
 *
 * opts: {
 *   message: plain success/error message to show (or null),
 *   grants: rows from db.listGrants(),
 *   courses: [{ slug, title }] of all courses
 * }
 */
function adminPage(user, enrolled, opts) {
  const o = opts || {};
  const message = o.message
    ? '<div class="callout"><p>' + escapeHtml(o.message) + '</p></div>\n'
    : '';

  const programOptions = program.PROGRAMS.map((p) =>
    '      <option value="' + escAttr(program.programSlug(p)) + '">' +
    escapeHtml(p.name) + '</option>'
  ).join('\n');

  const courseOptions = (o.courses || []).map((c) =>
    '      <option value="' + escAttr(c.slug) + '">' + escapeHtml(c.title) + '</option>'
  ).join('\n');

  const grantRows = (o.grants || []).map((g) => {
    let what = '';
    if (g.scope === 'program') {
      const found = program.programBySlug(g.slug);
      what = 'Program: ' + (found ? found.program.name : g.slug);
    } else {
      const course = (o.courses || []).find((c) => c.slug === g.slug);
      what = 'Course: ' + (course ? course.title : g.slug);
    }
    return (
      '    <li><strong>' + escapeHtml(g.username) + '</strong> \u2014 ' + escapeHtml(what) +
      ' <span class="module-meta">(granted ' + escapeHtml(String(g.granted_at).slice(0, 10)) +
      (g.granted_by_name ? ' by ' + escapeHtml(g.granted_by_name) : '') + ')</span> ' +
      '<form method="POST" action="/admin/revoke" class="inline-form">' +
      '<input type="hidden" name="grant_id" value="' + escAttr(String(g.id)) + '">' +
      '<button type="submit" class="link-btn">Revoke</button></form></li>'
    );
  }).join('\n');

  return layout({
    title: 'Admin panel',
    user,
    enrolled,
    body:
      '<section class="page-head">\n' +
      '  <h1>Admin panel</h1>\n' +
      '  <p class="section-sub">Give free access to any account. A program grant unlocks ' +
      'every course in that program; a course grant unlocks just that one course.</p>\n' +
      '</section>\n' +
      message +
      '<section class="card">\n' +
      '  <h2>Grant a program</h2>\n' +
      '  <form method="POST" action="/admin/grant">\n' +
      '    <input type="hidden" name="scope" value="program">\n' +
      '    <p><label>Username<br><input type="text" name="username" required ' +
      'placeholder="Their username" autocomplete="off"></label></p>\n' +
      '    <p><label>Program<br><select name="slug">\n' + programOptions + '\n    </select></label></p>\n' +
      '    <p><button type="submit" class="btn btn-gold">Grant program</button></p>\n' +
      '  </form>\n' +
      '</section>\n' +
      '<section class="card">\n' +
      '  <h2>Grant a single course</h2>\n' +
      '  <form method="POST" action="/admin/grant">\n' +
      '    <input type="hidden" name="scope" value="course">\n' +
      '    <p><label>Username<br><input type="text" name="username" required ' +
      'placeholder="Their username" autocomplete="off"></label></p>\n' +
      '    <p><label>Course<br><select name="slug">\n' + courseOptions + '\n    </select></label></p>\n' +
      '    <p><button type="submit" class="btn btn-gold">Grant course</button></p>\n' +
      '  </form>\n' +
      '</section>\n' +
      '<section class="card">\n' +
      '  <h2>Current grants</h2>\n' +
      ((o.grants || []).length
        ? '  <ul>\n' + grantRows + '\n  </ul>\n'
        : '  <p>No grants given out yet.</p>\n') +
      '</section>',
  });
}

module.exports = { adminPage };
