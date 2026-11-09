// Auto-generated original course content for College Without College
module.exports = {
  "number": 10,
  "slug": "fuel-trim-waveform-analysis",
  "title": "Fuel Trim & Waveform Analysis",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what short-term and long-term fuel trim are.",
    "Read a fuel-trim pair and say whether the mixture is lean, rich, or correct.",
    "Explain how to use fuel trim to separate a vacuum leak from a fuel-delivery fault.",
    "Describe what a waveform is and what a scope shows.",
    "Read a simple sensor waveform and spot a missing or distorted signal."
  ],
  "sections": [
    {
      "heading": "What Fuel Trim Is",
      "html": "<p>Fuel trim is the computer's running adjustment to the amount of fuel it injects. It starts from a base calculation — how much air is coming in, how fast the engine is turning — and then trims that amount up or down based on what the oxygen sensor reports. If the sensor says the mixture is lean, the computer adds fuel; if it says rich, it takes fuel away. The trim is shown as a percentage: positive means fuel added, negative means fuel taken away.</p>\n<p>There are two trims. Short-term fuel trim reacts at once, changing many times a second as the oxygen sensor's report changes. Long-term fuel trim is the slow average: if the short-term trim keeps adding fuel, the long-term trim learns that correction and holds it, so the short-term trim can return to near zero. Together they are the computer's diary of what it has had to correct.</p>\n"
    },
    {
      "heading": "Reading the Pair",
      "html": "<p>A pair of trims near zero means the base calculation was right and the mixture is correct. A positive pair — the computer adding fuel — means the real mixture is lean, and the computer is compensating: either too little fuel is arriving, or extra air is getting in unmetered. A negative pair means the real mixture is rich, and the computer is taking fuel away: too much fuel is arriving, or the sensor is lying about it.</p>\n<p>The size of the trim matters too. A small correction is normal — engines and sensors are never perfect. A large correction means something is wrong, and the direction tells you which way: positive is a lean fault, negative is a rich fault. The trims do not name the part, but they narrow the fault to a family — and that is often enough to choose the next test.</p>\n"
    },
    {
      "heading": "Vacuum Leak or Fuel Delivery?",
      "html": "<p>Fuel trim can separate two faults that look alike. A vacuum leak lets in extra air, and its effect is worst at idle, when the engine draws little air — the leak is a large share of the total. So a vacuum leak shows high positive trims at idle that fall as the engine speeds up and the leak becomes a small share. A fuel-delivery fault — a weak pump or a clogged filter — is the opposite: it shows little at idle, when little fuel is needed, and high positive trims under load, when the engine needs much more fuel than the pump can deliver.</p>\n<p>That pattern is the diagnosis. Trims high at idle and normal under load: look for a leak. Trims normal at idle and high under load: test the fuel supply. The same pair of numbers, read at two conditions, separates the two faults without a single part being replaced.</p>\n"
    },
    {
      "heading": "Waveforms: Seeing the Signal",
      "html": "<p>A waveform is a sensor's signal drawn over time, shown on a scope. A scan tool gives you numbers; a scope gives you the shape. A crankshaft sensor should show a regular, repeating pattern; a gap in the pattern is a missing tooth or a dropped signal. An oxygen sensor should swing regularly between its high and low readings; a sensor that stays flat is dead, and one that swings slowly is tired.</p>\n<p>Reading a waveform is pattern reading, like reading gauges. You are not looking for a number — you are looking for a shape that is regular, complete, and the right size. A waveform that is missing pieces, noisy, or the wrong height points at the sensor, its wheel, or its wiring, and it does so in a way no code can.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<p><ul><li>Fuel trim is the computer's correction to fuel delivery: positive adds fuel, negative takes it away.</li><li>Short-term trim reacts at once; long-term trim is the slow average that learns the correction.</li><li>Positive trims mean a lean fault; negative trims mean a rich fault.</li><li>High trims at idle that fall under load point at a vacuum leak; high trims under load point at fuel delivery.</li><li>A waveform shows a sensor's signal over time; a regular, complete shape is healthy.</li></ul></p>\n<p><strong>Common mistake:</strong> Reading fuel trim at one condition only. The same fault looks different at idle and under load — read the trims at both, and the pattern names the fault.</p>\n<p><strong>Ready-to-Work link:</strong> If you can read a trim pair at idle and under load and say whether the fault is a leak or a delivery problem, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Fuel trim",
      "def": "The computer's adjustment to fuel delivery, shown as a percentage."
    },
    {
      "term": "Short-term fuel trim",
      "def": "The immediate, fast-changing correction based on the oxygen sensor's report."
    },
    {
      "term": "Long-term fuel trim",
      "def": "The slow average correction that the computer learns and holds."
    },
    {
      "term": "Positive trim",
      "def": "The computer adding fuel — the real mixture is lean."
    },
    {
      "term": "Negative trim",
      "def": "The computer taking fuel away — the real mixture is rich."
    },
    {
      "term": "Waveform",
      "def": "A sensor's signal drawn over time, shown on a scope."
    },
    {
      "term": "Scope",
      "def": "An oscilloscope that shows a sensor's signal as a waveform."
    },
    {
      "term": "Vacuum leak",
      "def": "A leak letting unmetered air into the intake."
    },
    {
      "term": "Fuel delivery",
      "def": "The supply of fuel from the pump through the filter to the injectors."
    },
    {
      "term": "Base calculation",
      "def": "The computer's first estimate of how much fuel to inject, before trimming."
    },
    {
      "term": "Oxygen sensor",
      "def": "The exhaust sensor whose report drives the fuel trim."
    },
    {
      "term": "Pattern reading",
      "def": "Diagnosing from the shape of data over time, not from one number."
    },
    {
      "term": "Missing tooth",
      "def": "A gap in a crankshaft sensor's waveform where a signal should be."
    },
    {
      "term": "Tired sensor",
      "def": "A sensor that still works but responds slowly."
    }
  ],
  "video": {
    "title": "False Rich O2 Sensor Diagnosis: Fuel Trims & Downstream Data",
    "embedUrl": "https://www.youtube.com/embed/H6lY42u19VM",
    "note": "ScannerDanner diagnoses a false rich oxygen sensor by comparing fuel trims with downstream sensor data and tailpipe readings. Watch how he proves the sensor is lying instead of trusting its report.",
    "more": [
      {
        "title": "Using Fuel Trim to identify type of misfire (can it be done?)",
        "url": "https://www.youtube.com/watch?v=G_89r12vZFw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem.</strong> Explain the difference between short-term and long-term fuel trim in two sentences.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Short-term trim reacts at once, changing many times a second with the oxygen sensor's report. Step 2: Long-term trim is the slow average — if the short-term trim keeps adding fuel, the long-term trim learns that correction and holds it.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Fuel trims read positive at idle and near zero under load. What fault does that point at, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A vacuum leak. Step 2: At idle the leak is a large share of the small amount of air the engine draws, so the computer adds a lot of fuel. Step 3: Under load the leak is a small share, so the trims fall back toward zero.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Fuel trims read near zero at idle and high positive under load. What fault does that point at, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A fuel-delivery fault, such as a weak pump or a clogged filter. Step 2: At idle the engine needs little fuel, so the fault hides. Step 3: Under load it needs much more fuel than the pump can deliver, so the computer adds fuel to compensate.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> A trim pair is negative. What does that mean, in plain words?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The computer is taking fuel away. Step 2: The real mixture is rich — too much fuel is arriving, or the sensor is lying about it. Step 3: The next test is to find the extra fuel or test the sensor.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> An oxygen sensor's waveform stays flat instead of swinging regularly. What does that tell you?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The sensor is not reporting the mixture changing. Step 2: A flat waveform means the sensor is dead or stuck. Step 3: It must be tested and replaced — the computer has no good mixture report while it is flat.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Why is a scope better than a scan tool for finding an intermittent crankshaft sensor fault?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A scan tool gives numbers; a scope gives the shape of the signal over time. Step 2: A dropped signal shows as a gap in the waveform, even if it lasts only a moment. Step 3: A number on a scan tool may look normal between dropouts, but the waveform shows the gap.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Fuel trim is:",
      "choices": [
        "The amount of fuel in the tank",
        "The computer's adjustment to fuel delivery, shown as a percentage",
        "The pressure in the fuel rail",
        "The size of the injector"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Trim is the correction the computer makes from its base calculation. (a) Tank level is the fuel gauge. (c) Rail pressure is set by the regulator. (d) Injector size is fixed."
    },
    {
      "q": "A positive fuel trim means the computer is:",
      "choices": [
        "Taking fuel away",
        "Adding fuel, because the real mixture is lean",
        "Ignoring the oxygen sensor",
        "Shutting off an injector"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Positive trim adds fuel to compensate for a lean mixture. (a) That is a negative trim. (c) Trim is driven by the oxygen sensor. (d) Injectors are not shut off by trim."
    },
    {
      "q": "Short-term fuel trim differs from long-term trim because it:",
      "choices": [
        "Changes slowly over weeks",
        "Reacts at once, changing many times a second with the oxygen sensor's report",
        "Is set by the driver",
        "Only works at idle"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Short-term trim is the immediate correction. (a) That describes long-term trim. (c) The driver does not set trim. (d) Trim works at all speeds."
    },
    {
      "q": "High positive trims at idle that fall under load point at:",
      "choices": [
        "A weak fuel pump",
        "A vacuum leak letting in unmetered air",
        "A clogged fuel filter",
        "A failed catalytic converter"
      ],
      "answer": 1,
      "explanation": "Correct: (b). At idle the leak is a large share of the air drawn in, so the trim is high; under load it is a small share. (a) A weak pump shows the opposite pattern. (c) A clogged filter also shows under load. (d) The converter does not move fuel trim."
    },
    {
      "q": "High positive trims under load with normal trims at idle point at:",
      "choices": [
        "A vacuum leak",
        "A fuel-delivery fault, such as a weak pump or clogged filter",
        "A dirty cabin filter",
        "A worn spark plug"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Under load the engine needs much more fuel than a weak supply can deliver. (a) A vacuum leak shows at idle. (c) The cabin filter is unrelated. (d) A worn plug causes a misfire, not a trim climb."
    },
    {
      "q": "A negative fuel trim means:",
      "choices": [
        "The real mixture is lean",
        "The real mixture is rich, and the computer is taking fuel away",
        "The sensor is dead",
        "The engine is off"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Negative trim cuts fuel to compensate for a rich mixture. (a) That is a positive trim. (c) A dead sensor gives a flat reading, not a negative trim. (d) Trim is zero when the engine is off."
    },
    {
      "q": "A waveform on a scope shows:",
      "choices": [
        "A single number",
        "A sensor's signal drawn over time — its shape",
        "The fuel level",
        "The tyre pressure"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A scope draws the signal's shape, so gaps and noise are visible. (a) A scan tool gives numbers. (c) Fuel level is a gauge. (d) Tyres are unrelated."
    },
    {
      "q": "An oxygen sensor waveform that stays flat instead of swinging means the sensor is:",
      "choices": [
        "Working perfectly",
        "Dead or stuck — it is not reporting the mixture changing",
        "Reading too fast",
        "Too hot"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A healthy sensor swings regularly; a flat line means it is not responding. (a) A working sensor swings. (c) Flat is the opposite of too fast. (d) Heat is not shown by a flat line."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Fuel Trim & Waveform Analysis: Quick Reference</h3>\n<p><strong>Fuel trim:</strong> The computer's correction to fuel delivery. Positive = adding fuel (lean fault). Negative = taking fuel away (rich fault).</p>\n<p><strong>Two trims:</strong> Short-term reacts at once; long-term is the slow average that learns the correction.</p>\n<p><strong>Pattern:</strong> High trims at idle, falling under load = vacuum leak. Normal at idle, high under load = fuel delivery.</p>\n<p><strong>Waveform:</strong> A sensor's signal over time on a scope. Regular and complete = healthy; gaps or flat = faulty.</p>\n<p><strong>Self-check:</strong> Read a trim pair at idle and under load and say whether the fault is a leak or a delivery problem.</p>\n"
};
