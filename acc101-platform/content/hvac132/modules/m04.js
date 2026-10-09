// HVAC 132 - Module 4: Heat Exchangers & Venting Categories
module.exports = {
  number: 4,
  slug: "heat-exchangers-venting-categories",
  title: "Heat Exchangers & Venting Categories",
  estTime: "3–4 hours",
  objectives: [
    "Explain the heat exchanger's two jobs — transferring heat and absolutely separating flue gas from breathing air.",
    "Identify the common heat exchanger failure modes and the inspection methods and symptoms that reveal them.",
    "Define venting Categories I–IV by vent pressure and condensing behavior, and match each category to typical equipment and vent materials.",
    "Explain natural draft, induced draft, and forced draft, and how each moves flue gas.",
    "Describe why condensing (high-efficiency) appliances produce liquid condensate and what that condensate demands of venting and drainage.",
    "Connect AFUE ranges to the equipment families and categories used in the field."
  ],
  sections: [
    {
      heading: "The Heat Exchanger: A Wall That Must Never Fail",
      html: `
<p>The <strong>heat exchanger</strong> is the heart of every fuel-burning heater: hot flue gas flows on one side of a metal wall, and the air (or water) being heated flows on the other. Heat conducts through the wall; the gases themselves must never mix. Hold both halves of that sentence with equal weight. The first half is efficiency. The second half is the entire safety case from Module 1: flue gas contains CO, and the wall is the only thing between it and the customer's lungs.</p>
<p>Residential gas furnace exchangers are commonly formed steel — clam-shell or tubular designs — with one burner per section (Module 3). Boilers use cast-iron sections or steel fire-tube/water-tube constructions. Whatever the shape, life is hard in there: the metal cycles between room temperature and many hundreds of degrees every call for heat, bathed on one side in acidic moisture traces and on the other in dusty house air. The known failure modes follow from that life:</p>
<ul>
<li><strong>Fatigue cracks</strong> at bends and welds from thousands of expansion/contraction cycles.</li>
<li><strong>Corrosion perforations</strong> — from chronic condensate where a non-condensing exchanger runs too cold, or from chlorides and debris on the air side.</li>
<li><strong>Soot and scale fouling</strong> (Module 1's chain) that overheats the metal and accelerates cracking.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> A cracked exchanger does not always leak much — leaks open and close with temperature and blower pressure — but there is no 'acceptable' crack. A confirmed breach means the appliance is out of service until the exchanger or the appliance is replaced.</div>`
    },
    {
      heading: "Inspecting the Exchanger and Reading Its Symptoms",
      html: `
<p>Exchanger inspection combines looking, watching flames, and measuring:</p>
<ul>
<li><strong>Visual inspection.</strong> With burners removed or through inspection openings (and a mirror, flashlight, or camera), look for cracks at seams and bends, rust streaks and scale trails, perforated spots, and heavy soot. Rust trails running from a joint are the metal's confession that hot gas and moisture have been escaping there.</li>
<li><strong>Flame observation.</strong> Run the burners with the blower off, then watch what happens to the flames the moment the blower starts. Air-side pressure from the blower pushes through a breach and <em>disturbs</em> the flame — flames that dance, waver, or roll when the blower energizes are a classic breach symptom.</li>
<li><strong>Combustion analysis.</strong> A breach changes flue readings (Module 6): supply air leaking into the flue dilutes it, and flue gas leaking out can show up in the airstream. Analyzer trends that make no burner-side sense often resolve once you suspect the exchanger.</li>
<li><strong>CO in the supply air.</strong> Elevated ambient CO near registers during a run is the symptom that turns suspicion into an emergency response.</li>
</ul>
<p>Know the limits of every method: small cracks hide, flames can misbehave for burner reasons, and analyzers can't see. That is why the professional standard is <em>convergence</em> — two independent signs pointing at the exchanger — before the expensive condemnation, but immediate shutdown on the first credible sign of CO entering the airstream. Safety findings are never averaged away by diagnostic uncertainty.</p>
<div class="callout"><strong>Key idea:</strong> Inspect with eyes, flames, and instruments together. One ambiguous sign = investigate. CO in the supply air = shut it down now and escalate.</div>`
    },
    {
      heading: "Draft: How Flue Gas Gets Out",
      html: `
<p>Flue gas leaves the building three ways, and the method defines the equipment family:</p>
<ul>
<li><strong>Natural draft.</strong> Hot flue gas is buoyant; it rises up a chimney or B-vent by itself, often with a <strong>draft hood</strong> (diverter) that decouples the appliance from chimney downdrafts and dilutes the flue gas with room air. No fan in the vent path. Old, atmospheric equipment — and the most vulnerable to blocked flues and downdrafts, because nothing pushes back.</li>
<li><strong>Induced draft.</strong> A fan (draft inducer) at the exchanger outlet <em>pulls</em> flue gas through the exchanger and pushes it into the vent. Most mid-efficiency furnaces work this way; the vent connector is under slight positive pressure downstream of the fan while the exchanger stays negative — one reason exchanger breaches on induced-draft units tend to draw air <em>in</em> while running, yet can still spill during off-cycle or failure conditions. The pressure switch that proves inducer operation (Modules 5 and 11) exists because this fan is now a safety component.</li>
<li><strong>Forced draft / sealed combustion.</strong> A fan pushes air <em>into</em> the burner, or the appliance draws combustion air through a sealed pipe from outdoors and vents through a companion pipe (direct vent). The combustion zone is isolated from the room — a major safety and efficiency advantage, and the norm on condensing equipment.</li>
</ul>
<p><strong>Draft</strong> itself is measured as a pressure difference in inches of water column (Module 2's unit returns). Insufficient draft — from blockage, an undersized or cold flue, or negative house pressure from exhaust fans — causes spillage: flue gas rolling out of the draft hood into the room. Spillage is never 'just how this one runs'; it is flue gas in the breathing zone and it ends the call in investigation, not adjustment.</p>
<div class="callout"><strong>Key idea:</strong> Natural draft depends on buoyancy and luck; induced and forced draft depend on a fan and its proving switch. Whatever moves the gas, verify it actually moved: draft reading, pressure-switch proof, and zero spillage.</div>`
    },
    {
      heading: "The Four Venting Categories",
      html: `
<p>The National Fuel Gas Code sorts gas appliances into four <strong>categories</strong> using exactly two questions: is the vent pressure <strong>non-positive (negative)</strong> or <strong>positive</strong>, and does the appliance <strong>condense</strong> water in the vent or not?</p>
<div class="formula">Category I: negative vent pressure, non-condensing<br>Category II: negative vent pressure, condensing<br>Category III: positive vent pressure, non-condensing<br>Category IV: positive vent pressure, condensing</div>
<ul>
<li><strong>Category I</strong> — the traditional appliance: natural-draft and fan-assisted 80%-class furnaces and boilers. Flue gas is hot enough to stay vapor, and the vent runs negative, so metal B-vent and chimneys serve. This is most of the installed base you will meet.</li>
<li><strong>Category II</strong> — negative-pressure condensing: rare in practice; condensing flue gas under negative pressure demands special corrosion-resistant venting and condensate handling.</li>
<li><strong>Category III</strong> — positive-pressure non-condensing: the fan pushes hot flue gas out; joints must be sealed against positive pressure, typically in listed stainless venting.</li>
<li><strong>Category IV</strong> — positive-pressure condensing: the modern 90%+ condensing furnace or boiler. Flue gas is cool and wet; venting is sealed plastic pipe (per manufacturer listing) sloped back to the appliance, with condensate drained away.</li>
</ul>
<p>The practical commandments: <strong>never mix categories on a common vent</strong> unless the code and both manufacturers explicitly allow it (a positive-pressure appliance can push flue gas backward through a natural-draft appliance sharing its flue — the classic furnace-plus-water-heater trap); use only the vent material the appliance is listed for; and treat every positive-pressure joint as a potential CO leak into the room, because unlike a negative vent that draws air in at a crack, a positive vent blows flue gas out of one.</p>
<div class="callout"><strong>Key idea:</strong> Two questions classify any appliance: vent pressure sign, and condensing or not. Category determines vent material, joint sealing, and who it may share a flue with. When in doubt, read the rating plate — the category is printed on it.</div>`
    },
    {
      heading: "Condensate: The Price and Proof of High Efficiency",
      html: `
<p><strong>AFUE</strong> (Annual Fuel Utilization Efficiency) rates how much of the fuel's energy becomes useful heat over a season. Traditional Category I equipment sits around 80% AFUE — the other ~20% escapes up the vent, and deliberately so: the flue gas must stay hot enough that its water vapor never condenses in a vent that can't handle liquid. Condensing equipment breaks past that ceiling with a corrosion-resistant <strong>secondary heat exchanger</strong> that squeezes the flue gas below its dew point, capturing the latent heat of the water vapor — the same ~970 Btu per pound physics you will meet again with steam in Module 10. The prize is AFUE in the 90s.</p>
<p>The by-product is liquid: a steady drip of mildly acidic condensate for as long as the burner runs. That liquid dictates the appliance's whole installation personality:</p>
<ul>
<li>Vents slope <em>back toward</em> the appliance so condensate drains home, never pooling in a sag (a water slug in the vent can block flue flow and trip the pressure switch — Module 11).</li>
<li>A drain trap and line carry condensate away; where no gravity drain exists, a condensate pump lifts it. Frozen, clogged, or air-locked drains are a top cause of condensing-furnace no-heat calls.</li>
<li>Materials in contact with condensate are plastic or stainless — the same condensate that the secondary exchanger shrugs off would eat a Category I vent in short order.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Condensing is a trade: the appliance gives you latent heat and takes, in exchange, a permanent plumbing obligation. Half of 'high-efficiency furnace' troubleshooting is really condensate-drain troubleshooting.</div>`
    }
  ],
  keyTerms: [
    { term: "Heat exchanger", def: "The metal barrier transferring heat from flue gas to heated air or water while keeping the streams separate." },
    { term: "Primary heat exchanger", def: "The first heat-transfer surface the flue gas meets; on condensing units, built of steel like traditional exchangers." },
    { term: "Secondary heat exchanger", def: "The corrosion-resistant exchanger on condensing appliances that cools flue gas below its dew point to capture latent heat." },
    { term: "AFUE", def: "Annual Fuel Utilization Efficiency: the seasonal percentage of fuel energy converted to useful heat; ~80% for mid-efficiency, 90%+ for condensing equipment." },
    { term: "Category I", def: "Appliance class: negative (non-positive) vent pressure, non-condensing — traditional draft-hood and fan-assisted 80% equipment." },
    { term: "Category II", def: "Appliance class: negative vent pressure, condensing — uncommon." },
    { term: "Category III", def: "Appliance class: positive vent pressure, non-condensing — requires sealed, listed venting for hot flue gas." },
    { term: "Category IV", def: "Appliance class: positive vent pressure, condensing — modern 90%+ equipment vented in sealed plastic pipe with condensate drainage." },
    { term: "Natural draft", def: "Venting driven by the buoyancy of hot flue gas rising in a chimney or vent, without a fan." },
    { term: "Draft hood (diverter)", def: "An opening above a natural-draft appliance that admits room air to decouple the appliance from chimney draft swings." },
    { term: "Induced draft", def: "A fan at the exchanger outlet that pulls flue gas through the exchanger and pushes it into the vent." },
    { term: "Direct vent / sealed combustion", def: "An arrangement piping both combustion air in and flue gas out through sealed pipes to outdoors, isolated from room air." },
    { term: "Spillage", def: "Flue gas escaping into the room at the draft hood or joints instead of rising through the vent — always a defect to resolve." },
    { term: "B-vent", def: "Double-wall metal vent pipe listed for Category I gas appliances." },
    { term: "Condensate", def: "Liquid water condensed from flue gas in high-efficiency equipment; mildly acidic and requiring dedicated drainage." },
    { term: "Condensate trap", def: "The water-sealed trap in the condensate drain that prevents flue gas from escaping through the drain line." },
    { term: "Dew point (flue gas)", def: "The temperature below which water vapor in flue gas begins to condense on surfaces." },
    { term: "Common venting", def: "Two or more appliances sharing one flue; allowed only within strict code and manufacturer conditions, never casually across categories." }
  ],
  video: {
    title: "Gas Furnace Class w/ Bert",
    embedUrl: "https://www.youtube.com/embed/lvZ5iN1xh7Q",
    note: "A full class session on gas furnaces from HVAC School's Bert — components, heat exchangers, and venting in a real training setting. Watch for how the heat exchanger separates the flue path from the airstream and how inducer-driven (induced draft) venting differs from an old natural-draft unit.",
    more: [
      { title: "How a Furnace Works", url: "https://www.youtube.com/watch?v=Eq3JQWWirJs" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Classify each appliance into its venting category: (a) a 1990s atmospheric furnace with a draft hood into a masonry chimney; (b) a 96% AFUE furnace vented in PVC with a condensate drain; (c) a fan-powered unit whose sealed stainless vent runs under positive pressure with flue gas kept above condensing temperature; (d) a rare negative-pressure appliance whose flue gas condenses in a special vent.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Ask the two classification questions — vent pressure sign? condensing? Step 2: (a) Natural draft = negative pressure, hot flue = non-condensing → <strong>Category I</strong>. Step 3: (b) PVC vent with induced/forced draft = positive pressure, and the drain exists because it condenses → <strong>Category IV</strong>. Step 4: (c) Positive pressure, non-condensing by design → <strong>Category III</strong>. Step 5: (d) Negative pressure but condensing → <strong>Category II</strong>. Step 6: Note (b) is where modern replacements land, and (a)→(b) conversions change everything about the vent: the old chimney comes out of service for that appliance.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A customer with a Category I furnace and a natural-draft water heater sharing one chimney asks if the new condensing furnace can 'just use the same chimney — it's already there.' Explain why the answer is no, twice over.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Category mismatch — the condensing furnace is Category IV: its vent runs under <em>positive</em> pressure with cool, wet flue gas, and it is listed for sealed plastic venting, not a masonry chimney. Pushed into a big cold chimney, its flue gas would condense massively, destroying the mortar and dripping acidic condensate, with joints not sealed against its positive pressure. Step 2: The orphan problem — the old furnace shared the chimney, and two appliances' combined hot output kept that oversized flue warm and drafting. Remove the furnace and the water heater alone fires into a chimney now far too large and cold for it: its flue gas cools below dew point, condenses, and can spill at the draft hood instead of rising. Step 3: Correct work — vent the new furnace per its listing (through the wall or roof in specified pipe) and have the chimney evaluated/lINED for the water heater alone. 'Already there' is not a venting category.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> During a maintenance visit, flames sit stable with the blower off but begin dancing and lifting the moment the blower starts. What does this test suggest, what do you do next, and what do you NOT conclude yet?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The blower raises pressure on the air side of the exchanger. If that pressure change reaches the flames, there is a path through the exchanger wall — the classic flame-disturbance sign of a breach. Step 2: Next actions: shut the appliance down pending confirmation; perform a close visual inspection of the exchanger (mirror/camera, burner removal as needed) looking for the crack or perforation, ideally at the location feeding the disturbed burners. Step 3: Add converging evidence — combustion analysis and any CO in the supply air. Step 4: What you do NOT conclude: the exchanger is not condemned on flame behavior alone — weak burners, cross-over problems, and venting faults can also disturb flames — and the appliance is not returned to 'watch it' status: a credible breach symptom means out of service until the inspection resolves it, and a confirmed crack means exchanger or appliance replacement, never a patch.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Explain why a Category I appliance's vent must not be shared with a Category III appliance's fan discharge, in terms of what happens at the Category I unit's draft hood when the fan runs.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Category III venting operates under positive pressure — its fan actively pushes flue gas into the common flue. Step 2: A Category I appliance connects to that flue through an open draft hood designed for a negative-pressure environment; the hood is literally an opening between the flue and the room. Step 3: When the Category III fan pressurizes the shared flue, the pressure seeks every exit — including backward through the Category I appliance's vent connector and out its draft hood, blowing flue gas (with CO) into the room, and potentially through the idle appliance itself. Step 4: This is the mechanical reason behind the code rule: natural-draft appliances never connect to a positive-pressure portion of a mechanical draft system. Categories are not paperwork — they are pressure directions.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A condensing furnace locks out on its pressure switch every few days. The vent pipe has a visible sag between hangers, half full of water. Explain the full mechanism from sag to lockout, and the permanent fix versus the temporary one.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A condensing (Category IV) appliance fills its vent with water continuously — condensate forms along the whole cool run and must drain back to the furnace by slope. Step 2: The sag breaks the slope; condensate ponds in the belly until it partly blocks the flue passage. Step 3: The inducer now works against a restricted, sloshing vent; the pressure at the pressure-switch port no longer matches the switch's proving requirement — the switch opens (or never closes), and the board locks out on a draft-proving fault (Module 11). Step 4: Intermittency fits perfectly: water level shifts with run time, temperature, and vibration, so the fault comes and goes. Step 5: Temporary relief — drain the belly by lifting the pipe — lasts until it refills. Permanent fix: re-hang the vent with continuous slope back to the appliance per the manufacturer's pitch specification, supported so sags cannot re-form, then verify draft and condensate drainage through a full cycle.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Two furnaces, both 80,000 Btu/h output: one is rated 80% AFUE, the other 96% AFUE. Compute each one's input rate and the fuel energy sent up the vent per hour, and use the result to explain why the 80% unit must not let its flue gas condense.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Input = output ÷ AFUE. 80% unit: 80,000 ÷ 0.80 = 100,000 Btu/h input. 96% unit: 80,000 ÷ 0.96 ≈ 83,333 Btu/h input. Step 2: Vent loss = input − output. 80% unit: 20,000 Btu/h up the flue. 96% unit: ≈ 3,333 Btu/h. Step 3: The 80% unit's large vent loss is not sloppiness — it is the design budget that keeps flue gas hot enough to remain vapor all the way out of a vent system built of materials (B-vent, masonry) that liquid condensate would corrode and destroy. Step 4: The condensing unit can afford cool flue gas because its secondary exchanger and vent are built of condensate-proof materials and plumbed with a drain — it recovers as latent heat much of what the 80% unit spends on staying dry. Efficiency categories are material commitments, not just numbers.</p>"
    }
  ],
  quiz: [
    {
      q: "Category IV appliances are defined by:",
      choices: ["Negative vent pressure, non-condensing", "Positive vent pressure, condensing", "Negative vent pressure, condensing", "Positive vent pressure, non-condensing"],
      answer: 1,
      explanation: "Correct: (b) Category IV = positive vent pressure + condensing — the modern 90%+ furnace/boiler class with sealed plastic venting and a condensate drain. (a) is Category I (traditional 80% class). (c) is Category II (rare negative-pressure condensing). (d) is Category III (positive-pressure, hot flue gas, sealed metal venting)."
    },
    {
      q: "The heat exchanger's safety function is to:",
      choices: ["Keep flue gas and breathing air completely separated while heat passes through the wall", "Mix a small amount of flue gas into the supply air for humidity", "Store heat between cycles", "Support the blower assembly"],
      answer: 0,
      explanation: "Correct: (a) The exchanger conducts heat through metal while the gas streams never mix; a breach defeats the entire safety design of the appliance. (b) Any flue gas in supply air is a defect, never a feature — CO rides along with it. (c) Thermal mass effects are incidental; storage is not its function. (d) Structural support is sheet metal's job, not the exchanger's purpose."
    },
    {
      q: "Flames that sit steady until the blower starts, then dance and waver, most strongly suggest:",
      choices: ["A dirty air filter", "A heat exchanger breach letting air-side pressure disturb the flame", "Low manifold pressure", "A thermostat problem"],
      answer: 1,
      explanation: "Correct: (b) Blower pressure arriving at the flame means a path through the exchanger wall — the classic breach test. (a) A dirty filter lowers airflow and would more likely cause limit trips; it doesn't time-lock flame disturbance to blower start. (c) Low manifold pressure weakens flames at all times, not specifically at blower start. (d) The thermostat commands the sequence but cannot physically buffet a flame."
    },
    {
      q: "An induced-draft furnace moves flue gas by:",
      choices: ["Buoyancy alone, like a chimney", "A fan pulling gas through the exchanger and pushing it into the vent", "A fan blowing room air across the burners", "The gas valve's pressure"],
      answer: 1,
      explanation: "Correct: (b) The inducer sits at the exchanger outlet: suction through the exchanger, pressure into the vent connector. (a) describes natural draft, which has no fan. (c) A fan blowing into the burner describes forced-draft designs; 'induced' specifically means drawn from the outlet side. (d) Manifold pressure moves fuel to the burner ports, in inches of water column — it does not vent the appliance."
    },
    {
      q: "Why must condensing appliance vents slope back toward the appliance?",
      choices: ["To keep rain out of the termination", "So condensate forming along the vent drains to the appliance instead of pooling and blocking the flue", "To increase draft velocity", "Plastic pipe cannot be sloped the other way"],
      answer: 1,
      explanation: "Correct: (b) Condensate forms along the entire cool vent run; slope returns it to the furnace drain. A sag ponds water until it restricts flue flow and trips the pressure switch. (a) Termination design handles rain; slope direction is about internal condensate. (c) Slope has no meaningful velocity role — the inducer provides the pressure. (d) Plastic pipe slopes fine in either direction physically; the requirement is functional, not material."
    },
    {
      q: "Spillage at a draft hood means:",
      choices: ["The appliance is drafting especially well", "Flue gas is entering the room instead of rising up the vent — a defect requiring investigation", "The draft hood needs to be sealed shut", "Normal operation during the first minute only, always"],
      answer: 1,
      explanation: "Correct: (b) Spillage puts combustion products — including CO — in the breathing zone; causes include blockage, a cold or oversized flue, and negative house pressure. (a) Good draft carries gas away; spillage is its opposite. (c) Sealing a draft hood shut defeats its design function and can make the appliance dangerous; you fix the draft, not the symptom. (d) Brief startup spillage that clears can occur on cold flues, but dismissing spillage as 'always normal' is exactly the habit this course eliminates — verify it clears, and investigate if it persists."
    },
    {
      q: "A Category I water heater shares a flue with a furnace being replaced by a Category IV furnace. The correct venting plan is:",
      choices: ["Connect the new furnace to the same flue — it's sized for two appliances", "Vent the new furnace separately per its listing, and have the chimney evaluated (likely lined) for the water heater alone", "Cap the chimney and vent the water heater in PVC too", "Remove the water heater's draft hood so it can share the positive-pressure vent"],
      answer: 1,
      explanation: "Correct: (b) Category IV equipment vents in its listed sealed pipe, never a masonry chimney; and the 'orphaned' water heater now faces an oversized, cold flue that may need a liner to draft and avoid condensation. (a) Positive-pressure condensing gas in a shared chimney is a category violation with corrosion and spillage consequences. (c) A Category I water heater cannot be re-vented in plastic — its hot flue gas and category listing forbid it. (d) Removing a draft hood and tying a natural-draft appliance into positive pressure blows flue gas into the room."
    },
    {
      q: "The secondary heat exchanger on a condensing furnace earns its extra efficiency by:",
      choices: ["Burning the fuel twice", "Cooling flue gas below its dew point and capturing the latent heat released when water vapor condenses", "Recirculating supply air through the flue", "Raising manifold pressure on cold days"],
      answer: 1,
      explanation: "Correct: (b) Condensing the water vapor in flue gas releases its latent heat (~970 Btu per pound of water) into the airstream instead of up the vent — that recovered energy is what pushes AFUE into the 90s. (a) There is one combustion event; the 'second' exchanger is a heat-transfer stage, not a second fire. (c) Supply air never enters the flue path — that would be a breach, not a feature. (d) Firing rate is set by orifices and manifold pressure (Module 2) and does not change with outdoor temperature in this design."
    }
  ],
  studyGuide: `
<h3>Module 4 — Heat Exchangers & Venting Categories: Quick Reference</h3>
<p><strong>Exchanger:</strong> heat passes through the wall; gases never mix. Failure = fatigue cracks, corrosion perforation, soot-driven overheating. Signs: rust trails, soot, flame disturbance when the blower starts, odd analyzer trends, CO at registers (→ shut down). Confirmed crack = exchanger or appliance replacement; never a patch, never 'monitor it.'</p>
<p><strong>Draft:</strong> natural (buoyancy + draft hood), induced (fan pulls through exchanger, pressure switch proves it), forced/direct vent (sealed pipes). Spillage = flue gas in the room = investigate, always.</p>
<p><strong>Categories (pressure? condensing?):</strong> I = negative, non-condensing (80% class, B-vent/chimney). II = negative, condensing (rare). III = positive, non-condensing (sealed metal). IV = positive, condensing (90%+, sealed plastic, condensate drain). Never common-vent across pressure categories; positive vents leak OUT at bad joints.</p>
<p><strong>Condensing trade:</strong> secondary exchanger captures latent heat → AFUE 90s → but condensate must drain: vent slopes back to the unit, trap + drain (or pump) maintained. Sagging vent = ponded water = pressure-switch lockouts.</p>
<p><strong>Orphan rule:</strong> replacing one of two chimney-sharing appliances with a sealed unit leaves the other on an oversized cold flue — evaluate/line the chimney for it.</p>
`
};
