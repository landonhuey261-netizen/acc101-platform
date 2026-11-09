// ase-a1 - Module 3: Cylinder Head & Valve Train
module.exports = {
  "number": 3,
  "slug": "cylinder-head-valve-train",
  "title": "Cylinder Head & Valve Train",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe what the cylinder head does and how it seals to the block.",
    "Explain how the valve train opens and closes the valves in time with the pistons.",
    "Compare overhead-cam and pushrod valve-train layouts.",
    "Explain what valve timing is and how variable valve timing changes it.",
    "Recognize the symptoms of valve-train problems: noise, misfire, and loss of power."
  ],
  "sections": [
    {
      "heading": "What the Cylinder Head Does",
      "html": "<p>The cylinder head is the lid of the engine. It caps the top of the block, closes off each cylinder, and holds the parts that make each cylinder breathe and fire: the intake and exhaust valves, the valve springs, the spark plugs, and — in most modern engines — the camshafts. It also carries the passages for coolant and oil, and the intake and exhaust ports that guide gases in and out. A head has to do all of this while surviving the heat of combustion on one side and the pressure of the power stroke on the other, thousands of times a minute.</p>\n<p>The head seals to the block with the <strong>head gasket</strong>, a flat seal that must hold combustion pressure in, keep coolant in its passages, and keep oil in its passages — three different jobs in one thin part. That is why head-gasket failure is so disruptive: one failed seal can mix oil and coolant, leak pressure between cylinders, or push combustion gas into the cooling system, and the symptoms depend on where the seal broke.</p>"
    },
    {
      "heading": "The Valve Train",
      "html": "<p>The valve train is the set of parts that opens and closes the valves. In an <strong>overhead-cam (OHC)</strong> engine, the camshaft sits in the head and its lobes press directly on the valves (or on small followers between the lobe and the valve). In a <strong>pushrod (OHV)</strong> engine, the camshaft sits in the block and pushes long rods up to rocker arms in the head, which then press the valves open. Overhead-cam designs are more common today because they are simpler at high engine speeds; pushrod designs are compact and still used in many large engines.</p>\n<p>Timing is everything. The intake valve must open as the piston starts down on the intake stroke and close as compression begins; the exhaust valve must open as the power stroke ends and close as the next intake begins. The camshaft is driven by the crankshaft through a timing chain or belt, so the two stay in step. If that drive slips or breaks, the valves open at the wrong time — and in many engines the pistons can hit the open valves, causing serious damage.</p>"
    },
    {
      "heading": "Variable Valve Timing",
      "html": "<p>A fixed camshaft is a compromise: valve timing that works well at low speed is not ideal at high speed, and the reverse. <strong>Variable valve timing (VVT)</strong> solves this by shifting the camshaft's position relative to the crankshaft while the engine runs, usually with oil pressure acting on a cam phaser at the end of the camshaft. At low speed the timing favors smooth idle and low emissions; at high speed it favors power.</p>\n<p>VVT only works if the oil is clean and at the right level, because oil pressure does the moving. A VVT system with dirty or low oil can rattle on startup, set a fault code, or lose power — and the fix is often an oil change and a clean filter, not a new camshaft. That is a good example of how one system (lubrication) can look like a fault in another (valve timing).</p>"
    },
    {
      "heading": "Valve-Train Problems and Symptoms",
      "html": "<p>Valve-train trouble shows up in a few recognizable ways. A <strong>ticking or tapping noise</strong> that follows engine speed often means a valve lash problem — too much clearance between the cam and the valve — or a worn follower. A <strong>misfire on one cylinder</strong> with low compression can mean a burned valve that no longer seals. <strong>Loss of power at high speed</strong> with a rattling noise can mean a VVT fault or a stretched timing chain. And a <strong>timing belt or chain failure</strong> can stop the engine dead or, worse, let pistons strike valves.</p>\n<p>Diagnosis follows the same order as Module 2: listen first, test second. A compression test and a leakdown test tell you whether the valves seal; a scan tool can show whether the VVT system is doing what the computer asks; and a careful listen can separate a valve tick from an injector tick or an exhaust leak. Never guess at the head — test it.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>The cylinder head closes the cylinders and holds the valves, plugs, and camshafts.</li>\n<li>The valve train opens valves (camshaft) and closes them (springs), in time with the pistons.</li>\n<li>Overhead-cam engines put the cam in the head; pushrod engines put it in the block and use rods and rockers.</li>\n<li>Variable valve timing shifts cam position with oil pressure to suit low and high speeds.</li>\n<li>Symptoms: ticking means clearance trouble, one-cylinder misfire with low compression means a burned valve, rattle at high speed can mean VVT or chain trouble.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Replacing a camshaft or a set of lifters for a VVT rattle when the real fault is dirty oil or low oil level. Check the oil first — it is the cheapest test in the shop.</div>\n<p><strong>Ready-to-Work link:</strong> If you can trace the path from crankshaft to camshaft to valve and explain why timing matters, you have this module. Module 4 goes below the head: the block and the parts inside it.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Cylinder head",
      "def": "The casting that caps the block, holding the valves, spark plugs, and often the camshafts."
    },
    {
      "term": "Head gasket",
      "def": "The seal between the head and the block that holds combustion pressure in and keeps coolant and oil in their own passages."
    },
    {
      "term": "Valve train",
      "def": "All the parts that open and close the valves: camshaft, followers or lifters, pushrods and rocker arms where fitted, and valve springs."
    },
    {
      "term": "Overhead cam (OHC)",
      "def": "A layout with the camshaft in the cylinder head, acting directly on the valves; most modern engines use it."
    },
    {
      "term": "Pushrod (OHV)",
      "def": "A layout with the camshaft in the block, pushing long rods up to rocker arms that open the valves."
    },
    {
      "term": "Camshaft",
      "def": "The shaft with lobes that opens each valve at the right moment in the cycle."
    },
    {
      "term": "Valve spring",
      "def": "The spring that closes a valve once the cam lobe has passed."
    },
    {
      "term": "Rocker arm",
      "def": "A pivoting lever, used in pushrod engines, that transfers pushrod motion to the valve."
    },
    {
      "term": "Valve lash",
      "def": "The small clearance between the cam (or rocker) and the valve; too much clearance causes a ticking noise."
    },
    {
      "term": "Variable valve timing (VVT)",
      "def": "A system that shifts camshaft position while the engine runs, so valve timing suits both low and high speeds."
    },
    {
      "term": "Cam phaser",
      "def": "The oil-pressure device at the end of a camshaft that changes its position for variable valve timing."
    },
    {
      "term": "Timing chain / timing belt",
      "def": "The drive that connects the crankshaft to the camshaft so valves open in step with the pistons."
    },
    {
      "term": "Intake port",
      "def": "The passage in the head that carries the air-fuel mixture to the intake valve."
    },
    {
      "term": "Exhaust port",
      "def": "The passage in the head that carries burned gases from the exhaust valve to the exhaust manifold."
    },
    {
      "term": "Valve seat",
      "def": "The machined surface in the head that the valve seals against when closed."
    },
    {
      "term": "Burned valve",
      "def": "A valve whose sealing face is heat-damaged so it cannot seal the cylinder."
    }
  ],
  "video": {
    "title": "Engines 101: How Does a Valvetrain Work?",
    "embedUrl": "https://www.youtube.com/embed/JqA5Keel6Js",
    "note": "Toyota's Engines 101 walkthrough shows the valvetrain in action and explains how the camshaft, valves, and springs work together. Watch how the valves open and close in time with the pistons — that timing is the heart of this module.",
    "more": [
      {
        "title": "A 101 on Valve Trains",
        "url": "https://www.youtube.com/watch?v=FeSZm2cVqPQ"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A cylinder head is removed and the head gasket shows a break between two neighboring cylinders. What symptoms would you expect, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Combustion pressure leaks from one cylinder into the other, so both cylinders lose pressure. Step 2: Expect a rough idle, loss of power, and low compression readings on both neighboring cylinders. Step 3: The gasket is the only seal between those two cylinders, so a break there hits exactly those two.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Explain the path of motion from the crankshaft to an opening valve in an overhead-cam engine.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The crankshaft drives the timing chain or belt. Step 2: The chain or belt turns the camshaft in the head. Step 3: A cam lobe presses on the valve (or its follower) and pushes it open against its spring. Step 4: Once the lobe passes, the spring closes the valve.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A car has a ticking noise that follows engine speed and gets quieter as the engine warms up. What is the most likely valve-train cause, and what would you check first?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A speed-following tick often means too much valve lash or a worn follower. Step 2: Check the oil level and condition first — low or dirty oil starves the valve train and makes the tick worse. Step 3: If the oil is fine, measure the valve clearances against the service information.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Why does a variable valve timing system need clean oil at the right level to work?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: VVT moves the camshaft with oil pressure acting on the cam phaser. Step 2: Dirty oil clogs the small passages and the control solenoid, and low oil means low pressure. Step 3: Without proper oil pressure the phaser cannot move, so timing stays wrong and the engine rattles or loses power.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A timing belt breaks while an engine is running. What are the two possible outcomes, and what decides between them?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The camshaft stops turning, so the valves stop opening and closing. Step 2: In a non-interference engine the pistons cannot reach the open valves, so the engine simply stops and needs a new belt. Step 3: In an interference engine the pistons can strike the valves left open, bending valves and damaging pistons — a much bigger repair.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> One cylinder misfires and its compression reading is low, but a leakdown test shows air hissing from the tailpipe. Name the failed part and explain the full chain of evidence.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Low compression says the cylinder does not seal. Step 2: Air from the tailpipe says the leak is on the exhaust side. Step 3: The exhaust valve is not sealing — most likely burned. Step 4: The burned valve explains both the low compression and the misfire, because the cylinder cannot hold the mixture it needs to burn.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The head gasket's job includes:",
      "choices": [
        "Holding the valves open",
        "Sealing combustion pressure in and keeping coolant and oil in their own passages",
        "Pumping oil to the camshaft",
        "Driving the timing chain"
      ],
      "answer": 1,
      "explanation": "Correct: (b). One thin seal holds combustion pressure in and keeps coolant and oil separated. (a) The camshaft opens the valves. (c) The oil pump moves oil. (d) The crankshaft drives the timing chain."
    },
    {
      "q": "In an overhead-cam engine, the camshaft:",
      "choices": [
        "Sits in the block and uses pushrods",
        "Sits in the cylinder head and acts on the valves directly",
        "Sits in the oil pan",
        "Is driven by the alternator"
      ],
      "answer": 1,
      "explanation": "Correct: (b). OHC puts the cam in the head, acting directly on the valves or their followers. (a) That describes a pushrod (OHV) layout. (c) The oil pan holds oil, not the camshaft. (d) The alternator is driven by a belt; it drives nothing."
    },
    {
      "q": "Valve springs do what?",
      "choices": [
        "Open the valves",
        "Close the valves after the cam lobe passes",
        "Drive the camshaft",
        "Seal the head gasket"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The cam lobe pushes the valve open; the spring snaps it shut. (a) The camshaft opens the valves. (c) The timing chain or belt drives the camshaft. (d) The head gasket seals by being clamped between head and block."
    },
    {
      "q": "Variable valve timing changes valve timing by:",
      "choices": [
        "Changing the spark plug gap",
        "Shifting the camshaft's position with oil pressure while the engine runs",
        "Opening the throttle wider",
        "Adding more fuel"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Oil pressure moves the cam phaser, shifting cam position to suit low or high speed. (a) Spark plug gap affects ignition, not valve timing. (c) The throttle controls air, not valve timing. (d) Fuel quantity does not move the camshaft."
    },
    {
      "q": "A ticking noise that follows engine speed most often points to:",
      "choices": [
        "A worn tire",
        "Too much valve clearance or a worn follower",
        "A loose battery cable",
        "A clogged air filter"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Valve lash trouble ticks in time with the camshaft, which follows engine speed. (a) Tire noise follows road speed, not engine speed. (c) A loose cable causes starting or charging trouble, not ticking. (d) A clogged filter causes poor running, not a tick."
    },
    {
      "q": "If a timing chain slips, the result is:",
      "choices": [
        "The valves open at the wrong time relative to the pistons",
        "The engine gets more fuel",
        "The oil pressure rises",
        "The brakes fail"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The camshaft and crankshaft fall out of step, so valves open early or late. (b) Fuel delivery is separate from valve timing. (c) Oil pressure is unrelated to the chain. (d) The brakes are a separate system."
    },
    {
      "q": "A burned exhaust valve would show up as:",
      "choices": [
        "High compression on that cylinder",
        "Low compression on that cylinder and air hissing from the tailpipe on a leakdown test",
        "A full coolant reservoir",
        "A quiet engine"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A burned valve cannot seal, so compression is low and leakdown air escapes through the exhaust. (a) A burned valve lowers compression. (c) Coolant level is a head-gasket clue, not a valve clue. (d) A burned valve causes a misfire and rough running, not quiet running."
    },
    {
      "q": "Why is a VVT rattle sometimes fixed by an oil change?",
      "choices": [
        "Because oil changes the spark timing",
        "Because VVT moves with oil pressure, and dirty or low oil starves the cam phaser",
        "Because fresh oil cools the radiator",
        "Because the oil filter drives the camshaft"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The cam phaser is moved by oil pressure; dirty or low oil means it cannot move properly. (a) Oil does not set spark timing. (c) Oil does not cool the radiator. (d) The oil filter cleans oil; it drives nothing."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Cylinder Head & Valve Train: Quick Reference</h3>\n<p><strong>Core idea:</strong> The head closes the cylinders and holds the breathing parts — valves, plugs, camshafts — in exact time with the pistons.</p>\n<p><strong>Valve train:</strong> Camshaft opens valves, springs close them; timing chain or belt keeps cam and crank in step.</p>\n<p><strong>Layouts:</strong> Overhead cam (cam in the head, direct action) vs pushrod (cam in the block, rods and rockers).</p>\n<p><strong>VVT:</strong> Oil pressure shifts cam position so timing suits low and high speeds — it needs clean oil at the right level.</p>\n<p><strong>Watch out:</strong> A ticking valve train with dirty or low oil may need an oil change, not a new camshaft.</p>\n<p><strong>Self-check:</strong> Trace crankshaft → timing drive → camshaft → valve, and explain what a slipped timing chain does. If you can, you have this module.</p>\n"
};
