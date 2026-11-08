// Economics Capstone — labs.js (original practice content)
module.exports = [
  {
    "id": "research-data-analysis",
    "title": "Research Data Analysis — Regression, Significance & Forecasting",
    "introHtml": "<p><strong>Dataset (teaching sample — stated plainly, not real survey data):</strong> 10 workers. Years of schooling: 12, 12, 14, 14, 16, 16, 18, 18, 20, 20. Hourly wage in dollars: 14, 16, 18, 20, 22, 25, 27, 30, 33, 36. The research question is: does more schooling raise hourly pay? You will compute the means, run the regression by hand, test the slope, and check a forecast — the same numbers the paper uses in Modules 5–7. <strong>Correlation is not causation:</strong> a strong slope here is an association; whether schooling causes higher wages is a question this sample alone cannot settle (ability bias, reverse causation, and family background are all in the error term).</p><p><strong>Worked example track (study this first):</strong> a smaller 5-worker sample — schooling 12, 14, 16, 18, 20 and wages 15, 19, 23, 27, 31. Mean wage = (15 + 19 + 23 + 27 + 31) ÷ 5 = 115 ÷ 5 = $23.00. Mean schooling = (12 + 14 + 16 + 18 + 20) ÷ 5 = 80 ÷ 5 = 16.0 years. Sxx = 40, Sxy = 80, so slope = 80 ÷ 40 = 2.00, intercept = 23 − 2.00 × 16 = −9. The line wage = −9 + 2.00 × schooling predicts every worker exactly (at 12 years: −9 + 24 = 15; at 20 years: −9 + 40 = 31), so R² = 1.00 — a perfect fit, which the real 10-worker sample does not have. Now do the same steps on the 10-worker sample in the DIY track below.</p><p><strong>DIY track:</strong> work the rows in order. Money answers are rounded to two decimals where the hint says so; the grader checks the rounded value. The first scored row is the framing decision.</p>",
    "taskHtml": "<p><strong>Step 0 — The data.</strong> Before any computation: read the dataset in the intro, note the question (does more schooling raise hourly pay?), the two variables (years of schooling, hourly wage in dollars), and what good analysis looks like: means first, then the regression, then the significance test, then the forecast check — and a causation warning at the end, not a causal claim. The first scored row is the framing decision: which question this lab is testing. Then compute in order: mean wage, mean schooling, median wage, slope, intercept, a prediction at 20 years, R², the t-statistic, the p-value read, a forecast at 15 years, one residual, and the causation decision. For each row, enter the option number or the computed value asked for.</p><p><strong>Numbers you will need:</strong> wages sum to 241; schooling sums to 160; Sxx = 80.0; Sxy = 194.0; SSR = 20.45; SST = 490.90; standard error of the slope = 0.18; 5% critical t-value with 8 degrees of freedom = 2.31. Slope = Sxy ÷ Sxx; intercept = mean wage − slope × mean schooling; R² = 1 − SSR ÷ SST; t = slope ÷ standard error; prediction = intercept + slope × schooling; residual = actual − predicted.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "FRAMING — Step 0: Which question is this lab testing? 1) Does more schooling raise hourly pay? 2) Does higher pay cause more schooling? 3) Are wages random? 4) Should everyone get a PhD?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_framing",
            "expected": 1,
            "hint": "The paper's question is whether more schooling is associated with higher hourly pay — schooling is the independent variable, wage the dependent one. (2) reverses the arrow. (3) is not a testable question. (4) is a policy slogan, not a research question."
          }
        ]
      },
      {
        "label": "COMPUTED — Mean wage: the 10 wages sum to 241. What is the mean hourly wage in dollars? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_mean_wage",
            "expected": 24.1,
            "hint": "241 ÷ 10 = $24.10 an hour."
          }
        ]
      },
      {
        "label": "COMPUTED — Mean schooling: the 10 schooling values sum to 160. What is the mean years of schooling? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_mean_school",
            "expected": 16,
            "hint": "160 ÷ 10 = 16.0 years."
          }
        ]
      },
      {
        "label": "COMPUTED — Median wage: sorted wages are 14, 16, 18, 20, 22, 25, 27, 30, 33, 36. What is the median wage in dollars? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_median_wage",
            "expected": 23.5,
            "hint": "With 10 values the median is the average of the 5th and 6th: (22 + 25) ÷ 2 = $23.50."
          }
        ]
      },
      {
        "label": "COMPUTED — Slope: Sxy = 194.0 and Sxx = 80.0. What is the regression slope, in dollars of hourly wage per extra year of schooling? (Round to two decimals.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_slope",
            "expected": 2.43,
            "hint": "Slope = Sxy ÷ Sxx = 194.0 ÷ 80.0 = 2.425, rounded to 2.43."
          }
        ]
      },
      {
        "label": "COMPUTED — Intercept: mean wage $24.10, mean schooling 16.0, slope 2.425. What is the intercept? (Round to two decimals; enter the number, including the minus sign.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_intercept",
            "expected": -14.7,
            "hint": "Intercept = 24.10 − 2.425 × 16.0 = 24.10 − 38.80 = −14.70. Report it; never interpret it — zero schooling is outside the data."
          }
        ]
      },
      {
        "label": "COMPUTED — Prediction: using wage = −14.70 + 2.425 × schooling, what is the predicted hourly wage for a worker with 20 years of schooling? (Round to two decimals.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_pred20",
            "expected": 33.8,
            "hint": "−14.70 + 2.425 × 20 = −14.70 + 48.50 = $33.80. The actual group mean at 20 years is $34.50 — the line tracks it closely."
          }
        ]
      },
      {
        "label": "COMPUTED — Fit: SSR = 20.45 and SST = 490.90. What is R²? (Round to two decimals.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_r2",
            "expected": 0.96,
            "hint": "R² = 1 − SSR ÷ SST = 1 − 20.45 ÷ 490.90 = 1 − 0.0417 = 0.958, rounded to 0.96. The line explains 96% of the variation in wages — a tight fit, not a causal proof."
          }
        ]
      },
      {
        "label": "COMPUTED — Significance: slope 2.425, standard error 0.18. What is the t-statistic? (Round to two decimals.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_tstat",
            "expected": 13.57,
            "hint": "t = 2.425 ÷ 0.18 = 13.57. With 8 degrees of freedom the 5% critical value is 2.31 — 13.57 is far beyond it."
          }
        ]
      },
      {
        "label": "DECISION — The slope's t-statistic is 13.57 (df = 8, 5% critical value 2.31). What is the right read? 1) p < 0.01: reject H₀, the slope is statistically significant 2) p > 0.05: fail to reject H₀ 3) The slope is zero 4) The sample is too small to test anything",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_pvalue",
            "expected": 1,
            "hint": "13.57 > 2.31, so the null of a zero slope is rejected, and the p-value is far below 0.01 — a slope this large would almost never occur by chance if the true slope were zero. Significance is not causation, though — that is the last row."
          }
        ]
      },
      {
        "label": "COMPUTED — Forecast check: using wage = −14.70 + 2.425 × schooling, what is the predicted hourly wage for a worker with 15 years of schooling? (Round to two decimals.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_pred15",
            "expected": 21.68,
            "hint": "−14.70 + 2.425 × 15 = −14.70 + 36.375 = 21.675, rounded to $21.68. 15 years is inside the observed range (12–20), so this is interpolation, not extrapolation."
          }
        ]
      },
      {
        "label": "COMPUTED — Residual: a worker with 16 years of schooling earns $22 an hour. The line predicts $24.10. What is the residual (actual − predicted)? (Enter the number, including the minus sign.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_residual",
            "expected": -2.1,
            "hint": "Residual = 22 − 24.10 = −$2.10. The worker earns $2.10 less than the line predicts — ability, occupation, or luck, sitting in the error term."
          }
        ]
      },
      {
        "label": "DECISION — The slope is $2.43 and R² = 0.96. What may you claim? 1) Schooling causes a $2.43 raise 2) Schooling is associated with higher wages; causation is not proven here 3) The regression proves the policy case 4) The result generalizes to the whole U.S. labor market",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_causation",
            "expected": 2,
            "hint": "Correlation is not causation: ability bias, reverse causation, and family background are all in the error term, and 10 workers in a teaching sample do not generalize. The causal case rests on the literature's natural experiments, not on this regression alone."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "research-data-analysis.csv",
    "csv": "Decision point,Your call\n\"FRAMING — Step 0: Which question is this lab testing? 1) Does more schooling raise hourly pay? 2) Does higher pay cause more schooling? 3) Are wages random? 4) Should everyone get a PhD?\",\n\"COMPUTED — Mean wage: the 10 wages sum to 241. What is the mean hourly wage in dollars? (Enter the number.)\",\n\"COMPUTED — Mean schooling: the 10 schooling values sum to 160. What is the mean years of schooling? (Enter the number.)\",\n\"COMPUTED — Median wage: sorted wages are 14, 16, 18, 20, 22, 25, 27, 30, 33, 36. What is the median wage in dollars? (Enter the number.)\",\n\"COMPUTED — Slope: Sxy = 194.0 and Sxx = 80.0. What is the regression slope, in dollars of hourly wage per extra year of schooling? (Round to two decimals.)\",\n\"COMPUTED — Intercept: mean wage $24.10, mean schooling 16.0, slope 2.425. What is the intercept? (Round to two decimals; enter the number, including the minus sign.)\",\n\"COMPUTED — Prediction: using wage = −14.70 + 2.425 × schooling, what is the predicted hourly wage for a worker with 20 years of schooling? (Round to two decimals.)\",\n\"COMPUTED — Fit: SSR = 20.45 and SST = 490.90. What is R²? (Round to two decimals.)\",\n\"COMPUTED — Significance: slope 2.425, standard error 0.18. What is the t-statistic? (Round to two decimals.)\",\n\"DECISION — The slope's t-statistic is 13.57 (df = 8, 5% critical value 2.31). What is the right read? 1) p < 0.01: reject H₀, the slope is statistically significant 2) p > 0.05: fail to reject H₀ 3) The slope is zero 4) The sample is too small to test anything\",\n\"COMPUTED — Forecast check: using wage = −14.70 + 2.425 × schooling, what is the predicted hourly wage for a worker with 15 years of schooling? (Round to two decimals.)\",\n\"COMPUTED — Residual: a worker with 16 years of schooling earns $22 an hour. The line predicts $24.10. What is the residual (actual − predicted)? (Enter the number, including the minus sign.)\",\n\"DECISION — The slope is $2.43 and R² = 0.96. What may you claim? 1) Schooling causes a $2.43 raise 2) Schooling is associated with higher wages; causation is not proven here 3) The regression proves the policy case 4) The result generalizes to the whole U.S. labor market\",\n"
  }
];
