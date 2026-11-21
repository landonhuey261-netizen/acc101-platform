// con110 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "pre-operation-inspection-scenario",
    "title": "Pre-Operation Inspection Scenario",
    "introHtml": "<p><strong>Job ticket #3011 — Morning inspection, dozer and excavator, new housing site.</strong> Customer: a home builder; the site is a graded lot with a trench open for a sewer line. Machines on site: a dozer and an excavator, both used yesterday. Your task: do the pre-operation inspection on both machines before either engine starts, spot the defects, and make the right calls — in the right order. Read the site description in the task, then answer each decision row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=pZ6oeckBb3M\" target=\"_blank\" rel=\"noopener\">Quick Tips - Pre Start Checklist</a> — a Caterpillar technician runs a mini excavator pre-start checklist: walkaround, fluids, and cab checks. Use it as the pattern for the inspections below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any inspection: PPE on (hard hat, safety glasses, gloves, boots), check the site for overhead work and open edges, and know where the first-aid kit and the nearest extinguisher are. Never enter a trench, a confined space, or an area under a suspended load. Inspections are done with the engines OFF and the machines cold, on level ground.</p><p><strong>The site, as you find it at 7:00 a.m.:</strong> (1) The dozer has a hydraulic hose wet with fluid at a fitting, and a second hose with a cracked cover. (2) The excavator's track has a cracked link and mud packed around the rollers. (3) The excavator's backup alarm does not sound when tested. (4) The dozer's seat belt buckle is broken. (5) The excavator's bucket has two worn teeth and one missing tooth. (6) The dozer's coolant level is low and there is green fluid on the ground under it. (7) The excavator's fire extinguisher is present but past its inspection date. (8) The dozer's blade cutting edge is worn and rounded.</p><p><strong>The correct inspection order (for the order questions):</strong> Step 1 — Ground check: leaks and work area, engines off. Step 2 — Undercarriage: tracks, tires, rollers. Step 3 — Engine and hydraulics: fluids and hoses. Step 4 — Attachment: teeth, pins, coupler, blade edge. Step 5 — Cab: belt, horn, alarm, lights, extinguisher. Step 6 — Start, warm up, and test controls in the open. For each row, enter the option number, the step number, or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — The dozer has a hydraulic hose wet with fluid and a second hose with a cracked cover. What do you do first? 1) Start it gently and see if it holds 2) Tag the dozer out: do not start it for work, report both hoses in writing 3) Wipe the wet hose clean and carry on 4) Use it only for light grading",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pi_hose",
            "expected": 2,
            "hint": "A wet hose is leaking and about to fail, and pressurized fluid can inject through skin. Wiping it (3) or light work (4) does not fix it, and starting it (1) risks a burst — tag out and report."
          }
        ]
      },
      {
        "label": "ORDER — 'Check the ground under and around the machine for leaks and hazards, engines off.' Which step of the inspection order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pi_ord_ground",
            "expected": 1,
            "hint": "Order: 1 ground, 2 undercarriage, 3 engine/hydraulics, 4 attachment, 5 cab, 6 control test. The ground check is step 1."
          }
        ]
      },
      {
        "label": "ORDER — 'Check the attachment: teeth, pins, coupler, blade edge.' Which step of the inspection order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pi_ord_attach",
            "expected": 4,
            "hint": "Order: 1 ground, 2 undercarriage, 3 engine/hydraulics, 4 attachment, 5 cab, 6 control test. The attachment is step 4."
          }
        ]
      },
      {
        "label": "ORDER — 'Start, warm up, and test the controls in the open.' Which step of the inspection order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pi_ord_test",
            "expected": 6,
            "hint": "Order: 1 ground, 2 undercarriage, 3 engine/hydraulics, 4 attachment, 5 cab, 6 control test. The control test is last — step 6."
          }
        ]
      },
      {
        "label": "DECISION — The excavator's track has a cracked link and mud packed around the rollers. Correct call? 1) Run it gently — a crack is minor 2) Clean the mud out so damage is visible, tag it out, and report the cracked link 3) Grease the rollers and carry on 4) Run it only in reverse",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pi_track",
            "expected": 2,
            "hint": "A cracked link can throw the track under load, and mud hides damage. Clean it out, tag out, report (2). Gentle use (1, 4) still loads the cracked link, and grease (3) does not repair it."
          }
        ]
      },
      {
        "label": "DECISION — The excavator's backup alarm does not sound. Correct call? 1) Use a spotter instead of the alarm 2) Tag it out until the alarm is repaired 3) Use it only in daylight 4) Honk the horn when reversing instead",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pi_alarm",
            "expected": 2,
            "hint": "A dead backup alarm is an out-of-service defect — people behind the machine cannot hear it reversing. A spotter (1) helps but does not replace the alarm, daylight (3) does not warn anyone, and the horn (4) is not a backup alarm."
          }
        ]
      },
      {
        "label": "DECISION — The dozer's seat belt buckle is broken. Correct call? 1) Use it without the belt for one day 2) Tag it out until the belt is repaired — ROPS only protects a belted operator 3) Tie the belt with rope 4) Use it only on flat ground",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pi_belt",
            "expected": 2,
            "hint": "A broken belt defeats ROPS protection — the machine is out of service (2). One day without a belt (1) is one tip-over away from death, rope (3) is not a seat belt, and flat ground (4) does not prevent tip-overs."
          }
        ]
      },
      {
        "label": "DECISION — The excavator's bucket has two worn teeth and one missing tooth. Correct call? 1) Keep digging — teeth are cosmetic 2) Report it for the next service and replace the missing tooth before heavy digging 3) Remove the other teeth to match 4) Dig only soft soil",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pi_teeth",
            "expected": 2,
            "hint": "Worn and missing teeth cut poorly and overload the remaining teeth — report it and replace the missing tooth before heavy digging (2). Teeth are not cosmetic (1), removing more (3) makes it worse, and soft soil (4) does not fix the bucket."
          }
        ]
      },
      {
        "label": "DECISION — The dozer's coolant is low and green fluid is on the ground under it. Correct call? 1) Top it up and carry on 2) Report it and tag out if the leak is active — coolant does not vanish without a leak 3) Add water and ignore the puddle 4) Run it until the gauge alarms",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pi_coolant",
            "expected": 2,
            "hint": "Low coolant plus a puddle means an active leak — topping up (1) or adding water (3) hides it, and waiting for the gauge (4) risks a seized engine. Report it; the machine needs a mechanic."
          }
        ]
      },
      {
        "label": "DECISION — The excavator's fire extinguisher is present but past its inspection date. Correct call? 1) It is fine — it is still in the cab 2) Report it and replace it before work — an out-of-date extinguisher may not work 3) Move it to the trailer 4) Use it only for small fires",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pi_ext",
            "expected": 2,
            "hint": "An extinguisher past its date may not discharge — report and replace it before work (2). Presence alone (1) is not enough, the trailer (3) is too far in a fire, and size (4) does not fix an expired unit."
          }
        ]
      },
      {
        "label": "COMPUTED — The site has 8 defects listed. 4 of them tag a machine out of service (hoses, track link, backup alarm, seat belt) and 4 go on the repair list (teeth, coolant, extinguisher, blade edge). If both machines are tagged out, how many machines are available for work today? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pi_available",
            "expected": 0,
            "hint": "Both machines have tag-out defects — the dozer (hoses, belt) and the excavator (track, alarm) — so 0 machines are available until the tag-out defects are repaired."
          }
        ]
      },
      {
        "label": "DECISION — The inspection is done and both machines are tagged out. What is the right way to close the inspection? 1) Start work by hand and say nothing 2) Record every defect, what was tagged out, and who was told, and brief the crew before work starts 3) Tell only the foreman in private and remove the tags yourself later 4) Wait for the next operator to find the defects",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pi_close",
            "expected": 2,
            "hint": "An inspection closes with a written record and a crew briefing (2) — so the defects are known and no one starts a tagged-out machine. Silence (1), private telling (3), and waiting (4) all leave the crew at risk."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "grade-and-trenching-calculations",
    "title": "Grade and Trenching Calculations",
    "introHtml": "<p><strong>Job ticket #3012 — Grade and trench math, same housing site.</strong> Customer: the same home builder; the lot needs a building pad graded to a 2% drainage slope and a sewer trench dug to grade. Your task: do the grade math, the cut and fill volumes, and the trenching safety checks — on paper, before any machine moves. Read the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=cFYkeT0Yk6k\" target=\"_blank\" rel=\"noopener\">Excavations in Construction/Trenching</a> — excavation and trenching work tied to grades and levels. Watch how every cut is checked against a reference before the next pass.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any grade or trench work: PPE on, 811 locates confirmed and marks respected, overhead lines identified, the competent person named, and the trench protection plan (sloping, shoring, or shielding) agreed. Never enter an unprotected trench. Spoil stays at least 2 feet back from the edge, and egress is within 25 feet of any worker in the trench.</p><p><strong>The job:</strong> (1) The building pad is 40 feet by 30 feet and must slope 2% away from the foundation over 25 feet. (2) The sewer trench is 100 feet long, 3 feet wide, and 5 feet deep. (3) Soil swells about 25% when dug. (4) A truck holds 12 cubic yards. (5) The trench is 6 feet deep in Type C soil. (6) A grade rod target reading is 4.0 feet. (7) One cubic yard of soil weighs about 3,000 pounds.</p><p><strong>Rules to use:</strong> Slope % = rise ÷ run × 100. Volume (cubic feet) = length × width × depth; cubic yards = cubic feet ÷ 27. Loose volume = in-ground volume × 1.25. Inches = feet × 12. A rod reading above target means the ground is low (fill); below target means the ground is high (cut). For each row, enter the computed value or the option number asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "COMPUTED — The pad must slope 2% away from the foundation over 25 feet. How much fall is that, in inches? (Enter the number of inches.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gt_fall",
            "expected": 6,
            "hint": "Fall = 2% of 25 feet = 0.02 × 25 = 0.5 feet. 0.5 × 12 = 6 inches of fall from the foundation to the edge."
          }
        ]
      },
      {
        "label": "COMPUTED — The pad is 40 feet by 30 feet and must be cut an average of 1 foot deep. How many cubic yards is the cut? (Enter the number, rounded to the nearest whole yard.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gt_pad",
            "expected": 44,
            "hint": "Volume = 40 × 30 × 1 = 1,200 cubic feet. 1,200 ÷ 27 = about 44.4, rounded to 44 cubic yards."
          }
        ]
      },
      {
        "label": "COMPUTED — The trench is 100 feet long, 3 feet wide, and 5 feet deep. How many cubic yards in the ground? (Enter the number, rounded to the nearest whole yard.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gt_trench",
            "expected": 56,
            "hint": "Volume = 100 × 3 × 5 = 1,500 cubic feet. 1,500 ÷ 27 = about 55.6, rounded to 56 cubic yards in the ground."
          }
        ]
      },
      {
        "label": "COMPUTED — The trench holds about 56 cubic yards in the ground and soil swells 25% when dug. About how many loose cubic yards must be trucked? (Enter the number, rounded to the nearest whole yard.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gt_loose",
            "expected": 70,
            "hint": "Loose volume = 56 × 1.25 = 70 cubic yards. Swell is why the truck count is always higher than the trench math."
          }
        ]
      },
      {
        "label": "COMPUTED — About 70 loose cubic yards must be trucked, and a truck holds 12 cubic yards. How many truckloads is that? (Enter the number, rounded up.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gt_trucks",
            "expected": 6,
            "hint": "70 ÷ 12 = 5.83, and you cannot order part of a load — round up to 6 truckloads."
          }
        ]
      },
      {
        "label": "COMPUTED — A grade rod reading is 4.5 feet and the target reading is 4.0 feet. How many inches of fill are needed? (Enter the number of inches.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gt_fill",
            "expected": 6,
            "hint": "The reading is 0.5 feet above target, so the ground is 0.5 feet low — fill of 0.5 feet. 0.5 × 12 = 6 inches."
          }
        ]
      },
      {
        "label": "COMPUTED — A grade rod reading is 3.5 feet and the target reading is 4.0 feet. How many inches of cut are needed? (Enter the number of inches.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gt_cut",
            "expected": 6,
            "hint": "The reading is 0.5 feet below target, so the ground is 0.5 feet high — cut of 0.5 feet. 0.5 × 12 = 6 inches."
          }
        ]
      },
      {
        "label": "DECISION — The trench is 6 feet deep in Type C soil. What protection is required before anyone enters? 1) None — Type C is stable 2) Sloping, shoring, or shielding, chosen by the competent person 3) A ladder only 4) A hard hat only",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gt_protect",
            "expected": 2,
            "hint": "Any trench 5 feet or deeper needs sloping, shoring, or shielding before entry, and Type C is the least stable soil. A ladder (3) is egress, not wall protection, and a hard hat (4) does not hold a wall up."
          }
        ]
      },
      {
        "label": "COMPUTED — The trench is 120 feet long. Ladders must be within 25 feet of any worker. How many ladders are needed at minimum? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gt_ladders",
            "expected": 3,
            "hint": "Ladders at most 50 feet apart (25 feet each way): at about 0, 50, and 100 feet — at least 3 ladders for a 120-foot trench."
          }
        ]
      },
      {
        "label": "COMPUTED — One cubic yard of soil weighs about 3,000 pounds. A trench wall collapse drops about 2 cubic yards onto a worker. About how many pounds is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gt_weight",
            "expected": 6000,
            "hint": "2 × 3,000 = 6,000 pounds — about three tons — dropped in under a second. That is why a cave-in buries a worker before anyone can react."
          }
        ]
      },
      {
        "label": "DECISION — Spoil from the trench is piled 1 foot from the edge because the lot is tight. Correct call? 1) Leave it — the lot is tight 2) Move it at least 2 feet back, or haul it away 3) Pile it higher to save space 4) Push it into the trench",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gt_spoil",
            "expected": 2,
            "hint": "Spoil must stay at least 2 feet back — its weight is a surcharge load that can push the wall in. A tight lot is a reason to haul spoil away, not to pile it on the edge (1, 3); pushing it in (4) refills the trench."
          }
        ]
      },
      {
        "label": "COMPUTED — The pad cut is 44 cubic yards and the trench is 56 cubic yards in the ground. What is the total in-ground volume to be moved, in cubic yards? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gt_total",
            "expected": 100,
            "hint": "44 + 56 = 100 cubic yards in the ground. The loose trucked volume is higher because of swell — which is why the pad and trench are planned separately from the truck count."
          }
        ]
      }
    ],
    "passing": 70
  }
];
