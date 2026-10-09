// HVAC 101 - Module 9: Tools of the Trade
module.exports = {
  number: 9,
  slug: "tools-of-the-trade",
  title: "Tools of the Trade",
  estTime: "3–4 hours",
  objectives: [
    "Describe the parts of a manifold gauge set and which gauge and hose serve which side of the system.",
    "Explain what vacuum pumps, micron gauges, and recovery machines each do and why none can substitute for another.",
    "Compare leak detection methods and choose a method appropriate to the size and location of a suspected leak.",
    "Select and place temperature instruments correctly for suction, liquid, discharge, and air measurements.",
    "List the supporting tools and safety gear that make refrigerant work legal, accurate, and safe."
  ],
  sections: [
    {
      heading: "The Manifold Gauge Set: Your Two Pressure Windows",
      html: `
<p>The <strong>manifold gauge set</strong> is a valved bridge between the technician and the system. Its low-side (compound) gauge, traditionally blue, reads suction pressure and can read into vacuum. Its high-side gauge, traditionally red, reads discharge and liquid pressures up to much higher values. The blue hose connects to the suction service port, the red hose to the high-side port, and the center yellow hose goes to a refrigerant cylinder, recovery machine, vacuum pump, or nitrogen source as the job requires. The two hand valves decide whether the center hose talks to the system or stays isolated.</p>
<p>Discipline with a manifold is half measurement skill, half contamination control. Purge air from hoses as procedures require before opening a system to a cylinder. Use hoses and gauges rated for the pressures of the refrigerant in front of you — R-410A pressures, 118 to 317 psig in ordinary course examples, exceed what older R-22-era gear was built for. Prefer low-loss fittings that limit the small puff of refrigerant released at disconnect, and keep caps on ports. A manifold left banging around a truck bed with open hose ends collects the moisture and dirt you will later pay to remove.</p>
<p>Digital manifolds and wireless probes add automatic P/T conversion, superheat, and subcooling calculations. They remove arithmetic, not judgment: the refrigerant selected in the menu must match the nameplate, clamps must sit on clean bare metal, and a drifting pressure transducer is still a liar with a bright display.</p>
<div class="callout"><strong>Key idea:</strong> Blue is low, red is high, yellow is the working hose. Every connection is also a contamination decision, so make connections deliberately and keep the set clean and capped.</div>`
    },
    {
      heading: "Vacuum Pumps and Micron Gauges",
      html: `
<p>A <strong>vacuum pump</strong> removes air and moisture vapor from a system before charging. Field pumps are typically two-stage rotary vane machines, because two stages reach the deep vacuum — 500 microns or below — that dehydrating a system requires. Pump health is oil health: vacuum pump oil absorbs moisture as it works, so it is changed regularly and whenever it looks milky or discolored, and a pump that cannot pull a test vessel deep is serviced before it is blamed on a system. Module 10 builds the full evacuation procedure around this machine.</p>
<p>The <strong>micron gauge</strong> is the vacuum's witness. It measures absolute pressure in microns at the system, ideally through the largest, shortest path and as far from the pump as practical, so it reports the system's vacuum rather than the pump's local pull. It is the only common instrument that can distinguish 500 microns from 5,000, and therefore the only one allowed to testify that evacuation succeeded. Wireless and digital versions log the decay test as well.</p>
<p>Supporting vacuum hardware matters as much as the pump: large-diameter vacuum-rated hoses or copper lines, core-removal tools that pull Schrader cores out of the flow path during evacuation, and vacuum-rated valves that let you isolate the pump to run a standing test. Each restriction removed can cut evacuation time dramatically, because gas at deep vacuum moves reluctantly through small passages.</p>
<div class="callout"><strong>Key idea:</strong> The pump makes the vacuum; the micron gauge proves it. A technician with a pump and no micron gauge is guessing, and moisture does not care about guesses.</div>`
    },
    {
      heading: "Recovery Machines and Cylinders",
      html: `
<p>A <strong>recovery machine</strong> is a small compressor-and-condenser package that pumps refrigerant out of a system and into a <strong>recovery cylinder</strong>, as liquid, vapor, or both depending on method and machine. It exists because of the venting ban from Module 3: refrigerant encountered in service is captured, not released. Machines carry ratings for the refrigerant families they can handle, and the work is done with the same manifold, hoses, and respect for pressures as charging — because recovery is charging, in reverse, into a cylinder whose fill must be watched so it is never overfilled.</p>
<p>Two recovery ideas belong to EPA Type I small-appliance work. <strong>Passive (system-dependent) recovery</strong> relies on the appliance's own compressor or on pressure differences to move refrigerant into a non-pressurized container arrangement; <strong>active (self-contained) recovery</strong> uses a recovery machine to pump it. Small appliances such as household refrigerators and window units may be opened only after the required recovery for their category, using access fittings that let you capture what a sealed system otherwise traps. The refrigerant-recovery lab in this course walks the order of operations decision by decision.</p>
<p>Recovered refrigerant handling is part of the tool skill: label cylinders with refrigerant identity, keep different refrigerants unmixed (a mixed cylinder may be unusable for anything but destruction), weigh as you fill, and route cylinders through recycling or reclamation channels your employer uses.</p>
<div class="callout"><strong>Key idea:</strong> Recovery is a measured, labeled, weighed process, not an emptying. The cylinder you fill is inventory with rules, not a bucket.</div>`
    },
    {
      heading: "Leak Detectors and Temperature Instruments",
      html: `
<p>Leaks are found by matching method to scale. <strong>Electronic leak detectors</strong> sniff refrigerant vapor at joints and coils and are the general-purpose first choice; they must be rated for the refrigerant family in the system, kept with fresh sensor and battery, and moved slowly, because a fast pass outruns the sensor's response. <strong>Soap bubble solution</strong> pinpoints a suspected joint precisely: bubbles grow where gas escapes, and it costs almost nothing. <strong>Ultraviolet dye</strong>, added to a system and viewed under a lamp, marks leak sites over time in systems where the manufacturer permits dye. <strong>Nitrogen pressure testing</strong> with a trace approach, at pressures within the equipment's stated limits, proves a repaired system holds before refrigerant is committed.</p>
<p>Temperature instruments complete the core kit. <strong>Clamp thermometers</strong> read line temperatures for superheat and subcooling and must bite clean, bare, straight pipe, insulated from ambient air when precision matters. <strong>Probe and air thermometers</strong> read supply and return air for temperature splits and space conditions. A stem thermometer in a shirt pocket belongs to an earlier trade; the modern standard is a fast, accurate digital instrument whose placement is deliberate: shaded from discharge heat, squarely in the airstream, given seconds to settle.</p>
<p>Every measurement in this program is a tool decision before it is a number. Wrong port, wrong refrigerant setting, clamp over insulation, probe in sunlight — each manufactures a confident error that no later arithmetic can repair.</p>
<div class="callout"><strong>Key idea:</strong> Find leaks electronically, pinpoint them with bubbles, prove repairs with pressure. Measure temperatures with clamps on clean metal and probes placed where the air actually is.</div>`
    },
    {
      heading: "The Supporting Kit, Safety Gear, and a Recap",
      html: `
<p>Around the headline instruments sits the supporting kit: a refrigerant scale accurate enough for critical small charges and honest enough to prove a weigh-in; a tube cutter, reamer, and flaring or swaging tools for copper work; Schrader core tools; a mirror and flashlight for seeing the joint you cannot face; a multimeter for the electrical checks later courses expand; and hand tools in good repair. The scale deserves emphasis: several procedures in this program — critical charging, recovery fill limits, weigh-in charging — are only as truthful as the scale under the cylinder.</p>
<p>Safety gear is a tool category, not an accessory: safety glasses and gloves for every refrigerant connection, hearing and eye protection for shop work, and the habit of treating every cylinder as pressurized and every fan as able to start. Refrigerant-specific safety from Module 3 — ventilation low spaces, keep refrigerant from flames and hot surfaces, never heat cylinders — is exercised through these tools on every job.</p>
<p><strong>Recap:</strong></p>
<ul>
<li>Manifold: blue low, red high, yellow working hose; rated for the refrigerant's pressures; kept clean and capped.</li>
<li>Vacuum: two-stage pump plus micron gauge plus large, short, core-free paths. Only the micron gauge proves 500.</li>
<li>Recovery: machine plus approved, labeled cylinder; passive vs. active methods for small appliances; never overfill, never mix.</li>
<li>Leaks: electronic to find, bubbles to pinpoint, nitrogen to prove. Temperatures: clamps on clean metal, probes in real airstream.</li>
<li>NATE Ready-to-Work names tools and measurements as core topics — this kit, understood rather than merely owned, is that topic.</li>
</ul>`
    }
  ],
  keyTerms: [
    { term: "Manifold gauge set", def: "A valved manifold with low- and high-side gauges and hoses used to connect to and measure a system." },
    { term: "Compound gauge", def: "The low-side gauge, which reads both pressure above atmosphere and vacuum below it." },
    { term: "Service port", def: "The access fitting on a system where hoses connect for measurement, charging, or recovery." },
    { term: "Low-loss fitting", def: "A hose fitting that minimizes refrigerant release when connecting or disconnecting." },
    { term: "Vacuum pump", def: "A pump, typically two-stage rotary vane, that evacuates air and moisture from a system before charging." },
    { term: "Micron gauge", def: "An instrument measuring absolute pressure in microns to verify deep vacuum at the system." },
    { term: "Core removal tool", def: "A tool that extracts Schrader cores through a valve so evacuation is not throttled by the core." },
    { term: "Recovery machine", def: "A self-contained unit that pumps refrigerant from a system into a recovery cylinder." },
    { term: "Recovery cylinder", def: "An approved, refillable cylinder for recovered refrigerant, filled by weight and labeled by contents." },
    { term: "Passive recovery", def: "System-dependent recovery relying on the appliance's own compressor or pressure differences." },
    { term: "Active recovery", def: "Self-contained recovery using a recovery machine to pump refrigerant out." },
    { term: "Electronic leak detector", def: "A sensing instrument that detects refrigerant vapor at leaks; must suit the refrigerant family in use." },
    { term: "Bubble solution", def: "A soap solution brushed on joints that foams at the exact point gas escapes." },
    { term: "Nitrogen pressure test", def: "Pressurizing a system with dry nitrogen within stated limits to prove tightness before charging." },
    { term: "Clamp thermometer", def: "A thermocouple clamp that reads pipe temperature for superheat and subcooling measurements." },
    { term: "Refrigerant scale", def: "A scale that weighs cylinders to control charges, critical small charges, and recovery fill." }
  ],
  video: {
    title: "HVACR: How To Use AC/Refrigeration Gauges (Manifold Gauge Set) Everything You Need To Know!",
    embedUrl: "https://www.youtube.com/embed/cF-4bW8y5Zs",
    note: "A complete manifold gauge walk-through: gauge faces, hose connections, and how the set is used on real equipment. Watch the connection order and how each valve changes which part of the system the center hose sees.",
    more: [
      { title: "How Manifold Gauge Works? | Refrigerant Pressure Gauge | Animation", url: "https://www.youtube.com/watch?v=muL6BcdVB2A" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Identify each manifold part by color and job: blue, red, yellow.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <strong>Blue</strong> — low-side gauge and hose to the suction service port; the gauge is a compound gauge that also reads vacuum. Step 2: <strong>Red</strong> — high-side gauge and hose to the liquid or discharge service port, rated for high pressures. Step 3: <strong>Yellow</strong> — center working hose to a cylinder, recovery machine, vacuum pump, or nitrogen, as the task requires.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A trainee plans to judge evacuation by watching the compound gauge needle approach its maximum vacuum mark. Give two reasons this fails.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Resolution — the entire deep-vacuum region where success and failure differ (500 vs. 5,000 microns) is compressed into an invisible fraction of the dial's vacuum scale. Step 2: Location and meaning — the dial reports pressure at the manifold under the pump's influence, not a verified absolute pressure at the system. Step 3: The micron gauge at the system is the only permitted witness.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Choose the tool and justify: (a) find the general area of a suspected leak along a coil, (b) prove the exact joint after repair, (c) pinpoint one suspect flare joint today.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: (a) <strong>Electronic leak detector</strong>, moved slowly along the coil, rated for the system's refrigerant. Step 2: (b) A <strong>nitrogen pressure test</strong> within the equipment's limits, held and observed, proves tightness before recharging. Step 3: (c) <strong>Bubble solution</strong> on the joint grows bubbles exactly at the escape point.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A window air conditioner (small appliance) must be opened for compressor replacement. Name the two recovery approaches available and what distinguishes them.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <strong>Passive (system-dependent) recovery</strong> uses the appliance's own compressor or pressure differences to move refrigerant into the recovery arrangement. Step 2: <strong>Active (self-contained) recovery</strong> uses a recovery machine to pump the refrigerant out. Step 3: The distinction is the driving force — the appliance itself versus an external machine — and the required recovery level for the category must be met before the system is opened.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A clamp thermometer over the suction line's insulation reads several degrees warm on a sunny day. Explain the error chain and the fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The clamp is measuring the insulation's sun-warmed surface, not the pipe; ambient heat, not refrigerant, sets the reading. Step 2: Superheat computed from it comes out falsely high, suggesting a starved coil that may not exist. Step 3: Fix — clamp on clean bare metal on a straight run, then cover the clamp with insulation so it reads pipe, not weather.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> List four items besides the manifold set that must be on the truck before a recovery-and-recharge job, and the job each does.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <strong>Recovery machine and approved cylinder</strong> — capture the old charge legally, by weight. Step 2: <strong>Refrigerant scale</strong> — control cylinder fill and the new weigh-in. Step 3: <strong>Vacuum pump and micron gauge</strong> — evacuate and prove 500 microns or below before charging. Step 4: <strong>Clamp thermometer</strong> — verify superheat and subcooling after charging. Missing any one turns the job into improvisation.</p>"
    }
  ],
  quiz: [
    {
      q: "The blue hose and gauge of a manifold set connect to:",
      choices: ["The liquid line service port", "The suction service port — the low side", "The recovery cylinder valve", "The discharge line only"],
      answer: 1,
      explanation: "Correct: (b). Blue is the low side: suction pressure, read on the compound gauge. (a) The liquid line is high side, served by red. (c) A cylinder connects to the center yellow hose through the manifold valves. (d) Discharge is high side; blue there would over-range the compound gauge."
    },
    {
      q: "Why must gauge gear be rated for the refrigerant in use?",
      choices: ["Colors differ by refrigerant", "R-410A pressures are far higher than older R-22-era gear was built for", "Ratings are a marketing label only", "Old hoses change the P/T relationship"],
      answer: 1,
      explanation: "Correct: (b). Course anchors show R-410A at 317 psig for 100°F condensing, beyond many legacy gauges and hoses. (a) Hose colors are conventions of side, not refrigerant. (c) Pressure ratings are real safety limits. (d) Equipment cannot change refrigerant physics; it can only fail under it."
    },
    {
      q: "The instrument that can prove a 500-micron evacuation is the:",
      choices: ["Compound gauge", "Micron gauge at the system", "Refrigerant scale", "Clamp thermometer"],
      answer: 1,
      explanation: "Correct: (b). Only a micron gauge resolves absolute pressure at that depth. (a) The compound dial cannot separate 500 from 5,000 microns. (c) A scale weighs refrigerant; it says nothing about vacuum. (d) Temperature tools play no role in vacuum proof."
    },
    {
      q: "Vacuum pump oil that looks milky should be:",
      choices: ["Ignored if the pump still runs", "Changed, because it has absorbed moisture and the pump will not pull deep", "Mixed with fresh oil to dilute it", "Heated on a hot plate"],
      answer: 1,
      explanation: "Correct: (b). Milky oil is moisture-laden; contaminated oil limits ultimate vacuum. (a) Running is not the same as pulling deep. (c) Dilution leaves moisture in the pump. (d) Heating oil is unsafe and not a service procedure."
    },
    {
      q: "Passive recovery differs from active recovery in that passive recovery:",
      choices: ["Vents refrigerant slowly", "Relies on the appliance's own compressor or pressure differences instead of a recovery machine", "Requires no cylinder", "Is used only on chillers"],
      answer: 1,
      explanation: "Correct: (b). System-dependent recovery uses the equipment itself as the pump. (a) Venting is prohibited under either method. (c) Both methods capture into approved containers or cylinders. (d) Passive methods belong to small-appliance work, the opposite end from chillers."
    },
    {
      q: "To pinpoint a suspected flare joint leak today, the best tool is:",
      choices: ["Bubble solution on the joint", "A micron gauge", "A refrigerant scale", "A clamp thermometer"],
      answer: 0,
      explanation: "Correct: (a). Bubbles grow at the exact escape point of a pressurized joint. (b) A micron gauge measures vacuum, not leak location. (c) A scale can prove charge loss over time but cannot locate it. (d) Temperature differences do not reveal a gas leak point."
    },
    {
      q: "A refrigerant scale is essential for all of these EXCEPT:",
      choices: ["Weighing a critical small-appliance charge", "Controlling recovery cylinder fill", "Weigh-in charging a new system", "Measuring superheat"],
      answer: 3,
      explanation: "Correct: (d). Superheat comes from pressure conversion and a line temperature, no scale involved. (a), (b), and (c) are all mass-based procedures where the scale is the controlling instrument."
    },
    {
      q: "A clamp thermometer for superheat should be placed:",
      choices: ["Over the suction line insulation", "On clean bare metal of a straight suction run, shielded from ambient influence", "On the compressor shell", "In direct sunlight for a faster reading"],
      answer: 1,
      explanation: "Correct: (b). The clamp must read the pipe, on bare metal, protected from weather and sun. (a) Insulation surface temperature is not pipe temperature. (c) Shell temperature reflects compressor conditions, not line temperature at the coil outlet. (d) Sunlight adds radiant error, the opposite of accuracy."
    }
  ],
  studyGuide: `
<h3>Module 9 — Tools of the Trade: Quick Reference</h3>
<p><strong>Manifold:</strong> Blue = low side/suction, compound gauge. Red = high side, rated for the refrigerant's pressures (R-410A anchors 118–317 psig). Yellow = center working hose. Keep hoses capped and clean; digital tools still need the right refrigerant selected.</p>
<p><strong>Vacuum team:</strong> Two-stage pump (fresh oil), micron gauge at the system, short large paths, cores removed. Only the micron gauge can testify to 500 microns.</p>
<p><strong>Recovery team:</strong> Recovery machine + approved labeled cylinder + scale. Passive = appliance's own force; active = machine. Small appliances (household refrigerators, window units) are Type I. Never mix refrigerants in a cylinder; never overfill.</p>
<p><strong>Leak team:</strong> Electronic detector to find, bubble solution to pinpoint, nitrogen (within nameplate limits) to prove. Dye where the manufacturer permits.</p>
<p><strong>Temperature team:</strong> Clamps on clean bare straight pipe, insulated after clamping; air probes in the real airstream, out of sun and discharge heat.</p>
<p><strong>Always:</strong> Glasses and gloves for connections. The scale under the cylinder for any weighed procedure.</p>
`
};
