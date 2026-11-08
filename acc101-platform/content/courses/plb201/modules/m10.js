// Plumbing 201 - Module 10: Storm Drainage (IPC Ch. 11; NCCER 02306)
module.exports = {
  number: 10,
  slug: "storm-drainage",
  title: "Storm Drainage (IPC Ch. 11; NCCER 02306)",
  estTime: "3–4 hours",
  objectives: [
    "Explain what storm drainage carries and how it differs from sanitary drainage.",
    "Convert a roof area and a rainfall rate into a design flow in gpm using Equation 11-1.",
    "Size vertical leaders with Table 1106.3 and horizontal storm drains with Table 1106.2.",
    "Explain the 100-year, 1-hour rainfall rate and where to find it for a Michigan location.",
    "Describe roof drains, scuppers, gutters, and secondary (emergency) drainage, and why a roof needs both."
  ],
  sections: [
    {
      heading: "Storm Water Is Not Sewage",
      html: `
<p>Storm drainage carries rainwater off roofs and paved areas. It is a separate system from sanitary drainage, and the two must not be mixed: rainwater does not need sewage treatment, and sewage must never be sent to a storm drain that discharges to a river or lake. Chapter 11, Storm Drainage, governs the roof drains, gutters, leaders, and storm drains that move rainwater from a building to an approved point of disposal — a public storm sewer, a detention system, or another approved discharge.</p>
<p>The system has three parts. <strong>Roof drains and gutters</strong> collect the water at the roof. <strong>Leaders</strong> (also called downspouts or conductors) carry it vertically down the outside or inside of the building. <strong>Building storm drains and sewers</strong> carry it horizontally away from the building. Each part is sized for the same design flow, and each part's sizing table is in Chapter 11.</p>
<p>Storm drainage is designed for a storm that is rare but real: the <strong>100-year, 1-hour rainfall rate</strong> — the heaviest hour of rain expected, on average, once in a hundred years at that location. Designing for an average storm would leave the roof underwater in a bad one, and a roof full of standing water is a structural load the building was not designed to carry. The code designs for the bad storm so the roof never has to.</p>
<div class="callout"><strong>Key idea:</strong> Storm water and sewage are separate systems that never mix. Storm drainage is sized for the 100-year, 1-hour storm, not the average rain.</div>`
    },
    {
      heading: "From Roof Area to Gallons per Minute: Equation 11-1",
      html: `
<p>The first calculation in storm drainage turns a roof area and a rainfall rate into a flow. <strong>Equation 11-1</strong> is simple: flow in gallons per minute equals the rainfall rate in inches per hour times the roof area in square feet, divided by 96. In symbols: GPM = R × A ÷ 96. The 96 is a unit conversion: one inch of rain per hour falling on one square foot is about 0.0104 gallons per minute, and 1 ÷ 0.0104 is roughly 96.</p>
<p>Work the code's own example. A roof of 2,500 square feet at a rainfall rate of 4 inches per hour gives 4 × 2,500 ÷ 96 = <strong>104.2 gpm</strong>. That is the flow the leaders and storm drains must carry. A second example: a 4,000-square-foot roof at 4 inches per hour gives 4 × 4,000 ÷ 96 = <strong>166.7 gpm</strong>. The arithmetic is easy; the skill is in the inputs — the roof area and the rainfall rate — and both must be right.</p>
<p>Roof area means the <strong>projected horizontal area</strong> of the roof, not the sloped surface area: measure the roof as if you were looking straight down at it. Vertical walls that drain onto the roof count too — their area is added to the roof area, because the rain that hits them ends up on the roof. Parapets do not count, because the rain that hits them does not drain onto the roof.</p>
<div class="callout"><strong>Key idea:</strong> GPM = R × A ÷ 96. Roof area is the projected horizontal area, plus any vertical wall area that drains onto the roof.</div>`
    },
    {
      heading: "The Rainfall Rate: 100-Year, 1-Hour, for Your City",
      html: `
<p>The rainfall rate is not a guess and not a national number. It is the <strong>100-year, 1-hour rainfall rate</strong> for the building's location, taken from the code's rainfall figures (Figures 1106.1(1) through 1106.1(5)) or from <strong>Appendix B, Rates of Rainfall for Various Cities</strong>, or from other approved local weather data. The figures trace back to National Weather Service and NOAA data, and they vary widely: a city in the desert and a city on the Gulf Coast have very different design storms.</p>
<p>For Michigan, look up the city in Appendix B or the rainfall figures — do not use a rate from another state, and do not use an average annual rainfall. A rate of 4 inches per hour is a common teaching example, but the rate for a given Michigan city is whatever Appendix B or the figures say for that city. On the exam, the rate is given in the question or in a table provided with it; your job is to use the given rate, not to remember one.</p>
<p>Note that the code's storm tables changed between editions. In the 2021 IPC, the tables are indexed by <strong>flow in gpm</strong>: Table 1106.3 sizes vertical leaders by flow, and Table 1106.2 sizes horizontal storm drain piping by flow and slope. Older editions indexed the same tables by roof area at a stated rainfall rate. Always check which edition's table you are reading, because the two kinds of tables are used differently.</p>
<div class="callout"><strong>Key idea:</strong> The rainfall rate comes from the code's figures or Appendix B for the building's city. Never borrow a rate from another place, and never use an average rainfall.</div>`
    },
    {
      heading: "Sizing Leaders and Storm Drains",
      html: `
<p><strong>Vertical leaders</strong> are sized from <strong>Table 1106.3</strong>, which gives the maximum flow in gpm for each leader size: a 2-inch leader carries 30 gpm, a 2-1/2-inch leader 54 gpm, a 3-inch leader 92 gpm, a 4-inch leader 192 gpm, a 5-inch leader 360 gpm, a 6-inch leader 563 gpm, and an 8-inch leader 1,208 gpm. Take the flow from Equation 11-1 and pick the smallest leader that carries it. The 4,000-square-foot roof at 4 inches per hour (166.7 gpm) needs a 4-inch leader (192 gpm) — a 3-inch leader (92 gpm) would be far too small.</p>
<p><strong>Horizontal storm drains</strong> are sized from <strong>Table 1106.2</strong>, which gives capacity in gpm by pipe size and slope. A 4-inch storm drain at 1/2 inch per foot carries 231 gpm; at 1/8 inch per foot it carries 115 gpm. Slope matters more here than in sanitary drainage, because the table's capacities swing widely with it — and the code requires the horizontal storm drain to be sized for the flow through the roof drain, checked against the roof drain manufacturer's published flow rate for that drain.</p>
<p>Two more rules complete the system. <strong>Roof drains</strong> must be sized for the flow and installed with proper flashing and strainers, and the roof must have <strong>secondary (emergency) drainage</strong> — scuppers or a second set of drains — sized for the same storm, so that if the primary drains clog, the water has somewhere to go before the roof's structural load is exceeded. A roof with only one way off is a roof one clog away from a collapse.</p>
<div class="callout"><strong>Key idea:</strong> Leaders from Table 1106.3 by flow (4 in = 192 gpm); horizontal storm drains from Table 1106.2 by flow and slope (4 in = 231 gpm at 1/2 in/ft). And every roof needs a secondary way off.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Storm drainage is separate from sanitary drainage; rainwater never goes to the sanitary sewer and sewage never goes to the storm drain.</li>
<li>Equation 11-1: GPM = rainfall rate (in/hr) × roof area (sq ft) ÷ 96. Example: 2,500 sq ft at 4 in/hr = 104.2 gpm.</li>
<li>Rainfall rate is the 100-year, 1-hour rate for the location, from the code's figures or Appendix B.</li>
<li>Roof area is the projected horizontal area, plus vertical wall area draining onto the roof.</li>
<li>Leaders (Table 1106.3): 2 in = 30 gpm, 2-1/2 in = 54, 3 in = 92, 4 in = 192, 5 in = 360, 6 in = 563, 8 in = 1,208 gpm.</li>
<li>Horizontal storm drains (Table 1106.2) by flow and slope; 4 in = 231 gpm at 1/2 in/ft.</li>
<li>Secondary (emergency) drainage — scuppers or a second drain set — is required, sized for the same storm.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Sizing storm drains for the average rain instead of the 100-year, 1-hour storm. The average storm is not the one that floods the roof.</div>
<div class="callout"><strong>Common mistake:</strong> Using the sloped surface area of the roof instead of the projected horizontal area. The code's equation uses the horizontal projection — the sloped area overstates the rain the roof actually catches.</div>
<p><strong>Ready-to-Work link:</strong> Storm drainage sizing is a compact, high-value exam topic: one equation, two tables, and a rainfall rate you are given. The plb202 stormwater module builds on this one for site drainage beyond the roof.</p>`
    }
  ],
  keyTerms: [
    { term: "Storm drainage", def: "The system that carries rainwater from roofs and paved areas to approved disposal, separate from sanitary drainage." },
    { term: "100-year, 1-hour rainfall rate", def: "The heaviest hour of rain expected on average once in 100 years at a location; the design storm for Chapter 11." },
    { term: "Equation 11-1", def: "GPM = rainfall rate (in/hr) × roof area (sq ft) ÷ 96; converts rain on a roof into a design flow." },
    { term: "Projected roof area", def: "The roof's area measured as if viewed straight down; the area input to Equation 11-1, plus vertical wall area draining onto the roof." },
    { term: "Leader / conductor", def: "A vertical pipe carrying storm water from a roof drain or gutter down the building; sized by Table 1106.3." },
    { term: "Table 1106.3", def: "Vertical leader sizing by maximum flow in gpm (2 in = 30 gpm through 8 in = 1,208 gpm)." },
    { term: "Table 1106.2", def: "Storm drain pipe sizing by capacity in gpm, by pipe size and slope." },
    { term: "Roof drain", def: "A drain set into a roof (usually flat or low-slope) that collects rainwater and passes it to a leader." },
    { term: "Scupper", def: "An opening in a parapet or roof edge that lets water flow off the roof; used for secondary (emergency) drainage." },
    { term: "Secondary (emergency) drainage", def: "A second drainage path (scuppers or extra drains) sized for the same storm, so a clogged primary drain cannot flood the roof." },
    { term: "Gutter", def: "A channel at a roof edge that collects rainwater and carries it to a leader." },
    { term: "Appendix B", def: "The IPC appendix listing rainfall rates for various cities." },
    { term: "Building storm drain", def: "The horizontal storm piping inside the building, carrying leader flow to the building storm sewer." },
    { term: "Building storm sewer", def: "The storm piping outside the building, from the building storm drain to the public storm sewer or approved disposal." }
  ],
  video: {
    title: "Rain water pipe in commercial buildings -Building Drainage Systems",
    embedUrl: "https://www.youtube.com/embed/TuO0kX2ogBI",
    note: "A professional guide to rainwater pipe sizing and layout for commercial buildings: how many pipes a roof area needs and which pipe sizes carry the flow. Watch it with Equation 11-1 in hand and check the video's sizing logic against the leader and storm-drain tables in this module.",
    more: [
      { title: "How To Design Storm Water Drainage System_Full Design Process with Calculations Step By Step.", url: "https://www.youtube.com/watch?v=EsW1eiRyjj8" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A roof has a projected area of 2,500 square feet and the design rainfall rate is 4 inches per hour. What is the design flow in gpm? Show the equation.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: GPM = R × A ÷ 96. Step 2: GPM = 4 × 2,500 ÷ 96 = 10,000 ÷ 96 = <strong>104.2 gpm</strong>. Step 3: This is the flow the leaders and storm drains must carry, and the roof drain manufacturer's flow rate must also be checked against it.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A 4,000-square-foot roof at 4 inches per hour needs a leader. What size is required from Table 1106.3, and why not the next size down?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: GPM = 4 × 4,000 ÷ 96 = <strong>166.7 gpm</strong>. Step 2: Table 1106.3: 3-inch leader = 92 gpm, 4-inch leader = 192 gpm. Step 3: A 3-inch leader (92 gpm) cannot carry 166.7 gpm, so the smallest adequate size is <strong>4 inches</strong> (192 gpm).</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A 4-inch horizontal storm drain at 1/2 inch per foot carries 231 gpm. The design flow is 200 gpm. Does it pass? What if the slope were 1/8 inch per foot?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: At 1/2 inch per foot, 231 gpm capacity covers the 200 gpm flow — it passes. Step 2: At 1/8 inch per foot, a 4-inch storm drain carries only 115 gpm, which is below 200 gpm — it fails. Step 3: The fix is to steepen the slope back to 1/2 inch per foot or increase the pipe size; slope is a sizing input, not a detail.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A roof measures 40 feet by 60 feet in plan, with a vertical wall of 200 square feet draining onto it. What is the roof area used in Equation 11-1?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Projected horizontal area = 40 × 60 = 2,400 square feet. Step 2: Add the vertical wall area that drains onto the roof: 2,400 + 200 = <strong>2,600 square feet</strong>. Step 3: Use 2,600 square feet in Equation 11-1 — the sloped surface area is not used, and parapets are not added.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A flat roof has one set of roof drains and no scuppers or secondary drains. The owner says the primary drains are new and will not clog. What is wrong with this reasoning?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The code requires secondary (emergency) drainage sized for the same storm, regardless of how new the primary drains are. Step 2: Leaves, debris, and ice clog drains without warning, and a roof with no second way off fills with water until its structural load is exceeded. Step 3: Install scuppers or a second set of drains as the secondary path; 'it will not clog' is not a code argument.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A contractor sizes a storm drain using a rainfall rate of 2 inches per hour because that is the city's average hourly rainfall in a wet month. What is the error, and what rate should be used?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The error is using an average instead of the design storm. Step 2: The code requires the 100-year, 1-hour rainfall rate for the location, from the code's figures or Appendix B. Step 3: An average rate understates the design flow by half or more, so the drains would be undersized for the storm the code is written for.</p>"
    }
  ],
  quiz: [
    {
      q: "Storm drainage and sanitary drainage:",
      choices: ["Are the same system", "Are separate systems that must never be mixed", "Share the same sizing tables", "Both discharge to the public sewer"],
      answer: 1,
      explanation: "Correct: (b). Rainwater and sewage are separate systems with separate disposal. (a) They are distinct by design. (c) They use different tables (Chapter 7 vs. Chapter 11). (d) Storm water goes to storm disposal, not the sanitary sewer."
    },
    {
      q: "Equation 11-1 is:",
      choices: ["GPM = R × A ÷ 96", "GPM = R + A", "DFU = R × A", "GPM = A ÷ R"],
      answer: 0,
      explanation: "Correct: (a). Flow equals rainfall rate times roof area divided by 96. (b) Adding the inputs is not the conversion. (c) DFU is a sanitary drainage unit, not a storm flow. (d) Dividing area by rate inverts the relationship."
    },
    {
      q: "A 2,500 sq ft roof at 4 in/hr produces a design flow of:",
      choices: ["96 gpm", "100 gpm", "104.2 gpm", "166.7 gpm"],
      answer: 2,
      explanation: "Correct: (c). 4 × 2,500 ÷ 96 = 104.2 gpm. (a) 96 is the divisor, not the answer. (b) 100 is a round-number guess. (d) 166.7 gpm is a 4,000 sq ft roof at 4 in/hr."
    },
    {
      q: "A 4-inch vertical leader carries a maximum of:",
      choices: ["92 gpm", "192 gpm", "360 gpm", "30 gpm"],
      answer: 1,
      explanation: "Correct: (b). Table 1106.3: 4-inch leader = 192 gpm. (a) 92 gpm is a 3-inch leader. (c) 360 gpm is a 5-inch leader. (d) 30 gpm is a 2-inch leader."
    },
    {
      q: "The design rainfall rate is the:",
      choices: ["Average annual rainfall", "100-year, 1-hour rainfall rate for the location", "Wettest month's average", "Rate from the nearest other state"],
      answer: 1,
      explanation: "Correct: (b). The code designs for the 100-year, 1-hour storm at the building's location. (a) An average understates the design storm. (c) A monthly average is not a design rate. (d) Rates are location-specific."
    },
    {
      q: "Roof area for Equation 11-1 is:",
      choices: ["The sloped surface area of the roof", "The projected horizontal area, plus vertical wall area draining onto the roof", "The floor area of the top story", "The area of the gutters"],
      answer: 1,
      explanation: "Correct: (b). Projected horizontal area plus draining wall area. (a) The sloped area overstates the rain caught. (c) Floor area is not roof area. (d) Gutter area is not an input."
    },
    {
      q: "Secondary (emergency) roof drainage is required because:",
      choices: ["Primary drains are always too small", "A clogged primary drain must not be able to flood the roof", "It looks better", "The code requires two of everything"],
      answer: 1,
      explanation: "Correct: (b). Scuppers or a second drain set give water a way off if the primary drains clog. (a) Primary drains are sized for the same storm. (c) Appearance is not the reason. (d) The code requires a secondary path for safety, not duplication for its own sake."
    },
    {
      q: "A 4-inch horizontal storm drain at 1/2 inch per foot carries:",
      choices: ["115 gpm", "180 gpm", "231 gpm", "563 gpm"],
      answer: 2,
      explanation: "Correct: (c). Table 1106.2: 4-inch at 1/2 in/ft = 231 gpm. (a) 115 gpm is the 4-inch capacity at 1/8 in/ft. (b) 180 gpm is a sanitary 4-inch drain value, not storm. (d) 563 gpm is a 6-inch leader."
    }
  ],
  studyGuide: `
<h3>Module 10 — Storm Drainage: Quick Reference</h3>
<p><strong>Separate systems:</strong> Storm water never mixes with sewage. Design storm = 100-year, 1-hour rainfall rate for the location (code figures or Appendix B).</p>
<p><strong>Equation 11-1:</strong> GPM = R (in/hr) × A (sq ft) ÷ 96. 2,500 sq ft @ 4 in/hr = 104.2 gpm · 4,000 sq ft @ 4 in/hr = 166.7 gpm.</p>
<p><strong>Roof area:</strong> Projected horizontal area + vertical wall area draining onto the roof. Parapets do not count.</p>
<p><strong>Leaders (Table 1106.3):</strong> 2 in = 30 · 2-1/2 in = 54 · 3 in = 92 · 4 in = 192 · 5 in = 360 · 6 in = 563 · 8 in = 1,208 gpm.</p>
<p><strong>Storm drains (Table 1106.2):</strong> By flow and slope; 4 in = 231 gpm @ 1/2 in/ft, 115 gpm @ 1/8 in/ft. Check the roof drain manufacturer's flow rate too.</p>
<p><strong>Secondary drainage:</strong> Scuppers or a second drain set, sized for the same storm — a roof with one way off is one clog from a flood.</p>
<p><strong>Self-check:</strong> Size the leader for a 2,500 sq ft roof at 4 in/hr from memory: flow, then table, then size. If you get 104.2 gpm and 4 inches, you have the module.</p>
`
};
