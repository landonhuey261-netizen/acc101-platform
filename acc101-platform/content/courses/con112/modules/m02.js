// con112 - Module 2: Reading Drawings and Specs for Takeoff
module.exports = {
  "number": 2,
  "slug": "reading-drawings-and-specs-for-takeoff",
  "title": "Reading Drawings and Specs for Takeoff",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the parts of a construction drawing set: plans, elevations, sections, details, and schedules.",
    "Describe what specifications are and how they work with the drawings.",
    "Explain CSI MasterFormat divisions and how they organize a takeoff.",
    "Describe how to read a scale, check dimensions, and find the information a takeoff needs.",
    "Explain addenda, revisions, and why the estimator must use the latest set."
  ],
  "sections": [
    {
      "heading": "The Drawing Set",
      "html": "<p>A construction drawing set is the instruction manual for the building, drawn to scale. The <strong>floor plans</strong> show the building from above, room by room, with walls, doors, windows, and dimensions. The <strong>elevations</strong> show the building from the outside, wall by wall, with heights and finishes. The <strong>sections</strong> cut through the building to show how floors, walls, and roofs connect. The <strong>details</strong> zoom in on the tricky parts — a footing, a window head, a roof edge — at a larger scale. And the <strong>schedules</strong> are tables: door schedules, window schedules, finish schedules, listing every item of a type and its properties.</p>\n<p>Each sheet has a title block with the project name, the sheet number, the scale, and the revision. The estimator reads the set in order: the site plan first for the big picture, then the floor plans, then the sections and details, then the schedules. Reading in order prevents the most common takeoff error — measuring a detail before understanding the building it belongs to.</p>\n<p>Drawings are drawn to scale, and the estimator measures with a scale ruler or with takeoff software. But the dimensions written on the drawing always win over a measurement from the paper: paper stretches, prints scale wrong, and a dimension is the designer's word. When a dimension and a scaled measurement disagree, the dimension is right and the measurement is wrong.</p>\n"
    },
    {
      "heading": "Specifications: The Written Half",
      "html": "<p>Drawings show what and where; <strong>specifications</strong> say how well and with what. The specs are the written part of the contract documents, organized by CSI MasterFormat divisions, and they describe the materials, the quality, the testing, and the workmanship for every part of the job. A drawing may show a wall; the spec says what the wall is made of, how it is built, and what standard it must meet.</p>\n<p>The estimator reads the specs because the specs decide the price. A drawing that shows 'concrete' does not say whether it is 3,000 PSI or 5,000 PSI, whether it has air entrainment, or what finish it needs — the spec says all of that, and each choice changes the price. An estimator who prices from the drawings alone is pricing a guess.</p>\n<p>When the drawings and the specs disagree, the specs usually win — but the disagreement itself is a problem to report, not to guess at. The estimator notes the conflict and asks the question during bidding, because the answer changes the price. A question asked before the bid is free; a conflict discovered during construction is expensive.</p>\n"
    },
    {
      "heading": "CSI MasterFormat",
      "html": "<p><strong>CSI MasterFormat</strong> is the filing system for construction information, used across the United States. It divides the work into numbered divisions: Division 01 is General Requirements, Division 03 is Concrete, Division 05 is Metals, Division 06 is Wood and Plastics, Division 07 is Thermal and Moisture Protection, Division 09 is Finishes, Division 22 is Plumbing, Division 23 is HVAC, Division 26 is Electrical, and so on through Division 48. Each division breaks into sections — 03 30 00 is Cast-in-Place Concrete, 06 10 00 is Rough Carpentry.</p>\n<p>The estimator organizes the takeoff by division, because the divisions match how the work is bought and built: concrete from the concrete supplier, lumber from the lumberyard, finishes from the finish subcontractor. A takeoff organized by division can be priced division by division, checked division by division, and handed to a subcontractor division by division.</p>\n<p>The divisions also keep the estimator from missing a whole trade. A takeoff that works down the division list — 01, 02, 03, 05, 06, 07, 09, and so on — cannot forget the insulation or the sealant, because the list reminds them. A takeoff that wanders through the drawings at random will forget something.</p>\n"
    },
    {
      "heading": "Scale, Dimensions, and Revisions",
      "html": "<p>A drawing's scale is written in the title block: 1/4 inch = 1 foot is the common scale for floor plans, 1/8 inch = 1 foot for larger buildings, 3/4 inch = 1 foot for details. The estimator measures with a scale ruler matched to the drawing's scale, or with software calibrated to it. Measuring with the wrong scale is the classic beginner error, and it is caught by checking a known dimension — a door that should be 3 feet wide — against the ruler before measuring anything.</p>\n<p>Dimensions on the drawing are the authority. Overall dimensions give the building's size; string dimensions give the parts; and the parts must add up to the overall — if they do not, something is wrong, and the estimator asks. A dimension that does not add up is a drawing error, and a drawing error caught before the bid is free; caught during construction, it is a change order.</p>\n<p><strong>Addenda</strong> and <strong>revisions</strong> change the drawings during bidding, and the estimator must use the latest set. An addendum is a change issued before the bid; a revision is a change after. The estimator keeps a log of every addendum received, checks that the takeoff reflects them, and never prices from a superseded sheet. Pricing from an old drawing is pricing the wrong building.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> The drawing set is plans, elevations, sections, details, and schedules; the specs are the written half that decides materials and quality. CSI MasterFormat divisions organize the takeoff by trade. Dimensions win over scaled measurements; the parts must add up to the overall. Addenda and revisions must be tracked — always price from the latest set.</p>\n<p><strong>Common mistake:</strong> Measuring from the paper instead of using the written dimensions. Paper stretches and prints scale wrong — the dimension is the designer's word and it wins.</p>\n<p><strong>Common mistake:</strong> Pricing from the drawings alone and ignoring the specs. The specs decide the material and the quality, and each choice changes the price.</p>\n<p><strong>Ready-to-Work link:</strong> If you can name the parts of a drawing set, explain CSI MasterFormat, and say why dimensions beat measurements, you have this module. Module 3 covers quantity takeoff for foundations and concrete.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Floor plan",
      "def": "A drawing showing a building from above, room by room, with walls, doors, windows, and dimensions."
    },
    {
      "term": "Elevation",
      "def": "A drawing showing a building from the outside, wall by wall, with heights and finishes."
    },
    {
      "term": "Section",
      "def": "A drawing that cuts through a building to show how floors, walls, and roofs connect."
    },
    {
      "term": "Detail",
      "def": "A large-scale drawing of a tricky part — a footing, a window head, a roof edge."
    },
    {
      "term": "Schedule",
      "def": "A table listing every item of a type — doors, windows, finishes — and its properties."
    },
    {
      "term": "Specification",
      "def": "The written contract documents describing materials, quality, testing, and workmanship."
    },
    {
      "term": "CSI MasterFormat",
      "def": "The standard filing system for construction information, dividing work into numbered divisions."
    },
    {
      "term": "Division",
      "def": "A MasterFormat group — for example, Division 03 is Concrete, Division 06 is Wood and Plastics."
    },
    {
      "term": "Scale",
      "def": "The ratio of a drawing to the real building, such as 1/4 inch = 1 foot."
    },
    {
      "term": "Scale ruler",
      "def": "A ruler with several scales for measuring drawings at their printed scale."
    },
    {
      "term": "Dimension",
      "def": "A written measurement on a drawing; dimensions win over scaled measurements."
    },
    {
      "term": "Addendum",
      "def": "A change to the bidding documents issued before the bid."
    },
    {
      "term": "Revision",
      "def": "A change to the drawings issued after the bid, during construction."
    },
    {
      "term": "Title block",
      "def": "The box on each drawing sheet with the project name, sheet number, scale, and revision."
    },
    {
      "term": "General Requirements",
      "def": "Division 01 — the project's general conditions, such as supervision, temporary works, and permits."
    }
  ],
  "video": {
    "title": "PlanSwift Tutorial | How to Use CSI MasterFormat Template for Accurate Quantity Takeoff",
    "embedUrl": "https://www.youtube.com/embed/sFGts686IT0",
    "note": "A PlanSwift tutorial on organizing a takeoff with the CSI MasterFormat template. Watch the structure, not the software: the divisions are the filing system every estimator uses, whether the takeoff is digital or on paper with a scale ruler.",
    "more": [
      {
        "title": "How to Quantify Architectural Takeoff Using Drawings, ChatGPT & Excel",
        "url": "https://www.youtube.com/watch?v=CMQ3PuDeQMg"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Name the five parts of a drawing set and say what each one shows.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Floor plans — the building from above, room by room. Step 2: Elevations — the building from the outside, wall by wall. Step 3: Sections — a cut through the building showing how parts connect. Step 4: Details — large-scale drawings of tricky parts. Step 5: Schedules — tables listing every door, window, and finish.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Explain what specifications are and why the estimator must read them.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Specs are the written contract documents describing materials, quality, testing, and workmanship. Step 2: The specs decide the price — a drawing that shows 'concrete' does not say what strength or finish it needs. Step 3: Pricing from drawings alone is pricing a guess.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> What is CSI MasterFormat, and how does it help a takeoff?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: MasterFormat is the standard filing system dividing construction into numbered divisions by trade. Step 2: The estimator organizes the takeoff by division, so it can be priced and checked trade by trade. Step 3: Working down the division list keeps the estimator from forgetting a whole trade.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A scaled measurement says a wall is 20 feet long, but the written dimension says 21 feet. Which is right, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The written dimension is right — dimensions win over scaled measurements. Step 2: Paper stretches and prints scale wrong, but the dimension is the designer's word. Step 3: The takeoff uses 21 feet.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> An addendum arrives during bidding that changes the window type. What must the estimator do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Log the addendum and read what changed. Step 2: Update the takeoff and the pricing for the new window type. Step 3: Never price from a superseded sheet — the old window price is the wrong price.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> The parts of a dimension string add up to 40 feet, but the overall dimension says 42 feet. What is the problem, and what should the estimator do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The drawing has an error — the parts do not add up to the overall. Step 2: The estimator should not guess which one is right. Step 3: Ask the question during bidding, because the answer changes the quantity and the price.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A section drawing shows:",
      "choices": [
        "The building from above",
        "A cut through the building, showing how floors, walls, and roofs connect",
        "The building from the outside",
        "A list of doors"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A section cuts through the building to show the connections. (a) That is a floor plan. (c) That is an elevation. (d) That is a schedule."
    },
    {
      "q": "Specifications describe:",
      "choices": [
        "Where walls go",
        "Materials, quality, testing, and workmanship",
        "The building's height",
        "The site plan"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Specs are the written half — what and how well. (a) That is the drawings. (c) That is an elevation. (d) That is a site plan."
    },
    {
      "q": "CSI MasterFormat Division 03 is:",
      "choices": [
        "Wood and Plastics",
        "Concrete",
        "Electrical",
        "Finishes"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Division 03 is Concrete. (a) That is Division 06. (c) That is Division 26. (d) That is Division 09."
    },
    {
      "q": "When a written dimension and a scaled measurement disagree:",
      "choices": [
        "The measurement wins",
        "The written dimension wins",
        "Average them",
        "Use the smaller one"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Dimensions are the designer's word; paper stretches and prints scale wrong. (a) The measurement is the unreliable one. (c) Averaging invents a number. (d) The smaller one is not necessarily right."
    },
    {
      "q": "An addendum is:",
      "choices": [
        "A change issued after construction",
        "A change to the bidding documents issued before the bid",
        "A type of drawing",
        "A payment"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An addendum changes the bidding documents before the bid. (a) Changes after the bid are revisions. (c) It is a document change, not a drawing type. (d) It is not a payment."
    },
    {
      "q": "A door schedule is:",
      "choices": [
        "A drawing of one door",
        "A table listing every door and its properties",
        "A specification",
        "A site plan"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Schedules are tables listing every item of a type. (a) A detail draws one item large. (c) Specs are the written requirements. (d) A site plan shows the lot."
    },
    {
      "q": "Organizing a takeoff by CSI division helps because:",
      "choices": [
        "It is faster to measure",
        "It matches how work is bought and built, and keeps the estimator from forgetting a trade",
        "It reduces the price",
        "It is required by law"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Divisions match trades, so pricing and checking follow the same order. (a) Speed is not the main benefit. (c) It does not reduce the price. (d) It is a standard, not a law."
    },
    {
      "q": "If the drawings and the specs disagree, the estimator should:",
      "choices": [
        "Guess which one is right",
        "Note the conflict and ask the question during bidding",
        "Ignore the specs",
        "Ignore the drawings"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Report the conflict and ask — the answer changes the price. (a) Guessing is how bids go wrong. (c) The specs decide quality and price. (d) The drawings show what and where."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Drawings & Specs: Quick Reference</h3>\n<p><strong>Drawing set:</strong> Plans (from above) · Elevations (from outside) · Sections (cut through) · Details (large scale) · Schedules (tables).</p>\n<p><strong>Specs:</strong> The written half — materials, quality, testing, workmanship. The specs decide the price.</p>\n<p><strong>MasterFormat:</strong> Divisions by trade — 01 General Requirements · 03 Concrete · 06 Wood · 09 Finishes · 22 Plumbing · 23 HVAC · 26 Electrical.</p>\n<p><strong>Rules:</strong> Dimensions beat scaled measurements · Parts must add to the overall · Price from the latest set — track every addendum.</p>\n<p><strong>Self-check:</strong> Name the drawing set parts and explain MasterFormat.</p>\n"
};
