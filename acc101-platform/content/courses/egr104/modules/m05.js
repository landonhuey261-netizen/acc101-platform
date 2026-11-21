// egr104 - Module 5: Parallel Circuits
module.exports = {
  "number": 5,
  "slug": "parallel-circuits",
  "title": "Parallel Circuits",
  "estTime": "3–4 hours",
  "objectives": [
    "Recognise a parallel circuit: each branch connected across the same two points.",
    "Explain why every branch in parallel gets the full supply voltage.",
    "Use the reciprocal rule to find the total resistance of parallel resistors.",
    "Work out each branch current and check that they add up to the total current.",
    "Explain why homes are wired in parallel, not in series."
  ],
  "sections": [
    {
      "heading": "Many Paths, One Voltage",
      "html": "<p>In a parallel circuit each component is connected across the same two points, so each branch gets the full supply voltage. A 12 V battery gives 12 V to every branch — the first, the second, and the tenth. That is the opposite of series, where the voltage is shared. It is also why your house is wired in parallel: every socket gets the full 120 V, so every appliance works properly on its own.</p>\n<p>Because each branch is its own path, the current divides: some flows down one branch, some down another. The total current leaving the battery is the sum of all the branch currents. And if one branch breaks, the others keep working — the lights in one room do not go out when a bulb blows in another.</p>\n"
    },
    {
      "heading": "The Reciprocal Rule",
      "html": "<p>Resistances in parallel do not add — they combine by the reciprocal rule: 1/R(total) = 1/R1 + 1/R2 + 1/R3 + … You add the reciprocals, then flip the answer. The total resistance in parallel is always smaller than the smallest single resistor, because adding a branch always adds another path for the current.</p>\n<p>Example: 6 Ω and 12 Ω in parallel. 1/R = 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4, so R(total) = 4 Ω. Smaller than 6 Ω, as it must be. With a 12 V battery, the total current is I = 12 ÷ 4 = 3 A. The branch currents: 12 ÷ 6 = 2 A and 12 ÷ 12 = 1 A, and 2 + 1 = 3 A ✓ — the branches add up to the total.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Parallel: same voltage on every branch. Currents add. Total resistance is smaller than the smallest branch — add a path and the current always grows.</div></p>\n"
    },
    {
      "heading": "Worked Example: Three Resistors in Parallel",
      "html": "<p>Three resistors — 10 Ω, 20 Ω, and 30 Ω — in parallel across 12 V. First the total: 1/R = 1/10 + 1/20 + 1/30. With a common denominator of 60: 6/60 + 3/60 + 2/60 = 11/60, so R(total) = 60/11 ≈ 5.45 Ω. Total current: I = 12 ÷ 5.45 ≈ 2.2 A.</p>\n<p>Branch currents: 12 ÷ 10 = 1.2 A; 12 ÷ 20 = 0.6 A; 12 ÷ 30 = 0.4 A. Add them: 1.2 + 0.6 + 0.4 = 2.2 A ✓. Notice the smallest resistor takes the biggest current — the opposite of series, where the biggest resistor took the biggest voltage. And the classic textbook case: 5 Ω, 10 Ω, and 30 Ω in parallel give exactly 3 Ω (1/5 + 1/10 + 1/30 = 10/30, flipped = 3 Ω).</p>\n"
    },
    {
      "heading": "Two Resistors: The Product-over-Sum Shortcut",
      "html": "<p>For exactly two resistors in parallel there is a shortcut: R(total) = (R1 × R2) ÷ (R1 + R2). For 6 Ω and 12 Ω: (6 × 12) ÷ (6 + 12) = 72 ÷ 18 = 4 Ω ✓ — the same answer as the reciprocal rule. For equal resistors it is even simpler: two 10 Ω resistors in parallel give 5 Ω, three give 10 ÷ 3 ≈ 3.33 Ω, and n equal resistors give R ÷ n.</p>\n<p>Use the shortcut only for two resistors. For three or more, go back to the reciprocal rule. And always sanity-check: if your parallel total comes out larger than the smallest branch, you have made an error.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Parallel means every branch across the same two points; every branch gets the full supply voltage.</li><li>Branch currents add up to the total current (Kirchhoff's current law in action).</li><li>1/R(total) = 1/R1 + 1/R2 + …; the total is always smaller than the smallest branch.</li><li>Two resistors: R(total) = (R1 × R2) ÷ (R1 + R2).</li><li>Smallest resistor takes the biggest branch current.</li><li>One branch failing does not stop the others — that is why homes are wired in parallel.</li></ul></p>\n<p><strong>Common mistake:</strong> Adding parallel resistances like series resistances. 6 Ω and 12 Ω in parallel is 4 Ω, not 18 Ω. If you catch yourself adding, stop and use the reciprocal rule.</p>\n<p><strong>Common mistake:</strong> Using the total current to find a branch voltage drop. In parallel every branch already has the full supply voltage — use the supply voltage for each branch, not a share of it.</p>\n<p><strong>Ready check:</strong> If you can find the total resistance of 6 Ω and 12 Ω in parallel (4 Ω), the branch currents at 12 V (2 A and 1 A), and the total (3 A), you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Parallel circuit",
      "def": "A circuit in which each component is connected across the same two points, giving every branch the full supply voltage."
    },
    {
      "term": "Branch",
      "def": "One of the separate paths in a parallel circuit."
    },
    {
      "term": "Branch current",
      "def": "The current flowing through one branch of a parallel circuit."
    },
    {
      "term": "Reciprocal rule",
      "def": "1/R(total) = 1/R1 + 1/R2 + … — how resistances combine in parallel."
    },
    {
      "term": "Total resistance (parallel)",
      "def": "Always smaller than the smallest branch resistance."
    },
    {
      "term": "Product-over-sum",
      "def": "A shortcut for two resistors in parallel: R(total) = (R1 × R2) ÷ (R1 + R2)."
    },
    {
      "term": "Node",
      "def": "A point where two or more branches meet in a circuit."
    },
    {
      "term": "Current division",
      "def": "How the total current splits between parallel branches: the smallest resistance takes the largest share."
    },
    {
      "term": "Equal resistors in parallel",
      "def": "n equal resistors R in parallel give a total of R ÷ n."
    },
    {
      "term": "House wiring",
      "def": "Wired in parallel so every socket gets the full supply voltage and one appliance failing does not stop the others."
    },
    {
      "term": "Short circuit (parallel)",
      "def": "A near-zero resistance branch in parallel that takes almost all the current and collapses the voltage."
    },
    {
      "term": "Conductance",
      "def": "The ease with which a material lets current flow; the reciprocal of resistance, measured in siemens (S)."
    }
  ],
  "video": {
    "title": "Series & Parallel Circuits - The Learning Circuit | element14",
    "embedUrl": "https://www.youtube.com/embed/Bs-npHUC66M",
    "note": "A hands-on demo of series vs parallel with real bulbs: watch how parallel branches keep their full brightness.",
    "more": [
      {
        "title": "Series and Parallel Circuits | Bozeman Science",
        "url": "https://www.youtube.com/watch?v=x2EuYqj_0Uk"
      },
      {
        "title": "Electrical Circuits - Series and Parallel - For Kids | Learners Habitat",
        "url": "https://www.youtube.com/watch?v=js7Q-r7G9ug"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Resistors of 4 Ω and 12 Ω are connected in parallel across a 24 V battery. Find the total resistance, the total current, and each branch current.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 1/R = 1/4 + 1/12 = 3/12 + 1/12 = 4/12 = 1/3, so R(total) = 3 Ω. (Check with product-over-sum: 4 × 12 ÷ 16 = 3 Ω ✓.) Step 2: Total current I = 24 ÷ 3 = 8 A. Step 3: Branch currents: 24 ÷ 4 = 6 A and 24 ÷ 12 = 2 A; 6 + 2 = 8 A ✓.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Three resistors — 5 Ω, 10 Ω, and 30 Ω — are in parallel across a 12 V supply. Find the total resistance and the three branch currents.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 1/R = 1/5 + 1/10 + 1/30 = 6/30 + 3/30 + 1/30 = 10/30 = 1/3, so R(total) = 3 Ω. Step 2: Branch currents: 12 ÷ 5 = 2.4 A; 12 ÷ 10 = 1.2 A; 12 ÷ 30 = 0.4 A. Step 3: Total: 2.4 + 1.2 + 0.4 = 4 A; check: 12 V ÷ 3 Ω = 4 A ✓.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 120 V household circuit has a 1,200 W heater and a 60 W lamp in parallel. Find the current each draws and the total current.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Heater: I = P ÷ V = 1,200 ÷ 120 = 10 A. Step 2: Lamp: I = 60 ÷ 120 = 0.5 A. Step 3: Total = 10 + 0.5 = 10.5 A. (Each gets the full 120 V because they are in parallel — that is why both work normally at the same time.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Two 20 Ω resistors in parallel are connected to a 10 V battery. What is the total resistance and the current in each branch?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Two equal resistors: R(total) = 20 ÷ 2 = 10 Ω. Step 2: Each branch gets the full 10 V, so each branch current is 10 ÷ 20 = 0.5 A. Step 3: Total current = 0.5 + 0.5 = 1 A; check: 10 V ÷ 10 Ω = 1 A ✓.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A student connects a 100 Ω resistor in parallel with a 100 Ω resistor and measures a total resistance of 200 Ω on the meter. What went wrong?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Two 100 Ω resistors in parallel should measure 50 Ω, not 200 Ω. Step 2: 200 Ω is the series total, so the student actually wired them in series (end to end) instead of in parallel (across the same two points). Step 3: Rewire so both resistors connect across the same two points and re-measure — and always check that a parallel total is smaller than the smallest branch.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain in plain words why a house is wired in parallel and not in series. Give two reasons.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: In parallel every socket gets the full 120 V, so every appliance works at its proper voltage; in series the voltage would be shared and nothing would get its full share. Step 2: In parallel, one appliance switching off or failing does not stop the others; in series, one break would kill every circuit in the house. (Either two correct reasons are acceptable.)</p>"
    }
  ],
  "quiz": [
    {
      "q": "Two resistors — 6 Ω and 12 Ω — are connected in parallel. What is the total resistance?",
      "choices": [
        "18 Ω",
        "9 Ω",
        "4 Ω",
        "72 Ω"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 1/R = 1/6 + 1/12 = 3/12 = 1/4, so R = 4 Ω. (a) 18 Ω is the series total. (b) 9 Ω is the average of 6 and 12, which is not a circuit rule. (d) 72 Ω is 6 × 12 — the product, without dividing by the sum."
    },
    {
      "q": "In a parallel circuit across a 12 V battery, what voltage does each branch get?",
      "choices": [
        "12 V divided by the number of branches",
        "12 V on every branch",
        "A share that depends on the branch resistance",
        "0 V until the branch is switched on"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Every branch is connected across the same two points, so every branch gets the full 12 V. (a) is the series idea — voltage is shared in series, not parallel. (c) is also series thinking: in parallel, voltage does not depend on the branch resistance. (d) is wrong: the voltage is present across an open branch too; no current flows, but the voltage is there."
    },
    {
      "q": "A 12 V battery feeds 6 Ω and 12 Ω resistors in parallel. What is the total current?",
      "choices": [
        "1 A",
        "2 A",
        "3 A",
        "4 A"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Branch currents are 12 ÷ 6 = 2 A and 12 ÷ 12 = 1 A, totalling 3 A. (Check: R(total) = 4 Ω, and 12 ÷ 4 = 3 A ✓.) (a) 1 A is only the 12 Ω branch. (b) 2 A is only the 6 Ω branch. (d) 4 A is 12 ÷ 3 — using the wrong resistance."
    },
    {
      "q": "Three resistors in parallel are 10 Ω, 20 Ω, and 30 Ω. What is the total resistance?",
      "choices": [
        "60 Ω",
        "30 Ω",
        "10 Ω",
        "About 5.45 Ω"
      ],
      "answer": 3,
      "explanation": "Correct: (d). 1/R = 1/10 + 1/20 + 1/30 = 11/60, so R = 60/11 ≈ 5.45 Ω. (a) 60 Ω is the series total. (b) 30 Ω is the largest branch — a parallel total must be smaller than the smallest branch (10 Ω). (c) 10 Ω is the smallest branch — the total must be smaller than that."
    },
    {
      "q": "In a parallel circuit, which branch carries the most current?",
      "choices": [
        "The branch with the largest resistance",
        "The branch with the smallest resistance",
        "The first branch",
        "All branches carry exactly the same current"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Every branch has the same voltage, so I = V ÷ R is biggest where R is smallest. (a) is backwards — that is the series rule for voltage, not current. (c) is wrong: position does not matter. (d) is wrong: branch currents differ when resistances differ."
    },
    {
      "q": "What happens to the total resistance when you add another resistor in parallel?",
      "choices": [
        "It increases",
        "It decreases",
        "It stays the same",
        "It becomes zero"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A new branch is a new path for current, so the total resistance always goes down. (a) is the series behaviour. (c) is wrong: the total changes. (d) is wrong: it only approaches zero if a branch is a short circuit."
    },
    {
      "q": "Two equal 50 Ω resistors in parallel give a total resistance of…",
      "choices": [
        "100 Ω",
        "50 Ω",
        "25 Ω",
        "2,500 Ω"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Equal resistors in parallel: R ÷ n = 50 ÷ 2 = 25 Ω. (a) 100 Ω is the series total. (b) 50 Ω is one resistor alone. (d) 2,500 Ω is 50 × 50 — multiplication, not the rule."
    },
    {
      "q": "A lamp blows (goes open circuit) in a parallel lighting circuit. What happens to the other lamps?",
      "choices": [
        "They all go out",
        "They get dimmer",
        "They stay on at normal brightness",
        "They get brighter"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Each branch is independent and still gets the full supply voltage, so the others are unaffected. (a) is the series behaviour. (b) is wrong: the voltage on the other branches does not change. (d) is wrong: the voltage on the other branches does not rise."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Parallel Circuits: Quick Reference</h3>\n<p><strong>Core idea:</strong> Same voltage on every branch; currents add; total resistance is smaller than the smallest branch.</p>\n<p><strong>Key terms:</strong> Parallel circuit · Branch · Branch current · Reciprocal rule · Product-over-sum · Node.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>1/R(total) = 1/R1 + 1/R2 + … — add reciprocals, then flip.</li>\n<li>Every branch gets the FULL supply voltage.</li>\n<li>Branch currents add up to the total current.</li>\n<li>Smallest resistor takes the biggest current.</li></ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
