// HVAC 207 - Module 2: Walk-In Coolers & Freezers
module.exports = {
  number: 2,
  slug: "walk-in-coolers-freezers",
  title: "Walk-In Coolers & Freezers",
  estTime: "3–4 hours",
  objectives: [
    "Name the parts of a walk-in system — box, unit cooler, condensing unit, and controls — and state the job of each.",
    "Explain how temperature controls and low-pressure controls each can start and stop a walk-in compressor, and which one is normally in charge.",
    "Describe what evaporator fans do besides move air, including their role in off-cycle defrost and post-defrost fan delay.",
    "Quantify how door openings, propped doors, and product loading add heat load to a walk-in.",
    "Recognize the field signs of the most common walk-in faults: iced coils, failed fan motors, torn gaskets, and stuck-open doors."
  ],
  sections: [
    {
      heading: "Anatomy of a Walk-In",
      html: `
<p>A walk-in is two systems wearing one name. The <strong>box</strong> is the insulated room itself: cam-locked foam panels for walls and ceiling, an insulated floor or concrete slab, and a heavy door with a heated frame on freezers. The <strong>refrigeration system</strong> is usually split: a <strong>unit cooler</strong> (the evaporator, its fans, and its metering device) hangs from the ceiling inside the box, while the <strong>condensing unit</strong> — compressor and condenser — sits outside the box, in the kitchen, on the roof, or in a mechanical yard, where its rejected heat will not fight the box.</p>
<p>Inside the unit cooler you will find one to four fan motors blowing box air across a finned coil, a TXV feeding the coil (Module 1 of your earlier courses covered how it meters), drain pan and heated drain line on freezers, and defrost heaters in or under the coil on low-temperature models. Outside, the condensing unit adds the parts that protect the compressor: a liquid-line solenoid for pump-down control, a receiver to hold the charge, pressure controls, and often a crankcase heater.</p>
<div class="callout"><strong>Key idea:</strong> Learn a walk-in as a map — box, unit cooler, condensing unit, controls. Every symptom belongs to one part of the map, and the map tells you where to stand with your gauges and meter.</div>
<p>Sizes run from a closet-sized 6×6 to warehouse rooms, but the anatomy never changes. Master the small restaurant walk-in and the warehouse version is the same drawing at a bigger scale.</p>`
    },
    {
      heading: "Controls: Who Starts and Stops the Compressor?",
      html: `
<p>Two control strategies run most walk-ins. In <strong>thermostat control with pump-down</strong>, the box thermostat senses air temperature. When the box warms past setpoint, the thermostat opens a liquid-line solenoid valve; refrigerant flows, suction pressure rises, and a low-pressure control closes to start the compressor. When the box reaches setpoint, the thermostat closes the solenoid; the compressor keeps running, pumping the evaporator and suction line nearly empty, until suction pressure falls to the low-pressure control's cut-out and the compressor stops. The charge waits in the receiver and liquid line, so almost no refrigerant sits in the cold evaporator during the off cycle to migrate and slug the compressor at start-up.</p>
<p>In simpler <strong>pressure-controlled</strong> systems, common on small self-contained units, the low-pressure control alone cycles the compressor on evaporator pressure, which tracks box temperature through the P/T relationship. It works, but temperature control is indirect — the box temperature that corresponds to a cut-in pressure shifts with load and frost.</p>
<div class="callout"><strong>Key idea:</strong> On a pump-down system, a compressor that stops is not necessarily satisfying the thermostat — read the story in order: thermostat calls → solenoid opens → pressure rises → pressure control starts the compressor. A break anywhere in that chain stops the machine.</div>
<p>Safety controls sit above both strategies: a high-pressure cut-out guards against a failed condenser fan or dirty coil, and on freezers the defrost clock can override the cooling call entirely during a defrost cycle (Module 6).</p>`
    },
    {
      heading: "Evaporator Fans: More Than Air Movers",
      html: `
<p>Evaporator fans do three jobs. First, they move box air across the coil so heat can transfer — a walk-in with dead fans is a cold coil in a warm room, and the coil frosts solid in the still air. Second, on medium-temperature coolers the fans are the <strong>defrost mechanism</strong>: during the off cycle they keep blowing box air (above freezing) across the coil, melting the light frost that built up while the compressor rests. Third, after a freezer defrost the fans are deliberately <strong>held off</strong> — fan delay — until the coil pulls back down toward operating temperature, so the first air blown into the box is cold rather than a blast of defrost heat and moisture onto the product.</p>
<p>Fan failures announce themselves clearly if you look: a coil iced in a slab pattern, product warm at the top of the box where air no longer reaches, and a fan blade you can spin by hand that feels gritty or seized. Modern unit coolers increasingly use electronically commutated (EC) motors that sip power compared with older shaded-pole motors, and run whenever the box needs air movement — often continuously, even during the off cycle.</p>
<div class="callout"><strong>Key idea:</strong> Fans running with the compressor off is normal on many walk-ins — it is either off-cycle defrost in progress or standard air circulation. Fans NOT running when they should be is a top-three walk-in fault.</div>
<p>Fan health is checked with ears and hands as much as meters: a blade that wobbles, a motor that growls, or a guard caked in dust and flour is a fan already spending its last season. Note marginal fans on the work order even when they still turn — a fan that fails on a holiday weekend costs a box of product, while the same motor replaced on a Tuesday costs a line item.</p>`
    },
    {
      heading: "Doors and Load: The Heat You Can See",
      html: `
<p>Every door opening trades box air for room air, and room air carries both heat and moisture. The moisture lands on the coil as frost; the heat lands on the refrigeration system as work. A door propped open during a delivery is the single most common self-inflicted walk-in overload, and strip curtains or plastic strip doors exist precisely to cut that exchange while people pass through.</p>
<p><strong>Worked example — reading a load problem.</strong> A freezer holds −2°F at 6 a.m. but climbs to 12°F every afternoon. Step 1: The pattern is time-based, not weather-based, so suspect the schedule, not the machine. Step 2: You learn deliveries arrive at 2 p.m. and the door is blocked open for 40 minutes while cases are stacked — partly in front of the unit cooler, blocking its airflow. Step 3: The fixes are operational: door closed between trips, product staged away from the coil's air path, and a strip curtain added. No refrigerant was touched, because the system was never broken — it was being asked to refrigerate the kitchen every afternoon.</p>
<ul>
<li><strong>Warm product loading:</strong> walk-ins maintain temperature; they are not blast chillers. Loading pallets of warm product overwhelms them for hours.</li>
<li><strong>Gaskets and closers:</strong> a torn gasket or dead door closer is a permanent door opening, 24 hours a day.</li>
<li><strong>Freezer door heaters:</strong> if frame and threshold heaters fail, ice builds at the door until it cannot seal or cannot open.</li>
</ul>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Walk-in = box + unit cooler inside + condensing unit outside + a control story you can recite in order.</li>
<li>Pump-down control stores the charge safely at shutdown and protects the compressor from migration slugs.</li>
<li>Evaporator fans cool, defrost (off-cycle), and wait (fan delay) — know which mode you are watching.</li>
<li>Doors, gaskets, and loading habits are refrigeration load; many "system failures" are load failures.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Condemning a compressor because the box is warm at noon. Check the coil for ice, the fans for rotation, and the door for a gap of daylight before any gauge goes on.</div>
<div class="callout"><strong>Common mistake:</strong> Closing the door on your test thermometer's lead and walking away from a freezer whose door heater has failed — the door can ice itself shut with your tools inside. Know the inside safety release: walk-in doors are built so a person inside can always push or turn a release to get out, even if the door is latched outside.</div>
<p><strong>Certification link:</strong> Light Commercial Refrigeration examiners love walk-ins: pump-down operation, fan functions, and load discipline are standard blueprint topics, and they are daily bread on real service routes.</p>
<p>Carry the map habit into your paperwork, too: write findings under the same headings — box, unit cooler, condensing unit, controls — and your service history becomes searchable sense instead of a pile of anecdotes. The next tech (often you, in six months) will thank the author.</p>`
    }
  ],
  keyTerms: [
    { term: "Unit cooler", def: "The evaporator assembly inside a walk-in: coil, fans, metering device, and drain pan." },
    { term: "Condensing unit", def: "The compressor, condenser, receiver, and controls, usually located outside the refrigerated box." },
    { term: "Pump-down", def: "A control scheme that empties the evaporator and suction line into the receiver and liquid line at shutdown by closing a solenoid valve and letting the compressor pump until low-pressure cut-out." },
    { term: "Liquid-line solenoid valve", def: "An electrically opened valve that starts and stops refrigerant flow to the evaporator; the thermostat's hand on a pump-down system." },
    { term: "Low-pressure control", def: "A pressure-activated switch that starts and stops the compressor at set suction pressures." },
    { term: "Cut-in / cut-out", def: "The pressures (or temperatures) at which a control closes to start and opens to stop equipment." },
    { term: "Receiver", def: "A vessel on the high side that stores liquid refrigerant so charge can vary with load and pump-down." },
    { term: "Off-cycle defrost", def: "Clearing coil frost by stopping refrigeration while evaporator fans keep moving above-freezing box air across the coil." },
    { term: "Fan delay", def: "Holding evaporator fans off after defrost until the coil is cold again, preventing a blast of warm moist air into the box." },
    { term: "Strip curtains", def: "Overlapping flexible plastic strips in a doorway that cut air exchange while people and carts pass." },
    { term: "Door gasket", def: "The flexible seal around a walk-in door; a torn or hardened gasket leaks air continuously." },
    { term: "Door closer", def: "The spring or hydraulic device that pulls the door fully shut after every entry." },
    { term: "Frame heater", def: "Electric heat around a freezer door frame that prevents ice from sealing the door or breaking its seal." },
    { term: "Crankcase heater", def: "A small heater that keeps the compressor sump warm during off cycles to drive refrigerant out of the oil." },
    { term: "Refrigerant migration", def: "Refrigerant slowly condensing in the coldest point of an idle system — often the compressor — causing oil dilution and start-up slugging." },
    { term: "High-pressure cut-out", def: "A safety control that stops the compressor if discharge pressure rises to a dangerous level." },
    { term: "Infiltration", def: "Warm moist room air entering the box through door openings and leaks; a major part of walk-in load." },
    { term: "EC motor", def: "An electronically commutated fan motor valued for high efficiency at small sizes." }
  ],
  video: {
    title: "Walk in Cooler low pressure control problems",
    embedUrl: "https://www.youtube.com/embed/l9rslcUDgPw",
    note: "A field look at low-pressure control problems on a walk-in cooler — the control that starts and stops the compressor on most small walk-ins and finishes every pump-down cycle. Watch how pressure readings are used to prove whether the control or the system is at fault.",
    more: [
      { title: "Commercial Refrigeration Troubleshooting | Walk-In Cooler Won't Start!", url: "https://www.youtube.com/watch?v=L60zZzzuc-4" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A pump-down walk-in cooler is warm and the compressor is silent. The thermostat is calling. List, in order, the four links of the control chain you would verify, and what each check proves.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <strong>Solenoid valve energized/open</strong> — feel for coil magnetism or listen for the click; proves the thermostat's call is reaching the valve. Step 2: <strong>Suction pressure rising</strong> — gauges show pressure climbing once liquid feeds the evaporator; proves refrigerant is actually flowing. Step 3: <strong>Low-pressure control closed</strong> — meter across it shows no voltage drop when it should be made; proves the control responded to cut-in pressure. Step 4: <strong>Contactor pulled in and compressor powered</strong> — proves the electrical path is complete. The first link that fails is where the fault lives.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Why does a pump-down system protect the compressor better at start-up than a system that simply stops the compressor with refrigerant still in the evaporator?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: During an off cycle, refrigerant migrates to the coldest point — the evaporator and, through it, toward the compressor sump. Step 2: In a non-pump-down system that refrigerant can condense in the crankcase oil; at start-up it flashes and foams the oil out of the sump, and liquid can slug the cylinders. Step 3: Pump-down parks nearly all the charge in the receiver and liquid line behind a closed solenoid, so the evaporator and suction line sit nearly empty and there is little refrigerant available to migrate.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A freezer comes out of defrost and the product near the unit cooler gets a noticeable warm, damp blast every cycle. Which control function has failed, and what does it normally do?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The failed function is <strong>fan delay</strong>. Step 2: Normally, after defrost terminates, the compressor restarts but the evaporator fans stay off until a coil sensor confirms the coil has pulled back down toward operating temperature. Step 3: With fan delay defeated or its sensor failed, the fans start immediately and blow the defrost's leftover heat and moisture straight onto the product — the exact symptom described.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A cooler coil is found frozen into a solid block, yet the evaporator fans are running and the box is warm. Give the most likely story of how this happened on an off-cycle-defrost system.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Off-cycle defrost only works if the compressor actually gets off cycles long enough for above-freezing box air to melt the frost. Step 2: A heavy load — door propped for deliveries, torn gasket, warm product — can keep the thermostat calling continuously, so no off cycle ever occurs. Step 3: Frost then builds faster than it melts, insulates the coil, cuts airflow, and the box warms — which keeps the compressor calling even harder. The coil ice is the symptom; the missing off cycle, caused by the overload, is the disease.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A freezer door is getting hard to open in the morning and ice is creeping across the threshold. Name two failed or failing parts to check, and the risk if you ignore it.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Check the <strong>door frame/threshold heater circuit</strong> — a dead heater lets leaked moisture freeze at the seal line. Step 2: Check the <strong>gasket and door closer</strong> — a torn gasket or weak closer admits the moist air that feeds the ice. Step 3: Ignored, the ice can hold the door slightly open (a permanent infiltration load) or freeze it shut — and a door iced shut with the only fault being ice is a safety problem, not just an inconvenience.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A cook complains the walk-in cooler “never stops running” since a busy weekend. The coil is clean, fans run, box holds 37°F. Give the most likely explanation and your advice.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The box is at temperature, so the system is not failing — it is keeping up with a load. Step 2: Busy weekends mean constant door traffic and warm product loading; infiltration and product load can consume the entire capacity that normally provides off cycles. Step 3: Advice: confirm product is not being loaded hot, add or repair strip curtains, check the gasket and closer, and re-check run time on a normal day before condemning any component.</p>"
    }
  ],
  quiz: [
    {
      q: "In a pump-down system, the thermostat directly controls the:",
      choices: ["Compressor contactor", "Liquid-line solenoid valve", "Low-pressure cut-out setting", "Condenser fan"],
      answer: 1,
      explanation: "Correct: (b). The thermostat opens and closes the solenoid; the compressor follows through the low-pressure control as suction pressure rises and falls. (a) The contactor is pulled in later in the chain, by the pressure control circuit. (c) Cut-out is a set adjustment, not something the thermostat moves. (d) The condenser fan typically runs with the compressor, not off the thermostat."
    },
    {
      q: "The main purpose of pump-down at shutdown is to:",
      choices: ["Defrost the coil faster", "Keep refrigerant out of the evaporator and suction line so it cannot migrate into the compressor", "Raise head pressure for the next start", "Cool the compressor oil"],
      answer: 1,
      explanation: "Correct: (b). Parking the charge in the receiver and liquid line prevents migration, oil dilution, and start-up slugging. (a) Pump-down is not a defrost method; off-cycle air or heaters do that work. (c) Head pressure at the next start is set by ambient conditions, not stored charge location. (d) Oil temperature is the crankcase heater's job."
    },
    {
      q: "Fan delay after a freezer defrost exists to:",
      choices: ["Save fan motor life", "Prevent blowing warm, moist air onto the product before the coil is cold again", "Let the compressor build oil pressure first", "Give the drain pan time to freeze"],
      answer: 1,
      explanation: "Correct: (b). Fans wait until the coil is cold so the first air into the box is refrigeration, not leftover defrost heat. (a) Motor life is not the design reason. (c) Oil pressure establishes in seconds and is unrelated to the fan circuit timing. (d) The drain pan should be warm and clear, never frozen."
    },
    {
      q: "On a medium-temperature cooler, off-cycle defrost works because:",
      choices: ["The heaters hidden in the coil turn on", "Box air above freezing keeps moving across the coil while the compressor rests", "The TXV opens fully and floods the coil with warm liquid", "The condenser fan reverses"],
      answer: 1,
      explanation: "Correct: (b). Fans keep blowing 35–38°F box air over the frosted coil during the off cycle and the frost melts. (a) Medium-temp coolers using off-cycle defrost have no defrost heaters. (c) No refrigerant flows during the off cycle on a pump-down system, and liquid is never warm enough to defrost. (d) Condenser fans do not reverse on this equipment."
    },
    {
      q: "A freezer's door frame heater has failed. The first visible result is usually:",
      choices: ["High head pressure", "Ice forming at the door seal and threshold", "Low superheat", "A tripped oil safety"],
      answer: 1,
      explanation: "Correct: (b). Without frame heat, leaked moisture freezes at the seal line, building ice that can hold the door open or freeze it shut. (a), (c), and (d) are refrigerant-side or compressor conditions; a door heater is an envelope part and shows its failure at the door."
    },
    {
      q: "A walk-in that warms up every afternoon but is fine every morning points first to:",
      choices: ["A refrigerant leak", "A failing compressor valve", "A schedule-driven load: deliveries, propped door, or blocked unit cooler airflow", "A miscalibrated thermostat"],
      answer: 2,
      explanation: "Correct: (c). Time-of-day patterns indict the operation's schedule — deliveries and door discipline — before the machine. (a) and (b) are mechanical faults that would not politely keep office hours. (d) A bad thermostat misbehaves around the clock, not just after lunch."
    },
    {
      q: "The unit cooler in a walk-in contains the:",
      choices: ["Compressor and condenser", "Evaporator coil, fans, and metering device", "Receiver and solenoid valve only", "Defrost clock and contactor panel"],
      answer: 1,
      explanation: "Correct: (b). The unit cooler is the indoor evaporator assembly. (a) The compressor and condenser live in the condensing unit, outside the box. (c) The receiver sits with the condensing unit; the solenoid is in the liquid line, not the definition of the unit cooler. (d) Controls may be field-mounted anywhere; they are not what makes a unit cooler."
    },
    {
      q: "Strip curtains on a walk-in doorway mainly reduce:",
      choices: ["Coil frost from humidity in the product", "Infiltration of warm moist air during entries", "Compressor run time by insulating the walls", "Noise from the condensing unit"],
      answer: 1,
      explanation: "Correct: (b). Strips let people pass while keeping most of the air exchange from happening. (a) Product humidity is a minor source compared with doorway infiltration. (c) Curtains do not insulate walls; they only guard the opening. (d) Any noise change is incidental, not the purpose."
    }
  ],
  studyGuide: `
<h3>Module 2 — Walk-In Coolers & Freezers: Quick Reference</h3>
<p><strong>Map:</strong> Box (panels, door) · Unit cooler inside (coil, fans, TXV, drain) · Condensing unit outside (compressor, condenser, receiver, controls).</p>
<p><strong>Pump-down story:</strong> Thermostat calls → solenoid opens → suction pressure rises → low-pressure control starts compressor. Thermostat satisfied → solenoid closes → compressor pumps down → cut-out stops it.</p>
<p><strong>Fan jobs:</strong> move air for cooling · off-cycle defrost on coolers (fans keep running) · fan delay after freezer defrost (fans wait for a cold coil).</p>
<p><strong>Load discipline:</strong> door openings = heat + frost; warm product overwhelms a maintainer; torn gaskets and dead closers leak around the clock; freezer doors need working frame heaters.</p>
<p><strong>First checks on a warm walk-in:</strong> coil ice? fans turning? daylight at the door? — before gauges.</p>
<p><strong>Self-check:</strong> Narrate one full pump-down cycle and one defrost recovery out loud, in order, including what the fans do at each step.</p>

<p><strong>Numbers to keep:</strong> cooler boxes ride 34–38°F in service, freezers −10–0°F; a freezer door frame should feel warm — that warmth is the heater proving itself.</p>`
};
