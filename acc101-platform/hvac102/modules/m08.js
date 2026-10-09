// HVAC 102 - Module 8: Charging in Depth
module.exports = {
  number: 8,
  slug: "charging-in-depth",
  title: "Charging in Depth: Superheat, Subcooling, Glide & Weigh-In",
  estTime: "3–4 hours",
  objectives: [
    "Choose the correct charging method for the metering device: superheat for fixed-orifice, subcooling for TXV, weigh-in where the charge is critical.",
    "Compute superheat and subcooling from gauge pressures and line temperatures using verified P/T relationships.",
    "Explain why airflow and load conditions must be stabilized before any charge judgment is valid.",
    "Handle zeotropic blends correctly: dew point for superheat, bubble point for subcooling, liquid charging, and fractionation awareness.",
    "Charge critically-charged systems by weight and document charge amounts for the service record."
  ],
  sections: [
    {
      heading: "Method Follows Metering Device",
      html: `<p>There is no universal charging method — there is a correct method per system architecture, and using the wrong one manufactures faults:</p><ul><li><strong>Fixed-orifice / cap-tube systems → charge by superheat.</strong> A fixed restriction cannot adapt; the evaporator's fill, and therefore its outlet superheat, is a direct function of charge (and load). Manufacturers publish target-superheat tables or charts indexed by indoor wet-bulb and outdoor dry-bulb temperatures — because with a fixed orifice, the <em>correct</em> superheat changes with conditions. A single 'magic number' superheat is folklore.</li><li><strong>TXV systems → charge by subcooling.</strong> The valve holds superheat at its setting regardless of charge (Module 5), so superheat cannot report charge. What charge changes is how much liquid stacks in the condenser — subcooling. Charge to the manufacturer's subcooling target (nameplate or documentation); if none is available, do not invent one for a real system — use weigh-in and the manufacturer's literature.</li><li><strong>Critically charged systems → weigh-in.</strong> Small hermetic systems (appliances, some packaged equipment) hold so little charge that a few ounces either way swings performance, and they may offer no useful access for live methods. The specification is a weight: recover, evacuate, and weigh in the nameplate charge with a scale.</li></ul><p>Every method shares a precondition stack: correct airflow verified, coils clean, the system run long enough to stabilize, and indoor/outdoor conditions recorded with the readings. Charging a system whose airflow is wrong is engraving a lie into the circuit — when the filter is later replaced, your 'correct' charge becomes an overcharge.</p><div class="callout"><strong>Key idea:</strong> Fixed orifice → superheat (conditions-indexed target). TXV → subcooling (manufacturer target). Critical charge → scale. The metering device chooses the method; you don't.</div>`
    },
    {
      heading: "Superheat and Subcooling: Worked Mastery",
      html: `<p>Both numbers are one subtraction, anchored to a P/T conversion. Drill them until they are reflexes — the module lab is built entirely from these computations.</p><div class="formula">Superheat = suction line temp − saturation temp (from suction pressure)<br>Subcooling = saturation temp (from head pressure) − liquid line temp</div><p><strong>Example A (R-410A, TXV system).</strong> Head pressure 317 psig → saturation ≈ 100°F. Liquid line 88°F. Subcooling = 100 − 88 = <strong>12°F</strong>. Suction 118 psig → saturation ≈ 40°F; suction line 52°F; superheat = 52 − 40 = <strong>12°F</strong> (the valve's business, not the charge report).</p><p><strong>Example B (R-22, fixed orifice).</strong> Suction 68.5 psig → saturation ≈ 40°F; suction line 55°F. Superheat = 55 − 40 = <strong>15°F</strong>. Whether 15°F is correct is decided by the manufacturer's target chart at today's indoor wet-bulb/outdoor dry-bulb — not by habit.</p><p><strong>Example C (R-134a).</strong> Suction 35 psig → saturation ≈ 40°F; suction line 47°F → superheat <strong>12°F</strong>. Liquid side: head 124 psig → saturation ≈ 100°F; liquid line 91°F → subcooling <strong>9°F</strong>.</p><p>Measurement craft decides whether these numbers mean anything: clamp the thermometer probe on clean, straight pipe with insulation over it (an uninsulated probe reads the room, not the refrigerant); take pressures at the same moment as temperatures; let the system stabilize after every charge addition — small additions, then wait. Charging is a titration, not a pour.</p><div class="callout"><strong>Key idea:</strong> Pressure → saturation temperature → subtract the line temperature. Same ritual, both sides of the circuit, every time. The lab grades exactly this.</div>`
    },
    {
      heading: "Weigh-In and Critical Charge",
      html: `<p><strong>Weigh-in</strong> is the reference method: the nameplate charge (plus documented adjustments for line-set length where the manufacturer specifies them) placed on a scale and transferred in full. Its starring roles:</p><ul><li><strong>New installations</strong> where factory charge covers a specified line length and additional charge per extra foot is documented — weigh the addition, record it.</li><li><strong>Critically charged appliances</strong> — after repair, the only honest charge is the specified weight into a properly evacuated system.</li><li><strong>Unknown-charge recoveries</strong> — when a system's charge state is untrustworthy (unknown leak history, mixed service), recover everything, evacuate to ≤500 microns with a passing decay test (Module 7), and weigh in the known-correct amount. You have converted an argument into a fact.</li></ul><p>Technique: charge in the <strong>liquid</strong> phase through the liquid side where the procedure calls for it (and always for blends — next section), throttle carefully into a running system only by the methods the equipment manufacturer allows (never slam liquid into a compressor's suction — liquid belongs in the evaporator's terms, metered), and stop at the scale's number, not at the needle's mood. Record the final total charge on the service documentation: the next technician's leak-rate arithmetic (Module 10) starts from your number.</p><p>Weigh-in's limit is honesty about its premise: it presumes the <em>specified</em> charge is right for the <em>installed</em> system. Line length beyond documentation, mismatched indoor/outdoor components, or an unrecorded earlier modification can make the nameplate the wrong answer — which is why even weighed systems get verified by superheat/subcooling behavior afterward.</p><div class="callout"><strong>Key idea:</strong> The scale ends arguments about how much went in. The gauges afterwards confirm the system agrees with the paperwork.</div>`
    },
    {
      heading: "Glide and Zeotropic Blends: Bubble, Dew, Fractionation",
      html: `<p>Pure refrigerants and near-azeotropic blends change phase at one temperature for a given pressure. <strong>Zeotropic blends</strong> — mixtures of refrigerants with different boiling points, such as the 400-series classics — change phase across a temperature <em>range</em>: the <strong>temperature glide</strong>. At a given pressure the blend has two saturation landmarks:</p><ul><li><strong>Bubble point</strong> — the temperature at which liquid first begins to boil (the liquid-side saturation temperature).</li><li><strong>Dew point</strong> — the temperature at which vapor first begins to condense (the vapor-side saturation temperature); dew is always the warmer of the two at the same pressure.</li></ul><p>The charging rules follow from which phase you are interrogating:</p><div class="formula">Superheat → use the DEW point (suction vapor finishes evaporating at dew)<br>Subcooling → use the BUBBLE point (liquid starts condensing... completes at bubble)</div><p>Use the wrong column and your 'superheat' is wrong by roughly the glide — enough to misjudge charge on both fixed and TXV systems. P/T charts and apps for blends print both columns for exactly this reason. <strong>Worked orientation with the R-404A anchor:</strong> at 40°F nominal, R-404A's bubble-side value sits near 62 psig while the dew-side reading corresponds to the warmer end of its glide — the chart's two columns straddle the nominal temperature, which is why a single-temperature P/T table cannot serve a glide blend.</p><p>Two more blend disciplines: <strong>charge blends as liquid</strong> — vapor charging draws the more volatile components preferentially and shifts the mixture (<strong>fractionation</strong>); and after a <em>large vapor leak</em> from a high-glide blend system, fractionation may have shifted the remaining charge enough that best practice is recover-and-weigh-in rather than top-off. Specify the blend and the bubble/dew values on your service record so the next set of readings is interpretable.</p><div class="callout"><strong>Key idea:</strong> Glide means the P/T chart has two right answers per pressure. Dew for superheat, bubble for subcooling, liquid for charging — chant it.</div>`
    },
    {
      heading: "Charging Session Discipline and Documentation",
      html: `<p>A professional charging session runs like a checklist, because memory under a hot sun is not a quality system:</p><ol><li><strong>Verify the platform:</strong> airflow (filter, coil, blower, ducts), clean condenser, correct rotation, stable load. Record indoor wet-bulb and outdoor dry-bulb.</li><li><strong>Recover/prepare legally:</strong> certified equipment, no venting, cylinders within fill limits, EPA discipline from Module 9 on every hose connection (minimize losses — core depressors and low-loss fittings exist for this).</li><li><strong>Measure before touching:</strong> full pressure/temperature set, computed superheat and subcooling, compared against the <em>method-appropriate</em> target.</li><li><strong>Adjust in small increments,</strong> liquid-side and throttled per procedure, waiting for stabilization between additions. Watch the variable the method says to watch — and glance at the other one for safety (a TXV system's superheat collapsing toward zero is a floodback warning regardless of subcooling).</li><li><strong>Verify the whole picture:</strong> temperature split across the coil sensible for conditions, compressor amps within nameplate expectations, no frosting where frosting should not be.</li><li><strong>Document:</strong> refrigerant type, amount added/removed (weighed), final superheat/subcooling with conditions, and total charge where known. This paperwork feeds warranty, Module 10's leak-rate math, and the next technician's sanity.</li></ol><p>And the standing prohibitions: never charge into a system known to be leaking without addressing the leak (you are scheduling an emission, and for regulated appliances there are repair obligations — Module 10); never 'top off' a high-glide blend by vapor; never use superheat to judge TXV charge or subcooling to judge fixed-orifice charge. Method discipline is not pedantry — every one of those errors is a callback with your name on it.</p><div class="callout"><strong>Key idea:</strong> Stabilize, measure, titrate, verify, document. A charging session is a laboratory procedure that happens to occur on a roof.</div>`
    }
  ],
  keyTerms: [
    { term: "Superheat (charging)", def: "Suction line temperature minus saturation temperature at suction pressure; the charge metric for fixed-orifice systems." },
    { term: "Subcooling (charging)", def: "Saturation temperature at head pressure minus liquid line temperature; the charge metric for TXV systems." },
    { term: "Target superheat chart", def: "Manufacturer table giving correct superheat for a fixed-orifice system by indoor wet-bulb and outdoor dry-bulb temperatures." },
    { term: "Critical charge", def: "A system whose small total charge makes performance highly sensitive to ounces; charged by weight to the nameplate specification." },
    { term: "Weigh-in", def: "Charging by measured weight on a scale to a specified total, after proper recovery and evacuation." },
    { term: "Zeotropic blend", def: "A refrigerant mixture whose components boil at different temperatures, producing temperature glide during phase change." },
    { term: "Temperature glide", def: "The difference between a blend's bubble-point and dew-point temperatures at a given pressure." },
    { term: "Bubble point", def: "The liquid-side saturation temperature of a blend at a given pressure; used for subcooling." },
    { term: "Dew point", def: "The vapor-side saturation temperature of a blend at a given pressure; used for superheat." },
    { term: "Fractionation", def: "Shifting of a blend's composition when one phase is preferentially lost (vapor leaks, vapor charging)." },
    { term: "Liquid charging", def: "Adding refrigerant in the liquid phase; required for blends to preserve composition, and metered carefully per procedure." },
    { term: "Stabilization", def: "Allowing a running system to settle after a change before trusting readings; the pause that makes charging a titration." },
    { term: "Low-loss fittings", def: "Hose/valve fittings that minimize the refrigerant released when connecting and disconnecting gauges." },
    { term: "Nameplate charge", def: "The manufacturer's specified refrigerant amount for the equipment (with documented line-length adjustments where applicable)." },
    { term: "Bubble/dew columns", def: "The two saturation columns printed for glide blends on P/T charts and apps: liquid (bubble) and vapor (dew)." },
    { term: "Charge verification", def: "Confirming a weighed or method-based charge with the other operating readings (split, amps, stability) before leaving the job." }
  ],
  video: {
    title: "Practice Checking the Charge of an R-410A Air Conditioner with Subcooling Method! 4 Scenarios!",
    embedUrl: "https://www.youtube.com/embed/0zsckt86Who",
    note: "Four worked R-410A subcooling scenarios with real gauge and temperature readings — the closest video analogue to this module's lab. Compare each scenario's computed subcooling with the verdict before the answer is given.",
    more: [
      { title: "R-22 Subcooling Examples! Check The Charge with 4 Different Scenarios!", url: "https://www.youtube.com/watch?v=NUKkwqDNq1E" },
      { title: "Explaining Superheat and Subcooling to Your Apprentice!", url: "https://www.youtube.com/watch?v=2SEDe0v8VPY" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> R-410A TXV system: head 317 psig, liquid line 90°F, suction 118 psig, suction line 50°F. Compute subcooling and superheat, and state which one judges the charge.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Head 317 psig → saturation ≈ 100°F; subcooling = 100 − 90 = <strong>10°F</strong>. Step 2: Suction 118 psig → saturation ≈ 40°F; superheat = 50 − 40 = <strong>10°F</strong>. Step 3: On a TXV system, <strong>subcooling judges charge</strong> (against the manufacturer's target); the 10°F superheat is the valve doing its job.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> R-22 fixed-orifice system: suction 68.5 psig, suction line 61°F. Compute superheat and explain what additional information decides whether the charge is correct.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: 68.5 psig → saturation ≈ 40°F; superheat = 61 − 40 = <strong>21°F</strong>. Step 2: Correctness is decided by the manufacturer's <strong>target-superheat chart at the measured indoor wet-bulb and outdoor dry-bulb temperatures</strong>, with airflow verified. 21°F is high for many comfort conditions and hints at undercharge or a restriction — but the chart, not a memorized number, issues the verdict.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A blend system's P/T app shows, at the measured suction pressure, a dew point of 44°F and a bubble point of 37°F. The suction line reads 54°F and the liquid line (at a pressure whose bubble point is 100°F) reads 89°F. Compute superheat and subcooling, showing which column you used for each.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Superheat uses the <strong>dew point</strong>: 54 − 44 = <strong>10°F</strong>. Step 2: Subcooling uses the <strong>bubble point</strong>: 100 − 89 = <strong>11°F</strong>. Step 3: Had you used bubble for superheat you'd have claimed 17°F and misjudged the system by the full 7°F glide.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A critically charged appliance has been opened for a compressor change. Nameplate charge is a specified weight. Write the charge procedure in order.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Recover any remaining refrigerant with certified equipment (no venting). Step 2: Complete the repair; fit a new drier. Step 3: Evacuate to ≤500 microns and pass a decay test. Step 4: <strong>Weigh in</strong> the exact nameplate charge on a scale (liquid phase, per procedure). Step 5: Run, verify operation, and record the weighed amount on the service documentation.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A technician charges a zeotropic blend system by vapor from an upright cylinder, slowly, 'to be safe.' Identify the error and its chemical consequence.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Blends must be charged as <strong>liquid</strong> (cylinder inverted or via a liquid/dip-tube connection per the cylinder design). Step 2: Vapor drawn from a blend cylinder is richer in the more volatile components — the system receives a shifted mixture (<strong>fractionation</strong>), and the cylinder's remainder shifts the other way. Step 3: Consequence: the installed charge no longer matches the nameplate blend, so its P/T behavior, glide, and capacity all drift from specification.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Midway through subcooling-charging a TXV system, superheat collapses from 11°F to 2°F while subcooling climbs past target. Stop and explain what the pair of readings is warning about.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Rising-past-target subcooling says liquid is stacking — charge is now excessive for the conditions. Step 2: Collapsing superheat on a TXV system says the valve can no longer hold its setting against the flood — liquid is heading for the compressor (floodback risk). Step 3: Stop adding; recover the excess back to target subcooling, re-verify stability, and confirm airflow/load conditions were honest before concluding.</p>"
    }
  ],
  quiz: [
    {
      q: "A fixed-orifice system is charged by:",
      choices: ["Subcooling to 10°F always", "Superheat, against a conditions-indexed manufacturer target", "Sight glass clarity", "Suction pressure alone"],
      answer: 1,
      explanation: "Correct: (b). With a fixed restriction, evaporator fill — hence superheat — reports charge, and the correct target varies with indoor wet-bulb and outdoor dry-bulb. (a) Subcooling is the TXV metric; a fixed 10°F ignores conditions. (c) Glasses support, never decide. (d) Suction pressure moves with load and airflow as much as with charge."
    },
    {
      q: "R-410A readings: head 317 psig, liquid line 92°F. Subcooling is:",
      choices: ["225°F", "8°F", "100°F", "12°F"],
      answer: 1,
      explanation: "Correct: (b). 317 psig → ≈100°F saturation; 100 − 92 = 8°F. (a) subtracts pressure from temperature — a unit error. (c) is the saturation temperature itself. (d) would need an 88°F liquid line."
    },
    {
      q: "For a zeotropic blend, superheat is computed with the ___ and subcooling with the ___.",
      choices: ["Bubble point; dew point", "Dew point; bubble point", "Average of the two; average of the two", "Midpoint; dew point"],
      answer: 1,
      explanation: "Correct: (b). Vapor finishes at dew (superheat side); liquid is judged at bubble (subcooling side). (a) reverses them — the classic glide error, wrong by about the full glide. (c) Averaging invents a saturation temperature neither phase obeys. (d) Midpoint is the same fiction with extra steps."
    },
    {
      q: "Blends must be charged as liquid because vapor charging causes:",
      choices: ["Overheating of the cylinder", "Fractionation — the vapor drawn is richer in volatile components, shifting the mixture", "Immediate TXV failure", "Moisture ingress"],
      answer: 1,
      explanation: "Correct: (b). Liquid charging transfers the mixture in its specified proportions. (a) Cylinder temperature is not the issue. (c) TXVs fail from debris and lost bulb charge, not charging phase. (d) Moisture enters through open, wet practice — not through liquid-phase transfer."
    },
    {
      q: "Weigh-in is mandatory practice (not merely optional) when:",
      choices: ["The system is a critically charged appliance being returned to service", "The technician owns a scale", "The weather is mild", "The system has a sight glass"],
      answer: 0,
      explanation: "Correct: (a). Critical-charge systems have no useful live-charge margin; the specified weight into an evacuated system is the method. (b) Owning tools never creates the requirement. (c) Weather does not change criticality. (d) A glass does not substitute for the scale on such equipment."
    },
    {
      q: "Before any charge judgment is valid, the technician must first verify:",
      choices: ["That the customer is watching", "Airflow, clean coils, and stabilized operating conditions", "That the gauges are brand new", "The age of the refrigerant cylinder"],
      answer: 1,
      explanation: "Correct: (b). Airflow and stability set the conditions every target assumes; charge judgments made before them are engraved errors. (a) Audience is not a variable. (c) Gauge condition matters for accuracy but used, calibrated gauges serve fine. (d) Cylinder age is irrelevant to the system's charge state."
    },
    {
      q: "On a TXV system, adding charge mainly changes ___ while the valve holds ___ near its setting:",
      choices: ["Superheat; subcooling", "Subcooling (liquid stacked in the condenser); superheat", "Compression ratio; discharge temperature only", "Airflow; superheat"],
      answer: 1,
      explanation: "Correct: (b). That asymmetry is precisely why subcooling is the TXV charging metric. (a) reverses the pair. (c) Ratio follows operating pressures and is not the charge gauge. (d) Charge never changes airflow."
    },
    {
      q: "After a large vapor leak on a high-glide blend system, best practice is often:",
      choices: ["Top off with vapor until pressures look right", "Recover the remaining charge and weigh in fresh specified blend, because fractionation may have shifted the mixture", "Add the most volatile component only", "Convert the system to a pure refrigerant on the spot"],
      answer: 1,
      explanation: "Correct: (b). Vapor leaks preferentially lose volatile components; the residue is an unknown mixture, so known-good charge by weight restores specification. (a) compounds the shift and adds more shifted vapor. (c) Components are not field-blended. (d) Conversions are engineering procedures (approvals, oil, components), never a roadside improvisation."
    }
  ],
  studyGuide: `
<h3>Module 8 — Charging in Depth: Quick Reference</h3>
<p><strong>Method map:</strong> fixed orifice/cap tube → <strong>superheat</strong> (manufacturer chart by indoor WB / outdoor DB). TXV → <strong>subcooling</strong> (manufacturer target). Critical charge → <strong>weigh-in</strong> to nameplate.</p>
<div class="formula">SH = suction line temp − sat. temp (suction P) &nbsp;|&nbsp; SC = sat. temp (head P) − liquid line temp</div>
<p><strong>Anchors:</strong> R-410A 118 psig ≈ 40°F, 317 psig ≈ 100°F. R-22 68.5 ≈ 40°F, 196 ≈ 100°F. R-134a 35 ≈ 40°F, 124 ≈ 100°F.</p>
<p><strong>Worked:</strong> R-410A head 317/liquid 88 → SC 12°F. R-22 suction 68.5/line 55 → SH 15°F. R-134a suction 35/line 47 → SH 12°F.</p>
<p><strong>Blends (glide):</strong> superheat uses DEW point; subcooling uses BUBBLE point; charge as LIQUID; big vapor leak → recover + weigh in fresh (fractionation).</p>
<p><strong>Session discipline:</strong> airflow &amp; stability first → measure → small additions with waits → verify split/amps → document refrigerant, weighed amounts, final SH/SC with conditions.</p>
<p><strong>Watch out:</strong> never judge TXV charge by superheat or fixed-orifice charge by subcooling; never top off a known leaker without addressing the leak (Module 10).</p>
`
};
