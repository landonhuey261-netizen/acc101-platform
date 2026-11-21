// ele102 - Module 9: Wire Resistance & Voltage Drop
module.exports = {
  "number": 9,
  "slug": "wire-resistance-and-voltage-drop",
  "title": "Wire Resistance & Voltage Drop",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why wire has resistance and how it is calculated from length, size, and material.",
    "Calculate voltage drop in a circuit using Ohm's law and the wire's resistance.",
    "Explain the NEC's recommended 3% branch-circuit and 5% total voltage-drop limits.",
    "Describe the effects of excessive voltage drop on loads.",
    "Select a larger wire size to correct excessive voltage drop."
  ],
  "sections": [
    {
      "heading": "Why Wire Has Resistance",
      "html": "<p>Every wire has resistance. The electrons flowing through it collide with atoms, and those collisions turn some of the electrical energy into heat. The resistance of a wire depends on its material, its length, and its cross-sectional area: <strong>R = ρ × L ÷ A</strong>, where ρ (rho) is the material's resistivity, L is the length, and A is the cross-sectional area. Copper has a low resistivity, aluminum a higher one, and steel a much higher one — which is why copper is the standard for building wiring.</p>\n<p>Length matters twice over in a circuit: the current travels out on one conductor and back on the other, so the total wire length is twice the one-way distance. A 100-foot run has 200 feet of wire in the circuit. And because resistance rises with length, long runs have more resistance, more voltage drop, and more heat — which is why long runs need larger wire.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Wire is a resistor. Every foot of it drops a little voltage and makes a little heat — and on a long run, a little becomes a lot.</div>"
    },
    {
      "heading": "Voltage Drop: The Calculation",
      "html": "<p><strong>Voltage drop</strong> is the voltage lost in the wire itself, found with Ohm's law: <strong>V<sub>D</sub> = I × R<sub>wire</sub></strong>, where R<sub>wire</sub> is the resistance of the two conductors (out and back) at the operating temperature. The voltage that reaches the load is the source voltage minus the drop. A 120-volt source with a 6-volt drop delivers only 114 volts to the load.</p>\n<p>The NEC gives the resistance of wire in its tables — Chapter 9, Table 8 gives the DC resistance of copper and aluminum conductors — and the common field formula for single-phase voltage drop is V<sub>D</sub> = (2 × K × I × L) ÷ CM, where K is 12.9 for copper and 21.2 for aluminum, I is the current, L is the one-way length in feet, and CM is the wire's circular-mil area. Worked example: a 120-volt, 20-amp circuit, 100 feet one way, 12 AWG copper (6,530 CM). V<sub>D</sub> = (2 × 12.9 × 20 × 100) ÷ 6,530 = 51,600 ÷ 6,530 ≈ 7.9 volts. That is a 6.6% drop — too much, as the next section explains.</p>"
    },
    {
      "heading": "The 3% and 5% Recommendations",
      "html": "<p>The 2023 NEC does not require a specific voltage-drop limit, but its informational notes recommend that the voltage drop on a branch circuit be no more than 3%, and the total drop (feeder plus branch circuit) no more than 5%, for reasonable efficiency of operation. At 120 volts, 3% is 3.6 volts; at 240 volts, 3% is 7.2 volts. The example above — 7.9 volts on a 120-volt circuit — is 6.6%, well over the 3% recommendation, so that circuit needs a larger wire.</p>\n<p>The fix is to go up a size. Repeating the calculation with 10 AWG copper (10,380 CM): V<sub>D</sub> = (2 × 12.9 × 20 × 100) ÷ 10,380 = 51,600 ÷ 10,380 ≈ 4.97 volts, or about 4.1% — still over 3%. With 8 AWG (16,510 CM): V<sub>D</sub> = 51,600 ÷ 16,510 ≈ 3.13 volts, or about 2.6% — within the recommendation. The pattern is the lesson: long runs and heavy loads need big wire, and the calculation tells you how big.</p>"
    },
    {
      "heading": "What Excessive Drop Does to Loads",
      "html": "<p>Voltage drop starves the load. A motor that gets too little voltage draws more current to make the same power, runs hotter, and can burn out. A light dims. A heater puts out less heat. An electronic device may reset, malfunction, or fail. And the energy lost in the wire is wasted as heat — which is both an efficiency problem and, on an overloaded wire, a fire problem.</p>\n<p>The electrician's job is to check the drop before the wire is pulled, not after the customer complains that the lights dim when the saw starts. The calculation takes a minute; the re-pull takes a day. Long runs, heavy loads, and high temperatures are the three flags that say \"calculate the drop first.\"</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Wire resistance: R = ρ × L ÷ A; rises with length, falls with area; copper beats aluminum.</li>\n<li>Voltage drop: V<sub>D</sub> = I × R<sub>wire</sub>; the load gets the source voltage minus the drop.</li>\n<li>Field formula (single-phase): V<sub>D</sub> = (2 × K × I × L) ÷ CM, with K = 12.9 for copper and 21.2 for aluminum.</li>\n<li>NEC recommendation: no more than 3% on a branch circuit, 5% total (feeder plus branch).</li>\n<li>Excessive drop starves loads: motors overheat, lights dim, electronics malfunction — fix it with larger wire.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Using the one-way length instead of the round trip. The current travels out and back, so the wire length in the circuit is twice the one-way distance — the factor of 2 in the formula.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Treating the 3% and 5% figures as hard code requirements. They are NEC recommendations in informational notes, not requirements — but they are the standard every electrician designs to.</div>\n<p><strong>Ready-to-Work link:</strong> If you can calculate voltage drop with the field formula, check it against 3% and 5%, and pick a larger wire to fix it, you have this module. Module 10 covers magnetism and electromagnetism.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Voltage drop",
      "def": "The voltage lost in the conductors themselves, equal to I × R_wire."
    },
    {
      "term": "Resistivity (ρ)",
      "def": "A property of a material describing how strongly it resists current flow; copper is low, aluminum higher."
    },
    {
      "term": "Circular mil (CM)",
      "def": "A unit of wire cross-sectional area; 12 AWG is 6,530 CM, 10 AWG is 10,380 CM."
    },
    {
      "term": "K factor",
      "def": "A constant in the voltage-drop formula: 12.9 for copper, 21.2 for aluminum."
    },
    {
      "term": "Branch circuit",
      "def": "The circuit from the panel to the outlets, lights, or equipment it serves."
    },
    {
      "term": "Feeder",
      "def": "The circuit from the service to a panelboard."
    },
    {
      "term": "3% recommendation",
      "def": "The NEC's recommended maximum voltage drop on a branch circuit."
    },
    {
      "term": "5% recommendation",
      "def": "The NEC's recommended maximum total voltage drop, feeder plus branch circuit."
    },
    {
      "term": "Chapter 9, Table 8",
      "def": "The NEC table giving the DC resistance of copper and aluminum conductors."
    },
    {
      "term": "Round trip",
      "def": "The out-and-back length of a circuit's conductors; twice the one-way distance."
    },
    {
      "term": "Efficiency",
      "def": "How much of the supplied energy reaches the load as useful work."
    },
    {
      "term": "Overheating",
      "def": "A wire running hotter than its rating, caused by too much current or too much resistance."
    },
    {
      "term": "Motor burnout",
      "def": "A motor failing from heat, often caused by low voltage forcing it to draw more current."
    },
    {
      "term": "Load voltage",
      "def": "The voltage actually delivered to the load: source voltage minus voltage drop."
    },
    {
      "term": "Upsizing wire",
      "def": "Using a larger wire size to reduce voltage drop on a long or heavily loaded run."
    }
  ],
  "video": {
    "title": "Is Voltage Drop the ONLY WAY to Test For Resistance In A Circuit? #techtips #mec",
    "embedUrl": "https://www.youtube.com/embed/L960PnR9WZI",
    "note": "A voltage-drop field discussion. As you watch, note how voltage drop shows up as a symptom and what it tells you about the circuit.",
    "more": [
      {
        "title": "How to Calculate DC Voltage Drop | Simple Formula",
        "url": "https://www.youtube.com/watch?v=KLVUw83L58M"
      },
      {
        "title": "Calculating the voltage drop for the single phase circuit",
        "url": "https://www.youtube.com/watch?v=e--4QZ2l7to"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 120 V, 20 A circuit runs 100 feet one way in 12 AWG copper (6,530 CM, K = 12.9). What is the voltage drop?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: V_D = (2 × K × I × L) ÷ CM. Step 2: V_D = (2 × 12.9 × 20 × 100) ÷ 6,530 = 51,600 ÷ 6,530 ≈ 7.9 volts. Step 3: The drop is about 7.9 volts, or 6.6% — over the 3% recommendation.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> In the same circuit, what voltage reaches the load?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Load voltage = source voltage − drop. Step 2: 120 − 7.9 = 112.1 volts. Step 3: The load gets about 112 volts instead of 120.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> What is the 3% voltage-drop limit on a 120-volt branch circuit, in volts?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 3% of 120 volts. Step 2: 0.03 × 120 = 3.6 volts. Step 3: The recommended maximum drop is 3.6 volts.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> The circuit in Problem 1 is re-run in 8 AWG copper (16,510 CM). What is the new voltage drop, and is it within 3%?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: V_D = 51,600 ÷ 16,510 ≈ 3.13 volts. Step 2: 3.13 ÷ 120 ≈ 2.6%. Step 3: Yes — 2.6% is within the 3% recommendation.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Why does the voltage-drop formula use twice the one-way length?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Current travels out on one conductor and back on the other. Step 2: Both conductors have resistance and both drop voltage. Step 3: The total wire in the circuit is twice the one-way distance, so the formula doubles the length.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A motor at the end of a long run keeps overheating. The wire is sized correctly for the current. What is the likely cause, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Excessive voltage drop on the long run. Step 2: Low voltage forces the motor to draw more current to make the same power, so it runs hot. Step 3: Fix it by upsizing the wire to reduce the drop.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Voltage drop in a wire is found with:",
      "choices": [
        "V_D = I × R_wire",
        "V_D = E ÷ R",
        "V_D = P × I",
        "V_D = R ÷ I"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Voltage drop is current times the wire's resistance. (b) E ÷ R is current. (c) P × I is not a standard formula. (d) R ÷ I is not voltage drop."
    },
    {
      "q": "The voltage-drop formula uses twice the one-way length because:",
      "choices": [
        "The wire is doubled",
        "Current travels out on one conductor and back on the other",
        "The NEC requires it",
        "The wire is always too long"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Both conductors drop voltage, so the total wire length is the round trip. (a) The wire is not doubled physically. (c) The NEC does not write the formula. (d) Length is not a matter of excess."
    },
    {
      "q": "The K factor for copper in the voltage-drop formula is:",
      "choices": [
        "21.2",
        "12.9",
        "6.53",
        "10.38"
      ],
      "answer": 1,
      "explanation": "Correct: (b). K = 12.9 for copper. (a) 21.2 is the K factor for aluminum. (c) 6.53 is close to 12 AWG's CM in thousands. (d) 10.38 is close to 10 AWG's CM in thousands."
    },
    {
      "q": "The NEC recommends a maximum voltage drop of 3% on:",
      "choices": [
        "The feeder only",
        "A branch circuit",
        "The service only",
        "The utility line"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The 3% recommendation is for a branch circuit. (a) The feeder is part of the 5% total. (c) The service is not the branch circuit. (d) The utility line is outside the NEC's scope here."
    },
    {
      "q": "The NEC's recommended maximum total voltage drop (feeder plus branch circuit) is:",
      "choices": [
        "1%",
        "3%",
        "5%",
        "10%"
      ],
      "answer": 2,
      "explanation": "Correct: (c). The total recommendation is 5%. (a) 1% is stricter than the recommendation. (b) 3% is the branch-circuit recommendation. (d) 10% is far too much."
    },
    {
      "q": "A 120 V circuit with a 7.9 V drop has a percentage drop of about:",
      "choices": [
        "3%",
        "6.6%",
        "7.9%",
        "12%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 7.9 ÷ 120 ≈ 6.6%. (a) 3% would be 3.6 volts. (c) 7.9 is the voltage, not the percentage. (d) 12% would be 14.4 volts."
    },
    {
      "q": "Excessive voltage drop causes a motor to:",
      "choices": [
        "Run cooler",
        "Draw more current and run hotter",
        "Use less power",
        "Run faster"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Low voltage forces a motor to draw more current to make the same power, so it overheats. (a) A starved motor runs hotter, not cooler. (c) It draws more current, not less. (d) Low voltage slows a motor, it does not speed it up."
    },
    {
      "q": "The fix for excessive voltage drop on a long run is to:",
      "choices": [
        "Use a smaller wire",
        "Use a larger wire",
        "Add more loads",
        "Remove the breaker"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A larger wire has less resistance and less drop. (a) A smaller wire has more resistance and more drop. (c) More loads make the drop worse. (d) Removing the breaker is dangerous and does not fix the drop."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Wire Resistance & Voltage Drop: Quick Reference</h3>\n<p><strong>Core idea:</strong> Wire is a resistor. Every foot drops a little voltage and makes a little heat — on a long run, a little becomes a lot.</p>\n<p><strong>Wire resistance:</strong> R = ρ × L ÷ A · Rises with length · Falls with area · Copper beats aluminum.</p>\n<p><strong>Field formula (single-phase):</strong> V_D = (2 × K × I × L) ÷ CM · K = 12.9 copper, 21.2 aluminum · L is one-way feet · CM is circular mils.</p>\n<p><strong>Limits:</strong> NEC recommends ≤ 3% on a branch circuit, ≤ 5% total (feeder + branch). At 120 V, 3% = 3.6 V.</p>\n<p><strong>Effects:</strong> Motors overheat, lights dim, electronics malfunction · Fix by upsizing the wire.</p>\n<p><strong>Self-check:</strong> Calculate the drop for a 120 V, 20 A, 100 ft run in 12 AWG and check it against 3%, without looking.</p>\n"
};
