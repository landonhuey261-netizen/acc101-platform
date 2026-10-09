// HVAC 111 - Module 7: Using the Multimeter
module.exports = {
  number: 7,
  slug: "using-the-multimeter",
  title: "Using the Multimeter",
  estTime: "3–4 hours",
  objectives: [
    "Select the correct meter function, range, and lead jacks for voltage, resistance, capacitance, and current measurements.",
    "Measure AC and DC voltage safely on live control and line circuits, in parallel, with a properly CAT-rated meter.",
    "Perform resistance and continuity tests correctly: power off, component isolated, meter zero/lead resistance accounted for.",
    "Measure capacitance (µF) and compare readings against printed ratings to pass or condemn capacitors.",
    "Measure current safely with a clamp around a single conductor, and interpret inrush vs. running current.",
    "Recognize misleading readings — ghost voltage, meter loading, wrong jack — and verify before diagnosing."
  ],
  sections: [
    {
      heading: "Know Your Meter: Functions, Jacks, and Ratings",
      html: `
<p>A <strong>multimeter</strong> combines several instruments: voltmeter, ohmmeter, capacitance meter, and (with its clamp or inline leads) ammeter. Errors with meters are almost never about reading digits — they are about setup. Before any measurement, run the mental checklist: <strong>function</strong> (what quantity?), <strong>leads</strong> (which jacks?), <strong>range</strong> (auto or manual — on manual, start high), and <strong>circuit state</strong> (must this circuit be live or dead for this test?).</p>
<p>Lead jacks matter physically: the black lead lives in <strong>COM</strong>; the red lead goes in the <strong>VΩ</strong> jack for voltage, resistance, continuity, and capacitance. Inline current measurement uses a separate high-current jack on many meters — and leaving the red lead in that current jack then measuring voltage puts a near-short across the source. That single habit error destroys meters and can injure the user. HVAC current work overwhelmingly belongs on the <strong>clamp</strong> (Section 5), which avoids breaking the circuit entirely.</p>
<p>Ratings are safety engineering, not marketing. The <strong>CAT rating</strong> (measurement category) states the transient energy environment the meter and leads are built to survive: use a meter rated for the environment you are in (service panels and outdoor units demand higher categories than bench work). Inspect leads before use — cracked insulation or a nicked conductor disqualifies them. And remember Module 1: the meter participates in live-dead-live verification, so its trustworthiness is a safety property, not a convenience.</p>
<div class="callout"><strong>Key idea:</strong> Most meter disasters follow one script: leads in the current jack + voltage measurement. Build the reflex — every time you pick up the meter, look at the jacks before you look at the dial.</div>`
    },
    {
      heading: "Measuring Voltage: Parallel, Live, and Honest",
      html: `
<p>Voltage is a <strong>difference between two points</strong>, so the voltmeter connects <strong>across</strong> (in parallel with) the component or between the two conductors of interest. Set V with the correct flavor — AC (V~) for line and control power, DC (V⎓) for board test points and batteries — leads in COM and VΩ, then touch the probes to the two points. The circuit stays connected and operating; that is the point of voltage testing: it observes the system <em>working</em>.</p>
<p><strong>Worked Example 1 — the across-a-switch test.</strong> Series control string, call active, coil dead. Measure across the pressure switch: 24 V. A closed switch must drop ~0 V (no resistance, no drop), so 24 V across it means it is <strong>open</strong> (or its terminals are not actually in the circuit). Measure across the coil: 0 V confirms no voltage ever arrived. Two voltage readings, fault located, power never turned off. Now the same measurement discipline on the line side: L1–L2 = 240 V at the disconnect load side proves power delivery; L1 to ground and L2 to ground (each ≈120 V on a typical grounded 240 V split-phase supply) can help identify which leg is lost when L1–L2 reads 0.</p>
<p>Two honesty checks. First, <strong>ghost voltage</strong> (Module 1): a floating conductor near live wiring can show phantom volts on a high-impedance meter; use the LoZ function if your meter has one to collapse ghosts before concluding a circuit is energized. Second, <strong>loaded vs. unloaded</strong>: a corroded connection may pass a no-load voltage test and collapse under load — measure with the circuit operating and loads connected whenever the question is "does it work," not merely "is voltage present somewhere." A transformer reading 27 V idle and 19 V loaded (Module 4) is the textbook case.</p>
<div class="callout"><strong>Key idea:</strong> Voltage across a closed contact ≈ 0 V; voltage across an open point in a live series string = full supply. That single contrast locates most control faults. Voltage tests happen live, in parallel, and under load when it matters.</div>`
    },
    {
      heading: "Resistance and Continuity: Power OFF, Component Isolated",
      html: `
<p>The ohmmeter works by pushing its <em>own</em> small test current through the component and computing resistance from the response. Two rules follow absolutely: the circuit must be <strong>de-energized</strong> (external voltage fights the meter, corrupts the reading, and can destroy the meter or injure you), and the component should be <strong>isolated</strong> — at least one end disconnected — because parallel paths through the rest of the circuit will lower and falsify the reading.</p>
<p>Procedure: lock out and prove dead (Module 1); disconnect one lead of the component; zero out lead resistance by touching the probes together (note the small reading, often a few tenths of an ohm, and subtract it, or use REL mode); then measure. Interpret: a healthy coil or winding reads a definite value in its expected range; <strong>OL</strong> = open (broken path); <strong>near 0 Ω</strong> on a component that should read tens of ohms = shorted. On motor windings, also test each terminal to ground: any continuity to ground (beyond a deliberate ground connection) means a grounded winding — the motor is done.</p>
<p><strong>Continuity mode</strong> is the ohmmeter's quick-pass cousin: it beeps when resistance is below a threshold, perfect for checking fuses, closed switches, and unbroken wires at speed. Its virtue is speed, not precision — a beep says "low resistance," not "this contact drops 0.0 V under load." A pitted contact can beep cheerfully and still fail under current (Module 5); when the diagnosis needs certainty, measure the actual resistance or the voltage drop under load.</p>
<p><strong>Worked Example 2.</strong> A contactor coil suspected open: power off, one coil lead lifted, probes across the coil → OL. Swap in certainty: test your meter on a known resistor (or short the probes — near 0) to prove the meter can read, then re-test → still OL. Coil is open; the relay can never pull in, which matches the symptom (24 V present at coil terminals, no click). Diagnosis closed with two measurements and one verification.</p>
<div class="callout"><strong>Common mistake:</strong> Measuring resistance in-circuit and 'discovering' a shorted component that is actually a parallel path through a transformer winding or another coil. If a reading looks impossible, isolate and re-measure before condemning parts.</div>`
    },
    {
      heading: "Measuring Capacitance: The µF Verdict",
      html: `
<p>Modern HVAC meters measure capacitance directly. Procedure matters as much as the reading: shut down and lock out; <strong>discharge the capacitor</strong> through a resistor (Module 4); remove the wires from the capacitor terminals (note/photograph their positions first — C, FAN, HERM on duals); set the meter to capacitance (µF / MFD); touch probes to the terminals (on a dual, measure C-to-FAN and C-to-HERM separately); wait for the reading to settle.</p>
<p>Judge the number against the <strong>printed rating and its tolerance</strong>. A 45 µF section reading 44 µF is healthy. The same section at 38 µF is roughly 15% low — weak; at 21 µF (Module 4's example) it is condemning evidence that fully explains hard starting and high amps. At 0 µF or OL, the capacitor is open and finished. A reading that will not stabilize, or one wildly ABOVE rating, usually means the part was not fully discharged or the probes are also touching a parallel path — redo the setup before believing it.</p>
<p>What capacitance testing cannot see: a capacitor can read acceptable µF at meter voltage and still break down under working voltage and heat. That is why the µF verdict combines with <strong>symptoms and current draw</strong>: if µF is in spec but the motor still draws high current with correct voltage and a free shaft, look beyond the capacitor (windings, bearings, load). And in the other direction — never let "it looks fine" override a µF reading at half of rating. The meter's whole job in this course is to replace opinions with numbers.</p>
<p><strong>Worked Example 3.</strong> Dual cap marked 35/5 µF. C–HERM reads 33.9 µF (healthy); C–FAN reads 1.2 µF (failed). Predicted symptoms before you ever power up: compressor runs fine; condenser fan fails to start or runs weakly and hot. Test outcome and symptom map agree — replace the can, restore wires to the photographed terminals, verify fan amps after startup.</p>
<div class="callout"><strong>Key idea:</strong> Discharge → isolate → measure → compare to print. Four steps, every time. Skipping discharge endangers you; skipping isolation corrupts the number; skipping the comparison wastes the measurement.</div>`
    },
    {
      heading: "Clamp Amperage and the Complete Troubleshooting Kit",
      html: `
<p>The <strong>clamp meter</strong> measures current without opening the circuit: its jaws form a magnetic core around a conductor and sense the field the current creates. Non-negotiable technique: clamp around <strong>one conductor only</strong>. Clamp both legs of a circuit and their fields cancel — a confident 0.0 A lie on a live, working circuit. Center the conductor in the jaws, close them fully, and keep other conductors away from the jaw area.</p>
<p>Interpretation patterns: <strong>running amps</strong> are compared to the unit's nameplate/rated load amps under the present conditions — moderately loaded systems run below maximum ratings, so 'below nameplate' is normal while 'above rating' is always a finding. <strong>Inrush</strong> (many meters have an INRUSH function) captures the brief locked-rotor surge at startup — valuable when a breaker trips only at the instant of starting. A compressor that draws locked-rotor amps and <em>stays</em> there is not running at all: it is a powered, stationary heater until its overload saves it.</p>
<p><strong>Worked Example 4 — combining the kit.</strong> No-cool call. Voltage: 240 V at contactor line side, 0 V at load side, coil terminals show 24 V, coil never clicks. Resistance (power off): coil reads OL → open coil → contactor cannot pull in regardless of contacts. One call exercised voltage, resistance, and logic. That is the template for the course lab: voltage proves supply, resistance proves components, clamp current proves performance — and each measurement is taken in its correct circuit state (live for volts, dead for ohms, running for amps).</p>
<p>This module is the practical core of NATE Core's basic-electrical domain and of the Ready-to-Work tools and electrical-safety topics: employers and examiners alike expect a technician who reaches for the right function, in the right state, with the leads in the right jacks — automatically.</p>
<div class="callout"><strong>Key idea:</strong> Volts live, ohms dead, amps running, µF discharged-and-isolated. Four measurements, four circuit states. Mixing states is how meters die and diagnoses go wrong.</div>`
    }
  ],
  keyTerms: [
    { term: "Multimeter", def: "A combination test instrument measuring voltage, resistance, continuity, capacitance, and (with clamp or leads) current." },
    { term: "Clamp meter", def: "A meter whose jaws sense the magnetic field around a single conductor to measure current without breaking the circuit." },
    { term: "CAT rating", def: "Measurement-category rating indicating the transient-energy environment a meter and its leads are designed to survive safely." },
    { term: "COM jack", def: "The common (black lead) jack used for nearly all measurements." },
    { term: "VΩ jack", def: "The red-lead jack for voltage, resistance, continuity, and capacitance measurements." },
    { term: "Continuity test", def: "A fast resistance check that beeps below a threshold; proves a low-resistance path, not a perfect one." },
    { term: "OL reading", def: "Over-limit/open: resistance beyond the meter's range — on a component, an open circuit." },
    { term: "LoZ (low impedance)", def: "A meter voltage mode that loads the circuit slightly to collapse induced ghost voltages and reveal true energy." },
    { term: "Ghost voltage", def: "A phantom voltage induced on a floating conductor by nearby live wiring; reads on high-impedance meters but carries no real energy." },
    { term: "Inrush current", def: "The brief high current at motor start (locked-rotor surge) before the motor reaches speed." },
    { term: "Running (rated load) amps", def: "The current a motor or unit is rated to draw at full load; the comparison standard for clamp measurements." },
    { term: "Isolated measurement", def: "Testing a component with at least one end disconnected so parallel circuit paths cannot corrupt the reading." },
    { term: "Lead resistance", def: "The small resistance of the test leads themselves; zero it out (REL mode) or subtract it for low-Ω accuracy." },
    { term: "Auto-ranging", def: "Meter operation that selects the measurement range automatically; manual ranging starts high to protect the meter and user." },
    { term: "Grounded winding", def: "A motor winding fault with continuity from the winding to the motor frame/ground; condemns the motor." },
    { term: "Test under load", def: "Measuring a live, operating circuit so voltage drops and weaknesses appear that no-load tests hide." },
    { term: "Discharge (capacitor)", def: "Safely bleeding a capacitor's stored charge through a resistor before handling or testing it." },
    { term: "Capacitance mode (µF)", def: "The meter function that measures a capacitor's microfarads for comparison with its printed rating." }
  ],
  video: {
    title: "How to Measure Voltage, Resistance, Capacitor & Current Using Multimeter and Clamp Meter.",
    embedUrl: "https://www.youtube.com/embed/85kTqERPYxk",
    note: "A step-by-step practical tutorial covering exactly this module's four measurements — AC/DC voltage, resistance, capacitor testing, and clamp-meter current — with attention to safe technique. Compare the order of operations in each demo with this module's rule: volts live, ohms dead, amps running, µF discharged and isolated.",
    more: [
      { title: "HVAC: How To Check a DUAL CAPACITOR With A Multimeter (HVAC Training - Dual Run Capacitor)", url: "https://www.youtube.com/watch?v=m2wHS4uJUfU" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> For each test, state the meter function, lead jacks, and required circuit state: (a) 24 V at a contactor coil during a call; (b) contactor coil resistance; (c) dual capacitor µF; (d) compressor running amps.</p>",
      solution: "<p><strong>Solution:</strong> (a) AC volts, COM + VΩ, circuit LIVE and calling — voltage is measured across the coil in parallel. (b) Ohms, COM + VΩ, power OFF and locked out, one coil lead lifted. (c) Capacitance (µF), COM + VΩ, power OFF, capacitor discharged through a resistor and wires removed. (d) Clamp amps, jaws around ONE compressor lead, unit RUNNING — inrush function first if the question is startup behavior.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> You clamp both conductors of a condenser's power whip at once and read 0.0 A while the unit audibly runs. Explain the reading and the correct technique.</p>",
      solution: "<p><strong>Explanation:</strong> Step 1: The two conductors carry equal currents in opposite directions, so their magnetic fields cancel inside the jaws — net sensed field ≈ 0. Step 2: The reading is an artifact, not a measurement. Step 3: Clamp around a single conductor (one leg only), centered in fully closed jaws, and re-read.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A fuse beeps 'good' on continuity but the circuit still fails, and voltage testing shows 24 V entering one side of the fuse holder and 0 V leaving it under load. Reconcile the two results.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Continuity at meter-level current proves only a low-resistance path exists — a fuse element (or holder contact) can be partially failed/corroded enough to pass milliamps yet drop all voltage at working current. Step 2: The voltage test under load is the functional truth: power is being lost at the fuse/holder. Step 3: Inspect the holder clips and fuse ends for corrosion or looseness; replace the fuse with the correct type/rating and retest under load.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A run capacitor rated 10 µF reads 6.1 µF after proper discharge and isolation. The motor still starts, so the installing tech wants to leave it. Give the verdict and reasoning.</p>",
      solution: "<p><strong>Verdict: replace it.</strong> Step 1: 6.1 µF is 39% below rating — far outside any standard tolerance. Step 2: Reduced phase shift means the motor works harder for the same output: higher current, more heat, shorter motor life, and starting that will fail under the next hard condition (hot day, low voltage, high head). Step 3: 'It starts on the bench today' is not a specification. Replace with 10 µF at equal-or-higher voltage.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Winding checks on a compressor (power off, wires removed): C–R = 1.5 Ω, C–S = 4 Ω, S–R = 5.5 Ω, and C to ground reads 0.4 Ω. Interpret each result and give the overall verdict.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Winding sums check out: 1.5 + 4 = 5.5 ✓ — the windings are continuous and consistent with each other. Step 2: But C-to-ground at 0.4 Ω is a solid ground fault — a winding is shorted to the shell. Step 3: Verdict: the compressor is condemned regardless of the pretty winding math. A grounded hermetic compressor is replaced, not repaired, and the system will need the manufacturer's burnout cleanup procedure.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Describe the exact steps, in order, to test whether a disconnect's load side is truly dead before you open a unit — including how you know your meter is trustworthy.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: PPE on; meter on AC volts, leads in COM and VΩ, leads inspected. Step 2: LIVE — test the meter on a known live source (line side of the open disconnect or a known receptacle); record the correct reading. Step 3: DEAD — test load side phase-to-phase and each phase to ground; confirm zero (or identify any ghost reading with LoZ). Step 4: LIVE — retest the known live source to prove the meter survived the dead test. Step 5: Only now treat the circuit as proven dead; apply LOTO locks/tags per procedure.</p>"
    }
  ],
  quiz: [
    {
      q: "Resistance must be measured with the circuit de-energized because:",
      choices: ["Ohmmeters are more accurate in the dark", "The meter supplies its own test current; external voltage corrupts the reading and can damage the meter or injure the user", "Resistance only exists when power is off", "Live circuits have infinite resistance"],
      answer: 1,
      explanation: "Correct: (b). The ohmmeter is an active instrument sending its own current; foreign voltage fights it. (a) Lighting is irrelevant. (c) Resistance is a property of the component whether powered or not — it just cannot be measured by this method live. (d) Live circuits have their normal resistances; the problem is measurement method, not existence."
    },
    {
      q: "To measure the current a condenser fan draws while running, you should:",
      choices: ["Set the meter to ohms and touch the motor leads", "Clamp the meter jaws around one power conductor with the unit running", "Clamp around both conductors for a stronger signal", "Disconnect the motor and measure its resistance instead"],
      answer: 1,
      explanation: "Correct: (b). A clamp measures the field of a single conductor on a live, running circuit. (a) Ohms on a live circuit is dangerous and meaningless. (c) Both conductors' fields cancel — the classic 0 A lie. (d) Resistance can support a diagnosis but does not tell you running current."
    },
    {
      q: "A capacitor rated 25 µF measures 14 µF (discharged and isolated). The correct conclusion is:",
      choices: ["Healthy — any reading above half is fine", "Weak/failed — roughly 44% below rating, far outside tolerance; replace it", "The meter must be broken", "It should be recharged with the ohmmeter"],
      answer: 1,
      explanation: "Correct: (b). Capacitance near half of rating cannot supply the designed phase shift; motors labor and overheat. (a) No standard tolerance forgives a 44% loss. (c) Verify the meter if you doubt it, but a properly taken reading stands. (d) Ohmmeters do not recharge capacitors — and the part is condemned anyway."
    },
    {
      q: "In a live series control circuit, measuring the full 24 V ACROSS a closed pressure switch tells you:",
      choices: ["The switch is passing current normally", "The switch is actually open — a healthy closed switch drops ~0 V", "The transformer is oversized", "The meter leads are reversed"],
      answer: 1,
      explanation: "Correct: (b). Voltage appears across open points; closed contacts have no drop to measure. (a) A working closed switch reads ~0 V across itself. (c) Transformer size does not create a drop pattern like this. (d) AC voltage readings do not depend on lead polarity."
    },
    {
      q: "Which meter setup error creates a near-short circuit when measuring voltage?",
      choices: ["Using auto-ranging mode", "Leaving the red lead in the inline current (amps) jack while measuring voltage", "Holding probes by their insulated handles", "Selecting AC volts on an AC circuit"],
      answer: 1,
      explanation: "Correct: (b). The current jack is a very low resistance path — bridging it across a voltage source is nearly a dead short. (a), (c), and (d) are all correct, safe practice."
    },
    {
      q: "Before trusting an OL coil reading, a careful tech verifies the meter by:",
      choices: ["Shaking the meter", "Touching the probes together (should read ~0 Ω / continuity) or measuring a known resistor, proving the meter can read", "Setting the dial to volts", "Replacing the capacitor"],
      answer: 1,
      explanation: "Correct: (b). Same live-dead-live logic as voltage verification: prove the instrument on something known before condemning a part. (a) Shaking proves nothing and risks the meter. (c) Changing functions abandons the test. (d) Parts are replaced after verification, not instead of it."
    },
    {
      q: "Ghost voltage on a de-energized conductor is best identified by:",
      choices: ["Ignoring all readings under 120 V", "Using a low-impedance (LoZ) meter function — a ghost collapses under slight load, real voltage holds", "Measuring resistance on the live circuit", "Clamping both conductors"],
      answer: 1,
      explanation: "Correct: (b). LoZ distinguishes induced phantom voltage from an energized conductor. (a) Thresholds-by-habit can ignore real hazards. (c) Resistance on live circuits is prohibited practice. (d) Clamping measures current, not voltage identity."
    },
    {
      q: "A compressor clamps at locked-rotor-level amps and the reading does not fall after several seconds. This means:",
      choices: ["The compressor is running at peak efficiency", "The compressor is not actually turning — it is stalled/failed to start and will trip its overload", "The clamp is around both conductors", "The run capacitor is oversized"],
      answer: 1,
      explanation: "Correct: (b). Healthy starts pass through inrush in a fraction of a second to a few seconds; sustained LRA = a rotor that never turned (or instantly seized). (a) Efficiency is measured at running amps near rating, not at LRA. (c) Clamping both conductors reads ~0, not maximum. (d) Capacitor problems manifest through starting behavior, but the direct meaning of sustained LRA is 'not rotating — protect it and diagnose.'"
    }
  ],
  studyGuide: `
<h3>Module 7 — Using the Multimeter: Quick Reference</h3>
<p><strong>The four states rule:</strong> Volts = live & in parallel (across). Ohms/continuity = power OFF, locked out, component isolated (one lead lifted). µF = power OFF, capacitor discharged through a resistor, wires removed. Amps = clamp around ONE conductor, circuit running.</p>
<p><strong>Setup checklist every time:</strong> Function → leads in correct jacks (black COM, red VΩ for V/Ω/µF) → range (or auto) → circuit in the right state. Leads in the amps jack + voltage source = near-short: the classic meter-killer.</p>
<p><strong>Signature readings:</strong> ~0 V across a closed contact = healthy; full supply across a switch = that switch is open. Coil: definite Ω = alive, OL = open, ≈0 Ω = shorted. Any winding-to-ground continuity = grounded motor. Capacitance: compare to print — ~10%+ low is weak; half of rating is failed.</p>
<p><strong>Verification habit:</strong> Prove the meter on a known source/resistor before and after trusting a critical reading (live-dead-live logic). LoZ collapses ghost voltage. Test under load when the question is performance, not presence.</p>
<p><strong>Safety:</strong> CAT rating matched to the environment; inspect leads; treat every measurement setup as part of the LOTO discipline from Module 1.</p>
`
};
