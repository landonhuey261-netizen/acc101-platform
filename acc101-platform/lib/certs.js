'use strict';

// Certification tracker definitions + rendering for the program capstones
// (hvac-cert-prep and plb-cert-prep). Each entry names its capstone; the
// tracker panel renders only the entries for the capstone dashboard it is
// shown on. Readiness is computed from the student's REAL stored data:
// best practice-exam scores (exam_scores), module completion in mapped
// courses (module_done), and study-guide views (guide_views).
//
// Verified standards only (see .hvac-build/SPEC.md): EPA 608 sections pass at
// 70%; NATE Core passes at 70%; NATE does NOT publish the Ready-to-Work pass
// mark (70% is labeled a practice benchmark); HVAC Excellence does NOT publish
// passing scores (readiness is completion-based). No exam fees, ever.

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const EPA_WHERE =
  'The real exam is given by EPA-approved certifying organizations — ESCO Institute, ' +
  'Mainstream Engineering, and Ferris State University are among the largest programs EPA ' +
  'names. Find one on EPA\u2019s official list: ' +
  '<a href="https://www.epa.gov/section608/section-608-technician-certification-programs" target="_blank" rel="noopener">EPA Section 608 Technician Certification Programs</a>. ' +
  'You register and test with them — not inside this app.';

const NATE_WHERE =
  'NATE exams are proctored at NATE Testing Organizations, or online with a live online ' +
  'proctor. Start at NATE\u2019s official Getting Started page and use its Locate a Testing ' +
  'Organization tool: ' +
  '<a href="https://natex.org/technician/become-nate-certified/getting-started-2" target="_blank" rel="noopener">natex.org — Getting Started</a>.';

const NATE_RTW_WHERE =
  'Ready-to-Work is the exception to proctored testing: it is taken online and ' +
  'unproctored. Start at NATE\u2019s official Getting Started page: ' +
  '<a href="https://natex.org/technician/become-nate-certified/getting-started-2" target="_blank" rel="noopener">natex.org — Getting Started</a>.';

const HE_WHERE =
  'Employment Ready exams are taken through HVAC Excellence approved testing sites — ' +
  'often HVAC schools and training programs. Start at the official site: ' +
  '<a href="https://www.hvacexcellence.org" target="_blank" rel="noopener">hvacexcellence.org</a>.';

const NCCER_WHERE =
  'Real NCCER tests are given only at NCCER-accredited training sponsors — ' +
  'never as a public or online exam. Find a sponsor through NCCER: ' +
  '<a href="https://www.nccer.org" target="_blank" rel="noopener">nccer.org</a>. ' +
  'You register and test with them — not inside this app.';

const MI_JOURNEY_WHERE =
  'The written exam is scheduled through PSI: ' +
  '<a href="https://psiexams.com" target="_blank" rel="noopener">psiexams.com</a> ' +
  '(855-579-4635). The hands-on practical exam is scheduled directly with ' +
  'LARA\u2019s Bureau of Construction Codes.';

const MI_MASTER_WHERE =
  'The Master Plumber exam is administered through LARA\u2019s Bureau of ' +
  'Construction Codes. Confirm the current scheduling route and requirements ' +
  'with LARA before booking — the journeyman written exam is scheduled via PSI: ' +
  '<a href="https://psiexams.com" target="_blank" rel="noopener">psiexams.com</a>.';

const ASSE_5110_WHERE =
  'The exam is given at ASSE-approved cross-connection control schools. ' +
  'Find one through ASSE International: ' +
  '<a href="https://asse-plumbing.org" target="_blank" rel="noopener">asse-plumbing.org</a>.';

const ASSE_6010_WHERE =
  'Medical gas certification is administered through NITC and ASSE-approved ' +
  'providers. Start at NITC: ' +
  '<a href="https://www.nitc.com" target="_blank" rel="noopener">nitc.com</a>.';

