// egr104 - Module 6: Series-Parallel Circuits & Voltage Dividers
module.exports = {
  "number": 6,
  "slug": "series-parallel-voltage-dividers",
  "title": "Series-Parallel Circuits & Voltage Dividers",
  "estTime": "3–4 hours",
  "objectives": [
    "Simplify a mixed series-parallel circuit step by step into one equivalent resistance.",
    "Find the total current, then work back out to branch currents and voltage drops.",
    "Use the voltage divider rule: V(out) = V(in) × R2 ÷ (R1 + R2).",
    "Design a simple voltage divider for a wanted output voltage.",
    "Explain why a voltage divider is a poor power supply for a real load."
  ],
  "sections": [
    {
      "heading": "Mixed Circuits: Simplify in Steps",
      "html": "<p>Most real circuits are neither pure series nor pure parallel — they are a mix. The way to solve them is to simplify in steps: find a pair of resistors that are clearly in series or clearly in parallel, replace them with one equivalent resistor, redraw the circuit, and repeat until one resistor is left. Then use Ohm's law to find the total current, and work backwards through your steps to find every voltage and current.</p>\n<p>The skill is spotting which resistors are truly in series (same current, end to end) and which are truly in parallel (same two points). Two resistors are in parallel only if both ends connect to the same two points; if one end connects somewhere else, they are not in parallel, however the drawing looks.</p>\n"
    },
    {
      "heading": "Worked Example: A Series-Parallel Circuit",
      "html": "<p>A 12 V battery feeds a 4 Ω resistor in series with a parallel pair: 6 Ω and 12 Ω. Step 1: the parallel pair. 1/R = 1/6 + 1/12 = 3/12, so the pair is 4 Ω. Step 2: the circuit is now 4 Ω in series with 4 Ω, so R(total) = 8 Ω. Step 3: total current I = 12 ÷ 8 = 1.5 A. That 1.5 A flows through the 4 Ω series resistor and into the parallel pair.</p>\n<p>Step 4: work back. Voltage across the series resistor: 1.5 × 4 = 6 V. That leaves 12 − 6 = 6 V across the parallel pair (check: 1.5 A × 4 Ω = 6 V ✓). Branch currents: 6 ÷ 6 = 1 A and 6 ÷ 12 = 0.5 A; 1 + 0.5 = 1.5 A ✓ — Kirchhoff's current law holds at the node. Every number checks against another number, which is how you know the answer is right.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Simplify step by step, find the total current, then work backwards. Every step should be checked against a law: voltages add to the supply, branch currents add to the total.</div></p>\n"
    },
    {
      "heading": "The Voltage Divider Rule",
      "html": "<p>Two resistors in series across a supply make a voltage divider: the voltage across the second resistor is V2 = V(in) × R2 ÷ (R1 + R2). Example: 12 V across 4 kΩ and 8 kΩ. V2 = 12 × 8 ÷ (4 + 8) = 12 × 8 ÷ 12 = 8 V, and V1 = 12 × 4 ÷ 12 = 4 V. The bigger resistor takes the bigger share — same rule as Module 4, now as a formula you can use directly.</p>\n<p>Voltage dividers are everywhere in electronics: setting the volume in an amplifier, telling a sensor's output to a microcontroller, or biasing a transistor. They are cheap and simple, which is why they are so common.</p>\n"
    },
    {
      "heading": "Designing a Divider — and Its Limit",
      "html": "<p>Suppose you have 12 V and you want 3 V out. Pick a total resistance, say 12 kΩ, so the divider draws only 1 mA (12 V ÷ 12 kΩ = 1 mA). You need R2 ÷ (R1 + R2) = 3 ÷ 12 = 1/4, so R2 = 3 kΩ and R1 = 9 kΩ. Check: V2 = 12 × 3 ÷ 12 = 3 V ✓.</p>\n<p>But here is the catch: a voltage divider is only accurate when almost nothing is connected to its output. Connect a real load across R2 and the load sits in parallel with R2, lowering its effective resistance and dragging the output voltage down. A divider is fine for a signal — a tiny current into a meter or a chip input — but it is a poor power supply. If the load needs real power, you need a regulator, not a divider.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Simplify mixed circuits step by step: combine series or parallel pairs, redraw, repeat.</li><li>Find the total current first, then work backwards to every voltage and current.</li><li>Voltage divider: V2 = V(in) × R2 ÷ (R1 + R2).</li><li>Check every answer: drops add to the supply; branch currents add to the total.</li><li>A divider gives a voltage, not power — a real load drags its output down.</li></ul></p>\n<p><strong>Common mistake:</strong> Calling two resistors “in parallel” just because they are drawn side by side. They are only in parallel if both ends connect to the same two points. Trace the wires; do not trust the drawing's shape.</p>\n<p><strong>Common mistake:</strong> Forgetting to work backwards after finding the total current. The total current is the start of the answer, not the end — the question usually wants a branch current or a voltage drop.</p>\n<p><strong>Ready check:</strong> If you can solve the 12 V, 4 Ω + (6 Ω || 12 Ω) circuit — total 8 Ω, 1.5 A, 6 V across the series resistor, 1 A and 0.5 A in the branches — you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Series-parallel circuit",
      "def": "A circuit with some resistors in series and some in parallel; solved by simplifying step by step."
    },
    {
      "term": "Equivalent resistance",
      "def": "One resistance that behaves exactly like a combination of resistors."
    },
    {
      "term": "Voltage divider rule",
      "def": "V2 = V(in) × R2 ÷ (R1 + R2): the voltage across the second resistor in a series pair."
    },
    {
      "term": "Voltage divider",
      "def": "Two resistors in series used to produce a smaller voltage from a larger supply."
    },
    {
      "term": "Simplify in steps",
      "def": "Replacing a series or parallel pair with one equivalent resistor, redrawing, and repeating."
    },
    {
      "term": "Work backwards",
      "def": "After finding the total current, using it to find the voltages and branch currents in the original circuit."
    },
    {
      "term": "Loading a divider",
      "def": "Connecting a load to a voltage divider's output, which lowers the output voltage."
    },
    {
      "term": "Signal vs power",
      "def": "A divider is fine for a small signal current but poor at delivering real power to a load."
    },
    {
      "term": "Node (revisited)",
      "def": "A point where branches meet; the place where Kirchhoff's current law is checked."
    },
    {
      "term": "Redraw the circuit",
      "def": "Sketching the simplified circuit after each step so the structure stays clear."
    },
    {
      "term": "kΩ (kilo-ohm)",
      "def": "1,000 Ω; the usual size for divider resistors, which keeps the divider current small."
    },
    {
      "term": "Check sum (revisited)",
      "def": "Drops add to the supply; branch currents add to the total — the two free error checks."
    }
  ],
  "video": {
    "title": "Series & Parallel: Does Resistance Rise? | Class 10 Physics | Physics Explained",
    "embedUrl": "https://www.youtube.com/embed/5khpCgJWl1o",
    "note": "Series and parallel worked with numbers: 5 Ω, 10 Ω, 30 Ω in both arrangements, and why homes use parallel.",
    "more": [
      {
        "title": "Circuits in the Field: Series, Parallel, and Faults | Lesson 9",
        "url": "https://www.youtube.com/watch?v=HDWsJlWqtdk"
      },
      {
        "title": "Ohm's Law - The Learning Circuit | element14",
        "url": "https://www.youtube.com/watch?v=kQoLy_us5J4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 12 V battery feeds a 4 Ω resistor in series with a parallel pair of 6 Ω and 12 Ω. Find the total resistance, the total current, the voltage across the 4 Ω resistor, and each branch current.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Parallel pair: 1/R = 1/6 + 1/12 = 3/12 → 4 Ω. Step 2: R(total) = 4 + 4 = 8 Ω. Step 3: Total current I = 12 ÷ 8 = 1.5 A. Step 4: Voltage across the 4 Ω series resistor: 1.5 × 4 = 6 V. Step 5: Voltage across the pair: 12 − 6 = 6 V. Step 6: Branches: 6 ÷ 6 = 1 A and 6 ÷ 12 = 0.5 A; check 1 + 0.5 = 1.5 A ✓.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Use the voltage divider rule to find the output voltage of a divider with R1 = 2 kΩ, R2 = 6 kΩ, and a 16 V supply. Then confirm with Ohm's law.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: V2 = 16 × 6 ÷ (2 + 6) = 16 × 6 ÷ 8 = 12 V. Step 2: Confirm: total R = 8 kΩ, I = 16 ÷ 8,000 = 2 mA; V2 = 0.002 × 6,000 = 12 V ✓.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Design a divider from a 9 V battery that gives 3 V out, with a total resistance of 9 kΩ. State R1 and R2.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: You need R2 ÷ (R1 + R2) = 3 ÷ 9 = 1/3. Step 2: With R1 + R2 = 9 kΩ, R2 = 3 kΩ and R1 = 6 kΩ. Step 3: Check: V2 = 9 × 3 ÷ 9 = 3 V ✓; divider current = 9 ÷ 9,000 = 1 mA.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A 20 V supply feeds a 10 Ω resistor in series with a parallel pair of 20 Ω and 20 Ω. Find every current and voltage in the circuit.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Parallel pair: two equal 20 Ω → 10 Ω. Step 2: R(total) = 10 + 10 = 20 Ω; total current = 20 ÷ 20 = 1 A. Step 3: Voltage across the series 10 Ω: 1 × 10 = 10 V; across the pair: 10 V. Step 4: Each branch: 10 ÷ 20 = 0.5 A; 0.5 + 0.5 = 1 A ✓.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A divider is built with R1 = 10 kΩ and R2 = 10 kΩ from a 12 V supply, giving 6 V out with nothing connected. A 10 kΩ load is then connected across the output. What is the new output voltage?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The load in parallel with R2: 10 kΩ || 10 kΩ = 5 kΩ. Step 2: New divider: V(out) = 12 × 5 ÷ (10 + 5) = 12 × 5 ÷ 15 = 4 V. Step 3: The output fell from 6 V to 4 V — this is loading, and it is why dividers are poor power supplies.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A student says two resistors drawn one above the other must be in parallel. Explain why that is not necessarily true, and how to tell for sure.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Parallel means both ends connect to the same two points — it is about the connections, not the drawing. Step 2: Trace each wire: if the top ends join at one node and the bottom ends join at another node, they are in parallel. Step 3: If, instead, the bottom of one connects to the top of the other (end to end), they are in series even though they are drawn side by side. Always trace the wires.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A 12 V battery feeds a 4 Ω resistor in series with a parallel pair of 6 Ω and 12 Ω. What is the total resistance?",
      "choices": [
        "22 Ω",
        "8 Ω",
        "4 Ω",
        "12 Ω"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The parallel pair is 4 Ω (1/6 + 1/12 = 1/4), and 4 + 4 in series is 8 Ω. (a) 22 Ω adds all three resistors as if they were in series. (c) 4 Ω is only the parallel pair. (d) 12 Ω is the battery voltage, not a resistance."
    },
    {
      "q": "In that same circuit, what is the total current?",
      "choices": [
        "3 A",
        "1.5 A",
        "0.67 A",
        "6 A"
      ],
      "answer": 1,
      "explanation": "Correct: (b). I = V ÷ R = 12 ÷ 8 = 1.5 A. (a) 3 A is 12 ÷ 4 — using only the parallel pair. (c) 0.67 A is 8 ÷ 12 — upside down. (d) 6 A is 12 ÷ 2 — the wrong resistance."
    },
    {
      "q": "In that same circuit, what is the current in the 6 Ω branch?",
      "choices": [
        "1.5 A",
        "1 A",
        "0.5 A",
        "2 A"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The voltage across the pair is 12 − (1.5 × 4) = 6 V, so the 6 Ω branch takes 6 ÷ 6 = 1 A. (a) 1.5 A is the total current, not a branch current. (c) 0.5 A is the current in the 12 Ω branch. (d) 2 A is 12 ÷ 6 — using the full battery voltage across the branch, forgetting the 6 V dropped by the series resistor."
    },
    {
      "q": "A voltage divider has R1 = 4 kΩ, R2 = 8 kΩ, and a 12 V supply. What is the voltage across R2?",
      "choices": [
        "4 V",
        "6 V",
        "8 V",
        "12 V"
      ],
      "answer": 2,
      "explanation": "Correct: (c). V2 = 12 × 8 ÷ (4 + 8) = 8 V. (a) 4 V is the voltage across R1. (b) 6 V is half the supply — true only for equal resistors. (d) 12 V is the whole supply."
    },
    {
      "q": "What is the first step in solving a mixed series-parallel circuit?",
      "choices": [
        "Find the total current immediately",
        "Combine one clear series or parallel pair into a single equivalent resistance and redraw",
        "Measure the voltage across the battery",
        "Add all the resistors together"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Simplify step by step: combine one pair, redraw, repeat until one resistor is left. (a) is wrong: you cannot find the total current until you know the total resistance. (c) is not a solving step. (d) is wrong: adding all resistors only works for a pure series circuit."
    },
    {
      "q": "A voltage divider gives 6 V out with no load. A load is connected across the output and the voltage falls to 4 V. What is this called?",
      "choices": [
        "A short circuit",
        "Loading the divider",
        "A voltage drop",
        "An open circuit"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The load sits in parallel with the lower resistor, lowering its effective resistance and dragging the output down — loading. (a) is wrong: a short is a near-zero resistance path. (c) is too vague: every resistor has a voltage drop; this is a specific effect. (d) is wrong: an open circuit would stop current, not lower the voltage."
    },
    {
      "q": "A divider from a 9 V battery must give 3 V out. Which pair of resistors works?",
      "choices": [
        "R1 = 3 kΩ, R2 = 6 kΩ",
        "R1 = 6 kΩ, R2 = 3 kΩ",
        "R1 = 9 kΩ, R2 = 9 kΩ",
        "R1 = 1 kΩ, R2 = 9 kΩ"
      ],
      "answer": 1,
      "explanation": "Correct: (b). V2 = 9 × 3 ÷ (6 + 3) = 3 V ✓. (a) gives 9 × 6 ÷ 9 = 6 V. (c) gives 9 × 9 ÷ 18 = 4.5 V. (d) gives 9 × 9 ÷ 10 = 8.1 V."
    },
    {
      "q": "Two resistors are drawn side by side in a diagram. How do you know if they are in parallel?",
      "choices": [
        "They are in parallel because they are drawn side by side",
        "Check that both ends connect to the same two points",
        "Check that one is bigger than the other",
        "They are in parallel only if they have the same value"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Parallel is about connections: both ends to the same two nodes. (a) is wrong: the drawing's shape does not decide it. (c) is wrong: values do not matter. (d) is wrong: parallel resistors can have any values."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Series-Parallel Circuits & Voltage Dividers: Quick Reference</h3>\n<p><strong>Core idea:</strong> Simplify step by step, find the total current, then work backwards. Divider: V2 = V(in) × R2 ÷ (R1 + R2).</p>\n<p><strong>Key terms:</strong> Series-parallel circuit · Equivalent resistance · Voltage divider rule · Loading a divider.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Combine one pair at a time; redraw after each step.</li>\n<li>Drops add to the supply; branch currents add to the total.</li>\n<li>V2 = V(in) × R2 ÷ (R1 + R2).</li>\n<li>A divider gives a voltage, not power — a load drags it down.</li></ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
