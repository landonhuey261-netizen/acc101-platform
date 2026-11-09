// ase-a5 - Module 11: Electronic Brake Systems
module.exports = {
  "number": 11,
  "slug": "electronic-brake-systems",
  "title": "Electronic Brake Systems",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what brake-by-wire means and how it differs from a hydraulic brake.",
    "Describe how a brake pedal simulator gives the driver normal pedal feel.",
    "Explain how regenerative braking works with the friction brakes on hybrids and EVs.",
    "List the safety rules for electronic brake systems: fail-safe, scan tool, and high-voltage awareness.",
    "Explain why electronic brake systems are diagnosed with a scan tool first."
  ],
  "sections": [
    {
      "heading": "From Fluid to Signal",
      "html": "<p>In a normal hydraulic brake, the pedal pushes fluid and the fluid pushes the brakes. In a <strong>brake-by-wire</strong> system, the pedal sends an <strong>electrical signal</strong> to a control module, and the module commands actuators at the wheels — electric motors or electro-hydraulic pumps — to apply the brakes. There is no direct hydraulic connection between the pedal and the wheels in a full brake-by-wire system, though many cars on the road today use a <strong>hybrid</strong> design: the pedal still has a hydraulic link as a backup, with electronics controlling the pressure.</p><p>The advantage is speed and precision: the module can apply each wheel's brake independently, blend in regenerative braking, and react faster than a driver's foot. The challenge is trust — the system must be safe if the electronics fail, which is why every brake-by-wire design has a <strong>fail-safe</strong> that returns the car to normal hydraulic braking if the power or the signal is lost.</p>"
    },
    {
      "heading": "Pedal Feel, Simulated",
      "html": "<p>A driver expects the pedal to feel a certain way: firm, with resistance that grows as the pedal is pressed. In a brake-by-wire car, the pedal is not pushing fluid, so a <strong>pedal simulator</strong> — a spring, or a small motor — provides that resistance artificially. The simulator's job is to make an electronic pedal feel like a hydraulic one, so the driver can judge how hard they are braking by feel, as they always have.</p><p>If the simulator fails, the pedal can feel strange — too light, too heavy, or with no resistance at all — and the driver may misjudge the braking. A strange pedal feel on a brake-by-wire car is a fault to diagnose, not a quirk to ignore.</p>"
    },
    {
      "heading": "Regenerative Braking",
      "html": "<p>On hybrids and EVs, <strong>regenerative braking</strong> turns the drive motor into a generator when the driver lifts off or brakes: the motor resists the wheels, slowing the car, and the energy it makes charges the battery instead of being lost as heat. The control module <strong>blends</strong> regenerative braking with the friction brakes — at light braking, most of the stopping can be regenerative; at hard braking, the friction brakes do most of the work.</p><p>The blending must be seamless: the driver should feel one smooth stop, not a handover between two systems. A fault in the blending can show up as a pedal that feels different at different speeds, or a car that does not slow as expected when the driver lifts off. And because hybrids and EVs carry high-voltage packs — roughly 200–450 V DC — any work near the drive system follows the high-voltage safety rules from the ASE L3 material: de-power, verify, and use insulated tools.</p>"
    },
    {
      "heading": "Diagnosing Electronic Brakes",
      "html": "<p>Diagnosis starts with a <strong>scan tool</strong>: read the fault codes, look at the live data from the pedal sensor and the wheel actuators, and check what the module is commanding. A code naming one wheel's actuator points at that actuator or its wiring; a code for the pedal sensor points at the sensor or the simulator. Only after the codes are read does the technician inspect the parts.</p><p>The first physical checks are the same as for any brake: fluid level and leaks on a hybrid design, pad and rotor condition, and the wiring and connectors to the actuators — because a corroded connector can set a code in a system whose brakes are perfectly fine. And on a hybrid or EV, the high-voltage rules apply before any work near the drive system begins.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Brake-by-wire: pedal sends a signal; the module commands actuators at the wheels. A fail-safe returns the car to hydraulic braking if the electronics fail.</li><li>Pedal simulator: a spring or motor that gives the pedal normal feel. Strange feel is a fault.</li><li>Regenerative braking: the drive motor becomes a generator, charging the battery; the module blends it with the friction brakes.</li><li>Diagnose with a scan tool first; check wiring and connectors; high-voltage rules apply on hybrids and EVs.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Treating a brake-by-wire car like a purely hydraulic one. Forcing a caliper piston back or bleeding it the old way without the maker's procedure can damage the actuators or set fault codes.</div><div class=\"callout\"><strong>Common mistake:</strong> Ignoring a strange pedal feel on a hybrid or EV. A change in pedal feel can mean the regenerative blending has failed — the car may not slow as the driver expects.</div><p><strong>Ready-to-Work link:</strong> If you can explain brake-by-wire, the pedal simulator, and the fail-safe, you have this module. Module 12 is the brake review.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Brake-by-wire",
      "def": "A braking system where the pedal sends an electrical signal and a module commands actuators at the wheels, with no direct hydraulic link."
    },
    {
      "term": "Pedal simulator",
      "def": "A spring or motor that gives a brake-by-wire pedal the feel of a hydraulic pedal."
    },
    {
      "term": "Fail-safe",
      "def": "A design that returns a brake-by-wire car to normal hydraulic braking if the electronics or power fail."
    },
    {
      "term": "Actuator",
      "def": "A motor or electro-hydraulic pump at a wheel that applies the brake on the module's command."
    },
    {
      "term": "Regenerative braking",
      "def": "Using the drive motor as a generator to slow the car and charge the battery."
    },
    {
      "term": "Blending",
      "def": "The control module mixing regenerative braking with friction braking into one smooth stop."
    },
    {
      "term": "Control module",
      "def": "The computer that reads the pedal sensor and commands the brake actuators."
    },
    {
      "term": "Pedal sensor",
      "def": "A sensor that measures how far and how hard the driver is pressing the brake pedal."
    },
    {
      "term": "Hybrid",
      "def": "A vehicle with both an engine and an electric drive motor; its brakes blend regenerative and friction braking."
    },
    {
      "term": "High-voltage pack",
      "def": "The large battery in a hybrid or EV, running roughly 200–450 V DC; handled only under high-voltage safety rules."
    },
    {
      "term": "De-power",
      "def": "Shutting down a hybrid or EV high-voltage system and verifying it is off before working near it."
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
      "term": "Friction brake",
      "def": "A normal hydraulic brake — pads against a rotor or shoes against a drum."
    },
    {
      "term": "Electro-hydraulic pump",
      "def": "A pump that builds brake pressure on an electronic system's command."
    }
  ],
  "video": {
    "title": "Electronic Braking System: Brake-by-Wire Explained",
    "embedUrl": "https://www.youtube.com/embed/s8GbQTEJChI",
    "note": "An explanation of brake-by-wire: how electronic braking replaces the hydraulic connection with digital signals, how pedal feel is simulated, and what happens if the electronics fail. Watch for the fail-safe — what the system does when the power goes away.",
    "more": [
      {
        "title": "How a Car Braking System Works: ABS, Traction & Stability Control Explained",
        "url": "https://www.youtube.com/watch?v=qHf1qo31-aw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Explain in two sentences what brake-by-wire means and how it differs from a hydraulic brake.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: In brake-by-wire the pedal sends an electrical signal to a control module, which commands actuators at the wheels to apply the brakes. Step 2: In a hydraulic brake the pedal pushes fluid that pushes the brakes directly — there is no signal and no module in between.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> What is the fail-safe in a brake-by-wire system, and why does it matter?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The fail-safe returns the car to normal hydraulic braking if the electronics or the power fail. Step 2: It matters because the driver must still be able to stop the car when the electronic system is gone — the fail-safe is what makes brake-by-wire safe enough to use.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A hybrid car's pedal feels different at low speed than at high speed, and the car does not slow as expected when the driver lifts off. What system is a likely suspect?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The regenerative-braking blending is a likely suspect. Step 2: The module blends regenerative and friction braking into one smooth stop, and if the blending fails the car can feel different at different speeds and not slow as the driver expects when lifting off.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> What does the pedal simulator do, and what does a strange pedal feel mean on a brake-by-wire car?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The simulator — a spring or a small motor — gives the electronic pedal the resistance a driver expects from a hydraulic pedal. Step 2: A strange feel means the simulator or the pedal sensor has a fault and must be diagnosed, because the driver judges braking force by that feel.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Why is a scan tool the first step in diagnosing an electronic brake fault?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The fault codes and live data show which actuator, sensor, or circuit the module is unhappy with. Step 2: That narrows the inspection to one part instead of checking every actuator, sensor, and wire by hand.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A technician is about to work on the brakes of a hybrid. What high-voltage rule applies, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The high-voltage system must be de-powered and verified off before work near the drive system, using insulated tools. Step 2: Hybrid packs run roughly 200–450 V DC, which can injure or kill — the de-power rule is what keeps the technician safe.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Brake-by-wire means the pedal:",
      "choices": [
        "Sends an electrical signal to a module that commands actuators at the wheels",
        "Pushes fluid directly to the brakes",
        "Pulls a cable",
        "Does nothing"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The signal, not fluid, carries the driver's command. (b) That is a hydraulic brake. (c) A cable is a parking brake. (d) The pedal always does something."
    },
    {
      "q": "The fail-safe in a brake-by-wire system:",
      "choices": [
        "Returns the car to normal hydraulic braking if the electronics fail",
        "Turns the car off",
        "Locks the wheels",
        "Disables the steering"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The driver must still be able to stop if the electronics fail. (b) The car is not turned off. (c) The wheels are not locked. (d) Steering is unaffected."
    },
    {
      "q": "The pedal simulator's job is to:",
      "choices": [
        "Give the electronic pedal the feel of a hydraulic pedal",
        "Pump the brake fluid",
        "Charge the battery",
        "Cool the brakes"
      ],
      "answer": 0,
      "explanation": "Correct: (a). It provides the resistance the driver expects. (b) Pumping fluid is the master cylinder's job. (c) Charging is the charging system's job. (d) Cooling is not the simulator's job."
    },
    {
      "q": "Regenerative braking slows a hybrid or EV by:",
      "choices": [
        "Turning the drive motor into a generator that charges the battery",
        "Pressing the pads harder",
        "Locking the wheels",
        "Turning off the engine"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The motor resists the wheels and makes electricity. (b) Pads are the friction brakes, not regeneration. (c) Locking the wheels is what ABS prevents. (d) The engine is not turned off to brake."
    },
    {
      "q": "Blending in a hybrid brake system means the module:",
      "choices": [
        "Mixes regenerative braking with friction braking into one smooth stop",
        "Mixes two kinds of brake fluid",
        "Mixes the front and rear brakes",
        "Mixes the brake and accelerator"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The driver should feel one smooth stop, not a handover. (b) Fluids are not mixed. (c) Front and rear are separate circuits, not blended. (d) Brake and accelerator are never mixed."
    },
    {
      "q": "A strange pedal feel on a brake-by-wire car is:",
      "choices": [
        "A fault to diagnose, not a quirk to ignore",
        "Normal and expected",
        "A sign the tires are new",
        "A sign the fuel is low"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Pedal feel is how the driver judges braking, so a change means a fault. (b) A normal pedal feels consistent. (c) Tires do not change pedal feel. (d) Fuel does not change pedal feel."
    },
    {
      "q": "The first step in diagnosing an electronic brake fault is to:",
      "choices": [
        "Read the fault codes and live data with a scan tool",
        "Replace all four calipers",
        "Change the tires",
        "Disconnect the battery"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Codes and live data point at the failing part. (b) Replacing all calipers is guessing. (c) Tires do not set brake codes. (d) Disconnecting the battery erases the codes needed."
    },
    {
      "q": "Hybrid and EV high-voltage packs run roughly:",
      "choices": [
        "200–450 V DC",
        "12 V DC",
        "1 V DC",
        "1000 V DC"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Hybrid/EV packs run roughly 200–450 V DC. (b) 12 V is the low-voltage system. (c) 1 V is not a traction pack. (d) 1000 V is not the typical hybrid/EV pack range in this course."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Electronic Brake Systems: Quick Reference</h3>\n<p><strong>Brake-by-wire:</strong> Pedal sends a signal; module commands actuators at the wheels. Fail-safe returns the car to hydraulic braking if the electronics fail.</p>\n<p><strong>Pedal simulator:</strong> Spring or motor giving the pedal normal feel. Strange feel = fault.</p>\n<p><strong>Regenerative braking:</strong> Drive motor becomes a generator, charging the battery; the module blends it with the friction brakes into one smooth stop.</p>\n<p><strong>Diagnosis:</strong> Scan tool first — codes, then live data, then the physical check. High-voltage rules apply on hybrids and EVs (packs roughly 200–450 V DC).</p>\n<p><strong>Self-check:</strong> Explain brake-by-wire, the pedal simulator, and the fail-safe.</p>\n"
};
