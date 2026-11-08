module.exports = [
  {
    "id": "run-a-regression",
    "title": "Run a Regression — Interpret Coefficients, R² & p-Values",
    "introHtml": "<p><strong>Step 0 — The data.</strong> Ten shops report their monthly advertising spending (X, in $1,000s) and their monthly sales (Y, in $1,000s): X = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 and Y = 12, 14, 18, 14, 22, 22, 24, 28, 24, 32. <strong>Say it plainly: these are clearly-labeled example numbers for teaching, not real data from any real shops, and not a publishable finding.</strong> The method is real; the numbers are illustrative. The question is: does advertising raise sales, and by how much? A good analysis states the question, fits the line, tests the slope, checks the assumptions, and ends with the limits — including the fact that correlation is not causation (shops that advertise more may also have better locations). For each row below, enter the option number or the computed value asked for. The first scored row is the framing decision.</p><p><strong>Worked example first — study hours and exam scores (completed for you).</strong> Six students studied X = 1, 2, 3, 4, 5, 6 hours and scored Y = 53, 56, 60, 60, 66, 68. Means: x̄ = 3.5, ȳ = 60.5. Sums: Σ(X<sub>i</sub> − x̄)(Y<sub>i</sub> − ȳ) = 52.5, Σ(X<sub>i</sub> − x̄)² = 17.5. Slope: b<sub>1</sub> = 52.5 ÷ 17.5 = 3 points per hour. Intercept: b<sub>0</sub> = 60.5 − 3 × 3.5 = 50. Fitted line: Ŷ = 50 + 3X. Residuals: 0, 0, 1, −2, 1, 0; SSE = 6; SST = 163.5; R² = 1 − 6 ÷ 163.5 = 0.963. Standard error of the regression: s = √(6 ÷ 4) = 1.22. Standard error of the slope: 1.22 ÷ √17.5 = 0.29. t = 3 ÷ 0.29 = 10.25 (df = 4, critical value 2.776) — reject H<sub>0</sub>. Prediction at 7 hours: 50 + 3 × 7 = 71. Now do the advertising dataset yourself below, following exactly the same steps.</p>",
    "taskHtml": "<p><strong>Step 0 — The data (read first).</strong> Ten shops, advertising X = 1–10 ($1,000s), sales Y = 12, 14, 18, 14, 22, 22, 24, 28, 24, 32 ($1,000s). The question: does advertising raise sales, and by how much? What good analysis looks like: (1) name the dependent and independent variables; (2) compute the OLS line from the sums — the sums are Σ(X<sub>i</sub> − x̄)(Y<sub>i</sub> − ȳ) = 165, Σ(X<sub>i</sub> − x̄)² = 82.5, x̄ = 5.5, ȳ = 21; (3) compute R² from SST = 378, SSR = 330, SSE = 48; (4) test the slope with its standard error (s = 2.45, SE(b<sub>1</sub>) = 0.27, df = 8, critical value 2.306); (5) forecast and check the residuals; (6) finish by stating the limits — this is a teaching sample of 10 shops with no controls for location or price, so the slope is an association, not proof of causation. Enter the option number or computed value for each row.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "FRAMING DECISION — Step 0: Which variable is the dependent variable (the outcome to explain)? 1) Sales (Y) 2) Advertising spending (X) 3) The number of shops",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_framing",
            "expected": 1,
            "hint": "The question is whether advertising raises sales, so sales is the outcome being explained — the dependent variable Y. Advertising is the explanatory variable X. The number of shops (3) is the sample size, not a variable in the regression."
          }
        ]
      },
      {
        "label": "COMPUTED — The sums are Σ(Xi − x̄)(Yi − ȳ) = 165 and Σ(Xi − x̄)² = 82.5. What is the OLS slope b1? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_slope",
            "expected": 2,
            "hint": "b1 = 165 ÷ 82.5 = 2. Each extra $1,000 of advertising is associated with $2,000 more sales, on average."
          }
        ]
      },
      {
        "label": "COMPUTED — With x̄ = 5.5, ȳ = 21, and slope b1 = 2, what is the intercept b0? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_intercept",
            "expected": 10,
            "hint": "b0 = ȳ − b1x̄ = 21 − 2 × 5.5 = 21 − 11 = 10. The fitted line is Ŷ = 10 + 2X, in $1,000s."
          }
        ]
      },
      {
        "label": "COMPUTED — Using Ŷ = 10 + 2X, what are predicted sales when advertising is $7,000 (X = 7)? (Enter the dollar amount in $1,000s, e.g. 24 means $24,000.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_pred7",
            "expected": 24,
            "hint": "Ŷ = 10 + 2 × 7 = 24 ($24,000). The actual sales at X = 7 are also 24, so the residual there is 0."
          }
        ]
      },
      {
        "label": "COMPUTED — SST = 378 and SSR = 330. What is R², as a percentage rounded to the nearest whole percent? (Enter the number, e.g. 87 means 87%.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_r2",
            "expected": 87,
            "hint": "R² = SSR ÷ SST = 330 ÷ 378 = 0.873, i.e. 87.3%, which rounds to 87%. Advertising explains 87.3% of the variation in sales in this teaching sample."
          }
        ]
      },
      {
        "label": "COMPUTED — The slope is 2 and its standard error is 0.27. What is the t-statistic, rounded to the nearest whole number? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_t",
            "expected": 7,
            "hint": "t = 2 ÷ 0.27 = 7.42, which rounds to 7. With 8 degrees of freedom the 5% critical value is 2.306, so 7.42 is far beyond it."
          }
        ]
      },
      {
        "label": "DECISION — The t-statistic is 7.42 with a 5% critical value of 2.306. Is the slope statistically significant at 5%? 1) Yes, reject H0: β1 = 0 2) No, fail to reject H0",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_significant",
            "expected": 1,
            "hint": "|7.42| is far larger than 2.306, so reject H0 — the slope is statistically significant, with a p-value of about 0.0001. The 95% confidence interval (1.38, 2.62) also excludes zero."
          }
        ]
      },
      {
        "label": "COMPUTED — Using Ŷ = 10 + 2X, what are predicted sales when advertising is $12,000 (X = 12)? (Enter the dollar amount in $1,000s.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_forecast12",
            "expected": 34,
            "hint": "Ŷ = 10 + 2 × 12 = 34 ($34,000). Note this is an extrapolation: 12 is outside the observed range 1–10, so treat it as an illustration, not a promise."
          }
        ]
      },
      {
        "label": "COMPUTED — Using Ŷ = 10 + 2X, what are predicted sales when advertising is $15,000 (X = 15)? (Enter the dollar amount in $1,000s.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_forecast15",
            "expected": 40,
            "hint": "Ŷ = 10 + 2 × 15 = 40 ($40,000). Like the X = 12 forecast, this is an extrapolation beyond the observed range — the line may not hold that far out."
          }
        ]
      },
      {
        "label": "COMPUTED — The residuals are 0, 0, 2, −4, 2, 0, 0, 2, −4, 2. What is the mean absolute error (MAE) of the fitted values, to one decimal place? (Enter the number, e.g. 1.6.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_mae",
            "expected": 1.6,
            "hint": "Absolute residuals are 0, 0, 2, 4, 2, 0, 0, 2, 4, 2, summing to 16; MAE = 16 ÷ 10 = 1.6 ($1,600). The fitted values typically miss actual sales by $1,600."
          }
        ]
      },
      {
        "label": "COMPUTED — At X = 5, actual sales are 22 and the fitted value is 10 + 2 × 5 = 20. What is the residual (actual minus fitted)? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_resid5",
            "expected": 2,
            "hint": "Residual = actual − fitted = 22 − 20 = 2. The shop sold $2,000 more than the line predicted — a positive residual."
          }
        ]
      },
      {
        "label": "DECISION — The slope is significant (t = 7.42). Does this prove advertising causes the extra sales? 1) Yes — significance proves causation 2) No — correlation is not causation; location or product quality could explain part of the slope",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_causation",
            "expected": 2,
            "hint": "Significance shows association, not causation. Shops that advertise more may also have better locations or products — omitted variables that would bias the slope. Causation needs a design (an experiment, an instrument, or a policy change), not just a significant t-statistic."
          }
        ]
      },
      {
        "label": "DECISION — The lab is done and the slope is an association in a 10-shop teaching sample. What is the honest next step? 1) Collect more data with controls for location and price — or run an experiment — before acting on the result 2) Publish the result as proof and double the advertising budget immediately",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lab_next",
            "expected": 1,
            "hint": "A 10-shop teaching sample with no controls cannot support a budget decision. More data with controls (or an experiment) is the honest next step. Doubling the budget on one small, uncontrolled regression is exactly how bad decisions get made."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "run-a-regression.csv",
    "csv": "Decision point,Your call\n\"FRAMING DECISION — Step 0: Which variable is the dependent variable (the outcome to explain)? 1) Sales (Y) 2) Advertising spending (X) 3) The number of shops\",\n\"COMPUTED — The sums are Σ(Xi − x̄)(Yi − ȳ) = 165 and Σ(Xi − x̄)² = 82.5. What is the OLS slope b1? (Enter the number.)\",\n\"COMPUTED — With x̄ = 5.5, ȳ = 21, and slope b1 = 2, what is the intercept b0? (Enter the number.)\",\n\"COMPUTED — Using Ŷ = 10 + 2X, what are predicted sales when advertising is $7,000 (X = 7)? (Enter the dollar amount in $1,000s, e.g. 24 means $24,000.)\",\n\"COMPUTED — SST = 378 and SSR = 330. What is R², as a percentage rounded to the nearest whole percent? (Enter the number, e.g. 87 means 87%.)\",\n\"COMPUTED — The slope is 2 and its standard error is 0.27. What is the t-statistic, rounded to the nearest whole number? (Enter the number.)\",\n\"DECISION — The t-statistic is 7.42 with a 5% critical value of 2.306. Is the slope statistically significant at 5%? 1) Yes, reject H0: β1 = 0 2) No, fail to reject H0\",\n\"COMPUTED — Using Ŷ = 10 + 2X, what are predicted sales when advertising is $12,000 (X = 12)? (Enter the dollar amount in $1,000s.)\",\n\"COMPUTED — Using Ŷ = 10 + 2X, what are predicted sales when advertising is $15,000 (X = 15)? (Enter the dollar amount in $1,000s.)\",\n\"COMPUTED — The residuals are 0, 0, 2, −4, 2, 0, 0, 2, −4, 2. What is the mean absolute error (MAE) of the fitted values, to one decimal place? (Enter the number, e.g. 1.6.)\",\n\"COMPUTED — At X = 5, actual sales are 22 and the fitted value is 10 + 2 × 5 = 20. What is the residual (actual minus fitted)? (Enter the number.)\",\n\"DECISION — The slope is significant (t = 7.42). Does this prove advertising causes the extra sales? 1) Yes — significance proves causation 2) No — correlation is not causation; location or product quality could explain part of the slope\",\n\"DECISION — The lab is done and the slope is an association in a 10-shop teaching sample. What is the honest next step? 1) Collect more data with controls for location and price — or run an experiment — before acting on the result 2) Publish the result as proof and double the advertising budget immediately\",\n"
  }
];
