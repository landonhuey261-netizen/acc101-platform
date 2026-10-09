// HVAC 132 - Module 6: Combustion Analysis
module.exports = {
  number: 6,
  slug: "combustion-analysis",
  title: "Combustion Analysis",
  estTime: "3–4 hours",
  objectives: [
    "Explain what an electronic combustion analyzer measures directly and what it calculates, and perform a valid test (placement, warm-up, steady state).",
    "Interpret flue O2 as the window into excess air, and predict how O2, temperature, and efficiency move together.",
    "Convert a measured CO reading to CO air-free and explain why the air-free value is the one that judges the appliance.",
    "Use net stack temperature to reason about heat transfer and exchanger condition.",
    "Distinguish analyzer signatures: under-aired (dirty) combustion, over-aired combustion, dilution from an exchanger breach, and a healthy appliance.",
    "Explain why combustion efficiency from the analyzer is not AFUE, and what each number is for."
  ],
  sections: [
    {
      heading: "What the Analyzer Sees",
      html: `
<p>An electronic combustion analyzer samples flue gas through a probe inserted into the vent (through a drilled test hole, sealed afterward) and reports the numbers this whole course has been circling: <strong>oxygen (O<sub>2</sub>)</strong>, <strong>carbon monoxide (CO)</strong>, <strong>flue (stack) temperature</strong>, and — directly or by calculation — <strong>CO<sub>2</sub></strong>, <strong>excess air</strong>, <strong>draft</strong>, and <strong>combustion efficiency</strong>. Sensors measure O<sub>2</sub> and CO electrochemically; the rest are computed from those measurements, the fuel selected, and the temperatures (flue and ambient).</p>
<p>A valid test has rules, and skipping them manufactures bad data:</p>
<ul>
<li><strong>Select the right fuel</strong> on the analyzer — every calculation downstream depends on it.</li>
<li><strong>Zero/calibrate in fresh air</strong> per the manufacturer's routine before inserting the probe.</li>
<li><strong>Steady state:</strong> run the appliance long enough for temperatures and readings to stabilize (several minutes of continuous firing) — readings during warm-up describe a cold appliance, not the appliance.</li>
<li><strong>Probe placement:</strong> in the flue, before any draft hood or dilution opening, tip in the gas stream — sampling after dilution air enters reports the room's air, not the burner's work.</li>
<li><strong>Ambient CO check</strong> of the space as well (Module 1) — flue CO judges the appliance; ambient CO judges the room.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> The analyzer does not grade your intentions; it grades the gas. Right fuel selected, probe before dilution, steady state — or the numbers are fiction with decimal points.</div>`
    },
    {
      heading: "Oxygen and Excess Air: The Mixture, Measured",
      html: `
<p>Flue O<sub>2</sub> is leftover oxygen — the portion of supplied oxygen the flame didn't use. Since combustion air is the only oxygen source, leftover O<sub>2</sub> measures how much <em>extra</em> air was pushed through the flame: <strong>excess air</strong>. The relationship is direct and worth memorizing as a picture:</p>
<div class="formula">Flue O<sub>2</sub> rises → excess air rises. Flue O<sub>2</sub> falls → excess air falls.</div>
<p>Both extremes are faults, in opposite directions:</p>
<ul>
<li><strong>Too little excess air</strong> (low O<sub>2</sub>) — the mixture runs fuel-rich; the flame can't find enough oxygen to finish the job: CO and soot climb (Module 1's chain, now with a gauge attached). Causes: dirty burners, blocked air intake, restricted flue, over-firing.</li>
<li><strong>Too much excess air</strong> (high O<sub>2</sub>) — the flame is diluted with air it doesn't need. Every extra cubic foot of air is heated at fuel expense and thrown up the vent, so efficiency falls and stack temperature behavior changes; extreme excess air can also lift and destabilize flames. Causes: under-firing, excessive draft, breaches leaking air into the flue (which fake the same signature — Section 5).</li>
</ul>
<p>Between the cliffs lies the manufacturer's target band for the appliance — the O<sub>2</sub> (or CO<sub>2</sub>) window printed in the service literature. Your job is not to chase a universal number but to land the appliance in <em>its</em> band with CO near zero. Learn to say it precisely: 'O<sub>2</sub> is evidence about air; CO is evidence about completion; the two together are evidence about the burner.'</p>
<div class="callout"><strong>Key idea:</strong> Aim for the manufacturer's O<sub>2</sub>/CO<sub>2</sub> window with CO minimal. Low O<sub>2</sub> risks CO and soot; high O<sub>2</sub> wastes heat and can mean dilution — including dilution through a cracked exchanger.</div>`
    },
    {
      heading: "CO and CO Air-Free: Judging the Appliance Fairly",
      html: `
<p>The analyzer's raw CO reading is measured in the flue gas <em>as sampled</em> — but flue gas can be diluted by excess air, so the same burner producing the same CO can show different raw numbers depending on how much extra air is mixed in. To judge the appliance itself, the industry corrects the reading to an undiluted basis: <strong>CO air-free</strong>.</p>
<div class="formula">CO air-free = CO measured × 20.9 ÷ (20.9 − O<sub>2</sub> measured)</div>
<p>The 20.9 is the oxygen percentage of fresh air; the formula scales the CO reading to what it would be with zero excess oxygen — the dilution removed mathematically.</p>
<p><strong>Worked example 1.</strong> Measured CO = 60 ppm at O<sub>2</sub> = 4.9%. Denominator: 20.9 − 4.9 = 16.0. Factor: 20.9 ÷ 16.0 ≈ 1.31. CO air-free ≈ 60 × 1.31 ≈ <strong>78 ppm</strong>.</p>
<p><strong>Worked example 2.</strong> Measured CO = 100 ppm at O<sub>2</sub> = 10.9%. Denominator: 20.9 − 10.9 = 10.0. Factor: 20.9 ÷ 10.0 = 2.09. CO air-free = 100 × 2.09 = <strong>209 ppm</strong>. Same ballpark raw CO as Example 1's neighborhood — but heavily diluted by excess air, and the air-free correction exposes a burner producing far more CO than the raw reading confessed.</p>
<p>Interpretation discipline: a properly adjusted residential gas appliance produces very low CO air-free (near zero to a few tens of ppm is the healthy neighborhood; manufacturers and standards set the action limits — follow them, and treat <em>rising</em> CO during a run, or CO that climbs as the appliance heats, as a red flag regardless of the starting value, since it can indicate an exchanger opening up with temperature). CO air-free is also why you never 'fix' high CO by adding air: dilution lowers the raw number while the burner keeps poisoning at the same rate — the air-free figure refuses to be fooled, and so should you.</p>
<div class="callout"><strong>Key idea:</strong> Report and judge CO air-free. Raw CO can be diluted into looking innocent; the air-free correction grades the burner, not the dilution.</div>`
    },
    {
      heading: "Stack Temperature and Efficiency",
      html: `
<p><strong>Gross stack temperature</strong> is what the probe reads; <strong>net stack temperature</strong> subtracts the combustion-air (room) temperature:</p>
<div class="formula">Net stack temperature = flue temperature − ambient temperature</div>
<p>Net stack temperature is a heat-transfer report card. Heat that leaves up the vent is heat the exchanger failed to hand to the house, so — at a given firing rate and excess air — <strong>higher net stack temperature means lower efficiency</strong>. The analyzer's displayed combustion efficiency is computed from exactly these ingredients (net temperature and O<sub>2</sub>/CO<sub>2</sub>) for the selected fuel.</p>
<p>Read stack temperature as a story, not a threshold:</p>
<ul>
<li><strong>Climbing over seasons</strong> on the same appliance: exchanger fouling (soot inside, dust/debris on the air side) is insulating the transfer surfaces — schedule cleaning before it becomes Module 1's chain.</li>
<li><strong>High today, suddenly:</strong> over-firing (check clocking and manifold pressure, Module 2) or failed heat transfer (blocked passages, blower/airflow fault leaving heat with nowhere to go).</li>
<li><strong>Suspiciously low with high O<sub>2</sub>:</strong> dilution — cold air leaking into the flue (breach, missing cleanout, draft hood sampling error) cools and dilutes the sample; the appliance looks 'efficient' the way a watered drink looks plentiful.</li>
</ul>
<p><strong>Combustion efficiency ≠ AFUE.</strong> The analyzer's figure is a <em>steady-state, right-now</em> combustion efficiency — how well the running flame's heat is being captured at this moment. AFUE (Module 4) is a <em>seasonal</em> rating that also folds in cycling losses, standby losses, and pilot energy. A furnace can show a fine steady-state number and still carry a mediocre AFUE. Quote each for what it is, and never promise a customer their AFUE from an analyzer screen.</p>
<div class="callout"><strong>Key idea:</strong> Net stack temp up = efficiency down (all else equal). Trends diagnose fouling; sudden highs diagnose firing/airflow faults; cool-and-dilute readings diagnose leaks in the sample path — including through the exchanger.</div>`
    },
    {
      heading: "Reading Signatures: Four Appliances",
      html: `
<p>Pull the threads together. Four furnaces, four analyzer stories (values are teaching examples; judge real units against their manufacturers' specifications):</p>
<ul>
<li><strong>Appliance A — healthy:</strong> O<sub>2</sub> in the manufacturer's band, CO air-free very low and stable, net stack temperature in family with its class, draft steady. Action: record the baseline — next year's comparison is this year's gift.</li>
<li><strong>Appliance B — under-aired:</strong> low O<sub>2</sub>, CO air-free high, soot at the burners. The flame is starved: dirty burners/intake, restricted flue, or over-firing. Action: shut down if CO is severe; clean, verify input, retest. Do not 'add air' by bending things — restore design conditions.</li>
<li><strong>Appliance C — over-aired or diluted:</strong> high O<sub>2</sub>, low CO air-free, low net stack temp, poor delivered heat. Under-fired, excessive draft — or air leaking into the flue downstream of the flame. Distinguish by checking input rate (clocking) and inspecting the exchanger/vent joints.</li>
<li><strong>Appliance D — the exchanger confession:</strong> readings start plausible, then O<sub>2</sub> climbs and CO behavior changes as the blower runs and the metal heats — dilution synchronized with air-side pressure (Module 4's flame-dance test, in numbers). Action: exchanger inspection; treat any accompanying supply-air CO as an emergency.</li>
</ul>
<p>The analyzer's deepest value is trend: a single test judges today, but recorded baselines turn 'seems fine' into evidence across years. Print or save every test, attach it to the ticket, and compare before you adjust — half of combustion work is noticing that this year's numbers moved.</p>
<div class="callout"><strong>Key idea:</strong> Interpret patterns, not single numbers: O<sub>2</sub> for air, CO air-free for completion, net stack for transfer, draft for the vent — and change over time (or with blower state) for the exchanger.</div>`
    }
  ],
  keyTerms: [
    { term: "Combustion analyzer", def: "An electronic instrument sampling flue gas to measure O2 and CO and compute CO2, excess air, draft, and combustion efficiency." },
    { term: "Excess air", def: "Combustion air supplied beyond the theoretical requirement; rises as flue O2 rises." },
    { term: "CO air-free", def: "The CO reading corrected for dilution by excess air: CO × 20.9 ÷ (20.9 − O2); the value used to judge the appliance's CO production." },
    { term: "Parts per million (ppm)", def: "The concentration unit for CO in flue gas and air." },
    { term: "Gross stack temperature", def: "The raw flue-gas temperature at the probe." },
    { term: "Net stack temperature", def: "Flue temperature minus ambient (combustion air) temperature; drives the efficiency calculation." },
    { term: "Combustion efficiency (steady-state)", def: "The analyzer's computed percentage of fuel heat captured under current running conditions; not the same as AFUE." },
    { term: "AFUE", def: "Seasonal efficiency rating including cycling and standby losses; not measurable by a combustion analyzer." },
    { term: "Draft (measurement)", def: "The pressure difference moving flue gas through the appliance and vent, read by the analyzer or a manometer in inches of water column." },
    { term: "Steady state", def: "Operating condition after temperatures and readings stabilize; the only condition under which a combustion test is valid." },
    { term: "Dilution air", def: "Room air entering the flue at a draft hood or breach, lowering measured concentrations without changing burner output." },
    { term: "Test hole", def: "A small drilled sampling port in the vent connector, sealed after testing." },
    { term: "Over-fire / under-fire (analysis view)", def: "Input rate above/below rating, visible in analysis as shifted O2, CO, and stack temperature patterns and confirmed by clocking." },
    { term: "Flame quenching (analysis view)", def: "CO production caused by flame contacting cold surfaces; shows as CO disproportionate to the O2 reading." },
    { term: "Sensor cell", def: "The electrochemical element in the analyzer that reacts with O2 or CO; a consumable with a finite life and calibration needs." },
    { term: "Ambient CO", def: "CO concentration in the room air around the appliance — the exposure measure, distinct from flue CO." },
    { term: "Baseline readings", def: "Recorded test results from a known-good visit, used for year-to-year comparison." },
    { term: "CO2 (calculated)", def: "Flue carbon dioxide percentage computed by the analyzer from measured O2 and the selected fuel's chemistry." }
  ],
  video: {
    title: "Gas Furnace Combustion Analysis Training with Tyler Nelson!",
    embedUrl: "https://www.youtube.com/embed/3KiMTT_qGiU",
    note: "AC Service Tech's combustion analysis training session: probe placement, letting readings stabilize at steady state, and interpreting O2, CO, and stack temperature together — the exact workflow of this module, performed on real equipment.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> An analyzer reads CO = 45 ppm at O<sub>2</sub> = 6.9%. Compute CO air-free, showing each step, and state why this corrected number — not 45 ppm — goes on the ticket.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Formula — CO air-free = CO × 20.9 ÷ (20.9 − O<sub>2</sub>). Step 2: Denominator: 20.9 − 6.9 = 14.0. Step 3: Factor: 20.9 ÷ 14.0 ≈ 1.493. Step 4: CO air-free ≈ 45 × 1.493 ≈ 67 ppm. Step 5: The raw 45 ppm is diluted by the excess air that the 6.9% O<sub>2</sub> represents; 67 ppm air-free is the burner's actual CO production rate, comparable across appliances and across visits regardless of dilution. Tickets record air-free because it's the number that can't be gamed by excess air.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Furnace X shows O<sub>2</sub> = 11.8%, CO air-free low, net stack temperature well below its class's typical range, and the customer complains of weak heat. Give the two competing explanations the signature supports and one test that separates them.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: High O<sub>2</sub> = high excess air; low net stack + weak heat means little fuel energy is reaching the house per unit of flue flow. Step 2: Explanation A — under-firing: too little fuel for the air being moved (low manifold pressure, partially blocked orifices, wrong-stage operation), so the flue stream is mostly warmed air. Step 3: Explanation B — dilution: the burner fires correctly, but extra air enters the flue downstream (exchanger breach, open cleanout, vent joint leak), inflating O<sub>2</sub> and cooling the sample while house heat suffers for separate reasons (or the breach itself steals heated air). Step 4: Separating test: clock the meter (Module 2). Input at rating kills Explanation A and directs you to the exchanger/vent inspection; input far below rating confirms under-firing and sends you to pressures and orifices. One measurement, two different repair paths — take it before touching anything.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Flue temperature is 420°F and the equipment-room temperature is 72°F. Compute net stack temperature. A year ago the same furnace at the same firing rate read a net stack 60°F lower, with similar O<sub>2</sub>. What is the most likely story and the scheduled response?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Net stack = 420 − 72 = 348°F. Step 2: At the same firing rate and similar excess air, a net stack temperature that has climbed 60°F means heat that used to transfer into the house is now escaping up the vent — transfer surfaces have lost effectiveness. Step 3: The classic cause is fouling: soot on the flue side (combustion drifting rich over time) or a matted blower wheel / debris on the air side throttling heat removal — both insulate the exchanger, Module 1's chain in slow motion. Step 4: Response: schedule cleaning and inspection (burners, exchanger passages, blower wheel), then re-test and compare against the baseline; also review CO air-free trend — if fouling is soot-driven, CO usually creeps with it, which raises the urgency from 'maintenance' to 'soon.'</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A junior tech reports: 'Good news — I opened the air shutter wide and CO dropped from 300 to 120 ppm, so it's fixed.' Using CO air-free logic, dismantle this conclusion and describe the correct repair philosophy.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The raw CO fell mostly because dilution rose: extra air thins the sample. If O<sub>2</sub> went from, say, 5% to 12%, the air-free correction factor went from 20.9/15.9 ≈ 1.31 to 20.9/8.9 ≈ 2.35 — CO air-free could easily have <em>risen</em> (300 × 1.31 ≈ 394 vs 120 × 2.35 ≈ 282 — even in this charitable arithmetic the burner still produces CO in the hundreds, a sick appliance by any manufacturer's limit). Step 2: Worse, excess air beyond design lifts flames and wastes efficiency, and shutter-bending treats a symptom while the cause (dirty burners, partial blockage, over-firing, quenching) keeps producing CO. Step 3: Correct philosophy: CO is fixed at its source — clean the burners and passages, verify input rate by pressure and clocking, restore air adjustments to specification, eliminate quenching/impingement — then prove the repair with CO air-free near zero at the manufacturer's specified O<sub>2</sub> band. Adjustments mask; restoration cures.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> List the five validity conditions for a combustion test from this module, and for each, name the bad conclusion a violation produces.</p>",
      solution: "<p><strong>Answer:</strong> (1) <em>Correct fuel selected</em> — otherwise every computed value (CO<sub>2</sub>, excess air, efficiency) is built on the wrong chemistry and the test grades a phantom. (2) <em>Fresh-air zero/calibration</em> — a sensor zeroed in flue-contaminated air offsets all readings; you can 'measure' negative problems away. (3) <em>Steady state</em> — warm-up readings describe a cold exchanger (condensing, quenching) and can invent a CO fault or hide a hot-running one. (4) <em>Probe before dilution</em> — sampling after the draft hood measures room air blended with flue gas: low everything, false health. (5) <em>Test hole sealed and probe correctly in the stream</em> — leaks at the port dilute the sample (same false-health direction), and a probe tip against the pipe wall reads wall-cooled gas. Violations mostly bias toward 'fine' — which is why procedure discipline is a safety topic, not a style preference.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> During a test, CO air-free starts at 25 ppm and climbs steadily past 200 ppm over ten minutes of running, while the blower runs the whole time. O<sub>2</sub> drifts upward too. Assemble the most likely diagnosis and the actions it demands, in order.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Time-dependence is the fingerprint: the fault grows as the appliance heats. Metal expands with heat — a crack that is closed when cold opens when hot (Module 4). Step 2: Rising O<sub>2</sub> alongside says dilution air is entering the flue path increasingly — consistent with a breathing exchanger breach under blower pressure, which also disrupts the flame environment and drives CO up. Step 3: Actions in order: (a) shut the appliance down — a climbing-CO, suspected-breach unit does not stay in service 'pending parts'; (b) ambient CO check of the space and registers; inform the customer plainly. (c) Exchanger inspection (visual/camera, flame-disturbance check on a controlled test only if safe and needed for confirmation) — but the service decision is already made: exchanger or appliance replacement; (d) document readings, times, and actions on the ticket. Step 4: Note the meta-lesson: steady state is not a single snapshot — watching the trend for several minutes is part of the test, and this is the call that pays for the habit.</p>"
    }
  ],
  quiz: [
    {
      q: "Flue O2 rising means excess air is:",
      choices: ["Falling", "Rising", "Unchanged — O2 and excess air are unrelated", "Negative"],
      answer: 1,
      explanation: "Correct: (b) Leftover oxygen in the flue is exactly the unused portion of the supplied air; more leftover O2 means more excess air passed through. (a) reverses the relationship taught in this module. (c) The two are directly linked — O2 is how excess air is inferred. (d) Excess air can't be negative; below zero excess you'd describe a fuel-rich mixture in terms of deficiency, and the O2 reading would be at/near zero."
    },
    {
      q: "CO measured is 80 ppm at O2 of 0.45%. Wait — check: using O2 = 0.45, the air-free factor is about 1.02; which of these pairs uses the formula correctly for CO = 80 ppm at O2 = 10.9%?",
      choices: ["CO air-free = 80 × 20.9 ÷ (20.9 − 10.9) = 167 ppm", "CO air-free = 80 × (20.9 − 10.9) ÷ 20.9 = 38 ppm", "CO air-free = 80 + 10.9 = 91 ppm", "CO air-free = 80 × 10.9 ÷ 20.9 = 42 ppm"],
      answer: 0,
      explanation: "Correct: (a) 20.9 − 10.9 = 10.0; 20.9 ÷ 10.0 = 2.09; 80 × 2.09 ≈ 167 ppm. (b) inverts the correction — dilution must raise the judged value above the raw reading, not lower it; an answer below 80 ppm for a diluted sample is self-refuting. (c) adds unlike quantities (ppm + %) — dimensionally meaningless. (d) uses O2 itself as the scaling ratio; the formula scales by fresh-air oxygen over remaining oxygen headroom (20.9 − O2)."
    },
    {
      q: "Why is CO judged on the air-free value rather than the raw reading?",
      choices: ["Raw CO is in the wrong units", "Excess air dilutes raw CO, so raw readings can hide a burner producing dangerous amounts; air-free removes the dilution", "Analyzers cannot display raw CO", "Air-free values are always lower and look better on tickets"],
      answer: 1,
      explanation: "Correct: (b) Dilution is the confound: the same CO production reads low in a high-excess-air flue. The air-free correction normalizes to zero excess oxygen so appliances and visits can be compared honestly. (a) Both are ppm; units aren't the issue. (c) Analyzers display raw CO directly — the air-free value is the computed one. (d) Air-free values are higher than diluted raw readings, not lower — and 'looking better' is the opposite of the point."
    },
    {
      q: "Net stack temperature is calculated as:",
      choices: ["Flue temperature + ambient temperature", "Flue temperature − ambient temperature", "Flue temperature × excess air", "Ambient temperature − flue temperature"],
      answer: 1,
      explanation: "Correct: (b) Net stack = flue − ambient; it is the temperature rise the vent stream carries above the air the burner breathed, and it drives the efficiency calculation. (a) Adding inflates the loss figure with heat that was never the appliance's. (c) mixes a temperature with a ratio — not the definition. (d) reverses the sign, giving a negative 'loss' for a working appliance."
    },
    {
      q: "At the same firing rate and O2, a net stack temperature 60°F higher than last year's baseline most likely indicates:",
      choices: ["Improved heat transfer", "Fouling of heat-transfer surfaces (soot/dust) reducing transfer, so more heat escapes up the vent", "The analyzer needs new batteries", "Lower gas heating value this year"],
      answer: 1,
      explanation: "Correct: (b) Heat not transferred to the house leaves in the flue stream; a rising trend at constant input/air is fouling until proven otherwise. (a) Improved transfer would lower stack temperature — the heat would be in the house instead. (c) Battery state doesn't cook readings into a clean, plausible trend. (d) Heating value shifts change input slightly, but a 60°F stack climb is a transfer story, and clocking would settle input in minutes."
    },
    {
      q: "A valid combustion test requires all of the following EXCEPT:",
      choices: ["Correct fuel selected on the analyzer", "Readings taken at steady state", "Probe inserted before any draft-hood dilution point", "The thermostat set to its lowest setting so the furnace cycles during sampling"],
      answer: 3,
      explanation: "Correct: (d) Cycling is the enemy of the test — you need continuous firing to reach and hold steady state; a cycling appliance gives warm-up transients, not data. (a), (b), and (c) are all genuine validity conditions: fuel selection drives the calculations, steady state makes readings meaningful, and pre-dilution sampling ensures you're grading the burner rather than the room air."
    },
    {
      q: "CO air-free that climbs steadily during a run while O2 also drifts up most strongly suggests:",
      choices: ["A sensor drifting out of calibration", "An exchanger breach opening with heat and admitting dilution air while combustion degrades", "Normal warm-up behavior for all furnaces", "The probe is too cold"],
      answer: 1,
      explanation: "Correct: (b) Heat-synchronized change is the breach signature: expansion opens the crack, blower pressure pushes dilution air through it (O2 up), and the disturbed combustion raises CO production. (a) Sensor drift doesn't synchronize with appliance temperature and blower state in this patterned way — and you verify with fresh-air zero rather than assume. (c) Normal warm-ups stabilize; they do not climb past 200 ppm air-free. (d) Probe temperature equilibrates in seconds and doesn't produce a ten-minute trend."
    },
    {
      q: "The efficiency number on a combustion analyzer differs from AFUE because:",
      choices: ["They are the same thing with different names", "The analyzer reports steady-state combustion efficiency right now; AFUE is a seasonal rating including cycling and standby losses", "AFUE is measured in the flue; the analyzer measures at the register", "Analyzers systematically overstate efficiency to sell furnaces"],
      answer: 1,
      explanation: "Correct: (b) Different questions: 'how well is this flame's heat captured at this moment?' versus 'how well did this appliance do across a whole heating season of starts, stops, and standby?' (a) The numbers often differ by several points on the same unit — they are not interchangeable labels. (c) AFUE comes from standardized laboratory test procedures, not a flue probe on a service call. (d) The analyzer computes honestly from temperature and gas composition; the misunderstanding is in the quoting, not the instrument."
    }
  ],
  studyGuide: `
<h3>Module 6 — Combustion Analysis: Quick Reference</h3>
<p><strong>Valid test:</strong> right fuel selected → fresh-air zero → probe in the flue BEFORE dilution → run to steady state → watch the trend, not just a snapshot → seal the test hole.</p>
<p><strong>O<sub>2</sub> ↔ excess air:</strong> O<sub>2</sub> up = excess air up. Low O<sub>2</sub> = rich/starved → CO + soot risk. High O<sub>2</sub> = wasted heat up the vent — or dilution (breach!). Target: manufacturer's O<sub>2</sub>/CO<sub>2</sub> band with CO minimal.</p>
<p><strong>CO air-free</strong> = CO × 20.9 ÷ (20.9 − O<sub>2</sub>). Judge the appliance on air-free, always. Never 'fix' CO with dilution — fix the burner, pressure, or blockage causing it.</p>
<p><strong>Net stack</strong> = flue − ambient. At fixed input/O<sub>2</sub>: net stack up = efficiency down = fouling story. Cool + high O<sub>2</sub> = dilution story.</p>
<p><strong>Signatures:</strong> healthy = in-band O<sub>2</sub>, CO air-free low & stable. Under-aired = low O<sub>2</sub>, high CO, soot. Diluted = high O<sub>2</sub>, low stack, check input by clocking, then exchanger/vent. Breach = readings that move with heat/blower state; CO climbing during a run = shut down, inspect, replace.</p>
<p><strong>Efficiency ≠ AFUE:</strong> analyzer = steady-state, now. AFUE = seasonal, includes cycling/standby. Quote each correctly.</p>
`
};
