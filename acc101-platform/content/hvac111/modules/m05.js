// HVAC 111 - Module 5: Switches, Relays & Contactors
module.exports = {
  number: 5,
  slug: "switches-relays-contactors",
  title: "Switches, Relays & Contactors",
  estTime: "3–4 hours",
  objectives: [
    "Define NO and NC contacts by their state with the coil de-energized, as diagrams draw them.",
    "Explain the separation between a relay's coil circuit and its contact circuit, including electrical isolation.",
    "Read pole/throw designations (SPST, SPDT, DPDT) and apply them to HVAC relays and contactors.",
    "Describe how a contactor differs from a relay in duty and typical HVAC application.",
    "Build simple relay logic: series coils for AND behavior, parallel paths for OR behavior, holding (seal-in) contacts.",
    "Diagnose common failures: open coils, pitted or welded contacts, and chattering caused by low coil voltage."
  ],
  sections: [
    {
      heading: "Contacts: NO, NC, and the De-Energized Convention",
      html: `
<p>A <strong>switch</strong> is any device that makes or breaks a circuit path. Switches are described by the state of their contacts <em>in the device's resting (de-energized, unactuated) condition</em> — this is the convention every diagram in Module 8 uses:</p>
<ul>
<li><strong>Normally open (NO):</strong> contacts are open at rest; actuating the switch (energizing the coil, reaching setpoint, pressing the button) closes them.</li>
<li><strong>Normally closed (NC):</strong> contacts are closed at rest; actuating the switch opens them.</li>
</ul>
<p>"Normally" never means "usually during operation" — it means the shelf state, power off, nothing calling. A thermostat's cooling contacts are NO: at rest (no call) they sit open; a call closes them. A high-limit switch is NC: it sits closed during all normal operation and opens only on over-temperature. Confusing those two sentences is the most common beginner error in reading schematics, and it inverts every diagnosis built on it.</p>
<p>Switches also carry <strong>poles</strong> (how many separate circuits one device switches) and <strong>throws</strong> (how many output positions each pole can connect to). SPST = single-pole single-throw (a plain on/off). SPDT = single-pole double-throw (a common terminal that connects to one of two outputs — the classic changeover). DPDT = two SPDTs moving together. A 24 V fan relay in a residential air handler is commonly an SPDT or DPDT device: one throw starts the blower for cooling, the other path serves heating or off states, all from one coil.</p>
<div class="callout"><strong>Key idea:</strong> State is named at rest. NO + coil energized = closed. NC + coil energized = open. Every ladder diagram you will ever read is drawn in the de-energized state — read it that way.</div>`
    },
    {
      heading: "Relays: A Coil That Commands Separate Contacts",
      html: `
<p>A <strong>relay</strong> is an electrically operated switch. Current through its <strong>coil</strong> creates a magnetic field that pulls an armature, moving the <strong>contacts</strong>. The essential insight: <strong>the coil circuit and the contact circuit are electrically separate.</strong> The coil might be powered by 24 V control voltage while its contacts switch 120 V or 240 V to a motor — the two circuits share magnetism, not conductors. This isolation lets a safe, low-voltage, low-current control circuit command dangerous line-voltage loads, and lets one small signal operate several independent circuits at once through multiple poles.</p>
<p><strong>Worked Example 1 — coil arithmetic.</strong> A relay coil rated 24 V measures 96 Ω. Coil current: I = 24 ÷ 96 = <strong>0.25 A</strong>; coil power: P = 24 × 0.25 = <strong>6 VA</strong> of transformer budget (Module 4's VA accounting counts every coil like this). The contacts, meanwhile, might be rated to switch 10 A at 240 V — a 2,400 W load commanded by a 6 VA whisper. That ratio is the entire economic reason relays exist.</p>
<p>What to check on any relay: <strong>coil voltage</strong> (must match the control supply — a 24 V coil on 120 V burns out; a 120 V coil on 24 V never pulls in), <strong>contact rating</strong> (amps and voltage the contacts can switch, with motor loads derated for inrush), and <strong>contact arrangement</strong> (NO, NC, or changeover per pole). Ice-cube relays in clear cases let you watch the armature move — a genuinely useful diagnostic: coil powered but armature still = mechanical or coil failure; armature pulled in but load dead = contact failure.</p>
<div class="callout"><strong>Common mistake:</strong> Measuring a good coil resistance and declaring the relay good. The coil is half the device. Contacts pit, burn, and weld on the other half — verify the contact circuit separately, under its own voltage, with the coil energized and de-energized.</div>`
    },
    {
      heading: "Contactors: Relays Built for Heavy, Repetitive Duty",
      html: `
<p>A <strong>contactor</strong> is a relay engineered for power: large contacts with arc-resistant material, a beefy magnetic circuit, and construction meant to switch motor loads thousands of times. In residential and light-commercial HVAC, the condensing-unit contactor is the emblematic example: a 24 V coil, and one or two poles of contacts switching 240 V to the compressor and (through one pole or a shared connection) the condenser fan.</p>
<p>Anatomy to know: the <strong>coil</strong> (usually bottom or side-mounted, replaceable on larger units), the <strong>movable armature and contact bridge</strong>, the <strong>fixed contacts</strong>, and the <strong>arc chutes/covers</strong> that manage the arc drawn when contacts open under load. When the thermostat calls for cooling, 24 V reaches the coil, the magnet slams the bridge down, and both poles close together — you can hear the characteristic clunk from across the yard. A movable contact that fails to make (burned, pitted, or obstructed by a wandering insect — a classic field find) leaves a compressor single-phased or dead.</p>
<p><strong>Contactor vs. relay, practically:</strong> relays handle control-level currents and lighter motor loads (blower relays, fan relays); contactors handle compressor and large-motor currents and are rated by pole for full-load amps with defined inrush (locked-rotor) capability. The nameplate FLA/LRA-style ratings on the contactor must meet or exceed the load's. Using a light control relay where a contactor belongs produces spectacularly short contact life.</p>
<p><strong>Chatter</strong> deserves its own sentence: a contactor that buzzes, chatters, or drops out is almost always complaining about its <em>coil circuit</em> — low voltage (Module 4's sagging transformer), a series safety dropping voltage (Module 3's divider in the field), a failing coil, or a dirty thermostat contact. Do not replace the contactor for a power-supply problem; measure coil voltage while it misbehaves.</p>
<div class="callout"><strong>Key idea:</strong> Diagnose a contactor in two halves, exactly like a relay: (1) Is the coil getting full rated voltage? (2) With the coil pulled in, do the contacts actually pass voltage to the load? Each half has its own failures and its own meter test.</div>`
    },
    {
      heading: "Relay Logic: AND, OR, and the Holding Contact",
      html: `
<p>Combine coils and contacts and you get <strong>logic</strong> — decisions made in copper instead of code. Three patterns cover most of what HVAC controls do:</p>
<ul>
<li><strong>AND:</strong> Two conditions must both be true. Wire the switches in <em>series</em> in one coil circuit: thermostat calling AND pressure switch closed → contactor coil energizes. This is Module 3's safety string, restated as logic.</li>
<li><strong>OR:</strong> Either condition may start the load. Wire the initiating contacts in <em>parallel</em>: a thermostat OR a manual test switch can energize the relay.</li>
<li><strong>Holding (seal-in):</strong> A relay uses one of its own NO contacts, wired in parallel with the start signal, to keep itself energized after a momentary start command ends. Press start → coil pulls in → its own contact seals the circuit → release the button and the machine keeps running until a stop control breaks the seal.</li>
</ul>
<p><strong>Worked Example 2 — reading a cooling call as logic.</strong> Thermostat Y terminal energizes → passes through the NC high-pressure switch (closed = healthy) and the NC low-pressure switch (closed = charge present) in series → reaches the contactor coil. In logic terms: COOL = Y AND (NOT high-pressure-fault) AND (NOT low-pressure-fault). If any term is false, the coil is dead. Troubleshooting that chain with a meter is nothing but testing each AND term for the one that went false — voltage present before a switch, absent after it, with the switch supposed to be closed, convicts that switch or the fault it senses.</p>
<p>Safety chains add one more pattern: <strong>NC safety contacts in series</strong> so that any abnormal condition (or even a broken wire — a fail-safe bonus) drops the load out. A broken wire in an NO arrangement would fail silently-dangerous; in the NC-series arrangement it fails off. Design controls to fail toward safety, and recognize that philosophy when you read Module 8's diagrams.</p>
<div class="callout"><strong>Key idea:</strong> Series = AND, parallel = OR, own-contact-in-parallel = memory. With those three, you can predict what any relay circuit will do before you energize it — and isolate which term of the logic is lying when it misbehaves.</div>`
    },
    {
      heading: "Failure Modes and Systematic Testing",
      html: `
<p>Relay and contactor failures sort into a short list. Learn the signatures:</p>
<ul>
<li><strong>Open coil:</strong> rated voltage present at the coil, zero coil current, no pull-in, infinite (OL) coil resistance power-off. Replace the coil or device.</li>
<li><strong>Shorted coil:</strong> very low resistance, excessive current, blown control fuse or a cooked transformer if unfused.</li>
<li><strong>Pitted/burned contacts:</strong> coil pulls in, but voltage appears <em>across</em> the closed contacts under load (a good closed contact drops ~0 V) and the load starves or single-phases.</li>
<li><strong>Welded contacts:</strong> load runs with the coil de-energized — the contact fused during a fault or end-of-life arcing. Dangerous: the control system has lost its off switch for that load.</li>
<li><strong>Mechanical obstruction/weak spring:</strong> intermittent pull-in, buzzing, or failure to drop out cleanly.</li>
</ul>
<p><strong>Worked Example 3 — the two-half test on a dead compressor.</strong> Call for cooling active. Coil terminals: 24 V present ✓ (coil circuit healthy). Coil clicks in ✓. Load side: L1–L2 in = 240 V; T1–T2 out = 0 V on one pole. Conclusion without parts-swapping: the contactor's contacts are not passing power on that pole — inspect for pitting or obstruction, replace the contactor with a correctly rated unit. Every step was a Module 3/4 idea (series strings, voltage across open points) wearing work clothes.</p>
<p>These components are NATE Ready-to-Work "components" bread and butter and sit at the center of HVAC Excellence Employment Ready: Electrical troubleshooting. Master the two-half test here; Module 7 formalizes the meter technique and the course lab puts you on a full call.</p>
<div class="callout"><strong>Common mistake:</strong> Testing contacts for continuity with the coil energized and line power connected. Continuity/resistance tests are power-OFF tests (Module 7). For live diagnosis, measure <em>voltage across</em> the closed contact instead: ~0 V = healthy, significant voltage = failing contact.</div>`
    }
  ],
  keyTerms: [
    { term: "Normally open (NO)", def: "Contacts open in the de-energized/rest state; they close when the device is actuated or its coil is energized." },
    { term: "Normally closed (NC)", def: "Contacts closed in the de-energized/rest state; they open when the device is actuated or its coil is energized." },
    { term: "Pole", def: "One independent circuit path switched by a device; a 2-pole contactor switches two conductors at once." },
    { term: "Throw", def: "The number of output positions a pole can connect to; double-throw = changeover between two outputs." },
    { term: "SPDT", def: "Single-pole double-throw: one common terminal switching between NO and NC outputs." },
    { term: "Relay", def: "An electrically operated switch: a coil whose magnetic field moves contacts in a separate circuit." },
    { term: "Coil", def: "The electromagnet winding of a relay or contactor; characterized by its rated voltage and resistance." },
    { term: "Armature", def: "The moving iron part of a relay/contactor pulled by the coil's magnetic field to move the contacts." },
    { term: "Contactor", def: "A heavy-duty relay built to switch motor and compressor loads repeatedly, with arc-resistant power contacts." },
    { term: "Contact rating", def: "The maximum current and voltage a set of contacts can safely switch, including motor inrush allowances." },
    { term: "Holding (seal-in) contact", def: "A relay's own NO contact wired in parallel with its start signal to keep the coil energized after a momentary command." },
    { term: "Chatter", def: "Rapid, noisy make-and-break of a contactor, usually from low coil voltage, a failing coil, or voltage being dropped in series." },
    { term: "Pitted contacts", def: "Contact surfaces eroded by arcing; they develop resistance, drop voltage, and overheat under load." },
    { term: "Welded contacts", def: "Contacts fused closed by fault current or arcing, so the load runs even with the coil de-energized." },
    { term: "Isolation", def: "The electrical separation between a relay's coil circuit and contact circuit — they interact magnetically, not conductively." },
    { term: "Ice-cube relay", def: "A compact plug-in relay in a clear case that lets you observe armature movement for diagnosis." },
    { term: "Fail-safe design", def: "Arranging NC safety contacts in series so a fault — or even a broken wire — de-energizes the protected load." },
    { term: "Locked-rotor amps (LRA)", def: "The current a motor draws with its rotor held stationary; contactors are rated to switch this inrush." }
  ],
  video: {
    title: "HVAC Relays 101 3D",
    embedUrl: "https://www.youtube.com/embed/RSc66--ke8k",
    note: "A 3D animation walk-through of HVAC relays: the coil and electromagnet, the armature, NO and NC contacts changing state, and similar components like the 90-340 and ice-cube relays. It stresses exactly this module's discipline — matching coil voltage and contact ratings to the application.",
    more: [
      { title: "HVAC Training Board: How To Troubleshoot A Contactor (Electrical Training Board/2 Pole Contactors)", url: "https://www.youtube.com/watch?v=-HbX7F4E7eQ" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A relay coil is rated 24 V and measures 48 Ω. Find coil current and the VA it adds to the transformer budget.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: I = 24 ÷ 48 = <strong>0.5 A</strong>. Step 2: VA = E × I = 24 × 0.5 = <strong>12 VA</strong>. Step 3: Budget note — three such devices energized together add 36 VA, nearly a whole 40 VA transformer.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A limit switch must stop a heater if temperature exceeds its setpoint, and the heater should also stop if the switch's wire breaks. Should the switch be NO or NC in the heater's control string, and why?</p>",
      solution: "<p><strong>Answer: NC, wired in series.</strong> Step 1: The switch must pass power during all normal operation (closed at rest = NC) and open on over-temperature. Step 2: In series, a broken wire produces the same open circuit as a tripped switch — the heater fails OFF, which is the safe direction. An NO contact could neither pass normal power nor fail safe.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A contactor pulls in with an audible click, and the compressor does not start. You measure 240 V at L1–L2 (line side) and 240 V across the contactor from L1 to T1 on one pole with the coil energized. Interpret the readings.</p>",
      solution: "<p><strong>Interpretation:</strong> Step 1: Voltage measured ACROSS a supposedly closed contact means that contact is behaving as an open — burned, pitted through, or mechanically obstructed. Step 2: A healthy closed contact drops ~0 V. Step 3: The load is being single-phased/starved by that pole. Replace the contactor with one meeting the load's amp ratings; do not file or burnish power contacts back to life.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Draw (describe) the relay logic for: a blower that must run when EITHER the thermostat calls for cooling OR a manual fan switch is on, using one relay. Also state the AND/OR pattern used.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Wire the thermostat's fan output contact and the manual switch in <strong>parallel</strong> with each other, and that parallel pair in series with the relay coil — either path energizes the coil. Step 2: The relay's NO contact, in the blower's power circuit, closes whenever the coil is energized. Step 3: Pattern = <strong>OR</strong> (parallel initiating contacts). If instead both were required simultaneously, they would be wired in series (AND).</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A replacement relay's coil is marked 120 V; the control circuit supplies 24 V. Predict its behavior and the correct fix. Then predict the reverse mistake (24 V coil on 120 V).</p>",
      solution: "<p><strong>Solution:</strong> Step 1: A 120 V coil on 24 V receives one-fifth of its design voltage — its magnetic pull is far too weak; it will not pull in (or will buzz feebly). The relay is not 'broken,' it is misapplied. Step 2: Reverse case: a 24 V coil on 120 V draws roughly 5× design current (per Ohm's law on its winding resistance, approximately) and overheats/burns out quickly. Step 3: Fix in both cases — match coil voltage to the control supply exactly.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> During a cooling call, a contactor chatters loudly. Coil voltage measured at the coil while chattering is 16 V instead of 24 V; the transformer secondary (unloaded) reads 27 V. Give the two most likely causes and your next test.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: The coil is starving: either the transformer is overloaded and sagging under load (Module 4), or voltage is being dropped in series with the coil by a failing switch/contact in its string (Module 3's divider). Step 2: Next test — measure the transformer secondary <em>while the load is connected and chattering</em>: if the secondary itself has sagged, the problem is transformer capacity or an excessive/shorted load; if the secondary holds ~24 V, walk the series string measuring across each switch to find the one dropping the missing volts.</p>"
    }
  ],
  quiz: [
    {
      q: "A pressure switch's contacts are drawn NC on the schematic. This means:",
      choices: ["The contacts are open during normal operation", "The contacts are closed in the de-energized/rest state shown on the diagram", "The switch is defective", "The contacts close only when the compressor runs"],
      answer: 1,
      explanation: "Correct: (b). 'Normally' describes the rest/de-energized state, which is how diagrams are drawn. (a) During normal operation an NC safety is indeed closed too — but the definition is about the rest state, not operation. (c) NC is a design choice, not a defect. (d) Compressor operation does not define the contact designation."
    },
    {
      q: "The main reason a 24 V relay can safely control a 240 V motor is:",
      choices: ["The relay steps the voltage down like a transformer", "The coil and contact circuits are electrically isolated; they interact only magnetically", "Motor current passes through the coil, strengthening it", "Contacts are made of plastic"],
      answer: 1,
      explanation: "Correct: (b). Isolation between coil and contacts is the relay's core feature. (a) A relay does no voltage conversion. (c) Load current flows through the contacts, never the coil. (d) Contacts are conductive alloys chosen for arc resistance — plastic would not carry current at all."
    },
    {
      q: "A compressor contactor's coil has full 24 V and pulls in solidly, but the compressor receives only one leg of power. The most likely fault is:",
      choices: ["An open coil", "Burned or obstructed contacts on one pole", "An oversized transformer", "A shorted thermostat"],
      answer: 1,
      explanation: "Correct: (b). The coil half works (24 V, solid pull-in); the contact half fails on one pole. (a) An open coil would not pull in at all. (c) Transformer size does not remove one leg of line power. (d) A thermostat fault acts on the coil circuit, which is proven healthy."
    },
    {
      q: "To require BOTH a thermostat call AND a closed safety switch before a coil energizes, wire the two devices:",
      choices: ["In parallel with the coil", "In series in the coil circuit", "One on each side of the transformer primary", "Across the coil terminals"],
      answer: 1,
      explanation: "Correct: (b). Series in one path = AND logic: both must conduct. (a) Parallel = OR: either alone would energize the coil. (c) Primary-side placement changes the whole control supply, not this coil's logic. (d) A device wired across the coil would short the supply when closed."
    },
    {
      q: "A load keeps running after its relay coil is de-energized. The contacts are most likely:",
      choices: ["Pitted", "Welded closed", "Open", "Reversed NO/NC"],
      answer: 1,
      explanation: "Correct: (b). Welded contacts fuse shut and ignore the coil entirely — a safety-critical failure. (a) Pitted contacts still open; they fail by dropping voltage when closed. (c) Open contacts would prevent running at all. (d) A NO/NC selection error changes logic, but a de-energized NO contact would open and stop the load."
    },
    {
      q: "SPDT describes a switch or relay contact set that is:",
      choices: ["Single-pole double-throw: one common terminal switching between two outputs", "Special-purpose dual transformer", "Single-phase direct throw", "Two coils, one contact"],
      answer: 0,
      explanation: "Correct: (a). SPDT = one pole (circuit) with two throws (output positions) — the changeover arrangement. (b) and (c) are invented expansions of the acronym. (d) Poles/throws describe contacts, not coil count."
    },
    {
      q: "Contactor chatter most often indicates a problem in the:",
      choices: ["Refrigerant charge", "Coil circuit — low voltage, a series voltage drop, or a failing coil", "Compressor windings", "Condenser fan blade balance"],
      answer: 1,
      explanation: "Correct: (b). Chatter is the magnet failing to hold — almost always a coil-supply problem. (a) Charge problems do not modulate coil voltage at chatter frequency. (c) Winding faults affect the load side after the contacts. (d) Fan balance causes vibration, not electrical chatter."
    },
    {
      q: "With power OFF and a relay removed, its coil measures OL (infinite resistance). The coil is:",
      choices: ["Normal — coils always read OL", "Open (broken winding) — the relay can never pull in", "Shorted", "Reading its rated voltage"],
      answer: 1,
      explanation: "Correct: (b). A healthy coil reads a definite resistance (tens to hundreds of Ω). OL means the winding is broken. (a) OL would make every relay dead on arrival. (c) A short reads near 0 Ω, the opposite extreme. (d) An ohmmeter measures resistance, not voltage — and only on de-energized parts."
    }
  ],
  studyGuide: `
<h3>Module 5 — Switches, Relays & Contactors: Quick Reference</h3>
<p><strong>States are named at rest:</strong> NO = open de-energized, closes when actuated. NC = closed de-energized, opens when actuated. Diagrams are drawn de-energized.</p>
<p><strong>Relay anatomy:</strong> Coil (rated voltage, measurable Ω, draws VA) commands contacts (rated amps/volts) in a separate, isolated circuit. Poles = circuits switched; throws = output positions. SPDT = changeover.</p>
<p><strong>Contactor:</strong> Heavy-duty relay for motor/compressor loads; check nameplate amp/inrush ratings against the load. Diagnosed in two halves: coil voltage/pull-in, then contacts passing power (~0 V across a healthy closed contact under load).</p>
<p><strong>Logic:</strong> Series contacts = AND. Parallel contacts = OR. Own NO contact paralleling the start signal = holding/seal-in memory. NC safeties in series = fail-safe (a broken wire drops the load too).</p>
<p><strong>Failures:</strong> Open coil (OL Ω, no pull-in, voltage present). Shorted coil (≈0 Ω, fuse opens). Pitted contacts (voltage drop across closed contacts, load starves). Welded contacts (load runs with coil off — replace immediately). Chatter = coil-circuit problem: find the sag or series drop before replacing parts.</p>
`
};
