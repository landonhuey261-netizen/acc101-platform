// ele105 - Module 3: Branch Circuits: General & Small-Appliance
module.exports = {
  "number": 3,
  "slug": "branch-circuits-general-small-appliance",
  "title": "Branch Circuits: General & Small-Appliance",
  "estTime": "3–4 hours",
  "objectives": [
    "Lay out general-purpose lighting and receptacle branch circuits.",
    "Apply the receptacle spacing rules of 210.52(A).",
    "Explain the small-appliance branch circuit rules of 210.11(C)(1) and 210.52(B).",
    "Size general branch circuits for their loads.",
    "Explain multiwire branch circuits and their disconnect rule."
  ],
  "sections": [
    {
      "heading": "General-Purpose Branch Circuits",
      "html": "<p>A general-purpose branch circuit supplies lighting and receptacle outlets for general use in a house. Most are 15- or 20-ampere circuits: 15-ampere circuits use 14 AWG copper, 20-ampere circuits use 12 AWG copper, and the breaker protects the wire at that rating. A 15-ampere circuit may serve lighting and receptacles in any room except where the Code requires a dedicated circuit, and a 20-ampere circuit may serve the same loads with more capacity.</p><p>There is no Code limit on the number of outlets on a general-purpose residential circuit, but good practice limits a 15-ampere circuit to about 8 outlets and a 20-ampere circuit to about 10 — because the load calculation, not the outlet count, is what matters, and a circuit loaded with space heaters will trip no matter how many outlets it has. The load calculation in Module 8 uses 3 VA per square foot for general lighting and receptacles, which is how the service size accounts for all of them together.</p><p>Lighting and receptacles may share a general-purpose circuit in most rooms, but separating them is better practice: if a receptacle load trips the breaker, the lights stay on. In bedrooms, the AFCI protection required by 210.12 applies to the whole circuit, lights and receptacles alike.</p><div class=\"callout\"><strong>Key idea:</strong> The breaker protects the wire: 15 A on 14 AWG, 20 A on 12 AWG. There is no Code limit on outlet count — the load calculation governs.</div>"
    },
    {
      "heading": "Receptacle Spacing: The 6-Foot / 12-Foot Rule",
      "html": "<p>Section 210.52(A)(1) sets the receptacle spacing rule for dwelling-unit living areas: receptacles must be placed so no point along the floor line of any wall space is more than 6 feet from a receptacle. In practice that means receptacles no more than 12 feet apart, and within 6 feet of each end of a wall. A wall space is any wall 2 feet or wider, measured around corners and past doorways as the Code describes.</p><p>The reason is simple and human: a 6-foot appliance cord should reach a receptacle from anywhere along the wall, so nobody needs an extension cord as permanent wiring. Extension cords under rugs and across doorways are a fire and trip hazard, and the spacing rule is what keeps them out of the house.</p><p>Hallways, foyers, and similar areas have their own rule: 210.52(H) requires at least one receptacle in a hallway 10 feet or longer. Bathrooms, kitchens, laundry areas, basements, garages, and outdoor areas have their own receptacle rules too, covered in Modules 4, 6, and 7. On a floor plan, the receptacle layout is drawn first and the furniture follows — not the other way around.</p><ul><li>No point along a wall more than 6 ft from a receptacle (210.52(A)(1)).</li><li>Receptacles no more than 12 ft apart; within 6 ft of each wall end.</li><li>Wall space = any wall 2 ft or wider. Hallways 10 ft or longer need at least one receptacle (210.52(H)).</li></ul>"
    },
    {
      "heading": "Small-Appliance Branch Circuits",
      "html": "<p>Section 210.11(C)(1) requires at least two 20-ampere small-appliance branch circuits for the kitchen, pantry, breakfast room, dining room, and similar areas. These circuits feed the countertop receptacles where toasters, coffee makers, and mixers live — loads that are small individually but add up fast when several run at once. Two circuits keep a toaster and a coffee maker from fighting over one breaker.</p><p>Section 210.52(B) limits what the small-appliance circuits may serve: they may serve only receptacle outlets in the kitchen, pantry, breakfast room, dining room, or similar areas, plus the narrow exceptions the Code allows — a refrigerator on its own circuit is permitted but not required, and a gas range clock or an electric clock outlet is allowed. They may not serve lighting, and they may not serve receptacles in other rooms.</p><p>The countertop receptacles themselves follow 210.52(C): no point along the countertop wall is more than 24 inches from a receptacle, which puts receptacles no more than 48 inches apart. Island and peninsular countertops need at least one receptacle when the long dimension is 12 inches or more (2023 NEC). Module 6 covers kitchens in full.</p><div class=\"callout\"><strong>Key idea:</strong> Two 20-ampere small-appliance circuits, dedicated to the kitchen and dining areas. They feed countertop receptacles — not lighting, not other rooms.</div>"
    },
    {
      "heading": "Multiwire Branch Circuits",
      "html": "<p>A multiwire branch circuit is a single circuit with two or more ungrounded (hot) conductors sharing one grounded (neutral) conductor. In a house it usually appears as a 12/3 NM cable feeding two 20-ampere circuits — for example, the two small-appliance circuits in a kitchen, or a dishwasher and a disposal. The two hots must be on opposite legs of the panel so the neutral carries only the unbalanced current, not the sum of both circuits.</p><p>Section 210.4(B) requires a means to disconnect all ungrounded conductors of a multiwire branch circuit at the same time — a two-pole breaker, or two single-pole breakers with an approved handle tie. The reason is safety: if only one leg is switched off, the shared neutral still carries current from the other leg, and a worker who thinks the circuit is dead can be shocked by the neutral.</p><p>Multiwire circuits save wire and raceway space, but they demand care: the neutral must never be opened while either hot is energized, the hots must be on opposite legs, and the disconnect rule must be followed. A multiwire circuit wired with both hots on the same leg overloads the neutral — the neutral can carry double its rated current without any breaker tripping, which is a fire.</p><div class=\"callout\"><strong>Common mistake:</strong> Putting both hots of a multiwire branch circuit on the same panel leg. The neutral then carries the sum of both circuits and can overload without any breaker tripping.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>General-purpose circuits: 15 A on 14 AWG Cu, 20 A on 12 AWG Cu; no Code limit on outlet count.</li><li>Receptacle spacing (210.52(A)(1)): no point more than 6 ft from a receptacle; 12 ft maximum spacing.</li><li>Small-appliance circuits: at least two 20 A circuits for kitchen, pantry, breakfast, dining (210.11(C)(1)); they serve only those areas (210.52(B)).</li><li>Countertop receptacles: no point more than 24 in. from a receptacle (210.52(C)).</li><li>Multiwire branch circuits share one neutral; hots must be on opposite legs, and all hots must disconnect together (210.4(B)).</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Feeding a bedroom receptacle from a small-appliance circuit. Those circuits are dedicated to the kitchen and dining areas.</div><div class=\"callout\"><strong>Common mistake:</strong> Using two single-pole breakers without a handle tie on a multiwire branch circuit. All ungrounded conductors must disconnect together.</div><p><strong>Ready-to-Work link:</strong> If you can lay out receptacles in a living room by the 6-foot rule and explain the small-appliance circuits, you have this module. Module 4 covers GFCI and AFCI protection.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "General-purpose branch circuit",
      "def": "A 15- or 20-ampere circuit supplying lighting and receptacle outlets for general use."
    },
    {
      "term": "210.52(A)(1)",
      "def": "Receptacle spacing: no point along a wall more than 6 feet from a receptacle."
    },
    {
      "term": "Wall space",
      "def": "Any wall 2 feet or wider, measured as the Code describes; it determines receptacle placement."
    },
    {
      "term": "Small-appliance branch circuit",
      "def": "A 20-ampere circuit for kitchen, pantry, breakfast, and dining receptacles (210.11(C)(1))."
    },
    {
      "term": "210.52(B)",
      "def": "Small-appliance circuits may serve only receptacle outlets in the listed rooms (plus narrow exceptions)."
    },
    {
      "term": "210.52(C)",
      "def": "Countertop receptacles: no point more than 24 inches from a receptacle."
    },
    {
      "term": "210.52(H)",
      "def": "A hallway 10 feet or longer needs at least one receptacle."
    },
    {
      "term": "Multiwire branch circuit",
      "def": "A circuit with two or more ungrounded conductors sharing one grounded conductor."
    },
    {
      "term": "210.4(B)",
      "def": "All ungrounded conductors of a multiwire branch circuit must disconnect together."
    },
    {
      "term": "Handle tie",
      "def": "An approved tie between two single-pole breakers so they switch off together."
    },
    {
      "term": "Unbalanced current",
      "def": "The current the shared neutral of a multiwire circuit actually carries — the difference between the two hot legs."
    },
    {
      "term": "Dedicated circuit",
      "def": "A circuit serving only one load or one area, as the Code requires."
    }
  ],
  "video": {
    "title": "How to wire a new house",
    "embedUrl": "https://www.youtube.com/embed/qFOqV3_paFw",
    "note": "Watch a new house being wired room by room: the panel, the branch circuits, and the receptacles. As you watch, count the receptacles in one room and check them against the 6-foot rule.",
    "more": [
      {
        "title": "Simple house wiring — simple house wiring connection",
        "url": "https://www.youtube.com/watch?v=8i64KVsvxqs"
      },
      {
        "title": "DIY Electrical Wiring Tips for Home Electrical Wiring Projects - Vol 1",
        "url": "https://www.youtube.com/watch?v=-9Uh48uRX4o"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A living room wall is 18 feet long with no doors or windows. How many receptacles does 210.52(A)(1) require at minimum, and where?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No point may be more than 6 feet from a receptacle, and receptacles may be no more than 12 feet apart. Step 2: Place one within 6 feet of each end and one in the middle — three receptacles. Step 3: Spacing of 9 feet between them keeps every point within 6 feet of a receptacle (two receptacles at 6 feet from each end would be 12 feet apart, leaving the middle exactly 6 feet from each — compliant, but three is the comfortable layout).</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A hallway is 14 feet long. How many receptacles does it need?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 210.52(H) requires at least one receptacle in a hallway 10 feet or longer. Step 2: One receptacle is the minimum. Step 3: Place it where it is most useful, usually near the middle.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> How many small-appliance branch circuits does a dwelling need, and what may they serve?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: At least two, 20 amperes each (210.11(C)(1)). Step 2: They serve receptacle outlets in the kitchen, pantry, breakfast room, dining room, and similar areas. Step 3: They may not serve lighting or receptacles in other rooms (210.52(B)).</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A kitchen countertop wall is 10 feet long. How many countertop receptacles are needed at minimum?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 210.52(C) requires no point more than 24 inches from a receptacle. Step 2: Receptacles may be no more than 48 inches apart. Step 3: A 10-foot (120-inch) wall needs at least three receptacles — for example at 24, 72, and 120 inches from one end, or spaced evenly.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A multiwire branch circuit uses a 12/3 cable with both hots on the same panel leg. Each hot carries 16 amperes. What current does the neutral carry, and why is this dangerous?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: On the same leg, the neutral carries the sum: 16 + 16 = 32 amperes. Step 2: The 12 AWG neutral is rated 20 amperes, so it is overloaded by 12 amperes. Step 3: No breaker protects the neutral, so it can overheat and start a fire — the hots must be on opposite legs so the neutral carries only the difference.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A multiwire branch circuit feeds a dishwasher and a disposal on two single-pole breakers. What is missing, and why does it matter?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A handle tie (or a two-pole breaker) is missing. Step 2: Section 210.4(B) requires all ungrounded conductors to disconnect together. Step 3: Without it, one leg can stay live while the other is off, and the shared neutral still carries current — a shock hazard for anyone working on the circuit.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The minimum copper conductor for a 20-ampere general-purpose branch circuit is:",
      "choices": [
        "14 AWG",
        "12 AWG",
        "10 AWG",
        "8 AWG"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 12 AWG copper is the minimum for 20 amperes. (a) 14 AWG is the minimum for 15 amperes. (c) 10 AWG is the minimum for 30 amperes. (d) 8 AWG is larger than needed."
    },
    {
      "q": "Under 210.52(A)(1), the maximum distance from any point along a wall to a receptacle is:",
      "choices": [
        "2 feet",
        "4 feet",
        "6 feet",
        "12 feet"
      ],
      "answer": 2,
      "explanation": "Correct: (c). No point may be more than 6 feet from a receptacle. (a) and (b) 2 and 4 feet are stricter than the rule. (d) 12 feet is the maximum spacing between receptacles, not the distance from a point to a receptacle."
    },
    {
      "q": "A wall 14 feet long with no openings needs receptacles spaced at most:",
      "choices": [
        "6 feet apart",
        "12 feet apart",
        "18 feet apart",
        "24 feet apart"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Receptacles may be no more than 12 feet apart. (a) 6 feet is the maximum distance from a point to a receptacle. (c) and (d) 18 and 24 feet exceed the spacing rule."
    },
    {
      "q": "How many 20-ampere small-appliance branch circuits does a dwelling require at minimum?",
      "choices": [
        "One",
        "Two",
        "Three",
        "Four"
      ],
      "answer": 1,
      "explanation": "Correct: (b). At least two, per 210.11(C)(1). (a) One is not enough. (c) and (d) Three or four exceed the minimum."
    },
    {
      "q": "Small-appliance branch circuits may serve:",
      "choices": [
        "Lighting in the kitchen",
        "Receptacle outlets in the kitchen, pantry, breakfast, and dining areas",
        "Bedroom receptacles",
        "Bathroom receptacles"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 210.52(B) limits them to receptacles in the listed areas. (a) They may not serve lighting. (c) and (d) Bedrooms and bathrooms have their own circuits."
    },
    {
      "q": "Countertop receptacles must be placed so no point along the countertop is more than:",
      "choices": [
        "12 inches from a receptacle",
        "24 inches from a receptacle",
        "36 inches from a receptacle",
        "48 inches from a receptacle"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 210.52(C): no point more than 24 inches from a receptacle. (a) 12 inches is stricter than the rule. (c) and (d) 36 and 48 inches exceed it."
    },
    {
      "q": "A multiwire branch circuit's ungrounded conductors must be:",
      "choices": [
        "On the same panel leg",
        "On opposite panel legs, with a means to disconnect all of them together",
        "On the same breaker",
        "Disconnected one at a time"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Opposite legs so the neutral carries only unbalanced current, and a common disconnect per 210.4(B). (a) Same-leg hots overload the neutral. (c) They need separate overcurrent protection per leg. (d) They must disconnect together."
    },
    {
      "q": "A hallway 12 feet long needs at least how many receptacles?",
      "choices": [
        "Zero",
        "One",
        "Two",
        "Three"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 210.52(H) requires at least one receptacle in a hallway 10 feet or longer. (a) Zero is not enough. (c) and (d) Two or three exceed the minimum."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Branch Circuits: Quick Reference</h3>\n<p><strong>Core idea:</strong> General circuits serve lights and receptacles; small-appliance circuits are dedicated to the kitchen and dining areas; multiwire circuits share a neutral and need a common disconnect.</p>\n<p><strong>Minimums:</strong> 15 A = 14 AWG Cu · 20 A = 12 AWG Cu.</p>\n<p><strong>Receptacle spacing (210.52(A)(1)):</strong> No point more than 6 ft from a receptacle; 12 ft maximum spacing. Hallways 10 ft+ need one receptacle (210.52(H)).</p>\n<p><strong>Small-appliance (210.11(C)(1), 210.52(B)):</strong> At least two 20 A circuits, kitchen/pantry/breakfast/dining receptacles only.</p>\n<p><strong>Countertops (210.52(C)):</strong> No point more than 24 in. from a receptacle.</p>\n<p><strong>Multiwire (210.4(B)):</strong> Hots on opposite legs; disconnect all hots together.</p>\n<p><strong>Self-check:</strong> Lay out receptacles on an 18-ft wall and name the small-appliance circuit rules.</p>\n"
};
