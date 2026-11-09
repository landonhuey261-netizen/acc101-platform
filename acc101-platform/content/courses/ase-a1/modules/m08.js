// ase-a1 - Module 8: Turbo & Supercharging
module.exports = {
  "number": 8,
  "slug": "turbo-supercharging",
  "title": "Turbo & Supercharging",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what forced induction is and why it lets a small engine make big power.",
    "Explain how a turbocharger works, using exhaust gas to drive a compressor.",
    "Explain how a supercharger works, driven directly by the engine.",
    "Compare turbochargers and superchargers: lag, response, and complexity.",
    "Recognize forced-induction faults: boost leaks, lag, and turbo noise."
  ],
  "sections": [
    {
      "heading": "Forced Induction: More Air, More Power",
      "html": "<p>An engine's power is limited by how much air it can pull in — more air means more fuel can be burned, and more fuel burned means more push on the pistons. A naturally aspirated engine relies on the pistons' suction alone to fill the cylinders. <strong>Forced induction</strong> pushes air in under pressure instead, so the cylinders fill with more air than suction alone could manage. The result is that a small engine can make the power of a much bigger one, which is why turbochargers are now common on everyday cars.</p>\n<p>The extra air is called <strong>boost</strong>, and it is measured as pressure above the outside air. The engine computer adjusts the fuel to match the extra air, and the whole system — turbo or supercharger, the pipes that carry the pressurized air, the intercooler that cools it, and the wastegate or bypass valve that limits it — has to work together or the engine runs badly.</p>"
    },
    {
      "heading": "The Turbocharger",
      "html": "<p>A <strong>turbocharger</strong> is two fans on one shaft. Hot exhaust gas spins a turbine wheel on the exhaust side, and that turbine drives a compressor wheel on the intake side, which pushes air into the engine. Because the turbine is driven by exhaust gas that would otherwise be wasted, a turbocharger adds power without taking much power from the engine itself — but it has a weakness: at low engine speed there is little exhaust gas, so the turbo spins slowly and adds little boost. That delay is called <strong>turbo lag</strong>.</p>\n<p>Turbochargers spin extremely fast and run very hot, so they need clean oil and proper cooling. The oil feeds the turbo's bearings, and the coolant (in many designs) carries heat away after the engine stops. Shutting a hard-worked turbo engine off immediately after a fast drive can cook the oil left in the turbo — a habit called <strong>turbo cooldown</strong>, letting the engine idle briefly, protects the bearings. A turbo that whines, smokes, or loses boost is usually suffering from a boost leak, a worn bearing, or oil starvation.</p>"
    },
    {
      "heading": "The Supercharger",
      "html": "<p>A <strong>supercharger</strong> does the same job — pushing extra air into the engine — but it is driven directly by the engine through a belt, not by exhaust gas. That means it responds instantly: there is no lag, because the supercharger spins as fast as the engine does. The trade-off is that driving the supercharger takes power from the engine, so some of the extra power is spent turning the supercharger itself. Superchargers are also simpler to cool and to control, and they make a distinctive whine under load.</p>\n<p>Both systems use an <strong>intercooler</strong>, a heat exchanger that cools the pressurized air before it enters the engine. Compressing air heats it up, and hot air is less dense — it holds less oxygen per volume — so cooling the air lets more oxygen into the cylinders. The intercooler is why turbocharged cars have that extra radiator-like part at the front of the car.</p>"
    },
    {
      "heading": "Boost Control and Faults",
      "html": "<p>Boost has to be limited, or the engine would be damaged by too much pressure. A turbocharger uses a <strong>wastegate</strong>, a valve that lets some exhaust gas bypass the turbine once boost reaches the target. A supercharger uses a <strong>bypass valve</strong> that routes pressurized air back to the intake when it is not needed. If either valve sticks, the engine can over-boost (dangerous) or under-boost (no power).</p>\n<p>Forced-induction faults have clear signs. A <strong>boost leak</strong> — a split hose or a loose clamp in the pressurized air path — causes a loss of power and often a hissing or whooshing noise under load. <strong>Turbo lag that feels worse than usual</strong> can mean a sticking wastegate or a damaged turbine. <strong>Blue smoke and a whining turbo</strong> point at worn turbo bearings letting oil into the intake or the exhaust. Diagnosis starts with a careful look at every hose and clamp in the boost path, and a check of the oil supply to the turbo.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Forced induction pushes air in under pressure (boost) so a small engine makes big power.</li>\n<li>Turbocharger: exhaust gas spins a turbine that drives a compressor; efficient, but has lag at low speed.</li>\n<li>Supercharger: belt-driven by the engine; instant response, but takes power to drive.</li>\n<li>Intercooler cools the compressed air so more oxygen fits in the cylinders.</li>\n<li>Wastegate (turbo) and bypass valve (supercharger) limit boost; a stuck valve causes over-boost or under-boost.</li>\n<li>Faults: boost leak (hiss + power loss), worn turbo bearings (whine + blue smoke), oil starvation (turbo failure).</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Replacing a turbocharger for a power loss that was actually a split boost hose. Check the hoses and clamps first — a boost leak is the cheapest fix in the system.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain turbo lag to a customer and name the part that limits boost, you have this module. Module 9 takes the engine out: removal and installation.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Forced induction",
      "def": "Pushing air into the engine under pressure, so the cylinders fill with more air than suction alone could manage."
    },
    {
      "term": "Boost",
      "def": "The extra air pressure above outside air pressure created by a turbocharger or supercharger."
    },
    {
      "term": "Turbocharger",
      "def": "A device with a turbine driven by exhaust gas that drives a compressor, pushing extra air into the engine."
    },
    {
      "term": "Supercharger",
      "def": "A device driven directly by the engine through a belt that pushes extra air into the engine."
    },
    {
      "term": "Turbo lag",
      "def": "The delay before a turbocharger builds boost at low engine speed, when there is little exhaust gas to spin it."
    },
    {
      "term": "Turbine",
      "def": "The wheel in a turbocharger spun by hot exhaust gas."
    },
    {
      "term": "Compressor",
      "def": "The wheel in a turbocharger (or supercharger) that pushes air into the engine."
    },
    {
      "term": "Intercooler",
      "def": "A heat exchanger that cools pressurized intake air before it enters the engine, so more oxygen fits in the cylinders."
    },
    {
      "term": "Wastegate",
      "def": "A valve that lets exhaust gas bypass the turbocharger turbine to limit boost."
    },
    {
      "term": "Bypass valve",
      "def": "A valve on a supercharger that routes pressurized air back to the intake when boost is not needed."
    },
    {
      "term": "Boost leak",
      "def": "A split hose or loose clamp in the pressurized air path that lets boost escape, causing power loss and a hissing noise."
    },
    {
      "term": "Naturally aspirated",
      "def": "An engine that relies on piston suction alone to fill its cylinders, with no turbocharger or supercharger."
    },
    {
      "term": "Turbo cooldown",
      "def": "Letting a hard-worked turbo engine idle briefly before switching off, so oil and coolant carry heat away from the turbo bearings."
    },
    {
      "term": "Over-boost",
      "def": "Boost pressure rising above the safe target, usually because a wastegate or bypass valve is stuck."
    },
    {
      "term": "Under-boost",
      "def": "Boost pressure below the target, usually because of a leak or a stuck valve."
    }
  ],
  "video": {
    "title": "How Superchargers vs. Turbos Work",
    "embedUrl": "https://www.youtube.com/embed/F-Iugo2lqvk",
    "note": "Animagraffs compares turbochargers and superchargers side by side with clear 3D animation. Watch how the exhaust drives the turbo and the belt drives the supercharger — that difference is the heart of this module.",
    "more": [
      {
        "title": "Turbos: How They Work | Science Garage",
        "url": "https://www.youtube.com/watch?v=lrCwmpjR77U"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Explain in plain words why a turbocharged small engine can make the power of a bigger engine.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Power is limited by how much air the engine can pull in, because more air lets more fuel burn. Step 2: A turbocharger pushes air in under pressure, so the cylinders fill with more air than suction alone could manage. Step 3: More air means more fuel burned per power stroke, so the small engine makes the power of a bigger one.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A driver complains that their turbocharged car feels slow to respond when pulling away, but strong once it is moving. What is this called, and what causes it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: This is turbo lag. Step 2: At low engine speed there is little exhaust gas, so the turbine spins slowly and the compressor adds little boost. Step 3: Once the engine speeds up and makes more exhaust gas, the turbo spins up and boost arrives — which is why the car feels strong once moving.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Compare a turbocharger and a supercharger on two points: what drives each one, and which one has lag?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A turbocharger is driven by exhaust gas spinning a turbine; a supercharger is driven directly by the engine through a belt. Step 2: The turbocharger has lag, because it waits for exhaust gas to build up. Step 3: The supercharger has no lag, because it spins as fast as the engine — but driving it takes power from the engine.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A turbocharged car has lost power and makes a hissing noise when the driver accelerates. What is the most likely fault, and where would you look first?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A hiss under load with power loss points to a boost leak — pressurized air escaping from the intake path. Step 2: Look first at the hoses and clamps between the turbo, the intercooler, and the throttle body, where a split hose or a loose clamp lets boost out. Step 3: Fix the leak before suspecting the turbo itself.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> What is an intercooler for, and why does cooling the air help the engine make power?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: An intercooler cools the air after it has been compressed by the turbo or supercharger. Step 2: Compressing air heats it, and hot air is less dense — it holds less oxygen per volume. Step 3: Cooling the air makes it denser, so more oxygen fits into each cylinder, and more oxygen means more fuel can be burned.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A turbocharger whines loudly and the car blows blue smoke. What has most likely failed, and why does it cause both symptoms?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Worn turbo bearings are the most likely cause. Step 2: Worn bearings let the shaft wobble and whine, and they let oil past the seals into the intake or the exhaust. Step 3: Oil in the intake or exhaust burns and makes blue smoke — one failed bearing explains both the noise and the smoke.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Forced induction means:",
      "choices": [
        "Letting the engine breathe through a bigger air filter",
        "Pushing air into the engine under pressure so the cylinders fill with more air",
        "Removing the exhaust system",
        "Adding more cylinders"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Forced induction pressurizes the intake air so more of it fits in each cylinder. (a) A bigger filter helps breathing but does not pressurize the air. (c) Removing the exhaust would be dangerous and illegal. (d) Adding cylinders is a different way to make power."
    },
    {
      "q": "A turbocharger is driven by:",
      "choices": [
        "A belt from the crankshaft",
        "Hot exhaust gas spinning a turbine",
        "The battery",
        "The water pump"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Exhaust gas spins the turbine, which drives the compressor. (a) A belt drives a supercharger, not a turbocharger. (c) The battery powers the starter and accessories. (d) The water pump circulates coolant."
    },
    {
      "q": "Turbo lag happens because:",
      "choices": [
        "The turbo is too small",
        "At low engine speed there is little exhaust gas to spin the turbine",
        "The intercooler is cold",
        "The engine is too big"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Lag is the wait for exhaust gas to build up enough to spin the turbo. (a) Turbo size affects lag, but the cause is low exhaust flow at low speed. (c) A cold intercooler does not cause lag. (d) Engine size is not the cause of lag."
    },
    {
      "q": "A supercharger differs from a turbocharger because it is:",
      "choices": [
        "Driven directly by the engine through a belt, so it responds instantly",
        "Driven by exhaust gas",
        "Only used on diesel engines",
        "Cooled by the radiator only"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Belt drive means the supercharger spins with the engine — no lag, but it takes power to drive. (b) Exhaust gas drives a turbocharger. (c) Superchargers are used on gasoline engines too. (d) Superchargers are cooled by air and oil, not just the radiator."
    },
    {
      "q": "An intercooler's job is to:",
      "choices": [
        "Heat the intake air",
        "Cool the pressurized intake air so more oxygen fits in the cylinders",
        "Filter the intake air",
        "Quiet the exhaust"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Compressed air is hot and less dense; cooling it makes it denser so more oxygen enters. (a) Heating the air would reduce density. (c) The air filter cleans the air. (d) The muffler quiets the exhaust."
    },
    {
      "q": "A wastegate's job is to:",
      "choices": [
        "Open the throttle",
        "Let exhaust gas bypass the turbine to limit boost",
        "Cool the turbo",
        "Filter the oil"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The wastegate limits boost by bypassing exhaust gas around the turbine. (a) The throttle is controlled by the driver. (c) Oil and coolant cool the turbo. (d) The oil filter cleans the oil."
    },
    {
      "q": "A hissing noise under load with a loss of power in a turbocharged car most likely means:",
      "choices": [
        "A boost leak in a hose or clamp",
        "A worn tire",
        "A dead battery",
        "A clogged fuel filter only"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Pressurized air escaping through a split hose hisses and the engine loses boost. (b) A tire does not hiss under engine load. (c) A dead battery affects starting. (d) A clogged fuel filter can cause power loss but does not hiss."
    },
    {
      "q": "A turbocharger that whines and blows blue smoke most likely has:",
      "choices": [
        "A clogged air filter",
        "Worn bearings letting oil into the intake or exhaust",
        "A stuck thermostat",
        "A loose spark plug"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Worn turbo bearings whine as the shaft wobbles and let oil past the seals, which burns as blue smoke. (a) A clogged filter causes power loss, not whining or blue smoke. (c) A thermostat affects cooling, not the turbo. (d) A loose plug causes a misfire, not turbo whine."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Turbo & Supercharging: Quick Reference</h3>\n<p><strong>Core idea:</strong> Forced induction pushes air in under pressure (boost) so a small engine makes the power of a bigger one.</p>\n<p><strong>Turbocharger:</strong> Exhaust gas spins a turbine that drives a compressor. Efficient, but lags at low speed while exhaust gas builds up.</p>\n<p><strong>Supercharger:</strong> Belt-driven by the engine. Instant response, no lag — but takes power to drive.</p>\n<p><strong>Intercooler:</strong> Cools compressed air so more oxygen fits in each cylinder.</p>\n<p><strong>Boost control:</strong> Wastegate (turbo) and bypass valve (supercharger) limit boost; a stuck valve causes over-boost or under-boost.</p>\n<p><strong>Watch out:</strong> A hiss under load with power loss is a boost leak — check hoses and clamps before condemning the turbo.</p>\n<p><strong>Self-check:</strong> Explain turbo lag and name the part that limits boost on a turbo. If you can, you have this module.</p>\n"
};
