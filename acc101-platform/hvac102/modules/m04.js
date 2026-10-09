// HVAC 102 - Module 4: Refrigerant Oils & Oil Management
module.exports = {
  number: 4,
  slug: "refrigerant-oils-oil-management",
  title: "Refrigerant Oils & Oil Management",
  estTime: "3–4 hours",
  objectives: [
    "State the jobs refrigerant oil must do and why most of it must stay in the compressor.",
    "Compare mineral, POE, and PVE oils: chemistry, refrigerant partners, miscibility, and moisture behavior.",
    "Explain hygroscopic handling rules for POE oil and the hydrolysis–acid–copper-plating failure chain.",
    "Describe how oil circulates, where it traps, and how velocity, traps, and piping practice return it to the compressor.",
    "Handle retrofits and compressor changes without mixing incompatible oils or leaving the system under- or over-filled with oil."
  ],
  sections: [
    {
      heading: "What Oil Does — and Where It Belongs",
      html: `<p>Refrigerant oil has four jobs: <strong>lubricate</strong> bearings, journals, and cylinder walls; <strong>seal</strong> the small clearances between moving parts so compression stays efficient; <strong>carry heat away</strong> from friction surfaces; and <strong>quiet</strong> the machine. All four jobs happen inside the compressor — yet oil inevitably leaves with the discharge gas, travels the whole circuit, and must find its way back. Oil management is the art of keeping that round trip reliable.</p><p>Too little oil returning means wear and seizure. Too much oil circulating is also a fault: oil films insulate evaporator and condenser tube walls (heat must conduct through the film), oil logging in an evaporator steals volume from boiling refrigerant, and excess oil in the crankcase foams on startup as refrigerant flashes out of it, pumping the lubricant away exactly when bearings need it most. The correct condition is a <em>balance</em>: a small, steady circulation rate, with the crankcase level held where the manufacturer specifies.</p><p>Oil and refrigerant interact through <strong>miscibility</strong> — the ability to mix into one liquid phase. A miscible pair travels together and returns reliably. An immiscible pair separates: oil pools in the evaporator (the coldest, slowest real estate in the system), the crankcase starves, and capacity falls as the oil layer thickens. Oil selection is therefore not "any refrigeration oil" — it is a matched property of the refrigerant–oil pair, across the system's whole temperature range.</p><div class="callout"><strong>Key idea:</strong> Oil is a system chemical, not a compressor spare part. Choose it for the refrigerant, keep it clean and dry, keep it moving, and keep the level where the manufacturer put it.</div>`
    },
    {
      heading: "The Three Oil Families: Mineral, POE, PVE",
      html: `<ul><li><strong>Mineral oil</strong> — refined petroleum oil, the partner of the CFC and HCFC era (R-12, R-22 systems). Chemically stable, only mildly moisture-attracting, and forgiving to handle. Its fatal limitation: it is <em>not miscible enough with HFC refrigerants</em> such as R-410A and R-134a, so it will not return reliably from their evaporators. Mineral oil in an HFC system is an oil-logging failure scheduled in advance.</li><li><strong>POE (polyolester) oil</strong> — a synthetic ester, the standard partner for HFC and HFO refrigerants (R-410A, R-134a, R-404A, and the newer blends). Fully miscible with its refrigerants across working temperatures, an excellent lubricant — and aggressively <strong>hygroscopic</strong>, absorbing moisture from room air far faster than mineral oil. POE is also a strong solvent: it scrubs old deposits off pipe walls, which is why retrofits and burnout cleanups must plan on filter-drier changes catching the loosened debris.</li><li><strong>PVE (polyvinyl ether) oil</strong> — a newer synthetic used with some HFC/HFO equipment. It is miscible like POE but notably <em>less</em> prone to the hydrolysis reaction described below, and it does not form the same acids with moisture. It is specified by the equipment manufacturer where it is used — it is not a field substitute you choose on preference.</li></ul><p>Two rules govern all three. First: <strong>use the oil type and viscosity grade the compressor manufacturer specifies</strong> — the can on the truck does not outrank the nameplate. Second: <strong>never casually mix families.</strong> Small residual percentages of mineral oil are tolerated in certain documented retrofit procedures, but "topping up" a POE system with mineral oil (or the reverse) creates a mixture whose miscibility nobody has certified.</p><div class="callout"><strong>Key idea:</strong> Mineral ↔ legacy HCFC/CFC refrigerants. POE ↔ HFC/HFO refrigerants. PVE ↔ where the manufacturer specifies it. When the refrigerant changes, the oil question must be asked again.</div>`
    },
    {
      heading: "Water Is the Enemy: Hygroscopic Handling and Hydrolysis",
      html: `<p>POE oil left open to shop air begins loading itself with moisture immediately. That moisture cannot simply be "vacuumed back out" of the oil once absorbed in quantity — and inside a hot compressor it drives <strong>hydrolysis</strong>: the ester breaks down in the presence of water, forming organic acids. From there the failure chain is well documented:</p><ul><li>Acids attack motor winding insulation (in hermetic and semi-hermetic compressors the oil bathes the motor) → shorted or grounded windings → burnout.</li><li>Acids etch copper from tubing surfaces; the dissolved copper later <strong>plates out</strong> on the hottest steel surfaces — bearings and journals — building up until clearances close, friction climbs, amp draw rises, and the compressor seizes or fails electrically. A compressor condemned as a "weak motor" is sometimes a copper-plating victim.</li><li>Acid and moisture together corrode valve reeds, foul expansion devices with sludge, and poison every replacement compressor installed into the same contaminated circuit (Module 7's cleanup discipline exists for this reason).</li></ul><p>Handling rules that prevent the chain from starting:</p><ul><li>Keep POE containers <strong>sealed until the moment of use</strong>; reseal immediately; never decant into open shop cans "for later."</li><li>Charge oil quickly, through the smallest practical opening, and never leave a compressor open to atmosphere while you take a break — plug or cap every opening.</li><li>Never use oil from a container of unknown history or one found open. Oil is cheap; compressors are not.</li><li>Keep systems closed: the same discipline that protects oil protects the whole circuit — moisture that never enters never needs evacuating (Module 7).</li></ul><div class="callout"><strong>Key idea:</strong> You cannot dry a system by wishing. POE's moisture clock starts the second the seal breaks — work like it.</div>`
    },
    {
      heading: "Oil Return: Velocity, Traps, and Where Oil Hides",
      html: `<p>Oil returns to the compressor by riding the refrigerant — as a mist in vapor, or as a wall film dragged along by gas velocity. Anything that slows suction gas below carrying velocity lets oil fall out and pool:</p><ul><li><strong>Oversized suction lines</strong> — the classic retrofit error. Gas that carried oil in the original line size loiters in a bigger pipe, especially in vertical risers.</li><li><strong>Vertical risers without proper trapping/sizing</strong> — oil must be lifted; traps at riser bases collect oil into slugs the gas can push upward, and tall risers may need reduced diameter to keep velocity up.</li><li><strong>Low-load operation</strong> — a system sized for July moves gas lazily in April; oil return margins are thinnest at part load, exactly when short run cycles give oil the least time to come home.</li><li><strong>Evaporators below the compressor, long horizontal runs without pitch, and sagging line sets</strong> — every unintentional low spot is an oil trap nobody designed.</li></ul><p>Field checks: verify the crankcase sight glass (where fitted) at steady running — not right after startup, when foaming lies to you. Investigate oil loss before adding oil: a system "losing oil" is usually a system <em>storing</em> oil in a cold evaporator (check for logging: poor capacity with a frost pattern that suggests oil-coated tubes), a leak carrying oil out (oil stains are leak evidence, Module 10), or a flooded/foaming crankcase pumping oil into the circuit. Adding oil to a logging system makes the true fault worse.</p><p>After a compressor change, the accounting reverses: the failed compressor may have pumped its oil charge into the system for months. The replacement arrives with its own oil fill. Failing to drain and measure the old oil, and to account for oil already in the circuit, overfills the system — with the heat-transfer and foaming penalties from Section 1. Measure what came out; follow the manufacturer's procedure for what goes back.</p><div class="callout"><strong>Key idea:</strong> Oil problems are usually plumbing, velocity, or history problems. Diagnose where the oil <em>is</em> before deciding how much to add.</div>`
    },
    {
      heading: "Retrofits and Oil Changeovers",
      html: `<p>Changing refrigerants usually means changing oil chemistry. The classic case — an HCFC/mineral system converted to an HFC refrigerant — requires flushing or repeated oil changes to reduce residual mineral oil to the small percentage the retrofit procedure allows, because the new refrigerant cannot carry the old oil home. Each step is documented manufacturer procedure, not improvisation:</p><ul><li>Recover the old refrigerant (never vent — Module 9) and drain/measure the old oil.</li><li>Install the specified POE charge; run, drain, and repeat if the procedure requires dilution cycles.</li><li>Replace filter-driers with types approved for the new oil/refrigerant pair, and expect POE's solvent action to load them with liberated debris — plan a follow-up drier change.</li><li>Replace elastomers the procedure names (some seal materials shrink or swell differently across refrigerant/oil pairs).</li><li>Re-label the system: refrigerant, oil type, and charge, so the next technician does not "correct" your retrofit back into a failure.</li></ul><p>The alternative-refrigerant transition in Module 12 (R-410A equipment giving way to A2L refrigerants in <em>new</em> equipment) is different: those refrigerants are not drop-in retrofit candidates for existing A1 equipment, and their oils and components are specified as a matched new-system package. The retrofit discipline of this module applies to approved conversions of existing systems — and the first step of any conversion is confirming the conversion is approved at all.</p><div class="callout"><strong>Key idea:</strong> An oil changeover is a chemical procedure with a paper trail: specified oil, measured quantities, new driers, new labels. Anything less is a slow-motion warranty denial.</div>`
    }
  ],
  keyTerms: [
    { term: "Miscibility", def: "The ability of oil and refrigerant to mix into a single phase; required for reliable oil return from the evaporator." },
    { term: "Mineral oil", def: "Petroleum-based lubricant partnered with CFC/HCFC refrigerants; not miscible enough with HFCs for reliable return." },
    { term: "POE oil (polyolester)", def: "Synthetic ester oil standard with HFC/HFO refrigerants; highly miscible and highly hygroscopic." },
    { term: "PVE oil (polyvinyl ether)", def: "Synthetic oil used where manufacturers specify it with certain HFC/HFO equipment; less hydrolysis-prone than POE." },
    { term: "Hygroscopic", def: "Readily absorbing moisture from air; POE oil loads with water quickly when a container or system is left open." },
    { term: "Hydrolysis", def: "Chemical breakdown of POE oil in the presence of water, producing acids that attack system metals and motor insulation." },
    { term: "Copper plating", def: "Deposition of acid-etched copper onto hot steel bearing surfaces inside the compressor, closing clearances until seizure." },
    { term: "Oil logging", def: "Oil trapped in the evaporator or lines instead of returning; insulates tubes and starves the crankcase." },
    { term: "Crankcase foaming", def: "Refrigerant flashing out of the oil on startup, foaming the lubricant and pumping it out of the compressor." },
    { term: "Oil trap (P-trap)", def: "A deliberate low bend at a riser base that collects oil into movable slugs so suction gas can lift it." },
    { term: "Carrying velocity", def: "The minimum refrigerant gas velocity needed to drag oil along lines and up risers back to the compressor." },
    { term: "Acid test", def: "A field test of a sample of system oil for acid contamination, used after burnouts and before returning a cleaned system to service." },
    { term: "Solvent action (POE)", def: "POE's tendency to dissolve old deposits from pipe walls, loading filter-driers after retrofits and cleanups." },
    { term: "Viscosity grade", def: "The oil's thickness rating; must match the compressor manufacturer's specification for the application temperature." },
    { term: "Oil separator", def: "A discharge-line device on some larger systems that strips oil from discharge gas and returns it to the crankcase." },
    { term: "Retrofit oil changeover", def: "The documented procedure for replacing one oil family with another when a system is converted to a different refrigerant." }
  ],
  video: {
    title: "Why Pulling a Vacuum Matters: POE Oil, Acid and Compressor Failure",
    embedUrl: "https://www.youtube.com/embed/63IIXoB_3ko",
    note: "Ty Branaman walks through the exact chemistry of this module: how moisture left in a system converts POE oil to acid, how acid etches copper, and how copper plating builds inside the compressor until it fails — plus why the decay test matters. Watch for the failure chain, not just the vacuum procedure.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A new R-410A system is being commissioned. The helper reaches for the shop's open jug of mineral oil 'to top up the compressor.' Stop him: give two independent reasons this is wrong.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Wrong oil family — R-410A requires POE; mineral oil is not miscible enough with HFC refrigerant, so it would log in the evaporator and starve the crankcase. Step 2: Wrong handling — an <em>open</em> jug of any oil is moisture-suspect, and POE discipline (sealed until use) exists because absorbed water drives hydrolysis and acid formation. The compressor ships with its specified oil; top-ups use the specified oil from a sealed container, only when a measured need exists.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Trace the full failure chain from 'POE container left open over a humid weekend' to 'compressor seized' in order.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Hygroscopic POE absorbs moisture from the air. Step 2: Charged into the system, the wet oil circulates to the hot compressor. Step 3: Heat + water hydrolyze the ester, forming acids. Step 4: Acids etch copper from tubing; dissolved copper plates onto hot bearing surfaces. Step 5: Plating closes clearances, friction and amp draw climb, lubrication fails. Step 6: Seizure (or the acids first destroy winding insulation and cause an electrical burnout). Prevention sits at Step 1: sealed containers, fast work, capped openings.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A system's crankcase sight glass reads low after months of operation, but capacity is also down and the evaporator shows signs of oil coating. Should you add oil? Explain the diagnosis first.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: No — not yet. Low crankcase + oil-coated evaporator is the signature of <strong>oil logging</strong>: the oil is in the system, just in the wrong place. Step 2: Adding oil raises the total inventory and thickens the evaporator film, worsening capacity. Step 3: Find why oil is not returning — oversized or sagging suction line, low gas velocity at part load, missing riser trap. Step 4: Correct the return path; the crankcase level recovers as the logged oil comes home.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Why do retrofit procedures specify a follow-up filter-drier change shortly after an oil changeover to POE, even if the system 'runs fine'?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: POE is a strong solvent compared with mineral oil. Step 2: It scrubs years of deposits off internal surfaces, and that debris load goes straight to the drier. Step 3: A drier that saturates early can restrict flow (Module 11's starved-system symptoms) or pass contaminants onward. Step 4: The scheduled follow-up change is cheap insurance bought at the moment the contamination load is predictable — before it becomes a callback.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A replacement compressor is installed after the original pumped oil into the system for months before failing. What measurement prevents an overfilled system, and what two symptoms would overfilling cause?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Drain and <strong>measure the oil recovered from the failed compressor and system</strong>, and account for oil already distributed in the circuit against the manufacturer's specified total. Step 2: Symptom one — oil films insulate heat-exchanger tubes, cutting capacity. Step 3: Symptom two — excess crankcase oil foams violently on startup as refrigerant flashes out, pumping lubricant into the circuit and starving bearings at the same time.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> PVE oil is described as 'less hydrolysis-prone' than POE. Does that make PVE a universal field substitute wherever POE is specified? Answer with the governing rule.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: No. Step 2: The governing rule is that the <strong>compressor/equipment manufacturer's specified oil type and viscosity grade</strong> controls — PVE is used where it is specified, POE where it is specified. Step 3: A favorable property in one dimension does not certify miscibility, materials compatibility, or warranty compliance for a different machine. Field preference never outranks the nameplate.</p>"
    }
  ],
  quiz: [
    {
      q: "Mineral oil must not be used as the lubricant in an R-410A system primarily because:",
      choices: ["It is too expensive", "It is not miscible enough with HFC refrigerant, so oil will not return reliably from the evaporator", "It freezes at evaporator temperature", "It reacts explosively with R-410A"],
      answer: 1,
      explanation: "Correct: (b). Oil return depends on miscibility; mineral oil separates from HFCs and logs in the evaporator while the crankcase starves. (a) Cost is irrelevant to the chemistry. (c) Mineral oil flows at these temperatures in its proper HCFC applications. (d) There is no such reaction — the failure is slow starvation, not drama."
    },
    {
      q: "Hygroscopic means the oil:",
      choices: ["Repels water", "Readily absorbs moisture from air", "Must be heated before use", "Contains no additives"],
      answer: 1,
      explanation: "Correct: (b). POE's strong affinity for water is why containers stay sealed and systems stay closed. (a) is the opposite. (c) No heating step exists in oil handling procedure. (d) Additive content is unrelated to the term."
    },
    {
      q: "Hydrolysis of POE oil in a wet system produces:",
      choices: ["Extra lubricant film", "Acids that attack insulation and etch copper, leading to copper plating and failure", "Harmless water vapor that leaves on its own", "Higher miscibility"],
      answer: 1,
      explanation: "Correct: (b). Water + heat break the ester into acids; the acid–copper–plating chain is a documented compressor killer. (a) Acid thins and degrades the lubricant. (c) The moisture does not leave — it reacts in place. (d) Miscibility is not the product of hydrolysis."
    },
    {
      q: "Copper plating harms a compressor by:",
      choices: ["Coating the condenser fins", "Building up on hot bearing surfaces, closing clearances and raising friction until seizure", "Blocking the metering device first", "Changing the refrigerant's color"],
      answer: 1,
      explanation: "Correct: (b). Dissolved copper deposits preferentially on the hottest steel — journals and bearings — with mechanical consequences. (a) Plating occurs inside the compressor, not on air-side fins. (c) Metering devices foul from sludge and debris, a parallel acid effect, not plating. (d) Color change is not the mechanism of harm."
    },
    {
      q: "A low crankcase level with an oil-coated, underperforming evaporator most likely means:",
      choices: ["The system needs two quarts of oil immediately", "Oil is logging in the evaporator — find the return problem before adding oil", "The compressor is burning oil", "The sight glass is lying and should be removed"],
      answer: 1,
      explanation: "Correct: (b). The oil inventory is present but misplaced; adding more thickens the evaporator film and worsens capacity. (a) treats inventory when the fault is distribution. (c) Compressors do not consume oil like engines. (d) The glass is reporting the crankcase truthfully — the oil is elsewhere."
    },
    {
      q: "Which suction-line condition most threatens oil return on a vertical riser?",
      choices: ["Line sized exactly to the design", "An oversized line dropping gas velocity below carrying velocity", "Insulation on the line", "A trap at the riser base"],
      answer: 1,
      explanation: "Correct: (b). Oil climbs risers by gas drag; slow gas lets it fall back and log. (a) Correct sizing is the protection, not the threat. (c) Insulation protects density and prevents sweating; it does not slow the gas. (d) A base trap is a return aid, collecting oil into liftable slugs."
    },
    {
      q: "On a documented HCFC-to-HFC retrofit, residual mineral oil is managed by:",
      choices: ["Ignoring it — oils are interchangeable", "Flushing or repeated POE oil changes per the manufacturer's procedure, to reach the allowed residual percentage", "Adding mineral oil to the POE to help it mix", "Running the system vented for one hour"],
      answer: 1,
      explanation: "Correct: (b). Approved procedures dilute/flush the old oil to a specified small residual so the new refrigerant can carry the lubricant charge home. (a) is exactly the misconception this module exists to kill. (c) moves the mixture further from any certified behavior. (d) Venting refrigerant is prohibited (Module 9) and does nothing for oil."
    },
    {
      q: "The governing source for which oil goes in a compressor is:",
      choices: ["Whatever sealed can is on the truck", "The compressor/equipment manufacturer's specification of type and viscosity grade", "The color of the old oil", "The refrigerant wholesaler's preference"],
      answer: 1,
      explanation: "Correct: (b). Type and viscosity are engineered properties of the machine–refrigerant pair. (a) Convenience is not a specification. (c) Color indicates condition, not chemistry or grade. (d) Counter advice does not override the nameplate or warranty."
    }
  ],
  studyGuide: `
<h3>Module 4 — Refrigerant Oils &amp; Oil Management: Quick Reference</h3>
<p><strong>Oil's jobs:</strong> lubricate, seal clearances, remove heat, quiet the machine — all inside the compressor, so oil that leaves must return.</p>
<p><strong>Families:</strong> Mineral = CFC/HCFC partner (R-22 era), not miscible enough for HFCs. POE = HFC/HFO standard (R-410A, R-134a), miscible, hygroscopic, strong solvent. PVE = manufacturer-specified alternative, less hydrolysis-prone.</p>
<p><strong>Failure chain:</strong> open/wet POE → hydrolysis → acids → winding damage + copper etching → copper plating on bearings → high amps → seizure/burnout.</p>
<p><strong>Handling:</strong> sealed until use, reseal at once, cap every system opening, never use oil of unknown history.</p>
<p><strong>Return:</strong> needs carrying velocity — correct line sizing, riser traps, pitch, no sags; worst at part load. Low crankcase + coated evaporator = logging: fix the return path before adding oil.</p>
<p><strong>Changeovers:</strong> documented procedure — recover, drain &amp; measure, specified oil, new approved driers (+ follow-up change for POE's solvent load), re-label system.</p>
<p><strong>Watch out:</strong> measure oil out of failed compressors; overfill causes insulating films and startup foaming. Nameplate oil spec outranks truck stock, always.</p>
`
};
