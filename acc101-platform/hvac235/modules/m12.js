// HVAC 235 - Module 12: Advanced No-Heat Case Studies
module.exports = {
  number: 12,
  slug: "advanced-no-heat-case-studies",
  title: "Advanced No-Heat Case Studies",
  estTime: "3–4 hours",
  objectives: [
    "Work multi-fault no-heat calls in which two defects interact to produce one misleading symptom set.",
    "Recognize intermittent-fault patterns and design tests that catch the fault in the act instead of waiting for it.",
    "Separate the customer's narrative ('it only fails at night') into testable physical hypotheses.",
    "Apply the course's measurement disciplines — manometer vs. rating, rise vs. plate, COP/balance math, ambient CO survey — in combination.",
    "Write documentation that makes a complex call reproducible by the next technician."
  ],
  sections: [
    {
      heading: "Case 1: The Furnace That Failed Only on the Coldest Nights",
      html: `
<p><strong>The ticket:</strong> 96% two-pipe furnace, three winters old. Complaint: "loses heat on the coldest nights, fine the rest of the time; resetting power fixes it till the next cold snap." Two previous visits replaced the pressure switch and the igniter. <strong>Your arrival (a mild afternoon):</strong> furnace runs perfectly through three full cycles.</p>
<p><strong>Work the pattern before the parts.</strong> Cold-night-only failure + power-reset cure = a lockout that accumulates under maximum demand. On the coldest nights the furnace runs its longest cycles — and a condensing furnace's longest cycles produce the most condensate. Hypothesis list, in course order: (1) condensate management marginal — a drain or trap that keeps up on short cycles but falls behind on long ones, backing water into the collector until draft proving fails (Module 1); (2) vent termination frosting progressively during long runs (Module 3); (3) low-fire/high-fire draft marginality (Modules 2, 4).</p>
<p><strong>The test that convicts:</strong> don't wait for weather — manufacture it. Run the furnace continuously while observing the trap and drain: on this call, the drain line — a long, nearly flat run through a cold crawlspace — drained slower and slower until water stood in the trap, the collector gurgled, the manometer sagged from 0.95 to below the 0.60 in. w.c. rating over twenty minutes, and the board locked out on cue. <strong>Root cause:</strong> insufficient slope in the cold-space run plus an uninsulated trap — condensate production outran drainage only under sustained load, i.e., on the coldest nights.</p>
<div class="callout"><strong>Key idea:</strong> Intermittent faults are usually <em>conditional</em> faults: they need their condition (run length, temperature, wind, occupancy) present to exist. The diagnostic skill is reproducing the condition on demand — long cycle, worst-case depressurization, cold-soaked start — instead of pronouncing a running system healthy.</div>
<p><strong>Fix and verify:</strong> re-pitch the drain run with continuous fall, insulate the trap and cold-section, prime the trap, then a forced 45-minute continuous run with the manometer logged: draft stable at 0.95 in. w.c., drain flowing freely, no lockout. The two previously replaced parts were innocent — the switch had been reporting this fault faithfully for three winters.</p>`
    },
    {
      heading: "Case 2: Two Faults Wearing One Symptom",
      html: `
<p><strong>The ticket:</strong> two-stage 92% furnace. Complaint: "house never quite gets warm on cold days; furnace runs constantly; one bedroom is an icebox." Gas bills up sharply year over year.</p>
<p><strong>Divide the complaint.</strong> It contains two separate accusations: (a) the furnace under-delivers system-wide on cold days, and (b) one room is disproportionately cold. A single fault rarely explains both well; resist the one-cause story. <strong>Measurements first:</strong> stage observation shows the furnace never leaves low fire — even on a 3°F morning with the thermostat 4° below setpoint. Configuration check: thermostat is a two-stage model but was never configured for two-stage operation after a replacement last spring, and W2 was never landed. Fault one found: <em>the furnace has been a 64,000 Btu/h appliance (low fire) in a house whose design load is 88,000</em> — it runs constantly because it mathematically cannot catch up (Modules 2 and 11 arithmetic).</p>
<p><strong>The bedroom is its own case:</strong> with staging restored, the system holds temperature — but the bedroom still lags 6°F behind. Airflow checks find its supply run crushed where it passes a storage platform, the damage hidden above a finished ceiling. Fault two: a distribution defect no furnace setting can cure.</p>
<div class="callout"><strong>Key idea:</strong> Multi-fault calls punish sequential thinking that stops at the first find. Rule: after any repair on a complaint with multiple symptoms, re-interrogate every original symptom against the fix. The staging fault explained the house; it never explained <em>that bedroom's share</em> of the misery.</div>
<p><strong>Resolution:</strong> land W2, configure the thermostat for two-stage control, verify stage shift on a long call and manifold behavior per stage; repair the crushed run (access from the closet ceiling, documented with photos). Final verification: design-morning hold at setpoint on high fire with normal cycling, bedroom within 2°F of the hall. Bills normalize the following season — the outcome the configuration error had been taxing for a year.</p>`
    },
    {
      heading: "Case 3: The Heat Pump That Was Blamed for the Furnace's Secret",
      html: `
<p><strong>The ticket:</strong> dual-fuel system, two seasons old. Complaint: "electric bills doubled this winter and the heat pump is always running." The customer's conclusion: the heat pump is defective. The changeover setting reads 35°F; outdoor sensor verifies accurate.</p>
<p><strong>Follow Module 8's checklist — then keep going.</strong> Changeover ownership: the dual-fuel thermostat owns it; setting sane; sensor true. Fault history: clean. Run test on a 30°F day: the control calls for the furnace (below changeover) — the furnace runs 4 minutes, shuts off, the house cools, and within minutes the heat pump is carrying on alone below changeover (the control's fallback after repeated furnace failures), running endlessly at poor COP. The electric bill is real — but the defendant is wrong.</p>
<p><strong>The furnace's secret:</strong> sequence observation: inducer → proving → ignition → flame for ~4 minutes → shutdown, repeat after a delay. Textbook limit-trip cadence (Module 4). Temperature rise: 85°F against a 70°F plate maximum. Airflow = output ÷ (1.08 × ΔT): at 76,000 Btu/h delivered, 76,000 ÷ (1.08 × 85) ≈ 828 CFM against a required minimum of 76,000 ÷ (1.08 × 70) ≈ 1,005 CFM. The cause: the return duct, reworked during a basement finish, necks down through a framed chase — a restriction nobody measured because "the furnace was new-ish and the heat pump got the complaint."</p>
<div class="callout"><strong>Key idea:</strong> In integrated systems, the symptom reports at the component that's <em>compensating</em>, not the one that's <em>broken</em>. The heat pump's endless running was the control's rational response to a furnace that kept tripping its limit. Complaints name the visible machine; diagnosis must audit the partnership.</div>
<p><strong>Resolution:</strong> correct the return restriction (added a second return path per the duct's static budget), re-measure: rise 58°F, furnace completes full cycles, control returns to normal changeover behavior, heat pump rests below 35°F. Documentation included the before/after rise and static readings — the numbers that prove the partnership healed.</p>`
    },
    {
      heading: "Case 4: The Headache House (A Safety Case)",
      html: `
<p><strong>The ticket:</strong> annual maintenance, 12-year-old 80% furnace + natural-draft water heater in a small sealed mechanical room. Customer mentions, almost as small talk: "weird — the whole family had the flu twice this month, and the dog's been lethargic."</p>
<p><strong>The course converges here.</strong> Flu-like clustering + a combustion mechanical room = Module 10's pattern, and the visit changes category before a wrench turns: personal CO monitor on (it reads a low but present level at the mechanical room door), ambient survey first. With the furnace and water heater firing, ambient CO in the room climbs; the water heater shows spillage at its draft hood. Worst-case test — dryer and range hood running, interior doors set as on a winter evening — spillage worsens measurably. Root cause chain: the small mechanical room lacks adequate combustion air, competing exhausts depressurize it further, and the water heater backdrafts; the furnace's own flue marginality adds its share when both fire.</p>
<div class="callout"><strong>Key idea:</strong> This call's first deliverable is not a repair — it is Module 10's protocol judgment: measured hazard, occupants informed in plain language, the water heater red-tagged out of service pending correction, notifications per local code, and the correction itself scoped as venting/combustion-air work (with sealed-combustion replacement presented per Module 11) — all documented with readings and times.</div>
<p><strong>Sequels that matter:</strong> CO alarms verified on every level and outside the sleeping area (one existed, expired — replaced and dated); the family advised on medical evaluation ("possible CO exposure" stated plainly); a follow-up ambient survey after corrections, under the same worst-case conditions, reading clean. The lethargic dog recovered — the sentence of this case that everyone remembers, and the reason the "small talk" at the door of a maintenance visit is a diagnostic instrument.</p>`
    },
    {
      heading: "Documentation: The Deliverable That Outlives the Call",
      html: `
<p>Every case above ended with the same act: writing it down so the <em>next</em> technician inherits evidence instead of folklore. The standard this course sets for advanced calls:</p>
<ul>
<li><strong>Conditions:</strong> outdoor temperature, weather, house state (which exhausts ran, doors, thermostat settings) — the variables that made the fault appear.</li>
<li><strong>Measured values with their benchmarks:</strong> draft 0.95 in. w.c. vs. switch rating 0.60; rise 85°F vs. plate max 70°F; COP/balance figures vs. the table. A number without its benchmark is trivia.</li>
<li><strong>The test that convicted:</strong> named plainly ('continuous-run condensate test', 'worst-case depressurization spillage test') so it can be repeated to verify or to re-diagnose.</li>
<li><strong>Before/after pairs</strong> for every repair, and configuration changes recorded verbatim (staging settings, changeover value, curve endpoints) — configuration is invisible to the next tech unless you write it.</li>
<li><strong>Safety paper trail</strong> where relevant: red-tag details, notifications, customer communications, alarm dates — Module 10's legal memory.</li>
<li><strong>Customer narrative vs. finding,</strong> both recorded: "reported night-only failures; found drain capacity marginal under sustained run" teaches the file's reader how symptoms translate.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> In advanced service, the ticket is a technical instrument: how a one-visit insight becomes a permanent asset, how a red tag survives scrutiny, and how a fault's second winter differs from its first. These cases were all solvable on visit one — by a tech whose predecessor wrote nothing. Be the predecessor you wish you'd had.</div>
<p><strong>Course close.</strong> You now hold the full advanced-heating arc: the condensing platform and its water, staged fire and smart air, the vent as a designed system, combustion measured rather than guessed, water as a heat courier, floors and driveways as emitters, the heat pump's two lines and the control that arbitrates two fuels, the air the customer breathes, the poison that gives no warning, the economics of replacement, and the discipline of combining it all under real-call conditions. The lab and final exam now ask you to prove it the way the field does: one decision at a time, with numbers.</p>`
    }
  ],
  keyTerms: [
    { term: "Conditional fault", def: "A defect that manifests only under specific conditions (run length, temperature, wind, occupancy pattern); diagnosed by reproducing the condition deliberately." },
    { term: "Symptom decomposition", def: "Splitting a compound complaint into separately testable accusations, each matched to its own fault hunt, instead of forcing one cause to explain everything." },
    { term: "Compensating component", def: "The healthy part of an integrated system whose abnormal behavior is a rational response to another part's failure — the machine the complaint names, wrongly." },
    { term: "Continuous-run test", def: "Forcing sustained operation to reproduce faults tied to run length (condensate accumulation, heat-soak draft sag, limit cycling) that short test cycles never reveal." },
    { term: "Benchmark pairing", def: "Recording every measurement beside the value it is judged against (rating, plate range, table figure) so the record proves the conclusion by itself." },
    { term: "Configuration record", def: "The written capture of invisible settings changed or found — staging mode, changeover value, reset curve endpoints — without which the next tech starts blind." },
    { term: "Worst-case reproduction", def: "Recreating the most adverse legitimate operating condition (maximum depressurization, design cold, maximum condensate production) as a diagnostic test state." },
    { term: "Fault history (control)", def: "The control board's stored record of lockouts and their codes; on integrated systems, the audit trail that reveals silent fallbacks and vetoes." },
    { term: "Limit-trip cadence", def: "The repeating run-minutes-then-stop rhythm of a furnace cycling on its high limit — a timing signature readable before any instrument is attached." },
    { term: "Intermittent fault", def: "A fault appearing and vanishing with conditions; the professional response is condition reproduction and logging, not parts replacement during a healthy interval." },
    { term: "Before/after pair", def: "The same measurement taken immediately before and after a repair under like conditions — the minimum proof a diagnosis was right." },
    { term: "Safety paper trail", def: "The documented record of hazards found and actions taken: readings, tags, notifications, and customer acknowledgment, retained with the service file." },
    { term: "Customer narrative", def: "The complaint in the customer's words and timeline; preserved in the record because its pattern details (when, weather, who noticed) are diagnostic evidence." },
    { term: "Design-morning verification", def: "Confirming a repair under conditions at or near design load — the only verification that speaks to the original cold-weather complaint." },
    { term: "Stage observation", def: "Watching and timing which firing stage(s) a staged system actually uses during a call, compared against what configuration says it should use." },
    { term: "Ticket (service record)", def: "The complete written account of a call — conditions, measurements, tests, repairs, settings, and communications — treated as a technical deliverable in its own right." }
  ],
  video: {
    title: "HVAC Tech Gas Valve Replacement on Lennox Furnace - How to use Sequence of Operations to Troubleshoot",
    embedUrl: "https://www.youtube.com/embed/8Qm1K9EgQTk",
    note: "A real no-heat call worked through the operating sequence — the tech tests stage by stage instead of guessing at parts, and the sequence itself identifies the failed component. It is this module's method on camera: watch where the sequence stops, and notice how each test rules a whole family of parts in or out.",
    more: [
      { title: "How to Identify and Wire a Heat Only Unit - Gas Furnace", url: "https://www.youtube.com/watch?v=Fx6O_rUrByk" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1 (Case 1 extension).</strong> In Case 1, the manometer sagged from 0.95 in. w.c. to below the 0.60 rating over twenty minutes. A junior tech proposes: 'Install a switch rated 0.40 so it stops tripping.' Dismantle this proposal completely.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The switch's rating is not an inconvenience to edit — it is the manufacturer's calibrated proof that draft is adequate for safe venting of <em>this</em> appliance. A lower-rated switch would 'prove' draft at flows the vent design deems insufficient. Step 2: The measurement told the truth: draft genuinely decayed as condensate backed up; the fault is drainage capacity, and the switch reported it correctly — the third innocent switch in this furnace's story would have been installed by this proposal. Step 3: Ratings are model-specific listed values; substituting a different rating defeats a safety control (Module 10's corollary) and exposes the tech and company when — not if — the marginal venting produces a CO event on a colder night. Step 4: The repair remains what it was: restore drainage so true draft holds at 0.95 through the longest cycle.</p>"
    },
    {
      prompt: "<p><strong>Problem 2 (Case 2 extension).</strong> The Case 2 house has a design load of 88,000 Btu/h. The furnace is a 100,000 Btu/h input, 96% unit whose low fire is two-thirds of input. (a) Show arithmetically that the furnace stuck on low fire could never satisfy the house at design conditions. (b) Explain what its runtime pattern would look like near design temperature.</p>",
      solution: "<p><strong>Solution:</strong> (a) Low-fire input = 100,000 × 2/3 ≈ 66,700 Btu/h; delivered = 66,700 × 0.96 ≈ <strong>64,000 Btu/h</strong> — against an 88,000 Btu/h design load, a 24,000 Btu/h structural deficit. No runtime, however long, closes a capacity gap: the house loses ground whenever outdoor temperature is at design. (b) Near design weather the furnace runs <em>continuously</em> (100% duty cycle) while indoor temperature settles below setpoint at whatever point 64,000 Btu/h balances the actual loss — roughly where load = 64,000, i.e., a milder effective temperature than outdoors. The customer's words for this arithmetic were 'runs constantly and never gets warm' — the complaint was the calculation, narrated.</p>"
    },
    {
      prompt: "<p><strong>Problem 3 (Case 3 extension).</strong> Recompute Case 3's airflow finding, then state the minimum supply-side change in CFM terms, and explain why adding a second return path addressed it while 'turning up the blower speed' alone might not have.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Actual CFM = 76,000 ÷ (1.08 × 85) = 76,000 ÷ 91.8 ≈ <strong>828 CFM</strong>. Minimum CFM for the plate-maximum 70°F rise = 76,000 ÷ (1.08 × 70) ≈ <strong>1,005 CFM</strong>. Deficit ≈ <strong>177 CFM</strong>. Step 2: A blower speed increase attacks the symptom against the same restriction: total external static climbs with the square-ish behavior of duct friction, the motor works harder and louder, may hit its limit (Module 2's ECM compensation ceiling), and the necked return stays necked. Step 3: Enlarging the return path lowers the restriction itself — the blower delivers the needed CFM at sane static and watts, and the fix survives future filter loading. Step 4: Verify with the pair: rise re-measured at 58°F (CFM now ≈ 76,000 ÷ (1.08 × 58) ≈ 1,213 — comfortably in range) and static recorded.</p>"
    },
    {
      prompt: "<p><strong>Problem 4 (Case 4 extension).</strong> Write the documentation block for Case 4's ticket: conditions, measurements-with-benchmarks, actions, and communications — as it should appear in the file.</p>",
      solution: "<p><strong>Answer (model ticket):</strong> 'CONDITIONS: Maintenance visit, outdoor 28°F, wind moderate. Customer reported repeated flu-like illness in household + lethargic pet (customer narrative, volunteered). MEASUREMENTS: Personal monitor indicated CO present at mechanical room door on arrival. Ambient survey with furnace + water heater firing: CO elevated in mechanical room (analyzer readings attached). Spillage confirmed at water heater draft hood under normal operation; worsened under worst-case depressurization (dryer + range hood on, doors closed). Benchmark: zero spillage/ambient CO is the only acceptable result. ACTIONS: Water heater RED-TAGGED out of service (tag # recorded), gas shutoff closed, notifications made per local code/utility. Furnace operation suspended pending venting/combustion-air correction. COMMUNICATIONS: Hazard explained to homeowner in plain language; medical evaluation advised ('possible CO exposure'); CO alarms checked — upstairs unit past end-of-life, replaced and dated this visit; temporary hot-water options discussed. FOLLOW-UP: correction work scoped (combustion air + venting; sealed-combustion replacement options per Module 11 framework); post-correction ambient survey under identical worst-case conditions required before return to service.' — Conditions, numbers vs. benchmarks, actions, words: the complete standard of section 5.</p>"
    },
    {
      prompt: "<p><strong>Problem 5 (new mini-case).</strong> A modulating furnace faults 'only when it rains.' It is a single-pipe install; the vent termination is roof-mounted and clear; the trap is clean; draft measures fine on your dry-day visit. Build the hypothesis list and the reproduction test.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Rain-correlated evidence for a single-pipe unit: (a) wind-driven rain entering the vent termination or a failed roof flashing/cap letting water into the vent, where it pools in a low spot and restricts draft during storms; (b) rain raising crawlspace/basement water — a floor drain backing up into the condensate drain path; (c) storm winds pressurizing the roof termination zone (Module 3's wind pattern, rain as the visible marker of the weather system, not the agent); (d) water ingress into the outdoor... this unit is single-pipe, so intake-side rain effects apply to the <em>vent only</em>; also consider (e) a pressure-switch hose low point collecting splashed/condensed moisture during humid storm air. Step 2: Reproduction: inspect the vent interior and termination cap/flashing for water evidence and staining; check for bellies with a level; run a garden-hose test on the termination/flashing while a partner watches draft on the manometer inside — the classic leak-hunt adapted to venting; verify drain behavior against the home's storm drainage. Step 3: Fix per finding (cap/flashing, re-pitch, drain separation) and log a storm-day follow-up reading — intermittent faults close on verified weather, not on hope.</p>"
    },
    {
      prompt: "<p><strong>Problem 6 (new mini-case).</strong> A boiler system: one of four zones is cold since a bathroom remodel added a towel warmer into that zone's loop. The circulator runs; other zones fine; the affected zone's supply pipe leaves hot. Diagnose with the 500 formula mindset and name the likely physical story.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Hot supply leaving + running circulator + cold emitters = flow exists at the boiler but the loop isn't moving its design GPM through the emitters — think resistance and path. Step 2: The remodel is the confession: a towel warmer added in the wrong piping arrangement (e.g., in series with small ports, or a new high-resistance branch) can raise the loop's total resistance beyond what the existing circulator delivers against, collapsing flow through the whole zone — or its balancing/air state starves the original emitters. Step 3: Measure the zone's ΔT: a very wide ΔT at the zone (hot in, cold out, low delivery) is starved flow per Module 5 — Btu/h = 500 × GPM × ΔT with GPM fallen through the floor. Step 4: Inspect the remodel piping against the original design (series vs. parallel takeoff, valve positions, an air-bound new high point at the towel warmer — remodels also forget to purge). Likely fixes: repiping the warmer as a parallel branch with its own balancing, purging the new high point, and/or upsizing/resetting the zone circulator — verified by zone ΔT returning to its design neighborhood and all emitters warming evenly.</p>"
    }
  ],
  quiz: [
    {
      q: "A furnace fails only during the longest, coldest runs, with draft decaying over ~20 minutes before lockout. The pattern most strongly suggests:",
      choices: ["A weak igniter", "A condition that accumulates with runtime — e.g., condensate production outrunning marginal drainage, backing water into the draft path", "A thermostat losing its programming", "Low gas pressure at the meter"],
      answer: 1,
      explanation: "Correct: (b). Time-dependent decay under sustained load is the signature of an accumulating variable — water in this architecture. Reproducing it needs a continuous-run test, not a parts swap. (a) Igniter faults appear at ignition, in the first seconds, independent of run length. (c) Programming loss doesn't track cycle length or draft decay. (d) Low supply pressure shows as weak fire from minute one, worst with other appliances firing — a different test (inlet pressure under load)."
    },
    {
      q: "After fixing fault #1 on a multi-symptom call, the professional's next step is to:",
      choices: ["Close the ticket — one fault per visit", "Re-test every original symptom against the fix; a second, independent fault often hides behind the first", "Replace the thermostat as insurance", "Tell the customer the remaining symptom is normal"],
      answer: 1,
      explanation: "Correct: (b). Case 2's staging fault never explained the crushed duct's bedroom; symptom decomposition requires each complaint thread to be closed by its own evidence. (a) is how second visits and lost trust are manufactured. (c) Insurance parts are not a diagnostic method. (d) Declaring an unfixed symptom normal without a measurement is the one unforgivable sentence in service."
    },
    {
      q: "In Case 3, the heat pump's endless running was best understood as:",
      choices: ["A defective compressor", "The control's rational compensation for a furnace that kept tripping its limit — the visible machine was innocent", "Normal operation below changeover", "A refrigerant overcharge"],
      answer: 1,
      explanation: "Correct: (b). Integrated systems report distress at the compensating component. The audit that cracked the case was sequence observation + rise measurement on the furnace — the partner nobody suspected. (a) The compressor ran because it was told to, and performed. (c) Below changeover the design intends furnace-only; endless heat pump running is the fallback behavior after furnace failures. (d) Charge does not produce this choreography."
    },
    {
      q: "The single most valuable habit for intermittent faults is:",
      choices: ["Replacing the cheapest suspect part each visit", "Reproducing the fault's conditions deliberately (long runs, worst-case depressurization, weather states) and measuring during the event", "Instructing the customer to reset power whenever it happens", "Waiting for the fault to become permanent"],
      answer: 1,
      explanation: "Correct: (b). Conditional faults exist only in their conditions; manufacture the conditions and the 'intermittent' fault becomes a measurable, on-demand event (Cases 1, 4, and the rain case all yield to this). (a) builds the parts-cannon history that filled these tickets. (c) destroys evidence and, on safety faults, endangers the house. (d) eventually 'works' — at the cost of seasons of callbacks and, with combustion faults, real risk."
    },
    {
      q: "A documented measurement is professionally useful only when paired with:",
      choices: ["The technician's initials", "Its benchmark — the rating, plate range, or table value it is judged against", "The customer's signature on the same line", "A photograph of the gauge"],
      answer: 1,
      explanation: "Correct: (b). 'Draft 0.45' proves nothing until 'vs. switch rating 0.60' stands beside it; benchmark pairing is what turns records into evidence — for the next tech, the customer, and any later scrutiny. (a), (c), and (d) add process decoration without probative content."
    },
    {
      q: "Case 4's decisive moment was:",
      choices: ["Finding a failed part during routine cleaning", "Treating the customer's offhand symptom report (family 'flu', lethargic dog) as diagnostic evidence and switching the visit to a CO investigation", "Selling the maintenance plan", "Checking the filter first"],
      answer: 1,
      explanation: "Correct: (b). Symptom narratives are evidence — clustered flu-like illness in a combustion-appliance house is Module 10's pattern, and the tech's willingness to re-categorize the call (monitor, ambient survey, worst-case test, red tag) is the whole skill. (a) No part announced this; instruments under test conditions did. (c) and (d) are routine acts that would have left the hazard exactly as found."
    },
    {
      q: "A two-stage furnace stuck on low fire in a house whose design load exceeds low-fire output will present as:",
      choices: ["Short, violent cycles", "Continuous running with indoor temperature settling below setpoint near design weather", "Pressure-switch lockouts", "Perfect comfort with high bills"],
      answer: 1,
      explanation: "Correct: (b). It's arithmetic wearing a complaint's clothes (Case 2, Problem 2): 64,000 delivered vs. an 88,000 load is a deficit no duty cycle can close. (a) Short cycling is oversizing's signature — the opposite condition. (c) Draft faults belong to the vent/condensate family. (d) A capacity deficit cannot produce comfort at design conditions; bills rise from endless runtime, not from satisfaction."
    },
    {
      q: "Why does this course treat the ticket as a technical deliverable?",
      choices: ["Handwriting impresses customers", "It converts one visit's insight into permanent evidence — benchmarks, tests, settings — that protects the next diagnosis, the customer, and the technician", "Regulations require a minimum word count", "It justifies the service fee"],
      answer: 1,
      explanation: "Correct: (b). Every case in this module was harder because a predecessor wrote nothing; the standard (conditions, benchmarked measurements, the convicting test, before/after pairs, configuration, safety trail) is the fix. (a) and (d) mistake the record's purpose for presentation. (c) No word count exists — the requirement is evidentiary completeness."
    }
  ],
  studyGuide: `
<h3>Module 12 — Advanced No-Heat Case Studies: Quick Reference</h3>
<p><strong>Case patterns:</strong> (1) Cold-night-only failures = condition-accumulating faults — reproduce with a continuous run; condensate drainage capacity is suspect #1 on condensing gear. (2) Compound complaints = multiple faults — decompose symptoms, close each with its own evidence. (3) Integrated systems complain at the <em>compensating</em> component — audit the partnership (sequence + rise on the silent partner). (4) Casual symptom reports (flu clusters, lethargic pets) are CO evidence — re-categorize the call, monitor, survey, worst-case test, red-tag on measurement.</p>
<p><strong>Intermittent doctrine:</strong> faults are conditional; manufacture the condition (long cycle, worst-case depressurization, hose test, cold soak). Never conclude from a healthy interval.</p>
<div class="formula">Documentation standard: conditions • measurement + benchmark • the convicting test • before/after pair • configuration verbatim • safety trail • narrative vs. finding.</div>
<p><strong>Numbers that solved the cases:</strong> draft sagging through the 0.60 rating as water backed up • low-fire output 64,000 vs. load 88,000 (deficit = 'runs constantly, never warm') • rise 85°F vs. 70°F max → 828 CFM actual vs. 1,005 minimum → return restriction behind a 'heat pump' complaint.</p>
<p><strong>The banned moves, one last time:</strong> no jumpered safeties, no down-rated switches, no unmeasured conclusions, no symptom declared 'normal' without evidence.</p>
`
};
