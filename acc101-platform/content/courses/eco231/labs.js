module.exports = [
  {
    "id": "cost-benefit-analysis",
    "title": "Cost-Benefit Analysis — Weigh a Policy's Costs Against Its Benefits",
    "introHtml": "<p><strong>Case: Should the town build a neighborhood health clinic?</strong> The town council is deciding whether to build a small health clinic in a neighborhood that has no doctor's office. The clinic would cost <strong>$500,000</strong> to build now (Year 0) and <strong>$80,000 a year</strong> to run for the next 5 years (Years 1–5). Its benefits — fewer emergency-room visits, less time off work sick, and earlier treatment — are valued at <strong>$220,000 a year</strong> for the same 5 years. All numbers in this lab are worked examples for practice, not real-world statistics. Your task: weigh the costs against the benefits, step by step, using a discount rate of <strong>5%</strong>, and decide whether the clinic is worth building. The first scored row is the framing decision: which option should the town evaluate?</p><p><strong>Worked example first — the Riverside Park (completed for you).</strong> A park costs $100,000 to build now and brings benefits of $30,000 a year for 5 years. The discount rate is 5%, and the 5-year annuity factor at 5% is 4.3295. Present value of benefits = $30,000 × 4.3295 = $129,885. Present value of costs = $100,000 (all paid now, so no discounting). Net benefit = $129,885 − $100,000 = $29,885. Benefit-cost ratio = $129,885 ÷ $100,000 = 1.30. Because the net benefit is positive and the ratio is above 1, the park is worth building. Notice the pattern you will repeat for the clinic: discount the yearly flows with the annuity factor, add up the present values, subtract costs from benefits, divide benefits by costs, and then decide. Now do the clinic yourself below.</p>",
    "taskHtml": "<p><strong>Step 0 — Read the case.</strong> The clinic is a 5-year project. Costs: $500,000 now (Year 0) plus $80,000 a year to run (Years 1–5). Benefits: $220,000 a year (Years 1–5). The discount rate is 5%, so a dollar in a future year is worth less than a dollar today, and the 5-year annuity factor at 5% is <strong>4.3295</strong> — the present value of $1 a year for 5 years. Use it to turn each yearly flow into a present value. For each row, enter the option number or the computed value asked for. The first scored row is the framing decision: which option should the town evaluate first?</p><p><strong>The steps, in order:</strong> (1) Frame the choice — build the clinic, do nothing, or build something else entirely. (2) Find the annual net benefit: yearly benefits minus yearly running costs. (3) Discount the yearly benefits to present value with the annuity factor. (4) Discount the yearly running costs the same way. (5) Add the building cost to the present value of running costs for total present-value costs. (6) Subtract total costs from present-value benefits for the net benefit. (7) Divide present-value benefits by total present-value costs for the benefit-cost ratio. (8) Decide: go ahead if the net benefit is positive (ratio above 1), stop if it is not.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "FRAMING DECISION — Step 0: Which option should the town evaluate first? 1) Build the neighborhood health clinic 2) Do nothing and leave the neighborhood without a doctor's office 3) Build a sports stadium instead",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cba_framing",
            "expected": 1,
            "hint": "The case is about a neighborhood with no doctor's office, and the clinic is the project with costs and benefits laid out in the case. Doing nothing (2) is the baseline to compare against, not the project to evaluate, and a stadium (3) answers a different question entirely."
          }
        ]
      },
      {
        "label": "COMPUTED — Yearly benefits are $220,000 and yearly running costs are $80,000. What is the annual net benefit (benefits minus running costs) in Years 1–5? (Enter the dollar amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cba_annual_net",
            "expected": 140000,
            "hint": "Annual net benefit = $220,000 − $80,000 = $140,000 a year. The $500,000 building cost is not yearly — it is paid once, now, so it does not belong in this row."
          }
        ]
      },
      {
        "label": "COMPUTED — Yearly benefits are $220,000 for 5 years and the 5-year annuity factor at 5% is 4.3295. What is the present value of the benefits? (Enter the dollar amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cba_pv_benefits",
            "expected": 952490,
            "hint": "PV of benefits = $220,000 × 4.3295 = $952,490. Check: $220,000 × 4 = $880,000, plus $220,000 × 0.3295 = $72,490, for $952,490."
          }
        ]
      },
      {
        "label": "COMPUTED — Yearly running costs are $80,000 for 5 years and the 5-year annuity factor at 5% is 4.3295. What is the present value of the running costs? (Enter the dollar amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cba_pv_running",
            "expected": 346360,
            "hint": "PV of running costs = $80,000 × 4.3295 = $346,360. Check: $80,000 × 4 = $320,000, plus $80,000 × 0.3295 = $26,360, for $346,360."
          }
        ]
      },
      {
        "label": "COMPUTED — The building cost is $500,000 now and the present value of running costs is $346,360. What is the total present value of all costs? (Enter the dollar amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cba_pv_costs",
            "expected": 846360,
            "hint": "Total PV of costs = $500,000 + $346,360 = $846,360. The building cost is paid now, so it is not discounted — it enters at its full $500,000."
          }
        ]
      },
      {
        "label": "COMPUTED — Present value of benefits is $952,490 and total present value of costs is $846,360. What is the net benefit? (Enter the dollar amount.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cba_net_benefit",
            "expected": 106130,
            "hint": "Net benefit = $952,490 − $846,360 = $106,130. Positive means the project's benefits beat its costs, in present-value terms."
          }
        ]
      },
      {
        "label": "COMPUTED — Present value of benefits is $952,490 and total present value of costs is $846,360. What is the benefit-cost ratio, to two decimal places? (Enter the ratio, e.g. 1.13.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cba_bcr",
            "expected": 1.13,
            "hint": "Benefit-cost ratio = $952,490 ÷ $846,360 = 1.1254, which rounds to 1.13. Every $1 of cost buys $1.13 of benefit. A ratio above 1 means the same thing as a positive net benefit."
          }
        ]
      },
      {
        "label": "DECISION — The net benefit is $106,130 and the benefit-cost ratio is 1.13. What should the town do? 1) Build the clinic — the benefits beat the costs 2) Reject the clinic — the costs beat the benefits",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cba_decision",
            "expected": 1,
            "hint": "Build it: the net benefit is positive ($106,130) and the benefit-cost ratio is above 1 (1.13), so the project passes the Kaldor-Hicks test from Module 10. Rejecting it (2) would throw away $106,130 of net value."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "cost-benefit-analysis.csv",
    "csv": "Decision point,Your call\n\"FRAMING DECISION — Step 0: Which option should the town evaluate first? 1) Build the neighborhood health clinic 2) Do nothing and leave the neighborhood without a doctor's office 3) Build a sports stadium instead\",\n\"COMPUTED — Yearly benefits are $220,000 and yearly running costs are $80,000. What is the annual net benefit (benefits minus running costs) in Years 1–5? (Enter the dollar amount.)\",\n\"COMPUTED — Yearly benefits are $220,000 for 5 years and the 5-year annuity factor at 5% is 4.3295. What is the present value of the benefits? (Enter the dollar amount.)\",\n\"COMPUTED — Yearly running costs are $80,000 for 5 years and the 5-year annuity factor at 5% is 4.3295. What is the present value of the running costs? (Enter the dollar amount.)\",\n\"COMPUTED — The building cost is $500,000 now and the present value of running costs is $346,360. What is the total present value of all costs? (Enter the dollar amount.)\",\n\"COMPUTED — Present value of benefits is $952,490 and total present value of costs is $846,360. What is the net benefit? (Enter the dollar amount.)\",\n\"COMPUTED — Present value of benefits is $952,490 and total present value of costs is $846,360. What is the benefit-cost ratio, to two decimal places? (Enter the ratio, e.g. 1.13.)\",\n\"DECISION — The net benefit is $106,130 and the benefit-cost ratio is 1.13. What should the town do? 1) Build the clinic — the benefits beat the costs 2) Reject the clinic — the costs beat the benefits\",\n"
  }
];