const OSHA_WHERE =
  'The DOL card comes only from completing an authorized OSHA Outreach Training ' +
  'Program course (10 contact hours over at least 2 days). Find authorized ' +
  'trainers through OSHA: ' +
  '<a href="https://www.osha.gov/outreach-training-program" target="_blank" rel="noopener">osha.gov — Outreach Training Program</a>. ' +
  'OSHA 10 is the entry-level card for site work; OSHA 30 is for supervisors ' +
  'and workers with safety duties, and can be taken without OSHA 10.';

const CERTS = [
  {
    id: 'epa-608',
    capstone: 'hvac-cert-prep',
    name: 'EPA Section 608 Certification',
    blurb:
      'The federal certification that lets you legally buy refrigerant and service ' +
      'equipment that could release refrigerant. Core is required with every type; ' +
      'pass Core plus all three types to earn Universal. It never expires.',
    kind: 'sections',
    standard: 70,
    sections: [
      { label: 'Core', examKey: 'midterm' },
      { label: 'Type I — Small Appliances', examKey: 'epa-type-1' },
      { label: 'Type II — High-Pressure Appliances', examKey: 'epa-type-2' },
      { label: 'Type III — Low-Pressure Appliances', examKey: 'epa-type-3' },
    ],
    mapped:
      'Prepared by HVAC 101 and HVAC 102 (Core, Type I, Type II foundations), HVAC 207 ' +
      '(large-charge rules), and HVAC 127 (low-pressure controls). Practice exams: the ' +
      'four EPA 608 practice exams in this course.',
    readyRule:
      'A section shows READY when your best practice score reaches 70% — the real ' +
      'passing standard for each 25-question section (at least 18 of 25 correct).',
    guideId: 'epa-608',
    guideLabel: 'EPA 608 study guide',
    where: EPA_WHERE,
  },
  {
    id: 'nate-ready-to-work',
    capstone: 'hvac-cert-prep',
    name: 'NATE Ready-to-Work Certificate',
    blurb:
      'NATE\u2019s entry-level certificate for new technicians: components, tools, ' +
      'general and electrical safety, basic heat transfer, and measurements/units — ' +
      '50 questions, online and unproctored.',
    kind: 'single',
    examKey: 'nate-ready-to-work',
    examLabel: 'NATE Ready-to-Work practice exam',
    standard: 70,
    benchmark: true,
    mapped:
      'Prepared by HVAC 101 (components, heat transfer) and HVAC 111 (tools, ' +
      'electrical safety, measurements). Practice exam: the Ready-to-Work practice ' +
      'exam in this course.',
    readyRule:
      'READY here means your best practice score reached 70% — a practice benchmark. ' +
      'NATE does not publish the official Ready-to-Work pass mark, so treat 70% as a ' +
      'strong readiness signal, not the official standard.',
    guideId: 'nate-ready-to-work',
    guideLabel: 'Ready-to-Work study guide',
    where: NATE_RTW_WHERE,
  },
  {
    id: 'nate-core',
    capstone: 'hvac-cert-prep',
    name: 'NATE Core (Service Technician)',
    blurb:
      'The foundation exam of NATE certification: 50 questions, closed book, and ' +
      'passing Core plus one specialty exam (100 questions) earns NATE certification, ' +
      'renewed on a 2-year cycle with continuing education.',
    kind: 'single',
    examKey: 'final',
    examLabel: 'NATE Core practice exam (this course\u2019s final)',
    standard: 70,
    mapped:
      'Prepared by HVAC 111 and HVAC 117 (Basic Electrical — the largest Core block), ' +
      'HVAC 111 (Tools, Safety), HVAC 132 (Safety), HVAC 208 (taking temperature and ' +
      'humidity measurements, achieving desired conditions), and HVAC 245 (basic ' +
      'construction and science).',
    readyRule:
      'READY when your best NATE Core practice score reaches 70% — the real Core ' +
      'passing standard (35 of 50 questions).',
    guideId: 'nate-core',
    guideLabel: 'NATE Core study guide',
    where: NATE_WHERE,
  },
  {
    id: 'hvac-excellence-er',
    capstone: 'hvac-cert-prep',
    name: 'HVAC Excellence Employment Ready',
    blurb:
      'Industry competency exams for new technicians: Electrical, Air Conditioning, ' +
      'Electric Heat, Light Commercial Air Conditioning, Light Commercial ' +
      'Refrigeration, Basic Refrigeration & Charging Procedures, Gas Heat, Oil Heat, ' +
      'and Heat Pumps.',
    kind: 'completion',
    mappedCourses: ['hvac101', 'hvac102', 'hvac111', 'hvac117', 'hvac132', 'hvac207', 'hvac208', 'hvac235'],
    mapped:
      'Prepared across the program: Electrical (HVAC 111, 117); Air Conditioning ' +
      '(HVAC 101, 102, 208); Electric Heat and Gas Heat (HVAC 132, 235); Light ' +
      'Commercial A/C and Light Commercial Refrigeration (HVAC 207); Basic ' +
      'Refrigeration & Charging Procedures (HVAC 101, 102); Heat Pumps (HVAC 208, 235).',
    readyRule:
      'HVAC Excellence does not publish its passing scores, so there is no honest ' +
      'score target. Readiness here is completion-based: finish every mapped course ' +
      'and review the Employment Ready study guide.',
    guideId: 'hvac-excellence-employment-ready',
    guideLabel: 'Employment Ready study guide',
    where: HE_WHERE,
  },
  {
    id: 'nccer-plumbing',
    capstone: 'plb-cert-prep',
    name: 'NCCER Plumbing (Levels 1\u20134)',
    blurb:
      'The industry-standard plumbing apprenticeship credential: four levels ' +
      'covering pipe, DWV, water supply, codes, and specialty systems. NCCER ' +
      'Core is the prerequisite before any Level 1 credential, and NCCER ' +
      'Plumbing credentials never expire.',
    kind: 'sections',
    standard: 70,
    sections: [
      { label: 'Level 1', examKey: 'midterm' },
      { label: 'Level 2', examKey: 'nccer-level-2' },
      { label: 'Level 3', examKey: 'nccer-level-3' },
      { label: 'Level 4', examKey: 'nccer-level-4' },
    ],
    mapped:
      'Prepared across the Plumbing & Pipefitting program: Level 1 in ' +
      'Plumbing 101\u2013102, Level 2 in Plumbing 111\u2013122, Level 3 in Plumbing ' +
      '131\u2013201, and Level 4 in Plumbing 202\u2013203. Practice exams: the four ' +
      'NCCER practice exams in this course.',
    readyRule:
      'A section shows READY when your best practice score reaches 70% — ' +
      'NCCER\u2019s minimum passing score for its module tests.',
    guideId: 'nccer-plumbing-levels',
    guideLabel: 'NCCER Plumbing Levels 1\u20134 study guide',
    where: NCCER_WHERE,
  },
  {
    id: 'michigan-journeyman',
    capstone: 'plb-cert-prep',
    name: 'Michigan Journeyman Plumber',
    blurb:
      'Michigan\u2019s plumbing license for working plumbers: 125 questions, ' +
      '180 minutes, open book, plus a hands-on practical exam (copper project ' +
      'and isometric workbook). You must first complete 6,000 hours over at ' +
      'least 3 years as a registered apprentice under a licensed master plumber ' +
      '— this program teaches the knowledge side; it does not grant the license.',
    kind: 'single',
    examKey: 'mi-journeyman',
    examLabel: 'Michigan Journeyman practice exam (written)',
    standard: 75,
    mapped:
      'Prepared by Plumbing 201 (plumbing codes, sizing & system design) and ' +
      'the capstone\u2019s journeyman review modules. Practice exam: the Michigan ' +
      'Journeyman practice exam in this course.',
    readyRule:
      'READY when your best practice score reaches 75% — the newest published ' +
      'pass figure for the journeyman written exam. Older sources say 70%; ' +
      'the 75% figure is flagged for re-verification with LARA/PSI before ' +
      'booking the real exam.',
    guideId: 'michigan-journeyman',
    guideLabel: 'Michigan Journeyman Plumber study guide',
    where: MI_JOURNEY_WHERE,
  },
  {
    id: 'michigan-master',
    capstone: 'plb-cert-prep',
    name: 'Michigan Master Plumber',
    blurb:
      'The top of the Michigan plumbing path: a 130-question, 3-hour exam for ' +
      'plumbers who have worked 4,000 hours as a licensed journey plumber over ' +
      'at least 2 years. A master license is what lets you pull permits and ' +
      'run a plumbing business.',
    kind: 'single',
    examKey: 'mi-master',
    examLabel: 'Michigan Master Plumber practice exam',
    standard: 75,
    mapped:
      'Prepared by Plumbing 201 (codes & system design), Plumbing 203 ' +
      '(business principles and the path to master), and the capstone\u2019s ' +
      'master review module. Practice exam: the Michigan Master Plumber ' +
      'practice exam in this course.',
    readyRule:
      'READY when your best practice score reaches 75%. Flagged: this figure ' +
      'comes from secondary sources only — LARA\u2019s own pages could not be ' +
      'verified directly — so re-verify the pass mark with LARA before ' +
      'booking the real exam.',
    guideId: 'michigan-master',
    guideLabel: 'Michigan Master Plumber study guide',
    where: MI_MASTER_WHERE,
  },
  {
    id: 'asse-5110',
    capstone: 'plb-cert-prep',
    name: 'ASSE 5110 Backflow Prevention Assembly Tester',
    blurb:
      'The credential for testing backflow prevention assemblies (RPZ, DCVA, ' +
      'PVB, SVBA). Eligibility first: at least 5 years documented practical ' +
      'experience plus a minimum 40-hour ASSE-approved course. The credential ' +
      'is valid 3 years.',
    kind: 'single',
    examKey: 'asse-5110',
    examLabel: 'ASSE 5110 practice exam',
    standard: 70,
    mapped:
      'Prepared by Plumbing 122 (cross-connections & backflow basics), ' +
      'Plumbing 202 (backflow assemblies and test procedures), and the ' +
      'capstone\u2019s ASSE 5110 review module. Practice exam: the ASSE 5110 ' +
      'practice exam in this course.',
    readyRule:
      'READY when your best practice score reaches 70% — ASSE\u2019s official ' +
      'passing standard for the 100-question written exam (2-hour limit). ' +
      'The real credential also requires passing the hands-on practical: ' +
      'field-testing all four assemblies.',
    guideId: 'asse-5110',
    guideLabel: 'ASSE 5110 Backflow Tester study guide',
    where: ASSE_5110_WHERE,
  },
  {
    id: 'asse-6010',
    capstone: 'plb-cert-prep',
    name: 'ASSE 6010 Medical Gas Systems Installer',
    blurb:
      'The credential for installing medical gas and vacuum systems to NFPA 99. ' +
      'Eligibility first: at least 4 years documented practical experience ' +
      'plus a minimum 32-hour ASSE 6010 course and a brazing exam (80% or ' +
      'greater penetration). The credential is valid 3 years.',
    kind: 'single',
    examKey: 'final',
    examLabel: 'ASSE 6010 practice exam (this course\u2019s final)',
    standard: 70,
    benchmark: true,
    mapped:
      'Prepared by Plumbing 132 (fuel gas and brazing), Plumbing 203 ' +
      '(medical gas & vacuum systems), and the capstone\u2019s ASSE 6010 review ' +
      'module. Practice exam: the ASSE 6010 practice exam in this course.',
    readyRule:
      'READY here means your best practice score reached 70% — a practice ' +
      'benchmark. ASSE\u2019s own standard is 70%, but NITC, the main certifying ' +
      'body, requires 77% — aim for 77%+ if you test through NITC. The real ' +
      'credential also requires passing the brazing exam.',
    guideId: 'asse-6010',
    guideLabel: 'ASSE 6010 Medical Gas Installer study guide',
    where: ASSE_6010_WHERE,
  },
  {
    id: 'osha-10',
    capstone: 'plb-cert-prep',
    name: 'OSHA 10-Hour Construction',
    blurb:
      'The U.S. Department of Labor Outreach Training Program completion card ' +
      'for construction site work — a DOL wallet card, not a license or ' +
      'certification. There is no federally required exam or passing score, ' +
      'so this card tracks the path, not a test score.',
    kind: 'attestation',
    steps: [
      'Complete an authorized OSHA Outreach Training Program course (10 contact hours over at least 2 days).',
      'Your DOL wallet card is issued by the authorized trainer within 90 days of completing the course.',
      'There is no federal expiry on the card — some states and cities set their own limits.',
      'OSHA 10 is the entry-level card for site work; OSHA 30 is for supervisors and workers with safety duties.',
    ],
    mapped:
      'Prepared by Plumbing 101 (jobsite safety & OSHA basics) and the ' +
      'capstone\u2019s OSHA, safety & UA apprenticeship module.',
    readyRule:
      'There is no exam score for OSHA 10 — no federal exam exists. This card ' +
      'shows READY only once you have reviewed the study guide below, and ' +
      'that means only that you reviewed the guide — no exam score exists. ' +
      'It is informational: the real DOL card comes only from completing an ' +
      'authorized OSHA Outreach Training Program course.',
    guideId: 'osha-ua-path',
    guideLabel: 'OSHA 10/30 & the UA Apprenticeship Path study guide',
    where: OSHA_WHERE,
  },
];

