// HVAC 207 - Module 5: Rack Systems Overview
module.exports = {
  number: 5,
  slug: "rack-systems-overview",
  title: "Rack Systems Overview",
  estTime: "3–4 hours",
  objectives: [
    "Describe a parallel rack: several compressors on shared suction and discharge headers serving many loads.",
    "Explain how rack controllers stage compressors and unloaders to match a load that changes all day.",
    "Explain floating head pressure and why letting the condensing pressure fall in cool weather saves energy.",
    "Describe the oil management system that lets many compressors share one oil supply safely.",
    "Explain why supermarkets usually run separate medium-temperature and low-temperature racks."
  ],
  sections: [
    {
      heading: "From One Compressor to a Rack",
      html: `
<p>A supermarket may have sixty or more refrigerated loads — cases, walk-ins, prep rooms — and piping them all to individual condensing units would be an installation and maintenance tangle. Instead, the store centralizes: a <strong>parallel rack</strong> mounts several compressors side by side on a frame in a machine room, all drawing from a common <strong>suction header</strong> and discharging into a common <strong>discharge header</strong> feeding one large condenser and one large receiver. Long liquid and suction lines run from the rack to every case in the store.</p>
<p>The rack is Module 4's idea scaled up and mirrored: many evaporators on one header, yes — but also many <em>compressors</em> on that header, staged so capacity can follow the load. Stores typically run at least two racks: a <strong>medium-temperature rack</strong> for coolers and dairy/deli cases, and a <strong>low-temperature rack</strong> for frozen food and ice cream, because (Module 4's rule again) a single suction pressure must serve its coldest load, and making the dairy cases ride at freezer pressure would waste enormous energy. Each case still uses its own TXV, solenoid, and often an EPR or electronic evaporator controller to hold its individual temperature.</p>
<div class="callout"><strong>Key idea:</strong> A rack centralizes compression. Redundancy is built in: one compressor can fail or be serviced while its siblings carry the store — the opposite risk profile from a self-contained cabinet.</div>`
    },
    {
      heading: "Capacity Control: Staging and Unloading",
      html: `
<p>Store load swings constantly — cases defrost, doors open for restocking, night covers go on. A rack answers with <strong>staging</strong>: a rack controller watches suction pressure (the load's report card) and starts or stops compressors to hold it near setpoint. If suction pressure rises, load is winning, so another compressor starts. If it falls, a compressor can rest. Compressors equipped with <strong>unloaders</strong> can also drop part of their pumping capacity while running, giving the controller finer steps than whole machines.</p>
<p><strong>Worked example — a staging decision.</strong> A medium-temp rack's suction setpoint corresponds to a 21°F saturated suction temperature — in published supermarket design practice, medium-temperature racks commonly run saturated suction near +21°F while low-temperature racks run near −25°F. Step 1: On a mild morning two of five compressors hold the setpoint easily. Step 2: At noon, restocking and shopper traffic push suction pressure up; the controller stages a third compressor on. Step 3: At 2 a.m. with night covers on, one compressor — partially unloaded — can hold the whole store. The controller's whole job is matching iron to load so suction stays steady and no compressor short-cycles itself to death.</p>
<div class="callout"><strong>Key idea:</strong> Suction pressure is the rack's load signal. Rising pressure = start capacity; falling pressure = shed capacity. Short, frequent cycling is the enemy the staging logic exists to prevent.</div>`
    },
    {
      heading: "Floating Head Pressure",
      html: `
<p>Older systems held head pressure artificially high year-round, because TXVs and case controls were assumed to need a fat pressure difference to feed properly. Modern racks instead let head pressure <strong>float</strong>: in cool weather the condensing pressure is allowed to fall, following the outdoor temperature down, while electronic expansion valves and properly sized liquid lines keep cases fed. The payoff is physics — every degree the condensing temperature falls is work the compressors no longer do, multiplied by every compressor, all winter long. In a supermarket, where refrigeration is the dominant electric load, floating head pressure is one of the largest single energy savings available.</p>
<p>Floating is not free of limits, and Module 7 is devoted to them: head pressure must stay high enough to feed the farthest TXV, to run hot-gas defrost and heat reclaim where fitted, and to keep oil returning. Rack controllers therefore float the head down to a programmed <em>minimum</em>, not to zero, using condenser fan cycling or variable-speed fans to hold that floor on the coldest nights.</p>
<div class="callout"><strong>Key idea:</strong> Fixed high head pressure in January is money burned. Floating head pressure = let the condenser ride the weather down to a safe minimum, and hold that floor with fan control.</div>
<p>There is a second, quieter limit on floating in stores with glass-door cases and heat reclaim: the reclaim coils and case anti-sweat strategies of older installations were sometimes designed around generous head pressure. Modern controls handle the coordination explicitly, but the lesson stands — float is a system decision, verified against every function that drinks from head pressure, not a single setpoint someone lowers because energy is fashionable.</p>`
    },
    {
      heading: "Oil Management: One Supply, Many Compressors",
      html: `
<p>Compressor oil constantly leaves with the discharge gas and tours the system. On a single unit it mostly finds its way home. On a rack, oil returning from dozens of cases arrives at the suction header and must be divided fairly among running compressors — a machine that loans out its oil and never gets repaid runs dry while its neighbor floods. Racks solve this with an <strong>oil management system</strong>: an <strong>oil separator</strong> on the discharge header strips most oil out before it ever leaves the machine room and sends it to a <strong>reservoir</strong>; from there, a float or electronic level control on each compressor's crankcase meters oil back in as that compressor needs it.</p>
<p>Service implications are immediate. Oil level checks are per-compressor, at the sight glass, with the machine running. A compressor that repeatedly fails on its oil safety is reporting a distribution problem — a stuck float, a clogged filter or screen, a failed separator — not necessarily an internal failure. And oil added to a rack has not been "used up" unless there is a leak: oil that leaves the reservoir is somewhere in the store's piping, and overfilling the system creates its own failures.</p>
<div class="callout"><strong>Key idea:</strong> On a rack, oil is a shared utility managed by separator, reservoir, and per-compressor level controls. Diagnose distribution before condemning compressors.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Rack = multiple compressors on shared suction/discharge headers, one big condenser and receiver, dozens of loads.</li>
<li>Separate medium- and low-temperature racks keep the Module 4 rule affordable.</li>
<li>Controllers stage compressors and unloaders against suction pressure to match load without short cycling.</li>
<li>Floating head pressure harvests cool weather as energy savings, down to a controlled minimum.</li>
<li>Oil is centrally separated, stored, and metered back to each compressor.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Treating one warm case as a rack emergency — or a rack alarm as one case's problem. Learn to sort local faults (that case's TXV, solenoid, EPR) from system faults (suction pressure off for everyone) by checking whether neighbors share the symptom.</div>
<div class="callout"><strong>Common mistake:</strong> Adding oil to a rack because one compressor's glass looks low, without checking the reservoir and the level control feeding it. You may flood four healthy machines to feed one stuck float.</div>
<p><strong>Certification link:</strong> Rack architecture, staging, and oil management sit squarely in the Light Commercial Refrigeration blueprint's commercial systems area, and they define the top end of the trade this course prepares you for.</p>
<p>If racks are where you want your career to go, say so on every store visit: rack rooms reward techs who read trends, think in systems, and document well — the same habits this whole program is installing, one module at a time.</p>`
    }
  ],
  keyTerms: [
    { term: "Parallel rack", def: "Multiple compressors piped to common suction and discharge headers, serving many loads from one machine room." },
    { term: "Suction header (rack)", def: "The large common line collecting suction vapor from all of a rack's loads and feeding its compressors." },
    { term: "Discharge header", def: "The common line collecting all compressors' discharge gas on its way to the condenser." },
    { term: "Rack controller", def: "The electronic control that stages compressors, manages condenser fans, and alarms on abnormal pressures and levels." },
    { term: "Staging", def: "Starting and stopping whole compressors in sequence to match capacity to load." },
    { term: "Unloader", def: "A device that disables part of a compressor's pumping capacity so it can run at reduced output without stopping." },
    { term: "Floating head pressure", def: "Allowing condensing pressure to fall with cool outdoor temperatures instead of holding it artificially high, to save compressor energy." },
    { term: "Minimum head pressure", def: "The floor below which a floating-head system will not let condensing pressure fall, preserving TXV feed, defrost, and oil return." },
    { term: "Saturated suction temperature", def: "The saturation temperature corresponding to suction pressure; the rack controller's preferred way to express suction setpoint." },
    { term: "Oil separator", def: "A discharge-line vessel that strips oil from discharge gas and returns it to storage before it can tour the system." },
    { term: "Oil reservoir", def: "The vessel holding separated oil ready for distribution back to the compressors." },
    { term: "Oil level control", def: "A float or electronic device on each compressor crankcase that admits oil from the reservoir as needed." },
    { term: "Oil safety control", def: "A protection that stops a compressor if oil pressure stays too low after a timed delay at start or during running." },
    { term: "Medium-temperature rack", def: "The rack serving cooler-temperature loads; commonly designed around a saturated suction near +21°F in supermarket practice." },
    { term: "Low-temperature rack", def: "The rack serving freezer loads; commonly designed around a saturated suction near −25°F in supermarket practice." },
    { term: "Heat reclaim", def: "Recovering discharge heat for store heating or hot water instead of rejecting it all outdoors." },
    { term: "Remote condenser", def: "A condenser located away from the compressors (often on the roof) served by the rack's discharge header." },
    { term: "Case controller", def: "Per-case electronics managing a case's temperature, valve, and defrost on a modern rack installation." }
  ],
  video: {
    title: "Rack Refrigeration Cycle Part 2 - Compression w/ Matthew Taylor",
    embedUrl: "https://www.youtube.com/embed/DsmHmPrAS4Y",
    note: "An HVAC School training session on the compression side of the rack cycle: compressor types used on racks, oil management systems, and the safety switches that protect them. It covers exactly the machine-room half of this module.",
    more: [
      { title: "Rack Refrigeration Cycle Part 5 - Liquid Receiver w/ Matthew Taylor", url: "https://www.youtube.com/watch?v=CeBcQ2uHoEI" },
      { title: "Equipment 4 - Parallel Rack Systems", url: "https://www.youtube.com/watch?v=MSEtVvPQd1k" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A supermarket runs one medium-temperature rack and one low-temperature rack instead of a single giant rack for everything. Using Module 4's rule, explain why in two sentences.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A shared suction header must run at the pressure of its coldest load. Step 2: If dairy cases shared a header with ice cream cabinets, every compressor would pump from freezer pressure all day, wasting energy on loads that only need cooler temperatures. Step 3: Splitting the racks lets each suction pressure sit where its own loads require — cold enough, and no colder.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> At 3 a.m. a rack controller is running one of five compressors, unloaded to half capacity, and holding suction setpoint comfortably. At noon it runs four. A junior tech calls the noon condition “the rack struggling.” Correct him.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Staging exists precisely so capacity follows load; four running at noon is the design working, not failing. Step 2: The health signal is whether suction pressure holds setpoint with reasonable run patterns — not how many machines are on. Step 3: “Struggling” would be all five running, suction still climbing, and cases warming — none of which is described.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Explain floating head pressure to a store owner who asks why the rack “sounds different” in winter, including the limit that keeps it safe.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: In cool weather the condenser can reject heat at a lower pressure, so the controller lets head pressure float down instead of forcing it to summer levels. Step 2: Lower condensing pressure means every compressor does less work on every stroke — that is the winter electric savings, and the changed sound is fans and compressors working less hard. Step 3: The safety limit is a programmed minimum head pressure: below it, expansion valves could starve and defrost performance suffer, so fans cycle or slow to hold that floor.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> One compressor on a five-machine rack keeps tripping its oil safety; the other four run clean. List the distribution-side suspects you would check before condemning the compressor.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Check that compressor's <strong>oil level control</strong> (float or electronic) — is it admitting oil from the reservoir? Step 2: Check its oil feed line, filter, and screen for restriction, and verify reservoir level and pressure differential are in range. Step 3: Check the compressor's own sight glass trend and whether oil is logging elsewhere in its circuit. Only after distribution is proven good does an internal compressor fault move to the top of the list.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A single case on a 40-case rack runs warm while all its neighbors hold temperature and rack pressures are normal. Where does the evidence point, and what are your first three local checks?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Normal rack pressures plus healthy neighbors exonerate the rack; the fault is local to that case. Step 2: Check the case's evaporator for ice/airflow problems. Step 3: Check its liquid-line solenoid is actually opening on a call. Step 4: Check its TXV/EPR (or case controller) behavior — feed and pressure regulation are the case-level suspects that remain.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Why does a rack give a store resilience that forty self-contained cases cannot, and what single point of failure does the rack itself still have?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: With several compressors sharing headers, one failed or serviced compressor costs only part of the capacity; the others carry the store, often without product loss. Step 2: Forty self-contained units fail one cabinet at a time — but each failure is total for that cabinet, and there are forty times as many compressors to fail. Step 3: The rack's shared points — the common condenser, receiver, controller, and the machine room's electrical feed — are its concentrated risks, which is why they get the alarms and the maintenance attention.</p>"
    }
  ],
  quiz: [
    {
      q: "A parallel rack is best defined as:",
      choices: ["Compressors stacked vertically to save space", "Multiple compressors on shared suction and discharge headers serving many loads", "A rack that holds spare compressors", "Two systems piped in series for lower temperatures"],
      answer: 1,
      explanation: "Correct: (b). Shared headers plus many loads is the definition. (a) Physical stacking is irrelevant to the term 'parallel' — it describes the piping arrangement. (c) Spares storage is a stockroom, not a system. (d) Series piping for ultra-low temperatures describes cascade systems, a different machine."
    },
    {
      q: "A rack controller decides to start another compressor mainly by watching:",
      choices: ["Outdoor temperature", "Suction pressure rising above its setpoint band", "The store manager's schedule", "Oil reservoir level"],
      answer: 1,
      explanation: "Correct: (b). Suction pressure is the load signal; rising pressure means load is outpacing running capacity. (a) Outdoor temperature influences head pressure strategy, not staging. (c) Schedules may shift setpoints overnight but do not directly stage machines minute to minute. (d) Oil level alarms protect compressors; they do not call for capacity."
    },
    {
      q: "Floating head pressure saves energy because:",
      choices: ["It lets compressors run faster", "Lower condensing pressure means less work per unit of refrigerant pumped", "It defrosts cases with condenser air", "It raises suction pressure in winter"],
      answer: 1,
      explanation: "Correct: (b). Dropping the discharge-side pressure target drops every compressor's workload all winter. (a) Compressor speed is set by staging/unloading, and faster would cost more, not less. (c) Defrost uses hot gas or electric heat, not condenser air. (d) Floating acts on the head (discharge) side; suction setpoints stay with the loads."
    },
    {
      q: "Floating head pressure is limited by a minimum because below it:",
      choices: ["Cases get too cold", "Expansion valves may not feed properly and defrost/oil functions can suffer", "The condenser freezes solid", "Compressors rotate backwards"],
      answer: 1,
      explanation: "Correct: (b). TXVs need pressure difference to feed, and hot-gas defrost and oil return depend on adequate head pressure. (a) Case temperature is controlled at the case, not by head pressure. (c) A condenser cannot freeze its refrigerant solid from low head pressure. (d) Rotation direction is electrical, not pressure-driven."
    },
    {
      q: "In rack oil management, the oil separator's job is to:",
      choices: ["Filter dirt out of the crankcases", "Strip oil from the common discharge gas and send it to the reservoir", "Add oil automatically when the store is closed", "Measure oil quality"],
      answer: 1,
      explanation: "Correct: (b). The separator catches oil at the discharge header before it tours the store, and the reservoir holds it for redistribution. (a) Filtering happens at filters/screens in the feed lines; separation is about location, not cleanliness. (c) Distribution happens continuously through level controls, not on a schedule. (d) Quality testing is a lab/service task, not the separator's function."
    },
    {
      q: "A compressor that repeatedly trips its oil safety while rack-mates run fine suggests first:",
      choices: ["The whole rack is low on oil", "A distribution fault at that compressor: level control, feed restriction, or its own oil circuit", "The rack controller is mis-staging", "The condenser is dirty"],
      answer: 1,
      explanation: "Correct: (b). One machine starving while others eat points at its personal supply line and level control. (a) A rack-wide shortage would threaten all machines roughly together. (c) Mis-staging causes capacity symptoms, not one dry crankcase. (d) A dirty condenser raises head pressure store-wide; it does not pick one compressor's oil supply to block."
    },
    {
      q: "Supermarkets split medium- and low-temperature racks mainly because:",
      choices: ["Building codes require two machine rooms", "A single header would force medium-temp loads to run at freezer suction pressure, wasting energy", "Compressors cannot be mixed on one frame", "It makes defrost scheduling easier"],
      answer: 1,
      explanation: "Correct: (b). Module 4's rule: the coldest load sets the pressure. Two racks let each pressure sit where its loads belong. (a) No such code drives the design. (c) Racks routinely mix compressor sizes on a frame. (d) Defrost is scheduled per case either way."
    },
    {
      q: "An unloader on a rack compressor allows the controller to:",
      choices: ["Remove the compressor from the rack without tools", "Reduce that compressor's pumping capacity in steps while it keeps running", "Unload refrigerant from the system", "Reverse the compressor for defrost"],
      answer: 1,
      explanation: "Correct: (b). Unloading gives capacity steps finer than whole machines, smoothing suction control. (a) 'Unload' refers to capacity, not physical removal. (c) Refrigerant removal is recovery, a service procedure. (d) Compressors never reverse for defrost; hot gas is valved, not reversed."
    }
  ],
  studyGuide: `
<h3>Module 5 — Rack Systems Overview: Quick Reference</h3>
<p><strong>Architecture:</strong> several compressors · common suction header · common discharge header · one condenser, one receiver · dozens of cases with their own TXV/solenoid/EPR.</p>
<p><strong>Two racks:</strong> medium-temp (design suction saturation commonly near +21°F) and low-temp (near −25°F) — because the coldest load sets the pressure.</p>
<p><strong>Capacity control:</strong> controller stages compressors and unloaders against suction pressure; steady pressure without short cycling is the goal.</p>
<p><strong>Floating head:</strong> let condensing pressure ride cool weather down to a programmed minimum; fans cycle/slow to hold the floor. Savings come from less work per stroke.</p>
<p><strong>Oil:</strong> separator (discharge header) → reservoir → per-compressor level controls → crankcases. One dry machine = distribution fault until proven otherwise.</p>
<p><strong>Self-check:</strong> Sort these into local vs. rack faults: one warm case; all cases warming with suction pressure high; one compressor on oil-safety trip. You should be able to defend each sorting in one sentence.</p>

<p><strong>First question on any rack alarm:</strong> is suction pressure off for the whole rack, or is one case complaining alone? The answer routes the entire call.</p>`
};
