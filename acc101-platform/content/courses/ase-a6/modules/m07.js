// ase-a6 - Module 7: Multimeter & Scope Diagnosis
module.exports = {
  "number": 7,
  "slug": "multimeter-scope-diagnosis",
  "title": "Multimeter & Scope Diagnosis",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a multimeter measures and how to use it safely.",
    "Measure voltage, resistance, and current with a multimeter.",
    "Explain what an oscilloscope shows that a multimeter cannot.",
    "Read a simple waveform: what its height, width, and shape mean.",
    "Choose the right tool — multimeter or scope — for the job in front of you."
  ],
  "sections": [
    {
      "heading": "The Multimeter: The Technician's Main Tool",
      "html": "<p>A <strong>multimeter</strong> measures voltage, resistance, and current — the three values in Ohm's law — and it is the tool you will reach for first on almost every electrical job. It has a dial to select what to measure, two leads (red and black), and a display. To measure <strong>voltage</strong>, you connect the leads across the part or circuit while it is powered — the meter reads the push between the two points. To measure <strong>resistance</strong>, you connect the leads across the part with the power off — the meter sends its own small current through the part and reads the opposition. To measure <strong>current</strong>, you connect the meter in series with the circuit so the current flows through it — and you must use the right range, because a meter set to measure small currents can be damaged by a large one.</p>\n<p>Two safety rules govern the meter. First, never measure resistance on a powered circuit — the meter's own test current fights the circuit's voltage and the reading is meaningless, and the meter can be damaged. Second, never measure current on the wrong range: a meter fused for small currents will blow its fuse (or worse) if you put a starter's current through it. When in doubt, use the highest range first and work down.</p>"
    },
    {
      "heading": "Measuring Voltage, Resistance, and Current",
      "html": "<p><strong>Voltage</strong> is measured across a part: one lead on each side. A battery's voltage is measured across its terminals; a load's voltage is measured across the load; a voltage drop is measured across a connection or a wire while current is flowing (Module 10 covers that test in full). A reading of full voltage across a load that does nothing means the load has failed. A reading of no voltage across a load that does nothing means the power is not reaching it.</p>\n<p><strong>Resistance</strong> is measured with the power off and the part disconnected from the circuit, so the meter is the only source of current. A reading that matches the service information means the part is good; a reading of no continuity (an open) means the part is broken; a reading far from the expected value means the part is damaged. <strong>Current</strong> is measured in series — the meter becomes part of the circuit — and it is how you find a parasitic draw (Module 10) and how you check whether a load is drawing what it should.</p>"
    },
    {
      "heading": "The Oscilloscope: Seeing Electricity Move",
      "html": "<p>A multimeter shows you one number at a time — the voltage right now, or the average over a moment. An <strong>oscilloscope</strong> (scope) shows you voltage over time, as a line on a screen — a <strong>waveform</strong>. That matters because much of a car's electricity is not steady: sensors switch on and off, injectors pulse, ignition coils fire, and networks send messages as rapid pulses. A multimeter averages those pulses into a single number that hides what is really happening; a scope shows you each pulse as it happens.</p>\n<p>Reading a waveform is a matter of three things. Its <strong>height</strong> is the voltage — how tall the pulse is. Its <strong>width</strong> is the time — how long the pulse lasts. Its <strong>shape</strong> is the pattern — a clean square wave, a smooth curve, a jagged mess. A sensor that should switch cleanly on and off but shows a ragged, bouncing waveform is telling you its contacts are worn or its signal is corrupted — something a multimeter's single number would never show.</p>"
    },
    {
      "heading": "Choosing the Right Tool",
      "html": "<p>Use the <strong>multimeter</strong> when the question is a number: what is the battery voltage, what is this sensor's resistance, how much current is this circuit drawing? It is fast, simple, and right for steady values. Use the <strong>scope</strong> when the question is a pattern: is this sensor switching cleanly, is this injector pulsing for the right length of time, is this network sending clean messages? It is slower to set up but it shows you what the multimeter hides.</p>\n<p>A good technician reaches for the multimeter first and the scope when the multimeter's answer does not explain the fault. A sensor that measures correctly with the meter but still sets a fault code is a scope job — the fault is in the pattern, not the number. And a circuit that works sometimes and fails sometimes — an <strong>intermittent fault</strong> — is often a scope job too, because the scope can catch the moment it fails while the meter only shows the moment you happen to look.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>A multimeter measures voltage (across, powered), resistance (across, power off), and current (in series).</li>\n<li>Never measure resistance on a powered circuit, and never measure current on the wrong range.</li>\n<li>A scope shows voltage over time as a waveform — height is voltage, width is time, shape is the pattern.</li>\n<li>Multimeters answer number questions; scopes answer pattern questions. Use the meter first, the scope when the meter's answer does not explain the fault.</li>\n<li>Intermittent faults are often scope jobs — the scope catches the moment of failure.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Measuring resistance on a powered circuit and trusting the reading. The circuit's own voltage fights the meter's test current, so the reading is meaningless — and the meter can be damaged. Power off, part disconnected, then measure.</div>\n<p><strong>Ready-to-Work link:</strong> If you can say when to use the meter and when to use the scope, you have this module. Module 8 opens the computers: electronic controls and modules.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Multimeter",
      "def": "A tool that measures voltage, resistance, and current — the three values in Ohm's law."
    },
    {
      "term": "Oscilloscope (scope)",
      "def": "A tool that shows voltage over time as a line on a screen — a waveform — revealing patterns a multimeter averages away."
    },
    {
      "term": "Waveform",
      "def": "The line on a scope screen showing how voltage changes over time."
    },
    {
      "term": "Lead",
      "def": "One of the two probes of a multimeter, red and black, that connect the meter to the circuit."
    },
    {
      "term": "Range",
      "def": "The measurement scale selected on a meter; using the wrong range can damage the meter or give a wrong reading."
    },
    {
      "term": "Continuity",
      "def": "A complete path for current; a meter's continuity test beeps when the path is unbroken."
    },
    {
      "term": "In series",
      "def": "Connected so current flows through the meter — how current is measured."
    },
    {
      "term": "Across (in parallel)",
      "def": "Connected so the meter reads between two points — how voltage and resistance are measured."
    },
    {
      "term": "Intermittent fault",
      "def": "A fault that comes and goes, working sometimes and failing sometimes."
    },
    {
      "term": "Pulse",
      "def": "A brief burst of voltage, such as a sensor switching on and off or an injector firing."
    },
    {
      "term": "Sensor",
      "def": "A part that measures something — temperature, speed, position — and turns it into an electrical signal."
    },
    {
      "term": "Actuator",
      "def": "A part that does something when the computer tells it to — a motor, a solenoid, an injector."
    },
    {
      "term": "Signal",
      "def": "The electrical message a sensor sends to a computer, or a computer sends to an actuator."
    },
    {
      "term": "Square wave",
      "def": "A waveform that switches sharply between two voltage levels — the clean on-off pattern of a good digital signal."
    }
  ],
  "video": {
    "title": "Multimeter basics, voltage and resistance tests (a free SD Premium video)",
    "embedUrl": "https://www.youtube.com/embed/w0PpLTnKKZg",
    "note": "ScannerDanner teaches multimeter basics — voltage and resistance tests — the way a working technician does them. Watch how he connects the leads and which range he picks; that is the skill this module teaches.",
    "more": [
      {
        "title": "How to Use a Multimeter to Diagnose Car and Truck Electrical Problems",
        "url": "https://www.youtube.com/watch?v=omQiFV1CRl8"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> You need to measure the resistance of a sensor. What must you do first, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Switch the power off and disconnect the sensor from the circuit. Step 2: The meter sends its own small current through the part to measure resistance. Step 3: If the circuit is powered, its voltage fights the meter's test current, the reading is meaningless, and the meter can be damaged.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A load has full voltage across it but does nothing. What does that tell you, and what does no voltage across a dead load tell you?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Full voltage across a dead load means power is reaching it — the load itself has failed. Step 2: No voltage across a dead load means power is not reaching it — the fault is upstream: fuse, switch, relay, or wiring. Step 3: One measurement separates the two cases.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A sensor measures correctly with a multimeter but still sets a fault code. What tool should you reach for next, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Reach for the oscilloscope. Step 2: The multimeter shows one number — the average — and a sensor can have the right average while its signal is ragged or bouncing. Step 3: The scope shows the waveform, and the fault is in the pattern, not the number.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Explain what the height, the width, and the shape of a waveform each tell you.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Height is the voltage — how tall the pulse is. Step 2: Width is the time — how long the pulse lasts. Step 3: Shape is the pattern — a clean square wave means a clean switch, a ragged or bouncing shape means worn contacts or a corrupted signal.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Why must a current measurement be made with the meter in series, and what happens if you use the wrong range?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Current is a flow, so the meter must be part of the circuit for the current to flow through it. Step 2: A meter set to measure small currents can be damaged — or blow its fuse — if a large current is put through it. Step 3: When in doubt, use the highest range first and work down.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A fault comes and goes — the car works sometimes and fails sometimes. Why is this often a scope job rather than a multimeter job?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A multimeter shows the value at the moment you look. Step 2: An intermittent fault may not be failing at that moment, so the meter reads normally. Step 3: A scope can watch the signal over time and catch the moment it fails — the glitch, the drop-out, the ragged pulse — while the meter only shows the moment you happen to look.</p>"
    }
  ],
  "quiz": [
    {
      "q": "To measure voltage with a multimeter, you connect the leads:",
      "choices": [
        "In series with the circuit",
        "Across the part or circuit, while it is powered",
        "To the battery only",
        "With the power off"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Voltage is measured across two points while the circuit is powered. (a) In series is how current is measured. (c) Voltage can be measured across any part, not just the battery. (d) Resistance is measured with the power off; voltage is not."
    },
    {
      "q": "To measure resistance, you must:",
      "choices": [
        "Keep the power on",
        "Switch the power off and disconnect the part, so the meter is the only source of current",
        "Use the highest voltage range",
        "Measure across the battery"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The meter sends its own test current; circuit voltage would fight it and make the reading meaningless. (a) Power on is exactly what you must not do. (c) Resistance is measured on a resistance range, not a voltage range. (d) The battery is a voltage source, not a resistance to measure."
    },
    {
      "q": "An oscilloscope shows you:",
      "choices": [
        "One number at a time",
        "Voltage over time, as a waveform",
        "Only the battery voltage",
        "Only resistance"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A scope plots voltage against time, revealing pulses and patterns. (a) One number at a time is a multimeter. (c) A scope can show any signal, not just the battery. (d) A scope does not measure resistance."
    },
    {
      "q": "The height of a waveform tells you the:",
      "choices": [
        "Time the pulse lasts",
        "Voltage — how tall the pulse is",
        "Resistance of the circuit",
        "Current in the circuit"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Height is voltage. (a) Width is time. (c) Resistance is measured with a meter, not read from a waveform's height. (d) Current is not read directly from a waveform's height."
    },
    {
      "q": "A sensor that measures correctly with a multimeter but still sets a fault code most likely has:",
      "choices": [
        "A fault in the pattern of its signal, which only a scope will show",
        "A dead battery",
        "A blown fuse",
        "No fault at all"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The average can be right while the waveform is ragged or bouncing — the fault is in the pattern. (b) A dead battery would affect the whole car. (c) A blown fuse would stop the sensor entirely. (d) The fault code means there is a fault to find."
    },
    {
      "q": "Current is measured with the meter:",
      "choices": [
        "Across the load",
        "In series, so the current flows through the meter",
        "With the power off",
        "Across the battery terminals"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Current is a flow, so the meter must be part of the circuit. (a) Across the load is how voltage is measured. (c) Current only flows with the power on. (d) Measuring across the battery terminals reads voltage, not current — and shorting a meter across a battery on a current range can damage it."
    },
    {
      "q": "A ragged, bouncing waveform from a sensor that should switch cleanly means:",
      "choices": [
        "The sensor is working perfectly",
        "Its contacts are worn or its signal is corrupted",
        "The battery is fully charged",
        "The scope is broken"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A clean switch makes a clean square wave; a ragged one means the switching is not clean. (a) A perfect sensor makes a clean waveform. (c) Battery charge does not shape a waveform. (d) The scope is showing what the sensor is doing — the sensor is the suspect."
    },
    {
      "q": "When in doubt about a current measurement, you should:",
      "choices": [
        "Use the lowest range first",
        "Use the highest range first and work down",
        "Measure resistance instead",
        "Skip the measurement"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The highest range protects the meter from a large current; you work down to the range that gives a useful reading. (a) The lowest range risks blowing the meter's fuse. (c) Resistance does not answer a current question. (d) Skipping the measurement leaves the fault unfound."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Multimeter & Scope Diagnosis: Quick Reference</h3>\n<p><strong>Core idea:</strong> A multimeter gives you numbers; a scope shows you patterns. Use the meter first, the scope when the meter's answer does not explain the fault.</p>\n<p><strong>Multimeter:</strong> Voltage — across, powered · Resistance — across, power off, part disconnected · Current — in series, right range.</p>\n<p><strong>Scope:</strong> Voltage over time as a waveform — height is voltage, width is time, shape is the pattern.</p>\n<p><strong>Watch out:</strong> Never measure resistance on a powered circuit, and never measure current on the wrong range.</p>\n<p><strong>Self-check:</strong> Say when to use the meter and when to use the scope. If you can, you have this module.</p>\n"
};
