// egr111 - Module 11: Troubleshooting Control Systems
module.exports = {
  "number": 11,
  "slug": "troubleshooting-control-systems",
  "title": "Troubleshooting Control Systems",
  "estTime": "3–4 hours",
  "objectives": [
    "Follow a systematic fault-finding method instead of guessing.",
    "Use the half-split method to isolate a fault quickly.",
    "Explain when and how to force I/O safely.",
    "Tell a sensor fault from a wiring fault from a program fault.",
    "Use status LEDs, online monitoring, and a multimeter to find faults."
  ],
  "sections": [
    {
      "heading": "A Method, Not Guessing",
      "html": "<p>The difference between a good troubleshooter and a frustrated one is method. Start by observing: what exactly is the machine doing, and what should it be doing? When did it start? What changed — a new part, a maintenance job, a power cut? Then form a hypothesis, test it, and use the result to narrow the fault down. Guessing and swapping parts at random wastes time and often introduces new faults.</p>\n<p>Write down what you find. A fault log — what failed, what you tested, what you found — is how a plant builds knowledge, so the next person does not repeat your work. The best troubleshooters are the ones who document, because the same fault usually comes back, and the log turns a two-hour job into a ten-minute one.</p>\n"
    },
    {
      "heading": "The Half-Split Method",
      "html": "<p>The fastest way to isolate a fault is the half-split: test in the middle of the system, and the result tells you which half the fault is in. A motor will not start: check the PLC output — if the output LED is on, the fault is in the field (contactor, wiring, motor); if the output LED is off, the fault is in the program or the inputs. Each test halves the search, so a fault in a big system is found in a handful of tests instead of a hundred.</p>\n<p>Apply the same idea inside the program: if a rung's output is off, check the middle of its contacts — is power reaching the halfway point? If yes, the fault is in the second half of the rung; if no, it is in the first half. Online monitoring (watching the live program on a laptop) shows each contact's state in real time, which makes half-splitting fast and precise.</p>\n"
    },
    {
      "heading": "Forcing I/O: Powerful and Dangerous",
      "html": "<p>Forcing lets you override an input or output from the programming software: force an input on to test a rung, or force an output on to test a motor. It is one of the most useful fault-finding tools — and one of the most dangerous. A forced output stays on regardless of the program, the interlocks, and the safety devices, so a forced motor can start while someone is working on it.</p>\n<p>The rules for forcing are strict: force only with the machine in a safe state, tell everyone nearby, force for the shortest time possible, document every force in the log, and remove all forces before returning the machine to service. Many plants require a permit for forcing, and some forbid it entirely during production. If you are unsure whether a force is safe, it is not — do not do it.</p>\n"
    },
    {
      "heading": "Sensor, Wiring, or Program?",
      "html": "<p>Most control faults fall into three buckets. A sensor fault: the sensor is dirty, misaligned, damaged, or its target is missing — check the sensor's own indicator LED first. A wiring fault: a loose terminal, a broken wire, or a wrong connection — check with a multimeter for voltage at the input, and wiggle the wires while watching the input LED. A program fault: the logic is wrong, a timer preset is wrong, or a step is stuck — check the online monitor to see which rung is not behaving.</p>\n<p>Intermittent faults are the hardest: a fault that comes and goes is usually a loose wire, a failing sensor, or a marginal signal (a sensor at the edge of its range). For those, trend the input over time or leave the monitor running — a fault that only appears under load or when the machine is warm points at a thermal or mechanical cause, not a program bug.</p>\n"
    },
    {
      "heading": "Tools and Common Mistakes",
      "html": "<p>The troubleshooter's tools are simple: the PLC's status LEDs (input, output, fault, and run lights), the online monitor showing live rung states, a multimeter for voltage and continuity, and the machine's documentation — the drawings, the program listing, and the fault log. A multimeter check of a 24 V input takes seconds and settles the question of whether a sensor is working far faster than an hour of staring at the program.</p>\n<p><p><strong>Takeaways:</strong><ul><li>Observe first, hypothesise, test, narrow down — never guess and swap parts at random.</li><li>Half-split: test in the middle; the result tells you which half holds the fault.</li><li>Forcing is powerful and dangerous: safe state, tell everyone, document, remove all forces after.</li><li>Sort faults into sensor, wiring, or program, and check the sensor LED and the multimeter first.</li><li>Document every fault and fix in the log.</li></ul></p>\n<p><strong>Common mistake:</strong> Forcing an output and forgetting to remove the force. A forgotten force can start a machine unexpectedly — always check for forces before returning a machine to service.</p>\n<p><strong>Common mistake:</strong> Starting with the program when the fault is in the field. Check the output LED and the sensor LED first — most faults are in the wiring and sensors, not the logic.</p>\n<p><strong>Ready check:</strong> If you can half-split a motor fault, explain the forcing rules, and sort a fault into sensor, wiring, or program, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Half-split",
      "def": "Fault-finding by testing in the middle of a system: the result shows which half holds the fault."
    },
    {
      "term": "Forcing",
      "def": "Overriding a PLC input or output from the programming software, bypassing the program and interlocks."
    },
    {
      "term": "Online monitoring",
      "def": "Watching a PLC program run live on a laptop, with each contact and coil showing its real-time state."
    },
    {
      "term": "Status LED",
      "def": "A light on a PLC module showing the state of an input, an output, or a fault."
    },
    {
      "term": "Fault log",
      "def": "A written record of faults, tests, and fixes, so the next person does not repeat the work."
    },
    {
      "term": "Intermittent fault",
      "def": "A fault that comes and goes, usually caused by a loose wire, a failing sensor, or a marginal signal."
    },
    {
      "term": "Root cause",
      "def": "The underlying reason a fault happened, as opposed to the symptom it produced."
    },
    {
      "term": "Multimeter",
      "def": "A test instrument that measures voltage, current, and continuity, used to check sensors and wiring."
    },
    {
      "term": "Continuity",
      "def": "An unbroken electrical path, checked with a multimeter's continuity setting."
    },
    {
      "term": "Loop check",
      "def": "Testing a complete input or output loop from the field device to the PLC and back."
    },
    {
      "term": "Hypothesis",
      "def": "A testable explanation for a fault, formed from observation before any parts are changed."
    },
    {
      "term": "Marginal signal",
      "def": "A signal at the edge of its working range, which works sometimes and fails sometimes."
    }
  ],
  "video": {
    "title": "PLC Troubleshooting: How to Force Rungs Safely",
    "embedUrl": "https://www.youtube.com/embed/fPQFVFedj78",
    "note": "Forcing rungs safely, with the rules and the risks explained. Note the forcing rules carefully — they are the ones this module tests.",
    "more": [
      {
        "title": "Your Electric Motor Troubleshooting Guide",
        "url": "https://www.youtube.com/watch?v=R7hpQia0WXc"
      },
      {
        "title": "Understanding Motor Controls: Electrical Schematics, Wiring & Troubleshooting Contactors",
        "url": "https://www.youtube.com/watch?v=DMqGVe5T2_8"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A motor will not start. Its PLC output LED is OFF. Use the half-split method: which half of the system holds the fault, and what do you check next?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The output LED is off, so the PLC is not commanding the motor — the fault is in the program or the inputs, not in the field wiring or motor. Step 2: Check the online monitor: which rung drives the output, and which contact is blocking it? Step 3: Check the inputs on that rung — is the start signal arriving, is an interlock open, has a timer not finished? A good answer names the program/input half and the next checks.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The same motor will not start, but this time its PLC output LED is ON. Where is the fault, and what do you check next?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The output LED is on, so the PLC is commanding the motor — the fault is in the field: the output wiring, the contactor, the overload, or the motor itself. Step 2: Check for voltage at the contactor coil with a multimeter. Step 3: If the coil has voltage but the contactor does not pull in, the contactor is faulty; if there is no voltage, the wiring between the PLC and the contactor is faulty. A good answer names the field half and the multimeter check.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A proximity sensor's indicator LED is on when a part is present, but the PLC input LED stays off. List three possible causes, in the order you would check them.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check the wiring between the sensor and the PLC — a loose terminal or broken wire is the most likely cause. Step 2: Check the sensor type against the input module — a PNP sensor on a sourcing input, or an NPN sensor on a sinking input, will not work. Step 3: Check the PLC input itself — try the sensor on a spare input to see whether the input channel is faulty. A good answer gives three causes in a sensible order.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> You need to force an output on to test a conveyor motor. List the safety rules you must follow, in order.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Make sure the machine is in a safe state and everyone nearby knows what you are doing. Step 2: Force for the shortest time possible and stay at the controls while the force is active. Step 3: Document the force in the log. Step 4: Remove all forces before returning the machine to service, and check that none remain. A good answer lists all four rules.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A machine stops at the same sequence step every time, and the step's timer never finishes. The timer's input rung is true. What are the two most likely causes?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The timer preset may be wrong — check the preset and the time base (a preset of 50 with a 0.1 s base is 5 s, not 50 s). Step 2: The timer may be a retentive timer that needs a reset, or its accumulator may be held by a fault. Step 3: Check the online monitor for the accumulator value — if it is counting, the preset is the issue; if it is stuck at zero, the timer instruction itself may be faulty or its rung may not be scanned. A good answer names the preset/time-base check and the accumulator check.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A fault appears only when the machine has been running for an hour and is warm, then disappears when it cools down. What kind of fault is this, and how would you investigate it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: This is an intermittent, temperature-related fault — most likely a loose connection that expands when warm, a sensor drifting out of range when hot, or a component failing at temperature. Step 2: Investigate by trending the suspect input over time and by testing while the machine is warm — feel for hot terminals, check sensor alignment when hot, and wiggle wires while watching the input LED. Step 3: A program bug would not depend on temperature, so the fault is in the field, not the logic. A good answer names the intermittent thermal fault and the warm-testing approach.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A motor will not start and its PLC output LED is OFF. Where is the fault most likely to be?",
      "choices": [
        "In the motor itself",
        "In the program or the inputs — the PLC is not commanding the motor",
        "In the contactor coil",
        "In the power supply to the motor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An off output LED means the PLC is not driving the output, so the fault is upstream: the program or an input. (a), (c), and (d) are all in the field half, which the off LED rules out."
    },
    {
      "q": "A motor will not start and its PLC output LED is ON. Where is the fault most likely to be?",
      "choices": [
        "In the program",
        "In the field: the output wiring, contactor, overload, or motor",
        "In an input sensor",
        "In the PLC's CPU"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An on output LED means the PLC is commanding the motor, so the fault is downstream in the field. (a) is wrong: the program is working. (c) is wrong: a faulty input would stop the output. (d) is wrong: the CPU is running, or the LED would not be on."
    },
    {
      "q": "What is the half-split method?",
      "choices": [
        "Splitting the program into two halves",
        "Testing in the middle of a system so the result shows which half holds the fault",
        "Replacing half the parts at random",
        "Running the machine at half speed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Half-splitting tests the middle and narrows the fault to one half. (a) is wrong: it is a test method, not a program edit. (c) is wrong: it is the opposite of guessing. (d) is wrong: speed is irrelevant."
    },
    {
      "q": "What is the most important rule when forcing a PLC output?",
      "choices": [
        "Force as many outputs as possible at once",
        "Force only with the machine in a safe state, tell everyone, document it, and remove all forces before returning the machine to service",
        "Never tell anyone you forced an output",
        "Leave forces in place so the machine keeps working"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Forcing bypasses interlocks and safety, so it needs strict rules: safe state, communication, documentation, and removal. (a) is dangerous: force the minimum. (c) is dangerous: everyone nearby must know. (d) is dangerous: a forgotten force can start a machine unexpectedly."
    },
    {
      "q": "A proximity sensor's LED is on when a part is present, but the PLC input LED stays off. What is the most likely cause?",
      "choices": [
        "The program is wrong",
        "A wiring fault between the sensor and the PLC, or a sensor-type mismatch with the input module",
        "The sensor is dirty",
        "The PLC scan is too slow"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The sensor is working (its LED is on) but its signal is not reaching the PLC input, which points at wiring or a PNP/NPN mismatch. (a) is wrong: the program cannot affect the input LED. (c) is wrong: a dirty sensor would not light its LED. (d) is wrong: scan time does not stop an input LED lighting."
    },
    {
      "q": "What is an intermittent fault?",
      "choices": [
        "A fault that is always present",
        "A fault that comes and goes, often from a loose wire or a failing sensor",
        "A fault in the program only",
        "A fault that can never be fixed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Intermittent faults appear and disappear, usually from loose connections or marginal signals. (a) describes a hard fault. (c) is wrong: intermittent faults are usually in the field. (d) is wrong: they can be fixed once found."
    },
    {
      "q": "Why should you write faults and fixes in a fault log?",
      "choices": [
        "Because the law requires it",
        "So the next person does not repeat your work, and repeat faults are recognised quickly",
        "Because the PLC requires it",
        "Because it makes the machine run faster"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A fault log builds plant knowledge and turns repeat faults into quick fixes. (a) is wrong: it is good practice, not a legal requirement in general. (c) is wrong: the PLC does not need a log. (d) is wrong: a log does not change machine speed."
    },
    {
      "q": "What should you check first when a sensor does not seem to work?",
      "choices": [
        "The PLC program listing",
        "The sensor's own indicator LED",
        "The historian database",
        "The HMI screen"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The sensor's LED tells you in seconds whether the sensor itself sees the target. (a) is a later step: the program cannot fix a dead sensor. (c) is wrong: the historian is for long-term analysis. (d) is wrong: the HMI only shows what the PLC sees."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Troubleshooting Control Systems: Quick Reference</h3>\n<p><strong>Core idea:</strong> Follow a systematic fault-finding method instead of guessing.</p>\n<p><strong>Key terms:</strong> Half-split · Forcing · Online monitoring · Status LED · Fault log · Intermittent fault · Root cause · Multimeter.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Follow a systematic fault-finding method instead of guessing.</li>\n<li>Use the half-split method to isolate a fault quickly.</li>\n<li>Explain when and how to force I/O safely.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
