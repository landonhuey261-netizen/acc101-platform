module.exports = {
  "number": 10,
  "slug": "a9-diesel-review",
  "title": "A9 Review — Light Vehicle Diesel Engines",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how a diesel ignites fuel without a spark plug, and what compression has to do with it.",
    "Trace fuel through a common-rail system and diagnose smoke by its color.",
    "Explain DPF, SCR, and DEF aftertreatment and what happens when each one fails.",
    "Diagnose hard starting, glow-plug faults, and diesel-specific driveability faults.",
    "Score the A9 practice exam timed (50 questions, 75 minutes) at the 70% benchmark."
  ],
  "sections": [
    {
      "heading": "Diesel Fundamentals — Compression Ignition",
      "html": "<p>A diesel has no spark plug. It draws in air, compresses it until it is hot enough to ignite fuel on its own — roughly twice the compression ratio of a gasoline engine — and then injects fuel directly into that hot air. The fuel burns as it is injected, not all at once, which is why injection timing and pressure control everything about how a diesel runs. Low compression in a diesel is a no-start, not a rough idle: if the air never gets hot enough, the fuel never ignites.</p><p>That is why glow plugs exist. On a cold start the air is cold and the metal is cold, so the glow plugs — small heaters in the combustion chamber — warm the air before cranking. A diesel that starts hard cold but fine warm has a glow-plug or glow-control fault until proven otherwise; a diesel that starts hard hot and cold has a compression or fuel-delivery fault. And diesel fuel itself is the lubricant for the high-pressure pump — fuel quality and filtration are not maintenance details, they are the pump's life support.</p><p><div class=\"callout\"><strong>Key idea:</strong> No spark, no problem — until compression falls. A diesel that will not start cold is usually glow plugs; a diesel that will not start at any temperature is usually compression or fuel delivery.</div></p>"
    },
    {
      "heading": "Common Rail — Pressure, Timing, and Atomization",
      "html": "<p>A common-rail system separates pressure generation from injection. A high-pressure pump feeds a single rail that holds fuel at very high pressure all the time, and the injectors — opened by the computer — spray precisely timed, finely atomized fuel into each cylinder. Multiple injections per cycle are normal: a small pilot injection quiets combustion, the main injection makes the power, and a post-injection can help the aftertreatment.</p><p>The failure mode to remember is contamination. The high-pressure pump is lubricated by the diesel itself, so water or dirt in the fuel, or running the tank dry, wears the pump — and a worn pump sheds metal through the whole high-pressure system: rail, lines, and injectors. That is why a pump failure is never just a pump job, and why the fuel filter and water separator are the cheapest insurance on a diesel. Low rail pressure under load, with normal pressure at idle, points at the low-pressure supply — the lift pump, the filter, or a restriction — because supply faults hide at idle and show up when the engine is drinking hard.</p><p><div class=\"callout\"><strong>Key idea:</strong> Supply faults hide at idle and show up under load. If rail pressure is fine at idle and low at full throttle, look at the lift pump and the filter before the high-pressure pump.</div></p>"
    },
    {
      "heading": "Smoke — Read the Color",
      "html": "<p>Diesel smoke is diagnostic by color. <strong>Black smoke</strong> is unburned fuel — too much fuel for the air available, or air that is not getting in: a clogged air filter, a failed turbo, or an injector over-fueling. <strong>Blue smoke</strong> is burning oil — worn rings, valve seals, or a turbo leaking oil into the intake. <strong>White smoke</strong> is unburned fuel or coolant: white smoke on a cold start that clears as the engine warms is often a glow-plug fault (fuel that never ignited); white smoke that never clears and smells sweet is coolant, usually a head-gasket or EGR-cooler leak.</p><p>The exam's smoke questions always give you the color and the conditions. Black under load is fuel or air; blue all the time is oil; white cold-only is glow plugs; white always is coolant. Name the color and the conditions before you read the choices, and the answer is usually the only one that fits both.</p><p><div class=\"callout\"><strong>Key idea:</strong> Black = fuel. Blue = oil. White cold-only = glow plugs. White always = coolant. Color plus conditions names the system.</div></p>"
    },
    {
      "heading": "Aftertreatment — DPF, SCR, and DEF",
      "html": "<p>Modern diesels clean their exhaust in stages. The <strong>DPF (diesel particulate filter)</strong> traps soot and burns it off in a regeneration — a controlled high-temperature burn that needs the exhaust hot enough, which is why short trips that never get the exhaust hot cause DPF clogging and warning lights. The <strong>SCR (selective catalytic reduction)</strong> system injects <strong>DEF (diesel exhaust fluid)</strong> — a urea solution — into the exhaust, where it converts nitrogen oxides into nitrogen and water.</p><p>The diagnostic split: a DPF that will not regenerate is usually a driving-pattern or temperature problem, not a dead filter — check for a failed temperature sensor or a thermostat keeping the engine cool before condemning the DPF. A DEF fault — a bad quality sensor, a crystallized injector, or an empty tank — puts the car into a reduced-power or no-start countdown on many vehicles, and the fix is the DEF system, not the engine. Contaminated DEF (diesel in the DEF tank, or the wrong fluid) damages the SCR system and is an expensive mistake.</p><p><div class=\"callout\"><strong>Key idea:</strong> A DPF that will not regen is usually a temperature or driving-pattern problem. A DEF fault is a countdown, not a suggestion — fix the DEF system before the car refuses to start.</div></p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> compression ignites the fuel; glow plugs are for cold starts; common-rail pressure is made by the pump and spent by the injectors; smoke color plus conditions names the system; DPF needs heat, SCR needs good DEF.</p><p>The A9 exam is 50 questions in 75 minutes. Remember the honesty note: A9 is a separate specialty and does <strong>not</strong> count toward Master Technician status — but it is still a full ASE credential in its own right, and the diesel work in the bay pays for knowing it.</p><p><div class=\"callout\"><strong>Key idea:</strong> Common mistake: replacing the high-pressure pump for a low rail-pressure reading at full throttle. Check the lift pump, the filter, and the water separator first — supply faults hide at idle.</div></p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Compression ignition",
      "def": "Ignition by the heat of compressed air, with no spark plug."
    },
    {
      "term": "Glow plug",
      "def": "Heater in the combustion chamber that warms the air for a cold start."
    },
    {
      "term": "Common rail",
      "def": "A single high-pressure fuel rail feeding all injectors; pressure is made by the pump, injection is timed by the computer."
    },
    {
      "term": "Pilot injection",
      "def": "A small early injection that quiets combustion before the main injection."
    },
    {
      "term": "High-pressure pump",
      "def": "Pressurizes fuel for the common rail; lubricated by the diesel itself."
    },
    {
      "term": "Lift pump",
      "def": "Low-pressure pump that supplies fuel from the tank to the high-pressure pump."
    },
    {
      "term": "Water separator",
      "def": "Traps water from the diesel before it reaches the high-pressure pump; water in the fuel wears the pump."
    },
    {
      "term": "DPF",
      "def": "Diesel particulate filter — traps soot and burns it off in regeneration."
    },
    {
      "term": "Regeneration",
      "def": "The controlled high-temperature burn that clears soot from the DPF; needs the exhaust hot enough."
    },
    {
      "term": "SCR",
      "def": "Selective catalytic reduction — uses DEF to convert nitrogen oxides into nitrogen and water."
    },
    {
      "term": "DEF",
      "def": "Diesel exhaust fluid — a urea solution injected into the exhaust for the SCR system."
    },
    {
      "term": "EGR cooler",
      "def": "Cools exhaust gas before it is recirculated; a leaking cooler puts coolant into the intake and makes white smoke."
    },
    {
      "term": "Turbocharger",
      "def": "Uses exhaust energy to force more air into the engine; a failed turbo gives black smoke under load."
    },
    {
      "term": "Black/blue/white smoke",
      "def": "Black = unburned fuel; blue = burning oil; white = unburned fuel or coolant."
    }
  ],
  "video": {
    "title": "Running Your Diesel Low Can Cost You $7,000 — The Common-Rail Pump",
    "embedUrl": "https://www.youtube.com/embed/421Cw9UcjoM",
    "note": "Follow one litre of diesel from the tank to the injectors, see inside the high-pressure pump, and learn why a worn pump seeds metal through the whole system — the failure mode the A9 exam keeps coming back to.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1 — Cold start.</strong> A 2017 Ram 1500 EcoDiesel starts hard on cold mornings but starts fine once warm. What is the most likely fault?</p>",
      "solution": "<p><strong>Answer:</strong> The glow-plug system. Step 1: cold starts need the glow plugs to warm the combustion air; warm starts do not. Step 2: a fault that only appears cold is a cold-start aid — glow plugs, their relay, or their control. Step 3: test the glow plugs for resistance and check the relay's output before testing compression.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2 — Rail pressure.</strong> A 2018 Chevrolet Silverado diesel shows normal rail pressure at idle but low rail pressure at full throttle, with a loss of power. Where is the fault?</p>",
      "solution": "<p><strong>Answer:</strong> The low-pressure supply — the lift pump, the fuel filter, or a restriction. Step 1: the high-pressure pump can make pressure at idle, so it is working. Step 2: at full throttle the engine drinks hard and the supply cannot keep up. Step 3: check the filter and water separator, then test lift-pump output — supply faults hide at idle.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3 — Smoke.</strong> A 2016 Ford F-250 diesel blows black smoke under load and has lost power. The air filter is new. What is the most likely cause?</p>",
      "solution": "<p><strong>Answer:</strong> Too much fuel for the air available — most likely a turbo fault or an over-fueling injector. Step 1: black smoke is unburned fuel. Step 2: the air filter is new, so the air restriction is elsewhere — check turbo boost pressure. Step 3: if boost is low, the turbo is not delivering air; if boost is normal, suspect an injector delivering too much fuel.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4 — White smoke.</strong> A 2019 Jeep Grand Cherokee diesel blows white smoke that never clears, and the smoke smells sweet. The coolant level is dropping. What is the fault?</p>",
      "solution": "<p><strong>Answer:</strong> Coolant entering the combustion chamber — most likely a head gasket or an EGR-cooler leak. Step 1: white smoke that never clears plus a sweet smell is coolant burning. Step 2: the dropping coolant level confirms coolant is going somewhere. Step 3: pressure-test the cooling system and check for combustion gas in the coolant before pulling the head.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5 — DPF.</strong> A 2017 GMC Sierra diesel that only does short trips has a DPF warning light and reduced power. What is the most likely cause, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> The DPF is clogged because regeneration never completes — short trips never get the exhaust hot enough. Step 1: regeneration needs sustained high exhaust temperature. Step 2: check the exhaust temperature sensors and the thermostat first — a cool-running engine cannot regen. Step 3: the fix is a forced regeneration (or a highway drive at sustained speed) after the temperature fault is repaired, not a new DPF.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6 — DEF.</strong> A 2018 Ram 2500 shows a DEF system warning and a countdown to reduced power. The DEF tank is full. What should be checked?</p>",
      "solution": "<p><strong>Answer:</strong> The DEF quality and the DEF injector/system. Step 1: a full tank rules out an empty tank. Step 2: check DEF quality — contaminated or old DEF, or diesel accidentally put in the DEF tank, damages the SCR system. Step 3: check the DEF injector for crystallization and the quality sensor's reading; the countdown is real and the car will limit power if it is ignored.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A diesel starts hard cold but fine warm. What is the most likely fault?",
      "choices": [
        "Low compression",
        "The glow-plug system",
        "A weak high-pressure pump",
        "A clogged DPF"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Cold starts need glow plugs to warm the air; warm starts do not, so a cold-only fault is the cold-start aid. (a) is wrong: low compression causes hard starting at all temperatures. (c) is wrong: a weak pump causes low power and low rail pressure, not a cold-only no-start. (d) is wrong: a clogged DPF causes reduced power and warning lights, not a cold start fault."
    },
    {
      "q": "Rail pressure is normal at idle but low at full throttle. Where is the fault?",
      "choices": [
        "The high-pressure pump",
        "The low-pressure supply — lift pump, filter, or restriction",
        "The injectors",
        "The glow plugs"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The high-pressure pump works at idle, so the supply cannot keep up when demand rises — a supply fault that hides at idle. (a) is wrong: a failed high-pressure pump would not make normal pressure at idle. (c) is wrong: injectors affect individual cylinders, not rail pressure under load. (d) is wrong: glow plugs affect cold starts only."
    },
    {
      "q": "Black smoke under load most likely means:",
      "choices": [
        "Burning oil",
        "Unburned fuel — too much fuel for the air available",
        "Coolant in the combustion chamber",
        "A failed glow plug"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Black smoke is fuel that never burned — too much fuel, or not enough air. (a) is wrong: burning oil is blue smoke. (c) is wrong: coolant is white smoke with a sweet smell. (d) is wrong: a failed glow plug gives white smoke on a cold start."
    },
    {
      "q": "White smoke that never clears and smells sweet, with dropping coolant, means:",
      "choices": [
        "A glow-plug fault",
        "Coolant entering the combustion chamber",
        "A clogged air filter",
        "Bad diesel fuel"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Sweet-smelling white smoke plus coolant loss is coolant burning — a head gasket or EGR-cooler leak. (a) is wrong: a glow-plug fault gives white smoke only on a cold start, and it clears. (c) is wrong: a clogged filter gives black smoke. (d) is wrong: bad fuel gives rough running and smoke of other colors, not sweet white smoke with coolant loss."
    },
    {
      "q": "A DPF that only does short trips clogs because:",
      "choices": [
        "The filter is defective",
        "Regeneration never completes — the exhaust never gets hot enough",
        "The DEF tank is empty",
        "The turbo has failed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Regeneration needs sustained high exhaust temperature, which short trips never reach. (a) is wrong: the filter is doing its job — it is the driving pattern that prevents cleaning. (c) is wrong: DEF is the SCR system, not the DPF. (d) is wrong: a failed turbo gives black smoke and low power, not a DPF clog."
    },
    {
      "q": "What does DEF do in the SCR system?",
      "choices": [
        "It traps soot",
        "It is a urea solution that converts nitrogen oxides into nitrogen and water",
        "It lubricates the high-pressure pump",
        "It cools the exhaust"
      ],
      "answer": 1,
      "explanation": "Correct: (b). DEF is injected into the exhaust for the SCR catalyst to convert NOx into nitrogen and water. (a) is wrong: soot trapping is the DPF's job. (c) is wrong: the diesel fuel lubricates the pump. (d) is wrong: DEF is a reactant, not a coolant."
    },
    {
      "q": "A worn high-pressure pump sheds metal through the system. Why is a pump failure never just a pump job?",
      "choices": [
        "The pump is expensive",
        "Metal contaminates the rail, lines, and injectors, so the whole high-pressure system must be cleaned or replaced",
        "The pump cannot be removed",
        "The tank must be replaced too"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Metal from the pump travels through the rail and lines to the injectors — fitting a new pump onto a contaminated system kills the new pump. (a) is wrong: cost is not the technical reason. (c) is wrong: the pump can be removed. (d) is wrong: the tank is on the low-pressure side and is flushed, not automatically replaced."
    },
    {
      "q": "Does A9 count toward Master Automobile Technician status?",
      "choices": [
        "Yes — it is one of the eight",
        "No — A9 is a separate specialty and does not count toward Master",
        "Yes, if you also pass L1",
        "Only if you pass it first"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Master is A1–A8 only; A9 is a separate specialty. (a) is wrong: the eight are A1–A8. (c) is wrong: L1 does not change the Master definition. (d) is wrong: order does not matter — A9 never counts toward Master."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — A9 Review: Quick Reference</h3>\n<p><strong>Core idea:</strong> Compression ignites the fuel. Smoke color plus conditions names the system.</p>\n<p><strong>Smoke map:</strong> black = unburned fuel · blue = burning oil · white cold-only = glow plugs · white always = coolant.</p>\n<div class=\"formula\">Cold-only hard start = glow plugs &nbsp;|&nbsp; Rail pressure low only under load = supply fault &nbsp;|&nbsp; DPF needs heat to regen &nbsp;|&nbsp; A9 ≠ Master (separate specialty)</div>\n<p><strong>A9 exam:</strong> 50 questions, 75 minutes, 90 seconds a question, 70% practice benchmark.</p>\n<p><strong>Self-check:</strong> Say the smoke map from memory, then explain why a high-pressure pump failure contaminates the whole fuel system.</p>\n"
};
