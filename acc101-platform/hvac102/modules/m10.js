// HVAC 102 - Module 10: Leak Detection, Repair Rules & Recordkeeping
module.exports = {
  number: 10,
  slug: "leak-detection-repair-recordkeeping",
  title: "Leak Detection, Repair Rules & Recordkeeping",
  estTime: "3–4 hours",
  objectives: [
    "Compute an annualized leak rate from charge added, full charge, and elapsed time, and compare it with the applicable trigger rate.",
    "State the trigger rates by sector (comfort cooling, commercial refrigeration, industrial process) and the 30-day repair obligation for appliances at or above 50 lb of ozone-depleting refrigerant.",
    "Distinguish leak inspection, initial verification test, and follow-up verification test — and when each is required.",
    "Choose and correctly use leak-detection methods: visual/oil evidence, bubbles, electronic, ultrasonic, UV dye, and nitrogen standing-pressure tests.",
    "Keep the records the rules require — service, leak, repair, and disposal records — for three years."
  ],
  sections: [
    {
      heading: "Finding Leaks: A Method for Every Size of Hole",
      html: `<p>Leak detection is a narrowing funnel: evidence first, instruments second, pinpoint last.</p><ul><li><strong>Visual and oil evidence.</strong> Refrigerant oil travels with the gas; a leak wets its neighborhood. Oil stains at flare nuts, valve caps, Schrader cores, brazed joints, and compressor terminals are the system's own leak map. Dust caked in an oily outline on a coil is a signed confession.</li><li><strong>Electronic detectors</strong> (heated-diode or infrared) sniff refrigerant vapor at joints and along coils. Technique: move <em>slowly</em>, tip close to the surface, work from high to low is wrong for most refrigerants — vapor heavier than air sinks, so sweep deliberately and re-check hits to confirm; a single beep is a rumor, repeatability is evidence. Keep the sensor out of liquid and away from solvents that false-trigger it.</li><li><strong>Bubble solution</strong> — the great confirmer. Applied to a pressurized joint, it grows visible bubbles exactly at the escape point. It pinpoints what the electronic detector only neighborhoods.</li><li><strong>Ultrasonic detectors</strong> listen for the hiss of escaping gas under pressure — excellent with a nitrogen charge in a quiet space, blind to a system at rest.</li><li><strong>UV dye</strong> — added to the oil circuit, it fluoresces at leak sites under UV light after run time. Useful for elusive leaks on systems that stay in service; it is an additive in the circuit, so use only products and procedures the equipment tolerates, and never as a substitute for finding a big leak with faster methods.</li><li><strong>Nitrogen standing-pressure test</strong> — with refrigerant recovered, pressurize with dry nitrogen (through a regulator, never exceeding component ratings) and watch for decay; then bubble-test the suspects. It proves tightness of the whole and locates the part.</li></ul><p>Methods the rules recognize as <em>leak inspections</em> must be able to determine leak <em>location</em> — standing tests and charge checks alone tell you a system leaks, not where; they partner with locating methods, they do not replace them.</p><div class="callout"><strong>Key idea:</strong> Oil shows you where to sniff, the detector narrows the neighborhood, bubbles sign the address. Confirm every hit twice.</div>`
    },
    {
      heading: "Leak Rate Math: The Number That Starts the Clock",
      html: `<p>For regulated appliances, the question is not 'does it leak?' but 'how fast, annualized?' Two accepted methods exist; the program teaches the <strong>annualizing method</strong>:</p><div class="formula">Leak rate (%) = [refrigerant added (lb) ÷ full charge (lb)] × [365 ÷ days since last addition] × 100</div><p><strong>Worked example 1 — comfort cooling trigger.</strong> A rooftop unit holds a 60 lb full charge. You add 6 lb, and records show the last addition was 365 days ago. Rate = (6 ÷ 60) × (365 ÷ 365) × 100 = <strong>10%</strong> per year. The comfort-cooling trigger is 10% — this appliance is <em>at</em> the line; a hair more, or a shorter interval, puts it over and starts the repair clock (Section 3).</p><p><strong>Worked example 2 — same pounds, shorter interval.</strong> Same 60 lb unit, 6 lb added, but the last addition was 182 days ago. Rate = (6 ÷ 60) × (365 ÷ 182) × 100 ≈ 0.10 × 2.005 × 100 ≈ <strong>20%</strong>: double the trigger. Interval is destiny in this formula — which is why the records of <em>every</em> addition (Module 9's discipline) are the arithmetic's raw material.</p><p><strong>Worked example 3 — commercial refrigeration.</strong> A 200 lb commercial system received 40 lb over a 365-day span: rate = (40 ÷ 200) × 1 × 100 = <strong>20%</strong> — exactly the commercial refrigeration trigger.</p><p><strong>Trigger rates (12-month basis)</strong> for appliances with 50 lb or more of ozone-depleting refrigerant: <strong>comfort cooling 10%, commercial refrigeration 20%, industrial process refrigeration 30%, all other appliances 10%</strong> per the EPA leak-repair summary. Know your sector before you compute; the same 15% rate is an emergency on a rooftop and unremarkable in a supermarket rack.</p><div class="callout"><strong>Key idea:</strong> Leak rate = pounds, charge, and <em>time</em>. Without documented addition dates, the rate cannot be computed — and non-computable is non-compliant.</div>`
    },
    {
      heading: "The Repair Rules: 30 Days, Verification, and the Retrofit Door",
      html: `<p>When an appliance with a full charge of <strong>50 or more pounds</strong> of ozone-depleting refrigerant is discovered leaking above its trigger rate, the owner/operator obligations engage (technicians execute and document the work):</p><ul><li><strong>Repair within 30 days</strong> of discovery (with regulator-recognized extensions in defined cases, such as when an industrial process shutdown is required — the classic allowance stretches the window to 120 days for that situation).</li><li><strong>Initial verification test</strong> — performed after repairs, before return to service, proving the repaired section holds.</li><li><strong>Follow-up verification test</strong> — performed after the appliance returns to normal operating conditions, within 30 days of that return, proving the leak rate is now below the trigger under real operation.</li><li><strong>Leak inspections</strong> on the regulated schedule while above threshold: annually for comfort cooling at 50+ lb; more frequently (quarterly for the largest industrial charges) until calculations demonstrate the rate back below the trigger.</li><li><strong>If repairs fail:</strong> a <strong>retrofit or retirement plan</strong> (developed within 30 days of the decision point), completed within a year — topping off an unrepairable leaker is not a plan.</li><li><strong>Chronically leaking appliances</strong> (≥125% of full charge in 12 months) must be reported to EPA by March 1 of the following year, describing the repair efforts.</li></ul><p>Scope honesty: those paragraphs describe the Section 608 framework for ozone-depleting refrigerants. The 2020 amendments removed the 82.157 repair regime for appliances using only substitute (HFC) refrigerants under 608 itself, while the venting ban, certification, recovery, and sales rules for HFCs remain; separately, AIM Act refrigerant-management rules now extend leak-repair expectations to many larger HFC systems. The professional standard is simpler than the genealogy: repair promptly on a documented timeline, verify, and keep the records.</p><div class="callout"><strong>Key idea:</strong> Above the trigger: repair in 30 days, verify initially, verify again in operation within 30 days — or a dated retrofit/retirement plan replaces the repair. Paper proves each step.</div>`
    },
    {
      heading: "Recordkeeping: Three Years, Specific Contents",
      html: `<p>The retention number is <strong>three years</strong>, and it recurs across the program: technician records for disposal work, seller records, owner/operator service records. What must the file for a regulated appliance contain?</p><ul><li><strong>Service records:</strong> date and type of service, the technician's identity/certification, and the <strong>quantity and type of refrigerant added or recovered</strong> — the raw material of every leak-rate computation.</li><li><strong>Leak documentation:</strong> leak-rate calculations, inspection dates and methods, repair descriptions, and both verification tests with their results and dates.</li><li><strong>Plans and reports:</strong> retrofit/retirement plans and chronically-leaking-appliance reports, with their submission evidence.</li><li><strong>Disposal records:</strong> for mid-sized appliances (5–50 lb), the location, date of recovery, refrigerant type and quantity recovered, and transfer-for-reclamation details — retained by the disposing technician for three years.</li><li><strong>Purchase/sales records:</strong> refrigerant bought and sold, with the certification evidence the sales restriction requires.</li></ul><p>Format is flexible (paper or electronic), location is the workplace, and the standard is retrievability: a record you cannot produce is, to an inspector, a record you do not have. Notice how the whole program converges here — Module 7's cleanup log, Module 8's charge amounts, this module's leak math: all of it is one documentation habit wearing different hats. For smaller appliances outside the repair-rule thresholds, the same habits remain best practice even where a specific 608 paragraph does not compel them; customers with real asset management will ask for them, and your future self on the next call will too.</p><div class="callout"><strong>Key idea:</strong> If it is not written down with a date, an amount, and a name, it did not happen. Three years, every time.</div>`
    },
    {
      heading: "A Complete Leaker Call, Start to Finish",
      html: `<p>Walk the whole doctrine on one call. A strip-mall rooftop (comfort cooling, 60 lb charge of an ozone-depleting refrigerant) has needed 6 lb twice in the past year — the last addition exactly 182 days before today's 6 lb top-off.</p><ol><li><strong>Compute first:</strong> today's annualized rate ≈ (6 ÷ 60) × (365 ÷ 182) × 100 ≈ 20% — double the 10% comfort-cooling trigger. The repair obligation is engaged; 'top it and go' is off the table.</li><li><strong>Find it:</strong> oil staining at a flare and a compressor terminal gasket aim the electronic detector; two repeatable hits narrow to the flare; bubbles confirm the exact joint. (Detector neighborhoods, bubbles sign.)</li><li><strong>Repair within the window:</strong> recover the charge, remake the flare correctly, replace the gasket, fit a new drier (system opened — Module 6), nitrogen pressure-test the repair, evacuate to ≤500 microns with a passing decay test (Module 7).</li><li><strong>Initial verification</strong> of the repair is accomplished by that pressure/vacuum proof before recharge; charge is weighed in and recorded.</li><li><strong>Follow-up verification</strong> is scheduled within 30 days of the unit's return to normal operation: re-inspect the repaired joints, confirm no new additions needed and the recalculated rate is heading below trigger.</li><li><strong>Records:</strong> service entry with dates, quantities, methods, both verifications, technician identity — filed for three years. The owner gets a copy and a plain-language explanation of the obligation they own.</li></ol><p>Every module in this course fired on that call: P/T math, evacuation proof, drier discipline, recovery law, leak craft, and the arithmetic of compliance. That integration — not any single skill — is what 'advanced technician' means.</p><div class="callout"><strong>Key idea:</strong> Compute → locate → repair → verify → verify again → document. The sequence is the professionalism.</div>`
    }
  ],
  keyTerms: [
    { term: "Leak rate (annualized)", def: "[lb added ÷ full charge] × [365 ÷ days since last addition] × 100 — the percentage of charge lost per year." },
    { term: "Trigger rate", def: "The leak rate that obligates repair: comfort cooling 10%, commercial refrigeration 20%, industrial process refrigeration 30% (appliances ≥50 lb, ozone-depleting refrigerant)." },
    { term: "Full charge", def: "The appliance's total refrigerant capacity when correctly charged; the denominator of leak-rate math." },
    { term: "Leak inspection", def: "An examination using methods able to locate leaks (electronic, ultrasonic, bubble, imaging) — distinct from tests that only show a system leaks." },
    { term: "Initial verification test", def: "A post-repair check, before return to normal service, proving the repair holds." },
    { term: "Follow-up verification test", def: "A check within 30 days after the appliance returns to normal operation, proving the leak rate is below the trigger in service." },
    { term: "Retrofit or retirement plan", def: "The required alternative when leaks cannot be repaired within the window: a dated plan (within 30 days of the decision) completed within a year." },
    { term: "Chronically leaking appliance", def: "An appliance leaking 125% or more of its full charge in 12 months; must be reported to EPA by March 1 of the following year." },
    { term: "Electronic leak detector", def: "A heated-diode or infrared instrument that senses refrigerant vapor; technique — slow sweeps, repeat hits — decides its value." },
    { term: "Ultrasonic detector", def: "An instrument that hears the hiss of escaping gas under pressure." },
    { term: "Bubble solution", def: "A liquid applied to pressurized joints that grows bubbles at the exact leak point; the standard confirmation method." },
    { term: "UV dye", def: "A fluorescent additive to system oil that marks leak sites under UV light after run time." },
    { term: "Nitrogen standing test", def: "Pressurizing a recovered system with regulated dry nitrogen and watching for decay to prove whole-system tightness." },
    { term: "Record retention (608)", def: "Required service, leak, repair, disposal, and sales records kept for three years." },
    { term: "Owner/operator obligation", def: "The legal repair/record duties sit with the appliance owner/operator; technicians perform and document the work." },
    { term: "Rolling-average method", def: "The alternative leak-rate method: total refrigerant added in the last 365 days divided by full charge, times 100." }
  ],
  video: {
    title: "Advantages of Ultrasonic Leak Detection to Find Refrigerant Leaks!",
    embedUrl: "https://www.youtube.com/embed/JbXxE-WlQdo",
    note: "A field demonstration of ultrasonic leak detection on refrigerant systems, used here to anchor one method in the funnel; pair it with the module's electronic-detector and bubble-confirmation discipline — the video's method locates leaks under pressure, and bubbles remain the confirmation standard.",
    more: [
      { title: "How to find refrigerant leak in Air Conditioner? | 3 ways to find Refrigerant leak | Animation", url: "https://www.youtube.com/watch?v=uBdgnvPKf8Y" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A comfort-cooling appliance with an 80 lb full charge received 4 lb today; the previous addition was 365 days ago. Compute the leak rate and state whether the trigger is exceeded.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Rate = (4 ÷ 80) × (365 ÷ 365) × 100 = 0.05 × 100 = <strong>5%</strong>. Step 2: The comfort-cooling trigger is 10%. Step 3: 5% is below the trigger — no 30-day repair obligation is engaged by this calculation, though finding an easy leak remains good practice and the addition must be recorded.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> The same 80 lb appliance needs another 4 lb only 91 days later. Recompute the annualized rate from this addition and state the consequence.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Rate = (4 ÷ 80) × (365 ÷ 91) × 100 ≈ 0.05 × 4.01 × 100 ≈ <strong>20%</strong>. Step 2: That exceeds the 10% comfort-cooling trigger. Step 3: Consequence: the owner/operator must have the leak repaired within 30 days, with initial verification and a follow-up verification within 30 days of return to normal operation — all documented and retained three years.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A 200 lb commercial refrigeration system lost 50 lb over 365 days. Compute its rate, compare it with its sector trigger, and give the obligation.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Rate = (50 ÷ 200) × 1 × 100 = <strong>25%</strong>. Step 2: The commercial refrigeration trigger is 20%. Step 3: 25% exceeds it — repair within 30 days (plus the verification sequence and inspection schedule that follow from remaining above threshold), or the retrofit/retirement plan path if repairs cannot succeed.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Distinguish leak inspection, initial verification, and follow-up verification in one sentence each, with timing.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <em>Leak inspection</em> — a locating examination of the appliance, performed on the required schedule while it is above the trigger. Step 2: <em>Initial verification</em> — the post-repair proof (before return to normal service) that the repair holds. Step 3: <em>Follow-up verification</em> — the in-operation proof, within 30 days of returning to normal conditions, that the leak rate is now below the trigger.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> An electronic detector sings near a coil but bubbles show nothing at the joints you test. Give the disciplined next steps.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Treat the detector hit as a neighborhood, not an address — slow down, re-sweep, and confirm the hit repeats in the same place (single hits are rumors). Step 2: Bubble-test systematically across the whole neighborhood — coil bends, distributor tubes, and joints — with the system suitably pressurized. Step 3: Check detector health (reference check, sensor condition, drafts/solvents causing false alarms). Step 4: If location stays elusive, escalate method: nitrogen standing test to prove the leak exists in the isolated section, then section-by-section isolation. Never condemn a coil on an unconfirmed beep.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> List the contents a compliant service file for a regulated appliance must hold after a leak repair, and the retention period.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Service dates/types and technician identity/certification. Step 2: Refrigerant type and quantities added/recovered at each event (the leak-rate raw material). Step 3: Leak-rate calculations, inspection dates/methods, repair description. Step 4: Initial and follow-up verification results with dates, and any retrofit/retirement plan or chronic-leaker report evidence. Step 5: Retain for <strong>three years</strong>, retrievable at the workplace.</p>"
    }
  ],
  quiz: [
    {
      q: "The comfort-cooling trigger leak rate (appliances ≥50 lb, ozone-depleting refrigerant) is:",
      choices: ["20%", "30%", "10%", "35%"],
      answer: 2,
      explanation: "Correct: (c). Comfort cooling triggers repair at 10% per year. (a) 20% is commercial refrigeration. (b) 30% is industrial process refrigeration. (d) 35% appears in some older/superseded summaries, not the current EPA trigger table."
    },
    {
      q: "When a regulated appliance exceeds its trigger rate, repair must occur within:",
      choices: ["7 days", "30 days of discovery (with defined extensions such as a shutdown case)", "6 months", "The next scheduled maintenance, whenever that is"],
      answer: 1,
      explanation: "Correct: (b). Thirty days is the core obligation; recognized extensions (e.g., industrial process shutdown, up to 120 days) are specific, not general. (a) is stricter than the rule states. (c) and (d) describe exactly the open-ended delay the rule forbids."
    },
    {
      q: "An appliance (full charge 100 lb) receives 10 lb, 365 days after the last addition. Its leak rate is:",
      choices: ["1%", "10%", "100%", "Cannot be computed without pressures"],
      answer: 1,
      explanation: "Correct: (b). (10 ÷ 100) × (365 ÷ 365) × 100 = 10%. (a) drops a factor of ten. (c) confuses pounds added with the fraction of charge. (d) Pressures never enter leak-rate math — pounds, charge, and time do."
    },
    {
      q: "A follow-up verification test is performed:",
      choices: ["Before the repair begins", "Within 30 days after the appliance returns to normal operating conditions", "Only if the customer requests it", "At the one-year anniversary of the repair"],
      answer: 1,
      explanation: "Correct: (b). Follow-up verification proves the repair in real operation, inside the 30-day window after return to normal conditions. (a) describes pre-repair diagnosis. (c) It is a rule obligation, not an upsell. (d) A year later proves nothing about this repair."
    },
    {
      q: "Which record-retention period applies to 608 service/leak records?",
      choices: ["1 year", "3 years", "10 years", "Until the equipment is scrapped, then discard immediately"],
      answer: 1,
      explanation: "Correct: (b). Three years is the recurring retention standard across technician, seller, and owner/operator record duties. (a) is too short. (c) exceeds the stated standard. (d) Some disposal-related records must actually outlive the appliance's service by their retention clock — discarding at scrap day can destroy required records."
    },
    {
      q: "An appliance leaking 125% or more of its full charge in 12 months is:",
      choices: ["Automatically exempt from repair", "A chronically leaking appliance that must be reported to EPA by March 1 of the following year", "Required to be vented and replaced", "Only a concern if it uses R-22"],
      answer: 1,
      explanation: "Correct: (b). The chronic-leaker report (with the repair efforts described) is a defined obligation. (a) The opposite — it is the most serious leak category. (c) Venting is prohibited, full stop. (d) The rule is about charge loss rate for regulated appliances, not one refrigerant's fame."
    },
    {
      q: "Which method pinpoints a leak's exact location for repair?",
      choices: ["A standing pressure test alone", "Bubble solution on the pressurized suspect joint (after the detector narrows the area)", "Checking the sight glass", "Weighing the recovery cylinder"],
      answer: 1,
      explanation: "Correct: (b). Bubbles grow at the escape point itself; detectors neighborhood, bubbles address. (a) A standing test proves a leak exists, not where. (c) A sight glass reports liquid state, never location. (d) Weighing quantifies charge, not geography."
    },
    {
      q: "If required repairs fail to bring the leak rate below the trigger, the compliant path is:",
      choices: ["Keep topping off and stop recording additions", "A retrofit or retirement plan developed within 30 days of the decision, completed within a year", "Vent the remaining charge and abandon the unit", "Raise the trigger rate by reclassifying the appliance yourself"],
      answer: 1,
      explanation: "Correct: (b). The plan path is the rule's designed exit for unrepairable leakers. (a) adds falsified records to an ongoing violation. (c) Venting is prohibited and abandonment is not retirement. (d) Sector classification follows the appliance's actual use, not preference."
    }
  ],
  studyGuide: `
<h3>Module 10 — Leak Detection, Repair Rules &amp; Recordkeeping: Quick Reference</h3>
<div class="formula">Leak rate % = (lb added ÷ full charge) × (365 ÷ days since last addition) × 100</div>
<p><strong>Triggers (≥50 lb, ozone-depleting):</strong> comfort cooling 10% · commercial refrigeration 20% · industrial process 30% · other appliances 10%.</p>
<p><strong>Worked:</strong> 6 lb into 60 lb at 365 days = 10% (at the comfort trigger). Same 6 lb at 182 days ≈ 20% (double it). Interval is destiny.</p>
<p><strong>Obligation chain:</strong> repair within 30 days → initial verification (post-repair, pre-service) → follow-up verification within 30 days of normal operation → scheduled leak inspections while above trigger → or retrofit/retirement plan (plan in 30 days, complete in 1 year).</p>
<p><strong>Chronic leaker:</strong> ≥125% of charge in 12 months → report to EPA by March 1 of the following year.</p>
<p><strong>Detection funnel:</strong> oil evidence → electronic/ultrasonic narrowing → bubbles pinpoint. Locating methods define a leak inspection; standing tests prove existence, not location.</p>
<p><strong>Records:</strong> dates, technician/certification, refrigerant types &amp; quantities, leak calcs, inspections, repairs, both verifications, plans/reports, disposal details — <strong>3 years</strong>, retrievable.</p>
<p><strong>Scope note:</strong> 608's 82.157 repair regime targets ozone-depleting refrigerants; venting/certification/recovery/sales rules also cover HFCs, and AIM Act rules extend management duties to many larger HFC systems. Professional posture — find it, fix it fast, verify, document — satisfies every version.</p>
`
};
