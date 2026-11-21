// ele103 - Module 8: Three-Phase Power: Wye & Delta
module.exports = {
  "number": 8,
  "slug": "three-phase-power-wye-and-delta",
  "title": "Three-Phase Power: Wye & Delta",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what three-phase power is and why it is used for large loads.",
    "Describe the wye connection: line and phase voltage and current.",
    "Describe the delta connection: line and phase voltage and current.",
    "Calculate line voltage from phase voltage in wye, and line current from phase current in delta.",
    "Calculate three-phase power with P = √3 × V_L × I_L × pf."
  ],
  "sections": [
    {
      "heading": "What Three-Phase Power Is",
      "html": "<p><strong>Three-phase power</strong> is three AC voltages, each 120 degrees apart, delivered on three conductors (plus a neutral in wye systems). The three waves take turns peaking, so the total power delivered is smooth and constant — unlike single-phase power, which pulses to zero twice per cycle. Three-phase motors run smoothly, start easily, and deliver more power for their size than single-phase motors, which is why three-phase power runs factories, large buildings, and the grid itself.</p>\n<p>A three-phase system is also more efficient in wire: three conductors carry three times the power of a single-phase system with only 1.5 times the wire. And a three-phase motor needs no starting capacitor and no start winding — the rotating magnetic field made by the three phases starts it and keeps it turning. The electrician who works in commercial and industrial buildings lives in three-phase power.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Three phases, 120° apart, deliver smooth, constant power — and a three-phase motor starts itself, with no capacitor and no start winding.</div>"
    },
    {
      "heading": "The Wye Connection",
      "html": "<p>In a <strong>wye (Y)</strong> connection, the three windings meet at a common point — the neutral — and the other ends go out to the three line conductors. The voltage from any line to the neutral is the <strong>phase voltage (V<sub>P</sub>)</strong>; the voltage between any two lines is the <strong>line voltage (V<sub>L</sub>)</strong>, and it is √3 times the phase voltage: V<sub>L</sub> = √3 × V<sub>P</sub>. The current in each line is the same as the current in its phase winding: I<sub>L</sub> = I<sub>P</sub>. The neutral carries the unbalanced current — the difference between the three phase currents — and in a balanced system it carries almost nothing.</p>\n<p>The common wye voltages are 120/208 V and 277/480 V. In a 120/208 V system, the phase voltage is 120 V (line to neutral, for receptacles and lighting) and the line voltage is 208 V (line to line, for larger loads). In a 277/480 V system, the phase voltage is 277 V (for lighting) and the line voltage is 480 V (for motors and large equipment). The two numbers in the name are the phase voltage first, then the line voltage — and 208 is 120 × √3, just as 480 is 277 × √3.</p>"
    },
    {
      "heading": "The Delta Connection",
      "html": "<p>In a <strong>delta (Δ)</strong> connection, the three windings form a triangle, end to end, with the line conductors connected at the three corners. There is no neutral in a pure delta. The voltage across each winding is the line voltage: V<sub>L</sub> = V<sub>P</sub>. The current in each line is √3 times the current in its phase winding: I<sub>L</sub> = √3 × I<sub>P</sub>, because each line carries the current of two windings at once. The common delta voltage is 240 V, and a 240 V delta system is often found in older industrial buildings and in some rural services.</p>\n<p>Delta and wye are the mirror image of each other: in wye, the voltage gets the √3 and the current does not; in delta, the current gets the √3 and the voltage does not. The memory aid is that the √3 always goes with the line quantity that is bigger — line voltage in wye, line current in delta. A motor can be connected in either configuration, and many motors are dual-voltage, with windings that can be reconnected from one to the other.</p>"
    },
    {
      "heading": "Three-Phase Power",
      "html": "<p>Three-phase power is calculated with <strong>P = √3 × V<sub>L</sub> × I<sub>L</sub> × pf</strong>, where V<sub>L</sub> is the line voltage, I<sub>L</sub> is the line current, and pf is the power factor. The √3 appears because there are three phases. Worked example: a 480 V three-phase motor draws 20 A at a power factor of 0.85. P = 1.732 × 480 × 20 × 0.85 ≈ 14,131 watts, or about 14.1 kW. Apparent power is S = √3 × V<sub>L</sub> × I<sub>L</sub> = 1.732 × 480 × 20 ≈ 16,627 VA, and the power factor is P ÷ S ≈ 0.85, which checks.</p>\n<p>Balanced three-phase loads draw equal currents in all three lines, and the neutral — where there is one — carries almost nothing. An unbalanced load, or a lost phase, makes the currents unequal, the motor overheat, and the neutral carry current. Checking that the three line currents are nearly equal is one of the fastest field checks on a three-phase system, and a large imbalance is a sign of a problem.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Three-phase: three voltages 120° apart; smooth, constant power; motors start themselves.</li>\n<li>Wye: V<sub>L</sub> = √3 × V<sub>P</sub>; I<sub>L</sub> = I<sub>P</sub>; neutral carries the unbalanced current.</li>\n<li>Delta: V<sub>L</sub> = V<sub>P</sub>; I<sub>L</sub> = √3 × I<sub>P</sub>; no neutral in a pure delta.</li>\n<li>Common systems: 120/208 V wye, 277/480 V wye, 240 V delta.</li>\n<li>Three-phase power: P = √3 × V<sub>L</sub> × I<sub>L</sub> × pf; S = √3 × V<sub>L</sub> × I<sub>L</sub>.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Using the phase voltage in the three-phase power formula. The formula uses line voltage and line current — V_L and I_L — with the √3 already accounting for the three phases.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying the neutral in a wye system always carries no current. In a balanced system it carries almost nothing — but an unbalanced load makes it carry the difference, and a lost phase makes it carry far more.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain wye vs. delta, convert line and phase values, and calculate three-phase power, you have this module. Module 9 covers transformers.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Three-phase power",
      "def": "Three AC voltages 120° apart on three conductors; smooth, constant power delivery."
    },
    {
      "term": "Wye (Y) connection",
      "def": "Three windings meeting at a common neutral point; V_L = √3 × V_P."
    },
    {
      "term": "Delta (Δ) connection",
      "def": "Three windings connected end to end in a triangle; I_L = √3 × I_P."
    },
    {
      "term": "Line voltage (V_L)",
      "def": "The voltage between any two line conductors."
    },
    {
      "term": "Phase voltage (V_P)",
      "def": "The voltage from a line to the neutral in a wye system, or across one winding."
    },
    {
      "term": "Line current (I_L)",
      "def": "The current in a line conductor."
    },
    {
      "term": "Phase current (I_P)",
      "def": "The current in one winding."
    },
    {
      "term": "Neutral",
      "def": "The common point of a wye connection; it carries the unbalanced current."
    },
    {
      "term": "Balanced load",
      "def": "A three-phase load drawing equal currents in all three lines."
    },
    {
      "term": "Unbalanced load",
      "def": "A three-phase load drawing unequal currents; the neutral carries the difference."
    },
    {
      "term": "120/208 V",
      "def": "A wye system with 120 V phase voltage and 208 V line voltage."
    },
    {
      "term": "277/480 V",
      "def": "A wye system with 277 V phase voltage and 480 V line voltage."
    },
    {
      "term": "√3 (1.732)",
      "def": "The factor relating line and phase values in three-phase systems."
    },
    {
      "term": "Three-phase power formula",
      "def": "P = √3 × V_L × I_L × pf."
    },
    {
      "term": "Rotating magnetic field",
      "def": "The field made by three-phase currents that starts and runs a three-phase motor."
    }
  ],
  "video": {
    "title": "What's the Difference Between Wye and Delta?  Current and Voltage Relationships",
    "embedUrl": "https://www.youtube.com/embed/0ZuoBTd7STk",
    "note": "A wye vs. delta walkthrough. As you watch, write down the line and phase relationships for each connection.",
    "more": [
      {
        "title": "Wye and Delta three phase configuration ( A brief overview)",
        "url": "https://www.youtube.com/watch?v=3ktxtDW6UAE"
      },
      {
        "title": "Three-Phase Transformers Explained | Delta vs Wye Basics",
        "url": "https://www.youtube.com/watch?v=N1W-8iHoev8"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A wye system has a phase voltage of 120 V. What is the line voltage?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: V_L = √3 × V_P. Step 2: V_L = 1.732 × 120 ≈ 208 volts. Step 3: The line voltage is 208 V — the 120/208 V system.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A wye system has a phase voltage of 277 V. What is the line voltage?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: V_L = √3 × V_P. Step 2: V_L = 1.732 × 277 ≈ 480 volts. Step 3: The line voltage is 480 V — the 277/480 V system.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A delta system has a phase current of 10 A in each winding. What is the line current?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: I_L = √3 × I_P. Step 2: I_L = 1.732 × 10 ≈ 17.3 amps. Step 3: The line current is about 17.3 A.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A 480 V three-phase motor draws 20 A at a power factor of 0.85. What is the true power?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: P = √3 × V_L × I_L × pf. Step 2: P = 1.732 × 480 × 20 × 0.85 ≈ 14,131 watts. Step 3: The true power is about 14.1 kW.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> In the same motor, what is the apparent power?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: S = √3 × V_L × I_L. Step 2: S = 1.732 × 480 × 20 ≈ 16,627 VA. Step 3: The apparent power is about 16.6 kVA, and the power factor is 14,131 ÷ 16,627 ≈ 0.85, which checks.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A three-phase motor's line currents read 20 A, 20 A, and 35 A. What does that tell you?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The currents are badly unbalanced. Step 2: A balanced load draws equal currents in all three lines. Step 3: The imbalance is a sign of a problem — a lost or weak phase, or a fault in the motor — and the motor will overheat if it keeps running.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Three-phase voltages are separated by:",
      "choices": [
        "90°",
        "120°",
        "180°",
        "360°"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The three phases are 120 degrees apart. (a) 90 degrees is the phase shift in a single inductor or capacitor. (c) 180 degrees is half a cycle. (d) 360 degrees is a full cycle."
    },
    {
      "q": "In a wye connection, line voltage equals:",
      "choices": [
        "Phase voltage",
        "√3 × phase voltage",
        "Phase voltage ÷ √3",
        "Three times the phase voltage"
      ],
      "answer": 1,
      "explanation": "Correct: (b). V_L = √3 × V_P in wye. (a) Line voltage equals phase voltage in delta, not wye. (c) Dividing by √3 gives the phase voltage from the line voltage. (d) Three times is too much."
    },
    {
      "q": "In a wye connection, line current equals:",
      "choices": [
        "Phase current",
        "√3 × phase current",
        "Phase current ÷ √3",
        "Three times the phase current"
      ],
      "answer": 0,
      "explanation": "Correct: (a). In wye, I_L = I_P. (b) √3 × phase current is the delta relationship. (c) Dividing by √3 is not the wye rule. (d) Three times is too much."
    },
    {
      "q": "In a delta connection, line current equals:",
      "choices": [
        "Phase current",
        "√3 × phase current",
        "Phase current ÷ √3",
        "Three times the phase current"
      ],
      "answer": 1,
      "explanation": "Correct: (b). In delta, I_L = √3 × I_P. (a) Line current equals phase current in wye, not delta. (c) Dividing by √3 is not the delta rule. (d) Three times is too much."
    },
    {
      "q": "A 120/208 V system has a phase voltage of:",
      "choices": [
        "120 V",
        "208 V",
        "240 V",
        "480 V"
      ],
      "answer": 0,
      "explanation": "Correct: (a). In 120/208 V, 120 V is the phase (line-to-neutral) voltage and 208 V is the line voltage. (b) 208 V is the line voltage. (c) 240 V is a delta system voltage. (d) 480 V is a 277/480 V line voltage."
    },
    {
      "q": "Three-phase true power is calculated with:",
      "choices": [
        "P = V_L × I_L",
        "P = √3 × V_L × I_L × pf",
        "P = V_P × I_P",
        "P = 3 × V_L × I_L"
      ],
      "answer": 1,
      "explanation": "Correct: (b). P = √3 × V_L × I_L × pf. (a) That leaves out the √3 and the power factor. (c) Phase values alone do not give three-phase power. (d) The factor is √3, not 3."
    },
    {
      "q": "A 480 V three-phase motor drawing 20 A at 0.85 pf uses about:",
      "choices": [
        "9.6 kW",
        "14.1 kW",
        "16.6 kW",
        "20 kW"
      ],
      "answer": 1,
      "explanation": "Correct: (b). P = 1.732 × 480 × 20 × 0.85 ≈ 14,131 W. (a) 9.6 kW is 480 × 20 without the √3 and pf. (c) 16.6 kW is the apparent power. (d) 20 kW is too high."
    },
    {
      "q": "The neutral in a wye system carries:",
      "choices": [
        "Always zero current",
        "The unbalanced current — almost nothing in a balanced system",
        "The full line current always",
        "Only the voltage"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The neutral carries the difference between the phase currents. (a) It carries almost nothing only when balanced. (c) It never carries the full line current in normal operation. (d) The neutral carries current, not just voltage."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Three-Phase Power: Quick Reference</h3>\n<p><strong>Core idea:</strong> Three phases, 120° apart, deliver smooth, constant power — and a three-phase motor starts itself.</p>\n<p><strong>Wye:</strong> V_L = √3 × V_P · I_L = I_P · Neutral carries the unbalanced current.</p>\n<p><strong>Delta:</strong> V_L = V_P · I_L = √3 × I_P · No neutral in a pure delta.</p>\n<p><strong>Systems:</strong> 120/208 V wye · 277/480 V wye · 240 V delta.</p>\n<p><strong>Power:</strong> P = √3 × V_L × I_L × pf · S = √3 × V_L × I_L.</p>\n<p><strong>Field check:</strong> The three line currents should be nearly equal — a large imbalance means a problem.</p>\n<p><strong>Self-check:</strong> Find V_L for 277 V phase, I_L for 10 A delta phase, and P for a 480 V, 20 A, 0.85 pf motor, without looking.</p>\n"
};
