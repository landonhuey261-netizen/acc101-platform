'use strict';

const { escapeHtml, escAttr, stripTags, layout, tutorBtn, assignmentPrompt, courseSidebar } = require('./helpers');

function youtubeEmbedOk(url) {
  return typeof url === 'string' && /^https:\/\/www\.youtube\.com\/embed\//.test(url);
}

function renderVideo(video) {
  if (!video) return '<p>No video lesson is attached to this module yet.</p>';
  let embed = '';
  if (youtubeEmbedOk(video.embedUrl)) {
    embed =
      '<div class="video-embed">\n' +
      '  <iframe src="' + escAttr(video.embedUrl) + '" title="' + escAttr(video.title || 'Video lesson') + '" ' +
      'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ' +
      'allowfullscreen loading="lazy"></iframe>\n' +
      '</div>\n';
  } else if (video.embedUrl) {
    embed = '<p><a class="btn btn-primary" href="' + escAttr(video.embedUrl) +
      '" target="_blank" rel="noopener">Watch the video lesson</a></p>\n';
  }
  const more = Array.isArray(video.more) && video.more.length
    ? '<ul class="watch-next">' + video.more.map((m) =>
        '<li><a href="' + escAttr(m.url || '#') + '" target="_blank" rel="noopener">' +
        escapeHtml(m.title || 'Watch next') + '</a></li>').join('') + '</ul>'
    : '';
  return (
    '<h3>' + escapeHtml(video.title || 'Video lesson') + '</h3>\n' +
    embed +
    (video.note ? '<p class="video-note">' + escapeHtml(video.note) + '</p>\n' : '') +
    (more ? '<h4>Watch next</h4>\n' + more : '')
  );
}

/**
 * Full module page. opts: { user, course, enrolled, prev, next, savedChecks,
 *   done, modules, doneByNum }.
 * All links and API targets are scoped to /c/:courseSlug.
 *
 * Every module page follows the same 5-step structure, in order:
 *   1 Learn (lecture sections) → 2 Key terms to know → 3 Video lesson →
 *   4 Assignment → 5 Check your understanding (quiz).
 * Study guide, the ask box, and the mark-complete row come after.
 */
