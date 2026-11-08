// Plumbing 131 — Scenario lab (Water Heater Install & Safety).
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.

module.exports = [
  {
    "id": "water-heater-install-safety",
    "title": "Water Heater Install & Safety",
    "introHtml": "<p><strong>Job ticket #1310 — Replace a failed 40-gallon gas water heater.</strong> Customer: a family of four with no hot water; the old tank is leaking at the bottom seam. Equipment: new <strong>40-gallon gas storage water heater, 40,000 Btu per hour</strong>, atmospheric (Category I) vented, in a basement utility room. The house water system is closed — a pressure-reducing valve sits on the main. Readings so far: static water pressure <strong>60 psi</strong>; existing vent is Type B, 3-inch, rising to the chimney; the old heater's T&P discharge pipe ends 4 inches above the floor drain. Your task: work the install in the right order, make the venting, T&P, and expansion calls, and finish with a safe test. Two tracks are offered below: Track A is the do-it-in-your-shop track (real tools, real sequence, self-check calls); Track B is the watch-and-sequence track (watch the verified install video, then answer the same order and decision questions from what you saw).</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=Jj4FQJSJHiY\" target=\"_blank\" rel=\"noopener\">How To Install An Electric Hot Water Heater Tank</a> — a complete tank install on video, showing the pan, the connections, the TPR discharge run, filling, and testing, before you make your calls below. (The video shows an electric heater; the gas venting and gas connection calls in this lab follow the course's gas rules.)</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Gas, scalding water, and electricity are all in play on this job. Turn off the gas cock and the water before touching the old heater. Ventilate the room — gas water heaters produce carbon monoxide, and a blocked or wrongly sloped vent can spill it into the house. Never fire a gas heater with a disconnected vent, and never fill-and-fire an electric heater before the tank is full (dry-fired elements burn out in seconds). Treat the T&P valve as a life-safety device: never plug, cap, or remove it, and never cap its discharge pipe. Keep the work area dry — water and live electrical parts do not mix — and test the T&P valve with care, because it discharges scalding water.</p><p><strong>TRACK A — Do it in your shop (sequence for the order questions):</strong> Step 1 — PPE on, gas and water off, old tank drained and removed. Step 2 — Set the new heater level in its drain pan. Step 3 — Connect the cold water to the inlet and the hot water to the outlet. Step 4 — Connect the gas line through a shutoff valve and sediment trap, and leak-test every joint. Step 5 — Connect the vent (Type B, rising continuously to the chimney) and the T&P discharge pipe. Step 6 — Install the thermal expansion tank on the cold line and charge it to house pressure. Step 7 — Fill the tank completely and bleed the air at a hot tap. Step 8 — Light the burner, test the T&P valve, and check every joint for leaks.</p><p><strong>TRACK B — Watch and sequence (same job, from the video):</strong> Watch the install video in the job ticket, then answer the order questions from the sequence in Track A — the video shows the same order: shutoff and drain, set and level, water connections, fuel and vent, fill, then fire and test. The gas and T&P calls below follow the course's gas rules, which the video's electric install does not show — use Modules 7 and 8 for those.</p><p><strong>Facts for the decision and computed rows:</strong> New heater 40,000 Btu per hour. House static water pressure 60 psi. T&P valve opens at 150 psi or 210°F. Discharge pipe is 3/4 inch and ends 4 inches above the floor drain. The vent is Type B (double-wall). The old heater was a 40,000-Btu tank on a 1/2-inch gas line. For each row, enter the option number, the step number, or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before any work starts, what do you do first? 1) Light the burner to test it while the old tank is still connected 2) Turn off the gas cock and the water, ventilate the room, and put on PPE — gas, scalding water, and electricity are all in play 3) Drain the old tank while the gas is still on so it drains faster 4) Remove the T&P valve so it does not discharge while you work",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wh_safety",
            "expected": 2,
            "hint": "Step 0 governs: fuel and water off, ventilation, and protection before anything moves. Options 1 and 3 keep fuel live during the work; option 4 removes the life-safety device that protects the tank."
          }
        ]
      },
      {
        "label": "ORDER — 'Connect the gas line through a shutoff valve and sediment trap, and leak-test every joint.' Which step of the install sequence is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wh_ord_gas",
            "expected": 4,
            "hint": "Sequence: 1 shutoff/drain/remove, 2 set level in pan, 3 water connections, 4 gas with shutoff and sediment trap, 5 vent and T&P discharge, 6 expansion tank, 7 fill and bleed, 8 light and test."
          }
        ]
      },
      {
        "label": "ORDER — 'Fill the tank completely and bleed the air at a hot tap.' Which step of the install sequence is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wh_ord_fill",
            "expected": 7,
            "hint": "Filling is Step 7 — after the water, gas, vent, T&P, and expansion connections are all made, and before the burner is lit (Step 8). Fill before firing, every time."
          }
        ]
      },
      {
        "label": "ORDER — 'Set the new heater level in its drain pan.' Which step of the install sequence is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wh_ord_set",
            "expected": 2,
            "hint": "Setting the heater is Step 2, right after shutoff, drain, and removal (Step 1) and before any connections are made."
          }
        ]
      },
      {
        "label": "ORDER — 'Install the thermal expansion tank on the cold line and charge it to house pressure.' Which step of the install sequence is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wh_ord_exp",
            "expected": 6,
            "hint": "The expansion tank is Step 6 — after the vent and T&P discharge (Step 5) and before filling (Step 7), so the system is protected the moment it is pressurized."
          }
        ]
      },
      {
        "label": "ORDER — 'Light the burner, test the T&P valve, and check every joint for leaks.' Which step of the install sequence is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wh_ord_light",
            "expected": 8,
            "hint": "Lighting and testing is Step 8, the final step — only after the tank is filled (Step 7) and every connection is made."
          }
        ]
      },
      {
        "label": "DECISION — The T&P discharge pipe is 3/4 inch and ends 4 inches above the floor drain, by gravity, with no valves and no threaded end. What is the verdict? 1) It violates code — the pipe must be 1 inch 2) It violates code — it must end at least 12 inches above the floor 3) It meets IPC 504.6 — full size, gravity, air gap, and no more than 6 inches above the floor or receptor 4) It violates code — a discharge pipe must be threaded",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wh_tp_verdict",
            "expected": 3,
            "hint": "IPC 504.6: full size (3/4 inch here), gravity drain, no valves or tees, no threaded end, air gap, terminating no more than 6 inches above the floor or receptor. Four inches is inside the limit, and a threaded end is prohibited, not required."
          }
        ]
      },
      {
        "label": "DECISION — The house has a pressure-reducing valve on the main, so the water system is closed. The old install had no expansion tank and the T&P valve dripped after every heating cycle. What is the correct call? 1) Replace the T&P valve with a higher-pressure one 2) Install a thermal expansion tank on the cold line, charged to house pressure 3) Remove the pressure-reducing valve 4) Turn the thermostat down to 100°F and leave it",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wh_exp_call",
            "expected": 2,
            "hint": "A closed system needs an expansion tank (IPC 607.3) — the dripping T&P valve is the symptom of expansion with nowhere to go. A higher-pressure relief valve (1) defeats a safety device, removing the PRV (3) changes the building's pressure control, and lowering the setpoint (4) does not remove the expansion problem."
          }
        ]
      },
      {
        "label": "COMPUTED — The expansion tank must be charged to the house water pressure. The static pressure is 60 psi. What pressure do you charge the tank to? (Enter psi.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wh_exp_psi",
            "expected": 60,
            "hint": "The tank's air charge must match the house water pressure — 60 psi here. A tank charged to 40 psi on a 60-psi system does half its job."
          }
        ]
      },
      {
        "label": "DECISION — The vent is Type B (double-wall) and passes 2 inches from a wood joist. Is that acceptable? 1) No — Type B needs 6 inches 2) Yes — Type B needs only 1 inch of clearance from combustibles 3) No — no vent may pass within 12 inches of wood 4) Yes — vent clearance does not apply to Type B",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wh_vent_clear",
            "expected": 2,
            "hint": "Type B (double-wall) vent needs only 1 inch of clearance because its outer wall stays cooler; 2 inches is inside the limit. Six inches is the single-wall clearance (option 1 confuses the two)."
          }
        ]
      },
      {
        "label": "DECISION — The vent connector runs from the draft hood to the chimney. What slope does it need? 1) Level is fine 2) It must slope down toward the chimney 3) It must rise continuously toward the chimney, about 1/4 inch per foot 4) It must rise 1 inch per foot",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wh_vent_slope",
            "expected": 3,
            "hint": "A natural-draft vent connector must rise continuously toward the chimney — about 1/4 inch per foot. Level (1) stalls the draft, downhill (2) is worse, and 1 inch per foot (4) is not the rule."
          }
        ]
      },
      {
        "label": "DECISION — The new 40,000-Btu heater replaces an old 40,000-Btu heater on the existing 1/2-inch gas line. What is the gas call? 1) The line must be upsized to 1 inch regardless 2) The same load on the same line is acceptable — verify the line size by the longest-length method, and it will check out at the same load 3) The gas line can be removed 4) The heater must be converted to electric",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wh_gas_call",
            "expected": 2,
            "hint": "Same load, same line: a 40,000-Btu heater on the line that served a 40,000-Btu heater is the same sizing case — verify it by the longest-length method. Upsizing (1) is required when the load grows, such as a 199,000-Btu tankless; removing the line (3) or converting (4) has no basis here."
          }
        ]
      },
      {
        "label": "DECISION — The cold water connection on the new heater is marked 'cold' and has the dip tube. The hot outlet is marked 'hot.' A helper wants to connect the cold supply to the hot side 'because the pipes line up better.' What do you do? 1) Let him — the heater will sort it out 2) Refuse — reversed connections leave the household with lukewarm water and defeat the dip tube 3) Connect them reversed and swap the labels 4) Connect both supplies to the cold side",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wh_reversed",
            "expected": 2,
            "hint": "Cold must go to the inlet with the dip tube so cold water enters at the tank bottom and hot water leaves from the top. Reversed connections mix cold water at the top and the household gets lukewarm water at best."
          }
        ]
      },
      {
        "label": "DECISION — The job is finished: the tank is full, the burner is lit, the T&P valve was tested, and every joint looks dry. What is the correct finish? 1) Pack up and leave — dry joints are proof 2) Wipe every joint dry, wait ten minutes, and look again before leaving 3) Turn the thermostat to maximum to test faster 4) Cap the T&P discharge so it cannot drip on the floor",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wh_finish",
            "expected": 2,
            "hint": "The wipe-and-wait: a slow weep does not show immediately. Wipe each joint dry, wait, and look again. Maximum thermostat (3) risks scalding and is not a test, and capping the discharge (4) is prohibited and dangerous."
          }
        ]
      }
    ],
    "passing": 70
  }
];
