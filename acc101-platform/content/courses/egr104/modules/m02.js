// egr104 - Module 2: Voltage, Current & Resistance
module.exports = {
  "number": 2,
  "slug": "voltage-current-resistance",
  "title": "Voltage, Current & Resistance",
  "estTime": "3–4 hours",
  "objectives": [
    "Define voltage, current, and resistance and name the unit for each.",
    "Explain the water-pipe analogy for voltage, current, and resistance.",
    "Convert between amps, milliamps, volts, ohms, kilo-ohms, and mega-ohms.",
    "Predict what happens to current when voltage rises or resistance rises.",
    "Explain why current is the same at every point in a single loop."
  ],
  "sections": [
    {
      "heading": "Voltage: The Push",
      "html": "<p>Voltage is the electrical push — the difference in electric potential energy between two points. It is measured in volts (V). A 9 V battery pushes harder than a 1.5 V cell, which is why a 9 V battery can drive more current through the same resistance. Voltage is always a difference between two points: saying “12 volts” really means “12 volts higher than the other terminal.”</p>\n<p>Think of water in a pipe: voltage is like water pressure. High pressure pushes water hard through the pipe; low pressure gives a weak flow. In the same way, high voltage pushes charge hard through a circuit. A battery, a generator, or a power supply creates and holds that pressure difference, and the rest of the circuit decides how much actually flows.</p>\n"
    },
    {
      "heading": "Current: The Flow",
      "html": "<p>Current is the rate at which charge flows past a point — how many electrons per second. It is measured in amperes, usually shortened to amps (A). One amp is a very large number of electrons per second: about 6.24 × 10<sup>18</sup> electrons, which is why we never count electrons one by one. Small currents are measured in milliamps (mA): 1 A = 1,000 mA, so a phone charger delivering 500 mA is delivering 0.5 A.</p>\n<p>Current is the same at every point in a single loop. The electrons do not pile up anywhere and they do not vanish: what flows out of the battery's negative terminal must flow back into its positive terminal. This will matter a lot when we get to Kirchhoff's current law. The direction we use on paper is called conventional current: it flows from positive to negative, even though the electrons themselves actually move the other way. Both descriptions describe the same circuit; engineers just agreed long ago to use conventional current, so we will too.</p>\n"
    },
    {
      "heading": "Resistance: The Opposition",
      "html": "<p>Resistance is how much a material opposes the flow of charge. It is measured in ohms (Ω). A resistor is a component built to have a known resistance; a long thin wire has more resistance than a short fat one; and heat makes most metals resist more. Resistance is what turns electrical energy into heat — which is useful in a heater or a toaster, and a problem in a wire that is too thin for its current.</p>\n<p>Large resistances are measured in kilo-ohms (kΩ) and mega-ohms (MΩ): 1 kΩ = 1,000 Ω and 1 MΩ = 1,000,000 Ω. A typical resistor in a small electronic circuit might be 470 Ω or 10 kΩ; the insulation on a wire might measure many MΩ, which is exactly what you want — almost no current leaking through it.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Voltage pushes, current flows, resistance opposes. Change any one of the three and the other two respond — and Ohm's law, in the next module, says exactly how.</div></p>\n"
    },
    {
      "heading": "The Water Analogy, Used Carefully",
      "html": "<p>The water analogy is the best mental picture for beginners: voltage is water pressure, current is the flow rate, and resistance is the narrowness of the pipe. Raise the pressure and more water flows. Narrow the pipe and less water flows. Put a bigger pipe in and more water flows. Every one of those sentences has an exact electrical twin, and you can use the analogy to predict what a circuit will do before you calculate anything.</p>\n<p>But the analogy has limits, and knowing them keeps you out of trouble. Water can leak out of a pipe; charge cannot leak out of a wire — it must return to the source. Water flows in an open pipe to the ground; current needs a complete loop. And water pressure is felt everywhere in the pipe at once, while voltage is always measured between two specific points. Use the analogy to build intuition, then trust the numbers.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Voltage (volts, V) is the push — the potential difference between two points.</li><li>Current (amps, A) is the flow rate of charge past a point; 1 A = 1,000 mA.</li><li>Resistance (ohms, Ω) is the opposition to flow; 1 kΩ = 1,000 Ω, 1 MΩ = 1,000,000 Ω.</li><li>Current is the same at every point in a single loop.</li><li>Raising voltage raises current; raising resistance lowers current.</li></ul></p>\n<p><strong>Common mistake:</strong> Mixing up voltage and current — saying a battery “has 2 amps in it.” A battery is rated in volts (its push) and in amp-hours (how much charge it can deliver over time). The current that actually flows depends on the circuit it is connected to.</p>\n<p><strong>Common mistake:</strong> Thinking current gets “used up” as it goes around. It does not. The same current flows through every part of a single loop; what gets used up is energy, not charge.</p>\n<p><strong>Ready check:</strong> If you can say, without looking, what happens to the current when you double the voltage and what happens when you double the resistance, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Voltage",
      "def": "The electrical push: the difference in electric potential energy between two points, measured in volts (V)."
    },
    {
      "term": "Volt (V)",
      "def": "The unit of voltage; one volt pushes one amp through one ohm."
    },
    {
      "term": "Current",
      "def": "The rate at which electric charge flows past a point, measured in amperes (A)."
    },
    {
      "term": "Ampere (amp, A)",
      "def": "The unit of current; one amp is about 6.24 × 10^18 electrons passing a point each second."
    },
    {
      "term": "Milliamp (mA)",
      "def": "One thousandth of an amp; 1 A = 1,000 mA."
    },
    {
      "term": "Resistance",
      "def": "How much a material opposes the flow of charge, measured in ohms (Ω)."
    },
    {
      "term": "Ohm (Ω)",
      "def": "The unit of resistance; one ohm lets one amp flow when pushed by one volt."
    },
    {
      "term": "Kilo-ohm (kΩ)",
      "def": "1,000 ohms."
    },
    {
      "term": "Mega-ohm (MΩ)",
      "def": "1,000,000 ohms."
    },
    {
      "term": "Resistor",
      "def": "A component built to have a known, fixed resistance."
    },
    {
      "term": "Conventional current",
      "def": "The agreed direction for current on paper: from positive to negative, opposite to the actual electron flow."
    },
    {
      "term": "Potential difference",
      "def": "Another name for voltage: the difference in electrical potential between two points."
    },
    {
      "term": "Electron flow",
      "def": "The actual movement of electrons, from negative to positive — the opposite of conventional current."
    },
    {
      "term": "Amp-hour (Ah)",
      "def": "A measure of how much charge a battery can deliver: one amp-hour is one amp flowing for one hour."
    }
  ],
  "video": {
    "title": "What is Voltage? | SparkFun",
    "embedUrl": "https://www.youtube.com/embed/z8qfhFXjsrw",
    "note": "Voltage explained with the water analogy: what the push is and how it is measured.",
    "more": [
      {
        "title": "What is Electric Current? | SparkFun",
        "url": "https://www.youtube.com/watch?v=kYwNj9uauJ4"
      },
      {
        "title": "Basic Electricity - Resistance and Ohm's law | Afrotechmods",
        "url": "https://www.youtube.com/watch?v=NfcgA1axPLo"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A phone charger delivers 500 mA. Write that current in amps. A resistor is marked 4.7 kΩ. Write that resistance in ohms.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 500 mA ÷ 1,000 = 0.5 A. Step 2: 4.7 kΩ × 1,000 = 4,700 Ω. Step 3: Check the direction — milliamps are smaller than amps, so the amp number must be smaller (0.5 &lt; 500 ✓); kilo-ohms are bigger than ohms, so the ohm number must be bigger (4,700 &gt; 4.7 ✓).</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Use the water analogy to explain what voltage, current, and resistance are, in three short sentences.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Voltage is like water pressure — the push that drives the flow. Step 2: Current is like the flow rate — how much water passes a point each second. Step 3: Resistance is like a narrow pipe — it restricts the flow, so for the same pressure less water gets through. A good answer keeps all three parts of the analogy and does not mix them up.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A circuit has a fixed 12 V battery. First the resistance is 6 Ω, then it is swapped for a 12 Ω resistor. Does the current go up or down, and by what factor?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Resistance opposes flow, so more resistance means less current. Step 2: The resistance doubles (6 Ω → 12 Ω), so the current halves. Step 3: In numbers (Ohm's law, next module): 12 V ÷ 6 Ω = 2 A, and 12 V ÷ 12 Ω = 1 A. The current goes down by a factor of 2.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A circuit has a fixed 10 Ω resistor. First the battery is 5 V, then it is swapped for a 10 V battery. Does the current go up or down, and by what factor?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Voltage pushes the charge, so more push means more flow. Step 2: The voltage doubles (5 V → 10 V), so the current doubles. Step 3: In numbers: 5 V ÷ 10 Ω = 0.5 A, and 10 V ÷ 10 Ω = 1 A. The current goes up by a factor of 2.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A wire carries 3 A. How many milliamps is that? An insulator measures 2 MΩ. How many ohms is that?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 3 A × 1,000 = 3,000 mA. Step 2: 2 MΩ × 1,000,000 = 2,000,000 Ω. Step 3: Check — milliamps are smaller units, so the number gets bigger (3,000 &gt; 3 ✓); ohms are smaller than mega-ohms, so the number gets bigger too (2,000,000 &gt; 2 ✓).</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A classmate says “the current is strongest near the battery and gets weaker as it goes around the loop.” Explain why they are wrong.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Charge cannot pile up or vanish anywhere in the loop. Step 2: So the same number of electrons must pass every point each second — the current is the same everywhere in a single loop. Step 3: What changes around the loop is energy: the charge loses energy as it passes through loads, but the amount of charge flowing per second stays the same. (The water analogy helps: water does not vanish from a pipe.)</p>"
    }
  ],
  "quiz": [
    {
      "q": "What is voltage?",
      "choices": [
        "The rate at which charge flows past a point",
        "The opposition to the flow of charge",
        "The electrical push: the difference in electric potential between two points",
        "The heat produced by a resistor"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Voltage is the push — the potential difference between two points, measured in volts. (a) is current. (b) is resistance. (d) is a result of current flowing through resistance, not voltage itself."
    },
    {
      "q": "How many milliamps are in 2.5 amps?",
      "choices": [
        "25 mA",
        "250 mA",
        "2,500 mA",
        "25,000 mA"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 1 A = 1,000 mA, so 2.5 × 1,000 = 2,500 mA. (a) 25 mA would be 0.025 A. (b) 250 mA would be 0.25 A. (d) 25,000 mA would be 25 A."
    },
    {
      "q": "Resistance is measured in which unit?",
      "choices": [
        "Volts",
        "Amps",
        "Watts",
        "Ohms"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Resistance is measured in ohms (Ω). (a) Volts measure voltage. (b) Amps measure current. (c) Watts measure power, which you will meet in Module 8."
    },
    {
      "q": "A circuit's voltage is doubled while its resistance stays the same. What happens to the current?",
      "choices": [
        "It stays the same",
        "It halves",
        "It doubles",
        "It drops to zero"
      ],
      "answer": 2,
      "explanation": "Correct: (c). More push with the same opposition means more flow — the current doubles. (a) is wrong: voltage drives current. (b) is backwards: halving happens when resistance doubles. (d) is wrong: the circuit is still complete and powered."
    },
    {
      "q": "In the water analogy, resistance is most like…",
      "choices": [
        "the water pressure",
        "the flow rate of the water",
        "the narrowness of the pipe",
        "the size of the water tank"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Resistance is the narrowness of the pipe — it restricts flow. (a) is voltage (pressure). (b) is current (flow rate). (d) has no direct electrical twin in this analogy."
    },
    {
      "q": "What is conventional current?",
      "choices": [
        "The actual flow of electrons from negative to positive",
        "The agreed direction used on paper: from positive to negative",
        "The current in a short circuit only",
        "The current that flows through insulators"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Conventional current is the agreed paper direction, positive to negative. (a) is electron flow, the opposite direction. (c) is wrong: conventional current is used for every circuit. (d) is wrong: almost no current flows through insulators."
    },
    {
      "q": "Which resistance is the largest?",
      "choices": [
        "470 Ω",
        "4.7 kΩ",
        "0.47 MΩ",
        "47 Ω"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 0.47 MΩ = 470,000 Ω, which is far bigger than 4.7 kΩ (4,700 Ω), 470 Ω, or 47 Ω. (b) 4.7 kΩ is 4,700 Ω — large, but not as large as 470,000 Ω. (a) and (d) are smaller still."
    },
    {
      "q": "In a single loop with one battery and one resistor, where is the current largest?",
      "choices": [
        "Right after the battery",
        "Inside the resistor",
        "Right before the battery",
        "It is the same at every point in the loop"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Charge cannot pile up or vanish, so the same current flows at every point in a single loop. (a), (b), and (c) are all wrong for the same reason: current does not get used up or build up as it goes around."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Voltage, Current & Resistance: Quick Reference</h3>\n<p><strong>Core idea:</strong> Voltage pushes (volts), current flows (amps), resistance opposes (ohms). Raise the push and current rises; raise the opposition and current falls.</p>\n<p><strong>Key terms:</strong> Voltage · Volt · Current · Ampere · Milliamp · Resistance · Ohm · Kilo-ohm.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>1 A = 1,000 mA; 1 kΩ = 1,000 Ω; 1 MΩ = 1,000,000 Ω.</li>\n<li>Current is the same at every point in a single loop.</li>\n<li>Voltage is always a difference between two points.</li>\n<li>Conventional current runs positive to negative on paper.</li></ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
