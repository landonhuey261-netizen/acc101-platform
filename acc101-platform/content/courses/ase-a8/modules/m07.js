// Auto-generated original course content for College Without College
module.exports = {
  "number": 7,
  "slug": "sensor-diagnosis-o2-maf-map-crank-cam",
  "title": "Sensor Diagnosis: O2, MAF, MAP, Crank/Cam",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what each sensor reports to the computer.",
    "Describe how an oxygen sensor reports the mixture.",
    "Explain the difference between MAF and MAP sensing.",
    "Describe what crankshaft and camshaft sensors do.",
    "Diagnose a lying sensor — one that reports a wrong value without setting a code."
  ],
  "sections": [
    {
      "heading": "Sensors: The Computer's Eyes",
      "html": "<p>The computer cannot see the engine — it can only read its sensors. Each sensor reports one measurement: how much air is coming in, how fast the engine is turning, how hot the coolant is, and what is left in the exhaust. The computer trusts those reports and sets fuel and spark from them. When a sensor lies — reporting a value that is wrong but still plausible — the computer makes the wrong decision, and the engine runs badly without any code to point at the liar.</p>\n<p>That is the hardest fault in this course: a sensor that is wrong but not wrong enough to set a code. The test is always the same: compare the sensor's report with another source of truth. Does the airflow reading match the engine's speed and load? Does the oxygen sensor's report match the fuel trim? A sensor that disagrees with everything else is the one to test.</p>\n"
    },
    {
      "heading": "The Oxygen Sensor",
      "html": "<p>The oxygen sensor sits in the exhaust and reports how much oxygen is left after the burn. Little oxygen left means the mixture was rich; a lot left means it was lean. The computer uses that report to trim the fuel, holding the mixture near the point where the converter works best. The sensor before the converter — upstream — does the mixture control; the sensor after it — downstream — watches the converter itself.</p>\n<p>An oxygen sensor that is stuck rich or stuck lean tells the computer a lie, and the computer trims the fuel the wrong way. The result can be a lean misfire from a sensor that falsely reports rich, or a rich-running engine from one that falsely reports lean. Comparing the upstream and downstream sensors, and checking the tailpipe, is how a lying sensor is caught.</p>\n"
    },
    {
      "heading": "MAF and MAP: Two Ways to Measure Air",
      "html": "<p>The mass airflow sensor — MAF — sits in the intake and measures the air flowing into the engine directly. The manifold absolute pressure sensor — MAP — measures the pressure in the intake manifold, and the computer works out the airflow from that pressure, the engine speed, and the temperature. Some cars use one, some use the other, and some use both.</p>\n<p>A dirty MAF sensor reads low: it reports less air than is really coming in, so the computer gives too little fuel and the mixture goes lean. A MAP sensor with a blocked hose reads wrong in the other direction. Either way, the symptom is a lean or rich mixture that follows the sensor's lie, and the test is to compare the reading with what the engine should be drawing at that speed and load.</p>\n"
    },
    {
      "heading": "Crankshaft and Camshaft Sensors",
      "html": "<p>The crankshaft position sensor watches a toothed wheel on the crankshaft and tells the computer where each piston is and how fast the engine is turning. The camshaft position sensor watches the camshaft and tells the computer which stroke each cylinder is on. Together they time the spark and the injectors. A signal that drops out for a moment — an intermittent fault — can stall the engine or stop it starting, and the fault may vanish by the time the car reaches the shop.</p>\n<p>Testing these sensors means watching their signal as the engine runs, ideally with a scope that shows the waveform. A clean, regular waveform is a healthy sensor; a waveform with gaps or noise is a sensor, a wheel, or wiring that is failing. A crankshaft sensor that is misadjusted or rubbing can produce a signal that looks like a misfire — the computer sees the wrong timing and reports a fault that is not in the cylinders at all.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<p><ul><li>The computer trusts its sensors; a lying sensor makes it set fuel and spark wrong.</li><li>The upstream oxygen sensor controls the mixture; the downstream one watches the converter.</li><li>MAF measures airflow directly; MAP measures manifold pressure and the computer works airflow out from it.</li><li>Crankshaft and camshaft sensors time the spark and injectors together.</li><li>A sensor that lies without setting a code is caught by comparing its report with another source of truth.</li></ul></p>\n<p><strong>Common mistake:</strong> Replacing an oxygen sensor because the mixture is wrong. The sensor may be reporting the truth about a mixture fault elsewhere — test it against the fuel trim and the downstream sensor before replacing it.</p>\n<p><strong>Ready-to-Work link:</strong> If you can say what each sensor reports and how you would catch one that is lying, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Oxygen sensor",
      "def": "The exhaust sensor that reports how much oxygen is left after the burn."
    },
    {
      "term": "Upstream sensor",
      "def": "The oxygen sensor before the converter, used for mixture control."
    },
    {
      "term": "Downstream sensor",
      "def": "The oxygen sensor after the converter, used to watch the converter."
    },
    {
      "term": "MAF sensor",
      "def": "The mass airflow sensor that measures air flowing into the engine directly."
    },
    {
      "term": "MAP sensor",
      "def": "The manifold absolute pressure sensor that measures pressure in the intake manifold."
    },
    {
      "term": "Crankshaft position sensor",
      "def": "The sensor that reports piston position and engine speed."
    },
    {
      "term": "Camshaft position sensor",
      "def": "The sensor that reports which stroke each cylinder is on."
    },
    {
      "term": "Lying sensor",
      "def": "A sensor that reports a wrong but plausible value, without setting a code."
    },
    {
      "term": "Fuel trim",
      "def": "The computer's adjustment to fuel delivery, based on the oxygen sensor's report."
    },
    {
      "term": "Waveform",
      "def": "The shape of a sensor's signal over time, shown on a scope."
    },
    {
      "term": "Intermittent fault",
      "def": "A fault that comes and goes, often vanishing by the time the car is tested."
    },
    {
      "term": "Scope",
      "def": "An oscilloscope that shows a sensor's signal as a waveform."
    },
    {
      "term": "Rich",
      "def": "Too much fuel for the air."
    },
    {
      "term": "Lean",
      "def": "Too little fuel for the air."
    }
  ],
  "video": {
    "title": "Symptoms of a bad MAF sensor (how to troubleshoot)",
    "embedUrl": "https://www.youtube.com/embed/vQf9brsOYOM",
    "note": "ScannerDanner shows the symptoms of a bad mass airflow sensor and how to troubleshoot it. Watch how a sensor that reports the wrong airflow makes the computer give the wrong amount of fuel.",
    "more": [
      {
        "title": "False Rich O2 Sensor Diagnosis: Fuel Trims & Downstream Data",
        "url": "https://www.youtube.com/watch?v=H6lY42u19VM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem.</strong> Explain why a sensor that lies is harder to find than a sensor that fails completely.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A failed sensor usually sets a code, because its reading is impossible. Step 2: A lying sensor reports a wrong but plausible value, so no code is set. Step 3: The computer trusts it and sets fuel and spark wrong, so the fault looks like a mixture problem.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> An oxygen sensor is stuck reporting rich. What will the computer do, and what will the engine do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The computer believes the mixture is rich, so it trims fuel down. Step 2: The real mixture goes lean. Step 3: The engine may develop a lean misfire — caused by a sensor lie, not by a real lean mixture.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> A MAF sensor is dirty and reads low. Explain the chain from the dirty sensor to the symptom.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The sensor reports less air than is really coming in. Step 2: The computer gives too little fuel for the real airflow. Step 3: The mixture goes lean, and the engine hesitates or runs roughly.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> How do you tell a MAF fault from a MAP fault on a car that has both sensors?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Compare the two readings: the airflow the MAF reports should match the airflow the MAP reading implies at that speed and load. Step 2: The sensor that disagrees with the other — and with the fuel trim — is the suspect. Step 3: Test that sensor directly before replacing it.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> A car stalls sometimes and will not start sometimes, with no code. Why might the crankshaft sensor be the suspect?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The crankshaft sensor times the spark and the injectors. Step 2: A signal that drops out for a moment stops the spark, so the engine stalls or will not start. Step 3: Because the fault is intermittent, it may vanish before a code is set — watch its waveform on a scope.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Explain how the downstream oxygen sensor helps catch a lying upstream sensor.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The downstream sensor watches the converter, not the mixture. Step 2: If the upstream sensor reports rich but the downstream sensor and the tailpipe do not agree, the upstream sensor is lying. Step 3: Comparing the two sensors separates a mixture fault from a sensor fault.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The computer sets fuel and spark from:",
      "choices": [
        "The driver's wishes",
        "Its sensors' reports",
        "The fuel gauge",
        "The radio"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Sensors report air, speed, temperature, and exhaust, and the computer trusts them. (a) The driver sets the pedal, not the mixture. (c) The fuel gauge reports tank level. (d) The radio is unrelated."
    },
    {
      "q": "The upstream oxygen sensor's job is to:",
      "choices": [
        "Watch the converter",
        "Control the mixture by reporting oxygen left after the burn",
        "Measure the air coming in",
        "Time the spark"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The upstream sensor's report drives the fuel trim. (a) That is the downstream sensor. (c) That is the MAF sensor. (d) That is the crankshaft and camshaft sensors."
    },
    {
      "q": "An oxygen sensor stuck reporting rich will make the computer:",
      "choices": [
        "Add more fuel",
        "Trim fuel down, making the real mixture lean",
        "Stop the engine at once",
        "Open the throttle"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Believing the mixture is rich, the computer cuts fuel — and the real mixture goes lean. (a) That is the response to a lean report. (c) The computer does not stop the engine for this. (d) The throttle is not controlled this way."
    },
    {
      "q": "A MAF sensor measures:",
      "choices": [
        "Manifold pressure",
        "Air flowing into the engine directly",
        "Exhaust oxygen",
        "Engine speed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The mass airflow sensor measures the air entering the engine. (a) That is the MAP sensor. (c) That is the oxygen sensor. (d) That is the crankshaft sensor."
    },
    {
      "q": "A dirty MAF sensor that reads low will make the mixture:",
      "choices": [
        "Rich, because the computer adds fuel",
        "Lean, because the computer gives too little fuel for the real airflow",
        "Perfect",
        "Unaffected"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Less reported air means less fuel, so the real mixture is lean. (a) A low reading cuts fuel, it does not add it. (c) The mixture is wrong. (d) The sensor directly sets the fuel amount."
    },
        {
      "q": "A scan tool shows the engine cranking at 0 rpm even though the starter is turning the engine. Which sensor has most likely failed?",
      "choices": [
        "The camshaft position sensor",
        "The crankshaft position sensor",
        "The mass airflow sensor",
        "The coolant temperature sensor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The computer reads engine speed from the crank sensor — 0 rpm while cranking means it is not reporting. (a) is wrong: the cam sensor reports which stroke each cylinder is on. (c) is wrong: the MAF reports incoming air. (d) is wrong: the coolant sensor reports temperature."
    },
    {
      "q": "A lying sensor is best caught by:",
      "choices": [
        "Replacing it at once",
        "Comparing its report with another source of truth, such as another sensor or the fuel trim",
        "Clearing the codes",
        "Reading the owner's manual"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A sensor that disagrees with everything else is the suspect. (a) Replacing without testing is guessing. (c) Clearing codes erases evidence. (d) The manual does not test sensors."
    },
    {
      "q": "The downstream oxygen sensor is used to:",
      "choices": [
        "Control the mixture",
        "Watch the catalytic converter",
        "Measure intake air",
        "Time the injectors"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The downstream sensor reports on the converter's health. (a) That is the upstream sensor. (c) That is the MAF sensor. (d) That is the crankshaft and camshaft sensors."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Sensor Diagnosis: Quick Reference</h3>\n<p><strong>Core idea:</strong> The computer trusts its sensors. A lying sensor — wrong but plausible, no code — makes it set fuel and spark wrong.</p>\n<p><strong>O2:</strong> Upstream controls the mixture; downstream watches the converter. Stuck rich → computer cuts fuel → real mixture goes lean.</p>\n<p><strong>Air:</strong> MAF measures airflow directly; MAP measures manifold pressure. A dirty MAF reading low makes the mixture lean.</p>\n<p><strong>Timing:</strong> Crankshaft = where the pistons are. Camshaft = which stroke. Together they time spark and injectors.</p>\n<p><strong>Self-check:</strong> For each sensor, say what it reports and how you would catch it lying.</p>\n"
};
