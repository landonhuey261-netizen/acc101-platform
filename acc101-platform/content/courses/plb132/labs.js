// Plumbing 132 — Scenario lab (Gas Pipe Sizing & Leak Test).
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.

module.exports = [
  {
    "id": "gas-pipe-sizing-leak-test",
    "title": "Gas Pipe Sizing & Leak Test",
    "introHtml": "<p><strong>Job ticket #1320 — Run a new gas line for a furnace and a water heater.</strong> Customer: a homeowner replacing an old furnace; the gas meter is at the front of the house and the equipment is in the basement at the back. Equipment: new furnace <strong>100,000 Btu per hour</strong> and existing storage water heater <strong>40,000 Btu per hour</strong>, both natural gas, on a system with a maximum working pressure of <strong>0.5 psi</strong> and a 0.5-inch water column pressure drop allowance. Measurements: the longest run from the meter to the farthest appliance (the furnace) is <strong>50 feet</strong>; the furnace branch is <strong>30 feet</strong> long; the water heater branch is <strong>20 feet</strong> long. All piping is Schedule 40 metallic pipe, sized from <strong>IFGC Table 402.4(2)</strong> (natural gas, inlet under 2 psi, 0.5-inch w.c. drop, specific gravity 0.60). Your task: size the pipe, run the pressure test, and prove the system tight. Work the sizing math, then the test procedure, in order.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=zjJXVGjs0hQ\" target=\"_blank\" rel=\"noopener\">How to Size Your Gas Lines</a> — gas pipe sizing on video, showing the load, the length, and the table. And for the test itself: <a href=\"https://www.youtube.com/watch?v=1ks7bTyLgFc\" target=\"_blank\" rel=\"noopener\">How To Test A Gas Line, Pressure Test And Pass Inspection</a> — a pressure test from setup to a passing reading.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Gas leaks kill: a gas-air mixture in a house can explode, and natural gas is odorless without its mercaptan odorant. Never test with gas — the test medium is air. Never use a flame to look for a leak; use soapy water only. If you smell gas at any point, stop work, leave the house, do not operate any switch or phone inside, and call the gas company from outside. Isolate the appliances before pressurizing, so the test pressure never reaches a gas valve or a burner. Purge outdoors only (IFGC 406.7). Keep a fire extinguisher nearby and keep the work area ventilated.</p><p><strong>PROCEDURE — the sequence for the order questions:</strong> Step 1 — Shut off the gas at the meter, isolate the appliances, and cap the open ends. Step 2 — Connect the test gauge and the hand pump to the system. Step 3 — Pressurize the system with air to the test pressure of 3 psig. Step 4 — Hold the test for the minimum duration of 10 minutes and watch the gauge. Step 5 — Soap-test every joint and check for a pressure drop. Step 6 — Release the pressure, purge the system outdoors, and restore the gas.</p><p><strong>FACTS for the sizing and computed rows (IFGC Table 402.4(2), Schedule 40 metallic, natural gas, under 2 psi inlet, 0.5-inch w.c. drop, SG 0.60 — capacities in cubic feet per hour):</strong> At 20 feet: 1/2 inch = 118, 3/4 inch = 247, 1 inch = 466. At 30 feet: 1/2 inch = 95, 3/4 inch = 199, 1 inch = 374. At 50 feet: 1/2 inch = 72, 3/4 inch = 151, 1 inch = 284. At 60 feet: 1/2 inch = 65, 3/4 inch = 137, 1 inch = 257. One cubic foot of natural gas holds about 1,000 Btu. No diversity factor is allowed (IFGC 402.2) — size for every appliance running at once. When the length falls between table rows, use the next higher row. For each row, enter the option number, the step number, or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — You smell gas while working on the line. What do you do? 1) Light a match to find the leak 2) Leave the house, do not operate any switch or phone inside, and call the gas company from outside 3) Open the windows and keep working 4) Turn on the exhaust fan to clear the gas",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gp_safety",
            "expected": 2,
            "hint": "Step 0 governs: leave, touch nothing electrical, and call from outside. A flame (1) is an ignition source, and a fan switch (4) can spark. Opening windows (3) does not make it safe to stay."
          }
        ]
      },
      {
        "label": "ORDER — 'Shut off the gas at the meter, isolate the appliances, and cap the open ends.' Which step of the test procedure is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gp_ord_isolate",
            "expected": 1,
            "hint": "Isolation is Step 1 — before the gauge is connected and before any pressure is applied, so the test pressure never reaches a gas valve or a burner."
          }
        ]
      },
      {
        "label": "ORDER — 'Pressurize the system with air to the test pressure of 3 psig.' Which step of the test procedure is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gp_ord_press",
            "expected": 3,
            "hint": "Pressurizing is Step 3 — after the gauge and pump are connected (Step 2) and before the hold (Step 4)."
          }
        ]
      },
      {
        "label": "ORDER — 'Soap-test every joint and check for a pressure drop.' Which step of the test procedure is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gp_ord_soap",
            "expected": 5,
            "hint": "Soap-testing is Step 5 — during and after the hold (Step 4), and before the pressure is released and the system is purged (Step 6)."
          }
        ]
      },
      {
        "label": "COMPUTED — The furnace needs 100,000 Btu per hour and the water heater needs 40,000 Btu per hour. What is the total gas load in cubic feet per hour? (Enter cfh. One cubic foot of natural gas holds about 1,000 Btu, and no diversity factor is allowed.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gp_total_cfh",
            "expected": 140,
            "hint": "Total input is 100,000 + 40,000 = 140,000 Btu per hour. At about 1,000 Btu per cubic foot, that is 140 cfh — and every appliance is assumed to run at once, so no diversity factor reduces it."
          }
        ]
      },
      {
        "label": "DECISION — The main run is 50 feet long and must carry the full 140 cfh. Using IFGC Table 402.4(2), what size Schedule 40 pipe is needed? 1) 1/2 inch (72 cfh at 50 ft) 2) 3/4 inch (151 cfh at 50 ft) 3) 1 inch (284 cfh at 50 ft) 4) 1-1/4 inch",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gp_main_size",
            "expected": 2,
            "hint": "At 50 feet, 1/2 inch carries only 72 cfh — half the load. 3/4 inch carries 151 cfh, which covers the 140-cfh load. 1 inch would work but is not the smallest pipe that does the job."
          }
        ]
      },
      {
        "label": "DECISION — The furnace branch is 30 feet long and must carry the furnace's 100 cfh. Using IFGC Table 402.4(2), what size pipe is needed? 1) 1/2 inch (95 cfh at 30 ft) 2) 3/4 inch (199 cfh at 30 ft) 3) 1 inch (374 cfh at 30 ft) 4) 1-1/4 inch",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gp_furn_size",
            "expected": 2,
            "hint": "At 30 feet, 1/2 inch carries only 95 cfh — short of the 100-cfh furnace load. 3/4 inch carries 199 cfh, which covers it with room to spare."
          }
        ]
      },
      {
        "label": "DECISION — The water heater branch is 20 feet long and must carry the water heater's 40 cfh. Using IFGC Table 402.4(2), what size pipe is needed? 1) 1/2 inch (118 cfh at 20 ft) 2) 3/4 inch (247 cfh at 20 ft) 3) 1 inch (466 cfh at 20 ft) 4) 1-1/4 inch",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gp_wh_size",
            "expected": 1,
            "hint": "At 20 feet, 1/2 inch carries 118 cfh, which is more than the 40-cfh water heater load. The larger sizes would work but are oversized."
          }
        ]
      },
      {
        "label": "COMPUTED — The system's maximum working pressure is 0.5 psi. Under IFGC 406.4.1 the test pressure must be at least 1.5 times the working pressure, and never less than 3 psig. What test pressure do you use? (Enter psig.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gp_test_psi",
            "expected": 3,
            "hint": "1.5 × 0.5 = 0.75 psig, but the 3-psig minimum governs — so the test pressure is 3 psig."
          }
        ]
      },
      {
        "label": "COMPUTED — This is a single-family dwelling. What is the minimum test duration in minutes? (Enter minutes.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gp_test_min",
            "expected": 10,
            "hint": "For a single-family dwelling (or a system under 10 cubic feet), the minimum duration is 10 minutes. The 1/2-hour-per-500-cubic-feet rule applies to larger systems."
          }
        ]
      },
      {
        "label": "DECISION — You are choosing a test gauge for the 3-psig test. The gauge range must not exceed 5 times the test pressure. Which gauge is correct? 1) A 0–100 psig gauge 2) A 0–15 psig gauge 3) A 0–200 psig gauge 4) A 0–3 psig gauge with no margin",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gp_gauge",
            "expected": 2,
            "hint": "Five times the 3-psig test pressure is 15 psig, so a 0–15 psig gauge is the largest that can read a small pressure drop accurately. A 0–100 or 0–200 psig gauge is too coarse, and a gauge that ends exactly at the test pressure has no margin."
          }
        ]
      },
      {
        "label": "DECISION — What do you pressurize the system with for the test? 1) Natural gas 2) Air — never gas 3) Water 4) Propane",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gp_medium",
            "expected": 2,
            "hint": "The test medium is air. Testing with gas would fill the house with fuel, and water is not the test medium for a gas system."
          }
        ]
      },
      {
        "label": "DECISION — During the hold, the gauge drops 0.5 psig and a soap test shows bubbles growing at a threaded joint. What do you do? 1) Accept it — a small drop is normal 2) Find and repair the leak, then retest the full duration 3) Raise the test pressure to cover the drop 4) Tighten the joint while the system is still pressurized with gas",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gp_leak",
            "expected": 2,
            "hint": "Any pressure drop means a leak: repair it and retest the full duration. Raising the pressure hides the leak, and a drop is never normal on a tight system."
          }
        ]
      },
      {
        "label": "DECISION — The test passes. What is the correct finish? 1) Light the appliances immediately 2) Release the pressure, purge the system outdoors, and then restore the gas 3) Purge the system indoors through the appliance burners 4) Leave the test gauge on the system permanently",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gp_finish",
            "expected": 2,
            "hint": "Release the pressure, purge outdoors (IFGC 406.7), and then restore the gas. Purging indoors fills the house with gas, and the appliances are lit only after the air is purged."
          }
        ]
      }
    ],
    "passing": 70
  }
];