const ALL_MAPPED_COURSES = Array.from(
  new Set(CERTS.flatMap((c) => c.mappedCourses || []))
);

function statusBadge(ready) {
  return ready
    ? '<strong class="cert-ready">READY</strong>'
    : '<strong class="cert-notyet">NOT YET</strong>';
}

function examRow(label, best, standard, benchmark) {
  const attempted = typeof best === 'number';
  const ready = attempted && best >= standard;
  return (
    '    <li><strong>' + esc(label) + '</strong> — best practice score: ' +
    (attempted ? '<strong>' + esc(String(best)) + '%</strong>' : 'not attempted yet') +
    ' · standard: ' + standard + '%' + (benchmark ? ' (practice benchmark)' : '') +
    ' · ' + statusBadge(ready) + '</li>'
  );
}

function renderCert(cert, ctx) {
  const bestBy = ctx.bestBy || {};
  let rows = '';
  let overallReady = false;

  if (cert.kind === 'sections') {
    rows = cert.sections
      .map((s) => examRow(s.label, bestBy[s.examKey], cert.standard, false))
      .join('\n');
    overallReady = cert.sections.every(
      (s) => typeof bestBy[s.examKey] === 'number' && bestBy[s.examKey] >= cert.standard
    );
    // The "Universal" line belongs ONLY to EPA 608 (Core + Type I/II/III =
    // Universal). NCCER Plumbing Levels 1-4 has no Universal credential, so
    // the row must not render on its card.
    if (cert.id === 'epa-608') {
      rows +=
        '\n    <li><strong>Universal (Core + all three types)</strong> · ' +
        statusBadge(overallReady) + '</li>';
    }
  } else if (cert.kind === 'single') {
    rows = examRow(cert.examLabel, bestBy[cert.examKey], cert.standard, !!cert.benchmark);
    overallReady =
      typeof bestBy[cert.examKey] === 'number' && bestBy[cert.examKey] >= cert.standard;
  } else if (cert.kind === 'completion') {
    const progress = ctx.courseProgress || {};
    let finished = 0;
    for (const slug of cert.mappedCourses) {
      const p = progress[slug];
      if (p && p.total > 0 && p.done >= p.total) finished += 1;
    }
    const guideViewed = ctx.guideViews && ctx.guideViews.has(cert.guideId);
    overallReady = finished === cert.mappedCourses.length && !!guideViewed;
    rows =
      '    <li><strong>Mapped courses finished</strong> — ' + finished + ' of ' +
      cert.mappedCourses.length + ' · ' + statusBadge(finished === cert.mappedCourses.length) + '</li>\n' +
      '    <li><strong>Employment Ready study guide reviewed</strong> — ' +
      (guideViewed ? 'yes' : 'not yet') + ' · ' + statusBadge(!!guideViewed) + '</li>';
  } else if (cert.kind === 'attestation') {
    // No exam exists for this credential, so there is no score to track.
    // READY comes only from the study guide having been viewed, and is
    // labeled informational everywhere it appears.
    const guideViewed = ctx.guideViews && ctx.guideViews.has(cert.guideId);
    overallReady = !!guideViewed;
    const stepItems = (cert.steps || [])
      .map((s) => '    <li>' + esc(s) + '</li>')
      .join('\n');
    rows =
      stepItems + '\n' +
      '    <li><strong>Study guide reviewed</strong> — ' +
      (guideViewed ? 'yes' : 'not yet') + ' · ' + statusBadge(!!guideViewed) +
      ' <em>(informational — reviewed the guide; no exam score exists)</em></li>';
  }

  return (
    '<article class="card cert-card">\n' +
    '  <h3>' + esc(cert.name) + ' — ' + statusBadge(overallReady) + '</h3>\n' +
    '  <p>' + esc(cert.blurb) + '</p>\n' +
    '  <p class="section-sub">' + esc(cert.mapped) + '</p>\n' +
    '  <ul class="lab-list">\n' + rows + '\n  </ul>\n' +
    '  <p>' + esc(cert.readyRule) + '</p>\n' +
    '  <p><a class="btn btn-small" href="/c/' + esc(cert.capstone) + '/guides/' + esc(cert.guideId) + '">' +
    esc(cert.guideLabel) + '</a></p>\n' +
    '  <p class="section-sub"><strong>Where to take the real test:</strong> ' + cert.where + '</p>\n' +
    '</article>'
  );
}

