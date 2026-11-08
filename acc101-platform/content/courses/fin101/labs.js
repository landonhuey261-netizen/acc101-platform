// FIN101 — Scenario labs.
// Each row is checked on a single numeric input in column 1 (option number or computed value),
// except the TVM workpaper, which uses the ACC 101 multi-column workpaper pattern with a CSV download.

module.exports = [
  {
    "id": "tvm-loan-amortization",
    "title": "Time Value of Money & Loan Amortization",
    "introHtml": "<p>NorthTrail Outfitters is borrowing <strong>$60,000</strong> to buy equipment, at <strong>6% annual interest</strong>, repaid in <strong>5 annual payments</strong>. In this workpaper you will build the full amortization schedule: each year's payment, how much of it is interest, how much is principal, and the balance that remains. The schedule is the time value of money from Module 3, seen from the borrower's side.</p><p><strong>Worked example — study this first (a smaller loan, already completed):</strong> a $12,000 loan at 5% for 2 years has an annual payment of $6,453.66. Year 1: interest $600.00 (5% of $12,000), principal $5,853.66, balance $6,146.34. Year 2: interest $307.32 (5% of $6,146.34), principal $6,146.34, balance $0.00. Total interest $907.32. Your loan below follows the exact same steps, with different numbers.</p><p><strong>TVM check (from Module 3, for reference):</strong> $10,000 at 5% for 10 years grows to $16,288.95; $20,000 due in 8 years at 6% is worth $12,548.25 today; saving $2,000 a year at 5% for 10 years grows to $25,155.79; receiving $5,000 a year for 5 years at 6% is worth $21,061.82 today.</p>",
    "taskHtml": "<p><strong>Step 0 — Read the case.</strong> Loan: $60,000 at 6% annual interest, 5 annual payments. The annual payment is $14,243.78. Each year: interest = 6% of the balance at the start of the year; principal = payment − interest; ending balance = starting balance − principal. <strong>Good looks like:</strong> the payment is the same every year, the interest falls every year, the principal rises every year, and the balance reaches exactly $0.00 in Year 5. If your balance does not reach $0.00, one of the earlier rows is wrong — work backward from Year 1. The first scored row is the framing decision: what is the annual payment — the number every other row depends on.</p><ol><li>First, the framing decision: choose the annual payment.</li><li>Enter the payment, interest, principal, and ending balance for each year.</li><li>Total the five years in the Totals row.</li><li>Confirm the ending balance is $0.00 and total principal equals the $60,000 borrowed.</li></ol>",
    "headers": [
      "Year",
      "Payment ($)",
      "Interest ($)",
      "Principal ($)",
      "Ending Balance ($)"
    ],
    "rows": [
      {
        "label": "Step 0 — Framing decision: What is NorthTrail's annual payment on the $60,000 loan? (1) $12,000.00 — the loan divided by 5 years, ignoring interest (2) $14,243.78 — the amortizing payment that covers interest plus principal (3) $15,600.00 — $12,000 of principal plus $3,600 of first-year interest, every year",
        "cells": [
          "",
          "",
          "",
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tvm_frame",
            "expected": 2,
            "hint": "The payment must cover interest as well as principal: $14,243.78 a year. $12,000 (1) ignores interest entirely, and $15,600 (3) charges the first year's $3,600 of interest every year, as if the balance never fell."
          }
        ]
      },
      {
        "label": "Year 0 — Loan taken out",
        "cells": [
          "—",
          "—",
          "—",
          "60,000"
        ],
        "inputs": []
      },
      {
        "label": "Year 1",
        "cells": [
          "",
          "",
          "",
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tvm_pmt_1",
            "expected": 14243.78,
            "hint": "The payment is the same every year: $14,243.78."
          },
          {
            "col": 2,
            "key": "tvm_int_1",
            "expected": 3600.0,
            "hint": "Year 1 interest = 6% of $60,000 = $3,600.00."
          },
          {
            "col": 3,
            "key": "tvm_prin_1",
            "expected": 10643.78,
            "hint": "Principal = payment − interest = $14,243.78 − $3,600.00 = $10,643.78."
          },
          {
            "col": 4,
            "key": "tvm_bal_1",
            "expected": 49356.22,
            "hint": "Balance = $60,000 − $10,643.78 = $49,356.22."
          }
        ]
      },
      {
        "label": "Year 2",
        "cells": [
          "",
          "",
          "",
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tvm_pmt_2",
            "expected": 14243.78,
            "hint": "The payment is the same every year: $14,243.78."
          },
          {
            "col": 2,
            "key": "tvm_int_2",
            "expected": 2961.37,
            "hint": "Year 2 interest = 6% of $49,356.22 = $2,961.37."
          },
          {
            "col": 3,
            "key": "tvm_prin_2",
            "expected": 11282.41,
            "hint": "Principal = $14,243.78 − $2,961.37 = $11,282.41."
          },
          {
            "col": 4,
            "key": "tvm_bal_2",
            "expected": 38073.8,
            "hint": "Balance = $49,356.22 − $11,282.41 = $38,073.80."
          }
        ]
      },
      {
        "label": "Year 3",
        "cells": [
          "",
          "",
          "",
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tvm_pmt_3",
            "expected": 14243.78,
            "hint": "The payment is the same every year: $14,243.78."
          },
          {
            "col": 2,
            "key": "tvm_int_3",
            "expected": 2284.43,
            "hint": "Year 3 interest = 6% of $38,073.80 = $2,284.43."
          },
          {
            "col": 3,
            "key": "tvm_prin_3",
            "expected": 11959.36,
            "hint": "Principal = $14,243.78 − $2,284.43 = $11,959.36."
          },
          {
            "col": 4,
            "key": "tvm_bal_3",
            "expected": 26114.45,
            "hint": "Balance = $38,073.80 − $11,959.36 = $26,114.45."
          }
        ]
      },
      {
        "label": "Year 4",
        "cells": [
          "",
          "",
          "",
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tvm_pmt_4",
            "expected": 14243.78,
            "hint": "The payment is the same every year: $14,243.78."
          },
          {
            "col": 2,
            "key": "tvm_int_4",
            "expected": 1566.87,
            "hint": "Year 4 interest = 6% of $26,114.45 = $1,566.87."
          },
          {
            "col": 3,
            "key": "tvm_prin_4",
            "expected": 12676.92,
            "hint": "Principal = $14,243.78 − $1,566.87 = $12,676.92."
          },
          {
            "col": 4,
            "key": "tvm_bal_4",
            "expected": 13437.53,
            "hint": "Balance = $26,114.45 − $12,676.92 = $13,437.53."
          }
        ]
      },
      {
        "label": "Year 5",
        "cells": [
          "",
          "",
          "",
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tvm_pmt_5",
            "expected": 14243.78,
            "hint": "The payment is the same every year: $14,243.78."
          },
          {
            "col": 2,
            "key": "tvm_int_5",
            "expected": 806.25,
            "hint": "Year 5 interest = 6% of $13,437.53 = $806.25."
          },
          {
            "col": 3,
            "key": "tvm_prin_5",
            "expected": 13437.53,
            "hint": "Principal = $14,243.78 − $806.25 = $13,437.53 — the whole remaining balance."
          },
          {
            "col": 4,
            "key": "tvm_bal_5",
            "expected": 0.0,
            "hint": "Balance = $13,437.53 − $13,437.53 = $0.00. The loan is repaid."
          }
        ]
      },
      {
        "label": "Totals (5 years)",
        "cells": [
          "",
          "",
          "",
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tvm_tot_pmt",
            "expected": 71218.92,
            "hint": "Total paid = 5 × the exact payment $14,243.784… = $71,218.92 (the rounded payments add to $71,218.90 — the $0.02 is rounding)."
          },
          {
            "col": 2,
            "key": "tvm_tot_int",
            "expected": 11218.92,
            "hint": "Total interest = $3,600.00 + $2,961.37 + $2,284.43 + $1,566.87 + $806.25 = $11,218.92."
          },
          {
            "col": 3,
            "key": "tvm_tot_prin",
            "expected": 60000,
            "hint": "Total principal must equal the $60,000 borrowed."
          },
          {
            "col": 4,
            "key": "tvm_tot_bal",
            "expected": 0,
            "hint": "The ending balance after Year 5 is $0.00 — the loan is fully repaid."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "tvm-loan-amortization.csv",
    "csv": "Year,Payment,Interest,Principal,Ending Balance\nStep 0 - Framing decision (enter 1, 2, or 3),,,,\nYear 0,,,,\nYear 1,,,,\nYear 2,,,,\nYear 3,,,,\nYear 4,,,,\nYear 5,,,,\nTotals (5 years),,,,\n"
  },
  {
    "id": "capital-budgeting-npv-irr",
    "title": "Capital Budgeting: NPV & IRR",
    "introHtml": "<p><strong>Case: NorthTrail Outfitters must choose one machine.</strong> Project A is a new packaging machine costing $100,000, returning $30,000 a year for 5 years. Project B is a cheaper machine costing $80,000, returning $22,000 a year for 5 years. NorthTrail's cost of capital (hurdle rate) is 10%. Your task: value both projects with NPV, IRR, payback, and the profitability index — and choose the one that creates the most value.</p><p><strong>Worked example — study this first (Project C, already completed):</strong> Project C costs $50,000 and returns $14,000 a year for 5 years at 10%. The 5-year, 10% annuity factor is 3.7908. Present value of inflows = $14,000 × 3.7908 = $53,071.01. NPV = $53,071.01 − $50,000 = $3,071.01 (positive — take it). IRR = 12.38% (beats the 10% hurdle). Payback = $50,000 ÷ $14,000 = 3.57 years. Profitability index = $53,071.01 ÷ $50,000 = 1.06. Your projects below follow the exact same steps.</p>",
    "taskHtml": "<p><strong>Step 0 — Read the case.</strong> The 5-year, 10% annuity factor is 3.7908. Project A: cost $100,000, $30,000 a year for 5 years. Project B: cost $80,000, $22,000 a year for 5 years. Hurdle rate 10%. <strong>Good looks like:</strong> NPV computed from discounted cash flows (not from total cash), IRR compared with the hurdle, and the decision made on NPV — the measure of value in dollars. <strong>The correct order:</strong> Step 1 — Choose the primary criterion (NPV). Step 2 — Value Project A. Step 3 — Value Project B. Step 4 — Compare and decide.</p><p><strong>Discounted cash flows for Project A (for the discounted payback row):</strong> Year 1 $27,272.73; Year 2 $24,793.39; Year 3 $22,539.44; Year 4 $20,490.40; Year 5 $18,627.64. Cumulative after Year 4: $95,095.96.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "FRAMING DECISION — Which criterion should be primary when choosing between projects? 1) Net present value — it measures value in dollars 2) Simple payback alone 3) Total undiscounted cash 4) Gut feeling",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cb_framing",
            "expected": 1,
            "hint": "NPV is the gold standard: it counts all cash flows, when they arrive, in dollars of value. Payback alone (2) ignores everything after the payback date; total cash (3) ignores timing; gut feeling (4) is not a criterion."
          }
        ]
      },
      {
        "label": "COMPUTED — The 5-year, 10% annuity factor is:",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cb_factor",
            "expected": 3.79,
            "hint": "The annuity factor is (1 − 1.10^−5) ÷ 0.10 = 3.7908. Enter 3.79."
          }
        ]
      },
      {
        "label": "COMPUTED — Project A: present value of inflows = $30,000 × 3.7908. What is it, in dollars?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cb_pv_a",
            "expected": 113723.6,
            "hint": "$30,000 × 3.7908 = $113,723.60."
          }
        ]
      },
      {
        "label": "COMPUTED — Project A: NPV = present value of inflows − $100,000 cost. What is it, in dollars?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cb_npv_a",
            "expected": 13723.6,
            "hint": "$113,723.60 − $100,000 = $13,723.60. Positive — Project A creates value."
          }
        ]
      },
      {
        "label": "COMPUTED — Project A: IRR, as a percentage. (Enter to two decimal places, e.g. 15.24 for 15.24%.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cb_irr_a",
            "expected": 15.24,
            "hint": "The IRR is the rate that makes NPV zero: 15.24%. It beats the 10% hurdle, so take Project A."
          }
        ]
      },
      {
        "label": "COMPUTED — Project A: simple payback, in years. (Enter to two decimal places.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cb_pay_a",
            "expected": 3.33,
            "hint": "$100,000 ÷ $30,000 = 3.33 years."
          }
        ]
      },
      {
        "label": "COMPUTED — Project A: profitability index. (Enter to two decimal places.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cb_pi_a",
            "expected": 1.14,
            "hint": "$113,723.60 ÷ $100,000 = 1.14. Each dollar returns $1.14 in present value."
          }
        ]
      },
      {
        "label": "COMPUTED — Project B: present value of inflows = $22,000 × 3.7908. What is it, in dollars?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cb_pv_b",
            "expected": 83397.31,
            "hint": "$22,000 × 3.7908 = $83,397.31."
          }
        ]
      },
      {
        "label": "COMPUTED — Project B: NPV = present value of inflows − $80,000 cost. What is it, in dollars?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cb_npv_b",
            "expected": 3397.31,
            "hint": "$83,397.31 − $80,000 = $3,397.31. Positive, but smaller than Project A's $13,723.60."
          }
        ]
      },
      {
        "label": "COMPUTED — Project B: IRR, as a percentage. (Enter to two decimal places.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cb_irr_b",
            "expected": 11.65,
            "hint": "The IRR is 11.65% — above the 10% hurdle, but below Project A's 15.24%."
          }
        ]
      },
      {
        "label": "COMPUTED — Project A: discounted payback, in years. (Enter to two decimal places.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cb_disc_pay_a",
            "expected": 4.26,
            "hint": "Cumulative discounted inflows reach $95,095.96 after Year 4. The remaining $4,904.04 is $4,904.04 ÷ $18,627.64 = 0.26 of Year 5, so discounted payback is 4.26 years."
          }
        ]
      },
      {
        "label": "DECISION — Which project should NorthTrail take? 1) Project A 2) Project B 3) Neither 4) Both",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cb_decision",
            "expected": 1,
            "hint": "Project A wins on NPV ($13,723.60 vs. $3,397.31), on IRR (15.24% vs. 11.65%), and on profitability index (1.14 vs. 1.04). Take A. Both (4) is not an option — the firm must choose one machine."
          }
        ]
      },
      {
        "label": "COMPUTED — Project A: total undiscounted cash inflows over 5 years, in dollars.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cb_total_a",
            "expected": 150000,
            "hint": "5 × $30,000 = $150,000. Undiscounted total ignores timing — which is why NPV, not this number, decides."
          }
        ]
      }
    ],
    "passing": 70
  }
];
