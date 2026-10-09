// HVAC 117 - Module 6: Control Circuits & Ladder Diagrams
module.exports = {
  number: 6,
  slug: "control-circuits-ladder-diagrams",
  title: "Control Circuits & Ladder Diagrams",
  estTime: "3–4 hours",
  objectives: [
    "Read a ladder diagram: identify the rails, rungs, loads, and the switch contacts that control each load.",
    "Draw and explain a three-wire start/stop circuit with a holding (seal-in) contact.",
    "Contrast two-wire and three-wire control for restart behavior after a power interruption.",
    "Explain electrical and mechanical interlocking in a forward/reverse or two-motor circuit.",
    "Place overload contacts correctly in a control circuit and predict circuit behavior rung by rung for a given set of switch positions."
  ],
  sections: [
    {
      heading: "Anatomy of a Ladder Diagram",
      html: `
<p>A <strong>ladder diagram</strong> redraws a circuit by logic instead of by physical layout. Two vertical lines — the <strong>rails</strong> — carry the control power: the hot side (for example L1, or R on a 24 V system) on the left and the return (L2, neutral, or C) on the right. Each horizontal <strong>rung</strong> is one complete control story: reading left to right, power passes through a series of switch contacts and arrives at a <strong>load</strong> — almost always a coil: a contactor coil, a relay coil, a solenoid, or a small motor.</p>
<p>The reading discipline is absolute: a load energizes only when <em>every</em> contact in its rung is closed, completing a path from the left rail to the right rail. Contacts are drawn in their <strong>normal</strong> (shelf, unpowered) state: a normally open (NO) contact is drawn open and closes when its coil energizes; a normally closed (NC) contact is drawn closed and opens when its coil energizes. Contacts sharing a coil's label — M, CR1, R2 — move together whenever that coil changes state, wherever they appear on the page.</p>
<p>This is why ladder diagrams are the troubleshooter's map. A pictorial diagram shows where wires physically run; a ladder shows <em>what must be true</em> for each load to run. Module 1's voltage rules apply rung by rung: with a rung's path complete, the load sees full control voltage; one open contact in the rung takes it all.</p>
<div class="callout"><strong>Key idea:</strong> Read rungs, not wires. For any dead load, walk its rung left to right and ask at each contact: "What closes you, and has it happened?" The first "no" on that walk is your fault list.</div>`
    },
    {
      heading: "Three-Wire Control: Start, Stop, and the Holding Contact",
      html: `
<p>The classic motor control rung uses two momentary pushbuttons: a <strong>normally closed STOP</strong> button and a <strong>normally open START</strong> button, in series with the starter coil (M) and the overload's NC contact. Press START: the coil energizes, the main contacts close, and the motor runs. Release START: the button springs open — and the motor keeps running. Why?</p>
<p>Because the coil owns a contact on its own rung. An NO auxiliary contact of M — the <strong>holding</strong> or <strong>seal-in contact</strong> — is wired in parallel with the START button. The instant M energizes, that contact closes and provides a second path around the START button. The circuit now holds itself on: power flows STOP → holding contact → overload contact → coil. Press STOP and the path breaks; the coil drops out; the holding contact reopens; the circuit cannot restart until someone presses START again.</p>
<p>This pattern is called <strong>three-wire control</strong> (the classic station uses three wires: common, start, stop). Its defining behavior is <strong>low-voltage protection</strong>: if power fails, the coil drops out and the holding contact opens, so when power returns the motor stays off until a human restarts it. Machines that could injure someone by surprising them back to life demand exactly this behavior.</p>
<div class="callout"><strong>Key idea:</strong> The holding contact is the coil voting for itself. Trace any mystery "won't stay on" to that parallel path: a dirty aux contact or a miswired seal-in gives a motor that runs only while START is held — the symptom names the fault.</div>`
    },
    {
      heading: "Two-Wire Control: Maintained Contact, Automatic Restart",
      html: `
<p><strong>Two-wire control</strong> replaces the pushbuttons with a single <strong>maintained-contact</strong> device: a thermostat, a pressure switch, a float switch, a timer contact. The device sits in series with the coil (and the overload contact). When the device closes, the coil energizes; when it opens, the coil drops. No holding contact is needed, because the controlling device itself stays closed for as long as it wants the load to run.</p>
<p>This is the natural control style of HVAC: a thermostat is a maintained switch that wants the compressor to run for twenty minutes, not while a button is held. Float switches, pressure controls (Module 8), and defrost timers all speak two-wire to the loads they command.</p>
<p>The defining behavior is the mirror of three-wire: <strong>automatic restart</strong>. If power fails and returns, a closed thermostat will restart the equipment the instant power is back. For a compressor or fan that is usually acceptable — even desirable — but it is a design choice, not an accident: the same behavior on a saw or press would be dangerous. Know which style you are looking at before predicting what a unit will do after an outage — or after you cycle a disconnect during service.</p>
<p>Comparison test question in the field: "After a power blink, this unit restarted itself; that one didn't. Both are normal — why?" Because one is two-wire (maintained control still closed) and the other is three-wire (seal-in dropped, waiting for START).</p>
<div class="callout"><strong>Key idea:</strong> Two-wire = the controller stays closed, the machine restarts itself. Three-wire = momentary command plus memory (the holding contact), the machine waits for a human. HVAC controls are mostly two-wire; motor stations are classically three-wire.</div>`
    },
    {
      heading: "Interlocking: Making Two Things Unable to Fight",
      html: `
<p><strong>Interlocking</strong> wires a circuit so that one load cannot energize unless another condition is right — or so two loads can never energize together. The textbook case is a <strong>reversing starter</strong>: forward and reverse contactors swap two leads to a three-phase motor (Module 4). If both contactors ever closed at once, they would bolt a short circuit across the supply. So each contactor's coil circuit passes through an <strong>NC auxiliary contact of the other contactor</strong>: the moment Forward energizes, its NC aux opens Reverse's coil path, and vice versa. Most reversing starters add a <strong>mechanical interlock</strong> — a physical bar between the armatures — as a second, independent guarantee.</p>
<p>HVAC uses friendlier interlocks everywhere: an evaporator fan interlocked with a defrost heater so they never run together (Module 8); a compressor interlocked with proof of airflow or a pump; auxiliary heat locked out above an outdoor temperature; a second stage locked until the first stage proves itself. The ladder makes these intentions visible: look for one coil's contacts living on another coil's rung.</p>
<p>Interlocks are also prime troubleshooting suspects. A machine that "won't do anything" may be healthy but un-interlocked: a failed NC aux contact in the permissive chain opens the rung exactly like a STOP button. The ladder tells you which contacts form the chain — test them in order rather than replacing the headline component.</p>
<div class="callout"><strong>Key idea:</strong> When two coils' contacts appear in each other's rungs, you are reading an interlock — a designed "never both" or "only if first." A failed interlock contact disables equipment as completely as a failed coil.</div>`
    },
    {
      heading: "Safeties in the Rung: Where the Overload Contact Lives",
      html: `
<p>On the ladder, the overload relay's NC contact sits <strong>in series in the coil's rung</strong> — typically drawn just before the coil, alongside STOP buttons and interlock contacts. Study the placement logic: the overload does not switch motor current directly; it votes in the control circuit, and its single vote can veto the whole rung. When it trips, the coil drops, the main contacts open, and the motor stops — the heavy-current decision executed by a light-current contact.</p>
<p>The same rung often collects the whole safety chain: high-pressure cut-out, low-pressure cut-out, limit switches, float switch — each an NC contact in series, each capable of stopping the load. This series chain is why a ladder rung reads like a sentence of ANDs: power AND stop-closed AND overload-closed AND safeties-closed AND start-commanded = coil.</p>
<p><strong>Worked walk-through.</strong> Rung: L1 → STOP (NC) → START (NO) in parallel with M-aux (NO) → OL (NC) → coil M → L2. Predict four states: (1) All at rest: START open, aux open → coil off. (2) START pressed: path completes → coil on, aux closes. (3) START released: path via aux → coil stays on. (4) Overload trips: OL opens → coil off regardless of buttons, aux reopens → even after the OL cools and is reset, the motor waits for a fresh START press. If you can narrate a rung through states like that, you can troubleshoot it with a meter, one contact at a time.</p>
<div class="callout"><strong>Key idea:</strong> Every contact in a rung is a suspect with an alibi to check. Voltage-test across each contact in the dead rung (Module 11's hopscotch is exactly this): the open one shows full control voltage across it; closed healthy ones show ~0 V.</div>`
    }
  ],
  keyTerms: [
    { term: "Ladder diagram", def: "A logic-format schematic: two vertical power rails and horizontal rungs, each rung showing the contacts that must close for one load to energize." },
    { term: "Rail", def: "A vertical supply line of a ladder diagram — hot on the left, return on the right (for example L1/L2 or R/C on 24 V control)." },
    { term: "Rung", def: "One horizontal control circuit on a ladder: contacts in series (with any parallel branches) feeding one load, usually a coil." },
    { term: "Normally open (NO) contact", def: "A contact drawn open in its unpowered state that closes when its coil or actuator energizes." },
    { term: "Normally closed (NC) contact", def: "A contact drawn closed in its unpowered state that opens when its coil or actuator energizes." },
    { term: "Auxiliary contact", def: "A small contact operated by a contactor or relay, used in control rungs for holding and interlocking rather than carrying motor current." },
    { term: "Holding (seal-in) contact", def: "An NO auxiliary contact wired in parallel with a momentary START button, letting the coil keep itself energized after the button is released." },
    { term: "Three-wire control", def: "Start/stop pushbutton control with a holding contact; drops out on power loss and requires a manual restart — low-voltage protection." },
    { term: "Two-wire control", def: "Control by a single maintained-contact device (thermostat, pressure or float switch); restarts automatically when power returns if the device is still calling." },
    { term: "Maintained contact", def: "A switch that stays in its set position (a thermostat contact) as opposed to a momentary pushbutton." },
    { term: "Momentary contact", def: "A switch that returns to its normal state when released, like pushbuttons." },
    { term: "Low-voltage protection", def: "Behavior in which a machine cannot restart automatically after power returns; provided by three-wire control." },
    { term: "Low-voltage release", def: "Behavior in which a machine restarts automatically when power returns; provided by two-wire control." },
    { term: "Interlocking", def: "Wiring one coil's contacts into another's rung so loads can run only in safe combinations — never both, or only if the other is on/off." },
    { term: "Mechanical interlock", def: "A physical linkage between two contactors (e.g., forward/reverse) preventing both from closing at once, backing up the electrical interlock." },
    { term: "Reversing starter", def: "A pair of interlocked contactors that swap two supply leads to reverse a three-phase motor." },
    { term: "Safety chain", def: "The series string of protective NC contacts (overloads, limits, pressure cut-outs) in a coil's rung; any one opening stops the load." },
    { term: "Coil", def: "The electromagnetic load at the end of a rung; when energized it operates all contacts bearing its label, wherever they are drawn." }
  ],
  video: {
    title: "Start Stop Motor Control — Wiring + PLC Ladder Logic",
    embedUrl: "https://www.youtube.com/embed/K0PQphr7vgM",
    note: "This lesson builds the physical three-wire start/stop circuit — NO start button, NC stop button, overload contact, and the seal-in contact in parallel with start — and then draws the identical ladder rung. Watch it with Section 2 open; the fail-safe reason for wiring stop as normally closed is explained exactly as this module teaches it.",
    more: [
      { title: "Wiring Diagram Tracing - Older RHEEM Condenser", url: "https://www.youtube.com/watch?v=lymlJxgzeCk" },
      { title: "How to Read HVAC Schematics (Beginner to Pro – Furnace & AC Explained)", url: "https://www.youtube.com/watch?v=HbMqTEDxPGA" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A motor runs only while the START button is physically held in, and stops the instant the button is released. The coil, STOP button, and overload are all proven good. Name the faulty element and the test that proves it.</p>",
      solution: "<p><strong>Answer:</strong> The <strong>holding (seal-in) auxiliary contact</strong> — or its wiring — is open. Step 1: The motor starting at all proves the main path (STOP, START, OL, coil) works. Step 2: Failing to <em>stay</em> on isolates the parallel path around START. Step 3: Proof test: with the coil energized (START held), measure voltage across the holding contact — an open contact shows full control voltage; or de-energize and check that contact's continuity while operating the contactor manually per manufacturer guidance. Repair the aux contact or its loose lead.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Two identical motors: Motor A is on two-wire control from a pressure switch; Motor B is on three-wire pushbutton control. Power fails for ten seconds while both are running and the pressure switch remains closed. Describe each motor's behavior when power returns.</p>",
      solution: "<p><strong>Answer:</strong> Motor A <strong>restarts automatically</strong> the moment power returns, because its maintained pressure-switch contact is still closed (low-voltage release). Motor B <strong>stays off</strong>: its coil dropped out during the outage, the holding contact opened, and the rung has no path until someone presses START (low-voltage protection). Both behaviors are correct by design.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> On a ladder rung, you find coil F's rung contains an NC contact labeled R, and coil R's rung contains an NC contact labeled F. What design is this, and what catastrophe does it prevent in a reversing application?</p>",
      solution: "<p><strong>Answer:</strong> This is <strong>electrical interlocking</strong> between Forward (F) and Reverse (R). Each coil, once energized, opens the other's rung, so the two contactors can never be energized together. In a reversing starter that prevents the direct line-to-line short circuit that would occur if both contactors — which land the supply leads differently — closed at once. (A mechanical interlock usually backs this up physically.)</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A dead rung contains, in order: STOP (NC), a thermostat contact (NO, currently calling/closed), high-pressure cut-out (NC), overload contact (NC), coil. You measure full control voltage across the high-pressure cut-out and ~0 V across every other contact. Diagnosis?</p>",
      solution: "<p><strong>Answer:</strong> In a series rung, the <strong>open</strong> element shows the full control voltage across it; closed healthy contacts show ~0 V. Full voltage across the high-pressure cut-out means <strong>that switch is open</strong> — the circuit is being vetoed there. Next step is not replacing it blindly: determine whether pressure is genuinely high (a real trip doing its job) or the switch has failed open at normal pressure — check system pressure and the switch's setpoint behavior.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Why is the STOP button wired as a normally closed contact rather than normally open? Answer in terms of failure behavior.</p>",
      solution: "<p><strong>Answer:</strong> Fail-safe design. An NC stop sits closed in the rung; if its wire breaks, a terminal loosens, or the button fails, the circuit <strong>opens and the motor stops</strong> — the safe direction. If stop were NO (closed only when pressed), a broken stop wire would leave the operator pressing a dead button while the motor ran on. Control circuits are designed so the most likely failures stop the machine.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Draw (in words) the rung for this requirement: 'The exhaust fan shall run whenever the compressor contactor is energized, and shall not run at any other time.' Identify the interlock style used.</p>",
      solution: "<p><strong>Answer:</strong> Rung: left rail → NO auxiliary contact of the compressor contactor (M) → fan starter coil → overload contact → right rail. When M energizes, its aux contact closes and the fan coil pulls in; when M drops, the fan drops with it. This is a straightforward <strong>interlock (slave/permissive)</strong>: the fan's rung contains another coil's contact, making fan operation conditional on compressor operation — no separate thermostat or switch required.</p>"
    }
  ],
  quiz: [
    {
      q: "On a ladder diagram, contacts are drawn in the state they are in when:",
      choices: ["The equipment is running normally", "Their coil is unpowered (shelf state)", "The thermostat is calling", "Power is removed from the whole panel only"],
      answer: 1,
      explanation: "Correct: (b). Ladder convention draws every contact in its normal, unpowered state — NO drawn open, NC drawn closed — and the reader imagines them changing when their coil energizes. (a) Running state mixes energized and unenergized coils unpredictably. (c) A thermostat is one possible actuator, not the drawing convention. (d) Shelf state concerns the individual coil, which is the same discipline, but (b) states the rule correctly and generally."
    },
    {
      q: "The holding contact in a three-wire circuit is wired:",
      choices: ["In series with the STOP button", "In parallel with the START button", "In parallel with the coil", "In series with the overload heater"],
      answer: 1,
      explanation: "Correct: (b). The NO aux contact parallels START so that, once the coil pulls in, current can flow around the released button. (a) In series with STOP it would merely duplicate the stop path and provide no seal-in. (c) A contact across the coil would short the control supply when closed. (d) Overload heaters belong in the motor power circuit; the holding contact is a control-circuit device."
    },
    {
      q: "A unit on two-wire control and a unit on three-wire control both lose power while running. On restoration:",
      choices: ["Both restart automatically", "Both stay off", "The two-wire unit restarts if its control device is still calling; the three-wire unit stays off until START is pressed", "The three-wire unit restarts; the two-wire unit waits"],
      answer: 2,
      explanation: "Correct: (c). Two-wire = maintained device still closed → automatic restart (low-voltage release). Three-wire = holding contact dropped open → no restart without a human (low-voltage protection). (a) and (b) each describe one style and misapply it to both. (d) reverses the two behaviors."
    },
    {
      q: "In a coil's rung, the overload relay appears as:",
      choices: ["An NO contact in parallel with START", "An NC contact in series in the rung", "The coil itself", "A heater in the control circuit"],
      answer: 1,
      explanation: "Correct: (b). The overload's NC contact sits in the series safety chain of the rung; tripping opens it and drops the coil. (a) An NO parallel contact could never stop the coil — closing is what it does. (c) The coil belongs to the contactor; the overload is a separate sensing relay with its own contact. (d) Heaters sense motor current in the power circuit; the rung receives only the resulting contact."
    },
    {
      q: "Electrical interlocking between forward and reverse contactors is achieved by:",
      choices: ["Using the same coil for both", "Placing an NC auxiliary contact of each contactor in the other's coil rung", "Wiring both coils in parallel", "A mechanical bar only, with no wiring change"],
      answer: 1,
      explanation: "Correct: (b). Each contactor's NC aux opens the rival's rung the moment its own coil energizes, so both can never be commanded at once. (a) One coil cannot operate two opposed contactors selectively. (c) Parallel coils would energize both together — the exact catastrophe interlocking prevents. (d) A mechanical interlock is the usual backup, but the question asks for the electrical method; 'only' makes it wrong as a complete answer."
    },
    {
      q: "A rung reads: rail → NC stop → NO thermostat → NC limit → coil → rail. The thermostat is calling (closed), power is present, and the coil is off. Voltage measured across the limit switch is the full control voltage. This means:",
      choices: ["The limit switch is closed and healthy", "The limit switch is open — it is the break in the rung", "The coil has failed", "The thermostat is open"],
      answer: 1,
      explanation: "Correct: (b). In a series rung at rest current, the open element carries the full voltage across it; closed contacts read ~0 V. The limit is open — either genuinely tripped by its condition or failed — and it is vetoing the rung. (a) inverts the test. (c) A failed coil would show full voltage across the coil itself with all contacts closed, not across the limit. (d) The thermostat is stipulated closed and would show the voltage if it were the open one."
    },
    {
      q: "Which device is a maintained-contact, two-wire controller?",
      choices: ["A momentary START pushbutton", "A thermostat", "A holding contact", "A centrifugal switch"],
      answer: 1,
      explanation: "Correct: (b). A thermostat stays in its called position for the whole cycle — a maintained contact commanding a load two-wire style. (a) A pushbutton is momentary by definition. (c) A holding contact is part of a three-wire circuit's memory, not an independent controller. (d) A centrifugal switch is a motor starting device (Module 3), not a maintained line controller."
    },
    {
      q: "The STOP pushbutton is wired normally closed primarily so that:",
      choices: ["It uses less control current", "A broken stop wire or failed button stops the motor — fail-safe", "It matches the color code", "The coil pulls in faster"],
      answer: 1,
      explanation: "Correct: (b). With an NC stop in series, the common wiring failures open the rung and stop the machine — the safe direction. (a) Current through the rung is set by the coil, not the button style. (c) Color codes are wiring identification, unrelated to contact state logic. (d) Contact style does not meaningfully change pull-in speed."
    }
  ],
  studyGuide: `
<h3>Module 6 — Control Circuits &amp; Ladder Diagrams: Quick Reference</h3>
<p><strong>Reading:</strong> rails = control power (left hot, right return). Rungs read left → right. Contacts drawn in shelf (unpowered) state; a load energizes only when its rung's path is complete. Contacts follow their labeled coil anywhere on the page.</p>
<p><strong>Three-wire:</strong> NC STOP + NO START (momentary) + NO holding contact in parallel with START + NC overload contact + coil. Seal-in keeps the coil on after START is released. Power loss → drops out → manual restart (low-voltage protection).</p>
<p><strong>Two-wire:</strong> one maintained device (thermostat, pressure, float) in series with the coil. Power returns with the device still calling → automatic restart (low-voltage release). Most HVAC control is two-wire.</p>
<p><strong>Interlocking:</strong> one coil's contacts in another's rung — NC aux of the rival in reversing starters (plus a mechanical interlock), fan/heater and other "never both / only if" pairs across HVAC.</p>
<p><strong>Safeties:</strong> overload and limit contacts are NC links in the rung's series chain. In a dead rung, the open contact shows full control voltage across it; healthy closed contacts show ~0 V.</p>
<p><strong>Signature fault:</strong> runs only while START is held = open holding contact or its wiring.</p>
`
};
