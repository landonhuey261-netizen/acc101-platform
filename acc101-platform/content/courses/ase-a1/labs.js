// ase-a1 — Scenario labs.
module.exports = [
  {
    "id": "compression-leakdown-diagnosis",
    "title": "Engine Compression & Leakdown Diagnosis",
    "introHtml": "<p><strong>Job ticket #A1-101 — Four-cylinder car, runs rough, lacks power, uses oil.</strong> Customer: a driver who says the car shakes at idle, feels weak on hills, and needs oil added between changes. Your task: test the engine's mechanical health before replacing any parts. Read the case in the task, then answer each decision row.</p><p><strong>Worked example first — a healthy engine (completed for you).</strong> A different car is tested the same way: its four cylinders read 150, 151, 149, and 150. Step 1: the highest reading is 151. Step 2: the lowest is 149. Step 3: the spread is 151 − 149 = 2, a tiny gap — the cylinders are all sealing alike. Step 4: a leakdown test on any cylinder shows only a small leak, and the air goes nowhere in particular. That is a healthy engine. Now test the customer's car below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any engine test: let a hot engine cool enough to work on safely, wear safety glasses and gloves, and disable the fuel and ignition so the engine cannot start while you crank it for the compression test. Never reach near belts or the fan while the engine is running, and keep your hands clear of hot exhaust parts. A compression or leakdown test is done with the engine off — if the engine starts unexpectedly with a gauge in a plug hole, the gauge becomes a projectile.</p><p><strong>The case, as you find it:</strong> (1) The exhaust blows blue smoke when the car accelerates. (2) The oil level is low and the oil smells of fuel. (3) A compression test is run properly — engine warm, throttle held open, fuel and ignition disabled, battery charged — and the readings are: cylinder 1 reads 150, cylinder 2 reads 148, cylinder 3 reads 112, and cylinder 4 reads 149. (4) A leakdown test on cylinder 3 shows 38 percent of the air leaking out, and the escaping air hisses from the tailpipe. (5) At idle the vacuum gauge needle flickers rapidly. (6) The two neighboring cylinders in a different car on the next lift both read low, while the other cylinders read normally. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before you run the compression test, what must you do first? 1) Crank the engine with the spark plugs still in and the fuel on 2) Let the hot engine cool enough to work on safely, wear glasses and gloves, and disable the fuel and ignition so the engine cannot start while cranking 3) Remove the radiator cap while the engine is hot to check the coolant 4) Start the engine and hold the gauge in the plug hole",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_safety",
            "expected": 2,
            "hint": "Step 0 governs: a compression test is done with the engine off and unable to start — fuel and ignition disabled, plugs out, glasses and gloves on. Cranking with plugs in and fuel on (1) can start the engine, opening a hot radiator cap (3) causes severe burns, and holding a gauge in a running engine (4) is dangerous."
          }
        ]
      },
      {
        "label": "COMPUTED — The compression readings are 150, 148, 112, and 149. What is the highest reading? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_highest",
            "expected": 150,
            "hint": "The four readings are 150, 148, 112, and 149. The highest is 150, on cylinder 1."
          }
        ]
      },
      {
        "label": "COMPUTED — What is the lowest reading? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_lowest",
            "expected": 112,
            "hint": "The four readings are 150, 148, 112, and 149. The lowest is 112, on cylinder 3."
          }
        ]
      },
      {
        "label": "COMPUTED — The spread is the highest reading minus the lowest reading. What is the spread? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_spread",
            "expected": 38,
            "hint": "150 − 112 = 38. The suspect cylinder reads 38 below the best cylinder — a large gap."
          }
        ]
      },
      {
        "label": "COMPUTED — The spread of 38 is about what percentage of the highest reading of 150? (Enter the whole number, rounded.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_pct",
            "expected": 25,
            "hint": "38 ÷ 150 = 0.253, about 25 percent. A quarter of the best cylinder's pressure is missing from the weak one."
          }
        ]
      },
      {
        "label": "DECISION — Which cylinder is the suspect? 1) Cylinder 1 2) Cylinder 2 3) Cylinder 3 4) Cylinder 4",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_suspect",
            "expected": 3,
            "hint": "Cylinder 3 reads 112 while the others read 148–150. The low cylinder is the suspect; the other three are all sealing alike."
          }
        ]
      },
      {
        "label": "DECISION — The leakdown test on cylinder 3 shows 38 percent leaking, and the air hisses from the tailpipe. Which part has failed? 1) The intake valve 2) The exhaust valve 3) The piston rings 4) The head gasket",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_leak_part",
            "expected": 2,
            "hint": "Air from the tailpipe means air is escaping through the exhaust side, and the only path there is the exhaust valve — it is not sealing, most likely burned. An intake-valve leak (1) would hiss from the throttle body, worn rings (3) from the oil filler, and a head gasket (4) would bubble the coolant."
          }
        ]
      },
      {
        "label": "COMPUTED — The leakdown test feeds 100 units of air into cylinder 3 and 38 units leak out. How many units stay in the cylinder? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_stays",
            "expected": 62,
            "hint": "100 − 38 = 62 units stay in the cylinder. The 38 that escape are the leak — and where they escape to names the failed part."
          }
        ]
      },
      {
        "label": "DECISION — The vacuum gauge needle flickers rapidly at idle. What does that suggest? 1) A valve that is not sealing 2) A full fuel tank 3) A new air filter 4) A charged battery",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_vacuum",
            "expected": 1,
            "hint": "Each leak past a valve makes the needle jump, so a rapidly flickering needle points at a sealing problem. Fuel level (2), a new filter (3), and battery charge (4) do not affect the vacuum needle."
          }
        ]
      },
      {
        "label": "DECISION — In the car on the next lift, two neighboring cylinders both read low while the others read normally. What is the most likely cause? 1) A burned intake valve in one cylinder 2) A head gasket failure between those two cylinders 3) A worn ring in the far cylinder 4) A weak battery",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_neighbors",
            "expected": 2,
            "hint": "Neighbors share one head gasket; a failure between them lets pressure leak from one to the other, lowering both. One valve (1) would lower one cylinder, a far ring (3) cannot affect these two, and a weak battery (4) would lower all cylinders."
          }
        ]
      },
      {
        "label": "COMPUTED — Add the three healthy cylinders together: 150 + 148 + 149. What is the total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_healthy_sum",
            "expected": 447,
            "hint": "150 + 148 + 149 = 447. The three healthy cylinders agree closely with each other — the story is the one cylinder that does not."
          }
        ]
      },
      {
        "label": "DECISION — What is the right next step for the customer's car? 1) Replace the spark plugs and coils and send it out 2) Tell the customer the rings or valves need internal repair: measure the cylinder, and price a rebuild or a replacement engine — do not replace ignition parts for a sealing fault 3) Add thicker oil and hope the smoke stops 4) Replace the turbocharger",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cl_next",
            "expected": 2,
            "hint": "The tests name a sealing fault in cylinder 3 — the exhaust valve is leaking, and the blue smoke points at oil burning too. Ignition parts (1) cannot fix a cylinder that does not seal, thicker oil (3) does not repair a burned valve, and there is no turbocharger fault here (4). The honest next step is internal repair, priced after measuring."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "compression-leakdown-diagnosis.csv",
    "csv": "Decision point,Your call\n\"SAFETY CALL — Before you run the compression test, what must you do first? 1) Crank the engine with the spark plugs still in and the fuel on 2) Let the hot engine cool enough to work on safely, wear glasses and gloves, and disable the fuel and ignition so the engine cannot start while cranking 3) Remove the radiator cap while the engine is hot to check the coolant 4) Start the engine and hold the gauge in the plug hole\",\n\"COMPUTED — The compression readings are 150, 148, 112, and 149. What is the highest reading? (Enter the number.)\",\n\"COMPUTED — What is the lowest reading? (Enter the number.)\",\n\"COMPUTED — The spread is the highest reading minus the lowest reading. What is the spread? (Enter the number.)\",\n\"COMPUTED — The spread of 38 is about what percentage of the highest reading of 150? (Enter the whole number, rounded.)\",\n\"DECISION — Which cylinder is the suspect? 1) Cylinder 1 2) Cylinder 2 3) Cylinder 3 4) Cylinder 4\",\n\"DECISION — The leakdown test on cylinder 3 shows 38 percent leaking, and the air hisses from the tailpipe. Which part has failed? 1) The intake valve 2) The exhaust valve 3) The piston rings 4) The head gasket\",\n\"COMPUTED — The leakdown test feeds 100 units of air into cylinder 3 and 38 units leak out. How many units stay in the cylinder? (Enter the number.)\",\n\"DECISION — The vacuum gauge needle flickers rapidly at idle. What does that suggest? 1) A valve that is not sealing 2) A full fuel tank 3) A new air filter 4) A charged battery\",\n\"DECISION — In the car on the next lift, two neighboring cylinders both read low while the others read normally. What is the most likely cause? 1) A burned intake valve in one cylinder 2) A head gasket failure between those two cylinders 3) A worn ring in the far cylinder 4) A weak battery\",\n\"COMPUTED — Add the three healthy cylinders together: 150 + 148 + 149. What is the total? (Enter the number.)\",\n\"DECISION — What is the right next step for the customer's car? 1) Replace the spark plugs and coils and send it out 2) Tell the customer the rings or valves need internal repair: measure the cylinder, and price a rebuild or a replacement engine — do not replace ignition parts for a sealing fault 3) Add thicker oil and hope the smoke stops 4) Replace the turbocharger\",\n"
  },
  {
    "id": "cooling-system-diagnosis",
    "title": "Cooling-System Diagnosis",
    "introHtml": "<p><strong>Job ticket #A1-102 — Four-cylinder car, overheats in traffic, no heat from the vents.</strong> Customer: a driver who says the temperature gauge climbs in slow traffic and the heater blows cold air. Your task: diagnose the cooling system from the symptoms and the hose temperatures. Read the case in the task, then answer each decision row.</p><p><strong>Worked example first — a healthy cooling system (completed for you).</strong> A different car is checked the same way: its cooling system holds 8 quarts in total, filled with a 50-50 mix of coolant and water. Step 1: half of 8 quarts is 4 quarts of coolant and 4 quarts of water. Step 2: the upper hose is hot and the lower hose is warm — coolant is circulating and the radiator is shedding heat. Step 3: the heater blows hot air. That is a healthy system. Now diagnose the customer's car below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any cooling-system work: never open the radiator cap or a cooling-system hose while the engine is hot — the system is under pressure and hot coolant can spray out and cause severe burns. Let the engine cool completely, wear safety glasses and gloves, and keep your hands clear of the cooling fan, which can start on its own even with the engine off. Check the coolant level only when the system is cold.</p><p><strong>The case, as you find it:</strong> (1) The cooling system holds 8 quarts in total, filled with a 50-50 mix of coolant and water. (2) The reservoir is low and 3 quarts of coolant mix are missing from the system. (3) The upper radiator hose is hot and the lower radiator hose is cold. (4) The heater blows cold air even though the temperature gauge reads in its normal range. (5) On a later check the exhaust blows white smoke that smells sweet, and the coolant level keeps dropping with no puddle under the car. (6) The cooling fan does not run when the engine gets hot in traffic. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — The engine is hot and the customer wants you to open the radiator cap to check the coolant. What do you do? 1) Open the cap slowly — it is fine if you are careful 2) Do not open it: let the engine cool completely first, because the pressurized system can spray boiling coolant and cause severe burns 3) Open it with a rag over it 4) Add cold water to the hot, empty system right away",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cs_safety",
            "expected": 2,
            "hint": "Step 0 governs: a hot cooling system is under pressure, and releasing it lets the coolant flash-boil and spray. A rag (3) does not make it safe, and adding cold water to a hot, empty engine (4) can crack the metal. Wait until it is cool."
          }
        ]
      },
      {
        "label": "COMPUTED — The system holds 8 quarts in total with a 50-50 mix of coolant and water. How many quarts of coolant does it hold? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cs_coolant_qty",
            "expected": 4,
            "hint": "Half of 8 quarts is 4 quarts of coolant and 4 quarts of water. A 50-50 mix means half the total is coolant."
          }
        ]
      },
      {
        "label": "COMPUTED — The system holds 8 quarts and 3 quarts of mix are missing. How many quarts are still in the system? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cs_remaining",
            "expected": 5,
            "hint": "8 − 3 = 5 quarts still in the system. Coolant does not get used up — the missing 3 quarts went somewhere, and the leak must be found."
          }
        ]
      },
      {
        "label": "DECISION — The upper hose is hot and the lower hose is cold. What is the most likely problem? 1) The cooling fan has failed 2) No coolant circulation — the thermostat is stuck closed or the water pump is not moving coolant 3) A leaking heater core 4) A loose oil cap",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cs_hoses",
            "expected": 2,
            "hint": "A cold lower hose means coolant is not flowing through the radiator at all — hot coolant leaves the engine but nothing comes back. A failed fan (1) still lets coolant circulate, so both hoses would be hot. A heater-core leak (3) loses coolant but does not stop circulation. The oil cap (4) has nothing to do with coolant flow."
          }
        ]
      },
      {
        "label": "DECISION — The heater blows cold air but the temperature gauge reads normal. What is the most likely cause? 1) A stuck-open thermostat 2) Low coolant or trapped air blocking flow to the heater core 3) A failed water pump 4) A broken radiator",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cs_no_heat",
            "expected": 2,
            "hint": "The engine reaches temperature, so the thermostat works — the heater core is simply not getting hot coolant, because the level is low or air is trapped in the system. A stuck-open thermostat (1) would show a low gauge, a failed pump (3) would overheat the engine, and a broken radiator (4) would leak or overheat it."
          }
        ]
      },
      {
        "label": "DECISION — The exhaust later blows white smoke that smells sweet, and the coolant level keeps dropping with no puddle. What is the most likely cause? 1) The oil is burning 2) Coolant is leaking into a cylinder through a failed head gasket and burning 3) The fuel mixture is too rich 4) The air filter is dirty",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cs_white_smoke",
            "expected": 2,
            "hint": "Sweet-smelling white smoke is coolant burning in a cylinder, and no puddle appears because the coolant leaves through the exhaust. Oil burning (1) makes blue smoke, a rich mixture (3) makes black smoke, and a dirty filter (4) causes poor running, not white smoke."
          }
        ]
      },
      {
        "label": "DECISION — The cooling fan does not run when the engine gets hot in traffic. What should you check first? 1) The fan fuse, relay, and temperature sensor 2) The spark plugs 3) The oil filter 4) The tire pressure",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cs_fan",
            "expected": 1,
            "hint": "A fan that never runs is usually a fuse, a relay, or the temperature sensor that switches it on — all cheap checks before condemning the fan motor. Spark plugs (2), the oil filter (3), and tire pressure (4) have nothing to do with the fan."
          }
        ]
      },
      {
        "label": "DECISION — A thermostat stuck open would cause: 1) Overheating 2) Slow warm-up, poor heater output, and wasted fuel 3) No oil pressure 4) A dead battery",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cs_stuck_open",
            "expected": 2,
            "hint": "With the thermostat open from the start, coolant flows to the radiator immediately, so the engine warms up slowly and may never reach operating temperature. Overheating (1) is a thermostat stuck closed. The thermostat does not affect oil pressure (3) or the battery (4)."
          }
        ]
      },
      {
        "label": "COMPUTED — You top up the system with 3 quarts of mix to replace what was lost. The system holds 8 quarts. How many quarts of mix were in the system before you topped it up? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cs_before_topup",
            "expected": 5,
            "hint": "8 − 3 = 5 quarts were in the system before the top-up. The top-up restores the level — but the leak that lost the 3 quarts still has to be found."
          }
        ]
      },
      {
        "label": "DECISION — After the repair, the customer asks if the coolant can just be topped off every week instead of fixing the leak. What do you tell them? 1) Yes, topping off is a fine long-term fix 2) No — coolant does not get used up, so a low level means a leak that will get worse, and a leak can overheat and destroy the engine 3) Yes, but only with plain water 4) No, because the coolant is too expensive",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cs_topoff",
            "expected": 2,
            "hint": "Coolant does not get used up — a low level means a leak, and leaks get worse, not better. A leak left alone can overheat the engine and destroy it. Topping off (1) hides the fault, plain water (3) dilutes the coolant's protection, and cost (4) is not the reason."
          }
        ]
      },
      {
        "label": "COMPUTED — The system needs a 50-50 mix. You have 4 quarts of coolant. How many quarts of water do you add to make a full 8-quart fill? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cs_water",
            "expected": 4,
            "hint": "A 50-50 mix of 8 quarts is 4 quarts of coolant and 4 quarts of water. With 4 quarts of coolant, you add 4 quarts of water."
          }
        ]
      },
      {
        "label": "DECISION — The repair is done and the system is full. What is the right way to close the job? 1) Send the car out without checking anything 2) Run the engine to operating temperature, check that both hoses warm up, the heater blows hot, the fan runs, and there are no leaks — then record what was found and fixed 3) Tell the customer to watch the gauge and hope 4) Leave the radiator cap loose so pressure cannot build",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cs_close",
            "expected": 2,
            "hint": "Close the job by proving the repair: both hoses warm, heater hot, fan running, no leaks, and a written record. Sending it out unchecked (1), hoping (3), or leaving the cap loose (4) all leave the customer at risk."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "cooling-system-diagnosis.csv",
    "csv": "Decision point,Your call\n\"SAFETY CALL — The engine is hot and the customer wants you to open the radiator cap to check the coolant. What do you do? 1) Open the cap slowly — it is fine if you are careful 2) Do not open it: let the engine cool completely first, because the pressurized system can spray boiling coolant and cause severe burns 3) Open it with a rag over it 4) Add cold water to the hot, empty system right away\",\n\"COMPUTED — The system holds 8 quarts in total with a 50-50 mix of coolant and water. How many quarts of coolant does it hold? (Enter the number.)\",\n\"COMPUTED — The system holds 8 quarts and 3 quarts of mix are missing. How many quarts are still in the system? (Enter the number.)\",\n\"DECISION — The upper hose is hot and the lower hose is cold. What is the most likely problem? 1) The cooling fan has failed 2) No coolant circulation — the thermostat is stuck closed or the water pump is not moving coolant 3) A leaking heater core 4) A loose oil cap\",\n\"DECISION — The heater blows cold air but the temperature gauge reads normal. What is the most likely cause? 1) A stuck-open thermostat 2) Low coolant or trapped air blocking flow to the heater core 3) A failed water pump 4) A broken radiator\",\n\"DECISION — The exhaust later blows white smoke that smells sweet, and the coolant level keeps dropping with no puddle. What is the most likely cause? 1) The oil is burning 2) Coolant is leaking into a cylinder through a failed head gasket and burning 3) The fuel mixture is too rich 4) The air filter is dirty\",\n\"DECISION — The cooling fan does not run when the engine gets hot in traffic. What should you check first? 1) The fan fuse, relay, and temperature sensor 2) The spark plugs 3) The oil filter 4) The tire pressure\",\n\"DECISION — A thermostat stuck open would cause: 1) Overheating 2) Slow warm-up, poor heater output, and wasted fuel 3) No oil pressure 4) A dead battery\",\n\"COMPUTED — You top up the system with 3 quarts of mix to replace what was lost. The system holds 8 quarts. How many quarts of mix were in the system before you topped it up? (Enter the number.)\",\n\"DECISION — After the repair, the customer asks if the coolant can just be topped off every week instead of fixing the leak. What do you tell them? 1) Yes, topping off is a fine long-term fix 2) No — coolant does not get used up, so a low level means a leak that will get worse, and a leak can overheat and destroy the engine 3) Yes, but only with plain water 4) No, because the coolant is too expensive\",\n\"COMPUTED — The system needs a 50-50 mix. You have 4 quarts of coolant. How many quarts of water do you add to make a full 8-quart fill? (Enter the number.)\",\n\"DECISION — The repair is done and the system is full. What is the right way to close the job? 1) Send the car out without checking anything 2) Run the engine to operating temperature, check that both hoses warm up, the heater blows hot, the fan runs, and there are no leaks — then record what was found and fixed 3) Tell the customer to watch the gauge and hope 4) Leave the radiator cap loose so pressure cannot build\",\n"
  }
];
