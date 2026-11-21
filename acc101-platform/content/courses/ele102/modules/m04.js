// ele102 - Module 4: Series Circuits
module.exports = {
  "number": 4,
  "slug": "series-circuits",
  "title": "Series Circuits",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe a series circuit and how current, voltage, and resistance behave in it.",
    "Calculate total resistance in a series circuit.",
    "Calculate total current and the voltage drop across each resistor.",
    "Use the voltage divider rule to find a resistor's voltage.",
    "Explain what happens in a series circuit when one component opens or shorts."
  ],
  "sections": [
    {
      "heading": "What a Series Circuit Is",
      "html": "<p>A <strong>series circuit</strong> is a circuit with only one path for current: the components are connected end to end, like cars on a single-lane road, and the same current flows through every component. If any part of the path breaks, the current stops everywhere. A string of old-fashioned Christmas lights is a series circuit — when one bulb burns out, the whole string goes dark, because the path is broken.</p>\n<p>Series circuits are simple to analyze because the rules are few and absolute. The current is the same everywhere. The total resistance is the sum of the individual resistances. The source voltage divides among the components in proportion to their resistances. And the total power is the sum of the power used by each component. Learn these four rules and you can solve any series circuit.</p>\n<div class=\"callout\"><strong>Key idea:</strong> In series, current is the same everywhere; voltage divides. The biggest resistor gets the biggest share of the voltage.</div>"
    },
    {
      "heading": "Total Resistance & Total Current",
      "html": "<p>In a series circuit, the total resistance is the sum of the individual resistances: <strong>R<sub>T</sub> = R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub> + …</strong>. Three resistors of 10, 20, and 30 ohms in series give R<sub>T</sub> = 10 + 20 + 30 = 60 ohms. The total current is then found with Ohm's law using the total resistance: I<sub>T</sub> = E ÷ R<sub>T</sub>. With a 120-volt source and 60 ohms total, I<sub>T</sub> = 120 ÷ 60 = 2 amps — and that 2 amps flows through every resistor.</p>\n<p>Adding a resistor in series always increases the total resistance and always decreases the total current. This is the opposite of parallel circuits, where adding a resistor decreases the total resistance. The difference is the key to telling the two apart, and it is the most common source of confusion in DC theory — so the rule is worth memorizing: series adds resistance, parallel divides it.</p>"
    },
    {
      "heading": "Voltage Drops & the Voltage Divider",
      "html": "<p>The voltage across each resistor — its <strong>voltage drop</strong> — is found with Ohm's law: V = I × R, using the circuit current and that resistor's value. In the example above, the 10-ohm resistor drops 2 × 10 = 20 volts, the 20-ohm resistor drops 2 × 20 = 40 volts, and the 30-ohm resistor drops 2 × 30 = 60 volts. The drops add up to the source voltage: 20 + 40 + 60 = 120 volts. This is Kirchhoff's voltage law in action, covered in Module 7: the voltage drops around a loop always add up to the source voltage.</p>\n<p>The <strong>voltage divider rule</strong> gives a shortcut: the voltage across one resistor is the source voltage times that resistor divided by the total resistance, V<sub>x</sub> = E × (R<sub>x</sub> ÷ R<sub>T</sub>). For the 30-ohm resistor: V = 120 × (30 ÷ 60) = 60 volts. The rule is useful whenever a circuit is built to give a smaller voltage from a larger one — for example, a sensor circuit that needs 5 volts from a 12-volt supply.</p>"
    },
    {
      "heading": "Opens, Shorts & Power in Series",
      "html": "<p>When a resistor opens in a series circuit — a wire breaks, a connection fails — the path is broken, the current goes to zero everywhere, and the full source voltage appears across the open. That last fact is a troubleshooting clue: a meter across an open component in a series circuit reads the full source voltage. When a resistor shorts — its resistance drops to near zero — the total resistance falls, the current rises, and the remaining resistors get more voltage and more power than they were designed for, which can damage them.</p>\n<p>Power in a series circuit is the sum of the power in each resistor: P<sub>T</sub> = P<sub>1</sub> + P<sub>2</sub> + P<sub>3</sub> + …, and it also equals the source voltage times the total current, P<sub>T</sub> = E × I<sub>T</sub>. Each resistor's power is found with P = I² × R, using the circuit current. In the example, the 10-ohm resistor uses 2² × 10 = 40 watts, the 20-ohm resistor uses 80 watts, and the 30-ohm resistor uses 120 watts, for a total of 240 watts — which matches 120 volts × 2 amps.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Series: one path, same current everywhere.</li>\n<li>R<sub>T</sub> = R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub> + …; I<sub>T</sub> = E ÷ R<sub>T</sub>.</li>\n<li>Voltage drops: V<sub>x</sub> = I × R<sub>x</sub>; the drops add up to the source voltage.</li>\n<li>Voltage divider: V<sub>x</sub> = E × (R<sub>x</sub> ÷ R<sub>T</sub>).</li>\n<li>An open stops all current and shows full source voltage across the open; a short raises current and over-voltages the other resistors.</li>\n<li>Power: P<sub>T</sub> = P<sub>1</sub> + P<sub>2</sub> + … = E × I<sub>T</sub>.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Using different currents for different resistors in a series circuit. The current is the same everywhere in series — there is only one current.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Thinking adding a resistor in series lowers total resistance. It always raises it — series adds, parallel divides.</div>\n<p><strong>Ready-to-Work link:</strong> If you can find total resistance, total current, each voltage drop, and the power in a three-resistor series circuit, you have this module. Module 5 covers parallel circuits.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Series circuit",
      "def": "A circuit with one path for current; the same current flows through every component."
    },
    {
      "term": "Total resistance (R_T)",
      "def": "The sum of all resistances in a series circuit."
    },
    {
      "term": "Voltage drop",
      "def": "The voltage across a component, equal to I × R for that component."
    },
    {
      "term": "Voltage divider rule",
      "def": "V_x = E × (R_x ÷ R_T): the voltage across one resistor in a series circuit."
    },
    {
      "term": "Total current (I_T)",
      "def": "The current in a series circuit, the same through every component."
    },
    {
      "term": "Open",
      "def": "A break in a circuit path; current stops and full source voltage appears across the open."
    },
    {
      "term": "Short",
      "def": "A near-zero-resistance path that raises current and over-voltages other components."
    },
    {
      "term": "Total power (P_T)",
      "def": "The sum of the power used by each component; also E × I_T."
    },
    {
      "term": "Kirchhoff's voltage law",
      "def": "The voltage drops around a closed loop add up to the source voltage."
    },
    {
      "term": "Load",
      "def": "The part of a circuit that uses electrical energy."
    },
    {
      "term": "Source voltage",
      "def": "The voltage supplied to a circuit by its source."
    },
    {
      "term": "Resistor",
      "def": "A component that provides a known resistance to current flow."
    },
    {
      "term": "Proportional",
      "def": "Changing in the same ratio; in series, voltage divides in proportion to resistance."
    },
    {
      "term": "Christmas-light string",
      "def": "A classic series circuit: one bulb out, the whole string dark."
    },
    {
      "term": "Single path",
      "def": "A circuit with only one route for current to take."
    }
  ],
  "video": {
    "title": "DC Series circuits explained - The basics working principle",
    "embedUrl": "https://www.youtube.com/embed/VV6tZ3Aqfuc",
    "note": "A series-circuit walkthrough. As you watch, write down the four series rules and check each one against the example shown.",
    "more": [
      {
        "title": "Let's Talk About SERIES Circuits: Voltage, Current, Resistance, and Power",
        "url": "https://www.youtube.com/watch?v=LxDeg46qKFA"
      },
      {
        "title": "What’s the Difference between SERIES & PARALLEL Circuits?",
        "url": "https://www.youtube.com/watch?v=QKcoDSJSkn0"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Three resistors — 10 Ω, 20 Ω, and 30 Ω — are in series across a 120 V source. What is the total resistance?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: R_T = R_1 + R_2 + R_3. Step 2: R_T = 10 + 20 + 30 = 60 ohms. Step 3: The total resistance is 60 ohms.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> In the same circuit, what is the total current?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: I_T = E ÷ R_T. Step 2: I_T = 120 ÷ 60 = 2 amps. Step 3: The total current is 2 amps, flowing through every resistor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> What is the voltage drop across the 30 Ω resistor in that circuit?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: V = I × R = 2 × 30 = 60 volts. Step 2: Check with the voltage divider: 120 × (30 ÷ 60) = 60 volts. Step 3: The drop is 60 volts.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> What is the voltage drop across the 10 Ω resistor, and what do all three drops add up to?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: V = 2 × 10 = 20 volts. Step 2: The drops are 20 V, 40 V, and 60 V. Step 3: 20 + 40 + 60 = 120 volts, the source voltage.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> How much power does the 20 Ω resistor use, and what is the total power?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: P = I² × R = 2² × 20 = 80 watts. Step 2: The resistors use 40 W, 80 W, and 120 W. Step 3: Total power = 240 watts, which matches 120 V × 2 A.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> The 20 Ω resistor opens. What happens to the current, and what voltage would a meter read across the open resistor?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The path is broken, so the current goes to zero everywhere. Step 2: The full source voltage appears across the open. Step 3: A meter across the open resistor reads 120 volts.</p>"
    }
  ],
  "quiz": [
    {
      "q": "In a series circuit, the current is:",
      "choices": [
        "Different through each resistor",
        "The same through every component",
        "Zero everywhere",
        "Highest through the smallest resistor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Series has one path, so one current flows everywhere. (a) Different currents would need multiple paths. (c) Current is zero only in an open circuit. (d) The current is the same through all resistors."
    },
    {
      "q": "Three resistors of 10 Ω, 20 Ω, and 30 Ω in series have a total resistance of:",
      "choices": [
        "6 Ω",
        "30 Ω",
        "60 Ω",
        "600 Ω"
      ],
      "answer": 2,
      "explanation": "Correct: (c). R_T = 10 + 20 + 30 = 60 ohms. (a) 6 ohms is not the sum. (b) 30 ohms is one resistor. (d) 600 ohms is 10 × 20 × 30 ÷ 100, not the rule."
    },
    {
      "q": "A 120 V source feeds a series circuit with 60 Ω total resistance. The total current is:",
      "choices": [
        "0.5 amps",
        "2 amps",
        "60 amps",
        "120 amps"
      ],
      "answer": 1,
      "explanation": "Correct: (b). I = 120 ÷ 60 = 2 amps. (a) 0.5 amps is 60 ÷ 120. (c) 60 amps confuses resistance with current. (d) 120 amps confuses voltage with current."
    },
    {
      "q": "In a series circuit, the voltage drops across the resistors:",
      "choices": [
        "Are all equal",
        "Add up to the source voltage",
        "Are all zero",
        "Add up to twice the source voltage"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The drops sum to the source voltage — Kirchhoff's voltage law. (a) Drops are equal only if resistances are equal. (c) Drops are zero only with no current. (d) The sum is the source voltage, not twice it."
    },
    {
      "q": "The voltage divider rule is:",
      "choices": [
        "V_x = E × (R_x ÷ R_T)",
        "V_x = E ÷ R_x",
        "V_x = I × R_T",
        "V_x = E + R_x"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The voltage across one resistor is the source voltage times its share of the total resistance. (b) E ÷ R_x is a current, not a voltage. (c) I × R_T is the source voltage. (d) Adding voltage and resistance makes no sense."
    },
    {
      "q": "Adding a resistor in series:",
      "choices": [
        "Decreases total resistance",
        "Increases total resistance and decreases total current",
        "Does not change anything",
        "Shorts the circuit"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Series adds resistance, so total current falls. (a) Adding in parallel decreases total resistance. (c) Adding a resistor changes the circuit. (d) Adding a resistor does not short anything."
    },
    {
      "q": "A resistor opens in a series circuit. The current:",
      "choices": [
        "Doubles",
        "Goes to zero everywhere",
        "Stays the same",
        "Triples"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An open breaks the only path, so current stops everywhere. (a) Current cannot rise when the path is broken. (c) Current stops, it does not stay. (d) Current cannot triple through a broken path."
    },
    {
      "q": "The biggest resistor in a series circuit gets:",
      "choices": [
        "The smallest voltage drop",
        "The biggest voltage drop",
        "No voltage drop",
        "All of the current only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Voltage divides in proportion to resistance, so the biggest resistor gets the biggest drop. (a) The smallest resistor gets the smallest drop. (c) Every resistor in series has a drop. (d) All resistors share the same current."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Series Circuits: Quick Reference</h3>\n<p><strong>Core idea:</strong> In series, current is the same everywhere; voltage divides. The biggest resistor gets the biggest share.</p>\n<p><strong>Rules:</strong> R_T = R_1 + R_2 + R_3 + … · I_T = E ÷ R_T (same everywhere) · V_x = I × R_x · Drops add up to the source voltage.</p>\n<p><strong>Voltage divider:</strong> V_x = E × (R_x ÷ R_T).</p>\n<p><strong>Power:</strong> P_T = P_1 + P_2 + … = E × I_T.</p>\n<p><strong>Faults:</strong> Open = zero current, full source voltage across the open · Short = current rises, other resistors over-voltaged.</p>\n<p><strong>Self-check:</strong> Solve a 10/20/30 Ω series circuit on 120 V: R_T, I_T, each drop, each power, without looking.</p>\n"
};
