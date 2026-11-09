// ase-a6 - Module 11: Hybrid/EV Electrical Safety
module.exports = {
  "number": 11,
  "slug": "hybrid-ev-electrical-safety",
  "title": "Hybrid/EV Electrical Safety",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how a hybrid or electric vehicle differs electrically from a gasoline car.",
    "Describe the high-voltage system: battery pack, inverter, and electric motor.",
    "Explain the safety rules for working on a hybrid or EV: de-powering, PPE, and insulated tools.",
    "Describe what the high-voltage interlock and the service disconnect do.",
    "Recognize when a job is beyond your training and must go to a qualified technician."
  ],
  "sections": [
    {
      "heading": "How Hybrids and EVs Differ",
      "html": "<p>A gasoline car has one electrical system, running on the battery's low voltage. A hybrid or electric vehicle has two: the familiar low-voltage system that runs the lights, the computers, and the accessories, and a <strong>high-voltage system</strong> that drives the car. The high-voltage battery pack stores the energy, the <strong>inverter</strong> turns the pack's direct current into the alternating current the electric motor needs, and the <strong>electric motor</strong> drives the wheels — alone in an electric vehicle, alongside the gasoline engine in a hybrid.</p>\n<p>The high-voltage pack runs at roughly 200 to 450 volts DC — far higher than the low-voltage system, and high enough to kill. That is the whole point of this module: the high-voltage system is not a bigger version of the low-voltage system. It has its own parts, its own wiring (usually in bright orange), its own safety rules, and its own training. A technician who treats it like a gasoline car's electrics will be hurt.</p>"
    },
    {
      "heading": "The High-Voltage Parts",
      "html": "<p>The <strong>high-voltage battery pack</strong> is a large pack of cells, usually under the floor or in the rear of the car, that stores the energy for driving. The <strong>inverter</strong> (also called the power electronics) converts the pack's direct current into alternating current for the motor, and converts it back again when the motor acts as a generator during regenerative braking — turning the car's motion back into electricity to recharge the pack. The <strong>electric motor</strong> (or motors) drives the wheels, and in a hybrid the <strong>hybrid control module</strong> decides when the engine runs, when the motor runs, and when they run together.</p>\n<p>The high-voltage wiring is colored bright orange so it can be recognized at a glance, and it is routed away from the parts a technician normally touches. The low-voltage system and the high-voltage system are kept separate, and the high-voltage system is only live when the car commands it — when the car is off and de-powered, the pack is disconnected from the rest of the car by contactors inside the pack.</p>"
    },
    {
      "heading": "Safety: De-Powering, PPE, and Insulated Tools",
      "html": "<p>Before any work on or near a hybrid or EV high-voltage system, the car must be <strong>de-powered</strong>: switched off, the key kept away from the car, and the high-voltage service disconnect removed (where fitted) following the manufacturer's procedure. Then you <strong>verify</strong> that the system is dead with a meter rated for high voltage — never trust a switch or a light; test it. Only then is it safe to touch the high-voltage parts. Skipping the verification step is how technicians get hurt: a system that should be dead but is not.</p>\n<p><strong>Personal protective equipment</strong> for high-voltage work means insulated gloves rated for the voltage, tested before each use, worn with leather protectors over them, plus eye protection. <strong>Insulated tools</strong> — tools with insulated handles rated for high voltage — are used so that a slip does not bridge a live part to ground or to your hand. And one person works while another knows where they are: high-voltage work is never done alone, and a rescue plan is in place before the work starts.</p>"
    },
    {
      "heading": "Interlocks, Disconnects, and Knowing Your Limits",
      "html": "<p>The car protects itself too. A <strong>high-voltage interlock</strong> is a low-voltage loop that runs through every high-voltage connector: unplug a connector and the loop breaks, and the car immediately opens the contactors and disconnects the pack. The <strong>service disconnect</strong> is a plug or lever that physically breaks the high-voltage circuit inside the pack, so the pack's voltage cannot reach the rest of the car while it is removed. These are safety systems, not service shortcuts — they do not replace the de-powering procedure and the verification test.</p>\n<p>The most important safety rule is knowing your limits. High-voltage work needs specific training, and the ASE L3 test exists because the work is different from gasoline-car electrics. If you have not been trained and you are not equipped, the job goes to a qualified technician. There is no shame in that — there is real danger in the alternative. A hybrid or EV that has been in a crash needs the same caution: the pack may be damaged, the interlock may have opened, and the car must be treated as live until a qualified technician has verified that it is safe.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>A hybrid or EV has two electrical systems: the familiar low-voltage system and a high-voltage system (roughly 200 to 450 volts DC) that drives the car.</li>\n<li>High-voltage parts: battery pack, inverter (DC to AC and back), electric motor, hybrid control module; high-voltage wiring is bright orange.</li>\n<li>De-power before work: switch off, key away, remove the service disconnect per the manufacturer's procedure — then verify dead with a meter rated for high voltage.</li>\n<li>PPE: insulated gloves rated for the voltage (tested before each use, with leather protectors) and eye protection; use insulated tools; never work alone.</li>\n<li>Interlock: unplugging a high-voltage connector breaks a low-voltage loop and opens the contactors, disconnecting the pack.</li>\n<li>Know your limits: high-voltage work needs specific training; untrained work goes to a qualified technician.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Trusting that a hybrid or EV is dead because it is switched off, without verifying it with a meter. The system is only safe when it has been de-powered per the procedure and verified dead — never assume.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain de-powering and verification and name the high-voltage parts, you have this module. Module 12 pulls the whole course together in an electrical review.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Hybrid vehicle",
      "def": "A car with both a gasoline engine and an electric motor, which work together or separately to drive the wheels."
    },
    {
      "term": "Electric vehicle (EV)",
      "def": "A car driven only by an electric motor, powered by a high-voltage battery pack."
    },
    {
      "term": "High-voltage system",
      "def": "The system that drives a hybrid or EV, running at roughly 200 to 450 volts DC — high enough to kill."
    },
    {
      "term": "Low-voltage system",
      "def": "The car's familiar system that runs the lights, computers, and accessories."
    },
    {
      "term": "High-voltage battery pack",
      "def": "The large pack of cells that stores the energy for driving a hybrid or EV."
    },
    {
      "term": "Inverter",
      "def": "The power electronics that turn the battery pack's direct current into alternating current for the motor, and back again during regenerative braking."
    },
    {
      "term": "Electric motor",
      "def": "The motor that drives the wheels of a hybrid or EV."
    },
    {
      "term": "Regenerative braking",
      "def": "Using the electric motor as a generator during braking, turning the car's motion back into electricity to recharge the pack."
    },
    {
      "term": "De-powering",
      "def": "The procedure that makes a hybrid or EV safe to work on: switching it off, removing the service disconnect, and verifying the system is dead."
    },
    {
      "term": "Service disconnect",
      "def": "A plug or lever that physically breaks the high-voltage circuit inside the battery pack."
    },
    {
      "term": "High-voltage interlock",
      "def": "A low-voltage loop through every high-voltage connector; unplugging a connector breaks the loop and opens the contactors, disconnecting the pack."
    },
    {
      "term": "Contactor",
      "def": "A heavy switch inside the battery pack that connects or disconnects the pack from the rest of the car."
    },
    {
      "term": "Insulated gloves",
      "def": "Gloves rated for high voltage, tested before each use and worn with leather protectors, for high-voltage work."
    },
    {
      "term": "Insulated tools",
      "def": "Tools with insulated handles rated for high voltage, so a slip does not bridge a live part to ground or to your hand."
    },
    {
      "term": "Orange wiring",
      "def": "The bright orange color used for high-voltage wiring, so it can be recognized at a glance."
    },
    {
      "term": "Verification",
      "def": "Testing with a meter rated for high voltage to prove a system is dead before touching it — never trust a switch or a light."
    }
  ],
  "video": {
    "title": "Working On High Voltage Vehicles",
    "embedUrl": "https://www.youtube.com/embed/t_jDdsC5UBc",
    "note": "Garage Gurus shows what working on high-voltage vehicles really involves — de-powering, PPE, and insulated tools. Watch the safety steps in order; that order is the heart of this module.",
    "more": [
      {
        "title": "ASE L3 Hybrid and Electric Vehicles Unit 2 Hybrid and EV High Voltage Safety Part 1 Overview",
        "url": "https://www.youtube.com/watch?v=j_K7JtHuvQo"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A hybrid car has two electrical systems. Name them, say what each one does, and say roughly what voltage the high-voltage one runs at.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The low-voltage system runs the lights, computers, and accessories — the familiar system. Step 2: The high-voltage system drives the car — it powers the electric motor. Step 3: The high-voltage pack runs at roughly 200 to 450 volts DC, far higher than the low-voltage system and high enough to kill.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> List the de-powering steps in order, and say why the last step matters most.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Switch the car off and keep the key away from the car. Step 2: Remove the high-voltage service disconnect following the manufacturer's procedure. Step 3: Verify the system is dead with a meter rated for high voltage. Step 4: The verification matters most because it proves the system is actually dead — a switch or a light can lie, and a system that should be dead but is not is how technicians get hurt.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Why is high-voltage wiring colored bright orange, and why does that matter?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Orange marks the wiring as high voltage so it can be recognized at a glance. Step 2: A technician can see at once which wires must not be touched without de-powering. Step 3: It prevents the most basic mistake of all — treating a high-voltage wire like an ordinary low-voltage wire.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> What does the high-voltage interlock do, and what happens when a high-voltage connector is unplugged?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The interlock is a low-voltage loop that runs through every high-voltage connector. Step 2: Unplugging a connector breaks the loop. Step 3: The car immediately opens the contactors and disconnects the battery pack, so the pack's voltage cannot reach the rest of the car.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A technician has not been trained on high-voltage systems and is asked to work on a hybrid's battery pack. What should they do, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: They should refuse the job and send it to a qualified technician. Step 2: High-voltage work needs specific training, the right PPE, and insulated tools. Step 3: Without them, the work is dangerous — the high-voltage system runs at roughly 200 to 450 volts DC, which is high enough to kill. There is no shame in knowing your limits.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A hybrid car has been in a crash. Why must it be treated as live until a qualified technician has verified it is safe?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The crash may have damaged the battery pack or the high-voltage wiring. Step 2: The interlock may have opened, but damaged wiring can still be live. Step 3: Until a qualified technician has de-powered it and verified it dead with a meter, the car must be treated as live — never assume a crashed hybrid or EV is safe.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A hybrid or EV has two electrical systems: the low-voltage system and:",
      "choices": [
        "A second low-voltage system",
        "A high-voltage system, running at roughly 200 to 450 volts DC, that drives the car",
        "A solar panel",
        "A second battery of the same voltage"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The high-voltage system powers the electric motor and runs at roughly 200 to 450 volts DC. (a) A second low-voltage system would not drive the car. (c) Solar panels are not part of the drive system. (d) A second battery of the same voltage would not drive the car."
    },
    {
      "q": "The inverter's job is to:",
      "choices": [
        "Charge the low-voltage battery",
        "Turn the battery pack's direct current into alternating current for the motor, and back again during regenerative braking",
        "Start the gasoline engine",
        "Pump coolant"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The inverter converts DC to AC for the motor and AC back to DC when the motor generates during braking. (a) A DC-to-DC converter charges the low-voltage battery. (c) The starter starts the engine. (d) The water pump moves coolant."
    },
    {
      "q": "Before working on a hybrid's high-voltage system, you must:",
      "choices": [
        "Switch it off and start work",
        "De-power it per the manufacturer's procedure and verify it is dead with a meter rated for high voltage",
        "Disconnect the low-voltage battery only",
        "Wear gloves only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). De-powering plus verification is the procedure — never trust a switch or a light. (a) Switching off alone does not prove the system is dead. (c) The low-voltage battery is a separate system. (d) Gloves alone do not make a live system safe."
    },
    {
      "q": "High-voltage wiring is colored bright orange so that:",
      "choices": [
        "It looks nice",
        "It can be recognized at a glance as high voltage, so no one touches it without de-powering",
        "It stays cool",
        "It matches the car"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Orange is the warning color for high-voltage wiring. (a) Appearance is not the reason. (c) Color does not cool wiring. (d) Matching the car is irrelevant."
    },
    {
      "q": "The high-voltage interlock works by:",
      "choices": [
        "Locking the doors",
        "Running a low-voltage loop through every high-voltage connector; unplugging a connector breaks the loop and opens the contactors, disconnecting the pack",
        "Charging the pack",
        "Cooling the motor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The interlock disconnects the pack the moment a high-voltage connector is opened. (a) Door locks are a body system. (c) Charging is the inverter's and the pack's job. (d) Cooling is the cooling system's job."
    },
    {
      "q": "Insulated gloves for high-voltage work must be:",
      "choices": [
        "Worn once and thrown away",
        "Rated for the voltage, tested before each use, and worn with leather protectors over them",
        "Made of leather only",
        "Worn on one hand only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Rated, tested before each use, and protected by leather over-gloves. (a) Gloves are tested and reused, not thrown away after one use. (c) Leather alone does not insulate against high voltage. (d) Both hands need protection."
    },
    {
      "q": "A technician who has not been trained on high-voltage systems should:",
      "choices": [
        "Try the job carefully",
        "Send the job to a qualified technician",
        "Watch a video and then try it",
        "Work alone so no one is at risk"
      ],
      "answer": 1,
      "explanation": "Correct: (b). High-voltage work needs specific training and equipment; untrained work is dangerous. (a) Care does not replace training. (c) A video is not training. (d) High-voltage work is never done alone."
    },
    {
      "q": "A crashed hybrid or EV must be treated as live until:",
      "choices": [
        "The paint is fixed",
        "A qualified technician has de-powered it and verified it is dead with a meter",
        "The tires are changed",
        "It is towed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Crash damage can leave high-voltage parts live even when the interlock has opened. (a) Paint has nothing to do with safety. (c) Tires are unrelated. (d) Towing does not make a car safe to touch."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Hybrid/EV Electrical Safety: Quick Reference</h3>\n<p><strong>Core idea:</strong> A hybrid or EV has two electrical systems — the familiar low-voltage one and a high-voltage one (roughly 200 to 450 volts DC) that drives the car. The high-voltage system is not a bigger low-voltage system; it has its own parts, wiring, and safety rules.</p>\n<p><strong>Parts:</strong> High-voltage battery pack · Inverter (DC to AC and back) · Electric motor · Hybrid control module. High-voltage wiring is bright orange.</p>\n<p><strong>De-power:</strong> Switch off, key away, remove the service disconnect per the manufacturer's procedure — then verify dead with a meter rated for high voltage. Never trust a switch or a light.</p>\n<p><strong>PPE:</strong> Insulated gloves rated for the voltage (tested before each use, leather protectors over them) + eye protection + insulated tools. Never work alone.</p>\n<p><strong>Interlock:</strong> Unplugging a high-voltage connector breaks a low-voltage loop and opens the contactors, disconnecting the pack.</p>\n<p><strong>Self-check:</strong> Explain de-powering and verification and name the high-voltage parts. If you can, you have this module.</p>\n"
};
