// ase-a6 - Module 2: Batteries
module.exports = {
  "number": 2,
  "slug": "batteries",
  "title": "Batteries",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a car battery does and how it stores energy.",
    "Describe how a lead-acid battery is built and how it makes voltage.",
    "Explain what battery capacity means and why it matters on a cold morning.",
    "Test a battery: state of charge, voltage, and load testing.",
    "Recognize a failing battery and the safety rules for working around one."
  ],
  "sections": [
    {
      "heading": "What the Battery Does",
      "html": "<p>The battery is the car's electrical reservoir. Its jobs are threefold: it <strong>starts the engine</strong> by supplying a large current to the starter motor for a few seconds; it <strong>powers the car's electrical loads</strong> when the engine is off — lights, computers, the radio, the alarm; and it <strong>steadies the electrical system</strong> while the engine runs, absorbing the surges and dips from the alternator and the loads switching on and off. Without it, the car could not start, and its electronics would be at the mercy of every voltage spike.</p>\n<p>Once the engine is running, the alternator takes over as the source and recharges the battery, replacing the energy the starter took. A battery that is never recharged — a car that only ever makes short trips, or a car with a charging fault — slowly runs down, and one morning it cannot turn the starter fast enough. That slow decline is why batteries usually fail on a cold morning: cold thickens the engine oil, so the starter needs more current, at exactly the moment the cold battery can deliver less of it.</p>"
    },
    {
      "heading": "How a Lead-Acid Battery Works",
      "html": "<p>Almost every car battery is a <strong>lead-acid battery</strong>: a plastic case divided into six cells, each holding lead plates in a bath of sulfuric acid and water. A chemical reaction between the plates and the acid moves electrons from one plate to the other, and that movement is the voltage — each cell makes about two volts, so six cells in series make the battery's nominal voltage. Connect a load across the terminals and the reaction runs, pushing current through the load; recharge the battery and the reaction reverses, restoring the plates.</p>\n<p>The battery's terminals are marked positive and negative, and the cables are sized for the huge current the starter draws — far more than any other load in the car. That is why battery cables are thick, why their connections must be clean and tight, and why a corroded terminal can stop a car from starting even when the battery itself is healthy: the current cannot get out of the battery and into the starter.</p>"
    },
    {
      "heading": "Capacity and Cold Weather",
      "html": "<p>Battery <strong>capacity</strong> is how much energy the battery can store, and it is measured in amp-hours: a battery that can deliver a given current for a given time. A bigger capacity means the battery can run the loads longer with the engine off, and can supply the starter for longer before it runs down. The other rating that matters is the battery's ability to deliver a large current in the cold — the colder it is, the harder the starter has to work and the less current the battery can give, which is why a battery that starts a car fine in summer can fail on the first cold morning of winter.</p>\n<p>Age wears a battery down. The plates sulfate — they grow a coating that blocks the chemical reaction — and the battery holds less and less charge. A battery that needs jump-starting more than once is telling you it is at the end of its life, not that it had one bad morning. Jump-starting it again and again is not a repair.</p>"
    },
    {
      "heading": "Testing a Battery",
      "html": "<p>Testing a battery takes three steps. First, <strong>state of charge</strong>: measure the battery's voltage with the engine off and no loads on. A fully charged battery reads higher than a partly charged one, and a low reading means the battery needs charging before any further test is meaningful — testing a flat battery tells you nothing about its health. Second, <strong>inspect</strong>: look for corrosion on the terminals, a swollen or cracked case, and a low electrolyte level in a battery that has caps. Third, <strong>load test</strong>: apply a heavy load for a short time and watch the voltage. A healthy battery holds its voltage under load; a worn battery's voltage collapses.</p>\n<p>A battery can pass a voltage test and fail a load test — voltage with no load is easy, and a worn battery can still show a good resting voltage while being unable to deliver current when asked. That is why the load test is the deciding test, and why a battery that reads well but cannot start the car is still a bad battery.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>The battery starts the engine, powers loads with the engine off, and steadies the system while it runs.</li>\n<li>A lead-acid battery has six cells of lead plates in acid; each cell makes about two volts.</li>\n<li>Capacity (amp-hours) is how much energy the battery stores; cold weather raises the starter's demand and lowers what the battery can give.</li>\n<li>Test in order: state of charge (voltage, engine off), inspect (corrosion, case, level), load test (voltage under a heavy load).</li>\n<li>A battery can show good voltage and still fail a load test — the load test decides.</li>\n<li>Safety: batteries make explosive gas and contain acid. No sparks or flames near a battery, wear eye protection, and wash off any acid with water.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Replacing a battery when the real fault is a corroded terminal or a charging problem. Clean the terminals, test the battery properly, and test the charging system — in that order — before buying a new battery.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain why a battery fails on a cold morning and why a load test beats a voltage reading, you have this module. Module 3 follows the battery's biggest load: the starting system.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Battery",
      "def": "The car's electrical reservoir: it starts the engine, powers loads with the engine off, and steadies the system while it runs."
    },
    {
      "term": "Lead-acid battery",
      "def": "A battery with lead plates in sulfuric acid and water; the chemical reaction between them makes the voltage."
    },
    {
      "term": "Cell",
      "def": "One of the six compartments in a car battery; each cell makes about two volts."
    },
    {
      "term": "State of charge",
      "def": "How full a battery is, measured by its voltage with the engine off and no loads on."
    },
    {
      "term": "Load test",
      "def": "A battery test that applies a heavy load for a short time and watches whether the voltage holds up."
    },
    {
      "term": "Capacity",
      "def": "How much energy a battery can store, measured in amp-hours."
    },
    {
      "term": "Amp-hour",
      "def": "A unit of battery capacity: the current a battery can deliver over time."
    },
    {
      "term": "Terminal",
      "def": "The positive or negative post on a battery where the cables connect."
    },
    {
      "term": "Corrosion",
      "def": "The crusty buildup on battery terminals that resists current flow and can stop a car from starting."
    },
    {
      "term": "Electrolyte",
      "def": "The acid-and-water liquid inside a battery that the chemical reaction happens in."
    },
    {
      "term": "Sulfation",
      "def": "The coating that grows on battery plates with age and use, reducing the battery's ability to hold charge."
    },
    {
      "term": "Jump-start",
      "def": "Starting a car from another battery or a jump pack when its own battery cannot turn the starter."
    },
    {
      "term": "Cold-cranking demand",
      "def": "The extra current the starter needs in cold weather, when the engine oil is thick and the battery can deliver less."
    },
    {
      "term": "Battery cable",
      "def": "The thick cable that carries the starter's large current between the battery and the starter."
    },
    {
      "term": "Swollen case",
      "def": "A battery case that has bulged, usually from internal damage or freezing — a sign the battery must be replaced."
    }
  ],
  "video": {
    "title": "How to Test a Car Battery with a Multimeter",
    "embedUrl": "https://www.youtube.com/embed/COJr7OB23Hw",
    "note": "ChrisFix shows how to test a car battery with a multimeter, step by step. Watch the order — voltage first, then the load — and match it to the testing order in this module.",
    "more": [
      {
        "title": "How A Car Battery Works - basic working principle",
        "url": "https://www.youtube.com/watch?v=VnPRX5zQWLw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A car will not start on a cold morning, but it started fine all summer. Explain why cold weather exposes a weak battery.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Cold thickens the engine oil, so the starter needs more current to turn the engine. Step 2: Cold also reduces what the battery can deliver. Step 3: The weak battery could meet the smaller summer demand but cannot meet the bigger winter demand — the cold morning is the test it finally fails.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A battery reads a healthy voltage with the engine off, but the car still will not start and the voltage collapses when the starter is cranked. What does that tell you, and what is the deciding test?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Resting voltage is easy — a worn battery can still show a good voltage with no load. Step 2: The voltage collapsing under load means the battery cannot deliver current when asked. Step 3: The load test is the deciding test, and this battery fails it — it needs replacing, not charging.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A battery is rated at 70 amp-hours. A load draws 7 amps. How many hours could the battery run that load, in theory? Show the working.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Capacity in amp-hours divided by the current in amps gives the hours. Step 2: 70 ÷ 7 = 10. Step 3: In theory the battery could run a 7-amp load for 10 hours — in practice less, because a battery cannot give up all of its stored energy usefully.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A car's battery terminals are covered in crusty corrosion and the car cranks slowly. What is the most likely cause, and what do you do first?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Corrosion on the terminals resists the starter's large current, so the starter turns slowly even though the battery may be healthy. Step 2: Clean the terminals and the cable ends, then tighten them properly. Step 3: Re-test — only replace the battery if it still fails a proper load test after the connections are clean.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List the battery safety rules you follow when working around a battery.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Wear eye protection — batteries contain acid and make explosive gas. Step 2: No sparks, flames, or smoking near a battery. Step 3: Connect and disconnect in the right order, and never short the terminals with a tool. Step 4: Wash off any acid with plenty of water and wash your hands after handling a battery.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A battery needs jump-starting twice in one week. The owner wants to keep jump-starting it. What do you tell them, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A battery that needs jump-starting more than once is at the end of its life, not having one bad morning. Step 2: Its plates are sulfated and it holds less and less charge. Step 3: Keep jump-starting it and it will fail completely, probably at the worst moment — test it properly and replace it.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The battery's three jobs are to:",
      "choices": [
        "Start the engine, power loads with the engine off, and steady the electrical system",
        "Pump fuel, cool the engine, and light the road",
        "Charge the alternator, run the radio, and open the windows",
        "Make spark, spray fuel, and shift gears"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Starting, powering loads with the engine off, and steadying the system are the battery's three jobs. (b) Those are fuel, cooling, and lighting jobs. (c) The alternator charges the battery, not the other way around. (d) Those are ignition, fuel, and transmission jobs."
    },
    {
      "q": "A car battery has six cells because:",
      "choices": [
        "Each cell makes about two volts, and six in series make the battery's nominal voltage",
        "Six is the legal minimum",
        "Each cell powers one cylinder",
        "The alternator needs six cells"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Six two-volt cells in series give the battery its voltage. (b) There is no legal minimum of six cells. (c) Cells do not power individual cylinders. (d) The alternator charges the battery; it does not need six cells."
    },
    {
      "q": "A battery that shows good resting voltage but collapses under load is:",
      "choices": [
        "Healthy",
        "Worn out — it cannot deliver current when asked, and it fails the load test",
        "Overcharged",
        "Too new"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Resting voltage is easy; the load test decides, and this battery fails it. (a) A healthy battery holds its voltage under load. (c) Overcharging shows as high voltage and damage, not collapse under load. (d) A new battery would hold its voltage."
    },
    {
      "q": "Cold weather makes starting harder because:",
      "choices": [
        "The battery gets bigger",
        "Cold thickens the oil so the starter needs more current, while the cold battery can deliver less",
        "The fuel freezes solid",
        "The tires get flat"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Cold raises demand and lowers supply at the same time — that is why weak batteries fail on cold mornings. (a) Batteries do not get bigger in the cold. (c) Fuel does not freeze solid in a car. (d) Tires lose some pressure in the cold but that does not stop starting."
    },
    {
      "q": "The correct battery test order is:",
      "choices": [
        "Load test, then voltage, then inspect",
        "State of charge (voltage, engine off), inspect, then load test",
        "Replace the battery, then test",
        "Inspect only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Check the charge first (a flat battery cannot be judged), inspect, then load test to decide. (a) Load-testing a flat battery tells you nothing. (c) Replacing before testing wastes money. (d) Inspection alone cannot judge a battery's health."
    },
    {
      "q": "Corrosion on battery terminals causes:",
      "choices": [
        "The battery to overcharge",
        "Resistance that blocks the starter's large current, so the car cranks slowly or not at all",
        "The alternator to fail",
        "The radio to get louder"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Corrosion resists current flow, and the starter needs a large current. (a) Corrosion does not overcharge the battery. (c) The alternator is a separate system. (d) The radio is unaffected by terminal corrosion."
    },
    {
      "q": "Battery capacity is measured in:",
      "choices": [
        "Volts",
        "Amps",
        "Amp-hours",
        "Ohms"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Amp-hours measure how much energy the battery stores. (a) Volts measure push. (b) Amps measure current flow. (d) Ohms measure resistance."
    },
    {
      "q": "When working around a battery, the key safety rules are:",
      "choices": [
        "Wear eye protection and keep sparks and flames away — batteries make explosive gas and contain acid",
        "Wear gloves only",
        "Keep the battery warm",
        "Disconnect the positive cable first"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Eye protection and no ignition sources are the core battery safety rules. (b) Gloves help, but eye protection and no sparks are the key rules. (c) Warming the battery is not a safety rule. (d) The negative cable is disconnected first, not the positive."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Batteries: Quick Reference</h3>\n<p><strong>Core idea:</strong> The battery starts the engine, powers loads with the engine off, and steadies the system while it runs.</p>\n<p><strong>Build:</strong> Lead-acid, six cells of lead plates in acid; each cell makes about two volts.</p>\n<p><strong>Capacity:</strong> Amp-hours — how much energy the battery stores. Cold raises the starter's demand and lowers what the battery can give, so weak batteries fail on cold mornings.</p>\n<p><strong>Test order:</strong> State of charge (voltage, engine off) → inspect (corrosion, case, level) → load test (voltage under a heavy load). The load test decides.</p>\n<p><strong>Watch out:</strong> Corroded terminals can stop a car from starting even when the battery is healthy — clean them first, test second, replace last.</p>\n<p><strong>Self-check:</strong> Explain why a battery fails on a cold morning and why a load test beats a voltage reading. If you can, you have this module.</p>\n"
};
