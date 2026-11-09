// Auto-generated original course content for College Without College
module.exports = {
  "number": 3,
  "slug": "fuel-systems-injection",
  "title": "Fuel Systems & Injection",
  "estTime": "3–4 hours",
  "objectives": [
    "Trace fuel from the tank to the cylinder.",
    "Explain what the fuel pump, filter, and pressure regulator do.",
    "Compare port injection with direct injection.",
    "Explain how an injector opens and closes, and what injector pulse width means.",
    "Diagnose low fuel pressure, a leaking injector, and a clogged injector."
  ],
  "sections": [
    {
      "heading": "From Tank to Cylinder",
      "html": "<p>Fuel starts in the tank, where an electric pump pushes it through a filter and along a line to the engine. A pressure regulator holds the fuel pressure steady, sending extra fuel back to the tank. At the engine, injectors spray fuel into the intake ports or directly into the cylinders, timed by the computer. Every part in that chain must do its job, or the mixture goes wrong.</p>\n<p>Low fuel pressure is one of the most common performance faults, and one of the easiest to test: a pressure gauge on the fuel rail tells you in a minute whether the pump and regulator are holding pressure. A pump that cannot hold pressure after the engine is switched off points at a leaking injector, a failed regulator, or a pump that cannot hold its prime.</p>\n"
    },
    {
      "heading": "The Pump, the Filter, and the Regulator",
      "html": "<p>The electric fuel pump sits in the tank, cooled and lubricated by the fuel around it — one reason running a tank very low again and again is hard on pumps. The filter catches dirt before it reaches the injectors, where a speck can block a spray hole. The regulator holds pressure steady by returning extra fuel to the tank, so the injectors always see the same pressure and the computer can meter fuel by time alone.</p>\n<p>A clogged filter starves the engine at high demand: the car idles fine but stumbles when the driver asks for power, because the filter cannot pass enough fuel. A failed regulator can send pressure too high, making the mixture rich, or too low, making it lean. Either way, the symptom is driveability, and the test is a gauge.</p>\n"
    },
    {
      "heading": "Port Injection and Direct Injection",
      "html": "<p>In port injection, the injector sprays fuel into the intake port, just before the valve, where it mixes with the air on its way into the cylinder. In direct injection, the injector sprays fuel straight into the cylinder, at much higher pressure, timed to the compression stroke. Direct injection gives the computer finer control and can improve efficiency, but its injectors work harder and its intake valves can collect deposits, because no fuel washes over them.</p>\n<p>A technician needs to know which system the car has before testing: the pressures, the injector locations, and the test methods are different. The diagnostic thinking is the same — is the right amount of fuel arriving at the right time? — but the numbers and the tools change.</p>\n"
    },
    {
      "heading": "How an Injector Works",
      "html": "<p>An injector is an electrically operated valve. The computer sends it a pulse of current, the valve opens, fuel sprays, and the valve closes when the pulse ends. The length of that pulse — the pulse width — is how the computer controls the amount of fuel: a longer pulse means more fuel. At idle the pulses are short; under load they are long.</p>\n<p>An injector can fail in three ways: it can stick closed and deliver no fuel, stick open and flood its cylinder, or clog and deliver too little. A leaking injector can also drip fuel into a cylinder after the engine is switched off, making the next start hard and the exhaust smell of fuel. Testing means checking the spray pattern, the electrical signal, and whether the cylinder's fuel delivery matches the others.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<p><ul><li>Fuel path: tank → pump → filter → rail → injectors, with the regulator holding pressure steady.</li><li>Low pressure is tested with a gauge on the fuel rail — a one-minute test that rules out a whole family of faults.</li><li>Port injection sprays into the port; direct injection sprays into the cylinder at higher pressure.</li><li>Injector pulse width is how the computer meters fuel: longer pulse, more fuel.</li><li>An injector can stick closed, stick open, or clog — each gives a different symptom.</li></ul></p>\n<p><strong>Common mistake:</strong> Replacing injectors for a lean complaint without checking fuel pressure first. A weak pump or a clogged filter starves every injector at once — and no new injector can fix that.</p>\n<p><strong>Ready-to-Work link:</strong> If you can trace fuel from the tank to the cylinder and say what pulse width means, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Fuel pump",
      "def": "The electric pump in the tank that pushes fuel to the engine."
    },
    {
      "term": "Fuel filter",
      "def": "The filter that catches dirt before it reaches the injectors."
    },
    {
      "term": "Pressure regulator",
      "def": "The part that holds fuel pressure steady by returning extra fuel to the tank."
    },
    {
      "term": "Fuel rail",
      "def": "The pipe that carries pressurised fuel to the injectors."
    },
    {
      "term": "Injector",
      "def": "The electrically operated valve that sprays fuel into the port or the cylinder."
    },
    {
      "term": "Pulse width",
      "def": "The length of the electrical pulse that opens an injector — longer means more fuel."
    },
    {
      "term": "Port injection",
      "def": "Fuel sprayed into the intake port, just before the valve."
    },
    {
      "term": "Direct injection",
      "def": "Fuel sprayed straight into the cylinder, at higher pressure."
    },
    {
      "term": "Fuel pressure gauge",
      "def": "The gauge connected to the fuel rail to test pump and regulator pressure."
    },
    {
      "term": "Lean",
      "def": "Too little fuel for the air — the mixture is weak."
    },
    {
      "term": "Rich",
      "def": "Too much fuel for the air — the mixture is heavy."
    },
    {
      "term": "Flooding",
      "def": "Too much fuel in a cylinder, so it will not fire properly."
    },
    {
      "term": "Priming",
      "def": "The pump building pressure before the engine starts."
    },
    {
      "term": "Spray pattern",
      "def": "The shape of the fuel spray from an injector; a bad pattern means a clogged or worn injector."
    }
  ],
  "video": {
    "title": "Quick Diagnosis of a '97 Chevy with a Fuel Pressure Problem",
    "embedUrl": "https://www.youtube.com/embed/EB3hE6tCOic",
    "note": "ScannerDanner diagnoses a fuel-pressure problem on a '97 Chevy. Watch how he checks pressure before replacing parts, and how a fuel fault shows up as a driveability complaint.",
    "more": [
      {
        "title": "Using Fuel Trim to identify type of misfire (can it be done?)",
        "url": "https://www.youtube.com/watch?v=G_89r12vZFw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem.</strong> Trace the fuel path from the tank to the cylinder, naming each part in order.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Electric pump in the tank pushes fuel through the filter. Step 2: Fuel travels along the line to the fuel rail. Step 3: The regulator holds the pressure steady, and the injectors spray fuel into the ports or cylinders.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> A car idles fine but stumbles when the driver accelerates hard. What is the most likely fuel fault, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A clogged fuel filter or a weak pump. Step 2: At idle the engine needs little fuel, so the fault hides. Step 3: Under load it needs much more fuel, and the filter or pump cannot deliver it.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Explain what injector pulse width means, and how it changes between idle and full load.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Pulse width is how long the computer holds the injector open. Step 2: A longer pulse means more fuel. Step 3: At idle the pulses are short; under load they are long, because the engine needs more fuel.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Compare port injection and direct injection in two sentences.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Port injection sprays fuel into the intake port before the valve, where it mixes with air on the way in. Step 2: Direct injection sprays fuel straight into the cylinder at higher pressure, giving finer control.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Fuel pressure falls quickly after the engine is switched off. Name two possible causes.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A leaking injector dripping fuel into a cylinder. Step 2: A failed pressure regulator, or a pump that cannot hold its prime. Step 3: The test is to watch the gauge and find which part is letting pressure go.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Why should fuel pressure be tested before any injector is replaced for a lean complaint?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A weak pump or clogged filter starves every injector at once. Step 2: No new injector can fix a supply fault. Step 3: A one-minute gauge test rules out the whole supply side before any injector is touched.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The fuel pump's job is to:",
      "choices": [
        "Filter the fuel",
        "Push fuel from the tank to the engine",
        "Spray fuel into the cylinder",
        "Hold pressure steady"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The pump pushes fuel along the line to the rail. (a) That is the filter. (c) That is the injector. (d) That is the regulator."
    },
    {
      "q": "The pressure regulator holds fuel pressure steady by:",
      "choices": [
        "Pumping harder",
        "Returning extra fuel to the tank",
        "Closing the injectors",
        "Cooling the fuel"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Extra fuel is sent back to the tank so rail pressure stays steady. (a) The pump's speed is not the regulator's job. (c) Injectors are timed by the computer. (d) The regulator does not cool fuel."
    },
    {
      "q": "Injector pulse width is:",
      "choices": [
        "The size of the injector",
        "How long the computer holds the injector open — longer means more fuel",
        "The pressure in the fuel rail",
        "The temperature of the fuel"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Pulse width is time open, and time open sets the amount of fuel. (a) Size is fixed. (c) Rail pressure is set by the regulator. (d) Temperature is not pulse width."
    },
    {
      "q": "A car that idles fine but stumbles under load most likely has:",
      "choices": [
        "A failed spark plug",
        "A clogged fuel filter or a weak pump that cannot deliver enough fuel at high demand",
        "A dirty cabin filter",
        "A worn tyre"
      ],
      "answer": 1,
      "explanation": "Correct: (b). High demand exposes a supply fault that hides at idle. (a) A failed plug misfires at idle too. (c) The cabin filter affects cabin air. (d) Tyres do not affect fuel delivery."
    },
    {
      "q": "Port injection sprays fuel:",
      "choices": [
        "Straight into the cylinder",
        "Into the intake port, just before the valve",
        "Into the exhaust",
        "Into the fuel tank"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Port injectors spray before the valve, mixing with air on the way in. (a) That is direct injection. (c) Fuel never goes into the exhaust. (d) Fuel leaves the tank, it is not sprayed into it."
    },
    {
      "q": "Direct injection differs from port injection because it:",
      "choices": [
        "Sprays fuel straight into the cylinder at higher pressure",
        "Uses no injectors",
        "Sprays fuel into the exhaust",
        "Works without a pump"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Direct injectors spray into the cylinder at much higher pressure. (b) It uses injectors. (c) Fuel never goes into the exhaust. (d) It needs a high-pressure pump."
    },
    {
      "q": "A leaking injector can cause:",
      "choices": [
        "Hard starting and a smell of fuel, because it drips fuel into a cylinder after switch-off",
        "Better fuel economy",
        "A cooler engine",
        "Stronger spark"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Dripping fuel floods the cylinder and makes the next start hard. (b) Leaking wastes fuel. (c) Flooding does not cool the engine. (d) Injectors do not affect spark."
    },
    {
      "q": "The first test for a suspected fuel-supply fault is:",
      "choices": [
        "Replacing all the injectors",
        "A fuel-pressure gauge on the fuel rail",
        "Checking the cabin filter",
        "Reading the tyre pressures"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A gauge tells you in a minute whether pump and regulator hold pressure. (a) Replacing parts without testing is guessing. (c) The cabin filter is unrelated. (d) Tyres are unrelated."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Fuel Systems & Injection: Quick Reference</h3>\n<p><strong>Fuel path:</strong> Tank → Pump → Filter → Rail → Injectors, with the regulator holding pressure steady.</p>\n<p><strong>Test first:</strong> A fuel-pressure gauge on the rail rules out the whole supply side in a minute.</p>\n<p><strong>Injection:</strong> Port = into the port before the valve. Direct = into the cylinder at higher pressure.</p>\n<p><strong>Pulse width:</strong> How long the injector stays open — longer pulse, more fuel.</p>\n<p><strong>Self-check:</strong> Trace fuel from the tank to the cylinder and say what pulse width means.</p>\n"
};
