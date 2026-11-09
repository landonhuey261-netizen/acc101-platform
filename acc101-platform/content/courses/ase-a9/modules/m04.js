// ase-a9 - Module 4: Glow Plugs & Starting
module.exports = {
  "number": 4,
  "slug": "glow-plugs-starting",
  "title": "Glow Plugs & Starting",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why a cold diesel needs help starting and what a glow plug does about it.",
    "Describe the three glow plug phases: pre-glow, cranking glow, and afterglow.",
    "Trace the glow plug control circuit: battery, relay or module, plugs, and the computer.",
    "Test glow plugs with a meter and interpret the results.",
    "Diagnose a cold hard start step by step, without guessing at parts."
  ],
  "sections": [
    {
      "heading": "Why Cold Diesels Struggle to Start",
      "html": "<p>Compression ignition depends on heat, and a cold engine steals heat. When the engine is cold, the cylinder walls, piston, and head soak up the heat of compression, so the squeezed air may never get hot enough to light the fuel. Cold air is denser and harder to squeeze, cold oil makes the engine crank slowly, and cold fuel sprays in bigger droplets that burn poorly. Every one of those factors points the same way: a cold diesel is harder to start than a warm one.</p>\n<p>That is what glow plugs are for. A glow plug is a small electric heater threaded into the cylinder head, with its hot tip sticking into the combustion chamber. When energized, the tip glows hot and warms the air in the chamber, so the first fuel spray finds air hot enough to ignite. Glow plugs do not light the fuel the way a spark plug does — they warm the air so compression can do its job.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A cold engine steals compression heat, cranks slowly, and sprays fuel poorly. Glow plugs warm the combustion chamber so the first spray can ignite — they are a starting aid, not an ignition system.</div>"
    },
    {
      "heading": "The Three Phases: Pre-Glow, Cranking Glow, Afterglow",
      "html": "<p><strong>Pre-glow</strong> starts when the driver turns the key on (or opens the door on some vehicles). The computer energizes the plugs and the dashboard coil-shaped lamp lights. When the lamp goes out, the plugs are hot and the engine is ready to crank. On a warm engine this phase is short; on a cold morning it is longer, because the computer reads coolant temperature and adjusts the heating time.</p>\n<p><strong>Cranking glow</strong> keeps the plugs energized while the starter turns the engine. The plugs stay hot through the first firing strokes, when the engine needs the most help. <strong>Afterglow</strong> keeps the plugs on for a short time after the engine starts, at reduced power on many systems. Afterglow smooths the cold idle, cuts white smoke, and lowers cold-start emissions until the engine can sustain combustion on its own.</p>\n<p>The lamp on the dashboard is a guide, not a test. A lamp that never lights, stays on, or flashes usually means the computer has detected a glow plug fault and stored a code — but a lamp that behaves normally does not prove every plug is good. One dead plug out of six can hide behind a normal-looking lamp, and the engine will still start roughly on a cold morning.</p>"
    },
    {
      "heading": "The Control Circuit: Battery, Relay, Plugs, Computer",
      "html": "<p>The circuit is simple in shape and heavy in current. Battery power runs through a relay or a dedicated glow plug control module to the plugs, and the engine computer decides when the relay closes and for how long, based mainly on coolant temperature. Each plug draws substantial current — the whole set together draws far more than any other circuit in the vehicle except the starter — so the relay, the wiring, and the connections must be in good condition.</p>\n<p>On older systems a simple relay and a timer do the job. On newer systems a control module varies the power to each plug and reports faults back to the computer, sometimes plug by plug. Either way, the diagnostic logic is the same: verify power is reaching the plugs, verify each plug actually heats, and verify the computer is commanding the system at the right times.</p>\n<p>Two failure modes dominate. An open plug draws no current and never heats — the cylinder it serves gets no help, so the engine starts rough and smokes white until it warms. A shorted plug draws too much current and can damage the relay or module. A failed relay means no plug gets power at all, and the engine may not start in the cold even though every plug is healthy.</p>"
    },
    {
      "heading": "Testing Glow Plugs and Diagnosing a Cold Hard Start",
      "html": "<p>The basic test is resistance. With the plug disconnected, a meter across the plug's terminal and its body should show a low resistance — the heater element is a short, thick wire, so a healthy plug reads low. An open circuit (infinite resistance) means a broken element: the plug is dead. A reading far from the others on the same engine means that plug is suspect even if it is not open — compare all of them, and the odd one out is the one to replace.</p>\n<p>The second test is current. With a clamp meter around the feed wire, each plug should draw current when the system is commanded on. A plug that draws nothing is open; a plug that draws far more than its neighbors is shorted. Current testing has one advantage over resistance testing: it proves the plug heats under real operating conditions, not just that its element is continuous.</p>\n<p>Never test a glow plug by holding it in your hand and powering it up — the tip gets hot enough to burn skin and ignite fuel or solvents in seconds. Test in place with a meter, or remove the plug and power it only while it is clamped in a vise, well away from anything flammable, watching from a safe distance.</p>\n<p>Work the system in order. First, verify the complaint: does the engine crank normally but not fire, or does it crank slowly? Slow cranking is a battery, starter, or cable problem — and a slow-cranking diesel cannot build compression heat no matter how good the glow plugs are. Check battery condition and cranking speed before touching the glow system.</p>\n<p>Second, check the glow system: does the lamp behave, is power reaching the plugs, and does each plug draw current? Third, check the fuel system: is the filter clogged, is there air in the lines, is the fuel gelled in cold weather? Fourth, check compression: a worn engine with low compression cannot make enough heat, and no glow plug can fix that. The order matters — testing glow plugs on an engine with a dead battery wastes an afternoon.</p>\n<p>One more cold-weather culprit deserves a mention: fuel gelling. In cold weather, wax in diesel fuel can solidify and choke the filter, starving the engine. A truck that starts fine in the garage and dies on a cold morning may have a fuel problem, not a glow problem — and the fix is fuel treatment and a filter change, not new plugs.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Cold steals compression heat, slows cranking, and worsens the fuel spray — glow plugs warm the chamber so the first spray can ignite.</li>\n<li>Three phases: pre-glow (before cranking), cranking glow (during cranking), afterglow (briefly after starting).</li>\n<li>Circuit: battery → relay or control module → plugs, commanded by the computer based on coolant temperature.</li>\n<li>Test by resistance (open = dead) and by current draw (nothing = open, too much = shorted); compare all plugs on the engine.</li>\n<li>Cold hard-start order: cranking speed and battery → glow system → fuel (filter, air, gelling) → compression.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Trusting the dashboard lamp. A normal-looking lamp does not prove every plug is good — one dead plug can hide behind it. Test each plug with a meter.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Replacing glow plugs on an engine that cranks slowly. A slow crank cannot build compression heat; fix the battery, starter, or cables first.</div>\n<p><strong>Ready-to-work link:</strong> If you can walk the cold hard-start order from memory — battery, glow, fuel, compression — you have this module. Module 5 puts it together: smoke and hard-start diagnosis.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Glow plug", "def": "A small electric heater threaded into the cylinder head whose hot tip warms the combustion chamber for cold starting." },
    { "term": "Pre-glow", "def": "The heating phase before cranking, while the dashboard coil lamp is lit." },
    { "term": "Cranking glow", "def": "Glow plug heating that continues while the starter turns the engine." },
    { "term": "Afterglow", "def": "Glow plug heating that continues briefly after starting, smoothing cold idle and cutting white smoke." },
    { "term": "Glow plug relay", "def": "The heavy-duty switch that connects battery power to the glow plugs on command." },
    { "term": "Glow plug control module", "def": "The electronic module that controls glow plug power and reports plug faults to the computer." },
    { "term": "Coolant temperature sensor", "def": "The sensor whose reading the computer uses to decide how long to heat the glow plugs." },
    { "term": "Open circuit", "def": "A broken electrical path that draws no current — a dead glow plug reads open on a meter." },
    { "term": "Fuel gelling", "def": "Wax in diesel fuel solidifying in cold weather and choking the fuel filter." },
    { "term": "Cranking speed", "def": "How fast the starter turns the engine; too slow, and compression cannot build enough heat to start." },
    { "term": "White smoke (cold start)", "def": "Unburned fuel leaving the exhaust as white smoke when cold cylinders cannot burn the spray completely." },
    { "term": "Current draw test", "def": "Measuring the current each glow plug draws when energized, to prove it actually heats." }
  ],
  "video": {
    "title": "How a Diesel Glow Plug Improves Starting and Lowers Emissions",
    "embedUrl": "https://www.youtube.com/embed/IIdfVRi5n1M",
    "note": "NAPA's guide to glow plugs: how the heater tip warms the chamber, how the control system times pre-glow and afterglow, and what a failing plug looks like. Compare the video's replacement walkthrough with the meter tests in this module.",
    "more": [
      { "title": "How Do Glow Plugs Work?", "url": "https://www.youtube.com/watch?v=Sk-hm-LHY7s" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Explain in two sentences why a cold diesel is harder to start than a warm one.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Cold metal steals the heat of compression, so the squeezed air may not get hot enough to light the fuel. Step 2: Cold oil also makes the engine crank slowly and cold fuel sprays in bigger droplets, so every part of starting gets harder at once.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Name the three glow plug phases and say when each one happens.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Pre-glow — before cranking, while the dashboard lamp is lit. Step 2: Cranking glow — while the starter turns the engine. Step 3: Afterglow — briefly after the engine starts, smoothing the cold idle and cutting white smoke.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> You measure the resistance of six glow plugs. Five read low and similar; one reads open (infinite resistance). What does that mean, and what should you do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The open plug has a broken heater element — it never heats, so its cylinder gets no cold-start help. Step 2: Replace that plug (and consider the age of the rest — if one has failed, the others may be close behind), then retest the system.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A diesel cranks slowly and will not start on a cold morning. The glow lamp behaves normally. What do you check first, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check the battery, cables, and starter — cranking speed first. Step 2: A slow crank cannot build compression heat no matter how good the glow plugs are, and the normal lamp already suggests the glow system is being commanded — so the slow crank is the lead, not the plugs.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A truck starts fine in a warm garage but stalls on cold mornings, and the fuel filter is found choked with wax. What is the problem, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Fuel gelling — wax in the diesel has solidified in the cold and choked the filter, starving the engine. Step 2: The fix is a new filter and proper cold-weather fuel treatment, not glow plugs — the glow system was never the problem.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why can a normal-looking glow plug lamp hide a dead plug?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The lamp shows the system is being commanded on, not that every plug is heating. Step 2: One dead plug out of several may not change the lamp's behavior or set a code on older systems, while still making the engine start rough and smoke white — only a per-plug meter test finds it.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A glow plug's job is to:",
      "choices": ["Light the fuel like a spark plug on every cycle", "Warm the combustion chamber so compression can ignite the first fuel spray on a cold start", "Heat the fuel in the tank", "Warm the engine coolant"],
      "answer": 1,
      "explanation": "Correct: (b). The hot tip warms the chamber air so the first spray can ignite; it is a starting aid, not an ignition system. (a) describes a spark plug — diesels have none. (c) The tank has no glow plug. (d) The coolant is warmed by the engine, not by glow plugs."
    },
    {
      "q": "Pre-glow happens:",
      "choices": ["After the engine has warmed up", "Before cranking, while the dashboard coil lamp is lit", "Only while driving on the highway", "When the DPF regenerates"],
      "answer": 1,
      "explanation": "Correct: (b). Pre-glow heats the plugs before the starter turns, and the lamp shows it is happening. (a) A warm engine needs little or no pre-glow. (c) Glow plugs do not run during highway driving. (d) Regeneration is an aftertreatment event, unrelated to glow plugs."
    },
    {
      "q": "Afterglow is the phase that:",
      "choices": ["Heats the plugs before the key is turned", "Keeps the plugs on briefly after starting to smooth cold idle and cut white smoke", "Recharges the battery", "Cleans the injectors"],
      "answer": 1,
      "explanation": "Correct: (b). Afterglow supports combustion until the engine can sustain it alone. (a) That is pre-glow. (c) The charging system recharges the battery. (d) Injectors are not cleaned by glow plugs."
    },
    {
      "q": "A glow plug that reads open (infinite resistance) on a meter is:",
      "choices": ["Healthy", "Dead — its heater element is broken and it never heats", "Shorted", "Just cold"],
      "answer": 1,
      "explanation": "Correct: (b). An open element draws no current and produces no heat. (a) A healthy plug reads low resistance. (c) A shorted plug reads near zero and draws too much current. (d) Cold does not make a plug read open."
    },
    {
      "q": "What decides how long the glow plugs heat before cranking?",
      "choices": ["The fuel level", "The engine computer, based mainly on coolant temperature", "The turbo boost pressure", "The DEF level"],
      "answer": 1,
      "explanation": "Correct: (b). The computer reads coolant temperature and adjusts heating time — longer when cold, shorter when warm. (a) Fuel level does not affect glow timing. (c) Boost is irrelevant at a standstill. (d) DEF is an exhaust fluid, unrelated to starting."
    },
    {
      "q": "A diesel cranks slowly and will not start on a cold morning. The first thing to check is:",
      "choices": ["The injectors", "Battery condition, cables, and cranking speed", "The DPF soot load", "The SCR catalyst"],
      "answer": 1,
      "explanation": "Correct: (b). Slow cranking cannot build compression heat, so no glow plug or injector can fix it until cranking speed is restored. (a) Injectors cannot be judged until the engine cranks properly. (c) and (d) are aftertreatment parts that do not affect cranking."
    },
    {
      "q": "Fuel gelling means:",
      "choices": ["Fuel turning to gel in the tank from overheating", "Wax in diesel fuel solidifying in cold weather and choking the fuel filter", "DEF freezing in its tank", "Engine oil thickening in summer"],
      "answer": 1,
      "explanation": "Correct: (b). Cold-weather wax solidifies and blocks the filter, starving the engine. (a) Heat does not gel diesel fuel. (c) DEF freezing is a different problem in a different tank. (d) Oil thickening in summer is not a real failure mode."
    },
    {
      "q": "A glow plug that draws far more current than its neighbors is most likely:",
      "choices": ["Open", "Shorted", "Perfectly healthy", "Disconnected"],
      "answer": 1,
      "explanation": "Correct: (b). Excess current means abnormally low resistance — a short that can damage the relay or module. (a) An open plug draws no current. (c) A healthy plug draws about the same as its neighbors. (d) A disconnected plug draws nothing."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Glow Plugs & Starting: Quick Reference</h3>\n<p><strong>Why cold is hard:</strong> Cold metal steals compression heat, cranking slows, fuel sprays poorly.</p>\n<p><strong>Three phases:</strong> Pre-glow (before cranking, lamp lit) · Cranking glow (during cranking) · Afterglow (briefly after starting).</p>\n<p><strong>Circuit:</strong> Battery → relay or control module → plugs, commanded by the computer from coolant temperature.</p>\n<p><strong>Tests:</strong> Resistance — open = dead. Current draw — nothing = open, too much = shorted. Compare all plugs.</p>\n<p><strong>Cold hard-start order:</strong> Battery and cranking speed → glow system → fuel (filter, air, gelling) → compression.</p>\n<p><strong>Watch out:</strong> A normal lamp does not prove every plug is good. Never power a loose glow plug in your hand.</p>\n<p><strong>Self-check:</strong> Walk the cold hard-start order from memory and explain afterglow to a classmate.</p>\n"
};
