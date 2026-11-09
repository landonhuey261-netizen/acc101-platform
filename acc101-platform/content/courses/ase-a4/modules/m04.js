// ase-a4 - Module 4: Power Steering & EPS
module.exports = {
  "number": 4,
  "slug": "power-steering-eps",
  "title": "Power Steering & EPS",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how hydraulic power steering uses fluid pressure to reduce steering effort.",
    "Explain how electric power steering (EPS) uses a motor and a torque sensor instead of fluid.",
    "Compare column-assist, pinion-assist, and rack-assist EPS designs.",
    "List the symptoms of power-steering failure in hydraulic and EPS systems.",
    "Describe the safety rule that applies when EPS fails: steering still works, but effort rises sharply."
  ],
  "sections": [
    {
      "heading": "Why Power Steering Exists",
      "html": "<p>Steering a heavy car at parking speed without help takes a lot of effort, because the tires are standing still and scrubbing as they turn. Power steering adds force on top of the driver's input so the wheel turns easily at low speed, while keeping enough feel at high speed that the driver still senses the road. Both hydraulic and electric systems do this — they just make the extra force in different ways.</p><p>The key idea is <strong>assist, not replacement</strong>. The driver is always mechanically connected to the wheels. If the assist fails, the steering still works — it just gets heavy, and that is exactly what a driver must be ready for.</p>"
    },
    {
      "heading": "Hydraulic Power Steering",
      "html": "<p>A hydraulic system has a <strong>pump</strong>, usually driven by the engine, that pressurizes power-steering fluid. A <strong>rotary valve</strong> in the steering gear senses which way the driver is turning and sends pressurized fluid to one side of a piston in the gear, pushing the rack in the same direction the driver is turning. Let go of the wheel and the valve centers, the pressure balances, and the assist stops.</p><p>The system needs fluid at the right level, hoses that do not leak, and a pump that works. Low fluid, a slipping or broken drive belt, or a leaking hose all cut the assist, and the steering gets heavy — often with a whine from the pump as it starves for fluid.</p>"
    },
    {
      "heading": "Electric Power Steering (EPS)",
      "html": "<p>EPS replaces the pump, fluid, and hoses with an <strong>electric motor</strong>, a <strong>torque sensor</strong>, and a <strong>computer</strong>. The torque sensor measures how hard the driver is twisting the steering wheel — a small torsion bar in the column twists a tiny amount, and the sensor reads that twist. The computer takes that signal, adds vehicle speed, and tells the motor how much help to give. At parking speed the help is large; at highway speed it is small, so the steering stays stable.</p><p>EPS comes in three layouts: <strong>column-assist</strong> (motor on the column, common on small cars), <strong>pinion-assist</strong> (motor on the pinion), and <strong>rack-assist</strong> (motor driving the rack directly, common on heavier vehicles). All three use the same idea: sense the twist, add motor force.</p>"
    },
    {
      "heading": "When Assist Fails",
      "html": "<p>Hydraulic failure shows as heavy steering, often suddenly, plus a whining pump, a slipping belt, or fluid on the ground or on the hoses. EPS failure shows as heavy steering plus a <strong>warning light</strong> on the dash, and the system stores a <strong>fault code</strong> that a scan tool can read. Low battery voltage is a common EPS cause, because the motor draws a lot of current — a weak battery or a bad connection can set the light before anything in the steering itself has failed.</p><p>In both cases the first rule is the same: the car can still be steered, but it takes much more effort, especially at low speed. A driver who is not expecting that can be caught out in a parking lot or a tight turn, so a failed-assist car is driven gently to a safe stop, not at normal speed.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Power steering adds force; it never replaces the mechanical connection to the wheels.</li><li>Hydraulic: engine-driven pump, fluid, rotary valve, piston in the gear.</li><li>EPS: torque sensor + computer + electric motor; no fluid, no pump, no hoses.</li><li>EPS layouts: column-assist, pinion-assist, rack-assist.</li><li>Failed assist = heavy steering, still steerable. Hydraulic: whine, leaks, belt. EPS: warning light, fault code, check the battery first.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Adding any fluid to a hydraulic power-steering system. Use only the fluid type the vehicle maker specifies — the wrong fluid can damage seals and the pump.</div><div class=\"callout\"><strong>Common mistake:</strong> Replacing an EPS rack before checking battery voltage and connections. A weak battery is a common, cheap cause of an EPS light.</div><p><strong>Ready-to-Work link:</strong> If you can explain how the torque sensor tells the EPS computer how much help to give, you have this module. Module 5 covers wheel alignment: camber, caster, and toe.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Power steering",
      "def": "A system that adds force to the driver's steering input to reduce effort."
    },
    {
      "term": "Hydraulic power steering",
      "def": "Power steering using an engine-driven pump, fluid, and a valve to push the steering gear."
    },
    {
      "term": "EPS",
      "def": "Electric Power Steering: assist from an electric motor controlled by a computer, with no hydraulic fluid."
    },
    {
      "term": "Torque sensor",
      "def": "A sensor that measures how hard the driver is twisting the steering wheel, so the EPS computer knows how much help to give."
    },
    {
      "term": "Torsion bar",
      "def": "A small bar inside the steering column that twists slightly under steering effort; the torque sensor reads that twist."
    },
    {
      "term": "Rotary valve",
      "def": "A valve in a hydraulic steering gear that directs pressurized fluid to one side of the piston as the driver turns."
    },
    {
      "term": "Power-steering pump",
      "def": "The engine-driven pump that pressurizes fluid in a hydraulic power-steering system."
    },
    {
      "term": "Column-assist EPS",
      "def": "EPS with the assist motor mounted on the steering column."
    },
    {
      "term": "Pinion-assist EPS",
      "def": "EPS with the assist motor mounted on the pinion gear."
    },
    {
      "term": "Rack-assist EPS",
      "def": "EPS with the assist motor driving the steering rack directly."
    },
    {
      "term": "Steering angle sensor",
      "def": "A sensor that tells the vehicle how far the steering wheel has turned from straight ahead."
    },
    {
      "term": "Fault code",
      "def": "A code stored by a control module when it detects a fault, read with a scan tool."
    },
    {
      "term": "Warning light",
      "def": "A dash light that tells the driver a system has detected a fault."
    },
    {
      "term": "Assist",
      "def": "The extra force a power-steering system adds on top of the driver's effort."
    },
    {
      "term": "Speed-sensitive assist",
      "def": "Power steering that gives more help at low speed and less at high speed."
    }
  ],
  "video": {
    "title": "How Electric Power Steering Works",
    "embedUrl": "https://www.youtube.com/embed/z56A9ccI5sU",
    "note": "WeberAuto takes apart a column-mounted electric power steering system from a Toyota Prius and shows the torque sensor, EPS motor, and computer. Watch how the torque sensor tells the computer how much help to give.",
    "more": [
      {
        "title": "How Electric Power Steering Works — Rack Type",
        "url": "https://www.youtube.com/watch?v=KuY_DTgGHW8"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A car's steering suddenly gets very heavy and the power-steering pump is whining. The reservoir is nearly empty. What is the likely fault, and what should be checked first?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The system has lost fluid — the pump is starving and cannot build pressure. Step 2: Check for leaks at the hoses, the gear, and the pump, and find the leak before refilling, because topping up without fixing the leak only buys a short drive.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Explain in two sentences how the torque sensor and computer work together in EPS.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The torque sensor measures how much the driver is twisting the wheel, by reading the twist of a small torsion bar. Step 2: The computer takes that signal plus vehicle speed and tells the electric motor how much assist to add.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Name the three EPS layouts and say where the motor sits in each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Column-assist — motor on the steering column. Step 2: Pinion-assist — motor on the pinion gear. Step 3: Rack-assist — motor driving the rack directly.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> An EPS warning light is on and the steering is heavy. The battery is old and the terminals are corroded. Why check the battery before replacing the steering rack?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The EPS motor draws a lot of current, so low voltage or a bad connection can set the fault and cut the assist. Step 2: A battery and terminals are a cheap, common cause — replacing a rack first would be an expensive guess at a cheap fault.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Why does EPS give more assist at parking speed than at highway speed?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: At parking speed the tires scrub as they turn, so the driver needs the most help. Step 2: At highway speed only small corrections are needed, and too much assist would make the steering twitchy and unstable.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A driver says, 'My power steering failed, so I have no steering at all.' Is that correct? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No — the driver is always mechanically connected to the wheels, so steering still works when the assist fails. Step 2: What changes is the effort: steering gets much heavier, especially at low speed, so the car must be driven gently to a safe stop.</p>"
    }
  ],
  "quiz": [
    {
      "q": "In a hydraulic power-steering system, the pump is usually driven by the:",
      "choices": [
        "Electric motor",
        "Engine",
        "Battery",
        "Transmission"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The pump is engine-driven in a hydraulic system. (a) An electric motor drives EPS, not a hydraulic pump. (c) The battery powers electrics, not the pump. (d) The transmission does not drive the pump."
    },
    {
      "q": "The EPS torque sensor measures:",
      "choices": [
        "How fast the car is going",
        "How hard the driver is twisting the steering wheel",
        "How much fuel is in the tank",
        "The temperature of the motor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It reads the twist of the torsion bar as the driver turns. (a) Speed comes from a separate sensor. (c) Fuel level is unrelated. (d) Motor temperature is not what the torque sensor measures."
    },
    {
      "q": "Column-assist EPS has its motor mounted on the:",
      "choices": [
        "Steering column",
        "Rack",
        "Pinion",
        "Wheel hub"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Column-assist puts the motor on the column. (b) A motor on the rack is rack-assist. (c) A motor on the pinion is pinion-assist. (d) No EPS motor sits on the hub."
    },
    {
      "q": "A hydraulic power-steering pump that whines and steering that suddenly gets heavy most likely means:",
      "choices": [
        "The fluid is low or the pump is starving",
        "The tires are overinflated",
        "The battery is fully charged",
        "The alignment is perfect"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A starving pump whines and cannot build pressure. (b) Tire pressure does not make a pump whine. (c) A charged battery does not affect a hydraulic pump. (d) Alignment does not affect pump noise."
    },
    {
      "q": "When EPS fails, the steering:",
      "choices": [
        "Stops working entirely",
        "Still works, but takes much more effort",
        "Turns by itself",
        "Locks the wheels straight"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The mechanical connection remains, so the driver can still steer with heavy effort. (a) The mechanical link is never removed. (c) EPS failure does not steer the car. (d) The wheels are not locked."
    },
    {
      "q": "EPS gives less assist at highway speed because:",
      "choices": [
        "The motor overheats",
        "Too much assist at speed would make steering twitchy and unstable",
        "The battery is charging",
        "The fluid runs out"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Small corrections are all that is needed at speed, and heavy assist would destabilize the car. (a) Overheating is not the reason for the design. (c) Charging is unrelated. (d) EPS has no fluid."
    },
    {
      "q": "An EPS fault is diagnosed first by:",
      "choices": [
        "Reading the stored fault code with a scan tool",
        "Changing the tires",
        "Replacing the rack",
        "Adding power-steering fluid"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The fault code points to the failing part. (b) Tires do not set EPS codes. (c) Replacing the rack before diagnosing is guessing. (d) EPS has no fluid to add."
    },
    {
      "q": "The rotary valve in a hydraulic steering gear:",
      "choices": [
        "Directs pressurized fluid to one side of the piston as the driver turns",
        "Charges the battery",
        "Opens the brakes",
        "Measures tire pressure"
      ],
      "answer": 0,
      "explanation": "Correct: (a). It senses steering direction and sends fluid to push the gear that way. (b) Charging is the charging system's job. (c) Brakes are a separate system. (d) Tire pressure is measured by TPMS."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Power Steering &amp; EPS: Quick Reference</h3>\n<p><strong>Rule:</strong> Assist adds force; the driver is always mechanically connected to the wheels. Failed assist = heavy steering, still steerable.</p>\n<p><strong>Hydraulic:</strong> Engine-driven pump + fluid + rotary valve + piston in the gear. Low fluid, belt, or leak = heavy steering + whine.</p>\n<p><strong>EPS:</strong> Torque sensor reads the twist of the torsion bar → computer adds speed → motor adds assist. No fluid, pump, or hoses.</p>\n<p><strong>Layouts:</strong> Column-assist (on the column) · Pinion-assist (on the pinion) · Rack-assist (on the rack).</p>\n<p><strong>EPS fault:</strong> Warning light + fault code; check battery voltage and connections first.</p>\n<p><strong>Self-check:</strong> Explain how the torque sensor tells the computer how much help to give.</p>\n"
};
