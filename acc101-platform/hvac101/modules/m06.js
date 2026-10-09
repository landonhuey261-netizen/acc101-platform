// HVAC 101 - Module 6: Metering Devices
module.exports = {
  number: 6,
  slug: "metering-devices",
  title: "Metering Devices",
  estTime: "3–4 hours",
  objectives: [
    "State the metering device's two jobs: dropping pressure and controlling refrigerant flow into the evaporator.",
    "Describe how capillary tubes and fixed-orifice pistons meter refrigerant and why their flow depends on pressures.",
    "Explain how a TXV uses bulb pressure, evaporator pressure, and spring pressure to hold a set superheat.",
    "Describe how an electronic expansion valve differs from a TXV in sensing and control.",
    "Match the metering device type to the correct charging method and to its typical failure patterns."
  ],
  sections: [
    {
      heading: "Two Jobs at One Small Point",
      html: `
<p>Every metering device does two jobs at the same tiny location. Job one is the <strong>pressure drop</strong>: warm high-pressure liquid enters, cold low-pressure mixture leaves, and that drop is what makes refrigeration temperature possible. Job two is <strong>flow control</strong>: feeding the evaporator exactly the amount of refrigerant it can boil. Feed too little and the coil starves — most of its surface boils dry early, superheat soars, and capacity falls. Feed too much and liquid survives the coil, superheat collapses, and floodback threatens the compressor. The whole art of charging and much of troubleshooting is keeping feed matched to load.</p>
<p>The devices divide by how they decide flow. <strong>Fixed devices</strong> — capillary tubes and orifice pistons — are calibrated holes. They cannot sense anything; their flow rises and falls with the pressures pushing on them. <strong>Modulating devices</strong> — the thermostatic expansion valve and the electronic expansion valve — sense evaporator outlet conditions and open or close to hold a chosen superheat. That single difference dictates how each system is charged: fixed devices are charged by superheat because superheat is the uncontrolled result of their feeding; TXV and EEV systems are charged by subcooling because the valve holds superheat on its own and charge shows up on the liquid side instead. Module 11 builds the full procedure on this logic.</p>
<div class="callout"><strong>Key idea:</strong> Ask first what device is installed. It decides what the gauges are allowed to tell you and which number you charge to. Guessing the method before identifying the device inverts cause and effect.</div>`
    },
    {
      heading: "Capillary Tubes and Fixed Orifices",
      html: `
<p>A <strong>capillary tube</strong> is a long length of very small-bore copper tubing between the liquid line and the evaporator. Its length and inside diameter create the restriction, and they are chosen for one appliance and one refrigerant charge range. Cap tubes dominate small appliances: household refrigerators, window units, water coolers — the EPA Type I small-appliance world. Because the tube is fixed, these systems hold a <strong>critical charge</strong>: a small, exact amount of refrigerant, often just ounces or a few pounds, where being a little over or under visibly changes performance. There is no receiver to hide mistakes in.</p>
<p>A <strong>fixed orifice</strong>, often called a piston, is a small brass cylinder with a precisely sized hole, installed at the evaporator inlet of many residential A/C systems. Refrigerant flow through it is driven by the pressure difference across it, mainly head pressure pushing. On a hotter day, head pressure rises and pushes more refrigerant through — which conveniently matches the higher load, up to a point. Under low head pressure, feed falls off whether the coil needs it or not.</p>
<p>Both fixed devices share field traits. They allow pressures to equalize during the off cycle, so compressors restart easily against balanced pressure. Both are helpless against changed conditions: a dirty condenser raising head pressure overfeeds, a mild day underfeeds, and a partial blockage at the tiny passage starves the coil while looking, at first glance, like low charge. The screen or strainer protecting the passage is a real service point, and the difference between a restriction and an undercharge — similar suction pressures, different subcooling and superheat patterns — becomes a core diagnostic skill in Module 12.</p>
<div class="callout"><strong>Key idea:</strong> A fixed device is a sized hole, not a decision-maker. Whatever the pressures do, its feeding follows. Charge these systems by superheat, and weigh small-appliance charges precisely.</div>`
    },
    {
      heading: "The Thermostatic Expansion Valve (TXV)",
      html: `
<p>The <strong>TXV</strong> meters refrigerant to hold a nearly constant <strong>superheat at the evaporator outlet</strong>. Its sensing bulb, clamped to the suction line at the coil outlet and insulated, is filled with a charge that develops pressure as the suction line warms. Three pressures fight across its diaphragm. <strong>Bulb pressure</strong> pushes the valve open: warmer outlet, higher superheat, more feed wanted. <strong>Evaporator pressure</strong>, delivered through an internal or external equalizer, pushes it closed. <strong>Spring pressure</strong> also pushes it closed, and the spring setting is what establishes the superheat the valve will hold.</p>
<p>Balance tells the story. Load rises, the coil boils refrigerant off sooner, outlet superheat starts to climb, the bulb warms and its pressure rises, the valve opens wider, and feed catches up until superheat settles back at the set point. Load falls and the sequence reverses. This self-correction across weather and load is why TXVs dominate larger and higher-efficiency systems, and why they need a solid column of liquid at their inlet — the valve cannot meter flash gas predictably, which loops back to the subcooling lessons of Module 5.</p>
<p>Failures masquerade cleverly. A bulb loose on the line or missing its insulation senses warm ambient air, reads false high superheat, and overfeeds. A lost bulb charge leaves only closing forces, and the valve starves the coil shut. A plugged inlet screen starves it too. Debris can hold one open and flood the coil. Before condemning a valve, verify bulb mounting, check for a restriction, and confirm the system actually has liquid at the inlet; most accused TXVs are innocent bystanders to charge, airflow, or mounting problems.</p>
<div class="callout"><strong>Key idea:</strong> A TXV holds superheat; it does not hold charge, pressure, or capacity. If superheat is wrong on a TXV system, suspect the valve's sensing or its liquid supply — then verify charge by subcooling.</div>`
    },
    {
      heading: "Electronic Expansion Valves and What Each Device Controls",
      html: `
<p>An <strong>electronic expansion valve (EEV)</strong> replaces the bulb and diaphragm with sensors and a motor. Temperature and pressure sensors at the evaporator outlet feed a controller that computes superheat continuously and drives a stepper motor to position the valve in small increments. The payoff is precision: the controller can hold lower, steadier superheat, adapt at start-up and during defrost, and coordinate with variable-speed compressors. The cost is complexity: sensors, boards, and wiring join the list of possible failure points, and diagnosis starts with verifying that the sensors are telling the truth.</p>
<p>Now the comparison that organizes this module:</p>
<ul>
<li><strong>Capillary tube:</strong> controls nothing actively; flow follows pressures and tube size. Found on small appliances. Charge is critical and weighed. EPA Type I territory.</li>
<li><strong>Fixed orifice / piston:</strong> controls nothing actively; flow follows head pressure. Residential A/C. Charge by superheat.</li>
<li><strong>TXV:</strong> controls evaporator outlet superheat mechanically via bulb, equalizer, and spring. Charge by subcooling.</li>
<li><strong>EEV:</strong> controls evaporator outlet superheat electronically via sensors and controller. Charge by subcooling, per manufacturer instructions.</li>
</ul>
<p>Notice what none of them control directly: head pressure, suction pressure, or box temperature. A TXV holding perfect superheat on an undercharged system will be wide open and still starve once the liquid runs out — the valve's control range ends where its liquid supply does. Reading a system means knowing which variable is being held and which variables are free to tell you the truth.</p>
<div class="callout"><strong>Key idea:</strong> The variable a device controls goes quiet; the uncontrolled variables carry the diagnostic news. On TXV systems, superheat is held, so charge speaks through subcooling. On fixed systems, nothing is held, so superheat itself is the charge gauge.</div>`
    },
    {
      heading: "Failure Patterns and a Recap",
      html: `
<p><strong>Starving patterns</strong> — high superheat, low capacity, coil frosted only near the inlet — come from undercharge, restrictions at screens or driers, a TXV bulb that lost its charge, or a valve held shut by debris. <strong>Flooding patterns</strong> — low or zero superheat, sweating or frosting suction line back to the compressor — come from overcharge on fixed systems, a loose TXV bulb sensing warm air, or a valve stuck open. The device type tells you which list to work first: on a fixed system, charge quantity moves superheat directly; on a TXV system, the valve hides charge changes until they are large, so mechanical and sensing faults share the stage with charge from the start.</p>
<p>A word on adjusting TXVs: many are adjustable, but adjustment is a last resort after charge, airflow, bulb mounting, and restrictions are verified, and it is done in small increments with settling time between them. More compressors have been lost to impatient valve adjustments chasing a charge problem than to failed valves.</p>
<p><strong>Recap:</strong></p>
<ul>
<li>Metering = pressure drop + flow control. Starving wastes coil; flooding endangers the compressor.</li>
<li>Cap tubes and pistons are fixed holes; flow follows pressures. Small appliances on cap tubes carry critical, weighed charges.</li>
<li>The TXV balances bulb pressure against evaporator pressure plus spring pressure to hold outlet superheat.</li>
<li>The EEV does the same job with sensors, a controller, and a stepper motor.</li>
<li>Charge fixed systems by superheat; charge TXV/EEV systems by subcooling.</li>
</ul>`
    }
  ],
  keyTerms: [
    { term: "Metering device", def: "The component that drops refrigerant pressure and controls flow into the evaporator." },
    { term: "Capillary tube", def: "A long, small-bore tube acting as a fixed restriction, common on small appliances." },
    { term: "Fixed orifice (piston)", def: "A brass insert with a sized hole that meters refrigerant according to the pressure difference across it." },
    { term: "Critical charge", def: "The small, exact refrigerant quantity a fixed-device appliance needs; small errors noticeably change performance." },
    { term: "TXV", def: "Thermostatic expansion valve; a modulating valve that holds evaporator outlet superheat." },
    { term: "Sensing bulb", def: "The TXV's temperature-sensing element clamped and insulated on the suction line at the evaporator outlet." },
    { term: "Equalizer", def: "The passage or line that delivers evaporator pressure to the TXV diaphragm as a closing force." },
    { term: "Spring pressure", def: "The TXV's adjustable closing force that establishes the superheat the valve maintains." },
    { term: "EEV", def: "Electronic expansion valve; a motor-driven valve positioned by a controller using sensor readings." },
    { term: "Stepper motor", def: "The motor that moves an EEV in small counted increments." },
    { term: "Starving", def: "Underfeeding an evaporator, causing high superheat and lost capacity." },
    { term: "Flooding", def: "Overfeeding an evaporator so liquid leaves the coil, causing low superheat and floodback risk." },
    { term: "Strainer screen", def: "A small screen protecting a metering passage from debris; a common restriction point." },
    { term: "Superheat set point", def: "The outlet superheat a TXV or EEV is set to maintain." },
    { term: "Flash gas", def: "Vapor formed by pressure drop; at a TXV inlet it signals inadequate subcooling and disturbs metering." },
    { term: "Modulating device", def: "A metering device that senses conditions and adjusts flow, as opposed to a fixed restriction." }
  ],
  video: {
    title: "How to Adjust a TXV, TEV or TX Valve",
    embedUrl: "https://www.youtube.com/embed/IPMIv-ro3kg",
    note: "An in-depth review of TXV adjustment: why adjustment is rarely needed, the forces acting on the valve, and why a solid liquid supply and a properly strapped, insulated bulb must be verified first. It reinforces this module's warning that adjustment is the last step, not the first.",
    more: [
      { title: "Why and How to Adjust a TXV / TEV", url: "https://www.youtube.com/watch?v=fmYnQu7utIQ" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A household refrigerator uses a capillary tube and its nameplate lists a charge of a few ounces. Why must that charge be weighed carefully rather than topped off by pressure?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The cap tube is a fixed restriction with no receiver and no modulating control, so performance depends directly on the exact quantity in the loop. Step 2: That is a critical charge — a small excess floods, a small shortage starves. Step 3: Pressures alone cannot locate the correct few ounces reliably, so recovery and a weighed recharge is the correct method.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> On a fixed-orifice A/C system the day turns hotter and head pressure rises. What happens to refrigerant feed, and is the change helpful or harmful? Explain.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Flow through a fixed orifice follows the pressure difference across it, so higher head pressure pushes more refrigerant through. Step 2: The hotter day also raises the cooling load, so the increased feed is partly helpful and self-matching. Step 3: The match is rough, not controlled — the same effect overfeeds if head pressure rises from dirt rather than weather.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A TXV's sensing bulb has slipped loose and hangs in warm return air. Predict superheat at the coil outlet and the risk to the compressor, with reasoning.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The bulb now senses warm air instead of the suction line, so bulb pressure reads as if superheat were high. Step 2: The valve opens wider and overfeeds the coil. Step 3: Actual outlet superheat falls toward zero and liquid can leave the coil — floodback risk at the compressor. Step 4: The repair is correct bulb mounting and insulation, not a valve replacement.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> State which charging method belongs to each system and why: (a) piston A/C, (b) TXV heat pump, (c) cap-tube refrigerator.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: (a) <strong>Superheat</strong> — nothing controls it, so it reports charge directly. Step 2: (b) <strong>Subcooling</strong> — the TXV holds superheat steady, so charge appears on the liquid side. Step 3: (c) <strong>Weigh-in</strong> — the charge is small and critical, so the scale is the instrument.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A TXV system is undercharged enough that the liquid line carries flash gas to the valve. Why does the valve lose control even though its mechanism is healthy?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A TXV meters liquid; its sizing and response assume a solid liquid column at the inlet. Step 2: Bubbles in that column pass less mass per opening and make flow erratic, so the valve hunts and superheat wanders. Step 3: Restoring charge — verified by subcooling — restores the valve's working conditions; the valve was never the fault.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> List the three pressures acting on a TXV diaphragm, which side each pushes toward, and which one the technician adjusts to set superheat.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <strong>Bulb pressure</strong> pushes the valve open, rising with suction line temperature. Step 2: <strong>Evaporator pressure</strong> (through the equalizer) pushes it closed. Step 3: <strong>Spring pressure</strong> also pushes it closed. Step 4: The <strong>spring</strong> is the adjustment; increasing spring pressure raises the superheat the valve holds.</p>"
    }
  ],
  quiz: [
    {
      q: "The metering device's two jobs are:",
      choices: ["Compression and condensation", "Pressure drop and flow control into the evaporator", "Filtering and drying", "Storing liquid and pumping vapor"],
      answer: 1,
      explanation: "Correct: (b). It throttles pressure down and feeds the coil the right amount. (a) Those are the compressor's and condenser's processes. (c) That is the filter-drier's work. (d) Storage is a receiver's job and pumping is the compressor's."
    },
    {
      q: "A capillary tube meters refrigerant by:",
      choices: ["A sensing bulb and diaphragm", "Its fixed length and bore, with flow following the pressures across it", "A stepper motor and controller", "A float sensing liquid level"],
      answer: 1,
      explanation: "Correct: (b). A cap tube is a calibrated fixed restriction. (a) describes a TXV. (c) describes an EEV. (d) Float controls exist in some large systems but are not capillary tubes."
    },
    {
      q: "On a TXV, the opening force comes from:",
      choices: ["Spring pressure", "Evaporator pressure in the equalizer", "Bulb pressure from the sensing bulb", "Head pressure on the inlet screen"],
      answer: 2,
      explanation: "Correct: (c). Bulb pressure rises with outlet temperature and pushes the valve open. (a) Spring pressure is a closing force that sets the superheat. (b) Equalizer pressure is also a closing force. (d) Inlet pressure feeds the valve but is not the control force in the diaphragm balance."
    },
    {
      q: "Increasing TXV spring pressure will:",
      choices: ["Lower the superheat the valve holds", "Raise the superheat the valve holds", "Raise head pressure directly", "Convert the valve to a fixed orifice"],
      answer: 1,
      explanation: "Correct: (b). More closing force means the bulb needs a warmer line — higher superheat — to open the valve. (a) reverses the effect. (c) Head pressure is set at the condenser, not by the spring. (d) The valve remains modulating; adjustment only changes its set point."
    },
    {
      q: "A fixed-orifice residential system should be charged by:",
      choices: ["Subcooling", "Superheat", "Head pressure alone", "Weighing to the nearest ten pounds"],
      answer: 1,
      explanation: "Correct: (b). With no device controlling superheat, it reports charge directly. (a) Subcooling is the method for TXV and EEV systems. (c) Head pressure moves with weather and cannot define charge alone. (d) Residential charges are ounces-to-pounds precision, and weigh-in alone ignores operating conditions on larger systems."
    },
    {
      q: "An EEV differs from a TXV because it:",
      choices: ["Needs no liquid at its inlet", "Uses sensors and a controller driving a motor to position the valve", "Meters by tube length", "Cannot hold superheat"],
      answer: 1,
      explanation: "Correct: (b). Electronic sensing and a stepper motor replace the bulb and diaphragm. (a) EEVs need solid liquid just as TXVs do. (c) Tube length describes a capillary tube. (d) Holding superheat is precisely what the EEV's controller does, often more precisely than a TXV."
    },
    {
      q: "A TXV system shows unstable, wandering superheat. A healthy valve could still be the victim if:",
      choices: ["Subcooling is generous and steady", "Flash gas is arriving at the valve inlet because charge is low", "The bulb is strapped and insulated correctly", "Airflow across the coil is correct"],
      answer: 1,
      explanation: "Correct: (b). Bubbles in the feed make flow erratic and the valve hunts; restoring charge fixes the valve's input. (a), (c), and (d) describe correct working conditions that would let a healthy valve hold steady — they are checks to confirm, not causes of hunting."
    },
    {
      q: "Small appliances with capillary tubes are EPA Type I territory and typically contain:",
      choices: ["Over 50 pounds of refrigerant", "A small, critical charge of about 5 pounds or less in appliances such as household refrigerators and window units", "No refrigerant until first service", "Only ammonia"],
      answer: 1,
      explanation: "Correct: (b). Type I covers small appliances such as household refrigerators and window units with small charges, serviced with critical-charge care. (a) Large charges belong to Type II high-pressure work. (c) Appliances are factory-charged. (d) Small appliances use halocarbon refrigerants in this program's scope, not ammonia."
    }
  ],
  studyGuide: `
<h3>Module 6 — Metering Devices: Quick Reference</h3>
<p><strong>Two jobs:</strong> Drop pressure, control flow. Starving = high superheat, lost capacity. Flooding = low superheat, compressor danger.</p>
<p><strong>Fixed devices:</strong> Capillary tube (small appliances, critical weighed charge) and piston/orifice (residential A/C). Flow follows pressures; nothing is sensed. Charge by <strong>superheat</strong> (cap-tube appliances by weight).</p>
<p><strong>TXV:</strong> Holds outlet superheat. Bulb pressure opens; evaporator (equalizer) pressure and spring pressure close. Spring sets the superheat. Needs solid liquid at the inlet. Charge by <strong>subcooling</strong>.</p>
<p><strong>EEV:</strong> Same target as TXV, held electronically with sensors, controller, and stepper motor. Charge by subcooling per manufacturer.</p>
<p><strong>Fault logic:</strong> The controlled variable goes quiet — diagnose with the uncontrolled ones. Loose bulb = overfeed. Lost bulb charge or plugged screen = starve. Adjust a TXV only after charge, airflow, bulb mounting, and restrictions are proven good.</p>
<p><strong>Self-check:</strong> Standing at any system, name its metering device before you connect gauges, then state which value you will charge to and which value will judge the device itself. That ten-second declaration prevents the most common charging error in the trade: trimming the wrong number with great confidence.</p>
`
};
