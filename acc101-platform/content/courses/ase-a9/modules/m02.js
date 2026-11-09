// ase-a9 - Module 2: Diesel Fuel Systems: Common Rail & HEUI
module.exports = {
  "number": 2,
  "slug": "diesel-fuel-systems-common-rail-heui",
  "title": "Diesel Fuel Systems: Common Rail & HEUI",
  "estTime": "3–4 hours",
  "objectives": [
    "Trace the diesel fuel path from the tank to the injector, low-pressure side and high-pressure side.",
    "Explain how a common rail system stores high-pressure fuel and fires injectors on command.",
    "Explain how a HEUI system uses pressurized engine oil to fire its injectors.",
    "Compare common rail and HEUI: what each one does well and where each one is vulnerable.",
    "Describe what happens when air, water, or dirt gets into a diesel fuel system."
  ],
  "sections": [
    {
      "heading": "The Fuel Path: Two Sides, One Job",
      "html": "<p>Every diesel fuel system has two sides. The <strong>low-pressure side</strong> moves fuel from the tank to the high-pressure pump: the tank, a feed (lift) pump, and the filters, including the water separator. Its job is to deliver a steady supply of clean, water-free fuel. The <strong>high-pressure side</strong> takes that fuel, pressurizes it to very high pressure, and delivers it to the injectors, which spray it into the cylinders. The two systems you must know — common rail and HEUI — are two different answers to the high-pressure side.</p>\n<p>Think of the low-pressure side as the supply chain and the high-pressure side as the precision instrument. A failure on the supply side — a clogged filter, a weak feed pump, air leaking into a line — starves the precision side, and the engine runs rough, loses power, or will not start. That is why so much diesel diagnosis starts at the filter and the feed pump, before anyone touches an injector.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Low pressure moves the fuel; high pressure sprays it. When a diesel runs badly, check the supply side first — filters, feed pump, air leaks — before blaming the expensive high-pressure parts.</div>"
    },
    {
      "heading": "Common Rail: One Rail, Many Injectors",
      "html": "<p>In a <strong>common rail</strong> system, a high-pressure pump fills a single shared pipe — the rail — with fuel at very high pressure, and holds it there. Each injector is connected to the rail, and the engine computer opens each injector electrically, for exactly as long as needed, at exactly the right moment. The rail is an accumulator: pressure is stored and ready, independent of engine speed, so the system can inject at high pressure even at idle.</p>\n<p>Because the computer controls each injection event, a common rail system can split one injection into several: a small pilot injection to soften the burn, the main injection for power, and sometimes a post injection to help the aftertreatment system. That flexibility is why modern diesels are quieter, cleaner, and more efficient than the mechanical-injection diesels that came before them.</p>\n<p>The weak points are precision and cleanliness. The pump, rail, and injectors work at very high pressure with very tight clearances. Dirt, water, or air in the fuel can score the pump, stick an injector, or send debris downstream. A single bad injector can leak fuel into a cylinder or return too much fuel to the tank — both are classic common rail faults you will diagnose in Modules 5 and 11.</p>"
    },
    {
      "heading": "HEUI: Oil Pressure Fires the Injector",
      "html": "<p><strong>HEUI</strong> stands for Hydraulically Actuated Electronic Unit Injection. Instead of a high-pressure fuel pump feeding a rail, each HEUI injector is its own pump: pressurized engine oil, supplied by a dedicated high-pressure oil pump, pushes down on an intensifier piston inside the injector, and that piston squeezes the fuel to injection pressure. An electronic solenoid, commanded by the engine computer, controls when the oil is allowed in — which controls when the fuel sprays.</p>\n<p>The clever part is the intensifier piston. Because the oil side of the piston is larger than the fuel side, the fuel pressure ends up several times higher than the oil pressure. So the system can reach injection pressure using oil pressure the engine can produce easily. HEUI gave older diesels — the well-known 7.3L and 6.0L Power Stroke engines are the classic examples — electronic control of injection timing and quantity without a high-pressure fuel pump.</p>\n<p>HEUI's weak point is the oil itself. The system depends on clean engine oil at the right level and in good condition, because that oil is the hydraulic fluid that fires the injectors. Dirty oil, low oil level, a weak high-pressure oil pump, or a leaking injector O-ring all show up as hard starting, rough running, or a no-start — especially when the engine is hot, when thin oil leaks past worn seals more easily. On a HEUI engine, the oil is part of the fuel system, and you diagnose it that way.</p>"
    },
    {
      "heading": "Common Rail vs HEUI: How to Tell Them Apart in the Bay",
      "html": "<p>Open the hood and the difference is visible. A common rail engine has a high-pressure fuel pump, a metal rail running along the top of the engine with a line to each injector, and a rail pressure sensor. A HEUI engine has a high-pressure oil pump, an oil rail or oil passages feeding the top of each injector, and injectors with both a fuel connection and an oil connection — plus an injection pressure regulator that controls the oil pressure.</p>\n<p>Diagnostically, the split is just as clear. On a common rail engine you chase rail pressure: is the pump building pressure, is the rail holding it, is an injector leaking it away? On a HEUI engine you chase oil pressure first: is the high-pressure oil pump building pressure, is the regulator controlling it, is oil leaking past an injector seal? The symptom may be the same — hard start, no start — but the test path follows the system.</p>\n<p>Both systems share one enemy: contamination. Water in diesel fuel rusts precision parts and grows organisms in the tank. Dirt scores pumps and sticks injectors. Air in the lines makes the engine stumble or die, because air compresses and fuel does not. The filter and water separator exist to stop all three, which is why Module 8 treats fuel quality and filtration as a subject of their own.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Low-pressure side (tank, feed pump, filters) supplies clean fuel; high-pressure side pressurizes it and sprays it.</li>\n<li>Common rail: one shared rail held at high pressure; the computer opens each injector electrically; pilot, main, and post injections are possible.</li>\n<li>HEUI: pressurized engine oil pushes an intensifier piston inside each injector, multiplying oil pressure into fuel pressure; the oil is part of the fuel system.</li>\n<li>Common rail diagnosis chases rail pressure; HEUI diagnosis chases oil pressure first.</li>\n<li>Water, dirt, and air are the shared enemies of both systems.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Replacing injectors before checking the supply side. A clogged filter or a weak feed pump starves every injector at once — new injectors will run just as badly on a starved system.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Checking the oil level on a HEUI engine as an afterthought. On HEUI, low or dirty oil is a fuel-system fault, not just a maintenance item — hard starts on a HEUI engine start with the dipstick.</div>\n<p><strong>Ready-to-work link:</strong> If you can sketch both fuel paths from memory — tank to injector, common rail and HEUI — you have this module. Module 3 adds air and exhaust: turbocharging and aftertreatment.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Common rail", "def": "A diesel injection system in which one shared high-pressure pipe (the rail) feeds all injectors, each opened electrically by the computer." },
    { "term": "HEUI", "def": "Hydraulically Actuated Electronic Unit Injection — injectors fired by pressurized engine oil pushing an intensifier piston." },
    { "term": "Feed pump", "def": "The low-pressure (lift) pump that moves fuel from the tank toward the high-pressure pump." },
    { "term": "High-pressure pump", "def": "The pump that raises fuel (common rail) or oil (HEUI) to the pressure needed for injection." },
    { "term": "Rail", "def": "The shared high-pressure fuel pipe in a common rail system; an accumulator that holds pressure ready for every injector." },
    { "term": "Rail pressure sensor", "def": "The sensor that reports fuel pressure in the common rail to the engine computer." },
    { "term": "Intensifier piston", "def": "The piston inside a HEUI injector whose larger oil side multiplies oil pressure into higher fuel pressure." },
    { "term": "Injection pressure regulator (IPR)", "def": "The valve that controls high-pressure oil pressure in a HEUI system, on command from the computer." },
    { "term": "Pilot injection", "def": "A small early squirt of fuel before the main injection, softening combustion noise." },
    { "term": "Post injection", "def": "A late squirt of fuel after the main injection, used to help the exhaust aftertreatment system." },
    { "term": "Water separator", "def": "The filter stage that traps water out of diesel fuel before it can reach precision parts." },
    { "term": "Return line", "def": "The line that carries excess fuel from the injectors and rail back to the tank." }
  ],
  "video": {
    "title": "How Diesel Common Rail Fuel Systems Work",
    "embedUrl": "https://www.youtube.com/embed/i15oN5Xdu10",
    "note": "Follow the fuel from the tank through the feed pump, filter, and high-pressure pump into the common rail, and watch how the computer times each injector. Compare what you see with the HEUI system described in this module.",
    "more": [
      { "title": "How Diesel Fuel Systems Work: Common Rail vs. HEUI (AMSOIL)", "url": "https://www.youtube.com/watch?v=LbqeO7t1gVc" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Trace the fuel path on a common rail diesel from the tank to the combustion chamber, naming each stop in order.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Tank → feed (lift) pump → fuel filter and water separator. Step 2: High-pressure pump → common rail. Step 3: Rail → injector → combustion chamber, with excess fuel returning to the tank through the return line.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A common rail engine idles roughly but smooths out at higher engine speeds. Using what you know about the rail as an accumulator, explain why the computer can still inject at high pressure at idle.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The rail stores fuel at high pressure, ready for every injector, independent of engine speed. Step 2: The high-pressure pump keeps the rail filled, so even at idle the injectors have full pressure available — rough idle therefore points at an injector, a sensor, or a pressure-control problem, not at low engine speed itself.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Explain in two or three sentences how a HEUI injector turns oil pressure into fuel pressure.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A dedicated high-pressure oil pump sends pressurized engine oil to the top of the injector. Step 2: The oil pushes an intensifier piston whose fuel side is smaller, so the fuel pressure ends up several times higher than the oil pressure. Step 3: A solenoid, commanded by the computer, controls when the oil enters — which controls when the fuel sprays.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A HEUI diesel is hard to start when hot but starts fine when cold. What should you check first, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check the engine oil level and condition, and the high-pressure oil system. Step 2: On HEUI the oil fires the injectors, and hot thin oil leaks past worn injector seals or a weak pump more easily than cold thick oil — so a hot hard start is often an oil-pressure problem, not a fuel problem.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A technician replaces all six injectors on a common rail diesel, but the engine still runs rough. What did the technician skip, and what should the next test be?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The supply side — filters, feed pump, and air leaks — was skipped, and a starved system makes even new injectors run badly. Step 2: Next, check the fuel filter and water separator, verify the feed pump delivers fuel, and check for air in the lines before touching another injector.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> You open the hood of an unfamiliar diesel. Name two things you would look for to tell whether it is a common rail or a HEUI engine.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A common rail engine shows a high-pressure fuel pump and a metal rail running along the engine with a line to each injector, plus a rail pressure sensor. Step 2: A HEUI engine shows a high-pressure oil pump, oil passages feeding the top of each injector, and injectors with both fuel and oil connections — plus an injection pressure regulator.</p>"
    }
  ],
  "quiz": [
    {
      "q": "In a common rail system, the rail is:",
      "choices": ["A low-pressure pipe that returns fuel to the tank", "A shared high-pressure pipe that stores pressurized fuel for all injectors", "The oil passage that feeds the injectors", "A filter housing"],
      "answer": 1,
      "explanation": "Correct: (b). The rail is an accumulator holding fuel at high pressure, ready for every injector. (a) describes the return line. (c) describes HEUI oil passages. (d) The filter housing is a separate part on the low-pressure side."
    },
    {
      "q": "In a HEUI system, what fires the injector?",
      "choices": ["A camshaft lobe pushing directly on the injector", "Pressurized engine oil pushing an intensifier piston inside the injector", "High-pressure fuel from a common rail", "A spark plug"],
      "answer": 1,
      "explanation": "Correct: (b). High-pressure oil drives the intensifier piston, which multiplies oil pressure into fuel pressure. (a) describes older mechanical unit injectors. (c) describes common rail, not HEUI. (d) Diesels have no spark plugs."
    },
    {
      "q": "The low-pressure side of a diesel fuel system includes:",
      "choices": ["The rail and the injectors", "The tank, feed pump, and filters", "The intensifier piston and solenoid", "The turbocharger and intercooler"],
      "answer": 1,
      "explanation": "Correct: (b). Tank, feed pump, and filters move fuel at low pressure toward the high-pressure pump. (a) is the high-pressure side. (c) are HEUI injector internals. (d) are air-path parts, not fuel parts."
    },
    {
      "q": "Pilot injection is used to:",
      "choices": ["Prime the fuel system after a filter change", "Start combustion gently and soften diesel clatter", "Clean the DPF", "Fill the rail before cranking"],
      "answer": 1,
      "explanation": "Correct: (b). A small early squirt starts the burn gently, softening the sharp pressure rise and the noise. (a) Priming is a service procedure. (c) DPF cleaning uses regeneration, not pilot injection. (d) The pump fills the rail; pilot injection happens during running."
    },
    {
      "q": "A HEUI diesel that is hard to start when hot but fine when cold most likely has:",
      "choices": ["A clogged air filter", "An oil-pressure problem — worn seals or a weak high-pressure oil pump letting hot, thin oil leak past", "A dead glow plug relay only", "A cracked exhaust manifold"],
      "answer": 1,
      "explanation": "Correct: (b). Hot thin oil leaks past worn HEUI seals more easily, so oil pressure falls and injectors cannot fire properly. (a) A clogged air filter affects hot and cold alike. (c) Glow plugs matter most when cold, not hot. (d) An exhaust leak does not cause a hot-only hard start."
    },
    {
      "q": "What does the injection pressure regulator (IPR) control in a HEUI system?",
      "choices": ["Fuel pressure in the common rail", "High-pressure oil pressure, on command from the computer", "Turbo boost pressure", "Glow plug on-time"],
      "answer": 1,
      "explanation": "Correct: (b). The IPR regulates the oil pressure that fires the injectors. (a) There is no common rail in a HEUI system. (c) Boost is controlled by the turbo wastegate or vanes. (d) Glow plug timing is controlled by the glow plug module."
    },
    {
      "q": "Water in diesel fuel is dangerous because it:",
      "choices": ["Makes the fuel burn hotter", "Rusts precision parts and can grow organisms in the tank", "Improves atomization", "Raises the fuel's energy content"],
      "answer": 1,
      "explanation": "Correct: (b). Water corrodes pumps and injectors and supports growth in the tank — that is why the water separator exists. (a) Water does not make fuel burn hotter. (c) Water harms atomization. (d) Water adds no energy; it displaces fuel."
    },
    {
      "q": "A single common rail injector that returns too much fuel to the tank will cause:",
      "choices": ["Rail pressure to fall, so the engine runs rough or loses power", "The turbo to overspeed", "The glow plugs to stay on", "The DPF to fill with ash instantly"],
      "answer": 0,
      "explanation": "Correct: (a). Excess return flow bleeds pressure out of the rail, so the remaining injectors cannot spray properly. (b) Return flow does not drive the turbo. (c) Glow plugs are a separate cold-start circuit. (d) Ash builds over a long service life, not from one leaking injector."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Common Rail & HEUI: Quick Reference</h3>\n<p><strong>Fuel path:</strong> Tank → feed pump → filter/water separator → high-pressure pump → injectors.</p>\n<p><strong>Common rail:</strong> One shared rail held at high pressure; computer opens each injector electrically; pilot, main, post injections.</p>\n<p><strong>HEUI:</strong> Pressurized engine oil pushes an intensifier piston in each injector; oil pressure × piston ratio = fuel pressure; IPR controls oil pressure.</p>\n<p><strong>Diagnosis split:</strong> Common rail → chase rail pressure. HEUI → chase oil pressure first (level, condition, pump, seals).</p>\n<p><strong>Shared enemies:</strong> Water, dirt, air in the fuel.</p>\n<p><strong>Watch out:</strong> Check the supply side (filter, feed pump, air leaks) before replacing injectors.</p>\n<p><strong>Self-check:</strong> Sketch both fuel paths from memory and explain the intensifier piston to a classmate.</p>\n"
};
