// ase-a5 - Module 6: Traction & Stability Control
module.exports = {
  "number": 6,
  "slug": "traction-stability-control",
  "title": "Traction & Stability Control",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what traction control does when a drive wheel spins.",
    "Explain what stability control does when a car understeers or oversteers.",
    "Name the sensors stability control uses: wheel speed, steering angle, yaw, and lateral acceleration.",
    "Explain how stability control brakes one wheel to turn the car back onto its path.",
    "Explain why these systems share parts with ABS and why the ABS light matters to them."
  ],
  "sections": [
    {
      "heading": "Traction Control: Stop the Spin",
      "html": "<p><strong>Traction control</strong> stops a drive wheel from spinning when it has no grip — on ice, wet leaves, or loose gravel. The system uses the ABS wheel-speed sensors to spot a wheel turning much faster than the others, then it acts in two ways: it <strong>brakes the spinning wheel</strong>, which sends drive force to the wheel that still has grip, and it <strong>reduces engine power</strong> so there is less force to spin the wheel in the first place.</p><p>The driver usually sees a flashing light on the dash while it is working — a sign that the system is active, not that it has failed. On a slippery start, traction control is what lets the car move forward instead of sitting there with one wheel spinning.</p>"
    },
    {
      "heading": "Stability Control: Keep the Car on Its Path",
      "html": "<p><strong>Electronic stability control (ESC)</strong> — also called ESP or VSC, depending on the maker — watches whether the car is going where the driver is pointing it. It compares the <strong>steering angle sensor</strong> (where the driver is pointing) with the <strong>yaw sensor</strong> (which way the car is actually turning) and the <strong>lateral acceleration sensor</strong> (how hard the car is sliding sideways). If the car is not following the steering, ESC steps in.</p><p>When a car <strong>understeers</strong> — it turns less than the driver asked, plowing straight on in a corner — ESC brakes the inside rear wheel to help rotate the car into the turn. When a car <strong>oversteers</strong> — the rear slides out and the car turns more than asked — ESC brakes the outside front wheel to stop the rotation. It can also reduce engine power. All of it happens in a fraction of a second, before most drivers have even noticed the slide.</p>"
    },
    {
      "heading": "Shared Parts with ABS",
      "html": "<p>Traction and stability control are built on ABS: they use the same <strong>wheel-speed sensors</strong>, the same <strong>hydraulic modulator</strong> with its valves and pump, and the same control module (or a module that works closely with it). The difference is that ABS only acts when the driver is braking, while traction and stability control can act on their own — braking a single wheel or cutting engine power even when the driver's foot is on the accelerator, not the brake.</p><p>Because they share parts, a fault in the shared system affects all of them: a failed wheel-speed sensor can turn on the ABS light, the traction-control light, and the stability-control light all at once. That is a clue, not three separate faults — one sensor, three warnings.</p>"
    },
    {
      "heading": "When the Systems Are Off",
      "html": "<p>Most cars let the driver switch traction control off with a button — useful when the car is stuck in deep snow or mud, where a little wheel spin can help it dig out, or on a loose surface where the system would keep cutting power. Stability control usually stays on, or can only be partly switched off, because it is a crash-avoidance system. A car with its stability control switched off will not correct a slide, and the driver must do all of the correction themselves.</p><p>If the stability-control warning light stays on, the system is off and needs diagnosis with a scan tool — starting, as always, with the wheel-speed sensors, the steering angle sensor, and the wiring.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Traction control: brakes the spinning drive wheel and reduces engine power so the car can move on a slippery surface.</li><li>Stability control: compares steering angle with yaw and lateral acceleration; brakes one wheel to correct understeer or oversteer.</li><li>Understeer = car turns less than asked (brake the inside rear wheel). Oversteer = rear slides out (brake the outside front wheel).</li><li>Both systems share ABS parts — one failed wheel-speed sensor can light three warnings.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Thinking a flashing traction-control light means something is broken. A flashing light means the system is working — it is the steady light that means a fault.</div><div class=\"callout\"><strong>Common mistake:</strong> Diagnosing three warning lights as three faults. One failed wheel-speed sensor can turn on the ABS, traction, and stability lights together.</div><p><strong>Ready-to-Work link:</strong> If you can explain understeer and oversteer and which wheel ESC brakes for each, you have this module. Module 7 covers parking brakes.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Traction control",
      "def": "A system that stops a drive wheel spinning on a slippery surface by braking it and reducing engine power."
    },
    {
      "term": "Electronic stability control (ESC)",
      "def": "A system that keeps the car on the driver's intended path by braking individual wheels and reducing engine power."
    },
    {
      "term": "Understeer",
      "def": "A car turning less than the driver asked, plowing straight on in a corner."
    },
    {
      "term": "Oversteer",
      "def": "A car turning more than the driver asked, with the rear sliding out."
    },
    {
      "term": "Yaw sensor",
      "def": "A sensor that measures which way the car is rotating around its vertical axis."
    },
    {
      "term": "Lateral acceleration sensor",
      "def": "A sensor that measures how hard the car is sliding sideways."
    },
    {
      "term": "Steering angle sensor",
      "def": "A sensor that tells the vehicle how far the steering wheel has turned from straight ahead."
    },
    {
      "term": "Wheel-speed sensor",
      "def": "A sensor that measures how fast each wheel is turning."
    },
    {
      "term": "Hydraulic modulator",
      "def": "The ABS unit with solenoid valves that hold, release, or reapply brake pressure at each wheel."
    },
    {
      "term": "ABS",
      "def": "Anti-lock Braking System: keeps wheels rolling during hard braking so the driver can still steer."
    },
    {
      "term": "Flashing light",
      "def": "A warning light that blinks while a system is actively working — a sign it is operating, not broken."
    },
    {
      "term": "Steady light",
      "def": "A warning light that stays on, meaning the system has detected a fault and is off."
    },
    {
      "term": "Drive wheel",
      "def": "A wheel that the engine drives — the one that can spin when traction is lost."
    },
    {
      "term": "Engine power reduction",
      "def": "The control module cutting engine output to stop a wheel spinning or to correct a slide."
    },
    {
      "term": "ESP / VSC",
      "def": "Other makers' names for electronic stability control: Electronic Stability Program / Vehicle Stability Control."
    }
  ],
  "video": {
    "title": "How Electronic Stability Control (ESC) Works",
    "embedUrl": "https://www.youtube.com/embed/MCRLKRluk1w",
    "note": "The IIHS explains electronic stability control: how it compares the driver's intended direction with the car's actual direction, and how it brakes individual wheels and reduces engine power to keep the car on its intended path. Watch for the difference between understeer and oversteer.",
    "more": [
      {
        "title": "How a Car Braking System Works: ABS, Traction & Stability Control Explained",
        "url": "https://www.youtube.com/watch?v=qHf1qo31-aw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A car is starting on ice and one drive wheel is spinning while the other does nothing. How does traction control fix it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Traction control brakes the spinning wheel. Step 2: Braking that wheel sends drive force to the wheel that still has grip, and the system also reduces engine power so there is less force to spin the wheel.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Explain understeer and oversteer in plain words, and say which wheel ESC brakes for each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Understeer is the car turning less than the driver asked, plowing straight on — ESC brakes the inside rear wheel to help rotate the car into the turn. Step 2: Oversteer is the rear sliding out and the car turning more than asked — ESC brakes the outside front wheel to stop the rotation.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A car's ABS light, traction-control light, and stability-control light are all on at once. Is that three separate faults? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Probably not — it is most likely one shared fault. Step 2: All three systems use the same wheel-speed sensors, so one failed sensor can turn on all three lights; the scan tool will show the same sensor code behind them.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Why can traction and stability control brake a wheel even when the driver's foot is not on the brake pedal?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: They use the ABS hydraulic modulator, which has its own pump and valves. Step 2: The pump can build pressure and the valves can send it to one wheel on the module's command, without the driver pressing the pedal.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A traction-control light is flashing while a car accelerates on a wet road. Does that mean the system has failed? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No — a flashing light means the system is actively working. Step 2: It is braking the spinning wheel and cutting power at that moment; a steady light is the one that means a fault.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why might a driver switch traction control off when stuck in deep snow?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: In deep snow a little wheel spin can help the tire dig down to grip. Step 2: With traction control on, the system would keep braking the spinning wheel and cutting power, which can leave the car stuck; switching it off lets the driver use the spin to get out.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Traction control stops a spinning drive wheel by:",
      "choices": [
        "Braking it and reducing engine power",
        "Inflating the tire",
        "Locking the steering",
        "Turning off the engine"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Braking the spinning wheel sends force to the gripping wheel, and less power means less spin. (b) Inflation does not stop a spin. (c) The steering is unrelated. (d) The engine is not turned off."
    },
    {
      "q": "Understeer means the car:",
      "choices": [
        "Turns less than the driver asked, plowing straight on",
        "Turns more than the driver asked",
        "Spins its wheels",
        "Stops suddenly"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Understeer is the front pushing wide in a corner. (b) That is oversteer. (c) Wheel spin is a traction problem. (d) Stopping is a brake matter."
    },
    {
      "q": "Oversteer means the car:",
      "choices": [
        "Turns less than asked",
        "Turns more than asked, with the rear sliding out",
        "Will not start",
        "Pulls to one side when braking"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Oversteer is the rear sliding out so the car rotates too much. (a) That is understeer. (c) Starting is an engine matter. (d) A brake pull is a brake fault."
    },
    {
      "q": "To correct understeer, ESC brakes the:",
      "choices": [
        "Inside rear wheel",
        "Outside front wheel",
        "Inside front wheel",
        "Outside rear wheel"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Braking the inside rear wheel helps rotate the car into the turn. (b) That is the oversteer correction. (c) and (d) are not the understeer correction."
    },
    {
      "q": "To correct oversteer, ESC brakes the:",
      "choices": [
        "Inside rear wheel",
        "Outside front wheel",
        "Both rear wheels",
        "No wheel at all"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Braking the outside front wheel stops the car's rotation. (a) That is the understeer correction. (c) Braking both rears does not stop the rotation. (d) ESC corrects by braking a wheel."
    },
    {
      "q": "Stability control compares the driver's intended direction with the car's actual direction using the:",
      "choices": [
        "Steering angle sensor, yaw sensor, and lateral acceleration sensor",
        "Fuel gauge",
        "Oil pressure sensor",
        "Radio"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Those three sensors tell the system where the driver is pointing and where the car is actually going. (b) Fuel level is irrelevant. (c) Oil pressure is irrelevant. (d) The radio is irrelevant."
    },
    {
      "q": "A flashing traction-control light means the system is:",
      "choices": [
        "Working actively at that moment",
        "Broken",
        "Switched off",
        "Out of fluid"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Flashing means active intervention. (b) A fault gives a steady light. (c) Switched off also gives a steady light. (d) Traction control has no fluid of its own."
    },
    {
      "q": "The ABS, traction-control, and stability-control lights can all come on together from one failed:",
      "choices": [
        "Wheel-speed sensor",
        "Spark plug",
        "Air filter",
        "Wiper blade"
      ],
      "answer": 0,
      "explanation": "Correct: (a). All three systems share the wheel-speed sensors. (b) A spark plug is an engine part. (c) An air filter affects the engine. (d) A wiper blade is unrelated."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Traction &amp; Stability Control: Quick Reference</h3>\n<p><strong>Traction control:</strong> Brakes the spinning drive wheel + reduces engine power so the car can move on slippery surfaces.</p>\n<p><strong>Stability control (ESC):</strong> Compares steering angle with yaw and lateral acceleration; brakes one wheel to correct a slide.</p>\n<p><strong>Understeer</strong> (turns less than asked) → brake the inside rear wheel. <strong>Oversteer</strong> (rear slides out) → brake the outside front wheel.</p>\n<p><strong>Shared parts:</strong> Same wheel-speed sensors and modulator as ABS — one failed sensor can light three warnings.</p>\n<p><strong>Lights:</strong> Flashing = working. Steady = fault.</p>\n<p><strong>Self-check:</strong> Explain understeer and oversteer and which wheel ESC brakes for each.</p>\n"
};
