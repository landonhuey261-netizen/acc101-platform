// con103 - Module 5: Reading Floor Plans
module.exports = {
  "number": 5,
  "slug": "reading-floor-plans",
  "title": "Reading Floor Plans",
  "estTime": "3–4 hours",
  "objectives": [
    "Trace the flow of a house or building from the front door through the rooms.",
    "Explain room dimensions, wall types, and the meaning of dimension strings.",
    "Read door and window tags and match them to the schedules.",
    "Describe how stairs, fixtures, and built-ins are shown on a plan.",
    "Identify missing or conflicting information on a floor plan."
  ],
  "sections": [
    {
      "heading": "How to Read a Floor Plan: Start at the Door",
      "html": "<p>A floor plan is read the way you walk through a building: start at the front door and move through the rooms in the order you would actually use them. Enter, and the first space is usually the entry or foyer. From there the living spaces open out \u2014 living room, kitchen, dining room \u2014 and the private spaces (bedrooms, bathrooms) sit further in, behind doors. Reading in walking order keeps you oriented: you always know where you are, and you can check that the layout actually works \u2014 that a bedroom door does not open into a kitchen, and that a bathroom is reachable without crossing the living room.</p>\n<p>As you move, read the <strong>room labels and dimensions</strong>: every room is named and dimensioned, and the dimension is the clear size inside the walls. A bedroom labeled 12'-0\" x 14'-0\" is 12 feet by 14 feet of usable space \u2014 big enough for a queen bed and two nightstands, with room to walk. Check the dimensions against the furniture that has to fit: a kitchen needs at least 10 feet of counter run, a bathroom needs 5 feet for a tub, and a hallway needs 3 feet of clear width. A plan that looks fine at a glance often fails when you test it against real furniture and real movement.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Read a floor plan the way you walk through a building \u2014 start at the front door, move room to room, and test the layout against real furniture and real movement.</div>"
    },
    {
      "heading": "Dimensions, Wall Types & Dimension Strings",
      "html": "<p>Dimensions on a floor plan are written in feet and inches: 12'-6\" means 12 feet 6 inches. Dimensions run in <strong>strings</strong> \u2014 a chain of small dimensions along one side of the plan that adds up to one overall dimension. The string gives the parts (each room width, each wall thickness), and the overall dimension gives the whole. Always check that the parts add up to the whole: if the string adds to 40'-0\" but the overall dimension says 40'-6\", something is wrong and the plan needs an RFI. The overall dimension is the one to trust when the two disagree \u2014 but only after the designer confirms it.</p>\n<p>Wall types are shown by line weight and by a note: exterior walls are thick, load-bearing walls are thick and often hatched or filled, and interior partitions are thin. A wall marked \"2x6 EXT\" is a 2x6 exterior wall; a wall marked \"2x4 INT\" is a 2x4 interior partition. The plan also shows <strong>wall tags</strong> \u2014 a number or letter in a diamond or circle \u2014 that point to a wall-type schedule or a wall detail, which gives the layers: sheathing, insulation, drywall, and finish. A wall is not just a line on the plan; it is a stack of materials, and the wall type tells you what the stack is.</p>\n<p>Dimension rules to remember: dimensions are given to the face of a stud, the centerline of a column, or the face of a concrete wall \u2014 and the general notes say which. Interior dimensions are usually to the face of the stud (the framing), not the face of the drywall, so a room that measures 12'-0\" on the plan is a little smaller once the drywall is on. That half inch matters when a cabinet or a tub has to fit.</p>"
    },
    {
      "heading": "Doors, Windows & the Schedules",
      "html": "<p>Every door and window on a floor plan carries a <strong>tag</strong>: a number in a circle (D-1, W-3) or a letter in a hexagon. The tag is the link to the schedule, and the schedule is the definition. A door tagged D-1 might be a 3'-0\" x 6'-8\" solid-core interior door with a passage lockset; a window tagged W-3 might be a 3'-0\" x 4'-0\" double-hung vinyl window with a low-E coating. The plan shows the door's location and swing; the schedule shows everything else. If the schedule and the plan disagree \u2014 the plan shows a 3-foot door and the schedule says 2-foot-8 \u2014 the discrepancy goes back to the designer as an RFI.</p>\n<p>Read the <strong>door swing</strong> carefully: the arc shows which way the door opens and how much floor space it needs. A door that swings into a bathroom must not hit the toilet; a door that swings into a hallway must not block the passage. The swing also tells you which side the hinges are on, which is how the door is ordered. A door that is drawn swinging the wrong way is a common plan error, and it is caught by standing in the room \u2014 in your head \u2014 and opening the door.</p>\n<p>Windows are read the same way: the plan shows the width and the wall it sits in, and the schedule gives the height, the type, and the glass. The <strong>sill height</strong> \u2014 the height of the bottom of the window above the floor \u2014 is usually given on the elevation or in the schedule, not on the plan. A window that sits at 2'-6\" above the floor is a different window from one that sits at 3'-0\", even if both are the same width.</p>"
    },
    {
      "heading": "Stairs, Fixtures & Built-Ins",
      "html": "<p>Stairs are shown as a series of parallel lines with an arrow pointing up and the number of risers noted: \"UP 13 RISERS\" means 13 risers going up. The stair symbol also shows the direction of travel and, on a two-story plan, the stair that continues to the floor above. The width of the stair, the riser height, and the tread depth are in the section and the stair detail \u2014 the plan shows where the stair is and which way it runs, and the section shows whether you can walk up it without hitting your head.</p>\n<p>Fixtures are shown with their symbols: a toilet is a small oval with a tank rectangle, a bathtub is a rounded rectangle, a kitchen sink is a rectangle with a circle, a range is a square with four circles, and a refrigerator is a large rectangle labeled REF. Built-ins \u2014 closets, pantries, cabinets, and shelving \u2014 are shown as lines and rectangles with labels. A closet is a small rectangle with a line for the rod and a label; a pantry is a larger one with shelves drawn in. The plan shows the fixture's location and size; the schedule or the detail gives the model and the finish.</p>\n<p>Two things are easy to miss: the <strong>north arrow</strong>, which orients the plan (and tells you which rooms get morning sun and which get afternoon sun), and the <strong>scale</strong> \u2014 always check the scale before you measure anything. A plan that looks like a small house at 1/4 inch = 1 foot may be a large one at 1/8 inch = 1 foot, and the rooms are twice the size you think.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Read in walking order: start at the front door, move room to room, and test the layout against furniture and movement.</li>\n<li>Dimensions in feet and inches run in strings; the parts must add up to the overall dimension. Dimensions are usually to the face of the stud.</li>\n<li>Wall types: thick lines for exterior and load-bearing, thin for partitions; wall tags point to the wall-type schedule or detail.</li>\n<li>Door and window tags point to the schedules \u2014 the plan shows where, the schedule says what. Read the swing arc.</li>\n<li>Stairs: parallel lines, an arrow pointing up, riser count noted. Fixtures and built-ins are coded symbols with labels.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Trusting a dimension string without checking it against the overall dimension. If the parts do not add up to the whole, ask \u2014 do not build.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Forgetting the swing. A door that swings into a toilet or blocks a hallway is a plan error you can catch before it is framed.</div>\n<p><strong>Ready-to-Work link:</strong> If you can walk through a plan in order, match three tags to their schedules, and check a dimension string, you have this module. Module 6 reads elevations and roof plans.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Floor plan",
      "def": "A horizontal cut through a building, looking down, showing walls, rooms, doors, and windows."
    },
    {
      "term": "Dimension string",
      "def": "A chain of small dimensions along one side of a plan that adds up to an overall dimension."
    },
    {
      "term": "Overall dimension",
      "def": "The total dimension of a building or a run, given at the end of a dimension string."
    },
    {
      "term": "Wall tag",
      "def": "A number or letter marking a wall type, pointing to a wall-type schedule or detail."
    },
    {
      "term": "Load-bearing wall",
      "def": "A wall that carries the weight of the structure above it."
    },
    {
      "term": "Partition",
      "def": "A non-load-bearing interior wall that divides rooms."
    },
    {
      "term": "Door schedule",
      "def": "A table listing every door: size, material, type, and hardware."
    },
    {
      "term": "Window schedule",
      "def": "A table listing every window: size, type, and glass."
    },
    {
      "term": "Door swing",
      "def": "The arc on a plan showing which way a door opens and the floor space it needs."
    },
    {
      "term": "Sill height",
      "def": "The height of the bottom of a window above the finished floor."
    },
    {
      "term": "Riser",
      "def": "The vertical part of a stair step."
    },
    {
      "term": "Tread",
      "def": "The horizontal part of a stair step, where your foot lands."
    },
    {
      "term": "North arrow",
      "def": "A mark on a plan showing which direction is north."
    },
    {
      "term": "Built-in",
      "def": "A fixture built into the building, such as a closet, pantry, or cabinet."
    },
    {
      "term": "Face of stud",
      "def": "The face of the framing member \u2014 the usual reference for interior dimensions."
    },
    {
      "term": "Clear width",
      "def": "The usable width of a passage or opening, after finishes."
    },
    {
      "term": "Fixture",
      "def": "A fixed item such as a toilet, sink, tub, or range."
    },
    {
      "term": "Room label",
      "def": "The name and dimensions written inside a room on a plan."
    }
  ],
  "video": {
    "title": "How to Read Blueprints: Every Page of a REAL House Explained",
    "embedUrl": "https://www.youtube.com/embed/t-OhSA-o0Ag",
    "note": "A full walkthrough of a real house plan set, page by page. Follow along with a finger on your own imaginary plan: start at the front door, read the room labels, and check the dimension strings as the presenter reads them.",
    "more": [
      {
        "title": "How to Read Blueprints for Beginners",
        "url": "https://www.youtube.com/watch?v=MtUeB3KkrGM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Why should you read a floor plan in walking order, starting at the front door?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Reading in walking order keeps you oriented \u2014 you always know where you are. Step 2: It lets you check that the layout works: that a bedroom door does not open into a kitchen and a bathroom is reachable without crossing the living room. Step 3: It lets you test the plan against real furniture and real movement.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A dimension string reads 10'-0\", 12'-0\", 10'-0\", and the overall dimension reads 32'-6\". What do you do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Add the parts: 10 + 12 + 10 = 32'-0\". Step 2: The overall dimension says 32'-6\" \u2014 the parts do not add up to the whole, so something is wrong. Step 3: Send an RFI to the designer and do not build until it is answered. The overall dimension is the one to trust once confirmed.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A bedroom is labeled 12'-0\" x 14'-0\". What does that mean, and what is the room's area?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The room is 12 feet by 14 feet of clear space inside the walls. Step 2: Area = 12 x 14 = 168 square feet. Step 3: That is big enough for a queen bed and two nightstands with room to walk \u2014 check the furniture against the size.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A door is tagged D-2 and swings into a bathroom, and the arc crosses the toilet. What is the problem, and what do you check?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The door swing hits the toilet \u2014 a layout error. Step 2: Check the door schedule for door D-2 to confirm the door size and swing. Step 3: Report it: the door should swing the other way, or the toilet should move.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> What is the difference between a load-bearing wall and a partition, and how can you tell them apart on a plan?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A load-bearing wall carries the weight of the structure above it; a partition only divides rooms. Step 2: On a plan, load-bearing walls are drawn thick and often hatched or filled; partitions are thin lines. Step 3: The wall tag and the structural drawings confirm which walls are load-bearing \u2014 never remove a wall on the strength of the plan alone.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A stair is labeled \"UP 13 RISERS\". What does that mean, and where do you find the riser height?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The stair has 13 risers going up, in the direction of the arrow. Step 2: The riser height and tread depth are in the section and the stair detail, not on the plan. Step 3: The plan shows where the stair is and which way it runs; the section shows whether you can walk up it without hitting your head.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The best way to read a floor plan is to:",
      "choices": [
        "Start at the roof and work down",
        "Start at the front door and move through the rooms in walking order",
        "Read the title block first and stop",
        "Measure every wall with a scale"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Walking order keeps you oriented and lets you test the layout. (a) Plans are read from the entry, not the roof. (c) The title block is identification, not the layout. (d) Measuring comes after understanding the layout."
    },
    {
      "q": "A dimension string is:",
      "choices": [
        "A single overall dimension",
        "A chain of small dimensions that adds up to an overall dimension",
        "A note about the wall type",
        "The scale of the drawing"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A string is a chain of parts that must add to the whole. (a) That is the overall dimension. (c) Wall type is given by a tag. (d) Scale is in the title block."
    },
    {
      "q": "A bedroom labeled 12'-0\" x 14'-0\" has an area of:",
      "choices": [
        "26 square feet",
        "168 square feet",
        "144 square feet",
        "196 square feet"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 12 x 14 = 168 sq ft. (a) 26 is the sum of 12 and 14, not the area. (c) 144 is 12 x 12. (d) 196 is 14 x 14."
    },
    {
      "q": "If the parts of a dimension string do not add up to the overall dimension, you should:",
      "choices": [
        "Build to the parts and ignore the overall",
        "Build to the overall and ignore the parts",
        "Send an RFI and do not build until it is answered",
        "Split the difference"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A mismatch is a conflict that only the designer can resolve. (a) and (b) assume one value is right without proof. (d) Splitting the difference invents a dimension that is in neither place."
    },
    {
      "q": "The north arrow on a floor plan is used to:",
      "choices": [
        "Show which way the front door opens",
        "Orient the plan and show which rooms get morning and afternoon sun",
        "Mark the property line",
        "Show the roof pitch"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The north arrow orients the plan, so you can tell which rooms face which direction and get morning or afternoon sun. (a) The door swing is shown by an arc. (c) The property line is on the site plan. (d) Roof pitch is on elevations and roof plans."
    },
    {
      "q": "On a floor plan, a load-bearing wall is usually drawn:",
      "choices": [
        "As a thin line",
        "As a thick line, often hatched or filled",
        "As a dashed line",
        "As a dotted line"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Load-bearing walls are thick and often hatched. (a) Thin lines are partitions. (c) Dashed lines are hidden. (d) Dotted lines are not a wall type."
    },
    {
      "q": "The arc drawn with a door shows:",
      "choices": [
        "The door's price",
        "Which way the door opens and how much floor space the swing needs",
        "The door's color",
        "The wall thickness"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The arc is the swing \u2014 direction and clearance. (a), (c), and (d) are not shown by the arc."
    },
    {
      "q": "A stair labeled \"UP 13 RISERS\" means:",
      "choices": [
        "The stair has 13 steps going up",
        "The stair is 13 feet tall",
        "The stair is 13 inches wide",
        "There are 13 stairs in the building"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 13 risers going up, in the direction of the arrow. (b) Height is in the section. (c) Width is dimensioned on the plan. (d) The label counts risers on this stair, not stairs in the building."
    }
  ],
  "studyGuide": "\n<h3>Module 5 \u2014 Reading Floor Plans: Quick Reference</h3>\n<p><strong>Core idea:</strong> Read in walking order \u2014 start at the front door, move room to room, and test the layout against furniture and movement.</p>\n<p><strong>Dimensions:</strong> Feet and inches in strings; the parts must add up to the overall dimension. Dimensions are usually to the face of the stud.</p>\n<p><strong>Walls:</strong> Thick = exterior/load-bearing (often hatched); thin = partition. Wall tags point to the wall-type schedule.</p>\n<p><strong>Tags:</strong> Door/window tags point to the schedules \u2014 the plan shows where, the schedule says what. Read the swing arc.</p>\n<p><strong>Stairs:</strong> Parallel lines, arrow up, riser count noted. Riser height and tread depth are in the section.</p>\n<p><strong>Self-check:</strong> Walk through a plan in order, match three tags to their schedules, and check a dimension string. If you can, you have this module.</p>\n"
};
