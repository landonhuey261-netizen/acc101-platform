// HVAC 235 - Module 7: Heat Pump Heating Performance
module.exports = {
  number: 7,
  slug: "heat-pump-heating-performance",
  title: "Heat Pump Heating Performance",
  estTime: "3–4 hours",
  objectives: [
    "Define COP and compute it from capacity and watt draw, showing why it falls as outdoor temperature drops.",
    "Explain the two-sided squeeze of cold weather: heat pump capacity falls while the house's heat loss rises.",
    "Construct a balance-point calculation from a load line and a manufacturer's capacity table, and find the balance point by graph or interpolation.",
    "Distinguish the thermal balance point from the economic balance point and explain which one a control should use.",
    "Describe how cold-climate (inverter, vapor-injection) heat pumps extend useful capacity, and what they do not change."
  ],
  sections: [
    {
      heading: "COP: The Heat Pump's Exchange Rate",
      html: `
<p>A furnace's efficiency is a fraction — output over input, capped below 100%. A heat pump <em>moves</em> heat instead of making it, so its performance figure can exceed 100%, and it gets its own name: the <strong>coefficient of performance</strong>.</p>
<div class="formula">COP = Heat delivered (Btu/h) ÷ Electrical input expressed in Btu/h = Output (Btu/h) ÷ (Watts × 3.412)</div>
<p><strong>Worked example.</strong> A heat pump delivering 36,000 Btu/h while drawing 3,000 watts: input in Btu/h = 3,000 × 3.412 = 10,236 Btu/h. COP = 36,000 ÷ 10,236 ≈ <strong>3.5</strong> — every watt of electricity delivers about 3.5 watts' worth of heat, because roughly 2.5 of those parts were harvested from the outdoor air for free. Compare resistance heat: a watt in is a watt of heat out — COP exactly 1.0, always. That gap is the heat pump's entire economic case, and its size depends on the weather.</p>
<p>Why COP slides with temperature: the compressor's job is a <em>lift</em> — from the cold outdoor coil's temperature up to the warm indoor coil's. Colder outdoors means a bigger lift, more work per unit of heat moved, and less refrigerant heat absorbed per revolution. Manufacturers publish the evidence as <strong>capacity tables</strong>: output and power draw at standardized outdoor temperatures (47°F and 17°F are the classic rating points). Reading a real unit's table is a core skill for this module — every number in the next sections comes off such a table, and on a job you use the table for the actual model, never a generic one.</p>
<div class="callout"><strong>Key idea:</strong> COP is not a property of the machine alone — it is a property of the machine <em>at a condition</em>. Quoting "this heat pump is 300% efficient" without the outdoor temperature is quoting half a fact.</div>`
    },
    {
      heading: "The Two-Sided Squeeze",
      html: `
<p>Two curves govern every heat pump installation, and they move against each other all winter:</p>
<ul>
<li><strong>The load line (house):</strong> heat loss is proportional to the indoor–outdoor temperature difference. At 65°F outdoors the loss is zero (the balance temperature where internal gains carry the house — the conventional starting point for the line); at the design temperature the loss equals the design load. Everything between is a straight line: loss per degree = design load ÷ (65 − design temperature).</li>
<li><strong>The capacity line (heat pump):</strong> output falls as outdoor temperature falls — the cold air holds less harvestable heat and the compressor works against a bigger lift. Interpolated between the table's rating points, it slopes down to the left, opposite the load line's slope.</li>
</ul>
<p><strong>Build the example used all module.</strong> House: design load 48,000 Btu/h at 5°F. Load slope = 48,000 ÷ (65 − 5) = 48,000 ÷ 60 = <strong>800 Btu/h per °F</strong>. Load at any temperature T = 800 × (65 − T). Heat pump (from its table): 36,000 Btu/h at 47°F, 24,000 Btu/h at 17°F — a capacity slope of (36,000 − 24,000) ÷ (47 − 17) = 12,000 ÷ 30 = <strong>400 Btu/h lost per °F colder</strong>. Capacity at T = 36,000 − 400 × (47 − T).</p>
<div class="callout"><strong>Key idea:</strong> The squeeze is why "it heated fine in October" proves nothing. In October the load is a few thousand Btu/h and any heat pump is a giant. The design question is always January: where the two lines cross decides who heats the house — the compressor, the auxiliary heat, or (Module 8) the furnace.</div>
<p>Defrost belongs in this picture too (HVAC 208 covered the cycle): in the frosty temperature band, periodic defrosts temporarily reverse the machine and tax its net delivered capacity further — one more reason published steady-state tables flatter real output on a damp 30°F night.</p>`
    },
    {
      heading: "The Balance Point, Calculated",
      html: `
<p>The <strong>thermal balance point</strong> is the outdoor temperature where the capacity line crosses the load line — below it, the heat pump alone cannot hold the house, and auxiliary heat must make up the growing difference.</p>
<p><strong>Worked example (continuing section 2).</strong> Set load = capacity: 800 × (65 − T) = 36,000 − 400 × (47 − T). Left side: 52,000 − 800T. Right side: 36,000 − 18,800 + 400T = 17,200 + 400T. So 52,000 − 800T = 17,200 + 400T → 34,800 = 1,200T → <strong>T = 29°F</strong>. Check at 29°F: load = 800 × (65 − 29) = 800 × 36 = 28,800 Btu/h. Capacity = 36,000 − 400 × (47 − 29) = 36,000 − 7,200 = 28,800 Btu/h. ✓ The lines cross at 29°F, each carrying 28,800 Btu/h.</p>
<p>Now use it. Below 29°F, auxiliary heat covers the <em>gap only</em>: at 17°F, load = 800 × 48 = 38,400; capacity = 24,000; the aux strips owe 38,400 − 24,000 = <strong>14,400 Btu/h</strong> — not the whole load. At 5°F (design): load = 48,000; capacity ≈ 36,000 − 400 × 42 = 19,200; aux owes 28,800 Btu/h. A system whose aux bank cannot cover the design-day gap is undersized where it matters most, whatever its nameplate tonnage says.</p>
<div class="callout"><strong>Key idea:</strong> Get the balance point three ways and make them agree: graph the two lines, interpolate the table against computed loads at two temperatures and split the difference, or solve the two line equations as above. On a job, the graph drawn in front of the customer is the best sales and service document in heating.</div>
<p>Field modifiers: inverter units do not have a single tidy capacity line (they modulate — section 5), real tables have more points than two, and the house's true balance temperature shifts with internal gains. The method survives all of it: loads rise linearly, capacity falls, the crossing rules the design.</p>`
    },
    {
      heading: "Thermal vs. Economic Balance Point",
      html: `
<p>The thermal balance point answers a physics question: where does the compressor run out of capacity? The <strong>economic balance point</strong> answers the owner's question: where does the compressor stop being the <em>cheapest</em> heat available? For an all-electric house with resistance backup, the heat pump at any COP above 1.0 beats its own strips, so the economic answer is simple — run the compressor as low as it will go and stage strips only for the gap. But pair the heat pump with a <strong>gas furnace</strong> (dual fuel, Module 8) and the comparison changes: gas delivers heat at its own price per Btu, and there is a COP threshold — set by the two fuel prices — below which burning gas is cheaper than moving heat. Where the heat pump's COP curve crosses that threshold is the economic balance point, and it usually sits <em>above</em> (warmer than) the thermal balance point: the control switches to gas while the heat pump could still physically carry the load, because carrying it costs more.</p>
<ul>
<li><strong>Fuel prices move it.</strong> Economic balance point is a settings decision, revisited when gas or electric rates change — not a factory constant.</li>
<li><strong>Comfort moves it too.</strong> Heat pump supply air is gentle; at deep cold, long runtimes and cool-feeling supply air push some owners to switch to the furnace earlier than economics alone dictates. A good control strategy names both numbers and who chose them.</li>
<li><strong>Never set changeover by folklore.</strong> "Switch at 40°F" wastes the heat pump's best COP hours in many climates; "never switch" can waste money where gas is cheap. Compute from the actual table and actual tariffs.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Thermal balance point = physics (capacity meets load). Economic balance point = prices (COP meets the alternative fuel's cost). Dual-fuel controls change over on the economic one; aux-strip controls supplement below the thermal one. Confusing the two is how heat pumps get blamed for high bills they didn't cause.</div>`
    },
    {
      heading: "Cold-Climate Heat Pumps: Extending the Line",
      html: `
<p>Conventional single-stage heat pumps lose capacity so fast that in cold climates they were long treated as shoulder-season appliances. <strong>Cold-climate</strong> designs attack the capacity slope itself:</p>
<ul>
<li><strong>Inverter-driven compressors</strong> run variable speed: overspeeding in cold weather to hold capacity up, loafing in mild weather at superb COP — the capacity 'line' becomes a band the control can choose within.</li>
<li><strong>Vapor injection (enhanced vapor injection)</strong> feeds a portion of refrigerant mid-compression, boosting mass flow and capacity at low temperatures and protecting discharge temperature — the technology behind manufacturer claims of full or near-full capacity at temperatures where conventional units have fallen to half.</li>
<li><strong>Larger coils and smarter defrost</strong> trim the frost tax: demand defrost (only when frost is actually present) instead of timed defrosts that reverse the machine on clear cold days.</li>
</ul>
<p>Verify claims the professional way: cold-climate performance is documented in manufacturer extended tables and independent listing directories — read the unit's capacity <em>at your design temperature</em>, not the headline at 47°F. What cold-climate engineering does <strong>not</strong> repeal: COP still declines with lift (a great unit at 5°F is working at a fraction of its 47°F COP), the load line still climbs, and a balance point still exists — it has simply been pushed down the thermometer, in the best cases below the local design temperature so auxiliary heat becomes a rarely used insurance policy rather than a nightly partner.</p>
<div class="callout"><strong>Key idea:</strong> Size and set up cold-climate systems from their low-temperature table rows. The design workflow is unchanged since section 2: draw the load line, lay the real capacity against it, find the crossing, size aux for the design-day gap (which may now be zero — if the table truly says so at design temp, with defrost reality honestly considered).</div>`
    }
  ],
  keyTerms: [
    { term: "COP (coefficient of performance)", def: "Heat delivered divided by energy input in common units: COP = Output (Btu/h) ÷ (Watts × 3.412). Above 1.0 because the machine moves heat rather than converting all of it." },
    { term: "Capacity table", def: "The manufacturer's published output and power draw at standard outdoor temperatures (classic points 47°F and 17°F); the source for all balance-point work." },
    { term: "Load line", def: "The house's heat loss plotted against outdoor temperature: zero at the balance temperature (~65°F) and equal to design load at design temperature, straight between." },
    { term: "Capacity line", def: "The heat pump's deliverable output plotted against outdoor temperature, falling as temperature drops; interpolated between table points." },
    { term: "Thermal balance point", def: "The outdoor temperature where heat pump capacity equals house load; below it, auxiliary heat must supply the difference." },
    { term: "Economic balance point", def: "The outdoor temperature where the heat pump's COP makes its heat cost equal to the alternative fuel's; the changeover setting for dual-fuel systems — usually warmer than the thermal balance point." },
    { term: "Auxiliary heat", def: "The backup heat source (usually electric resistance strips, or a furnace in dual fuel) that supplements or replaces the heat pump below the balance point." },
    { term: "Lift", def: "The temperature difference the compressor must raise refrigerant across, from outdoor coil to indoor coil; bigger lift = lower COP and capacity." },
    { term: "Balance temperature", def: "The outdoor temperature at which a house needs no heating (internal gains balance losses); the load line's zero point, conventionally ~65°F." },
    { term: "Design temperature", def: "The near-extreme outdoor temperature a system is sized for locally; the load line's other anchor." },
    { term: "Cold-climate heat pump", def: "A heat pump engineered for low-temperature capacity — inverter compressor, often vapor injection, demand defrost — documented by capacity at low rating temperatures." },
    { term: "Vapor injection", def: "Feeding refrigerant vapor mid-compression to raise mass flow and low-temperature capacity while limiting discharge temperature." },
    { term: "Inverter-driven compressor", def: "A variable-speed compressor that modulates capacity with load — overspeeding in cold snaps, cruising efficiently in mild weather." },
    { term: "Demand defrost", def: "Defrost initiated by sensed frost need rather than a fixed timer, reducing needless reversals and their capacity penalty." },
    { term: "Emergency heat", def: "Manual mode running the auxiliary heat alone with the heat pump off — for heat pump failure, not a normal cold-weather setting." },
    { term: "Supplementary heat", def: "Auxiliary heat operating alongside the heat pump to close the capacity gap below the balance point (distinct from emergency heat, which replaces it)." }
  ],
  video: {
    title: "HVAC Heat Pump Basics",
    embedUrl: "https://www.youtube.com/embed/vQohvbck0pw",
    note: "HVAC School's grounding in how a heat pump moves heat — the refrigeration cycle running in reverse, the reversing valve, and the components whose winter behavior this module quantifies. Watch it to keep the physical machine in view while the module works its COP and balance-point arithmetic.",
    more: [
      { title: "Heat Pump Troubleshooting- Testing Defrost Board to Force Defrost!", url: "https://www.youtube.com/watch?v=5c5R3uYSy5U" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A heat pump delivers 27,000 Btu/h while drawing 2,700 W. (a) Compute its COP. (b) How many Btu/h of that delivery were 'harvested' from outdoor air rather than converted from electricity?</p>",
      solution: "<p><strong>Solution:</strong> (a) Input in Btu/h = 2,700 × 3.412 = 9,212 Btu/h. COP = 27,000 ÷ 9,212 ≈ <strong>2.93</strong>. (b) Heat from electricity ≈ the input itself, 9,212 Btu/h; the remainder was moved from outdoors: 27,000 − 9,212 = <strong>17,788 Btu/h harvested</strong>. Sanity check: at COP 2.93, electricity supplies about 1/2.93 ≈ 34% of delivered heat — matching 9,212 ÷ 27,000 ≈ 34%.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> From a unit's table: at 47°F, output 33,500 Btu/h drawing 2,900 W; at 17°F, output 21,800 Btu/h drawing 2,650 W. Compute COP at both points and comment on the two trends (capacity and COP) the table reveals.</p>",
      solution: "<p><strong>Solution:</strong> At 47°F: input = 2,900 × 3.412 = 9,895 Btu/h; COP = 33,500 ÷ 9,895 ≈ <strong>3.39</strong>. At 17°F: input = 2,650 × 3.412 = 9,042 Btu/h; COP = 21,800 ÷ 9,042 ≈ <strong>2.41</strong>. Trends: capacity fell by 11,700 Btu/h (about 35%) while power draw barely changed — the machine works nearly as hard to deliver much less heat, because lift grew and each revolution harvests less from colder air. That combination — falling output, stubborn input — is exactly why COP is a condition, not a nameplate.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A house has a design load of 36,000 Btu/h at 10°F. A heat pump's table gives 30,000 Btu/h at 47°F and 19,000 Btu/h at 17°F. (a) Build the load line (slope and equation). (b) Build the capacity line. (c) Solve for the thermal balance point and verify by checking load and capacity there.</p>",
      solution: "<p><strong>Solution:</strong> (a) Load slope = 36,000 ÷ (65 − 10) = 36,000 ÷ 55 ≈ 654.5 Btu/h per °F. Load(T) = 654.5 × (65 − T). (b) Capacity slope = (30,000 − 19,000) ÷ (47 − 17) = 11,000 ÷ 30 ≈ 366.7 Btu/h per °F. Capacity(T) = 30,000 − 366.7 × (47 − T) = 12,767 + 366.7T. (c) Set equal: 654.5 × (65 − T) = 12,767 + 366.7T → 42,545 − 654.5T = 12,767 + 366.7T → 29,778 = 1,021.2T → <strong>T ≈ 29.2°F</strong>. Verify: Load = 654.5 × (65 − 29.2) = 654.5 × 35.8 ≈ 23,430 Btu/h. Capacity = 12,767 + 366.7 × 29.2 ≈ 12,767 + 10,708 ≈ 23,475 Btu/h. Equal within rounding ✓ — balance point ≈ <strong>29°F</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Using Problem 3's system: at the design temperature of 10°F, how much auxiliary heat (Btu/h) must be available, and what does that become in kW of resistance heat? (1 kW = 3,412 Btu/h.)</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Load at 10°F = 36,000 Btu/h (the design load, by definition). Step 2: Capacity at 10°F = 12,767 + 366.7 × 10 ≈ 16,434 Btu/h. Step 3: Gap = 36,000 − 16,434 = <strong>19,566 Btu/h</strong> of auxiliary heat required at design. Step 4: In kW: 19,566 ÷ 3,412 ≈ <strong>5.7 kW</strong> — the aux bank must provide at least this (staged sensibly), or the house loses temperature on design nights no matter how well everything else works.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A dual-fuel customer's changeover is set at 45°F 'because that's what we've always done.' Their heat pump's COP at 35°F is still well above the economic threshold for their fuel prices. Describe the cost of that setting over a season and how you would reset the changeover properly.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Between 45°F and the true economic balance point, the house burns gas for heat the heat pump could have delivered more cheaply — every hour in that band pays furnace prices for heat-pump work. Across a season's many mild hours, that is the largest single controllable waste in the system. Step 2: Proper method: from the unit's capacity/COP table, find where COP crosses the threshold set by the customer's actual gas and electric prices (economic balance point), and set changeover there — typically well below 45°F for modern equipment. Step 3: Verify the heat pump can still carry the load at that temperature (compare against the thermal balance point) and confirm the control enforces the compressor/furnace lockouts Module 8 describes. Step 4: Document both balance points on the ticket so the next tech doesn't 'restore' the folklore setting.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A cold-climate unit's extended table shows it holding 30,000 Btu/h at 5°F, and the house's design load is 29,000 Btu/h at 5°F. A coworker says auxiliary heat is therefore unnecessary and should be omitted to save cost. Give the professional counter-argument.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The table value is a steady-state rating at a test condition; real design nights add defrost cycles (which temporarily reverse the machine and draw indoor heat), wind, and voltage and installation variation — the delivered margin over the load is 1,000 Btu/h on paper, effectively zero in weather. Step 2: Auxiliary heat is also the <em>emergency</em> heat: when (not if, over a 15+ year life) the outdoor unit is down for a board or compressor failure in January, aux is the difference between a service call and frozen pipes. Step 3: Recommendation: install staged aux sized for the design gap plus failure backup (often the full load, per local practice and code), set it to engage only when the balance-point math or a fault actually requires it. The saving from omission is small; the first no-heat night erases it.</p>"
    }
  ],
  quiz: [
    {
      q: "A heat pump delivers 30,000 Btu/h drawing 2,500 W. Its COP is approximately:",
      choices: ["1.2", "3.5", "5.0", "12.0"],
      answer: 1,
      explanation: "Correct: (b). Input = 2,500 × 3.412 = 8,530 Btu/h; COP = 30,000 ÷ 8,530 ≈ 3.5. (a) would mean it barely beats resistance heat — inconsistent with moving heat at a mild lift. (c) requires input of only ~1,760 W at this output. (d) confuses the division, effectively dividing output by watts without the 3.412 conversion — the classic COP arithmetic trap."
    },
    {
      q: "As outdoor temperature falls, a heat pump's COP falls mainly because:",
      choices: ["The thermostat calls more often", "The compressor's temperature lift grows, so each unit of heat moved costs more work", "Refrigerant thickens and stops flowing", "The indoor coil gets cleaner"],
      answer: 1,
      explanation: "Correct: (b). Lift is the physics: colder source, same warm destination, more compression work per Btu delivered — visible in tables as falling output at nearly constant watt draw. (a) Call frequency is a consequence, not a cause. (c) Refrigerant behavior changes with temperature but does not 'stop flowing'; capacity decline is a lift/mass-flow story. (d) Coil cleanliness affects airflow heat transfer, not the seasonal COP trend."
    },
    {
      q: "The thermal balance point is the outdoor temperature where:",
      choices: ["The thermostat switches to emergency heat", "Heat pump capacity exactly equals the house's heat loss", "COP reaches 1.0", "Defrost begins"],
      answer: 1,
      explanation: "Correct: (b). It is the crossing of the capacity line and load line — a calculated property of the house-plus-machine pairing. (a) Emergency heat is a manual/failure mode, unrelated to the crossing. (c) COP at the balance point is typically still well above 1.0; the limit is capacity, not efficiency. (d) Defrost depends on frost accumulation in a temperature/humidity band, not on the load crossing."
    },
    {
      q: "Below the balance point, auxiliary heat must supply:",
      choices: ["The entire house load", "Only the gap between the load and the heat pump's capacity at that temperature", "Half the load, by code", "Nothing — the heat pump just runs longer"],
      answer: 1,
      explanation: "Correct: (b). The compressor keeps delivering everything it can; aux fills the difference (at design: load − capacity at design temp). Sizing aux for the gap — plus failure-backup judgment — is the correct calc, as in Problem 4. (a) describes emergency heat mode with the compressor off. (c) No such fractional rule exists. (d) Below the crossing, running longer cannot create capacity that isn't there — the house would steadily lose temperature."
    },
    {
      q: "The economic balance point differs from the thermal balance point in that it is set by:",
      choices: ["The size of the ductwork", "Fuel and electricity prices compared against the COP curve — where the alternative fuel becomes cheaper heat", "The coldest night on record", "The manufacturer's shipping date"],
      answer: 1,
      explanation: "Correct: (b). It is a price calculation: as COP decays with temperature, at some point gas heat costs less per delivered Btu, and dual-fuel controls change over there — usually above (warmer than) the thermal point. (a) Ducts affect delivered comfort, not the price crossing. (c) Record cold informs design temperature, not economics. (d) Irrelevant — and the economic point moves when tariffs change, which no factory date can fix."
    },
    {
      q: "A house's load slope is 600 Btu/h per °F with a 65°F balance temperature. Its heat loss at 25°F is:",
      choices: ["15,000 Btu/h", "24,000 Btu/h", "39,000 Btu/h", "60,000 Btu/h"],
      answer: 1,
      explanation: "Correct: (b). Load = 600 × (65 − 25) = 600 × 40 = 24,000 Btu/h. (a) uses a 25°F difference instead of 40. (c) multiplies the slope by 65 without subtracting the outdoor temperature. (d) multiplies by 100 — a units slip the load-line formula (slope × ΔT from balance temperature) prevents."
    },
    {
      q: "Cold-climate heat pumps hold capacity at low temperatures primarily through:",
      choices: ["Bigger auxiliary strips", "Inverter compressors that overspeed in the cold, often with vapor injection boosting mass flow", "Thinner refrigerant oil", "Homeowner window plastic"],
      answer: 1,
      explanation: "Correct: (b). Variable-speed compression plus vapor injection directly attacks the capacity slope — verified in the unit's low-temperature table rows. (a) Strips are auxiliary heat, not heat pump capacity — the distinction the module exists to teach. (c) Oil selection matters for reliability, not headline capacity. (d) Weatherization lowers the load line (genuinely valuable) but does nothing for the machine's capacity curve."
    },
    {
      q: "Why do published capacity tables tend to flatter real output on a damp 30°F night?",
      choices: ["The tables assume the house is at 65°F", "They are steady-state values that don't include defrost cycles, which periodically reverse the unit and consume delivered heat", "Manufacturers test only in summer", "The tables are for cooling mode"],
      answer: 1,
      explanation: "Correct: (b). Frost-band operation taxes net capacity with defrost reversals and the heat they pull from the house; a table's steady heating number can't show it. Demand defrost and honest design margins account for it. (a) Indoor test conditions are standardized and not the source of the gap. (c) The heating tables come from standardized heating tests. (d) The heating table is explicitly heating mode — the defrost omission is the real caveat."
    }
  ],
  studyGuide: `
<h3>Module 7 — Heat Pump Heating Performance: Quick Reference</h3>
<div class="formula">COP = Output (Btu/h) ÷ (Watts × 3.412). 36,000 out ÷ (3,000 W × 3.412) ≈ 3.5. Resistance heat COP = 1.0. COP is a condition, not a nameplate.</div>
<p><strong>Two lines rule everything:</strong> load line — slope = design load ÷ (65 − design temp), Load(T) = slope × (65 − T) • capacity line — falls from the table (47°F and 17°F points), interpolate between them.</p>
<p><strong>Thermal balance point</strong> = where the lines cross (worked example: 29°F, 28,800 Btu/h). Below it, aux supplies <em>the gap only</em>: gap(T) = load(T) − capacity(T). Size aux for the design-day gap + failure backup.</p>
<p><strong>Economic balance point</strong> = where COP's heat cost meets the other fuel's price; dual-fuel changeover lives here (usually warmer than thermal). Recompute when tariffs change — never set by folklore.</p>
<p><strong>Cold-climate units:</strong> inverter overspeed + vapor injection + demand defrost flatten the capacity line — verify from the table row at YOUR design temperature. COP still falls with lift; a balance point still exists, just lower. Tables are steady-state: defrost taxes real output in the frost band.</p>
`
};
