// ase-a6 - Module 3: Starting Systems
module.exports = {
  "number": 3,
  "slug": "starting-systems",
  "title": "Starting Systems",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what the starting system does and name its parts.",
    "Describe how the starter motor turns the engine over.",
    "Explain what the starter solenoid does and how it works.",
    "Describe the ignition switch, safety switches, and relay in the starting circuit.",
    "Diagnose starting faults: no crank, slow crank, and clicking."
  ],
  "sections": [
    {
      "heading": "What the Starting System Does",
      "html": "<p>The starting system's only job is to turn the engine over fast enough for it to start — to spin the crankshaft until the engine can run on its own. It does that job for a few seconds at a time, and it draws the largest current of any circuit in the car while it does it. The parts are few: the battery, the ignition switch (or start button), a relay, the starter solenoid, and the starter motor itself, plus the heavy cables that carry the current and the safety switches that stop the car from starting in gear.</p>\n<p>The sequence is simple. The driver turns the key or presses the button. A small current flows through the ignition switch to the starter relay, which closes and sends current to the starter solenoid. The solenoid does two things at once: it pushes the starter's drive gear into the engine's flywheel, and it closes a heavy switch that connects the battery directly to the starter motor. The motor spins, the gear turns the flywheel, the engine cranks — and when the engine starts, the solenoid pulls the gear back out so the starter is not spun by the running engine.</p>"
    },
    {
      "heading": "The Starter Motor and the Solenoid",
      "html": "<p>The <strong>starter motor</strong> is a powerful electric motor built for short, hard work. It turns electrical energy into spinning motion, and it is geared down — the small gear on the starter turns the large ring gear on the flywheel — so the motor's fast spin becomes the strong, slower turn the engine needs. The motor's drive gear is on a one-way clutch, so once the engine starts and spins faster than the starter, the gear freewheels instead of being driven backward by the engine.</p>\n<p>The <strong>solenoid</strong> is the starter's gatekeeper. It is an electromagnet: when current flows through its coil, it pulls a plunger that pushes the drive gear into the flywheel and closes the heavy contacts that feed the motor. That is why a failing solenoid often announces itself with a single loud click and no crank — the plunger moves, but the worn contacts do not pass current to the motor. And that is also why a starter that clicks repeatedly is often a low battery: the solenoid pulls in, the voltage drops, the solenoid drops out, and the cycle repeats.</p>"
    },
    {
      "heading": "Switches, Relays, and Safety",
      "html": "<p>The driver does not switch the starter's huge current directly — the ignition switch would burn out. Instead, the switch controls a small current to a <strong>relay</strong>, and the relay's contacts carry the larger current to the solenoid. The relay is a remote-controlled switch: a small current in, a large current out. Many cars also have a <strong>starter relay</strong> and a <strong>solenoid</strong> doing similar jobs in series, which is why the starting circuit has two clicks to listen for.</p>\n<p><strong>Safety switches</strong> stop the car from starting in gear. An automatic transmission has a neutral safety switch that only lets the starter work in Park or Neutral; a manual transmission has a clutch switch that only lets it work with the clutch pedal pressed. A car that will not crank in Park but cranks in Neutral has a faulty neutral safety switch, not a faulty starter — a diagnosis that costs nothing if you know to try it.</p>"
    },
    {
      "heading": "Diagnosing Starting Faults",
      "html": "<p>Starting faults fall into three patterns. <strong>No crank, no click:</strong> no power is reaching the solenoid — check the battery, the ignition switch, the relay, the safety switch, and the fuses. <strong>No crank, one loud click:</strong> the solenoid pulls in but its contacts do not pass current — a worn solenoid, or a bad connection at the starter. <strong>Clicking repeatedly:</strong> the battery is too weak to hold the solenoid in — charge or replace the battery, or find the drain that flattened it. <strong>Slow crank:</strong> the starter turns but too slowly — a weak battery, corroded cables, or a failing starter motor, and a voltage drop test (Module 10) will show which one.</p>\n<p>The first checks are always the cheapest: is the battery charged, are the terminals clean and tight, is the car in Park or Neutral, is the clutch pressed? Half of all \"dead starter\" diagnoses are a flat battery, a corroded terminal, or a car left in Drive. Test the simple things before you order a starter.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>The starting system spins the engine until it can run on its own — a few seconds of the largest current in the car.</li>\n<li>Sequence: ignition switch → relay → solenoid → starter motor; the solenoid engages the gear and closes the heavy contacts.</li>\n<li>The starter motor is geared down through the flywheel ring gear, and its drive gear freewheels once the engine starts.</li>\n<li>Safety switches: neutral safety switch (automatic, Park or Neutral only) and clutch switch (manual, pedal pressed).</li>\n<li>Patterns: no crank, no click = no power to the solenoid; one click = worn solenoid contacts; repeated clicking = weak battery; slow crank = weak battery, bad cables, or failing starter.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Replacing the starter when the car will not crank in Park but cranks fine in Neutral. That is the neutral safety switch, not the starter — and it costs far less to fix.</div>\n<p><strong>Ready-to-Work link:</strong> If you can trace the starting sequence and read the four cranking patterns, you have this module. Module 4 follows the other end of the same job: the charging system.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Starter motor",
      "def": "The powerful electric motor that turns the engine over until it can run on its own."
    },
    {
      "term": "Starter solenoid",
      "def": "The electromagnet on the starter that pushes the drive gear into the flywheel and closes the heavy contacts that feed the motor."
    },
    {
      "term": "Drive gear (pinion)",
      "def": "The small gear on the starter that engages the flywheel ring gear to turn the engine."
    },
    {
      "term": "Flywheel ring gear",
      "def": "The large gear on the flywheel that the starter's drive gear engages."
    },
    {
      "term": "Ignition switch",
      "def": "The switch the driver turns (or the button pressed) to start the engine; it controls a small current to the relay."
    },
    {
      "term": "Starter relay",
      "def": "A remote-controlled switch: a small current from the ignition switch closes its contacts, sending current to the solenoid."
    },
    {
      "term": "Neutral safety switch",
      "def": "A switch on an automatic transmission that only lets the starter work in Park or Neutral."
    },
    {
      "term": "Clutch switch",
      "def": "A switch on a manual transmission that only lets the starter work with the clutch pedal pressed."
    },
    {
      "term": "Crank",
      "def": "To turn the engine over with the starter motor."
    },
    {
      "term": "No crank",
      "def": "The starter does not turn the engine at all when the key is turned or the button is pressed."
    },
    {
      "term": "Slow crank",
      "def": "The starter turns the engine, but too slowly for it to start."
    },
    {
      "term": "One-way clutch",
      "def": "The clutch in the starter drive that lets the gear freewheel once the engine starts and spins faster than the starter."
    },
    {
      "term": "Battery cable",
      "def": "The thick cable that carries the starter's large current between the battery and the starter."
    },
    {
      "term": "Voltage drop",
      "def": "The voltage lost across a connection or wire when current flows through it — the key test in Module 10."
    }
  ],
  "video": {
    "title": "How Starter Motors Work",
    "embedUrl": "https://www.youtube.com/embed/gXKqhFENnQc",
    "note": "The Engineering Mindset shows how a starter motor works, inside and out. Watch the solenoid push the gear in and the motor spin — that sequence is the heart of this module.",
    "more": [
      {
        "title": "Starter Motor Explained - How a car's electric starter motor works",
        "url": "https://www.youtube.com/watch?v=7eN1gxH6lE4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Trace the starting sequence from the moment the driver turns the key to the moment the engine cranks.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The ignition switch sends a small current to the starter relay. Step 2: The relay closes and sends current to the starter solenoid. Step 3: The solenoid pushes the drive gear into the flywheel ring gear and closes the heavy contacts. Step 4: The battery's large current flows to the starter motor, which spins and turns the engine.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A car makes one loud click when the key is turned, but the engine does not crank. What is the most likely fault, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The single click is the solenoid pulling in — so the switch, relay, and solenoid coil are all working. Step 2: The motor does not spin, so the solenoid's heavy contacts are not passing current to the motor — they are worn. Step 3: The fault is the solenoid (or a bad connection at the starter), not the battery or the switch.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A car clicks rapidly when the key is turned and does not crank. What is the most likely cause, and what do you check first?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Rapid clicking is the solenoid pulling in, the voltage dropping, and the solenoid dropping out, over and over. Step 2: The cause is a weak battery that cannot hold the solenoid in. Step 3: Check the battery's state of charge and its terminals first — charge or replace the battery before suspecting the starter.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A car will not crank in Park but cranks normally in Neutral. What is the fault, and why is the starter not the problem?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The fault is the neutral safety switch — it is not closing in Park. Step 2: The starter works fine in Neutral, which proves the battery, relay, solenoid, and motor are all healthy. Step 3: Only the switch that tells the system the car is in Park has failed.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Why does the ignition switch control a relay instead of switching the starter's current directly?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The starter draws the largest current in the car. Step 2: Switching that current directly would burn out the ignition switch. Step 3: The switch controls a small current to a relay, and the relay's contacts carry the large current — a small current in, a large current out.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A starter cranks the engine slowly. Name three possible causes, and say which test (from Module 10) will separate them.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A weak battery, corroded battery cables, or a failing starter motor. Step 2: A voltage drop test on the starting circuit while cranking will show where the voltage is being lost — at the battery, across a corroded connection, or inside the starter. Step 3: The test names the fault instead of guessing between the three.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The starting sequence is:",
      "choices": [
        "Battery → starter motor → solenoid → ignition switch",
        "Ignition switch → relay → solenoid → starter motor",
        "Solenoid → battery → relay → ignition switch",
        "Relay → battery → starter motor → solenoid"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Switch to relay to solenoid to motor — small current controlling larger current at each step. (a) and (c) put the parts in the wrong order. (d) The relay does not feed the battery."
    },
    {
      "q": "The solenoid does two things at once: it:",
      "choices": [
        "Charges the battery and starts the engine",
        "Pushes the drive gear into the flywheel and closes the heavy contacts that feed the motor",
        "Opens the throttle and turns on the fuel pump",
        "Locks the steering and sets the alarm"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The solenoid engages the gear and closes the heavy switch — one plunger, two jobs. (a) The alternator charges the battery. (c) The throttle and fuel pump are separate systems. (d) The steering lock and alarm are separate systems."
    },
    {
      "q": "One loud click and no crank most likely means:",
      "choices": [
        "A dead battery",
        "Worn solenoid contacts — the solenoid pulls in but does not pass current to the motor",
        "A blown headlight fuse",
        "A flat tire"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The click proves the solenoid coil works; the missing crank proves its contacts do not pass current. (a) A dead battery usually gives repeated clicking or nothing. (c) A headlight fuse has nothing to do with cranking. (d) A tire does not affect cranking."
    },
    {
      "q": "Rapid clicking when the key is turned most likely means:",
      "choices": [
        "The starter motor is new",
        "A weak battery that cannot hold the solenoid in",
        "The fuel tank is full",
        "The alternator is overcharging"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The solenoid pulls in, the voltage drops, it drops out, and the cycle repeats. (a) A new starter would crank strongly. (c) Fuel level does not affect the solenoid. (d) Overcharging is a charging-system fault, not a clicking fault."
    },
    {
      "q": "A car that will not crank in Park but cranks in Neutral has a faulty:",
      "choices": [
        "Starter motor",
        "Neutral safety switch",
        "Battery",
        "Alternator"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The starter works in Neutral, proving the battery and starter are healthy — only the Park position of the safety switch has failed. (a) A faulty starter would fail in Neutral too. (c) A faulty battery would fail in Neutral too. (d) The alternator charges the battery; it does not control cranking."
    },
    {
      "q": "The starter motor's drive gear is on a one-way clutch so that:",
      "choices": [
        "The engine can start the starter",
        "Once the engine starts and spins faster than the starter, the gear freewheels instead of being driven backward",
        "The starter can run the car",
        "The flywheel stays still"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The one-way clutch lets the gear freewheel when the engine outruns it. (a) The engine never starts the starter. (c) The starter only cranks the engine; it does not drive the car. (d) The flywheel must spin to crank the engine."
    },
    {
      "q": "The ignition switch controls a relay because:",
      "choices": [
        "The relay is cheaper",
        "The starter's large current would burn out the ignition switch if it were switched directly",
        "The relay makes the car faster",
        "The battery is too small"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The switch handles a small current; the relay's contacts handle the large one. (a) Cost is not the reason. (c) A relay does not make the car faster. (d) Battery size is unrelated."
    },
    {
      "q": "Slow cranking can be caused by:",
      "choices": [
        "A weak battery, corroded cables, or a failing starter motor",
        "A full fuel tank",
        "A new air filter",
        "A charged battery"
      ],
      "answer": 0,
      "explanation": "Correct: (a). All three reduce the current or the motor's ability to turn the engine. (b) Fuel level does not affect cranking speed. (c) A new filter improves breathing. (d) A charged battery cranks strongly."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Starting Systems: Quick Reference</h3>\n<p><strong>Core idea:</strong> The starting system spins the engine until it can run on its own — a few seconds of the largest current in the car.</p>\n<p><strong>Sequence:</strong> Ignition switch → relay → solenoid → starter motor. The solenoid engages the gear and closes the heavy contacts.</p>\n<p><strong>Safety switches:</strong> Neutral safety switch (automatic — Park or Neutral only) · Clutch switch (manual — pedal pressed).</p>\n<p><strong>Patterns:</strong> No crank, no click = no power to the solenoid · One loud click = worn solenoid contacts · Repeated clicking = weak battery · Slow crank = weak battery, bad cables, or failing starter.</p>\n<p><strong>Watch out:</strong> A car that cranks in Neutral but not in Park has a faulty neutral safety switch, not a faulty starter.</p>\n<p><strong>Self-check:</strong> Trace the starting sequence and read the four cranking patterns. If you can, you have this module.</p>\n"
};
