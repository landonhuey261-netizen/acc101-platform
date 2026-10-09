// HVAC 207 - Module 10: Leak Detection & Repair on Commercial Equipment
module.exports = {
  number: 10,
  slug: "leak-detection-repair-commercial",
  title: "Leak Detection & Repair on Commercial Equipment",
  estTime: "3–4 hours",
  objectives: [
    "Choose between electronic, bubble-solution, and UV-dye leak detection based on leak size, location, and conditions.",
    "Describe correct electronic detector technique: slow probe movement, working from high to low points correctly for the refrigerant, and confirming hits.",
    "Use system pressure strategy — standing pressure and dry nitrogen with a trace approach where permitted — to make leaks findable.",
    "Explain the repair-verification sequence that closes a leak job: repair, pressure test, evacuate, charge, and verify under operating conditions (Module 8's tests).",
    "Recognize the classic commercial leak locations: flare and braze joints, valve packings and caps, Schrader cores, coil tubes, and shaft seals."
  ],
  sections: [
    {
      heading: "The Leak-Finding Mindset",
      html: `
<p>Leaks are found by evidence, not by luck. Before any detector comes out of the case, the first instrument is the <strong>record</strong> (Module 8): how fast is this system losing refrigerant, and when did the losses start? A system losing its charge in days has a gross leak you may hear or see; a system losing a few percent a year has a seep that demands patience and the right method. The second instrument is your eyes: refrigerant carries oil, and oil escapes with it, so <strong>oil stains are leak maps</strong> — a clean system with one greasy joint is telling you where to start.</p>
<p>The third discipline is conditions. Detectors lie in wind, in refrigerant-contaminated machine rooms, and in a hurry. Work in still air where you can, ventilate a contaminated space before declaring it clean or dirty, and remember that refrigerant vapor is heavier than air and pools in pits, cases, and low piping chases — search low for the leak source, and ventilate low spaces before you put your head in them, because pooled refrigerant displaces oxygen.</p>
<div class="callout"><strong>Key idea:</strong> Size the leak from the records, start at the oil stains, control the air — then choose the tool. Most "unfindable" leaks were searched in the wrong order.</div>
<p>Experience compresses this order into instinct — veterans "just know" where to look — but the instinct is only this checklist, memorized by repetition. When a veteran and a method disagree, trust the method and check again; the checklist has no ego and misses less.</p>`
    },
    {
      heading: "Three Detection Methods, Honestly Compared",
      html: `
<p><strong>Electronic detectors</strong> sniff refrigerant vapor at very low concentrations and are the workhorse for pinpointing: a probe moved slowly — about an inch per second, close to the surface — along joints, coils, and valve gear, pausing at every alarm to confirm it repeats at the same spot. They excel at small seeps in accessible places. Their weaknesses: contamination (a detector screaming everywhere in a refrigerant-soaked room localizes nothing), false alarms from some solvents and cleaning chemicals, and the need to match the detector's capability to the refrigerant family in the system.</p>
<p><strong>Bubble solution</strong> is the oldest pinpointing tool and still the most honest: brush or spray the solution on a pressurized joint and watch for growing bubbles. It finds the <em>exact hole</em> a detector can only bracket, and it never false-alarms on background contamination. Its limits are reach (you must touch the joint), speed (one joint at a time), and pressure (the joint must be pressurized enough to blow bubbles).</p>
<p><strong>UV dye</strong> trades immediacy for coverage: dye circulates with the oil, and days or weeks later a UV lamp reveals glowing deposits at every leak point the oil reached. It shines on systems with many suspect joints, intermittent leaks, and history of "we never find it" — the dye keeps watching while you are elsewhere. Its costs: it must be an approved dye for the system, it takes time to migrate, and old dye from previous hunts can confuse the picture.</p>
<div class="callout"><strong>Key idea:</strong> Detector to bracket, bubbles to pinpoint, dye to patrol. The methods are complements, not rivals — a professional uses them in that order most days.</div>`
    },
    {
      heading: "Making Leaks Findable: Pressure Strategy",
      html: `
<p>A system sitting at its normal running pressure on the low side may offer a detector only a whisper. Leak hunting therefore often begins with a <strong>standing pressure test</strong>: with the system off and equalized (or the section isolated), pressure is raised with <strong>dry nitrogen</strong> — after the refrigerant has been recovered from the section being tested — to a safe test pressure within the equipment's ratings, sometimes with the detector or bubbles doing the searching joint by joint. Nitrogen is used because it is dry, inert for this purpose, and cheap; its pressure makes small leaks blow detectable bubbles and raise detector readings from hopeless to obvious.</p>
<p>Discipline points that separate professionals: never exceed the lowest pressure rating of anything in the section under test; use a regulator and a relief-protected rig on the nitrogen bottle, always; never pressurize with oxygen or compressed air (oxygen under pressure with oil is an explosion looking for a place to happen, and air adds the moisture you will later pay to remove); and isolate sections — rack piping is long, and testing the whole store at once dilutes your evidence across forty cases.</p>
<div class="callout"><strong>Key idea:</strong> Nitrogen pressure is a flashlight for leaks — used through a regulator, within ratings, one section at a time, and never, ever oxygen.</div>
<p>One more pressure discipline: after a nitrogen test, the gas must come back out and the system must be evacuated before charging — nitrogen left inside becomes non-condensable ballast that raises head pressure and imitates an overcharge. A surprising number of mysterious high-head calls are yesterday's test gas, still on board.</p>`
    },
    {
      heading: "Repair and Verification: Closing the Job",
      html: `
<p>Finding the leak is the middle of the job, not the end. The closing sequence is fixed: <strong>recover</strong> the refrigerant from the section (or system) to be opened; make the repair — re-braze the joint with nitrogen flowing, replace the failed gasket, packing, core, or coil section with the correct part; <strong>pressure-test the repair</strong> and leak-check it before charging; <strong>evacuate</strong> to the Module 9 standard with a passing decay test; <strong>charge</strong> by weight/spec with subcooling and superheat verification; and then satisfy the regulatory layer from Module 8 — on covered appliances, the initial verification before recharge and the follow-up verification within 10 days under operating conditions, all written into the 3-year record.</p>
<p><strong>Worked example — the honest callback.</strong> A walk-in freezer loses its charge in about six weeks, twice in a row; each visit ended with a top-off. Step 1: The pattern is the diagnosis — a leak of consistent size is being fed, not fixed. Step 2: On the third visit the tech recovers, pressurizes with nitrogen, and finds bubbles growing at a suction-line braze joint hidden behind insulation — invisible to a quick detector pass in the cold box, obvious to bubbles at test pressure. Step 3: Re-brazed under nitrogen flow, pressure-tested, evacuated to a passing decay, weighed charge, verified — and the six-week callback cycle ends. The difference between visit two and visit three was not skill; it was <em>method</em>.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Records size the leak; oil stains start the search; controlled air makes detectors honest.</li>
<li>Electronic brackets, bubbles pinpoint, dye patrols — use them in combination.</li>
<li>Nitrogen pressure testing: regulator, ratings, sections, never oxygen or shop air.</li>
<li>Every leak job closes: recover → repair → pressure test → evacuate → charge → verify (twice, on covered systems) → record.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Sweeping a detector fast like a metal detector on a beach. Small seeps need a slow probe and a confirming pause; speed is how findable leaks get certified "not found."</div>
<div class="callout"><strong>Common mistake:</strong> Refilling first and hunting later, on the theory that running pressure finds leaks better. On a system with a real leak you have now vented your test medium toward the sky and restarted the EPA clock with nothing to show for it.</div>
<p><strong>Certification link:</strong> This module is the hands-on heart of the Type II leak-repair blueprint — and it is exactly the scenario this course's lab puts in your hands next.</p>
<p>Your lab for this course is built on exactly this sequence — ticket, safety, evidence, method, verification. Work it the way this module teaches and the grade takes care of itself — the same sequence, followed in a real store, is also what keeps a technician's name off the wrong end of an EPA record.</p>`
    }
  ],
  keyTerms: [
    { term: "Electronic leak detector", def: "A sniffing instrument that alarms on refrigerant vapor concentrations; used to bracket leak locations." },
    { term: "Bubble solution", def: "A soap-type liquid applied to pressurized joints that grows visible bubbles at a leak; used to pinpoint the exact hole." },
    { term: "UV dye", def: "A fluorescent additive circulated with the oil that marks leak points visibly under an ultraviolet lamp." },
    { term: "Oil staining", def: "Greasy residue at a joint or component — escaped oil marking where refrigerant has been leaking." },
    { term: "Standing pressure test", def: "Pressurizing an off or isolated system (typically with dry nitrogen) to make leaks detectable and prove tightness." },
    { term: "Trace method", def: "Searching with a detector while a section is pressurized, historically with a small refrigerant trace in nitrogen where permitted by current rules and practice." },
    { term: "Section isolation", def: "Valving off one part of a large system so pressure testing and repair address a manageable, provable area." },
    { term: "Flare joint", def: "A mechanical tubing connection made by flaring the tube against a fitting; a classic leak point when loose or cracked." },
    { term: "Valve packing", def: "The seal around a valve stem that a cap and packing adjustment protect; a frequent slow-leak site." },
    { term: "Schrader core", def: "The spring-loaded valve core in service ports; cheap, common, and a notorious seep when its seal ages." },
    { term: "Shaft seal", def: "The seal where an open-drive compressor's shaft exits the crankcase; a wear leak point on open machines." },
    { term: "Test pressure rating", def: "The maximum pressure a component or section may be subjected to; nitrogen testing must respect the lowest rating in the section." },
    { term: "Regulator (nitrogen)", def: "The pressure-reducing valve on a nitrogen cylinder that makes bottle pressure safe and adjustable for testing." },
    { term: "Background contamination", def: "Refrigerant vapor lingering in a space that makes detector readings meaningless until ventilated." },
    { term: "Pinpointing", def: "Narrowing a leak from a general area to the exact hole, typically with bubble solution after detector bracketing." },
    { term: "Repair verification", def: "The post-repair leak checks — initial before recharge, follow-up within 10 days under operating conditions on covered appliances." },
    { term: "Callback leak", def: "A leak repeatedly topped off instead of repaired; the service pattern this module exists to end." },
    { term: "Low-point pooling", def: "Heavier-than-air refrigerant vapor collecting in pits and low spaces — a search clue and an oxygen-displacement hazard." }
  ],
  video: {
    title: "Walk In Cooler Refrigerant Leak",
    embedUrl: "https://www.youtube.com/embed/mJ2KmW4e53k",
    note: "A walk-in cooler refrigerant leak hunt on a real call — the search discipline of this module in the wild: following the evidence on commercial equipment rather than guessing and gassing. Compare its sequence with the record → bracket → pinpoint order taught here.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A detector alarms everywhere in a small machine room and localizes nothing. Give the two environmental causes to correct before concluding anything, and how.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <strong>Background contamination</strong> — refrigerant from the known leak has soaked the room's air; ventilate the space thoroughly, then re-enter and search while the air is clean. Step 2: <strong>Air movement</strong> — drafts and fan wash smear the vapor trail; still the air you can (fans off briefly, doors managed) so vapor collects at its source. Only then does a repeatable, localized alarm mean something.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Records show a system loses about 2% of its charge per year (tiny seep, unknown location among 200 joints). Argue for the detection method that fits best as the opening move, and its main drawback.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: At 2% per year, any single-visit method is hunting a whisper; <strong>UV dye</strong> fits best because it circulates and keeps marking leak points continuously, turning every future visit into evidence collection. Step 2: The electronic detector remains the same-day tool, but its odds on one pass at this leak size are poor. Step 3: Dye's drawback: time — it must migrate to the leak before the lamp can read it, and previously installed dye can confuse later readings.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A detector brackets a leak to a flare joint area. What single test converts “somewhere here” into the exact hole, and what must be true of the joint for the test to work?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <strong>Bubble solution</strong> applied to the joint, watched for growing bubbles at one precise point. Step 2: The joint must be under adequate pressure — from system pressure or a nitrogen standing test — since bubbles are blown by escaping gas. Step 3: A joint at rest at near-zero differential will not confess, no matter how good the soap is.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A junior tech proposes pressure-testing with the shop's oxygen cylinder because “it goes to higher pressure anyway.” Write the refusal, with the reason.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Absolutely not — oxygen under pressure in contact with compressor oil and hydrocarbon residues can ignite or explode violently; this is one of the trade's absolute prohibitions. Step 2: Pressure testing is done with <strong>dry nitrogen</strong> through a regulator, kept within the lowest rating in the section. Step 3: Higher pressure is not the goal anyway — controlled, safe, findable pressure is.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> After a repair and recharge on a covered (over-50-lb) rack, the office asks what remains before the job can be called complete in the regulatory sense. Answer with the remaining steps and deadlines.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Confirm the <strong>initial verification</strong> was done — the repair leak-checked before refrigerant was charged back (if the crew charged first, that sequence is already wrong and must be documented and corrected per the account's compliance practice). Step 2: Schedule the <strong>follow-up verification within 10 days</strong>, under operating conditions. Step 3: File everything — repair, amounts, both verifications — in the records kept <strong>3 years</strong>, and place the appliance on its leak-inspection schedule.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Name five classic commercial leak locations you would check on any first leak visit, before any exotic theories.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <strong>Flare and mechanical joints</strong>. Step 2: <strong>Valve stem packings and missing/loose caps</strong>. Step 3: <strong>Schrader cores</strong> in service ports. Step 4: <strong>Brazed joints</strong>, especially at vibration points near the compressor. Step 5: <strong>Coil tubes and return bends</strong> (rub spots and corrosion) and, on open-drive machines, the <strong>shaft seal</strong>. Oil staining upgrades any of them from routine to prime suspect.</p>"
    }
  ],
  quiz: [
    {
      q: "The first leak-detection instrument on any call is:",
      choices: ["The electronic detector", "The service records — how fast is it losing refrigerant, and since when", "The nitrogen bottle", "The UV lamp"],
      answer: 1,
      explanation: "Correct: (b). Loss rate sizes the leak and selects the method. (a) A detector without a size estimate gets waved at everything and finds nothing methodically. (c) Nitrogen comes after recovery and isolation decisions. (d) The lamp only reads dye that has had time to migrate — useless as an opening move on an undyed system."
    },
    {
      q: "Correct electronic detector technique is:",
      choices: ["Wave it quickly over every joint twice", "Move the probe slowly, close to surfaces, and pause to confirm repeatable alarms at one spot", "Hold it at the ceiling since refrigerant rises", "Keep it in the truck until bubbles fail"],
      answer: 1,
      explanation: "Correct: (b). Slow movement plus confirmed, location-stable alarms separate leaks from background. (a) Speed smears small seeps past the sensor. (c) Refrigerant vapor is heavier than air — it pools low, not high. (d) Detectors are the bracketing tool used first in most searches, not a last resort."
    },
    {
      q: "Bubble solution's unique strength is that it:",
      choices: ["Works from across the room", "Shows the exact hole with growing bubbles, immune to background contamination", "Needs no pressure in the joint", "Detects leaks through insulation"],
      answer: 1,
      explanation: "Correct: (b). Bubbles form at the hole itself, and room vapor cannot fake them. (a) You must apply it to the joint directly. (c) It needs pressure differential to blow bubbles. (d) Insulation must come off — bubbles under a wrap are invisible."
    },
    {
      q: "UV dye is the best opening move when:",
      choices: ["The leak loses a full charge overnight", "The leak is a tiny seep somewhere among many joints and can be given time to mark itself", "The system is being scrapped tomorrow", "No oil circulates in the system"],
      answer: 1,
      explanation: "Correct: (b). Dye patrols continuously and accumulates evidence at the true point. (a) A gross leak announces itself to ears and detectors today; dye's delay is pointless. (c) There is no later visit to read the lamp by. (d) Dye travels in oil — no oil movement, no marking."
    },
    {
      q: "Pressure testing gas of choice is:",
      choices: ["Oxygen, for its high pressure", "Compressed shop air", "Dry nitrogen, through a regulator, within the section's ratings", "Refrigerant from a recovery cylinder of unknown contents"],
      answer: 2,
      explanation: "Correct: (c). Nitrogen is dry, safe, and controllable. (a) Oxygen plus oil under pressure is an explosion hazard — absolutely prohibited. (b) Shop air imports moisture you will later pay to evacuate. (d) Unknown refrigerant contaminates the system and wastes the test medium."
    },
    {
      q: "The correct closing order after finding a leak is:",
      choices: ["Charge, evacuate, repair, test", "Recover, repair, pressure-test, evacuate, charge, verify", "Repair hot under pressure, top off, leave", "Vent, braze, charge by feel"],
      answer: 1,
      explanation: "Correct: (b). Each step certifies the next: the repair is proven before the charge is entrusted to it. (a) scrambles the logic — you cannot evacuate a charged system or repair after charging. (c) Working a joint under pressure is unsafe and unverifiable. (d) Venting is illegal and charging by feel is not charging."
    },
    {
      q: "Oil staining at a joint most likely means:",
      choices: ["The system is overcharged with oil", "Refrigerant has been escaping there, carrying oil out with it", "Someone spilled oil during the last service", "The joint was over-brazed"],
      answer: 1,
      explanation: "Correct: (b). Oil travels with refrigerant and deposits at the exit point — a leak map drawn by the system itself. (a) Overcharge of oil does not target one exterior joint. (c) Possible, which is why you clean the joint and see if the stain returns — evidence, updated. (d) Brazing quality issues show as bad joints, not progressive greasy buildup."
    },
    {
      q: "A leak in a pit or low piping chase is a safety concern beyond the refrigerant loss because:",
      choices: ["Leaks are louder in pits", "Refrigerant vapor is heavier than air and pools there, displacing oxygen", "Nitrogen testing is banned in pits", "Detectors do not work below grade"],
      answer: 1,
      explanation: "Correct: (b). Pooled refrigerant can asphyxiate — ventilate low spaces before occupying them. (a) Sound is not the hazard category here. (c) Nitrogen testing is fine with the same rating discipline anywhere. (d) Detectors work low — indeed that is where the vapor is; the hazard is to the person, not the instrument."
    }
  ],
  studyGuide: `
<h3>Module 10 — Leak Detection & Repair on Commercial Equipment: Quick Reference</h3>
<p><strong>Order of work:</strong> records size the leak → oil stains nominate suspects → control the air → detector brackets → bubbles pinpoint → dye patrols the hopeless seeps.</p>
<p><strong>Detector craft:</strong> slow probe, close to the surface, confirm the alarm repeats at one spot; ventilate contaminated rooms first; search low — vapor pools.</p>
<p><strong>Pressure strategy:</strong> dry nitrogen only, regulator on the bottle, respect the lowest rating in the section, isolate sections on big systems. Never oxygen, never shop air.</p>
<p><strong>Classic locations:</strong> flares, braze joints at vibration points, valve packings and caps, Schrader cores, coil rub spots, shaft seals.</p>
<p><strong>Closing sequence:</strong> recover → repair → pressure test → evacuate (500 µm + decay) → charge by weight/spec → initial verification → follow-up within 10 days (covered systems) → records, 3 years.</p>
<p><strong>Self-check:</strong> Talk a full leak job from invoice history to filed verification without skipping a step. The lab next door to this module's tab will grade exactly that thinking.</p>

<p><strong>Habit:</strong> clean a suspect joint before you test it — bubbles and detectors both read a clean surface more honestly, and a stain that returns is a signed confession.</p>`
};
