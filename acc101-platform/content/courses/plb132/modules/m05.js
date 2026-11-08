// Plumbing 132 - Module 5: Gas Testing: Pressure Tests & Leak Detection
module.exports = {
  "number": 5,
  "slug": "gas-testing-pressure-tests-leak-detection",
  "title": "Gas Testing: Pressure Tests & Leak Detection",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why gas piping must be pressure-tested before gas is introduced.",
    "State the IFGC test pressure and duration rules (406.4.1 and 406.4.2).",
    "Describe how to set up a pressure test: isolation, gauge selection, and pressurization.",
    "Explain how to find a leak: pressure drop, soap solution, and electronic detection.",
    "Describe purging: removing air from a new line safely."
  ],
  "sections": [
    {
      "heading": "Why Test Before Gas",
      "html": "\n<p>Gas piping is tested with air (or an inert gas) before fuel gas is ever introduced, because a leak found with air is a repair and a leak found with gas is an emergency. The test proves the piping, the joints, and the fittings are tight. No new or altered fuel gas piping may be put into service until it has been inspected and tested per IFGC Section 406.</p>\n<p>The test has two parts: the <strong>pressure test</strong>, which proves the system holds pressure, and the <strong>leak check</strong>, which finds any leak that the pressure test reveals. A system that holds its test pressure has no leak large enough to matter; a system that loses pressure has a leak somewhere, and the soap test finds it.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Test with air, never with gas. The pressure test is the gate: no test, no gas. A system that has not been tested is a system that has not been proven tight.</div>\n<p>Testing is also an inspection event. The authority having jurisdiction (AHJ) — the inspector — witnesses the test or reviews the test record. The test pressure, the duration, and the result are recorded, and the system is not approved until the test passes.</p>"
    },
    {
      "heading": "Test Pressure and Duration",
      "html": "\n<p>IFGC 406.4.1 sets the test pressure: not less than <strong>1-1/2 times the proposed maximum working pressure, but not less than 3 psig</strong>, irrespective of design pressure. For a residential system with a maximum working pressure of 0.5 psi, 1.5 times that is 0.75 psi — so the minimum of 3 psig governs. The test pressure must not exceed a value that produces a hoop stress in the piping greater than 50 percent of the pipe's specified minimum yield strength where the test pressure exceeds 125 psig.</p>\n<p>IFGC 406.4.2 sets the duration: not less than <strong>1/2 hour for each 500 cubic feet of pipe volume</strong> or fraction thereof, and for a system with a volume less than 10 cubic feet — or a system in a single-family dwelling — not less than <strong>10 minutes</strong>. The test duration need not exceed 24 hours. In practice, a single-family house test is 3 psig for 10 minutes, and many jurisdictions require longer or higher tests — 10 psi for 30 minutes is common — so always check the local amendment.</p>\n<p>The gauge matters. The test pressure must be measured with a manometer or a pressure-measuring device designed and calibrated to read, record, or indicate a pressure loss during the test. A gauge whose range is far larger than the test pressure cannot show a small drop — the gauge range should not exceed five times the test pressure. A 0–100 psi gauge on a 3-psi test is useless; a 0–15 psi gauge with fine increments is the right tool.</p>"
    },
    {
      "heading": "Setting Up the Test",
      "html": "\n<p><strong>Step 1 — Isolate.</strong> Cap or plug every outlet, close every appliance shutoff valve, and isolate the system from the meter and from any appliance that cannot take the test pressure. Appliances and their gas controls are not part of the pressure test — a 3-psig test can damage a gas valve rated for 1/2 psi. The source of test pressure is isolated before the test begins.</p>\n<p><strong>Step 2 — Pressurize.</strong> Connect the test gauge and a hand pump or a regulated air supply, and raise the pressure slowly to the test pressure. Watch the gauge as it rises — a sudden drop means a large leak or an open outlet. <strong>Step 3 — Hold and watch.</strong> Close the supply, note the pressure and the time, and wait the full duration. A system that holds its pressure for the full duration passes. A system that loses pressure fails, and the leak must be found and fixed before the test is repeated.</p>\n<p><strong>Step 4 — Record.</strong> Record the test pressure, the duration, the date, and the result. The record is the proof the inspector asks for, and it is the record that protects you if a leak is ever questioned later.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Isolate the appliances before you pressurize. A gas control rated for 1/2 psi will not survive a 3-psig test, and a damaged control is a leak that the test itself created.</div>"
    },
    {
      "heading": "Finding the Leak and Purging",
      "html": "\n<p>A pressure drop means a leak. Find it with a <strong>soap solution</strong>: brush a leak-detection solution (or a soap-and-water mix made for the purpose) onto every joint, and watch for bubbles. Bubbles growing at a joint mark the leak. The soap test finds the leak the pressure test proved exists. Never use a flame to find a gas leak — an open flame at a gas leak is an explosion.</p>\n<p><strong>Electronic gas detectors</strong> (combustible gas indicators) sniff for gas at joints and along runs, and they find leaks too small for soap to show. They are the right tool for a system that has already been put into service and is suspected of leaking — but they are a supplement to the pressure test, not a replacement for it. A detector can miss a leak; a pressure test cannot miss a leak large enough to drop the gauge.</p>\n<p>When a leak is found, fix it properly: take the joint apart, clean it, remake it with fresh sealant, and test again. Do not paint over a leaking joint with sealant, and do not tighten a leaking threaded joint harder in the hope that it will seal — an over-torqued fitting can crack, and a cracked fitting leaks worse. The test is repeated from the start after every repair.</p>\n\n<p>Before gas is introduced, the air must be removed from the piping — a process called <strong>purging</strong>. Purging is done by the code's rules (IFGC 406.7): the air is displaced by gas, and the purged gas must be discharged outdoors or to a safe location, never into a room. Purging into a room fills the room with a flammable mixture.</p>\n<p>Purging is a two-person awareness job: one person at the purge point, watching for the gas to arrive (by smell or by a detector), and no ignition sources anywhere near the discharge. The purge is complete when gas reaches the appliance in the right concentration — the appliance's instructions and the code govern the procedure. After purging, each appliance is leak-checked at its connections and lit per the manufacturer's instructions.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Purge outdoors, never into a room. The air in a new line must go somewhere, and the gas that follows it is flammable from the first cubic foot.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Test with air before gas is introduced (IFGC 406). No test, no gas.</li>\n<li>Test pressure (406.4.1): at least 1-1/2 times the maximum working pressure, but not less than 3 psig. For a 0.5-psi residential system, 3 psig governs.</li>\n<li>Duration (406.4.2): 1/2 hour per 500 cu ft of pipe volume; 10 minutes minimum for a single-family dwelling or a system under 10 cu ft; 24 hours maximum.</li>\n<li>Gauge: sized to the test — range not more than five times the test pressure, so a small drop is visible.</li>\n<li>Isolate appliances before pressurizing; pressurize slowly; hold the full duration; record the result.</li>\n<li>Find leaks with soap solution or an electronic detector — never with a flame. Fix the joint properly and retest from the start.</li>\n<li>Purge air outdoors, never into a room.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Testing with the appliances connected. A 3-psig test can damage a gas control rated for 1/2 psi. Isolate the appliances first, every time.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Using a 0–100 psi gauge for a 3-psi test. The needle barely moves on a small leak. Use a gauge whose range is close to the test pressure.</div>\n<p><strong>Ready-to-Work link:</strong> Gas testing is the lab for this course and a core Michigan journeyman exam topic. If you can state the test pressure, the duration, and the setup order from memory, you have this module.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Pressure test",
      "def": "A test that proves gas piping is tight by holding it at a set air pressure for a set time (IFGC 406)."
    },
    {
      "term": "Test pressure",
      "def": "The air pressure used for the test: at least 1-1/2 times the maximum working pressure, but not less than 3 psig (IFGC 406.4.1)."
    },
    {
      "term": "psig",
      "def": "Pounds per square inch, gauge — pressure above atmospheric pressure."
    },
    {
      "term": "Manometer",
      "def": "A U-tube instrument that measures low gas pressure in inches of water column."
    },
    {
      "term": "Soap solution",
      "def": "A leak-detection liquid brushed onto joints; bubbles mark a leak."
    },
    {
      "term": "Electronic gas detector",
      "def": "An instrument that sniffs for combustible gas at joints and along runs."
    },
    {
      "term": "Purging",
      "def": "Removing air from new gas piping by displacing it with gas, discharged outdoors to a safe location (IFGC 406.7)."
    },
    {
      "term": "AHJ",
      "def": "Authority having jurisdiction — the inspector or code official who approves the work."
    },
    {
      "term": "Hoop stress",
      "def": "The stress in a pipe wall from internal pressure; the test pressure must not produce more than 50 percent of the pipe's yield strength."
    },
    {
      "term": "Isolation",
      "def": "Separating the piping under test from the meter and from appliances that cannot take the test pressure."
    },
    {
      "term": "Leak check",
      "def": "A check for gas leaks at joints, by soap solution or detector, after a pressure test or on a system in service."
    },
    {
      "term": "Test gauge",
      "def": "The pressure gauge used for the test; its range should not exceed 5 times the test pressure so a small drop can be read."
    },
    {
      "term": "Working pressure",
      "def": "The highest pressure the gas system normally operates at; the test pressure must be at least 1.5 times this value."
    }
  ],
  "video": {
    "title": "How To Test A Gas Line, Pressure Test And Pass Inspection",
    "embedUrl": "https://www.youtube.com/embed/1ks7bTyLgFc",
    "note": "A full gas line pressure test on camera: isolation, gauge, pressurization, the hold, and the pass — watch the setup order, because the lab asks you to reproduce it.",
    "more": [
      {
        "title": "How to Check for Gas Line Leaks on a Gas Grill | The Soap Bubble Test | BBQGuys.com",
        "url": "https://www.youtube.com/watch?v=7UPQhuvdeL8"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A new residential gas system has a maximum working pressure of 0.5 psi. What is the minimum test pressure under IFGC 406.4.1?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: 1-1/2 times the working pressure is 1.5 × 0.5 = 0.75 psi. Step 2: The code requires not less than 3 psig regardless. Step 3: The minimum test pressure is <strong>3 psig</strong> — the 3-psig floor governs.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A single-family house gas system is tested at 3 psig. What is the minimum test duration under IFGC 406.4.2?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: For a system in a single-family dwelling (or under 10 cubic feet of volume), the duration must be not less than <strong>10 minutes</strong>. Step 2: Many jurisdictions require longer — 30 minutes is common — so check the local amendment. Step 3: The test must hold pressure for the full duration to pass.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A test gauge reads 0–100 psi and the test pressure is 3 psig. The system loses a small amount of pressure during the test but the needle barely moves. What is wrong?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The gauge range is far too large for the test — a 0–100 psi gauge cannot show a small drop at 3 psig. Step 2: The gauge range should not exceed five times the test pressure. Step 3: Use a gauge with a range close to the test pressure, such as 0–15 psi with fine increments, so a small loss is visible.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A pressure test is set up with the furnace and water heater still connected to the piping. What is wrong?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The appliances must be isolated before pressurizing. Step 2: A 3-psig test can damage a gas control rated for 1/2 psi. Step 3: Close the appliance shutoff valves (or cap the branches) so the test pressure never reaches the appliance controls.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A system holds 3 psig for 9 minutes, then drops to 2.5 psig at minute 10. Does it pass? What do you do next?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No — it must hold pressure for the full 10-minute duration. Step 2: A drop means a leak. Step 3: Find it with soap solution on every joint (or an electronic detector), fix the joint properly, and repeat the test from the start.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A new gas line is purged into the basement utility room. What is wrong, and what is the correct procedure?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Purging into a room fills it with a flammable gas-air mixture. Step 2: Purging must discharge outdoors or to a safe location, per IFGC 406.7. Step 3: Ventilate the room, remove ignition sources, and redo the purge outdoors with no ignition sources near the discharge.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Under IFGC 406.4.1, the minimum test pressure for a 0.5-psi residential system is:",
      "choices": [
        "0.75 psig",
        "3 psig",
        "10 psig",
        "125 psig"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 1.5 × 0.5 = 0.75 psi, but the code floor of 3 psig governs. (a) is the 1.5-times calculation without the floor. (c) 10 psig is a common local requirement, not the IFGC minimum. (d) 125 psig is the hoop-stress threshold, not a test pressure."
    },
    {
      "q": "For a single-family dwelling, the minimum test duration under IFGC 406.4.2 is:",
      "choices": [
        "1 minute",
        "10 minutes",
        "1 hour",
        "24 hours"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Not less than 10 minutes. (a) is far too short to prove tightness. (c) 1 hour is the duration for larger volumes (1/2 hour per 500 cu ft). (d) 24 hours is the maximum duration, not the minimum."
    },
    {
      "q": "A pressure test gauge should have a range:",
      "choices": [
        "As large as possible",
        "Not more than five times the test pressure",
        "At least ten times the test pressure",
        "Of exactly 100 psi"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A gauge range close to the test pressure shows small drops; a far larger range hides them. (a) and (c) make small leaks invisible. (d) 100 psi is far too large for a 3-psi test."
    },
    {
      "q": "Before pressurizing a gas system for a test, you must:",
      "choices": [
        "Open all appliance valves",
        "Isolate the appliances from the test pressure",
        "Light every appliance",
        "Fill the system with gas"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Appliance gas controls rated for 1/2 psi can be damaged by a 3-psig test. (a) Open valves let test pressure into the appliances. (c) Appliances are lit only after testing and purging. (d) The test uses air, never gas."
    },
    {
      "q": "The correct way to find a gas leak is:",
      "choices": [
        "With an open flame",
        "With soap solution or an electronic detector",
        "By smell alone",
        "By tightening every joint harder"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Soap bubbles mark the leak; a detector sniffs for gas. (a) A flame at a gas leak is an explosion. (c) Smell finds the area, not the joint. (d) Overtightening can crack a fitting and make the leak worse."
    },
    {
      "q": "A gas system that loses pressure during its test:",
      "choices": [
        "Passes if the drop is small",
        "Fails — find the leak, fix the joint properly, and retest from the start",
        "Passes if it held for most of the duration",
        "Can be put into service anyway"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Any pressure loss during the full duration is a failure. (a) and (c) treat a leak as acceptable — it is not. (d) An unproven system must not be put into service."
    },
    {
      "q": "Purging a new gas line must discharge:",
      "choices": [
        "Into the room where the appliances are",
        "Outdoors or to a safe location, never into a room",
        "Into the chimney",
        "Into the drain"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Purged gas is flammable and must go outdoors (IFGC 406.7). (a) fills a room with a flammable mixture. (c) The chimney is not a purge discharge. (d) Gas must never go into a drain."
    },
    {
      "q": "Gas piping is pressure-tested with:",
      "choices": [
        "Fuel gas",
        "Air or an inert gas, before fuel gas is introduced",
        "Water",
        "Steam"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Air (or an inert gas) proves tightness without the fire risk. (a) Testing with gas is prohibited — a leak found with gas is an emergency. (c) Water is for DWV testing, not gas. (d) Steam is never used for gas testing."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Gas Testing: Quick Reference</h3>\n<p><strong>Why:</strong> Test with air before gas is introduced (IFGC 406). No test, no gas.</p>\n<p><strong>Test pressure (406.4.1):</strong> At least 1-1/2× the maximum working pressure, but not less than 3 psig. For a 0.5-psi system, 3 psig governs.</p>\n<p><strong>Duration (406.4.2):</strong> 1/2 hour per 500 cu ft of pipe volume; 10 minutes minimum for a single-family dwelling or a system under 10 cu ft; 24 hours maximum. Many jurisdictions require more — check the local amendment.</p>\n<p><strong>Gauge:</strong> Range not more than five times the test pressure, so a small drop is visible.</p>\n<p><strong>Setup:</strong> Isolate appliances → pressurize slowly → hold the full duration → record the result.</p>\n<p><strong>Finding leaks:</strong> Soap solution (bubbles mark the joint) or an electronic detector — never a flame. Fix the joint properly and retest from the start.</p>\n<p><strong>Purging (406.7):</strong> Discharge outdoors, never into a room.</p>\n<p><strong>Watch out:</strong> Never test with appliances connected; never use a gauge far larger than the test pressure.</p>\n<p><strong>Self-check:</strong> State the test pressure, the duration, and the setup order — without notes.</p>\n"
};
