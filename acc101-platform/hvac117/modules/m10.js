// HVAC 117 - Module 10: Variable-Speed Motors & ECM Troubleshooting
module.exports = {
  number: 10,
  slug: "variable-speed-ecm-motors",
  title: "Variable-Speed Motors & ECM Troubleshooting",
  estTime: "3–4 hours",
  objectives: [
    "Explain what an ECM is — a brushless DC motor with its electronics module — and how it differs from a PSC motor in construction and control.",
    "Distinguish constant-torque ECM operation from constant-airflow (variable-speed) ECM operation and their typical control signals.",
    "State the two things every ECM needs before it can run: line-voltage power and a valid control signal — and test for both.",
    "Perform the basic motor-versus-module separation checks: winding-to-winding resistance comparison and winding-to-ground test.",
    "Recognize common ECM failure patterns and the role of high static pressure and power surges in module failures."
  ],
  sections: [
    {
      heading: "What an ECM Actually Is",
      html: `
<p>An <strong>ECM</strong> — electronically commutated motor — is not an AC induction motor with a fancy switch. It is a <strong>brushless DC motor</strong> whose permanent-magnet rotor is driven by an attached electronics package, the <strong>module</strong>, which rectifies the incoming AC line power to DC and then electronically switches that DC into the motor's three windings in sequence, creating the rotating field. There are no brushes and no capacitors; the 'commutation' that a brushed motor does mechanically, the module does electronically, at whatever speed the control commands.</p>
<p>Two consequences define all ECM service. First, the motor and its module are a <strong>matched, programmed pair</strong>: the module carries the operating program for its specific equipment application, so modules are not freely interchangeable between units even when they look identical. Second, the motor is inherently a three-phase-style machine inside — its three windings should measure <em>approximately equal</em> resistance to each other, a fact that powers the key motor test in Section 4.</p>
<p>Why manufacturers moved: programmed control of speed and torque delivers soft starts, precise airflow, quiet ramps instead of bangs, and far better efficiency at part speed than a PSC motor (Module 3) can offer. Why technicians must study them: the PSC diagnostic script — capacitor, switch, windings — mostly does not apply. There is no capacitor to test. The script that replaces it is: power, signal, then motor-versus-module separation.</p>
<div class="callout"><strong>Key idea:</strong> An ECM is two products in one housing: a simple, rugged three-winding motor and a small computer bolted to it. Nearly every diagnosis ends by deciding which of the two you are actually looking at.</div>`
    },
    {
      heading: "Constant Torque vs Constant Airflow",
      html: `
<p>Two ECM families dominate residential air handlers and furnaces, and they behave differently enough that confusing them scrambles diagnosis:</p>
<ul>
<li><strong>Constant-torque ECMs</strong> (the tap-driven style) behave like a PSC motor with several speed taps — except the 'taps' are low-voltage signal inputs, and the motor holds its programmed <em>torque</em> steady as conditions change. The control board (or thermostat calls) selects which tap signal is present, and the motor spins up to the corresponding programmed behavior. It does not measure airflow; it delivers set torque and accepts the resulting speed.</li>
<li><strong>Constant-airflow (variable-speed) ECMs</strong> are programmed with a target airflow. The module senses how hard the motor is working and adjusts speed continuously to hold that airflow as duct conditions change — within its design limits. This is why a variable-speed blower facing a dirty filter or crushed duct runs <em>faster and louder</em> rather than delivering less air: it is spending speed to defend its airflow target, at real cost in energy and wear.</li>
</ul>
<p>That second behavior is diagnostic gold. A constant-airflow blower that has grown loud over a season is often reporting an airflow restriction, not dying: the module is compensating. Conversely, asking a constant-airflow motor to overcome a severely restricted system indefinitely overheats the module — the eventual 'motor failure' whose true cause is ductwork. Check the air path and static pressure story before condemning the electronics that were defending against it.</p>
<div class="callout"><strong>Key idea:</strong> Constant torque follows its signal; constant airflow follows its target. Know which animal you have: the same 'runs too fast and loud' observation is a command problem in one and a restriction report in the other.</div>`
    },
    {
      heading: "What an ECM Needs: Power and a Signal",
      html: `
<p>Every ECM, of either family, requires two independent things before it can turn:</p>
<ol>
<li><strong>Line-voltage power</strong> to the module — the mains feed (120 V or 240 V depending on the equipment) that the module rectifies to run the motor. Unlike a PSC motor, many ECMs receive this power <em>whenever the equipment is powered</em>, not only during a call.</li>
<li><strong>A valid control signal</strong> telling it to run and how: depending on the design, a 24 V call on a specific tap input, a variable/pulse-width signal from the board, or a digital communicating link between board and motor.</li>
</ol>
<p>The troubleshooting fork is immediate and costs two meter readings: with a call active, verify line voltage actually present at the motor's power connector, and verify the expected control signal actually present at the motor's signal connector — measured per that manufacturer's documentation for that motor family, because signal forms vary by design and generation. Missing power? Work upstream — disconnect, board output, harness. Power present, signal missing? The fault is upstream in the board or controls; the motor is innocent and waiting. Both present and the motor will not run? Now — and only now — the motor/module assembly itself is the suspect, and the next section separates its two halves.</p>
<p>Harness integrity sits underneath everything: multi-pin connectors between board and motor carry both the power and the signal story, and a backed-out pin, a chafed conductor, or a moisture-corroded terminal can counterfeit any failure in this module. Inspect and prove the harness before pricing parts; experienced ECM diagnosticians check plugs first because plugs fail first.</p>
<div class="callout"><strong>Key idea:</strong> Power AND signal — an ECM with only one of the two is a motor being blamed for someone else's silence. Prove both at the motor's own connectors before condemning anything with a winding in it.</div>`
    },
    {
      heading: "Separating Motor from Module",
      html: `
<p>With power and signal proven, separate the assembly's two halves with the motor unplugged and the module separated from the motor per the manufacturer's procedure (module capacitors can hold a charge — allow the manufacturer's stated discharge wait after removing power before handling).</p>
<p><strong>The winding checks (motor side).</strong> Measure resistance between each pair of the motor's three winding leads. A healthy motor reads <strong>approximately equal</strong> values across all three pairs — the signature of a balanced three-winding machine. One pair wildly different from the others, an open pair, or a shorted pair condemns the motor windings. Then measure from each winding lead to the motor shell/ground: any continuity means a winding is grounded, and the motor is condemned on that reading alone (the same verdict as Module 3's hermetic test).</p>
<p><strong>The module verdict.</strong> If the windings pass both tests and spin freely by hand (bearings sound), the motor is a healthy three-winding machine that is not being driven — and the fault belongs to the <strong>module</strong>: it had power, it had a signal, and it produced no drive. That is a diagnosis by evidence and elimination, which is the strongest kind available for a sealed electronics package you cannot probe internally.</p>
<p>Manufacturer test tools exist for many ECM families (bench testers that substitute a known signal and power the module/motor directly). Where available, they formalize exactly this logic: known-good inputs in, observe whether drive comes out. Whether you use the tool or the meter method, the reasoning is identical — never let the tool replace the reasoning.</p>
<div class="callout"><strong>Key idea:</strong> Equal winding resistances + no ground + free spin = good motor. Good motor + proven power and signal + no run = bad module. State the verdict as that chain of evidence, not as a hunch.</div>`
    },
    {
      heading: "Failure Patterns and Prevention",
      html: `
<p>Certain ECM failure stories repeat so reliably that they belong in your pattern library:</p>
<ul>
<li><strong>The post-storm module.</strong> The motor died during or just after an electrical storm or a known power event. Surges are a leading module killer; where a module has died this way, a manufacturer-approved surge protection strategy for the replacement is a professional conversation to have, not an upsell.</li>
<li><strong>The compensation death.</strong> A constant-airflow motor worked for months against a clogged filter, a collapsed duct liner, or registers closed throughout the house — ramping ever higher to defend airflow — until the module overheated and failed. Replacing the module without relieving the restriction schedules the sequel.</li>
<li><strong>The rocking or hunting motor.</strong> The motor rocks back and forth, starts and stops, or runs erratically at low speed — behavior pointing at the module's drive or sensing rather than at the windings, which cannot produce a rhythm like that on their own.</li>
<li><strong>The connector casualty.</strong> Intermittent operation that changes when the harness is moved; heat-discolored or loose pins in the power connector from a long-standing poor contact (Module 1's I²R at a pin scale).</li>
</ul>
<p>Prevention is mostly respect for conditions: correct airflow across the equipment the motor serves, clean power practices (tight connections, sound grounding, surge awareness), gentle handling of modules (no prying on boards, observe discharge waits), and exact-match replacements programmed for the application. An ECM replaced 'with one that looks the same' is a compatibility fault you installed yourself.</p>
<div class="callout"><strong>Key idea:</strong> Modules die of causes — surges, heat from overwork, moisture, bad connections. The replacement inherits the cause unless you evict it; the diagnosis is not finished when the motor spins again.</div>`
    }
  ],
  keyTerms: [
    { term: "ECM (electronically commutated motor)", def: "A brushless DC motor driven by an attached electronics module that rectifies AC line power and switches DC into three windings in sequence." },
    { term: "Module (ECM control)", def: "The electronics package bolted to an ECM, containing the rectifier, drive electronics, and the operating program matched to its application." },
    { term: "Brushless DC motor", def: "A permanent-magnet-rotor motor with no brushes or commutator; commutation is performed electronically by the module." },
    { term: "Constant-torque ECM", def: "An ECM programmed to hold set torque levels selected by tap-style low-voltage signals; it does not measure or correct airflow." },
    { term: "Constant-airflow ECM", def: "A variable-speed ECM programmed to hold a target airflow, adjusting speed as duct conditions change — within its limits." },
    { term: "Variable-speed operation", def: "Continuous adjustment of motor speed by the module (ramps, airflow defense) rather than fixed PSC-style speed taps." },
    { term: "Control signal (ECM)", def: "The board's instruction to the motor — a 24 V tap call, a variable/PWM signal, or a digital communication, depending on the motor family." },
    { term: "Programmed (matched) module", def: "A module carrying software/settings for a specific equipment application; visually identical modules are not necessarily interchangeable." },
    { term: "Winding balance check", def: "Comparing the three winding-to-winding resistances of an ECM motor; approximately equal readings indicate healthy windings." },
    { term: "Rocking/hunting", def: "An ECM symptom of rocking, surging, or erratic low-speed behavior pointing at module drive/sensing faults rather than windings." },
    { term: "Surge damage", def: "Module failure caused by line-voltage transients (storms, power events); a leading ECM module killer." },
    { term: "Static pressure burden", def: "The resistance of the duct system the blower works against; excessive burden forces constant-airflow motors to overspeed and overheat their modules." },
    { term: "Discharge wait", def: "The manufacturer-specified time to let an ECM module's internal capacitors discharge after power removal before handling or separating the module." },
    { term: "Go/no-go tester", def: "A manufacturer test tool that supplies known power and signal to an ECM to decide whether the motor/module responds — formalizing the power-and-signal method." },
    { term: "Soft start / ramping", def: "An ECM's programmed gradual speed changes, replacing the abrupt on/off behavior of PSC motors — quieter and gentler on ducts." },
    { term: "Tap signal input", def: "On constant-torque ECMs, the low-voltage input terminals that select programmed torque levels, analogous to PSC speed taps." },
    { term: "Communicating motor system", def: "An ECM arrangement where board and motor exchange digital data (demands, status, faults) rather than simple on/off signals." },
    { term: "Part-speed efficiency", def: "The ECM's efficiency advantage at reduced speed — a major energy reason ECMs replaced PSC blowers in modern equipment." }
  ],
  video: {
    title: "ECM Blower Diagnosis on a Carrier Infinity System (HVAC Variable Speed Blower Diagnosis)",
    embedUrl: "https://www.youtube.com/embed/xzmef7x1--k",
    note: "A real communicating-system ECM diagnosis: error codes for blower fault and lost communication, checks of plugs and blower condition, separating motor from module, and comparing winding resistances — the motor-versus-module separation of this module, performed on a live call. Note the safety wait observed before handling the disconnected motor.",
    more: [
      { title: "Testing ECM Variable Speed Fan Motor, Make Your Own Tester!", url: "https://www.youtube.com/watch?v=lKsIgjEJDII" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> An ECM blower does not run on a fan call. At the motor's connectors you find: line voltage present and correct; no control signal present on any input. The board is calling for fan. Verdict and next step?</p>",
      solution: "<p><strong>Answer:</strong> The motor/module is <strong>not condemned</strong> — it has power but no instruction; a motor cannot run on a signal it never receives. Next step: work the signal path backward — prove the signal leaving the board, then test the harness end to end (continuity per conductor, inspect for backed-out or corroded pins). The fault lives in the board's output or, most often, the harness between board and motor.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Winding checks on a separated ECM motor: pair readings of 12 Ω, 12 Ω, and 24 Ω; no continuity from any lead to the shell; the shaft spins freely. Interpret each fact and give the verdict.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The three pair readings should be approximately equal; two agree at 12 Ω but the third pair reads 24 Ω — one winding leg's relationships are wrong (a damaged or partially open winding section affects the two pairs touching it). Step 2: No ground fault and free spin clear the shell and bearings only. Step 3: Verdict: the <strong>motor windings are faulty</strong> — the module cannot be blamed for failing to drive a motor whose windings are unbalanced. Replace per the manufacturer's matched motor/module guidance.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A constant-airflow furnace blower has grown noticeably louder over a heating season while airflow at the registers feels unchanged. The filter is found fully clogged. Explain the loudness, and state what you would check before anyone orders a motor.</p>",
      solution: "<p><strong>Answer:</strong> The motor is defending its programmed airflow target against rising static pressure from the clogged filter: it speeds up — louder — and holds airflow nearly constant, exactly as designed. This is a restriction report, not a motor failure. Check: replace the filter, inspect the rest of the air path (coil face, duct restrictions, closed registers), and confirm the system quiets to normal behavior. Only persistent abnormal operation with a clean air path earns motor/module testing.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Both line power and the correct control signal are proven at a non-running ECM. Winding pairs are equal, no ground, shaft free. State the verdict as a chain of evidence, and the handling precaution before separating the module.</p>",
      solution: "<p><strong>Answer:</strong> Chain: (1) power present at the module; (2) valid signal present at the module; (3) motor windings balanced, ungrounded, mechanically free — the motor is a healthy machine not being driven; therefore (4) the <strong>module has failed</strong> to convert proven inputs into drive. Precaution: after removing power, observe the manufacturer's stated <strong>discharge wait</strong> — module capacitors can hold a charge — before unplugging and separating the module.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A replacement ECM 'that looked identical' from another unit is installed and now the blower runs at wrong speeds for every call. What principle was violated, and what is the correct sourcing rule?</p>",
      solution: "<p><strong>Answer:</strong> ECM modules are <strong>programmed for their specific application</strong>; visual identity is not functional identity. The borrowed module is faithfully running the wrong program. Rule: source the motor/module by the equipment manufacturer's part and programming specification for that exact unit — model-matched, not shape-matched — and verify operation against the unit's expected calls after installation.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Contrast the first three diagnostic steps for a dead PSC blower versus a dead ECM blower, and name the PSC step that has no ECM equivalent.</p>",
      solution: "<p><strong>Answer:</strong> PSC: (1) voltage at the motor during the call; (2) run-capacitor capacitance against its rating; (3) winding resistances by the sum rule, plus ground test. ECM: (1) line voltage at the motor's power connector; (2) control signal present at the motor's signal connector during the call; (3) harness integrity, then winding balance and ground tests. The PSC step with no ECM equivalent is <strong>capacitor testing</strong> — an ECM has no run capacitor; its module does that work electronically.</p>"
    }
  ],
  quiz: [
    {
      q: "An ECM is fundamentally:",
      choices: ["A PSC motor with a larger capacitor", "A brushless DC motor driven by an electronics module that commutates its windings electronically", "A three-phase motor on a phase converter", "A shaded-pole motor with electronic speed taps"],
      answer: 1,
      explanation: "Correct: (b). The module rectifies AC to DC and switches it through three windings in sequence — no brushes, no capacitor. (a) ECMs have no run capacitor at all. (c) The motor is internally three-winding but is not fed three-phase line power; the module synthesizes its drive from a single-phase feed. (d) Shaded-pole is a simple AC induction design, unrelated."
    },
    {
      q: "Before an ECM can run, it must have BOTH:",
      choices: ["A charged capacitor and a closed thermostat", "Line-voltage power at the module and a valid control signal", "A start relay and a run capacitor", "Three-phase power and a VFD"],
      answer: 1,
      explanation: "Correct: (b). Power without signal = waiting motor; signal without power = dead motor. Both must be proven at the motor's connectors. (a) and (c) list single-phase induction parts an ECM does not contain. (d) A VFD is a different drive technology; the ECM's electronics are integral to the motor."
    },
    {
      q: "A constant-airflow ECM facing a clogging filter will typically:",
      choices: ["Slow down and deliver less air, quietly", "Speed up to defend its airflow target, growing louder and working its module harder", "Stop and wait for the filter to be changed", "Switch itself into constant-torque mode"],
      answer: 1,
      explanation: "Correct: (b). Holding airflow against rising static pressure costs speed and module heat — the compensating behavior that both reports the restriction and, if ignored, kills the module. (a) describes a constant-torque or PSC response, not airflow defense. (c) The motor has no way to know the cause; it compensates rather than stopping. (d) Operating family is a design/programming property, not something the motor swaps on its own."
    },
    {
      q: "Healthy ECM motor windings, measured pair-to-pair, should read:",
      choices: ["Exactly the PSC sum-rule pattern of one large and two small readings", "Approximately equal resistances across all three pairs", "Zero ohms between all pairs", "Infinite resistance between all pairs"],
      answer: 1,
      explanation: "Correct: (b). An ECM's three windings form a balanced three-phase-style set; equality is the health signature. (a) is the single-phase Common/Start/Run pattern — a different machine. (c) Zero would mean the windings are shorted together. (d) Infinite would mean all windings are open."
    },
    {
      q: "Power and signal are proven at a non-running ECM; windings are balanced and ungrounded; the shaft spins freely. The verdict is:",
      choices: ["The motor windings have failed", "The module has failed — a healthy motor is not being driven", "The thermostat has failed", "The ductwork is restricted"],
      answer: 1,
      explanation: "Correct: (b). Every input is proven and the motor itself passes all its tests; the only element left is the module's conversion of input into drive. (a) is contradicted by the balanced, ungrounded winding results. (c) The signal was proven present at the motor, so the command chain is intact. (d) Restrictions change running behavior; they do not prevent a proven-powered motor from turning at all."
    },
    {
      q: "Why can't you freely swap an ECM module with a visually identical one from another unit?",
      choices: ["The mounting screws differ", "Modules carry programming matched to their specific equipment application", "ECM modules are single-use and self-destruct on removal", "The windings are inside the module"],
      answer: 1,
      explanation: "Correct: (b). The module's program — speeds, torques, airflow targets, responses — belongs to its original application; a look-alike runs the wrong program. (a) Hardware differences are trivial compared with programming. (c) Modules can be removed and refitted on their own application. (d) The windings are in the motor section; the module is the electronics."
    },
    {
      q: "The safety step specific to separating an ECM module is to:",
      choices: ["Discharge the run capacitor first", "Wait the manufacturer's stated discharge time after power removal, since module capacitors can hold a charge", "Ground the signal pins", "Spin the motor backward by hand"],
      answer: 1,
      explanation: "Correct: (b). The module's internal DC capacitors can retain charge after disconnection; the specified wait makes handling safe. (a) An ECM has no run capacitor to discharge — that is a PSC task (and a real one there). (c) Grounding signal pins risks damaging electronics. (d) Hand-spinning has no discharging role and proves nothing electrical."
    },
    {
      q: "A constant-torque ECM differs from a constant-airflow ECM in that it:",
      choices: ["Has no electronics module", "Holds programmed torque levels selected by its signal taps, without measuring or correcting airflow", "Cannot be used in furnaces", "Runs only on DC line power"],
      answer: 1,
      explanation: "Correct: (b). Constant-torque designs behave like multi-tap motors under signal control; only constant-airflow designs sense their work and adjust speed to hold CFM. (a) Both families are ECMs with modules. (c) Constant-torque ECMs are common in furnaces and air handlers. (d) Both families are fed AC line power that the module rectifies internally."
    }
  ],
  studyGuide: `
<h3>Module 10 — Variable-Speed Motors &amp; ECM Troubleshooting: Quick Reference</h3>
<p><strong>What it is:</strong> brushless DC motor + programmed electronics module. No capacitor, no brushes, no start switch. Motor and module are a matched, application-programmed pair.</p>
<p><strong>Families:</strong> constant torque — tap-style signals select programmed torque (acts like a smart multi-speed PSC). Constant airflow — module adjusts speed to hold a CFM target; growing loudness against a clogging filter is compensation, not failure.</p>
<p><strong>The two prerequisites:</strong> line-voltage power at the power connector AND a valid control signal at the signal connector, both proven during a call. Missing either = look upstream (board, harness) before touching the motor.</p>
<p><strong>Motor vs module:</strong> unplug, observe the discharge wait, separate per manufacturer. Windings: three pair readings approximately equal + no lead-to-shell continuity + free spin = healthy motor. Healthy motor + proven power/signal + no run = failed module.</p>
<p><strong>Killers:</strong> power surges, sustained high static pressure (compensation overheating), moisture/corroded or backed-out connector pins. Fix the cause with the part.</p>
`
};
