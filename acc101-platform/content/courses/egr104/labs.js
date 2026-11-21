// egr104 — Scenario labs.
module.exports = [
  {
    "id": "series-circuit-lab",
    "title": "Series Circuit Lab: Build It on Paper, Measure Every Drop",
    "introHtml": "<p><strong>Scenario — a bench circuit that must work first time.</strong> You are given a 12 V battery and three resistors: 10 Ω, 20 Ω, and 30 Ω, wired in series. Before anyone switches anything on, you must predict the current, every voltage drop, and the total power — then check the predictions against each other with Kirchhoff's laws. All work is on paper: this lab is calculation and checking, not live wiring.</p>",
    "taskHtml": "<p><strong>Safety first.</strong> This lab is paper only. Do not build or power a real circuit for it. In real bench work, the circuit would be built dead, checked, and only then powered — and any mains work needs a qualified person.</p><p><strong>The circuit:</strong> 12 V battery, resistors 10 Ω, 20 Ω, 30 Ω in series, in that order. Work out each value below and enter it. Use the checks: the drops must add to 12 V, and the resistor powers must add to the battery power.</p>",
    "headers": [
      "Calculation",
      "Your answer"
    ],
    "rows": [
      {
        "label": "TOTAL RESISTANCE — Add the three resistors in series. What is R(total) in ohms? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ser_rtot",
            "expected": 60,
            "hint": "In series, resistances add: 10 + 20 + 30 = 60 Ω."
          }
        ]
      },
      {
        "label": "TOTAL CURRENT — Use Ohm's law with the 12 V battery and the total resistance. What is the current in amps? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ser_i",
            "expected": 0.2,
            "hint": "I = V ÷ R = 12 ÷ 60 = 0.2 A. The same 0.2 A flows through every resistor."
          }
        ]
      },
      {
        "label": "VOLTAGE DROP 1 — The drop across the 10 Ω resistor, in volts. (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ser_v1",
            "expected": 2,
            "hint": "V = I × R = 0.2 × 10 = 2 V."
          }
        ]
      },
      {
        "label": "VOLTAGE DROP 2 — The drop across the 20 Ω resistor, in volts. (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ser_v2",
            "expected": 4,
            "hint": "V = I × R = 0.2 × 20 = 4 V."
          }
        ]
      },
      {
        "label": "VOLTAGE DROP 3 — The drop across the 30 Ω resistor, in volts. (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ser_v3",
            "expected": 6,
            "hint": "V = I × R = 0.2 × 30 = 6 V. Check: 2 + 4 + 6 = 12 V, the battery voltage."
          }
        ]
      },
      {
        "label": "TOTAL POWER — The power the battery delivers, in watts. (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ser_p",
            "expected": 2.4,
            "hint": "P = V × I = 12 × 0.2 = 2.4 W. Check with the resistors: 0.4 + 0.8 + 1.2 = 2.4 W."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "parallel-kirchhoff-lab",
    "title": "Parallel Circuit & Kirchhoff Lab: Check Every Law",
    "introHtml": "<p><strong>Scenario — a mixed circuit on the bench.</strong> A 12 V battery feeds a 4 Ω resistor in series with a parallel pair: 6 Ω and 12 Ω. Your job is to predict the whole circuit — total resistance, total current, every voltage and branch current — and then prove your answers satisfy Kirchhoff's current law at the node and Kirchhoff's voltage law around the loop. All work is on paper.</p>",
    "taskHtml": "<p><strong>Safety first.</strong> Paper only — do not build or power this circuit. In real work it would be built dead and checked before power is applied.</p><p><strong>The circuit:</strong> 12 V battery → 4 Ω resistor → node → (6 Ω branch and 12 Ω branch in parallel) → back to the battery. Enter each value below.</p>",
    "headers": [
      "Calculation",
      "Your answer"
    ],
    "rows": [
      {
        "label": "PARALLEL PAIR — The equivalent resistance of the 6 Ω and 12 Ω resistors in parallel, in ohms. (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "par_rp",
            "expected": 4,
            "hint": "1/R = 1/6 + 1/12 = 3/12 = 1/4, so R = 4 Ω."
          }
        ]
      },
      {
        "label": "TOTAL RESISTANCE — The 4 Ω series resistor plus the parallel pair. What is R(total) in ohms? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "par_rtot",
            "expected": 8,
            "hint": "4 Ω (series) + 4 Ω (pair) = 8 Ω."
          }
        ]
      },
      {
        "label": "TOTAL CURRENT — The current from the battery, in amps. (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "par_i",
            "expected": 1.5,
            "hint": "I = 12 ÷ 8 = 1.5 A."
          }
        ]
      },
      {
        "label": "SERIES DROP — The voltage across the 4 Ω series resistor, in volts. (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "par_vser",
            "expected": 6,
            "hint": "V = I × R = 1.5 × 4 = 6 V."
          }
        ]
      },
      {
        "label": "BRANCH CURRENT 1 — The current in the 6 Ω branch, in amps. (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "par_i6",
            "expected": 1,
            "hint": "The pair has 12 − 6 = 6 V across it, so the 6 Ω branch takes 6 ÷ 6 = 1 A."
          }
        ]
      },
      {
        "label": "BRANCH CURRENT 2 — The current in the 12 Ω branch, in amps. (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "par_i12",
            "expected": 0.5,
            "hint": "6 V across the pair, so 6 ÷ 12 = 0.5 A. KCL check: 1 + 0.5 = 1.5 A, the total current."
          }
        ]
      }
    ],
    "passing": 70
  }
];
