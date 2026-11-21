// ele102 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "ohms-law-and-power-lab",
    "title": "Ohm's Law & Power Lab",
    "passing": 70,
    "introHtml": "<p><strong>Job ticket #4101 — Bench calculation lab: size the circuit before you build it.</strong> Customer: a training workshop; the task is to work out the numbers for three DC loads before any wire is pulled. You are the apprentice doing the math: use Ohm's law and Watt's law to find the missing values, then check each answer against the safety limits. This is a paper and calculator exercise only — no live circuits, no energized equipment. Any real bench work that follows is done de-energized, locked out and tagged out, under a licensed supervisor, per NFPA 70E.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=HsLLq6Rm5tU\" target=\"_blank\" rel=\"noopener\">Ohms Law Explained — The basics circuit theory</a> — work each example on paper before the answer is shown, then make your calls below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any bench work: this lab is calculations on paper only. Never connect a circuit to a live source to \"check\" your math — the math is checked on paper, and any real circuit is built and tested de-energized, locked out and tagged out, under a licensed supervisor. Keep your workspace clear, keep meter leads in the correct jacks, and treat every conductor as live until a qualified person has proven it dead.</p><p><strong>The three loads:</strong> (1) A 120 V DC supply feeds a heater with 24 Ω resistance. (2) A 12 V battery drives a motor that draws 3 A. (3) A 240 V DC supply feeds a load with 10 A of current. For each load, find the missing values with Ohm's law (E = I × R) and Watt's law (P = E × I), and check the results: a heater that draws more than its rated current is overloaded; a wire that carries more than its ampacity overheats. For each row, enter the computed value asked for, rounded to a whole number unless the question says otherwise.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "CALC — Load 1: 120 V supply, 24 Ω heater. What is the current, in amps? (I = E ÷ R)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ol_i1",
            "expected": 5,
            "hint": "I = 120 ÷ 24 = 5 amps."
          }
        ]
      },
      {
        "label": "CALC — Load 1: the heater draws 5 A at 120 V. What is the power, in watts? (P = E × I)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ol_p1",
            "expected": 600,
            "hint": "P = 120 × 5 = 600 watts."
          }
        ]
      },
      {
        "label": "CALC — Load 2: 12 V battery, 3 A motor. What is the motor's resistance, in ohms? (R = E ÷ I)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ol_r2",
            "expected": 4,
            "hint": "R = 12 ÷ 3 = 4 ohms."
          }
        ]
      },
      {
        "label": "CALC — Load 2: the motor draws 3 A at 12 V. What is the power, in watts? (P = E × I)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ol_p2",
            "expected": 36,
            "hint": "P = 12 × 3 = 36 watts."
          }
        ]
      },
      {
        "label": "CALC — Load 3: 240 V supply, 10 A load. What is the load's resistance, in ohms? (R = E ÷ I)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ol_r3",
            "expected": 24,
            "hint": "R = 240 ÷ 10 = 24 ohms."
          }
        ]
      },
      {
        "label": "CALC — Load 3: the load is 240 V at 10 A. What is the power, in watts? (P = E × I)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ol_p3",
            "expected": 2400,
            "hint": "P = 240 × 10 = 2,400 watts."
          }
        ]
      },
      {
        "label": "CALC — A resistor of 10 Ω carries 4 A. How much power is lost as heat, in watts? (P = I² × R)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ol_heat",
            "expected": 160,
            "hint": "P = 4² × 10 = 16 × 10 = 160 watts."
          }
        ]
      },
      {
        "label": "CALC — A 100 W bulb runs for 10 hours. How many kilowatt-hours does it use? (kWh = kW × hours)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ol_kwh",
            "expected": 1,
            "hint": "100 W × 10 h = 1,000 Wh = 1 kWh."
          }
        ]
      },
      {
        "label": "SAFETY CALL — Load 1's heater is rated 600 W at 120 V, but you calculate it drawing 10 A. What is the correct call? 1) It is fine — heaters always draw extra 2) It is overloaded: 10 A at 120 V is 1,200 W, twice the rating — stop and find the fault before energizing 3) Turn the voltage up to fix it 4) Ignore the rating and run it",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ol_safe",
            "expected": 2,
            "hint": "10 A × 120 V = 1,200 W, twice the 600 W rating. The heater is overloaded — do not energize it; find the fault (a short or the wrong heater) first."
          }
        ]
      },
      {
        "label": "CALC — A 1,500 W heater runs for 4 hours. How many kilowatt-hours does it use?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ol_kwh2",
            "expected": 6,
            "hint": "1,500 W × 4 h = 6,000 Wh = 6 kWh."
          }
        ]
      }
    ]
  },
  {
    "id": "series-parallel-circuit-lab",
    "title": "Series & Parallel Circuit Lab",
    "passing": 70,
    "introHtml": "<p><strong>Job ticket #4102 — Bench calculation lab: analyze the circuit before you build it.</strong> Customer: a training workshop; the task is to work out the numbers for a series circuit, a parallel circuit, and a combination circuit before any wire is pulled. You are the apprentice doing the math: find total resistance, total current, voltage drops, branch currents, and power for each circuit, and check each answer with Kirchhoff's laws. This is a paper and calculator exercise only — no live circuits, no energized equipment. Any real bench work that follows is done de-energized, locked out and tagged out, under a licensed supervisor, per NFPA 70E.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=VV6tZ3Aqfuc\" target=\"_blank\" rel=\"noopener\">DC Series circuits explained — The basics working principle</a> — work each example on paper before the answer is shown, then make your calls below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any bench work: this lab is calculations on paper only. Never connect a circuit to a live source to \"check\" your math — the math is checked on paper, and any real circuit is built and tested de-energized, locked out and tagged out, under a licensed supervisor. Keep your workspace clear, keep meter leads in the correct jacks, and treat every conductor as live until a qualified person has proven it dead.</p><p><strong>The circuits:</strong> (A) Series: 10 Ω, 20 Ω, and 30 Ω resistors across a 120 V source. (B) Parallel: the same three resistors across a 120 V source. (C) Combination: a 10 Ω resistor in series with a parallel pair of 20 Ω and 30 Ω, across a 120 V source. For each row, enter the computed value asked for, rounded to a whole number unless the question says otherwise. Check each answer: in series, the drops must add to the source voltage (KVL); in parallel, the branch currents must add to the total (KCL).</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "CALC — Circuit A (series): 10 Ω + 20 Ω + 30 Ω. What is the total resistance, in ohms?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sp_rt_a",
            "expected": 60,
            "hint": "R_T = 10 + 20 + 30 = 60 ohms."
          }
        ]
      },
      {
        "label": "CALC — Circuit A (series): 120 V source, 60 Ω total. What is the total current, in amps?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sp_it_a",
            "expected": 2,
            "hint": "I_T = 120 ÷ 60 = 2 amps, the same through every resistor."
          }
        ]
      },
      {
        "label": "CALC — Circuit A (series): what is the voltage drop across the 30 Ω resistor, in volts? (V = I × R)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sp_v30_a",
            "expected": 60,
            "hint": "V = 2 × 30 = 60 volts. The drops are 20 V, 40 V, and 60 V, adding to 120 V."
          }
        ]
      },
      {
        "label": "CALC — Circuit A (series): how much power does the 20 Ω resistor use, in watts? (P = I² × R)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sp_p20_a",
            "expected": 80,
            "hint": "P = 2² × 20 = 80 watts."
          }
        ]
      },
      {
        "label": "CALC — Circuit B (parallel): 10 Ω, 20 Ω, 30 Ω across 120 V. What is the total resistance, in ohms? (Round to the nearest whole number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sp_rt_b",
            "expected": 5,
            "hint": "1 ÷ R_T = 1/10 + 1/20 + 1/30 = 0.1833, so R_T ≈ 5.45 ohms — 5 rounded to the nearest whole number."
          }
        ]
      },
      {
        "label": "CALC — Circuit B (parallel): what is the current through the 10 Ω branch, in amps? (I = E ÷ R)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sp_i10_b",
            "expected": 12,
            "hint": "I = 120 ÷ 10 = 12 amps — the smallest resistor carries the largest current."
          }
        ]
      },
      {
        "label": "CALC — Circuit B (parallel): what is the total current, in amps? (Round to the nearest whole number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sp_it_b",
            "expected": 22,
            "hint": "Branch currents are 12 + 6 + 4 = 22 amps."
          }
        ]
      },
      {
        "label": "CALC — Circuit C (combination): 10 Ω in series with a parallel pair of 20 Ω and 30 Ω. What is the equivalent resistance of the pair, in ohms?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sp_pair_c",
            "expected": 12,
            "hint": "Product-over-sum: (20 × 30) ÷ (20 + 30) = 600 ÷ 50 = 12 ohms."
          }
        ]
      },
      {
        "label": "CALC — Circuit C (combination): what is the total resistance, in ohms?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sp_rt_c",
            "expected": 22,
            "hint": "R_T = 10 + 12 = 22 ohms."
          }
        ]
      },
      {
        "label": "SAFETY CALL — In Circuit A, a resistor opens and the circuit goes dead. Your meter reads the full 120 V across one resistor. What is the correct call? 1) The resistor is shorted 2) There is an open in the loop — find it before replacing anything 3) The source voltage is too low 4) Replace all three resistors at once",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sp_safe",
            "expected": 2,
            "hint": "Full source voltage across one component with no current means an open in the loop. Find the open first — replacing parts at random hides the fault."
          }
        ]
      }
    ]
  }
];
