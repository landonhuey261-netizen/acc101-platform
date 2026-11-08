// Plumbing 122 - Module 1: Water Supply Fundamentals: Sources, Pressure & Flow
module.exports = {
  number: 1,
  slug: "water-supply-fundamentals",
  title: "Water Supply Fundamentals: Sources, Pressure & Flow",
  estTime: "3–4 hours",
  objectives: [
    "Explain what a water supply system does and how it differs from the DWV system studied in Plumbing 121.",
    "Name the water sources that serve buildings — municipal mains and private wells — and trace water from the source to a fixture.",
    "Distinguish pressure from flow and explain why a system can have one without the other.",
    "Use the 0.433 psi per foot rule to compute how elevation changes water pressure.",
    "Explain intermittent versus continuous demand and why the distinction matters when sizing pipe."
  ],
  sections: [
    {
      heading: "Two Systems, Opposite Jobs — Again",
      html: `
<p>In Plumbing 121 you learned the drain side: DWV moves used water <em>out</em> by gravity. This course is the other half of the building: the <strong>water supply system</strong> brings clean, potable water <em>in</em> — to every fixture, at the right pressure, in the right amount. Where DWV falls, supply pushes. The supply system is a <strong>pressurized delivery system</strong>: water arrives from the street main or a well pump under pressure, travels through the water service and distribution piping, and arrives at a faucet, shower, or toilet fill valve ready to use.</p>
<p>Three parts make up the supply path. The <strong>water service</strong> is the pipe from the water main (or well) into the building, usually with a meter and a main shutoff. The <strong>distribution piping</strong> is the network inside the building — cold-water mains and branches, hot-water piping from the heater, and the small branch to each fixture. The <strong>fixture supply</strong> is the final short connection, often a flexible connector or an angle stop and riser, that feeds one fixture. If you can name which part you are standing on, you can diagnose almost any supply problem.</p>
<p>Everything in this course serves three promises to the user of a fixture: water that is <strong>clean</strong> (safe to drink), water that is <strong>enough</strong> (the flow the fixture needs), and water that is <strong>steady</strong> (pressure that does not collapse when a second fixture opens). Module 8 covers the clean promise, Modules 2 and 3 cover the enough promise, and Module 5 covers the steady promise.</p>
<div class="callout"><strong>Key idea:</strong> Supply is pressure in; DWV is gravity out. If a problem involves water arriving too slowly, too weakly, or not at all, you are on the supply side. If it involves water leaving too slowly, you are on the drain side.</div>`
    },
    {
      heading: "Where the Water Comes From",
      html: `
<p>Most buildings get water from a <strong>municipal water main</strong> — a large pipe in the street, owned and pressurized by the water utility. The building connects to it through a <strong>water service</strong> pipe, usually with a <strong>curb stop</strong> (a shutoff valve at the property line, operated by the utility) and a <strong>water meter</strong> that measures use. From the meter, the service enters the building and becomes the cold-water main. Municipal pressure varies by neighborhood and by time of day: it is typically highest at night when few people are using water, and lowest in the morning when everyone showers at once.</p>
<p>Buildings beyond the municipal system use a <strong>private water supply</strong> — usually a well with a pump and a pressure tank (Module 10). The pump lifts water from the ground, and the pressure tank stores it under air pressure so the fixtures see steady pressure between pump cycles. A private supply puts the plumber in charge of the whole chain: source, pump, pressure, and treatment, with no utility to call when something fails.</p>
<p>Whichever source serves the building, the water must be <strong>potable</strong> — safe to drink. Potable water piping is kept strictly separate from any non-potable source, and every connection between the two is a cross-connection that must be protected (Module 8). A plumber's first duty on the supply side is protecting the drinking water.</p>
<div class="callout"><strong>Key idea:</strong> Trace the supply path out loud until it is automatic: main or well → service → curb stop → meter → main shutoff → cold-water main → branches → fixture supply → fixture. Every sizing and protection rule in this course hangs on knowing exactly which segment you are standing on.</div>`
    },
    {
      heading: "Pressure Is Not Flow",
      html: `
<p>Beginners confuse pressure and flow, and the confusion causes real mistakes. <strong>Pressure</strong> is force: how hard the water pushes, measured in pounds per square inch (psi). <strong>Flow</strong> is volume: how much water arrives, measured in gallons per minute (gpm). A tiny pinhole in a garden hose can have very high pressure and almost no flow. A wide-open fire hydrant has enormous flow. A good supply system needs both: enough pressure to reach the fixture, and enough flow to satisfy it.</p>
<p>Two pressures matter on the job. <strong>Static pressure</strong> is the pressure with no water flowing — the reading on a gauge when every faucet is closed. <strong>Residual (or flowing) pressure</strong> is the pressure while water is flowing. Residual is always lower than static, because flowing water loses pressure to friction in the pipes. A system that reads 60 psi static may read 35 psi at a shower when the washing machine is also running. Fixture requirements in the code are stated as residual pressure at the fixture outlet, not static pressure at the meter.</p>
<p>IPC Table 604.3 sets the minimum flow and residual pressure each fixture needs. A private lavatory needs <strong>1.5 gpm at 8 psi</strong>; a shower needs <strong>2 gpm at 8 psi</strong>; a bathtub needs <strong>4 gpm at 20 psi</strong>; a kitchen sink needs <strong>2.2 gpm at 8 psi</strong>; a close-coupled water closet needs <strong>3 gpm at 15 psi</strong>; and a sillcock (hose bibb) needs <strong>5 gpm at 8 psi</strong>. If the residual pressure at the fixture falls below the table value, the fixture cannot do its job, no matter how good the static pressure looks on a gauge.</p>
<div class="callout"><strong>Key idea:</strong> Static pressure is what the system holds when idle. Residual pressure is what the fixture actually gets while working — and residual is the number the code cares about.</div>
<p><strong>Worked check:</strong> A gauge on a hose bibb reads 60 psi with all fixtures off (static). The washing machine starts and the gauge falls to 40 psi. The 20 psi difference is friction loss in the service and distribution piping at that flow — the reason Module 3 sizes pipe by flow, not by pressure alone.</p>`
    },
    {
      heading: "Elevation: Water Gets Heavier Going Up",
      html: `
<p>Water has weight, and lifting it costs pressure. One foot of water exerts about <strong>0.433 psi</strong> of pressure, so every foot of elevation gain costs about 0.433 psi. The rule is simple and you will use it constantly: <strong>pressure change = height in feet × 0.433</strong>. A fixture 20 feet above the meter loses about 8.7 psi before friction is even counted. A fixture 20 feet below the meter gains about 8.7 psi.</p>
<p>This is why a third-floor shower can be weak while the basement laundry tub blasts. It is also why tall buildings need booster pumps (Module 5) and why basement fixtures sometimes need pressure reduction. Elevation is a fact of the building, not a defect in the piping — you design around it, you do not fight it.</p>
<p>Elevation also explains the water tower. A municipal water tower is a tank on legs: the height of the water in the tower sets the pressure in the streets below it. A tower 100 feet tall delivers about 43 psi to the street. The utility raises and lowers the water level to hold the town's pressure steady. Your house is a small version of the same physics.</p>
<div class="callout"><strong>Key idea:</strong> Every foot up costs 0.433 psi; every foot down gains 0.433 psi. A 20-foot rise costs about 8.7 psi — enough to matter at a shower.</div>
<p><strong>Worked check:</strong> Street pressure is 45 psi at the meter. The highest fixture is 20 feet above the meter. Pressure at that fixture before friction loss = 45 − (20 × 0.433) = 45 − 8.7 = about <strong>36 psi</strong>.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Supply is a pressurized delivery system: main or well → service → meter → main shutoff → cold-water main → branches → fixture supply → fixture.</li>
<li>Pressure is force (psi); flow is volume (gpm). A system needs both.</li>
<li>Static pressure is measured with no flow; residual pressure is measured while flowing, and the code's fixture requirements use residual pressure.</li>
<li>IPC Table 604.3 minimums: lavatory 1.5 gpm at 8 psi; shower 2 gpm at 8 psi; bathtub 4 gpm at 20 psi; kitchen sink 2.2 gpm at 8 psi; close-coupled water closet 3 gpm at 15 psi; sillcock 5 gpm at 8 psi.</li>
<li>Elevation costs about 0.433 psi per foot going up.</li>
<li>Intermittent demands (fixtures) are brief and unpredictable; continuous demands (hose bibbs, irrigation) run for a long time and are added separately when sizing.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Sizing a system from static pressure alone. A gauge reading of 60 psi with everything off tells you nothing about what a shower gets when the washing machine runs. Always work from residual pressure and flow together.</div>
<div class="callout"><strong>Common mistake:</strong> Treating pressure and flow as the same thing. A system can have high pressure and poor flow (undersized pipe), or good flow and low pressure (too much elevation). Diagnose which one is missing before you pick a fix.</div>
<p><strong>Ready-to-Work link:</strong> NCCER Plumbing Level 1 expects you to identify water supply components and explain how pressure and flow work together. If you can explain to a homeowner why their upstairs shower is weak while the basement tap is strong, you have this module.</p>`
    }
  ],
  keyTerms: [
    { term: "Water supply system", def: "The pressurized piping system that delivers potable water from the source to every fixture in a building." },
    { term: "Potable water", def: "Water safe for drinking, cooking, and bathing; supply piping carries potable water only." },
    { term: "Water service", def: "The pipe from the water main or well into the building, including the curb stop, meter, and main shutoff." },
    { term: "Water main", def: "A large pipe in the street, owned by the water utility, that supplies water to connected buildings." },
    { term: "Curb stop", def: "A shutoff valve at the property line on the water service, operated by the utility to stop water to a building." },
    { term: "Water meter", def: "A device on the water service that measures the volume of water used, usually in gallons or cubic feet." },
    { term: "Distribution piping", def: "The network of cold- and hot-water mains and branches inside a building that feeds each fixture." },
    { term: "Fixture supply", def: "The final short connection — often an angle stop and riser — that feeds one fixture from a branch." },
    { term: "Pressure", def: "Force exerted by water, measured in pounds per square inch (psi)." },
    { term: "Flow", def: "Volume of water delivered over time, measured in gallons per minute (gpm)." },
    { term: "Static pressure", def: "Water pressure measured with no water flowing; the highest pressure a system normally shows." },
    { term: "Residual pressure", def: "Water pressure measured while water is flowing; always lower than static because of friction loss." },
    { term: "Friction loss", def: "Pressure lost as water flows through pipe and fittings; increases with flow rate and pipe length." },
    { term: "Elevation pressure", def: "Pressure gained or lost with height: about 0.433 psi per foot of water column." },
    { term: "Intermittent demand", def: "Short, unpredictable water use by fixtures such as toilets, sinks, and showers." },
    { term: "Continuous demand", def: "Long, steady water use such as a hose bibb, irrigation, or a filling pool; added separately when sizing." },
    { term: "Sillcock (hose bibb)", def: "An outdoor faucet; needs 5 gpm at 8 psi under IPC Table 604.3." },
    { term: "IPC Table 604.3", def: "The IPC table of minimum flow rates and residual pressures at fixture outlets." }
  ],
  video: {
    title: "How Your Home Plumbing Works (From Start to Finish) | GOT2LEARN",
    embedUrl: "https://www.youtube.com/embed/8jxRn-T_LCs",
    note: "A full walkthrough of a home plumbing system from the street to the fixtures — watch how the supply side and the drain side meet at each fixture, then compare the path with the one in this module.",
    more: [
      { title: "How Plumbing Works in Your House, Street to Sewer", url: "https://www.youtube.com/watch?v=rPPk9bEVBG8" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> In your own words, explain the difference between the water supply system and the DWV system in two or three sentences a homeowner could follow.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The supply system brings clean water <em>in</em> under pressure, so it can climb to upstairs fixtures. Step 2: The DWV system carries used water and waste <em>out</em> by gravity alone, with no pump and no pressure. Step 3: The two systems meet only at fixtures, and they never connect directly, so dirty water cannot flow back into the clean supply.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> List, in order, every segment water passes through from a municipal main to a second-floor shower.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Water main in the street. Step 2: Water service pipe. Step 3: Curb stop. Step 4: Water meter. Step 5: Main shutoff. Step 6: Cold-water main inside the building. Step 7: Branch to the bathroom. Step 8: Fixture supply (angle stop and riser). Step 9: Shower valve and showerhead.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A gauge reads 60 psi with all fixtures off and 40 psi while the washing machine runs. Name both readings and explain the 20 psi difference.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: 60 psi is the static pressure — no water flowing. Step 2: 40 psi is the residual (flowing) pressure. Step 3: The 20 psi difference is friction loss in the service and distribution piping at the washing machine's flow rate. Step 4: Residual pressure, not static, is what the fixture actually gets.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Street pressure is 50 psi at the meter. A fixture is 23 feet above the meter. What is the pressure at the fixture before friction loss?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Elevation loss = 23 ft × 0.433 psi/ft = about 10 psi. Step 2: Pressure at the fixture = 50 − 10 = <strong>about 40 psi</strong>. Step 3: Friction loss in the piping would reduce it further, so 40 psi is the best case.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A basement laundry tub has very strong flow while the third-floor shower is weak, and both are on the same system. Explain why in two sentences.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The basement fixture sits below the meter, so it gains pressure from elevation (about 0.433 psi per foot down). Step 2: The third-floor shower sits above the meter, so it loses about 0.433 psi per foot up — and then loses more to friction in the longer pipe run. The difference is elevation, not a defect in either fixture.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A homeowner wants a hose bibb for watering the lawn and a new bathroom. Which is a continuous demand and which is intermittent, and why does the distinction matter for sizing?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The hose bibb is a continuous demand — it may run for an hour at a steady rate. Step 2: The bathroom fixtures are intermittent — brief, unpredictable use. Step 3: The distinction matters because intermittent fixtures are sized by probability (the Hunter curve, Module 3) while continuous demands are added in full, in gpm, after the curve. Sizing the hose bibb through the curve would understate the real demand.</p>"
    }
  ],
  quiz: [
    {
      q: "The water supply system differs from the DWV system mainly in that the supply system:",
      choices: ["Works by gravity alone", "Delivers clean water under pressure to fixtures", "Carries waste out of the building", "Has no pipes inside the building"],
      answer: 1,
      explanation: "Correct: (b). The supply side pushes clean water in under pressure. (a) describes the DWV side. (c) describes the DWV side. (d) The supply system has extensive piping inside the building."
    },
    {
      q: "In order from the source outward, the correct supply sequence is:",
      choices: ["Fixture → branch → meter → main", "Main → service → curb stop → meter → main shutoff → cold-water main → branch → fixture supply", "Meter → main → service → fixture", "Curb stop → fixture → branch → meter"],
      answer: 1,
      explanation: "Correct: (b). Water travels from the main through the service, curb stop, and meter, past the main shutoff, into the cold-water main, along a branch, and through the fixture supply to the fixture. (a) runs the path backwards. (c) skips the service, curb stop, and shutoff. (d) starts in the middle and runs backwards."
    },
    {
      q: "Static pressure is measured:",
      choices: ["While water is flowing at full rate", "With no water flowing", "Only at the water heater", "Only at the highest fixture"],
      answer: 1,
      explanation: "Correct: (b). Static pressure is the no-flow reading. (a) describes residual pressure. (c) Static pressure can be measured anywhere, not only at the heater. (d) Any gauge location gives a static reading with no flow."
    },
    {
      q: "Under IPC Table 604.3, a private lavatory must receive at least:",
      choices: ["1.5 gpm at 8 psi", "2.2 gpm at 8 psi", "3 gpm at 15 psi", "5 gpm at 8 psi"],
      answer: 0,
      explanation: "Correct: (a). Table 604.3 gives a private lavatory 1.5 gpm at 8 psi. (b) is the kitchen sink flow. (c) is the close-coupled water closet. (d) is the sillcock."
    },
    {
      q: "Under IPC Table 604.3, a shower must receive at least:",
      choices: ["1.5 gpm at 8 psi", "2 gpm at 8 psi", "4 gpm at 20 psi", "5 gpm at 8 psi"],
      answer: 1,
      explanation: "Correct: (b). Table 604.3 gives a shower 2 gpm at 8 psi. (a) is the private lavatory. (c) is the bathtub. (d) is the sillcock."
    },
    {
      q: "A fixture 20 feet above the meter loses about how much pressure to elevation?",
      choices: ["0.433 psi", "4.3 psi", "8.7 psi", "20 psi"],
      answer: 2,
      explanation: "Correct: (c). 20 ft × 0.433 psi/ft is about 8.7 psi. (a) is the loss for one foot. (b) is the loss for ten feet. (d) treats one foot as one psi, which overstates the loss by more than double."
    },
    {
      q: "A hose bibb used for irrigation is an example of:",
      choices: ["An intermittent demand", "A continuous demand", "A drain fixture", "A vent terminal"],
      answer: 1,
      explanation: "Correct: (b). Irrigation runs steadily for a long time. (a) describes fixtures with brief, unpredictable use. (c) A hose bibb supplies water; it does not drain it. (d) A vent terminal is a DWV part."
    },
    {
      q: "Residual pressure is always lower than static pressure because:",
      choices: ["The water heater cools the water", "Flowing water loses pressure to friction in the pipes", "The meter stops turning", "The PRV closes when fixtures open"],
      answer: 1,
      explanation: "Correct: (b). Friction loss grows with flow, so flowing pressure is lower than no-flow pressure. (a) Heater temperature does not affect pressure. (c) The meter keeps turning while water flows. (d) A PRV regulates pressure; it does not close when fixtures open."
    }
  ],
  studyGuide: `
<h3>Module 1 — Water Supply Fundamentals: Quick Reference</h3>
<p><strong>Core idea:</strong> Supply is pressure in; DWV is gravity out. The supply system promises clean water, enough flow, and steady pressure at every fixture.</p>
<p><strong>Path:</strong> Main or well → service → curb stop → meter → main shutoff → cold-water main → branches → fixture supply → fixture.</p>
<p><strong>Pressure vs. flow:</strong> Pressure is force (psi); flow is volume (gpm). A system needs both.</p>
<div class="formula">Elevation rule: pressure change (psi) = height (ft) × 0.433 &nbsp;|&nbsp; 1 foot of water ≈ 0.433 psi</div>
<p><strong>IPC Table 604.3 minimums:</strong> Lavatory 1.5 gpm @ 8 psi; shower 2 gpm @ 8 psi; bathtub 4 gpm @ 20 psi; kitchen sink 2.2 gpm @ 8 psi; close-coupled water closet 3 gpm @ 15 psi; sillcock 5 gpm @ 8 psi.</p>
<p><strong>Static vs. residual:</strong> Static is no-flow pressure; residual is flowing pressure, always lower because of friction. The code's fixture numbers use residual pressure.</p>
<p><strong>Demands:</strong> Intermittent fixtures (brief, unpredictable) are sized by probability; continuous demands (hose bibbs, irrigation) are added in full, in gpm, after the curve.</p>
<p><strong>Self-check:</strong> Street pressure is 55 psi and the highest fixture is 30 feet above the meter. What is the pressure there before friction loss? (Answer: 55 − 13 = about 42 psi.)</p>
`
};
