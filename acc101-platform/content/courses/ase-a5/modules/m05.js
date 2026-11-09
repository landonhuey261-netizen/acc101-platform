// ase-a5 - Module 5: ABS
module.exports = {
  "number": 5,
  "slug": "abs",
  "title": "ABS",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why a locked wheel cannot steer and why that makes ABS a steering aid, not just a braking aid.",
    "Name the ABS parts: wheel-speed sensors, control module, hydraulic modulator, and pump.",
    "Describe the ABS cycle: hold, release, reapply — many times per second.",
    "Explain what the driver feels and hears when ABS activates, and what to do.",
    "List the symptoms of an ABS fault and the first checks."
  ],
  "sections": [
    {
      "heading": "Why Wheels Must Keep Rolling",
      "html": "<p>When a wheel locks up under hard braking, it stops turning and starts sliding. A sliding tire has less grip than a rolling tire, and — more importantly — it cannot steer: a locked front wheel goes straight no matter where the driver points the steering wheel. That is why a locked wheel is dangerous in an emergency stop: the car cannot be steered around the obstacle while it is sliding.</p><p><strong>ABS (Anti-lock Braking System)</strong> exists to keep the wheels rolling during a hard stop, so the driver keeps steering control. It does not make the car stop shorter on every surface — on loose gravel or deep snow a locked wheel can dig in and stop shorter — but it keeps the car steerable, and on most roads that is what avoids the crash.</p>"
    },
    {
      "heading": "The Parts",
      "html": "<p>ABS has four main parts. <strong>Wheel-speed sensors</strong> at each wheel report how fast that wheel is turning. The <strong>control module</strong> (the ABS computer) compares the wheel speeds and works out whether a wheel is about to lock. The <strong>hydraulic modulator</strong> has solenoid valves that can hold, release, or reapply pressure to each wheel's brake. And a <strong>pump</strong> in the modulator pushes fluid back toward the master cylinder when pressure has been released.</p><p>The system watches constantly while the car drives, but it only acts when the driver is braking hard enough for a wheel to be about to lock.</p>"
    },
    {
      "heading": "The ABS Cycle",
      "html": "<p>When the module sees a wheel slowing far faster than the others — about to lock — it acts in a rapid cycle: <strong>hold</strong> the pressure to that wheel so it stops rising, <strong>release</strong> the pressure so the wheel can speed up and roll again, then <strong>reapply</strong> the pressure as the wheel regains grip. It repeats that cycle many times per second, independently at each wheel, for as long as the driver holds the pedal down.</p><p>The result is a wheel that is always on the edge of locking but never quite locks — maximum braking with steering still working. The driver feels it as a rapid <strong>pulsing in the brake pedal</strong>, often with a grinding or buzzing noise from the modulator. That pulsing is the system working, not a fault.</p>"
    },
    {
      "heading": "What the Driver Should Do",
      "html": "<p>When ABS activates, the driver should <strong>keep the pedal pressed firmly</strong> and steer around the obstacle. The natural reaction — lifting off the pedal because it is pulsing — is the worst thing to do: it stops the ABS from working and lengthens the stop. The pedal pulsing, the noise, and the vibration are all normal during an ABS stop, and the system is designed to be felt.</p><p>If the <strong>ABS warning light</strong> stays on, the ABS is off — but the normal brakes still work. The car can be driven to a repair, gently, with the understanding that a hard stop may now lock a wheel. The fault is found with a scan tool, which reads the ABS codes: a common cause is a failed wheel-speed sensor or damaged wiring to it.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>A locked wheel cannot steer — ABS keeps wheels rolling so the driver keeps steering control.</li><li>Parts: wheel-speed sensors, control module, hydraulic modulator with valves, pump.</li><li>Cycle: hold, release, reapply — many times per second, independently at each wheel.</li><li>ABS activation feels like a pulsing pedal with a grinding or buzzing noise. Keep the pedal down and steer.</li><li>ABS light on = ABS off, normal brakes still work. Diagnose with a scan tool.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Lifting off the brake pedal when it starts pulsing. The pulsing is ABS working — lifting off stops it working and lengthens the stop.</div><div class=\"callout\"><strong>Common mistake:</strong> Thinking the ABS light means the brakes have failed. The light means ABS is off; the normal hydraulic brakes still work, and the car can be driven gently to a repair.</div><p><strong>Ready-to-Work link:</strong> If you can explain the hold-release-reapply cycle and what a driver should do when the pedal pulses, you have this module. Module 6 covers traction and stability control.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "ABS",
      "def": "Anti-lock Braking System: keeps wheels rolling during hard braking so the driver can still steer."
    },
    {
      "term": "Wheel-speed sensor",
      "def": "A sensor that measures how fast each wheel is turning."
    },
    {
      "term": "Control module",
      "def": "The ABS computer that compares wheel speeds and commands the modulator."
    },
    {
      "term": "Hydraulic modulator",
      "def": "The ABS unit with solenoid valves that hold, release, or reapply brake pressure at each wheel."
    },
    {
      "term": "Solenoid valve",
      "def": "An electrically operated valve in the ABS modulator that controls brake pressure."
    },
    {
      "term": "Pump",
      "def": "A pump in the ABS modulator that pushes fluid back toward the master cylinder."
    },
    {
      "term": "Lock-up",
      "def": "A wheel stopping turning and sliding instead of rolling."
    },
    {
      "term": "Hold",
      "def": "The ABS phase where pressure to a wheel is held steady."
    },
    {
      "term": "Release",
      "def": "The ABS phase where pressure to a wheel is released so it can roll again."
    },
    {
      "term": "Reapply",
      "def": "The ABS phase where pressure to a wheel is applied again after it regains grip."
    },
    {
      "term": "ABS warning light",
      "def": "A dash light that shows the ABS has detected a fault and is off."
    },
    {
      "term": "Pulsing pedal",
      "def": "The rapid vibration felt in the brake pedal while ABS is working."
    },
    {
      "term": "Tone ring",
      "def": "A toothed ring on a wheel hub or axle that the wheel-speed sensor reads."
    },
    {
      "term": "Steering control",
      "def": "The driver's ability to steer the car, which ABS preserves during a hard stop."
    },
    {
      "term": "Scan tool",
      "def": "A diagnostic tool that reads fault codes and live data from a vehicle's computers."
    }
  ],
  "video": {
    "title": "Anti-lock Braking System: What is ABS? Working of ABS",
    "embedUrl": "https://www.youtube.com/embed/w5Tj5Xot3AA",
    "note": "An explanation of anti-lock braking: what ABS is, how it prevents wheel lock-up, and how it differs between bikes and cars. Watch for the core idea — a rolling tire steers, a locked tire slides.",
    "more": [
      {
        "title": "The Technology Behind ABS",
        "url": "https://www.youtube.com/shorts/wzggq6mlE4Q"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Why is a locked front wheel dangerous in an emergency stop, even if the car is slowing down?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A locked wheel is sliding, not rolling, and a sliding tire cannot steer. Step 2: The car goes straight no matter where the driver points the wheel, so it cannot be steered around the obstacle while the wheels are locked.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Describe the ABS cycle in order, and say what each step does.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Hold — pressure to the wheel is held steady so it stops rising. Step 2: Release — pressure is released so the wheel can speed up and roll again. Step 3: Reapply — pressure is applied again as the wheel regains grip. The cycle repeats many times per second at each wheel independently.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A driver is in a hard stop, the pedal is pulsing, and there is a grinding noise. What should the driver do, and what should they not do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Keep the pedal pressed firmly and steer around the obstacle — the pulsing and noise are ABS working. Step 2: Do not lift off the pedal, because that stops the ABS working and lengthens the stop.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> The ABS warning light is on. Can the car still be driven, and what has changed?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Yes — the normal hydraulic brakes still work, so the car can be driven gently to a repair. Step 2: What has changed is that ABS is off, so a hard stop may now lock a wheel and the driver will lose steering in that stop.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Name the four main ABS parts and say what each one does.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Wheel-speed sensors report each wheel's speed; the control module compares them and decides if a wheel is about to lock. Step 2: The hydraulic modulator's valves hold, release, or reapply pressure at each wheel, and the pump pushes released fluid back toward the master cylinder.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A scan tool shows an ABS code for the right front wheel-speed sensor. What is the first physical check?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check the sensor and its wiring on the right front wheel — the connector, the wiring for damage, and the sensor's mounting. Step 2: A damaged wire or a sensor knocked out of position is a common cause, and it is cheaper than the modulator or the module.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The main purpose of ABS is to:",
      "choices": [
        "Shorten every stop",
        "Keep the wheels rolling during a hard stop so the driver can still steer",
        "Make the brakes quieter",
        "Save fuel"
      ],
      "answer": 1,
      "explanation": "Correct: (b). ABS preserves steering control by preventing lock-up. (a) ABS does not shorten every stop — on loose surfaces a locked wheel can stop shorter. (c) Noise is not the purpose. (d) Fuel is unrelated."
    },
    {
      "q": "A locked wheel cannot steer because:",
      "choices": [
        "It is sliding, not rolling",
        "The steering wheel locks",
        "The engine stops",
        "The tires are flat"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A sliding tire has no directional grip. (b) The steering wheel does not lock. (c) The engine keeps running. (d) The tires are not flat."
    },
    {
      "q": "The ABS cycle repeats, in order:",
      "choices": [
        "Hold, release, reapply",
        "Release, hold, reapply",
        "Reapply, release, hold",
        "Hold, reapply, release"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Hold the pressure, release it so the wheel rolls, reapply it as grip returns. (b), (c), and (d) are the wrong order."
    },
    {
      "q": "When ABS is working, the driver feels:",
      "choices": [
        "A pulsing brake pedal, often with a grinding or buzzing noise",
        "Nothing at all",
        "The steering wheel lock",
        "The car accelerate"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The pulsing is the modulator cycling pressure. (b) ABS is designed to be felt. (c) The steering wheel does not lock. (d) The car does not accelerate."
    },
    {
      "q": "When the pedal pulses during an ABS stop, the driver should:",
      "choices": [
        "Keep the pedal pressed firmly and steer",
        "Lift off the pedal immediately",
        "Pump the pedal rapidly",
        "Turn off the engine"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Keeping the pedal down lets ABS keep working. (b) Lifting off stops ABS and lengthens the stop. (c) Pumping fights the system. (d) Turning off the engine removes power steering and brakes."
    },
    {
      "q": "If the ABS warning light stays on, it means:",
      "choices": [
        "The brakes have failed completely",
        "ABS is off, but the normal brakes still work",
        "The car cannot be driven at all",
        "The tires are flat"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The light means ABS is disabled; the hydraulics still work. (a) The normal brakes still work. (c) The car can be driven gently to a repair. (d) Tires have their own warning."
    },
    {
      "q": "The ABS control module decides a wheel is about to lock by:",
      "choices": [
        "Comparing the wheel speeds with each other",
        "Measuring the fuel level",
        "Listening to the engine",
        "Checking the tire pressure"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A wheel slowing far faster than the others is about to lock. (b) Fuel level is irrelevant. (c) The module reads sensors, not sound. (d) Tire pressure is a TPMS matter."
    },
    {
      "q": "A common cause of an ABS fault code is a failed:",
      "choices": [
        "Wheel-speed sensor or damaged wiring to it",
        "Spark plug",
        "Air filter",
        "Wiper blade"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Wheel-speed sensors live in a harsh place and their wiring is easily damaged. (b) A spark plug is an engine part. (c) An air filter affects the engine. (d) A wiper blade is unrelated."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — ABS: Quick Reference</h3>\n<p><strong>Why:</strong> A locked wheel cannot steer. ABS keeps wheels rolling so the driver keeps steering control in a hard stop.</p>\n<p><strong>Parts:</strong> Wheel-speed sensors → control module → hydraulic modulator (valves) → pump.</p>\n<p><strong>Cycle:</strong> Hold → release → reapply, many times per second, independently at each wheel.</p>\n<p><strong>Driver:</strong> Keep the pedal pressed firmly and steer. The pulsing pedal and grinding noise are normal.</p>\n<p><strong>Light on:</strong> ABS is off, normal brakes still work. Diagnose with a scan tool — check the wheel-speed sensors first.</p>\n<p><strong>Self-check:</strong> Explain the hold-release-reapply cycle and what a driver should do when the pedal pulses.</p>\n"
};
