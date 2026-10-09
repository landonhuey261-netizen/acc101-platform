// HVAC 102 - Module 3: Compressor Performance & Volumetric Efficiency
module.exports = {
  number: 3,
  slug: "compressor-performance-volumetric-efficiency",
  title: "Compressor Performance & Volumetric Efficiency",
  estTime: "3–4 hours",
  objectives: [
    "Define compression ratio using absolute pressures and compute it from gauge readings.",
    "Define volumetric efficiency and explain the role of clearance volume and re-expansion.",
    "Predict how suction and discharge pressure changes move volumetric efficiency and capacity.",
    "List the field causes of capacity loss: valve leakage, worn rings, suction heating, pressure drops, and low suction density.",
    "Distinguish a weak compressor from a healthy compressor working against bad system conditions."
  ],
  sections: [
    {
      heading: "Compression Ratio: Always in Absolute Pressure",
      html: `<p>The compressor's workload is set by the <strong>compression ratio</strong> — discharge pressure divided by suction pressure, with both expressed in <strong>absolute</strong> pressure (psia). Gauges read psig, so add atmospheric pressure (about 14.7 psi at sea level) to each reading before dividing:</p><div class="formula">Compression ratio = (discharge psig + 14.7) ÷ (suction psig + 14.7)</div><p><strong>Worked example 1 — R-410A comfort cooling.</strong> Suction 118 psig (≈ 40°F saturation), discharge 317 psig (≈ 100°F saturation). Absolute: suction 132.7 psia, discharge 331.7 psia. Ratio = 331.7 ÷ 132.7 = <strong>2.50</strong>.</p><p><strong>Worked example 2 — R-22, same temperatures.</strong> Suction 68.5 psig, discharge 196 psig. Absolute: 83.2 and 210.7 psia. Ratio = 210.7 ÷ 83.2 = <strong>2.53</strong>. Different refrigerant, different gauge numbers, nearly the same ratio — because ratio follows the <em>temperatures</em> the system works between, not the refrigerant label. Now watch what changes it: keep the R-410A discharge at 317 psig but let a dirty filter drop suction pressure so saturation falls well below 40°F, and the ratio climbs steeply; foul the condenser so discharge rises above 317 psig and it climbs again. Ratio is a report on system conditions before it is a report on the compressor.</p><div class="callout"><strong>Key idea:</strong> The most common student error is dividing psig by psig (317 ÷ 118 = 2.69 here) — close enough to look right, wrong enough to mislead. Convert to psia first, every time.</div>`
    },
    {
      heading: "Volumetric Efficiency and the Clearance Volume Story",
      html: `<p><strong>Volumetric efficiency (VE)</strong> compares the volume of fresh suction vapor a compressor actually draws in to its swept <strong>displacement</strong>:</p><div class="formula">VE = actual volume drawn in ÷ displacement volume</div><p>Why is VE never 100% in a reciprocating compressor? Because of <strong>clearance volume</strong> — the small space left above the piston at the top of its stroke, needed so the piston does not strike the valve plate. At the end of discharge, that pocket is full of high-pressure gas. The piston must travel down far enough for that trapped gas to <strong>re-expand</strong> to suction pressure before any fresh vapor can enter. The higher the discharge pressure, the longer re-expansion takes, and the less of the stroke remains for drawing in new charge.</p><p>That mechanism produces the module's central law: <strong>as compression ratio rises, volumetric efficiency falls.</strong> With zero clearance, ratio would not matter; with real clearance, it dominates. Scroll and rotary compressors have no classic piston clearance pocket, but they suffer their own ratio-dependent losses — internal leakage paths driven by the pressure difference, and discharge re-expansion in the pocket being expelled — so the same practical law holds across designs: bigger lift, fewer pounds pumped per revolution.</p><p>The consequence chains straight into Module 2: mass flow = displacement × VE × suction vapor density. Raise the ratio and you cut VE <em>and</em> (when suction pressure fell to cause it) density as well. Capacity losses from bad conditions are multiplicative, which is why a modest-looking suction drop can cost a quarter of a system's capacity.</p><div class="callout"><strong>Key idea:</strong> Volumetric efficiency is where system conditions reach inside the compressor and steal its output. Protect suction pressure and head pressure and you protect capacity.</div>`
    },
    {
      heading: "Other Thieves: Valves, Rings, Heat, and Pressure Drop",
      html: `<p>Clearance re-expansion is honest physics. The rest of the capacity thieves are faults:</p><ul><li><strong>Leaking discharge valves:</strong> high-pressure gas blows back into the cylinder during the suction stroke, displacing fresh charge — VE falls and discharge temperature rises because the same gas gets compressed repeatedly.</li><li><strong>Leaking suction valves or worn rings:</strong> gas slips past instead of moving to the condenser; the compressor sounds busy while mass flow quietly bleeds away.</li><li><strong>Suction vapor heating:</strong> hot suction gas (excess superheat, uninsulated lines through hot spaces, motor heat in hermetics) is thinner gas. The cylinder fills by <em>volume</em>; warm, low-density vapor means fewer pounds per fill even at textbook VE.</li><li><strong>Suction-line pressure drop:</strong> the compressor inhales at a lower pressure than the evaporator produced. Every psi lost in a long or restricted suction line is density the compressor never sees.</li><li><strong>High discharge temperature feedback:</strong> hotter gas heats cylinder walls, which heats incoming charge, which thins it further — a spiral that ends at the internal overload if conditions are not corrected.</li></ul><p>Diagnosis discipline: a compressor's job is to pump against the pressures the <em>system</em> presents. Before condemning it, present it with fair conditions — clean coils, correct airflow, correct charge — and re-measure. Amp draw helps: a compressor working against high ratio with leaking valves often draws <em>less</em> than expected for the pressures, because it is moving less mass than the displacement promises. Compare measured amps and pressures against the manufacturer's compressor performance data (the compressor map) whenever it is available; that map, not folklore, defines what "weak" means for that model.</p><div class="callout"><strong>Key idea:</strong> "Weak compressor" is a verdict of last resort. Most low-pumping complaints trace to ratio, density, or valve faults — and two of those three are system conditions, not compressor defects.</div>`
    },
    {
      heading: "Reading the Compressor Map and Predicting Behavior",
      html: `<p>Manufacturers publish compressor performance tables and curves: for each combination of evaporating and condensing temperature, they list capacity, power input, and current. These maps already include the compressor's real VE behavior — which is why engineering selections use them instead of displacement arithmetic.</p><p>Three predictions the map (and this module) let you make:</p><ul><li><strong>Hotter condensing temperature at fixed evaporating temperature:</strong> capacity down, power up, current up, COP down. A unit limping through a heat wave with a dirty condenser is living this row of the table.</li><li><strong>Colder evaporating temperature at fixed condensing temperature:</strong> capacity down sharply (ratio up + density down), power often down in absolute terms but up per ton delivered. Low-temperature refrigeration is expensive cooling for exactly this reason.</li><li><strong>Higher suction superheat at the compressor inlet:</strong> capacity down slightly, discharge temperature up significantly. This asymmetry is why suction-cooled hermetic motors care about total superheat, and why floodback (near-zero superheat) is dangerous in the opposite direction — liquid cannot be compressed, and it washes oil from bearings.</li></ul><p><strong>Worked reasoning example.</strong> Two identical R-22 systems: System A at 68.5/196 psig (ratio 2.53); System B's condenser fouls until discharge rises while suction holds near its original value. B's ratio rises, its VE falls, its mass flow falls (Module 2's formula does the rest), its run time stretches, and its discharge line runs hotter. One fouled coil produced every symptom — no compressor defect required. Clean the coil, and the "weak compressor" recovers.</p><div class="callout"><strong>Key idea:</strong> Use manufacturer performance data as the reference. Measure evaporating and condensing temperatures, look up what the compressor should deliver there, and only call it weak when it misses <em>that</em> target — not a mild-day target.</div>`
    },
    {
      heading: "Protecting the Compressor You Have",
      html: `<p>Compressor life is mostly conditions management:</p><ul><li><strong>Keep the ratio reasonable:</strong> clean condensers, correct condenser fan operation, correct evaporator airflow, and charge discipline keep both pressures in the design window.</li><li><strong>Guard the suction gas:</strong> enough superheat to keep liquid out (floodback destroys valves, bearings, and oil film), not so much that discharge temperature cooks the oil. Both tails of the distribution kill compressors — slowly at the hot end, suddenly at the liquid end.</li><li><strong>Respect discharge temperature:</strong> sustained high discharge temperatures degrade oil and refrigerant, form acids and carbon, and start the burnout chemistry Module 7 cleans up after. When you find discharge lines too hot to approach, find the ratio, superheat, or charge fault behind them.</li><li><strong>Verify before replacing:</strong> correct the conditions, re-plot the cycle, compare amps and capacity to the compressor map, and confirm the diagnosis with the system running at fair conditions. A replacement compressor installed into the same high-ratio conditions inherits the same short life — plus the contamination of the first failure.</li></ul><p>Tie it together: Module 1 gave you the picture, Module 2 the accounting, and this module the machine's limits. The next modules cover the supporting cast — oils, metering devices, accessories — that keep the compressor fed, lubricated, and safe between the four state points.</p><div class="callout"><strong>Key idea:</strong> Compressors rarely die of old age in well-kept systems. They die of ratio, heat, liquid, acid, and dirt — every one of which is a system condition a technician controls.</div>`
    }
  ],
  keyTerms: [
    { term: "Compression ratio", def: "Absolute discharge pressure divided by absolute suction pressure; the compressor's workload index." },
    { term: "Absolute pressure (psia)", def: "Pressure measured from a perfect vacuum; psia = psig + ~14.7 at sea level." },
    { term: "Volumetric efficiency (VE)", def: "Actual suction volume drawn in divided by compressor displacement; falls as compression ratio rises." },
    { term: "Displacement", def: "The volume a compressor sweeps per unit time at its rated speed." },
    { term: "Clearance volume", def: "The small volume left above a reciprocating piston at top dead center; its trapped gas must re-expand before fresh charge can enter." },
    { term: "Re-expansion", def: "The expansion of clearance gas down to suction pressure during the suction stroke; consumes stroke and reduces VE." },
    { term: "Compressor map (performance data)", def: "Manufacturer tables/curves of capacity, power, and current versus evaporating and condensing temperatures." },
    { term: "Floodback", def: "Liquid refrigerant returning to the compressor through the suction line; risks valve damage and oil washout." },
    { term: "Discharge temperature", def: "Temperature of the gas leaving the compressor; sustained excess degrades oil and signals high ratio or high superheat." },
    { term: "Valve leakage (compressor)", def: "Internal blow-by past suction or discharge valves that recycles gas and cuts delivered mass flow." },
    { term: "Suction density effect", def: "Mass flow falls when suction vapor is thinner (lower pressure or hotter), even at unchanged VE and displacement." },
    { term: "Hermetic compressor", def: "A compressor and motor sealed in one welded shell, cooled largely by suction gas." },
    { term: "Semi-hermetic compressor", def: "A serviceable compressor with a bolted housing allowing access to internal parts." },
    { term: "Capacity loss stacking", def: "The multiplicative combination of lower VE and lower suction density when operating pressures move unfavorably." },
    { term: "Internal overload", def: "A temperature/current protector inside the compressor that opens on overheating; a symptom, not a root cause." },
    { term: "Pumping test caution", def: "Never judge a compressor 'weak' until coils, airflow, and charge are corrected and readings are compared with its performance map." }
  ],
  video: {
    title: "3D How Refrigeration and Air Conditioning Works P1 - Components",
    embedUrl: "https://www.youtube.com/embed/p6GXJdRUz9E",
    note: "A 3D tour of the major components and the cycle they serve. This module needs the compressor's internal story — piston, valves, and the clearance pocket described in the lecture — so watch this for component orientation, then connect each part to the VE discussion; it does not itself derive volumetric efficiency.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> An R-410A system shows suction 118 psig and discharge 317 psig. Compute the compression ratio correctly, and the (incorrect) value a student gets by dividing psig directly. Explain the difference.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Convert: suction 118 + 14.7 = 132.7 psia; discharge 317 + 14.7 = 331.7 psia. Step 2: Ratio = 331.7 ÷ 132.7 = <strong>2.50</strong>. Step 3: The psig shortcut gives 317 ÷ 118 = 2.69. Step 4: The error exists because gauge pressure ignores atmospheric pressure, which is a larger fraction of the suction value — ratios must be built from absolute pressures.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A second R-410A system has a fouled condenser: discharge rises to 400 psig while suction stays 118 psig. Compute its compression ratio and state the expected effect on volumetric efficiency and capacity.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Absolute pressures: 132.7 psia suction; 400 + 14.7 = 414.7 psia discharge. Step 2: Ratio = 414.7 ÷ 132.7 = <strong>3.13</strong>, up from 2.50. Step 3: Higher ratio → clearance gas re-expands further → VE falls → mass flow and capacity fall, while discharge temperature and power per ton rise. Step 4: The correct repair is restoring heat rejection, not replacing the compressor.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Explain, in piston-stroke terms, why a reciprocating compressor with larger clearance volume loses more capacity as compression ratio rises.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: At discharge end, the clearance pocket holds gas at discharge pressure. Step 2: On the down-stroke that gas must expand to suction pressure before the suction valve can open. Step 3: A larger pocket holds more high-pressure gas, and a higher ratio means it must expand through a larger pressure span — both lengthen the re-expansion portion of the stroke. Step 4: Less stroke remains for fresh charge, so VE — and capacity — fall faster with ratio.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A compressor draws rated amps at mild conditions but low amps with poor capacity on a hot day, with very high discharge temperature. Give a coherent fault hypothesis and your first verification step.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Low amps + low delivered mass flow + very hot discharge suggests gas being re-compressed internally — leaking discharge valves are a prime suspect, aggravated by high-ratio hot-day conditions. Step 2: First verify the conditions are fair: clean condenser, correct airflow and charge, so the compressor is judged at honest pressures. Step 3: Then compare pressures/amps with the manufacturer's compressor map at the measured temperatures; a miss against the map confirms an internal fault.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Why does an uninsulated suction line running through a 120°F attic reduce capacity even though evaporator pressure is normal?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The line adds superheat, so vapor arrives at the compressor hotter. Step 2: Hotter vapor at the same pressure is less dense — fewer pounds per cubic foot. Step 3: The compressor fills by volume, so each revolution carries less mass; mass flow and capacity fall. Step 4: Bonus harm — discharge temperature climbs, stressing oil. Insulating the line restores density the evaporator already paid to create.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> State the rule for when the verdict 'weak compressor' is justified, in one or two sentences.</p>",
      solution: "<p><strong>Answer:</strong> Only after coils, airflow, and charge are corrected to fair conditions, the cycle is plotted, and the compressor still misses the capacity/current its manufacturer map promises at the measured evaporating and condensing temperatures. Anything earlier is guessing — and usually replaces a healthy compressor working in a sick system.</p>"
    }
  ],
  quiz: [
    {
      q: "Compression ratio must be computed with:",
      choices: ["psig values straight off the gauges", "Absolute pressures (psia) on both sides", "Saturation temperatures instead of pressures", "Discharge psig divided by suction psia"],
      answer: 1,
      explanation: "Correct: (b). Ratio is a pressure ratio in absolute terms; add ~14.7 to each gauge reading. (a) understates the suction side proportionally and inflates the ratio. (c) Temperature ratios in °F are physically meaningless here. (d) Mixing scales corrupts both sides of the division."
    },
    {
      q: "R-22 at 68.5 psig suction and 196 psig discharge has a compression ratio of about:",
      choices: ["2.86", "1.53", "2.53", "0.35"],
      answer: 2,
      explanation: "Correct: (c). (196 + 14.7) ÷ (68.5 + 14.7) = 210.7 ÷ 83.2 = 2.53. (a) 2.86 is the raw psig division, the classic error. (b) and (d) come from inverted or partial conversions and match no correct method."
    },
    {
      q: "As compression ratio increases, volumetric efficiency:",
      choices: ["Increases, because the compressor works harder", "Decreases, because clearance gas re-expands further", "Stays constant for all compressors", "Increases only in scroll compressors"],
      answer: 1,
      explanation: "Correct: (b). Higher discharge pressure means trapped clearance gas expands through a bigger span before fresh charge can enter, consuming more stroke. (a) confuses effort with output. (c) ignores clearance entirely. (d) scrolls also lose capacity with ratio through leakage and re-expansion losses."
    },
    {
      q: "Clearance volume exists in a reciprocating compressor primarily to:",
      choices: ["Store extra refrigerant", "Prevent the piston from striking the valve plate and allow for valve action and tolerances", "Increase compression ratio", "Cool the discharge gas"],
      answer: 1,
      explanation: "Correct: (b). Clearance is a mechanical necessity — piston clearance, valve pockets, and gasket thickness. (a) It stores only a wisp of trapped gas, not usable charge. (c) Clearance actually limits pressure-building performance; it is not there to raise ratio. (d) It does no cooling; its gas is the hottest in the machine."
    },
    {
      q: "A compressor with leaking discharge valves typically shows:",
      choices: ["High amps, high capacity, cool discharge", "Reduced mass flow, elevated discharge temperature, often low-than-expected amps", "Floodback at the suction line", "Normal readings in all respects"],
      answer: 1,
      explanation: "Correct: (b). Gas blown back into the cylinder is re-compressed instead of delivered: less mass flow, hotter gas, and less useful work per amp. (a) describes the opposite of valve leakage. (c) Floodback is liquid return from the evaporator side, a different fault. (d) Internal leakage always costs measurable performance."
    },
    {
      q: "Hot suction gas reduces capacity at unchanged displacement because:",
      choices: ["It raises the compression ratio", "It is less dense, so each cylinder fill carries fewer pounds", "It increases clearance volume", "It subcools the liquid line"],
      answer: 1,
      explanation: "Correct: (b). Compressors meter volume, not mass; thin vapor means less mass per stroke. (a) Ratio depends on pressures, which may not change. (c) Clearance is fixed metal geometry. (d) Suction heat has no path to subcool liquid."
    },
    {
      q: "The fairest test of a suspected weak compressor is to:",
      choices: ["Pinch the discharge line and listen", "Run it with the condenser fan disabled", "Restore clean coils, correct airflow and charge, then compare performance to the manufacturer's map at measured temperatures", "Replace it and see if the new one does better"],
      answer: 2,
      explanation: "Correct: (c). Compressor output is condition-dependent; only a comparison against the map at fair, measured conditions separates a bad compressor from a bad system. (a) and (b) are unsafe, destructive stunts that prove nothing quantitative. (d) is parts-swapping at the customer's expense."
    },
    {
      q: "Which condition pair produces the highest compression ratio?",
      choices: ["Warm evaporator, cool condenser", "Cold evaporator, hot condenser", "Cold evaporator, cold condenser in equal proportion", "Ratio does not depend on temperatures"],
      answer: 1,
      explanation: "Correct: (b). A cold evaporator means low suction pressure and a hot condenser means high discharge pressure — the widest absolute-pressure span. (a) is the minimum-lift case. (c) proportional changes in temperature do not cancel, since saturation pressures are nonlinear in temperature — and the stated pair still widens less than (b). (d) is false; temperatures set both pressures."
    }
  ],
  studyGuide: `
<h3>Module 3 — Compressor Performance &amp; Volumetric Efficiency: Quick Reference</h3>
<div class="formula">Compression ratio = (discharge psig + 14.7) ÷ (suction psig + 14.7)</div>
<p><strong>Anchors:</strong> R-410A 118/317 psig → ratio 2.50. R-22 68.5/196 psig → ratio 2.53. Same temperatures, nearly same ratio — refrigerant label does not set workload.</p>
<p><strong>VE law:</strong> ratio up → clearance gas re-expands further → volumetric efficiency down → mass flow down → capacity down. Scrolls/rotaries follow the same trend through leakage and re-expansion losses.</p>
<p><strong>Mass flow chain:</strong> displacement × VE × suction density. Hot or low-pressure suction gas cuts the density term even when VE is healthy.</p>
<p><strong>Capacity thieves:</strong> leaking suction/discharge valves, worn rings, suction-line pressure drop and heat gain, high discharge temperature feedback.</p>
<p><strong>Diagnosis rule:</strong> fair conditions first (clean coils, airflow, charge), then compare amps/capacity to the manufacturer compressor map at measured evaporating/condensing temperatures. "Weak compressor" is the last verdict, not the first.</p>
<p><strong>Protection:</strong> keep ratio in the design window; hold superheat between floodback and discharge-overheat; treat internal overload trips as symptoms.</p>
`
};
