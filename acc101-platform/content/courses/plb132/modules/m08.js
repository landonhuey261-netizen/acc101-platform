// Plumbing 132 - Module 8: Electrical Safety, Lockout/Tagout & Multimeter Use
module.exports = {
  "number": 8,
  "slug": "electrical-safety-lockout-tagout-multimeter-use",
  "title": "Electrical Safety, Lockout/Tagout & Multimeter Use",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why electricity is dangerous: shock, arc flash, and the current levels that harm.",
    "Describe lockout/tagout: when it is required and the steps in order.",
    "Explain how to verify a circuit is dead before touching it.",
    "Describe how to use a multimeter to measure voltage, resistance, and continuity.",
    "State the multimeter safety rules: ratings, leads, and one-hand testing."
  ],
  "sections": [
    {
      "heading": "Why Electricity Hurts",
      "html": "\n<p>Electricity harms in two ways. <strong>Shock</strong> is current passing through the body: it takes only a small current to hurt — about 10 milliamps can lock your muscles so you cannot let go, and about 30 milliamps through the chest can disrupt the heart. It is the current, not the voltage, that does the damage, but the voltage is what pushes the current through your skin's resistance — and wet skin has far less resistance than dry skin, which is why water and electricity together are so dangerous for a plumber.</p>\n<p><strong>Arc flash</strong> is the second danger: a short circuit that vaporizes metal and throws a fireball of heat and light. It happens when a tool bridges two live parts, or when a meter is used on the wrong setting. An arc flash can burn skin, blind eyes, and ignite clothing in a fraction of a second. The defense is the same as for shock: verify the circuit is dead, use the right tool on the right setting, and wear the right protection.</p>\n<div class=\"callout\"><strong>Key idea:</strong> It is the current that kills, and wet skin lets far more current through. A plumber works wet — which is exactly why electrical safety is a plumbing skill, not an electrician's extra.</div>\n<p>The first rule of electrical work is that you never trust a switch, a label, or someone's word that a circuit is off. You verify it yourself, with a meter, every time. A breaker labeled \"water heater\" may feed something else, and a switch that is off may have been turned back on by someone else while you were under the sink.</p>"
    },
    {
      "heading": "Lockout/Tagout",
      "html": "\n<p><strong>Lockout/tagout (LOTO)</strong> is the procedure that makes \"off\" stay off. Under OSHA 1910.147, before you service equipment that could start or energize unexpectedly, you lock the energy source in the off position and tag it so no one else can turn it back on. The steps, in order:</p>\n<p><strong>Step 1 — Notify.</strong> Tell everyone affected that the equipment is being shut down. <strong>Step 2 — Shut down.</strong> Turn the equipment off by its normal controls. <strong>Step 3 — Isolate.</strong> Open the disconnect or the breaker that feeds it. <strong>Step 4 — Lock and tag.</strong> Put your lock on the disconnect or breaker and your tag on it with your name and the date — only you hold the key, and only you remove the lock. <strong>Step 5 — Release stored energy.</strong> Discharge capacitors, bleed pressure, and let motors stop. <strong>Step 6 — Verify.</strong> Test the circuit with a meter and confirm it is dead — and try the equipment's controls to confirm it will not start.</p>\n<p>Lockout/tagout applies to electricity, and it also applies to the other energies a plumber meets: a gas valve that must stay closed, a water valve that must stay shut, and a pump that must not start while your hands are in it. The principle is the same for every energy: isolate it, lock it, tag it, verify it.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Your lock, your key, your life. Only the person who put the lock on removes it. If you did not lock it, you do not trust it — you verify it yourself.</div>"
    },
    {
      "heading": "Verifying Dead: Test Before You Touch",
      "html": "\n<p>Verifying a circuit is dead is a procedure, not a glance. <strong>Step 1:</strong> Test your meter on a known live source — a receptacle you know is live — and confirm the meter reads voltage. <strong>Step 2:</strong> Test the circuit you are about to work on and confirm it reads zero. <strong>Step 3:</strong> Test your meter again on the known live source and confirm it still reads voltage. This is the <strong>live-dead-live</strong> check: it proves the meter works, the circuit is dead, and the meter still works. A meter that cannot prove itself on a live source cannot prove a circuit is dead.</p>\n<p>Test between every pair of conductors: hot to neutral, hot to ground, and neutral to ground — and on a 240-volt circuit, between both hot legs. A circuit can be dead on one leg and live on the other, and a neutral can carry voltage back from another circuit. Test them all.</p>\n<p>Wear the protection: safety glasses, insulated gloves where the work requires them, and dry hands. Work with one hand where you can, so current cannot pass across your chest. And keep the work area dry — standing water and live testing do not mix.</p>"
    },
    {
      "heading": "The Multimeter",
      "html": "\n<p>A <strong>multimeter</strong> is the plumber's electrical test instrument. It measures <strong>voltage</strong> (AC and DC), <strong>resistance</strong> (ohms), and <strong>continuity</strong> (whether a path is complete). Some meters also measure current, capacitance, and temperature. For plumbing work the three measurements that matter are voltage (is this circuit live, and how much?), resistance (is this heating element open or shorted?), and continuity (is this fuse, switch, or wire complete?).</p>\n<p><strong>Measuring voltage:</strong> set the meter to AC volts (or DC volts for a battery), put the black lead on the reference (neutral or ground) and the red lead on the hot, and read the display. A 120-volt circuit should read about 120 volts; a 240-volt circuit about 240 volts; a 24-volt control circuit about 24 volts. <strong>Measuring resistance:</strong> the circuit must be off and the component isolated — never measure resistance on a live circuit. A water heater element should read a low resistance (a 4,500-watt, 240-volt element reads about 13 ohms: R = V² ÷ P = 240² ÷ 4,500 ≈ 12.8 ohms). An open element reads infinite resistance; a shorted element reads near zero. <strong>Measuring continuity:</strong> the meter beeps when the path is complete — a fuse, a switch, or a wire that should be continuous but does not beep is open.</p>\n<p>Meter safety: use a meter rated for the work — <strong>CAT III</strong> for distribution and fixed equipment, <strong>CAT IV</strong> for the service entrance — and use leads in good condition with no cracked insulation or exposed metal. Set the meter to the right function and range before you touch the leads to the circuit: a meter set to resistance on a live circuit can be destroyed, and a meter set to current across a voltage source will short the circuit. When in doubt, set the meter to the highest AC voltage range first, then work down.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Live-dead-live, every time. Test the meter on a known live source, test the circuit, test the meter again. A meter you have not proven is a meter you cannot trust.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Shock: current through the body; about 10 mA can lock muscles, about 30 mA can disrupt the heart. Wet skin has far less resistance — water and electricity together are the plumber's danger.</li>\n<li>Arc flash: a short circuit that vaporizes metal. Defense: verify dead, right tool, right setting, right protection.</li>\n<li>Lockout/tagout (OSHA 1910.147): notify → shut down → isolate → lock and tag → release stored energy → verify. Only the person who locked it removes it.</li>\n<li>Verify dead with live-dead-live: meter on a known live source, then the circuit, then the live source again. Test every pair of conductors.</li>\n<li>Multimeter: voltage (is it live?), resistance (is the element open or shorted?), continuity (is the path complete?). Never measure resistance on a live circuit. Use a CAT III or CAT IV meter with good leads.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Trusting a label or a switch that a circuit is off. Breakers are mislabeled and switches get turned back on. Verify with a meter, every time, with the live-dead-live check.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Measuring resistance on a live circuit. The meter injects its own small current to measure resistance — on a live circuit that current meets the line voltage, and the meter (and the person holding it) pays for it.</div>\n<p><strong>Ready-to-Work link:</strong> NCCER 02210 expects you to work safely around electricity and to use a multimeter. If you can run lockout/tagout in order and the live-dead-live check from memory, you have this module.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Shock",
      "def": "Current passing through the body; about 10 milliamps can lock muscles, about 30 milliamps can disrupt the heart."
    },
    {
      "term": "Arc flash",
      "def": "A short circuit that vaporizes metal and throws a fireball of heat and light."
    },
    {
      "term": "Lockout/tagout (LOTO)",
      "def": "The procedure (OSHA 1910.147) that locks an energy source off and tags it so no one can re-energize it during service."
    },
    {
      "term": "Live-dead-live",
      "def": "The verification check: test the meter on a known live source, test the circuit, test the meter again on the live source."
    },
    {
      "term": "Multimeter",
      "def": "An instrument that measures voltage, resistance, and continuity (and often current, capacitance, and temperature)."
    },
    {
      "term": "Continuity",
      "def": "Whether an electrical path is complete; a meter beeps when the path is complete."
    },
    {
      "term": "CAT rating",
      "def": "A meter's safety rating for where it may be used: CAT III for distribution and fixed equipment, CAT IV for the service entrance."
    },
    {
      "term": "Milliamp (mA)",
      "def": "One-thousandth of an amp; the unit for the small currents that harm the body."
    },
    {
      "term": "Stored energy",
      "def": "Energy held in a system after it is shut off — a charged capacitor, a pressurized line, a spinning motor — that must be released before work."
    },
    {
      "term": "Disconnect",
      "def": "A switch that isolates equipment from its power source, with a place to put a lock."
    },
    {
      "term": "OSHA 1910.147",
      "def": "The OSHA standard for the control of hazardous energy (lockout/tagout)."
    },
    {
      "term": "GFCI",
      "def": "Ground-fault circuit interrupter; detects current leaking to ground and shuts the circuit off in a fraction of a second."
    }
  ],
  "video": {
    "title": "How to Use a Multimeter for Beginners - How to Measure Voltage, Resistance, Continuity and Amps",
    "embedUrl": "https://www.youtube.com/embed/TdUK6RPdIrA",
    "note": "A multimeter from zero: the dial, the leads, and the three measurements a plumber uses — voltage, resistance, and continuity — with the safety habits that keep the meter (and you) intact.",
    "more": [
      {
        "title": "OSHA Lockout Tagout Safety Video: Electrical LOTO Procedure Training",
        "url": "https://www.youtube.com/watch?v=HcvJ_Xp-ofo"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> List the lockout/tagout steps in order.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: <strong>Notify</strong> everyone affected. Step 2: <strong>Shut down</strong> the equipment by its normal controls. Step 3: <strong>Isolate</strong> — open the disconnect or breaker. Step 4: <strong>Lock and tag</strong> — your lock, your key, your tag with your name and date. Step 5: <strong>Release stored energy</strong> — discharge capacitors, bleed pressure, let motors stop. Step 6: <strong>Verify</strong> with a meter that the circuit is dead, and try the controls to confirm it will not start.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> You test a circuit with a multimeter and it reads zero volts. Is the circuit dead? What must you do to be sure?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Not yet — the meter itself might be broken, on the wrong setting, or have a bad lead. Step 2: Run the <strong>live-dead-live</strong> check: test the meter on a known live source and confirm it reads voltage, test the circuit (zero), then test the meter again on the live source. Step 3: Only when the meter proves itself before and after the zero reading can you trust that the circuit is dead.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 4,500-watt, 240-volt water heater element reads infinite resistance on the multimeter. What does that mean?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Infinite resistance means the element is <strong>open</strong> — the heating wire inside has broken. Step 2: A good 4,500-watt, 240-volt element reads about 13 ohms (R = V² ÷ P = 240² ÷ 4,500 ≈ 12.8 ohms). Step 3: The element must be replaced — and the tank must be drained (or the element changed with the tank full and the water off, per the manufacturer's method) before the new one goes in.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A helper wants to measure the resistance of a circulator pump while it is still wired to a live circuit. What do you tell him?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Stop — never measure resistance on a live circuit. Step 2: The meter injects its own small current to measure resistance, and on a live circuit that current meets the line voltage, which can destroy the meter and injure the person holding it. Step 3: Lock out the circuit, verify it is dead, isolate the pump, and only then measure resistance.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A coworker removes your lock from a disconnect so he can test a pump while you are at lunch. What is wrong?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Everything. Step 2: Only the person who put a lock on removes it — your lock, your key, your life. Step 3: Removing someone else's lock re-energizes equipment that person believed was safe, and it violates OSHA 1910.147. The lock stays until the person who placed it removes it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A fuse in a control circuit should be continuous, but the multimeter does not beep on the continuity setting. What does that mean?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No beep means no complete path — the fuse is <strong>open</strong> (blown). Step 2: Replace it with a fuse of the same type and rating. Step 3: Before replacing it, find out why it blew — a blown fuse is a symptom, and a new fuse in a circuit with a short will blow again.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Lockout/tagout is governed by:",
      "choices": [
        "The National Electrical Code",
        "OSHA 1910.147",
        "The International Plumbing Code",
        "The manufacturer's warranty"
      ],
      "answer": 1,
      "explanation": "Correct: (b). OSHA 1910.147, the control of hazardous energy. (a) The NEC governs electrical installations, not the lockout procedure. (c) The IPC governs plumbing. (d) A warranty is not a safety standard."
    },
    {
      "q": "The live-dead-live check means:",
      "choices": [
        "Test the circuit three times",
        "Test the meter on a known live source, test the circuit, test the meter again on the live source",
        "Test three different circuits",
        "Test the meter's batteries three times"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It proves the meter works, the circuit is dead, and the meter still works. (a) Testing the same circuit three times does not prove the meter works. (c) Other circuits are irrelevant. (d) Battery checks do not prove the meter reads voltage."
    },
    {
      "q": "A water heater element that reads infinite resistance is:",
      "choices": [
        "Shorted",
        "Open — the heating wire has broken",
        "Working normally",
        "Grounded"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Infinite resistance means no complete path through the element. (a) A shorted element reads near zero ohms. (c) A good 4,500-watt, 240-volt element reads about 13 ohms. (d) A ground fault is a different measurement."
    },
    {
      "q": "The first lockout/tagout step is to:",
      "choices": [
        "Put the lock on",
        "Notify everyone affected that the equipment is being shut down",
        "Test the circuit",
        "Release stored energy"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Notify first, so no one is surprised by the shutdown or tries to restart the equipment. (a) The lock goes on after shutdown and isolation. (c) Testing comes at the verification step, last. (d) Stored energy is released after isolation and locking."
    },
    {
      "q": "Measuring resistance on a live circuit is dangerous because:",
      "choices": [
        "The meter will read zero",
        "The meter injects its own current, which meets the line voltage and can destroy the meter and injure the user",
        "The reading will be too high",
        "The circuit will trip the breaker"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Resistance measurement puts the meter's test current into the circuit — on a live circuit that current meets line voltage. (a) The reading is not the problem; the damage is. (c) The reading is meaningless, but the hazard is the point. (d) The breaker may not trip fast enough to protect the meter or the user."
    },
    {
      "q": "About how much current through the body can lock muscles so a person cannot let go?",
      "choices": [
        "1 milliamp",
        "10 milliamps",
        "100 milliamps",
        "1 amp"
      ],
      "answer": 1,
      "explanation": "Correct: (b). About 10 milliamps can cause the let-go threshold to be exceeded. (a) 1 milliamp is barely perceptible. (c) 100 milliamps is far above the lethal range. (d) 1 amp is massively lethal."
    },
    {
      "q": "Only the person who put a lock on may remove it because:",
      "choices": [
        "Locks are expensive",
        "The lock is that person's guarantee the equipment will not be re-energized while they work on it",
        "The key is unique",
        "OSHA requires a different lock for each person"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The lock is a personal safety guarantee. (a) Cost is irrelevant. (c) Key uniqueness is a means, not the reason. (d) OSHA requires one lock per person, but the reason is personal protection."
    },
    {
      "q": "A multimeter set to continuity beeps when:",
      "choices": [
        "The circuit is live",
        "The electrical path is complete",
        "The resistance is infinite",
        "The battery is low"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Continuity means a complete path — a good fuse, switch, or wire beeps. (a) Continuity is measured on a dead circuit. (c) Infinite resistance is an open path — no beep. (d) A low battery is a meter warning, not a continuity result."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Electrical Safety, Lockout/Tagout & Multimeter Use: Quick Reference</h3>\n<p><strong>Danger:</strong> Shock — current through the body; ~10 mA locks muscles, ~30 mA can disrupt the heart. Wet skin has far less resistance. Arc flash — a short circuit that vaporizes metal.</p>\n<p><strong>Lockout/tagout (OSHA 1910.147):</strong> Notify → shut down → isolate → lock and tag (your lock, your key) → release stored energy → verify. Only the person who locked it removes it.</p>\n<p><strong>Verify dead:</strong> Live-dead-live — meter on a known live source, then the circuit (zero), then the live source again. Test every pair of conductors.</p>\n<p><strong>Multimeter:</strong> Voltage (is it live?) · Resistance (is the element open or shorted? — never on a live circuit) · Continuity (does the path beep?). A good 4,500-W, 240-V element reads about 13 ohms.</p>\n<p><strong>Meter safety:</strong> CAT III/IV rating for the work, leads in good condition, right function and range before touching the leads to the circuit.</p>\n<p><strong>Watch out:</strong> Never trust a label or a switch — verify with a meter. Never measure resistance on a live circuit.</p>\n<p><strong>Self-check:</strong> Recite the lockout/tagout steps and the live-dead-live check, without notes.</p>\n"
};
