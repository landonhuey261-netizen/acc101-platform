// egr107 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "gear-ratio-design",
    "title": "Design a Gear Reduction for a Conveyor Drive",
    "passing": 70,
    "introHtml": "<p><strong>Job ticket #EGR-107 — Conveyor drive design.</strong> A small parts conveyor needs 400 rpm at its head pulley, with an output torque of 45 N·m. The motor on the shelf spins at 1,800 rpm and delivers 10 N·m. Your task: design the reduction, check the numbers, and make the right calls — in the right order. Read the task, then answer each decision row.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any work on a drive: lock out the motor so it cannot start while you measure or fit parts, wear eye protection when fitting gears, and never reach into a running gear train. A gear pair can crush a finger in a fraction of a second.</p><p><strong>The job:</strong> Motor 1,800 rpm, 10 N·m. Conveyor needs 400 rpm, 45 N·m. Stage 1 is a belt drive (3:1). Stage 2 is a gear pair. Belt efficiency 95%, gear efficiency 95%. Check: overall ratio = 1,800 ÷ 400 = 4.5. Belt 3:1 leaves the gear stage at 4.5 ÷ 3 = 1.5. Motor power = Tω = 10 × (2π × 1,800 ÷ 60) = 10 × 188.5 = 1,885 W. Output power needed = 45 × (2π × 400 ÷ 60) = 45 × 41.89 = 1,885 W (ideal). With losses, motor must supply 1,885 ÷ (0.95 × 0.95) = 1,885 ÷ 0.90 ≈ 2,094 W — so a 2.2 kW motor is the right pick.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before fitting gears to the conveyor drive, what do you do first? 1) Start the motor to check it spins 2) Lock out the motor so it cannot start, and wear eye protection 3) Reach in to feel the gear mesh while it turns 4) Oil the gears while they run",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gear_safety",
            "expected": 2,
            "hint": "Lock out first: a running gear train can crush a finger. Starting the motor (1) is the opposite of safe, and reaching in (3) or oiling while running (4) put hands near moving teeth."
          }
        ]
      },
      {
        "label": "COMPUTED — The motor runs at 1,800 rpm and the conveyor needs 400 rpm. What overall reduction ratio is needed? (Enter the number, e.g. 4.5.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gear_ratio",
            "expected": 4.5,
            "hint": "1,800 ÷ 400 = 4.5."
          }
        ]
      },
      {
        "label": "COMPUTED — The belt stage is 3:1. What ratio must the gear stage provide? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gear_stage",
            "expected": 1.5,
            "hint": "Overall 4.5 ÷ belt 3 = 1.5 for the gears."
          }
        ]
      },
      {
        "label": "COMPUTED — The gear stage ratio is 1.5 and the driver gear has 24 teeth. How many teeth must the driven gear have? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gear_teeth",
            "expected": 36,
            "hint": "Driven teeth = 24 × 1.5 = 36 teeth."
          }
        ]
      },
      {
        "label": "COMPUTED — Motor torque is 10 N·m. What is the ideal torque after the belt stage (3:1, before losses)? (Enter the number in N·m.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gear_belt_torque",
            "expected": 30,
            "hint": "Torque rises with the ratio: 10 × 3 = 30 N·m."
          }
        ]
      },
      {
        "label": "COMPUTED — After the gear stage (1.5:1), what is the ideal output torque? (Enter the number in N·m.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gear_out_torque",
            "expected": 45,
            "hint": "30 × 1.5 = 45 N·m, which matches the conveyor's need."
          }
        ]
      },
      {
        "label": "COMPUTED — Belt efficiency is 95% and gear efficiency is 95%. What is the combined efficiency as a percentage? (Enter the whole number, rounded: 0.95 × 0.95 × 100.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gear_eff",
            "expected": 90,
            "hint": "0.95 × 0.95 = 0.9025, about 90%."
          }
        ]
      },
      {
        "label": "COMPUTED — The conveyor needs 1,885 W ideally. With 90% combined efficiency, how much power must the motor supply? (Enter the whole number of watts, rounded: 1,885 ÷ 0.90.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gear_motor_power",
            "expected": 2094,
            "hint": "1,885 ÷ 0.90 = 2,094 W. Either way a 2.2 kW motor is the right pick."
          }
        ]
      },
      {
        "label": "DECISION — Which motor do you order? 1) 1.5 kW 2) 2.2 kW 3) 0.75 kW 4) 5 kW",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gear_motor",
            "expected": 2,
            "hint": "The motor must supply about 2,094 W, so 1.5 kW and 0.75 kW are too small. 5 kW would work but wastes money and energy; 2.2 kW is the right size with a small margin."
          }
        ]
      },
      {
        "label": "DECISION — The driven gear turns the same way as the driver in your sketch, but meshing gears turn in opposite directions. What is wrong? 1) Nothing — gears turn the same way 2) The sketch is wrong: meshing gears reverse direction, so add an idler or accept the reversal 3) The belt is the problem 4) The motor is wired backwards",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gear_direction",
            "expected": 2,
            "hint": "Meshing gears always reverse direction. If the conveyor must turn the same way as the motor, add an idler gear (or flip the drive layout). The belt (3) and the motor wiring (4) are not the cause."
          }
        ]
      }
    ],
    "csvFilename": "gear-ratio-design.csv",
    "csv": "Decision point,Your call\n\"SAFETY CALL — Before fitting gears to the conveyor drive, what do you do first? 1) Start the motor to check it spins 2) Lock out the motor so it cannot start, and wear eye protection 3) Reach in to feel the gear mesh while it turns 4) Oil the gears while they run\",\n\"COMPUTED — The motor runs at 1,800 rpm and the conveyor needs 400 rpm. What overall reduction ratio is needed? (Enter the number, e.g. 4.5.)\",\n\"COMPUTED — The belt stage is 3:1. What ratio must the gear stage provide? (Enter the number.)\",\n\"COMPUTED — The gear stage ratio is 1.5 and the driver gear has 24 teeth. How many teeth must the driven gear have? (Enter the number.)\",\n\"COMPUTED — Motor torque is 10 N·m. What is the ideal torque after the belt stage (3:1, before losses)? (Enter the number in N·m.)\",\n\"COMPUTED — After the gear stage (1.5:1), what is the ideal output torque? (Enter the number in N·m.)\",\n\"COMPUTED — Belt efficiency is 95% and gear efficiency is 95%. What is the combined efficiency as a percentage? (Enter the whole number, rounded: 0.95 × 0.95 × 100.)\",\n\"COMPUTED — The conveyor needs 1,885 W ideally. With 90% combined efficiency, how much power must the motor supply? (Enter the whole number of watts, rounded: 1,885 ÷ 0.90.)\",\n\"DECISION — Which motor do you order? 1) 1.5 kW 2) 2.2 kW 3) 0.75 kW 4) 5 kW\",\n\"DECISION — The driven gear turns the same way as the driver in your sketch, but meshing gears turn in opposite directions. What is wrong? 1) Nothing — gears turn the same way 2) The sketch is wrong: meshing gears reverse direction, so add an idler or accept the reversal 3) The belt is the problem 4) The motor is wired backwards\",\n"
  }
];
