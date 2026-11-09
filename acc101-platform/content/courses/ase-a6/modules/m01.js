// ase-a6 - Module 1: Electrical Fundamentals & Ohm's Law
module.exports = {
  "number": 1,
  "slug": "electrical-fundamentals-ohms-law",
  "title": "Electrical Fundamentals & Ohm's Law",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what voltage, current, and resistance are, in plain words.",
    "Use Ohm's law (V = IR) to find any one of the three values from the other two.",
    "Describe the parts of a circuit: source, load, conductors, and control.",
    "Explain the difference between series and parallel circuits.",
    "Recognize the three circuit faults: opens, shorts, and high resistance."
  ],
  "sections": [
    {
      "heading": "Voltage, Current, and Resistance — In Plain Words",
      "html": "<p>Electricity in a car is the flow of tiny charged particles — electrons — through wires. Three words describe that flow. <strong>Voltage</strong> is the push: the electrical pressure that drives electrons around a circuit, supplied by the battery and the alternator. <strong>Current</strong> is the flow itself: how many electrons pass a point each second, measured in amps. <strong>Resistance</strong> is the opposition to that flow: every wire, connector, and load resists the flow a little, and that resistance turns some of the electrical energy into heat.</p>\n<p>A useful picture is water in a pipe. Voltage is the water pressure, current is the amount of water flowing, and resistance is a narrow section of pipe that restricts the flow. Raise the pressure and more water flows; narrow the pipe and less flows. The same three-way relationship governs every circuit in the car, and it is written as one formula — Ohm's law — which you will use for the rest of your career.</p>"
    },
    {
      "heading": "Ohm's Law: V = IR",
      "html": "<p><strong>Ohm's law</strong> says that voltage equals current multiplied by resistance: <strong>V = I × R</strong>. If you know any two of the three values, you can find the third. Rearranged, current equals voltage divided by resistance (I = V ÷ R), and resistance equals voltage divided by current (R = V ÷ I). Worked example: a circuit with a 12-volt source and a load of 6 ohms draws 12 ÷ 6 = 2 amps. Another: a circuit carrying 3 amps with a 4-ohm load drops 3 × 4 = 12 volts across that load.</p>\n<p>Ohm's law is also a diagnostic tool. If you measure the voltage across a load and the current through it, you can work out its resistance and compare it with what the service information says it should be. If the resistance is far higher than it should be, something is wrong — a corroded connection, a damaged wire, or a failing load. The formula never changes; the numbers in it are the evidence.</p>\n<div class=\"callout\"><strong>Key idea:</strong> V = IR is the one formula that runs this whole course. Every test you will learn — voltage drop, current draw, resistance checks — is Ohm's law with a meter in your hand.</div>"
    },
    {
      "heading": "The Parts of a Circuit",
      "html": "<p>Every circuit in a car has the same four parts. The <strong>source</strong> supplies the push: the battery when the engine is off, the alternator when it is running. The <strong>load</strong> does the work: a light bulb, a starter motor, a fuel pump, a computer. The <strong>conductors</strong> carry the current: wires, cables, and the car's metal body, which serves as the return path (the ground) for most circuits. And the <strong>control</strong> decides when the circuit runs: a switch, a relay, or a computer.</p>\n<p>Current must have a complete path — a loop — from the source, through the load, and back to the source. Break the loop anywhere and nothing flows. That single fact explains the most common circuit fault of all: the <strong>open</strong>, a break in the loop. A blown fuse, a cut wire, a corroded connector, or a failed switch all create an open, and the load simply stops working.</p>"
    },
    {
      "heading": "Series, Parallel, and the Three Faults",
      "html": "<p>In a <strong>series circuit</strong>, the parts are in a single line: the same current flows through every part, and the voltage is shared between them. In a <strong>parallel circuit</strong>, the parts are side by side: each one gets the full voltage, and the current splits between them. Most car circuits are parallel — each light, each motor, each computer gets full voltage and works independently of the others, which is why one dead headlight does not kill the other one.</p>\n<p>Three faults cover almost everything that goes wrong. An <strong>open</strong> is a break: no current flows, the load does nothing. A <strong>short</strong> is current taking a shortcut it should not take — usually to ground — which blows a fuse or overheats a wire. <strong>High resistance</strong> is a partial break: a corroded connector or a damaged wire that still lets some current through, but not enough, so the load works weakly — a dim light, a slow starter, a motor that strains. High resistance is the hardest fault to find and the one this course spends the most time on, because it hides from the simple tests.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Voltage is the push, current is the flow, resistance is the opposition — V = IR ties them together.</li>\n<li>Every circuit needs a source, a load, conductors, and a control, in a complete loop.</li>\n<li>Series: same current, shared voltage. Parallel: full voltage each, current splits — most car circuits are parallel.</li>\n<li>Three faults: open (nothing flows), short (current takes a shortcut), high resistance (some current, weak load).</li>\n<li>Ohm's law is a diagnostic tool: measure two values, work out the third, and compare with what it should be.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Testing a circuit with the power off and calling it good. Resistance tests with the power off can miss high-resistance faults that only show up when current is actually flowing — which is why the voltage drop test (Module 10) is the better test for a live circuit.</div>\n<p><strong>Ready-to-Work link:</strong> If you can work out the missing value in V = IR and name the three circuit faults, you have this module. Module 2 puts the source in your hands: the battery.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Voltage",
      "def": "The electrical push that drives current around a circuit, supplied by the battery and the alternator."
    },
    {
      "term": "Current",
      "def": "The flow of electrons through a circuit, measured in amps."
    },
    {
      "term": "Resistance",
      "def": "The opposition to current flow in a circuit, measured in ohms; it turns electrical energy into heat."
    },
    {
      "term": "Ohm's law",
      "def": "The relationship V = I × R: voltage equals current multiplied by resistance."
    },
    {
      "term": "Amp",
      "def": "The unit of electrical current — how many electrons pass a point each second."
    },
    {
      "term": "Ohm",
      "def": "The unit of electrical resistance."
    },
    {
      "term": "Volt",
      "def": "The unit of electrical voltage (push)."
    },
    {
      "term": "Circuit",
      "def": "A complete loop from the source, through the load, and back to the source, along which current flows."
    },
    {
      "term": "Source",
      "def": "The part of a circuit that supplies the voltage — the battery or the alternator."
    },
    {
      "term": "Load",
      "def": "The part of a circuit that does the work — a bulb, a motor, a pump, a computer."
    },
    {
      "term": "Conductor",
      "def": "A material that carries current easily, such as copper wire; the car's body is also used as a conductor (ground)."
    },
    {
      "term": "Ground",
      "def": "The return path to the source, usually through the car's metal body and a ground cable to the battery."
    },
    {
      "term": "Control",
      "def": "The part of a circuit that decides when it runs — a switch, a relay, or a computer."
    },
    {
      "term": "Open",
      "def": "A break in a circuit: no current flows and the load does nothing."
    },
    {
      "term": "Short",
      "def": "Current taking a shortcut it should not take, usually to ground, which blows a fuse or overheats a wire."
    },
    {
      "term": "High resistance",
      "def": "A partial break — a corroded connector or damaged wire — that lets some current through but not enough, so the load works weakly."
    },
    {
      "term": "Series circuit",
      "def": "A circuit with parts in a single line: the same current flows through every part."
    },
    {
      "term": "Parallel circuit",
      "def": "A circuit with parts side by side: each gets full voltage and the current splits between them."
    }
  ],
  "video": {
    "title": "Ohm's Law Explanation: Electrical Basics of Automotive Technology/Introduction",
    "embedUrl": "https://www.youtube.com/embed/HQeKQuAXClc",
    "note": "Cars Simplified explains Ohm's law with automotive examples. Watch how voltage, current, and resistance relate — that relationship is the one formula this whole course runs on.",
    "more": [
      {
        "title": "Ohms Law Explained - The basics circuit theory",
        "url": "https://www.youtube.com/watch?v=HsLLq6Rm5tU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A circuit has a 12-volt source and a load of 6 ohms. How much current flows? Show the working.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Ohm's law says I = V ÷ R. Step 2: I = 12 ÷ 6. Step 3: I = 2 amps. Two amps flow through the load.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A circuit carries 3 amps through a 4-ohm load. What is the voltage drop across the load? Show the working.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Ohm's law says V = I × R. Step 2: V = 3 × 4. Step 3: V = 12 volts. Twelve volts are dropped across the load.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A circuit has a 12-volt source and carries 4 amps. What is the resistance of the load? Show the working.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Ohm's law says R = V ÷ I. Step 2: R = 12 ÷ 4. Step 3: R = 3 ohms. The load has 3 ohms of resistance.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A headlight is dim, but the bulb is new and the fuse is good. Using Ohm's law thinking, what kind of fault is most likely, and why does the bulb still light at all?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The fault is high resistance — a corroded connector or a damaged wire. Step 2: High resistance lets some current through, but not enough, so the bulb lights dimly instead of not at all. Step 3: An open would kill the light completely, and a short would blow the fuse — neither matches a dim bulb.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Two bulbs are wired in parallel and one burns out. What happens to the other bulb, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The other bulb keeps working normally. Step 2: In a parallel circuit each load gets the full voltage independently, so one load failing does not break the loop for the other. Step 3: In a series circuit the failed bulb would have killed both — which is why car circuits are wired in parallel.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain the water-pipe picture of electricity: what is voltage, what is current, and what is resistance in that picture?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Voltage is the water pressure pushing the water along. Step 2: Current is the amount of water flowing past a point. Step 3: Resistance is a narrow section of pipe that restricts the flow. Step 4: Raise the pressure and more water flows; narrow the pipe and less flows — the same three-way relationship as V = IR.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Ohm's law says voltage equals:",
      "choices": [
        "Current divided by resistance",
        "Current multiplied by resistance",
        "Resistance divided by current",
        "Current plus resistance"
      ],
      "answer": 1,
      "explanation": "Correct: (b). V = I × R. (a) Current divided by resistance is not voltage. (c) Resistance divided by current is not voltage. (d) Adding current and resistance mixes units and gives nothing meaningful."
    },
    {
      "q": "A circuit has a 12-volt source and a 6-ohm load. The current is:",
      "choices": [
        "0.5 amps",
        "2 amps",
        "6 amps",
        "18 amps"
      ],
      "answer": 1,
      "explanation": "Correct: (b). I = V ÷ R = 12 ÷ 6 = 2 amps. (a) 0.5 would be 6 ÷ 12. (c) 6 is the resistance, not the current. (d) 18 is 12 + 6, which is not how Ohm's law works."
    },
    {
      "q": "A circuit carries 3 amps through a 4-ohm load. The voltage drop across the load is:",
      "choices": [
        "0.75 volts",
        "1 volt",
        "7 volts",
        "12 volts"
      ],
      "answer": 3,
      "explanation": "Correct: (d). V = I × R = 3 × 4 = 12 volts. (a) 0.75 is 3 ÷ 4. (b) 1 is neither the product nor the quotient. (c) 7 is 3 + 4."
    },
    {
      "q": "In a parallel circuit, each load:",
      "choices": [
        "Gets the full voltage and works independently of the others",
        "Shares the voltage with the other loads",
        "Gets no voltage until the others are on",
        "Stops working if another load fails"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Parallel loads each get full voltage and work independently — one dead headlight does not kill the other. (b) That describes a series circuit. (c) Parallel loads do not wait for each other. (d) That describes a series circuit."
    },
    {
      "q": "A dim headlight with a new bulb and a good fuse most likely means:",
      "choices": [
        "An open circuit",
        "A short to ground",
        "High resistance in a connector or wire",
        "A dead battery"
      ],
      "answer": 2,
      "explanation": "Correct: (c). High resistance lets some current through but not enough, so the bulb lights dimly. (a) An open would kill the light completely. (b) A short would blow the fuse. (d) A dead battery would affect the whole car, not one light."
    },
    {
      "q": "The four parts every circuit needs are:",
      "choices": [
        "A battery, a bulb, a fuse, and a switch",
        "A source, a load, conductors, and a control",
        "A wire, a plug, a meter, and a ground",
        "An alternator, a starter, a battery, and a computer"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Source, load, conductors, and control — the four parts of every circuit. (a) A fuse is protection, not a required part of every circuit. (c) A meter is a test tool, not a circuit part. (d) Those are four car parts, not the four parts of a circuit."
    },
    {
      "q": "A short circuit is:",
      "choices": [
        "A break in the circuit",
        "Current taking a shortcut it should not take, usually to ground",
        "A wire that is too short",
        "A battery that is too small"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A short bypasses the load, usually to ground, and blows a fuse or overheats a wire. (a) A break is an open. (c) Wire length does not make a short. (d) Battery size does not make a short."
    },
    {
      "q": "Current must have a complete path because:",
      "choices": [
        "The battery demands it",
        "Electrons flow in a loop from the source, through the load, and back — break the loop and nothing flows",
        "The fuse requires it",
        "The computer controls it"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A circuit is a loop; any break stops all current. (a) The battery supplies voltage; the loop is about the path. (c) The fuse protects the loop; it does not create it. (d) The computer controls some circuits, but the loop is a property of all circuits."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — Electrical Fundamentals & Ohm's Law: Quick Reference</h3>\n<p><strong>Core idea:</strong> Voltage is the push, current is the flow, resistance is the opposition — and V = IR ties them together.</p>\n<p><strong>Ohm's law:</strong> V = I × R · I = V ÷ R · R = V ÷ I. Know any two, find the third.</p>\n<p><strong>Circuit parts:</strong> Source (battery or alternator) · Load (bulb, motor, computer) · Conductors (wires and the body as ground) · Control (switch, relay, computer).</p>\n<p><strong>Series vs parallel:</strong> Series — same current, shared voltage. Parallel — full voltage each, current splits. Most car circuits are parallel.</p>\n<p><strong>Three faults:</strong> Open (nothing flows) · Short (current takes a shortcut, blows a fuse) · High resistance (some current, weak load).</p>\n<p><strong>Self-check:</strong> Work out the missing value in V = IR from the other two, and name the three faults. If you can, you have this module.</p>\n"
};
