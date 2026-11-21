// egr104 - Module 7: Kirchhoff's Laws
module.exports = {
  "number": 7,
  "slug": "kirchhoffs-laws",
  "title": "Kirchhoff's Laws",
  "estTime": "3–4 hours",
  "objectives": [
    "State Kirchhoff's current law: currents entering a node equal currents leaving it.",
    "State Kirchhoff's voltage law: voltages around any closed loop add to zero.",
    "Apply KCL to find an unknown branch current at a node.",
    "Apply KVL to find an unknown voltage drop in a loop.",
    "Use a consistent sign convention and check answers with both laws."
  ],
  "sections": [
    {
      "heading": "Kirchhoff's Current Law: What Goes In Must Come Out",
      "html": "<p>Kirchhoff's current law (KCL) says that at any node — any point where wires meet — the currents entering equal the currents leaving. Charge cannot pile up at a node and it cannot vanish, so what flows in must flow out. In symbols: the sum of all currents at a node is zero, counting currents in as positive and currents out as negative (or the other way round, as long as you are consistent).</p>\n<p>Example: 5 A flows into a node, and 2 A and 1.5 A flow out through two branches. The third branch must carry 5 − 2 − 1.5 = 1.5 A out. That is the whole law in one line — and it is exactly what you already checked in Modules 5 and 6 when branch currents added up to the total. KCL is why that check always works.</p>\n"
    },
    {
      "heading": "Kirchhoff's Voltage Law: Around the Loop and Back to Zero",
      "html": "<p>Kirchhoff's voltage law (KVL) says that if you walk around any closed loop in a circuit and add up the voltage changes, the total is zero. Every volt the battery gives, the resistors use up. Go around the loop adding rises (battery, +) and drops (resistors, −) and you must come back to zero — energy is conserved, so the books must balance.</p>\n<p>Example: a 12 V battery and three resistors in series with drops of 3 V, 5 V, and 4 V. Around the loop: +12 − 3 − 5 − 4 = 0 ✓. If one drop is unknown, KVL finds it: 12 − 3 − 5 − V = 0 gives V = 4 V. That is the same “drops add to the supply” check from Module 4, now stated as a law you can use on any loop, in any circuit, however tangled.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> KCL is conservation of charge (currents balance at a node). KVL is conservation of energy (voltages balance around a loop). Together with Ohm's law, they solve every DC circuit in this course.</div></p>\n"
    },
    {
      "heading": "Signs: The Only Hard Part",
      "html": "<p>The laws are simple; the signs are where beginners slip. Pick one convention and stick to it for the whole problem. For KVL, walk around the loop in one direction: when you cross a battery from − to +, that is a voltage rise (+12 V); from + to −, a drop (−12 V). When you cross a resistor in the direction of the current, that is a drop (−IR); against the current, a rise (+IR). Add everything; the sum must be zero.</p>\n<p>For KCL, decide: currents entering the node are positive, currents leaving are negative — or the reverse. Either works, but mixing them mid-problem gives wrong answers. If a current comes out negative, that is not an error: it just means the current actually flows the opposite way from the arrow you drew. A negative answer is information, not a mistake.</p>\n"
    },
    {
      "heading": "Worked Example: A Two-Loop Circuit",
      "html": "<p>Take a circuit with a 12 V battery, a 4 Ω resistor in the main path, and a parallel pair of 6 Ω and 12 Ω — the circuit from Module 6. KCL at the top node: the total current 1.5 A enters, and the branch currents 1 A and 0.5 A leave: 1.5 = 1 + 0.5 ✓.</p>\n<p>KVL around the left loop (battery, 4 Ω resistor, 6 Ω branch): +12 − (1.5 × 4) − (1 × 6) = 12 − 6 − 6 = 0 ✓. KVL around the right loop (6 Ω branch and 12 Ω branch): the two branches are in parallel, so they have the same voltage: 1 × 6 = 6 V and 0.5 × 12 = 6 V — walking around that loop, +6 − 6 = 0 ✓. Two laws, three checks, all zero. When your numbers pass KCL and KVL, you can trust them.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>KCL: at any node, currents in = currents out.</li><li>KVL: around any closed loop, voltage rises = voltage drops (sum is zero).</li><li>KCL finds unknown branch currents; KVL finds unknown voltage drops.</li><li>Pick one sign convention and use it for the whole problem.</li><li>A negative current just means it flows opposite to the arrow you drew.</li><li>Use both laws as a check: if they do not balance, something is wrong.</li></ul></p>\n<p><strong>Common mistake:</strong> Mixing sign conventions halfway through a loop — counting the battery as +12 V on one side and then adding the drops as positives too. Rises and drops must have opposite signs, or the sum will not be zero.</p>\n<p><strong>Common mistake:</strong> Forgetting that KVL applies to any closed loop, not just the outside of the circuit. The small loop inside a parallel pair is a loop too, and it must balance.</p>\n<p><strong>Ready check:</strong> If you can use KCL to find a missing branch current and KVL to find a missing voltage drop, and explain what a negative answer means, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Kirchhoff's current law (KCL)",
      "def": "At any node, the currents entering equal the currents leaving; charge is conserved."
    },
    {
      "term": "Kirchhoff's voltage law (KVL)",
      "def": "Around any closed loop, the algebraic sum of voltages is zero; energy is conserved."
    },
    {
      "term": "Node",
      "def": "A point in a circuit where two or more branches meet."
    },
    {
      "term": "Loop (mesh)",
      "def": "Any closed path in a circuit that you can walk around and return to the start."
    },
    {
      "term": "Voltage rise",
      "def": "A gain in voltage when crossing a source from − to +, counted positive in KVL."
    },
    {
      "term": "Voltage drop",
      "def": "A loss of voltage across a resistor, counted negative in KVL when walking with the current."
    },
    {
      "term": "Sign convention",
      "def": "The agreed rule for which voltages and currents count as positive in a calculation."
    },
    {
      "term": "Algebraic sum",
      "def": "A sum that keeps the + and − signs, so rises and drops can cancel to zero."
    },
    {
      "term": "Conservation of charge",
      "def": "Charge cannot be created or destroyed in a circuit — the idea behind KCL."
    },
    {
      "term": "Conservation of energy",
      "def": "Energy cannot be created or destroyed — the idea behind KVL."
    },
    {
      "term": "Gustav Kirchhoff",
      "def": "The German physicist (1824–1887) who stated the two circuit laws in 1845."
    },
    {
      "term": "Negative current",
      "def": "A calculated current with a minus sign: it flows opposite to the direction first assumed."
    }
  ],
  "video": {
    "title": "Kirchhoff’s Laws Explained | KCL & KVL Circuit Analysis | PHY205 Physics Lab",
    "embedUrl": "https://www.youtube.com/embed/FF1VZY8MguE",
    "note": "KCL and KVL explained and verified with real measurements — watch how the meter readings confirm both laws.",
    "more": [
      {
        "title": "Kirchhoff's Laws KCL & KVL Explained Simply | Quark Lab",
        "url": "https://www.youtube.com/watch?v=IN05j_yy73U"
      },
      {
        "title": "1.1 | Ohm's Law, Series & Parallel, KVL & KCL | Circuit Basics",
        "url": "https://www.youtube.com/watch?v=2PG-HFY77VQ"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> At a node, 5 A enters and two branches carry 2 A and 1.5 A out. A third branch current is unknown. Use KCL to find it, and state its direction.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: KCL — in = out. Step 2: 5 = 2 + 1.5 + I3, so I3 = 5 − 3.5 = 1.5 A. Step 3: The unknown branch carries 1.5 A out of the node.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A loop has a 12 V battery and three resistors with drops of 3 V and 5 V. The third drop is unknown. Use KVL to find it.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: KVL — rises = drops. Step 2: 12 = 3 + 5 + V3, so V3 = 12 − 8 = 4 V. Step 3: Check: 3 + 5 + 4 = 12 ✓.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A node has four currents: 3 A in, 1 A in, 2 A out, and an unknown current. Find the unknown current, and explain what a negative answer would mean if the unknown had been assumed to enter the node.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: KCL — in = out. In = 3 + 1 = 4 A; out = 2 A + the unknown. Step 2: So the unknown carries 4 − 2 = 2 A out of the node. Step 3: If you had instead assumed the unknown current enters the node, your equation would be 3 + 1 + I = 2, giving I = −2 A. The minus sign means the current actually flows the opposite way from the arrow you drew — 2 A leaving, which agrees with the first calculation. A negative answer is information, not an error.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A series circuit has a 24 V battery and resistors of 8 Ω, 12 Ω, and 20 Ω. Use KVL and Ohm's law to find each voltage drop.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: R(total) = 40 Ω; I = 24 ÷ 40 = 0.6 A. Step 2: Drops: 0.6 × 8 = 4.8 V; 0.6 × 12 = 7.2 V; 0.6 × 20 = 12 V. Step 3: KVL check: 4.8 + 7.2 + 12 = 24 V ✓.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Two branches in parallel carry 4 A and 6 A toward a node, and one branch carries current away. What is the current in that branch?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: KCL — in = out. Step 2: In = 4 + 6 = 10 A. Step 3: The single outgoing branch carries 10 A away from the node.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Walk around a loop and add the voltages: +9 V (battery), −4 V (resistor 1), −6 V (resistor 2). The sum is −1 V, not zero. What does that tell you, and what is the most likely cause?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: KVL says the sum must be zero, so −1 V means an error somewhere. Step 2: The most likely causes are a misread meter value, a wrong sign on one term, or a missing component in the loop (for example a second battery, or a resistor whose drop was not included). Step 3: Recheck each measurement and each sign, and check whether the loop you walked is really closed — an uncounted 1 V drop is hiding somewhere.</p>"
    }
  ],
  "quiz": [
    {
      "q": "At a node, 5 A enters and branches carry 2 A and 1.5 A out. What does a third branch carry?",
      "choices": [
        "8.5 A out",
        "1.5 A out",
        "3.5 A in",
        "0 A — the node is balanced"
      ],
      "answer": 1,
      "explanation": "Correct: (b). KCL: in = out, so 5 = 2 + 1.5 + I3, giving I3 = 1.5 A out. (a) 8.5 A adds everything together instead of balancing. (c) 3.5 A in is the wrong direction and the wrong value. (d) is wrong: the node is not balanced until the third branch carries 1.5 A."
    },
    {
      "q": "What does Kirchhoff's voltage law say?",
      "choices": [
        "Currents entering a node equal currents leaving it",
        "The algebraic sum of voltages around any closed loop is zero",
        "Voltage equals current times resistance",
        "The total resistance is the sum of the resistors"
      ],
      "answer": 1,
      "explanation": "Correct: (b). KVL: voltages around a closed loop add to zero. (a) is Kirchhoff's current law. (c) is Ohm's law. (d) is the series resistance rule."
    },
    {
      "q": "A loop has a 12 V battery and drops of 3 V and 5 V. What is the third drop?",
      "choices": [
        "20 V",
        "4 V",
        "8 V",
        "0 V"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 12 − 3 − 5 = 4 V. (a) 20 V adds everything. (c) 8 V is 3 + 5 — the known drops, not the missing one. (d) 0 V would mean the loop has no third resistor."
    },
    {
      "q": "A calculated branch current comes out as −2 A. What does this mean?",
      "choices": [
        "The calculation is definitely wrong",
        "The current is 2 A flowing opposite to the direction first assumed",
        "There is no current in that branch",
        "The branch is a short circuit"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A negative answer means the current flows opposite to the arrow you drew — it is information, not an error. (a) is wrong: negative currents are normal in KCL/KVL work. (c) is wrong: 2 A does flow, just the other way. (d) is wrong: a short circuit is a near-zero resistance, not a negative current."
    },
    {
      "q": "Which law would you use to find an unknown branch current at a junction?",
      "choices": [
        "Ohm's law only",
        "Kirchhoff's voltage law",
        "Kirchhoff's current law",
        "The power law P = V × I"
      ],
      "answer": 2,
      "explanation": "Correct: (c). KCL balances currents at a node, so it finds the missing branch current. (a) is wrong: Ohm's law alone cannot find a branch current without the branch voltage. (b) is for voltages around a loop. (d) is for power, not branch currents."
    },
    {
      "q": "Walking around a loop you record +12 V, −6 V, and −6 V. What is the sum, and what does it mean?",
      "choices": [
        "0 V — KVL is satisfied",
        "+24 V — the battery is too big",
        "−12 V — the resistors are wrong",
        "0 A — the current is zero"
      ],
      "answer": 0,
      "explanation": "Correct: (a). +12 − 6 − 6 = 0, so KVL is satisfied: rises equal drops. (b) is wrong: you do not add the magnitudes. (c) is wrong: the signs were handled correctly and the sum is zero. (d) confuses volts with amps."
    },
    {
      "q": "KCL is based on which conservation principle?",
      "choices": [
        "Conservation of energy",
        "Conservation of charge",
        "Conservation of power",
        "Conservation of voltage"
      ],
      "answer": 1,
      "explanation": "Correct: (b). KCL is conservation of charge: charge cannot pile up at a node. (a) is the principle behind KVL. (c) and (d) are not conservation principles used here."
    },
    {
      "q": "In a series circuit the drops are 4.8 V, 7.2 V, and 12 V. What is the battery voltage?",
      "choices": [
        "12 V",
        "19.2 V",
        "24 V",
        "4.8 V"
      ],
      "answer": 2,
      "explanation": "Correct: (c). By KVL the drops add to the supply: 4.8 + 7.2 + 12 = 24 V. (a) 12 V is only the largest drop. (b) 19.2 V misses the 4.8 V drop. (d) 4.8 V is only the smallest drop."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Kirchhoff's Laws: Quick Reference</h3>\n<p><strong>Core idea:</strong> KCL: currents in = currents out at a node. KVL: voltages around a loop add to zero.</p>\n<p><strong>Key terms:</strong> Kirchhoff's current law · Kirchhoff's voltage law · Node · Loop · Sign convention.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>KCL finds a missing branch current; KVL finds a missing voltage drop.</li>\n<li>Pick one sign convention and keep it for the whole problem.</li>\n<li>A negative current means it flows the other way — not an error.</li>\n<li>Check every answer: KCL at the nodes, KVL around the loops.</li></ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
