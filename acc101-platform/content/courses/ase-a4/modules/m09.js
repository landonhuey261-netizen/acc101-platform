// ase-a4 - Module 9: Electronic Suspension & Steering
module.exports = {
  "number": 9,
  "slug": "electronic-suspension-steering",
  "title": "Electronic Suspension & Steering",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how an electronically controlled damper changes its stiffness.",
    "Describe how air suspension levels a vehicle and changes ride height.",
    "Explain what a ride-height sensor and a control module do in an electronic suspension.",
    "List the symptoms of an electronic suspension fault and the first checks.",
    "Explain why electronic steering and suspension faults are diagnosed with a scan tool first."
  ],
  "sections": [
    {
      "heading": "From Fixed to Controlled",
      "html": "<p>A normal damper has one stiffness, set by its valves when it was made. An <strong>electronically controlled damper</strong> can change its stiffness while the car is driving: the control module sends a signal that opens or closes a valve, or changes a magnetic fluid, and the damper gets firmer or softer in a fraction of a second. Firm for a corner, soft for a rough road — the car adapts instead of compromising.</p><p><strong>Magnetorheological</strong> dampers use a fluid with tiny iron particles in it. Apply a magnetic field and the particles line up, the fluid thickens, and the damper gets stiffer. Remove the field and it flows freely again. There are no moving valves to wear — the change is in the fluid itself.</p>"
    },
    {
      "heading": "Air Suspension and Leveling",
      "html": "<p><strong>Air suspension</strong> replaces steel springs with rubber bellows filled with compressed air from a compressor and a reservoir. A <strong>ride-height sensor</strong> at each corner tells the control module how high the body sits; the module adds or releases air to keep the height level, even when the car is loaded, and can raise the car for a rough road or lower it at speed.</p><p>The system needs airtight bellows, working sensors, and a compressor that can keep up. A leak in a bellows makes one corner sag overnight; a failed compressor makes the whole car sit low; a failed sensor makes the module level the car to the wrong height.</p>"
    },
    {
      "heading": "Sensors, Modules, and Wiring",
      "html": "<p>Electronic suspension and steering are networks, not single parts. <strong>Ride-height sensors</strong> measure body position, <strong>accelerometers</strong> measure how the body is moving, the <strong>steering angle sensor</strong> tells the system where the driver is pointing, and the <strong>control module</strong> takes all of it and decides what each damper or air spring should do. The parts talk over the vehicle's <strong>data network</strong>, so a fault in one place can show up as a symptom somewhere else.</p><p>That is why the wiring, the connectors, and the power supply matter as much as the parts themselves. A corroded connector or a low battery can set fault codes in a system whose dampers and springs are perfectly fine.</p>"
    },
    {
      "heading": "Diagnosing Electronic Faults",
      "html": "<p>Diagnosis starts with a <strong>scan tool</strong>: read the fault codes, look at the live data from the ride-height sensors, and check what the module is commanding. A code naming one corner's sensor points at that sensor or its wiring; a code for the compressor points at the compressor circuit. Only after the codes and the live data are read does the technician lift the car and inspect the parts.</p><p>The first physical checks are simple: listen for the compressor, look for a sagging corner, check the bellows for cracks, and inspect the sensor linkages — the small arms that connect the sensor to the suspension — because a bent or disconnected linkage feeds the module wrong height information.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Electronically controlled dampers change stiffness while driving — by valve or by magnetic fluid.</li><li>Air suspension levels the car with bellows, a compressor, ride-height sensors, and a control module.</li><li>Sensors, module, and network work together; a wiring or power fault can look like a parts fault.</li><li>Diagnose with a scan tool first: codes, then live data, then the physical inspection.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Replacing a damper because the car sags, when the fault is a leaking air bellows or a disconnected ride-height sensor linkage. The sag is a symptom; the code and the inspection name the cause.</div><div class=\"callout\"><strong>Common mistake:</strong> Forgetting that electronic suspension needs a healthy battery and clean connections. Low voltage sets fault codes in systems whose parts are fine.</div><p><strong>Ready-to-Work link:</strong> If you can explain how a ride-height sensor, a module, and an air spring work together to level a loaded car, you have this module. Module 10 covers TPMS.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Electronically controlled damper",
      "def": "A damper whose stiffness can be changed while driving by a signal from a control module."
    },
    {
      "term": "Magnetorheological fluid",
      "def": "A damper fluid with iron particles that thickens when a magnetic field is applied, stiffening the damper."
    },
    {
      "term": "Air suspension",
      "def": "A suspension using air-filled rubber bellows instead of steel springs, with a compressor and height control."
    },
    {
      "term": "Ride-height sensor",
      "def": "A sensor that measures how high the body sits above the suspension at each corner."
    },
    {
      "term": "Control module",
      "def": "The computer that reads the sensors and commands the dampers or air springs."
    },
    {
      "term": "Accelerometer",
      "def": "A sensor that measures how the body is accelerating or moving, used by the suspension module."
    },
    {
      "term": "Steering angle sensor",
      "def": "A sensor that tells the vehicle how far the steering wheel has turned from straight ahead."
    },
    {
      "term": "Data network",
      "def": "The wiring system that lets the vehicle's computers share information with each other."
    },
    {
      "term": "Scan tool",
      "def": "A diagnostic tool that reads fault codes and live data from a vehicle's computers."
    },
    {
      "term": "Fault code",
      "def": "A code stored by a control module when it detects a fault."
    },
    {
      "term": "Compressor",
      "def": "A pump that supplies compressed air for an air suspension system."
    },
    {
      "term": "Bellows",
      "def": "The rubber air spring in an air suspension system."
    },
    {
      "term": "Sensor linkage",
      "def": "The small arm connecting a ride-height sensor to the suspension."
    },
    {
      "term": "Leveling",
      "def": "Keeping the vehicle's ride height even, even when it is loaded."
    },
    {
      "term": "Adaptive suspension",
      "def": "A suspension that changes its stiffness or height in response to driving conditions."
    }
  ],
  "video": {
    "title": "How Car Suspension Works | Springs, Shocks & Suspension Explained",
    "embedUrl": "https://www.youtube.com/embed/Vyolcp-6vtc",
    "note": "A full suspension overview that includes electronically controlled dampers and magnetic ride control. Watch the magnetic-ride section and note how the fluid changes when the system applies a magnetic field.",
    "more": [
      {
        "title": "Suspension Geometry Explained: Why Your Alignment Actually Matters",
        "url": "https://www.youtube.com/watch?v=FcjYfq6N_dk"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A car with air suspension sits low on one corner overnight but rises when the engine starts. What is the likely fault, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The likely fault is a leaking air bellows on that corner. Step 2: Air leaks out while the car sits, so the corner sags; when the engine starts, the compressor refills the bellows and the corner rises again — until it leaks down once more.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Explain in two sentences how a magnetorheological damper changes stiffness.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The damper fluid contains tiny iron particles. Step 2: When the module applies a magnetic field, the particles line up and the fluid thickens, so the damper gets stiffer; when the field is removed, the fluid flows freely and the damper softens.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A car's electronic suspension sets a fault code for one corner's ride-height sensor. What should be checked before replacing the sensor?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check the sensor's linkage — the small arm connecting it to the suspension — for a bend, a break, or a disconnection. Step 2: Check the wiring and connector for corrosion or damage, because a bent linkage or a bad connection feeds the module wrong information and sets the same code as a failed sensor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Why is a scan tool the first step in diagnosing an electronic suspension fault, rather than lifting the car?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The fault codes and live sensor data tell the technician which corner and which part the module is unhappy with. Step 2: That narrows the inspection to one area instead of checking every damper, bellows, and sensor by hand.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A loaded car stays level instead of sagging at the rear. Which parts make that happen?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The ride-height sensors detect that the rear has dropped under the load. Step 2: The control module commands the compressor to add air to the rear bellows until the sensors report the correct height again.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> An electronic suspension warning light is on and the battery is weak. Why check the battery before replacing suspension parts?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The module, sensors, and compressor all need stable voltage, and low voltage can set fault codes on its own. Step 2: A weak battery is a cheap, common cause — replacing a damper or a module first would be an expensive guess at a cheap fault.</p>"
    }
  ],
  "quiz": [
    {
      "q": "An electronically controlled damper changes its stiffness:",
      "choices": [
        "Only when the car is parked",
        "While the car is driving, on a signal from the control module",
        "When the tires are changed",
        "Never — it is fixed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The module changes the damper's stiffness as the car drives. (a) The system works while driving. (c) A tire change does not change damping. (d) Fixed stiffness is a normal damper, not an electronic one."
    },
    {
      "q": "In a magnetorheological damper, applying a magnetic field makes the fluid:",
      "choices": [
        "Thinner",
        "Thicker, so the damper gets stiffer",
        "Freeze",
        "Boil"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The iron particles line up and the fluid thickens. (a) The field thickens, not thins, the fluid. (c) The fluid does not freeze. (d) The fluid does not boil."
    },
    {
      "q": "Air suspension keeps a loaded car level by:",
      "choices": [
        "Adding air to the bellows on the loaded side",
        "Letting air out of all the bellows",
        "Locking the steering",
        "Turning off the compressor"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The module adds air where the height has dropped. (b) Letting air out would lower the car further. (c) Steering is unrelated. (d) Turning off the compressor stops leveling."
    },
    {
      "q": "A ride-height sensor tells the control module:",
      "choices": [
        "How high the body sits at that corner",
        "How fast the car is going",
        "How much fuel is left",
        "The tire pressure"
      ],
      "answer": 0,
      "explanation": "Correct: (a). It measures body height at its corner. (b) Speed comes from wheel-speed sensors. (c) Fuel level is a separate sensor. (d) Tire pressure is measured by TPMS."
    },
    {
      "q": "The first step in diagnosing an electronic suspension fault is to:",
      "choices": [
        "Read the fault codes and live data with a scan tool",
        "Replace all four dampers",
        "Change the tires",
        "Disconnect the battery"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Codes and live data point at the failing corner and part. (b) Replacing all dampers is guessing. (c) Tires do not set suspension codes. (d) Disconnecting the battery erases the codes the technician needs."
    },
    {
      "q": "A car that sags on one corner overnight but rises when started most likely has a:",
      "choices": [
        "Leaking air bellows on that corner",
        "Flat tire",
        "Worn brake pad",
        "Dead battery"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A leak lets air out while parked; the compressor refills it on start. (b) A flat tire does not rise when the engine starts. (c) A brake pad does not affect ride height. (d) A dead battery would stop the car starting."
    },
    {
      "q": "A bent ride-height sensor linkage causes a fault because:",
      "choices": [
        "It feeds the module wrong height information",
        "It stops the engine",
        "It drains the battery",
        "It locks the brakes"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The module levels the car to a height that is not real. (b) The linkage does not affect the engine. (c) It does not drain the battery. (d) It does not affect the brakes."
    },
    {
      "q": "Electronic suspension and steering parts share information over the vehicle's:",
      "choices": [
        "Data network",
        "Exhaust pipe",
        "Fuel line",
        "Brake line"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The computers share sensor data over the network. (b), (c), and (d) carry exhaust, fuel, and fluid, not data."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Electronic Suspension &amp; Steering: Quick Reference</h3>\n<p><strong>Electronic dampers:</strong> Change stiffness while driving — by valve or by magnetic fluid (iron particles line up and the fluid thickens).</p>\n<p><strong>Air suspension:</strong> Bellows + compressor + ride-height sensors + control module. Sensors detect a drop, module adds air, car levels.</p>\n<p><strong>Diagnosis:</strong> Scan tool first — codes, then live data, then the physical check (bellows, linkages, connectors).</p>\n<p><strong>Watch out:</strong> A sagging corner can be a leaking bellows or a bent sensor linkage, not a bad damper. Check the battery first — low voltage sets codes.</p>\n<p><strong>Self-check:</strong> Explain how a loaded car stays level with air suspension.</p>\n"
};
