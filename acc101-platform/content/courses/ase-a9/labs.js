// ase-a9 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "diesel-smoke-diagnosis",
    "title": "Diesel Smoke Diagnosis — Read the Color, Name the First Test",
    "introHtml": "<p><strong>Job ticket #A9-101 — Four trucks, four smoke complaints, one morning in the shop.</strong> Customer: a delivery fleet. The trucks: Truck A blows black smoke under load; Truck B blows blue smoke on startup that fades as it warms; Truck C blows thick white smoke that never clears and is losing coolant; Truck D makes thin white vapor on cold mornings that fades in minutes. Your task: read each smoke color, name the first test, and work the hard-start order — without replacing parts on a guess. Read the case in the task, then answer each decision row.</p><p><strong>Worked example first — Truck E (completed for you).</strong> Truck E blows black smoke at idle and under load. Step 1: the color says incomplete combustion — too much fuel or too little air. Step 2: check the air side first — the air filter is clogged solid with dust. Step 3: fit a new filter, and the smoke clears on the test drive. Notice the pattern you will repeat below: color first, cheapest and most common cause first, test before replacing, verify with a drive.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any diagnosis on a running diesel: keep hands, tools, and clothing clear of the fan, belts, and hot exhaust — the exhaust during a regeneration runs hot enough to burn skin and ignite debris underneath the truck. Never feel along a high-pressure fuel line with your hand: fuel pressure is high enough to inject fuel through skin, so check for leaks with paper held at a distance and let the system depressurize before opening any high-pressure fitting. Work in fresh air — diesel exhaust must never be breathed in a closed shop. The first scored row is the safety call.</p><p><strong>The case, truck by truck:</strong> (1) Truck A: black smoke under load, air filter recently changed, fuel filter overdue. (2) Truck B: blue smoke on startup that fades as it warms, oil level dropping slowly. (3) Truck C: thick white smoke that continues when fully warm, coolant level falling, oil looking milky. (4) Truck D: thin white vapor on cold mornings, gone within minutes, no fuel smell, no coolant loss. <strong>Scenario numbers (given here, use them for the computed rows):</strong> the shop's soot-load scale runs 0 to 100 and the regeneration request point is 70; Truck A reads 82. A glow plug job needs 6 plugs and the shelf holds 4. An oil change takes 10 units of oil; the drain pan from Truck B shows 11 units came out. <strong>The hard-start order:</strong> Step 1 — cranking speed; Step 2 — glow system; Step 3 — fuel (filter, air, rail or oil pressure); Step 4 — compression. For each row, enter the option number, the step number, or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — You are about to check a running diesel for a suspected high-pressure fuel leak. What do you do? 1) Feel along the high-pressure line with your bare hand 2) Hold paper at a distance to find the leak, and let the system depressurize before opening any fitting 3) Open a high-pressure fitting while the engine runs to see the spray 4) Press your ear to the line to listen for the leak",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "smoke_safety",
            "expected": 2,
            "hint": "Step 0 governs: high-pressure fuel can inject through skin. Paper at a distance finds the leak safely (2). A hand (1) or an ear (4) near the line risks a serious injection injury, and opening a fitting on a running engine (3) sprays fuel under pressure."
          }
        ]
      },
      {
        "label": "DECISION — Truck A blows black smoke under load. What is the first check? 1) Replace the injectors 2) Check the air side — air filter, intake hoses, intercooler pipes, and boost 3) Replace the glow plugs 4) Drain the DEF tank",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "smoke_black",
            "expected": 2,
            "hint": "Black smoke means incomplete combustion — too much fuel or too little air — and the air side is the cheapest, fastest, and most common cause. Injectors (1) come after the air side is proven good, glow plugs (3) affect cold starting, and DEF (4) is unrelated to smoke color."
          }
        ]
      },
      {
        "label": "DECISION — Truck B blows blue smoke on startup that fades as it warms, and the oil level is dropping slowly. Most likely cause? 1) Worn valve seals leaking oil when cold 2) A clogged air filter 3) A dead glow plug 4) A failed head gasket",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "smoke_blue",
            "expected": 1,
            "hint": "Blue smoke is burning oil. Smoke at startup that fades with warmth points to valve seals, which leak when cold and seal better as parts expand. A clogged filter (2) makes black smoke, a dead glow plug (3) makes white smoke, and a failed gasket (4) makes persistent white smoke with coolant loss."
          }
        ]
      },
      {
        "label": "DECISION — Truck C blows thick white smoke that continues when fully warm, coolant level is falling, and the oil looks milky. What is happening? 1) Normal condensation 2) Cold-start unburned fuel 3) Coolant leaking into a cylinder — gasket, head, or block 4) A boost leak",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "smoke_white",
            "expected": 3,
            "hint": "Persistent white smoke plus coolant loss plus milky oil means coolant is leaking into a cylinder. Condensation (1) fades with warmth, cold-start fuel smoke (2) clears as the engine warms, and a boost leak (4) makes black smoke, not white."
          }
        ]
      },
      {
        "label": "DECISION — Truck D makes thin white vapor on cold mornings that is gone within minutes, with no fuel smell and no coolant loss. Fault or normal? 1) Normal condensation vapor 2) A failed head gasket 3) A dead injector 4) A clogged DPF",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "smoke_vapor",
            "expected": 1,
            "hint": "Thin white vapor that fades as the exhaust warms, with no smell and no fluid loss, is normal condensation. A failed gasket (2) makes persistent thick smoke with coolant loss, a dead injector (3) makes persistent smoke with rough running, and a clogged DPF (4) sets a warning light."
          }
        ]
      },
      {
        "label": "ORDER — A hard-start complaint: check rail pressure during cranking. Which step of the hard-start order is this? 1) Step 1 — cranking speed 2) Step 2 — glow system 3) Step 3 — fuel 4) Step 4 — compression",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "smoke_ord_fuel",
            "expected": 3,
            "hint": "The order is 1 cranking speed, 2 glow, 3 fuel, 4 compression. Rail pressure during cranking is a fuel-system check, so it is step 3."
          }
        ]
      },
      {
        "label": "COMPUTED — The shop's soot-load scale runs 0 to 100 and the regeneration request point is 70. Truck A reads 82. How many points above the request point is the soot load? (Enter the number.)",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "smoke_soot_over",
            "expected": 12,
            "hint": "82 − 70 = 12 points above the request point. The truck is overdue for a regeneration — and with black smoke under load, the engine is making soot faster than the filter can clear it."
          }
        ]
      },
      {
        "label": "COMPUTED — A glow plug job needs 6 plugs and the shelf holds 4. How many plugs must be ordered? (Enter the number.)",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "smoke_plugs_order",
            "expected": 2,
            "hint": "6 − 4 = 2 plugs to order. And remember: test every plug with a meter — a normal-looking lamp does not prove each plug heats."
          }
        ]
      },
      {
        "label": "COMPUTED — An oil change takes 10 units of oil. The drain pan from Truck B shows 11 units came out. How many extra units are in the oil? (Enter the number.)",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "smoke_oil_extra",
            "expected": 1,
            "hint": "11 − 10 = 1 extra unit in the oil. Extra volume in the oil means something is adding to it — on a diesel, fuel leaking past an injector is the usual suspect, and it thins the oil's protection."
          }
        ]
      },
      {
        "label": "DECISION — White smoke clears as the engine warms, with no coolant loss and no milky oil. Most likely cause? 1) Coolant leaking into a cylinder 2) Cold-start unburned fuel — glow, compression, or injector timing 3) A clogged DPF 4) An empty DEF tank",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "smoke_white_warm",
            "expected": 2,
            "hint": "Smoke that clears with warmth points to cold-start fuel — glow, compression, or timing — not coolant. Coolant (1) would persist when warm and drop the coolant level. A clogged DPF (3) sets a warning light, and DEF (4) is an SCR matter."
          }
        ]
      },
      {
        "label": "DECISION — Truck A has black smoke and lost power since a service visit, and the air filter is clean. Next most likely air-side cause? 1) A boost leak — a loose intercooler clamp or cracked pipe disturbed during service 2) A dead glow plug 3) An empty DEF tank 4) A failed thermostat",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "smoke_boost",
            "expected": 1,
            "hint": "A recent service is when a pipe gets left loose. Boosted air escaping means the engine is over-fueled for the air it actually gets — black smoke and lost power. Glow plugs (2) affect cold starting, DEF (3) is an exhaust fluid, and a thermostat (4) affects temperature, not smoke."
          }
        ]
      },
      {
        "label": "DECISION — All four trucks are diagnosed and repaired. What is the right way to close the job? 1) Send the trucks out and say nothing 2) Verify each repair with a drive under the original complaint's conditions and record the findings 3) Tell only the fleet manager in private 4) Wait for the trucks to come back",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "smoke_close",
            "expected": 2,
            "hint": "A diagnosis closes with a verification drive under the original conditions and a written record (2) — so the fix is proven and the next technician has a baseline. Silence (1) and private telling (3) leave the repair unproven, and waiting (4) is not a plan."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "diesel-smoke-diagnosis.csv",
    "csv": "Decision point,Your call\n\"SAFETY CALL — You are about to check a running diesel for a suspected high-pressure fuel leak. What do you do? 1) Feel along the high-pressure line with your bare hand 2) Hold paper at a distance to find the leak, and let the system depressurize before opening any fitting 3) Open a high-pressure fitting while the engine runs to see the spray 4) Press your ear to the line to listen for the leak\",\n\"DECISION — Truck A blows black smoke under load. What is the first check? 1) Replace the injectors 2) Check the air side — air filter, intake hoses, intercooler pipes, and boost 3) Replace the glow plugs 4) Drain the DEF tank\",\n\"DECISION — Truck B blows blue smoke on startup that fades as it warms, and the oil level is dropping slowly. Most likely cause? 1) Worn valve seals leaking oil when cold 2) A clogged air filter 3) A dead glow plug 4) A failed head gasket\",\n\"DECISION — Truck C blows thick white smoke that continues when fully warm, coolant level is falling, and the oil looks milky. What is happening? 1) Normal condensation 2) Cold-start unburned fuel 3) Coolant leaking into a cylinder — gasket, head, or block 4) A boost leak\",\n\"DECISION — Truck D makes thin white vapor on cold mornings that is gone within minutes, with no fuel smell and no coolant loss. Fault or normal? 1) Normal condensation vapor 2) A failed head gasket 3) A dead injector 4) A clogged DPF\",\n\"ORDER — A hard-start complaint: check rail pressure during cranking. Which step of the hard-start order is this? 1) Step 1 — cranking speed 2) Step 2 — glow system 3) Step 3 — fuel 4) Step 4 — compression\",\n\"COMPUTED — The shop's soot-load scale runs 0 to 100 and the regeneration request point is 70. Truck A reads 82. How many points above the request point is the soot load? (Enter the number.)\",\n\"COMPUTED — A glow plug job needs 6 plugs and the shelf holds 4. How many plugs must be ordered? (Enter the number.)\",\n\"COMPUTED — An oil change takes 10 units of oil. The drain pan from Truck B shows 11 units came out. How many extra units are in the oil? (Enter the number.)\",\n\"DECISION — White smoke clears as the engine warms, with no coolant loss and no milky oil. Most likely cause? 1) Coolant leaking into a cylinder 2) Cold-start unburned fuel — glow, compression, or injector timing 3) A clogged DPF 4) An empty DEF tank\",\n\"DECISION — Truck A has black smoke and lost power since a service visit, and the air filter is clean. Next most likely air-side cause? 1) A boost leak — a loose intercooler clamp or cracked pipe disturbed during service 2) A dead glow plug 3) An empty DEF tank 4) A failed thermostat\",\n\"DECISION — All four trucks are diagnosed and repaired. What is the right way to close the job? 1) Send the trucks out and say nothing 2) Verify each repair with a drive under the original complaint's conditions and record the findings 3) Tell only the fleet manager in private 4) Wait for the trucks to come back\",\n"
  },
  {
    "id": "dpf-scr-numbers",
    "title": "DPF/SCR Numbers Lab — Read the Aftertreatment Data",
    "introHtml": "<p><strong>Job ticket #A9-102 — Two trucks with aftertreatment warnings, one scan tool.</strong> Customer: the same delivery fleet. Truck F: DPF warning light, soot load high, only short trips. Truck G: SCR warning, upstream NOx sensor reading high, downstream sensor reading nearly as high. Your task: work the aftertreatment numbers the scan tool gives you, decide what each reading means, and name the next test — without replacing the expensive parts first. Read the case in the task, then answer each decision row.</p><p><strong>Worked example first — Truck H (completed for you).</strong> Truck H shows a soot load of 60 on the shop's 0-to-100 scale, and the regeneration request point is 70. Step 1: 60 is below 70, so no regeneration is due yet. Step 2: the truck gets regular highway drives, so passive regeneration is keeping up. Step 3: no repair — just record the reading and re-check at the next service. Notice the pattern you will repeat below: compare the reading with the point that matters, then decide.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any aftertreatment work: the exhaust system runs extremely hot during a regeneration — hot enough to burn skin on contact and ignite dry grass or debris underneath a parked truck. Never work under a truck while a regeneration is running, never park a regenerating truck over flammable material, and let the system cool before touching any exhaust part. DEF is a separate fluid in a separate tank — never put DEF in the fuel tank and never put fuel in the DEF tank. The first scored row is the safety call.</p><p><strong>The case, truck by truck, with the scenario numbers (use them for the computed rows):</strong> the shop's soot-load scale runs 0 to 100 and the regeneration request point is 70. Truck F reads 82 before its parked regeneration and 14 after it. The DEF tank holds 20 units and Truck G's tank currently holds 6. A dosing test runs 5 cycles and each cycle uses 2 units. A DPF's ash capacity is 100 units and Truck F's filter already holds 60. After a parked regeneration, a second truck's soot load falls from 90 to 30. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — A truck is in the middle of a parked regeneration in the shop yard, and dry leaves have blown under it. What do you do? 1) Leave it — the truck is parked and safe 2) Move the truck to a clear, paved area and keep flammable material away until the exhaust cools 3) Hose the exhaust down with cold water 4) Open the hood to cool it faster",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "dpf_safety",
            "expected": 2,
            "hint": "Step 0 governs: a regenerating exhaust runs hot enough to ignite leaves and debris underneath the truck. Move it to clear pavement (2). Leaving it (1) risks a fire, cold water on a hot exhaust (3) can crack parts, and opening the hood (4) does not cool the exhaust underneath."
          }
        ]
      },
      {
        "label": "FRAMING DECISION — Step 0: What does the soot-load reading measure? 1) How full the DPF is with soot that regeneration can burn off 2) How much ash is in the filter 3) The DEF level 4) The engine oil level",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "dpf_framing",
            "expected": 1,
            "hint": "Soot load is how full the DPF is with trapped soot — the part regeneration burns off. Ash (2) is the mineral residue regeneration cannot remove, DEF (3) has its own level reading, and oil (4) is a separate system."
          }
        ]
      },
      {
        "label": "COMPUTED — Truck F reads a soot load of 82 and the regeneration request point is 70. How many points above the request point is the soot load? (Enter the number.)",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "dpf_soot_over",
            "expected": 12,
            "hint": "82 − 70 = 12 points above the request point. The truck is overdue for a regeneration — and with only short trips, its regenerations keep getting interrupted."
          }
        ]
      },
      {
        "label": "COMPUTED — The DEF tank holds 20 units and Truck G's tank currently holds 6. How many units are needed to fill it? (Enter the number.)",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "dpf_def_fill",
            "expected": 14,
            "hint": "20 − 6 = 14 units to fill the tank. A low DEF tank is always checked first on an SCR fault — the system cannot convert NOx without fluid to spray."
          }
        ]
      },
      {
        "label": "COMPUTED — Truck F's soot load falls from 82 to 14 after a parked regeneration. How many points of soot did the regeneration clear? (Enter the number.)",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "dpf_soot_cleared",
            "expected": 68,
            "hint": "82 − 14 = 68 points cleared. The regeneration worked — the filter was full of burnable soot, not ash, which is why the reading fell so far."
          }
        ]
      },
      {
        "label": "DECISION — Truck G's upstream NOx sensor reads high and the downstream sensor reads nearly as high. What does that mean? 1) The SCR system is converting NOx well 2) The SCR system is barely converting NOx 3) The DPF is clean 4) The glow plugs are working",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "dpf_nox",
            "expected": 2,
            "hint": "A small drop across the catalyst means little conversion is happening. Good conversion (1) would show a big drop. The NOx sensors do not report DPF condition (3) or glow plugs (4)."
          }
        ]
      },
      {
        "label": "COMPUTED — A dosing test runs 5 cycles and each cycle uses 2 units of DEF. How many units does the test use in total? (Enter the number.)",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "dpf_dosing_total",
            "expected": 10,
            "hint": "5 × 2 = 10 units in total. If the tank level does not fall by that amount during the test, the dosing injector is not spraying — a likely cause of the poor NOx conversion."
          }
        ]
      },
      {
        "label": "DECISION — Truck F has a DPF warning, black smoke, and lost power. Where is the root cause most likely? 1) The DPF itself 2) Upstream in the engine — an air or fuel fault making excess soot 3) The glow plugs 4) The DEF tank cap",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "dpf_upstream",
            "expected": 2,
            "hint": "Drivability symptoms alongside an emissions warning point upstream — the engine is making more soot than the filter can handle. The DPF (1) is overwhelmed, not broken. Glow plugs (3) affect cold starting, and the DEF cap (4) does not cause black smoke."
          }
        ]
      },
      {
        "label": "COMPUTED — A DPF's ash capacity is 100 units and Truck F's filter already holds 60. How many units of ash capacity remain? (Enter the number.)",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "dpf_ash_left",
            "expected": 40,
            "hint": "100 − 60 = 40 units of ash capacity remain. Ash never burns off in regeneration, so it only grows — an engine that burns oil fills that capacity far faster."
          }
        ]
      },
      {
        "label": "DECISION — The DPF keeps demanding regeneration even though the truck gets highway drives. What should be checked before condemning the filter? 1) Only the filter's age 2) Whether the DOC makes regeneration heat, whether the engine makes excess soot, and whether the differential pressure sensor reads correctly 3) The starter motor 4) The glow plug relay",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "dpf_wont_regen",
            "expected": 2,
            "hint": "With the driving pattern ruled out, the causes are DOC heat, excess soot from upstream, or a lying differential pressure sensor — all cheaper than a filter. Age alone (1) proves nothing, and the starter (3) and glow relay (4) are unrelated to regeneration."
          }
        ]
      },
      {
        "label": "COMPUTED — A second truck's soot load falls from 90 to 30 after a parked regeneration. By how many points did it fall? (Enter the number.)",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "dpf_second_fall",
            "expected": 60,
            "hint": "90 − 30 = 60 points. A big fall means the filter was full of burnable soot and the regeneration completed — compare it with Truck F's fall of 68 and you can see both filters responded the same way."
          }
        ]
      },
      {
        "label": "DECISION — Both trucks are repaired. What is the right way to close the job? 1) Send them out and say nothing 2) Verify with a highway drive, record the soot load and NOx readings, and note what was ruled out 3) Tell only the fleet manager in private 4) Wait for the warnings to come back",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "dpf_close",
            "expected": 2,
            "hint": "Close with a verification drive under real conditions and a written record of the readings and what was ruled out (2) — so the fix is proven and the next technician has a baseline. Silence (1) and private telling (3) leave the repair unproven, and waiting (4) is not a plan."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "dpf-scr-numbers.csv",
    "csv": "Decision point,Your call\n\"SAFETY CALL — A truck is in the middle of a parked regeneration in the shop yard, and dry leaves have blown under it. What do you do? 1) Leave it — the truck is parked and safe 2) Move the truck to a clear, paved area and keep flammable material away until the exhaust cools 3) Hose the exhaust down with cold water 4) Open the hood to cool it faster\",\n\"FRAMING DECISION — Step 0: What does the soot-load reading measure? 1) How full the DPF is with soot that regeneration can burn off 2) How much ash is in the filter 3) The DEF level 4) The engine oil level\",\n\"COMPUTED — Truck F reads a soot load of 82 and the regeneration request point is 70. How many points above the request point is the soot load? (Enter the number.)\",\n\"COMPUTED — The DEF tank holds 20 units and Truck G's tank currently holds 6. How many units are needed to fill it? (Enter the number.)\",\n\"COMPUTED — Truck F's soot load falls from 82 to 14 after a parked regeneration. How many points of soot did the regeneration clear? (Enter the number.)\",\n\"DECISION — Truck G's upstream NOx sensor reads high and the downstream sensor reads nearly as high. What does that mean? 1) The SCR system is converting NOx well 2) The SCR system is barely converting NOx 3) The DPF is clean 4) The glow plugs are working\",\n\"COMPUTED — A dosing test runs 5 cycles and each cycle uses 2 units of DEF. How many units does the test use in total? (Enter the number.)\",\n\"DECISION — Truck F has a DPF warning, black smoke, and lost power. Where is the root cause most likely? 1) The DPF itself 2) Upstream in the engine — an air or fuel fault making excess soot 3) The glow plugs 4) The DEF tank cap\",\n\"COMPUTED — A DPF's ash capacity is 100 units and Truck F's filter already holds 60. How many units of ash capacity remain? (Enter the number.)\",\n\"DECISION — The DPF keeps demanding regeneration even though the truck gets highway drives. What should be checked before condemning the filter? 1) Only the filter's age 2) Whether the DOC makes regeneration heat, whether the engine makes excess soot, and whether the differential pressure sensor reads correctly 3) The starter motor 4) The glow plug relay\",\n\"COMPUTED — A second truck's soot load falls from 90 to 30 after a parked regeneration. By how many points did it fall? (Enter the number.)\",\n\"DECISION — Both trucks are repaired. What is the right way to close the job? 1) Send them out and say nothing 2) Verify with a highway drive, record the soot load and NOx readings, and note what was ruled out 3) Tell only the fleet manager in private 4) Wait for the warnings to come back\",\n"
  }
];
