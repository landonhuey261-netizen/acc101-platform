// HVAC 235 - Module 6: Radiant Floor & Snowmelt Systems
module.exports = {
  number: 6,
  slug: "radiant-floor-snowmelt",
  title: "Radiant Floor & Snowmelt Systems",
  estTime: "3–4 hours",
  objectives: [
    "Explain why a radiant floor delivers comfort at far lower water temperatures than baseboard or radiators.",
    "Compare tubing installation methods — slab, staple-up with transfer plates, and panel systems — and their water-temperature consequences.",
    "Lay out a manifold of balanced loops: why loop lengths are kept similar and how flow meters/actuators zone a manifold.",
    "Explain how a mixing valve creates low-temperature radiant water from a high-temperature boiler, and size its flow with the 500 formula.",
    "Describe snowmelt system design differences: load intensity, glycol, slab sensing, and idling controls."
  ],
  sections: [
    {
      heading: "Why Floors Heat Differently",
      html: `
<p>Every emitter in Module 5 obeys the same rule: output rises with water temperature and emitter area. A radiant floor is the extreme case of <em>area</em> — the entire floor is the emitter — so it delivers a room's heat loss at water temperatures that would leave baseboard stone cold: supply water in the neighborhood of 90–120°F in many residential designs, against 180°F design water for baseboard. The floor surface itself runs only modestly above room temperature — warm to bare feet, never hot — which is both the comfort signature and a hard design limit: floors under wood and other coverings have maximum safe surface temperatures, so output per square foot is capped, and a high-loss room may need supplemental heat no matter how the tubing is laid.</p>
<p>The comfort is not marketing. Radiant floors heat from the occupied zone up, eliminate the hot-ceiling stratification of blown air, make no noise, move no dust, and — the efficiency link — their low water temperatures are exactly what condensing boilers and heat pumps produce best. This is why Module 5's reset curves for radiant are low and flat, and why radiant pairs so naturally with the heat sources of Modules 7 and 8.</p>
<div class="callout"><strong>Key idea:</strong> Low water temperature is not a compromise in radiant design — it is the point. Big area × gentle temperature = even comfort, and the low return temperatures hand condensing heat sources the conditions they need to hit their rated efficiency.</div>
<p>The trade-off is <strong>response time</strong>. A slab is a thermal battery: it charges and discharges slowly. Radiant slabs punish deep thermostat setbacks (recovery takes hours, not minutes) and reward steady, weather-aware control — reset and slab sensing rather than aggressive setback programming.</p>`
    },
    {
      heading: "Tubing Installations: Slab, Staple-Up, and Panels",
      html: `
<p>The tubing is almost always cross-linked polyethylene (PEX) with an oxygen barrier — the barrier matters, because oxygen diffusing through plain PEX corrodes every ferrous component in the system. How the tube meets the floor decides the water temperature the design needs:</p>
<ul>
<li><strong>In-slab (poured):</strong> tubing tied to mesh or fastened to insulation, encased in concrete. The slab's mass spreads heat superbly and tolerates the lowest water temperatures; it is also the least forgiving — pressure-test before and during the pour, photograph every layout, because the tubing is entombed for life.</li>
<li><strong>Staple-up (underfloor):</strong> tubing stapled to the underside of the subfloor from the joist space below. Without help, the tube touches the wood along a thin line, so output per foot is low and required water temperature climbs — often out of condensing-friendly range.</li>
<li><strong>Staple-up with aluminum transfer plates:</strong> plates snap over the tube and spread its heat across a wide strip of subfloor. Plates are the difference between a staple-up system that sips 120°F water and one begging for 160°F — the single highest-value upgrade in retrofit radiant.</li>
<li><strong>Panel/track systems above the subfloor:</strong> grooved panels route the tube in a thin layer under the finished floor — fast response (little mass), good conduction, at higher material cost.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Same tube, same boiler, four different systems — the installation method sets the thermal resistance between water and room, and therefore the design water temperature, and therefore whether the heat source runs in its efficient range. When a radiant system "doesn't heat," check the method and its expected water temperature before blaming the boiler.</div>
<p>Spacing follows output need: tighter tube spacing in high-loss areas (in front of large glass, perimeter bands, bathrooms where bare feet vote) and standard spacing in the field of the room — the layout drawing is an engineered document, and changing spacing in the field changes the design.</p>`
    },
    {
      heading: "Manifolds, Loops, and Balancing",
      html: `
<p>Radiant zones are built at the <strong>manifold</strong>: supply and return bars with a takeoff pair per <strong>loop</strong>. Loops are kept to similar lengths within a manifold — because water is lazy and takes the path of least resistance, a loop half the length of its siblings would steal flow and run hot while the long loops starve. Where lengths must differ, <strong>flow meters and balancing valves</strong> on each loop let the installer set each loop's design GPM (from the 500-formula math of Module 5) — balancing is a commissioning step, not a suggestion.</p>
<p>Layout patterns you will read on drawings:</p>
<ul>
<li><strong>Serpentine:</strong> the tube snakes back and forth — supply-hot at one side, return-cool at the other, so the floor has a warm-to-cool gradient. Simple; acceptable where the gradient doesn't matter.</li>
<li><strong>Counterflow (spiral):</strong> supply and return runs alternate side by side, so hot and cool average out across the floor — the even-temperature pattern for living spaces.</li>
<li><strong>Perimeter-first routing:</strong> the hottest supply pass runs along the coldest exterior wall/glass first, putting the strongest heat where the loss is — often combined with counterflow.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Zoning at a manifold comes in two flavors: whole-manifold zoning (one thermostat, one circulator/valve for the whole manifold) and per-loop zoning with <strong>thermal actuators</strong> on each loop under individual thermostats. Actuator systems need their end-switch/control logic proven loop by loop at commissioning — a loop whose actuator never opens is a cold room with a working thermostat.</div>
<p>Every manifold gets isolation and purge valves: each loop must be purgable individually at fill, because a radiant loop full of air delivers nothing and resists casual bleeding through hundreds of feet of small tube.</p>`
    },
    {
      heading: "Mixing Valves: Making Low-Temperature Water",
      html: `
<p>One boiler often serves two temperature worlds — 180°F baseboard upstairs, 110°F radiant downstairs. The radiant side gets its water through a <strong>mixing valve</strong>: a three-way thermostatic or motorized valve that blends hot boiler water with cool radiant return water to hold the radiant supply at its setpoint. As the floor warms and return water rises, the valve sips less boiler water; on a cold start it opens fully to the hot side. Motorized mixing valves under outdoor-reset control (Module 5) go further: the radiant supply temperature itself slides with the weather.</p>
<div class="formula">Radiant loop flow still obeys Module 5: Btu/h = 500 × GPM × ΔT. A 30,000 Btu/h radiant zone at ΔT 10°F needs 30,000 ÷ (500 × 10) = 6 GPM through its loops.</div>
<p>Design details that separate working systems from callbacks:</p>
<ul>
<li><strong>The radiant side needs its own circulator</strong> — the mixing valve blends, the zone circulator moves the blend around the loops; piping is commonly primary-secondary at the mix point so boiler flow and radiant flow don't fight.</li>
<li><strong>High-temperature protection:</strong> many radiant controls include a limit that halts the radiant circulator if mixed supply exceeds a safe setpoint — the last defense if a mixing valve fails open to a slab that must never see boiler-temperature water.</li>
<li><strong>The boiler still needs its protection:</strong> if the same boiler is non-condensing, return temperatures from a big radiant load can drag it into condensing territory — the arrangement (primary-secondary piping, boiler bypass/protection) must respect both the floor's wish for cool water and the boiler's need to stay dry (Module 5).</li>
</ul>
<div class="callout"><strong>Key idea:</strong> A mixing valve is a ratio device, not a temperature guarantee. Verify mixed supply temperature under full call at commissioning and on service — a valve stuck toward hot quietly cooks floor coverings and wastes fuel; stuck toward cold it produces the 'radiant doesn't work' call.</div>`
    },
    {
      heading: "Snowmelt Systems: Radiant Turned Outdoors",
      html: `
<p>Snowmelt is radiant logic applied to a driveway or walk: tubing in the slab, warm fluid, a clear surface. Everything scales up and toughens:</p>
<ul>
<li><strong>Load intensity.</strong> Melting snow as it falls — while wind strips heat and the sky is a cold sink — demands far more heat per square foot than indoor radiant. Boilers that loaf on the house can be fully committed by the slab; snowmelt is often the largest load on the property and is zoned accordingly (it never gets to starve the house — controls prioritize).</li>
<li><strong>Glycol is mandatory thinking.</strong> An outdoor slab's fluid can freeze during an outage or equipment failure; systems are typically filled with an antifreeze solution rated for the duty. Glycol changes the fluid's heat-carrying ability and viscosity versus water — the 500-formula arithmetic and circulator sizing must use the glycol solution's actual properties from the antifreeze manufacturer's data, not water's.</li>
<li><strong>Controls sense the slab, not the air.</strong> An automatic snowmelt control pairs an in-slab or aerial <strong>snow/ice sensor</strong> (moisture + temperature) with slab temperature sensing: the system warms the slab when snow is actually present or imminent and idles it just above freezing during storm watch to cut response time — at an energy cost the owner must choose deliberately. Manual-only systems depend on someone remembering before the storm.</li>
<li><strong>Idling economics.</strong> Keeping a big slab warm all winter 'just in case' can cost more than the season's actual melting. Commissioning includes an honest conversation: automatic sensing + standby strategy matched to the owner's tolerance for a slow first melt.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Snowmelt failures are usually control and capacity stories, not tubing stories: a system enabled after six inches have accumulated cannot catch up (it was designed to keep pace, not to recover), and a sensor buried under a parked car or drift 'sees' a different storm than the driveway does. Sensor placement and start timing are the design.</div>`
    }
  ],
  keyTerms: [
    { term: "Radiant floor heating", def: "Heating a space by warming the floor mass through embedded tubing; the huge emitter area permits low water temperatures and exceptionally even comfort." },
    { term: "PEX with oxygen barrier", def: "Cross-linked polyethylene tubing with a barrier layer preventing oxygen diffusion into the system water, which would otherwise corrode iron and steel components." },
    { term: "Transfer plates", def: "Aluminum channels that snap over staple-up tubing and spread heat across the subfloor, sharply lowering the water temperature a staple-up system needs." },
    { term: "Slab (in-slab) installation", def: "Tubing encased in a poured concrete slab; high thermal mass, lowest water temperatures, slowest response, and no post-pour access." },
    { term: "Staple-up", def: "Tubing fastened beneath the subfloor from the joist space; performance depends heavily on transfer plates and insulation below." },
    { term: "Manifold", def: "The supply/return header pair from which radiant loops originate, typically with per-loop flow meters, balancing valves, and optional actuators." },
    { term: "Loop", def: "One continuous tubing circuit from manifold supply back to manifold return; loops in a manifold are kept similar in length or balanced by valve settings." },
    { term: "Counterflow (spiral) layout", def: "A tubing pattern alternating supply and return passes so their temperatures average across the floor, avoiding a warm-to-cool gradient." },
    { term: "Serpentine layout", def: "A single snake path across the room; simplest pattern, with a supply-to-return temperature gradient across the floor." },
    { term: "Thermal actuator", def: "A small electrically driven valve operator on an individual manifold loop, enabling per-loop zoning from separate thermostats." },
    { term: "Mixing valve", def: "A three-way thermostatic or motorized valve blending hot boiler water with radiant return water to hold a low radiant supply setpoint." },
    { term: "Primary-secondary piping", def: "An arrangement decoupling two circuits (boiler and radiant) hydraulically so each flows at its own rate through closely spaced tees." },
    { term: "High-limit protection (radiant)", def: "A control that stops the radiant circulator if mixed supply water exceeds a safe temperature for the floor assembly." },
    { term: "Snowmelt system", def: "Outdoor radiant in a driveway/walk slab, with high heat output per square foot, glycol-protected fluid, and slab/snow-sensing controls." },
    { term: "Slab sensor", def: "A temperature (and on automatic controls, moisture) sensor embedded in or mounted for the slab, telling the control when melting is needed and when the slab is clear and dry." },
    { term: "Idling (snowmelt)", def: "Holding a slab just above freezing during storm watch so melting can start immediately; saves response time at a standby energy cost." },
    { term: "Thermal mass", def: "The heat-storage capacity of the slab; gives radiant its evenness and its slow response, punishing deep thermostat setbacks." }
  ],
  video: {
    title: "Plumbing - How Does Underfloor Heating Work",
    embedUrl: "https://www.youtube.com/embed/2OzImGhXRtI",
    note: "A walkthrough of a real underfloor heating setup: manifold with flow meters, the manifold pump and blending (mixing) valve holding the floor loop near its set temperature while the boiler runs hotter, the wiring centre, zone valve, and thermostat sequence. It matches this module's architecture almost part for part — watch how the mixing valve protects the floor from boiler-temperature water.",
    more: [
      { title: "How does a mixing unit for water-heated floors work?", url: "https://www.youtube.com/watch?v=h-byMtR7rD4" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A radiant zone must deliver 36,000 Btu/h and is designed for a 10°F ΔT. (a) Compute the total loop flow required. (b) The manifold has 4 loops of similar length — what flow should each loop's meter be set to? (c) Why does unequal loop length threaten this balance if the balancing valves are left wide open?</p>",
      solution: "<p><strong>Solution:</strong> (a) GPM = 36,000 ÷ (500 × 10) = 36,000 ÷ 5,000 = <strong>7.2 GPM</strong> total. (b) 7.2 ÷ 4 = <strong>1.8 GPM per loop</strong>, set on each loop's flow meter at commissioning. (c) Flow divides by resistance, not by intention: a shorter loop offers less friction, so wide-open it would take more than its 1.8 GPM share and run hot, while longer loops starve and their floor areas run cool — balancing valves add calibrated resistance to the easy loops so each loop gets its design flow.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A homeowner demands 6°F nightly setback on their in-slab radiant 'like the old furnace house.' Explain, with the system's physics, why you advise against deep setback and what control strategy you recommend instead.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The slab is a thermal battery with hours of lag: cooling it 6°F overnight means the morning recovery must reheat tons of concrete before the room feels warm — recovery stretches for hours, and the boiler runs at full output (often at higher, less efficient water temperatures) through the morning. Step 2: The setback's savings are small for radiant because steady low-temperature operation is already efficient — most of the 'savings' are repaid, with interest, in the recovery burn. Step 3: Recommend: hold a nearly constant setpoint (at most a small 1–2°F setback), and let outdoor reset (Module 5) do the economizing by sliding water temperature with the weather instead.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Two staple-up quotes differ only in transfer plates. The no-plate system needs 160°F design water; the plated system needs 125°F. The heat source is a condensing boiler. Explain the long-run consequences of choosing the cheaper no-plate install.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A condensing boiler only condenses when return water is cool; a system designed around 160°F supply returns water too hot for sustained condensing, so the boiler lives its life as an expensive non-condensing unit — the rated efficiency is never realized. Step 2: Higher water temperature also means hotter subfloor and less even floor surface temperature (striping above each tube), plus greater expansion noise and stress. Step 3: The plates' cost buys decades of lower water temperature: condensing operation, better floor evenness, and compatibility with future low-temperature heat sources like heat pumps (Modules 7–8). The 'savings' are one-time; the penalty is seasonal, forever.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> The mixing valve on a combined baseboard/radiant system fails stuck toward the hot side. Describe what the radiant zone experiences, what protects the floor, and the correct service response.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Boiler-temperature water (up to ~180°F) floods a system designed for ~110°F: floor surface temperatures climb toward damaging levels for coverings and uncomfortable underfoot, loop components and the slab are thermally stressed. Step 2: Protection: the radiant high-limit control should stop the radiant circulator when mixed supply exceeds its safe setpoint — verify it does; if the system lacks one, that is a design deficiency to correct, not to note and leave. Step 3: Service: shut the radiant zone down, test the valve and its actuator/thermostatic element, replace or rebuild as the manufacturer directs, recommission by verifying mixed supply temperature at full call — and confirm the high-limit actually trips on a simulated over-temperature before leaving.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A snowmelt owner complains the driveway 'never melts in time' — the system is switched on manually when snow starts and falls behind all storm. Explain the design intent the owner is fighting and the two control upgrades you propose.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Snowmelt is sized to <em>keep pace</em> with falling snow on a pre-warmed slab, not to melt an accumulating pack off a cold one — starting cold at storm onset guarantees hours of deficit while the slab's mass comes up to temperature, during which snow insulates the slab further. Step 2: Upgrade one: an automatic snow/ice sensor control that detects moisture + cold and starts the system at the storm's first flakes. Step 3: Upgrade two: slab-temperature sensing with an idle strategy — holding the slab just above freezing during forecast storm windows collapses start-up lag. Step 4: Set expectations honestly: idling costs standby energy; the owner is buying response time, and the control choice (full automatic vs. manual-with-idle) prices that trade-off.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Why must the flow arithmetic for a glycol snowmelt system NOT simply use the water constant 500, and what information do you obtain before sizing its circulator?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The 500 in the formula folds in water's density and specific heat. A glycol solution carries less heat per gallon per degree and is more viscous, so per-gallon delivery is lower and friction loss is higher — using 500 overstates delivery and undersizes the circulator simultaneously. Step 2: Before sizing, obtain from the antifreeze manufacturer's data for the actual solution and concentration: the corrected heat-transfer factor (the glycol equivalent of the 500 constant), viscosity/friction correction for the pipe sizing, and the solution's freeze-protection point. Step 3: Then run the same Btu/h = factor × GPM × ΔT structure with the corrected factor and verify the circulator against the corrected head loss.</p>"
    }
  ],
  quiz: [
    {
      q: "A radiant floor can heat a room with 110°F water while baseboard in the same house needs much hotter water because:",
      choices: ["Radiant tubing is made of a hotter material", "The floor's enormous emitter area delivers the load at low temperature difference", "Radiant systems have bigger boilers", "Floors are exempt from heat-loss physics"],
      answer: 1,
      explanation: "Correct: (b). Output = area × temperature difference effect; the whole floor as emitter needs only a gentle push. (a) Tubing material (PEX) actually limits temperature rather than enabling heat. (c) Boiler size follows load, not emitter type. (d) The physics is identical — area is what changes."
    },
    {
      q: "Aluminum transfer plates in a staple-up system primarily:",
      choices: ["Protect the tubing from nails", "Spread tube heat across the subfloor, lowering required water temperature and evening floor temperature", "Act as the oxygen barrier", "Replace the need for insulation below the joists"],
      answer: 1,
      explanation: "Correct: (b). Plates turn a line contact into a wide heated strip — more area coupled to the floor means the same output at much lower water temperature (and condensing-friendly returns). (a) Plates are thermal devices; nail protection is a layout/documentation matter. (c) The oxygen barrier is built into the PEX itself. (d) Insulation below remains necessary to drive heat upward instead of into the joist space."
    },
    {
      q: "Loops on one manifold are kept to similar lengths, or balanced with valves, because:",
      choices: ["Tubing is sold only in equal lengths", "Water favors the path of least resistance — a short loop would hog flow and starve longer loops", "Inspectors require symmetrical manifolds", "Long loops freeze first"],
      answer: 1,
      explanation: "Correct: (b). Parallel loops share flow by resistance; equal lengths equalize resistance naturally, and balancing valves trim the rest so every loop hits its design GPM from the 500-formula calculation. (a) Tubing comes in coils cut to design lengths. (c) Symmetry is aesthetics, not code. (d) Freeze risk follows exposure and fluid protection, not loop length ranking."
    },
    {
      q: "A mixing valve serving a radiant zone from a hot boiler works by:",
      choices: ["Throttling the boiler's gas valve", "Blending boiler supply water with radiant return water to hold the radiant supply setpoint", "Cooling water through a small radiator outdoors", "Turning the boiler off whenever the floor calls"],
      answer: 1,
      explanation: "Correct: (b). The three-way valve proportions hot supply against recirculated return — a ratio device continuously rebalanced as the floor warms. (a) The boiler's firing is the aquastat/reset's business; the mix valve is hydraulic. (c) No heat is thrown away outdoors — return water is reused in the blend. (d) The boiler runs as needed; the valve shapes temperature, not boiler scheduling."
    },
    {
      q: "A counterflow (spiral) layout is preferred in living areas over a simple serpentine because it:",
      choices: ["Uses less tubing", "Alternates hot supply and cool return passes so floor temperature averages out evenly", "Eliminates the need for a manifold", "Allows higher water temperatures"],
      answer: 1,
      explanation: "Correct: (b). Serpentine floors are warm at the supply end and cool at the return end; counterflow interleaves the two so the surface feels uniform. (a) Counterflow typically uses similar or slightly more tubing. (c) The manifold exists regardless of pattern. (d) Layout doesn't license higher temperatures — floor surface limits still govern."
    },
    {
      q: "The most important reason snowmelt fluid differs from ordinary heating water is:",
      choices: ["It must be colored for visibility", "It contains glycol antifreeze because an outdoor slab can freeze during outages — and glycol changes heat transfer and friction, so water constants don't apply", "It runs at higher pressure than any boiler allows", "It is changed every season"],
      answer: 1,
      explanation: "Correct: (b). Freeze protection is existential for an entombed outdoor loop, and the solution's different properties must flow into the delivery math and circulator selection. (a) Dye is incidental. (c) Snowmelt runs at ordinary system pressures. (d) Glycol is tested and maintained, not routinely replaced each season."
    },
    {
      q: "Automatic snowmelt controls decide to run based on:",
      choices: ["The homeowner's phone app only", "A snow/ice sensor detecting moisture at cold temperatures, plus slab temperature — starting the melt as snow begins", "A calendar schedule", "Outdoor temperature alone, all winter"],
      answer: 1,
      explanation: "Correct: (b). Moisture-plus-cold is the signature of actual snowfall; slab sensing verifies the surface state so the system stops when clear and dry. (a) Apps may override, but the automatic logic is sensor-based. (c) Storms ignore calendars. (d) Temperature alone would run the slab through every cold dry night — expensive idling with no snow to melt."
    },
    {
      q: "Deep nightly thermostat setback is poor practice on in-slab radiant mainly because:",
      choices: ["The thermostat battery drains faster", "The slab's thermal mass makes recovery take hours while steady low-temperature operation is already efficient", "Setback voids the tubing warranty", "The boiler cannot restart after a setback"],
      answer: 1,
      explanation: "Correct: (b). You are heating and cooling tons of concrete on a schedule the mass cannot follow; the recovery burn at high output repays the night's 'savings.' Small setbacks (1–2°F) or none, with reset doing the economizing, is the professional pattern. (a) Battery drain is trivial. (c) No such warranty mechanism exists. (d) The boiler restarts fine — it just works a long, inefficient recovery shift."
    }
  ],
  studyGuide: `
<h3>Module 6 — Radiant Floor & Snowmelt: Quick Reference</h3>
<p><strong>Core idea:</strong> whole floor = emitter → design water ≈90–120°F residential (vs ~180°F baseboard). Low returns = condensing-boiler/heat-pump friendly. Floor surface temperature is capped by comfort/covering limits — high-loss rooms may need supplemental heat.</p>
<p><strong>Install methods set water temperature:</strong> in-slab (lowest temps, mass, slow) • panel/track (fast, pricier) • staple-up (needs transfer plates + under-insulation or water temperature climbs out of the efficient range). PEX must have an <strong>oxygen barrier</strong>. Pressure-test and photograph before any pour.</p>
<p><strong>Manifolds:</strong> loops similar length (water takes the easy path) • set each loop's GPM on its flow meter — GPM = Btu/h ÷ (500 × ΔT) • counterflow pattern for even floors • per-loop actuators = per-room zoning • every loop individually purgable.</p>
<p><strong>Mixing:</strong> 3-way valve blends boiler water + radiant return to hold setpoint; radiant side has its own circulator (often primary-secondary); high-limit stops the radiant pump if mix temperature runs away. Verify mix temperature at full call.</p>
<p><strong>Snowmelt:</strong> highest load per ft² on the property • glycol fluid (water's 500 constant and friction data do NOT apply — use the glycol maker's factors) • snow/ice + slab sensors, idle strategy = buying response time • designed to keep pace, not recover a buried cold slab.</p>
`
};
