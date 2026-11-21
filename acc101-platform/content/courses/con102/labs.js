// con102 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number or a computed value.
module.exports = [
  {
    "id": "measurement-calculation-drills",
    "title": "Measurement & Calculation Drills",
    "introHtml": "<p><strong>Job ticket #3002 — Measure and figure a 12 x 14 ft storage shed.</strong> Customer: a homeowner; the shed is a wood-frame building on a concrete slab, 12 feet by 14 feet, with 8-foot walls and a single door. Your task: work the measurements and quantities the crew needs before the first board is cut. Read the job in the task, then enter the computed value for each row. All answers are numbers — fractions are asked for as sixteenths where noted.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=LQ0_301xzLg\" target=\"_blank\" rel=\"noopener\">How to Read a Tape Measure (Inches)</a> — read a tape to the sixteenth before you start your figures below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any measuring or cutting: PPE on (hard hat, safety glasses, gloves, boots), check that saw guards are in place, and keep hands clear of blades. Measure twice, cut once — and never measure a running saw or a load under a crane.</p><p><strong>The job:</strong> A storage shed, 12 feet by 14 feet, 8-foot walls, on a concrete slab 4 inches thick. Walls are framed with 2x4 studs at 16 inches on center. The floor is 12 x 14 feet. The slab needs concrete; the walls need studs and drywall; the floor needs flooring. A round footing 3 feet in diameter and 2 feet deep holds a post. One wall is 20 feet long on the garage next door and needs studs too. Work each figure and enter the number asked for.</p>",
    "headers": [
      "Calculation",
      "Your answer"
    ],
    "rows": [
      {
        "label": "COMPUTED — The shed floor is 12 feet by 14 feet. What is the floor area in square feet? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "md_area",
            "expected": 168,
            "hint": "Area = length x width. 12 x 14 = 168 square feet."
          }
        ]
      },
      {
        "label": "COMPUTED — The shed floor is 12 feet by 14 feet. What is the perimeter in feet? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "md_perimeter",
            "expected": 52,
            "hint": "Perimeter = 2 x (length + width). 2 x (12 + 14) = 2 x 26 = 52 feet."
          }
        ]
      },
      {
        "label": "COMPUTED — The slab is 12 feet by 14 feet and 4 inches thick. What is its volume in cubic feet? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "md_slab_cuft",
            "expected": 56,
            "hint": "4 inches is 1/3 foot. Volume = 12 x 14 x 1/3 = 168 / 3 = 56 cubic feet."
          }
        ]
      },
      {
        "label": "COMPUTED — The round footing is 3 feet in diameter and 2 feet deep. Its volume is about 14.1 cubic feet. How many 80-pound bags of concrete mix (0.6 cubic feet each) are needed to fill it? (Enter the whole number of bags, rounding up.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "md_bags",
            "expected": 24,
            "hint": "14.1 cubic feet / 0.6 cubic feet per bag = 23.5 bags — round up to 24 bags."
          }
        ]
      },
      {
        "label": "COMPUTED — A wall is 12 feet long with studs 16 inches on center. How many studs are needed, before openings and waste? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "md_studs12",
            "expected": 10,
            "hint": "12 feet = 144 inches. 144 / 16 = 9, plus 1 for the end stud = 10 studs."
          }
        ]
      },
      {
        "label": "COMPUTED — A wall is 20 feet long with studs 16 inches on center. How many studs are needed, before openings and waste? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "md_studs20",
            "expected": 16,
            "hint": "20 feet = 240 inches. 240 / 16 = 15, plus 1 for the end stud = 16 studs."
          }
        ]
      },
      {
        "label": "COMPUTED — A 2x6 that is 10 feet long has how many board feet? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "md_bf",
            "expected": 10,
            "hint": "Board feet = thickness x width x length / 12. 2 x 6 x 10 / 12 = 120 / 12 = 10 board feet."
          }
        ]
      },
      {
        "label": "COMPUTED — 3/8 inch + 5/16 inch = how many sixteenths of an inch? (Enter the number of sixteenths.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "md_frac_add",
            "expected": 11,
            "hint": "3/8 = 6/16. 6/16 + 5/16 = 11/16 — that is 11 sixteenths."
          }
        ]
      },
      {
        "label": "COMPUTED — 7/8 inch - 1/4 inch = how many sixteenths of an inch? (Enter the number of sixteenths.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "md_frac_sub",
            "expected": 10,
            "hint": "7/8 = 14/16 and 1/4 = 4/16. 14/16 - 4/16 = 10/16 — that is 10 sixteenths."
          }
        ]
      },
      {
        "label": "COMPUTED — A board measures 0.75 feet. How many inches is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "md_decimal",
            "expected": 9,
            "hint": "0.75 feet x 12 inches per foot = 9 inches."
          }
        ]
      },
      {
        "label": "COMPUTED — A bolt is 76.2 millimeters long. How many inches is that? (Enter the number. 1 inch = 25.4 mm.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "md_metric",
            "expected": 3,
            "hint": "76.2 / 25.4 = 3 inches."
          }
        ]
      },
      {
        "label": "COMPUTED — The shed floor is a rectangle 9 feet by 12 feet. What is the length of its diagonal in feet? (Enter the number. Hint: 9-12-15.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "md_diagonal",
            "expected": 15,
            "hint": "The diagonal is the square root of 9^2 + 12^2 = 81 + 144 = 225, and the square root of 225 is 15 feet — the 9-12-15 triangle."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "materials-selection",
    "title": "Materials Selection",
    "introHtml": "<p><strong>Job ticket #3003 — Pick the right materials for a backyard deck and shed.</strong> Customer: a homeowner; the job is a 12 x 14 ft deck with a small storage shed, built to last outdoors in all weather. Your task: choose the right material or fastener for each part of the job. Read the job in the task, then enter the option number for each row.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any cutting or fastening: PPE on (hard hat, safety glasses, gloves, boots), check that saw guards are in place, and keep hands clear of blades. Choose materials before you order — the wrong material installed is the wrong material twice.</p><p><strong>The job:</strong> A backyard deck (12 x 14 ft) and a storage shed. The deck posts sit in the ground, the deck boards are outdoors in rain and sun, the shed walls are framed in a cold climate, the shed has a bathroom corner that gets wet, the deck ledger attaches to the house, and the crew needs to lift a 1,000-pound bundle of lumber with a two-leg sling. Pick the right material or fastener for each part.</p>",
    "headers": [
      "Selection",
      "Your pick"
    ],
    "rows": [
      {
        "label": "SELECTION — The deck posts sit in the ground. Which lumber do you use? 1) Untreated pine 2) Pressure-treated lumber rated for ground contact 3) Drywall 4) MDF",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ms_posts",
            "expected": 2,
            "hint": "Wood in the ground rots — only pressure-treated lumber rated for ground contact survives. Untreated pine (1) rots, drywall (3) and MDF (4) fall apart outdoors."
          }
        ]
      },
      {
        "label": "SELECTION — The shed's exterior walls are in a cold climate and need room for thick insulation. Which studs do you use? 1) 2x4 studs 2) 2x6 studs 3) 2x2 studs 4) 1x4 furring strips",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ms_studs",
            "expected": 2,
            "hint": "A 2x6 wall is 5 1/2 inches deep and holds thicker insulation than a 2x4 wall. 2x2 (3) and furring strips (4) are far too small for an exterior wall."
          }
        ]
      },
      {
        "label": "SELECTION — The deck ledger board attaches to the house and carries the deck's weight. Which fastener do you use? 1) 16d common nails 2) Lag screws (with washers) 3) Drywall screws 4) Finishing nails",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ms_ledger",
            "expected": 2,
            "hint": "A ledger is a heavy structural connection — lag screws with washers are the right fastener. Nails (1) can pull out, drywall screws (3) are brittle and snap, and finishing nails (4) are for trim."
          }
        ]
      },
      {
        "label": "SELECTION — The shed has a bathroom corner that gets wet. Which wall board do you use there? 1) Standard drywall 2) Moisture-resistant drywall (green board) 3) Untreated plywood 4) Cardboard",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ms_bath",
            "expected": 2,
            "hint": "Wet areas need moisture-resistant drywall. Standard drywall (1) soaks up water and grows mold, untreated plywood (3) swells, and cardboard (4) is not a building material."
          }
        ]
      },
      {
        "label": "SELECTION — The deck joists meet the ledger board. How do you connect them? 1) Toenail them with nails only 2) Joist hangers with the right nails 3) Glue only 4) Leave a gap and hope",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ms_joists",
            "expected": 2,
            "hint": "Joist hangers are the engineered connection for joist-to-ledger. Toenailing alone (1) is weaker, glue (3) is not a structural connection, and a gap (4) is not a connection at all."
          }
        ]
      },
      {
        "label": "SELECTION — The deck is a driveway-side slab that cars will drive on. Which concrete strength do you order? 1) 2,000 psi 2) 3,000 psi 3) 4,000 psi 4) 1,500 psi",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ms_concrete",
            "expected": 3,
            "hint": "A slab that carries vehicles needs 4,000 psi concrete. 2,000 psi (1) and 1,500 psi (4) are too weak, and 3,000 psi (2) is for light-duty slabs, not driveways."
          }
        ]
      },
      {
        "label": "SELECTION — The crew must lift a 1,000-pound bundle of lumber with a two-leg sling. Which sling angle is safest? 1) 30 degrees from horizontal 2) 45 degrees from horizontal 3) 60 degrees from horizontal 4) 15 degrees from horizontal",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ms_sling",
            "expected": 3,
            "hint": "The steeper the angle, the less load on each leg: at 60 degrees each leg carries about 577 pounds, at 30 degrees each leg carries the full 1,000 pounds. 60 degrees (3) is the safest of the four."
          }
        ]
      },
      {
        "label": "SELECTION — You are cutting plywood for the shed floor and want a clean edge with little tear-out. Which saw blade do you use? 1) A coarse framing blade 2) A fine-tooth plywood blade 3) A masonry blade 4) A dull blade",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ms_blade",
            "expected": 2,
            "hint": "A fine-tooth blade cuts plywood cleanly with little tear-out. A coarse framing blade (1) tears the face veneer, a masonry blade (3) is for concrete, and a dull blade (4) burns and tears."
          }
        ]
      },
      {
        "label": "SELECTION — The shed walls are framed with 2x4 studs. Which nails do you use for the framing? 1) 16d common nails 2) 8d finish nails 3) Roofing nails 4) 4d brads",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ms_nails",
            "expected": 1,
            "hint": "16d common nails are the framing nail. Finish nails (2) and brads (4) are for trim, and roofing nails (3) are for shingles."
          }
        ]
      },
      {
        "label": "COMPUTED — The shed needs 6 cubic feet of concrete for footings. An 80-pound bag of mix yields 0.6 cubic feet. How many bags do you order? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ms_bags",
            "expected": 10,
            "hint": "6 / 0.6 = 10 bags."
          }
        ]
      },
      {
        "label": "COMPUTED — A wall is 16 feet long with studs 16 inches on center. How many studs, before openings and waste? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ms_studs16",
            "expected": 13,
            "hint": "16 feet = 192 inches. 192 / 16 = 12, plus 1 for the end stud = 13 studs."
          }
        ]
      },
      {
        "label": "COMPUTED — A 2x6 that is 12 feet long has how many board feet? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ms_bf",
            "expected": 12,
            "hint": "Board feet = thickness x width x length / 12. 2 x 6 x 12 / 12 = 144 / 12 = 12 board feet."
          }
        ]
      }
    ],
    "passing": 70
  }
];
