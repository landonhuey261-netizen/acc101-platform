// HVAC 101 - Module 11: Charging Methods Overview
module.exports = {
  number: 11,
  slug: "charging-methods-overview",
  title: "Charging Methods Overview",
  estTime: "3–4 hours",
  objectives: [
    "Choose the correct charging method from the metering device: weigh-in, superheat for fixed orifice, subcooling for TXV.",
    "Perform a weigh-in charge and explain when it is the only acceptable method.",
    "Calculate measured superheat and compare it with a target to decide whether to add or remove refrigerant on a fixed-orifice system.",
    "Calculate subcooling and use it to trim charge on a TXV system.",
    "State the conditions that must be true before any charging verdict: airflow verified, coils clean, system stabilized."
  ],
  sections: [
    {
      heading: "Three Methods, One Decision Rule",
      html: `
<p>Charging is installing the quantity of refrigerant the system was designed to hold, verified by the method that quantity actually controls. The three methods are <strong>weigh-in</strong> (the scale decides), <strong>superheat charging</strong> (for fixed-orifice and capillary systems), and <strong>subcooling charging</strong> (for TXV and EEV systems). The decision rule comes straight from Module 6: a device that controls a variable hides charge changes in that variable. A TXV holds superheat steady across a range of charges, so superheat cannot report charge on a TXV system — but subcooling can, because extra refrigerant stacks up as liquid in the condenser. A fixed orifice controls nothing, so superheat moves directly with charge. The weigh-in ignores operating readings entirely and installs the manufacturer's specified mass.</p>
<p>Every method shares preconditions, and skipping them manufactures wrong charges. Airflow across both coils must be verified correct, because low airflow distorts every pressure and superheat reading. Coils and filters must be clean. The system must run long enough to stabilize — pressures, temperatures, and the refrigerated space all settled — before any number is judged. Indoor and outdoor conditions must be within the range the manufacturer's charging instructions allow; some methods are invalid in cold weather, where weigh-in becomes the professional choice.</p>
<div class="callout"><strong>Key idea:</strong> Identify the device, verify airflow, stabilize, then measure. Charging a system whose airflow is wrong installs a charge that is wrong the moment the airflow is fixed.</div>`
    },
    {
      heading: "Weigh-In: The Scale Is the Instrument",
      html: `
<p>Weigh-in charging installs the mass printed on the equipment nameplate or in the manufacturer's instructions, adjusted for line-set length where the instructions specify an amount per foot. The cylinder sits on a <strong>refrigerant scale</strong>, the starting weight is noted, refrigerant is admitted — as liquid for blends, so composition stays correct — and the transfer stops at the target mass. For a system that was recovered and evacuated, weigh-in restores the design charge in one step without depending on weather, load, or stabilization.</p>
<p>Weigh-in is not merely one option among equals in several situations. It is <strong>the</strong> method for critical-charge small appliances, whose few ounces cannot be located by pressure. It is the method after a full recovery for major repair, when the system's contents start at zero. And it is the fallback when conditions are outside every chart's valid range. Its limit is that it presumes the specified charge is right for the installation: unusual line lengths or matched-component questions send you back to the manufacturer's adjustment tables, and a system with a leak will not keep any charge you weigh in — find and fix leaks first, always.</p>
<p><strong>Worked Example.</strong> A nameplate specifies 4 lb 6 oz and the instructions add a stated amount for extra line length, totaling 4 lb 10 oz for this installation. Step 1: Convert to one unit: 4 lb 10 oz = 74 oz. Step 2: The scale under the cylinder starts at a noted weight; charging stops when the cylinder has lost exactly 74 oz. Step 3: Verify operation afterward with superheat or subcooling readings as a health check, not as an invitation to trim a correct weigh-in by feel.</p>
<div class="callout"><strong>Key idea:</strong> Weigh-in answers how much, not how it is behaving. Behavior checks still follow — they catch the leak, restriction, or airflow fault a perfect charge cannot fix.</div>`
    },
    {
      heading: "Superheat Charging for Fixed-Orifice Systems",
      html: `
<p>On a fixed-orifice or piston system, charge quantity shows itself in evaporator superheat. Too little refrigerant: boiling ends early, the vapor travels far while warming, and superheat runs <strong>high</strong>. Too much: boiling ends late or never, and superheat runs <strong>low</strong>, toward floodback. The method: measure actual superheat (suction pressure converted by the P/T chart, subtracted from suction line temperature), find the <strong>target superheat</strong> from the manufacturer's chart for the day's indoor and outdoor conditions, then add refrigerant to lower superheat toward target, or recover to raise it, in small amounts with stabilization between adjustments.</p>
<p><strong>Worked Example.</strong> An R-410A piston system stabilizes at 118 psig suction (40°F saturation) with a 62°F suction line. Step 1: Actual superheat = 62 − 40 = 22°F. Step 2: The manufacturer's chart for today's conditions gives a target of 12°F. Step 3: Actual is well above target — the coil is starved — so add refrigerant slowly, letting the system settle after each addition. Step 4: Recheck: at a 52°F line with the same saturation, superheat = 12°F, on target; stop. Had the line read 44°F (4°F superheat), the verdict reverses: too much charge, recover toward target before floodback harms the compressor.</p>
<p>Targets move with conditions because the piston's feed moves with head pressure and the coil load moves with indoor humidity and temperature; that is precisely why a chart, not a memorized number, supplies the target. A single superheat value cannot be right for every day, and charging to a fixed superheat from memory across all weather is a classic source of callbacks.</p>
<div class="callout"><strong>Key idea:</strong> High superheat on a fixed system means add; low means remove — always against today's chart target, in small steps, with settling time between them.</div>`
    },
    {
      heading: "Subcooling Charging for TXV Systems",
      html: `
<p>On a TXV system the valve defends superheat, so charge is trimmed by <strong>subcooling</strong>. Too little refrigerant: the condenser cannot maintain a full liquid seal, liquid level in the condenser falls, and subcooling runs <strong>low</strong> — eventually flash gas reaches the valve and even superheat control collapses. Too much: excess liquid stacks in the condenser, and subcooling runs <strong>high</strong>, with head pressure climbing as condensing surface is stolen. The method: measure actual subcooling (condensing saturation temperature from head pressure, minus liquid line temperature), compare with the manufacturer's specified target — commonly printed on the nameplate — then add to raise subcooling or recover to lower it, a little at a time.</p>
<p><strong>Worked Example.</strong> An R-410A TXV system specifies 10°F subcooling. It stabilizes at 317 psig head (100°F saturation) with a 98°F liquid line. Step 1: Actual subcooling = 100 − 98 = 2°F. Step 2: Far below target, with the valve presumably wide open and hungry — add refrigerant in small increments. Step 3: After settling, the liquid line reads 90°F at the same head pressure: subcooling = 10°F, on target; stop and verify superheat sits in its normal defended range as a cross-check. Had the liquid read 80°F (20°F subcooling), the verdict would be overcharge: recover toward target.</p>
<p>Notice the division of labor on a TXV system: subcooling reports charge, superheat reports the valve. If subcooling is on target but superheat is wrong, the problem is the valve, its bulb, or its liquid supply quality — not the amount of refrigerant. That separation is the single most valuable charging idea in this course.</p>
<div class="callout"><strong>Key idea:</strong> On TXV systems, trim charge by subcooling to the nameplate target, then read superheat as the valve's report card, not as a charge gauge.</div>`
    },
    {
      heading: "Charging Craft, Blends, and a Recap",
      html: `
<p>Craft details protect every method. Charge blends as <strong>liquid</strong> so the mixture enters in correct proportions, using a throttling arrangement when liquid must be admitted to the low side so it flashes before reaching the compressor — liquid must never slug the machine. Add in small increments and wait; refrigerant distribution, oil movement, and space temperatures all lag your hand on the valve. Watch the scale even during superheat and subcooling trimming when practical, so you know how much the system actually took — the quantity itself is diagnostic information when a system needs an implausible amount to reach target.</p>
<p>Document what you did: method, target, final readings, ambient conditions, and quantity installed. The next technician — often you, next season — inherits your paperwork instead of your memory. And hold the legal frame from Module 3 throughout: charging happens on evacuated, leak-free systems, with recovered refrigerant handled by the rules, and never by venting.</p>
<p><strong>Recap:</strong></p>
<ul>
<li>Device decides method: weigh-in for critical charges and fresh installs, superheat for fixed orifice, subcooling for TXV/EEV.</li>
<li>Preconditions: airflow proven, coils clean, system stabilized, conditions inside the chart's range.</li>
<li>Fixed system: high superheat means add, low means recover — against today's target chart, never a memorized number.</li>
<li>TXV system: low subcooling means add, high means recover — against the nameplate target; superheat then judges the valve.</li>
<li>Blends go in as liquid; increments stay small; amounts get written down.</li>
</ul>`
    }
  ],
  keyTerms: [
    { term: "Weigh-in charging", def: "Installing the manufacturer's specified refrigerant mass using a scale, adjusted for line length where instructed." },
    { term: "Superheat charging", def: "Trimming charge on a fixed-orifice system by comparing measured superheat with the chart target for conditions." },
    { term: "Subcooling charging", def: "Trimming charge on a TXV system by comparing measured subcooling with the specified target." },
    { term: "Target superheat", def: "The superheat a manufacturer's chart specifies for the current indoor and outdoor conditions on a fixed-orifice system." },
    { term: "Critical charge", def: "A small exact charge, typical of capillary-tube appliances, that must be weighed rather than judged by pressure." },
    { term: "Stabilization", def: "Running a system until pressures, temperatures, and loads settle before judging any charging reading." },
    { term: "Nameplate charge", def: "The refrigerant type and amount printed by the manufacturer for the equipment." },
    { term: "Liquid charging", def: "Admitting refrigerant from the cylinder's liquid phase so blends keep their correct composition." },
    { term: "Flashing at the valve", def: "Throttling liquid refrigerant as it enters the low side so it vaporizes before reaching the compressor." },
    { term: "Overcharge", def: "Excess refrigerant; shows as low superheat on fixed systems and high subcooling with rising head pressure on TXV systems." },
    { term: "Undercharge", def: "Insufficient refrigerant; shows as high superheat on fixed systems and low subcooling on TXV systems." },
    { term: "Charge trim", def: "A small addition or recovery of refrigerant made to move a measured value onto its target." },
    { term: "Matched components", def: "Indoor and outdoor equipment paired by the manufacturer so the specified charge is valid." },
    { term: "Recovery (charging context)", def: "Removing refrigerant with a recovery machine into an approved cylinder when a system must be lightened or emptied." },
    { term: "Line-set adjustment", def: "The manufacturer's specified addition or subtraction of charge for line lengths differing from the rated length." },
    { term: "Charging chart", def: "The manufacturer's table giving target superheat or subcooling for measured operating conditions." }
  ],
  video: {
    title: "Charging R-410A Refrigerant into an Air Conditioner! Pressures, Temps, Tips!",
    embedUrl: "https://www.youtube.com/embed/qpXZhTRPIXc",
    note: "A field charging session on an R-410A air conditioner showing pressures and temperatures being taken together and charge adjusted in small steps. Watch the stabilization waits between adjustments and how each new reading follows the previous change.",
    more: [
      { title: "Practice Checking the Charge of an R-410A Air Conditioner with Subcooling Method! 4 Scenarios!", url: "https://www.youtube.com/watch?v=0zsckt86Who" },
      { title: "R-22 Subcooling Examples! Check The Charge with 4 Different Scenarios!", url: "https://www.youtube.com/watch?v=NUKkwqDNq1E" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> For each system, name the charging method and the reason: (a) cap-tube refrigerator after compressor replacement, (b) piston A/C on a service call, (c) TXV split system on a service call.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: (a) <strong>Weigh-in</strong> — critical charge of a few ounces, starting from empty. Step 2: (b) <strong>Superheat</strong> — the fixed orifice controls nothing, so superheat reports charge. Step 3: (c) <strong>Subcooling</strong> — the TXV holds superheat, so charge appears in the condenser's liquid stack.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A fixed-orifice R-22 system stabilizes at 68.5 psig suction with a 64°F suction line. The chart target for today is 12°F. Compute actual superheat and state the action.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: 68.5 psig is 40°F saturation for R-22. Step 2: Actual superheat = 64 − 40 = <strong>24°F</strong>. Step 3: Actual is double the target — the coil is starved — so <strong>add refrigerant</strong> in small increments, stabilizing and re-measuring until superheat approaches 12°F.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A TXV R-410A system targets 10°F subcooling. It stabilizes at 317 psig with an 82°F liquid line. Compute subcooling and state the action.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: 317 psig is 100°F saturation for R-410A. Step 2: Subcooling = 100 − 82 = <strong>18°F</strong>. Step 3: Above target — excess liquid is stacked in the condenser — so <strong>recover refrigerant</strong> in small amounts until subcooling settles near 10°F.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A TXV system reaches its subcooling target but superheat sits near zero with a sweating suction line. Is the charge wrong? What do you investigate?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Subcooling on target says the charge quantity is right. Step 2: Superheat on a TXV system is the valve's report card — near zero means the valve is overfeeding: investigate bulb mounting and insulation, a bulb sensing warm air, debris holding the valve open, or a failed power element in the closing direction's balance. Step 3: Do not fix a valve problem by removing refrigerant.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A nameplate charge is 5 lb 4 oz and the line-set adjustment adds 6 oz. How many total ounces are weighed in, and how does the scale prove it?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: 5 lb 4 oz = 84 oz; 84 + 6 = <strong>90 oz</strong>. Step 2: Note the cylinder's starting scale weight. Step 3: Charge until the cylinder weighs exactly 90 oz less than the start; the loss from the cylinder equals the gain in the system.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Why is charging attempted only after airflow is verified, even when gauges look convincingly low?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Low airflow lowers suction pressure and distorts superheat in the same direction as low charge on a fixed system. Step 2: Charging into that distortion makes the system overcharged for the day airflow is restored. Step 3: Airflow is verified with filters, coil condition, blower operation, and temperature readings first — then the gauge verdict can be trusted.</p>"
    }
  ],
  quiz: [
    {
      q: "The metering device determines the charging method because:",
      choices: ["Manufacturers prefer variety", "A device that controls a variable hides charge changes in that variable, so charge must be read elsewhere", "Fixed devices use different refrigerant", "TXV systems hold more refrigerant"],
      answer: 1,
      explanation: "Correct: (b). The TXV holds superheat, so charge is read as subcooling; the fixed orifice holds nothing, so superheat reports charge. (a) Preference is not the mechanism. (c) Either device can serve the same refrigerant families. (d) Charge size varies by system, not by the control logic that dictates method."
    },
    {
      q: "Weigh-in is the required method when:",
      choices: ["The weather is mild", "Charging a critical-charge small appliance from empty", "The system has a TXV", "Superheat is easy to measure"],
      answer: 1,
      explanation: "Correct: (b). A few ounces cannot be found by pressure behavior; the scale is the only truthful instrument. (a) Mild weather suits several methods and mandates none. (c) TXV systems are trimmed by subcooling in service. (d) Easy superheat measurement suits fixed-orifice service charging, not critical charges."
    },
    {
      q: "On a fixed-orifice system, superheat well above the chart target means:",
      choices: ["Overcharge — recover refrigerant", "Undercharge — add refrigerant", "A failed compressor", "Correct charge on a hot day"],
      answer: 1,
      explanation: "Correct: (b). Boiling ends early and vapor warms longer when refrigerant is scarce. (a) reverses the relationship; overcharge drives superheat down. (c) Compressor failure shows in its inability to pump, not a clean high-superheat charge pattern. (d) The target already accounts for the day; above-target is above-target."
    },
    {
      q: "On a TXV system, subcooling well below target most likely means:",
      choices: ["Overcharge", "Undercharge — the condenser cannot keep a liquid seal", "The TXV is oversized", "Airflow is too high"],
      answer: 1,
      explanation: "Correct: (b). Too little refrigerant leaves too little liquid stacked in the condenser. (a) Overcharge stacks extra liquid and raises subcooling. (c) Valve sizing does not set the liquid inventory's subcooling at target charge. (d) Excess airflow changes head pressure, not the fundamental direction of this charge indicator."
    },
    {
      q: "An R-410A TXV system at 317 psig head with an 88°F liquid line and a 10°F target has subcooling of:",
      choices: ["2°F — add refrigerant", "12°F — recover a little to reach target", "22°F — recover refrigerant", "10°F — exactly on target"],
      answer: 1,
      explanation: "Correct: (b). 317 psig is 100°F saturation; 100 − 88 = 12°F, slightly above the 10°F target, so a small recovery trims it. (a) uses the wrong saturation temperature. (c) subtracts from a discharge temperature never given. (d) miscomputes the difference."
    },
    {
      q: "Blends must be charged as liquid primarily to:",
      choices: ["Charge faster", "Keep the blend's composition in its labeled proportions", "Raise head pressure", "Avoid using a scale"],
      answer: 1,
      explanation: "Correct: (b). Vapor drawn from a blend cylinder is richer in the eager-boiling components, shifting what the system receives. (a) Speed is a side effect, not the reason, and low-side liquid must still be throttled safely. (c) Head pressure is an outcome, not a goal. (d) Scales remain central to weighed procedures regardless of phase."
    },
    {
      q: "Before judging any charging reading, the system must be:",
      choices: ["Running for exactly one minute", "Stabilized, with airflow verified and coils clean", "Frosted slightly at the coil", "Pumped down and restarted"],
      answer: 1,
      explanation: "Correct: (b). Unstable or airflow-distorted readings charge the wrong quantity with great confidence. (a) One minute is nowhere near stabilization for most systems. (c) Frost is a fault state that corrupts readings. (d) Pump-down is a service procedure for opening systems, not a charging precondition."
    },
    {
      q: "Target superheat on a fixed-orifice system comes from:",
      choices: ["A single memorized value for all weather", "The manufacturer's chart for the current indoor and outdoor conditions", "The refrigerant's nameplate color", "The suction pressure alone"],
      answer: 1,
      explanation: "Correct: (b). Piston feed and coil load both move with conditions, so the target moves too. (a) is the classic shortcut that produces seasonal callbacks. (c) Cylinder color is not data, as Module 3 established. (d) Suction pressure gives saturation temperature, one ingredient, not the target."
    }
  ],
  studyGuide: `
<h3>Module 11 — Charging Methods Overview: Quick Reference</h3>
<p><strong>Decision rule:</strong> What the device controls goes quiet. Fixed device → superheat speaks. TXV/EEV → subcooling speaks. Empty or critical system → the scale speaks.</p>
<div class="formula">Superheat = suction line temp − saturation temp &nbsp;|&nbsp; Subcooling = saturation temp − liquid line temp</div>
<p><strong>Directions:</strong> Fixed system: superheat high = add, low = recover (against today's chart target). TXV system: subcooling low = add, high = recover (against nameplate target). Then superheat judges the TXV itself.</p>
<p><strong>Worked anchors:</strong> R-410A 118 psig = 40°F; line at 52°F = 12°F superheat. R-410A 317 psig = 100°F; liquid at 90°F = 10°F subcooling.</p>
<p><strong>Preconditions, always:</strong> Airflow verified, coils and filters clean, system stabilized, conditions inside the chart's valid range — otherwise weigh in.</p>
<p><strong>Craft:</strong> Blends in as liquid. Small increments, settling waits, quantities written down. Leaks fixed before any charge is installed.</p>
<p><strong>Self-check:</strong> For the next three systems you meet, declare the device, the method, the target source, and the preconditions you verified before a single ounce moves. Charging is a small procedure wrapped in a large discipline, and the discipline — airflow, stabilization, documentation — is what separates a charge that lasts from a callback.</p>
`
};
