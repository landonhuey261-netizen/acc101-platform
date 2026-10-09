// HVAC 132 - Module 8: Electric Heat & Sequencers
module.exports = {
  number: 8,
  slug: "electric-heat-sequencers",
  title: "Electric Heat & Sequencers",
  estTime: "3–4 hours",
  objectives: [
    "Explain resistance heating and convert between kilowatts, Btu/h, amps, and volts for electric heat.",
    "Describe the heating element assembly: nichrome coil, insulators, fusible link, and limit protection per bank.",
    "Explain how a sequencer stages elements and the blower with timed contacts, and why staging exists (inrush, comfort, and electrical capacity).",
    "State the blower interlock rule — airflow proven/established with element operation — and what limit behavior reveals about airflow.",
    "Diagnose the classic electric-heat faults: dead bank, stuck sequencer contact, open fusible link, and sagging element.",
    "Verify electric heat output with temperature-rise and amp-draw measurements instead of guessing."
  ],
  sections: [
    {
      heading: "Resistance Heat: Simple Physics, Serious Amperage",
      html: `
<p>Electric resistance heat is the most direct heating technology in this course: current forced through a resistive element converts electrical energy to heat with essentially 100% efficiency <em>at the element</em> — every watt becomes heat in the airstream. The element is typically a <strong>nichrome</strong> coil (nickel-chromium wire) supported on ceramic insulators inside an open frame, mounted in the air handler or furnace plenum in banks, commonly 5 kW or so per bank, staged to reach total capacities like 10, 15, or 20 kW.</p>
<p>The conversions you will use weekly:</p>
<div class="formula">1 kW = 3,412 Btu/h &nbsp;•&nbsp; Watts = Volts × Amps &nbsp;•&nbsp; Amps = Watts ÷ Volts</div>
<p><strong>Worked example.</strong> A 15 kW air handler on 240 V: output = 15 × 3,412 = <strong>51,180 Btu/h</strong>. Current = 15,000 W ÷ 240 V = <strong>62.5 A</strong> for the heat alone (plus blower amps) — which is why electric furnaces have fat feeders, often multiple branch circuits, and why a 'warm but not hot' complaint can be a one-bank-out problem: one 5 kW bank down out of three costs a third of capacity and about 21 A of expected draw. Electric heat diagnosis is arithmetic with a clamp meter: expected amps per bank, measured amps per bank, compare.</p>
<p>No combustion means no flue, no CO from the heater itself, no venting categories — the hazards relocate to the electrical side: high sustained currents, hot elements that must never run without airflow, and connections that loosen and cook over years of thermal cycling. Respect transfers; it doesn't retire.</p>
<div class="callout"><strong>Key idea:</strong> Electric heat is perfectly efficient at the coil and perfectly unforgiving of sloppy electrical work. Think in amps: every bank has an expected draw, and measuring draw is measuring delivered heat.</div>`
    },
    {
      heading: "Elements, Fusible Links, and Limits",
      html: `
<p>Each element bank carries its own layered protection, and knowing the layers is knowing the diagnosis:</p>
<ul>
<li><strong>The element coil</strong> itself: fails open (burned through — often visibly sagging, blistered, or broken) or, more dangerously, sags until it touches its frame or a neighboring coil and shorts.</li>
<li><strong>Fusible link</strong>: a one-time thermal fuse in series with the element that melts open permanently if the element area overheats — the last-ditch protector. A fusible link never 'trips and resets'; an open one means the element overheated at some point, and replacing the link without finding the overheating cause installs the next failure.</li>
<li><strong>Automatic limit switch</strong>: a bimetal disc that opens on over-temperature and resets when cool — the cycling protector that handles transient airflow losses, exactly analogous to the gas furnace limit (Module 5).</li>
</ul>
<p>The causal arrow nearly always points the same way: <strong>elements overheat because airflow failed them</strong> — clogged filter, collapsed duct, blower running slow or off, closed registers — or because the element stayed energized when it shouldn't (stuck sequencer, Section 3). Heat is patient: a bank can cycle on its limit for a season, cooking its insulators and connections, before the fusible link or the element itself gives up. So an open fusible link is a question, not an answer: <em>what made this bank hot enough to melt its fuse?</em></p>
<div class="callout"><strong>Key idea:</strong> Protection layers testify in order — limit cycling is the early warning, fusible link is the obituary. Read the testimony before replacing parts: airflow first, control second, element last.</div>`
    },
    {
      heading: "Sequencers: Staging Time Itself",
      html: `
<p>Energizing 20 kW of elements in one instant would slam the electrical service with the full load at once, blink every light in the house, and stress the utility connection and the equipment. Instead, a <strong>sequencer</strong> brings the heat on in stages. The classic sequencer is a heat-activated switch stack: a small 24 V heater coil warms a bimetal mechanism that closes contacts one after another at engineered intervals — first contact quickly (first element bank, and typically the blower), later contacts after additional delays (second bank, third bank). When the call ends, the contacts open in reverse-ish order with similar delays, letting the blower scavenge the residual heat.</p>
<p>Sequencer facts for the field:</p>
<ul>
<li>Contacts are rated for element current — they are real power switches, and they fail by welding shut (bank never turns off) or by burning open (bank never turns on), as well as by the heater coil failing (nothing stages at all).</li>
<li>Timing is fixed by the sequencer's design (its rating lists the on/off delay ranges); a sequencer that stages instantly or never is replaced, not adjusted.</li>
<li>The blower is interlocked through the sequence: blower comes on with (or just before/at) the first bank and stays after the last bank drops, so elements never sit energized in still air by design.</li>
<li>Modern air handlers may replace the stack with relays/electronic boards doing the same logic — the diagnostic concept (which stage, commanded or not, conducting or not) is identical.</li>
</ul>
<p><strong>Symptom signatures.</strong> House heats but electric bills explode, or heat runs with the thermostat satisfied: a welded sequencer contact keeping a bank live — verify with a clamp meter on a 'no-call' unit. Lukewarm air and long runs: a stage never closing, or an open element/link behind a good contact — separate command (24 V heater, contact closure) from conduction (amps at the element). One bank's behavior out of family is always a local story; all banks dead is a supply/control story.</p>
<div class="callout"><strong>Key idea:</strong> The sequencer is a clock made of switches. Diagnose it as a clock: does it get its signal (24 V heater), do its contacts close in order (continuity/voltage drop), and does current actually flow to each bank (clamp meter)?</div>`
    },
    {
      heading: "The Blower Interlock and What Limits Confess",
      html: `
<p>The cardinal rule of electric heat: <strong>elements and airflow are one system</strong>. An element bank glowing in still air reaches destructive temperature in moments, so designs interlock the blower with the heat call — through the sequencer's first contact or a dedicated relay — and protect the failure with limits and fusible links anyway. When you find evidence of limit cycling (a customer says 'the heat cuts in and out,' or you watch supply temperature sawtooth), translate it immediately: <em>the elements are being energized faster than air can carry heat away.</em> Then work the airflow list before the element list:</p>
<ol>
<li>Filter and return path — the cheapest, commonest chokers.</li>
<li>Blower performance — wheel fouling, failing motor/capacitor, wrong speed tap for heat mode.</li>
<li>Supply restrictions — closed/crushed registers and ducts.</li>
<li>Only then: an over-energized bank (two banks where the stage should have one, a miswired replacement) making more heat than design airflow.</li>
</ol>
<p>The mirror-image fault is equally instructive: airflow without heat (blower runs, elements cold) sends you to the control chain — thermostat W, sequencer heater coil, contact closure, element continuity, links. Two halves of one interlock; the symptom tells you which half broke.</p>
<div class="callout"><strong>Key idea:</strong> Limit trips on electric heat are airflow confessions. Fix the air, and the limits go quiet; replace the limits, and they'll confess again on schedule.</div>`
    },
    {
      heading: "Verifying Output: Temperature Rise and Amps",
      html: `
<p>Electric heat offers the cleanest capacity verification in the business because input is directly measurable. Two checks, used together:</p>
<p><strong>1. Amp draw per bank.</strong> Clamp each bank's feed with all stages commanded on: expected amps = bank watts ÷ applied volts (measure the actual voltage — a 240 V-rated bank on a 208 V service delivers only (208/240)² ≈ 75% of its nameplate heat, a classic 'weak heat' discovery in commercial buildings). Zero amps on a commanded bank = open element, open link, or open contact — test in that chain order. Full amps on an uncommanded bank = welded contact.</p>
<p><strong>2. Temperature-rise method.</strong> With the heat fully staged and airflow steady, measure return-air and supply-air temperatures (away from direct element radiant view) and compute:</p>
<div class="formula">Temperature rise = supply temperature − return temperature</div>
<p>Compare with the nameplate's rated rise range for that configuration: <strong>within range</strong> = heat and airflow in design balance; <strong>rise above range</strong> = too much heat for the airflow (or airflow too low — Section 4's confession); <strong>rise below range</strong> = heat missing (bank out) or airflow excessive. The nameplate-range method — measured against the manufacturer's printed range for the unit in front of you — is the professional standard precisely because it needs no invented 'typical' values: the appliance carries its own specification.</p>
<div class="callout"><strong>Key idea:</strong> Amps tell you heat made; rise tells you heat delivered relative to air. Together they separate 'bank out' from 'air wrong' in one visit — the whole of electric-heat diagnosis in two measurements.</div>`
    }
  ],
  keyTerms: [
    { term: "Resistance heating", def: "Heat produced by current through a resistive element; at the element, essentially all electrical energy becomes heat." },
    { term: "Nichrome", def: "Nickel-chromium alloy used for heating element coils for its high resistivity and oxidation resistance at red heat." },
    { term: "Kilowatt (kW)", def: "1,000 watts; 1 kW of resistance heat = 3,412 Btu/h." },
    { term: "Element bank", def: "A group of heating elements (commonly ~5 kW) switched together as one stage." },
    { term: "Sequencer", def: "A heat-activated (or electronic) staging control that closes contacts in timed order to bring element banks and the blower on in sequence." },
    { term: "Fusible link", def: "A one-time thermal fuse in series with an element that melts open permanently on over-temperature." },
    { term: "Limit switch (electric heat)", def: "An auto-reset bimetal control that opens the element circuit on over-temperature, typically from low airflow." },
    { term: "Blower interlock", def: "The control arrangement ensuring the blower runs whenever elements are energized, and briefly after." },
    { term: "Staging", def: "Bringing capacity online in steps rather than all at once, limiting inrush and improving control." },
    { term: "Welded contact", def: "A switch contact fused shut by arcing/overload, leaving its load energized regardless of command." },
    { term: "Temperature rise", def: "Supply-air temperature minus return-air temperature across the heater; compared against the nameplate rated range." },
    { term: "Amp draw", def: "The current a bank actually draws, measured with a clamp meter; proportional to delivered heat at a given voltage." },
    { term: "208 V derate", def: "The output reduction when 240 V-rated elements run on 208 V: heat falls with the square of the voltage ratio (~75%)." },
    { term: "Heat anticipator / staging thermostat", def: "Thermostat logic (historically a small heater; now electronic) that may command second-stage heat on long calls." },
    { term: "Auxiliary heat", def: "Electric resistance heat supplementing a heat pump — the same banks and sequencers, commanded by the heat pump control." },
    { term: "Inrush (demand surge)", def: "The instantaneous load step when large resistance banks energize simultaneously; what staging avoids." },
    { term: "Element sag", def: "Heat-softened coil deformation that can short the element to its frame or a neighboring coil." },
    { term: "Open element", def: "A coil burned through, breaking the circuit; diagnosed by continuity and zero amp draw." }
  ],
  video: {
    title: "HVAC Temp Rise Formula used to Measure Airflow",
    embedUrl: "https://www.youtube.com/embed/agAfV3Yqb7U",
    note: "AC Service Tech demonstrates temperature measurements across running equipment — the same return/supply method this module uses to verify electric heat against the nameplate rise range. (No sequencer-specific video in our verified pool matched this module, so this measurement-focused video stands in; the sequencer itself is covered in the lecture text.)",
    more: [
      { title: "HVAC Delta T Explained!", url: "https://www.youtube.com/watch?v=9lDl5cfFSzs" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> An electric furnace is rated 20 kW at 240 V. (a) Compute its output in Btu/h. (b) Compute the total element current at 240 V. (c) The building actually supplies 208 V. Using the square-of-voltage-ratio rule, estimate the delivered kW and Btu/h at 208 V, and the customer complaint this produces.</p>",
      solution: "<p><strong>Answer:</strong> (a) 20 × 3,412 = 68,240 Btu/h. (b) Amps = 20,000 ÷ 240 ≈ 83.3 A. (c) Ratio = 208 ÷ 240 ≈ 0.867; squared ≈ 0.751. Delivered ≈ 20 × 0.751 ≈ 15.0 kW ≈ 51,250 Btu/h — a 25% capacity loss with nothing 'broken.' Complaint: the furnace runs constantly on cold days and the house still drifts below setpoint — a capacity complaint, not a failure complaint. Step: verify actual supply voltage before condemning any component, and check the nameplate — equipment specified for the building's voltage avoids the derate entirely.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A 15 kW (three 5 kW banks) air handler draws the following with all stages commanded: Bank 1 = 20.8 A, Bank 2 = 0 A, Bank 3 = 20.8 A (at 240 V). (a) Verify Bank 1's expected draw. (b) List Bank 2's fault chain in test order and the measurement that clears each link.</p>",
      solution: "<p><strong>Answer:</strong> (a) Expected per bank: 5,000 ÷ 240 ≈ 20.8 A — Bank 1 (and 3) are perfect; the controls and supply are healthy. (b) Bank 2 chain, in order: (1) Sequencer contact for stage 2 — is it closing when commanded? (voltage across the open contact falls to ~0 when closed; if line voltage remains across it during command, the contact never closed → sequencer stage fault). (2) Fusible link in series with Bank 2 — power off, continuity: open link = replaced bank protection, and ask why it overheated. (3) The element itself — continuity/resistance: an open coil reads infinite; a good coil reads its design resistance (R = V² ÷ W = 240² ÷ 5,000 ≈ 11.5 Ω). Step: stop at the first open link in the chain; that's the repair — plus the airflow question if the link is the open one.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A homeowner's complaint: 'The heat seems to run even after the thermostat is satisfied, and our winter bills are the highest on the street.' Your clamp meter shows 20.8 A on Bank 1 with NO call for heat. Diagnose, explain the sequencer failure mode, and describe the safety exposure if it had been Bank-all-stages instead of one.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Current with no call means something is conducting without command — the classic welded sequencer contact: arcing over years fused the contact shut, so Bank 1 is wired to the line permanently. Step 2: The thermostat satisfies, the sequencer coil cools, healthy contacts open — but Bank 1 keeps heating until its own limit cycles it, holding the house warm and the meter spinning; the blower may or may not run with it depending on which contact welded, which is the exposure. Step 3: Exposure analysis: a single bank with blower interlock intact usually ends as a money complaint; an energized bank <em>without</em> airflow leans entirely on limits and fusible links for survival — exactly the overheating chain of Section 2, with fire risk at the end of it. Step 4: Repair: replace the sequencer (contacts are not serviced), verify zero draw at no-call, verify staging order and timing, and inspect Bank 1's connections and insulators for heat damage from its long unauthorized run.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Supply air measures 138°F, return air 70°F, on a unit whose nameplate rates its rise range as 45–65°F at the installed configuration. Compute the rise, judge it, and give the two most likely cause families with one confirming measurement for each.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Rise = 138 − 70 = 68°F — above the 45–65°F rated range: too much heat per unit of air. Step 2: Cause family A — airflow too low: dirty filter, fouled blower wheel, failing blower, closed/crushed ducts. Confirm: inspect filter and wheel; measure blower amps/speed and static pressure where equipped; watch the rise fall as airflow is restored. Step 3: Cause family B — heat too high for the design configuration: a bank energized that shouldn't be at this stage (miswired stage or welded contact adding uncommanded kW), or elements replaced with higher-wattage parts. Confirm: clamp every bank during a first-stage-only call — any bank drawing that isn't commanded is the confession. Step 4: Do not 'solve' a high rise by accepting it: chronic over-range rise is limit cycling, element cooking, and (on fossil siblings) exchanger stress — the range on the plate is a specification, not a mood.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Explain the sequencer's thermal staging mechanism and why its contacts close at intervals rather than simultaneously. Include what physically moves inside the device.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Inside the classic sequencer, the thermostat's call energizes a small 24 V heater coil wrapped around (or adjacent to) a bimetal element. Step 2: As the heater warms the bimetal, the bimetal warps at its engineered rate and snaps/presses the first set of contacts closed — typically the first bank and the blower circuit. Step 3: Heat continues to build and the mechanism advances: after an additional designed delay, the second contact set closes (bank 2), then the third (bank 3). The delays are properties of the sequencer's rating — different models stage at different intervals. Step 4: On shutdown the coil cools and contacts reopen in sequence, letting the blower outlast the last bank to scavenge heat. Step 5: Why stagger at all: simultaneous energization of 15–20 kW would slam the service with the whole load in one step (voltage sag, light flicker, breaker stress) and shock cold elements and ducts thermally; staging spreads the step into three polite ones and lets airflow establish before full heat arrives.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> You find a fusible link open on Bank 2 of a furnace whose filter is matted nearly solid. A coworker says, 'Just swap the link — five-minute fix.' Write the correction, the inspection list the link's death obligates, and the verification that closes the job.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Correction — a fusible link is a <em>witness</em>, not a wear item: it melted because Bank 2 overheated, and the matted filter is standing right there as the airflow cause. A new link in the same airflow dies the same death, possibly after cooking the element. Step 2: Obligated inspections: filter and return path (replace/clear); blower wheel and motor performance; Bank 2's element (sag, blistering, ground contact); its limit switch operation; the sequencer's staging (was Bank 2 held on abnormally?); and the other banks' links and connections for heat distress. Step 3: Repairs as found, link replaced with the exact rated part. Step 4: Verification: full-stage run with amp draw per bank in family (≈20.8 A per 5 kW at 240 V), temperature rise inside the nameplate range, and a watch through several limit-quiet minutes of steady run — the furnace must now be boring to watch. Step 5: Ticket notes the cause chain (filter → airflow → overheat → link), so the next open link on this unit reads as a maintenance failure, not a mystery.</p>"
    }
  ],
  quiz: [
    {
      q: "A 10 kW electric heater on a 240 V supply draws approximately:",
      choices: ["24 A", "41.7 A", "83 A", "10 A"],
      answer: 1,
      explanation: "Correct: (b) Amps = watts ÷ volts = 10,000 ÷ 240 ≈ 41.7 A. (a) 24 A results from swapping the numbers (using ~416 V, which exists in no part of this calculation). (c) 83 A is the draw of a 20 kW load — double the heat in the question. (d) 10 A confuses the kW rating with current — the exact arithmetic slip this module drills against."
    },
    {
      q: "10 kW of resistance heat equals approximately how many Btu/h?",
      choices: ["10,000 Btu/h", "34,120 Btu/h", "3,412 Btu/h", "341,200 Btu/h"],
      answer: 1,
      explanation: "Correct: (b) 10 × 3,412 = 34,120 Btu/h. (a) assumes 1 kW = 1,000 Btu/h — off by a factor of 3.4. (c) is the value for a single kilowatt. (d) multiplies by 34,120 per kW — a decimal slip that would size a house furnace like a shopping mall."
    },
    {
      q: "The sequencer's primary purpose is to:",
      choices: ["Regulate gas pressure in stages", "Bring element banks (and the blower) on in timed stages instead of all at once", "Prove flame before opening the gas valve", "Limit the furnace's maximum temperature"],
      answer: 1,
      explanation: "Correct: (b) The sequencer is a staging clock: contact sets close in sequence to spread the electrical load step and coordinate the blower. (a) Gas pressure staging belongs to two-stage gas valves (Module 5) — electric furnaces have no gas pressure. (c) Flame proving is a combustion function; there is no flame here. (d) Temperature limiting is the limit switch's job; the sequencer sequences, the limit protects."
    },
    {
      q: "An open fusible link on one element bank most directly tells you:",
      choices: ["The sequencer heater coil has failed", "That bank overheated at some point — find the airflow or control cause before replacing the link", "The element is definitely shorted to ground", "The thermostat is miswired"],
      answer: 1,
      explanation: "Correct: (b) Fusible links melt on over-temperature; they are one-time witnesses to an overheating event whose cause (classically airflow loss, or a stuck-on control) must be found. (a) A dead sequencer coil prevents staging but doesn't melt links — if anything it under-heats. (c) A short can follow overheating, but the link testifies to heat, not to the specific electrical failure; the element still needs its own tests. (d) Thermostat wiring faults don't selectively cook one bank's link."
    },
    {
      q: "A bank drawing full amps with NO call for heat indicates:",
      choices: ["A healthy sequencer", "A welded sequencer contact (or stuck relay) keeping the bank energized", "An open fusible link", "Low supply voltage"],
      answer: 1,
      explanation: "Correct: (b) Current without command = a conducting path that ignores the control — a welded contact is the textbook cause. (a) A healthy sequencer opens its contacts when its heater coil cools at call end. (c) An open link produces the opposite symptom: zero amps on a commanded bank. (d) Low voltage reduces draw on commanded banks; it cannot create draw on an uncommanded one."
    },
    {
      q: "Temperature rise measures 72°F on a unit nameplated for a 40–60°F rise range. The reading means:",
      choices: ["Excellent performance — hotter is better", "Too much heat for the airflow (or too little airflow for the heat): investigate airflow and uncommanded banks", "The thermometer is in the wrong units", "The elements are undersized"],
      answer: 1,
      explanation: "Correct: (b) Rise above the rated range is an imbalance verdict: verify airflow (filter, blower, ducts) and clamp banks for uncommanded draw. (a) Over-range rise is limit-cycling territory — it cooks elements and stresses the cabinet, not a bonus. (c) The number is in plausible °F territory and consistent with the method — don't blame the instrument for an inconvenient truth. (d) Undersized elements produce LOW rise, the opposite finding."
    },
    {
      q: "240 V-rated elements supplied with 208 V deliver approximately:",
      choices: ["The same heat — elements self-regulate", "About 75% of rated heat (output follows the square of the voltage ratio)", "About 87% of rated heat", "Half of rated heat"],
      answer: 1,
      explanation: "Correct: (b) (208/240)² ≈ 0.75 — resistance heat obeys P = V²/R, so output falls with voltage squared. (a) Elements are dumb resistors; nothing self-regulates. (c) 87% is the raw voltage ratio (208/240) — the linear answer the square law corrects. (d) Half would correspond to a ratio near 0.71 — not this voltage pair."
    },
    {
      q: "The blower interlock on an electric furnace exists because:",
      choices: ["The blower cools the sequencer", "Elements energized without airflow overheat destructively within moments", "Building codes require the noise", "The thermostat needs airflow to sense temperature"],
      answer: 1,
      explanation: "Correct: (b) A bank in still air has nowhere to put its kilowatts; interlocking airflow with element power — plus limits and links as backup — is the core safety design of electric heat. (a) Sequencers are warmed by their own heater coils by design; blower air is not their coolant plan. (c) Noise is a by-product, never a code goal. (d) Thermostats sense room air at the wall, independent of duct airflow."
    }
  ],
  studyGuide: `
<h3>Module 8 — Electric Heat & Sequencers: Quick Reference</h3>
<p><strong>Math kit:</strong> 1 kW = 3,412 Btu/h. Amps = watts ÷ volts. 5 kW bank @ 240 V ≈ 20.8 A. Coil resistance R = V² ÷ W (≈ 11.5 Ω for 5 kW @ 240 V). 208 V on 240 V elements → ×(208/240)² ≈ 75% output.</p>
<p><strong>Protection layers:</strong> limit switch (auto-reset, cycles on overheat) → fusible link (one-time, melts). An open link = an overheating event happened; find it (airflow first).</p>
<p><strong>Sequencer:</strong> 24 V heater warms bimetal → contacts close in timed order (bank 1 + blower, then banks 2, 3…). Failures: welded shut (amps with no call), burned open (no amps on call), dead heater coil (no staging at all). Replaced, not adjusted.</p>
<p><strong>Interlock:</strong> no airflow + energized elements = destruction in minutes. Limit cycling on electric heat = airflow confession: filter → blower → ducts → only then elements.</p>
<p><strong>Verification:</strong> clamp amps per bank vs expected; temperature rise vs the <strong>nameplate range</strong> (measured supply − return). High rise = air low or heat uncommanded. Low rise = heat missing or air excessive. Measure actual supply voltage before condemning parts.</p>
`
};
