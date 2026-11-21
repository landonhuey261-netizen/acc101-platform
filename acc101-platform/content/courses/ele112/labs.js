module.exports = [
  {
    "id": "electrical-takeoff-material-estimate",
    "title": "Electrical Takeoff & Material Estimate",
    "introHtml": "<p><strong>Job ticket #1121 — Take off and price a small commercial fit-out.</strong> Customer: a landlord fitting out a 2,000-square-foot office in Lansing. The drawings show one floor, 12 offices and a break room. Your task: take off the devices and wire, price the materials from the unit prices given, and build the material summary — all on paper. This is a paper-and-calculation exercise: you are counting and pricing, not installing or proving hands-on skill. Read the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=1T0c6ZY95W8\" target=\"_blank\" rel=\"noopener\">Electrical Takeoff in Bluebeam Revu</a> — how a takeoff is done from drawings; watch it before you count.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any work on a real job: all practical work is de-energized, locked out and tagged out, and tested dead under a licensed supervisor, per NFPA 70E. Never work on live equipment. This lab is a paper exercise — no circuit is touched, no panel is opened, and nothing here proves hands-on skill.</p><p><strong>The job, as given:</strong> (1) The drawings show 48 duplex receptacles, 12 quad receptacles, 24 switches, and 36 LED fixtures. (2) Conduit runs measure 600 feet on the plans. (3) Wire runs measure 4,000 feet on the plans. (4) Unit prices (example prices for this exercise only — get real prices from a current supplier quote on a real job): duplex receptacle $3.50 each, quad receptacle $8.00 each, switch $4.00 each, LED fixture $45.00 each, conduit $1.20 a foot, wire $0.28 a foot. (5) Waste factor on wire and conduit: 10%. (6) Miscellaneous material allowance for the small stuff: 10% of the counted material total. (7) The panel schedule lists 12 circuits for this floor.</p><p><strong>Work the numbers before you answer:</strong> extended price = quantity × unit price; waste = measured × 1.10; miscellaneous allowance = counted total × 0.10; material total = counted total + allowance.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before any hands-on work on this fit-out, what must you remember? 1) Work live if the customer is in a hurry 2) All work is de-energized, locked out and tagged out, and tested dead under a licensed supervisor, per NFPA 70E — never work on live equipment 3) Gloves alone make live work safe 4) The permit is optional",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "to_safety",
            "expected": 2,
            "hint": "Step 0 governs: never work on live equipment. De-energize, lock out, tag out, test dead, under a licensed supervisor, per NFPA 70E."
          }
        ]
      },
      {
        "label": "COMPUTED — 48 duplex receptacles at $3.50 each. What is the extended price? (Enter the number of dollars.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "to_duplex",
            "expected": 168,
            "hint": "48 × $3.50 = $168."
          }
        ]
      },
      {
        "label": "COMPUTED — 12 quad receptacles at $8.00 each and 24 switches at $4.00 each. What is their combined extended price? (Enter the number of dollars.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "to_quad_switch",
            "expected": 192,
            "hint": "Quads: 12 × $8.00 = $96. Switches: 24 × $4.00 = $96. Combined: $96 + $96 = $192."
          }
        ]
      },
      {
        "label": "COMPUTED — 36 LED fixtures at $45.00 each. What is the extended price? (Enter the number of dollars.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "to_fixtures",
            "expected": 1620,
            "hint": "36 × $45.00 = $1,620."
          }
        ]
      },
      {
        "label": "COMPUTED — Conduit measures 600 feet on the plans, with a 10% waste factor. How many feet should the takeoff carry? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "to_conduit_ft",
            "expected": 660,
            "hint": "600 × 1.10 = 660 feet."
          }
        ]
      },
      {
        "label": "COMPUTED — 660 feet of conduit at $1.20 a foot. What is the extended price? (Enter the number of dollars.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "to_conduit",
            "expected": 792,
            "hint": "660 × $1.20 = $792."
          }
        ]
      },
      {
        "label": "COMPUTED — Wire measures 4,000 feet on the plans, with a 10% waste factor. How many feet should the takeoff carry? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "to_wire_ft",
            "expected": 4400,
            "hint": "4,000 × 1.10 = 4,400 feet."
          }
        ]
      },
      {
        "label": "COMPUTED — 4,400 feet of wire at $0.28 a foot. What is the extended price? (Enter the number of dollars.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "to_wire",
            "expected": 1232,
            "hint": "4,400 × $0.28 = $1,232."
          }
        ]
      },
      {
        "label": "COMPUTED — Add the counted items: receptacles $168, quads and switches $192, fixtures $1,620, conduit $792, wire $1,232. What is the counted material total? (Enter the number of dollars.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "to_counted",
            "expected": 4004,
            "hint": "$168 + $192 + $1,620 + $792 + $1,232 = $4,004."
          }
        ]
      },
      {
        "label": "COMPUTED — The miscellaneous allowance for the small stuff is 10% of the counted total of $4,004. What is the allowance? (Enter the number of dollars, rounded to the nearest whole dollar.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "to_misc",
            "expected": 400,
            "hint": "$4,004 × 0.10 = $400.40, rounded to $400."
          }
        ]
      },
      {
        "label": "COMPUTED — Counted total $4,004 plus miscellaneous allowance $400. What is the material total? (Enter the number of dollars.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "to_total",
            "expected": 4404,
            "hint": "$4,004 + $400 = $4,404."
          }
        ]
      },
      {
        "label": "DECISION — The material summary is done. What is the next step before the bid is submitted? 1) Submit the bid immediately 2) Review the summary: every item priced, every price from a named source, every allowance stated — then add labor, overhead, and profit to build the bid 3) Skip labor — materials are the whole bid 4) Guess the labor hours",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "to_close",
            "expected": 2,
            "hint": "The material summary is reviewed first, then labor, overhead, and profit are added to build the bid. Materials alone are not the bid, and labor is never guessed."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "bid-build-up",
    "title": "Bid Build-Up",
    "introHtml": "<p><strong>Job ticket #1122 — Build a bid from an estimate.</strong> Customer: the same Lansing office fit-out from the takeoff lab. The material total is $4,404 and the labor estimate is 120 hours at a burdened labor rate of $42 an hour. The shop's overhead rate is 20% of direct costs and the target profit is 10% of direct costs. Your task: build the bid, check the markup and margin, and write the bid's scope — all on paper. This is a paper-and-calculation exercise: you are pricing and writing, not installing or proving hands-on skill. Read the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=Kn--MZ5i_aw\" target=\"_blank\" rel=\"noopener\">Still Guessing Your Prices? Use This Profit Formula</a> — how markup, margin, overhead, and profit work; watch it before you build the bid.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any work on a real job: all practical work is de-energized, locked out and tagged out, and tested dead under a licensed supervisor, per NFPA 70E. Never work on live equipment. This lab is a paper exercise — no circuit is touched, no panel is opened, and nothing here proves hands-on skill.</p><p><strong>The job, as given:</strong> (1) Material total: $4,404. (2) Labor: 120 hours at a burdened labor rate of $42 an hour. (3) Overhead: 20% of direct costs. (4) Profit: 10% of direct costs. (5) The bid is a lump sum for the work shown on drawings E-101 through E-401. (6) The bid validity period is 30 days. (7) Retainage is 10% of each progress payment.</p><p><strong>Work the numbers before you answer:</strong> labor cost = hours × rate; direct costs = materials + labor; overhead = direct × 0.20; profit = direct × 0.10; bid = direct + overhead + profit; markup = (bid − cost) ÷ cost; margin = (bid − cost) ÷ bid.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before any hands-on work on this fit-out, what must you remember? 1) Work live if the schedule is tight 2) All work is de-energized, locked out and tagged out, and tested dead under a licensed supervisor, per NFPA 70E — never work on live equipment 3) Gloves alone make live work safe 4) The permit can wait",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bb_safety",
            "expected": 2,
            "hint": "Step 0 governs: never work on live equipment. De-energize, lock out, tag out, test dead, under a licensed supervisor, per NFPA 70E."
          }
        ]
      },
      {
        "label": "COMPUTED — Labor is 120 hours at a burdened rate of $42 an hour. What is the labor cost? (Enter the number of dollars.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bb_labor",
            "expected": 5040,
            "hint": "120 × $42 = $5,040."
          }
        ]
      },
      {
        "label": "COMPUTED — Materials $4,404 plus labor $5,040. What are the direct costs? (Enter the number of dollars.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bb_direct",
            "expected": 9444,
            "hint": "$4,404 + $5,040 = $9,444."
          }
        ]
      },
      {
        "label": "COMPUTED — Overhead is 20% of direct costs of $9,444. What is the overhead? (Enter the number of dollars, rounded to the nearest whole dollar.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bb_overhead",
            "expected": 1889,
            "hint": "$9,444 × 0.20 = $1,888.80, rounded to $1,889."
          }
        ]
      },
      {
        "label": "COMPUTED — Profit is 10% of direct costs of $9,444. What is the profit? (Enter the number of dollars, rounded to the nearest whole dollar.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bb_profit",
            "expected": 944,
            "hint": "$9,444 × 0.10 = $944.40, rounded to $944."
          }
        ]
      },
      {
        "label": "COMPUTED — Direct costs $9,444, overhead $1,889, profit $944. What is the bid price? (Enter the number of dollars.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bb_bid",
            "expected": 12277,
            "hint": "$9,444 + $1,889 + $944 = $12,277."
          }
        ]
      },
      {
        "label": "COMPUTED — The bid is $12,277 and the direct costs are $9,444. What is the markup as a percentage of direct costs? (Enter the number, rounded to one decimal place.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bb_markup",
            "expected": 30,
            "hint": "($12,277 − $9,444) ÷ $9,444 = $2,833 ÷ $9,444 = 0.30, or 30.0%. (Overhead 20% + profit 10% = 30% markup on direct costs.)"
          }
        ]
      },
      {
        "label": "COMPUTED — The bid is $12,277 and the profit plus overhead is $2,833. What is the margin as a percentage of the bid price? (Enter the number, rounded to one decimal place.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bb_margin",
            "expected": 23.1,
            "hint": "$2,833 ÷ $12,277 = 0.2308, or 23.1%. The markup is 30% on cost; the margin is 23.1% on price — they are different numbers."
          }
        ]
      },
      {
        "label": "DECISION — The customer asks for the site lighting, which is on sheet E-501 and was not in the bid. What is it, and how is it handled? 1) Part of the bid — do it for free 2) Outside the scope — a change order, priced separately, signed before the work is done 3) Part of the bid — the bid covers everything 4) Ignore the request",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bb_scope",
            "expected": 2,
            "hint": "The bid covers drawings E-101 through E-401; sheet E-501 is outside the scope. It is a change order, priced separately and signed before the work is done — never done on a verbal promise."
          }
        ]
      },
      {
        "label": "DECISION — The bid is ready. What must it state, and how long is the price good for? 1) Only the price 2) Scope, exclusions, terms, and validity — the price is good for 30 days 3) Only the scope 4) Nothing — a number is enough",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bb_terms",
            "expected": 2,
            "hint": "A bid is a document: scope, exclusions, terms, and validity period. This bid's price is good for 30 days, after which it may change because material prices move."
          }
        ]
      },
      {
        "label": "DECISION — The job is won and the first progress payment covers 50% of the $12,277 contract, with 10% retainage. How much is paid? 1) $6,138.50 2) $5,524.65 3) $12,277 4) $6,138.50 minus nothing",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bb_payment",
            "expected": 2,
            "hint": "Work completed: $12,277 × 0.50 = $6,138.50. Retainage: $6,138.50 × 0.10 = $613.85. Payment due: $6,138.50 − $613.85 = $5,524.65. The retainage is held until the job is complete and accepted."
          }
        ]
      }
    ],
    "passing": 70
  }
];
