// ase-a9 - Module 10: Diesel vs Gasoline Differences
module.exports = {
  "number": 10,
  "slug": "diesel-vs-gasoline-differences",
  "title": "Diesel vs Gasoline Differences",
  "estTime": "3–4 hours",
  "objectives": [
    "Compare diesel and gasoline engines: ignition, fuel, air handling, and construction.",
    "Explain why diesels make strong low-speed pulling power and good fuel economy.",
    "Explain why diesels rev lower and cost more to build and repair.",
    "Compare the two fuels: energy, handling, and what happens when they are mixed up.",
    "Choose the right diagnostic path for a symptom depending on which engine you are facing."
  ],
  "sections": [
    {
      "heading": "Ignition and Air Handling: Spark vs Squeeze, Throttle vs No Throttle",
      "html": "<p>The fundamental difference is how the fuel lights. A gasoline engine premixes fuel with air, squeezes the mixture gently, and fires a spark plug to start the burn. A diesel engine squeezes air alone — far harder — and sprays fuel into the hot air, where it ignites by itself. Everything else follows from that one difference.</p>\n<p>Because a gasoline engine must avoid lighting the mixture before the spark, its squeeze ratio is limited: squeeze too hard and the mixture lights early, knocking. A diesel has no such limit — there is no fuel in the cylinder during compression to light early — so it can squeeze much harder, and that harder squeeze is the source of both its efficiency and its heavy build.</p>\n<p>The practical consequence for diagnosis is simple: a gasoline no-start can be an ignition fault; a diesel no-start never is. A gasoline misfire can be a spark plug, a coil, or a wire; a diesel misfire is fuel, air, or compression. Knowing which engine you are facing decides the first test.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Gasoline lights a premixed charge with a spark; diesel lights fuel with hot, squeezed air. One difference in ignition explains the differences in build, behavior, fuel, and diagnosis.</div>\n<p>A gasoline engine controls power with a throttle plate that chokes the air coming in — the driver asks for power by opening the throttle and letting more air (and fuel) in. A diesel has no throttle plate in the usual sense: it always breathes freely, and power is controlled by how much fuel is injected. At idle a diesel runs very lean — far more air than the fuel needs — and it only approaches a full fuel charge when the driver asks for full power.</p>\n<p>That is why a diesel can be efficient at light load: it is not fighting a closed throttle to breathe, and it burns only the fuel it needs for the power asked. It is also why a diesel's exhaust is cooler at idle and why a diesel can run lean without the misfire a gasoline engine would suffer — the fuel burns where it is sprayed, in the hot air around it, rather than needing a precise mixture throughout the cylinder.</p>\n<p>It also explains the diesel's torque character. Because the fuel burns as it is sprayed, a diesel can deliver strong pulling force at low engine speeds, where a gasoline engine is still waiting for speed to build its power. A diesel pulls from low down; a gasoline engine revs to make its power.</p>"
    },
    {
      "heading": "Why Diesels Rev Lower and Cost More",
      "html": "<p>Diesel combustion is slower than gasoline combustion. The fuel must spray, mix with air, and burn — and that mixing takes time. At high engine speeds there is simply not enough time for the fuel to mix and burn completely before the piston is already moving down, so power falls off and the engine gains nothing from revving higher. Diesel redlines are far lower than gasoline redlines, and that is physics, not a design choice.</p>\n<p>The heavy build costs money. Thicker blocks, stronger cranks, heavier pistons, high-pressure fuel systems, turbochargers, and aftertreatment — DPF, SCR, DEF — all add cost to build and to repair. A diesel fuel system fault can cost several times what a gasoline fuel system fault costs, because the parts work at far higher pressure with far tighter clearances.</p>\n<p>The payoff is durability and efficiency when the work suits it: steady loads, long distances, towing, and hauling. A diesel asked to do short trips in town never gets its aftertreatment hot, never gets its oil hot, and suffers for it — the wrong use pattern punishes a diesel more than it punishes a gasoline engine.</p>"
    },
    {
      "heading": "The Fuels: Energy, Handling, and Mix-Ups",
      "html": "<p>Diesel fuel and gasoline are different liquids with different jobs. Diesel is heavier, oilier, and carries more energy in every gallon; it evaporates slowly and it lubricates the parts it touches. Gasoline is lighter, evaporates quickly, and does not lubricate. Those differences are why each fuel only works in its own engine — and why the wrong fuel is so destructive.</p>\n<p>Gasoline in a diesel tank strips lubrication from the high-pressure pump and injectors and can destroy them if the engine runs. Diesel in a gasoline tank will not burn properly in a spark-ignition engine — the engine will run badly or not at all, and the fuel system needs draining and cleaning. In both cases the rule is the same: do not run the engine; drain the tank and flush the system.</p>\n<p>Handling differs too. Diesel is less volatile than gasoline, so its vapor is less likely to ignite — but diesel on a hot exhaust is still a fire risk, and spilled diesel is an environmental problem. Gasoline vapor is the greater fire risk of the two, which is why gasoline handling rules are stricter. Treat both fuels with respect, and never confuse the two tanks, caps, or nozzles.</p>"
    },
    {
      "heading": "Choosing the Diagnostic Path",
      "html": "<p>When a symptom appears, the engine type decides the path. A gasoline engine that misfires: check ignition first — plugs, coils, wires — then fuel and compression. A diesel that misfires: there is no ignition to check, so go straight to fuel (injectors, pressure, timing), air (filter, boost), and compression. The same symptom, two different first tests.</p>\n<p>A gasoline engine that will not start: check for spark, then fuel, then compression. A diesel that will not start: check cranking speed, then glow, then fuel, then compression. The order is different because the ignition system exists in one and not in the other — and skipping the order wastes time on both.</p>\n<p>Emissions diagnosis differs too. A gasoline engine's catalyst and oxygen sensors are the center of its emissions system; a diesel's is the DPF, SCR, and DEF chain. The tools overlap — scan tool, scope, gauges — but the parts and the failure patterns do not. A technician who works on both must keep two mental maps, and switch between them deliberately.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Ignition: gasoline = spark lighting a premixed charge; diesel = compression ignition of fuel sprayed into hot air.</li>\n<li>Air: gasoline throttles air to control power; diesel breathes freely and controls power with fuel quantity.</li>\n<li>Diesels pull hard at low speed and use fuel efficiently, but rev lower (slow mixing burn) and cost more to build and repair.</li>\n<li>Fuels: diesel is heavier, oilier, more energy per gallon, and lubricating; gasoline is lighter, volatile, and non-lubricating. Wrong fuel in either engine: do not run it, drain and flush.</li>\n<li>Diagnosis: the engine type decides the first test — ignition first on gasoline, fuel/air/compression on diesel.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Diagnosing a diesel like a gasoline engine. There is no ignition system to check, no spark plugs to replace, and no throttle to clean — a diesel misfire is fuel, air, or compression.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Expecting a diesel to behave like a gasoline engine on short trips. A diesel that never gets hot never regenerates, never warms its oil, and suffers — the use pattern matters more for a diesel.</div>\n<p><strong>Ready-to-work link:</strong> If you can explain the spark-vs-squeeze difference and pick the right first test for a misfire on each engine, you have this module. Module 11 is pure practice: diesel diagnosis scenarios.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Spark ignition", "def": "Lighting a premixed fuel-air charge with a spark plug — how gasoline engines burn fuel." },
    { "term": "Compression ignition", "def": "Lighting fuel with the heat of highly compressed air — how diesel engines burn fuel." },
    { "term": "Throttle plate", "def": "The valve in a gasoline intake that chokes air flow to control power; diesels have no equivalent." },
    { "term": "Lean running", "def": "Running with far more air than the fuel needs — normal for a diesel at idle and light load." },
    { "term": "Torque", "def": "Twisting force — the strong low-speed pulling force diesels are known for." },
    { "term": "Redline", "def": "The maximum safe engine speed; far lower on a diesel because its mixing burn takes time." },
    { "term": "Squeeze ratio", "def": "How much the cylinder contents are compressed; much higher in a diesel than in a gasoline engine." },
    { "term": "Knock", "def": "Uncontrolled early ignition in a gasoline engine, which limits how hard it can squeeze its mixture." },
    { "term": "Lubricity", "def": "A fuel's ability to lubricate the parts it touches; diesel lubricates, gasoline does not." },
    { "term": "Misfire", "def": "A cylinder failing to fire properly; on a diesel, a fuel, air, or compression fault — never an ignition fault." },
    { "term": "Volatility", "def": "How readily a fuel evaporates; gasoline is far more volatile than diesel." },
    { "term": "Use pattern", "def": "How a vehicle is actually driven — short trips vs long highway runs — which affects a diesel more than a gasoline engine." }
  ],
  "video": {
    "title": "Gasoline vs Diesel — 4 Major Differences (Engineering Explained)",
    "embedUrl": "https://www.youtube.com/embed/rXVJG9n6BAs",
    "note": "Engineering Explained compares the two engines on compression ratio, air-fuel ratio, throttling, and engine braking — including the Jake brake used on larger diesels. Watch how each difference traces back to the spark-vs-squeeze split in this module.",
    "more": [
      { "title": "Diesel Engine, How It Works?", "url": "https://www.youtube.com/watch?v=DZt5xU44IfQ" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Explain in two sentences why a gasoline engine cannot squeeze its mixture as hard as a diesel squeezes its air.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A gasoline engine's cylinder holds a fuel-air mixture during compression, and squeezing it too hard lights it early — knock. Step 2: A diesel's cylinder holds only air during compression, so there is no fuel to light early and it can squeeze much harder.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A gasoline engine and a diesel engine both misfire. Why is the first test different for each?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: On the gasoline engine, check ignition first — plugs, coils, wires — because a spark failure is a common misfire cause. Step 2: On the diesel there is no ignition system, so go straight to fuel (injectors, pressure, timing), air, and compression.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Why does a diesel pull strongly at low engine speed while a gasoline engine needs speed to make power?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A diesel's fuel burns as it is sprayed into hot air, so it can deliver strong force even at low speed. Step 2: A gasoline engine's power depends on moving a premixed charge quickly through the engine, so it needs higher speed to make its power.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Why does a diesel rev lower than a gasoline engine?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Diesel combustion is slower — the fuel must spray, mix with air, and burn, and that takes time. Step 2: At high speed there is not enough time for the fuel to mix and burn completely before the piston moves down, so power falls off and revving higher gains nothing.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Diesel fuel is put in a gasoline car's tank by mistake and the car has not been started. What is the repair?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Do not start the engine — diesel will not burn properly in a spark-ignition engine. Step 2: Drain the tank and flush the fuel system, then refill with gasoline — the same do-not-run, drain-and-flush rule as the reverse mistake.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A customer asks why their diesel truck is unhappy doing only short trips around town while their gasoline car is fine. What do you tell them?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A diesel needs sustained heat — for its oil, its combustion, and its aftertreatment regeneration — and short trips never provide it. Step 2: The DPF never regenerates, the engine never warms properly, and soot and wear build up; a gasoline engine has no DPF to regenerate and warms up faster, so short trips punish it far less.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The fundamental difference between a diesel and a gasoline engine is:",
      "choices": ["The number of cylinders", "How the fuel is lit — spark vs compression ignition", "The type of oil used", "The size of the fuel tank"],
      "answer": 1,
      "explanation": "Correct: (b). Gasoline lights a premixed charge with a spark; diesel lights fuel with hot, squeezed air. (a) Both engines come in many cylinder counts. (c) Oil differs but is not the fundamental difference. (d) Tank size is not an engine difference."
    },
    {
      "q": "A gasoline engine limits its squeeze ratio because:",
      "choices": ["The pistons are too weak", "Squeezing the fuel-air mixture too hard lights it early — knock", "The spark plugs would melt", "The fuel pump cannot keep up"],
      "answer": 1,
      "explanation": "Correct: (b). Early ignition of the premixed charge is knock, and it limits compression. (a) Piston strength is not the limit. (c) Spark plugs do not melt from compression. (d) The fuel pump is unrelated to the squeeze limit."
    },
    {
      "q": "A diesel controls power mainly by:",
      "choices": ["Opening and closing a throttle plate", "Changing how much fuel is injected, while breathing freely", "Changing the spark timing only", "Opening the EGR valve"],
      "answer": 1,
      "explanation": "Correct: (b). A diesel has no throttle plate; power follows fuel quantity. (a) That is how a gasoline engine controls power. (c) Diesels have no spark timing. (d) The EGR valve manages emissions, not power."
    },
    {
      "q": "A diesel revs lower than a gasoline engine because:",
      "choices": ["Its parts are too heavy to move fast", "Its mixing burn takes time, and at high speed there is not enough time for fuel to mix and burn completely", "Its turbo cannot spin fast enough", "Its fuel pump is too slow"],
      "answer": 1,
      "explanation": "Correct: (b). Diesel combustion is a spray-mix-burn process that needs time, so power falls off at high speed. (a) Part weight is not the limit. (c) The turbo spins very fast and is not the limit. (d) The pump can deliver fuel at high speed; the burn itself is the limit."
    },
    {
      "q": "Gasoline in a diesel tank is destructive because gasoline:",
      "choices": ["Is too cold", "Has no lubricity, so it destroys the high-pressure pump and injectors if the engine runs", "Makes the engine overheat", "Clogs the DPF instantly"],
      "answer": 1,
      "explanation": "Correct: (b). Diesel lubricates the precision fuel parts; gasoline strips that lubrication away. (a) Temperature is not the issue. (c) Overheating is not the failure mode. (d) The DPF is downstream of combustion, not the first victim."
    },
    {
      "q": "A diesel misfire is caused by a fault in:",
      "choices": ["The spark plugs", "Fuel, air, or compression — never ignition", "The distributor", "The ignition coil"],
      "answer": 1,
      "explanation": "Correct: (b). A diesel has no ignition system, so a misfire is always fuel, air, or compression. (a), (c), and (d) are all gasoline ignition parts a diesel does not have."
    },
    {
      "q": "Diesel fuel differs from gasoline in that diesel is:",
      "choices": ["Lighter and more volatile", "Heavier, oilier, more energy per gallon, and lubricating", "Identical except for color", "Only usable in trucks"],
      "answer": 1,
      "explanation": "Correct: (b). Diesel is heavier and oilier, carries more energy per gallon, and lubricates the parts it touches. (a) That describes gasoline. (c) The fuels are chemically different. (d) Diesels power cars as well as trucks."
    },
    {
      "q": "Short trips punish a diesel more than a gasoline engine mainly because:",
      "choices": ["Diesels use more fuel in town", "A diesel needs sustained heat for its oil, combustion, and DPF regeneration, which short trips never provide", "Diesel fuel gels in town", "Gasoline engines have no exhaust system"],
      "answer": 1,
      "explanation": "Correct: (b). Without sustained heat the DPF never regenerates and the engine never warms properly. (a) Fuel use is not the punishment. (c) Gelling is a cold-weather issue, not a short-trip issue. (d) Gasoline engines do have exhaust systems."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Diesel vs Gasoline: Quick Reference</h3>\n<p><strong>Ignition:</strong> Gasoline = spark lights a premixed charge · Diesel = hot squeezed air lights sprayed fuel.</p>\n<p><strong>Squeeze:</strong> Gasoline limited by knock · Diesel squeezes much harder (no fuel present during compression).</p>\n<p><strong>Air:</strong> Gasoline throttles air to control power · Diesel breathes freely, controls power with fuel quantity.</p>\n<p><strong>Character:</strong> Diesel pulls hard at low speed, revs lower (slow mixing burn), costs more to build and repair.</p>\n<p><strong>Fuels:</strong> Diesel heavier, oilier, more energy, lubricating · Gasoline lighter, volatile, non-lubricating. Wrong fuel: do not run it, drain and flush.</p>\n<p><strong>Diagnosis:</strong> Gasoline misfire → ignition first · Diesel misfire → fuel, air, compression.</p>\n<p><strong>Watch out:</strong> Short trips punish a diesel — no sustained heat means no regeneration and a cold engine.</p>\n<p><strong>Self-check:</strong> Explain spark-vs-squeeze and pick the right first test for a misfire on each engine.</p>\n"
};
