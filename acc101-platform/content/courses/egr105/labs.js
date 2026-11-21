// egr105 — Scenario labs.
module.exports = [
  {
    "id": "transformer-power-factor-lab",
    "title": "Transformer & Power Factor Lab: Size the Transformer, Fix the Power Factor",
    "introHtml": "<p><strong>Scenario — a small workshop with a motor that is costing too much.</strong> A workshop is fed by a 480 V to 120 V step-down transformer, and its main motor runs at a poor power factor of 0.8, drawing 10 kVA for 8 kW of real work. The utility is charging penalties. Your job is to work out the transformer's currents, the motor's reactive power, and the capacitor bank that brings the power factor up to 0.95. All work is on paper: this lab is calculation and checking, not live work.</p>",
    "taskHtml": "<p><strong>Safety first.</strong> This lab is paper only. Do not open or work on a real transformer for it. In real work, a transformer enclosure is opened only after the circuit is locked out, tagged, and tested dead (live-dead-live) — and a current transformer's secondary is never open-circuited while energised.</p><p><strong>The transformer:</strong> 480 V primary, 120 V secondary, 800 primary turns, 200 secondary turns, feeding a 2 kVA load. <strong>The motor:</strong> 8 kW real power, 10 kVA apparent power, power factor 0.8, to be corrected to 0.95. Work out each value below and enter it. Use the checks: power in must equal power out on the transformer, and the power triangle must close on the motor.</p>",
    "headers": [
      "Calculation",
      "Your answer"
    ],
    "rows": [
      {
        "label": "SECONDARY VOLTAGE — The transformer has 800 primary turns and 200 secondary turns, with a 480 V primary. What is the secondary voltage in volts? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tpf_vs",
            "expected": 120,
            "hint": "V₂ = 480 × (200 ÷ 800) = 120 V."
          }
        ]
      },
      {
        "label": "SECONDARY CURRENT — The transformer feeds a 2 kVA load at 120 V. What is the secondary current in amps? (Enter the number, rounded to 2 decimal places.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tpf_is",
            "expected": 16.67,
            "hint": "I₂ = 2,000 ÷ 120 ≈ 16.67 A."
          }
        ]
      },
      {
        "label": "PRIMARY CURRENT — The same 2 kVA load, seen from the 480 V primary. What is the primary current in amps? (Enter the number, rounded to 2 decimal places.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tpf_ip",
            "expected": 4.17,
            "hint": "I₁ = 2,000 ÷ 480 ≈ 4.17 A. Check with the turns ratio: 16.67 × (200 ÷ 800) ≈ 4.17 A."
          }
        ]
      },
      {
        "label": "MOTOR POWER FACTOR — The motor draws 10 kVA and delivers 8 kW of real power. What is its power factor? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tpf_pf",
            "expected": 0.8,
            "hint": "pf = P ÷ S = 8 ÷ 10 = 0.8."
          }
        ]
      },
      {
        "label": "MOTOR REACTIVE POWER — From the 10 kVA and 8 kW, what is the motor's reactive power in kVAr? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tpf_q",
            "expected": 6,
            "hint": "Q = √(S² − P²) = √(100 − 64) = √36 = 6 kVAr."
          }
        ]
      },
      {
        "label": "CAPACITOR SIZE — How much capacitive reactive power in kVAr is needed to correct the motor from pf = 0.8 to pf = 0.95? (Enter the number, rounded to 2 decimal places.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tpf_cap",
            "expected": 3.37,
            "hint": "New Q = 8 × tan(cos⁻¹ 0.95) ≈ 2.63 kVAr, so the capacitor must supply 6 − 2.63 ≈ 3.37 kVAr."
          }
        ]
      }
    ],
    "passing": 70
  }
];
