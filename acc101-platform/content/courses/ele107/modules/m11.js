// ele107 - Module 11: Motor & Transformer Troubleshooting
module.exports = {
  "number": 11,
  "slug": "motor-transformer-troubleshooting",
  "title": "Motor & Transformer Troubleshooting",
  "estTime": "3–4 hours",
  "objectives": [
    "Apply a systematic troubleshooting process: observe, measure, isolate, and verify.",
    "Use a multimeter to test a motor for opens, shorts, and grounds.",
    "Use insulation resistance (megohmmeter) testing to judge winding condition.",
    "Diagnose common motor symptoms: hums and won't start, trips the overload, runs hot, vibrates, single-phases.",
    "Diagnose common transformer symptoms: no output, low output, overheating, and humming."
  ],
  "sections": [
    {
      "heading": "A Method, Not a Guess: Observe, Measure, Isolate, Verify",
      "html": "<p>Troubleshooting is a method, not a talent. The method has four steps. <strong>Observe:</strong> what exactly is happening, and what changed? A motor that worked yesterday and hums today is a different problem from a motor that has never run. Note the symptoms precisely — sounds, smells, heat, vibration, what trips, and when. <strong>Measure:</strong> check the supply voltage at the motor terminals, the current on each phase, and the resistance of each winding. Compare with the nameplate and with the other phases; a single bad reading among good ones is the clue. <strong>Isolate:</strong> divide the system in half — is the fault in the supply, the starter, or the motor? Disconnect the motor and test it alone, or test the starter with the motor disconnected. <strong>Verify:</strong> after a repair, run the equipment under load and measure again to prove the fault is gone, not just hidden.</p>\n<p>The most important safety rule of troubleshooting is that the measurements themselves must be made safely. Voltage measurements are made on live equipment and are done only by qualified people using rated meters and PPE, following NFPA 70E. Resistance and insulation measurements are made with the equipment de-energized, locked out, tagged out, and verified dead. Never defeat an overload, a guard, or an interlock to \"test\" a motor — a protection device that trips is telling you something, and the message is worth hearing.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Observe, measure, isolate, verify. A symptom is not a diagnosis — it is the starting point for measurements that narrow the fault to one component.</div>"
    },
    {
      "heading": "Testing a Motor with a Meter",
      "html": "<p>Three resistance tests tell you most of what you need to know about a motor's windings. First, measure the resistance of each winding (or each phase) and compare them: the three readings on a three-phase motor should be nearly equal. A winding that reads much higher than the others is open or has a bad connection; one that reads much lower is shorted. Second, measure from each winding to the frame (ground): the resistance should be very high — a low reading means the insulation has failed and the winding is grounded. Third, check the supply voltage at the motor terminals while it is running: the three phase-to-phase voltages should be within a few percent of each other, because <strong>voltage imbalance</strong> causes current imbalance, and current imbalance causes overheating.</p>\n<p>An <strong>insulation resistance test</strong> (megohmmeter, or \"megger\" test) applies a high DC voltage — commonly 500 V or 1,000 V — and measures the insulation's resistance in megohms. A healthy motor reads tens or hundreds of megohms; a reading below 1 megohm on a low-voltage motor is a warning, and a reading near zero is a failed winding. Megger testing is done de-energized, with the motor disconnected from its starter and drive, and the windings are discharged afterward, because the test itself leaves a charge on the insulation. Trend the readings over time: insulation that falls steadily from 200 megohms to 50 to 10 is aging toward failure, and you can plan the replacement instead of meeting it at 2 a.m.</p>"
    },
    {
      "heading": "Common Motor Symptoms and Their Causes",
      "html": "<p>Learn the symptom-to-cause map and most motor calls become quick. <strong>Hums and will not start:</strong> on a single-phase motor, the start capacitor or centrifugal switch (Module 3); on a three-phase motor, a lost phase (single-phasing) or a seized load. <strong>Trips the overload:</strong> mechanical overload, a jammed load, low voltage, or a failing bearing — check the current against the nameplate FLA. <strong>Runs hot:</strong> overloading, low or unbalanced voltage, blocked ventilation, or a dirty motor in a dusty location. <strong>Vibrates:</strong> misalignment, a bent shaft, a bad bearing, or a loose mounting — and vibration that appears suddenly after years of smooth running is usually a bearing. <strong>Single-phasing</strong> (running on two of three phases) is the classic killer: the motor keeps turning, draws excessive current in the remaining phases, and burns out if the overload does not catch it — check all three phases at the starter and at the motor.</p>\n<p>Bearings deserve a note of their own because they are the most common motor failure. A bearing that growls, runs hot, or shows play in the shaft is failing; grease it only with the right grease and the right amount — over-greasing is as bad as under-greasing, because excess grease churns, heats, and forces its way into the windings. A motor that has been in a flood or a washdown needs its insulation tested before it is re-energized, because wet windings can look fine and fail under voltage.</p>"
    },
    {
      "heading": "Transformer Symptoms and Repair-or-Replace",
      "html": "<p>Transformer faults are fewer but just as systematic. <strong>No output:</strong> check the primary supply and the primary protection first — a blown primary fuse is more common than a failed transformer. <strong>Low output voltage:</strong> check the tap setting (Module 6) and the primary voltage; a transformer tapped for 480 V on a 440 V supply will give low secondary voltage. <strong>Overheating:</strong> overloading, blocked ventilation on a dry-type unit, or failed cooling on a liquid-filled unit. <strong>Loud humming or buzzing:</strong> loose laminations or loose mounting bolts — a hum that grows over time is a warning, not background noise. <strong>Oil leaks or a burnt smell</strong> on a liquid-filled transformer mean the unit needs a professional inspection before it is re-energized.</p>\n<p>The repair-or-replace decision comes down to cost, downtime, and the value of the machine. A small motor with a burned winding is usually replaced, because a rewind costs more than a new motor. A large motor — 50 hp and up — is often worth rewinding, especially if it is a special frame or a long-lead-time machine. A dry-type transformer with a failed winding is almost always replaced; a large liquid-filled transformer may be repaired in place by a specialist. Whatever you decide, document the failure: the readings, the symptoms, and the cause. The next failure on the same machine will be easier to diagnose if the last one is on record.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Resetting a tripped overload and walking away without finding why it tripped. The overload tripped for a reason — a jam, low voltage, a bad bearing — and the next trip may be the one that burns the motor out.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Troubleshoot by method: observe, measure, isolate, verify — and verify under load after the repair.</li>\n<li>Winding resistance should be equal across phases; winding-to-frame resistance should be very high; a megger test in megohms judges insulation health.</li>\n<li>Symptom map: hum/no start = starting circuit or lost phase; trips overload = mechanical overload or low voltage; hot = overload or voltage imbalance; vibration = alignment or bearings.</li>\n<li>Single-phasing (two of three phases) lets a motor keep turning while it burns out — check all three phases.</li>\n<li>Transformer faults: no output (check supply and fuses), low output (check taps), overheating (check load and ventilation), growing hum (loose core).</li>\n<li>Small motors are usually replaced; large motors may be rewound. Document every failure.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Megger-testing a motor while it is still connected to its starter or drive. The test voltage can damage electronic components — disconnect the motor first, and discharge the windings afterward.</div>\n<p><strong>Ready-to-Work link:</strong> If you can map five symptoms to their causes and explain the three winding tests, you have this module. Module 12 covers efficiency, power factor, and motor selection.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Troubleshooting method", "def": "Observe, measure, isolate, verify — the systematic process for finding a fault." },
    { "term": "Voltage imbalance", "def": "Unequal phase-to-phase voltages; causes current imbalance and overheating." },
    { "term": "Single-phasing", "def": "A three-phase motor running on only two phases; it keeps turning but overheats and burns out." },
    { "term": "Insulation resistance test", "def": "A megohmmeter test that applies high DC voltage and measures insulation resistance in megohms." },
    { "term": "Megohmmeter (megger)", "def": "The instrument used for insulation resistance testing." },
    { "term": "Open winding", "def": "A winding with a break in it; it reads very high or infinite resistance." },
    { "term": "Shorted winding", "def": "A winding with turns shorted together; it reads much lower resistance than the other phases." },
    { "term": "Grounded winding", "def": "A winding whose insulation has failed to the frame; it reads low resistance to ground." },
    { "term": "Overload (device)", "def": "A protective device that trips when a motor draws too much current for too long." },
    { "term": "Bearing failure", "def": "The most common motor failure; shows as growling, heat, vibration, or shaft play." },
    { "term": "Tap setting", "def": "The selected tap on a transformer; a wrong setting causes low or high output voltage." },
    { "term": "Rewind", "def": "Replacing the windings of a motor; economical mainly for large or special motors." },
    { "term": "Overheating", "def": "A motor running hotter than its insulation class allows; caused by overload, low or unbalanced voltage, or blocked ventilation." },
    { "term": "Trending", "def": "Recording insulation readings over time to watch a motor age toward failure before it happens." }
  ],
  "video": {
    "title": "Your Electric Motor Troubleshooting Guide",
    "embedUrl": "https://www.youtube.com/embed/R7hpQia0WXc",
    "note": "A practical troubleshooting walkthrough — what to check first, what the meter readings mean, and how to narrow a fault to one component instead of guessing.",
    "more": [
      { "title": "3 Phase Motor Troubleshooting Tips", "url": "https://www.youtube.com/watch?v=cDM4GDg3kfs" },
      { "title": "Troubleshooting 3 Phase Motor with 3 Simple Multimeter Tests #howto #3phasemotor #troubleshooting", "url": "https://www.youtube.com/watch?v=ZOQlJD7BrY4" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A three-phase motor hums and will not start. You measure the voltage at the starter: L1–L2 is 480 V, L2–L3 is 480 V, L1–L3 is 0 V. What is the fault?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: L1–L3 reads 0 V, so L1 and L3 are at the same potential — one phase is missing. Step 2: The motor is single-phasing; it hums but cannot start. Step 3: Check the fuses, the starter contacts, and the connections for the open phase before touching the motor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A motor's three winding resistances measure 2.1, 2.0, and 18.5 ohms. What does this tell you?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Two phases read about 2 ohms and one reads 18.5 ohms. Step 2: The high-reading phase has an open or a high-resistance connection — a broken wire or a bad splice. Step 3: The motor needs repair or replacement; running it would single-phase it and burn the other windings.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A motor trips its overload every afternoon but runs fine in the morning. The load is the same. What should you check?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A time-of-day pattern points at the supply, not the motor. Step 2: Measure the voltage at the motor in the afternoon — it may sag when the building's other loads come on. Step 3: Low voltage makes the motor draw more current to make the same torque, which trips the overload.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A megger test on a 480 V motor reads 0.5 megohms winding-to-frame. A year ago it read 120 megohms. What does this mean, and what should you do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The insulation has degraded badly — below 1 megohm is a warning on a low-voltage motor. Step 2: Do not re-energize it without investigation; the winding is close to grounding out. Step 3: Dry it out if it has been wet, retest, and plan a repair or replacement — the trend says failure is near.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A dry-type transformer gives low output voltage. The primary voltage measures normal. What is the most likely cause?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The primary supply is normal, so the fault is inside the transformer or its settings. Step 2: Check the tap setting — the transformer may be tapped for a higher primary voltage than the supply provides. Step 3: Move the tap to match the actual supply voltage (de-energized, and record the change).</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A 5 hp motor with a burned winding is quoted $900 for a rewind; a new motor costs $650. A 100 hp motor with a burned winding is quoted $4,000 for a rewind; a new one costs $9,000. What is the right call in each case?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: For the 5 hp motor, replace it — the rewind costs more than a new motor. Step 2: For the 100 hp motor, rewind it — the rewind is less than half the cost of new. Step 3: Small motors are usually replaced; large or special motors are usually rewound.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The first step of the troubleshooting method is to:",
      "choices": [ "Replace the motor", "Observe the symptoms precisely and note what changed", "Megger-test everything", "Reset the overload and walk away" ],
      "answer": 1,
      "explanation": "Correct: (b). Careful observation starts the diagnosis. (a) Replacing parts without diagnosis wastes money. (c) Megger testing comes after observation and measurement. (d) Resetting without finding the cause invites a repeat failure."
    },
    {
      "q": "On a three-phase motor, the three winding resistances should be:",
      "choices": [ "Nearly equal", "Each one double the previous", "Zero", "Infinite" ],
      "answer": 0,
      "explanation": "Correct: (a). Equal readings mean balanced windings. (b) Windings are identical, not progressive. (c) Zero resistance would be a short. (d) Infinite resistance would be an open."
    },
    {
      "q": "A winding-to-frame resistance reading near zero means the winding is:",
      "choices": [ "Open", "Grounded", "Normal", "Overloaded" ],
      "answer": 1,
      "explanation": "Correct: (b). Low resistance to the frame means the insulation has failed to ground. (a) An open reads high resistance phase-to-phase. (c) Normal insulation reads very high resistance. (d) Overload is a current condition, not a resistance reading."
    },
    {
      "q": "Single-phasing is dangerous because the motor:",
      "choices": [ "Stops immediately and safely", "Keeps turning while drawing excessive current in the remaining phases and burning out", "Runs faster than normal", "Reverses direction" ],
      "answer": 1,
      "explanation": "Correct: (b). A single-phased motor keeps turning and overheats. (a) It does not stop — that is the danger. (c) It does not run faster. (d) It does not reverse."
    },
    {
      "q": "A motor that vibrates suddenly after years of smooth running most likely has:",
      "choices": [ "A wrong nameplate", "A failing bearing or new misalignment", "Too much grease in the starter", "A low power factor" ],
      "answer": 1,
      "explanation": "Correct: (b). Sudden vibration points at bearings or alignment. (a) The nameplate does not cause vibration. (c) Grease in the starter is not a thing. (d) Power factor does not cause vibration."
    },
    {
      "q": "Before megger-testing a motor, you must:",
      "choices": [ "Leave it connected to the starter", "Disconnect it from the starter or drive and de-energize it", "Run it at full load", "Fill it with oil" ],
      "answer": 1,
      "explanation": "Correct: (b). The test voltage can damage electronics, and the test is done de-energized. (a) Leaving it connected risks damaging the starter or drive. (c) A megger test is never done running. (d) Oil has nothing to do with insulation testing."
    },
    {
      "q": "A transformer with no output should first be checked for:",
      "choices": [ "A failed core lamination", "Primary supply voltage and primary protection (fuses/breaker)", "The color of the tank", "The age of the oil" ],
      "answer": 1,
      "explanation": "Correct: (b). A blown primary fuse is more common than a failed transformer. (a) Core laminations rarely fail first. (c) Tank color is irrelevant. (d) Oil age matters for large units but is not the first check for no output."
    },
    {
      "q": "A motor that trips its overload repeatedly should be:",
      "choices": [ "Reset and ignored", "Investigated for the cause — overload, jam, low voltage, or bad bearing — before being put back in service", "Replaced immediately without testing", "Run without the overload" ],
      "answer": 1,
      "explanation": "Correct: (b). The overload is reporting a real problem. (a) Ignoring it invites burnout. (c) Replacement without diagnosis may not fix the cause. (d) Running without overload protection is unsafe and against code."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Motor &amp; Transformer Troubleshooting: Quick Reference</h3>\n<p><strong>Core idea:</strong> Observe, measure, isolate, verify. A symptom is a starting point, not a diagnosis.</p>\n<p><strong>Winding tests:</strong> Phase resistances nearly equal · Winding-to-frame very high · Megger in megohms — below 1 MΩ on a low-voltage motor is a warning.</p>\n<p><strong>Symptoms:</strong> Hum/no start = starting circuit or lost phase · Trips overload = jam, low voltage, or bad bearing · Hot = overload or voltage imbalance · Vibration = alignment or bearings.</p>\n<p><strong>Single-phasing:</strong> Two of three phases — motor keeps turning and burns out. Check all three phases.</p>\n<p><strong>Transformers:</strong> No output = check supply and fuses first · Low output = check taps · Growing hum = loose core.</p>\n<p><strong>Self-check:</strong> Map five symptoms to causes and explain the three winding tests. If you can, you have this module.</p>\n"
};
