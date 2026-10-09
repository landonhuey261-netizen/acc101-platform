// HVAC 101 - Module 1: The Refrigeration Cycle & the Four Processes
module.exports = {
  number: 1,
  slug: "refrigeration-cycle-four-processes",
  title: "The Refrigeration Cycle & the Four Processes",
  estTime: "3–4 hours",
  objectives: [
    "Explain refrigeration as moving heat from where it is not wanted to where it does not matter, rather than creating cold.",
    "Name the four major components of a vapor-compression system and state the job of each one.",
    "Trace refrigerant around the loop and describe its pressure, temperature, and state at each point.",
    "Describe the four processes: compression, condensation, expansion, and evaporation.",
    "Use a worked ton-of-cooling example to connect heat moved in the evaporator to heat rejected at the condenser."
  ],
  sections: [
    {
      heading: "What Refrigeration Really Is",
      html: `
<p>Refrigeration does not manufacture cold. Cold is not a substance you can pour into a box; it is simply the absence of heat. A refrigeration system is a <strong>heat mover</strong>: it absorbs heat inside a refrigerator, home, or store, carries that heat around a sealed loop, and dumps it somewhere the heat does not matter, usually outdoors. When you stand behind a refrigerator and feel warm air, you are feeling the heat that used to be inside the cabinet. The food got colder because its heat left, not because cold arrived.</p>
<p>The loop that does this work is called the <strong>vapor-compression cycle</strong>, and it is the cycle used in nearly every household refrigerator, window air conditioner, split system, and supermarket case you will meet in this program. A special fluid, the <strong>refrigerant</strong>, circulates endlessly through four major components. As it travels, it changes state between liquid and vapor and changes pressure between low and high. Those two changes are the whole trick: a low-pressure liquid boils at a low temperature and soaks up heat, and a high-pressure vapor gives up that heat easily when it condenses.</p>
<p>Think of refrigerant as a fleet of reusable delivery trucks. In the evaporator each truck loads up with heat. The compressor squeezes the load so it can be unloaded in a smaller, hotter space. At the condenser the heat is dropped off outside. Then the truck is sent back, empty and cold, to load up again. Nothing is consumed except the electricity that drives the compressor, which is why a system can move far more heat than the energy it uses.</p>
<div class="callout"><strong>Key idea:</strong> An air conditioner does not cool a house so much as it evicts heat from the house. If the outdoor unit cannot reject heat, the indoor side cannot absorb it, no matter how cold the coil feels for a moment.</div>
<p>This heat-moving view explains most field symptoms. A dirty outdoor coil traps heat, so the whole loop runs hotter and higher in pressure. A starved indoor coil cannot load heat, so capacity falls even though the compressor still runs. Hold on to that picture through every module that follows.</p>`
    },
    {
      heading: "The Four Major Components",
      html: `
<p><strong>1. The compressor</strong> is the pump of the system. It draws in low-pressure, low-temperature vapor from the evaporator and squeezes it into a smaller volume. Squeezing raises both the pressure and the temperature of the vapor, producing hot, high-pressure discharge gas. The compressor only ever wants vapor at its inlet; liquid refrigerant reaching it can damage or destroy it, a fact that will drive much of your charging and troubleshooting work later.</p>
<p><strong>2. The condenser</strong> is the outdoor or heat-rejecting coil. Hot discharge gas flows through it while air or water passes over the outside. Because the gas inside is hotter than the surroundings, heat leaves the refrigerant. As it loses heat at nearly constant high pressure, the vapor condenses into a liquid. By the outlet, a healthy system delivers warm, high-pressure liquid.</p>
<p><strong>3. The metering device</strong> is a deliberate restriction: a tiny orifice, a capillary tube, or a valve. High-pressure liquid forced through it drops sharply in pressure. That pressure drop makes part of the liquid flash into vapor and chills the mixture, so what enters the evaporator is a cold, low-pressure mix of liquid and a little vapor.</p>
<p><strong>4. The evaporator</strong> is the indoor or refrigerated-space coil. The cold low-pressure liquid boils inside it at a low temperature, absorbing heat from the air or product around it. By the outlet, all the liquid should have boiled away, leaving only low-pressure vapor carrying the absorbed heat back to the compressor.</p>
<ul>
<li><strong>Suction line:</strong> evaporator outlet to compressor inlet; large line, cool vapor, insulated on A/C systems.</li>
<li><strong>Discharge line:</strong> compressor outlet to condenser inlet; hot, high-pressure vapor.</li>
<li><strong>Liquid line:</strong> condenser outlet to metering device; warm, high-pressure liquid, smaller line.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> The compressor and the metering device divide the loop into a high side (discharge, condenser, liquid line) and a low side (evaporator and suction line). Every gauge reading in this course belongs to one side or the other.</div>`
    },
    {
      heading: "The Four Processes, Step by Step",
      html: `
<p><strong>Process 1 — Compression.</strong> Low-pressure vapor enters the compressor and leaves as high-pressure, high-temperature vapor. Work is added here, and that work becomes heat in the gas, which is why discharge gas is the hottest refrigerant in the system. No heat is intentionally added or removed from the space being cooled during this step; the point is to lift the refrigerant to a temperature at which it can reject heat outdoors.</p>
<p><strong>Process 2 — Condensation.</strong> In the condenser the hot gas first sheds its extra heat until it reaches its condensing temperature, then condenses from vapor to liquid at nearly constant temperature, then the liquid may cool a few degrees further. Heat rejected here equals the heat absorbed indoors plus the heat added by compression. That is why the air leaving a condenser is warmer than the air entering it, and why a condenser needs generous airflow.</p>
<p><strong>Process 3 — Expansion.</strong> At the metering device the warm high-pressure liquid is throttled to low pressure. No heat is added or removed in this short step and no work is done; the total heat content stays about the same while pressure and temperature crash. A portion of liquid flashes to vapor, using heat from the remaining liquid, which is what makes the mixture so cold.</p>
<p><strong>Process 4 — Evaporation.</strong> In the evaporator the cold liquid boils at low pressure and low temperature, absorbing heat from the refrigerated space. The last drops of liquid boil partway through the coil in a well-adjusted system, and the vapor then picks up a little extra heat, called superheat, before leaving. Module 7 develops that idea fully.</p>
<div class="formula">Heat rejected at condenser = Heat absorbed in evaporator + Heat added by compression</div>
<p><strong>Worked check:</strong> If an evaporator absorbs 24,000 BTU per hour and the compressor adds the equivalent of 6,000 BTU per hour of heat, the condenser must reject 30,000 BTU per hour. If outdoor airflow is blocked so the condenser can only reject 24,000, the system cannot keep absorbing 24,000 indoors; pressures climb and capacity falls until a new, worse balance is reached.</p>`
    },
    {
      heading: "How Much Cooling? Tons, BTU, and a Worked Example",
      html: `
<p>Cooling capacity is rated in <strong>BTU per hour</strong> and, traditionally, in <strong>tons</strong>. One ton of cooling equals 12,000 BTU per hour. The name is historical: it is the heat needed to melt one ton of ice over 24 hours, and it survives because equipment sizes line up neatly with it. A 2-ton residential system is rated near 24,000 BTU per hour, a 3-ton near 36,000, and a 5-ton near 60,000, always under stated rating conditions rather than on every day of the year.</p>
<p><strong>Worked Example — following the heat.</strong> A 3-ton air conditioner is removing heat at its rated 36,000 BTU per hour on a design day. Step 1: the evaporator absorbs 36,000 BTU per hour from the indoor air; that is also why indoor air leaves the coil cooler and drier. Step 2: the compressor's work adds heat; for this teaching example use 9,000 BTU per hour. Step 3: the condenser must reject 36,000 + 9,000 = 45,000 BTU per hour outdoors. Step 4: sanity-check the picture — the outdoor unit is not just dumping the house's heat, it is dumping the house's heat plus the cost of moving it. This is why outdoor coils are large and why shading a condenser helps only a little while blocking its airflow hurts a lot.</p>
<p>Capacity is not a fixed label. The same machine moves less heat when it is extremely hot outside, when indoor airflow is low, when coils are dirty, or when the refrigerant charge is wrong. Later modules give you the measurements — pressures, superheat, subcooling, and temperature splits — that reveal whether a system is delivering anywhere near its rating.</p>
<div class="callout"><strong>Key idea:</strong> A nameplate tonnage is a rating under specific conditions, not a promise. Technicians verify delivered performance with measurements; they never assume the label is what the customer is getting today.</div>
<p>Finally, note what is <em>not</em> in the loop: there is no separate cold-maker, no cold storage tank, and no place where heat disappears. Heat is conserved. Every BTU absorbed indoors must be rejected somewhere, plus the compressor's contribution. Troubleshooting is often just finding where that transfer is being blocked.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Refrigeration moves heat; it does not create cold.</li>
<li>Four components: compressor (squeeze vapor), condenser (reject heat, condense), metering device (drop pressure), evaporator (absorb heat, boil).</li>
<li>Four processes in order: compression, condensation, expansion, evaporation — then the loop repeats.</li>
<li>The compressor and metering device separate the high side from the low side.</li>
<li>One ton = 12,000 BTU per hour; condenser heat = evaporator heat + compressor heat.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Saying the evaporator makes cold air. The evaporator absorbs heat from air passing over it; the air leaves cooler because it gave up heat to boiling refrigerant. The wording matters because it tells you where to look when cooling is weak: is heat failing to be absorbed, carried, or rejected?</div>
<div class="callout"><strong>Common mistake:</strong> Expecting liquid at the compressor inlet. The compressor is a vapor pump. Liquid returning to it, called floodback, washes out oil and can break internal parts. Protecting the compressor from liquid is the reason superheat exists, and you will measure it constantly from Module 7 onward.</div>
<p><strong>Ready-to-Work link:</strong> NATE's entry-level Ready-to-Work certificate expects you to identify components and explain basic heat transfer. If you can walk a customer around a system and narrate the four processes without notes, you have this module, and you have the foundation every later module builds on.</p>`
    }
  ],
  keyTerms: [
    { term: "Refrigeration", def: "Moving heat from a space where it is not wanted to a place where it does not matter, using a circulating refrigerant." },
    { term: "Refrigerant", def: "The working fluid in the loop that absorbs heat by boiling at low pressure and rejects heat by condensing at high pressure." },
    { term: "Vapor-compression cycle", def: "The four-process cycle of compression, condensation, expansion, and evaporation used by most refrigeration and A/C systems." },
    { term: "Compressor", def: "The pump that draws in low-pressure vapor and discharges it at high pressure and high temperature." },
    { term: "Condenser", def: "The heat-rejecting coil where hot high-pressure vapor condenses into liquid by giving up heat to air or water." },
    { term: "Metering device", def: "The restriction that drops refrigerant pressure before the evaporator, chilling the liquid-vapor mixture." },
    { term: "Evaporator", def: "The heat-absorbing coil where cold low-pressure liquid boils, removing heat from air or product." },
    { term: "High side", def: "The high-pressure part of the loop: discharge line, condenser, and liquid line." },
    { term: "Low side", def: "The low-pressure part of the loop: evaporator and suction line." },
    { term: "Suction line", def: "The line carrying low-pressure vapor from the evaporator outlet to the compressor inlet." },
    { term: "Discharge line", def: "The line carrying hot high-pressure vapor from the compressor to the condenser." },
    { term: "Liquid line", def: "The line carrying warm high-pressure liquid from the condenser outlet to the metering device." },
    { term: "Superheat", def: "Heat added to vapor above its saturation temperature; a small amount at the evaporator outlet protects the compressor." },
    { term: "Flash gas", def: "The portion of liquid that instantly boils off during the pressure drop at the metering device, chilling the rest." },
    { term: "Ton of cooling", def: "A capacity rating of 12,000 BTU per hour." },
    { term: "BTU", def: "British thermal unit; the heat that changes one pound of water by one degree Fahrenheit." },
    { term: "Floodback", def: "Liquid refrigerant returning to the compressor, which can damage it and wash out its oil." },
    { term: "Saturation", def: "The condition where liquid and vapor coexist and temperature and pressure are locked together." }
  ],
  video: {
    title: "3D How Refrigeration and Air Conditioning Works P1 - Components",
    embedUrl: "https://www.youtube.com/embed/p6GXJdRUz9E",
    note: "A 3D walk-through of the main components and how refrigerant travels between them. Watch the state and pressure changes at each component and compare the animation with the four processes in this module.",
    more: [
      { title: "The 4-Step Secret Behind Every Refrigerator", url: "https://www.youtube.com/watch?v=nXi9VvylGDI" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A homeowner says the outdoor unit is blowing hot air, so it must be broken. Explain, in two or three sentences you could say on site, why hot air at the outdoor unit is expected.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The system moves heat rather than making cold. Step 2: The heat absorbed from the indoor air, plus heat added by compression, must be rejected outdoors. Step 3: Therefore warm or hot air leaving the condenser is evidence the loop is carrying heat. The fault to look for would be little heat being moved, shown by weak cooling indoors and abnormal pressures, not warm discharge air by itself.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A system is rated at 4 tons. (a) What is its rated capacity in BTU per hour? (b) If the compressor adds 11,000 BTU per hour of heat, how much heat must the condenser reject at that rating?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: One ton equals 12,000 BTU per hour, so 4 x 12,000 = <strong>48,000 BTU per hour</strong>. Step 2: Condenser heat = evaporator heat + compressor heat. Step 3: 48,000 + 11,000 = <strong>59,000 BTU per hour</strong> must be rejected outdoors.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Put these four points in loop order starting at the compressor outlet: (a) cold low-pressure liquid-vapor mixture enters the evaporator, (b) hot high-pressure vapor enters the condenser, (c) warm high-pressure liquid reaches the metering device, (d) low-pressure vapor returns to the compressor.</p>",
      solution: "<p><strong>Answer: b, c, a, d.</strong> Step 1: Discharge gas leaves the compressor first (b). Step 2: It condenses to warm high-pressure liquid (c). Step 3: The metering device drops its pressure, producing the cold mixture (a). Step 4: After boiling in the evaporator, low-pressure vapor returns to the compressor (d), and the loop repeats.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Which component creates the largest pressure rise in the system, which creates the largest pressure drop, and what sits between them on the high side?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The <strong>compressor</strong> creates the pressure rise, squeezing low-pressure vapor to discharge pressure. Step 2: The <strong>metering device</strong> creates the pressure drop, throttling liquid to evaporator pressure. Step 3: Between them on the high side sits the <strong>condenser</strong> (and the liquid line), where high-pressure vapor gives up heat and becomes liquid.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A walk-in cooler evaporator absorbs 18,000 BTU per hour and the compressor adds 5,000 BTU per hour. The condenser fan fails, so the condenser can reject only 15,000 BTU per hour. What happens, and why?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Required rejection is 18,000 + 5,000 = 23,000 BTU per hour. Step 2: Only 15,000 can leave, so heat backs up in the loop. Step 3: Condensing pressure and temperature climb, the compressor works harder and moves less refrigerant, and evaporator capacity falls. Step 4: The cooler warms until the system trips on a safety control or fails; fixing airflow restores the balance.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Why must the refrigerant entering the compressor be vapor, and which measurement later in this course proves that it is?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Liquids cannot be compressed; liquid slugs can break valves and wash oil off bearing surfaces. Step 2: The compressor is designed to squeeze vapor only. Step 3: The proving measurement is <strong>superheat</strong>: suction line temperature minus the saturation temperature for the suction pressure. A positive superheat value means the refrigerant at that point is vapor with heat to spare, not liquid.</p>"
    }
  ],
  quiz: [
    {
      q: "Refrigeration is best described as:",
      choices: ["Creating cold and adding it to a space", "Moving heat from where it is not wanted to where it does not matter", "Destroying heat inside the evaporator", "Cooling refrigerant so it can absorb cold from the air"],
      answer: 1,
      explanation: "Correct: (b). The system absorbs heat in one place and rejects it in another; heat is conserved and relocated. (a) Cold is not a substance that can be created or added. (c) Heat is never destroyed; it leaves at the condenser. (d) Air gives up heat to refrigerant, not cold to it."
    },
    {
      q: "In loop order starting with compression, the four processes are:",
      choices: ["Compression, evaporation, expansion, condensation", "Compression, condensation, evaporation, expansion", "Compression, condensation, expansion, evaporation", "Condensation, compression, expansion, evaporation"],
      answer: 2,
      explanation: "Correct: (c). Gas is compressed, condensed to liquid, expanded through the metering device, then evaporated. (a) swaps the last three processes out of order. (b) puts evaporation before expansion, but refrigerant must drop in pressure before it can boil cold. (d) starts with condensation, but hot gas only exists after compression."
    },
    {
      q: "The component that creates the pressure drop feeding the evaporator is the:",
      choices: ["Compressor", "Condenser", "Receiver", "Metering device"],
      answer: 3,
      explanation: "Correct: (d). The metering device is a deliberate restriction that throttles high-pressure liquid down to evaporator pressure. (a) The compressor creates a pressure rise, the opposite effect. (b) The condenser changes state at nearly constant pressure. (c) A receiver stores liquid; it does not meter flow."
    },
    {
      q: "A 3-ton system is rated at:",
      choices: ["36,000 BTU per hour", "12,000 BTU per hour", "3,000 BTU per hour", "360,000 BTU per hour"],
      answer: 0,
      explanation: "Correct: (a). One ton equals 12,000 BTU per hour, so 3 x 12,000 = 36,000. (b) is one ton, not three. (c) confuses tons with thousands of BTU. (d) multiplies by ten too many; it would be a 30-ton machine."
    },
    {
      q: "An evaporator absorbs 30,000 BTU per hour and compression adds 8,000 BTU per hour. The condenser must reject:",
      choices: ["22,000 BTU per hour", "30,000 BTU per hour", "38,000 BTU per hour", "8,000 BTU per hour"],
      answer: 2,
      explanation: "Correct: (c). Rejected heat = absorbed heat + compression heat = 30,000 + 8,000 = 38,000. (a) subtracts instead of adding. (b) forgets the compressor's contribution. (d) counts only the compressor's heat and ignores the load."
    },
    {
      q: "The high side of the system includes the:",
      choices: ["Evaporator and suction line", "Discharge line, condenser, and liquid line", "Metering device outlet and evaporator", "Suction line only"],
      answer: 1,
      explanation: "Correct: (b). Everything from the compressor outlet through the condenser to the metering device inlet is at high pressure. (a) and (d) name low-side parts. (c) names the start of the low side, after the pressure drop."
    },
    {
      q: "Flash gas forms at the metering device because:",
      choices: ["The compressor adds heat there", "Outdoor air cools the liquid line", "The sudden pressure drop makes part of the liquid boil, chilling the rest", "The evaporator fan blows across the valve"],
      answer: 2,
      explanation: "Correct: (c). When pressure crashes, a portion of liquid flashes to vapor using heat from the remaining liquid, which drops the mixture temperature. (a) Compression happens in the compressor, far upstream. (b) Liquid-line cooling is minor and is subcooling, not flashing. (d) The fan acts on the evaporator coil, not on the valve's internal process."
    },
    {
      q: "Liquid refrigerant reaching the compressor is dangerous mainly because:",
      choices: ["It makes discharge gas too cold to condense", "Liquids cannot be compressed and liquid can wash out oil and damage internal parts", "It lowers the electric bill too far", "It turns into flash gas in the liquid line"],
      answer: 1,
      explanation: "Correct: (b). Floodback risks mechanical damage and oil loss, which is why superheat is maintained. (a) The problem is damage, not a condensing issue. (c) Efficiency is not the safety concern and floodback usually hurts performance. (d) Flash gas forms at a pressure drop, not at the compressor inlet."
    }
  ],
  studyGuide: `
<h3>Module 1 — The Refrigeration Cycle & the Four Processes: Quick Reference</h3>
<p><strong>Core idea:</strong> Refrigeration moves heat; it never creates cold and never destroys heat.</p>
<p><strong>Loop order:</strong> Compressor → condenser → metering device → evaporator → back to compressor.</p>
<p><strong>Processes:</strong> Compression (pressure and temperature rise, vapor only) → Condensation (heat rejected, vapor becomes liquid) → Expansion (pressure and temperature crash, flash gas forms) → Evaporation (heat absorbed, liquid boils to vapor).</p>
<div class="formula">Condenser heat = Evaporator heat + Compressor heat &nbsp;|&nbsp; 1 ton = 12,000 BTU/hr</div>
<p><strong>Sides:</strong> High side = discharge line, condenser, liquid line. Low side = evaporator, suction line. The compressor and metering device are the dividing points.</p>
<p><strong>Lines:</strong> Suction = large, cool vapor, often insulated. Discharge = hot vapor. Liquid = smaller, warm liquid.</p>
<p><strong>Watch out:</strong> Liquid at the compressor (floodback) damages it. Positive superheat at the suction line is the proof that only vapor is arriving.</p>
<p><strong>Self-check:</strong> Trace one pound of refrigerant around the loop out loud, naming its state, pressure side, and temperature trend at every component. If you can narrate it without notes, Module 2's pressure and temperature fundamentals will build directly on it.</p>
`
};
