module.exports = [
  {
    "id": "elasticity-and-market-outcomes",
    "title": "Elasticity & Market Outcomes",
    "introHtml": "<p><strong>Case: Ridge Coffee, a small coffee roaster (example numbers).</strong> Ridge sells coffee beans at $5 a bag and sells 1,000 bags a month. It raises the price to $6 a bag and sales fall to 700 bags a month. Meanwhile the price of tea rises 25% and Ridge's sales rise 10% at the same coffee price; incomes in town rise 20% and Ridge's sales rise 30%; and when the bean price rises 20%, Ridge's suppliers offer 20% more beans. Your task: compute the elasticities, classify them, and predict what happens if Ridge raises its price again. Read the case in the task, then answer each decision row.</p><p><strong>Method note — read this first.</strong> This lab uses the <strong>simple percentage-change method</strong> (change divided by the starting value), because it gives clean numbers for the grid. The modules teach the midpoint method, which is the textbook standard; the two methods answer the same question slightly differently, and every question in this lab states which one to use. Do not mix them in one calculation.</p><p><strong>Worked example first — Maple Tea (completed for you).</strong> Maple Tea sells tea at $4 a cup and sells 200 cups a day. It raises the price to $5 and sells 160 cups. Price change: (5 − 4) ÷ 4 = +25%. Quantity change: (160 − 200) ÷ 200 = −20%. Price elasticity of demand = −20% ÷ 25% = −0.8 — inelastic, because |−0.8| is below 1. Total revenue before: 4 × 200 = $800. Total revenue after: 5 × 160 = $800 — unchanged, because the 25% price rise and the 20% quantity fall exactly offset (1.25 × 0.80 = 1.00). Notice the pattern you will repeat for Ridge Coffee: percentage change in quantity divided by percentage change in price gives the elasticity, and price times quantity gives total revenue. Now do Ridge Coffee yourself below.</p>",
    "taskHtml": "<p><strong>Step 0 — Read the case.</strong> Ridge Coffee is a small roaster, not a chain: it buys beans from local suppliers, roasts them, and sells bags to regulars. Its starting point is $5 a bag and 1,000 bags a month. It raises the price to $6 and sells 700 bags. The questions you must answer, in order: (1) What is the price elasticity of demand, and is demand elastic or inelastic? (2) What happened to total revenue? (3) If Ridge raises the price another 20%, what happens to quantity and revenue? (4) What do the tea price, incomes, and the bean supply tell us? For each row, enter the option number or the computed value asked for. The first scored row is the framing decision: which elasticity do you compute first?</p><p><strong>The numbers to use (all from the case):</strong> Starting price $5, starting quantity 1,000 bags. New price $6, new quantity 700 bags. Tea price rises 25% and Ridge's quantity rises 10%. Incomes rise 20% and Ridge's quantity rises 30%. Bean price rises 20% and quantity supplied rises 20%. Use the simple percentage-change method throughout this lab: percentage change = (new − old) ÷ old.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "FRAMING DECISION — Step 0: Ridge raised its own price and sales fell. Which elasticity do you compute first? 1) Price elasticity of demand 2) Income elasticity 3) Cross-price elasticity",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "elast_framing",
            "expected": 1,
            "hint": "The case starts with Ridge's own price change and the sales that followed — that is price elasticity of demand. Income elasticity (2) needs an income change, and cross-price elasticity (3) needs another good's price change; both come later."
          }
        ]
      },
      {
        "label": "COMPUTED — Price rises from $5 to $6 (+20%) and quantity falls from 1,000 to 700 (−30%). Using the simple method, what is the price elasticity of demand? (Enter the number, with its sign.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "elast_ped",
            "expected": -1.5,
            "hint": "Ed = %ΔQ ÷ %ΔP = −30% ÷ 20% = −1.5. The minus sign matters: price and quantity moved in opposite directions."
          }
        ]
      },
      {
        "label": "DECISION — Demand has Ed = −1.5. How is it classified? 1) Elastic 2) Inelastic 3) Unit elastic",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "elast_classify",
            "expected": 1,
            "hint": "The absolute value is 1.5, which is greater than 1 — elastic. Inelastic (2) would need |Ed| below 1, and unit elastic (3) would need |Ed| exactly 1."
          }
        ]
      },
      {
        "label": "COMPUTED — At $5 a bag and 1,000 bags a month, what was Ridge's total revenue? (Enter the dollar amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "elast_tr_before",
            "expected": 5000,
            "hint": "Total revenue = price × quantity = $5 × 1,000 = $5,000 a month."
          }
        ]
      },
      {
        "label": "COMPUTED — At $6 a bag and 700 bags a month, what is Ridge's total revenue now? (Enter the dollar amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "elast_tr_after",
            "expected": 4200,
            "hint": "Total revenue = $6 × 700 = $4,200 a month. Check: 6 × 700 = 4,200."
          }
        ]
      },
      {
        "label": "DECISION — Total revenue went from $5,000 to $4,200. What did the price rise do to revenue? 1) It lowered revenue 2) It raised revenue 3) It left revenue unchanged",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "elast_tr_direction",
            "expected": 1,
            "hint": "Revenue fell by $800. That is the elastic-demand result: the quantity lost (300 bags) outweighed the $1 extra per bag."
          }
        ]
      },
      {
        "label": "COMPUTED — Ridge considers raising the price another 20% (from $6). With Ed = −1.5, by what percentage will quantity change? (Enter the number, with its sign.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "elast_predict_pct",
            "expected": -30,
            "hint": "%ΔQ = Ed × %ΔP = −1.5 × 20% = −30%. The minus sign says quantity falls."
          }
        ]
      },
      {
        "label": "COMPUTED — Quantity is now 700 bags and will fall 30%. How many bags will Ridge sell after the second price rise? (Enter the number of bags.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "elast_predict_q",
            "expected": 490,
            "hint": "A 30% fall from 700 is 700 × 0.30 = 210 fewer bags, so 700 − 210 = 490 bags. Or directly: 700 × 0.70 = 490."
          }
        ]
      },
      {
        "label": "COMPUTED — The second price rise is 20% on $6. What is the new price per bag? (Enter the dollar amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "elast_predict_p",
            "expected": 7.2,
            "hint": "New price = $6 × 1.20 = $7.20 a bag."
          }
        ]
      },
      {
        "label": "COMPUTED — At $7.20 a bag and 490 bags, what is Ridge's total revenue? (Enter the dollar amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "elast_predict_tr",
            "expected": 3528,
            "hint": "Total revenue = $7.20 × 490 = $3,528 a month. Check: 7 × 490 = 3,430 and 0.20 × 490 = 98, for 3,430 + 98 = 3,528."
          }
        ]
      },
      {
        "label": "COMPUTED — The price of tea rises 25% and Ridge's quantity rises 10% (at the same coffee price). What is the cross-price elasticity? (Enter the number, with its sign.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "elast_cross",
            "expected": 0.4,
            "hint": "Exy = %ΔQ of coffee ÷ %ΔP of tea = 10% ÷ 25% = +0.4. The positive sign is the message."
          }
        ]
      },
      {
        "label": "DECISION — Cross-price elasticity is +0.4. What does that make tea and coffee? 1) Substitutes 2) Complements",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "elast_cross_classify",
            "expected": 1,
            "hint": "A positive cross-price elasticity means buyers switch from one to the other when the price rises — substitutes. Complements (2) would give a negative number."
          }
        ]
      },
      {
        "label": "COMPUTED — Incomes rise 20% and Ridge's quantity rises 30%. What is the income elasticity of demand? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "elast_income",
            "expected": 1.5,
            "hint": "Ey = %ΔQ ÷ %Δincome = 30% ÷ 20% = 1.5."
          }
        ]
      },
      {
        "label": "DECISION — Income elasticity is 1.5. How is Ridge coffee classified? 1) A luxury normal good 2) A necessity 3) An inferior good",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "elast_income_classify",
            "expected": 1,
            "hint": "Ey is positive, so it is a normal good, and above 1, so it is a luxury: demand grows faster than income. A necessity (2) would need Ey below 1; an inferior good (3) would need a negative Ey."
          }
        ]
      },
      {
        "label": "COMPUTED — The bean price rises 20% and the quantity of beans supplied rises 20%. What is the price elasticity of supply? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "elast_supply",
            "expected": 1,
            "hint": "Es = %ΔQs ÷ %ΔP = 20% ÷ 20% = 1 — unit elastic supply."
          }
        ]
      },
      {
        "label": "DECISION — Ridge's demand is elastic (Ed = −1.5). If it raises its price again, what happens to its total revenue? 1) It falls 2) It rises 3) It stays the same",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "elast_advice",
            "expected": 1,
            "hint": "You already proved it twice: $5,000 → $4,200 → $3,528. With elastic demand, every price rise loses revenue. Ridge should compete on quality or volume, not on a higher price."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "elasticity-and-market-outcomes.csv",
    "csv": "Decision point,Your call\n\"FRAMING DECISION — Step 0: Ridge raised its own price and sales fell. Which elasticity do you compute first? 1) Price elasticity of demand 2) Income elasticity 3) Cross-price elasticity\",\n\"COMPUTED — Price rises from $5 to $6 (+20%) and quantity falls from 1,000 to 700 (−30%). Using the simple method, what is the price elasticity of demand? (Enter the number, with its sign.)\",\n\"DECISION — Demand has Ed = −1.5. How is it classified? 1) Elastic 2) Inelastic 3) Unit elastic\",\n\"COMPUTED — At $5 a bag and 1,000 bags a month, what was Ridge's total revenue? (Enter the dollar amount.)\",\n\"COMPUTED — At $6 a bag and 700 bags a month, what is Ridge's total revenue now? (Enter the dollar amount.)\",\n\"DECISION — Total revenue went from $5,000 to $4,200. What did the price rise do to revenue? 1) It lowered revenue 2) It raised revenue 3) It left revenue unchanged\",\n\"COMPUTED — Ridge considers raising the price another 20% (from $6). With Ed = −1.5, by what percentage will quantity change? (Enter the number, with its sign.)\",\n\"COMPUTED — Quantity is now 700 bags and will fall 30%. How many bags will Ridge sell after the second price rise? (Enter the number of bags.)\",\n\"COMPUTED — The second price rise is 20% on $6. What is the new price per bag? (Enter the dollar amount.)\",\n\"COMPUTED — At $7.20 a bag and 490 bags, what is Ridge's total revenue? (Enter the dollar amount.)\",\n\"COMPUTED — The price of tea rises 25% and Ridge's quantity rises 10% (at the same coffee price). What is the cross-price elasticity? (Enter the number, with its sign.)\",\n\"DECISION — Cross-price elasticity is +0.4. What does that make tea and coffee? 1) Substitutes 2) Complements\",\n\"COMPUTED — Incomes rise 20% and Ridge's quantity rises 30%. What is the income elasticity of demand? (Enter the number.)\",\n\"DECISION — Income elasticity is 1.5. How is Ridge coffee classified? 1) A luxury normal good 2) A necessity 3) An inferior good\",\n\"COMPUTED — The bean price rises 20% and the quantity of beans supplied rises 20%. What is the price elasticity of supply? (Enter the number.)\",\n\"DECISION — Ridge's demand is elastic (Ed = −1.5). If it raises its price again, what happens to its total revenue? 1) It falls 2) It rises 3) It stays the same\",\n"
  }
];
