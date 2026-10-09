// HVAC 127 - Module 10: Sequences of Operation
module.exports = {
  number: 10,
  slug: "sequences-of-operation",
  title: "Sequences of Operation",
  estTime: "3–4 hours",
  objectives: [
    "Define a sequence of operation and explain its role as the contract between design intent and programming.",
    "Read a sequence for a rooftop unit and state what happens on a cooling call, in order, with safeties.",
    "Explain the operating modes of an air handler (occupied, unoccupied, warm-up, economizer) and their triggers.",
    "Describe VAV box sequences — cooling, heating, minimum/maximum airflow — in plain language.",
    "Explain how an economizer sequence decides between free cooling and mechanical cooling, and the safeties that override sequences."
  ],
  sections: [
    {
      heading: "What a Sequence of Operation Is",
      html: `
<p>A <strong>sequence of operation</strong> is the written story of how a system must behave: for every mode and every condition, what starts, what stops, what modulates, in what order, with what setpoints and safeties. It is the single most important document in controls work because it is the meeting point of everyone on the job: the engineer writes intent into it, the programmer implements it, the commissioning agent tests against it (Module 12), and the troubleshooter reads the system against it for the rest of its life.</p>
<p>A complete sequence answers, for each piece of equipment:</p>
<ul>
<li><strong>Modes:</strong> what are the system's states (occupied, unoccupied, warm-up/cooldown, night setback, fire/smoke mode) and what event moves it between them?</li>
<li><strong>Actions:</strong> in each mode, which outputs run, which modulate to which setpoints, which staging rules apply?</li>
<li><strong>Safeties and alarms:</strong> what abnormal condition overrides everything, what does it shut down or start, and what gets alarmed?</li>
<li><strong>Failure behavior:</strong> on sensor failure, network loss, or power restoration, what is each output's defined state?</li>
</ul>
<div class="callout"><strong>Key idea:</strong> If behavior isn't in the sequence, it isn't specified — it's improvised. When a system 'acts weird,' the first professional question is: <em>what does the sequence say it should do right now?</em> Half the time the system is faithfully executing a sequence nobody on site has read.</div>`
    },
    {
      heading: "Reading a Sequence: The Rooftop Unit",
      html: `
<p>Work a packaged rooftop unit (RTU) cooling sequence the way you'll meet it in the lab. <strong>Occupied mode, call for cooling stage 1:</strong></p>
<ul>
<li>The zone sensor reports temperature above the cooling setpoint by the staging threshold.</li>
<li>The supply fan is commanded on; the controller waits for <strong>fan status proof</strong> (Module 8's command ≠ status). No proof within the allowed time → fan alarm, cooling locked out.</li>
<li>With the fan proven, compressor stage 1 is enabled — subject to its anti-short-cycle timer and all safeties (pressure cutouts, freeze protection).</li>
<li>If the zone continues to rise or stage 1 runs beyond its staging timer, stage 2 is enabled the same way. Stages drop out in reverse order as the zone approaches setpoint.</li>
<li>When the call ends, compressors stop, the fan runs a short off-delay to harvest residual cooling, then stops.</li>
</ul>
<p>Now the safeties woven through: a <strong>freezestat</strong> sensing near-freezing coil/discharge air stops the fan and drives dampers/valves to their safe positions regardless of any call; high duct pressure stops the fan; smoke detection (where connected) overrides the entire sequence into its fire mode. Sequences are written so safeties sit <em>above</em> normal logic — in the programmer's structure, the safety layer is evaluated first, every scan.</p>
<div class="callout"><strong>Key idea:</strong> Read sequences in priority order: safeties → modes → setpoints → staging/timing details. A system that 'won't cool' is very often a safety or a mode executing correctly — the sequence tells you which one to check.</div>`
    },
    {
      heading: "Air Handler Modes and the Economizer",
      html: `
<p>A central air handler lives in modes, and most comfort complaints are mode complaints:</p>
<ul>
<li><strong>Occupied:</strong> fan runs continuously (or cycles per design), ventilation air provided, comfort setpoints held.</li>
<li><strong>Unoccupied:</strong> fan off, dampers closed — except night setback/setup cycles the unit briefly if zones drift beyond wider night setpoints.</li>
<li><strong>Warm-up/cooldown (optimal start's sibling, Module 11):</strong> before occupancy, the unit recovers the building at full effort with outdoor air closed (warm-up) so recovery is fastest.</li>
<li><strong>Economizer mode:</strong> when outdoor air is suitable, the unit uses it for 'free' cooling instead of (or before) mechanical cooling.</li>
</ul>
<p>The <strong>economizer sequence</strong> deserves its own paragraph because it is the most valuable — and most often broken — sequence in commercial HVAC. The controller compares outdoor air (by temperature, or better, by enthalpy, which includes its moisture) against a changeover limit and against return air. When outdoor air wins, the economizer dampers modulate to hold the discharge-air setpoint using outdoor air alone; only when dampers are fully open and the setpoint still isn't met does mechanical cooling stage on to help ('integrated' economizer operation). Minimum outdoor air for ventilation is always maintained during occupancy, whatever the sequence is doing for temperature.</p>
<div class="callout"><strong>Common mistake:</strong> Diagnosing 'the economizer is broken' from one mild-day observation. Economizer correctness depends on outdoor conditions vs. its changeover setting, damper proof, and sensor honesty (a sun-baked outdoor sensor disables free cooling all spring). Verify sensors first, then watch a full demand cycle — the same discipline as defrost in Module 7.</div>`
    },
    {
      heading: "VAV Box Sequences",
      html: `
<p>A pressure-independent VAV box sequence is a small masterpiece of the sensor–controller–device pattern, and it contains a loop inside a loop:</p>
<ul>
<li>The <strong>zone (outer) loop</strong> compares zone temperature to setpoint and decides how much air the zone needs — a required airflow between the box's configured <strong>minimum</strong> and <strong>maximum</strong> CFM.</li>
<li>The <strong>airflow (inner) loop</strong> measures actual airflow with the box's velocity sensor and modulates the damper to deliver exactly the required CFM — regardless of duct pressure swings as other boxes open and close. That independence from inlet pressure is why it's called pressure-independent.</li>
<li><strong>Cooling:</strong> as the zone warms, required airflow rises from minimum toward maximum.</li>
<li><strong>Heating:</strong> at the heating side, airflow drops to the heating minimum and the box's reheat (hot-water valve or electric coil) modulates to hold the heating setpoint — heat the minimum air rather than flooding the zone.</li>
<li><strong>Deadband:</strong> between heating and cooling setpoints the box sits at ventilation minimum and does nothing — the designed quiet zone that keeps boxes from fighting (Module 2's differential, grown up).</li>
</ul>
<div class="formula">Zone loop decides 'how much air.' Airflow loop delivers exactly that much. Two loops, one box — cascade control in a ceiling tile.</div>
<div class="callout"><strong>Key idea:</strong> A VAV complaint splits cleanly with this model: if the required airflow is wrong, the zone loop/sensor/setpoints are suspect; if the required airflow is right but delivered airflow differs, the inner loop — velocity sensor, damper, actuator — is suspect. Cascade structure is diagnostic structure.</div>`
    },
    {
      heading: "Writing Sequences and the Setpoint/Safety Tables",
      html: `
<p>When you write or redline a sequence, write it the way this module reads: modes first, then actions per mode, then safeties, then failure states, with every number named. Vague sequences ('cool as needed') produce vague systems. A professional sequence excerpt looks like this:</p>
<ul>
<li>"On a call for cooling with the fan proven, enable compressor stage 1. Enable stage 2 when zone temperature exceeds setpoint by 2°F <em>or</em> stage 1 has run 15 minutes, whichever occurs first."</li>
<li>"On freezestat trip (below its setpoint, manual reset where specified): stop the fan, close outdoor dampers, open the heating valve, alarm at the front end as priority 2."</li>
<li>"On loss of the zone sensor (out-of-range input), drive the unit to its unoccupied behavior and alarm; do not guess a temperature."</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Every sequence line should be <em>testable</em> — a commissioning agent must be able to force the condition and observe the response. If a line can't be tested, rewrite it until it can (Module 12 runs exactly these tests).</div>
<p>Finally, guard the document: sequences on real jobs live as controlled revisions, because the as-programmed system drifts from the original over years of service edits. The tech who documents a change in the sequence has done the next troubleshooter a professional kindness; the one who doesn't has scheduled them a mystery.</p>`
    }
  ],
  keyTerms: [
    { term: "Sequence of operation", def: "The written specification of a system's behavior in every mode and condition, including setpoints, staging, safeties, and failure states." },
    { term: "Mode", def: "A defined system state (occupied, unoccupied, warm-up, economizer, fire) with its own rules of behavior." },
    { term: "Occupied mode", def: "Scheduled in-use state: ventilation provided and comfort setpoints held." },
    { term: "Unoccupied mode", def: "Off-hours state: equipment off or cycling only on wide night setback/setup limits." },
    { term: "Setback/setup", def: "Wider unoccupied temperature limits for heating (setback, lower) and cooling (setup, higher)." },
    { term: "Economizer", def: "The damper system and sequence using suitable outdoor air for free cooling before mechanical cooling." },
    { term: "Changeover (economizer)", def: "The comparison/limit deciding whether outdoor air is suitable for economizer use (temperature or enthalpy based)." },
    { term: "Integrated economizer", def: "Operation allowing economizer and mechanical cooling to work together when outdoor air alone can't hold setpoint." },
    { term: "Freezestat", def: "A low-temperature safety sensing air near a coil; on trip it forces protective action and usually alarms." },
    { term: "Fan status proof", def: "The DI confirmation that a commanded fan actually runs; required before dependent stages enable." },
    { term: "Staging", def: "Enabling capacity steps in order per temperature thresholds and/or timers, per the sequence." },
    { term: "Cascade control", def: "Nested loops: an outer loop sets the target for an inner loop (VAV zone loop → airflow loop)." },
    { term: "Pressure-independent VAV", def: "A VAV box that holds its commanded airflow regardless of inlet duct pressure changes." },
    { term: "Minimum/maximum airflow", def: "The configured CFM limits of a VAV box for ventilation (minimum) and full cooling (maximum)." },
    { term: "Reheat", def: "Terminal heating (hot water or electric) at a VAV box for zone heating at minimum airflow." },
    { term: "Deadband", def: "The temperature span between heating and cooling setpoints where neither action is taken." },
    { term: "Off-delay", def: "A timed fan run-on after a call ends to extract residual heating/cooling." },
    { term: "Fail state (sequence)", def: "The specified output behavior on sensor, network, or power failure defined in the sequence." }
  ],
  video: {
    title: "HVAC Tech Gas Valve Replacement on Lennox Furnace - How to use Sequence of Operations to Troubleshoot",
    embedUrl: "https://www.youtube.com/embed/8Qm1K9EgQTk",
    note: "A field call where the technician uses the unit's sequence of operations as the troubleshooting map. Watch the method, not just the repair: at each step he checks what the sequence says should happen next against what the equipment actually does — exactly the reading skill this module teaches.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> An RTU sequence says cooling stages require fan status proof. The front end shows the fan DO 'on' and stage 1 enabled, but no cooling occurs and a fan alarm posts 60 seconds after each start attempt. Reconstruct what the controller is experiencing.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The controller commands the fan but its status DI never closes (belt, overload, failed current switch — to be determined in the field). Step 2: Per sequence, no proof = cooling lockout + alarm after the proof delay; the 'stage 1 enabled' indication is the sequence <em>attempting</em>, then being vetoed. Step 3: The controls are behaving correctly; the fault is in the fan's real operation or its status device. Command ≠ status, enforced by design.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Write the economizer decision for an integrated-economizer AHU on a 58°F day with a discharge setpoint of 55°F and a zone calling for cooling. Outdoor air is below the changeover limit.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Outdoor air is suitable (below changeover) → economizer is the first source of cooling. Step 2: Dampers modulate open to hold 55°F discharge using outdoor air; because 58°F air alone cannot make 55°F discharge at full open indefinitely under load, the integrated sequence stages mechanical cooling to assist once dampers reach (near) full open and discharge still rides above setpoint. Step 3: Ventilation minimum is respected throughout; mechanical stages drop out first as load falls, economizer last.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A VAV box's zone sensor reads correctly and the sequence requests 800 CFM (its maximum), but measured delivered airflow is 300 CFM and duct static pressure is healthy. Which cascade loop has failed, and what are the suspect components?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The request (zone/outer loop) is correct, so the <strong>inner airflow loop</strong> is failing to deliver. Step 2: Suspects: the velocity/flow sensor (reading low and fooling the loop into thinking 800 is delivered — the Module 1 lying-sensor pattern), a damper/actuator failure (stripped linkage, dead actuator), or a physical obstruction. Step 3: Discriminate by comparing the box's reported flow with an independent hood reading: report 800/actual 300 = sensor fault; report 300/actual 300 with damper commanded open = actuator/damper fault.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A freezestat trips and the sequence stops the fan, closes outdoor dampers, opens the heating valve, and alarms. A well-meaning operator asks why the fan doesn't keep running 'to warm the coil with room air.' Answer from the sequence's safety logic.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The freezestat's premise is that freezing air is reaching the coil; continued fan operation keeps delivering that air at full volume across the coil — the hazard itself. Step 2: Stopping the fan ends the forced flow, closed dampers cut the source, and the open heating valve floods the coil with hot water as active protection. Step 3: The sequence chooses equipment preservation over continued ventilation during a freeze event; restart follows inspection/reset rules, not operator optimism.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Rewrite this vague sequence line into a testable one: 'The second compressor should come on when the first one isn't keeping up on hot days.'</p>",
      solution: "<p><strong>Answer (example):</strong> Step 1: Replace every vague term with a measured condition and threshold: 'isn't keeping up' → zone temperature above cooling setpoint; 'hot days' → nothing (delete; the measurement already captures it). Step 2: Testable version: 'With stage 1 running, enable stage 2 when zone temperature exceeds the cooling setpoint by 2°F, or when stage 1 has operated continuously for 15 minutes, whichever occurs first. Disable stage 2 when zone temperature falls to 0.5°F above setpoint.' Step 3: A commissioning agent can now force and observe every clause.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A zone alternates heating and cooling calls all morning — reheat open before lunch, cooling after. Both setpoints: heating 70°F, cooling 71°F. Using Module 2 and this module together, name the design flaw and the fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The heating and cooling setpoints are 1°F apart, leaving essentially <strong>no deadband</strong>; normal sensor noise and air patterns straddle both thresholds, so the box fights itself. Step 2: This is differential/deadband discipline from Module 2 expressed as setpoint architecture. Step 3: Fix: widen the deadband (for example heating 70°F / cooling 74°F, per design standards for the space) so a genuine no-action zone exists between the two calls.</p>"
    }
  ],
  quiz: [
    {
      q: "A sequence of operation is best defined as:",
      choices: ["The wiring diagram of the panel", "The written specification of system behavior in every mode and condition, including setpoints, staging, safeties, and failure states", "The manufacturer's parts list", "The schedule of maintenance visits"],
      answer: 1,
      explanation: "Correct: (b). The sequence is the design-intent contract that programming implements and commissioning tests. (a) Wiring diagrams show connections, not behavior over conditions. (c) Parts lists support repair, not control intent. (d) Maintenance scheduling is an operations document, unrelated to control behavior."
    },
    {
      q: "In reading a sequence, the correct priority order is:",
      choices: ["Setpoints, then staging, then safeties if time permits", "Safeties first, then modes, then normal control details", "Whatever the front-end graphic shows first", "Alphabetical by equipment name"],
      answer: 1,
      explanation: "Correct: (b). Safeties are evaluated above normal logic, so they explain 'dead' systems first; modes define which rules apply. (a) inverts the real hierarchy — a tripped safety makes setpoints irrelevant. (c) Graphics display behavior; they don't rank it. (d) Document organization schemes don't govern control execution."
    },
    {
      q: "An economizer sequence decides to use outdoor air for cooling primarily by:",
      choices: ["The calendar month", "Comparing outdoor air suitability (temperature or enthalpy) against a changeover limit and the cooling need", "Whether the compressor is available", "Occupant votes at the front end"],
      answer: 1,
      explanation: "Correct: (b). Changeover logic judges the air itself and stages mechanical cooling only as needed (integrated operation). (a) Months correlate with weather but don't measure it; shoulder-season days break calendar logic constantly. (c) Compressor availability is a separate status, not the suitability test. (d) Operators set policy, not moment-to-moment damper decisions."
    },
    {
      q: "In a pressure-independent VAV box, the inner (airflow) loop's job is to:",
      choices: ["Decide how much air the zone needs", "Modulate the damper to deliver the airflow the outer loop requested, regardless of duct pressure changes", "Control the duct static pressure setpoint", "Schedule the box's occupancy"],
      answer: 1,
      explanation: "Correct: (b). The inner loop delivers; the outer (zone) loop decides how much. (a) is the outer loop's decision from zone temperature. (c) Duct static is the air handler fan's loop, upstream of all boxes. (d) Scheduling applies at the system/zone level, not in the box's airflow loop."
    },
    {
      q: "A VAV zone is in the deadband when:",
      choices: ["The damper is broken", "Zone temperature sits between the heating and cooling setpoints, so the box holds ventilation minimum and takes no heating or cooling action", "The airflow sensor reads zero", "The box is unoccupied"],
      answer: 1,
      explanation: "Correct: (b). The deadband is the designed no-action span preventing heating/cooling fights. (a) A broken damper is a fault, diagnosable by airflow mismatch, not a mode. (c) A zero flow reading is a sensor/airflow condition, not the definition of deadband. (d) Unoccupied is a schedule mode with its own wider limits."
    },
    {
      q: "A freezestat trip per the typical sequence does all of the following EXCEPT:",
      choices: ["Stop the fan", "Close the outdoor-air dampers", "Open the heating valve to protect the coil", "Disable the alarm so operators aren't disturbed"],
      answer: 3,
      explanation: "Correct: (d). The sequence raises an alarm precisely so humans respond; disabling it contradicts the safety design. (a), (b), and (c) are the standard protective trio: stop the forced flow, cut the cold source, flood the coil with heat."
    },
    {
      q: "The test for a well-written sequence line is that it:",
      choices: ["Sounds impressive to the owner", "Can be forced and observed in commissioning — every clause is a measurable condition and a defined action", "Is as short as possible", "Never mentions numbers"],
      answer: 1,
      explanation: "Correct: (b). Testability is what makes a sequence a contract rather than a poem. (a) Impressiveness doesn't verify behavior. (c) Brevity that omits thresholds creates the vagueness this module warns against. (d) Numbers — thresholds, timers, setpoints — are exactly what sequences must state."
    },
    {
      q: "On loss of a zone temperature sensor, a well-written sequence typically directs the unit to:",
      choices: ["Assume the zone is at setpoint and continue indefinitely", "Adopt a defined fail behavior (e.g., unoccupied-style operation) and alarm, rather than controlling to a guessed value", "Run all stages at maximum forever", "Shut down the entire building"],
      answer: 1,
      explanation: "Correct: (b). Defined failure states and an alarm are the professional pattern — the system degrades gracefully and calls for help. (a) fabricates data silently. (c) wastes energy and risks secondary trips. (d) overreacting building-wide to one sensor is disproportionate and rarely specified."
    }
  ],
  studyGuide: `
<h3>Module 10 — Sequences of Operation: Quick Reference</h3>
<ul>
<li><strong>Sequence</strong> = the behavior contract: modes → actions per mode → setpoints/staging → safeties → failure states. Programmer implements it; commissioning tests it; troubleshooting reads against it.</li>
<li><strong>Read in priority order:</strong> safeties first, then mode, then normal logic. 'Won't run' is usually a safety or mode executing correctly.</li>
<li><strong>RTU cooling:</strong> call → fan command → fan STATUS proof (timeout = alarm + stage lockout) → stage 1 (safeties permitting) → stage 2 on threshold ΔT or stage-timer → off-delay at call end.</li>
<li><strong>Economizer:</strong> suitable outdoor air (changeover by temperature or enthalpy vs. limit) does the cooling first; integrated operation adds mechanical cooling only when dampers are full and setpoint still unmet. Ventilation minimum always holds when occupied.</li>
<li><strong>Freezestat trip:</strong> fan stop, OA dampers closed, heating valve open, alarm. Manual-reset types stay tripped until a human inspects.</li>
<li><strong>VAV cascade:</strong> zone loop decides required CFM (min→max cooling; heating at min CFM + reheat); airflow loop delivers it pressure-independently. Deadband between heat/cool setpoints prevents fighting.</li>
<li><strong>Writing rule:</strong> every line testable — named sensor, threshold, timer, action. Document every field change to the sequence.</li>
</ul>
<p><strong>First question on any 'weird behavior' call:</strong> what does the sequence say it should be doing right now?</p>`
};
