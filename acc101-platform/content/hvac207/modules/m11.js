// HVAC 207 - Module 11: Commercial Troubleshooting
module.exports = {
  number: 11,
  slug: "commercial-troubleshooting",
  title: "Commercial Troubleshooting",
  estTime: "3–4 hours",
  objectives: [
    "Apply a fixed troubleshooting order to commercial calls: verify the complaint, read the box and product, inspect before instrumenting.",
    "Diagnose the warm-product pattern: separate load problems, airflow problems, and refrigerant-side problems by their signatures.",
    "Diagnose short cycling by finding which control or condition is starting and stopping the machine.",
    "Read ice-up patterns — where the ice is and what shape it takes — as diagnostic evidence.",
    "Weigh food-safety stakes in every decision: when to move product, when to call it, and what to document."
  ],
  sections: [
    {
      heading: "A Method, Not a Mood",
      html: `
<p>Commercial troubleshooting rewards a fixed order of operations, because the cost of guessing is measured in spoiled food. <strong>Step 1: Verify the complaint and the stakes.</strong> What product, at what temperature, since when? Probe the product — air temperature alone has misled more techs than any failed part. <strong>Step 2: Read the box's story.</strong> Door gaskets, loading, traffic, recent deliveries, defrost schedule: half of all warm-box calls are biography, not breakdown (Modules 2 and 6). <strong>Step 3: Eyes before gauges.</strong> Coil condition, fans, ice pattern, condenser dirt, oil stains. <strong>Step 4: Instrument with a hypothesis.</strong> Pressures, superheat, subcooling — taken to test a named suspicion, interpreted against the refrigerant's real P/T relationship. <strong>Step 5: Fix the cause, verify the recovery, document the product outcome.</strong></p>
<p>The order matters because each step is cheap and the later ones are not. Gauges installed first produce numbers that describe a system you have not yet looked at — and numbers without a story invite the most expensive sentence in the trade: "let's try some refrigerant."</p>
<div class="callout"><strong>Key idea:</strong> Complaint → product → biography → eyes → instruments → cause → verification. Skipping steps does not save time; it spends product.</div>
<p>Write the hypothesis on the work order before you test it. A named suspicion — "undercharge, from the addition history" — turns a pressure reading into evidence for or against something, and it leaves a trail the next tech can audit. Unwritten hunches evaporate; written ones compound.</p>`
    },
    {
      heading: "The Warm-Product Pattern",
      html: `
<p>Warm product divides into three families with distinct signatures. <strong>Load problems:</strong> the system is healthy and overwhelmed — propped doors, hot product loaded, gasket gaps, a defrost schedule colliding with deliveries. Signature: the machine runs constantly, pressures look plausible, and the box recovers when the abuse stops (usually overnight). <strong>Airflow problems:</strong> iced or dirty coils, dead fans, blocked returns. Signature: cold coil, warm box — the cold exists but cannot reach the product; suction pressure sags as the starved coil boils less refrigerant. <strong>Refrigerant-side problems:</strong> undercharge from a leak, restriction, weak compressor, overcharge. Signature: abnormal superheat/subcooling patterns (Module 9) that persist after airflow is proven good.</p>
<p><strong>Worked example — R-404A, medium-temp walk-in at 46°F and climbing.</strong> Product probes 45°F. Eyes first: coil is clean, fans run, door seals. Gauges on, hypothesis "undercharge": suction about 66 psig at the evaporator — dew point ≈ 40°F saturation — with the suction line at 68°F. Step 1: Superheat = 68 − 40 = <strong>28°F</strong>, far too high: the coil is starved. Step 2: Check subcooling to separate starvation's causes: head about 198 psig (≈100°F bubble) with a liquid line at 99°F gives subcooling of about <strong>1°F</strong> — there is essentially no liquid reserve, which fits undercharge, not a restriction (a restriction usually stacks liquid up behind it and keeps subcooling healthy while starving the coil). Step 3: The call is now a leak call: Module 10's method, Module 8's records — not a jug and a shrug.</p>
<div class="callout"><strong>Key idea:</strong> Superheat tells you the coil is hungry; subcooling tells you whether the pantry is empty (undercharge) or the door is stuck (restriction).</div>`
    },
    {
      heading: "Short Cycling: Find the Conductor",
      html: `
<p>A compressor that starts and stops every few minutes is being conducted — something is opening and closing its circuit or its load. The suspects, in commercial order: <strong>Low-pressure control behavior</strong> — on a pump-down system, a leaking solenoid or a low charge can let suction pressure bounce across the cut-in/cut-out band; a too-narrow differential setting makes a healthy system chatter. <strong>Thermostat placement and differential</strong> — a stat sensing discharge air from the unit cooler cycles on coil air instead of box air. <strong>Refrigerant shortage</strong> — the classic: the system pulls down to cut-out in moments, pressure recovers through the equalizing leak paths, and it starts again; short cycling on pressure control with low charge is a leak announcing itself rhythmically. <strong>Oversized capacity against a tiny load</strong> in mild weather. <strong>Safety controls</strong> — a high-pressure control tripping on a dirty condenser, resetting, tripping again; or an oil safety on a rack machine (Module 5).</p>
<p>The diagnostic move is always the same: watch a full cycle with a meter and gauges and name the device that opens the circuit at the moment of stopping. "It short cycles" is a symptom report; "the low-pressure control opens after 40 seconds with suction at cut-out and superheat at 30°F" is a diagnosis with an address.</p>
<div class="callout"><strong>Key idea:</strong> Never treat short cycling by widening a differential to hide it. Find which control is conducting, and ask what condition is making it conduct.</div>`
    },
    {
      heading: "Reading Ice: The Coil Keeps a Diary",
      html: `
<p>Ice patterns are evidence with shapes. <strong>Uniform frost that outgrew its defrost</strong> points at the defrost system itself — schedule, termination, a dead heater — Module 6's territory. <strong>Ice at the coil inlet, bare at the outlet</strong> (a partly frosted coil face) fits a starved coil: refrigerant boils away early, and only the cold first passes frost hard. <strong>A solid block, fans entombed</strong> is the end-stage of almost any of these left alone — by then the pattern evidence is destroyed and you must melt, dry, and restart the story. <strong>Ice on the suction line and compressor</strong> runs the other direction: liquid is surviving the whole coil — overfeed, failed TXV, fan failure dropping load, or floodback after defrost without fan delay.</p>
<p>And one pattern that is not a refrigeration fault at all: ice only at the door, frame, and threshold is envelope ice — gasket, closer, and frame-heater territory (Module 2), forming while the coil runs clean and the box holds temperature.</p>
<div class="callout"><strong>Key idea:</strong> Where the ice is tells you which system made it: defrost ice coats the working coil, starvation ice favors the inlet, floodback ice escapes the box, envelope ice hugs the door.</div>
<p>When ice has destroyed its own evidence — the solid-block end stage — the disciplined move is a full melt-out, a dried coil, and a watched restart with your gauges on from the first minute. The pattern that forms <em>first</em> on a clean coil, and where it forms, is the diary entry the block of ice refused to give you.</p>`
    },
    {
      heading: "Food Safety: The Stakes Behind Every Call",
      html: `
<p>Every diagnosis in this module happens with a clock running — the product's clock. Perishable food held at 41°F or below is the standard from Module 1; a box in the danger zone is losing safe life by the hour, and some products (and some health jurisdictions' rules) will require discarding food that has spent too long too warm. Your professional duties on a warm call: tell the customer <em>early and plainly</em> what the product temperatures are and what they mean; recommend moving product to a working box or refrigerated truck before you begin long repairs; document product temperatures and the times on the work order; and never let optimism about a repair quietly extend a product's stay in a warm box. If the fix will take hours and no backup cold space exists, say so in the first fifteen minutes, not the third hour.</p>
<p>This is also why the method in section 1 is ordered the way it is: the fastest safe outcome — product protected, cause found, system verified — is the only outcome the customer is actually buying.</p>
<div class="callout"><strong>Key idea:</strong> You are not hired to fix a machine; you are hired to protect an inventory that happens to depend on a machine. Product decisions come first and get documented.</div>
<p>Remember also the quiet half of food safety: your own thermometer. A tech whose probe is uncalibrated is making discard decisions with a random number generator; check it in ice water (32°F) as a habit, and say its reading's source on the ticket.</p>`
    }
  ],
  keyTerms: [
    { term: "Warm-product call", def: "A service call whose symptom is product temperature above its safe or specified range." },
    { term: "Load problem", def: "A warm box caused by heat load exceeding design — doors, gaskets, hot product — with a healthy refrigeration system." },
    { term: "Airflow problem", def: "Failure of air to move heat between product and coil: iced/dirty coils, dead fans, blocked returns." },
    { term: "Refrigerant-side problem", def: "Charge, restriction, or compressor faults shown by abnormal superheat/subcooling after airflow is proven." },
    { term: "Short cycling", def: "Rapid repeated starting and stopping of a compressor, driven by some control or condition to be identified." },
    { term: "Differential", def: "The gap between a control's cut-in and cut-out settings; too narrow causes chatter, too wide causes temperature swing." },
    { term: "Control conducting", def: "Identifying which specific control opens the circuit at the moment a short-cycling compressor stops." },
    { term: "Ice pattern", def: "The location and shape of frost/ice accumulation, read as diagnostic evidence." },
    { term: "Starved-coil frost", def: "Frost concentrated at the evaporator inlet where refrigerant boils away early in an underfed coil." },
    { term: "Floodback", def: "Liquid refrigerant returning through the suction line to the compressor, shown by suction-line and compressor frosting." },
    { term: "Danger zone", def: "The food temperature range in which bacteria multiply rapidly; refrigerated perishables must be held at 41°F or below to stay out of it." },
    { term: "Product disposition", def: "The decision — keep, move, or discard — made about product exposed to a warm box, documented with temperatures and times." },
    { term: "Verification of recovery", def: "Confirming by product and box temperature trend that a repaired system is actually winning before leaving." },
    { term: "Hypothesis-driven testing", def: "Taking measurements to test a named suspicion rather than collecting numbers and hoping they confess." },
    { term: "Biography check", def: "The load-and-history interview: deliveries, door habits, recent changes — half of warm-box diagnosis." },
    { term: "Restriction signature", def: "Starved coil with subcooling preserved or high — liquid stacking behind a blockage rather than absent altogether." },
    { term: "Undercharge signature", def: "High superheat with low subcooling: the coil is hungry and the liquid reserve is gone." },
    { term: "Envelope ice", def: "Ice at doors, frames, and thresholds from air leakage and failed frame heat — not a coil fault." }
  ],
  video: {
    title: "I Thought It Was Low on Refrigerant... I Was Dead Wrong",
    embedUrl: "https://www.youtube.com/embed/sGZ0AaU7MG0",
    note: "Revisited from Module 1 on purpose: this walk-in call is the complete troubleshooting method in miniature — a confident first theory (low refrigerant), then measurements and observation overturning it. Watch it this time naming each step of the method as it happens.",
    more: [
      { title: "Commercial Refrigeration Troubleshooting | Walk-In Cooler Won't Start!", url: "https://www.youtube.com/watch?v=L60zZzzuc-4" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Assign each warm-box call to its family (load, airflow, or refrigerant-side) and name the confirming observation: (a) box recovers every night, warms every delivery day; (b) coil is a white block, suction pressure low; (c) superheat 28°F, subcooling 1°F, airflow proven good.</p>",
      solution: "<p><strong>Answer:</strong> (a) <strong>Load</strong> — the recovery pattern when abuse stops confirms a healthy system facing a scheduled overload. (b) <strong>Airflow</strong> — the iced coil is both the observation and the mechanism; the cold cannot reach the product. (c) <strong>Refrigerant-side (undercharge)</strong> — the high-superheat/low-subcooling signature with airflow already proven; next step is a leak hunt, not a top-off habit.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> An R-404A freezer's suction line and compressor shell are frosting heavily while the box runs warm and the coil is only partly frosted. Name the condition, and give two causes to check.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The condition is <strong>floodback</strong> — liquid refrigerant surviving the coil and returning to the compressor, frosting the suction path. Step 2: Check for an <strong>overfeeding or failed-open TXV</strong> (or a lost bulb charge/insulation problem driving it open). Step 3: Check the <strong>evaporator fans</strong> — a dead fan drops the coil load so drastically that normal feed becomes overfeed. Compressor damage is the stake: liquid and compressors do not mix.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A pump-down cooler short-cycles: runs 50 seconds, off 90, repeat. Gauges show suction crashing to cut-out on each short run, with high superheat. Give the leading diagnosis and the wrong fix a parts-changer might attempt.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: High superheat plus suction collapsing to cut-out describes a system with almost no refrigerant to pump — a significant <strong>undercharge from a leak</strong>; the low-pressure control is faithfully reporting an empty system. Step 2: The parts-changer's wrong fixes: widening the control differential (hides the rhythm, keeps the leak), or replacing the control itself (it was telling the truth). Step 3: The right path is Module 10: find it, fix it, verify it, record it (Module 8).</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> You arrive at a deli walk-in at 52°F air temperature; the sliced meats probe at 50°F and have been warming since the compressor failed sometime overnight. The owner asks you to “just get it cold again and the food will be fine.” Write your professional response and the two actions you take first.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: State plainly that the standard is 41°F or below, the product has spent hours well above it, and food safety — not the refrigeration repair — now decides what happens to that inventory; as the technician you must not certify the food as fine. Step 2: Action one: move any still-safe product (probed at temperature) to working refrigeration and advise the owner that disposition of the warm product is a health/food-safety decision to make conservatively, documented on the work order with temperatures and times. Step 3: Action two: proceed with diagnosis and repair — with the product question settled first, in writing.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A case ices only heavily frosted at its inlet half after a TXV replacement. What does the pattern suggest about the new valve's feed, and what measurement confirms it?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Inlet-heavy frost with a bare outlet is the starved-coil pattern: refrigerant boils away early because the valve is underfeeding — wrong size, wrong charge in its bulb system, a kinked or poorly mounted sensing bulb, or a partially blocked inlet screen. Step 2: Confirm with <strong>evaporator superheat</strong> — a starved coil shows abnormally high superheat at the outlet. Step 3: Correct the valve/bulb/screen cause rather than compensating with system charge.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A supermarket's frozen-food cases warm every Saturday but the rack pressures read normal all week in your spot checks. Build the two-question interview that cracks this case.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Question one: “What happens here on Saturdays that does not happen on weekdays?” — hunting the schedule: deliveries, restocking volume, door traffic, a Saturday-only defrost overlap. Step 2: Question two: “When exactly on Saturday does it start, and when does it recover?” — timing separates a load event (tracks the activity) from a mechanical decline (tracks nothing but itself). Step 3: Time-patterned symptoms are operational until proven mechanical, and spot checks on Tuesday cannot acquit a Saturday load.</p>"
    }
  ],
  quiz: [
    {
      q: "The correct first measurement on a warm-box call is:",
      choices: ["Head pressure", "Product temperature with a probe", "Compressor amp draw", "Suction line temperature by hand"],
      answer: 1,
      explanation: "Correct: (b). The product is the mission and the legal standard; everything else is ordered after it. (a) and (c) are system measurements that later steps use with a hypothesis. (d) A hand is not an instrument, and suction feel cannot establish the one number the call is about."
    },
    {
      q: "Suction pressure low, coil iced solid, box warm is most consistent with:",
      choices: ["Overcharge", "An airflow failure — the coil cannot absorb heat, so boiling and suction pressure sag", "A faulty thermometer only", "Excessive defrost frequency"],
      answer: 1,
      explanation: "Correct: (b). Ice strangles airflow; a starved-for-heat coil boils little refrigerant and suction falls. (a) Overcharge raises pressures rather than icing a coil this way. (c) The ice is physical and observable, not a display error. (d) Too-frequent defrost warms boxes cyclically but melts ice rather than building it."
    },
    {
      q: "High superheat (28°F) with very low subcooling (1°F) on R-404A indicates:",
      choices: ["A liquid-line restriction", "Undercharge — the coil is hungry and the liquid reserve is gone", "A flooded evaporator", "Normal operation"],
      answer: 1,
      explanation: "Correct: (b). The two gauges of appetite agree: nothing stored, coil starving. (a) A restriction starves the coil too, but stacks liquid behind itself and preserves subcooling. (c) Flooding shows near-zero superheat, the opposite reading. (d) No healthy TXV system runs 1°F of subcooling and 28°F of superheat."
    },
    {
      q: "A restriction and an undercharge both starve a coil. They are separated by:",
      choices: ["Box temperature alone", "Subcooling — preserved or high with a restriction, low with undercharge", "The sound of the compressor", "Defrost frequency"],
      answer: 1,
      explanation: "Correct: (b). Liquid piles up behind a restriction; with undercharge there is no liquid to pile. (a) Both warm the box identically. (c) Compressors do not narrate their faults audibly in any reliable code. (d) Defrost behavior is a separate system's evidence."
    },
    {
      q: "Short cycling diagnosis begins by:",
      choices: ["Replacing the pressure control preventively", "Watching a full cycle to name the specific control that opens the circuit when the compressor stops", "Widening the differential until it stops", "Adding refrigerant until the cycle lengthens"],
      answer: 1,
      explanation: "Correct: (b). The opening control is the address of the fault; its identity directs everything after. (a) The control is usually the messenger, not the criminal. (c) Hiding the rhythm delays the real diagnosis. (d) Charging on a rhythm treats a symptom as a recipe — and overcharges systems whose real story was elsewhere."
    },
    {
      q: "Frost heavy at the coil inlet and bare at the outlet suggests:",
      choices: ["A flooded coil", "A starved coil — refrigerant boils away in the first passes", "Failed defrost heaters", "Normal frost distribution"],
      answer: 1,
      explanation: "Correct: (b). Only the early, still-cold passes can frost hard when feed is short. (a) A flooded coil frosts toward the outlet and down the suction line instead. (c) Heater failure leaves the whole coil's frost standing, evenly. (d) Healthy frost is light and broadly even between defrosts."
    },
    {
      q: "Ice only at the door, frame, and threshold with a clean coil and good temperature indicates:",
      choices: ["A refrigerant leak", "Envelope failure — gasket, closer, or frame heater", "A TXV problem", "The need for more defrosts"],
      answer: 1,
      explanation: "Correct: (b). Location is the diagnosis: door ice is made by leaking room air, not by the coil. (a) Leaks do not deposit ice decoratively at thresholds. (c) TXV faults pattern on the coil and suction line. (d) Defrosts address coil ice; more defrosts would just warm a healthy box."
    },
    {
      q: "On a warm call with product at 50°F for hours, the technician's first duties are:",
      choices: ["Add refrigerant, then discuss", "Communicate the food-safety stakes early, protect or document product disposition, then repair", "Promise the food will be fine if the box recovers fast", "Leave and return when parts arrive"],
      answer: 1,
      explanation: "Correct: (b). Product protection and honest documentation outrank machine work. (a) Charging first spends the product's remaining safe time on a guess. (c) No tech can promise safety for product held above 41°F for hours. (d) Abandoning the call without product advice or a plan fails the customer at the moment of maximum need."
    }
  ],
  studyGuide: `
<h3>Module 11 — Commercial Troubleshooting: Quick Reference</h3>
<p><strong>The order:</strong> complaint → probe the product → box biography → eyes (coil, fans, ice, dirt, oil) → instruments with a hypothesis → fix the cause → verify recovery → document.</p>
<p><strong>Warm box families:</strong> load (recovers when abuse stops) · airflow (cold coil, warm box, sagging suction) · refrigerant-side (SH/SC signatures after airflow is proven).</p>
<div class="formula">Starved coil: high superheat &nbsp;|&nbsp; Empty system: high SH + low SC (leak hunt) &nbsp;|&nbsp; Restriction: high SH + SC preserved</div>
<p><strong>Short cycling:</strong> watch a cycle; name the control that opens; ask what condition conducts it. Never hide rhythm with differential.</p>
<p><strong>Ice reading:</strong> defrost ice coats the coil · starvation ice at the inlet · floodback ice escapes down the suction line · envelope ice hugs the door.</p>
<p><strong>Stakes:</strong> 41°F or below; say it early, move product, write temperatures and times on the ticket.</p>
<p><strong>Self-check:</strong> For any symptom in this module, can you state the family, the confirming measurement, and the first action — in that order? That is professional troubleshooting.</p>
`
};
