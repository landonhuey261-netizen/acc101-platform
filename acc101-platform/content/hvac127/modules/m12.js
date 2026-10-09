// HVAC 127 - Module 12: Commissioning & Troubleshooting Controls
module.exports = {
  number: 12,
  slug: "commissioning-and-troubleshooting-controls",
  title: "Commissioning & Troubleshooting Controls",
  estTime: "3–4 hours",
  objectives: [
    "Define commissioning and explain how it differs from installation and from start-up alone.",
    "Execute point-to-point checkout: verify every input and output physically against the points list.",
    "Perform a two-point sensor verification and decide between correction, replacement, and configuration fixes.",
    "Apply a systematic troubleshooting method — mode, override, half-split — to the common control failure families.",
    "Work two complete control case studies from symptom to verified repair."
  ],
  sections: [
    {
      heading: "Commissioning: Proving the System Does What the Sequence Says",
      html: `
<p><strong>Commissioning</strong> is the documented process of verifying that a system was installed and operates according to its design intent — in controls language, according to its <strong>sequence of operation</strong> (Module 10) and its <strong>points list</strong> (Module 8). Installation makes it exist; start-up makes it run; commissioning makes it <em>proven</em>. The difference is evidence: every claim gets a test, and every test gets a record.</p>
<p>Controls commissioning proceeds in layers, and each layer is cheaper to fix than the next:</p>
<ul>
<li><strong>Static checks:</strong> devices installed in the right place, oriented correctly, wired to the right terminals, addressed and documented.</li>
<li><strong>Point-to-point checkout:</strong> every input and output exercised and verified end to end (next section).</li>
<li><strong>Functional performance testing:</strong> the sequences themselves run through their paces — modes, staging, economizer, safeties, failure states — forced and observed.</li>
<li><strong>Integrated testing:</strong> systems interacting: demand limiting across units, fire-mode interfaces, plant staging.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Commissioning is not a hunt for someone to blame; it is the cheapest fault-finding program ever devised, because it finds wiring, configuration, and addressing errors while the installers, ladders, and lifts are still on site.</div>`
    },
    {
      heading: "Point-to-Point Checkout: The Fundamental Ritual",
      html: `
<p>Point-to-point checkout verifies, for every single point on the points list, that the physical reality and the controller's belief agree. It is methodical, unglamorous, and the highest-value hour in a controls technician's repertoire:</p>
<ul>
<li><strong>Inputs (AI/DI):</strong> create a known condition at the sensor (warm the thermistor with your hand, close the switch, apply a known signal) and confirm the controller/front end reads the expected change — right point, right direction, plausible value.</li>
<li><strong>Outputs (AO/DO):</strong> command the point from the software (0%, 50%, 100% / off, on) and confirm the field device physically does exactly that — valve strokes, damper swings, fan starts. Direction matters: a valve wired/ piped to open on a close command is a checkout catch, not a service call in January.</li>
<li><strong>Documentation as you go:</strong> check, initial, date. An unrecorded verification will be doubted forever.</li>
</ul>
<div class="formula">The checkout rule: never trust a point you haven't personally forced and witnessed at both ends.</div>
<div class="callout"><strong>Common mistake:</strong> 'Verifying' points from the front-end screen alone — commanding a damper and watching its own feedback value change. If the feedback comes from the same mis-wired source as the command, the screen will happily confirm a fiction. Eyes on the physical device close the loop.</div>`
    },
    {
      heading: "Sensor Verification and Calibration",
      html: `
<p>Module 3 gave you the sensor theory; commissioning gives you the ritual. For each critical sensor, compare the controller's reading against a trusted reference instrument <em>at the same location and moment</em>, at <strong>two points</strong> across its working range where practical (for example, current condition plus a warmed/chilled condition for a temperature sensor):</p>
<ul>
<li><strong>Agrees at both points:</strong> verified; record and move on.</li>
<li><strong>Off by a constant amount at both points:</strong> a true offset — a calibration correction may be legitimate (after checking placement causes: sun, stratification, wall conduction).</li>
<li><strong>Agrees at one point, disagrees at the other:</strong> a curve/type/scaling error (Module 3) — configuration, not calibration. Fix the type or range setting.</li>
<li><strong>Erratic or dead:</strong> wiring, power, or element failure — the signal-family checks from Modules 3 and 5.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Placement before calibration. A sensor reading the supply-air blast, the sunny wall, or the un-insulated exterior surface is measuring its environment accurately — the environment is wrong. Move the measurement before you 'correct' the number, or you'll bake a lie into the calibration record.</div>
<p>Record the verification like it will be audited — because someday it will be, usually during a dispute about comfort or energy. A useful record names the point, the reference instrument used, both readings at both test points, the disposition (verified / offset applied / configuration corrected / sensor replaced), and your initials with the date. Five lines per sensor feels slow on a Friday; it is priceless the first time a year's worth of 'the system has always read wrong' has to be answered with evidence instead of memory.</p>`
    },
    {
      heading: "A Troubleshooting Method for Controls",
      html: `
<p>Random part-swapping is not a method. Controls troubleshooting follows a fixed order that exploits everything this course built:</p>
<ul>
<li><strong>Step 1 — Mode and moment:</strong> What mode is the system in, what does the sequence say it should be doing right now, and what changed recently (weather, schedule edits, service visits, power events)?</li>
<li><strong>Step 2 — Overrides and software state:</strong> Is anything overridden, hand-mode, or alarm-locked at the front end or the unit board? (Module 8: software faults are half the DDC world.)</li>
<li><strong>Step 3 — Believe no sensor:</strong> verify the key measurements with your own instruments (Module 3's discipline). Lying inputs make perfect systems misbehave.</li>
<li><strong>Step 4 — Half-split the chain:</strong> stat/controller output → wiring → board → load. At each seam, one measurement discards half the suspects (Module 5's chain logic, grown to systems).</li>
<li><strong>Step 5 — Prove the repair:</strong> run the full affected sequence and watch it complete. A fix that isn't exercised through its whole story is a hypothesis, not a repair.</li>
</ul>
<p>The common failure families this method hunts: failed sensors (drift, open, short), failed outputs (actuators, relays, contactor coils), wiring faults (the Lab 1 catalog), configuration faults (wrong curve, wrong O/B, wrong address), network faults (Module 9), and the undefeated champion — a system correctly executing a sequence nobody read (Module 10).</p>
<div class="callout"><strong>Key idea:</strong> Intermittents bow to records: trends (Module 11), alarm histories, and a logbook of 'when did it happen' patterns beat a week of standing in front of a behaving system.</div>`
    },
    {
      heading: "Two Case Studies, End to End",
      html: `
<p><strong>Case 1 — The zone that's always wrong.</strong> A classroom complains of alternating too-hot and too-cold for a month; two prior visits replaced the VAV actuator and then the controller. Your method: mode normal, no overrides; sensor verified 3°F off from your handheld, with the error larger on cold mornings — the Module 3 signature of a <strong>wrong thermistor curve</strong> selected at the replacement controller. Two parts were innocent; the configuration was never checked because neither visit verified the sensor at two points. Fix: correct curve, verify at two temperatures, trend for a day. Lesson: configuration is a component; test it like one.</p>
<p><strong>Case 2 — The Friday-night freeze watch.</strong> A school's freezestat trips roughly weekly, always found reset by Monday's operator with 'no problem found.' Alarm history shows trips clustering on the coldest, windiest nights; the trend shows the outdoor damper feedback drifting open after closure commands on those nights — a <strong>linkage slipping under wind load</strong>, letting sub-freezing air leak across the coil until the freezestat does its job. The safety was the only honest reporter on site. Fix: repair the linkage and damper seals, then functional-test the full freezestat sequence. Lesson: a repeating safety trip is a witness with a schedule — read the history and it will tell you when to watch.</p>
<div class="callout"><strong>Course close:</strong> Sensor, controller, controlled device; measure, compare, act. Twelve modules later the model is unchanged — you've simply learned how it wears relays, air, boards, software, and networks. That model, a meter, a gauge, and the discipline to verify are the whole trade. Welcome to controls work.</div>`
    }
  ],
  keyTerms: [
    { term: "Commissioning", def: "The documented verification that systems are installed and operate per design intent (sequence and points list)." },
    { term: "Point-to-point checkout", def: "Exercising every input and output end to end, witnessing the physical device and the controller agree." },
    { term: "Functional performance test", def: "A test running a full sequence — modes, staging, safeties — by forcing conditions and observing responses." },
    { term: "Reference instrument", def: "A trusted, accurate handheld meter/sensor used to verify installed sensors." },
    { term: "Two-point verification", def: "Checking a sensor against a reference at two values across its range to distinguish offset from curve error." },
    { term: "Offset error", def: "A constant reading error across the range; potentially correctable by calibration." },
    { term: "Curve error", def: "An error that changes across the range (wrong sensor type/scaling); fixed by configuration, not offset." },
    { term: "Half-split method", def: "Testing at the midpoint of a chain to discard half the suspects with each measurement." },
    { term: "Override audit", def: "The periodic review of all points in manual/override state to return them to automatic control." },
    { term: "Alarm history", def: "The time-stamped record of past alarms, primary evidence for intermittent faults." },
    { term: "As-built documentation", def: "Records updated to match the final installed reality: points, addresses, sequences, tuning." },
    { term: "Punch list", def: "The commissioning log of deficiencies to correct and re-verify." },
    { term: "Start-up", def: "Initial energizing and basic operation of equipment — necessary, but not the verification commissioning provides." },
    { term: "Intermittent fault", def: "A fault appearing irregularly; hunted with trends, histories, and pattern correlation (weather, time, load)." },
    { term: "Sensor placement fault", def: "An accurate sensor in a wrong location (sun, blast, stratified air) producing a precise lie." },
    { term: "Re-verification", def: "Repeating checkout after a repair to prove the complete affected function." },
    { term: "Sequence deviation", def: "Any difference between observed behavior and the written sequence — a finding, whoever caused it." },
    { term: "Witnessed test", def: "A verification performed with the responsible party observing and signing the record." }
  ],
  video: {
    title: "Building Automation Training — Level II",
    embedUrl: "https://www.youtube.com/embed/70-6drJbyJY",
    note: "A Level II training on engineering, programming, and commissioning an operational database for a native BACnet controller, using an air-handling unit with temperature sensors, fan points, valves, and dampers. It shows commissioning as a discipline — building the database, then proving points and functions against it — which is exactly this module's subject.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> During checkout, commanding a heating valve from 0% to 100% at the front end shows its feedback sweeping 0→100%, but the coil stays cold and the valve stem never moves. Explain the verification error that allowed this to pass, and the correct checkout step.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The 'verification' watched the software's own feedback — which can be simulated, mis-sourced, or driven by the same faulty path — instead of the physical valve. Step 2: Correct step: witness the <strong>actual stem/actuator</strong> move and the coil respond (temperature change) at the device while the command is given. Step 3: Point-to-point means both physical ends, proven independently; screens alone close nothing.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A space sensor reads 74°F vs your reference's 72°F at room condition, and 90°F vs 95°F when warmed. Offset or curve error? What is the fix path?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The error changed (+2 at room, −5 warmed) — non-constant error = <strong>curve/type (or scaling) error</strong>, not an offset. Step 2: Fix path: check the configured sensor curve type and input range against the installed sensor's specification; correct the configuration (or the mismatched sensor), then re-verify at two points. Step 3: An offset 'calibration' here would force agreement at one temperature while worsening the other.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A damper output is suspected dead somewhere between the supervisory screen and the actuator across a long run. Describe a half-split test plan with two measurements that isolate the fault to one segment.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Command 50% from the software and measure the signal <strong>at the controller's AO terminals</strong>: present and correct → controller/software exonerated; absent → configuration/output fault at the source. Step 2: Measure <strong>at the actuator's terminals</strong>: if the signal exists at the controller but not here, the wiring run is the fault segment; if it arrives correctly but the damper doesn't move, the actuator is the segment. Step 3: Two measurements, three segments, one culprit — the essence of half-splitting.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A building's energy use crept up 15% over a year with no comfort complaints. Your override audit finds 11 points in hand/manual, some dating back 10 months. Connect the findings and state the program fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Points in override bypass schedules, resets, and demand limiting indefinitely — fans and valves held in manual states run through nights and mild weather, quietly inflating energy while comfort (over-served) generates no complaints. Step 2: Program fix: return points to automatic after verifying the original reason for each override is resolved; set overrides to expire automatically where the platform allows; add a scheduled monthly override audit. Step 3: The energy 'mystery' was an administrative state, not a mechanical failure — which is why Step 2 of the troubleshooting method checks software before hardware.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Write the functional test for an economizer sequence: the conditions you'll force, in order, and the response each must produce.</p>",
      solution: "<p><strong>Answer (example):</strong> Step 1: With the unit occupied and a cooling call, set/simulate outdoor conditions <em>above</em> the changeover limit → dampers must sit at ventilation minimum, mechanical cooling carries the load. Step 2: Change simulated outdoor air to <em>below</em> the limit → dampers modulate for free cooling, mechanical stages off. Step 3: Raise the cooling demand until dampers reach full open and discharge rides above setpoint → mechanical stage 1 must enable (integrated operation). Step 4: Trip the freezestat input → fan stops, dampers drive closed, heating valve opens, alarm posts. Step 5: Restore and document every response against the sequence; any deviation is a punch-list item.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A nuisance alarm has fired 300 times this month from a duct sensor whose value chatters around its alarm threshold. Using Module 9's discipline plus this module's, give the two-part fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Engineering part — find why the value chatters (a hunting loop from Module 2, a failing sensor from Module 3): the alarm is reporting a real instability, so fix the source condition first. Step 2: Design part — if residual normal variation still crosses the line, adjust the alarm's delay/deadband with documentation so genuine excursions still annunciate promptly. Step 3: Never the forbidden fix: deleting or disabling the alarm, which converts a noisy witness into no witness.</p>"
    }
  ],
  quiz: [
    {
      q: "Commissioning differs from start-up in that commissioning:",
      choices: ["Is performed only by the manufacturer", "Verifies and documents that the system operates per its design intent (sequence and points list)", "Happens before installation", "Replaces the need for wiring"],
      answer: 1,
      explanation: "Correct: (b). Start-up makes equipment run; commissioning proves it runs as specified, with records. (a) Commissioning is often done by the controls contractor or a third-party agent — not manufacturer-only. (c) It follows installation by definition. (d) Nothing replaces wiring; commissioning verifies it."
    },
    {
      q: "Proper point-to-point checkout of an output requires:",
      choices: ["Watching the value change on the front-end screen only", "Commanding the point and physically witnessing the field device respond correctly at the equipment", "Asking the installer if it worked", "Trusting the as-built drawings"],
      answer: 1,
      explanation: "Correct: (b). Both ends witnessed — command and physical response — close the verification loop. (a) Screen feedback can share the same fault as the command path and confirm a fiction. (c) Testimony is not a test. (d) Drawings describe intent; checkout exists because reality deviates."
    },
    {
      q: "A sensor reads 2°F high at 70°F and 2°F high at 40°F against a reference. This pattern indicates:",
      choices: ["A curve error requiring a sensor swap", "A constant offset error, potentially correctable by calibration (after placement is checked)", "A dead sensor", "Perfect accuracy"],
      answer: 1,
      explanation: "Correct: (b). Same error at both points = offset behavior. (a) Curve errors change magnitude/direction across the range — the signature this pattern rules out. (c) A dead sensor gives no live readings at all. (d) 2°F high is an error by definition; the question is its shape."
    },
    {
      q: "The first two steps of the controls troubleshooting method are:",
      choices: ["Replace the controller; replace the sensor", "Establish mode/intent (what should it be doing per the sequence?) and check overrides/software state", "Check refrigerant charge; clean the coils", "Call the manufacturer; order parts"],
      answer: 1,
      explanation: "Correct: (b). Intent first, software state second — because systems correctly executing unread sequences and forgotten overrides dominate real-world 'failures.' (a) is parts-swapping, the anti-method. (c) Refrigerant work belongs to a different fault family and a different course's calls. (d) Escalation comes after evidence, not before."
    },
    {
      q: "A repeating freezestat trip, always on the coldest windiest nights, with dampers found slightly open despite close commands, most likely indicates:",
      choices: ["A defective freezestat that hates winter", "A real mechanical cause — e.g., slipping linkage/damper leakage admitting freezing air; the safety is reporting truthfully", "The alarm system needs silencing", "Normal operation"],
      answer: 1,
      explanation: "Correct: (b). Pattern correlation with weather plus a physical damper discrepancy is a root-cause story; the safety is the witness, not the culprit. (a) Sensors don't schedule by weather; conditions do. (c) Silencing repeats Module 9's forbidden fix. (d) Weekly safety trips are by definition not normal."
    },
    {
      q: "Half-split troubleshooting works by:",
      choices: ["Guessing which half of the parts to replace", "Measuring at the chain's midpoint so each test discards half the remaining suspects", "Splitting the service call between two technicians", "Testing only components that are easy to reach"],
      answer: 1,
      explanation: "Correct: (b). Midpoint measurements turn long chains into a few decisive tests. (a) Replacement isn't measurement; the method's power is information per test. (c) Crew size is irrelevant to the logic. (d) Convenience-based testing leaves the actual seam unmeasured — faults live at seams."
    },
    {
      q: "An energy audit finds year-old overrides on multiple fans. The correct disposition is:",
      choices: ["Leave them; someone set them for a reason once", "Investigate each override's original reason, return points to automatic when resolved, and institute expiring overrides plus periodic audits", "Delete the override feature from the software", "Raise setpoints to compensate"],
      answer: 1,
      explanation: "Correct: (b). Overrides are clinical tools — verify the indication is gone, then remove them, and prevent silent permanence procedurally. (a) 'Once had a reason' is how buildings hemorrhage energy for years. (c) Overrides are essential for service; the fix is discipline, not amputation. (d) Setpoint changes don't restore automatic logic to overridden points."
    },
    {
      q: "Before 'calibrating' a sensor that reads differently from your reference, the step that must come first is:",
      choices: ["Adjusting the offset until the displays match", "Checking placement and environment (sun, supply blast, stratification, mounting) — an accurately-reading sensor in a wrong place must be moved, not offset", "Replacing the reference instrument", "Rebooting the controller"],
      answer: 1,
      explanation: "Correct: (b). Baking a placement lie into calibration corrupts every future reading. (a) is the error this question exists to prevent. (c) Reference instruments get verified on their own schedule, but the installed sensor's environment is the immediate suspect. (d) Reboots don't change what a sensor is exposed to."
    }
  ],
  studyGuide: `
<h3>Module 12 — Commissioning & Troubleshooting Controls: Quick Reference</h3>
<ul>
<li><strong>Commissioning layers:</strong> static checks → point-to-point → functional sequence tests → integrated tests. Every claim gets a test; every test gets a record.</li>
<li><strong>Point-to-point rule:</strong> force it at one end, witness it at the other — physically. Screens confirming their own signals prove nothing.</li>
<li><strong>Two-point sensor check:</strong> constant error = offset (calibrate after placement check). Changing error = curve/scaling (fix configuration). Erratic/dead = wiring/power/element.</li>
<li><strong>Placement before calibration</strong> — always. Sun, blast, stratification, and exterior walls make accurate sensors lie usefully.</li>
<li><strong>Troubleshooting order:</strong> (1) mode & sequence intent, (2) overrides/software state, (3) verify sensors with your own instruments, (4) half-split the chain, (5) prove the repair by running the whole sequence.</li>
<li><strong>Intermittents:</strong> trends, alarm histories, and weather/time pattern correlation. A repeating safety trip is a truthful witness with a schedule.</li>
<li><strong>Housekeeping that pays:</strong> override audits, as-built updates, sequence redlines documented. The next troubleshooter is you, in February, at midnight.</li>
</ul>
<p><strong>Course in one line:</strong> sensor → controller → controlled device; verify the measurement, read the sequence, prove the repair.</p>`
};
