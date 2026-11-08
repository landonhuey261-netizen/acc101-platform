module.exports = [
  {
    "id": "policy-simulation-fiscal-vs-monetary",
    "title": "Policy Simulation — Fiscal vs. Monetary",
    "introHtml": "<p><strong>Case: Northfield (an example economy — all numbers are worked examples, not real-world statistics).</strong> Potential output is $2,000 billion, but actual output is only $1,800 billion — a recessionary gap of $200 billion. Unemployment is 7% against a natural rate of 5%, and inflation is 1% against 2% expected. The MPC is 0.8, so the simple spending multiplier is 1 ÷ (1 − 0.8) = 5. The interest rate is 6%, government debt is $1,200 billion, and the interest rate on the debt is 5%. The reserve ratio is 10%. Your task: choose the policy, size it, price what it costs, and check the side effects — decision by decision.</p><p><strong>Worked example first — the town of Riverdale (completed for you).</strong> Riverdale's gap was $100 billion and its MPC was 0.75, so its multiplier was 1 ÷ (1 − 0.75) = 4. It needed $100 ÷ 4 = $25 billion of extra spending to close the gap. It borrowed the $25 billion at 4%, so the new interest cost was 0.04 × 25 = $1 billion a year, and its debt rose from $800 billion to $825 billion. Notice the pattern you will repeat for Northfield: gap ÷ multiplier gives the spending needed, borrowing × interest rate gives the yearly interest cost, and old debt + new borrowing gives the new debt. Now do Northfield yourself below.</p>",
    "taskHtml": "<p><strong>Step 0 — Read the case.</strong> Northfield is in a recessionary gap: output $1,800bn against potential $2,000bn, unemployment 2 points above its natural rate, inflation below expectations. There is slack — idle workers and idle factories — so demand stimulus can raise output, not just prices. Fiscal policy (government spending and taxes) works through the multiplier and adds to the debt. Monetary policy (the central bank cutting rates) works through cheaper borrowing and a weaker currency, but takes a year or two. For each row, enter the option number or the computed value asked for. The first scored row is the framing decision: which policy should Northfield use first?</p><p><strong>The numbers to use (all from the case):</strong> gap $200bn · MPC 0.8 · multiplier 5 · tax multiplier −4 · interest rate on new borrowing 5% · debt $1,200bn · reserve ratio 10%.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "FRAMING DECISION — Step 0: Northfield's gap is $200bn with idle workers and a 6% interest rate. Which policy should it use first? 1) Fiscal expansion — raise government spending 2) Monetary tightening — raise interest rates 3) Do nothing and wait for wages to fall",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sim_framing",
            "expected": 1,
            "hint": "A $200bn recessionary gap with idle resources calls for more demand, and fiscal spending acts fastest. Tightening (2) would deepen the recession, and waiting (3) lets unemployment scar workers while wages adjust slowly."
          }
        ]
      },
      {
        "label": "COMPUTED — The MPC is 0.8. What is the simple spending multiplier? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sim_multiplier",
            "expected": 5,
            "hint": "Multiplier = 1 ÷ (1 − MPC) = 1 ÷ (1 − 0.8) = 1 ÷ 0.2 = 5. Each dollar of spending becomes five dollars of output once all the re-spending rounds are counted."
          }
        ]
      },
      {
        "label": "COMPUTED — The gap is $200bn and the multiplier is 5. How much extra government spending is needed to close the gap? (Enter the $bn amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sim_spending",
            "expected": 40,
            "hint": "Spending needed = gap ÷ multiplier = 200 ÷ 5 = $40bn. Check: 40 × 5 = 200, exactly the gap."
          }
        ]
      },
      {
        "label": "COMPUTED — Output is $1,800bn and the stimulus adds $200bn of output. What is output after the stimulus? (Enter the $bn amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sim_gdp",
            "expected": 2000,
            "hint": "1,800 + 200 = $2,000bn — exactly potential output. The gap is closed, at least in the simple model."
          }
        ]
      },
      {
        "label": "DECISION — Fiscal expansion raises demand and the government borrows to pay for it. What happens to the interest rate? 1) It rises, crowding out some private investment 2) It falls 3) It stays exactly the same",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sim_rate",
            "expected": 1,
            "hint": "Government borrowing tightens the loanable-funds market, so the rate rises and some private investment is crowded out — which is why the real gain is smaller than the simple multiplier promises."
          }
        ]
      },
      {
        "label": "COMPUTED — Instead, the central bank buys $10bn of bonds and the reserve ratio is 10%. By how much can the money supply rise? (Enter the $bn amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sim_money",
            "expected": 100,
            "hint": "Multiplier = 1 ÷ 0.10 = 10, so the money supply can rise by 10 × $10bn = $100bn. More money pushes the interest rate down and investment up."
          }
        ]
      },
      {
        "label": "COMPUTED — The government borrows the $40bn at 5% interest. What is the annual interest cost of the new borrowing? (Enter the $bn amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sim_interest",
            "expected": 2,
            "hint": "0.05 × 40 = $2bn a year, every year, until the borrowing is repaid. That is the price of the stimulus, on top of the $40bn itself."
          }
        ]
      },
      {
        "label": "COMPUTED — Debt is $1,200bn and the government borrows $40bn more. What is the debt at year-end? (Enter the $bn amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sim_debt",
            "expected": 1240,
            "hint": "1,200 + 40 = $1,240bn. The deficit is this year's shortfall; the debt is the pile, and it grew by the full $40bn."
          }
        ]
      },
      {
        "label": "DECISION — Fiscal expansion raises U.S. interest rates. What happens to the dollar and to net exports? 1) The dollar appreciates and net exports fall 2) The dollar depreciates and net exports rise 3) Nothing changes",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sim_fx",
            "expected": 1,
            "hint": "Higher rates attract foreign capital, demand for dollars rises, and the dollar appreciates — making exports dearer and imports cheaper, so net exports fall and part of the stimulus leaks abroad."
          }
        ]
      },
      {
        "label": "DECISION — Which policy acts fastest on demand? 1) Monetary policy — rate cuts work through banks and borrowers 2) Fiscal policy — new spending hits demand directly once voted 3) They act at exactly the same speed",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sim_fastest",
            "expected": 2,
            "hint": "Fiscal spending, once voted, is demand at once — the government buys things. Monetary easing must travel through banks, borrowing, and investment, with lags of a year or two. (Fiscal policy's own lag is in the voting, not the spending.)"
          }
        ]
      },
      {
        "label": "COMPUTED — Instead of spending, Northfield cuts taxes. The tax multiplier is −4 and the gap is $200bn. How big a tax cut is needed? (Enter the $bn amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sim_taxcut",
            "expected": 50,
            "hint": "Tax cut needed = 200 ÷ 4 = $50bn — more than the $40bn spending rise, because households save part of the cut before spending the rest."
          }
        ]
      },
      {
        "label": "DECISION — The gap is closed, the debt is $1,240bn, and rates have risen. What is the best next step? 1) A policy mix — keep the stimulus, let monetary easing offset the rate rise 2) Borrow $200bn more immediately 3) Raise taxes sharply while still in the gap",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sim_next",
            "expected": 1,
            "hint": "A mix uses each tool for what it does best: fiscal spending closed the gap, and monetary easing can offset the rate rise that crowded investment out. Borrowing $200bn more (2) would overshoot the gap, and sharp tax rises (3) would reopen it."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "policy-simulation-fiscal-vs-monetary.csv",
    "csv": "Decision point,Your call\n\"FRAMING DECISION — Step 0: Northfield's gap is $200bn with idle workers and a 6% interest rate. Which policy should it use first? 1) Fiscal expansion — raise government spending 2) Monetary tightening — raise interest rates 3) Do nothing and wait for wages to fall\",\n\"COMPUTED — The MPC is 0.8. What is the simple spending multiplier? (Enter the number.)\",\n\"COMPUTED — The gap is $200bn and the multiplier is 5. How much extra government spending is needed to close the gap? (Enter the $bn amount.)\",\n\"COMPUTED — Output is $1,800bn and the stimulus adds $200bn of output. What is output after the stimulus? (Enter the $bn amount.)\",\n\"DECISION — Fiscal expansion raises demand and the government borrows to pay for it. What happens to the interest rate? 1) It rises, crowding out some private investment 2) It falls 3) It stays exactly the same\",\n\"COMPUTED — Instead, the central bank buys $10bn of bonds and the reserve ratio is 10%. By how much can the money supply rise? (Enter the $bn amount.)\",\n\"COMPUTED — The government borrows the $40bn at 5% interest. What is the annual interest cost of the new borrowing? (Enter the $bn amount.)\",\n\"COMPUTED — Debt is $1,200bn and the government borrows $40bn more. What is the debt at year-end? (Enter the $bn amount.)\",\n\"DECISION — Fiscal expansion raises U.S. interest rates. What happens to the dollar and to net exports? 1) The dollar appreciates and net exports fall 2) The dollar depreciates and net exports rise 3) Nothing changes\",\n\"DECISION — Which policy acts fastest on demand? 1) Monetary policy — rate cuts work through banks and borrowers 2) Fiscal policy — new spending hits demand directly once voted 3) They act at exactly the same speed\",\n\"COMPUTED — Instead of spending, Northfield cuts taxes. The tax multiplier is −4 and the gap is $200bn. How big a tax cut is needed? (Enter the $bn amount.)\",\n\"DECISION — The gap is closed, the debt is $1,240bn, and rates have risen. What is the best next step? 1) A policy mix — keep the stimulus, let monetary easing offset the rate rise 2) Borrow $200bn more immediately 3) Raise taxes sharply while still in the gap\",\n"
  }
];
