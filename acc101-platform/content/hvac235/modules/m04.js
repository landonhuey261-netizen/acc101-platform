// HVAC 235 - Module 4: Combustion Troubleshooting
module.exports = {
  number: 4,
  slug: "combustion-troubleshooting",
  title: "Combustion Troubleshooting",
  estTime: "3–4 hours",
  objectives: [
    "Read flame appearance and combustion behavior to separate fuel-side, air-side, and draft-side faults.",
    "Test a pressure-switch circuit the professional way: manometer measurement compared against the switch's printed rating.",
    "Build the full differential for pressure-switch and draft faults on condensing furnaces — hose, ports, trap, vent, intake, inducer, exchanger.",
    "Diagnose nuisance high-limit trips by measuring temperature rise and airflow instead of replacing limits.",
    "Distinguish a failed switch from a switch correctly reporting a sick vent system.",
    "Apply safe practice throughout: never jumper a safety to run a furnace, and verify every repair with measured values."
  ],
  sections: [
    {
      heading: "Flame Quality: The Burner's Report Card",
      html: `
<p>Before instruments, look at the fire. A healthy natural-gas flame is predominantly <strong>blue, stable, and well-defined</strong>, anchored on the burner ports without lifting, floating, or hunting. Each abnormality is a sentence in a language worth fluency:</p>
<ul>
<li><strong>Yellow, lazy, rolling flames</strong> — combustion air starvation or dirty burners. The flame stretches searching for oxygen, impinges on exchanger surfaces, and makes soot and CO. Causes: clogged burner ports, a restricted intake (Module 3), recirculation, or a depressurized furnace room on a single-pipe install.</li>
<li><strong>Lifting, blowing flames</strong> — too much primary air or excessive draft/gas pressure: the flame stands off the port, noisy and unstable, and can blow itself out or fail flame proving.</li>
<li><strong>Flame disturbance when the blower starts</strong> — the classic cracked-heat-exchanger tell: flames that waver, roll, or change shape the moment circulating air pressurizes the exchanger. Treat it as a stop-and-inspect finding (Module 10's safety rules apply), never as a "clean the burners" note.</li>
<li><strong>One burner different from the rest</strong> — a local problem: a plugged port or orifice, a misaligned burner, or debris in one exchanger cell's inlet.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Flame problems are ratio problems — fuel, air, and draft in the wrong proportions. Name which leg of the ratio is off before reaching for parts: verify manifold pressure (fuel), inspect burners/intake/room air (air), and measure draft (vent path). The analyzer numbers from HVAC 132 Module 6 then confirm what your eyes suspected.</div>
<p>Soot anywhere it should not be — in the burner compartment, at the draft hood of a neighboring appliance, inside the collector — is the residue of chronic ratio failure. Soot is evidence with a history: find what has been burning wrong, for how long, and what it has been coating (including the secondary exchanger passages, Module 1).</p>`
    },
    {
      heading: "The Pressure-Switch Test, Done Properly",
      html: `
<p>The pressure switch is the most mis-replaced part in modern heating, because testing it with a meter alone only proves the switch's contacts work — it says nothing about whether the <em>draft</em> is adequate. The professional test measures the draft itself:</p>
<ol>
<li>Read the <strong>rating printed on the switch</strong> (in inches of water column, in. w.c.) — the draft at which it is calibrated to close.</li>
<li>Tee a <strong>manometer</strong> into the switch's pressure hose (or connect at the switch's port per the manufacturer's instructions) so you read the pressure the switch actually sees, with the inducer running and the burner compartment in its normal state.</li>
<li>Compare. <strong>Measured draft comfortably above the rating + switch open = failed switch.</strong> <strong>Measured draft below the rating = the switch is telling the truth</strong> — the fault is in whatever produces or transmits draft: inducer, vent, intake, hoses, ports, trap, or exchanger. Replacing the switch in the second case changes nothing except the customer's bill.</li>
</ol>
<div class="callout"><strong>Key idea:</strong> Worked example — switch rated <strong>0.60 in. w.c.</strong>; manometer reads <strong>0.38 in. w.c.</strong> with the inducer at full speed. 0.38 &lt; 0.60: the switch <em>should</em> be open. Your diagnosis is "insufficient draft," and the switch goes back on the truck stock. If the manometer read 0.85 in. w.c. and the switch stayed open, the draft is proven and the switch itself has failed.</div>
<p>Mind the details that fake readings: a hose full of condensate reads the water, not the draft — pull hoses and check for water and cracks before trusting any number. A plugged pressure port at the collector (a tiny nipple that crusts over) can starve an honest switch. And on two-switch modulating furnaces (Module 2), test each switch against the stage it proves.</p>`
    },
    {
      heading: "The Draft-Fault Differential: Everything Between Inducer and Sky",
      html: `
<p>When the manometer convicts the draft instead of the switch, walk the pressure's whole path, in the order a tech can check quickly:</p>
<ul>
<li><strong>Hoses and ports.</strong> Cracked, kinked, water-logged, or disconnected hose; plugged port at the collector or inducer housing. Cheapest faults, checked first, missed constantly.</li>
<li><strong>Condensate trap and drain.</strong> A plugged or frozen trap backs water into the collector until the inducer is moving water instead of air (Module 1). Gurgling is the sound of this fault.</li>
<li><strong>Vent and intake pipes.</strong> Over equivalent length, bellied runs holding water, unglued joints, frost or snow at the termination, nests and debris (Module 3's whole catalog).</li>
<li><strong>Secondary heat exchanger restriction.</strong> The tight passages choke flow; draft at the switch falls even with a clear vent (Module 1's plugged secondary).</li>
<li><strong>The inducer itself.</strong> Worn wheel, debris in the housing, a failing motor that no longer reaches speed, or incorrect voltage. Compare its draw and sound; a slowing inducer produces a draft that sags as it heats up — the fault that "only happens after 20 minutes."</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Diagnose by segment isolation: pull the vent pipe at the furnace and run the inducer briefly — if draft at the switch jumps to healthy, the restriction lives in the vent run or termination; if it stays low, the problem is inside the appliance (trap, exchanger, inducer, hoses). One test splits the world in half. (Do this only as a momentary diagnostic with the burner unable to fire unattended — the safety discipline of the lab applies.)</div>
<p>Document the numbers: switch rating, measured draft before repair, measured draft after. "Replaced switch, unit heating" is a guess written down; "0.38 in. w.c. vs 0.60 rating → found trap plugged → 0.92 in. w.c. after cleaning" is a diagnosis (Module 12).</p>`
    },
    {
      heading: "Nuisance Limit Trips: An Airflow Confession",
      html: `
<p>The <strong>high limit</strong> opens when the heat exchanger gets too hot — which, on a gas furnace, almost always means heat is being made faster than air is carrying it away. A limit that trips repeatedly is confessing an airflow or overfire problem; replacing the limit treats the messenger and leaves the furnace cooking its exchanger toward cracks (Module 10). Work it in this order:</p>
<ol>
<li><strong>Measure temperature rise</strong> and compare to the rating plate's range. High rise = low airflow (or overfire). Use ΔT = Output ÷ (1.08 × CFM) from Module 2 to quantify how far airflow is off.</li>
<li><strong>Airflow suspects:</strong> loaded or wrong (overly restrictive) filter, closed/blocked registers, collapsed or undersized duct, failing blower or wrong speed tap/ECM profile, a matted evaporator coil above the furnace.</li>
<li><strong>Overfire suspects:</strong> manifold pressure above the rating-plate value (natural gas is typically 3.5 in. w.c. — verify on the plate), wrong orifices after a fuel conversion, or a gas valve regulator failure.</li>
<li><strong>The limit itself — last.</strong> Limits do weaken and drift after years of trips, and a limit that has been cooked by chronic trips may open early. It earns replacement after the cause is fixed and measured rise is back in range — often as insurance, since its calibration has been stressed.</li>
</ol>
<div class="callout"><strong>Key idea:</strong> Worked example — a furnace delivering 76,000 Btu/h shows a 78°F rise against a 70°F plate maximum. Airflow = 76,000 ÷ (1.08 × 78) ≈ <strong>900 CFM</strong>; it needs at least 76,000 ÷ (1.08 × 70) ≈ <strong>1,005 CFM</strong> just to reach the limit of the range. The finding is "~100+ CFM missing," and the hunt is filters, ducts, coil, and blower — not the limit switch bin.</div>
<p>Also separate true limit trips from their imitators: a furnace that "runs ten minutes and quits" may be tripping on limit, opening a pressure switch as an inducer heats and slows, or losing flame signal as a flame sensor's coating cooks — three different faults with three different measurements. Fault codes plus timing plus one instrument reading beat a parts swap every time.</p>`
    },
    {
      heading: "Putting It Together: A Troubleshooting Discipline",
      html: `
<p>Combustion troubleshooting rewards sequence over speed:</p>
<ol>
<li><strong>Safety scan first.</strong> CO monitor on, ambient air checked, gas odor means stop (the lab's Step 0 is this course's standing rule). Eyeball the vent, the drain, and the burner compartment before cycling anything.</li>
<li><strong>Let the furnace confess.</strong> Run a full call for heat and watch the sequence from HVAC 132: inducer → pressure switch proves → ignition → flame proving → blower. <em>Where the sequence stops is the neighborhood of the fault.</em> A furnace that never gets past proving is not an ignition problem, no matter how many igniters it has eaten.</li>
<li><strong>Measure at the stopping point.</strong> Manometer for draft faults, meter for ignition/proving faults, thermometer pair for limit complaints, analyzer for combustion-quality complaints.</li>
<li><strong>Fix causes, verify with the same instrument.</strong> The reading that convicted the fault must clear after the repair, on a full cycle, at the relevant stage.</li>
</ol>
<div class="callout"><strong>Key idea:</strong> The banned shortcut, stated plainly: never jumper, tape, or defeat a pressure switch, limit, or any safety to make a furnace run — not "just to test," not to get a customer through the night. A safety that won't close is information about a hazard. Heat the home another way (or red-tag per Module 10) while the real fault is found.</div>
<p>Module 12 returns to these faults in combination — the real world rarely sends one fault at a time — and the lab now puts you on a live (simulated) pressure-switch call. Master the manometer comparison here; it is the single highest-value measurement in residential gas service.</p>`
    }
  ],
  keyTerms: [
    { term: "Pressure-switch rating", def: "The draft (in. w.c.) printed on the switch at which its contacts are calibrated to close; the benchmark every manometer measurement is compared against." },
    { term: "Manometer", def: "The instrument that measures small pressures in inches of water column — gas manifold pressure and inducer draft — central to combustion troubleshooting." },
    { term: "Insufficient draft", def: "Measured draft below the pressure switch's rating, meaning the fault lies in the inducer, vent, intake, hoses, trap, or exchanger — not in the switch." },
    { term: "Segment isolation", def: "Splitting a system at a midpoint (e.g., disconnecting the vent at the furnace) to determine which half contains the fault." },
    { term: "High limit switch", def: "The safety that opens when heat-exchanger temperature exceeds its setpoint, shutting off the burner; repeated trips indicate airflow or overfire problems." },
    { term: "Temperature rise", def: "Supply temperature minus return temperature across a running furnace; compared to the rating-plate range to judge airflow versus firing rate." },
    { term: "Overfire", def: "Burner input above the rating — from excess manifold pressure or wrong orifices — producing overheating, limit trips, and exchanger damage." },
    { term: "Rollout switch", def: "A safety near the burners that trips when flame or hot gases escape the exchanger entrance — a sign of blockage, overfire, or exchanger failure." },
    { term: "Flame lifting", def: "Flames standing off the burner ports from excessive primary air, draft, or gas pressure; unstable and prone to proving failures." },
    { term: "Flame impingement", def: "Flame contacting a cooler surface (often from air starvation), quenching combustion and producing soot and carbon monoxide." },
    { term: "Primary air", def: "The combustion air mixed with gas before the burner port; its balance with secondary air determines flame shape and stability." },
    { term: "Flame rectification", def: "The AC-to-DC signal through the flame that proves flame presence to the control board (introduced in HVAC 132); weakened by dirty sensors and poor grounding." },
    { term: "Lockout", def: "A control state after failed ignition or repeated safety trips in which the board stops trying until reset or power cycle — the board's verdict, not the diagnosis." },
    { term: "Draft proving", def: "The pressure switch's confirmation that the inducer has established adequate vent flow before and during burner operation." },
    { term: "Pressure port", def: "The small nipple on the collector or inducer housing where the pressure-switch hose samples draft; prone to crusting shut and faking a bad switch." },
    { term: "Red tag", def: "The formal shutdown-and-tag of an appliance found unsafe to operate (Module 10); the alternative to ever defeating a safety control." }
  ],
  video: {
    title: "Gas Furnace Combustion Analysis Training with Tyler Nelson!",
    embedUrl: "https://www.youtube.com/embed/3KiMTT_qGiU",
    note: "A full combustion-analysis workflow on a real gas furnace — probe placement, steady-state readings, and interpreting the numbers together — exactly the measurement discipline this module's troubleshooting sequence ends with. Watch how readings are taken only after the furnace stabilizes, and how the numbers direct the diagnosis instead of decorating it.",
    more: [
      { title: "How to Test Pressure Switch on a Furnace", url: "https://www.youtube.com/watch?v=MWn55b8DXO0" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A pressure switch is rated 0.50 in. w.c. With the inducer running, your manometer teed into the switch hose reads 0.72 in. w.c., but the switch's contacts never close and voltage passes no further. Diagnosis and action?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Compare: measured draft 0.72 &gt; rating 0.50 — draft is proven adequate with margin. Step 2: The switch, presented with more than its closing pressure, still does not close: this is a genuinely <strong>failed pressure switch</strong> (assuming the hose connection and meter method are sound — double-check the tee is actually reading the switch's port). Step 3: Replace with the manufacturer's specified switch (ratings are model-specific — never substitute a 'close enough' rating), then verify: new switch closes, furnace completes full cycles, and record both draft readings on the ticket.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Same furnace a month later: switch rated 0.50 in. w.c., manometer reads 0.31 in. w.c. The customer says 'just put another switch in, that fixed it last time.' Write your response and your diagnostic plan.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Explain the evidence: 0.31 &lt; 0.50 — the inducer is only producing about three-fifths of the draft the switch needs; a new switch with the same rating would sit open exactly like this one, because the switch is reporting a weak draft, not causing it. (Last time the draft measured strong and the switch itself had failed — different evidence, different repair.) Step 2: Plan: inspect hose and pressure port for water/cracks/blockage; check trap and drain for water backup; isolate the vent at the furnace to split appliance-side from vent-side restriction; inspect terminations, vent slope/length, secondary exchanger, and inducer condition. Step 3: Fix the found cause, then prove it: manometer reading above 0.50 in. w.c. on a full cycle before leaving.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A furnace trips its high limit roughly every cycle. Data: delivered output 88,000 Btu/h, measured rise 82°F, rating plate rise range tops out at 70°F, manifold pressure correct, filter new and correct. (a) Compute actual airflow and minimum required airflow. (b) With filter and manifold pressure cleared, list what remains on your suspect list.</p>",
      solution: "<p><strong>Solution:</strong> (a) Actual CFM = 88,000 ÷ (1.08 × 82) = 88,000 ÷ 88.56 ≈ <strong>994 CFM</strong>. Minimum CFM to hold rise at 70°F = 88,000 ÷ (1.08 × 70) = 88,000 ÷ 75.6 ≈ <strong>1,164 CFM</strong> — the system is roughly 170 CFM short. (b) Remaining suspects: blower speed tap or ECM profile set too low (or a weakening blower motor/capacitor on PSC systems), a matted evaporator coil restricting flow above the furnace, closed or blocked registers and returns, collapsed/undersized duct runs, and high total external static pressure generally. Measure TESP to confirm the blower is working against excess resistance, correct the cause, then re-measure rise into the plate range — and only then consider the limit itself, whose calibration chronic tripping may have stressed.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> During a heating check you observe flames that burn blue and steady until the main blower starts — then they waver and roll noticeably. What do you suspect, what do you do next, and what do you absolutely not do?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Suspect a <strong>cracked or breached heat exchanger</strong>: when the blower pressurizes the air side, air pushes through the breach and disturbs the flames — one of the classic visual tells. Step 2: Shut the furnace down and inspect the exchanger properly (visual/mirror/camera inspection and combustion/CO checks per Module 10's protocol); confirm before condemning, and test the living space for CO. Step 3: If confirmed, the appliance is red-tagged out of service and the customer is told plainly why — a breached exchanger is a CO pathway into the airstream. Absolutely NOT: do not clean the burners and leave it running, do not dismiss it because 'it still heats,' and do not defeat any safety to keep it in service.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A condensing furnace's inducer runs, then the board locks out before ignition. You find the pressure-switch hose half full of water. Explain how the water got there, what it does to the reading, and the repair sequence.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Origin: the hose samples the collector/inducer area of a machine whose whole design condenses water; a hose routed with a low loop, or a trap/drain that backs water up toward the collector, lets condensate collect in the hose. Step 2: Effect: the switch (and your manometer) now read the pressure transmitted through a water column — sluggish, offset, or blocked entirely — so proving fails or flutters even when true draft is adequate. Step 3: Repair: remove and drain/replace the hose (replace if cracked or stiff), reroute it without low spots per the manual, clear the real cause — clean the trap, prove the drain flows, check vent slope for bellies — then manometer-verify draft against the switch rating on a full cycle.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Arrange these into the correct troubleshooting order for an unknown no-heat furnace call and justify the order in one sentence each: (i) replace the pressure switch, (ii) observe where the operating sequence stops, (iii) ambient CO and safety scan, (iv) measure draft against the switch rating, (v) replace the igniter.</p>",
      solution: "<p><strong>Answer:</strong> Correct order: <strong>(iii) → (ii) → (iv)</strong>, with (i) and (v) occurring only if the evidence convicts those parts. Justifications: (iii) first because no diagnosis outranks a poisoned or gas-filled space — safety evidence precedes all equipment evidence. (ii) next because where the sequence stops (proving, ignition, flame sense, blower) localizes the fault family before any instrument comes out. (iv) follows because, for a proving-stage stop, the manometer-vs-rating comparison decides between a failed switch and a draft system fault. (i) and (v) are conclusions, not steps: parts get replaced when a measurement names them — a switch with proven draft above its rating, an igniter with proper voltage and no glow/current draw.</p>"
    }
  ],
  quiz: [
    {
      q: "Measured draft at the pressure switch is 0.85 in. w.c.; the switch is rated 0.60 in. w.c. and never closes. The correct conclusion is:",
      choices: ["The vent is blocked", "The switch has failed — draft exceeds its rating yet it stays open", "The inducer is weak", "The manifold pressure is low"],
      answer: 1,
      explanation: "Correct: (b). The manometer proves the switch is being offered more pressure than its closing rating; a healthy switch must close. (a) and (c) produce draft BELOW the rating — the opposite of this measurement. (d) Manifold pressure is a gas-side value unrelated to whether the draft switch closes."
    },
    {
      q: "Yellow, lazy, rolling flames most directly indicate:",
      choices: ["Excess manifold pressure", "Combustion-air starvation or dirty burners, with soot and CO production likely", "A failed high limit", "Normal operation for propane"],
      answer: 1,
      explanation: "Correct: (b). Flames stretch and yellow when they cannot get oxygen fast enough — starved air or clogged ports — and incomplete combustion (soot, CO) follows. (a) Overpressure tends toward lifting, noisy, hard blue flames, not lazy yellow ones. (c) The limit responds to exchanger temperature; it does not shape the flame. (d) Properly adjusted propane burns blue and defined just like natural gas."
    },
    {
      q: "A furnace repeatedly trips its high limit. The FIRST measurement to make is:",
      choices: ["Limit switch resistance", "Temperature rise compared against the rating-plate range", "Gas valve coil resistance", "Inducer amp draw"],
      answer: 1,
      explanation: "Correct: (b). Limit trips mean the exchanger is overheating, and rise quantifies the usual cause — too little airflow for the firing rate — in one measurement that also points at the fix. (a) The limit is the reporter; its resistance rarely explains chronic trips. (c) and (d) belong to other fault families (ignition and draft) and may be checked later, but neither explains an overheating exchanger as directly as rise."
    },
    {
      q: "Flames that dance and roll only after the main blower starts are a classic warning of:",
      choices: ["A dirty air filter", "A cracked or breached heat exchanger", "A weak flame sensor", "Low manifold pressure"],
      answer: 1,
      explanation: "Correct: (b). Blower air pressurizing the air side pushes through a breach and disturbs the flame picture — a stop-and-inspect finding with CO implications (Module 10). (a) A dirty filter raises temperature rise and can trip limits but does not make flames roll when the blower starts. (c) A weak flame sensor causes proving shutdowns seconds after ignition, not flame-shape changes. (d) Low pressure makes small, lazy flames independent of blower operation."
    },
    {
      q: "To decide whether a draft fault lives in the vent run or inside the furnace, the segment-isolation test is to:",
      choices: ["Replace the inducer and retest", "Disconnect the vent at the furnace and briefly run the inducer: healthy draft at the switch convicts the vent run/termination; still-low draft convicts the appliance side", "Remove the pressure switch and blow through it", "Close all the house's supply registers"],
      answer: 1,
      explanation: "Correct: (b). Splitting the path at the furnace collar halves the suspect list in one measurement: draft recovers → restriction is downstream in vent/termination; draft stays low → trap, exchanger, hoses, or inducer. (a) Parts-first testing skips the evidence. (c) Blowing through a switch tests nothing about the vent and can damage the diaphragm. (d) Registers are on the air side, irrelevant to vent draft."
    },
    {
      q: "A pressure-switch hose found half full of water will cause:",
      choices: ["Nothing — the hose is supposed to carry condensate", "False, sluggish, or blocked pressure transmission, so proving fails or flutters despite adequate true draft", "The inducer to overspeed", "Manifold pressure to rise"],
      answer: 1,
      explanation: "Correct: (b). The switch reads pressure through the hose; water in it offsets and damps that signal, producing proving faults on a mechanically healthy vent system. (a) The hose must transmit air pressure only — water in it is a defect pointing at routing or drainage trouble upstream. (c) The hose is a sensor line; it cannot change inducer speed. (d) It has no connection to the gas train."
    },
    {
      q: "The professional response when a furnace will only run with its pressure switch jumpered is:",
      choices: ["Leave the jumper for the night and return tomorrow", "Never acceptable — the jumper defeats draft proving; find the draft fault or shut the appliance down safely", "Acceptable if the customer signs a waiver", "Acceptable if a window is opened in the furnace room"],
      answer: 1,
      explanation: "Correct: (b). The pressure switch proves combustion gases are being vented before gas flows. Defeating it can let a furnace fire into a blocked vent and fill the home with CO — no waiver, window, or time limit makes that safe or professional. (a), (c), and (d) all describe variations of the same prohibited gamble; the alternatives are diagnosing the draft fault or red-tagging the appliance and arranging safe temporary heat."
    },
    {
      q: "An inducer that proves draft on a cold start but drops the pressure switch after 20 minutes of running most likely has:",
      choices: ["A switch rated too high from the factory", "A weakening inducer motor or heat-related restriction — its draft sags as it runs hot", "A thermostat with a bad battery", "Excessive manifold pressure"],
      answer: 1,
      explanation: "Correct: (b). Time-and-heat-dependent draft loss points at the inducer itself (motor slowing as it heats, wheel fouling) or a restriction that grows during operation, such as water accumulating in a belly or trap. Verify by watching the manometer across a long cycle. (a) A factory rating does not change with run time. (c) A thermostat cannot open a pressure switch mid-cycle. (d) Manifold pressure does not govern inducer draft."
    }
  ],
  studyGuide: `
<h3>Module 4 — Combustion Troubleshooting: Quick Reference</h3>
<p><strong>Flames:</strong> blue/steady = healthy • yellow/lazy/rolling = air starvation or dirty burners (soot + CO) • lifting/noisy = excess air or pressure • flames disturbed when the blower starts = suspect cracked exchanger — shut down and inspect.</p>
<div class="formula">The switch test: manometer draft vs. the rating printed on the switch. Draft ABOVE rating + switch open = failed switch. Draft BELOW rating = healthy switch reporting a draft fault — hunt hoses/ports, trap/drain, vent &amp; intake, secondary HX, inducer.</div>
<p><strong>Segment isolation:</strong> pull the vent at the furnace, run the inducer briefly — draft recovers → vent/termination; stays low → inside the appliance.</p>
<p><strong>Limit trips:</strong> measure rise vs. plate range; CFM = Output ÷ (1.08 × ΔT). High rise = low airflow (filter, ducts, coil, blower) or overfire (manifold pressure — natural gas typically 3.5 in. w.c., verify on plate). Replace the limit LAST, after the cause is fixed.</p>
<p><strong>Hose discipline:</strong> water, cracks, kinks, or a crusted pressure port fake every reading — inspect before trusting numbers.</p>
<p><strong>Never</strong> jumper a pressure switch, limit, or any safety to run a furnace. Fix the cause or red-tag (Module 10). Document rating + before/after draft on every ticket.</p>
`
};
