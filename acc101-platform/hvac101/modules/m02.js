// HVAC 101 - Module 2: Heat, Temperature & Pressure Fundamentals
module.exports = {
  number: 2,
  slug: "heat-temperature-pressure-fundamentals",
  title: "Heat, Temperature & Pressure Fundamentals",
  estTime: "3–4 hours",
  objectives: [
    "Distinguish heat from temperature and calculate sensible heat changes with the BTU definition.",
    "Explain latent heat and why boiling refrigerant absorbs large amounts of heat without a temperature change.",
    "Define saturation and explain why a saturated refrigerant's temperature and pressure rise and fall together.",
    "Convert between psig and psia and explain what a vacuum gauge reading in microns actually measures.",
    "Apply pressure-temperature thinking to predict what happens when a sealed refrigerant cylinder warms or cools."
  ],
  sections: [
    {
      heading: "Heat Is Energy, Temperature Is a Reading",
      html: `
<p><strong>Heat</strong> is energy in transfer, measured in British thermal units. One <strong>BTU</strong> is the heat that raises one pound of water by one degree Fahrenheit. <strong>Temperature</strong> is different: it is a measure of the average molecular motion in a substance, read in degrees. A thimble of boiling water and a bathtub of warm water can have very different temperatures, yet the tub holds far more total heat because it holds far more pounds of water. Technicians who confuse the two misread systems, because gauges report pressures and thermometers report temperatures, while the customer cares about heat moved.</p>
<p><strong>Worked Example — sensible heat in water.</strong> How much heat raises 10 pounds of water from 60°F to 80°F? Step 1: Temperature change is 80 − 60 = 20°F. Step 2: Sensible heat = pounds x temperature change, using 1 BTU per pound per degree for water. Step 3: 10 x 20 = <strong>200 BTU</strong>. Step 4: Reverse it to check: removing 200 BTU from that same water brings it back to 60°F. This is <strong>sensible heat</strong>: heat that changes temperature and can be sensed with a thermometer.</p>
<p>Heat moves in three ways. <strong>Conduction</strong> passes it through solids, such as through a copper tube wall. <strong>Convection</strong> carries it with moving fluid, such as air blown across a coil. <strong>Radiation</strong> transfers it by waves without contact, such as sunlight warming a dark condenser cabinet. Coils are built to exploit conduction through thin metal and convection from fans; a failed fan defeats convection no matter how good the metal is.</p>
<div class="callout"><strong>Key idea:</strong> Temperature tells you how hot, never how much. Always ask how many pounds of what substance changed by how many degrees before you claim a quantity of heat.</div>`
    },
    {
      heading: "Latent Heat: The Engine Inside the Coil",
      html: `
<p><strong>Latent heat</strong> is heat that changes a substance's state — solid to liquid, or liquid to vapor — without changing its temperature. It is called latent, meaning hidden, because a thermometer cannot see it. Melting one pound of ice at 32°F takes about 144 BTU, and the meltwater is still 32°F when the last ice disappears. Boiling water into steam takes far more, roughly 970 BTU per pound at atmospheric pressure, and the steam is the same temperature as the boiling water.</p>
<p>This is the entire business model of refrigeration. Inside the evaporator, liquid refrigerant boils at a low temperature. Every pound that boils carries away a large packet of latent heat from the refrigerated space, yet the boiling temperature stays fixed as long as pressure stays fixed. Inside the condenser the reverse happens: vapor condensing gives that latent heat back up, again at nearly constant temperature. If refrigerant only warmed and cooled as a liquid, a system would need to circulate an absurd amount of it to move useful heat.</p>
<p><strong>Worked Example — why boiling wins.</strong> Compare two ways of absorbing 1,440 BTU. Option A, melting ice: 1,440 / 144 = 10 pounds of ice melted at a constant 32°F. Option B, warming water sensibly by 20°F: 1,440 / 20 = 72 pounds of water needed. The phase change moved the same heat with far less material and at a steady temperature. That steady, cold boiling surface is exactly what keeps a refrigerator cabinet or an evaporator coil evenly cold.</p>
<div class="callout"><strong>Key idea:</strong> Most of the heat a system moves rides as latent heat during boiling and condensing. Sensible heat changes — superheat and subcooling — are small adjustments at the edges of those two big events.</div>
<p>A related term is <strong>specific heat</strong>: the BTU needed to raise one pound of a substance by 1°F. Water's specific heat is 1.0 by definition. Other substances need less, which is why the simple pounds-times-degrees calculation in the last section is exact for water and an approximation for everything else.</p>`
    },
    {
      heading: "Saturation: Where Temperature and Pressure Lock Together",
      html: `
<p>A substance is <strong>saturated</strong> when liquid and vapor coexist in the same space at the boiling point for that pressure. Saturated refrigerant in a cylinder, a condenser, or an evaporator obeys a strict rule: for each pressure there is exactly one saturation temperature, and for each temperature exactly one saturation pressure. Raise the pressure and the boiling point rises; lower the pressure and the boiling point falls. This is why the metering device can make refrigerant cold without any cold source — dropping the pressure drops the temperature at which the liquid boils.</p>
<p>Everyday proof: water boils at 212°F at sea level because atmospheric pressure is what it is. On a high mountain, lower air pressure lets water boil cooler, which is why cooking directions change at altitude. In a hard vacuum, water boils at room temperature. Refrigeration simply chooses fluids and pressures that put the boiling point where the job needs it: cold enough to absorb heat from a 35°F cooler or a 75°F room.</p>
<p>Two boundary terms matter. <strong>Superheated vapor</strong> is vapor heated above its saturation temperature at that pressure; it is all vapor, with heat to spare. <strong>Subcooled liquid</strong> is liquid cooled below its saturation temperature; it is all liquid, with a margin before any of it can flash. Most of a running system's refrigerant is saturated inside the two coils, superheated in the suction line, and subcooled in the liquid line.</p>
<div class="formula">At saturation: one pressure ↔ one temperature. Change one and the other must follow.</div>
<p><strong>Worked reasoning:</strong> A sealed cylinder of refrigerant sits in a 70°F room overnight, then is carried into 100°F sun. Because liquid and vapor coexist inside, the cylinder is saturated. Its pressure must climb to the saturation pressure belonging to 100°F for that refrigerant. Nothing was added; temperature alone drove the pressure. Module 8 turns this relationship into chart-reading skill.</p>`
    },
    {
      heading: "Pressure Scales: psig, psia, and Inches of Mercury",
      html: `
<p>Pressure in this trade is force spread over area, expressed in pounds per square inch. The catch is the starting point of the scale. <strong>Psia</strong> (pounds per square inch absolute) measures from a perfect vacuum — zero means no pressure at all. <strong>Psig</strong> (pounds per square inch gauge) measures from local atmospheric pressure, so a gauge on an open hose reads 0 psig even though the air around it is pressing at about 14.7 psia at sea level.</p>
<div class="formula">psia = psig + 14.7 &nbsp;&nbsp;|&nbsp;&nbsp; psig = psia − 14.7</div>
<p><strong>Worked Example.</strong> A suction gauge reads 118 psig on an R-410A system. In absolute terms that is 118 + 14.7 = 132.7 psia. A discharge reading of 317 psig is 331.7 psia. Field gauges and pressure-temperature charts in this trade are printed in psig, so you will work in gauge pressure daily; absolute pressure matters when you reason about vacuums and about ratios, where the zero point must be real.</p>
<p>Below atmospheric pressure, the old unit is <strong>inches of mercury vacuum</strong> (inHg). A perfect vacuum at sea level would read about 29.92 inHg. A compound gauge can show that a system is below atmospheric, but its needle is far too coarse to judge a deep vacuum — the difference between a mediocre vacuum and a good one is invisible on a dial whose whole vacuum range spans 30 inches. That gap is why evacuation uses its own unit and its own instrument, covered next.</p>
<div class="callout"><strong>Key idea:</strong> A gauge reading of 0 psig does not mean no pressure. It means the pressure equals the atmosphere around the gauge. Forgetting the 14.7 offset corrupts compression-ratio math and vacuum reasoning.</div>
<p>Pressure also explains compressor work. The compressor must lift refrigerant from suction pressure to discharge pressure. The wider that lift, the more work per pound and the less refrigerant moved. Dirty condensers raise discharge pressure, starved evaporators lower suction pressure, and both widen the lift — a theme Module 12 turns into symptom thinking.</p>`
    },
    {
      heading: "Vacuum and Microns, Plus a Recap",
      html: `
<p>A <strong>micron</strong> is a unit of absolute pressure so small that one atmosphere equals about 760,000 microns. Micron gauges measure the deep vacuum used to dry and clear a system before charging. The field target taught in this program is to pull to <strong>500 microns or below</strong> and prove it with a standing test, which Module 10 covers in full. To feel the scale: 5,000 microns sounds small, yet it is ten times the pressure of the 500-micron goal, and a system at 5,000 microns still holds enough moisture to cause real harm.</p>
<p><strong>Worked Example — reading a micron claim.</strong> A helper says a system is at 29.9 inHg vacuum, so it must be dry. Step 1: 29.92 inHg is a perfect vacuum at sea level, and dial gauges cannot resolve the last fraction of an inch where all the important action is. Step 2: That last 0.02 inHg spans thousands of microns. Step 3: Conclusion — only a micron gauge can testify about dryness; the dial reading is merely consistent with a vacuum existing.</p>
<p><strong>Recap:</strong></p>
<ul>
<li>Heat is energy (BTU); temperature is a molecular-motion reading. Sensible heat changes temperature; latent heat changes state.</li>
<li>Boiling and condensing move the most heat, at constant temperature, because of latent heat.</li>
<li>At saturation, pressure and temperature are locked together; that lock runs the whole cycle.</li>
<li>psia = psig + 14.7. Vacuum depth is measured in microns; 500 or below is the evacuation goal taught here.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Judging evacuation with the manifold compound gauge. Its vacuum scale cannot distinguish 500 microns from 5,000. If the micron gauge is not connected and read at the system, the evacuation has not been verified.</div>`
    }
  ],
  keyTerms: [
    { term: "Heat", def: "Energy in transfer, measured in BTU, that flows from warmer to cooler material." },
    { term: "Temperature", def: "A measure of average molecular motion; it states how hot, not how much heat is present." },
    { term: "BTU", def: "British thermal unit; the heat that raises one pound of water by one degree Fahrenheit." },
    { term: "Sensible heat", def: "Heat that changes a substance's temperature without changing its state." },
    { term: "Latent heat", def: "Heat that changes a substance's state at constant temperature, such as boiling or melting." },
    { term: "Specific heat", def: "The BTU needed to raise one pound of a substance by 1°F; water equals 1.0." },
    { term: "Conduction", def: "Heat transfer through a solid material from its warmer side to its cooler side." },
    { term: "Convection", def: "Heat transfer carried by a moving fluid such as air or water across a coil." },
    { term: "Radiation", def: "Heat transfer by waves without direct contact, such as sunlight warming equipment." },
    { term: "Saturation", def: "The condition where liquid and vapor coexist, locking temperature and pressure together." },
    { term: "Saturation temperature", def: "The boiling or condensing temperature that belongs to a given pressure for a refrigerant." },
    { term: "Superheated vapor", def: "Vapor heated above its saturation temperature at the same pressure." },
    { term: "Subcooled liquid", def: "Liquid cooled below its saturation temperature at the same pressure." },
    { term: "psig", def: "Pounds per square inch gauge; pressure measured relative to local atmospheric pressure." },
    { term: "psia", def: "Pounds per square inch absolute; pressure measured from a perfect vacuum." },
    { term: "Atmospheric pressure", def: "About 14.7 psia at sea level; the zero reference for gauge pressure." },
    { term: "Micron", def: "A tiny unit of absolute pressure; one atmosphere is about 760,000 microns." },
    { term: "Inches of mercury vacuum", def: "A coarse vacuum scale; a perfect vacuum at sea level is about 29.92 inHg." }
  ],
  video: {
    title: "How a Pressure Gauge Shows Temperature | P–T Saturation Curve (R32, R410A, R134a)",
    embedUrl: "https://www.youtube.com/embed/dynQfN2y6Q0",
    note: "This short video uses a refrigerant cylinder to show why, with liquid and vapor together, pressure is set by temperature alone, and why cylinder fill level does not change that pressure. It is a direct picture of saturation, the central idea of this module.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> How many BTU are needed to raise 25 pounds of water from 50°F to 90°F?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Temperature change = 90 − 50 = 40°F. Step 2: For water, sensible heat = pounds x degrees. Step 3: 25 x 40 = <strong>1,000 BTU</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A technician warms a pan of water and its temperature rises steadily, then stops rising even though heat is still being added, while the water boils. Explain the stop.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: While warming, added heat is sensible and the thermometer shows it. Step 2: At boiling, added heat becomes latent heat of vaporization, changing liquid to vapor. Step 3: Latent heat does not change temperature, so the reading holds at the boiling point until the water is gone.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Convert (a) 68.5 psig to psia and (b) 210.7 psia to psig.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: psia = psig + 14.7, so (a) 68.5 + 14.7 = <strong>83.2 psia</strong>. Step 2: psig = psia − 14.7, so (b) 210.7 − 14.7 = <strong>196.0 psig</strong>. Step 3: Check that each pair differs by exactly 14.7.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A sealed refrigerant cylinder is moved from a 60°F storeroom to a 100°F truck bed. A student says its pressure stays the same because no refrigerant was added. Correct the claim.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The cylinder holds liquid and vapor together, so its contents are saturated. Step 2: At saturation, pressure is set by temperature alone. Step 3: Warming the cylinder raises its saturation temperature, so its pressure must rise to the value belonging to 100°F for that refrigerant. No added refrigerant is required.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A system was pulled to 4,800 microns and charged. The goal in this program is 500 microns or below. By what factor did the final pressure miss the goal, and why does that matter?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: 4,800 / 500 = 9.6, so the system sat at roughly <strong>ten times</strong> the target absolute pressure. Step 2: Higher remaining pressure means more air and moisture left inside. Step 3: Moisture can freeze at the metering device and form acids with refrigerant and oil, so the miss is a reliability problem, not a rounding difference.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Classify each as sensible or latent: (a) suction vapor warming from 40°F to 52°F after boiling is complete, (b) refrigerant boiling inside the evaporator at 40°F, (c) liquid refrigerant cooling from 100°F to 90°F after condensing is complete.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A temperature change with no state change is sensible: (a) is <strong>sensible</strong> — it is superheat being added. Step 2: A state change at constant temperature is latent: (b) is <strong>latent</strong>. Step 3: (c) is <strong>sensible</strong> — it is subcooling, liquid cooling below saturation with no state change.</p>"
    }
  ],
  quiz: [
    {
      q: "One BTU is the heat that:",
      choices: ["Boils one pound of water at any pressure", "Raises one pound of water by 1°F", "Raises one gallon of water by 1°F", "Melts one pound of ice"],
      answer: 1,
      explanation: "Correct: (b). The BTU is defined by a one-pound, one-degree sensible change in water. (a) Boiling is a latent change and takes far more heat per pound. (c) A gallon weighs about eight pounds, so it would take about eight BTU per degree. (d) Melting a pound of ice takes about 144 BTU, not one."
    },
    {
      q: "Raising 5 pounds of water by 30°F requires:",
      choices: ["35 BTU", "150 BTU", "30 BTU", "750 BTU"],
      answer: 1,
      explanation: "Correct: (b). 5 x 30 = 150 BTU. (a) adds the two numbers instead of multiplying. (c) uses only the temperature change and ignores the mass. (d) multiplies by an extra factor of five with no basis."
    },
    {
      q: "While refrigerant is boiling in the evaporator, its temperature:",
      choices: ["Rises steadily as heat is added", "Falls steadily as heat is added", "Stays at the saturation temperature for its pressure", "Matches the outdoor temperature"],
      answer: 2,
      explanation: "Correct: (c). Boiling is a latent process; at fixed pressure the temperature holds at saturation until the liquid is gone. (a) describes sensible heating of vapor after boiling ends. (b) Adding heat does not cool a boiling liquid. (d) Evaporator temperature is set by suction pressure, not by outdoor air."
    },
    {
      q: "A gauge reads 0 psig on an open hose at sea level. The absolute pressure there is about:",
      choices: ["0 psia", "14.7 psia", "29.92 psia", "760 psia"],
      answer: 1,
      explanation: "Correct: (b). Gauge zero means equal to atmosphere, about 14.7 psia at sea level. (a) would be a perfect vacuum. (c) confuses inches of mercury with psi. (d) confuses microns or millimeters scale numbers with psi."
    },
    {
      q: "196 psig expressed in psia is:",
      choices: ["181.3 psia", "196 psia", "210.7 psia", "225.9 psia"],
      answer: 2,
      explanation: "Correct: (c). 196 + 14.7 = 210.7 psia. (a) subtracts the atmospheric offset instead of adding it. (b) assumes gauge and absolute are the same scale. (d) adds roughly two atmospheres, which has no basis."
    },
    {
      q: "The evacuation target taught in this program is:",
      choices: ["5,000 microns or below, judged on the compound gauge", "500 microns or below, verified with a micron gauge and standing test", "29 inHg on any gauge", "Zero psig on the low side"],
      answer: 1,
      explanation: "Correct: (b). Deep vacuum is measured in microns at the system and proven by a standing test. (a) is ten times too shallow and the compound gauge cannot resolve it anyway. (c) is a coarse dial reading consistent with a very wet system. (d) is merely atmospheric pressure, no vacuum at all."
    },
    {
      q: "Superheated vapor is vapor that:",
      choices: ["Contains some liquid droplets", "Is exactly at its saturation temperature", "Has been heated above its saturation temperature at that pressure", "Has been cooled below saturation"],
      answer: 2,
      explanation: "Correct: (c). Superheat is temperature above saturation with all liquid boiled away. (a) A liquid-vapor mix is saturated, not superheated. (b) Exactly at saturation is the boundary, with no superheat yet. (d) Cooling below saturation describes subcooled liquid, the liquid-side counterpart."
    },
    {
      q: "A saturated refrigerant cylinder warms up. Its pressure:",
      choices: ["Stays the same because the amount of refrigerant is unchanged", "Falls because vapor expands into the liquid", "Rises to the saturation pressure for the new temperature", "Drops to atmospheric pressure"],
      answer: 2,
      explanation: "Correct: (c). With liquid and vapor coexisting, temperature alone sets pressure. (a) Amount does not set saturated pressure; temperature does. (b) The direction is wrong and the mechanism invented. (d) Nothing vents the cylinder to atmosphere; it remains sealed and pressurized."
    }
  ],
  studyGuide: `
<h3>Module 2 — Heat, Temperature & Pressure Fundamentals: Quick Reference</h3>
<p><strong>Heat vs. temperature:</strong> Heat is energy in BTU. Temperature is a reading of molecular motion. How much heat depends on pounds x degrees.</p>
<div class="formula">Sensible heat (water) = pounds × °F change &nbsp;|&nbsp; 1 BTU = 1 lb water raised 1°F</div>
<p><strong>Latent heat:</strong> Changes state at constant temperature. Melting ice ≈ 144 BTU/lb. Boiling and condensing carry most of the heat a system moves.</p>
<p><strong>Saturation:</strong> Liquid and vapor together. One pressure belongs to one temperature; change either and the other follows. Above saturation = superheated vapor. Below = subcooled liquid.</p>
<div class="formula">psia = psig + 14.7 &nbsp;|&nbsp; Atmosphere ≈ 14.7 psia ≈ 29.92 inHg ≈ 760,000 microns</div>
<p><strong>Vacuum:</strong> Judge it only with a micron gauge at the system. Goal: 500 microns or below, proven by a standing test (Module 10).</p>
<p><strong>Watch out:</strong> 0 psig is atmospheric pressure, not emptiness. A dial vacuum reading cannot prove a system is dry.</p>
<p><strong>Self-check:</strong> Given any psig value you should be able to state its psia twin instantly, and given a boiling refrigerant you should reflexively ask for its pressure before asking its temperature. Those two reflexes carry every gauge reading in the rest of this course.</p>
`
};
