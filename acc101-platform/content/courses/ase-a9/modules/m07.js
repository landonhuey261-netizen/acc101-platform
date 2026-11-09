// ase-a9 - Module 7: Diesel Electronic Controls
module.exports = {
  "number": 7,
  "slug": "diesel-electronic-controls",
  "title": "Diesel Electronic Controls",
  "estTime": "3–4 hours",
  "objectives": [
    "Name the sensors the diesel computer depends on and what each one reports.",
    "Explain how the computer uses sensor inputs to decide injection timing and quantity.",
    "Describe the actuators the computer drives: injectors, rail pressure control, turbo vanes, and EGR.",
    "Use live data and codes together to separate a sensor fault from a real mechanical fault.",
    "Explain why a sensor can lie, and how to catch it before replacing parts."
  ],
  "sections": [
    {
      "heading": "The Computer's Senses: What It Measures",
      "html": "<p>The engine control module (ECM) runs the diesel, and it can only act on what its sensors tell it. The <strong>crankshaft and camshaft position sensors</strong> tell it where the engine is in its rotation and how fast it is turning — without them, it cannot time an injection at all. The <strong>mass air flow or manifold pressure sensor</strong> tells it how much air is entering, so it knows how much fuel the air can burn.</p>\n<p>The <strong>coolant temperature sensor</strong> tells it whether the engine is cold or warm, which changes glow timing, idle speed, and injection strategy. The <strong>rail pressure sensor</strong> (common rail) or the <strong>injection control pressure sensor</strong> (HEUI) tells it whether injection pressure is where it should be. The <strong>exhaust sensors</strong> — temperatures and NOx — report on the aftertreatment. And the <strong>throttle position sensor</strong> (or accelerator pedal sensor) tells it what the driver is asking for.</p>\n<p>Every one of these sensors can fail, drift, or lie — and a lying sensor is more dangerous than a dead one, because a dead sensor sets a code and a default value, while a drifting sensor quietly feeds the computer wrong information that looks plausible.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The computer only knows what its sensors report. A sensor that lies makes the computer do the wrong thing confidently — so sensor data must be checked against reality, not just read off the screen.</div>"
    },
    {
      "heading": "From Inputs to Injection: How the Computer Decides",
      "html": "<p>Each injection is a decision. The computer takes engine speed and position, air flow, temperature, rail or oil pressure, and driver demand, then looks up the injection timing and quantity its calibration calls for — and fires the injector solenoids accordingly. It also decides the split: pilot, main, and sometimes post injection, each with its own timing and duration.</p>\n<p>It is also constantly correcting. If the rail pressure sensor says pressure is low, the computer commands the pump harder or extends injection time. If the exhaust temperature is climbing toward a regeneration, it changes the injection pattern to make heat. If a NOx sensor reports poor conversion, it adjusts DEF dosing. The diesel is not a fixed machine with a computer bolted on — it is a computer-managed system that re-decides its behavior many times a second.</p>\n<p>That is why a scan tool is a window, not an answer. Live data shows the computer's decisions and the sensors' reports at the same time, and the technician's job is to spot the mismatch: the computer commanding full injection while rail pressure falls, or the computer adding fuel while air flow reads low. The mismatch is the diagnosis.</p>"
    },
    {
      "heading": "The Actuators: What the Computer Moves",
      "html": "<p>The computer's hands are its actuators. The <strong>injector solenoids</strong> open each injector for a precise duration. The <strong>rail pressure regulator or high-pressure pump control</strong> sets injection pressure. On a HEUI engine, the <strong>injection pressure regulator</strong> sets oil pressure. The <strong>turbo actuator</strong> moves the variable vanes or the wastegate to control boost. The <strong>EGR valve</strong> meters exhaust gas back into the intake to lower combustion temperature and cut NOx.</p>\n<p>Each actuator can be tested by command. A good scan tool can command the EGR valve open and closed, sweep the turbo vanes, or cycle an injector — and the technician watches whether the part actually moves and whether the engine responds. An actuator that does not move when commanded is a wiring, actuator, or computer problem; an actuator that moves but changes nothing is a mechanical problem downstream.</p>\n<p>The EGR system deserves a special note because it causes so many diesel faults. Exhaust gas recirculated into the intake carries soot, and that soot coats the EGR valve, the cooler, and the intake manifold. A stuck EGR valve — open or closed — causes rough running, black smoke, or lost power, and cleaning or replacing it is routine diesel work.</p>"
    },
    {
      "heading": "Catching a Lying Sensor",
      "html": "<p>Sensors lie in three ways: they read a fixed wrong value, they drift slowly away from the truth, or they drop out intermittently. The catch is always the same: compare the sensor's reading with an independent check. A coolant temperature sensor reading cold on a warm engine can be checked with an infrared thermometer on the housing. A mass air flow sensor reading low can be checked against manifold pressure and engine load. A rail pressure sensor can be checked against a mechanical gauge — carefully, and only with proper high-pressure equipment and training, because the pressures involved can injure.</p>\n<p>Codes help, but they are not the whole story. A code for a sensor circuit usually means the wiring or the sensor itself; a code for a system — low rail pressure, poor NOx conversion — usually means the sensor is reporting a real problem somewhere else. The code's wording is the first clue about which kind of fault you are chasing.</p>\n<p>One more check costs nothing and catches many faults: look at the data with the key on and the engine off. Sensors should read sensible resting values — coolant near the air temperature, rail pressure at rest, throttle at its closed position. A sensor reading nonsense before the engine even runs is a sensor or wiring fault, proven before a single part is removed.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Sensors: crank/cam position, air flow or manifold pressure, coolant temperature, rail or injection pressure, exhaust temperature and NOx, throttle/pedal position.</li>\n<li>The computer decides injection timing, quantity, and split (pilot, main, post) from those inputs, many times a second.</li>\n<li>Actuators: injector solenoids, rail pressure control, HEUI injection pressure regulator, turbo vanes or wastegate, EGR valve.</li>\n<li>A lying sensor is worse than a dead one — compare every suspicious reading with an independent check.</li>\n<li>Key-on, engine-off data is a free first test: sensors should read sensible resting values.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Replacing the sensor the code names. A system code (low rail pressure, poor conversion) usually means the sensor is telling the truth about a fault elsewhere — the code names the system, not the part.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Trusting live data without a cross-check. A drifting sensor looks plausible on screen; only an independent measurement — a thermometer, a gauge, a second sensor — proves it right or wrong.</div>\n<p><strong>Ready-to-work link:</strong> If you can list the computer's sensors and actuators and explain how to catch a lying sensor, you have this module. Module 8 covers the fuel itself: quality and filtration.</p>"
    }
  ],
  "keyTerms": [
    { "term": "ECM", "def": "Engine control module — the computer that runs the diesel, deciding injection timing, quantity, and emissions strategy." },
    { "term": "Crankshaft position sensor", "def": "The sensor reporting crankshaft position and speed, so the computer can time injections." },
    { "term": "Camshaft position sensor", "def": "The sensor reporting camshaft position, so the computer knows which cylinder is on its firing stroke." },
    { "term": "Mass air flow (MAF) sensor", "def": "The sensor measuring how much air enters the engine, so the computer knows how much fuel the air can burn." },
    { "term": "Rail pressure sensor", "def": "The sensor reporting fuel pressure in the common rail." },
    { "term": "Injection control pressure (ICP) sensor", "def": "The HEUI sensor reporting high-pressure oil pressure to the computer." },
    { "term": "Actuator", "def": "A computer-driven part that does physical work: injector solenoids, pressure regulators, turbo vanes, the EGR valve." },
    { "term": "EGR valve", "def": "The valve metering exhaust gas back into the intake to lower combustion temperature and cut NOx." },
    { "term": "Live data", "def": "Real-time sensor readings and computer commands shown on a scan tool while the engine runs." },
    { "term": "Calibration", "def": "The computer's programmed maps that say how much fuel, when, for each combination of speed, load, and temperature." },
    { "term": "Default value", "def": "The substitute reading the computer uses when a sensor fails, so the engine can keep running in a limited way." },
    { "term": "Key-on, engine-off (KOEO)", "def": "Testing with the key on and the engine off, so sensors can be checked at their resting values." }
  ],
  "video": {
    "title": "Ford 6.0 FICM Symptoms: Fuel Injection Control Module",
    "embedUrl": "https://www.youtube.com/embed/JTFRiDr-7o0",
    "note": "The FICM is the electronic module that powers and controls the injectors on a HEUI diesel — a real example of a diesel electronic control failing. Watch the symptoms (hard cold starts, rough running, no-start) and the voltage test, and note how an electronic fault looks exactly like a mechanical one until it is tested.",
    "more": [
      { "title": "Diesel Fuel Filter Replacement Tips (1A Auto)", "url": "https://www.youtube.com/watch?v=MjUCFRh-vgA" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A diesel will not start and there is no crankshaft position sensor signal on the scan tool. Why can the computer not fire the injectors?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Without crankshaft position and speed, the computer does not know where the engine is in its rotation. Step 2: Injection timing depends on that position, so the computer cannot fire any injector at the right moment — it will not fire them at all.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The coolant temperature sensor reads cold on an engine that has been running for an hour. What will the computer do wrong, and how would you prove the sensor is lying?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The computer will run cold-start strategy — longer glow, richer fueling, higher idle — on a warm engine, causing rough running, smoke, and poor economy. Step 2: Prove it with an independent check: measure the housing temperature with an infrared thermometer and compare it with the sensor's reading.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A scan tool code says rail pressure is low. Name two possible causes — one sensor, one mechanical — and one test that separates them.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Sensor cause — a faulty rail pressure sensor reporting low when pressure is actually fine. Mechanical cause — a weak high-pressure pump or a leaking injector bleeding pressure away. Step 2: Check rail pressure with a proper high-pressure gauge (with correct safety training and equipment) and compare it with the sensor's reading — if they disagree, the sensor is lying; if they agree, the pump or an injector is the fault.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> The scan tool can command the EGR valve open, but the engine's running does not change. What does that tell you?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The valve is moving on command (or at least the command is being sent), but nothing changes downstream. Step 2: The fault is mechanical downstream of the valve — the valve is stuck, the passages are clogged with soot, or the cooler is blocked — not in the wiring or the computer.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> With the key on and the engine off, the throttle position sensor reads wide open. What does that tell you before the engine ever runs?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The sensor or its wiring is faulty — a closed throttle should read its closed position at rest. Step 2: This is proven before cranking, with no parts removed: a sensor reading nonsense at rest cannot be trusted when running.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why is a drifting sensor more dangerous than a dead sensor?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A dead sensor sets a code and the computer substitutes a default value, so the fault is obvious. Step 2: A drifting sensor feeds the computer wrong information that still looks plausible, so the computer makes wrong decisions confidently — wrong fueling, wrong timing — with no code to point at the sensor.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Without a crankshaft position sensor signal, the computer cannot:",
      "choices": ["Run the glow plugs", "Time the injections, because it does not know where the engine is in its rotation", "Read the fuel level", "Operate the starter"],
      "answer": 1,
      "explanation": "Correct: (b). Injection timing depends on crankshaft position; with no signal the computer will not fire the injectors. (a) Glow plugs run on their own circuit. (c) Fuel level is a separate gauge circuit. (d) The starter is cranked by the key, not the computer."
    },
    {
      "q": "A coolant temperature sensor that reads cold on a warm engine will make the computer:",
      "choices": ["Shut the engine off", "Run cold-start strategy — longer glow, richer fueling, higher idle — on a warm engine", "Open the EGR valve fully", "Drain the DEF tank"],
      "answer": 1,
      "explanation": "Correct: (b). The computer believes the engine is cold and fuels it that way, causing rough running and smoke. (a) The computer does not shut the engine off for a temperature reading. (c) EGR is controlled by load and temperature strategy, not directly by this sensor alone. (d) DEF has nothing to do with coolant temperature."
    },
    {
      "q": "An actuator is:",
      "choices": ["A sensor that measures air flow", "A computer-driven part that does physical work, such as an injector solenoid or the EGR valve", "A type of fault code", "A filter in the fuel system"],
      "answer": 1,
      "explanation": "Correct: (b). Actuators move things on command — injectors, pressure regulators, turbo vanes, EGR. (a) That is a sensor. (c) A fault code is information, not a part. (d) A filter is a passive part, not computer-driven."
    },
    {
      "q": "The EGR valve meters exhaust gas back into the intake in order to:",
      "choices": ["Increase power", "Lower combustion temperature and cut NOx", "Clean the DPF", "Warm the fuel"],
      "answer": 1,
      "explanation": "Correct: (b). Recirculated exhaust gas lowers peak combustion temperature, which reduces NOx formation. (a) EGR displaces fresh air and does not increase power. (c) The DPF is cleaned by regeneration. (d) EGR does not warm the fuel."
    },
    {
      "q": "A code for low rail pressure most likely means:",
      "choices": ["The rail pressure sensor is definitely faulty", "Either the sensor is lying or the pump or an injector is actually losing pressure — the data must separate them", "The glow plugs have failed", "The turbo has failed"],
      "answer": 1,
      "explanation": "Correct: (b). A system code names the system, not the part; the sensor reading must be checked against a gauge. (a) The sensor is only one possibility. (c) Glow plugs do not affect rail pressure. (d) The turbo does not set rail pressure."
    },
    {
      "q": "Key-on, engine-off (KOEO) testing is useful because:",
      "choices": ["It tests the engine at full load", "Sensors should read sensible resting values, so a nonsense reading proves a sensor or wiring fault before cranking", "It regenerates the DPF", "It charges the battery"],
      "answer": 1,
      "explanation": "Correct: (b). Resting values are a free first test — a sensor wrong at rest is wrong, period. (a) The engine is off, so there is no load. (c) Regeneration needs a running, hot engine. (d) KOEO testing does not charge the battery."
    },
    {
      "q": "A drifting sensor is more dangerous than a dead sensor because:",
      "choices": ["It draws more current", "It feeds the computer wrong information that looks plausible, so no code points at it", "It always damages the computer", "It stops the starter from working"],
      "answer": 1,
      "explanation": "Correct: (b). A drifting sensor looks believable on screen while making the computer decide wrongly. (a) Current draw is not the issue. (c) A drifting sensor does not damage the computer. (d) Sensors do not control the starter."
    },
    {
      "q": "When a scan tool commands the EGR valve open and the engine does not respond, the fault is most likely:",
      "choices": ["In the computer's software", "Mechanical downstream — a stuck valve or clogged passages", "In the glow plug relay", "In the DEF tank"],
      "answer": 1,
      "explanation": "Correct: (b). The command went out but nothing changed, so the valve or its passages are stuck or blocked with soot. (a) If the software were at fault, the command would not go out. (c) The glow relay is a separate circuit. (d) DEF is unrelated to the EGR valve."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Diesel Electronic Controls: Quick Reference</h3>\n<p><strong>Sensors:</strong> Crank/cam position · Air flow or manifold pressure · Coolant temperature · Rail pressure (or HEUI injection pressure) · Exhaust temperature and NOx · Throttle/pedal position.</p>\n<p><strong>Decisions:</strong> Injection timing, quantity, and split (pilot, main, post) — re-decided many times a second.</p>\n<p><strong>Actuators:</strong> Injector solenoids · Rail pressure control / IPR · Turbo vanes or wastegate · EGR valve.</p>\n<p><strong>Catching a lying sensor:</strong> Compare with an independent check (thermometer, gauge, second sensor). KOEO resting values are a free first test.</p>\n<p><strong>Rule:</strong> A system code names the system, not the part. A drifting sensor is worse than a dead one.</p>\n<p><strong>Watch out:</strong> EGR valves and passages clog with soot — a stuck EGR is routine diesel work.</p>\n<p><strong>Self-check:</strong> List the computer's sensors and actuators from memory and explain the KOEO test.</p>\n"
};
