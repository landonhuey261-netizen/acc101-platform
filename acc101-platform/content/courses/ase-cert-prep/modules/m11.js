module.exports = {
  "number": 11,
  "slug": "l1-l3-advanced-review",
  "title": "L1 + L3 Review — Advanced Diagnostics & Hybrid/EV",
  "estTime": "3–4 hours",
  "objectives": [
    "Use the Composite Vehicle Type 4 data in the question stems to answer L1 questions.",
    "Explain how L1 builds on A6 and A8 — networks, waveforms, and intermittent faults.",
    "State the high-voltage safety sequence: de-power, verify, lock out, then touch.",
    "Explain hybrid/EV power electronics — inverter, DC-DC converter, and regenerative braking.",
    "Score the L1 practice exam (50 questions, 150 minutes) and the L3 practice exam (45 questions, 120 minutes) at the 70% benchmark."
  ],
  "sections": [
    {
      "heading": "L1 — What Makes It Advanced",
      "html": "<p>L1 is not a new subject; it is A6 and A8 done harder. The questions are longer, the faults are intermittent, and the diagnosis runs through waveforms and networks instead of single readings. A misfire that only happens hot, a network fault that only happens on a left turn, a fuel-trim fault that only appears at cruise — L1's faults hide, and the test rewards the technician who can prove a fault with a waveform or a data capture instead of guessing a part.</p><p>About half the real L1 test is about one vehicle: the <strong>Composite Vehicle Type 4 (CV4)</strong>, a reference vehicle described in a booklet given on screen at the test center. The app cannot reproduce ASE's booklet, so the L1 practice exam puts the CV4 data in the question stems — read the stem, because the data you need is in it. The CV4 in this course is a 2019 sedan with a 2.4L 4-cylinder engine, port and direct injection, a 6-speed automatic, and a CAN network with the powertrain, body, and chassis modules on one bus. When a question gives you CV4 data, use that data — not what you remember from another car.</p><p><div class=\"callout\"><strong>Key idea:</strong> L1 rewards proof, not parts. A waveform that shows the fault is an answer; a part swapped on a hunch is a guess. And on CV4 questions, the stem is the booklet — read it.</div></p>"
    },
    {
      "heading": "Waveforms, Networks, and Intermittent Faults",
      "html": "<p>A lab scope turns a signal into a picture, and L1 lives in those pictures. A crank-sensor waveform with a missing tooth is normal — that gap is the timing reference. A waveform with extra noise, a flattened peak, or a dropout that matches the misfire is the fault. An injector waveform shows the pull-in spike, the hold current, and the flyback spike when the driver turns off — a missing flyback spike means the driver or the injector's winding is open.</p><p>Intermittent faults are diagnosed by capture, not by luck. Set the scope or scan tool to record, drive the car until the fault happens, and then read the capture — the glitch is in the recording even if it never happens in the bay. A network fault that appears when the car turns left is usually a wire flexing in a door jamb or a connector moving with the body; a fault that appears only when hot is usually a component that fails at temperature. The exam's intermittent questions always give you the conditions — use them.</p><p><div class=\"callout\"><strong>Key idea:</strong> If a fault only happens hot, test it hot. If it only happens on a turn, look where wires flex. The conditions are the diagnosis.</div></p>"
    },
    {
      "heading": "High-Voltage Safety — the Sequence Before the Work",
      "html": "<p>Hybrid and EV battery packs run at roughly 200–450 V DC — enough to kill. The safety sequence is the same on every vehicle, and L3 tests the sequence, not just the result: <strong>1.</strong> follow the manufacturer's de-power procedure (service disconnect or scan-tool de-energize). <strong>2.</strong> Wait for the capacitors to discharge. <strong>3.</strong> Verify zero voltage with a meter rated for the voltage — a CAT III or CAT IV meter, tested on a known source before and after. <strong>4.</strong> Lock out and tag out so nobody re-energizes the system while you work. Only then do you touch the orange cables.</p><p>The personal protective equipment is part of the sequence: insulated gloves rated for the voltage, inspected before use and tested for air leaks, safety glasses, and insulated tools. Orange means high voltage — orange cables, orange connectors, orange warning labels. Never cut an orange cable, never assume a system is dead because the car is off, and never work alone on a high-voltage system. A hybrid that is 'off' still has a live battery pack until it is de-powered and verified.</p><p><div class=\"callout\"><strong>Key idea:</strong> De-power, wait, verify zero with a rated meter, lock out — then touch. A car that is off is not a car that is safe until the meter says zero.</div></p>"
    },
    {
      "heading": "Hybrid and EV Power Electronics",
      "html": "<p>A hybrid or EV moves power between three forms. The battery stores DC; the motor runs on AC; the <strong>inverter</strong> converts DC to AC to drive the motor and AC back to DC during regenerative braking. The <strong>DC-DC converter</strong> replaces the alternator — it steps the high-voltage DC down to 12 V to run the lights, the modules, and to charge the 12-volt battery. The <strong>onboard charger</strong> converts AC from the wall into DC for the battery.</p><p>Regenerative braking is the motor run backwards: when the driver lifts off or brakes, the motor becomes a generator, turning the car's motion back into electricity for the battery. That is why hybrid brake pads last so long — the motor does much of the braking. A hybrid that has lost regenerative braking and wears its pads fast has an inverter, motor, or battery fault, not a brake fault. And the 12-volt battery still matters: it wakes the computers that close the high-voltage contactors, so a dead 12-volt battery can leave a hybrid with a full high-voltage pack that will not start.</p><p><div class=\"callout\"><strong>Key idea:</strong> Battery DC, motor AC, inverter in between. The DC-DC converter is the alternator. The 12-volt battery wakes the system — dead 12-volt, no READY, no matter how full the high-voltage pack is.</div></p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> L1 is A6 and A8 done harder, with waveforms and captures; CV4 data lives in the question stems; high-voltage work starts with de-power, verify zero, lock out; the inverter, the DC-DC converter, and regenerative braking are the three power-electronics ideas L3 keeps testing.</p><p>The L1 exam is 50 questions in 150 minutes — 180 seconds a question, the most generous time in the capstone, because the CV4 booklet slows everyone down. The L3 exam is 45 questions in 120 minutes — 160 seconds a question, because the Certification Test Reference slows everyone down. Use the time: read the reference data in the stem before you read the choices.</p><p><div class=\"callout\"><strong>Key idea:</strong> Common mistake: skipping the verify-zero step. A de-power procedure followed by no verification is a guess, and on a 200–450 V system a guess can kill. The meter reading is the safety, not the procedure.</div></p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Composite Vehicle Type 4 (CV4)",
      "def": "The reference vehicle in the real L1 test; about half the questions are about it. The practice exam puts its data in the question stems."
    },
    {
      "term": "Certification Test Reference",
      "def": "The reference document given on screen in the real L3 test; the practice exam puts its data in the question stems."
    },
    {
      "term": "Waveform",
      "def": "A scope picture of a signal over time; L1 diagnosis runs on waveforms."
    },
    {
      "term": "Flyback spike",
      "def": "The voltage spike when an injector driver turns off; a missing spike means an open winding or driver."
    },
    {
      "term": "Intermittent fault",
      "def": "A fault that appears only under certain conditions — hot, cold, turning, or under load."
    },
    {
      "term": "CAN bus",
      "def": "The network modules share; a fault on it sets U-codes in several modules."
    },
    {
      "term": "High-voltage pack",
      "def": "The hybrid/EV battery, roughly 200–450 V DC — enough to kill."
    },
    {
      "term": "Service disconnect",
      "def": "The plug or switch that isolates the high-voltage battery for service."
    },
    {
      "term": "Verify zero",
      "def": "Proving with a rated meter that high voltage is actually gone before touching the system."
    },
    {
      "term": "Lockout-tagout",
      "def": "Locking and tagging the de-powered system so nobody re-energizes it while you work."
    },
    {
      "term": "Inverter",
      "def": "Converts DC from the battery to AC for the motor, and AC back to DC during regenerative braking."
    },
    {
      "term": "DC-DC converter",
      "def": "Steps high-voltage DC down to 12 V — the hybrid's alternator."
    },
    {
      "term": "Regenerative braking",
      "def": "Using the motor as a generator to turn the car's motion back into electricity for the battery."
    },
    {
      "term": "Onboard charger",
      "def": "Converts AC from the wall into DC to charge the battery."
    }
  ],
  "video": {
    "title": "How to De-Energize the High Voltage System of a Ford Mustang Mach-E",
    "embedUrl": "https://www.youtube.com/embed/NYL9DJvy9vE",
    "note": "The low-voltage service disconnect method on a 2021 Mustang Mach-E GT: scan-tool de-energizing, live isolation-resistance and high-voltage readings, and the lockout-tagout step. Watch the safety sequence, not just the result — L3 tests the sequence.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1 — CV4 data.</strong> The CV4 is a 2019 sedan, 2.4L 4-cylinder, port and direct injection, 6-speed automatic. A question stem says the CV4's fuel pressure at idle is 55 psi on the low-pressure side. A technician answers using the pressure from a different car they remember. What is the error?</p>",
      "solution": "<p><strong>Answer:</strong> They ignored the reference data in the stem. Step 1: on L1, the CV4 booklet — here, the stem — is the specification. Step 2: the correct pressure is the one the stem gives (55 psi), not a remembered number from another vehicle. Step 3: on the real test, the booklet is the authority; in the practice exam, the stem is.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2 — Waveform.</strong> A scope capture of a crank sensor shows a regular pattern with one missing tooth per revolution, and the misfire counter climbs exactly when a dropout appears in the waveform. What does the missing tooth mean, and what does the dropout mean?</p>",
      "solution": "<p><strong>Answer:</strong> The missing tooth is normal — it is the timing reference the computer uses to know where the crankshaft is. Step 1: a regular missing tooth is designed in. Step 2: the dropout that matches the misfire is the fault — the sensor's signal is disappearing, so the computer loses its timing reference and the cylinder misfires. Step 3: check the sensor, its air gap, and its wiring — the waveform is the proof.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3 — Safety sequence.</strong> List the high-voltage safety sequence in order, and state what meter rating is required to verify zero voltage.</p>",
      "solution": "<p><strong>Answer:</strong> 1. Follow the manufacturer's de-power procedure (service disconnect or scan-tool de-energize). 2. Wait for the capacitors to discharge. 3. Verify zero voltage with a meter rated for the voltage — CAT III or CAT IV — tested on a known source before and after. 4. Lock out and tag out. Only then touch the orange cables. The meter must be rated for the pack voltage (roughly 200–450 V DC); an unrated meter is not a verification.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4 — No READY.</strong> A 2020 Toyota Prius will not enter READY mode. The high-voltage pack is fully charged, but the 12-volt battery reads 9.8 V. What is the most likely fault?</p>",
      "solution": "<p><strong>Answer:</strong> The dead 12-volt battery. Step 1: the 12-volt battery wakes the computers that close the high-voltage contactors. Step 2: at 9.8 V it cannot power the modules, so the contactors never close and the car never enters READY. Step 3: charge or replace the 12-volt battery — the high-voltage pack is fine and is not the fault.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5 — Lost regen.</strong> A 2019 Honda Insight's brake pads are wearing fast and the driver notices the car no longer slows when lifting off the accelerator. What system has failed?</p>",
      "solution": "<p><strong>Answer:</strong> Regenerative braking — the inverter, motor, or battery side. Step 1: lifting off should turn the motor into a generator and slow the car. Step 2: fast pad wear means the friction brakes are doing work the motor used to do. Step 3: diagnose the inverter and motor control, not the brake hydraulics — the brakes are the symptom, not the cause.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6 — Intermittent network fault.</strong> A 2018 Ford Fusion Hybrid sets U-codes in several modules, but only when turning left. The codes never appear in the bay. How should the fault be found?</p>",
      "solution": "<p><strong>Answer:</strong> Capture it while driving. Step 1: set the scan tool to record and drive until the fault happens — the fault only appears on a left turn, so it will not happen in the bay. Step 2: a left-turn-only network fault usually means a wire flexing or a connector moving with the body. Step 3: inspect the wiring where it flexes — door jambs, body-to-frame passages — and read the capture to find which module dropped off the bus first.</p>"
    }
  ],
  "quiz": [
    {
      "q": "On the real L1 test, about half the questions are about:",
      "choices": [
        "The technician's own car",
        "The Composite Vehicle Type 4, described in a reference booklet given on screen",
        "Any car the test center has",
        "The newest model year only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The CV4 booklet is given on screen in the real L1 test, and about half its questions are about that vehicle. (a) is wrong: the test is about the reference vehicle, not the technician's car. (c) is wrong: the test center's cars are irrelevant. (d) is wrong: the CV4 is a specific reference vehicle, not the newest model."
    },
    {
      "q": "A crank-sensor waveform shows one missing tooth per revolution. What does that mean?",
      "choices": [
        "The sensor is failing",
        "It is normal — the missing tooth is the timing reference",
        "The flywheel is damaged",
        "The engine is misfiring"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The missing tooth is designed in so the computer knows crankshaft position. (a) is wrong: a regular missing tooth is not a failure. (c) is wrong: the flywheel is built with the gap. (d) is wrong: a misfire shows as a dropout that matches the misfire counter, not as the regular gap."
    },
    {
      "q": "What is the correct high-voltage safety sequence?",
      "choices": [
        "Touch the cables, then check the voltage",
        "De-power, wait, verify zero with a rated meter, lock out — then touch",
        "Disconnect the 12-volt battery only",
        "Wear gloves and start work"
      ],
      "answer": 1,
      "explanation": "Correct: (b). De-power, wait for capacitor discharge, verify zero with a CAT III/IV meter, lock out and tag out — then touch. (a) is wrong: touching before verifying is how people die. (c) is wrong: the 12-volt battery does not de-power the high-voltage pack. (d) is wrong: gloves are part of the sequence, not a substitute for de-powering and verifying."
    },
    {
      "q": "Hybrid and EV battery packs run at roughly:",
      "choices": [
        "12 V DC",
        "48 V DC",
        "200–450 V DC",
        "1,000 V DC"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Hybrid and EV packs run at roughly 200–450 V DC — enough to kill. (a) is wrong: 12 V is the low-voltage system. (b) is wrong: 48 V is a mild-hybrid voltage, not the traction pack. (d) is wrong: 1,000 V is above the pack range in this program."
    },
    {
      "q": "What does the inverter do in a hybrid or EV?",
      "choices": [
        "It charges the 12-volt battery",
        "It converts DC from the battery to AC for the motor, and AC back to DC during regenerative braking",
        "It cools the battery",
        "It starts the engine"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The inverter is the DC-to-AC and AC-to-DC bridge between the battery and the motor. (a) is wrong: the DC-DC converter charges the 12-volt battery. (c) is wrong: cooling is the thermal system's job. (d) is wrong: starting is the motor's job, through the inverter — but the inverter's function is conversion."
    },
    {
      "q": "A hybrid will not enter READY mode and the 12-volt battery reads 9.8 V. The high-voltage pack is full. What is most likely?",
      "choices": [
        "The high-voltage pack has failed",
        "The dead 12-volt battery cannot wake the computers that close the high-voltage contactors",
        "The inverter has failed",
        "The traction motor has failed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The 12-volt battery powers the modules that close the contactors; at 9.8 V they never wake. (a) is wrong: the pack is full. (c) is wrong: the inverter cannot run before the contactors close. (d) is wrong: the motor cannot run before the contactors close either."
    },
    {
      "q": "A hybrid's brake pads are wearing fast and the car no longer slows when lifting off. What has failed?",
      "choices": [
        "The brake hydraulics",
        "Regenerative braking — the inverter, motor, or battery side",
        "The 12-volt battery",
        "The parking brake"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Lost regeneration means the friction brakes do the work the motor used to do, so the pads wear fast. (a) is wrong: the hydraulics are doing extra work, not failing. (c) is wrong: a dead 12-volt battery prevents READY, it does not stop regeneration. (d) is wrong: the parking brake is not involved in normal slowing."
    },
    {
      "q": "An intermittent fault that only appears on left turns is best found by:",
      "choices": [
        "Replacing parts until it stops",
        "Capturing data while driving until the fault happens, then reading the capture",
        "Testing in the bay at idle",
        "Clearing the codes and waiting"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An intermittent fault must be captured under the conditions that cause it — in this case, a left turn. (a) is wrong: replacing parts on a hunch is guessing. (c) is wrong: the fault never happens at idle in the bay. (d) is wrong: clearing codes destroys the evidence."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — L1 + L3 Review: Quick Reference</h3>\n<p><strong>Core idea:</strong> L1 is A6 and A8 done harder, with waveforms and captures. L3 is the high-voltage sequence plus power electronics.</p>\n<p><strong>CV4:</strong> 2019 sedan, 2.4L 4-cylinder, port + direct injection, 6-speed automatic — the stem is the booklet in the practice exam. <strong>L3 reference:</strong> the Certification Test Reference data is in the stems.</p>\n<div class=\"formula\">De-power → wait → verify zero (CAT III/IV) → lock out → touch &nbsp;|&nbsp; HV pack ~200–450 V DC &nbsp;|&nbsp; Inverter: DC ↔ AC &nbsp;|&nbsp; DC-DC converter = the alternator</div>\n<p><strong>Exams:</strong> L1 50 questions, 150 minutes (180 s/Q) · L3 45 questions, 120 minutes (160 s/Q). 70% practice benchmark. Read the reference data in the stem first.</p>\n<p><strong>Self-check:</strong> Say the high-voltage sequence in order, then explain why a dead 12-volt battery can stop a hybrid with a full high-voltage pack.</p>\n"
};
