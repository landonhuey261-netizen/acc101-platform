// Plumbing 203 - Module 6: Hydronic Heating: Boilers, Piping & Controls (Stevens PLBG 256; NCCER L4)
module.exports = {
  number: 6,
  slug: "hydronic-heating-boilers-piping-controls",
  title: "Hydronic Heating: Boilers, Piping & Controls",
  estTime: "3–4 hours",
  objectives: [
    "Explain how a hydronic system heats a building: boiler, piping, emitters, and return.",
    "Name the main boiler and system components: burner, heat exchanger, circulator, expansion tank, air separator, and relief valve.",
    "Describe hydronic piping layouts: one-pipe, two-pipe, and primary-secondary.",
    "Explain zoning and controls: thermostats, zone valves, aquastats, and outdoor reset.",
    "Fill, purge, and test a hydronic system in the correct order, and recognize the common faults."
  ],
  sections: [
    {
      heading: "Heat Carried by Water",
      html: `
<p>A <strong>hydronic</strong> heating system heats a building with hot water. A boiler heats water, a circulator pump moves it through piping to heat emitters — radiators, baseboard, or tubing in the floor — the emitters give up heat to the rooms, and the cooled water returns to the boiler to be heated again. The loop is closed: the same water circulates again and again, which is why hydronic systems are quiet, even, and comfortable, with no blown air and no drafts.</p>
<p>Water is a good heat carrier. A gallon of water holds far more heat than the same volume of air, so a small pipe can carry the heat that would need a large duct. That is why hydronic heat feels steady: the emitters stay warm and radiate heat evenly, instead of cycling hot and cold the way forced air does.</p>
<p>The system has two pressures to respect. The <strong>operating pressure</strong> is set by the fill valve and the height of the system — water must be pushed high enough to reach the topmost emitter. The <strong>relief valve</strong> is the safety limit: if pressure climbs too high, it opens and discharges water. Never cap, plug, or defeat a boiler relief valve, for the same reason you never defeat a water heater's T&P valve.</p>
<div class="callout"><strong>Key idea:</strong> A hydronic system is a closed loop: boiler heats, circulator moves, emitters give up heat, water returns. Air in the loop and water that cannot expand are the two things that break it — which is why purging and the expansion tank matter so much.</div>`
    },
    {
      heading: "The Boiler and Its Companions",
      html: `
<p>The <strong>boiler</strong> is the heat source. A burner (gas or oil) or electric elements heat water in a <strong>heat exchanger</strong>, and the hot water leaves through the supply piping. Modern condensing boilers wring extra heat from the exhaust gases and run most efficiently at lower water temperatures — a fact that matters when you set the controls.</p>
<p>Around the boiler sit the components that make the loop work:</p>
<ul>
<li><strong>Circulator pump:</strong> moves water through the loop. It is sized to the system's flow and resistance, and it must be installed with its shaft horizontal and its flow arrow pointing the right way.</li>
<li><strong>Expansion tank:</strong> gives heated water somewhere to expand. Water expands as it heats; without the tank, pressure would climb until the relief valve opened on every cycle. A waterlogged or failed tank is the most common cause of a relief valve that keeps discharging.</li>
<li><strong>Air separator and air vents:</strong> remove air from the loop. Air collects at high points, blocks flow, and makes gurgling noises and cold emitters. Automatic vents at high points and a separator near the boiler keep the loop air-free.</li>
<li><strong>Pressure-reducing (fill) valve:</strong> admits make-up water from the supply and holds the system at its cold-fill pressure. It also needs a backflow preventer, because boiler water must never flow back into the drinking water supply.</li>
<li><strong>Relief valve:</strong> the safety limit on pressure. Its discharge pipe must run to a safe, visible location.</li>
<li><strong>Low-water cutoff:</strong> shuts the burner down if the water level falls too low, so the boiler cannot fire dry.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> The boiler makes the heat, but the companions make the system: the circulator moves it, the expansion tank absorbs it, the vents clear the air, and the relief valve guards the pressure. A fault in any one of them looks like a boiler fault.</div>`
    },
    {
      heading: "Piping Layouts: One-Pipe, Two-Pipe, and Primary-Secondary",
      html: `
<p>How the piping is arranged decides how evenly the building heats.</p>
<p><strong>One-pipe systems</strong> run a single main loop past every emitter. Each emitter takes some hot water from the main and returns cooler water to the same main, so the water gets cooler as it travels around the loop. The last emitter on the loop is always the coolest. One-pipe systems are simple and were common in older buildings, but they are hard to balance and hard to zone.</p>
<p><strong>Two-pipe systems</strong> run a supply main and a separate return main. Each emitter takes hot water from the supply and returns cooled water to the return, so every emitter sees nearly the same supply temperature. Two-pipe systems heat evenly and are easy to zone, which is why they are the standard for new work.</p>
<p><strong>Primary-secondary piping</strong> uses a primary loop through the boiler and separate secondary loops for each zone or load, connected by closely spaced tees. Each loop has its own circulator, and the loops do not fight each other for flow. This is the layout used in modern multi-zone systems and in systems that combine radiators, radiant floors, and an indirect water heater on one boiler.</p>
<p>Whatever the layout, two rules hold. First, air must be able to escape at high points — pitch the piping so air rises to a vent, not into a trap. Second, the piping must allow for expansion: hot pipe grows longer, and hangers and guides must let it move without stressing joints.</p>
<div class="callout"><strong>Key idea:</strong> One-pipe: water cools as it travels, last emitter coldest. Two-pipe: every emitter sees the same supply temperature. Primary-secondary: each zone has its own loop and its own circulator, and the loops do not interfere.</div>`
    },
    {
      heading: "Controls: Who Calls for Heat, and How Much",
      html: `
<p>Controls decide when the boiler fires, how hot the water gets, and which rooms get heat.</p>
<p><strong>Thermostats</strong> call for heat by zone. Each zone has a thermostat that opens a <strong>zone valve</strong> or starts a <strong>zone circulator</strong> when its room is below setpoint, and closes or stops it when the room is satisfied. A zone that never heats may have a failed thermostat, a stuck zone valve, or air in its loop — test the control before blaming the boiler.</p>
<p><strong>Aquastats</strong> control water temperature. A high-limit aquastat shuts the burner down if the water gets too hot — it is a safety limit, not an operating control. An operating aquastat holds the water at its setpoint, turning the burner on and off to maintain it.</p>
<p><strong>Outdoor reset</strong> is the smart version: an outdoor sensor tells the control how cold it is outside, and the control lowers the boiler's water temperature on mild days and raises it on cold days. The building stays comfortable with cooler water most of the season, which saves fuel and is especially valuable for condensing boilers, which are most efficient at lower temperatures.</p>
<p><strong>Indirect water heaters</strong> are a zone on the boiler: a storage tank with a coil inside, heated by boiler water. The boiler gives priority to the water heater when it calls, then returns to space heating. This arrangement gives a home endless-feeling hot water from the same boiler that heats its rooms.</p>
<div class="callout"><strong>Key idea:</strong> Thermostats decide which rooms get heat; aquastats decide how hot the water is; outdoor reset matches the water temperature to the weather. Most "boiler problems" are control or air problems — test the controls and purge the air before condemning the boiler.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Hydronic heat is a closed loop: boiler, circulator, emitters, return — the same water, circulated again and again.</li>
<li>Key components: circulator, expansion tank, air separator and vents, fill valve with backflow protection, relief valve, low-water cutoff.</li>
<li>Layouts: one-pipe (water cools along the loop), two-pipe (even supply temperature), primary-secondary (independent zone loops).</li>
<li>Controls: thermostats and zone valves or circulators by zone, aquastats for water temperature, outdoor reset to match the weather.</li>
<li>Fill, purge air, and test in order — air in the loop is the most common cause of cold emitters and noise.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Adding water to a system with a failed expansion tank. The pressure keeps climbing, the relief valve keeps discharging, and the real fault — a waterlogged tank — goes unrepaired while the system loses water on every cycle.</div>
<div class="callout"><strong>Common mistake:</strong> Chasing a cold radiator with a bigger circulator. A cold emitter is usually air-bound, a stuck zone valve, or a balancing problem — not a pump problem. Purge the air and check the valve before upsizing anything.</div>
<p><strong>Ready-to-work link:</strong> The hydronic boiler fill-and-purge lab at the end of this course puts this module into practice: the fill sequence, the purge order, and the pressure checks, in the exact order they must happen on a real job.</p>`
    }
  ],
  keyTerms: [
    { term: "Hydronic", def: "Heating (or cooling) by circulating hot (or cold) water through piping to heat emitters." },
    { term: "Boiler", def: "The appliance that heats water for a hydronic system." },
    { term: "Circulator", def: "The pump that moves water through a hydronic loop." },
    { term: "Heat emitter", def: "The device that gives up heat to a room — a radiator, baseboard, or radiant floor tubing." },
    { term: "Expansion tank", def: "A tank that absorbs the expansion of water as it heats, keeping system pressure stable." },
    { term: "Air separator", def: "A device that removes air from circulating hydronic water." },
    { term: "Fill valve", def: "A pressure-reducing valve that admits make-up water and holds a hydronic system at its cold-fill pressure." },
    { term: "Relief valve", def: "A safety valve that opens if hydronic system pressure climbs too high." },
    { term: "Low-water cutoff", def: "A control that shuts the burner down if boiler water level falls too low." },
    { term: "Zone", def: "An area of a building heated and controlled independently of other areas." },
    { term: "Zone valve", def: "A valve that opens or closes to send hot water to one zone on demand." },
    { term: "Aquastat", def: "A control that senses water temperature and turns the burner on or off." },
    { term: "Outdoor reset", def: "A control that adjusts boiler water temperature based on outdoor temperature." },
    { term: "Primary-secondary piping", def: "A layout with a primary boiler loop and separate secondary zone loops, each with its own circulator." },
    { term: "Two-pipe system", def: "A hydronic layout with separate supply and return mains, so every emitter sees nearly the same supply temperature." },
    { term: "One-pipe system", def: "A hydronic layout with a single main loop; water cools as it passes each emitter." },
    { term: "Indirect water heater", def: "A storage tank heated by a coil of boiler water, run as a zone off the boiler." },
    { term: "Purging", def: "Forcing air out of a hydronic loop by flushing water through it, zone by zone." }
  ],
  video: {
    title: "Boiler Basics - Your House and Home with KRDO",
    embedUrl: "https://www.youtube.com/embed/pTtSPslhQXQ",
    note: "A plain-language tour of how a boiler heating system works, from the boiler to the radiators. Watch for the loop — boiler, piping, emitters, return — and match each part to this module's component list.",
    more: [
      { title: "Radiator vs Baseboard Boilers | Petro Home Services", url: "https://www.youtube.com/watch?v=kGIUufX6CU8" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A two-story house has one cold radiator on the second floor. All other radiators are hot, the boiler is firing, and the circulator is running. What is the most likely cause, and what do you do first?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: The most likely cause is air trapped in that radiator or its branch — air rises to the high points, and the second floor is the highest point. Step 2: Check the radiator's air vent or bleed valve and bleed the air out until water appears. Step 3: If the radiator stays cold, check its zone valve or balancing valve and confirm the branch is actually open. Step 4: Do not condemn the boiler or upsize the circulator — the rest of the system is heating fine, so the fault is local to that emitter.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A boiler's relief valve discharges a little water on every heating cycle, and the system pressure gauge climbs as the water heats. What is the most likely fault, and how do you confirm it?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The likely fault is a failed or waterlogged expansion tank — with nowhere for the expanding water to go, pressure climbs until the relief valve opens. Step 2: Confirm by checking the tank: tap it (a healthy tank sounds hollow at the top and solid at the bottom) and check its air charge with the system drained of pressure. Step 3: Replace or recharge the tank as the manufacturer directs, then refill and test. Step 4: Do not keep adding water or replacing the relief valve — the valve is doing its job, and the tank is the fault.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A customer with a one-pipe system complains the radiators at the far end of the loop are always cooler than the ones near the boiler. Explain why, and name the layout change that would fix it.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: In a one-pipe system each emitter returns cooler water to the same main, so the water gets progressively cooler around the loop — the last emitters always run coolest. Step 2: Explain that this is a property of the layout, not a fault in the emitters. Step 3: The lasting fix is a two-pipe layout, where every emitter draws from the same supply main and returns to a separate return main, so all emitters see nearly the same supply temperature. Step 4: Short of a re-pipe, balancing valves can even out the loop somewhat, but they cannot change the one-pipe temperature drop.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A zone never heats. The thermostat calls, the boiler fires, and the other zones heat fine. List the three things you check, in order, and what each result means.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Check the zone valve or zone circulator for that zone — is it opening or running when the thermostat calls? If not, the fault is the valve, its actuator, or the circulator. Step 2: Check for air in the zone loop — bleed the high points and listen for gurgling. Step 3: Check the piping and balancing valve for that zone — is the path actually open? Step 4: Only if all three are good do you look at the boiler or the controls that serve all zones, because the other zones prove those are working.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Explain outdoor reset in two or three sentences a customer would understand, and name one system it helps most.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Outdoor reset watches the outside temperature and turns the boiler water down on mild days and up on cold days, so the house gets exactly the heat it needs. Step 2: That saves fuel and keeps rooms comfortable without the boiler running hotter than necessary. Step 3: It helps condensing boilers most, because they are most efficient at the lower water temperatures the reset provides on mild days.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A hydronic system gurgles loudly and several radiators are cold at the top but warm at the bottom. What is the diagnosis, and what is the fix?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: The diagnosis is air in the system — air collects at the tops of radiators, blocking hot water from filling them, and the gurgling is air moving through the piping. Step 2: Purge the system zone by zone, forcing water through each loop until air stops coming out, and bleed each radiator. Step 3: Check the air separator and automatic vents, and confirm the expansion tank is healthy so air is not being drawn in. Step 4: After purging, run the system and confirm every emitter heats fully and quietly.</p>"
    }
  ],
  quiz: [
    {
      q: "In a hydronic system, the circulator's job is to:",
      choices: ["Heat the water", "Move water through the loop", "Remove air from the loop", "Limit the system pressure"],
      answer: 1,
      explanation: "Correct: (b). The circulator is the pump that moves water from the boiler to the emitters and back. (a) Heating is the boiler's job. (c) Air removal is the air separator and vents' job. (d) Pressure is limited by the relief valve."
    },
    {
      q: "A boiler relief valve discharges on every heating cycle and system pressure climbs as the water heats. The most likely fault is:",
      choices: ["A failed or waterlogged expansion tank", "A stuck zone valve", "A dirty burner", "A thermostat set too low"],
      answer: 0,
      explanation: "Correct: (a). With no working expansion tank, heated water has nowhere to expand, so pressure climbs until the relief valve opens. (b) A stuck zone valve affects one zone, not system pressure. (c) A dirty burner affects heat output, not pressure rise. (d) A low thermostat setting reduces firing, it does not raise pressure."
    },
    {
      q: "In a one-pipe hydronic system, the radiators farthest from the boiler are cooler because:",
      choices: ["They are smaller", "Each emitter returns cooler water to the same main, so water temperature drops along the loop", "The circulator cannot reach them", "They have no thermostats"],
      answer: 1,
      explanation: "Correct: (b). In a one-pipe layout the same main carries progressively cooler water past each emitter. (a) Size is not the cause — the water arriving is cooler. (c) The circulator moves water through the whole loop. (d) Thermostats control zones; they do not set the water temperature arriving at an emitter."
    },
    {
      q: "The main advantage of a two-pipe hydronic system over a one-pipe system is that:",
      choices: ["It uses less pipe", "Every emitter sees nearly the same supply temperature", "It needs no circulator", "It has no air problems"],
      answer: 1,
      explanation: "Correct: (b). Separate supply and return mains mean each emitter draws hot water from the supply and returns it to the return. (a) Two-pipe systems use more pipe, not less. (c) Both layouts need a circulator. (d) Both layouts can trap air and need vents."
    },
    {
      q: "Outdoor reset improves efficiency mainly by:",
      choices: ["Running the boiler hotter on mild days", "Lowering boiler water temperature on mild days and raising it on cold days", "Turning off the circulator", "Heating only one zone at a time"],
      answer: 1,
      explanation: "Correct: (b). Matching water temperature to the weather avoids overheating on mild days and saves fuel. (a) is backwards — mild days need cooler water. (c) The circulator must run to move heat. (d) Zoning is a separate control function."
    },
    {
      q: "A radiator is cold at the top and warm at the bottom, and the system gurgles. The diagnosis is:",
      choices: ["A failed boiler", "Air trapped in the radiator and piping", "A broken thermostat", "An undersized boiler"],
      answer: 1,
      explanation: "Correct: (b). Air collects at the top of radiators, blocking hot water, and moving air gurgles in the piping. (a) A failed boiler would leave all emitters cold. (c) A broken thermostat would leave a whole zone cold, not half a radiator. (d) An undersized boiler would underheat the whole building, not trap air in one radiator."
    },
    {
      q: "The expansion tank in a hydronic system exists to:",
      choices: ["Store extra hot water for showers", "Absorb the expansion of water as it heats, keeping pressure stable", "Filter the water", "Pump water to the top floor"],
      answer: 1,
      explanation: "Correct: (b). Water expands as it heats; the tank gives it somewhere to go so pressure does not climb. (a) Domestic hot water storage is an indirect water heater's job. (c) Filtration is not the tank's function. (d) Pumping is the circulator's job."
    },
    {
      q: "A zone never heats while the other zones heat fine and the boiler fires normally. The first thing to check is the:",
      choices: ["Boiler burner", "Zone valve or zone circulator for that zone", "Outdoor sensor", "Main gas valve"],
      answer: 1,
      explanation: "Correct: (b). The other zones prove the boiler and common controls work, so the fault is local to that zone's valve or circulator. (a) A burner fault would affect all zones. (c) The outdoor sensor affects water temperature for all zones. (d) The main gas valve affects the whole boiler."
    }
  ],
  studyGuide: `
<h3>Module 6 — Hydronic Heating: Boilers, Piping & Controls: Quick Reference</h3>
<p><strong>Loop:</strong> Boiler heats → circulator moves → emitters give up heat → water returns. Closed loop, same water again and again.</p>
<p><strong>Components:</strong> Circulator (moves), expansion tank (absorbs growth), air separator + vents (clear air), fill valve + backflow preventer (make-up water), relief valve (pressure safety), low-water cutoff (never fire dry).</p>
<p><strong>Layouts:</strong> One-pipe = water cools along the loop. Two-pipe = even supply temperature. Primary-secondary = independent zone loops with their own circulators.</p>
<p><strong>Controls:</strong> Thermostats + zone valves/circulators by zone. Aquastats set water temperature. Outdoor reset matches water temperature to the weather.</p>
<p><strong>Watch out:</strong> A relief valve discharging every cycle means a failed expansion tank, not a bad valve. A cold radiator top means air — bleed and purge before condemning anything.</p>
<p><strong>Self-check:</strong> A system gurgles and the top of every second-floor radiator is cold. Name the diagnosis, the fix in order, and the component you would check so it does not come back.</p>
`
};
