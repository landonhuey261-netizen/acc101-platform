// ele102 - Module 8: Meters: Measuring Voltage, Current & Resistance
module.exports = {
  "number": 8,
  "slug": "meters-measuring-voltage-current-resistance",
  "title": "Meters: Measuring Voltage, Current & Resistance",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how to measure voltage with a multimeter, including range and lead placement.",
    "Explain how to measure current with a multimeter and with a clamp meter.",
    "Explain how to measure resistance and continuity, and why the circuit must be de-energized.",
    "Describe the live-dead-live verification procedure for absence of voltage.",
    "Explain meter accuracy, resolution, and CAT ratings."
  ],
  "sections": [
    {
      "heading": "Measuring Voltage",
      "html": "<p>Voltage is measured across a circuit — the meter's leads go in parallel with the component or the points being measured. The meter is set to AC or DC voltage, to a range above the expected value (or to auto-range), and the leads are plugged into the voltage jacks. The red lead goes to the higher-potential point and the black lead to the lower-potential point; if they are reversed on a DC measurement, the meter shows a negative reading, which is correct in magnitude and simply tells you the leads are swapped.</p>\n<p>The meter's input resistance matters: a voltmeter has a very high input resistance, usually 10 megohms, so it draws almost no current and does not disturb the circuit it is measuring. A low-impedance meter, or a meter on the wrong setting, can load a circuit and give a wrong reading — which is why the setting is checked before the measurement, every time.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Voltage is measured across, current is measured through, resistance is measured on a dead circuit. Mix up the three and the meter — or the circuit — pays for it.</div>"
    },
    {
      "heading": "Measuring Current",
      "html": "<p>Current is measured through a circuit — the meter goes in series with the component, so the current flows through the meter. With a multimeter, the circuit is opened, the meter is connected in series, the red lead is moved to the current jack, and the meter is set to the current range. The current jack is fused, and the fuse is rated for the meter's maximum current — measuring a current above that rating blows the fuse, and measuring a large current on a small range can damage the meter.</p>\n<p>The clamp meter is the safer and more common way to measure current in the field: its jaws close around a single conductor and read the magnetic field, without breaking the circuit. Clamp one conductor only — clamping a whole cable reads near zero, because the hot and neutral currents cancel. Clamp meters are also used to check for unbalanced current, such as a ground fault, by clamping around all the conductors of a circuit together: a healthy circuit reads near zero, and a reading means current is leaking to ground.</p>"
    },
    {
      "heading": "Measuring Resistance & Continuity",
      "html": "<p>Resistance and continuity are measured on a de-energized circuit. The meter is set to ohms or continuity, the leads are placed across the component, and the meter applies its own small voltage to make the measurement. Measuring resistance on a live circuit gives a wrong reading and can damage the meter, because the circuit's own voltage fights the meter's test voltage. The circuit is de-energized, locked out and tagged out, and verified dead before any resistance measurement — and the component is isolated from the rest of the circuit if the rest of the circuit would give a parallel path and a false reading.</p>\n<p>Continuity is a yes-or-no resistance test: the meter beeps when the resistance is very low, meaning the path is complete, and stays silent when the path is open. It is the fastest way to check a fuse, a wire, a switch, or a connection. A fuse that does not beep is blown; a wire that does not beep is broken; a switch that does not beep when closed is faulty.</p>"
    },
    {
      "heading": "Accuracy, Resolution & CAT Ratings",
      "html": "<p>A meter's <strong>accuracy</strong> is how close its reading is to the true value, usually given as a percentage plus a number of counts — for example, ±0.5% + 2 counts. <strong>Resolution</strong> is the smallest change the meter can show, set by the number of digits on its display. A reading of 120.3 volts on a meter with ±0.5% accuracy could be off by about 0.6 volts, which is fine for field work but not for calibration. The habit is to know the meter's accuracy and to treat the last digit as approximate.</p>\n<p><strong>CAT ratings</strong> describe the transient overvoltage a meter can survive: CAT II is for plug-in equipment, CAT III is for distribution panels and fixed equipment, and CAT IV is for the service and the utility connection. The meter and its leads must be rated for the location where they are used. A CAT II meter on a CAT III panel is a hazard, and the rating is printed on the meter for a reason.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Voltage is measured across (in parallel); current is measured through (in series); resistance and continuity are measured on a de-energized circuit.</li>\n<li>Move the red lead to the current jack for current, and back to the voltage jack for voltage.</li>\n<li>A clamp meter measures current around a single conductor without breaking the circuit.</li>\n<li>Continuity is a beep test for a complete path: fuse, wire, switch, connection.</li>\n<li>Verify absence of voltage with live-dead-live; use a meter rated for the location (CAT III/IV at panels and services).</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Measuring resistance on a live circuit. The meter's test voltage fights the circuit voltage — the reading is wrong and the meter can be damaged.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Leaving the red lead in the current jack and then measuring voltage. The current jack is a near-short across the circuit and can blow the meter's fuse or damage the meter.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain how to measure voltage, current, and resistance, and state the live-dead-live and CAT rules, you have this module. Module 9 covers wire resistance and voltage drop.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Voltmeter",
      "def": "A meter that measures voltage across a circuit; a multimeter set to voltage."
    },
    {
      "term": "Ammeter",
      "def": "A meter that measures current through a circuit; a multimeter set to current, in series."
    },
    {
      "term": "Ohmmeter",
      "def": "A meter that measures resistance; a multimeter set to ohms, on a de-energized circuit."
    },
    {
      "term": "Clamp meter",
      "def": "A meter that measures current by clamping around a single conductor."
    },
    {
      "term": "Continuity test",
      "def": "A beep test for a complete path; the meter sounds when resistance is very low."
    },
    {
      "term": "Live-dead-live",
      "def": "Verifying a meter on a known live source, testing the equipment, then verifying the meter again."
    },
    {
      "term": "Input resistance",
      "def": "A voltmeter's internal resistance, usually 10 megohms; high so it does not disturb the circuit."
    },
    {
      "term": "Accuracy",
      "def": "How close a meter's reading is to the true value, given as a percentage plus counts."
    },
    {
      "term": "Resolution",
      "def": "The smallest change a meter can display, set by the number of digits."
    },
    {
      "term": "CAT rating",
      "def": "A meter's category rating (CAT II, III, IV) for the transient overvoltage it can survive."
    },
    {
      "term": "Current jack",
      "def": "The meter jack used only for current measurements; a near-short across the circuit."
    },
    {
      "term": "Auto-range",
      "def": "A meter that picks its own measurement range automatically."
    },
    {
      "term": "Fuse",
      "def": "The protective device inside a meter's current circuit, rated for the meter's maximum current."
    },
    {
      "term": "Ground fault",
      "def": "Current leaking to ground; detected by clamping around all conductors of a circuit together."
    },
    {
      "term": "Parallel path",
      "def": "An alternate route through a circuit that can give a false resistance reading."
    }
  ],
  "video": {
    "title": "How to Use a Multimeter for Beginners - How to Measure Voltage, Resistance, Cont",
    "embedUrl": "https://www.youtube.com/embed/TdUK6RPdIrA",
    "note": "A multimeter measurement walkthrough. As you watch, note the lead placement for each measurement and when the red lead moves jacks.",
    "more": [
      {
        "title": "How to Measure Current with a Multimeter",
        "url": "https://www.youtube.com/watch?v=fvofeRNyHCA"
      },
      {
        "title": "Measuring Resistance with a Multimeter",
        "url": "https://www.youtube.com/watch?v=mEIjZzTWrlM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> How is voltage measured with a multimeter, and where do the leads go?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Set the meter to voltage (AC or DC) and a range above the expected value. Step 2: Place the leads across the component or points being measured — in parallel. Step 3: Red lead to the higher-potential point, black to the lower; a negative DC reading means the leads are swapped.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> How is current measured with a multimeter, and what must change on the meter first?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Move the red lead to the current jack and set the meter to current. Step 2: Open the circuit and connect the meter in series, so the current flows through it. Step 3: The current jack is fused — never exceed the meter's maximum current rating.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Why must resistance be measured on a de-energized circuit?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The meter applies its own small voltage to make the measurement. Step 2: A live circuit's voltage fights the meter's test voltage. Step 3: The reading is wrong and the meter can be damaged — so the circuit is de-energized, locked out, and verified dead first.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A fuse does not beep on a continuity test. What does that mean?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The continuity test beeps when the path is complete. Step 2: No beep means the path is open. Step 3: The fuse is blown and must be replaced.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> You clamp a clamp meter around a whole two-wire cable and it reads near zero. What does that mean, and what should you do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The hot and neutral currents cancel each other out when both are inside the jaws. Step 2: The reading does not mean the circuit is off. Step 3: Clamp around a single conductor only to get a real current reading.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A meter reads 120.3 volts and its accuracy is ±0.5%. About how far off could the true voltage be?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 0.5% of 120.3 is about 0.6 volts. Step 2: The true voltage could be about 119.7 to 120.9 volts. Step 3: That is fine for field work, and the last digit is approximate.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Voltage is measured:",
      "choices": [
        "In series with the circuit",
        "Across the circuit, in parallel",
        "Only on the ground wire",
        "On a dead circuit only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Voltage is measured across the circuit. (a) Current is measured in series. (c) Ground alone does not give the circuit voltage. (d) Voltage is measured on live circuits."
    },
    {
      "q": "Current is measured with a multimeter by:",
      "choices": [
        "Placing the leads across the circuit",
        "Opening the circuit and connecting the meter in series",
        "Holding the meter near the wire",
        "Measuring resistance"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Current flows through the meter, so the meter goes in series. (a) Across the circuit is a voltage measurement. (c) Holding the meter near the wire is a non-contact check, not a current measurement. (d) Resistance is a different measurement."
    },
    {
      "q": "Resistance must be measured on a de-energized circuit because:",
      "choices": [
        "The meter applies its own voltage to make the measurement",
        "Resistance does not exist in live circuits",
        "The meter cannot read ohms",
        "Continuity only exists when power is off"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The meter's own test voltage would conflict with circuit voltage. (b) Resistance exists in live circuits too. (c) Meters read ohms fine — on de-energized circuits. (d) Continuity is a property of the path, not of the power state."
    },
    {
      "q": "A continuity test that does not beep means:",
      "choices": [
        "The path is complete",
        "The path is open",
        "The meter is broken",
        "The voltage is too high"
      ],
      "answer": 1,
      "explanation": "Correct: (b). No beep means no complete path — an open. (a) A complete path beeps. (c) The meter may be fine; the path is open. (d) Voltage is not what a continuity test measures."
    },
    {
      "q": "A clamp meter must clamp around:",
      "choices": [
        "A whole cable",
        "A single conductor only",
        "Two conductors at once",
        "The panel cover"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Clamping one conductor reads its current; clamping a whole cable cancels the reading. (a) A whole cable reads near zero. (c) Two conductors cancel each other. (d) The panel cover carries no current."
    },
    {
      "q": "Before measuring current with a multimeter, you must:",
      "choices": [
        "Move the red lead to the current jack",
        "Remove the battery",
        "Set the meter to ohms",
        "Short the leads together"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The red lead goes in the current jack for current measurements. (b) The battery stays in. (c) Ohms is the resistance setting, not current. (d) Shorting the leads is not part of the setup."
    },
    {
      "q": "A meter used on a panelboard must be rated:",
      "choices": [
        "CAT II only",
        "CAT III or CAT IV, for that location",
        "Any rating, it does not matter",
        "CAT I only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Panelboards are CAT III/IV locations. (a) CAT II is for plug-in equipment only. (c) Rating matters. (d) CAT I is for electronics."
    },
    {
      "q": "Accuracy of ±0.5% on a 120-volt reading means the true voltage could be off by about:",
      "choices": [
        "0.06 volts",
        "0.6 volts",
        "6 volts",
        "60 volts"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 0.5% of 120 is 0.6 volts. (a) 0.06 volts is 0.05%. (c) 6 volts is 5%. (d) 60 volts is 50%."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Meters: Quick Reference</h3>\n<p><strong>Core idea:</strong> Voltage is measured across, current is measured through, resistance is measured on a dead circuit.</p>\n<p><strong>Voltage:</strong> Leads across (parallel) · Set AC or DC, range above expected · Negative DC reading means leads are swapped.</p>\n<p><strong>Current:</strong> Multimeter in series, red lead in the current jack · Clamp meter around a single conductor only.</p>\n<p><strong>Resistance & continuity:</strong> De-energized, locked out, verified dead · Continuity beeps on a complete path.</p>\n<p><strong>Ratings:</strong> Accuracy in % ± counts · CAT II (plug-in) · CAT III/IV (panels and services).</p>\n<p><strong>Self-check:</strong> Explain how to measure each quantity and the lead-jack rule, without looking.</p>\n"
};
