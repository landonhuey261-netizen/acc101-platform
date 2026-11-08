module.exports = [
  {
    "id": "budget-and-debt-payoff-plan",
    "title": "Build Your Budget & Debt Payoff Plan",
    "introHtml": "<p><strong>Case: Maya and Jordan — an EXAMPLE household, not you.</strong> Maya and Jordan are fictional. Their numbers below are example numbers for this exercise only. <strong>Do NOT enter your real accounts, your real balances, or your real dollar amounts anywhere in this lab.</strong> Work the example, learn the method, and then build your own budget separately, on paper or in your own spreadsheet, with your own numbers.</p><p><strong>The example household:</strong> Maya and Jordan take home $4,800 a month together. Their monthly spending is: rent $1,400, groceries $520, utilities $180, transport $320, phone $80, insurance $150, fun $350, dining out $280, subscriptions $60, and miscellaneous $200. Their minimum debt payments total $365 a month. Their debts are: a personal loan of $1,200 at 9% (minimum $40), a credit card of $2,400 at 22% (minimum $50), a store card of $3,000 at 26% (minimum $75), and a car loan of $9,000 at 7% (minimum $200). Their monthly expenses are $3,900. Your task: build their budget, find the leftover money, and plan the debt payoff, decision by decision.</p><p><strong>Worked example first — Sam's budget (completed for you).</strong> Sam takes home $3,200 a month. Needs are $1,600, wants are $960, and savings and debt are $640 — the 50/30/20 split. Sam's expenses total $2,950 including minimum debt payments, so the leftover is $3,200 − $2,950 = $250 a month. Sam sends that $250 as an extra debt payment. Notice the pattern you will repeat for Maya and Jordan: sort spending into needs, wants, and savings; check the 50/30/20 shares; subtract spending from take-home pay to find the leftover; then aim the leftover at the debts in the right order. Now do Maya and Jordan yourself below.</p>",
    "taskHtml": "<p><strong>Step 0 — Read the case.</strong> Maya and Jordan are an example household with example numbers. Take-home pay is $4,800 a month. Spending (without debt minimums) is rent $1,400, groceries $520, utilities $180, transport $320, phone $80, insurance $150, fun $350, dining $280, subscriptions $60, miscellaneous $200 — a total of $3,540. Minimum debt payments add $365, for total monthly spending of $3,905. Needs are rent, groceries, utilities, transport, phone, and insurance ($2,650). Wants are fun, dining, subscriptions, and miscellaneous ($890). Debts: personal loan $1,200 at 9%, credit card $2,400 at 22%, store card $3,000 at 26%, car loan $9,000 at 7%. For each row, enter the option number or the computed value asked for. The first scored row is the framing decision: which budgeting method should they use?</p><p><strong>Two tracks:</strong> the worked example above (Sam) shows the method on a completed budget — study it first if you like. The DIY track below is Maya and Jordan's budget, which you build yourself. Both use example numbers only.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "FRAMING DECISION — Step 0: Which budgeting method should Maya and Jordan use? 1) The 50/30/20 rule — sort spending into needs, wants, and savings/debt 2) Track nothing and spend until the money runs out 3) Spend first and save whatever is left at month's end",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "budget_framing",
            "expected": 1,
            "hint": "The 50/30/20 rule gives every dollar a job before the month starts — needs, wants, and savings/debt. Tracking nothing (2) means the money disappears unnoticed, and saving what's left (3) usually leaves nothing, because spending expands to fill the month."
          }
        ]
      },
      {
        "label": "COMPUTED — Take-home pay is $4,800 a month. Under the 50/30/20 rule, what is the most that should go to needs (50%)? (Enter the dollar amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "budget_needs_cap",
            "expected": 2400,
            "hint": "Needs cap = 50% × $4,800 = $2,400. Multiply the take-home pay by 0.50."
          }
        ]
      },
      {
        "label": "COMPUTED — Under the 50/30/20 rule, how much of the $4,800 should go to savings and debt payoff (20%)? (Enter the dollar amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "budget_savings_target",
            "expected": 960,
            "hint": "Savings and debt target = 20% × $4,800 = $960. That covers the $365 of minimums plus $595 of extra payoff or saving."
          }
        ]
      },
      {
        "label": "COMPUTED — Monthly spending without debt minimums is $3,540 and minimum debt payments are $365. What is total monthly spending? (Enter the dollar amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "budget_total_spending",
            "expected": 3905,
            "hint": "Total spending = $3,540 + $365 = $3,905. Add the spending to the minimum payments."
          }
        ]
      },
      {
        "label": "COMPUTED — Take-home pay is $4,800 and total monthly spending is $3,905. How much is left over each month? (Enter the dollar amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "budget_leftover",
            "expected": 895,
            "hint": "Leftover = $4,800 − $3,905 = $895. That leftover is the fuel for the debt payoff plan and the emergency fund."
          }
        ]
      },
      {
        "label": "COMPUTED — Needs total $2,650 (rent $1,400 + groceries $520 + utilities $180 + transport $320 + phone $80 + insurance $150). How much is that over the $2,400 needs cap? (Enter the dollar amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "budget_needs_over",
            "expected": 250,
            "hint": "Over the cap = $2,650 − $2,400 = $250. Needs run 55.2% of take-home pay instead of 50% — usually housing — so wants must be tighter to compensate."
          }
        ]
      },
      {
        "label": "DECISION — Which debt should the avalanche method attack first? 1) The store card at 26% (highest rate) 2) The personal loan at 9% (smallest balance) 3) The car loan at 7% (largest balance)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "budget_avalanche_first",
            "expected": 1,
            "hint": "Avalanche means highest interest rate first — the store card at 26% costs the most per dollar owed. The personal loan (2) is the snowball's target, and the car loan (3) has the lowest rate, so it goes last."
          }
        ]
      },
      {
        "label": "DECISION — Which debt should the snowball method attack first? 1) The personal loan at $1,200 (smallest balance) 2) The store card at 26% (highest rate) 3) The car loan at $9,000 (largest balance)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "budget_snowball_first",
            "expected": 1,
            "hint": "Snowball means smallest balance first — the $1,200 personal loan disappears fastest, giving a quick win. The store card (2) is the avalanche's target, and the car loan (3) is the biggest balance, so it goes last in a snowball."
          }
        ]
      },
      {
        "label": "COMPUTED — The store card is $3,000 at 26%. Paying $600 a month toward it (after minimums on the others) clears it in 6 months. How many months is that? (Enter the number of months.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "budget_store_months",
            "expected": 6,
            "hint": "At $600 a month, the $3,000 store card at 26% is gone in 6 months, with about $211 of interest. The big payment is what makes it fast — minimum payments alone would take years."
          }
        ]
      },
      {
        "label": "COMPUTED — Running the whole payoff plan ($365 minimums + $600 extra = $965 a month), the avalanche costs $1,295.80 in total interest and the snowball costs $1,481.87. How much interest does the avalanche save, to the nearest dollar? (Enter the dollar amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "budget_avalanche_saves",
            "expected": 186,
            "hint": "Savings = $1,481.87 − $1,295.80 = $186.07, about $186. Both plans take 20 months — the avalanche just costs less to get there."
          }
        ]
      },
      {
        "label": "COMPUTED — Monthly expenses are $3,905. What is a three-month emergency fund for this household? (Enter the dollar amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "budget_ef_3mo",
            "expected": 11715,
            "hint": "Three months = 3 × $3,905 = $11,715. Remember: the target is based on expenses, not income."
          }
        ]
      },
      {
        "label": "COMPUTED — What is a six-month emergency fund for this household? (Enter the dollar amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "budget_ef_6mo",
            "expected": 23430,
            "hint": "Six months = 6 × $3,905 = $23,430. A single-income household or freelance worker should aim for the six-month figure."
          }
        ]
      },
      {
        "label": "DECISION — The debts are gone and the budget is working. What should Maya and Jordan do first with the freed-up $965 a month? 1) Build the emergency fund to three months of expenses 2) Finance a new car 3) Stop tracking spending",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "budget_next",
            "expected": 1,
            "hint": "Build the emergency fund first — without it, the next surprise sends them straight back to the credit card. A new car (2) adds a debt they just escaped, and stopping tracking (3) is how budgets die."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "budget-and-debt-payoff-plan.csv",
    "csv": "Decision point,Your call\n\"FRAMING DECISION — Step 0: Which budgeting method should Maya and Jordan use? 1) The 50/30/20 rule — sort spending into needs, wants, and savings/debt 2) Track nothing and spend until the money runs out 3) Spend first and save whatever is left at month's end\",\n\"COMPUTED — Take-home pay is $4,800 a month. Under the 50/30/20 rule, what is the most that should go to needs (50%)? (Enter the dollar amount.)\",\n\"COMPUTED — Under the 50/30/20 rule, how much of the $4,800 should go to savings and debt payoff (20%)? (Enter the dollar amount.)\",\n\"COMPUTED — Monthly spending without debt minimums is $3,540 and minimum debt payments are $365. What is total monthly spending? (Enter the dollar amount.)\",\n\"COMPUTED — Take-home pay is $4,800 and total monthly spending is $3,905. How much is left over each month? (Enter the dollar amount.)\",\n\"COMPUTED — Needs total $2,650 (rent $1,400 + groceries $520 + utilities $180 + transport $320 + phone $80 + insurance $150). How much is that over the $2,400 needs cap? (Enter the dollar amount.)\",\n\"DECISION — Which debt should the avalanche method attack first? 1) The store card at 26% (highest rate) 2) The personal loan at 9% (smallest balance) 3) The car loan at 7% (largest balance)\",\n\"DECISION — Which debt should the snowball method attack first? 1) The personal loan at $1,200 (smallest balance) 2) The store card at 26% (highest rate) 3) The car loan at $9,000 (largest balance)\",\n\"COMPUTED — The store card is $3,000 at 26%. Paying $600 a month toward it (after minimums on the others) clears it in 6 months. How many months is that? (Enter the number of months.)\",\n\"COMPUTED — Running the whole payoff plan ($365 minimums + $600 extra = $965 a month), the avalanche costs $1,295.80 in total interest and the snowball costs $1,481.87. How much interest does the avalanche save, to the nearest dollar? (Enter the dollar amount.)\",\n\"COMPUTED — Monthly expenses are $3,905. What is a three-month emergency fund for this household? (Enter the dollar amount.)\",\n\"COMPUTED — What is a six-month emergency fund for this household? (Enter the dollar amount.)\",\n\"DECISION — The debts are gone and the budget is working. What should Maya and Jordan do first with the freed-up $965 a month? 1) Build the emergency fund to three months of expenses 2) Finance a new car 3) Stop tracking spending\",\n"
  },
  {
    "id": "retirement-projection",
    "title": "Retirement Projection",
    "introHtml": "<p><strong>Case: Alex — an EXAMPLE person, not you.</strong> Alex is fictional. Every number below is an example number for this exercise only. <strong>Do NOT enter your real accounts, your real balances, or your real dollar amounts anywhere in this lab.</strong> Work the example, learn the method, and then run your own projection separately, on paper or in your own spreadsheet, with your own numbers.</p><p><strong>The example:</strong> Alex is 30, plans to retire at 65 (35 years away), and can invest $400 a month. The example assumes a 7% average annual return for teaching — that is an assumption for the exercise, not a promise of what any investment will earn. Real returns vary year to year and are never guaranteed. Your task: project Alex's retirement savings, decision by decision, and see what starting early is worth.</p><p><strong>Worked example first — Jordan's projection (completed for you).</strong> Jordan invests $200 a month at the same 7% example return for 30 years. The future value is $243,994.20. Contributions total $200 × 360 = $72,000, so growth is $243,994.20 − $72,000 = $171,994.20 — more than double what Jordan put in. Notice the pattern: monthly amount × months = contributions; future value − contributions = growth. Now do Alex yourself below.</p>",
    "taskHtml": "<p><strong>Step 0 — Read the case.</strong> Alex is 30, retires at 65, and invests $400 a month for 35 years at a 7% example average annual return. The future value of $400 a month for 420 months at 7% is $720,421.84. Contributions total $400 × 420 = $168,000. The 4% rule says a nest egg supports 4% of its value in the first year of retirement. For each row, enter the option number or the computed value asked for. The first scored row is the framing decision: what is the right first question?</p><p><strong>Two tracks:</strong> the worked example above (Jordan) shows the method on a completed projection — study it first if you like. The DIY track below is Alex's projection, which you build yourself. Both use example numbers only, and the 7% return is an example assumption, not a promise.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "FRAMING DECISION — Step 0: What is the right first question for Alex's retirement projection? 1) How much will $400 a month grow to by age 65? 2) Which single stock will double next year? 3) How much can Alex spend on a new car today?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "retire_framing",
            "expected": 1,
            "hint": "The projection starts with the growth question — monthly amount, years, and an assumed return. No one can pick a stock that will double (2), and a car purchase (3) is a spending question, not a retirement question."
          }
        ]
      },
      {
        "label": "COMPUTED — Alex invests $400 a month for 35 years at a 7% example average annual return. What is the future value at age 65? (Enter the dollar amount, to the nearest dollar.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "retire_fv_400",
            "expected": 720422,
            "hint": "Future value ≈ $720,421.84, or $720,422 to the nearest dollar. The monthly contribution, the 35-year horizon, and compounding do the work together."
          }
        ]
      },
      {
        "label": "COMPUTED — Alex contributes $400 a month for 35 years (420 months). How much did Alex contribute in total? (Enter the dollar amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "retire_contrib_400",
            "expected": 168000,
            "hint": "Contributions = $400 × 420 = $168,000. That is the money Alex actually put in — everything above it is growth."
          }
        ]
      },
      {
        "label": "COMPUTED — Future value is $720,422 and contributions are $168,000. How much is growth? (Enter the dollar amount, to the nearest dollar.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "retire_growth_400",
            "expected": 552422,
            "hint": "Growth = $720,422 − $168,000 = $552,422 (exactly $552,421.84). Growth is more than triple the contributions — that is 35 years of compounding."
          }
        ]
      },
      {
        "label": "COMPUTED — If Alex invests only $200 a month for 35 years at the same 7% example return, what is the future value? (Enter the dollar amount, to the nearest dollar.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "retire_fv_200",
            "expected": 360211,
            "hint": "Half the monthly amount gives half the future value: $360,210.92, or $360,211. The relationship is linear — double the contribution, double the ending value."
          }
        ]
      },
      {
        "label": "COMPUTED — If Alex invests $600 a month for 35 years at the same 7% example return, what is the future value? (Enter the dollar amount, to the nearest dollar.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "retire_fv_600",
            "expected": 1080633,
            "hint": "Future value ≈ $1,080,632.76, or $1,080,633. An extra $200 a month — $84,000 more in contributions — adds about $360,211 to the ending value."
          }
        ]
      },
      {
        "label": "COMPUTED — Alex also has a $10,000 lump sum to invest once, at the same 7% example return for 35 years. What is it worth at 65? (Enter the dollar amount, to the nearest dollar.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "retire_lump",
            "expected": 106766,
            "hint": "Future value = $10,000 × (1.07)^35 ≈ $106,765.81, or $106,766. One lump sum, left alone for 35 years, grows more than tenfold at the example return."
          }
        ]
      },
      {
        "label": "COMPUTED — Alex waits until 40 and invests $400 a month for only 25 years at the same 7% example return. What is the future value? (Enter the dollar amount, to the nearest dollar.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "retire_delayed",
            "expected": 324029,
            "hint": "Future value ≈ $324,028.68, or $324,029. Ten fewer years of compounding cuts the ending value by more than half."
          }
        ]
      },
      {
        "label": "COMPUTED — Starting at 30 gives $720,422; starting at 40 gives $324,029. How much did waiting ten years cost? (Enter the dollar amount, to the nearest dollar.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "retire_cost_waiting",
            "expected": 396393,
            "hint": "Cost of waiting = $720,422 − $324,029 = $396,393 (exactly $396,393.16). The late starter contributed only $48,000 less but ended with $396,393 less — time is the expensive ingredient."
          }
        ]
      },
      {
        "label": "COMPUTED — Under the 4% rule, what annual income does the $720,422 nest egg support in the first year of retirement? (Enter the dollar amount, to the nearest dollar.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "retire_4pct_annual",
            "expected": 28817,
            "hint": "Annual income = $720,422 × 0.04 = $28,816.88, or $28,817. The 4% rule is a planning guidepost, not a guarantee."
          }
        ]
      },
      {
        "label": "COMPUTED — That annual income is $28,817. What is it per month? (Enter the dollar amount, to the nearest dollar.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "retire_4pct_monthly",
            "expected": 2401,
            "hint": "Monthly income = $28,817 ÷ 12 = $2,401.41, or $2,401. Add Social Security and any pension on top of this — the 4% rule covers only the part savings must provide."
          }
        ]
      },
      {
        "label": "DECISION — Which move grows the nest egg the most? 1) Start now at $400 a month for 35 years 2) Wait 10 years, then contribute $600 a month for 25 years 3) Keep the money in a checking account",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "retire_best_move",
            "expected": 1,
            "hint": "Starting now at $400 a month gives $720,422. Waiting and contributing $600 a month for 25 years gives only about $486,043 — even the bigger contribution cannot catch up with ten lost years of compounding. Checking (3) earns almost nothing."
          }
        ]
      },
      {
        "label": "DECISION — What does the 4% rule assume? 1) Withdraw 4% in year one, then adjust that amount for inflation in later years 2) Withdraw everything at 65 3) Spend 4% of the balance every month",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "retire_4pct_meaning",
            "expected": 1,
            "hint": "The 4% rule means 4% of the starting balance in year one, adjusted for inflation after that — about $28,817 a year on $720,422. Withdrawing everything (2) leaves nothing for later years, and 4% a month (3) would drain the nest egg in about two years."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "retirement-projection.csv",
    "csv": "Decision point,Your call\n\"FRAMING DECISION — Step 0: What is the right first question for Alex's retirement projection? 1) How much will $400 a month grow to by age 65? 2) Which single stock will double next year? 3) How much can Alex spend on a new car today?\",\n\"COMPUTED — Alex invests $400 a month for 35 years at a 7% example average annual return. What is the future value at age 65? (Enter the dollar amount, to the nearest dollar.)\",\n\"COMPUTED — Alex contributes $400 a month for 35 years (420 months). How much did Alex contribute in total? (Enter the dollar amount.)\",\n\"COMPUTED — Future value is $720,422 and contributions are $168,000. How much is growth? (Enter the dollar amount, to the nearest dollar.)\",\n\"COMPUTED — If Alex invests only $200 a month for 35 years at the same 7% example return, what is the future value? (Enter the dollar amount, to the nearest dollar.)\",\n\"COMPUTED — If Alex invests $600 a month for 35 years at the same 7% example return, what is the future value? (Enter the dollar amount, to the nearest dollar.)\",\n\"COMPUTED — Alex also has a $10,000 lump sum to invest once, at the same 7% example return for 35 years. What is it worth at 65? (Enter the dollar amount, to the nearest dollar.)\",\n\"COMPUTED — Alex waits until 40 and invests $400 a month for only 25 years at the same 7% example return. What is the future value? (Enter the dollar amount, to the nearest dollar.)\",\n\"COMPUTED — Starting at 30 gives $720,422; starting at 40 gives $324,029. How much did waiting ten years cost? (Enter the dollar amount, to the nearest dollar.)\",\n\"COMPUTED — Under the 4% rule, what annual income does the $720,422 nest egg support in the first year of retirement? (Enter the dollar amount, to the nearest dollar.)\",\n\"COMPUTED — That annual income is $28,817. What is it per month? (Enter the dollar amount, to the nearest dollar.)\",\n\"DECISION — Which move grows the nest egg the most? 1) Start now at $400 a month for 35 years 2) Wait 10 years, then contribute $600 a month for 25 years 3) Keep the money in a checking account\",\n\"DECISION — What does the 4% rule assume? 1) Withdraw 4% in year one, then adjust that amount for inflation in later years 2) Withdraw everything at 65 3) Spend 4% of the balance every month\",\n"
  }
];
