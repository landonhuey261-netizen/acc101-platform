// ase-a2 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "shift-complaint-diagnosis",
    "title": "Shift-Complaint Diagnosis",
    "introHtml": "<p><strong>Job ticket #A2-114 \u2014 Shift complaints on a front-wheel-drive sedan with a stepped automatic.</strong> Customer: 'It slips sometimes, shifts hard other times, and it takes forever to go into Drive in the morning.' Your task: work the complaint like a technician \u2014 confirm it, read the fluid and codes, road-test it, and name the fault area before any part is ordered. Read the case in the task, then answer each decision row.</p><p><strong>Worked example first \u2014 the Civic that flared.</strong> A car flared (engine speed rose) between second and third gear only. The technician checked pressure: normal in every gear except third, where it read low. Conclusion: the pump was proven good by the other gears, so the fault was third gear's clutch circuit \u2014 a leaking seal. The proving test was a pressure check on that circuit, and it confirmed the leak. Notice the method you will repeat below: scope first (one gear or all gears?), then pressure, then the fault area.</p>",
    "taskHtml": "<p><strong>Step 0 \u2014 Safety first.</strong> Before any road test or under-car work: set the parking brake and chock the wheels before checking fluid with the engine running; never work under a car supported only by a jack \u2014 use a lift or stands; keep hands, hair, and loose clothing clear of the running engine's belts and fans; ATF is hot after driving and can burn \u2014 let it cool and wear gloves and eye protection. Never road-test a car with a known brake or steering fault, and never reach near moving parts to check a leak.</p><p><strong>The case, as you find it:</strong> The sedan has 118,000 miles. Fluid level is correct on the dipstick; the fluid is dark brown and smells burnt. The scan tool shows one stored code: a ratio error for third gear. The TCM commands the third-gear solenoid on schedule, but the shift never completes cleanly. On the road test you find: (1) Engagement into Drive from Park takes about 4 seconds in the morning and about 2 seconds when warm \u2014 the scenario states a healthy engagement takes about 1 second. (2) Second to third gear flares: engine speed rises between the gears. (3) Third gear slips under load \u2014 engine speed rises without road speed. (4) First, second, fourth, and overdrive all shift normally. (5) Line pressure reads in the expected range the service information states for first, second, fourth, and overdrive, but reads low in third gear only. (6) At steady highway cruise the lock-up clutch applies smoothly with no shudder. (7) The pan has dark clutch material in it, and no large metal pieces. (8) The cooler lines flow freely and the cooler is not restricted. For each row, enter the option number or the computed value asked for.</p><p><strong>The correct fault order (for the order questions):</strong> Step 1 \u2014 Confirm the complaint with a road test and a fluid check. Step 2 \u2014 Read codes and scan data. Step 3 \u2014 Pressure-test to separate a whole-system fault from a single-circuit fault. Step 4 \u2014 Name the fault area from the scope of the symptom. Step 5 \u2014 Prove it with the next test before ordering parts.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL \u2014 Before you check the fluid with the engine running, what must you do first? 1) Jack the car up on the jack only and crawl under it 2) Set the parking brake, chock the wheels, and keep clear of belts and fans 3) Rev the engine hard to warm the fluid fast 4) Check it with the engine off and the car in gear",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sc_safety",
            "expected": 2,
            "hint": "Step 0 governs: parking brake, chocks, and clearance from moving parts come before any running-engine check. A jack alone (1) is never a support, revving (3) is pointless and risky, and checking in gear with the engine off (4) is not the procedure."
          }
        ]
      },
      {
        "label": "ORDER \u2014 Read codes and scan data. Which step of the fault order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sc_ord_codes",
            "expected": 2,
            "hint": "Order: 1 confirm with a road test and fluid check, 2 read codes and scan data, 3 pressure-test, 4 name the fault area, 5 prove it. Codes come second."
          }
        ]
      },
      {
        "label": "ORDER \u2014 Pressure-test to separate a whole-system fault from a single-circuit fault. Which step of the fault order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sc_ord_pressure",
            "expected": 3,
            "hint": "Order: 1 confirm, 2 codes, 3 pressure-test, 4 name the fault area, 5 prove it. The pressure test is step 3."
          }
        ]
      },
      {
        "label": "ORDER \u2014 Name the fault area from the scope of the symptom. Which step of the fault order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sc_ord_name",
            "expected": 4,
            "hint": "Order: 1 confirm, 2 codes, 3 pressure-test, 4 name the fault area, 5 prove it. Naming the area comes after the pressure test."
          }
        ]
      },
      {
        "label": "DECISION \u2014 The fluid is dark brown and smells burnt, and the pan has dark clutch material. What does that tell you? 1) The fluid is fresh 2) Clutches have slipped and overheated, shedding lining material 3) The cooler is too cold 4) The filter is new",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sc_fluid",
            "expected": 2,
            "hint": "Burnt, dark fluid with clutch material means slipping friction made heat and shed lining. Fresh fluid (1) is red and clean, a cold cooler (3) would not burn fluid, and a new filter (4) does not explain burnt fluid."
          }
        ]
      },
      {
        "label": "DECISION \u2014 The TCM commands the third-gear solenoid on schedule but the shift never completes cleanly. Is the fault electrical or hydraulic? 1) Electrical \u2014 the TCM is bad 2) Hydraulic \u2014 the command arrived, so the pressure never reached or held the clutch 3) Neither \u2014 the engine is at fault 4) Both \u2014 replace everything",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sc_elec_hyd",
            "expected": 2,
            "hint": "The command arrived, so the electronics did their job. The fault is downstream: pressure never reached or held the third-gear clutch. A bad TCM (1) would not command on schedule."
          }
        ]
      },
      {
        "label": "DECISION \u2014 Pressure is in range for first, second, fourth, and overdrive but low in third gear only. What does that prove about the pump? 1) The pump is weak 2) The pump is good \u2014 it makes pressure for the other gears, so the fault is third gear's circuit 3) The pump is broken 4) The filter is clogged",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sc_pump",
            "expected": 2,
            "hint": "Four gears with normal pressure prove the pump, filter, and regulator work. A weak pump (1) or clogged filter (4) would drop pressure everywhere, and a broken pump (3) would give no pressure at all."
          }
        ]
      },
      {
        "label": "DECISION \u2014 Third gear slips under load and flares on the shift, while the other gears are normal. Which is the fault area? 1) The torque converter 2) Third gear's clutch circuit \u2014 a leaking seal or a worn third-gear clutch pack 3) The final drive 4) The engine",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sc_fault",
            "expected": 2,
            "hint": "One gear affected means one circuit. The converter (1) would affect all gears or lock-up, the final drive (3) would whine with road speed, and the engine (4) would affect every gear."
          }
        ]
      },
      {
        "label": "DECISION \u2014 Engagement into Drive takes about 4 seconds cold and 2 seconds warm; healthy is about 1 second. What does delayed engagement point to? 1) Low line pressure, a worn clutch, or a leaking seal that must fill before pressure builds 2) A bad battery 3) Worn tires 4) A loose exhaust",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sc_engage",
            "expected": 1,
            "hint": "Delayed engagement means pressure is slow to fill the clutch \u2014 low pressure, excess clearance, or a leaking seal. A battery (2), tires (3), or exhaust (4) cannot delay engagement."
          }
        ]
      },
      {
        "label": "DECISION \u2014 At steady cruise the lock-up clutch applies smoothly with no shudder. What does that rule out? 1) Nothing 2) The torque converter as the cause of these complaints 3) The third-gear clutch 4) The pump",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sc_lockup",
            "expected": 2,
            "hint": "Smooth lock-up rules out the converter for these complaints \u2014 the symptoms follow third gear, not cruise. It does not clear the third-gear clutch (3), which the other evidence already condemns."
          }
        ]
      },
      {
        "label": "COMPUTED \u2014 Healthy engagement takes about 1 second. This car takes about 4 seconds cold. How many seconds slower than healthy is the cold engagement? (Enter the number of seconds.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sc_delay",
            "expected": 3,
            "hint": "4 seconds minus 1 second is 3 seconds slower. That delay is the measurable form of the complaint."
          }
        ]
      },
      {
        "label": "COMPUTED \u2014 The pan has dark clutch material but no large metal pieces. Counting the fault clues so far \u2014 burnt fluid, ratio error code for third gear, low pressure in third only, slip in third only \u2014 how many clues point at third gear's clutch circuit? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sc_clues",
            "expected": 4,
            "hint": "All four clues point the same way: burnt fluid, the third-gear ratio error, low third-gear pressure, and third-gear slip. Four clues, one fault area."
          }
        ]
      },
      {
        "label": "DECISION \u2014 What is the next proving test before any part is ordered? 1) Replace the TCM 2) Pressure-check third gear's clutch circuit and inspect the pan debris, then road-test after repair 3) Replace the whole transmission sight unseen 4) Clear the codes and send the car home",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sc_prove",
            "expected": 2,
            "hint": "Prove it: pressure-check the third-gear circuit and read the pan. Replacing the TCM (1) ignores the evidence, replacing the unit (3) skips diagnosis, and clearing codes (4) erases the evidence."
          }
        ]
      },
      {
        "label": "DECISION \u2014 The case is closed. What is the right way to write the diagnosis? 1) The transmission is bad 2) Third gear's clutch circuit is the fault area \u2014 leaking seal or worn pack \u2014 proven by low third-gear pressure, the ratio error code, and slip in third only; prove with a circuit pressure check before ordering parts 3) The customer drives too hard 4) It needs a new battery",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sc_close",
            "expected": 2,
            "hint": "A diagnosis names the cause and the proving test. 'The transmission is bad' (1) names nothing, driving style (3) is not the cause, and the battery (4) is unrelated."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "shift-complaint-diagnosis.csv",
    "csv": "Decision point,Your call\n\"SAFETY CALL \u2014 Before you check the fluid with the engine running, what must you do first? 1) Jack the car up on the jack only and crawl under it 2) Set the parking brake, chock the wheels, and keep clear of belts and fans 3) Rev the engine hard to warm the fluid fast 4) Check it with the engine off and the car in gear\",\n\"ORDER \u2014 Read codes and scan data. Which step of the fault order is this?\",\n\"ORDER \u2014 Pressure-test to separate a whole-system fault from a single-circuit fault. Which step of the fault order is this?\",\n\"ORDER \u2014 Name the fault area from the scope of the symptom. Which step of the fault order is this?\",\n\"DECISION \u2014 The fluid is dark brown and smells burnt, and the pan has dark clutch material. What does that tell you? 1) The fluid is fresh 2) Clutches have slipped and overheated, shedding lining material 3) The cooler is too cold 4) The filter is new\",\n\"DECISION \u2014 The TCM commands the third-gear solenoid on schedule but the shift never completes cleanly. Is the fault electrical or hydraulic? 1) Electrical \u2014 the TCM is bad 2) Hydraulic \u2014 the command arrived, so the pressure never reached or held the clutch 3) Neither \u2014 the engine is at fault 4) Both \u2014 replace everything\",\n\"DECISION \u2014 Pressure is in range for first, second, fourth, and overdrive but low in third gear only. What does that prove about the pump? 1) The pump is weak 2) The pump is good \u2014 it makes pressure for the other gears, so the fault is third gear's circuit 3) The pump is broken 4) The filter is clogged\",\n\"DECISION \u2014 Third gear slips under load and flares on the shift, while the other gears are normal. Which is the fault area? 1) The torque converter 2) Third gear's clutch circuit \u2014 a leaking seal or a worn third-gear clutch pack 3) The final drive 4) The engine\",\n\"DECISION \u2014 Engagement into Drive takes about 4 seconds cold and 2 seconds warm; healthy is about 1 second. What does delayed engagement point to? 1) Low line pressure, a worn clutch, or a leaking seal that must fill before pressure builds 2) A bad battery 3) Worn tires 4) A loose exhaust\",\n\"DECISION \u2014 At steady cruise the lock-up clutch applies smoothly with no shudder. What does that rule out? 1) Nothing 2) The torque converter as the cause of these complaints 3) The third-gear clutch 4) The pump\",\n\"COMPUTED \u2014 Healthy engagement takes about 1 second. This car takes about 4 seconds cold. How many seconds slower than healthy is the cold engagement? (Enter the number of seconds.)\",\n\"COMPUTED \u2014 The pan has dark clutch material but no large metal pieces. Counting the fault clues so far \u2014 burnt fluid, ratio error code for third gear, low pressure in third only, slip in third only \u2014 how many clues point at third gear's clutch circuit? (Enter the number.)\",\n\"DECISION \u2014 What is the next proving test before any part is ordered? 1) Replace the TCM 2) Pressure-check third gear's clutch circuit and inspect the pan debris, then road-test after repair 3) Replace the whole transmission sight unseen 4) Clear the codes and send the car home\",\n\"DECISION \u2014 The case is closed. What is the right way to write the diagnosis? 1) The transmission is bad 2) Third gear's clutch circuit is the fault area \u2014 leaking seal or worn pack \u2014 proven by low third-gear pressure, the ratio error code, and slip in third only; prove with a circuit pressure check before ordering parts 3) The customer drives too hard 4) It needs a new battery\",\n"
  },
  {
    "id": "transmission-pressure-test-numbers",
    "title": "Transmission Pressure-Test Numbers",
    "introHtml": "<p><strong>Job ticket #A2-118 \u2014 Pressure-test a stepped automatic that is late to engage and slips under load.</strong> Customer: 'It takes a long time to go into gear, and it slips when I press the gas.' Your task: read the gauge in each test condition, compare each reading with the expected range the scenario states, and decide what the numbers prove. All expected ranges in this lab are the scenario's own givens \u2014 the service information for a real vehicle states its own ranges, and this course never invents them. Read the case in the task, then answer each decision row.</p><p><strong>Worked example first \u2014 the truck with low pressure everywhere.</strong> A truck read 40 psi in Drive, 42 psi in Reverse, and 38 psi in overdrive. The scenario stated the expected range was 55\u201375 psi in every gear. Every reading was below range, so the fault was a whole-system part \u2014 the pump, the filter, or the regulator \u2014 not one clutch circuit. The proving test was a filter and pump inspection. Notice the method: compare each reading with its stated range, then ask whether the failure is everywhere or in one gear.</p>",
    "taskHtml": "<p><strong>Step 0 \u2014 Safety first.</strong> Before any pressure test: set the parking brake and chock the wheels; connect the gauge with the engine off and keep the hose clear of belts, fans, and hot exhaust parts; wear gloves and eye protection \u2014 ATF under pressure can spray and burn; never stand in front of the car while a helper selects gears; keep hands away from moving parts while the engine runs. If fluid sprays from a loose gauge fitting, shut the engine off at once and let it cool before touching anything.</p><p><strong>The case, as you find it:</strong> A stepped automatic sedan. The scenario states the expected line-pressure range is 55\u201375 psi at idle in Drive, 55\u201375 psi at idle in Reverse, and 90\u2013110 psi at wide-open throttle in Drive. Your gauge readings are: (1) Idle in Drive: 65 psi. (2) Idle in Reverse: 70 psi. (3) Wide-open throttle in Drive: 95 psi. (4) Idle in third gear only (manual selection): 45 psi \u2014 below its stated range of 55\u201375 psi. (5) Idle in second gear: 62 psi. (6) Idle in fourth gear: 68 psi. (7) The fluid is at the correct level and is red, not burnt. (8) No diagnostic codes are stored. (9) Engagement into Drive takes about 1 second \u2014 the scenario states healthy is about 1 second. (10) Third gear slips under load. For each row, enter the option number or the computed value asked for.</p><p><strong>The correct reading order (for the order questions):</strong> Step 1 \u2014 Check fluid level and condition first. Step 2 \u2014 Read the gauge at idle in Drive and Reverse. Step 3 \u2014 Read the gauge at wide-open throttle. Step 4 \u2014 Read the gauge gear by gear to find the single low circuit. Step 5 \u2014 Name the fault area from the pattern of readings.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL \u2014 Before you connect the pressure gauge, what must you do? 1) Connect it with the engine running and the car in gear 2) Set the parking brake, chock the wheels, connect the gauge with the engine off, and keep the hose clear of belts, fans, and hot parts 3) Rev the engine while you connect it 4) Connect it without gloves to feel the fitting better",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pt_safety",
            "expected": 2,
            "hint": "Step 0 governs: engine off for the connection, brake and chocks set, hose clear of moving and hot parts. Connecting with the engine running (1) risks a spray of hot fluid, revving (3) is pointless, and bare hands (4) invite burns."
          }
        ]
      },
      {
        "label": "ORDER \u2014 Read the gauge at idle in Drive and Reverse. Which step of the reading order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pt_ord_idle",
            "expected": 2,
            "hint": "Order: 1 fluid level and condition, 2 gauge at idle in Drive and Reverse, 3 gauge at wide-open throttle, 4 gear by gear, 5 name the fault area. The idle readings are step 2."
          }
        ]
      },
      {
        "label": "ORDER \u2014 Read the gauge gear by gear to find the single low circuit. Which step of the reading order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pt_ord_gears",
            "expected": 4,
            "hint": "Order: 1 fluid, 2 idle readings, 3 wide-open throttle, 4 gear by gear, 5 name the fault area. The gear-by-gear readings are step 4."
          }
        ]
      },
      {
        "label": "DECISION \u2014 Idle in Drive reads 65 psi; the stated range is 55\u201375 psi. What is the verdict? 1) Below range 2) In range 3) Above range 4) No reading",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pt_drive",
            "expected": 2,
            "hint": "65 psi sits inside 55\u201375 psi, so it is in range. Below range (1) would be under 55, above range (3) over 75."
          }
        ]
      },
      {
        "label": "DECISION \u2014 Idle in Reverse reads 70 psi; the stated range is 55\u201375 psi. What is the verdict? 1) Below range 2) In range 3) Above range 4) No reading",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pt_reverse",
            "expected": 2,
            "hint": "70 psi sits inside 55\u201375 psi, so it is in range."
          }
        ]
      },
      {
        "label": "DECISION \u2014 Wide-open throttle in Drive reads 95 psi; the stated range is 90\u2013110 psi. What is the verdict? 1) Below range 2) In range 3) Above range 4) No reading",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pt_wot",
            "expected": 2,
            "hint": "95 psi sits inside 90\u2013110 psi, so it is in range \u2014 pressure rises correctly with throttle."
          }
        ]
      },
      {
        "label": "DECISION \u2014 Idle in third gear reads 45 psi; the stated range is 55\u201375 psi. What is the verdict? 1) Below range 2) In range 3) Above range 4) No reading",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pt_third",
            "expected": 1,
            "hint": "45 psi is below the 55\u201375 psi range. Third gear is the only low reading, which makes it a single-circuit fault."
          }
        ]
      },
      {
        "label": "COMPUTED \u2014 Third gear reads 45 psi and the bottom of its stated range is 55 psi. How many psi below the bottom of the range is the reading? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pt_shortfall",
            "expected": 10,
            "hint": "55 minus 45 is 10 psi below the bottom of the range."
          }
        ]
      },
      {
        "label": "COMPUTED \u2014 Wide-open throttle reads 95 psi and idle in Drive reads 65 psi. By how many psi does pressure rise from idle to wide-open throttle? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pt_rise",
            "expected": 30,
            "hint": "95 minus 65 is 30 psi. Pressure rising with throttle is correct behavior \u2014 the regulator is doing its job."
          }
        ]
      },
      {
        "label": "DECISION \u2014 Second gear reads 62 psi and fourth gear reads 68 psi, both in their 55\u201375 psi ranges. What does that prove about the pump? 1) The pump is weak 2) The pump is good \u2014 it makes pressure for the other gears 3) The pump is broken 4) The filter is clogged",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pt_pump",
            "expected": 2,
            "hint": "Normal readings in several gears prove the pump, filter, and regulator work. A weak pump (1) or clogged filter (4) would drop pressure everywhere, and a broken pump (3) would give no pressure."
          }
        ]
      },
      {
        "label": "DECISION \u2014 No codes are stored and the fluid is red and at the correct level. What does the absence of codes tell you here? 1) Nothing is wrong 2) The fault is hydraulic, not electrical \u2014 a worn pump or clogged filter would also set no code, but the gauge already proves the pump good 3) The TCM is dead 4) The pressure gauge is wrong",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pt_codes",
            "expected": 2,
            "hint": "No codes means the electronics see nothing wrong \u2014 the fault is hydraulic, in third gear's circuit. The gauge, not the codes, found it. (1) is wrong: third gear slips. (3) is wrong: a dead TCM would set codes or limp mode. (4) is wrong: the other readings are consistent."
          }
        ]
      },
      {
        "label": "DECISION \u2014 Third gear slips under load and its pressure reads low while every other gear is in range. What is the fault area? 1) The pump 2) Third gear's clutch circuit \u2014 a leaking seal or a worn third-gear clutch pack 3) The torque converter 4) The cooler",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pt_fault",
            "expected": 2,
            "hint": "One gear low means one circuit. The pump (1) would affect all gears, the converter (3) would show at lock-up or all gears, and the cooler (4) affects temperature, not one gear's pressure."
          }
        ]
      },
      {
        "label": "COMPUTED \u2014 Counting the gauge readings: Drive 65, Reverse 70, wide-open throttle 95, third 45, second 62, fourth 68. How many of the six readings are in their stated ranges? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pt_count",
            "expected": 5,
            "hint": "Five of six are in range \u2014 only third gear at 45 psi is below its range. Five good readings and one bad one is the signature of a single-circuit fault."
          }
        ]
      },
      {
        "label": "DECISION \u2014 What is the next proving test before any part is ordered? 1) Replace the pump 2) Pressure-check third gear's clutch circuit directly and inspect the pan for third-gear clutch debris 3) Replace the TCM 4) Change the fluid and hope",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pt_prove",
            "expected": 2,
            "hint": "Prove the single-circuit fault: test third gear's circuit directly and read the pan. Replacing the pump (1) ignores five good readings, the TCM (3) has no code against it, and a fluid change (4) cannot fix a leaking seal."
          }
        ]
      },
      {
        "label": "DECISION \u2014 The case is closed. What is the right way to write the diagnosis? 1) The transmission is bad 2) Third gear's clutch circuit is the fault area \u2014 low third-gear pressure with normal pressure elsewhere, plus slip in third only \u2014 prove with a direct circuit pressure check before ordering parts 3) It needs a new engine 4) The gauge is faulty",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pt_close",
            "expected": 2,
            "hint": "A diagnosis names the cause, the evidence, and the proving test. 'The transmission is bad' (1) names nothing, the engine (3) is unrelated, and the gauge (4) is proven good by five consistent readings."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "transmission-pressure-test-numbers.csv",
    "csv": "Decision point,Your call\n\"SAFETY CALL \u2014 Before you connect the pressure gauge, what must you do? 1) Connect it with the engine running and the car in gear 2) Set the parking brake, chock the wheels, connect the gauge with the engine off, and keep the hose clear of belts, fans, and hot parts 3) Rev the engine while you connect it 4) Connect it without gloves to feel the fitting better\",\n\"ORDER \u2014 Read the gauge at idle in Drive and Reverse. Which step of the reading order is this?\",\n\"ORDER \u2014 Read the gauge gear by gear to find the single low circuit. Which step of the reading order is this?\",\n\"DECISION \u2014 Idle in Drive reads 65 psi; the stated range is 55\u201375 psi. What is the verdict? 1) Below range 2) In range 3) Above range 4) No reading\",\n\"DECISION \u2014 Idle in Reverse reads 70 psi; the stated range is 55\u201375 psi. What is the verdict? 1) Below range 2) In range 3) Above range 4) No reading\",\n\"DECISION \u2014 Wide-open throttle in Drive reads 95 psi; the stated range is 90\u2013110 psi. What is the verdict? 1) Below range 2) In range 3) Above range 4) No reading\",\n\"DECISION \u2014 Idle in third gear reads 45 psi; the stated range is 55\u201375 psi. What is the verdict? 1) Below range 2) In range 3) Above range 4) No reading\",\n\"COMPUTED \u2014 Third gear reads 45 psi and the bottom of its stated range is 55 psi. How many psi below the bottom of the range is the reading? (Enter the number.)\",\n\"COMPUTED \u2014 Wide-open throttle reads 95 psi and idle in Drive reads 65 psi. By how many psi does pressure rise from idle to wide-open throttle? (Enter the number.)\",\n\"DECISION \u2014 Second gear reads 62 psi and fourth gear reads 68 psi, both in their 55\u201375 psi ranges. What does that prove about the pump? 1) The pump is weak 2) The pump is good \u2014 it makes pressure for the other gears 3) The pump is broken 4) The filter is clogged\",\n\"DECISION \u2014 No codes are stored and the fluid is red and at the correct level. What does the absence of codes tell you here? 1) Nothing is wrong 2) The fault is hydraulic, not electrical \u2014 a worn pump or clogged filter would also set no code, but the gauge already proves the pump good 3) The TCM is dead 4) The pressure gauge is wrong\",\n\"DECISION \u2014 Third gear slips under load and its pressure reads low while every other gear is in range. What is the fault area? 1) The pump 2) Third gear's clutch circuit \u2014 a leaking seal or a worn third-gear clutch pack 3) The torque converter 4) The cooler\",\n\"COMPUTED \u2014 Counting the gauge readings: Drive 65, Reverse 70, wide-open throttle 95, third 45, second 62, fourth 68. How many of the six readings are in their stated ranges? (Enter the number.)\",\n\"DECISION \u2014 What is the next proving test before any part is ordered? 1) Replace the pump 2) Pressure-check third gear's clutch circuit directly and inspect the pan for third-gear clutch debris 3) Replace the TCM 4) Change the fluid and hope\",\n\"DECISION \u2014 The case is closed. What is the right way to write the diagnosis? 1) The transmission is bad 2) Third gear's clutch circuit is the fault area \u2014 low third-gear pressure with normal pressure elsewhere, plus slip in third only \u2014 prove with a direct circuit pressure check before ordering parts 3) It needs a new engine 4) The gauge is faulty\",\n"
  }
];
