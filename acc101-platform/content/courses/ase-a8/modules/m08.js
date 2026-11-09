// Auto-generated original course content for College Without College
module.exports = {
  "number": 8,
  "slug": "driveability-diagnosis",
  "title": "Driveability Diagnosis",
  "estTime": "3–4 hours",
  "objectives": [
    "Build a driveability complaint into a test plan.",
    "Use live data to separate air, fuel, spark, and mechanical faults.",
    "Explain how to test for a vacuum leak, a weak pump, and a bad coil.",
    "Describe the cylinder drop test and what it proves.",
    "Explain why intermittent faults need a different approach."
  ],
  "sections": [
    {
      "heading": "From Complaint to Test Plan",
      "html": "<p>A driveability complaint is a story with a beginning: when does it happen, and what makes it better or worse? A car that stumbles only when cold, only under load, or only at idle is telling you three different stories. Write the story down before touching a tool: cold or warm, idle or load, all the time or sometimes, and what the driver was doing when it happened. That story is the test plan.</p>\n<p>The plan then follows the three things the engine needs. Is the air right? Is the fuel right? Is the spark right? And is the cylinder mechanically able to use them — does it have compression? Test one system at a time, with a test that can prove you wrong, and the fault will narrow itself down.</p>\n"
    },
    {
      "heading": "Live Data Is the Story",
      "html": "<p>Live data turns a complaint into numbers. Watch the fuel trims: a trim that climbs under load points at fuel delivery or a vacuum leak, because the computer is adding fuel to make up for something missing. Watch the oxygen sensor: a sensor that never moves may be dead, and one that moves slowly may be tired. Watch engine speed at idle: a speed that hunts up and down points at an air leak or a control fault.</p>\n<p>The key is to watch data while the fault is happening. A reading taken at idle when the fault only happens under load tells you nothing. Drive the car with the scan tool connected, or have a helper watch while you drive, and note what changes at the exact moment the symptom appears.</p>\n"
    },
    {
      "heading": "The Cylinder Drop Test",
      "html": "<p>The cylinder drop test finds a weak cylinder. With the engine idling, disable one cylinder at a time — by cutting its injector or its coil — and watch the engine speed fall. A healthy cylinder makes a clear drop when it is disabled, because it was doing work. A weak cylinder makes little or no drop, because it was already contributing little. That cylinder is the one to test further.</p>\n<p>Once a weak cylinder is found, the question is why: spark, fuel, or compression? Swap the coil with another cylinder and see if the weakness moves. Swap the injector the same way. If the weakness stays with the cylinder after both swaps, test its compression — the fault is mechanical, in the cylinder itself.</p>\n"
    },
    {
      "heading": "Intermittent Faults",
      "html": "<p>An intermittent fault is one that comes and goes: the car stalls once a week, or will not start on a damp morning and then runs perfectly all day. These faults are hard because they vanish before they can be tested. The approach is different: look for what changes — heat, vibration, moisture — and test under those conditions. A wiring fault that only appears when the engine is hot, or a sensor that only fails when it is damp, will not show up on a cold, dry bench.</p>\n<p>For intermittent faults, freeze-frame data and the customer's story are the best evidence. When did it happen, what was the weather, how long had the car been running? A fault that only happens after twenty minutes of driving points at heat; one that only happens on a wet morning points at moisture getting into a connector or a coil.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<p><ul><li>Start with the story: when does it happen, and what makes it better or worse?</li><li>Test one system at a time — air, fuel, spark, compression — with a test that can prove you wrong.</li><li>Live data watched while the fault happens is the fastest route to the cause.</li><li>The cylinder drop test finds a weak cylinder; swapping the coil and injector finds why.</li><li>Intermittent faults need the conditions that cause them — heat, vibration, or moisture.</li></ul></p>\n<p><strong>Common mistake:</strong> Testing at idle for a fault that only happens under load. Watch the data while the fault is happening, or the test tells you nothing.</p>\n<p><strong>Ready-to-Work link:</strong> If you can turn a complaint into a test plan and say what a cylinder drop test proves, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Test plan",
      "def": "The ordered list of tests built from the customer's story: when, where, and under what conditions the fault happens."
    },
    {
      "term": "Live data",
      "def": "Sensor readings watched in real time while the fault is happening."
    },
    {
      "term": "Fuel trim",
      "def": "The computer's adjustment to fuel delivery; a climbing trim means the computer is compensating for something."
    },
    {
      "term": "Cylinder drop test",
      "def": "Disabling one cylinder at a time at idle and watching the engine speed fall, to find a weak cylinder."
    },
    {
      "term": "Intermittent fault",
      "def": "A fault that comes and goes, often vanishing before it can be tested."
    },
    {
      "term": "Vacuum leak",
      "def": "A leak letting unmetered air into the intake, making the mixture lean."
    },
    {
      "term": "Compression",
      "def": "The pressure a cylinder builds when the piston squeezes the mixture; low compression means a mechanical fault."
    },
    {
      "term": "Freeze-frame data",
      "def": "A snapshot of conditions taken when a code was set."
    },
    {
      "term": "Hunting idle",
      "def": "An idle speed that rises and falls repeatedly."
    },
    {
      "term": "Under load",
      "def": "When the engine is working hard, such as accelerating or climbing a hill."
    },
    {
      "term": "Swap test",
      "def": "Moving a suspect part to another cylinder to see if the fault moves with it."
    },
    {
      "term": "Mechanical fault",
      "def": "A fault in the cylinder itself — valves, rings, or head gasket — rather than in air, fuel, or spark."
    },
    {
      "term": "Heat soak",
      "def": "A fault that appears only when the engine is fully warm."
    },
    {
      "term": "Driveability complaint",
      "def": "A report of how the car behaves badly when driven."
    }
  ],
  "video": {
    "title": "Misfire Quick Tests (Is it a spark, fuel or compression problem?)",
    "embedUrl": "https://www.youtube.com/embed/uB9XCDO8oa8",
    "note": "ScannerDanner runs quick misfire tests to separate spark, fuel, and compression faults. Watch the order: test one system at a time, and let the test — not the guess — name the fault.",
    "more": [
      {
        "title": "How to determine which cylinder is misfiring (cylinder drop test)",
        "url": "https://www.youtube.com/watch?v=5ewJIBS9L98"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem.</strong> A car stumbles only under load, never at idle. Build a test plan in three steps.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Note the story — under load only, so the fault needs high demand. Step 2: Watch live data under load: fuel trims, fuel pressure, and airflow. Step 3: Test the systems that matter under load first — fuel delivery, ignition under load, and boost or airflow.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Explain what a cylinder drop test proves, and what it does not prove.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It proves which cylinder is weak — the one whose disabling makes little difference. Step 2: It does not prove why that cylinder is weak. Step 3: Swap the coil and injector to find whether the cause is spark, fuel, or mechanical.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Fuel trims climb steadily under load. What does that suggest, and what do you test?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The computer is adding fuel to make up for something missing. Step 2: That suggests a lean condition — low fuel delivery or unmetered air. Step 3: Test fuel pressure and look for a vacuum leak, in that order.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> A car stalls once a week and then runs perfectly. Why is this fault hard, and what evidence do you use?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It is intermittent — it vanishes before it can be tested. Step 2: Use the customer's story and the freeze-frame data: when, how long running, what weather. Step 3: Test under the conditions that cause it — heat, vibration, or moisture.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> A cylinder is weak. The coil swap does not move the weakness, and the injector swap does not move it either. What is the next test, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Test the cylinder's compression. Step 2: Spark and fuel have been ruled out by the swaps. Step 3: What is left is mechanical — the cylinder itself cannot squeeze and burn the mixture properly.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Why must live data be watched while the fault is happening, not after it has gone?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Live data is a snapshot of the moment. Step 2: A reading taken when the fault is gone shows a healthy engine. Step 3: Only data from the moment of the symptom shows what was wrong.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The first step in driveability diagnosis is to:",
      "choices": [
        "Replace the most expensive part",
        "Write down the story: when it happens, and what makes it better or worse",
        "Clear all the codes",
        "Test the compression of every cylinder"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The story builds the test plan. (a) Replacing parts without a plan is guessing. (c) Clearing codes erases evidence. (d) Compression is tested when a weak cylinder is found, not first."
    },
    {
      "q": "Fuel trims that climb under load suggest:",
      "choices": [
        "The computer is adding fuel to make up for a lean condition, such as low fuel delivery or unmetered air",
        "The mixture is too rich",
        "The spark is too strong",
        "The engine is cold"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A climbing trim means the computer is compensating for missing fuel or extra air. (b) A rich mixture would make the trim fall. (c) Spark strength does not move fuel trim. (d) A cold engine runs rich by design, not by trim climb."
    },
    {
      "q": "In a cylinder drop test, a weak cylinder is the one whose disabling makes:",
      "choices": [
        "The biggest drop in engine speed",
        "Little or no drop in engine speed, because it was already contributing little",
        "The engine stall at once",
        "The check-engine light flash"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A weak cylinder was doing little work, so losing it changes little. (a) That is a healthy cylinder. (c) Stalling is not the expected result. (d) The light does not flash for this test."
    },
    {
      "q": "After a drop test finds a weak cylinder, the next step is to:",
      "choices": [
        "Replace the engine",
        "Swap the coil with another cylinder and see if the weakness moves",
        "Replace all the spark plugs",
        "Clear the codes"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A swap test separates a coil fault from a cylinder fault. (a) Replacing the engine is not a test. (c) Replacing all plugs guesses at the cause. (d) Clearing codes erases evidence."
    },
    {
      "q": "An intermittent fault is hard because:",
      "choices": [
        "It sets too many codes",
        "It comes and goes, and often vanishes before it can be tested",
        "It always breaks the car completely",
        "It cannot be fixed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The fault is gone by the time the car is tested. (a) It often sets no code at all. (c) It usually leaves the car running most of the time. (d) It can be fixed once its conditions are found."
    },
    {
      "q": "A fault that only happens after twenty minutes of driving most likely involves:",
      "choices": [
        "Moisture",
        "Heat — something fails only when fully warm",
        "A flat tyre",
        "Low fuel"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Twenty minutes is enough for full warm-up, so heat is the trigger. (a) Moisture faults usually appear on damp mornings. (c) Tyres do not cause driveability faults. (d) Low fuel causes faults at any time."
    },
    {
      "q": "Live data should be watched:",
      "choices": [
        "Only at idle",
        "While the fault is happening",
        "After the car is switched off",
        "Only when the light is on"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Data from the moment of the symptom shows what was wrong. (a) Idle data misses load faults. (c) The engine gives no live data when off. (d) The light may not be on for a driveability fault."
    },
    {
      "q": "If a weak cylinder stays weak after the coil and injector swaps, the next test is:",
      "choices": [
        "Fuel pressure",
        "Compression — the fault is likely mechanical, in the cylinder itself",
        "The cabin filter",
        "The battery"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Spark and fuel are ruled out, so the cylinder's mechanical health is next. (a) Fuel pressure affects all cylinders. (c) The cabin filter is unrelated. (d) The battery starts the car."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Driveability Diagnosis: Quick Reference</h3>\n<p><strong>Start:</strong> The story — when does it happen, and what makes it better or worse?</p>\n<p><strong>Method:</strong> Test one system at a time (air, fuel, spark, compression) with a test that can prove you wrong.</p>\n<p><strong>Drop test:</strong> Disable one cylinder at a time; the weak one makes little difference. Swap coil and injector to find why.</p>\n<p><strong>Intermittent:</strong> Use the story and freeze frame; test under the conditions that cause it — heat, vibration, moisture.</p>\n<p><strong>Self-check:</strong> Turn a complaint into a test plan and say what a drop test proves.</p>\n"
};
