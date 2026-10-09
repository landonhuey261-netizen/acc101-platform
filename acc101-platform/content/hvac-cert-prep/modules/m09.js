// HVAC/R Certification Prep — original practice content. Practice exams use original questions in the real exams' style/format.
module.exports = {
  "number": 9,
  "slug": "nate-core-electrical",
  "title": "NATE Core III — Basic Electrical",
  "estTime": "4–5 hours",
  "objectives": [
    "Use Ohm's law (E = I × R) and the power formula (P = E × I) fluently in both directions.",
    "Explain series and parallel circuit rules for voltage, current, and resistance.",
    "Describe what capacitors do in motor circuits and how run and start capacitors differ.",
    "Identify contactors, relays, transformers, and overloads by function in a control circuit.",
    "Measure voltage, resistance, and current safely, including why resistance is measured on a de-energized circuit.",
    "Work electrical word problems under exam pacing without dropping units or misreading the question."
  ],
  "sections": [
    {
      "heading": "Ohm's Law: the Whole Block in One Triangle",
      "html": "<p>Basic Electrical is the <strong>largest single block of the NATE Core exam</strong>, and its foundation is one relationship: <strong>E = I × R</strong> — voltage equals current times resistance. Cover the unknown and the triangle tells you the operation: <strong>I = E ÷ R</strong>, <strong>R = E ÷ I</strong>. Add the power formula <strong>P = E × I</strong> and most Core electrical arithmetic is covered.</p><div class=\"formula\">E = I × R &nbsp;|&nbsp; I = E ÷ R &nbsp;|&nbsp; R = E ÷ I &nbsp;|&nbsp; P = E × I</div><p>Work two anchors until they are reflexes. A 24-volt control circuit with a contactor coil measuring 12 ohms draws I = 24 ÷ 12 = <strong>2 amps</strong>. A heater drawing 10 amps at 240 volts consumes P = 240 × 10 = <strong>2,400 watts</strong>. Exam stems change the costume — gas valve coils, blower motors, crankcase heaters — but the triangle underneath never changes. Write the formula before you touch the numbers, every time, and unit errors disappear.</p> Watch for absolute words in wrong choices such as always, never, any, and none — certification stems are usually testing a specific condition, not a sweeping claim. When two choices look close, compare them word by word: the difference is usually the exact detail the blueprint wants you to know, such as who may buy refrigerant, how long a record is kept, or which pressure family the appliance belongs to. Connect every fact in this section to a job you have already studied in the program — a recovery on a window unit, a leak repair on a split system, or a chiller running under vacuum — because anchored facts are far easier to recall under time pressure."
    },
    {
      "heading": "Series and Parallel: Two Rule Sets",
      "html": "<p><strong>Series</strong> circuits give current one path: current is the <strong>same everywhere</strong>, resistances <strong>add</strong>, and the supply voltage <strong>divides</strong> across the loads in proportion to their resistance. Two 10-ohm loads in series across 24 volts total 20 ohms, draw 24 ÷ 20 = 1.2 amps, and drop 12 volts each. An open anywhere in series kills the whole string — which is why safety switches are wired in series with the control they protect.</p><p><strong>Parallel</strong> circuits give current many paths: voltage is the <strong>same across every branch</strong>, branch currents <strong>add</strong>, and total resistance is <strong>less than the smallest branch</strong>. Two 10-ohm branches in parallel present 5 ohms total. A short in one parallel branch draws huge current and trips protection while other branches sit at full voltage. Stems describe a behavior — one load dead, everything dead; everything dim; breaker tripping — and ask you to name the topology or the fault. Map the story to the rule set before calculating anything.</p> When two choices look close, compare them word by word: the difference is usually the exact detail the blueprint wants you to know, such as who may buy refrigerant, how long a record is kept, or which pressure family the appliance belongs to. Connect every fact in this section to a job you have already studied in the program — a recovery on a window unit, a leak repair on a split system, or a chiller running under vacuum — because anchored facts are far easier to recall under time pressure."
    },
    {
      "heading": "Capacitors, Contactors, and the Control Circuit Cast",
      "html": "<p>Motors need help starting and running efficiently, and capacitors provide it. A <strong>start capacitor</strong> delivers a large capacitance boost for starting torque and is switched <strong>out</strong> of the circuit once the motor reaches speed. A <strong>run capacitor</strong> stays <strong>in</strong> the circuit the whole run, is rated in <strong>microfarads (MFD)</strong>, and is commonly tested with a meter's capacitance function — after the circuit is de-energized and the capacitor is safely discharged, because a capacitor can hold a charge with the power off.</p><p>Around them works the control cast: the <strong>transformer</strong> makes 24-volt control power from line voltage; the thermostat calls; the <strong>contactor</strong> coil energizes and its heavy contacts close to start the compressor and outdoor fan; <strong>overloads</strong> stand guard, opening the circuit if current or temperature runs away. Core questions identify these parts by function — \"which device switches the compressor load under control-voltage command?\" — and the answer is the contactor, not the transformer that feeds its coil.</p> Connect every fact in this section to a job you have already studied in the program — a recovery on a window unit, a leak repair on a split system, or a chiller running under vacuum — because anchored facts are far easier to recall under time pressure. Read that rule the way an examiner writes it: the stem gives you a condition, and only one choice keeps every part of that condition true at the same time."
    },
    {
      "heading": "Measuring Electricity Safely and Correctly",
      "html": "<p>Meter technique is scored knowledge. <strong>Voltage</strong> is measured in parallel, across the component or source, on a live circuit, with leads rated for the job. <strong>Resistance and continuity</strong> are measured on a <strong>de-energized, isolated</strong> component — power on the circuit during an ohms test corrupts the reading and can destroy the meter. <strong>Current</strong> is measured with a clamp around <strong>one conductor</strong>; clamping both conductors of a pair cancels the fields and reads near zero, a classic trap stem.</p><p>Voltage-drop thinking ties it together: full control voltage measured across an <em>open</em> switch is expected; full voltage across a switch that is supposed to be <em>closed</em> proves the contacts are not actually making — the switch is the voltage drop, and current cannot flow through it. That single idea answers a family of troubleshooting stems across the Core exam and the service truck alike.</p> Read that rule the way an examiner writes it: the stem gives you a condition, and only one choice keeps every part of that condition true at the same time. In the field the same idea shows up as a habit — pause, identify the system type and refrigerant, check the rule that applies to that type, and only then act. A useful study move is to say the reason out loud in one sentence before you look at the choices; if your sentence matches a choice, that choice is very likely the key. Watch for absolute words in wrong choices such as always, never, any, and none — certification stems are usually testing a specific condition, not a sweeping claim."
    },
    {
      "heading": "How to Work Electrical Stems Under Time Pressure",
      "html": "<p>Electrical word problems fail students on reading, not math. Use a fixed routine. <strong>Circle what is asked</strong> — amps, ohms, watts, or a device name. <strong>List the givens with units.</strong> <strong>Write the formula</strong> from the triangle. <strong>Compute once, carefully</strong>, keeping track of decimals — 24 ÷ 12 and 24 ÷ 1.2 are different universes. Then <strong>sanity-check</strong>: control circuits draw small currents; a 24-volt coil answer of 200 amps announces its own error.</p><p>For device-identification stems, translate the story into function language before reading choices: something must <em>step voltage down</em> (transformer), <em>switch a heavy load</em> (contactor), <em>protect against excess current</em> (overload or fuse). The exam repeats a small cast of devices under many costumes; the technician who thinks in functions recognizes every one of them.</p> In the field the same idea shows up as a habit — pause, identify the system type and refrigerant, check the rule that applies to that type, and only then act. A useful study move is to say the reason out loud in one sentence before you look at the choices; if your sentence matches a choice, that choice is very likely the key. Watch for absolute words in wrong choices such as always, never, any, and none — certification stems are usually testing a specific condition, not a sweeping claim. When two choices look close, compare them word by word: the difference is usually the exact detail the blueprint wants you to know, such as who may buy refrigerant, how long a record is kept, or which pressure family the appliance belongs to."
    }
  ],
  "keyTerms": [
    {
      "term": "Voltage (E)",
      "def": "Electrical pressure, measured in volts, that pushes current through a circuit."
    },
    {
      "term": "Current (I)",
      "def": "Electrical flow, measured in amperes (amps)."
    },
    {
      "term": "Resistance (R)",
      "def": "Opposition to current flow, measured in ohms."
    },
    {
      "term": "Ohm's law",
      "def": "E = I × R, and its rearrangements I = E ÷ R and R = E ÷ I."
    },
    {
      "term": "Power (watts)",
      "def": "P = E × I: the rate of electrical work, used for loads and heat."
    },
    {
      "term": "Series circuit",
      "def": "A single path for current; resistances add, current is the same everywhere, voltage divides."
    },
    {
      "term": "Parallel circuit",
      "def": "Multiple paths; voltage is the same across each branch, currents add, total resistance is less than the smallest branch."
    },
    {
      "term": "Contactor",
      "def": "A heavy-duty relay that switches compressor and fan loads, operated by a control-voltage coil."
    },
    {
      "term": "Relay",
      "def": "An electrically operated switch: a coil that, when energized, moves contacts."
    },
    {
      "term": "Transformer",
      "def": "A device that changes AC voltage levels — in HVAC, typically stepping 240 V down to 24 V control voltage."
    },
    {
      "term": "Run capacitor",
      "def": "A capacitor that stays in the circuit while a motor runs, improving efficiency and torque, rated in microfarads (MFD)."
    },
    {
      "term": "Start capacitor",
      "def": "A high-capacitance device that boosts starting torque and is removed from the circuit once the motor is up to speed."
    },
    {
      "term": "Microfarads (MFD)",
      "def": "The unit of capacitance used to rate HVAC capacitors."
    },
    {
      "term": "Overload",
      "def": "A protective device that opens the circuit when a motor draws excessive current or overheats."
    },
    {
      "term": "Continuity",
      "def": "An unbroken electrical path, checked with an ohmmeter on a de-energized circuit."
    },
    {
      "term": "Short circuit",
      "def": "An unintended low-resistance path that causes very high current and trips protection."
    },
    {
      "term": "Open circuit",
      "def": "A broken path through which no current flows."
    },
    {
      "term": "Multimeter",
      "def": "An instrument measuring voltage, resistance, and often capacitance and current."
    }
  ],
  "video": {
    "title": "HVAC: How To Check a DUAL CAPACITOR With A Multimeter (HVAC Training - Dual Run Capacitor)",
    "embedUrl": "https://www.youtube.com/embed/m2wHS4uJUfU",
    "note": "Shows a dual run capacitor being tested with a multimeter, including reading the microfarad values. Pair it with this module's safety rule: prove the circuit dead and discharge a capacitor safely before handling it, because a capacitor can hold a charge after power is off.",
    "more": [
      {
        "title": "HVAC Training Basics for New Techs: Gauges, Pressures, Temps, Check the Charge!",
        "url": "https://www.youtube.com/watch?v=NOWQsrjm4AY"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, distinguish <em>Voltage (E)</em> from <em>Current (I)</em>, using the definitions in this module's key terms. Give one field or exam example of each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: State each definition plainly. <em>Voltage (E)</em>: Electrical pressure, measured in volts, that pushes current through a circuit. <em>Current (I)</em>: Electrical flow, measured in amperes (amps). Step 2: Name the difference in one sentence — the two terms differ in who or what they apply to, or in the level of processing, authority, or measurement involved. Step 3: Attach an example to each from the module (a job situation for one, an exam stem for the other). If your examples could be swapped without changing their truth, your distinction is not sharp enough yet — rewrite until they cannot.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Objective check: \"Use Ohm's law (E = I × R) and the power formula (P = E × I) fluently in both directions.\" Write a three-sentence exam-ready explanation of this objective, including every number or named rule it contains.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Restate the objective as a claim. Step 2: Support it with the module's verified facts — use only numbers taught in this course (for example: EPA sections are 25 questions at 70% = 18 of 25; records are kept 3 years; covered comfort-cooling leaks over 50 lb are repaired within 30 days; NATE Core is 50 questions in 1.5 hours at 70%; 1 ton = 12,000 BTU/hr). Step 3: Close with why it matters on a job. A complete answer names the fact, the number, and the consequence — two of the three earns partial credit in your own grading, so practice all three.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Scenario: You are on a job that turns on this module's focus — the largest NATE Core block: Ohm's law, circuits, motors, capacitors, and safe electrical measurement. A coworker suggests the fastest available shortcut. Write the correct professional action and the rule behind it.</p>",
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
      "q": "A 24-volt coil measures 12 ohms. It draws:",
      "choices": [
        "0.5 amps",
        "2 amps",
        "12 amps",
        "288 amps"
      ],
      "answer": 1,
      "explanation": "Correct: (b). I = E ÷ R = 24 ÷ 12 = 2 amps. (a) is wrong: \"0.5 amps\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"12 amps\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"288 amps\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "q": "A heater draws 10 amps at 240 volts. Its power is:",
      "choices": [
        "24 watts",
        "240 watts",
        "2,400 watts",
        "24,000 watts"
      ],
      "answer": 2,
      "explanation": "Correct: (c). P = E × I = 240 × 10 = 2,400 watts. (a) is wrong: \"24 watts\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (b) is wrong: \"240 watts\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"24,000 watts\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "q": "In a series circuit, current is:",
      "choices": [
        "Different in every load",
        "The same everywhere in the circuit",
        "Zero at the last load",
        "Doubled at each resistor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Series circuits have a single path, so the same current flows through every element. (a) is wrong: \"Different in every load\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"Zero at the last load\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"Doubled at each resistor\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "q": "Two 10-ohm resistors in parallel present a total resistance of:",
      "choices": [
        "20 ohms",
        "10 ohms",
        "5 ohms",
        "0 ohms"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Equal parallel resistors: 10 ÷ 2 = 5 ohms — parallel totals are always less than the smallest branch. (a) is wrong: \"20 ohms\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (b) is wrong: \"10 ohms\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"0 ohms\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "q": "Resistance must be measured:",
      "choices": [
        "On a live circuit for accuracy",
        "On a de-energized, isolated component",
        "With the clamp meter",
        "Only at the factory"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Ohms measurements require a dead, isolated component; live voltage corrupts the reading and can damage the meter. (a) is wrong: \"On a live circuit for accuracy\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"With the clamp meter\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"Only at the factory\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "q": "The device that steps 240 V down to 24 V control voltage is a:",
      "choices": [
        "Contactor",
        "Transformer",
        "Capacitor",
        "Overload"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Transformers change AC voltage levels; HVAC control transformers produce the 24 V control supply. (a) is wrong: \"Contactor\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"Capacitor\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"Overload\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "q": "A run capacitor is rated in:",
      "choices": [
        "Ohms",
        "Microfarads (MFD)",
        "Microns",
        "BTU"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Capacitance for HVAC capacitors is rated in microfarads. (a) is wrong: \"Ohms\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"Microns\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"BTU\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "q": "Before handling a capacitor, the technician must remember that it:",
      "choices": [
        "Is always discharged when power is off",
        "Can hold a charge after power is off and must be discharged safely",
        "Cannot store energy",
        "Only matters in heating mode"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Capacitors store charge; treat every capacitor as charged until it is safely discharged and verified. (a) is wrong: \"Is always discharged when power is off\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"Cannot store energy\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"Only matters in heating mode\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — NATE Core III — Basic Electrical: Quick Reference</h3><p><strong>Focus:</strong> the largest NATE Core block: Ohm's law, circuits, motors, capacitors, and safe electrical measurement.</p><p><strong>Must-know objectives:</strong> Use Ohm's law (E = I × R) and the power formula (P = E × I) fluently in both directions; Explain series and parallel circuit rules for voltage, current, and resistance; Describe what capacitors do in motor circuits and how run and start capacitors differ.</p><p><strong>Anchor numbers (verified for this course):</strong> EPA 608 — 25 questions/section, 70% = 18 of 25, Core required with every Type, Universal = Core + I + II + III, never expires, records 3 years, covered comfort-cooling leaks (&gt;50 lb) repaired within 30 days with follow-up verification. NATE Core — 50 questions, 1.5 hours, 70% (35 of 50), Basic Electrical largest block; Core + specialty (100 Q, 70%) certifies; renewal every 2 years with continuing education. Ready-to-Work — 50 questions, 1.5 hours, online/unproctored; 70% here is a practice benchmark only. HVAC Excellence — passing scores are NOT published; never state one.</p><p><strong>Formulas:</strong> Superheat = suction line temp − saturation temp. Subcooling = saturation temp − liquid line temp. E = I × R. P = E × I. 1 ton = 12,000 BTU/hr. P/T anchors: R-410A 40°F≈118 psig, 100°F≈317 psig; R-22 40°F≈68.5 psig, 100°F≈196 psig; R-134a 40°F≈35 psig, 100°F≈124 psig; R-404A 40°F≈62 psig.</p><p><strong>Terms to flash-review:</strong> Voltage (E), Current (I), Resistance (R), Ohm's law, Power (watts), Series circuit, Parallel circuit, Contactor.</p>\n"
};
