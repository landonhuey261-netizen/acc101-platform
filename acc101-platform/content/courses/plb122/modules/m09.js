// Plumbing 122 - Module 9: Water Quality: Hardness, Treatment & Filtration
module.exports = {
  number: 9,
  slug: "water-quality-treatment",
  title: "Water Quality: Hardness, Treatment & Filtration",
  estTime: "3–4 hours",
  objectives: [
    "Explain what water hardness is, how it is measured, and how the USGS classifies it.",
    "Describe the problems hard water causes in fixtures, heaters, and piping.",
    "Explain how an ion-exchange water softener works, including regeneration and the brine tank.",
    "Compare sediment, carbon, and reverse-osmosis filtration and state what each one removes.",
    "Explain when water testing is needed and what a basic test measures."
  ],
  sections: [
    {
      heading: "Hardness: Calcium and Magnesium in the Water",
      html: `
<p><strong>Hardness</strong> is the amount of dissolved calcium and magnesium in water, picked up as the water passes through soil and rock. It is measured in milligrams per liter (mg/L) or in grains per gallon (gpg), where <strong>1 gpg equals 17.1 mg/L</strong>. The USGS classifies water as <strong>soft (0–60 mg/L), moderately hard (61–120 mg/L), hard (121–180 mg/L), and very hard (above 180 mg/L)</strong>. Much of Michigan's groundwater is hard or very hard, so this is a daily issue for plumbers in the state.</p>
<p>Hard water is not a health hazard — calcium and magnesium are minerals the body needs — but it is a maintenance problem. It leaves white scale on fixtures and glass, spots on dishes, and soap scum in tubs. Inside a water heater, scale coats the heating elements and the tank bottom, insulating them so the heater works harder, recovers more slowly, and fails sooner. In piping, scale narrows the bore over years, slowly strangling flow.</p>
<p>Hardness is measured with a test strip, a titration kit, or a laboratory test. A plumber who can test hardness on site can size a softener correctly and can explain to a customer why their new water heater is already scaling up. Never guess at hardness — test it.</p>
<div class="callout"><strong>Key idea:</strong> Hardness is dissolved calcium and magnesium. USGS bands: soft 0–60, moderately hard 61–120, hard 121–180, very hard above 180 mg/L. 1 gpg = 17.1 mg/L. Test it — never guess.</div>`
    },
    {
      heading: "The Water Softener: Trading Ions",
      html: `
<p>A <strong>water softener</strong> removes hardness by <strong>ion exchange</strong>. Hard water flows through a bed of resin beads that are charged with sodium ions. As the water passes, the beads trade their sodium for the water's calcium and magnesium — the hardness sticks to the resin and soft water leaves the tank. The softened water has slightly more sodium and no hardness, so soap lathers, scale stops forming, and the water heater lasts longer.</p>
<p>The resin bed cannot trade forever. When it is full of calcium and magnesium, the softener <strong>regenerates</strong>: it flushes the bed with a strong salt (brine) solution from the <strong>brine tank</strong>, which strips the hardness off the beads and recharges them with sodium, then rinses the brine to drain. Regeneration usually runs at night, on a timer or on a meter that counts gallons used. A metered softener regenerates only when needed and wastes less salt and water than a timer model.</p>
<p>The brine tank needs salt, and an empty brine tank is the most common softener failure: with no salt, the resin cannot regenerate, hardness passes straight through, and the customer thinks the softener is broken when it is only empty. Check the salt level first on every softener service call. Also note the softener's drain line must terminate through an air gap, so a drain backup cannot reach the drinking water.</p>
<div class="callout"><strong>Key idea:</strong> A softener trades sodium for calcium and magnesium on resin beads, then regenerates with brine from the salt tank. An empty brine tank means no regeneration — and hard water at every fixture.</div>`
    },
    {
      heading: "Filtration: Sediment, Carbon, and Reverse Osmosis",
      html: `
<p><strong>Sediment filters</strong> remove particles — sand, rust, silt — that cloud the water and wear out fixtures. A whole-house sediment filter sits on the cold-water main where it enters, before any branch or fixture, so every tap is protected. Sediment cartridges are rated by micron size: a smaller number catches finer particles but clogs faster. Change them on schedule, or the filter itself becomes the restriction that starves the house.</p>
<p><strong>Carbon filters</strong> remove chlorine, chloramine, and the taste and odor they cause, and they adsorb many organic chemicals. Carbon is used at the point of entry for whole-house taste, or at the point of use under a kitchen sink for drinking water. Carbon does not remove hardness, iron, or bacteria — it is a taste and chemical filter, not a cure-all.</p>
<p><strong>Reverse osmosis (RO)</strong> pushes water through a membrane so fine that it removes dissolved solids — salts, lead, arsenic, nitrates — that other filters cannot touch. RO is a point-of-use system, usually under a kitchen sink with its own faucet, because it produces water slowly and wastes some water in the process. It is the right answer when a water test shows dissolved contaminants that sediment and carbon cannot remove.</p>
<div class="callout"><strong>Key idea:</strong> Sediment removes particles, carbon removes chlorine and taste, reverse osmosis removes dissolved solids. Match the filter to the contaminant the water test found — no single filter does everything.</div>`
    },
    {
      heading: "Iron, pH, and Testing",
      html: `
<p>Two other water problems appear often in well water. <strong>Iron</strong> stains fixtures orange, gives water a metallic taste, and feeds iron bacteria that clog pipes with slime. Dissolved iron is removed by an iron filter or a softener rated for iron; iron bacteria need disinfection. <strong>pH</strong> measures acidity: water below pH 7 is acidic and corrodes copper pipe and fixtures, turning the water blue-green and pitting the metal. Acidic water is treated with a neutralizer — a tank of calcite that raises the pH as water passes through.</p>
<p><strong>Water testing</strong> decides all of this. A basic test measures hardness, iron, pH, chlorine, and total dissolved solids; a laboratory test adds bacteria, nitrates, lead, and arsenic. Test before recommending treatment, and test again after installing it — a softener installed for hardness will not fix iron, and a filter installed for iron will not fix pH. The test is the diagnosis; the equipment is the prescription.</p>
<p>For municipal water, the utility publishes an annual water quality report, but the report describes the water at the plant, not at the tap — old service lines and household plumbing change it on the way. For well water, there is no utility report at all: the homeowner is responsible for testing, and the plumber is often the one who recommends it.</p>
<div class="callout"><strong>Key idea:</strong> Test first, treat second. Hardness, iron, pH, and bacteria each need different equipment, and the wrong treatment is money spent on a problem the customer does not have.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Hardness is calcium and magnesium: soft 0–60, moderately hard 61–120, hard 121–180, very hard above 180 mg/L; 1 gpg = 17.1 mg/L.</li>
<li>Hard water scales fixtures and heaters, spots dishes, and narrows piping over time.</li>
<li>Softeners trade sodium for hardness on resin beads and regenerate with brine; an empty brine tank means hard water at every fixture.</li>
<li>Sediment filters remove particles; carbon removes chlorine and taste; reverse osmosis removes dissolved solids.</li>
<li>Iron stains and feeds bacteria; acidic water (pH below 7) corrodes copper. Test first, treat second.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Installing a softener for a problem that is not hardness. A softener will not remove iron, fix acidic water, or kill bacteria — test the water and match the equipment to the result.</div>
<div class="callout"><strong>Common mistake:</strong> Forgetting the air gap on a softener drain line. A direct connection to a drain is a cross-connection — a backup could reach the drinking water through the softener.</div>
<p><strong>Ready-to-Work link:</strong> NCCER Plumbing Level 2 expects you to identify water quality problems and treatment equipment. If you can read a water test and pick the right treatment, you have this module.</p>`
    }
  ],
  keyTerms: [
    { term: "Hardness", def: "Dissolved calcium and magnesium in water, measured in mg/L or grains per gallon (gpg)." },
    { term: "mg/L", def: "Milligrams per liter, a measure of dissolved substances in water." },
    { term: "Grains per gallon (gpg)", def: "A hardness unit; 1 gpg equals 17.1 mg/L." },
    { term: "Scale", def: "Hard mineral deposits left by hard water on fixtures, heating elements, and inside piping." },
    { term: "Ion exchange", def: "The softening process: resin beads trade sodium ions for calcium and magnesium in the water." },
    { term: "Resin bed", def: "The bed of resin beads inside a water softener where ion exchange happens." },
    { term: "Regeneration", def: "Flushing a softener's resin bed with brine to strip off hardness and recharge the beads with sodium." },
    { term: "Brine tank", def: "The tank holding salt and brine solution that a softener uses to regenerate its resin bed." },
    { term: "Sediment filter", def: "A filter that removes particles such as sand, rust, and silt; installed on the entering cold main for whole-house protection." },
    { term: "Carbon filter", def: "A filter using activated carbon to remove chlorine, chloramine, taste, and odor." },
    { term: "Reverse osmosis (RO)", def: "A point-of-use system that pushes water through a fine membrane to remove dissolved solids such as salts, lead, and nitrates." },
    { term: "Micron rating", def: "The particle size a filter catches, in microns; a smaller number catches finer particles but clogs faster." },
    { term: "Iron", def: "Dissolved iron in water that stains fixtures orange and feeds iron bacteria; removed by an iron filter or a softener rated for iron." },
    { term: "pH", def: "A measure of acidity: below 7 is acidic and corrodes copper; a neutralizer raises the pH." },
    { term: "Neutralizer", def: "A treatment tank of calcite that raises the pH of acidic water as it passes through." },
    { term: "Water test", def: "A laboratory or field test measuring hardness, iron, pH, chlorine, bacteria, and other qualities to decide treatment." }
  ],
  video: {
    title: "How a Water Softener Works",
    embedUrl: "https://www.youtube.com/embed/1ApLrTTf2OY",
    note: "How a water softener works inside — watch the ion-exchange bed and the regeneration cycle, then explain it back in your own words.",
    more: [
      { title: "How Do Water Softeners Work? | Angel Water, Inc", url: "https://www.youtube.com/watch?v=v9kSn2ofzVU" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A water test reads 250 mg/L total hardness. Classify the water and convert the hardness to grains per gallon.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: The USGS bands are soft 0–60, moderately hard 61–120, hard 121–180, and very hard above 180 mg/L. Step 2: 250 mg/L is <strong>very hard</strong>. Step 3: Convert: 250 ÷ 17.1 = about <strong>14.6 gpg</strong>. Step 4: This water needs a softener sized for very hard water, and the water heater will scale quickly without one.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A softener is installed but the customer still has scale on the fixtures and spotty dishes. The brine tank is empty. Explain the failure and the fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: With no salt, the softener cannot regenerate its resin bed. Step 2: The resin stays loaded with calcium and magnesium, so hardness passes straight through to the fixtures. Step 3: The fix is to refill the brine tank with salt and run a manual regeneration. Step 4: Check the salt level first on every softener service call — it is the most common failure and the cheapest fix.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A customer wants a filter for chlorine taste and odor. Which filter type is right, and what will it not remove?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A carbon filter is the right choice — activated carbon removes chlorine, chloramine, taste, and odor. Step 2: It will not remove hardness, iron, or bacteria. Step 3: If the water test also shows hardness or iron, additional equipment is needed. Step 4: Match the filter to the contaminant the test found.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A whole-house sediment filter is installed on the hot-water outlet of the heater. Explain what is wrong and where it should be.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A sediment filter on the hot outlet protects only the hot water and sits in the hottest part of the system, where the cartridge degrades faster. Step 2: The correct location is on the cold-water main where it enters, before any branch or fixture, so every tap — hot and cold — is protected. Step 3: Move the filter to the entering cold main and change the cartridge on schedule.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A well water test shows iron and a pH of 6.2. The customer asks for a softener. Explain what the softener will and will not fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A softener will remove some dissolved iron if it is rated for iron, but it will not fix the pH. Step 2: At pH 6.2 the water is acidic and will corrode copper pipe and fixtures regardless of softening. Step 3: The water needs a neutralizer to raise the pH, plus iron treatment — a softener alone is the wrong prescription. Step 4: Treat what the test found, not what the customer asked for.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A customer's water heater fails after three years in a very hard water area, coated in scale. Explain the chain of events and the prevention.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Very hard water deposits scale on the heating elements and tank bottom. Step 2: Scale insulates the elements, so the heater works harder, recovers more slowly, and overheats. Step 3: The tank fails years early. Step 4: Prevention is a water softener sized to the tested hardness, plus annual flushing of the heater to clear sediment.</p>"
    }
  ],
  quiz: [
    {
      q: "Water testing at 250 mg/L total hardness is classified as:",
      choices: ["Soft", "Moderately hard", "Hard", "Very hard"],
      answer: 3,
      explanation: "Correct: (d). The USGS bands are soft 0–60, moderately hard 61–120, hard 121–180, and very hard above 180 mg/L; 250 is very hard. (a), (b), and (c) are all lower bands."
    },
    {
      q: "One grain per gallon (gpg) of hardness equals about:",
      choices: ["1 mg/L", "17.1 mg/L", "60 mg/L", "180 mg/L"],
      answer: 1,
      explanation: "Correct: (b). 1 gpg equals 17.1 mg/L. (a) confuses the two units. (c) is the top of the soft band. (d) is the top of the hard band."
    },
    {
      q: "A water softener removes hardness by:",
      choices: ["Boiling the water", "Ion exchange — resin beads trade sodium for calcium and magnesium", "Filtering out sand and rust", "Adding chlorine"],
      answer: 1,
      explanation: "Correct: (b). Ion exchange swaps sodium for hardness on resin beads. (a) Boiling does not soften water. (c) Filtering removes particles, not dissolved minerals. (d) Chlorine disinfects; it does not soften."
    },
    {
      q: "A water softener's brine tank is empty. The result is:",
      choices: ["The softener stops producing hot water", "The resin bed cannot regenerate, so hardness passes through to the fixtures", "The water becomes acidic", "The pressure drops to zero"],
      answer: 1,
      explanation: "Correct: (b). Without salt, the resin cannot regenerate and hardness breaks through. (a) A softener does not heat water. (c) Softening does not acidify water. (d) A softener does not stop flow when the salt runs out."
    },
    {
      q: "A whole-house sediment filter is installed:",
      choices: ["On the hot-water outlet of the heater", "On the cold-water main where it enters, before branches and fixtures", "After the water heater only", "On the DWV vent"],
      answer: 1,
      explanation: "Correct: (b). A whole-house filter sits on the entering cold main so every fixture is protected. (a) Filtering only hot water leaves the cold side unprotected. (c) is the same error. (d) A DWV vent carries air, never water."
    },
    {
      q: "A carbon filter removes:",
      choices: ["Hardness and iron", "Chlorine, chloramine, taste, and odor", "Bacteria and viruses", "Dissolved salts and lead"],
      answer: 1,
      explanation: "Correct: (b). Carbon adsorbs chlorine and the taste and odor it causes. (a) Hardness needs a softener; iron needs an iron filter. (c) Carbon does not disinfect. (d) Dissolved solids need reverse osmosis."
    },
    {
      q: "Reverse osmosis is used when a water test shows:",
      choices: ["Sand and rust particles", "Chlorine taste", "Dissolved solids such as lead, nitrates, or arsenic", "Low water pressure"],
      answer: 2,
      explanation: "Correct: (c). RO membranes remove dissolved solids that other filters cannot touch. (a) Sediment filters remove particles. (b) Carbon removes chlorine taste. (d) Low pressure is a sizing problem, not a filtration problem."
    },
    {
      q: "Water with a pH of 6.2 is:",
      choices: ["Neutral", "Alkaline", "Acidic and corrosive to copper", "Too hard to use"],
      answer: 2,
      explanation: "Correct: (c). Below pH 7 is acidic, and acidic water corrodes copper pipe and fixtures. (a) Neutral is pH 7. (b) Alkaline is above pH 7. (d) pH does not measure hardness."
    }
  ],
  studyGuide: `
<h3>Module 9 — Water Quality: Quick Reference</h3>
<p><strong>Core idea:</strong> Test first, treat second. Hardness, iron, pH, and bacteria each need different equipment, and the wrong treatment is money spent on a problem the customer does not have.</p>
<div class="formula">Hardness (USGS): soft 0–60 &nbsp;|&nbsp; moderately hard 61–120 &nbsp;|&nbsp; hard 121–180 &nbsp;|&nbsp; very hard above 180 mg/L &nbsp;|&nbsp; 1 gpg = 17.1 mg/L</div>
<p><strong>Softener:</strong> Ion exchange — resin beads trade sodium for calcium and magnesium, then regenerate with brine from the salt tank. An empty brine tank means hard water at every fixture.</p>
<p><strong>Filters:</strong> Sediment removes particles (whole-house, on the entering cold main). Carbon removes chlorine, taste, and odor. Reverse osmosis removes dissolved solids (point of use, under the sink).</p>
<p><strong>Iron and pH:</strong> Iron stains orange and feeds bacteria. Acidic water (pH below 7) corrodes copper — treat with a neutralizer.</p>
<p><strong>Self-check:</strong> A test reads 150 mg/L hardness. Classify it and convert to gpg. (Answer: hard; 150 ÷ 17.1 = about 8.8 gpg.)</p>
`
};
