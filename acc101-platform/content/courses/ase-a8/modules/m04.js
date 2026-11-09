// Auto-generated original course content for College Without College
module.exports = {
  "number": 4,
  "slug": "air-induction-forced-induction",
  "title": "Air Induction & Forced Induction",
  "estTime": "3–4 hours",
  "objectives": [
    "Trace air from the intake to the cylinder.",
    "Explain what the air filter, throttle, and intake manifold do.",
    "Explain how a turbocharger uses exhaust energy to push more air in.",
    "Explain what an intercooler does and why it matters.",
    "Diagnose air leaks, a blocked filter, and a turbo that is not boosting."
  ],
  "sections": [
    {
      "heading": "The Air Path",
      "html": "<p>Air enters through the intake, passes the air filter, and flows past the throttle — the flap the driver controls with the pedal — into the intake manifold and then into the cylinders. The engine is an air pump: the more air it can draw in, the more fuel it can burn, and the more power it can make. Anything that restricts that path, from a blocked filter to a collapsed hose, starves the engine of air and costs power.</p>\n<p>The air filter's job is to catch dirt before it reaches the engine, where grit would wear cylinders and valves. A blocked filter is a quiet fault: the car still runs, but it feels flat, especially under load, and fuel economy falls because the computer must work around the restriction.</p>\n"
    },
    {
      "heading": "The Throttle and the Manifold",
      "html": "<p>The throttle is a flap in the intake that controls how much air the engine can draw in. At idle it is nearly closed, letting in only a little air; when the driver presses the pedal, it opens and the engine breathes freely. On many cars the throttle is driven by a small motor under the computer's control, not by a cable from the pedal — which is why a throttle fault can set a code and put the car into a limited-power mode.</p>\n<p>The intake manifold distributes the air to the cylinders, and its shape matters: each cylinder should get the same amount of air. A leak in the manifold or in a vacuum hose lets in air the computer did not measure — unmetered air — so the mixture goes lean and the idle goes rough. Finding that leak is a matter of listening for a hiss and testing with care around the joints.</p>\n"
    },
    {
      "heading": "Turbocharging: Free Power from Waste",
      "html": "<p>A turbocharger is two fans on one shaft. Hot exhaust gas spins the turbine wheel, and the turbine drives a compressor wheel that pushes extra air into the engine. Because the energy comes from exhaust gas that would otherwise be wasted, a turbocharged engine can make the power of a bigger engine from a smaller one. The shaft spins very fast, and it is lubricated and cooled by engine oil, so clean oil and a cool-down after hard driving matter.</p>\n<p>The extra air is called boost. More air means more fuel can be burned, which means more power — but only if the extra air is cool and dense. Hot compressed air is less dense, so it carries less oxygen, which is where the intercooler comes in.</p>\n"
    },
    {
      "heading": "The Intercooler and Boost Control",
      "html": "<p>Compressing air heats it, and hot air is thin air. The intercooler is a heat exchanger in the intake path that cools the compressed air before it reaches the engine, making it denser so each cylinder gets more oxygen. A leaking intercooler or a split boost hose lets that compressed air escape, so boost falls and power fades — often with a whistling noise under load.</p>\n<p>Boost is controlled by a wastegate, a valve that lets some exhaust gas bypass the turbine when enough boost is reached. If the wastegate sticks open, boost never builds; if it sticks shut, boost can climb too high and the computer will cut power to protect the engine. Either way, the symptom is a car that does not pull the way it should.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<p><ul><li>Air path: intake → filter → throttle → manifold → cylinders.</li><li>A blocked air filter starves the engine, especially under load.</li><li>A turbo uses exhaust gas to drive a compressor that pushes extra air in.</li><li>The intercooler cools compressed air so it is denser and carries more oxygen.</li><li>A leak after the airflow sensor lets in unmetered air and makes the mixture lean.</li></ul></p>\n<p><strong>Common mistake:</strong> Chasing a fuel fault for a flat, gutless car without checking the air filter and the boost hoses first. Air is half the mixture — test it first.</p>\n<p><strong>Ready-to-Work link:</strong> If you can trace air from the intake to the cylinder and explain what the intercooler does, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Air filter",
      "def": "The filter that catches dirt before it reaches the engine."
    },
    {
      "term": "Throttle",
      "def": "The flap that controls how much air the engine can draw in."
    },
    {
      "term": "Intake manifold",
      "def": "The passages that distribute air from the throttle to the cylinders."
    },
    {
      "term": "Turbocharger",
      "def": "A turbine and compressor on one shaft that uses exhaust gas to push extra air into the engine."
    },
    {
      "term": "Turbine",
      "def": "The wheel spun by exhaust gas in a turbocharger."
    },
    {
      "term": "Compressor",
      "def": "The wheel in a turbocharger that pushes air into the engine."
    },
    {
      "term": "Boost",
      "def": "The extra intake pressure a turbocharger creates."
    },
    {
      "term": "Intercooler",
      "def": "The heat exchanger that cools compressed air before it reaches the engine."
    },
    {
      "term": "Wastegate",
      "def": "The valve that lets exhaust gas bypass the turbine to limit boost."
    },
    {
      "term": "Unmetered air",
      "def": "Air that enters the engine without passing the airflow sensor, so the computer does not know about it."
    },
    {
      "term": "Vacuum leak",
      "def": "A leak that lets unmetered air into the intake, making the mixture lean."
    },
    {
      "term": "Boost hose",
      "def": "A hose carrying compressed air from the turbocharger to the engine."
    },
    {
      "term": "Air pump",
      "def": "A way of thinking about the engine: it draws air in, burns fuel in it, and pushes exhaust out."
    },
    {
      "term": "Flat",
      "def": "A car that feels gutless and will not pull, often from an air or boost fault."
    }
  ],
  "video": {
    "title": "How a turbocharger works! (Animation)",
    "embedUrl": "https://www.youtube.com/embed/DqWKNuTppmU",
    "note": "An animation of a turbocharger: exhaust gas spins a turbine, which drives a compressor that pushes more air into the engine. Watch the two sides — the hot exhaust side and the cool intake side — and how they share one shaft.",
    "more": [
      {
        "title": "Turbochargers Explained | How Single, Twin-Scroll, VGT & Electric Turbocharger Works?",
        "url": "https://www.youtube.com/watch?v=iS0XxIcdcu4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem.</strong> Trace the air path from outside the car to a cylinder, naming each part in order.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Air enters the intake and passes the air filter. Step 2: It flows past the throttle into the intake manifold. Step 3: The manifold distributes it to the cylinders.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Explain how a turbocharger makes more power without a bigger engine.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Exhaust gas spins the turbine wheel. Step 2: The turbine drives a compressor wheel on the same shaft, pushing extra air into the engine. Step 3: More air means more fuel can be burned, so the engine makes more power.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Why does compressed air need an intercooler before it reaches the engine?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Compressing air heats it, and hot air is less dense. Step 2: Less dense air carries less oxygen per cylinder. Step 3: The intercooler cools the air, making it denser so each cylinder gets more oxygen.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> A car idles roughly and the mixture is lean. A hiss is heard near the intake manifold. What is the most likely fault?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A vacuum leak — unmetered air entering through the manifold or a hose. Step 2: The computer did not measure that air, so it gave too little fuel. Step 3: The mixture goes lean and the idle goes rough.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> A turbocharged car has lost power and whistles under load. What should you check first?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The boost hoses and the intercooler for a split or a leak. Step 2: Compressed air escaping makes a whistle and boost falls. Step 3: Check the hoses before suspecting the turbo itself.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Explain what the wastegate does, and what happens if it sticks open.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The wastegate lets exhaust gas bypass the turbine to limit boost. Step 2: If it sticks open, exhaust gas bypasses the turbine all the time. Step 3: Boost never builds, so the car feels flat and gutless.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The engine draws air in through:",
      "choices": [
        "The exhaust",
        "The intake, air filter, throttle, and manifold",
        "The fuel tank",
        "The radiator"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Air enters the intake, is filtered, passes the throttle, and is distributed by the manifold. (a) Exhaust leaves the engine. (c) The tank holds fuel. (d) The radiator cools coolant."
    },
    {
      "q": "A blocked air filter makes a car feel flat because:",
      "choices": [
        "It lets too much air in",
        "It starves the engine of air, especially under load",
        "It makes the fuel rich",
        "It stops the spark"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A blocked filter restricts the air the engine can draw in. (a) A blockage cuts air, not adds it. (c) Less air with the same fuel can make the mixture rich, but the flat feeling is the air starvation. (d) The filter does not affect spark."
    },
    {
      "q": "A turbocharger is powered by:",
      "choices": [
        "The engine's belt",
        "Hot exhaust gas spinning a turbine",
        "The battery",
        "The cooling fan"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Exhaust gas spins the turbine, which drives the compressor. (a) A belt drives the alternator and the A/C compressor. (c) The battery starts the car. (d) The fan cools the radiator."
    },
    {
      "q": "The intercooler's job is to:",
      "choices": [
        "Heat the intake air",
        "Cool compressed air so it is denser and carries more oxygen",
        "Filter the intake air",
        "Pump fuel"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Cool, dense air carries more oxygen per cylinder. (a) Heating would make the air thinner. (c) Filtering is the air filter's job. (d) Pumping fuel is the fuel pump's job."
    },
    {
      "q": "Unmetered air is air that:",
      "choices": [
        "Passes through the airflow sensor",
        "Enters the engine without passing the airflow sensor, so the computer does not know about it",
        "Is too hot to use",
        "Comes from the exhaust"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A leak after the sensor lets air in unmeasured, so the mixture goes lean. (a) That is metered air. (c) Temperature is not the issue. (d) Exhaust air does not enter the intake."
    },
    {
      "q": "The wastegate controls boost by:",
      "choices": [
        "Closing the throttle",
        "Letting exhaust gas bypass the turbine when enough boost is reached",
        "Opening the intercooler",
        "Shutting off the fuel pump"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Bypassing the turbine limits how fast it spins and how much boost it makes. (a) The throttle controls airflow. (c) The intercooler has no such valve. (d) The fuel pump is unrelated."
    },
    {
      "q": "A split boost hose typically causes:",
      "choices": [
        "More power",
        "Lost boost and a whistling noise under load, as compressed air escapes",
        "A cooler engine",
        "Better fuel economy"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Compressed air escapes through the split, so boost falls and power fades. (a) Lost boost means less power. (c) The hose does not cool the engine. (d) Lost boost wastes fuel."
    },
    {
      "q": "The throttle controls:",
      "choices": [
        "How much fuel is injected",
        "How much air the engine can draw in",
        "How hot the exhaust is",
        "How fast the turbo spins"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The throttle flap sets the airflow into the engine. (a) Fuel is metered by the injectors. (c) Exhaust temperature follows the burn. (d) Turbo speed follows exhaust flow."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Air Induction & Forced Induction: Quick Reference</h3>\n<p><strong>Air path:</strong> Intake → Filter → Throttle → Manifold → Cylinders.</p>\n<p><strong>Turbo:</strong> Exhaust gas spins a turbine, which drives a compressor that pushes extra air in. More air = more fuel can be burned = more power.</p>\n<p><strong>Intercooler:</strong> Cools compressed air so it is denser and carries more oxygen.</p>\n<p><strong>Watch out:</strong> A leak after the airflow sensor lets in unmetered air and makes the mixture lean.</p>\n<p><strong>Self-check:</strong> Trace air from the intake to the cylinder and explain what the intercooler does.</p>\n"
};
