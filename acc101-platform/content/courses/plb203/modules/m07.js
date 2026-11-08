// Plumbing 203 - Module 7: Solar & Alternative Heating Systems (NCCER L4)
module.exports = {
  number: 7,
  slug: "solar-alternative-heating-systems",
  title: "Solar & Alternative Heating Systems",
  estTime: "3–4 hours",
  objectives: [
    "Explain how a solar water heating system collects, stores, and delivers heat.",
    "Compare active and passive solar water heating, and flat-plate and evacuated-tube collectors.",
    "Describe freeze protection, overheating protection, and heat-transfer fluids.",
    "Explain how solar thermal connects to a conventional water heater or boiler as backup.",
    "Describe alternative heat sources a plumber may meet: heat-pump water heaters, wood boilers, and geothermal loops."
  ],
  sections: [
    {
      heading: "Heat From the Sun, Delivered by Water",
      html: `
<p>A solar water heating system does one simple thing: it puts water (or a heat-transfer fluid) in the sun, lets the sun heat it, and carries that heat to a storage tank. The sun is the heat source, the collector is the heat exchanger, and the storage tank is the battery that holds the heat until someone turns on a tap.</p>
<p>The system has four parts. The <strong>collector</strong> sits on the roof or a rack, facing the sun, and absorbs solar energy. The <strong>circulation loop</strong> moves fluid between the collector and the tank. The <strong>storage tank</strong> holds the heated water, with a heat exchanger inside if the collector loop uses a separate fluid. And the <strong>backup heater</strong> — a conventional water heater or boiler — tops up the temperature whenever the sun has not provided enough.</p>
<p>Two facts shape every solar thermal job. First, the sun is free but it is not always there: a solar system is sized to cover a share of the load, not all of it, and the backup heater is part of the design, not an admission of failure. Second, the collector loop gets hot — very hot on a summer day — and it can freeze on a winter night. Freeze protection and overheating protection are not extras; they are what keep the system alive.</p>
<div class="callout"><strong>Key idea:</strong> Solar thermal is a team: the sun provides heat when it can, the tank stores it, and a conventional heater covers the rest. A system designed without its backup, its freeze protection, and its overheat protection is a system that will fail.</div>`
    },
    {
      heading: "Collectors: Flat Plate and Evacuated Tube",
      html: `
<p>There are two common collector types, and they differ in how they trap heat.</p>
<p><strong>Flat-plate collectors</strong> are an insulated box with a dark absorber plate under glass. Sunlight passes through the glass, heats the absorber, and the fluid in tubes bonded to the absorber carries the heat away. They are simple, durable, and proven — and they lose more heat to cold air than the other type, because the absorber sits in air inside the box.</p>
<p><strong>Evacuated-tube collectors</strong> use rows of glass tubes, each with a vacuum between its inner and outer walls. The vacuum is an excellent insulator, so the absorber inside stays hot even on a cold day, and the tubes keep working well in cold climates and in diffuse light. They cost more and are more fragile to handle — a broken tube is replaced individually, and the installer must handle them with care.</p>
<p>Collector placement matters as much as collector type. In the northern hemisphere, collectors face south (true south where possible), tilted to catch the sun through the seasons. Shade is the enemy: a collector shaded for part of the day by a chimney or a tree gives up a large share of its output. The installer checks the sun path across the site before choosing the mounting spot, not after.</p>
<div class="callout"><strong>Key idea:</strong> Flat plate = simple, durable, more heat loss in cold air. Evacuated tube = vacuum-insulated, better in cold and cloudy weather, more costly and more fragile. Either type fails if it is shaded or pointed the wrong way.</div>`
    },
    {
      heading: "Active and Passive Systems",
      html: `
<p>Solar water heating systems are divided into <strong>active</strong> systems, which use a pump, and <strong>passive</strong> systems, which use natural circulation.</p>
<p><strong>Active direct systems</strong> pump household water straight through the collector and into the tank. They are simple and efficient, but they can only be used where freezing is not a risk — if the water in the collector freezes, the collector and piping can burst.</p>
<p><strong>Active indirect systems</strong> pump a heat-transfer fluid — usually a propylene glycol mixture — through the collector, and a heat exchanger in the tank transfers the heat to the household water. The glycol does not freeze, so indirect systems work in cold climates, which is why they are the standard choice in Michigan. The trade-off is the heat exchanger: it adds cost and a small efficiency loss, and the glycol must be checked and replaced on schedule because it degrades over time.</p>
<p><strong>Passive thermosiphon systems</strong> have no pump at all. The tank sits above the collector, hot water rises naturally into the tank, and cooler water sinks back to the collector. They are simple and reliable, but they need the tank above the collector — usually on the roof — and they are best suited to warm climates.</p>
<p>The control for an active system is a <strong>differential controller</strong>: it watches the collector temperature and the tank temperature, and runs the pump only when the collector is hotter than the tank by a set margin. A pump that runs when the collector is colder than the tank would cool the tank down — the controller exists to prevent exactly that.</p>
<div class="callout"><strong>Key idea:</strong> Active = pump-driven, controlled, works anywhere with the right fluid. Passive = natural circulation, no pump, tank above the collector. In a freezing climate, the indirect active system with glycol is the standard — direct water through a collector is a burst pipe waiting for January.</div>`
    },
    {
      heading: "Freeze Protection, Overheat Protection, and the Backup Heater",
      html: `
<p>Three protections keep a solar thermal system alive, and the plumber must understand all three.</p>
<p><strong>Freeze protection.</strong> In an indirect system, the glycol mixture in the collector loop resists freezing. In a direct system in a mild climate, freeze protection may rely on recirculation — the controller runs the pump when the collector approaches freezing — or on a drainback design, where the collector loop drains into a tank whenever the pump stops, so no water sits in the collector to freeze. Every method depends on the system being installed and maintained as designed; a drainback system with a sagging pipe that traps water will freeze in that trap.</p>
<p><strong>Overheat protection.</strong> On a hot summer day with no hot water being used, the collector keeps collecting and the tank keeps getting hotter. Systems handle this with a heat dump (sending excess heat to a radiator or a pool), a drainback design, or controls that stop the pump and let the collector stagnate safely. The installer must know which method the system uses and make sure it is in place — a system with no overheat path can damage its seals, its glycol, and its tank.</p>
<p><strong>The backup heater.</strong> A solar system is almost always paired with a conventional water heater or a boiler. The solar tank preheats the water and the backup brings it to temperature. The piping must be arranged so the backup only heats what the sun did not — otherwise the backup fights the solar system and the savings disappear.</p>
<div class="callout"><strong>Key idea:</strong> Freeze protection, overheat protection, and the backup heater are the system, not accessories. Check all three on every solar job, and never leave a system running with one of them missing or defeated.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Solar thermal: collector absorbs sun, loop carries heat, tank stores it, backup tops it up.</li>
<li>Flat-plate collectors are simple and durable; evacuated-tube collectors hold heat better in cold weather.</li>
<li>Active systems use a pump and a differential controller; passive thermosiphon systems use natural circulation with the tank above the collector.</li>
<li>In freezing climates, use an indirect system with a glycol loop and a heat exchanger — never direct water through a collector that can freeze.</li>
<li>Freeze protection, overheat protection, and the backup heater must all be in place and working.</li>
<li>Other systems a plumber meets: heat-pump water heaters, wood boilers, and geothermal loops — all of them still need the plumber's piping, controls, and safety devices.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Installing a direct solar system in a freezing climate. Water in the collector freezes, expands, and bursts the collector and piping. In Michigan, the collector loop must be a freeze-protected indirect loop or a proper drainback design.</div>
<div class="callout"><strong>Common mistake:</strong> Piping the backup heater so it heats the solar tank. The backup should top up water the sun has already warmed — if it reheats the whole solar tank, the solar system never gets credit for its heat and the fuel savings vanish.</div>
<p><strong>Ready-to-work link:</strong> Module 8 moves from heat to the most demanding piping in a building: medical gas and vacuum systems, where the rules are written by a different code and the credential is a separate license of its own.</p>`
    }
  ],
  keyTerms: [
    { term: "Solar thermal", def: "Using the sun's heat, collected by solar collectors, to heat water." },
    { term: "Collector", def: "The roof-mounted device that absorbs sunlight and transfers its heat to a fluid." },
    { term: "Flat-plate collector", def: "A solar collector made of an insulated box with a dark absorber plate under glass." },
    { term: "Evacuated-tube collector", def: "A solar collector using vacuum-insulated glass tubes that retain heat well in cold weather." },
    { term: "Active system", def: "A solar water heating system that uses a pump to circulate fluid between collector and tank." },
    { term: "Passive system", def: "A solar water heating system that circulates by natural convection, with no pump." },
    { term: "Thermosiphon", def: "Natural circulation driven by hot water rising and cool water sinking." },
    { term: "Indirect system", def: "A solar system where a heat-transfer fluid circulates through the collector and a heat exchanger transfers heat to household water." },
    { term: "Direct system", def: "A solar system where household water circulates directly through the collector." },
    { term: "Heat-transfer fluid", def: "The fluid in a solar collector loop, usually a glycol mixture, that carries heat without freezing." },
    { term: "Differential controller", def: "A control that runs the solar pump only when the collector is hotter than the tank." },
    { term: "Drainback", def: "A solar design where the collector loop drains into a tank when the pump stops, so no water sits in the collector to freeze." },
    { term: "Heat dump", def: "A way to shed excess solar heat, such as sending it to a radiator, when the tank is already hot." },
    { term: "Backup heater", def: "A conventional water heater or boiler that tops up solar-heated water to the needed temperature." },
    { term: "Heat-pump water heater", def: "A water heater that uses a heat pump to move heat from the surrounding air into the water." },
    { term: "Geothermal loop", def: "Buried piping that exchanges heat with the ground for a heat-pump heating system." }
  ],
  video: {
    title: "Solar Water Heater",
    embedUrl: "https://www.youtube.com/embed/TTk0gvNbYu8",
    note: "An animated explanation of how a solar water heater works — collector, circulation, and storage. Follow the fluid's path and compare it with the active and passive systems in this module.",
    more: [
      { title: "Apricus Evacuated Tube Solar Hot Water Systems - How it Works", url: "https://www.youtube.com/watch?v=Q6GQrilpvSo" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A customer in Michigan asks for a solar water heating system with household water pumped directly through the roof collectors. What do you recommend instead, and why?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Do not install a direct system in a freezing climate — water in the collector will freeze, expand, and burst the collector and piping. Step 2: Recommend an indirect active system: a glycol heat-transfer fluid circulates through the collectors, and a heat exchanger in the storage tank transfers the heat to household water. Step 3: The glycol loop resists freezing, and a differential controller runs the pump only when the collector is hotter than the tank. Step 4: Note that the glycol must be checked and replaced on schedule, and the system still needs overheat protection and a backup heater.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A solar system's pump runs at night and the storage tank cools down. What is the fault, and what is the fix?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The fault is in the differential controller — it is running the pump when the collector is colder than the tank, so the loop is carrying heat away from the tank instead of into it. Step 2: Check the controller's sensors and settings: the pump should run only when the collector is hotter than the tank by the set margin. Step 3: Replace a failed sensor or controller, verify the pump stops at night, and confirm the tank holds its temperature overnight. Step 4: A check valve in the loop can also prevent reverse thermosiphoning at night.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Compare a flat-plate collector and an evacuated-tube collector for a house in a cold, cloudy climate. Which is the better fit, and what are its trade-offs?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: The evacuated-tube collector is the better fit — its vacuum insulation keeps the absorber hot in cold air and it performs better in diffuse light. Step 2: Trade-offs: it costs more, and the glass tubes are more fragile to handle and install. Step 3: A flat-plate collector is simpler and more durable, but it loses more heat to cold air, so it delivers less in a cold climate. Step 4: Either type must be sited for full sun and a correct south-facing tilt — shading or a wrong orientation hurts both.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A solar system has no overheat protection, and the owners are away for two weeks in July with no hot water being used. What happens, and what should have been installed?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: With no hot water use, the collector keeps collecting and the tank keeps getting hotter — the system overheats. Step 2: Overheating can damage seals, degrade the glycol fluid, and stress the tank. Step 3: The system should have an overheat path: a heat dump to shed excess heat, a drainback design, or controls that stop the pump and let the collector stagnate safely. Step 4: The installer must confirm which method the system uses and that it is in place before leaving the job.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A thermosiphon solar system is proposed for a house where the storage tank would sit in the basement, below the roof collectors. Will it work? Explain.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: No — a thermosiphon system needs the tank above the collector, because it works by hot water rising naturally into the tank and cooler water sinking back to the collector. Step 2: With the tank below the collectors, natural circulation cannot happen; the hot water would stay at the top and the loop would stall. Step 3: For this house, use an active system with a pump and a differential controller instead. Step 4: Thermosiphon systems are best suited to warm climates where the tank can sit on the roof above the collector.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A homeowner's solar-heated water reaches the backup water heater only lukewarm, and the backup heater runs constantly. Name two piping or control errors that could cause this, and how you would check each.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Error one — the backup heater is piped to heat the whole solar storage tank, so it fights the solar system and never lets the tank stratify; check the piping diagram against the design. Step 2: Error two — the differential controller or its sensors are wrong, so the solar pump rarely runs and the collectors never deliver heat; check the controller's readings against the actual collector and tank temperatures. Step 3: Correct the piping so the backup tops up only water the sun has already warmed, and repair or replace the faulty sensor or controller. Step 4: Verify by watching the system through a sunny day: the tank should gain heat from the sun and the backup should run less.</p>"
    }
  ],
  quiz: [
    {
      q: "In a solar water heating system, the storage tank's job is to:",
      choices: ["Pump water to the collectors", "Hold heated water until it is needed", "Filter the water", "Heat the water with electricity"],
      answer: 1,
      explanation: "Correct: (b). The tank stores solar heat until a tap is opened. (a) Pumping is the circulator's job in an active system. (c) Filtration is not the tank's function. (d) Electric heating is the backup heater's job."
    },
    {
      q: "An evacuated-tube collector outperforms a flat-plate collector mainly because:",
      choices: ["It is larger", "Its vacuum insulation keeps the absorber hot in cold air", "It uses no glass", "It faces a different direction"],
      answer: 1,
      explanation: "Correct: (b). The vacuum between the tube walls is an excellent insulator, so the absorber stays hot even in cold weather. (a) Size is not the reason — insulation is. (c) Evacuated tubes are glass. (d) Both types face the sun the same way."
    },
    {
      q: "A differential controller in an active solar system runs the pump only when:",
      choices: ["It is daytime", "The collector is hotter than the storage tank by a set margin", "The tank is empty", "The backup heater is off"],
      answer: 1,
      explanation: "Correct: (b). The controller compares collector and tank temperatures so the pump only moves heat into the tank, never out of it. (a) Daytime alone does not mean the collector is hotter than the tank. (c) Tank level does not control the pump. (d) The backup heater's state is not the controller's input."
    },
    {
      q: "A direct solar system — household water pumped straight through the collectors — is unsafe in Michigan because:",
      choices: ["The water would be too hot", "The water in the collectors can freeze and burst the piping", "The pump would be too large", "The tank would be too small"],
      answer: 1,
      explanation: "Correct: (b). Direct water freezes in a Michigan winter, expands, and bursts collectors and piping; an indirect glycol loop is the standard there. (a) Overheating is a separate protection issue. (c) Pump size is not the problem. (d) Tank size is a sizing question, not a freeze question."
    },
    {
      q: "A thermosiphon solar system requires:",
      choices: ["A large electric pump", "The storage tank above the collector, so hot water rises naturally", "A glycol loop", "A south-facing basement"],
      answer: 1,
      explanation: "Correct: (b). Thermosiphon circulation is driven by hot water rising and cool water sinking, which only works with the tank above the collector. (a) Passive systems have no pump — that is the point. (c) Glycol is used in indirect active systems. (d) The tank's height relative to the collector matters, not the basement."
    },
    {
      q: "A solar pump that runs at night and cools the storage tank indicates a fault in the:",
      choices: ["Collector glass", "Differential controller or its sensors", "Storage tank insulation", "Backup heater"],
      answer: 1,
      explanation: "Correct: (b). The controller should stop the pump when the collector is colder than the tank; a failed sensor or controller runs it anyway and carries heat out of the tank. (a) Collector glass affects heat collection, not night pumping. (c) Insulation affects heat loss, not pump operation. (d) The backup heater heats water; it does not run the solar pump."
    },
    {
      q: "The purpose of overheat protection in a solar thermal system is to:",
      choices: ["Keep the tank cold", "Give excess heat somewhere safe to go when no hot water is being used", "Stop the sun from shining", "Freeze the collector loop"],
      answer: 1,
      explanation: "Correct: (b). On hot days with no use, the collector keeps collecting; a heat dump, drainback, or stagnation control handles the excess. (a) The tank is meant to be hot. (c) Nothing stops the sun. (d) Freezing is the opposite problem, handled by freeze protection."
    },
    {
      q: "In an indirect solar system, the heat exchanger's job is to:",
      choices: ["Pump the glycol", "Transfer heat from the collector loop fluid to the household water without mixing them", "Store the heated water", "Control the pump"],
      answer: 1,
      explanation: "Correct: (b). The exchanger passes heat from the glycol loop to the domestic water while keeping the two fluids separate. (a) Pumping is the circulator's job. (c) Storage is the tank's job. (d) Pump control is the differential controller's job."
    }
  ],
  studyGuide: `
<h3>Module 7 — Solar & Alternative Heating Systems: Quick Reference</h3>
<p><strong>Parts:</strong> Collector → circulation loop → storage tank → backup heater. The sun provides heat when it can; the backup covers the rest.</p>
<p><strong>Collectors:</strong> Flat plate = simple, durable, more heat loss in cold air. Evacuated tube = vacuum-insulated, better in cold and cloudy weather, costlier and more fragile.</p>
<p><strong>Systems:</strong> Active = pump + differential controller (pump runs only when collector is hotter than tank). Passive thermosiphon = tank above collector, no pump. Indirect = glycol loop + heat exchanger — the freezing-climate standard. Direct = water through the collector — warm climates only.</p>
<p><strong>Protections:</strong> Freeze protection (glycol or drainback), overheat protection (heat dump or stagnation control), and a correctly piped backup heater.</p>
<p><strong>Self-check:</strong> A Michigan customer wants solar water heating. Name the system type you would install, the fluid in the collector loop, the controller that runs the pump, and the three protections you must confirm.</p>
`
};
