// egr101 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "design-brief-and-safety-check",
    "title": "Design Brief & Safety Check: Plan a Simple Bracket",
    "introHtml": "<p><strong>Scenario — a bracket for a shelf.</strong> A customer wants a steel L-bracket to hold a shelf. The bracket plate is 200 mm long and 120 mm wide, and it must hold 20 kg. Your task: work out the sizes and cost, pick the right safety gear, and write the design brief — criteria and constraints — before anyone cuts metal.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any cutting or drilling: put on safety glasses, check the drill guard, and lock out the machine before changing a bit. Never wear loose gloves near a spinning drill bit.</p><p><strong>The facts:</strong> Plate 200 mm × 120 mm. Steel plate costs $0.05 per cm². The bracket must hold 20 kg. A bolt hole is 12 mm across. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "SAFETY CALL — Before drilling the bracket, what do you do first? 1) Drill straight away to save time 2) Put on safety glasses, check the guard, and lock out the machine before changing the bit 3) Wear loose gloves for grip 4) Remove the guard so you can see better",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "egr101_lab_safety",
            "expected": 2,
            "hint": "Step 0 governs: glasses on, guard checked, lockout before changing a bit. Drilling straight away (1) skips checks, loose gloves (3) can be pulled in, and removing the guard (4) is never allowed."
          }
        ]
      },
      {
        "label": "COMPUTED — What is the area of the plate in mm²? (200 mm × 120 mm. Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "egr101_lab_area",
            "expected": 24000,
            "hint": "Area = length × width = 200 × 120 = 24,000 mm²."
          }
        ]
      },
      {
        "label": "COMPUTED — The plate area is 24,000 mm². How many cm² is that? (1 cm² = 100 mm². Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "egr101_lab_area_cm",
            "expected": 240,
            "hint": "24,000 ÷ 100 = 240 cm²."
          }
        ]
      },
      {
        "label": "COMPUTED — Steel plate costs $0.05 per cm². What does the 240 cm² plate cost? (Enter the number of dollars.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "egr101_lab_cost",
            "expected": 12,
            "hint": "240 × $0.05 = $12.00."
          }
        ]
      },
      {
        "label": "COMPUTED — What is the perimeter of the plate in mm? (2 × (200 + 120). Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "egr101_lab_perim",
            "expected": 640,
            "hint": "Perimeter = 2 × (200 + 120) = 2 × 320 = 640 mm."
          }
        ]
      },
      {
        "label": "DECISION — Which of these is a CRITERION for the bracket? 1) It must be built in one day 2) It must hold 20 kg 3) It must be made from steel only 4) It must cost under $15 to make",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "egr101_lab_criterion",
            "expected": 2,
            "hint": "Holding 20 kg is something the bracket must do — a criterion. One day (1), steel-only (3), and the cost cap (4) are constraints: limits to work inside."
          }
        ]
      }
    ]
  }
];
