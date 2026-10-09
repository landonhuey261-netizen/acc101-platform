// HVAC 111 - Module 12: Soldering & Brazing
module.exports = {
  number: 12,
  slug: "soldering-brazing",
  title: "Soldering & Brazing",
  estTime: "3–4 hours",
  objectives: [
    "Distinguish soldering from brazing by filler melting temperature and joint strength, using the 840°F dividing line.",
    "Select appropriate filler alloys and fluxes for copper-to-copper and copper-to-brass/steel joints.",
    "Assemble a joint correctly: clean, fit, flux where required, and support the work.",
    "Braze with a flowing nitrogen purge in the correct sequence and explain what the purge prevents.",
    "Heat a joint properly — heat the parts, let the parts melt the filler — and feed filler to a complete capillary fill.",
    "Leak-test completed joints with nitrogen pressure and bubble solution, and repair defects by re-working, not by smearing."
  ],
  sections: [
    {
      heading: "Soldering vs. Brazing: The 840°F Line",
      html: `
<p>Both processes join metals with a molten filler that bonds to heated — but unmelted — base metals and is drawn into the joint clearance by <strong>capillary action</strong>. The industry's dividing line is the filler's melting temperature: <strong>soldering</strong> uses fillers that melt <em>below</em> 840°F; <strong>brazing</strong> uses fillers that melt <em>above</em> 840°F. That temperature line is also a strength line: brazed joints are far stronger and withstand the pressures and temperatures of refrigerant circuits, which is why <strong>refrigerant piping is brazed, not soft-soldered</strong>. Soft solder (the 95/5 tin-antimony family is the common plumbing-grade example) belongs to water and drain lines, low-pressure non-refrigerant work, and similar duties — never inside a refrigerant circuit.</p>
<p>The workhorse refrigerant fillers are the <strong>silicon-bronze-free, phosphorus-bearing copper alloys</strong> (the BCuP family — 'phos-copper' rods, some grades with silver content) for copper-to-copper joints: the phosphorus acts as a built-in fluxing agent on copper, so copper-to-copper brazing with these alloys needs <strong>no separate flux</strong>. Adding silver raises flow and strength for joints under vibration. When the joint involves <strong>brass or steel</strong> (service valves, driers, fittings), phosphorus alloys are the wrong chemistry — switch to a <strong>silver-bearing brazing alloy (BAg family)</strong> with the <strong>proper flux</strong>, which protects those metals and lets the filler wet them.</p>
<p>Heat sources: the standard field torch for brazing is <strong>oxy-acetylene</strong> (hottest, fastest, most controllable on larger tube), with air-acetylene and air-fuel torches common for smaller work; the torch must bring the joint to brazing temperature without lingering long enough to cook it. Every torch skill in this module sits on Module 11's prep: the finest flame work cannot save a dirty, sloppy-fitting joint.</p>
<div class="callout"><strong>Key idea:</strong> Below 840°F filler melt = soldering (not for refrigerant lines). Above = brazing (the refrigerant standard). Copper-to-copper: phos-copper, no flux. Anything-to-brass/steel: silver alloy + flux.</div>`
    },
    {
      heading: "Joint Assembly: Clean, Fit, Flux, Support",
      html: `
<p>Brazing success is decided before the torch lights. The four prep steps, in order:</p>
<ul>
<li><strong>Clean.</strong> Polish the tube end and the inside of the fitting/socket with abrasive cloth or a fitting brush until the copper is bright, then handle the cleaned areas as little as possible. Oil, oxide, and dirt all block wetting — filler flows where surfaces are clean and balks where they are not. After cleaning, do not touch the joint surfaces with bare fingers; skin oil is contamination.</li>
<li><strong>Fit.</strong> The joint must be snug with a small, even capillary clearance all around: tube fully inserted to the socket's stop. Too loose and capillary action cannot lift the filler through the gap; too tight and filler cannot enter at all. A joint you must hammer together or one that wobbles are both rejects — fix the fit (re-swage, re-cut, replace the fitting) before heating.</li>
<li><strong>Flux (where required).</strong> For BAg alloys on brass/steel, apply a thin, even coat of the correct flux to the male surface — flux shields the hot metal from oxidation and signals temperature (it turns clear and fluid as the joint approaches heat). Phos-copper on copper skips this step, by alloy design. Excess flux is not extra safety: globs contaminate and hide the joint.</li>
<li><strong>Support.</strong> Clamp or stage the assembly so nothing moves while hot and while cooling — a joint that shifts during solidification is cracked internally forever, however pretty its face looks.</li>
</ul>
<p>Then the <strong>nitrogen purge setup</strong> (next section) is connected before ignition, because retrofitting it to a hot joint is not an option. Sequence discipline — clean, fit, flux, support, purge, heat — is exactly what this course's second lab grades, step by numbered step.</p>
<div class="callout"><strong>Common mistake:</strong> 'Cleaning' with the same cloth used to wipe flux and hands all morning, then finger-testing the fit. Contamination control is a chain: bright metal, clean tools, no fingers, immediate assembly.</div>`
    },
    {
      heading: "The Nitrogen Purge: Protecting the Inside of the Joint",
      html: `
<p>Heat copper in air and its surface oxidizes — outside, where you can see and clean it, and <strong>inside the tube, where you cannot</strong>. The internal oxide forms black, flaky <strong>cupric oxide scale</strong>. In service, that scale breaks loose and migrates: it plugs metering-device inlets and filter screens, scores compressor surfaces, and seeds acid-forming reactions with moisture and oil. A brazed system can be mechanically perfect and chemically filthy — purging is what prevents that invisible failure.</p>
<p>The fix is elegant: displace the air inside the piping with <strong>dry nitrogen flowing gently while you braze</strong>. Setup: connect the nitrogen cylinder (with its regulator) to one end of the assembly; set a <em>low</em> flow — just enough to feel at the open exhaust end, a whisper rather than a blast (high flow cools the joint and wastes gas; the goal is to keep oxygen out, not to refrigerate the work). Establish the flow <strong>before</strong> lighting the torch, keep it flowing through the brazing of every joint in the assembly, and continue until the joints have cooled below oxidation temperature.</p>
<p>Flow path awareness matters: nitrogen should enter so it sweeps the whole assembly and exits <em>past</em> the joints being brazed — arrange the exhaust at the far end, never cap the system tight (pressure would build), and if the assembly connects to a system with components that must not be pressurized or heated, isolate/purge per the equipment instructions. Also schedule the purge for <strong>every</strong> joint in the run: purging only the first fitting protects only the first fitting.</p>
<div class="callout"><strong>Key idea:</strong> If you brazed it without nitrogen flowing, assume the inside is scaled — the defect is invisible, internal, and expensive. The purge is not an enhancement; on refrigerant piping it is part of the definition of a correct joint. The course lab grades its position in the sequence: purge on BEFORE heat, off AFTER cooling.</div>`
    },
    {
      heading: "Heating and Feeding: Let the Metal Melt the Filler",
      html: `
<p>The core brazing skill is heat management. Principle: <strong>heat the parts, not the filler.</strong> The torch heats the tube and fitting (favor the heavier mass — the fitting — and keep the flame moving to spread heat evenly); when the <em>joint</em> reaches brazing temperature, filler rod touched to the joint's edge melts on contact with the hot metal and capillary action pulls it through the clearance, appearing as a bright ring all around the far side. If you melt the rod in the flame and drip it onto a cooler joint, you get a cold, stacked blob sitting ON the joint instead of a filled joint — the classic beginner counterfeit.</p>
<p>Working signs: flux (where used) goes clear and watery at temperature; copper takes on a dull cherry-red hue in subdued light at brazing heat. Feed filler steadily as it is drawn in, keeping the flame washing the joint; when a continuous fillet ring shows around the socket mouth and filler has drawn through, stop feeding and remove heat smoothly. Then <strong>let it cool undisturbed</strong> — natural air cooling; do not quench a refrigerant joint with water (thermal shock stresses the joint, and water near an open system is contamination), and do not move the assembly while the filler solidifies.</p>
<p>Overheating is the mirror-image failure: lingering flame burns flux out, grows heavy oxide, anneals and weakens the tube wall, and can sag or melt thin sections — on a service valve or a component joint, excess heat also travels into the part and damages seals and internals, which is why heat-sinking (wet rags or heat-absorbing compounds on the component side, valves positioned per manufacturer guidance) is standard practice near components. Reheating a failed joint for a full rework (Section 5) beats piling cold filler onto a half-filled joint every time.</p>
<div class="callout"><strong>Common mistake:</strong> Chasing the filler with the flame around the joint ('painting' with the torch) while the fitting itself never reaches temperature. Heat the mass; test with the rod at the joint edge; feed only when the metal does the melting.</div>`
    },
    {
      heading: "Leak Testing and Repairing Joints",
      html: `
<p>A finished joint earns trust only by testing. Standard field method: pressurize the completed piping/system section with <strong>dry nitrogen</strong> to the test pressure specified for the equipment (observe the nameplate/manufacturer test-pressure limits and your gauge/regulator ratings — never exceed the lowest-rated component in the section), then brush or spray <strong>bubble leak-detection solution</strong> on every joint. Bubbles that grow steadily mark a leak; mark it, depressurize, and repair. Electronic leak detectors and standing-pressure observation (does it hold over time?) complement bubble testing, and final evacuation (later courses) will prove the system again — but no later test excuses skipping this one while the joints are accessible.</p>
<p>Repair doctrine is strict: <strong>depressurize fully before any torch work</strong> (never braze a pressurized line — and never apply a torch to a system containing refrigerant; recover it first per EPA rules from the refrigeration courses). Rework means reheating the joint properly, adding filler to fill the capillary gap with the purge flowing, or — for contaminated, overheated, or mechanically bad joints — cutting the joint out and remaking it from clean metal. Smearing filler over a cold joint's surface ('capping') hides the leak path without filling it; the joint will pass nothing but a glance.</p>
<p>Finish the trade sequence where this course's labs finish it: joints tested tight, purge gas vented safely, system closed and capped until evacuation and charging in the refrigeration sequence. Soldering and brazing close HVAC 111 because they integrate everything — safety (hot work, gas handling), measurement (pressures, temperatures), materials (Modules 10–11), and sequence discipline — into one craft performance.</p>
<div class="callout"><strong>Key idea:</strong> Test with nitrogen and bubbles, repair by reworking at temperature with the purge flowing (or remake the joint), and never put a flame to a pressurized or refrigerant-containing system. A joint is finished when it is proven, not when it looks done.</div>`
    }
  ],
  keyTerms: [
    { term: "Brazing", def: "Joining with a filler melting above 840°F; the standard for refrigerant piping joints." },
    { term: "Soldering", def: "Joining with a filler melting below 840°F; lower strength — not for refrigerant circuits." },
    { term: "Filler metal", def: "The alloy melted into the joint to bond the base metals (which themselves do not melt)." },
    { term: "Capillary action", def: "The drawing of molten filler into a close-fitting joint clearance by surface tension." },
    { term: "BCuP (phos-copper) alloy", def: "Phosphorus-bearing copper brazing filler for copper-to-copper joints; self-fluxing on copper." },
    { term: "BAg (silver) alloy", def: "Silver-bearing brazing filler used with flux for copper-to-brass or steel joints." },
    { term: "Flux", def: "A compound that shields hot metal from oxidation and promotes filler wetting; required for BAg joints, not for phos-copper on copper." },
    { term: "Wetting", def: "The spreading and bonding of molten filler across a clean, properly heated surface." },
    { term: "Cupric oxide scale", def: "Black flaky oxidation formed inside copper heated in air; prevented by nitrogen purging during brazing." },
    { term: "Nitrogen purge", def: "A gentle flow of dry nitrogen through the piping during brazing to displace oxygen and prevent internal scale." },
    { term: "Oxy-acetylene torch", def: "The standard high-heat brazing torch using oxygen and acetylene." },
    { term: "Fillet", def: "The visible ring of filler at a joint's mouth indicating capillary fill through the socket." },
    { term: "Cold joint", def: "A defective joint where filler melted in the flame sits on the surface instead of being drawn through the joint by hot base metal." },
    { term: "Heat sinking", def: "Protecting nearby components from brazing heat with wet rags or heat-absorbing compounds." },
    { term: "Bubble leak test", def: "Applying leak-detection solution to joints under nitrogen pressure; growing bubbles reveal leaks." },
    { term: "Annealing (from brazing heat)", def: "Softening of copper near a heated joint; normal in the heat-affected zone but worsened by overheating." },
    { term: "95/5 solder", def: "A common tin-antimony soft solder for plumbing water lines — an example of a below-840°F filler excluded from refrigerant use." },
    { term: "Rework", def: "Properly repairing a joint by reheating to temperature with purge flowing and filling the gap — or cutting out and remaking the joint." }
  ],
  video: {
    title: "How to Flow Nitrogen While Brazing",
    embedUrl: "https://www.youtube.com/embed/N2eCbXCZ8kM",
    note: "HVAC School demonstrates flowing nitrogen during brazing: the regulator setup, how gentle the flow should be, and the visible difference the purge makes inside the joint. This is the exact procedure at the center of this module and of the course's brazing lab — watch the flow rate he uses and when he starts and stops it.",
    more: [
      { title: "Oxy-Acetylene Brazing 3D", url: "https://www.youtube.com/watch?v=5SGqzus1cpY" },
      { title: "How to Braze with nitrogen (step-by-step HVAC Guide)", url: "https://www.youtube.com/watch?v=9bLWaqnCpPM" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A trainee proposes soft-soldering a suction-line joint with 95/5 'because the line only sees low pressure.' Reject the proposal with the governing rule.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Refrigerant piping joints are brazed — filler melting above 840°F — regardless of which line it is; soft solder's strength and temperature/pressure capability are not rated for refrigerant service, and system conditions (discharge-side excursions, vibration, service pressures during test) exceed the 'low pressure' assumption. Step 2: The suction line also sees full standing/test pressure and heat during service work. Step 3: Correct build: phos-copper braze, nitrogen purged, nitrogen/bubble leak-tested.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Select filler and flux (yes/no) for: (a) copper tube into a copper coupling; (b) copper tube into a brass service valve; (c) copper into a steel drier shell connection specified as a braze joint.</p>",
      solution: "<p><strong>Solution:</strong> (a) <strong>BCuP phos-copper, no flux</strong> — phosphorus self-fluxes on copper. (b) <strong>BAg silver alloy, with flux</strong> — phosphorus alloys do not properly wet brass and can embrittle the joint; flux is required for the silver alloy on brass. (c) <strong>BAg silver alloy, with flux</strong> — steel likewise requires the silver family and flux protection. Bonus discipline: protect the valve/drier internals with heat sinking while brazing (b).</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Number the correct sequence: (i) light torch and heat joint; (ii) start nitrogen purge flowing; (iii) clean and fit the joint; (iv) stop purge after joint cools; (v) feed filler; (vi) flux the brass fitting (this joint includes brass); (vii) support/clamp the assembly.</p>",
      solution: "<p><strong>Answer: iii, vi, vii, ii, i, v, iv.</strong> Step 1: Clean and fit first — everything depends on the surfaces. Step 2: Flux (brass present) and support while cold. Step 3: Purge BEFORE heat — nitrogen must already be displacing air when temperatures climb. Step 4: Heat, then feed filler when the metal melts it. Step 5: Purge continues through cooling; stopping it at flame-off re-admits oxygen while the copper is still hot enough to scale.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A finished joint shows a lumpy mound of filler sitting on the socket mouth, none drawn in, and the fitting barely discolored by heat. Diagnose the technique failure and the disposition.</p>",
      solution: "<p><strong>Diagnosis:</strong> A cold joint — the filler was melted in the flame and dripped onto under-heated base metal (fitting never reached brazing temperature), so capillary action never occurred; the light discoloration confirms insufficient heat in the parts. <strong>Disposition:</strong> The joint has no dependable bond; rework properly — reheat the assembly (purge flowing) to full temperature and draw filler through, or cut out and remake if contamination/overheat resulted. Do not 'add more on top.'</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> During a bubble test at nitrogen test pressure, one joint grows a steady crown of bubbles. A coworker suggests brazing over it quickly 'while it's still warm from the sun.' Give the correct repair procedure.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Fully depressurize the section — never apply a torch to a pressurized line, full stop. Step 2: With pressure at zero, set the nitrogen purge flowing at low rate. Step 3: Reheat the joint to brazing temperature and feed filler to fill the capillary path (or cut out and remake if the joint is contaminated or misshapen). Step 4: Cool undisturbed, re-pressurize with nitrogen, and re-test the joint (and re-check its neighbors) until it holds bubble-free. Step 5: 'Warm from the sun' and haste are irrelevant variables; pressure and procedure are the variables that matter.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Explain, in a short paragraph a trainee could repeat, why the nitrogen purge must run during brazing even though the joint's outside 'looks fine' without it.</p>",
      solution: "<p><strong>Model answer:</strong> The problem the purge solves is inside the tube, where you cannot see it. Copper heated in air grows black cupric-oxide scale on every hot surface — including the inner wall. That scale later flakes off and circulates, clogging metering devices and screens and damaging compressors. Flowing dry nitrogen pushes the air (and its oxygen) out of the piping while you braze, so the inside stays bright and clean. The outside of an unpurged joint can look perfect while the inside is already contaminated — which is why the purge is part of the procedure, not an optional extra.</p>"
    }
  ],
  quiz: [
    {
      q: "The dividing line between soldering and brazing is a filler melting temperature of:",
      choices: ["450°F", "840°F", "1,100°F", "There is no defined line"],
      answer: 1,
      explanation: "Correct: (b). Below 840°F = soldering; above = brazing. (a) 450°F is in the neighborhood of soft-solder melting but is not the classification line. (c) 1,100°F is above many brazing fillers' working range start, not the boundary. (d) The boundary is a standard industry definition."
    },
    {
      q: "For a copper-to-copper refrigerant joint, the correct filler/flux choice is:",
      choices: ["95/5 soft solder with flux", "Phos-copper (BCuP) alloy, no separate flux — phosphorus self-fluxes on copper", "Silver alloy, never flux", "Any rod, provided the torch is hot enough"],
      answer: 1,
      explanation: "Correct: (b). BCuP on copper is the standard, self-fluxing combination. (a) Soft solder is prohibited in refrigerant service regardless of flux. (c) Silver alloys DO require flux on the joints where they're used (brass/steel). (d) Alloy chemistry, not torch enthusiasm, determines wetting and joint integrity."
    },
    {
      q: "The nitrogen purge during brazing must be:",
      choices: ["Started after the joint reaches temperature", "Flowing before heating begins and continued until the joint cools", "Set to the highest regulator output for maximum protection", "Used only on the first joint of a run"],
      answer: 1,
      explanation: "Correct: (b). Air must be displaced before heat and kept out through cooling, for every joint. (a) Oxide forms the moment hot copper meets air — starting late protects nothing. (c) High flow cools the joint and wastes gas; a gentle flow is correct. (d) Each unpurged joint scales independently."
    },
    {
      q: "Capillary action will fill a joint correctly when the joint is:",
      choices: ["Dirty but very hot", "Clean, closely and evenly fitted, and heated so the base metal melts the filler", "Loose, so filler has room to pour in", "Heated only at the filler rod"],
      answer: 1,
      explanation: "Correct: (b). Clean surfaces, proper clearance, and part-heat are the capillary recipe. (a) Contamination blocks wetting at any temperature. (c) Excess clearance defeats capillary lift and weakens the joint. (d) Melting filler in the flame makes cold joints — heat parts, not filler."
    },
    {
      q: "A joint leaks under nitrogen bubble testing. The correct repair is:",
      choices: ["Smear soft solder over the leak while pressurized", "Depressurize, re-establish purge, reheat to temperature and fill the joint (or cut out and remake), then re-test", "Add flux and a cold filler cap", "Raise test pressure until it seals"],
      answer: 1,
      explanation: "Correct: (b). Safe, effective rework follows the full procedure again. (a) Torch on a pressurized line is dangerous, and soft solder is prohibited anyway. (c) A cold cap hides the leak path without filling the joint. (d) Pressure does not seal leaks — it enlarges them and adds hazard."
    },
    {
      q: "Brazing near a service valve, you protect the valve's internal seals primarily by:",
      choices: ["Brazing faster with maximum flame", "Heat sinking (wet rag or heat-absorbing compound) and directing heat away per manufacturer guidance", "Removing the valve and soldering it instead", "Flooding the joint with flux"],
      answer: 1,
      explanation: "Correct: (b). Managing where heat travels preserves seals and seats. (a) Maximum flame increases conducted heat damage risk. (c) Solder is prohibited in refrigerant joints, and removal doesn't change the heat problem at reassembly. (d) Flux is a surface agent, not a heat shield."
    },
    {
      q: "The visible sign that filler has been drawn through a properly heated joint is:",
      choices: ["A tall blob stacked at the entry point", "A continuous bright fillet ring around the socket mouth with filler drawn in, not piled on", "Heavy black scale around the joint", "The fitting glowing bright orange"],
      answer: 1,
      explanation: "Correct: (b). A uniform fillet with filler visibly drawn into the clearance indicates capillary fill. (a) A stacked blob signals a cold joint. (c) Heavy external scale indicates overheating and (inside) a missing purge. (d) Bright orange is beyond proper brazing temperature for these alloys and damages the work."
    },
    {
      q: "Pressure for leak-testing a newly brazed section must come from:",
      choices: ["Shop compressed air", "Oxygen, carefully regulated", "Dry nitrogen, limited to the lowest-rated component's test pressure in the section", "The system's refrigerant charge, released into the lines"],
      answer: 2,
      explanation: "Correct: (c). Dry nitrogen at controlled, component-safe pressure is the standard test medium. (a) Air adds moisture to a dehydrated system. (b) Oxygen under pressure with oils is an explosion hazard — categorically forbidden. (d) Refrigerant is not a test gas for open fabrication work; charging comes after evacuation in the proper sequence (and venting refrigerant is prohibited)."
    }
  ],
  studyGuide: `
<h3>Module 12 — Soldering & Brazing: Quick Reference</h3>
<p><strong>The line:</strong> Filler melts below 840°F = soldering; above = brazing. Refrigerant joints are ALWAYS brazed. Soft solder (e.g., 95/5) never enters a refrigerant circuit.</p>
<p><strong>Alloys:</strong> Copper-to-copper → phos-copper (BCuP), self-fluxing, NO flux. Copper-to-brass/steel → silver alloy (BAg) WITH flux. Protect nearby components with heat sinking.</p>
<p><strong>Sequence (the lab grades this order):</strong> Clean to bright metal → fit snug/even → flux if BAg → support the assembly → nitrogen purge ON (gentle flow) → heat the PARTS (fitting mass first, flame moving) → feed filler when the metal melts it; capillary action draws it through → stop at a continuous fillet → cool undisturbed, purge still flowing → purge off after cooling.</p>
<p><strong>Heat doctrine:</strong> Heat parts, not filler. Melted-in-the-flame filler = cold joint = rework. Overheating burns flux, grows oxide, weakens tube.</p>
<p><strong>Purge doctrine:</strong> No purge = internal cupric-oxide scale = future clogs and compressor damage, however pretty the outside looks.</p>
<p><strong>Testing & repair:</strong> Nitrogen pressure (never above the lowest-rated component) + bubble solution on every joint. Repair = depressurize → purge → reheat & fill (or cut out & remake) → re-test. NEVER torch a pressurized or refrigerant-containing system.</p>
`
};
