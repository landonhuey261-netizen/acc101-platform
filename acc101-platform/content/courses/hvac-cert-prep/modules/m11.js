// HVAC/R Certification Prep — original practice content. Practice exams use original questions in the real exams' style/format.
module.exports = {
  "number": 11,
  "slug": "timed-numbers-drill",
  "title": "Timed Numbers Drill",
  "estTime": "3–4 hours",
  "objectives": [
    "Read saturation temperature from pressure using the verified P/T anchors for R-410A, R-22, R-134a, and R-404A.",
    "Compute superheat as suction line temperature minus saturation temperature, with every step shown.",
    "Compute subcooling as saturation temperature minus liquid line temperature, with every step shown.",
    "Solve Ohm's law and power problems in under a minute each using the triangle method.",
    "Compute temperature splits, pressure conversions between psig thinking and absolute thinking, and simple capacity conversions.",
    "Build a personal drill routine: formula first, numbers second, sanity check last."
  ],
  "sections": [
    {
      "heading": "The P/T Anchors You Must Own",
      "html": "<p>Every number in this module hangs from a small set of verified pressure-temperature anchors. Burn them in: <strong>R-410A at 40°F ≈ 118 psig; at 100°F ≈ 317 psig. R-22 at 40°F ≈ 68.5 psig; at 45°F ≈ 76 psig; at 100°F ≈ 196 psig. R-134a at 40°F ≈ 35 psig; at 100°F ≈ 124 psig. R-404A at 40°F ≈ 62 psig (dew about 66).</strong> The anchors teach the shape of every P/T relationship: as temperature rises, pressure rises — steeply for high-pressure refrigerants like R-410A, gently for R-134a.</p><div class=\"formula\">Given a pressure, find the saturation temperature. Given a temperature, find the pressure. The chart pairs them — you never compute one from the other by formula.</div><p>In drills, state the refrigerant before the lookup. The same 118 psig means 40°F saturation for R-410A and something entirely different for R-22. Most P/T errors are refrigerant mix-ups, not chart errors.</p> Connect every fact in this section to a job you have already studied in the program — a recovery on a window unit, a leak repair on a split system, or a chiller running under vacuum — because anchored facts are far easier to recall under time pressure. Read that rule the way an examiner writes it: the stem gives you a condition, and only one choice keeps every part of that condition true at the same time. In the field the same idea shows up as a habit — pause, identify the system type and refrigerant, check the rule that applies to that type, and only then act. A useful study move is to say the reason out loud in one sentence before you look at the choices; if your sentence matches a choice, that choice is very likely the key."
    },
    {
      "heading": "Superheat: the Three-Step Drill",
      "html": "<p>Superheat is computed, never guessed, in three steps. <strong>Step 1:</strong> read suction pressure and convert it to saturation temperature on the P/T chart. <strong>Step 2:</strong> measure the suction line temperature at the same point. <strong>Step 3:</strong> subtract.</p><div class=\"formula\">Superheat = suction line temp − saturation temp</div><p>Drill example: an R-410A system shows a suction pressure of 118 psig, which the chart pairs with 40°F saturation. The suction line measures 52°F. Superheat = 52 − 40 = <strong>12°F</strong>. Another: R-22 at 68.5 psig saturates at 40°F; the line reads 50°F; superheat = <strong>10°F</strong>. Run these until the subtraction feels trivial — the exam's difficulty is doing it at minute 40 of a timed test with four similar numbers staring at you, one of which is the result of adding instead of subtracting.</p> Read that rule the way an examiner writes it: the stem gives you a condition, and only one choice keeps every part of that condition true at the same time. In the field the same idea shows up as a habit — pause, identify the system type and refrigerant, check the rule that applies to that type, and only then act. A useful study move is to say the reason out loud in one sentence before you look at the choices; if your sentence matches a choice, that choice is very likely the key. Watch for absolute words in wrong choices such as always, never, any, and none — certification stems are usually testing a specific condition, not a sweeping claim. When two choices look close, compare them word by word: the difference is usually the exact detail the blueprint wants you to know, such as who may buy refrigerant, how long a record is kept, or which pressure family the appliance belongs to."
    },
    {
      "heading": "Subcooling: the Mirror Drill",
      "html": "<p>Subcooling mirrors superheat on the liquid side. <strong>Step 1:</strong> read head (liquid) pressure and convert to condensing saturation temperature. <strong>Step 2:</strong> measure the liquid line temperature. <strong>Step 3:</strong> subtract — saturation minus liquid line, in that order.</p><div class=\"formula\">Subcooling = saturation temp − liquid line temp</div><p>Drill example: R-410A head pressure is 317 psig, which pairs with 100°F saturation. The liquid line measures 90°F. Subcooling = 100 − 90 = <strong>10°F</strong>. An R-134a example: 124 psig pairs with 100°F; liquid line at 92°F gives subcooling of <strong>8°F</strong>. Know which method belongs to which metering device while you drill: <strong>charge TXV systems by subcooling; charge fixed-orifice systems by superheat</strong> — the pairing itself is a favorite exam question hiding inside the math.</p> In the field the same idea shows up as a habit — pause, identify the system type and refrigerant, check the rule that applies to that type, and only then act. A useful study move is to say the reason out loud in one sentence before you look at the choices; if your sentence matches a choice, that choice is very likely the key. Watch for absolute words in wrong choices such as always, never, any, and none — certification stems are usually testing a specific condition, not a sweeping claim. When two choices look close, compare them word by word: the difference is usually the exact detail the blueprint wants you to know, such as who may buy refrigerant, how long a record is kept, or which pressure family the appliance belongs to."
    },
    {
      "heading": "Electrical Math at Speed",
      "html": "<p>The electrical drill is Ohm's law plus power, worked with the Module 9 routine: formula first, numbers second, sanity check last. Sprint set — cover the answers and work each in under a minute: (1) A 120-volt circuit with 10 ohms: I = 120 ÷ 10 = <strong>12 amps</strong>. (2) A motor drawing 8 amps through 15 ohms of circuit resistance: E = 8 × 15 = <strong>120 volts</strong>. (3) A 240-volt heater drawing 20 amps: P = 240 × 20 = <strong>4,800 watts</strong>. (4) A 24-volt coil at 0.5 amps: R = 24 ÷ 0.5 = <strong>48 ohms</strong>.</p><p>Notice the sanity checks doing quiet work: heater watts land in the thousands, control coils land in the tens of ohms, and any answer off by a factor of ten flags a decimal slip. In the real exam, wrong choices are built from exactly those slips — the added-instead-of-subtracted superheat, the inverted division. Your defense is the written formula on your scratch paper for every single problem, especially the easy ones.</p> A useful study move is to say the reason out loud in one sentence before you look at the choices; if your sentence matches a choice, that choice is very likely the key. Watch for absolute words in wrong choices such as always, never, any, and none — certification stems are usually testing a specific condition, not a sweeping claim. When two choices look close, compare them word by word: the difference is usually the exact detail the blueprint wants you to know, such as who may buy refrigerant, how long a record is kept, or which pressure family the appliance belongs to. Connect every fact in this section to a job you have already studied in the program — a recovery on a window unit, a leak repair on a split system, or a chiller running under vacuum — because anchored facts are far easier to recall under time pressure."
    },
    {
      "heading": "Splits, Vacuum, and Mixed Drills",
      "html": "<p>Finish the drill set with the supporting calculations. <strong>Temperature split:</strong> return 76°F, supply 57°F → split = <strong>19°F</strong> in cooling. <strong>Vacuum:</strong> evacuation is commonly taught to <strong>500 microns or below</strong>, verified by a standing decay test — if microns climb steadily after isolation, suspect a leak; if they rise and level off, suspect moisture boiling out. <strong>Capacity:</strong> a 2.5-ton system moves 2.5 × 12,000 = <strong>30,000 BTU/hr</strong>.</p><p>Then mix everything, because the exam will: one P/T lookup, one superheat, one subcooling, one Ohm's law, one split, shuffled. Your target is not brilliance — it is a calm, identical routine per problem that survives nerves. Formula, numbers, check. Formula, numbers, check. Speed arrives on its own once the routine stops changing.</p> Watch for absolute words in wrong choices such as always, never, any, and none — certification stems are usually testing a specific condition, not a sweeping claim. When two choices look close, compare them word by word: the difference is usually the exact detail the blueprint wants you to know, such as who may buy refrigerant, how long a record is kept, or which pressure family the appliance belongs to. Connect every fact in this section to a job you have already studied in the program — a recovery on a window unit, a leak repair on a split system, or a chiller running under vacuum — because anchored facts are far easier to recall under time pressure. Read that rule the way an examiner writes it: the stem gives you a condition, and only one choice keeps every part of that condition true at the same time."
    }
  ],
  "keyTerms": [
    {
      "term": "Saturation temperature",
      "def": "The temperature at which a refrigerant boils or condenses at a given pressure — read from the P/T chart."
    },
    {
      "term": "P/T chart",
      "def": "The pressure-temperature chart (or app) that pairs a refrigerant's pressure with its saturation temperature."
    },
    {
      "term": "Superheat",
      "def": "Suction line temperature minus saturation (evaporating) temperature: how much the vapor has been heated past boiling."
    },
    {
      "term": "Subcooling",
      "def": "Saturation (condensing) temperature minus liquid line temperature: how much the liquid has been cooled below condensing."
    },
    {
      "term": "psig",
      "def": "Pounds per square inch gauge — pressure measured relative to the atmosphere around the gauge."
    },
    {
      "term": "psia",
      "def": "Pounds per square inch absolute — pressure measured from a perfect vacuum; psia = psig + 14.7 at sea level."
    },
    {
      "term": "Target superheat",
      "def": "The superheat a fixed-orifice system should run under given conditions, used when charging by superheat."
    },
    {
      "term": "TXV system charging",
      "def": "Charging a thermostatic-expansion-valve system by subcooling, since the valve holds superheat roughly constant."
    },
    {
      "term": "Fixed-orifice charging",
      "def": "Charging a piston/orifice system by superheat, since subcooling varies with load on those systems."
    },
    {
      "term": "Micron",
      "def": "The unit of deep vacuum; evacuation targets are commonly taught as 500 microns or below with a standing decay test."
    },
    {
      "term": "Decay test",
      "def": "Isolating the vacuum pump and watching whether micron level rises, revealing leaks or moisture."
    },
    {
      "term": "Ohm's law drill",
      "def": "Rapid E = I × R calculations in all three rearrangements."
    },
    {
      "term": "Temperature split",
      "def": "Return minus supply temperature in cooling (or supply minus return in heating)."
    },
    {
      "term": "Rounding discipline",
      "def": "Rounding only at the final step so chained calculations stay accurate enough for exam choices."
    },
    {
      "term": "Blueprint",
      "def": "The published topic outline an exam is built from; the map for study and review."
    },
    {
      "term": "Distractor",
      "def": "A wrong choice designed to attract a specific misunderstanding; eliminating distractors is a scored skill."
    },
    {
      "term": "Stem",
      "def": "The question part of an exam item, which states the condition the correct choice must satisfy."
    },
    {
      "term": "Verification",
      "def": "Checking a result — a repair, a vacuum, a calculation — by an independent observation before trusting it."
    }
  ],
  "video": {
    "title": "Explaining Superheat and Subcooling to Your Apprentice!",
    "embedUrl": "https://www.youtube.com/embed/2SEDe0v8VPY",
    "note": "A plain-language explanation of superheat and subcooling aimed at teaching an apprentice. It is the ideal warm-up for this timed drill module: listen for the two formulas, then work the drill problems with a P/T chart open until the lookups feel automatic.",
    "more": [
      {
        "title": "HVAC Delta T Explained!",
        "url": "https://www.youtube.com/watch?v=9lDl5cfFSzs"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, distinguish <em>Saturation temperature</em> from <em>P/T chart</em>, using the definitions in this module's key terms. Give one field or exam example of each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: State each definition plainly. <em>Saturation temperature</em>: The temperature at which a refrigerant boils or condenses at a given pressure — read from the P/T chart. <em>P/T chart</em>: The pressure-temperature chart (or app) that pairs a refrigerant's pressure with its saturation temperature. Step 2: Name the difference in one sentence — the two terms differ in who or what they apply to, or in the level of processing, authority, or measurement involved. Step 3: Attach an example to each from the module (a job situation for one, an exam stem for the other). If your examples could be swapped without changing their truth, your distinction is not sharp enough yet — rewrite until they cannot.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Objective check: \"Read saturation temperature from pressure using the verified P/T anchors for R-410A, R-22, R-134a, and R-404A.\" Write a three-sentence exam-ready explanation of this objective, including every number or named rule it contains.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Restate the objective as a claim. Step 2: Support it with the module's verified facts — use only numbers taught in this course (for example: EPA sections are 25 questions at 70% = 18 of 25; records are kept 3 years; covered comfort-cooling leaks over 50 lb are repaired within 30 days; NATE Core is 50 questions in 1.5 hours at 70%; 1 ton = 12,000 BTU/hr). Step 3: Close with why it matters on a job. A complete answer names the fact, the number, and the consequence — two of the three earns partial credit in your own grading, so practice all three.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Scenario: You are on a job that turns on this module's focus — doing the trade's core math fast and accurately: P/T lookups, superheat, subcooling, and electrical calculations under time pressure. A coworker suggests the fastest available shortcut. Write the correct professional action and the rule behind it.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the shortcut for what it is — in this course's topics, shortcuts are venting instead of recovering, topping off instead of repairing, skipping the follow-up verification, measuring resistance on a live circuit, or guessing a number instead of computing it. Step 2: State the correct action from the module (recover first; repair and verify; de-energize and prove dead; write the formula and compute). Step 3: Cite the governing idea in one line. Full credit requires the action AND the rule — the exam's correct choices always contain both.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Numbers drill for this module. (a) EPA section: you answered 19 of 25 correctly — did you pass, and by how much? (b) NATE Core: you answered 33 of 50 — did you pass? (c) Convert a 3.5-ton system's capacity to BTU/hr.</p>",
      "solution": "<p><strong>Solution:</strong> (a) Step 1: Passing is 70% of 25 = 17.5, so at least 18 correct are required. Step 2: 19 &ge; 18 — <strong>pass, by one question</strong>. (b) Step 1: 70% of 50 = 35 required. Step 2: 33 &lt; 35 — <strong>not yet; two more correct answers were needed</strong>. (c) Step 1: 1 ton = 12,000 BTU/hr. Step 2: 3.5 × 12,000 = <strong>42,000 BTU/hr</strong>. These three conversions — EPA sections, NATE Core, tons to BTU — should be instant by exam day.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Teach-back: Pick any three key terms from this module and write a two-sentence field explanation of each, as if training a first-week apprentice. No textbook language — your own words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Choose terms you could not define yesterday — teaching the ones you already know builds nothing. Step 2: For each term, sentence one gives the plain definition (compare it with the key-terms list only after writing). Step 3: Sentence two gives a job moment where the term matters. Example pattern: \"A <em>follow-up verification test</em> is the check you run after a leak repair to prove it held. Skip it, and the first hot day reopens the leak — and the paperwork says you finished a repair you never proved.\" Your three terms will differ; the two-sentence discipline is the point.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Error hunt: A study partner writes: \"This course's practice exams certify me, exam fees are fixed everywhere, HVAC Excellence passes at 70%, and once I pass NATE Core I am fully NATE certified for life.\" Correct every error in that sentence.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Practice exams never certify — real certification comes only through approved testing providers/organizations. Step 2: Fees are set by each testing organization and change; this course states none. Step 3: HVAC Excellence does not publish its passing scores, so no percentage may be claimed for it. Step 4: NATE Core alone is not certification — Core plus a specialty exam certifies — and NATE certification renews on a 2-year cycle with continuing education; it is EPA 608 that never expires. Four errors, four corrections.</p>"
    }
  ],
  "quiz": [
    {
      "q": "R-410A suction pressure is 118 psig (saturation 40°F) and the suction line is 52°F. Superheat is:",
      "choices": [
        "170°F",
        "12°F",
        "40°F",
        "66°F"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Superheat = line temp − saturation temp = 52 − 40 = 12°F. (a) is wrong: \"170°F\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"40°F\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"66°F\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "q": "R-410A head pressure is 317 psig (saturation 100°F) and the liquid line is 90°F. Subcooling is:",
      "choices": [
        "10°F",
        "100°F",
        "227°F",
        "0°F"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Subcooling = saturation temp − liquid line temp = 100 − 90 = 10°F. (b) is wrong: \"100°F\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"227°F\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"0°F\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "q": "R-22 at 40°F saturation corresponds to about:",
      "choices": [
        "118 psig",
        "68.5 psig",
        "35 psig",
        "317 psig"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The R-22 anchor: 40°F ≈ 68.5 psig. (118 psig is R-410A at 40°F; 35 psig is R-134a at 40°F.) (a) is wrong: \"118 psig\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"35 psig\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"317 psig\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "q": "A TXV system is normally charged by:",
      "choices": [
        "Superheat",
        "Subcooling",
        "Weight of the technician",
        "Runtime minutes"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A TXV holds superheat roughly constant, so TXV systems are charged by subcooling. (a) is wrong: \"Superheat\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"Weight of the technician\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"Runtime minutes\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "q": "A fixed-orifice system is normally charged by:",
      "choices": [
        "Subcooling",
        "Superheat",
        "Head pressure alone",
        "Condenser size"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Fixed-orifice systems are charged by superheat because their subcooling varies with load. (a) is wrong: \"Subcooling\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"Head pressure alone\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"Condenser size\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "q": "A 120-volt load with 10 ohms of resistance draws:",
      "choices": [
        "1.2 amps",
        "12 amps",
        "120 amps",
        "0.12 amps"
      ],
      "answer": 1,
      "explanation": "Correct: (b). I = E ÷ R = 120 ÷ 10 = 12 amps. (a) is wrong: \"1.2 amps\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"120 amps\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"0.12 amps\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "q": "Evacuation is commonly taught to reach:",
      "choices": [
        "50,000 microns",
        "5,000 microns",
        "500 microns or below, verified with a decay test",
        "Atmospheric pressure"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Pull to 500 microns or below and verify with a standing (decay) test before charging. (a) is wrong: \"50,000 microns\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (b) is wrong: \"5,000 microns\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"Atmospheric pressure\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "q": "R-134a at 100°F saturation corresponds to about:",
      "choices": [
        "124 psig",
        "35 psig",
        "196 psig",
        "62 psig"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The R-134a anchor: 100°F ≈ 124 psig (35 psig is its 40°F value). (b) is wrong: \"35 psig\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"196 psig\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"62 psig\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Timed Numbers Drill: Quick Reference</h3><p><strong>Focus:</strong> doing the trade's core math fast and accurately: P/T lookups, superheat, subcooling, and electrical calculations under time pressure.</p><p><strong>Must-know objectives:</strong> Read saturation temperature from pressure using the verified P/T anchors for R-410A, R-22, R-134a, and R-404A; Compute superheat as suction line temperature minus saturation temperature, with every step shown; Compute subcooling as saturation temperature minus liquid line temperature, with every step shown.</p><p><strong>Anchor numbers (verified for this course):</strong> EPA 608 — 25 questions/section, 70% = 18 of 25, Core required with every Type, Universal = Core + I + II + III, never expires, records 3 years, covered comfort-cooling leaks (&gt;50 lb) repaired within 30 days with follow-up verification. NATE Core — 50 questions, 1.5 hours, 70% (35 of 50), Basic Electrical largest block; Core + specialty (100 Q, 70%) certifies; renewal every 2 years with continuing education. Ready-to-Work — 50 questions, 1.5 hours, online/unproctored; 70% here is a practice benchmark only. HVAC Excellence — passing scores are NOT published; never state one.</p><p><strong>Formulas:</strong> Superheat = suction line temp − saturation temp. Subcooling = saturation temp − liquid line temp. E = I × R. P = E × I. 1 ton = 12,000 BTU/hr. P/T anchors: R-410A 40°F≈118 psig, 100°F≈317 psig; R-22 40°F≈68.5 psig, 100°F≈196 psig; R-134a 40°F≈35 psig, 100°F≈124 psig; R-404A 40°F≈62 psig.</p><p><strong>Terms to flash-review:</strong> Saturation temperature, P/T chart, Superheat, Subcooling, psig, psia, Target superheat, TXV system charging.</p>\n"
};
