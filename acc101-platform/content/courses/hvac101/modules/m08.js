// HVAC 101 - Module 8: Pressure–Temperature Relationships & the P/T Chart
module.exports = {
  number: 8,
  slug: "pressure-temperature-relationships-pt-chart",
  title: "Pressure–Temperature Relationships & the P/T Chart",
  estTime: "3–4 hours",
  objectives: [
    "Read a pressure-temperature chart or app: given a pressure, find saturation temperature, and given a temperature, find pressure.",
    "Convert gauge readings to evaporator and condensing saturation temperatures for R-410A, R-22, R-134a, and R-404A using course anchor values.",
    "Explain temperature glide in blends and the difference between dew point and bubble point.",
    "State which point — dew or bubble — is used for superheat and for subcooling on a glide blend, and why.",
    "Verify a system's pressure against a known temperature to spot non-condensables or a wrong-refrigerant problem."
  ],
  sections: [
    {
      heading: "The Chart Is the Cycle's Dictionary",
      html: `
<p>Every pressure you read on a manifold is a temperature in disguise, but only at saturation, and only for the refrigerant actually in the system. The <strong>pressure-temperature (P/T) chart</strong> is the dictionary for that translation: one column of pressures, one column of saturation temperatures, one row per refrigerant. Digital gauges and phone apps do the same lookup automatically — which is faster, but only trustworthy when the correct refrigerant is selected in the tool.</p>
<p>Learn a small set of <strong>anchor values</strong> cold, and interpolate the rest from a chart or app:</p>
<ul>
<li><strong>R-410A:</strong> 40°F ≈ 118 psig; 100°F ≈ 317 psig.</li>
<li><strong>R-22:</strong> 40°F ≈ 68.5 psig; 45°F ≈ 76 psig; 100°F ≈ 196 psig.</li>
<li><strong>R-134a:</strong> 40°F ≈ 35 psig; 100°F ≈ 124 psig.</li>
<li><strong>R-404A:</strong> 40°F ≈ 62 psig bubble point, with a dew point near 66 psig — the gap between those two numbers is glide, coming shortly.</li>
</ul>
<p><strong>Worked Example — reading both directions.</strong> Direction one: an R-22 evaporator shows 76 psig. The anchor says 45°F saturation: the coil is boiling at about 45°F. Direction two: you want an R-134a evaporator boiling at 40°F for a cooler application. The anchor says to expect about 35 psig suction. A system far from that pressure is telling you its boiling temperature is far from your target, whatever the box thermometer says yet.</p>
<div class="callout"><strong>Key idea:</strong> Never quote a pressure as good or bad by itself. Convert it to a saturation temperature and judge the temperature against the application: a 40°F coil suits comfort cooling; refrigeration wants colder, by design.</div>`
    },
    {
      heading: "Using Saturation in Both Coils",
      html: `
<p>The conversion serves both ends of the system. On the low side, suction pressure becomes <strong>evaporator saturation temperature</strong>, the boiling point of the coil, which you compare with the space temperature the coil serves and with the suction line temperature to get superheat. On the high side, discharge pressure becomes <strong>condensing saturation temperature</strong>, which you compare with outdoor ambient to judge heat rejection and with the liquid line temperature to get subcooling. Four field numbers — two pressures, two line temperatures — plus the chart produce the system's whole report card.</p>
<p><strong>Worked Example — a full conversion.</strong> An R-410A system shows 118 psig suction with a 52°F suction line, and 317 psig head with a 90°F liquid line. Step 1: Suction saturation is 40°F, so superheat = 52 − 40 = 12°F. Step 2: Condensing saturation is 100°F, so subcooling = 100 − 90 = 10°F. Step 3: Judgment — both values sit in healthy teaching ranges, so this system's refrigerant side is behaving; if comfort is poor, the investigation moves to airflow and load rather than charge.</p>
<p>Standing pressure is a diagnostic too. A system off long enough to equalize with its surroundings holds saturated refrigerant at the surrounding temperature, so its standing pressure must match the chart for that temperature. An R-22 system equalized at 100°F should stand near 196 psig. Far above that suggests non-condensable air adding its pressure, a warmer actual temperature than assumed, or the wrong refrigerant — each worth chasing before start-up.</p>
<div class="callout"><strong>Key idea:</strong> Pressure plus chart plus line temperature is one inseparable measurement. A pressure without its conversion, or a conversion for the wrong refrigerant, is not data — it is a rumor.</div>`
    },
    {
      heading: "Glide: When One Pressure Has Two Temperatures",
      html: `
<p>Single refrigerants and near-azeotropic blends like R-410A boil and condense at essentially one temperature for a given pressure. <strong>Zeotropic blends</strong>, made of components with different boiling points, behave differently: at one pressure they start boiling at one temperature and finish at a higher one. That spread is the <strong>temperature glide</strong>. The components effectively take turns boiling, lighter ones first, so temperature climbs through the coil even at perfectly constant pressure.</p>
<p>Two named points bracket the glide. The <strong>bubble point</strong> is the temperature at which boiling begins — the first bubble of vapor from liquid, and also the temperature at which condensing finishes. The <strong>dew point</strong> is the temperature at which boiling finishes — the last drop of liquid gone, and the temperature at which condensing begins. In an evaporator, refrigerant enters near the bubble point and leaves near the dew point; in a condenser the journey reverses.</p>
<p>R-404A makes the idea concrete with course anchors: at 40°F bubble point its pressure is about 62 psig, while its dew point at that same neighborhood sits near 66 psig. The few degrees between bubble and dew behavior in that family are modest compared with high-glide retrofit blends, which can spread much wider and make sloppy chart work genuinely misleading. Glide is also why blends are charged as liquid and why a leaking blend can shift composition — the components do not leak at equal rates.</p>
<div class="callout"><strong>Key idea:</strong> Glide means pressure alone no longer names one temperature. You must say which point you mean — dew or bubble — or your superheat and subcooling are undefined numbers.</div>`
    },
    {
      heading: "Dew for Superheat, Bubble for Subcooling",
      html: `
<p>The rule follows from what each measurement must prove. <strong>Superheat</strong> asks: has all liquid boiled away, and how much hotter is the vapor than the point where boiling finished? Boiling finishes at the dew point, so superheat on a glide blend uses the <strong>dew point</strong> saturation temperature: superheat = suction line temperature − dew point temperature at the suction pressure. <strong>Subcooling</strong> asks: has all vapor condensed, and how much cooler is the liquid than the point where condensing finishes? Condensing finishes at the bubble point, so subcooling uses the <strong>bubble point</strong>: subcooling = bubble point temperature at the head pressure − liquid line temperature.</p>
<p><strong>Worked reasoning.</strong> Suppose a glide blend's chart lists, at the measured suction pressure, a dew point of 40°F, and the suction line reads 52°F. Superheat = 52 − 40 = 12°F by dew, exactly the vapor-side logic used all along. If a technician instead subtracted a lower bubble-point temperature, the computed superheat would come out larger than reality, the system would look safer than it is, and floodback could hide behind the arithmetic error. On the liquid side the mirror error overstates or understates subcooling depending on direction — the defense is simply to make dew-with-superheat and bubble-with-subcooling a single memorized pair.</p>
<p>Modern P/T apps and digital gauges handle this gracefully: they display dew and bubble columns, or ask which value you want. Printed charts for blends likewise list both. For single refrigerants and R-410A, the two points are effectively the same number, which is why your earlier modules could speak of the saturation temperature without qualification.</p>
<div class="formula">Glide blends: Superheat uses DEW point. Subcooling uses BUBBLE point.</div>
<div class="callout"><strong>Key idea:</strong> Match the point to the question. Vapor questions are dew questions; liquid questions are bubble questions.</div>`
    },
    {
      heading: "Chart Discipline and a Recap",
      html: `
<p>Good chart habits are short and strict. Confirm the refrigerant from the nameplate before converting anything. Confirm the tool — chart, app, or gauge — is set to that same refrigerant, and on blends, to the dew or bubble column the calculation needs. Work in psig, the chart's field unit. Sanity-check against your anchors: if an R-410A conversion claims a 40°F coil at 68 psig, the tool is set to R-22 and every downstream number is fiction. Finally, remember the chart's limit: it translates saturated conditions. Refrigerant that is all vapor or all liquid obeys no P/T pairing, which is the whole point of superheat and subcooling existing as separate measurements.</p>
<p><strong>Worked check — catching a wrong setting.</strong> A digital gauge on an R-22 system at 196 psig shows a saturation temperature of 100°F. Step 1: The anchor agrees — R-22 at 100°F is about 196 psig, so the setting is right. Step 2: If it instead displayed a much higher temperature for that pressure, it would be converting with a higher-pressure refrigerant's data. Step 3: Ten seconds against an anchor prevents an entire misdiagnosis built on a menu setting.</p>
<p><strong>Recap:</strong></p>
<ul>
<li>The P/T chart translates saturated pressure and temperature for one specific refrigerant.</li>
<li>Anchors: R-410A 118/317, R-22 68.5/76/196, R-134a 35/124, R-404A about 62 bubble and 66 dew near 40°F.</li>
<li>Glide blends have a bubble point (boiling starts) and a dew point (boiling finishes) at one pressure.</li>
<li>Superheat uses dew; subcooling uses bubble.</li>
<li>Standing pressure must match ambient temperature on the chart, or something extra is in the system.</li>
</ul>`
    }
  ],
  keyTerms: [
    { term: "P/T chart", def: "A table or app function giving the saturation temperature belonging to a pressure for a specific refrigerant." },
    { term: "Anchor values", def: "Memorized pressure-temperature pairs used to sanity-check chart and gauge conversions." },
    { term: "Saturation temperature", def: "The boiling or condensing temperature at a given pressure for the refrigerant in the system." },
    { term: "Temperature glide", def: "The temperature spread across which a zeotropic blend boils or condenses at one pressure." },
    { term: "Zeotropic blend", def: "A mixture whose components boil at different temperatures, producing glide and possible composition shift when leaked." },
    { term: "Azeotropic blend", def: "A mixture that behaves like a single refrigerant, boiling at essentially one temperature; near-azeotropic blends show negligible glide." },
    { term: "Bubble point", def: "The temperature at which boiling begins and condensing finishes at a given pressure; used for subcooling on glide blends." },
    { term: "Dew point (refrigerant)", def: "The temperature at which boiling finishes and condensing begins at a given pressure; used for superheat on glide blends." },
    { term: "Standing pressure", def: "The equalized pressure of an off system, which should match the chart value for the surrounding temperature." },
    { term: "Non-condensables", def: "Gases such as air in the system that raise standing and head pressures above the refrigerant's chart values." },
    { term: "Evaporator saturation temperature", def: "The boiling temperature found by converting suction pressure with the P/T chart." },
    { term: "Condensing saturation temperature", def: "The condensing temperature found by converting discharge pressure with the P/T chart." },
    { term: "Composition shift", def: "A change in a leaked blend's makeup because its components escape at unequal rates." },
    { term: "Liquid charging", def: "Charging blends from the liquid phase so the mixture enters in its correct proportions." },
    { term: "Interpolation", def: "Estimating a chart value between two printed rows, checked against memorized anchor values." },
    { term: "Digital manifold P/T", def: "Automatic pressure-to-saturation conversion in a digital gauge or app, valid only when the correct refrigerant is selected." }
  ],
  video: {
    title: "When Dew and Bubble Isn't Enough - Refrigerant Glide Mid Point / Average Saturation Temperature",
    embedUrl: "https://www.youtube.com/embed/s7erTi0O9Lg",
    note: "An HVAC School lesson on refrigerant glide: why high-glide blends cannot be treated like R-22 or R-410A, and when dew, bubble, and midpoint saturation temperatures each apply. Watch how the evaporator temperature at one pressure becomes a range once glide is real.",
    more: [
      { title: "How a Pressure Gauge Shows Temperature | P–T Saturation Curve (R32, R410A, R134a)", url: "https://www.youtube.com/watch?v=dynQfN2y6Q0" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> An R-22 evaporator must boil at 45°F. What suction pressure do you expect, and what is a system actually boiling at if it shows 68.5 psig instead?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: The R-22 anchor for 45°F is about <strong>76 psig</strong>. Step 2: 68.5 psig is the 40°F anchor, so the coil is actually boiling at <strong>40°F</strong>, five degrees colder than intended — expect more frost tendency and a different superheat picture.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> An R-134a system stands overnight in a 100°F equipment room, fully equalized. What standing pressure should you see, and what do you suspect at a much higher reading?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Saturated and equalized, pressure must match temperature: R-134a at 100°F is about <strong>124 psig</strong>. Step 2: A much higher standing pressure suggests non-condensable air adding pressure, a hotter actual temperature than assumed, or the wrong refrigerant in the system — verify temperature first, then investigate.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> For a glide blend, state which chart point each calculation uses and why: (a) superheat, (b) subcooling.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: (a) Superheat uses the <strong>dew point</strong>, because superheat measures vapor temperature above the point where boiling finished. Step 2: (b) Subcooling uses the <strong>bubble point</strong>, because subcooling measures liquid temperature below the point where condensing finished. Step 3: Vapor questions are dew questions; liquid questions are bubble questions.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A technician converts R-410A pressures with a gauge accidentally set to R-22 and concludes the 40°F coil (118 psig) is boiling far hotter than it is. Explain the error's direction using the anchors.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: On the R-22 chart, 118 psig falls between the 45°F anchor (76 psig) and the 100°F anchor (196 psig), so the tool reports a saturation temperature well above 40°F. Step 2: The true R-410A conversion of 118 psig is exactly 40°F. Step 3: The refrigerant setting, not the system, created the phantom temperature — always confirm the tool's refrigerant before trusting its saturation display.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> R-404A near a 40°F evaporator: bubble about 62 psig, dew near 66 psig. A system runs at the dew pressure for 40°F and the suction line reads 52°F. Compute superheat by the correct point.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Superheat uses the dew point; the dew saturation temperature here is 40°F. Step 2: Superheat = 52 − 40 = <strong>12°F</strong>. Step 3: Using a bubble-point temperature instead would have inflated the result and overstated the floodback safety margin.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Why must zeotropic blends be charged as liquid from the cylinder?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A blend's components boil at different rates, so vapor drawn from a cylinder is richer in the lower-boiling components than the labeled mixture. Step 2: Charging vapor would install a shifted composition with different pressures and glide. Step 3: Drawing liquid takes all components in their correct proportions.</p>"
    }
  ],
  quiz: [
    {
      q: "R-410A at 40°F saturation corresponds to about:",
      choices: ["68.5 psig", "118 psig", "35 psig", "196 psig"],
      answer: 1,
      explanation: "Correct: (b). 118 psig is the R-410A anchor at 40°F. (a) is R-22 at 40°F. (c) is R-134a at 40°F. (d) is R-22 at 100°F — wrong refrigerant and wrong temperature."
    },
    {
      q: "A P/T conversion is only valid when the refrigerant is:",
      choices: ["Superheated", "Subcooled", "Saturated — liquid and vapor together", "Moving at high velocity"],
      answer: 2,
      explanation: "Correct: (c). The pressure-temperature lock exists only at saturation. (a) Superheated vapor's temperature floats above the chart value — that gap is superheat. (b) Subcooled liquid likewise sits below it. (d) Velocity has no role in the saturation relationship."
    },
    {
      q: "Temperature glide occurs in:",
      choices: ["All refrigerants equally", "Zeotropic blends whose components boil at different temperatures", "Only in the condenser", "Only when a system is overcharged"],
      answer: 1,
      explanation: "Correct: (b). Glide is a property of mixture composition. (a) Single refrigerants and near-azeotropic blends show essentially none. (c) Glide appears in both boiling and condensing. (d) Charge errors change pressures but do not create glide."
    },
    {
      q: "For a glide blend, superheat is calculated from the:",
      choices: ["Bubble point", "Dew point", "Average of outdoor temperatures", "Liquid line pressure"],
      answer: 1,
      explanation: "Correct: (b). Superheat measures vapor above the temperature where boiling finished, which is the dew point. (a) The bubble point is for subcooling, the liquid-side question. (c) Outdoor temperature plays no role in the conversion. (d) Superheat starts from suction pressure converted at dew, then compares with the suction line."
    },
    {
      q: "For a glide blend, subcooling is calculated from the:",
      choices: ["Dew point", "Bubble point", "Suction pressure", "Discharge line temperature"],
      answer: 1,
      explanation: "Correct: (b). Subcooling measures liquid below the temperature where condensing finished, the bubble point. (a) Dew belongs to superheat. (c) Subcooling converts from head pressure, not suction. (d) The comparison temperature is the liquid line temperature, not the discharge line."
    },
    {
      q: "An equalized R-22 system in a 100°F room should stand near:",
      choices: ["68.5 psig", "76 psig", "196 psig", "317 psig"],
      answer: 2,
      explanation: "Correct: (c). Standing pressure matches ambient on the chart: R-22 at 100°F is about 196 psig. (a) is R-22 at 40°F. (b) is R-22 at 45°F. (d) is R-410A at 100°F — the wrong refrigerant's anchor."
    },
    {
      q: "Standing pressure far above the chart value for the measured temperature most suggests:",
      choices: ["A perfectly evacuated system", "Non-condensable air in the system, a hotter true temperature, or wrong refrigerant", "Low charge", "A clean condenser"],
      answer: 1,
      explanation: "Correct: (b). Extra pressure needs an extra source: air adds partial pressure, or the premises (temperature, refrigerant identity) are wrong. (a) An evacuated system has almost no pressure. (c) Low charge in an equalized system still holding liquid and vapor still matches the chart. (d) Coil cleanliness does not affect an off system's standing pressure."
    },
    {
      q: "The bubble point is the temperature at which:",
      choices: ["Boiling finishes and vapor is fully superheated", "Boiling begins, and condensing finishes, at that pressure", "The compressor discharge peaks", "Frost first appears on a coil"],
      answer: 1,
      explanation: "Correct: (b). Bubble names the first bubble of vapor from liquid and the end of condensing. (a) describes the dew point territory at the end of boiling. (c) Discharge temperature is not a chart point. (d) Frost depends on surface temperature and moisture, not on blend chart definitions."
    }
  ],
  studyGuide: `
<h3>Module 8 — Pressure–Temperature Relationships & the P/T Chart: Quick Reference</h3>
<p><strong>Anchor table (memorize):</strong></p>
<ul>
<li>R-410A: 40°F ≈ 118 psig · 100°F ≈ 317 psig</li>
<li>R-22: 40°F ≈ 68.5 psig · 45°F ≈ 76 psig · 100°F ≈ 196 psig</li>
<li>R-134a: 40°F ≈ 35 psig · 100°F ≈ 124 psig</li>
<li>R-404A: 40°F ≈ 62 psig bubble · dew near 66 psig</li>
</ul>
<div class="formula">Superheat = line temp − saturation temp &nbsp;|&nbsp; Subcooling = saturation temp − line temp</div>
<p><strong>Glide:</strong> Zeotropic blends boil across a range. Bubble point = boiling starts / condensing ends. Dew point = boiling ends / condensing starts.</p>
<p><strong>The pair to memorize:</strong> Superheat uses DEW. Subcooling uses BUBBLE. (For R-410A and single refrigerants the points coincide.)</p>
<p><strong>Standing test:</strong> An off, equalized system must match the chart for its surrounding temperature. Higher means air, heat, or wrong refrigerant.</p>
<p><strong>Discipline:</strong> Nameplate refrigerant first, tool set to that refrigerant second, conversion third, judgment last.</p>
<p><strong>Self-check:</strong> Recite the anchor table until it is reflex, then practice the two conversions on every system you meet this week: suction pressure to coil temperature, head pressure to condensing temperature. Fluency here is what turns a gauge set from two dials into a description of the whole machine.</p>
`
};
