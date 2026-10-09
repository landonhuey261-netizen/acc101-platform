// HVAC 235 - Module 5: Hydronic Systems in Depth
module.exports = {
  number: 5,
  slug: "hydronics-in-depth",
  title: "Hydronic Systems in Depth",
  estTime: "3–4 hours",
  objectives: [
    "Size a boiler against a calculated heat loss and explain the costs of oversizing and undersizing.",
    "Use the 500 formula (Btu/h = 500 × GPM × ΔT) to move between flow, temperature drop, and delivered heat.",
    "Compare zoning with circulators versus zoning with zone valves, including their control wiring and failure modes.",
    "Explain outdoor reset control: what the curve is, why it saves fuel and comfort, and how to commission it.",
    "Diagnose the classic hydronic faults: air binding, waterlogged expansion tank, and short-cycling boilers."
  ],
  sections: [
    {
      heading: "Sizing the Boiler to the Load — Not to the Old Boiler",
      html: `
<p>Boiler replacement bids too often copy the nameplate of the unit being scrapped — a unit that was itself sized by guess, for a house that has since gained insulation, windows, and air sealing. The professional sequence starts with the building: a <strong>heat-loss calculation</strong> (room by room, in the spirit of Manual J from HVAC 245) at the local design temperature gives the load the boiler must meet on the coldest night. The boiler's <strong>net output rating</strong> — not its gross input — is matched to that load, with the piping/pickup allowance the rating system already builds in for the distribution losses of a normal system.</p>
<p>The failure modes of getting it wrong are asymmetric. An <strong>undersized</strong> boiler simply cannot hold temperature on design nights — rare, and obvious. An <strong>oversized</strong> boiler is the common, expensive sin: it satisfies the aquastat in minutes, shuts off, and repeats — <strong>short cycling</strong> that wastes fuel in repeated warm-up and purge losses, wears the burner and ignition components, and — in condensing boilers — never lets the system settle into the low return-water temperatures where condensing efficiency lives. A boiler twice the needed size can cost more to run than a smaller, cheaper one while delivering worse comfort.</p>
<div class="callout"><strong>Key idea:</strong> Size to the calculated load, check the emitters too: the boiler can only deliver what the baseboard/radiators/radiant loops can emit at the chosen water temperature. Boiler, water temperature, and emitter capacity are one equation wearing three hats — Module 6's radiant systems make that unavoidable.</div>
<p>One more sizing trap: combination loads. A boiler also feeding an <strong>indirect water heater</strong> must handle the tank's recovery demand — but through priority control (next section's zoning logic), not by oversizing the boiler for a load that rarely coincides with design-night space heating.</p>`
    },
    {
      heading: "The 500 Formula: The Arithmetic of Hot Water",
      html: `
<p>Water carries heat in strict proportion to its flow and temperature drop, and the industry compresses that physics into one line:</p>
<div class="formula">Btu/h = 500 × GPM × ΔT &nbsp;&nbsp;(for water; the 500 folds in water's weight per gallon and its specific heat)</div>
<p>Any one of the three values falls out of the other two. <strong>Worked example 1:</strong> a zone flowing 8 GPM with supply 180°F and return 160°F (ΔT = 20°F) delivers 500 × 8 × 20 = <strong>80,000 Btu/h</strong>. <strong>Worked example 2:</strong> a radiant zone must deliver 30,000 Btu/h at a design ΔT of 15°F: GPM = 30,000 ÷ (500 × 15) = 30,000 ÷ 7,500 = <strong>4 GPM</strong> — the flow the circulator and pipe sizing must provide. <strong>Worked example 3 (the diagnostic one):</strong> a zone's measured ΔT is only 8°F while its circulator pushes 10 GPM: delivery = 500 × 10 × 8 = 40,000 Btu/h. If the emitters were selected for 60,000 Btu/h at ΔT 20, the wide-open flow and narrow ΔT say water is racing through without giving up its heat — look for an open bypass, a mis-piped loop, or flow short-circuiting past the emitters.</p>
<div class="callout"><strong>Key idea:</strong> ΔT is a diagnosis, not just a number. Design ΔT (commonly 20°F on baseboard systems) with measured ΔT far below it means excess flow or short-circuiting; far above it means starved flow — air, a failing circulator, a closed or scaled passage. Two thermometers and the 500 formula interrogate any zone in minutes.</div>
<p>Practical measurement notes: strap-on or well-mounted sensors on supply and return, read at steady state, and compare zones against each other — the zone whose ΔT disagrees with its siblings is telling you where to dig.</p>`
    },
    {
      heading: "Zoning: Circulators vs. Zone Valves",
      html: `
<p>Zoning divides the house into independently controlled areas. Two hardware philosophies dominate, and you must be fluent in both:</p>
<ul>
<li><strong>Zone with circulators:</strong> each zone gets its own circulator, switched by its thermostat through a relay control. Strengths: positive flow per zone, each pump sized to its loop, one zone's failure doesn't strand the others. Costs: more pumps to buy, power, and eventually replace; needs check protection so idle zones aren't ghost-flowed by running pumps.</li>
<li><strong>Zone with valves:</strong> one (larger) circulator runs whenever any zone calls; each zone has a motorized <strong>zone valve</strong> its thermostat opens. The valve's <strong>end switch</strong> closes when the valve is fully open and tells the boiler control "a zone is truly open — fire and run the pump." Strengths: one pump, cheaper per zone. Failure signatures: a valve that opens without its end switch making (no fire), an end switch made with a valve stuck shut (boiler runs, zone stays cold, pump strains), slow heat-motor valves that delay calls.</li>
</ul>
<p>Either way, the control logic shares a skeleton: thermostat calls → zone device actuates → boiler control gets a proven demand → circulator(s) and burner run under the aquastat's supervision → call ends → devices reset. Troubleshooting is walking that skeleton with a meter: is the stat calling? Did the valve/pump respond? Did the end switch/relay pass the demand along? Did the aquastat allow fire? The video for this module walks a real zone-valve system's wiring in exactly this order.</p>
<div class="callout"><strong>Key idea:</strong> <strong>Priority zoning</strong> is the pattern to know cold: the indirect water-heater zone, when it calls, temporarily suspends space-heating zones so the boiler's full output recovers the tank quickly — then hands the house back. Priority is why a boiler can serve a big tank without being oversized for the house.</div>`
    },
    {
      heading: "Outdoor Reset: Matching Water Temperature to the Weather",
      html: `
<p>A fixed aquastat makes 180°F water in October and January alike — but October's load is a fraction of January's, so the emitters over-deliver, the thermostat cycles the system on room air temperature alone, and efficiency and comfort both leak away. <strong>Outdoor reset</strong> fixes the mismatch at the source: an outdoor sensor lets the control slide the target water temperature along a <strong>reset curve</strong> — hot water on the coldest nights, progressively cooler water as the weather moderates. An illustrative curve: 180°F supply at 0°F outdoors, tapering to about 120°F supply at 50°F outdoors (the exact endpoints are commissioned per building and emitter type).</p>
<p>Why it wins three ways: <strong>comfort</strong> — longer, gentler emitter output instead of hot blasts and cold sits; <strong>efficiency</strong> — return water comes back cooler, and on a condensing boiler cooler return water is quite literally the condensing condition, so reset is what lets a mod-con boiler earn its rating across the shoulder seasons; <strong>system kindness</strong> — less expansion stress, quieter piping, fewer burner cycles.</p>
<ul>
<li><strong>Commissioning matters.</strong> A curve set too flat leaves the house cold on design nights (raise the cold-end); too steep wastes the benefit. Radiant floors (Module 6) want a much lower, flatter curve than baseboard.</li>
<li><strong>Boiler protection.</strong> A conventional (non-condensing) boiler must not be reset so low that cool return water condenses flue gas inside it and rots the sections — reset controls for cast-iron boilers include a minimum boiler temperature for exactly this reason. Condensing boilers have no such floor — they are built wet.</li>
<li><strong>Sensor placement.</strong> The outdoor sensor goes on a shaded, north-facing wall away from vents and sun patches; a sensor baking in afternoon sun tells the control it's July and starves the house.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Reset turns the boiler from an on/off appliance into a load-matching one — the hydronic twin of Module 2's modulating furnace. Most "reset doesn't work" complaints are a wrong curve, a sun-baked sensor, or a missing minimum-temperature protection, not a failed control.</div>`
    },
    {
      heading: "Classic Hydronic Faults: Air, Tanks, and Cycling",
      html: `
<p>Close with the three faults that fill hydronic service vans:</p>
<ul>
<li><strong>Air binding.</strong> Air collects at high points and in emitters, blocking flow — a cold baseboard run or one cold zone with a happily running circulator is air until proven otherwise. The system should eliminate air by design (air separator at the boiler, vents at high points); the service answer is purging/bleeding the affected loop and then asking <em>why</em> air keeps entering — low fill pressure and a failing tank invite it back.</li>
<li><strong>Waterlogged expansion tank.</strong> The tank's air cushion is what absorbs expansion. When a diaphragm tank loses its charge or a plain steel tank waterlogs, every heat-up spikes system pressure until the relief valve weeps, and every cool-down can pull pressure low enough to starve upper floors and suck air in at vents. Symptom pairing to memorize: <em>relief valve dripping on heat-up + pressure gauge swinging wide = tank.</em> Cold fill pressure on a typical two-story home is commonly around 12 psi — enough to lift water to the top of the system with margin — and the tank's air charge must match it.</li>
<li><strong>Short cycling.</strong> Beyond oversizing (section 1): a mis-set aquastat differential, reset curve chaos, or a single tiny zone calling alone against a big boiler. Zone-demand aggregation and proper differentials are control fixes; the measurement is cycle counting, not guessing.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Hydronic diagnosis is pressure, temperature, and flow — three gauges' worth of evidence (fill pressure behavior, supply/return ΔT per zone, and the 500 formula) resolves most calls before a single part is loosened. Water is patient and physics-bound; if a zone defies the arithmetic, the piping — not the boiler — is usually confessing.</div>`
    }
  ],
  keyTerms: [
    { term: "Heat-loss calculation", def: "The room-by-room determination of a building's heating load at design temperature; the basis for correct boiler sizing." },
    { term: "Net output rating", def: "A boiler's rated heat delivery to the distribution system after the standard piping/pickup allowance; the figure matched against the building's heat loss." },
    { term: "The 500 formula", def: "Btu/h = 500 × GPM × ΔT for water — converts among delivered heat, flow rate, and supply-to-return temperature drop." },
    { term: "ΔT (delta-T)", def: "The temperature drop between supply and return water across a zone or boiler; a primary hydronic diagnostic (design ΔT commonly 20°F for baseboard)." },
    { term: "Circulator", def: "The wet-rotor pump that moves water through a hydronic loop; zoned systems use one per zone or one shared pump with zone valves." },
    { term: "Zone valve", def: "A motorized valve that opens one zone to a shared circulator; its end switch proves it open and passes the heat demand to the boiler control." },
    { term: "End switch", def: "The auxiliary contact in a zone valve that closes when the valve reaches fully open, signaling the boiler/circulator control to run." },
    { term: "Priority zoning", def: "Control logic that gives one zone (typically an indirect water heater) temporary exclusive use of the boiler, suspending other zones for fast recovery." },
    { term: "Indirect water heater", def: "A storage tank heated by boiler water through an internal coil, treated as a zone of the heating system." },
    { term: "Aquastat", def: "The boiler's water-temperature control: fires the burner to maintain its setpoint (high limit) and may run circulators; its differential sets burner cycle length." },
    { term: "Outdoor reset", def: "Control strategy that slides the target water temperature along a curve based on outdoor temperature — hottest water only on the coldest days." },
    { term: "Reset curve", def: "The commissioned relationship between outdoor temperature and target supply-water temperature; endpoints differ sharply between baseboard and radiant emitters." },
    { term: "Expansion tank", def: "The vessel holding an air cushion (plain steel or diaphragm type) that absorbs water expansion; when waterlogged, pressure swings wide and the relief valve weeps." },
    { term: "Fill pressure", def: "The cold static pressure maintained by the feed valve — commonly around 12 psi on a two-story home — enough to lift water to the highest point with margin." },
    { term: "Air binding", def: "Flow blockage by air trapped at high points or in emitters, leaving zones cold while the circulator runs; corrected by purging and by stopping air entry." },
    { term: "Short cycling (boiler)", def: "Rapid burner on/off operation from oversizing, tight aquastat differential, or a tiny zone calling alone — wasting fuel and wearing the burner." },
    { term: "Boiler protection (minimum temperature)", def: "A control floor on water temperature for non-condensing boilers that prevents cool return water from condensing flue gas inside the boiler and corroding it." }
  ],
  video: {
    title: "Boiler Training Class, Parts, Operation, Zoning, Explained!",
    embedUrl: "https://www.youtube.com/embed/0l_j1m5KIuw",
    note: "A full boiler-room walkthrough from AC Service Tech: components, zoning with circulators and controls, the indirect water heater, mixing valves, aquastats, and expansion — the physical layout behind every system in this module. Watch for how the zones are piped and controlled differently, and how the trim components (relief, feed, air elimination) cluster at the boiler.",
    more: [
      { title: "Boiler Wiring for Beginners – Full Walkthrough of a Real System (Honeywell L8148E + Zone Valves)", url: "https://www.youtube.com/watch?v=eB8TCjX541M" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A zone's supply reads 175°F and return 155°F at a measured flow of 6 GPM. (a) Compute delivered Btu/h. (b) The zone's calculated heat loss is 75,000 Btu/h. Is the zone keeping up, and if not, name the two variables the 500 formula says you can change.</p>",
      solution: "<p><strong>Solution:</strong> (a) ΔT = 175 − 155 = 20°F. Delivery = 500 × 6 × 20 = <strong>60,000 Btu/h</strong>. (b) No — 60,000 &lt; 75,000, so the zone falls behind on design weather. The formula leaves exactly two levers: <strong>raise GPM</strong> (bigger circulator setting, less restriction — to deliver 75,000 at ΔT 20 needs 75,000 ÷ (500 × 20) = 7.5 GPM) or <strong>raise ΔT</strong>, which in practice means hotter supply water so the emitters give up more heat per pass — bounded by the boiler's aquastat/reset settings and the emitters' output at that temperature. (Adding emitter capacity is the third, construction-level answer.)</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A 140,000 Btu/h boiler (net rating) is proposed for a house whose calculated heat loss is 68,000 Btu/h, 'so it can also handle the indirect water heater.' Critique the proposal and state the correct approach.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The boiler is roughly double the space-heating load. It will short cycle through most of the season — wasted fuel in warm-up losses, accelerated burner/ignition wear, and (if condensing) return temperatures that rarely let it condense as designed. Step 2: The indirect tank does not justify the oversize: with <strong>priority zoning</strong>, the tank borrows the boiler's full output only during recovery, suspending house zones briefly — a load that almost never coincides with the design night. Step 3: Correct approach: size the boiler near the 68,000 Btu/h loss (next available net rating at or modestly above it, per manufacturer guidance) and wire the indirect as the priority zone.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> On a valve-zoned system, the living-room zone is cold. The thermostat is calling, the zone valve's lever moves freely and the valve is hot on both sides (it is open), the boiler is cold, and the shared circulator is silent. Trace the logic chain and name the most likely failed link.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Walk the skeleton: stat calls ✓ → valve opens ✓ (hot both sides proves flow path open and prior hot water). Step 2: Next link: the valve's <strong>end switch</strong> must close at full-open to pass the demand to the boiler control — if it doesn't make, the aquastat never sees a call, so no burner and no circulator: exactly this symptom set. Step 3: Verify with a meter: check for the demand signal arriving at the boiler control with the valve open; check end-switch continuity at full-open. Step 4: Repair: replace the valve head/actuator assembly (or the valve, per design) and prove the chain end-to-end on a fresh call.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A condensing boiler with outdoor reset 'barely heats' on the first cold snap, though it was praised all autumn. The reset curve was set with a maximum supply of 140°F because 'radiant-style settings save fuel.' The house is heated by baseboard selected for 180°F design water. Explain the failure and the commissioning fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Baseboard output depends on water temperature; emitters chosen for 180°F design water deliver only a fraction of their rating at 140°F. On mild days the load is small, so 140°F sufficed and the system seemed fine; at design cold the emitters physically cannot emit the house's heat loss at that water temperature. Step 2: The curve's cold-end was commissioned for the wrong emitter family. Step 3: Fix: reset the curve so the cold endpoint delivers the water temperature the emitters were selected for (≈180°F at design outdoor temperature), keeping reset's benefit through the shoulder season where the curve's middle does the saving. Step 4: Retest on the next cold night and fine-tune — curve commissioning is verified at the weather extremes, not at 45°F.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A system's relief valve drips at the end of every heat-up, pressure swings from 12 psi cold to near 30 psi hot, and the top-floor baseboard periodically goes air-bound. Give the unified diagnosis and repair.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: All three symptoms are one fault: a <strong>waterlogged (or failed-charge) expansion tank</strong>. With no air cushion, heated water has nowhere to expand — pressure spikes until the relief valve weeps (symptoms 1–2). Step 2: On cool-down, pressure collapses below what the top of the system needs, upper emitters drain back and air enters through vents — the recurring air binding (symptom 3). Step 3: Repair: isolate and test the tank (on a diaphragm tank, check its air charge against the fill pressure with the water side depressurized; a tank heavy with water or with a failed bladder is replaced). Step 4: Restore correct cold fill (commonly ≈12 psi here), purge the air-bound loop, and watch a full heat/cool cycle: pressure should rise modestly and the relief valve stay dry.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Using the 500 formula, a radiant manifold zone (Module 6 preview) is designed for 24,000 Btu/h with supply 110°F and return 95°F. (a) What flow is required? (b) Why does radiant design favor a smaller ΔT and lower supply temperature than the 180°F/20°F baseboard pattern?</p>",
      solution: "<p><strong>Solution:</strong> (a) ΔT = 15°F. GPM = 24,000 ÷ (500 × 15) = 24,000 ÷ 7,500 = <strong>3.2 GPM</strong>. (b) Step 1: A floor is a huge emitter — its area delivers the needed heat at low water temperature, and low temperature is what makes the floor surface comfortable and safe for floor coverings rather than hot to walk on. Step 2: A smaller ΔT keeps the floor's surface temperature even from the start of the loop to the end (a 20°F drop would leave the far end of the loop noticeably cooler). Step 3: Low return temperatures are also exactly what condensing boilers and heat pumps want — the emitter choice and the heat source reward the same design.</p>"
    }
  ],
  quiz: [
    {
      q: "A boiler should be sized primarily by:",
      choices: ["The nameplate of the boiler being replaced", "The building's calculated heat loss, matched against the boiler's net output rating", "The size of the existing gas line", "Doubling the load so the indirect tank is covered"],
      answer: 1,
      explanation: "Correct: (b). Heat-loss calculation → net rating match is the professional sequence; the indirect is handled by priority zoning, not oversizing. (a) Perpetuates the previous installer's guess and ignores decades of building improvements. (c) The gas line is verified for the chosen boiler, not a sizing method. (d) Oversizing causes short cycling, wasted fuel, and — on condensing boilers — return temperatures too warm to condense well."
    },
    {
      q: "A zone flowing 5 GPM with a 20°F ΔT delivers:",
      choices: ["25,000 Btu/h", "50,000 Btu/h", "100,000 Btu/h", "10,000 Btu/h"],
      answer: 1,
      explanation: "Correct: (b). 500 × 5 × 20 = 50,000 Btu/h. (a) halves the flow contribution — the arithmetic error of using 250 instead of 500. (c) would need 10 GPM at the same ΔT. (d) drops a factor of five — check the formula: Btu/h = 500 × GPM × ΔT, with water's properties folded into the 500."
    },
    {
      q: "In a zone-valve system, the boiler stays cold and the pump silent even though the valve is open and the thermostat calls. The failed link is most likely:",
      choices: ["The circulator's capacitor", "The zone valve's end switch, which never passed the demand to the boiler control", "The expansion tank", "The outdoor sensor"],
      answer: 1,
      explanation: "Correct: (b). The end switch is the hand-off between 'valve open' and 'boiler, run' — when it doesn't make, nothing downstream ever hears the call, exactly matching a silent pump and cold boiler with a proven-open valve. (a) The circulator can't be the first failure — it was never told to run, and it's silent rather than humming/failed. (c) Tank faults show as pressure/relief symptoms, not a dead control chain. (d) A reset sensor can alter water temperature, not erase the entire demand signal on a simple system."
    },
    {
      q: "Outdoor reset improves a condensing boiler's seasonal efficiency mainly because:",
      choices: ["It makes the burner fire more often", "Cooler return water across the shoulder season keeps the boiler in condensing operation much more of the time", "It raises the aquastat to 200°F in winter", "It eliminates the need for zoning"],
      answer: 1,
      explanation: "Correct: (b). Condensing happens when return water is cool; reset deliberately runs the system on the coolest water that meets the day's load, maximizing condensing hours while also softening cycling. (a) More firing cycles is short cycling — the opposite of the goal. (c) Reset lowers water temperature when it can; the cold-end setting is about meeting design load, not exceeding standard temperatures. (d) Reset and zoning are complementary, not substitutes."
    },
    {
      q: "A relief valve that weeps on every heat-up, with wide pressure swings, points first at:",
      choices: ["A failed relief valve spring", "A waterlogged expansion tank that has lost its air cushion", "An oversized circulator", "A leaking zone valve"],
      answer: 1,
      explanation: "Correct: (b). Without the air cushion, expansion has nowhere to go — pressure spikes to the relief valve on heat-up and collapses on cool-down (which also explains recurring air at high emitters). (a) The valve is doing its job against genuine overpressure; replacing it alone leaves the cause. (c) Circulator size affects flow and ΔT, not static pressure swings. (d) A leaking valve passes flow, not pressure-spike behavior."
    },
    {
      q: "Why does a conventional cast-iron boiler on outdoor reset need minimum-temperature boiler protection?",
      choices: ["To keep the circulator from cavitating", "To prevent sustained cool return water from condensing flue gas inside the boiler and corroding it", "To satisfy the gas company's metering rules", "To keep the expansion tank charged"],
      answer: 1,
      explanation: "Correct: (b). A non-condensing boiler is built dry: flue-gas condensation inside its sections is corrosion, so reset controls hold a floor under boiler temperature even when the zones could use cooler water. (a) Cavitation is a pump/pressure issue, not the reason for the temperature floor. (c) Metering is unrelated to boiler water temperature. (d) Tank charge is air-side maintenance, unaffected by reset protection."
    },
    {
      q: "A zone measures ΔT of only 6°F at full flow while its design ΔT is 20°F. The reading suggests:",
      choices: ["The circulator has failed", "Water is moving too fast through, or short-circuiting past, the emitters — delivery per pass is diluted (check bypasses and piping paths)", "The boiler is undersized", "The expansion tank is waterlogged"],
      answer: 1,
      explanation: "Correct: (b). By the 500 formula, a narrow ΔT at high flow means each gallon surrenders little heat — classic excess flow, an open bypass, or a piping short circuit that lets water skip the emitters. Total delivery may still be substantial, which fools a hand-feel check. (a) A failed circulator gives near-zero flow and a very wide or zero ΔT pattern, not this. (c) Boiler size doesn't set one zone's ΔT signature. (d) Tank failure shows in pressure behavior, not zone ΔT."
    },
    {
      q: "Priority zoning for an indirect water heater means:",
      choices: ["The water heater always heats before the boiler is allowed to light", "When the tank calls, space-heating zones are temporarily suspended so the boiler's full output recovers the tank, then normal zoning resumes", "The tank gets the largest circulator", "Domestic hot water is heated only at night"],
      answer: 1,
      explanation: "Correct: (b). Priority is a temporary, controlled suspension — minutes of full-output recovery — which is precisely why the boiler needn't be oversized for the combined load. (a) Priority responds to a tank call; it doesn't gate every boiler start. (c) The tank zone's pump is sized to its coil like any other zone. (d) No time-of-day rule is involved."
    }
  ],
  studyGuide: `
<h3>Module 5 — Hydronic Systems in Depth: Quick Reference</h3>
<p><strong>Sizing:</strong> heat-loss calculation → match boiler <em>net</em> output. Oversize = short cycling + warm returns that defeat condensing. Indirect tank = priority zone, not a bigger boiler.</p>
<div class="formula">Btu/h = 500 × GPM × ΔT (water). 500 × 8 × 20 = 80,000. Narrow ΔT at high flow = excess flow/short circuit. Wide ΔT = starved flow.</div>
<p><strong>Zoning:</strong> circulator-per-zone (positive flow, more pumps) vs. one pump + zone valves (valve's <strong>end switch</strong> passes demand to the boiler — silent boiler + open valve = suspect end switch). Troubleshoot the chain: stat → device → end switch/relay → aquastat → burner/pump.</p>
<p><strong>Outdoor reset:</strong> curve slides supply temperature with outdoor temperature (hot only on design nights). Wins: comfort, longer runs, cool returns → condensing hours. Commission per emitter (baseboard hot curve, radiant low/flat). Non-condensing boilers need a minimum-temperature floor. Sensor: shaded north wall, away from vents/sun.</p>
<p><strong>Classic faults:</strong> air binding (cold zone, running pump — purge, then find air's entry) • waterlogged expansion tank (relief weeps on heat-up, wide pressure swings, cold fill ≈12 psi typical two-story) • short cycling (oversize, aquastat differential, lone small zone).</p>
`
};
