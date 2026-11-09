'use strict';

/**
 * lib/ase-tutor-facts.js — Verified facts the automotive tutor must not
 * contradict.
 *
 * The tutor answers from its own model knowledge, not from the course files,
 * so without grounding it can state wrong test rules or wrong numbers.
 * Every fact here is taught in the Automotive Service Technology program
 * content and cites its source there; nothing here is invented. If a fact
 * changes, update the course content first, then this file.
 *
 * Applied by lib/tutor.js buildTutorSystemPrompt() for every course whose
 * slug starts with "ase" (all 12 automotive courses, capstone included).
 * A course may also carry its own `tutorFacts` array, which is appended
 * after these program facts.
 */

const ASE_TUTOR_FACTS = [
  'ASE test lengths and times (official ASE 2026 study guides, scored questions; every certification test also has 10 unscored research questions): A1 Engine Repair 45 questions / 75 minutes; A2 Automatic Transmission / Transaxle 45 / 75; A3 Manual Drive Train & Axles 40 / 60; A4 Suspension & Steering 40 / 60; A5 Brakes 45 / 75; A6 Electrical / Electronic Systems 50 / 90; A7 Heating & Air Conditioning 50 / 75; A8 Engine Performance 50 / 75; A9 Light Vehicle Diesel Engines 50 / 75; L1 Advanced Engine Performance Specialist 50 / 150; L3 Light Duty Hybrid / Electric Vehicle Specialist 45 / 120.',
  'ASE pass marks: ASE publishes NO raw percentage pass mark. It scores on a 400-999 scaled scale. This program uses 70% as a PRACTICE BENCHMARK only — never state 70% (or any percentage) as ASE\'s official passing score. Never state a fee for any ASE test.',
  'ASE Master Automobile Technician = passing A1 through A8 only. A9 (Light Vehicle Diesel Engines) is a separate specialty and does NOT count toward Master status.',
  'ASE registration prerequisites (hard rules, not guidance): to register for L1 you must have previously passed A8. To register for L3 you must have previously passed BOTH A6 and A8. There is no registration prerequisite for the A-series tests.',
  'ASE work experience (required before ASE issues the credential; you may take the tests first): A1-A9 need 2 years of documented hands-on work experience (1 year plus a 2-year automotive training program can substitute). L1 and L3 need 3 years of documented hands-on work experience.',
  'ASE certifications are valid 5 years. Recertification tests are about half as long as the initial tests. If you fail a test, ASE makes you wait 30 days before you can buy it again. Real ASE tests are taken at Prometric test centers, booked through ase.com — never inside this app.',
  'L1 uses the Composite Vehicle Type 4 (CV4) Reference Booklet on the real test — about half its questions are about that vehicle, and the booklet is provided on screen. L3 uses an on-screen Certification Test Reference document. This app cannot reproduce either ASE document, so practice questions put the vehicle/reference data in the question stems instead.',
  'Electrical fundamentals: Ohm\'s law V = I x R (voltage = current x resistance). In a series circuit current is the same everywhere and voltages add; in a parallel circuit voltage is the same across each branch and currents add. A voltage drop test is done with the circuit loaded and operating — measuring resistance on a dead circuit does not find a bad connection.',
  'Hybrid and electric vehicle high voltage: light-duty hybrid/EV packs run roughly 200-450 V DC, which is lethal. High-voltage work means de-powering the pack first, verifying zero voltage with a meter rated for the voltage, wearing insulated gloves rated for the class, and using insulated tools. Never assume a hybrid or EV is safe to touch because the engine is off or the car is quiet.',
  'A/C refrigerants: the two refrigerants in this program are R-134a and R-1234yf. They are NOT interchangeable — different fittings, different oils, different service equipment. EPA 609 is the refrigerant-handling credential for working on motor vehicle air conditioning. Never vent refrigerant to the air.',
];

module.exports = { ASE_TUTOR_FACTS };
