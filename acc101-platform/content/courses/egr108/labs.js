// egr108 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "tensile-test-material-selection",
    "title": "Tensile Test and Material Selection",
    "passing": 70,
    "introHtml": "<p><strong>Job ticket #EGR-108 — Bracket material check.</strong> A bracket for a 12 kN load is being made from steel bar with a cross-section of 100 mm² and a gauge length of 200 mm. In the tensile test, a pull of 20,000 N stretched the bar by 0.2 mm. Your task: work out the stress, strain, and modulus, check the safety factor, and pick the right material and treatment. Read the task, then answer each decision row.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any tensile test or machining: wear eye protection (a breaking specimen can throw fragments), keep hands clear of the test machine's grips while it is loaded, and never stand in line with a specimen under tension. Check the machine's load limit before you start.</p><p><strong>The numbers:</strong> Cross-section A = 100 mm². Gauge length L = 200 mm. Test pull F = 20,000 N, stretch ΔL = 0.2 mm. Stress σ = F ÷ A = 20,000 ÷ 100 = 200 MPa. Strain ε = ΔL ÷ L = 0.2 ÷ 200 = 0.001. Young's modulus E = σ ÷ ε = 200 ÷ 0.001 = 200,000 MPa = 200 GPa (steel — the numbers check out). The steel's yield strength is 250 MPa, so the yield load is 250 × 100 = 25,000 N. Working load is 12,000 N, so the factor of safety is 25,000 ÷ 12,000 = 2.08, about 2.1.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before running the tensile test, what do you do first? 1) Stand in line with the specimen to watch it closely 2) Wear eye protection, keep hands clear of the grips, and check the machine's load limit 3) Load the specimen past the machine's limit to be sure 4) Hold the specimen by hand while it is pulled",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tensile_safety",
            "expected": 2,
            "hint": "Eye protection, clear hands, and a load-limit check come first. Standing in line (1) puts you in the path of fragments, overloading (3) damages the machine, and holding a loaded specimen (4) is dangerous."
          }
        ]
      },
      {
        "label": "COMPUTED — Pull is 20,000 N on 100 mm². What is the stress in MPa? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tensile_stress",
            "expected": 200,
            "hint": "20,000 ÷ 100 = 200 MPa."
          }
        ]
      },
      {
        "label": "COMPUTED — The bar is 200 mm long and stretches 0.2 mm. What is the strain? (Enter the number, e.g. 0.001.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tensile_strain",
            "expected": 0.001,
            "hint": "0.2 ÷ 200 = 0.001."
          }
        ]
      },
      {
        "label": "COMPUTED — Stress is 200 MPa and strain is 0.001. What is Young's modulus in GPa? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tensile_modulus",
            "expected": 200,
            "hint": "E = 200 ÷ 0.001 = 200,000 MPa = 200 GPa, the value for steel."
          }
        ]
      },
      {
        "label": "COMPUTED — Yield strength is 250 MPa and the cross-section is 100 mm². At what load does the bar yield, in newtons? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tensile_yield_load",
            "expected": 25000,
            "hint": "250 × 100 = 25,000 N."
          }
        ]
      },
      {
        "label": "COMPUTED — Yield load is 25,000 N and the working load is 12,000 N. What is the factor of safety? (Enter the number to one decimal place, e.g. 2.1.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tensile_fos",
            "expected": 2.1,
            "hint": "25,000 ÷ 12,000 = 2.08, about 2.1."
          }
        ]
      },
      {
        "label": "DECISION — The factor of safety is about 2.1 for a static bracket load. Is that acceptable? 1) No — it must be at least 10 2) Yes — about 2 is a normal factor of safety for a static load 3) No — the bar will yield at once 4) Yes — but only if the load is doubled",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tensile_fos_ok",
            "expected": 2,
            "hint": "About 2 is a normal factor of safety for a static load. It would not be enough for a lifting part or a shock load, but this bracket is static. (3) is wrong: the working load is well below yield."
          }
        ]
      },
      {
        "label": "DECISION — The bracket will be used outdoors in the rain. Which material choice is best? 1) Mild steel, unprotected 2) Stainless steel, or mild steel painted or galvanised 3) Grey cast iron 4) Bare aluminium with no consideration of stiffness",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tensile_material",
            "expected": 2,
            "hint": "Mild steel rusts outdoors unless protected, so use stainless steel or protect the mild steel. Grey iron (3) is brittle in tension, and aluminium (4) needs a stiffness check — it is not the automatic answer."
          }
        ]
      },
      {
        "label": "DECISION — The bracket must be machined from bar that is too hard. Which treatment do you order first? 1) Quenching 2) Tempering 3) Annealing 4) Case hardening",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tensile_treatment",
            "expected": 3,
            "hint": "Annealing softens the steel for machining. Quenching (1) hardens it, tempering (2) follows quenching, and case hardening (4) hardens the surface."
          }
        ]
      },
      {
        "label": "DECISION — After machining, the bracket's pin holes must be hard-wearing but the core must stay tough. What is the right treatment? 1) Anneal the whole bracket 2) Quench and temper the whole bracket 3) Case-harden the holes' surfaces only 4) Leave it as machined",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tensile_case",
            "expected": 3,
            "hint": "Case hardening hardens the surface where wear happens and leaves the core tough. Annealing (1) softens everything, and a full quench and temper (2) hardens the core too, which is not wanted here."
          }
        ]
      }
    ],
    "csvFilename": "tensile-test-material-selection.csv",
    "csv": "Decision point,Your call\n\"SAFETY CALL — Before running the tensile test, what do you do first? 1) Stand in line with the specimen to watch it closely 2) Wear eye protection, keep hands clear of the grips, and check the machine's load limit 3) Load the specimen past the machine's limit to be sure 4) Hold the specimen by hand while it is pulled\",\n\"COMPUTED — Pull is 20,000 N on 100 mm². What is the stress in MPa? (Enter the number.)\",\n\"COMPUTED — The bar is 200 mm long and stretches 0.2 mm. What is the strain? (Enter the number, e.g. 0.001.)\",\n\"COMPUTED — Stress is 200 MPa and strain is 0.001. What is Young's modulus in GPa? (Enter the number.)\",\n\"COMPUTED — Yield strength is 250 MPa and the cross-section is 100 mm². At what load does the bar yield, in newtons? (Enter the number.)\",\n\"COMPUTED — Yield load is 25,000 N and the working load is 12,000 N. What is the factor of safety? (Enter the number to one decimal place, e.g. 2.1.)\",\n\"DECISION — The factor of safety is about 2.1 for a static bracket load. Is that acceptable? 1) No — it must be at least 10 2) Yes — about 2 is a normal factor of safety for a static load 3) No — the bar will yield at once 4) Yes — but only if the load is doubled\",\n\"DECISION — The bracket will be used outdoors in the rain. Which material choice is best? 1) Mild steel, unprotected 2) Stainless steel, or mild steel painted or galvanised 3) Grey cast iron 4) Bare aluminium with no consideration of stiffness\",\n\"DECISION — The bracket must be machined from bar that is too hard. Which treatment do you order first? 1) Quenching 2) Tempering 3) Annealing 4) Case hardening\",\n\"DECISION — After machining, the bracket's pin holes must be hard-wearing but the core must stay tough. What is the right treatment? 1) Anneal the whole bracket 2) Quench and temper the whole bracket 3) Case-harden the holes' surfaces only 4) Leave it as machined\",\n"
  }
];
