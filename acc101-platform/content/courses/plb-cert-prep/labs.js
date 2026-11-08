// Plumbing Certification Prep — original practice content. Practice exams use original questions in the real exams' style/format.
module.exports = [
  {
    "id": "dfu-drills",
    "title": "DFU Drills: Drainage Fixture-Unit Math",
    "introHtml": "<p><strong>Job ticket — sizing day.</strong> You are sizing drainage for three jobs: a two-bath house, a small office restroom, and a restaurant restroom. The DFU table used in this course (IPC Table 702.1) is: water closet (private) 3, lavatory 1, shower 2, bathtub 2, kitchen sink 2, dishwasher 2, clothes washer 3. Add the loads, then read the slope — the table does the rest, but only if your addition is right.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any numbers: eye protection and gloves for the work; de-energize equipment and use lockout/tagout before opening electrical cabinets, and prove circuits dead; never test a gas line with an open flame — pressure test and soap solution only; never work in an unprotected trench 5 feet or deeper; treat every circuit as live until proven dead. Real backflow testing and medical gas brazing require the credential and supervised practice — these drills teach the numbers, not the license. The first scored row is a safety decision — get it right before anything else moves.</p><p>Enter the number of the correct option (or the computed value where the row asks for one) for each decision point.</p><p>Work each load on paper before entering it. A wrong total here is a wrong pipe size on the job.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "SAFETY CALL — You open a drain cleanout and sewer gas rushes out. Your call: 1) Keep working and breathe through your mouth 2) Step back, ventilate, wear eye and respiratory protection as needed, and never enter a confined space without testing the air 3) Light a match to burn off the gas 4) Seal the cleanout and leave the blockage",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "safety_drain",
            "expected": 2,
            "hint": "Sewer gas displaces oxygen and can kill without warning. Step back, ventilate, protect yourself, and never enter a confined space without testing the air — and never use a flame near it."
          }
        ]
      },
      {
        "label": "COMPUTED — One bathroom group: 1 water closet (3 DFU), 1 lavatory (1 DFU), 1 bathtub (2 DFU). Enter the total DFU.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dfu_bath1",
            "expected": 6,
            "hint": "3 + 1 + 2 = 6 DFU."
          }
        ]
      },
      {
        "label": "COMPUTED — Two bathroom groups like the one above. Enter the total DFU.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dfu_bath2",
            "expected": 12,
            "hint": "One group is 6 DFU; two groups are 12 DFU."
          }
        ]
      },
      {
        "label": "COMPUTED — A kitchen: 1 kitchen sink (2 DFU) and 1 dishwasher (2 DFU). Enter the total DFU.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dfu_kitchen",
            "expected": 4,
            "hint": "2 + 2 = 4 DFU."
          }
        ]
      },
      {
        "label": "COMPUTED — A laundry: 1 clothes washer (3 DFU) and 1 laundry tray (2 DFU). Enter the total DFU.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dfu_laundry",
            "expected": 5,
            "hint": "3 + 2 = 5 DFU. (Laundry tray is 2 DFU in IPC Table 702.1.)"
          }
        ]
      },
      {
        "label": "COMPUTED — A house total: 2 bathroom groups (6 DFU each), 1 kitchen (4 DFU), 1 laundry (5 DFU). Enter the total DFU.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dfu_house",
            "expected": 21,
            "hint": "12 + 4 + 5 = 21 DFU."
          }
        ]
      },
      {
        "label": "COMPUTED — An office restroom: 4 water closets (3 DFU each) and 4 lavatories (1 DFU each). Enter the total DFU.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dfu_office",
            "expected": 16,
            "hint": "4 x 3 = 12; 4 x 1 = 4; 12 + 4 = 16 DFU."
          }
        ]
      },
      {
        "label": "COMPUTED — A restaurant restroom: 2 public flush-valve water closets (10 DFU each) and 2 public lavatories (2 DFU each). Enter the total DFU.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dfu_restaurant",
            "expected": 24,
            "hint": "2 x 10 = 20; 2 x 2 = 4; 20 + 4 = 24 DFU."
          }
        ]
      },
      {
        "label": "COMPUTED — A 3-inch drain runs 24 feet at the IPC minimum slope (1/8 inch per foot). Enter its total fall in inches.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dfu_slope3",
            "expected": 3,
            "hint": "3-inch pipe uses the 1/8-inch minimum slope (IPC Table 704.1): 24 x 1/8 = 3 inches."
          }
        ]
      },
      {
        "label": "COMPUTED — A 4-inch drain runs 40 feet at 1/8 inch per foot. Enter its total fall in inches.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dfu_slope4",
            "expected": 5,
            "hint": "40 x 1/8 = 5 inches."
          }
        ]
      },
      {
        "label": "A drain serving 30 DFU is sized from which table? 1) IPC Table 702.1 (DFU values) 2) IPC Table E103.3(2) (WSFU values) 3) IPC Table 403.1 (fixture counts) 4) The gas sizing table",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dfu_table",
            "expected": 1,
            "hint": "Drainage is sized from DFU values in Table 702.1; WSFU sizes water supply and Table 403.1 counts fixtures."
          }
        ]
      },
      {
        "label": "COMPUTED — A drain serves 6 water closets (3 DFU each), 6 lavatories (1 each), and 3 showers (2 each). Enter the total DFU.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dfu_big",
            "expected": 30,
            "hint": "6 x 3 = 18; 6 x 1 = 6; 3 x 2 = 6; 18 + 6 + 6 = 30 DFU."
          }
        ]
      }
    ]
  },
  {
    "id": "wsfu-drills",
    "title": "Water-Supply Fixture-Unit Drills",
    "introHtml": "<p><strong>Job ticket — water sizing day.</strong> You are sizing water supply for the same three jobs. The WSFU table used in this course (IPC Table E103.3(2)) is: water closet (private) 3, lavatory 1, shower 2, bathtub 4, kitchen sink 2, dishwasher 2, clothes washer 4. Watch the two traps: a bathtub is 4 WSFU (not 2), and a clothes washer is 4 WSFU (not 3).</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any numbers: eye protection and gloves for the work; de-energize equipment and use lockout/tagout before opening electrical cabinets, and prove circuits dead; never test a gas line with an open flame — pressure test and soap solution only; never work in an unprotected trench 5 feet or deeper; treat every circuit as live until proven dead. Real backflow testing and medical gas brazing require the credential and supervised practice — these drills teach the numbers, not the license. The first scored row is a safety decision — get it right before anything else moves.</p><p>Enter the number of the correct option (or the computed value where the row asks for one) for each decision point.</p><p>Work each load on paper before entering it. If a number looks like a DFU value, stop — you are in the wrong table.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "SAFETY CALL — You are about to pressure-test a new water system and a helper suggests testing above the pipe's rated pressure 'to be sure.' Your call: 1) Test above the rating — stronger is safer 2) Test at the code-specified test pressure only, never above the system's rating 3) Skip the test and turn the water on 4) Test with air at any pressure",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "safety_water",
            "expected": 2,
            "hint": "Testing must meet the code-specified test pressure and never exceed the system's rating; over-pressurizing can burst pipe and injure people."
          }
        ]
      },
      {
        "label": "COMPUTED — One bathroom group: 1 water closet (3 WSFU), 1 lavatory (1 WSFU), 1 bathtub (4 WSFU). Enter the total WSFU.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wsfu_bath1",
            "expected": 8,
            "hint": "3 + 1 + 4 = 8 WSFU."
          }
        ]
      },
      {
        "label": "COMPUTED — Two bathroom groups like the one above. Enter the total WSFU.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wsfu_bath2",
            "expected": 16,
            "hint": "One group is 8 WSFU; two groups are 16 WSFU."
          }
        ]
      },
      {
        "label": "COMPUTED — A kitchen: 1 kitchen sink (2 WSFU) and 1 dishwasher (2 WSFU). Enter the total WSFU.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wsfu_kitchen",
            "expected": 4,
            "hint": "2 + 2 = 4 WSFU."
          }
        ]
      },
      {
        "label": "COMPUTED — A laundry: 1 clothes washer (4 WSFU). Enter the total WSFU.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wsfu_laundry",
            "expected": 4,
            "hint": "One clothes washer is 4 WSFU in the water-supply table (3 DFU in the drainage table — different tables)."
          }
        ]
      },
      {
        "label": "COMPUTED — A house total: 2 bathroom groups (8 WSFU each), 1 kitchen (4 WSFU), 1 laundry (4 WSFU). Enter the total WSFU.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wsfu_house",
            "expected": 24,
            "hint": "16 + 4 + 4 = 24 WSFU."
          }
        ]
      },
      {
        "label": "COMPUTED — A fixture sits 20 feet above the water source. Enter the pressure lost to elevation in psi (use 0.433 psi per foot, round to one decimal).",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wsfu_head",
            "expected": 8.7,
            "hint": "20 x 0.433 = 8.66, about 8.7 psi."
          }
        ]
      },
      {
        "label": "COMPUTED — Static pressure at the meter is 95 psi. The IPC maximum is 80 psi. Enter how many psi over the maximum the system is.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wsfu_prv",
            "expected": 15,
            "hint": "95 - 80 = 15 psi over; a pressure-reducing valve is required."
          }
        ]
      },
      {
        "label": "A water supply system is sized from which values? 1) WSFU 2) DFU 3) Fixture counts only 4) Gas BTU loads",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wsfu_table",
            "expected": 1,
            "hint": "Water supply is sized from WSFU values; DFU sizes drainage and Table 403.1 counts fixtures."
          }
        ]
      },
      {
        "label": "COMPUTED — A building has 3 bathtubs (4 WSFU each), 3 lavatories (1 each), and 3 water closets (3 each). Enter the total WSFU.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wsfu_big",
            "expected": 24,
            "hint": "3 x 4 = 12; 3 x 1 = 3; 3 x 3 = 9; 12 + 3 + 9 = 24 WSFU."
          }
        ]
      },
      {
        "label": "COMPUTED — How many feet of water head produce 10 psi? (Use 2.31 feet per psi; round to one decimal.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wsfu_head2",
            "expected": 23.1,
            "hint": "10 x 2.31 = 23.1 feet of head."
          }
        ]
      }
    ]
  },
  {
    "id": "offset-drills",
    "title": "Offset Drills: Simple and Rolling Offsets",
    "introHtml": "<p><strong>Job ticket — offset day.</strong> You are cutting offsets to route pipe around beams, ducts, and existing runs. For a 45-degree offset: run = offset, travel = offset x 1.414. For a rolling offset: true offset = square root of (roll squared + set squared), then travel = true offset x 1.414 at 45 degrees. Measure the offset before you cut the pipe.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any numbers: eye protection and gloves for the work; de-energize equipment and use lockout/tagout before opening electrical cabinets, and prove circuits dead; never test a gas line with an open flame — pressure test and soap solution only; never work in an unprotected trench 5 feet or deeper; treat every circuit as live until proven dead. Real backflow testing and medical gas brazing require the credential and supervised practice — these drills teach the numbers, not the license. The first scored row is a safety decision — get it right before anything else moves.</p><p>Enter the number of the correct option (or the computed value where the row asks for one) for each decision point.</p><p>Work each offset on paper before entering it. The choices in the exam are built from the common arithmetic errors — squaring only one leg, or adding the legs instead of the squares.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "SAFETY CALL — You are measuring an offset from a ladder and the ladder wobbles. Your call: 1) Keep measuring — you are almost done 2) Climb down, inspect the ladder, reset it firmly at the right angle, and climb with three points of contact 3) Have a helper hold the ladder while you lean out 4) Stand on the top rung to reach",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "safety_offset",
            "expected": 2,
            "hint": "Inspect the ladder, set it firmly, and keep three points of contact. Never work from a wobbling ladder or the top rung."
          }
        ]
      },
      {
        "label": "COMPUTED — A 45-degree offset must move a pipe 10 inches sideways. Enter the travel length in inches (round to two decimals).",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "off_travel10",
            "expected": 14.14,
            "hint": "10 x 1.414 = 14.14 inches."
          }
        ]
      },
      {
        "label": "COMPUTED — A 45-degree offset of 8 inches: enter the run in inches.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "off_run8",
            "expected": 8,
            "hint": "At 45 degrees, run = offset = 8 inches."
          }
        ]
      },
      {
        "label": "COMPUTED — A rolling offset has a roll of 6 inches and a set of 8 inches. Enter the true offset in inches.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "off_true68",
            "expected": 10,
            "hint": "sqrt(6^2 + 8^2) = sqrt(36 + 64) = sqrt(100) = 10 inches."
          }
        ]
      },
      {
        "label": "COMPUTED — The rolling offset above (true offset 10 inches) at 45 degrees: enter the travel in inches (round to two decimals).",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "off_travel68",
            "expected": 14.14,
            "hint": "10 x 1.414 = 14.14 inches."
          }
        ]
      },
      {
        "label": "COMPUTED — A rolling offset has a roll of 9 inches and a set of 12 inches. Enter the true offset in inches.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "off_true912",
            "expected": 15,
            "hint": "sqrt(9^2 + 12^2) = sqrt(81 + 144) = sqrt(225) = 15 inches."
          }
        ]
      },
      {
        "label": "COMPUTED — The rolling offset above (true offset 15 inches) at 45 degrees: enter the travel in inches (round to two decimals).",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "off_travel912",
            "expected": 21.21,
            "hint": "15 x 1.414 = 21.21 inches."
          }
        ]
      },
      {
        "label": "COMPUTED — A rolling offset has a roll of 5 inches and a set of 12 inches. Enter the true offset in inches.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "off_true512",
            "expected": 13,
            "hint": "sqrt(5^2 + 12^2) = sqrt(25 + 144) = sqrt(169) = 13 inches."
          }
        ]
      },
      {
        "label": "COMPUTED — A 45-degree offset must move a pipe 16 inches sideways. Enter the travel in inches (round to two decimals).",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "off_travel16",
            "expected": 22.62,
            "hint": "16 x 1.414 = 22.624, about 22.62 inches."
          }
        ]
      },
      {
        "label": "In a 45-degree offset, the run equals: 1) The travel 2) The offset 3) Twice the offset 4) Half the offset",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "off_run_rule",
            "expected": 2,
            "hint": "At 45 degrees the triangle is isosceles: run = offset, and travel = offset x 1.414."
          }
        ]
      },
      {
        "label": "COMPUTED — A rolling offset has a roll of 12 inches and a set of 16 inches. Enter the true offset in inches.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "off_true1216",
            "expected": 20,
            "hint": "sqrt(12^2 + 16^2) = sqrt(144 + 256) = sqrt(400) = 20 inches."
          }
        ]
      }
    ]
  },
  {
    "id": "gas-sizing-drills",
    "title": "Gas-Sizing Drills: BTU Loads and the Longest-Length Method",
    "introHtml": "<p><strong>Job ticket — gas sizing day.</strong> You are sizing natural gas piping for a house: furnace, water heater, range, and dryer. Natural gas carries about 1,000 BTU per cubic foot, so divide BTU by 1,000 to get cubic feet per hour (cfh). The longest-length method: measure the longest run from the meter, add the BTU loads each section serves, and read the sizing table at that length — always rounding up to the next pipe size.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any numbers: eye protection and gloves for the work; de-energize equipment and use lockout/tagout before opening electrical cabinets, and prove circuits dead; never test a gas line with an open flame — pressure test and soap solution only; never work in an unprotected trench 5 feet or deeper; treat every circuit as live until proven dead. Real backflow testing and medical gas brazing require the credential and supervised practice — these drills teach the numbers, not the license. The first scored row is a safety decision — get it right before anything else moves.</p><p>Enter the number of the correct option (or the computed value where the row asks for one) for each decision point.</p><p>Work each load on paper before entering it. Gas is the one system where a sizing mistake can hurt people who are not on the job — size it, test it, and never use a flame to find a leak.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "SAFETY CALL — You smell gas at a jobsite. Your call: 1) Hunt for the leak with a lighter 2) Leave the area, do not operate switches or phones inside, shut off gas only if it is safe to do so from outside, and call the gas utility/emergency services from outside 3) Open a window and keep working 4) Ignore it — gas always smells a little",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "safety_gas",
            "expected": 2,
            "hint": "Leave, do not operate electrical devices inside, and call for help from outside. Never hunt a gas leak with a flame."
          }
        ]
      },
      {
        "label": "COMPUTED — A furnace is 100,000 BTU/hr. Enter its gas flow in cubic feet per hour.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gas_furnace",
            "expected": 100,
            "hint": "100,000 / 1,000 = 100 cfh."
          }
        ]
      },
      {
        "label": "COMPUTED — A water heater is 35,000 BTU/hr, a range is 75,000, and a dryer is 35,000. Enter the total BTU load.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gas_total",
            "expected": 145000,
            "hint": "35,000 + 75,000 + 35,000 = 145,000 BTU/hr."
          }
        ]
      },
      {
        "label": "COMPUTED — The total load above (145,000 BTU/hr) is how many cfh?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gas_total_cfh",
            "expected": 145,
            "hint": "145,000 / 1,000 = 145 cfh."
          }
        ]
      },
      {
        "label": "COMPUTED — A house total is 245,000 BTU/hr (furnace 100,000 + water heater 35,000 + range 75,000 + dryer 35,000). Enter the total in cfh.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gas_house",
            "expected": 245,
            "hint": "245,000 / 1,000 = 245 cfh."
          }
        ]
      },
      {
        "label": "COMPUTED — A branch serves only the range (75,000 BTU/hr) and the dryer (35,000 BTU/hr). Enter the branch load in cfh.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gas_branch",
            "expected": 110,
            "hint": "75,000 + 35,000 = 110,000 BTU/hr = 110 cfh."
          }
        ]
      },
      {
        "label": "The longest-length method sizes pipe using: 1) The longest run from the meter and the load each section serves 2) The shortest run only 3) The average of all runs 4) The pipe's color",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gas_method",
            "expected": 1,
            "hint": "Longest length sets the table row; each section is sized by the load it serves at that length."
          }
        ]
      },
      {
        "label": "COMPUTED — A gas load of 180,000 BTU/hr is how many cfh?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gas_180",
            "expected": 180,
            "hint": "180,000 / 1,000 = 180 cfh."
          }
        ]
      },
      {
        "label": "When a gas sizing table gives a capacity just below your load, you should: 1) Round up to the next pipe size 2) Use the smaller size anyway 3) Reduce the appliance load 4) Shorten the pipe by cutting corners",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gas_roundup",
            "expected": 1,
            "hint": "Always round up: an undersized gas line starves appliances and is unsafe."
          }
        ]
      },
      {
        "label": "How is a gas line leak-tested? 1) Pressure test, then soap solution — never an open flame 2) An open flame along each joint 3) Smell alone 4) Fill with water",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gas_leaktest",
            "expected": 1,
            "hint": "Pressure test and soap solution; an open flame is never a leak-test tool."
          }
        ]
      },
      {
        "label": "COMPUTED — A commercial load totals 500,000 BTU/hr. Enter the gas flow in cfh.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gas_500",
            "expected": 500,
            "hint": "500,000 / 1,000 = 500 cfh."
          }
        ]
      }
    ]
  }
];