/**
 * ctx: { bestBy: {examKey: bestPercent}, courseProgress: {slug: {done, total}},
 *        guideViews: Set<string>, capstone?: string }
 * capstone (2nd arg, or ctx.capstone) scopes the panel to one capstone
 * dashboard: hvac-cert-prep shows only the HVAC entries, plb-cert-prep
 * only the plumbing entries. With no capstone given, all entries render
 * (legacy behavior — no caller should rely on it for a dashboard).
 */
function renderCertPanel(ctx, capstone) {
  const slug = capstone || (ctx && ctx.capstone) || null;
  const list = slug ? CERTS.filter((c) => c.capstone === slug) : CERTS;
  const cards = list.map((c) => renderCert(c, ctx)).join('\n');
  const licensingNote = slug === 'plb-cert-prep'
    ? 'Michigan plumbing licensing is covered by the two Michigan entries below; ' +
      'other state and local licensing is separate and varies by state.'
    : 'State and local licensing is separate from all of these and varies by state.';
  return (
    '<section class="cert-tracker">\n' +
    '  <h2>Certification tracker</h2>\n' +
    '  <p class="section-sub">The certifications this program prepares you for, whether ' +
    'your own practice results say you are ready, and where the real exams are taken. ' +
    'All practice exams here use original questions in the real exams\u2019 format; the ' +
    'real exams are taken through approved providers, not in this app. ' + licensingNote + '</p>\n' +
    '  <div class="card-grid">\n' + cards + '\n  </div>\n' +
    '</section>\n'
  );
}

module.exports = { CERTS, ALL_MAPPED_COURSES, renderCertPanel };
