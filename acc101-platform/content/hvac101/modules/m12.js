// HVAC 101 - Module 12: System Start-Up, Performance Checks & First Troubleshooting
module.exports = {
  number: 12,
  slug: "startup-performance-first-troubleshooting",
  title: "System Start-Up, Performance Checks & First Troubleshooting",
  estTime: "3–4 hours",
  objectives: [
    "Work a start-up checklist in order: installation checks, evacuation proof, charge method, and stabilized measurements.",
    "Assemble the standard performance picture: suction and head pressures, superheat, subcooling, and air temperatures.",
    "Use symptom thinking: match a pattern of readings to a family of causes instead of guessing a part.",
    "Separate airflow faults from refrigerant faults using the direction of superheat, subcooling, and pressures together.",
    "Decide when a system is performing, when it needs a targeted repair, and when to stop and escalate."
  ],
  sections: [
    {
      heading: "Start-Up Is a Sequence, Not an Event",
      html: `
<p>A professional start-up verifies a chain of conditions in an order that protects the equipment. <strong>Before power:</strong> confirm the equipment matches the job (refrigerant on the nameplate matches the cylinder on the truck), piping is complete and pressure-tested, condensate drainage is clear, electrical connections are correct and tight, the thermostat and controls are set, filters are in, and panels and clearances are right. <strong>Before charge:</strong> the evacuation record exists — 500 microns or below with a standing test that leveled — because a start-up on a wet or leaky system builds failure into day one. <strong>At first run:</strong> confirm rotation and operation of fans and compressor, listen for the abnormal before reaching for gauges, and watch the first minutes for immediate protective trips.</p>
<p><strong>Then, and only then, performance checks.</strong> Install the charge by the correct method for the installed metering device — weigh-in, superheat, or subcooling as Module 11 assigns. Let the system stabilize: a residential system needs a sustained run with steady indoor load before its numbers mean anything, and a refrigerated box needs to be pulling toward its working temperature. Measurements taken in the first excited minutes describe start-up, not performance.</p>
<p>The checklist habit is not bureaucracy; it is the difference between finding a reversed fan or a closed service valve at minute two and finding it after a compressor has run an hour against it. Sequence is protection.</p>
<div class="callout"><strong>Key idea:</strong> Verify, evacuate, charge by the right method, stabilize, measure. Any step skipped becomes a variable in every later diagnosis.</div>`
    },
    {
      heading: "The Standard Performance Picture",
      html: `
<p>Six numbers, taken together on a stabilized system, describe refrigerant-side health for the systems in this course:</p>
<ul>
<li><strong>Suction pressure → saturation temperature</strong> (P/T chart): where the coil is boiling.</li>
<li><strong>Suction line temperature</strong>, giving <strong>superheat</strong>: how the evaporator is being fed.</li>
<li><strong>Head pressure → condensing saturation temperature</strong>: how hard heat rejection is working, judged against ambient.</li>
<li><strong>Liquid line temperature</strong>, giving <strong>subcooling</strong>: the liquid inventory's report.</li>
<li><strong>Air in and out temperatures</strong> at the evaporator: evidence heat is actually being picked up.</li>
<li><strong>Ambient and space temperatures</strong>: the context every other number is judged in.</li>
</ul>
<p><strong>Worked Example — a healthy R-410A picture.</strong> On a warm afternoon a stabilized TXV system shows: suction 118 psig (40°F saturation) with a 52°F suction line — 12°F superheat. Head 317 psig (100°F saturation) with a 90°F liquid line — 10°F subcooling, matching the nameplate target. Air crosses the indoor coil and gives up heat steadily, and the space is holding its set point. Step 1: Each value is sane alone. Step 2: More importantly, they agree with each other; no value is asking for a story another value contradicts. That agreement is what 'performing' means, and it is documented before leaving, as the baseline the next visit will compare against.</p>
<div class="callout"><strong>Key idea:</strong> Never diagnose from one number. Performance is a pattern, and patterns are read across pressures, temperatures, and the day's conditions simultaneously.</div>`
    },
    {
      heading: "Symptom Thinking: Patterns, Not Parts",
      html: `
<p>First troubleshooting is pattern matching disciplined by the physics of the earlier modules. Learn four refrigerant-side signatures:</p>
<ul>
<li><strong>Undercharge (fixed system):</strong> low suction, high superheat, low subcooling. The coil starves and the condenser holds little liquid. On a TXV system the early signature is mainly falling subcooling, with superheat defended until charge gets very low.</li>
<li><strong>Overcharge:</strong> on a fixed system, superheat is low and floodback threatens; on a TXV system, subcooling and head pressure climb while superheat stays deceptively normal.</li>
<li><strong>Restriction</strong> (plugged screen, drier, kink): suction low and superheat high like undercharge, but subcooling is normal-to-high because liquid stacks behind the blockage — the split between superheat and subcooling separates restriction from undercharge.</li>
<li><strong>Poor heat rejection</strong> (dirty condenser, weak fan, recirculation, non-condensables): head pressure and condensing temperature high for the ambient, discharge hot, capacity sagging; suction often rides high-normal because the whole loop is running hot.</li>
</ul>
<p>Notice that every signature is a sentence made of three values, not a word made of one. Low suction alone appears in undercharge, restriction, and low airflow. The companions — superheat direction and subcooling direction — are what separate the stories, which is why the full performance picture is taken before any part is named.</p>
<div class="callout"><strong>Key idea:</strong> Ask of every reading: what family of causes produces this whole pattern? Then test the cheapest, most likely member of the family first.</div>`
    },
    {
      heading: "Airflow Faults vs. Refrigerant Faults",
      html: `
<p>The most expensive confusion in first troubleshooting is mistaking an airflow fault for a refrigerant fault, because the repair for one — charge adjustment — actively worsens the other. The separators are consistent. <strong>Low indoor airflow</strong> drops suction pressure and drops the coil toward freezing; on fixed systems superheat tends to fall (the coil cannot boil what it is fed), while an honest temperature measurement across the coil and a look at the filter, blower, and coil face confirm air starvation physically. <strong>Low charge</strong> drops suction too, but superheat climbs steeply and subcooling sags. Read together, the pair never truly impersonates each other; they only do so when superheat and subcooling are skipped and suction pressure is judged alone.</p>
<p><strong>Worked Example — the fork in the road.</strong> A piston R-22 system shows suction sagged below its 68.5 psig (40°F) comfort-cooling anchor. Path A measurements: suction line gives superheat of only a few degrees, coil frosting, filter matted — airflow fault; the repair is air, and the charge was innocent. Path B measurements on a twin system: superheat very high, subcooling near zero, filter clean, blower strong — refrigerant fault; find the leak, repair, evacuate, and charge by superheat. Same first gauge reading, opposite repairs. The difference was two temperatures and a filter inspection, totaling five minutes.</p>
<p>Outdoor airflow has the same logic. Before touching charge on a high-head call, look at the condenser: coil face, fan speed and blade, clearances, recirculation paths. Your hands and eyes are diagnostic instruments the gauge set cannot replace.</p>
<div class="callout"><strong>Key idea:</strong> Suction pressure down plus superheat down suggests air. Suction down plus superheat up plus subcooling down suggests charge. The thermometer arbitrates what the gauge cannot.</div>`
    },
    {
      heading: "First Troubleshooting Workflow and a Recap",
      html: `
<p>Work every no-cool or weak-cool call in the same order until it becomes reflex:</p>
<ul>
<li><strong>1. Interview and observe:</strong> What changed, when, and what does the space feel like? Ice anywhere? Unusual sounds or smells?</li>
<li><strong>2. Air side first:</strong> thermostat call, filters, blower, coil face, registers, condenser fan and coil. Most calls end somewhere in this step.</li>
<li><strong>3. Stabilize and take the full picture:</strong> both pressures, both line temperatures, air temperatures, ambient — converted and compared as a pattern.</li>
<li><strong>4. Name the family, test the likeliest cause,</strong> repair, and re-measure the whole picture to prove the pattern normalized.</li>
<li><strong>5. Document:</strong> readings before and after, parts, quantities, and the verified result. The next visit starts from your baseline.</li>
</ul>
<p>Know the stopping rules. Stop and escalate when readings contradict every pattern you know, when a repair needs tools or certifications beyond the task, when safety is in question, or when the compressor itself is the confirmed fault and the system's contamination state must be assessed before replacement. Escalation with good documented readings is professionalism, not defeat.</p>
<p><strong>Recap:</strong></p>
<ul>
<li>Start-up is a sequence: verify, pressure test, evacuate and prove it, charge by device, stabilize, measure.</li>
<li>Performance is six numbers in agreement, documented as a baseline.</li>
<li>Signatures: undercharge, overcharge, restriction, poor heat rejection — each a pattern of pressure, superheat, and subcooling.</li>
<li>Airflow before charge, always; thermometers separate the twins that gauges confuse.</li>
<li>This module is the doorway to NATE-style thinking: Ready-to-Work measures, reasons, and verifies — in that order.</li>
</ul>`
    }
  ],
  keyTerms: [
    { term: "Start-up checklist", def: "The ordered verification of installation, evacuation, charge, and operation before a system is judged." },
    { term: "Stabilization", def: "Sustained running until pressures, temperatures, and load settle into representative values." },
    { term: "Performance picture", def: "The set of pressures, line temperatures, superheat, subcooling, and air temperatures read together as a pattern." },
    { term: "Symptom pattern", def: "A characteristic combination of readings that points to a family of causes." },
    { term: "Undercharge signature", def: "Low suction, high superheat, and low subcooling on a fixed system; falling subcooling first on a TXV system." },
    { term: "Overcharge signature", def: "Low superheat on fixed systems; high subcooling and head pressure with normal-looking superheat on TXV systems." },
    { term: "Restriction signature", def: "Low suction and high superheat with normal-to-high subcooling, because liquid stacks behind the blockage." },
    { term: "Baseline readings", def: "The documented healthy measurements from start-up or repair completion, used for future comparison." },
    { term: "Temperature split", def: "Air temperature change across a coil, supporting evidence of airflow and heat pickup." },
    { term: "Protective trip", def: "A shutdown by a pressure switch or overload reporting an abnormal operating condition." },
    { term: "Escalation", def: "Handing a fault upward with documented readings when it exceeds the task, tools, or safety limits at hand." },
    { term: "Commissioning", def: "The full process of verifying an installation performs as designed, including documented start-up checks." },
    { term: "Floodback risk", def: "The compressor danger present whenever measured superheat approaches zero in operation." },
    { term: "Heat rejection fault", def: "A condenser-side failure — dirt, fan, recirculation, non-condensables — that raises head pressure for the ambient." },
    { term: "Service valve", def: "A valve at the equipment that isolates sections or gives gauge access; its position is part of start-up verification." },
    { term: "Callback", def: "A return visit for the same complaint, usually the price of a skipped verification step." }
  ],
  video: {
    title: "HVAC Training Basics for New Techs: Gauges, Pressures, Temps, Check the Charge!",
    embedUrl: "https://www.youtube.com/embed/NOWQsrjm4AY",
    note: "A new-technician session pulling gauges, pressures, and temperatures together into a charge check — the same full-picture habit this module teaches. Watch how each reading is taken in context rather than judged alone.",
    more: [
      { title: "Refrigerant Overcharge Troubleshooting and Prevention", url: "https://www.youtube.com/watch?v=S2It3x3qGj0" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Put this start-up into correct order: (a) judge performance readings, (b) verify nameplate refrigerant and installation completeness, (c) run the system until stabilized, (d) confirm the evacuation record, (e) install charge by the correct method.</p>",
      solution: "<p><strong>Answer: b, d, e, c, a.</strong> Step 1: Identity and completeness first, because everything downstream depends on them. Step 2: Evacuation proof before refrigerant is committed. Step 3: Charge by the device's method. Step 4: Stabilize, since early readings describe start-up rather than performance. Step 5: Only now judge the picture.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A stabilized TXV R-410A system shows 118 psig suction, 52°F suction line, 317 psig head, and an 80°F liquid line against a 10°F subcooling target. Compute both values and give the verdict.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Superheat = 52 − 40 = <strong>12°F</strong>, a healthy defended value. Step 2: Subcooling = 100 − 80 = <strong>20°F</strong>, double the target. Step 3: Verdict — <strong>overcharged</strong>: superheat looks fine because the valve defends it; recover refrigerant until subcooling approaches 10°F, then re-verify.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A fixed-orifice system shows low suction, very high superheat, and subcooling near zero. A second shows low suction, very high superheat, and subcooling above normal. Name each fault family and the reasoning difference.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: First system — <strong>undercharge</strong>: little liquid anywhere, so both the coil and the condenser run dry of inventory. Step 2: Second system — <strong>restriction</strong>: liquid exists but stacks behind a blockage, so the condenser side shows inventory while the coil starves. Step 3: Subcooling is the separator; suction and superheat alone cannot tell these apart.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> On a weak-cool call the suction pressure is low. List, in order, what you check before connecting a refrigerant cylinder, and why the cylinder is last.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Air side — thermostat call, filter, blower, indoor coil face, registers, outdoor fan and coil. Step 2: Full stabilized picture — both pressures, both line temperatures, air temperatures, ambient — converted to superheat and subcooling. Step 3: The pattern names its family. Step 4: The cylinder is last because adding refrigerant treats only the undercharge family, and on airflow or restriction faults it installs tomorrow's overcharge on top of today's unfixed cause.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A condenser on a 95°F day shows condensing temperature far above what the same clean system showed on earlier 95°F days, and the fan is turning slowly. Walk the diagnosis to the repair.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Same ambient, worse condensing — the machine changed, not the weather; this is a heat-rejection fault. Step 2: The slow fan is the visible cause: starved airflow shrinks the condensing zone and pressure climbs to compensate. Step 3: Repair the fan or its motor, clean the coil while on site, restart, stabilize, and prove head pressure and subcooling returned to the documented pattern before leaving.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Your readings on a call contradict every pattern in this module: pressures plausible, superheat and subcooling both strange, history unclear. What do you do, and what makes it professional rather than a failure?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Re-verify the measurement chain — refrigerant setting, clamp placement, stabilization — because contradictory data is often instrument error. Step 2: If the contradiction survives honest re-measurement, stop before replacing parts or adjusting charge, document the full picture, and escalate. Step 3: It is professional because the documentation hands the next technician verified evidence instead of a disturbed system and a guess.</p>"
    }
  ],
  quiz: [
    {
      q: "The correct start-up order is:",
      choices: ["Charge, measure, evacuate, verify", "Verify installation and identity, confirm evacuation, charge by method, stabilize, then judge readings", "Run first, check paperwork later", "Measure immediately at first start for accuracy"],
      answer: 1,
      explanation: "Correct: (b). Sequence protects the equipment and makes readings meaningful. (a) scrambles the protective order, charging before evacuation proof. (c) Paperwork here includes the evacuation record, a safety and quality gate, not an afterthought. (d) First-minute readings describe start-up transients, not performance."
    },
    {
      q: "A pattern of low suction, high superheat, and normal-to-high subcooling points to:",
      choices: ["Undercharge", "Restriction", "Overcharge", "Dirty condenser"],
      answer: 1,
      explanation: "Correct: (b). Liquid stacks behind the blockage, so the condenser keeps inventory while the coil starves. (a) Undercharge shows low subcooling because little liquid exists anywhere. (c) Overcharge pushes subcooling high but drives superheat low on fixed systems. (d) A dirty condenser raises head pressure as its lead symptom."
    },
    {
      q: "A TXV system with high subcooling, high head pressure, and normal superheat is most likely:",
      choices: ["Undercharged", "Overcharged — the valve hides it in defended superheat", "Suffering a restriction", "Low on airflow indoors"],
      answer: 1,
      explanation: "Correct: (b). Excess liquid stacks in the condenser while the TXV keeps its superheat promise. (a) Undercharge lowers subcooling. (c) A restriction starves the coil and eventually disturbs superheat defense with high superheat, not calm readings. (d) Indoor airflow faults show on the low side and coil first."
    },
    {
      q: "Two systems both show low suction. One has low superheat and a frosted coil with a matted filter; the other has high superheat and near-zero subcooling. The diagnoses are:",
      choices: ["Both undercharged", "First is an airflow fault, second is undercharge", "Both are restrictions", "First is overcharge, second is restriction"],
      answer: 1,
      explanation: "Correct: (b). Low superheat with frost and a matted filter is the airflow signature; high superheat with empty subcooling is undercharge. (a) ignores the superheat separator. (c) A restriction would show inventory in subcooling on the second system. (d) reverses both readings' meanings."
    },
    {
      q: "Head pressure must always be judged against:",
      choices: ["The thermostat set point", "The ambient temperature at the time of reading", "The system's age", "The suction pressure alone"],
      answer: 1,
      explanation: "Correct: (b). Condensing temperature must exceed ambient, so the same pressure is innocent on a hot day and alarming on a mild one. (a) Set point drives run time, not condensing physics. (c) Age explains wear, not today's expected pressure. (d) Suction context helps ratios, but ambient is the condenser's direct reference."
    },
    {
      q: "Performance readings are taken:",
      choices: ["During the first minute of operation", "Only after the system stabilizes under load", "With the indoor fan off", "Immediately after adding refrigerant"],
      answer: 1,
      explanation: "Correct: (b). Stabilized values are the only ones comparable to targets and baselines. (a) Transients mislead every method. (c) A fan-off coil is an artificial fault state. (d) Fresh additions need settling time before their effect can be judged."
    },
    {
      q: "A healthy documented set of start-up readings is valuable mainly because it:",
      choices: ["Satisfies a paperwork habit", "Becomes the baseline future visits compare against", "Raises the system's resale price directly", "Replaces future measurements"],
      answer: 1,
      explanation: "Correct: (b). Baselines turn a later 'seems off' into a measured deviation. (a) The paperwork is the evidence, not the purpose. (c) No direct price effect is claimed. (d) Future readings are what get compared; the baseline never substitutes for them."
    },
    {
      q: "When readings survive re-verification but match no known pattern, the professional move is to:",
      choices: ["Adjust the TXV until something changes", "Add refrigerant and observe", "Document fully, stop before disturbing the system, and escalate", "Replace the compressor preemptively"],
      answer: 2,
      explanation: "Correct: (c). Verified contradictory evidence, handed upward undisturbed, is good practice. (a) and (b) convert a diagnosis problem into a changed system with the evidence destroyed. (d) Replacing the costliest part on a guess is the opposite of symptom thinking."
    }
  ],
  studyGuide: `
<h3>Module 12 — System Start-Up, Performance Checks & First Troubleshooting: Quick Reference</h3>
<p><strong>Start-up order:</strong> Verify identity/installation → pressure test → evacuate to 500 microns or below, standing test leveled → charge by device method → stabilize → measure → document baseline.</p>
<p><strong>The picture:</strong> Suction pressure + suction line temp = superheat. Head pressure + liquid line temp = subcooling. Air temps and ambient give both their context.</p>
<p><strong>Signatures:</strong></p>
<ul>
<li>Undercharge: low suction, high superheat, low subcooling (TXV: subcooling falls first).</li>
<li>Overcharge: fixed = low superheat; TXV = high subcooling and head, superheat calm.</li>
<li>Restriction: low suction, high superheat, subcooling normal-to-high.</li>
<li>Poor heat rejection: head and condensing high for the ambient; check coil, fan, recirculation, non-condensables.</li>
<li>Low indoor airflow: low suction, low superheat (fixed), frosting, dirty air path.</li>
</ul>
<p><strong>Workflow:</strong> Interview → air side → full picture → name the family → test likeliest cause → repair → re-measure whole picture → document. Escalate with evidence when patterns fail or safety speaks.</p>
`
};
