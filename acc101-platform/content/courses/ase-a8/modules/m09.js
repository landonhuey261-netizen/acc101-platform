// Auto-generated original course content for College Without College
module.exports = {
  "number": 9,
  "slug": "misfire-diagnosis",
  "title": "Misfire Diagnosis",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a misfire is and how the computer detects it.",
    "Name the three families of misfire causes: spark, fuel, and mechanical.",
    "Describe how to find which cylinder is misfiring.",
    "Explain why a misfire damages the catalytic converter.",
    "Diagnose a single-cylinder misfire and a random misfire."
  ],
  "sections": [
    {
      "heading": "What a Misfire Is",
      "html": "<p>A misfire is a power stroke that did not happen properly. The mixture in a cylinder failed to burn, or burned so weakly that the cylinder made little push. The driver feels it as a stumble, a shake, or a loss of power, and the computer detects it by watching the crankshaft: a cylinder that fires properly speeds the crankshaft up a little; one that misfires does not, and the computer notices the uneven rotation.</p>\n<p>The computer stores a code for the cylinder it sees misfiring — P0301 for cylinder 1, and so on — or P0300 for a random misfire, where no single cylinder stands out. The code names the cylinder, not the cause. A misfire has three families of causes: spark, fuel, and mechanical, and the diagnosis is to find which family, then which part.</p>\n"
    },
    {
      "heading": "Spark Misfires",
      "html": "<p>A spark misfire means the spark was missing or too weak to light the mixture. The usual suspects are the coil, the plug, and the wiring between them. A coil that works at idle but fails under load is a classic spark misfire: the mixture is harder to light when the engine is working hard, and the weak coil cannot do it. The test is the swap: move the coil to another cylinder and see if the misfire moves with it.</p>\n<p>A plug that is worn, fouled, or gapped wrong can also fail to light the mixture. But a fouled plug is evidence, not the fault — something fouled it, and that something must be found, or the new plug will foul the same way.</p>\n"
    },
    {
      "heading": "Fuel and Mechanical Misfires",
      "html": "<p>A fuel misfire means the cylinder got the wrong amount of fuel: none, because its injector is stuck closed or has no signal; too much, because its injector leaks; or too little, because its injector is clogged. The test is again the swap: move the injector to another cylinder and see if the misfire moves. If it does not move, the injector was innocent.</p>\n<p>A mechanical misfire means the cylinder itself cannot do its job: low compression from worn rings, a burned valve, or a head-gasket leak. No spark or fuel test will fix it, and the test is a compression test — or a leakdown test, which shows where the pressure is escaping. A mechanical misfire is the most expensive family, which is why it is tested last, after spark and fuel have been ruled out.</p>\n"
    },
    {
      "heading": "Random Misfires and the Converter",
      "html": "<p>A random misfire — P0300, with no single cylinder standing out — points at something that affects all cylinders at once: a vacuum leak letting in unmetered air, low fuel pressure starving every injector, or a sensor lying to the computer about the air coming in. The diagnosis widens from one cylinder to the whole engine, and the fuel trims and live data become the main evidence.</p>\n<p>A misfire is not just a driveability complaint — it is an emissions emergency. Unburned fuel from the misfiring cylinder flows into the exhaust and burns inside the catalytic converter, overheating it until the honeycomb melts. A car with a flashing check-engine light has an active misfire that is damaging the converter right now, and it should not be driven far in that state.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<p><ul><li>A misfire is a failed power stroke; the computer detects it from uneven crankshaft rotation.</li><li>Three families: spark, fuel, and mechanical. Test spark and fuel first, mechanical last.</li><li>The swap test — move the coil or injector and see if the misfire moves — names the faulty part.</li><li>A random misfire (P0300) points at something affecting all cylinders at once.</li><li>A misfire sends unburned fuel into the converter and can melt it; a flashing light means stop driving it far.</li></ul></p>\n<p><strong>Common mistake:</strong> Replacing the spark plug in the misfiring cylinder and calling it done. If the coil or the injector was the cause, the misfire will be back — and the converter will be paying for it.</p>\n<p><strong>Ready-to-Work link:</strong> If you can name the three families and say how a swap test separates them, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Misfire",
      "def": "A power stroke that did not happen properly in a cylinder."
    },
    {
      "term": "P0300",
      "def": "The code for a random misfire, with no single cylinder standing out."
    },
    {
      "term": "P0301",
      "def": "The code for a misfire in cylinder 1 (the last digit is the cylinder number)."
    },
    {
      "term": "Spark misfire",
      "def": "A misfire caused by a missing or weak spark."
    },
    {
      "term": "Fuel misfire",
      "def": "A misfire caused by the wrong amount of fuel reaching the cylinder."
    },
    {
      "term": "Mechanical misfire",
      "def": "A misfire caused by the cylinder itself — low compression, a burned valve, or a gasket leak."
    },
    {
      "term": "Swap test",
      "def": "Moving a suspect part to another cylinder to see if the fault moves with it."
    },
    {
      "term": "Compression test",
      "def": "A test of how much pressure a cylinder builds when the piston squeezes the mixture."
    },
    {
      "term": "Leakdown test",
      "def": "A test that shows where a cylinder's pressure is escaping."
    },
    {
      "term": "Flashing check-engine light",
      "def": "A warning that an active misfire is damaging the catalytic converter right now."
    },
    {
      "term": "Crankshaft rotation",
      "def": "The uneven turning of the crankshaft that lets the computer detect a misfire."
    },
    {
      "term": "Burned valve",
      "def": "A valve damaged by heat so it no longer seals, causing low compression."
    },
    {
      "term": "Worn rings",
      "def": "Piston rings that no longer seal, letting pressure escape past the piston."
    },
    {
      "term": "Head gasket",
      "def": "The seal between the cylinder head and the block; a leak there loses compression."
    }
  ],
  "video": {
    "title": "How to determine which cylinder is misfiring (cylinder drop test)",
    "embedUrl": "https://www.youtube.com/embed/5ewJIBS9L98",
    "note": "ScannerDanner shows the cylinder drop test: disable one cylinder at a time and watch the engine speed. The cylinder whose disabling makes the least difference is the weak one — then the work is finding why.",
    "more": [
      {
        "title": "Misfire Quick Tests (Is it a spark, fuel or compression problem?)",
        "url": "https://www.youtube.com/watch?v=uB9XCDO8oa8"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem.</strong> Explain how the computer detects a misfire, in two sentences.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A cylinder that fires properly speeds the crankshaft up a little on its power stroke. Step 2: A misfiring cylinder does not, so the computer sees uneven rotation and stores a code for that cylinder.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> A cylinder misfires. The coil swap moves the misfire to the other cylinder. What does that prove?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The misfire followed the coil. Step 2: The coil is the faulty part. Step 3: The cylinder, the plug, and the injector were innocent.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> The same cylinder misfires, but neither the coil swap nor the injector swap moves it. What is the next test, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A compression test (or leakdown test). Step 2: Spark and fuel have been ruled out by the swaps. Step 3: What is left is mechanical — the cylinder itself cannot squeeze and burn the mixture.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Explain the difference between a single-cylinder misfire code and a random misfire code.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A single-cylinder code (such as P0301) names one cylinder that is misfiring. Step 2: A random misfire code (P0300) means no single cylinder stands out. Step 3: A random misfire points at something affecting all cylinders, such as a vacuum leak or low fuel pressure.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Why is a flashing check-engine light more urgent than a steady one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A flashing light means an active misfire is happening right now. Step 2: Unburned fuel from the misfiring cylinder is burning inside the catalytic converter. Step 3: The converter can melt, so the car should not be driven far in that state.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> A plug in the misfiring cylinder is fouled with fuel. Is the plug the fault? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No — the fouled plug is evidence. Step 2: Fuel is reaching the plug but not burning, which points at a spark fault or a mechanical fault. Step 3: Test the coil and the cylinder before replacing the plug, or the new plug will foul the same way.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A misfire is detected by the computer from:",
      "choices": [
        "The exhaust smell",
        "Uneven crankshaft rotation — a firing cylinder speeds the crankshaft, a misfiring one does not",
        "The fuel gauge",
        "The tyre pressure"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The computer watches crankshaft speed for the small push of each power stroke. (a) Smell is not a computer input. (c) The fuel gauge reports tank level. (d) Tyres are unrelated."
    },
    {
      "q": "The three families of misfire causes are:",
      "choices": [
        "Air, water, and oil",
        "Spark, fuel, and mechanical",
        "Electrical, hydraulic, and pneumatic",
        "Hot, cold, and warm"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Spark, fuel, and the cylinder's mechanical health cover every misfire. (a) Water and oil are not families of misfire causes. (c) Those are system types, not misfire families. (d) Temperature is not a cause family."
    },
    {
      "q": "A coil swap that moves the misfire to another cylinder proves:",
      "choices": [
        "The coil is faulty",
        "The injector is faulty",
        "The cylinder is worn out",
        "The fuel pump is weak"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The fault followed the coil, so the coil is the cause. (b) An injector fault would follow the injector. (c) A worn cylinder stays with its cylinder. (d) A weak pump affects all cylinders."
    },
    {
      "q": "P0300 means:",
      "choices": [
        "A misfire in cylinder 1",
        "A random misfire, with no single cylinder standing out",
        "A failed oxygen sensor",
        "A loose fuel cap"
      ],
      "answer": 1,
      "explanation": "Correct: (b). P0300 is the random misfire code. (a) That is P0301. (c) Oxygen sensor faults have their own codes. (d) A fuel cap fault is an EVAP code."
    },
    {
      "q": "A random misfire most likely points at:",
      "choices": [
        "One bad spark plug",
        "Something affecting all cylinders at once, such as a vacuum leak or low fuel pressure",
        "One bad coil",
        "One clogged injector"
      ],
      "answer": 1,
      "explanation": "Correct: (b). No single cylinder stands out, so the cause is shared. (a), (c), and (d) each affect one cylinder and would set a single-cylinder code."
    },
    {
      "q": "A misfire damages the catalytic converter because:",
      "choices": [
        "It makes the engine run cold",
        "Unburned fuel from the misfiring cylinder burns inside the converter and overheats it",
        "It stops the exhaust flowing",
        "It makes the converter rust"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Fuel burning in the converter melts the honeycomb. (a) A misfire does not cool the engine. (c) Exhaust still flows. (d) Rust is not the damage mechanism."
    },
    {
      "q": "A flashing check-engine light means:",
      "choices": [
        "The car needs a service soon",
        "An active misfire is damaging the catalytic converter right now — do not drive far",
        "The fuel cap is loose",
        "The battery is flat"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Flashing means a misfire is active and the converter is at risk. (a) A steady light means a service or fault check. (c) A loose cap sets an EVAP code, not a flashing light. (d) A flat battery stops the car starting."
    },
    {
      "q": "If a misfire stays with its cylinder after the coil and injector swaps, the next test is:",
      "choices": [
        "Fuel pressure",
        "Compression — the fault is likely mechanical",
        "The cabin filter",
        "The battery"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Spark and fuel are ruled out, so the cylinder itself is suspect. (a) Fuel pressure affects all cylinders. (c) The cabin filter is unrelated. (d) The battery starts the car."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Misfire Diagnosis: Quick Reference</h3>\n<p><strong>Core idea:</strong> A misfire is a failed power stroke, detected from uneven crankshaft rotation.</p>\n<p><strong>Families:</strong> Spark · Fuel · Mechanical. Test spark and fuel first (swap tests), mechanical last (compression).</p>\n<p><strong>Swap test:</strong> Move the coil or injector — if the misfire moves with it, that part is faulty.</p>\n<p><strong>Random (P0300):</strong> No single cylinder stands out — the cause affects all cylinders at once.</p>\n<p><strong>Urgent:</strong> A flashing check-engine light means an active misfire is damaging the converter now.</p>\n"
};
