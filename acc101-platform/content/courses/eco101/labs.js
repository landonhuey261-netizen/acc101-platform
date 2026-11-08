module.exports = [
  {
    "id": "supply-demand-shifts",
    "title": "Supply & Demand Shifts — Compute the New Equilibrium",
    "introHtml": "<p><strong>Case: Sunny's Lemonade Stand at the farmers' market.</strong> Sunny sells fresh lemonade. Her demand curve is Qd = 100 − 2P (quantity demanded falls by 2 cups for each $1 rise in price) and her supply curve is Qs = 20 + 2P (quantity supplied rises by 2 cups for each $1 rise in price). P is the price per cup in dollars and Q is cups per day. A hot weekend is coming and demand will rise: the new demand curve will be Qd = 140 − 2P. Your task: find the original equilibrium, then compute the new equilibrium after the demand shift, step by step. Read the case in the task, then answer each decision row.</p><p><strong>Worked example first — Rosa's Iced Tea (completed for you).</strong> Rosa's demand is Qd = 80 − P and her supply is Qs = 10 + P. Step 1: set Qd = Qs, so 80 − P = 10 + P. Step 2: add P to both sides and subtract 10: 70 = 2P, so P = $35. Step 3: quantity is Qd = 80 − 35 = 45 cups (check: Qs = 10 + 35 = 45). Step 4: demand rises to Qd = 100 − P. Set 100 − P = 10 + P, so 90 = 2P and P = $45. Step 5: new quantity is Qd = 100 − 45 = 55 cups (check: Qs = 10 + 45 = 55). Notice the pattern you will repeat for Sunny: set the two equations equal, solve for P, plug P back in to find Q, and check the answer with the other equation. Now do Sunny's lemonade yourself below.</p>",
    "taskHtml": "<p><strong>Step 0 — Read the case.</strong> Sunny's Lemonade Stand sells one product — fresh lemonade, by the cup — at a farmers' market. Her demand curve is Qd = 100 − 2P and her supply curve is Qs = 20 + 2P, where P is the price per cup in dollars and Q is cups per day. A hot weekend is forecast, and demand will rise to Qd = 140 − 2P: at every price, buyers will want 40 more cups a day than before. A good answer shows the working: set quantity demanded equal to quantity supplied, solve for the price, plug the price back into either equation to find the quantity, and check it with the other equation. For each row, enter the option number or the computed value asked for. The first scored row is the framing decision: what kind of shift is the hot weekend?</p><p><strong>The case, step by step (for the decision rows):</strong> (1) The hot weekend raises demand — more buyers want lemonade at every price. (2) Original equilibrium: set 100 − 2P = 20 + 2P. (3) New equilibrium: set 140 − 2P = 20 + 2P. (4) If Sunny kept the old price after the shift, quantity demanded would exceed quantity supplied — a shortage. (5) At the new equilibrium the market clears, and revenue is price times quantity.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "FRAMING DECISION — Step 0: What kind of shift is the hot weekend? 1) Demand rises — buyers want more lemonade at every price 2) Supply rises — sellers offer more at every price 3) Demand falls — buyers want less at every price",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "shifts_framing",
            "expected": 1,
            "hint": "Hot weather makes more people want lemonade at every price — that is a demand increase, shown by Qd rising from 100 − 2P to 140 − 2P. Supply (2) has not changed, and demand has not fallen (3)."
          }
        ]
      },
      {
        "label": "COMPUTED — Original equilibrium: set Qd = 100 − 2P equal to Qs = 20 + 2P. What is the original equilibrium price? (Enter the dollar amount.)",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "shifts_orig_price",
            "expected": 20,
            "hint": "100 − 2P = 20 + 2P gives 80 = 4P, so P = $20. Check: 100 − 40 = 60 and 20 + 40 = 60."
          }
        ]
      },
      {
        "label": "COMPUTED — At the original equilibrium price of $20, what is the equilibrium quantity? (Enter the number of cups per day.)",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "shifts_orig_qty",
            "expected": 60,
            "hint": "Plug P = 20 into demand: Qd = 100 − 2 × 20 = 100 − 40 = 60 cups. Check with supply: Qs = 20 + 2 × 20 = 60. Both agree."
          }
        ]
      },
      {
        "label": "COMPUTED — New equilibrium after the shift: set Qd = 140 − 2P equal to Qs = 20 + 2P. What is the new equilibrium price? (Enter the dollar amount.)",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "shifts_new_price",
            "expected": 30,
            "hint": "140 − 2P = 20 + 2P gives 120 = 4P, so P = $30. Check: 140 − 60 = 80 and 20 + 60 = 80."
          }
        ]
      },
      {
        "label": "COMPUTED — At the new equilibrium price of $30, what is the new equilibrium quantity? (Enter the number of cups per day.)",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "shifts_new_qty",
            "expected": 80,
            "hint": "Plug P = 30 into the new demand: Qd = 140 − 2 × 30 = 140 − 60 = 80 cups. Check with supply: Qs = 20 + 2 × 30 = 80. Both agree."
          }
        ]
      },
      {
        "label": "COMPUTED — By how much did the equilibrium price rise? (Enter the dollar amount: new price minus old price.)",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "shifts_price_change",
            "expected": 10,
            "hint": "$30 − $20 = $10. A demand increase raises the equilibrium price — exactly what the model predicts."
          }
        ]
      },
      {
        "label": "COMPUTED — By how much did the equilibrium quantity rise? (Enter the number of cups: new quantity minus old quantity.)",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "shifts_qty_change",
            "expected": 20,
            "hint": "80 − 60 = 20 more cups a day. A demand increase raises the equilibrium quantity as well as the price."
          }
        ]
      },
      {
        "label": "COMPUTED — Suppose Sunny keeps the old price of $20 after demand shifts to Qd = 140 − 2P. Quantity demanded would be 140 − 40 = 100 cups and quantity supplied would be 60 cups. How large is the shortage? (Enter the number of cups.)",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "shifts_shortage",
            "expected": 40,
            "hint": "Shortage = quantity demanded − quantity supplied = 100 − 60 = 40 cups. Forty customers who want lemonade at $20 would leave empty-handed — and the price would be bid up toward $30."
          }
        ]
      },
      {
        "label": "DECISION — At the new equilibrium price of $30, is there a surplus, a shortage, or neither? 1) Neither — quantity demanded equals quantity supplied 2) A shortage 3) A surplus",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "shifts_clearing",
            "expected": 1,
            "hint": "At equilibrium the market clears: Qd = 80 and Qs = 80, so there is neither a shortage (2) nor a surplus (3). That is what equilibrium means."
          }
        ]
      },
      {
        "label": "COMPUTED — Sunny's daily revenue at the new equilibrium is price × quantity. What is it? (Enter the dollar amount.)",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "shifts_new_rev",
            "expected": 2400,
            "hint": "Revenue = $30 × 80 cups = $2,400 a day. Check: 30 × 80 = 2,400."
          }
        ]
      },
      {
        "label": "COMPUTED — Sunny's daily revenue at the original equilibrium was $20 × 60 cups. What was it? (Enter the dollar amount.)",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "shifts_old_rev",
            "expected": 1200,
            "hint": "Revenue = $20 × 60 = $1,200 a day. The hot weekend doubles her revenue — if she raises the price to the new equilibrium."
          }
        ]
      },
      {
        "label": "COMPUTED — By how much did daily revenue rise from the original equilibrium to the new one? (Enter the dollar amount.)",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "shifts_rev_change",
            "expected": 1200,
            "hint": "$2,400 − $1,200 = $1,200 more a day. Note the rise comes from both a higher price ($20 → $30) and a higher quantity (60 → 80)."
          }
        ]
      },
      {
        "label": "DECISION — The hot weekend arrives and the shortage at $20 is 40 cups. What should Sunny do? 1) Raise the price toward $30, the new equilibrium 2) Lower the price below $20 3) Keep the price at $20 and turn customers away",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "shifts_action",
            "expected": 1,
            "hint": "Raising the price toward $30 clears the market and captures the extra revenue. Lowering it (2) would make the shortage worse, and keeping $20 (3) leaves 40 customers unserved and $1,200 of revenue on the table."
          }
        ]
      },
      {
        "label": "COMPUTED — Suppose instead that a cold, rainy weekend cuts demand to Qd = 60 − 2P, with supply still Qs = 20 + 2P. Set 60 − 2P = 20 + 2P. What is the new equilibrium price? (Enter the dollar amount.)",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "shifts_cold_price",
            "expected": 10,
            "hint": "60 − 2P = 20 + 2P gives 40 = 4P, so P = $10. A demand decrease lowers the equilibrium price — the mirror image of the hot weekend."
          }
        ]
      },
      {
        "label": "COMPUTED — At that cold-weekend price of $10, what is the equilibrium quantity? (Enter the number of cups per day.)",
        "cells": [""],
        "inputs": [
          {
            "col": 1,
            "key": "shifts_cold_qty",
            "expected": 40,
            "hint": "Plug P = 10 into demand: Qd = 60 − 2 × 10 = 60 − 20 = 40 cups. Check with supply: Qs = 20 + 2 × 10 = 40. Both agree — and both price ($20 → $10) and quantity (60 → 40) fell."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "supply-demand-shifts.csv",
    "csv": "Decision point,Your call\n\"FRAMING DECISION — Step 0: What kind of shift is the hot weekend? 1) Demand rises — buyers want more lemonade at every price 2) Supply rises — sellers offer more at every price 3) Demand falls — buyers want less at every price\",\n\"COMPUTED — Original equilibrium: set Qd = 100 − 2P equal to Qs = 20 + 2P. What is the original equilibrium price? (Enter the dollar amount.)\",\n\"COMPUTED — At the original equilibrium price of $20, what is the equilibrium quantity? (Enter the number of cups per day.)\",\n\"COMPUTED — New equilibrium after the shift: set Qd = 140 − 2P equal to Qs = 20 + 2P. What is the new equilibrium price? (Enter the dollar amount.)\",\n\"COMPUTED — At the new equilibrium price of $30, what is the new equilibrium quantity? (Enter the number of cups per day.)\",\n\"COMPUTED — By how much did the equilibrium price rise? (Enter the dollar amount: new price minus old price.)\",\n\"COMPUTED — By how much did the equilibrium quantity rise? (Enter the number of cups: new quantity minus old quantity.)\",\n\"COMPUTED — Suppose Sunny keeps the old price of $20 after demand shifts to Qd = 140 − 2P. Quantity demanded would be 140 − 40 = 100 cups and quantity supplied would be 60 cups. How large is the shortage? (Enter the number of cups.)\",\n\"DECISION — At the new equilibrium price of $30, is there a surplus, a shortage, or neither? 1) Neither — quantity demanded equals quantity supplied 2) A shortage 3) A surplus\",\n\"COMPUTED — Sunny's daily revenue at the new equilibrium is price × quantity. What is it? (Enter the dollar amount.)\",\n\"COMPUTED — Sunny's daily revenue at the original equilibrium was $20 × 60 cups. What was it? (Enter the dollar amount.)\",\n\"COMPUTED — By how much did daily revenue rise from the original equilibrium to the new one? (Enter the dollar amount.)\",\n\"DECISION — The hot weekend arrives and the shortage at $20 is 40 cups. What should Sunny do? 1) Raise the price toward $30, the new equilibrium 2) Lower the price below $20 3) Keep the price at $20 and turn customers away\",\n\"COMPUTED — Suppose instead that a cold, rainy weekend cuts demand to Qd = 60 − 2P, with supply still Qs = 20 + 2P. Set 60 − 2P = 20 + 2P. What is the new equilibrium price? (Enter the dollar amount.)\",\n\"COMPUTED — At that cold-weekend price of $10, what is the equilibrium quantity? (Enter the number of cups per day.)\",\n"
  }
];
