// egr105 - Module 12: Motor Control, Starting & Safety
module.exports = {
  "number": 12,
  "slug": "motor-control-starting-safety",
  "title": "Motor Control, Starting & Safety",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why motors draw a large starting current and how starters limit it.",
    "Tell a contactor, an overload relay, and a starter apart.",
    "Read a basic motor control diagram: start/stop buttons, seal-in contact, overload.",
    "Explain why motors need overload protection and how it differs from a breaker.",
    "State the lockout/tagout and safe-meter rules for motor work."
  ],
  "sections": [
    {
      "heading": "Starting Current: The Inrush Problem",
      "html": "<p>Every motor draws far more current at starting than at running. A DC motor at standstill has no back EMF, so it draws V ÷ R. An induction motor at standstill has maximum slip, so it draws 5–7 times its full-load current — a 10 A motor can draw 60 A for the first second. That inrush can trip breakers, dim lights, and sag the voltage for everything else on the circuit. Large motors therefore use starters that limit the inrush: a soft starter ramps the voltage up gradually, a star-delta starter starts the motor in star (lower voltage per winding) and switches to delta once it is turning, and a VFD ramps both frequency and voltage.</p>\n<p>Direct-on-line (DOL) starting — just switching the full voltage on — is fine for small motors, but for a big motor it is a hammer blow to the supply and the mechanics. Size the starter to the motor, and check the starting current, not just the running current.</p>\n"
    },
    {
      "heading": "Contactors, Overloads, and Starters",
      "html": "<p>A contactor is a heavy-duty relay: a small control voltage energises a coil, which pulls in contacts that switch the big motor current. It lets a small push-button control a large motor from a safe distance. An overload relay sits in series with the motor and trips the contactor if the motor draws too much current for too long — it protects the motor from overheating when it is overloaded or single-phasing. A starter is the package: contactor plus overload relay, in one enclosure.</p>\n<p>Overload protection is not the same as a breaker. A breaker protects the wiring from a short circuit — it trips fast on a huge current. An overload relay protects the motor from a sustained moderate overcurrent — it trips slowly, because a motor is allowed to draw extra current briefly while starting. A motor circuit needs both: the breaker for the short circuit, the overload for the slow cook.</p>\n"
    },
    {
      "heading": "The Start/Stop Circuit and Seal-In",
      "html": "<p>The standard motor control circuit uses a normally-open start button, a normally-closed stop button, and a seal-in (holding) contact. Press start: the contactor coil energises, the main contacts close and the motor runs, and an auxiliary contact closes in parallel with the start button — sealing the coil in. Release the start button and the motor keeps running, because the seal-in contact is now carrying the coil current. Press stop: the coil drops out, the contacts open, and the motor stops. If the power fails, the coil drops out and the motor does not restart on its own when the power returns — a safety feature called no-volt release, so a motor does not suddenly start while someone is working on it.</p>\n<p>That circuit is the foundation of industrial control: add a second start button for a remote station, add a limit switch in series with the stop, add an overload contact in series with the coil, and you have a real machine control panel.</p>\n"
    },
    {
      "heading": "Motor Safety: Lockout/Tagout and Safe Metering",
      "html": "<p>Motor work is electrical work, and the rules from egr104 Module 11 apply in full. Before touching a motor, its starter, or its wiring: identify the supply, open the disconnect, lock it out and tag it with your name and the date, and test for absence of voltage with a meter you have just proven on a known live source — live-dead-live. Remember that a motor can be back-fed: a spinning motor acts as a generator, and a second source (a VFD, a generator, or another motor) can energise the circuit from the load side. Test every conductor, not just the one you think is live.</p>\n<p>Safe meter practice: use a CAT III or CAT IV rated meter for panel and motor work, keep your fingers behind the probe guards, use one hand when you can, and never measure current by putting a meter in parallel across a live circuit — a current measurement is a series measurement, and a meter set to amps across a voltage source is a short circuit. If a motor or drive is humming, hot, or smelling of burnt insulation, stop and investigate — do not just reset the overload and walk away. An overload that keeps tripping is a symptom, not a nuisance.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Motors draw 5–7 times their full-load current at starting; starters (soft starter, star-delta, VFD) limit the inrush.</li><li>A contactor switches the motor current; an overload relay protects the motor from sustained overcurrent; a starter is both together.</li><li>The start/stop circuit uses a seal-in contact so the motor keeps running after you release start, and a no-volt release so it does not restart after a power failure.</li><li>A breaker protects the wiring from short circuits; an overload protects the motor from a slow overheat. A motor circuit needs both.</li><li>Lock out, tag out, and test for absence of voltage (live-dead-live) before touching motor wiring; a spinning motor can back-feed voltage.</li></ul></p>\n<p><strong>Common mistake:</strong> Resetting a tripped overload without finding the cause. The overload tripped because the motor was overloaded, single-phasing, or jammed — resetting it just lets it cook again.</p>\n<p><strong>Common mistake:</strong> Thinking a breaker protects the motor. It protects the wiring. The overload relay is the motor's protection, and it trips slowly on purpose, because starting current is normal.</p>\n<p><strong>Ready check:</strong> If you can explain what a seal-in contact does, why a motor needs both a breaker and an overload, and what live-dead-live means, you have this module — and this course.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Starting current (inrush)",
      "def": "The large current a motor draws at starting: 5–7 times full-load current for an induction motor."
    },
    {
      "term": "Soft starter",
      "def": "A device that ramps a motor's voltage up gradually to limit starting current."
    },
    {
      "term": "Star-delta starter",
      "def": "A starter that starts a motor in star (lower voltage) and switches to delta once it is turning."
    },
    {
      "term": "Direct-on-line (DOL)",
      "def": "Starting a motor by switching the full supply voltage straight on."
    },
    {
      "term": "Contactor",
      "def": "A heavy-duty relay that switches motor current from a small control signal."
    },
    {
      "term": "Overload relay",
      "def": "A device that trips the contactor if a motor draws too much current for too long, protecting it from overheating."
    },
    {
      "term": "Starter",
      "def": "A contactor plus an overload relay in one package."
    },
    {
      "term": "Seal-in contact",
      "def": "An auxiliary contact in parallel with the start button that holds the contactor coil energised after the button is released."
    },
    {
      "term": "No-volt release",
      "def": "The feature that stops a motor restarting by itself after a power failure."
    },
    {
      "term": "Live-dead-live",
      "def": "Proving a meter on a known live source, testing the circuit dead, then proving the meter again."
    },
    {
      "term": "Back-feed",
      "def": "Voltage appearing in a circuit from the load side, e.g. from a spinning motor acting as a generator."
    },
    {
      "term": "CAT rating",
      "def": "A meter's safety rating for the environment it is used in; CAT III/IV is required for panel and motor work."
    }
  ],
  "video": {
    "title": "The Motor That Never Catches Up | Induction Motor Explained in 3D | Zengineer",
    "embedUrl": "https://www.youtube.com/embed/wZITqKJw-Iw",
    "note": "A clear 3D look at how an induction motor works — and the control and starting ideas this module builds on.",
    "more": [
      {
        "title": "LOTO/LOTOV: Step-by-Step Energy Isolation Procedure | Lockout Tagout Safety | HSE Insights",
        "url": "https://www.youtube.com/watch?v=Nx51f0VfAOM"
      },
      {
        "title": "Lockout or Tagout | OSHA",
        "url": "https://www.youtube.com/watch?v=YYgWPehtZNA"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 10 A induction motor draws about 6 times its full-load current at starting. What is the starting current, and why does it matter?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Starting current ≈ 6 × 10 = 60 A. Step 2: It matters because 60 A can trip the breaker, dim the lights, and sag the voltage for other equipment — which is why large motors use starters to limit the inrush.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A motor keeps tripping its overload relay but the breaker never trips. Explain what is happening and what the two devices each protect.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The overload relay trips on a sustained moderate overcurrent — the motor is overloaded, jammed, or single-phasing and overheating slowly. Step 2: The breaker only trips on a huge current (a short circuit), so it never sees a problem. Step 3: The breaker protects the wiring from short circuits; the overload protects the motor from a slow overheat. Step 4: Find and fix the overload — do not just keep resetting it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Explain the seal-in contact in a start/stop circuit: what it does, and what happens when you press stop.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Pressing start energises the contactor coil, which closes the main contacts and also an auxiliary seal-in contact wired in parallel with the start button. Step 2: Releasing start does not stop the motor, because the seal-in contact now carries the coil current. Step 3: Pressing stop (a normally-closed button) breaks the coil circuit, the contactor drops out, the seal-in opens, and the motor stops.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> The power fails while a motor is running, then comes back. Why does the motor not restart by itself, and why is that a good thing?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: When the power fails, the contactor coil drops out and the seal-in contact opens. Step 2: When power returns, the coil has no path — the start button is open and the seal-in is open — so the motor stays off until someone presses start. Step 3: This no-volt release is a safety feature: a motor that restarts unexpectedly could injure someone working on it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A technician is about to work on a motor starter. List the lockout/tagout and testing steps in order.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Identify the supply and open the disconnect. Step 2: Lock it out and tag it with your name and the date. Step 3: Prove your meter on a known live source. Step 4: Test every conductor for absence of voltage. Step 5: Prove the meter again on the known live source (live-dead-live). Step 6: Only then touch the wiring — and remember a spinning motor can back-feed voltage, so check the load side too.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A large motor is started direct-on-line and the lights in the building dim badly every time. Name two better starting methods and explain briefly how each helps.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A soft starter ramps the voltage up gradually, so the starting current rises slowly instead of hitting 5–7 times full load at once. Step 2: A star-delta starter starts the motor in star, giving each winding only 1 ÷ √3 of the line voltage, then switches to delta once the motor is turning. Step 3: A VFD is a third option: it ramps both frequency and voltage from zero, giving the smoothest start of all.</p>"
    }
  ],
  "quiz": [
    {
      "q": "An induction motor's full-load current is 10 A. About how much current does it draw at starting?",
      "choices": [
        "10 A",
        "60 A",
        "2 A",
        "100 A"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Starting current is typically 5–7 times full-load, so about 60 A. (a) 10 A is the running current. (c) 2 A is far too low. (d) 100 A is 10 times — too high."
    },
    {
      "q": "What does an overload relay protect?",
      "choices": [
        "The wiring from short circuits",
        "The motor from sustained overcurrent and overheating",
        "The supply from lightning",
        "The operator from shock"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The overload trips the contactor when the motor draws too much current for too long. (a) is the breaker's job. (c) is a surge protector's job. (d) is a GFCI's job."
    },
    {
      "q": "What does the seal-in contact do in a start/stop circuit?",
      "choices": [
        "It stops the motor",
        "It holds the contactor coil energised after the start button is released",
        "It limits the starting current",
        "It protects the motor from overload"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The seal-in contact is wired in parallel with the start button and keeps the coil on. (a) is the stop button's job. (c) is a starter's job. (d) is the overload relay's job."
    },
    {
      "q": "Why does a motor not restart by itself after a power failure?",
      "choices": [
        "The breaker trips",
        "The seal-in contact opened when the coil dropped out, so there is no path for the coil current (no-volt release)",
        "The overload relay locks it out",
        "The motor is damaged"
      ],
      "answer": 1,
      "explanation": "Correct: (b). When power fails, the coil drops out and the seal-in opens; on restoration, nothing re-energises the coil until start is pressed. (a) is wrong: the breaker does not trip on a power failure. (c) is wrong: the overload does not lock out. (d) is wrong: the motor is fine."
    },
    {
      "q": "What is the difference between a breaker and an overload relay?",
      "choices": [
        "There is no difference",
        "A breaker protects the wiring from short circuits (fast, huge current); an overload protects the motor from sustained moderate overcurrent (slow)",
        "A breaker protects the motor; an overload protects the wiring",
        "A breaker is slower than an overload"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The breaker is fast protection for the wiring against short circuits; the overload is slow protection for the motor against overheating. (a) is wrong: they are different devices. (c) swaps them. (d) is backwards: the breaker is the fast one."
    },
    {
      "q": "What does live-dead-live mean?",
      "choices": [
        "Test the circuit three times",
        "Prove the meter on a known live source, test the circuit dead, then prove the meter again",
        "Turn the power on, off, and on again",
        "Test with the meter on AC, then DC"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Live-dead-live proves the meter works before and after the test, so a dead reading is trustworthy. (a) is vague and wrong. (c) is wrong: you do not cycle the power. (d) is wrong: it is about proving the meter, not the meter's range."
    },
    {
      "q": "How does a star-delta starter reduce starting current?",
      "choices": [
        "It starts the motor in star, giving each winding only 1 ÷ √3 of the line voltage, then switches to delta",
        "It adds a resistor in series",
        "It lowers the supply frequency",
        "It disconnects one phase"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Star connection gives each winding the phase voltage (line ÷ √3), so the starting current is lower; once turning, it switches to delta for full power. (b) describes a resistance starter, not star-delta. (c) describes a VFD. (d) would single-phase the motor — dangerous."
    },
    {
      "q": "Why should you never just keep resetting a tripped overload?",
      "choices": [
        "Because the overload will break",
        "Because the overload tripped for a reason — an overloaded, jammed, or single-phasing motor — and resetting it lets it cook again",
        "Because the breaker will trip instead",
        "Because the motor will run faster"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A tripped overload is a symptom; find and fix the cause. (a) is wrong: the overload is designed to be reset. (c) is wrong: the breaker is a different device. (d) is wrong: the motor will not run faster."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Motor Control, Starting & Safety: Quick Reference</h3>\n<p><strong>Core idea:</strong> Motors draw 5–7× full-load current at starting. A contactor switches the motor, an overload protects it, a breaker protects the wiring.</p>\n<p><strong>Key terms:</strong> Starting current · Contactor · Overload relay · Seal-in · LOTO.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Starting current is 5–7× full-load current.</li>\n<li>Breaker = wiring, short circuit, fast. Overload = motor, slow overheat.</li>\n<li>Seal-in holds the coil on; no-volt release stops auto-restart.</li>\n<li>Lock out, tag out, test live-dead-live.</li></ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
