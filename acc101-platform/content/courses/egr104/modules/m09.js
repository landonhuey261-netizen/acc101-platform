// egr104 - Module 9: Meters & Measurement
module.exports = {
  "number": 9,
  "slug": "meters-and-measurement",
  "title": "Meters & Measurement",
  "estTime": "3–4 hours",
  "objectives": [
    "Name the three measurements a digital multimeter makes: voltage, current, and resistance.",
    "Explain how to connect a voltmeter (in parallel) and an ammeter (in series).",
    "Measure resistance and continuity only on a de-energised circuit.",
    "Read a meter display, pick the right range, and spot a reading that cannot be right.",
    "State the safe meter habits: check the meter on a known source first, use the right jacks, never measure current across a voltage source."
  ],
  "sections": [
    {
      "heading": "The Digital Multimeter: Three Meters in One",
      "html": "<p>A digital multimeter (DMM) is the electrician's most-used tool: one box that measures voltage (volts), current (amps), and resistance (ohms), plus continuity — the beep that tells you a wire is unbroken. It has a dial to pick what you are measuring, two leads (red and black), and a display. The black lead always goes in the COM (common) jack; the red lead goes in the jack marked for what you are measuring — VΩ for voltage and resistance, and a separate jack (often marked 10 A) for large currents.</p>\n<p>Before you trust any reading, check the meter: measure a known source first — a fresh AA battery should read about 1.5 V. If the meter reads wrong on a known source, do not trust it on an unknown one. And check the leads: cracked insulation or a blown fuse inside the meter are common reasons for readings that make no sense.</p>\n"
    },
    {
      "heading": "Measuring Voltage: Across, in Parallel",
      "html": "<p>To measure voltage, you connect the meter across the component — in parallel with it. Set the dial to V (DC for a battery, AC — the wavy line — for mains), touch the red lead to one side and the black lead to the other, and read the display. A voltmeter has a very high resistance inside, so it draws almost no current and does not disturb the circuit it is measuring.</p>\n<p>If the display shows a minus sign, the leads are reversed — swap them and the reading becomes positive. The size of the number is the same either way; the sign only tells you which lead is at the higher voltage. On a 12 V battery, red on + and black on − should read about +12 V.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Voltage is measured ACROSS a component (parallel). Current is measured THROUGH a wire (series). Resistance is measured on a circuit with the power OFF. Mixing these up is how meters get blown.</div></p>\n"
    },
    {
      "heading": "Measuring Current: Through, in Series",
      "html": "<p>To measure current, the meter must become part of the circuit: you break the wire and put the meter in series, so the current flows through the meter. An ammeter has a very low resistance inside, so it barely affects the circuit — but that is also why you must never connect an ammeter across a voltage source. Across a battery, the meter's low resistance would let a huge current flow and blow its fuse (or the meter).</p>\n<p>That is the single most common beginner meter accident: the dial is left on amps from the last measurement, and the meter is then touched across a battery or a live circuit. The fuse blows — if you are lucky. Always check the dial before every measurement, and move the red lead back to the VΩ jack when you are done measuring current.</p>\n"
    },
    {
      "heading": "Measuring Resistance and Continuity: Power OFF",
      "html": "<p>To measure resistance, the circuit must be de-energised — switched off and, for anything above low-voltage bench work, locked out and tested dead. The meter applies its own small voltage and measures the current that flows; any outside voltage in the circuit will corrupt the reading and can damage the meter. Touch the leads across the resistor (ideally with one end disconnected, so other paths cannot confuse the reading) and read the ohms.</p>\n<p>Continuity mode is the same idea with a beeper: if the resistance is very low (a good wire or a closed switch), the meter beeps. It is the fastest way to find a broken wire or a blown fuse: beep means the path is good, silence means it is open. Never test continuity on a live circuit.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>A multimeter measures voltage, current, resistance, and continuity.</li><li>Voltage: across the component, in parallel. Current: in series, breaking the wire.</li><li>Resistance and continuity: only with the power OFF.</li><li>Check the meter on a known source before trusting it on an unknown one.</li><li>Never connect an ammeter across a voltage source — it will blow the fuse.</li><li>Black lead in COM; red lead in the jack for what you are measuring.</li></ul></p>\n<p><strong>Common mistake:</strong> Measuring resistance in a live circuit. The meter's own test voltage fights the circuit's voltage, the reading is meaningless, and the meter can be damaged.</p>\n<p><strong>Common mistake:</strong> Leaving the dial on amps and the red lead in the 10 A jack, then measuring voltage. The meter is now a near-short across the circuit. Always return the dial to volts and the lead to VΩ when you finish.</p>\n<p><strong>Safety:</strong> These are bench-level habits for low-voltage practice circuits. Mains voltage (120 V AC and above) can kill. Never measure a live mains circuit unless you are trained, qualified, and using a meter with the right CAT rating for the job — and even then, with the correct PPE and procedures from Module 11.</p>\n<p><strong>Ready check:</strong> If you can say how to connect the meter for voltage, current, and resistance — and why the power must be off for resistance — you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Digital multimeter (DMM)",
      "def": "One instrument that measures voltage, current, resistance, and continuity."
    },
    {
      "term": "Voltmeter",
      "def": "A meter for voltage; connected in parallel across a component; very high internal resistance."
    },
    {
      "term": "Ammeter",
      "def": "A meter for current; connected in series so current flows through it; very low internal resistance."
    },
    {
      "term": "Ohmmeter",
      "def": "A meter for resistance; used only on a de-energised circuit."
    },
    {
      "term": "Continuity test",
      "def": "A beep test for an unbroken path; beep means the wire or switch is good."
    },
    {
      "term": "COM jack",
      "def": "The common jack on a meter; the black lead always goes here."
    },
    {
      "term": "Range",
      "def": "The maximum value a meter setting can display; auto-ranging meters pick it for you."
    },
    {
      "term": "Auto-ranging",
      "def": "A meter that picks its own measurement range automatically."
    },
    {
      "term": "CAT rating",
      "def": "A safety rating (CAT II, III, IV) for how much transient voltage a meter can survive; higher is tougher."
    },
    {
      "term": "Test lead",
      "def": "The probe wires of a meter; check them for cracked insulation before use."
    },
    {
      "term": "Known source check",
      "def": "Testing a meter on a known voltage (such as a fresh battery) before trusting it on an unknown circuit."
    },
    {
      "term": "Blown fuse (meter)",
      "def": "The meter's internal fuse, which melts to protect the meter when too much current flows through it."
    }
  ],
  "video": {
    "title": "How To Use a Multimeter (For Beginners) | MAGS How To Videos",
    "embedUrl": "https://www.youtube.com/embed/ciyWwcKmPC4",
    "note": "Volts, amps, and ohms on a real meter: watch the dial positions and which jack the red lead goes in for each job.",
    "more": [
      {
        "title": "How to use a Digital Multimeter - Best Multimeter for Beginners",
        "url": "https://www.youtube.com/watch?v=la0rr9jvH4M"
      },
      {
        "title": "How to Use a Multimeter | Family Handyman",
        "url": "https://www.youtube.com/watch?v=9ogXHkdxcgk"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> You need to measure the voltage across a resistor in a 12 V circuit. Describe exactly how to connect the meter: dial setting, jacks, and lead placement.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Black lead in COM, red lead in the VΩ jack. Step 2: Dial to DC volts (V with a straight line). Step 3: Touch the leads across the resistor — red on one side, black on the other — in parallel with it. Step 4: Read the display; a minus sign just means the leads are reversed.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> You need to measure the current through a lamp in a 12 V circuit. Describe how to connect the meter, and state the one thing you must never do with the meter on the amps setting.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Move the red lead to the amps jack (10 A for a large current), dial to amps. Step 2: Break the wire to the lamp and put the meter in series, so the current flows through it. Step 3: Never connect the meter, on amps, across a voltage source — its low resistance would let a huge current flow and blow the fuse.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A student tries to measure a resistor's value while the circuit is still powered, and the meter reads 0 Ω. Explain what is wrong.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Resistance must be measured with the power off — the meter applies its own small voltage and measures the resulting current. Step 2: With the circuit powered, the circuit's own voltage corrupts the measurement, so the reading is meaningless. Step 3: Switch the circuit off, lock it out, and measure again with one end of the resistor disconnected if possible.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A meter reads 12.6 V across a car battery. The battery is labelled 12 V. Is the reading sensible? What would you do next if you wanted to trust the meter?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Yes — a healthy charged 12 V car battery reads about 12.6 V with no load, so the reading is sensible. Step 2: To trust the meter, check it on a known source first (a fresh AA cell should read about 1.5 V) and check the leads for damage. A meter that reads right on a known source can be trusted on the unknown one.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A fuse in a circuit is suspected of being blown. Explain how to test it with a multimeter, including the safety step that comes first.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Switch the circuit off and make sure it is dead (lock out if it is anything above low-voltage bench work). Step 2: Set the meter to continuity (beep) mode. Step 3: Touch the leads to the two ends of the fuse: a beep means the fuse is good; silence means it is blown and must be replaced with the same rating.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A classmate measures a resistor and the meter shows “OL”. What does that mean, and what are the two most likely causes?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: “OL” means overload — the resistance is higher than the range can display. Step 2: Likely cause 1: the resistor really is a very high value (or the circuit is open — a broken wire). Step 3: Likely cause 2: the leads are not making contact, or the dial is on the wrong (too small) range. Check the leads, try a higher range, and test the resistor with one end disconnected.</p>"
    }
  ],
  "quiz": [
    {
      "q": "How is a voltmeter connected to measure the voltage across a resistor?",
      "choices": [
        "In series, by breaking the wire",
        "In parallel, across the resistor",
        "Only to the positive terminal",
        "With the power off and the resistor removed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A voltmeter connects in parallel, across the component. (a) is how an ammeter connects. (c) is wrong: you need both leads, one on each side. (d) is wrong: voltage is measured with the circuit powered."
    },
    {
      "q": "Why must resistance be measured with the power off?",
      "choices": [
        "The meter's battery would run out",
        "The circuit's own voltage corrupts the reading and can damage the meter",
        "Resistance only exists when the power is off",
        "The meter cannot display ohms when powered"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The ohmmeter applies its own small voltage; any outside voltage fights it, giving a meaningless reading and risking damage. (a) is wrong: the meter battery is not the issue. (c) is wrong: resistance exists whether powered or not. (d) is wrong: the display works fine — the measurement is what fails."
    },
    {
      "q": "What happens if you connect a meter set to amps directly across a battery?",
      "choices": [
        "It reads the battery voltage normally",
        "It reads zero",
        "A huge current flows through the meter's low resistance and blows its fuse",
        "It charges the battery"
      ],
      "answer": 2,
      "explanation": "Correct: (c). An ammeter has very low resistance, so across a source it is nearly a short circuit — the fuse blows. (a) is wrong: on amps it does not measure voltage. (b) is wrong: the current is very large, not zero. (d) is wrong: a meter cannot charge a battery."
    },
    {
      "q": "Where does the black lead always go on a multimeter?",
      "choices": [
        "The 10 A jack",
        "The VΩ jack",
        "The COM (common) jack",
        "It does not matter"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Black always goes in COM. (a) is for the red lead when measuring large currents. (b) is for the red lead when measuring voltage or resistance. (d) is wrong: swapping the leads changes the sign and, on amps, can be dangerous."
    },
    {
      "q": "A continuity test beeps when the leads touch the two ends of a wire. What does the beep mean?",
      "choices": [
        "The wire is broken",
        "The wire is live",
        "The wire is a complete, low-resistance path",
        "The wire is too thin"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A beep means the path is unbroken with very low resistance. (a) is backwards: a broken wire gives silence. (b) is wrong: continuity is tested with the power off. (d) is wrong: the beeper does not measure thickness."
    },
    {
      "q": "What is the first thing to do before trusting a meter reading on an unknown circuit?",
      "choices": [
        "Turn the dial to the highest range",
        "Check the meter on a known source, such as a fresh battery",
        "Replace the meter's battery",
        "Touch the leads together"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A known-source check proves the meter and leads are working. (a) is sometimes sensible but does not prove the meter works. (c) is only needed if the meter is misbehaving. (d) is a continuity check, not a voltage check."
    },
    {
      "q": "A meter display shows “OL” on the resistance range. What does it mean?",
      "choices": [
        "The resistance is zero",
        "The resistance is higher than the range can show — possibly an open circuit",
        "The meter is off",
        "The leads are shorted together"
      ],
      "answer": 1,
      "explanation": "Correct: (b). OL (overload) means the resistance exceeds the range — a very high value or an open circuit. (a) is wrong: zero ohms would show 0 or a beep. (c) is wrong: an off meter shows nothing. (d) is wrong: shorted leads read near 0 Ω."
    },
    {
      "q": "Which meter has a very high internal resistance, so it draws almost no current from the circuit?",
      "choices": [
        "Ammeter",
        "Voltmeter",
        "Ohmmeter on a live circuit",
        "Continuity tester"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A voltmeter has very high internal resistance so it does not disturb the circuit. (a) is the opposite: an ammeter has very low resistance. (c) is not a valid measurement at all. (d) is a mode, not a meter type, and it applies its own voltage."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Meters & Measurement: Quick Reference</h3>\n<p><strong>Core idea:</strong> Voltage across (parallel), current through (series), resistance with the power OFF. Check the meter on a known source first.</p>\n<p><strong>Key terms:</strong> Digital multimeter · Voltmeter · Ammeter · Ohmmeter · Continuity test · COM jack.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Black lead in COM; red lead in the jack for the job.</li>\n<li>Ammeter in series — never across a voltage source.</li>\n<li>Resistance and continuity only on a dead circuit.</li>\n<li>A minus sign just means the leads are reversed.</li></ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
