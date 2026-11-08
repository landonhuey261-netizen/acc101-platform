// bus201 — Systems Selection lab.
// Each row is checked on a single numeric input in column 1: an option number, a step number, or a computed value.
module.exports = [
  {
    "id": "systems-selection",
    "title": "Systems Selection — Choose the Right System",
    "introHtml": "<p><strong>Case — Maple &amp; Main Bakery.</strong> A neighbourhood bakery with 6 staff takes 80 orders a day by phone, text, and walk-in. Orders are written on paper, stock is counted by eye, and the owner spends 6 hours a week re-keying orders into a spreadsheet. The bakery needs one system to replace the paper and the spreadsheet. Three options are on the table, and your task is to choose by scoring them against what the bakery actually needs — not by the sales pitch. Read the case in the task, then answer each decision row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=SaCYkPD4_K0\" target=\"_blank\" rel=\"noopener\">Software Development Life Cycle: Explained</a> — the same structured thinking this lab uses: understand the need first, then choose, then implement in steps.</p>",
    "taskHtml": "<p><strong>Step 0 — Read the case.</strong> Before any scoring or any buying: list what the bakery needs, and weight each need by how much it matters. The bakery's four needs, with their weights, are: <strong>Cost</strong> (weight 0.30), <strong>Ease of use</strong> (0.25), <strong>Inventory tracking</strong> (0.25), and <strong>Growth</strong> — room to add online ordering later (0.20). The weights add to 1.00. Each option is scored 1–5 on each need, and the weighted total is the score times the weight, added up. To keep the arithmetic in whole numbers, multiply each weight by 100: Cost 30, Ease 25, Inventory 25, Growth 20.</p><p><strong>The three options and their scores (1–5):</strong> Option 1 — Keep the spreadsheets: Cost 5, Ease 4, Inventory 2, Growth 1. Option 2 — QuickBooks Online + Square: Cost 4, Ease 5, Inventory 4, Growth 3. Option 3 — A full ERP system: Cost 1, Ease 2, Inventory 5, Growth 5.</p><p><strong>Costs:</strong> Option 2 costs $95 a month. Option 3 costs $1,800 a month. Option 2 needs a $600 one-off setup.</p><p><strong>The correct implementation order (for the order question):</strong> Step 1 — Set up the system and migrate the data. Step 2 — Test it with real orders. Step 3 — Train the team. Step 4 — Go live and check the first month. For each row, enter the option number, the step number, or the computed value asked for.</p><p><strong>Worked example — Bean &amp; Leaf Coffee Shop (do this first, then do the bakery yourself).</strong> The coffee shop uses the same weights (Cost 30, Ease 25, Inventory 25, Growth 20). Option A — spreadsheets: Cost 4, Ease 5, Inventory 2, Growth 2. Weighted total = (4 x 30) + (5 x 25) + (2 x 25) + (2 x 20) = 120 + 125 + 50 + 40 = <strong>335</strong>. Option B — a point-of-sale system: Cost 4, Ease 4, Inventory 5, Growth 4. Weighted total = (4 x 30) + (4 x 25) + (5 x 25) + (4 x 20) = 120 + 100 + 125 + 80 = <strong>425</strong>. Option B wins, because it scores where the weights are heaviest. Option B costs $60 a month, which is $60 x 12 = <strong>$720 a year</strong>. Now work the bakery the same way.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "FRAMING — What is the first step when choosing a system? 1) List the requirements and weight them 2) Buy the system with the best advert 3) Ask the salesperson what to buy 4) Copy what a competitor bought",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ss_framing",
            "expected": 1,
            "hint": "Step 0 governs: list what the business needs and weight each need before looking at options. An advert (2), a salesperson (3), or a competitor (4) chooses for someone else's needs, not yours."
          }
        ]
      },
      {
        "label": "COMPUTED — Option 1 (spreadsheets) scores Cost 5, Ease 4, Inventory 2, Growth 1, with weights 30, 25, 25, 20. What is its weighted total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ss_opt1",
            "expected": 320,
            "hint": "Weighted total = (5 x 30) + (4 x 25) + (2 x 25) + (1 x 20) = 150 + 100 + 50 + 20 = 320. Spreadsheets are cheap and easy, but they score badly on inventory and growth — and those weights are heavy."
          }
        ]
      },
      {
        "label": "COMPUTED — Option 2 (QuickBooks Online + Square) scores Cost 4, Ease 5, Inventory 4, Growth 3, with weights 30, 25, 25, 20. What is its weighted total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ss_opt2",
            "expected": 405,
            "hint": "Weighted total = (4 x 30) + (5 x 25) + (4 x 25) + (3 x 20) = 120 + 125 + 100 + 60 = 405. It scores well on every need, including the heavy ones."
          }
        ]
      },
      {
        "label": "COMPUTED — Option 3 (full ERP) scores Cost 1, Ease 2, Inventory 5, Growth 5, with weights 30, 25, 25, 20. What is its weighted total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ss_opt3",
            "expected": 305,
            "hint": "Weighted total = (1 x 30) + (2 x 25) + (5 x 25) + (5 x 20) = 30 + 50 + 125 + 100 = 305. The ERP is the best on inventory and growth, but its terrible cost and ease scores drag it down — and cost is the heaviest weight."
          }
        ]
      },
      {
        "label": "DECISION — Which option wins on the weighted totals? 1) Option 1 — spreadsheets 2) Option 2 — QuickBooks Online + Square 3) Option 3 — full ERP",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ss_choice",
            "expected": 2,
            "hint": "Option 2 scores 405, against 320 for Option 1 and 305 for Option 3. The highest weighted total wins — that is what the weights are for."
          }
        ]
      },
      {
        "label": "COMPUTED — Option 2 costs $95 a month. What does it cost per year? (Enter the number of dollars.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ss_annual",
            "expected": 1140,
            "hint": "$95 x 12 = $1,140 a year. Check it against the ERP's $1,800 a month before you decide the saving is small."
          }
        ]
      },
      {
        "label": "COMPUTED — The ERP costs $1,800 a month. How much does Option 2 save per year compared with the ERP? (Enter the number of dollars.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ss_saving",
            "expected": 20460,
            "hint": "ERP per year = $1,800 x 12 = $21,600. Saving = $21,600 - $1,140 = $20,460 a year — the price of the ERP's extra power that the bakery does not need yet."
          }
        ]
      },
      {
        "label": "COMPUTED — Option 2's 3-year total cost of ownership, including the $600 one-off setup, is: (Enter the number of dollars.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ss_tco",
            "expected": 4020,
            "hint": "Three years of subscription = $1,140 x 3 = $3,420; plus the $600 setup = $4,020. Total cost of ownership includes the setup, not just the monthly price."
          }
        ]
      },
      {
        "label": "ORDER — 'Train the team on the new system.' Which step of the implementation order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ss_ord_train",
            "expected": 3,
            "hint": "Order: 1 set up and migrate the data, 2 test with real orders, 3 train the team, 4 go live. Training comes after testing — the team should learn on a system that already works."
          }
        ]
      },
      {
        "label": "DECISION — The bakery has chosen Option 2. What should it do first? 1) Cancel all spreadsheets on day one 2) Set up the system, migrate the data, and test with real orders before going live 3) Buy the ERP as well, just in case 4) Wait a year and decide again",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ss_first",
            "expected": 2,
            "hint": "Implementation runs in order: set up, migrate, test, train, then go live. Cancelling the old system on day one (1) leaves nothing to fall back on, buying both (3) wastes the $20,460 a year just saved, and waiting (4) keeps the 6 hours a week of re-keying."
          }
        ]
      }
    ],
    "passing": 70
  }
];
