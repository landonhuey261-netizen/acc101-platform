// HVAC 235 - Module 9: Indoor Air Quality
module.exports = {
  number: 9,
  slug: "indoor-air-quality",
  title: "Indoor Air Quality",
  estTime: "3–4 hours",
  objectives: [
    "Explain what the MERV scale measures and match filter ratings to particle sizes and household needs.",
    "Diagnose the airflow consequences of over-filtering with a thin high-MERV filter and specify the deep-media remedy.",
    "Compare humidifier types and set realistic winter humidity expectations tied to outdoor temperature and the building envelope.",
    "Distinguish ERV from HRV operation and select between them by climate and moisture balance.",
    "Frame ventilation as a designed system — rate, distribution, and recovery — rather than an open window."
  ],
  sections: [
    {
      heading: "Filtration and the MERV Scale",
      html: `
<p>A filter has two jobs that pull against each other: catch particles and let air through. The <strong>MERV</strong> rating — Minimum Efficiency Reporting Value, from ASHRAE Standard 52.2 — grades the first job: how effectively a filter captures particles across the size range that matters indoors, roughly 0.3 to 10 microns. (For scale: a human hair is tens of microns; pollen and dust ride in the big end of the range; smoke and fine particles live at the small end.) The rating bands, in the qualitative form you will use with customers:</p>
<ul>
<li><strong>MERV 1–4:</strong> the washable/thin fiberglass class. Catches lint and the largest dust; really <em>equipment protection</em>, not air cleaning.</li>
<li><strong>MERV 5–8:</strong> the typical residential pleated range — solid capture of the 3–10 micron class (pollen, dust, spores) with modest airflow penalty. The sensible default for most homes.</li>
<li><strong>MERV 9–12:</strong> finer capture, reaching meaningfully into the 1–3 micron class and some of the sub-micron range — the allergy-and-pets upgrade band.</li>
<li><strong>MERV 13–16:</strong> the top of the scale, capturing most particles even in the 0.3–1.0 micron band (fine smoke, many bacteria-sized particles); standard fare in hospitals and clean commercial spaces, available residentially <em>only</em> with the airflow engineering of the next section.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> MERV is a <em>minimum</em> efficiency — the worst the filter does across the test sizes, not the best. And it describes a clean filter: every filter's capture improves as it loads while its airflow penalty worsens — which is why the change interval is part of the specification, not housekeeping trivia.</div>
<p>Rating lookalikes (retail MPR/FPR scores) are store systems, not MERV; convert cautiously or specify MERV outright so the customer buys the tested quantity.</p>`
    },
    {
      heading: "The Pressure-Drop Trap: When Better Filtration Strangles the System",
      html: `
<p>Every step up in MERV costs <strong>pressure drop</strong>, and the cost explodes in thin filters: a 1-inch MERV 13 stuffed into a rack designed around a 1-inch MERV 8 is a restriction the blower must fight on every cycle. The symptoms arrive disguised as other diseases — high temperature rise and limit trips in heating (Module 4's arithmetic), a freezing coil and weak cooling in summer, blower noise, an ECM quietly over-working itself to death holding CFM (Module 2). The filter is "better" and the system is worse.</p>
<p>The engineering remedy is <strong>area</strong>: a deep-media filter (4–5 inch cabinet) packs many times the pleated surface into the same duct, so fine capture happens at low face velocity and <em>lower</em> pressure drop than the thin filter it replaces — with months instead of weeks between changes. This is the honest path to high-MERV filtration in a home: sell the cabinet, not the cardboard miracle.</p>
<div class="callout"><strong>Key idea:</strong> Specify filtration as a pair of numbers — MERV <em>and</em> pressure drop at the system's airflow — and verify after install with the tools of Modules 2 and 4: temperature rise in range, total external static within the blower's rating. A filter recommendation that isn't checked against static pressure is a guess with a logo on it.</div>
<p>Field rule for the truck: if a customer demands the highest MERV on the shelf for a 1-inch rack, the answer is a conversation — mid-range MERV in 1-inch, or the media cabinet for the real upgrade — backed by the rise/static measurements in their own system, not by arguing about the box copy.</p>`
    },
    {
      heading: "Humidification: Adding Water Without Growing Problems",
      html: `
<p>Winter heating dries indoor air twice over: cold outdoor air holds little moisture to begin with, and heating it sends its relative humidity tumbling. The complaints arrive as dry skin, static shocks, shrinking woodwork, and sore throats; the equipment answers are:</p>
<ul>
<li><strong>Bypass humidifiers:</strong> a water panel in a housing on the plenum, with a bypass duct shunting air through it from the other plenum. Simple, inexpensive, dependent on blower runtime and duct pressure difference.</li>
<li><strong>Fan-powered humidifiers:</strong> their own small fan pushes air through the panel — independent of duct pressures, suited to tight duct systems and heat pumps' cooler supply air.</li>
<li><strong>Steam humidifiers:</strong> boil water electrically and inject steam into the duct — the output champion, independent of furnace temperature and runtime, at the highest install and operating cost; the choice for large homes, tight humidity requirements, and heat pump systems.</li>
</ul>
<p>Control is where humidification succeeds or fails. Indoor relative humidity targets must <strong>fall as outdoor temperature falls</strong>: warm moist air meeting cold window glass or cold wall cavities condenses, and a house "protected" at a fixed high setpoint in a cold snap will grow condensation, frost, and eventually mold and rot in the envelope. Better controls use an outdoor sensor to trim the humidity setpoint with the weather (the same reset philosophy as Module 5) — and the tech's job includes teaching the owner that the dial moves with the season.</p>
<div class="callout"><strong>Key idea:</strong> A humidifier's capacity is measured against the house's leakage and load, and its safe setpoint is set by the coldest surfaces in the building, not by the owner's preference. Water on the windows is the house reporting an over-set humidistat — believe it.</div>
<p>Service notes: water panels mineral-load and are consumables; drain and water quality decide maintenance intervals; a humidifier that runs without the blower, or a saddle valve left weeping, converts an IAQ accessory into a water-damage claim.</p>`
    },
    {
      heading: "Ventilation with Recovery: ERV vs. HRV",
      html: `
<p>Tight houses don't breathe by accident anymore, so ventilation becomes a designed function: bring in a controlled amount of outdoor air, exhaust the same amount, and — the recovery part — harvest energy from the exhaust stream on its way out. Both recovery ventilators pass the two airstreams through a core where they exchange energy without (intentionally) mixing:</p>
<ul>
<li><strong>HRV (heat recovery ventilator):</strong> transfers <strong>heat only</strong>. In winter it warms incoming air with exhaust heat; the moisture in exhaust air is not recovered — it leaves, drying the house's air balance toward outdoors.</li>
<li><strong>ERV (energy recovery ventilator):</strong> transfers <strong>heat and moisture</strong> through a permeable core. Winter: outgoing moisture partly returns to the dry incoming air. Summer: incoming humidity is partly dumped into the exhaust stream, unloading the air conditioner.</li>
</ul>
<div class="callout"><strong>Key idea — selection logic:</strong> Very cold, dry-winter climates with excess indoor moisture (big families, lots of cooking/showers in a tight house) lean <strong>HRV</strong> — dumping moisture is the goal. Hot-humid and mixed climates, and homes fighting winter dryness, lean <strong>ERV</strong> — keeping moisture where it's wanted in each season. It is a moisture-balance decision first and a temperature decision second.</div>
<p>Details that decide whether the installed box performs: balanced flows (supply and exhaust matched so the house is neither pressurized nor depressurized — imbalance re-creates the infiltration the tight house eliminated, and can threaten combustion appliances on single-pipe installs, Module 3), core frost management in deep cold (ERV cores tolerate frost better; HRVs use defrost strategies that pause or recirculate), and filters on both streams — the core you cannot clean is the core that stops recovering.</p>`
    },
    {
      heading: "Putting IAQ Together: Source, Filter, Ventilate",
      html: `
<p>Professional IAQ work follows a hierarchy, and selling it out of order is how customers end up with a MERV 13 filter in a house with a backdrafting water heater:</p>
<ol>
<li><strong>Source control first.</strong> The cheapest pollutant is the one never released: sealed combustion (Module 3), a vented range hood that actually vents outdoors, no unvented combustion appliances, stored chemicals out of the air path, moisture sources (Module on CO and combustion safety, next) managed. No filter fixes a bad source economically.</li>
<li><strong>Filtration second.</strong> Sized and specified as section 2 demands — MERV matched to need, area matched to airflow.</li>
<li><strong>Ventilation third.</strong> A designed rate of outdoor air, recovered where climate economics justify it, balanced and commissioned — because dilution is the control for everything the first two steps miss (cooking byproducts, off-gassing, occupant CO₂ stuffiness).</li>
<li><strong>Humidity as the envelope allows.</strong> Humidify in winter within the building's condensation limits; dehumidification is a cooling-season design topic that ventilation choices (ERV) support.</li>
</ol>
<div class="callout"><strong>Key idea:</strong> Measure the IAQ system like any other: static pressure and rise for the filtration, flow balance for the ventilator, a hygrometer's evidence for humidity. "Feels stuffy" is a symptom; the instruments in this course turn it into a specification, an install, and a verification.</div>
<p>And one boundary to hold professionally: IAQ equipment manages comfort and ordinary pollutant loads. It is not a remedy for a combustion-safety defect — a furnace making CO needs Module 10's response, not a bigger ventilator.</p>`
    }
  ],
  keyTerms: [
    { term: "MERV", def: "Minimum Efficiency Reporting Value (ASHRAE 52.2): a filter's graded capture efficiency across particle sizes ~0.3–10 microns; higher MERV captures smaller particles." },
    { term: "Micron", def: "One-millionth of a meter; the unit of particle size for filtration — pollen and dust at the large end of the indoor range, smoke and fine particles below 1 micron." },
    { term: "Pressure drop (filter)", def: "The airflow resistance a filter adds, rising with MERV and with loading; excessive drop starves airflow and shows up as high temperature rise or a freezing coil." },
    { term: "Deep-media filter", def: "A 4–5 inch filter cabinet with greatly increased pleated area, enabling high MERV at low pressure drop and long change intervals." },
    { term: "Total external static pressure", def: "The blower's total resistance burden from ducts, coil, and filter; the number a filter upgrade must be checked against." },
    { term: "Bypass humidifier", def: "A water-panel humidifier using a duct between plenums to move air through the panel; output depends on blower runtime and duct pressure difference." },
    { term: "Steam humidifier", def: "A humidifier that boils water and injects steam into the airstream; highest output, independent of supply-air temperature — suited to heat pumps and large homes." },
    { term: "Water panel", def: "The evaporative media in a flow-through humidifier; minerals load it over a season, making it a consumable part." },
    { term: "Relative humidity", def: "The air's water content as a percentage of what it could hold at its temperature; heating cold air crashes its RH even though the water amount is unchanged." },
    { term: "Condensation limit", def: "The indoor humidity ceiling set by the building's coldest surfaces; exceeding it grows window condensation, wall-cavity moisture, and mold risk." },
    { term: "HRV", def: "Heat recovery ventilator: balanced ventilation that transfers heat between exhaust and intake streams but not moisture." },
    { term: "ERV", def: "Energy recovery ventilator: balanced ventilation transferring both heat and moisture between streams through a permeable core." },
    { term: "Recovery core", def: "The heat/moisture exchange medium in an ERV/HRV where the two airstreams pass in close contact without mixing." },
    { term: "Balanced ventilation", def: "Equal supply and exhaust airflow, keeping house pressure neutral; imbalance re-creates infiltration and can disturb combustion appliances." },
    { term: "Source control", def: "Eliminating or isolating pollutants at their origin — the first and cheapest tier of IAQ strategy, ahead of filtration and ventilation." },
    { term: "Ventilation rate", def: "The designed volume of outdoor air delivered per time; set by the applicable standard/code for the building and verified by flow measurement at commissioning." }
  ],
  video: {
    title: "How Do I Choose the Right Air Filter For My House? | HVAC | Carrier",
    embedUrl: "https://www.youtube.com/embed/xHY25iIBXeM",
    note: "Carrier's own walkthrough of the MERV bands and — just as this module emphasizes — the restriction trap: why a dense 1-inch high-MERV filter can harm a system while a deep 4–6 inch media filter at the same rating is fine. Watch for the band descriptions to anchor your qualitative MERV guidance with customers.",
    more: [
      { title: "What is an ERV? Energy Recovery Ventilator Explained (How it Works & Saves Energy)", url: "https://www.youtube.com/watch?v=SqpFXhHiFDI" },
      { title: "HRV vs. ERV - What's the Difference?", url: "https://www.youtube.com/watch?v=wl8sH2I1DUM" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A household includes a child with significant pollen allergies and two shedding dogs. The system has a standard 1-inch filter rack. Write your filtration recommendation and the reasoning chain behind it.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Need analysis: pollen is a large particle (easy capture), pet dander sits finer — the target band is solidly MERV 11 territory (within the 9–12 fine-capture range), not the basic 5–8 default. Step 2: Constraint: a 1-inch MERV 11 is workable in many systems but must be verified; a 1-inch MERV 13+ risks the pressure-drop trap. Step 3: Recommendation: install MERV 11 now with a shorter change interval (dogs load filters fast), verify temperature rise and total external static after install; and quote the deep-media cabinet as the upgrade path — it would allow MERV 13 at lower pressure drop with far longer intervals. Step 4: Document the measured static so the next visit compares against evidence, not memory.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> After a homeowner installs a bargain 1-inch 'maximum allergen' filter, the furnace begins tripping its high limit. Measured rise is 15°F above the plate maximum. Explain the chain of causation and the two remedies — one immediate, one proper.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The dense thin filter's pressure drop slashes airflow across the heat exchanger; with full firing rate and reduced CFM, ΔT = Output ÷ (1.08 × CFM) climbs past the plate range, exchanger temperature follows, and the limit does its job. Step 2: Immediate remedy: remove the restrictive filter and fit a mid-MERV filter appropriate to a 1-inch rack; re-measure rise back inside the plate range. Step 3: Proper remedy (if the household truly needs high capture): a deep-media cabinet delivering the desired MERV at low pressure drop, verified by static and rise measurements after installation. Step 4: Note for the ticket: chronic limit trips stress both the limit's calibration and the exchanger — the 'bargain' was neither.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A tight new home in a very cold climate has five occupants, winter window condensation at modest indoor humidity, and a complaint of stuffiness. HRV or ERV — choose, and defend the choice in moisture terms.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Inventory the moisture balance: five occupants in a tight envelope generate substantial moisture; the windows already report excess at the glass. The house's problem is too much indoor moisture in winter, not too little. Step 2: An ERV would return a share of the exhaust moisture to the incoming air, sustaining the surplus. An <strong>HRV</strong> transfers heat only — moisture leaves with the exhaust — actively drying the balance toward comfort while still recovering heat. Step 3: Choose the HRV, sized to the home's ventilation requirement, balanced at commissioning, with its defrost strategy confirmed for the climate. Step 4: Revisit humidity after a season: if summer conditions later argue for moisture retention, that's an ERV climate case — this house's winter evidence decides this install.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A humidifier is set to a fixed high output all winter. During a cold snap the owner reports water streaming down windows and ice at the corners. Explain what's happening and the two-part correction.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The fixed setpoint ignores physics: in the cold snap, the window glass and wall surfaces are far colder, so the same indoor humidity that was safe in mild weather now exceeds the surfaces' dew point — indoor moisture condenses (and freezes) on them. Sustained, this wets the envelope and feeds mold and rot. Step 2: Correction one (control): lower the humidity setpoint as outdoor temperature falls — manually per the humidistat's weather guidance, or properly with an automatic control using an outdoor sensor to trim the setpoint. Step 3: Correction two (verify): check for envelope aggravators — unsealed penetrations leaking moist air into cold cavities, disconnected bath fans venting into the attic — and dry the currently wet surfaces. Step 4: Teach the owner the rule: the windows are the gauge; moisture on glass means the setting is too high for the weather, full stop.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> An ERV was installed but the house now shows <em>worse</em> infiltration symptoms — a whistling fireplace damper and a water heater that occasionally spills at its draft hood on windy days. What installation defect explains it, and how do you verify and correct it?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A recovery ventilator must be <strong>balanced</strong>. If exhaust flow exceeds supply (mis-set dampers/speeds, a crushed intake, a clogged intake filter/screen), the unit depressurizes the house — the house then 'ventilates' through every leak, including the fireplace and the water heater's vent path, backdrafting the water heater. Step 2: Verify by measuring both flows at commissioning ports/hoods and comparing, and by checking filters and the intake path for restriction. Step 3: Correct: clean/repair the intake path, then balance the flows per the manufacturer's procedure until supply and exhaust match within tolerance. Step 4: Re-verify the water heater's draft under worst-case depressurization (all exhaust devices running) — the IAQ install is not done until the combustion appliances prove safe under it (Modules 3 and 10).</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Rank these IAQ interventions for a home with a moldy basement smell, a smoker who has quit but whose furnishings still off-gas, and mild seasonal allergies — a MERV 13 cabinet, source moisture correction, and a balanced ERV — and justify the order.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <strong>Source control first:</strong> the basement moisture problem (water entry, drainage, dehumidification of that space) — no filter or ventilator outruns a continuous mold source, and mold is a health issue, not a comfort preference. Step 2: <strong>Ventilation second:</strong> the balanced ERV dilutes the lingering off-gassing load house-wide and, by controlling moisture exchange, supports the basement correction. Step 3: <strong>Filtration third:</strong> the MERV 13 deep-media cabinet polishes particulates for the allergy sufferer once sources are controlled and air is moving by design. Step 4: The justification is the hierarchy of section 5: control the source, then dilute, then filter — each tier makes the next one smaller and cheaper to succeed.</p>"
    }
  ],
  quiz: [
    {
      q: "MERV measures a filter's:",
      choices: ["Thickness in inches", "Capture efficiency across particle sizes (about 0.3–10 microns) under ASHRAE 52.2", "Lifespan in months", "Fan energy consumption"],
      answer: 1,
      explanation: "Correct: (b). MERV is the Minimum Efficiency Reporting Value — tested capture performance by particle size band. (a) Thickness correlates with pressure drop and capacity, not the rating itself. (c) Service life depends on loading conditions, not the MERV test. (d) Blower energy is affected by the filter's pressure drop, but MERV grades capture, not watts."
    },
    {
      q: "A 1-inch MERV 13 filter installed in a standard residential rack most risks:",
      choices: ["Filtering too little", "Excessive pressure drop — high temperature rise/limit trips in heat, coil freeze in cooling, blower strain", "Making the air too dry", "Voiding the home's warranty"],
      answer: 1,
      explanation: "Correct: (b). Fine capture in a thin medium is restriction; the blower pays for it and airflow-dependent faults follow. The remedy is media area (deep cabinet), not a lower goal. (a) The filter captures plenty — that's the trap; capture isn't the failure. (c) Filters don't remove meaningful moisture. (d) Warranty language isn't the mechanism — measured static and rise are."
    },
    {
      q: "Deep-media (4–5 inch) filters allow high MERV without choking the system because:",
      choices: ["They bypass half the air around the media", "Their much larger pleated area lowers face velocity and pressure drop at the same capture rating", "They are electrostatically charged by the furnace", "The rating system is more lenient for thick filters"],
      answer: 1,
      explanation: "Correct: (b). Area is the whole trick — the same MERV media spread over far more surface passes the system's airflow gently, with months of dirt capacity. (a) Bypass would defeat filtration; deep media filters all the air, just slowly per square inch. (c) Some media use static charge, but the pressure-drop advantage is geometry. (d) ASHRAE 52.2 tests the filter as sold, regardless of depth."
    },
    {
      q: "The correct winter humidity setpoint strategy is:",
      choices: ["Set 50% and leave it all season", "Lower the setpoint as outdoor temperature falls, because cold building surfaces condense moisture — windows sweating is the over-set alarm", "Raise it during cold snaps to compensate for dry air", "Humidity control is unnecessary with a heat pump"],
      answer: 1,
      explanation: "Correct: (b). The safe ceiling is set by the envelope's coldest surfaces; weather-compensating controls exist precisely to track it. (a) A fixed high setpoint guarantees condensation in deep cold. (c) Backwards — cold snaps are when surfaces are coldest and the setpoint must drop most. (d) Heat pumps deliver cooler, longer supply air and dry homes just as surely; steam humidifiers are a common heat-pump pairing."
    },
    {
      q: "An HRV differs from an ERV in that the HRV:",
      choices: ["Has no fans", "Transfers heat only, exhausting indoor moisture rather than recovering it", "Works only in summer", "Requires no duct connections"],
      answer: 1,
      explanation: "Correct: (b). The HRV's impermeable core passes heat; moisture leaves with the exhaust — exactly what a moisture-heavy tight house in a cold climate needs. (a) Both are fan-driven balanced ventilators. (c) HRVs are primarily cold-climate winter devices. (d) Both need ducted or plenum-tied connections to move their two airstreams."
    },
    {
      q: "For a hot-humid climate home that fights summer humidity, the usual recovery choice is the ERV because it:",
      choices: ["Adds moisture to incoming air in summer", "Transfers part of the incoming air's moisture into the exhaust stream, reducing the latent load on the air conditioner", "Cools air below dew point by itself", "Eliminates the need for air conditioning"],
      answer: 1,
      explanation: "Correct: (b). The ERV's permeable core lets humidity migrate toward the drier stream — in summer, that's the exhaust — pre-drying ventilation air. (a) Backwards: in summer the ERV rejects moisture; in winter it retains it. (c) An ERV exchanges heat and moisture but performs no refrigeration cycle. (d) It reduces load; it does not replace the cooling plant."
    },
    {
      q: "An unbalanced recovery ventilator (exhaust exceeding supply) can endanger the house by:",
      choices: ["Overheating the recovery core", "Depressurizing the house, backdrafting natural-draft combustion appliances and pulling soil/radon pathways open", "Making the filters load too fast", "Raising the water table"],
      answer: 1,
      explanation: "Correct: (b). Negative pressure finds every hole — including the water heater's vent and the fireplace — which is why balancing at commissioning and a worst-case draft check are part of the install, not options. (a) Flow imbalance doesn't overheat cores. (c) Filter loading tracks total airflow and dust, not the imbalance direction. (d) Ventilators don't move groundwater."
    },
    {
      q: "The professional order of IAQ interventions is:",
      choices: ["Biggest filter first, always", "Source control, then ventilation/dilution, then filtration as the polishing step", "Ventilation only — filters are unnecessary", "Humidification before everything"],
      answer: 1,
      explanation: "Correct: (b). Sources are cheapest to stop, dilution handles what remains, and filtration polishes particulates — each tier shrinks the next tier's job. (a) Filtering a continuous source is the expensive failure mode the hierarchy exists to prevent. (c) Filters remain the only control for recirculated particulates like dander and pollen tracked indoors. (d) Humidity is bounded by the envelope and addressed within the strategy, not ahead of source control."
    }
  ],
  studyGuide: `
<h3>Module 9 — Indoor Air Quality: Quick Reference</h3>
<p><strong>MERV (ASHRAE 52.2)</strong>, capture across ~0.3–10 µm: 1–4 equipment protection • 5–8 typical home pleats (pollen/dust class) • 9–12 finer (allergy/pets) • 13–16 top band (sub-micron capture; hospitals). MERV = <em>minimum</em> efficiency. Retail MPR/FPR ≠ MERV.</p>
<p><strong>The trap:</strong> high MERV in a 1-inch rack = pressure drop → high rise/limit trips, freezing coils, ECM overwork. Remedy = <strong>area</strong>: deep-media cabinet, same MERV at low drop. Always verify with TESP + temperature rise.</p>
<p><strong>Humidity:</strong> bypass (runtime-dependent) • fan-powered • steam (output king, heat-pump friendly). Setpoint must <em>fall as outdoor temperature falls</em> — the coldest surface in the house sets the ceiling; sweating windows = over-set. Panels are consumables.</p>
<p><strong>ERV vs HRV:</strong> HRV moves heat only (dumps moisture — cold climates, moisture-heavy tight homes). ERV moves heat + moisture (keeps winter moisture in, rejects summer moisture — humid/mixed climates). Balance the flows at commissioning; imbalance depressurizes → backdrafting risk (prove combustion draft worst-case afterward).</p>
<p><strong>Hierarchy:</strong> source control → ventilation/dilution → filtration polish. IAQ gear never substitutes for fixing a combustion-safety defect (Module 10).</p>
`
};
