// ase-l1 - Module 6: Advanced Fuel & Air Induction
module.exports = {
  "number": 6,
  "slug": "advanced-fuel-air-induction",
  "title": "Advanced Fuel & Air Induction",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how the computer measures air flow and why a lying air flow reading ruins everything downstream.",
    "Diagnose fuel delivery faults: pump, filter, regulator, and injectors.",
    "Use injector pulse width and fuel trim together to separate a delivery fault from a sensor fault.",
    "Explain direct injection's differences: high-pressure pump, carbon buildup, and cold-start behavior.",
    "Diagnose air induction faults: vacuum leaks, intake restrictions, and variable intake systems."
  ],
  "sections": [
    {
      "heading": "Measuring the Air: The Foundation of Fueling",
      "html": "<p>Everything in fueling starts with air. The computer must know how much air is entering the engine before it can decide how much fuel to add, and it measures air in one of two ways. A <strong>mass air flow (MAF) sensor</strong> measures the air directly, as it passes through the intake. A <strong>manifold absolute pressure (MAP) sensor</strong> measures the pressure in the intake manifold, and the computer calculates air flow from pressure, temperature, and engine speed.</p>\n<p>Either sensor can lie, and a lying air measurement corrupts every decision downstream. A dirty MAF sensor under-reports air flow, so the computer adds too little fuel — the mixture runs lean, the trims climb positive, and the engine hesitates. An exhaust leak before the oxygen sensor does the opposite: outside air sneaks into the exhaust, the oxygen sensor reads lean, and the computer adds fuel the engine does not need — a false lean that makes the engine run rich.</p>\n<p>The check is always a cross-check. Compare the MAF reading with the MAP reading and with engine load; compare the oxygen sensor with the tailpipe; compare the trims at idle with the trims under load. One sensor's word is never enough — and the sensor that disagrees with the others is the one to test.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Fueling starts with air measurement, and a lying air reading corrupts everything downstream. Cross-check every air reading against another sensor before believing it.</div>"
    },
    {
      "heading": "Fuel Delivery: Pump, Filter, Regulator, Injectors",
      "html": "<p>Fuel delivery has four links, and a fault in any one of them starves the engine. The <strong>pump</strong> moves fuel from the tank at pressure; a weak pump cannot keep up under load, so the engine stumbles on acceleration but idles fine. The <strong>filter</strong> protects the injectors; a clogged filter does the same thing — fine at idle, starved under load. The <strong>regulator</strong> holds the pressure steady; a failed regulator lets pressure fall or climb, and the mixture follows it.</p>\n<p>The <strong>injectors</strong> are the precision end of the chain. An injector can clog (too little fuel), leak (too much fuel, or fuel dripping into a cylinder after shutdown), or fail electrically (no fuel at all). A leaking injector shows up as a rich condition, a fuel smell, a hard start after sitting, and fuel diluting the engine oil. A clogged injector shows up as a lean condition on one bank or one cylinder, and a contribution test will show that cylinder falling behind.</p>\n<p>The scan tool watches delivery through <strong>injector pulse width</strong> — how long the computer holds each injector open. A long pulse width with lean trims means the computer is asking for fuel the system cannot deliver: a delivery fault. A short pulse width with rich trims means the computer is trying to take fuel away from a system delivering too much: a leaking injector or a high-pressure fault.</p>"
    },
    {
      "heading": "Port Injection vs Direct Injection",
      "html": "<p><strong>Port injection</strong> sprays fuel into the intake port, just before the intake valve. The fuel washes over the back of the valve as it enters, which keeps the valve clean, and the mixture has time to form before the valve opens. It is the older, simpler system, and it is forgiving: a small delivery error still burns reasonably well.</p>\n<p><strong>Direct injection (GDI)</strong> sprays fuel straight into the combustion chamber, at very high pressure, late in the compression stroke. It allows precise control of the burn, better economy, and more power — but it brings its own faults. The high-pressure pump is driven by the engine and can fail or leak fuel into the oil. Because fuel never washes the intake valves, carbon builds up on their backs over time, restricting air flow and causing rough running. And cold starts are harder: the fuel must atomize in cold, dense air with very little time to mix.</p>\n<p>Diagnosis differs accordingly. On a direct-injection engine, a hard cold start with a fuel smell in the oil points at the high-pressure pump leaking into the crankcase. Rough running with no codes and a high-mileage engine points at carbon buildup on the valves. The system is more capable and more demanding at the same time — and the technician must know which version they are facing before choosing a test.</p>"
    },
    {
      "heading": "Air Induction Faults: Leaks, Restrictions, and Variable Systems",
      "html": "<p>The air side fails in two directions. A <strong>vacuum leak</strong> lets unmetered air in past the sensor: lean trims, worst at idle, a high or hunting idle, and sometimes a whistle the technician can hear. The test is a smoke test — fill the intake with smoke and watch where it escapes — or a careful spray test around hoses and gaskets while watching the trims respond.</p>\n<p>A <strong>restriction</strong> does the opposite: a clogged air filter, a collapsed intake hose, or carbon buildup on the valves starves the engine of air, worst under load. The engine loses power, the trims shift, and the driver reports a car that feels strangled at speed. The test is inspection and measurement: filter condition, hose shape under load, and air flow readings against expected values.</p>\n<p>Many modern engines also have <strong>variable intake systems</strong> — flaps or runners that change the intake's length to suit engine speed. A stuck flap or a failed actuator changes the air flow in ways that look like a sensor fault: good at one speed, bad at another, with no code pointing at the intake. The test is to command the actuator with the scan tool and watch whether it moves — and whether the engine responds.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Fueling starts with air measurement (MAF or MAP). A lying air reading corrupts every fueling decision — cross-check it.</li>\n<li>Delivery chain: pump, filter, regulator, injectors. Weak pump or clogged filter: fine at idle, starved under load. Leaking injector: rich, fuel smell, oil dilution, hard start after sitting.</li>\n<li>Pulse width plus trims: long pulse with lean trims = delivery cannot keep up; short pulse with rich trims = too much fuel being delivered.</li>\n<li>Direct injection: high-pressure pump (can leak into oil), carbon on intake valves (fuel never washes them), harder cold starts.</li>\n<li>Air faults: vacuum leak (lean, worst at idle, smoke test) vs restriction (starved, worst under load) vs stuck variable intake flap (good at one speed, bad at another).</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Trusting one air reading. A dirty MAF and an exhaust leak before the oxygen sensor can both produce a false lean — cross-check with a second sensor before replacing fuel parts.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Treating a direct-injection engine like a port-injection engine. Carbon on the valves and a leaking high-pressure pump are GDI faults that do not exist on port injection — know which system you are facing.</div>\n<p><strong>Ready-to-work link:</strong> If you can read pulse width and trims together and say whether the fault is delivery, sensor, or carbon, you have this module. Module 7 turns to the tailpipe: emissions and I/M failure diagnosis.</p>"
    }
  ],
  "keyTerms": [
    { "term": "MAF sensor", "def": "Mass air flow sensor — measures the air entering the engine directly, as it passes through the intake." },
    { "term": "MAP sensor", "def": "Manifold absolute pressure sensor — measures intake manifold pressure, from which the computer calculates air flow." },
    { "term": "Injector pulse width", "def": "How long the computer holds an injector open; long with lean trims means delivery cannot keep up." },
    { "term": "Fuel pressure regulator", "def": "The device that holds fuel pressure steady; a failed regulator lets pressure fall or climb." },
    { "term": "Leaking injector", "def": "An injector that drips fuel when it should be closed — rich mixture, fuel smell, oil dilution, hard start after sitting." },
    { "term": "Clogged injector", "def": "An injector restricted so it delivers too little fuel — lean on its cylinder or bank." },
    { "term": "Port injection", "def": "Fuel sprayed into the intake port before the valve; the fuel washes the valve clean." },
    { "term": "Direct injection (GDI)", "def": "Fuel sprayed straight into the combustion chamber at very high pressure; precise, but prone to carbon buildup and high-pressure pump faults." },
    { "term": "Carbon buildup", "def": "Carbon deposits on the backs of intake valves in direct-injection engines, where fuel never washes them." },
    { "term": "High-pressure fuel pump", "def": "The engine-driven pump that raises fuel to direct-injection pressure; it can leak fuel into the engine oil." },
    { "term": "Smoke test", "def": "Filling the intake with smoke to find a vacuum leak by watching where the smoke escapes." },
    { "term": "Variable intake system", "def": "Flaps or runners that change intake length with engine speed; a stuck flap mimics a sensor fault." }
  ],
  "video": {
    "title": "False Rich O2 Sensor Diagnosis: Fuel Trims & Downstream Data (ScannerDanner)",
    "embedUrl": "https://www.youtube.com/embed/H6lY42u19VM",
    "note": "ScannerDanner works a false-rich case on a Chevy Express van: negative fuel trims, an upstream oxygen sensor reading rich, and a downstream sensor that disagrees — then confirms the diagnosis with tailpipe readings. It is the mixture-vs-sensor lesson of this module, on a real truck.",
    "more": [
      { "title": "How to Diagnose a Misfire (ScannerDanner, uScope)", "url": "https://www.youtube.com/watch?v=zQXeMqlBagI" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Fuel trims are high and positive at all speeds, and the injector pulse width is long. Is the fault a sensor or a delivery problem? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A delivery problem. Step 2: The computer is holding the injectors open longer than normal and the mixture is still lean — it is asking for fuel the system cannot deliver, which points at the pump, the filter, or the regulator, not at a sensor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A car is hard to start after sitting overnight, smells of fuel, and the oil level has risen. What is the most likely fault?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A leaking injector. Step 2: Fuel drips into a cylinder after shutdown, flooding it for the next start, and leaks past the rings into the oil — diluting it and raising its level.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A dirty MAF sensor under-reports air flow. Explain the chain from the dirty sensor to the symptoms.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The computer believes less air is entering than really is, so it adds too little fuel. Step 2: The mixture runs lean, the trims climb positive as the computer corrects, and the engine hesitates — especially under load, when the error is largest.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A high-mileage direct-injection engine runs rough with no codes. What should you suspect, and why does it not set a code?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Carbon buildup on the backs of the intake valves. Step 2: In direct injection, fuel never washes the valves, so carbon restricts air flow gradually — and no sensor measures the buildup directly, so no code sets until the restriction is severe.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> An exhaust leak before the oxygen sensor makes the computer add fuel. Explain why.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Outside air sneaks into the exhaust through the leak and the oxygen sensor reads the extra oxygen as a lean mixture. Step 2: The computer adds fuel to correct a lean condition that does not exist — a false lean that makes the engine run rich.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A car runs well at low speed but loses power at high speed, and the air filter is new. What is the next air-side check?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check for a restriction that only matters under load — a collapsed intake hose that sucks closed at high air flow, or carbon buildup on the valves. Step 2: Watch the air flow readings against expected values under load; a reading that falls short of demand proves the restriction.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A dirty MAF sensor that under-reports air flow will cause:",
      "choices": ["A rich mixture and negative trims", "A lean mixture and positive trims, with hesitation under load", "No change — the computer ignores the MAF", "A clogged catalytic converter"],
      "answer": 1,
      "explanation": "Correct: (b). Less reported air means less fuel added, so the mixture runs lean and the computer corrects with positive trims. (a) That is the pattern of too much fuel, not too little air reported. (c) The computer depends on the MAF. (d) A converter fault is a separate, later failure."
    },
    {
      "q": "Long injector pulse width together with lean fuel trims means:",
      "choices": ["The computer is asking for fuel the delivery system cannot supply", "The injectors are leaking", "The oxygen sensor is lying", "The engine is running rich"],
      "answer": 0,
      "explanation": "Correct: (a). Long pulses with a still-lean mixture mean delivery — pump, filter, or regulator — cannot keep up. (b) Leaking injectors make the mixture rich, with short pulses. (c) A lying sensor would not explain long pulses with lean trims. (d) Lean trims mean the mixture is lean, not rich."
    },
    {
      "q": "A leaking injector most often shows up as:",
      "choices": ["A lean condition and a hard start when cold only", "A rich condition, a fuel smell, a hard start after sitting, and fuel diluting the engine oil", "A clogged air filter", "A dead battery"],
      "answer": 1,
      "explanation": "Correct: (b). A dripping injector over-fuels, floods the cylinder after shutdown, and leaks fuel into the oil. (a) A leak makes the mixture rich, not lean. (c) An air filter fault makes black smoke and lost power, not a fuel smell. (d) A battery fault affects cranking, not mixture."
    },
    {
      "q": "Carbon buildup on intake valves is a fault of:",
      "choices": ["Port injection, because fuel washes the valves", "Direct injection, because fuel never washes the valves", "Diesel engines only", "Carburetors"],
      "answer": 1,
      "explanation": "Correct: (b). In direct injection the fuel goes straight into the cylinder, so nothing cleans the valves. (a) Port injection washes the valves with fuel — that is why it does not build up. (c) Diesels have their own carbon issues, but this is a GDI fault. (d) Carburetors are obsolete and unrelated."
    },
    {
      "q": "An exhaust leak before the oxygen sensor causes:",
      "choices": ["A true lean mixture", "A false lean reading — outside air makes the sensor report lean, so the computer adds fuel the engine does not need", "A rich reading", "No effect at all"],
      "answer": 1,
      "explanation": "Correct: (b). Outside air in the exhaust fools the sensor into reporting lean, and the computer over-fuels. (a) The mixture itself is not lean — only the reading is. (c) The sensor reads lean, not rich. (d) The effect is a real driveability and economy fault."
    },
    {
      "q": "A vacuum leak shows its worst fuel trims at:",
      "choices": ["High speed, under full load", "Idle, when total air flow is small and the leak is a large share of it", "Only when the engine is off", "Only in cold weather"],
      "answer": 1,
      "explanation": "Correct: (b). A fixed leak matters most when total air flow is small. (a) Under load the leak is a small share of total flow, so trims improve. (c) A leak cannot be measured with the engine off. (d) Leaks occur in any weather."
    },
    {
      "q": "A weak fuel pump or clogged filter shows up as:",
      "choices": ["Fine at idle, starved under load", "Starved at idle, fine under load", "No symptoms at all", "A rich mixture at all speeds"],
      "answer": 0,
      "explanation": "Correct: (a). Idle needs little fuel, so a weak delivery system keeps up; under load it cannot. (b) The pattern is the reverse. (c) Delivery faults always show under load. (d) Starvation makes the mixture lean, not rich."
    },
    {
      "q": "A stuck variable-intake flap can mimic a sensor fault because:",
      "choices": ["It sets a sensor code", "It changes air flow differently at different speeds — good at one speed, bad at another — with no code pointing at the intake", "It leaks fuel", "It stops the engine from starting"],
      "answer": 1,
      "explanation": "Correct: (b). A speed-dependent air flow change looks like a sensor reading wrong, and no code names the flap. (a) It usually sets no code at all. (c) The intake carries air, not fuel. (d) A stuck flap hurts performance; it does not prevent starting."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Advanced Fuel & Air Induction: Quick Reference</h3>\n<p><strong>Air first:</strong> MAF measures air directly · MAP measures pressure, computer calculates flow. A lying air reading corrupts all fueling — cross-check it.</p>\n<p><strong>Delivery:</strong> Pump → filter → regulator → injectors. Weak pump / clogged filter = fine at idle, starved under load.</p>\n<p><strong>Pulse width + trims:</strong> Long pulse + lean trims = delivery cannot keep up · Short pulse + rich trims = too much fuel delivered.</p>\n<p><strong>Leaking injector:</strong> Rich, fuel smell, hard start after sitting, oil dilution and rising level.</p>\n<p><strong>GDI:</strong> High-pressure pump can leak into oil · Carbon builds on intake valves (fuel never washes them) · Harder cold starts.</p>\n<p><strong>Air faults:</strong> Vacuum leak = lean, worst at idle, smoke test · Restriction = starved, worst under load · Stuck intake flap = good at one speed, bad at another.</p>\n<p><strong>Watch out:</strong> An exhaust leak before the O2 sensor causes a false lean — the computer adds fuel the engine does not need.</p>\n<p><strong>Self-check:</strong> Read pulse width and trims together and name the fault: delivery, sensor, or carbon.</p>\n"
};
