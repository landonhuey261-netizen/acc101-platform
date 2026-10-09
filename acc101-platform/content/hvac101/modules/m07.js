// HVAC 101 - Module 7: Evaporators & Heat Absorption
module.exports = {
  number: 7,
  slug: "evaporators-heat-absorption",
  title: "Evaporators & Heat Absorption",
  estTime: "3–4 hours",
  objectives: [
    "Describe how the evaporator absorbs heat and where in the coil boiling finishes and superheat begins.",
    "Calculate superheat from suction pressure and suction line temperature for a named refrigerant.",
    "Compare common evaporator coil constructions and the applications they serve.",
    "Explain frosting: when it is normal, when it is a fault, and what it does to capacity.",
    "Predict how low airflow across a coil changes suction pressure, superheat, and frost behavior."
  ],
  sections: [
    {
      heading: "Inside the Coil: Boiling, Then Superheating",
      html: `
<p>The evaporator receives a cold mixture of liquid and flash gas from the metering device and must return all vapor. Through most of its length, liquid refrigerant boils at the saturation temperature belonging to suction pressure, absorbing latent heat from the air or product on the other side of the tube wall. Somewhere in the final portion of a correctly fed coil, the last liquid boils away. From that point to the outlet, the vapor can only gain <strong>sensible</strong> heat, so its temperature rises above saturation: that rise is <strong>evaporator superheat</strong>, and it is the guarantee that no liquid leaves the coil.</p>
<div class="formula">Superheat = Suction line temperature − Saturation temperature (from suction pressure)</div>
<p><strong>Worked Example.</strong> An R-410A coil runs at 118 psig suction, which is a 40°F saturation temperature. A clamp on the suction line at the coil outlet reads 52°F. Superheat = 52 − 40 = <strong>12°F</strong>. The last 12 degrees of the vapor's temperature are its safety margin: heat the compressor can tolerate, proof of a fully boiled coil. If the line read 40°F, superheat would be zero and liquid could be leaving with the vapor — floodback conditions.</p>
<p>Where boiling finishes matters. If it finishes in the first third of the coil, the rest of the coil only warms vapor, which absorbs little heat compared with boiling; the coil is starved and capacity is wasted. If it never finishes, liquid exits. The well-fed coil finishes boiling near its outlet, using almost all its surface for latent work and keeping a modest superheat as the receipt.</p>
<div class="callout"><strong>Key idea:</strong> Boiling absorbs the heat; superheat is only the receipt proving boiling finished on time. Judge a coil by both its capacity and its superheat, never by coldness alone.</div>`
    },
    {
      heading: "Coil Types and Where You Meet Them",
      html: `
<p>Most comfort-cooling evaporators are <strong>finned-tube coils</strong>: copper or aluminum tubes carrying refrigerant, with thin fins multiplying the air-side surface, and a blower moving indoor air across them. Residential coils appear as A-shaped, slab, and other cabinet geometries, but the working principle is identical. Refrigeration evaporators for walk-ins and reach-ins use the same finned idea with wider fin spacing when frost is expected, plus fans sized for the box.</p>
<p><strong>Plate and bare-tube evaporators</strong> serve appliances and freezers: a tube bonded to a plate, or the plate itself forming the shelf, freezing by contact and natural convection. The household refrigerator's freezer section is the example every student already owns. <strong>Flooded and shell-and-tube evaporators</strong> belong to larger chiller work later in the program; there the refrigerant surrounds tubes carrying chilled water rather than boiling inside the tubes.</p>
<p>Design details carry service meaning. Fin spacing tight enough for comfort cooling clogs quickly with dust when filters are neglected. Coil materials must tolerate condensate, cleaning chemicals the manufacturer allows, and the refrigerant and oil inside. Drainage is part of the evaporator: a comfort coil wrings moisture from air all summer, and its drain pan and line are evaporator components for service purposes, because a plugged drain floods ceilings while the refrigeration itself works perfectly.</p>
<div class="callout"><strong>Key idea:</strong> Whatever its shape, every evaporator answers the same three questions: how does refrigerant flow through it, how does the load's air or product reach its surface, and where does the water go?</div>`
    },
    {
      heading: "Airflow: The Other Half of the Coil",
      html: `
<p>An evaporator has two working fluids: refrigerant inside the tubes and air (or product) outside them. Starve either side and capacity falls. <strong>Low airflow</strong> — dirty filter, matted coil face, failing blower, crushed duct — means less heat arrives at the coil surface. The refrigerant boils more slowly, suction pressure falls as the compressor keeps pulling, coil temperature drops below freezing, and moisture from the reduced airstream begins freezing on the fins instead of draining. Frost insulates the coil, airflow drops further, and the spiral ends with a block of ice, low suction, and a customer reporting warm air from a system that is technically very cold in one place.</p>
<p>Superheat responds by device type. On a fixed-orifice system, low airflow typically drives superheat <em>down</em>, because the metering keeps pushing refrigerant the coil cannot boil. On a TXV system, the valve closes down to defend its superheat setting, so superheat may look near normal while suction pressure and capacity quietly fall — another case of the controlled variable going quiet while the uncontrolled ones tell the story.</p>
<p><strong>Worked reasoning.</strong> A fixed-piston R-22 system at 68.5 psig suction (40°F saturation) with a 50°F suction line has 10°F superheat and cools well. A month later the filter is matted: suction pressure and superheat both sag, and frost creeps across the coil. Step 1: The refrigerant side was untouched, so a charge explanation is unlikely. Step 2: The air side changed, and less heat arrived. Step 3: Restore airflow first, let the coil thaw fully, then re-measure before reaching for a manifold decision about charge.</p>
<div class="callout"><strong>Key idea:</strong> Check airflow before charge — the trade's most repeated sentence exists because low airflow perfectly impersonates low charge on a gauge set.</div>`
    },
    {
      heading: "Frost: Normal, Expected, and Faulty",
      html: `
<p>Frost forms whenever a surface runs below freezing in moist air. Whether it is normal depends entirely on the application. A low-temperature freezer coil is <em>designed</em> to frost between defrosts; its fin spacing, fans, and defrost system assume ice and remove it on schedule. A medium-temperature cooler coil hovering near freezing may frost lightly in humid weather and clear during off cycles. A comfort-cooling coil, which should run above freezing under normal indoor conditions, should <strong>never</strong> frost in correct operation; frost there is a fault report, not a personality trait.</p>
<p>Cooling-coil frost has a short suspect list: low airflow (filter, blower, dirty coil, duct trouble), low charge starving the coil so its early circuits run excessively cold, a restriction doing the same thing locally, or controls running the system in weather or loads it was not meant for. Each suspect also leaves fingerprints elsewhere — superheat direction, subcooling, temperature split across the coil — and Module 12 teaches reading them together.</p>
<p>Frost is also self-aggravating. Ice occupies the space between fins, throttling airflow; throttled airflow drops coil temperature further; the ice frontier advances toward the suction line and, in bad cases, the compressor. Running a frosted coil to get through the weekend converts a filter change into a compressor risk. The correct field response is to stop the cooling, keep air moving if the design allows fan-only thawing, find the cause while the ice melts, and never chip ice off a coil with a tool that can puncture a tube.</p>
<div class="callout"><strong>Key idea:</strong> Frost is information about surface temperature and airflow, and it compounds itself. Thaw completely before final measurements — a half-frosted coil lies to gauges.</div>`
    },
    {
      heading: "Measuring at the Evaporator and a Recap",
      html: `
<p>Field measurements at the evaporator are few and disciplined. Suction pressure at the service port converts through the correct refrigerant's P/T data to saturation temperature. Suction line temperature is clamped on clean, bare, straight tubing near the coil outlet (at the TXV bulb location when judging evaporator superheat), with the clamp insulated from ambient air when accuracy matters. Air temperatures entering and leaving the coil, taken with the same care, complete the picture of how much heat the air actually surrendered.</p>
<p><strong>Worked Example.</strong> An R-22 cooler shows 76 psig suction. Step 1: R-22 at 76 psig is a 45°F saturation temperature (course anchor). Step 2: The suction line at the outlet measures 57°F. Step 3: Superheat = 57 − 45 = <strong>12°F</strong>. Step 4: Interpretation — boiling finished inside the coil with a healthy margin; if box temperature is still high, look at airflow, load, or run time rather than assuming feed is wrong.</p>
<p><strong>Recap:</strong></p>
<ul>
<li>Evaporator work is latent: boiling absorbs the heat; superheat is the sensible receipt after boiling ends.</li>
<li>Superheat = suction line temperature − saturation temperature from suction pressure.</li>
<li>Finned coils serve most A/C and refrigeration; plate coils serve appliances; spacing and drainage are design decisions with service consequences.</li>
<li>Low airflow drops suction pressure, distorts superheat by device type, and starts the frost spiral.</li>
<li>Cooling coils should not frost. Freezer coils frost by design and defrost on schedule.</li>
</ul>`
    }
  ],
  keyTerms: [
    { term: "Evaporator", def: "The coil where low-pressure liquid boils and absorbs heat from air or product." },
    { term: "Evaporator superheat", def: "Suction line temperature at the coil outlet minus the saturation temperature for the suction pressure." },
    { term: "Finned-tube coil", def: "An evaporator of refrigerant tubes with thin metal fins multiplying air-side surface area." },
    { term: "Plate evaporator", def: "An evaporator built into or bonded to a plate, common in household refrigerators and freezers." },
    { term: "Starved coil", def: "An evaporator whose boiling finishes too early, leaving much of its surface doing little cooling work." },
    { term: "Flooded coil (overfed)", def: "An evaporator fed so much refrigerant that liquid leaves the outlet, threatening the compressor." },
    { term: "Temperature split", def: "The difference between air temperature entering and leaving a coil, an airflow and capacity indicator." },
    { term: "Frosting", def: "Ice forming on a coil surface below freezing in moist air; normal for low-temperature coils, a fault on cooling coils." },
    { term: "Defrost", def: "The scheduled removal of frost from a refrigeration evaporator by heat or off-cycle melting." },
    { term: "Condensate", def: "Water wrung from air at a cooling coil, collected in a drain pan and carried away by a drain line." },
    { term: "Suction saturation temperature", def: "The boiling temperature that corresponds to the measured suction pressure for the refrigerant in use." },
    { term: "Boiling point control", def: "The fact that evaporator temperature is set by suction pressure through the pressure-temperature relationship." },
    { term: "Airflow starvation", def: "Reduced air across a coil from filters, blower, coil fouling, or duct faults, lowering heat delivery to the refrigerant." },
    { term: "Coil load", def: "The heat the evaporator is asked to absorb, from air, product, infiltration, and internal sources." },
    { term: "Latent work", def: "Heat absorbed by boiling; the evaporator's main output, as opposed to the small sensible work of superheating vapor." },
    { term: "Bulb location", def: "The suction line position at the evaporator outlet where the TXV bulb and superheat measurements belong." }
  ],
  video: {
    title: "Explaining Superheat and Subcooling to Your Apprentice!",
    embedUrl: "https://www.youtube.com/embed/2SEDe0v8VPY",
    note: "A field explanation of superheat and subcooling aimed at new technicians. The pool has no evaporator-only video, so this verified superheat lesson is the closest match: watch the evaporator-side reasoning, where boiling ends and superheat begins, which is the heart of this module.",
    more: [
      { title: "Superheat & Total Superheat Explained!", url: "https://www.youtube.com/watch?v=vLGzCOUf1X8" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> An R-410A evaporator runs at 118 psig with a suction line temperature of 55°F at the outlet. Compute superheat and judge it.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: 118 psig is 40°F saturation for R-410A. Step 2: Superheat = 55 − 40 = <strong>15°F</strong>. Step 3: That is a generous margin — boiling is finishing inside the coil with room to spare; if capacity is low, this value leans toward a starved coil rather than floodback.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A suction line measures exactly the saturation temperature for its pressure. What is the superheat, what might be leaving the coil, and why does it matter?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Superheat = saturation − saturation = <strong>0°F</strong>. Step 2: At zero superheat there is no proof boiling finished; liquid can be leaving with the vapor. Step 3: That is floodback, which dilutes compressor oil and can slug the machine, so the cause — overfeed or overcharge by device type — must be corrected.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Explain why a starved coil loses capacity even though its inlet is extremely cold.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Capacity comes from boiling, which absorbs latent heat across the coil surface. Step 2: In a starved coil, boiling ends in the first circuits and the remaining surface only warms vapor sensibly, absorbing little. Step 3: Cold at the inlet is therefore a symptom of too little refrigerant spread over the coil, not of strong cooling.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A homeowner's A/C coil is a block of ice, the filter is collapsed and filthy, and the suction line is frosted to the outdoor unit. Give the repair sequence.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Stop cooling and thaw the coil fully, using fan-only operation if available; never chip ice with tools. Step 2: Replace the filter and verify blower operation and airflow. Step 3: Restart, let conditions stabilize, then measure superheat and pressures. Step 4: Only if readings are still wrong with airflow proven good is a refrigerant-side fault pursued.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Why can a TXV system hide low airflow behind a near-normal superheat reading, and which readings betray it instead?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The TXV's job is to hold superheat, so it closes down as airflow and load fall, keeping its controlled number near target. Step 2: The uncontrolled readings tell the truth: suction pressure falls, coil temperature drops toward frosting, temperature split and delivered capacity fall. Step 3: Diagnose from the whole pattern, not the one defended number.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> An R-134a reach-in shows 35 psig suction and a 47°F suction line at the outlet. Compute superheat.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: R-134a at 35 psig is a 40°F saturation temperature. Step 2: Superheat = 47 − 40 = <strong>7°F</strong>. Step 3: A modest positive margin — boiling is finishing in the coil; interpret further only with box temperature and run behavior.</p>"
    }
  ],
  quiz: [
    {
      q: "Superheat at the evaporator outlet is:",
      choices: ["Saturation temperature minus line temperature", "Suction line temperature minus saturation temperature for the suction pressure", "Discharge temperature minus suction temperature", "Liquid line temperature minus saturation temperature"],
      answer: 1,
      explanation: "Correct: (b). Vapor warmer than its saturation point proves boiling finished. (a) reverses the subtraction, giving a negative value for healthy superheat. (c) mixes discharge into a low-side measurement. (d) is the shape of the subcooling calculation, on the wrong line and side."
    },
    {
      q: "R-410A suction is 118 psig and the suction line is 48°F. Superheat is:",
      choices: ["8°F", "12°F", "40°F", "0°F"],
      answer: 0,
      explanation: "Correct: (a). 118 psig is 40°F saturation; 48 − 40 = 8°F. (b) would need a 52°F line. (c) is the saturation temperature itself, not a difference. (d) would need the line at exactly 40°F."
    },
    {
      q: "In a correctly fed evaporator, the last liquid boils away:",
      choices: ["At the metering device", "In the first circuit, always", "Near the coil outlet, leaving a modest superheat", "In the suction line, by design"],
      answer: 2,
      explanation: "Correct: (c). Finishing near the outlet uses nearly all the surface for latent work while keeping a safety margin. (a) Only flash gas forms at the metering device. (b) Finishing in the first circuit describes a starved coil. (d) Boiling in the suction line means liquid left the coil — floodback, not design."
    },
    {
      q: "Low airflow across a fixed-orifice cooling coil typically produces:",
      choices: ["High suction pressure and high superheat", "Falling suction pressure, falling superheat, and frost risk", "High subcooling and a hot coil", "No measurable change"],
      answer: 1,
      explanation: "Correct: (b). Less heat arrives, boiling slows, pressure sags, the piston keeps feeding, and superheat shrinks as the coil ices. (a) describes a starved-charge pattern under good airflow, the classic impersonation to avoid. (c) Subcooling is a condenser-side value and a frosted coil is cold, not hot. (d) Airflow is half the coil's work; changing it changes everything."
    },
    {
      q: "Frost on a comfort-cooling evaporator is:",
      choices: ["Normal on humid days", "A fault indicating airflow, charge, or restriction trouble", "Proof of excellent capacity", "Caused by too much airflow"],
      answer: 1,
      explanation: "Correct: (b). Cooling coils are meant to run above freezing; frost starts the self-aggravating ice spiral. (a) Low-temperature freezer coils frost by design; comfort coils do not. (c) Frost throttles airflow and capacity falls. (d) Excess airflow warms the coil surface, opposing frost."
    },
    {
      q: "The TXV sensing bulb measures conditions at:",
      choices: ["The condenser outlet", "The liquid line midpoint", "The evaporator outlet on the suction line", "The compressor discharge"],
      answer: 2,
      explanation: "Correct: (c). The valve controls outlet superheat, so its bulb lives on the suction line at the coil outlet, clamped and insulated. (a) and (b) are liquid-side points used for subcooling, which the bulb does not sense. (d) Discharge temperature is far too hot and unrelated to evaporator feed control."
    },
    {
      q: "A starved coil loses capacity mainly because:",
      choices: ["Its surface is too cold for air to touch", "Most of its surface only warms vapor sensibly instead of boiling liquid latently", "The fins are too far apart", "Superheat absorbs more heat than boiling"],
      answer: 1,
      explanation: "Correct: (b). Latent boiling does the heavy lifting; a starved coil retires most of its surface to light sensible duty. (a) Cold surfaces absorb heat readily when refrigerant is present to boil. (c) Fin spacing is a design choice, not starvation. (d) The comparison is backwards: per pound, boiling absorbs far more than superheating."
    },
    {
      q: "Before taking final superheat readings on a coil found frosted, you should:",
      choices: ["Add refrigerant to raise pressure", "Chip the ice off quickly with a screwdriver", "Thaw the coil completely and fix the airflow cause", "Close the liquid service valve"],
      answer: 2,
      explanation: "Correct: (c). A frosted coil's readings reflect ice, not steady operation, and the cause is usually airflow. (a) Charging into an airflow fault overcharges a thawed system. (b) Chipping risks puncturing a tube and turning service into a leak. (d) Valving off does nothing to thaw or diagnose."
    }
  ],
  studyGuide: `
<h3>Module 7 — Evaporators & Heat Absorption: Quick Reference</h3>
<div class="formula">Superheat = Suction line temperature − Saturation temperature (from suction pressure)</div>
<p><strong>Anchors:</strong> R-410A 118 psig = 40°F; R-22 68.5 psig = 40°F, 76 psig = 45°F; R-134a 35 psig = 40°F. Line 52°F on R-410A at 118 psig = 12°F superheat.</p>
<p><strong>Healthy picture:</strong> Boiling through most of the coil, finishing near the outlet, modest positive superheat leaving. Zero superheat = possible liquid leaving. Very high superheat = starved coil.</p>
<p><strong>Airflow:</strong> Half the coil's job. Low airflow drops suction pressure, drops superheat on fixed systems, gets hidden by the valve on TXV systems, and starts frost. Check airflow before charge.</p>
<p><strong>Frost:</strong> By design on low-temp coils with defrost; a fault on comfort coils. Thaw fully, fix the cause, then measure. Never chip ice with tools.</p>
<p><strong>Coils:</strong> Finned-tube for A/C and refrigeration, plate for appliances. Drainage is part of the evaporator's job.</p>
<p><strong>Self-check:</strong> For any evaporator you should be able to point to where boiling probably ends, state the superheat that proves it, and name the first airflow check you would make if the coil were frosted. Those three answers together are the evaporator half of every diagnosis you will run in Module 12.</p>
`
};
