// con107 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "rafter-stair-calculations",
    "title": "Rafter & Stair Calculations",
    "introHtml": "<p><strong>Job ticket #3011 — Roof and stair layout, single-story house with a gable roof and a straight stair to the loft.</strong> The house footprint is 30 ft by 40 ft with a 6/12 roof pitch. The sloped roof area is 1,342 sq ft. The stair rises 105 in total with a 7-in riser and an 11-in tread. Your task: work out the rafter lengths, the truss and rafter counts, the stair numbers, and the sheathing and roofing quantities — by hand, the way you would on site. Enter each answer as a number.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=kWKMX8VFhcI\" target=\"_blank\" rel=\"noopener\">Roof Anatomy</a> — a walkthrough of roof parts and pitch. This lab is a planning and calculation exercise; it does not certify hands-on skill.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Roof and stair work is done from ladders, scaffolds, and roofs: wear a hard hat, use fall protection where the job requires it, and never work on a wet or icy roof. All measurements here are planning calculations — check them against the approved plans before cutting anything.</p><p><strong>The numbers you need:</strong> Rafter length² = run² + rise². Rise = run × pitch. Slope factor for 6/12 is about 1.118. Trusses are spaced 24 in on center; rafters 16 in on center; always add 1 starter member to the space count. Stair risers = total rise ÷ riser height (round up); treads = risers − 1 when the upper floor is the last tread. Stringer length² = total rise² + total run². One roofing square = 100 sq ft; 3 bundles per square. One 4×8-ft sheet covers 32 sq ft.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "COMPUTED — A common rafter has a run of 12 ft and a rise of 9 ft. How long is the rafter? (Enter the number of feet.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rs_rafter_12_9",
            "expected": 15,
            "hint": "Rafter² = 12² + 9² = 144 + 81 = 225, so the rafter is √225 = 15 ft."
          }
        ]
      },
      {
        "label": "COMPUTED — A common rafter has a run of 8 ft and a rise of 6 ft. How long is the rafter? (Enter the number of feet.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rs_rafter_8_6",
            "expected": 10,
            "hint": "Rafter² = 8² + 6² = 64 + 36 = 100, so the rafter is √100 = 10 ft."
          }
        ]
      },
      {
        "label": "COMPUTED — The roof pitch is 4/12 and the run is 15 ft. What is the rise? (Enter the number of feet.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rs_rise_4_15",
            "expected": 5,
            "hint": "Rise = run × pitch = 15 × 4/12 = 5 ft."
          }
        ]
      },
      {
        "label": "COMPUTED — A 40-ft building needs trusses spaced 24 in on center. How many trusses are needed? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rs_trusses_40",
            "expected": 21,
            "hint": "40 ft = 480 in; 480 ÷ 24 = 20 spaces, plus 1 starter truss = 21."
          }
        ]
      },
      {
        "label": "COMPUTED — A 32-ft wall needs rafters spaced 16 in on center. How many rafters are needed on one side? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rs_rafters_32",
            "expected": 25,
            "hint": "32 ft = 384 in; 384 ÷ 16 = 24 spaces, plus 1 starter rafter = 25."
          }
        ]
      },
      {
        "label": "COMPUTED — The stair has a total rise of 105 in and a 7-in riser. How many risers are there? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rs_risers_105",
            "expected": 15,
            "hint": "105 ÷ 7 = 15 risers."
          }
        ]
      },
      {
        "label": "COMPUTED — The stair has 15 risers and an 11-in tread, and the upper floor is the last tread. What is the total run? (Enter the number of inches.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rs_run_15",
            "expected": 154,
            "hint": "Treads = 15 − 1 = 14; total run = 14 × 11 = 154 in."
          }
        ]
      },
      {
        "label": "COMPUTED — The stair stringer has a total rise of 105 in and a total run of 140 in. How long is the stringer? (Enter the number of inches.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rs_stringer",
            "expected": 175,
            "hint": "Stringer² = 105² + 140² = 11,025 + 19,600 = 30,625, so the stringer is √30,625 = 175 in."
          }
        ]
      },
      {
        "label": "COMPUTED — The bottom riser is 7 in tall and the tread is 1 in thick. How tall should the bottom riser be cut? (Enter the number of inches.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rs_bottom_riser",
            "expected": 6,
            "hint": "The bottom riser is shortened by the tread thickness: 7 − 1 = 6 in, so the first step matches the rest once its tread is on."
          }
        ]
      },
      {
        "label": "COMPUTED — The sloped roof area is 1,342 sq ft. How many 4×8-ft sheets of sheathing are needed before waste? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rs_sheets",
            "expected": 42,
            "hint": "1,342 ÷ 32 = 41.9, so 42 sheets cover the area."
          }
        ]
      },
      {
        "label": "COMPUTED — The sloped roof area is 1,342 sq ft. How many roofing squares are needed? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rs_squares",
            "expected": 14,
            "hint": "1 square = 100 sq ft; 1,342 ÷ 100 = 13.42, so 14 squares."
          }
        ]
      },
      {
        "label": "COMPUTED — At 3 bundles per square, how many bundles do 14 squares need? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rs_bundles",
            "expected": 42,
            "hint": "14 × 3 = 42 bundles."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "roofing-window-door-takeoff",
    "title": "Roofing & Window/Door Takeoff",
    "introHtml": "<p><strong>Job ticket #3012 — Material takeoff for the same house.</strong> The sloped roof area is 1,342 sq ft. Underlayment comes in rolls covering 400 sq ft. The house has four 36-in windows, one 48-in window, and one 36×80-in exterior door. Your task: work out the roofing quantities, the underlayment rolls, and the rough openings. Enter each answer as a number.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=arqUsq1ne6g\" target=\"_blank\" rel=\"noopener\">Roofing Materials Overview</a> — shingles and roofing types. This lab is a planning and calculation exercise; it does not certify hands-on skill.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Takeoff work is done at the desk, but the numbers go to the roof: double-check every quantity against the approved plans, and round up — running short on a roof wastes a day. </p><p><strong>The numbers you need:</strong> One roofing square = 100 sq ft; 3 bundles per square. Underlayment roll = 400 sq ft. Sheathing sheet = 32 sq ft. A rough opening is about 1/2 in bigger than the unit in each direction. The ridge of a gable roof runs the length of the building.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "COMPUTED — The sloped roof area is 1,342 sq ft. How many roofing squares are needed? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rw_squares",
            "expected": 14,
            "hint": "1,342 ÷ 100 = 13.42, so 14 squares."
          }
        ]
      },
      {
        "label": "COMPUTED — At 3 bundles per square, how many bundles do 14 squares need? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rw_bundles",
            "expected": 42,
            "hint": "14 × 3 = 42 bundles."
          }
        ]
      },
      {
        "label": "COMPUTED — With 10% waste, how many bundles should be ordered? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rw_bundles_waste",
            "expected": 47,
            "hint": "42 × 1.10 = 46.2, so 47 bundles."
          }
        ]
      },
      {
        "label": "COMPUTED — Underlayment covers 400 sq ft per roll. How many rolls are needed for 1,342 sq ft? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rw_underlayment",
            "expected": 4,
            "hint": "1,342 ÷ 400 = 3.36, so 4 rolls."
          }
        ]
      },
      {
        "label": "COMPUTED — With 10% waste, how many sheathing sheets should be ordered for 1,342 sq ft? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rw_sheets_waste",
            "expected": 47,
            "hint": "1,342 ÷ 32 = 41.9 sheets; 41.9 × 1.10 = 46.1, so 47 sheets."
          }
        ]
      },
      {
        "label": "COMPUTED — A window unit is 36 in wide. How wide is its rough opening? (Enter the number of inches.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rw_window_36",
            "expected": 36.5,
            "hint": "The rough opening is about 1/2 in wider than the unit: 36 + 0.5 = 36.5 in."
          }
        ]
      },
      {
        "label": "COMPUTED — An exterior door is 36 in wide and 80 in tall. How wide is its rough opening? (Enter the number of inches.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rw_door_w",
            "expected": 36.5,
            "hint": "36 + 0.5 = 36.5 in wide."
          }
        ]
      },
      {
        "label": "COMPUTED — That same 36×80-in door: how tall is its rough opening? (Enter the number of inches.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rw_door_h",
            "expected": 80.5,
            "hint": "80 + 0.5 = 80.5 in tall."
          }
        ]
      },
      {
        "label": "COMPUTED — The building is 30 ft by 40 ft with a gable roof. How long is the ridge? (Enter the number of feet.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rw_ridge",
            "expected": 40,
            "hint": "The ridge runs the length of the building: 40 ft."
          }
        ]
      },
      {
        "label": "COMPUTED — A window unit is 48 in wide. How wide is its rough opening? (Enter the number of inches.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rw_window_48",
            "expected": 48.5,
            "hint": "48 + 0.5 = 48.5 in."
          }
        ]
      },
      {
        "label": "COMPUTED — Four windows each need a 36-1/2-in rough opening. What is their total rough opening width? (Enter the number of inches.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rw_windows_total",
            "expected": 146,
            "hint": "4 × 36.5 = 146 in."
          }
        ]
      },
      {
        "label": "COMPUTED — A sloped roof area is 671 sq ft. How many 4×8-ft sheathing sheets are needed before waste? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rw_sheets_671",
            "expected": 21,
            "hint": "671 ÷ 32 = 20.97, so 21 sheets."
          }
        ]
      }
    ],
    "passing": 70
  }
];
