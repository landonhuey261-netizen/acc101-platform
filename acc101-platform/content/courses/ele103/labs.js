// ele103 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "ac-power-and-power-factor-lab",
    "title": "AC Power & Power-Factor Lab",
    "passing": 70,
    "introHtml": "<p><strong>Job ticket #4201 — Bench calculation lab: size the power and the correction before you build it.</strong> Customer: a training workshop; the task is to work out the AC power numbers for a single-phase load and a power-factor correction, before any equipment is ordered. You are the apprentice doing the math: find apparent, true, and reactive power from voltage, current, and phase angle, then size the correction capacitor. This is a paper and calculator exercise only — no live circuits, no energized equipment. Any real bench work that follows is done de-energized, locked out and tagged out, under a licensed supervisor, per NFPA 70E.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=8zRKzRRDkm8\" target=\"_blank\" rel=\"noopener\">Difference between Real, Reactive and Apparent Power</a> — draw the power triangle for the example and check that it closes, then make your calls below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any bench work: this lab is calculations on paper only. Never connect a circuit to a live source to \"check\" your math — the math is checked on paper, and any real circuit is built and tested de-energized, locked out and tagged out, under a licensed supervisor. Capacitors can hold a charge after power is off: never touch a capacitor until it has been discharged with a proper tool and verified at zero volts by a qualified person. Keep your workspace clear, keep meter leads in the correct jacks, and treat every conductor as live until a qualified person has proven it dead.</p><p><strong>The load:</strong> A single-phase 120 V circuit draws 10 A at a phase angle of 45° (net inductive). A second load draws 10 kW at a power factor of 0.7 lagging, and the target power factor is 0.95. For each row, enter the computed value asked for, rounded to a whole number unless the question says otherwise. Check each answer with the power triangle: S = √(P² + Q²).</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "CALC — The 120 V, 10 A load: what is the apparent power, in VA? (S = E × I)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ac_s",
            "expected": 1200,
            "hint": "S = 120 × 10 = 1,200 VA."
          }
        ]
      },
      {
        "label": "CALC — The same load at 45°: what is the true power, in watts? (P = S × cos θ; cos 45° ≈ 0.707)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ac_p",
            "expected": 848,
            "hint": "P = 1,200 × 0.707 ≈ 848 watts."
          }
        ]
      },
      {
        "label": "CALC — The same load at 45°: what is the reactive power, in VAR? (Q = S × sin θ; sin 45° ≈ 0.707)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ac_q",
            "expected": 848,
            "hint": "Q = 1,200 × 0.707 ≈ 848 VAR."
          }
        ]
      },
      {
        "label": "CALC — Check: does √(P² + Q²) equal the apparent power? Enter 1 for yes, 2 for no.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ac_check",
            "expected": 1,
            "hint": "√(848² + 848²) ≈ 1,199 VA, which matches S = 1,200 VA — the triangle closes."
          }
        ]
      },
      {
        "label": "CALC — A load has P = 3,000 W and Q = 4,000 VAR. What is the apparent power, in VA? (S = √(P² + Q²))",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ac_s2",
            "expected": 5000,
            "hint": "S = √(3,000² + 4,000²) = √25,000,000 = 5,000 VA."
          }
        ]
      },
      {
        "label": "CALC — The same load: what is the power factor? Enter the value × 100 (for example, 0.6 → 60).",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ac_pf2",
            "expected": 60,
            "hint": "Power factor = P ÷ S = 3,000 ÷ 5,000 = 0.6, or 60%."
          }
        ]
      },
      {
        "label": "CALC — A 10 kW load at 0.7 power factor: what is the apparent power, in kVA? (Round to the nearest whole number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ac_s3",
            "expected": 14,
            "hint": "S = 10 ÷ 0.7 ≈ 14.3 kVA — 14 rounded to the nearest whole number."
          }
        ]
      },
      {
        "label": "CALC — The same load corrected to 0.95 power factor: what is the new apparent power, in kVA? (Round to the nearest whole number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ac_s4",
            "expected": 11,
            "hint": "S = 10 ÷ 0.95 ≈ 10.5 kVA — 11 rounded to the nearest whole number."
          }
        ]
      },
      {
        "label": "CALC — The correction: starting angle ≈ 45.6° (tan ≈ 1.02), target angle ≈ 18.2° (tan ≈ 0.33). How many kVAR of capacitance are needed for the 10 kW load? (Q_C = P × (tan θ₁ − tan θ₂); round to the nearest whole number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ac_kvar",
            "expected": 7,
            "hint": "Q_C = 10 × (1.02 − 0.33) = 10 × 0.69 ≈ 6.9 kVAR — 7 rounded to the nearest whole number."
          }
        ]
      },
      {
        "label": "SAFETY CALL — A correction capacitor has been switched off for an hour. Can you touch its terminals? 1) Yes — the power is off 2) No — a capacitor can hold a charge after power is off; discharge it with a proper tool and verify zero volts first 3) Yes, if you wear gloves 4) Only if the breaker is also off",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ac_safe",
            "expected": 2,
            "hint": "A capacitor holds its charge until it is discharged. Power off does not mean charge gone — discharge it with a proper tool, under a licensed supervisor, and verify zero volts before touching it."
          }
        ]
      }
    ]
  },
  {
    "id": "three-phase-and-transformer-lab",
    "title": "Three-Phase & Transformer Lab",
    "passing": 70,
    "introHtml": "<p><strong>Job ticket #4202 — Bench calculation lab: size the three-phase load and the transformer before you build it.</strong> Customer: a training workshop; the task is to work out the numbers for a three-phase motor and a step-down transformer, before any equipment is ordered. You are the apprentice doing the math: convert line and phase values in wye and delta, calculate three-phase power, and use the turns ratio to find a transformer's secondary voltage and current. This is a paper and calculator exercise only — no live circuits, no energized equipment. Any real bench work that follows is done de-energized, locked out and tagged out, under a licensed supervisor, per NFPA 70E.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=0ZuoBTd7STk\" target=\"_blank\" rel=\"noopener\">What's the Difference Between Wye and Delta?</a> — write down the line and phase relationships for each connection, then make your calls below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any bench work: this lab is calculations on paper only. Never connect a circuit to a live source to \"check\" your math — the math is checked on paper, and any real circuit is built and tested de-energized, locked out and tagged out, under a licensed supervisor. Transformers can be live on the secondary even when the load is off, and a current transformer's secondary must never be open-circuited while energized. Keep your workspace clear, keep meter leads in the correct jacks, and treat every conductor as live until a qualified person has proven it dead.</p><p><strong>The equipment:</strong> (A) A wye system with 120 V phase voltage; a wye system with 277 V phase voltage; a delta system with 10 A phase current. (B) A 480 V three-phase motor drawing 20 A at 0.85 power factor. (C) A transformer with 100 primary turns and 200 secondary turns, fed by 120 V at 10 A; and a transformer with 480 primary turns and 120 secondary turns, fed by 480 V. For each row, enter the computed value asked for, rounded to a whole number unless the question says otherwise.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "CALC — Wye system, 120 V phase voltage: what is the line voltage, in volts? (V_L = √3 × V_P; √3 ≈ 1.732)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tp_vl1",
            "expected": 208,
            "hint": "V_L = 1.732 × 120 ≈ 208 volts — the 120/208 V system."
          }
        ]
      },
      {
        "label": "CALC — Wye system, 277 V phase voltage: what is the line voltage, in volts? (V_L = √3 × V_P)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tp_vl2",
            "expected": 480,
            "hint": "V_L = 1.732 × 277 ≈ 480 volts — the 277/480 V system."
          }
        ]
      },
      {
        "label": "CALC — Delta system, 10 A phase current: what is the line current, in amps? (I_L = √3 × I_P; round to the nearest whole number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tp_il",
            "expected": 17,
            "hint": "I_L = 1.732 × 10 ≈ 17.3 amps — 17 rounded to the nearest whole number."
          }
        ]
      },
      {
        "label": "CALC — The 480 V three-phase motor, 20 A, 0.85 pf: what is the true power, in kW? (P = √3 × V_L × I_L × pf; round to the nearest whole number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tp_p",
            "expected": 14,
            "hint": "P = 1.732 × 480 × 20 × 0.85 ≈ 14,131 W — 14 kW rounded to the nearest whole number."
          }
        ]
      },
      {
        "label": "CALC — The same motor: what is the apparent power, in kVA? (S = √3 × V_L × I_L; round to the nearest whole number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tp_s",
            "expected": 17,
            "hint": "S = 1.732 × 480 × 20 ≈ 16,627 VA — 17 kVA rounded to the nearest whole number."
          }
        ]
      },
      {
        "label": "CALC — Transformer, 100 primary turns, 200 secondary turns, 120 V primary: what is the secondary voltage, in volts?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tp_vs1",
            "expected": 240,
            "hint": "V_S = 120 × (200 ÷ 100) = 240 volts — a step-up transformer."
          }
        ]
      },
      {
        "label": "CALC — The same transformer, primary current 10 A: what is the secondary current, in amps?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tp_is1",
            "expected": 5,
            "hint": "I_S = 10 × (100 ÷ 200) = 5 amps. Power checks: 120 × 10 = 1,200 VA in, 240 × 5 = 1,200 VA out."
          }
        ]
      },
      {
        "label": "CALC — Transformer, 480 primary turns, 120 secondary turns, 480 V primary: what is the secondary voltage, in volts?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tp_vs2",
            "expected": 120,
            "hint": "V_S = 480 × (120 ÷ 480) = 120 volts — a step-down transformer."
          }
        ]
      },
      {
        "label": "CALC — A transformer delivers 9,000 W and its input is 10,000 W. What is its efficiency, in percent?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tp_eff",
            "expected": 90,
            "hint": "Efficiency = 9,000 ÷ 10,000 = 0.9, or 90%."
          }
        ]
      },
      {
        "label": "SAFETY CALL — A transformer is switched off at its load, but the primary is still energized. Can you work on the secondary? 1) Yes — the load is off 2) No — the secondary can still be live; verify absence of voltage on both sides, de-energized and locked out, before working 3) Yes, if you wear gloves 4) Only if the transformer is small",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tp_safe",
            "expected": 2,
            "hint": "A transformer can be live on the secondary even when the load is off. Never assume it is dead — verify absence of voltage on both sides, de-energized and locked out, under a licensed supervisor."
          }
        ]
      }
    ]
  }
];
