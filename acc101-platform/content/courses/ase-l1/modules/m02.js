// ase-l1 - Module 2: Computerized Powertrain Controls & OBD II
module.exports = {
  "number": 2,
  "slug": "computerized-powertrain-controls-obd-ii",
  "title": "Computerized Powertrain Controls & OBD II",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how the powertrain control module (PCM) uses sensors and actuators to run the engine.",
    "Describe OBD II: what it monitors, how it sets codes, and what the code letters mean.",
    "Read codes, pending codes, freeze-frame data, and readiness monitors — and know what each one is for.",
    "Use Mode $06 data to find a failing component before it sets a code.",
    "Explain the difference between a code, a symptom, and a fault."
  ],
  "sections": [
    {
      "heading": "The PCM: Inputs In, Decisions Out",
      "html": "<p>The <strong>powertrain control module (PCM)</strong> is the computer that runs the engine and, on most vehicles, the transmission too. It reads sensors — air flow, throttle position, engine speed and position, coolant and air temperature, oxygen, knock, manifold pressure — and it drives actuators — injectors, ignition coils, idle controls, solenoids, and valves. Between the two sits its calibration: the programmed maps that say how much fuel, how much spark advance, and which actuator position for each combination of speed, load, and temperature.</p>\n<p>The PCM is also constantly correcting. It watches the oxygen sensors and trims the fuel to hold the mixture where it wants it. It watches knock and retards the spark when it hears it. It watches temperature and changes idle, fueling, and fan strategy. A gasoline engine at L1 level is not a mechanical device with a computer attached — it is a computer-managed system, and diagnosis means reading the computer's mind through its data.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The PCM turns sensor inputs into actuator outputs through its calibration — and it corrects itself constantly. Live data shows both the inputs and the corrections at the same time, and the mismatch between them is the diagnosis.</div>"
    },
    {
      "heading": "OBD II: The Watchdog",
      "html": "<p><strong>OBD II</strong> (On-Board Diagnostics, second generation) is the self-diagnosis system built into every gasoline vehicle sold in the United States since 1996. It watches the engine, the emissions systems, and the powertrain computer itself, and it turns on the check-engine light (the malfunction indicator lamp, or MIL) when it finds a fault that affects emissions. It stores a diagnostic trouble code (DTC) and a freeze-frame snapshot of the conditions when the fault occurred.</p>\n<p>The code's first letter names the system: <strong>P</strong> for powertrain, <strong>B</strong> for body, <strong>C</strong> for chassis, <strong>U</strong> for network communication. Powertrain codes — the ones this course cares about — start with P0 for generic codes (the same on every vehicle) or P1 for manufacturer-specific codes. The numbers after that narrow the area: P0300 is a random misfire, P0171 is a lean mixture on bank 1, P0420 is catalyst efficiency below threshold.</p>\n<p>Codes come in three states. A <strong>stored code</strong> has been confirmed and lights the MIL. A <strong>pending code</strong> has been seen once but not confirmed — an early warning, and often the first sign of an intermittent fault. And a code can be <strong>history</strong>: seen before, not present now. Pending codes are gold in L1 diagnosis — they are the fault caught in the act, before it is bad enough to confirm.</p>"
    },
    {
      "heading": "Readiness Monitors and Mode $06: What the Computer Has Checked",
      "html": "<p>OBD II runs a set of self-tests called <strong>monitors</strong>: the catalyst monitor, the oxygen sensor monitor, the evaporative emissions (EVAP) monitor, the misfire monitor, the fuel system monitor, and others. Each monitor runs when its conditions are met — a cold start, a highway cruise, a certain fuel level — and when it completes, it reports ready or not ready. A monitor that has not run yet, because the battery was disconnected or the codes were just cleared, reports not ready.</p>\n<p>Readiness matters for two reasons. First, an emissions inspection checks it: too many monitors not ready means the vehicle cannot be tested, because the computer has not finished checking itself. Second, it is a diagnostic clue: if the catalyst monitor will not complete, something is preventing its conditions — a sensor fault, a temperature problem, or a code that keeps the monitor from running. A monitor that never completes is a symptom, not a pass.</p>\n<p>The practical rule: never clear codes just before an emissions test. Clearing resets every monitor to not ready, and the vehicle must be driven through the conditions each monitor needs before it can be tested. That drive cycle takes time and specific conditions — and the customer who was told to 'just clear it and go' will be turned away at the inspection lane.</p>\n<p><strong>Mode $06</strong> is the scan tool's window into the OBD II test results — the numbers behind the monitors. Where a monitor says pass or fail, Mode $06 shows the measured value and the limit it is judged against: how much the catalyst's efficiency has slipped, how slow an oxygen sensor has become, how many misfires a cylinder has had. A component can be failing for weeks — getting worse, but still inside its limit — and Mode $06 shows the trend before the code ever sets.</p>\n<p>That makes Mode $06 the L1 technician's early-warning system. A catalyst whose efficiency reading is creeping toward its limit is a catalyst that will fail the next emissions test. An oxygen sensor whose response time is drifting is a sensor that will set a code soon. A cylinder with a misfire count climbing while the others sit at zero is a cylinder with a problem the misfire monitor has not confirmed yet.</p>\n<p>Mode $06 data is vehicle-specific — the test names and units vary by manufacturer — so it takes practice and the service information to read well. But the habit is universal: when a monitor is not ready, or a code is pending, or a symptom has no code at all, look at Mode $06 before replacing anything.</p>"
    },
    {
      "heading": "Code, Symptom, Fault: Three Different Things",
      "html": "<p>A <strong>code</strong> is the computer's report that a test failed. A <strong>symptom</strong> is what the driver experiences. A <strong>fault</strong> is what is actually wrong. The three are related, but they are not the same — and confusing them is the most common diagnostic error at every level.</p>\n<p>A P0171 lean code is not a fault; it is a report that the computer had to add too much fuel. The fault behind it could be a vacuum leak, a weak fuel pump, a dirty air flow sensor, or an exhaust leak fooling the oxygen sensor. A P0300 misfire code is not a fault; it is a report that the crankshaft slowed unevenly. The fault could be ignition, fuel, or mechanical — three buckets, one code.</p>\n<p>The L1 habit is to read the code as a question, not an answer: 'What made the computer fail this test?' Then gather the data — trims, freeze-frame, Mode $06, live readings — form a theory that explains all of it, test it, and only then name the fault. The code is where diagnosis starts. It is never where it ends.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>PCM: sensor inputs in, actuator outputs out, calibration in the middle, constant self-correction through feedback.</li>\n<li>OBD II: self-diagnosis since 1996; P = powertrain, B = body, C = chassis, U = network; P0 generic, P1 manufacturer-specific.</li>\n<li>Codes: stored (confirmed, MIL on), pending (seen once, early warning), history (seen before, not present now).</li>\n<li>Readiness monitors: self-tests that must complete before an emissions test; clearing codes resets them all to not ready.</li>\n<li>Mode $06: the numbers behind the monitors — find a failing part before it sets a code.</li>\n<li>Code ≠ symptom ≠ fault. The code is the question; the fault is the answer, found by testing.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Replacing the part the code names. A P0171 is a lean report, not a part — the fault could be a leak, a pump, a sensor, or an exhaust leak fooling the oxygen sensor.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Clearing codes before an emissions test. Clearing resets every monitor to not ready, and the vehicle cannot be tested until they all run again.</div>\n<p><strong>Ready-to-work link:</strong> If you can explain stored vs pending codes, readiness monitors, and Mode $06 to a classmate, you have this module. Module 3 introduces the vehicle the L1 test is built around: the Composite Vehicle Type 4.</p>"
    }
  ],
  "keyTerms": [
    { "term": "PCM", "def": "Powertrain control module — the computer that runs the engine (and usually the transmission) from sensor inputs." },
    { "term": "OBD II", "def": "On-Board Diagnostics, second generation — the self-diagnosis system in every gasoline vehicle since 1996." },
    { "term": "DTC", "def": "Diagnostic trouble code — the computer's report that a test failed, with a letter naming the system." },
    { "term": "MIL", "def": "Malfunction indicator lamp — the check-engine light, turned on when OBD II finds an emissions-affecting fault." },
    { "term": "Stored code", "def": "A code that has been confirmed and lights the MIL." },
    { "term": "Pending code", "def": "A code seen once but not yet confirmed — an early warning, often the first sign of an intermittent fault." },
    { "term": "Freeze-frame data", "def": "The snapshot of sensor readings stored when a code sets." },
    { "term": "Readiness monitor", "def": "An OBD II self-test (catalyst, oxygen sensor, EVAP, misfire, fuel system) that reports ready when it has completed." },
    { "term": "Mode $06", "def": "The scan-tool view of OBD II test results — measured values against their limits, showing a part failing before it sets a code." },
    { "term": "Calibration", "def": "The PCM's programmed maps: fuel, spark, and actuator commands for each combination of speed, load, and temperature." },
    { "term": "Bank 1 / Bank 2", "def": "The two sides of a V-engine's exhaust; bank 1 holds cylinder 1." },
    { "term": "Drive cycle", "def": "The specific driving conditions each readiness monitor needs in order to run and complete." }
  ],
  "video": {
    "title": "How to Use an OBD2 Scanner Like a Pro? (Easy 5 Steps)",
    "embedUrl": "https://www.youtube.com/embed/sl3Clzi7TPY",
    "note": "A clear beginner-to-pro walkthrough of the OBD2 scanner: finding the port, connecting, reading codes, and interpreting them. Use it to lock in the basics of this module — then go further with the scan tool's live data, freeze-frame, and Mode $06, which is where L1 diagnosis lives.",
    "more": [
      { "title": "How to Use an OBD2 Scanner — Full Tutorial", "url": "https://www.youtube.com/watch?v=102AaRkihkE" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A scan tool shows a P0171 code. Explain in two sentences why that code is a question, not an answer.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: P0171 reports that the computer had to add too much fuel on bank 1 — the mixture looks lean. Step 2: It does not say why — the fault could be a vacuum leak, a weak fuel pump, a dirty air flow sensor, or an exhaust leak fooling the oxygen sensor — so the code asks what made the mixture lean, and testing answers it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> What is the difference between a stored code and a pending code, and why is a pending code valuable?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A stored code has been confirmed and lights the MIL; a pending code has been seen once but not confirmed. Step 2: A pending code is valuable because it is the fault caught early — often the first sign of an intermittent fault, before it is bad enough to confirm and light the lamp.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A customer had their codes cleared yesterday and now cannot pass an emissions test. Explain why.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Clearing codes resets every readiness monitor to not ready. Step 2: The vehicle cannot be tested until the monitors run again, which needs a drive cycle with the specific conditions each monitor requires — so clearing the codes before a test guarantees a rejection.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Mode $06 shows a catalyst efficiency reading creeping toward its limit, but no code has set. What should the technician do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Treat it as an early warning — the catalyst is failing but still inside its limit. Step 2: Check for the cause (an engine fault making excess pollutants, or a sensor problem) and warn the customer the catalyst will fail the next emissions test, rather than waiting for the code.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A misfire monitor reports ready, but the misfire count in Mode $06 shows one cylinder climbing while the others sit at zero. What does that tell you?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: One cylinder has a developing problem the monitor has not confirmed yet. Step 2: Investigate that cylinder now — ignition, fuel, compression — instead of waiting for a P0300-series code to set.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> The first letter of a code is U. Which system does it belong to, and why does it matter for an engine performance complaint?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: U codes belong to the network — communication between modules. Step 2: It matters because the PCM depends on other modules and the network to run the engine; a network fault can make the engine run badly even though no engine part has failed.</p>"
    }
  ],
  "quiz": [
    {
      "q": "OBD II is:",
      "choices": ["A type of scan tool", "The self-diagnosis system built into every gasoline vehicle since 1996", "A fuel injection system", "A transmission control"],
      "answer": 1,
      "explanation": "Correct: (b). OBD II watches the engine and emissions systems and stores codes when tests fail. (a) A scan tool reads OBD II; it is not OBD II. (c) Fuel injection is a system OBD II watches. (d) Transmission control is one of the PCM's jobs, not OBD II itself."
    },
    {
      "q": "In a code, the letter P stands for:",
      "choices": ["Pending", "Powertrain", "Pressure", "Pump"],
      "answer": 1,
      "explanation": "Correct: (b). P = powertrain, B = body, C = chassis, U = network. (a) Pending is a code state, not a letter. (c) and (d) are not code letters."
    },
    {
      "q": "A pending code is:",
      "choices": ["A code that has been confirmed and lights the MIL", "A code seen once but not yet confirmed — an early warning", "A code from last year", "A code that can be ignored"],
      "answer": 1,
      "explanation": "Correct: (b). Pending means seen once, not confirmed — often the first sign of an intermittent fault. (a) That is a stored code. (c) Age does not define pending. (d) A pending code is a warning, not something to ignore."
    },
    {
      "q": "Clearing codes just before an emissions test is a bad idea because:",
      "choices": ["It damages the computer", "It resets every readiness monitor to not ready, and the vehicle cannot be tested until they run again", "It erases the vehicle's mileage", "It turns the MIL off permanently"],
      "answer": 1,
      "explanation": "Correct: (b). Monitors must complete before testing, and clearing restarts them all. (a) Clearing does not damage the computer. (c) Mileage is not stored in the codes. (d) The MIL will return if the fault is still present."
    },
    {
      "q": "Mode $06 is useful because it:",
      "choices": ["Clears codes faster", "Shows the measured values behind the monitors, so a part failing toward its limit can be found before it sets a code", "Tests the battery", "Programs new keys"],
      "answer": 1,
      "explanation": "Correct: (b). Mode $06 shows test results against their limits — an early-warning system. (a) Clearing is a separate command. (c) Battery testing is a separate function. (d) Key programming is unrelated."
    },
    {
      "q": "A P0171 code means:",
      "choices": ["The fuel pump has failed", "The computer had to add too much fuel on bank 1 — the mixture looks lean", "The oxygen sensor is definitely faulty", "The catalytic converter has failed"],
      "answer": 1,
      "explanation": "Correct: (b). P0171 is a lean report, not a part diagnosis. (a) A weak pump is one possible cause, not the proven one. (c) The sensor is one suspect among several. (d) The converter is not what this code reports."
    },
    {
      "q": "Readiness monitors report 'not ready' when:",
      "choices": ["The vehicle has failed an emissions test", "They have not run yet — for example, after the battery was disconnected or codes were cleared", "The check-engine light is on", "The fuel tank is empty"],
      "answer": 1,
      "explanation": "Correct: (b). Monitors must run under their conditions to complete; until then they are not ready. (a) A failed test is a different result. (c) The MIL can be on with monitors ready. (d) Fuel level affects some monitors' conditions but is not what 'not ready' means."
    },
    {
      "q": "The PCM's calibration is:",
      "choices": ["The sensor wiring harness", "The programmed maps that say how much fuel, spark, and actuator command for each speed, load, and temperature", "The diagnostic trouble codes", "The battery voltage"],
      "answer": 1,
      "explanation": "Correct: (b). Calibration is the PCM's decision tables. (a) The harness carries signals, not decisions. (c) Codes are reports, not maps. (d) Battery voltage is a power supply, not a calibration."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Computerized Powertrain Controls & OBD II: Quick Reference</h3>\n<p><strong>PCM:</strong> Sensor inputs in → calibration decides → actuator outputs out → constant self-correction through feedback.</p>\n<p><strong>OBD II:</strong> Self-diagnosis since 1996. Code letters: P powertrain · B body · C chassis · U network. P0 generic, P1 manufacturer-specific.</p>\n<p><strong>Codes:</strong> Stored = confirmed, MIL on · Pending = seen once, early warning · History = seen before, not present now.</p>\n<p><strong>Monitors:</strong> Self-tests (catalyst, O2, EVAP, misfire, fuel) that must complete before an emissions test. Clearing codes resets them all to not ready.</p>\n<p><strong>Mode $06:</strong> Measured values vs limits — find a failing part before it sets a code.</p>\n<p><strong>Rule:</strong> Code ≠ symptom ≠ fault. The code is the question; testing finds the fault.</p>\n<p><strong>Watch out:</strong> Never clear codes before an emissions test. Never clear a code without saving the freeze-frame first.</p>\n<p><strong>Self-check:</strong> Explain stored vs pending, readiness, and Mode $06 to a classmate.</p>\n"
};
