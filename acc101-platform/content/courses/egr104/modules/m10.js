// egr104 - Module 10: Circuit Theorems: Thevenin & Norton
module.exports = {
  "number": 10,
  "slug": "thevenin-and-norton",
  "title": "Circuit Theorems: Thevenin & Norton",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a Thevenin equivalent is: one voltage source in series with one resistance.",
    "Find Vth (open-circuit voltage) and Rth (resistance with sources turned off).",
    "Explain what a Norton equivalent is: one current source in parallel with one resistance.",
    "Convert between Thevenin and Norton equivalents.",
    "Use maximum power transfer: a load gets the most power when RL = Rth."
  ],
  "sections": [
    {
      "heading": "One Big Idea: Replace a Mess with a Simple Pair",
      "html": "<p>Real circuits are messy: several sources, many resistors, branches everywhere. Thevenin's theorem says that any linear circuit, seen from two terminals, behaves exactly like one voltage source (Vth) in series with one resistor (Rth). If you only care about what happens at those two terminals — what voltage a load sees, what current it draws — you can throw away the whole mess and use the simple pair instead.</p>\n<p>Norton's theorem says the same thing in a different shape: any linear circuit, seen from two terminals, behaves exactly like one current source (IN) in parallel with one resistor (RN). The two views describe the same circuit, and you can convert between them. Which one you use depends on what is easier for the problem in front of you.</p>\n"
    },
    {
      "heading": "Finding Vth and Rth",
      "html": "<p>Vth is the open-circuit voltage: remove the load, and measure (or calculate) the voltage across the empty terminals. Rth is the resistance looking back into the circuit from those terminals with all independent sources turned off — voltage sources replaced by short circuits (a wire) and current sources replaced by open circuits (a break). Then combine the remaining resistors with the series and parallel rules you already know.</p>\n<p>Worked example: a 12 V battery feeds a divider — 4 Ω in series with 8 Ω — and the load connects across the 8 Ω resistor. Remove the load: Vth is the voltage across the 8 Ω resistor with nothing connected, which is the divider rule: Vth = 12 × 8 ÷ (4 + 8) = 8 V. Rth: short the 12 V battery, so the 4 Ω and 8 Ω resistors are in parallel from the terminals: Rth = (4 × 8) ÷ (4 + 8) = 32 ÷ 12 ≈ 2.67 Ω. The whole circuit now looks like an 8 V source in series with 2.67 Ω.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Vth = voltage across the empty terminals. Rth = resistance seen from the terminals with sources turned off. The equivalent circuit is Vth in series with Rth.</div></p>\n"
    },
    {
      "heading": "Using the Equivalent Circuit",
      "html": "<p>Now connect an 8 Ω load to the equivalent: the circuit is just 8 V, 2.67 Ω, and 8 Ω in series. Load current: I = 8 ÷ (2.67 + 8) = 8 ÷ 10.67 ≈ 0.75 A. Load voltage: 0.75 × 8 = 6 V. Check against the original circuit: the 8 Ω load in parallel with the 8 Ω resistor gives 4 Ω; total resistance 4 + 4 = 8 Ω; total current 12 ÷ 8 = 1.5 A; voltage at the node 12 − 1.5 × 4 = 6 V ✓, and the load current 6 ÷ 8 = 0.75 A ✓. Same answer, far less work — and if you now swap the load for a different resistor, you do not redo the whole circuit, only the last little calculation.</p>\n"
    },
    {
      "heading": "Norton and Maximum Power Transfer",
      "html": "<p>The Norton equivalent of the same circuit is a current source IN = Vth ÷ Rth = 8 ÷ 2.67 = 3 A in parallel with RN = Rth = 2.67 Ω. Check: short the terminals of the original circuit and the short-circuit current is the 12 V battery through the 4 Ω resistor alone — 12 ÷ 4 = 3 A ✓. That is always true: IN is the short-circuit current, and RN = Rth.</p>\n<p>Maximum power transfer: a load gets the most power from a source when the load resistance equals the source resistance — RL = Rth. In our example, RL = 2.67 Ω gives the maximum power: I = 8 ÷ (2.67 + 2.67) = 1.5 A, and P = I² × RL = 2.25 × 2.67 ≈ 6 W. Any other load gets less. This matters when you design audio amplifiers, antennas, and sensors — but note the price: at maximum power transfer, half the power is wasted in the source resistance, so it is a bad idea for power distribution, where efficiency matters more than squeezing out the last watt.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Thevenin: any linear circuit looks like Vth in series with Rth from two terminals.</li><li>Vth is the open-circuit voltage; Rth is the resistance with sources turned off.</li><li>Norton: the same circuit as IN in parallel with RN, where IN = Vth ÷ Rth and RN = Rth.</li><li>Maximum power goes to the load when RL = Rth — but half the power is wasted in the source.</li><li>These theorems only apply to linear circuits (resistors and linear sources).</li></ul></p>\n<p><strong>Common mistake:</strong> Finding Rth without turning the sources off. A voltage source left in place is not a resistance — it must be replaced by a short circuit before you combine resistors.</p>\n<p><strong>Common mistake:</strong> Using the load resistor when finding Vth. Vth is the voltage with the load removed — the open-circuit voltage. Leave the load in and you will measure something else.</p>\n<p><strong>Ready check:</strong> If you can find Vth (8 V) and Rth (2.67 Ω) for the 12 V, 4 Ω, 8 Ω divider, and the load current for an 8 Ω load (0.75 A), you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Thevenin's theorem",
      "def": "Any linear circuit, seen from two terminals, equals one voltage source Vth in series with one resistance Rth."
    },
    {
      "term": "Thevenin voltage (Vth)",
      "def": "The open-circuit voltage across two terminals with the load removed."
    },
    {
      "term": "Thevenin resistance (Rth)",
      "def": "The resistance seen looking back into a circuit from two terminals, with sources turned off."
    },
    {
      "term": "Norton's theorem",
      "def": "Any linear circuit, seen from two terminals, equals one current source IN in parallel with one resistance RN."
    },
    {
      "term": "Norton current (IN)",
      "def": "The short-circuit current between two terminals; IN = Vth ÷ Rth."
    },
    {
      "term": "Open-circuit voltage",
      "def": "The voltage across two terminals with nothing connected between them."
    },
    {
      "term": "Short-circuit current",
      "def": "The current that flows when two terminals are connected by a wire."
    },
    {
      "term": "Turn off a source",
      "def": "Replacing a voltage source with a short circuit and a current source with an open circuit, to find Rth."
    },
    {
      "term": "Maximum power transfer",
      "def": "A load receives the most power when its resistance equals the source resistance: RL = Rth."
    },
    {
      "term": "Linear circuit",
      "def": "A circuit of resistors and linear sources, where doubling the input doubles the output; the theorems only apply here."
    },
    {
      "term": "Terminal",
      "def": "One of the two points where a load connects to the rest of a circuit."
    },
    {
      "term": "Equivalent circuit",
      "def": "A simpler circuit that behaves exactly like a more complicated one at its terminals."
    }
  ],
  "video": {
    "title": "Thevenin Theorem: What is it? | Electrical4U",
    "embedUrl": "https://www.youtube.com/embed/rwHgicnjJEE",
    "note": "Thevenin's theorem with a worked example: find Vth and Rth, then the load current.",
    "more": [
      {
        "title": "Thevenin's Theorem | KnowElectronic",
        "url": "https://www.youtube.com/watch?v=veAFVTIpKyM"
      },
      {
        "title": "Thevenin's Theorem - Circuit Analysis",
        "url": "https://www.youtube.com/watch?v=zTDgziJC-q8"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 12 V battery feeds a divider of 4 Ω and 8 Ω. The load connects across the 8 Ω resistor. Find Vth and Rth.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Vth is the open-circuit voltage across the 8 Ω resistor: Vth = 12 × 8 ÷ (4 + 8) = 8 V. Step 2: Rth — short the battery, so 4 Ω and 8 Ω are in parallel: Rth = (4 × 8) ÷ (4 + 8) = 32 ÷ 12 ≈ 2.67 Ω. Step 3: The equivalent is an 8 V source in series with 2.67 Ω.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Using the equivalent from Problem 1, find the current through and the voltage across an 8 Ω load.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Total resistance: 2.67 + 8 = 10.67 Ω. Step 2: Load current: I = 8 ÷ 10.67 ≈ 0.75 A. Step 3: Load voltage: 0.75 × 8 = 6 V. (Check in the original circuit: the load in parallel with 8 Ω gives 4 Ω, total 8 Ω, total current 1.5 A, node voltage 6 V ✓.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Find the Norton equivalent (IN and RN) of the circuit in Problem 1.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: RN = Rth = 2.67 Ω. Step 2: IN = Vth ÷ Rth = 8 ÷ 2.67 = 3 A. Step 3: Check: short the terminals of the original circuit and the current is the battery through the 4 Ω resistor alone: 12 ÷ 4 = 3 A ✓.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> For the circuit in Problem 1, what load resistance gets the maximum power, and how much power is that?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Maximum power when RL = Rth = 2.67 Ω. Step 2: Current: I = 8 ÷ (2.67 + 2.67) = 8 ÷ 5.33 ≈ 1.5 A. Step 3: Power: P = I² × RL = 2.25 × 2.67 ≈ 6 W. (Note: the source wastes another 6 W in Rth — half the power is lost, which is why maximum power transfer is not used for power distribution.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A circuit has a 24 V source, a 6 Ω resistor in series, and a 12 Ω resistor to the return. The load connects across the 12 Ω resistor. Find Vth and Rth, then the load current for a 12 Ω load.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Vth = 24 × 12 ÷ (6 + 12) = 24 × 12 ÷ 18 = 16 V. Step 2: Rth = (6 × 12) ÷ (6 + 12) = 72 ÷ 18 = 4 Ω. Step 3: Load current: I = 16 ÷ (4 + 12) = 16 ÷ 16 = 1 A; load voltage = 12 V.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A student finds Rth by measuring the resistance across the terminals with the battery still connected and the load still attached. Explain the two errors.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The battery must be turned off (replaced by a short) before finding Rth — a live source is not a resistance and will corrupt the measurement and can damage the meter. Step 2: The load must be removed — Rth is the resistance of the circuit without the load; leaving it in adds the load's resistance to the answer. Step 3: Correct procedure: remove the load, turn off the sources, then combine the remaining resistors.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What is the Thevenin equivalent of a linear circuit seen from two terminals?",
      "choices": [
        "A current source in parallel with a resistor",
        "A voltage source in series with a resistor",
        "A single resistor only",
        "A voltage source in parallel with a resistor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Thevenin: Vth in series with Rth. (a) is the Norton equivalent. (c) is wrong: the source matters, not just the resistance. (d) is wrong: the source is in series, not parallel."
    },
    {
      "q": "How do you find Vth?",
      "choices": [
        "Measure the short-circuit current",
        "Measure the voltage across the terminals with the load removed",
        "Measure the resistance with the battery connected",
        "Add all the resistors together"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Vth is the open-circuit voltage — load removed, terminals empty. (a) gives the Norton current IN. (c) is wrong: sources must be turned off for resistance work. (d) is the series resistance rule, not Vth."
    },
    {
      "q": "In the 12 V, 4 Ω, 8 Ω divider example (load across the 8 Ω resistor), what is Vth?",
      "choices": [
        "12 V",
        "4 V",
        "8 V",
        "2.67 V"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Vth = 12 × 8 ÷ (4 + 8) = 8 V. (a) 12 V is the whole battery voltage. (b) 4 V is the drop across the 4 Ω resistor. (d) 2.67 V confuses Vth with Rth (2.67 Ω)."
    },
    {
      "q": "In that same example, what is Rth?",
      "choices": [
        "12 Ω",
        "8 Ω",
        "4 Ω",
        "About 2.67 Ω"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Short the battery: 4 Ω || 8 Ω = 32 ÷ 12 ≈ 2.67 Ω. (a) 12 Ω adds the resistors. (b) 8 Ω is one resistor alone. (c) 4 Ω is the other resistor alone."
    },
    {
      "q": "What is the Norton current IN for that same circuit?",
      "choices": [
        "8 A",
        "3 A",
        "0.75 A",
        "1.5 A"
      ],
      "answer": 1,
      "explanation": "Correct: (b). IN = Vth ÷ Rth = 8 ÷ 2.67 = 3 A. (Also: short the terminals and the battery drives 12 ÷ 4 = 3 A.) (a) 8 A is the Vth number with the wrong unit. (c) 0.75 A is the load current with an 8 Ω load. (d) 1.5 A is the total current in the original circuit with the load attached."
    },
    {
      "q": "A load gets maximum power from a source when…",
      "choices": [
        "RL is as small as possible",
        "RL = Rth",
        "RL is as large as possible",
        "RL = 0 Ω"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Maximum power transfer happens when the load resistance equals the source (Thevenin) resistance. (a) and (d) are wrong: a tiny load takes almost no voltage. (c) is wrong: a huge load takes almost no current."
    },
    {
      "q": "Why is maximum power transfer a bad idea for power distribution (like the grid)?",
      "choices": [
        "It gives the load too much voltage",
        "Half the power is wasted in the source resistance",
        "It only works with AC",
        "It needs a bigger load resistor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). At RL = Rth, half the total power is dissipated in Rth — 50% efficiency is terrible for distribution. (a) is wrong: the load gets half the source voltage. (c) is wrong: the theorem applies to DC too. (d) is wrong: the load is not the problem."
    },
    {
      "q": "To find Rth, you turn off the sources. What does “turn off” mean for a voltage source?",
      "choices": [
        "Remove it and leave the terminals open",
        "Replace it with a short circuit (a wire)",
        "Replace it with a bigger voltage source",
        "Leave it exactly as it is"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A voltage source turned off becomes a short circuit (0 V across it). (a) is what you do to a current source. (c) is wrong: changing the source changes the circuit. (d) is wrong: a live source is not a resistance."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Circuit Theorems: Thevenin & Norton: Quick Reference</h3>\n<p><strong>Core idea:</strong> Any linear circuit looks like Vth in series with Rth — or IN in parallel with RN. Maximum power when RL = Rth.</p>\n<p><strong>Key terms:</strong> Thevenin's theorem · Vth · Rth · Norton's theorem · IN · Maximum power transfer.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Vth = open-circuit voltage; Rth = resistance with sources off.</li>\n<li>IN = Vth ÷ Rth; RN = Rth.</li>\n<li>Remove the load before finding Vth and Rth.</li>\n<li>Maximum power at RL = Rth — but half the power is wasted.</li></ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
