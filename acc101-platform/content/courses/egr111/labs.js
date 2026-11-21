// egr111 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "egr111-lab1",
    "title": "Traffic-Light Ladder Program: Paper Simulation",
    "introHtml": "<p>A PLC program cannot be run or graded in this app, so this lab is a <strong>paper simulation</strong>: you design and trace a ladder-logic traffic-light program on paper, working out the same numbers a real PLC programmer would enter as timer presets. The sequence has six steps: north-south green (30 s), north-south yellow (5 s), all red (2 s), east-west green (25 s), east-west yellow (5 s), and all red (2 s). Each step is one timer and one set of lamp outputs, and only one step is active at a time.</p>",
    "taskHtml": "<p>Work out each value below from the six-step sequence. Enter numbers only (no units, no letters). The cycle time is the sum of all six steps. Count the lamps: each direction has a red, a yellow, and a green lamp. Count the timers: one timer instruction per step.</p>",
    "headers": [
      "Question",
      "Your answer"
    ],
    "rows": [
      {
        "label": "Total cycle time (seconds)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cycle",
            "expected": 69,
            "hint": "Add all six step times: 30 + 5 + 2 + 25 + 5 + 2."
          }
        ]
      },
      {
        "label": "North-south green timer preset (seconds)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ns_green",
            "expected": 30,
            "hint": "The first step of the sequence."
          }
        ]
      },
      {
        "label": "Yellow timer preset (seconds)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "yellow",
            "expected": 5,
            "hint": "Both yellow steps use the same preset."
          }
        ]
      },
      {
        "label": "All-red timer preset (seconds)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "allred",
            "expected": 2,
            "hint": "The safety gap between the two green directions."
          }
        ]
      },
      {
        "label": "East-west green timer preset (seconds)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ew_green",
            "expected": 25,
            "hint": "The fourth step of the sequence."
          }
        ]
      },
      {
        "label": "Step number in which the east-west green lamp turns on",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ew_step",
            "expected": 4,
            "hint": "Count the steps from the start: north-south green, north-south yellow, all red, then east-west green."
          }
        ]
      },
      {
        "label": "Number of lamp outputs (count every lamp)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lamps",
            "expected": 6,
            "hint": "Each direction has red, yellow, and green: 3 + 3."
          }
        ]
      },
      {
        "label": "Number of timer instructions in the program",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "timers",
            "expected": 6,
            "hint": "One timer instruction per step."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "egr111-lab2",
    "title": "Hydraulic Cylinder Sizing: Worked Calculations",
    "introHtml": "<p>This lab is a design-calculation exercise: you size a hydraulic cylinder for a small press, working out extend force, retract force, speed, and stroke time. Use F = P × A for force (with the annulus area for retract) and v = Q ÷ A for speed. Give each answer to the rounding asked for in the question — the lab checks your number to within 0.01 of the expected value, so round exactly as asked.</p>",
    "taskHtml": "<p>Work out each value below. Enter numbers only (no units). For the metric force questions, give your answer in kN to one decimal place. For the speed question, give mm/s to one decimal place. For the stroke-time question, give seconds to two decimal places. For the imperial questions, give whole numbers.</p>",
    "headers": [
      "Calculation",
      "Your answer"
    ],
    "rows": [
      {
        "label": "Extend force, 50 mm bore at 10 MPa (kN, to one decimal place)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "f_ext",
            "expected": 19.6,
            "hint": "Area = π ÷ 4 × 50² = 1,963.5 mm²; force = 10 × area, then convert N to kN."
          }
        ]
      },
      {
        "label": "Retract force, 50 mm bore, 28 mm rod at 10 MPa (kN, to one decimal place)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "f_ret",
            "expected": 13.5,
            "hint": "Use the annulus area: π ÷ 4 × (50² − 28²) = 1,347.7 mm²."
          }
        ]
      },
      {
        "label": "Extend speed, 50 mm bore fed 20 L/min (mm/s, to one decimal place)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "v_ext",
            "expected": 169.8,
            "hint": "Convert 20 L/min to mm³/s first (333,333 mm³/s), then divide by the bore area."
          }
        ]
      },
      {
        "label": "Time for a 200 mm stroke at 169.8 mm/s (seconds, to two decimal places)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "t_stroke",
            "expected": 1.18,
            "hint": "Time = distance ÷ speed = 200 ÷ 169.8."
          }
        ]
      },
      {
        "label": "Extend force, 2 in bore at 2,000 psi (lbf, nearest whole number)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "f_imp",
            "expected": 6283,
            "hint": "Area = π ÷ 4 × 2² = 3.14 in²; force = 2,000 × area."
          }
        ]
      },
      {
        "label": "Extend speed, 2 in bore fed 10 GPM (in/min, nearest whole number)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "v_imp",
            "expected": 735,
            "hint": "10 GPM = 2,310 in³/min; divide by the bore area of 3.14 in²."
          }
        ]
      }
    ],
    "passing": 70
  }
];
