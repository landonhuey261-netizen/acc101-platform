// ase-a2 - Module 5: Valve Body & Solenoids
module.exports = {
  "number": 5,
  "slug": "valve-body-and-solenoids",
  "title": "Valve Body & Solenoids",
  "estTime": "3\u20134 hours",
  "objectives": [
    "Explain the valve body's job: routing line pressure to the right clutch at the right time.",
    "Describe the main valves: manual valve, pressure regulator, shift valves, and accumulator.",
    "Explain what a solenoid does and how the control module uses it to time shifts.",
    "Describe how accumulators soften shifts and what happens when one fails.",
    "Explain how a stuck valve or a failed solenoid shows up in shift behavior."
  ],
  "sections": [
    {
      "heading": "The Hydraulic Control Center",
      "html": "<p>The valve body is a precision-machined block \u2014 often in two halves \u2014 full of passages, valves, and springs, bolted under the transmission case. Line pressure from the pump enters it, and the valve body decides where that pressure goes: which clutch piston fills, which band servo applies, and how fast each one fills. Every shift you feel is the valve body opening one passage and closing another at the right moment.</p><p>Inside, spool valves slide in their bores. A spool valve is a small piston with lands (wide sections) that cover or uncover passages as it moves. Springs push it one way, pressure pushes it the other, and the balance between the two decides its position. Because the clearances are tiny, clean fluid is critical \u2014 a speck of debris can jam a valve and ruin a shift.</p>"
    },
    {
      "heading": "The Main Valves",
      "html": "<p>The manual valve is moved directly by the shift linkage when the driver selects Park, Reverse, Neutral, or Drive. It is the only valve the driver controls by hand, and it routes pressure to the circuits that selector position needs. The pressure regulator valve sets line pressure: it bleeds off excess pump output to hold pressure at the level the transmission needs, rising with throttle so clutches hold harder under load.</p><p>Shift valves decide which gear is active. In older transmissions they moved on governor pressure (road speed) against throttle pressure (load); in modern units a solenoid moves them electrically. Accumulators sit beside the clutch circuits: they are pistons with springs that absorb the first rush of pressure, so a clutch applies firmly but not violently. A leaking accumulator piston makes a harsh shift; a stuck one can make a shift flare.</p>"
    },
    {
      "heading": "Solenoids: Electricity Meets Hydraulics",
      "html": "<p>A solenoid is an electrically operated valve. The transmission control module sends it current, a coil pulls a small plunger, and the plunger opens or closes a hydraulic passage. Some solenoids are simple on/off switches; others are pulse-width modulated, opening and closing many times a second so the module can control pressure smoothly, like easing a tap open instead of slamming it.</p><p>Solenoids let the control module time shifts with precision no purely hydraulic system can match. It can delay a shift until the engine is ready, soften a clutch apply for comfort, command the lock-up clutch, and adapt over time as clutches wear. The module watches speed sensors, throttle position, and temperature, then switches solenoids in a pattern the valve body turns into gear changes.</p>"
    },
    {
      "heading": "When Valves Stick and Solenoids Fail",
      "html": "<p>A stuck shift valve is a classic failure. If a valve sticks in its bore, the transmission may stay in one gear, skip a gear, or apply two clutches at once and bind. Debris, varnish from overheated fluid, or a worn bore can all cause sticking. The clue is often a gear that works cold and fails hot, or a shift that disappears entirely \u2014 mechanical sticking follows temperature and wear, not wiring.</p><p>A failed solenoid behaves differently: the transmission usually sets a diagnostic code and may go into a default or 'limp' mode, often holding one gear so the car can still be driven to a shop. An electrical test \u2014 checking the solenoid's resistance and its command signal \u2014 separates an electrical fault from a hydraulic one. That separation is the heart of modern transmission diagnosis: code first, then pressure, then parts.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> The valve body routes pressure through spool valves. The manual valve follows the selector, the regulator sets line pressure, shift valves pick the gear, and accumulators soften the apply. Solenoids let the control module command all of it electrically.</p><p><div class=\"callout\"><strong>Common mistake:</strong> Replacing solenoids for a shift problem caused by a stuck valve. A solenoid can only open its passage \u2014 if the valve behind it is jammed with debris, a new solenoid changes nothing.</div><div class=\"callout\"><strong>Common mistake:</strong> Ignoring fluid condition when a valve sticks. Varnish and debris from burnt fluid are the usual reason a valve sticks in the first place.</div></p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Valve body",
      "def": "The hydraulic control center that routes line pressure to clutches and servos."
    },
    {
      "term": "Spool valve",
      "def": "A sliding piston with lands that covers or uncovers fluid passages as it moves."
    },
    {
      "term": "Manual valve",
      "def": "The valve moved by the shift linkage; it routes pressure for Park, Reverse, Neutral, and Drive."
    },
    {
      "term": "Pressure regulator valve",
      "def": "The valve that sets line pressure by bleeding off excess pump output."
    },
    {
      "term": "Shift valve",
      "def": "A valve that directs pressure to the clutch circuit of the selected gear."
    },
    {
      "term": "Accumulator",
      "def": "A spring-loaded piston that absorbs the first rush of pressure so a clutch applies smoothly."
    },
    {
      "term": "Solenoid",
      "def": "An electrically operated valve that opens or closes a hydraulic passage on command."
    },
    {
      "term": "Pulse-width modulation",
      "def": "Switching a solenoid on and off rapidly so average pressure can be controlled smoothly."
    },
    {
      "term": "Limp mode",
      "def": "A default operating mode that holds one gear so the car can still be driven when a fault is found."
    },
    {
      "term": "Varnish",
      "def": "A sticky residue left by overheated, broken-down fluid; it can make valves stick."
    },
    {
      "term": "Bore",
      "def": "The precision hole in the valve body that a spool valve slides in."
    },
    {
      "term": "Land",
      "def": "A wide section of a spool valve that blocks or opens a passage."
    },
    {
      "term": "Throttle pressure",
      "def": "A pressure signal that rises with throttle opening, telling the valve body how hard the engine is working."
    },
    {
      "term": "Governor pressure",
      "def": "In older transmissions, a pressure signal that rises with road speed, used to time shifts."
    }
  ],
  "video": {
    "title": "How Automatic Transmission Valve Body Solenoids Work",
    "embedUrl": "https://www.youtube.com/embed/xDWUzNm_md8",
    "note": "A walkthrough of valve body solenoids: how the control module switches them and how they direct hydraulic pressure. Watch for the difference between on/off solenoids and modulated ones.",
    "more": [
      {
        "title": "How Transmission Valve Solenoids Work",
        "url": "https://www.youtube.com/watch?v=uj7TRPhqt64"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In one sentence, what is the valve body's job?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It routes line pressure to the right clutch or servo at the right time. Step 2: Every shift is the valve body opening one passage and closing another.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Name the valve moved directly by the shift linkage, and say what it does.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The manual valve. Step 2: It routes pressure to the circuits the selected position needs \u2014 Park, Reverse, Neutral, or Drive.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> What does the pressure regulator valve do, and why should line pressure rise with throttle?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It sets line pressure by bleeding off excess pump output. Step 2: Pressure must rise with throttle because clutches need more holding force under higher engine load.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> What is an accumulator, and what symptom appears when one leaks?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A spring-loaded piston that absorbs the first rush of pressure to a clutch. Step 2: A leaking accumulator cannot cushion the apply, so that shift becomes harsh.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Explain how a solenoid lets a computer control a hydraulic shift.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The control module sends current to the solenoid coil. Step 2: The coil pulls a plunger that opens or closes a hydraulic passage, moving a shift valve or feeding a clutch directly.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A transmission stays in one gear and sets a diagnostic code. Is a stuck valve or a failed solenoid more likely, and what test separates them?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A failed solenoid is more likely when a code is set \u2014 the module can detect electrical faults. Step 2: Test the solenoid's resistance and command signal; if the solenoid is good, the fault is hydraulic, such as a stuck valve.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The valve body's job is to:",
      "choices": [
        "Drive the pump",
        "Route line pressure to the right clutch or servo at the right time",
        "Multiply torque",
        "Cool the fluid"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The valve body is the hydraulic control center. (a) The converter hub drives the pump. (c) The torque converter multiplies torque. (d) The cooler cools the fluid."
    },
    {
      "q": "The manual valve is moved by:",
      "choices": [
        "A solenoid",
        "The shift linkage when the driver moves the selector",
        "The pump",
        "The governor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The manual valve follows the driver's selector directly. (a) Solenoids move shift valves, not the manual valve. (c) The pump makes pressure. (d) The governor is a speed signal in older units."
    },
    {
      "q": "The pressure regulator valve:",
      "choices": [
        "Sets line pressure by bleeding off excess pump output",
        "Applies the lock-up clutch",
        "Filters the fluid",
        "Selects Reverse"
      ],
      "answer": 0,
      "explanation": "Correct: (a). It holds line pressure at the needed level. (b) A solenoid commands lock-up. (c) The filter does that. (d) The manual valve selects Reverse."
    },
    {
      "q": "An accumulator's job is to:",
      "choices": [
        "Make shifts harsher",
        "Absorb the first rush of pressure so a clutch applies smoothly",
        "Drive the pump",
        "Hold the drum"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Accumulators cushion clutch apply. (a) A failed accumulator makes shifts harsher \u2014 that is the failure, not the job. (c) The converter hub drives the pump. (d) A band holds a drum."
    },
    {
      "q": "A solenoid is:",
      "choices": [
        "A gear in the planetary set",
        "An electrically operated valve that opens or closes a hydraulic passage",
        "A type of fluid",
        "A clutch plate"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Current moves a plunger that controls fluid flow. (a) Solenoids are not gears. (c) Solenoids are hardware, not fluid. (d) Clutch plates are friction parts."
    },
    {
      "q": "Pulse-width modulation lets the control module:",
      "choices": [
        "Turn a solenoid fully on or off only",
        "Control pressure smoothly by switching a solenoid rapidly",
        "Bypass the valve body",
        "Change the gear ratio directly"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Rapid switching gives smooth average pressure. (a) That describes a simple on/off solenoid. (c) The valve body still routes the fluid. (d) Ratios come from the gearsets."
    },
    {
      "q": "A valve stuck in its bore most often causes:",
      "choices": [
        "A missing or wrong gear, or two clutches applied at once",
        "A dead battery",
        "A noisy wheel bearing",
        "A slipping drive belt"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A stuck shift valve misroutes pressure, losing or doubling a gear. (b) That is electrical. (c) That is a chassis noise. (d) That is an engine accessory problem."
    },
    {
      "q": "Limp mode means the transmission:",
      "choices": [
        "Has stopped completely",
        "Holds one gear so the car can still be driven to a shop after a fault",
        "Shifts faster than normal",
        "Needs new fluid only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Limp mode is a safe default, not a shutdown. (a) The car can still move in one gear. (c) It shifts less, not more. (d) Fluid may be part of the story, but limp mode is a control strategy."
    }
  ],
  "studyGuide": "\n<h3>Module 5 \u2014 Valve Body & Solenoids: Quick Reference</h3>\n<p><strong>Core idea:</strong> The valve body routes pressure; solenoids let the computer command the routing.</p>\n<p><strong>Valves:</strong> Manual (selector) \u00b7 regulator (sets line pressure) \u00b7 shift valves (pick the gear) \u00b7 accumulators (soften the apply).</p>\n<p><strong>Solenoids:</strong> On/off switches or pulse-width modulated for smooth pressure control.</p>\n<p><strong>Failures:</strong> Stuck valve \u2192 missing/wrong gear, often temperature-related \u00b7 failed solenoid \u2192 code + limp mode.</p>\n<p><strong>Watch out:</strong> Dirty, varnished fluid jams valves \u2014 check fluid before replacing solenoids.</p>\n<p><strong>Self-check:</strong> Follow pressure from the pump through the regulator, manual valve, shift valve, and accumulator to a clutch piston. If you can trace it, you have this module.</p>\n"
};
