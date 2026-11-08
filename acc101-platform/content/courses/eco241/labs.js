module.exports = [
  {
    "id": "trade-and-exchange-rates",
    "title": "Trade & Exchange Rates — Gains from Trade and Currency Effects",
    "introHtml": "<p><strong>Case: Northland and Southland.</strong> Two example countries each have workers who can make bicycles or grow wheat. Northland's worker makes <strong>6 bicycles or 12 bushels of wheat</strong> in a day. Southland's worker makes <strong>2 bicycles or 8 bushels of wheat</strong> in a day. Northland's currency is the dollar and Southland's is the euro, and the exchange rate is <strong>$1 = €0.85</strong>. Your task: work out who should specialize in what, compute the gains from a trade of 20 bicycles for 60 bushels of wheat, and convert prices between dollars and euros — including after the dollar depreciates to $1 = €0.75. Read the case in the task, then answer each decision row.</p><p><strong>Worked example first — Eastvale and Westvale (completed for you).</strong> Eastvale's worker makes 10 chairs or 5 tables a day; Westvale's makes 4 chairs or 8 tables. Eastvale's opportunity cost of 1 chair is 5 ÷ 10 = 0.5 tables; Westvale's is 8 ÷ 4 = 2 tables — so Eastvale has the comparative advantage in chairs and Westvale in tables. They trade 10 chairs for 8 tables (0.8 tables per chair, between 0.5 and 2). Eastvale gives 10 chairs, which would have cost 5 tables to make, and receives 8 tables — a gain of 3 tables. Westvale gives 8 tables, which would have cost 4 chairs, and receives 10 chairs — a gain of 6 chairs. Exchange rates work the same way: at $1 = £0.80, £400 is worth £400 ÷ 0.80 = $500, and $250 is worth $250 × 0.80 = £200. Notice the pattern you will repeat for Northland and Southland: opportunity cost first, then the trade, then the currency conversion — dividing when you go from the quoted currency to dollars, multiplying when you go the other way. Now do Northland and Southland yourself below.</p>",
    "taskHtml": "<p><strong>Step 0 — Read the case.</strong> Northland and Southland are example countries with made-up numbers — the arithmetic is the lesson, not real trade statistics. Northland's worker makes 6 bicycles or 12 bushels of wheat a day; Southland's makes 2 bicycles or 8 bushels. The exchange rate is $1 = €0.85, and later in the lab the dollar depreciates to $1 = €0.75. A good answer follows the module's order: (1) compute both opportunity costs and find the comparative advantage; (2) check that the trade price sits between the two costs; (3) compute each country's gain against what it could have made alone; (4) convert the currencies, remembering that euros to dollars means dividing by euros-per-dollar and dollars to euros means multiplying. For each row, enter the option number or the computed value asked for. The first scored row is the framing decision: who should specialize in bicycles?</p><p><strong>The case numbers, in one place:</strong> Northland — 6 bicycles or 12 wheat per worker-day. Southland — 2 bicycles or 8 wheat per worker-day. Trade — 20 bicycles for 60 bushels of wheat. Exchange rate — $1 = €0.85 at first, then $1 = €0.75 after the dollar depreciates. Bicycle price — $200. Use only these numbers; every expected answer below is computed from them.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "FRAMING DECISION — Step 0: Which country should specialize in bicycles? 1) Northland 2) Southland",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "trade_framing",
            "expected": 1,
            "hint": "Compare opportunity costs: Northland's bicycle costs 12 ÷ 6 = 2 bushels of wheat, Southland's costs 8 ÷ 2 = 4 bushels. Northland gives up less, so Northland specializes in bicycles."
          }
        ]
      },
      {
        "label": "COMPUTED — Northland's worker makes 6 bicycles or 12 bushels of wheat. What is Northland's opportunity cost of 1 bicycle, in bushels of wheat? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "trade_oc_north_bike",
            "expected": 2,
            "hint": "Opportunity cost is wheat given up ÷ bicycles gained: 12 ÷ 6 = 2 bushels of wheat per bicycle."
          }
        ]
      },
      {
        "label": "COMPUTED — Southland's worker makes 2 bicycles or 8 bushels of wheat. What is Southland's opportunity cost of 1 bicycle, in bushels of wheat? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "trade_oc_south_bike",
            "expected": 4,
            "hint": "Opportunity cost is wheat given up ÷ bicycles gained: 8 ÷ 2 = 4 bushels of wheat per bicycle — twice Northland's cost, which is why Southland does not specialize in bicycles."
          }
        ]
      },
      {
        "label": "COMPUTED — Southland's opportunity cost of 1 bushel of wheat is 0.25 bicycles. How many bicycles must Southland give up to grow 4 extra bushels of wheat? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "trade_oc_south_wheat4",
            "expected": 1,
            "hint": "Southland gives up 2 bicycles for 8 bushels, so 1 bushel costs 2 ÷ 8 = 0.25 bicycles, and 4 bushels cost 4 × 0.25 = 1 bicycle."
          }
        ]
      },
      {
        "label": "COMPUTED — Northland's opportunity cost of 1 bicycle is 2 bushels of wheat. How many bushels of wheat must Northland give up to make 3 extra bicycles? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "trade_oc_north_3bikes",
            "expected": 6,
            "hint": "Each bicycle costs 2 bushels, so 3 bicycles cost 3 × 2 = 6 bushels of wheat."
          }
        ]
      },
      {
        "label": "COMPUTED — Northland trades 20 bicycles for 60 bushels of wheat. How many bushels of wheat does 1 bicycle buy in this trade? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "trade_terms",
            "expected": 3,
            "hint": "Terms of trade are 60 ÷ 20 = 3 bushels per bicycle. Check it lies between the two opportunity costs — Northland's 2 and Southland's 4 — so both sides can gain."
          }
        ]
      },
      {
        "label": "COMPUTED — Northland gives 20 bicycles (which would have cost 40 bushels of wheat to make) and receives 60 bushels. How many extra bushels of wheat does Northland gain? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "trade_gain_north",
            "expected": 20,
            "hint": "Making 20 bicycles costs Northland 20 × 2 = 40 bushels of wheat, but trade brings 60 bushels — a gain of 60 − 40 = 20 bushels."
          }
        ]
      },
      {
        "label": "COMPUTED — Southland gives 60 bushels of wheat (which would have cost 15 bicycles to grow) and receives 20 bicycles. How many extra bicycles does Southland gain? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "trade_gain_south",
            "expected": 5,
            "hint": "Growing 60 bushels costs Southland 60 × 0.25 = 15 bicycles, but trade brings 20 bicycles — a gain of 20 − 15 = 5 bicycles."
          }
        ]
      },
      {
        "label": "COMPUTED — The exchange rate is $1 = €0.85. How many dollars is €850? (Enter the dollar amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "trade_fx_eur_usd",
            "expected": 1000,
            "hint": "Euros to dollars means dividing by euros-per-dollar: €850 ÷ 0.85 = $1,000. Check: €1 is worth about $1.18, so €850 must be worth more than $850."
          }
        ]
      },
      {
        "label": "COMPUTED — At the same rate ($1 = €0.85), how many euros is $400? (Enter the euro amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "trade_fx_usd_eur",
            "expected": 340,
            "hint": "Dollars to euros means multiplying by euros-per-dollar: $400 × 0.85 = €340."
          }
        ]
      },
      {
        "label": "COMPUTED — A Northland bicycle costs $200. At $1 = €0.85, what does it cost a Southland buyer in euros? (Enter the euro amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "trade_fx_bike",
            "expected": 170,
            "hint": "Convert the dollar price to euros by multiplying: $200 × 0.85 = €170."
          }
        ]
      },
      {
        "label": "COMPUTED — The dollar now depreciates to $1 = €0.75. A Southland good priced at €75 now costs how many dollars? (Enter the dollar amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "trade_fx_depr_eur",
            "expected": 100,
            "hint": "Euros to dollars means dividing: €75 ÷ 0.75 = $100. Before depreciation it cost €75 ÷ 0.85 = $88.24 — the dearer dollar price is exactly what depreciation means for American buyers."
          }
        ]
      },
      {
        "label": "COMPUTED — At the new rate ($1 = €0.75), a $200 American good costs how many euros in Southland? (Enter the euro amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "trade_fx_depr_usd",
            "expected": 150,
            "hint": "Dollars to euros means multiplying: $200 × 0.75 = €150, down from €170 before depreciation — American goods are cheaper abroad, which is why exporters gain from depreciation."
          }
        ]
      },
      {
        "label": "DECISION — The dollar depreciated from $1 = €0.85 to $1 = €0.75. What does that do to American exports? 1) They become cheaper abroad 2) They become dearer abroad",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "trade_depr_effect",
            "expected": 1,
            "hint": "The $200 good fell from €170 to €150 in Southland — cheaper abroad means exporters sell more. Depreciation helps exporters and hurts importers."
          }
        ]
      },
      {
        "label": "DECISION — The trade is done and the numbers check out. Which pattern should Northland and Southland follow? 1) Northland exports bicycles and imports wheat; Southland exports wheat and imports bicycles 2) Northland exports wheat and imports bicycles; Southland exports bicycles and imports wheat",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "trade_pattern",
            "expected": 1,
            "hint": "Each country exports the good in which it has the comparative advantage: Northland's bicycles cost 2 wheat against Southland's 4, and Southland's wheat costs 0.25 bicycles against Northland's 0.5. The reverse pattern (2) would make both worse off."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "trade-and-exchange-rates.csv",
    "csv": "Decision point,Your call\n\"FRAMING DECISION — Step 0: Which country should specialize in bicycles? 1) Northland 2) Southland\",\n\"COMPUTED — Northland's worker makes 6 bicycles or 12 bushels of wheat. What is Northland's opportunity cost of 1 bicycle, in bushels of wheat? (Enter the number.)\",\n\"COMPUTED — Southland's worker makes 2 bicycles or 8 bushels of wheat. What is Southland's opportunity cost of 1 bicycle, in bushels of wheat? (Enter the number.)\",\n\"COMPUTED — Southland's opportunity cost of 1 bushel of wheat is 0.25 bicycles. How many bicycles must Southland give up to grow 4 extra bushels of wheat? (Enter the number.)\",\n\"COMPUTED — Northland's opportunity cost of 1 bicycle is 2 bushels of wheat. How many bushels of wheat must Northland give up to make 3 extra bicycles? (Enter the number.)\",\n\"COMPUTED — Northland trades 20 bicycles for 60 bushels of wheat. How many bushels of wheat does 1 bicycle buy in this trade? (Enter the number.)\",\n\"COMPUTED — Northland gives 20 bicycles (which would have cost 40 bushels of wheat to make) and receives 60 bushels. How many extra bushels of wheat does Northland gain? (Enter the number.)\",\n\"COMPUTED — Southland gives 60 bushels of wheat (which would have cost 15 bicycles to grow) and receives 20 bicycles. How many extra bicycles does Southland gain? (Enter the number.)\",\n\"COMPUTED — The exchange rate is $1 = €0.85. How many dollars is €850? (Enter the dollar amount.)\",\n\"COMPUTED — At the same rate ($1 = €0.85), how many euros is $400? (Enter the euro amount.)\",\n\"COMPUTED — A Northland bicycle costs $200. At $1 = €0.85, what does it cost a Southland buyer in euros? (Enter the euro amount.)\",\n\"COMPUTED — The dollar now depreciates to $1 = €0.75. A Southland good priced at €75 now costs how many dollars? (Enter the dollar amount.)\",\n\"COMPUTED — At the new rate ($1 = €0.75), a $200 American good costs how many euros in Southland? (Enter the euro amount.)\",\n\"DECISION — The dollar depreciated from $1 = €0.85 to $1 = €0.75. What does that do to American exports? 1) They become cheaper abroad 2) They become dearer abroad\",\n\"DECISION — The trade is done and the numbers check out. Which pattern should Northland and Southland follow? 1) Northland exports bicycles and imports wheat; Southland exports wheat and imports bicycles 2) Northland exports wheat and imports bicycles; Southland exports bicycles and imports wheat\",\n"
  }
];
