// HVAC 117 - Module 8: Defrost Controls, Timers & Pressure Switches
module.exports = {
  number: 8,
  slug: "defrost-controls-timers-pressure-switches",
  title: "Defrost Controls, Timers & Pressure Switches",
  estTime: "3–4 hours",
  objectives: [
    "Explain why frost forms on evaporators and heat-pump outdoor coils and what a defrost cycle must accomplish.",
    "Distinguish initiation from termination in defrost control and compare time, temperature, and pressure termination methods.",
    "Read a mechanical defrost time clock's terminals and settings, including fail-safe timed termination.",
    "Distinguish high-pressure and low-pressure switches, manual versus automatic reset, and fixed versus adjustable settings.",
    "Use cut-in, cut-out, and differential correctly to predict a pressure control's behavior from a pair of settings."
  ],
  sections: [
    {
      heading: "Why Defrost Exists and What It Must Do",
      html: `
<p>Any coil that runs below freezing in moist air grows frost. In a freezer or low-temperature evaporator, frost is guaranteed by design conditions; on a heat pump's outdoor coil in heating mode — where the coil is a cold evaporator drinking winter air — frost is routine weather. Frost insulates the coil and chokes its airflow, so capacity falls, run times stretch, and on a heat pump the house begins losing the battle the auxiliary heat then has to finish.</p>
<p>A <strong>defrost control</strong> periodically reverses the fight: it melts the frost and returns the coil to clean metal. Depending on the equipment, melting is done by electric heaters at the coil, by hot discharge gas routed through it, or — on a heat pump — by temporarily running the refrigeration cycle in the cooling direction so the outdoor coil becomes a hot condenser. Whatever the heat source, every defrost system answers the same two questions, and confusing them is the root of most defrost misdiagnosis:</p>
<ul>
<li><strong>Initiation:</strong> when does defrost start? (A schedule, a timer, a sensed condition.)</li>
<li><strong>Termination:</strong> when does defrost stop? (Elapsed time, coil temperature, or pressure — whichever the design trusts.)</li>
</ul>
<p>Add a third act: after termination, <strong>fan delay</strong> on refrigeration evaporators holds the fans off briefly so melt-water can drain and the coil can re-chill — otherwise the fans blow warm moisture back onto the product and the coil.</p>
<div class="callout"><strong>Key idea:</strong> Diagnose defrost in three acts — initiation, termination, fan delay. A system that never starts defrost, one that never stops, and one that restarts fans too early have different villains; do not let one complaint ("it's iced up" or "it's warm") blur them together.</div>`
    },
    {
      heading: "Time Clocks and Time/Temperature Termination",
      html: `
<p>The workhorse of commercial refrigeration defrost is the <strong>mechanical defrost time clock</strong>: a motor-driven timer whose pins or trippers set defrost start times on a 24-hour dial, with a separate adjustable limit for maximum defrost duration. Its terminals teach the whole system (follow the unit's own wiring diagram — terminal layouts vary by model): the clock motor itself needs constant power so it always knows the time; one switched contact sends power to the <strong>refrigeration load</strong> (compressor/fans) in normal operation; the other position sends power to the <strong>defrost load</strong> (heaters or hot-gas solenoid) during defrost; and a termination input lets an external sensor end defrost early.</p>
<p>The classic pairing is <strong>time initiation, temperature termination</strong>. The clock starts defrosts on schedule — say, several times a day at hours the installer chose. A temperature-sensing control on the coil watches the melt: when the coil reaches a temperature that proves the frost is gone, it signals the clock to terminate and resume refrigeration. But if that sensor fails, the clock's own duration limit — the <strong>fail-safe time</strong> — ends defrost anyway, so a sensor failure produces longer-than-needed defrosts, not a cooked box. That layered design — trusted sensor, time as the backstop — recurs throughout good control engineering.</p>
<p>Heat-pump defrost boards apply the same logic electronically: time between defrosts (chosen by installer jumpers or programming on many boards) starts the check, and a coil temperature sensor decides whether defrost is needed and when the coil is clear, with a maximum-duration backstop in the board's logic.</p>
<div class="callout"><strong>Key idea:</strong> Time starts it; temperature (or pressure) ends it; time also ends it if the sensor lies. When a defrost runs far too long, suspect termination first — sensor position, sensor failure, or a termination circuit that never signals — before blaming the clock's schedule.</div>`
    },
    {
      heading: "Pressure Termination and Demand Thinking",
      html: `
<p>Frost changes pressure as well as temperature. As a heat pump's outdoor coil ices over, its evaporating pressure falls — the starving, insulated coil boils refrigerant at a lower pressure. Some defrost strategies therefore watch <strong>pressure</strong>: initiate or terminate defrost based on the pressure behavior of the coil circuit, ending defrost when pressure recovers to the value that says the coil is clear and warm again.</p>
<p>Whether the sensed variable is time, temperature, or pressure, the design trade is identical. Pure fixed-schedule defrost is simple and predictable but wastes energy defrosting clean coils and can miss heavy frost between scheduled events. Sensed termination (and, in more advanced controls, sensed initiation) spends defrost only when frost is actually there — the direction modern electronic controls have taken, with sensors making defrost a <strong>demand</strong> event instead of a calendar event.</p>
<p>For the troubleshooter, the lesson is to identify <em>which variables this system senses</em> before testing anything. A system that defrosts 'too often' with a sensor resting against a warm pipe will look like a scheduling problem until you read its actual logic on the wiring diagram and in the manufacturer's sequence of operation.</p>
<div class="callout"><strong>Key idea:</strong> Every defrost control is an answer to "how do we know there's frost, and how do we know it's gone?" Name the sensed variables first; the components to test choose themselves.</div>`
    },
    {
      heading: "Pressure Switches and Controls: Cut-Out, Cut-In, Differential",
      html: `
<p>A <strong>pressure switch</strong> opens or closes electrical contacts at chosen pressures, connecting the refrigeration circuit's pressures to the control ladder of Module 6. The vocabulary is precise:</p>
<ul>
<li><strong>Cut-out:</strong> the pressure at which the switch opens (or changes state) as pressure moves in the alarming direction.</li>
<li><strong>Cut-in:</strong> the pressure at which it resets/closes again as pressure returns to normal.</li>
<li><strong>Differential:</strong> the distance between cut-in and cut-out. Cut-in = cut-out + differential for a control that cuts out on falling pressure; the relationship flips direction for one that cuts out on rising pressure — always reason it through for the specific control.</li>
</ul>
<p><strong>Worked example.</strong> A low-pressure control used for pump-down duty is specified: cut-in 65 psig, differential 25 psi. On falling pressure it therefore cuts out at 65 − 25 = 40 psig. Sequence: pressure falls through 65 (nothing yet — it is already running), continues to 40 → the switch opens and stops the compressor for pump-down; pressure later rises to 65 → the switch cuts back in. If a technician sets the differential to 10 instead, cut-out becomes 55 psig — the control now stops the machine far earlier in every cycle, a 'mystery short-cycling' created entirely by one adjustment.</p>
<p>Distinguish control duty by reset style. <strong>Automatic-reset</strong> switches (most low-pressure and fan-cycling controls) restore themselves when pressure normalizes — right for controls. <strong>Manual-reset</strong> switches (typical of safety high-pressure cut-outs on many systems) stay open until a person presses reset — deliberate, because the event they report (dangerously high pressure) deserves a human investigation, exactly the philosophy of Module 5's manual-reset overloads.</p>
<div class="callout"><strong>Key idea:</strong> Never quote a pressure control by one number. Cut-out, cut-in, and differential are a triple: given any two, derive the third, and check the derived value against what the system should actually do.</div>`
    },
    {
      heading: "Applying Pressure Controls: Safeties, Cycling, and Service Judgments",
      html: `
<p>Three applications cover most of the field. A <strong>high-pressure cut-out</strong> is a safety: it stops the compressor before discharge pressure reaches dangerous territory — from a failed condenser fan, a filthy coil, or an overcharge. If it is manual-reset, its trip is a report demanding a cause (Module 5's rule), and resetting it repeatedly into a still-faulty condenser circuit is abuse. A <strong>low-pressure cut-out</strong> protects against the low side collapsing — lost charge, a restriction, a frozen coil — and doubles as a control in pump-down systems, where its cut-in/cut-out pair runs the machine's daily routine. <strong>Fan-cycling controls</strong> switch condenser fans on discharge pressure to hold head pressure up in cold weather.</p>
<p>Testing a pressure switch is a marriage of gauge and meter: watch the actual pressure on your manifold while watching the contact state with your meter (voltage across the open/closed contact, per Module 6's rung logic), and record the pressures where the contacts actually change. Compare against the specified cut-in/cut-out values for that control — a switch that changes state far from its settings, or chatters at the changeover, is done regardless of how clean it looks.</p>
<p>Two service sins to retire: <strong>jumping out a pressure safety</strong> 'to test' and leaving it jumped — the unit now runs unprotected — and <strong>adjusting a control to mask a system problem</strong>, like lowering a high-pressure cut-out's workload by pretending the condenser isn't dirty. Switches report pressures; fix pressures at their causes.</p>
<div class="callout"><strong>Key idea:</strong> A pressure switch is a translator between the refrigeration circuit and the ladder diagram: pressures in, contact states out. Test both sides of the translation — gauge on the process, meter on the contacts — and believe both.</div>`
    }
  ],
  keyTerms: [
    { term: "Defrost initiation", def: "The event or schedule that starts a defrost cycle — typically time-based, increasingly demand-based on sensed conditions." },
    { term: "Defrost termination", def: "The event that ends defrost: a temperature or pressure sensor proving the coil is clear, backed up by a maximum time limit." },
    { term: "Fail-safe time", def: "The maximum defrost duration set on a time clock or board; terminates defrost even if the termination sensor fails." },
    { term: "Defrost time clock", def: "A motor-driven timer that schedules defrosts on a 24-hour dial and switches power between the refrigeration load and the defrost load." },
    { term: "Fan delay (drip time)", def: "The brief hold-off of evaporator fans after defrost so melt-water drains and the coil re-chills before air moves again." },
    { term: "Time/temperature defrost", def: "Time-initiated, temperature-terminated defrost: the clock starts it, a coil temperature sensor ends it." },
    { term: "Demand defrost", def: "Defrost initiated and/or terminated by sensed need (temperature, pressure, or board logic) rather than by schedule alone." },
    { term: "Pressure switch/control", def: "A device that changes electrical contact state at set pressures, linking refrigeration pressures to the control circuit." },
    { term: "Cut-out pressure", def: "The pressure at which a control's contacts open (change state) as pressure moves in the direction the control guards against." },
    { term: "Cut-in pressure", def: "The pressure at which a control's contacts reset as pressure returns toward normal." },
    { term: "Differential", def: "The pressure difference between cut-in and cut-out; given any two of the three values, the third is fixed." },
    { term: "High-pressure cut-out", def: "A safety control that stops the compressor on excessive discharge pressure; often manual reset." },
    { term: "Low-pressure cut-out", def: "A control/safety that stops the compressor on excessively low suction pressure; also used as the operating control in pump-down systems." },
    { term: "Pump-down control", def: "Using a low-pressure control's cut-in/cut-out pair to run a compressor that pumps refrigerant into the receiver/condenser at the end of each cycle." },
    { term: "Manual-reset control", def: "A switch that stays tripped until a person resets it, forcing investigation of the event it reported." },
    { term: "Automatic-reset control", def: "A switch that restores itself when conditions normalize; appropriate for operating controls." },
    { term: "Fan-cycling control", def: "A pressure control that cycles condenser fans to maintain head pressure in low ambient conditions." },
    { term: "Termination sensor", def: "The temperature or pressure sensor mounted to sense coil condition and signal that defrost is complete." }
  ],
  video: {
    title: "HVACR TRAINING: Paragon Mechanical Defrost Timer Explained (Paragon Defrost Timer Troubleshooting)",
    embedUrl: "https://www.youtube.com/embed/lA-zNzTigcU",
    note: "A walk-through of a widely used mechanical defrost timer family: how defrosts are scheduled, the difference between time-, temperature-, and pressure-terminated models, and the built-in safety back-up termination — the layered design this module describes. Terminal details are model-specific, so follow your unit's diagram in the field.",
    more: [
      { title: "How To Troubleshoot a Time Temperature Defrost Failure on a Heat Pump", url: "https://www.youtube.com/watch?v=hfJXpPhlYtg" },
      { title: "Heat Pump Troubleshooting- Testing Defrost Board to Force Defrost!", url: "https://www.youtube.com/watch?v=5c5R3uYSy5U" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A low-pressure control is set for cut-in 80 psig with a differential of 30 psi, cutting out on falling pressure. Find the cut-out, and describe the full on/off sequence as pressure falls and rises.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Cut-out = cut-in − differential = 80 − 30 = <strong>50 psig</strong>. Step 2: Falling: pressure drops through 80 (control already closed, machine running), continues to 50, where the contacts open and the machine stops. Step 3: Rising: pressure recovers through 50 (still open), reaches 80, where the contacts cut back in and the machine may restart. The 30 psi gap between stop and restart is what prevents rapid short-cycling at one pressure.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A freezer's defrosts start on schedule, but every defrost now runs to the clock's maximum duration and the box temperature swings high during each one. Termination is by a coil temperature sensor. Give the two most likely faults and your first test.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Initiation works (defrosts start), so the clock schedule and defrost load are functional; termination never signals early, so suspicion falls on the <strong>termination sensor</strong> (failed, or dislodged from the coil so it never senses coil temperature) or the <strong>termination circuit/wiring</strong> back to the clock. Step 2: First test: during a defrost, verify with a meter whether the termination signal ever arrives at the clock as the coil warms, and physically inspect the sensor's mounting on the coil. The fail-safe time ending each defrost is the design working as intended — it is the backstop, not the fault.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> After service, a pump-down system short-cycles: it stops far too early in each run and restarts quickly. You find the low-pressure control's differential was 'tightened up' during the visit. Explain, with numbers: original cut-in 65, differential 25; now differential 5.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Originally: cut-out = 65 − 25 = 40 psig — the compressor ran until suction fell to 40 before stopping. Step 2: With differential 5: cut-out = 65 − 5 = 60 psig — the compressor now stops the moment pressure dips to 60, having barely run. Step 3: Restart still occurs at 65, only 5 psi above the stop point, so pressure recovers almost immediately and restarts it — textbook short-cycling, created by one misunderstood adjustment. Restore the specified differential.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A manual-reset high-pressure cut-out is found tripped on a rooftop unit on the hottest day of the year. List, in order, what you check before resetting it, and state the rule you are following.</p>",
      solution: "<p><strong>Answer:</strong> Rule (Module 5): a manual-reset safety trip is a report; find the cause before resetting. Checks: (1) condenser coil condition (dirt, blockage); (2) condenser fan operation and airflow; (3) actual discharge/head pressure behavior with gauges once running under supervision; (4) charge-related causes of high head pressure; (5) the switch itself — does it trip near its specified setting when compared against gauge pressure? Only after the cause is corrected do you reset and observe a full run.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A heat pump ices its outdoor coil solid between defrosts, although the defrost itself, when it finally runs, clears the coil completely and terminates correctly. Which act of the defrost play is failing, and where do you look?</p>",
      solution: "<p><strong>Answer:</strong> <strong>Initiation.</strong> Termination and the defrost heat itself are proven good by the complete clear. Look at whatever starts defrost: the board's time interval setting/jumpers, a failed initiation sensor input on a demand board (the board never learns frost is present), or clock/board power and scheduling. Do not lengthen defrosts or raise termination settings — those acts are healthy.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Explain fan delay (drip time) to a new apprentice: what happens without it, in terms of product and coil?</p>",
      solution: "<p><strong>Sample answer:</strong> 'When defrost ends, the coil is warm and wet. If the fans start instantly, they blow that warm, moist air over the product — warming what you just paid to keep cold — and spray droplets back onto the coil, where they refreeze into the next ice problem. Fan delay keeps the fans off briefly: water drains away, the returning refrigeration re-chills the coil, and only then do the fans move air. Skipping it doesn't break the machine today; it taxes every day after.'</p>"
    }
  ],
  quiz: [
    {
      q: "In a time-initiated, temperature-terminated defrost, the clock's maximum duration setting serves as:",
      choices: ["The normal way every defrost ends", "A fail-safe that ends defrost if the termination sensor fails", "The initiation sensor", "A fan-delay adjustment"],
      answer: 1,
      explanation: "Correct: (b). Normally the coil temperature sensor terminates defrost when the frost is gone; the time limit is the backstop that prevents a runaway defrost if that sensor or its wiring fails. (a) If time ended every defrost, the sensor would have no job. (c) Initiation is the schedule of start times, a different setting. (d) Fan delay is a separate post-defrost function."
    },
    {
      q: "A pressure control has cut-in 70 psig and cut-out 45 psig (falling pressure). Its differential is:",
      choices: ["115 psi", "25 psi", "70 psi", "45 psi"],
      answer: 1,
      explanation: "Correct: (b). Differential = cut-in − cut-out = 70 − 45 = 25 psi. (a) adds the two values. (c) and (d) merely restate one of the settings instead of computing their difference."
    },
    {
      q: "A high-pressure cut-out that requires manual reset is designed that way because:",
      choices: ["Automatic-reset versions cost more", "The event it reports — dangerously high pressure — should be investigated by a person before the machine runs again", "Manual switches are more accurate", "Its contacts cannot reclose automatically"],
      answer: 1,
      explanation: "Correct: (b). Manual reset forces a diagnosis: find why pressure went high before re-running the compressor — the same philosophy as manual-reset overloads. (a) Cost is not the design driver for a safety philosophy. (c) Accuracy is not the distinction between reset styles. (d) The contacts physically could reclose; the latch is deliberate."
    },
    {
      q: "A freezer defrosts on schedule but the box warms badly during every defrost, with each defrost lasting the full maximum time. The most likely failure is in:",
      choices: ["Initiation", "Termination sensing or its circuit", "The defrost heaters", "Fan delay"],
      answer: 1,
      explanation: "Correct: (b). Defrosts start (initiation works) and produce heat (heaters work), but never end early — the termination sensor is not proving a clear coil, so every cycle runs to the fail-safe time. (a) Failed initiation would mean no defrosts at all. (c) Failed heaters would give incomplete melting, not full-length defrosts. (d) Fan delay affects the minutes after defrost, not its full duration."
    },
    {
      q: "Fan delay after defrost exists to:",
      choices: ["Let the compressor rest", "Hold evaporator fans off while melt-water drains and the coil re-chills", "Give the time clock motor a break", "Raise head pressure"],
      answer: 1,
      explanation: "Correct: (b). Immediate fan start would blow warm moist air over the product and re-freeze droplets on the coil. (a) Compressor rest is handled by other controls and is not the delay's purpose. (c) The clock runs continuously by design. (d) Fan delay is an evaporator-side function; head pressure is a condenser-side concern."
    },
    {
      q: "Setting a low-pressure control's differential much smaller than specified will tend to cause:",
      choices: ["Longer off-cycles", "Short-cycling, because cut-out moves close to cut-in", "Higher suction pressure at all times", "No change in operation"],
      answer: 1,
      explanation: "Correct: (b). Cut-out = cut-in − differential; a tiny differential stops the machine almost where it starts it, so pressure rattles the contacts on and off. (a) A smaller differential shortens, not lengthens, the off interval. (c) The control does not set operating pressure broadly; it sets switch points. (d) The worked example in this module shows a change from a 30 psi to a 5 psi band transforming cycle behavior."
    },
    {
      q: "To test a pressure switch properly in the field, you should observe:",
      choices: ["Only its contact continuity on the bench", "The actual system pressure on gauges at the moment its contacts change state, compared with its specified settings", "Whether its reset button feels firm", "Its age from the date code"],
      answer: 1,
      explanation: "Correct: (b). A pressure switch is a pressure-to-contact translator; only a live comparison of gauge pressure versus contact changeover verifies the translation. (a) Bench continuity proves contacts exist, not that they change at the right pressures. (c) Button feel is not a measurement. (d) Age informs suspicion but proves nothing about calibration."
    },
    {
      q: "A heat pump's coil-temperature-based defrost board decides defrost is finished primarily by:",
      choices: ["Elapsed clock time alone", "The outdoor coil sensor showing the coil has warmed to a clear-coil condition (with a maximum-time backstop)", "Outdoor air temperature reaching the thermostat setpoint", "The auxiliary heat turning off"],
      answer: 1,
      explanation: "Correct: (b). Temperature termination reads the coil itself: warm coil = frost gone, with board time limits as the safety backstop. (a) Time alone is the initiation side on typical boards and the backstop, not the primary termination proof. (c) The indoor setpoint has no direct knowledge of coil frost. (d) Auxiliary heat state is an effect of defrost operation, not its termination signal."
    }
  ],
  studyGuide: `
<h3>Module 8 — Defrost Controls, Timers &amp; Pressure Switches: Quick Reference</h3>
<p><strong>Defrost in three acts:</strong> initiation (schedule or demand) → termination (temperature or pressure proof, always with a fail-safe maximum time) → fan delay (drip time: fans held off while water drains and the coil re-chills).</p>
<p><strong>Time clock:</strong> constant power to the clock motor; contacts swap power between refrigeration load and defrost load; a termination input lets a coil sensor end defrost early. Follows: never-starts = initiation side; never-stops/overlong = termination side.</p>
<div class="formula">Pressure control triple: given any two — cut-in, cut-out, differential — the third follows. Falling-pressure control: cut-out = cut-in − differential. Example: cut-in 65, differential 25 → cut-out 40 psig.</div>
<p><strong>Reset philosophy:</strong> automatic reset for operating controls; manual reset for safety cut-outs — a tripped manual-reset high-pressure control is a report: find the cause (coil, fan, pressure) before resetting.</p>
<p><strong>Testing:</strong> gauge on the process, meter on the contacts — record the pressures where the switch actually changes state and compare with its specified settings.</p>
<p><strong>Watch out:</strong> never leave a safety jumped, and never 'fix' pressures by bending a control's settings away from spec.</p>
`
};
