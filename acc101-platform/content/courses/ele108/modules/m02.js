// ele108 - Module 2: Contactors, Relays & Overloads
module.exports = {
  "number": 2,
  "slug": "contactors-relays-overloads",
  "title": "Contactors, Relays & Overloads",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how a contactor works: coil, armature, and main contacts.",
    "Compare a contactor with a relay and with a motor starter.",
    "Describe normally open (NO) and normally closed (NC) contacts.",
    "Explain how an overload relay works and why it has a time delay.",
    "Describe thermal, magnetic, and electronic overload relays."
  ],
  "sections": [
    {
      "heading": "The Contactor: A Remote-Controlled Switch",
      "html": "<p>A <strong>contactor</strong> is an electrically operated switch built to handle motor current. Inside it is a <strong>coil</strong> — an electromagnet — and a set of <strong>main contacts</strong> that carry the power to the motor. When the control circuit energizes the coil, the magnetic field pulls the <strong>armature</strong> in, and the main contacts close, connecting the motor to the supply. When the coil is de-energized, a spring pulls the armature back and the contacts open. The operator never touches the power conductors — a small control current in the coil switches a large motor current through the contacts.</p>\n<p>Contactors also carry <strong>auxiliary contacts</strong> — small contacts that operate with the main contacts and are used in the control circuit itself, for example to hold the contactor in after the start button is released (Module 4). A contactor is rated by its current and voltage, by its utilization category, and by its mechanical and electrical life. Its contacts are made to break the arc that forms when motor current is interrupted, and they wear with every operation — a contactor that chatters or welds its contacts shut has reached the end of its life.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A contactor lets a small control current switch a large motor current. Coil in, contacts close; coil out, spring opens them.</div>"
    },
    {
      "heading": "Relays, Contactors & Starters: What's the Difference",
      "html": "<p>A <strong>relay</strong> is the same idea as a contactor in a smaller package: a coil operates contacts, but the contacts switch control-level current, not motor current. Relays do logic — they interlock, sequence, and multiply signals — while contactors do the heavy switching. A <strong>control relay</strong> might have four sets of contacts and switch a few amps; a contactor has three main power contacts plus auxiliaries and switches tens or hundreds of amps. The line between them is current rating, not principle.</p>\n<p>A <strong>motor starter</strong> is a contactor plus an <strong>overload relay</strong> in one assembly. The contactor does the switching and the overload relay does the protecting, and together they are the standard way to start a motor. A contactor alone gives you no overload protection — a motor fed through a bare contactor can burn out on a sustained overload without anything tripping. That is why the NEC requires overload protection for motors (Article 430, Part III) and why starters, not bare contactors, are the normal motor control.</p>"
    },
    {
      "heading": "NO and NC Contacts",
      "html": "<p>Every contact is either <strong>normally open (NO)</strong> or <strong>normally closed (NC)</strong>, and \"normal\" means the state when the coil is de-energized — at rest. An NO contact is open at rest and closes when the coil energizes. An NC contact is closed at rest and opens when the coil energizes. The same physical contact block can often be configured either way, and the schematic symbol shows the rest state. Reading a ladder diagram (Module 7) is mostly a matter of tracking which contacts are NO and which are NC, and what each one does when its coil operates.</p>\n<p>Stop buttons use NC contacts and start buttons use NO contacts, and that choice is a safety decision, not an accident. A stop button wired NC means that pressing it opens the circuit and drops the contactor out — and if the stop button's wire breaks, the circuit opens and the motor stops, which is the safe failure. If a stop button were wired NO, a broken wire would leave the motor running with no way to stop it. This principle — design so that a failure stops the machine — is called <strong>fail-safe</strong> design, and it runs through all of motor control.</p>"
    },
    {
      "heading": "Overload Relays: Protection with a Time Delay",
      "html": "<p>An <strong>overload relay</strong> protects the motor against sustained overcurrent — the slow overheating that comes from overloading, low voltage, or a lost phase — while ignoring the brief inrush at start. It does this with a <strong>time delay</strong>: a small overload takes a long time to trip, and a large overload trips quickly, matching the way a motor heats up. The classic <strong>thermal overload</strong> uses bimetallic strips or eutectic alloy heaters that warm up with the motor current and bend or melt to trip the relay. A <strong>magnetic overload</strong> uses the magnetic field of the current, and an <strong>electronic overload</strong> measures the current with a sensor and trips on a programmed curve, often with extra features such as phase-loss and ground-fault detection.</p>\n<p>The overload relay's trip setting comes from the motor's <strong>nameplate full-load amps (FLA)</strong>, not from the conductor size or the breaker size. For a motor with a service factor of 1.15 or more, the overload is set at 125% of FLA; for a service factor below 1.15, it is set at 115% of FLA (NEC 430.32). The overload relay's own NC contact sits in the control circuit in series with the contactor coil, so when it trips it drops the contactor out and stops the motor. After a trip, the overload must be reset — and the cause of the overload found — before the motor is restarted.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Setting the overload from the breaker size or the conductor size instead of the nameplate FLA. The overload protects the motor, and only the nameplate FLA tells you what the motor can carry.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>A contactor is a coil-operated switch for motor current; a relay is the same idea for control current; a starter is a contactor plus an overload relay.</li>\n<li>NO contacts are open at rest and close when the coil energizes; NC contacts are closed at rest and open when the coil energizes.</li>\n<li>Stop buttons use NC contacts so a broken wire stops the machine — fail-safe design.</li>\n<li>The overload relay protects against sustained overcurrent with a time delay that matches motor heating; it ignores the brief starting inrush.</li>\n<li>Overload setting comes from nameplate FLA: 125% for SF 1.15 or higher, 115% for lower SF (NEC 430.32).</li>\n<li>Thermal overloads use heaters and bimetal; electronic overloads measure current and can add phase-loss protection.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Using a bare contactor with no overload relay and calling it a starter. A contactor switches; only the overload relay protects. The two together are the starter.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain the contactor, the difference between a relay and a starter, and how to set an overload from the FLA, you have this module. Module 3 covers control transformers and pilot devices.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Contactor", "def": "An electrically operated switch that carries motor current; a coil pulls the main contacts closed." },
    { "term": "Coil", "def": "The electromagnet in a contactor or relay that moves the contacts when energized." },
    { "term": "Armature", "def": "The moving iron part of a contactor that the coil pulls in to close the contacts." },
    { "term": "Main contacts", "def": "The heavy contacts of a contactor that carry the motor current." },
    { "term": "Auxiliary contacts", "def": "Small contacts on a contactor or relay used in the control circuit." },
    { "term": "Relay", "def": "A coil-operated switch for control-level current; used for logic, interlocking, and sequencing." },
    { "term": "Motor starter", "def": "A contactor plus an overload relay in one assembly." },
    { "term": "Normally open (NO)", "def": "A contact that is open at rest and closes when its coil energizes." },
    { "term": "Normally closed (NC)", "def": "A contact that is closed at rest and opens when its coil energizes." },
    { "term": "Overload relay", "def": "A device that trips on sustained overcurrent, with a time delay that matches motor heating." },
    { "term": "Thermal overload", "def": "An overload relay that uses heaters and a bimetal strip to sense overcurrent." },
    { "term": "Electronic overload", "def": "An overload relay that measures current electronically and trips on a programmed curve." },
    { "term": "Fail-safe", "def": "Designed so that a failure (such as a broken wire) stops the machine rather than leaving it running." },
    { "term": "Time delay", "def": "The overload relay's built-in delay that lets starting inrush pass but trips on sustained overload." },
    { "term": "Heater", "def": "The current-sensing element in a thermal overload relay, sized to the motor's FLA." }
  ],
  "video": {
    "title": "What is a Contactor and How Does it Work?",
    "embedUrl": "https://www.youtube.com/embed/F2yL2Cs2nHc",
    "note": "A clear look inside a contactor — the coil, the armature, and the main contacts — and how a small control current switches a large motor current.",
    "more": [
      { "title": "Wiring an Electrical Contactor and Overload - What they are and how they work", "url": "https://www.youtube.com/watch?v=e3EVLOMfHMI" },
      { "title": "What is an Overload Relay? Connection & Working Principle", "url": "https://www.youtube.com/watch?v=3aur1tZYlKE" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A contactor's coil is energized but the motor does not run. List three things to check, in order.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check that the main contacts are actually closed and carrying voltage to the motor — measure voltage at the motor terminals. Step 2: Check the overload relay — it may have tripped and opened the control circuit. Step 3: Check the power supply fuses or breaker ahead of the contactor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A motor has a nameplate FLA of 14 A and a service factor of 1.15. What is the overload relay setting per NEC 430.32?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Service factor 1.15 or higher means 125% of FLA. Step 2: 14 × 1.25 = 17.5 A. Step 3: Set the overload at 17.5 A.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> The same motor has a service factor of 1.0. What is the overload setting now?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Service factor below 1.15 means 115% of FLA. Step 2: 14 × 1.15 = 16.1 A. Step 3: Set the overload at 16.1 A — lower than the 1.15 SF case, because the motor has less thermal margin.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Why is a stop button wired with a normally closed contact instead of a normally open one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: An NC stop button opens the circuit when pressed, dropping the contactor out. Step 2: If the stop button's wire breaks, the circuit opens and the motor stops — the safe failure. Step 3: With an NO stop button, a broken wire would leave the motor running with no way to stop it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A motor starts and runs for 30 seconds, then the overload trips. The starting current is normal. What is the most likely cause?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The overload's time delay let the starting inrush pass, so the trip is from sustained overcurrent. Step 2: Check the running current against the FLA — the motor is likely overloaded, jammed, or running on low voltage. Step 3: Find and fix the cause before resetting; do not just turn the overload setting up.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A contactor chatters loudly when energized and its contacts show pitting. What is happening, and what should you do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Chattering usually means the coil voltage is low or the coil is failing, so the armature cannot pull in firmly. Step 2: Pitting comes from the contacts opening and closing under load. Step 3: Check the control voltage first; if it is correct, replace the contactor — chattering contacts will weld or burn out.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A contactor's main contacts are closed by:",
      "choices": ["A spring", "The magnetic pull of the energized coil on the armature", "The operator's hand", "The overload relay"],
      "answer": 1,
      "explanation": "Correct: (b). The coil pulls the armature in and closes the contacts. (a) The spring opens the contacts when the coil drops out. (c) The operator touches only the control devices. (d) The overload relay trips the control circuit, it does not close the contacts."
    },
    {
      "q": "A motor starter is:",
      "choices": ["A contactor alone", "A contactor plus an overload relay", "An overload relay alone", "A push button station"],
      "answer": 1,
      "explanation": "Correct: (b). Contactor plus overload relay. (a) A contactor alone has no overload protection. (c) An overload relay alone cannot switch the motor. (d) A push button station is a control device, not a starter."
    },
    {
      "q": "A normally closed (NC) contact is:",
      "choices": ["Open at rest and closes when the coil energizes", "Closed at rest and opens when the coil energizes", "Always open", "Always closed"],
      "answer": 1,
      "explanation": "Correct: (b). NC means closed at rest, opening on energize. (a) That is an NO contact. (c) and (d) describe a contact that never changes state, which is not a relay contact."
    },
    {
      "q": "Stop buttons use NC contacts so that:",
      "choices": ["The motor starts faster", "A broken wire stops the machine — fail-safe design", "The button is cheaper", "The contactor coil gets more voltage"],
      "answer": 1,
      "explanation": "Correct: (b). An open circuit drops the contactor out. (a) Stop buttons do not affect starting speed. (c) Cost is not the reason. (d) The coil voltage is set by the control transformer."
    },
    {
      "q": "An overload relay has a time delay so that it:",
      "choices": ["Trips instantly on starting inrush", "Ignores the brief starting inrush but trips on sustained overcurrent", "Delays the motor from starting", "Makes the motor run slower"],
      "answer": 1,
      "explanation": "Correct: (b). The delay matches motor heating. (a) Tripping on inrush would make the motor unstartable. (c) The overload does not delay starting. (d) The overload does not change motor speed."
    },
    {
      "q": "A motor with FLA 20 A and service factor 1.15 has an overload setting of:",
      "choices": ["20 A", "23 A", "25 A", "30 A"],
      "answer": 2,
      "explanation": "Correct: (c). 20 × 1.25 = 25 A. (a) 20 A is the FLA itself. (b) 23 A is 115%, the setting for SF below 1.15. (d) 30 A is 150%, too high."
    },
    {
      "q": "The overload relay's NC contact is wired:",
      "choices": ["In the power circuit to the motor", "In the control circuit in series with the contactor coil", "Across the motor terminals", "In parallel with the start button"],
      "answer": 1,
      "explanation": "Correct: (b). When it trips it opens the control circuit and drops the contactor out. (a) The overload's heaters are in the power circuit, but its contact is in the control circuit. (c) Nothing is wired across the motor terminals. (d) Parallel with the start button would bypass the overload."
    },
    {
      "q": "A relay differs from a contactor mainly in that it:",
      "choices": ["Has no coil", "Switches control-level current rather than motor current", "Cannot have NC contacts", "Is always larger"],
      "answer": 1,
      "explanation": "Correct: (b). Relays do logic at control current; contactors switch motor current. (a) Relays have coils. (c) Relays can have NC contacts. (d) Relays are smaller than contactors."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Contactors, Relays &amp; Overloads: Quick Reference</h3>\n<p><strong>Core idea:</strong> A contactor lets a small coil current switch a large motor current. A starter is a contactor plus an overload relay.</p>\n<p><strong>Contacts:</strong> NO — open at rest, closes on energize · NC — closed at rest, opens on energize. Stop buttons use NC (fail-safe).</p>\n<p><strong>Overload relay:</strong> Trips on sustained overcurrent with a time delay that ignores starting inrush. Thermal (heaters + bimetal) or electronic (measured current).</p>\n<p><strong>Setting (NEC 430.32):</strong> 125% of FLA for SF ≥ 1.15 · 115% of FLA for SF &lt; 1.15. Set from the nameplate FLA, never from the breaker size.</p>\n<p><strong>Self-check:</strong> Explain the contactor, the NO/NC difference, and the overload setting rule. If you can, you have this module.</p>\n"
};
