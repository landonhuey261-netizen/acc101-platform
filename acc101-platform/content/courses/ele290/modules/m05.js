// ele290 — Electrical Certification Prep: original review content. Practice exams use original questions in the real exams' style/format.
module.exports = {
  "number": 5,
  "slug": "nccer-l1-review",
  "title": "NCCER Electrical Level 1 Review",
  "estTime": "3–4 hours",
  "objectives": [
    "Name the 12 Level 1 modules and the Level 1 test structure: 12 module tests, 121 items total, every module test passes at 70%.",
    "Apply electrical safety: shock, arc flash, lockout/tagout, and PPE under NFPA 70E.",
    "Use Ohm's law and the power law on DC and AC circuits, and read a basic electrical drawing.",
    "Identify device boxes, raceways, conductors, and cables by type and use.",
    "Size a residential service and test a circuit with a multimeter and a clamp meter."
  ],
  "sections": [
    {
      "heading": "Level 1: The 12 Modules and the Test",
      "html": "<p>NCCER Electrical Level 1 has <strong>12 modules</strong>: 26101 Orientation to the Electrical Trade, 26102 Electrical Safety, 26103 Introduction to Electrical Circuits, 26104 Electrical Theory, 26105 Introduction to the NEC, 26106 Device Boxes, 26107 Hand Bending, 26108 Raceways and Fittings, 26109 Conductors and Cables, 26110 Basic Electrical Construction Drawings, 26111 Residential Electrical Services, and 26112 Electrical Test Equipment. The written assessment is <strong>12 module tests totaling 121 items, and every module test passes at 70%</strong> — the same 70% as every NCCER module test. A hands-on Performance Profile accompanies the written tests, and the real tests happen only at NCCER-accredited sponsors.</p><p>Level 1 is the foundation: if you can do the math, bend the conduit, pick the right box, and stay safe, the upper levels are extensions of the same skills. The practice exam in this course consolidates Level 1 into one 50-question practice exam — that is a practice-exam choice, not the real test format.</p>"
    },
    {
      "heading": "Safety First: Shock, Arc Flash, and Lockout/Tagout",
      "html": "<p>Electrical safety is the first thing Level 1 teaches because it is the first thing that can kill you. <strong>Shock</strong> happens when current passes through the body — even 10 milliamperes can prevent you from letting go. <strong>Arc flash</strong> is the explosive release of energy from a fault, and it burns before you can react. The defense is a sequence, not a single device: <strong>de-energize, lock out, tag out, and test before you touch</strong> — the NFPA 70E approach this whole course assumes for every practical task.</p><p>PPE is matched to the hazard: safety glasses, hard hat, gloves rated for the voltage, arc-rated clothing where the task calls for it. A meter rated for the category of the circuit you are testing is part of PPE, not an accessory — using a low-category meter on a high-energy circuit is how meters explode. And a ladder near a panel is fiberglass, not aluminum: aluminum conducts.</p>"
    },
    {
      "heading": "Circuits and Theory: Ohm's Law in the Field",
      "html": "<p>Level 1 theory is Ohm's law and the power law, applied to real circuits. <strong>V = I × R; P = V × I.</strong> A 120-volt circuit feeding a 1,200-watt load draws 10 amps. In series, current is the same and voltages add; in parallel, voltage is the same and currents add. The exam asks you to work these numbers, not to recite them — practice until the arithmetic is automatic.</p><p>Alternating current adds two ideas: <strong>frequency</strong> (60 hertz in the United States) and <strong>phase</strong> (the timing between voltage and current in inductive and capacitive circuits). A transformer changes voltage by its turns ratio; a motor turns electrical energy into mechanical energy. Level 1 does not ask you to design either — it asks you to recognize what each one does and how it is connected.</p>"
    },
    {
      "heading": "Boxes, Raceways, Conductors, and Cables",
      "html": "<p>The physical work of Level 1 is choosing the right material. <strong>Device boxes</strong> are sized by volume (314.16) — the box must hold every conductor, device, ground, and clamp that goes in it. <strong>Raceways</strong> include EMT (thin-wall, the everyday commercial raceway), RMC (rigid metal, the heavy-duty one), PVC (nonmetallic, for wet and corrosive locations), and flexible metal conduit for short runs and vibration. <strong>Hand bending</strong> is the 90-degree stub, the back-to-back, the offset, and the saddle — each with its own measurements and its own most common error (forgetting the take-up).</p><p><strong>Conductors and cables</strong> are chosen by insulation and use: THHN/THWN-2 for raceways, NM (Romex) for dry residential work, UF for underground, SE for services, MC for commercial work. The letters on the cable tell you where it may go; the exam tests the letters. A cable used in the wrong location is a failed inspection even when it works.</p>"
    },
    {
      "heading": "Drawings, Services, and Test Equipment",
      "html": "<p>Basic electrical drawings use standard symbols — a duplex receptacle, a switch, a light, a panel — and the <strong>legend</strong> tells you what each one means. The <strong>panel schedule</strong> lists every circuit, and the <strong>riser</strong> shows how the service feeds the panels. A residential service is sized from the dwelling load (Article 220), with a <strong>100-amp minimum disconnect (230.79(C))</strong>, and the service equipment is where grounding and bonding begin.</p><p>Test equipment closes the loop: the <strong>multimeter</strong> measures voltage, current, and resistance (and continuity); the <strong>clamp meter</strong> measures current without breaking the circuit; the <strong>megohmmeter</strong> tests insulation resistance. The first test on any de-energized circuit is the <strong>absence-of-voltage test</strong> — test the meter on a known live source, test the circuit, then test the meter again. A meter that cannot prove itself is a meter you do not trust.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "NCCER Electrical Level 1",
      "def": "The first level of the NCCER Electrical curriculum: 12 modules, 12 module tests, 121 items total, 70% to pass each module test."
    },
    {
      "term": "Performance Profile",
      "def": "NCCER's hands-on, pass/fail performance test that accompanies the written module tests."
    },
    {
      "term": "Lockout/tagout",
      "def": "Isolating energy and locking the disconnect so equipment cannot be re-energized while someone works on it."
    },
    {
      "term": "Arc flash",
      "def": "The explosive release of energy from an electrical fault, causing severe burns."
    },
    {
      "term": "EMT",
      "def": "Electrical metallic tubing — thin-wall metal raceway, the everyday commercial conduit."
    },
    {
      "term": "RMC",
      "def": "Rigid metal conduit — heavy-duty threaded metal raceway for severe locations."
    },
    {
      "term": "NM cable",
      "def": "Nonmetallic-sheathed cable (Romex) for dry residential wiring."
    },
    {
      "term": "THHN/THWN-2",
      "def": "Thermoplastic-insulated building wire, rated for dry and wet locations, for use in raceways."
    },
    {
      "term": "Take-up",
      "def": "The distance a conduit bender consumes when making a bend — forgotten take-up is the most common bending error."
    },
    {
      "term": "Device box",
      "def": "A box that holds switches and receptacles, sized by volume under 314.16."
    },
    {
      "term": "Panel schedule",
      "def": "The table listing every circuit in a panel: load, breaker size, and conductor."
    },
    {
      "term": "Clamp meter",
      "def": "A meter that measures current by clamping around a conductor without breaking the circuit."
    },
    {
      "term": "Megohmmeter",
      "def": "A meter that tests insulation resistance at high voltage."
    },
    {
      "term": "Absence-of-voltage test",
      "def": "Live-dead-live testing: verify the meter on a known source, test the circuit, verify the meter again."
    },
    {
      "term": "Frequency",
      "def": "The cycles per second of alternating current — 60 hertz in the United States."
    },
    {
      "term": "Turns ratio",
      "def": "The ratio of primary to secondary turns in a transformer, which sets the voltage ratio."
    }
  ],
  "video": {
    "title": "NCCER Electrical Level 1 Module 1: Orientation to the Electrical Trade 2026 Guide",
    "embedUrl": "https://www.youtube.com/embed/1PvpWq-qbZc",
    "note": "An orientation review of NCCER Electrical Level 1, Module 1 — the trade, the career path, and what the Level 1 modules cover.",
    "more": [
      {
        "title": "NCCER ELECTRICAL LEVEL 1 Module 1: Mastering Occupational Overview for 2026 Success",
        "url": "https://www.youtube.com/watch?v=UekF2O4cp6A"
      },
      {
        "title": "NCCER Electrical Level 1 Module 11 Residential Electrical Services Study Guide 2026",
        "url": "https://www.youtube.com/watch?v=hmNA6IUeO00"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 120-volt circuit feeds a 1,800-watt load. (a) What is the current? (b) Which copper conductor size does 240.4(D) require as a minimum for that current on a 20-amp circuit? (c) What does the absence-of-voltage test prove?</p>",
      "solution": "<p><strong>Answer:</strong> Solution: (a) I = 1,800 / 120 = 15 amps. (b) 12 AWG copper — 14 AWG is capped at 15 amps and a 20-amp circuit needs 12 AWG minimum. (c) It proves the circuit is de-energized, using a meter verified live-dead-live.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Objective check: \"Name the 12 Level 1 modules and the Level 1 test structure.\" Write a three-sentence exam-ready explanation with the module count, the item total, and the pass mark.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Level 1 has 12 modules, from Orientation to the Electrical Trade through Electrical Test Equipment. Step 2: The written assessment is 12 module tests totaling 121 items. Step 3: Every module test passes at 70%, and a hands-on Performance Profile accompanies the written tests.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Scenario: You arrive at a panel to replace a breaker. A coworker says the circuit is off because the breaker is in the OFF position. What do you do before touching anything?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Do not trust the breaker position — lock out and tag out the disconnect yourself. Step 2: Test for absence of voltage with a meter you have verified live-dead-live. Step 3: Only then touch the circuit; a breaker handle can lie, and someone else can turn it back on.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Numbers drill. (a) How many items are in the Level 1 module tests? (b) What is the pass mark for each module test? (c) A 240-volt, 4,800-watt heater draws how many amps?</p>",
      "solution": "<p><strong>Answer:</strong> Solution: (a) 121 items across 12 module tests. (b) 70%. (c) I = 4,800 / 240 = 20 amps.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Teach-back: Pick any three key terms from this module and write a two-sentence field explanation of each, as if training a first-week apprentice. No textbook language — your own words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Choose terms you could not define yesterday — teaching the ones you already know builds nothing. Step 2: For each term, sentence one gives the plain definition (compare it with the key-terms list only after writing). Step 3: Sentence two gives a job moment where the term matters. Your three terms will differ; the two-sentence discipline is the point.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Error hunt: A study partner writes: \"Level 1 has 9 modules and 89 items, module tests pass at 75%, NM cable is for underground work, and you can trust a breaker handle to prove a circuit is dead.\" Correct every error in that statement.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Level 1 has 12 modules and 121 items — 9 modules and 89 items is NCCER Core, not Electrical Level 1. Step 2: Module tests pass at 70%; 75% is the journey-level assessment mark. Step 3: NM cable is for dry residential work; UF is the underground cable. Step 4: A breaker handle never proves a circuit is dead — only a live-dead-live absence-of-voltage test does.</p>"
    }
  ],
  "quiz": [
    {
      "module": 5,
      "q": "How many module tests make up the NCCER Electrical Level 1 written assessment, and how many items total?",
      "choices": [
        "9 tests, 89 items",
        "12 tests, 121 items",
        "11 tests, 100 items",
        "12 tests, 89 items"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Level 1 has 12 module tests totaling 121 items, each passing at 70%. (a) is wrong: \"9 tests, 89 items\" — 9 modules and 89 items is NCCER Core, not Electrical Level 1. (c) is wrong: \"11 tests, 100 items\" — 11 tests and 100 items is not the Level 1 structure. (d) is wrong: \"12 tests, 89 items\" — 12 tests is right, but the item total is 121, not 89."
    },
    {
      "module": 5,
      "q": "Which cable type is used for dry residential wiring inside walls?",
      "choices": [
        "UF",
        "NM",
        "SE",
        "MC"
      ],
      "answer": 1,
      "explanation": "Correct: (b). NM (nonmetallic-sheathed) cable is for dry residential wiring. (a) is wrong: \"UF\" — UF is underground feeder cable, for direct burial. (c) is wrong: \"SE\" — SE is service-entrance cable. (d) is wrong: \"MC\" — MC is metal-clad cable, used mainly in commercial work."
    },
    {
      "module": 5,
      "q": "What is the first step of the absence-of-voltage test?",
      "choices": [
        "Test the circuit",
        "Test the meter on a known live source",
        "Lock out the disconnect",
        "Remove the panel cover"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Live-dead-live: first verify the meter works on a known live source, then test the circuit, then verify the meter again. (a) is wrong: \"Test the circuit\" — Testing the circuit comes second — the meter must be proven first. (c) is wrong: \"Lock out the disconnect\" — Lockout comes before testing, but it is not the first step of the meter test itself. (d) is wrong: \"Remove the panel cover\" — Removing the cover comes after de-energizing and testing."
    },
    {
      "module": 5,
      "q": "A 120-volt circuit feeds a 900-watt load. What is the current?",
      "choices": [
        "7.5 amps",
        "9 amps",
        "12 amps",
        "5 amps"
      ],
      "answer": 0,
      "explanation": "Correct: (a). I = 900 / 120 = 7.5 amps. (b) is wrong: \"9 amps\" — 9 amps would be 1,080 watts at 120 volts. (c) is wrong: \"12 amps\" — 12 amps would be 1,440 watts at 120 volts. (d) is wrong: \"5 amps\" — 5 amps would be 600 watts at 120 volts."
    },
    {
      "module": 5,
      "q": "Which raceway is the thin-wall metal conduit used for everyday commercial work?",
      "choices": [
        "RMC",
        "EMT",
        "PVC",
        "FMC"
      ],
      "answer": 1,
      "explanation": "Correct: (b). EMT (electrical metallic tubing) is the thin-wall metal raceway used for everyday commercial work. (a) is wrong: \"RMC\" — RMC is rigid metal conduit, the heavy-duty threaded raceway. (c) is wrong: \"PVC\" — PVC is nonmetallic conduit, used in wet and corrosive locations. (d) is wrong: \"FMC\" — FMC is flexible metal conduit, for short runs and vibration."
    },
    {
      "module": 5,
      "q": "What does a megohmmeter test?",
      "choices": [
        "Voltage",
        "Insulation resistance",
        "Frequency",
        "Power factor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A megohmmeter tests insulation resistance at high voltage. (a) is wrong: \"Voltage\" — Voltage is measured by a voltmeter or multimeter. (c) is wrong: \"Frequency\" — Frequency is measured by a frequency meter. (d) is wrong: \"Power factor\" — Power factor is calculated from watts and volt-amperes, not measured by a megohmmeter."
    },
    {
      "module": 5,
      "q": "What is the most common error when bending a 90-degree stub?",
      "choices": [
        "Bending too slowly",
        "Forgetting the take-up",
        "Using the wrong bender size",
        "Marking the conduit twice"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Forgetting the take-up — the distance the bender consumes — is the most common stub-bending error. (a) is wrong: \"Bending too slowly\" — Bending slowly is not an error. (c) is wrong: \"Using the wrong bender size\" — Using the wrong bender size is a mistake, but the take-up is the classic stub error. (d) is wrong: \"Marking the conduit twice\" — Marking twice is harmless if the right mark is used."
    },
    {
      "module": 5,
      "q": "Which NCCER Level 1 module covers residential electrical services?",
      "choices": [
        "26103",
        "26111",
        "26105",
        "26108"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Module 26111 is Residential Electrical Services. (a) is wrong: \"26103\" — 26103 is Introduction to Electrical Circuits. (c) is wrong: \"26105\" — 26105 is Introduction to the NEC. (d) is wrong: \"26108\" — 26108 is Raceways and Fittings."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — NCCER Electrical Level 1 Review: Quick Reference</h3><p><strong>Focus:</strong> Level 1: The 12 Modules and the Test — the review ground for this module's exam questions.</p><p><strong>Must-know objectives:</strong> Name the 12 Level 1 modules and the Level 1 test structure: 12 module tests, 121 items total, every module test passes at 70%.; Apply electrical safety: shock, arc flash, lockout/tagout, and PPE under NFPA 70E.; Use Ohm's law and the power law on DC and AC circuits, and read a basic electrical drawing..</p><p><strong>Anchor numbers (verified for this course):</strong> All code values in this module are from the 2023 NEC plus Michigan Part 8 amendments as adopted March 12, 2024. Michigan journeyman: 80 questions, 150 minutes, 75% to pass. Michigan master: 76 questions, 180 minutes, 75% to pass. NCCER module tests pass at 70%; journey-level assessments at 75%. NABCEP PV Associate passes at a scaled score of 65 on a 0–99 scale — never 65%.</p><p><strong>Terms to flash-review:</strong> NCCER Electrical Level 1, Performance Profile, Lockout/tagout, Arc flash, EMT, RMC, NM cable, THHN/THWN-2</p>\n"
};
