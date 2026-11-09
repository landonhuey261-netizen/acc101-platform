module.exports = {
  "number": 3,
  "slug": "a2-automatic-transmission-review",
  "title": "A2 Review — Automatic Transmission / Transaxle",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how a torque converter multiplies torque and when its lockup clutch engages.",
    "Trace power flow through a planetary gearset and name what holds and what drives in each range.",
    "Diagnose shift complaints from fluid condition, pressure readings, and road-test behavior.",
    "Explain the valve body, solenoids, and TCM's role in shift timing and feel.",
    "Score the A2 practice exam timed (45 questions, 75 minutes) at the 70% benchmark."
  ],
  "sections": [
    {
      "heading": "The Torque Converter — Fluid Coupling With a Trick",
      "html": "<p>A torque converter is a fluid coupling with three parts: the impeller (driven by the engine), the turbine (driving the transmission input), and the stator (which redirects returning fluid so the converter multiplies torque at stall). At launch, the stator holds still and the converter can roughly double the engine's torque to the input shaft; as turbine speed catches up with impeller speed, multiplication fades toward one-to-one.</p><p>The lockup clutch is what makes a modern automatic efficient on the highway. When conditions are right — steady speed, light throttle, transmission warm — the clutch locks the turbine to the impeller, removing the fluid slip entirely. A shudder on light-throttle lockup, or a lockup that never engages, is a converter-clutch or control problem, not a gear problem. And a converter that stalls the engine at a stop has a lockup clutch stuck applied.</p><p><div class=\"callout\"><strong>Key idea:</strong> Torque multiplication happens only when the turbine is much slower than the impeller. At cruising speed the converter is a coupling — and lockup removes even that slip.</div></p>"
    },
    {
      "heading": "Planetary Gearsets — Hold One Member, Get a Ratio",
      "html": "<p>A planetary set has a sun gear in the middle, planet gears on a carrier around it, and a ring gear outside. Hold one member still, drive another, and the third becomes the output at a different ratio. Hold the ring and drive the sun, and the carrier comes out slower with more torque — reduction. Hold the sun and drive the ring, and the carrier comes out faster — overdrive. Lock any two members together and the whole set turns as one — direct drive, 1:1.</p><p>Clutches and bands are what hold and release those members. A clutch locks two rotating members together; a band holds a drum still against the case. A shift is one clutch applying as another releases, timed by the valve body. A late, harsh shift usually means the apply is late or the pressure is too high; a slipping shift means the apply is weak — low pressure, worn friction material, or a leaking seal.</p><p><div class=\"callout\"><strong>Key idea:</strong> Every gear is a combination of holds and drives. If you can say which member is held in a given range, you can predict the ratio — and the exam's power-flow questions ask exactly that.</div></p>"
    },
    {
      "heading": "Fluid, Pressure, and the Road Test",
      "html": "<p>Transmission fluid is the working fluid, the lubricant, and the diagnostic sample all at once. Healthy fluid is red and smells faintly sweet; brown fluid with a burnt smell has been overheated, and that usually means a slipping clutch cooked it. A low fluid level causes delayed engagement and slipping because the pump sucks air; an overfilled unit foams, and foam does not hold pressure.</p><p>Pressure testing turns a complaint into a number. Line pressure low in every range points at the pump, the filter, or the pressure regulator. Pressure low in one range only points at the circuit for that range — a leaking clutch piston seal or a worn servo. The road test comes first, though: note when the fault happens (cold or hot, light or heavy throttle, which shift), because a fault that only appears hot is a seal that only leaks when the fluid thins.</p><p><div class=\"callout\"><strong>Key idea:</strong> Fluid condition is evidence, not a verdict. Burnt fluid means something slipped — find what slipped before you change the fluid and call it fixed.</div></p>"
    },
    {
      "heading": "Valve Body, Solenoids, and the TCM",
      "html": "<p>The valve body is the hydraulic switchboard: it routes line pressure to the right clutch or band at the right moment. In an electronically controlled transmission, solenoids are the valves — the TCM (transmission control module) turns them on and off, and shift timing, line pressure, and lockup are all the TCM's decisions, made from throttle position, vehicle speed, engine load, and temperature.</p><p>That split is the diagnostic split. A transmission that shifts at the wrong speed but firmly is often a sensor or TCM-input problem — the computer is deciding on bad information. A transmission that shifts at the right speed but slips is a hydraulic or mechanical problem — the decision was right and the apply was weak. Scan data shows you the TCM's inputs and commands; pressure readings show you whether the hydraulics obeyed.</p><p><div class=\"callout\"><strong>Key idea:</strong> Electrical first or hydraulic first? If the shift happens at the wrong time, suspect the inputs. If it happens at the right time but badly, suspect the apply.</div></p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> the stator multiplies torque only at high slip; lockup removes slip at cruise; each gear is a hold-and-drive combination in the planetary set; fluid condition and pressure readings turn complaints into numbers; wrong-time shifts are inputs, bad shifts are applies.</p><p>The A2 exam is 45 questions in 75 minutes. The questions that cost marks are the power-flow ones — slow down, name the held member, and work the ratio out loud before you look at the choices. And never pick 'change the fluid' as the fix for a slipping transmission: the fluid is the symptom's messenger, not the cause.</p><p><div class=\"callout\"><strong>Key idea:</strong> Common mistake: blaming the torque converter for every slip. A slip in one gear is a clutch in that gear's circuit; a slip in every gear is pressure, fluid level, or the converter.</div></p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Torque converter",
      "def": "Fluid coupling between engine and transmission: impeller, turbine, and stator; multiplies torque at stall."
    },
    {
      "term": "Stator",
      "def": "The converter member that redirects returning fluid to multiply torque; held still at stall, freewheels at cruise."
    },
    {
      "term": "Lockup clutch",
      "def": "Clutch inside the converter that locks turbine to impeller at cruise, removing fluid slip."
    },
    {
      "term": "Planetary gearset",
      "def": "Sun gear, planet carrier, and ring gear; holding one member and driving another gives a ratio."
    },
    {
      "term": "Sun gear",
      "def": "Center gear of a planetary set."
    },
    {
      "term": "Ring gear",
      "def": "Outer internal gear of a planetary set."
    },
    {
      "term": "Planet carrier",
      "def": "Holds the planet gears; can be input, output, or held member."
    },
    {
      "term": "Clutch pack",
      "def": "Friction discs and steel plates that lock two rotating members together when pressure is applied."
    },
    {
      "term": "Band",
      "def": "A friction band that holds a drum still against the case to select a gear."
    },
    {
      "term": "Valve body",
      "def": "Hydraulic switchboard that routes line pressure to clutches and bands."
    },
    {
      "term": "Solenoid",
      "def": "Electrically operated valve in the valve body, commanded by the TCM."
    },
    {
      "term": "TCM",
      "def": "Transmission control module — the computer that decides shift timing, line pressure, and lockup."
    },
    {
      "term": "Line pressure",
      "def": "Main hydraulic pressure in the transmission, set by the pump and pressure regulator."
    },
    {
      "term": "CVT",
      "def": "Continuously variable transmission — changes ratio with pulleys and a belt or chain instead of stepped gears."
    }
  ],
  "video": {
    "title": "How an Automatic Transmission Works (FWD)",
    "embedUrl": "https://www.youtube.com/embed/LkK2XFnmfhU",
    "note": "A Toyota Corolla 4-speed automatic torn down to its parts: planetary gearset, one-way clutch, clutch discs and bands, valve body, torque converter. Watch it to see the parts the A2 questions name.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1 — Stall test.</strong> A 2016 Ford F-150 with a 6-speed automatic stalls the engine when shifted into Drive at a stop. The engine runs fine in Park and Neutral. What is the most likely fault?</p>",
      "solution": "<p><strong>Answer:</strong> The torque converter lockup clutch is stuck applied (or the converter itself is locked). Step 1: in Park/Neutral the converter is free, so the engine runs. Step 2: in Drive the converter must slip at a stop — if the lockup clutch is applied, the engine is locked to the stopped transmission and stalls. Step 3: check lockup solenoid command and fluid condition before condemning the converter.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2 — Power flow.</strong> In a simple planetary set, the ring gear is held and the sun gear is driven. What comes out of the carrier, and why?</p>",
      "solution": "<p><strong>Answer:</strong> The carrier comes out slower than the sun gear, with more torque — a reduction gear. Step 1: holding the ring forces the planets to walk around the inside of it. Step 2: the carrier follows the planets at a speed between the sun and the held ring. Step 3: slower output at the same input power means more torque — that is first-gear multiplication.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3 — Fluid reading.</strong> A 2019 Honda Civic's transmission fluid is brown and smells burnt, and the 2–3 shift slips when hot. What does the fluid tell you, and what is the next step?</p>",
      "solution": "<p><strong>Answer:</strong> The fluid was overheated by a slipping clutch — the burnt fluid is evidence, not the cause. Step 1: note the slip happens hot, when fluid is thin. Step 2: pressure-test the 2–3 circuit; low pressure in that range points at the 3rd-gear clutch piston seal or the solenoid feeding it. Step 3: do not just change the fluid and call it fixed — find what slipped.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4 — Pressure.</strong> Line pressure reads low in every range on a 2015 Chevrolet Silverado. Name three likely causes, all upstream of any single clutch.</p>",
      "solution": "<p><strong>Answer:</strong> A worn pump, a clogged filter (or a filter sucking air), or a faulty pressure regulator. Step 1: all ranges share the pump, filter, and regulator, so a fault in every range must be upstream of the individual circuits. Step 2: check fluid level first — low fluid starves the pump. Step 3: pressure-test at the line tap to confirm before opening the unit.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5 — Shift timing vs shift quality.</strong> A 2018 Toyota Camry shifts at the wrong road speeds but each shift feels firm. Is the fault more likely electrical or hydraulic? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Electrical — a TCM input problem. Step 1: firm shifts mean the hydraulics apply properly. Step 2: wrong shift speeds mean the TCM is deciding on bad information — a throttle-position, vehicle-speed, or load input. Step 3: check scan data for the inputs and the TCM's commanded shift points before touching the valve body.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6 — Delayed engagement.</strong> A 2017 Nissan Altima takes three seconds to engage Drive when cold, then works normally when warm. What is the most likely cause?</p>",
      "solution": "<p><strong>Answer:</strong> Low fluid level or a worn seal that leaks until the fluid warms and the seal swells. Step 1: check the fluid level and condition first — cold, thick fluid and a low level starve the pump. Step 2: if the level is right, suspect a hardened clutch-piston seal that seals only once warm. Step 3: confirm with a pressure test cold versus hot.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the stator in a torque converter do?",
      "choices": [
        "It drives the input shaft directly",
        "It redirects returning fluid so the converter multiplies torque at stall",
        "It locks the turbine to the impeller",
        "It pumps fluid to the cooler"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The stator redirects fluid returning from the turbine, which is what creates torque multiplication when the turbine is much slower than the impeller. (a) is wrong: the turbine drives the input shaft, not the stator. (c) is wrong: that is the lockup clutch's job. (d) is wrong: the pump, not the stator, supplies cooler flow."
    },
    {
      "q": "In a planetary set, holding the ring gear and driving the sun gear gives the carrier:",
      "choices": [
        "A faster speed than the sun gear",
        "The same speed as the sun gear",
        "A slower speed with more torque",
        "Reverse rotation"
      ],
      "answer": 2,
      "explanation": "Correct: (c). With the ring held, the planets walk inside it and the carrier comes out slower — reduction, with more torque. (a) is wrong: that is overdrive, which needs the sun held and the ring driven. (b) is wrong: that is direct drive, with two members locked together. (d) is wrong: reverse needs a different hold-and-drive combination."
    },
    {
      "q": "Transmission fluid that is brown and smells burnt most likely means:",
      "choices": [
        "The fluid was just changed",
        "A clutch has been slipping and overheated the fluid",
        "The fluid level is too high",
        "The cooler is working too well"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Slipping friction material generates heat that cooks the fluid — burnt fluid is evidence of a slip. (a) is wrong: fresh fluid is red and smells faintly sweet. (c) is wrong: overfilling causes foaming, not a burnt smell. (d) is wrong: a cooler cannot burn fluid."
    },
    {
      "q": "Line pressure is low in every range. What is the most likely area of the fault?",
      "choices": [
        "One clutch piston seal",
        "The pump, filter, or pressure regulator",
        "One solenoid",
        "The output shaft seal"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Every range shares the pump, filter, and regulator, so a fault in all ranges must be upstream of the individual circuits. (a) is wrong: one clutch seal affects only its own range. (c) is wrong: one solenoid feeds one circuit. (d) is wrong: an output seal leaks fluid externally; it does not drop line pressure everywhere."
    },
    {
      "q": "A transmission shifts at the wrong speeds but each shift feels firm. The fault is most likely:",
      "choices": [
        "A worn clutch pack",
        "A TCM input problem — the computer is deciding on bad information",
        "Low line pressure",
        "A leaking servo"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Firm shifts mean the hydraulics apply properly, so the decision — the timing — is wrong, which points at inputs. (a) is wrong: a worn clutch slips, it does not change shift speed. (c) is wrong: low pressure makes shifts soft or slipping, not mistimed. (d) is wrong: a leaking servo weakens one apply; it does not move all shift points."
    },
    {
      "q": "The lockup clutch engages when?",
      "choices": [
        "At a stop, to prevent stalling",
        "At steady cruising speed, to remove fluid slip",
        "Only in reverse",
        "During every shift"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Lockup engages at steady speed with light throttle and a warm transmission, locking turbine to impeller for efficiency. (a) is wrong: lockup at a stop would stall the engine — the converter must slip there. (c) is wrong: lockup is a forward-cruise function. (d) is wrong: the clutch is not cycled on every shift."
    },
    {
      "q": "A transmission takes three seconds to engage Drive when cold but works normally when warm. The first check is:",
      "choices": [
        "The torque converter bolts",
        "Fluid level and condition",
        "The TCM software version",
        "The output speed sensor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Low fluid or a hardened seal that only seals when warm is the classic cold-delay pattern, and fluid level is the first check. (a) is wrong: converter bolts cause noise or vibration, not a cold delay. (c) is wrong: software does not change with temperature. (d) is wrong: a speed sensor affects shift timing, not engagement delay."
    },
    {
      "q": "In an automatic, a band's job is to:",
      "choices": [
        "Lock two rotating members together",
        "Hold a drum still against the case",
        "Pump fluid to the valve body",
        "Multiply torque at stall"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A band wraps a drum and holds it still against the case to select a gear. (a) is wrong: that is a clutch pack's job. (c) is wrong: the pump moves fluid. (d) is wrong: the stator multiplies torque."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — A2 Review: Quick Reference</h3>\n<p><strong>Core idea:</strong> Each gear is a hold-and-drive combination. Wrong-time shifts are inputs; bad shifts are applies.</p>\n<p><strong>Converter:</strong> stator multiplies torque at stall; lockup removes slip at cruise; lockup stuck on stalls the engine at a stop.</p>\n<div class=\"formula\">Ring held + sun driven = reduction &nbsp;|&nbsp; Low pressure in ALL ranges = pump/filter/regulator &nbsp;|&nbsp; Burnt fluid = something slipped</div>\n<p><strong>A2 exam:</strong> 45 questions, 75 minutes, 100 seconds a question, 70% practice benchmark. Name the held member before you answer a power-flow question.</p>\n<p><strong>Self-check:</strong> Draw a planetary set from memory and work out reduction, overdrive, and direct drive by naming the held member each time.</p>\n"
};
