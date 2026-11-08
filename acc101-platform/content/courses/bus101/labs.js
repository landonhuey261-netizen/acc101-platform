module.exports = [
  {
    "id": "business-model-canvas-walkthrough",
    "title": "The Business Model Canvas Walkthrough",
    "introHtml": "<p><strong>Case: Corner Cup Coffee Cart.</strong> Two partners run a coffee cart as an LLC, split profit 50/50, and sell to office workers on their morning commute. The cart sells 40 cups a day at $4.50 a cup, with a variable cost of $1.50 a cup and fixed costs of $1,800 a month (rent, permits, insurance, wages). Your task: build Corner Cup's one-page Business Model Canvas, decision by decision, and check the numbers that prove the model works. Read the case in the task, then answer each decision row.</p><p><strong>Worked example first — Maple Street Lawn Care (completed for you).</strong> Price $45 per visit, variable cost $15 per visit, so contribution is $45 − $15 = $30 per visit. Fixed costs are $900 a month, so break-even is $900 ÷ $30 = 30 visits a month. At 60 visits a month, revenue is 60 × $45 = $2,700, variable cost is 60 × $15 = $900, and profit is $2,700 − $900 − $900 = $900 a month. Notice the pattern you will repeat for Corner Cup: price minus variable cost gives contribution, fixed costs divided by contribution gives break-even, and revenue minus all costs gives profit. Now do Corner Cup yourself below.</p>",
    "taskHtml": "<p><strong>Step 0 — Read the case.</strong> Corner Cup is a coffee cart, not a café: no seats, no kitchen, just a cart at the entrance of an office building. Its customers are office workers who want great coffee in two minutes on their way to work. Its promise is speed plus quality — “great coffee, ready in 2 minutes, $4.50.” Its costs are $1.50 of beans, milk, and cups per cup sold, and $1,800 a month of fixed costs. A good canvas fits on one page: nine blocks (customer segments, value proposition, channels, customer relationships, revenue streams, key resources, key activities, key partners, cost structure) that all point at the same customer. For each row, enter the option number or the computed value asked for. The first scored row is the framing decision: who is the customer?</p><p><strong>The canvas, block by block (for the decision rows):</strong> (1) Customer segments — office workers on the morning commute. (2) Value proposition — great coffee in 2 minutes for $4.50. (3) Channels — the cart itself, at the office building entrance. (4) Customer relationships — fast, friendly, remembers regulars' orders. (5) Revenue streams — per-cup sales at $4.50. (6) Key resources — the cart, the espresso machine, the barista. (7) Key activities — brewing, serving, restocking, cleaning. (8) Key partners — the local roaster who delivers beans reliably. (9) Cost structure — $1.50 variable cost per cup plus $1,800 fixed a month.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "FRAMING DECISION — Step 0: Who should Corner Cup serve first? 1) Office workers on the morning commute 2) Late-night bar crowds 3) Tourists at the park",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "canvas_framing",
            "expected": 1,
            "hint": "The cart sits at an office building entrance and sells speed in the morning — office workers are the segment the location, hours, and promise are built for. The bar crowd (2) is out when the cart is closed, and tourists (3) are seasonal and scattered."
          }
        ]
      },
      {
        "label": "DECISION — Which value proposition fits Corner Cup best? 1) Great coffee in 2 minutes for $4.50 2) The cheapest coffee in the city, any time of day 3) A full café menu with table service",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "canvas_value",
            "expected": 1,
            "hint": "The cart's promise is speed plus quality at a fair price — that is what office workers pay for. (2) promises cheapness the cart cannot deliver at $1.50 a cup, and (3) describes a café, not a cart."
          }
        ]
      },
      {
        "label": "COMPUTED — Corner Cup sells 40 cups a day at $4.50. What is its daily revenue? (Enter the dollar amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "canvas_daily_rev",
            "expected": 180,
            "hint": "Daily revenue = 40 × $4.50 = $180. Multiply cups by price — and check: 40 × $4 = $160 plus 40 × $0.50 = $20, for $180."
          }
        ]
      },
      {
        "label": "COMPUTED — Daily revenue is $180 and the cart trades 30 days a month. What is its monthly revenue? (Enter the dollar amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "canvas_monthly_rev",
            "expected": 5400,
            "hint": "Monthly revenue = $180 × 30 = $5,400. Thirty days at $180 a day."
          }
        ]
      },
      {
        "label": "COMPUTED — Price is $4.50 and variable cost is $1.50 a cup. What is the contribution per cup? (Enter the dollar amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "canvas_contribution",
            "expected": 3,
            "hint": "Contribution = $4.50 − $1.50 = $3.00 per cup. Each cup sold contributes $3 toward the $1,800 of fixed costs and then toward profit."
          }
        ]
      },
      {
        "label": "COMPUTED — Fixed costs are $1,800 a month and contribution is $3.00 a cup. How many cups a month must Corner Cup sell to break even? (Enter the number of cups.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "canvas_breakeven",
            "expected": 600,
            "hint": "Break-even units = $1,800 ÷ $3.00 = 600 cups a month. Check: 600 × $3 = $1,800, exactly the fixed costs."
          }
        ]
      },
      {
        "label": "COMPUTED — Break-even is 600 cups a month over 30 trading days. How many cups a day is that? (Enter the number of cups.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "canvas_breakeven_day",
            "expected": 20,
            "hint": "600 ÷ 30 = 20 cups a day. The cart sells 40 a day — double its break-even — which is why it earns a profit."
          }
        ]
      },
      {
        "label": "COMPUTED — Monthly revenue is $5,400, monthly variable cost is 40 × $1.50 × 30 = $1,800, and fixed costs are $1,800. What is the monthly profit? (Enter the dollar amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "canvas_profit",
            "expected": 1800,
            "hint": "Profit = $5,400 − $1,800 − $1,800 = $1,800 a month. Split 50/50, each partner receives $900."
          }
        ]
      },
      {
        "label": "DECISION — Which channel fits Corner Cup? 1) The cart at the office building entrance 2) A mail-order catalog 3) Television advertising",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "canvas_channel",
            "expected": 1,
            "hint": "The channel is where the customer already is — the office entrance in the morning. A catalog (2) cannot sell hot coffee, and TV ads (3) cost more than the cart earns."
          }
        ]
      },
      {
        "label": "DECISION — Which key partner matters most to Corner Cup? 1) The local roaster who delivers beans reliably 2) A billboard company 3) A cruise line",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "canvas_partner",
            "expected": 1,
            "hint": "No beans, no business — a reliable roaster is the partner the whole model depends on. A billboard (2) is advertising, not a partner, and a cruise line (3) has nothing to do with a commuter coffee cart."
          }
        ]
      },
      {
        "label": "DECISION — Which revenue stream is Corner Cup's? 1) Per-cup sales at $4.50 2) Annual memberships only 3) Selling the cart itself",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "canvas_revenue",
            "expected": 1,
            "hint": "The cart earns money one cup at a time — per-cup sales are the revenue stream. Memberships (2) could be added later, but they are not the model today, and selling the cart (3) is an exit, not a revenue stream."
          }
        ]
      },
      {
        "label": "DECISION — Which of these costs is a FIXED cost for Corner Cup? 1) Rent and permits, $1,800 a month 2) Beans and milk, $1.50 a cup 3) Cups, $0.20 each",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "canvas_fixed",
            "expected": 1,
            "hint": "Rent and permits are $1,800 a month whether the cart sells 20 cups or 200 — that is fixed. Beans, milk, and cups (2 and 3) change with every cup sold, so they are variable."
          }
        ]
      },
      {
        "label": "COMPUTED — If Corner Cup sells 50 cups a day instead of 40, at the same $4.50 price, what is its monthly revenue over 30 days? (Enter the dollar amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "canvas_growth_rev",
            "expected": 6750,
            "hint": "Daily revenue becomes 50 × $4.50 = $225; monthly revenue is $225 × 30 = $6,750. Ten extra cups a day adds $45 a day, or $1,350 a month."
          }
        ]
      },
      {
        "label": "DECISION — The canvas is built and the numbers check out. What should the partners do first next month? 1) Track which hours sell most and adjust opening hours to match 2) Buy a second cart immediately 3) Cut the price in half to win more customers",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "canvas_next",
            "expected": 1,
            "hint": "Measure first, then invest: knowing the busiest hours tells the partners where the next dollar is earned. A second cart (2) doubles fixed costs before the first cart's pattern is understood, and halving the price (3) cuts the $3 contribution to $0.75 a cup, which would need 2,400 cups a month to break even."
          }
        ]
      }
    ],
    "passing": 70
  }
];
