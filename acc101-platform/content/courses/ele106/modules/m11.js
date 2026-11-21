// ele106 - Module 11: Reading Commercial Plans & Specs
module.exports = {
  "number": 11,
  "slug": "reading-commercial-plans-specs",
  "title": "Reading Commercial Plans & Specs",
  "estTime": "3–4 hours",
  "objectives": [
    "Read a commercial floor plan, riser diagram, and one-line diagram.",
    "Recognize commercial electrical symbols and schedules.",
    "Explain what a specification (spec) is and how it relates to the drawings.",
    "Use a panel schedule, a lighting schedule, and a fixture schedule.",
    "Explain submittals, RFIs, and change orders."
  ],
  "sections": [
    {
      "heading": "Commercial Drawings: More Than a Floor Plan",
      "html": "<p>A commercial plan set is bigger and more formal than a house plan set. It includes the architectural drawings, the structural drawings, the mechanical drawings, and the electrical drawings — and the electrical drawings include the floor plans, the riser diagram, the one-line diagram, the panel schedules, the lighting schedules, and the details. Each sheet has a title block, a legend, and a scale, and the sheets are numbered so that a reference on one sheet points to another.</p><p>The one-line diagram shows the power system as a single line: the service, the switchboard, the feeders, the panelboards, and the loads, with the voltage, the amperage, and the overcurrent device sizes marked. The riser diagram shows the same system vertically, floor by floor, so the electrician can see how the power gets from the service in the basement to the panel on the third floor.</p><p>The floor plans show the branch circuits: the receptacles, the switches, the luminaires, and the equipment, drawn on the architectural floor plan. The symbols are the same as in a house, with additions: a three-phase receptacle, a floor box, a poke-through, a wall pack, and the symbols for the special systems — fire alarm, data, and security.</p><div class=\"callout\"><strong>Key idea:</strong> A commercial plan set has floor plans, a one-line diagram, a riser diagram, schedules, and details. The one-line diagram is the power map; the riser diagram shows it floor by floor.</div>"
    },
    {
      "heading": "Schedules: Panel, Lighting, and Fixture",
      "html": "<p>A commercial plan set has schedules — tables that list the details the drawings cannot show. The panel schedule lists every circuit in a panelboard: the circuit number, the load, the wire size, the breaker size, and the phase. The lighting schedule lists every luminaire type: the fixture type, the lamp, the wattage, the voltage, and the quantity. The fixture schedule lists the plumbing fixtures and their electrical needs, such as a water heater or a pump.</p><p>The schedules are the working documents: the installer uses the panel schedule to land the branch circuits, the lighting schedule to order and install the fixtures, and the fixture schedule to size the circuits for the equipment. A schedule that is wrong — a circuit listed as 20 amperes that should be 30 — is a mistake that shows up at the inspection or at the first startup.</p><p>The schedules also show the demand load and the phase balance for each panelboard, so the electrician can see whether the phases are balanced before the circuits are landed. A balanced panelboard is a panelboard that uses its full rating, and the schedule is where the balance is checked.</p><ul><li>Panel schedule: every circuit by number, load, wire, breaker, and phase.</li><li>Lighting schedule: every luminaire type, lamp, wattage, voltage, and quantity.</li><li>Fixture schedule: plumbing fixtures and their electrical needs.</li></ul>"
    },
    {
      "heading": "Specifications: The Words Behind the Drawings",
      "html": "<p>The specifications — the specs — are the written part of the construction documents. They describe in words what the drawings show in lines: the materials, the workmanship, the testing, and the standards. A spec section for electrical work covers the raceways, the conductors, the panelboards, the devices, the lighting, and the testing, and it names the manufacturers and the models that are acceptable.</p><p>The specs can require more than the Code: the Code is the minimum, and the spec can ask for a higher standard — a larger wire size, a better device, a longer warranty. When the drawings and the specs disagree, the spec usually governs, and when the spec and the Code disagree, the Code governs — because the Code is the law and the spec is a contract.</p><p>The electrician must read the specs before bidding the job and before starting the work. A spec that requires a specific brand of panelboard, or a specific type of conduit, or a test that the Code does not require, is a cost and a schedule item — and missing it is a mistake that comes out of the contractor's pocket.</p><div class=\"callout\"><strong>Key idea:</strong> The specs are the written construction documents: materials, workmanship, testing, and standards. The Code is the minimum; the spec can ask for more. When they disagree, the Code governs.</div>"
    },
    {
      "heading": "Submittals, RFIs, and Change Orders",
      "html": "<p>A submittal is a document the contractor sends to the engineer for approval before ordering a product: the catalog pages, the ratings, and the data sheets for the panelboard, the luminaires, the devices, and the wire. The engineer checks the submittal against the specs and either approves it or rejects it. Nothing is ordered until the submittal is approved — and ordering an unapproved product is a mistake that can cost the job.</p><p>An RFI — a request for information — is a written question from the contractor to the engineer when the drawings or the specs are unclear, or when two documents disagree. The RFI is answered in writing, and the answer becomes part of the construction documents. A verbal answer is not enough: if it is not written down, it did not happen.</p><p>A change order is a written change to the work after the contract is signed: an added circuit, a moved panelboard, a different fixture. The change order states the change, the cost, and the schedule impact, and it must be approved before the work is done. Work done without a change order may not be paid for.</p><ul><li>Submittal: product data sent to the engineer for approval before ordering.</li><li>RFI: a written question when the documents are unclear or disagree — answered in writing.</li><li>Change order: a written, approved change to the work, with cost and schedule impact.</li></ul>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Commercial plan set: floor plans, one-line diagram, riser diagram, schedules, details — all numbered and cross-referenced.</li><li>Schedules: panel (every circuit), lighting (every luminaire type), fixture (plumbing fixtures and their electrical needs).</li><li>Specs: the written documents — materials, workmanship, testing, standards. The Code is the minimum; the spec can ask for more.</li><li>Submittals: product data approved before ordering. RFIs: written questions, answered in writing. Change orders: written, approved changes with cost and schedule impact.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Ordering a product before its submittal is approved. An unapproved product may be rejected — and the contractor pays to replace it.</div><div class=\"callout\"><strong>Common mistake:</strong> Acting on a verbal answer to an RFI. If it is not written down, it did not happen — and the inspector will go by the written documents.</div><p><strong>Ready-to-Work link:</strong> If you can read a one-line diagram, a panel schedule, and a spec section, and explain submittals, RFIs, and change orders, you have this module. Module 12 covers commercial rough-in, trim, and commissioning.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "One-line diagram",
      "def": "A single-line drawing of the power system: service, switchboard, feeders, panelboards, and loads."
    },
    {
      "term": "Riser diagram",
      "def": "A vertical schematic showing the power system floor by floor."
    },
    {
      "term": "Panel schedule",
      "def": "A table listing every circuit in a panelboard by number, load, wire, breaker, and phase."
    },
    {
      "term": "Lighting schedule",
      "def": "A table listing every luminaire type, lamp, wattage, voltage, and quantity."
    },
    {
      "term": "Fixture schedule",
      "def": "A table listing plumbing fixtures and their electrical needs."
    },
    {
      "term": "Specification (spec)",
      "def": "The written construction documents: materials, workmanship, testing, and standards."
    },
    {
      "term": "Submittal",
      "def": "Product data sent to the engineer for approval before ordering."
    },
    {
      "term": "RFI",
      "def": "Request for information — a written question when the documents are unclear or disagree."
    },
    {
      "term": "Change order",
      "def": "A written, approved change to the work, stating the cost and schedule impact."
    },
    {
      "term": "Title block",
      "def": "The block on a drawing giving the project, the sheet, the scale, and the revision."
    },
    {
      "term": "Legend",
      "def": "The key on a drawing that explains every symbol used."
    },
    {
      "term": "Floor box",
      "def": "A receptacle box installed in the floor, for power in the middle of a room."
    },
    {
      "term": "Poke-through",
      "def": "A device that brings power and data through a floor from the level below."
    }
  ],
  "video": {
    "title": "MASTERCLASS: How to read and interpret industrial electrical diagrams",
    "embedUrl": "https://www.youtube.com/embed/iEKMC1IGxTs",
    "note": "This masterclass teaches how to read and interpret industrial electrical diagrams — the one-line diagrams, the symbols, and the logic behind them. It is the best video in this course for this module: watch it, then read a panel schedule and a one-line diagram and explain what each part means.",
    "more": [
      {
        "title": "Why 3-Phase Is 400V in Europe but 480V or 208V in America?",
        "url": "https://www.youtube.com/watch?v=grffvmCzqcw"
      },
      {
        "title": "3 Phase Distribution Board Connection Diagram",
        "url": "https://www.youtube.com/watch?v=c1vTsixAdxQ"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A one-line diagram shows a 400-ampere service, a switchboard, and three 200-ampere panelboards. What does the diagram tell you?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The service is 400 amperes. Step 2: The switchboard distributes power to three panelboards. Step 3: Each panelboard is fed by a 200-ampere feeder — and the total of the panelboards (600 A) exceeds the service (400 A), which is normal because of demand factors.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A panel schedule lists circuit 14 as “Receptacles, Room 201, 12 AWG, 20 A, Phase B.” What does each part mean?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Circuit 14 serves the receptacles in Room 201. Step 2: It uses 12 AWG copper on a 20-ampere breaker. Step 3: It is connected to phase B of the panelboard.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> The drawings show EMT conduit, but the spec requires RMC in the same area. Which governs?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: When the drawings and the specs disagree, the spec usually governs. Step 2: RMC must be installed in that area. Step 3: The contractor should submit an RFI to confirm before ordering material.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A contractor wants to substitute a different brand of panelboard than the spec names. What must happen first?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The contractor must submit the substitute product's data as a submittal. Step 2: The engineer must approve it. Step 3: Nothing is ordered until the submittal is approved.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> The drawings show a panelboard in a corridor, but the corridor is too narrow for the required working clearance. What should the contractor do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Submit an RFI to the engineer, in writing. Step 2: Do not move the panelboard on a verbal answer. Step 3: The engineer will issue a written answer or a change order relocating the panelboard.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A lighting schedule lists 40 fixtures of type A2, 277 V, 40 watts each. What is the total lighting load for those fixtures?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 40 fixtures × 40 watts = 1,600 watts. Step 2: At 277 volts, the current is 1,600 ÷ 277 = 5.8 A. Step 3: The lighting load for type A2 is 1,600 VA.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A one-line diagram shows:",
      "choices": [
        "The floor plan of each room",
        "The power system as a single line: service, switchboard, feeders, panelboards, and loads",
        "The ceiling heights",
        "The furniture layout"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A one-line diagram is the power map. (a) Room layouts are on the floor plan. (c) Ceiling heights are in sections. (d) Furniture is not on an electrical drawing."
    },
    {
      "q": "A panel schedule lists:",
      "choices": [
        "Only the panel's price",
        "Every circuit by number, load, wire size, breaker size, and phase",
        "The homeowner's name",
        "The inspection dates"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The panel schedule lists every circuit in detail. (a) Price is not on the schedule. (c) The owner's name is in the title block. (d) Inspection dates are recorded separately."
    },
    {
      "q": "A lighting schedule lists:",
      "choices": [
        "Every circuit breaker",
        "Every luminaire type, lamp, wattage, voltage, and quantity",
        "The plumbing fixtures",
        "The change orders"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The lighting schedule lists the luminaire types. (a) Breakers are on the panel schedule. (c) Plumbing fixtures are on the fixture schedule. (d) Change orders are separate documents."
    },
    {
      "q": "When the drawings and the specs disagree:",
      "choices": [
        "The drawings always govern",
        "The spec usually governs",
        "The cheaper one governs",
        "Neither governs"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The spec usually governs over the drawings. (a) The drawings do not always govern. (c) Cost does not decide. (d) One of them governs."
    },
    {
      "q": "When the spec and the Code disagree:",
      "choices": [
        "The spec governs",
        "The Code governs",
        "The contractor decides",
        "The cheaper one governs"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The Code is the law and governs over the spec. (a) The spec is a contract, not the law. (c) The contractor does not decide. (d) Cost does not decide."
    },
    {
      "q": "A submittal is:",
      "choices": [
        "A bill for the work",
        "Product data sent to the engineer for approval before ordering",
        "A change to the contract",
        "A request for payment"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A submittal is product data for approval before ordering. (a) A bill is an invoice. (c) A change is a change order. (d) A request for payment is a pay application."
    },
    {
      "q": "An RFI is:",
      "choices": [
        "A written question when the documents are unclear or disagree",
        "A verbal order",
        "A bill",
        "A test report"
      ],
      "answer": 0,
      "explanation": "Correct: (a). An RFI is a written question, answered in writing. (b) A verbal order is not an RFI. (c) A bill is an invoice. (d) A test report is a different document."
    },
    {
      "q": "A change order must be:",
      "choices": [
        "Verbal",
        "Written and approved before the work is done",
        "Decided after the work is done",
        "Ignored"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A change order is written and approved before the work. (a) A verbal change is not a change order. (c) Deciding after the work risks not being paid. (d) Ignoring it is not an option."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Commercial Plans &amp; Specs: Quick Reference</h3>\n<p><strong>Core idea:</strong> Commercial work follows engineered documents: drawings, schedules, and specs. Read them all before touching a wire.</p>\n<p><strong>Drawings:</strong> One-line diagram = power map · riser diagram = power floor by floor · floor plans = branch circuits.</p>\n<p><strong>Schedules:</strong> Panel (every circuit) · lighting (every luminaire type) · fixture (plumbing fixtures and their electrical needs).</p>\n<p><strong>Specs:</strong> Written documents — materials, workmanship, testing, standards. Code is the minimum; spec can ask for more. Code governs over spec; spec usually governs over drawings.</p>\n<p><strong>Paperwork:</strong> Submittal (approve before ordering) · RFI (written question, written answer) · change order (written, approved, with cost and schedule).</p>\n<p><strong>Self-check:</strong> Explain a one-line diagram, a panel schedule, and what happens when the drawings and the specs disagree.</p>\n"
};
