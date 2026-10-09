// HVAC 127 - Module 7: Electronic Controls & Unit Control Boards
module.exports = {
  number: 7,
  slug: "electronic-controls-unit-boards",
  title: "Electronic Controls & Unit Control Boards",
  estTime: "3–4 hours",
  objectives: [
    "Describe what an integrated furnace control (IFC) does across a full heating cycle and which inputs it watches.",
    "Explain defrost board logic on a heat pump: initiation, termination, and the sensors involved.",
    "Describe compressor protection functions — anti-short-cycle timing, pressure and temperature cutouts, and lockouts.",
    "Read board fault codes correctly, including the discipline of counting flashes and checking the maker's chart.",
    "Explain, at the controls level, how low-pressure chiller protection and purge-unit operation are supervised."
  ],
  sections: [
    {
      heading: "The Integrated Furnace Control: One Board, Whole Sequence",
      html: `
<p>Open a modern furnace and the electromechanical relay-and-timer stack of the past is gone. An <strong>integrated furnace control (IFC)</strong> — one circuit board — receives the thermostat's W call and conducts the entire heating sequence while watching every safety: it starts the inducer, checks the pressure switch proving draft, powers the igniter, opens the gas valve, proves flame through the flame sensor, times the blower on, and runs the post-purge. Every step is conditional: no draft proof, no ignition trial; no flame proof within its trial window, the valve closes and the board may retry or lock out.</p>
<p>The board thinks in the Module 5 language — inputs (stat call, pressure switch, limit, rollout, flame signal) and outputs (inducer, igniter, valve, blower) — but its logic is sequential and timed, which changes troubleshooting: you are no longer asking "why won't it run?" but "<em>where in the sequence did it stop?</em>" The answer is always observable: the last thing that happened and the first thing that didn't bracket the fault. A board that starts the inducer and stops has a different story (draft proving) than one that never stirs at all (power, call, or a lockout already latched).</p>
<div class="callout"><strong>Key idea:</strong> Board troubleshooting is sequence troubleshooting. Identify the step where progress halts, then test the input that step was waiting for or the output it failed to produce.</div>`
    },
    {
      heading: "Fault Codes: The Board Is Talking",
      html: `
<p>Most boards report their reasoning through an LED: steady, heartbeat, or counted flashes, with the code legend printed on the unit's door or in the maker's literature. Codes are <em>manufacturer-specific</em> — the same flash count means different things on different brands — so the discipline is procedural, not memorized:</p>
<ul>
<li><strong>Retrieve before you reset.</strong> Cycling power clears many codes and lockouts; the evidence evaporates. Read and record the code first.</li>
<li><strong>Count carefully and use that unit's chart.</strong> Never diagnose from another brand's table or from memory of a similar board.</li>
<li><strong>Treat the code as a witness statement, not a verdict.</strong> "Pressure switch open" means the board didn't see the switch close — which can be the switch, the inducer, a blocked vent, a cracked hose, or condensate in the trap. The code names the input; the cause is still yours to find.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Parts-swapping by code — replacing the named component because the code mentioned it. Codes report what the board <em>saw</em>; boards see open switches caused by failed motors, blocked flues, and broken wires at least as often as by failed switches.</div>
<p><strong>Worked example:</strong> A board flashes its "flame lost during run" pattern repeatedly across several cycles. The flame sensor cleans up bright and the microamps test in range in your presence — but the fault only occurs on windy nights. The code told the truth (flame signal dropped); the cause is outside the box: gusts disturbing the burner through a compromised vent termination. Codes start investigations; they don't close them.</p>`
    },
    {
      heading: "Defrost Boards and Heat Pump Control",
      html: `
<p>A heat pump in heating mode frosts its outdoor coil, and the <strong>defrost control board</strong> manages the necessary evil of melting it: periodically the board reverses the system into cooling mode, stops the outdoor fan so heat builds, and melts the frost — while signaling the indoor unit to bring on auxiliary heat to temper the now-cool air at the registers.</p>
<p>Boards initiate defrost by combinations of <strong>time and temperature</strong>: a timer accumulates compressor run time, and a defrost sensor (thermistor or thermostat on the outdoor coil) confirms the coil is actually cold enough to need it. Termination occurs when the sensor reports the coil warm (frost gone) or a maximum time elapses. Boards provide a <strong>test function</strong> (typically shorting designated test pins or a jumper speed-up) so you can force a defrost on demand and watch the whole event: valve shift, fan stop, aux signal, termination, and recovery. If you cannot force it in test, it will not happen in weather.</p>
<div class="callout"><strong>Key idea:</strong> Diagnose defrost as a sequence too: initiation conditions met? → board commands shift? → valve actually shifts? → sensor terminates it? The famous 'steam show' on a cold morning is a healthy defrost; a coil entombed in ice for days is a sequence that stopped somewhere.</div>
<p>Sensor placement is destiny here: a defrost sensor that has fallen off its coil line reports warm air forever, and the board — trusting its input, as Module 1 warned — never initiates. The board is fine; its eyes are lying on the ground.</p>`
    },
    {
      heading: "Compressor Protection Modules",
      html: `
<p>Compressors are the most expensive components boards protect, and a small family of guards watches them:</p>
<ul>
<li><strong>Anti-short-cycle timer:</strong> enforces a minimum off-time (commonly a few minutes) after any stop, so pressures can equalize and the compressor never restarts against a load or chatters on a bouncing stat. A system "dead" for three minutes after a power blink may be this timer doing its job — know it before you condemn parts.</li>
<li><strong>Pressure switches/transducers:</strong> low-pressure cutout protects against running in a vacuum or without charge (loss of cooling and oil return); high-pressure cutout protects against condenser failure overpressure. Boards may treat repeated trips as a <strong>lockout</strong> requiring a manual reset or power cycle — by design, so a human investigates.</li>
<li><strong>Temperature protection:</strong> discharge-line and internal overload sensors stop the compressor when it's cooking itself.</li>
<li><strong>Voltage/phase monitors</strong> (larger equipment): refuse or stop operation on lost phase, reversal, or severe imbalance.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> A lockout is a message: 'this fault happened enough times that I want a person.' Clearing lockouts repeatedly without finding the cause converts a protection system into a countdown.</div>
<p>On low-pressure chillers — the EPA Type III family — this protection philosophy scales up: the control panel supervises evaporator pressure/temperature approaching freeze conditions, chilled-water flow proof, and oil system status, and runs the <strong>purge unit</strong>, a small refrigerating device that periodically removes non-condensable gases (air that leaked in under vacuum) from the top of the condenser and returns refrigerant while exhausting air. Excessive purge run time is itself an alarm — it means the machine is leaking air inward, and the control system is the first to know.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>An IFC sequences the whole furnace cycle conditionally: inducer → draft proof → ignition → valve → flame proof → blower → post-purge.</li>
<li>Fault codes are board- and brand-specific; retrieve before reset, count against that unit's chart, and treat codes as witness statements naming an input — the cause still needs finding.</li>
<li>Defrost boards initiate on time + coil temperature, terminate on coil temperature or max time, and offer a test function to force the sequence.</li>
<li>Compressor guards: anti-short-cycle delay, high/low pressure protection, temperature protection, voltage/phase monitoring; repeated trips become lockouts demanding a human.</li>
<li>Chiller controls extend the same philosophy: freeze protection, flow proof, and purge-unit supervision with run-time alarming.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Condemning the board first. Boards are replaced more often than they fail; inputs (sensors, switches, power quality) fail more. Prove every input honest and every output load sound before the board is guilty.</div>
<div class="callout"><strong>Common mistake:</strong> 'Fixing' a no-start that is actually a protection delay or lockout behaving as designed. Check elapsed time and code state before opening the parts cannon.</div>
<p><strong>NATE Core and EPA link:</strong> board logic sits squarely in the NATE Core Basic Electrical domain, and the chiller purge supervision in this module is operating knowledge behind EPA Type III work on low-pressure machines. Controls fluency is not a specialty extra — it is woven through both credentials this program builds toward.</p>`
    }
  ],
  keyTerms: [
    { term: "Integrated furnace control (IFC)", def: "The single board that sequences and supervises a furnace's full heating cycle and its safeties." },
    { term: "Flame sensor", def: "A rod proving flame presence by flame rectification, reporting a microamp signal to the board." },
    { term: "Pressure switch (draft)", def: "A switch proving inducer draft before the board permits ignition." },
    { term: "Lockout", def: "A board state refusing operation after a fault or repeated faults until reset, forcing human investigation." },
    { term: "Fault code", def: "A manufacturer's LED flash pattern reporting what the board detected; meanings are model-specific." },
    { term: "Defrost board", def: "The heat pump control that initiates and terminates defrost using timers and a coil sensor." },
    { term: "Defrost sensor", def: "A thermistor or thermostat on the outdoor coil reporting coil temperature to the defrost board." },
    { term: "Anti-short-cycle timer", def: "A delay enforcing minimum compressor off-time to protect against rapid restarting." },
    { term: "Low-pressure cutout", def: "Protection stopping the compressor on dangerously low suction pressure." },
    { term: "High-pressure cutout", def: "Protection stopping the compressor on dangerously high discharge pressure." },
    { term: "Purge unit", def: "A device on low-pressure chillers removing non-condensable gases that leak into the machine under vacuum." },
    { term: "Non-condensables", def: "Gases (mainly air) that collect in a system and raise pressures without condensing." },
    { term: "Phase monitor", def: "A device protecting three-phase equipment against phase loss, reversal, or imbalance." },
    { term: "Trial for ignition", def: "The timed window in which a board attempts to light and prove flame before closing the valve." },
    { term: "Flame rectification", def: "The principle by which a flame conducts a small DC current between sensor rod and burner ground, proving flame." },
    { term: "Post-purge", def: "The inducer run period after a heating cycle clearing combustion products from the unit." },
    { term: "Test pins (defrost)", def: "Board terminals used to force/speed a defrost cycle for diagnosis." },
    { term: "Auxiliary heat signal", def: "The board/stat output energizing supplemental heat during defrost or heavy heating demand." }
  ],
  video: {
    title: "Heat Pump Defrost Thermostat Sensor DFT Testing!",
    embedUrl: "https://www.youtube.com/embed/U-U2offDWg0",
    note: "A bench-style test of the defrost thermostat sensor that tells a heat pump board what the outdoor coil is doing. Watch the sensor's behavior being verified directly — it demonstrates this module's core lesson that boards are only as right as the inputs they trust.",
    more: [
      { title: "How To Troubleshoot a Time Temperature Defrost Failure on a Heat Pump", url: "https://www.youtube.com/watch?v=hfJXpPhlYtg" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A furnace on a W call starts its inducer, then stops after roughly a minute with no ignition attempt. Name the step the sequence is waiting on and three causes you'd test.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The sequence halts at <strong>draft proof</strong>: inducer runs, pressure switch must close before ignition. Step 2: Test (a) the pressure switch itself (continuity as draft develops), (b) actual draft (weak inducer, blocked vent/intake), (c) the sensing path (cracked/kinked hose, condensate-filled trap or hose). Step 3: The board and igniter are innocent until draft proving passes.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A board repeatedly locks out after showing its 'pressure switch' code. The switch ohmic-tests fine on the bench. Give two in-system reasons the board might truthfully report the switch open, and your next test.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The code reports the board didn't <em>see</em> closure — in-system truths include (a) insufficient draft from a failing inducer or blocked venting so the switch never gets its pressure, and (b) a compromised sensing hose/trap (water, crack, blockage) between vent and switch. Step 2: Next test: measure draft pressure at the switch hose with a manometer during a call and compare with the switch's rating — that splits 'switch lies' from 'draft isn't there.'</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A heat pump's outdoor coil is a solid block of ice, but the defrost sensor tests in range on your bench meter at room temperature. The sensor had been found dangling by its leads during a prior visit and 'pushed back near the coil.' Explain the failure.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A healthy sensor in the wrong place measures the wrong thing: dangling/near the coil it senses air, not coil surface. Step 2: In heating weather the air near the coil can stay above the initiation threshold the board needs, so the board 'sees' a coil that never needs defrost. Step 3: Correct repair: mount/clip the sensor to its specified coil location so it tracks coil temperature, then force a test defrost and watch a full cycle initiate and terminate.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> After a brief power outage, a homeowner reports the AC 'died' — but it restarted by itself several minutes later and now runs fine. Explain what likely happened and why no repair is needed.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The <strong>anti-short-cycle timer</strong> imposed its minimum off-time after power returned, protecting the compressor from restarting against unequalized pressures and from chattering on unstable power. Step 2: A silent few minutes followed by normal operation is the protection working exactly as designed. Step 3: No parts are indicated; the correct service is explaining the delay so the next blink doesn't become another call.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A low-pressure chiller's purge unit run time has tripled over a month while cooling performance slowly sags. What is the control system telling maintenance, and why does it matter for both efficiency and EPA Type III practice?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Purge units remove non-condensables; rising run time means more <strong>air is leaking into the machine</strong> (low-pressure chillers operate under vacuum, so leaks go inward). Step 2: Air in the condenser raises condensing pressure and energy use while degrading capacity — the sag. Step 3: The purge alarm is an early leak-detection witness: find and repair the inward leak, because chronic air ingress also brings moisture, corrosion risk, and eventually refrigerant-side problems. The control system reported it first; believe it.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> State the correct order of operations when you arrive at a locked-out furnace, and justify step one.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <strong>Retrieve the fault code first</strong> — before cycling power — because resetting erases the board's testimony about where the sequence stopped. Step 2: Record the code, find that unit's chart (door/literature), and translate it to the input or step it names. Step 3: Test that input in-system (not just the part on a bench), find the cause, repair, then reset and run a complete observed cycle. Power-cycling first is evidence destruction in a panel.</p>"
    }
  ],
  quiz: [
    {
      q: "An IFC stops the heating sequence after starting the inducer, with no ignition trial. The sequence is waiting for:",
      choices: ["The blower to reach speed", "Draft proof from the pressure switch", "The thermostat to close G", "The flame sensor to warm up"],
      answer: 1,
      explanation: "Correct: (b). Ignition is conditional on proven draft. (a) The blower comes later, after flame is proven and a warm-up delay. (c) G is not part of a furnace heat call at all. (d) The flame sensor only reports once flame exists; it cannot gate ignition."
    },
    {
      q: "Fault codes should be interpreted by:",
      choices: ["Memorizing one universal code table", "Counting the flashes and using that specific unit's/manufacturer's chart", "Guessing from the nearest similar board", "Resetting power and seeing if they return"],
      answer: 1,
      explanation: "Correct: (b). Codes are model-specific; the unit's own legend is the only reliable table. (a) No universal table exists — the same count differs across brands. (c) Similar boards differ precisely where it matters. (d) Resetting first destroys the evidence; retrieve and record before any power cycle."
    },
    {
      q: "A code indicating 'pressure switch open' most directly means:",
      choices: ["The pressure switch is defective and must be replaced", "The board did not see the switch close — cause could be the switch, inducer, venting, or sensing hose", "The gas valve is stuck", "The flame sensor is dirty"],
      answer: 1,
      explanation: "Correct: (b). Codes name the input the board monitors, not the guilty component. (a) is the parts-cannon reading the field warns against; bench-good switches are common on these calls. (c) and (d) belong to different steps of the sequence with their own codes and signatures."
    },
    {
      q: "A defrost board typically initiates defrost based on:",
      choices: ["Outdoor air temperature alone", "Accumulated compressor run time combined with a coil sensor confirming the coil is cold", "The indoor thermostat's humidity reading", "A fixed clock schedule regardless of conditions"],
      answer: 1,
      explanation: "Correct: (b). Time-temperature (or demand) logic requires both elapsed run time and a coil actually cold enough to frost. (a) Air temperature alone can't know the coil's frost state. (c) Indoor humidity doesn't measure the outdoor coil. (d) Pure clock initiation wastes defrosts on dry, frost-free days."
    },
    {
      q: "The anti-short-cycle timer's purpose is to:",
      choices: ["Keep the compressor off forever after a fault", "Enforce a minimum off-time so the compressor doesn't restart against unequalized pressure or chatter", "Reduce the electric bill by delaying cooling", "Replace the thermostat's differential"],
      answer: 1,
      explanation: "Correct: (b). It's a protective delay after stops and power events. (a) Permanent lockout is a different state, tied to faults, not timing. (c) Any energy effect is incidental; protection is the design intent. (d) Differential lives in the temperature control; the timer governs restart timing regardless of temperature behavior."
    },
    {
      q: "Repeated high-pressure cutout trips escalating into a board lockout is best read as:",
      choices: ["A nuisance to reset repeatedly", "A protection system demanding investigation of the cause (e.g., condenser airflow/coil failure)", "Proof the cutout switch is oversensitive", "Normal operation in summer"],
      answer: 1,
      explanation: "Correct: (b). Lockout-on-repetition is designed to summon a human to a real, recurring overpressure cause. (a) Resetting without diagnosis converts protection into a countdown to compressor damage. (c) A switch correctly sensing true overpressure is the far more common story. (d) Healthy systems do not trip high-pressure safeties as routine summer behavior."
    },
    {
      q: "On a low-pressure chiller, steadily increasing purge-unit run time indicates:",
      choices: ["The purge unit is oversized", "Air (non-condensables) is leaking into the machine at a growing rate", "The chiller is overcharged with water", "The controls need a software update"],
      answer: 1,
      explanation: "Correct: (b). Purge duty rises with the inward air leak rate of a vacuum-side machine. (a) Purge sizing doesn't change over a month; the leak did. (c) 'Overcharged with water' isn't the mechanism — air ingress is what purge units exist to remove. (d) Software doesn't create physical air in a condenser."
    },
    {
      q: "Before condemning a control board, the professional standard is to:",
      choices: ["Replace it and see — boards are cheap", "Prove its power supply, every relevant input, and the loads it drives are honest and sound", "Tap it firmly to reseat components", "Check that a newer model exists"],
      answer: 1,
      explanation: "Correct: (b). Boards fail less often than their inputs and loads; condemning one without verifying its world is guessing. (a) Boards are frequently the priciest part on the truck, and a wrong swap teaches nothing. (c) Percussion is not a diagnostic method. (d) A newer model's existence has no bearing on this board's guilt."
    }
  ],
  studyGuide: `
<h3>Module 7 — Electronic Controls & Unit Control Boards: Quick Reference</h3>
<ul>
<li><strong>Furnace sequence:</strong> W call → inducer → draft proof (pressure switch) → igniter → gas valve → flame proof → blower (after delay) → post-purge. Diagnose by the step where progress stops.</li>
<li><strong>Fault codes:</strong> brand/model specific. Retrieve BEFORE resetting (power cycles erase evidence). A code names the input the board saw — the component, its wiring, or the physical condition can all be the cause.</li>
<li><strong>Defrost:</strong> initiate = accumulated run time + coil sensor cold; terminate = coil warm or max time. Use the board's test function to force a full cycle. A sensor off its coil location disables defrost with a 'good' sensor.</li>
<li><strong>Compressor guards:</strong> anti-short-cycle delay (minutes of silence after a stop/blink can be normal), high/low pressure cutouts, temperature protection, phase monitors. Repeat trips → lockout = 'a human must look.'</li>
<li><strong>Chiller supervision (Type III):</strong> freeze/flow/oil permissives; purge unit removes non-condensables — rising purge run time = growing inward air leak alarm.</li>
<li><strong>Board rule:</strong> prove power, inputs, and loads first. Boards are condemned last, on evidence.</li>
</ul>
<p><strong>Sequence habit:</strong> last thing that happened + first thing that didn't = the neighborhood of every board fault.</p>`
};
