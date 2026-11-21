// con109 - Module 2: Reading Mechanical Plans & Coordination Drawings
module.exports = {
  "number": 2,
  "slug": "reading-mechanical-plans-coordination-drawings",
  "title": "Reading Mechanical Plans & Coordination Drawings",
  "estTime": "3–4 hours",
  "objectives": [
    "Read the symbols on HVAC, plumbing, and electrical plans.",
    "Explain what a coordination drawing shows that a single-trade plan does not.",
    "Find clashes between systems on the plans before they happen on site.",
    "Explain schedules: equipment, fixture, and panel schedules.",
    "Explain how revisions and RFIs keep the plans current."
  ],
  "sections": [
    {
      "heading": "Three Plans, One Building",
      "html": "<p>A house has a plan set, and the mechanical systems have their own sheets in it. The HVAC plan shows the equipment, the duct runs and sizes, the registers, and the thermostat. The plumbing plan shows the fixtures, the water and drain piping, the vent stacks, and the water heater. The electrical plan shows the panel, the circuits, the receptacles, switches, and lights, and the home runs back to the panel.</p>\n<p>Each plan uses symbols: a duct is shown as two parallel lines with its size written on it, a pipe is a line with a label for its size and material, a receptacle is a small circle with two lines, a switch is an S on the wall. The legend on each sheet explains its symbols, and the builder reads the legend before reading the plan.</p>\n<p>The plans also carry notes and schedules. A note might say the furnace is a specific model, or that the water heater is in the garage. The schedules list the equipment and fixtures by name, size, and location. The builder checks the schedules against the deliveries: the furnace that arrives must be the furnace on the schedule.</p>"
    },
    {
      "heading": "Coordination Drawings: All Three at Once",
      "html": "<p>A coordination drawing overlays the three systems on one sheet — or in one 3D model — so the builder can see where they share space. The duct that crosses the joists, the drain that runs below it, and the wires that thread around both are all visible at once, in the same ceiling or wall.</p>\n<p>The point of the overlay is to find clashes: a duct and a drain that want the same joist bay, a recessed light that lands on a duct, a vent stack that lands where a window goes. Each clash is marked, and the trades agree on a fix before anyone cuts or drills anything.</p>\n<p>On small houses the coordination drawing is a hand-marked overlay on the plans, done at a meeting with the three trades. On big jobs it is a 3D model built in software, with clash detection that flags every overlap. Either way, the product is the same: a set of agreed routes that everyone builds to.</p>"
    },
    {
      "heading": "Schedules: Equipment, Fixture, Panel",
      "html": "<p>The equipment schedule lists the HVAC equipment: furnace or heat pump model, size in BTUs or tons, efficiency, and location. The fixture schedule lists every plumbing fixture: toilet, sink, tub, shower, and dishwasher, with its model and its rough-in dimensions. The panel schedule lists every electrical circuit: what it serves, its breaker size, and its wire size.</p>\n<p>The builder uses the schedules to check deliveries and to plan space. A furnace that is bigger than the schedule says needs a bigger return and a bigger chase. A panel with more circuits than the schedule shows needs a bigger panel. The schedule is the order list, and the order must match it.</p>\n<p>The schedules also set the rough-in dimensions the builder must protect: the toilet rough-in is 12 inches from the finished wall to the flange center, the lavatory drain is 18 inches above the finished floor, the shower valve is about 42 inches above the floor. Those numbers are the plumber's, but the builder must not let another trade's work move them.</p>"
    },
    {
      "heading": "Revisions and RFIs",
      "html": "<p>Plans change. An owner moves a wall, a supplier substitutes a furnace, an inspector asks for a change — and each change is issued as a revision, with a new date and a cloud around the changed area. The builder's job is to make sure everyone is building from the current revision, not last week's.</p>\n<p>When the plans are unclear or two sheets disagree, the builder writes an RFI — a request for information — to the designer. The RFI asks a specific question and gets a specific written answer, which becomes part of the record. Verbal answers are forgotten; written answers are buildable.</p>\n<p>The rule is simple: no one builds from a superseded sheet, and no one builds from a guess. If the plan is wrong, it is revised. If the plan is unclear, an RFI clears it up. The builder who lets a trade build from an old sheet owns the rework that follows.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Three plans: HVAC (equipment, ducts, registers), plumbing (fixtures, pipes, vents), electrical (panel, circuits, devices) — each with its own legend.</li><li>Coordination drawing overlays all three to find clashes before they happen on site.</li><li>Schedules list equipment, fixtures, and circuits; check deliveries and rough-in dimensions against them.</li><li>Revisions are dated and clouded; RFIs get written answers; nobody builds from an old sheet or a guess.</li></ul><p><strong>Common mistake:</strong> Reading one trade's plan at a time. A duct and a drain that each look fine alone can collide in the same joist bay. Read the plans together, or overlay them, and find the clash on paper.</p>\n<p>Another common mistake is building from a superseded revision. One old sheet in a trade's hands can undo a week's coordination. Check the revision date on every sheet, every time.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> The plans are the coordination. Read all three together, find the clashes on paper, and build from the current revision only.</div></p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Mechanical plan",
      "def": "The drawings showing HVAC, plumbing, and electrical layouts, equipment, and routes."
    },
    {
      "term": "Coordination drawing",
      "def": "A drawing overlaying all three systems on one sheet to find clashes before construction."
    },
    {
      "term": "Clash",
      "def": "A place where two systems want the same space in a building."
    },
    {
      "term": "Legend",
      "def": "The key on a plan sheet that explains its symbols."
    },
    {
      "term": "Equipment schedule",
      "def": "The list of HVAC equipment with model, size, and location."
    },
    {
      "term": "Fixture schedule",
      "def": "The list of plumbing fixtures with model and rough-in dimensions."
    },
    {
      "term": "Panel schedule",
      "def": "The list of electrical circuits with what they serve, breaker size, and wire size."
    },
    {
      "term": "Rough-in dimension",
      "def": "The measurement that sets where a fixture's pipes or wires land, such as 12 in for a toilet flange."
    },
    {
      "term": "Revision",
      "def": "A dated, clouded change to the plans; only the current revision is buildable."
    },
    {
      "term": "RFI",
      "def": "Request for information — a written question to the designer that gets a written, buildable answer."
    },
    {
      "term": "Home run",
      "def": "A wire or pipe run directly from a device back to the panel or main."
    },
    {
      "term": "Register",
      "def": "The grille where conditioned air enters a room from a duct."
    },
    {
      "term": "Vent stack",
      "def": "The vertical pipe that vents a drain system through the roof."
    },
    {
      "term": "BTU",
      "def": "British thermal unit — a measure of heat; HVAC equipment is sized in BTUs."
    },
    {
      "term": "Ton",
      "def": "A unit of cooling capacity; one ton equals 12,000 BTU per hour."
    }
  ],
  "video": {
    "title": "How Do You Wire a Wall Full of Glass and Steel? | Modern Home Electrical Rough-In",
    "embedUrl": "https://www.youtube.com/embed/cW4SA4K5XJc",
    "note": "A modern-home electrical rough-in in difficult framing: steel, glass walls, solar, battery backup, and smart panels. Watch how the electrician routes around the structure instead of through it — that is coordination in the field.",
    "more": [
      {
        "title": "Electrical Rough-In Material List",
        "url": "https://www.youtube.com/watch?v=GRCqEDDWOH8"
      },
      {
        "title": "What is Electrical Rough-In?",
        "url": "https://www.youtube.com/watch?v=SNKFK4kLMNY"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A duct and a drain both want the same joist bay on the plans. What is this called, and when should it be found?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It is a clash. Step 2: It should be found on the coordination drawing, before anyone cuts or drills anything on site.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The plumbing plan and the electrical plan disagree about where a wall goes. What do you do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Do not guess — write an RFI to the designer. Step 2: Build only from the written answer, which becomes part of the record.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A furnace arrives that is bigger than the one on the equipment schedule. What do you check?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check the return air size, the chase, and the clearances — a bigger furnace needs bigger everything. Step 2: Do not install it until the designer confirms it fits the plan.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A toilet rough-in is 12 in from the finished wall to the flange center. A framer moves the wall 1 in. What happens to the toilet?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The rough-in becomes 11 in or 13 in, and the toilet will not sit right against the wall. Step 2: The wall must go back, or the flange must move — the rough-in dimension is the plumber's, and the builder must protect it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A trade is building from a plan sheet dated two revisions ago. What do you do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Stop the work. Step 2: Give them the current revision and check what they already built against it — building from an old sheet owns the rework.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> List three things the panel schedule tells the builder.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: What each circuit serves. Step 2: Its breaker size. Step 3: Its wire size — together they set the panel size and the home runs the electrician must pull.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A coordination drawing is useful because it:",
      "choices": [
        "Shows one trade's work in detail",
        "Overlays all three systems so clashes can be found before construction",
        "Replaces the building permit",
        "Shows the paint colors"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Overlaying the systems reveals where they collide. (a) A single-trade plan shows one system only. (c) A drawing is not a permit. (d) Paint colors are on the finish schedule."
    },
    {
      "q": "A clash is:",
      "choices": [
        "A broken tool",
        "A place where two systems want the same space",
        "A failed inspection",
        "A loud noise"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A clash is a space conflict between systems. (a) A broken tool is a tool problem. (c) A failed inspection is a code problem. (d) Noise is not a plan term."
    },
    {
      "q": "An RFI is:",
      "choices": [
        "A request for information — a written question to the designer with a written answer",
        "A type of duct",
        "A kind of inspection",
        "A verbal guess"
      ],
      "answer": 0,
      "explanation": "Correct: (a). An RFI gets a specific written answer that becomes part of the record. (b) A duct is a physical part. (c) An inspection is a site check. (d) Verbal guesses are exactly what an RFI replaces."
    },
    {
      "q": "The toilet rough-in dimension is usually:",
      "choices": [
        "10 in from the finished wall",
        "12 in from the finished wall to the flange center",
        "18 in from the finished wall",
        "24 in from the finished wall"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 12 in from the finished wall to the flange center is standard. (a) 10 in is a different rough-in for some toilets. (c) 18 in is the lavatory drain height. (d) 24 in is far too much."
    },
    {
      "q": "The equipment schedule lists:",
      "choices": [
        "Paint colors",
        "HVAC equipment with model, size, and location",
        "The owner's name",
        "The lumber order"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The equipment schedule lists HVAC equipment by model and size. (a) Paint is on the finish schedule. (c) The owner's name is on the contract. (d) Lumber is on the framing order."
    },
    {
      "q": "A revision on a plan is shown with:",
      "choices": [
        "A red pen",
        "A date and a cloud around the changed area",
        "A phone call",
        "Nothing — revisions are verbal"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Revisions are dated and clouded so everyone can see what changed. (a) A red pen mark is not a formal revision. (c) A phone call is not a plan revision. (d) Verbal revisions are not buildable."
    },
    {
      "q": "The panel schedule tells the builder:",
      "choices": [
        "What each circuit serves, its breaker size, and its wire size",
        "The duct sizes",
        "The pipe sizes",
        "The paint colors"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The panel schedule lists circuits, breakers, and wire sizes. (b) Duct sizes are on the HVAC plan. (c) Pipe sizes are on the plumbing plan. (d) Paint is on the finish schedule."
    },
    {
      "q": "Reading one trade's plan at a time is a mistake because:",
      "choices": [
        "It takes too long",
        "Systems that look fine alone can collide in the same space",
        "The legend is confusing",
        "The plans are too big"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Clashes only show when the plans are read together. (a) Time is not the issue — missed clashes are. (c) The legend explains the symbols. (d) Plan size is not the problem."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Reading Mechanical Plans & Coordination Drawings: Quick Reference</h3>\n<p><strong>Core idea:</strong> The plans are the coordination. Read all three together, find the clashes on paper, and build from the current revision only.</p>\n<p><strong>Plans:</strong> HVAC (equipment, ducts, registers) · Plumbing (fixtures, pipes, vents) · Electrical (panel, circuits, devices). Each has a legend — read it first.</p>\n<p><strong>Coordination drawing:</strong> All three systems overlaid; clashes marked and fixed before anyone cuts or drills.</p>\n<p><strong>Schedules:</strong> Equipment (HVAC model/size) · Fixture (plumbing rough-ins) · Panel (circuits, breakers, wire sizes). Check deliveries against them.</p>\n<p><strong>Key dimensions:</strong> Toilet rough-in 12 in from finished wall · Lavatory drain 18 in above floor · Shower valve ~42 in above floor.</p>\n<p><strong>Changes:</strong> Revisions are dated and clouded; RFIs get written answers; nobody builds from an old sheet or a guess.</p>\n<p><strong>Self-check:</strong> A duct and a drain want the same joist bay — what is it, and when should it be found? (A clash, found on the coordination drawing before construction.)</p>\n"
};
