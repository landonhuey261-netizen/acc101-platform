'use strict';

// The platform's programs: each is one ordered sequence of courses.
//  - HVAC/R Technology: sequenced after Ferris State University's HVACR
//    Technology (AAS) major courses.
//  - Plumbing & Pipefitting: modeled on Thaddeus Stevens College of
//    Technology's Plumbing Technology (AAS) + NCCER Plumbing Levels 1-4.
// Courses outside these lists (e.g. ACC 101) are standalone and are never
// numbered into a program.
//
// PROGRAM_NAME / PROGRAM_ORDER / PREREQS keep their original meaning (the
// HVAC/R program) so existing callers keep working; PROGRAMS is the
// per-program source of truth.

const PROGRAMS = [
  {
    name: 'HVAC/R Technology program',
    order: [
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
    ],
    // Prerequisite guidance where the Ferris sequence has one: each course builds
    // directly on the listed earlier course.
    prereqs: {
      hvac102: 'hvac101',
      hvac117: 'hvac111',
      hvac127: 'hvac117',
      hvac235: 'hvac132',
    },
    blurb:
      'Eleven courses taken in order, sequenced after Ferris State ' +
      'University\u2019s HVACR Technology (AAS) major courses \u2014 from refrigeration ' +
      'fundamentals to a certification-prep capstone that readies you for the real EPA 608 ' +
      'and NATE exams.',
  },
  {
    name: 'Plumbing & Pipefitting program',
    order: [
      'plb101',
      'plb102',
      'plb111',
      'plb112',
      'plb121',
      'plb122',
      'plb131',
      'plb132',
      'plb201',
      'plb202',
      'plb203',
      'plb-cert-prep',
    ],
    // Prerequisite guidance: each course builds directly on the listed
    // earlier course. The capstone has no PREREQS entry (same as
    // hvac-cert-prep); the final-step banner covers it.
    prereqs: {
      plb102: 'plb101',
      plb121: 'plb111',
      plb201: 'plb122',
      plb203: 'plb201',
    },
    blurb:
      'Twelve courses taken in order, modeled on Thaddeus Stevens College of ' +
      'Technology\u2019s Plumbing Technology (AAS) and the NCCER Plumbing Levels 1\u20134 ' +
      'curriculum \u2014 from the trade, tools, and safety to a certification-prep ' +
      'capstone that readies you for the Michigan journeyman license, NCCER, and ' +
      'ASSE certification.',
  },
];

const PROGRAM_NAME = PROGRAMS[0].name;
const PROGRAM_ORDER = PROGRAMS[0].order;
const PREREQS = PROGRAMS[0].prereqs;

const PLUMBING_PROGRAM_NAME = PROGRAMS[1].name;
const PLUMBING_PROGRAM_ORDER = PROGRAMS[1].order;
const PLUMBING_PREREQS = PROGRAMS[1].prereqs;

/**
 * Find the program a slug belongs to.
 * Returns null for standalone courses. Otherwise { program, index,
 * programIndex } where index is the 0-based position in that program's order.
 */
function programOf(slug) {
  for (let pi = 0; pi < PROGRAMS.length; pi += 1) {
    const program = PROGRAMS[pi];
    const index = program.order.indexOf(slug);
    if (index !== -1) return { program, index, programIndex: pi };
  }
  return null;
}

function programNameOf(slug) {
  const found = programOf(slug);
  return found ? found.program.name : null;
}

function stepOf(slug) {
  const found = programOf(slug);
  if (!found) return null;
  return {
    step: found.index + 1,
    total: found.program.order.length,
    programName: found.program.name,
    programIndex: found.programIndex,
  };
}

function nextSlug(slug) {
  const found = programOf(slug);
  if (!found || found.index === found.program.order.length - 1) return null;
  return found.program.order[found.index + 1];
}

function prereqSlug(slug) {
  const found = programOf(slug);
  return found ? (found.program.prereqs[slug] || null) : null;
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
    '  <p class="eyebrow">Step ' + info.step + ' of ' + info.total + ' · ' + esc(info.programName) + '</p>',
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
  PROGRAMS,
  PROGRAM_NAME,
  PROGRAM_ORDER,
  PREREQS,
  PLUMBING_PROGRAM_NAME,
  PLUMBING_PROGRAM_ORDER,
  PLUMBING_PREREQS,
  programOf,
  programNameOf,
  stepOf,
  nextSlug,
  prereqSlug,
  programBannerHtml,
};
