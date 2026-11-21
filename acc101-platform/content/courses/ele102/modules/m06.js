// ele102 - Module 6: Combination Circuits
module.exports = {
  "number": 6,
  "slug": "combination-circuits",
  "title": "Combination Circuits",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe a combination (series-parallel) circuit and identify its series and parallel parts.",
    "Reduce a combination circuit step by step to a single equivalent resistance.",
    "Calculate total current and the voltage and current in each part.",
    "Explain how a combination circuit behaves when a component opens or shorts.",
    "Apply series and parallel rules together to solve a real circuit."
  ],
  "sections": [
    {
      "heading": "What a Combination Circuit Is",
      "html": "<p>A <strong>combination circuit</strong> — also called a series-parallel circuit — has both series and parallel parts in one circuit. Most real circuits are combination circuits: a house has parallel branches, but each branch has switches and loads in series; a motor control has parallel paths with series components in each. The analysis is the same as before, done in steps: find the parallel parts and reduce them to one equivalent resistance, then treat the result as a series circuit.</p>\n<p>The method is reduction. Work from the far end of the circuit back toward the source, combining resistors two at a time: parallel resistors combine with the reciprocal formula or product-over-sum, series resistors combine by adding. Each combination replaces two or more resistors with one equivalent resistor, and the circuit gets simpler with each step until only one resistor is left — the total resistance. Then Ohm's law gives the total current, and the steps are run in reverse to find the voltage and current in each part.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Reduce from the far end toward the source, then work back out. Every combination circuit is just series and parallel rules, applied in order.</div>"
    },
    {
      "heading": "Reducing a Combination Circuit",
      "html": "<p>Worked example: a 120-volt source feeds a 10-ohm resistor in series with a parallel pair of 20-ohm and 30-ohm resistors. Step 1: combine the parallel pair. R<sub>pair</sub> = (20 × 30) ÷ (20 + 30) = 600 ÷ 50 = 12 ohms. Step 2: the circuit is now 10 ohms in series with 12 ohms, so R<sub>T</sub> = 10 + 12 = 22 ohms. Step 3: the total current is I<sub>T</sub> = 120 ÷ 22 ≈ 5.45 amps, and that current flows through the 10-ohm resistor.</p>\n<p>Step 4: the voltage drop across the 10-ohm resistor is V = 5.45 × 10 ≈ 54.5 volts. Step 5: the rest of the source voltage, 120 − 54.5 = 65.5 volts, appears across the parallel pair — the same voltage across both the 20-ohm and the 30-ohm resistors. Step 6: the branch currents are 65.5 ÷ 20 ≈ 3.27 amps and 65.5 ÷ 30 ≈ 2.18 amps, and they add up to 5.45 amps, the total current. The loop is closed: every number checks against another.</p>"
    },
    {
      "heading": "Redrawing the Circuit",
      "html": "<p>The hardest part of a combination circuit is seeing it. A circuit drawn with wires crossing and components scattered can hide which resistors are in series and which are in parallel. The fix is to redraw it: straighten the wires, put the source on the left, and lay the branches out so the parallel parts are visibly side by side and the series parts are visibly end to end. Two resistors are in parallel if both of their ends connect to the same two points; they are in series if the same current must flow through both.</p>\n<p>Redrawing is not cheating — it is the skill. Electricians redraw schematics on the job, on paper and in their heads, to see what a circuit is doing. The habit is to trace the current's path from the source, mark each junction where the current splits, and label each section as series or parallel before doing any math.</p>"
    },
    {
      "heading": "Faults in Combination Circuits",
      "html": "<p>A fault in a combination circuit affects only part of it, and the part it affects tells you where the fault is. If a parallel branch opens, the other branch in that pair keeps working, the pair's equivalent resistance rises, the total resistance rises, and the total current falls — but the series resistor now drops more voltage, because it carries the same total current through a larger share of the circuit. If a series resistor opens, everything stops, because the only path is broken. If a resistor shorts, the current through the rest of the circuit rises and the breaker may trip.</p>\n<p>Troubleshooting a combination circuit means working the same way as the analysis: measure the total current, measure the voltage at each junction, and compare the readings with the calculated values. A voltage that is too high across a resistor means too much current or too much resistance there; a voltage that is zero where it should not be means an open or a short nearby. The math tells you what should be there; the meter tells you what is there; the difference is the fault.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>A combination circuit has both series and parallel parts; reduce it step by step from the far end toward the source.</li>\n<li>Parallel parts combine with the reciprocal formula or product-over-sum; series parts combine by adding.</li>\n<li>After reduction, I<sub>T</sub> = E ÷ R<sub>T</sub>; then work back out to find each voltage drop and branch current.</li>\n<li>Redraw a confusing circuit so the series and parallel parts are visible before doing math.</li>\n<li>A series open stops everything; a parallel open changes only its part; a short raises current.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Combining series resistors with the parallel formula, or parallel resistors by adding. Label each section as series or parallel first, then pick the formula.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Forgetting to work back out after reducing. The total current is only the start — the voltage and current in each part are the answer.</div>\n<p><strong>Ready-to-Work link:</strong> If you can reduce a series-parallel circuit, find the total current, and work back out to every voltage and current, you have this module. Module 7 covers Kirchhoff's laws.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Combination circuit",
      "def": "A series-parallel circuit with both series and parallel parts."
    },
    {
      "term": "Series-parallel circuit",
      "def": "Another name for a combination circuit."
    },
    {
      "term": "Equivalent resistance",
      "def": "A single resistance that has the same effect as a combination of resistors."
    },
    {
      "term": "Reduction",
      "def": "Combining resistors step by step, from the far end toward the source, until one total resistance is left."
    },
    {
      "term": "Junction",
      "def": "A point where the current splits into two or more paths, or where paths join."
    },
    {
      "term": "Redraw",
      "def": "Re-sketching a circuit so its series and parallel parts are visible."
    },
    {
      "term": "Total resistance (R_T)",
      "def": "The single equivalent resistance of the whole circuit."
    },
    {
      "term": "Total current (I_T)",
      "def": "The current from the source, equal to E ÷ R_T."
    },
    {
      "term": "Voltage drop",
      "def": "The voltage across a component, equal to I × R for that component."
    },
    {
      "term": "Branch current",
      "def": "The current through one branch of a parallel part."
    },
    {
      "term": "Node",
      "def": "A connection point in a circuit where two or more components meet."
    },
    {
      "term": "Schematic",
      "def": "A drawing of a circuit using symbols for its components."
    },
    {
      "term": "Troubleshooting",
      "def": "Finding a fault by comparing measured values with calculated values."
    },
    {
      "term": "Series part",
      "def": "A section of a circuit where the same current flows through each component."
    },
    {
      "term": "Parallel part",
      "def": "A section of a circuit where components share the same voltage."
    }
  ],
  "video": {
    "title": "solving series parallel circuits",
    "embedUrl": "https://www.youtube.com/embed/0MKcxCHkT1c",
    "note": "A series-parallel problem worked step by step. As you watch, solve each step yourself before the answer is shown.",
    "more": [
      {
        "title": "Series-parallel combination circuits",
        "url": "https://www.youtube.com/watch?v=U2reL3V10M0"
      },
      {
        "title": "Let's Talk About COMBINATION Circuits: Voltage, Current, Resistance, and Power",
        "url": "https://www.youtube.com/watch?v=xYK19P3txn4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 10 Ω resistor is in series with a parallel pair of 20 Ω and 30 Ω resistors, across a 120 V source. What is the equivalent resistance of the parallel pair?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Use product-over-sum: (20 × 30) ÷ (20 + 30) = 600 ÷ 50 = 12 ohms. Step 2: The pair is equivalent to a single 12 Ω resistor. Step 3: The circuit is now 10 Ω in series with 12 Ω.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> In the same circuit, what is the total resistance and the total current?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: R_T = 10 + 12 = 22 ohms. Step 2: I_T = 120 ÷ 22 ≈ 5.45 amps. Step 3: The total current is about 5.45 amps.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> What is the voltage drop across the 10 Ω resistor?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: V = I × R = 5.45 × 10 ≈ 54.5 volts. Step 2: The rest of the source voltage, 120 − 54.5 = 65.5 volts, appears across the parallel pair. Step 3: The drop is about 54.5 volts.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> What is the current through the 20 Ω branch?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The voltage across the parallel pair is about 65.5 volts. Step 2: I = 65.5 ÷ 20 ≈ 3.27 amps. Step 3: The 20 Ω branch carries about 3.27 amps.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Check your work: do the two branch currents add up to the total current?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The 20 Ω branch carries about 3.27 amps. Step 2: The 30 Ω branch carries 65.5 ÷ 30 ≈ 2.18 amps. Step 3: 3.27 + 2.18 = 5.45 amps, which matches the total current.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> The 30 Ω branch opens. What happens to the total resistance and the total current?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The parallel pair becomes just the 20 Ω resistor. Step 2: R_T = 10 + 20 = 30 ohms. Step 3: I_T = 120 ÷ 30 = 4 amps — the total resistance rose and the total current fell.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A combination circuit is a circuit with:",
      "choices": [
        "Only series parts",
        "Only parallel parts",
        "Both series and parallel parts",
        "No resistors"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A combination circuit has both series and parallel parts. (a) Only series parts is a series circuit. (b) Only parallel parts is a parallel circuit. (d) Combination circuits have resistors."
    },
    {
      "q": "The first step in solving a combination circuit is to:",
      "choices": [
        "Measure the total current",
        "Reduce the far-end parallel parts to one equivalent resistance",
        "Guess the answer",
        "Remove a resistor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Reduce from the far end toward the source, combining parallel parts first. (a) Measuring comes after calculating, for troubleshooting. (c) Guessing is not a method. (d) Removing a resistor changes the circuit."
    },
    {
      "q": "A 10 Ω resistor is in series with a parallel pair of 20 Ω and 30 Ω. The total resistance is:",
      "choices": [
        "12 Ω",
        "22 Ω",
        "60 Ω",
        "42 Ω"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The pair is (20 × 30) ÷ 50 = 12 ohms, and 10 + 12 = 22 ohms. (a) 12 ohms is the pair alone. (c) 60 ohms is the series sum of all three. (d) 42 ohms is not a correct combination."
    },
    {
      "q": "Two resistors are in parallel if:",
      "choices": [
        "The same current flows through both",
        "Both of their ends connect to the same two points",
        "They are next to each other on the drawing",
        "They have the same value"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Parallel means both ends share the same two points. (a) The same current through both is series. (c) Position on the drawing does not decide it. (d) Value does not decide it."
    },
    {
      "q": "In the worked example, the voltage across the parallel pair is about:",
      "choices": [
        "10 volts",
        "54.5 volts",
        "65.5 volts",
        "120 volts"
      ],
      "answer": 2,
      "explanation": "Correct: (c). The 10 Ω resistor drops about 54.5 V, leaving 120 − 54.5 = 65.5 V across the pair. (a) 10 volts is not a voltage in the circuit. (b) 54.5 volts is the drop across the series resistor. (d) 120 volts is the source voltage."
    },
    {
      "q": "If a series resistor opens in a combination circuit:",
      "choices": [
        "Only its branch stops",
        "Everything stops, because the only path is broken",
        "The current doubles",
        "Nothing changes"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A series open breaks the only path, so all current stops. (a) A parallel branch open affects only its part. (c) Current cannot rise through a broken path. (d) An open changes everything."
    },
    {
      "q": "Redrawing a confusing circuit helps because it:",
      "choices": [
        "Makes the circuit prettier",
        "Makes the series and parallel parts visible so the right formulas can be used",
        "Changes the resistance",
        "Removes the source"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Redrawing reveals which parts are series and which are parallel. (a) Appearance is not the point. (c) Redrawing does not change the circuit. (d) The source stays."
    },
    {
      "q": "The branch currents in a parallel pair must:",
      "choices": [
        "Be equal",
        "Add up to the current entering the pair",
        "Be zero",
        "Exceed the total current"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The currents entering a junction equal the currents leaving it — the branches sum to the total. (a) Branch currents are equal only if resistances are equal. (c) Branch currents are not zero. (d) The branches sum to the total; none exceeds it."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Combination Circuits: Quick Reference</h3>\n<p><strong>Core idea:</strong> Reduce from the far end toward the source, then work back out. Every combination circuit is series and parallel rules, applied in order.</p>\n<p><strong>Method:</strong> Parallel parts: reciprocal or product-over-sum · Series parts: add · Then I_T = E ÷ R_T · Then work back out to each drop and branch current.</p>\n<p><strong>Test:</strong> Two resistors are parallel if both ends share the same two points; series if the same current must flow through both.</p>\n<p><strong>Faults:</strong> Series open = everything stops · Parallel open = only its part changes · Short = current rises.</p>\n<p><strong>Self-check:</strong> Solve the 10 Ω + (20 Ω || 30 Ω) circuit on 120 V: R_T, I_T, each drop, each branch current, without looking.</p>\n"
};
