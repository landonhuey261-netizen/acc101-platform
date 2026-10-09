// HVAC 111 - Module 8: Reading Wiring Diagrams & Schematics
module.exports = {
  number: 8,
  slug: "wiring-diagrams-schematics",
  title: "Reading Wiring Diagrams & Schematics",
  estTime: "3–4 hours",
  objectives: [
    "Distinguish pictorial (connection) diagrams from ladder (schematic) diagrams and state what each is for.",
    "Read the standard symbols for coils, contacts, switches, motors, capacitors, transformers, and protective devices.",
    "Trace a complete cooling circuit through a ladder diagram from the transformer to each load.",
    "Use the de-energized drawing convention to predict contact states when a coil is energized.",
    "Translate a ladder diagram into a meter-testing plan: where voltage should be present or absent in each operating state.",
    "Interpret legends, notes, terminal designations, and wire labels on manufacturer diagrams."
  ],
  sections: [
    {
      heading: "Two Kinds of Diagrams, Two Different Jobs",
      html: `
<p>Manufacturers typically give you two drawings because one drawing cannot do two jobs. The <strong>pictorial (connection) diagram</strong> shows components roughly where they physically sit, with wires drawn as they actually run — wire colors, terminals, and routing included. It answers: <em>where is it, and what is it plugged into?</em> Use it to find parts and verify that field wiring matches factory intent.</p>
<p>The <strong>ladder diagram (schematic)</strong> abandons physical layout entirely. It redraws the circuit as horizontal rungs between two vertical power rails, arranged so the <em>logic</em> reads top to bottom: power source at the top, rungs of switches-and-loads in the middle, and the return (common) at the bottom or opposite rail. It answers: <em>how does it work, and in what order do things happen?</em> Troubleshooting strategy is built from ladder diagrams; part location comes from pictorials. Confusing the two — trying to find a component 'where the ladder shows it' — is the beginner's classic wrong turn.</p>
<p>On most HVAC ladders the drawing is organized by voltage: <strong>line-voltage rungs</strong> (240 V loads: compressor, fan, heaters) near the top, <strong>control-voltage rungs</strong> (24 V: coils, gas valves, boards) below, with the control transformer drawn between its primary connection (top world) and its secondary (bottom world) — literally the bridge between the two. The left rail is typically the hot side (L1 or R/24 V hot) and the right rail the return (L2 or common C).</p>
<div class="callout"><strong>Key idea:</strong> Pictorial = geography. Ladder = logic. Find parts on the pictorial; understand and troubleshoot the circuit on the ladder. Every diagram is drawn <strong>de-energized</strong> — contacts are shown in their rest (NO/NC) states.</div>`
    },
    {
      heading: "The Symbol Vocabulary",
      html: `
<p>Schematics use a compact symbol language. Learn this core set and most residential/light-commercial diagrams open up:</p>
<ul>
<li><strong>Coil:</strong> a circle (often labeled with its device: C for contactor, R for relay) — the load that, when energized, moves its contacts everywhere else on the drawing.</li>
<li><strong>Contacts:</strong> a pair of short parallel/slanted lines for NO (drawn apart) and NC (drawn with a diagonal slash/touching) — each contact carries the label of its coil, tying it to its operator across the page.</li>
<li><strong>Switches:</strong> thermostat contacts are often drawn as a temperature-actuated switch (sometimes a bulb/mercury symbol on older drawings); pressure switches carry a diaphragm/bellows mark and their NC/NO state plus setpoint in the notes.</li>
<li><strong>Motor:</strong> a circle with an M, or with winding marks; compressors may be drawn as their C/R/S terminals with the internal overload.</li>
<li><strong>Capacitor:</strong> two parallel plates, one often curved — run capacitors in motor rungs, with µF in the legend or parts list.</li>
<li><strong>Transformer:</strong> two facing sets of arcs/coils — primary on the line side, secondary feeding the control rails; ratings in the notes.</li>
<li><strong>Protective devices:</strong> a wavy or zigzag line for a fuse; a linked switch symbol for a breaker; thermal overloads drawn as a heater squiggle plus its switch contact near the motor it guards.</li>
<li><strong>Ground:</strong> the stacked-lines symbol; <strong>terminals/junctions:</strong> dots where wires join (crossing lines WITHOUT a dot do not connect — a detail that matters).</li>
</ul>
<p>The <strong>legend and notes</strong> are part of the diagram, not decoration: abbreviations (e.g., which code means which relay), optional-equipment marks, factory vs. field wiring line styles (solid vs. dashed), and warnings live there. Read the legend first, every time — manufacturers' symbol dialects differ in details even when the grammar is standard.</p>
<div class="callout"><strong>Common mistake:</strong> Assuming crossing wires connect. On schematics, only a dot (or an explicit junction style per the legend) means connection. Half of 'impossible' diagram readings dissolve when crossings are read correctly.</div>`
    },
    {
      heading: "Following a Cooling Circuit, Rung by Rung",
      html: `
<p>Walk a standard cooling system down its ladder. <strong>Line section:</strong> L1 and L2 enter through the disconnect. One rung shows the contactor's two poles in series with the compressor motor (with its run capacitor drawn in the start-winding path); another rung shows the condenser fan motor, also fed through a contactor pole on most units (with its capacitor — or its half of the dual cap). The control transformer's primary taps power here too.</p>
<p><strong>Control section:</strong> The transformer's secondary puts 24 V between the R rail and C (common) rail. The main rung: from R, through the thermostat's cooling contact (labeled Y), then through the series safety string — high-pressure switch (NC) and low-pressure switch (NC) — to the contactor coil, and from the coil back to C. Energize that rung and the story cascades mechanically: coil magnetism closes the line-voltage poles up top, and both high-voltage loads start together. A separate control rung runs from R through the thermostat's fan contact (G) to the indoor blower relay coil, whose contacts (shown on yet another rung, possibly in the line section) switch the blower.</p>
<p>Notice the diagram's economy: one coil appears once, but its <em>contacts</em> appear wherever they act — line rungs, control rungs, auxiliary interlocks. Following a circuit means following labels, not lines alone: find coil C on the control rung; then find every contact labeled C and know they all change state together. This is Module 5's relay logic wearing its professional uniform — series string = AND of thermostat and safeties, coil energizing = line contacts closing.</p>
<div class="callout"><strong>Key idea:</strong> Trace with a question: 'What must be true for this coil to have 24 V?' Walk its rung from R to C and list every element in the path. That list IS your troubleshooting checklist, in order.</div>`
    },
    {
      heading: "From Diagram to Diagnosis: Predicting Voltages",
      html: `
<p>A diagram earns its keep when you can predict meter readings from it <em>before</em> you measure. Method: pick an operating state (call/no call, safety open/closed), mark every contact's state on a mental copy (remember: drawn de-energized, so flip the contacts of any energized coil and any actuated switch), then follow the rails.</p>
<p><strong>Worked Example — no cooling, fan-only works.</strong> Diagram says: blower relay rung is independent (works ✓ consistent). Contactor rung: R → Y contact → HP switch → LP switch → coil → C. Prediction set if the LP switch is open (low charge): 24 V from R to the LP switch input; 0 V from LP output to coil; coil silent. Meter confirms: 24 V across the LP switch = the open point (Module 7's signature, now planned from paper). Because you predicted the pattern for each candidate switch <em>first</em>, whichever reading appears names its own fault. Troubleshooting by prediction beats troubleshooting by wandering, especially live, where minimizing probe time is a safety feature.</p>
<p>Augment the factory diagram with field reality: someone may have added a float switch (condensate safety) in series with Y or with R — extremely common, rarely drawn on the factory schematic. When the paper circuit and the unit disagree, believe the unit, note the addition (draw it in), and continue. Recording undocumented changes on the diagram copy is a professional habit that saves the next technician — often future you.</p>
<div class="callout"><strong>Key idea:</strong> The workflow is paper → prediction → meter → conclusion. If your meter reading surprises your prediction, stop and re-read the diagram: either the diagram, your state-flip, or your assumption about the equipment is wrong — and finding which is the diagnosis.</div>`
    },
    {
      heading: "Terminal Designations and Field Wiring",
      html: `
<p>Low-voltage wiring speaks in standardized terminal letters — learn them as vocabulary: <strong>R</strong> = 24 V hot from the transformer; <strong>C</strong> = common; <strong>Y</strong> = cooling call (contactor); <strong>G</strong> = indoor fan; <strong>W</strong> = heat call; on heat pumps, <strong>O/B</strong> = reversing-valve control and aux/emergency heat has its own designations per the manufacturer. Wire colors usually follow a convention (red = R, yellow = Y, green = G, white = W, blue or black often = C) — but color is a custom, not a law: verify by terminal, never by color alone, especially on equipment someone else has serviced.</p>
<p>At the equipment, terminal boards, spade connectors, and numbered wire markers tie the pictorial diagram to the physical unit: wire numbers on the pictorial correspond to tags on the harness. When a wire is found disconnected, the pair of diagrams settles where it belongs: the pictorial shows the terminal; the ladder confirms the function. When a diagram is missing entirely (older equipment, lost door panel), reconstruct a working ladder from the unit itself: identify the transformer rails, then trace each load's rung with your eyes and a continuity tester (power off) — Module 5's logic and Module 7's techniques, applied in reverse. It takes longer than reading a factory print, and it beats guessing by exactly the cost of the parts guessing burns.</p>
<p>Blueprint reading for whole-building layout (Module 9) extends this same discipline from one unit's wiring to the building's systems. Both skills — ladder logic here, plans next — anchor the blueprint side of this course and show up in NATE Core's electrical expectations, where reading diagrams is treated as basic technician literacy.</p>
<div class="callout"><strong>Common mistake:</strong> Landing field wires by color memory on a unit whose previous tech used creative colors. Terminals are authoritative; colors are hints. The ladder tells you what each terminal DOES — trust function over paint.</div>`
    }
  ],
  keyTerms: [
    { term: "Ladder diagram (schematic)", def: "A logic drawing arranging circuits as horizontal rungs between power rails, showing how the system operates rather than where parts sit." },
    { term: "Pictorial (connection) diagram", def: "A drawing showing components in approximate physical positions with actual wiring runs, colors, and terminals." },
    { term: "Rung", def: "One horizontal circuit path on a ladder diagram, containing switches and a load between the rails." },
    { term: "Rail", def: "A vertical power line on a ladder diagram: hot on one side, return/common on the other." },
    { term: "De-energized convention", def: "Diagrams are drawn with all coils de-energized and switches at rest; contact positions show NO/NC rest states." },
    { term: "Legend", def: "The diagram's key explaining symbols, abbreviations, and device codes for that manufacturer." },
    { term: "Field wiring", def: "Wiring installed on site (often dashed on diagrams) as opposed to factory wiring (solid lines)." },
    { term: "Terminal designations (R, C, Y, G, W)", def: "Standard low-voltage labels: R hot, C common, Y cooling, G fan, W heat." },
    { term: "Junction dot", def: "The dot marking where crossing wires actually connect on a schematic; crossings without a dot do not connect." },
    { term: "Coil label", def: "The device code beside a coil; all contacts bearing that code are operated by that coil." },
    { term: "Safety string", def: "The series chain of NC protective switches drawn in series with a coil on its control rung." },
    { term: "Internal overload (diagram)", def: "A compressor's built-in protective switch drawn in the motor circuit, opening on excess heat/current." },
    { term: "Wire number", def: "A harness identification number printed on the pictorial diagram and tagged on the actual wire." },
    { term: "Sequence of operation", def: "The ordered description of what energizes when — derivable from a ladder diagram by following calls through the rungs." },
    { term: "Auxiliary contact", def: "An extra contact set on a contactor/relay used for interlocking or signaling other rungs." },
    { term: "Common (C) rail", def: "The return side of the 24 V control circuit, to which all control loads connect back." },
    { term: "Factory wiring", def: "Wiring installed by the manufacturer, drawn with solid lines on manufacturer diagrams." },
    { term: "Back-EMF / interlock (diagram reading)", def: "Auxiliary contacts arranged so one device's operation enables or prevents another's — read by following coil labels across rungs." }
  ],
  video: {
    title: "Wiring Diagram Tracing - Older RHEEM Condenser",
    embedUrl: "https://www.youtube.com/embed/lymlJxgzeCk",
    note: "Bryan Orr traces a real condenser's wiring, moving between the point-to-point (pictorial) diagram and the ladder schematic on the same unit — exactly the two-diagram workflow in this module. Watch how he uses the legend and component codes, and how dashed lines mark field-installed parts versus solid factory wiring.",
    more: [
      { title: "How to Read HVAC Schematics (Beginner to Pro – Furnace & AC Explained)", url: "https://www.youtube.com/watch?v=HbMqTEDxPGA" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A ladder shows (control section): R rail → thermostat Y contact → float switch (NC) → LP switch (NC) → contactor coil → C rail. List, in order, every condition that must be true for the compressor to run, and state the AND/OR structure.</p>",
      solution: "<p><strong>Solution:</strong> Conditions, in rung order: (1) transformer supplying 24 V between R and C; (2) thermostat calling for cooling (Y contact closed); (3) condensate float down (float switch closed = no overflow); (4) refrigerant pressure adequate (LP switch closed); (5) coil itself continuous. Structure: pure <strong>AND</strong> — all series elements must conduct; any single opening stops the compressor while leaving independent rungs (like the blower) unaffected.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> On the same ladder, the line section shows coil C operating two poles feeding the compressor and one fan lead. The unit's condenser fan has its own relay on another job's diagram instead. Why might two similar units differ, and how do you avoid misdiagnosing because of it?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Manufacturers route loads differently across models and years — through contactor poles, separate relays, or board outputs; all achieve 'fan runs with compressor call.' Step 2: The defense is to diagnose from the diagram OF THE UNIT IN FRONT OF YOU (model-specific, on the door or by model number), never from habit formed on other units. Step 3: When symptoms cross circuits (fan dead, compressor alive), the unit's own ladder tells you whether they even share a switching device.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A schematic crossing shows two wires intersecting with no dot, and nearby two wires intersecting with a dot. A trainee wires a jumper connecting the first pair. What error was made and what could it cause?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Without a junction dot, crossing wires do NOT connect — the trainee created a connection the design never intended. Step 2: Depending on the circuits, the jumper could back-feed a control rung, bypass a safety, or short two rails together (blown fuse at best, board damage at worst). Step 3: Rule for the field: dots (per the legend) mean connection; bare crossings mean the wires merely pass on the page.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Using the Problem 1 ladder, predict all meter readings (at the coil and across each switch) for the state: thermostat calling, float switch open due to a clogged drain, pressures normal. Then state the single repair sequence this implies.</p>",
      solution: "<p><strong>Solution:</strong> Predictions: across the float switch = <strong>24 V</strong> (the open point takes the supply); across the Y contact and LP switch = ~0 V (closed, no current, no drop); at the coil = <strong>0 V</strong>; coil silent, compressor and (if slaved) condenser fan off. Repair sequence: clear the condensate drain and confirm the float drops — the switch was reporting a real condition, so 'fixing' the switch without clearing the drain guarantees a callback and possibly water damage.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A thermostat is found wired: red to Y, yellow to R, green to G, white to W. The system misbehaves oddly on every call. What is the likely story and the correct fix?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Red and yellow are swapped relative to convention AND to their terminals: R (24 V hot) is landed on the yellow wire, Y (cooling output) on the red — every thermostat output is being sent down the wrong conductor, so calls energize the wrong equipment circuits. Step 2: Fix by function, not color folklore: land the conductor that actually comes from the transformer's R terminal on R at both ends, and the Y circuit conductor on Y at both ends — then verify each call (Y, G, W) energizes only its intended load. Step 3: Moral — terminals are authoritative; check both ends of every conductor.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> The factory diagram is missing on a 20-year-old unit. Outline a safe procedure to reconstruct the control circuit's ladder from the physical unit.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Lock out, prove dead. Identify the transformer and label its secondary rails R and C (power briefly restored for a voltage check only if needed, then locked out again). Step 2: With power off, use continuity to walk each path: start at R, follow thermostat conductors into the unit, through each switch (record NO/NC by actuation), to each coil, and back to C — sketching a rung per load as you go. Step 3: Identify each relay/contactor's contacts and which line-voltage loads they switch, adding those rungs above. Step 4: Label every coil's contacts with a shared code, check the sketch by predicting one call's operation, and tape the finished copy inside the unit for the next technician.</p>"
    }
  ],
  quiz: [
    {
      q: "The pictorial diagram's main advantage over the ladder diagram is that it:",
      choices: ["Shows circuit logic in operating order", "Shows physical locations, wire runs, and terminals as installed", "Uses fewer symbols", "Is drawn energized"],
      answer: 1,
      explanation: "Correct: (b). Geography and wiring-as-built are the pictorial's job. (a) Operating logic is the ladder's strength. (c) Both use symbols; count is not the distinction. (d) All diagrams are drawn de-energized."
    },
    {
      q: "On a ladder diagram, a contact labeled with the same code as a coil will:",
      choices: ["Never change state", "Change state whenever that coil is energized, wherever the contact appears on the drawing", "Carry the coil's voltage rating only", "Be physically beside the coil in the unit"],
      answer: 1,
      explanation: "Correct: (b). The label is the link: coil energized → all its contacts flip, across every rung. (a) Contacts exist precisely to change state. (c) Ratings are separate specifications. (d) Ladder placement is logical, not physical — the contact may be drawn rungs away from its coil."
    },
    {
      q: "Two wires cross on a schematic with no dot at the intersection. Electrically, they:",
      choices: ["Are connected", "Are not connected — the wires merely pass on the page", "Are connected only at line voltage", "Indicate a factory error"],
      answer: 1,
      explanation: "Correct: (b). Only a dot (per the legend's convention) denotes a junction. (a) is the classic misreading. (c) Voltage level does not change drafting rules. (d) Bare crossings are standard practice, not errors."
    },
    {
      q: "In the standard control terminal code, the letter Y designates:",
      choices: ["The transformer common", "The cooling call circuit (to the contactor)", "The heating call circuit", "The ground connection"],
      answer: 1,
      explanation: "Correct: (b). Y = cooling (yellow conventionally). (a) Common is C. (c) Heat is W. (d) Ground has its own symbol/terminal and is not a control-call letter in this scheme."
    },
    {
      q: "A ladder's control rungs are drawn below the line-voltage rungs primarily to reflect:",
      choices: ["The physical mounting order in the cabinet", "The organization by voltage level: line circuits above, 24 V control logic below, with the transformer bridging them", "Alphabetical order of components", "The order in which parts were installed at the factory"],
      answer: 1,
      explanation: "Correct: (b). Voltage-level organization makes the control story readable at a glance. (a) Ladder placement explicitly ignores physical arrangement. (c) and (d) play no role in schematic layout."
    },
    {
      q: "An undocumented float switch is discovered wired in series with the contactor coil circuit in an installed unit. The professional response is:",
      choices: ["Remove it — it is not on the factory diagram", "Believe the unit over the paper, note/draw the addition on the diagram copy, and troubleshoot with it included", "Ignore it during diagnosis", "Report the homeowner to the manufacturer"],
      answer: 1,
      explanation: "Correct: (b). Field additions are real circuit elements: document them and include them in the logic. (a) Removing a condensate safety creates water-damage risk. (c) An ignored series element can be the very open point you are hunting. (d) There is nothing to report — field safeties are legitimate practice."
    },
    {
      q: "Before condemning a component from a diagram-based prediction, your predicted voltage pattern disagrees with the meter. The right move is:",
      choices: ["Trust the prediction and replace the part anyway", "Stop and re-check the diagram, the contact states for the current operating condition, and your assumptions — the mismatch itself is diagnostic information", "Replace the meter", "Energize the circuit and watch for smoke"],
      answer: 1,
      explanation: "Correct: (b). Prediction-vs-meter mismatch means a wrong state-flip, a misread symbol, or an undocumented circuit change — resolving it IS the diagnosis. (a) Parts-swapping against your own evidence is guessing. (c) Meters are verified (Module 7), not reflexively replaced. (d) Smoke is a failure report, not a method."
    },
    {
      q: "The high-pressure switch on a cooling ladder is drawn as an NC contact in series with the contactor coil. In normal operation it is:",
      choices: ["Open, closing only on high pressure", "Closed, opening only if pressure exceeds its setpoint", "Replaced by a jumper", "Energized by the coil"],
      answer: 1,
      explanation: "Correct: (b). NC at rest = closed during all healthy operation, opening on the fault it guards. (a) describes an NO arrangement, which could neither pass coil power normally nor fail safe. (c) Jumpering a safety defeats protection — never. (d) The switch is a passive contact in the coil's circuit, not a load of the coil."
    }
  ],
  studyGuide: `
<h3>Module 8 — Wiring Diagrams & Schematics: Quick Reference</h3>
<p><strong>Two drawings:</strong> Pictorial = geography (locations, wire runs, colors, terminals). Ladder = logic (rungs between rails, operation order). Both drawn DE-ENERGIZED; read the legend first.</p>
<p><strong>Ladder anatomy:</strong> Line-voltage rungs on top, 24 V control rungs below, transformer bridging them. Left rail hot (R), right rail common (C). Coils drawn once; their labeled contacts appear wherever they act and flip together when the coil energizes.</p>
<p><strong>Symbols to own:</strong> Coil = circle w/ device code. NO contact = drawn open; NC = drawn closed w/ slash. Motor = circle M or C/R/S terminals. Capacitor = paired plates. Transformer = facing coil arcs. Fuse = wavy line. Dot = wires connect; no dot = no connection.</p>
<p><strong>Method:</strong> Paper → prediction → meter → conclusion. For any dead load, walk its rung from R to C listing every element; measure across suspects — full supply voltage marks the open point.</p>
<p><strong>Terminals:</strong> R hot, C common, Y cool, G fan, W heat, O/B reversing valve (heat pumps). Verify by terminal function, never by wire color alone. Document field additions (float switches!) on the diagram copy.</p>
`
};
