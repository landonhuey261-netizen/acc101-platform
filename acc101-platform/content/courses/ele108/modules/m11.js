// ele108 - Module 11: Troubleshooting Control Circuits
module.exports = {
  "number": 11,
  "slug": "troubleshooting-control-circuits",
  "title": "Troubleshooting Control Circuits",
  "estTime": "3–4 hours",
  "objectives": [
    "Apply a systematic troubleshooting method to a control circuit.",
    "Use a multimeter to test for voltage, continuity, and coil resistance in a control circuit.",
    "Read a ladder diagram to find where voltage should be and where it is lost.",
    "Diagnose common faults: open stop circuit, welded contacts, failed coil, blown control fuse, tripped overload.",
    "Explain the half-split method for finding an open in a long control circuit."
  ],
  "sections": [
    {
      "heading": "The Method: From the Diagram to the Measurement",
      "html": "<p>Control-circuit troubleshooting starts on paper, not in the panel. Read the ladder diagram first and state what the circuit should be doing: which coil should be energized, which contacts should be closed, and where voltage should be present. Then measure. The gap between what the diagram says and what the meter says is the fault. A technician who starts by replacing parts without reading the diagram is guessing; a technician who reads the diagram and measures is diagnosing. The method from Electrical 107, Module 11 applies here too — observe, measure, isolate, verify — but the control circuit adds one tool: the ladder diagram itself, which tells you exactly where to put the meter leads.</p>\n<p>Two measurements do most of the work. A <strong>voltage measurement</strong> across a device tells you whether it has power: voltage across a coil that should be energized means the coil has failed or is mechanically jammed; no voltage means the fault is upstream, in the contacts and wiring feeding the coil. A <strong>continuity measurement</strong> (done de-energized) tells you whether a contact or a wire is open: a stop button that reads open when it is not pressed has failed, and a wire that reads open between its two ends is broken. Never measure continuity on a live circuit — the meter's test current and the circuit's voltage do not mix, and the reading is meaningless.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Read the ladder diagram, state what should be true, then measure. The gap between the diagram and the meter is the fault.</div>"
    },
    {
      "heading": "The Half-Split Method",
      "html": "<p>When a control circuit has a long chain of series contacts — stop buttons, overload contacts, interlocks, limit switches — and the coil has no voltage, the fault is an open somewhere in the chain. Checking each device one by one from the start is slow. The <strong>half-split method</strong> is faster: measure at the middle of the chain. If voltage is present at the middle, the open is in the second half; if it is absent, the open is in the first half. Split the faulty half again, and keep splitting until the open is between two adjacent points. Each measurement cuts the search in half, so even a chain of sixteen devices takes only four measurements to find.</p>\n<p>The same idea works in reverse for a short: if a control fuse blows the moment power is applied, disconnect the circuit in the middle and see which half blows the fuse. The half-split method is not a trick — it is the disciplined way to search a series circuit, and it is what separates a technician who finds a fault in ten minutes from one who spends an hour checking every device in order. It only works if you have the ladder diagram and know the order of the devices in the chain, which is one more reason the diagram is the first tool you pick up.</p>"
    },
    {
      "heading": "Common Control-Circuit Faults",
      "html": "<p>Learn the fault map and most control calls become quick. <strong>Motor will not start, coil has no voltage:</strong> an open in the control circuit — a tripped overload, an open stop button, a blown control fuse, or a broken wire. <strong>Motor will not start, coil has voltage:</strong> a failed coil, a mechanically jammed contactor, or no power in the power circuit (blown main fuse or open disconnect). <strong>Motor starts but will not latch:</strong> the sealing contact or its wiring (Module 4). <strong>Motor will not stop:</strong> a welded contactor contact, a welded stop button, or a short in the stop circuit — use the disconnect. <strong>Contactor chatters:</strong> low control voltage, often an undersized control transformer or a loose connection. <strong>Control fuse blows repeatedly:</strong> a short in the control wiring, a failed coil, or a grounded control conductor — find the short, do not fit a bigger fuse.</p>\n<p>One fault deserves special attention because it is common and confusing: a <strong>tripped overload that will not reset</strong>. Thermal overloads need time to cool before they reset; pressing the reset button immediately after a trip does nothing, and the motor will not start until the overload has cooled and been reset. An overload that trips again immediately after reset is reporting a real problem — an overloaded motor, a jam, or low voltage — and the cause must be found before the motor is run again. Never turn the overload setting up to stop the tripping; the setting protects the motor, and raising it removes the protection.</p>"
    },
    {
      "heading": "Safety, Documentation & Verification",
      "html": "<p>Control-circuit troubleshooting is done on live circuits for voltage measurements, which makes it qualified-person work under NFPA 70E: the right meter (rated for the voltage, with fused leads), the right PPE for the arc-flash category, and a second person nearby when the work is on energized equipment. Continuity and resistance measurements are done de-energized, locked out, tagged out, and verified dead. The most dangerous habit in control troubleshooting is working in a panel with the cover off and the power on while reaching past live bus bars to reach a control terminal — plan the measurement, use meter leads with guards, and keep your hands out of the panel except to place the leads.</p>\n<p>Every repair ends the same way: <strong>document and verify</strong>. Write down what failed, what you replaced, and the settings you changed — the overload setting, the timer delay, the control transformer tap — so the next person knows what is in the panel and why. Then verify under load: run the machine through its full cycle, watch the contactors pull in and drop out, check the running current against the nameplate, and confirm the fault is gone. A repair that is not verified is a guess, and a guess in a control panel is a callback waiting to happen.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Fitting a bigger control fuse because the fuse keeps blowing. The fuse is reporting a short or a failed coil. A bigger fuse lets the fault burn the wiring instead of blowing the fuse — find the short.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Start on paper: read the ladder diagram, state what should be true, then measure. The gap between the diagram and the meter is the fault.</li>\n<li>Voltage across a coil that should be energized means the coil or the contactor failed; no voltage means the fault is upstream in the control chain.</li>\n<li>Half-split: measure at the middle of a series chain and keep splitting the faulty half — each measurement cuts the search in half.</li>\n<li>Fault map: no start/no voltage = open control circuit; no start/with voltage = failed coil or no power circuit; won't latch = sealing contact; won't stop = welded contact; chatter = low control voltage; repeated fuse = short.</li>\n<li>A tripped overload needs time to cool before it resets; an overload that trips again is reporting a real problem — never turn the setting up.</li>\n<li>Document the repair and verify it under load through the full cycle.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Measuring continuity on a live circuit. Continuity is a de-energized test — on a live circuit the reading is meaningless and the meter can be damaged.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain the half-split method and map five symptoms to their causes, you have this module. Module 12 covers control panel layout and documentation.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Half-split method", "def": "Finding an open in a series chain by measuring at the middle and repeatedly splitting the faulty half." },
    { "term": "Voltage measurement", "def": "Measuring the voltage across a device to see whether it has power; done on a live circuit." },
    { "term": "Continuity measurement", "def": "Measuring whether a contact or wire is open or closed; done de-energized." },
    { "term": "Upstream", "def": "Toward the power source in a circuit; the fault is upstream of a device that has no voltage." },
    { "term": "Downstream", "def": "Away from the power source; toward the load." },
    { "term": "Chatter", "def": "Rapid opening and closing of a contactor, usually from low coil voltage." },
    { "term": "Welded contact", "def": "A contact fused shut by arcing; it cannot open and must be replaced." },
    { "term": "Control fuse", "def": "The fuse protecting the control circuit; a repeated blow means a short or a failed coil." },
    { "term": "Thermal overload reset", "def": "A thermal overload must cool before it can be reset after a trip." },
    { "term": "Arc-flash PPE", "def": "Personal protective equipment rated for the arc-flash energy of the equipment being worked on." },
    { "term": "Fused meter leads", "def": "Meter leads with built-in fuses that limit the fault current if the meter is misconnected." },
    { "term": "Callback", "def": "A return visit to fix a repair that was not verified — the result of skipping the verification step." },
    { "term": "Series chain", "def": "A string of contacts in series in a control circuit, such as stop buttons and interlocks." },
    { "term": "Qualified person", "def": "A person with the training and knowledge to work safely on energized electrical equipment (NFPA 70E)." }
  ],
  "video": {
    "title": "☆☆Understanding Motor Controls: Electrical Schematics, Wiring & Troubleshooting Contactors☆☆",
    "embedUrl": "https://www.youtube.com/embed/DMqGVe5T2_8",
    "note": "A full walkthrough of motor-control schematics, wiring, and contactor troubleshooting — follow the ladder diagram as the video traces a fault from the symptom to the failed component.",
    "more": [
      { "title": "How to Troubleshoot Motor Control Issues Like a Pro!", "url": "https://www.youtube.com/watch?v=dnELMxjoGFM" },
      { "title": "Motor Controls - Contactor and Power Circuit", "url": "https://www.youtube.com/watch?v=wS2OnjxRSyU" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A motor will not start. You measure 0 V across the contactor coil. Where is the fault, and what do you check first?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The fault is upstream — the coil has no power. Step 2: Check the control fuse first, then the overload contact (it may have tripped), then the stop button circuit. Step 3: Use the half-split method on the series chain to find the open quickly.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A motor will not start. You measure 120 V across the contactor coil, but the contactor does not pull in. Where is the fault?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The control circuit is fine — the coil has voltage. Step 2: The fault is the coil itself (open coil) or a mechanically jammed contactor. Step 3: De-energize, lock out, and check the coil's resistance; if it reads open, replace the coil or the contactor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A control circuit has 16 devices in a series chain and the coil has no voltage. How many measurements does the half-split method need, at most, to find the open?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Each measurement cuts the search in half: 16 → 8 → 4 → 2 → 1. Step 2: Four measurements at most. Step 3: Checking each device in order could take up to 16 measurements — the half-split is far faster.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A contactor chatters when energized. The control voltage measures 95 V instead of 120 V. What is the most likely cause?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Low control voltage — the coil cannot pull the armature in firmly. Step 2: Check the control transformer sizing (it may be undersized for the inrush) and the connections (a loose connection drops voltage under load). Step 3: Fix the voltage before condemning the contactor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A control fuse blows the moment power is applied, and it blows again with a new fuse. What should you do, and what should you NOT do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: There is a short in the control wiring or a failed coil. Step 2: Find it with the half-split method, de-energized, by disconnecting half the circuit and testing. Step 3: Do NOT fit a bigger fuse — it will let the fault burn the wiring instead of blowing the fuse.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> An overload trips, and the operator resets it immediately and restarts the motor. It trips again within a minute. What is happening, and what is the right response?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The overload is reporting a real problem — the motor is overloaded, jammed, or running on low voltage. Step 2: A thermal overload also needs time to cool before it can reset properly. Step 3: Find and fix the cause (check the running current against the FLA) before restarting; never turn the overload setting up to stop the tripping.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A motor will not start and there is 0 V across the contactor coil. The fault is:",
      "choices": ["In the coil itself", "Upstream, in the control circuit feeding the coil", "In the motor windings", "In the main breaker only"],
      "answer": 1,
      "explanation": "Correct: (b). No voltage at the coil means the fault is upstream. (a) A failed coil would still have voltage across it. (c) Motor windings do not affect coil voltage. (d) The main breaker feeds the power circuit, not the control circuit."
    },
    {
      "q": "A motor will not start but there is 120 V across the contactor coil. The fault is most likely:",
      "choices": ["A tripped overload", "A failed coil or a jammed contactor", "A blown control fuse", "An open stop button"],
      "answer": 1,
      "explanation": "Correct: (b). Voltage at the coil proves the control circuit is fine. (a) A tripped overload would cut voltage to the coil. (c) A blown fuse would cut voltage to the coil. (d) An open stop button would cut voltage to the coil."
    },
    {
      "q": "The half-split method finds an open in a series chain by:",
      "choices": ["Checking each device in order from the start", "Measuring at the middle and repeatedly splitting the faulty half", "Replacing all the devices at once", "Measuring the motor current"],
      "answer": 1,
      "explanation": "Correct: (b). Each measurement cuts the search in half. (a) Checking in order is slow. (c) Replacing everything is wasteful. (d) Motor current does not locate a control-circuit open."
    },
    {
      "q": "Continuity measurements must be made:",
      "choices": ["On a live circuit", "De-energized, with the circuit locked out and verified dead", "With the motor running", "With a clamp meter only"],
      "answer": 1,
      "explanation": "Correct: (b). Continuity is a de-energized test. (a) On a live circuit the reading is meaningless and the meter can be damaged. (c) A running motor is energized. (d) A clamp meter measures current, not continuity."
    },
    {
      "q": "A contactor chatters when energized. The most likely cause is:",
      "choices": ["Low control voltage", "A blown main fuse", "A reversed motor", "Too much grease"],
      "answer": 0,
      "explanation": "Correct: (a). Low voltage cannot hold the armature in firmly. (b) A blown main fuse would stop the motor, not chatter the contactor. (c) Reversal does not cause chatter. (d) Grease does not affect the contactor coil."
    },
    {
      "q": "A control fuse that blows repeatedly means:",
      "choices": ["The fuse is too big", "There is a short in the control wiring or a failed coil — find it, do not fit a bigger fuse", "The motor is too small", "The panel is too cold"],
      "answer": 1,
      "explanation": "Correct: (b). A repeated blow reports a fault. (a) The fuse is not too big — it is doing its job. (c) Motor size does not blow a control fuse. (d) Temperature does not blow a control fuse."
    },
    {
      "q": "A thermal overload that trips again immediately after being reset is:",
      "choices": ["Faulty and should be bypassed", "Reporting a real problem — find the cause before restarting", "Normal behavior", "A sign the motor needs a bigger frame"],
      "answer": 1,
      "explanation": "Correct: (b). Repeated tripping means overload, jam, or low voltage. (a) Bypassing an overload removes the motor's protection. (c) Repeated tripping is not normal. (d) Frame size does not cause tripping."
    },
    {
      "q": "After a control-circuit repair, the last step is to:",
      "choices": ["Leave the panel open for the next person", "Document the repair and verify it under load through the full cycle", "Turn the overload setting up", "Throw away the ladder diagram"],
      "answer": 1,
      "explanation": "Correct: (b). Document and verify — a repair that is not verified is a guess. (a) The panel must be closed and secured. (c) Turning the setting up removes protection. (d) The ladder diagram is the record of the circuit."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Troubleshooting Control Circuits: Quick Reference</h3>\n<p><strong>Core idea:</strong> Read the ladder diagram, state what should be true, then measure. The gap between the diagram and the meter is the fault.</p>\n<p><strong>Voltage at the coil:</strong> Present but no pull-in = failed coil or jammed contactor · Absent = fault upstream in the control chain.</p>\n<p><strong>Half-split:</strong> Measure at the middle of a series chain and keep splitting the faulty half — 16 devices take at most 4 measurements.</p>\n<p><strong>Fault map:</strong> No start/no voltage = open control circuit · No start/with voltage = failed coil · Won't latch = sealing contact · Won't stop = welded contact · Chatter = low control voltage · Repeated fuse = short.</p>\n<p><strong>Safety:</strong> Voltage measurements are live work (NFPA 70E, rated meter, PPE). Continuity is de-energized only. Never fit a bigger fuse; never turn the overload up.</p>\n<p><strong>Self-check:</strong> Explain the half-split method and map five symptoms to causes. If you can, you have this module.</p>\n"
};
