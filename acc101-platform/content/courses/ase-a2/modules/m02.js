// ase-a2 - Module 2: Torque Converter
module.exports = {
  "number": 2,
  "slug": "torque-converter",
  "title": "Torque Converter",
  "estTime": "3\u20134 hours",
  "objectives": [
    "Explain how a torque converter lets the engine idle while the car stands still.",
    "Name the three main parts \u2014 impeller, turbine, stator \u2014 and state what each one does.",
    "Describe torque multiplication and when it is strongest.",
    "Explain the lock-up clutch: what it does, when it applies, and why it matters.",
    "List the symptoms of a failing torque converter and how they differ from gearset problems."
  ],
  "sections": [
    {
      "heading": "A Fluid Coupling Instead of a Clutch",
      "html": "<p>A manual car disconnects the engine with a clutch pedal. An automatic has no pedal, so it needs a different way to let the engine keep running while the car is stopped. The torque converter is that way: a sealed, fluid-filled housing bolted to the engine's flexplate. Inside it, the engine-driven impeller throws fluid at the turbine, which is splined to the transmission input shaft. Fluid, not metal, connects them.</p><p>At a stop with the brakes on, the impeller spins with the idling engine while the turbine stands still \u2014 the fluid slips between them, so the engine does not stall. As the driver presses the accelerator, the impeller spins faster, throws fluid harder, and the turbine starts to turn. The connection is smooth and automatic, which is why an automatic can creep forward in Drive with no pedal work at all.</p>"
    },
    {
      "heading": "Impeller, Turbine, and Stator",
      "html": "<p>The impeller (pump) is the drive side: its curved blades are part of the housing, so they spin at engine speed and fling fluid outward. The turbine faces it: fluid striking its blades turns the input shaft. Between them sits the stator, a small set of blades on a one-way clutch. The stator's job is to catch fluid returning from the turbine and redirect it so it helps the impeller instead of fighting it.</p><p>That redirection is what makes a torque converter more than a simple fluid coupling. When the turbine is turning much slower than the impeller \u2014 at takeoff \u2014 the returning fluid hits the stator blades, the one-way clutch locks the stator still, and the redirected fluid adds its push to the impeller's. The result is torque multiplication: the turbine gets more twisting force than the engine alone supplies. As turbine speed catches up, the stator's one-way clutch releases and the stator freewheels.</p>"
    },
    {
      "heading": "Torque Multiplication and Stall",
      "html": "<p>Torque multiplication is strongest at stall \u2014 the moment the car is held still in gear with the engine working against the brakes. That is when the speed difference between impeller and turbine is greatest and the stator does its most work. It is also why a car launches so well from a stop: for a brief moment the converter is giving the transmission more torque than the engine makes on its own.</p><p>As the car speeds up and the turbine catches the impeller, multiplication fades to nothing and the converter becomes a plain fluid coupling, with a small amount of slip. That slip is normal and useful \u2014 it damps engine vibration \u2014 but it also wastes a little fuel as heat. Modern converters minimize that waste with the lock-up clutch, covered next.</p>"
    },
    {
      "heading": "The Lock-Up Clutch",
      "html": "<p>A fluid coupling always slips a little, and slip means lost efficiency. The lock-up clutch fixes that: a friction disc inside the converter that the transmission control system applies at steady cruising speed. When it applies, it locks the turbine directly to the converter housing, so engine and transmission turn together with no slip at all \u2014 like a manual clutch fully engaged.</p><p>Lock-up usually applies in the higher gears at steady speed and releases the moment the driver accelerates hard, brakes, or slows down. A driver can sometimes feel it as a small extra shift after the last gear change. If lock-up fails to apply, fuel economy drops and the fluid runs hot; if it sticks applied, the engine may shudder or stall at a stop \u2014 the classic sign that the converter cannot unlock.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> The converter is a fluid coupling that lets the engine idle in gear. Impeller drives, turbine is driven, stator redirects returning fluid to multiply torque. Multiplication is strongest at stall and fades as speeds match. The lock-up clutch gives a direct mechanical connection at cruise.</p><p><div class=\"callout\"><strong>Common mistake:</strong> Calling a torque converter a clutch. It does a clutch's job, but it works with fluid and curved blades \u2014 and unlike a friction clutch it can multiply torque.</div><div class=\"callout\"><strong>Common mistake:</strong> Blaming the gearsets for a shudder at cruising speed. A shudder that appears only when lock-up applies points at the converter, not the planetary gears.</div></p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Torque converter",
      "def": "The fluid coupling between the engine flexplate and the transmission input shaft."
    },
    {
      "term": "Impeller",
      "def": "The engine-driven pump side of the converter; its blades fling fluid at the turbine."
    },
    {
      "term": "Turbine",
      "def": "The driven side of the converter, splined to the transmission input shaft."
    },
    {
      "term": "Stator",
      "def": "The blade set between turbine and impeller on a one-way clutch; it redirects returning fluid to multiply torque."
    },
    {
      "term": "Flexplate",
      "def": "The thin steel disc that bolts the converter to the crankshaft, taking the place of a manual flywheel."
    },
    {
      "term": "Torque multiplication",
      "def": "The converter's ability to deliver more torque to the turbine than the engine supplies, strongest at stall."
    },
    {
      "term": "Stall",
      "def": "The condition where the engine works against a held turbine \u2014 car stopped, in gear, brakes on."
    },
    {
      "term": "Slip",
      "def": "The normal speed difference between impeller and turbine in a fluid coupling."
    },
    {
      "term": "Lock-up clutch",
      "def": "The friction disc inside the converter that locks turbine to housing for a direct drive at cruise."
    },
    {
      "term": "One-way clutch",
      "def": "A clutch that locks in one direction and freewheels in the other; it holds the stator still only when needed."
    },
    {
      "term": "Converter hub",
      "def": "The neck of the converter that drives the transmission pump."
    },
    {
      "term": "Shudder",
      "def": "A vibration felt when the lock-up clutch applies unevenly or slips."
    },
    {
      "term": "Creep",
      "def": "The slow forward movement of a car in Drive with no accelerator, caused by converter slip at idle."
    },
    {
      "term": "Coupling point",
      "def": "The speed where turbine speed nearly matches impeller speed and torque multiplication has faded away."
    }
  ],
  "video": {
    "title": "How does the Torque Converter in the automatic transmission work?",
    "embedUrl": "https://www.youtube.com/embed/Tkdx0Gc-_tc",
    "note": "A clear walkthrough of the torque converter's structure and operation: impeller, turbine, stator, torque multiplication, and lock-up mode. Watch for the moment the stator locks and the moment it freewheels.",
    "more": [
      {
        "title": "Fluid Coupling, the Principles of Operation",
        "url": "https://www.youtube.com/watch?v=leCEmJA0WsI"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Explain in your own words why an automatic car can sit at a red light in Drive without stalling.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The engine drives only the impeller, and the turbine is connected to the stopped wheels. Step 2: Fluid slips between them, so the engine keeps turning while the turbine stands still \u2014 no mechanical connection to stall the engine.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Name the three main converter parts and one job each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Impeller \u2014 flings fluid outward at engine speed. Step 2: Turbine \u2014 catches the fluid and turns the input shaft. Step 3: Stator \u2014 redirects returning fluid so it helps the impeller and multiplies torque.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Why is torque multiplication strongest at stall and gone at cruising speed?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: At stall the speed gap between impeller and turbine is greatest, so the stator sees the most returning fluid and locks. Step 2: At cruise the turbine has nearly caught the impeller, the stator freewheels, and there is nothing left to multiply.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A car shudders lightly at steady highway speed but the shudder stops when the driver presses the accelerator. Which part do you suspect, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Suspect the lock-up clutch. Step 2: It is applied at steady cruise and releases on acceleration \u2014 the symptom follows lock-up exactly, while a gearset problem would show in a gear, not only at cruise.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> What does the lock-up clutch do that the fluid coupling cannot, and what is the cost of losing it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It locks turbine to housing for a direct mechanical drive with zero slip. Step 2: Without it, slip wastes fuel as heat, economy drops, and fluid runs hotter.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> The converter hub drives the pump. What happens to line pressure if the converter is not seated fully on the pump drive?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The pump may not turn at all, or its drive may break. Step 2: No pump means no line pressure, so no clutch can apply and the car will not move \u2014 a classic installation error after transmission work.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The torque converter lets the engine idle in Drive because:",
      "choices": [
        "It disconnects the engine with a pedal",
        "Fluid slips between the impeller and the stopped turbine",
        "It shifts into Neutral by itself",
        "It stops the pump"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Fluid slip lets the impeller turn while the turbine stands still. (a) There is no pedal in an automatic. (c) The transmission stays in Drive. (d) The pump keeps running whenever the engine runs."
    },
    {
      "q": "The stator's job is to:",
      "choices": [
        "Drive the pump",
        "Redirect fluid returning from the turbine so it helps the impeller",
        "Lock the turbine to the housing",
        "Cool the fluid"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The stator redirects returning fluid for torque multiplication. (a) The converter hub drives the pump. (c) That is the lock-up clutch's job. (d) Cooling is the cooler's job."
    },
    {
      "q": "Torque multiplication is strongest:",
      "choices": [
        "At highway cruise",
        "At stall, when the turbine is held still and the impeller is working",
        "In Reverse only",
        "When the engine is off"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The biggest impeller-to-turbine speed gap is at stall. (a) At cruise the speeds have nearly matched and multiplication has faded. (c) It happens in any forward takeoff, not only Reverse. (d) With the engine off nothing turns."
    },
    {
      "q": "The lock-up clutch applies:",
      "choices": [
        "At a stop",
        "At steady cruising speed, to give a direct mechanical drive",
        "Only in Reverse",
        "When the engine is cold"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Lock-up applies at steady cruise to kill slip and save fuel. (a) At a stop it must be released or the engine stalls. (c) It does not apply in Reverse. (d) Temperature is not the trigger \u2014 steady speed and load are."
    },
    {
      "q": "A car that stalls when coming to a stop, but runs fine otherwise, most likely has:",
      "choices": [
        "A worn planetary gearset",
        "A lock-up clutch stuck applied",
        "A clogged filter",
        "A broken band"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A stuck lock-up clutch keeps engine and transmission locked together, so stopping stalls the engine. (a) A worn gearset would slip or make noise in a gear. (c) A clogged filter causes low pressure and slipping. (d) A broken band loses one gear, not idle."
    },
    {
      "q": "The impeller is driven by:",
      "choices": [
        "The output shaft",
        "The engine, through the flexplate and converter housing",
        "The valve body",
        "The stator"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The housing is bolted to the flexplate, so the impeller turns at engine speed. (a) The output shaft is downstream. (c) The valve body routes fluid, it does not drive parts. (d) The stator is the reactor, not the driver."
    },
    {
      "q": "When the stator's one-way clutch releases, the stator:",
      "choices": [
        "Locks solid",
        "Freewheels with the fluid",
        "Stops the turbine",
        "Applies the lock-up clutch"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Once turbine speed catches up, the stator freewheels so it stops redirecting fluid. (a) Locking is what it does at stall. (c) Nothing stops the turbine at cruise. (d) Lock-up is a separate clutch."
    },
    {
      "q": "Creep \u2014 the car rolling slowly forward in Drive with no accelerator \u2014 is caused by:",
      "choices": [
        "The lock-up clutch",
        "Fluid drag in the converter at idle",
        "A slipping band",
        "The parking pawl"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Even at idle the impeller moves enough fluid to drag the turbine gently. (a) Lock-up is released at idle. (c) A slipping band would lose a gear. (d) The parking pawl only locks the shaft in Park."
    }
  ],
  "studyGuide": "\n<h3>Module 2 \u2014 Torque Converter: Quick Reference</h3>\n<p><strong>Core idea:</strong> Fluid connects engine to transmission \u2014 impeller drives, turbine is driven, stator multiplies torque.</p>\n<p><strong>Parts:</strong> Impeller (drive) \u00b7 turbine (driven) \u00b7 stator (redirects fluid, one-way clutch) \u00b7 lock-up clutch (direct drive at cruise).</p>\n<p><strong>Multiplication:</strong> Strongest at stall, fades as turbine catches impeller.</p>\n<p><strong>Symptoms:</strong> Stuck lock-up \u2192 stalls at stops \u00b7 failed lock-up \u2192 poor economy, hot fluid \u00b7 shudder at cruise \u2192 converter, not gearsets.</p>\n<p><strong>Watch out:</strong> The converter hub drives the pump \u2014 a converter not seated on install means no line pressure at all.</p>\n<p><strong>Self-check:</strong> Explain stall, multiplication, and lock-up to a classmate without notes. If the story holds together, you have this module.</p>\n"
};
