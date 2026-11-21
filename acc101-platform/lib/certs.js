'use strict';

// Certification tracker definitions + rendering for the program capstones
// (hvac-cert-prep, plb-cert-prep, bus-capstone, eco-capstone,
// ase-cert-prep, asl-capstone, con301, ele290, eng495, med201, cmp199, and egr290). Each entry names its capstone; the
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

const NALP_WHERE =
  'The real exam is taken online through NALP\u2019s remote proctoring. ' +
  'Register and enroll through the National Association of Landscape ' +
  'Professionals: ' +
  '<a href="https://www.landscapeprofessionals.org" target="_blank" rel="noopener">landscapeprofessionals.org</a>. ' +
  'You have 12 months from enrollment to complete it. You test with them — not inside this app.';

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

const ASE_WHERE =
  'ASE certification tests are taken at Prometric test centers, year-round by ' +
  'appointment. Register and schedule through ASE: ' +
  '<a href="https://www.ase.com" target="_blank" rel="noopener">ase.com</a>. ' +
  'You register and test with ASE — not inside this app.';

const ASLPI_WHERE =
  'The ASLPI is given by Gallaudet University\u2019s ASL Diagnostic and ' +
  'Evaluation Services — in person at Gallaudet in Washington, D.C., or by ' +
  'videophone from other locations (a proctor is required for the distance ' +
  'format). Book through Gallaudet: ' +
  '<a href="https://gallaudet.edu/american-sign-language-proficiency-interview-aslpi/" target="_blank" rel="noopener">gallaudet.edu — American Sign Language Proficiency Interview (ASLPI)</a>. ' +
  'You register and interview with Gallaudet — not inside this app.';

const ACI_WHERE =
  'The written exam and the hands-on performance exam are given through ' +
  'ACI chapters and approved examiners. Find one through the American ' +
  'Concrete Institute: ' +
  '<a href="https://www.concrete.org" target="_blank" rel="noopener">concrete.org</a>. ' +
  'You register and test with them — not inside this app.';

const AWS_WHERE =
  'The Certified Welder test is given only at AWS Accredited Test ' +
  'Facilities, where you weld a test coupon to a written welding procedure ' +
  'specification (WPS) and the weld is inspected to the code\u2019s acceptance ' +
  'criteria. Find a facility through the American Welding Society: ' +
  '<a href="https://www.aws.org" target="_blank" rel="noopener">aws.org</a>. ' +
  'You register and test with them — not inside this app.';

const MI_ELEC_WHERE =
  'The Michigan journeyman and master electrician exams are administered through PSI. Schedule through PSI: ' +
  '<a href="https://psiexams.com" target="_blank" rel="noopener">psiexams.com</a> ' +
  '(855-579-4635). Detroit issues its own electrical licenses \u2014 check Detroit\u2019s own requirements separately. ' +
  'You register and test with PSI \u2014 not inside this app.';

const NABCEP_WHERE =
  'The NABCEP PV Associate exam is scheduled through NABCEP. Start at NABCEP: ' +
  '<a href="https://www.nabcep.org" target="_blank" rel="noopener">nabcep.org</a>. ' +
  'You register and test with NABCEP \u2014 not inside this app.';

const ENG_CAPSTONE_WHERE =
  'There is no real test for this — it is the app\u2019s own capstone work, ' +
  'completed inside this course. The portfolio and research paper are yours ' +
  'to keep and show; no outside body issues a credential for them.';

const CLEP_WHERE =
  'CLEP College Composition is taken at a CLEP test center — register ' +
  'through the College Board: ' +
  '<a href="https://clep.collegeboard.org" target="_blank" rel="noopener">clep.collegeboard.org</a>. ' +
  'The exam is 50 multiple-choice questions plus 2 timed essays; the ' +
  'ACE-recommended credit-granting score is 50. Whether your target college ' +
  'awards credit, and how much, is that college\u2019s decision — no fee is ' +
  'stated here because it was not verified against College Board.';

const NREMT_WHERE =
  'The real NREMT EMT exam is computer-adaptive, given at Pearson VUE test ' +
  'centers or online via OnVUE. Start at the National Registry of Emergency ' +
  'Medical Technicians: ' +
  '<a href="https://www.nremt.org" target="_blank" rel="noopener">nremt.org</a>. ' +
  'You register and test with them \u2014 not inside this app. The exam fee is ' +
  '$104 per attempt.';

const NASM_WHERE =
  'The NASM Certified Nutrition Coach exam is taken online through NASM. Start ' +
  'at the National Academy of Sports Medicine: ' +
  '<a href="https://www.nasm.org" target="_blank" rel="noopener">nasm.org</a>. ' +
  'You register and test with NASM \u2014 not inside this app. No fee is stated ' +
  'here because it was not verified against NASM.';

const ACSM_WHERE =
  'The real ACSM Certified Exercise Physiologist exam is taken at a Pearson ' +
  'VUE testing centre or online. Start at the American College of Sports ' +
  'Medicine: ' +
  '<a href="https://www.acsm.org" target="_blank" rel="noopener">acsm.org</a>. ' +
  'You register and test with ACSM \u2014 not inside this app. No fee is stated ' +
  'here because it was not verified against ACSM.';

const NSCA_WHERE =
  'The real NSCA Certified Strength and Conditioning Specialist exam is taken ' +
  'at a Pearson VUE testing centre. Start at the National Strength and ' +
  'Conditioning Association: ' +
  '<a href="https://www.nsca.com" target="_blank" rel="noopener">nsca.com</a>. ' +
  'You register and test with NSCA \u2014 not inside this app. No fee is stated ' +
  'here because it was not verified against NSCA.';

const BLS_WHERE =
  'The AHA BLS Provider course is taken in person with an American Heart ' +
  'Association instructor, or as HeartCode BLS online plus an in-person skills ' +
  'session. Find a course through the American Heart Association: ' +
  '<a href="https://cpr.heart.org" target="_blank" rel="noopener">cpr.heart.org</a>. ' +
  'An online-only course with no skills demonstration does not earn the eCard.';

const APLUS_WHERE =
  'The real A+ exams are taken at a Pearson VUE testing center. Start at ' +
  'CompTIA: ' +
  '<a href="https://www.comptia.org" target="_blank" rel="noopener">comptia.org</a>. ' +
  'You register and test with them \u2014 not inside this app. No exam fee is ' +
  'stated here: fees are set by CompTIA and change.';

const ACP_WHERE =
  'The real Adobe Certified Professional exams are delivered through ' +
  'Certiport, at testing centers or by OnVUE remote proctoring. Start at ' +
  'Adobe: ' +
  '<a href="https://certifiedprofessional.adobe.com" target="_blank" rel="noopener">certifiedprofessional.adobe.com</a>. ' +
  'You register and test with them \u2014 not inside this app. No exam fee is ' +
  'stated here: fees are set by Adobe/Certiport and change.';

const CMP_PORTFOLIO_WHERE =
  'There is no outside exam for the portfolio \u2014 it is the student\u2019s own ' +
  'shipped work: a working app, an edited photo, and a 60-second video, ' +
  'presented on the portfolio website built in this program.';

const FE_WHERE =
  'The real FE exam is taken at a Pearson VUE testing center, after you ' +
  'register through NCEES. Start at NCEES: ' +
  '<a href="https://ncees.org" target="_blank" rel="noopener">ncees.org</a>. ' +
  'You register and test with them \u2014 not inside this app. The exam fee is ' +
  '$225. NCEES publishes no passing score \u2014 results are pass/fail only. ' +
  'Michigan FE/PE application steps and fees are not stated here; check them ' +
  'with the Michigan licensing board (LARA) directly when you are ready.';

const CSWA_WHERE =
  'The real CSWA exam is taken live in SOLIDWORKS through the TesterPRO ' +
  'application. A voucher typically costs $99. Start at Dassault Syst\u00e8mes ' +
  'SOLIDWORKS certification: ' +
  '<a href="https://www.solidworks.com/sw/support/cad-certification.htm" target="_blank" rel="noopener">solidworks.com — CAD Certification</a>. ' +
  'The CSWA\u2013Academic version needs a qualified institution and proctoring; ' +
  'the commercial version is available on demand. You register and test with ' +
  'them \u2014 not inside this app.';

const PMMI_WHERE =
  'Real PMMI assessments are taken through PMMI and its approved providers. ' +
  'Start at PMMI: ' +
  '<a href="https://www.pmmi.org" target="_blank" rel="noopener">pmmi.org</a>. ' +
  'You register and test with them \u2014 not inside this app. This course ' +
  'states no PMMI item counts, pass marks, or fees, because those are ' +
  'unverified.';

