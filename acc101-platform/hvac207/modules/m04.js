// HVAC 207 - Module 4: Multiple-Evaporator Systems & EPR Valves
module.exports = {
  number: 4,
  slug: "multiple-evaporator-systems-epr-valves",
  title: "Multiple-Evaporator Systems & EPR Valves",
  estTime: "3–4 hours",
  objectives: [
    "Explain why one compressor serving several evaporators must run at the pressure of the coldest load.",
    "Describe how an evaporator pressure regulator (EPR) holds a warmer evaporator above the common suction pressure.",
    "Work a pressure example: convert EPR settings and suction pressure to evaporating temperatures with an R-404A P/T chart.",
    "State what a crankcase pressure regulator (CPR) protects against and where it sits in the system.",
    "Describe how individual evaporators are isolated for defrost and service with solenoid valves on a shared system."
  ],
  sections: [
    {
      heading: "One Compressor, Several Temperatures",
      html: `
<p>Small commercial jobs often gang several evaporators onto one condensing unit: a deli might run a reach-in case, a prep table, and a small walk-in from a single compressor. The economy is obvious — one compressor, one condenser, one electrical feed. The physics problem is just as obvious: all the evaporators share one suction line, so they all "see" one suction pressure at the compressor. And suction pressure sets evaporating temperature through the P/T relationship.</p>
<p>The rule that follows is absolute: <strong>the compressor must run at the pressure demanded by the coldest evaporator</strong>. If the walk-in freezer needs refrigerant boiling at −10°F while the deli case needs 30°F, the common suction pressure must satisfy the freezer. Left unregulated, the deli case evaporator would be dragged down toward freezer pressure too — freezing product, frosting solid, and wasting energy. The device that rescues the warmer evaporators is the EPR valve, and understanding it is the heart of this module.</p>
<div class="callout"><strong>Key idea:</strong> On a shared system, suction pressure belongs to the coldest load. Every warmer evaporator needs its own way to stay warmer — that way is the EPR.</div>
<p>You will also meet the mirror-image arrangement — one evaporator fed by a small dedicated condensing unit — all over small food service, and it is worth seeing the trade plainly: dedicated units waste nothing on throttling and control themselves simply, but multiply compressors, electrical feeds, and failure points. The shared system concentrates all of that into one machine that must be understood as a system, which is exactly the understanding this course is building.</p>`
    },
    {
      heading: "The EPR Valve: A Throttle in the Suction Line",
      html: `
<p>An <strong>evaporator pressure regulator</strong> is installed in the suction line at the outlet of an individual evaporator. It is a pressure-regulating valve that senses the pressure <em>upstream of itself</em> — inside its evaporator — and throttles the vapor leaving so that evaporator pressure never falls below the valve's setting. If the common suction header drops lower, the EPR simply closes down further, holding its evaporator up at the set pressure while the vapor that does pass expands into the lower-pressure header.</p>
<p>The effect in temperature terms is direct: hold the pressure, and you hold the evaporating temperature. An EPR set to keep an evaporator at the pressure corresponding to 30°F keeps that coil boiling at 30°F even while the header beyond it runs at freezer pressure. The warmer evaporator gives up a little efficiency — its vapor is throttled, and throttling is wasted pressure drop — but it gains correct temperature, and the product is worth more than the watts.</p>
<p>Two practical notes. First, an EPR can only hold an evaporator <em>warmer</em> than the header; it cannot make an evaporator colder than the common suction allows. Second, because a pump-down cycle cannot easily empty an evaporator through a throttled EPR, systems with EPRs often add a bypass arrangement or control the whole system by thermostat-and-solenoid per evaporator instead of full pump-down.</p>
<div class="callout"><strong>Key idea:</strong> EPR = inlet-pressure regulator in the suction outlet of one evaporator. Set it by evaporating temperature using the P/T chart for the refrigerant in the system.</div>`
    },
    {
      heading: "Worked Example: Setting EPRs on R-404A",
      html: `
<p><strong>Scenario.</strong> One R-404A condensing unit serves a freezer evaporator that must boil at −10°F and a deli case that must boil at 30°F. Use these P/T anchors (dew point, since we are working with suction vapor): R-404A at 40°F ≈ 66 psig dew; at −20°F ≈ 16 psig dew. For this example the P/T chart gives about 51 psig dew at 30°F and about 24 psig dew at −10°F.</p>
<p>Step 1: The coldest load rules: the common suction header runs at the freezer's requirement, about <strong>24 psig</strong> (before line losses). The freezer evaporator needs no EPR — it is the load that sets the pace. Step 2: The deli case must hold 30°F evaporation, which is about <strong>51 psig</strong>. Its EPR is set to hold 51 psig in that evaporator; the valve throttles the 51-psig vapor down to the 24-psig header. Step 3: Sanity check the direction — EPR setting (51) is higher than header pressure (24). If you ever compute an EPR setting below header pressure, you have the story backwards: an EPR can only hold pressure up, never push it down.</p>
<div class="formula">Header pressure = pressure of the coldest evaporator &nbsp;|&nbsp; EPR setting = P/T pressure at the warmer evaporator's target temperature</div>
<p>When you service such a system, gauge placement tells the story: a gauge <em>before</em> the EPR reads evaporator pressure; the same system gauged at the compressor reads header pressure. Two different numbers, both correct, one valve between them.</p>`
    },
    {
      heading: "The Crankcase Pressure Regulator: The Compressor's Bodyguard",
      html: `
<p>The EPR's cousin works at the other end of the suction line. A <strong>crankcase pressure regulator (CPR)</strong> — also called a suction pressure regulator — sits in the suction line just before the compressor and does the opposite job in the opposite direction: it limits how <em>high</em> suction pressure at the compressor inlet may go. It senses its own outlet pressure (the crankcase side) and throttles when that pressure tries to exceed its setting.</p>
<p>Why cap suction pressure? After a defrost or a long off cycle, a freezer evaporator is warm and full of relatively high-pressure vapor. At start-up that vapor would rush to the compressor and overload the motor — suction pressure is density, and dense vapor is heavy work. A CPR holds the compressor's inlet pressure down to a safe maximum while the evaporator pulls itself down, then opens fully once pressures normalize. The symptom of a missing or mis-set CPR is a compressor that trips its overload in the first minutes after defrost, every time, on a system that runs fine all day otherwise.</p>
<div class="callout"><strong>Key idea:</strong> EPR protects an evaporator from pressure that is too low; CPR protects a compressor from suction pressure that is too high. Location tells them apart: EPR at an evaporator outlet, CPR at the compressor inlet.</div>
<p>Setting a CPR is a pull-down observation, not a guess: watch suction pressure at the compressor through a defrost recovery with the valve adjusted so the motor stays within its rated load while the evaporator still pulls down in reasonable time. Too tight a setting starves the start and stretches recovery; too loose and you have installed an expensive decoration.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Shared suction = shared pressure; the coldest evaporator sets the header pressure.</li>
<li>EPRs throttle individual warmer evaporators up to their own temperatures — set by P/T for the target evaporating temperature.</li>
<li>CPRs cap compressor inlet pressure during pull-down after defrost or downtime.</li>
<li>Per-evaporator solenoids let one load defrost or rest while the others keep cooling.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Gauging a warm case at the compressor, finding low suction pressure, and adding charge. On a multi-evaporator system the compressor gauge reads the <em>coldest</em> load's pressure. Gauge the warm evaporator ahead of its EPR before concluding anything.</div>
<div class="callout"><strong>Common mistake:</strong> Setting an EPR by temperature "feel" instead of pressure. The valve knows only pressure; convert the desired evaporating temperature through the correct refrigerant's P/T chart, dew point for vapor work.</div>
<p><strong>Certification link:</strong> Pressure-regulating valves are named components in the Light Commercial Refrigeration blueprint, and multi-temperature systems are where written exams test whether you truly understand the P/T relationship.</p>
<p>Before Module 5, fix the vocabulary in place: EPRs are per-evaporator and think about the coil; CPRs are per-compressor and think about the motor. Exams — and foremen — reward techs who never confuse the two.</p>`
    }
  ],
  keyTerms: [
    { term: "Multiple-evaporator system", def: "A system in which two or more evaporators share one compressor and suction header." },
    { term: "Suction header", def: "The common suction line collecting vapor from all evaporators on a shared system." },
    { term: "Evaporator pressure regulator (EPR)", def: "A valve in an evaporator's suction outlet that throttles vapor to keep that evaporator's pressure from falling below its setting." },
    { term: "Crankcase pressure regulator (CPR)", def: "A valve in the suction line at the compressor that limits maximum suction pressure at the compressor inlet, preventing motor overload during pull-down." },
    { term: "Inlet pressure regulation", def: "Control action that responds to pressure upstream of the valve — the EPR's method." },
    { term: "Outlet pressure regulation", def: "Control action that responds to pressure downstream of the valve — the CPR's method." },
    { term: "Two-temperature system", def: "A shared system holding evaporators at two (or more) different temperatures, made possible by EPRs." },
    { term: "Throttling loss", def: "The efficiency given up when vapor is pressure-dropped across a regulating valve without doing useful work." },
    { term: "Pull-down", def: "The period after start-up, defrost, or loading during which the system works to return the box to setpoint." },
    { term: "Suction pressure", def: "The pressure of vapor returning to the compressor; on shared systems, set by the coldest load." },
    { term: "Load matching", def: "Pairing evaporators and compressor capacity so each load gets its required temperature and capacity." },
    { term: "Bypass (EPR)", def: "An arrangement allowing an evaporator to be pumped out despite its EPR for service or shutdown." },
    { term: "Solenoid isolation", def: "Using a liquid-line solenoid per evaporator so individual loads can cycle, defrost, or be serviced independently." },
    { term: "Header pressure drop", def: "Pressure lost to friction between the evaporators and the compressor; the compressor sees slightly lower pressure than the coldest evaporator makes." },
    { term: "Overload trip (start-up)", def: "A compressor protection event caused by excessive suction pressure and motor load during pull-down — the condition a CPR prevents." },
    { term: "Dew point setting", def: "Converting an EPR/CPR pressure setting using dew-point P/T values, because these valves work on vapor." },
    { term: "Warm evaporator starvation", def: "A mis-set EPR (too low) letting an evaporator run colder than intended, frosting it and freezing product." },
    { term: "Shared condensing unit", def: "One compressor/condenser set serving several evaporators, common in small restaurants and delis." }
  ],
  video: {
    title: "Equipment 4 - Parallel Rack Systems",
    embedUrl: "https://www.youtube.com/embed/MSEtVvPQd1k",
    note: "An overview of parallel rack systems — the large-scale version of this module's idea, with many compressors and loads sharing headers, plus pressure regulation and system controls. Watch for how pressure regulation is used to let different loads live on shared piping.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> One condensing unit serves a 35°F cooler evaporator (boiling at 25°F) and a freezer evaporator (boiling at −15°F). Which evaporator sets the suction header pressure, and which one needs an EPR? Explain in one sentence each.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The shared header can only hold one pressure, and it must be low enough for the coldest coil. Step 2: The <strong>freezer evaporator</strong> sets the header pressure, because its −15°F boiling point demands the lowest pressure. Step 3: The <strong>cooler evaporator</strong> needs the EPR, to hold its pressure (and therefore its 25°F boiling temperature) up above the freezer-level header pressure.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Using the module's R-404A anchors (dew point: 40°F ≈ 66 psig; 30°F ≈ 51 psig; −10°F ≈ 24 psig; −20°F ≈ 16 psig), a produce case must boil at 30°F on a system whose header runs at 24 psig. (a) What is the EPR setting? (b) What pressure does a gauge at the compressor read, ignoring line losses?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: The EPR holds the case's evaporator at its own boiling temperature: 30°F dew ≈ <strong>51 psig</strong>. Step 2: The compressor sits on the header, which is set by the coldest load at <strong>24 psig</strong>. Step 3: The 27-psi difference between the two gauges is dropped across the EPR — that throttling is the price of two temperatures on one compressor.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A freezer compressor trips its overload within two minutes of every defrost termination but runs perfectly between defrosts. The system has no CPR. Explain the mechanism and the fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Defrost leaves the evaporator warm, so at restart the suction vapor is at unusually high pressure — dense vapor, heavy pumping work. Step 2: The compressor motor draws overload current until its protection trips. Step 3: The fix is a properly set <strong>crankcase pressure regulator</strong> at the compressor inlet, which throttles suction pressure to a safe maximum during pull-down and opens fully once the evaporator is cold again.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> An EPR is accidentally set 10 psi too low on a medium-temperature case. Describe two symptoms you would expect in that case.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Too low a setting lets the evaporator pressure — and boiling temperature — fall below design. Step 2: Symptom one: <strong>excess frost and eventually a blocked coil</strong>, because the colder coil freezes moisture faster than defrost can clear it. Step 3: Symptom two: <strong>product freezing or product damage</strong> at the cold spots of the case, since the case is being run like a colder application than it is.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Why can't an EPR make an evaporator colder than the shared header pressure allows?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: An EPR is a throttle — it can only add pressure drop in the direction of flow, holding pressure <em>up</em> on its inlet side. Step 2: It contains no compressor and adds no pressure difference of its own in the cooling direction. Step 3: Therefore the coldest any evaporator on the header can boil is set by the header pressure itself, which is why the coldest load is the one that defines it.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A multi-evaporator system needs one case taken out of service for a weekend repair while the others keep running. Which components make that possible, and what do you verify before leaving?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The case's <strong>liquid-line solenoid</strong> (closed) stops feed, and its suction can be isolated with service valves, while its EPR simply stays shut against header pressure. Step 2: Recover or secure the isolated section's charge as the job requires. Step 3: Verify the remaining evaporators' temperatures and superheat after the change — removing a load changes header behavior, and the coldest remaining load now sets the pace.</p>"
    }
  ],
  quiz: [
    {
      q: "On a multiple-evaporator system, the common suction pressure is determined by:",
      choices: ["The largest evaporator", "The warmest evaporator", "The coldest evaporator", "The average of all evaporators"],
      answer: 2,
      explanation: "Correct: (c). The header must be low enough for the coldest load to reach its boiling temperature. (a) Size is about capacity, not pressure level. (b) The warmest load is held up by its EPR, it does not set the header. (d) Pressures in a shared line equalize; they do not average."
    },
    {
      q: "An EPR valve is installed:",
      choices: ["In the liquid line before the TXV", "In the suction line at the outlet of an individual evaporator", "In the discharge line", "Inside the compressor crankcase"],
      answer: 1,
      explanation: "Correct: (b). The EPR throttles vapor leaving its own evaporator to hold that evaporator's pressure up. (a) The liquid line is where solenoids and TXVs live; an EPR there could not regulate evaporator pressure. (c) Discharge is the high-pressure side, unrelated to evaporator pressure holding. (d) The name 'crankcase' belongs to the CPR, which is still an external suction-line valve."
    },
    {
      q: "An EPR regulates by sensing:",
      choices: ["Its outlet pressure", "Box air temperature", "Its inlet (evaporator) pressure", "Compressor current"],
      answer: 2,
      explanation: "Correct: (c). The EPR is an inlet-pressure regulator: it throttles to keep upstream pressure from falling below its setting. (a) Sensing outlet pressure describes the CPR. (b) Temperature control is the thermostat's job; the EPR works purely on pressure, which maps to temperature through P/T. (d) Current is an overload's concern, not a regulating signal."
    },
    {
      q: "A CPR (crankcase pressure regulator) protects the compressor from:",
      choices: ["Low suction pressure during the off cycle", "Excessive suction pressure during pull-down after defrost", "High discharge temperature", "Oil foaming in the sight glass"],
      answer: 1,
      explanation: "Correct: (b). After defrost, warm high-pressure vapor would overload the motor; the CPR caps inlet pressure until pull-down finishes. (a) Low suction pressure is handled by the low-pressure control, and the CPR is fully open at normal low pressures. (c) Discharge temperature is managed by charge, superheat, and cooling of the compressor, not a suction throttle. (d) Oil foaming ties to migration and pump-down, Module 2 topics."
    },
    {
      q: "Using the module's R-404A dew-point anchors, an EPR holding a 30°F evaporator is set near:",
      choices: ["16 psig", "24 psig", "51 psig", "66 psig"],
      answer: 2,
      explanation: "Correct: (c). 30°F dew point for R-404A ≈ 51 psig. (a) 16 psig is about −20°F — freezer-cabinet territory that would freeze the case's product. (b) 24 psig is about −10°F, still far too cold for this case. (d) 66 psig is 40°F, warmer than the target and would let the case run warm."
    },
    {
      q: "Compared with gauging at the compressor, a gauge installed ahead of a case's EPR reads:",
      choices: ["The same pressure", "Higher pressure (the evaporator's own pressure)", "Lower pressure", "Head pressure"],
      answer: 1,
      explanation: "Correct: (b). The EPR holds its evaporator above header pressure, so the upstream gauge reads the higher value. (a) Equal readings would mean the EPR is wide open or absent. (c) Pressure cannot be lower upstream of a throttling valve that is holding pressure up. (d) Both gauges are on the low side; head pressure is discharge-side."
    },
    {
      q: "The efficiency cost of using EPRs is:",
      choices: ["None — regulation is free", "Throttling loss: vapor pressure is dropped across the valve without useful work", "Higher condenser fan energy", "Extra defrost cycles"],
      answer: 1,
      explanation: "Correct: (b). The compressor still pumps from the low header pressure while the warm evaporator's vapor is throttled down — that dropped pressure is unrecoverable work. (a) Regulation is worth its cost, but it is not free. (c) Condenser fans are unaffected by suction-side valves. (d) EPRs do not schedule defrosts."
    },
    {
      q: "To defrost one case on a shared system while others keep cooling, the case needs:",
      choices: ["Its own compressor", "A liquid-line solenoid to stop its feed while the system runs", "A second condenser", "A CPR valve"],
      answer: 1,
      explanation: "Correct: (b). Closing the case's solenoid starves its evaporator so defrost heat can work while the header keeps serving the rest. (a) A dedicated compressor is a different architecture entirely. (c) Condensers reject heat for the whole system; cases do not get their own. (d) A CPR protects a compressor inlet; it cannot isolate a case."
    }
  ],
  studyGuide: `
<h3>Module 4 — Multiple-Evaporator Systems & EPR Valves: Quick Reference</h3>
<p><strong>The rule:</strong> one header, one pressure — set by the coldest evaporator. Warmer evaporators are held up individually.</p>
<p><strong>EPR:</strong> suction outlet of one evaporator · senses inlet pressure · throttles to hold a minimum evaporator pressure = its target boiling temperature via P/T (dew point for vapor).</p>
<p><strong>R-404A dew anchors used here:</strong> 40°F ≈ 66 psig · 30°F ≈ 51 psig · −10°F ≈ 24 psig · −20°F ≈ 16 psig.</p>
<p><strong>CPR:</strong> suction line at the compressor · senses outlet pressure · caps maximum inlet pressure during pull-down so the motor does not overload after defrost.</p>
<div class="formula">EPR setting (psig) = P/T pressure at the evaporator's target temperature — and it must be HIGHER than header pressure</div>
<p><strong>Gauge logic:</strong> ahead of the EPR = that evaporator's pressure; at the compressor = the coldest load's pressure. Both can be "right" at once.</p>
<p><strong>Self-check:</strong> Sketch a freezer + deli case on one unit, label header pressure, both EPR decisions, and where a CPR would sit. If the arrows of "who senses what" are clear, Module 5's racks will look familiar.</p>
`
};
