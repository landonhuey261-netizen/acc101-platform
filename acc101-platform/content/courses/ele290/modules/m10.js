// ele290 — Electrical Certification Prep: original review content. Practice exams use original questions in the real exams' style/format.
module.exports = {
  "number": 10,
  "slug": "fire-alarm-review",
  "title": "Fire Alarm Systems Review",
  "estTime": "3–4 hours",
  "objectives": [
    "State the Michigan fire alarm specialty technician exam format: 36 questions, 90 minutes, 75% to pass, scheduled through PSI.",
    "Identify the parts of a fire alarm system: initiating devices, notification appliances, and the control panel.",
    "Apply detector spacing (NFPA 72) and notification-appliance rules: candela, mounting height, and audibility.",
    "Size the secondary power supply: 24 hours of standby plus 5 minutes of alarm (15 minutes for voice).",
    "Apply the wiring rules of NEC Article 760 and the testing and inspection rules of NFPA 72."
  ],
  "sections": [
    {
      "heading": "The Exam: 36 Questions, 90 Minutes, 75% to Pass",
      "html": "<p>The Michigan fire alarm specialty technician exam is <strong>36 questions in 90 minutes, 75% to pass</strong> — 27 correct answers — scheduled through PSI. It tests NFPA 72 (the National Fire Alarm and Signaling Code) and NEC Article 760, plus the Michigan licensing rules for the specialty. The practice exam in this course is rounded to <strong>40 questions in 90 minutes at 75%</strong> — the extra four questions are a practice-exam choice, not the real format. Your time budget on the real exam is about <strong>2 minutes 30 seconds per question</strong>.</p><p>Fire alarm work is a specialty because the system has one job and no second chance: it must detect a fire, tell everyone in the building, and keep working while the building is burning. Every rule in this module traces back to that job.</p>"
    },
    {
      "heading": "The System: Initiating Devices, Panel, Notification",
      "html": "<p>A fire alarm system has three parts. <strong>Initiating devices</strong> detect the fire or the person who found it: smoke detectors, heat detectors, and manual pull stations. <strong>The control panel</strong> (the FACP) receives the signals, decides what to do, and supervises the circuits — a break, a short, or a ground fault on a supervised circuit shows up as a trouble signal at the panel, not as silence. <strong>Notification appliances</strong> tell the building: horns, strobes, speakers, and bells.</p><p>The circuits have their own names: the <strong>signaling line circuit (SLC)</strong> carries the addressable devices, the <strong>initiating device circuit (IDC)</strong> carries conventional initiating devices, and the <strong>notification appliance circuit (NAC)</strong> carries the horns and strobes. The exam tests the names and the supervision rule: a supervised circuit must report a fault as trouble.</p>"
    },
    {
      "heading": "Detectors: Spacing, Placement, and the 30-Foot Rule",
      "html": "<p><strong>Smoke detector spacing</strong> starts from the detector's listed spacing — commonly <strong>30 feet</strong> — and is reduced by the <strong>0.7 rule</strong>: when detectors are spaced in two directions, the spacing in one direction is multiplied by 0.7 to keep the coverage area the same. A smooth ceiling with 30-foot listed spacing gives a detector every 30 feet; an irregular ceiling, beams, or joists reduce the spacing further. Detectors go on the ceiling or high on the wall, never where air currents from a supply diffuser will blow smoke away from them, and never in a dead-air pocket at a ceiling corner.</p><p><strong>Heat detectors</strong> come in fixed-temperature and rate-of-rise types: fixed-temperature alarms when the air reaches a set temperature; rate-of-rise alarms when the temperature rises faster than a set rate. Heat detectors are used where smoke detectors would false-alarm — kitchens, garages, dusty rooms — and they are spaced by their listed spacing, not by the smoke-detector rules.</p>"
    },
    {
      "heading": "Notification: Candela, Height, and Audibility",
      "html": "<p>Notification appliances must be <strong>seen and heard</strong>. Strobes are rated in <strong>candela</strong> — the light output — and the required candela depends on the room size and the distance from the strobe: a larger room needs a higher candela rating, and the rating is chosen from the NFPA 72 tables by room dimension. Strobes are mounted <strong>80 to 96 inches above the floor</strong> on the wall (or on the ceiling per the listing), and they must be visible from anywhere in the room — no more than the listed spacing apart.</p><p>Horns and speakers must be <strong>audible</strong>: the alarm must be at least <strong>15 decibels above the average ambient sound level</strong>, and at least <strong>75 dBA at the pillow</strong> in sleeping areas (and no more than 120 dBA anywhere, to protect hearing). A horn that cannot be heard over the machinery in the room it serves is a failed system, even when it works on the bench.</p>"
    },
    {
      "heading": "Power, Wiring, Testing, and Inspection",
      "html": "<p>The <strong>secondary power supply</strong> is the battery that keeps the system alive when the building power fails: <strong>24 hours of standby plus 5 minutes of alarm</strong> for most systems, and <strong>24 hours plus 15 minutes of alarm</strong> for emergency voice/alarm communications systems. The battery calculation adds the standby current over 24 hours to the alarm current over 5 (or 15) minutes, then applies a safety factor — a battery that just barely meets the math will fail the test after a year of aging.</p><p><strong>NEC Article 760</strong> governs the wiring: power-limited fire alarm circuits (PLFA) use listed cable types (FPL, FPLR, FPLP), must be separated from power conductors, and must be installed so a fault in one circuit cannot take down another. <strong>NFPA 72 Chapter 14</strong> governs testing and inspection: detectors are tested annually, batteries are tested and replaced on schedule, and every test is documented. A system that has never been tested is a system that has never been proven to work.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Fire alarm specialty exam",
      "def": "Michigan's fire alarm specialty technician exam: 36 questions, 90 minutes, 75% to pass, scheduled through PSI."
    },
    {
      "term": "NFPA 72",
      "def": "The National Fire Alarm and Signaling Code: the standard for fire alarm system design, installation, testing, and maintenance."
    },
    {
      "term": "FACP",
      "def": "Fire alarm control panel: the unit that receives signals from initiating devices and drives the notification appliances."
    },
    {
      "term": "Initiating device",
      "def": "A device that starts the alarm: a smoke detector, heat detector, or manual pull station."
    },
    {
      "term": "Notification appliance",
      "def": "A device that alerts the building: a horn, strobe, speaker, or bell."
    },
    {
      "term": "SLC",
      "def": "Signaling line circuit: the circuit carrying addressable devices to the control panel."
    },
    {
      "term": "NAC",
      "def": "Notification appliance circuit: the circuit carrying horns and strobes from the panel."
    },
    {
      "term": "IDC",
      "def": "Initiating device circuit: the circuit carrying conventional initiating devices to the panel."
    },
    {
      "term": "0.7 rule",
      "def": "When smoke detectors are spaced in two directions, the spacing in one direction is multiplied by 0.7 to keep coverage the same."
    },
    {
      "term": "Candela",
      "def": "The unit of light output for a strobe; the required candela depends on room size and distance."
    },
    {
      "term": "Secondary power supply",
      "def": "The battery that keeps the fire alarm system running when building power fails: 24 hours standby plus 5 minutes of alarm (15 for voice)."
    },
    {
      "term": "Article 760",
      "def": "NEC Article 760: the wiring rules for fire alarm systems, including power-limited fire alarm cable types."
    },
    {
      "term": "Supervised circuit",
      "def": "A fire alarm circuit that reports a break, short, or ground fault as a trouble signal at the panel."
    },
    {
      "term": "Rate-of-rise detector",
      "def": "A heat detector that alarms when temperature rises faster than a set rate."
    },
    {
      "term": "FPL / FPLR / FPLP",
      "def": "Power-limited fire alarm cable types: general use, riser, and plenum."
    },
    {
      "term": "Trouble signal",
      "def": "The panel's indication that a circuit or device has a fault — distinct from an alarm signal."
    }
  ],
  "video": {
    "title": "NFPA 72 Explained |  by Dr. Rodger Reiswig, Johnson Controls",
    "embedUrl": "https://www.youtube.com/embed/YO-W-RO6GKw",
    "note": "Dr. Rodger Reiswig explains NFPA 72 — the National Fire Alarm and Signaling Code — in plain terms: what the code requires and why.",
    "more": [
      {
        "title": "NFPA 72 - Fire Alarm Testing Requirements & Best Practices",
        "url": "https://www.youtube.com/watch?v=tbVOzojO1nI"
      },
      {
        "title": "NFPA 72 Basics for Entry-Level Fire Alarm Technicians",
        "url": "https://www.youtube.com/watch?v=uDE5LVSPbts"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A fire alarm system draws 0.5 amps in standby and 4 amps in alarm. (a) How many amp-hours are needed for 24 hours of standby? (b) How many amp-hours for 5 minutes of alarm? (c) What is the total before any safety factor?</p>",
      "solution": "<p><strong>Answer:</strong> Solution: (a) 0.5 × 24 = 12 amp-hours. (b) 4 × (5/60) = 0.333 amp-hours. (c) 12 + 0.333 = 12.33 amp-hours before the safety factor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Objective check: \"Apply detector spacing (NFPA 72) and notification-appliance rules.\" Write a three-sentence exam-ready explanation of the 30-foot spacing, the 0.7 rule, and the strobe mounting height.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A smoke detector's listed spacing is commonly 30 feet on a smooth ceiling. Step 2: When detectors are spaced in two directions, the spacing in one direction is multiplied by 0.7 to keep the coverage area the same. Step 3: Wall-mounted strobes are installed 80 to 96 inches above the floor so they are visible throughout the room.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Scenario: A horn in a machine shop cannot be heard over the equipment. The installer says the horn works fine on the bench. What is the correct call?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The bench test is not the requirement — NFPA 72 requires the alarm to be at least 15 decibels above the average ambient sound level in the space it serves. Step 2: Measure the ambient level in the shop with the equipment running. Step 3: Add or relocate notification appliances, or use a higher-output device, until the alarm is 15 dB above ambient — and verify it in the room, not on the bench.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Numbers drill. (a) How many correct answers pass the fire alarm specialty exam? (b) How many hours of standby must the secondary power supply provide? (c) How many minutes of alarm for a voice system?</p>",
      "solution": "<p><strong>Answer:</strong> Solution: (a) 27 correct out of 36 (75%). (b) 24 hours. (c) 15 minutes of alarm for emergency voice/alarm communications systems.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Teach-back: Pick any three key terms from this module and write a two-sentence field explanation of each, as if training a first-week apprentice. No textbook language — your own words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Choose terms you could not define yesterday — teaching the ones you already know builds nothing. Step 2: For each term, sentence one gives the plain definition (compare it with the key-terms list only after writing). Step 3: Sentence two gives a job moment where the term matters. Your three terms will differ; the two-sentence discipline is the point.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Error hunt: A study partner writes: \"The fire alarm exam is 40 questions, detectors are spaced 50 feet apart, strobes mount at 60 inches, and the battery needs 12 hours of standby.\" Correct every error in that statement.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The real exam is 36 questions (the course practice exam is rounded to 40). Step 2: Listed smoke-detector spacing is commonly 30 feet, reduced by the 0.7 rule where it applies. Step 3: Wall-mounted strobes are installed 80 to 96 inches above the floor. Step 4: The secondary power supply must provide 24 hours of standby plus 5 minutes of alarm (15 for voice).</p>"
    }
  ],
  "quiz": [
    {
      "module": 10,
      "q": "How many minutes does the real Michigan fire alarm specialty technician exam allow?",
      "choices": [
        "60 minutes",
        "90 minutes",
        "120 minutes",
        "150 minutes"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The real fire alarm specialty exam is 36 questions in 90 minutes at 75% to pass. (a) is wrong: \"60 minutes\" — 60 minutes is too short for the 36-question fire alarm exam. (c) is wrong: \"120 minutes\" — 120 minutes is the NCCER Core practice-exam time, not the fire alarm exam's. (d) is wrong: \"150 minutes\" — 150 minutes is the journeyman exam's time, not the fire alarm exam's."
    },
    {
      "module": 10,
      "q": "Which circuit carries the horns and strobes from the fire alarm panel?",
      "choices": [
        "SLC",
        "IDC",
        "NAC",
        "PLFA"
      ],
      "answer": 2,
      "explanation": "Correct: (c). The notification appliance circuit (NAC) carries the horns and strobes. (a) is wrong: \"SLC\" — The SLC carries addressable devices to the panel. (b) is wrong: \"IDC\" — The IDC carries conventional initiating devices to the panel. (d) is wrong: \"PLFA\" — PLFA is a cable type, not a circuit name."
    },
    {
      "module": 10,
      "q": "Wall-mounted strobes are installed at what height above the floor?",
      "choices": [
        "60 to 72 inches",
        "80 to 96 inches",
        "48 to 60 inches",
        "96 to 120 inches"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Wall-mounted strobes are installed 80 to 96 inches above the floor so they are visible throughout the room. (a) is wrong: \"60 to 72 inches\" — 60 to 72 inches is below the required mounting range. (c) is wrong: \"48 to 60 inches\" — 48 to 60 inches is far below the required mounting range. (d) is wrong: \"96 to 120 inches\" — 96 to 120 inches is above the required mounting range."
    },
    {
      "module": 10,
      "q": "In a sleeping area, how loud must the fire alarm be at the pillow?",
      "choices": [
        "At least 75 dBA",
        "At least 60 dBA",
        "At least 90 dBA",
        "At least 15 dBA"
      ],
      "answer": 0,
      "explanation": "Correct: (a). NFPA 72 requires at least 75 dBA at the pillow in sleeping areas (and at least 15 dB above ambient elsewhere). (b) is wrong: \"At least 60 dBA\" — 60 dBA is below the 75 dBA sleeping-area requirement. (c) is wrong: \"At least 90 dBA\" — 90 dBA exceeds the minimum but is not the required value. (d) is wrong: \"At least 15 dBA\" — 15 dBA is the amount above ambient, not the absolute level at the pillow."
    },
    {
      "module": 10,
      "q": "What does a supervised fire alarm circuit do when a wire breaks?",
      "choices": [
        "Nothing — it stays silent",
        "It reports a trouble signal at the panel",
        "It sounds the alarm",
        "It shuts the panel down"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A supervised circuit reports a break, short, or ground fault as a trouble signal at the panel. (a) is wrong: \"Nothing — it stays silent\" — Silence would mean the fault is undetected — supervision exists to prevent that. (c) is wrong: \"It sounds the alarm\" — A break is a trouble condition, not an alarm condition. (d) is wrong: \"It shuts the panel down\" — A break does not shut the panel down; it is reported as trouble."
    },
    {
      "module": 10,
      "q": "Which detector type is used where smoke detectors would false-alarm, such as a kitchen?",
      "choices": [
        "A smoke detector with a higher candela",
        "A heat detector",
        "A duct detector only",
        "A pull station"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Heat detectors are used where smoke detectors would false-alarm — kitchens, garages, and dusty rooms. (a) is wrong: \"A smoke detector with a higher candela\" — Candela is a strobe rating, not a detector feature. (c) is wrong: \"A duct detector only\" — A duct detector is for air-handling systems, not a kitchen. (d) is wrong: \"A pull station\" — A pull station is a manual initiating device, not a detector."
    },
    {
      "module": 10,
      "q": "How many hours of standby must a fire alarm system's secondary power supply provide?",
      "choices": [
        "12 hours",
        "24 hours",
        "8 hours",
        "72 hours"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The secondary power supply must provide 24 hours of standby plus 5 minutes of alarm (15 minutes for voice systems). (a) is wrong: \"12 hours\" — 12 hours is half the required standby time. (c) is wrong: \"8 hours\" — 8 hours is far below the required standby time. (d) is wrong: \"72 hours\" — 72 hours exceeds the requirement but is not the required value."
    },
    {
      "module": 10,
      "q": "Fire alarm circuits are power-limited. Which cable types are used for them?",
      "choices": [
        "NM and UF",
        "FPL, FPLR, and FPLP",
        "THHN and XHHW",
        "MC and AC"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Power-limited fire alarm circuits use listed FPL (general), FPLR (riser), and FPLP (plenum) cable under Article 760. (a) is wrong: \"NM and UF\" — NM and UF are building wire and underground feeder cable, not fire alarm cable. (c) is wrong: \"THHN and XHHW\" — THHN and XHHW are building wire, not fire alarm cable. (d) is wrong: \"MC and AC\" — MC and AC are metal-clad and armored cable, not fire alarm cable."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Fire Alarm Systems Review: Quick Reference</h3><p><strong>Focus:</strong> The Exam: 36 Questions, 90 Minutes, 75% to Pass — the review ground for this module's exam questions.</p><p><strong>Must-know objectives:</strong> State the Michigan fire alarm specialty technician exam format: 36 questions, 90 minutes, 75% to pass, scheduled through PSI.; Identify the parts of a fire alarm system: initiating devices, notification appliances, and the control panel.; Apply detector spacing (NFPA 72) and notification-appliance rules: candela, mounting height, and audibility..</p><p><strong>Anchor numbers (verified for this course):</strong> All code values in this module are from the 2023 NEC plus Michigan Part 8 amendments as adopted March 12, 2024. Michigan journeyman: 80 questions, 150 minutes, 75% to pass. Michigan master: 76 questions, 180 minutes, 75% to pass. NCCER module tests pass at 70%; journey-level assessments at 75%. NABCEP PV Associate passes at a scaled score of 65 on a 0–99 scale — never 65%.</p><p><strong>Terms to flash-review:</strong> Fire alarm specialty exam, NFPA 72, FACP, Initiating device, Notification appliance, SLC, NAC, IDC</p>\n"
};
