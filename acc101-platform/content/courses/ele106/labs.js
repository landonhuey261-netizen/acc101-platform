// ele106 — Scenario labs.
module.exports = [
  {
    "id": "commercial-load-calculation",
    "title": "Commercial Load Calculation Lab",
    "introHtml": "<p><strong>Job ticket #106-A — Load calculation for a new 10,000-square-foot retail store.</strong> Customer: a developer building a single-story retail store with a 208-volt, three-phase service. Site: 10,000 square feet of retail space, 80 receptacles, 40 linear feet of show window, 2 signs, one 10 HP, 208 V, three-phase motor, electric heat 30 kVA, air conditioning 25 kVA. Your task: run the Article 220 standard method on paper and size the service — using the 2023 NEC. Read the job in the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=UY7Py1Ry63s\" target=\"_blank\" rel=\"noopener\">Journeyman Electrician (NEC 2023) — Load Calculations Article 220</a> — four worked examples, standard and optional method. Watch it before you make your calls below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any work on this job: confirm the service is de-energized, locked out and tagged out, and tested for absence of voltage — under a licensed supervisor, per NFPA 70E. Never work on live or energized equipment. This lab is a paper calculation exercise only; it does not prove hands-on skill, and no circuit in this lab is energized.</p><p><strong>The store, as specified:</strong> (1) Floor area 10,000 square feet, retail. (2) 80 receptacle outlets. (3) 40 linear feet of show window. (4) 2 signs. (5) One 10 HP, 208 V, three-phase motor, FLC 30.8 A (Table 430.250). (6) Electric heat 30,000 VA; air conditioning 25,000 VA. (7) Service voltage 208 volts, three-phase. (8) The developer asks whether a 200-ampere service is enough.</p><p><strong>The rules you will use (2023 NEC):</strong> General lighting Table 220.42(A) (retail 1.9 VA/ft²; the 125% factor is already included — do not apply it again); lighting demand Table 220.45 (most occupancies 100%); receptacles 180 VA each (220.14(I)); receptacle demand 220.47 (first 10 kVA at 100%, remainder at 50%); show windows 200 VA/ft (220.43(A)); signs 1,200 VA each (220.43(B)); motors 220.50 (FLC from the tables, largest motor +25%); heat vs. A/C larger only (220.60); standard sizes 240.6(A). For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — The developer says the service is “probably off” and tells you to start wiring the switchboard. What do you do first? 1) Start wiring 2) Refuse to work until the service is de-energized, locked out/tagged out, and tested for absence of voltage under a licensed supervisor 3) Touch the busbar to check 4) Work wearing rubber gloves only",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_safety",
            "expected": 2,
            "hint": "Step 0 governs: never work on live or energized equipment. “Probably off” (1) is not verified dead, touching a busbar (3) is never a test, and gloves alone (4) are not lockout/tagout."
          }
        ]
      },
      {
        "label": "COMPUTED — General lighting load for 10,000 square feet of retail at 1.9 VA/ft²? (Enter the number of VA.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_lighting",
            "expected": 19000,
            "hint": "10,000 × 1.9 = 19,000 VA. Do not apply another 125% — the table value already includes it."
          }
        ]
      },
      {
        "label": "DECISION — What lighting demand factor applies to this retail lighting load under Table 220.45? 1) 50% 2) 100% 3) 35% 4) First 12,500 VA at 100%, remainder at 50%",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_light_demand",
            "expected": 2,
            "hint": "Table 220.45: most occupancies take lighting at 100%. The 12,500 VA rule (4) is for warehouses."
          }
        ]
      },
      {
        "label": "COMPUTED — Receptacle load for 80 receptacles at 180 VA each? (Enter the number of VA.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_recept",
            "expected": 14400,
            "hint": "80 × 180 = 14,400 VA."
          }
        ]
      },
      {
        "label": "COMPUTED — Receptacle demand under 220.47 (first 10 kVA at 100%, remainder at 50%)? (Enter the number of VA.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_recept_demand",
            "expected": 12200,
            "hint": "10,000 + (4,400 × 0.50) = 10,000 + 2,200 = 12,200 VA."
          }
        ]
      },
      {
        "label": "COMPUTED — Show-window load for 40 linear feet at 200 VA/ft? (Enter the number of VA.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_window",
            "expected": 8000,
            "hint": "40 × 200 = 8,000 VA."
          }
        ]
      },
      {
        "label": "COMPUTED — Sign load for 2 signs at 1,200 VA each? (Enter the number of VA.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_signs",
            "expected": 2400,
            "hint": "2 × 1,200 = 2,400 VA."
          }
        ]
      },
      {
        "label": "COMPUTED — Motor load: 10 HP, 208 V, FLC 30.8 A. Motor VA (FLC × V × 1.73)? (Enter the number of VA, rounded to the nearest whole number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_motor",
            "expected": 11083,
            "hint": "30.8 × 208 × 1.73 = 11,083 VA."
          }
        ]
      },
      {
        "label": "COMPUTED — Largest-motor adder: 25% of the motor load? (Enter the number of VA, rounded to the nearest whole number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_motor_adder",
            "expected": 2771,
            "hint": "11,083 × 0.25 = 2,771 VA."
          }
        ]
      },
      {
        "label": "COMPUTED — HVAC load: heat 30,000 VA vs. air conditioning 25,000 VA. What load is used (220.60)? (Enter the number of VA.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_hvac",
            "expected": 30000,
            "hint": "Noncoincident loads: take the larger only — 30,000 VA of heat."
          }
        ]
      },
      {
        "label": "COMPUTED — Total calculated load in VA? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_total",
            "expected": 85454,
            "hint": "19,000 + 12,200 + 8,000 + 2,400 + 11,083 + 2,771 + 30,000 = 85,454 VA."
          }
        ]
      },
      {
        "label": "COMPUTED — Service current at 208 volts, three-phase, for the total load? (Enter the number of amperes, one decimal.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_amps",
            "expected": 237.5,
            "hint": "85,454 ÷ (208 × 1.73) = 237.5 amperes."
          }
        ]
      },
      {
        "label": "DECISION — The developer asks whether a 200-ampere service is enough. Correct answer? 1) Yes — 200 A covers it 2) No — the calculated load is 237.5 A, so the minimum standard size is 250 A 3) No — a 100 A service is enough 4) Yes — the optional method always gives 200 A",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_service",
            "expected": 2,
            "hint": "237.5 A exceeds a 200 A service, so the next standard size is 250 A (2). 100 A (3) is far too small, and the optional method (4) does not guarantee 200 A."
          }
        ]
      },
      {
        "label": "DECISION — The calculation is done and the service is sized at 250 A. What is the right way to close it? 1) Energize the service yourself to test it 2) Have the licensed supervisor verify the calculation and the installation, and call for inspection before energizing 3) Skip the inspection — the math is right 4) Install a 200 A main breaker anyway",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_close",
            "expected": 2,
            "hint": "Verification by the licensed supervisor and inspection before energizing (2) is the close-out. Energizing it yourself (1), skipping inspection (3), and installing an undersized breaker (4) are all wrong."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "motor-circuit-workshop",
    "title": "Motor Circuit Workshop",
    "introHtml": "<p><strong>Job ticket #106-B — Motor circuits for a warehouse air-handling unit and a conveyor.</strong> Customer: a warehouse owner adding two motors: a 15 HP, 480 V, three-phase air-handling motor (FLC 21 A, nameplate 19.5 A, service factor 1.15, temperature rise 40°C) and a 5 HP, 480 V, three-phase conveyor motor (FLC 7.6 A). Site: a warehouse with a 480-volt, three-phase service. Your task: size the branch-circuit conductors, the overload protection, the short-circuit protection, the disconnect, and the feeder — on paper, using Article 430 of the 2023 NEC. Read the job in the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=VxhBSU5sCZg\" target=\"_blank\" rel=\"noopener\">3 Phase Induction Motor Panel Wiring &amp; Running Practical | ITI Electrician</a> — a three-phase motor panel being wired and run. Watch it before you make your calls below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any work on this job: confirm the circuits are de-energized, locked out and tagged out, and tested for absence of voltage — under a licensed supervisor, per NFPA 70E. Never work on live or energized equipment. This lab is a paper sizing exercise only; it does not prove hands-on skill, and no circuit in this lab is energized.</p><p><strong>The job, as you find it:</strong> (1) Motor 1: 15 HP, 480 V, three-phase, FLC 21 A (Table 430.250), nameplate 19.5 A, service factor 1.15, temperature rise 40°C. (2) Motor 2: 5 HP, 480 V, three-phase, FLC 7.6 A (Table 430.250). (3) Both motors are fed from one feeder. (4) Motor 1's disconnect is installed in a room 100 feet away, around a corner from the motor. (5) The owner asks whether star-delta starting would help Motor 1's starting current. (6) The feeder will run in EMT.</p><p><strong>The rules you will use (2023 NEC):</strong> FLC from Tables 430.248/430.250; conductors 125% of FLC (430.22); overload 115% of nameplate for SF ≥ 1.15 or rise ≤ 40°C, 125% otherwise (430.32); short-circuit/ground-fault protection from Table 430.52 (inverse-time breaker 250%, dual-element fuse 175%); disconnect within sight (430.102), rated at least 115% of FLC (430.110); feeder 125% of the largest motor + 100% of the rest (430.24). For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — The owner says the breaker is off and tells you to open the motor starter and start work. What do you do first? 1) Start work — the breaker is off 2) Verify absence of voltage yourself with a meter proven on a known live source, under a licensed supervisor, with lockout/tagout 3) Touch the starter terminals to check 4) Work with one hand behind your back and skip the test",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mc_safety",
            "expected": 2,
            "hint": "Step 0 governs: a breaker being off is not proof. Verify absence of voltage with a proven meter, under a licensed supervisor, with lockout/tagout. Touching terminals (3) is never a test."
          }
        ]
      },
      {
        "label": "COMPUTED — Motor 1 branch-circuit conductor ampacity: 125% of FLC 21 A? (Enter the number of amperes, one decimal.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mc_conductors",
            "expected": 26.25,
            "hint": "21 × 1.25 = 26.25 A (430.22)."
          }
        ]
      },
      {
        "label": "COMPUTED — Motor 1 overload protection: nameplate 19.5 A, SF 1.15, rise 40°C. Maximum setting? (Enter the number of amperes, one decimal.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mc_overload",
            "expected": 22.4,
            "hint": "430.32: SF ≥ 1.15 or rise ≤ 40°C uses 115% of nameplate: 19.5 × 1.15 = 22.4 A."
          }
        ]
      },
      {
        "label": "COMPUTED — Motor 1 short-circuit protection: maximum inverse-time breaker rating (250% of FLC)? (Enter the number of amperes, one decimal.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mc_breaker",
            "expected": 52.5,
            "hint": "Table 430.52: 21 × 2.5 = 52.5 A."
          }
        ]
      },
      {
        "label": "COMPUTED — Motor 1 short-circuit protection: maximum dual-element fuse rating (175% of FLC)? (Enter the number of amperes, two decimals.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mc_fuse",
            "expected": 36.75,
            "hint": "Table 430.52: 21 × 1.75 = 36.75 A."
          }
        ]
      },
      {
        "label": "COMPUTED — Motor 1 disconnect rating: at least 115% of FLC? (Enter the number of amperes, two decimals.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mc_disconnect",
            "expected": 24.15,
            "hint": "430.110: 21 × 1.15 = 24.15 A."
          }
        ]
      },
      {
        "label": "DECISION — Motor 1's disconnect is 100 feet away, around a corner from the motor. Correct call? 1) Fine — it is a disconnect 2) It violates 430.102 — the disconnect must be within sight of the motor 3) Move the motor to the disconnect 4) Remove the disconnect",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mc_sight",
            "expected": 2,
            "hint": "430.102 requires the disconnect within sight of the motor. A disconnect 100 feet away around a corner (1) is not within sight; moving the motor (3) or removing the disconnect (4) are not the fix."
          }
        ]
      },
      {
        "label": "COMPUTED — Feeder ampacity for both motors: 125% of the largest motor's FLC + 100% of the other motor's FLC? (Enter the number of amperes, two decimals.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mc_feeder",
            "expected": 33.85,
            "hint": "430.24: (21 × 1.25) + 7.6 = 26.25 + 7.6 = 33.85 A."
          }
        ]
      },
      {
        "label": "DECISION — The owner asks whether star-delta starting would help Motor 1's starting current. Correct answer? 1) No — star-delta increases starting current 2) Yes — star-delta starting reduces starting current to about one-third, if the motor is built for it 3) No — star-delta only works on single-phase motors 4) Yes — star-delta eliminates starting current entirely",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mc_stardelta",
            "expected": 2,
            "hint": "Star-delta starting gives about one-third of the direct-on-line starting current (2), if the motor is built for it. It does not increase current (1) or eliminate it (4), and it is a three-phase method, not single-phase (3)."
          }
        ]
      },
      {
        "label": "DECISION — Motor 1's nameplate current is 19.5 A, but the FLC table says 21 A. Which number sizes the conductors? 1) The nameplate (19.5 A) 2) The table FLC (21 A) 3) The average of the two 4) The horsepower alone",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mc_flc",
            "expected": 2,
            "hint": "Article 430 requires the table FLC for conductor sizing (430.6(A)(1)). The nameplate is used only for overload protection. The average (3) and horsepower alone (4) are not Code methods."
          }
        ]
      },
      {
        "label": "DECISION — Motor 1's overload device is set at 30 A. Is that correct? 1) Yes — 30 A is fine 2) No — the maximum is 22.4 A (115% of nameplate), so 30 A would let the motor overheat 3) No — it should be 52.5 A 4) Yes — overloads are set at the breaker rating",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mc_overload_check",
            "expected": 2,
            "hint": "The maximum overload setting is 22.4 A. A 30 A setting (1) would let the motor overheat before tripping. 52.5 A (3) is the breaker size, not the overload, and overloads are not set at the breaker rating (4)."
          }
        ]
      },
      {
        "label": "COMPUTED — The feeder runs in EMT. How many current-carrying conductors are in the feeder if both motors are three-phase with no neutral? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mc_conductors_count",
            "expected": 6,
            "hint": "Two three-phase motors, three phase conductors each, no neutral: 6 current-carrying conductors. The equipment grounding conductor does not count."
          }
        ]
      },
      {
        "label": "DECISION — The motors are sized, the disconnect is relocated within sight, and the feeder is run. What is the right way to close the job? 1) Energize everything yourself to test it 2) Have the licensed supervisor verify the work, bump each motor to check rotation, test the overloads, and call for inspection before energizing 3) Skip the inspection — the math is right 4) Leave the disconnects open",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mc_close",
            "expected": 2,
            "hint": "Verification, rotation checks, overload testing, and inspection before energizing (2) is the close-out. Energizing it yourself (1), skipping inspection (3), and leaving disconnects open (4) are all wrong."
          }
        ]
      }
    ],
    "passing": 70
  }
];
