// HVAC 132 - Module 2: Fuels: Natural Gas & Propane
module.exports = {
  number: 2,
  slug: "fuels-natural-gas-propane",
  title: "Fuels: Natural Gas & Propane",
  estTime: "3–4 hours",
  objectives: [
    "Compare natural gas and propane by composition, heating value, density, and delivery method, and explain what each difference means in the field.",
    "Distinguish inlet (supply) pressure from manifold pressure and state the standard manifold settings for natural gas and propane.",
    "Explain the role of the burner orifice and why a fuel conversion requires orifice and regulator changes, never just a pressure tweak.",
    "Clock a gas meter to verify a furnace's actual input rate against its rating plate.",
    "Describe the components of a safe gas piping installation: shutoff, drip leg (sediment trap), and union.",
    "Explain why propane installations demand extra respect for low spots, tank regulation, and leak-checking discipline."
  ],
  sections: [
    {
      heading: "Two Fuels, Two Personalities",
      html: `
<p><strong>Natural gas</strong> is mostly methane, delivered by pipeline at low pressure, and it is used exactly as it arrives — a gas. <strong>Propane</strong> (liquefied petroleum gas, LP) is stored as a liquid under pressure in a tank on the property and boils off into vapor as the appliance draws it down. Both burn as hydrocarbon gases at the burner, but nearly every practical property differs:</p>
<ul>
<li><strong>Heating value.</strong> A cubic foot of natural gas carries roughly <strong>1,025 Btu</strong> (ASHRAE's standard figure). A cubic foot of propane vapor carries roughly <strong>2,500 Btu</strong> — about two and a half times as much energy in the same volume. A gallon of liquid propane holds about 91,600 Btu.</li>
<li><strong>Density.</strong> Natural gas is lighter than air (specific gravity ≈ 0.6) and rises when it leaks. Propane vapor is heavier than air (specific gravity ≈ 1.5) and sinks, pools, and creeps along floors — the Module 1 leak-response difference.</li>
<li><strong>Air requirements.</strong> More energy per cubic foot means propane needs proportionally more combustion air per cubic foot of fuel — one reason burner design and orifice sizing are fuel-specific.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Propane packs ~2.5× the Btu per cubic foot and is delivered at ~3× the manifold pressure through a much smaller hole. Everything about a fuel conversion — orifices, regulator springs, air adjustments — follows from those two facts.</div>
<p>Because the fuels are not interchangeable, an appliance is built and labeled for one fuel. Running natural gas through propane orifices starves the burner (tiny holes, low pressure); running propane through natural gas orifices massively over-fires it. Either direction is a service error with fire and CO consequences.</p>`
    },
    {
      heading: "Pressures: Inlet, Manifold, and the Inch of Water Column",
      html: `
<p>Gas pressures in residential work are so low that they are measured in <strong>inches of water column (in. w.c.)</strong> — the pressure needed to push a column of water that many inches up a U-tube. Twenty-seven point seven inches of water column is about 1 psi, which tells you how gentle these pressures are: a manifold pressure of 3.5 in. w.c. is roughly one-eighth of a psi. You measure them with a <strong>manometer</strong> (U-tube or digital), never with a psi gauge.</p>
<p>Two pressures matter at the appliance, and confusing them is a classic diagnostic error:</p>
<ul>
<li><strong>Inlet (supply) pressure</strong> — the pressure arriving at the gas valve inlet, measured at the inlet tap. It must sit inside the manufacturer's stated range (a common natural gas specification is a minimum near 4.5–5 in. w.c. and a maximum near 10.5 in. w.c. — always read the rating plate and manual for the unit in front of you). Inlet pressure is checked both static (no flow) and with the appliance — ideally all gas appliances — firing, because a supply that sags under load starves every burner on the line.</li>
<li><strong>Manifold (outlet) pressure</strong> — the pressure the valve's regulator delivers to the burners, measured at the outlet tap with burners firing. This is the setting that determines firing rate.</li>
</ul>
<div class="formula">Standard manifold settings: Natural gas ≈ 3.5 in. w.c. &nbsp;•&nbsp; Propane ≈ 10–11 in. w.c. (rating plate governs)</div>
<p>Why does propane run at three times the pressure? Because its orifices are sized much smaller to meter its energy-dense fuel, and pressure is what pushes fuel through the orifice and entrains primary air at the burner. The pair — orifice size plus manifold pressure — sets the input rate, which is the subject of the next section.</p>
<div class="callout"><strong>Key idea:</strong> Inlet pressure is the utility's (or tank regulator's) report card; manifold pressure is the appliance's firing-rate adjustment. Diagnose supply problems at the inlet tap, firing-rate problems at the manifold tap.</div>`
    },
    {
      heading: "Orifices: Where Input Rate Is Really Set",
      html: `
<p>An <strong>orifice</strong> is a precisely drilled brass fitting — the hole is specified by drill size — screwed into the manifold at each burner. Gas pressure pushes fuel through that hole; the jet of fuel then entrains (pulls in) <strong>primary air</strong> through the burner's air shutter before ignition. Orifice hole size × manifold pressure = fuel flow. Change either one and you change the firing rate.</p>
<p><strong>Worked example — why conversion is not a dial-turn.</strong> Suppose a furnace rated 80,000 Btu/h on natural gas is moved to a propane property. Propane carries ~2.44 times the Btu per cubic foot (2,500 ÷ 1,025), so the burners need only about 41% as much fuel volume per hour. The conversion kit therefore supplies <em>smaller</em> orifices, and the valve regulator is converted (spring or cap change) to deliver 10–11 in. w.c. instead of 3.5. Skip the orifice change and merely raise pressure, and the furnace over-fires violently — flames rolling out, exchanger overheating, CO production. Skip the pressure change and keep small orifices, and it under-fires — lazy flames, poor heat, possible delayed ignition. The kit exists because both halves of the pair must change together.</p>
<p>Field rules for orifices:</p>
<ul>
<li>Never drill out an orifice to "make it fit" a different fuel or firing rate; use the manufacturer's sized part.</li>
<li>A plugged orifice (spider webs, corrosion, pipe dope) starves one burner — look for the odd, weak flame in the row.</li>
<li>Altitude reduces air density, so input is commonly derated at elevation per manufacturer tables — another reason "the number on the plate" always wins over habit.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> The orifice is a metering instrument, not a piece of pipe. Firing rate = orifice size × manifold pressure; conversions change both, as a matched set, from the manufacturer's kit.</div>`
    },
    {
      heading: "Clocking the Meter: Verifying Input Rate",
      html: `
<p>Manifold pressure tells you the burners <em>should</em> be firing at rating — if the orifices are correct and the gas heating value matches the assumption. <strong>Clocking the meter</strong> verifies what the furnace is actually consuming. The gas meter measures volume; time one revolution of a test dial and convert:</p>
<div class="formula">Fuel flow (ft³/h) = 3,600 × dial size (ft³) ÷ seconds per revolution<br>Input (Btu/h) = fuel flow × heating value (Btu/ft³)</div>
<p><strong>Worked example.</strong> A natural gas furnace is nameplated at 90,000 Btu/h input. With all other gas appliances off (so the meter serves only the furnace), the 1 ft³ test dial takes 40 seconds per revolution. Flow = 3,600 × 1 ÷ 40 = 90 ft³/h. Input = 90 × 1,025 ≈ 92,250 Btu/h. That is within a few percent of the 90,000 rating — normal, since local gas heating value varies slightly. Now suppose the dial took only 30 seconds: flow = 120 ft³/h, input ≈ 123,000 Btu/h — the furnace is over-fired by more than a third, and you go looking for the cause (wrong orifices, manifold pressure set high, or a regulator fault) before anything else on the call.</p>
<p>Practical notes: clock on the smallest dial for resolution; make sure water heaters, dryers, and ranges are off or accounted for; and remember the meter measures <em>all</em> gas flowing through it. Clocking is the honesty check that ties Module 2's pressures and orifices to an actual firing rate — and over-firing found here explains the soot-and-CO failure chain from Module 1.</p>
<div class="callout"><strong>Key idea:</strong> Pressure is a setting; clocking is a measurement. When the two disagree with the rating plate, believe the meter and find out why.</div>`
    },
    {
      heading: "Piping Practice and Propane Particulars",
      html: `
<p>A safe appliance gas connection has a standard anatomy you should be able to spot — or spot missing — at a glance:</p>
<ul>
<li><strong>Manual shutoff valve</strong> within reach of the appliance, so fuel can be killed without tools or a trip to the meter.</li>
<li><strong>Drip leg (sediment trap)</strong> — a capped vertical nipple at the low point just before the appliance connection. It traps pipe scale, moisture, and debris before they reach the gas valve. It is not optional decoration; a valve ruined by debris can stick or leak through.</li>
<li><strong>Union or listed connector</strong> so the appliance can be disconnected for service.</li>
<li><strong>Leak check</strong> of every disturbed joint with leak-detection solution (bubbles) — never a flame.</li>
</ul>
<p><strong>Propane particulars.</strong> Propane's supply chain has extra links: the tank, a first-stage regulator at the tank, and typically a second-stage regulator at the building, delivering appliance pressure comparable to a natural gas service. Because propane sinks, code and common sense both treat low, enclosed equipment spaces with extra suspicion, and any propane leak search sweeps low (Module 1). Because the tank is finite, "out of fuel" is a normal no-heat cause — and an out-of-gas condition followed by a refill can leave appliances needing a controlled relight procedure rather than repeated ignition attempts cycling air into the line.</p>
<div class="callout"><strong>Key idea:</strong> Shutoff, drip leg, union, leak check — if any element is missing on an install you touch, say so on the ticket. On propane, add: check the tank gauge before you condemn a single part.</div>`
    }
  ],
  keyTerms: [
    { term: "Inch of water column (in. w.c.)", def: "The low-pressure unit used for fuel gas; about 27.7 in. w.c. equals 1 psi." },
    { term: "Manometer", def: "An instrument (U-tube or digital) that measures gas pressure in inches of water column." },
    { term: "Inlet (supply) pressure", def: "Gas pressure arriving at the appliance gas valve, measured at the inlet tap; must fall within the manufacturer's range, under load as well as static." },
    { term: "Manifold pressure", def: "The regulated pressure delivered by the gas valve to the burners; standard settings are about 3.5 in. w.c. for natural gas and 10–11 in. w.c. for propane." },
    { term: "Orifice", def: "A precisely drilled fitting at each burner that meters fuel flow; its size, with manifold pressure, sets the firing rate." },
    { term: "Primary air", def: "Combustion air entrained by the gas jet at the burner, before ignition; adjusted by air shutters on many burners." },
    { term: "Heating value", def: "The heat released by burning a unit of fuel — about 1,025 Btu/ft³ for natural gas and about 2,500 Btu/ft³ for propane vapor." },
    { term: "Specific gravity (gas)", def: "Density of a gas relative to air; natural gas ≈ 0.6 (rises), propane ≈ 1.5 (sinks and pools)." },
    { term: "Clocking the meter", def: "Timing a gas meter test dial to compute actual fuel flow and verify the appliance input rate in Btu/h." },
    { term: "Drip leg / sediment trap", def: "A capped nipple at the low point before the appliance that collects debris and moisture before they reach the gas valve." },
    { term: "Over-firing", def: "Delivering more fuel than the appliance rating — from high manifold pressure or oversized orifices; causes overheating, soot, and CO." },
    { term: "Under-firing", def: "Delivering less fuel than rating; causes poor heat, lazy flames, and possible ignition problems." },
    { term: "Input rate", def: "The fuel energy consumed per hour (Btu/h in), as listed on the rating plate; distinct from output (input × efficiency)." },
    { term: "Regulator", def: "A pressure-reducing device; the gas valve contains one for manifold pressure, and propane systems add tank and building regulators." },
    { term: "Liquefied petroleum gas (LP)", def: "Propane stored as a liquid under pressure that vaporizes as it is drawn from the tank." },
    { term: "Conversion kit", def: "The manufacturer's matched set of orifices and regulator parts required to change an appliance from one fuel to the other." },
    { term: "Union", def: "A three-piece pipe fitting that lets the appliance be disconnected from the gas line for service." },
    { term: "Test dial", def: "The small dial on a gas meter (commonly ½, 1, or 2 ft³ per revolution) timed during clocking to measure flow." }
  ],
  video: {
    title: "Checking and Adjusting the Outlet Gas Pressure going to the Burner Tubes on a Gas Furnace!",
    embedUrl: "https://www.youtube.com/embed/xvQabz6d_4g",
    note: "AC Service Tech walks through finding the target manifold pressure on the rating plate, connecting a digital manometer in inches of water column, and adjusting outlet pressure up or down. Compare what you see with this module's standard natural gas setting of 3.5 in. w.c.",
    more: [
      { title: "Tech Tips / Gas Pressure Adjustments", url: "https://www.youtube.com/watch?v=f-wUhU1FzrY" },
      { title: "Measuring & Adjusting Furnace Gas Pressure X2", url: "https://www.youtube.com/watch?v=rhNn3jYUjWc" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A furnace nameplated at 100,000 Btu/h input on natural gas is meter-clocked: the 1 ft³ dial takes 36 seconds per revolution with only the furnace firing. Compute the actual input rate (use 1,025 Btu/ft³) and state whether the furnace is firing on rate, and by roughly what percentage it is off if it is not.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Flow = 3,600 × 1 ft³ ÷ 36 s = 100 ft³/h. Step 2: Input = 100 × 1,025 = 102,500 Btu/h. Step 3: Compare with the 100,000 Btu/h rating: 102,500 ÷ 100,000 = 1.025, i.e., about 2.5% high. Step 4: Verdict — essentially on rate. Small deviations like this are expected because local gas heating value differs slightly from any single assumed figure; a deviation of a few percent is not a fault. Deviations of 10%+ demand a cause: check manifold pressure and orifice sizes.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> The same furnace is clocked again after a gas valve replacement and the 1 ft³ dial now takes 45 seconds. Compute the new input and explain the customer complaint this firing rate would produce, plus the first two things you would check.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Flow = 3,600 ÷ 45 = 80 ft³/h. Step 2: Input = 80 × 1,025 = 82,000 Btu/h — 18% under the 100,000 rating: under-fired. Step 3: The complaint would be weak heat on cold days — long run times, house struggling to reach setpoint — exactly what a customer reports as 'the furnace runs all the time and it's still cold.' Step 4: First checks: (1) manifold pressure with a manometer — a replacement valve is commonly left at a default or mis-set adjustment; set to the rating plate (about 3.5 in. w.c. for natural gas). (2) Inlet pressure under load — if inlet sags below the manufacturer's minimum when firing, the problem is supply, not the valve. Step 5: Re-clock after correction to prove the fix.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Explain why a propane conversion cannot be done by adjusting manifold pressure alone, using heating values in your reasoning. Your answer should state what happens to the firing rate if only the pressure change is made on natural-gas orifices.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Propane vapor carries ≈ 2,500 Btu/ft³ versus ≈ 1,025 for natural gas — about 2.44× the energy per unit volume. Step 2: To keep input the same, fuel volume flow must drop to about 1 ÷ 2.44 ≈ 41% of the natural gas volume. Step 3: If the technician only raises manifold pressure from 3.5 to ~10.5 in. w.c. on the existing natural gas orifices, two multipliers stack in the wrong direction: the orifices stay large AND pressure nearly triples, pushing far more propane volume through — and each cubic foot carries 2.44× the energy. Step 4: Result: catastrophic over-firing — flame rollout, exchanger overheating, soot and CO. Step 5: A proper conversion changes both halves of the metering pair: smaller orifices from the manufacturer's kit AND the regulator conversion to propane manifold pressure, followed by clocking/pressure verification and a combustion test.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A manometer on the manifold tap reads 3.5 in. w.c., yet the meter clocks 25% fast. List the most likely physical causes and the order in which you would check them.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Clocking measures actual volume; manifold pressure is only correct <em>for the intended orifices</em>. If flow is 25% high at correct pressure, suspect the holes, not the regulator. Step 2: Check orifice drill sizes against the rating plate/manual — oversized or wrong-fuel (or drilled-out) orifices are the prime suspect, e.g., a unit converted in paperwork only. Step 3: Verify the number of burners/orifices matches the model (a manifold swapped from a larger sibling model over-fires quietly). Step 4: Confirm the heating value assumption — if the local gas runs richer than 1,025 Btu/ft³ the input is legitimately higher; the utility can confirm. Step 5: Also verify your clocking conditions — another appliance (water heater) firing during the test adds its flow to the meter and fakes an over-fire. Rule that out by re-clocking with everything else off.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Convert 3.5 in. w.c. and 10.5 in. w.c. to psi (27.7 in. w.c. ≈ 1 psi) and explain why a standard pressure gauge reading in psi is the wrong tool for setting manifold pressure.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: 3.5 ÷ 27.7 ≈ 0.126 psi. Step 2: 10.5 ÷ 27.7 ≈ 0.379 psi. Step 3: Manifold settings live in the first few tenths of a psi. A typical psi gauge (0–30 or 0–100 psi) cannot resolve a tenth of a psi — the difference between a correct 3.5 in. w.c. (0.126 psi) and a dangerous 5 in. w.c. (0.18 psi) is invisible on its dial. Step 4: The manometer — U-tube or digital — reads directly in inches of water column with the resolution the adjustment demands. Right units, right tool: gas pressures in this trade are water-column work.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> On a propane no-heat call you find the tank gauge reading empty, and the homeowner says the tank was filled yesterday. Give two explanations consistent with both facts, and the checks that separate them.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Explanation A — the delivery did not actually fill this tank (wrong address, delivery to a different tank, billing error); the gauge is telling the truth. Check: read the tank's percentage gauge yourself and compare with the delivery ticket; check for a second tank on the property. Step 2: Explanation B — the tank has fuel but a regulator or supply fault is starving the line, and the 'empty' reading is at a remote/secondary gauge that is itself faulty or reflects line pressure rather than tank level. Check: read the gauge on the tank itself (percentage dial on the tank), then measure inlet pressure at the appliance with a manometer — normal tank level plus near-zero inlet pressure points at the regulator chain or a closed service valve. Step 3: Explanation C (a third possibility worth ruling out): a leak emptied the delivered fuel — if you smell propane near the tank or lines, switch to the Module 1 leak response before any further diagnosis. Fuel first, parts second — most 'bad burner' calls on propane begin at the tank.</p>"
    }
  ],
  quiz: [
    {
      q: "Standard manifold pressure settings taught for residential furnaces are approximately:",
      choices: ["3.5 in. w.c. natural gas; 10–11 in. w.c. propane", "7 in. w.c. for both fuels", "10–11 in. w.c. natural gas; 3.5 in. w.c. propane", "0.5 psi natural gas; 2 psi propane"],
      answer: 0,
      explanation: "Correct: (a) Natural gas manifold pressure is set around 3.5 in. w.c.; propane around 10–11 in. w.c., with the unit's rating plate governing. (b) ~7 in. w.c. is a typical natural gas inlet pressure, not a manifold setting, and one setting for both fuels ignores their different metering. (c) The values are reversed — propane is the high-pressure, small-orifice fuel. (d) Manifold pressures are fractions of a psi (3.5 in. w.c. ≈ 0.13 psi); 0.5–2 psi would be wildly over-fired."
    },
    {
      q: "Propane requires smaller orifices than natural gas for the same input rate mainly because:",
      choices: ["Propane is stored as a liquid", "Each cubic foot of propane vapor carries about 2.5 times the Btu of a cubic foot of natural gas", "Propane burns at a lower temperature", "Propane appliances are always smaller"],
      answer: 1,
      explanation: "Correct: (b) At ≈2,500 Btu/ft³ versus ≈1,025 Btu/ft³, far less propane volume is needed per hour, so the metering hole shrinks (and pressure rises to move and mix it properly). (a) Storage state explains the tank and regulators, not orifice size — propane reaches the burner as vapor in both designs. (c) Propane does not burn cooler; flame temperature is not the sizing driver. (d) Appliance size is independent of fuel choice; the same model is offered in both fuels with different orifices."
    },
    {
      q: "Inlet pressure is measured at the gas valve inlet tap primarily to:",
      choices: ["Set the firing rate", "Verify the supply delivers enough pressure, including under load", "Check the orifice drill size", "Measure the heating value of the gas"],
      answer: 1,
      explanation: "Correct: (b) Inlet pressure is the supply's report card — it must stay within the manufacturer's range with the appliance (ideally all appliances) firing, or burners starve. (a) Firing rate is set at the manifold (outlet) side by the regulator and orifices. (c) Orifice size is read from the fitting itself or the manual, not inferred from inlet pressure. (d) A manometer measures pressure only; heating value comes from the utility's published figures."
    },
    {
      q: "Clocking a meter: the 2 ft³ test dial takes 60 seconds per revolution. The fuel flow is:",
      choices: ["60 ft³/h", "120 ft³/h", "30 ft³/h", "3,600 ft³/h"],
      answer: 1,
      explanation: "Correct: (b) Flow = 3,600 × dial size ÷ seconds = 3,600 × 2 ÷ 60 = 120 ft³/h. (a) 60 ft³/h results from ignoring the dial size (treating it as 1 ft³). (c) 30 ft³/h comes from dividing 3,600 by 120, mixing up the arithmetic. (d) 3,600 ft³/h is the un-divided constant — the seconds-per-revolution step is what converts it into an hourly rate."
    },
    {
      q: "The drip leg (sediment trap) in an appliance gas line exists to:",
      choices: ["Raise the manifold pressure", "Trap debris and moisture before they reach the gas valve", "Vent excess gas pressure outdoors", "Measure gas flow to the appliance"],
      answer: 1,
      explanation: "Correct: (b) The capped low-point nipple catches pipe scale, rust, and moisture so they don't foul the gas valve's seats and regulator. (a) Pressure is the regulator's job; a passive trap changes nothing. (c) Venting fuel gas indoors would be a hazard, not a feature — nothing in the appliance piping vents gas by design. (d) Flow measurement is done at the meter by clocking; the trap has no measuring function."
    },
    {
      q: "A furnace fires at correct manifold pressure but clocks 30% fast. The most likely cause is:",
      choices: ["Orifices too large (or wrong fuel's orifices installed)", "Manifold pressure gauge error", "Low inlet pressure", "A dirty air filter"],
      answer: 0,
      explanation: "Correct: (a) Flow through an orifice depends on hole size and pressure; with pressure correct, excess volume means excess hole area — wrong, drilled, or wrong-fuel orifices. (b) The premise states pressure is correct; and a gauge error would have to fake the pressure reading while the clocking independently shows real excess flow. (c) Low inlet pressure would starve flow, pushing clocking slow, not fast. (d) Air filters affect airflow and temperature rise, not fuel consumption rate."
    },
    {
      q: "Why is a propane leak in a basement mechanical room treated with even more caution than the same size natural gas leak?",
      choices: ["Propane is more toxic than natural gas", "Propane vapor is heavier than air and pools in low spaces at explosive concentration", "Propane has no odorant added", "Propane leaks cannot be detected with electronic detectors"],
      answer: 1,
      explanation: "Correct: (b) With specific gravity ≈ 1.5, propane sinks and accumulates along floors and in pits — a basement is itself the low spot, so an explosive layer can persist at equipment level. (a) Neither fuel gas is the toxic hazard in this scenario; asphyxiation and explosion are, and CO belongs to combustion, not leaks. (c) Propane is odorized with mercaptan just as natural gas is. (d) Combustible-gas detectors sense propane readily; the difference is where you sweep — low for propane, high for natural gas."
    },
    {
      q: "Before clocking a furnace's meter, the most important setup step is to:",
      choices: ["Raise the thermostat to maximum", "Make sure no other gas appliance is drawing through the meter (or account for it)", "Remove the manifold pressure tap plug", "Close the drip leg cap"],
      answer: 1,
      explanation: "Correct: (b) The meter totals every appliance's flow; a water heater firing mid-test inflates the reading and fakes an over-fire. Shut other appliances off or verify they're idle. (a) The furnace must be firing steadily, but thermostat setting beyond 'call for heat' doesn't change a single-stage firing rate. (c) The manifold tap is for pressure measurement, unnecessary for clocking and a leak risk if left open. (d) The drip leg cap is never opened as part of clocking — disturbing it adds a leak-check obligation for no benefit."
    }
  ],
  studyGuide: `
<h3>Module 2 — Fuels: Natural Gas & Propane: Quick Reference</h3>
<p><strong>Fuel facts:</strong> Natural gas ≈ 1,025 Btu/ft³, SG ≈ 0.6 (rises). Propane vapor ≈ 2,500 Btu/ft³, ≈ 91,600 Btu/gal liquid, SG ≈ 1.5 (sinks, pools low).</p>
<p><strong>Pressures (rating plate governs):</strong> manifold — natural gas ≈ <strong>3.5 in. w.c.</strong>, propane ≈ <strong>10–11 in. w.c.</strong> Inlet natural gas commonly specified ≈ 4.5–10.5 in. w.c. range; check static AND under load. 27.7 in. w.c. ≈ 1 psi. Measure with a manometer, never a psi gauge.</p>
<p><strong>Metering:</strong> firing rate = orifice size × manifold pressure. Conversions change BOTH (kit orifices + regulator conversion). Never drill an orifice.</p>
<p><strong>Clocking:</strong> flow (ft³/h) = 3,600 × dial ft³ ÷ seconds/rev; input = flow × heating value. Other appliances OFF during the test. Compare to rating plate; a few % is gas-value variation, 10%+ is a fault.</p>
<p><strong>Piping anatomy:</strong> shutoff valve → drip leg (sediment trap) → union → appliance. Leak-check disturbed joints with solution, never flame. Propane: check tank gauge first on any no-heat call; sweep leak detector low.</p>
<p><strong>Field habit:</strong> on every gas call, touch both taps — inlet under load, manifold firing — and clock the meter when anything disagrees with the plate. Pressures you measured beat pressures you assumed, every single time.</p>
`
};
