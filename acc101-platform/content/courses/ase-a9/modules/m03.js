// ase-a9 - Module 3: Turbocharging & Aftertreatment: DPF, SCR, DEF
module.exports = {
  "number": 3,
  "slug": "turbocharging-aftertreatment-dpf-scr-def",
  "title": "Turbocharging & Aftertreatment: DPF, SCR, DEF",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how a turbocharger uses exhaust energy to push more air into the engine.",
    "Describe the intercooler's job and why cooled air makes more power.",
    "Name the aftertreatment parts in order and state what each one removes from the exhaust.",
    "Explain DPF regeneration: what it is, when it happens, and what interrupts it.",
    "Explain how SCR and DEF turn exhaust pollutants into harmless nitrogen and water."
  ],
  "sections": [
    {
      "heading": "The Turbocharger and Intercooler: Free Power, Dense Air",
      "html": "<p>A turbocharger is two fans on one shaft. Hot exhaust gas leaving the engine spins the turbine wheel; the turbine spins the compressor wheel on the same shaft; the compressor squeezes fresh air and pushes it into the intake. The engine gets more air in every cylinder, so it can burn more fuel and make more power — using energy that would otherwise blow straight out the tailpipe.</p>\n<p>Because the turbo is driven by exhaust flow, it needs exhaust flow to work. At low engine speed there is little exhaust energy, so boost builds slowly — that delay is called turbo lag. At higher speeds the turbo spins fast and boost builds quickly, which is why a diesel pulls hardest once it is rolling. A wastegate or variable vanes limit boost so the turbo cannot overspeed when exhaust flow is heavy.</p>\n<p>The turbo's bearings live a hard life: the shaft spins extremely fast in a very hot housing, and engine oil both lubricates and cools it. Letting a hard-working diesel idle briefly before shutdown lets the turbo cool and keeps oil from baking onto the bearings — a small habit that saves expensive turbos.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A turbo recycles exhaust energy into more intake air. More air means more fuel can burn, which means more power — but the turbo only helps once there is enough exhaust flow to spin it.</div>\n<p>Squeezing air heats it up, and hot air is thin — fewer air molecules fit in the cylinder. The <strong>intercooler</strong> sits between the turbo's compressor and the intake manifold and cools the compressed air before it enters the engine. Cooler air is denser, so more oxygen reaches each cylinder, and more oxygen means a more complete burn and more power.</p>\n<p>The intercooler is also a diagnostic clue. A cracked intercooler pipe or a loose clamp lets boosted air escape, and the engine loses power and blows black smoke — the computer adds fuel for air that never arrives. A boost leak is one of the first things to check on a low-power diesel, and it is cheap to find: look, listen, and feel for leaks along every pipe and clamp.</p>\n<p>Many modern diesels use variable-geometry turbos, whose vanes change angle to suit engine speed: closed at low speed to spool the turbo quickly, open at high speed to let exhaust flow freely. Stuck vanes — often from soot — cause sluggish response at low speed or overboost at high speed, and the fix is usually cleaning or replacing the turbo assembly, not the engine computer.</p>"
    },
    {
      "heading": "The Aftertreatment Chain, in Order",
      "html": "<p>Exhaust leaves the turbo and passes through a chain of cleaners, in this order. First the <strong>diesel oxidation catalyst (DOC)</strong>, which burns off leftover hydrocarbons and carbon monoxide and generates the heat the next stage needs. Then the <strong>diesel particulate filter (DPF)</strong>, a wall-flow filter that traps soot — the black particles in diesel exhaust. Then the <strong>selective catalytic reduction (SCR)</strong> catalyst, which uses diesel exhaust fluid (DEF) to deal with nitrogen oxides (NOx).</p>\n<p>Each stage depends on the one before it. The DOC must make heat for the DPF to regenerate. The DPF must trap soot or the SCR catalyst gets fouled. The SCR must receive the right amount of DEF or NOx passes through untreated. When one stage fails, the whole chain suffers — which is why aftertreatment diagnosis always starts by asking which stage is actually failing, rather than replacing parts down the line.</p>\n<p>Two pollutants drive the whole design. Soot is solid carbon particles — visible as black smoke when the system fails. NOx is a family of nitrogen-oxygen gases formed when combustion runs very hot — invisible, but a major smog contributor. The DPF handles the soot; the SCR handles the NOx; the DOC handles the rest.</p>"
    },
    {
      "heading": "DPF Regeneration: Burning Off the Soot",
      "html": "<p>A DPF fills up as it traps soot, and a full filter chokes the engine. <strong>Regeneration</strong> is the controlled burn that clears it: the system raises exhaust temperature until the trapped soot burns off, leaving only a small amount of ash behind. There are two kinds. <strong>Passive regeneration</strong> happens on its own during sustained highway driving, when exhaust is naturally hot enough. <strong>Active regeneration</strong> is commanded by the computer when the soot load climbs: it injects extra fuel or changes the burn to raise exhaust temperature deliberately.</p>\n<p>Regeneration needs time and heat, and short trips kill it. A truck that only ever drives short distances never gets hot enough for long enough, so the soot load keeps climbing until the computer demands a parked regeneration or the filter clogs and the engine loses power. That is a use-pattern problem, not a parts problem — and the fix starts with the driving pattern and a completed regeneration, not a new filter.</p>\n<p>One warning matters more than any other: ash is not soot. Soot burns off in regeneration; ash — the mineral residue from engine oil and fuel — does not, and it accumulates over the filter's life until the filter must be professionally cleaned or replaced. An engine that burns oil fills its DPF with ash far faster, which is another reason oil consumption is an aftertreatment problem too.</p>"
    },
    {
      "heading": "SCR and DEF: Chemistry in the Tailpipe",
      "html": "<p><strong>DEF</strong> — diesel exhaust fluid — is a water-based solution of urea that lives in its own tank, separate from the fuel tank. The SCR system sprays a measured dose of DEF into the hot exhaust upstream of the SCR catalyst. The heat turns the urea into ammonia, and over the catalyst the ammonia reacts with NOx, converting it into harmless nitrogen gas and water vapor — the same nitrogen that already makes up most of the air we breathe.</p>\n<p>Dosing is everything. Too little DEF and NOx passes through untreated; too much and ammonia slips past the catalyst, which the system can detect and flag. The computer watches NOx sensors before and after the SCR catalyst to judge whether the reaction is working, and it watches the DEF level, quality, and temperature too. DEF freezes in cold weather, so the tank and lines have heaters; a frozen system that cannot thaw is a real winter no-start-to-drive problem on some trucks.</p>\n<p>DEF is not fuel, not an additive, and not optional on an SCR-equipped truck. Putting DEF in the fuel tank, or fuel in the DEF tank, is a serious and expensive contamination mistake — the two tanks, caps, and fillers are deliberately different, and they must never be mixed. When the DEF tank runs dry, the computer warns the driver and can limit engine power until it is refilled.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Turbo: exhaust spins a turbine, which drives a compressor that pushes more air in; the intercooler cools that air so it is denser.</li>\n<li>Aftertreatment order: DOC → DPF → SCR, each stage depending on the one before it.</li>\n<li>DPF traps soot; regeneration burns soot off (passive on the highway, active when commanded); ash never burns off and accumulates for life.</li>\n<li>SCR sprays DEF into hot exhaust; urea becomes ammonia, which converts NOx into nitrogen and water.</li>\n<li>DEF is a separate fluid in a separate tank — never mix it with fuel.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Replacing a clogged DPF without asking why it clogged. Short trips that never complete a regeneration, an engine burning oil (ash), or a failed DOC that cannot make heat will clog the next filter just as fast.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Ignoring a boost leak. A loose intercooler clamp lets boosted air escape, the engine loses power and blows black smoke, and the fault looks like a fuel problem — check the air path first.</div>\n<p><strong>Ready-to-work link:</strong> If you can trace exhaust from the turbo through the DOC, DPF, and SCR and say what each stage removes, you have this module. Module 4 covers cold starts: glow plugs.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Turbocharger", "def": "Two wheels on one shaft: exhaust spins the turbine, which drives the compressor to push more air into the engine." },
    { "term": "Turbine", "def": "The exhaust-driven wheel of a turbocharger." },
    { "term": "Compressor", "def": "The intake-side wheel of a turbocharger that squeezes fresh air into the engine." },
    { "term": "Turbo lag", "def": "The delay in boost build-up at low engine speed, when there is little exhaust energy to spin the turbo." },
    { "term": "Wastegate", "def": "A valve that bypasses exhaust gas around the turbine to limit boost pressure." },
    { "term": "Intercooler", "def": "The heat exchanger that cools compressed intake air so it is denser and carries more oxygen." },
    { "term": "DOC", "def": "Diesel oxidation catalyst — burns off hydrocarbons and carbon monoxide and generates heat for the DPF." },
    { "term": "DPF", "def": "Diesel particulate filter — a wall-flow filter that traps soot from the exhaust." },
    { "term": "Regeneration", "def": "The controlled burn that clears trapped soot out of a DPF; passive on the highway, active when commanded." },
    { "term": "Soot", "def": "Solid carbon particles in diesel exhaust, trapped by the DPF and burned off in regeneration." },
    { "term": "Ash", "def": "Mineral residue from oil and fuel that regeneration cannot burn off; it accumulates in the DPF for life." },
    { "term": "SCR", "def": "Selective catalytic reduction — the catalyst that uses DEF-derived ammonia to convert NOx into nitrogen and water." },
    { "term": "DEF", "def": "Diesel exhaust fluid — a water-based urea solution sprayed into the exhaust for the SCR reaction." },
    { "term": "NOx", "def": "Nitrogen oxides — invisible exhaust gases formed in hot combustion; the pollutant SCR is built to remove." }
  ],
  "video": {
    "title": "Mastering Your Truck's Aftertreatment System: 9 Must-Know Components",
    "embedUrl": "https://www.youtube.com/embed/wSZY_Kq91Ag",
    "note": "A walkthrough of all nine aftertreatment components — DOC, DPF, SCR, DEF dosing unit, sensors, and more — and how they work together. Watch for the order the exhaust passes through them, and how one failing stage affects the rest.",
    "more": [
      { "title": "Turbochargers Explained: Single, Twin-Scroll, VGT & Electric", "url": "https://www.youtube.com/watch?v=iS0XxIcdcu4" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Explain in two or three sentences how a turbocharger makes more power without a bigger engine.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Hot exhaust gas spins the turbine wheel, which drives the compressor wheel on the same shaft. Step 2: The compressor squeezes more air into each cylinder, so more fuel can burn and make more power — using exhaust energy that would otherwise be wasted.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A diesel loses power and blows black smoke after a service visit, and the technician finds a loose intercooler clamp. Explain the connection.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The loose clamp lets boosted air escape before it reaches the engine, so the cylinders get less air than the computer expects. Step 2: The computer still adds fuel for the missing air, so the mixture is too rich — incomplete combustion makes black smoke and the engine loses power.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> List the aftertreatment parts in exhaust-flow order and state what each one removes.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: DOC — burns off hydrocarbons and carbon monoxide and makes heat. Step 2: DPF — traps soot (solid particles). Step 3: SCR with DEF — converts NOx into nitrogen and water.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A delivery truck only ever makes short trips around town, and its DPF warning light keeps coming on. Explain why, and what the driver should do.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Short trips never get the exhaust hot enough for long enough, so passive regeneration never happens and active regeneration keeps getting interrupted. Step 2: The soot load climbs until the computer demands attention. Step 3: The fix starts with the driving pattern — a sustained drive that lets a regeneration complete — not with a new filter.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Explain the difference between soot and ash in a DPF, and why the difference matters for the filter's life.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Soot is carbon that burns off during regeneration. Step 2: Ash is mineral residue from oil and fuel that never burns off and accumulates for the life of the filter. Step 3: An engine that burns oil fills the DPF with ash faster, so the filter needs professional cleaning or replacement sooner — regeneration cannot fix ash.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A customer asks whether DEF goes in the fuel tank. What do you tell them, and why does it matter?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No — DEF has its own separate tank and is sprayed into the exhaust, never into the engine. Step 2: DEF in the fuel tank (or fuel in the DEF tank) is serious contamination that damages the fuel system and the SCR system, so the two fluids and their fillers must never be mixed.</p>"
    }
  ],
  "quiz": [
        {
      "q": "A diesel pickup has a turbocharger and a supercharger on the same engine. How do their power sources differ?",
      "choices": [
        "Both are belt-driven",
        "The turbo uses exhaust gas; the supercharger uses a belt from the crankshaft",
        "Both use exhaust gas",
        "The turbo uses the battery"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A turbo is spun by exhaust gas; a supercharger is driven by a belt. (a) is wrong: only the supercharger is belt-driven. (c) is wrong: a supercharger does not use exhaust gas. (d) is wrong: the battery does not power either one."
    },
        {
      "q": "A diesel’s intercooler is clogged with bugs and dirt. What symptom would you expect first?",
      "choices": [
        "Exhaust gas temperature falls",
        "Less power, because the intake air stays hot and thin",
        "Coolant temperature falls",
        "The DEF tank runs dry"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A clogged intercooler cannot cool the compressed air, so the air stays hot and thin and power drops. (a) is wrong: exhaust temperature would rise, not fall. (c) is wrong: the intercooler does not cool the coolant. (d) is wrong: DEF use is unrelated."
    },
    {
      "q": "In exhaust-flow order, the aftertreatment chain is:",
      "choices": ["SCR → DPF → DOC", "DPF → DOC → SCR", "DOC → DPF → SCR", "DOC → SCR → DPF"],
      "answer": 2,
      "explanation": "Correct: (c). Exhaust passes the oxidation catalyst first, then the particulate filter, then the SCR catalyst. (a), (b), and (d) all put a stage in the wrong position."
    },
    {
      "q": "Regeneration of a DPF is:",
      "choices": ["A filter replacement", "A controlled burn that clears trapped soot out of the filter", "A chemical wash of the SCR catalyst", "An oil change"],
      "answer": 1,
      "explanation": "Correct: (b). Regeneration raises exhaust temperature until trapped soot burns off, leaving only ash. (a) Replacement is a different, later step. (c) The SCR catalyst is not washed in regeneration. (d) An oil change has nothing to do with the DPF."
    },
    {
      "q": "Passive regeneration happens:",
      "choices": ["Only when the truck is parked", "On its own during sustained highway driving, when exhaust is naturally hot enough", "Every time the engine starts", "When the DEF tank is refilled"],
      "answer": 1,
      "explanation": "Correct: (b). Sustained highway driving makes exhaust hot enough for soot to burn off without a command. (a) Parked regeneration is an active, commanded event. (c) Starting does not make exhaust hot enough. (d) DEF has nothing to do with DPF regeneration."
    },
    {
      "q": "DEF is used to:",
      "choices": ["Clean the fuel injectors", "Supply ammonia for the SCR catalyst to convert NOx into nitrogen and water", "Cool the turbocharger", "Thin the engine oil"],
      "answer": 1,
      "explanation": "Correct: (b). Heat turns DEF's urea into ammonia, which reacts with NOx over the SCR catalyst. (a) DEF never enters the fuel system. (c) The turbo is cooled by oil and coolant. (d) DEF must never be mixed with engine oil."
    },
    {
      "q": "Ash in a DPF differs from soot because ash:",
      "choices": ["Burns off easily in regeneration", "Cannot be burned off in regeneration and accumulates for the life of the filter", "Is made of unburned fuel", "Only forms when the DEF tank is empty"],
      "answer": 1,
      "explanation": "Correct: (b). Ash is mineral residue that regeneration cannot remove, so it builds up until the filter needs cleaning or replacement. (a) That describes soot. (c) Unburned fuel makes smoke, not ash. (d) Ash comes from oil and fuel, not from DEF."
    },
    {
      "q": "Turbo lag is:",
      "choices": ["A failed turbo bearing", "The delay in boost build-up at low engine speed, when there is little exhaust energy to spin the turbo", "A clogged intercooler", "A stuck wastegate"],
      "answer": 1,
      "explanation": "Correct: (b). At low speed there is little exhaust flow, so the turbo takes time to spool. (a) A failed bearing is a fault, not lag. (c) A clogged intercooler restricts air at all speeds. (d) A stuck wastegate causes overboost or underboost, not lag."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Turbocharging & Aftertreatment: Quick Reference</h3>\n<p><strong>Turbo:</strong> Exhaust spins turbine → compressor pushes more air in → intercooler cools it (denser = more oxygen).</p>\n<p><strong>Aftertreatment order:</strong> DOC (burns HC and CO, makes heat) → DPF (traps soot) → SCR + DEF (NOx → nitrogen + water).</p>\n<p><strong>Regeneration:</strong> Controlled burn clearing soot. Passive on the highway; active when commanded. Short trips interrupt it.</p>\n<p><strong>Soot vs ash:</strong> Soot burns off; ash never does and accumulates for life. Oil burning fills the DPF with ash.</p>\n<p><strong>DEF:</strong> Separate tank, sprayed into exhaust — never in the fuel tank.</p>\n<p><strong>Watch out:</strong> Check boost leaks (pipes, clamps) before blaming the fuel system for low power and black smoke.</p>\n<p><strong>Self-check:</strong> Trace exhaust from the turbo through DOC, DPF, and SCR, and explain regeneration to a classmate.</p>\n"
};
