module.exports = {
  "midterm": {
    "title": "Midterm Exam",
    "minutes": 75,
    "passPercent": 70,
    "coverage": "Modules 1–6",
    "questions": [
      {
        "module": 1,
        "q": "In the model Y = β0 + β1X + u, β1 is:",
        "choices": [
          "The value of Y when X is zero",
          "The average change in Y when X rises by one unit",
          "The error term",
          "The sample size"
        ],
        "answer": 1,
        "explanation": "Correct (b): β1 is the slope — the average change in Y per one-unit rise in X. (a) is the intercept β0. (c) is u, the error term. (d) is n, the sample size."
      },
      {
        "module": 1,
        "q": "If Ŷ = 40 + 2.5X, with X in $1,000s of advertising and Y in $1,000s of sales, predicted sales at X = 8 are:",
        "choices": [
          "$42,500",
          "$60,000",
          "$65,000",
          "$200,000"
        ],
        "answer": 1,
        "explanation": "Correct (b): Ŷ = 40 + 2.5 × 8 = 40 + 20 = 60, in $1,000s, so $60,000. (a) is 40 + 2.5, adding the slope once. (c) is 40 + 25, using X = 10. (d) multiplies 2.5 × 80, mixing up the units."
      },
      {
        "module": 1,
        "q": "Economic data are mostly observational. The main problem this creates is:",
        "choices": [
          "The data are always wrong",
          "Differences in outcomes may come from something other than the variable studied, so causation is hard to establish",
          "Statistics cannot be used on them",
          "Regressions cannot be run on them"
        ],
        "answer": 1,
        "explanation": "Correct (b): without random assignment, an association may reflect a third factor or reverse causation. (a) is false — observational data can be excellent. (c) is false — statistics are exactly the tool for observational data. (d) is false — regressions run fine on observational data; the issue is interpretation."
      },
      {
        "module": 2,
        "q": "Six students studied X = 1, 2, 3, 4, 5, 6 hours and scored Y = 53, 56, 60, 60, 66, 68. The OLS slope is:",
        "choices": [
          "0.33",
          "2",
          "3",
          "50"
        ],
        "answer": 2,
        "explanation": "Correct (c): Σ(Xi − x̄)(Yi − ȳ) = 52.5 and Σ(Xi − x̄)² = 17.5, so b1 = 52.5 ÷ 17.5 = 3 points per hour. (a) is the reciprocal. (b) is the slope of the lab advertising dataset, not this one. (d) is the intercept."
      },
      {
        "module": 2,
        "q": "For the same six students, the intercept is:",
        "choices": [
          "3",
          "50",
          "60.5",
          "71"
        ],
        "answer": 1,
        "explanation": "Correct (b): b0 = ȳ − b1x̄ = 60.5 − 3 × 3.5 = 50. (a) is the slope. (c) is the mean of Y. (d) is the prediction at 7 hours of study."
      },
      {
        "module": 2,
        "q": "For the six students, SST = 163.5 and SSE = 6. R² is:",
        "choices": [
          "0.037",
          "0.50",
          "0.963",
          "1.00"
        ],
        "answer": 2,
        "explanation": "Correct (c): R² = 1 − SSE/SST = 1 − 6/163.5 = 1 − 0.0367 = 0.963. (a) is SSE/SST, the unexplained share. (b) has no basis in the numbers. (d) would need SSE = 0."
      },
      {
        "module": 2,
        "q": "A regression of house price (in $1,000s) on size (in 100s of square feet) gives Ŷ = 20 + 15X. The predicted price of a 1,500-square-foot house is:",
        "choices": [
          "$170,000",
          "$245,000",
          "$320,000",
          "$35,000"
        ],
        "answer": 1,
        "explanation": "Correct (b): 1,500 sq ft means X = 15, so Ŷ = 20 + 15 × 15 = 20 + 225 = 245, in $1,000s, i.e. $245,000. (a) uses X = 10. (c) uses X = 20 (2,000 sq ft). (d) is 20 + 15, adding the slope once."
      },
      {
        "module": 2,
        "q": "The OLS residuals from any fitted regression always:",
        "choices": [
          "Are all zero",
          "Sum to zero",
          "Are all positive",
          "Equal the fitted values"
        ],
        "answer": 1,
        "explanation": "Correct (b): OLS residuals always sum to zero. (a) would be a perfect fit, which is rare. (c) is false — residuals are positive and negative. (d) confuses residuals with fitted values."
      },
      {
        "module": 3,
        "q": "In the lab dataset (n = 10), the slope is b1 = 2 with SE(b1) = 0.27. The t-statistic is:",
        "choices": [
          "0.135",
          "0.54",
          "7.42",
          "55"
        ],
        "answer": 2,
        "explanation": "Correct (c): t = 2 ÷ 0.27 = 7.42. (a) is 0.27 ÷ 2, the reciprocal. (b) is 2 × 0.27. (d) is the F-statistic, t²."
      },
      {
        "module": 3,
        "q": "With df = 8 and a 5% two-sided critical value of 2.306, a t-statistic of 7.42 means you should:",
        "choices": [
          "Fail to reject H0",
          "Reject H0 — the slope is statistically significant",
          "Conclude the null is proven true",
          "Conclude the slope equals 7.42"
        ],
        "answer": 1,
        "explanation": "Correct (b): |7.42| > 2.306, so reject H0: β1 = 0. (a) reverses the decision. (c) is wrong — tests never prove the null true. (d) confuses the t-statistic with the slope, which is 2."
      },
      {
        "module": 3,
        "q": "The 95% confidence interval for the lab slope (b1 = 2, SE = 0.27, critical value 2.306) is:",
        "choices": [
          "(0.27, 7.42)",
          "(1.38, 2.62)",
          "(2.19, 3.81)",
          "(0, 2)"
        ],
        "answer": 1,
        "explanation": "Correct (b): 2 ± 2.306 × 0.27 = 2 ± 0.62 = (1.38, 2.62). (a) pairs the SE with the t-statistic. (c) is the study-hours interval. (d) is not an interval for this slope."
      },
      {
        "module": 3,
        "q": "In the study-hours example, b1 = 3, SSE = 6, n = 6, Σ(Xi − x̄)² = 17.5. The standard error of the slope is:",
        "choices": [
          "0.29",
          "1.22",
          "3.00",
          "10.25"
        ],
        "answer": 0,
        "explanation": "Correct (a): s = √(6 ÷ 4) = 1.22, and SE(b1) = 1.22 ÷ √17.5 = 1.22 ÷ 4.18 = 0.29. (b) is s, the standard error of the regression. (c) is the slope. (d) is the t-statistic."
      },
      {
        "module": 3,
        "q": "A p-value of 0.03 means:",
        "choices": [
          "There is a 3% chance the null hypothesis is true",
          "If the null were true, data at least this extreme would occur 3% of the time",
          "The slope is 0.03",
          "The result is certainly practically important"
        ],
        "answer": 1,
        "explanation": "Correct (b): the p-value is a probability about the data under the null. (a) is the classic misreading — the p-value is not the probability the null is true. (c) confuses the p-value with the estimate. (d) confuses significance with importance."
      },
      {
        "module": 4,
        "q": "In salary = 40 + 5 × experience + 8 × degree ($1,000s), a worker with 10 years of experience and a degree is predicted to earn:",
        "choices": [
          "$90,000",
          "$98,000",
          "$58,000",
          "$48,000"
        ],
        "answer": 1,
        "explanation": "Correct (b): 40 + 5 × 10 + 8 = 98, in $1,000s. (a) is the prediction without the degree. (c) is 40 + 5 × 10 − 8, subtracting the degree. (d) is 40 + 8, ignoring experience."
      },
      {
        "module": 4,
        "q": "A dataset has five regions. With an intercept in the model, how many region dummies should you include?",
        "choices": [
          "1",
          "4",
          "5",
          "6"
        ],
        "answer": 1,
        "explanation": "Correct (b): k − 1 = 4 dummies, leaving one region as the base group. (a) would lump four regions together. (c) triggers the dummy variable trap — five dummies plus an intercept are perfectly collinear. (d) is more dummies than categories."
      },
      {
        "module": 4,
        "q": "If log(wage) = … + 0.12 × degree, a degree is associated with wages that are about:",
        "choices": [
          "$0.12 higher",
          "0.12% higher",
          "12% higher (exactly 12.7%)",
          "120% higher"
        ],
        "answer": 2,
        "explanation": "Correct (c): in a log model the coefficient is approximately a proportion: 0.12 ≈ 12%, exactly e^0.12 − 1 = 12.7%. (a) confuses log points with dollars. (b) is off by a factor of 100. (d) is ten times too big."
      },
      {
        "module": 4,
        "q": "In Ŷ = 10 + 2X + 5D + 1.5(X × D), what is the slope on X for the D = 1 group?",
        "choices": [
          "1.5",
          "2",
          "3.5",
          "5"
        ],
        "answer": 2,
        "explanation": "Correct (c): for D = 1 the slope is β1 + β3 = 2 + 1.5 = 3.5. (a) is only the interaction coefficient. (b) is the slope for the D = 0 group. (d) is the dummy's intercept shift."
      },
      {
        "module": 5,
        "q": "Regressing Xj on the other X's gives R²j = 0.90. The VIF is:",
        "choices": [
          "0.10",
          "0.90",
          "9",
          "10"
        ],
        "answer": 3,
        "explanation": "Correct (d): VIF = 1 ÷ (1 − 0.90) = 10, the usual warning line. (a) is 1 − R²j, the denominator. (b) is R²j itself. (c) is 1 ÷ 0.90 − 1, a wrong formula."
      },
      {
        "module": 5,
        "q": "Heteroskedasticity means the OLS coefficients are:",
        "choices": [
          "Biased",
          "Unbiased, but the usual standard errors are wrong",
          "Always zero",
          "Impossible to compute"
        ],
        "answer": 1,
        "explanation": "Correct (b): heteroskedasticity damages inference, not unbiasedness. (a) describes omitted-variable bias, not heteroskedasticity. (c) is false. (d) is false — OLS computes fine."
      },
      {
        "module": 5,
        "q": "In the lab dataset the OLS t-statistic is 7.42 and the robust standard error is 0.41 (slope 2). The robust t-statistic is:",
        "choices": [
          "0.82",
          "2.00",
          "4.88",
          "7.42"
        ],
        "answer": 2,
        "explanation": "Correct (c): robust t = 2 ÷ 0.41 = 4.88 — smaller than the OLS t but still above the 2.306 critical value, so still significant. (a) is 0.41 × 2. (b) is the slope. (d) is the OLS t-statistic."
      },
      {
        "module": 5,
        "q": "A residual plot that fans out as X grows suggests:",
        "choices": [
          "Perfect multicollinearity",
          "Heteroskedasticity",
          "A missing intercept",
          "A perfect fit"
        ],
        "answer": 1,
        "explanation": "Correct (b): widening spread is the visual signature of heteroskedasticity. (a) cannot be seen in a residual plot. (c) would show a pattern in the level of residuals, not their spread. (d) would show residuals of zero."
      },
      {
        "module": 6,
        "q": "Residuals [2, 2, 1, 1, −1, −2, −2, −1] give a Durbin–Watson statistic of:",
        "choices": [
          "0.35",
          "1.00",
          "2.00",
          "3.33"
        ],
        "answer": 0,
        "explanation": "Correct (a): Σ(et − et−1)² = 7 and Σe² = 20, so DW = 7 ÷ 20 = 0.35 — strong positive autocorrelation. (b) and (c) would indicate mild or no autocorrelation. (d) is the DW for the alternating residuals [1, −1, 1, −1, 1, −1]."
      },
      {
        "module": 6,
        "q": "In the AR(1) model Yt = 2 + 0.8Yt−1 + ut, if today's value is 50, tomorrow's forecast is:",
        "choices": [
          "40",
          "42",
          "50",
          "52"
        ],
        "answer": 1,
        "explanation": "Correct (b): 2 + 0.8 × 50 = 42. (a) forgets the intercept 2. (c) assumes a random walk with no pullback. (d) adds instead of applying 0.8."
      },
      {
        "module": 6,
        "q": "A random walk is a series with:",
        "choices": [
          "ρ = 0 in the AR(1) model",
          "ρ = 1 in the AR(1) model — shocks are permanent",
          "No variance at all",
          "A constant mean and no trend"
        ],
        "answer": 1,
        "explanation": "Correct (b): with ρ = 1, Yt = Yt−1 + ut and every shock lasts forever. (a) is white noise — no memory at all. (c) is impossible for a random walk, whose variance grows with time. (d) describes a stationary series, the opposite."
      },
      {
        "module": 6,
        "q": "Two unrelated series both trend upward for 20 years, and regressing one on the other gives R² = 0.91. This is most likely:",
        "choices": [
          "Proof of a causal relationship",
          "A spurious regression driven by the shared trend",
          "Evidence of heteroskedasticity",
          "A perfect model"
        ],
        "answer": 1,
        "explanation": "Correct (b): two wandering series look related because both trend — difference them first and the relationship usually vanishes. (a) R² never proves causation. (c) is a different problem about error variance. (d) A high R² between trending series is a warning sign, not a triumph."
      }
    ]
  },
  "final": {
    "title": "Final Exam",
    "minutes": 90,
    "passPercent": 70,
    "coverage": "All modules",
    "questions": [
      {
        "module": 1,
        "q": "In Y = β0 + β1X + u, the error term u holds:",
        "choices": [
          "Only measurement mistakes",
          "Everything that affects Y besides X",
          "The sample size",
          "The fitted values"
        ],
        "answer": 1,
        "explanation": "Correct (b): u holds omitted factors, randomness, and measurement error. (a) is only one part of u. (c) is n. (d) is Ŷ, not u."
      },
      {
        "module": 2,
        "q": "A dataset has X = 1, 2, 3, 4, 5 and Y = 7, 10, 9, 14, 15. The OLS slope is:",
        "choices": [
          "1",
          "2",
          "5",
          "11"
        ],
        "answer": 1,
        "explanation": "Correct (b): x̄ = 3, ȳ = 11, Σ(Xi − x̄)(Yi − ȳ) = 20, Σ(Xi − x̄)² = 10, so b1 = 20 ÷ 10 = 2. (a) is 20 ÷ 20, the wrong denominator. (c) is the intercept. (d) is the mean of Y."
      },
      {
        "module": 2,
        "q": "For the same dataset (X = 1–5, Y = 7, 10, 9, 14, 15), R² is:",
        "choices": [
          "0.130",
          "0.500",
          "0.870",
          "1.000"
        ],
        "answer": 2,
        "explanation": "Correct (c): fitted values are 7, 9, 11, 13, 15; residuals 0, 1, −2, 1, 0; SSE = 6; SST = 46; R² = 1 − 6/46 = 0.870. (a) is SSE/SST, the unexplained share. (b) has no basis. (d) would need SSE = 0."
      },
      {
        "module": 2,
        "q": "For the same dataset, the t-statistic for the slope (SE = 0.45, critical value 3.182, df = 3) is 4.47. The conclusion at 5% is:",
        "choices": [
          "Fail to reject H0",
          "Reject H0 — the slope is significant",
          "The slope is 4.47",
          "R² is 4.47"
        ],
        "answer": 1,
        "explanation": "Correct (b): |4.47| > 3.182, so reject H0: β1 = 0. (a) reverses the decision. (c) confuses t with the slope, which is 2. (d) confuses t with R², which is 0.870."
      },
      {
        "module": 3,
        "q": "A regression gives b1 = 0.08 with SE = 0.05 and n = 200 (critical value ≈ 1.96). The t-statistic and decision are:",
        "choices": [
          "t = 1.60; fail to reject H0",
          "t = 1.60; reject H0",
          "t = 0.40; fail to reject H0",
          "t = 4.00; reject H0"
        ],
        "answer": 0,
        "explanation": "Correct (a): t = 0.08 ÷ 0.05 = 1.60, and |1.60| < 1.96, so fail to reject. (b) gets the decision wrong. (c) divides the wrong way (0.05 ÷ 0.08 is 0.625, not 0.40). (d) multiplies instead of dividing."
      },
      {
        "module": 3,
        "q": "In a simple regression the F-statistic equals:",
        "choices": [
          "The square root of the t-statistic",
          "t²",
          "R² divided by n",
          "The slope divided by the intercept"
        ],
        "answer": 1,
        "explanation": "Correct (b): F = t² — in the lab dataset, 7.416² = 55.00. (a) is the inverse operation. (c) is not a formula for F. (d) is a meaningless ratio."
      },
      {
        "module": 4,
        "q": "A wage regression gives ŵage = 15 + 2 × educ − 3 × female ($/hour). The predicted wage of a woman with 12 years of education is:",
        "choices": [
          "$36/hour",
          "$39/hour",
          "$42/hour",
          "$15/hour"
        ],
        "answer": 0,
        "explanation": "Correct (a): 15 + 2 × 12 − 3 = 36. (b) is the prediction for a man with 12 years. (c) adds the dummy instead of subtracting. (d) is the intercept alone."
      },
      {
        "module": 4,
        "q": "With four regions and an intercept, how many region dummies should you include?",
        "choices": [
          "1",
          "3",
          "4",
          "5"
        ],
        "answer": 1,
        "explanation": "Correct (b): k − 1 = 3, leaving one region as the base group. (a) would lump three regions together. (c) triggers the dummy variable trap. (d) is more dummies than categories."
      },
      {
        "module": 5,
        "q": "If R²j = 0.80 when regressing Xj on the other X's, the VIF is:",
        "choices": [
          "0.20",
          "1.25",
          "4",
          "5"
        ],
        "answer": 3,
        "explanation": "Correct (d): VIF = 1 ÷ (1 − 0.80) = 1 ÷ 0.20 = 5. (a) is 1 − R²j. (b) is 1 ÷ 0.80. (c) is 1 ÷ 0.25, using the wrong denominator."
      },
      {
        "module": 5,
        "q": "Robust standard errors:",
        "choices": [
          "Change the slope estimates",
          "Fix biased coefficients from omitted variables",
          "Correct the standard errors without changing the coefficients",
          "Require homoskedasticity to work"
        ],
        "answer": 2,
        "explanation": "Correct (c): robust SEs leave b0 and b1 alone and fix the inference. (a) is false — coefficients are unchanged. (b) is false — no standard-error fix repairs bias. (d) is backwards — robust SEs are designed for heteroskedasticity."
      },
      {
        "module": 6,
        "q": "Residuals [1, −1, 1, −1, 1, −1] give a Durbin–Watson statistic of:",
        "choices": [
          "0.35",
          "2.00",
          "3.33",
          "6.00"
        ],
        "answer": 2,
        "explanation": "Correct (c): Σ(et − et−1)² = 20 and Σe² = 6, so DW = 20 ÷ 6 = 3.33 — negative autocorrelation. (a) is the DW for the streaky residuals. (b) would mean no autocorrelation. (d) is Σe², not the DW."
      },
      {
        "module": 6,
        "q": "Differencing a time series means:",
        "choices": [
          "Subtracting the mean from every observation",
          "Using changes ΔYt = Yt − Yt−1 instead of levels",
          "Dividing by the standard deviation",
          "Dropping the first observation"
        ],
        "answer": 1,
        "explanation": "Correct (b): differencing takes period-to-period changes, removing trends and random walks. (a) is centering. (c) is standardizing. (d) is just losing one row."
      },
      {
        "module": 7,
        "q": "Actual sales 120, 135, 128, 142 and forecasts 118, 140, 130, 138 give an MAE of:",
        "choices": [
          "2.44",
          "3.25",
          "3.50",
          "4.00"
        ],
        "answer": 1,
        "explanation": "Correct (b): errors are 2, −5, −2, 4; MAE = 13 ÷ 4 = 3.25. (a) is the MAPE (2.44%). (c) is the RMSE (3.50). (d) is the largest absolute error."
      },
      {
        "module": 7,
        "q": "For the same four quarters, the MAPE is:",
        "choices": [
          "2.44%",
          "3.25%",
          "3.50%",
          "12.25%"
        ],
        "answer": 0,
        "explanation": "Correct (a): percentage errors are 1.67%, 3.70%, 1.56%, 2.82%, averaging 2.44%. (b) is the MAE. (c) is the RMSE. (d) is the mean squared error, not a percentage."
      },
      {
        "module": 7,
        "q": "With sales 120, 135, 128, the 3-period moving-average forecast for the next period is:",
        "choices": [
          "120",
          "127.67",
          "128",
          "135"
        ],
        "answer": 1,
        "explanation": "Correct (b): (120 + 135 + 128) ÷ 3 = 383 ÷ 3 = 127.67. (a) and (d) are single past values. (c) is the most recent value — the naive forecast."
      },
      {
        "module": 7,
        "q": "Exponential smoothing with α = 0.5, last actual 142, last forecast 138 gives a next forecast of:",
        "choices": [
          "138",
          "140",
          "142",
          "145"
        ],
        "answer": 1,
        "explanation": "Correct (b): 0.5 × 142 + 0.5 × 138 = 71 + 69 = 140. (a) is the old forecast. (c) is the naive forecast. (d) would need a larger α or different numbers."
      },
      {
        "module": 8,
        "q": "With R² = 0.873, n = 10, k = 1, adjusted R² is:",
        "choices": [
          "0.846",
          "0.857",
          "0.873",
          "0.880"
        ],
        "answer": 1,
        "explanation": "Correct (b): 1 − (1 − 0.873) × 9 ÷ 8 = 1 − 0.127 × 1.125 = 1 − 0.1429 = 0.857. (a) is the adjusted R² after adding a second variable (R² = 0.88). (c) is the unadjusted R². (d) is the R² after adding the second variable."
      },
      {
        "module": 8,
        "q": "Model A has AIC 19.69 and BIC 20.29; Model B has AIC 20.82 and BIC 21.72. Which model wins?",
        "choices": [
          "Model B, because its values are larger",
          "Model A, because smaller AIC and BIC are better",
          "Neither — AIC and BIC disagree",
          "Model B, because it has more variables"
        ],
        "answer": 1,
        "explanation": "Correct (b): smaller is better for both criteria, and A is smaller on both. (a) reverses the rule. (c) is false — both criteria agree on A. (d) More variables are a cost, not a benefit."
      },
      {
        "module": 8,
        "q": "The nested F-test with SSE restricted 48, SSE unrestricted 44, q = 1, n − k = 7 gives F = 0.64. At a 5% critical value of 5.59, you:",
        "choices": [
          "Reject the null and keep the added variable",
          "Fail to reject the null and leave the variable out",
          "Conclude the restricted model is wrong",
          "Conclude R² = 0.64"
        ],
        "answer": 1,
        "explanation": "Correct (b): 0.64 < 5.59, so the added variable does not significantly improve fit. (a) reverses the decision. (c) is not what the test says. (d) confuses the F-statistic with R²."
      },
      {
        "module": 8,
        "q": "A multiple regression is Ŷ = 12 + 3X1 + 5X2. At X1 = 4 and X2 = 2, the predicted value is:",
        "choices": [
          "24",
          "30",
          "34",
          "40"
        ],
        "answer": 2,
        "explanation": "Correct (c): 12 + 3 × 4 + 5 × 2 = 12 + 12 + 10 = 34. (a) is 12 + 12, forgetting X2. (b) is 12 + 3 × 4 + 5 × 1, using X2 = 1. (d) is 12 + 12 + 10 + 6, adding an extra term."
      },
      {
        "module": 9,
        "q": "True model: Y = 1 + 2X + 3Z, and the slope of Z on X is δ = 0.5. Regressing Y on X alone gives a slope of:",
        "choices": [
          "2",
          "2.5",
          "3.5",
          "5"
        ],
        "answer": 2,
        "explanation": "Correct (c): estimated slope = 2 + 3 × 0.5 = 3.5. (a) is the true slope, which the short regression does not recover. (b) is 2 + 0.5, forgetting to multiply by β2 = 3. (d) is 2 + 3, forgetting δ."
      },
      {
        "module": 9,
        "q": "Treated employment rises 5 points, control employment rises 2 points. The difference-in-differences estimate is:",
        "choices": [
          "2",
          "3",
          "5",
          "7"
        ],
        "answer": 1,
        "explanation": "Correct (b): DiD = 5 − 2 = 3. (a) is the control change alone. (c) is the treated change alone. (d) adds the changes instead of subtracting."
      },
      {
        "module": 9,
        "q": "A valid instrumental variable must be:",
        "choices": [
          "Correlated with the error term",
          "Related to X (relevance) and unrelated to the error (exogeneity)",
          "The same as the dependent variable",
          "Measured without error only"
        ],
        "answer": 1,
        "explanation": "Correct (b): both conditions are required. (a) violates exogeneity. (c) is nonsense. (d) is not a requirement for IV."
      },
      {
        "module": 9,
        "q": "Controlling for occupation when estimating the effect of schooling on wages is a problem because occupation is:",
        "choices": [
          "A bad control — schooling affects occupation, so controlling for it blocks part of schooling's effect",
          "Irrelevant to wages",
          "A perfect instrument",
          "Always uncorrelated with schooling"
        ],
        "answer": 0,
        "explanation": "Correct (a): occupation is on the causal path from schooling to wages. (b) is false — occupation strongly affects wages. (c) is false — an instrument must move schooling, not be caused by it. (d) is false — schooling and occupation are strongly related."
      },
      {
        "module": 10,
        "q": "In the guided advertising project, predicted sales at advertising of $15,000 (X = 15) are:",
        "choices": [
          "$24,000",
          "$34,000",
          "$40,000",
          "$15,000"
        ],
        "answer": 2,
        "explanation": "Correct (c): Ŷ = 10 + 2 × 15 = 40, in $1,000s. (a) is the prediction at X = 7. (b) is the prediction at X = 12. (d) is the advertising spend itself."
      },
      {
        "module": 10,
        "q": "The guided project's dataset is best described as:",
        "choices": [
          "Real data from a published study",
          "Clearly-labeled example numbers for teaching — the method is real, the numbers are illustrative",
          "Census data from 2024",
          "A forecast of future sales"
        ],
        "answer": 1,
        "explanation": "Correct (b): the lab and module state plainly that these are teaching numbers, not real data and not a publishable finding. (a) and (c) claim a real source that does not exist. (d) confuses the dataset with a forecast made from it."
      },
      {
        "module": 10,
        "q": "In the guided project, the residuals are 0, 0, 2, −4, 2, 0, 0, 2, −4, 2. Their sum is:",
        "choices": [
          "−4",
          "0",
          "2",
          "48"
        ],
        "answer": 1,
        "explanation": "Correct (b): they sum to zero, as OLS residuals always do. (a) is one residual. (c) is a single residual value. (d) is the SSE."
      },
      {
        "module": 11,
        "q": "Measurement error in X (the explanatory variable) causes:",
        "choices": [
          "No problem at all",
          "Attenuation bias — the slope is pulled toward zero",
          "The slope to be biased away from zero",
          "R² to become 1"
        ],
        "answer": 1,
        "explanation": "Correct (b): noise in X dilutes the signal, shrinking the slope. (a) is false. (c) is the opposite direction. (d) is false — measurement error lowers fit."
      },
      {
        "module": 11,
        "q": "The Lucas critique says:",
        "choices": [
          "All regressions are useless",
          "Estimated relationships can break when policy changes people's behavior",
          "OLS is always biased",
          "Forecasts should never use regressions"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Relationships estimated under one regime may not survive a regime change. (a) overstates it. (c) is false — OLS is unbiased under its assumptions. (d) is false — regression forecasts are fine within a stable environment."
      },
      {
        "module": 11,
        "q": "A city hires more police when crime rises, and police also reduce crime. Regressing crime on police numbers is biased because of:",
        "choices": [
          "Heteroskedasticity",
          "Simultaneity — crime and police cause each other",
          "A small sample",
          "Perfect multicollinearity"
        ],
        "answer": 1,
        "explanation": "Correct (b): two-way causation makes police endogenous — correlated with the error term. (a) affects standard errors, not bias. (c) causes imprecision, not this bias. (d) is a different problem."
      },
      {
        "module": 12,
        "q": "Which tool should you use to judge a forecast?",
        "choices": [
          "In-sample R²",
          "MAE, RMSE, or MAPE computed out of sample",
          "The size of the intercept",
          "The number of variables in the model"
        ],
        "answer": 1,
        "explanation": "Correct (b): forecasts are judged on unseen data with accuracy measures. (a) is a description score that flatters overfitted models. (c) and (d) are irrelevant to forecast quality."
      },
      {
        "module": 12,
        "q": "A dataset has X = 0, 1, 2, 3, 4, 5 and Y = 21, 22, 29, 32, 36, 40. The OLS line is:",
        "choices": [
          "Ŷ = 4 + 20X",
          "Ŷ = 20 + 4X",
          "Ŷ = 30 + 4X",
          "Ŷ = 21 + 5X"
        ],
        "answer": 1,
        "explanation": "Correct (b): x̄ = 2.5, ȳ = 30, Σ(Xi − x̄)(Yi − ȳ) = 70, Σ(Xi − x̄)² = 17.5, so b1 = 70 ÷ 17.5 = 4 and b0 = 30 − 4 × 2.5 = 20. (a) swaps slope and intercept. (c) uses the mean of Y as the intercept. (d) uses the first Y value and a wrong slope."
      },
      {
        "module": 12,
        "q": "For the same dataset (X = 0–5, Y = 21, 22, 29, 32, 36, 40), R² is:",
        "choices": [
          "0.021",
          "0.979",
          "0.979 is wrong — it is 0.870",
          "1.000"
        ],
        "answer": 1,
        "explanation": "Correct (b): fitted values are 20, 24, 28, 32, 36, 40; residuals 1, −2, 1, 0, 0, 0; SSE = 6; SST = 286; R² = 1 − 6/286 = 0.979. (a) is SSE/SST. (c) is a distractor — 0.870 is the R² of the five-observation dataset, not this one. (d) would need SSE = 0."
      },
      {
        "module": 12,
        "q": "For the same dataset, the t-statistic for the slope is 13.66 (df = 4, critical value 2.776). The conclusion is:",
        "choices": [
          "Fail to reject H0",
          "Reject H0 — the slope is highly significant",
          "The slope is 13.66",
          "R² is 13.66"
        ],
        "answer": 1,
        "explanation": "Correct (b): |13.66| > 2.776 by a wide margin. (a) reverses the decision. (c) confuses t with the slope, which is 4. (d) confuses t with R², which is 0.979."
      },
      {
        "module": 12,
        "q": "A log-log regression gives a slope of −1.2 on log price. A 10% rise in price is associated with quantity changing by about:",
        "choices": [
          "−1.2%",
          "−12%",
          "+12%",
          "−120%"
        ],
        "answer": 1,
        "explanation": "Correct (b): in a log-log model the slope is an elasticity: a 1% price rise goes with a 1.2% quantity fall, so 10% goes with about 12% less. (a) is the effect of a 1% rise. (c) gets the sign wrong. (d) is ten times too big."
      },
      {
        "module": 12,
        "q": "The single most important sentence to remember from this course is:",
        "choices": [
          "R² should always be above 0.9",
          "Correlation is not causation",
          "OLS always gives the true slope",
          "Forecasts are always accurate"
        ],
        "answer": 1,
        "explanation": "Correct (b): association is what a regression estimates; causation needs a design. (a) is false — good models can have low R². (c) is false — OLS estimates, with bias under endogeneity. (d) is false — forecasts have errors, which is why we measure them."
      },
      {
        "module": 12,
        "q": "A researcher reports a slope of 0.002 with p = 0.04 and calls it 'a highly significant effect.' The right reply is:",
        "choices": [
          "Agree — p < 0.05 proves the effect is large",
          "The effect is statistically significant at 5% but too small to matter in practice",
          "The test must have been done wrong",
          "The p-value must be above 0.05"
        ],
        "answer": 1,
        "explanation": "Correct (b): significance says the effect is unlikely to be zero; size says how much it matters — and 0.002 is negligible. (a) confuses significance with size. (c) is wrong — small significant effects are common with big samples. (d) is false — a tiny slope can have p < 0.05 with enough data."
      },
      {
        "module": 12,
        "q": "If Ŷ = 50 + 3X (X = study hours, Y = exam points), the predicted score for 7 hours of study is:",
        "choices": [
          "50",
          "65",
          "71",
          "74"
        ],
        "answer": 2,
        "explanation": "Correct (c): 50 + 3 × 7 = 71. (a) is the intercept. (b) is the prediction at 5 hours. (d) is the prediction at 8 hours."
      },
      {
        "module": 7,
        "q": "Actual sales 100, 110, 120, 130 and forecasts 103, 107, 123, 127 give an RMSE of:",
        "choices": [
          "2.63",
          "3.00",
          "3.25",
          "3.50"
        ],
        "answer": 1,
        "explanation": "Correct (b): errors are −3, 3, −3, 3; squared errors are 9, 9, 9, 9, averaging 9; √9 = 3.00. (a) is the MAPE (2.63%). (c) is the MAE of the four-quarter example in Module 7. (d) is the RMSE of that same example."
      },
      {
        "module": 11,
        "q": "A researcher instruments schooling with distance to college. If colleges are mostly built near wealthy areas, which IV condition fails?",
        "choices": [
          "Relevance — distance does not affect schooling",
          "Exogeneity — distance is related to family background, which affects wages directly through the error term",
          "Random assignment — the sample was not randomized",
          "Homoskedasticity — the error variance is not constant"
        ],
        "answer": 1,
        "explanation": "Correct (b): distance would proxy for family background, which affects wages directly — so the instrument is correlated with the error term and exogeneity fails. (a) is the other condition, and it holds here — distance does affect schooling. (c) is not an IV condition — IV is used precisely because there is no randomization. (d) is a different problem about error variance, not instrument validity."
      }
    ]
  }
};
