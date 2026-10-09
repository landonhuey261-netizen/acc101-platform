// HVAC 102 - Module 6: Accessories
module.exports = {
  number: 6,
  slug: "refrigeration-accessories",
  title: "Accessories: Receivers, Accumulators, Driers & Controls",
  estTime: "3–4 hours",
  objectives: [
    "Explain the job and correct location of liquid receivers and suction accumulators, and how each protects the system differently.",
    "Select and diagnose filter-driers, including the temperature-drop test for a restricted drier.",
    "Use sight glasses and moisture indicators honestly — what they show and what they cannot prove.",
    "Describe solenoid valves, pump-down control, and crankcase heaters, and the failure each prevents.",
    "Recognize accessory failures (ruptured accumulator, saturated drier, leaking solenoid) from system symptoms."
  ],
  sections: [
    {
      heading: "Receivers and Accumulators: Storage at Two Ends of the Circuit",
      html: `<p>Two vessels, two opposite anxieties. The <strong>liquid receiver</strong> sits on the high side, after the condenser: a storage tank that holds liquid refrigerant not currently needed in circulation. Systems with receivers can tolerate charge variation (long line sets, varying loads, pump-down storage) because the receiver absorbs the surplus — charge a receiver system until the metering device sees a solid liquid seal and subcooling is correct, and let the vessel hold the rest. The receiver is also what makes <strong>pump-down</strong> possible (Section 4): the whole charge can be parked in the condenser + receiver while the low side is serviced.</p><p>The <strong>suction accumulator</strong> sits on the low side, in the suction line just before the compressor: a defensive tank whose job is to catch liquid that escapes the evaporator — during load swings, defrost termination, TXV overshoot — and boil it off gradually, metering liquid and oil back to the compressor at a survivable rate through a small orifice. It exists because compressors cannot compress liquid: a slug can bend reeds, wash bearings, and break a compressor in one event. Heat pumps (whose outdoor coil becomes a cold evaporator fed by a reversing cycle) and low-temperature systems are the classic accumulator applications.</p><p>Confusing the two is a category error students must not make: receiver = high side, stores <em>liquid by design</em>, enables charge tolerance and pump-down. Accumulator = low side, catches <em>liquid by accident</em>, enables compressor survival. Neither is optional decoration where the manufacturer fitted one — removing an accumulator from a system that floods at defrost is scheduling a compressor failure.</p><div class="callout"><strong>Key idea:</strong> Receiver manages surplus liquid on purpose; accumulator manages stray liquid by emergency. Both are storage, but they answer to opposite ends of the circuit and opposite fears.</div>`
    },
    {
      heading: "Filter-Driers: The System's Kidneys",
      html: `<p>The <strong>filter-drier</strong> combines a filter (catch solids: scale, copper chips, brazing debris, sludge) with a <strong>desiccant</strong> core (absorb moisture and, in suction-line cleanup types, acids). Placement follows purpose:</p><ul><li><strong>Liquid-line drier</strong> — in the liquid line before the metering device. Protects the smallest orifices in the system (TXV ports, distributor tubes, cap tubes) from debris and keeps moisture from freezing at the point of expansion. Standard on virtually every field-built system.</li><li><strong>Suction-line drier</strong> — a temporary cleanup device installed after a burnout or major contamination (Module 7), often oversized, sometimes in addition to a liquid-line drier, and removed or replaced once acid tests come back clean — leaving a high-pressure-drop cleanup drier in place permanently taxes the compressor's suction.</li></ul><p><strong>Diagnosis: the temperature-drop test.</strong> A healthy drier passes liquid with essentially no pressure drop, so its inlet and outlet temperatures match. Measure both ends with the same thermometer: a noticeable temperature drop across the drier means it is restricting — the pressure drop flashes a little refrigerant, and the outlet runs colder (sweating or frosting downstream of a liquid-line drier is the same story told visually). A restricted drier starves the metering device and counterfeits TXV failure and undercharge simultaneously (Module 11 exploits this pattern).</p><p><strong>Replacement discipline.</strong> Replace the liquid-line drier <em>every time the sealed system is opened</em> — compressor change, coil change, leak repair. The old drier's desiccant has spent capacity you cannot inspect, and the new drier is the cheapest insurance in the whole repair. Match type to refrigerant and oil (driers are rated for the chemistry they serve) and install in the flow direction marked on the shell.</p><div class="callout"><strong>Key idea:</strong> A drier is a consumable with a silent failure mode. Temperature drop across it = restriction. Opened system = new drier. No exceptions for 'it looked clean.'</div>`
    },
    {
      heading: "Sight Glasses and Moisture Indicators: Small Windows, Honest Limits",
      html: `<p>A <strong>sight glass</strong> in the liquid line lets you watch the refrigerant state just before the metering device. Solid, clear liquid is the desired view. Bubbles suggest flash gas — from low charge, a restriction upstream (including a plugging drier), excessive liquid-line pressure drop or lift, or heat gained by the liquid line. The glass is a symptom display, not a verdict:</p><ul><li>On a <strong>TXV system with a receiver</strong>, charging 'to a clear glass' can badly overcharge in cool weather — the correct method remains subcooling, with the glass as a supporting observation.</li><li>Some refrigerants and oil mixtures normally show slight foam or discoloration cues that alarm beginners; learn the system's normal before diagnosing the abnormal.</li><li>A glass placed <em>after</em> the drier conveniently shows the drier's effect — bubbles appearing only downstream of the drier point at the drier itself.</li></ul><p>Most glasses carry a <strong>moisture-indicating element</strong> — a treated paper that changes color with the moisture content of the refrigerant passing it. Read it after the system has run and stabilized, compare against the legend on the glass, and treat a 'wet' indication seriously: moisture is the raw material of acid (Module 4) and freeze-ups (Module 5). But note the limits: the element reads the refrigerant at that point, responds slowly after a drier change, and can be permanently damaged by liquid slugging or additives. It is a screening instrument. The system's true moisture verdict comes from evacuation quality (Module 7) and, when contamination is suspected, oil acid testing.</p><div class="callout"><strong>Key idea:</strong> Bubbles ask a question (charge? restriction? lift? heat gain?) — they never answer one. Subcooling answers. Use the glass to aim the gauges, not to replace them.</div>`
    },
    {
      heading: "Solenoid Valves, Pump-Down, and Crankcase Heaters",
      html: `<p><strong>Liquid-line solenoid valves</strong> are electrically operated shut-off valves, commanded by the thermostat or a controller. Their signature job is <strong>pump-down control</strong>: on a call's end, the solenoid closes while the compressor keeps running, pumping refrigerant out of the low side into the condenser and receiver until a low-pressure switch stops the compressor. Benefits stack up: the evaporator sits nearly empty at off-cycle, so refrigerant cannot migrate and flood the compressor at restart; the next start is gentle (low starting load); and liquid hammer in long low sides disappears. Failure modes are equally characteristic: a solenoid that leaks through lets migration continue anyway (frost on the suction line at off-cycle, hard flooded starts), and a coil that fails closed starves a system that has plenty of charge — a restriction pattern at a powered valve.</p><p><strong>Crankcase heaters</strong> attack the same enemy — off-cycle refrigerant migration — from the compressor side. Refrigerant migrates toward the coldest point, and an outdoor compressor on a cold night is exactly that point; refrigerant condenses into the crankcase oil, diluting it. At startup the pressure crash flashes that refrigerant out, the oil foams (Module 4), and bearings spend their first seconds lubricated by foam. A crankcase heater keeps the oil sump the warmest place in the system during off cycles, so refrigerant stays in the coils where physics left the rest of the charge. Heaters are typically energized whenever the compressor is off — which is why 'the unit draws a little power doing nothing' can be correct operation, and why a failed heater on a cold-climate compressor is a wear sentence, not a trivia item. Verify heater operation (warm crankcase, measurable current) on every compressor-failure investigation: heaters die silently and take the next compressor with them.</p><div class="callout"><strong>Key idea:</strong> Pump-down empties the low side; the crankcase heater defends the sump. Together they make off-cycles safe for the most expensive component in the system.</div>`
    },
    {
      heading: "Pressure Controls and the Rest of the Supporting Cast",
      html: `<p>Round out the accessory shelf:</p><ul><li><strong>Low-pressure controls</strong> — cut the compressor out on abnormally low suction (loss of charge, pump-down endpoint, coil freeze protection). Cutting out is information: find what drove suction down before resetting anything repeatedly.</li><li><strong>High-pressure controls</strong> — the last defense against runaway head pressure (failed condenser fan, severe fouling, overcharge). A system that trips on high pressure is confessing its condenser-side fault; bypassing the control converts a confession into a rupture risk.</li><li><strong>Discharge-line mufflers and oil separators</strong> (larger systems) — quiet pulsation and strip oil from discharge gas for direct return, supporting Module 4's oil balance.</li><li><strong>Service valves, Schrader cores, and access fittings</strong> — the unglamorous hardware your gauges marry. Leaking cores and caps are among the most common real-world refrigerant leaks (Module 10 starts the search at oily valve caps for a reason).</li><li><strong>Check valves</strong> — enforce one-way flow around heat-pump circuits and parallel compressors; a leaking check valve recirculates discharge gas and shows up as capacity loss with odd frosting patterns.</li></ul><p>The unifying lesson of this module: accessories are where reliability lives. The four major components get the glory, but driers decide whether the TXV survives its first year, accumulators decide whether the compressor survives its first defrost, and a fifty-dollar heater decides whether bearings survive their first winter. Diagnosis that skips the supporting cast will keep 'fixing' major components that accessories killed.</p><div class="callout"><strong>Key idea:</strong> When a major component fails, interrogate the accessories before installing its replacement — the cause of death is usually still in the circuit, waiting.</div>`
    }
  ],
  keyTerms: [
    { term: "Liquid receiver", def: "A high-side vessel after the condenser that stores surplus liquid refrigerant, enabling charge tolerance and pump-down." },
    { term: "Suction accumulator", def: "A low-side vessel before the compressor that catches liquid escaping the evaporator and meters it back safely." },
    { term: "Filter-drier", def: "A combined filter and desiccant device that removes solids, moisture, and (in cleanup types) acids from circulating refrigerant." },
    { term: "Desiccant", def: "The moisture-absorbing core material inside a filter-drier; its capacity is finite and uninspectable, so driers are replaced when systems are opened." },
    { term: "Liquid-line drier", def: "A filter-drier installed before the metering device to protect its small orifices." },
    { term: "Suction-line drier", def: "An oversized temporary cleanup drier used after burnouts/contamination, removed once acid tests are clean." },
    { term: "Temperature-drop test", def: "Comparing drier inlet and outlet temperatures; a drop indicates restriction (pressure drop flashing refrigerant)." },
    { term: "Sight glass", def: "A liquid-line window showing liquid state; bubbles indicate flash gas from charge, restriction, lift, or heat-gain causes." },
    { term: "Moisture indicator", def: "A color-changing element in the sight glass that screens refrigerant moisture content." },
    { term: "Liquid-line solenoid valve", def: "An electrically operated shut-off valve used for pump-down and liquid control." },
    { term: "Pump-down", def: "A control method that empties the low side into the condenser/receiver at the end of a cycle, preventing off-cycle migration and flooded starts." },
    { term: "Crankcase heater", def: "A heater that keeps compressor oil warm during off cycles so refrigerant does not migrate into and dilute the sump." },
    { term: "Refrigerant migration", def: "Off-cycle movement of refrigerant toward the coldest point in the system — often the compressor crankcase." },
    { term: "Low-pressure control", def: "A switch that stops the compressor on abnormally low suction pressure; also the pump-down endpoint control." },
    { term: "High-pressure control", def: "A safety switch that stops the compressor on excessive discharge pressure." },
    { term: "Oil separator", def: "A discharge-line device on larger systems that removes oil from discharge gas and returns it to the compressor." }
  ],
  video: {
    title: "The 4-Step Secret Behind Every Refrigerator",
    embedUrl: "https://www.youtube.com/embed/nXi9VvylGDI",
    note: "A clear cycle walk-through used here for orientation: trace the circuit and pause at each accessory location named in this module (receiver after the condenser, drier before the metering device, accumulator before the compressor) so the supporting cast has a physical place in your mental map. It does not size or select accessories — the lecture does that.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Both ends of a liquid-line drier are measured: inlet 92°F, outlet 84°F, and the line sweats just downstream. Diagnose and prescribe.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: An 8°F drop across a drier means significant pressure drop — liquid is flashing as it squeezes through a <strong>restricted drier</strong>. Step 2: The starved metering device downstream will mimic undercharge/TXV failure. Step 3: Prescription: recover the charge as needed, replace the drier (investigate what plugged it — debris source matters), evacuate properly, and recharge/verify by subcooling.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A sight glass shows bubbles on a hot afternoon. List four distinct causes and the measurement that separates them.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Causes — (a) low charge, (b) restriction upstream of the glass (plugged drier), (c) excessive liquid-line pressure drop/lift, (d) heat gain flashing the liquid. Step 2: The separating measurement is <strong>subcooling</strong>, taken with head pressure and liquid-line temperature: genuinely low subcooling supports charge/heat causes; healthy subcooling with bubbles points at pressure drop between the condenser outlet and the glass. Step 3: A temperature-drop check across the drier then localizes (b).</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A heat pump compressor fails by liquid slugging shortly after defrost termination, twice in two years. Which accessory do you interrogate, and why does its location matter?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The <strong>suction accumulator</strong> — its entire job is catching the liquid surge that defrost termination sends toward the compressor. Step 2: Check for a ruptured internal screen/orifice, a missing (bypassed/removed) accumulator, or one so oil/refrigerant-logged it cannot boil off the surge. Step 3: Location matters because protection only works in the suction line immediately before the compressor — downstream of every liquid source. Replacing compressors without restoring accumulation re-books the same failure.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> On a pump-down system the suction line frosts during long off-cycles and the compressor starts flooded. Give two accessory faults that produce this and a check for each.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <em>Leaking liquid-line solenoid</em> — refrigerant seeps into the low side all off-cycle; check by verifying the valve is de-energized/closed and watching low-side pressure creep upward while off. Step 2: <em>Failed crankcase heater</em> — migration into the cold sump proceeds even with a tight solenoid; check heater current and crankcase warmth during the off-cycle. Step 3: Both leave liquid where the compressor will meet it at startup; fix the accessory, not just the symptom.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Why is 'charge a receiver/TXV system until the sight glass clears' an unsafe rule on a cool spring morning?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: In cool weather the condenser is oversized for the load — it can stack liquid and show bubbles patterns that mislead, while the receiver is designed to hold surplus. Step 2: Chasing a clear glass can stack excess charge into the system that a hot afternoon converts into excessive head pressure. Step 3: The disciplined method for a TXV system is <strong>subcooling</strong> against the manufacturer's target; the glass is a supporting observation only.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A compressor is replaced under warranty. Write the accessory checklist that must accompany the swap, with a one-line reason for each item.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <em>New liquid-line drier</em> — the old desiccant is spent and the system was opened. Step 2: <em>Suction cleanup drier + acid test if the failure was a burnout</em> — contamination kills replacements (Module 7). Step 3: <em>Crankcase heater verified working</em> — silent heater failure is a repeat-failure cause. Step 4: <em>Accumulator inspected</em> — if liquid killed the first compressor, the guard must be proven. Step 5: <em>Valve caps/cores checked for leaks</em> — the charge you add should still be there next season.</p>"
    }
  ],
  quiz: [
    {
      q: "A liquid receiver is located:",
      choices: ["In the suction line before the compressor", "On the high side after the condenser, storing surplus liquid", "Inside the evaporator", "In the discharge line"],
      answer: 1,
      explanation: "Correct: (b). The receiver is high-side liquid storage enabling charge tolerance and pump-down. (a) describes the suction accumulator's location and job. (c) Evaporators hold boiling refrigerant in circuits, not stored charge. (d) The discharge line carries superheated gas, not liquid storage."
    },
    {
      q: "A suction accumulator protects the compressor primarily from:",
      choices: ["High head pressure", "Liquid slugging — incompressible liquid reaching the compressor", "Low oil viscosity", "Dirty condenser air"],
      answer: 1,
      explanation: "Correct: (b). It traps escaping liquid and meters it back at a survivable rate. (a) Head pressure is a condenser-side concern. (c) Oil dilution is fought by crankcase heaters; the accumulator addresses bulk liquid. (d) Air-side dirt never reaches the suction vessel."
    },
    {
      q: "A measurable temperature drop across a liquid-line filter-drier indicates:",
      choices: ["A healthy, oversized drier", "Restriction — pressure drop flashing refrigerant inside the drier", "Excessive subcooling", "A reversed metering device"],
      answer: 1,
      explanation: "Correct: (b). Only a pressure drop can cool liquid across a passive device; the drier is plugging. (a) A healthy drier shows essentially no drop. (c) Subcooling is measured against saturation at the condenser, not across a drier. (d) Metering devices do not reverse, and the symptom localizes at the drier."
    },
    {
      q: "The correct charging method for a TXV system with a receiver is:",
      choices: ["Charge until the sight glass clears", "Charge by subcooling to the manufacturer's target; use the glass only as support", "Charge until suction pressure reaches a fixed number", "Charge by weight only, never verify"],
      answer: 1,
      explanation: "Correct: (b). Subcooling is the TXV-system charge metric; the receiver absorbs surplus, making glass-chasing unreliable and weather-dependent. (a) overcharges readily in cool weather. (c) Suction pressure follows load and airflow, not charge correctness on a TXV system. (d) Weigh-in is a starting point (critical-charge method); verification still applies."
    },
    {
      q: "Pump-down control works by:",
      choices: ["Opening the liquid solenoid at shutdown so the compressor floods safely", "Closing the liquid solenoid while the compressor runs, storing charge in the condenser/receiver until a low-pressure switch stops the compressor", "Turning off the condenser fan first", "Heating the evaporator dry"],
      answer: 1,
      explanation: "Correct: (b). The low side is emptied into high-side storage, preventing migration and flooded starts. (a) reverses the sequence — flooding is the hazard, not the plan. (c) and (d) are not part of pump-down logic."
    },
    {
      q: "A crankcase heater prevents:",
      choices: ["Off-cycle refrigerant migration into the oil sump, which causes foaming and bearing wear at startup", "Condenser fan failure", "TXV hunting", "Moisture entering through leaks"],
      answer: 0,
      explanation: "Correct: (a). Keeping the sump warmest in the system keeps refrigerant out of the oil. (b) Fan failure is a high-pressure-control matter. (c) Hunting is a metering-loop behavior. (d) Heaters do not seal systems; evacuation and leak repair handle moisture."
    },
    {
      q: "A moisture indicator reading 'wet' after a drier change and proper evacuation most likely means:",
      choices: ["The indicator always lies — ignore it", "Residual moisture remains (or the element needs run time to respond); verify evacuation quality and consider the drier/system history before dismissing it", "The system is overcharged", "The compressor must be replaced"],
      answer: 1,
      explanation: "Correct: (b). Treat the screening reading seriously: confirm the decay test was honest, allow stabilization time, and investigate — moisture is acid feedstock. (a) dismisses the one cheap warning you get. (c) Charge does not wet an indicator. (d) Nothing here condemns a compressor."
    },
    {
      q: "When must the liquid-line filter-drier be replaced?",
      choices: ["Only when it leaks externally", "Every time the sealed system is opened for service", "Never — driers are lifetime parts", "Only on systems over ten years old"],
      answer: 1,
      explanation: "Correct: (b). Desiccant capacity is finite and invisible; an opened system gets a fresh drier as standard discipline. (a) waits for the least likely failure while ignoring the certain one (saturation). (c) is false — driers are consumables. (d) Age alone is not the trigger; opening the system is."
    }
  ],
  studyGuide: `
<h3>Module 6 — Accessories: Quick Reference</h3>
<p><strong>Receiver:</strong> high side, after condenser — stores surplus liquid, enables charge tolerance + pump-down. <strong>Accumulator:</strong> low side, before compressor — catches stray liquid, prevents slugging; essential on heat pumps/low-temp.</p>
<p><strong>Filter-drier:</strong> solids + moisture (+ acid in cleanup types). Liquid-line = standard protection; suction-line = temporary burnout cleanup. <strong>Temperature drop across a drier = restriction.</strong> New drier every time the system is opened.</p>
<p><strong>Sight glass:</strong> bubbles = flash gas (charge? restriction? lift? heat gain?) — subcooling decides. Never charge a TXV/receiver system 'to a clear glass.' Moisture element = screening tool; respect a 'wet' reading.</p>
<p><strong>Solenoid + pump-down:</strong> solenoid closes, compressor pumps low side into receiver, low-pressure switch stops it. Leaking solenoid = frosted suction line off-cycle, flooded starts.</p>
<p><strong>Crankcase heater:</strong> keeps sump warmest so refrigerant does not migrate into oil; verify current/warmth on every compressor-failure call — silent deaths repeat.</p>
<p><strong>Controls:</strong> low-pressure and high-pressure cutouts are confessions, not nuisances — find the condition that speaks through them.</p>
`
};
