// HVAC 207 - Module 6: Defrost Methods for Commercial Systems
module.exports = {
  number: 6,
  slug: "defrost-methods-commercial-systems",
  title: "Defrost Methods for Commercial Systems",
  estTime: "3–4 hours",
  objectives: [
    "Explain why every commercial evaporator below freezing must defrost, and what sets how often.",
    "Compare off-cycle, electric, and hot gas defrost: where the heat comes from and which applications use each.",
    "Explain defrost termination — by temperature, by pressure, and by fail-safe time — and why temperature termination with a time backstop is preferred.",
    "Describe fan delay and drip time, and the symptom of each one missing.",
    "Plan defrost scheduling for a real store: frequency, time of day, and not defrosting neighboring loads at once."
  ],
  sections: [
    {
      heading: "Why Defrost Is Not Optional",
      html: `
<p>Frost is frozen infiltration. Every commercial evaporator runs below freezing (Module 1), so moisture from door openings, product, and room air freezes onto the coil a little at a time. Frost is an insulator wrapped around the fins and, worse, a plug in the air passages: airflow falls, heat transfer falls, the coil gets colder trying to keep up, and frost grows <em>faster</em> — a spiral that ends with a solid block of ice, a warm box, and (on a bad day) liquid refrigerant washing back to a compressor that never asked for it.</p>
<p>Defrost is the scheduled breaking of that spiral: periodically the coil is warmed above freezing long enough to melt the frost, drain the water away, and return to work clean. How often depends on how much moisture the application admits — a freezer with heavy door traffic in a humid kitchen may need four defrosts a day, while a sealed low-traffic box might need two. Every method in this module answers the same three questions: where does the heat come from, how do we know we're done, and how do we get back to cooling without hurting the product?</p>
<div class="callout"><strong>Key idea:</strong> Defrost is not the system failing to cool — it is maintenance the system performs on itself, on schedule, so that cooling remains possible at all.</div>
<p>Moisture sources deserve a census before schedules are blamed: infiltration through doors and gaskets is usually the majority, product itself contributes (uncovered liquids, produce respiration), and every defrost that ends with a wet coil and no drip time returns some of its own water to the frost budget. A freezer fighting unusual frost is often fighting an unusual moisture load, and no schedule wins that war alone.</p>`
    },
    {
      heading: "Three Ways to Make the Heat",
      html: `
<p><strong>Off-cycle defrost</strong> uses no added heat at all: refrigeration stops, evaporator fans keep running, and box air — above freezing in a medium-temperature cooler — melts the frost. It is simple, free, and gentle, which is why it owns the medium-temperature world. Its limit is absolute: it cannot work in a freezer, because freezer box air is below freezing and cannot melt anything.</p>
<p><strong>Electric defrost</strong> puts resistance heaters in or under the coil (and in the drain pan). During defrost the refrigeration stops, fans stop, heaters energize, and the coil warms until termination. Electric is the standard for self-contained freezers and smaller walk-ins: simple to control, no extra valves, works at any temperature — at the price of buying heat with electricity and then paying again to remove that heat when cooling resumes.</p>
<p><strong>Hot gas defrost</strong> routes hot discharge gas from the compressor through the evaporator, warming it from the inside. The compressor keeps running, a defrost solenoid or valve arrangement redirects the gas, and condensate drains back through the system. Hot gas is faster than electric and reuses heat the system already made, which is why rack stores favor it for low-temperature cases; it is also the most complex, with the most ways to be piped or controlled wrong — including the risk of liquid slugging the compressor if condensate management is poor.</p>
<div class="callout"><strong>Key idea:</strong> Off-cycle = box air is the heater (medium-temp only). Electric = resistance heat (any temp, simple, costly). Hot gas = the compressor's own discharge heat (fast, efficient, complex).</div>`
    },
    {
      heading: "Termination and Fan Delay: Knowing When to Stop",
      html: `
<p>Melting frost is easy; knowing the coil is clear is the control problem. <strong>Time termination</strong> simply runs defrost for a fixed number of minutes — simple, but it defrosts by the calendar, not by the ice: too short leaves ice behind to accumulate, too long cooks the coil, warms the product, and wastes energy twice. <strong>Temperature termination</strong> mounts a sensor on the coil; when the coil reaches a temperature that proves the ice is gone — the coil cannot warm past freezing until the ice has melted — the sensor ends defrost immediately. A <strong>fail-safe time</strong> still backs it up: if the sensor fails, the clock ends the defrost anyway before the box is roasted. Pressure termination, sensing the evaporator pressure rise as the coil warms, plays the same role on some systems.</p>
<p>Two finishing touches complete the cycle. <strong>Drip time</strong> is a short pause after the heat stops, letting meltwater drain off the coil and out of the pan before refrigeration restarts — restart too soon and the water refreezes as ice exactly where you least want it. <strong>Fan delay</strong> (Module 2) then holds the fans off until the coil is cold again, so the first air moved is cold and dry rather than a warm damp blast onto the product.</p>
<div class="callout"><strong>Key idea:</strong> The professional pattern is temperature termination with a time fail-safe, followed by drip time, then fan delay. A defrost that "runs forever" or "never quite clears" is usually a termination problem, not a heater problem.</div>`
    },
    {
      heading: "Scheduling Defrosts in a Real Store",
      html: `
<p>Defrost scheduling is operations, not just controls. <strong>When:</strong> defrosts are placed at low-traffic times — before the morning rush, mid-afternoon lulls, overnight — never during the delivery-and-stock peak if it can be avoided, because the box coasts without refrigeration for the duration and for a recovery period after. <strong>How many:</strong> enough to keep the coil clear in the worst humidity week of the year; a schedule tuned in January may fail in August. <strong>Staggering:</strong> on shared systems, neighboring loads and the two halves of a big case are not defrosted simultaneously, so the rack does not see the whole store stop absorbing heat at once and product in adjacent cases is not warmed by a neighbor's defrost.</p>
<p><strong>Worked example — diagnosing by the clock.</strong> A freezer's product temperature spikes to 18°F briefly every day at 11 a.m. and recovers by noon; the owner suspects a failing compressor. Step 1: Plot the pattern — a spike at the same time daily is a scheduled event, not a random failure. Step 2: Check the defrost clock: a defrost is set for 11 a.m., termination is failed, and the defrost runs to its 45-minute fail-safe every day — triple the necessary time, at the store's busiest hour. Step 3: The repair is a termination sensor and a schedule moved to 5 a.m. The compressor was innocent; the defrost was both broken and badly scheduled.</p>
<p>Modern electronic controllers add one more scheduling tool worth knowing: adaptive or demand defrost, which watches coil behavior — frost's effect on temperatures and fan load — and initiates defrost when the coil actually needs it, then terminates on the coil's own signal. It is the logical end of this module's argument: defrost by evidence, not by habit.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Frost growth is a spiral — defrost is scheduled self-maintenance that breaks it.</li>
<li>Off-cycle (medium-temp), electric (simple, any temp), hot gas (fast, efficient, complex) — pick by application.</li>
<li>Terminate on temperature with a time fail-safe; follow with drip time and fan delay.</li>
<li>Schedule for the store's day and the year's humidity; stagger loads on shared systems.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> "Fixing" an icing coil by adding more defrosts per day without asking why frost is winning — infiltration from a torn gasket or propped door will out-frost any schedule, and the extra defrosts just warm the product more often.</div>
<div class="callout"><strong>Common mistake:</strong> Judging a defrost by watching the clock instead of the coil. Termination should leave a <em>clear</em> coil: check the coil's cold corners and the drain pan after a full cycle before calling it fixed.</div>
<p><strong>Certification link:</strong> Defrost methods, termination, and fan delay are core Light Commercial Refrigeration blueprint topics — and the midterm at the end of this course's first half samples this module directly.</p>
<p>When you inherit a store, audit its defrost schedules in the first visit: list every defrost, its time, its termination type, and its fail-safe length on one page. That single page prevents more product loss than any other document in the building.</p>`
    }
  ],
  keyTerms: [
    { term: "Defrost cycle", def: "The periodic warming of an evaporator above freezing to melt accumulated frost and drain the water away." },
    { term: "Off-cycle defrost", def: "Defrost using above-freezing box air moved by the evaporator fans while refrigeration is stopped; medium-temperature only." },
    { term: "Electric defrost", def: "Defrost using resistance heaters in or under the coil and drain pan." },
    { term: "Hot gas defrost", def: "Defrost routing hot compressor discharge gas through the evaporator to melt frost from inside the coil." },
    { term: "Defrost initiation", def: "The trigger that starts a defrost — usually a clock or controller schedule, sometimes demand-based sensing." },
    { term: "Defrost termination", def: "The signal that ends defrost: a coil temperature (or pressure) proving ice is gone." },
    { term: "Fail-safe time", def: "The maximum defrost duration set on the clock/controller that ends defrost if termination sensing fails." },
    { term: "Termination sensor", def: "A coil-mounted temperature sensor (or pressure control) that ends defrost when the coil is clear and warm." },
    { term: "Drip time", def: "A short pause after defrost heat stops, allowing meltwater to drain before refrigeration restarts." },
    { term: "Fan delay", def: "Holding evaporator fans off after defrost until the coil is cold again." },
    { term: "Drain pan heater", def: "Electric heat keeping the evaporator drain pan and line from freezing shut in low-temperature equipment." },
    { term: "Defrost scheduling", def: "Choosing defrost times, frequency, and staggering to fit store operations and system load." },
    { term: "Demand defrost", def: "Initiating defrost based on measured need (frost/airflow sensing) rather than a fixed schedule." },
    { term: "Coil frosting spiral", def: "The self-reinforcing cycle: frost insulates and blocks airflow, the coil runs colder, and frost grows faster." },
    { term: "Recovery (post-defrost)", def: "The pull-down period after defrost during which the box returns to setpoint." },
    { term: "Defrost solenoid", def: "The valve that redirects discharge gas into the evaporator for hot gas defrost." },
    { term: "Staggering", def: "Scheduling defrosts so shared-system loads do not defrost simultaneously." },
    { term: "Ice bridging", def: "Frost merging between fins into solid ice that blocks airflow completely; the end state of missed defrosts." }
  ],
  video: {
    title: "HVACR: How A Refrigerator/Freezer Defrost Timer Works/Defrost Timer Troubleshooting/Sequence/Testing",
    embedUrl: "https://www.youtube.com/embed/Zs0FFspaIoE",
    note: "A close look at how defrost timers sequence a commercial refrigerator/freezer through defrost — initiation, termination, and how fans are held during the cycle. It grounds this module's control story in the actual clock hardware you will meet in the field.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A new technician suggests saving money by switching a walk-in freezer from electric defrost to off-cycle defrost like the cooler next door uses. Explain, in terms a manager can follow, why that cannot work.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Off-cycle defrost melts frost with box air, so the box air must be above freezing — the cooler at 36°F qualifies. Step 2: The freezer's box air sits around 0°F; air below freezing cannot melt ice, no matter how long the fans blow it. Step 3: The freezer must bring heat to the coil from somewhere — electric heaters or hot gas — which is why low-temperature equipment is always built with one of those methods.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A freezer defrost terminates on time only, set for 40 minutes. In winter the coil is clear in 12 minutes; in humid August it needs 30. Describe the cost of the fixed 40-minute setting in both seasons.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Every defrost minute past “ice is gone” heats an empty coil and the box, then must be removed again by the refrigeration system — double waste. Step 2: In winter the fixed time wastes about 28 minutes of heat-and-recool per defrost, several times a day. Step 3: In August it fits better but still overshoots by 10 minutes; the professional fix is temperature termination with the 40 minutes kept only as a fail-safe, so each defrost lasts exactly as long as its ice requires.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> After a control replacement, a freezer's evaporator fans start the instant defrost ends, and product near the coil shows freezer burn and temperature spikes. Which two cycle features were misconfigured, and what does each do?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <strong>Fan delay</strong> is missing or set to zero — fans should wait until the coil is pulled back down to near operating temperature before moving air. Step 2: Likely <strong>drip time</strong> was also skipped, so meltwater still on the coil is blown and refrozen as droplets through the box. Step 3: Together the missing pauses explain warm damp blasts, frost redistribution, and the freezer burn pattern near the unit cooler.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Why is hot gas defrost generally faster than electric defrost on the same coil?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Electric heaters warm the coil from the outside — heat must conduct through fins and tubes while much of it escapes into the box air. Step 2: Hot gas carries heat <em>inside</em> the tubes, delivering it directly to the frost interface along the whole coil at once. Step 3: Heat delivered where the ice actually sits, with less lost to the box, melts the same frost in less time — one reason rack stores prefer it on low-temperature cases.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A rack store defrosts twelve low-temperature cases at 6 a.m. sharp, all at once. Give two operational problems this creates and the scheduling fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Problem one — the rack suddenly loses a large share of its load and, on hot gas, diverts discharge gas store-wide; pressures swing and control gets ragged. Step 2: Problem two — twelve cases' worth of product warms simultaneously at the start of the shopping day, and the recovery pull-down lands exactly on the morning peak. Step 3: The fix is <strong>staggering</strong>: spread the defrosts across the early hours so only a few cases are ever off-line together.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A coil keeps a stubborn patch of ice in one bottom corner through every defrost, while the rest clears. Termination is by a sensor mounted at the top of the coil. Explain the failure mechanism.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The top of the coil clears and warms first, so the top-mounted sensor reaches termination temperature and ends the defrost honestly — for the part of the coil it can feel. Step 2: The bottom corner, last to clear (cold air and meltwater both settle downward), is still iced when the cycle ends. Step 3: Each cycle leaves the patch, which grows — the fix is sensor placement at the coil's slowest-clearing point (or repairing the local cause, like a dead heater section or blocked drain) rather than longer defrosts for the whole coil.</p>"
    }
  ],
  quiz: [
    {
      q: "Off-cycle defrost cannot be used in a freezer because:",
      choices: ["Freezer fans are too small", "Freezer box air is below freezing and cannot melt frost", "Freezers have no off cycles", "The TXV would freeze shut"],
      answer: 1,
      explanation: "Correct: (b). Off-cycle defrost's only heat source is box air; below-freezing air melts nothing. (a) Fan size is irrelevant to the thermodynamics. (c) Freezers do have off cycles; the air in them is just too cold to defrost with. (d) TXVs operate at freezer temperatures by design."
    },
    {
      q: "The preferred defrost termination strategy is:",
      choices: ["Fixed time only, set generously", "Temperature termination with a time fail-safe as backstop", "Manual termination by the operator", "Pressure termination with no backstop"],
      answer: 1,
      explanation: "Correct: (b). Temperature proves the ice is gone; the fail-safe protects the box if the sensor lies. (a) Fixed time over-defrosts in dry weather and can under-defrost in humidity. (c) Operators are not a control strategy. (d) Any single-sensor scheme without a time backstop risks a runaway defrost."
    },
    {
      q: "Drip time immediately after defrost exists to:",
      choices: ["Let the heaters cool gradually", "Let meltwater drain off the coil and pan before refrigeration restarts", "Give the compressor a rest", "Warm the product slightly for quality"],
      answer: 1,
      explanation: "Correct: (b). Water left on the coil at restart refreezes as ice in the worst places. (a) Heater cool-down is not a system need. (c) The compressor rest is incidental; drainage is the purpose. (d) Defrost already warms product more than anyone wants — it is a cost, never a goal."
    },
    {
      q: "Hot gas defrost gets its heat from:",
      choices: ["Electric elements in the coil", "The compressor's hot discharge gas routed through the evaporator", "Store heating air ducted into the case", "The condenser fan exhaust"],
      answer: 1,
      explanation: "Correct: (b). Discharge gas carries heat made by compression straight into the evaporator tubes. (a) That is electric defrost. (c) No commercial case ducts store air in for defrost. (d) Condenser exhaust is outdoor air in most designs and plays no defrost role."
    },
    {
      q: "A freezer's product temperature spikes at the same time every day. Your first suspicion is:",
      choices: ["A failing compressor", "A scheduled defrost running long — likely failed termination reaching its fail-safe", "A refrigerant leak that only leaks at noon", "Utility voltage sag"],
      answer: 1,
      explanation: "Correct: (b). Clockwork symptoms come from clock-driven equipment; a dead termination sensor stretches every defrost to the fail-safe limit. (a) Compressor failures do not keep a daily schedule. (c) Leaks do not observe the time of day. (d) Voltage sag would disturb more than one box and would follow the grid's day, not the store's clock."
    },
    {
      q: "The frost spiral means that as frost builds:",
      choices: ["The coil gets warmer and melts it back", "Airflow and heat transfer fall, the coil runs colder, and frost grows even faster", "The compressor works less", "Box humidity rises until frost stops forming"],
      answer: 1,
      explanation: "Correct: (b). Frost insulates and blocks; the system responds by running the coil colder, which freezes moisture faster. (a) The coil surface under frost gets colder, not warmer. (c) The compressor works harder and longer, not less. (d) Box air actually dries as moisture plates out on the coil — the frost still grows from what remains and from infiltration."
    },
    {
      q: "Staggering defrosts on a rack system mainly prevents:",
      choices: ["Customers seeing a tech on site", "Many loads going off-line and recovering at the same time, swinging rack pressures and warming product together", "The defrost clock from wearing out", "Condenser fans from cycling"],
      answer: 1,
      explanation: "Correct: (b). Staggering spreads both the off-line period and the recovery load across time. (a) Visibility is not an engineering variable. (c) Clocks do not wear from simultaneous schedules. (d) Fan cycling follows head pressure, which staggering actually smooths."
    },
    {
      q: "A termination sensor should be mounted:",
      choices: ["At the warmest, fastest-clearing point of the coil", "At the point of the coil that clears last, so its signal means the whole coil is clear", "On the discharge line", "In the product itself"],
      answer: 1,
      explanation: "Correct: (b). Termination must certify the whole coil; sensing the slowest point does that. (a) The fastest point ends defrost while ice remains elsewhere — the classic growing-corner-ice fault. (c) Discharge line temperature is hot during normal running and proves nothing about coil ice. (d) Product sensing would hold defrost until food warms — backwards in every way."
    }
  ],
  studyGuide: `
<h3>Module 6 — Defrost Methods for Commercial Systems: Quick Reference</h3>
<p><strong>Why:</strong> coils run below freezing; frost insulates and blocks airflow; growth is a spiral. Defrost is scheduled self-maintenance.</p>
<p><strong>Methods:</strong> Off-cycle — box air melts frost, medium-temp only · Electric — resistance heat, simple, any temperature · Hot gas — discharge gas through the coil, fast and efficient, most complex.</p>
<p><strong>Cycle anatomy:</strong> Initiate (clock/controller) → heat until <strong>temperature termination</strong> (time fail-safe as backstop) → <strong>drip time</strong> → refrigeration restarts → <strong>fan delay</strong> until coil is cold.</p>
<p><strong>Scheduling:</strong> low-traffic hours, enough frequency for the most humid week, staggered across shared systems.</p>
<p><strong>Diagnostic shortcut:</strong> symptoms that repeat at the same time daily are defrost-schedule or termination problems until proven otherwise.</p>
<p><strong>Self-check:</strong> Narrate one complete electric defrost of a walk-in freezer, naming every component that changes state and why. Then do the same for hot gas on a rack case.</p>

<p><strong>Field habit:</strong> after any defrost repair, watch one complete defrost and one complete recovery before leaving. The cycle you watched is the only one you truly fixed.</p>`
};
