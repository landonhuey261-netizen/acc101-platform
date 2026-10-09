// HVAC 117 - Module 12: Case Studies: Intermittent & No-Cool Electrical Faults
module.exports = {
  number: 12,
  slug: "case-studies-electrical-faults",
  title: "Case Studies: Intermittent & No-Cool Electrical Faults",
  estTime: "3–4 hours",
  objectives: [
    "Walk a complete no-cool call from interview to proven repair using the Module 11 workflow.",
    "Diagnose a chattering contactor to its root cause in the control-voltage path.",
    "Explain how thermal expansion and vibration create intermittent faults, and how to hunt them deliberately.",
    "Trace a repeated blown control fuse to a rub-out short using segment isolation rather than fuse-feeding.",
    "Recognize a multi-fault call — where fixing the obvious fault reveals a second — and document intermittent findings for the next visit."
  ],
  sections: [
    {
      heading: "Case 1: The Compressor That Hummed and Quit (No-Cool, Hard Fault)",
      html: `
<p><strong>The call:</strong> no cooling since morning. Indoor blower runs; outdoor fan runs; every few minutes the compressor hums for several seconds, falls silent, and later tries again. The customer has already 'checked the breaker' — it is not tripped.</p>
<p><strong>Method at work.</strong> Interview done, complaint verified at the unit (Module 11, steps 1–2): the hum-and-retry pattern is a compressor trying to start and being taken off by its internal overload. Source check: full line voltage present at the contactor, and 24 V holding the contactor in — the compressor is being <em>told</em> to run and is being <em>fed</em> power; this is a start/run problem at the machine, not a control problem. The fan running normally on the same contactor call corroborates the control side.</p>
<p>Power off, locked out, capacitor discharged. The PSC compressor's run capacitor measures well below its marked rating — outside its marked tolerance — while the winding resistances satisfy the sum rule exactly and no terminal reads to ground. The picture assembles itself (Modules 2–3): the weakened capacitor's XC has risen, the auxiliary winding is starved, starting torque has collapsed; the locked compressor draws heavy current until its overload rescues it, cools, and tries again.</p>
<p><strong>Repair and proof:</strong> replace the capacitor with the correct microfarad and voltage rating. Re-run: the compressor starts instantly, runs at current consistent with its nameplate, and the system completes a full cooling cycle — the original complaint re-run dead, per Module 11. This exact diagnosis, worked as a scored exercise, is this course's lab.</p>
<div class="callout"><strong>Key idea:</strong> Notice what was never touched: the refrigerant circuit. 'No cool' is a symptom, not a system. The method walked past the gauges entirely because the evidence never pointed there.</div>`
    },
    {
      heading: "Case 2: The Chattering Contactor (Control Voltage Under Load)",
      html: `
<p><strong>The call:</strong> the outdoor unit 'machine-guns' — the contactor chatters loudly on every cooling call, and cooling is unreliable. Two contactors have already been replaced by another company. The chatter returns within days.</p>
<p><strong>Method at work.</strong> A chattering contactor is a coil whose voltage is hovering at the pull-in/drop-out boundary — the contactor is the <em>victim</em>, which is why replacements kept 'failing.' Measurement (Module 1's discipline, 24 V edition): control voltage at the transformer is a healthy 24 V at rest, but at the coil, during the call, it sags and wavers far below that. The source is innocent at rest and guilty under load — or the path is eating the difference.</p>
<p>Voltage-drop testing across each element of the coil's path under load finds it: most of the loss occurs across one aging thermostat contact and a corroded splice in the thermostat cable run — series resistances that barely matter at rest and dominate when the coil draws current (plus, on hot afternoons, a transformer budget already loaded near its rating contributes; the VA audit of Module 7 shows the design margin was thin from the start). Repairs: the splice remade, the failing thermostat replaced, and the control load audited back inside the transformer's rating.</p>
<p><strong>Proof:</strong> coil voltage rock-steady under load, contactor pulls in once with a single clean clack, and a full hot-afternoon cycle completes. The write-up names the root cause plainly: two good contactors were condemned by a voltage problem nobody had measured under load.</p>
<div class="callout"><strong>Key idea:</strong> Chatter is a voltage confession. Any coil that buzzes, any relay that flutters, is reporting its supply — measure the voltage <em>at the coil, while it is trying to work</em>, and drop-test the path that feeds it.</div>`
    },
    {
      heading: "Case 3: The Fault That Only Visits at 3 P.M. (Thermal Intermittent)",
      html: `
<p><strong>The call:</strong> the system quits some hot afternoons and restarts by evening; three visits have found 'nothing wrong.' This is the intermittent — the fault class that defeats random testing and rewards method most.</p>
<p><strong>Why intermittents hide.</strong> Heat changes electricity: conductors and failing joints expand, marginal connections open at temperature and remake when cool, windings with borderline insulation leak when hot, and a weak connection carrying load current becomes its own heater (Module 1's P = I²R), opening itself further the longer it runs — a fault with a built-in afternoon schedule. Vibration does the same trick mechanically: a compressor's start shakes a loose terminal open; the fault exists only while the machine that causes it is running.</p>
<p><strong>The hunt.</strong> Interrogate the pattern first: failures correlate with peak heat and long run times — a thermal signature. Then stress the system <em>into</em> its failing state during your visit: run a long, full-load cycle on the hottest part of the day if scheduling allows, and monitor the suspects live — coil voltage, motor current, connection temperatures by inspection. A voltage-drop survey of the power and control paths <em>while hot and loaded</em> exposes the joint that reads fine at 9 A.M.: one lug whose drop climbs as the run continues. Found: a deteriorating disconnect contact, heating itself open at sustained load.</p>
<p><strong>Documentation discipline.</strong> Every visit's readings — times, temperatures, voltages, currents — were logged even when 'nothing was wrong.' The pattern that solved the case lived in the log, not in any single reading. Intermittents are a war of records; the technician with the notebook wins it.</p>
<div class="callout"><strong>Key idea:</strong> If a fault keeps office hours, keep them too: reproduce its conditions (heat, load, runtime, vibration), monitor live while it fails, and log everything on the visits when it doesn't.</div>`
    },
    {
      heading: "Case 4: The Fuse That Kept Dying (Rub-Out Short)",
      html: `
<p><strong>The call:</strong> no cooling; the board's control fuse is blown. A fresh fuse blows the instant a cooling call starts — but heating has worked all winter. The homeowner has a small pile of dead fuses from a helpful neighbor.</p>
<p><strong>Method at work.</strong> Module 7's rule applies with force: a fuse that blows <em>on a specific call</em> indicts the path energized only by that call — here, the Y path out to the outdoor unit's contactor coil. Feeding more fuses is not testing. Power off; the path is isolated into segments: board alone, thermostat cable run, outdoor coil circuit. Continuity testing segment by segment (Module 11's half-splitting with an ohmmeter, power off) finds the guilty segment: the cable/outdoor run, where one conductor shows continuity to common with everything disconnected.</p>
<p>Physical inspection along that segment finds the author: the control cable, unprotected where it passes the outdoor unit's cabinet edge, has chafed through its insulation over years of vibration, and the Y conductor kisses the grounded cabinet whenever the unit runs and vibrates. Cooling calls blew fuses; heating never energized that conductor, which is why winter was innocent.</p>
<p><strong>Repair and proof:</strong> the damaged cable section is replaced, rerouted, and protected at the penetration; coil verified healthy; one correct fuse installed; a full cooling call runs clean. The pile of dead fuses is explained to the customer as evidence, not bad luck.</p>
<div class="callout"><strong>Key idea:</strong> A blown fuse is a witness with one sentence: 'the short is in what I feed.' Listen the first time — isolate segments with the power off instead of interviewing it again with another fuse.</div>`
    },
    {
      heading: "Case 5: Two Faults, One Ticket (The Layered No-Cool)",
      html: `
<p><strong>The call:</strong> no cooling, outdoor unit completely silent — no hum, no fan, nothing. The experienced trap in this case is its obviousness: the first fault found will be real, and fixing it will not finish the call.</p>
<p><strong>Method at work.</strong> Source checks: line voltage present at the disconnect, absent at the contactor's line side — a fuse in the unit's disconnect is open. Easy fault, honestly found. But method (Module 11) requires asking why a fuse opened before simply replacing it. While inspecting the load side for the fuse's reason, the second fault shows itself: the contactor's contacts are badly burned — one pole's contact face eroded to the point of unreliable closure (Module 1's voltage-drop suspect in visible form) — a condition that had been abusing the compressor's starts, and the likely story behind the event that took the fuse.</p>
<p>Replace the fuse without the contactor and the unit 'works' — into the arms of its next failure, with a compressor being started through a dropping, arcing pole. Replace both with the cause understood, then prove: voltage-drop across each new contactor pole under load ≈ 0 V, starting clean, full cycle run, currents balanced against expectations.</p>
<p><strong>The discipline generalizes:</strong> faults travel in families — a cause and its damage, a weakness and the stress it invites. Whenever you find a fault, spend one deliberate minute asking 'what did this fault do to its neighbors, and what did its neighbors do to it?' That minute is the difference between a repair and the first installment of a repair.</p>
<div class="callout"><strong>Key idea:</strong> Finding a fault ends a search, not a call. Finish every diagnosis with the neighbor check — causes damage components, and damaged components cause events; fix the family, not just the loudest member.</div>`
    }
  ],
  keyTerms: [
    { term: "Hard fault", def: "A fault that is present continuously and can be reproduced on demand — the easiest class to diagnose." },
    { term: "Intermittent fault", def: "A fault that appears only under certain conditions (heat, load, vibration, time) and vanishes between events." },
    { term: "Thermal intermittent", def: "An intermittent caused by temperature: expansion or self-heating opening a marginal connection when hot and remaking it when cool." },
    { term: "Chattering contactor", def: "A contactor rapidly cycling at its pull-in boundary because coil voltage sags under load — a report about the supply path, not the contactor." },
    { term: "Rub-out (chafe) short", def: "A short created when vibration wears conductor insulation against a cabinet edge or frame until conductors or ground meet." },
    { term: "Segment isolation", def: "Disconnecting a circuit into sections and testing each with power off to find which segment contains a short or open." },
    { term: "Call-specific fault", def: "A fault that occurs only on one operating call (e.g., blows the fuse only on cooling), indicting the path unique to that call." },
    { term: "Fault logging", def: "Recording times, conditions, and measurements across visits so an intermittent's pattern becomes visible." },
    { term: "Stress the fault", def: "Deliberately reproducing an intermittent's trigger conditions (full load, heat, runtime) during a visit while monitoring live values." },
    { term: "Layered (multi-) fault", def: "Two or more faults on one call, typically a cause and the damage it produced; fixing only one schedules the next failure." },
    { term: "Neighbor check", def: "The deliberate post-diagnosis question: what did this fault damage, and what damaged it?" },
    { term: "Victim component", def: "A component blamed for a symptom it is reporting rather than causing — e.g., a contactor chattering from low coil voltage." },
    { term: "Self-heating fault", def: "A bad connection whose own I²R heating worsens its contact as load persists — a fault that grows during each run." },
    { term: "Proven repair (case standard)", def: "A repair verified by re-running the original complaint conditions in full with healthy numbers re-measured." },
    { term: "Hum-and-trip pattern", def: "A motor (classically a compressor with a weak run capacitor) that hums on a start attempt and is silenced by its overload, retrying as it cools." },
    { term: "Evidence chain", def: "The ordered set of measurements that convicts a fault and acquits everything else — the form a good service write-up takes." }
  ],
  video: {
    title: "How to Find a Low Voltage Short in an HVAC System — Full Troubleshooting Lesson",
    embedUrl: "https://www.youtube.com/embed/9Hvqmf0idyE",
    note: "A full-length lesson on the Case 4 problem: how low-voltage shorts behave, why fuses blow, and how to isolate the short by sections — thermostat wiring, grounds, and loads — instead of feeding the circuit fuses. It also revisits transformer VA, which ties back to Case 2's sagging control voltage.",
    more: [
      { title: "Finding Low Voltage Shorts", url: "https://www.youtube.com/watch?v=A4u6fW5TN6U" },
      { title: "Troubleshoot a Grounded (Shorted to Ground) Compressor", url: "https://www.youtube.com/watch?v=FKuaZdwuhYg" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> (Case 1 variant) A PSC compressor hums and trips its overload on every start attempt. The run capacitor measures within its marked tolerance; winding readings satisfy the sum rule; no ground fault. The shaft/load cannot be inspected directly (hermetic). State the two remaining electrical suspects and the test for each.</p>",
      solution: "<p><strong>Answer:</strong> Suspect 1: <strong>voltage at the compressor under starting load</strong> — a drop through the contactor pole or connections (Module 1) can starve starting torque; test by measuring voltage at the load side of the contactor during a start attempt and voltage-dropping the pole. Suspect 2: <strong>the overload/starting environment itself</strong> — e.g., the compressor being asked to start against unequalized pressure from short cycles (a control/timing issue), tested by allowing a full off-period for pressures to equalize and retrying under observation. Both are electrical-path causes consistent with good capacitor and windings.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> (Case 2 variant) Coil voltage measures 24 V with the thermostat wire disconnected at the air handler, but 17 V at the coil with everything connected and a call active. Explain why the first measurement was worthless and what the second one starts.</p>",
      solution: "<p><strong>Answer:</strong> With the thermostat wire disconnected, the coil circuit carries no current, so nothing drops voltage anywhere (E = I × R, I = 0) — 24 V at rest is guaranteed and meaningless. The loaded 17 V reading is the real world: 7 V is being consumed by series resistance in the path (contacts, splice, undersized/overloaded source). It starts a voltage-drop survey of each path element under load to find where the 7 V lives.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> (Case 3 variant) An intermittent cuts out only after 2+ hours of continuous run on hot days and always recovers overnight. Propose the mechanism in one paragraph, then design the monitoring you would set up on the next visit.</p>",
      solution: "<p><strong>Answer:</strong> Mechanism: a marginal connection or contact self-heats under sustained load (P = I²R concentrated at the defect); expansion and rising resistance grow the drop until the protected device or coil gives up; overnight cooling remakes the contact and resets the story. Monitoring: arrive for the hot part of the day, run the system continuously under full load, and log coil voltage / motor current / voltage-drop across each power-path element at intervals — watching for the drop that climbs as the run lengthens — so the failure, when it occurs, is captured in numbers rather than reported secondhand.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> (Case 4 variant) The control fuse blows only on fan (G) calls — heating and cooling calls are fine. Which segments do you isolate, and why does the call pattern acquit the transformer and contactor coil?</p>",
      solution: "<p><strong>Answer:</strong> Isolate the path energized uniquely by a G call: the thermostat's G output and conductor, the fan relay/board fan input circuit, and any accessory wired into that call. The transformer is acquitted because it feeds W and Y calls without blowing — a transformer-side or common-path short would punish every call. The contactor coil is acquitted because it belongs to the Y call, which runs cleanly. Call-specific evidence is a free half-split: use it.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> (Case 5 variant) You repair a no-cool by replacing an open disconnect fuse and the unit runs. Write the two specific checks the neighbor rule still requires before you close the panel, and what each could reveal.</p>",
      solution: "<p><strong>Answer:</strong> Check 1: <strong>voltage-drop every power-path element under load</strong> — especially the contactor poles — a drop reveals the eroded contact that likely provoked the fuse event and is quietly abusing every start. Check 2: <strong>running currents against nameplate expectations (and balance, if three-phase)</strong> — abnormal current reveals the straining load or supply problem that the fuse may have been reporting. Both checks take minutes; both decide whether this was a repair or an installment.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Summarize the five cases as five one-line rules a new technician can carry.</p>",
      solution: "<p><strong>Sample answer:</strong> Case 1: 'No-cool is a symptom — prove the electrical story before touching refrigerant.' Case 2: 'A chattering coil is reporting its voltage — measure it loaded, at the coil.' Case 3: 'Intermittents keep conditions; reproduce the conditions and log everything.' Case 4: 'A blown fuse names the path it feeds — isolate segments, never feed fuses.' Case 5: 'Every fault has neighbors — fix the family, not the loudest member.'</p>"
    }
  ],
  quiz: [
    {
      q: "In Case 1, the observation that the outdoor fan ran normally on the same call was valuable because it:",
      choices: ["Proved the compressor was good", "Showed the control circuit and contactor coil path were working, narrowing suspicion to the compressor's starting/running components", "Meant the capacitor served both motors", "Ruled out any voltage problem anywhere"],
      answer: 1,
      explanation: "Correct: (b). Fan and compressor share the cooling call's control path; the fan's normal run acquits that shared path and focuses testing on the compressor circuit itself (capacitor, windings). (a) The compressor was, in fact, the victim of a failed capacitor — not proven good. (c) The fan has its own capacitor arrangement; sharing is not implied. (d) A voltage problem local to the compressor's start components was precisely the cause — the observation narrowed, it did not eliminate wholesale."
    },
    {
      q: "A contactor chatters because:",
      choices: ["Its contacts are too clean", "Its coil voltage sags near the drop-out point under load, so the armature cannot hold firmly", "The overload is set too high", "The thermostat is set below room temperature"],
      answer: 1,
      explanation: "Correct: (b). Chatter is a coil starving at the boundary between pull-in and drop-out — a supply-path problem (resistance, overload, failing source). (a) Clean contacts are a goal, not a cause. (c) Overload settings govern tripping on overcurrent, not chatter. (d) A satisfied thermostat simply opens the call; it does not modulate voltage."
    },
    {
      q: "The most productive first move on an intermittent that 'never fails when the tech is there' is to:",
      choices: ["Replace the most common failure part for that model", "Interrogate the pattern — when, how hot, how long running — then reproduce those conditions while monitoring live values", "Tell the customer to call back when it is failing and hope", "Install a larger fuse so it rides through"],
      answer: 1,
      explanation: "Correct: (b). Pattern first, then stress the fault under observation, with logging between visits. (a) Guessing parts into an intermittent corrupts the evidence and the budget. (c) Pure hope, without logging or a monitoring plan, wastes the next failure too. (d) Upsizing protection is prohibited thinking in every module of this course — it endangers the equipment the fuse guards."
    },
    {
      q: "A fuse blows instantly on cooling calls but never on heating calls. The evidence says the short is:",
      choices: ["In the transformer primary", "In a path energized only by the cooling call — the Y path and its load", "In the heating circuit", "Everywhere in the control system"],
      answer: 1,
      explanation: "Correct: (b). Call-specific blowing is a built-in half-split: components shared by all calls would blow on heat too. (a) A primary-side fault would not wait politely for a cooling call. (c) Heating runs clean — its path is acquitted by its own operation. (d) 'Everywhere' ignores the discriminating evidence the call pattern provides."
    },
    {
      q: "In Case 5, simply replacing the open fuse would have been incomplete because:",
      choices: ["Fuses must always be replaced in pairs", "The burned contactor that helped cause the event would remain, abusing every start until the next failure", "The new fuse would be the wrong color", "Disconnect fuses cannot be replaced in the field"],
      answer: 1,
      explanation: "Correct: (b). The fuse was the event; the eroded contactor pole was family — cause and damage traveling together. (a) No such pairing rule exists. (c) Fuse color coding is not the issue. (d) Disconnect fuses are routine field replacements — the point is investigating their reason for opening."
    },
    {
      q: "A connection that worsens as current flows through it does so because:",
      choices: ["Current polishes contact surfaces", "Its resistance converts power to heat (P = I²R), and heat further degrades the contact — a self-feeding cycle", "Voltage decreases resistance over time", "The magnetic field tightens the joint"],
      answer: 1,
      explanation: "Correct: (b). Self-heating is the engine of both burned terminals and thermal intermittents: drop → heat → oxidation/expansion → more resistance → more heat. (a) Current through a bad joint degrades, not polishes. (c) Voltage does not heal resistance. (d) Magnetic forces do not maintain mechanical joints."
    },
    {
      q: "While hunting a rub-out short, the correct instrument posture is:",
      choices: ["Feed fresh fuses until the short welds itself visible", "Power off, isolate the circuit into segments, and test each segment's continuity to find the guilty one", "Jumper the fuse and watch for smoke", "Measure line voltage at the outdoor unit"],
      answer: 1,
      explanation: "Correct: (b). Segment isolation with an ohmmeter locates the short safely and cheaply — and preserves the evidence. (a) Each blown fuse is a small fault-energy event at the defect, worsening it. (c) Jumpering protection is dangerous and prohibited. (d) Line voltage presence says nothing about a low-voltage short's location."
    },
    {
      q: "The single habit that unifies all five cases is:",
      choices: ["Always replace the capacitor first", "Measure before replacing, and let each measurement — not the symptom's popularity — choose the next step", "Start with the refrigerant circuit", "Trust the first fault code as final"],
      answer: 1,
      explanation: "Correct: (b). Every case was solved by a measurement sequence: loaded voltages, drops, sum-rule windings, segment continuity, logged patterns. (a) The capacitor was guilty once in five. (c) No case here was a refrigerant fault. (d) Codes are evidence (Module 9), never verdicts — and several of these units offered none."
    }
  ],
  studyGuide: `
<h3>Module 12 — Case Studies: Quick Reference</h3>
<p><strong>Case 1 — hum &amp; trip:</strong> fan runs, compressor hums and overloads → control side acquitted; test run capacitor (against marked rating/tolerance) and windings (sum rule + ground) before anything refrigerant.</p>
<p><strong>Case 2 — chatter:</strong> a coil reporting its supply. Measure coil voltage loaded, drop-test the whole path, audit the transformer VA budget. Replacing the contactor treats the victim.</p>
<p><strong>Case 3 — thermal intermittent:</strong> pattern → reproduce conditions (heat, load, runtime) → monitor live and log everything, including the 'nothing wrong' visits. Self-heating joints (P = I²R) keep afternoon hours.</p>
<p><strong>Case 4 — fuse on one call only:</strong> the call pattern is a free half-split. Power off, isolate segments, continuity-test; hunt chafe/rub-out where cables meet cabinets and vibration lives. Never feed fuses.</p>
<p><strong>Case 5 — layered faults:</strong> an open fuse is an event; find its reason (voltage-drop the contactor poles, check currents) before closing the panel. Fix the family.</p>
<p><strong>Course rule, final form:</strong> interview → verify → source → divide → repair the cause → prove it under the original conditions, with numbers.</p>
`
};
