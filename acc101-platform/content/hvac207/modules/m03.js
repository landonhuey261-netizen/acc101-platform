// HVAC 207 - Module 3: Reach-Ins, Display Cases & Ice Machines
module.exports = {
  number: 3,
  slug: "reach-ins-display-cases-ice-machines",
  title: "Reach-Ins, Display Cases & Ice Machines",
  estTime: "3–4 hours",
  objectives: [
    "Explain how a self-contained unit differs from a remote system in service access, heat rejection, and failure impact.",
    "Describe the operating cycle of reach-in refrigerators and freezers, including capillary-tube metering and its charge sensitivity.",
    "Identify the special service concerns of display cases: air curtains, case lighting heat, and condensate handling.",
    "Walk through the ice machine sequence — pre-chill, freeze, and harvest — and name what ends each stage.",
    "List the water-side maintenance items that decide whether an ice machine makes ice at all."
  ],
  sections: [
    {
      heading: "Self-Contained: The Whole System in One Cabinet",
      html: `
<p>A <strong>self-contained</strong> unit carries its entire refrigeration system in or on the cabinet: compressor, condenser, metering device, and evaporator, factory-sealed and factory-charged. Reach-ins, undercounter units, many display cases, and most ice machines are built this way. The great advantage is simplicity — roll it in, plug it in, and it refrigerates. The great disadvantage is that the condenser rejects its heat <em>into the room the cabinet sits in</em>, so the kitchen's air conditioning inherits the load, and a hot, greasy kitchen punishes the condenser coil that lives inches from the floor breathing it all in.</p>
<p>Service is correspondingly different. The charge is small — often only ounces to a couple of pounds — and frequently metered by a <strong>capillary tube</strong>, a fixed restriction with no moving parts. Cap-tube systems are <strong>critically charged</strong>: there is no receiver to absorb mistakes, so a small overcharge or undercharge moves superheat a lot. Many self-contained units ship without service valves, with only a process stub, which changes how you recover, evacuate, and weigh in the exact nameplate charge.</p>
<div class="callout"><strong>Key idea:</strong> On a critically charged cap-tube unit, the scale is your charging tool. "A little more for good measure" is how a working reach-in becomes a warm one.</div>
<p>Because the whole system is one appliance, a failure is also total — but contained: one cabinet of product at risk, not a whole store, which is exactly the opposite trade-off from the rack systems in Module 5.</p>`
    },
    {
      heading: "Reach-Ins at Work",
      html: `
<p>Reach-in refrigerators and freezers live a harder life than any other equipment in this course. Their doors open dozens of times an hour, often kicked or hip-checked shut, and they stand in the hottest room in the building. Their enemies are predictable: condenser coils matted with grease and dust, door gaskets torn from cart strikes, hinges sagging until the door seals only at the top, and evaporator fans slowed by ice or worn motors.</p>
<p><strong>Worked example — the warm reach-in.</strong> A line reach-in holds 47°F instead of 36°F. Step 1: Check the condenser before the refrigerant — you find it blanketed in grease felt. Step 2: Reason it through: a coil that cannot reject heat drives head pressure up, capacity down, and run time to 100%. Step 3: Clean the coil, verify the condenser fan, and re-check after the box recovers. In a large share of real calls the story ends there; the refrigerant was never low. Gauges go on <em>after</em> the coil is clean, because readings taken through a matted coil describe the dirt, not the charge.</p>
<div class="callout"><strong>Key idea:</strong> Reach-in diagnosis order: power, condenser cleanliness, fans, gaskets and door seal — then, and only then, the sealed system.</div>
<p>The reach-in's other quiet enemy is placement: a cabinet shoved tight against a hot line or a wall starves its own condenser of room air. Most manufacturers specify clearance around the condensing section; a unit installed with its coil breathing a 120°F corner of the kitchen is being asked to do summer's work in a sauna, and its run time will say so.</p>`
    },
    {
      heading: "Display Cases: Selling and Storing at Once",
      html: `
<p>Display cases add merchandising to the refrigeration problem. Open cases rely on the air curtain from Module 1, fed by fans and honeycomb outlets that must stay unblocked by product and price signage. Doored cases lean on gaskets, closers, and anti-sweat heaters around the frames — heaters that keep condensation off the glass so customers can see in, and whose failure shows up as fogged doors long before it shows up as warm product.</p>
<p>Case lighting is a hidden refrigeration load: every watt of light inside the case is a watt the system must remove, which is why LED retrofits pay back twice — once in lighting energy and once in refrigeration energy. Condensate is the other quiet system: evaporator drain pans, traps, and lines must carry away defrost and condensation water, and a slimed or frozen drain turns into water on the floor and ice where it does not belong. In remote installations the case is only an evaporator and a control or two; the refrigeration muscle lives on a rack elsewhere (Module 5), so a warm case may be a local problem — or the first visible symptom of a rack problem serving forty other cases.</p>
<ul>
<li><strong>Load limits:</strong> every case has a load line; product stacked above it sits outside the air curtain and warms up, no matter how healthy the system is.</li>
<li><strong>Night covers</strong> on open cases cut overnight infiltration — a cheap energy measure stores actually use.</li>
</ul>`
    },
    {
      heading: "Ice Machines: A Refrigeration System with a Second Job",
      html: `
<p>An ice machine is a refrigeration system whose evaporator grows a product and then lets go of it. The classic cuber cycle runs in stages. <strong>Pre-chill:</strong> at start-up the machine chills the water system briefly before the main freeze. <strong>Freeze:</strong> a pump sprays or flows water over a cold evaporator plate; water freezes layer by layer into cubes while the refrigeration runs continuously, and the stage ends when a control — ice thickness probe, slab sensor, or evaporator temperature — decides the ice is thick enough. <strong>Harvest:</strong> hot discharge gas is routed into the evaporator (hot gas harvest), warming the plate just enough that the slab of cubes releases and falls into the bin, often tripping a damper or curtain switch that tells the control the harvest succeeded. Then the cycle repeats until a bin control — thermostat, sensor, or mechanical switch — says the bin is full.</p>
<p>The water side is half the machine: incoming water quality, a filter, a distribution tube that must spray evenly, a sump that is purged and refreshed, and a drain. Scale from hard water insulates the plate, plugs spray holes, and causes the classic complaints — small cubes, long freeze times, and ice that will not release. Most "refrigeration problems" on ice machines are water problems wearing a disguise.</p>
<div class="callout"><strong>Key idea:</strong> Diagnose an ice machine by stage: is it failing to freeze, failing to harvest, or failing to know the bin is full? Each stage has its own short list of suspects, half of them on the water side.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Self-contained = whole system in the cabinet; heat rejected into the room; small, critically charged systems are common.</li>
<li>Capillary tubes meter by fixed restriction — weigh the charge, don't trim by feel.</li>
<li>Reach-ins die of dirt, gaskets, and fans long before they die of refrigerant.</li>
<li>Display cases add air curtains, load lines, lighting load, anti-sweat heat, and condensate drains to the refrigeration problem.</li>
<li>Ice machines cycle pre-chill → freeze → harvest, and water quality decides most of their behavior.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Adding refrigerant to a warm reach-in before cleaning its condenser. You have now overcharged a system whose only fault was dirt, and it will still run hot — with a new problem added.</div>
<div class="callout"><strong>Common mistake:</strong> Treating an ice machine's harvest failure as a refrigeration failure. Slimed water distribution, a scaled plate, or a sticking harvest-assist part stops release far more often than the hot gas valve does.</div>
<p><strong>Certification link:</strong> Light Commercial Refrigeration blueprints cover self-contained equipment and ice machines explicitly; the freeze/harvest sequence is a favorite exam topic.</p>
<p>One documentation habit separates good ice machine techs: record the freeze time, harvest time, and cube appearance in the service note. Those three numbers, trended across visits, announce scale buildup and water problems weeks before the customer notices small cubes — and they give the next tech a baseline instead of a mystery.</p>`
    }
  ],
  keyTerms: [
    { term: "Capillary tube", def: "A long, small-bore fixed restriction used as the metering device on many small self-contained systems." },
    { term: "Critically charged", def: "A system whose correct operation depends on a precise charge weight, with no receiver to absorb error." },
    { term: "Process stub", def: "A short sealed tube on a hermetic system used at the factory for charging; the service access point (or its absence) on many small units." },
    { term: "Load line", def: "The marked maximum stacking height in a display case; product above it sits outside the refrigerated air pattern." },
    { term: "Anti-sweat heater", def: "Electric heat around display-case door frames that prevents condensation from fogging glass and wetting frames." },
    { term: "Night cover", def: "A retractable cover pulled over an open case after hours to cut infiltration losses." },
    { term: "Pre-chill", def: "The brief opening stage of an ice machine cycle that cools the water system before freezing begins." },
    { term: "Freeze cycle", def: "The ice machine stage in which water is frozen layer by layer onto the evaporator plate." },
    { term: "Harvest", def: "The ice machine stage that releases the finished ice from the plate, usually with hot discharge gas." },
    { term: "Hot gas harvest", def: "Routing hot compressor discharge gas through the evaporator to warm the plate so ice releases." },
    { term: "Bin control", def: "The sensor or switch that stops the ice machine when the storage bin is full." },
    { term: "Ice thickness control", def: "The control that ends the freeze cycle when ice reaches a set thickness on the plate." },
    { term: "Scale", def: "Mineral deposits from evaporating water that insulate ice machine plates and plug distribution holes." },
    { term: "Purge (ice machine)", def: "Draining part or all of the sump water during the cycle to carry away concentrated minerals." },
    { term: "Condensate drain", def: "The pan, trap, and line that carry defrost and condensation water out of a case or cabinet." },
    { term: "Unit cooler vs. case coil", def: "Display cases use purpose-built evaporator assemblies with fans and honeycomb air outlets instead of a walk-in style unit cooler." },
    { term: "Honeycomb outlet", def: "A straightening grille that shapes discharge air into the even curtain an open case depends on." },
    { term: "Reach-in", def: "Self-contained or remote upright cabinet with hinged doors, covered here mainly in self-contained form." }
  ],
  video: {
    title: "What's Actually Inside Your Ice Machine?",
    embedUrl: "https://www.youtube.com/embed/BazrF5RQDg4",
    note: "A covers-off walkthrough of a Scotsman ice machine: the refrigeration cycle path, water distribution, the harvest cycle, and the control board and sensors that run the sequence. Use it to put faces on the freeze and harvest stages described in this module.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A cap-tube reach-in's nameplate specifies a charge of 8 ounces of refrigerant. A tech adds “a couple of ounces extra, just to be safe.” Explain what that does to the system's operation and why the receiver-less design makes it worse.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: With no receiver, extra charge has nowhere to park; it backs up into the condenser, raising head pressure, and overfeeds the evaporator. Step 2: The result is low or vanishing superheat and possible liquid returning to the compressor, plus higher energy use. Step 3: On a critically charged system, charge is correct by <strong>weight</strong> — recover and weigh in the nameplate amount rather than trimming by gauge feel.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Put the cuber ice machine sequence in order and state what ends each stage: (a) harvest, (b) pre-chill, (c) freeze, (d) bin-full shutoff.</p>",
      solution: "<p><strong>Answer: b, c, a, then d when the bin fills.</strong> Step 1: Pre-chill briefly cools the water system. Step 2: Freeze runs until the ice thickness control (or equivalent) ends it. Step 3: Harvest runs until the slab falls and the damper/curtain signal confirms release. Step 4: Cycles repeat until the bin control ends production — that control can interrupt between cycles, not mid-harvest.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> An ice machine makes small, cloudy cubes and takes noticeably longer to freeze than it did last year. Water pressure is good. Give the most likely cause and the service that addresses it.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Long freeze + small cubes points to poor heat transfer or uneven water coverage — classic <strong>scale buildup</strong> on the evaporator plate and in the distribution system. Step 2: Scale insulates the plate and plugs spray holes, so ice builds slowly and unevenly. Step 3: The service is a manufacturer-approved descaling and sanitizing of the water system and plate, plus a water filter check or change — before any refrigerant-side work is even considered.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A doored display case's glass is fogged every morning but product temperature is fine. Which component do you check first, and why is this not yet a refrigeration emergency?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Check the <strong>anti-sweat heater</strong> circuit around the door frames — its job is exactly to keep the frame warm enough that room humidity does not condense on it. Step 2: Product temperature is in range, so the refrigeration system is doing its job; the failure is in the visibility/comfort system. Step 3: Fix it promptly anyway — persistent condensation wets frames, corrodes hardware, and eventually attacks gaskets — but do not open the sealed system for a heater fault.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A store stacks sale product above the load line of an open case “just for the weekend,” and that product probes warm on Monday. Explain why the healthy refrigeration system could not protect it.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: An open case protects only the space inside its air curtain; the load line marks the top of that protected zone. Step 2: Product above the line sits in room air, washed by the store's warmth and outside the curtain's reach. Step 3: No adjustment of the refrigeration system extends the curtain; the fix is merchandising discipline — product back below the line — not a colder setpoint.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Why does replacing case lighting with LEDs reduce the refrigeration bill as well as the lighting bill?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: All electrical energy used inside the refrigerated space becomes heat in that space. Step 2: Older lamps might dump several times the heat of an LED making the same light. Step 3: The refrigeration system must remove every one of those heat watts, spending compressor energy to do it — so the LED saves its own watts and then saves again on the cooling that no longer has to happen.</p>"
    }
  ],
  quiz: [
    {
      q: "A self-contained reach-in rejects its condenser heat:",
      choices: ["To a rooftop condenser", "Into the room where the cabinet sits", "Into the walk-in next to it", "To a water loop"],
      answer: 1,
      explanation: "Correct: (b). The condenser is part of the cabinet, so its heat lands in the kitchen air. (a) and (d) describe remote or water-cooled arrangements, not self-contained units. (c) No design shares condenser heat with another refrigerated box — that would warm the neighbor, not cool the room."
    },
    {
      q: "Capillary-tube systems are charged correctly by:",
      choices: ["Charging until the sight glass clears", "Weighing in the nameplate charge", "Charging to a beer-can-cold suction line", "Adding 10% extra for hot days"],
      answer: 1,
      explanation: "Correct: (b). Critically charged, receiver-less systems are weighed. (a) Many cap-tube units have no sight glass, and glass behavior is unreliable on small systems. (c) Line feel cannot measure ounces of charge and invites floodback. (d) Extra charge on a hot day becomes overcharge every other day."
    },
    {
      q: "The first thing to check on a warm reach-in is usually:",
      choices: ["Refrigerant charge with gauges", "Compressor valve efficiency", "The condenser coil's cleanliness and its fan", "TXV adjustment"],
      answer: 2,
      explanation: "Correct: (c). Grease-matted condensers are the most common cause of warm reach-ins, and readings taken through one are meaningless. (a) Gauges come after airflow is proven. (b) Valve tests are late-stage diagnostics. (d) Most reach-ins meter with a cap tube — there is no TXV to adjust."
    },
    {
      q: "In an ice machine, harvest is usually accomplished by:",
      choices: ["Shutting the machine off until the ice melts loose", "Routing hot discharge gas through the evaporator to release the slab", "Flooding the plate with warm water from the sump only", "Reversing the evaporator fan"],
      answer: 1,
      explanation: "Correct: (b). Hot gas warms the plate just enough to release the ice sheet, quickly and repeatedly. (a) Melting loose would take far too long and waste the batch. (c) Some machines use water assist, but the release mechanism in the classic cuber cycle is hot gas. (d) Fan direction has nothing to do with releasing ice from the plate."
    },
    {
      q: "The freeze cycle of a cuber ends when:",
      choices: ["A clock always reaches 30 minutes", "An ice thickness control (or equivalent sensor) signals the ice is thick enough", "The bin is half full", "The compressor's internal overload cycles"],
      answer: 1,
      explanation: "Correct: (b). Freeze ends on ice thickness so cube size stays consistent as conditions change. (a) Fixed time would make thick ice on cold days and thin ice on hot ones. (c) The bin control stops production between cycles, it does not end individual freezes. (d) An overload trip is a fault, not a cycle control."
    },
    {
      q: "Product stacked above a display case's load line warms up because:",
      choices: ["The evaporator shuts off when cases are overfilled", "It sits outside the air curtain's protected zone", "The case lighting turns off", "The refrigerant migrates to the rack"],
      answer: 1,
      explanation: "Correct: (b). The curtain defines the cold space; above the line is room air. (a) No such shutoff exists. (c) Lighting state does not control the curtain's reach. (d) Refrigerant distribution does not change with product stacking — air reach does."
    },
    {
      q: "Most ice machine 'refrigeration' complaints actually trace to:",
      choices: ["Failed compressors", "The water side: scale, filters, and distribution", "Low voltage", "Oversized bins"],
      answer: 1,
      explanation: "Correct: (b). Scale and water-distribution faults mimic refrigeration failures: slow freezes, small cubes, failed harvests. (a) Compressors fail, but far less often than water systems foul. (c) Voltage faults present electrically, not as gradual cube-quality decline. (d) Bin size affects storage, not cube formation."
    },
    {
      q: "Fogged glass on a doored case with good product temperature most likely means a failed:",
      choices: ["TXV", "Anti-sweat heater circuit", "Evaporator fan", "Bin control"],
      answer: 1,
      explanation: "Correct: (b). Anti-sweat heaters keep frames above the dew point; when they die, moisture condenses and fogs the view while refrigeration stays healthy. (a) A TXV fault would move product temperature. (c) A dead evap fan warms product and ices coils. (d) Bin controls belong to ice machines, not display cases."
    }
  ],
  studyGuide: `
<h3>Module 3 — Reach-Ins, Display Cases & Ice Machines: Quick Reference</h3>
<p><strong>Self-contained:</strong> whole system in the cabinet · heat rejected into the room · small charges, often capillary-tube metered and critically charged — weigh the charge in.</p>
<p><strong>Reach-in order of battle:</strong> power → condenser clean? → fans → gaskets/doors → sealed system last.</p>
<p><strong>Display cases:</strong> respect the load line; air curtain or doors do the holding; anti-sweat heaters prevent fog; lighting watts are refrigeration load; drains must run clear.</p>
<p><strong>Ice machine stages:</strong> pre-chill → freeze (ends on ice thickness) → harvest (hot gas releases the slab; damper confirms) → repeat until bin control stops it.</p>
<p><strong>Water side first:</strong> scale, filter, distribution, and purge explain most cube-quality and cycle-time complaints.</p>
<p><strong>Self-check:</strong> Given any symptom in this module, can you name the stage or subsystem it belongs to before naming a part? That sorting is the diagnostic skill.</p>

<p><strong>Numbers to keep:</strong> small self-contained charges are often measured in ounces — when the nameplate speaks in ounces, your scale, not your gauges, is the charging instrument.</p>`
};
