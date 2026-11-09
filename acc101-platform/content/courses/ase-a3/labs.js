// ase-a3 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "clutch-diagnosis",
    "title": "Clutch Diagnosis",
    "introHtml": "<p><strong>Job ticket #A3-207 \u2014 Clutch complaints on a rear-wheel-drive pickup with a manual transmission.</strong> Customer: 'It slips going up hills, it grinds going into second, and it shudders when I pull away.' Your task: work the complaint like a technician \u2014 confirm it, separate clutch faults from gearbox faults, and name the fault area before any part is ordered. Read the case in the task, then answer each decision row.</p><p><strong>Worked example first \u2014 the sedan that ground in every gear.</strong> A car ground going into every gear, and the pedal felt soft. The technician bled the clutch hydraulics and found air in the line; after bleeding, every gear shifted cleanly. Conclusion: the fault was clutch drag from air in the hydraulics, not the synchronizers \u2014 a dragging clutch grinds in every gear, while a worn synchronizer grinds in one gear only. Notice the method you will repeat below: scope first (one gear or all gears?), then the release system, then the fault area.</p>",
    "taskHtml": "<p><strong>Step 0 \u2014 Safety first.</strong> Before any road test or under-car work: set the parking brake and chock the wheels; never work under a car supported only by a jack \u2014 use a lift or stands; keep hands, hair, and loose clothing clear of the running engine's belts and fans; gear oil and clutch dust can irritate skin and lungs \u2014 wear gloves and eye protection and wash up after handling a worn disc; never road-test a car with a known brake or steering fault. A clutch that slips badly can overheat and smell strongly \u2014 let it cool before touching any part near the bell housing.</p><p><strong>The case, as you find it:</strong> The pickup has 142,000 miles on its original clutch. The customer reports: (1) The engine speed rises under load in fourth and fifth gears on hills, but first and second still pull normally. (2) Going into second gear grinds, but first, third, fourth, and fifth shift smoothly. (3) Takeoff shudders \u2014 the car shakes as the clutch engages. (4) The clutch pedal feels normal, not soft or spongy, and the hydraulics were bled last year with no air found then. (5) The gear oil level is correct and the oil is clean, with only fine grey paste on the drain plug magnet \u2014 the scenario states that is normal wear. (6) There is a dark oil stain at the bottom of the bell housing, and the engine's rear main seal area is wet with oil. (7) The flywheel was never resurfaced. (8) Noise in Neutral disappears when the clutch pedal is pressed \u2014 the input shaft bearing is quiet when the shaft stops. For each row, enter the option number or the computed value asked for.</p><p><strong>The correct fault order (for the order questions):</strong> Step 1 \u2014 Confirm the complaint with a road test. Step 2 \u2014 Check the release system (pedal feel and hydraulics). Step 3 \u2014 Ask whether the symptom is one gear or all gears. Step 4 \u2014 Check the oil and look for leaks. Step 5 \u2014 Name the fault area from the pattern.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL \u2014 Before you road-test the pickup, what must you do first? 1) Drive it at full throttle to make the slip worse 2) Check the brakes and steering are sound, set the parking brake for the static checks, and chock the wheels before any under-car work 3) Crawl under the car while it is on the jack only 4) Touch the bell housing right after a slipping run to feel how hot it is",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cd_safety",
            "expected": 2,
            "hint": "Step 0 governs: brakes and steering sound first, and a jack alone is never a support. Full-throttle testing (1) makes a slipping clutch worse, and touching a hot bell housing (4) burns."
          }
        ]
      },
      {
        "label": "ORDER \u2014 Check the release system (pedal feel and hydraulics). Which step of the fault order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cd_ord_release",
            "expected": 2,
            "hint": "Order: 1 confirm with a road test, 2 check the release system, 3 one gear or all gears, 4 oil and leaks, 5 name the fault area. The release check is step 2."
          }
        ]
      },
      {
        "label": "ORDER \u2014 Ask whether the symptom is one gear or all gears. Which step of the fault order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cd_ord_scope",
            "expected": 3,
            "hint": "Order: 1 confirm, 2 release system, 3 one gear or all gears, 4 oil and leaks, 5 name the fault area. The scope question is step 3."
          }
        ]
      },
      {
        "label": "ORDER \u2014 Name the fault area from the pattern. Which step of the fault order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cd_ord_name",
            "expected": 5,
            "hint": "Order: 1 confirm, 2 release system, 3 scope, 4 oil and leaks, 5 name the fault area. Naming comes last, after the evidence is in."
          }
        ]
      },
      {
        "label": "DECISION \u2014 The engine speed rises under load in fourth and fifth gears on hills, but first and second pull normally. What is the fault? 1) A dragging clutch 2) A slipping clutch \u2014 the linings cannot hold the higher torque demand of the higher gears 3) A worn second-gear synchronizer 4) A bad wheel bearing",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cd_slip",
            "expected": 2,
            "hint": "Slip shows in the higher gears first because they demand the most torque through the clutch. A dragging clutch (1) grinds shifts, a synchronizer (3) affects one gear's shifts, and a wheel bearing (4) rumbles with road speed."
          }
        ]
      },
      {
        "label": "DECISION \u2014 Second gear grinds but first, third, fourth, and fifth shift smoothly. What is the fault? 1) A dragging clutch 2) Second gear's synchronizer is worn 3) The clutch disc is worn out 4) Low gear oil",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cd_grind",
            "expected": 2,
            "hint": "One gear grinding while the others are smooth points at that gear's synchronizer. A dragging clutch (1) grinds in every gear, a worn disc (3) slips rather than grinds, and low oil (4) affects the whole box."
          }
        ]
      },
      {
        "label": "DECISION \u2014 Takeoff shudders. The flywheel was never resurfaced and there is oil at the bell housing. What best explains the chatter? 1) A worn release bearing 2) A warped or scored flywheel, or oil on the linings 3) Low tire pressure 4) A bad battery",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cd_chatter",
            "expected": 2,
            "hint": "Chatter is uneven grip \u2014 a warped or scored flywheel, or oil-soaked linings. A release bearing (1) is noisy with the pedal pressed, tires (3) do not shudder on takeoff, and a battery (4) affects starting."
          }
        ]
      },
      {
        "label": "DECISION \u2014 The pedal feels normal, not soft or spongy. What does that tell you about the hydraulics? 1) Nothing 2) The release system is likely sound \u2014 air in the hydraulics would make the pedal soft and cause drag in every gear 3) The master cylinder is broken 4) The clutch disc is new",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cd_pedal",
            "expected": 2,
            "hint": "A normal pedal argues against air in the hydraulics. Air (and a broken master, 3) would make the pedal soft and cause grinding in every gear \u2014 but only second grinds here."
          }
        ]
      },
      {
        "label": "DECISION \u2014 There is a dark oil stain at the bell housing and the rear main seal area is wet. What must happen before a new clutch disc is fitted? 1) Nothing \u2014 fit the disc and go 2) Fix the rear main seal leak first, or the new disc will be oiled and will slip too 3) Change the gear oil 4) Replace the battery",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cd_leak",
            "expected": 2,
            "hint": "Oil on a new disc makes it slip \u2014 the leak is fixed first, while access is free. Fitting the disc over a leak (1) repeats the failure, gear oil (3) is a different system, and the battery (4) is unrelated."
          }
        ]
      },
      {
        "label": "DECISION \u2014 The gear oil is clean with only fine grey paste on the magnet. What does that tell you? 1) The gearbox is failing 2) Normal wear \u2014 the paste is the slow wear of gears and bearings, not a failure 3) The synchronizers are gone 4) The differential is broken",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cd_oil",
            "expected": 2,
            "hint": "Fine grey paste is normal wear. A failing gearbox (1) sheds chips, worn synchronizers (3) shed brass particles, and the differential (4) is a different part of the drivetrain."
          }
        ]
      },
      {
        "label": "DECISION \u2014 Noise in Neutral disappears when the clutch pedal is pressed. What does that rule out? 1) Nothing 2) The input shaft bearing as a fault \u2014 it goes quiet when the shaft stops, so it is healthy here 3) The clutch disc 4) The flywheel",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cd_neutral",
            "expected": 2,
            "hint": "Pressing the pedal stops the input shaft, so a quiet result means its bearing is healthy. It says nothing about the disc (3) or the flywheel (4), which the other evidence already condemns."
          }
        ]
      },
      {
        "label": "COMPUTED \u2014 The clutch slips in fourth and fifth gears but holds in first, second, and third. Out of the 5 forward gears, in how many does the clutch slip? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cd_count_slip",
            "expected": 2,
            "hint": "Fourth and fifth \u2014 2 of the 5 forward gears. Slip shows in the higher gears first, where torque demand through the clutch is greatest."
          }
        ]
      },
      {
        "label": "COMPUTED \u2014 The pickup has 142,000 miles on its original clutch. Counting the fault clues \u2014 slip in higher gears, second-gear grind, takeoff chatter, oil at the bell housing \u2014 how many separate fault areas does the pattern point to? (Enter the number: clutch linings, second-gear synchronizer, flywheel or oil contamination.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cd_clues",
            "expected": 3,
            "hint": "Three areas: the worn or oiled clutch linings, second gear's synchronizer, and the flywheel or oil contamination behind the chatter. One car can have three faults \u2014 the pattern separates them."
          }
        ]
      },
      {
        "label": "DECISION \u2014 What is the right repair plan? 1) Replace the second-gear synchronizer only 2) Replace the clutch set (disc, pressure plate, release and pilot bearings), fix the rear main seal, resurface or replace the flywheel, and repair second gear's synchronizer while the unit is out 3) Change the gear oil and send it home 4) Replace the battery",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cd_plan",
            "expected": 2,
            "hint": "All three fault areas are fixed while the unit is out \u2014 clutch set, seal, flywheel, and the second-gear synchronizer. Fixing one (1) leaves the others, an oil change (3) fixes none of them, and the battery (4) is unrelated."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "clutch-diagnosis.csv",
    "csv": "Decision point,Your call\n\"SAFETY CALL \u2014 Before you road-test the pickup, what must you do first? 1) Drive it at full throttle to make the slip worse 2) Check the brakes and steering are sound, set the parking brake for the static checks, and chock the wheels before any under-car work 3) Crawl under the car while it is on the jack only 4) Touch the bell housing right after a slipping run to feel how hot it is\",\n\"ORDER \u2014 Check the release system (pedal feel and hydraulics). Which step of the fault order is this?\",\n\"ORDER \u2014 Ask whether the symptom is one gear or all gears. Which step of the fault order is this?\",\n\"ORDER \u2014 Name the fault area from the pattern. Which step of the fault order is this?\",\n\"DECISION \u2014 The engine speed rises under load in fourth and fifth gears on hills, but first and second pull normally. What is the fault? 1) A dragging clutch 2) A slipping clutch \u2014 the linings cannot hold the higher torque demand of the higher gears 3) A worn second-gear synchronizer 4) A bad wheel bearing\",\n\"DECISION \u2014 Second gear grinds but first, third, fourth, and fifth shift smoothly. What is the fault? 1) A dragging clutch 2) Second gear's synchronizer is worn 3) The clutch disc is worn out 4) Low gear oil\",\n\"DECISION \u2014 Takeoff shudders. The flywheel was never resurfaced and there is oil at the bell housing. What best explains the chatter? 1) A worn release bearing 2) A warped or scored flywheel, or oil on the linings 3) Low tire pressure 4) A bad battery\",\n\"DECISION \u2014 The pedal feels normal, not soft or spongy. What does that tell you about the hydraulics? 1) Nothing 2) The release system is likely sound \u2014 air in the hydraulics would make the pedal soft and cause drag in every gear 3) The master cylinder is broken 4) The clutch disc is new\",\n\"DECISION \u2014 There is a dark oil stain at the bell housing and the rear main seal area is wet. What must happen before a new clutch disc is fitted? 1) Nothing \u2014 fit the disc and go 2) Fix the rear main seal leak first, or the new disc will be oiled and will slip too 3) Change the gear oil 4) Replace the battery\",\n\"DECISION \u2014 The gear oil is clean with only fine grey paste on the magnet. What does that tell you? 1) The gearbox is failing 2) Normal wear \u2014 the paste is the slow wear of gears and bearings, not a failure 3) The synchronizers are gone 4) The differential is broken\",\n\"DECISION \u2014 Noise in Neutral disappears when the clutch pedal is pressed. What does that rule out? 1) Nothing 2) The input shaft bearing as a fault \u2014 it goes quiet when the shaft stops, so it is healthy here 3) The clutch disc 4) The flywheel\",\n\"COMPUTED \u2014 The clutch slips in fourth and fifth gears but holds in first, second, and third. Out of the 5 forward gears, in how many does the clutch slip? (Enter the number.)\",\n\"COMPUTED \u2014 The pickup has 142,000 miles on its original clutch. Counting the fault clues \u2014 slip in higher gears, second-gear grind, takeoff chatter, oil at the bell housing \u2014 how many separate fault areas does the pattern point to? (Enter the number: clutch linings, second-gear synchronizer, flywheel or oil contamination.)\",\n\"DECISION \u2014 What is the right repair plan? 1) Replace the second-gear synchronizer only 2) Replace the clutch set (disc, pressure plate, release and pilot bearings), fix the rear main seal, resurface or replace the flywheel, and repair second gear's synchronizer while the unit is out 3) Change the gear oil and send it home 4) Replace the battery\",\n"
  },
  {
    "id": "driveline-vibration-diagnosis",
    "title": "Driveline Vibration Diagnosis",
    "introHtml": "<p><strong>Job ticket #A3-211 \u2014 Vibration and noise on a rear-wheel-drive sedan with a manual transmission.</strong> Customer: 'It shakes at highway speed, it clunks when I pull away, and it clicks when I turn sharply \u2014 but it is a rear-wheel-drive car.' Your task: use the condition behind each symptom to name the suspect part, and prove it with the cheapest test first. Note the twist in the case: the customer also mentions clicking on turns, which is a front-axle symptom on a front-wheel-drive car \u2014 read the case carefully to see what it really is. Read the case in the task, then answer each decision row.</p><p><strong>Worked example first \u2014 the truck that vibrated after a tire rotation.</strong> A truck vibrated at highway speed right after a tire rotation. The technician swapped the front tires to the rear; the vibration moved with the tires. Conclusion: a tire or wheel problem, not a driveline one \u2014 and the fix was a balance, not a driveshaft. Notice the method you will repeat below: the cheapest proving test first, and let the symptom move (or not) to name the part.</p>",
    "taskHtml": "<p><strong>Step 0 \u2014 Safety first.</strong> Before any road test or under-car work: set the parking brake and chock the wheels; never work under a car supported only by a jack \u2014 use a lift or stands; keep hands, hair, and loose clothing clear of the running engine's belts and fans; a spinning driveshaft can catch clothing and injure \u2014 never reach near it while the engine runs and the car is in gear; wear gloves and eye protection when checking U-joints and boots. Never road-test a car with a known brake or steering fault.</p><p><strong>The case, as you find it:</strong> The sedan is rear-wheel drive with a manual transmission. The customer reports: (1) A vibration felt through the floor and seat at highway speed, worst at one particular speed, that grows with road speed. (2) A clunk on takeoff and when shifting between forward and reverse. (3) A rhythmic squeak at low speed. (4) The vibration does not change when the clutch pedal is pressed at speed. (5) The vibration stays the same in every gear at the same road speed. (6) Swapping the front tires to the rear does NOT move the vibration. (7) Grasping the driveshaft near the rear U-joint shows play \u2014 the shaft moves up and down at the joint. (8) The driveshaft has a dent in its tube and one balance weight is missing. (9) The customer also reports a clicking on sharp turns \u2014 but on inspection the front of this rear-wheel-drive car has no CV axles; the clicking comes from a loose front brake pad clip, a brake part, not a driveline part. (10) The center support bearing's rubber mount is torn. For each row, enter the option number or the computed value asked for.</p><p><strong>The correct test order (for the order questions):</strong> Step 1 \u2014 Confirm the complaint with a road test and note the condition of each symptom. Step 2 \u2014 Run the cheapest proving tests first (tire swap, coast in Neutral). Step 3 \u2014 Inspect the driveshaft by hand for play, damage, and missing weights. Step 4 \u2014 Name the fault area from the pattern. Step 5 \u2014 Prove it with the repair and a repeat road test.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL \u2014 Before you check the driveshaft by hand, what must you do? 1) Check it with the engine running and the car in gear 2) Support the car on a lift or stands, engine off, parking brake set and wheels chocked, and keep clear of the spinning shaft 3) Reach under while a helper revs the engine 4) Jack it up on the jack only and crawl under",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dv_safety",
            "expected": 2,
            "hint": "Step 0 governs: lift or stands, engine off, brake and chocks \u2014 never reach near a spinning shaft and never trust a jack alone. Checking it running (1, 3) risks catching clothing, and a jack alone (4) is never a support."
          }
        ]
      },
      {
        "label": "ORDER \u2014 Run the cheapest proving tests first (tire swap, coast in Neutral). Which step of the test order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dv_ord_cheap",
            "expected": 2,
            "hint": "Order: 1 confirm with a road test, 2 cheapest proving tests first, 3 inspect the driveshaft by hand, 4 name the fault area, 5 prove with repair and repeat road test. The cheap tests are step 2."
          }
        ]
      },
      {
        "label": "ORDER \u2014 Inspect the driveshaft by hand for play, damage, and missing weights. Which step of the test order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dv_ord_inspect",
            "expected": 3,
            "hint": "Order: 1 confirm, 2 cheap tests, 3 inspect the driveshaft by hand, 4 name the fault area, 5 prove with repair and repeat. The hand inspection is step 3."
          }
        ]
      },
      {
        "label": "DECISION \u2014 The vibration is felt through the floor and seat, not the steering wheel. Where is the source most likely? 1) The front tires 2) The middle or rear of the car \u2014 the driveshaft, rear differential, or rear wheels 3) The engine mounts 4) The clutch",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dv_feel",
            "expected": 2,
            "hint": "Floor and seat vibration comes from the middle or rear. Steering-wheel vibration (1) would point at the front, engine mounts (3) follow engine speed, and the clutch (4) follows engine speed too."
          }
        ]
      },
      {
        "label": "DECISION \u2014 The vibration stays the same in every gear at the same road speed, and it does not change when the clutch pedal is pressed. What does that prove? 1) It is an engine fault 2) It is road-speed related \u2014 the gearbox and clutch are ruled out 3) It is a tire fault 4) It is a brake fault",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dv_roadspeed",
            "expected": 2,
            "hint": "Same in every gear and unchanged with the clutch out means the fault turns with road speed, not engine speed. An engine fault (1) would change with revs, and the tire test (3) comes next \u2014 it does not prove tires yet."
          }
        ]
      },
      {
        "label": "DECISION \u2014 Swapping the front tires to the rear does NOT move the vibration. What does that tell you? 1) It is a tire problem 2) It is not a front-tire problem \u2014 the vibration stayed put, so the tires are ruled out 3) The tires are new 4) The swap was done wrong",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dv_tireswap",
            "expected": 2,
            "hint": "A vibration that does not move with the tires is not a tire problem \u2014 the swap ruled the tires out. If it were a tire (1), the vibration would have moved to the rear."
          }
        ]
      },
      {
        "label": "DECISION \u2014 Grasping the driveshaft near the rear U-joint shows play \u2014 the shaft moves up and down at the joint. What does that mean? 1) The joint is healthy 2) The U-joint is worn \u2014 a good joint moves smoothly with no play at all 3) The driveshaft is balanced 4) The clutch is slipping",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dv_play",
            "expected": 2,
            "hint": "Any play at a U-joint means it is worn. A healthy joint has no play. Balance (3) is a different check, and the clutch (4) is ruled out by the road-speed evidence."
          }
        ]
      },
      {
        "label": "DECISION \u2014 The car clunks on takeoff and when shifting between forward and reverse. What best explains the clunk? 1) A worn U-joint with play, or a sticking slip yoke 2) Low tire pressure 3) A bad battery 4) Worn brake pads",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dv_clunk",
            "expected": 1,
            "hint": "Play in a U-joint (or a sticking slip yoke) makes the shaft catch with a knock on takeoff and direction changes. Tires (2), battery (3), and brake pads (4) do not clunk on takeoff."
          }
        ]
      },
      {
        "label": "DECISION \u2014 A rhythmic squeak at low speed is heard from the driveline. What does it mean? 1) A dry U-joint cap whose needle bearings are failing 2) A slipping clutch 3) A loose exhaust 4) A bad wheel bearing",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dv_squeak",
            "expected": 1,
            "hint": "A dry cap chirps as its needle bearings fail. A slipping clutch (2) raises engine speed, an exhaust rattle (3) changes with engine speed, and a wheel bearing (4) rumbles with road speed."
          }
        ]
      },
      {
        "label": "DECISION \u2014 The driveshaft has a dent in its tube and one balance weight is missing, and the center support bearing's rubber mount is torn. What do these findings add? 1) Nothing 2) Two more vibration sources \u2014 a dented, unbalanced shaft and a sagging center bearing \u2014 alongside the worn U-joint 3) Proof the clutch is bad 4) Proof the tires are bad",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dv_shaft",
            "expected": 2,
            "hint": "A dent and a missing weight unbalance the shaft, and a torn center mount lets it sag and wobble \u2014 both vibrate. They do not implicate the clutch (3) or the tires (4), which the swap already ruled out."
          }
        ]
      },
      {
        "label": "DECISION \u2014 The customer reports clicking on sharp turns, but this rear-wheel-drive car has no CV axles and the clicking comes from a loose front brake pad clip. What is the right call? 1) Replace a CV axle 2) Do not replace a driveline part for it \u2014 the clicking is a brake part, not a driveline fault, and the car has no CV axles to replace 3) Rebuild the differential 4) Replace the driveshaft for the clicking",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dv_click",
            "expected": 2,
            "hint": "The condition misleads: clicking on turns is a CV joint symptom on a front-wheel-drive car, but this car has no CV axles \u2014 the click is a brake clip. Replacing a CV axle (1) or the differential (3) would fix nothing."
          }
        ]
      },
      {
        "label": "COMPUTED \u2014 Counting the driveline clues \u2014 floor/seat vibration worst at one speed, clunk on takeoff, squeak at low speed, play at the rear U-joint, dented shaft with a missing balance weight, torn center mount \u2014 how many clues point at the driveshaft assembly? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dv_clues",
            "expected": 6,
            "hint": "All six clues point at the driveshaft assembly: the vibration, the clunk, the squeak, the play, the dent and missing weight, and the torn center mount."
          }
        ]
      },
      {
        "label": "COMPUTED \u2014 The vibration is worst at one particular speed and grows with road speed. The tire swap ruled out the tires, the clutch test ruled out the engine side, and the hand check found play. How many suspects remain in the fault area? (Enter the number: the driveshaft assembly is one fault area.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dv_suspects",
            "expected": 1,
            "hint": "One fault area remains: the driveshaft assembly \u2014 the worn U-joint, the dented and unbalanced shaft, and the torn center mount are all parts of it."
          }
        ]
      },
      {
        "label": "DECISION \u2014 What is the right repair plan? 1) Replace the front brake pad clip only 2) Replace the worn U-joints, repair or replace the dented and unbalanced driveshaft, replace the torn center support bearing, fix the brake pad clip, then repeat the road test 3) Replace the clutch 4) Balance the tires",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dv_plan",
            "expected": 2,
            "hint": "Fix the whole fault area \u2014 joints, shaft, center bearing \u2014 plus the brake clip that caused the clicking, then prove it with a repeat road test. The clip alone (1) leaves the vibration, the clutch (3) is ruled out, and the tires (4) are ruled out."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "driveline-vibration-diagnosis.csv",
    "csv": "Decision point,Your call\n\"SAFETY CALL \u2014 Before you check the driveshaft by hand, what must you do? 1) Check it with the engine running and the car in gear 2) Support the car on a lift or stands, engine off, parking brake set and wheels chocked, and keep clear of the spinning shaft 3) Reach under while a helper revs the engine 4) Jack it up on the jack only and crawl under\",\n\"ORDER \u2014 Run the cheapest proving tests first (tire swap, coast in Neutral). Which step of the test order is this?\",\n\"ORDER \u2014 Inspect the driveshaft by hand for play, damage, and missing weights. Which step of the test order is this?\",\n\"DECISION \u2014 The vibration is felt through the floor and seat, not the steering wheel. Where is the source most likely? 1) The front tires 2) The middle or rear of the car \u2014 the driveshaft, rear differential, or rear wheels 3) The engine mounts 4) The clutch\",\n\"DECISION \u2014 The vibration stays the same in every gear at the same road speed, and it does not change when the clutch pedal is pressed. What does that prove? 1) It is an engine fault 2) It is road-speed related \u2014 the gearbox and clutch are ruled out 3) It is a tire fault 4) It is a brake fault\",\n\"DECISION \u2014 Swapping the front tires to the rear does NOT move the vibration. What does that tell you? 1) It is a tire problem 2) It is not a front-tire problem \u2014 the vibration stayed put, so the tires are ruled out 3) The tires are new 4) The swap was done wrong\",\n\"DECISION \u2014 Grasping the driveshaft near the rear U-joint shows play \u2014 the shaft moves up and down at the joint. What does that mean? 1) The joint is healthy 2) The U-joint is worn \u2014 a good joint moves smoothly with no play at all 3) The driveshaft is balanced 4) The clutch is slipping\",\n\"DECISION \u2014 The car clunks on takeoff and when shifting between forward and reverse. What best explains the clunk? 1) A worn U-joint with play, or a sticking slip yoke 2) Low tire pressure 3) A bad battery 4) Worn brake pads\",\n\"DECISION \u2014 A rhythmic squeak at low speed is heard from the driveline. What does it mean? 1) A dry U-joint cap whose needle bearings are failing 2) A slipping clutch 3) A loose exhaust 4) A bad wheel bearing\",\n\"DECISION \u2014 The driveshaft has a dent in its tube and one balance weight is missing, and the center support bearing's rubber mount is torn. What do these findings add? 1) Nothing 2) Two more vibration sources \u2014 a dented, unbalanced shaft and a sagging center bearing \u2014 alongside the worn U-joint 3) Proof the clutch is bad 4) Proof the tires are bad\",\n\"DECISION \u2014 The customer reports clicking on sharp turns, but this rear-wheel-drive car has no CV axles and the clicking comes from a loose front brake pad clip. What is the right call? 1) Replace a CV axle 2) Do not replace a driveline part for it \u2014 the clicking is a brake part, not a driveline fault, and the car has no CV axles to replace 3) Rebuild the differential 4) Replace the driveshaft for the clicking\",\n\"COMPUTED \u2014 Counting the driveline clues \u2014 floor/seat vibration worst at one speed, clunk on takeoff, squeak at low speed, play at the rear U-joint, dented shaft with a missing balance weight, torn center mount \u2014 how many clues point at the driveshaft assembly? (Enter the number.)\",\n\"COMPUTED \u2014 The vibration is worst at one particular speed and grows with road speed. The tire swap ruled out the tires, the clutch test ruled out the engine side, and the hand check found play. How many suspects remain in the fault area? (Enter the number: the driveshaft assembly is one fault area.)\",\n\"DECISION \u2014 What is the right repair plan? 1) Replace the front brake pad clip only 2) Replace the worn U-joints, repair or replace the dented and unbalanced driveshaft, replace the torn center support bearing, fix the brake pad clip, then repeat the road test 3) Replace the clutch 4) Balance the tires\",\n"
  }
];
