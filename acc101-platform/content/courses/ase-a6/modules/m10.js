// ase-a6 - Module 10: Voltage Drop & Parasitic Draw
module.exports = {
  "number": 10,
  "slug": "voltage-drop-parasitic-draw",
  "title": "Voltage Drop & Parasitic Draw",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a voltage drop is and why it is the best test for a live circuit.",
    "Perform a voltage drop test on a starting or charging circuit.",
    "Explain what parasitic draw is and why it flattens a battery overnight.",
    "Perform a parasitic draw test with a meter in series.",
    "Find the circuit causing a parasitic draw by pulling fuses one at a time."
  ],
  "sections": [
    {
      "heading": "What a Voltage Drop Is",
      "html": "<p>When current flows through any wire or connection, a small amount of voltage is lost across it — that loss is the <strong>voltage drop</strong>. In a healthy circuit the drop is tiny, because the wires and connections have very little resistance. In a faulty circuit — a corroded terminal, a damaged wire, a loose connection — the resistance is higher, so more voltage is lost across the fault and less voltage reaches the load. The load then works weakly: a starter that cranks slowly, a headlight that burns dim, a fuel pump that cannot build pressure.</p>\n<p>The voltage drop test is the best test for a live circuit because it tests the circuit while it is working, under its real load. A resistance test with the power off can miss the fault entirely: a corroded connection can show low resistance to the meter's tiny test current and high resistance to the starter's huge current. The voltage drop test catches what the resistance test misses, because it measures the loss while the real current is flowing.</p>"
    },
    {
      "heading": "Performing a Voltage Drop Test",
      "html": "<p>To test a connection or a wire, you connect the voltmeter across it — one lead on each side — while the circuit is running and current is flowing. The meter reads the voltage lost across that part. Worked example: a starter circuit is cranking, and you measure across a battery terminal connection. The meter reads a small drop — the connection is good. You measure across a corroded connection and the meter reads a large drop — most of the battery's voltage is being lost at that one connection, and the starter is starved. The fault is found, and it is a cleaning job, not a new starter.</p>\n<p>Test the whole path in sections: from the battery to the load, and from the load back to the battery through the ground. The drops add up — the total drop from the battery to the load and back is the voltage the load never sees. Find the section with the largest drop and you have found the fault. A drop test is done with the circuit powered and loaded, which is exactly when the fault shows itself.</p>"
    },
    {
      "heading": "Parasitic Draw: The Battery That Dies Overnight",
      "html": "<p><strong>Parasitic draw</strong> is current that keeps flowing after the car is switched off and everything should be asleep. A small draw is normal: the clock, the radio's memory, the alarm, and the modules' memories all sip a tiny current. But a draw that is too large — a glove-box light left on, a module that never goes to sleep, a relay stuck closed — drains the battery overnight, and the car will not start in the morning even though the battery and the charging system are both healthy.</p>\n<p>The key fact is time. A draw that would take weeks to flatten a battery is not the problem; a draw that flattens it overnight is. The test measures the draw with everything off and the car asleep, and compares it with what the service information says is normal for that car. If the draw is too large, the next step is to find which circuit is drawing it.</p>"
    },
    {
      "heading": "Testing for Parasitic Draw",
      "html": "<p>To test for parasitic draw, you connect an ammeter in series with the battery — usually between the battery's negative terminal and the negative cable — with the car switched off, the doors closed, and the car left alone until its modules go to sleep. That waiting matters: modules can take many minutes to go to sleep, and a reading taken too soon shows the modules' normal waking current, not a fault. Once the car is asleep, the meter shows the true draw.</p>\n<p>If the draw is too large, you find the circuit by pulling fuses one at a time and watching the meter. Pull a fuse and the draw drops — that fuse's circuit is the one drawing the current. Then you trace that circuit: what is on it, what could be staying on, and what is keeping the module awake. Pull fuses one at a time, put each one back before pulling the next, and never open a door or switch anything on during the test, because that wakes the modules up and ruins the reading. And never crank the engine or switch on a large load while the meter is in series — the meter is built for small currents and a large one will blow its fuse or damage it.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>A voltage drop is the voltage lost across a wire or connection while current flows; a large drop means high resistance at that point.</li>\n<li>The voltage drop test is the best test for a live circuit — it catches faults a power-off resistance test misses.</li>\n<li>Test in sections: battery to load, and load back to battery through the ground. The largest drop names the fault.</li>\n<li>Parasitic draw is current flowing after the car is off; a small draw is normal, a large one flattens the battery overnight.</li>\n<li>Test with the car asleep (wait for the modules to sleep), meter in series, then pull fuses one at a time to find the circuit.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Measuring parasitic draw before the modules have gone to sleep, and condemning the car for a draw that is just the modules still awake. Wait for the car to sleep, then read the meter.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain why a voltage drop test beats a resistance test and how to find a parasitic draw by pulling fuses, you have this module. Module 11 deals with the most dangerous electricity in the car: hybrid and EV high voltage.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Voltage drop",
      "def": "The voltage lost across a wire or connection while current flows through it; a large drop means high resistance at that point."
    },
    {
      "term": "Parasitic draw",
      "def": "Current that keeps flowing after the car is switched off and everything should be asleep; too much of it flattens the battery overnight."
    },
    {
      "term": "Ammeter",
      "def": "A meter set to measure current, connected in series so the current flows through it."
    },
    {
      "term": "In series",
      "def": "Connected so current flows through the meter — how current and parasitic draw are measured."
    },
    {
      "term": "Asleep (modules)",
      "def": "The state a car's modules reach some minutes after switch-off, when they have shut down and draw only a tiny current."
    },
    {
      "term": "Corroded connection",
      "def": "A connection with corrosion that resists current flow, causing a large voltage drop and a weak load."
    },
    {
      "term": "Ground path",
      "def": "The return path from the load back to the battery, usually through the car's body; a bad ground causes a voltage drop too."
    },
    {
      "term": "Fuse pull test",
      "def": "Finding a parasitic draw by pulling fuses one at a time and watching the meter — the fuse that drops the reading names the circuit."
    },
    {
      "term": "Normal draw",
      "def": "The small current a car is supposed to draw with everything off — the clock, radio memory, alarm, and module memories."
    },
    {
      "term": "Stuck relay",
      "def": "A relay whose contacts stay closed, keeping its circuit powered when it should be off — a common cause of parasitic draw."
    },
    {
      "term": "Module awake",
      "def": "A module that has not gone to sleep after switch-off, continuing to draw current."
    },
    {
      "term": "Live circuit",
      "def": "A circuit that is powered and carrying current — the condition a voltage drop test needs."
    },
    {
      "term": "Resistance test",
      "def": "Measuring resistance with the power off; it can miss high-resistance faults that only show up under load."
    }
  ],
  "video": {
    "title": "Understanding How To Test Voltage Drops (Part 1)",
    "embedUrl": "https://www.youtube.com/embed/aKLZHVRcxPs",
    "note": "Royalty Auto Service explains voltage drop testing — the best test for a live circuit. Watch how he tests each section of the circuit and finds the one with the largest drop; that method is the heart of this module.",
    "more": [
      {
        "title": "The Best Way to Perform a Voltage Drop Test",
        "url": "https://www.youtube.com/watch?v=qPpHRuddhh4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A starter circuit is cranking. You measure across a battery terminal connection and the meter reads a large voltage drop. What does that mean, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A large drop across the connection means most of the battery's voltage is being lost there — the connection has high resistance. Step 2: The starter is starved of voltage, so it cranks slowly. Step 3: The fix is to clean and tighten the connection, not to replace the starter.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Why does a voltage drop test find a bad connection that a resistance test with the power off can miss?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A resistance test uses the meter's tiny test current. Step 2: A corroded connection can show low resistance to that tiny current and high resistance to the starter's huge current. Step 3: The voltage drop test measures the loss while the real current is flowing, under the real load — which is exactly when the fault shows itself.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A starter circuit has a 12-volt source. The starter itself drops 9 volts and the cables and connections drop 3 volts in total. How much voltage reaches the starter, and what does the 3-volt loss mean?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The starter sees 9 volts — the 3 volts are lost in the cables and connections before they reach it. Step 2: A 3-volt loss in the wiring is a large drop: the cables or connections have high resistance. Step 3: The starter is starved and will crank slowly; the fault is in the wiring, not the starter.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A car will not start in the morning, but the battery passes a load test and the charging system is healthy. What is the most likely problem, and what test confirms it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Parasitic draw — something is draining the battery overnight. Step 2: The battery and charging system are both healthy, so the energy is being used after switch-off. Step 3: A parasitic draw test with the car asleep confirms it, and pulling fuses one at a time finds the circuit.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> You pull a fuse during a parasitic draw test and the meter reading drops sharply. What does that tell you, and what do you do next?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: That fuse's circuit is the one drawing the current. Step 2: Put the fuse back, then trace that circuit — what is on it, what could be staying on, and what is keeping the module awake. Step 3: Find the part on that circuit that is not switching off, and repair or replace it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why must you wait for the car's modules to go to sleep before reading a parasitic draw measurement, and what happens if you open a door during the test?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Modules can take many minutes to go to sleep, and while awake they draw a normal waking current. Step 2: A reading taken too soon shows that waking current, not a fault — and you would condemn a healthy car. Step 3: Opening a door wakes the modules up again and ruins the reading; the test must start over.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A voltage drop is:",
      "choices": [
        "The battery's voltage when the car is off",
        "The voltage lost across a wire or connection while current flows through it",
        "The voltage of a blown fuse",
        "The resistance of a wire"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Voltage is lost across any resistance when current flows; a large loss means high resistance at that point. (a) Battery voltage with the car off is the resting voltage. (c) A blown fuse has no voltage across it because no current flows. (d) Resistance is measured in ohms, not volts."
    },
    {
      "q": "The voltage drop test is the best test for a live circuit because:",
      "choices": [
        "It is the fastest test",
        "It tests the circuit while it is working under its real load, catching faults a power-off resistance test misses",
        "It needs no meter",
        "It works with the battery removed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The fault only shows itself when the real current flows. (a) Speed is not the reason. (c) It needs a voltmeter. (d) It needs the battery connected and the circuit powered."
    },
    {
      "q": "A large voltage drop across a battery terminal connection while cranking means:",
      "choices": [
        "The starter is new",
        "The connection has high resistance and is starving the starter of voltage",
        "The battery is overcharged",
        "The alternator is working"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Most of the voltage is being lost at that one connection, so the starter gets too little. (a) A new starter would still be starved by a bad connection. (c) Overcharging is a charging-system fault. (d) The alternator is not involved in cranking."
    },
    {
      "q": "Parasitic draw is:",
      "choices": [
        "Current that flows while the engine runs",
        "Current that keeps flowing after the car is switched off and everything should be asleep",
        "The starter's current",
        "The alternator's output"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Draw after switch-off drains the battery overnight. (a) Current while running is normal load, not parasitic draw. (c) The starter draws current only while cranking. (d) The alternator's output charges the battery."
    },
    {
      "q": "A parasitic draw test must be done:",
      "choices": [
        "With the engine running",
        "With the car switched off and the modules asleep, the meter in series with the battery",
        "With all the doors open",
        "With the headlights on"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The car must be off and asleep so the meter reads the true draw. (a) With the engine running, the alternator supplies the loads. (c) Open doors wake the modules and ruin the reading. (d) Headlights on is a load, not a draw test."
    },
    {
      "q": "Pulling a fuse during a draw test and seeing the reading drop sharply means:",
      "choices": [
        "The fuse is blown",
        "That fuse's circuit is the one drawing the current",
        "The battery is dead",
        "The meter is broken"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The drop names the circuit; that circuit is then traced to find what is staying on. (a) A blown fuse would not change the reading when pulled. (c) A dead battery would show no draw at all. (d) The meter is doing its job."
    },
    {
      "q": "A resistance test with the power off can miss a bad connection because:",
      "choices": [
        "The meter is broken",
        "A corroded connection can show low resistance to the meter's tiny test current and high resistance to the real load's large current",
        "Resistance tests never work",
        "The connection is too clean"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The tiny test current does not stress the connection the way the real load does. (a) The meter is fine; the test is the wrong one for a live fault. (c) Resistance tests work for many things, just not for this. (d) A clean connection would not be a fault."
    },
    {
      "q": "During a parasitic draw test you must never:",
      "choices": [
        "Wait for the modules to sleep",
        "Crank the engine or switch on a large load while the meter is in series",
        "Close the doors",
        "Put each fuse back before pulling the next"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The meter is built for small currents; a large one will blow its fuse or damage it. (a) Waiting is required. (c) Closing the doors is required. (d) Putting each fuse back before pulling the next is the correct method."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Voltage Drop & Parasitic Draw: Quick Reference</h3>\n<p><strong>Core idea:</strong> A voltage drop is the voltage lost across a wire or connection while current flows — a large drop means high resistance at that point, and the load is starved.</p>\n<p><strong>Voltage drop test:</strong> Meter across the part, circuit powered and loaded. Test in sections; the largest drop names the fault. It catches what a power-off resistance test misses.</p>\n<p><strong>Parasitic draw:</strong> Current flowing after switch-off. A small draw is normal; a large one flattens the battery overnight.</p>\n<p><strong>Draw test:</strong> Car off and asleep (wait for the modules to sleep), meter in series with the battery, then pull fuses one at a time — the fuse that drops the reading names the circuit.</p>\n<p><strong>Watch out:</strong> Never crank the engine or switch on a large load while the meter is in series, and never read the draw before the modules have gone to sleep.</p>\n<p><strong>Self-check:</strong> Explain why a voltage drop test beats a resistance test and how to find a parasitic draw by pulling fuses. If you can, you have this module.</p>\n"
};
