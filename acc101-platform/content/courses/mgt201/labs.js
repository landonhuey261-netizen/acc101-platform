// mgt201 — Operations & Quality lab.
// Each row is checked on a single numeric input in column 1: an option number, a step number, or a computed value.
module.exports = [
  {
    "id": "operations-and-quality",
    "title": "Operations & Quality — EOQ and Process Improvement",
    "introHtml": "<p><strong>Case — Ridgeview Bike Parts.</strong> A small factory makes bicycle parts. Its best-selling part is a gear hub: annual demand is 12,000 units, each order costs $60 to place, and holding one unit for a year costs $4. Daily demand averages 80 units with a standard deviation of 12, the supplier takes 5 days to deliver, and the factory wants a 95% service level (z = 1.65). At the same time, the factory is planning a small improvement project with five activities, and it measures a part that must be 10.0 mm plus or minus 0.5 mm. Your task: size the orders, set the reorder point, schedule the project, and check the capability. Read the case in the task, then answer each decision row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=avwz_sO9eyw\" target=\"_blank\" rel=\"noopener\">Inventory Management: Economic Order Quantity (EOQ) Model Video 1</a> — the EOQ model worked through with examples, the same formula this lab uses.</p>",
    "taskHtml": "<p><strong>Step 0 — Read the case.</strong> Before any calculation: work out what the first number to compute is. The factory's problem is that it orders by gut feel — sometimes a year's supply, sometimes a handful — and it stocks out on busy weeks. The fix starts with the EOQ: the order size that minimises ordering plus holding cost. The formulas you need are: <strong>EOQ = the square root of (2 x D x S / H)</strong>, where D is annual demand, S is the ordering cost per order, and H is the holding cost per unit per year. <strong>Orders per year = D / EOQ.</strong> <strong>Total relevant cost = annual ordering cost + annual holding cost.</strong> <strong>Safety stock = z x standard deviation of daily demand x the square root of the lead time.</strong> <strong>Reorder point = (average daily demand x lead time) + safety stock.</strong></p><p><strong>The improvement project.</strong> Five activities: A — Plan the change (2 days), B — Order new tooling (5 days, after A), C — Rearrange the line (4 days, after A), D — Install and test (3 days, after C), E — Train and restart (4 days, after B and D). Two chains run from A to E: A to B to E, and A to C to D to E.</p><p><strong>The measured part.</strong> Specification 10.0 mm plus or minus 0.5 mm. Process mean 10.0 mm, standard deviation 0.1 mm. For the capability row, count how many standard deviations lie between the process mean and the nearest specification limit.</p><p><strong>Worked example — a hardware store (do this first, then do Ridgeview yourself).</strong> Annual demand D = 10,000 units, ordering cost S = $72, holding cost H = $9. Step 1: EOQ = the square root of (2 x 10,000 x 72 / 9) = the square root of 160,000 = <strong>400 units</strong>. Step 2: orders per year = 10,000 / 400 = <strong>25 orders</strong>. Step 3: ordering cost = 25 x $72 = $1,800; holding cost = (400 / 2) x $9 = $1,800; total relevant cost = <strong>$3,600</strong>. Notice the two costs are equal — that is how you know the calculation is right. And a worked safety stock: daily demand 50 units with a standard deviation of 10, lead time 4 days, 97.5% service (z = 1.96). Safety stock = 1.96 x 10 x the square root of 4 = 1.96 x 10 x 2 = 39.2, rounded up to <strong>40 units</strong>; reorder point = (50 x 4) + 40 = <strong>240 units</strong>. Now work Ridgeview the same way.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "FRAMING — What is the first calculation to make? 1) Compute the EOQ from demand, ordering cost, and holding cost 2) Order a year's supply while it is cheap 3) Count the stock on the shelves 4) Call the supplier and ask what to order",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "oq_framing",
            "expected": 1,
            "hint": "Step 0 governs: the order size is a calculation from demand, ordering cost, and holding cost — not a guess, not a year's supply (2), and not the supplier's decision (4). Counting stock (3) tells you what you have, not what to order."
          }
        ]
      },
      {
        "label": "COMPUTED — The gear hub: annual demand 12,000, ordering cost $60, holding cost $4. What is the EOQ? (Enter the number of units.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "oq_eoq",
            "expected": 600,
            "hint": "EOQ = the square root of (2 x 12,000 x 60 / 4) = the square root of 360,000 = 600 units. Check it against the worked example: same shape, different numbers."
          }
        ]
      },
      {
        "label": "COMPUTED — How many orders a year does the EOQ give? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "oq_orders",
            "expected": 20,
            "hint": "Orders per year = 12,000 / 600 = 20. If you got a different number, re-check the EOQ first — the orders follow from it."
          }
        ]
      },
      {
        "label": "COMPUTED — What is the total relevant cost per year at the EOQ? (Enter the number of dollars.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "oq_trc",
            "expected": 2400,
            "hint": "Ordering cost = 20 x $60 = $1,200; holding cost = (600 / 2) x $4 = $1,200; total = $2,400. The two costs are equal at the EOQ — if they are not, the EOQ is wrong."
          }
        ]
      },
      {
        "label": "COMPUTED — Safety stock: standard deviation of daily demand 12, lead time 5 days, 95% service (z = 1.65). What is the safety stock, rounded up? (Enter the number of units.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "oq_ss",
            "expected": 45,
            "hint": "Safety stock = 1.65 x 12 x the square root of 5 = 1.65 x 12 x 2.236 = 44.27, rounded up to 45. Round up — safety stock is insurance, and rounding down leaves the factory short."
          }
        ]
      },
      {
        "label": "COMPUTED — Reorder point: average daily demand 80 units, lead time 5 days, safety stock 45. What is the reorder point? (Enter the number of units.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "oq_rop",
            "expected": 445,
            "hint": "Reorder point = (80 x 5) + 45 = 400 + 45 = 445. Order 600 units whenever stock falls to 445 — not when it is nearly gone."
          }
        ]
      },
      {
        "label": "COMPUTED — The improvement project: A(2), B(5 after A), C(4 after A), D(3 after C), E(4 after B and D). What is the critical path duration, in days? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "oq_cp",
            "expected": 13,
            "hint": "Chains: A to B to E = 2 + 5 + 4 = 11 days; A to C to D to E = 2 + 4 + 3 + 4 = 13 days. The longer chain is the critical path, and its length — 13 days — is the project duration."
          }
        ]
      },
      {
        "label": "COMPUTED — In the same project, what is the float of activity B, in days? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "oq_float",
            "expected": 2,
            "hint": "B starts at day 2 and must finish by day 9 (E starts at day 9), so its late start is 9 - 5 = 4. Float = 4 - 2 = 2 days. B can slip by two days without delaying the project."
          }
        ]
      },
      {
        "label": "COMPUTED — The part: specification 10.0 mm plus or minus 0.5 mm, process mean 10.0 mm, standard deviation 0.1 mm. How many standard deviations lie between the mean and the nearest specification limit? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "oq_cap",
            "expected": 5,
            "hint": "The nearest limit is 0.5 mm from the mean; 0.5 / 0.1 = 5 standard deviations. That gives Cpk = 5 / 3, about 1.67 — a capable process, because the mean is centred and the spread fits comfortably."
          }
        ]
      },
      {
        "label": "DECISION — The bottleneck is the welding station (9 minutes a unit) and it sits on the critical path. The project can fix the bottleneck or fix a non-critical step. Correct call? 1) Fix the non-critical step — it is cheaper 2) Fix the bottleneck on the critical path — only that shortens the project 3) Fix both at once regardless of cost 4) Do nothing",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "oq_bottleneck",
            "expected": 2,
            "hint": "Only the critical path sets the duration — fixing a non-critical step (1) changes nothing, because it has float. Fix the bottleneck, then recalculate, because the critical path can change."
          }
        ]
      },
      {
        "label": "DECISION — What should Ridgeview do first? 1) Order 600 units when stock falls to 445, and start the critical-path improvement on the bottleneck 2) Order a year's supply now 3) Stop measuring quality and trust the operators 4) Change supplier without checking the new one",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "oq_first",
            "expected": 1,
            "hint": "The plan is the numbers: EOQ ordering at the reorder point, and the critical-path improvement on the bottleneck. A year's supply (2) wastes holding cost, stopping measurement (3) removes the only warning, and an unchecked supplier (4) is a new risk, not a fix."
          }
        ]
      }
    ],
    "passing": 70
  }
];
