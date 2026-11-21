// ele103 - Module 12: AC Troubleshooting & Safety
module.exports = {
  "number": 12,
  "slug": "ac-troubleshooting-and-safety",
  "title": "AC Troubleshooting & Safety",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe a systematic troubleshooting process for AC circuits.",
    "Use voltage, current, and resistance measurements to find AC faults.",
    "Explain how to troubleshoot a tripped breaker, a dead outlet, and a motor that will not start.",
    "Describe the safety rules for live AC testing by a qualified person.",
    "Explain how to verify a repair and document what was found."
  ],
  "sections": [
    {
      "heading": "A Systematic Process for AC",
      "html": "<p>AC troubleshooting follows the same five steps as DC: observe, hypothesize, test, repair, verify. The difference is the hazards and the measurements. AC circuits carry higher voltages, higher energies, and the arc-flash and shock boundaries of NFPA 70E — so the first question is always whether the test can be done de-energized. Most resistance and continuity tests can. Voltage tests cannot, and they are done only by a qualified person, with the PPE the hazard requires, the meter rated for the location, and a second person nearby when the work rules call for one.</p>\n<p>The observation step matters more in AC, because AC faults have more causes: a tripped breaker can be an overload, a short, a ground fault, or a failing breaker; a dead outlet can be a tripped GFCI upstream, a failed connection, or a broken wire; a motor that will not start can be a failed capacitor, a lost phase, or a seized bearing. The symptom narrows the list, and the measurement picks the one.</p>\n<div class=\"callout\"><strong>Key idea:</strong> In AC troubleshooting, the first question is always whether the test can be done de-energized. If it cannot, only a qualified person does it, with the right PPE and the right meter.</div>"
    },
    {
      "heading": "The Tripped Breaker, the Dead Outlet & the Dead Motor",
      "html": "<p>A <strong>tripped breaker</strong> is investigated in order: reset it once, and if it trips again immediately, do not keep resetting it — find the fault. Check for an overload (too many loads, a motor starting under load), a short (a hot wire touching a neutral or ground), and a ground fault (current leaking to ground, which a GFCI or ground-fault breaker will catch). A breaker that trips on a motor start may be the wrong type — a motor needs a breaker that tolerates its starting current — or the motor may be failing.</p>\n<p>A <strong>dead outlet</strong> is traced upstream: check the breaker, then check for a tripped GFCI on the same circuit (bathroom, kitchen, garage, and outdoor receptacles are often downstream of one GFCI), then check the connections in the outlet box and the boxes upstream of it. Most dead outlets are a loose connection or a tripped GFCI, not a broken wire. A <strong>motor that will not start</strong> is checked for voltage at the motor, then for a failed start capacitor (a single-phase motor that hums but does not turn), then for a lost phase (a three-phase motor that hums and overheats), then for a mechanical problem such as a seized bearing.</p>"
    },
    {
      "heading": "Measurements That Find AC Faults",
      "html": "<p>Voltage measurements find the open: in a series path, the component with the full source voltage across it is the open, or the open is elsewhere in the loop. A receptacle that reads 0 volts has an open upstream; a receptacle that reads 120 volts but will not run a load has a high-resistance connection that drops voltage under load — the classic \"phantom voltage\" problem, where a meter reads voltage but the circuit cannot deliver current. Current measurements find the overload: a clamp meter around one conductor shows what the circuit is actually drawing, and a current far above the rating means an overload or a failing load.</p>\n<p>Resistance and continuity measurements, made de-energized, find the failed component: a start capacitor that reads open or shorted, a motor winding that reads open or grounded to the frame, a fuse that does not beep. Insulation resistance, measured with a megger, finds deteriorated insulation before it fails — a winding that reads low to ground is a motor that is about to fail, and catching it early is the difference between a planned replacement and an emergency call.</p>"
    },
    {
      "heading": "Live Testing Safety & Verification",
      "html": "<p>Live AC testing is done only by a qualified person, and only when the test cannot be done de-energized. The rules are the ones from Electrical 101: the right PPE for the shock and arc-flash boundaries, a meter rated for the location (CAT III or CAT IV at panels and services), the meter verified live-dead-live, one hand behind the back where the work rules call for it, and no jewelry or conductive clothing. The test is planned before it is made — what will be measured, where the leads will go, and what the reading should be — so the hands do not wander in a live panel.</p>\n<p>After the repair, verify: run the circuit, measure the voltage and current, and compare them with the calculated or nameplate values. Then document what was found — the symptom, the measurements, the fault, and the fix — so the next person does not have to find it again. A repair that is not verified is a guess, and a fault that is not documented is a fault that will be found twice.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Troubleshoot systematically: observe, hypothesize, test, repair, verify — and ask first whether the test can be done de-energized.</li>\n<li>A tripped breaker that trips again immediately is not reset again — find the fault: overload, short, ground fault, or failing breaker.</li>\n<li>A dead outlet is usually a tripped GFCI upstream or a loose connection, not a broken wire.</li>\n<li>A motor that hums but does not start is often a failed start capacitor (single-phase) or a lost phase (three-phase).</li>\n<li>Live testing is for qualified persons only, with the right PPE, a rated meter, and live-dead-live verification.</li>\n<li>Verify the repair and document the fault.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Resetting a tripped breaker over and over. A breaker that trips again immediately is telling you there is a fault — find it before the wire or the breaker is damaged.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Trusting a voltage reading on a circuit that will not run a load. A high-resistance connection can show full voltage on a meter and still not deliver current — measure the voltage under load, or measure the current.</div>\n<p><strong>Ready-to-Work link:</strong> If you can describe the five-step process, troubleshoot a tripped breaker, a dead outlet, and a dead motor, and state the live-testing safety rules, you have this module — and this course. The course labs are AC power and three-phase calculation labs, and the exams cover all twelve modules.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Troubleshooting",
      "def": "Finding a fault by a systematic process: observe, hypothesize, test, repair, verify."
    },
    {
      "term": "Tripped breaker",
      "def": "A breaker that has opened because of an overload, short, ground fault, or failure."
    },
    {
      "term": "Ground fault",
      "def": "Current leaking to ground through an unintended path; detected by a GFCI or ground-fault breaker."
    },
    {
      "term": "GFCI",
      "def": "A ground-fault circuit interrupter that trips when current leaks to ground through a person or a fault."
    },
    {
      "term": "Phantom voltage",
      "def": "A voltage reading on a meter from a circuit that cannot deliver current, usually because of a high-resistance connection."
    },
    {
      "term": "High-resistance connection",
      "def": "A loose or corroded joint that drops voltage under load and makes heat."
    },
    {
      "term": "Start capacitor",
      "def": "A capacitor that gives a single-phase motor the phase shift it needs to start; a common failure."
    },
    {
      "term": "Lost phase",
      "def": "One phase of a three-phase supply missing or weak; a motor hums, overheats, and may not start."
    },
    {
      "term": "Insulation resistance",
      "def": "The resistance of a motor's or cable's insulation to ground, measured with a megger."
    },
    {
      "term": "Megger",
      "def": "An insulation resistance tester that applies a high test voltage to check insulation."
    },
    {
      "term": "Live testing",
      "def": "Measuring on an energized circuit; done only by a qualified person with the right PPE and meter."
    },
    {
      "term": "CAT rating",
      "def": "A meter's category rating (CAT II, III, IV) for the transient overvoltage it can survive."
    },
    {
      "term": "Seized bearing",
      "def": "A motor bearing that has failed and will not turn; a mechanical cause of a motor not starting."
    },
    {
      "term": "Verify",
      "def": "Testing a circuit after a repair to confirm it works."
    },
    {
      "term": "Document",
      "def": "Writing down the symptom, measurements, fault, and fix for the next person."
    }
  ],
  "video": {
    "title": "Electrical Troubleshooting, electrical contractor",
    "embedUrl": "https://www.youtube.com/embed/kzFjMeVaddg",
    "note": "An AC troubleshooting walkthrough. As you watch, write down each test the electrician makes and what each test rules out.",
    "more": [
      {
        "title": "Troubleshooting a tripped circuit breaker had me all over this house Wellington",
        "url": "https://www.youtube.com/watch?v=dS5dz9A69kw"
      },
      {
        "title": "Troubleshooting ac compressor and tripped circuit.  Delray Beach fl Simon Electr",
        "url": "https://www.youtube.com/watch?v=LDwkMQda9e8"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A breaker trips, you reset it once, and it trips again immediately. What do you do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Do not reset it again. Step 2: Find the fault — check for an overload, a short, a ground fault, or a failing breaker. Step 3: The breaker is telling you there is a fault; resetting it again risks damaging the wire or the breaker.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A bedroom outlet is dead. The breaker is on. What do you check next, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check for a tripped GFCI on the same circuit — bathroom, kitchen, garage, and outdoor receptacles are often downstream of one GFCI. Step 2: If no GFCI is tripped, check the connections in the outlet box and the boxes upstream. Step 3: Most dead outlets are a tripped GFCI or a loose connection, not a broken wire.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A single-phase motor hums but will not start. What is the most likely electrical cause?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A failed start capacitor. Step 2: The capacitor gives the motor the phase shift it needs to start. Step 3: Without it, the motor hums but cannot turn — test the capacitor de-energized, under a licensed supervisor, before replacing it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A meter reads 120 V at an outlet, but a lamp plugged into it will not light. What does that suggest?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A high-resistance connection upstream. Step 2: The meter draws almost no current, so it reads full voltage across the bad connection. Step 3: Under load, the connection drops the voltage and the lamp gets nothing — measure the voltage under load, or measure the current, to confirm.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A three-phase motor hums, overheats, and will not start. What is the likely cause?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A lost phase — one phase of the supply is missing or weak. Step 2: The motor cannot make a proper rotating field with two phases. Step 3: Check the voltage on all three phases at the motor, de-energized work under a licensed supervisor, and find the open phase before running the motor again.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> List three rules for live AC testing by a qualified person.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Wear the PPE the shock and arc-flash boundaries require. Step 2: Use a meter rated for the location (CAT III or CAT IV at panels and services), verified live-dead-live. Step 3: Plan the test before making it — what will be measured, where the leads go, and what the reading should be.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A breaker that trips again immediately after one reset should be:",
      "choices": [
        "Reset again and again until it holds",
        "Left tripped while the fault is found",
        "Replaced immediately without checking",
        "Ignored"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A breaker that trips again is reporting a fault — find it. (a) Repeated resetting risks damage. (c) The breaker may be fine; the fault may be in the circuit. (d) Ignoring a tripped breaker leaves the fault in place."
    },
    {
      "q": "A dead outlet with the breaker on is most often caused by:",
      "choices": [
        "A broken wire in the wall",
        "A tripped GFCI upstream or a loose connection",
        "A failed utility transformer",
        "A bad light bulb"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Most dead outlets are a tripped GFCI or a loose connection. (a) A broken wire is possible but less common. (c) A failed transformer would kill more than one outlet. (d) A bad bulb affects the lamp, not the outlet."
    },
    {
      "q": "A single-phase motor that hums but will not start most likely has:",
      "choices": [
        "A failed start capacitor",
        "A failed light bulb",
        "Too much voltage",
        "A broken shaft only"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The start capacitor gives the phase shift the motor needs to start. (b) A light bulb is unrelated. (c) Too much voltage would not cause humming without starting. (d) A broken shaft is mechanical, but the capacitor is the common electrical cause."
    },
    {
      "q": "A meter reads 120 V at an outlet, but a lamp plugged in will not light. This suggests:",
      "choices": [
        "The meter is broken",
        "A high-resistance connection that drops voltage under load",
        "The outlet is fine",
        "The lamp is too big"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A high-resistance connection shows full voltage to a meter (which draws almost no current) but drops voltage under load. (a) The meter is reading correctly for no load. (c) The outlet is not fine — it cannot deliver current. (d) Lamp size does not cause this."
    },
    {
      "q": "A three-phase motor that hums, overheats, and will not start most likely has:",
      "choices": [
        "A lost phase",
        "A failed light bulb",
        "Too little current",
        "A clean filter"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A lost phase prevents a proper rotating field. (b) A light bulb is unrelated. (c) Too little current is a symptom, not the cause. (d) A clean filter is not a cause."
    },
    {
      "q": "Live AC testing should be done:",
      "choices": [
        "By anyone with a meter",
        "Only by a qualified person, with the right PPE and a rated meter",
        "With no PPE, to save time",
        "On any circuit, energized or not"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Live testing is for qualified persons only, with the right PPE and meter. (a) A meter does not make a person qualified. (c) PPE is required. (d) De-energized testing is preferred whenever possible."
    },
    {
      "q": "A megger is used to measure:",
      "choices": [
        "Voltage",
        "Insulation resistance",
        "Current",
        "Frequency"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A megger applies a high test voltage to check insulation resistance. (a) Voltage is measured with a voltmeter. (c) Current is measured with an ammeter or clamp meter. (d) Frequency is measured with a frequency meter or oscilloscope."
    },
    {
      "q": "After a repair, the troubleshooter should:",
      "choices": [
        "Leave immediately",
        "Verify the circuit works and document the fault",
        "Replace another part",
        "Turn the power on and walk away"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Verify the repair and document what was found. (a) Leaving without verifying is a guess. (c) Replacing another part is random. (d) Energizing without verification is unsafe and unverified."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — AC Troubleshooting & Safety: Quick Reference</h3>\n<p><strong>Core idea:</strong> In AC troubleshooting, the first question is always whether the test can be done de-energized.</p>\n<p><strong>Process:</strong> Observe → Hypothesize → Test → Repair → Verify (and document).</p>\n<p><strong>Common faults:</strong> Tripped breaker that trips again = find the fault, do not keep resetting · Dead outlet = tripped GFCI upstream or loose connection · Motor hums, will not start = failed start capacitor (single-phase) or lost phase (three-phase).</p>\n<p><strong>Measurements:</strong> Voltage finds opens · Current finds overloads · Resistance/continuity (de-energized) finds failed parts · Megger finds deteriorating insulation.</p>\n<p><strong>Live testing:</strong> Qualified persons only · Right PPE · CAT III/IV meter · Live-dead-live · Plan the test first.</p>\n<p><strong>Self-check:</strong> List the five steps and troubleshoot a tripped breaker, a dead outlet, and a humming motor, without looking.</p>\n"
};
