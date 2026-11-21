// con106 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "floor-joist-layout-cut-list",
    "title": "Floor Joist Layout & Cut List",
    "introHtml": "<p><strong>Job ticket #6101 — Floor joist layout and cut list, Lot 7.</strong> Customer: a home builder; the first floor is 28 feet by 24 feet, with a center girder down the middle, so the joists span 12 feet on each side. Your task: lay out the joists, build the cut list, and figure the subfloor, the hangers, and the anchor bolts. Read the setup in the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=TJMaE5WfhsE\" target=\"_blank\" rel=\"noopener\">Floor Framing — Crafted Workshop</a> — joists, blocking, and the subfloor going down on a real project, with the panel layout and nailing explained as the work happens.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any framing: PPE on, hard hat and gloves, watch for the nail gun, and never stand under a wall or a joist that is being set. Keep the deck clear — a trip on a floor frame is a fall onto lumber and nails.</p><p><strong>The setup:</strong> The floor is 28 feet by 24 feet. A center girder runs down the middle of the 28-foot direction, so the joists span 12 feet on each side. Joists are 2×10s at 16 inches on center. The rim joist runs around the whole perimeter. Subfloor is 4-by-8 tongue-and-groove sheets, ordered with 10% waste. Joist hangers are needed where each joist meets the girder. Mid-span blocking goes in each 12-foot span. The sill plate runs around the perimeter, with anchor bolts at most 6 feet on center. The girder is supported by posts spaced 7 feet on center. For each row, enter the number asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "COMPUTED — The joists run across the 28-foot width at 16 inches on center. How many joist spaces are there? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fj_spaces",
            "expected": 21,
            "hint": "Spaces = 28 × 12 ÷ 16 = 336 ÷ 16 = 21 spaces."
          }
        ]
      },
      {
        "label": "COMPUTED — With 21 spaces, how many joists are needed on one side of the girder? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fj_per_side",
            "expected": 22,
            "hint": "Joists = spaces + 1 = 21 + 1 = 22 joists per side."
          }
        ]
      },
      {
        "label": "COMPUTED — There are 22 joists on each side of the girder. How many joists total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fj_total",
            "expected": 44,
            "hint": "Total = 22 × 2 = 44 joists."
          }
        ]
      },
      {
        "label": "COMPUTED — One joist is a 2×10, 12 feet long. How many board feet is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fj_bf_each",
            "expected": 20,
            "hint": "Board feet = (2 × 10 × 12) ÷ 12 = 20 board feet."
          }
        ]
      },
      {
        "label": "COMPUTED — There are 44 joists at 20 board feet each. How many board feet total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fj_bf_total",
            "expected": 880,
            "hint": "Total = 44 × 20 = 880 board feet."
          }
        ]
      },
      {
        "label": "COMPUTED — The floor is 28 feet by 24 feet. How many lineal feet of rim joist run around the perimeter? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fj_rim",
            "expected": 104,
            "hint": "Perimeter = 2 × (28 + 24) = 2 × 52 = 104 lineal feet."
          }
        ]
      },
      {
        "label": "COMPUTED — The floor area is 28 × 24 = 672 square feet. How many 4-by-8 subfloor sheets are needed, before waste? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fj_sheets",
            "expected": 21,
            "hint": "Sheets = 672 ÷ 32 = 21 sheets."
          }
        ]
      },
      {
        "label": "COMPUTED — 21 sheets are needed, ordered with 10% waste. How many sheets should be ordered? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fj_sheets_waste",
            "expected": 24,
            "hint": "21 × 1.10 = 23.1, rounded up to 24 sheets."
          }
        ]
      },
      {
        "label": "COMPUTED — Each joist that meets the center girder needs one joist hanger. How many hangers are needed? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fj_hangers",
            "expected": 44,
            "hint": "One hanger per joist, and there are 44 joists, so 44 hangers."
          }
        ]
      },
      {
        "label": "COMPUTED — Mid-span blocking goes in each 12-foot span, one block per joist space, 21 spaces per side. How many blocks total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fj_blocking",
            "expected": 42,
            "hint": "Blocks = 21 per side × 2 sides = 42 blocks."
          }
        ]
      },
      {
        "label": "COMPUTED — Each joist spans 12 feet. How long is each joist in inches? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fj_length",
            "expected": 144,
            "hint": "12 feet × 12 inches = 144 inches."
          }
        ]
      },
      {
        "label": "DECISION — The joists have a visible crown. Which way should they be installed? 1) Crown down 2) Crown up 3) It does not matter",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fj_crown",
            "expected": 2,
            "hint": "Crown up — a crown-down joist sags under load and the floor or ceiling shows it."
          }
        ]
      },
      {
        "label": "COMPUTED — The sill plate runs 104 feet around the perimeter, with anchor bolts at most 6 feet on center. How many bolts are needed at minimum? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fj_bolts",
            "expected": 18,
            "hint": "104 ÷ 6 = 17.33, rounded up to 18 bolts."
          }
        ]
      },
      {
        "label": "COMPUTED — The girder is 28 feet long, supported by posts spaced 7 feet on center. How many posts are needed? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fj_posts",
            "expected": 5,
            "hint": "Spaces = 28 ÷ 7 = 4, and posts = spaces + 1 = 5 posts."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "wall-framing-takeoff",
    "title": "Wall Framing Takeoff",
    "introHtml": "<p><strong>Job ticket #6102 — Wall framing takeoff, Lot 7.</strong> Customer: the same home builder; one exterior wall is 40 feet long and 8 feet high, with one 3-foot window and one 3-foot door. Your task: count the studs, the plates, the sheathing, and the nails, and set the rough openings. Read the setup in the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=09PUheqVX9A\" target=\"_blank\" rel=\"noopener\">Wood Framing Basics — Carpentry 101</a> — wood framing from the ground up, with the wall layout, the plates marked together, and the wall built flat on the deck.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any wall framing: PPE on, keep the deck clear, and never raise a wall in high wind. A wall is raised together on a count, and it is braced the moment it is vertical — never left standing on hands alone.</p><p><strong>The setup:</strong> The wall is 40 feet long and 8 feet high. Studs are at 16 inches on center. There is one 3-foot window and one 3-foot door. Each opening needs 2 king studs and 2 jack studs. The window sill needs 2 cripple studs, and there are 2 header cripples above the window header. The wall has a bottom plate, a top plate, and a double top plate, all in 16-foot lengths. Sheathing is 4-by-8 sheets. A 3-foot window needs a rough opening 39 inches wide; a 3-foot door needs a rough opening 38 inches wide. Each full stud is nailed with 2 nails at each end. The wall has 2 corners, each a three-stud post. For each row, enter the number asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "COMPUTED — The wall is 40 feet long with studs at 16 inches on center. How many stud spaces are there? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wf_spaces",
            "expected": 30,
            "hint": "Spaces = 40 × 12 ÷ 16 = 480 ÷ 16 = 30 spaces."
          }
        ]
      },
      {
        "label": "COMPUTED — With 30 spaces, how many full studs are there? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wf_studs",
            "expected": 31,
            "hint": "Studs = spaces + 1 = 30 + 1 = 31 full studs."
          }
        ]
      },
      {
        "label": "COMPUTED — Each of the 2 openings needs 2 king studs and 2 jack studs. How many extra studs is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wf_extra",
            "expected": 8,
            "hint": "Extra = 2 openings × (2 king + 2 jack) = 2 × 4 = 8 studs."
          }
        ]
      },
      {
        "label": "COMPUTED — There are 31 full studs plus 8 extra studs for the openings. How many studs total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wf_total",
            "expected": 39,
            "hint": "Total = 31 + 8 = 39 studs."
          }
        ]
      },
      {
        "label": "COMPUTED — The window sill is carried by cripple studs. How many sill cripples are under the window? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wf_sill_crip",
            "expected": 2,
            "hint": "Two cripples under a 3-foot window sill, dividing the opening into thirds."
          }
        ]
      },
      {
        "label": "COMPUTED — Header cripples fill the space above the window header. How many are there? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wf_head_crip",
            "expected": 2,
            "hint": "Two header cripples above the window header, spaced like the wall studs."
          }
        ]
      },
      {
        "label": "COMPUTED — The wall has a bottom plate, a top plate, and a double top plate, each 40 feet long. How many lineal feet of plate is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wf_plates",
            "expected": 120,
            "hint": "Plates = 3 × 40 = 120 lineal feet."
          }
        ]
      },
      {
        "label": "COMPUTED — 120 lineal feet of plate comes in 16-foot lengths. How many pieces are needed? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wf_plate_pieces",
            "expected": 8,
            "hint": "120 ÷ 16 = 7.5, rounded up to 8 pieces."
          }
        ]
      },
      {
        "label": "COMPUTED — The wall is 40 feet by 8 feet. What is its sheathing area in square feet? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wf_sheathing",
            "expected": 320,
            "hint": "Area = 40 × 8 = 320 square feet."
          }
        ]
      },
      {
        "label": "COMPUTED — The sheathing area is 320 square feet. How many 4-by-8 sheets are needed? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wf_sheets",
            "expected": 10,
            "hint": "Sheets = 320 ÷ 32 = 10 sheets."
          }
        ]
      },
      {
        "label": "COMPUTED — A 3-foot window needs a rough opening 3 inches wider than the window. How wide is the rough opening in inches? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wf_win_ro",
            "expected": 39,
            "hint": "Rough opening = 36 + 3 = 39 inches."
          }
        ]
      },
      {
        "label": "COMPUTED — A 3-foot door needs a rough opening 2 inches wider than the door. How wide is the rough opening in inches? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wf_door_ro",
            "expected": 38,
            "hint": "Rough opening = 36 + 2 = 38 inches."
          }
        ]
      },
      {
        "label": "COMPUTED — There are 39 studs, each 8 feet long. How many total lineal feet of stud is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wf_stud_lf",
            "expected": 312,
            "hint": "Lineal feet = 39 × 8 = 312 feet."
          }
        ]
      },
      {
        "label": "COMPUTED — Each of the 31 full studs is nailed with 2 nails at each end. How many nails is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wf_nails",
            "expected": 124,
            "hint": "Nails = 31 studs × 2 ends × 2 nails = 124 nails."
          }
        ]
      },
      {
        "label": "COMPUTED — The wall has 2 corners, each a three-stud post. How many studs are in the corner posts? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wf_corners",
            "expected": 6,
            "hint": "Corner studs = 2 corners × 3 studs = 6 studs."
          }
        ]
      },
      {
        "label": "DECISION — The wall is 40 feet long. How many temporary braces should it have at minimum? 1) None — the wall stands on its own 2) At least 1 per wall, typically 2 on a long wall 3) One brace on every stud",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wf_bracing",
            "expected": 2,
            "hint": "At least one brace per wall, and typically two on a long wall like this one, at the corners or third points."
          }
        ]
      }
    ],
    "passing": 70
  }
];
