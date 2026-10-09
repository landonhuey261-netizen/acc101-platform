// HVAC 132 - Module 9: Hydronic Heating
module.exports = {
  number: 9,
  slug: "hydronic-heating",
  title: "Hydronic Heating",
  estTime: "3–4 hours",
  objectives: [
    "Describe the hydronic loop and the job of each core component: boiler, circulator, expansion tank, air separator/vents, fill valve, relief valve, and terminal units.",
    "Use the universal hydronics formula (Btu/h = GPM × 500 × ΔT) to find delivered heat or required flow.",
    "Explain system pressure: cold fill pressure, static head (0.433 psi per foot), and why a typical relief valve is rated 30 psi.",
    "Distinguish diaphragm from plain-steel expansion tanks and diagnose a waterlogged tank from its symptoms.",
    "Explain air as the hydronic enemy: where it collects, the symptoms it causes, and how air elimination works.",
    "Compare zoning by circulators versus zone valves, and read basic piping arrangements (series loop, one-pipe with diverter tees, two-pipe)."
  ],
  sections: [
    {
      heading: "The Loop: Water as the Delivery Truck",
      html: `
<p>Hydronic heating moves heat with water instead of air. A <strong>boiler</strong> heats water (it need not boil — in hydronics, 'boiler' is the job title, not a description), a <strong>circulator</strong> pumps it through piping to <strong>terminal units</strong> — baseboard convectors, radiators, radiant floors, fan coils — where the water gives up heat to the rooms, and the cooled water returns to be reheated. The loop is <strong>closed</strong>: the same water goes around for years, which is why hydronic systems are quiet, even, and beloved in cold climates.</p>
<p>The supporting cast that makes a closed loop survivable:</p>
<ul>
<li><strong>Expansion tank</strong> — absorbs the water's growth when heated (Section 3).</li>
<li><strong>Pressure-reducing (fill) valve</strong> — admits domestic water to set and maintain the system's cold fill pressure automatically.</li>
<li><strong>Pressure relief valve</strong> — the last-resort safety, typically rated 30 psi on residential boilers, that dumps water if pressure runs away.</li>
<li><strong>Air separator and vents</strong> — strip air out of circulation and release it (Section 4).</li>
<li><strong>Backflow preventer</strong> — keeps boiler water out of the drinking water.</li>
<li><strong>Aquastat</strong> — the boiler's temperature control: high limit (safety ceiling) and operating control in one family of devices.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> A hydronic system is plumbing that must survive being a pressure vessel, a pump circuit, and a chemistry experiment simultaneously. Every accessory exists because water expands, corrodes, carries air, and obeys pressure — learn the accessories as answers to those four facts.</div>`
    },
    {
      heading: "The Universal Hydronics Formula",
      html: `
<p>Nearly every hydronic calculation you'll do at this level runs through one relationship — how much heat a stream of water carries:</p>
<div class="formula">Btu/h = GPM × 500 × ΔT &nbsp;&nbsp;•&nbsp;&nbsp; GPM = Btu/h ÷ (500 × ΔT)</div>
<p>The 500 is not magic: it is water's weight (8.33 lb per gallon) × 60 minutes × water's specific heat (1 Btu/lb·°F) ≈ 500. ΔT is the temperature drop across whatever you're evaluating — boiler, zone, or radiator.</p>
<p><strong>Worked example 1 — delivered heat.</strong> A zone circulates 6 GPM and returns water 20°F cooler than it left: delivered heat = 6 × 500 × 20 = <strong>60,000 Btu/h</strong>.</p>
<p><strong>Worked example 2 — required flow.</strong> A boiler must deliver 80,000 Btu/h designed around a 20°F ΔT: GPM = 80,000 ÷ (500 × 20) = <strong>8 GPM</strong>. Note the design lever: choose a bigger design ΔT and the same heat rides on less flow (smaller pipes/pump energy); choose a smaller ΔT and flow climbs. The customary design ΔT for baseboard systems is 20°F, but it is a <em>choice</em>, not a law.</p>
<p>Diagnostic use: measure supply and return temperatures on a running zone, estimate or measure flow, and you know delivered heat — the hydronic twin of Module 8's temperature-rise method. A boiler short-cycling with a tiny ΔT is moving heat faster than the zones can shed it; a zone with an enormous ΔT is flow-starved (air, a failing circulator, a choked valve). Numbers first, wrenches second.</p>
<div class="callout"><strong>Key idea:</strong> GPM × 500 × ΔT = Btu/h. With any two, you get the third — and with the third, you get a diagnosis instead of an opinion.</div>`
    },
    {
      heading: "Pressure, Fill, and the Expansion Tank",
      html: `
<p>A closed loop is filled cold to a pressure that guarantees the top of the system stays full of water. Pressure comes from <strong>static head</strong>: water weighs 0.433 psi per vertical foot. A two-story system with radiation 18 feet above the boiler needs at least 18 × 0.433 ≈ 7.8 psi just to stand water at the top; add a working margin and the familiar <strong>cold fill around 12 psi</strong> appears — enough head for roughly 25+ feet of building with margin, which is why 12 psi is the standard starting point for typical houses (taller buildings need more, by the same arithmetic).</p>
<p>Then the burner fires and physics bills arrive: water expands as it heats, and in a sealed loop 'expands' means 'pressure climbs' — steeply, because water barely compresses. The <strong>expansion tank</strong> is the loop's lung, accepting the extra volume against an air cushion:</p>
<ul>
<li><strong>Diaphragm tank:</strong> a rubber membrane separates system water from a factory air charge (pre-charged to match the fill pressure). The membrane keeps air out of the water permanently. If the diaphragm fails or the air charge is lost, the tank waterlogs.</li>
<li><strong>Plain steel (compression) tank:</strong> air and water touch in one vessel, usually mounted high in older systems. Over time the water absorbs the air cushion; the tank <strong>waterlogs</strong> and must be drained/recharged with air as maintenance.</li>
</ul>
<p><strong>Waterlogged-tank signature</strong>: the relief valve (30 psi typical) weeps or pops on every hot cycle, pressure swings wildly between cold and hot gauges, and the tank sounds solid-full when tapped. The logic is airtight: no air cushion → no room to expand → pressure spikes to the relief setting. Also know the tank's plumbing address: the tank connection is the <strong>point of no pressure change</strong> — the one spot where the circulator can't alter pressure — and good design <strong>pumps away</strong> from that point so the circulator adds its pressure to the system rather than subtracting at the top floor.</p>
<div class="callout"><strong>Key idea:</strong> Fill pressure is set by building height (0.433 psi/ft + margin ≈ 12 psi typical); hot pressure is managed by the tank's air cushion. Relief valve weeping on every firing is the tank confessing it has no cushion left.</div>`
    },
    {
      heading: "Air: The Enemy Inside",
      html: `
<p>Fresh fill water carries dissolved air; heating drives it out of solution (warm water holds less gas), and it collects exactly where it can do the most harm: at high points, inside radiators and baseboard, and at the circulator. Air's symptoms are a diagnostic dialect of their own:</p>
<ul>
<li><strong>Gurgling and waterfall noises</strong> in pipes and radiation.</li>
<li><strong>Cold tops on radiators/baseboard</strong> — the element is full of air where hot water should be.</li>
<li><strong>A zone that won't circulate at all</strong> — an air lock can stop flow outright, especially after service.</li>
<li><strong>Corrosion</strong> — oxygen in the system water eats steel and cast iron from inside; chronic air problems are also chronic rust problems.</li>
</ul>
<p>Elimination strategy is layered: an <strong>air separator</strong> in the main line near the boiler (often at the expansion tank connection, where pressure and temperature favor release) coalesces microbubbles; <strong>automatic air vents</strong> release collected air at the separator and at high points; <strong>manual bleed valves</strong> on radiators/baseboard let the technician purge each element during commissioning and after repairs. The routine after any loop-opening service: refill, pressurize, vent at the separator and each high point/radiator, run the circulators, vent again — air leaves in installments, and 'bled once' is rarely 'bled.'</p>
<p>Distinguish air noise from its imitators: a system can also gurgle from low pressure (top floor starved) or a failing circulator. Pressure gauge first (is the fill right?), bleed test second (does air actually come out?), circulator amp/flow evidence third.</p>
<div class="callout"><strong>Key idea:</strong> Air rises, collects high, blocks flow, makes noise, and feeds corrosion. The system's design assumes you'll remove it — at fill, after service, and whenever the symptoms speak up.</div>`
    },
    {
      heading: "Piping Arrangements and Zoning",
      html: `
<p>How the loop is piped decides comfort and controllability:</p>
<ul>
<li><strong>Series loop:</strong> one pipe threads every terminal unit in order. Simple and cheap; the water cools unit by unit (design uses the 500-formula along the loop), and there's no per-room control — the whole loop is one zone.</li>
<li><strong>One-pipe system with diverter (venturi) tees:</strong> a main loop runs continuously; special tees at each unit divert a portion of flow up through the radiator and back. Units can have individual valves, but flow shares the main's personality.</li>
<li><strong>Two-pipe systems:</strong> separate supply and return mains; every unit sees nearly full-temperature water. In <em>direct-return</em>, the first unit supplied is first returned (unequal path lengths, balancing matters); in <em>reverse-return</em>, paths self-balance better. This is the modern quality arrangement.</li>
<li><strong>Primary-secondary piping:</strong> a closely-spaced-tee arrangement decoupling the boiler loop from distribution loops so each circulator minds its own flow — standard practice with modern boilers whose flow needs differ from the zones'.</li>
</ul>
<p><strong>Zoning</strong> — dividing the building into independently controlled areas — is achieved two ways:</p>
<ul>
<li><strong>Zone circulators:</strong> one pump per zone, with check protection (flow-check valves or integral checks) so idle zones don't steal flow or gravity-circulate. Advantages: a dead pump kills one zone, not the house.</li>
<li><strong>Zone valves:</strong> one shared circulator; motorized valves open per zone, and an <strong>end switch</strong> in the valve proves it's open and calls the boiler/circulator — the boiler never fires against all-closed valves. Advantages: one pump to maintain; the end-switch chain is the classic no-heat logic puzzle (a valve can be open with a dead end switch: water path fine, call never completed).</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Piping sets the ceiling on comfort; zoning decides how much of that ceiling each room can use. Diagnose zone calls by asking first: is this a water problem (flow shared by all) or a control problem (one zone's valve/pump/end-switch story)?</div>`
    }
  ],
  keyTerms: [
    { term: "Boiler (hydronic)", def: "The vessel that heats loop water; in hydronics it heats water without boiling it." },
    { term: "Circulator", def: "The wet-rotor centrifugal pump that moves loop water; sized for required GPM against system head." },
    { term: "Terminal unit", def: "The heat emitter in the room: baseboard, radiator, radiant loop, or fan coil." },
    { term: "Universal hydronics formula", def: "Btu/h = GPM × 500 × ΔT (for water); rearranged to solve for flow or ΔT." },
    { term: "Delta T (ΔT)", def: "The temperature drop of the water across a boiler, zone, or emitter." },
    { term: "Static head", def: "Pressure from water's weight: 0.433 psi per vertical foot." },
    { term: "Cold fill pressure", def: "The pressure the loop is filled to when cold — around 12 psi for typical houses (height-driven)." },
    { term: "Pressure-reducing (fill) valve", def: "The automatic valve admitting makeup water to hold fill pressure." },
    { term: "Relief valve", def: "The safety valve that discharges water on over-pressure; typically 30 psi on residential hydronic boilers." },
    { term: "Expansion tank", def: "The vessel whose air cushion absorbs heated water's expansion; diaphragm type or plain steel." },
    { term: "Waterlogged tank", def: "An expansion tank that has lost its air cushion, causing pressure spikes and relief-valve discharge on every firing." },
    { term: "Point of no pressure change", def: "The expansion-tank connection point, where circulator operation cannot change system pressure; circulators should pump away from it." },
    { term: "Air separator", def: "A device in the main that coalesces and vents dissolved air from circulation." },
    { term: "Aquastat", def: "The boiler water-temperature control combining operating and high-limit functions." },
    { term: "Diverter tee", def: "A venturi fitting that diverts part of a one-pipe main's flow through a branch radiator." },
    { term: "Zone valve", def: "A motorized valve controlling one zone's flow; its end switch proves it open and completes the boiler call." },
    { term: "End switch", def: "The auxiliary contact in a zone valve that closes when the valve is fully open." },
    { term: "Primary-secondary piping", def: "Decoupled boiler and distribution loops joined by closely spaced tees so flows don't interfere." },
    { term: "Flow-check valve", def: "A weighted check preventing gravity circulation and backflow through idle zones." }
  ],
  video: {
    title: "How to Diagnose Problems with a Hot Water Heating System | Ask This Old House",
    embedUrl: "https://www.youtube.com/embed/gOZWyZMOASA",
    note: "A field diagnosis of a hot-water system with a dead radiator: circulator, system pressure, expansion tank with its diaphragm, and bleeding air from a radiator — this module's component cast, worked on a real house.",
    more: [
      { title: "How to Wire Zone Valves (Step-by-Step)", url: "https://www.youtube.com/watch?v=2r-37Zxbfks" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A boiler supplies a zone that measures 170°F leaving and 148°F returning, with flow estimated at 7 GPM. Compute the delivered Btu/h. The zone's heat loss on this design day is 90,000 Btu/h. Is the zone keeping up? If the flow were raised to 10 GPM at the same temperatures, what happens?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: ΔT = 170 − 148 = 22°F. Step 2: Delivered = 7 × 500 × 22 = 77,000 Btu/h. Step 3: Against a 90,000 Btu/h loss, the zone is delivering about 86% of need — on a true design day the room will drift below setpoint; the system 'almost' heats, which matches the classic complaint. Step 4: At 10 GPM with the same ΔT, delivery = 10 × 500 × 22 = 110,000 Btu/h — but note the physics: raising flow usually <em>narrows</em> ΔT (water spends less time giving up heat per pass), so real delivery lands between the estimates; the formula applied to <em>measured</em> values after the change gives the truth. Step 5: Practical responses: verify the ΔT/flow are as designed (air? circulator speed? partially closed valve?), and confirm boiler output can support the total load — the formula tells you where the gap lives.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A three-story house has its highest radiator 26 feet above the boiler. (a) Compute the minimum cold fill pressure to keep the top radiator full, and recommend a fill setting with margin. (b) Explain why 'just fill it to 25 psi to be safe' is bad advice in a system with a 30 psi relief valve.</p>",
      solution: "<p><strong>Answer:</strong> (a) Static head = 26 × 0.433 ≈ 11.3 psi. That is the bare minimum to stand water at the top with zero margin — any small leak or air venting drops the top dry. Recommended fill ≈ 11.3 + ~4 psi margin ≈ 15–16 psi cold (and the expansion tank's air pre-charge should match the fill pressure). (b) At 25 psi cold, normal heating expansion adds several more psi of rise; the system will ride at or over the 30 psi relief setting on every hot cycle — weeping water, losing pressure, refilling with fresh (oxygenated, mineral-bearing) water, and corroding from inside, while masking the gauge evidence you need. Fill pressure is an arithmetic answer (height × 0.433 + margin), not a courage contest.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Every firing cycle ends with a spurt of water from the relief valve discharge pipe, and the pressure gauge reads 12 psi cold but 30 psi hot. Diagnose the most probable cause and give the two tank tests that confirm it (one for a diaphragm tank, one description for a plain steel tank).</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The signature — normal cold pressure, runaway hot pressure, relief discharge every cycle — is the waterlogged expansion tank: the air cushion that should absorb expansion is gone, so heated water's growth goes straight into pressure. Step 2: Diaphragm tank test: with the system isolated/depressurized per procedure, check the tank's air charge at its Schrader valve against the fill pressure — a missing/low charge, or water spurting from the air valve (failed diaphragm), confirms it. A tank that feels uniformly hot and sounds solid (dull thunk) when tapped supports it. Step 3: Plain steel tank: it will be full of water to the top with no air space — draining the tank down to re-establish the air level (per standard service procedure) is both test and temporary cure; if it waterlogs again quickly, look for how air is being lost/absorbed. Step 4: Also verify the relief valve reseats after service — repeated discharge can foul its seat with debris, turning one fault into two.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> After a circulator replacement, the upstairs zone gurgles and its baseboards are hot at the bottom, cold at the top, while downstairs heats fine. Explain the mechanism and the complete service sequence that resolves it.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Opening the loop for the circulator admitted air; on refill, air migrated to the highest zone (upstairs) and collected in the baseboards — hot water fills the bottom of each element while air pockets cap the tops, and moving slugs of air make the gurgling. Downstairs, lower and first-fed, purged itself. Step 2: Sequence: verify cold fill pressure is correct (height math — air can't be pushed out of a system that isn't full); bleed the upstairs elements at their vents until solid water; run the circulator(s); bleed again — air leaves in installments as circulation sweeps pockets loose; check the air separator/automatic vents are functioning (caps not painted shut or closed). Step 3: Verify by measurement: upstairs ΔT and surface temperatures back in family with downstairs, noises gone through a full cycle. Step 4: Note for the ticket: systems opened for service get a planned purge as part of the job — 'it'll work itself out' is how callbacks are born.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Three zones, one circulator, zone valves. Zone 2's room is cold; its valve is visibly open (manual lever loose, pipe hot past the valve when other zones run is NOT observed — the pipe is cold). Zones 1 and 3 work. Walk the logic: what does a cold pipe past an 'open' zone valve tell you, and which two suspects remain?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: If the valve were truly open and the circulator running (it is, for zones 1 and 3), hot water would reach Zone 2's pipe. A cold pipe says no flow is actually passing. Step 2: Suspect 1 — the valve is not actually open internally: the motor may have driven the indicator while the internal mechanism/ball is stuck or the motor head turns without moving the gate (failed valve head). Test: manual lever behavior, remove the head and check the stem movement/valve body per design. Step 3: Suspect 2 — the zone is air-locked or blocked: an air slug at the zone's high point stops flow through an honestly open valve (bleed the zone); a closed service valve or debris is the variant. Step 4: Note what is NOT suspect: the end switch — its failure mode is the opposite (valve opens, boiler never called: cold because nothing fired <em>for that zone</em>, but here the boiler fires for others and Zone 2 still gets nothing). Pipe temperature along the zone is the flow witness — believe it over indicators.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Design-flow problem: a new zone must deliver 45,000 Btu/h. The designer wants a 20°F ΔT. (a) Compute required GPM. (b) The installed circulator/valve combination actually delivers 3 GPM in that zone. If supply temperature is unchanged at 180°F, estimate the return temperature and state one consequence for the emitters' output per pass.</p>",
      solution: "<p><strong>Answer:</strong> (a) GPM = 45,000 ÷ (500 × 20) = 4.5 GPM required. (b) With only 3 GPM carrying the same load attempt, the water must give up more per pass: ΔT = 45,000 ÷ (500 × 3) = 30°F, so return ≈ 180 − 30 = 150°F. Step: consequence — the <em>average</em> water temperature in the emitters falls (roughly (180+150)/2 = 165°F versus the designed (180+160)/2 = 170°F), and emitter output falls with average temperature, so the zone under-delivers even though the boiler is hot — the room sees tepid baseboards late in the run. Step: the fix is flow (pump speed/valve/balance), not a hotter boiler: raising supply temperature to compensate punishes efficiency (and on condensing boilers can kill condensing entirely — Module 4's physics).</p>"
    }
  ],
  quiz: [
    {
      q: "Using the universal hydronics formula, a zone flowing 5 GPM with a 20°F ΔT delivers:",
      choices: ["10,000 Btu/h", "50,000 Btu/h", "25,000 Btu/h", "100,000 Btu/h"],
      answer: 1,
      explanation: "Correct: (b) 5 × 500 × 20 = 50,000 Btu/h. (a) omits the 500 constant's full effect (5 × 20 × 100). (c) halves the constant (250) — the constant for water is 500 (8.33 lb/gal × 60 min × specific heat 1). (d) doubles the ΔT — arithmetic drift the formula's structure (GPM × 500 × ΔT) prevents when applied carefully."
    },
    {
      q: "A typical residential hydronic system is cold-filled to about 12 psi primarily because:",
      choices: ["The relief valve requires 12 psi to seat", "That pressure supports a column of water tall enough to keep a typical house's highest radiation full, with margin (0.433 psi per foot)", "Circulators need 12 psi to prime", "Boilers are factory-tested at 12 psi"],
      answer: 1,
      explanation: "Correct: (b) Fill pressure is static-head arithmetic: ~12 psi stands water ~27 feet high — a typical two-story house plus margin. (a) Relief valves seat across a range; 12 psi is not a seating requirement (and the relief is rated ~30 psi). (c) Circulators in a filled, pressurized closed loop don't need a prime pressure. (d) Factory testing is a different, higher-pressure matter and doesn't set field fill."
    },
    {
      q: "Relief-valve discharge on every firing cycle, with normal cold pressure, most likely indicates:",
      choices: ["A failed relief valve spring", "A waterlogged expansion tank — no air cushion, so expansion spikes pressure to the relief setting", "An oversized circulator", "A thermostat calling too often"],
      answer: 1,
      explanation: "Correct: (b) Cold pressure fine + hot pressure runaway = nowhere for expanded water to go; the tank's cushion is gone. (a) A weak relief spring discharges at its (lowered) pressure but doesn't explain pressure climbing that high in the first place — and it would weep at hot pressures the gauge would call normal. (c) Circulator pressure adds a few psi locally, not a system-wide trip to 30 psi every cycle. (d) Call frequency doesn't change expansion physics per cycle."
    },
    {
      q: "The 'point of no pressure change' is:",
      choices: ["The boiler's pressure gauge location", "The expansion tank's connection point — where the circulator cannot change the pressure; circulators should pump away from it", "The highest radiator in the system", "The relief valve outlet"],
      answer: 1,
      explanation: "Correct: (b) At the tank connection, the tank's cushion fixes pressure; pumping away from that point makes the circulator add pressure to the distribution, keeping high points safely pressurized. (a) The gauge just reports pressure wherever it taps. (c) The highest radiator is where pressure is lowest and air collects — a consequence, not the definition. (d) The relief outlet is a discharge path, not a pressure reference point."
    },
    {
      q: "Baseboards hot at the bottom and cold at the top, with gurgling, after the loop was opened for service, indicate:",
      choices: ["A failed circulator", "Air collected in the elements; purge/bleed the zone (in installments) at correct fill pressure", "A waterlogged tank", "Reverse flow through the zone"],
      answer: 1,
      explanation: "Correct: (b) Air rises to cap the elements; service admitted it, and systematic bleeding at proper pressure removes it. (a) A failed circulator would cool the whole zone (bottom included) and usually others besides. (c) Tank waterlogging speaks in pressure spikes and relief discharge, not gurgles and half-hot elements. (d) Reversed flow still fills elements with water — it changes temperature patterns by loop order, not top-versus-bottom within one element."
    },
    {
      q: "In a zone-valve system, the end switch's job is to:",
      choices: ["Open the valve", "Close only when the valve is fully open, completing the call so the boiler/circulator runs only into an open path", "Regulate the zone's water temperature", "Protect against backflow"],
      answer: 1,
      explanation: "Correct: (b) The end switch is proof-of-open wired to the boiler control: valve motors open on the thermostat's call; the end switch then authorizes firing — its failure leaves an open valve and a boiler that never hears the call. (a) The valve's motor opens it; the end switch only reports. (c) Zone valves are on/off devices; temperature regulation belongs to the aquastat and thermostat. (d) Backflow protection in zoning is by check/flow-check valves, not the end switch."
    },
    {
      q: "A plain-steel expansion tank differs from a diaphragm tank in that:",
      choices: ["It doesn't need an air cushion", "Air and water touch directly, so the cushion is gradually absorbed and the tank needs periodic draining/recharging", "It is installed outdoors", "It replaces the relief valve"],
      answer: 1,
      explanation: "Correct: (b) With no membrane, system water slowly absorbs the air charge — waterlogging is a maintenance expectation, corrected by draining the tank back to its air level. (a) Both types live or die by their air cushion. (c) Location is by piping convenience, typically high in the building — indoors. (d) No tank replaces the relief valve; they answer different failure modes (normal expansion vs runaway pressure)."
    },
    {
      q: "A zone designed for 4.5 GPM is measured at 3 GPM with unchanged supply temperature. The expected result is:",
      choices: ["A wider ΔT across the zone and lower average emitter temperature, so the zone under-delivers", "A narrower ΔT and overheating", "Exactly the same delivery — flow doesn't matter", "Boiler damage from excess flow"],
      answer: 0,
      explanation: "Correct: (a) With less flow carrying similar load, each pass gives up more heat (wider ΔT), average water temperature in the emitters falls, and emitter output falls with it. (b) Narrower ΔT accompanies excess flow, not starved flow. (c) Flow is one of the three factors in the universal formula — it is the delivery. (d) The problem here is too little flow, not excess, and boilers are protected by their own controls in either case."
    }
  ],
  studyGuide: `
<h3>Module 9 — Hydronic Heating: Quick Reference</h3>
<p><strong>The loop:</strong> boiler → circulator → piping → terminal units → back. Closed system; accessories answer water's four behaviors: it expands (tank), carries air (separator/vents), eats metal (chemistry/air control), and obeys pressure (fill + relief).</p>
<p><strong>Formula:</strong> Btu/h = GPM × 500 × ΔT. GPM = Btu/h ÷ (500 × ΔT). Wide ΔT = flow-starved; tiny ΔT with short-cycling = heat moving faster than zones shed it.</p>
<p><strong>Pressure:</strong> static head 0.433 psi/ft. Cold fill ≈ (height × 0.433) + margin ≈ 12 psi typical house. Relief typically 30 psi. Tank air pre-charge = fill pressure.</p>
<p><strong>Waterlogged tank:</strong> cold pressure OK, hot pressure spikes, relief weeps every cycle. Diaphragm: check Schrader charge (isolate first); water from the air valve = failed diaphragm. Steel tank: drain to restore air level.</p>
<p><strong>Air:</strong> gurgles, cold element tops, locked zones, corrosion. Purge after any opening: fill → bleed high points/elements → run → bleed again.</p>
<p><strong>Zoning:</strong> circulator-per-zone (check valves guard idle zones) or zone valves + end switch (open valve + dead end switch = no call; 'open' valve + cold pipe = no actual flow: stuck valve or air lock).</p>
<p><strong>Piping:</strong> series loop (one zone, cooling along the run), one-pipe diverter-tee, two-pipe (direct/reverse return), primary-secondary for modern boilers.</p>
`
};
