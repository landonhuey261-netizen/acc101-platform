// HVAC 102 - Module 2: Theoretical vs. Actual Refrigeration Capacity
module.exports = {
  number: 2,
  slug: "theoretical-vs-actual-capacity",
  title: "Theoretical vs. Actual Refrigeration Capacity",
  estTime: "3–4 hours",
  objectives: [
    "Distinguish rated (theoretical) capacity from delivered (actual) capacity and name the conditions attached to each.",
    "Compute capacity in Btu/h and tons from refrigerant mass flow and net refrigeration effect.",
    "Compute the mass flow a system needs to meet a stated load, and the mass flow a compressor actually delivers.",
    "Explain how suction superheat, liquid subcooling, pressure drops, and operating temperatures shift actual capacity away from the rating.",
    "Use the heat-balance check (condenser heat = evaporator heat + compressor work) to sanity-check capacity calculations."
  ],
  sections: [
    {
      heading: "Rated Capacity Is a Promise Made at Stated Conditions",
      html: `<p>A nameplate that says "3-ton" is not lying — but it is answering a narrower question than most people ask. <strong>Rated (theoretical) capacity</strong> is the cooling the equipment delivers at a specific set of test conditions: stated evaporating and condensing temperatures, stated superheat and subcooling, stated airflow or water flow, and a healthy, correctly charged system. Change any condition and the delivered — <strong>actual</strong> — capacity changes with it.</p><p>One <strong>ton of refrigeration</strong> is a rate: 12,000 Btu/h, or 200 Btu/min. It comes from the heat absorbed melting a ton of ice over 24 hours, but for calculation purposes only the rate matters:</p><div class="formula">Capacity (Btu/h) = mass flow (lb/min) × NRE (Btu/lb) × 60<br>Tons = Capacity (Btu/h) ÷ 12,000 = [mass flow (lb/min) × NRE] ÷ 200</div><p>The <strong>net refrigeration effect (NRE)</strong> is the refrigeration effect from Module 1 — h<sub>1</sub> − h<sub>4</sub> — evaluated for the actual system, accounting for the superheat and subcooling the system really runs. Two systems with identical compressors but different NREs move different amounts of heat per pound, so their capacities differ even at identical mass flow.</p><div class="callout"><strong>Key idea:</strong> Capacity is always the product of two questions: <em>how many pounds per minute?</em> and <em>how much heat does each pound carry?</em> Diagnose a capacity complaint by finding which of the two fell short.</div>`
    },
    {
      heading: "Capacity Calculations, Step by Step",
      html: `<p><strong>Worked example 1 — delivered capacity.</strong> A system circulates 10 lb/min of refrigerant with a net refrigeration effect of 70 Btu/lb (the Module 1 cycle: h<sub>1</sub> = 108, h<sub>4</sub> = 38). Capacity = 10 × 70 = 700 Btu/min = 700 ÷ 200 = <strong>3.5 tons</strong> (42,000 Btu/h). Clean, direct, and completely dependent on both inputs being real.</p><p><strong>Worked example 2 — required mass flow.</strong> A space needs 36,000 Btu/h (3 tons) and the system runs an NRE of 60 Btu/lb. Required heat per minute = 36,000 ÷ 60 = 600 Btu/min. Required mass flow = 600 ÷ 60 = <strong>10 lb/min</strong>. If the compressor can only deliver 8.5 lb/min at the operating suction pressure (Module 3 explains why), delivered capacity is 8.5 × 60 = 510 Btu/min = 30,600 Btu/h = <strong>2.55 tons</strong> — a system that runs constantly on a design day and slowly loses ground, with nothing mechanically "broken."</p><p><strong>Worked example 3 — the NRE penalty.</strong> Same 10 lb/min, but flash gas and lost subcooling raise h<sub>4</sub> from 38 to 46, cutting NRE to 62 Btu/lb. Capacity = 10 × 62 = 620 Btu/min = 3.1 tons. The compressor did identical work; the <em>refrigerant circuit</em> wasted 11% of it. This is why theoretical calculations that borrow a textbook NRE instead of the system's own h-values overstate real capacity.</p><div class="callout"><strong>Key idea:</strong> Always compute with the system's own numbers: its plotted enthalpies, its measured mass-flow conditions (suction pressure and superheat set vapor density), its real subcooling. A calculation is only "theoretical" when its inputs are.</div>`
    },
    {
      heading: "Why Actual Capacity Falls Short: The Usual Suspects",
      html: `<p>Field systems commonly deliver well under rating on hot days. The losses stack:</p><ul><li><strong>Higher condensing temperature.</strong> A 100°F-plus day with a sun-baked condenser raises head pressure, increases the compression ratio, and — through volumetric efficiency (Module 3) — cuts the pounds pumped per hour. Capacity falls exactly when the load peaks.</li><li><strong>Lower evaporating temperature.</strong> A dirty filter or iced coil drops suction pressure. The compressor inhales thinner vapor: same volume, fewer pounds. Mass flow is the silent term in most capacity complaints.</li><li><strong>Suction-line pressure drop and heat gain.</strong> Long, uninsulated, or undersized suction lines rob pressure and add superheat before the compressor. The compressor sees warmer, thinner gas than the evaporator produced.</li><li><strong>Excess evaporator superheat.</strong> A starved coil spends its last circuits warming vapor instead of boiling liquid — the effective evaporator shrinks, NRE per pound at the coil falls, and discharge temperatures climb.</li><li><strong>Lost subcooling / flash gas before the metering device.</strong> Raises h<sub>4</sub>, cuts NRE (Worked example 3).</li><li><strong>Compressor wear.</strong> Leaking valves or worn rings recycle gas internally; displacement stays the same, delivered mass flow does not.</li></ul><p>Notice the pattern: most "capacity" problems are really <em>mass-flow</em> or <em>NRE</em> problems wearing a disguise. The fix follows the diagnosis — restore airflow, clean coils, insulate suction lines, correct charge — rather than reflexively upsizing equipment that was never the problem.</p><div class="callout"><strong>Key idea:</strong> Before condemning a system as undersized, measure. A system delivering 2.6 of its rated 3 tons for a cleanable reason does not need replacement; it needs its 0.4 tons back.</div>`
    },
    {
      heading: "The Heat-Balance Check and Compressor Power",
      html: `<p>Energy accounting catches arithmetic errors and bad readings. From Module 1, per pound: heat rejected at the condenser = NRE + heat of compression. Scale by mass flow and the whole system must balance.</p><p><strong>Worked example.</strong> Mass flow 10 lb/min, NRE 70 Btu/lb, HOC 16 Btu/lb. Evaporator absorbs 10 × 70 = 700 Btu/min. Compressor adds 10 × 16 = 160 Btu/min. The condenser must reject 860 Btu/min. If a condenser-side estimate comes back at 700 Btu/min, one of the inputs is wrong — usually an enthalpy read off the wrong refrigerant's chart, or a superheat taken with a poorly clamped thermometer.</p><p>The heat of compression also links refrigerant math to the electrical bill. HOC × mass flow is the work the refrigerant receives; the motor draws more than that because of motor and mechanical losses. You will not meter the refrigerant-side figure directly in the field, but the relationship explains a diagnostic truth: <strong>anything that raises HOC per pound while cutting pounds pumped — high head pressure above all — raises energy cost per unit of cooling twice over.</strong> Customers describe it as "the unit runs all day and the bill doubled," and both halves of the sentence have the same root cause.</p><p>For heat pumps the same ledger runs in the customer's favor in winter: the heat delivered indoors is the condenser-side total (NRE + HOC), which is why a heat pump delivers more heat than the electrical energy it consumes — the HOC term is not waste indoors, it is part of the product.</p><div class="callout"><strong>Key idea:</strong> Evaporator heat + compressor work = condenser heat. Always. Use the balance as a spell-checker on every capacity calculation you do in this course.</div>`
    },
    {
      heading: "Matching Capacity to the Load — and Proving It in the Field",
      html: `<p>Capacity only matters relative to <strong>load</strong> — the heat leaking into the space plus internal gains. Oversized equipment short-cycles: it satisfies the thermostat quickly, runs few minutes per hour, and barely dehumidifies, because moisture removal needs sustained coil time below dew point. Undersized equipment runs continuously and still drifts warm on peak days. Correct sizing targets a near-continuous run at design conditions, which is why the <em>actual</em> capacity at those conditions — not the brochure number at mild conditions — is the figure that matters.</p><p>Field verification without laboratory instruments is mostly disciplined inference:</p><ul><li>Plot the cycle (Module 1). Deformed shapes point at the capacity thief.</li><li>Confirm airflow before charge judgments — low airflow fakes low capacity and distorts every refrigerant-side reading.</li><li>Compute superheat and subcooling from verified P/T relationships (R-410A: 118 psig ≈ 40°F saturation; R-22: 68.5 psig ≈ 40°F) rather than "beer-can cold" guesses.</li><li>Compare run behavior to load: a unit that holds setpoint on a mild day but loses 3°F on a design afternoon is telling you its actual-at-conditions capacity, free of charge.</li></ul><p>Document conditions with every conclusion: "delivers an estimated 2.6 tons at 100°F condensing with a fouled coil; rating is 3 tons at standard conditions" is a professional finding. "Unit is weak" is not.</p><div class="callout"><strong>Key idea:</strong> Theoretical capacity plans the job; actual capacity, measured at real conditions, closes it. The gap between them is not error — it is information about the system's health.</div>`
    }
  ],
  keyTerms: [
    { term: "Ton of refrigeration", def: "A capacity rate of 12,000 Btu/h (200 Btu/min)." },
    { term: "Rated capacity", def: "Capacity delivered at a manufacturer's stated set of standard test conditions." },
    { term: "Actual (delivered) capacity", def: "The cooling a system truly delivers at its real operating conditions, charge, and state of repair." },
    { term: "Net refrigeration effect (NRE)", def: "h1 − h4 for the actual system, accounting for its real superheat and subcooling; the heat each pound absorbs in the evaporator." },
    { term: "Mass flow rate", def: "The pounds of refrigerant circulated per unit time (lb/min in this course's calculations)." },
    { term: "Capacity formula", def: "Tons = [mass flow (lb/min) × NRE (Btu/lb)] ÷ 200." },
    { term: "Load", def: "The rate at which heat enters or is generated in the conditioned space; the demand capacity must meet." },
    { term: "Heat balance", def: "Condenser heat rejection = evaporator heat absorption + compressor work input, per pound and for the whole system." },
    { term: "Short cycling", def: "Frequent on-off operation from oversizing or controls problems; harms dehumidification, efficiency, and compressor life." },
    { term: "Design conditions", def: "The outdoor/indoor conditions a system is sized for; capacity at design conditions determines peak-day performance." },
    { term: "Flash gas", def: "Vapor formed when liquid flashes during expansion or in the liquid line; it displaces liquid and reduces NRE." },
    { term: "Suction superheat penalty", def: "Capacity and efficiency lost when excessive superheat warms and thins the vapor the compressor must pump, and wastes evaporator surface." },
    { term: "Displacement", def: "The volume a compressor sweeps per unit time; not the same as delivered mass flow, which depends on vapor density and volumetric efficiency." },
    { term: "Vapor density", def: "Mass per unit volume of suction vapor; falls as suction pressure falls, cutting mass flow at fixed displacement." },
    { term: "EER / SEER (context)", def: "Delivered-efficiency ratings that include motor and fan losses, unlike the refrigerant-side COP read from a P–h chart." },
    { term: "Dehumidification (latent capacity)", def: "The moisture-removal portion of capacity; needs sustained runtime with a cold coil, and suffers first when systems short-cycle." }
  ],
  video: {
    title: "How to Read a p–h Diagram (Refrigeration Cycle Explained) | R32 Air Conditioner",
    embedUrl: "https://www.youtube.com/embed/bm6b9br3o_k",
    note: "A concise walk around a real air-conditioning cycle on the p–h diagram, including how COP comes from the diagram's widths and how a dirty condenser and low evaporating temperature deform the cycle — exactly the capacity killers this module calculates.",
    more: [
      { title: "Visualizing HVAC Excellence (VHE) – Ep. 8: Pressure-Enthalpy (P-h) Charts Explained for HVACR", url: "https://www.youtube.com/watch?v=DFj1S6gjDo4" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A system circulates 12 lb/min with an NRE of 58 Btu/lb. Compute capacity in Btu/min, Btu/h, and tons.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Btu/min = 12 × 58 = <strong>696 Btu/min</strong>. Step 2: Btu/h = 696 × 60 = <strong>41,760 Btu/h</strong>. Step 3: Tons = 696 ÷ 200 = <strong>3.48 tons</strong> (check: 41,760 ÷ 12,000 = 3.48).</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A 48,000 Btu/h load must be met by a system whose NRE is 64 Btu/lb. What mass flow is required?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Convert load: 48,000 ÷ 60 = 800 Btu/min. Step 2: Mass flow = 800 ÷ 64 = <strong>12.5 lb/min</strong>. Step 3: Sanity check: 12.5 × 64 = 800 Btu/min = 48,000 Btu/h. Correct.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A nominal 3-ton system is found circulating 8.5 lb/min at an NRE of 62 Btu/lb. What is its actual capacity in tons, and what is the shortfall?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Capacity = 8.5 × 62 = 527 Btu/min. Step 2: Tons = 527 ÷ 200 = <strong>2.64 tons</strong>. Step 3: Shortfall = 3.00 − 2.64 = <strong>0.36 ton (about 4,300 Btu/h, a 12% deficit)</strong> — investigate mass flow (suction pressure, compressor health) and NRE (subcooling, flash gas) before calling the system undersized.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Using mass flow 9 lb/min, NRE 66 Btu/lb, and HOC 18 Btu/lb, verify the system heat balance in Btu/min.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Evaporator absorbs 9 × 66 = 594 Btu/min. Step 2: Compressor adds 9 × 18 = 162 Btu/min. Step 3: Condenser must reject 594 + 162 = <strong>756 Btu/min</strong>. Step 4: Cross-check with enthalpies: (h<sub>2</sub> − h<sub>3</sub>) × 9 must equal 756, i.e., h<sub>2</sub> − h<sub>3</sub> = 84 Btu/lb = 66 + 18. Balanced.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A system's subcooling is restored after fixing a liquid-line restriction, moving h<sub>4</sub> from 48 back to 40 Btu/lb, with h<sub>1</sub> = 106 and mass flow steady at 11 lb/min. Compute the capacity gain in tons.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Before: NRE = 106 − 48 = 58; capacity = 11 × 58 = 638 Btu/min = 3.19 tons. Step 2: After: NRE = 106 − 40 = 66; capacity = 11 × 66 = 726 Btu/min = 3.63 tons. Step 3: Gain = 3.63 − 3.19 = <strong>0.44 ton</strong> — recovered without touching the compressor, because the loss was in NRE, not mass flow.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A customer complains a correctly sized system 'can't keep up' only on the hottest afternoons, while the electric bill climbs. Give the two-term (mass flow / NRE) explanation and the first two field checks.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Hot afternoons raise condensing pressure; compression ratio rises, volumetric efficiency falls, so <em>mass flow</em> drops — fewer pounds pumped. Step 2: High head also raises HOC per pound, so energy per unit of cooling climbs — the bill. Step 3: First checks: condenser coil cleanliness and condenser fan operation (restore heat rejection), then airflow across the evaporator (protect suction pressure). Only after those pass should charge or compressor health be questioned.</p>"
    }
  ],
  quiz: [
    {
      q: "One ton of refrigeration equals:",
      choices: ["12,000 Btu", "200 Btu/min (12,000 Btu/h)", "2,000 lb of ice", "1,200 Btu/h"],
      answer: 1,
      explanation: "Correct: (b). A ton is a rate: 200 Btu/min = 12,000 Btu/h. (a) 12,000 Btu with no time unit is an amount of heat, not a capacity. (c) confuses the historical ice-melting origin with the modern rate definition. (d) is off by a factor of ten."
    },
    {
      q: "A system moves 10 lb/min at an NRE of 70 Btu/lb. Its capacity is:",
      choices: ["7 tons", "0.7 ton", "3.5 tons", "700 tons"],
      answer: 2,
      explanation: "Correct: (c). 10 × 70 = 700 Btu/min; 700 ÷ 200 = 3.5 tons. (a) divides by 100 instead of 200. (b) divides by 1,000. (d) reports Btu/min and calls it tons — the classic unit slip the formula's ÷200 step prevents."
    },
    {
      q: "Net refrigeration effect differs from the textbook refrigeration effect because NRE:",
      choices: ["Ignores the evaporator", "Uses the actual system's superheat and subcooling enthalpies", "Is measured in tons", "Excludes the compressor"],
      answer: 1,
      explanation: "Correct: (b). NRE is h1 − h4 evaluated with the system's real operating points, so flash gas, lost subcooling, and excess superheat show up in it. (a) NRE is defined at the evaporator. (c) NRE is in Btu/lb; tons come later. (d) The compressor is excluded from NRE by definition in both versions — it enters capacity through mass flow."
    },
    {
      q: "Which change most directly cuts a compressor's delivered mass flow on a hot day?",
      choices: ["Higher condensing pressure raising compression ratio and lowering volumetric efficiency", "Longer thermostat cycles", "Higher indoor humidity alone", "A larger return grille"],
      answer: 0,
      explanation: "Correct: (a). Hot days raise head pressure; the higher compression ratio reduces volumetric efficiency, so each revolution delivers fewer pounds. (b) Cycle length is an effect, not a cause, of capacity. (c) Humidity adds latent load but does not by itself cut refrigerant mass flow. (d) Better return airflow helps capacity, not harms it."
    },
    {
      q: "The heat-balance check for a whole system states:",
      choices: ["Condenser heat = evaporator heat − compressor work", "Condenser heat = evaporator heat + compressor work", "Condenser heat = compressor work alone", "Evaporator heat = condenser heat + compressor work"],
      answer: 1,
      explanation: "Correct: (b). The condenser rejects everything the evaporator absorbed plus everything the compressor added. (a) would destroy energy. (c) forgets the absorbed load entirely. (d) reverses the flow — the evaporator is the smallest of the three heat quantities in cooling mode."
    },
    {
      q: "Flash gas forming in the liquid line reduces capacity because it:",
      choices: ["Raises suction pressure", "Causes the compressor to pump liquid", "Raises h4, which reduces NRE", "Lowers the compression ratio"],
      answer: 2,
      explanation: "Correct: (c). Flashing raises the enthalpy entering the evaporator (h4 = h3), so each pound absorbs less heat. (a) Suction pressure is set by evaporator conditions and load, not liquid-line flashing. (b) Flash gas is a liquid-line/NRE problem, not liquid reaching the compressor. (d) Compression ratio is set by the two operating pressures, not by flash gas."
    },
    {
      q: "An oversized system that short-cycles most hurts comfort by:",
      choices: ["Overcooling the space below setpoint all day", "Poor dehumidification from short coil run times", "Raising the compression ratio", "Increasing NRE"],
      answer: 1,
      explanation: "Correct: (b). Moisture removal needs sustained runtime with a cold coil; short cycles satisfy temperature before much moisture condenses out. (a) The thermostat still stops the unit at setpoint. (c) Cycling does not change the cycle's operating pressures in that way. (d) Short cycling does not raise the refrigeration effect per pound."
    },
    {
      q: "A technician should judge a 'weak system' complaint first by:",
      choices: ["Replacing the compressor with a larger one", "Measuring operating conditions and computing actual capacity at those conditions", "Adding refrigerant until suction pressure looks high", "Checking the age of the building"],
      answer: 1,
      explanation: "Correct: (b). Actual capacity at real conditions separates equipment faults (dirty coils, low airflow, charge, wear) from true undersizing. (a) Upsizing masks faults and adds short-cycling. (c) Blind charging can create an overcharge fault on top of the real one. (d) Building age is not a measurement."
    }
  ],
  studyGuide: `
<h3>Module 2 — Theoretical vs. Actual Capacity: Quick Reference</h3>
<p><strong>1 ton</strong> = 12,000 Btu/h = 200 Btu/min.</p>
<div class="formula">Tons = [mass flow (lb/min) × NRE (Btu/lb)] ÷ 200 &nbsp;|&nbsp; NRE = h1 − h4 (actual system values)</div>
<p><strong>Worked anchors:</strong> 10 lb/min × 70 Btu/lb = 700 Btu/min = 3.5 tons. Need 36,000 Btu/h at NRE 60 → 10 lb/min required.</p>
<p><strong>Two ways capacity falls:</strong> fewer pounds (low suction pressure/density, high compression ratio, compressor wear) or less heat per pound (flash gas, lost subcooling, excess superheat).</p>
<p><strong>Heat balance:</strong> condenser rejection = evaporator absorption + compressor work. Per pound: (h2 − h3) = (h1 − h4) + (h2 − h1). Use it to check every calculation.</p>
<p><strong>Rated vs. actual:</strong> ratings assume stated conditions and a healthy system. Hot-day head pressure, dirty coils/filters, and line pressure drops all pull actual below rated.</p>
<p><strong>Watch out:</strong> oversizing causes short cycles and poor dehumidification; "weak" systems are usually sick, not small — measure before upsizing.</p>
<p><strong>Field habit:</strong> record the conditions (outdoor/indoor temperatures, pressures) beside every capacity figure you write down. A capacity number without its conditions is a rumor; with them, it is evidence the next technician can use.</p>
`
};
