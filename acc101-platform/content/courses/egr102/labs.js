// egr102 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "forces-on-a-bracket",
    "title": "Forces on a Bracket: Vectors, Weight, Work, and Torque",
    "introHtml": "<p><strong>Scenario — a wall bracket holds a motor.</strong> A steel bracket on a workshop wall holds a motor. A cable pulls on the bracket with a force of 60 N at 30° above the horizontal, and the motor itself has a mass of 40 kg. Your task: split the pull into components, work out the motor’s weight, and check the work and torque on the bracket.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before loading any bracket, check the wall fixings are tight and the bracket is rated for the load. Never stand under a suspended load.</p><p><strong>The facts:</strong> Cable pull 60 N at 30° (cos 30° = 0.866, sin 30° = 0.5). Motor mass 40 kg, g = 9.81 m/s². A 25 N force moves a tool 6 m in 5 s. A 30 N force acts at the end of a 0.4 m spanner at right angles. For each row, enter the option number or the computed value asked for. Give whole-number answers where the result is a whole number; otherwise give one decimal place.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "COMPUTED — What is the horizontal component of the 60 N cable pull? (60 × cos 30°. Enter the number in N, rounded to the nearest whole number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "egr102_lab_fx",
            "expected": 52,
            "hint": "Horizontal = 60 × 0.866 = 51.96 N, which rounds to 52 N."
          }
        ]
      },
      {
        "label": "COMPUTED — What is the vertical component of the 60 N cable pull? (60 × sin 30°. Enter the number in N.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "egr102_lab_fy",
            "expected": 30,
            "hint": "Vertical = 60 × 0.5 = 30 N."
          }
        ]
      },
      {
        "label": "COMPUTED — What is the weight of the 40 kg motor in newtons? (40 × 9.81. Enter the number, to one decimal place.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "egr102_lab_weight",
            "expected": 392.4,
            "hint": "Weight = 40 × 9.81 = 392.4 N."
          }
        ]
      },
      {
        "label": "COMPUTED — A 25 N force moves a tool 6 m. How much work is done? (Enter the number in J.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "egr102_lab_work",
            "expected": 150,
            "hint": "Work = 25 × 6 = 150 J."
          }
        ]
      },
      {
        "label": "COMPUTED — That 150 J of work is done in 5 s. What is the power? (Enter the number in W.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "egr102_lab_power",
            "expected": 30,
            "hint": "Power = 150 ÷ 5 = 30 W."
          }
        ]
      },
      {
        "label": "COMPUTED — A 30 N force acts at right angles at the end of a 0.4 m spanner. What is the torque? (Enter the number in N·m.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "egr102_lab_torque",
            "expected": 12,
            "hint": "Torque = 30 × 0.4 = 12 N·m."
          }
        ]
      }
    ]
  }
];
