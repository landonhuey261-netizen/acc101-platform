// HVAC 207 - Module 1: Commercial Applications & Temperature Ranges
module.exports = {
  number: 1,
  slug: "commercial-applications-temperature-ranges",
  title: "Commercial Applications & Temperature Ranges",
  estTime: "3–4 hours",
  objectives: [
    "Sort commercial refrigeration jobs into high-, medium-, and low-temperature applications and state the box temperature band each one holds.",
    "Explain why the product, not the equipment catalog, decides the temperature an application must hold.",
    "Match common products — produce, dairy, fresh meat, ice cream — to the box temperatures they require.",
    "Describe the main case and cabinet types used in retail food and food service, and how each is loaded and accessed.",
    "Explain why evaporator temperature must run colder than box temperature, and what that difference means for frost and energy."
  ],
  sections: [
    {
      heading: "Three Temperature Families",
      html: `
<p>Commercial refrigeration is organized by <strong>application temperature</strong> — the temperature of the refrigerated space the equipment must hold. Techs sort nearly every job into one of three families. <strong>High-temperature</strong> applications hold boxes roughly in the 45–55°F range: wine storage, fresh flowers, and some produce rooms live here, cool but nowhere near freezing. <strong>Medium-temperature</strong> applications hold roughly 34–41°F: the classic walk-in cooler, reach-in refrigerator, and dairy case. This is the busiest family in food work, because most fresh food keeps best just above freezing. <strong>Low-temperature</strong> applications hold roughly −10–0°F: walk-in freezers, ice cream cabinets, and frozen-food cases.</p>
<p>The family matters because it changes everything downstream. A low-temperature box needs a compressor built to pump against a much larger pressure difference, an evaporator that must be actively defrosted, thicker insulation, and door heaters to keep the door from freezing shut. A medium-temperature cooler can often clear its coil frost just by pausing the refrigeration while the fans keep running. When someone says "the unit isn't working," your first question is always: what temperature is it supposed to hold?</p>
<div class="callout"><strong>Key idea:</strong> Classify the job by box temperature first — high (about 45–55°F), medium (about 34–41°F), low (about −10–0°F). The family predicts the compressor type, defrost method, and controls you will find before you ever open a panel.</div>
<p>Notice the bands overlap at the edges and real equipment is rated at specific test conditions, but the three-family picture will correctly frame almost every service call in this course.</p>`
    },
    {
      heading: "The Product Decides the Temperature",
      html: `
<p>Refrigeration exists to protect product, and product requirements set the thermostat — not habit, and not whatever the last tech dialed in. Food safety rules used across the food industry require refrigerated perishable food to be held at <strong>41°F or below</strong>, which is why medium-temperature boxes are typically run at 34–38°F: cold enough to keep the warmest product in the box under the limit, with a small safety margin. Freezers are run at 0°F or colder because frozen food quality — texture, color, and freezer-burn resistance — holds up best there, and ice cream in particular wants it colder still to stay firm enough to scoop and store.</p>
<p><strong>Worked example — reading a complaint.</strong> A deli manager reports the walk-in "feels warm" and the gauge on the wall reads 39°F. Step 1: Classify — this is a medium-temperature box; 39°F is inside the normal band. Step 2: Check product, not air alone — a probe in the milk reads 40°F, under the 41°F limit but with almost no margin. Step 3: Decide — the box is legal but fragile; a busy lunch rush with the door propped open could push product over the limit. The correct call is to find out why the box is riding the top of its band (dirty condenser, door gasket, heavy loading) before it becomes a health-code problem.</p>
<div class="callout"><strong>Key idea:</strong> Air temperature is what you measure first; product temperature is what actually matters. Always verify with a probe in the product (or a product-simulating bottle of glycol/water) before condemning or clearing a system.</div>`
    },
    {
      heading: "Case and Cabinet Types You'll Meet",
      html: `
<p><strong>Walk-ins</strong> are insulated panel rooms you step inside — covered in depth in Module 2. <strong>Reach-ins</strong> are upright cabinets with one to three doors, the workhorses of restaurant kitchens. <strong>Display cases</strong> are built to sell as well as store: open multi-deck cases use a curtain of cold air spilling down the front to hold product while shoppers reach in freely, while doored cases trade easy access for much lower energy use. <strong>Service cases</strong> in delis and butcher shops present product behind glass with staff access from the rear. <strong>Prep tables and undercounter units</strong> put medium-temperature storage at the cook's elbow. <strong>Ice machines</strong> are the odd family member: they manufacture a product instead of storing one, and get their own treatment in Module 3.</p>
<ul>
<li><strong>Open cases:</strong> fastest shopping access, highest energy use, most sensitive to store drafts and humidity.</li>
<li><strong>Doored cases:</strong> doors cut the cold-air spill dramatically; hinges, closers, and gaskets become critical parts.</li>
<li><strong>Self-contained units:</strong> the whole refrigeration system rides in or on the cabinet — plug it in and it runs (Module 3).</li>
<li><strong>Remote systems:</strong> the case holds only an evaporator; compressors and condensers live elsewhere, often on a rack (Module 5).</li>
</ul>
<p>On any new account, walk the floor and inventory what families and case types are present. That ten-minute survey tells you the refrigerants, controls, and failure patterns you are responsible for.</p>`
    },
    {
      heading: "Evaporator Temperature Runs Colder Than the Box",
      html: `
<p>Heat only flows from warmer to colder, so the evaporator coil must be <strong>colder than the box air</strong> it is cooling. The gap between box temperature and evaporating temperature is often called the <strong>TD (temperature difference)</strong> across the coil. In a medium-temperature cooler holding 36°F, the refrigerant inside the evaporator might be boiling at about 26–28°F. In a freezer holding 0°F, the evaporating temperature may be down near −10°F or lower.</p>
<p><strong>Worked example — checking plausibility with R-404A.</strong> R-404A is the classic commercial refrigeration refrigerant used throughout this course. On a cooler you read a suction pressure of about 66 psig at the evaporator. Step 1: For superheat work with R-404A you use the <strong>dew point</strong>: about 66 psig corresponds to a 40°F dew-point saturation temperature — too warm for a 36°F box, which tells you this reading was taken at a warmer point or the system is running warm; a healthy medium-temp evaporator boils colder than the box. Step 2: The lesson is the method — convert pressure to saturation temperature with the P/T chart for the named refrigerant, every time, and compare it against the box temperature the application demands.</p>
<div class="callout"><strong>Key idea:</strong> Because evaporators run below freezing even in a 36°F cooler, frost is a normal fact of commercial life. How each temperature family removes that frost is the whole subject of Module 6.</div>
<p>A wider TD dries the box air more (each pass wrings out more moisture) and needs less coil, but costs energy and frost; a narrow TD keeps humidity up for produce but needs a bigger coil. Designers chose the TD before you arrived — your job is to recognize when readings say the system is no longer achieving it.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Three families: high ≈ 45–55°F, medium ≈ 34–41°F, low ≈ −10–0°F box temperature.</li>
<li>Product requirements set the target: perishables at 41°F or below; frozen food at 0°F or below.</li>
<li>Case types — walk-ins, reach-ins, open and doored display cases, service cases, prep tables, ice machines — each in self-contained or remote form.</li>
<li>The evaporator always runs colder than the box (the TD), so frost management is built into every design.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Judging a box by how the air feels on your face. Moving cold air feels colder than still air at the same temperature, and a box mid-defrost feels warm while being perfectly healthy. Probe the product.</div>
<div class="callout"><strong>Common mistake:</strong> Turning the thermostat colder to fix a warm box. If the system cannot reach a reasonable setpoint, something is wrong — airflow, charge, frost, or load. A colder setpoint just runs a sick system longer and can freeze medium-temperature product.</div>
<p><strong>Certification link:</strong> The HVAC Excellence Employment Ready: Light Commercial Refrigeration exam expects exactly this map of applications and temperature ranges. Sorting equipment by temperature family is the first skill on the job and on the test.</p>
<p>One more sorting habit pays off immediately in the field: when you arrive at any cold fixture, say its family and its target band out loud before you touch a tool — "medium-temp case, should be holding mid-30s." That five-second habit frames every reading that follows and turns a vague "it's warm" into a measured gap between what the application promises and what it is delivering today.</p>`
    }
  ],
  keyTerms: [
    { term: "High-temperature application", def: "Refrigeration holding a box roughly 45–55°F, such as wine or flower storage." },
    { term: "Medium-temperature application", def: "Refrigeration holding a box roughly 34–41°F — coolers, reach-ins, and dairy cases." },
    { term: "Low-temperature application", def: "Refrigeration holding a box roughly −10–0°F — freezers and ice cream cabinets." },
    { term: "Box temperature", def: "The air temperature inside the refrigerated space that the system is responsible for holding." },
    { term: "Product temperature", def: "The actual temperature of the stored goods; the value food safety is judged by." },
    { term: "Walk-in", def: "An insulated panel room, large enough to enter, used as a cooler or freezer." },
    { term: "Reach-in", def: "An upright refrigerated cabinet with hinged doors, accessed from outside." },
    { term: "Display case", def: "A refrigerated fixture designed to present product for sale, open or doored." },
    { term: "Air curtain", def: "The controlled spill of cold air down the front of an open case that acts as an invisible door." },
    { term: "Self-contained", def: "Equipment with its complete refrigeration system built into the cabinet." },
    { term: "Remote system", def: "Equipment whose evaporator is in the case while compressor and condenser are located elsewhere." },
    { term: "Temperature difference (TD)", def: "The gap between box air temperature and the refrigerant's evaporating temperature in the coil." },
    { term: "Evaporating temperature", def: "The saturation temperature at which refrigerant boils inside the evaporator at the existing pressure." },
    { term: "R-404A", def: "A zeotropic HFC blend long used as the standard commercial refrigeration refrigerant; handled with dew point for superheat and bubble point for subcooling." },
    { term: "Dew point (P/T)", def: "For a blend, the saturation temperature at which the last vapor condenses; used to compute superheat." },
    { term: "Bubble point (P/T)", def: "For a blend, the saturation temperature at which the first bubble forms in liquid; used to compute subcooling." },
    { term: "Defrost", def: "The periodic removal of frost from an evaporator coil so airflow and heat transfer are restored." },
    { term: "Cold chain", def: "The unbroken sequence of refrigerated storage and transport that keeps perishable product safe from producer to buyer." }
  ],
  video: {
    title: "I Thought It Was Low on Refrigerant... I Was Dead Wrong",
    embedUrl: "https://www.youtube.com/embed/sGZ0AaU7MG0",
    note: "A real walk-in cooler service call that shows a medium-temperature application in its natural habitat — product at risk, a tech forming a first theory, and measurements overturning it. Watch how the call is framed by the temperature the box is supposed to hold.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Classify each job by temperature family (high, medium, or low) and give the box band it should hold: (a) a wine storage room, (b) a dairy walk-in, (c) an ice cream dipping cabinet, (d) a floral display case kept near 50°F.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Compare each product's needs to the three bands. Step 2: (a) Wine room — <strong>high temperature</strong>, about 45–55°F. (b) Dairy walk-in — <strong>medium temperature</strong>, about 34–41°F, because milk is a perishable that must stay at or below 41°F. (c) Ice cream cabinet — <strong>low temperature</strong>, about −10–0°F, and ice cream prefers the cold end of it. (d) Floral case — <strong>high temperature</strong>, about 45–55°F.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A sandwich shop's reach-in reads 44°F air temperature and the turkey inside probes at 43°F. The owner says, \"It still feels cold, it's fine.\" Write the two-sentence correction you would give, with the standard you are applying.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Judge by product temperature, not feel. Step 2: The applicable food-safety standard holds perishable food at <strong>41°F or below</strong>; at 43°F the product is out of compliance and in the range where bacteria multiply faster. Step 3: Say it plainly: \"The food itself is at 43 degrees, and the health standard is 41 or below, so this is a fix-it-today problem, not a wait-and-see — let me find out why the box is running warm before product has to be discarded.\"</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A medium-temperature cooler holds a 36°F box. The designer chose a 10°F TD across the evaporator. (a) What evaporating temperature is the coil running? (b) Will frost form on this coil? Why?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Evaporating temperature = box temperature − TD = 36 − 10 = <strong>26°F</strong>. Step 2: 26°F is below the freezing point of water, so moisture in the box air that lands on the coil <strong>will freeze into frost</strong>. Step 3: That is normal for this family — the design relies on off-cycle or scheduled defrost to clear it (Module 6).</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A store is choosing between an open multi-deck dairy case and a doored case for the same product line. Give two operating consequences of the open case the owner should hear before deciding.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The open case holds its temperature with an air curtain instead of a physical barrier. Step 2: Consequence one — <strong>energy</strong>: the open case spills cold air continuously and will cost substantially more to run. Step 3: Consequence two — <strong>sensitivity</strong>: store drafts, high humidity, and blocked return-air grilles disturb the curtain and show up quickly as warm product and heavy frost, so the open case needs more attentive maintenance.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> On an R-404A freezer, you read a suction pressure of about 16 psig at the compressor. Using the dew point for superheat-side work, R-404A at about 16 psig has a dew-point saturation temperature near −20°F. (a) Is this plausible for a 0°F box? (b) What would you check next?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: A 0°F box needs an evaporating temperature well below 0°F — about −10°F with a 10°F TD. Step 2: A −20°F dew-point saturation suggests the evaporator is boiling colder than design, which can happen with a starved coil or low load; the pressure alone is <strong>plausible but worth explaining</strong>, not automatically a fault. Step 3: Next, measure suction line temperature and compute superheat, then look at coil frost pattern and box load before touching the charge.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Why does a freezer door need a heated frame while a cooler door on the same wall does not?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The freezer holds about −10–0°F, far below freezing, so moist room air that leaks at the gasket freezes on the frame and can ice the door shut or hold it slightly open. Step 2: Frame heaters keep the gasket contact area above freezing so the seal stays flexible and ice cannot bridge it. Step 3: The cooler at 34–41°F sits around the freezing point; its gasket line rarely accumulates structural ice, so the heater's energy cost buys little and is usually omitted.</p>"
    }
  ],
  quiz: [
    {
      q: "A walk-in holding 36°F for milk and eggs is which temperature family?",
      choices: ["High temperature", "Medium temperature", "Low temperature", "Comfort cooling"],
      answer: 1,
      explanation: "Correct: (b). The 34–41°F band is medium temperature, the standard home of coolers and dairy cases. (a) High temperature is roughly 45–55°F — too warm for milk. (c) Low temperature is roughly −10–0°F, which would freeze the milk solid. (d) Comfort cooling is air conditioning for people, not a refrigeration application family."
    },
    {
      q: "Perishable refrigerated food must be held at or below:",
      choices: ["45°F", "50°F", "41°F", "35°F"],
      answer: 2,
      explanation: "Correct: (c). The widely used food-safety standard for refrigerated perishables is 41°F or below, which is why medium-temp boxes run 34–38°F to keep a margin. (a) and (b) are above the limit and allow faster bacterial growth. (d) is a fine operating target for a cooler but it is not the compliance limit itself."
    },
    {
      q: "An ice cream cabinet holding −5°F belongs to which family?",
      choices: ["Low temperature", "Medium temperature", "High temperature", "It is not a refrigeration application"],
      answer: 0,
      explanation: "Correct: (a). The −10–0°F band is low temperature, and ice cream needs the cold end of it to stay firm. (b) Medium temperature would melt ice cream to soup. (c) High temperature is wine-and-flowers territory. (d) It is very much a refrigeration application — a demanding one."
    },
    {
      q: "The evaporator in a 36°F cooler with a 10°F TD boils refrigerant at about:",
      choices: ["46°F", "36°F", "26°F", "10°F"],
      answer: 2,
      explanation: "Correct: (c). Evaporating temperature = box − TD = 36 − 10 = 26°F. (a) adds the TD instead of subtracting; a coil warmer than the box could not absorb heat. (b) ignores the TD entirely — equal temperatures move no heat. (d) confuses the TD value itself with the resulting temperature."
    },
    {
      q: "An open multi-deck case stays cold mainly by:",
      choices: ["A thick insulated glass door", "An air curtain of cold air spilling down the front", "Running its evaporator at freezer temperatures", "Shoppers opening it only briefly"],
      answer: 1,
      explanation: "Correct: (b). The air curtain is the invisible door on an open case. (a) describes a doored case — the open case's whole point is no door. (c) Open medium-temp cases run medium-temp evaporators; the curtain, not extreme cold, does the work. (d) There is no door for shoppers to open at all."
    },
    {
      q: "For superheat calculations with the blend R-404A, you convert pressure to temperature using the:",
      choices: ["Bubble point", "Average of bubble and dew", "Dew point", "Whichever value is printed larger on the cylinder"],
      answer: 2,
      explanation: "Correct: (c). Superheat describes vapor, so it uses the dew point (about 66 psig ≈ 40°F for R-404A). (a) The bubble point is for subcooling, which describes liquid. (b) Averaging invents a temperature the refrigerant never has. (d) Cylinder printing does not change the physics; the dew/bubble choice is fixed by the measurement."
    },
    {
      q: "The most reliable first check that a box is doing its job is:",
      choices: ["How cold the air feels on your face", "The thermostat dial setting", "A probe measurement of product temperature", "The sound of the compressor"],
      answer: 2,
      explanation: "Correct: (c). Product temperature is what the whole system exists to control and what food safety judges. (a) Moving air feels colder than it is, and defrost cycles feel warm while healthy. (b) A dial setting is an intention, not a result. (d) A running compressor can still be moving almost no heat."
    },
    {
      q: "Which pairing is correct?",
      choices: ["Wine room — low temperature", "Dairy walk-in — medium temperature", "Ice cream — high temperature", "Freezer — 45–55°F"],
      answer: 1,
      explanation: "Correct: (b). Dairy lives in the medium band, 34–41°F. (a) A wine room is high temperature; low temperature would ruin the wine and the corks. (c) Ice cream is low temperature; at high temperature it is a beverage. (d) A freezer at 45–55°F is simply a broken freezer."
    }
  ],
  studyGuide: `
<h3>Module 1 — Commercial Applications & Temperature Ranges: Quick Reference</h3>
<p><strong>Three families (box temperature):</strong> High ≈ 45–55°F (wine, flowers) · Medium ≈ 34–41°F (coolers, dairy, reach-ins) · Low ≈ −10–0°F (freezers, ice cream).</p>
<p><strong>Product rules:</strong> Perishable food at 41°F or below; frozen food at 0°F or below. Judge by product temperature, probed — never by feel.</p>
<p><strong>Case types:</strong> walk-ins, reach-ins, open display cases (air curtain), doored cases, service cases, prep tables, ice machines; each self-contained or remote.</p>
<div class="formula">Evaporating temperature = Box temperature − TD &nbsp;(a 36°F box at 10°F TD boils at 26°F)</div>
<p><strong>R-404A discipline:</strong> dew point for superheat (40°F ≈ 66 psig dew), bubble point for subcooling (40°F ≈ 62 psig bubble). Convert every pressure with the P/T chart for the named refrigerant.</p>
<p><strong>Watch out:</strong> Coils run below freezing even in coolers — frost is normal and defrost is a designed function, not a malfunction.</p>
<p><strong>Self-check:</strong> Walk any food store in your head and classify every cold fixture by family and case type. If you can do it without hesitating, you are ready for walk-ins in Module 2.</p>
`
};
