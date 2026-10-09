'use strict';

// The HVAC/R Technology program: the platform's HVAC courses form one ordered
// program (sequenced after Ferris State University's HVACR Technology (AAS)
// major courses). Courses outside this list (e.g. ACC 101) are standalone and
// are never numbered into the program.

const PROGRAM_NAME = 'HVAC/R Technology program';

const PROGRAM_ORDER = [
  'hvac101',
  'hvac102',
  'hvac111',
  'hvac117',
  'hvac127',
  'hvac132',
  'hvac207',
  'hvac208',
  'hvac235',
  'hvac245',
  'hvac-cert-prep',
];

// Prerequisite guidance where the Ferris sequence has one: each course builds
// directly on the listed earlier course.
const PREREQS = {
  hvac102: 'hvac101',
  hvac117: 'hvac111',
  hvac127: 'hvac117',
  hvac235: 'hvac132',
};

function stepOf(slug) {
  const i = PROGRAM_ORDER.indexOf(slug);
  return i === -1 ? null : { step: i + 1, total: PROGRAM_ORDER.length };
}

function nextSlug(slug) {
  const i = PROGRAM_ORDER.indexOf(slug);
  return i === -1 || i === PROGRAM_ORDER.length - 1 ? null : PROGRAM_ORDER[i + 1];
}

function prereqSlug(slug) {
  return PREREQS[slug] || null;
}

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * The "where you are in the program" banner for a course dashboard.
 * titleOf(slug) resolves a course title. Returns '' for non-program courses.
 */
function programBannerHtml(course, grade, titleOf) {
  const info = stepOf(course.slug);
  if (!info) return '';
  const lines = [
    '  <p class="eyebrow">Step ' + info.step + ' of ' + info.total + ' · ' + PROGRAM_NAME + '</p>',
  ];
  const pre = prereqSlug(course.slug);
  if (pre) {
    const preInfo = stepOf(pre);
    lines.push(
      '  <p>Prerequisite guidance: this course builds on <a href="/c/' + pre + '/dashboard">' +
      esc(titleOf(pre)) + '</a> (Step ' + (preInfo ? preInfo.step : '?') +
      '). Take that course first if you have not finished it.</p>'
    );
  }
  const perModule = (grade && grade.perModule) || [];
  const allDone = perModule.length >= 12 && perModule.every((pm) => pm && pm.done);
  const nxt = nextSlug(course.slug);
  if (nxt) {
    if (allDone) {
      lines.push(
        '  <p><strong>You finished this course.</strong> Next in the program: ' +
        '<a class="btn btn-small btn-gold" href="/c/' + nxt + '/dashboard">Step ' +
        (info.step + 1) + ': ' + esc(titleOf(nxt)) + '</a></p>'
      );
    } else {
      lines.push(
        '  <p>Next in the program after this course: <a href="/c/' + nxt + '/dashboard">' +
        esc(titleOf(nxt)) + '</a> (Step ' + (info.step + 1) + ').</p>'
      );
    }
  } else {
    lines.push(
      '  <p>This is the final step of the program — the capstone. When the certification ' +
      'tracker on this page shows READY, book the real exams through the approved ' +
      'providers listed there.</p>'
    );
  }
  return '<section class="card program-banner">\n' + lines.join('\n') + '\n</section>\n';
}

module.exports = {
  PROGRAM_NAME,
  PROGRAM_ORDER,
  PREREQS,
  stepOf,
  nextSlug,
  prereqSlug,
  programBannerHtml,
};
