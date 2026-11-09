// ase-a9 - Module 5: Diesel Diagnosis: Smoke & Hard Start
module.exports = {
  "number": 5,
  "slug": "diesel-diagnosis-smoke-hard-start",
  "title": "Diesel Diagnosis: Smoke & Hard Start",
  "estTime": "3–4 hours",
  "objectives": [
    "Read exhaust smoke color as a diagnostic clue: black, blue, and white each point somewhere different.",
    "Separate a fuel problem from an air problem from a compression problem using symptoms.",
    "Work a hard-start complaint in order: crank, glow, fuel, compression.",
    "Use the scan tool's data — rail pressure, glow status, and codes — without replacing parts on a guess.",
    "Explain why smoke color is a clue, never a diagnosis by itself."
  ],
  "sections": [
    {
      "heading": "Smoke Color Is a Clue, Not a Diagnosis",
      "html": "<p>Exhaust smoke is the diesel's way of talking, and color is its vocabulary. <strong>Black smoke</strong> is soot from incomplete combustion — too much fuel for the air available, or fuel arriving at the wrong time. <strong>Blue smoke</strong> is burning engine oil getting into the combustion chamber. <strong>White smoke</strong> is unburned fuel or coolant vapor leaving the exhaust — fuel that never ignited, or coolant leaking into a cylinder.</p>\n<p>Color narrows the search; it never finishes it. Black smoke could be a clogged air filter, a boost leak, a stuck injector, or a failed sensor lying about air flow. White smoke could be cold-start fuel, a dead glow plug, low compression, or a head gasket leaking coolant. The color tells you which system to test first — then the tests do the talking.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Black = too much fuel or too little air. Blue = burning oil. White = unburned fuel or coolant. Color picks the first test; the test picks the repair.</div>"
    },
    {
      "heading": "Black Smoke: Too Much Fuel or Too Little Air",
      "html": "<p>Black smoke means the burn is incomplete: fuel is present, but there is not enough air — or not enough time — to burn it. Start on the air side, because it is the cheapest to check: a clogged air filter, a collapsed intake hose, a boost leak at an intercooler pipe, or a turbo that is not making boost. Any of these starves the cylinders of air while the computer keeps adding fuel.</p>\n<p>If the air side is healthy, look at the fuel side: an injector stuck open or dribbling fuel, injection timing that has drifted, or a sensor telling the computer there is more air than there really is, so the computer over-fuels. A scan tool helps here: compare the air flow the computer sees with what the engine should be breathing, and watch whether one cylinder's contribution stands out from the rest.</p>\n<p>One special case: a short puff of black smoke on hard acceleration can be normal on an older diesel, as the turbo spools and the fuel arrives before the air does. Persistent black smoke under steady load is not normal — it is a fault, and it will also load the DPF with soot far faster than the regeneration system can handle.</p>"
    },
    {
      "heading": "Blue and White Smoke: Oil, Fuel, or Coolant",
      "html": "<p>Blue smoke means engine oil is burning in the combustion chamber. The oil has three usual ways in: past worn piston rings or a worn cylinder bore, past worn valve seals down the valve stems, or past a leaking turbocharger seal, where oil from the turbo's bearing housing gets pushed into the intake or the exhaust.</p>\n<p>When the smoke appears helps separate the causes. Blue smoke on startup that fades as the engine warms points toward valve seals, which leak when cold and seal better as parts expand. Blue smoke under load or on acceleration points toward rings or the turbo, which leak more when pressure and speed rise. Blue smoke all the time, getting worse, points toward serious wear — and toward checking the oil level often, because the engine is consuming its own lubricant.</p>\n<p>Do not confuse blue smoke with black: blue has a distinct oily smell and a bluish-gray tint, and it lingers in the air differently from black soot. If you are unsure, the oil level tells the story — an engine making blue smoke is losing oil, and the dipstick will show it.</p>\n<p>Thin white vapor on a cold morning that fades as the engine warms is usually just condensation in the exhaust — normal, and gone in minutes. Thick white smoke that persists is a problem, and it has two very different causes. The first is unburned fuel: cold cylinders, a dead glow plug, low compression, or an injector spraying at the wrong time can all leave fuel unburned, and it exits as white smoke with a sharp diesel smell.</p>\n<p>The second cause is coolant leaking into a cylinder — through a failed head gasket, a cracked head, or a cracked block. Coolant smoke is white too, but it smells sweet rather than like fuel, and it comes with other clues: the coolant level drops, the oil may turn milky, the cooling system may build pressure, or the engine may overheat. Fuel smoke and coolant smoke look alike; the smell, the coolant level, and the oil condition separate them.</p>\n<p>A useful test: white smoke that clears as the engine warms points toward cold-start fuel — glow, compression, or injector timing. White smoke that continues when fully warm, especially with falling coolant level, points toward a coolant leak. Never keep driving a diesel that is losing coolant into a cylinder — the damage escalates fast.</p>"
    },
    {
      "heading": "The Hard-Start Work Order",
      "html": "<p>A hard start — long cranking before firing, or firing then dying — gets worked in a fixed order. <strong>Step 1: cranking.</strong> Does the starter turn the engine at a healthy speed? Slow cranking is a battery, cable, or starter problem, and nothing else can be judged until it is fixed. <strong>Step 2: glow.</strong> Is the glow system commanded, is power reaching the plugs, and does each plug heat? This is Module 4's territory.</p>\n<p><strong>Step 3: fuel.</strong> Is the filter clogged, is there air in the lines, is the fuel gelled, is the feed pump delivering? On a common rail engine, is rail pressure building during cranking? On a HEUI engine, is high-pressure oil building? The scan tool answers both questions without removing a single part.</p>\n<p><strong>Step 4: compression.</strong> If cranking, glow, and fuel are all good and the engine still will not fire, compression is the remaining leg — worn rings, leaking valves, or a failed gasket. A compression test or a relative compression check on the scan tool settles it. The order is the method: skip a step and you will replace good parts.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Black smoke = incomplete combustion: too much fuel or too little air — check the air side first.</li>\n<li>Blue smoke = burning oil: rings, valve seals, or turbo seals — when it appears narrows the cause.</li>\n<li>White smoke = unburned fuel (cold, glow, compression, timing) or coolant (gasket, head, block) — smell, coolant level, and oil condition separate them.</li>\n<li>Thin white vapor that fades on warm-up is normal condensation.</li>\n<li>Hard-start order: cranking speed → glow → fuel (filter, air, rail or oil pressure) → compression.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Calling white smoke a head gasket on sight. Cold-start white smoke from unburned fuel is common and clears with warmth; check the coolant level, the oil, and the glow system before condemning a gasket.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Chasing black smoke in the fuel system first. A clogged air filter or a boost leak is cheaper, faster, and more common — check the air side before the injectors.</div>\n<p><strong>Ready-to-work link:</strong> If you can read a smoke color and name the first two tests for each one, you have this module — and the smoke lab in this course will make you prove it. Module 6 goes deeper on emissions and scan-tool diagnosis.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Black smoke", "def": "Soot from incomplete combustion — too much fuel for the air available, or fuel at the wrong time." },
    { "term": "Blue smoke", "def": "Burning engine oil in the combustion chamber — rings, valve seals, or turbo seals." },
    { "term": "White smoke", "def": "Unburned fuel or coolant vapor leaving the exhaust; persistent thick white smoke is a fault." },
    { "term": "Condensation vapor", "def": "Thin white vapor on a cold start that fades as the exhaust warms — normal, not a fault." },
    { "term": "Boost leak", "def": "Pressurized intake air escaping through a cracked pipe or loose clamp before it reaches the engine." },
    { "term": "Over-fueling", "def": "The computer adding more fuel than the available air can burn, making black smoke." },
    { "term": "Valve seals", "def": "Seals that keep engine oil from running down the valve stems into the combustion chamber." },
    { "term": "Head gasket", "def": "The seal between the cylinder head and the block; when it fails, coolant or combustion gas can cross over." },
    { "term": "Relative compression test", "def": "A scan-tool check that compares cranking speed across cylinders to find a weak one without removing parts." },
    { "term": "Hard start", "def": "Long cranking before firing, or firing then dying — worked in the order crank, glow, fuel, compression." },
    { "term": "Milky oil", "def": "Oil mixed with coolant, turning a milky color — a sign coolant is leaking into the engine." },
    { "term": "Contribution test", "def": "A scan-tool test comparing each cylinder's power contribution to find a weak cylinder." }
  ],
  "video": {
    "title": "White Smoke From Exhaust: Causes & Fixes (Hot Shot's Secret)",
    "embedUrl": "https://www.youtube.com/embed/g6ma_hEJWik",
    "note": "White smoke is the hardest smoke color to read, because unburned fuel and coolant look alike. Watch how this video separates cold-start white smoke from coolant white smoke, then match it against the smell, coolant-level, and oil checks in this module.",
    "more": [
      { "title": "Diesel Smoke Types: Black, White & Blue", "url": "https://www.youtube.com/watch?v=B5l0bfHXAH4" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A diesel blows black smoke under load. Name the first two things you would check, and say why the air side comes first.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Air filter condition and the intake and intercooler pipes for leaks — the air side is cheap, fast, and the most common cause. Step 2: Then the fuel side (injectors, timing, sensors) — because a starved engine gets fuel for air that never arrives, and checking injectors first wastes time and money.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A truck makes blue smoke on startup that fades as it warms, and the oil level drops slowly between changes. What is the most likely cause, and what is the reasoning?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Worn valve seals are most likely. Step 2: Oil leaks past the seals when the engine is cold and the parts are contracted, then seals better as everything expands with heat — which matches smoke at startup that fades, plus slow oil loss.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Thick white smoke continues when the engine is fully warm, the coolant level is dropping, and the oil looks milky. What is happening, and what should the driver do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Coolant is leaking into a cylinder — most likely a failed head gasket, cracked head, or cracked block. Step 2: The driver should stop driving it and have it diagnosed — coolant in a cylinder and in the oil causes damage that escalates fast.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A diesel cranks at a healthy speed, the glow system tests good, and the fuel filter is new — but the engine still will not fire. What is the next step, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check fuel delivery pressure — on a common rail engine, rail pressure during cranking; on a HEUI engine, high-pressure oil pressure. Step 2: Crank and glow are proven good, so the remaining fuel question is whether pressure is actually building; if pressure builds and it still will not fire, compression testing is next.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Thin white vapor appears on a cold morning and disappears within a few minutes of driving. Fault or normal? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Normal — that is condensation vapor in the cold exhaust. Step 2: It fades as the exhaust warms, there is no fuel smell, no coolant loss, and no rough running — none of the signs of real white smoke.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A diesel blows black smoke and has lost power since a service visit. The air filter is clean. What is the next most likely air-side cause, and how would you check it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A boost leak — a loose intercooler clamp or cracked pipe disturbed during service. Step 2: Inspect every intercooler pipe and clamp, listen for hissing under load, and feel for air escaping — boosted air escaping means the engine is over-fueled for the air it actually gets.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Black smoke from a diesel exhaust means:",
      "choices": ["Burning engine oil", "Coolant leaking into a cylinder", "Incomplete combustion — too much fuel for the air available", "Normal condensation"],
      "answer": 2,
      "explanation": "Correct: (c). Black smoke is soot from fuel that could not burn completely. (a) Burning oil makes blue smoke. (b) Coolant makes thick white smoke. (d) Condensation is thin white vapor that fades."
    },
    {
      "q": "Blue smoke that appears on startup and fades as the engine warms most likely points to:",
      "choices": ["Worn valve seals leaking oil when cold", "A clogged air filter", "A dead glow plug", "A failed head gasket"],
      "answer": 0,
      "explanation": "Correct: (a). Valve seals leak when cold and seal better as parts expand with heat. (b) A clogged air filter makes black smoke, not blue. (c) A dead glow plug makes white smoke from unburned fuel. (d) A failed head gasket makes persistent white smoke and coolant loss."
    },
    {
      "q": "Thick white smoke that continues when the engine is fully warm, with falling coolant level, most likely means:",
      "choices": ["Normal condensation", "Unburned fuel from a cold start", "Coolant leaking into a cylinder", "A boost leak"],
      "answer": 2,
      "explanation": "Correct: (c). Persistent white smoke plus coolant loss points to a gasket, head, or block leak. (a) Condensation fades with warmth. (b) Cold-start fuel smoke clears as the engine warms. (d) A boost leak makes black smoke and lost power."
    },
    {
      "q": "The first thing to check on a diesel with black smoke under load is:",
      "choices": ["The injectors", "The air side — air filter, intake hoses, intercooler pipes, and boost", "The glow plugs", "The DEF tank"],
      "answer": 1,
      "explanation": "Correct: (b). Air-side faults are the cheapest, fastest, and most common cause of black smoke. (a) Injectors come after the air side is proven good. (c) Glow plugs affect cold starting, not black smoke under load. (d) DEF is an exhaust fluid, unrelated to smoke color."
    },
    {
      "q": "In the hard-start work order, the FIRST step is:",
      "choices": ["Check the glow plugs", "Check cranking speed — battery, cables, starter", "Replace the fuel filter", "Test compression"],
      "answer": 1,
      "explanation": "Correct: (b). Slow cranking cannot build compression heat, so nothing else can be judged until cranking speed is healthy. (a) Glow comes second. (c) The filter is step three, fuel. (d) Compression is the last step, after crank, glow, and fuel are proven."
    },
    {
      "q": "Milky-looking engine oil suggests:",
      "choices": ["Normal oil aging", "Coolant mixing with the oil", "Too much fuel in the oil", "A clogged air filter"],
      "answer": 1,
      "explanation": "Correct: (b). Milky oil is oil mixed with coolant, a sign of a gasket, head, or block leak. (a) Aged oil turns dark, not milky. (c) Fuel in oil thins it and smells of fuel but does not make it milky. (d) An air filter fault makes black smoke, not milky oil."
    },
    {
      "q": "A short puff of black smoke on hard acceleration in an older diesel is:",
      "choices": ["Always a failed injector", "Often normal, as fuel arrives before the turbo spools and air catches up", "Proof the DPF has failed", "A sign of coolant in the fuel"],
      "answer": 1,
      "explanation": "Correct: (b). A brief puff as the turbo spools can be normal on older diesels; persistent smoke under steady load is the fault. (a) One puff does not prove an injector fault. (c) DPF failure shows up differently — warning lights and lost power. (d) Coolant in fuel is not a thing; coolant makes white smoke."
    },
    {
      "q": "A contribution test on a scan tool is used to:",
      "choices": ["Measure DEF quality", "Compare each cylinder's power contribution to find a weak cylinder", "Test the glow plug relay", "Check turbo boost pressure"],
      "answer": 1,
      "explanation": "Correct: (b). It compares cylinders so a weak one stands out. (a) DEF quality is checked by its own sensor. (c) The relay is tested by voltage and current checks. (d) Boost is read from its own sensor or gauge."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Smoke & Hard Start: Quick Reference</h3>\n<p><strong>Smoke colors:</strong> Black = too much fuel / too little air · Blue = burning oil · White = unburned fuel or coolant.</p>\n<p><strong>Black:</strong> Check the air side first (filter, hoses, boost leaks), then fuel (injectors, timing, sensors).</p>\n<p><strong>Blue:</strong> Startup-only fading = valve seals · Under load = rings or turbo · All the time = serious wear. Check the oil level.</p>\n<p><strong>White:</strong> Clears with warmth = cold-start fuel · Persists warm + coolant loss = gasket/head/block. Thin vapor that fades = normal condensation.</p>\n<p><strong>Hard-start order:</strong> Cranking speed → glow → fuel (filter, air, rail/oil pressure) → compression.</p>\n<p><strong>Watch out:</strong> Color is a clue, never a diagnosis. Test before replacing parts.</p>\n<p><strong>Self-check:</strong> For each smoke color, name the first two tests you would run.</p>\n"
};
