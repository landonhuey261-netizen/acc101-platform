// ele109 - Module 9: PLC Troubleshooting & Forcing I/O
module.exports = {
  "number": 9,
  "slug": "plc-troubleshooting-forcing-io",
  "title": "PLC Troubleshooting & Forcing I/O",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe a systematic PLC troubleshooting method: symptoms, half-splitting, and verification.",
    "Use the programming terminal's status, cross-reference, and data monitor tools.",
    "Explain forcing: what it is, when it is used, and why it is dangerous.",
    "Describe the rules for safe forcing: documentation, time limits, and removal.",
    "Troubleshoot input, output, and program faults by symptom."
  ],
  "sections": [
    {
      "heading": "A Systematic Method: Symptoms, Half-Splitting & Verification",
      "html": "<p>Troubleshooting a PLC system starts with the <strong>symptom</strong>, not the program: what is the machine doing, or not doing, and when did it start? A motor that will not start, a sensor that never signals, a batch that counts wrong — each symptom points to a part of the system. The method is <strong>half-splitting</strong>: divide the system in half and test which half contains the fault. Is the problem in the field device or in the PLC? Check the input module's indicator light: if the light is on when the sensor is made, the field side is fine and the fault is in the program or the output side. If the light is off, the fault is in the field wiring or the sensor. Each test cuts the search space in half, and a few tests find the fault.</p>\n<p>The programming terminal is the technician's best tool. The <strong>status display</strong> shows the CPU's mode, faults, and battery state. The <strong>data monitor</strong> shows live values of tags, timer ACCs, and counter ACCs. The <strong>cross-reference</strong> lists every place a tag is used in the program, so the technician can find all the rungs that touch a given input or output. And the <strong>force table</strong> shows every forced point (below). The habit that separates a good troubleshooter from a slow one is using these tools to look at what the PLC is actually doing, rather than guessing from the wiring diagram.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Half-split the system: test whether the fault is in the field or in the PLC, then test again. Use the terminal's status, data monitor, and cross-reference — look at what the PLC is actually doing.</div>"
    },
    {
      "heading": "Forcing I/O: What It Is and Why It Is Dangerous",
      "html": "<p><strong>Forcing</strong> is overriding an input or output from the programming terminal: forcing an input on makes the PLC believe the input is on regardless of the field device, and forcing an output on makes the output turn on regardless of the program. Forcing is a diagnostic tool — it lets a technician test whether a motor runs when its output is forced, or whether the program responds when an input is forced — but it is also the most dangerous tool in PLC work, because it bypasses the machine's logic and its safety interlocks. A forced output can start a motor while a guard is open, and a forced input can make the PLC believe a guard is closed when it is not. Forcing is never done on a running machine, and it is never done casually.</p>\n<p>The rules for safe forcing are strict and they are written in the plant's procedures: force only with the machine de-energized and locked out where the force could cause motion, force only one point at a time, document every force in the force table and on a tag on the panel, tell the operator and the supervisor, and remove every force as soon as the test is done — and verify that it is removed. A force left in place after a repair is a hidden bypass that will cause the next fault to be misdiagnosed, or the next accident. Many plants require a second person to verify that all forces are removed before the machine is returned to service.</p>"
    },
    {
      "heading": "Troubleshooting by Symptom: Inputs, Outputs & Logic",
      "html": "<p><strong>Input faults:</strong> an input that never turns on. Check the sensor (Module 7), the wiring, and the input module's indicator light. If the light is on but the program does not see the input, check the addressing — the program may be reading the wrong point, or the input may be forced off. If the light is off, check the field: the sensor, its power, and the wire. A sensor that flickers gives a flickering input, which the program sees as rapid on-off — and the fix is in the field, not the program.</p>\n<p><strong>Output faults:</strong> an output that never turns on. Check the output module's indicator light: if the light is on but the device does not run, the fault is in the field — the device, its power, or the wiring. If the light is off, check the program: the rung's conditions, the output's address, and whether the output is forced off. A blown output fuse is a common field fault, and a shorted field device will blow the fuse again until the short is found. <strong>Logic faults:</strong> the program does something wrong. Check the rung's conditions against the actual input states, watch the timer and counter ACCs live, and use the cross-reference to find every rung that writes to the output. Most logic faults are a wrong address, a wrong contact (XIC where XIO was needed), or a rung condition that is never true.</p>"
    },
    {
      "heading": "Hardware Fault vs Logic Fault & the CPU's Fault Lights",
      "html": "<p>A <strong>hardware fault</strong> is a failed module, a failed power supply, a failed CPU, or a failed field device — something physical that must be replaced. A <strong>logic fault</strong> is a program error — a wrong address, a wrong contact, a missing rung — that must be corrected in the program. The distinction matters because the fix is different: replacing a module will not fix a logic fault, and editing the program will not fix a failed module. The CPU's fault indicators help: a fault light on the CPU with a fault code in the status display points to a hardware or configuration fault, while a program that runs without faults but does the wrong thing points to logic.</p>\n<p>The CPU's <strong>fault table</strong> lists faults with codes and descriptions, and the manufacturer's manual explains each code. A fault that appears after a program download is usually a configuration fault — a module that is configured but not present, or a module that is present but not configured. A fault that appears after a power failure may be a battery fault (the battery that backs up retentive memory is dead) or a memory fault. In all cases, the procedure is the same: read the fault, look up the code, half-split the system, and verify the fix by running the machine through its sequence before returning it to service.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Leaving a force in place after the test. A force is a bypass: document it, tell the operator, and remove it — and have a second person verify it is gone before the machine returns to service.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Troubleshooting starts with the symptom and uses half-splitting: test whether the fault is in the field or in the PLC, then test again.</li>\n<li>The terminal's tools: status display, data monitor, cross-reference, and force table. Watch live values — timer ACCs, counter ACCs, input states — rather than guessing.</li>\n<li>Forcing overrides an input or output from the terminal. It is a diagnostic tool and it is dangerous: it bypasses logic and safety interlocks.</li>\n<li>Safe forcing: machine de-energized and locked out where the force could cause motion, one point at a time, documented, operator and supervisor told, removed as soon as the test is done, verified by a second person.</li>\n<li>Input fault: check the sensor, the wiring, and the indicator light. Output fault: check the indicator light, then the field device or the program. Logic fault: check the rung's conditions, the addresses, and the ACCs live.</li>\n<li>Hardware fault = something physical to replace. Logic fault = a program error to correct. The CPU's fault table and codes tell you which.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Forcing an input to test a program while the machine is running. A forced input can make the PLC believe a guard is closed when it is open. Force only with the machine safe, and only under the plant's procedure.</div>\n<p><strong>Ready-to-Work link:</strong> If you can half-split a fault and explain the rules for safe forcing, you have this module. Module 10 covers networks and industrial communications.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Half-splitting", "def": "A troubleshooting method: divide the system in half and test which half contains the fault, then repeat." },
    { "term": "Forcing", "def": "Overriding an input or output from the programming terminal, bypassing the field device or the program." },
    { "term": "Force table", "def": "The terminal's list of all currently forced points." },
    { "term": "Data monitor", "def": "The terminal's display of live tag, timer, and counter values." },
    { "term": "Cross-reference", "def": "A list of every place a tag is used in the program." },
    { "term": "Status display", "def": "The terminal's display of the CPU's mode, faults, and battery state." },
    { "term": "Hardware fault", "def": "A failed physical component — a module, power supply, CPU, or field device." },
    { "term": "Logic fault", "def": "A program error — a wrong address, a wrong contact, or a missing rung." },
    { "term": "Fault table", "def": "The CPU's list of faults with codes and descriptions." },
    { "term": "Fault code", "def": "The number the CPU reports for a fault, explained in the manufacturer's manual." },
    { "term": "Input fault", "def": "A fault in the field device, wiring, or input module that prevents an input from reaching the program." },
    { "term": "Output fault", "def": "A fault in the program, output module, or field device that prevents an output from driving its device." },
    { "term": "Battery fault", "def": "A fault indicating the battery that backs up retentive memory is dead." },
    { "term": "Indicator light", "def": "The LED on an I/O module showing whether a point is on or off." },
    { "term": "Verification", "def": "Running the machine through its sequence after a repair to confirm the fault is fixed before returning it to service." }
  ],
  "video": {
    "title": "PLC Troubleshooting | PLC Programming | PLC Hardware | PLC Tutorial",
    "embedUrl": "https://www.youtube.com/embed/fPQFVFedj78",
    "note": "A practical guide to PLC troubleshooting — reading the CPU's status and fault indicators, using the terminal's monitor tools, and working through a fault step by step.",
    "more": [
      { "title": "PLC Troubleshooting (Part 1) - PLC Wiring Basics & I/O Diagnosis", "url": "https://www.youtube.com/watch?v=d1E55SuxgRY" },
      { "title": "PLC troubleshooting and debugging", "url": "https://www.youtube.com/watch?v=U3fj4tHHS8M" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A motor will not start. The output module's indicator light for the motor is off. Is the fault more likely in the field or in the program, and what do you check next?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: More likely in the program or the output module, because the output is not being driven. Step 2: Check the rung's conditions in the data monitor — are the start, stop, and interlock inputs in the states the rung needs? Step 3: Check the output's address and whether it is forced off. Step 4: If the rung is true but the light is off, the output module or its fuse is suspect.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The same motor will not start, but the output module's indicator light is ON. Where is the fault, and what do you check?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The fault is in the field — the PLC is driving the output. Step 2: Check the field device (the motor starter, its coil, and its power), the wiring from the output module to the starter, and the output fuse. Step 3: A blown fuse or a failed starter coil is the usual cause.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A sensor is made, but its input module's indicator light is off. Where is the fault?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: In the field — the sensor, its power, or the wiring. Step 2: Check the sensor's power (24 V DC), its output, and the wire to the input module. Step 3: The program cannot see an input that never reaches the module.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> You need to test whether a motor runs when its output is driven. What tool do you use, and what are the safety rules?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Force the output on from the programming terminal. Step 2: The machine must be de-energized and locked out where the force could cause motion, and the area must be clear. Step 3: Force one point at a time, document the force, tell the operator and the supervisor, and remove the force as soon as the test is done — and have a second person verify it is removed.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A program runs without faults but a conveyor counts twice as many parts as it should. Is this a hardware fault or a logic fault, and where do you look?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It could be either, so half-split. Step 2: Watch the counter's ACC and the sensor's input live — if the input flickers, the fault is in the field (a bouncing sensor, Module 7). Step 3: If the input is clean but the counter still counts twice, the fault is in the logic — the counter may be driven twice, or the rung may be duplicated.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> After a program download, the CPU shows a fault and the machine will not run. What is the most likely cause, and what do you check first?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A configuration fault — a module configured in the program but not present in the rack, or a module present but not configured. Step 2: Read the fault code in the status display and look it up in the manufacturer's manual. Step 3: Compare the configured I/O tree with the actual rack and correct the mismatch.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Half-splitting means:",
      "choices": ["Replacing half the modules", "Dividing the system in half and testing which half contains the fault, then repeating", "Running the program at half speed", "Splitting the rack into two"],
      "answer": 1,
      "explanation": "Correct: (b). Each test cuts the search space in half. (a) Replacing modules is not a diagnostic method. (c) Program speed is not the issue. (d) Splitting the rack is not a troubleshooting method."
    },
    {
      "q": "Forcing an output on:",
      "choices": ["Is safe on a running machine", "Turns the output on regardless of the program, and bypasses logic and safety interlocks", "Only works in program mode", "Cannot cause motion"],
      "answer": 1,
      "explanation": "Correct: (b). A forced output bypasses the program. (a) Forcing on a running machine is dangerous. (c) Forcing works in run mode, which is why it is dangerous. (d) A forced output can cause motion."
    },
    {
      "q": "A force left in place after a repair is dangerous because:",
      "choices": ["It uses extra power", "It is a hidden bypass that will cause the next fault to be misdiagnosed or an accident", "It slows the scan", "It erases the program"],
      "answer": 1,
      "explanation": "Correct: (b). A leftover force hides the real state of the machine. (a) Power use is negligible. (c) Forces do not slow the scan. (d) Forces do not erase the program."
    },
    {
      "q": "An input module's indicator light is on, but the program does not see the input. The most likely cause is:",
      "choices": ["A failed sensor", "A wrong address in the program, or the input forced off", "A blown output fuse", "A failed motor"],
      "answer": 1,
      "explanation": "Correct: (b). The field side is working (light on), so the fault is in the program's addressing or a force. (a) A failed sensor would leave the light off. (c) An output fuse is on the output side. (d) A failed motor is unrelated to an input."
    },
    {
      "q": "An output module's indicator light is on, but the motor does not run. The fault is in:",
      "choices": ["The program", "The field — the device, its power, or the wiring", "The CPU", "The HMI"],
      "answer": 1,
      "explanation": "Correct: (b). The PLC is driving the output, so the fault is downstream. (a) The program is driving the output (light on). (c) The CPU is running. (d) The HMI does not drive the motor."
    },
    {
      "q": "A program that runs without faults but does the wrong thing has a:",
      "choices": ["Hardware fault", "Logic fault", "Power supply fault", "Battery fault"],
      "answer": 1,
      "explanation": "Correct: (b). Wrong behavior with no fault code is a logic error. (a) A hardware fault would usually set a fault code. (c) A power fault would stop the PLC. (d) A battery fault affects retentive memory, not logic."
    },
    {
      "q": "The cross-reference is used to:",
      "choices": ["Find every place a tag is used in the program", "Wire the input module", "Set the HMI colors", "Count parts"],
      "answer": 0,
      "explanation": "Correct: (a). The cross-reference lists all uses of a tag. (b) Wiring is a field task. (c) HMI colors are set in the HMI software. (d) Counting is a counter's job."
    },
    {
      "q": "Before returning a machine to service after a repair, you must:",
      "choices": ["Remove all forces and verify they are gone, then run the machine through its sequence", "Leave the forces in place in case the fault returns", "Delete the program", "Turn off the HMI"],
      "answer": 0,
      "explanation": "Correct: (a). Verify forces are removed and verify the fix by running the sequence. (b) Leaving forces in place is a hidden bypass. (c) Deleting the program is not a repair step. (d) Turning off the HMI does not verify the repair."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — PLC Troubleshooting &amp; Forcing I/O: Quick Reference</h3>\n<p><strong>Core idea:</strong> Start with the symptom. Half-split: test whether the fault is in the field or in the PLC, then test again.</p>\n<p><strong>Terminal tools:</strong> Status display (mode, faults, battery) · Data monitor (live tag, timer, counter values) · Cross-reference (every use of a tag) · Force table (all forced points).</p>\n<p><strong>Forcing:</strong> Overrides an input or output from the terminal. Bypasses logic and safety interlocks — dangerous. Rules: machine safe, one point at a time, documented, operator and supervisor told, removed as soon as the test is done, verified by a second person.</p>\n<p><strong>By symptom:</strong> Input light on but program blind → wrong address or forced off. Input light off → field fault. Output light on but device dead → field fault. Output light off → program or module fault.</p>\n<p><strong>Hardware vs logic:</strong> Hardware = something physical to replace. Logic = a program error to correct. A program that runs without faults but does the wrong thing is a logic fault.</p>\n<p><strong>Self-check:</strong> Half-split a motor that will not start and explain the rules for safe forcing. If you can, you have this module.</p>\n"
};
