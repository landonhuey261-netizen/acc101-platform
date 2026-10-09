// HVAC 132 - Module 3: Gas Burners, Ignition & Flame Proving
module.exports = {
  number: 3,
  slug: "gas-burners-ignition-flame-proving",
  title: "Gas Burners, Ignition & Flame Proving",
  estTime: "3–4 hours",
  objectives: [
    "Describe the common gas burner designs and what a healthy burner flame looks like.",
    "Distinguish the three modern ignition strategies: hot surface ignition (HSI), spark ignition (SI), and direct spark ignition (DSI), plus the standing pilot they replaced.",
    "Explain flame rectification: how a flame conducts, why the signal is DC microamps, and how to measure it correctly in series.",
    "Interpret flame-signal readings — healthy, borderline, and failing — and name the causes of a weak signal besides a dirty sensor.",
    "Explain the control's response when flame is not proven: trial for ignition, lockout, and why the timing exists.",
    "Clean and service a flame sensor correctly without damaging it."
  ],
  sections: [
    {
      heading: "Burners and the Flame You Want to See",
      html: `
<p>The burner's job sounds simple — mix fuel and air and burn them — but it must do it stably across thousands of cycles: light instantly, burn quietly, stay anchored to the burner ports, and never let unburned fuel accumulate. Residential gas furnaces commonly use <strong>inshot (in-drawn) burners</strong>: a row of venturi tubes, one per heat-exchanger cell, where the gas jet pulls in primary air and the mixture fires into the exchanger opening. Older and commercial designs include ribbon, slotted-port, and power burners (with a fan forcing the mixture), but the inspection logic is the same for all of them.</p>
<p>A healthy natural gas flame in an inshot burner is <strong>well-defined and predominantly blue</strong>, sitting tight on the burner, with small, stable inner cones. Deviations are diagnostic sentences:</p>
<ul>
<li><strong>Lazy, yellow, wavering flames</strong> — too little primary air (shutters closed down, lint or rust in the venturi) or over-firing; expect soot and CO (Module 1's chain, starting).</li>
<li><strong>Lifting flames</strong> that blow off the ports and roar — too much primary air or excessive pressure/velocity pushing the flame off its anchor.</li>
<li><strong>Floating or rolling flames</strong> — starved for secondary air or a venting/exchanger problem; flames "searching" for air are a stop-and-investigate sign, especially any flame that rolls out of the burner opening toward you.</li>
<li><strong>One odd burner</strong> in the row — local cause: plugged ports, a blocked orifice (Module 2), or poor crossover ignition from its neighbor.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Read the flame like a gauge. Blue and anchored means the mixture is near design; yellow, lifting, or rolling each name a different proportion or pressure fault — and rollout is a safety event, not a curiosity.</div>`
    },
    {
      heading: "Ignition Systems: Pilot, HSI, SI, and DSI",
      html: `
<p>Something must supply the triangle's ignition leg at exactly the right moment, every cycle. Four strategies appear in the field:</p>
<ul>
<li><strong>Standing pilot.</strong> A small flame burns 24/7 and lights the main burner when the valve opens. A <strong>thermocouple</strong> (or thermopile) sits in the pilot flame and generates a tiny voltage from its heat; if the pilot dies, the voltage dies and the valve cannot open. Simple and power-free, but the pilot burns fuel all year and the thermocouple is a wear item. Found on older furnaces, water heaters, and unit heaters.</li>
<li><strong>Hot surface ignition (HSI).</strong> An electric element (silicon carbide or silicon nitride) is energized until it glows orange-white; the gas valve then opens and the mixture ignites off the hot element. HSI is the most common modern residential system. The igniter is fragile when hot, fails by cracking or by resistance drift, and is diagnosed with an ohmmeter (power off) and by watching for the glow.</li>
<li><strong>Spark ignition (SI) with pilot.</strong> A spark ignites a pilot; the pilot, once proven, allows the main valve to open. Also called intermittent pilot ignition — the pilot exists only during the call for heat.</li>
<li><strong>Direct spark ignition (DSI).</strong> The spark ignites the main burner directly — no pilot at all. Compact and common on rooftops, unit heaters, and many boilers.</li>
</ul>
<p>Whichever strategy is fitted, the sequence logic is identical: the control energizes the igniter first, opens the gas valve for a short <strong>trial for ignition</strong>, and demands proof of flame within seconds. Proof is the subject of the next section — and it is where modern systems earn their safety reputation.</p>
<div class="callout"><strong>Key idea:</strong> HSI = glow, then gas. SI = spark lights a pilot, pilot lights the burner. DSI = spark lights the burner directly. All three end at the same gate: prove flame fast, or close the valve.</div>`
    },
    {
      heading: "Flame Rectification: The Flame as a Diode",
      html: `
<p>How does a control board know a flame exists? The dominant method is <strong>flame rectification</strong>, and it is elegant. A metal rod — the <strong>flame sensor</strong> (or flame rod) — is positioned so the flame envelopes it. The control applies an AC voltage to the rod. A flame is not just hot gas; it is a weak plasma full of ions, and it conducts electricity — but it conducts <em>asymmetrically</em>, because the rod's small surface area and the burner's large grounded surface area pass current unequally in the two directions. The flame therefore <strong>rectifies</strong> the AC: a small <strong>DC current</strong>, measured in <strong>microamps (µA DC)</strong>, flows through the flame to ground. No flame, no current. The current's existence is the proof.</p>
<div class="formula">Flame signal: AC in → flame rectifies → DC microamps out. Healthy signals are commonly a few µA; many controls drop out below roughly 1 µA. The manufacturer's specification always governs.</div>
<p><strong>Measuring it.</strong> Flame current is measured with the meter <em>in series</em> in the sensor lead: disconnect the sensor wire, connect the meter (set to µA DC) between the wire and the sensor terminal, start the furnace, and read the steady value while the burner runs. Field experience across brands puts healthy readings commonly in the <strong>2–6 µA</strong> range, borderline around 1–2 µA, and failure territory below about 1 µA — but treat those as orientation, not specification: the board's dropout threshold is set by its manufacturer.</p>
<p><strong>Why signals go weak</strong> — learn the whole list, because "clean the sensor" is only item one:</p>
<ol>
<li>An insulating oxide/carbon coating on the rod (clean it).</li>
<li>Rod position wrong — tip not properly enveloped by flame.</li>
<li>Poor ground path — the current returns through burner ground and chassis; loose or corroded grounds strangle a circuit that only has microamps to spare.</li>
<li>Low burner input or poor flame quality shrinking the flame's contact with the rod.</li>
<li>Cracked rod insulator leaking the signal to ground before it reaches the board.</li>
</ol>
<div class="callout"><strong>Key idea:</strong> The flame circuit is a microamps circuit living in a dirty, hot, vibrating box. Grounds and connections that would be fine at 24 volts can be fatal at 2 µA. Diagnose the whole path: rod → flame → burner ground → board.</div>`
    },
    {
      heading: "Trials, Lockouts, and the Safety Clock",
      html: `
<p>When the gas valve opens for a trial for ignition, a clock starts. If flame is not proven within the trial window — a matter of seconds — the control closes the valve. This is non-negotiable logic: every second the valve is open without flame, unburned fuel pours into the exchanger; proving quickly is what makes it safe to retry at all.</p>
<p>Typical control behavior (details vary by board):</p>
<ul>
<li><strong>Trial for ignition:</strong> igniter warms up (HSI) or spark starts; valve opens; flame must be proven within the trial period.</li>
<li><strong>Flame failure response:</strong> valve closes immediately when the signal is lost mid-run — the "lights for a few seconds then dies" symptom from Module 1, most often a weak flame signal rather than a fuel problem.</li>
<li><strong>Retries and lockout:</strong> after a set number of failed trials (commonly three), the control enters <strong>lockout</strong> — it stops trying for a period (often an hour, or until power is cycled) and posts a fault code. Lockout protects against a fault condition being hammered indefinitely, and it tells you the failure is persistent, not a fluke.</li>
</ul>
<p>Read the board's LED fault code <em>before</em> cycling power — cycling the switch erases the evidence and wastes your best clue. And understand the ethics embedded in the design: a lockout is the control refusing to gamble with the customer's house. The technician who jumpers a flame-proving circuit to "get them heat" has removed the exact safeguard this module is about; there is no version of that story that ends well.</p>
<div class="callout"><strong>Key idea:</strong> Trial timing and lockout are the control's risk management: prove flame in seconds, retry a few times, then stop and report. Work with the logic — read codes, fix causes — never defeat it.</div>`
    },
    {
      heading: "Servicing Ignition and the Flame Sensor",
      html: `
<p><strong>Flame sensor service.</strong> Power off. Remove the rod (usually one screw and one wire). Clean the metal rod with fine steel wool or a non-metallic abrasive pad until the surface is bright; the goal is removing the insulating oxide film, not grinding the rod down. Avoid sandpaper — grit can embed in the surface. Inspect the ceramic insulator for cracks and the rod for warping or heavy erosion; a mechanically damaged sensor is replaced, not cleaned. Reinstall, verify position in the flame path, and — this is the step that separates service from superstition — <strong>measure the µA signal on the next run and record it</strong>. A cleaning that didn't restore signal means the fault is elsewhere in the path (ground, position, flame quality).</p>
<p><strong>HSI igniter service.</strong> Never touch the element's surface with bare fingers (oils create hot spots) and never test an igniter by energizing it loose in your hand. Diagnose by resistance (compare with the manufacturer's specification), by visual crack inspection, and by confirming the board sends line voltage during the ignition window. Handle replacements by their base or wires — a new igniter dropped or fingerprinted starts life weakened.</p>
<p><strong>Spark systems.</strong> Check the electrode gap against specification, the ceramic for cracks and carbon tracking, and the ignition cable for chafing or poor connections; a fat blue spark at the wrong place (a crack to ground) is still a no-light call.</p>
<div class="callout"><strong>Key idea:</strong> Service ends with a measurement, not a hope: µA reading after sensor cleaning, resistance value on the igniter, gap measurement on the electrode. Record them on the ticket — next year's tech (maybe you) will thank you.</div>`
    }
  ],
  keyTerms: [
    { term: "Inshot burner", def: "A venturi-tube burner, one per heat-exchanger cell, in which the gas jet draws in primary air and fires into the exchanger opening." },
    { term: "Flame rollout", def: "Flame escaping from the burner opening instead of entering the exchanger; a dangerous symptom of blockage, over-firing, or a failed exchanger." },
    { term: "Standing pilot", def: "A small pilot flame that burns continuously and lights the main burner on demand." },
    { term: "Thermocouple", def: "A heat-to-voltage device in a pilot flame whose small output holds the gas valve's safety circuit; no flame, no voltage, no gas." },
    { term: "Hot surface igniter (HSI)", def: "An electric element that glows hot enough to ignite the gas mixture directly; common modern ignition method." },
    { term: "Spark ignition (SI)", def: "Ignition in which a spark lights a pilot, which in turn lights the main burner; the pilot runs only during the call for heat." },
    { term: "Direct spark ignition (DSI)", def: "Ignition in which the spark lights the main burner directly, with no pilot." },
    { term: "Trial for ignition", def: "The short window during which the control opens the gas valve and requires proof of flame before continuing the run." },
    { term: "Flame rectification", def: "Flame proving method in which the flame conducts asymmetrically, rectifying an AC voltage into a small DC microamp signal to ground." },
    { term: "Flame sensor (flame rod)", def: "The metal rod positioned in the flame that carries the rectified flame-signal current." },
    { term: "Microamp (µA)", def: "One millionth of an ampere; the unit of flame-signal current, measured in series with the sensor lead on the DC scale." },
    { term: "Lockout", def: "A control state after repeated failed ignition trials in which the control stops trying for a period and reports a fault code." },
    { term: "Crossover", def: "The path by which flame carries from the lit burner to its neighbors across the burner row." },
    { term: "Primary air shutter", def: "An adjustable opening at the burner venturi controlling how much primary air the gas jet entrains." },
    { term: "Ignition module / integrated furnace control", def: "The control that sequences igniter, gas valve, flame proving, retries, and lockout." },
    { term: "Carbon tracking", def: "A conductive carbon path burned onto an insulator surface that lets ignition voltage leak to ground." },
    { term: "Flame proving", def: "Any verified method by which the control confirms flame exists before keeping the gas valve open." },
    { term: "Intermittent pilot", def: "A pilot lit by spark at the start of each call for heat and extinguished at the end (SI strategy)." }
  ],
  video: {
    title: "Furnace Part 2 - HVAC Training",
    embedUrl: "https://www.youtube.com/embed/Smiwc9Ni0uM",
    note: "This training video works through the ignition, gas valve, and flame rectification steps of a furnace service sequence — including testing the flame sensor in microamps and checking the furnace ground. Watch how the microamp measurement is made in series and compare it with this module's typical healthy range.",
    more: [
      { title: "Furnace Part 1 - HVAC Training", url: "https://www.youtube.com/watch?v=nh_TsPWdybE" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A furnace lights, runs about five seconds, and shuts off; after three attempts it locks out. The flame itself looks strong and blue. Explain what the control is telling you, and list the checks in the order you would perform them.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Interpretation — fuel, air, and ignition all work (the burner lights well), but flame is not being <em>proven</em>, so the board closes the valve at the end of its proving window and locks out after the retry limit. This is a proving-circuit fault, not a combustion fault. Step 2: Read the LED fault code before cycling power. Step 3: Measure the flame signal in series (µA DC) during a trial — expect a weak or zero reading. Step 4: Clean the flame rod with fine steel wool/pad and re-measure. Step 5: If still weak, check rod position in the flame, the ground path (burner mounting, ground wire to the board, chassis grounds) for looseness or corrosion, and the sensor insulator for cracks. Step 6: Only after the path tests good do you suspect the board's sensing circuit. Order matters because the cheapest, commonest causes come first and each step is proven by measurement.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Explain flame rectification to a new apprentice: why the signal is DC when the applied voltage is AC, and why the size difference between the rod and the burner matters.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A flame contains ions, so it conducts electricity — the flame is a wire that only exists while burning. Step 2: The control places AC voltage on the flame rod, whose tip is a small surface in the flame. The other 'plate' of the circuit is the burner itself — a very large grounded metal surface in the same flame. Step 3: Current crosses the flame easily in the direction from the large surface toward the small one and poorly in the reverse direction, because the small rod cannot collect/emission-match the large area. Step 4: Unequal conduction in the two half-cycles is rectification: the AC comes out as a net DC — a few microamps — measurable on a DC scale. Step 5: If there is no flame, there is no conductor at all: current is zero on both half-cycles, so zero signal can only mean 'no flame.' That asymmetry is what makes the method trustworthy enough to guard a gas valve.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> During a run, you measure the flame signal at 0.7 µA; the manufacturer's minimum for this board is above that (the unit drops out intermittently). The rod is clean and correctly positioned. Give three remaining causes, and the test for each.</p>",
      solution: "<p><strong>Answer:</strong> Cause 1 — Poor ground path: the signal returns through the burner and chassis. Test: inspect and tighten burner mounting and the board's ground connection; measure again after cleaning contact surfaces to bright metal — signal recovery confirms it. Cause 2 — Weak flame contact: input low (check manifold pressure, Module 2) or flame distorted by a partially blocked burner, shrinking the ionized area around the rod. Test: verify manifold pressure and flame appearance; compare rod coverage at full fire. Cause 3 — Signal leakage: cracked sensor insulator or a chafed sensor lead leaking the microamps to ground before the board. Test: inspect the ceramic; substitute a known-good sensor or measure with the lead repositioned/replaced. In all three, the rod itself was innocent — the lesson is that microamp circuits fail at microamp-scale defects anywhere in the loop.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Match the symptom to the ignition type: (a) furnace dead, small pilot flame out, millivolt reading near zero at the valve; (b) no glow visible during the ignition window, igniter resistance open; (c) ticking spark heard, pilot lights, main burner never opens. Name the system type and first check for each.</p>",
      solution: "<p><strong>Answer:</strong> (a) Standing pilot system: the thermocouple (or thermopile) generates the holding voltage only when heated by the pilot. Pilot out → no voltage → valve locked shut. First checks: relight pilot per instructions; if it won't stay lit with the button held through warmup, test/replace the thermocouple and check pilot flame enveloping its tip. (b) HSI system: an open igniter cannot glow. First checks: visual crack inspection and resistance against specification; confirm the board actually sends line voltage during the window (if it doesn't, the fault is upstream — pressure switch or board). (c) Spark-ignition (intermittent pilot) system: spark and pilot work, so the pilot flame is not being <em>proven</em> (pilot flame sensor/rectification in the pilot assembly) or the main valve section isn't energizing. First checks: clean/verify the pilot flame sensor and its ground; confirm 24 V at the main valve terminal during the trial.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A homeowner asks you to 'just wire around that flame sensor thing — it keeps shutting us down and we're cold.' Write the substance of your refusal and what you offer instead.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Explain plainly what the sensor does: it is the only evidence the control has that gas is burning instead of filling the furnace and house unburned. Bypassing it removes the guard on an explosion and CO hazard — the shutdowns are the system working, not failing. Step 2: Refuse the bypass clearly and without hedging; no jumper stays in place when you leave, ever — a defeated safety that later hurts someone is the technician's responsibility. Step 3: Offer the real remedy: diagnose the proving fault now (sensor cleaning and a µA test take minutes and fix most of these calls), and if a part is needed, explain options — order the part, or provide safe temporary heat advice (e.g., electric space heaters used per their instructions) until it arrives. Step 4: Document the refusal and the diagnosis on the ticket. Warmth is the goal; a house fire or a poisoned family is not an acceptable route to it.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Burner inspection finds: burner 1 strong and blue; burner 2 lazy and yellow-tipped; burner 3 strong and blue. The manifold pressure is correct. Diagnose the pattern and state the repair sequence.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A single odd burner with correct manifold pressure rules out system-wide causes (pressure, fuel, main air setting) — those would affect all three alike. The fault is local to burner 2. Step 2: Local suspects: partially plugged orifice (starves the jet, weakens air entrainment → fuel-rich lazy yellow flame), debris/rust in burner 2's venturi or ports, or a damaged crossover mis-shaping its light-off. Step 3: Repair sequence: power and gas off; remove burner 2; inspect and clean the orifice (never drill it out — clear it with appropriate soft tools/solvent per manufacturer guidance), clean the venturi and ports; inspect the crossover area; reinstall. Step 4: Relight and verify: all three flames matched, then a combustion test (Module 6) to prove the yellow flame's CO signature is gone. Step 5: Note the pattern for the ticket — single-burner faults are parts-and-cleaning calls, not adjustment calls.</p>"
    }
  ],
  quiz: [
    {
      q: "Flame rectification proves flame by detecting:",
      choices: ["The heat of the flame on a bimetal strip", "A small DC microamp current that the flame conducts to ground", "The light of the flame on a cadmium cell", "The expansion of gas in a bulb sensor"],
      answer: 1,
      explanation: "Correct: (b) The flame's ions conduct asymmetrically, rectifying applied AC into a DC microamp signal; the board requires that signal to keep the valve open. (a) Bimetal and (d) bulb devices are temperature-based proving used in some older/other equipment, not rectification. (c) A cadmium (cad) cell senses light — that is the flame-proving method of oil burners (Module 7), a useful contrast but the wrong answer here."
    },
    {
      q: "Flame current is correctly measured:",
      choices: ["With the meter in parallel across the sensor, on AC volts", "With the meter in series in the sensor lead, on DC microamps", "With a clamp meter around the sensor wire, on AC amps", "By ohming the sensor to ground with power on"],
      answer: 1,
      explanation: "Correct: (b) The microamps must flow through the meter, so it goes in series in the sensor lead and reads DC µA. (a) Parallel AC volts measures the applied voltage, not the rectified signal — a sensor can have voltage present and zero signal. (c) Clamp meters cannot resolve microamps, and the signal is DC, not AC. (d) Resistance checks are power-off tests; ohming a live circuit both lies and can damage the meter."
    },
    {
      q: "A healthy flame signal is best described as:",
      choices: ["Exactly 24 µA on every furnace", "Commonly a few microamps (often roughly 2–6 µA), judged against the manufacturer's specification", "Any reading above 0 µA", "Measured in millivolts like a thermocouple"],
      answer: 1,
      explanation: "Correct: (b) Real-world signals live in the low single-digit microamps; many boards drop out near or below ~1 µA, and the maker's spec is the authority for the unit in front of you. (a) There is no universal exact value — flame geometry and boards differ. (c) A reading barely above zero (e.g., 0.4 µA) usually sits under the dropout threshold and produces intermittent shutdowns. (d) Millivolts describe thermocouple/thermopile output on pilot systems — a different proving method."
    },
    {
      q: "A furnace lights for a few seconds and shuts off, repeatedly, with a strong-looking flame. The most likely fault group is:",
      choices: ["Gas supply pressure too high", "Flame proving: dirty/mispositioned sensor, poor ground, or weak signal path", "Blower motor failure", "Thermostat heat anticipator"],
      answer: 1,
      explanation: "Correct: (b) Lighting proves fuel, air, and ignition; dying seconds later is the board failing to receive flame proof — the sensor chain is the suspect list. (a) Excess pressure more often causes noisy, lifting flames or rollout faults, not clean five-second cycles. (c) Blower faults appear later in the sequence (limit trips after sustained firing), not at the proving moment. (d) Thermostat issues cause no-call or short-cycle patterns at the thermostat level, not ignition-then-dropout."
    },
    {
      q: "The correct way to clean a flame sensor rod is:",
      choices: ["Coarse sandpaper until the metal is deeply scored", "Fine steel wool or a non-metallic abrasive pad, removing the oxide film; then verify the µA signal", "A wire wheel on a drill at high speed", "Solvent only — never touch the rod surface"],
      answer: 1,
      explanation: "Correct: (b) Gentle abrasion removes the insulating oxide without damaging the rod, and the job is finished only when the measured signal proves it. (a) Coarse sandpaper scores the surface and can embed grit, making re-fouling worse. (c) A wire wheel is too aggressive and can bend or thin the rod and damage the insulator. (d) The oxide film that causes the problem is not reliably solvent-soluble; skipping abrasion skips the repair."
    },
    {
      q: "The trial for ignition is short (a matter of seconds) because:",
      choices: ["Igniters overheat if energized longer", "While the valve is open without proven flame, unburned fuel is accumulating in the exchanger", "The blower must start quickly to save energy", "Gas valves are only rated for short operation"],
      answer: 1,
      explanation: "Correct: (b) The proving window is a fuel-inventory limit: the control tolerates only a few seconds of unburned gas before deciding the trial failed and closing the valve. (a) HSI elements do have duty considerations, but the safety clock is about the gas, not the element. (c) Blower timing is a separate, later sequence step and irrelevant to ignition safety. (d) Gas valves are rated for continuous operation — furnaces run them for hours once flame is proven."
    },
    {
      q: "In a standing pilot system, the thermocouple's job is to:",
      choices: ["Ignite the pilot automatically", "Generate a small voltage from pilot flame heat that holds the valve's safety circuit; if the pilot dies, the valve can't open", "Prove main burner flame to the board", "Regulate manifold pressure"],
      answer: 1,
      explanation: "Correct: (b) The heated thermocouple produces the millivoltage that keeps the safety magnet energized; lose the pilot and the valve is mechanically locked out of opening. (a) A standing pilot is lit manually or by a separate piezo sparker on some appliances — the thermocouple generates no spark. (c) The thermocouple proves the pilot, not the main burner; the main burner lights from the proven pilot. (d) Pressure regulation is done by the valve's regulator section, unrelated to the thermocouple."
    },
    {
      q: "After cleaning a flame sensor, the signal is still below the board's minimum. Which next step follows this module's logic?",
      choices: ["Replace the control board immediately", "Check sensor position in the flame, the ground path, and the insulator/lead for leakage", "Raise manifold pressure until the signal recovers", "Bypass the sensor until the next visit"],
      answer: 1,
      explanation: "Correct: (b) The rod is one element of a loop: flame contact (position), the return path (grounds), and leakage (insulator, lead) all remain suspect, and each has a direct test. (a) Boards do fail, but condemning the most expensive part before testing the cheap loop violates diagnostic order. (c) Over-fueling to inflate a signal creates over-firing, soot, and CO — treating a proving fault with a combustion hazard. (d) Bypassing flame proving is never an option, at any duration."
    }
  ],
  studyGuide: `
<h3>Module 3 — Gas Burners, Ignition & Flame Proving: Quick Reference</h3>
<p><strong>Flame reading:</strong> healthy = blue, defined, anchored. Yellow/lazy = too little primary air or over-fire. Lifting/roaring = excess air or pressure. Rolling out = STOP — blockage/exchanger/vent fault.</p>
<p><strong>Ignition types:</strong> Standing pilot + thermocouple (millivolts hold the safety). HSI = glow element, then gas. SI = spark → pilot → main. DSI = spark → main directly.</p>
<p><strong>Flame rectification:</strong> flame conducts asymmetrically → AC applied to the rod returns as <strong>DC microamps</strong>. Measure <strong>in series</strong>, DC µA scale, burner running. Healthy commonly ≈ 2–6 µA; many boards drop out below ≈ 1 µA; manufacturer spec governs.</p>
<p><strong>Weak-signal causes (whole loop):</strong> coated rod → clean with fine steel wool/non-metallic pad (no sandpaper). Wrong rod position. Loose/corroded grounds. Weak flame (check manifold pressure). Cracked insulator or leaking lead.</p>
<p><strong>Control logic:</strong> trial for ignition = seconds (limits unburned fuel). Flame lost = valve closes at once. Repeated failures = lockout + fault code. Read the code BEFORE cycling power. Never bypass flame proving — no exceptions, no durations.</p>
<p><strong>HSI care:</strong> never touch the element surface; diagnose by resistance + voltage presence; handle replacements by the base.</p>
`
};
