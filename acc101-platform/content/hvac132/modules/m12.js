// HVAC 132 - Module 12: Heating Troubleshooting & No-Heat Calls
module.exports = {
  number: 12,
  slug: "heating-troubleshooting-no-heat-calls",
  title: "Heating Troubleshooting & No-Heat Calls",
  estTime: "3–4 hours",
  objectives: [
    "Run a no-heat call in professional order: interview, safety spine, utilities check, sequence observation, measurement, repair, verification.",
    "Explain why 'check the simple, global things first' (thermostat, power, fuel, filter) outperforms parts knowledge at the start of a call.",
    "Sort faults by where the sequence stops and by pattern families: dead, no-ignition, ignition-without-stay, runs-but-weak, cycles, noisy.",
    "Handle intermittent faults methodically: logs, provoked conditions, and evidence capture instead of parts roulette.",
    "Communicate findings, options, and safety shut-downs to customers in plain language, and document them defensibly.",
    "Close every call with full verification: sequence, combustion/airflow checks, CO check, and housekeeping."
  ],
  sections: [
    {
      heading: "The Call Begins Before the Tools Come Out",
      html: `
<p>The fastest technicians look slow for the first five minutes, because they are running the highest-yield part of the call: <strong>information gathering</strong>.</p>
<ul>
<li><strong>Interview.</strong> When did it last work? What changed — new thermostat, storm, fuel delivery, renovation, weird smells or sounds? Did anyone touch anything (a reset button pressed six times is a Module 7 emergency, not a detail)? Is the problem constant or does it come and go, and on what rhythm?</li>
<li><strong>Safety spine (Module 1).</strong> Ambient CO check on entry. If anything smells of gas or CO reads elevated, the call changes species instantly.</li>
<li><strong>The global checks.</strong> Thermostat: mode, setpoint above room temperature, batteries/display, actual call (24 V on W at the unit). Power: switch on, breaker on, door switch seated. Fuel: gas valve open/meter on, propane tank gauge, oil tank gauge. Filter: the two-minute inspection that explains a quarter of all 'mysteries.'</li>
</ul>
<p>Only then: <strong>observe one full sequence attempt</strong> (Module 5) and locate where it halts. This order is not ritual — it is economics and probability. Global causes are common, cheap, and fast to check; component failures are rarer, and the sequence tells you which component is even eligible to be guilty. Technicians who start by replacing the igniter on a furnace whose thermostat lost its batteries have confused motion with method.</p>
<div class="callout"><strong>Key idea:</strong> Interview → safety → globals → sequence → measurements → repair → verification. Skipping ahead doesn't save time; it spends the customer's money proving the skipped steps were the answer.</div>`
    },
    {
      heading: "Pattern Families: Sorting by Symptom",
      html: `
<p>Nearly every heating complaint sorts into one of six families, and each family owns a suspect list:</p>
<ul>
<li><strong>Dead (nothing happens).</strong> Power path: breaker, switch, door switch, fuse on the board, transformer, thermostat call itself. No W signal = the furnace is innocent until the call is proven present.</li>
<li><strong>No-ignition (sequence halts early).</strong> Inducer runs, then nothing: pressure switch/draft family (Module 11). Nothing runs at all but power and call are good: open safety in the chain (limit from a prior overheat, manual-reset rollout waiting for its investigation).</li>
<li><strong>Ignites but won't stay lit.</strong> Flame proving (Module 3): sensor µA, grounds, position. On oil: cad cell family (Module 7). On pilot systems: thermocouple/pilot flame quality.</li>
<li><strong>Runs but weak heat.</strong> Capacity family: under-firing (clock it), a dead element bank (clamp it), staging never escalating (W2), airflow both too-low and too-high variants, hydronic flow problems (air, circulator, ΔT arithmetic), steam distribution (vents/traps).</li>
<li><strong>Cycles (short or limit-cycling).</strong> Airflow restriction (limit trips), oversized equipment or thermostat placement/anticipation, staging faults, hydronic short-cycling from tiny ΔT, steam pressuretrol/venting misbehavior.</li>
<li><strong>Noisy.</strong> Family reunion: water hammer (steam), air gurgle (hydronic), delayed ignition boom (any fuel — investigate immediately), blower/bearing/motor sounds (mechanical), flame roar/lift (combustion mixture).</li>
</ul>
<p>The discipline is to name the family <em>out loud</em> (or on the ticket) before testing: it keeps you working a differential list instead of wandering a parts catalog, and it makes your measurements purposeful — every test should be chosen because it discriminates between two named suspects.</p>
<div class="callout"><strong>Key idea:</strong> A test that can't change your mind between two suspects is entertainment. Family first, suspects ranked, tests chosen to split the list.</div>`
    },
    {
      heading: "Intermittent Faults: The Honest Hard Ones",
      html: `
<p>Intermittents — 'it fails at 3 a.m., works when you watch' — separate professionals from parts-swappers. Method:</p>
<ol>
<li><strong>Harvest history.</strong> Board fault-code memory (read before cycling!), customer log (times, weather, patterns), your own notes from previous visits. A fault that follows cold snaps points at condensate freezing, propane regulator issues, or marginal flame signal; one that follows wind points at venting.</li>
<li><strong>Reproduce by provocation.</strong> Run the appliance long — most 'intermittent' faults are just slow: limit trips after 40 minutes, condensate traps misbehaving after a humid night, flame signal sagging as the sensor heats. Wiggle-test connections and harnesses during operation; thermal expansion opens marginal connections on a schedule you can exploit by <em>waiting</em>.</li>
<li><strong>Instrument the wait.</strong> Record µA at ignition and after 15 minutes; log draft as the vent warms; watch a full steam/hydronic cycle. Trends reveal what snapshots hide (Module 6's climbing-CO story is the canonical example).</li>
<li><strong>Change one thing, prove the change.</strong> Every substitution without observation teaches nothing. If you must pre-emptively replace a cheap, high-probability part (a flame sensor with a marginal µA trend), document the measurement that indicted it.</li>
</ol>
<p>And the ethics of intermittents: tell the customer the truth — 'it's working now; here's the evidence I gathered, here's the pattern I suspect, here's the plan and what it costs if we monitor versus replace the suspect now.' Customers accept uncertainty remarkably well when it's presented with data and a plan; what they don't forgive is three confident, expensive guesses.</p>
<div class="callout"><strong>Key idea:</strong> Intermittents yield to logs, long runs, provocation, and trended measurements — never to roulette. Document the indictment before you replace the suspect.</div>`
    },
    {
      heading: "Repair Decisions and Talking to Customers",
      html: `
<p>Diagnosis ends in a decision the customer must understand enough to own. Professional framing:</p>
<ul>
<li><strong>Safety findings first, plainly.</strong> 'I found carbon monoxide entering the air stream / a cracked heat exchanger / a defeated safety. The furnace stays off until this is replaced.' No hedging, no burying it under options. If they protest, the ticket documents your shutdown recommendation and their response — and in many jurisdictions and company policies, a confirmed CO hazard obligates utility notification; know yours.</li>
<li><strong>Repair vs. replace economics.</strong> Present the honest variables: repair cost vs. equipment age and remaining expected life, efficiency differences (the Module 4 arithmetic: what an 80% to 96% change does to input for the same output), repeat-failure history, and parts availability. Your job is the math and the trade-offs; the choice is the customer's money, so the choice is the customer's.</li>
<li><strong>No-pressure accuracy.</strong> Never sell a part the measurements didn't indict; never call a safety device 'just a sensor thing.' The trade's reputation is built or burned one kitchen-table conversation at a time.</li>
</ul>
<p>Documentation closes the loop: complaint, findings with <em>measurements</em> (pressures, µA, analyzer values, temperatures), parts replaced with model/spec data, verification results, and safety statements signed into the record. Good tickets protect customers (continuity next visit), companies (warranty and liability), and technicians (your work, provable).</p>
<div class="callout"><strong>Key idea:</strong> Be the translator between the machine and its owner: numbers into sentences, options into trade-offs, safety into plain non-negotiable language — then write it all down.</div>`
    },
    {
      heading: "Verification: The Call Isn't Over When the Heat Starts",
      html: `
<p>A furnace that lights is not a finished call. The professional close-out:</p>
<ol>
<li><strong>Full sequence run</strong> — call to satisfied shutdown, including post-purge and blower off-delay (Module 5). Watch it end as well as begin.</li>
<li><strong>Combustion verification</strong> — analyzer test at steady state (Module 6) on any fuel-burning repair that touched burners, fuel, venting, or exchanger; temperature-rise check (Module 8) on electric. Numbers on the ticket.</li>
<li><strong>Safety spine, again</strong> — ambient CO in the space and at registers; safety chain intact — every jumper you used is in your pocket, every safety you disturbed is wired and, where testable, tested.</li>
<li><strong>System courtesies that prevent callbacks</strong> — filter condition noted/replaced, thermostat restored to the customer's program (take your test setpoint off!), condensate drains confirmed flowing, panels and doors fully fastened (a loose blower door is a safety switch waiting to end your weekend), work area clean.</li>
<li><strong>Customer handoff</strong> — what was wrong, what you did, what you measured, what to watch for, and when to call. Two minutes of this is worth more than the repair for your reputation.</li>
</ol>
<p>The through-line of this entire course sits in that fifth step: you are not selling heat; you are selling <em>verified safety and comfort</em>, and verification is the product's proof. Modules 1–12 built one machine in your head: fuel in, fire guarded, heat moved, products vented, safeties watching, numbers recorded. Run that machine on every call and the no-heat calls get shorter, your diagnoses get quieter, and your customers get — and stay — warm.</p>
<div class="callout"><strong>Key idea:</strong> Verify like you'll have to defend it — because the ticket is the defense. Sequence, combustion, CO, housekeeping, handoff: five minutes that turn a repair into a professional service.</div>`
    }
  ],
  keyTerms: [
    { term: "Differential diagnosis", def: "Ranking suspect causes for a symptom family and choosing tests that discriminate between them." },
    { term: "Pattern family", def: "A symptom category (dead, no-ignition, won't-stay-lit, weak, cycling, noisy) with its own ranked suspect list." },
    { term: "Global checks", def: "The whole-system basics verified first: thermostat call, power, fuel supply, filter." },
    { term: "Intermittent fault", def: "A failure that occurs under conditions not always present; diagnosed by logs, provocation, and trended measurement." },
    { term: "Wiggle test", def: "Gently disturbing wiring/connections during operation to expose marginal contacts." },
    { term: "Fault-code history", def: "Stored control-board codes — read before cycling power, which may erase them." },
    { term: "Short cycling", def: "Abnormally frequent burner starts/stops, from limit trips, oversizing, control faults, or distribution problems." },
    { term: "Delayed ignition", def: "Fuel accumulating before ignition, then lighting with a boom or rollout; an investigate-immediately fault." },
    { term: "Verification run", def: "The post-repair full sequence and measurement pass proving the repair and the safety chain." },
    { term: "Callback", def: "A return visit for the same unresolved problem; the metric that disciplined method most reduces." },
    { term: "Red tag", def: "The practice/process of formally taking an unsafe appliance out of service and documenting it." },
    { term: "Repair vs. replace", def: "The customer decision weighing repair cost, age, efficiency, and failure history; the technician's job is honest numbers." },
    { term: "Temperature rise check", def: "Supply-minus-return temperature compared to the nameplate range — a delivered-heat verification." },
    { term: "Housekeeping close-out", def: "Restoring thermostats/panels/filters/drains and cleanliness so the repair leaves no new problems behind." },
    { term: "Ticket documentation", def: "The written record: complaint, measured findings, parts, verification values, and safety statements." },
    { term: "Provocation test", def: "Deliberately reproducing failure conditions (long run, thermal soak, load) to catch an intermittent in the act." },
    { term: "Safety spine", def: "The every-call routine: ambient CO, vent/exchanger visual, combustion test, CO-alarm awareness." },
    { term: "Staging verification", def: "Confirming multi-stage equipment actually escalates (W2/timer, pressures per stage) during a long call." }
  ],
  video: {
    title: "Furnace Part 2 - HVAC Training",
    embedUrl: "https://www.youtube.com/embed/Smiwc9Ni0uM",
    note: "Revisit this training walkthrough as a troubleshooting demonstration: the instructor's ordered checks (thermostat → inducer → pressure switch → board → igniter → gas valve → flame rectification → blower) are the sequence-as-map method of this module. Compare his order with the diagnostic order in Section 1.",
    more: [
      { title: "Gas Furnace Class w/ Bert", url: "https://www.youtube.com/watch?v=lvZ5iN1xh7Q" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Full-call simulation: 'No heat, house 58°F.' You find: thermostat calling correctly with 24 V on W at the board; inducer starts; igniter glows; valve clicks; burners light strongly; blower starts; about four minutes later the burner stops while the blower continues, then the burner relights after a pause — repeating. Name the family, the two lead suspects, and the two measurements that separate them.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Family — <em>cycling</em>, specifically limit-cycling: ignition, flame proving, and blower all work; the burner is being stopped mid-call by a guardian and restarted after cool-down. Step 2: Lead suspects: (A) restricted airflow (filter, blower wheel/motor, closed registers, crushed duct) overheating the exchanger; (B) over-firing (manifold pressure high or wrong orifices) producing heat faster than even healthy airflow can remove. Step 3: Measurement 1 — temperature rise (supply − return) vs the nameplate range: rise far above range confirms heat/air imbalance. Step 4: Measurement 2 — manifold pressure + meter clocking: pressure/clocking at rating points the finger at airflow alone; both high convicts over-firing too. Step 5: Inspection pairs with numbers: filter and blower wheel condition are the eyeball partners of Measurement 1. Repair the cause, then run 20+ minutes trip-free as verification.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A furnace was 'repaired' yesterday by another company (invoice: 'replaced igniter'). Today: no heat again, same symptom — igniter glows, no light. Write your approach, including what you say to the customer about the previous repair.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Approach — treat it as a fresh call with a hint: the previous diagnosis may have been wrong or incomplete. Observe the sequence: igniter glows (so power, board output, and the igniter itself are exonerated — new part glowing proves the chain that far). Step 2: At the valve's click, test for gas: 24 V at the valve during the trial (present?), then inlet pressure, then manifold pressure during the trial. Likely truths: valve coil open despite the click heard (test the coil), zero inlet pressure (closed valve at the meter, utility interruption, empty propane tank), or a plugged manifold/orifice path. Step 3: With the customer: no disparagement — 'the igniter may indeed have been weak; what I can prove today is that ignition energy is present and fuel isn't arriving — here's the measurement.' Show the pressure readings. Professional courtesy plus hard data rebuilds trust without a feud, and if the igniter truly was fine, your data speaks for itself.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Intermittent case file: a condensing furnace locks out roughly twice a week, always on the coldest nights, code: pressure-switch fault. It always restarts fine when the homeowner cycles power in the morning. Build the differential and your evidence plan.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Pattern decoding: coldest nights = longest, steadiest firing = maximum condensate production; morning restart success = the fault clears with rest (things drain or dry). Prime suspect family: condensate management — a trap or drain that keeps up for hours but loses the race overnight, or a vent run where condensate accumulates/freeze-restricts at low outdoor temperatures; second family: vent termination icing in extreme cold. Step 2: Differential also includes a marginal pressure switch (drift near setpoint) and a sensing-tube water slug (Module 11). Step 3: Evidence plan: inspect the trap, drain slope, and vent slope/support on arrival (before touching the reset); check for a sag holding water (Module 4); manometer-tee the switch during a long provoked run and watch draft trend as condensate builds; examine termination for ice history (staining pattern, location vs. exhaust moisture). Step 4: Fix the found mechanism — re-pitch, insulate/relocate per manufacturer guidance, clear the drain path — then verify with the longest practical run. Step 5: Document the pattern logic on the ticket; if the fault can't be provoked today, say so and set the monitoring plan instead of replacing the switch on spec.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Weak-heat call on a hydronic system: boiler fires normally and cycles on its aquastat; one of three zones is lukewarm. Baseboard in that zone: supply end warm, far end cool, faint gurgling. Use Module 9's arithmetic thinking: name the fault family, the first two checks, and the closing verification.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Family — distribution/flow, zone-local (the other zones prove the boiler and main flow healthy). Supply-end warm + far-end cool + gurgle = flow through the zone is a trickle with air in it: the water that does circulate gives up all its heat early (enormous effective ΔT across the element) and never carries heat to the far end. Step 2: Check 1 — bleed the zone's elements: if air pours out, you've found it; then ask why (recent service? low fill pressure letting the top zone breathe?). Verify fill pressure against the height math (0.433 psi/ft + margin). Step 3: Check 2 — if bleeding yields little air and flow stays weak: the zone's valve/circulator path — valve actually opening (Module 9's cold-pipe logic), circulator running (amp draw), check valve stuck. Step 4: Closing verification: even temperature along the element through a full call, gurgling gone, and a sane zone ΔT — measured supply vs return in family with the healthy zones.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Draft the kitchen-table explanation for this finding: 'Your 22-year-old furnace needs a heat exchanger that costs 70% of a new furnace. The new furnace would use about 17% less gas for the same heat.' Use numbers from this course (80% vs 96% AFUE, output held constant) and structure the options fairly.</p>",
      solution: "<p><strong>Answer:</strong> Model explanation: Step 1 — safety clarity first: 'The exchanger is cracked, which can let exhaust gases into your air. The furnace stays off until it's replaced or the furnace is — that's not a sales line, it's the safety rule.' Step 2 — the math in plain words: 'Your house needs the same heat either way. At 80% efficiency, for every 100 units of gas heat, 80 warm the house. At 96%, 96 do. So the new furnace burns roughly 80/96 — about 17% less gas — for identical comfort, every hour it runs.' Step 3 — honest options: Option A, exchanger replacement: lower bill today, keeps a 22-year-old platform (blower, controls, and cabinet age with it; warranty on one part). Option B, replacement: higher bill today; new warranty, lower gas use, modern safeties and staging comfort. Step 4 — neutral close: 'Either is defensible; here's both quotes in writing. What I can't offer is running this furnace as-is.' Step 5 — document their choice. Fair structure = facts, then options, then a clear safety boundary, then space to decide.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Your verification run after replacing a gas valve: everything sequences perfectly, but your steady-state analyzer shows CO air-free of 210 ppm with O<sub>2</sub> in band. The customer is delighted ('heat's back!'). Explain why you are not done, your next steps, and what the customer hears from you.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Why not done: the repair restored operation, but 210 ppm CO air-free (with O<sub>2</sub> in band, so not a dilution artifact) says the burner is producing dangerous CO — the appliance is running and poisoning at once. Operation ≠ safety; verification just caught the difference. Step 2: Next steps: verify the new valve's manifold pressure (a replacement valve ships at a default setting — Module 2's lesson; mis-set pressure is suspect #1 after valve work); clock the meter; inspect burner condition and alignment disturbed during the repair; check for impingement/quenching and exchanger/vent contributors per Modules 4 and 6. Step 3: Do not leave the appliance in service producing that CO 'until parts' — if the cause can't be corrected on the spot, it stays down (Module 11's rule). Step 4: The customer hears: 'The heat is back, but my combustion test shows the burner making too much carbon monoxide — that's exactly what this test exists to catch. I'm going to find and fix the cause now; if I can't, the furnace stays off tonight and here's our plan.' Annoyance today; trust for a decade.</p>"
    }
  ],
  quiz: [
    {
      q: "The correct order at the start of a no-heat call is:",
      choices: ["Replace the igniter, then check the thermostat", "Interview and safety check, then global checks (call, power, fuel, filter), then observe the sequence", "Combustion analysis first, questions later", "Cycle power repeatedly until a code appears"],
      answer: 1,
      explanation: "Correct: (b) Information and globals first — they are the most common causes and the cheapest checks; the sequence then tells you which components are eligible suspects. (a) Parts before evidence is the anti-method this module exists to retire. (c) Analysis matters at verification (and on running equipment) — a dead furnace gives no flue gas to analyze. (d) Cycling power erases stored codes and, on oil equipment, can load the chamber (Module 7); observe first."
    },
    {
      q: "'Ignites strongly, runs a few minutes, burner stops, restarts after a pause, repeats' is which family, with which lead suspect?",
      choices: ["Dead — power path", "Cycling on the limit — airflow restriction or over-firing", "No-ignition — pressure switch", "Weak heat — staging"],
      answer: 1,
      explanation: "Correct: (b) Everything in ignition and proving works; a guardian is interrupting mid-run and auto-resetting — textbook limit cycling, with airflow and firing rate as the twin suspects separable by temperature rise and clocking. (a) The unit demonstrably has power and runs. (c) Ignition succeeds repeatedly — the pressure-switch gate was passed. (d) The complaint isn't capacity; the unit stops entirely rather than running weakly."
    },
    {
      q: "On an intermittent fault, the highest-value first action is:",
      choices: ["Replace the control board pre-emptively", "Read the board's fault-code history and the customer's pattern log before cycling anything", "Promise a same-day cure", "Replace every sensor in the chain"],
      answer: 1,
      explanation: "Correct: (b) Stored codes plus pattern history (time, weather, rhythm) are free forensic evidence; cycling power and shotgunning parts destroy exactly that evidence. (a) and (d) are parts roulette — occasionally lucky, never method. (c) Promising a cure for an unobserved fault trades today's comfort for next week's callback and distrust."
    },
    {
      q: "During verification after a repair, CO air-free reads far above the healthy range with O2 in band. The correct action is:",
      choices: ["Finish up — heat is heat", "Keep diagnosing (pressures, clocking, burners, exchanger) and do not leave the appliance in service if the cause isn't corrected", "Add excess air until the raw CO looks low", "Note it for next year's visit"],
      answer: 1,
      explanation: "Correct: (b) Verification just did its job: operation restored but combustion dangerous. The unit is not returned to service producing high CO air-free. (a) confuses motion with completion. (c) is the dilution trick Module 6 dismantled — air-free exists to defeat it. (d) schedules a hazard for a season of operation; CO doesn't keep appointments."
    },
    {
      q: "A customer demands a bypassed safety 'just for tonight.' Your documentation should record:",
      choices: ["Only the final repair", "The request, your refusal and explanation, the appliance's left-safe status, and the plan — plus measured findings", "Nothing — verbal is fine", "The customer's signature absolving you, then the bypass"],
      answer: 1,
      explanation: "Correct: (b) The ticket is the professional record: what was found (with numbers), what was asked, what you refused and why, and the safe state you left. (a) omits the safety-critical facts of the visit. (c) leaves your most consequential conversation unprovable. (d) no signature makes a defeated safety acceptable — the refusal itself is the required act."
    },
    {
      q: "Weak heat with one of three electric banks drawing 0 A on command splits into which test chain?",
      choices: ["Thermostat → transformer → gas valve", "Sequencer contact closure → fusible link continuity → element continuity (stop at the first open link)", "Pressure switch → inducer → vent", "Cad cell → electrodes → nozzle"],
      answer: 1,
      explanation: "Correct: (b) Module 8's chain: command reaches the stage (contact), protection (link), then the element itself — measured in order, stopping at the first open. (a) mixes a gas chain into an electric fault (and the other banks already prove thermostat/transformer health). (c) is a gas-furnace draft chain — there is no inducer here. (d) is the oil-burner chain — wrong fuel entirely."
    },
    {
      q: "The likeliest reason a furnace 'fails only at 3 a.m.' yet tests perfectly at noon is:",
      choices: ["Furnaces dislike darkness", "A condition-dependent fault: condensate behavior on long night runs, cold-snap marginal signals, wind-driven venting — reproduction needs provocation and time, not luck", "The customer is imagining it", "The board needs a firmware update"],
      answer: 1,
      explanation: "Correct: (b) Night changes the physics: longest firing (condensate), lowest temperatures (marginal µA, freezing drains), different winds (draft). Provoke those conditions and log the trends. (a) is a joke answer — but note it contains the trap of dismissing pattern data. (c) Intermittent complaints are usually faithful reports of condition-dependent faults. (d) Domestic furnace boards aren't field-updated as a troubleshooting step; it's a guess wearing a lab coat."
    },
    {
      q: "Which closing action prevents the most callbacks?",
      choices: ["Leaving the thermostat at your test setpoint", "A complete verification close-out: full sequence, combustion/rise numbers, safety chain intact, thermostat restored, customer handoff", "Skipping the analyzer to save time", "Leaving the blower door off for 'the next tech'"],
      answer: 1,
      explanation: "Correct: (b) Most callbacks are unfinished calls: untested shutdowns, untested combustion, test setpoints left behind, panels ajar. The close-out is where they die. (a) creates the 'house is 85°/won't heat past 60' callback by itself. (c) saves ten minutes and can cost a season — or worse (see Problem 6). (d) a missing door is a tripped door switch and an unfiltered cabinet — sabotage as a favor."
    }
  ],
  studyGuide: `
<h3>Module 12 — Heating Troubleshooting & No-Heat Calls: Quick Reference</h3>
<p><strong>Call order:</strong> interview → safety spine (ambient CO) → globals (W signal, power, fuel, filter) → observe ONE full sequence → locate the halt → measure the step's proof → fix the cause → verify everything.</p>
<p><strong>Families:</strong> Dead = power/call path. Halts at inducer = pressure switch/draft. Lights-dies = flame proving (µA/cad cell/thermocouple). Weak = capacity (clock it, clamp it, staging, flow ΔT). Cycling = limit/airflow or firing rate. Noisy = water/air/flame mechanics.</p>
<p><strong>Intermittents:</strong> codes + customer log BEFORE cycling → provoke (long runs, cold conditions) → trend the measurement → change one thing with documented indictment.</p>
<p><strong>Customers:</strong> safety in plain language, first; options with honest math; never sell an unindicted part; document requests, refusals, measurements, and the state you left.</p>
<p><strong>Close-out:</strong> full sequence to shutdown • combustion or rise numbers on the ticket • jumpers in your pocket, safeties wired • thermostat restored • drains flowing • doors on • two-minute handoff.</p>
<p><strong>The course in one line:</strong> fuel in, fire guarded, heat moved, products vented, safeties watching, numbers recorded — on every call.</p>
`
};
