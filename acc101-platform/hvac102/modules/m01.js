// HVAC 102 - Module 1: The Pressure-Enthalpy (Mollier) Diagram
module.exports = {
  number: 1,
  slug: "pressure-enthalpy-diagram",
  title: "The Pressure–Enthalpy (Mollier) Diagram",
  estTime: "3–4 hours",
  objectives: [
    "Describe the axes, saturation dome, and constant-property lines of a pressure–enthalpy diagram.",
    "Plot the four processes of the vapor-compression cycle on a P–h diagram from gauge and temperature readings.",
    "Read enthalpy values at the four state points and compute refrigeration effect, heat of compression, and heat rejected.",
    "Compute the coefficient of performance (COP) of a plotted cycle and explain what it does and does not measure.",
    "Show how superheat, subcooling, a dirty condenser, and low evaporating temperature each change the shape of the plotted cycle."
  ],
  sections: [
    {
      heading: "Why a Picture of Heat? Anatomy of the Diagram",
      html: `<p>Gauges tell you pressures. Thermometers tell you temperatures. Neither one directly tells you how much <em>heat</em> the refrigerant is carrying — and heat is the product you are selling. The <strong>pressure–enthalpy (P–h) diagram</strong>, often called the <strong>Mollier diagram</strong>, fixes that. Its vertical axis is <strong>pressure</strong> (usually absolute pressure, plotted on a logarithmic scale so low pressures get more room), and its horizontal axis is <strong>specific enthalpy (h)</strong>, the total heat content of one pound of refrigerant, in Btu/lb. Every refrigerant has its own diagram because every refrigerant's pressure–heat relationship is different.</p><p>In the middle of the chart sits the <strong>saturation dome</strong>. Under the dome, refrigerant exists as a mixture of liquid and vapor at saturation. The left boundary is the <strong>saturated liquid line</strong>; the right boundary is the <strong>saturated vapor line</strong>. To the left of the dome is the subcooled-liquid region; to the right is the superheated-vapor region. Inside the dome, lines of constant <strong>quality</strong> show what fraction of the mixture is vapor. Crossing the dome from left to right at constant pressure is evaporation; crossing right to left is condensation.</p><p>Three families of lines do the analytical work. <strong>Constant-pressure lines</strong> run horizontal. <strong>Constant-entropy lines</strong> curve upward to the right — compression ideally follows one. <strong>Constant-temperature lines</strong> are horizontal inside the dome (temperature is fixed while a pure refrigerant changes phase at a given pressure) and bend downward in the superheat region.</p><div class="callout"><strong>Key idea:</strong> On a P–h chart, horizontal distance is heat per pound. A process that moves right gained heat; a process that moves left rejected heat. That single insight turns the chart into an accounting ledger for the refrigeration cycle.</div>`
    },
    {
      heading: "Plotting the Four Processes",
      html: `<p>Number the state points the standard way. <strong>Point 1</strong> is the evaporator outlet / compressor inlet: low-pressure superheated vapor. <strong>Point 2</strong> is the compressor discharge. <strong>Point 3</strong> is the condenser outlet / metering-device inlet: high-pressure liquid, usually slightly subcooled. <strong>Point 4</strong> is the metering-device outlet / evaporator inlet: a cold liquid–vapor mixture.</p><ul><li><strong>1 → 2 Compression:</strong> the line climbs up and to the right, ideally along a constant-entropy line. Pressure, temperature, and enthalpy all increase — the compressor is adding energy.</li><li><strong>2 → 3 Condensation:</strong> a horizontal line (nearly constant pressure) moving left. The refrigerant desuperheats, condenses inside the dome, and may subcool slightly before point 3. Enthalpy falls as heat is rejected outdoors.</li><li><strong>3 → 4 Expansion:</strong> a vertical line straight down. Throttling through a TXV or orifice is a constant-enthalpy process — no heat is added or removed and no work is done, so h<sub>3</sub> = h<sub>4</sub>. Pressure and temperature crash, and some liquid flashes to vapor, which is why point 4 sits inside the dome.</li><li><strong>4 → 1 Evaporation:</strong> a horizontal line moving right at low pressure as the mixture absorbs heat and boils, finishing with a short climb out of the dome as the vapor picks up superheat on the way to point 1.</li></ul><p><strong>Worked example — finding point 1.</strong> An R-410A system runs a 118 psig suction pressure. The P/T relationship for R-410A puts saturation at about 40°F at 118 psig. Your clamp thermometer reads 52°F on the suction line. Suction superheat is 52 − 40 = <strong>12°F</strong>, so point 1 sits just to the right of the saturated-vapor line at the height of the evaporating pressure — inside the chart's superheat region, exactly where compressor inlet vapor belongs.</p><div class="callout"><strong>Key idea:</strong> Plot pressure from the gauges, then use a measured line temperature to locate each point horizontally. Pressure alone never fixes a point outside the dome — you need the temperature (superheat or subcooling) as well.</div>`
    },
    {
      heading: "Refrigeration Effect, Heat of Compression, and Heat Rejected",
      html: `<p>Once the four enthalpies are read off the chart, three differences describe the whole cycle. Use these example chart values for one plotted cycle (read from the refrigerant's diagram, in Btu/lb): h<sub>1</sub> = 108, h<sub>2</sub> = 124, h<sub>3</sub> = 38, and h<sub>4</sub> = 38.</p><div class="formula">Refrigeration effect (RE) = h<sub>1</sub> − h<sub>4</sub> = 108 − 38 = 70 Btu/lb<br>Heat of compression (HOC) = h<sub>2</sub> − h<sub>1</sub> = 124 − 108 = 16 Btu/lb<br>Heat rejected at condenser = h<sub>2</sub> − h<sub>3</sub> = 124 − 38 = 86 Btu/lb</div><p>The <strong>refrigeration effect</strong> is the useful product: each pound of refrigerant picks up 70 Btu in the evaporator. The <strong>heat of compression</strong> is the work the compressor adds to each pound. The condenser must reject <em>both</em> — check the energy balance: 70 + 16 = 86 Btu/lb, which exactly equals the heat rejected. If your three numbers do not balance this way, you misread a point; the chart obeys conservation of energy even when your pencil does not.</p><p>Why does refrigeration effect shrink in real systems? Anything that raises h<sub>4</sub> shrinks it. If the liquid arriving at the metering device is warmer (less subcooling, or liquid-line heat gain), h<sub>3</sub> — and therefore h<sub>4</sub> — rises, more refrigerant flashes to vapor during expansion, and less liquid remains to do useful cooling. If h<sub>3</sub> rose from 38 to 44 in our example, RE would fall to 108 − 44 = 64 Btu/lb: a 9% capacity loss from liquid-line conditions alone, with the compressor drawing the same power.</p><div class="callout"><strong>Key idea:</strong> Subcooling is not just a charging number. On the P–h chart you can <em>see</em> it move point 3 left, stretch the 4→1 line, and grow the refrigeration effect. Likewise, suction superheat moves point 1 right — a little is protection, a lot is wasted evaporator surface and hotter discharge gas.</div>`
    },
    {
      heading: "COP: The Cycle's Report Card",
      html: `<p>The <strong>coefficient of performance</strong> compares what you got with what you paid:</p><div class="formula">COP = Refrigeration effect ÷ Heat of compression = (h<sub>1</sub> − h<sub>4</sub>) ÷ (h<sub>2</sub> − h<sub>1</sub>)</div><p>For our worked cycle: COP = 70 ÷ 16 = <strong>4.38</strong>. Each unit of work energy moves about 4.4 units of heat out of the refrigerated space. COP is not an efficiency percentage — moving heat is easier than creating it, so COPs above 1 are normal and expected. A resistance heater has a COP of 1; a refrigeration cycle that could only manage COP 1 would be a disaster.</p><p>COP collapses as the <strong>lift</strong> grows — the temperature (pressure) gap between evaporator and condenser. Make the evaporator colder or the condenser hotter and the 1→2 line gets taller and steeper: h<sub>2</sub> rises, HOC grows, and RE usually shrinks at the same time. Example: the same system on a hotter day plots h<sub>2</sub> = 132 with h<sub>1</sub> and h<sub>4</sub> unchanged. Now HOC = 132 − 108 = 24 Btu/lb and COP = 70 ÷ 24 = <strong>2.92</strong>. Nothing broke; the physics of a bigger lift simply costs more work per unit of cooling. This is why a freezer (large lift) will always show a lower COP than an air conditioner (small lift) in identical health.</p><p>Two cautions. First, chart COP is a <em>refrigerant-side, ideal-compression</em> figure; real compressors add motor and friction losses, so delivered system efficiency (what EER and SEER ratings try to capture) is lower. Second, COP comparisons are only fair at stated conditions — evaporating and condensing temperatures change everything, which is why Module 2 insists on naming conditions with every capacity claim.</p><div class="callout"><strong>Key idea:</strong> Read COP off the chart as two horizontal distances: the length of the evaporator line divided by the horizontal rise of the compression line. Short lift, long evaporator line — that is the geometry of cheap cooling.</div>`
    },
    {
      heading: "Reading Faults Off the Diagram",
      html: `<p>The diagram earns its keep when a system misbehaves, because faults deform the cycle in recognizable ways.</p><ul><li><strong>Dirty condenser / high head pressure:</strong> the whole top line (2→3) sits higher. The compression line lengthens, HOC and discharge temperature climb, COP falls. The shape tells you the compressor is working against a taller lift.</li><li><strong>Low evaporating temperature</strong> (starved coil, low load, iced evaporator): the bottom line (4→1) sits lower. Compression ratio rises, the vapor at point 1 is less dense, and — as Module 3 shows — the compressor pumps fewer pounds per hour, so capacity falls twice: less RE per pound is not the problem; fewer pounds is.</li><li><strong>Excess superheat:</strong> point 1 slides far right of the dome. The evaporator's last circuits are warming vapor instead of boiling liquid — surface wasted — and point 2 moves up with the extra heat of compression, raising discharge temperature.</li><li><strong>Lost subcooling / flash gas:</strong> point 3 creeps right toward the dome. Flashing in the liquid line starves the metering device, point 4 moves right, and RE shrinks.</li><li><strong>Inefficient compression:</strong> instead of following a constant-entropy line, 1→2 leans further right — more enthalpy rise for the same pressure rise — direct visual evidence of work wasted as heat.</li></ul><p>The practical workflow: take suction and discharge pressures, suction and liquid line temperatures, convert pressures to saturation temperatures with the P/T chart, compute superheat and subcooling, and sketch the four points. Five minutes with a chart often separates a charge problem from an airflow problem from a compressor problem before you remove a single panel screw for parts-swapping. Modules 11 and 12 build full diagnostic patterns on exactly this habit.</p><div class="callout"><strong>Key idea:</strong> You rarely need laboratory precision. A hand-plotted cycle with honest gauge numbers will show <em>which</em> process is deformed — and the deformed process is where your fault lives.</div>`
    }
  ],
  keyTerms: [
    { term: "Pressure–enthalpy (P–h) diagram", def: "A refrigerant-specific chart with pressure on the vertical axis and specific enthalpy on the horizontal axis, used to plot and analyze the vapor-compression cycle." },
    { term: "Mollier diagram", def: "Another name for the pressure–enthalpy diagram." },
    { term: "Specific enthalpy (h)", def: "The total heat content of one pound of refrigerant, in Btu/lb, measured relative to a reference point on the chart." },
    { term: "Saturation dome", def: "The bell-shaped region of the P–h chart inside which refrigerant exists as a liquid–vapor mixture at saturation." },
    { term: "Saturated liquid line", def: "The left boundary of the saturation dome; points on it are liquid at its boiling temperature for that pressure." },
    { term: "Saturated vapor line", def: "The right boundary of the saturation dome; points on it are vapor at its condensing temperature for that pressure." },
    { term: "Quality", def: "The fraction of a liquid–vapor mixture that is vapor, by mass; 0% at the liquid line and 100% at the vapor line." },
    { term: "Constant-entropy line", def: "A line of equal entropy curving up to the right on the P–h chart; ideal (isentropic) compression follows one." },
    { term: "Isentropic compression", def: "Ideal compression at constant entropy — no heat gained or lost and no internal friction; the benchmark real compressors fall short of." },
    { term: "Isenthalpic expansion", def: "Throttling at constant enthalpy; the vertical 3→4 process through a metering device, where h3 = h4." },
    { term: "Flash gas", def: "The portion of liquid refrigerant that vaporizes during the pressure drop through a metering device, or in a liquid line that loses pressure or gains heat." },
    { term: "Refrigeration effect", def: "The heat absorbed per pound of refrigerant in the evaporator: RE = h1 − h4." },
    { term: "Heat of compression", def: "The work energy added per pound of refrigerant by the compressor: HOC = h2 − h1." },
    { term: "Heat rejected", def: "The heat discharged per pound at the condenser: h2 − h3; always equals refrigeration effect plus heat of compression." },
    { term: "Coefficient of performance (COP)", def: "Refrigeration effect divided by heat of compression; the heat moved per unit of work input for the plotted cycle." },
    { term: "Lift", def: "The temperature/pressure difference the compressor must work across, between evaporating and condensing conditions; higher lift lowers COP and capacity." },
    { term: "Superheat (on the chart)", def: "How far point 1 sits to the right of the saturated vapor line — vapor heated above its saturation temperature at evaporator pressure." },
    { term: "Subcooling (on the chart)", def: "How far point 3 sits to the left of the saturated liquid line — liquid cooled below its saturation temperature at condenser pressure." }
  ],
  video: {
    title: "Visualizing HVAC Excellence (VHE) – Ep. 8: Pressure-Enthalpy (P-h) Charts Explained for HVACR",
    embedUrl: "https://www.youtube.com/embed/DFj1S6gjDo4",
    note: "An educator-led walk through the P–h chart with 3D visuals: how pressure, enthalpy, and state changes come together and how the four cycle processes plot on the diagram. Watch it before attempting the assignment plots.",
    more: [
      { title: "How to Read a p–h Diagram (Refrigeration Cycle Explained) | R32 Air Conditioner", url: "https://www.youtube.com/watch?v=bm6b9br3o_k" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A plotted cycle reads h<sub>1</sub> = 110, h<sub>2</sub> = 128, h<sub>3</sub> = 42, h<sub>4</sub> = 42 (Btu/lb). Compute the refrigeration effect, heat of compression, and heat rejected, and verify the energy balance.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: RE = h<sub>1</sub> − h<sub>4</sub> = 110 − 42 = <strong>68 Btu/lb</strong>. Step 2: HOC = h<sub>2</sub> − h<sub>1</sub> = 128 − 110 = <strong>18 Btu/lb</strong>. Step 3: Heat rejected = h<sub>2</sub> − h<sub>3</sub> = 128 − 42 = <strong>86 Btu/lb</strong>. Step 4: Check: RE + HOC = 68 + 18 = 86 = heat rejected. Balanced.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> For the cycle in Problem 1, compute the COP and explain in one sentence what the number means.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: COP = RE ÷ HOC. Step 2: 68 ÷ 18 = <strong>3.78</strong>. Step 3: Meaning — for every unit of work energy the compressor adds to the refrigerant, about 3.78 units of heat are removed from the refrigerated space.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> An R-22 system's suction pressure is 68.5 psig and the suction line temperature at the compressor is 55°F. Using the P/T relationship for R-22, find the saturation temperature, the superheat, and describe where point 1 plots relative to the saturation dome.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: For R-22, 68.5 psig corresponds to a saturation temperature of about <strong>40°F</strong>. Step 2: Superheat = line temperature − saturation temperature = 55 − 40 = <strong>15°F</strong>. Step 3: Point 1 plots at evaporator pressure, <strong>to the right of the saturated vapor line</strong> in the superheated region — 15°F of superheat is on the high side for many comfort-cooling systems, suggesting a starved evaporator or low load worth investigating.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A technician warms the liquid line leaving the condenser (long run through a hot attic) so point 3 rises from h<sub>3</sub> = 38 to h<sub>3</sub> = 46 Btu/lb, with h<sub>1</sub> = 108 unchanged. What happens to the refrigeration effect, and why does expansion not change the enthalpy?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Throttling is isenthalpic, so h<sub>4</sub> = h<sub>3</sub>: h<sub>4</sub> rises from 38 to 46. Step 2: New RE = 108 − 46 = <strong>62 Btu/lb</strong>, down from 70 — an 11% loss. Step 3: Why — expansion does no work and exchanges no heat in the short valve passage, so total heat content per pound cannot change; the warmer liquid simply flashes more vapor at point 4, leaving less liquid to absorb heat.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A cycle plots with the 2→3 line much higher than design and the 1→2 line visibly longer, while the 4→1 line is at its normal height. Name the most likely field condition and two checks that confirm it.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A higher condensing line with a normal evaporating line means the lift grew from the top — <strong>excessive condensing pressure</strong>, classically a dirty or airflow-starved condenser (non-condensables are the other suspect). Step 2: Confirm by inspecting the condenser coil and fan operation, and by comparing condensing saturation temperature against outdoor ambient — an abnormally large gap points to poor heat rejection. Step 3: After cleaning, re-plot: the top line should drop and COP recover.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Explain why two systems with identical compressors can honestly show COPs of 4.4 and 2.9, with neither one broken. Use the geometry of the diagram in your answer.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: COP = RE ÷ HOC, two horizontal distances on the chart. Step 2: The 2.9 system works across a larger lift — colder evaporator and/or hotter condenser — so its compression line rises further right (larger HOC) while its evaporator line is the same or shorter. Step 3: With HOC up and RE flat-to-down, the ratio must fall. Step 4: COP is condition-dependent, not a health grade; compare systems only at matched evaporating and condensing temperatures.</p>"
    }
  ],
  quiz: [
    {
      q: "On a pressure–enthalpy diagram, the horizontal axis represents:",
      choices: ["Entropy", "Specific enthalpy — heat content per pound", "Temperature", "Specific volume"],
      answer: 1,
      explanation: "Correct: (b). Horizontal position is specific enthalpy (Btu/lb); horizontal distance is heat gained or lost per pound. (a) Entropy is shown as a family of curved lines, not an axis. (c) Temperature likewise appears as lines, horizontal inside the dome. (d) Volume lines exist on some charts but are never the horizontal axis."
    },
    {
      q: "The process from point 3 to point 4 (through the metering device) is drawn as a vertical line because:",
      choices: ["Pressure stays constant through the valve", "Temperature stays constant through the valve", "Enthalpy stays constant — throttling adds and removes no heat and does no work", "Entropy stays constant through the valve"],
      answer: 2,
      explanation: "Correct: (c). Throttling is isenthalpic: h3 = h4, so the line drops straight down as pressure falls. (a) Pressure drops sharply — that is the valve's purpose. (b) Temperature falls with the pressure. (d) Entropy actually increases during throttling; constant entropy describes ideal compression, not expansion."
    },
    {
      q: "A cycle plots h1 = 108, h2 = 124, h3 = h4 = 38 Btu/lb. The refrigeration effect is:",
      choices: ["16 Btu/lb", "86 Btu/lb", "70 Btu/lb", "46 Btu/lb"],
      answer: 2,
      explanation: "Correct: (c). RE = h1 − h4 = 108 − 38 = 70 Btu/lb. (a) 16 is the heat of compression (h2 − h1). (b) 86 is the heat rejected at the condenser (h2 − h3). (d) 46 is h2 − h4 with no physical meaning in the cycle."
    },
    {
      q: "For the values in the previous question, COP is:",
      choices: ["4.38", "0.81", "5.38", "1.26"],
      answer: 0,
      explanation: "Correct: (a). COP = RE ÷ HOC = 70 ÷ 16 = 4.38. (b) 0.81 inverts the ratio. (c) 5.38 divides heat rejected by HOC. (d) 1.26 divides h2 by h1-ish values and is not the COP formula."
    },
    {
      q: "Refrigerant inside the saturation dome is:",
      choices: ["All superheated vapor", "All subcooled liquid", "A liquid–vapor mixture at saturation", "Always exactly half liquid and half vapor"],
      answer: 2,
      explanation: "Correct: (c). Under the dome the refrigerant is changing phase — a mixture whose proportions are given by the quality lines. (a) Superheated vapor lives to the right of the dome. (b) Subcooled liquid lives to the left. (d) The mixture ratio varies from 0% vapor at the liquid line to 100% at the vapor line; it is not fixed at half."
    },
    {
      q: "A dirty condenser deforms the plotted cycle mainly by:",
      choices: ["Lowering the 4→1 line", "Raising the 2→3 line, lengthening compression and cutting COP", "Moving point 4 left of the liquid line", "Making the 3→4 line slope"],
      answer: 1,
      explanation: "Correct: (b). Poor heat rejection raises condensing pressure, so the top line rises, the compressor works across more lift, and COP falls. (a) describes a lower evaporating temperature, a different fault. (c) Point 4 is always inside the dome after expansion. (d) The expansion line stays vertical — throttling is isenthalpic regardless of condenser condition."
    },
    {
      q: "An R-410A suction pressure of 118 psig with a 52°F suction line gives superheat of:",
      choices: ["6°F", "40°F", "66°F", "12°F"],
      answer: 3,
      explanation: "Correct: (d). R-410A at 118 psig saturates at about 40°F; superheat = 52 − 40 = 12°F. (a) uses no P/T conversion at all. (b) 40°F is the saturation temperature itself, not the superheat. (c) adds the two temperatures instead of subtracting."
    },
    {
      q: "Why can COP legitimately exceed 1.0 — and even 4.0 — without violating energy conservation?",
      choices: ["Because the chart ignores compressor work", "Because COP compares heat MOVED to work input, and moving heat takes less energy than the heat moved", "Because enthalpy values are approximate", "Because the condenser adds free energy"],
      answer: 1,
      explanation: "Correct: (b). COP is a ratio of heat transported to work spent transporting it; nothing is created — the condenser rejects RE + HOC, exactly balancing the books. (a) The chart's HOC term is precisely the compressor work. (c) Approximation does not change the concept. (d) The condenser only rejects heat; it adds none."
    }
  ],
  studyGuide: `
<h3>Module 1 — The Pressure–Enthalpy Diagram: Quick Reference</h3>
<p><strong>Axes:</strong> vertical = pressure (absolute, log scale); horizontal = specific enthalpy h (Btu/lb). Left of dome = subcooled liquid; inside dome = liquid+vapor at saturation; right of dome = superheated vapor.</p>
<p><strong>Points:</strong> 1 = evaporator out / compressor in. 2 = compressor discharge. 3 = condenser out / metering device in. 4 = metering device out / evaporator in.</p>
<p><strong>Processes:</strong> 1→2 compression (up-right, ideally constant entropy). 2→3 condensation (left, constant pressure). 3→4 expansion (straight down, h3 = h4). 4→1 evaporation (right, constant pressure).</p>
<div class="formula">RE = h1 − h4 &nbsp;|&nbsp; HOC = h2 − h1 &nbsp;|&nbsp; Heat rejected = h2 − h3 = RE + HOC &nbsp;|&nbsp; COP = RE ÷ HOC</div>
<p><strong>Worked anchor:</strong> h = 108 / 124 / 38 / 38 → RE 70, HOC 16, rejected 86, COP 4.38.</p>
<p><strong>P/T anchors:</strong> R-410A 118 psig ≈ 40°F; R-22 68.5 psig ≈ 40°F. Superheat = line temp − saturation temp.</p>
<p><strong>Fault shapes:</strong> top line up = high head (dirty condenser). Bottom line down = low evaporating temp. Point 1 far right = excess superheat. Point 3 near dome = lost subcooling / flash gas.</p>
<p><strong>Watch out:</strong> pressure alone cannot place points 1 or 3 — you need line temperatures. COP is condition-dependent; always state the lift when quoting it.</p>
`
};
