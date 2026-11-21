// egr106 — Scenario labs.
module.exports = [
  {
    "id": "beam-sizing-lab",
    "title": "Beam Sizing Lab: Reactions, Moment, Stress & Factor of Safety",
    "introHtml": "<p><strong>Scenario — a beam that must carry a machine.</strong> A 6 m simply supported beam (pin at A, roller at B) must carry a 30 kN machine load 2 m from the left support. The beam is a 100 × 200 mm rectangular steel section (I = 66.67 × 10⁶ mm⁴), and the steel yields at 250 MPa. Your job is to work out the reactions, the maximum bending moment, the maximum bending stress, and the factor of safety — and decide whether the beam is safe. All work is on paper: this lab is calculation and checking, not live work.</p>",
    "taskHtml": "<p><strong>Safety first.</strong> This lab is paper only. Do not load a real beam for it. In real work, beam sizing is done to a design code by a qualified engineer, with load combinations and inspections — this lab teaches you to understand the numbers, not to sign off on a structure.</p><p><strong>The beam:</strong> 6 m span, pin at A (left), roller at B (right), 30 kN load 2 m from A. <strong>The section:</strong> 100 mm wide × 200 mm deep rectangle, I = 66.67 × 10⁶ mm⁴, c = 100 mm. <strong>The steel:</strong> yield strength 250 MPa. Work out each value below and enter it. Use the checks: the reactions must add to 30 kN, and the moment must be zero at both supports.</p>",
    "headers": [
      "Calculation",
      "Your answer"
    ],
    "rows": [
      {
        "label": "REACTION AT A — The left (pin) reaction, in kN. (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "beam_ra",
            "expected": 20,
            "hint": "Moments about B: RA × 6 = 30 × 4 = 120, so RA = 20 kN."
          }
        ]
      },
      {
        "label": "REACTION AT B — The right (roller) reaction, in kN. (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "beam_rb",
            "expected": 10,
            "hint": "Moments about A: RB × 6 = 30 × 2 = 60, so RB = 10 kN. Check: 20 + 10 = 30 kN ✓."
          }
        ]
      },
      {
        "label": "MAXIMUM BENDING MOMENT — The largest bending moment in the beam, in kN·m. (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "beam_mmax",
            "expected": 40,
            "hint": "Maximum moment is under the load: M = RA × 2 = 20 × 2 = 40 kN·m."
          }
        ]
      },
      {
        "label": "SECTION MODULUS — The section modulus S = I ÷ c, in mm³. (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "beam_s",
            "expected": 666667,
            "hint": "S = 66.67 × 10⁶ ÷ 100 = 666,667 mm³."
          }
        ]
      },
      {
        "label": "MAXIMUM BENDING STRESS — The largest bending stress, in MPa. (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "beam_sigma",
            "expected": 60,
            "hint": "σ = M ÷ S = 40 × 10⁶ ÷ 666,667 ≈ 60 MPa."
          }
        ]
      },
      {
        "label": "FACTOR OF SAFETY — Yield strength (250 MPa) divided by the maximum stress. (Enter the number, rounded to 2 decimal places.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "beam_fs",
            "expected": 4.17,
            "hint": "FS = 250 ÷ 60 ≈ 4.17. The beam is safe on strength — with a comfortable margin."
          }
        ]
      }
    ],
    "passing": 70
  }
];
