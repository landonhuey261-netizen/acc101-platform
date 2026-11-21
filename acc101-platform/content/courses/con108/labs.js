// con108 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "drywall-flooring-takeoff",
    "title": "Drywall & Flooring Quantity Takeoff",
    "introHtml": "<p><strong>Job ticket #3021 — Takeoff for one bedroom.</strong> The room is 12 ft by 14 ft with 8-ft ceilings. The floor is 12 ft by 15 ft of hardwood. The bathroom floor is 8 ft by 10 ft of tile. The room has one 3-ft doorway with no baseboard. Your task: work out the drywall, flooring, tile, baseboard, and paint quantities. Enter each answer as a number.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=7Q98AytIKk0\" target=\"_blank\" rel=\"noopener\">How to Hang Drywall</a> — hanging and fastening drywall. This lab is a planning and calculation exercise; it does not certify hands-on skill.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Drywall and flooring work means lifting heavy sheets and kneeling for hours: lift with a partner, wear knee pads, and keep blades and tools sharp and guarded. All quantities here are planning numbers — check them against the approved plans before ordering.</p><p><strong>The numbers you need:</strong> Wall area = perimeter × ceiling height. One 4×8-ft drywall sheet covers 32 sq ft. Flooring waste is 10%. Tile: one 12×12-in tile covers 1 sq ft. Baseboard runs the room perimeter minus doorways. Paint covers about 350 sq ft per gallon.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "COMPUTED — The room is 12 ft by 14 ft with 8-ft ceilings. What is the total wall area? (Enter the number of square feet.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "df_walls",
            "expected": 416,
            "hint": "Two walls are 12 × 8 = 96 sq ft each and two are 14 × 8 = 112 sq ft each: 192 + 224 = 416 sq ft."
          }
        ]
      },
      {
        "label": "COMPUTED — How many 4×8-ft drywall sheets do the walls need? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "df_sheets",
            "expected": 13,
            "hint": "416 ÷ 32 = 13 sheets exactly."
          }
        ]
      },
      {
        "label": "COMPUTED — The ceiling is 12 ft by 14 ft. How many drywall sheets does it need? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "df_ceiling",
            "expected": 6,
            "hint": "The ceiling is 168 sq ft; 168 ÷ 32 = 5.25, so 6 sheets."
          }
        ]
      },
      {
        "label": "COMPUTED — The floor is 12 ft by 15 ft. How many square feet of flooring are needed before waste? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "df_floor",
            "expected": 180,
            "hint": "12 × 15 = 180 sq ft."
          }
        ]
      },
      {
        "label": "COMPUTED — With 10% waste, how many square feet of flooring should be ordered? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "df_floor_waste",
            "expected": 198,
            "hint": "180 × 1.10 = 198 sq ft."
          }
        ]
      },
      {
        "label": "COMPUTED — Flooring comes in boxes of 20 sq ft. How many boxes are needed for 198 sq ft? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "df_boxes",
            "expected": 10,
            "hint": "198 ÷ 20 = 9.9, so 10 boxes."
          }
        ]
      },
      {
        "label": "COMPUTED — The bathroom floor is 8 ft by 10 ft. How many 12×12-in tiles are needed before waste? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "df_tiles",
            "expected": 80,
            "hint": "The floor is 80 sq ft and each tile is 1 sq ft, so 80 tiles."
          }
        ]
      },
      {
        "label": "COMPUTED — With 10% waste, how many tiles should be ordered? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "df_tiles_waste",
            "expected": 88,
            "hint": "80 × 1.10 = 88 tiles."
          }
        ]
      },
      {
        "label": "COMPUTED — The room perimeter is 52 lin ft and the doorway is 3 ft wide. How many linear feet of baseboard are needed? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "df_baseboard",
            "expected": 49,
            "hint": "52 − 3 = 49 lin ft."
          }
        ]
      },
      {
        "label": "COMPUTED — Paint covers 350 sq ft per gallon. How many gallons are needed per coat for 416 sq ft of wall? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "df_paint_coat",
            "expected": 2,
            "hint": "416 ÷ 350 = 1.19, so 2 gallons per coat."
          }
        ]
      },
      {
        "label": "COMPUTED — How many gallons are needed for two coats on those walls? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "df_paint_two",
            "expected": 4,
            "hint": "2 gallons per coat × 2 coats = 4 gallons."
          }
        ]
      },
      {
        "label": "COMPUTED — The ceiling is 168 sq ft. How many gallons of ceiling paint are needed per coat? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "df_paint_ceiling",
            "expected": 1,
            "hint": "168 ÷ 350 = 0.48, so 1 gallon per coat."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "finish-schedule-planning",
    "title": "Finish Schedule Planning",
    "introHtml": "<p><strong>Job ticket #3022 — Plan the finish work for a small house.</strong> The house has a 40-ft by 9-ft exterior wall to side, a 120-in kitchen wall with 114 in of cabinets, and a 12-ft countertop run. Your task: put the finish steps in the right order and work out the siding, filler, countertop, and cabinet numbers. Enter each answer as a number.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=ZKpd1i2p9hY\" target=\"_blank\" rel=\"noopener\">Vinyl Siding Installation</a> — siding layout and flashing. This lab is a planning and calculation exercise; it does not certify hands-on skill.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Finish work is done around installed systems: never cut into a wall without checking for wires and pipes, and keep ladders and scaffolds stable when working at height. All numbers here are planning numbers — check them against the approved plans before ordering.</p><p><strong>The finish order is:</strong> Step 1 — Drywall finish. Step 2 — Interior trim. Step 3 — Prime + first paint coat. Step 4 — Flooring. Step 5 — Cabinets. Step 6 — Countertops. Step 7 — Final paint touch-up + punch list. For each order row, enter the step number. <strong>Other numbers you need:</strong> Siding panels are 12 ft long with an 8-in exposure, covering 8 sq ft each. A finished countertop is 36 in high; wall cabinets sit 54 in above the finished floor; the clearance from countertop to wall cabinet is 18 in. Standard countertop depth is 25-1/2 in.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "ORDER — 'Interior trim.' Which step of the finish order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_ord_trim",
            "expected": 2,
            "hint": "Order: 1 drywall finish, 2 interior trim, 3 prime + first paint coat, 4 flooring, 5 cabinets, 6 countertops, 7 final touch-up + punch list. Trim is step 2."
          }
        ]
      },
      {
        "label": "ORDER — 'Cabinets.' Which step of the finish order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_ord_cabinets",
            "expected": 5,
            "hint": "Order: 1 drywall finish, 2 trim, 3 paint, 4 flooring, 5 cabinets, 6 countertops, 7 touch-up + punch list. Cabinets are step 5."
          }
        ]
      },
      {
        "label": "ORDER — 'Flooring.' Which step of the finish order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_ord_flooring",
            "expected": 4,
            "hint": "Order: 1 drywall finish, 2 trim, 3 paint, 4 flooring, 5 cabinets, 6 countertops, 7 touch-up + punch list. Flooring is step 4."
          }
        ]
      },
      {
        "label": "ORDER — 'Final paint touch-up + punch list.' Which step of the finish order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_ord_punch",
            "expected": 7,
            "hint": "Order: 1 drywall finish, 2 trim, 3 paint, 4 flooring, 5 cabinets, 6 countertops, 7 final touch-up + punch list. The punch list is step 7 — last."
          }
        ]
      },
      {
        "label": "ORDER — 'Countertops.' Which step of the finish order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_ord_counters",
            "expected": 6,
            "hint": "Order: 1 drywall finish, 2 trim, 3 paint, 4 flooring, 5 cabinets, 6 countertops, 7 touch-up + punch list. Countertops are step 6."
          }
        ]
      },
      {
        "label": "COMPUTED — The exterior wall is 40 ft long and 9 ft high. How many square feet of siding does it need? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_siding_area",
            "expected": 360,
            "hint": "40 × 9 = 360 sq ft."
          }
        ]
      },
      {
        "label": "COMPUTED — Siding panels cover 8 sq ft each. How many panels are needed for 360 sq ft before waste? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_siding_panels",
            "expected": 45,
            "hint": "360 ÷ 8 = 45 panels."
          }
        ]
      },
      {
        "label": "COMPUTED — With 10% waste, how many siding panels should be ordered? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_siding_waste",
            "expected": 50,
            "hint": "45 × 1.10 = 49.5, so 50 panels."
          }
        ]
      },
      {
        "label": "COMPUTED — The kitchen wall is 120 in long and the cabinets total 114 in. How wide is the filler strip? (Enter the number of inches.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_filler",
            "expected": 6,
            "hint": "120 − 114 = 6 in of filler."
          }
        ]
      },
      {
        "label": "COMPUTED — A countertop run is 12 ft long and the standard depth is 25-1/2 in. How many square feet is the countertop? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_counter_area",
            "expected": 25.5,
            "hint": "12 ft × 2.125 ft = 25.5 sq ft."
          }
        ]
      },
      {
        "label": "COMPUTED — How high above the finished floor is the bottom of a wall cabinet? (Enter the number of inches.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_wall_cabinet",
            "expected": 54,
            "hint": "Wall cabinets sit 54 in above the finished floor, leaving 18 in of clearance above a 36-in counter."
          }
        ]
      },
      {
        "label": "COMPUTED — What is the clearance from the countertop to the bottom of the wall cabinets? (Enter the number of inches.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fs_clearance",
            "expected": 18,
            "hint": "54 − 36 = 18 in of working clearance."
          }
        ]
      }
    ],
    "passing": 70
  }
];
