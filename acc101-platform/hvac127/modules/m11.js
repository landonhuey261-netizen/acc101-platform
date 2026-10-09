// HVAC 127 - Module 11: DDC Application & Programming Concepts
module.exports = {
  number: 11,
  slug: "ddc-application-programming-concepts",
  title: "DDC Application & Programming Concepts",
  estTime: "3–4 hours",
  objectives: [
    "Explain scheduling strategies — occupancy schedules, holidays, and exception schedules — and their energy role.",
    "Describe optimal start/stop and how adaptive recovery learns a building's response.",
    "Explain demand limiting and load shedding/rotation at the strategy level.",
    "Describe setpoint reset strategies (discharge-air and static-pressure reset) and when each saves energy.",
    "Use trending as a diagnostic instrument and state how PID loops are applied and tuned in DDC practice."
  ],
  sections: [
    {
      heading: "Scheduling: The Cheapest Energy Strategy Ever Sold",
      html: `
<p>The highest-return DDC application is embarrassingly simple: <strong>don't condition empty buildings</strong>. A schedule object holds the occupancy timetable — per zone or per system — with start/stop times per weekday, plus holiday calendars and one-time exceptions. When unoccupied, systems shut down or fall to setback/setup limits (Module 10), and ventilation minimums relax to zero.</p>
<p>Schedule design is where controls meet human honesty. Setpoints that assume a 6 a.m.–6 p.m. building in a facility actually used 5 a.m.–9 p.m. produce complaints and — worse — permanent <strong>overrides</strong> as occupants defeat the system. The professional pattern: schedules are set from real occupancy evidence, owned by a named person on the owner's side, and reviewed when tenancy changes. A schedule is a policy document wearing a clock.</p>
<div class="callout"><strong>Key idea:</strong> Every unwanted run hour at full occupancy settings is money burned for nobody. But a schedule tighter than reality teaches occupants to override — and an overridden schedule saves nothing. Right-size the schedule; don't weaponize it.</div>
<p>Schedules also interact with everything else in this module: optimal start reads the schedule to know when 'occupied' begins, demand limiting respects occupancy priorities when choosing what may be shed, and reset strategies behave differently in occupied versus unoccupied hours. Get the calendar wrong and three good strategies inherit the error — which is why commissioning (Module 12) treats schedule verification against the owner's real occupancy as a functional test, not a paperwork glance.</p>`
    },
    {
      heading: "Optimal Start and Optimal Stop",
      html: `
<p><strong>Optimal start</strong> answers the obvious flaw in fixed schedules: a building needs different recovery time on a mild October morning than after a frozen holiday weekend. Instead of starting the plant at a fixed early hour, the controller watches the zone temperature drift from setpoint and computes the latest start time that will still recover by occupancy — starting later on easy mornings, earlier on brutal ones. <strong>Adaptive</strong> optimal start learns: it compares predicted versus actual recovery and adjusts its model of the building day by day.</p>
<p><strong>Optimal stop</strong> is the evening mirror: shut the plant down a calculated interval before closing, letting the building's thermal mass coast within comfort limits until the last occupant leaves. The coast time is bounded — a conservative cap protects against complaints, and the algorithm again learns from what temperatures actually did.</p>
<div class="callout"><strong>Key idea:</strong> Optimal start/stop convert the building itself — its mass and insulation — into stored comfort. The programming is only as good as its sensors: a zone sensor in a sunbeam teaches the model a fantasy building, and recovery times go wrong in exactly the direction the sun dictates.</div>
<p><strong>Worked reasoning example:</strong> A school's fixed 4:30 a.m. start was replaced by optimal start. On a mild Monday the plant starts at 6:10; after a three-day freeze it starts at 4:05. Both days, rooms sit at setpoint by the 7:30 bell. The strategy didn't change comfort by one degree — it deleted roughly an hour and a half of average daily plant run, found purely by asking 'when is the latest we can start?' every single morning.</p>`
    },
    {
      heading: "Demand Limiting and Load Management",
      html: `
<p>Commercial electric bills punish <em>peaks</em>: the demand charge is set by the highest short-interval power draw of the billing period. <strong>Demand limiting</strong> is the DDC strategy that watches the building's meter and, as demand approaches a target ceiling, trims HVAC loads in a planned order:</p>
<ul>
<li><strong>Shedding:</strong> temporarily shutting down or relaxing selected loads (raise a cooling setpoint slightly, pause a non-critical fan, stage off one chiller pump) until the peak passes.</li>
<li><strong>Rotation:</strong> when several equivalent loads exist (multiple RTUs), cycling which ones shed so no single space bears all the discomfort — fairness engineered in.</li>
<li><strong>Restoration discipline:</strong> loads return in staggered order so the recovery doesn't create a second, bigger peak — the classic amateur error.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Demand limiting trades a small, shared, temporary comfort relaxation for a large recurring bill reduction. The strategy lives at the supervisory level because it needs the whole building's meter and the whole building's loads — the clearest example of why networks (Module 9) exist.</div>
<p>One design choice separates professional demand limiting from a blunt instrument: <strong>comfort guardrails</strong>. Each sheddable load gets limits — a zone may be relaxed only so many degrees, a fan paused only so many minutes per hour, critical spaces (server rooms, clinics, freezers) excluded entirely. The strategy then optimizes <em>inside</em> those fences. A demand program without guardrails will eventually save money on the one afternoon it could least afford to, and the post-mortem will correctly blame the programmer, not the algorithm.</p>`
    },
    {
      heading: "Reset Strategies: Setpoints That Move With the Load",
      html: `
<p>A fixed setpoint is a confession that you designed for the worst day and pay for it every day. <strong>Reset</strong> strategies slide a setpoint along with actual need — the direct descendant of the pneumatic receiver-controller reset in Module 6:</p>
<ul>
<li><strong>Discharge-air temperature reset:</strong> when zones are nearly satisfied (judged by their damper positions or their own requests), raise the supply-air setpoint a few degrees. The chiller and fan work less; the warmest zone still gets enough because reset stops where demand says stop.</li>
<li><strong>Duct static-pressure reset:</strong> lower the static setpoint until the most-open VAV damper sits nearly wide open — proof that no zone is starved — and let the fan slow down. Fan energy falls steeply with speed, making this one of the largest fan-energy savers available.</li>
<li><strong>Chilled-water temperature reset:</strong> raise the water temperature when loads are light; chillers are more efficient producing warmer water, and coils compensate with valve position — until one coil can't, which is the reset's honest limit.</li>
</ul>
<div class="formula">Reset principle: find the most-demanding zone, give it exactly enough, and let every other load relax. The most-open damper / most-open valve is the truth-teller.</div>
<div class="callout"><strong>Common mistake:</strong> Reset without a watchdog. Every reset strategy needs its demanding-zone feedback verified — a failed damper position signal can reset the plant into starving the whole building while the front end reports success. Verify the feedback point first (Module 12 checks), then enable the strategy.</div>`
    },
    {
      heading: "Trending and PID in Practice",
      html: `
<p><strong>Trending</strong> is the DDC system's memory made visible: selected points logged at intervals (or on change) and plotted against time. Everything Module 2 taught about behavior — hunting waves, short-cycle patterns, offset that never closes — is invisible in a snapshot and obvious in a trend. Professional practice:</p>
<ul>
<li>Trend the loop's full story together: setpoint, measured value, and output. Output alone or value alone tells half-truths.</li>
<li>Choose intervals that can see the fault: a 15-minute trend cannot show a 4-minute oscillation; for tuning work, log fast (seconds to a minute), then relax to archival rates.</li>
<li>Trends settle arguments with data: 'the room was cold all morning' becomes a picture of exactly when, how far, and what the plant was doing.</li>
</ul>
<p><strong>PID in DDC practice</strong> is Module 2 with a configuration screen. Each loop exposes its band/gain, integral time, and (often unused) derivative. The field rules survive digitization intact: tune one loop at a time, change one parameter at a time, watch a trend before and after, prefer stability over speed for comfort loops, and remember that most HVAC loops run PI. What DDC adds is repeatability — a tuned loop's parameters are recorded, portable, and restorable after a controller swap, provided someone documented them (which is why the sequence binder from Module 10 includes the tuning table).</p>
<div class="callout"><strong>Key idea:</strong> A trend is the difference between 'the customer says it hunts' and 'here is the 22-minute oscillation that began the day the integral was halved.' Diagnose from records, not impressions.</div>`
    }
  ],
  keyTerms: [
    { term: "Schedule", def: "A time-based program of occupancy states per day type, driving occupied/unoccupied behavior." },
    { term: "Exception schedule", def: "A one-time or special-day deviation from the weekly schedule (events, closures)." },
    { term: "Holiday calendar", def: "The list of dates treated as unoccupied regardless of weekday." },
    { term: "Override", def: "A manual command holding a point or schedule in a chosen state; should be time-limited to avoid becoming permanent." },
    { term: "Optimal start", def: "Computed latest plant start that recovers zones to setpoint by occupancy time, adapting to conditions." },
    { term: "Optimal stop", def: "Computed early plant shutdown letting building mass coast within comfort limits until occupancy ends." },
    { term: "Adaptive learning", def: "An algorithm's adjustment of its own model from measured results (e.g., actual vs. predicted recovery)." },
    { term: "Demand limiting", def: "Supervisory strategy trimming HVAC loads as building electrical demand nears a target ceiling." },
    { term: "Load shedding", def: "Temporarily relaxing or stopping selected loads to cap demand." },
    { term: "Load rotation", def: "Cycling which equivalent loads are shed so the burden is shared." },
    { term: "Demand charge", def: "The billing component based on the highest short-interval power draw in the period." },
    { term: "Reset strategy", def: "Automatic adjustment of a setpoint based on another variable or on zone demand feedback." },
    { term: "Discharge-air reset", def: "Raising the supply-air setpoint when zone demand is low to save cooling/fan energy." },
    { term: "Static-pressure reset", def: "Lowering the duct static setpoint until the most-open damper nears full open, minimizing fan energy." },
    { term: "Trend", def: "A time-stamped record of point values, plotted for diagnosis and verification." },
    { term: "Trend interval", def: "The logging rate of a trend; must be fast enough to capture the behavior being investigated." },
    { term: "Integral time", def: "The PID configuration expressing how aggressively integral action accumulates correction." },
    { term: "Watchdog (reset)", def: "The verified feedback (e.g., most-open damper) that bounds a reset strategy so zones are never starved silently." }
  ],
  video: {
    title: "Portal 2.0: Setting Up a BACnet HVAC Schedule",
    embedUrl: "https://www.youtube.com/embed/rlyCIzCT55s",
    note: "A walkthrough of configuring a BACnet HVAC schedule — choosing devices, building daily schedules, and pushing setpoints. It shows the scheduling concept from this module as real configuration work on a live portal; note how each schedule choice is a policy decision about when the building is truly occupied.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A retail store actually opens at 10 a.m., but the BAS schedule starts full operation at 6 a.m. 'to be safe,' and staff override the system most evenings for late events anyway. Write the professional critique and the corrected approach.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Four daily hours of full operation condition an empty store — pure waste — while routine evening overrides prove the schedule doesn't match real occupancy in the other direction either. Step 2: Corrected approach: set the base schedule from actual trading hours (with optimal start handling recovery), add the recurring late events as exception schedules, and use time-limited overrides for the truly one-off nights. Step 3: The goal is a schedule reality doesn't fight.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Optimal start produces chronic late recovery on Mondays only; other days are perfect. Give the two most likely explanations and how you'd confirm each.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: (a) The building drifts far over the long weekend (deep setback), and the model underestimates three-day cooldown — confirm by trending zone temperature Sunday night into Monday versus a normal overnight. Step 2: (b) The plant's available recovery capacity Monday is reduced (e.g., a boiler/chiller staging limitation in cold-soak conditions) — confirm by trending plant output during a failing recovery. Step 3: Fixes differ: deepen the model's weekend handling or start from real measured drift, versus repairing the capacity limitation. Data first, then the matching fix.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> During a demand-limit event, all six RTUs are shed simultaneously and restored simultaneously twenty minutes later. Explain why the restoration creates the exact problem the strategy exists to prevent, and state the correct pattern.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Six units restarting together draw their combined inrush and full load at once — a synchronized spike that can exceed the peak the shed avoided, and it lands inside the same demand interval logic. Step 2: Correct pattern: <strong>staggered restoration</strong> — units return one at a time (rotated order) with delays between, so load rebuilds as a ramp, not a cliff. Step 3: Shedding should also have been rotational where possible, spreading the comfort cost instead of concentrating it.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Static-pressure reset is enabled. Within a week, the farthest zones complain of starvation while the front end shows static pressure 'at setpoint' and the most-open damper reading 60%. Reconstruct the likely fault chain.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The reset watchdog is the most-open damper feedback; if that damper is actually at 100% but reports 60% (failed position feedback — the lying sensor pattern again), the reset believes demand is modest and keeps lowering static. Step 2: Zones starve while every displayed value looks content. Step 3: Verify damper position physically against its feedback point; repair the feedback before re-enabling reset. Reset strategies are only as honest as their watchdog point.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> You inherit a discharge-air loop that hunts. Plan your trend setup: which points, at what interval, and what will you do with the first plot?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Trend the loop's trio — discharge setpoint, discharge temperature (AI), and valve output (AO) — together. Step 2: Interval fast enough to resolve the wave (tens of seconds to a minute for a typical air loop) over at least several full oscillation periods. Step 3: First plot: measure the period and check whether output swings lead or mirror the temperature swings, distinguishing aggressive tuning (output driving the wave) from an external disturbance; then change one parameter — usually slowing integral or widening band — and re-trend to prove the effect.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> An owner asks why they should pay for 'reset strategies' when the plant already holds setpoint fine. Write the two-sentence value case.</p>",
      solution: "<p><strong>Answer (example):</strong> Step 1: 'Holding a worst-day setpoint on a mild day is like driving with the parking brake priced into your fuel bill — the plant works harder than the load requires, every hour of the year.' Step 2: 'Reset lets the most-demanding zone set the pace: when no zone needs full effort, water temperatures, air temperatures, and fan pressure all relax together, and the savings show up in chiller and fan energy without any zone feeling a difference.'</p>"
    }
  ],
  quiz: [
    {
      q: "Optimal start differs from a fixed schedule start because it:",
      choices: ["Always starts earlier", "Computes the latest start that still recovers by occupancy, based on current conditions and learned building response", "Starts the plant at midnight", "Uses the outdoor sensor as the zone sensor"],
      answer: 1,
      explanation: "Correct: (b). Recovery need varies with weather and drift; optimal start spends only the run time the day actually requires. (a) It often starts later than a conservative fixed start — that's the savings. (c) Midnight starts are the waste the strategy eliminates. (d) Zone sensors drive recovery judgment; the outdoor sensor is an input to conditions, not a substitute measurement."
    },
    {
      q: "Demand limiting exists primarily to control:",
      choices: ["The total monthly kilowatt-hours only", "The peak power draw that sets the demand charge, by trimming loads as the ceiling approaches", "The building's power factor directly", "Occupant behavior"],
      answer: 1,
      explanation: "Correct: (b). Peaks set demand charges; the strategy watches the meter and sheds/relaxes loads near the target. (a) Total energy matters too, but a short peak can dominate cost out of proportion to its energy. (c) Power factor is corrected by other equipment; demand limiting manages magnitude and timing. (d) The strategy acts on equipment, not people."
    },
    {
      q: "Load rotation during demand limiting is used to:",
      choices: ["Confuse the utility meter", "Share the shedding burden among equivalent loads so no single space bears it all", "Increase the peak gradually", "Test each unit's starter monthly"],
      answer: 1,
      explanation: "Correct: (b). Rotation is fairness and risk distribution engineered into the shed order. (a) The meter is the strategy's own input; deception isn't a controls function. (c) Peaks are what the strategy caps — deliberately raising one is sabotage of its purpose. (d) Equipment testing is a maintenance program, separate from demand strategy."
    },
    {
      q: "Duct static-pressure reset lowers the static setpoint until:",
      choices: ["All dampers are closed", "The most-open VAV damper is nearly fully open, proving no zone is starved while fan energy is minimized", "The fan stops", "The static sensor reads zero"],
      answer: 1,
      explanation: "Correct: (b). The most-open damper is the watchdog: as long as one zone nearly maxes out, pressure is exactly sufficient. (a) Closed dampers mean no demand — the fan should be at minimum or off, not 'reset'. (c) A stopped fan serves no zones at all. (d) Zero static with zones calling is the failure case, not the goal."
    },
    {
      q: "The first verification before enabling any reset strategy is:",
      choices: ["That the graphics are pretty", "That the feedback/watchdog point it depends on (e.g., damper position) is accurate — checked physically", "That the utility approves in writing", "That all setpoints are at factory defaults"],
      answer: 1,
      explanation: "Correct: (b). Reset follows its feedback; a lying watchdog starves buildings while reporting success. (a) Graphics display the strategy but don't validate its inputs. (c) Utilities incentivize savings but don't commission your loops. (d) Defaults are starting points, not verification of sensor honesty."
    },
    {
      q: "A trend sampled every 15 minutes cannot diagnose a 4-minute oscillation because:",
      choices: ["Trends don't store oscillations", "The sampling is too slow to capture the behavior — the wave passes between samples", "Oscillations stop when trended", "The front end lacks colors"],
      answer: 1,
      explanation: "Correct: (b). Interval selection must resolve the phenomenon; tuning work needs fast logging. (a) Trends store whatever the samples see — the wave is real but invisible at that rate. (c) Observation doesn't calm a loop; tuning does. (d) Display cosmetics are irrelevant to sampling adequacy."
    },
    {
      q: "A forgotten permanent override is dangerous to an energy program because it:",
      choices: ["Uses slightly bolder graphics", "Silently defeats schedules and strategies indefinitely until someone audits points in override", "Breaks the controller hardware", "Changes wire colors"],
      answer: 1,
      explanation: "Correct: (b). Overrides bypass automatic logic by design — which is why they should be time-limited and audited. (a) Display style is cosmetic. (c) Overrides are software states, harmless to hardware but costly to bills. (d) Overrides have nothing to do with conductor colors."
    },
    {
      q: "In DDC practice, most HVAC PID loops are run as PI (derivative zero) because:",
      choices: ["Derivative is illegal in commercial buildings", "Thermal processes are slow and derivative amplifies sensor noise, so P+I gives stable control without the jitter", "Controllers can't compute derivative", "Integral alone is always best"],
      answer: 1,
      explanation: "Correct: (b). Same reasoning as Module 2, now in a configuration screen. (a) No such rule exists; it's an engineering choice. (c) Modern controllers compute D trivially. (d) Integral alone is slow and oscillatory by itself; proportional provides the immediate response."
    }
  ],
  studyGuide: `
<h3>Module 11 — DDC Application & Programming Concepts: Quick Reference</h3>
<ul>
<li><strong>Schedules:</strong> occupancy timetables + holidays + exceptions. Set from real occupancy, owned by a named person. Chronic overrides = the schedule is wrong, not the occupants.</li>
<li><strong>Optimal start:</strong> latest start that recovers by occupancy; adapts/learns. <strong>Optimal stop:</strong> early shutdown coasting on building mass. Both are only as good as their zone sensors.</li>
<li><strong>Demand limiting:</strong> watch the meter; near the ceiling, shed in planned order, rotate among equals, restore STAGGERED (synchronized restoration rebuilds the peak).</li>
<li><strong>Reset strategies:</strong> discharge-air temp ↑ when zones satisfied; duct static ↓ until most-open damper ≈ full; chilled-water temp ↑ when loads light. Principle: the most demanding zone sets the pace.</li>
<li><strong>Watchdog rule:</strong> verify the feedback point physically before enabling reset — a lying damper-position signal starves a building behind a happy front end.</li>
<li><strong>Trending:</strong> log setpoint + measured + output together; interval fast enough to see the fault (tuning work: seconds–1 min). Trends turn complaints into evidence.</li>
<li><strong>PID in practice:</strong> PI for most HVAC loops; one loop, one parameter, one trend before/after; document the final tuning in the sequence binder.</li>
</ul>
<p><strong>Strategy stack:</strong> schedule decides WHEN, optimal start decides HOW EARLY, reset decides HOW HARD, demand limiting decides HOW MUCH AT ONCE.</p>`
};
