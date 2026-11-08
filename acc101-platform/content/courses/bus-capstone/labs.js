// Business Capstone — labs.js (original practice content)
module.exports = [
  {
    "id": "strategy-simulation",
    "title": "Business Strategy Simulation — Running the Company",
    "introHtml": "<p><strong>Case: Maple Street Mobile Bike Repair, one quarter, four monthly rounds.</strong> You run the company. Each round you set price, how many tune-ups to prepare for, and marketing spend — then the round reports demand, sales, and profit, computed from the same formulas as the rest of the course. This is <strong>decision rounds on the lab grid, built for this course</strong>. It is <strong>not</strong> Ferris State's licensed computer simulation (the kind used in BUSN 499), and it is never presented as the same tool: there is no licensed software here, only the grid below and the numbers you compute. Your strategy is differentiation with a focus on e-bike riders and office fleets: next-day mobile service with a 30-day guarantee, at $65 a tune-up. Fixed costs are $3,600 a month; variable cost starts at $20 a tune-up.</p><p><strong>Demand table (jobs per month):</strong> at $65, 100 jobs; at $60, 100 jobs when a rival has cut to $55 (80 jobs if you hold $65 against the rival's $55); at $55, 105 jobs. In Round 3 variable cost rises to $23. In Round 4 demand rises by a third to 133 jobs, but capacity is 132 jobs a month — one technician, 6 a day, 22 days.</p>",
    "taskHtml": "<p><strong>Step 0 — Read the case.</strong> Before any decision: read the case in the intro, note the strategy (differentiation with an e-bike and fleet focus), the starting numbers (price $65, variable cost $20, fixed costs $3,600 a month, marketing $500 a month), and what good looks like: a quarter that ends in profit, with the strategy still intact — not the most jobs, and not the lowest price. The first scored row is the framing decision: which strategy the company is running. Then work the four rounds in order, computing each round's profit as (price − variable cost) × jobs − fixed costs − marketing. A round that wins volume and loses profit is a warning, not a victory.</p><p><strong>Round 1 (baseline):</strong> price $65, variable cost $20, 100 jobs, marketing $500. <strong>Round 2 (rival cuts to $55):</strong> hold $65 and demand falls to 80 jobs; cut to $60 and demand is 100 jobs; match $55 and demand is 105 jobs. <strong>Round 3 (parts prices rise):</strong> variable cost $23, price $65, 100 jobs, marketing $500. <strong>Round 4 (spring peak):</strong> demand 133 jobs, capacity 132, price $65, variable cost $20, marketing $500. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "FRAMING — Step 0: Which strategy is Maple Street running? 1) Cost leadership — be the cheapest 2) Differentiation — next-day mobile service with a guarantee 3) Differentiation with a focus on e-bike riders and office fleets 4) Compete on everything at once",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sim_strategy",
            "expected": 3,
            "hint": "The plan's strategy is differentiation with a focus: the most convenient repair for riders who value time, starting with e-bike and fleet customers who pay for reliability. Cost leadership (1) fails for a one-van business, and 'everything at once' (4) is not a strategy."
          }
        ]
      },
      {
        "label": "COMPUTED — Round 1: price $65, variable cost $20, 100 jobs, fixed costs $3,600, marketing $500. What is Round 1 profit in dollars? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sim_r1",
            "expected": 400,
            "hint": "Contribution is $65 − $20 = $45. 100 × $45 = $4,500; $4,500 − $3,600 − $500 = $400."
          }
        ]
      },
      {
        "label": "DECISION — Round 2: the rival cuts to $55. Which response loses the least? 1) Hold $65 (80 jobs) 2) Match $55 (105 jobs) 3) Cut to $60 (100 jobs) 4) Raise to $70",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sim_r2_choice",
            "expected": 3,
            "hint": "Hold: 80 × $45 − $3,600 − $500 = −$500. Match: 105 × $35 − $3,600 − $500 = −$425. Cut to $60: 100 × $40 − $3,600 − $500 = −$100 — the smallest loss. Raising (4) loses more volume still."
          }
        ]
      },
      {
        "label": "COMPUTED — Round 2 at $60: how many dollars does the round LOSE? (Enter the loss as a positive number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sim_r2_loss",
            "expected": 100,
            "hint": "Contribution is $60 − $20 = $40. 100 × $40 = $4,000; $4,000 − $3,600 − $500 = −$100, a loss of $100. The rival's cut hurt either way — a price war hurts both sides."
          }
        ]
      },
      {
        "label": "COMPUTED — Round 3: variable cost rises to $23, price $65, 100 jobs, fixed costs $3,600, marketing $500. What is Round 3 profit in dollars? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sim_r3",
            "expected": 100,
            "hint": "Contribution is $65 − $23 = $42. 100 × $42 = $4,200; $4,200 − $3,600 − $500 = $100."
          }
        ]
      },
      {
        "label": "DECISION — Round 3: variable cost is now $23 and profit is thin. Best next move? 1) Raise the price to $68 and renegotiate parts with the second supplier 2) Do nothing and hope 3) Cut the price to $60 4) Stop all marketing",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sim_r3_choice",
            "expected": 1,
            "hint": "Raising to $68 restores contribution to $45 and renegotiating parts attacks the cause. Doing nothing (2) accepts a thinner margin. Cutting price (3) cuts contribution further. Stopping marketing (4) cuts the demand the business needs."
          }
        ]
      },
      {
        "label": "COMPUTED — Round 3 break-even: with variable cost $23 (contribution $42), fixed costs $3,600, and marketing $500, how many jobs a month break even? (Round up to a whole job.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sim_r3_be",
            "expected": 98,
            "hint": "Break-even jobs = ($3,600 + $500) ÷ $42 = 4,100 ÷ 42 = 97.6, so 98 jobs — 18 more than the 80 needed when variable cost was $20."
          }
        ]
      },
      {
        "label": "COMPUTED — Round 4: demand is 133 jobs but capacity is 132. Price $65, variable cost $20, marketing $500. What is Round 4 profit in dollars? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sim_r4",
            "expected": 1840,
            "hint": "Only 132 jobs can be done. 132 × $45 = $5,940; $5,940 − $3,600 − $500 = $1,840. One job of demand is turned away — the peak is the most profitable round and the signal to add capacity."
          }
        ]
      },
      {
        "label": "DECISION — Round 4: demand (133) is above capacity (132). Best move? 1) Raise the price and let the price ration demand 2) Turn customers away silently 3) Work beyond capacity with no plan 4) Cut marketing in the peak",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sim_r4_choice",
            "expected": 1,
            "hint": "Raising the price in a peak rations demand to capacity and earns more per job. Turning customers away silently (2) loses them without earning anything. Working beyond capacity with no plan (3) breaks the quality promise. Cutting marketing (4) in the peak wastes the best demand of the year."
          }
        ]
      },
      {
        "label": "COMPUTED — The whole quarter: Round 1 profit $400, Round 2 loss $100, Round 3 profit $100, Round 4 profit $1,840. What is total profit for the four rounds in dollars? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sim_total",
            "expected": 2240,
            "hint": "$400 − $100 + $100 + $1,840 = $2,240. The quarter is profitable because the spring peak outweighs the rival's price cut — and because the strategy held."
          }
        ]
      },
      {
        "label": "COMPUTED — Margin of safety: planned volume is 100 jobs a month and break-even is 80. What is the margin of safety as a percentage? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sim_mos",
            "expected": 20,
            "hint": "(100 − 80) ÷ 100 = 20%. The business can lose a fifth of planned volume and still break even."
          }
        ]
      },
      {
        "label": "DECISION — Which round was the most profitable? 1) Round 1 2) Round 2 3) Round 3 4) Round 4",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sim_best",
            "expected": 4,
            "hint": "Round 4 made $1,840 — more than Rounds 1, 2, and 3 combined ($400 − $100 + $100 = $400). The peak, not the price war, is where the money is."
          }
        ]
      },
      {
        "label": "DECISION — The debrief: what is the main lesson of the quarter? 1) Always match a rival's price cut 2) Volume that loses money is not growth, and capacity — not demand — set the limit in the peak 3) Marketing should stop in a price war 4) The strategy should change every round",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sim_lesson",
            "expected": 2,
            "hint": "Round 2 showed that chasing volume in a price war loses money, and Round 4 showed capacity binding before demand. Matching (1) lost more than cutting to $60. Stopping marketing (3) would cut demand further. Changing strategy every round (4) is not a strategy at all."
          }
        ]
      }
    ],
    "passing": 70
  }
];
