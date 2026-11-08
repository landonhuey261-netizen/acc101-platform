'use strict';

// The platform's programs: each is one ordered sequence of courses.
//  - HVAC/R Technology: sequenced after Ferris State University's HVACR
//    Technology (AAS) major courses.
//  - Plumbing & Pipefitting: modeled on Thaddeus Stevens College of
//    Technology's Plumbing Technology (AAS) + NCCER Plumbing Levels 1-4.
//  - General Business: modeled on Ferris State University's College of
//    Business Business Administration B.S. (BUAD-BS) + College of Business
//    minors; ACC 101 is reused as its Step 2 accounting foundation.
//  - Economics: modeled on Grand Valley State University's Economics
//    B.A./B.S. (Seidman College of Business) with Ferris State University's
//    B.S. Economics as a continuity layer.
// Courses outside these lists are standalone and are never
// numbered into a program.
//
// PROGRAM_NAME / PROGRAM_ORDER / PREREQS keep their original meaning (the
// HVAC/R program) so existing callers keep working; PROGRAMS is the
// per-program source of truth.

const PROGRAMS = [
  {
    name: 'HVAC/R Technology program',
    slug: 'hvac-r-technology',
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
    slug: 'plumbing-pipefitting',
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
  {
    name: 'General Business program',
    slug: 'general-business',
    order: [
      'bus101',
      'acc101',
      'acc102',
      'bus121',
      'bus131',
      'mgt101',
      'mkt101',
      'fin101',
      'bus201',
      'mgt201',
      'bus211',
      'bus221',
      'bus-capstone',
    ],
    // Prerequisite guidance: each course builds directly on the listed
    // earlier course. The capstone has no PREREQS entry (same as
    // hvac-cert-prep and plb-cert-prep); the final-step banner covers it.
    prereqs: {
      acc102: 'acc101',
      fin101: 'acc102',
      bus201: 'bus121',
      mgt201: 'bus121',
      bus221: 'mgt101',
    },
    blurb:
      'Thirteen courses taken in order, modeled on Ferris State University\u2019s ' +
      'College of Business Business Administration B.S. (BUAD-BS) plus its minors ' +
      '\u2014 from an introduction to business, with ACC 101 as the accounting ' +
      'foundation, to a business-plan capstone.',
    capstoneLine:
      'This is the final step of the program \u2014 the capstone. When your business ' +
      'plan is finished and the certification tracker on this page shows READY for the ' +
      'credentials you want, book the real exams through the approved providers listed there.',
  },
  {
    name: 'Economics program',
    slug: 'economics',
    order: [
      'eco101',
      'eco102',
      'eco103',
      'eco111',
      'eco121',
      'eco131',
      'eco201',
      'eco202',
      'eco211',
      'eco221',
      'eco231',
      'eco241',
      'eco-capstone',
    ],
    // Prerequisite guidance: each course builds directly on the listed
    // earlier course. The capstone has no PREREQS entry (same as
    // hvac-cert-prep, plb-cert-prep, and bus-capstone); the final-step
    // banner covers it.
    prereqs: {
      eco102: 'eco101',
      eco103: 'eco101',
      eco201: 'eco102',
      eco202: 'eco103',
      eco131: 'eco121',
      eco221: 'eco121',
    },
    blurb:
      'Thirteen courses taken in order, modeled on Grand Valley State ' +
      'University\u2019s Economics B.A./B.S. (Seidman College of Business) with ' +
      'Ferris State University\u2019s B.S. Economics as a continuity layer \u2014 ' +
      'from an introduction to economics, with personal finance, microeconomics, ' +
      'macroeconomics, statistics, data analytics, and econometrics, to a ' +
      'research-project capstone.',
    capstoneLine:
      'This is the final step of the program \u2014 the capstone. When your research ' +
      'paper is finished and the certification tracker on this page shows READY for ' +
      'Bloomberg Market Concepts, you have completed the program. Economics has no ' +
      'license to practice; the paper and your comprehensive exam scores are the takeaway.',
  },
];

const PROGRAM_NAME = PROGRAMS[0].name;
const PROGRAM_ORDER = PROGRAMS[0].order;
const PREREQS = PROGRAMS[0].prereqs;

const PLUMBING_PROGRAM_NAME = PROGRAMS[1].name;
const PLUMBING_PROGRAM_ORDER = PROGRAMS[1].order;
const PLUMBING_PREREQS = PROGRAMS[1].prereqs;

const BUSINESS_PROGRAM_NAME = PROGRAMS[2].name;
const BUSINESS_PROGRAM_ORDER = PROGRAMS[2].order;
const BUSINESS_PROGRAM_PREREQS = PROGRAMS[2].prereqs;

const ECON_PROGRAM_NAME = PROGRAMS[3].name;
const ECON_PROGRAM_ORDER = PROGRAMS[3].order;
const ECON_PROGRAM_PREREQS = PROGRAMS[3].prereqs;

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

/**
 * URL slug for a program page (/programs/<slug>). Every PROGRAMS entry
 * should carry an explicit `slug` field; the fallback derives one from the
 * name (lowercased, non-alphanumerics collapsed to '-', trailing '-program'
 * stripped) so a future entry without a slug still gets a stable URL.
 */
function programSlug(p) {
  if (p && typeof p.slug === 'string' && p.slug.length > 0) return p.slug;
  const name = p && p.name ? String(p.name) : 'program';
  let slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  slug = slug.replace(/-program$/, '');
  return slug || 'program';
}

/**
 * Find a program by its URL slug. Returns null when no program matches.
 * Otherwise { program, programIndex }.
 */
function programBySlug(slug) {
  if (typeof slug !== 'string' || !slug) return null;
  for (let pi = 0; pi < PROGRAMS.length; pi += 1) {
    if (programSlug(PROGRAMS[pi]) === slug) return { program: PROGRAMS[pi], programIndex: pi };
  }
  return null;
}

const DEFAULT_CAPSTONE_LINE =
  'This is the final step of the program — the capstone. When the certification ' +
  'tracker on this page shows READY, book the real exams through the approved ' +
  'providers listed there.';

/**
 * The final-step line for a program: its own capstoneLine when it has one
 * (the business capstone ends with a finished business plan, not a license),
 * otherwise the default license-tracker line.
 */
function capstoneLineOf(prog) {
  return (prog && prog.capstoneLine) || DEFAULT_CAPSTONE_LINE;
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
    // Per-program final-step line: the business capstone ends with a
    // finished business plan + optional credential exams, not a license.
    // Programs without a capstoneLine keep the original text.
    lines.push('  <p>' + esc(capstoneLineOf(PROGRAMS[info.programIndex])) + '</p>');
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
  BUSINESS_PROGRAM_NAME,
  BUSINESS_PROGRAM_ORDER,
  BUSINESS_PROGRAM_PREREQS,
  ECON_PROGRAM_NAME,
  ECON_PROGRAM_ORDER,
  ECON_PROGRAM_PREREQS,
  programOf,
  programNameOf,
  stepOf,
  nextSlug,
  prereqSlug,
  programSlug,
  programBySlug,
  capstoneLineOf,
  programBannerHtml,
};
