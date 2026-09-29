'use strict';

const { escapeHtml, escAttr, layout, progressBar, courseSidebar } = require('./helpers');

function labsListPage(user, course, enrolled, labs, bestBy, modules, doneByNum) {
  const base = '/c/' + course.slug;
  const cards = labs.map((lab) => {
    const best = bestBy[lab.id] || 0;
    const passed = best >= (lab.passing || 70);
    return (
      '<article class="card lab-card">\n' +
      '  <h2>' + escapeHtml(lab.title) + '</h2>\n' +
      '  <p class="section-sub">Best score: <strong>' + escapeHtml(String(best)) + '%</strong>' +
      (passed ? ' <span class="done-mark">\u2713 passed</span>' : '') +
      ' \u00b7 passing: ' + escapeHtml(String(lab.passing || 70)) + '%</p>\n' +
      '  ' + progressBar(best) + '\n' +
      '  <p><a class="btn btn-primary" href="' + base + '/labs/' + escAttr(lab.id) + '">Open lab</a></p>\n' +
      '</article>'
    );
  }).join('\n');

  return layout({
    title: 'Accounting Labs \u2014 ' + course.title,
    user,
    enrolled,
    currentCourse: { slug: course.slug, title: course.title },
    navActive: 'courses',
    courseNav: courseSidebar({
      course,
      modules: modules || [],
      doneByNum: doneByNum || {},
      current: { type: 'page', key: 'labs' },
    }),
    body:
      '<section class="page-head">\n' +
      '  <p class="eyebrow"><a href="' + base + '/dashboard">' + escapeHtml(course.title) + '</a></p>\n' +
      '  <h1>Accounting Labs</h1>\n' +
      '  <p class="section-sub">Hands-on workpapers: fill in the numbers, check your work, and download ' +
      'your completed sheet as a CSV. Labs count toward the assignment portion of your grade.</p>\n' +
      '</section>\n' +
      '<div class="two-col">\n' + cards + '\n</div>',
  });
}

/**
 * Lab workpaper page. Renders one row per schema row; each column is either
 * a static HTML cell or a numeric input (per row.inputs entries).
 */
function labPage(user, course, enrolled, lab, best, modules, doneByNum) {
  const base = '/c/' + course.slug;
  const headers = (lab.headers || []).map((h) => '<th scope="col">' + escapeHtml(h) + '</th>').join('');
  const bodyRows = (lab.rows || []).map((row) => {
    const inputs = Array.isArray(row.inputs) ? row.inputs : [];
    const byCol = {};
    for (const inp of inputs) byCol[inp.col] = inp;
    const cells = ['<th scope="row">' + escapeHtml(row.label || '') + '</th>'];
    for (let c = 1; c < lab.headers.length; c += 1) {
      if (byCol[c]) {
        const inp = byCol[c];
        cells.push(
          '<td class="lab-input-cell"><input type="number" step="any" inputmode="decimal" ' +
          'class="lab-input" name="labval-' + escAttr(String(inp.key)) + '" data-key="' + escAttr(String(inp.key)) + '" ' +
          'aria-label="' + escAttr((row.label || '') + ' \u2014 ' + (lab.headers[c] || '')) + '"></td>'
        );
      } else if (Array.isArray(row.cells) && row.cells[c] != null && String(row.cells[c]).trim() !== '') {
        cells.push('<td>' + String(row.cells[c]) + '</td>');
      } else {
        cells.push('<td></td>');
      }
    }
    return '<tr>' + cells.join('') + '</tr>';
  }).join('\n');

  return layout({
    title: lab.title + ' \u2014 ' + course.title,
    user,
    enrolled,
    currentCourse: { slug: course.slug, title: course.title },
    navActive: 'courses',
    courseNav: courseSidebar({
      course,
      modules: modules || [],
      doneByNum: doneByNum || {},
      current: { type: 'page', key: 'labs' },
    }),
    body:
      '<article class="lab-page">\n' +
      '  <header class="page-head">\n' +
      '    <p class="eyebrow"><a href="' + base + '/labs">Accounting labs</a> \u00b7 ' + escapeHtml(course.title) + '</p>\n' +
      '    <h1>' + escapeHtml(lab.title) + '</h1>\n' +
      '    <p class="section-sub">Best score so far: <strong>' + escapeHtml(String(best || 0)) + '%</strong> ' +
      '\u00b7 passing: ' + escapeHtml(String(lab.passing || 70)) + '%</p>\n' +
      '  </header>\n' +
      '  <div class="card"><div class="lab-intro">' + (lab.introHtml || '') + '</div></div>\n' +
      '  <div class="callout lab-task"><div>' + (lab.taskHtml || '') + '</div></div>\n' +
      '  <form id="labForm" data-course="' + escAttr(course.slug) + '" data-lab="' + escAttr(lab.id) + '" novalidate>\n' +
      '    <div class="table-scroll">\n' +
      '      <table class="lab-table">\n' +
      '        <thead><tr>' + headers + '</tr></thead>\n' +
      '        <tbody>\n' + bodyRows + '\n        </tbody>\n' +
      '      </table>\n' +
      '    </div>\n' +
      '    <div class="save-row">\n' +
      '      <button type="submit" class="btn btn-gold btn-lg">Check my work</button>\n' +
      '      <a class="btn" href="' + base + '/labs/' + escAttr(lab.id) + '/csv" download>Download CSV</a>\n' +
      '      <span class="save-status" id="labStatus" role="status" aria-live="polite"></span>\n' +
      '    </div>\n' +
      '  </form>\n' +
      '  <div id="labResults" class="lab-results" hidden></div>\n' +
      '  <p><a href="' + base + '/labs">&larr; Back to labs</a></p>\n' +
      '</article>',
  });
}

module.exports = { labsListPage, labPage };
