// egr109 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "wall-heat-loss",
    "title": "Wall Heat Loss: Bare Brick Versus Insulated",
    "passing": 70,
    "introHtml": "<p><strong>Job ticket #EGR-109A — Workshop wall heat loss.</strong> A workshop wall is 3 m high and 2.5 m wide (area 7.5 m²). It is a single brick leaf 0.1 m thick (k = 0.72 W/m·K). Inside is 20 °C, outside is 0 °C, so ΔT = 20 K. The owner wants to know how much heat escapes, and what 50 mm of insulation (k = 0.04 W/m·K) would save. Your task: calculate the heat loss both ways and make the right calls. Read the task, then answer each decision row.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any work on a building's insulation or heating: turn off the heater circuit at the isolator before touching wiring, wear a mask and gloves when cutting insulation, and never block a ventilation opening — a sealed room with a gas heater can be dangerous. Work from a stable platform, not a chair, when measuring high walls.</p><p><strong>The numbers:</strong> Wall area A = 3 × 2.5 = 7.5 m². Brick: d = 0.1 m, k = 0.72 W/m·K, R = 0.1 ÷ 0.72 = 0.139 m²·K/W. Bare-wall loss Q = kAΔT ÷ d = 0.72 × 7.5 × 20 ÷ 0.1 = 1,080 W. Insulation: d = 0.05 m, k = 0.04 W/m·K, R = 0.05 ÷ 0.04 = 1.25 m²·K/W. Total R = 0.139 + 1.25 = 1.389 m²·K/W. Insulated loss Q = AΔT ÷ R = 7.5 × 20 ÷ 1.389 = 108 W. Saving = 1,080 − 108 = 972 W.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before working on the wall insulation near the heater wiring, what do you do first? 1) Start cutting insulation right away 2) Turn off the heater circuit at the isolator, and wear a mask and gloves for cutting insulation 3) Block the ventilation opening to keep heat in 4) Stand on a chair to reach the top of the wall",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wall_safety",
            "expected": 2,
            "hint": "Isolate the circuit and wear protection first. Cutting straight in (1) risks the wiring, blocking ventilation (3) is dangerous with a gas heater, and a chair (4) is not a stable platform."
          }
        ]
      },
      {
        "label": "COMPUTED — The wall is 3 m high and 2.5 m wide. What is its area in m²? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wall_area",
            "expected": 7.5,
            "hint": "3 × 2.5 = 7.5 m²."
          }
        ]
      },
      {
        "label": "COMPUTED — Brick: k = 0.72, A = 7.5 m², ΔT = 20 K, d = 0.1 m. What is the bare-wall heat loss in watts? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wall_bare",
            "expected": 1080,
            "hint": "Q = 0.72 × 7.5 × 20 ÷ 0.1 = 1,080 W."
          }
        ]
      },
      {
        "label": "COMPUTED — What is the thermal resistance of the brick layer in m²·K/W? (Enter the number to three decimal places, e.g. 0.139.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wall_r_brick",
            "expected": 0.139,
            "hint": "R = 0.1 ÷ 0.72 = 0.139 m²·K/W."
          }
        ]
      },
      {
        "label": "COMPUTED — Insulation: d = 0.05 m, k = 0.04 W/m·K. What is its thermal resistance in m²·K/W? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wall_r_ins",
            "expected": 1.25,
            "hint": "R = 0.05 ÷ 0.04 = 1.25 m²·K/W."
          }
        ]
      },
      {
        "label": "COMPUTED — Total R is 0.139 + 1.25 = 1.389 m²·K/W. What is the insulated wall's heat loss in watts? (Enter the whole number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wall_ins",
            "expected": 108,
            "hint": "Q = 7.5 × 20 ÷ 1.389 = 108 W."
          }
        ]
      },
      {
        "label": "COMPUTED — Bare wall loses 1,080 W and the insulated wall loses 108 W. How many watts does the insulation save? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wall_saving",
            "expected": 972,
            "hint": "1,080 − 108 = 972 W."
          }
        ]
      },
      {
        "label": "COMPUTED — The insulation saves 972 W out of 1,080 W. What percentage is saved? (Enter the whole number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wall_pct",
            "expected": 90,
            "hint": "972 ÷ 1,080 = 0.90, or 90%."
          }
        ]
      },
      {
        "label": "DECISION — The owner asks whether to insulate or fit a bigger heater. What is the right advice? 1) Fit a bigger heater and leave the wall bare 2) Insulate the wall: it cuts the loss by 90% and the heater then only needs to cover 108 W for this wall 3) Do nothing 4) Insulate only the inside face with foil and no insulation",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wall_advice",
            "expected": 2,
            "hint": "Insulation cuts the loss by 90% and shrinks the heater needed. A bigger heater (1) pays the loss forever. Doing nothing (3) wastes heat. Foil alone (4) is not insulation."
          }
        ]
      },
      {
        "label": "DECISION — The wall has a steel beam through it (a thermal bridge). What does that do? 1) Nothing 2) It lets extra heat escape along the steel, so the real loss is higher than the calculation 3) It insulates the wall 4) It stops conduction completely",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wall_bridge",
            "expected": 2,
            "hint": "Steel conducts far better than brick, so the beam is a shortcut for heat and the real loss is higher than the one-layer calculation. (1), (3), and (4) are wrong — steel is a conductor, not an insulator."
          }
        ]
      }
    ],
    "csvFilename": "wall-heat-loss.csv",
    "csv": "Decision point,Your call\n\"SAFETY CALL — Before working on the wall insulation near the heater wiring, what do you do first? 1) Start cutting insulation right away 2) Turn off the heater circuit at the isolator, and wear a mask and gloves for cutting insulation 3) Block the ventilation opening to keep heat in 4) Stand on a chair to reach the top of the wall\",\n\"COMPUTED — The wall is 3 m high and 2.5 m wide. What is its area in m²? (Enter the number.)\",\n\"COMPUTED — Brick: k = 0.72, A = 7.5 m², ΔT = 20 K, d = 0.1 m. What is the bare-wall heat loss in watts? (Enter the number.)\",\n\"COMPUTED — What is the thermal resistance of the brick layer in m²·K/W? (Enter the number to three decimal places, e.g. 0.139.)\",\n\"COMPUTED — Insulation: d = 0.05 m, k = 0.04 W/m·K. What is its thermal resistance in m²·K/W? (Enter the number.)\",\n\"COMPUTED — Total R is 0.139 + 1.25 = 1.389 m²·K/W. What is the insulated wall's heat loss in watts? (Enter the whole number.)\",\n\"COMPUTED — Bare wall loses 1,080 W and the insulated wall loses 108 W. How many watts does the insulation save? (Enter the number.)\",\n\"COMPUTED — The insulation saves 972 W out of 1,080 W. What percentage is saved? (Enter the whole number.)\",\n\"DECISION — The owner asks whether to insulate or fit a bigger heater. What is the right advice? 1) Fit a bigger heater and leave the wall bare 2) Insulate the wall: it cuts the loss by 90% and the heater then only needs to cover 108 W for this wall 3) Do nothing 4) Insulate only the inside face with foil and no insulation\",\n\"DECISION — The wall has a steel beam through it (a thermal bridge). What does that do? 1) Nothing 2) It lets extra heat escape along the steel, so the real loss is higher than the calculation 3) It insulates the wall 4) It stops conduction completely\",\n"
  },
  {
    "id": "pump-pipe-sizing",
    "title": "Pump and Pipe Sizing for a Roof Tank",
    "passing": 70,
    "introHtml": "<p><strong>Job ticket #EGR-109B — Roof tank water supply.</strong> A ground tank must fill a roof tank 8 m above it through 25 m of 0.05 m diameter pipe. The flow needed is 0.005 m³/s (5 L/s). The pipe has a friction factor f = 0.02 and four 90° elbows (K = 0.9 each). Your task: find the velocity, the head losses, the total head, and the pump power — then pick the motor. Read the task, then answer each decision row.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any work on a pump or pipe: isolate the pump's power at the switch so it cannot start while you work, release any pressure in the pipe before opening a joint, and wear eye protection — a pressurised joint can spray water. Never throttle the suction valve to control flow: it causes cavitation.</p><p><strong>The numbers:</strong> Pipe area A = π × 0.025² = 0.001963 m². Velocity v = Q ÷ A = 0.005 ÷ 0.001963 = 2.55 m/s. Velocity head = v² ÷ 2g = 6.50 ÷ 19.62 = 0.331 m. Friction loss h_f = f(L ÷ D)(v² ÷ 2g) = 0.02 × (25 ÷ 0.05) × 0.331 = 0.02 × 500 × 0.331 = 3.31 m. Minor loss = 4 × 0.9 × 0.331 = 1.19 m. Total head H = 8 + 3.31 + 1.19 = 12.5 m. Pump power at 70% efficiency: P = ρgQH ÷ η = 1,000 × 9.81 × 0.005 × 12.5 ÷ 0.70 = 876 W. Reynolds number Re = 1,000 × 2.55 × 0.05 ÷ 0.001 = 127,500 (turbulent).</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before opening a joint on the pump pipework, what do you do first? 1) Open the joint while the pipe is pressurised 2) Isolate the pump's power and release the pressure in the pipe 3) Throttle the suction valve 4) Start the pump to clear the pipe",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pump_safety",
            "expected": 2,
            "hint": "Isolate the power and release the pressure first. Opening a pressurised joint (1) sprays water, throttling suction (3) causes cavitation, and starting the pump (4) is the opposite of safe."
          }
        ]
      },
      {
        "label": "COMPUTED — Pipe diameter is 0.05 m. What is the pipe's cross-sectional area in m²? (Enter the number to six decimal places, e.g. 0.001963.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pump_area",
            "expected": 0.001963,
            "hint": "A = π × 0.025² = 0.001963 m²."
          }
        ]
      },
      {
        "label": "COMPUTED — Flow is 0.005 m³/s. What is the water velocity in m/s? (Enter the number to two decimal places, e.g. 2.55.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pump_velocity",
            "expected": 2.55,
            "hint": "v = 0.005 ÷ 0.001963 = 2.55 m/s."
          }
        ]
      },
      {
        "label": "COMPUTED — Velocity is 2.55 m/s. What is the velocity head in metres? (Enter the number to three decimal places, e.g. 0.331.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pump_vhead",
            "expected": 0.331,
            "hint": "v² ÷ 2g = 6.50 ÷ 19.62 = 0.331 m."
          }
        ]
      },
      {
        "label": "COMPUTED — Friction factor is 0.02, length 25 m, diameter 0.05 m. What is the friction head loss in metres? (Enter the number to two decimal places, e.g. 3.31.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pump_friction",
            "expected": 3.31,
            "hint": "h_f = 0.02 × 500 × 0.331 = 3.31 m."
          }
        ]
      },
      {
        "label": "COMPUTED — Four elbows with K = 0.9 each. What is the total minor loss in metres? (Enter the number to two decimal places, e.g. 1.19.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pump_minor",
            "expected": 1.19,
            "hint": "4 × 0.9 × 0.331 = 1.19 m."
          }
        ]
      },
      {
        "label": "COMPUTED — Lift is 8 m, friction loss 3.31 m, minor loss 1.19 m. What is the total head in metres? (Enter the number to one decimal place, e.g. 12.5.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pump_head",
            "expected": 12.5,
            "hint": "8 + 3.31 + 1.19 = 12.5 m."
          }
        ]
      },
      {
        "label": "COMPUTED — Flow 0.005 m³/s, head 12.5 m, efficiency 70%. What pump power is needed in watts? (Enter the whole number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pump_power",
            "expected": 876,
            "hint": "P = 1,000 × 9.81 × 0.005 × 12.5 ÷ 0.70 = 876 W."
          }
        ]
      },
      {
        "label": "DECISION — Which motor do you order? 1) 0.5 kW 2) 1.1 kW 3) 0.75 kW 4) 5 kW",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pump_motor",
            "expected": 2,
            "hint": "The pump needs 876 W, so 0.5 kW and 0.75 kW are too small. 5 kW would work but wastes money and energy; 1.1 kW is the right size with margin."
          }
        ]
      },
      {
        "label": "DECISION — The flow is too high and must be reduced. What is the right way? 1) Throttle the suction valve 2) Throttle the discharge valve, or better, slow the pump down 3) Block the pipe 4) Run the pump dry",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pump_control",
            "expected": 2,
            "hint": "Throttle the discharge side, or better, slow the pump down. Throttling suction (1) causes cavitation, blocking the pipe (3) is dangerous, and running dry (4) destroys the seals."
          }
        ]
      }
    ],
    "csvFilename": "pump-pipe-sizing.csv",
    "csv": "Decision point,Your call\n\"SAFETY CALL — Before opening a joint on the pump pipework, what do you do first? 1) Open the joint while the pipe is pressurised 2) Isolate the pump's power and release the pressure in the pipe 3) Throttle the suction valve 4) Start the pump to clear the pipe\",\n\"COMPUTED — Pipe diameter is 0.05 m. What is the pipe's cross-sectional area in m²? (Enter the number to six decimal places, e.g. 0.001963.)\",\n\"COMPUTED — Flow is 0.005 m³/s. What is the water velocity in m/s? (Enter the number to two decimal places, e.g. 2.55.)\",\n\"COMPUTED — Velocity is 2.55 m/s. What is the velocity head in metres? (Enter the number to three decimal places, e.g. 0.331.)\",\n\"COMPUTED — Friction factor is 0.02, length 25 m, diameter 0.05 m. What is the friction head loss in metres? (Enter the number to two decimal places, e.g. 3.31.)\",\n\"COMPUTED — Four elbows with K = 0.9 each. What is the total minor loss in metres? (Enter the number to two decimal places, e.g. 1.19.)\",\n\"COMPUTED — Lift is 8 m, friction loss 3.31 m, minor loss 1.19 m. What is the total head in metres? (Enter the number to one decimal place, e.g. 12.5.)\",\n\"COMPUTED — Flow 0.005 m³/s, head 12.5 m, efficiency 70%. What pump power is needed in watts? (Enter the whole number.)\",\n\"DECISION — Which motor do you order? 1) 0.5 kW 2) 1.1 kW 3) 0.75 kW 4) 5 kW\",\n\"DECISION — The flow is too high and must be reduced. What is the right way? 1) Throttle the suction valve 2) Throttle the discharge valve, or better, slow the pump down 3) Block the pipe 4) Run the pump dry\",\n"
  }
];
