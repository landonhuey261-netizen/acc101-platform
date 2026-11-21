// ele102 - Module 5: Parallel Circuits
module.exports = {
  "number": 5,
  "slug": "parallel-circuits",
  "title": "Parallel Circuits",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe a parallel circuit and how voltage, current, and resistance behave in it.",
    "Calculate total resistance in a parallel circuit.",
    "Calculate total current and the current through each branch.",
    "Use the current divider rule to find a branch current.",
    "Explain what happens in a parallel circuit when one branch opens or shorts."
  ],
  "sections": [
    {
      "heading": "What a Parallel Circuit Is",
      "html": "<p>A <strong>parallel circuit</strong> is a circuit with more than one path for current: the components are connected across the same two points, like lanes on a multi-lane road, and each branch gets the full source voltage. A house's wiring is a parallel circuit — every outlet and light is connected across the same 120 volts, and turning off one light does not turn off the others, because each branch is independent.</p>\n<p>Parallel circuits follow the mirror image of the series rules. The voltage is the same across every branch. The total current is the sum of the branch currents. The total resistance is less than the smallest branch resistance. And the total power is the sum of the power used by each branch. Learn these four rules and you can solve any parallel circuit.</p>\n<div class=\"callout\"><strong>Key idea:</strong> In parallel, voltage is the same everywhere; current divides. The smallest resistor gets the biggest share of the current.</div>"
    },
    {
      "heading": "Total Resistance in Parallel",
      "html": "<p>In a parallel circuit, the total resistance is found with the reciprocal formula: <strong>1 ÷ R<sub>T</sub> = 1 ÷ R<sub>1</sub> + 1 ÷ R<sub>2</sub> + 1 ÷ R<sub>3</sub> + …</strong>. Three resistors of 10, 20, and 30 ohms in parallel give 1 ÷ R<sub>T</sub> = 1 ÷ 10 + 1 ÷ 20 + 1 ÷ 30 = 0.1 + 0.05 + 0.0333 = 0.1833, so R<sub>T</sub> = 1 ÷ 0.1833 ≈ 5.45 ohms. Notice that 5.45 ohms is less than the smallest branch, 10 ohms — and that is always true in parallel: the total is always less than the smallest branch.</p>\n<p>For two resistors, the shortcut is the product-over-sum formula: R<sub>T</sub> = (R<sub>1</sub> × R<sub>2</sub>) ÷ (R<sub>1</sub> + R<sub>2</sub>). For two equal resistors, the total is half of one: two 20-ohm resistors in parallel give 10 ohms. Adding a branch in parallel always decreases the total resistance and always increases the total current — which is why plugging too many loads into one circuit trips the breaker.</p>"
    },
    {
      "heading": "Branch Currents & the Current Divider",
      "html": "<p>Each branch current is found with Ohm's law, using the source voltage and that branch's resistance: I<sub>x</sub> = E ÷ R<sub>x</sub>. With a 120-volt source and branches of 10, 20, and 30 ohms, the currents are 120 ÷ 10 = 12 amps, 120 ÷ 20 = 6 amps, and 120 ÷ 30 = 4 amps. The total current is the sum: 12 + 6 + 4 = 22 amps. The same total comes from the total resistance: I<sub>T</sub> = E ÷ R<sub>T</sub> = 120 ÷ 5.45 ≈ 22 amps.</p>\n<p>The <strong>current divider rule</strong> gives a shortcut for two branches: the current through one branch is the total current times the other branch's resistance divided by the sum, I<sub>1</sub> = I<sub>T</sub> × (R<sub>2</sub> ÷ (R<sub>1</sub> + R<sub>2</sub>)). The rule looks backwards at first — a branch's current depends on the other branch's resistance — but it makes sense: the smaller resistor takes the bigger share of the current, so its share is set by the bigger resistor's size.</p>"
    },
    {
      "heading": "Opens, Shorts & Power in Parallel",
      "html": "<p>When a branch opens in a parallel circuit — a bulb burns out, a wire breaks — the other branches keep working, because each has its own path to the source. The total current falls by the amount that branch was carrying, and the total resistance rises. That is why one dead outlet in a house does not kill the whole house.</p>\n<p>When a branch shorts in a parallel circuit, the result is dangerous: the short is a near-zero-resistance path across the full source voltage, so the current through it is enormous, and the breaker must trip to protect the wire. The other branches lose their voltage while the short is present. Power in a parallel circuit is the sum of the branch powers: P<sub>T</sub> = P<sub>1</sub> + P<sub>2</sub> + P<sub>3</sub> + …, and it also equals E × I<sub>T</sub>. In the example, the branches use 1,440 W, 720 W, and 480 W, for a total of 2,640 watts — which matches 120 volts × 22 amps.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Parallel: more than one path; the same voltage across every branch.</li>\n<li>1 ÷ R<sub>T</sub> = 1 ÷ R<sub>1</sub> + 1 ÷ R<sub>2</sub> + …; R<sub>T</sub> is always less than the smallest branch.</li>\n<li>Two resistors: R<sub>T</sub> = (R<sub>1</sub> × R<sub>2</sub>) ÷ (R<sub>1</sub> + R<sub>2</sub>).</li>\n<li>Branch currents: I<sub>x</sub> = E ÷ R<sub>x</sub>; I<sub>T</sub> is the sum of the branch currents.</li>\n<li>An open branch leaves the others working; a shorted branch draws enormous current and trips the breaker.</li>\n<li>Power: P<sub>T</sub> = P<sub>1</sub> + P<sub>2</sub> + … = E × I<sub>T</sub>.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Adding resistances in parallel the way you add them in series. Parallel total resistance is always less than the smallest branch — if your answer is bigger, you used the wrong formula.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Using different voltages for different branches in a parallel circuit. The voltage is the same across every branch — there is only one voltage.</div>\n<p><strong>Ready-to-Work link:</strong> If you can find total resistance, total current, each branch current, and the power in a three-branch parallel circuit, you have this module. Module 6 covers combination circuits.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Parallel circuit",
      "def": "A circuit with more than one path for current; the same voltage is across every branch."
    },
    {
      "term": "Branch",
      "def": "One of the parallel paths in a circuit."
    },
    {
      "term": "Total resistance (R_T)",
      "def": "The equivalent resistance of a parallel circuit; always less than the smallest branch."
    },
    {
      "term": "Reciprocal formula",
      "def": "1 ÷ R_T = 1 ÷ R_1 + 1 ÷ R_2 + …; the formula for parallel total resistance."
    },
    {
      "term": "Product-over-sum",
      "def": "R_T = (R_1 × R_2) ÷ (R_1 + R_2); the shortcut for two resistors in parallel."
    },
    {
      "term": "Branch current",
      "def": "The current through one branch of a parallel circuit: I_x = E ÷ R_x."
    },
    {
      "term": "Total current (I_T)",
      "def": "The sum of the branch currents in a parallel circuit."
    },
    {
      "term": "Current divider rule",
      "def": "I_1 = I_T × (R_2 ÷ (R_1 + R_2)); the current through one of two parallel branches."
    },
    {
      "term": "Open branch",
      "def": "A branch with a broken path; the other branches keep working."
    },
    {
      "term": "Shorted branch",
      "def": "A branch with near-zero resistance; it draws enormous current and trips the breaker."
    },
    {
      "term": "Total power (P_T)",
      "def": "The sum of the power used by each branch; also E × I_T."
    },
    {
      "term": "House wiring",
      "def": "A parallel circuit: every outlet and light gets the full source voltage independently."
    },
    {
      "term": "Equivalent resistance",
      "def": "A single resistance that has the same effect as a combination of resistors."
    },
    {
      "term": "Conductance",
      "def": "The reciprocal of resistance, measured in siemens; conductances add in parallel."
    },
    {
      "term": "Siemens (S)",
      "def": "The unit of conductance, the reciprocal of the ohm."
    }
  ],
  "video": {
    "title": "DC parallel circuits explained  - The basics how parallel circuits work working",
    "embedUrl": "https://www.youtube.com/embed/5uyJezQNSHw",
    "note": "A parallel-circuit walkthrough. As you watch, write down the four parallel rules and check each one against the example shown.",
    "more": [
      {
        "title": "Series & Parallel Circuits: Theory, Uses, and How they WORK",
        "url": "https://www.youtube.com/watch?v=8FrdDrKIADw"
      },
      {
        "title": "Series vs Parallel Circuits",
        "url": "https://www.youtube.com/watch?v=O8GgRIIB1Yc"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Three resistors — 10 Ω, 20 Ω, and 30 Ω — are in parallel across a 120 V source. What is the total resistance?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 1 ÷ R_T = 1/10 + 1/20 + 1/30 = 0.1 + 0.05 + 0.0333 = 0.1833. Step 2: R_T = 1 ÷ 0.1833 ≈ 5.45 ohms. Step 3: The total is less than the smallest branch, 10 ohms, as it must be.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> In the same circuit, what is the total current?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: I_T = E ÷ R_T = 120 ÷ 5.45 ≈ 22 amps. Step 2: Check by adding branch currents: 12 + 6 + 4 = 22 amps. Step 3: The total current is about 22 amps.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> What is the current through the 10 Ω branch?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: I = E ÷ R = 120 ÷ 10 = 12 amps. Step 2: The 10 Ω branch, the smallest resistor, carries the largest current. Step 3: The branch current is 12 amps.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Two resistors, 20 Ω and 30 Ω, are in parallel. What is their total resistance, using product-over-sum?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: R_T = (20 × 30) ÷ (20 + 30) = 600 ÷ 50 = 12 ohms. Step 2: The total is 12 ohms. Step 3: It is less than the smallest branch, 20 ohms, as it must be.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> How much power does the 20 Ω branch use in the 10/20/30 Ω parallel circuit on 120 V?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The 20 Ω branch carries 6 amps. Step 2: P = E × I = 120 × 6 = 720 watts. Step 3: The branch uses 720 watts.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> The 30 Ω branch opens. What happens to the total current and to the other branches?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The other branches keep working, each still at 120 volts. Step 2: The total current falls by the 30 Ω branch's 4 amps, from 22 to 18 amps. Step 3: The total resistance rises, because one path is gone.</p>"
    }
  ],
  "quiz": [
    {
      "q": "In a parallel circuit, the voltage is:",
      "choices": [
        "Different across each branch",
        "The same across every branch",
        "Zero everywhere",
        "Highest across the smallest resistor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Parallel branches are across the same two points, so they share one voltage. (a) Different voltages would need different sources. (c) Voltage is zero only with no source. (d) The voltage is the same across all branches."
    },
    {
      "q": "Three resistors of 10 Ω, 20 Ω, and 30 Ω in parallel have a total resistance of about:",
      "choices": [
        "5.45 Ω",
        "60 Ω",
        "30 Ω",
        "10 Ω"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 1 ÷ R_T = 0.1 + 0.05 + 0.0333 = 0.1833, so R_T ≈ 5.45 ohms. (b) 60 ohms is the series total. (c) 30 ohms is one branch. (d) 10 ohms is the smallest branch, and the total is always less than it."
    },
    {
      "q": "Two resistors, 20 Ω and 30 Ω, in parallel have a total resistance of:",
      "choices": [
        "12 Ω",
        "25 Ω",
        "50 Ω",
        "600 Ω"
      ],
      "answer": 0,
      "explanation": "Correct: (a). (20 × 30) ÷ (20 + 30) = 600 ÷ 50 = 12 ohms. (b) 25 ohms is the average, not the parallel total. (c) 50 ohms is the series sum. (d) 600 ohms is the product, not the total."
    },
    {
      "q": "A 120 V source feeds parallel branches of 10 Ω, 20 Ω, and 30 Ω. The total current is about:",
      "choices": [
        "4 amps",
        "12 amps",
        "22 amps",
        "60 amps"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Branch currents are 12 + 6 + 4 = 22 amps. (a) 4 amps is the smallest branch current. (b) 12 amps is the largest branch current. (d) 60 amps is far too high."
    },
    {
      "q": "In a parallel circuit, the smallest resistor carries:",
      "choices": [
        "The smallest current",
        "The largest current",
        "No current",
        "The same current as the largest resistor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Current divides inversely to resistance, so the smallest resistor takes the most current. (a) The largest resistor carries the smallest current. (c) Every branch carries current. (d) Branch currents differ with resistance."
    },
    {
      "q": "Adding a branch in parallel:",
      "choices": [
        "Increases total resistance",
        "Decreases total resistance and increases total current",
        "Does not change anything",
        "Opens the circuit"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Another path lowers the total resistance and raises the total current. (a) Adding in series increases total resistance. (c) Adding a branch changes the circuit. (d) Adding a branch does not open anything."
    },
    {
      "q": "A branch opens in a parallel circuit. The other branches:",
      "choices": [
        "Stop working",
        "Keep working at the same voltage",
        "Get more voltage",
        "Short out"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Each branch is independent, so the others keep working at the full source voltage. (a) That is what happens in a series circuit. (c) The voltage stays the same. (d) An open does not short anything."
    },
    {
      "q": "House wiring is a parallel circuit because:",
      "choices": [
        "Every outlet gets the full voltage and works independently",
        "There is only one path",
        "The current is the same everywhere",
        "The total resistance is the sum of the branches"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Each outlet and light is across the same voltage and works independently. (b) One path is a series circuit. (c) The same current everywhere is a series circuit. (d) The total resistance is not the sum — it is less than the smallest branch."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Parallel Circuits: Quick Reference</h3>\n<p><strong>Core idea:</strong> In parallel, voltage is the same everywhere; current divides. The smallest resistor gets the biggest share.</p>\n<p><strong>Rules:</strong> Same voltage across every branch · I_T = I_1 + I_2 + I_3 + … · 1 ÷ R_T = 1 ÷ R_1 + 1 ÷ R_2 + … · R_T is always less than the smallest branch.</p>\n<p><strong>Shortcuts:</strong> Two resistors: R_T = (R_1 × R_2) ÷ (R_1 + R_2) · Two equal resistors: R_T = half of one.</p>\n<p><strong>Power:</strong> P_T = P_1 + P_2 + … = E × I_T.</p>\n<p><strong>Faults:</strong> Open branch = others keep working · Shorted branch = enormous current, breaker trips.</p>\n<p><strong>Self-check:</strong> Solve a 10/20/30 Ω parallel circuit on 120 V: R_T, I_T, each branch current, each power, without looking.</p>\n"
};