function modulePage(mod, opts) {
  const course = opts.course;
  const enrolled = opts.enrolled || [];
  const base = '/c/' + course.slug;
  const prev = opts.prev || null;
  const next = opts.next || null;
  const savedChecks = Array.isArray(opts.savedChecks) ? opts.savedChecks : [];
  const done = !!opts.done;

  const objectives = (mod.objectives || []).map((o) => '<li>' + escapeHtml(o) + '</li>').join('\n');

  const sections = (mod.sections || []).map((s) =>
    '<section class="lecture-section">\n' +
    '  <h3>' + escapeHtml(s.heading || '') + '</h3>\n' +
    '  <div class="lecture-body">' + (s.html || '') + '</div>\n' +
    '</section>'
  ).join('\n');

  const terms = (mod.keyTerms || []).map((t) =>
    '<div class="term"><dt>' + escapeHtml(t.term) + '</dt><dd>' + escapeHtml(t.def) + '</dd></div>'
  ).join('\n');

  const assignment = (mod.assignment || []).map((p, i) => {
    const checked = savedChecks[i] ? ' checked' : '';
    return (
      '<article class="problem" id="problem-' + i + '">\n' +
      '  <h4>Problem ' + (i + 1) + '</h4>\n' +
      '  <div class="problem-prompt">' + (p.prompt || '') + '</div>\n' +
      '  <div class="problem-actions">\n' +
      '    <button type="button" class="toggle-btn" data-toggle="solution-' + i + '" aria-expanded="false">Show solution</button>\n' +
      '    ' + tutorBtn(assignmentPrompt(course.title, mod.number, mod.title, p.prompt), {
        courseSlug: course.slug,
        context: {
          moduleNum: mod.number,
          prefill: 'Help me work through this assignment problem: ' + stripTags(p.prompt),
        },
      }) + '\n' +
      '  </div>\n' +
      '  <div class="solution" id="solution-' + i + '" hidden>\n' +
      '    <h5>Model solution</h5>\n' +
      '    <div>' + (p.solution || '') + '</div>\n' +
      '  </div>\n' +
      '  <label class="self-check"><input type="checkbox" class="assign-check" data-index="' + i + '"' + checked + '> ' +
      'I solved this correctly on my own</label>\n' +
      '</article>'
    );
  }).join('\n');

  const quiz = (mod.quiz || []).map((q, i) => {
    const choices = (q.choices || []).map((c, ci) =>
      '<label class="choice" data-choice-text="' + escAttr(stripTags(c)) + '">' +
      '<input type="radio" name="q' + i + '" value="' + ci + '"> ' +
      '<span class="choice-letter">' + String.fromCharCode(65 + ci) + '</span> ' +
      '<span>' + escapeHtml(c) + '</span></label>'
    ).join('\n');
    return (
      '<fieldset class="quiz-question" data-qindex="' + i + '" data-question="' + escAttr(stripTags(q.q)) + '">\n' +
      '  <legend><strong>Q' + (i + 1) + '.</strong> ' + escapeHtml(q.q) + '</legend>\n' +
      choices + '\n' +
      '  <div class="question-feedback" hidden></div>\n' +
      '</fieldset>'
    );
  }).join('\n');

  const prevNext =
    '<nav class="prev-next" aria-label="Module navigation">\n' +
    (prev
      ? '  <a class="btn" href="' + base + '/modules/' + escapeHtml(prev.slug) + '">&larr; Module ' + prev.number + ': ' + escapeHtml(prev.title) + '</a>\n'
      : '  <span></span>\n') +
    (next
      ? '  <a class="btn" href="' + base + '/modules/' + escapeHtml(next.slug) + '">Module ' + next.number + ': ' + escapeHtml(next.title) + ' &rarr;</a>\n'
      : '  <a class="btn" href="' + base + '/exams">Take the midterm &rarr;</a>\n') +
    '</nav>';

  const objectivesJoined = (mod.objectives || []).map(stripTags).join('; ');

  // Section step headings — the same 5 steps in the same order on every module.
  const stepHead = (n, title) =>
    '<h2><span class="step-num" aria-hidden="true">' + n + '</span> ' + title + '</h2>';

  return layout({
    title: 'Module ' + mod.number + ': ' + mod.title,
    user: opts.user,
    enrolled,
    currentCourse: { slug: course.slug, title: course.title },
    navActive: 'courses',
    courseNav: courseSidebar({
      course,
      modules: opts.modules || [],
      doneByNum: opts.doneByNum || {},
      current: { type: 'module', num: mod.number },
    }),
    body:
      '<article class="module-page">\n' +
      '  <header class="module-head">\n' +
      '    <p class="eyebrow"><a href="' + base + '/dashboard">' + escapeHtml(course.title) + '</a> \u00b7 Module ' + mod.number + ' of 12' + (done ? ' \u00b7 <span class="done-mark">\u2713 Complete</span>' : '') + '</p>\n' +
      '    <h1>' + escapeHtml(mod.title) + '</h1>\n' +
      (mod.estTime ? '    <p class="module-meta">Estimated study time: ' + escapeHtml(mod.estTime) + '</p>\n' : '') +
      '    <div class="objectives-box">\n' +
      '      <h2>Learning objectives</h2>\n' +
      '      <p>By the end of this module, you will be able to:</p>\n' +
      '      <ul>\n' + objectives + '\n      </ul>\n' +
      '    </div>\n' +
      '  </header>\n' +

      '  <nav class="sticky-subnav" aria-label="In this module">\n' +
      '    <a href="#learn"><span class="subnav-num" aria-hidden="true">1</span> Learn</a>\n' +
      '    <a href="#key-terms"><span class="subnav-num" aria-hidden="true">2</span> Key terms</a>\n' +
      '    <a href="#video"><span class="subnav-num" aria-hidden="true">3</span> Video</a>\n' +
      '    <a href="#assignment"><span class="subnav-num" aria-hidden="true">4</span> Assignment</a>\n' +
      '    <a href="#quiz"><span class="subnav-num" aria-hidden="true">5</span> Quiz</a>\n' +
      '  </nav>\n' +

      '  <section id="learn" class="module-section">\n' +
      '    ' + stepHead(1, 'Learn') + '\n' +
      '    <p class="section-sub">Read through the lecture below. Worked examples show each idea in action.</p>\n' +
      sections + '\n  </section>\n' +

      '  <section id="key-terms" class="module-section">\n' +
      '    ' + stepHead(2, 'Key terms to know') + '\n' +
      '    <p class="section-sub">The vocabulary for this module \u2014 know these cold before the quiz.</p>\n' +
      '    <dl class="terms">\n' + terms + '\n    </dl>\n' +
      '  </section>\n' +

      '  <section id="video" class="module-section">\n' +
      '    ' + stepHead(3, 'Video lesson') + '\n' + renderVideo(mod.video) + '\n  </section>\n' +

      '  <section id="assignment" class="module-section">\n' +
      '    ' + stepHead(4, 'Assignment') + '\n' +
      '    <p class="section-sub">Work each problem on your own first, then check the model solution. ' +
      'Tick the box for every problem you solved correctly without help, then save your answers.</p>\n' +
      assignment + '\n' +
      '    <div class="save-row">\n' +
      '      <button type="button" class="btn btn-primary" id="saveAssignment" data-course="' + escAttr(course.slug) + '" data-module="' + mod.number + '">Save my answers</button>\n' +
      '      <span class="save-status" id="assignStatus" role="status" aria-live="polite"></span>\n' +
      '    </div>\n' +
      '  </section>\n' +

      '  <section id="quiz" class="module-section">\n' +
      '    ' + stepHead(5, 'Check your understanding') + '\n' +
      '    <p class="section-sub">8 multiple-choice questions on this module. Instant feedback with explanations; your best score is saved automatically.</p>\n' +
      '    <form id="quizForm" data-course="' + escAttr(course.slug) + '" data-course-title="' + escAttr(course.title) + '" data-module="' + mod.number + '" data-module-title="' + escAttr(mod.title) + '" novalidate>\n' +
      quiz + '\n' +
      '      <button type="submit" class="btn btn-gold btn-lg">Submit quiz</button>\n' +
      '      <span class="save-status" id="quizStatus" role="status" aria-live="polite"></span>\n' +
      '    </form>\n' +
      '    <div id="quizResults" class="quiz-results" hidden></div>\n' +
      '  </section>\n' +

      '  <section id="study-guide" class="module-section">\n' +
      '    <h2>Study guide</h2>\n' +
      '    <div class="study-guide-body">' + (mod.studyGuide || '') + '</div>\n' +
      '    <p class="no-print"><button type="button" class="btn" onclick="window.print()">Print study guide</button></p>\n' +
      '  </section>\n' +

      '  <section id="ask" class="module-section ask-box">\n' +
      '    <h2>Ask about this module</h2>\n' +
      '    <p class="section-sub">Type your question, then copy a ready-made prompt to ask your AI assistant (e.g. Muse) in chat.</p>\n' +
      '    <label class="visually-hidden" for="askText">Your question about Module ' + mod.number + '</label>\n' +
      '    <textarea id="askText" rows="3" placeholder="e.g. Why does a debit increase assets but decrease liabilities?"></textarea>\n' +
      '    <button type="button" class="btn btn-primary" id="askCopy" data-course-title="' + escAttr(course.title) + '" data-module="' + mod.number +
      '" data-module-title="' + escAttr(mod.title) + '" data-objectives="' + escAttr(objectivesJoined) + '">Copy question prompt</button>\n' +
      '  </section>\n' +

      '  <section class="module-section complete-row">\n' +
      (done
        ? '    <p class="done-note"><span class="done-mark">\u2713</span> You marked this module complete.</p>\n'
        : '    <button type="button" class="btn btn-gold" id="markComplete" data-course="' + escAttr(course.slug) + '" data-module="' + mod.number + '">Mark module complete</button>\n' +
          '    <span class="save-status" id="completeStatus" role="status" aria-live="polite"></span>\n') +
      '  </section>\n' +

      prevNext + '\n' +
      '</article>',
  });
}

module.exports = { modulePage };
