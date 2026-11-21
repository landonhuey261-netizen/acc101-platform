// egr112 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "egr112-lab1",
    "title": "Design Documentation: Tolerance Stackup & Fit Check",
    "introHtml": "<p>This lab is a design-documentation exercise: you check a small assembly the way a design engineer would before releasing its drawings. A housing is 50.00 ± 0.10 mm deep, the parts inside it total 45.50 ± 0.20 mm, and a shaft runs in the housing on a 25 mm H7/g6 clearance fit (hole 25.000–25.021 mm, shaft 24.980–24.993 mm). A 20-tooth pinion drives a 60-tooth gear in the same assembly. This app cannot build or grade physical hardware — this lab is paper design work: calculations, checks, and documentation, not bench work.</p>",
    "taskHtml": "<p>Work out each value below. Enter numbers only (no units). Give gaps and tolerances in millimetres to two decimal places, clearances in millimetres to three decimal places, and the gear speed in rpm as a whole number.</p>",
    "headers": [
      "Check",
      "Your answer"
    ],
    "rows": [
      {
        "label": "Nominal gap between housing and parts (mm, to two decimal places)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gap_nom",
            "expected": 4.5,
            "hint": "Nominal gap = 50.00 − 45.50."
          }
        ]
      },
      {
        "label": "Worst-case minimum gap (mm, to two decimal places)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gap_min",
            "expected": 4.2,
            "hint": "Worst-case variation is ±0.10 + ±0.20 = ±0.30 mm; subtract it from the nominal gap."
          }
        ]
      },
      {
        "label": "Worst-case maximum gap (mm, to two decimal places)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gap_max",
            "expected": 4.8,
            "hint": "Add the worst-case variation of ±0.30 mm to the nominal gap."
          }
        ]
      },
      {
        "label": "RSS total for tolerances ±0.10, ±0.08, ±0.05, ±0.12 mm (mm, to two decimal places)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rss",
            "expected": 0.18,
            "hint": "RSS = √(0.10² + 0.08² + 0.05² + 0.12²)."
          }
        ]
      },
      {
        "label": "Worst-case total for the same four tolerances (mm, to two decimal places)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wc",
            "expected": 0.35,
            "hint": "Worst-case adds the tolerances directly."
          }
        ]
      },
      {
        "label": "Maximum clearance of the 25 mm H7/g6 fit (mm, to three decimal places)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "clear_max",
            "expected": 0.041,
            "hint": "Biggest hole minus smallest shaft: 25.021 − 24.980."
          }
        ]
      },
      {
        "label": "Minimum clearance of the 25 mm H7/g6 fit (mm, to three decimal places)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "clear_min",
            "expected": 0.007,
            "hint": "Smallest hole minus biggest shaft: 25.000 − 24.993."
          }
        ]
      },
      {
        "label": "Gear output speed: 20-tooth pinion drives 60-tooth gear at 1750 rpm (rpm, whole number)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gear_rpm",
            "expected": 583,
            "hint": "Ratio is 60 ÷ 20 = 3:1; output speed is input speed divided by the ratio."
          }
        ]
      }
    ],
    "passing": 70
  }
];
