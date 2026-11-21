// con104 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "grade-leveling-calculations",
    "title": "Grade & Leveling Calculations",
    "introHtml": "<p><strong>Job ticket #4101 — Grade and leveling for a new house, Lot 14.</strong> Customer: a home builder; the lot is mostly flat with a gentle fall toward the street. Your task: run the level, carry elevations from the benchmark, and set the grade stakes for the footing and the pad. Read the setup in the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=qsmbw_9wiDQ\" target=\"_blank\" rel=\"noopener\">How to Use a Laser Level for Beginners</a> — a rotary laser, a grade rod, and a receiver: watch how the beeps tell you when the rod is level with the beam, then work the same readings below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any leveling or staking: PPE on, watch for machine traffic, and never stand in an excavator’s swing radius. Protect the benchmark and the grade stakes — a knocked stake is a lost elevation.</p><p><strong>The setup:</strong> The benchmark (BM) on Lot 14 is elevation 100.00 feet. You set up the builder’s level and take a backsight of 4.20 feet on the BM. Your height of instrument (HI) is BM + backsight. You then take foresights: 6.80 feet at corner A and 5.10 feet at corner B. The run from A to B is 85 feet. Finished grade at corner A is 98.50 feet. Later you move the instrument and take a new backsight of 3.60 feet on corner B, then a foresight of 4.95 feet at a footing corner. The building pad is 20 feet by 30 feet and needs 0.5 feet of cut. For each row, enter the number asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "COMPUTED — Benchmark 100.00 feet, backsight 4.20 feet. What is the height of instrument (HI)? (Enter the number of feet.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gl_hi",
            "expected": 104.2,
            "hint": "HI = benchmark + backsight. 100.00 + 4.20 = 104.20 feet."
          }
        ]
      },
      {
        "label": "COMPUTED — With an HI of 104.20 feet, a foresight of 6.80 feet at corner A. What is the elevation of corner A? (Enter the number of feet.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gl_elev_a",
            "expected": 97.4,
            "hint": "Elevation = HI − foresight. 104.20 − 6.80 = 97.40 feet."
          }
        ]
      },
      {
        "label": "COMPUTED — With the same HI of 104.20 feet, a foresight of 5.10 feet at corner B. What is the elevation of corner B? (Enter the number of feet.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gl_elev_b",
            "expected": 99.1,
            "hint": "Elevation = HI − foresight. 104.20 − 5.10 = 99.10 feet."
          }
        ]
      },
      {
        "label": "COMPUTED — Corner A is 97.40 feet and corner B is 99.10 feet. How many feet higher is B than A? (Enter the number of feet.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gl_rise",
            "expected": 1.7,
            "hint": "99.10 − 97.40 = 1.70 feet. B is the high side."
          }
        ]
      },
      {
        "label": "COMPUTED — The rise from A to B is 1.70 feet over a run of 85 feet. What is the slope as a percent? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gl_slope",
            "expected": 2,
            "hint": "Slope = rise ÷ run = 1.70 ÷ 85 = 0.02, or 2%."
          }
        ]
      },
      {
        "label": "COMPUTED — Corner A is at 97.40 feet and finished grade there is 98.50 feet. How many feet of fill are needed at A? (Enter the number of feet.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gl_fill_a",
            "expected": 1.1,
            "hint": "The ground is below grade, so it is a fill: 98.50 − 97.40 = 1.10 feet."
          }
        ]
      },
      {
        "label": "COMPUTED — A 6-8-10 check is run at a corner. What should the diagonal measure, in feet? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gl_6810",
            "expected": 10,
            "hint": "6² + 8² = 36 + 64 = 100, and the square root of 100 is 10 feet."
          }
        ]
      },
      {
        "label": "COMPUTED — A building rectangle is 30 feet by 40 feet. What should each diagonal measure, in feet? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gl_diag",
            "expected": 50,
            "hint": "30² + 40² = 900 + 1600 = 2500, and the square root of 2500 is 50 feet."
          }
        ]
      },
      {
        "label": "COMPUTED — You move the instrument and take a new backsight of 3.60 feet on corner B (elevation 99.10 feet). What is the new HI? (Enter the number of feet.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gl_hi2",
            "expected": 102.7,
            "hint": "New HI = 99.10 + 3.60 = 102.70 feet. The turning point carries the elevation to the new setup."
          }
        ]
      },
      {
        "label": "COMPUTED — With the new HI of 102.70 feet, a foresight of 4.95 feet at a footing corner. What is the footing elevation? (Enter the number of feet.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gl_footing",
            "expected": 97.75,
            "hint": "Elevation = HI − foresight. 102.70 − 4.95 = 97.75 feet."
          }
        ]
      },
      {
        "label": "COMPUTED — A grade must fall 2% over a run of 40 feet. How many feet of fall is that? (Enter the number of feet.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gl_fall",
            "expected": 0.8,
            "hint": "Fall = slope × run = 0.02 × 40 = 0.80 feet."
          }
        ]
      },
      {
        "label": "DECISION — Corner A is 97.40 feet, corner B is 99.10 feet, and corner C is 98.20 feet. Which corner is the lowest, and where will water collect? 1) Corner A 2) Corner B 3) Corner C",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gl_lowest",
            "expected": 1,
            "hint": "Corner A at 97.40 feet is the lowest of the three, so water runs toward A. B is the high side at 99.10 feet and C is in between."
          }
        ]
      },
      {
        "label": "COMPUTED — A swale falls 3 feet over a run of 60 feet. What is the slope as a percent? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gl_swale",
            "expected": 5,
            "hint": "Slope = 3 ÷ 60 = 0.05, or 5%."
          }
        ]
      },
      {
        "label": "COMPUTED — The building pad is 20 feet by 30 feet and needs 0.5 feet of cut. How many cubic feet of dirt must be removed? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gl_cutvol",
            "expected": 300,
            "hint": "Volume = 20 × 30 × 0.5 = 300 cubic feet."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "excavation-volume-erosion-control",
    "title": "Excavation Volume & Erosion-Control Planning",
    "introHtml": "<p><strong>Job ticket #4102 — Basement excavation and erosion control, Lot 14.</strong> Customer: the same home builder; the basement dig is 36 feet by 27 feet by 9 feet deep, and the lot drains toward the street. Your task: figure the dig volume, the truckloads with swell, and the erosion controls for the lot. Read the numbers in the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=cFYkeT0Yk6k\" target=\"_blank\" rel=\"noopener\">Excavations in Construction / Trenching (OSHA)</a> — why cave-ins kill and how the protective systems work, before you plan any trench on this lot.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any excavation: PPE on, call 811 and confirm the marks, keep spoil at least 2 feet from every edge, and never enter a trench 5 feet or deeper without a protective system. The competent person inspects the dig every day before work starts.</p><p><strong>The dig:</strong> The basement is 36 feet by 27 feet by 9 feet deep, in clay that swells 25% when dug. Trucks carry 12 cubic yards each. A utility trench on the lot is 54 feet long, 3 feet wide, and 5 feet deep. The building pad is the same 36-by-27-foot rectangle. Silt fence comes in 100-foot rolls. A separate trench on the lot is 6 feet deep in Type C soil, where the slope must be 1-1/2 to 1. Topsoil on the pad is 0.5 feet deep. For each row, enter the number asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "COMPUTED — The basement pad is 36 feet by 27 feet. What is its area in square feet? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ev_area",
            "expected": 972,
            "hint": "Area = 36 × 27 = 972 square feet."
          }
        ]
      },
      {
        "label": "COMPUTED — The dig is 972 square feet by 9 feet deep. What is the volume in cubic feet? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ev_vol_cf",
            "expected": 8748,
            "hint": "Volume = 972 × 9 = 8,748 cubic feet."
          }
        ]
      },
      {
        "label": "COMPUTED — 8,748 cubic feet is how many cubic yards? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ev_vol_cy",
            "expected": 324,
            "hint": "One cubic yard is 27 cubic feet: 8,748 ÷ 27 = 324 cubic yards."
          }
        ]
      },
      {
        "label": "COMPUTED — At 12 cubic yards per truck, how many truckloads carry the 324 bank cubic yards? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ev_trucks_bank",
            "expected": 27,
            "hint": "324 ÷ 12 = 27 truckloads for the bank volume."
          }
        ]
      },
      {
        "label": "COMPUTED — The clay swells 25% when dug. How many loose cubic yards must be hauled? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ev_loose",
            "expected": 405,
            "hint": "Loose volume = 324 × 1.25 = 405 cubic yards."
          }
        ]
      },
      {
        "label": "COMPUTED — At 12 cubic yards per truck, how many truckloads carry the 405 loose cubic yards? Round up to whole trucks. (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ev_trucks_loose",
            "expected": 34,
            "hint": "405 ÷ 12 = 33.75, and you cannot order part of a truck, so round up to 34 loads."
          }
        ]
      },
      {
        "label": "COMPUTED — The utility trench is 54 feet long, 3 feet wide, and 5 feet deep. What is its volume in cubic feet? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ev_trench_cf",
            "expected": 810,
            "hint": "Volume = 54 × 3 × 5 = 810 cubic feet."
          }
        ]
      },
      {
        "label": "COMPUTED — 810 cubic feet is how many cubic yards? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ev_trench_cy",
            "expected": 30,
            "hint": "810 ÷ 27 = 30 cubic yards."
          }
        ]
      },
      {
        "label": "COMPUTED — Silt fence must guard the pad’s perimeter. What is the perimeter of the 36-by-27-foot pad, in feet? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ev_perimeter",
            "expected": 126,
            "hint": "Perimeter = 2 × (36 + 27) = 2 × 63 = 126 feet."
          }
        ]
      },
      {
        "label": "COMPUTED — Silt fence comes in 100-foot rolls. How many rolls cover the 126-foot perimeter? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ev_rolls",
            "expected": 2,
            "hint": "126 ÷ 100 = 1.26, so one roll is not enough — buy 2 rolls."
          }
        ]
      },
      {
        "label": "DECISION — Spoil from the trench must sit how far from the edge? 1) 6 inches 2) 2 feet 3) Right at the edge",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ev_spoil",
            "expected": 2,
            "hint": "Spoil must be at least 2 feet from the edge, so its weight does not push the wall in and nothing falls on workers below. Six inches (1) is far too close, and the edge itself (3) is the worst place."
          }
        ]
      },
      {
        "label": "COMPUTED — A trench 6 feet deep in Type C soil needs a 1-1/2 to 1 slope. How far back is each wall cut at the top, in feet? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ev_cutback",
            "expected": 9,
            "hint": "Cutback = depth × 1.5 = 6 × 1.5 = 9 feet."
          }
        ]
      },
      {
        "label": "DECISION — A 6-foot-deep trench on the lot has no protective system. What is the correct call? 1) Hop in quickly to check the pipe — it will only take a minute 2) Do not enter: no one enters a trench 5 feet or deeper without protection 3) Work from the edge, leaning in",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ev_trench_call",
            "expected": 2,
            "hint": "At 5 feet or deeper, protection is mandatory — sloping, benching, shoring, or shielding — before anyone enters. Hopping in (1) or leaning in (3) puts the worker in the collapse zone."
          }
        ]
      },
      {
        "label": "COMPUTED — Topsoil on the 972-square-foot pad is 0.5 feet deep. How many cubic yards of topsoil are stripped? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ev_topsoil",
            "expected": 18,
            "hint": "Volume = 972 × 0.5 = 486 cubic feet; 486 ÷ 27 = 18 cubic yards."
          }
        ]
      }
    ],
    "passing": 70
  }
];
