// ele102 - Module 2: Voltage, Resistance & Ohm's Law
module.exports = {
  "number": 2,
  "slug": "voltage-resistance-and-ohms-law",
  "title": "Voltage, Resistance & Ohm's Law",
  "estTime": "3–4 hours",
  "objectives": [
    "Define voltage, current, and resistance, and state their units.",
    "State Ohm's law and use it to solve for voltage, current, or resistance.",
    "Explain the water-pipe analogy for voltage, current, and resistance.",
    "Use the Ohm's law circle (E = I × R) to solve circuit problems.",
    "Explain why resistance rises with temperature and length, and falls with cross-sectional area."
  ],
  "sections": [
    {
      "heading": "Voltage, Current & Resistance",
      "html": "<p><strong>Voltage</strong> is electrical pressure — the force that pushes charge through a circuit — measured in <strong>volts (V)</strong>. A battery or a power supply creates a voltage difference between its terminals, and that difference is what drives the electrons around the circuit. <strong>Current</strong> is the flow of charge, measured in <strong>amps (A)</strong>. <strong>Resistance</strong> is the opposition to that flow, measured in <strong>ohms (Ω)</strong>. Every part of a circuit has some resistance: the wire, the connections, and the load itself.</p>\n<p>The water-pipe analogy makes the three easy to picture. Voltage is the water pressure in the pipe, current is the water flowing through it, and resistance is the narrowness of the pipe. Raise the pressure and more water flows; narrow the pipe and less water flows; widen the pipe and more flows. The same is true in a circuit: raise the voltage and more current flows; raise the resistance and less current flows. The analogy is not perfect — water does not behave exactly like electrons — but it is the fastest way to build an intuition for how the three relate.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Voltage pushes, current flows, resistance limits. If you know any two of the three, Ohm's law gives you the third.</div>"
    },
    {
      "heading": "Ohm's Law: E = I × R",
      "html": "<p><strong>Ohm's law</strong> states that the current in a circuit is directly proportional to the voltage and inversely proportional to the resistance. In symbols: <strong>E = I × R</strong>, where E is voltage in volts, I is current in amps, and R is resistance in ohms. Rearranged, it gives the other two forms: <strong>I = E ÷ R</strong> and <strong>R = E ÷ I</strong>. The three forms are often drawn as a circle with E on top and I and R on the bottom — cover the value you want, and the circle shows the formula.</p>\n<p>Worked example: a 120-volt circuit feeds a load with 24 ohms of resistance. The current is I = E ÷ R = 120 ÷ 24 = 5 amps. Another: a 12-volt battery drives 3 amps through a load. The load's resistance is R = E ÷ I = 12 ÷ 3 = 4 ohms. A third: 2 amps flows through a 60-ohm resistor. The voltage across it is E = I × R = 2 × 60 = 120 volts. The same three numbers, rearranged three ways — and every circuit problem in this course is a version of this.</p>"
    },
    {
      "heading": "What Changes Resistance",
      "html": "<p>Resistance depends on the material, the length, the cross-sectional area, and the temperature. A longer wire has more resistance, because the electrons must travel further and collide with more atoms. A thicker wire has less resistance, because there is more room for the electrons to flow. Copper has less resistance than aluminum for the same size, and aluminum has less than steel. And for most conductors, resistance rises as temperature rises — a hot filament has more resistance than a cold one, which is why an incandescent bulb's resistance is much higher when it is on than when it is off.</p>\n<p>This is why wire size matters in the trade. A long run of small wire has enough resistance to drop voltage along its length — the voltage drop covered in Module 9 — and a wire that is too small for its current overheats. The NEC tables in the 2023 edition match wire size to current for exactly this reason, and the electrician who understands resistance understands why those tables exist.</p>"
    },
    {
      "heading": "Short Circuits, Open Circuits & Overloads",
      "html": "<p>A <strong>short circuit</strong> is a path with almost no resistance — for example, a hot wire touching a neutral wire directly. Ohm's law says the current will be enormous: I = E ÷ R, and when R is nearly zero, I is nearly infinite. In practice the current is limited only by the resistance of the wire and the source, and it is high enough to melt wire and start fires — which is why breakers and fuses exist to open the circuit before the damage is done.</p>\n<p>An <strong>open circuit</strong> is a broken path — a switch open, a wire cut, a connection loose — and its resistance is effectively infinite, so the current is zero. An <strong>overload</strong> is a circuit carrying more current than it is rated for, but not a short: too many loads on one circuit, for example. The current is higher than the wire and breaker are rated for, the wire heats up, and the breaker trips. The three conditions are the three ways a circuit fails, and telling them apart is the start of troubleshooting.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Voltage (volts) pushes, current (amps) flows, resistance (ohms) limits.</li>\n<li>Ohm's law: E = I × R, I = E ÷ R, R = E ÷ I.</li>\n<li>Resistance rises with length and temperature, and falls with cross-sectional area and better conductivity.</li>\n<li>A short circuit has near-zero resistance and huge current; an open circuit has near-infinite resistance and zero current; an overload is too much current for the rating.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Solving for the wrong value — dividing when you should multiply. Cover the value you want in the Ohm's law circle and read the formula it shows.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Forgetting that resistance changes with temperature. A resistor measured cold will not have the same resistance when it is hot and working.</div>\n<p><strong>Ready-to-Work link:</strong> If you can state Ohm's law in all three forms, solve for any value, and explain short, open, and overload, you have this module. Module 3 covers power and Watt's law.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Voltage",
      "def": "Electrical pressure, measured in volts; it pushes charge through a circuit."
    },
    {
      "term": "Current",
      "def": "The flow of electric charge, measured in amps."
    },
    {
      "term": "Resistance",
      "def": "Opposition to current flow, measured in ohms."
    },
    {
      "term": "Volt (V)",
      "def": "The unit of voltage."
    },
    {
      "term": "Ampere (amp, A)",
      "def": "The unit of current; one amp is one coulomb per second."
    },
    {
      "term": "Ohm (Ω)",
      "def": "The unit of resistance."
    },
    {
      "term": "Ohm's law",
      "def": "E = I × R: current is directly proportional to voltage and inversely proportional to resistance."
    },
    {
      "term": "Short circuit",
      "def": "A path with almost no resistance, causing dangerously high current."
    },
    {
      "term": "Open circuit",
      "def": "A broken path with effectively infinite resistance and zero current."
    },
    {
      "term": "Overload",
      "def": "A circuit carrying more current than it is rated for, but not a short circuit."
    },
    {
      "term": "Resistivity",
      "def": "A property of a material that describes how strongly it resists current flow."
    },
    {
      "term": "Cross-sectional area",
      "def": "The area of a wire's cut face; a larger area means less resistance."
    },
    {
      "term": "Temperature coefficient",
      "def": "How much a material's resistance changes with temperature."
    },
    {
      "term": "Load",
      "def": "The part of a circuit that uses electrical energy, such as a light, motor, or heater."
    },
    {
      "term": "Source",
      "def": "The part of a circuit that supplies electrical energy, such as a battery or power supply."
    }
  ],
  "video": {
    "title": "Ohms Law Explained - The basics circuit theory",
    "embedUrl": "https://www.youtube.com/embed/HsLLq6Rm5tU",
    "note": "An Ohm's law walkthrough. As you watch, solve each example yourself before the answer is shown.",
    "more": [
      {
        "title": "Ohm's Law Explained - Voltage, Current, Resistance, Power - Volts, Amps & Watts",
        "url": "https://www.youtube.com/watch?v=NxxNu9Cek1E"
      },
      {
        "title": "Electricity Finally Explained: Voltage, Current & Ohm’s Law (Intuitively)",
        "url": "https://www.youtube.com/watch?v=9zjZbuOA6zM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 120-volt circuit feeds a load with 24 ohms of resistance. What is the current?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Use I = E ÷ R. Step 2: I = 120 ÷ 24 = 5 amps. Step 3: The current is 5 amps.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A 12-volt battery drives 3 amps through a load. What is the load's resistance?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Use R = E ÷ I. Step 2: R = 12 ÷ 3 = 4 ohms. Step 3: The load's resistance is 4 ohms.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A current of 2 amps flows through a 60-ohm resistor. What is the voltage across the resistor?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Use E = I × R. Step 2: E = 2 × 60 = 120 volts. Step 3: The voltage across the resistor is 120 volts.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A 240-volt circuit has a 10-amp load. What is the resistance of the load?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Use R = E ÷ I. Step 2: R = 240 ÷ 10 = 24 ohms. Step 3: The load's resistance is 24 ohms.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A wire is replaced with a wire twice as long and the same size. What happens to its resistance, and what happens to the current if the voltage stays the same?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Resistance rises with length, so the resistance doubles. Step 2: By Ohm's law, I = E ÷ R, so doubling R halves the current. Step 3: The current is half what it was.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A hot wire touches a neutral wire directly. What condition is this, and what does Ohm's law predict?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: This is a short circuit — a path with almost no resistance. Step 2: I = E ÷ R, and with R near zero, the current is enormous. Step 3: The breaker or fuse must open the circuit before the wire melts or a fire starts.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Ohm's law states that current is:",
      "choices": [
        "Directly proportional to voltage and inversely proportional to resistance",
        "Directly proportional to resistance",
        "Inversely proportional to voltage",
        "Independent of voltage and resistance"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Current rises with voltage and falls with resistance. (b) Current falls as resistance rises. (c) Current rises with voltage. (d) Current depends on both voltage and resistance."
    },
    {
      "q": "A 120-volt circuit feeds a 24-ohm load. The current is:",
      "choices": [
        "2 amps",
        "5 amps",
        "24 amps",
        "120 amps"
      ],
      "answer": 1,
      "explanation": "Correct: (b). I = 120 ÷ 24 = 5 amps. (a) 2 amps would need 60 ohms. (c) 24 amps confuses the resistance with the current. (d) 120 amps confuses the voltage with the current."
    },
    {
      "q": "A 12-volt battery drives 3 amps through a load. The resistance is:",
      "choices": [
        "3 ohms",
        "4 ohms",
        "9 ohms",
        "36 ohms"
      ],
      "answer": 1,
      "explanation": "Correct: (b). R = 12 ÷ 3 = 4 ohms. (a) 3 ohms confuses the current with the resistance. (c) 9 ohms is 12 minus 3. (d) 36 ohms is 12 × 3, the wrong operation."
    },
    {
      "q": "If the voltage stays the same and the resistance doubles, the current:",
      "choices": [
        "Doubles",
        "Stays the same",
        "Is halved",
        "Goes to zero"
      ],
      "answer": 2,
      "explanation": "Correct: (c). I = E ÷ R, so doubling R halves I. (a) Doubling would need the voltage to double. (b) Current changes when resistance changes. (d) Current goes to zero only in an open circuit."
    },
    {
      "q": "Resistance rises with:",
      "choices": [
        "Shorter length",
        "Larger cross-sectional area",
        "Greater length",
        "Lower temperature"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A longer wire has more resistance. (a) Shorter length lowers resistance. (b) Larger area lowers resistance. (d) Lower temperature lowers resistance for most conductors."
    },
    {
      "q": "A short circuit has:",
      "choices": [
        "Near-zero resistance and very high current",
        "Infinite resistance and zero current",
        "Normal resistance and normal current",
        "No voltage"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A short is a near-zero-resistance path, so current is enormous. (b) That describes an open circuit. (c) A short is not normal operation. (d) The voltage is still present; the resistance is what changed."
    },
    {
      "q": "An open circuit has:",
      "choices": [
        "Near-zero resistance",
        "Very high current",
        "Effectively infinite resistance and zero current",
        "No voltage anywhere"
      ],
      "answer": 2,
      "explanation": "Correct: (c). An open circuit is a broken path: infinite resistance, zero current. (a) Near-zero resistance is a short circuit. (b) An open circuit carries no current. (d) Voltage is still present across the open."
    },
    {
      "q": "The unit of resistance is the:",
      "choices": [
        "Volt",
        "Amp",
        "Ohm",
        "Watt"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Resistance is measured in ohms. (a) Volts measure voltage. (b) Amps measure current. (d) Watts measure power."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Voltage, Resistance & Ohm's Law: Quick Reference</h3>\n<p><strong>Core idea:</strong> Voltage pushes, current flows, resistance limits. Know any two, and Ohm's law gives you the third.</p>\n<p><strong>Ohm's law:</strong> E = I × R · I = E ÷ R · R = E ÷ I (E in volts, I in amps, R in ohms).</p>\n<p><strong>Resistance:</strong> Rises with length and temperature · Falls with cross-sectional area and better conductivity.</p>\n<p><strong>Faults:</strong> Short circuit = near-zero R, huge I · Open circuit = infinite R, zero I · Overload = too much I for the rating.</p>\n<p><strong>Self-check:</strong> Solve 120 V ÷ 24 Ω, 12 V ÷ 3 A, and 2 A × 60 Ω, and explain short vs. open vs. overload, without looking.</p>\n"
};