const EGR_PROJECT_WHERE =
  'There is no outside exam for the design project \u2014 it is the student\u2019s own ' +
  'built work: a requirements document, a design with calculations and a ' +
  'parts list, a test plan with results, and a project report, checked ' +
  'against the rubric in the design project guide.';

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
  {
    id: 'quickbooks-user',
    capstone: 'bus-capstone',
    name: 'Intuit QuickBooks Online Certified User',
    blurb:
      'Industry-recognized credential validating skill in Intuit QuickBooks ' +
      'Online; ~40 questions, 50 minutes, online proctored; ~150 hours of ' +
      'instruction recommended; open to students, entrepreneurs, and job seekers.',
    kind: 'single',
    examKey: 'quickbooks-user',
    examLabel: 'QuickBooks Online Certified User practice exam',
    standard: 80,
    benchmark: true,
    mapped:
      'Prepared by ACC 101, ACC 102, Financial Management, and ' +
      'Entrepreneurship & Small Business Management. Practice exam: the ' +
      'QuickBooks Online Certified User practice exam in this course.',
    readyRule:
      'READY when your best practice score reaches 80% — a practice ' +
      'benchmark; Certiport publishes no pass mark for this exam.',
    guideId: 'quickbooks-user',
    guideLabel: 'QuickBooks Certified User study guide',
    where:
      'Certiport authorized testing centers or online-proctored exams — ' +
      'start at ' +
      '<a href="https://certiport.pearsonvue.com" target="_blank" rel="noopener">certiport.pearsonvue.com</a>.',
  },
  {
    id: 'capm-practice',
    capstone: 'bus-capstone',
    name: 'CAPM (Certified Associate in Project Management)',
    blurb:
      'PMI\u2019s entry-level project management certification; 150 questions, ' +
      '3 hours, via Pearson VUE. Eligibility: 23 hours of project management ' +
      'education + high school diploma; must be at least 18; formal courses ' +
      'only — self-study does not count. No experience required.',
    kind: 'single',
    examKey: 'capm-practice',
    examLabel: 'CAPM practice exam',
    standard: 70,
    benchmark: true,
    mapped:
      'Prepared by Operations, Quality & Supply Chain Management project ' +
      'management modules and the capstone. Practice exam: the CAPM practice ' +
      'exam in this course.',
    readyRule:
      'READY when your best practice score reaches 70% — a practice ' +
      'benchmark; PMI publishes no passing score.',
    guideId: 'capm-foundations',
    guideLabel: 'CAPM Foundations study guide',
    where:
      'PMI via Pearson VUE — start at ' +
      '<a href="https://www.pmi.org" target="_blank" rel="noopener">pmi.org</a>.',
  },
  {
    id: 'google-digital-marketing',
    capstone: 'bus-capstone',
    name: 'Google Digital Marketing & E-commerce Certificate',
    blurb:
      '7-course Coursera certificate covering digital marketing and ' +
      'e-commerce; completion-based, no scored exam.',
    kind: 'completion',
    mappedCourses: ['mkt101'],
    mapped:
      'Prepared by Principles of Marketing. There is no exam score for ' +
      'this certificate — completion is the credential.',
    readyRule:
      'Completion-based — finish Principles of Marketing and review the ' +
      'Business Core Comprehensive study guide; there is no exam score.',
    guideId: 'business-core',
    guideLabel: 'Business Core Comprehensive study guide',
    where:
      'Coursera — ' +
      '<a href="https://www.coursera.org" target="_blank" rel="noopener">coursera.org</a>.',
  },
  {
    id: 'ase-master-automobile',
    capstone: 'ase-cert-prep',
    name: 'ASE Master Automobile Technician',
    blurb:
      'The credential working mechanics are known by: pass all eight ' +
      'Automobile tests, A1 through A8. A9 (Light Vehicle Diesel Engines) ' +
      'is a separate specialty and does not count toward Master status. ' +
      'Certification also needs 2 years of documented hands-on work ' +
      'experience (1 year plus a 2-year automotive training program can ' +
      'substitute) — passing the tests alone does not certify you.',
    kind: 'sections',
    standard: 70,
    benchmark: true,
    sections: [
      { label: 'A1 — Engine Repair', examKey: 'midterm' },
      { label: 'A2 — Automatic Transmission / Transaxle', examKey: 'ase-a2' },
      { label: 'A3 — Manual Drive Train & Axles', examKey: 'ase-a3' },
      { label: 'A4 — Suspension & Steering', examKey: 'ase-a4' },
      { label: 'A5 — Brakes', examKey: 'ase-a5' },
      { label: 'A6 — Electrical / Electronic Systems', examKey: 'ase-a6' },
      { label: 'A7 — Heating & Air Conditioning', examKey: 'ase-a7' },
      { label: 'A8 — Engine Performance', examKey: 'ase-a8' },
    ],
    mapped:
      'Prepared across the Automotive Service Technology program: A1 in ' +
      'Engine Repair, A2 in Automatic Transmission / Transaxle, A3 in Manual ' +
      'Drive Train & Axles, A4 in Suspension & Steering, A5 in Brakes, A6 in ' +
      'Electrical / Electronic Systems, A7 in Heating & Air Conditioning, ' +
      'and A8 in Engine Performance. Practice exams: the eight A-series ' +
      'practice exams in this course.',
    readyRule:
      'A section shows READY when your best practice score reaches 70% — a ' +
      'practice benchmark. ASE publishes no raw percentage pass mark (it ' +
      'scores on a 400–999 scaled scale), so treat 70% as a strong readiness ' +
      'signal, not the official standard. The real credential also needs 2 ' +
      'years of documented hands-on work experience.',
    guideId: 'ase-a1',
    guideLabel: 'A1 Engine Repair study guide',
    where: ASE_WHERE,
  },
  {
    id: 'ase-l1',
    capstone: 'ase-cert-prep',
    name: 'ASE L1 Advanced Engine Performance Specialist',
    blurb:
      'ASE\u2019s advanced engine-diagnostics credential: emission failures ' +
      'and driveability problems on computer-controlled engine systems, ' +
      'tested against the Composite Vehicle Type 4 reference booklet. ' +
      'You cannot register for L1 until you have passed A8, and the ' +
      'credential needs 3 years of documented hands-on work experience.',
    kind: 'single',
    examKey: 'ase-l1',
    examLabel: 'L1 practice exam',
    standard: 70,
    benchmark: true,
    mapped:
      'Prepared by Engine Performance and the Advanced Engine Performance ' +
      'Specialist course, plus the capstone\u2019s L1 review module. Practice ' +
      'exam: the L1 practice exam in this course.',
    readyRule:
      'READY when your best practice score reaches 70% — a practice ' +
      'benchmark. ASE publishes no raw percentage pass mark, so treat 70% ' +
      'as a strong readiness signal, not the official standard. The real ' +
      'credential also needs A8 passed first and 3 years of documented ' +
      'hands-on work experience.',
    guideId: 'ase-l1',
    guideLabel: 'L1 Advanced Engine Performance study guide',
    where: ASE_WHERE,
  },
  {
    id: 'ase-l3',
    capstone: 'ase-cert-prep',
    name: 'ASE L3 Light Duty Hybrid / Electric Vehicle Specialist',
    blurb:
      'ASE\u2019s hybrid and electric vehicle credential: diagnosis of ' +
      'high-voltage battery systems, power electronics, drive systems, and ' +
      'supporting systems on hybrids and EVs. You cannot register for L3 ' +
      'until you have passed both A6 and A8, and the credential needs 3 ' +
      'years of documented hands-on work experience.',
    kind: 'single',
    examKey: 'final',
    examLabel: 'L3 practice exam (this course\u2019s final)',
    standard: 70,
    benchmark: true,
    mapped:
      'Prepared by Electrical / Electronic Systems, Engine Performance, and ' +
      'the Light Duty Hybrid / Electric Vehicle Specialist course, plus the ' +
      'capstone\u2019s L1 + L3 review module. Practice exam: the L3 practice ' +
      'exam in this course.',
    readyRule:
      'READY when your best practice score reaches 70% — a practice ' +
      'benchmark. ASE publishes no raw percentage pass mark, so treat 70% ' +
      'as a strong readiness signal, not the official standard. The real ' +
      'credential also needs A6 and A8 passed first and 3 years of ' +
      'documented hands-on work experience.',
    guideId: 'ase-l3',
    guideLabel: 'L3 Hybrid / Electric Vehicle study guide',
    where: ASE_WHERE,
  },
  {
    id: 'ase-work-experience',
    capstone: 'ase-cert-prep',
    name: 'ASE Work Experience — the credential behind the tests',
    blurb:
      'ASE certifies people, not test scores. A1–A9 need 2 years of ' +
      'documented hands-on work experience (1 year plus a 2-year automotive ' +
      'training program can substitute); L1 and L3 need 3 years. You can ' +
      'take the tests before the experience is complete, but ASE does not ' +
      'issue the credential until it has the proof.',
    kind: 'attestation',
    steps: [
      'A1–A9: 2 years of documented hands-on work experience (1 year plus a 2-year automotive training program can substitute).',
      'L1: A8 passed first, then 3 years of documented hands-on work experience.',
      'L3: A6 and A8 passed first, then 3 years of documented hands-on work experience.',
      'ASE certifications are valid 5 years; recertification tests are about half as long as the initial tests.',
      'Fail a test and ASE makes you wait 30 days before you can buy it again.',
    ],
    mapped:
      'Prepared by the whole Automotive Service Technology program and the ' +
      'capstone\u2019s exam-day strategy module.',
    readyRule:
      'There is no exam score for work experience — no test measures it. ' +
      'This card shows READY only once you have reviewed the study guide ' +
      'below, and that means only that you reviewed the guide — the real ' +
      'credential comes only from ASE once it has your documented hours. ' +
      'It is informational.',
    guideId: 'ase-work-experience',
    guideLabel: 'Work Experience & the Road to Certification study guide',
    where: ASE_WHERE,
  },
  {
    id: 'bloomberg-market-concepts',
    capstone: 'eco-capstone',
    name: 'Bloomberg Market Concepts (BMC)',
    blurb:
      'Self-paced e-learning course on financial markets; 4 core modules ' +
      '(Economic Indicators, Currencies, Fixed Income, Equities); ~8 hours; ' +
      'certificate of completion \u2014 no pass/fail mark exists.',
    kind: 'completion',
    mappedCourses: ['eco131'],
    mapped:
      'Prepared by Data Analytics for Economics (reading economic ' +
      'indicators) and Money, Banking & Financial Markets. There is no exam ' +
      'score for this credential \u2014 completion is the credential.',
    readyRule:
      'Completion-based \u2014 finish Data Analytics for Economics and review ' +
      'the Personal Finance & Careers study guide; there is no exam score.',
    guideId: 'personal-finance-careers',
    guideLabel: 'Personal Finance & Careers study guide',
    where:
      'Bloomberg for Education or a Bloomberg terminal (BMC <GO>). Free at ' +
      'a Bloomberg terminal or through a Bloomberg for Education subscription; ' +
      'without one, a paid route exists but Bloomberg shows the price only at ' +
      'the paywall \u2014 no fee is stated here. Start at ' +
      '<a href="https://www.bloomberg.com/professional/product/market-concepts/" target="_blank" rel="noopener">bloomberg.com \u2014 Market Concepts</a>.',
  },
  {
    id: 'asl-receptive-comprehension',
    capstone: 'asl-capstone',
    name: 'Receptive Comprehension in ASL',
    blurb:
      'Understanding signed everyday conversation and signed narratives — ' +
      'the core skill this program teaches. The ASLPI rates receptive and ' +
      'expressive signing together in a live interview; there is no ' +
      'separate written receptive exam.',
    kind: 'single',
    examKey: 'receptive-i',
    examLabel: 'Receptive Comprehension I practice exam',
    standard: 70,
    benchmark: true,
    mapped:
      'Prepared by American Sign Language I\u2013IV and Expressive & ' +
      'Receptive ASL, plus the capstone\u2019s conversation and narratives ' +
      'review modules. Practice exam: the Receptive Comprehension I ' +
      'practice exam in this course.',
    readyRule:
      'READY when your best practice score reaches 70% — a practice ' +
      'benchmark. There is no written ASL exam with a published pass mark; ' +
      'the real measure is Gallaudet\u2019s live ASLPI interview, rated 0–5.',
    guideId: 'receptive-comprehension-i',
    guideLabel: 'Receptive Comprehension I study guide',
    where: ASLPI_WHERE,
  },
  {
    id: 'asl-fingerspelling-numbers',
    capstone: 'asl-capstone',
    name: 'Fingerspelling & Numbers in ASL',
    blurb:
      'Reading fingerspelled words and signed numbers, time, and money at ' +
      'conversational speed — the skill that unlocks names, places, and ' +
      'anything without its own sign.',
    kind: 'single',
    examKey: 'fingerspelling-numbers',
    examLabel: 'Fingerspelling & Numbers practice exam',
    standard: 70,
    benchmark: true,
    mapped:
      'Prepared by Fingerspelling & Numbers, plus the capstone\u2019s ' +
      'fingerspelling and numbers review modules. Practice exam: the ' +
      'Fingerspelling & Numbers practice exam in this course.',
    readyRule:
      'READY when your best practice score reaches 70% — a practice ' +
      'benchmark. There is no written ASL exam with a published pass mark; ' +
      'the real measure is Gallaudet\u2019s live ASLPI interview, rated 0–5.',
    guideId: 'fingerspelling-numbers',
    guideLabel: 'Fingerspelling & Numbers study guide',
    where: ASLPI_WHERE,
  },
  {
    id: 'asl-aslpi-readiness',
    capstone: 'asl-capstone',
    name: 'ASLPI Readiness — your preparation is complete',
    blurb:
      'The American Sign Language Proficiency Interview (ASLPI) is a 20–25 ' +
      'minute video-recorded conversation with a trained interviewer, rated ' +
      'by a team of evaluators on a 0–5 scale. There is no pass/fail. This ' +
      'card tracks whether you have done the preparation work in this ' +
      'program — it is not a rating, and only Gallaudet\u2019s live interview ' +
      'can rate you.',
    kind: 'sections',
    standard: 70,
    benchmark: true,
    sections: [
      { label: 'Receptive Comprehension I — Everyday Conversation', examKey: 'receptive-i' },
      { label: 'Receptive Comprehension II — Narratives', examKey: 'receptive-ii' },
      { label: 'Grammar & Linguistics', examKey: 'grammar-linguistics' },
      { label: 'Fingerspelling & Numbers', examKey: 'fingerspelling-numbers' },
    ],
    mapped:
      'Prepared by the whole American Sign Language program and the ' +
      'capstone\u2019s twelve review modules. Practice exams: the four ' +
      'capstone practice exams in this course, one per skill above.',
    readyRule:
      'READY when your best practice score reaches 70% on all four ' +
      'capstone practice exams — a practice benchmark. READY here means ' +
      'you have done the preparation work, not that you hold a rating: ' +
      'only the live ASLPI interview can rate your proficiency, and only ' +
      'certification (BEI in Michigan) qualifies you to work as an ' +
      'interpreter.',
    guideId: 'aslpi-guide',
    guideLabel: 'The ASLPI Interview study guide',
    where: ASLPI_WHERE,
  },
  {
    id: 'nccer-core',
    capstone: 'con301',
    name: 'NCCER Core — Introduction to Basic Construction Skills',
    blurb:
      'The foundation credential for every NCCER trade: safety, tools, ' +
      'construction math, drawings, materials handling, and employability. ' +
      'NCCER Core is the prerequisite before any NCCER Level 1 credential, ' +
      'and the Core Level Test is 89 questions at a 70% minimum passing score.',
    kind: 'single',
    examKey: 'midterm',
    examLabel: 'NCCER Core practice exam',
    standard: 70,
    mapped:
      'Prepared across the General Construction program, especially ' +
      'Construction 101\u2013103, and the capstone\u2019s Core review modules. ' +
      'Practice exam: the NCCER Core practice exam in this course.',
    readyRule:
      'READY when your best practice score reaches 70% — NCCER\u2019s minimum ' +
      'passing score for the Core Level Test.',
    guideId: 'nccer-core',
    guideLabel: 'NCCER Core study guide',
    where: NCCER_WHERE,
  },
  {
    id: 'osha-10-con',
    capstone: 'con301',
    name: 'OSHA 10-Hour Construction',
    blurb:
      'The U.S. Department of Labor Outreach Training Program completion card ' +
      'for construction site work — a DOL wallet card, not a license or ' +
      'certification. OSHA requires no test for the card; the card comes ' +
      'from completing the required 10 contact hours with an authorized ' +
      'trainer. Most authorized providers add quizzes and a final exam at ' +
      '70% — that 70% is provider-standard, not an OSHA pass mark.',
    kind: 'single',
    examKey: 'osha-10',
    examLabel: 'OSHA 10-Hour practice exam',
    standard: 70,
    benchmark: true,
    mapped:
      'Prepared by Construction 101 (jobsite safety & OSHA basics) and the ' +
      'capstone\u2019s OSHA review module. Practice exam: the OSHA 10-Hour ' +
      'practice exam in this course.',
    readyRule:
      'READY here means your best practice score reached 70% — a practice ' +
      'benchmark, not an OSHA requirement. OSHA publishes no pass mark: ' +
      'the real DOL card comes only from completing an authorized OSHA ' +
      'Outreach Training Program course.',
    guideId: 'osha-10-30',
    guideLabel: 'OSHA 10/30 & the DOL Card study guide',
    where: OSHA_WHERE,
  },
  {
    id: 'osha-30-con',
    capstone: 'con301',
    name: 'OSHA 30-Hour Construction',
    blurb:
      'The U.S. Department of Labor Outreach Training Program completion card ' +
      'for supervisors and workers with safety duties — a DOL wallet card, ' +
      'not a license or certification. OSHA requires no test for the card; ' +
      'the card comes from completing the required 30 contact hours with an ' +
      'authorized trainer. Most authorized providers add quizzes and a final ' +
      'exam at 70% — that 70% is provider-standard, not an OSHA pass mark.',
    kind: 'single',
    examKey: 'osha-30',
    examLabel: 'OSHA 30-Hour practice exam',
    standard: 70,
    benchmark: true,
    mapped:
      'Prepared by Construction 101 (jobsite safety & OSHA basics) and the ' +
      'capstone\u2019s OSHA review module. Practice exam: the OSHA 30-Hour ' +
      'practice exam in this course.',
    readyRule:
      'READY here means your best practice score reached 70% — a practice ' +
      'benchmark, not an OSHA requirement. OSHA publishes no pass mark: ' +
      'the real DOL card comes only from completing an authorized OSHA ' +
      'Outreach Training Program course.',
    guideId: 'osha-10-30',
    guideLabel: 'OSHA 10/30 & the DOL Card study guide',
    where: OSHA_WHERE,
  },
  {
    id: 'nccer-carpentry',
    capstone: 'con301',
    name: 'NCCER Carpentry Level 1',
    blurb:
      'The first level of the NCCER carpentry apprenticeship credential: ' +
      'building materials, hand and power tools, construction drawings, ' +
      'floor, wall, and roof systems. Real Level 1 is 140 items across 9 ' +
      'module tests; every module test passes at 70%. NCCER Core is the ' +
      'prerequisite before the Level 1 credential.',
    kind: 'single',
    examKey: 'nccer-carpentry',
    examLabel: 'NCCER Carpentry Level 1 practice exam',
    standard: 70,
    mapped:
      'Prepared by Construction 106 (Framing I), Construction 107 (Framing ' +
      'II), and Construction 108 (Finishing Trades), plus the capstone\u2019s ' +
      'carpentry review modules. Practice exam: the NCCER Carpentry Level 1 ' +
      'practice exam in this course.',
    readyRule:
      'READY when your best practice score reaches 70% — NCCER\u2019s minimum ' +
      'passing score for its module tests. The real credential also requires ' +
      'hands-on performance profiles signed off by a certified NCCER ' +
      'instructor.',
    guideId: 'nccer-carpentry',
    guideLabel: 'NCCER Carpentry Level 1 study guide',
    where: NCCER_WHERE,
  },
  {
    id: 'nccer-welding',
    capstone: 'con301',
    name: 'NCCER Welding Level 1',
    blurb:
      'The first level of the NCCER welding apprenticeship credential: ' +
      'oxyfuel cutting, SMAW (stick), GMAW (MIG), FCAW, weld symbols, and ' +
      'weld safety. Real Level 1 is 170 items across 12 module tests; every ' +
      'module test passes at 70%. NCCER Core is the prerequisite before the ' +
      'Level 1 credential.',
    kind: 'single',
    examKey: 'nccer-welding',
    examLabel: 'NCCER Welding Level 1 practice exam',
    standard: 70,
    mapped:
      'Prepared by Construction 111 (Welding for Construction) and the ' +
      'capstone\u2019s welding review module. Practice exam: the NCCER Welding ' +
      'Level 1 practice exam in this course.',
    readyRule:
      'READY when your best practice score reaches 70% — NCCER\u2019s minimum ' +
      'passing score for its module tests. The real credential also requires ' +
      'hands-on performance profiles signed off by a certified NCCER ' +
      'instructor.',
    guideId: 'nccer-welding',
    guideLabel: 'NCCER Welding Level 1 study guide',
    where: NCCER_WHERE,
  },
  {
    id: 'nccer-ironworking',
    capstone: 'con301',
    name: 'NCCER Ironworking Level 1',
    blurb:
      'The first level of the NCCER ironworking apprenticeship credential: ' +
      'trade safety at height, tools, fastening and bolting, rigging, ' +
      'cranes, structural erection, bar joists and decking, reinforcing ' +
      'steel, and oxyfuel cutting. NCCER does not publish the Ironworking ' +
      'Level 1 item count; every module test passes at 70%. NCCER Core is ' +
      'the prerequisite before the Level 1 credential.',
    kind: 'single',
    examKey: 'nccer-ironworking',
    examLabel: 'NCCER Ironworking Level 1 practice exam',
    standard: 70,
    mapped:
      'Prepared by Construction 113 (Ironworking). Practice exam: the NCCER ' +
      'Ironworking Level 1 practice exam in this course.',
    readyRule:
      'READY when your best practice score reaches 70% — NCCER\u2019s minimum ' +
      'passing score for its module tests. The real credential also requires ' +
      'hands-on performance profiles signed off by a certified NCCER ' +
      'instructor.',
    guideId: 'nccer-ironworking',
    guideLabel: 'NCCER Ironworking Level 1 study guide',
    where: NCCER_WHERE,
  },
  {
    id: 'nalp-hardscape',
    capstone: 'con301',
    name: 'NALP Landscape Industry Certified Technician — Hardscape Installation',
    blurb:
      'The National Association of Landscape Professionals credential for hardscape installers: ' +
      'a Common Core exam plus the Hardscape Installation specialty — site prep, grading and drainage, ' +
      'paver patios and walkways, retaining walls, and steps. NALP publishes no question count, time limit, ' +
      'or pass mark for this exam, so the 100 questions here at 70% are the app\u2019s practice-exam choice and ' +
      'benchmark, not the real exam\u2019s. Recertification is every 2 years with 24 CEUs.',
    kind: 'single',
    examKey: 'nalp-hardscape',
    examLabel: 'NALP Hardscape Installation practice exam',
    standard: 70,
    benchmark: true,
    mapped:
      'Prepared by Construction 114 (Landscape, Hardscape & Site Preparation). Practice exam: the NALP ' +
      'Hardscape Installation practice exam in this course.',
    readyRule:
      'READY when your best practice score reaches 70% — the app\u2019s practice benchmark, since NALP ' +
      'publishes no pass mark. The real exam is online through NALP, and the credential is knowledge only: ' +
      'the app cannot grade hands-on installs.',
    guideId: 'nalp-hardscape',
    guideLabel: 'NALP Hardscape Installation study guide',
    where: NALP_WHERE,
  },
  {
    id: 'nccer-heo',
    capstone: 'con301',
    name: 'NCCER Heavy Equipment Operations Level 1',
    blurb:
      'The first level of the NCCER heavy equipment operations ' +
      'apprenticeship credential: dozers, excavators, loaders, backhoes, and ' +
      'forklifts — pre-op inspection, controls, grades, and safe operation. ' +
      'Real Level 1 is 155 items across 7 required + 1 elective module ' +
      'tests; every module test passes at 70%.',
    kind: 'single',
    examKey: 'nccer-heo',
    examLabel: 'NCCER Heavy Equipment Operations Level 1 practice exam',
    standard: 70,
    mapped:
      'Prepared by Construction 110 (Heavy Equipment Operation) and the ' +
      'capstone\u2019s HEO review module. Practice exam: the NCCER Heavy ' +
      'Equipment Operations Level 1 practice exam in this course.',
    readyRule:
      'READY when your best practice score reaches 70% — NCCER\u2019s minimum ' +
      'passing score for its module tests. The real credential also requires ' +
      'hands-on performance verification on real equipment.',
    guideId: 'nccer-heo',
    guideLabel: 'NCCER Heavy Equipment Operations Level 1 study guide',
    where: NCCER_WHERE,
  },
  {
    id: 'aci-flatwork',
    capstone: 'con301',
    name: 'ACI Concrete Flatwork Finisher',
    blurb:
      'The American Concrete Institute credential for concrete flatwork: ' +
      'properties, placing, finishing, and curing. The written exam is about ' +
      '50 multiple-choice questions in a 2-hour closed-book sitting, passing ' +
      'grade 70%. The full Finisher certification also requires a separate ' +
      'hands-on performance exam.',
    kind: 'single',
    examKey: 'final',
    examLabel: 'ACI Concrete Flatwork Finisher practice exam',
    standard: 70,
    mapped:
      'Prepared by Construction 105 (Concrete & Masonry) and the capstone\u2019s ' +
      'flatwork review module. Practice exam: the ACI Concrete Flatwork ' +
      'Finisher practice exam in this course.',
    readyRule:
      'READY when your best practice score reaches 70% — ACI\u2019s passing ' +
      'grade for the written exam. The real certification also requires ' +
      'passing the hands-on performance exam.',
    guideId: 'aci-flatwork',
    guideLabel: 'ACI Concrete Flatwork Finisher study guide',
    where: ACI_WHERE,
  },
  {
    id: 'aws-welder',
    capstone: 'con301',
    name: 'AWS Certified Welder',
    blurb:
      'The American Welding Society performance credential: there is NO ' +
      'written exam and NO numeric pass score. Candidates weld a test coupon ' +
      'to a written welding procedure specification (WPS) at an AWS ' +
      'Accredited Test Facility, and the weld either meets the code\u2019s ' +
      'acceptance criteria or it doesn\u2019t. This card tracks the knowledge ' +
      'side only — it can never show a test score.',
    kind: 'attestation',
    steps: [
      'Learn the welding processes, symbols, and safety in Construction 111 and the capstone\u2019s welding review module.',
      'Practice welding to a written welding procedure specification (WPS) under a qualified welder — the app cannot grade a weld.',
      'Book a test at an AWS Accredited Test Facility and weld the test coupon to the WPS.',
      'The weld is inspected to the code\u2019s acceptance criteria — pass or fail is decided on the weld, not on a written test.',
    ],
    mapped:
      'Prepared by Construction 111 (Welding for Construction) and the ' +
      'capstone\u2019s welding review module. There is no written exam to ' +
      'practice — the AWS test is a hands-on weld at an Accredited Test ' +
      'Facility.',
    readyRule:
      'There is no exam score for AWS Certified Welder — no written exam ' +
      'exists. This card shows READY only once you have reviewed the study ' +
      'guide below, and that means only that you reviewed the guide and know ' +
      'what the performance test requires. It is informational: the real ' +
      'credential comes only from passing the hands-on weld at an AWS ' +
      'Accredited Test Facility.',
    guideId: 'aws-welder',
    guideLabel: 'AWS Certified Welder study guide',
    where: AWS_WHERE,
  },
  {
    id: 'mi-journeyman-elec',
    capstone: 'ele290',
    name: 'Michigan Journeyman Electrician',
    blurb:
      'The Michigan journeyman electrician license: 80 questions in 150 minutes, ' +
      'open-book on the 2023 NEC plus Michigan Part 8 amendments, passing at 75%. ' +
      'Eligibility needs age 20+, 8,000 hours over at least 4 years as a registered ' +
      'apprentice under a licensed journeyman or master, plus related technical ' +
      'instruction. Exams are scheduled through PSI.',
    kind: 'single',
    examKey: 'midterm',
    examLabel: 'Michigan Journeyman Electrician practice exam',
    standard: 75,
    mapped:
      'Prepared by the whole Electrical program, especially Electrical 102\u2013105 ' +
      '(theory, NEC, residential wiring) and the capstone\u2019s journeyman review ' +
      'modules. Practice exam: the Michigan Journeyman Electrician practice exam ' +
      'in this course.',
    readyRule:
      'READY when your best practice score reaches 75% \u2014 the real exam\u2019s passing ' +
      'score. The license also needs the 8,000 supervised apprentice hours \u2014 see ' +
      'the Michigan Licensing Hours tracker below.',
    guideId: 'michigan-licensing',
    guideLabel: 'Michigan Licensing Step-by-Step study guide',
    where: MI_ELEC_WHERE,
  },
  {
    id: 'mi-master-elec',
    capstone: 'ele290',
    name: 'Michigan Master Electrician',
    blurb:
      'The Michigan master electrician license: 76 questions in 180 minutes, ' +
      'open-book on the 2023 NEC plus Michigan Part 8 amendments, passing at 75%. ' +
      'Eligibility needs age 22+, a Michigan journeyman license held for at least ' +
      '2 years, and 12,000 hours over at least 6 years including 4,000 hours as a ' +
      'journeyman. Exams are scheduled through PSI.',
    kind: 'single',
    examKey: 'final',
    examLabel: 'Michigan Master Electrician practice exam',
    standard: 75,
    mapped:
      'Prepared by the whole Electrical program, especially Electrical 106\u2013112 ' +
      '(commercial wiring, motors, controls, PLCs, solar, estimating) and the ' +
      'capstone\u2019s master review module. Practice exam: the Michigan Master ' +
      'Electrician practice exam in this course.',
    readyRule:
      'READY when your best practice score reaches 75% \u2014 the real exam\u2019s passing ' +
      'score. The license also needs the journeyman years and hours \u2014 see the ' +
      'Michigan Licensing Hours tracker below.',
    guideId: 'michigan-licensing',
    guideLabel: 'Michigan Licensing Step-by-Step study guide',
    where: MI_ELEC_WHERE,
  },
  {
    id: 'nccer-elec-l1',
    capstone: 'ele290',
    name: 'NCCER Electrical Level 1',
    blurb:
      'The first level of the NCCER electrical apprenticeship credential: ' +
      'electrical safety, circuits, theory, NEC, device boxes, hand bending, ' +
      'raceways, conductors, and drawings. Real Level 1 is 12 module tests, ' +
      '121 items total; every module test passes at 70%.',
    kind: 'single',
    examKey: 'nccer-l1',
    examLabel: 'NCCER Electrical Level 1 practice exam',
    standard: 70,
    mapped:
      'Prepared by Electrical 101\u2013104 and the capstone\u2019s Level 1 review ' +
      'module. Practice exam: the NCCER Electrical Level 1 practice exam in ' +
      'this course \u2014 one consolidated 50-question exam, not the real test format.',
    readyRule:
      'READY when your best practice score reaches 70% \u2014 NCCER\u2019s minimum ' +
      'passing score for its module tests. The real credential also requires ' +
      'hands-on performance profiles signed off by a certified NCCER instructor.',
    guideId: 'nec-navigation',
    guideLabel: 'NEC Navigation & Open-Book Exam Strategy study guide',
    where: NCCER_WHERE,
  },
  {
    id: 'nccer-elec-l2',
    capstone: 'ele290',
    name: 'NCCER Electrical Level 2',
    blurb:
      'The second level of the NCCER electrical apprenticeship credential: ' +
      'alternating current, motors, electric lighting, conduit bending, pull ' +
      'and junction boxes, conductor installations, cable tray, terminations, ' +
      'grounding and bonding, and control systems. Real Level 2 per-level item ' +
      'counts are not published in the sources used \u2014 the app\u2019s 50-question ' +
      'practice exam is a consolidated practice format; every module test ' +
      'passes at 70%.',
    kind: 'single',
    examKey: 'nccer-l2',
    examLabel: 'NCCER Electrical Level 2 practice exam',
    standard: 70,
    mapped:
      'Prepared by Electrical 103 and 107\u2013108 and the capstone\u2019s Level 2 ' +
      'review module. Practice exam: the NCCER Electrical Level 2 practice ' +
      'exam in this course \u2014 one consolidated 50-question exam, not the ' +
      'real test format.',
    readyRule:
      'READY when your best practice score reaches 70% \u2014 NCCER\u2019s minimum ' +
      'passing score for its module tests. The real credential also requires ' +
      'hands-on performance profiles signed off by a certified NCCER instructor.',
    guideId: 'nec-navigation',
    guideLabel: 'NEC Navigation & Open-Book Exam Strategy study guide',
    where: NCCER_WHERE,
  },
  {
    id: 'nccer-elec-l3',
    capstone: 'ele290',
    name: 'NCCER Electrical Level 3',
    blurb:
      'The third level of the NCCER electrical apprenticeship credential: ' +
      'load calculations, conductor selection, lighting, hazardous locations, ' +
      'overcurrent protection, distribution equipment, transformers, commercial ' +
      'services, and motor calculations. Real Level 3 per-level item counts are ' +
      'not published in the sources used \u2014 the app\u2019s 50-question practice ' +
      'exam is a consolidated practice format; every module test passes at 70%.',
    kind: 'single',
    examKey: 'nccer-l3',
    examLabel: 'NCCER Electrical Level 3 practice exam',
    standard: 70,
    mapped:
      'Prepared by Electrical 105\u2013107 and the capstone\u2019s Level 3 review ' +
      'module. Practice exam: the NCCER Electrical Level 3 practice exam in ' +
      'this course \u2014 one consolidated 50-question exam, not the real test format.',
    readyRule:
      'READY when your best practice score reaches 70% \u2014 NCCER\u2019s minimum ' +
      'passing score for its module tests. The real credential also requires ' +
      'hands-on performance profiles signed off by a certified NCCER instructor.',
    guideId: 'nec-navigation',
    guideLabel: 'NEC Navigation & Open-Book Exam Strategy study guide',
    where: NCCER_WHERE,
  },
  {
    id: 'nccer-elec-l4',
    capstone: 'ele290',
    name: 'NCCER Electrical Level 4',
    blurb:
      'The fourth level of the NCCER electrical apprenticeship credential: ' +
      'load calculations for feeders and services, health care facilities, ' +
      'standby and emergency systems, basic electronics, fire alarm systems, ' +
      'specialty transformers, advanced controls, HVAC controls, and heat ' +
      'tracing. Real Level 4 per-level item counts are not published in the ' +
      'sources used \u2014 the app\u2019s 50-question practice exam is a ' +
      'consolidated practice format; every module test passes at 70%.',
    kind: 'single',
    examKey: 'nccer-l4',
    examLabel: 'NCCER Electrical Level 4 practice exam',
    standard: 70,
    mapped:
      'Prepared by Electrical 106, 109 and 110 and the capstone\u2019s Level 4 ' +
      'review module. Practice exam: the NCCER Electrical Level 4 practice ' +
      'exam in this course \u2014 one consolidated 50-question exam, not the ' +
      'real test format.',
    readyRule:
      'READY when your best practice score reaches 70% \u2014 NCCER\u2019s minimum ' +
      'passing score for its module tests. The real credential also requires ' +
      'hands-on performance profiles signed off by a certified NCCER instructor.',
    guideId: 'nec-navigation',
    guideLabel: 'NEC Navigation & Open-Book Exam Strategy study guide',
    where: NCCER_WHERE,
  },
  {
    id: 'nabcep-pv-associate',
    capstone: 'ele290',
    name: 'NABCEP PV Associate',
    blurb:
      'The entry-level solar credential from the North American Board of Certified ' +
      'Energy Practitioners: PV system design, NEC Article 690, inverters, and ' +
      'batteries. The real exam is 70 multiple-choice questions (60 scored + 10 ' +
      'pilot) in 2 hours and passes at a SCALED score of 65 on a 0\u201399 scale ' +
      '\u2014 not 65%. The 70% on this course\u2019s practice exam is a practice ' +
      'benchmark only.',
    kind: 'single',
    examKey: 'nabcep',
    examLabel: 'NABCEP PV Associate practice exam',
    standard: 70,
    benchmark: true,
    mapped:
      'Prepared by Electrical 111 (Solar PV, Renewables & Energy Storage) and the ' +
      'capstone\u2019s PV review module. Practice exam: the NABCEP PV Associate ' +
      'practice exam in this course.',
    readyRule:
      'READY here means your best practice score reached 70% \u2014 a practice ' +
      'benchmark, not the real pass rule. The real exam passes at a scaled score ' +
      'of 65 on a 0\u201399 scale.',
    guideId: 'nabcep-guide',
    guideLabel: 'NABCEP PV Associate Domain Guide study guide',
    where: NABCEP_WHERE,
  },
  {
    id: 'mi-fire-alarm',
    capstone: 'ele290',
    name: 'Michigan Fire Alarm Specialty Technician',
    blurb:
      'The Michigan fire alarm specialty technician exam, scheduled through PSI: ' +
      '36 questions in 90 minutes, passing at 75%. The practice exam here is ' +
      'rounded to 40 questions.',
    kind: 'single',
    examKey: 'fire-alarm',
    examLabel: 'Michigan Fire Alarm Specialty Technician practice exam',
    standard: 75,
    mapped:
      'Prepared by Electrical 110 (Low Voltage, Fire Alarm & Data Systems) and ' +
      'the capstone\u2019s fire alarm review module. Practice exam: the Michigan ' +
      'Fire Alarm Specialty Technician practice exam in this course.',
    readyRule:
      'READY when your best practice score reaches 75% \u2014 the real exam\u2019s passing ' +
      'score.',
    guideId: 'michigan-licensing',
    guideLabel: 'Michigan Licensing Step-by-Step study guide',
    where: MI_ELEC_WHERE,
  },
  {
    id: 'mi-licensing-hours',
    capstone: 'ele290',
    name: 'Michigan Licensing Hours Tracker',
    blurb:
      'The supervised-hours side of the Michigan journeyman license: 8,000 hours ' +
      'over at least 4 years as a registered apprentice under a licensed ' +
      'journeyman or master (12,000 hours over at least 6 years for master). ' +
      'Hours are logged with your employer and LARA, not in this app \u2014 this card ' +
      'is a planning tool, not a license.',
    kind: 'completion',
    mappedCourses: [
      'ele101', 'ele102', 'ele103', 'ele104', 'ele105', 'ele106',
      'ele107', 'ele108', 'ele109', 'ele110', 'ele111', 'ele112',
    ],
    mapped:
      'Complete the twelve Electrical program courses and review the Michigan ' +
      'licensing guide, then log your supervised apprentice hours with your ' +
      'employer. The app cannot supply or verify work hours.',
    readyRule:
      'READY here means the twelve program courses are finished and the Michigan ' +
      'licensing guide is reviewed \u2014 it does NOT mean the hours are done. Log ' +
      'your 8,000 apprentice hours with your employer and LARA; only then can ' +
      'you sit the journeyman exam.',
    guideId: 'michigan-licensing',
    guideLabel: 'Michigan Licensing Step-by-Step study guide',
    where: MI_ELEC_WHERE,
  },
  {
    id: 'osha-10-elec',
    capstone: 'ele290',
    name: 'OSHA 10-Hour Construction',
    blurb:
      'The U.S. Department of Labor Outreach Training Program completion card ' +
      'for construction site work \u2014 a DOL wallet card, not a license or ' +
      'certification. OSHA requires no test for the card; the card comes from ' +
      'completing the required 10 contact hours with an authorized trainer. ' +
      'Most authorized providers add quizzes and a final exam at 70% \u2014 that 70% ' +
      'is provider-standard, not an OSHA pass mark.',
    kind: 'completion',
    mappedCourses: ['ele101'],
    mapped:
      'Prepared by Electrical 101 (jobsite safety & OSHA basics) and the ' +
      'capstone\u2019s OSHA 10 topic guide.',
    readyRule:
      'READY here means Electrical 101 is finished and the OSHA 10 topic guide ' +
      'is reviewed \u2014 preparation only. OSHA publishes no pass mark: the real ' +
      'DOL card comes only from completing an authorized OSHA Outreach Training ' +
      'Program course.',
    guideId: 'osha-10-guide',
    guideLabel: 'OSHA 10 Topic Guide study guide',
    where: OSHA_WHERE,
  },
  {
    id: 'eng-comprehensive',
    capstone: 'eng495',
    name: 'Capstone Comprehensive Exams',
    blurb:
      'The capstone\u2019s two comprehensive exams: Reading, Grammar & Rhetoric, ' +
      'and Literature & Writing — 50 questions each. These are the app\u2019s own ' +
      'benchmarks, not an external pass mark: English has no single licensing ' +
      'exam, so 70% here is a readiness signal the program sets for itself.',
    kind: 'sections',
    standard: 70,
    benchmark: true,
    sections: [
      { label: 'Comprehensive Exam I — Reading, Grammar & Rhetoric', examKey: 'midterm' },
      { label: 'Comprehensive Exam II — Literature & Writing', examKey: 'final' },
    ],
    mapped:
      'Prepared by the whole program: eng101–eng105 for reading, grammar, and ' +
      'rhetoric; eng106–eng109 for literature; eng110–eng112 for poetry, ' +
      'creative, and technical writing. Practice exams: the two comprehensive ' +
      'exams in this course.',
    readyRule:
      'READY here means your best practice score reached 70% on both exams — ' +
      'a practice benchmark the app sets for itself. No outside body publishes ' +
      'a pass mark for these exams, because they are the app\u2019s own.',
    guideId: 'comprehensive-exams',
    guideLabel: 'Comprehensive Exams study guide',
    where: ENG_CAPSTONE_WHERE,
  },
  {
    id: 'eng-portfolio',
    capstone: 'eng495',
    name: 'Writing Portfolio',
    blurb:
      'Five finished pieces, one per genre: a revised argumentative essay, a ' +
      'literary analysis essay, an original creative piece, the capstone ' +
      'research paper, and a professional document. Each piece is self-checked ' +
      'against the rubric in the portfolio guide — there is no human grader.',
    kind: 'completion',
    mappedCourses: ['eng103', 'eng106', 'eng110', 'eng111', 'eng112'],
    mapped:
      'Built across the program: the argumentative essay from eng103, the ' +
      'literary analysis from eng106–eng109, the creative piece from eng110–eng111, ' +
      'the research paper from the capstone, and the professional document from eng112.',
    readyRule:
      'READY here means the five source courses are finished and the portfolio ' +
      'guide is reviewed — preparation only. The portfolio itself is complete ' +
      'when all 5 pieces are written and checked against the rubric in the guide; ' +
      'the app cannot verify the pieces, so this is the app\u2019s own completion ' +
      'standard, not an external credential.',
    guideId: 'writing-portfolio',
    guideLabel: 'Writing Portfolio study guide',
    where: ENG_CAPSTONE_WHERE,
  },
  {
    id: 'eng-research-paper',
    capstone: 'eng495',
    name: 'Capstone Research Paper',
    blurb:
      'A 2,000–2,500-word research paper in MLA 9th-edition format, with a ' +
      'minimum of 5 sources, built in stages: thesis, outline, draft, and ' +
      'final. Graded against the printed rubric in the guide — self-checked, ' +
      'since there is no human grader.',
    kind: 'attestation',
    steps: [
      'Thesis: a clear, arguable claim, checked against the guide\u2019s checklist.',
      'Outline: a full outline with a source noted for each main point.',
      'Draft: a complete draft of 2,000–2,500 words, MLA 9th-edition format.',
      'Final: revised draft with a Works Cited page of at least 5 sources.',
    ],
    mapped:
      'Prepared by eng103 (argument and research writing, MLA 9th) and the ' +
      'capstone\u2019s research-paper guide.',
    readyRule:
      'READY here means the research-paper guide is reviewed — informational ' +
      'only. The paper itself is done when the final stage is finished and ' +
      'checked against the rubric in the guide.',
    guideId: 'research-paper',
    guideLabel: 'Research Paper study guide',
    where: ENG_CAPSTONE_WHERE,
  },
  {
    id: 'clep-composition',
    capstone: 'eng495',
    name: 'CLEP College Composition (optional)',
    blurb:
      'The College Board\u2019s college-credit exam for composition: 50 ' +
      'multiple-choice questions plus 2 timed essays, about 125 minutes, ' +
      'scored 20–80, with an ACE-recommended credit-granting score of 50. ' +
      'It tests composition only, not literature, and it is optional — the ' +
      'capstone does not depend on it.',
    kind: 'attestation',
    steps: [
      'Pass both capstone comprehensive exams at 70% — the app\u2019s proxy for CLEP readiness.',
      'Register for CLEP College Composition through the College Board.',
      'Take the exam at a CLEP test center (50 multiple-choice questions + 2 timed essays).',
      'Enter your score: the ACE-recommended credit-granting score is 50; your target college decides whether and how much credit to award.',
    ],
    mapped:
      'Prepared by eng102–eng105 (composition, argument, grammar, rhetoric). ' +
      'The app\u2019s proxy for readiness is passing both comprehensive exams.',
    readyRule:
      'READY here means the CLEP guide is reviewed — informational only. Real ' +
      'CLEP readiness is passing both comprehensive exams at 70%, and the ' +
      'credit itself comes from your target college, not from this app. No ' +
      'fee is stated here: it was not verified against College Board.',
    guideId: 'clep-composition',
    guideLabel: 'CLEP College Composition study guide',
    where: CLEP_WHERE,
  },
  {
    id: 'nremt-emt',
    capstone: 'med201',
    name: 'NREMT EMT Certification',
    blurb:
      'The National Registry of Emergency Medical Technicians cognitive exam ' +
      'for Emergency Medical Technicians: computer-adaptive, 70\u2013120 ' +
      'questions in 2 hours plus 10 unscored pilot items, at a Pearson VUE ' +
      'center or online via OnVUE. The real exam has NO percentage pass mark ' +
      '\u2014 it passes at a scaled score of 950 on a 100\u20131500 scale. The ' +
      '70% used here is a practice benchmark only, never the real pass mark.',
    kind: 'sections',
    standard: 70,
    benchmark: true,
    sections: [
      { label: 'NREMT EMT Practice Exam I \u2014 Comprehensive', examKey: 'midterm' },
      { label: 'NREMT EMT Practice Exam II \u2014 Comprehensive', examKey: 'nremt-2' },
    ],
    mapped:
      'Prepared by med105 (first aid, CPR, vital signs) and med106\u2013med109 ' +
      '(the EMT sequence: airway and assessment, trauma, medical emergencies, ' +
      'special populations and operations), with med102\u2013med104 for the ' +
      'anatomy, physiology, and terminology underneath. Practice exams: the ' +
      'two NREMT EMT comprehensive practice exams in this course.',
    readyRule:
      'READY here means your best practice score reached 70% on BOTH exams ' +
      '\u2014 a practice benchmark only. The real NREMT exam is ' +
      'computer-adaptive and has no percentage pass mark: it passes at a ' +
      'scaled score of 950 on a 100\u20131500 scale, and real certification ' +
      'also needs a state-approved EMT course with skills verification plus ' +
      'a state license.',
    guideId: 'nremt-emt',
    guideLabel: 'NREMT EMT study guide',
    where: NREMT_WHERE,
  },
  {
    id: 'nasm-cnc',
    capstone: 'med201',
    name: 'NASM Certified Nutrition Coach',
    blurb:
      'The National Academy of Sports Medicine coach-tier credential: 100 ' +
      'multiple-choice questions in 90 minutes, 70% or better to pass, online ' +
      'open-book unproctored, 3 attempts within 365 days of purchase. A ' +
      'coach gives general nutrition guidance and behaviour-change coaching ' +
      'within scope \u2014 not diagnosis, not medical nutrition therapy, not ' +
      'prescribed diets. That work belongs to a clinician or a Registered ' +
      'Dietitian Nutritionist.',
    kind: 'single',
    examKey: 'nasm-cnc',
    examLabel: 'NASM Certified Nutrition Coach practice exam',
    standard: 70,
    mapped:
      'Prepared by med111 (nutrition foundations) and med112 (nutrition ' +
      'across the lifespan, disease, and public health). Practice exam: the ' +
      'NASM Certified Nutrition Coach practice exam in this course.',
    readyRule:
      'READY when your best practice score reaches 70% \u2014 the verified ' +
      'real pass mark for the NASM Certified Nutrition Coach exam.',
    guideId: 'nasm-cnc',
    guideLabel: 'NASM Certified Nutrition Coach study guide',
    where: NASM_WHERE,
  },
  {
    id: 'acsm-ep',
    capstone: 'med201',
    name: 'ACSM Certified Exercise Physiologist',
    blurb:
      'The American College of Sports Medicine exercise physiologist ' +
      'credential: the real exam is 140 items (125 scored) in 210 minutes, ' +
      'and pass is a scaled score of 550 on a 200\u2013800 scale \u2014 NOT a ' +
      'percentage. It requires a bachelor\u2019s degree in exercise science, ' +
      'exercise physiology, or kinesiology plus current adult CPR/AED, and ' +
      'from 15 August 2027 candidates must graduate from a CAAHEP-accredited ' +
      'program. This app alone does not make anyone eligible.',
    kind: 'single',
    examKey: 'acsm-ep',
    examLabel: 'ACSM Certified Exercise Physiologist practice exam',
    standard: 70,
    benchmark: true,
    mapped:
      'Prepared by med113 (sports science). Practice exam: the ACSM ' +
      'Certified Exercise Physiologist practice exam in this course.',
    readyRule:
      'READY when your best practice score reaches 70% \u2014 a practice ' +
      'benchmark only. The real ACSM-EP exam passes at a scaled score of ' +
      '550 on a 200\u2013800 scale, not a percentage, and real eligibility ' +
      'needs a bachelor\u2019s degree plus CPR/AED.',
    guideId: 'acsm-ep',
    guideLabel: 'ACSM Certified Exercise Physiologist study guide',
    where: ACSM_WHERE,
  },
  {
    id: 'nsca-cscs',
    capstone: 'med201',
    name: 'NSCA Certified Strength and Conditioning Specialist',
    blurb:
      'The National Strength and Conditioning Association strength and ' +
      'conditioning credential: the real exam is 220 questions (190 scored) ' +
      'in two sections \u2014 Scientific Foundations 95 questions in 1.5 hours ' +
      'and Practical/Applied 125 questions in 2.5 hours \u2014 and pass is a ' +
      'scaled score of 70 on EACH section (NOT a percentage). It requires a ' +
      'bachelor\u2019s degree (any major) plus current CPR/AED, and from 1 ' +
      'January 2030 US candidates need a bachelor\u2019s from a ' +
      'CASCE-accredited program. This app alone does not make anyone eligible.',
    kind: 'single',
    examKey: 'nsca-cscs',
    examLabel: 'NSCA Certified Strength and Conditioning Specialist practice exam',
    standard: 70,
    benchmark: true,
    mapped:
      'Prepared by med113 (sports science). Practice exam: the NSCA ' +
      'Certified Strength and Conditioning Specialist practice exam in this ' +
      'course.',
    readyRule:
      'READY when your best practice score reaches 70% \u2014 a practice ' +
      'benchmark only. The real CSCS exam passes at a scaled score of 70 on ' +
      'each section, not a percentage, and real eligibility needs a ' +
      'bachelor\u2019s degree plus CPR/AED.',
    guideId: 'nsca-cscs',
    guideLabel: 'NSCA Certified Strength and Conditioning Specialist study guide',
    where: NSCA_WHERE,
  },
  {
    id: 'nasm-ces',
    capstone: 'med201',
    name: 'NASM Corrective Exercise Specialist',
    blurb:
      'The National Academy of Sports Medicine corrective exercise ' +
      'specialization: the real exam is 100 multiple-choice questions in 90 ' +
      'minutes, 70% to pass, online open-book, up to 3 attempts within 1 year ' +
      'of purchase. There are no required prerequisites (a CPT, a degree, or ' +
      'another accredited certification is recommended). It is a ' +
      'specialization, NOT an NCCA-accredited certification, and does NOT ' +
      'qualify anyone to diagnose or treat injuries.',
    kind: 'single',
    examKey: 'nasm-ces',
    examLabel: 'NASM Corrective Exercise Specialist practice exam',
    standard: 70,
    mapped:
      'Prepared by med113 (sports science). Practice exam: the NASM ' +
      'Corrective Exercise Specialist practice exam in this course.',
    readyRule:
      'READY when your best practice score reaches 70% \u2014 the verified ' +
      'real pass mark for the NASM Corrective Exercise Specialist exam.',
    guideId: 'nasm-ces',
    guideLabel: 'NASM Corrective Exercise Specialist study guide',
    where: NASM_WHERE,
  },
  {
    id: 'bls-provider',
    capstone: 'med201',
    name: 'AHA BLS Provider (in-person course)',
    blurb:
      'The American Heart Association Basic Life Support Provider course: ' +
      'CPR, AED use, and choking relief for adults, children, and infants, ' +
      'with a hands-on skills session. The eCard is valid 2 years. An ' +
      'online-only course with no skills demonstration does not earn the ' +
      'eCard \u2014 this app cannot verify BLS skills competency.',
    kind: 'attestation',
    steps: [
      'Complete an in-person AHA BLS Provider course, or HeartCode BLS online plus an in-person skills session, with an AHA instructor.',
      'Demonstrate the skills hands-on in the session \u2014 compressions, ventilations, AED use, and choking relief.',
      'Your AHA BLS Provider eCard is issued after the course and is valid 2 years.',
      'Record the date and training centre below \u2014 the app takes your word for it; it cannot verify the course.',
    ],
    mapped:
      'Prepared by med105 (first aid, CPR, and vital signs) and the ' +
      'capstone\u2019s BLS review modules.',
    readyRule:
      'There is no exam score for BLS \u2014 the real credential comes only ' +
      'from completing an in-person AHA BLS Provider course with a hands-on ' +
      'skills session. This card shows READY only once you have reviewed ' +
      'the study guide below, and that means only that you reviewed the ' +
      'guide \u2014 no exam score exists.',
    guideId: 'bls-provider',
    guideLabel: 'BLS Provider study guide',
    where: BLS_WHERE,
  },
  {
    id: 'medical-terminology',
    capstone: 'med201',
    name: 'Medical Terminology & Clinical Knowledge',
    blurb:
      'A knowledge check on the language of medicine: word parts by body ' +
      'system, prefixes, suffixes, roots, abbreviations, and plain accurate ' +
      'charting and handover language. There is no national certification ' +
      'exam for medical terminology \u2014 this is the app\u2019s own ' +
      'benchmark, not an external credential.',
    kind: 'single',
    examKey: 'final',
    examLabel: 'Medical Terminology & Clinical Knowledge practice exam',
    standard: 70,
    benchmark: true,
    mapped:
      'Prepared by med101 (first medical word parts) and med104 (full ' +
      'body-system terminology and clinical documentation). Practice exam: ' +
      'the Medical Terminology & Clinical Knowledge exam in this course.',
    readyRule:
      'READY when your best practice score reaches 70% \u2014 a practice ' +
      'benchmark the app sets for itself. No outside body issues a ' +
      'credential for medical terminology.',
    guideId: 'medical-terminology',
    guideLabel: 'Medical Terminology study guide',
    where: 'There is no national exam for medical terminology \u2014 this is ' +
      'the app\u2019s own knowledge check, completed inside this course. ' +
      'No outside body issues a credential for it.',
  },
  {
    id: 'aplus-certification',
    capstone: 'cmp199',
    name: 'CompTIA A+ Certification (220-1201 / 220-1202)',
    blurb:
      'The entry-level IT certification: Core 1 (220-1201) and Core 2 ' +
      '(220-1202), up to 90 questions in 90 minutes each, including ' +
      'multiple-choice, drag-and-drop, and performance-based questions ' +
      '(simulations). The real exams pass at 675 (Core 1) and 700 (Core 2) ' +
      'on a 100\u2013900 scaled scale \u2014 NOT percentages. The 70% used here is a ' +
      'practice benchmark only, never the real pass mark. Both exams must ' +
      'come from the same version.',
    kind: 'sections',
    standard: 70,
    benchmark: true,
    sections: [
      { label: 'A+ Core 1 Practice Exam (220-1201)', examKey: 'midterm' },
      { label: 'A+ Core 2 Practice Exam (220-1202)', examKey: 'aplus-core-2' },
    ],
    mapped:
      'Prepared by cmp106 (hardware and troubleshooting) and cmp107 ' +
      '(operating systems and networking), with the capstone\u2019s A+ review ' +
      'modules. Practice exams: the two A+ practice exams in this course.',
    readyRule:
      'READY here means your best practice score reached 70% on BOTH exams ' +
      '\u2014 a practice benchmark only. The real A+ exams pass at 675 (Core 1) ' +
      'and 700 (Core 2) on a 100\u2013900 scaled scale, and real certification ' +
      'also needs both exams from the same version, taken at a Pearson VUE ' +
      'testing center. Both A+ study guides (Core 1 and Core 2) are in this ' +
      'capstone\u2019s guides.',
    guideId: 'aplus-core-1',
    guideLabel: 'A+ Core 1 study guide',
    where: APLUS_WHERE,
  },
  {
    id: 'acp-photoshop',
    capstone: 'cmp199',
    name: 'Adobe Certified Professional in Visual Design Using Adobe Photoshop',
    blurb:
      'Adobe\u2019s certification for Photoshop: a 50-minute proctored exam ' +
      'with a questions section followed by live tasks inside real Photoshop, ' +
      'delivered through Certiport. The real exam passes at 700 out of 1,000 ' +
      '(scaled \u2014 not a percentage). The 70% used here is a practice ' +
      'benchmark only, and this text-only practice exam cannot replicate the ' +
      'live in-app tasks. Adobe expects about 150 hours of hands-on ' +
      'experience per app before sitting the exam.',
    kind: 'single',
    examKey: 'acp-photoshop',
    examLabel: 'Adobe Certified Professional Photoshop practice exam',
    standard: 70,
    benchmark: true,
    mapped:
      'Prepared by cmp108 (photo editing with Photoshop) and the capstone\u2019s ' +
      'Photoshop review modules. Practice exam: the Adobe Certified ' +
      'Professional Photoshop practice exam in this course.',
    readyRule:
      'READY when your best practice score reaches 70% \u2014 a practice ' +
      'benchmark only. The real exam passes at 700/1000 scaled and includes ' +
      'live tasks inside real Photoshop.',
    guideId: 'acp-photoshop',
    guideLabel: 'Adobe Certified Professional Photoshop study guide',
    where: ACP_WHERE,
  },
  {
    id: 'acp-premiere',
    capstone: 'cmp199',
    name: 'Adobe Certified Professional in Digital Video Using Adobe Premiere Pro',
    blurb:
      'Adobe\u2019s certification for Premiere Pro: a 50-minute proctored exam ' +
      'with a questions section followed by live tasks inside real Premiere ' +
      'Pro, delivered through Certiport. The real exam passes at 700 out of ' +
      '1,000 (scaled \u2014 not a percentage). The 70% used here is a practice ' +
      'benchmark only, and this text-only practice exam cannot replicate the ' +
      'live in-app tasks. Adobe expects about 150 hours of hands-on ' +
      'experience per app before sitting the exam. Passing Premiere Pro plus ' +
      'Photoshop also earns the Adobe Certified Professional in Video Design ' +
      'specialty credential.',
    kind: 'single',
    examKey: 'acp-premiere',
    examLabel: 'Adobe Certified Professional Premiere Pro practice exam',
    standard: 70,
    benchmark: true,
    mapped:
      'Prepared by cmp109 (video editing with Premiere Pro) and the capstone\u2019s ' +
      'Premiere Pro review modules. Practice exam: the Adobe Certified ' +
      'Professional Premiere Pro practice exam in this course.',
    readyRule:
      'READY when your best practice score reaches 70% \u2014 a practice ' +
      'benchmark only. The real exam passes at 700/1000 scaled and includes ' +
      'live tasks inside real Premiere Pro.',
    guideId: 'acp-premiere',
    guideLabel: 'Adobe Certified Professional Premiere Pro study guide',
    where: ACP_WHERE,
  },
  {
    id: 'cmp-portfolio',
    capstone: 'cmp199',
    name: 'Portfolio Project',
    blurb:
      'Three shipped pieces: a working app, an edited photo, and an edited ' +
      'video of about 60 seconds, each to a short brief. Each piece is ' +
      'self-checked against the rubric in the portfolio guide \u2014 there is ' +
      'no human grader, and the app cannot grade creative work.',
    kind: 'completion',
    mappedCourses: ['cmp104', 'cmp108', 'cmp109', 'cmp112'],
    mapped:
      'Built across the program: the working app from cmp104, the edited ' +
      'photo from cmp108, the edited video from cmp109, and the portfolio ' +
      'website from cmp112.',
    readyRule:
      'READY here means the four source courses are finished and the ' +
      'portfolio guide is reviewed \u2014 preparation only. The portfolio ' +
      'itself is complete when all 3 pieces are shipped and checked against ' +
      'the rubric in the guide; the app cannot verify the pieces, so this is ' +
      'the app\u2019s own completion standard, not an external credential.',
    guideId: 'portfolio-project',
    guideLabel: 'Portfolio Project study guide',
    where: CMP_PORTFOLIO_WHERE,
  },
  {
    id: 'fe-mechanical',
    capstone: 'egr290',
    name: 'FE Mechanical Exam (NCEES)',
    blurb:
      'The Fundamentals of Engineering exam for mechanical engineers: 110 ' +
      'questions (100 scored and 10 unscored) in a 6-hour appointment with ' +
      '5 hours 20 minutes of testing. The exam fee is $225. NCEES publishes ' +
      'no passing score \u2014 results are pass/fail only. The 2024 first-time ' +
      'pass rate was 68%. The 70% used here is a practice benchmark only, ' +
      'never the real pass mark.',
    kind: 'single',
    examKey: 'fe-mechanical',
    examLabel: 'FE Mechanical practice exam',
    standard: 70,
    benchmark: true,
    mapped:
      'Prepared across the Engineering program, especially egr101 ' +
      '(foundations), egr102\u2013egr103 (statics, dynamics, mechanics of ' +
      'materials), egr104\u2013egr105 (thermodynamics, fluids, heat transfer), ' +
      'egr109 (machine design), and the capstone\u2019s FE Mechanical review ' +
      'modules. Practice exam: the FE Mechanical practice exam in this course.',
    readyRule:
      'READY when your best practice score reaches 70% \u2014 a practice ' +
      'benchmark only. The real FE exam has 110 questions (100 scored and ' +
      '10 unscored), costs $225, and NCEES publishes no passing score; ' +
      'results are pass/fail only. Real FE licensure also needs an ' +
      'ABET-accredited engineering degree and typically 4 years of ' +
      'experience, plus the PE exam.',
    guideId: 'fe-mechanical',
    guideLabel: 'FE Mechanical study guide',
    where: FE_WHERE,
  },
  {
    id: 'fe-electrical-computer',
    capstone: 'egr290',
    name: 'FE Electrical & Computer Exam (NCEES)',
    blurb:
      'The Fundamentals of Engineering exam for electrical and computer ' +
      'engineers: 110 questions (100 scored and 10 unscored) in a 6-hour ' +
      'appointment with 5 hours 20 minutes of testing. The exam fee is ' +
      '$225. NCEES publishes no passing score \u2014 results are pass/fail ' +
      'only. The 2024 first-time pass rate was 62%. The 70% used here is a ' +
      'practice benchmark only, never the real pass mark.',
    kind: 'single',
    examKey: 'fe-electrical-computer',
    examLabel: 'FE Electrical & Computer practice exam',
    standard: 70,
    benchmark: true,
    mapped:
      'Prepared across the Engineering program, especially egr106 ' +
      '(electrical fundamentals), egr107 (digital systems and PLCs), ' +
      'egr111 (instrumentation and control), and the capstone\u2019s FE ' +
      'Electrical & Computer review modules. Practice exam: the FE ' +
      'Electrical & Computer practice exam in this course.',
    readyRule:
      'READY when your best practice score reaches 70% \u2014 a practice ' +
      'benchmark only. The real FE exam has 110 questions (100 scored and ' +
      '10 unscored), costs $225, and NCEES publishes no passing score; ' +
      'results are pass/fail only. Real FE licensure also needs an ' +
      'ABET-accredited engineering degree and typically 4 years of ' +
      'experience, plus the PE exam.',
    guideId: 'fe-electrical-computer',
    guideLabel: 'FE Electrical & Computer study guide',
    where: FE_WHERE,
  },
  {
    id: 'cswa-readiness',
    capstone: 'egr290',
    name: 'Certified SOLIDWORKS Associate (CSWA)',
    blurb:
      'Dassault Syst\u00e8mes\u2019 entry-level SOLIDWORKS credential: a 3-hour ' +
      'exam with 14 live modeling tasks, scored out of 240 points and ' +
      'passing at 165 (68.75%). A voucher typically costs $99, and the ' +
      'retake wait is 14 days. The real exam grades live modeling in ' +
      'SOLIDWORKS through TesterPRO \u2014 this text-only practice exam tests ' +
      'knowledge only and cannot grade live modeling. The 70% used here is ' +
      'a practice benchmark only, never the real pass mark.',
    kind: 'single',
    examKey: 'cswa-prep',
    examLabel: 'CSWA knowledge practice exam',
    standard: 70,
    benchmark: true,
    mapped:
      'Prepared by egr108 (CAD) and the capstone\u2019s CSWA review modules. ' +
      'Practice exam: the CSWA knowledge practice exam in this course. ' +
      'Hands-on modeling practice in real SOLIDWORKS is also needed, ' +
      'because the real exam grades the live model.',
    readyRule:
      'READY when your best practice score reaches 70% \u2014 a practice ' +
      'benchmark only, and a knowledge check only. The real CSWA exam ' +
      'passes at 165 out of 240 points with live modeling in SOLIDWORKS ' +
      'through TesterPRO, so readiness here means your knowledge is ready, ' +
      'not that your hands are.',
    guideId: 'cswa-prep',
    guideLabel: 'CSWA study guide',
    where: CSWA_WHERE,
  },
  {
    id: 'pmmi-mechatronics',
    capstone: 'egr290',
    name: 'PMMI Mechatronics (Industrial Electricity 1 + PLCs 1)',
    blurb:
      'PMMI mechatronics practice: industrial electricity and PLC ' +
      'programming for automated machines. This course states no PMMI item ' +
      'counts, pass marks, or fees, because those are unverified \u2014 the ' +
      'practice exams here are the app\u2019s own size and benchmark. The 70% ' +
      'used here is a practice benchmark only.',
    kind: 'sections',
    standard: 70,
    benchmark: true,
    sections: [
      { label: 'PMMI Industrial Electricity 1 practice exam', examKey: 'pmmi-industrial-electricity-1' },
      { label: 'PMMI PLCs 1 practice exam', examKey: 'pmmi-plcs-1' },
    ],
    mapped:
      'Prepared by egr106\u2013egr107 (electrical fundamentals, digital ' +
      'systems and PLCs) and egr111\u2013egr112 (instrumentation, control, ' +
      'and mechatronics), with the capstone\u2019s PMMI review modules. ' +
      'Practice exams: the two PMMI practice exams in this course.',
    readyRule:
      'READY here means your best practice score reached 70% on BOTH ' +
      'exams \u2014 a practice benchmark only. This course states no real ' +
      'PMMI item counts, pass marks, or fees, because those are unverified.',
    guideId: 'pmmi-industrial-electricity-1',
    guideLabel: 'PMMI Industrial Electricity 1 study guide',
    where: PMMI_WHERE,
  },
  {
    id: 'egr-design-project',
    capstone: 'egr290',
    name: 'Capstone Design Project',
    blurb:
      'A self-built mechatronic device \u2014 for example, an automated parts ' +
      'sorter, a temperature-controlled chamber, or a conveyor with a ' +
      'counting station \u2014 from requirements to a documented design: a ' +
      'requirements document, a design with calculations and a parts list, ' +
      'a test plan with results, and a project report. The app cannot grade ' +
      'a physical build, a CAD model, a PLC program, or a circuit; the ' +
      'project is self-checked against the rubric in the design project guide.',
    kind: 'completion',
    mappedCourses: ['egr112'],
    mapped:
      'Built across the program and finished in the capstone: the design ' +
      'process from egr101, CAD from egr108, controls from egr106\u2013egr107 ' +
      'and egr111, and the project plan from the capstone\u2019s design ' +
      'project modules.',
    readyRule:
      'READY here means the source course is finished and the design ' +
      'project guide is reviewed \u2014 preparation only. The project ' +
      'itself is complete when all four deliverables pass the rubric in ' +
      'the guide; the app cannot verify the build, so this is the app\u2019s ' +
      'own completion standard, not an external credential.',
    guideId: 'design-project',
    guideLabel: 'Capstone Design Project study guide',
    where: EGR_PROJECT_WHERE,
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
      .map((s) => examRow(s.label, bestBy[s.examKey], cert.standard, !!cert.benchmark))
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
      '    <li><strong>' + esc(cert.guideLabel) + ' reviewed</strong> — ' +
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
    : slug === 'bus-capstone'
      ? 'There is no license for general business — the credentials above are ' +
        'optional and are taken through the providers listed on each card.'
      : slug === 'eco-capstone'
        ? 'There is no license for economics — the credential above is optional ' +
          'and is taken through the provider listed on its card.'
        : slug === 'ase-cert-prep'
          ? 'ASE certification is national, not state licensing — the credentials ' +
            'above are taken through ASE at Prometric centers, and each one also ' +
            'needs documented hands-on work experience before ASE issues it.'
          : slug === 'asl-capstone'
            ? 'The ASLPI is a proficiency interview, not a license — the readiness ' +
              'above is preparation for it, and only Gallaudet\u2019s live interview ' +
              'can rate you. Working as a sign language interpreter in Michigan ' +
              'needs BEI certification under Michigan Public Act 204 of 2007.'
            : slug === 'con301'
            ? 'NCCER tests are taken at accredited sponsors with hands-on ' +
              'performance profiles; the OSHA DOL card comes only from an ' +
              'authorized trainer after the required hours; the AWS Certified ' +
              'Welder test is a hands-on weld at an Accredited Test Facility. ' +
              'The OSHA 70% figures here are practice benchmarks, not an OSHA ' +
              'pass mark — OSHA requires no test for the card.'
            : slug === 'ele290'
            ? 'Michigan journeyman and master electrician exams are scheduled through PSI and also need supervised apprenticeship hours (8,000 for journeyman); Detroit issues its own licenses. NCCER tests are taken at accredited sponsors with hands-on performance profiles. The NABCEP PV Associate exam passes at a scaled score of 65, not a percentage \u2014 the 70% here is a practice benchmark. The OSHA DOL card comes only from an authorized trainer after the required hours \u2014 OSHA requires no test for the card.'
            : slug === 'eng495'
            ? 'There is no license for English — the comprehensive exams are the app\u2019s own benchmarks, the portfolio and paper are the app\u2019s own capstone work, and CLEP credit, if pursued, is granted by your target college, not by this app.'
: slug === 'med201'
            ? 'The NREMT EMT exam is computer-adaptive with no percentage pass mark ' +
              '— it passes at a scaled score of 950 on a 100–1500 scale — and real EMT ' +
              'certification also needs a state-approved course with skills verification ' +
              'plus a state license. The AHA BLS Provider eCard needs an in-person ' +
              'hands-on skills session. This program teaches knowledge only and ' +
              'certifies no one.'
                        : slug === 'cmp199'
            ? 'There is no license for computing \u2014 the A+ and Adobe Certified ' +
              'Professional exams are taken through Pearson VUE and Certiport, and the ' +
              'portfolio is the student\u2019s own shipped work. The 70% figures here are ' +
              'practice benchmarks: the real A+ exams pass at 675 (Core 1) and 700 ' +
              '(Core 2) on a 100\u2013900 scaled scale, and the real ACP exams pass at ' +
              '700/1000 and include live in-app tasks.'
            : slug === 'egr290'
            ? 'The FE exam is the first step toward PE licensure, not a license ' +
              'itself \u2014 licensure also needs an ABET-accredited engineering degree, ' +
              'typically 4 years of experience, and the PE exam, plus a state license ' +
              'application (Michigan steps and fees are not stated here). The real FE ' +
              'exam has 110 questions (100 scored and 10 unscored), costs $225, and ' +
              'NCEES publishes no passing score \u2014 results are pass/fail only. The ' +
              'real CSWA exam passes at 165 out of 240 points with live modeling in ' +
              'SOLIDWORKS. The 70% figures here are practice benchmarks only, and the ' +
              'design project is the student\u2019s own built work. This program teaches ' +
              'knowledge only and certifies no one.'
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
