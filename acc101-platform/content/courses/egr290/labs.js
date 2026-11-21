module.exports = [
  {
    "id": "fe-worked-calculations-lab",
    "title": "FE Worked-Calculations Lab",
    "introHtml": "<p><strong>Case — one hour of FE-style calculation, end to end.</strong> You are sitting a timed practice session. Ten problems, one from each part of the program, each with a number to find. Work each one on paper first — formula, substitution, units check — then enter the answer. Speed matters, but a fast wrong answer is worth nothing.</p>",
    "taskHtml": "<p><strong>Step 0 — Units first.</strong> Before you calculate anything: write the formula, check the units of every quantity, and convert where needed. The first scored row is a units decision — get it right before anything else moves. This lab teaches calculation and decision-making only; real engineering work is checked by a second person, and so should yours be.</p><p>Enter the number of the correct option (or the computed value where the row asks for one) for each decision point.</p><p>Work each number on paper before entering it. In the FE, the numbers are the exam.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "UNITS CALL — A problem gives a force in pounds and asks for stress in MPa. Your first move is: 1) Calculate in pounds and convert the answer 2) Convert the force to newtons first, then calculate 3) Ignore the units — the number is the same 4) Convert the answer to psi at the end",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "units_first",
            "expected": 2,
            "hint": "Convert first, calculate second — then check the units of the answer."
          }
        ]
      },
      {
        "label": "COMPUTED — A simply supported beam spans 6 m. A 24 kN load acts 2 m from the left support. What is the reaction at the right support, in kN? Enter the number only.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "beam_rb",
            "expected": 8,
            "hint": "Moments about A: R_B = 24 × 2/6 = 8 kN."
          }
        ]
      },
      {
        "label": "COMPUTED — A 40 kN force acts on a bar of 200 mm² cross-section. What is the stress, in MPa? Enter the number only.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "stress_mpa",
            "expected": 200,
            "hint": "σ = 40,000/200 = 200 N/mm² = 200 MPa."
          }
        ]
      },
      {
        "label": "COMPUTED — A heat engine works between 700 K and 300 K. What is the Carnot efficiency, in percent? Enter the number only (to one decimal place: 57.1).",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "carnot_pct",
            "expected": 57.1,
            "hint": "η = 1 − 300/700 = 0.5714 = 57.1%."
          }
        ]
      },
      {
        "label": "COMPUTED — A 12 V source drives a 6 Ω resistor. What is the current, in amps? Enter the number only.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dc_current",
            "expected": 2,
            "hint": "I = 12/6 = 2 A."
          }
        ]
      },
      {
        "label": "COMPUTED — What is the future worth of $1,000 at 10% for 3 years, in dollars? Enter the number only.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "econ_fw",
            "expected": 1331,
            "hint": "F = 1,000 × (1.10)³ = 1,000 × 1.331 = $1,331."
          }
        ]
      },
      {
        "label": "COMPUTED — A 20-tooth gear at 600 rpm drives a 60-tooth gear. What is the output speed, in rpm? Enter the number only.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gear_rpm",
            "expected": 200,
            "hint": "Ratio 60/20 = 3, so 600/3 = 200 rpm."
          }
        ]
      },
      {
        "label": "COMPUTED — A ball bearing has C = 12 kN and carries P = 6 kN. What is its L10 life, in millions of revolutions? Enter the number only.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bearing_l10",
            "expected": 8,
            "hint": "L10 = (12/6)³ = 8 million revolutions."
          }
        ]
      },
      {
        "label": "COMPUTED — A 0–100 °C transmitter sends 4–20 mA. What temperature, in °C, does 12 mA represent? Enter the number only.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rtd_temp",
            "expected": 50,
            "hint": "(12 − 4)/16 = 0.5, so 50 °C."
          }
        ]
      },
      {
        "label": "COMPUTED — A 4-pole motor runs on 60 Hz. What is its synchronous speed, in rpm? Enter the number only.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "motor_ns",
            "expected": 1800,
            "hint": "n_s = 120 × 60/4 = 1,800 rpm."
          }
        ]
      }
    ]
  },
  {
    "id": "plc-troubleshooting-lab",
    "title": "PLC Troubleshooting Scenario Lab",
    "introHtml": "<p><strong>Case — a conveyor that will not start.</strong> It is the start of the shift. A conveyor with a counting station will not start: the start button does nothing, the PLC's run light is on, and the operator says it stopped halfway through the last run. You are the technician. Work the fault step by step, using the troubleshooting method — and check every number before you enter it.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before you touch any equipment: de-energise the machine, lock it out with your own lock, tag it, and test that it is dead before you work. The first scored row is a safety decision — get it right before anything else moves. This lab teaches knowledge and decision-making only; real machine work is done de-energised and locked out.</p><p>Enter the number of the correct option (or the computed value where the row asks for one) for each decision point.</p><p>Work each number on paper before entering it. In real troubleshooting, the numbers are the diagnosis.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "SAFETY CALL — You must check a sensor on the conveyor. Your call: 1) Work on it live — it is only a sensor 2) De-energise the machine, lock it out with your own lock, tag it, and test that it is dead 3) Ask someone else to hold the e-stop 4) Turn the machine off at the HMI only",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "safety_loto",
            "expected": 2,
            "hint": "De-energise, lock out, tag, and test — never trust a switch position."
          }
        ]
      },
      {
        "label": "The start button does nothing and the PLC run light is on. Your first check is: 1) Replace the PLC 2) The e-stop — is it still latched in? — then power, fuses, and breakers 3) Rewrite the program 4) Replace the motor",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "first_check",
            "expected": 2,
            "hint": "Check the obvious and safe first: a latched e-stop is the most common cause."
          }
        ]
      },
      {
        "label": "The e-stop is reset and power is good. The start input's status light is off when the button is pressed. Your call: 1) The output module failed 2) The start button, its wiring, or its power is faulty 3) The motor is jammed 4) The program is too long",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "input_fault",
            "expected": 2,
            "hint": "A dark input light with a pressed button means a button, wiring, or power fault."
          }
        ]
      },
      {
        "label": "COMPUTED — The counting station uses a CTU with preset 10. It has counted 7 parts. How many more parts must pass before the done bit sets? Enter the number only.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ctu_left",
            "expected": 3,
            "hint": "10 − 7 = 3 more false-to-true transitions."
          }
        ]
      },
      {
        "label": "The conveyor motor hums but does not turn, and the overload relay has tripped. Your call: 1) Reset the overload and restart immediately 2) Find the cause — a jammed load or a failing motor — before resetting 3) Fit a bigger overload relay 4) Bypass the overload",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "overload_trip",
            "expected": 2,
            "hint": "A tripped overload signals a fault; find it before resetting. Never fit a bigger one or bypass it."
          }
        ]
      },
      {
        "label": "The photoelectric sensor's light is on, but the PLC never sees a part pass. Your call: 1) The sensor is dirty or misaligned 2) The motor is too big 3) The program is too long 4) The voltage is too high",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sensor_dirt",
            "expected": 1,
            "hint": "A dirty or misaligned sensor cannot see its target."
          }
        ]
      },
      {
        "label": "COMPUTED — A TON timer with a 5 s preset has its rung go true at t = 0. At what time, in seconds, does its done bit turn on? Enter the number only.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ton_time",
            "expected": 5,
            "hint": "A timer on-delay sets its done bit after the preset: t = 5 s."
          }
        ]
      },
      {
        "label": "COMPUTED — A 0–100 °C transmitter on the motor sends 4–20 mA and reads 8 mA. What temperature, in °C, is the motor? Enter the number only.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "motor_temp",
            "expected": 25,
            "hint": "(8 − 4)/16 = 0.25, so 25 °C."
          }
        ]
      },
      {
        "label": "You force the motor output with the machine in a safe state and the motor runs. What does that tell you? 1) The output module and motor are fine — the fault is in the inputs or program 2) The PLC is broken 3) The motor is broken 4) Nothing",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "force_test",
            "expected": 1,
            "hint": "Forcing the output tests the output side; if it runs, the fault is upstream."
          }
        ]
      },
      {
        "label": "You fixed the fault. Which steps are still missing before the job is done? 1) None — the fix is enough 2) Verify the whole machine works and document findings, actions, and outcomes 3) Replace the motor 4) Paint the machine",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "method_steps",
            "expected": 2,
            "hint": "Verify full functionality and document — steps 5 and 6 of the method."
          }
        ]
      }
    ]
  },
  {
    "id": "design-project-planning-lab",
    "title": "Capstone Design Project Planning Lab",
    "introHtml": "<p><strong>Case — plan the parts sorter.</strong> You are designing an automated parts sorter: steel washers arrive on a conveyor, a sensor measures each one, and a pneumatic pusher sorts them into two bins by diameter. Sixty washers a minute, fewer than 1 error in 100. Plan the project — requirements, risks, decisions, budget, and test plan — and check every number before you enter it.</p>",
    "taskHtml": "<p><strong>Step 0 — Requirements first.</strong> Before you design anything: write the requirements with numbers, units, and tests. The first scored row is a requirements decision — get it right before anything else moves. This lab teaches planning and decision-making only; the real build is self-built and completion-tracked against the rubric in the Design Project Study Guide.</p><p>Enter the number of the correct option (or the computed value where the row asks for one) for each decision point.</p><p>Work each number on paper before entering it. In a real project, the plan is the deliverable.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "REQUIREMENTS CALL — Which of these is a testable requirement for the sorter? 1) The sorter must be fast 2) The sorter must sort 60 washers a minute into two bins by diameter, with fewer than 1 error in 100 3) The sorter must be good 4) The sorter must be strong",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "req_call",
            "expected": 2,
            "hint": "A requirement needs a number, a unit, and a test."
          }
        ]
      },
      {
        "label": "COMPUTED — The sorter must sort 60 washers a minute. How many washers is that per hour? Enter the number only.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sorter_rate",
            "expected": 3600,
            "hint": "60 × 60 = 3,600 washers per hour."
          }
        ]
      },
      {
        "label": "COMPUTED — At fewer than 1 error in 100, how many errors at most are allowed in a run of 3,600 washers? Enter the number only.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "errors_allowed",
            "expected": 36,
            "hint": "3,600/100 = 36 errors at most."
          }
        ]
      },
      {
        "label": "COMPUTED — The parts list is: sensor $120, pneumatic pusher $85, conveyor motor $45. What is the total parts cost, in dollars? Enter the number only.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "parts_total",
            "expected": 250,
            "hint": "120 + 85 + 45 = $250."
          }
        ]
      },
      {
        "label": "RISK CALL — The sensor fails and the sorter stops. What is the mitigation? 1) Ignore it 2) Keep a spare sensor, add a fault light, and write the replacement procedure 3) Buy a second sorter 4) Run the sorter faster",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "risk_mitigate",
            "expected": 2,
            "hint": "Mitigate: spare sensor, fault light, and a written procedure."
          }
        ]
      },
      {
        "label": "DECISION CALL — A mechanical gauge is slower but simpler; a sensor is faster but needs calibration. How do you choose? 1) Pick the faster one always 2) Select against the requirements — speed, error rate, and cost 3) Pick the cheaper one always 4) Ask the supplier to choose",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "decision_call",
            "expected": 2,
            "hint": "Select the concept against the requirements, not on one factor."
          }
        ]
      },
      {
        "label": "COMPUTED — The conveyor motor is 10 hp. What is its output power, in watts? Enter the number only (1 hp = 745.7 W; round to the nearest whole watt).",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "motor_watts",
            "expected": 7457,
            "hint": "10 × 745.7 = 7,457 W."
          }
        ]
      },
      {
        "label": "TEST CALL — The test plan should: 1) Run 100 washers, count the errors, and record the result — including failures 2) Run 10 washers and assume the rest 3) Skip testing and go to the final build 4) Test only the parts that work",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "test_call",
            "expected": 1,
            "hint": "Run the full test, count the errors, and record everything — including failures."
          }
        ]
      },
      {
        "label": "How many deliverables does the capstone design project have?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "deliverables_count",
            "expected": 4,
            "hint": "Requirements document, design, test plan and results, and project report — four."
          }
        ]
      },
      {
        "label": "DOCUMENTATION CALL — Six months later, someone asks why the sorter uses a sensor instead of a gauge. Where is the answer? 1) Nowhere — it is forgotten 2) In the decision log 3) In the parts list 4) On the motor nameplate",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "decision_log",
            "expected": 2,
            "hint": "The decision log records what was decided, why, and what was rejected."
          }
        ]
      }
    ]
  }
];
