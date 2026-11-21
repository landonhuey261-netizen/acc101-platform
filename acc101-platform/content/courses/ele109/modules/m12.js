// ele109 - Module 12: A Complete Automation Project Walkthrough
module.exports = {
  "number": 12,
  "slug": "complete-automation-project-walkthrough",
  "title": "A Complete Automation Project Walkthrough",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe the stages of an automation project from the requirement to handover.",
    "Read a project specification: sequence, I/O list, and safety requirements.",
    "Design a PLC program for a small automated cell: a parts-sorting conveyor.",
    "Explain commissioning: testing, debugging, and documentation.",
    "Describe handover: training, spares, and as-built documentation."
  ],
  "sections": [
    {
      "heading": "The Project: A Parts-Sorting Conveyor",
      "html": "<p>The project is a small automated cell: a conveyor carries mixed parts, a sensor detects each part, a pneumatic pusher sorts metal parts to the left bin and plastic parts to the right bin, and a counter tracks how many of each were sorted. The <strong>specification</strong> says: the conveyor runs when the start button is pressed and stops when the stop button is pressed or the E-stop is pressed; metal parts go left, plastic parts go right; the machine counts each sort; the HMI shows the counts and the machine state; and the machine must stop if a guard door is opened. Everything in this course is needed to build it: the PLC hardware (Module 2), the discrete I/O (Module 3), the ladder logic (Module 4), the timers and counters (Module 5), the sensors (Module 7), the HMI (Module 8), the troubleshooting (Module 9), the network (Module 10), and the safety (Module 11).</p>\n<p>The project starts with the <strong>requirement</strong> — what the machine must do — written down in the specification. The specification lists the <strong>sequence of operations</strong> (what happens, in order), the <strong>I/O list</strong> (every input and output, with its address and its purpose), and the <strong>safety requirements</strong> (the E-stop, the guard interlock, the safe state). Nothing is built until the specification is agreed, because a machine built from a vague requirement is a machine that does the wrong thing.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A project starts with a written specification: the sequence of operations, the I/O list, and the safety requirements. Nothing is built until the specification is agreed.</div>"
    },
    {
      "heading": "Design: I/O List, Ladder Logic & HMI",
      "html": "<p>The <strong>I/O list</strong> for the sorter is short. Inputs: start button (I:0/0), stop button (I:0/1), E-stop (safety relay, not a standard input), guard-door interlock (safety relay), inductive proximity sensor for metal detection (I:0/2), photoelectric sensor for part presence (I:0/3), left-bin full sensor (I:0/4), right-bin full sensor (I:0/5). Outputs: conveyor motor starter (O:0/0), left pusher solenoid (O:0/1), right pusher solenoid (O:0/2), running light (O:0/3), fault light (O:0/4). Each point is named in the program with a descriptive tag, so the ladder logic reads like the specification.</p>\n<p>The <strong>ladder logic</strong> follows the specification's sequence. Rung 1 is the conveyor's seal-in rung: start, stop, and the safety relay's healthy signal in series with the coil. Rung 2 is the metal counter: the inductive sensor's rising edge drives a CTU. Rung 3 is the plastic counter: the photoelectric sensor fires and the inductive sensor does not, so the part is plastic, and a CTU counts it. Rung 4 drives the left pusher: when the metal counter's done bit is set and the part is at the pusher, a TON delays the pusher by the conveyor's travel time, then the pusher fires for one second (a TOF holds it). Rung 5 does the same for the right pusher. Rung 6 stops the conveyor when either bin is full and turns on the fault light. The <strong>HMI</strong> shows the two counts, the conveyor state, and a bin-full alarm, with a reset button for the counters that only a supervisor can use (Module 8).</p>"
    },
    {
      "heading": "Commissioning: Testing, Debugging & Documentation",
      "html": "<p><strong>Commissioning</strong> is testing the machine against its specification before it is handed over. It is done in stages: first, the wiring is checked with the power off — every wire against the wiring diagram, every sensor's operation, every output's operation with the outputs forced one at a time (Module 9). Then the program is downloaded and the machine is run in <strong>manual mode</strong>, where each motion is driven by a button on the HMI, so each device can be tested alone. Then the machine is run in <strong>automatic mode</strong> with no parts, then with parts, then at full speed, and each stage is checked against the specification: does the metal part go left, does the plastic part go right, do the counters count correctly, does the machine stop when the guard opens, does the E-stop stop it?</p>\n<p>Every fault found in commissioning is fixed and the test is repeated — a fault that is \"fixed\" without re-testing is not fixed. The commissioning tests are written down, with the results, so there is a record that the machine met its specification. The <strong>documentation</strong> is finished at the same time: the as-built wiring diagram (the diagram updated to match what was actually built), the program's comments and the I/O list, the HMI's screen list, and the operating instructions. A machine with no documentation is a machine that cannot be maintained.</p>"
    },
    {
      "heading": "Handover, Training & What This Course Built",
      "html": "<p><strong>Handover</strong> is the moment the machine is given to its operator and its maintainer. The operator is trained on the HMI, the normal start and stop, the alarms, and what to do when a bin is full. The maintainer is trained on the program, the I/O list, the sensors, and the troubleshooting method (Module 9). <strong>Spares</strong> are handed over too: a spare sensor, a spare output module fuse, a spare of each wearing part, so the first failure does not stop the line while a part is ordered. And the <strong>as-built documentation</strong> is handed over in its final form — the wiring diagram, the program listing, the I/O list, the HMI screens, and the operating instructions — so the machine can be maintained for its whole life.</p>\n<p>This course built the whole picture. Module 1 showed why a PLC replaces relay logic. Module 2 showed the hardware. Module 3 showed the I/O. Module 4 showed the ladder logic. Module 5 showed timers and counters. Module 6 showed analog signals. Module 7 showed sensors. Module 8 showed the HMI. Module 9 showed troubleshooting and forcing. Module 10 showed networks. Module 11 showed safety. And this module showed how they fit together in a real project — a project that starts with a specification, is built from an I/O list and ladder logic, is commissioned against its specification, and is handed over with training, spares, and documentation. That is the job: not just writing ladder logic, but delivering a machine that works, that is safe, and that can be maintained.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Handing a machine over without as-built documentation. A machine with no wiring diagram, no I/O list, and no program comments cannot be maintained — and the first fault will take ten times longer to fix.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>A project starts with a written specification: the sequence of operations, the I/O list, and the safety requirements. Nothing is built until it is agreed.</li>\n<li>Design: the I/O list names every input and output with its address and purpose; the ladder logic follows the sequence; the HMI shows the counts, the state, and the alarms.</li>\n<li>Commissioning: check the wiring with the power off, test each output by forcing, run in manual mode, then automatic with no parts, then with parts, then at full speed — checking each stage against the specification.</li>\n<li>Every fault is fixed and re-tested. The commissioning tests are written down with their results.</li>\n<li>Handover: train the operator and the maintainer, hand over spares, and hand over the as-built documentation — wiring diagram, program listing, I/O list, HMI screens, operating instructions.</li>\n<li>This course: relay logic to PLC (M1) · hardware (M2) · I/O (M3) · ladder logic (M4) · timers and counters (M5) · analog (M6) · sensors (M7) · HMI (M8) · troubleshooting (M9) · networks (M10) · safety (M11) · a complete project (M12).</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Skipping the specification and building straight from a conversation. A machine built from a vague requirement does the wrong thing — and the argument about what it was supposed to do comes after the machine is built, when it is expensive to fix.</div>\n<p><strong>Ready-to-Work link:</strong> If you can walk through this sorter project — specification, I/O list, ladder logic, commissioning, and handover — you have this course. The midterm covers Modules 1–6 and the final covers Modules 1–12.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Specification", "def": "The written requirement for a machine: what it must do, in what order, and how safely." },
    { "term": "Sequence of operations", "def": "The step-by-step description of what a machine does, in order." },
    { "term": "I/O list", "def": "The list of every input and output with its address and its purpose." },
    { "term": "Commissioning", "def": "Testing a machine against its specification before handover." },
    { "term": "Manual mode", "def": "A machine mode where each motion is driven by an operator command, for testing." },
    { "term": "Automatic mode", "def": "A machine mode where the PLC runs the full sequence without operator commands." },
    { "term": "As-built documentation", "def": "The final documentation updated to match what was actually built: wiring diagram, program listing, I/O list, HMI screens, operating instructions." },
    { "term": "Handover", "def": "Giving a machine to its operator and maintainer, with training, spares, and documentation." },
    { "term": "Spares", "def": "Spare parts handed over with a machine so the first failure does not stop the line." },
    { "term": "Tag (descriptive)", "def": "A PLC memory name that describes its purpose, so the program reads like the specification." },
    { "term": "Operating instructions", "def": "The written instructions for running a machine: normal start and stop, alarms, and what to do when something goes wrong." },
    { "term": "Pneumatic pusher", "def": "A cylinder-driven arm that pushes a part off a conveyor into a bin." },
    { "term": "Solenoid", "def": "An electrically operated valve that controls air to a pneumatic cylinder." },
    { "term": "Travel time", "def": "The time a part takes to travel from a sensor to a pusher on a conveyor." },
    { "term": "Full speed test", "def": "The final commissioning stage: running the machine at its rated speed with real parts." }
  ],
  "video": {
    "title": "PLC Programming Full Course | Allen Bradley RSLogix 5000 (Studio 5000) Ladder Logic",
    "embedUrl": "https://www.youtube.com/embed/J73pYiE0XS8",
    "note": "A full PLC programming walkthrough in Studio 5000 — ladder logic, timers, counters, and a complete program — the kind of end-to-end build this module describes.",
    "more": [
      { "title": "Learn PLC Programming : From Basics to Advanced - Best Course", "url": "https://www.youtube.com/watch?v=c8GssBRJlGA" },
      { "title": "PLC Programming Tutorial for Beginners_ Part 1", "url": "https://www.youtube.com/watch?v=Eq_LF9MTlCQ" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Write the I/O list for the parts-sorting conveyor: list the inputs and outputs, with a tag name and a purpose for each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Inputs — Start_PB (start button), Stop_PB (stop button), Metal_Sensor (inductive proximity, detects metal), Part_Sensor (photoelectric, detects a part), Left_Bin_Full, Right_Bin_Full. Step 2: Outputs — Conveyor_Motor, Left_Pusher, Right_Pusher, Running_Light, Fault_Light. Step 3: The E-stop and the guard interlock go to the safety relay, not to standard PLC inputs. Step 4: Each tag's name describes its purpose, so the program reads like the specification.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The metal sensor is 500 mm before the left pusher, and the conveyor runs at 250 mm per second. How long after the sensor detects a metal part should the pusher fire?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Time = distance / speed = 500 / 250 = 2 seconds. Step 2: A TON with a preset of 2 seconds, driven by the metal detection, delays the pusher. Step 3: The pusher then fires for one second (a TOF holds it) and retracts.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> The plastic counter counts a part, but the part is actually metal. What are the two most likely causes?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The inductive sensor missed the metal part — its sensing distance is wrong, or its face is dirty, or the part passed too fast. Step 2: Or the logic is wrong — the plastic rung counts a part when the photoelectric sensor fires and the inductive sensor does not, so a missed metal detection looks like plastic. Step 3: Check the sensor live first, then the logic.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> List the commissioning stages for the sorter in order.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check the wiring with the power off against the wiring diagram. Step 2: Force each output one at a time and verify its device operates. Step 3: Run in manual mode and test each motion alone. Step 4: Run in automatic mode with no parts. Step 5: Run in automatic mode with parts. Step 6: Run at full speed with real parts. Step 7: Check each stage against the specification and write down the results.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> The machine is ready for handover. What must be handed over besides the machine itself?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Training for the operator (HMI, normal operation, alarms) and for the maintainer (program, I/O list, sensors, troubleshooting). Step 2: Spares — a spare sensor, spare fuses, spare wearing parts. Step 3: As-built documentation — wiring diagram, program listing, I/O list, HMI screens, operating instructions.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A customer asks for a change after the machine is built: the left bin should hold plastic and the right bin metal. What is the correct way to handle it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Change the specification first, in writing, and agree it. Step 2: The change is small — swap the two pusher outputs in the program and swap the bin labels — but the specification must be updated so the documentation matches the machine. Step 3: Re-commission the changed function and update the as-built documentation. Step 4: Never change a machine from a conversation without updating the specification.</p>"
    }
  ],
  "quiz": [
    {
      "q": "An automation project starts with:",
      "choices": ["Buying the PLC", "A written specification: the sequence of operations, the I/O list, and the safety requirements", "Wiring the panel", "Writing the ladder logic"],
      "answer": 1,
      "explanation": "Correct: (b). Nothing is built until the specification is agreed. (a) Buying hardware comes after the specification. (c) Wiring comes after the design. (d) Ladder logic comes after the I/O list."
    },
    {
      "q": "An I/O list gives:",
      "choices": ["The PLC's price", "Every input and output with its address and its purpose", "The HMI's colors", "The network's IP addresses"],
      "answer": 1,
      "explanation": "Correct: (b). The I/O list is the design's foundation. (a) Price is not in the I/O list. (c) HMI colors are a design choice. (d) IP addresses are in the network documentation."
    },
    {
      "q": "Commissioning is:",
      "choices": ["Ordering the parts", "Testing the machine against its specification before handover", "Training the operator", "Writing the specification"],
      "answer": 1,
      "explanation": "Correct: (b). Commissioning proves the machine meets its specification. (a) Ordering is procurement. (c) Training is part of handover. (d) Writing the specification is the project's first stage."
    },
    {
      "q": "The correct commissioning order is:",
      "choices": ["Full speed first, then manual", "Wiring check with power off, then forced outputs, then manual mode, then automatic with no parts, then with parts, then full speed", "Automatic mode first, then wiring check", "Handover first, then testing"],
      "answer": 1,
      "explanation": "Correct: (b). Commissioning goes from safe and simple to full operation. (a) Full speed first is unsafe. (c) Automatic mode before the wiring check is unsafe. (d) Handover comes after testing."
    },
    {
      "q": "As-built documentation is:",
      "choices": ["The original design drawings", "The final documentation updated to match what was actually built", "The operator's notes", "The purchase orders"],
      "answer": 1,
      "explanation": "Correct: (b). As-built means updated to the real machine. (a) Original drawings may not match what was built. (c) Operator notes are not documentation. (d) Purchase orders are commercial records."
    },
    {
      "q": "Handover includes:",
      "choices": ["Only the machine", "Training, spares, and as-built documentation", "Only the program", "Only the HMI"],
      "answer": 1,
      "explanation": "Correct: (b). Handover gives the operator and maintainer everything they need. (a) The machine alone cannot be maintained. (c) The program alone is not enough. (d) The HMI alone is not enough."
    },
    {
      "q": "A part travels 500 mm to a pusher at 250 mm/s. The pusher delay is:",
      "choices": ["0.5 seconds", "1 second", "2 seconds", "5 seconds"],
      "answer": 2,
      "explanation": "Correct: (c). 500 / 250 = 2 seconds. (a) 0.5 seconds would be 125 mm. (b) 1 second would be 250 mm. (d) 5 seconds would be 1,250 mm."
    },
    {
      "q": "A change requested after a machine is built should be:",
      "choices": ["Made from a conversation with no paperwork", "Written into the specification, agreed, made, re-commissioned, and documented", "Made only by the operator", "Ignored"],
      "answer": 1,
      "explanation": "Correct: (b). Changes go through the specification and re-commissioning. (a) Undocumented changes make the machine unmaintainable. (c) The operator does not change the machine. (d) Ignoring a customer request is not the answer."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — A Complete Automation Project: Quick Reference</h3>\n<p><strong>Core idea:</strong> A project starts with a written specification (sequence, I/O list, safety), is built from an I/O list and ladder logic, is commissioned against its specification, and is handed over with training, spares, and documentation.</p>\n<p><strong>Sorter project:</strong> Conveyor + inductive sensor (metal) + photoelectric sensor (part present) + two pneumatic pushers + two counters. TON delays the pusher by travel time (distance / speed). Bin-full sensors stop the conveyor.</p>\n<p><strong>Commissioning order:</strong> Wiring check (power off) · Force each output · Manual mode · Automatic, no parts · Automatic, with parts · Full speed. Fix and re-test every fault; write down the results.</p>\n<p><strong>Handover:</strong> Operator training · Maintainer training · Spares · As-built documentation (wiring diagram, program listing, I/O list, HMI screens, operating instructions).</p>\n<p><strong>Changes:</strong> Write them into the specification, agree them, make them, re-commission, and update the documentation.</p>\n<p><strong>Course map:</strong> M1 relay logic to PLC · M2 hardware · M3 I/O · M4 ladder logic · M5 timers &amp; counters · M6 analog · M7 sensors · M8 HMI · M9 troubleshooting · M10 networks · M11 safety · M12 complete project.</p>\n<p><strong>Self-check:</strong> Walk through the sorter project — specification, I/O list, ladder logic, commissioning, handover. If you can, you have this course.</p>\n"
};
