// ele108 - Module 12: Control Panel Layout & Documentation
module.exports = {
  "number": 12,
  "slug": "control-panel-layout-documentation",
  "title": "Control Panel Layout & Documentation",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe the layout of a control panel: power, control, and wireways.",
    "Explain panel heat, ventilation, and component spacing.",
    "Describe wire labeling, terminal blocks, and wire duct.",
    "Explain the documentation set: ladder diagrams, wiring diagrams, panel layout, and the bill of materials.",
    "Describe nameplates, legends, and panel schedules."
  ],
  "sections": [
    {
      "heading": "Panel Layout: Power on One Side, Control on the Other",
      "html": "<p>A well-laid-out control panel is easy to read, easy to wire, and easy to troubleshoot. The usual layout puts the <strong>power components</strong> — the disconnect, the main breaker, the contactors, and the overload relays — on one side or at the top, and the <strong>control components</strong> — the control transformer, relays, timers, and terminal blocks — on the other side or below. The separation matters for safety and for noise: the high-current power wiring and the low-voltage control wiring are kept apart so the power wiring cannot induce noise into the control wiring and so a person working on the control side is not reaching past live power conductors.</p>\n<p>Components are mounted on a <strong>back panel</strong> (a steel plate inside the enclosure) on DIN rails and mounting plates, with enough space around each device for its heat to escape and for a hand to reach its terminals. <strong>Wire duct</strong> (slotted plastic channel) runs between the rows of components and carries the wiring neatly from device to device, with the wires entering and leaving through the slots. The panel door carries the pilot devices — push buttons, selector switches, and indicator lights — wired back to the back panel through a flexible duct or a wire bundle that allows the door to open without straining the wires.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Power and control are separated in the panel, components have room to breathe and to be reached, and wire duct keeps the wiring neat and traceable.</div>"
    },
    {
      "heading": "Heat, Ventilation & Spacing",
      "html": "<p>Every component in a panel makes heat — contactor coils, transformers, VFDs, and power supplies — and a sealed panel in a hot plant can cook its own contents. Panel heat is managed three ways: by <strong>spacing</strong> (leaving air gaps around heat-producing devices, as the manufacturer's instructions require), by <strong>ventilation</strong> (louvers, fans, or filtered air intake), and by <strong>cooling</strong> (a panel air conditioner or a heat exchanger for hot or dusty locations). The panel's temperature is part of its design: a VFD in a sealed panel without ventilation will trip on overtemperature, and a control transformer in a crowded panel will run hot and fail early.</p>\n<p>The enclosure rating (NEMA type) sets what the panel can survive: NEMA 1 for clean indoor locations, NEMA 12 for dusty indoor locations, NEMA 4 for washdown areas, and NEMA 4X for corrosive locations. The rating and the cooling must be chosen together — a NEMA 4 panel cannot have open louvers, so it needs a closed-loop cooler or a heat exchanger instead of a fan. The panel's nameplate carries its voltage, its short-circuit current rating, and its enclosure type, and the rating must match the location it is installed in.</p>"
    },
    {
      "heading": "Wires, Terminals & Labels",
      "html": "<p>A panel is only as good as its wiring, and good wiring is labeled wiring. Every wire carries a <strong>wire number</strong> (Module 7) at both ends, printed on a sleeve or a label, matching the ladder diagram and the wiring diagram. Wires land on <strong>terminal blocks</strong> — rows of screw or spring terminals on a DIN rail — rather than being spliced in mid-air, so any wire can be removed, tested, or replaced without disturbing the others. Terminal blocks are grouped by function (power in, control in, outputs, field devices) and labeled, and a spare terminal or two is left in each group for future changes.</p>\n<p>Wire colors follow a convention that the whole plant should share: in the common North American practice, black, red, and blue are the three phases, white is the neutral, green (or green with a yellow stripe) is the equipment ground, and red or orange is often used for control wiring (with yellow sometimes used for wiring that stays live when the disconnect is open, such as an interlock from another panel). The exact convention is set by the plant or the panel builder and written on the panel schedule — what matters is that it is consistent and documented, not that it matches any one textbook.</p>"
    },
    {
      "heading": "The Documentation Set & Handover",
      "html": "<p>A control panel is not finished when it is wired — it is finished when it is documented. The <strong>documentation set</strong> has four parts: the <strong>ladder diagram</strong> (the logic), the <strong>wiring diagram</strong> (the actual wires and terminals), the <strong>panel layout drawing</strong> (where each component sits in the enclosure), and the <strong>bill of materials</strong> (every component, with its manufacturer, part number, and rating). The panel also carries a <strong>nameplate</strong> with its voltage, short-circuit rating, and enclosure type, a <strong>legend</strong> that says what each pilot device and light means, and a <strong>panel schedule</strong> that lists each circuit and what it feeds.</p>\n<p><strong>Handover</strong> is the moment the panel is given to the people who will run and maintain it, and it has a checklist: the documentation set is complete and stored in the panel (usually in a document pocket inside the door), the settings are recorded (overload settings, timer delays, VFD parameters, control transformer taps), the panel has been tested through its full cycle, and the operators have been shown the controls and the E-stop. A panel handed over without documentation is a puzzle for the next person — and the next person is often you, six months later, called back to a machine you no longer remember. Document as if you will be the one who comes back.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Changing a setting — an overload, a timer, a VFD parameter — and not writing it down. The next person to troubleshoot that panel will trust the drawing, find a different setting, and waste hours chasing a fault that is really an undocumented change.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Panel layout: power components and control components separated; components on DIN rails with room for heat and for hands; wire duct carries the wiring neatly.</li>\n<li>Heat is managed by spacing, ventilation, and cooling; the enclosure rating (NEMA 1, 12, 4, 4X) must match the location.</li>\n<li>Every wire is numbered at both ends and lands on a labeled terminal block; wire colors follow a documented plant convention.</li>\n<li>The documentation set: ladder diagram, wiring diagram, panel layout drawing, bill of materials — plus nameplate, legend, and panel schedule.</li>\n<li>Handover checklist: documentation in the panel, settings recorded, full-cycle test passed, operators shown the controls and the E-stop.</li>\n<li>Document as if you will be the one who comes back — because you probably will be.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Building a panel with no spare terminals and no spare space. The first change — a new sensor, an added interlock — has nowhere to go, and the panel must be rebuilt instead of extended.</div>\n<p><strong>Ready-to-Work link:</strong> If you can describe a panel's layout, its documentation set, and the handover checklist, you have this module — and this course. The midterm and final exams are next.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Back panel", "def": "The steel plate inside an enclosure on which the components are mounted." },
    { "term": "DIN rail", "def": "The standard metal rail on which contactors, relays, terminal blocks, and other components clip." },
    { "term": "Wire duct", "def": "Slotted plastic channel that carries and organizes wiring between components in a panel." },
    { "term": "Terminal block", "def": "A screw or spring terminal on a DIN rail where wires land for connection, testing, and replacement." },
    { "term": "Wire number", "def": "The number on a wire, the same at both ends, linking the panel wiring to the diagrams." },
    { "term": "Enclosure rating (NEMA)", "def": "The protection class of a panel: NEMA 1 (clean indoor), 12 (dusty), 4 (washdown), 4X (corrosive)." },
    { "term": "Bill of materials", "def": "The list of every component in a panel, with manufacturer, part number, and rating." },
    { "term": "Panel layout drawing", "def": "A drawing showing where each component sits in the enclosure." },
    { "term": "Legend", "def": "The list on a panel that says what each push button, switch, and light means." },
    { "term": "Panel schedule", "def": "The list of each circuit in a panel and what it feeds, with the settings recorded." },
    { "term": "Nameplate (panel)", "def": "The plate on a panel giving its voltage, short-circuit current rating, and enclosure type." },
    { "term": "Handover", "def": "The formal transfer of a panel to its operators and maintainers, with documentation, settings, and testing complete." },
    { "term": "Short-circuit current rating", "def": "The maximum fault current a panel is rated to withstand; marked on its nameplate." },
    { "term": "Spare terminals", "def": "Extra terminal blocks left in a panel for future additions." }
  ],
  "video": {
    "title": "Step-by-step Wiring of an Electrical Control Panel",
    "embedUrl": "https://www.youtube.com/embed/oZ2n3UcRmQ8",
    "note": "A step-by-step build of a control panel — back panel layout, DIN rail, wire duct, and terminal blocks — showing how a neat panel is put together and why the layout matters.",
    "more": [
      { "title": "How to Design & Build an Industrial Control Panel - at AutomationDirect", "url": "https://www.youtube.com/watch?v=lFfHbMDZgx8" },
      { "title": "Reviewing the Basics of an Electrical Control Panel (Practical Example)", "url": "https://www.youtube.com/watch?v=18UkMG8T5jo" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A panel has its power and control wiring mixed together in the same duct, and the control circuit picks up noise that causes false starts. What is the layout error, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Power and control wiring must be separated — high-current power wiring induces noise into low-voltage control wiring. Step 2: The fix is to reroute the control wiring in its own duct, away from the power wiring. Step 3: Keep the separation in the layout drawing so the next person does not mix them again.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A VFD in a sealed panel keeps tripping on overtemperature. The panel has no ventilation. What is the problem, and what are two fixes?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The VFD's heat has nowhere to go in a sealed panel. Step 2: Fix one: add ventilation (a filtered fan) if the enclosure rating allows it. Step 3: Fix two: use a closed-loop cooler or heat exchanger, or move the VFD to a ventilated location — a NEMA 4 panel cannot have open louvers.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A technician changes a timer delay from 10 seconds to 5 seconds but does not write it down. Six months later the machine misbehaves. Why is the missing note a problem?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The next person to troubleshoot will trust the ladder diagram and the panel schedule, which say 10 seconds. Step 2: The actual setting is 5 seconds, so the machine's behavior does not match the documentation. Step 3: Hours are wasted chasing a fault that is really an undocumented change — record every setting change.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> List the four parts of a control panel's documentation set.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The ladder diagram (the logic). Step 2: The wiring diagram (the actual wires and terminals). Step 3: The panel layout drawing (where each component sits). Step 4: The bill of materials (every component with its part number and rating).</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A panel is being built with no spare terminals and no spare space on the DIN rail. Why is this a mistake?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The first change — a new sensor, an added interlock — has nowhere to land. Step 2: The panel must be rebuilt or extended instead of simply adding a terminal. Step 3: Leave spare terminals and spare space in every panel.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A panel's legend is missing, and the operator does not know what the amber light means. What should have been done at handover, and what should be done now?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: At handover, the legend should have been fitted and the operators shown what each device and light means. Step 2: Now, trace the amber light's rung on the ladder diagram to find what it indicates. Step 3: Fit a proper legend and record it in the documentation before the panel is used again.</p>"
    }
  ],
  "quiz": [
    {
      "q": "In a control panel, power and control components are separated mainly to:",
      "choices": ["Save space", "Keep power wiring from inducing noise into control wiring and keep workers away from live power conductors", "Make the panel heavier", "Use more wire duct"],
      "answer": 1,
      "explanation": "Correct: (b). Separation prevents noise and improves safety. (a) Separation uses more space, not less. (c) Weight is not the reason. (d) Wire duct is a means, not a reason."
    },
    {
      "q": "Wire duct in a panel is used to:",
      "choices": ["Carry and organize wiring neatly between components", "Cool the panel", "Hold the door closed", "Measure the current"],
      "answer": 0,
      "explanation": "Correct: (a). Wire duct routes and organizes the wiring. (b) Cooling is done by fans or exchangers. (c) The door is held by its latch. (d) Current is measured by a meter."
    },
    {
      "q": "Terminal blocks are used instead of mid-air splices because they:",
      "choices": ["Are cheaper than wire", "Let any wire be removed, tested, or replaced without disturbing the others", "Increase the voltage", "Eliminate the need for a ladder diagram"],
      "answer": 1,
      "explanation": "Correct: (b). Terminal blocks make wiring maintainable. (a) They cost more than a splice, not less. (c) They do not change voltage. (d) The ladder diagram is still needed."
    },
    {
      "q": "A NEMA 4 enclosure is for:",
      "choices": ["Clean indoor locations", "Washdown areas", "Dusty indoor locations only", "Outdoor use with no water"],
      "answer": 1,
      "explanation": "Correct: (b). NEMA 4 is watertight for washdown. (a) That is NEMA 1. (c) That is NEMA 12. (d) Outdoor use with no water is not a NEMA 4 application."
    },
    {
      "q": "The documentation set for a control panel includes the:",
      "choices": ["Ladder diagram, wiring diagram, panel layout drawing, and bill of materials", "Motor nameplate only", "Utility bill", "Operator's manual for the building"],
      "answer": 0,
      "explanation": "Correct: (a). All four documents are required. (b) The motor nameplate is one field, not the set. (c) The utility bill is not panel documentation. (d) The building manual is a different document."
    },
    {
      "q": "A panel legend tells the operator:",
      "choices": ["The price of the panel", "What each push button, switch, and light means", "The wire colors", "The fault current"],
      "answer": 1,
      "explanation": "Correct: (b). The legend explains the pilot devices. (a) Price is not on the legend. (c) Wire colors are in the wiring diagram. (d) Fault current is on the nameplate."
    },
    {
      "q": "At handover, the panel's settings (overload, timer, VFD parameters) should be:",
      "choices": ["Left at their factory defaults", "Recorded on the panel schedule", "Memorized by the installer", "Kept secret"],
      "answer": 1,
      "explanation": "Correct: (b). Settings are recorded so the next person knows what they are. (a) Factory defaults are rarely correct for the application. (c) Memory is not documentation. (d) Settings must be available to maintainers."
    },
    {
      "q": "Spare terminals and spare DIN rail space are left in a panel so that:",
      "choices": ["The panel looks bigger", "Future additions can be made without rebuilding the panel", "The panel is heavier", "The wires are longer"],
      "answer": 1,
      "explanation": "Correct: (b). Spare capacity makes the panel extendable. (a) Appearance is not the reason. (c) Weight is not the reason. (d) Wire length is not the reason."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Control Panel Layout &amp; Documentation: Quick Reference</h3>\n<p><strong>Core idea:</strong> Power and control are separated in the panel, components have room to breathe and to be reached, and wire duct keeps the wiring neat and traceable.</p>\n<p><strong>Layout:</strong> Back panel + DIN rail · Wire duct between rows · Door carries the pilot devices · Power one side, control the other.</p>\n<p><strong>Heat:</strong> Spacing, ventilation, cooling. Enclosure: NEMA 1 (clean indoor) · 12 (dusty) · 4 (washdown) · 4X (corrosive).</p>\n<p><strong>Wiring:</strong> Every wire numbered at both ends · Terminal blocks, grouped and labeled · Spare terminals and spare space.</p>\n<p><strong>Documentation:</strong> Ladder diagram · Wiring diagram · Panel layout drawing · Bill of materials — plus nameplate, legend, panel schedule.</p>\n<p><strong>Handover:</strong> Documentation in the panel · Settings recorded · Full-cycle test passed · Operators shown the controls and the E-stop. Document as if you will be the one who comes back.</p>\n<p><strong>Self-check:</strong> List the four parts of the documentation set and the handover checklist. If you can, you have this module and this course.</p>\n"
};
