// HVAC 102 - Module 11: Troubleshooting Refrigerant-Side Faults
module.exports = {
  number: 11,
  slug: "troubleshooting-refrigerant-side-faults",
  title: "Troubleshooting Refrigerant-Side Faults",
  estTime: "3–4 hours",
  objectives: [
    "Read the four-value fingerprint — suction pressure, head pressure, superheat, subcooling — as one combined pattern.",
    "Diagnose undercharge and overcharge on both fixed-orifice and TXV systems, explaining how the patterns differ.",
    "Diagnose restrictions (drier, screen, kink, TXV) and separate them from undercharge, which they imitate.",
    "Diagnose non-condensables and prove them with a standing P/T comparison instead of guessing.",
    "Work a disciplined fault sequence that changes one variable at a time and verifies each repair."
  ],
  sections: [
    {
      heading: "The Four-Value Fingerprint",
      html: `<p>Refrigerant-side diagnosis is pattern recognition over four numbers, taken together, on a stabilized system with verified airflow: <strong>suction pressure</strong> (→ evaporating temperature), <strong>head pressure</strong> (→ condensing temperature), <strong>superheat</strong>, and <strong>subcooling</strong>. Memorize the normal relationships first (Module 8): on a healthy system, evaporating temperature suits the load, condensing temperature sits a reasonable margin above ambient, superheat sits at the metering device's defended value (or the fixed-orifice chart's target), and subcooling sits at the manufacturer's figure. Every fault below is a characteristic <em>distortion</em> of that picture.</p><p>Two reading rules protect all the patterns in this module. First: <strong>airflow before refrigerant conclusions, always</strong> — low airflow depresses suction and superheat in ways that impersonate charge faults, and Module 12 owns that half of the world. Second: <strong>name the metering device before interpreting superheat</strong> — a TXV holds superheat constant through charge changes that swing a fixed-orifice system's superheat wildly; the same 20°F superheat is 'starved coil' evidence on one architecture and 'the valve's honest report of a dying liquid supply' on the other.</p><p>The diagnostic order of battle: stabilize → record the four values + ambient + indoor conditions → compare to the pattern table → pick the single most consistent hypothesis → prove it with the cheapest decisive test → repair → re-measure the full fingerprint. Technicians who 'fix' two things at once never learn which one mattered, and charge customers for the education.</p><div class="callout"><strong>Key idea:</strong> No single gauge diagnoses anything. The pattern of four values, on the named architecture, at stated conditions — that is the diagnosis.</div>`
    },
    {
      heading: "Undercharge and Overcharge",
      html: `<p><strong>Undercharge, fixed-orifice system:</strong> suction pressure low, head pressure low, <strong>superheat high</strong> (the small charge boils off early and the coil's tail superheats), <strong>subcooling low</strong> (little liquid stacked in the condenser to subcool). Capacity fades; the coil may frost near the inlet circuits where pressure and temperature dive. Worked anchor: R-22 suction fallen below its healthy 68.5 psig/40°F point with a suction line warm enough to give superheat in the 20s — the classic starved picture.</p><p><strong>Undercharge, TXV system:</strong> the valve opens fully and defends superheat until the liquid supply falters; then superheat finally climbs too. Early undercharge hides: superheat looks <em>normal</em> while <strong>subcooling falls toward zero</strong> and bubbles show in the glass (Module 6). This is why subcooling is the TXV charge metric (Module 8) — it confesses undercharge while superheat is still lying for the valve.</p><p><strong>Overcharge, TXV system:</strong> superheat stays at the valve's setting (it still controls), <strong>subcooling climbs high</strong>, head pressure rises as excess liquid crowds the condenser, capacity and efficiency sag, and in the extreme the valve loses the fight and superheat collapses toward floodback. <strong>Overcharge, fixed-orifice:</strong> head and suction pressures both run high, subcooling high, superheat <strong>low</strong> — the fixed hole passes the surplus straight into the coil, flirting with liquid at the compressor.</p><p>The trap to unlearn: 'low suction = add gas.' Low suction with <em>low</em> superheat is not undercharge at all (think airflow or floodback); low suction is also the signature of the next section's villain. Charge is added on a pattern, or it is not added.</p><div class="callout"><strong>Key idea:</strong> Undercharge = high superheat + low subcooling (fixed) / collapsing subcooling first (TXV). Overcharge = high subcooling + rising head, with superheat low (fixed) or valve-held until it drowns (TXV).</div>`
    },
    {
      heading: "Restrictions: The Great Imitator",
      html: `<p>A <strong>restriction</strong> — plugged filter-drier, clogged TXV inlet screen, kinked liquid line, partially closed service valve, wax or ice at the metering device — starves everything downstream of it while charge piles up behind it. Its fingerprint is undercharge's twin with one decisive difference:</p><ul><li>Suction pressure low, superheat <strong>high</strong> (starved coil — same as undercharge).</li><li>But <strong>subcooling is normal-to-high</strong>, because liquid is stacking in the condenser behind the blockage. Undercharge cannot stack what it does not have. <strong>High superheat + high subcooling = restriction</strong> (or a TXV failed closed) — the module's most valuable pattern.</li><li>Local evidence localizes it: a temperature drop across the drier (Module 6), frost or sweating beginning exactly at the restriction point, a glass clear before the suspect and bubbling after it.</li></ul><p><strong>The recovery test (the decider):</strong> pump the system down or recover and weigh the charge. A restricted system yields a <em>full or excessive</em> weighed charge; an undercharged system yields a short one. The scale ends the argument that gauges started. Ice restrictions add a temporal signature: the system starves, rests warm, 'heals,' starves again — moisture freezing at the orifice (fix the moisture: drier, evacuation discipline — Module 7 — not the orifice).</p><p>And discipline the remedy: find <em>why</em> the restriction formed. A drier that plugged with debris is reporting a debris source (brazing scale, burnout residue, a disintegrating component). Replacing the drier without hunting the source buys a temporary restriction with a fresh date.</p><div class="callout"><strong>Key idea:</strong> Starved coil + stacked condenser = restriction. Starved coil + empty condenser = undercharge. Subcooling is the witness that separates them.</div>`
    },
    {
      heading: "Non-Condensables: Air Where It Does Not Belong",
      html: `<p><strong>Non-condensables</strong> (air, nitrogen left from a sloppy pressure test) cannot condense at condenser temperatures. They collect in the condenser, add their partial pressure on top of the refrigerant's, and steal condenser volume. Fingerprint: <strong>head pressure abnormally high for the ambient</strong> (condensing temperature floats far above its normal margin over outdoor temperature), capacity down, discharge temperature up — while charge measurements (subcooling) may look unremarkable because the liquid stack is honest. The condenser is partly full of air, and the refrigerant is paying rent on the whole building.</p><p><strong>The standing proof.</strong> Shut the system down and let it equalize and settle to a uniform temperature (the condenser fan's off; shaded, stable conditions help). Measure the refrigerant's standing pressure and its temperature at the condenser. For a pure refrigerant charge, standing pressure must match the P/T chart at that temperature — e.g., an R-410A system settled at 100°F should stand at about 317 psig. A standing pressure significantly <em>above</em> the chart at the measured temperature is non-condensables confessing: the excess is the partial pressure of gas that is not refrigerant. (Use the bubble/dew care of Module 8 on blends — and confirm the system truly settled before concluding; a sun-baked condenser lies in the other direction.)</p><p>The cure is not 'bleeding the top' — casual purging vents refrigerant with the air and violates Module 9. The cure is recovery of the charge, the evacuation discipline of Module 7 (the air got in through a leak, an open service, or an unevacuated charge — find which), and a weighed recharge. Then ask the origin question out loud: air does not teleport. A system full of air is a system with a history — usually a leak on the low side during a vacuum-side excursion, or service performed without evacuation.</p><div class="callout"><strong>Key idea:</strong> High head + honest subcooling + standing pressure above the P/T chart at settled temperature = non-condensables. Cure by recovery and real evacuation, never by venting.</div>`
    },
    {
      heading: "Putting the Patterns Together: Case Drills",
      html: `<p><strong>Case 1 — 'It just doesn't cool like it used to.'</strong> R-410A TXV system: suction low-normal, head modestly low, superheat 11°F (valve's setting), subcooling 1°F, bubbles dancing in the glass. Pattern: subcooling collapsed while the valve still holds superheat → early <strong>undercharge</strong>. Action: leak-check before adding (Module 10 — find the flare weeping oil), repair, weigh additions, restore target subcooling, document quantities.</p><p><strong>Case 2 — the helpful neighbor.</strong> Fixed-orifice R-22: a well-meaning top-off 'by pressure' last month. Now head high, suction high, superheat 3°F, subcooling very high, compressor sweating and loud. Pattern: <strong>overcharge</strong> on a fixed system — the fixed hole is passing the surplus. Action: recover to correct charge (verify by target superheat at today's conditions), check for floodback damage, educate kindly.</p><p><strong>Case 3 — the new drier that 'failed.'</strong> Suction low, superheat 25°F, subcooling 16°F, frost starting at the liquid-line drier's outlet. Pattern: textbook <strong>restriction</strong>, localized by the frost line and a measured temperature drop across the drier. Action: weigh-out proves charge was full; replace the drier and hunt the debris source it reported.</p><p><strong>Case 4 — the mystery head pressure.</strong> R-410A, 95°F day, head pressure matching a condensing temperature absurdly above ambient, subcooling ordinary, charge history 'topped off after a repair with no vacuum pump available.' Standing test: settled at 100°F, standing pressure well above 317 psig. <strong>Non-condensables</strong>, introduced by the unevacuated service. Action: recover, leak-check, evacuate ≤500 microns with decay proof, weigh in, document.</p><p>Notice what no case required: replacing a compressor or a TXV. The refrigerant-side fault list is short — charge low, charge high, flow blocked, gas contaminated — and the four-value fingerprint, honestly taken, sorts nearly every call into it.</p><div class="callout"><strong>Key idea:</strong> Low charge, high charge, blocked flow, foreign gas. Four villains, four fingerprints. Learn the fingerprints and the 'mystery calls' retire.</div>`
    }
  ],
  keyTerms: [
    { term: "Four-value fingerprint", def: "Suction pressure, head pressure, superheat, and subcooling read together on a stabilized, airflow-verified system." },
    { term: "Undercharge (fixed-orifice pattern)", def: "Low suction, low head, high superheat, low subcooling." },
    { term: "Undercharge (TXV pattern)", def: "Superheat held at the valve setting until late; subcooling collapses toward zero first, with bubbles in the glass." },
    { term: "Overcharge (TXV pattern)", def: "High subcooling, rising head pressure, valve-held superheat until floodback threatens." },
    { term: "Overcharge (fixed-orifice pattern)", def: "High head and suction pressures, high subcooling, low superheat — liquid threatening the compressor." },
    { term: "Restriction pattern", def: "High superheat with normal-to-high subcooling: a starved coil fed from a stacked condenser." },
    { term: "Recovery (weigh-out) test", def: "Recovering and weighing the charge to decide restriction vs. undercharge definitively." },
    { term: "Ice restriction", def: "Moisture freezing at the metering device; starves the system, melts at rest, starves again — a moisture/drier fault." },
    { term: "Non-condensables", def: "Air or nitrogen trapped in the system; they raise head pressure and falsify P/T-based diagnosis." },
    { term: "Standing P/T test", def: "Comparing a settled, off system's standing pressure with the P/T chart at its measured temperature to expose non-condensables." },
    { term: "Partial pressure", def: "The share of total pressure contributed by one gas in a mixture; non-condensables add theirs on top of the refrigerant's." },
    { term: "Floodback (diagnostic sign)", def: "Abnormally low superheat with liquid returning to the compressor — seen in overcharge (fixed) and valve/bulb failures." },
    { term: "Starved coil", def: "An evaporator receiving too little refrigerant: dry tail circuits, high superheat, low capacity — common to undercharge and restriction." },
    { term: "Stacked condenser", def: "Excess liquid accumulated in the condenser — the high-subcooling evidence in overcharge and restriction patterns." },
    { term: "Discharge temperature (diagnostic use)", def: "A supporting symptom: it rises with high ratio, high superheat, and non-condensables, but decides few diagnoses alone." },
    { term: "Single-variable rule", def: "Change or correct one thing at a time, then re-measure — combined fixes hide which one mattered." }
  ],
  video: {
    title: "Refrigerant Overcharge Troubleshooting and Prevention",
    embedUrl: "https://www.youtube.com/embed/S2It3x3qGj0",
    note: "HVAC School's walk through overcharge: what excess charge does to head pressure, subcooling, capacity, and the compressor, and how to prove it before recovering refrigerant. Pair it with this module's undercharge/restriction patterns — the video covers one villain deeply; the lecture supplies the other three.",
    more: [
      { title: "HVAC Training Basics for New Techs: Gauges, Pressures, Temps, Check the Charge!", url: "https://www.youtube.com/watch?v=NOWQsrjm4AY" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Fixed-orifice system: suction low, head low, superheat 24°F, subcooling 2°F. Diagnose, and name the one measurement you take before adding refrigerant.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The pattern is <strong>undercharge</strong> — starved coil (high SH) with an empty condenser (low SC). Step 2: Before adding, <strong>leak-check the system</strong>: charge left for a reason, and Module 10's obligations and economics both demand finding it. Then add by target-superheat chart at the day's conditions and document the weighed amount.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> TXV system: superheat steady at the valve's 10°F setting, subcooling 18°F and climbing after a recent 'top-off,' head pressure high. Diagnose and prescribe.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The valve still controls superheat while liquid stacks — <strong>overcharge</strong>. Step 2: Prescription: recover refrigerant down to the manufacturer's subcooling target (weigh what comes out), verify head pressure and capacity normalize, and document the corrected charge. Do not 'fix' it by adjusting the TXV — the valve is the only innocent party.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A system shows superheat 26°F and subcooling 15°F with frost beginning at the liquid-line drier outlet. A coworker wants to add 2 lb 'for the low suction.' Refute him with the pattern and name the deciding test.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: High superheat + <strong>high</strong> subcooling is the restriction pattern — liquid is stacked behind a blockage, and the frost line names the drier. Step 2: Adding charge raises the stack and the head pressure while the coil stays starved. Step 3: Deciding test: <strong>recover and weigh the charge</strong> (weigh-out) — a full weight confirms restriction; then replace the drier and hunt the debris source.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> An R-410A system, settled and shaded at a uniform 100°F, stands at a pressure clearly above 317 psig. Interpret, and prescribe the full cure (including what not to do).</p>",
      solution: "<p><strong>Answer:</strong> Step 1: At 100°F, pure R-410A stands at ≈317 psig; pressure above the chart is the partial pressure of <strong>non-condensables</strong> (air/nitrogen). Step 2: Cure: recover the charge, find how air entered (leak/service history), evacuate to ≤500 microns with a passing decay test, weigh in the correct charge. Step 3: What not to do — do not 'bleed it off the top'; purging vents refrigerant and violates the venting prohibition.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A system starves every afternoon, works every morning after resting all night, and its history includes a midsummer repair with no drier change. Give the mechanism and the permanent fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Mechanism — <strong>ice restriction</strong>: moisture in the circuit freezes at the metering device during long runs, choking flow; overnight the ice melts and the system 'heals.' Step 2: The history fits: the repair admitted moisture and no drier was fitted to catch it. Step 3: Permanent fix: replace the liquid-line drier, evacuate with Module 7 discipline (deep vacuum, decay proof; triple evacuation if the moisture load demands), recharge correctly, and verify the starvation cycle is gone across a long run.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> State the diagnostic sequence of this module as a numbered protocol a junior tech can tape inside a toolbox lid.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Verify airflow; stabilize the system; record conditions. Step 2: Name the metering device. Step 3: Take the four values: suction P, head P, superheat, subcooling. Step 4: Match the pattern — low charge / high charge / restriction / non-condensables. Step 5: Prove it with the cheapest decisive test (subcooling witness, drier ΔT, weigh-out, standing P/T). Step 6: Repair once; re-measure all four values; document.</p>"
    }
  ],
  quiz: [
    {
      q: "High superheat with HIGH subcooling most likely indicates:",
      choices: ["Undercharge", "A restriction (or TXV failed closed) — coil starved while liquid stacks in the condenser", "Overcharge on a fixed-orifice system", "Non-condensables"],
      answer: 1,
      explanation: "Correct: (b). The stacked condenser separates restriction from undercharge. (a) Undercharge shows LOW subcooling — there is no liquid to stack. (c) Fixed-orifice overcharge drives superheat LOW. (d) Non-condensables raise head pressure with otherwise ordinary subcooling, not this starved-coil pair."
    },
    {
      q: "On a TXV system, early undercharge is betrayed first by:",
      choices: ["Very high superheat", "Subcooling collapsing toward zero (superheat still at the valve's setting)", "High head pressure", "Frost at the compressor"],
      answer: 1,
      explanation: "Correct: (b). The valve defends superheat until the liquid supply fails, so subcooling is the early confession. (a) High superheat arrives late in TXV undercharge. (c) Head pressure falls, not rises, as charge is lost. (d) Compressor frosting signals liquid floodback — the opposite fault family."
    },
    {
      q: "The decisive test between undercharge and restriction is:",
      choices: ["Listening to the compressor", "Recovering and weighing the charge (weigh-out)", "Checking the thermostat batteries", "Reading discharge temperature alone"],
      answer: 1,
      explanation: "Correct: (b). A full weighed charge with starved-coil symptoms proves restriction; a short weight proves undercharge. (a) Sound is not a measurement. (c) Controls faults live in Module 12's world, not this pattern pair. (d) Discharge temperature rises in both faults and decides nothing between them."
    },
    {
      q: "An ice restriction's signature behavior is:",
      choices: ["Permanent starvation until the orifice is replaced", "Starving during long runs, recovering after rest as the ice melts, then starving again", "High subcooling with low superheat", "Failure only in heating mode"],
      answer: 1,
      explanation: "Correct: (b). The melt-and-refreeze cycle is moisture confessing; the fix is drier + evacuation discipline. (a) The orifice is the victim, not the cause. (c) describes overcharge patterns. (d) Ice restrictions appear wherever moisture meets a cold metering point, cooling included."
    },
    {
      q: "Non-condensables are proven by:",
      choices: ["A sight glass full of bubbles", "A settled system whose standing pressure sits above the P/T chart value for its measured temperature", "Low superheat", "An oily condenser coil"],
      answer: 1,
      explanation: "Correct: (b). Excess standing pressure at a known, uniform temperature is the foreign gas's partial pressure. (a) Bubbles indicate flash gas from charge/restriction causes. (c) Low superheat belongs to overfeed/floodback patterns. (d) Oil on a coil suggests a leak site, not condenser air."
    },
    {
      q: "The correct cure for confirmed non-condensables is:",
      choices: ["Bleed gas from the condenser's top until pressure drops", "Recover the charge, find the air's entry path, evacuate deeply with decay proof, and weigh in correct charge", "Add extra refrigerant to dilute the air", "Run the system until the air dissolves"],
      answer: 1,
      explanation: "Correct: (b). Only full recovery + evacuation removes the gas lawfully and completely. (a) is venting — prohibited. (c) Dilution is not a physical remedy; pressures only rise. (d) Air does not dissolve away in service; it stays in the condenser collecting rent."
    },
    {
      q: "Why must airflow be verified before refrigerant-side conclusions?",
      choices: ["Because airflow faults change suction pressure and superheat, impersonating charge faults", "Because the blower uses the most electricity", "It need not be — gauges tell the whole story", "To give the system time to warm up the room"],
      answer: 0,
      explanation: "Correct: (a). Low airflow depresses evaporating pressure and distorts superheat — the fingerprint smears. (b) Blower energy is real but irrelevant to the diagnostic order. (c) Gauges cannot separate airflow's signature from charge's — that is the point. (d) Warm-up is stabilization, a separate (also required) step."
    },
    {
      q: "A fixed-orifice system with high head pressure, high suction pressure, high subcooling, and 3°F superheat is:",
      choices: ["Undercharged", "Restricted", "Overcharged — the fixed hole is passing surplus liquid toward the coil", "Perfectly normal"],
      answer: 2,
      explanation: "Correct: (c). Every value points the same way: too much charge everywhere, with floodback risk at 3°F superheat. (a) Undercharge lowers both pressures and raises superheat. (b) Restriction lowers suction and raises superheat. (d) 3°F superheat on a fixed system under load is a compressor-safety concern, not a clean bill."
    }
  ],
  studyGuide: `
<h3>Module 11 — Refrigerant-Side Faults: Quick Reference</h3>
<p><strong>Protocol:</strong> airflow verified → stabilize → name the metering device → four values (suction P, head P, SH, SC) → pattern → cheapest decisive proof → repair → re-measure.</p>
<p><strong>Undercharge:</strong> fixed — low/low pressures, HIGH SH, LOW SC. TXV — SC collapses first; SH held by the valve until late.</p>
<p><strong>Overcharge:</strong> TXV — HIGH SC, rising head, SH valve-held then drowning. Fixed — pressures high, SC high, SH LOW (floodback risk).</p>
<p><strong>Restriction:</strong> HIGH SH + HIGH SC (starved coil, stacked condenser). Localize: drier ΔT, frost line, glass before/after. Decide by weigh-out. Ice restriction cycles with run/rest — fix moisture (drier + evacuation), not the orifice.</p>
<p><strong>Non-condensables:</strong> head absurdly high for ambient, SC ordinary; settled standing pressure above P/T chart at measured temp (R-410A at 100°F ≈ 317 psig). Cure = recover, find entry, deep evacuate, weigh in. Never 'bleed the top.'</p>
<p><strong>Watch out:</strong> 'low suction, add gas' is malpractice. Low suction has four authors; charge is only one of them.</p>
`
};
