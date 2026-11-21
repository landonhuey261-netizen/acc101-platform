// ele109 - Module 11: Safety in Automated Systems
module.exports = {
  "number": 11,
  "slug": "safety-automated-systems",
  "title": "Safety in Automated Systems",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why safety in automated systems must be hardwired, not only in the PLC program.",
    "Describe safety devices: E-stops, safety interlock switches, light curtains, and safety mats.",
    "Explain safety relays and safety PLCs and how they differ from standard PLCs.",
    "Describe lockout/tagout (LOTO) for automated equipment, per NFPA 70E.",
    "Explain risk assessment: identifying hazards and reducing risk to an acceptable level."
  ],
  "sections": [
    {
      "heading": "Why Safety Must Be Hardwired",
      "html": "<p>An automated machine can move without warning — a conveyor can start, a cylinder can extend, a robot can swing — and the only thing between a person and that motion is the safety system. The first rule of safety in automated systems is that the safety function must not depend on the standard PLC or its program. A standard PLC can fail, its program can have a bug, its network can go down, and any of those would defeat a safety function that lived only in the program. So the safety function is <strong>hardwired</strong>: the emergency stop button, the guard-door interlock, and the light curtain are wired through a <strong>safety relay</strong> or a <strong>safety PLC</strong> that is separate from the standard PLC, and that safety device directly drops out the power to the machine's motion — through a contactor, not through a program output.</p>\n<p>The standard PLC still knows about safety: it receives a signal that the E-stop was pressed or the guard was opened, so it can show the state on the HMI and log the event. But the standard PLC does not cause the stop — the safety relay does, and the safety relay does it even if the standard PLC is dead, faulted, or has a bug. That separation is the core of machine safety, and it is the reason a technician must never wire a safety device into a standard PLC input as the only safety measure, and must never bypass a safety device to \"get the machine running.\"</p>\n<div class=\"callout\"><strong>Key idea:</strong> Safety must not depend on the standard PLC or its program. Safety devices are wired through a safety relay or safety PLC that directly drops out power to the machine's motion.</div>"
    },
    {
      "heading": "Safety Devices: E-Stops, Interlocks, Light Curtains & Mats",
      "html": "<p>The <strong>emergency stop (E-stop)</strong> is the red mushroom-head button that stops the machine in an emergency. It is a normally-closed contact that opens when pressed, it latches in the pressed position until it is deliberately reset (twist or pull), and it is wired into the safety relay — not into a standard PLC input. Pressing an E-stop must stop all hazardous motion, and the machine must not restart when the E-stop is reset: the operator must deliberately press start, so a machine never restarts on its own after an E-stop.</p>\n<p>A <strong>safety interlock switch</strong> on a guard door stops the machine when the door is opened, and prevents the machine from starting while the door is open. A <strong>light curtain</strong> is a row of light beams across an opening: when a hand or a body breaks the beam, the safety relay stops the machine. It is used where a guard door would slow the work — a press that must be loaded by hand, for example — and it must be placed far enough from the hazard that the machine stops before the hand reaches it (the <strong>safety distance</strong>). A <strong>safety mat</strong> is a pressure-sensitive mat on the floor: stepping on it stops the machine. Each device is chosen for the hazard and the work: a door gets an interlock, an open loading area gets a light curtain, a floor area gets a mat.</p>"
    },
    {
      "heading": "Safety Relays, Safety PLCs & Risk Assessment",
      "html": "<p>A <strong>safety relay</strong> is a small, dedicated device that monitors the safety inputs (E-stop, interlock, light curtain) and controls the safety outputs (the contactors that drop power to the motion). It has redundant, monitored contacts — two channels that must agree — so a single fault (a welded contact, a broken wire) is detected and the machine goes to a safe state instead of running with a hidden fault. A <strong>safety PLC</strong> is a PLC built for safety: it has redundant processors, self-checking, and safety-rated I/O, and it runs safety logic that is certified to a safety standard. A safety PLC is used where the safety logic is too complex for a safety relay — a machine with many zones, many interlocks, and many safety devices.</p>\n<p>Before any of these are chosen, a <strong>risk assessment</strong> is done: the hazards are identified (crushing, cutting, entanglement, stored energy), the severity of each harm and the likelihood of exposure are estimated, and the risk is reduced — first by eliminating the hazard (guarding, design), then by a safety device (interlock, light curtain), then by a warning or a procedure — until the remaining risk is acceptable. The risk assessment is what decides whether a guard door, a light curtain, or a mat is needed, and where it must be placed. A technician does not do the risk assessment alone, but must understand it, because it is the reason the safety devices are where they are.</p>"
    },
    {
      "heading": "Lockout/Tagout, Safe States & Working on Automated Equipment",
      "html": "<p><strong>Lockout/tagout (LOTO)</strong> is the procedure for making a machine safe before working on it: the energy sources (electrical, pneumatic, hydraulic, stored energy in a spring or a raised load) are isolated, locked in the off position with a personal lock, and tagged with the worker's name. Only the person who applied the lock removes it, and the machine is verified to be de-energized (try the start button — nothing should happen) before work begins. All work on automated equipment in this course assumes de-energized, locked-out/tagged-out work under a licensed supervisor, per NFPA 70E — never work on live or energized equipment, and never trust a PLC output or an HMI screen to tell you a machine is safe.</p>\n<p>A <strong>safe state</strong> is the state a machine goes to when a safety device operates: motion stops, stored energy is released or contained, and the machine stays stopped until a deliberate restart. <strong>Guarding</strong> is the physical barrier that keeps people out of the hazard zone — a fence, a cover, a guard door — and it must be in place and its interlock working before the machine runs. The rules for working on automated equipment are simple and absolute: lock it out, verify it is dead, never bypass a safety device, never reach into a machine that is not locked out, and never restart a machine until everyone is clear and every guard is in place.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Trusting the HMI or the PLC to tell you a machine is safe. A machine is safe only when it is locked out and verified de-energized — a screen that says \"stopped\" is not a lockout.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Safety must not depend on the standard PLC or its program. Safety devices are wired through a safety relay or a safety PLC that directly drops power to the machine's motion.</li>\n<li>E-stop: red mushroom-head, normally closed, latches until deliberately reset, wired into the safety relay. The machine must not restart on its own after an E-stop reset.</li>\n<li>Interlock switch: stops the machine when a guard door opens. Light curtain: stops the machine when a beam is broken, placed at a safety distance. Safety mat: stops the machine when stepped on.</li>\n<li>Safety relay: redundant, monitored contacts that detect a single fault. Safety PLC: a certified PLC for complex safety logic.</li>\n<li>Risk assessment: identify hazards, estimate severity and likelihood, reduce risk by elimination, then safety devices, then warnings — until the remaining risk is acceptable.</li>\n<li>LOTO: isolate all energy sources, lock them off with a personal lock, tag them, verify de-energized. Never work on live equipment; never bypass a safety device; never trust a screen to tell you a machine is safe.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Wiring a safety device into a standard PLC input as the only safety measure. If the PLC fails or its program has a bug, the safety function is gone. Safety goes through a safety relay or safety PLC.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain why safety is hardwired, name the safety devices, and describe LOTO, you have this module. Module 12 walks through a complete automation project.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Safety relay", "def": "A dedicated device that monitors safety inputs and drops power to the machine's motion through redundant, monitored contacts." },
    { "term": "Safety PLC", "def": "A PLC built and certified for safety logic, with redundant processors and self-checking." },
    { "term": "Emergency stop (E-stop)", "def": "A red mushroom-head button that stops all hazardous motion; normally closed, latching until deliberately reset." },
    { "term": "Safety interlock switch", "def": "A switch on a guard door that stops the machine when the door is opened." },
    { "term": "Light curtain", "def": "A row of light beams across an opening; breaking the beam stops the machine." },
    { "term": "Safety mat", "def": "A pressure-sensitive floor mat that stops the machine when stepped on." },
    { "term": "Safety distance", "def": "How far a light curtain must be from the hazard so the machine stops before a hand reaches it." },
    { "term": "Risk assessment", "def": "Identifying hazards and estimating severity and likelihood, then reducing risk to an acceptable level." },
    { "term": "Lockout/tagout (LOTO)", "def": "Isolating energy sources, locking them off with a personal lock, and tagging them before working on a machine." },
    { "term": "Safe state", "def": "The state a machine goes to when a safety device operates: motion stopped, stored energy contained, and the machine stays stopped until a deliberate restart." },
    { "term": "Guarding", "def": "The physical barrier that keeps people out of a machine's hazard zone." },
    { "term": "Stored energy", "def": "Energy held in a machine after it is switched off: a raised load, a compressed spring, a charged capacitor, a pressurized line." },
    { "term": "Redundant contacts", "def": "Two safety channels that must agree, so a single fault is detected." },
    { "term": "Hazard", "def": "A source of possible harm, such as crushing, cutting, entanglement, or stored energy." },
    { "term": "NFPA 70E", "def": "The standard for electrical safety in the workplace, including lockout/tagout and safe work practices." }
  ],
  "video": {
    "title": "Safety PLC & Safety Instrumented Systems Explained | Machine Safety & Functional Safety Basics",
    "embedUrl": "https://www.youtube.com/embed/emp0T_kTsc4",
    "note": "An explanation of safety PLCs and safety instrumented systems — why safety logic is separate from standard control, and how safety devices and safety relays protect people around automated machines.",
    "more": [
      { "title": "Industrial Machine Safety Basics | E-Stop, Interlock & Guarding Explained", "url": "https://www.youtube.com/watch?v=Nge3bGt9Br8" },
      { "title": "Lockout/Tagout and Machine Safety Training", "url": "https://www.youtube.com/watch?v=N1eUYjn1NxE" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A guard-door interlock switch is wired into a standard PLC input, and the PLC program stops the machine when the door opens. Is this safe? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No. Step 2: The safety function depends on the standard PLC and its program — if the PLC fails or the program has a bug, the safety function is gone. Step 3: The interlock must be wired through a safety relay or a safety PLC that directly drops power to the machine's motion.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> An operator presses the E-stop, then resets it by twisting it. The machine immediately restarts. What is wrong, and what is the correct behavior?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The machine must not restart on its own after an E-stop reset. Step 2: The correct behavior is that the machine stays stopped until the operator deliberately presses start. Step 3: An automatic restart after an E-stop is a serious safety fault — it must be corrected before the machine runs again.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A press must be loaded by hand, so a guard door would slow the work. Which safety device fits, and what determines where it is placed?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A light curtain across the loading opening. Step 2: Its placement is set by the safety distance — it must be far enough from the hazard that the machine stops before a hand can reach it. Step 3: The safety distance is calculated from the machine's stopping time and the speed of a reaching hand.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> You must replace a sensor on an automated conveyor. List the lockout/tagout steps in order.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Notify the operator and the supervisor. Step 2: Shut the machine down normally. Step 3: Isolate all energy sources — electrical, pneumatic, hydraulic — and any stored energy. Step 4: Lock each isolation point off with your personal lock and tag it with your name. Step 5: Verify de-energized — try the start button; nothing should happen. Step 6: Only then begin work. Step 7: Only the person who applied the lock removes it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A machine's safety relay detects a fault in one of its two channels. What does it do, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It goes to a safe state — it drops power to the machine's motion and stays stopped. Step 2: Its redundant, monitored contacts are designed so a single fault is detected. Step 3: The machine must not run with a hidden safety fault; the fault must be found and repaired before the machine is returned to service.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> An HMI screen shows \"Machine stopped\" and the PLC's output lights are all off. Is it safe to reach into the machine? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No. Step 2: A screen that says \"stopped\" and lights that are off are not a lockout — the machine could restart, and stored energy (a raised load, a pressurized line, a charged capacitor) may still be present. Step 3: A machine is safe only when it is locked out and verified de-energized, per NFPA 70E.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Safety in automated systems must be hardwired because:",
      "choices": ["It is cheaper", "A standard PLC can fail or have a program bug, which would defeat a safety function that lived only in the program", "It is faster to install", "The HMI requires it"],
      "answer": 1,
      "explanation": "Correct: (b). The safety function must not depend on the standard PLC. (a) Cost is not the reason. (c) Speed of installation is not the reason. (d) The HMI does not set safety requirements."
    },
    {
      "q": "An E-stop button is:",
      "choices": ["Normally open and momentary", "Normally closed and latching until deliberately reset", "Wired into a standard PLC input only", "A type of sensor"],
      "answer": 1,
      "explanation": "Correct: (b). The E-stop is NC and latches. (a) NO and momentary would not stop the machine reliably. (c) The E-stop goes into the safety relay, not only a PLC input. (d) It is a switch, not a sensor."
    },
    {
      "q": "After an E-stop is reset, the machine must:",
      "choices": ["Restart immediately", "Stay stopped until the operator deliberately presses start", "Run at half speed", "Sound an alarm and keep running"],
      "answer": 1,
      "explanation": "Correct: (b). A deliberate start is required. (a) Automatic restart is a serious safety fault. (c) Half speed is not a safe state. (d) Running after an E-stop reset is not acceptable."
    },
    {
      "q": "A light curtain stops the machine when:",
      "choices": ["The guard door is closed", "A hand or body breaks its light beams", "The temperature rises", "The HMI is touched"],
      "answer": 1,
      "explanation": "Correct: (b). Breaking the beam triggers the safety relay. (a) A closed door is normal operation. (c) Temperature does not operate a light curtain. (d) The HMI does not operate a light curtain."
    },
    {
      "q": "A safety relay's redundant, monitored contacts exist so that:",
      "choices": ["The machine runs faster", "A single fault (a welded contact, a broken wire) is detected and the machine goes to a safe state", "Two motors can run at once", "The HMI shows more data"],
      "answer": 1,
      "explanation": "Correct: (b). Redundancy detects single faults. (a) Speed is not the purpose. (c) Motor count is unrelated. (d) HMI data is unrelated."
    },
    {
      "q": "Lockout/tagout (LOTO) means:",
      "choices": ["Turning the machine off at the HMI", "Isolating all energy sources, locking them off with a personal lock, tagging them, and verifying de-energized", "Locking the panel door", "Tagging the machine for maintenance"],
      "answer": 1,
      "explanation": "Correct: (b). LOTO is isolation, locking, tagging, and verification. (a) Turning it off at the HMI is not a lockout. (c) Locking a door is not LOTO. (d) Tagging alone without locking and verification is not LOTO."
    },
    {
      "q": "A risk assessment is done to:",
      "choices": ["Set the PLC's scan time", "Identify hazards, estimate severity and likelihood, and reduce risk to an acceptable level", "Choose the HMI colors", "Size the transformer"],
      "answer": 1,
      "explanation": "Correct: (b). Risk assessment drives the choice and placement of safety devices. (a) Scan time is a PLC setting. (c) HMI colors are a design choice. (d) Transformer sizing is an electrical calculation."
    },
    {
      "q": "An HMI screen that says \"stopped\" is:",
      "choices": ["Proof the machine is safe to reach into", "Not a lockout — the machine is safe only when locked out and verified de-energized", "The same as a guard", "A safety device"],
      "answer": 1,
      "explanation": "Correct: (b). A screen is not a lockout. (a) A screen cannot prove a machine is safe. (c) A screen is not a guard. (d) The HMI is not a safety device."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Safety in Automated Systems: Quick Reference</h3>\n<p><strong>Core idea:</strong> Safety must not depend on the standard PLC or its program. Safety devices go through a safety relay or safety PLC that directly drops power to the machine's motion.</p>\n<p><strong>Devices:</strong> E-stop (red mushroom-head, NC, latching, into the safety relay; no automatic restart) · Interlock switch (guard door) · Light curtain (beam broken = stop, at a safety distance) · Safety mat (stepped on = stop).</p>\n<p><strong>Safety relay:</strong> Redundant, monitored contacts — a single fault is detected and the machine goes to a safe state. <strong>Safety PLC:</strong> Certified PLC for complex safety logic.</p>\n<p><strong>Risk assessment:</strong> Identify hazards · Estimate severity and likelihood · Reduce risk (eliminate, then safety device, then warning) until acceptable.</p>\n<p><strong>LOTO:</strong> Isolate all energy · Lock off with a personal lock · Tag · Verify de-energized (try start — nothing happens). Never work on live equipment; never bypass a safety device; never trust a screen to tell you a machine is safe. NFPA 70E.</p>\n<p><strong>Self-check:</strong> Explain why safety is hardwired, name the safety devices, and describe LOTO. If you can, you have this module.</p>\n"
};
