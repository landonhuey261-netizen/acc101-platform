// con105 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "concrete-quantity-mix-calculations",
    "title": "Concrete Quantity & Mix Calculations",
    "introHtml": "<p><strong>Job ticket #5101 — Concrete quantities for a garage slab and footings.</strong> Customer: a homeowner adding a garage; the slab is 24 feet by 18 feet by 6 inches deep, and the footings are 54 feet of strip footing, 2 feet wide and 1 foot deep. Your task: figure the concrete, the bags for a small pad, and the mix numbers. Read the numbers in the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=3vz7s0COJV0\" target=\"_blank\" rel=\"noopener\">How to Pour a Concrete Slab</a> — a slab pour from start to finish: the mix, the placing, the screeding, and the finish. Watch the quantities in action, then work your own numbers below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any pour: PPE on (boots, gloves, eye protection — fresh concrete burns skin), forms and rebar checked, and the truck’s access path clear. Never add water to a load to make it easier to place.</p><p><strong>The job:</strong> The garage slab is 24 feet by 18 feet by 6 inches deep. Ready-mix is ordered with a 10% waste factor. A small pad on the same job is 4 feet by 4 feet by 4 inches deep and will be mixed from 80-pound bags, each yielding 0.6 cubic feet. The mix uses 500 pounds of cement and 225 pounds of water, in the ratio 1 part cement, 2 parts sand, 3 parts stone. A test batch is 12 cubic feet. The specified slump is 4 inches, plus or minus 1 inch, and the field test reads 6 inches. A strip footing is 54 feet long, 2 feet wide, and 1 foot deep. A column footing is 2 feet by 2 feet by 4 feet deep. Dowel bars run along a 48-foot footing at 24 inches on center. For each row, enter the number asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "COMPUTED — The slab is 24 feet by 18 feet. What is its area in square feet? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cq_area",
            "expected": 432,
            "hint": "Area = 24 × 18 = 432 square feet."
          }
        ]
      },
      {
        "label": "COMPUTED — The slab is 432 square feet by 6 inches deep. What is its volume in cubic feet? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cq_vol_cf",
            "expected": 216,
            "hint": "Six inches is 0.5 feet: 432 × 0.5 = 216 cubic feet."
          }
        ]
      },
      {
        "label": "COMPUTED — 216 cubic feet is how many cubic yards? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cq_vol_cy",
            "expected": 8,
            "hint": "216 ÷ 27 = 8 cubic yards."
          }
        ]
      },
      {
        "label": "COMPUTED — With a 10% waste factor, how many cubic yards should be ordered for the 8-yard slab? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cq_order",
            "expected": 9,
            "hint": "8 × 1.10 = 8.8 cubic yards, so order 9 cubic yards."
          }
        ]
      },
      {
        "label": "COMPUTED — The small pad is 4 feet by 4 feet by 4 inches deep and each 80-pound bag yields 0.6 cubic feet. How many bags are needed? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cq_bags",
            "expected": 9,
            "hint": "Volume = 4 × 4 × 1/3 = 5.33 cubic feet; 5.33 ÷ 0.6 = 8.9, so round up to 9 bags."
          }
        ]
      },
      {
        "label": "COMPUTED — The mix uses 500 pounds of cement and 225 pounds of water. What is the water-cement ratio? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cq_wc",
            "expected": 0.45,
            "hint": "Ratio = 225 ÷ 500 = 0.45."
          }
        ]
      },
      {
        "label": "COMPUTED — A 12-cubic-foot batch in the ratio 1:2:3 (cement:sand:stone). How many cubic feet of cement are in the batch? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cq_cement",
            "expected": 2,
            "hint": "Total parts = 6; cement = 12 × 1/6 = 2 cubic feet."
          }
        ]
      },
      {
        "label": "COMPUTED — In the same 12-cubic-foot batch, how many cubic feet of sand are there? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cq_sand",
            "expected": 4,
            "hint": "Sand = 12 × 2/6 = 4 cubic feet."
          }
        ]
      },
      {
        "label": "COMPUTED — In the same 12-cubic-foot batch, how many cubic feet of stone are there? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cq_stone",
            "expected": 6,
            "hint": "Stone = 12 × 3/6 = 6 cubic feet."
          }
        ]
      },
      {
        "label": "DECISION — The specified slump is 4 inches, plus or minus 1 inch, and the field test reads 6 inches. What is the correct call? 1) Pour it — wetter is better 2) Hold the load and call the batch plant — it is too wet 3) Add more water to make it flow",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cq_slump",
            "expected": 2,
            "hint": "Six inches is outside the 3-to-5-inch range, so the load is too wet to pour. Adding water (3) makes it worse, and pouring it (1) places weak concrete."
          }
        ]
      },
      {
        "label": "COMPUTED — The strip footing is 54 feet long, 2 feet wide, and 1 foot deep. How many cubic yards of concrete does it need? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cq_footing",
            "expected": 4,
            "hint": "Volume = 54 × 2 × 1 = 108 cubic feet; 108 ÷ 27 = 4 cubic yards."
          }
        ]
      },
      {
        "label": "COMPUTED — A column footing is 2 feet by 2 feet by 4 feet deep. What is its volume in cubic feet? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cq_column",
            "expected": 16,
            "hint": "Volume = 2 × 2 × 4 = 16 cubic feet."
          }
        ]
      },
      {
        "label": "DECISION — Concrete typically reaches about what percentage of its 28-day strength at 7 days? 1) 25% 2) 50% 3) 70% 4) 100%",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cq_7day",
            "expected": 3,
            "hint": "At 7 days concrete is typically about 70% of its 28-day strength. Twenty-five and 50 percent understate the gain, and 100% comes at 28 days."
          }
        ]
      },
      {
        "label": "COMPUTED — Dowel bars run along a 48-foot footing at 24 inches on center. How many dowels are needed? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cq_dowels",
            "expected": 25,
            "hint": "Spaces = 48 × 12 ÷ 24 = 24, and bars = spaces + 1 = 25 dowels."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "formwork-rebar-planning",
    "title": "Formwork & Rebar Planning",
    "introHtml": "<p><strong>Job ticket #5102 — Formwork and rebar for a foundation wall.</strong> Customer: the same home builder; the wall is 27 feet long, 8 feet high, and 1 foot thick, poured in place with #4 vertical and horizontal bars. Your task: plan the forms, the ties, and the steel. Read the numbers in the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=si__JJXgjV0\" target=\"_blank\" rel=\"noopener\">How to Install a Solid Concrete Slab</a> — formwork, the reinforcement grid, the pour, and the stripping. Watch the form boards and the rebar spacing, then plan your own wall below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any formwork: PPE on, check that the excavation is protected and inspected, and never stand under a form being lifted. Forms are checked before the pour, not during it — a blowout cannot be fixed with concrete already in the forms.</p><p><strong>The wall:</strong> The wall is 27 feet long, 8 feet high, and 1 foot thick. Fresh concrete weighs 150 pounds per cubic foot. Plywood sheets are 4 feet by 8 feet. Form ties run in columns 3 feet apart horizontally and rows 2 feet apart vertically. Vertical #4 bars run at 16 inches on center, and horizontal #4 bars also run at 16 inches on center. A #4 bar is 1/2 inch in diameter and laps at 40 bar diameters. The 2×4 studs behind the sheathing run at 12 inches on center along the 27-foot wall. For each row, enter the number asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "COMPUTED — The wall is 27 feet long and 8 feet high. How many square feet of sheathing does one side need? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fr_area",
            "expected": 216,
            "hint": "Area = 27 × 8 = 216 square feet."
          }
        ]
      },
      {
        "label": "COMPUTED — Each plywood sheet is 4 feet by 8 feet. How many sheets cover the 216-square-foot side? Round up. (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fr_sheets",
            "expected": 7,
            "hint": "Each sheet is 32 square feet; 216 ÷ 32 = 6.75, so round up to 7 sheets."
          }
        ]
      },
      {
        "label": "COMPUTED — The wall is 27 feet by 8 feet by 1 foot thick. What is its volume in cubic feet? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fr_vol_cf",
            "expected": 216,
            "hint": "Volume = 27 × 8 × 1 = 216 cubic feet."
          }
        ]
      },
      {
        "label": "COMPUTED — 216 cubic feet is how many cubic yards? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fr_vol_cy",
            "expected": 8,
            "hint": "216 ÷ 27 = 8 cubic yards."
          }
        ]
      },
      {
        "label": "COMPUTED — Fresh concrete weighs 150 pounds per cubic foot and the wall is 8 feet deep. What is the lateral pressure at the bottom, in psf? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fr_pressure",
            "expected": 1200,
            "hint": "Pressure = 150 × 8 = 1,200 psf at the bottom of the pour."
          }
        ]
      },
      {
        "label": "COMPUTED — Form tie columns are 3 feet apart along the 27-foot wall. How many columns of ties are there? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fr_columns",
            "expected": 10,
            "hint": "Spaces = 27 ÷ 3 = 9, and columns = spaces + 1 = 10."
          }
        ]
      },
      {
        "label": "COMPUTED — Form tie rows are 2 feet apart up the 8-foot wall. How many rows of ties are there? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fr_rows",
            "expected": 5,
            "hint": "Spaces = 8 ÷ 2 = 4, and rows = spaces + 1 = 5."
          }
        ]
      },
      {
        "label": "COMPUTED — With 10 columns and 5 rows of ties, how many ties are needed in total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fr_ties",
            "expected": 50,
            "hint": "Total ties = 10 × 5 = 50."
          }
        ]
      },
      {
        "label": "COMPUTED — Vertical #4 bars run at 16 inches on center along the 27-foot wall. How many vertical bars are needed? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fr_vbars",
            "expected": 21,
            "hint": "Spaces = 27 × 12 ÷ 16 = 20.25, so 20 spaces; bars = spaces + 1 = 21."
          }
        ]
      },
      {
        "label": "COMPUTED — Horizontal #4 bars run at 16 inches on center up the 8-foot wall. How many horizontal bars are needed? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fr_hbars",
            "expected": 7,
            "hint": "Spaces = 8 × 12 ÷ 16 = 6, and bars = spaces + 1 = 7."
          }
        ]
      },
      {
        "label": "COMPUTED — A #4 bar is 1/2 inch in diameter and laps at 40 bar diameters. How long is the lap splice, in inches? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fr_lap",
            "expected": 20,
            "hint": "Lap = 40 × 0.5 = 20 inches."
          }
        ]
      },
      {
        "label": "DECISION — A footing is cast against earth. How much concrete cover does its rebar need? 1) 1 inch 2) 2 inches 3) 3 inches",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fr_cover",
            "expected": 3,
            "hint": "Concrete cast against earth needs 3 inches of cover to protect the steel from moisture. Two inches is the weather-exposed cover and 1 inch is far too little."
          }
        ]
      },
      {
        "label": "DECISION — When can the wall forms be stripped? 1) As soon as the pour finishes 2) After the concrete gains enough strength, typically 24 hours or more per the specification 3) Only after 28 days",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fr_strip",
            "expected": 2,
            "hint": "Forms come off once the concrete is strong enough to stand on its own — typically about 24 hours for walls, per the specification. Stripping at once (1) damages the green concrete, and waiting 28 days (3) is unnecessary."
          }
        ]
      },
      {
        "label": "COMPUTED — The 2×4 studs behind the sheathing run at 12 inches on center along the 27-foot wall. How many studs are needed? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fr_studs",
            "expected": 28,
            "hint": "Spaces = 27 × 12 ÷ 12 = 27, and studs = spaces + 1 = 28."
          }
        ]
      }
    ],
    "passing": 70
  }
];
