// con301 — Construction Certification Prep: original drill labs. Practice exams use original questions in the real exams' style/format.
module.exports = [
  {
    "id": "takeoff-drills",
    "title": "Takeoff Drills: Quantity Takeoffs",
    "introHtml": "<p><strong>Job ticket — takeoff day.</strong> You are taking off quantities for a small house: walls, floors, roof sheathing, and a slab. Count every member, measure every area, list every sheet — then add the waste. A takeoff that forgets the fittings, the waste, or the starting stud is a takeoff that loses money.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any numbers: eye protection, hard hat, and gloves for the work; treat every circuit as live until proven dead and use lockout/tagout before opening electrical cabinets; never test a gas line with an open flame — pressure test and soap solution only; never enter an unprotected trench 5 feet or deeper; keep three points of contact on a ladder; never lift a load over people; real welding, equipment operation, and concrete finishing require supervised hands-on practice and the credential — these drills teach the numbers, not the license. The first scored row is a safety decision — get it right before anything else moves.</p><p>Enter the number of the correct option (or the computed value where the row asks for one) for each decision point.</p><p>Work each number on paper before entering it. A wrong total here is a wrong order on the job.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "SAFETY CALL — You are taking off quantities on an active jobsite and a forklift is moving loads nearby. Your call: 1) Walk through the forklift's path to save time 2) Stay out of blind spots, make eye contact with the operator, and never walk behind a backing machine 3) Wave the forklift through while standing in its path 4) Ignore the forklift — it will stop for you",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "safety_takeoff",
            "expected": 2,
            "hint": "Stay out of blind spots, make eye contact, and never walk behind a backing machine. Never assume the operator sees you."
          }
        ]
      },
      {
        "label": "COMPUTED — A wall is 24 feet long with studs 16 inches on center. Enter the number of studs (plus one starting stud).",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "take_studs24",
            "expected": 19,
            "hint": "24 feet is 288 inches; 288 / 16 = 18 spaces, plus one starting stud = 19 studs."
          }
        ]
      },
      {
        "label": "COMPUTED — A wall is 32 feet long with studs 16 inches on center. Enter the number of studs (plus one starting stud).",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "take_studs32",
            "expected": 25,
            "hint": "32 feet is 384 inches; 384 / 16 = 24 spaces, plus one starting stud = 25 studs."
          }
        ]
      },
      {
        "label": "COMPUTED — A floor is 20 feet by 30 feet. Enter the subfloor area in square feet.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "take_floor",
            "expected": 600,
            "hint": "20 x 30 = 600 square feet."
          }
        ]
      },
      {
        "label": "COMPUTED — The floor above needs subfloor at 32 square feet per sheet. Enter the number of sheets, rounded up.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "take_floor_sheets",
            "expected": 19,
            "hint": "600 / 32 = 18.75, so 19 sheets — always round up on a takeoff."
          }
        ]
      },
      {
        "label": "COMPUTED — A wall is 24 feet long and 8 feet high. Enter the sheathing area in square feet.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "take_wall_area",
            "expected": 192,
            "hint": "24 x 8 = 192 square feet."
          }
        ]
      },
      {
        "label": "COMPUTED — The wall above needs sheathing at 32 square feet per sheet. Enter the number of sheets.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "take_wall_sheets",
            "expected": 6,
            "hint": "192 / 32 = 6 sheets."
          }
        ]
      },
      {
        "label": "COMPUTED — A takeoff needs 400 board feet of lumber. With a 10% waste allowance, enter the board feet to order.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "take_waste",
            "expected": 440,
            "hint": "400 x 1.10 = 440 board feet."
          }
        ]
      },
      {
        "label": "COMPUTED — A board is 2 inches thick, 6 inches wide, and 12 feet long. Enter the board feet.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "take_bf",
            "expected": 12,
            "hint": "(2 x 6 x 12) / 12 = 12 board feet."
          }
        ]
      },
      {
        "label": "A takeoff is: 1) The job's price 2) A list of every material and its quantity, measured from the drawings 3) The construction schedule 4) A list of workers",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "take_def",
            "expected": 2,
            "hint": "A takeoff is quantities measured from the drawings; pricing comes after."
          }
        ]
      },
      {
        "label": "COMPUTED — Two walls are 24 feet long and 8 feet high each. Enter the total sheathing area in square feet.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "take_two_walls",
            "expected": 384,
            "hint": "One wall is 192 square feet; two walls are 384 square feet."
          }
        ]
      },
      {
        "label": "COMPUTED — A roof needs 1,200 square feet of sheathing. Each sheet covers 32 square feet. Enter the number of sheets, rounded up.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "take_roof_sheets",
            "expected": 38,
            "hint": "1,200 / 32 = 37.5, so 38 sheets — always round up."
          }
        ]
      }
    ]
  },
  {
    "id": "concrete-drills",
    "title": "Concrete Drills: Volumes, Mix Quantities & Formwork",
    "introHtml": "<p><strong>Job ticket — concrete day.</strong> You are ordering concrete for a slab, a footing, and a set of piers, and checking the formwork. Volume is length × width × depth in feet, divided by 27 for cubic yards — and always add waste, because a short load stops the pour.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any numbers: eye protection, hard hat, and gloves for the work; treat every circuit as live until proven dead and use lockout/tagout before opening electrical cabinets; never test a gas line with an open flame — pressure test and soap solution only; never enter an unprotected trench 5 feet or deeper; keep three points of contact on a ladder; never lift a load over people; real welding, equipment operation, and concrete finishing require supervised hands-on practice and the credential — these drills teach the numbers, not the license. The first scored row is a safety decision — get it right before anything else moves.</p><p>Enter the number of the correct option (or the computed value where the row asks for one) for each decision point.</p><p>Work each number on paper before entering it. A wrong total here is a wrong order on the job.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "SAFETY CALL — You are about to pour concrete and a coworker suggests adding extra water to the mix to make it easier to place. Your call: 1) Add the water — easier placing is worth it 2) Do not add water — extra water weakens the concrete; order the right slump instead 3) Add water only to the top of the load 4) Add water and more cement to balance it",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "safety_concrete",
            "expected": 2,
            "hint": "Extra water weakens concrete. Order the right slump; never add water on site to fix a stiff mix."
          }
        ]
      },
      {
        "label": "COMPUTED — A slab is 20 feet by 15 feet by 4 inches thick (4 inches = 1/3 foot). Enter the concrete volume in cubic feet.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "conc_slab_cf",
            "expected": 100,
            "hint": "20 x 15 x 1/3 = 100 cubic feet."
          }
        ]
      },
      {
        "label": "COMPUTED — The slab above (100 cubic feet) is how many cubic yards? Round to two decimals.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "conc_slab_cy",
            "expected": 3.7,
            "hint": "100 / 27 = 3.70 cubic yards."
          }
        ]
      },
      {
        "label": "COMPUTED — A footing is 30 feet long, 2 feet wide, and 1 foot deep. Enter the concrete volume in cubic feet.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "conc_foot_cf",
            "expected": 60,
            "hint": "30 x 2 x 1 = 60 cubic feet."
          }
        ]
      },
      {
        "label": "COMPUTED — The footing above (60 cubic feet) with 10% waste: enter the cubic feet to order.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "conc_foot_waste",
            "expected": 66,
            "hint": "60 x 1.10 = 66 cubic feet."
          }
        ]
      },
      {
        "label": "COMPUTED — A slab is 10 feet by 12 feet by 4 inches thick. Enter the concrete volume in cubic feet.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "conc_slab2_cf",
            "expected": 40,
            "hint": "10 x 12 x 1/3 = 40 cubic feet."
          }
        ]
      },
      {
        "label": "COMPUTED — A pier is 2 feet by 2 feet by 3 feet deep. Enter the concrete volume in cubic feet.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "conc_pier",
            "expected": 12,
            "hint": "2 x 2 x 3 = 12 cubic feet."
          }
        ]
      },
      {
        "label": "COMPUTED — Four piers like the one above: enter the total concrete volume in cubic feet.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "conc_piers4",
            "expected": 48,
            "hint": "One pier is 12 cubic feet; four piers are 48 cubic feet."
          }
        ]
      },
      {
        "label": "COMPUTED — A slab needs 3.7 cubic yards of concrete. With 10% waste, enter the cubic yards to order, to two decimals.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "conc_order",
            "expected": 4.07,
            "hint": "3.7 x 1.10 = 4.07 cubic yards."
          }
        ]
      },
      {
        "label": "COMPUTED — A 4-inch slab needs control joints 8 to 12 feet apart. A slab 24 feet long needs joints at what maximum spacing? Enter the feet.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "conc_joint",
            "expected": 12,
            "hint": "For a 4-inch slab, control joints are 24–36 times the thickness: 8 to 12 feet apart, so the maximum spacing is 12 feet."
          }
        ]
      },
      {
        "label": "COMPUTED — Concrete weighs about 150 pounds per cubic foot. Enter the weight of 2 cubic yards in pounds.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "conc_weight",
            "expected": 8100,
            "hint": "2 cubic yards is 54 cubic feet; 54 x 150 = 8,100 pounds."
          }
        ]
      },
      {
        "label": "What does slump measure? 1) Strength 2) Workability — how far a cone of fresh concrete settles 3) Air content 4) Temperature",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "conc_slump",
            "expected": 2,
            "hint": "Slump measures workability; strength is tested on cylinders and air with an air meter."
          }
        ]
      }
    ]
  },
  {
    "id": "framing-drills",
    "title": "Framing Drills: Cut Lists, Spacing & Rafter/Stair Math",
    "introHtml": "<p><strong>Job ticket — framing day.</strong> You are building the cut list for a floor, a wall, a roof, and a stair. Studs and joists are spaces plus one; rafters are right triangles; stairs are total rise divided by riser height. Measure twice, cut once — and check the math before the saw starts.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any numbers: eye protection, hard hat, and gloves for the work; treat every circuit as live until proven dead and use lockout/tagout before opening electrical cabinets; never test a gas line with an open flame — pressure test and soap solution only; never enter an unprotected trench 5 feet or deeper; keep three points of contact on a ladder; never lift a load over people; real welding, equipment operation, and concrete finishing require supervised hands-on practice and the credential — these drills teach the numbers, not the license. The first scored row is a safety decision — get it right before anything else moves.</p><p>Enter the number of the correct option (or the computed value where the row asks for one) for each decision point.</p><p>Work each number on paper before entering it. A wrong total here is a wrong order on the job.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "SAFETY CALL — You are cutting lumber with a circular saw and the guard is stuck open. Your call: 1) Use it carefully — the guard is only a convenience 2) Take the saw out of service until the guard is repaired 3) Remove the guard completely so it cannot stick 4) Use it only for short cuts",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "safety_framing",
            "expected": 2,
            "hint": "A missing or broken guard takes the tool out of service. Care cannot replace a guard."
          }
        ]
      },
      {
        "label": "COMPUTED — A wall is 28 feet long with studs 16 inches on center. Enter the number of studs (plus one starting stud).",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "frame_studs28",
            "expected": 22,
            "hint": "28 feet is 336 inches; 336 / 16 = 21 spaces, plus one starting stud = 22 studs."
          }
        ]
      },
      {
        "label": "COMPUTED — A floor is 24 feet long with joists 16 inches on center. Enter the number of joists (plus one starting joist).",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "frame_joists24",
            "expected": 19,
            "hint": "24 feet is 288 inches; 288 / 16 = 18 spaces, plus one starting joist = 19 joists."
          }
        ]
      },
      {
        "label": "COMPUTED — A rafter has a run of 12 feet and a rise of 5 feet. Enter the rafter length in feet, to two decimals.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "frame_rafter125",
            "expected": 13,
            "hint": "sqrt(12^2 + 5^2) = sqrt(169) = 13 feet."
          }
        ]
      },
      {
        "label": "COMPUTED — A rafter has a run of 9 feet and a rise of 12 feet. Enter the rafter length in feet.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "frame_rafter912",
            "expected": 15,
            "hint": "sqrt(9^2 + 12^2) = sqrt(225) = 15 feet."
          }
        ]
      },
      {
        "label": "COMPUTED — A roof has a 6-in-12 pitch and a run of 10 feet. Enter the rise in feet.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "frame_pitch",
            "expected": 5,
            "hint": "6 inches of rise per foot of run over 10 feet: 10 x 6 = 60 inches = 5 feet."
          }
        ]
      },
      {
        "label": "COMPUTED — A stair has a total rise of 84 inches with 7-inch risers. Enter the number of risers.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "frame_risers84",
            "expected": 12,
            "hint": "84 / 7 = 12 risers."
          }
        ]
      },
      {
        "label": "COMPUTED — The stair above has 12 risers and each tread is 11 inches deep. Enter the total run in inches.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "frame_run",
            "expected": 121,
            "hint": "Total run uses one fewer tread than risers: 11 treads x 11 inches = 121 inches."
          }
        ]
      },
      {
        "label": "COMPUTED — A 2x4 stud wall is 8 feet high. Studs are 92-5/8 inches long. Enter the stud length in inches as a decimal, to three decimals.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "frame_stud_len",
            "expected": 92.625,
            "hint": "92-5/8 inches is 92.625 inches."
          }
        ]
      },
      {
        "label": "COMPUTED — A joist spans 12 feet. Blocking is placed at midspan. Enter the distance from each end in feet.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "frame_block",
            "expected": 6,
            "hint": "Midspan of 12 feet is 6 feet from each end."
          }
        ]
      },
      {
        "label": "What is the IRC maximum riser height? 1) 10 inches 2) 7-3/4 inches 3) 5 inches 4) 12 inches",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "frame_riser_max",
            "expected": 2,
            "hint": "The IRC limits risers to a maximum of 7-3/4 inches."
          }
        ]
      },
      {
        "label": "COMPUTED — A roof has 14 common rafters on each side. Enter the total number of common rafters.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "frame_rafters",
            "expected": 28,
            "hint": "14 per side x 2 sides = 28 rafters."
          }
        ]
      }
    ]
  },
  {
    "id": "estimating-drills",
    "title": "Estimating Drills: Costing & Bids",
    "introHtml": "<p><strong>Job ticket — bid day.</strong> You are pricing a small job: material, labor, overhead, and profit — and checking the difference between markup and margin. A bid that forgets the fittings, the burden, or the waste is a bid that loses money on a job it won.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any numbers: eye protection, hard hat, and gloves for the work; treat every circuit as live until proven dead and use lockout/tagout before opening electrical cabinets; never test a gas line with an open flame — pressure test and soap solution only; never enter an unprotected trench 5 feet or deeper; keep three points of contact on a ladder; never lift a load over people; real welding, equipment operation, and concrete finishing require supervised hands-on practice and the credential — these drills teach the numbers, not the license. The first scored row is a safety decision — get it right before anything else moves.</p><p>Enter the number of the correct option (or the computed value where the row asks for one) for each decision point.</p><p>Work each number on paper before entering it. A wrong total here is a wrong order on the job.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "SAFETY CALL — You are estimating a job and the drawings show a scope gap — work shown on one sheet and missing on another. Your call: 1) Assume the answer and bid it 2) Write an RFI to resolve it before the bid is due 3) Ignore it and hope the owner does not notice 4) Bid it twice to be safe",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "safety_est",
            "expected": 2,
            "hint": "A scope gap is resolved with a written RFI before bidding. Assuming the answer means owning the risk."
          }
        ]
      },
      {
        "label": "COMPUTED — A job's material cost is $2,000 and labor is $3,000. Enter the total direct cost in dollars.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "est_direct",
            "expected": 5000,
            "hint": "2,000 + 3,000 = $5,000."
          }
        ]
      },
      {
        "label": "COMPUTED — The job above has 10% overhead on the direct cost. Enter the overhead in dollars.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "est_overhead",
            "expected": 500,
            "hint": "10% of 5,000 = $500."
          }
        ]
      },
      {
        "label": "COMPUTED — Direct cost $5,000 plus overhead $500 is $5,500. With a 20% markup on cost, enter the selling price in dollars.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "est_price",
            "expected": 6600,
            "hint": "5,500 x 1.20 = $6,600."
          }
        ]
      },
      {
        "label": "COMPUTED — The job above sells for $6,600 and costs $5,500. Enter the profit in dollars.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "est_profit",
            "expected": 1100,
            "hint": "6,600 - 5,500 = $1,100."
          }
        ]
      },
      {
        "label": "COMPUTED — The profit above ($1,100) on a $6,600 price is what margin, in percent? Round to one decimal.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "est_margin",
            "expected": 16.7,
            "hint": "1,100 / 6,600 = 0.1667, about 16.7%."
          }
        ]
      },
      {
        "label": "COMPUTED — A crew's wage is $25 per hour and labor burden is 40%. Enter the true labor cost per hour in dollars.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "est_burden",
            "expected": 35,
            "hint": "25 x 1.40 = $35 per hour."
          }
        ]
      },
      {
        "label": "COMPUTED — A crew of 3 works 40 hours at a true cost of $35 per hour. Enter the total labor cost in dollars.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "est_crew",
            "expected": 4200,
            "hint": "3 x 40 x 35 = $4,200."
          }
        ]
      },
      {
        "label": "COMPUTED — A takeoff needs 200 board feet of lumber with 10% waste. Enter the board feet to order.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "est_bf",
            "expected": 220,
            "hint": "200 x 1.10 = 220 board feet."
          }
        ]
      },
      {
        "label": "COMPUTED — A material order costs $800. With 5% waste added, enter the total in dollars.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "est_waste5",
            "expected": 840,
            "hint": "800 x 1.05 = $840."
          }
        ]
      },
      {
        "label": "Markup is: 1) Profit over price 2) Profit added to cost to set the price 3) The cost of overhead 4) The price of the bid package",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "est_markup",
            "expected": 2,
            "hint": "Markup is added to cost to set the price; margin is profit as a share of price."
          }
        ]
      },
      {
        "label": "COMPUTED — A bid is $12,000 and the cost is $10,000. Enter the markup percent.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "est_markup_pct",
            "expected": 20,
            "hint": "(12,000 - 10,000) / 10,000 = 20%."
          }
        ]
      }
    ]
  }
];
