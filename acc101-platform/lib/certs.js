'use strict';

// Certification tracker definitions + rendering for the HVAC/R program
// capstone (hvac-cert-prep). Readiness is computed from the student's REAL
// stored data: best practice-exam scores (exam_scores), module completion in
// mapped courses (module_done), and study-guide views (guide_views).
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

const CERTS = [
  {
    id: 'epa-608',
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
    rows +=
      '\n    <li><strong>Universal (Core + all three types)</strong> · ' +
      statusBadge(overallReady) + '</li>';
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
  }

  return (
    '<article class="card cert-card">\n' +
    '  <h3>' + esc(cert.name) + ' — ' + statusBadge(overallReady) + '</h3>\n' +
    '  <p>' + esc(cert.blurb) + '</p>\n' +
    '  <p class="section-sub">' + esc(cert.mapped) + '</p>\n' +
    '  <ul class="lab-list">\n' + rows + '\n  </ul>\n' +
    '  <p>' + esc(cert.readyRule) + '</p>\n' +
    '  <p><a class="btn btn-small" href="/c/hvac-cert-prep/guides/' + esc(cert.guideId) + '">' +
    esc(cert.guideLabel) + '</a></p>\n' +
    '  <p class="section-sub"><strong>Where to take the real test:</strong> ' + cert.where + '</p>\n' +
    '</article>'
  );
}

/**
 * ctx: { bestBy: {examKey: bestPercent}, courseProgress: {slug: {done, total}},
 *        guideViews: Set<string> }
 */
function renderCertPanel(ctx) {
  const cards = CERTS.map((c) => renderCert(c, ctx)).join('\n');
  return (
    '<section class="cert-tracker">\n' +
    '  <h2>Certification tracker</h2>\n' +
    '  <p class="section-sub">The certifications this program prepares you for, whether ' +
    'your own practice results say you are ready, and where the real exams are taken. ' +
    'All practice exams here use original questions in the real exams\u2019 format; the ' +
    'real exams are taken through approved providers, not in this app. State and local ' +
    'licensing is separate from all of these and varies by state.</p>\n' +
    '  <div class="card-grid">\n' + cards + '\n  </div>\n' +
    '</section>\n'
  );
}

module.exports = { CERTS, ALL_MAPPED_COURSES, renderCertPanel };
