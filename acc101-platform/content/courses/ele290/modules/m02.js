// ele290 — Electrical Certification Prep: original review content. Practice exams use original questions in the real exams' style/format.
module.exports = {
  "number": 2,
  "slug": "journeyman-review-1",
  "title": "Michigan Journeyman Review I: Code & Theory",
  "estTime": "3–4 hours",
  "objectives": [
    "State the Michigan journeyman exam format: 80 questions, 150 minutes, 75% to pass, open-book on the 2023 NEC plus Michigan Part 8 amendments.",
    "Apply Ohm's law and the power law to series and parallel circuits, including voltage drop.",
    "Size conductors with Table 310.16 and apply the 240.4(D) small-conductor limits and derating.",
    "Apply GFCI protection (210.8) and AFCI protection (210.12) to dwelling locations.",
    "Apply receptacle spacing rules (210.52) and the grounding and bonding basics of Article 250."
  ],
  "sections": [
    {
      "heading": "The Exam: 80 Questions, 150 Minutes, 75% to Pass",
      "html": "<p>The Michigan journeyman electrician exam is <strong>80 questions in 150 minutes, 75% to pass</strong> — that is 60 correct answers. It is <strong>open-book on the 2023 NEC plus Michigan Part 8 amendments</strong>, scheduled through PSI. The questions mix code lookup (about half), electrical theory, and calculations. Your time budget is about <strong>1 minute 52 seconds per question</strong>: answer the ones you know immediately, flag the lookups, and never spend five minutes on one question.</p><p>The pass mark matters: 75% is higher than the 70% used by NCCER module tests. Sixty correct out of 80 leaves only 20 misses. The practice exam for this material is this course's midterm — take it timed, with your Code book open, and diagnose misses by article before you retake it.</p>"
    },
    {
      "heading": "Theory You Must Know Cold: Ohm's Law and Power",
      "html": "<p>Code lookup is open-book; theory is not in the book in the form the exam asks. <strong>Ohm's law: V = I × R.</strong> <strong>Power: P = V × I, P = I² × R, P = V² / R.</strong> In a series circuit the current is the same everywhere and voltages add; in a parallel circuit the voltage is the same across each branch and currents add. Total resistance in parallel is always less than the smallest branch resistance — 1/R(total) = 1/R1 + 1/R2 + ...</p><p>Two more theory facts appear constantly. First, <strong>voltage drop</strong>: VD = 2 × K × I × L / CM for a single-phase circuit (K = 12.9 for copper, 21.2 for aluminum; L is the one-way length; CM is the circular-mil area from Chapter 9 Table 8). The NEC recommends no more than 3% drop on a branch circuit and 5% total (Informational Note to 210.19(A) — a recommendation, not a hard rule). Second, <strong>power factor</strong>: true power (watts) equals apparent power (volt-amperes) times power factor; motors draw more volt-amperes than watts.</p>"
    },
    {
      "heading": "Conductors: Table 310.16, 240.4(D), and Derating",
      "html": "<p>Conductor sizing starts at <strong>Table 310.16</strong>, which gives ampacity for conductors in a raceway or cable at 30°C ambient. Three temperature columns matter: 60°C, 75°C, and 90°C. The column you may use is limited by the <strong>lowest-rated termination</strong> — most dwelling terminations are 60°C or 75°C rated, so the 90°C column is usually used only as the starting point for derating, not as the final ampacity.</p><p>Two hard limits follow. <strong>240.4(D)</strong> caps the overcurrent protection for small copper conductors regardless of ampacity: 14 AWG at 15 amps, 12 AWG at 20 amps, 10 AWG at 30 amps. And <strong>Table 310.15(C)(1)</strong> derates ampacity when more than three current-carrying conductors share a raceway: 4–6 conductors 80%, 7–9 70%, 10–20 50%, 21–30 45%, 31–40 40%, 41 or more 35%. The neutral counts as a current-carrying conductor in a multiwire circuit with unbalanced loads and in most nonlinear-load situations. Always derate from the 90°C column when the conductor insulation is rated 90°C, then check the result against the termination column.</p>"
    },
    {
      "heading": "GFCI and AFCI: Where They Are Required",
      "html": "<p><strong>GFCI protection (210.8)</strong> is required for 125-volt through 250-volt receptacles in dwelling-unit bathrooms, garages, outdoors, crawl spaces, unfinished basements, kitchens, laundry areas, and within 6 feet of a sink, bathtub, or shower — plus boathouses and similar locations. A GFCI trips at about <strong>5 milliamperes</strong> of ground-fault current, protecting people from shock. It does not replace overcurrent protection.</p><p><strong>AFCI protection (210.12)</strong> is required for branch circuits supplying outlets in dwelling-unit kitchens, family rooms, dining rooms, living rooms, parlors, libraries, dens, bedrooms, sunrooms, recreation rooms, closets, hallways, laundry areas, and similar rooms. An AFCI detects arcing faults that a standard breaker cannot see. Both devices are tested by their test buttons, not by shorting the circuit — and the exam loves the exact room lists, so learn them as a list, not as a guess.</p>"
    },
    {
      "heading": "Receptacles, Grounding, and the Safety Floor",
      "html": "<p><strong>210.52(A)(1)</strong>: in a dwelling, no point along the floor line of a wall space may be more than <strong>6 feet</strong> from a receptacle, which means receptacles are spaced no more than <strong>12 feet</strong> apart. Kitchen countertops follow <strong>210.52(C)</strong>: no point along the countertop wall more than <strong>24 inches</strong> from a receptacle, with island and peninsular countertops covered by their own rules. Small-appliance branch circuits: at least <strong>two 20-amp circuits</strong> for the kitchen, dining, and similar areas (210.11(C)(1)), plus a <strong>20-amp laundry circuit</strong> (210.11(C)(2)).</p><p>Grounding and bonding (Article 250) rest on three ideas: the <strong>grounding electrode system</strong> connects the service to earth (250.52 lists the electrodes — metal water pipe, concrete-encased, ground ring, rod, plate); the <strong>equipment grounding conductor</strong> (Table 250.122) gives fault current a low-impedance path back to the source so the breaker trips; and <strong>bonding</strong> connects metal parts that could become energized so they stay at the same potential. The safety floor for all of it is NFPA 70E: <strong>all practical work in this course assumes de-energized, locked-out/tagged-out work under a licensed supervisor — never work on live equipment.</strong></p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Journeyman exam",
      "def": "Michigan's journeyman electrician exam: 80 questions, 150 minutes, 75% to pass, open-book on the 2023 NEC plus Part 8."
    },
    {
      "term": "Ohm's law",
      "def": "V = I × R: voltage equals current times resistance."
    },
    {
      "term": "Power law",
      "def": "P = V × I (also P = I²R and P = V²/R): watts equal volts times amps."
    },
    {
      "term": "Voltage drop",
      "def": "The loss of voltage along a conductor under load; VD = 2 × K × I × L / CM (single-phase)."
    },
    {
      "term": "Table 310.16",
      "def": "The NEC ampacity table for conductors in raceways or cables at 30°C ambient."
    },
    {
      "term": "240.4(D)",
      "def": "Small-conductor overcurrent limits: 14 AWG 15 A, 12 AWG 20 A, 10 AWG 30 A (copper)."
    },
    {
      "term": "Derating",
      "def": "Reducing a conductor's ampacity for high ambient temperature or for more than three current-carrying conductors in a raceway."
    },
    {
      "term": "GFCI",
      "def": "Ground-fault circuit interrupter: trips at about 5 mA of ground-fault current to protect people from shock."
    },
    {
      "term": "AFCI",
      "def": "Arc-fault circuit interrupter: detects arcing faults; required by 210.12 in most dwelling rooms."
    },
    {
      "term": "210.52(A)(1)",
      "def": "Dwelling receptacle spacing: no point along the floor line more than 6 feet from a receptacle; 12 feet maximum spacing."
    },
    {
      "term": "Grounding electrode",
      "def": "A conductive body (rod, water pipe, concrete-encased electrode, ring, plate) that connects the system to earth — 250.52."
    },
    {
      "term": "Equipment grounding conductor",
      "def": "The conductor that bonds equipment to the grounded system so fault current can trip the breaker — sized by Table 250.122."
    },
    {
      "term": "Bonding",
      "def": "Connecting metal parts that could become energized so they remain at the same potential."
    },
    {
      "term": "NFPA 70E",
      "def": "The electrical safety standard: de-energize, lock out, tag out, and test before touching — never work live."
    },
    {
      "term": "Power factor",
      "def": "True power divided by apparent power; motors draw more volt-amperes than watts."
    },
    {
      "term": "Multiwire branch circuit",
      "def": "A branch circuit with two or more ungrounded conductors sharing one grounded (neutral) conductor."
    }
  ],
  "video": {
    "title": "Electrical Journeyman Exam | 6 things I wish I knew before I took it!",
    "embedUrl": "https://www.youtube.com/embed/6OFLiHPPiU4",
    "note": "A working electrician's plain advice on what the journeyman exam actually feels like — including how much of it is open-book code lookup versus theory you must know cold.",
    "more": [
      {
        "title": "How To Study For and PASS Your Electrician Exam (FIRST TIME)",
        "url": "https://www.youtube.com/watch?v=iF_N5c-HBQo"
      },
      {
        "title": "Test Taking Tips for your Electrical Journeyman Exam",
        "url": "https://www.youtube.com/watch?v=Jp1Vz2SBXrc"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 120-volt circuit feeds a 1,440-watt load. (a) What is the current? (b) What is the minimum copper conductor size for a 20-amp circuit under 240.4(D)? (c) What overcurrent device protects it?</p>",
      "solution": "<p><strong>Answer:</strong> Solution: (a) I = P / V = 1,440 / 120 = 12 amps. (b) 12 AWG copper is the smallest conductor allowed on a 20-amp circuit (240.4(D) caps 14 AWG at 15 amps). (c) A 20-amp breaker or fuse.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Objective check: \"Apply GFCI protection (210.8) and AFCI protection (210.12) to dwelling locations.\" Write a three-sentence exam-ready explanation naming the trip level of a GFCI and two rooms that require AFCI.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A GFCI trips at about 5 milliamperes of ground-fault current and is required in bathrooms, garages, outdoors, kitchens, laundry areas, and within 6 feet of a sink. Step 2: AFCI protection is required by 210.12 for branch circuits in dwelling kitchens, family rooms, living rooms, bedrooms, dining rooms, and similar rooms. Step 3: GFCI protects people from shock; AFCI detects arcing faults a standard breaker cannot see.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Scenario: A dwelling bedroom wall is 18 feet long with no doors. How many receptacles does 210.52(A)(1) require at minimum, and where do they go?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No point may be more than 6 feet from a receptacle, so receptacles are spaced no more than 12 feet apart. Step 2: An 18-foot wall needs receptacles at 6 feet and 12 feet from one end — two receptacles, each within 6 feet of the ends and of each other. Step 3: One receptacle would leave the far ends more than 6 feet away, so two is the minimum.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Numbers drill. (a) A 240-volt, 4,800-watt heater draws how many amps? (b) What is the ampacity of 6 AWG copper THHN in the 75°C column of Table 310.16? (c) How many correct answers pass the journeyman exam?</p>",
      "solution": "<p><strong>Answer:</strong> Solution: (a) I = 4,800 / 240 = 20 amps. (b) 65 amps. (c) 60 correct out of 80 (75%).</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Teach-back: Pick any three key terms from this module and write a two-sentence field explanation of each, as if training a first-week apprentice. No textbook language — your own words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Choose terms you could not define yesterday — teaching the ones you already know builds nothing. Step 2: For each term, sentence one gives the plain definition (compare it with the key-terms list only after writing). Step 3: Sentence two gives a job moment where the term matters. Your three terms will differ; the two-sentence discipline is the point.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Error hunt: A study partner writes: \"The journeyman exam is 100 questions at 70%, 14 AWG can go on a 20-amp breaker, GFCIs trip at 30 milliamps, and receptacles in a dwelling can be 15 feet apart.\" Correct every error in that statement.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The journeyman exam is 80 questions at 75% (60 correct). Step 2: 240.4(D) caps 14 AWG copper at 15 amps — 12 AWG is the minimum for a 20-amp circuit. Step 3: A GFCI trips at about 5 milliamperes, not 30. Step 4: 210.52(A)(1) allows no more than 12 feet between receptacles (6 feet from any point).</p>"
    }
  ],
  "quiz": [
    {
      "module": 2,
      "q": "A 240-volt circuit supplies a 3,600-watt load. What is the current?",
      "choices": [
        "12 amps",
        "15 amps",
        "10 amps",
        "30 amps"
      ],
      "answer": 1,
      "explanation": "Correct: (b). I = P / V = 3,600 / 240 = 15 amps. (a) is wrong: \"12 amps\" — 12 amps would be 2,880 watts at 240 volts. (c) is wrong: \"10 amps\" — 10 amps would be 2,400 watts at 240 volts. (d) is wrong: \"30 amps\" — 30 amps would be 7,200 watts at 240 volts."
    },
    {
      "module": 2,
      "q": "What is the ampacity of 8 AWG copper THHN in the 75°C column of Table 310.16?",
      "choices": [
        "40 amps",
        "55 amps",
        "50 amps",
        "30 amps"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Table 310.16 gives 8 AWG copper 50 amps in the 75°C column (40 amps at 60°C, 55 amps at 90°C). (a) is wrong: \"40 amps\" — 40 amps is the 60°C column value, not the 75°C column. (b) is wrong: \"55 amps\" — 55 amps is the 90°C column value, not the 75°C column. (d) is wrong: \"30 amps\" — 30 amps is the 10 AWG 60°C value."
    },
    {
      "module": 2,
      "q": "Under 240.4(D), what is the maximum overcurrent protection for 12 AWG copper?",
      "choices": [
        "15 amps",
        "25 amps",
        "20 amps",
        "30 amps"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 240.4(D) caps 12 AWG copper at 20 amps, regardless of its Table 310.16 ampacity. (a) is wrong: \"15 amps\" — 15 amps is the 14 AWG limit. (b) is wrong: \"25 amps\" — 25 amps exceeds the 240.4(D) limit for 12 AWG. (d) is wrong: \"30 amps\" — 30 amps is the 10 AWG limit."
    },
    {
      "module": 2,
      "q": "Seven current-carrying conductors share a raceway. What is the Table 310.15(C)(1) derating factor?",
      "choices": [
        "80%",
        "50%",
        "70%",
        "45%"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Table 310.15(C)(1) gives 70% for 7–9 current-carrying conductors. (a) is wrong: \"80%\" — 80% applies to 4–6 conductors. (b) is wrong: \"50%\" — 50% applies to 10–20 conductors. (d) is wrong: \"45%\" — 45% applies to 21–30 conductors."
    },
    {
      "module": 2,
      "q": "A GFCI trips at about what ground-fault current?",
      "choices": [
        "30 milliamperes",
        "5 milliamperes",
        "100 milliamperes",
        "1 ampere"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A GFCI trips at about 5 milliamperes of ground-fault current, protecting people from shock. (a) is wrong: \"30 milliamperes\" — 30 milliamperes is the trip level for equipment ground-fault protection, not a personnel GFCI. (c) is wrong: \"100 milliamperes\" — 100 milliamperes is far above a GFCI's trip level. (d) is wrong: \"1 ampere\" — 1 ampere is far above a GFCI's trip level."
    },
    {
      "module": 2,
      "q": "Which of these dwelling rooms requires AFCI protection under 210.12?",
      "choices": [
        "A bathroom only",
        "A garage only",
        "A bedroom",
        "An unfinished basement only"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 210.12 requires AFCI protection for branch circuits in dwelling bedrooms (and kitchens, family rooms, living rooms, and similar rooms). (a) is wrong: \"A bathroom only\" — Bathrooms require GFCI, but 210.12's AFCI list does not include bathrooms. (b) is wrong: \"A garage only\" — Garages require GFCI, but 210.12's AFCI list does not include garages. (d) is wrong: \"An unfinished basement only\" — Unfinished basements require GFCI, but 210.12's AFCI list does not include them."
    },
    {
      "module": 2,
      "q": "A dwelling wall is 10 feet long with no openings. What is the minimum number of receptacles 210.52(A)(1) requires on it?",
      "choices": [
        "One",
        "Two",
        "Three",
        "None — walls under 12 feet need none"
      ],
      "answer": 0,
      "explanation": "Correct: (a). No point may be more than 6 feet from a receptacle, so one receptacle placed within 6 feet of each end covers a 10-foot wall. (b) is wrong: \"Two\" — Two receptacles would also satisfy the rule, but one is the minimum on a 10-foot wall. (c) is wrong: \"Three\" — Three is more than the minimum. (d) is wrong: \"None — walls under 12 feet need none\" — Every wall space 2 feet or wider needs receptacle coverage; a 10-foot wall needs one."
    },
    {
      "module": 2,
      "q": "What is the total resistance of two 12-ohm resistors in parallel?",
      "choices": [
        "24 ohms",
        "12 ohms",
        "6 ohms",
        "144 ohms"
      ],
      "answer": 2,
      "explanation": "Correct: (c). In parallel, 1/R = 1/12 + 1/12 = 2/12, so R = 6 ohms — always less than the smallest branch. (a) is wrong: \"24 ohms\" — 24 ohms is the series total, not the parallel total. (b) is wrong: \"12 ohms\" — 12 ohms is one branch alone; the parallel total is lower. (d) is wrong: \"144 ohms\" — 144 ohms is 12 × 12, which is not the parallel formula."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Michigan Journeyman Review I: Code & Theory: Quick Reference</h3><p><strong>Focus:</strong> The Exam: 80 Questions, 150 Minutes, 75% to Pass — the review ground for this module's exam questions.</p><p><strong>Must-know objectives:</strong> State the Michigan journeyman exam format: 80 questions, 150 minutes, 75% to pass, open-book on the 2023 NEC plus Michigan Part 8 amendments.; Apply Ohm's law and the power law to series and parallel circuits, including voltage drop.; Size conductors with Table 310.16 and apply the 240.4(D) small-conductor limits and derating..</p><p><strong>Anchor numbers (verified for this course):</strong> All code values in this module are from the 2023 NEC plus Michigan Part 8 amendments as adopted March 12, 2024. Michigan journeyman: 80 questions, 150 minutes, 75% to pass. Michigan master: 76 questions, 180 minutes, 75% to pass. NCCER module tests pass at 70%; journey-level assessments at 75%. NABCEP PV Associate passes at a scaled score of 65 on a 0–99 scale — never 65%.</p><p><strong>Terms to flash-review:</strong> Journeyman exam, Ohm's law, Power law, Voltage drop, Table 310.16, 240.4(D), Derating, GFCI</p>\n"
};
