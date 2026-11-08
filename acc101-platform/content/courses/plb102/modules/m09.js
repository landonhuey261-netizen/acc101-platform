// plb102 - Module 9: Reading Commercial Drawings
module.exports = {
  "number": 9,
  "slug": "reading-commercial-drawings",
  "title": "Reading Commercial Drawings",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how commercial drawing sets differ from residential ones: more sheets, more systems, more coordination.",
    "Read a commercial plumbing plan: mains, risers, and fixture groups.",
    "Find and use schedules: fixture schedules, equipment schedules, and riser schedules.",
    "Read details and sections for commercial work: roof drains, grease interceptors, and shafts.",
    "Explain the submittal and RFI process when a commercial drawing is unclear or wrong."
  ],
  "sections": [
    {
      "heading": "Commercial Drawings: Bigger, Busier, More Coordinated",
      "html": "<p>A house has a handful of plumbing sheets; a commercial building — a school, a hospital, an office — can have dozens. The plumbing set grows: site utility plans showing the water service and the sewer connection outside the building, floor plans for every level, roof plans showing roof drains and vents, riser diagrams for water and drainage, details for every special condition, and schedules listing every fixture and piece of equipment. The scale is bigger, the systems are bigger, and more trades share the same spaces — so coordination matters more, not less.</p>\n<p>Commercial drawings also carry more information per sheet: more notes, more callouts, more references to details on other sheets (\"see detail 4/P-501\"). Follow the references — a note that says \"see detail\" is telling you the real information lives on another sheet, and the plan alone is not enough to build from.</p>\n<p>Start any commercial set the same way: the title block and revision, the legend, the general notes, and the drawing index (the list of all sheets). The index is the map of the set — it tells you which sheet holds the riser, which holds the roof plan, and which holds the fixture schedule, so you do not hunt through fifty sheets for one detail.</p>\n<div class=\"callout\"><strong>Key idea:</strong> On a commercial set, the drawing index is the map. Read it first, follow the \"see detail\" references, and never build from a plan alone when the detail lives elsewhere.</div>"
    },
    {
      "heading": "Mains, Risers, and Fixture Groups",
      "html": "<p>On a commercial plan, find the <strong>mains</strong> first: the water service entering the building, the building drain leaving it, and the main horizontal runs on each floor. Then find the <strong>risers</strong> — the vertical pipes that carry water up and waste down through the floors, usually stacked in shafts or chases. Then find the <strong>fixture groups</strong>: the clusters of toilets, lavatories, and sinks that share a branch, typically stacked floor above floor so one riser serves them all.</p>\n<p>Fixture groups are the commercial plumber's unit of work: a restroom group on each floor, a kitchen group, a lab group. The drawings repeat the same group on several floors, and the riser diagram shows the stack. Learning to read one group teaches you the whole building — the other floors are variations on the same pattern, with their own sizes and notes.</p>\n<p>Watch the sizes: commercial mains are larger than residential ones, and the sizes change at each join as the flow accumulates. A 6-inch building drain, a 4-inch main, and 2-inch branches are ordinary on a commercial job — and the slope rules from Module 3 still apply, with the 1/8-inch-per-foot minimum for the 4-inch and larger pipe.</p>"
    },
    {
      "heading": "Schedules: The Lists That Define the Job",
      "html": "<p>A <strong>schedule</strong> is a table on the drawings that lists items with their details. The <strong>fixture schedule</strong> lists every fixture: its mark (WC-1, LAV-2), its type and manufacturer, its rough-in dimensions, and its connections (water sizes, drain size, vent size). The <strong>equipment schedule</strong> lists water heaters, pumps, interceptors, and other equipment with capacities and electrical needs. The <strong>riser schedule</strong> (or the riser diagram) lists the risers and their sizes floor by floor.</p>\n<p>Schedules are the authority for \"what\" — what fixture, what size, what connections. The plans are the authority for \"where.\" When the schedule and the plan disagree, the conflict is resolved the same way as any drawing disagreement: stop and ask, through an RFI (below), rather than guessing. A fixture installed to the wrong schedule is a fixture that must be replaced.</p>\n<p>Read the schedule's footnotes too. A footnote may say the fixture is \"owner-furnished\" (the owner buys it, you install it), or that a valve is \"by others\" (another trade supplies it), or that a connection is \"capped for future\" — each one changes what you order and what you install.</p>"
    },
    {
      "heading": "Details, Roof Drains, and Special Systems",
      "html": "<p>Commercial details cover the conditions that repeat across the building: a <strong>roof drain detail</strong> showing the drain, the overflow, and the flashing; a <strong>grease interceptor detail</strong> for a kitchen, showing the inlet, the outlet, and the cleanout; a <strong>shaft detail</strong> showing how risers are supported and firestopped where they pass through floors. Firestopping matters: a pipe through a fire-rated floor or wall must be sealed with the rated assembly shown in the detail, and the inspector will check it.</p>\n<p>Special systems appear on commercial jobs that houses never have: <strong>storm drainage</strong> with roof drains and overflow scuppers, <strong>grease waste</strong> from kitchens through interceptors, <strong>laboratory waste</strong> with special piping, and <strong>medical gas</strong> in hospitals (covered in plb203). Each has its own sheets or sections, and each follows the same reading method: legend, notes, plan, elevation, section, detail, schedule.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Details are where the \"how\" lives. The plan says where the roof drain is; the detail says how it is built, flashed, and connected.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Commercial sets: more sheets, more systems, more coordination. Start with the index, the title block, the legend, and the general notes.</li>\n<li>Mains first, then risers, then fixture groups — the same group repeats floor above floor.</li>\n<li>Schedules are the authority for \"what\" (fixture, size, connections); plans are the authority for \"where.\"</li>\n<li>Details carry the \"how\": roof drains, grease interceptors, shafts, firestopping.</li>\n<li>Unclear or wrong? RFI — a written Request for Information — not a guess.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Building from the plan when the note says \"see detail.\" The detail is the real instruction — the plan alone is not enough.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Ignoring schedule footnotes. \"Owner-furnished\" and \"by others\" change what you order — and ordering the wrong fixture is an expensive mistake.</div>\n<p><strong>Ready-to-Work link:</strong> If you can find a fixture group, read its schedule, and follow a \"see detail\" reference to the right sheet, you have this module. Module 10 draws the third dimension: isometric drawings.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Commercial building",
      "def": "A non-residential building — school, hospital, office, factory — with larger plumbing systems and more drawing sheets."
    },
    {
      "term": "Drawing index",
      "def": "The list of all sheets in a drawing set, showing which sheet holds what."
    },
    {
      "term": "Main",
      "def": "A large pipe that carries water or waste for a whole floor or building."
    },
    {
      "term": "Riser",
      "def": "A vertical pipe carrying water up or waste down through the floors of a building."
    },
    {
      "term": "Fixture group",
      "def": "A cluster of fixtures sharing a branch — typically stacked floor above floor on one riser."
    },
    {
      "term": "Fixture schedule",
      "def": "A table listing every fixture with its type, rough-in, and connection sizes."
    },
    {
      "term": "Equipment schedule",
      "def": "A table listing equipment such as water heaters and pumps with capacities and requirements."
    },
    {
      "term": "Detail",
      "def": "A large-scale drawing of a specific condition, showing how it is built."
    },
    {
      "term": "Roof drain",
      "def": "A drain that removes rainwater from a flat roof."
    },
    {
      "term": "Grease interceptor",
      "def": "A device that traps grease from kitchen waste before it enters the sewer."
    },
    {
      "term": "Firestopping",
      "def": "The rated sealing of a pipe penetration through a fire-rated floor or wall."
    },
    {
      "term": "Shaft / chase",
      "def": "A vertical space in a building that carries risers and ducts between floors."
    },
    {
      "term": "RFI",
      "def": "Request for Information — a written question to the designer when a drawing is unclear or wrong."
    },
    {
      "term": "Owner-furnished",
      "def": "Supplied by the building owner, not the contractor — the contractor installs it but does not buy it."
    },
    {
      "term": "By others",
      "def": "Supplied or installed by another trade, not by the plumber."
    },
    {
      "term": "Storm drainage",
      "def": "The system that carries rainwater from roofs and paved areas away from the building."
    }
  ],
  "video": {
    "title": "Plan Reading for Plumbers: Architectural and Structural Pages",
    "embedUrl": "https://www.youtube.com/embed/L55wmEdOY7c",
    "note": "Plumber-Tom reads plan pages for plumbers: architectural and structural sheets and how the plumbing fits them. Watch how the plumbing is coordinated with the structure.",
    "more": [
      {
        "title": "Reading Drawings",
        "url": "https://www.youtube.com/watch?v=Fd8CLQmemJI"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> You are handed a 50-sheet commercial plumbing set. What do you read first, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The drawing index — the map of the set, showing which sheet holds the riser, the roof plan, and the fixture schedule. Step 2: The title block and revision, to confirm the set is current. Step 3: The legend and general notes, so the symbols and job rules are clear. Step 4: Only then the plans for your area of work.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A restroom group repeats on five floors, served by one riser. Explain why learning one floor teaches you the building.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The fixture group is the same pattern on each floor, stacked on the same riser. Step 2: The riser diagram shows the stack and the sizes floor by floor. Step 3: Once you can read one group's plan, schedule, and riser, the other floors are variations — same pattern, their own sizes and notes.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> The fixture schedule says WC-1 is a wall-hung water closet with a 2-inch vent, but the plan shows a floor-mounted closet. What do you do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Stop — the schedule and the plan disagree, and the schedule is the authority for 'what' while the plan is the authority for 'where.' Step 2: Submit an RFI (Request for Information) to the designer. Step 3: Do not guess or install either version until the answer comes back.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A plan note says 'see detail 4/P-501' next to a roof drain. Where is the real instruction, and what does the plan alone tell you?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The real instruction is on sheet P-501, detail 4 — the detail shows how the drain is built, flashed, and connected. Step 2: The plan alone tells you where the drain is, not how it is built. Step 3: Build from the detail, not from the plan alone.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A schedule footnote says a water heater is 'owner-furnished.' What does that change for you?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The owner buys the water heater; you do not order it. Step 2: You install it and connect it, per the schedule's capacities and connections. Step 3: Ordering it yourself would duplicate the purchase and waste the money.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Your drain route and a duct occupy the same ceiling space on a commercial job. What is the process for resolving it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It is a clash — report it to your foreman and the design team. Step 2: The resolution is an RFI or a coordination change, decided on paper. Step 3: Do not move the duct or build through it yourself; the fix on paper is free and the fix in the ceiling is expensive.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The first thing to read on a large commercial drawing set is:",
      "choices": [
        "The first plan sheet",
        "The drawing index — the map of the set",
        "The last sheet",
        "The fixture schedule"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The index tells you which sheet holds the riser, the roof plan, and the schedules. (a) Starting at the first plan wastes time hunting. (c) The last sheet is arbitrary. (d) The schedule comes after you know where it is."
    },
    {
      "q": "A fixture schedule is the authority for:",
      "choices": [
        "Where a fixture sits",
        "What fixture it is, its type, rough-in, and connections",
        "The price of the fixture",
        "Who installs it"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Schedules define the 'what'; plans define the 'where.' (a) Location is the plan's job. (c) Prices are not on drawings. (d) The installer is set by the contract, not the schedule."
    },
    {
      "q": "A note saying 'see detail 4/P-501' means:",
      "choices": [
        "The detail is optional",
        "The real instruction for that work is on sheet P-501, detail 4",
        "The work is on page 4",
        "The plan is wrong"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The detail carries the 'how'; the plan alone is not enough. (a) Details are instructions, not options. (c) 4 is the detail number, not a page. (d) A reference is not an error."
    },
    {
      "q": "A restroom group stacked floor above floor on one riser means:",
      "choices": [
        "Each floor has a different system",
        "The same fixture pattern repeats, served by one vertical stack",
        "The riser is the only pipe in the building",
        "The floors are not connected"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Fixture groups repeat on a shared riser — learning one teaches the building. (a) The pattern repeats; it is the same system. (c) Many pipes serve a building. (d) The riser is the connection between floors."
    },
    {
      "q": "When a drawing is unclear or wrong on a commercial job, the process is:",
      "choices": [
        "Guess and keep working",
        "Submit an RFI — a written Request for Information",
        "Ignore it and build the plan",
        "Ask the customer"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An RFI gets a written answer from the designer. (a) Guessing builds errors into the building. (c) Building a wrong plan is still wrong. (d) The customer does not design the building."
    },
    {
      "q": "'Owner-furnished' on a schedule footnote means:",
      "choices": [
        "The owner installs it",
        "The owner buys it; the contractor installs it",
        "It is free",
        "It is not needed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Owner-furnished means supplied by the owner, installed by the contractor. (a) Installation is still the contractor's work. (c) It is paid for by the owner, not free. (d) It is needed — the owner is supplying it."
    },
    {
      "q": "Firestopping is required where a pipe passes through:",
      "choices": [
        "Any wall",
        "A fire-rated floor or wall, sealed with the rated assembly in the detail",
        "A window",
        "A door frame"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Fire-rated penetrations must be sealed with the rated assembly, and the inspector checks it. (a) Non-rated walls do not need firestopping. (c) and (d) are not pipe penetrations."
    },
    {
      "q": "A grease interceptor is used for:",
      "choices": [
        "Drinking water",
        "Trapping grease from kitchen waste before it enters the sewer",
        "Heating water",
        "Venting a drain"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Kitchen grease is trapped by the interceptor so it does not clog the sewer. (a) Drinking water is a different system. (c) Heating is a water heater's job. (d) Venting is a vent's job."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Reading Commercial Drawings: Quick Reference</h3>\n<p><strong>Start:</strong> Drawing index → Title block &amp; revision → Legend → General notes → Your sheets.</p>\n<p><strong>Read in order:</strong> Mains → Risers → Fixture groups (the same group repeats floor above floor).</p>\n<p><strong>Schedules = \"what\":</strong> Fixture schedule (type, rough-in, connections) · Equipment schedule (capacities) · Riser schedule (sizes floor by floor).</p>\n<p><strong>Plans = \"where.\" Details = \"how.\"</strong> Follow \"see detail\" references — the plan alone is not enough.</p>\n<p><strong>Footnotes matter:</strong> \"Owner-furnished\" (owner buys, you install) · \"By others\" (another trade supplies it) · \"Capped for future.\"</p>\n<p><strong>Unclear or wrong?</strong> RFI — a written Request for Information. Never guess.</p>\n<p><strong>Self-check:</strong> Find a fixture group, read its schedule, and follow a \"see detail\" reference. If you can do all three, you have this module.</p>\n"
};
