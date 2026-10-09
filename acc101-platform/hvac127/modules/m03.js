// HVAC 127 - Module 3: Control Components: Sensors & Transducers
module.exports = {
  number: 3,
  slug: "sensors-and-transducers",
  title: "Control Components: Sensors & Transducers",
  estTime: "3–4 hours",
  objectives: [
    "Explain how thermistors, RTDs, and thermocouples each sense temperature, and state the resistance direction of an NTC thermistor.",
    "Scale any 4–20 mA or 0–10 V signal to percent of range and to engineering units, and back again.",
    "Explain why 4 mA is called a live zero and what diagnostic power it gives you.",
    "Describe pressure and humidity sensing elements used in HVAC controls and their typical outputs.",
    "Match a sensor to its controller input type and predict the symptom when the two are mismatched."
  ],
  sections: [
    {
      heading: "Temperature Sensing: Thermistors, RTDs, Thermocouples",
      html: `
<p>Three sensing technologies dominate HVAC temperature measurement, and you must know each one's personality.</p>
<ul>
<li><strong>Thermistors</strong> are semiconductor beads whose resistance changes steeply with temperature. The HVAC standard is the <strong>NTC</strong> (negative temperature coefficient) type: as temperature rises, resistance <em>falls</em>. A widely used class is the "10K" sensor, named for its resistance at room temperature (77°F/25°C). Thermistors are inexpensive, sensitive, and the default choice for space, duct, and pipe sensors in unit controls and DDC — but each resistance curve type (10K Type II, Type III, and others) is different, so the controller must be configured for the exact sensor type installed. A mismatched curve reads plausibly wrong temperatures, off by a few degrees in the middle and worse at the extremes.</li>
<li><strong>RTDs</strong> (resistance temperature detectors) use a metal element, usually platinum, whose resistance rises with temperature in a nearly straight line. They are more accurate and stable than thermistors over wide ranges and dominate industrial and chiller work, at higher cost and smaller signal per degree.</li>
<li><strong>Thermocouples</strong> generate a tiny voltage where two metals join; they are rugged and wide-range but produce a millivolt signal needing special inputs, so in comfort HVAC they appear mainly in flame-proving and specialty roles rather than space control.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> For an NTC thermistor, hot = low resistance, cold = high resistance. State that direction without hesitating; it is the difference between diagnosing a sensor and condemning one backwards. An open sensor wire on an NTC input reads as extremely cold (resistance infinite); a shorted wire reads as extremely hot.</div>`
    },
    {
      heading: "Standard Signals: 4–20 mA and 0–10 V",
      html: `
<p>Raw sensor physics (a bead's resistance, a cell's capacitance) does not travel well across a building. So field devices called <strong>transmitters</strong> and <strong>transducers</strong> convert the measurement into a standard signal the controller reads at a distance. Two standards rule HVAC work:</p>
<ul>
<li><strong>4–20 mA current loop:</strong> the measurement is encoded as a current between 4 mA (0% of range) and 20 mA (100% of range), flowing in a two-wire loop that often also powers the transmitter. Current is stubborn: it does not fade with wire length the way voltage does, so long runs stay accurate.</li>
<li><strong>0–10 VDC voltage signal:</strong> 0 V = 0% of range, 10 V = 100%. Simple and universal on DDC inputs/outputs, but long runs and poor grounds can shift it, and it needs separate power wiring.</li>
</ul>
<div class="formula">Signal value = 4 mA + 16 mA × (fraction of range) — at 50% of range: 4 + 16 × 0.50 = 12 mA. For 0–10 V: value = 10 V × fraction — at 50%: 5.0 V.</div>
<p><strong>Worked example:</strong> A duct pressure transmitter is ranged 0 to 2 in. w.c. and outputs 4–20 mA. You measure 16 mA in the loop. Fraction = (16 − 4) ÷ 16 = 0.75. Duct pressure = 0.75 × 2 = <strong>1.5 in. w.c.</strong> Reverse it just as fast: a CO₂ transmitter ranged 0–2000 ppm reading 1000 ppm (50%) must output 4 + 16 × 0.5 = <strong>12 mA</strong>. If you measure anything else, something in the chain — sensor, transmitter scaling, or controller configuration — disagrees with reality, and you have a testable fault.</p>
<div class="callout"><strong>Key idea:</strong> Scaling is a two-way street. Given the range and the signal, compute the value; given the value, compute the signal. Technicians who can do both directions in their head find mis-scaled points in minutes.</div>`
    },
    {
      heading: "The Live Zero and What It Buys You",
      html: `
<p>Why start the current standard at 4 mA instead of 0? Because 0 mA is ambiguous: it could mean "the measurement is truly at zero," or it could mean the wire is cut, the transmitter is dead, or the loop supply failed. Starting at 4 mA gives the signal a <strong>live zero</strong>: 4 mA means "I am alive and measuring zero." A reading of 0 mA is then unmistakably a broken loop — the controller can alarm it, and you can diagnose it from the front end before climbing a ladder.</p>
<p>The same logic appears, weaker, in other signals. A 0–10 V signal cannot distinguish a true zero reading from a cut wire (both are 0 V), which is one reason some manufacturers use 2–10 V for critical analog outputs: below 2 V means fault. When you see a signal choice on a spec sheet, ask what failure it can and cannot announce — that question separates people who wire devices from people who design systems.</p>
<div class="callout"><strong>Key idea:</strong> A meter reading of exactly 0 mA on a 4–20 mA loop is never a measurement. It is a broken loop, a dead transmitter, or a tripped/open loop supply until proven otherwise.</div>
<p><strong>Worked example:</strong> A humidity transmitter (0–100% RH, 4–20 mA) reports a constant value and the loop measures 0 mA. The controller's displayed "0% RH" is fiction — the input is seeing an open loop. Your checks, in order: loop power present? continuity of the pair? transmitter powered at its terminals? Each is a yes/no test that splits the fault domain in half, the same half-split discipline Module 12 formalizes.</p>`
    },
    {
      heading: "Pressure and Humidity Sensing",
      html: `
<p><strong>Pressure.</strong> HVAC controls sense pressure in two forms. <em>Differential pressure</em> sensors compare two points — across a filter (clogging raises the difference), across a fan (proving it moves air), or in a duct against the space (the static-pressure control of Module 2's example). Piezoresistive and capacitive cells do the sensing; the output is almost always a scaled 4–20 mA or 0–10 V signal. <em>Static/refrigerant pressure transducers</em> screw onto a tap and report an absolute or gauge pressure for unit boards and chiller controls — the same transducers whose suction and discharge values feed compressor protection (Module 7).</p>
<p><strong>Humidity.</strong> Modern humidity sensors are polymer capacitive elements: a thin film absorbs moisture in proportion to relative humidity and its capacitance changes accordingly, and electronics convert that to a standard signal. They are accurate enough for comfort and dehumidification control but hate contamination — dust, aerosols, and condensate on the element cause drift, which is why a humidity reading that disagrees with a handheld reference often means a fouled or aged element rather than a controller fault. Older <em>humidistats</em> used moisture-sensitive mechanical elements (nylon, hair) driving a switch; you will still meet them on legacy equipment.</p>
<div class="callout"><strong>Key idea:</strong> Match the sensor's range to the job. A 0–5 in. w.c. transmitter measuring a 0.2 in. filter drop wastes most of its span and its accuracy; range selection is an accuracy decision, made at specification time and paid for at troubleshooting time.</div>
<p>Placement rules apply to every sensor type: measure the thing you actually care about (mixed air, not coil discharge, for an averaging duty), keep sensors out of direct sun, supply-air blasts, and exterior-wall cold sinks, and use averaging elements where air stratifies. A perfectly accurate sensor in the wrong place is a precise lie.</p>`
    },
    {
      heading: "Matching Sensors to Inputs — and Mismatch Symptoms",
      html: `
<p>Every controller input expects a specific electrical personality: a resistance curve, a current range, a voltage range, or a dry contact. The sensor and the input configuration must agree on three things — <strong>type, range, and units</strong> — and disagreement produces characteristic symptoms you can learn to read:</p>
<ul>
<li><strong>Wrong thermistor curve selected:</strong> readings plausible but off, with the error growing toward temperature extremes. Classic after a board swap where the new board defaulted to a different curve.</li>
<li><strong>Range mismatch:</strong> a transmitter ranged 0–5 in. feeding an input configured 0–2.5 in. makes every reading double reality — the system controls perfectly to a fiction that's 2× off.</li>
<li><strong>Signal type mismatch:</strong> a voltage output landed on a current input (or the reverse) reads at a rail — pinned at zero, full scale, or nonsense — because the input circuit cannot interpret what arrived.</li>
<li><strong>Unit mismatch:</strong> °F vs °C configuration errors produce readings off by a conversion, caught instantly by comparing with a handheld thermometer.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Calibrating out a configuration error. If the sensor is the wrong type for the input setup, no offset adjustment fixes the curve — the readings will agree at one temperature and disagree everywhere else. Fix the configuration or the sensor, then verify at two points, not one.</div>
<p>The verification habit that closes this module: carry a trusted handheld thermometer/hygrometer/meter, and never believe a control sensor until it agrees with yours at the same location. Module 12 builds commissioning checkout on exactly this foundation.</p>`
    }
  ],
  keyTerms: [
    { term: "Thermistor", def: "A semiconductor temperature sensor whose resistance changes steeply with temperature." },
    { term: "NTC thermistor", def: "Negative temperature coefficient thermistor: resistance falls as temperature rises; the HVAC standard type." },
    { term: "RTD", def: "Resistance temperature detector, usually platinum; resistance rises nearly linearly with temperature." },
    { term: "Thermocouple", def: "A junction of two metals producing a tiny temperature-dependent voltage." },
    { term: "Transmitter", def: "A device converting a sensor's raw signal into a standard transmission signal such as 4–20 mA." },
    { term: "Transducer", def: "A device converting one form of energy/signal to another; pressure transducers output standard electrical signals." },
    { term: "4–20 mA loop", def: "A two-wire current signal standard: 4 mA = 0% of range, 20 mA = 100% of range." },
    { term: "0–10 V signal", def: "A voltage signal standard: 0 V = 0% of range, 10 V = 100% of range." },
    { term: "Live zero", def: "A nonzero signal value (4 mA) representing a true zero measurement, so 0 mA unambiguously means a fault." },
    { term: "Scaling", def: "The mapping between a signal and engineering units, defined by the instrument's range." },
    { term: "Span", def: "The width of an instrument's range (e.g., 2 in. w.c. for a 0–2 in. transmitter), across which the signal spans 4–20 mA." },
    { term: "Differential pressure", def: "The difference between two pressures, sensed across filters, fans, and ducts." },
    { term: "Capacitive humidity sensor", def: "A polymer-film element whose capacitance varies with relative humidity; the modern standard." },
    { term: "Sensor curve type", def: "The specific resistance-versus-temperature table a thermistor follows; the controller must be configured to match." },
    { term: "Drift", def: "A sensor's gradual loss of accuracy over time or from contamination." },
    { term: "Averaging sensor", def: "A long sensing element that reports the average temperature along its length, used where air stratifies." },
    { term: "Engineering units", def: "The real-world units of a measurement (°F, in. w.c., ppm) shown after scaling a raw signal." },
    { term: "Dry contact", def: "An unpowered switch contact used as a signal; it carries no voltage of its own." }
  ],
  video: {
    title: "Temperature Transmitter Explained | Connection and Calibration",
    embedUrl: "https://www.youtube.com/embed/Kq22wxqzJ7g",
    note: "An instrumentation walk-through of how temperature sensors pair with transmitters that output the standard 4–20 mA signal. Watch the connections and calibration discussion and connect each step to this module's scaling math: a transmitter is where a raw sensor becomes a signal a controller can trust.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A supply-air transmitter is ranged −40°F to 140°F on a 4–20 mA loop. (a) What current represents 50°F? (b) What temperature does 8 mA represent?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Span = 140 − (−40) = 180°F. Step 2 (a): Fraction for 50°F = (50 − (−40)) ÷ 180 = 90 ÷ 180 = 0.50. Current = 4 + 16 × 0.50 = <strong>12 mA</strong>. Step 3 (b): Fraction for 8 mA = (8 − 4) ÷ 16 = 0.25. Temperature = −40 + 0.25 × 180 = −40 + 45 = <strong>5°F</strong>. Check both directions before trusting either.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A CO₂ sensor ranged 0–2000 ppm outputs 0–10 V. The controller reads 3.5 V. What CO₂ level is it reporting, and what voltage should appear if the true level is 1400 ppm?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Fraction = 3.5 ÷ 10 = 0.35, so CO₂ = 0.35 × 2000 = <strong>700 ppm</strong>. Step 2: For 1400 ppm, fraction = 1400 ÷ 2000 = 0.70, so voltage = 0.70 × 10 = <strong>7.0 V</strong>. If the room were truly at 1400 ppm while the signal sits at 3.5 V, the sensor or its scaling is lying by half.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A space has NTC thermistor sensors wired to a new controller. Every room reads 4–6°F warmer than a handheld thermometer, with the error larger on cold mornings. Diagnose the most likely cause and the correct fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A consistent, temperature-dependent error across all sensors points to a shared configuration cause, not individual sensor failures. Step 2: Most likely the controller is set to the <strong>wrong thermistor curve type</strong> for the installed sensors. Step 3: Fix = set the input to the exact curve the sensor manufacturer specifies, then verify at two temperatures. Adding an offset 'calibration' would only agree at one temperature and stay wrong elsewhere.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A 4–20 mA humidity loop measures 0 mA at your meter. The front end displays 0% RH. Explain why the display is misleading and list your first three checks.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: With a live zero, a real 0% RH measurement must read 4 mA; 0 mA means the loop is broken, so '0%' is a fiction produced by a dead input. Step 2: First checks: loop power supply present and on; continuity of the signal pair (open wire or loose terminal); power measured at the transmitter's own terminals. Step 3: Only after the loop carries current again does a sensor accuracy check mean anything.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A duct static transmitter is ranged 0–5 in. w.c. and outputs 4–20 mA. The loop reads 8.8 mA. (a) What pressure is that? (b) A tech suggests using this same transmitter to watch a filter drop expected around 0.2 in. Explain the accuracy concern qualitatively.</p>",
      solution: "<p><strong>Solution:</strong> Step 1 (a): Fraction = (8.8 − 4) ÷ 16 = 0.30. Pressure = 0.30 × 5 = <strong>1.5 in. w.c.</strong> Step 2 (b): 0.2 in. is only 4% of this transmitter's span, so small percentage errors of the instrument become large relative errors in the reading. Step 3: A narrow-range transmitter matched to the job reads its working band in the fat part of its span and is the correct specification for filter monitoring.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> State the expected behavior of an NTC thermistor input when (a) a sensor lead breaks open, and (b) the two sensor leads short together. Name the temperature each would appear to report.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: NTC means resistance falls as temperature rises; the controller infers temperature from resistance. Step 2 (a): An open lead = infinite resistance, which the controller interprets as <strong>extremely cold</strong> (often below range / sensor fault). Step 3 (b): A short = near-zero resistance, interpreted as <strong>extremely hot</strong>. These two signatures let you separate wiring faults from element faults with one meter reading.</p>"
    }
  ],
  quiz: [
    {
      q: "An NTC thermistor's resistance, as the temperature it senses increases:",
      choices: ["Increases", "Decreases", "Stays constant", "Becomes infinite"],
      answer: 1,
      explanation: "Correct: (b). NTC means negative temperature coefficient — hotter, lower resistance. (a) describes a PTC device or an RTD's direction, not an NTC thermistor. (c) would make it useless as a sensor; its whole value is that resistance changes. (d) describes an open circuit fault, not normal warm operation."
    },
    {
      q: "A 4–20 mA transmitter ranged 0–100% RH reads 16 mA. The measured humidity is:",
      choices: ["16% RH", "60% RH", "75% RH", "80% RH"],
      answer: 2,
      explanation: "Correct: (c). Fraction = (16 − 4) ÷ 16 = 12/16 = 0.75 → 75% RH. (a) confuses the milliamp value with the percentage. (b) results from computing 16/20 or similar wrong mapping. (d) would require (x − 4)/16 = 0.80, i.e., 16.8 mA, not 16."
    },
    {
      q: "The 4 mA bottom of a current loop is called a live zero because:",
      choices: ["It powers the building's lighting", "It distinguishes a true zero measurement from a broken loop (0 mA)", "It makes the signal wireless", "It doubles the span of the transmitter"],
      answer: 1,
      explanation: "Correct: (b). 4 mA = 'alive, measuring zero'; 0 mA = fault, unambiguously. (a) The loop powers the transmitter, not building systems. (c) The loop is wired by definition. (d) The span remains 16 mA wide; live zero adds diagnostic meaning, not span."
    },
    {
      q: "A humidity sensor's reading drifts high over months while a handheld reference stays consistent with conditions. Most likely cause:",
      choices: ["The controller's clock is wrong", "A contaminated or aged sensing element", "The loop is scaled 0–10 V", "The setpoint is too low"],
      answer: 1,
      explanation: "Correct: (b). Polymer capacitive elements drift when fouled by dust, aerosols, or condensate — a classic field pattern. (a) A clock fault affects schedules, not measured values. (c) A scaling choice made at installation would be wrong from day one, not drift over months. (d) Setpoint error changes control behavior, not the sensor's reported value."
    },
    {
      q: "A 0–10 V output at 40% of its range should measure:",
      choices: ["0.4 V", "2.5 V", "4.0 V", "14 V"],
      answer: 2,
      explanation: "Correct: (c). 0.40 × 10 V = 4.0 V. (a) misplaces the decimal; 0.4 V is 4% of range. (b) is 25% of range. (d) exceeds the signal's maximum and indicates a wiring or measurement error, not a valid 0–10 V value."
    },
    {
      q: "A replacement control board defaults to a different thermistor curve than the sensors installed. The expected symptom is:",
      choices: ["All sensors read exactly zero", "Readings are plausible but off, with error growing toward temperature extremes", "The display shows only error codes", "Every output stops working"],
      answer: 1,
      explanation: "Correct: (b). Two different resistance curves roughly agree near room temperature and diverge at the ends, producing plausible-but-wrong readings. (a) Zero readings suggest an open/short fault, not a curve mismatch. (c) The board is happily converting — just with the wrong table. (d) Outputs depend on readings but do not stop; control continues on bad data."
    },
    {
      q: "Filter condition is monitored in modern systems by:",
      choices: ["A differential pressure sensor across the filter", "A thermocouple in the airstream", "Counting fan run hours only", "A humidity sensor at the return"],
      answer: 0,
      explanation: "Correct: (a). As a filter loads, pressure drop across it rises; a differential sensor sees that directly. (b) Temperature does not reveal filter loading. (c) Run-hours is a crude time-based proxy some systems use, but it measures the calendar, not the filter. (d) Humidity says nothing about pressure drop or dirt."
    },
    {
      q: "A pressure transmitter ranged 0–3 in. w.c. on a 4–20 mA loop outputs 10 mA. Duct pressure is:",
      choices: ["0.94 in. w.c.", "1.125 in. w.c.", "1.5 in. w.c.", "1.875 in. w.c."],
      answer: 1,
      explanation: "Correct: (b). Fraction = (10 − 4) ÷ 16 = 0.375. Pressure = 0.375 × 3 = 1.125 in. w.c. (a) results from dividing by the wrong span. (c) would be 12 mA (50%). (d) would be 14 mA (62.5%). Always subtract the 4 mA live zero before taking the fraction."
    }
  ],
  studyGuide: `
<h3>Module 3 — Sensors & Transducers: Quick Reference</h3>
<ul>
<li><strong>NTC thermistor:</strong> temperature up → resistance DOWN. Open lead reads extremely cold; shorted lead reads extremely hot. "10K" = its nominal resistance class at 77°F (25°C). Controller must be set to the exact curve type.</li>
<li><strong>RTD:</strong> metal (platinum) element, resistance rises with temperature, near-linear, high accuracy/stability. <strong>Thermocouple:</strong> self-generated millivolts at a metal junction; specialty/flame roles in HVAC.</li>
<li><strong>4–20 mA:</strong> value = 4 + 16 × fraction. Fraction = (mA − 4) ÷ 16. 50% of range = 12 mA. <strong>Live zero:</strong> 4 mA = alive-at-zero; 0 mA = broken loop/dead transmitter.</li>
<li><strong>0–10 V:</strong> value = 10 × fraction. No live zero — 0 V cannot be distinguished from a cut wire.</li>
<li><strong>Differential pressure</strong> across filters/fans/ducts proves airflow and filter loading. <strong>Humidity</strong> sensing is polymer-capacitive; contamination causes drift.</li>
<li><strong>Three-way match:</strong> sensor type, range, and units must match the input configuration. Curve mismatch = plausible readings, error worst at extremes. Verify at two points with a handheld reference.</li>
</ul>
<p><strong>Formula drill:</strong> given range and mA, get units; given units, get mA. Both directions, in your head, before you climb.</p>`
};
