// HVAC 207 - Module 12: Preventive Maintenance & Energy
module.exports = {
  number: 12,
  slug: "preventive-maintenance-energy",
  title: "Preventive Maintenance & Energy",
  estTime: "3–4 hours",
  objectives: [
    "Build a commercial PM visit: coils, fans, drains, gaskets, doors, controls, and refrigerant records in one disciplined pass.",
    "Explain the energy physics of a dirty condenser and a leaking gasket in plain terms an owner can act on.",
    "List case-level energy measures: LED lighting, EC fan motors, night covers, door discipline, and anti-sweat control.",
    "Describe how PM data — temperatures, pressures, leak calculations — turns maintenance into early-warning diagnosis.",
    "Structure a PM program for a store: frequencies by equipment, seasonal tasks, and what gets documented every visit."
  ],
  sections: [
    {
      heading: "PM Is Troubleshooting Done Early",
      html: `
<p>Every failure in Module 11 was visible weeks earlier to anyone who looked: the condenser matting over, the gasket starting to tear, the frost pattern shifting, the refrigerant log creeping. <strong>Preventive maintenance</strong> is the discipline of looking on schedule instead of on emergency. A commercial PM visit works a fixed route through the equipment: clean the condenser and evaporator coils; check every fan for noise, play, and amperage sanity; clear and treat condensate drains; inspect and test door gaskets, closers, hinges, and frame heaters; verify box and product temperatures against a calibrated thermometer; glance at ice patterns and defrost behavior; and close the loop on paperwork — refrigerant additions logged, leak rate computed where the system is covered (Module 8), and every abnormality written down as a quoted repair rather than a memory.</p>
<p>The order inside the visit matters for the same reason as in troubleshooting: clean and inspect first, <em>then</em> take performance readings, because readings taken through dirt describe the dirt. A PM that ends with pressures recorded on a clean, sealed, freely breathing system produces numbers that can be trended — and trending is where PM stops being janitorial and becomes diagnostic.</p>
<div class="callout"><strong>Key idea:</strong> PM = clean, inspect, measure, record, recommend — in that order, every visit, so this visit's numbers can be compared with last visit's.</div>`
    },
    {
      heading: "Coils and Air: The Energy Basics",
      html: `
<p>A refrigeration system pays for every degree of unnecessary lift. A <strong>dirty condenser</strong> forces condensing temperature up to reject the same heat through a blanket; the compressor then pumps against a higher pressure on every stroke, drawing more power to move the same refrigerant — and capacity quietly shrinks while the electric meter spins faster. Coil cleaning is therefore not cosmetic: on air-cooled commercial equipment it is frequently the single highest-return maintenance act available, paid back in energy, in capacity on the hottest day, and in compressor life.</p>
<p>The evaporator side mirrors it: a frosted or dirt-filmed coil and tired fans mean less heat absorbed per hour, longer run times, and a box that rides closer to its temperature limit all day. Drain care belongs in the same breath — a slimed pan or plugged drain is tomorrow's ice dam or ceiling leak, and the treatment is a brush, a flush, and a pan treatment where specified, not a prayer.</p>
<div class="callout"><strong>Key idea:</strong> Dirt is a tax collected on every revolution of the compressor. Cleaning coils is buying back capacity and efficiency the owner already paid for once.</div>
<p><strong>Worked framing for an owner:</strong> "Your condenser is wearing a winter coat in July" opens more wallets than a lecture on condensing temperature — but the invoice should still record the before/after head pressure, so the improvement is a measurement, not a metaphor.</p>`
    },
    {
      heading: "The Envelope: Gaskets, Doors, and Small Leaks of Cold",
      html: `
<p>Between PM visits, a walk-in's worst enemy is rarely its compressor; it is its doorway. Gaskets harden, tear at the corners where carts strike, and take a set that leaves a crescent gap no closer can pull shut. The classic field test is low-technology and definitive: close the door on a strip of paper (or a dollar bill) at several points around the frame — where the paper slides out freely, the seal is not sealing. Hinges sag, closers weaken, strike plates wear; each contributes its own small permanent door opening. On freezers, add the frame heater check: a cold frame in a running freezer is a heater circuit that has quit, and ice at the threshold is its resignation letter.</p>
<p>The energy framing is infiltration: every gap admits warm, moist air around the clock — heat the system must remove and water it must freeze onto the coil and defrost away. A gasket is among the cheapest parts on the truck and defends against compressor hours, frost load, and product risk simultaneously. PM that reports gaskets "looked okay" without the paper test has not inspected them; it has glanced at them.</p>
<div class="callout"><strong>Key idea:</strong> Paper test every gasket, every visit. A door that does not seal is a refrigeration problem priced by the hour, all 8,760 of them in a year.</div>
<p>While you are at the door, look down: thresholds and floor seams at the doorway collect meltwater and traffic damage, and a failed threshold heater or a cracked floor joint admits both water and air where the panels meet the slab. Envelope repairs found at floor level are unglamorous and disproportionately valuable — they stop the moisture that frosts coils and the ice that breaks doors.</p>`
    },
    {
      heading: "Case-Level Energy Measures",
      html: `
<p>Beyond keeping equipment clean and sealed, modern commercial refrigeration saves energy at the case. <strong>LED lighting</strong> pays twice (Module 3): fewer watts directly, and fewer watts of heat for the refrigeration to remove. <strong>EC evaporator fan motors</strong> cut fan energy sharply versus shaded-pole motors and dump less motor heat into the box — a double win in the cold space. <strong>Night covers</strong> on open cases and disciplined door use reclaim the overnight infiltration loss. <strong>Anti-sweat heater controls</strong> that sense store humidity run frame heaters only as much as the dew point demands, instead of flat-out around the clock. And at the rack, Module 5's <strong>floating head pressure</strong> and Module 7's disciplined minimum do the heavy lifting centrally, while case controllers hold each case at its true setpoint instead of a safety-padded colder one — every unnecessary degree colder is paid for in compressor work, forever.</p>
<p>The PM tech's role in this landscape is measurement and honesty: verify setpoints are the specified ones (not crept colder over the years), confirm night covers exist and are used, note where incandescent-era lighting and tired motors remain, and put the upgrade list in writing with the reasoning attached. Owners fund what they understand; PM reports are where understanding is built.</p>
<div class="callout"><strong>Key idea:</strong> The cheapest refrigeration energy is the load that never enters the box — light heat, motor heat, infiltration, and setpoints colder than the product needs.</div>`
    },
    {
      heading: "Building the Program: Frequencies and Records",
      html: `
<p>A PM program is a schedule with memory. <strong>Quarterly</strong> is the common backbone for busy food operations: coils, drains, gaskets, doors, temperatures, and logs each quarter catches the grease-and-traffic world's decay rate. <strong>Seasonal</strong> layers ride on top: pre-summer condenser deep-clean and head-pressure control checks before the heat (and a low-ambient control verification before the cold, Module 7); defrost schedule review before the humid months (Module 6); ice machine descaling on the water's schedule, not the calendar's guess (Module 3). <strong>Every visit</strong> produces the same artifacts: the checklist, the readings, the refrigerant entries with leak calculations for covered systems, and the recommended-repairs list with priorities separated into safety/food-risk, efficiency, and watch-items.</p>
<p>Close the course where it began: the technician who runs this program is the reason the store's product stays at temperature, its energy bill stays sane, its EPA file stays clean, and its emergencies become rare enough to be surprising. That is the whole commercial refrigeration trade in one sentence — and it is the standard the final exam will hold you to.</p>
<div class="callout"><strong>Key idea:</strong> A program, not a visit: backbone frequency, seasonal layers, identical records every time. The file you build across visits is the diagnostic instrument no single call can match.</div>`
    }
  ],
  keyTerms: [
    { term: "Preventive maintenance (PM)", def: "Scheduled cleaning, inspection, measurement, and documentation performed to prevent failures rather than respond to them." },
    { term: "Condenser cleaning", def: "Removing dirt and grease from the condenser coil to restore heat rejection, capacity, and efficiency." },
    { term: "Lift", def: "The pressure/temperature difference a compressor must work against; dirt and high head pressure increase it and its energy cost." },
    { term: "Paper test", def: "Closing a door on a paper strip at several frame points; easy pull-out reveals a gasket that is not sealing." },
    { term: "Door closer", def: "The device that pulls a walk-in or case door fully shut; a weak closer is a permanent leak." },
    { term: "EC fan motor", def: "Electronically commutated evaporator fan motor offering large energy savings and less waste heat in the box." },
    { term: "LED retrofit", def: "Replacing case lighting with LEDs, saving lighting energy and the refrigeration energy that removed the old lamps' heat." },
    { term: "Night cover", def: "A cover drawn over an open case after hours to cut infiltration losses." },
    { term: "Anti-sweat control", def: "Humidity-responsive control that runs door frame heaters only as much as conditions require." },
    { term: "Setpoint creep", def: "The gradual drift of case setpoints colder than specified over years of small adjustments, taxing energy continuously." },
    { term: "Trending", def: "Comparing recorded readings across visits to spot deterioration before it becomes failure." },
    { term: "Pan treatment", def: "Products and cleaning used to keep condensate drain pans from growing slime that plugs drains." },
    { term: "Seasonal PM tasks", def: "Calendar-tied work such as pre-summer coil cleaning and pre-winter low-ambient control verification." },
    { term: "Recommended-repairs list", def: "The written, prioritized output of a PM visit separating safety/food-risk items from efficiency and watch items." },
    { term: "Infiltration load", def: "Heat and moisture entering through gaps and openings that the system must continuously remove." },
    { term: "Run-time percentage", def: "The share of time a compressor runs; a creeping rise at constant load is an early-warning trend." },
    { term: "Calibrated thermometer check", def: "Comparing box/product readings against a known-good instrument so decisions rest on true temperatures." },
    { term: "Defrost review", def: "Periodic confirmation that defrost frequency, termination, and scheduling still match the season and the load." }
  ],
  video: {
    title: "Commercial Refrigeration Troubleshooting | Walk-In Cooler Won't Start!",
    embedUrl: "https://www.youtube.com/embed/L60zZzzuc-4",
    note: "A walk-in that will not start — the class of call good PM exists to prevent. As you watch, list which findings a quarterly PM visit would have caught while they were still cheap: that list is this module's argument in one video.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Write the ordered checklist for a quarterly PM visit to a walk-in cooler, in the order you would actually perform it, and justify the position of performance readings in the sequence.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Record as-found box/product temperatures. Step 2: Inspect and clean the condenser coil; check its fan. Step 3: Inspect the evaporator coil and fans; note the frost pattern before touching anything. Step 4: Clear and treat the drain. Step 5: Paper-test gaskets; check closer, hinges, frame heater (freezers). Step 6: Only now take pressures, superheat, and subcooling — because readings taken before cleaning describe dirt, not the system; clean-system numbers are the ones worth trending. Step 7: Log refrigerant data and write the recommended-repairs list.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A PM finds a door gasket that fails the paper test along the whole bottom edge, while temperatures currently hold. Write the two-sentence case for replacing it now that you would put on the report.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Name the mechanism: the gap admits warm moist air continuously — the system pays to remove that heat and to freeze and defrost that moisture every hour of every day, not just when someone remembers the door. Step 2: Name the risk and the bargain: the gasket is one of the cheapest parts on the system, while the compressor hours, frost load, and product-temperature margin it is silently consuming are not — replacing it on this visit is the least expensive version of this repair that will ever be offered.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Over four quarterly visits a rack's logged run-time at comparable load climbs steadily, head pressure creeps up, and the condenser “looks about the same as always.” What is trending telling you, and what is the physical check?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The trend says heat rejection is deteriorating gradually — capacity is being lost to something cumulative, not to a single event. Step 2: The physical check is the condenser itself, up close: coils foul from the inside of the fin pack outward and can look acceptable from a standing glance while their core is matted. Step 3: Deep-clean and re-measure head pressure against the first visit's baseline; trending has done its job when it sends your hands to the right coil before July does.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Rank these case energy measures by the principle “load that never enters the box”: LED lighting, EC fan motors, night covers, colder setpoints as a safety margin. Defend the ranking briefly.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <strong>Night covers</strong> and <strong>LED lighting</strong> lead, because they directly prevent heat/infiltration from entering the refrigerated space at all. Step 2: <strong>EC motors</strong> follow closely — they cut both fan electricity and the motor heat dumped into the box. Step 3: <strong>Colder-than-needed setpoints</strong> rank last — in fact negative: they add load deliberately. The correct safety margin is the specified setpoint held accurately, not an arbitrary colder one bought with compressor work forever.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Why does the PM program schedule a low-ambient control verification in autumn rather than waiting for the first cold snap?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Module 7's failure mode appears exactly when the weather turns — fan-cycling or flooding controls that failed silently all summer announce themselves as starved cases on the first bitter night, which is also the worst night to be learning it. Step 2: An autumn verification — exercising the control, confirming its band against the manufacturer's minimum head pressure — converts a midwinter emergency into a scheduled repair. Step 3: Seasonal PM exists because some failures keep a calendar; the program's job is to meet them before their season opens.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A store owner asks why the PM report lists refrigerant additions for a rack that “isn't leaking — it just uses a little.” Correct the framing using Module 8.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Refrigeration systems do not consume refrigerant; a sealed system that needs additions is leaking by definition, and the log is how we know how fast. Step 2: For a covered appliance (50 lb or more), additions are not a shrug — each one requires a leak rate calculation against the sector trigger (20% per year for commercial refrigeration). Step 3: The PM report's addition history is therefore both a maintenance record and the account's compliance evidence; “a little” is a number, and the number has a threshold.</p>"
    }
  ],
  quiz: [
    {
      q: "Performance readings during a PM visit should be taken:",
      choices: ["First, before touching anything", "After cleaning and inspection, so the numbers describe the system rather than its dirt", "Only if the customer pays extra", "Never — PM is cleaning only"],
      answer: 1,
      explanation: "Correct: (b). Trending only works on clean-system numbers. (a) As-found temperatures matter (and are recorded first), but pressures/SH/SC belong after the coils are clean. (c) Readings are the diagnostic core of PM, not an upsell. (d) A cleaning-only visit throws away the early-warning system PM exists to build."
    },
    {
      q: "A dirty condenser costs money because it:",
      choices: ["Makes the unit louder", "Forces higher condensing pressure — more compressor work for the same cooling, with less capacity", "Consumes refrigerant", "Blocks the drain"],
      answer: 1,
      explanation: "Correct: (b). Lift rises, energy rises, capacity falls — the triple tax of a matted coil. (a) Noise may change but is not the cost mechanism. (c) Dirt does not consume refrigerant; leaks do. (d) Drains belong to the evaporator side's condensate system."
    },
    {
      q: "The paper test checks:",
      choices: ["Thermostat calibration", "Whether a door gasket actually seals around the frame", "Insulation thickness", "Paperwork completeness"],
      answer: 1,
      explanation: "Correct: (b). A strip that slides out freely marks a gap that leaks air around the clock. (a) Calibration needs a reference thermometer. (c) Panel insulation is checked by temperature patterns and inspection, not paper. (d) The paperwork joke writes itself — and is still wrong."
    },
    {
      q: "A freezer door frame found cold and frosty at the threshold during PM indicates:",
      choices: ["Excellent insulation", "A failed frame heater circuit", "Too much defrost", "A weak compressor"],
      answer: 1,
      explanation: "Correct: (b). The frame should be warm to the touch from its heater; cold plus ice is the heater's resignation letter. (a) Insulation does not put ice on the room side of a threshold. (c) Defrost acts on the coil, not the door frame. (d) Compressor health does not chill door frames selectively."
    },
    {
      q: "EC evaporator fan motors save energy twice because they:",
      choices: ["Run only at night", "Use less electricity themselves and dump less motor heat into the refrigerated space", "Eliminate defrost", "Raise suction pressure"],
      answer: 1,
      explanation: "Correct: (b). Fan watts not spent are also heat watts the system never has to remove. (a) They run whenever air movement is needed, day and night. (c) Defrost remains necessary — frost is moisture-driven. (d) Suction pressure is not theirs to set."
    },
    {
      q: "Setpoint creep is an energy problem because:",
      choices: ["Colder setpoints are always illegal", "Every degree colder than the product requires is compressor work bought forever, with no benefit", "Thermostats wear out faster when cold", "Product freezes at exactly 34°F"],
      answer: 1,
      explanation: "Correct: (b). The specified setpoint already contains the safety margin; padding it further purchases nothing but kilowatt-hours. (a) Colder is a quality/energy issue, not an illegality in itself. (c) Wear is not the mechanism. (d) Products freeze at their own freezing points; 34°F is a cooler air temperature, not a universal freezing line."
    },
    {
      q: "The refrigerant log kept during PM matters for compliance because:",
      choices: ["It looks professional", "Covered systems must compute a leak rate at each addition, and records are kept 3 years", "It justifies the PM invoice", "Regulators require it to be framed in the office"],
      answer: 1,
      explanation: "Correct: (b). Module 8's duties run on these records — no log, no rate, no proof. (a) Professional appearance is a side effect. (c) Invoices are justified by work, not by the log itself. (d) No framing requirement exists; retention and accuracy are the requirements."
    },
    {
      q: "A PM program's seasonal layer exists because:",
      choices: ["Technicians prefer variety", "Some failures keep a calendar — low-ambient controls fail into winter, condensers fail into summer — and must be verified before their season", "Manufacturers demand it for warranty photos", "It spreads billing evenly"],
      answer: 1,
      explanation: "Correct: (b). Meeting a failure mode the month before its season converts emergencies into appointments. (a) Variety is not a program design principle. (c) Warranty terms do not drive the seasonal logic. (d) Billing shape follows the work, not the reverse."
    }
  ],
  studyGuide: `
<h3>Module 12 — Preventive Maintenance & Energy: Quick Reference</h3>
<p><strong>Visit order:</strong> as-found temperatures → clean condenser → coil/fans/frost pattern → drains → gaskets (paper test), closers, frame heaters → performance readings on the clean system → refrigerant log + leak calculation → written recommendations.</p>
<p><strong>Energy physics:</strong> dirt raises lift; lift is paid per compressor revolution. Gasket gaps leak heat and moisture 24/7. Case wins: LEDs (double payback), EC motors (double win), night covers, humidity-based anti-sweat control, true setpoints — no creep.</p>
<p><strong>Program shape:</strong> quarterly backbone for food operations + seasonal layers (pre-summer condenser/low-ambient checks before winter, defrost review before humidity, ice-machine descaling on water's schedule).</p>
<p><strong>Records:</strong> same artifacts every visit; trending beats memory; PM file doubles as the EPA evidence file for covered systems.</p>
<p><strong>Self-check:</strong> Walk a store in your head on a PM route and narrate what your hands and eyes do at each stop, and what you write down. If the route is automatic, you have the module — and the course.</p>

<p><strong>The PM promise:</strong> nothing on your route should ever surprise its owner. If it does, the program — not just the machine — gets a note in the file.</p>`
};
