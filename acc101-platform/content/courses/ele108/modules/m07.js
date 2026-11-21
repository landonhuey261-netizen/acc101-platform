// ele108 - Module 7: Ladder Diagrams: Reading & Drawing
module.exports = {
  "number": 7,
  "slug": "ladder-diagrams-reading-drawing",
  "title": "Ladder Diagrams: Reading & Drawing",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the structure of a ladder diagram: rails, rungs, and the left-to-right logic.",
    "Read standard ladder symbols for push buttons, contacts, coils, and timers.",
    "Trace a start-stop circuit on a ladder diagram and explain what each rung does.",
    "Explain rung numbering, wire numbering, and cross-referencing.",
    "Draw a ladder diagram for a two-motor sequence from a written description."
  ],
  "sections": [
    {
      "heading": "The Ladder: Rails, Rungs, and Logic",
      "html": "<p>A <strong>ladder diagram</strong> is the standard language of motor control. It is drawn as a ladder: two vertical <strong>rails</strong> (the power rails, usually L1 on the left and L2 or neutral on the right) with horizontal <strong>rungs</strong> between them. Each rung is one logical path — a set of contacts in series or parallel that controls one coil or output. Power flows from the left rail to the right rail, and a rung is \"true\" (its coil energizes) only when there is a complete path of closed contacts from left to right. Read a ladder diagram the way you read a sentence: left to right, rung by rung, top to bottom.</p>\n<p>The ladder diagram is a logic drawing, not a wiring drawing. It shows what the circuit does, not where the wires run or what the devices look like. A push button appears as its contact symbol, a contactor coil as a circle, and the physical locations of the devices do not matter to the diagram. That abstraction is its strength: a technician can understand a whole machine's logic from the ladder diagram alone, and a PLC program is written in the same ladder language (Electrical 109, Module 4). The wiring diagram, which shows the actual wires and terminals, is a different document for a different job.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A ladder diagram is logic, not wiring. Left rail to right rail, rung by rung, top to bottom — a rung is true when there is a complete path of closed contacts across it.</div>"
    },
    {
      "heading": "The Symbols You Must Know",
      "html": "<p>Ladder symbols are simple and few. A <strong>normally open contact</strong> is two short parallel lines with a gap; a <strong>normally closed contact</strong> is the same two lines with a diagonal slash through them. A <strong>coil</strong> is a circle (or a pair of parentheses in PLC ladder). A <strong>push button</strong> is drawn as its contact: a start button is an NO contact, a stop button is an NC contact. A <strong>timer coil</strong> is a circle with a T or TR marking, and its contacts carry the TO/TC markings from Module 6. An <strong>overload contact</strong> is an NC contact marked OL. A <strong>limit switch</strong> is a contact with a small lever symbol, and a <strong>pilot light</strong> is a circle with a letter inside it (R for red, G for green, A for amber).</p>\n<p>The trick to reading symbols is to remember that every contact is drawn in its rest state — de-energized, unpressed, unoperated. An NO contact on the diagram is open until its coil energizes or its button is pressed. A limit switch drawn NC is closed until the machine part hits it. When you trace a rung, ask of each contact: \"Is this device operated right now?\" If it is, an NO contact is closed and an NC contact is open. That one question, asked contact by contact, is how you read any ladder diagram.</p>"
    },
    {
      "heading": "Tracing the Start-Stop Circuit on a Ladder",
      "html": "<p>On a ladder diagram, the three-wire start-stop circuit is one rung: from the left rail, through the stop button (NC), then through two parallel branches — the start button (NO) and the sealing contact (NO) — then through the overload contact (NC), and then through the contactor coil to the right rail. Trace it in the two states that matter. At rest, the stop button is closed, the start button is open, the sealing contact is open, and the overload contact is closed — no path, coil off. Press start: the start button closes, the path completes, the coil energizes, the main contacts close, and the sealing contact closes. Release start: the sealing contact now provides the path, so the coil stays on. Press stop: the stop contact opens, the path breaks, the coil drops out, and the sealing contact opens.</p>\n<p>Every rung after the first follows the same logic. A second rung might run the green pilot light through an NO auxiliary contact of the contactor, so the light is on whenever the motor runs. A third rung might run a red pilot light through an NC auxiliary contact, so it is on whenever the motor is stopped. The ladder grows rung by rung as the machine's logic grows, and each rung is independent — a fault on one rung does not hide the logic of the others, which is why ladder diagrams are so much easier to troubleshoot than a tangle of wires.</p>"
    },
    {
      "heading": "Rung Numbers, Wire Numbers & Cross-References",
      "html": "<p>Real ladder diagrams have numbering that lets you find things. Each rung is numbered, usually down the left side, and the numbers are used in conversation (\"the fault is on rung 12\") and in the panel documentation. <strong>Wire numbers</strong> identify each conductor: every wire that connects two points carries a number, and the same number appears at both ends of the wire and on the wiring diagram, so a technician can follow a wire from the diagram to the panel and back. A coil's auxiliary contacts are often drawn on other rungs, and a <strong>cross-reference</strong> next to the coil lists the rungs where its contacts appear — so you can find the sealing contact on rung 1 by looking at the cross-reference under the coil on rung 1, or the reverse.</p>\n<p>The drawing conventions are worth learning because they are universal across manufacturers: the control power source and its protection are at the top of the ladder, the rungs run in the order the machine operates, and the outputs (coils, lights, solenoids) are on the right side of each rung, next to the right rail. Inputs (buttons, switches, contacts) are on the left and middle. When you draw a ladder diagram of your own, follow the same conventions — the next person to read it will thank you, and that person may be you in six months.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Drawing a ladder diagram with the coil in the middle of the rung and contacts on both sides of it. Coils go on the right, next to the right rail; contacts go on the left and middle. A coil in the middle breaks the left-to-right reading and confuses everyone who follows.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>A ladder diagram is logic, not wiring: two power rails, horizontal rungs, read left to right, top to bottom.</li>\n<li>Symbols: NO contact (two lines), NC contact (two lines with a slash), coil (circle), timer coil (circle with T), overload contact (NC, marked OL).</li>\n<li>Every contact is drawn in its rest state. To trace a rung, ask of each contact: \"Is this device operated right now?\"</li>\n<li>The start-stop circuit is one rung: stop (NC), start (NO) in parallel with the sealing contact (NO), overload (NC), coil.</li>\n<li>Rung numbers, wire numbers, and cross-references let you find a contact or a wire in the panel and in the documentation.</li>\n<li>Coils go on the right next to the right rail; contacts go on the left and middle.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Confusing a ladder diagram with a wiring diagram. The ladder shows logic; the wiring diagram shows actual wires and terminals. Use the ladder to understand what the machine should do, and the wiring diagram to find where the wires actually run.</div>\n<p><strong>Ready-to-Work link:</strong> If you can trace the start-stop rung in both states and explain rung and wire numbering, you have this module. Module 8 covers motor starters.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Ladder diagram", "def": "The standard logic drawing for motor control: two power rails with horizontal rungs of contacts and coils." },
    { "term": "Rail", "def": "The vertical lines of a ladder diagram representing the control power supply." },
    { "term": "Rung", "def": "One horizontal logic path in a ladder diagram, controlling one coil or output." },
    { "term": "NO contact symbol", "def": "Two short parallel lines with a gap; closed when its device operates." },
    { "term": "NC contact symbol", "def": "Two parallel lines with a diagonal slash; open when its device operates." },
    { "term": "Coil symbol", "def": "A circle in a ladder diagram representing a contactor, relay, or timer coil." },
    { "term": "Rung number", "def": "The number of a rung, used to locate logic in the diagram and in conversation." },
    { "term": "Wire number", "def": "The number on a conductor, the same at both ends, linking the ladder diagram to the wiring diagram." },
    { "term": "Cross-reference", "def": "A note by a coil listing the rungs where its contacts appear." },
    { "term": "Wiring diagram", "def": "A drawing showing the actual wires, terminals, and physical layout, as distinct from the logic ladder." },
    { "term": "Rest state", "def": "The state of a contact when its device is de-energized, unpressed, or unoperated — how it is drawn." },
    { "term": "Output", "def": "A coil, light, or solenoid on the right side of a rung — the thing the rung controls." },
    { "term": "Input", "def": "A button, switch, or contact on the left side of a rung — the condition the rung depends on." },
    { "term": "Schematic", "def": "A diagram showing how a circuit works, using symbols rather than physical layout." }
  ],
  "video": {
    "title": "Read ladder diagrams like a pro in 10 minutes",
    "embedUrl": "https://www.youtube.com/embed/UyvAvJGWHy0",
    "note": "A fast, practical guide to reading ladder diagrams — the rails, the rungs, the symbols, and how to trace a rung from left to right. Watch it once, then trace the start-stop rung in this module yourself.",
    "more": [
      { "title": "Introduction to Ladder Logic with Relays", "url": "https://www.youtube.com/watch?v=2yY3b350mhw" },
      { "title": "Ladder Diagrams Explained | Switches, Motors & Controls (Red Seal Exam Prep)", "url": "https://www.youtube.com/watch?v=Rup0pmaLemA" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A ladder rung has, from left to right: an NC stop contact, an NO start contact, an NC overload contact, and a coil. The start button is pressed. Is the coil energized? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The stop contact is NC and unpressed, so it is closed. Step 2: The start contact is NO and pressed, so it is closed. Step 3: The overload contact is NC and not tripped, so it is closed. Step 4: There is a complete path left to right, so the coil is energized.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> On the same rung, the overload trips while the motor is running. What happens to the rung, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The overload's NC contact opens when it trips. Step 2: The path from left to right is broken. Step 3: The coil drops out, the contactor opens, and the motor stops — and the sealing contact opens too, so the motor cannot restart until the overload is reset and start is pressed.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A rung controls a green pilot light. It should be on whenever the motor is running. Which contact do you use, and where does it come from?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Use an NO auxiliary contact of the motor's contactor. Step 2: When the contactor pulls in, the NO contact closes and completes the rung to the light. Step 3: When the motor stops, the contact opens and the light goes out.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A red pilot light should be on whenever the motor is stopped. Which contact do you use?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Use an NC auxiliary contact of the motor's contactor. Step 2: When the contactor is out, the NC contact is closed and the light is on. Step 3: When the contactor pulls in, the NC contact opens and the light goes out.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A ladder diagram shows a contact drawn with a diagonal slash through it, wired in series with a coil. The device that operates it is a limit switch on a machine guard. When the guard is closed, is the coil energized?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The slash means the contact is NC — closed at rest. Step 2: The guard closed operates the limit switch, which opens the NC contact. Step 3: The rung is broken, so the coil is de-energized when the guard is closed — this would be the wrong contact choice for a guard that must allow running when closed; an NO contact is what is wanted here.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why is a ladder diagram better than a wiring diagram for understanding what a machine's control logic does?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The ladder shows logic — which contacts must close for each coil to energize — in a clean left-to-right order. Step 2: A wiring diagram shows physical wires and terminals, which hides the logic in a tangle of lines. Step 3: For troubleshooting a logic fault, the ladder tells you what should happen; the wiring diagram tells you where to measure it.</p>"
    }
  ],
  "quiz": [
    {
      "q": "In a ladder diagram, power flows:",
      "choices": ["From the right rail to the left rail", "From the left rail to the right rail, rung by rung", "From the bottom to the top", "In a circle"],
      "answer": 1,
      "explanation": "Correct: (b). Left rail to right rail, top to bottom. (a) The flow is left to right, not right to left. (c) Rungs are read top to bottom, not bottom to top. (d) There is no circular flow in a ladder."
    },
    {
      "q": "A normally closed contact is drawn as:",
      "choices": ["Two parallel lines", "Two parallel lines with a diagonal slash", "A circle", "A triangle"],
      "answer": 1,
      "explanation": "Correct: (b). The slash marks the NC contact. (a) Two plain lines are an NO contact. (c) A circle is a coil. (d) A triangle is not a ladder contact symbol."
    },
    {
      "q": "Every contact in a ladder diagram is drawn in its:",
      "choices": ["Energized state", "Rest state — de-energized, unpressed, unoperated", "Failed state", "Most common state"],
      "answer": 1,
      "explanation": "Correct: (b). Contacts are drawn at rest. (a) Energized state is not the drawing convention. (c) Failed state is not drawn. (d) Most common state is not the rule — rest state is."
    },
    {
      "q": "In the start-stop rung, the sealing contact is drawn:",
      "choices": ["In series with the start button", "In parallel with the start button", "In series with the coil only", "On a separate ladder"],
      "answer": 1,
      "explanation": "Correct: (b). Parallel with the start button, so it holds the coil in. (a) In series it would do nothing. (c) It is in the same rung as the coil. (d) It is on the same rung."
    },
    {
      "q": "A coil in a ladder diagram is drawn:",
      "choices": ["On the left, next to the left rail", "On the right, next to the right rail", "In the middle of the rung", "Above the rails"],
      "answer": 1,
      "explanation": "Correct: (b). Coils go on the right, next to the right rail. (a) The left side holds the input contacts. (c) A coil in the middle breaks the left-to-right reading. (d) Nothing is drawn above the rails."
    },
    {
      "q": "Wire numbers are used to:",
      "choices": ["Decorate the diagram", "Identify each conductor at both ends, linking the ladder to the wiring diagram", "Count the rungs", "Set the timer delay"],
      "answer": 1,
      "explanation": "Correct: (b). The same number at both ends of a wire lets you follow it. (a) They are functional, not decorative. (c) Rungs have their own numbers. (d) Timer delays are set on the timer dial."
    },
    {
      "q": "A green pilot light that should be on when the motor runs is wired through:",
      "choices": ["An NC auxiliary contact of the contactor", "An NO auxiliary contact of the contactor", "The overload heater", "The main breaker"],
      "answer": 1,
      "explanation": "Correct: (b). The NO contact closes when the contactor pulls in. (a) An NC contact would light the lamp when the motor is stopped. (c) The heater is in the power circuit. (d) The breaker is common to everything."
    },
    {
      "q": "A ladder diagram differs from a wiring diagram in that the ladder shows:",
      "choices": ["The physical wires and terminals", "The logic — what must be true for each coil to energize", "The color of the panel", "The motor's nameplate data"],
      "answer": 1,
      "explanation": "Correct: (b). The ladder is a logic drawing. (a) That is the wiring diagram. (c) Panel color is irrelevant. (d) Nameplate data is on the motor."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Ladder Diagrams: Quick Reference</h3>\n<p><strong>Core idea:</strong> A ladder diagram is logic, not wiring. Left rail to right rail, rung by rung, top to bottom.</p>\n<p><strong>Symbols:</strong> NO contact (two lines) · NC contact (two lines with a slash) · Coil (circle) · Timer coil (circle with T) · Overload contact (NC, marked OL).</p>\n<p><strong>Rest state:</strong> Every contact is drawn de-energized, unpressed, unoperated. To trace a rung, ask: \"Is this device operated right now?\"</p>\n<p><strong>Start-stop rung:</strong> Stop (NC) → Start (NO) in parallel with the sealing contact (NO) → Overload (NC) → Coil.</p>\n<p><strong>Numbering:</strong> Rung numbers, wire numbers, and cross-references link the ladder to the panel and the wiring diagram.</p>\n<p><strong>Self-check:</strong> Trace the start-stop rung in both states and explain rung and wire numbering. If you can, you have this module.</p>\n"
};
