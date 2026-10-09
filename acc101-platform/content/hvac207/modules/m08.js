// HVAC 207 - Module 8: Refrigerant Management for Large Charges
module.exports = {
  number: 8,
  slug: "refrigerant-management-large-charges",
  title: "Refrigerant Management for Large Charges",
  estTime: "3–4 hours",
  objectives: [
    "State which appliances the EPA leak repair rules cover: full charge of 50 lb or more of ozone-depleting refrigerant.",
    "Recall the trigger leak rates by sector — 20% commercial refrigeration, 10% comfort cooling, 30% industrial process refrigeration — and compute a leak rate from charge records.",
    "Lay out the repair timeline once a trigger is exceeded: repair within 30 days, verification tests, and the retrofit-or-retire path when repair fails.",
    "Describe the recordkeeping that makes a large-charge account defensible: charge, additions, leak calculations, inspections, and repairs kept for 3 years.",
    "Place low-pressure (Type III) equipment in the picture: chillers, purge units, and rupture discs, and why their leak story differs."
  ],
  sections: [
    {
      heading: "Why Large Charges Get Their Own Rules",
      html: `
<p>A reach-in holds ounces; a supermarket rack holds <em>hundreds or thousands of pounds</em> of refrigerant. One slow leak on a rack can vent more refrigerant in a season than a hundred small cabinets contain altogether — which is why EPA's Section 608 leak repair program is aimed squarely at big systems. The regulatory line is drawn at <strong>appliances with a full charge of 50 pounds or more</strong>. Below that line, the familiar rules still apply — no venting, certified technicians, certified recovery equipment, proper disposal. At and above that line, owners and operators take on an affirmative duty: track the leak rate, and when it exceeds the sector's trigger, repair it on a deadline.</p>
<p>One scope note from EPA's own program page, worth teaching precisely: the leak repair duties described in this module attach to appliances leaking <strong>ozone-depleting refrigerant</strong> (the CFC/HCFC world the rules were written for, such as the R-22 still running in older commercial plants). EPA's broader refrigerant management rules — technician certification to purchase and service, recovery before opening or disposal, the ban on knowingly venting, and reclaim-before-resale — reach substitute refrigerants such as HFCs as well. When in doubt on a specific account, the account's compliance professional and EPA's current page govern; this module teaches the framework and the verified numbers.</p>
<div class="callout"><strong>Key idea:</strong> 50 lb is the magic number. At or above it, leaks stop being merely a service issue and become a regulated duty with rates, deadlines, and records.</div>`
    },
    {
      heading: "Leak Rates and Trigger Rates",
      html: `
<p>The leak rate is computed every time refrigerant is added, from the account's records: how much was added, over what period, against the appliance's full charge. EPA expresses it as an annualized percentage of full charge. The <strong>trigger rates</strong> — the leak rates that start the repair clock — are set by sector in the federal rule:</p>
<ul>
<li><strong>Commercial refrigeration: 20%</strong> of full charge per year</li>
<li><strong>Comfort cooling: 10%</strong> per year</li>
<li><strong>Industrial process refrigeration: 30%</strong> per year</li>
<li><strong>All other appliances: 10%</strong> per year</li>
</ul>
<p><strong>Worked example.</strong> A supermarket's medium-temperature rack has a full charge of 800 lb. Over the last 12 months the service records show 200 lb added. Step 1: Leak rate = 200 ÷ 800 = 25% per year. Step 2: Compare to the commercial refrigeration trigger: 25% exceeds 20%. Step 3: The duty to repair is triggered — the clock in the next section starts from discovery of the exceedance. Contrast: the same 200 lb added to a 2,000 lb industrial process system is a 10% rate, comfortably under its 30% trigger; identical pounds, different legal meaning, because the rule runs on rates and sector, not raw weight.</p>
<div class="callout"><strong>Key idea:</strong> No accurate records, no leak rate — and an owner who cannot compute the rate cannot prove compliance. Every jug out and every ounce in gets written down, every time.</div>`
    },
    {
      heading: "The 30-Day Clock and What Counts as Fixed",
      html: `
<p>Once a covered appliance is discovered leaking above its trigger rate, the owner/operator must <strong>repair the leaks within 30 days</strong> of discovery (industrial process equipment working under shutdown conditions follows an extended allowance, up to 120 days, under the rule's terms). "Repair" is a defined performance, not a hopeful gesture: the leaks are identified and fixed, an <strong>initial verification test</strong> is performed before additional refrigerant is charged back, and a <strong>follow-up verification test</strong> is performed within 10 days of the initial test, under operating conditions, to prove the repair held. Appliances that exceed their trigger also go onto a schedule of periodic <strong>leak inspections</strong> — quarterly or annual depending on size and sector — until their leak rate behaves.</p>
<p>If leaks cannot be brought under control, the rule's fork in the road is <strong>retrofit or retire</strong>: prepare a plan to retrofit the appliance to a different refrigerant or retire it, on the rule's timetable (the plan path commonly runs to completion within 12 months), rather than feeding a leaker forever. And one number every large-account tech should know: if a system with 50 lb or more loses <strong>125% or more of its full charge in one calendar year</strong>, the owner must report that to EPA. Chronic failure is not a private matter between a store and its service company.</p>
<div class="callout"><strong>Key idea:</strong> Trigger exceeded → repair in 30 days → initial verification → follow-up verification within 10 days → inspections until the rate behaves → retrofit/retire if it never does.</div>`
    },
    {
      heading: "Records: The Paper Half of Refrigerant Management",
      html: `
<p>Large-charge compliance lives or dies on records, kept <strong>3 years</strong>: the appliance's full charge and how it was determined; every refrigerant addition and removal with dates and amounts; leak rate calculations; leak inspection reports; repair records and both verification tests; and the technician certifications of everyone who touched the system. Service companies keep their own parallel records of work performed and refrigerant handled, and refrigerant purchases are restricted to certified technicians (or those they supervise within the rule's terms) in the first place — the sales restriction from your EPA Core studies, operating here at commercial scale.</p>
<p>Notice what this does to your daily habits as a tech. "Topped off the rack, about half a jug" is not a service note; it is a compliance failure with your name on it. Weights on and off the scale, dates, the appliance identified, the reason for the addition (routine top-off after a repair is a different story from makeup for a known leaker), and the leak calculation if the addition triggers one — that is the professional standard this course's lab work assumes. The refrigerant log is also a diagnostic gold mine: a rising trend of additions <em>is</em> a leak announcement, usually earlier than any detector finds it (Module 10 puts the detector to work).</p>
<p>There is a service-culture point hiding in the paperwork: shops that weigh every cylinder out and back, and reconcile the difference against their tickets weekly, catch their leaks — and their sloppy habits — while both are still small. Refrigerant is tracked like money because, legally and literally, it behaves like money: inventoried, restricted, and missed when it walks away unexplained.</p>`
    },
    {
      heading: "The Low-Pressure Cousins: Type III Territory",
      html: `
<p>Not every large charge is high-pressure. <strong>Low-pressure appliances</strong> — centrifugal and other chillers operating under vacuum on the low side, the Type III world — hold large charges too, and their leak story runs in reverse: when a low-pressure machine is running, its evaporator side is below atmospheric pressure, so leaks draw air and moisture <em>inward</em> rather than blowing refrigerant out. That is why low-pressure chillers carry <strong>purge units</strong>, which continuously remove the non-condensable air that leaks in (and inevitably carry a small amount of refrigerant out with it — one reason purge operation is itself monitored in this world). Their pressure relief path is a <strong>rupture disc</strong> rather than a reseating relief valve: a one-time membrane that bursts at its rated pressure to protect the vessel, venting the charge if it ever goes — a catastrophic-release device you hope never to see used.</p>
<p>You will meet Type III in depth in the certification capstone, but place it in this module's map now: large charge + low pressure + inward leaks + purge units + rupture discs. A chiller that "never needs refrigerant added" is not necessarily tight — it may be quietly filling with air while its purge unit does the visible venting.</p>
<div class="callout"><strong>Key idea:</strong> High-pressure systems leak out and announce themselves in the refrigerant log; low-pressure systems leak <em>in</em>, and the purge unit is where their story is told.</div>`
    }
  ],
  keyTerms: [
    { term: "Full charge", def: "The total refrigerant an appliance holds when correctly charged; the denominator of every leak rate calculation." },
    { term: "Leak rate", def: "Refrigerant lost over a period, expressed as an annualized percentage of full charge; computed whenever refrigerant is added." },
    { term: "Trigger rate", def: "The leak rate that starts the legal duty to repair: 20% commercial refrigeration, 10% comfort cooling, 30% industrial process refrigeration, 10% all other appliances." },
    { term: "50-lb threshold", def: "The full-charge size at and above which EPA leak repair rules apply to an appliance." },
    { term: "30-day repair duty", def: "The requirement to repair leaks within 30 days of discovering the trigger rate is exceeded (extended allowance applies to certain industrial process shutdown situations)." },
    { term: "Initial verification test", def: "The leak check performed after repair and before recharging, proving the repair was made." },
    { term: "Follow-up verification test", def: "A second leak check within 10 days of the initial test, under operating conditions, proving the repair held." },
    { term: "Leak inspection", def: "Scheduled periodic inspections required for covered appliances that have exceeded a trigger rate." },
    { term: "Retrofit or retire", def: "The required path when leaks cannot be controlled: convert the appliance to another refrigerant or take it out of service, on the rule's timetable." },
    { term: "125% report", def: "The owner report to EPA required when a system of 50 lb or more leaks 125% or more of its full charge in one calendar year." },
    { term: "Recordkeeping (3 years)", def: "Retention period for charge, addition, calculation, inspection, and repair records for covered appliances." },
    { term: "Sales restriction", def: "The rule limiting refrigerant purchase to Section 608 certified technicians and those working under them as allowed." },
    { term: "Purge unit", def: "A device on a low-pressure chiller that removes non-condensable air (and traces of refrigerant) drawn in through vacuum-side leaks." },
    { term: "Rupture disc", def: "A one-time pressure relief membrane on low-pressure vessels that bursts at its rating to protect the vessel." },
    { term: "Low-pressure appliance", def: "Equipment operating under vacuum on its low side (Type III), such as centrifugal chillers." },
    { term: "Non-condensables", def: "Air and other gases that collect in a system, raising pressures and, in low-pressure machines, entering through leaks." },
    { term: "Reclaim", def: "Reprocessing used refrigerant to industry purity specifications before it can be resold to another owner." },
    { term: "Owner/operator duty", def: "The legal responsibility for leak repair and records rests with the appliance's owner/operator, not only the service technician." }
  ],
  video: {
    title: "Refrigerant RECOVERY Procedure Step by Step! Fully Recovered!",
    embedUrl: "https://www.youtube.com/embed/os9gKLf7LJg",
    note: "A complete, by-the-book refrigerant recovery performed step by step. Recovery discipline — certified equipment, proper cylinders, no venting — is the hands-on foundation under every rule in this module, and this is the procedure done correctly on camera.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A cold-storage warehouse rack (commercial refrigeration) has a full charge of 500 lb. Records show 130 lb added over the past 12 months. (a) Compute the leak rate. (b) Has the trigger been exceeded? (c) What duty follows, and on what clock?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Leak rate = 130 ÷ 500 = <strong>26% per year</strong>. Step 2: The commercial refrigeration trigger is 20%, so <strong>yes, it is exceeded</strong>. Step 3: The owner/operator must have the leaks repaired <strong>within 30 days of discovery</strong>, with initial verification before recharging and follow-up verification within 10 days — plus scheduled leak inspections while the appliance remains in the over-trigger population.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> The same 130 lb is added over a year to two other appliances: a comfort-cooling chiller with a 1,300 lb charge, and an industrial process system with a 260 lb charge. Compute each leak rate and state which appliances trigger the repair duty.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Chiller: 130 ÷ 1,300 = <strong>10%</strong> — the comfort cooling trigger is 10%, so a rate at the trigger deserves the owner's immediate attention and, as it rises above 10%, the duty attaches. Step 2: Industrial process: 130 ÷ 260 = <strong>50%</strong> — far above its 30% trigger; the repair duty applies. Step 3: Lesson: pounds alone decide nothing; rate against sector trigger decides everything.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A repair crew fixes a rack leak on day 1, recharges immediately, and plans to “check it next quarter.” List the two verification steps they skipped and the deadlines attached to each.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The <strong>initial verification test</strong> — a leak check of the repair performed <em>before</em> additional refrigerant was charged back, not after. Step 2: The <strong>follow-up verification test</strong> — performed <strong>within 10 days</strong> of the initial test, at operating conditions, to prove the repair held in service. Step 3: “Next quarter” satisfies neither; an unverified repair is, in the rule's eyes, an unfinished one.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A store's rack has needed steady additions for three years, repairs never hold, and this year it lost 130% of its full charge. Name the two regulatory consequences now in play beyond the ordinary 30-day duty.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Losing <strong>125% or more of full charge in one calendar year</strong> triggers the owner's duty to <strong>report the losses to EPA</strong>. Step 2: A system whose leaks cannot be brought under the trigger moves onto the <strong>retrofit-or-retire</strong> path — a plan to convert or remove it on the rule's timetable, instead of indefinite top-offs. Step 3: Continued “gas and go” service after this point is not neutrality; it is participation in non-compliance.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A low-pressure chiller's refrigerant log shows almost no additions for years, yet the machine's performance is slipping and its purge unit runs constantly. Explain why “no additions” does not clear this machine, in leak terms.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A running low-pressure machine's evaporator side is below atmospheric pressure, so leaks run <em>inward</em>: air and moisture enter instead of refrigerant leaving. Step 2: The purge unit constantly removes that air (with traces of refrigerant), which is the visible cost of the inward leak — a hard-running purge is a leak symptom. Step 3: The refrigerant log stays clean because the loss mechanism is air in, not refrigerant out; diagnosis here starts at the purge and the machine's tightness, not the charging records.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> List the records a service company should be able to produce for a covered rack account covering the last 3 years.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The appliance's <strong>full charge</strong> and how it was determined. Step 2: Every <strong>addition and removal</strong> of refrigerant, dated and weighed, with the reason. Step 3: <strong>Leak rate calculations</strong> made at each addition. Step 4: <strong>Leak inspection reports</strong> and <strong>repair records with both verification tests</strong>. Step 5: The <strong>Section 608 certifications</strong> of the technicians who performed the work.</p>"
    }
  ],
  quiz: [
    {
      q: "EPA leak repair rules apply to appliances with a full charge of:",
      choices: ["5 lb or more", "50 lb or more", "500 lb or more", "Any size, equally"],
      answer: 1,
      explanation: "Correct: (b). The 50-lb line defines the covered population for leak repair duties. (a) Five pounds is small-appliance territory (Type I). (c) 500 lb would exempt most racks, the very systems the rule targets. (d) Smaller appliances have other duties — venting ban, recovery, certification — but not the leak-rate repair program."
    },
    {
      q: "The trigger leak rate for commercial refrigeration is:",
      choices: ["10% of full charge per year", "20% of full charge per year", "30% of full charge per year", "35% of full charge per year"],
      answer: 1,
      explanation: "Correct: (b). Commercial refrigeration triggers at 20%. (a) 10% is comfort cooling (and all other appliances). (c) 30% is industrial process refrigeration. (d) 35% was the pre-2016 commercial/IPR threshold — lowered by the 2016 rule update."
    },
    {
      q: "A 600-lb commercial refrigeration system had 90 lb added in 12 months. Its leak rate and status:",
      choices: ["15% — below trigger", "15% — above trigger", "90% — above trigger", "6.7% — below trigger"],
      answer: 0,
      explanation: "Correct: (a). 90 ÷ 600 = 15%, below the 20% commercial trigger (though worth watching). (b) misreads the comparison. (c) confuses pounds added with percent of charge. (d) inverts the division (600 ÷ 90 is not a leak rate)."
    },
    {
      q: "Once a trigger is exceeded, leaks must be repaired within:",
      choices: ["10 days", "30 days", "6 months", "The next scheduled PM visit"],
      answer: 1,
      explanation: "Correct: (b). Thirty days from discovery is the repair deadline (with an extended allowance existing for certain industrial process shutdown situations). (a) Ten days is the follow-up verification window, not the repair window. (c) and (d) describe procrastination, not the rule."
    },
    {
      q: "The follow-up verification test is due:",
      choices: ["Before any refrigerant is added back", "Within 10 days of the initial verification test", "At the next quarterly inspection", "Only if the customer complains"],
      answer: 1,
      explanation: "Correct: (b). Follow-up verification under operating conditions within 10 days proves the repair held. (a) describes the <em>initial</em> verification, which happens before recharge. (c) Quarterly events are leak inspections, a separate obligation. (d) Customer complaints are not a compliance mechanism."
    },
    {
      q: "Leak repair and service records for a covered appliance must be kept for:",
      choices: ["1 year", "3 years", "Until the warranty expires", "30 days"],
      answer: 1,
      explanation: "Correct: (b). Three years is the retention period for the covered records. (a) and (d) are too short to cover an audit of last year's leak rate. (c) Warranty terms are a manufacturer's commercial matter, unrelated to federal recordkeeping."
    },
    {
      q: "A system of 50 lb or more that leaks 125% or more of its full charge in a calendar year triggers:",
      choices: ["Nothing extra — just keep repairing", "An owner report to EPA", "Automatic loss of technician certification", "A mandatory refrigerant change"],
      answer: 1,
      explanation: "Correct: (b). The 125% loss level requires the owner to report to EPA. (a) Chronic loss at that scale is precisely what the report requirement exists to catch. (c) Certification consequences follow violations and process, not a leak statistic alone. (d) Retrofit may come through the retrofit-or-retire path, but the immediate named consequence of the 125% figure is the report."
    },
    {
      q: "A low-pressure chiller (Type III) with a big inward leak most visibly shows:",
      choices: ["A rapidly emptying refrigerant cylinder log", "A purge unit that runs constantly, removing air that leaked in", "High head pressure from overcharge", "Frost on the suction line"],
      answer: 1,
      explanation: "Correct: (b). Vacuum-side leaks draw air in; the purge unit's workload tells the story. (a) Inward leaks do not consume refrigerant at anything like that rate. (c) Non-condensables do raise condensing pressure on the high side, but the signature field observation in this module is the hard-working purge. (d) Frost patterns belong to evaporator-side high-pressure equipment, not chiller leak diagnosis."
    }
  ],
  studyGuide: `
<h3>Module 8 — Refrigerant Management for Large Charges: Quick Reference</h3>
<p><strong>Covered:</strong> full charge ≥ 50 lb, ozone-depleting refrigerant (broader management rules — certification, recovery, no venting, reclaim — also reach HFC substitutes).</p>
<p><strong>Trigger rates (annual % of full charge):</strong> Commercial refrigeration <strong>20%</strong> · Comfort cooling <strong>10%</strong> · Industrial process <strong>30%</strong> · All other <strong>10%</strong>.</p>
<div class="formula">Leak rate = (refrigerant added over the period ÷ full charge), annualized — compute it at every addition</div>
<p><strong>Timeline:</strong> repair within <strong>30 days</strong> of discovery → initial verification before recharge → follow-up verification within <strong>10 days</strong> → periodic leak inspections → retrofit/retire if uncontrollable → report to EPA at <strong>125%</strong> lost in a year.</p>
<p><strong>Records:</strong> full charge, dated weighed additions/removals, calculations, inspections, repairs, verifications, technician certifications — kept <strong>3 years</strong>.</p>
<p><strong>Type III footnote:</strong> low-pressure chillers leak inward; purge units remove the air; rupture discs are one-time vessel protection.</p>
<p><strong>Self-check:</strong> From a bare set of addition records, can you compute the rate, compare the trigger, and recite the resulting duties without notes? That is the module.</p>
`
};
