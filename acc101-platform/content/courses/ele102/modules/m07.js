// ele102 - Module 7: Kirchhoff's Laws
module.exports = {
  "number": 7,
  "slug": "kirchhoffs-laws",
  "title": "Kirchhoff's Laws",
  "estTime": "3–4 hours",
  "objectives": [
    "State Kirchhoff's current law (KCL) and apply it at a junction.",
    "State Kirchhoff's voltage law (KVL) and apply it around a loop.",
    "Use KCL to find an unknown branch current in a parallel circuit.",
    "Use KVL to find an unknown voltage drop in a series circuit.",
    "Explain how KCL and KVL are used to check and troubleshoot circuit calculations."
  ],
  "sections": [
    {
      "heading": "Kirchhoff's Current Law: What Goes In Comes Out",
      "html": "<p><strong>Kirchhoff's current law (KCL)</strong> states that the sum of the currents entering a junction equals the sum of the currents leaving it — charge is never created or destroyed, so what flows in must flow out. At a junction where a 10-amp current splits into two branches, the branch currents add up to 10 amps: if one branch carries 6 amps, the other carries 4. The law is a bookkeeping rule for current, and it is the reason the branch currents in a parallel circuit always add up to the total current.</p>\n<p>KCL is used to find an unknown branch current without knowing the branch's resistance. If the total current is 15 amps and two of the three branches carry 5 and 7 amps, the third branch carries 15 − 5 − 7 = 3 amps. The law also catches mistakes: if your branch currents do not add up to the total, one of them is wrong, and the error is in your math, not in the law.</p>\n<div class=\"callout\"><strong>Key idea:</strong> KCL is conservation of charge. Currents entering a junction equal currents leaving it — always, in every circuit.</div>"
    },
    {
      "heading": "Kirchhoff's Voltage Law: Around the Loop",
      "html": "<p><strong>Kirchhoff's voltage law (KVL)</strong> states that the sum of the voltage drops around any closed loop equals the source voltage in that loop — energy is never created or destroyed, so the voltage the source supplies is exactly the voltage the components use up. In a series circuit with drops of 20, 40, and 60 volts, the drops add to 120 volts, the source voltage. The law holds for every loop in a circuit, including the loops inside a combination circuit.</p>\n<p>KVL is used to find an unknown voltage drop. If a 120-volt source feeds three series resistors and the known drops are 30 and 50 volts, the third drop is 120 − 30 − 50 = 40 volts. The law also works with voltage rises: going around a loop, the rises equal the drops, and the algebraic sum around any closed loop is zero. The practical habit is to add the drops and check them against the source — if they do not match, something is wrong.</p>"
    },
    {
      "heading": "Using KCL and KVL Together",
      "html": "<p>KCL and KVL are the two laws that govern every circuit, and they are used together to solve circuits that Ohm's law alone cannot. In a circuit with two sources, or a circuit with several loops, the laws give a set of equations — one for each junction and one for each loop — and solving the equations gives every current and voltage. This is the method called mesh analysis and nodal analysis in advanced courses, and it is built entirely on these two laws.</p>\n<p>For this course, the use is simpler and just as important: checking. After solving a series circuit, add the drops and check them against the source (KVL). After solving a parallel circuit, add the branch currents and check them against the total (KCL). After solving a combination circuit, check both. A calculation that passes both checks is almost certainly right; a calculation that fails one has an error, and the check tells you where to look.</p>"
    },
    {
      "heading": "KCL, KVL & Troubleshooting",
      "html": "<p>In troubleshooting, KCL and KVL turn a meter into a diagnostic tool. A voltage reading that does not match the calculated drop points to the component that is wrong: a resistor with too much voltage across it is carrying too much current or has too much resistance; a resistor with no voltage across it is carrying no current, which means an open somewhere in its path. A current reading that does not match the calculated value points the same way.</p>\n<p>The laws also explain why a circuit behaves the way it does when it fails. A short in one branch of a parallel circuit pulls the voltage down for every branch, because the short is a near-zero-resistance path across the source. An open in a series circuit puts the full source voltage across the open, because there is no current and therefore no drop anywhere else. The laws are not just theory — they are the reason the meter reads what it reads.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>KCL: currents entering a junction equal currents leaving it — charge is conserved.</li>\n<li>KVL: voltage drops around a closed loop add up to the source voltage — energy is conserved.</li>\n<li>KCL finds an unknown branch current; KVL finds an unknown voltage drop.</li>\n<li>Check every solution: branch currents must sum to the total (KCL), drops must sum to the source (KVL).</li>\n<li>Meter readings that violate KCL or KVL point to the fault.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Forgetting that KVL applies to every loop, not just the outside of the circuit. Every closed path in a combination circuit must satisfy KVL.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Adding branch currents and getting a total that does not match, then ignoring the mismatch. The mismatch is the signal — one of the currents is wrong.</div>\n<p><strong>Ready-to-Work link:</strong> If you can state both laws, use KCL to find a branch current, use KVL to find a voltage drop, and check a solution with both, you have this module. Module 8 covers meters and DC measurement.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Kirchhoff's current law (KCL)",
      "def": "The sum of currents entering a junction equals the sum leaving it."
    },
    {
      "term": "Kirchhoff's voltage law (KVL)",
      "def": "The sum of voltage drops around a closed loop equals the source voltage in that loop."
    },
    {
      "term": "Junction",
      "def": "A point where current splits into two or more paths, or where paths join."
    },
    {
      "term": "Loop",
      "def": "A closed path in a circuit, starting and ending at the same point."
    },
    {
      "term": "Conservation of charge",
      "def": "Charge is never created or destroyed; what flows in must flow out."
    },
    {
      "term": "Conservation of energy",
      "def": "Energy is never created or destroyed; the source voltage equals the drops around a loop."
    },
    {
      "term": "Voltage drop",
      "def": "The voltage across a component, equal to I × R for that component."
    },
    {
      "term": "Voltage rise",
      "def": "A voltage increase going around a loop, such as across a source from negative to positive."
    },
    {
      "term": "Mesh analysis",
      "def": "Solving a circuit by writing KVL equations for each loop."
    },
    {
      "term": "Nodal analysis",
      "def": "Solving a circuit by writing KCL equations for each junction."
    },
    {
      "term": "Branch current",
      "def": "The current through one branch of a circuit."
    },
    {
      "term": "Algebraic sum",
      "def": "A sum where signs matter; around a closed loop, the algebraic sum of voltages is zero."
    },
    {
      "term": "Unknown current",
      "def": "A current found by applying KCL at a junction."
    },
    {
      "term": "Unknown voltage",
      "def": "A voltage drop found by applying KVL around a loop."
    },
    {
      "term": "Check",
      "def": "Verifying a solution by confirming KCL and KVL both hold."
    }
  ],
  "video": {
    "title": "KVL and KCL (Circuits for Beginners #11)",
    "embedUrl": "https://www.youtube.com/embed/f2iCGcWShLE",
    "note": "A Kirchhoff's laws walkthrough for beginners. As you watch, write down KCL and KVL in your own words and solve the example before the answer is shown.",
    "more": [
      {
        "title": "🔥 Kirchhoff’s Laws Explained! | KVL & KCL Made Easy ⚡| 3D  animation |",
        "url": "https://www.youtube.com/watch?v=FHJWkx5yehE"
      },
      {
        "title": "Kirchhoff's Law, Junction & Loop Rule, Ohm's Law - KCl & KVl Circuit Analysis - ",
        "url": "https://www.youtube.com/watch?v=2Zu3ppq3n8I"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A junction has 15 amps entering it. Two branches leave carrying 5 amps and 7 amps. What does the third branch carry?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: KCL says currents in equal currents out. Step 2: 15 − 5 − 7 = 3 amps. Step 3: The third branch carries 3 amps.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A 120 V source feeds three series resistors with drops of 30 V and 50 V on the first two. What is the drop across the third?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: KVL says the drops add up to the source voltage. Step 2: 120 − 30 − 50 = 40 volts. Step 3: The third resistor drops 40 volts.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> State Kirchhoff's current law in one sentence.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The sum of the currents entering a junction equals the sum of the currents leaving it. Step 2: Charge is never created or destroyed. Step 3: What flows in must flow out.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> State Kirchhoff's voltage law in one sentence.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The sum of the voltage drops around any closed loop equals the source voltage in that loop. Step 2: Energy is never created or destroyed. Step 3: The voltage the source supplies is exactly the voltage the components use up.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> You solve a parallel circuit and your branch currents add to 20 amps, but the total current is 22 amps. What does this tell you?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: KCL is violated, so one of the currents is wrong. Step 2: The error is in the math, not in the law. Step 3: Recheck each branch current — one of them is 2 amps too low.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A meter reads the full source voltage across a resistor in a series circuit, but the resistor is not open. What else could explain the reading?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: If the resistor is not open, the full voltage across it means the other resistors are dropping no voltage. Step 2: That happens when there is no current, which means an open elsewhere in the loop. Step 3: Check the rest of the loop for the open — the resistor itself may be fine.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Kirchhoff's current law states that:",
      "choices": [
        "Voltage drops add up to the source voltage",
        "Currents entering a junction equal currents leaving it",
        "Resistance adds in parallel",
        "Power equals voltage times current"
      ],
      "answer": 1,
      "explanation": "Correct: (b). KCL is about currents at a junction. (a) That is KVL. (c) Resistance in parallel follows the reciprocal formula. (d) That is Watt's law."
    },
    {
      "q": "Kirchhoff's voltage law states that:",
      "choices": [
        "Currents entering a junction equal currents leaving it",
        "Voltage drops around a closed loop add up to the source voltage",
        "Current is the same everywhere",
        "Voltage is the same everywhere"
      ],
      "answer": 1,
      "explanation": "Correct: (b). KVL is about voltage drops around a loop. (a) That is KCL. (c) Current is the same everywhere only in series. (d) Voltage is the same everywhere only in parallel."
    },
    {
      "q": "A junction has 15 amps entering. Two branches leave carrying 5 and 7 amps. The third branch carries:",
      "choices": [
        "3 amps",
        "5 amps",
        "7 amps",
        "15 amps"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 15 − 5 − 7 = 3 amps by KCL. (b) 5 amps is one branch's current. (c) 7 amps is another branch's current. (d) 15 amps is the total entering, not one branch."
    },
    {
      "q": "A 120 V source feeds three series resistors with drops of 30 V and 50 V. The third drop is:",
      "choices": [
        "30 V",
        "40 V",
        "50 V",
        "120 V"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 120 − 30 − 50 = 40 volts by KVL. (a) 30 V is the first drop. (c) 50 V is the second drop. (d) 120 V is the source voltage."
    },
    {
      "q": "KCL is based on the conservation of:",
      "choices": [
        "Energy",
        "Charge",
        "Power",
        "Resistance"
      ],
      "answer": 1,
      "explanation": "Correct: (b). KCL is conservation of charge. (a) Conservation of energy is the basis of KVL. (c) Power is not conserved at a junction in this sense. (d) Resistance is not conserved."
    },
    {
      "q": "KVL is based on the conservation of:",
      "choices": [
        "Charge",
        "Energy",
        "Current",
        "Voltage"
      ],
      "answer": 1,
      "explanation": "Correct: (b). KVL is conservation of energy. (a) Conservation of charge is the basis of KCL. (c) Current is what KCL tracks. (d) Voltage is what KVL tracks, but the basis is energy conservation."
    },
    {
      "q": "If your branch currents do not add up to the total current, you should:",
      "choices": [
        "Ignore it",
        "Recheck your math — one of the currents is wrong",
        "Change the total current",
        "Add another branch"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A KCL violation means an error in the math. (a) Ignoring a mismatch hides an error. (c) The total is set by the circuit, not by choice. (d) Adding a branch changes the circuit."
    },
    {
      "q": "A meter reads the full source voltage across one resistor in a series circuit. This most likely means:",
      "choices": [
        "The resistor is shorted",
        "There is an open in the loop, so no current flows and no other resistor drops voltage",
        "The source voltage is too low",
        "The resistor is too small"
      ],
      "answer": 1,
      "explanation": "Correct: (b). With no current, only the open drops the full voltage — and if the resistor itself is not open, the open is elsewhere in the loop. (a) A shorted resistor drops near zero volts. (c) Source voltage does not cause this reading. (d) Resistor size does not cause this reading."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Kirchhoff's Laws: Quick Reference</h3>\n<p><strong>Core idea:</strong> KCL is conservation of charge; KVL is conservation of energy. Both hold in every circuit, always.</p>\n<p><strong>KCL:</strong> Currents entering a junction = currents leaving it.</p>\n<p><strong>KVL:</strong> Voltage drops around a closed loop = source voltage in that loop.</p>\n<p><strong>Use:</strong> KCL finds an unknown branch current · KVL finds an unknown voltage drop · Check every solution with both.</p>\n<p><strong>Troubleshooting:</strong> A reading that violates KCL or KVL points to the fault.</p>\n<p><strong>Self-check:</strong> State both laws, solve 15 A − 5 A − 7 A, and solve 120 V − 30 V − 50 V, without looking.</p>\n"
};
