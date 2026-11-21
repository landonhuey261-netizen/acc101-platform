// egr104 - Module 4: Series Circuits
module.exports = {
  "number": 4,
  "slug": "series-circuits",
  "title": "Series Circuits",
  "estTime": "3–4 hours",
  "objectives": [
    "Recognise a series circuit: one single path for the current.",
    "Add resistances in series: R(total) = R1 + R2 + R3 + …",
    "Use Ohm's law to find the current, which is the same everywhere in a series circuit.",
    "Work out each resistor's voltage drop and check that the drops add up to the supply voltage.",
    "Explain what happens when one part of a series circuit fails open."
  ],
  "sections": [
    {
      "heading": "One Path, One Current",
      "html": "<p>In a series circuit every component is connected end to end, so there is only one path for the charge to take. The same current flows through every part: the battery, each resistor, each bulb. If you measure 0.2 A anywhere in the loop, you will measure 0.2 A everywhere in the loop. That single fact is the key to the whole module.</p>\n<p>Because there is only one path, a break anywhere stops everything. Old strings of Christmas lights were wired in series, which is why one dead bulb darkened the whole string. Modern strings are wired differently for exactly that reason — you will see why in the next module.</p>\n"
    },
    {
      "heading": "Resistances Add Up",
      "html": "<p>When resistors are in series, the total resistance is just the sum: R(total) = R1 + R2 + R3 + … The charge has to push through each resistance in turn, so the total opposition is the sum of all of them. A series circuit always has more resistance than its largest single resistor.</p>\n<p>Example: 10 Ω, 20 Ω, and 30 Ω in series give R(total) = 10 + 20 + 30 = 60 Ω. With a 12 V battery, the current is I = V ÷ R = 12 ÷ 60 = 0.2 A — the same 0.2 A through every resistor.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Series: add the resistances. One current everywhere. The supply voltage is shared between the parts.</div></p>\n"
    },
    {
      "heading": "Voltage Drops Share the Supply",
      "html": "<p>Each resistor in series “uses up” some of the supply voltage — its voltage drop. The drop across each resistor is V = I × R, using the same current for all of them. In our example: V1 = 0.2 A × 10 Ω = 2 V; V2 = 0.2 × 20 = 4 V; V3 = 0.2 × 30 = 6 V. Add them: 2 + 4 + 6 = 12 V, exactly the battery voltage. That is no coincidence — it is Kirchhoff's voltage law in action, and it is a free check on every series calculation you will ever do.</p>\n<p>Notice the pattern: the biggest resistor takes the biggest share of the voltage. The 30 Ω resistor gets 6 V, half the supply, because it is half of the total resistance. That is the voltage divider idea, which gets its own treatment in Module 6.</p>\n"
    },
    {
      "heading": "Power in a Series Circuit",
      "html": "<p>Each resistor turns some electrical energy into heat. The power in each one is P = I² × R (or P = V × I using its own voltage drop). In our example: P1 = 0.2² × 10 = 0.4 W; P2 = 0.04 × 20 = 0.8 W; P3 = 0.04 × 30 = 1.2 W. Total: 0.4 + 0.8 + 1.2 = 2.4 W. Check against the battery: P = V × I = 12 × 0.2 = 2.4 W ✓. The power the battery supplies always equals the power the resistors use — energy is conserved, and the numbers must balance.</p>\n<p>That also tells you how to pick a resistor's power rating: each resistor must be rated for more than the power it actually dissipates, or it will overheat. The 30 Ω resistor here needs a rating above 1.2 W, so a 2 W resistor is a sensible choice.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Series means one path; the same current flows through every part.</li><li>R(total) = R1 + R2 + R3 + … — resistances add.</li><li>Each voltage drop is V = I × R, and the drops add up to the supply voltage.</li><li>Power in each resistor is I² × R; the total equals the power the battery supplies.</li><li>One break anywhere stops the whole series circuit.</li></ul></p>\n<p><strong>Common mistake:</strong> Using the full battery voltage across one resistor in a series circuit. Each resistor only gets its own share — its voltage drop — and using the full 12 V for every resistor gives currents that are far too big.</p>\n<p><strong>Common mistake:</strong> Forgetting that the total resistance in series is bigger than any single resistor. If your calculated total is smaller than the largest resistor, you have added wrong.</p>\n<p><strong>Ready check:</strong> If you can take a 12 V battery and 10 Ω, 20 Ω, 30 Ω in series and find the current (0.2 A) and the three drops (2 V, 4 V, 6 V) without looking, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Series circuit",
      "def": "A circuit in which components are connected end to end, giving one single path for the current."
    },
    {
      "term": "Total resistance (series)",
      "def": "The sum of all the resistances in a series circuit: R(total) = R1 + R2 + R3 + …"
    },
    {
      "term": "Voltage drop",
      "def": "The voltage used up across one component; in series, the drops add up to the supply voltage."
    },
    {
      "term": "Voltage divider",
      "def": "A series circuit used to produce a smaller voltage from a larger supply; each resistor takes a share in proportion to its resistance."
    },
    {
      "term": "Open fault",
      "def": "A break in a circuit that stops all current; in series, one open stops everything."
    },
    {
      "term": "Power dissipation",
      "def": "Electrical energy turned into heat in a resistor, in watts."
    },
    {
      "term": "Power rating",
      "def": "The maximum power a resistor can safely dissipate without overheating."
    },
    {
      "term": "Single loop",
      "def": "A circuit with one closed path; the defining shape of a series circuit."
    },
    {
      "term": "Current (series)",
      "def": "The same at every point in a series circuit."
    },
    {
      "term": "Equivalent resistance",
      "def": "One single resistance that behaves exactly like a combination of resistors."
    },
    {
      "term": "Load (series)",
      "def": "A device in the single path that uses energy, such as a bulb or resistor."
    },
    {
      "term": "Check sum",
      "def": "Adding the voltage drops to confirm they equal the supply voltage — a free error check."
    }
  ],
  "video": {
    "title": "Series and Parallel Circuits | Bozeman Science",
    "embedUrl": "https://www.youtube.com/embed/x2EuYqj_0Uk",
    "note": "Series and parallel compared with a simulation: watch the series part, where one bulb dims the others and one break kills the loop.",
    "more": [
      {
        "title": "Series & Parallel Circuits - The Learning Circuit | element14",
        "url": "https://www.youtube.com/watch?v=Bs-npHUC66M"
      },
      {
        "title": "Series & Parallel: Does Resistance Rise? | Class 10 Physics | Physics Explained",
        "url": "https://www.youtube.com/watch?v=5khpCgJWl1o"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Resistors of 5 Ω, 15 Ω, and 20 Ω are connected in series across a 12 V battery. Find the total resistance and the current.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: R(total) = 5 + 15 + 20 = 40 Ω. Step 2: I = V ÷ R = 12 V ÷ 40 Ω = 0.3 A. Step 3: The same 0.3 A flows through every resistor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Using the circuit in Problem 1, find the voltage drop across each resistor and check that they add up to 12 V.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: V1 = 0.3 × 5 = 1.5 V. Step 2: V2 = 0.3 × 15 = 4.5 V. Step 3: V3 = 0.3 × 20 = 6 V. Step 4: Check: 1.5 + 4.5 + 6 = 12 V ✓ — exactly the battery voltage.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 24 V supply feeds three resistors in series: 8 Ω, 12 Ω, and 20 Ω. Find the current and the power dissipated in the 20 Ω resistor.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: R(total) = 8 + 12 + 20 = 40 Ω. Step 2: I = 24 ÷ 40 = 0.6 A. Step 3: Power in the 20 Ω resistor: P = I² × R = 0.6² × 20 = 0.36 × 20 = 7.2 W. (Check with V × I: the drop across it is 0.6 × 20 = 12 V, and 12 × 0.6 = 7.2 W ✓.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Two bulbs in series across a 12 V battery: one is 6 Ω and the other is 18 Ω. Which bulb is brighter, and what is the voltage across each?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: R(total) = 24 Ω; I = 12 ÷ 24 = 0.5 A. Step 2: Drops: 0.5 × 6 = 3 V and 0.5 × 18 = 9 V (check: 3 + 9 = 12 ✓). Step 3: The 18 Ω bulb is brighter because it dissipates more power: 0.5² × 18 = 4.5 W versus 0.5² × 6 = 1.5 W. In series, the bigger resistor gets more voltage and more power.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A series circuit has a 9 V battery and a total resistance of 45 Ω. A second identical circuit is built with the same battery but a total resistance of 90 Ω. Compare the two currents.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Circuit 1: I = 9 ÷ 45 = 0.2 A. Step 2: Circuit 2: I = 9 ÷ 90 = 0.1 A. Step 3: Doubling the total resistance halves the current — current is inversely proportional to resistance at fixed voltage.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A student measures the voltage drops in a series circuit as 3 V, 5 V, and 2 V, and the battery is 12 V. What does the measurement tell them?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The drops add to 3 + 5 + 2 = 10 V, not 12 V. Step 2: Two volts are missing, so something is wrong: either a measurement was misread, a meter lead was on the wrong points, or there is another component (or a bad connection with resistance) that is dropping the other 2 V. Step 3: The check sum is doing its job — when the drops do not add up to the supply, go and find the missing volts before trusting anything else.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Three resistors — 10 Ω, 20 Ω, and 30 Ω — are connected in series. What is the total resistance?",
      "choices": [
        "5.45 Ω",
        "30 Ω",
        "60 Ω",
        "6,000 Ω"
      ],
      "answer": 2,
      "explanation": "Correct: (c). In series, resistances add: 10 + 20 + 30 = 60 Ω. (a) 5.45 Ω is the parallel equivalent of these three resistors, not the series total. (b) 30 Ω is just the largest resistor. (d) 6,000 Ω is 10 × 20 × 30 — multiplication, which is not how series resistance works."
    },
    {
      "q": "A 12 V battery drives a series circuit with a total resistance of 60 Ω. What is the current?",
      "choices": [
        "0.2 A",
        "5 A",
        "0.05 A",
        "720 A"
      ],
      "answer": 0,
      "explanation": "Correct: (a). I = V ÷ R = 12 ÷ 60 = 0.2 A, the same everywhere in the loop. (b) 5 A is 60 ÷ 12 — upside down. (c) 0.05 A is 3 ÷ 60 — the wrong voltage. (d) 720 A is 12 × 60 — multiplication instead of division."
    },
    {
      "q": "In the circuit above (12 V, 0.2 A, resistors 10 Ω, 20 Ω, 30 Ω), what is the voltage drop across the 20 Ω resistor?",
      "choices": [
        "2 V",
        "4 V",
        "6 V",
        "12 V"
      ],
      "answer": 1,
      "explanation": "Correct: (b). V = I × R = 0.2 × 20 = 4 V. (a) 2 V is the drop across the 10 Ω resistor. (c) 6 V is the drop across the 30 Ω resistor. (d) 12 V is the whole battery voltage — no single resistor gets all of it in series."
    },
    {
      "q": "In a series circuit, what happens if one resistor is removed and the wires are left disconnected?",
      "choices": [
        "The other resistors get brighter",
        "The current stays the same",
        "All current stops, because the loop is broken",
        "The voltage across the others doubles"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Removing a resistor breaks the only path, making an open circuit, so no current flows anywhere. (a) is wrong: with no current, nothing gets brighter. (b) is wrong: the current becomes zero. (d) is wrong: with no current there are no voltage drops at all."
    },
    {
      "q": "Which resistor in a series circuit dissipates the most power?",
      "choices": [
        "The smallest resistor",
        "The largest resistor",
        "The first resistor after the battery",
        "They all dissipate exactly the same power"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Power is I² × R and the current is the same for all, so the largest R gives the largest power. (a) is wrong: the smallest resistor dissipates the least. (c) is wrong: position in the loop does not matter. (d) is wrong: power depends on R, which differs."
    },
    {
      "q": "A series circuit has voltage drops of 1.5 V, 4.5 V, and 6 V. What is the supply voltage?",
      "choices": [
        "6 V",
        "10 V",
        "12 V",
        "4 V"
      ],
      "answer": 2,
      "explanation": "Correct: (c). The drops add up to the supply: 1.5 + 4.5 + 6 = 12 V. (a) 6 V is only the largest single drop. (b) 10 V misses 2 V. (d) 4 V is not any of the sums."
    },
    {
      "q": "Two resistors in series are 100 Ω and 300 Ω. What fraction of the supply voltage appears across the 300 Ω resistor?",
      "choices": [
        "One quarter",
        "One third",
        "Three quarters",
        "One half"
      ],
      "answer": 2,
      "explanation": "Correct: (c). The 300 Ω resistor is 300 ÷ (100 + 300) = 3/4 of the total resistance, so it takes 3/4 of the voltage. (a) 1/4 is the share of the 100 Ω resistor. (b) 1/3 is 100 ÷ 300, the ratio of the resistors, not the share. (d) 1/2 would only be true if the resistors were equal."
    },
    {
      "q": "Why must a resistor's power rating be higher than the power it actually dissipates?",
      "choices": [
        "So the resistor conducts better",
        "So the circuit draws less current",
        "So the resistor does not overheat and fail",
        "So the voltage drop is larger"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A resistor that dissipates more power than its rating overheats and can burn out or change value. (a) is wrong: rating does not change conduction. (b) is wrong: rating does not change the current. (d) is wrong: the voltage drop depends on I and R, not on the rating."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Series Circuits: Quick Reference</h3>\n<p><strong>Core idea:</strong> One path, one current. Resistances add, and the voltage drops add up to the supply voltage.</p>\n<p><strong>Key terms:</strong> Series circuit · Total resistance · Voltage drop · Voltage divider · Open fault · Power dissipation.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>R(total) = R1 + R2 + R3 + …</li>\n<li>Same current everywhere in the loop.</li>\n<li>Drops add up to the supply — always check the sum.</li>\n<li>Biggest resistor takes the biggest voltage share and the most power.</li></ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
