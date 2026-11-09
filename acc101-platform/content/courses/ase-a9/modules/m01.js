// ase-a9 - Module 1: Diesel Fundamentals
module.exports = {
  "number": 1,
  "slug": "diesel-fundamentals",
  "title": "Diesel Fundamentals",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how a diesel engine turns fuel into motion, in plain words, from intake to exhaust.",
    "Describe compression ignition and why a diesel has no spark plugs.",
    "Name the four strokes of a diesel engine and what happens in each one.",
    "Explain why diesel engines are built heavier and stronger than gasoline engines.",
    "Describe the main parts of a diesel engine and what each one does."
  ],
  "sections": [
    {
      "heading": "What Makes a Diesel a Diesel",
      "html": "<p>A diesel engine burns fuel to push pistons, just like a gasoline engine — but it lights the fuel in a completely different way. A gasoline engine mixes fuel with air, squeezes the mixture, and then fires a spark plug to start the burn. A diesel engine squeezes air alone, so hard that the air gets extremely hot, and then sprays fuel straight into that hot air. The fuel catches fire on its own the moment it meets the hot, squeezed air. That is called <strong>compression ignition</strong>, and it is the one idea everything else in this course hangs on.</p>\n<p>Because there is no spark plug, there is no ignition system to fail — but there is also no room for error in the fuel system. The fuel must arrive at exactly the right moment, in exactly the right amount, sprayed into a fine mist. If the spray is late, early, or coarse, the engine runs rough, smokes, or will not start. Diesel diagnosis is mostly fuel-system diagnosis, and this course will keep coming back to that.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Gasoline engines light a premixed charge with a spark. Diesel engines squeeze air until it is hot enough to light the fuel by itself. No spark plugs — but everything depends on injection timing and spray quality.</div>"
    },
    {
      "heading": "The Four Strokes, Diesel Style",
      "html": "<p><strong>Intake:</strong> the piston moves down and the intake valve opens. Only air comes in — no fuel yet. That is a big difference from a gasoline engine, which pulls in a fuel-air mixture.</p>\n<p><strong>Compression:</strong> both valves close and the piston moves up, squeezing the air into a small space. The squeeze ratio is much higher than in a gasoline engine, so the air gets far hotter — hot enough to ignite diesel fuel on contact.</p>\n<p><strong>Power:</strong> near the top of the stroke, the injector sprays a fine mist of fuel into the hot air. The fuel ignites and burns, and the expanding gases push the piston down. This is the only stroke that makes power.</p>\n<p><strong>Exhaust:</strong> the exhaust valve opens and the piston moves up, pushing the burned gases out. Then the cycle repeats — intake, compression, power, exhaust — hundreds of times a minute in every cylinder.</p>"
    },
    {
      "heading": "Why Diesels Are Built So Heavy",
      "html": "<p>Squeezing air that hard makes very high pressure inside the cylinder. The block, crankshaft, connecting rods, pistons, and head bolts all have to survive that pressure, cycle after cycle, for hundreds of thousands of miles. So diesel parts are thicker, heavier, and stronger than their gasoline equivalents. A diesel engine weighs more than a gasoline engine of the same size, and that is not waste — it is the price of compression ignition.</p>\n<p>The heavy build also explains the diesel sound. Combustion in a diesel starts fast and hard, and the pressure rises sharply. That sharp pressure rise is the clatter you hear at idle, especially when the engine is cold. Modern diesels soften it by injecting a small pilot squirt of fuel just before the main injection, which starts the burn gently — you will meet pilot injection again in Module 2.</p>\n<p>Diesel fuel itself is different from gasoline. It is heavier and oilier, it carries more energy in every gallon, and it does not evaporate easily. That is why a diesel can be efficient and pull hard at low engine speeds — and why water, dirt, or the wrong fuel in the tank causes expensive damage, as Module 8 explains.</p>"
    },
    {
      "heading": "The Main Parts and What They Do",
      "html": "<p><strong>Air path:</strong> the air filter cleans incoming air, the turbocharger (Module 3) squeezes more of it in, and the intake manifold shares it out to the cylinders. A diesel is an air pump first — without enough clean air, nothing else works.</p>\n<p><strong>Fuel path:</strong> the tank, low-pressure feed pump, filters, high-pressure pump, and injectors move fuel from the tank to the combustion chamber. The injectors are the precision instruments of the whole engine.</p>\n<p><strong>Engine proper:</strong> pistons, rings, connecting rods, crankshaft, cylinder head, valves, and camshaft turn the push of combustion into rotation. Many diesel pistons have a bowl-shaped top that swirls the air as it is squeezed, helping the fuel mix and burn cleanly.</p>\n<p><strong>Controls and aftertreatment:</strong> the engine control module (ECM) decides when and how much fuel to inject, and the exhaust aftertreatment — oxidation catalyst, particulate filter, and selective catalytic reduction — cleans what comes out the tailpipe. Modules 3, 6, and 7 cover these in depth.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Diesels use compression ignition: hot, squeezed air lights the fuel — no spark plugs.</li>\n<li>Four strokes: intake (air only), compression (air gets very hot), power (fuel sprayed in and burns), exhaust.</li>\n<li>High squeeze ratios mean high cylinder pressure, so diesel parts are built heavy and strong.</li>\n<li>Fuel must arrive at the right moment, in the right amount, as a fine mist — timing and spray quality are everything.</li>\n<li>Diesel fuel is heavier and oilier than gasoline and carries more energy per gallon.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Thinking a diesel that will not start must have an ignition problem. There is no ignition system — a diesel no-start is a fuel, air, compression, or glow-plug problem, in that order.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Treating diesel clatter as a fault by itself. Some clatter, especially cold, is normal diesel combustion noise; what matters is whether it changes, gets worse, or comes with smoke or lost power.</div>\n<p><strong>Ready-to-work link:</strong> If you can explain compression ignition to a neighbor in three sentences, you have this module. Module 2 opens the fuel system: common rail and HEUI.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Compression ignition", "def": "Ignition caused by the heat of highly compressed air, with no spark plug — the defining feature of a diesel engine." },
    { "term": "Four-stroke cycle", "def": "Intake, compression, power, and exhaust — the four piston movements that make up one working cycle." },
    { "term": "Intake stroke", "def": "The stroke in which the piston moves down with the intake valve open; in a diesel, only air enters." },
    { "term": "Compression stroke", "def": "The stroke in which both valves are closed and the piston squeezes the air, heating it sharply." },
    { "term": "Power stroke", "def": "The stroke in which burning fuel pushes the piston down — the only stroke that produces power." },
    { "term": "Exhaust stroke", "def": "The stroke in which the piston pushes burned gases out through the open exhaust valve." },
    { "term": "Injector", "def": "The precision nozzle that sprays fuel into the combustion chamber at the right moment, in the right amount, as a fine mist." },
    { "term": "Pilot injection", "def": "A small squirt of fuel injected just before the main injection to start combustion gently and soften diesel clatter." },
    { "term": "ECM", "def": "Engine control module — the computer that decides injection timing and quantity, and manages emissions systems." },
    { "term": "Aftertreatment", "def": "The exhaust-cleaning equipment downstream of the engine: oxidation catalyst, particulate filter, and SCR system." },
    { "term": "Piston bowl", "def": "The bowl-shaped top of many diesel pistons that swirls the air during compression to help fuel mix and burn." },
    { "term": "Atomization", "def": "Breaking liquid fuel into a fine mist of tiny droplets so it can mix with air and burn completely." }
  ],
  "video": {
    "title": "Diesel Engine, How It Works?",
    "embedUrl": "https://www.youtube.com/embed/DZt5xU44IfQ",
    "note": "An animated walkthrough of the diesel four-stroke cycle: air-only intake, compression heating, fuel spray and self-ignition, and exhaust. Watch how the piston bowl swirls the air and how the injector sprays fuel into the hot compressed charge.",
    "more": [
      { "title": "Gasoline vs Diesel — 4 Major Differences (Engineering Explained)", "url": "https://www.youtube.com/watch?v=rXVJG9n6BAs" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A neighbor asks, 'Why does my diesel truck not have spark plugs?' Give a two-sentence answer you could say on the spot.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A diesel squeezes air alone until the air is hot enough to light fuel by itself — that is compression ignition. Step 2: The injector sprays fuel into that hot air and it catches fire on contact, so there is nothing for a spark plug to do.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> List the four strokes of a diesel engine in order, and state what enters the cylinder during the intake stroke.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Intake, compression, power, exhaust. Step 2: During the intake stroke only air enters the cylinder — fuel is not added until the power stroke, when the injector sprays it into the hot compressed air.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says a diesel engine is just a gasoline engine with stronger parts. What is wrong with that description?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The parts are stronger, but the combustion itself is different — gasoline engines premix fuel and air and light it with a spark. Step 2: Diesels compress air alone and inject fuel into hot air, so the fuel system, the timing, and the whole way the burn is controlled are different, not just the hardware.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Why does a diesel engine weigh more than a gasoline engine of the same size?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The high squeeze ratio creates very high pressure inside the cylinders. Step 2: The block, crankshaft, rods, pistons, and head bolts must survive that pressure for hundreds of thousands of miles, so they are built thicker and heavier.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Name the three parts of the diesel fuel path between the tank and the combustion chamber, and say what the injector's job is.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Low-pressure feed pump, filters, and high-pressure pump move fuel from the tank toward the engine. Step 2: The injector's job is to spray the fuel into the combustion chamber at exactly the right moment, in exactly the right amount, as a fine mist.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A cold diesel clatters loudly at idle but the clatter fades as it warms up, and there is no smoke and no loss of power. Is this necessarily a fault? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Not necessarily — some cold clatter is normal diesel combustion noise, because the burn starts fast and hard when the engine is cold. Step 2: It becomes a fault to chase when the noise changes suddenly, gets worse, or comes with smoke, rough running, or lost power — noise alone, fading with warmth, is usually just a diesel being a diesel.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A diesel engine lights its fuel by:",
      "choices": ["A spark plug firing at the top of the compression stroke", "The heat of highly compressed air — compression ignition", "A glow plug firing on every power stroke", "A flame carried over from the previous cycle"],
      "answer": 1,
      "explanation": "Correct: (b). The diesel squeezes air alone until it is hot enough to ignite fuel on contact — compression ignition. (a) describes a gasoline engine. (c) Glow plugs only help cold starts; they do not fire every cycle. (d) No flame carries over between cycles."
    },
    {
      "q": "During the intake stroke of a diesel engine, what enters the cylinder?",
      "choices": ["A mixture of fuel and air", "Fuel only", "Air only", "Exhaust gas only"],
      "answer": 2,
      "explanation": "Correct: (c). Only air enters during intake; fuel is sprayed in later, near the top of the compression stroke. (a) describes a gasoline engine's intake. (b) Fuel never enters through the intake valve in a diesel. (d) Exhaust leaves during the exhaust stroke, not intake."
    },
    {
      "q": "Which stroke is the only one that produces power?",
      "choices": ["Intake", "Compression", "Power", "Exhaust"],
      "answer": 2,
      "explanation": "Correct: (c). The power stroke is when burning fuel pushes the piston down. (a) Intake only draws air in. (b) Compression uses power to squeeze air. (d) Exhaust uses power to push gases out."
    },
    {
      "q": "Why are diesel engine parts built heavier than gasoline engine parts?",
      "choices": ["Because diesel fuel is heavier than gasoline", "Because the high compression ratio creates very high cylinder pressure the parts must survive", "Because diesels run at higher engine speeds", "Because diesel engines have more cylinders"],
      "answer": 1,
      "explanation": "Correct: (b). High squeeze ratios mean high cylinder pressure, so the block, crank, rods, and pistons are built thicker and stronger. (a) Fuel weight does not load the parts. (c) Diesels generally run at lower speeds than gasoline engines. (d) Cylinder count is not the reason for the heavy build."
    },
    {
      "q": "Pilot injection is a small squirt of fuel injected just before the main injection in order to:",
      "choices": ["Clean the injector tip", "Start combustion gently and soften diesel clatter", "Warm up the glow plugs", "Prime the fuel filter"],
      "answer": 1,
      "explanation": "Correct: (b). The pilot squirt starts the burn gently so the main burn's pressure rise is less sharp and less noisy. (a) Cleaning is not its purpose. (c) Glow plugs are heated electrically, not by fuel. (d) Priming is a service step, not an injection event."
    },
    {
      "q": "The injector's job is to:",
      "choices": ["Pump fuel out of the tank", "Filter water out of the fuel", "Spray fuel into the combustion chamber at the right moment, in the right amount, as a fine mist", "Squeeze air into the cylinder"],
      "answer": 2,
      "explanation": "Correct: (c). The injector is the precision nozzle that times and atomizes the fuel spray. (a) That is the feed pump's job. (b) That is the filter and water separator's job. (d) The piston and turbocharger move the air, not the injector."
    },
    {
      "q": "Atomization means:",
      "choices": ["Heating fuel until it boils", "Breaking liquid fuel into a fine mist of tiny droplets", "Mixing fuel with engine oil", "Pressurizing fuel in the rail"],
      "answer": 1,
      "explanation": "Correct: (b). Atomization breaks fuel into tiny droplets so it can mix with air and burn completely. (a) Boiling is not atomization. (c) Fuel and oil must never mix. (d) Pressurizing is the pump's job; atomization happens at the nozzle."
    },
    {
      "q": "A diesel that will not start most likely has a problem with:",
      "choices": ["Its spark plugs", "Fuel, air, compression, or glow plugs", "Its ignition coil", "Its distributor cap"],
      "answer": 1,
      "explanation": "Correct: (b). With no ignition system, a diesel no-start is a fuel, air, compression, or cold-start (glow plug) problem. (a), (c), and (d) are all gasoline ignition parts a diesel does not have."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — Diesel Fundamentals: Quick Reference</h3>\n<p><strong>Core idea:</strong> Compression ignition — hot, squeezed air lights the fuel. No spark plugs.</p>\n<p><strong>Four strokes:</strong> Intake (air only) · Compression (air gets very hot) · Power (fuel sprayed in, burns, pushes piston) · Exhaust.</p>\n<p><strong>Heavy build:</strong> High cylinder pressure from the high squeeze ratio — block, crank, rods, pistons built thick and strong.</p>\n<p><strong>Fuel path:</strong> Tank → feed pump → filters → high-pressure pump → injectors → combustion chamber.</p>\n<p><strong>Key terms:</strong> compression ignition, atomization, pilot injection, ECM, aftertreatment.</p>\n<p><strong>Watch out:</strong> A diesel no-start is a fuel, air, compression, or glow-plug problem — never an ignition problem.</p>\n<p><strong>Self-check:</strong> Explain compression ignition and the four strokes to someone who has never opened a hood. If you can do it in plain words, you have this module.</p>\n"
};
