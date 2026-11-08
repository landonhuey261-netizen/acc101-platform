// eco221 - Module 7: Forecasting: Methods & Measures of Accuracy
module.exports = {
  "number": 7,
  "slug": "forecasting-methods-and-measures-of-accuracy",
  "title": "Forecasting: Methods & Measures of Accuracy",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a forecast is and why every forecast needs an accuracy measure.",
    "Compute MAE, RMSE, and MAPE from actual and forecast values.",
    "Build naive, moving-average, and exponential-smoothing forecasts.",
    "Explain why forecasts must be judged out of sample, not in sample.",
    "Choose between competing forecasts using accuracy measures and bias."
  ],
  "sections": [
    {
      "heading": "What a Forecast Is — and Isn't",
      "html": "<p>A <strong>forecast</strong> is a prediction of a future value, made with a stated method and a stated margin of error. \"Sales will be $142,000 next quarter\" is a guess; \"Sales are forecast at $142,000, and our past forecasts have typically missed by $3,500\" is a forecast. The accuracy measure is part of the product — without it, nobody can tell whether the forecast is worth using.</p>\n<p>Forecasts come from models (a regression, an AR model) or from simple rules (\"next period equals this period\"). The method matters less than the discipline: use only data available at the forecast date, write down the method before seeing the outcome, and score the forecast honestly afterward. A forecast that was fitted to the very data it is judged on is not a forecast — it is a description wearing a disguise.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A forecast without an accuracy measure is a guess with good branding. Always report how far off past forecasts were, in the same units as the thing being forecast.</div>"
    },
    {
      "heading": "Simple Methods: Naive, Moving Average, Exponential Smoothing",
      "html": "<p>The <strong>naive forecast</strong> says next period equals this period: F<sub>t+1</sub> = A<sub>t</sub>. It is the benchmark every fancier method must beat — if your regression cannot beat \"same as last time,\" it is not helping. A <strong>moving average</strong> forecasts the average of the last k periods: with k = 3 and sales 120, 135, 128, the forecast for the next period is (120 + 135 + 128) ÷ 3 = 383 ÷ 3 = <strong>127.67</strong>. Moving averages smooth out noise but lag behind trends.</p>\n<p><strong>Exponential smoothing</strong> weights recent observations more heavily: F<sub>t+1</sub> = αA<sub>t</sub> + (1 − α)F<sub>t</sub>, where α (between 0 and 1) is the smoothing constant. With α = 0.5, last actual 120, and last forecast 118, the next forecast is 0.5 × 120 + 0.5 × 118 = <strong>119</strong>. A larger α reacts faster to new data; a smaller α smooths more. Regression-based forecasts (Module 2's fitted line, extended forward) are the fourth family: they use X to predict Y, and they inherit all of regression's strengths and weaknesses.</p>"
    },
    {
      "heading": "Measuring Accuracy: MAE, RMSE, MAPE",
      "html": "<p>Let the <strong>forecast error</strong> be e<sub>t</sub> = A<sub>t</sub> − F<sub>t</sub> (actual minus forecast). Three measures summarize a set of errors. <strong>MAE</strong> (mean absolute error) is the average of |e<sub>t</sub>|: the typical size of a miss, in the original units. <strong>RMSE</strong> (root mean squared error) is √(average of e<sub>t</sub>²): it punishes big misses more than small ones, also in the original units. <strong>MAPE</strong> (mean absolute percentage error) is the average of |e<sub>t</sub>| ÷ A<sub>t</sub>, times 100: the typical miss as a percentage, useful for comparing series of different sizes.</p>\n<div class=\"formula\">MAE = mean|e<sub>t</sub>| &nbsp;|&nbsp; RMSE = √(mean e<sub>t</sub>²) &nbsp;|&nbsp; MAPE = mean(|e<sub>t</sub>| / A<sub>t</sub>) × 100</div>\n<p><strong>Worked example — four quarters (teaching numbers).</strong> Actual sales: 120, 135, 128, 142. Forecasts: 118, 140, 130, 138. Errors: 2, −5, −2, 4. MAE = (2 + 5 + 2 + 4) ÷ 4 = 13 ÷ 4 = <strong>3.25</strong>. RMSE = √((4 + 25 + 4 + 16) ÷ 4) = √12.25 = <strong>3.50</strong>. MAPE = ((2÷120) + (5÷135) + (2÷128) + (4÷142)) ÷ 4 × 100 = (1.67% + 3.70% + 1.56% + 2.82%) ÷ 4 = <strong>2.44%</strong>. The forecasts typically miss by about $3,250 (if the units are $1,000s, 3.25 means $3,250) — or 2.44%.</p>"
    },
    {
      "heading": "Judging Forecasts Honestly: Out of Sample and Bias",
      "html": "<p>The golden rule: <strong>judge a forecast on data it did not see</strong>. Fit the model on the first 80% of the sample, forecast the last 20%, and score only those forecasts. A model that fits history beautifully and forecasts terribly is <strong>overfitted</strong> — it memorized the noise. In-sample R² (Module 2) is a description score, not a forecasting score; MAE, RMSE, and MAPE on holdout data are forecasting scores.</p>\n<p>Also check <strong>bias</strong>: the average signed error. In the worked example the errors 2, −5, −2, 4 average to (2 − 5 − 2 + 4) ÷ 4 = −0.25 — nearly unbiased, the misses roughly cancel. If the errors averaged −8, the forecast would be systematically too high, and the fix would be to subtract 8 from every forecast. A second example for comparison: actual 100, 110, 120, 130 against forecasts 103, 107, 123, 127 gives errors −3, 3, −3, 3, so MAE = <strong>3.00</strong>, RMSE = <strong>3.00</strong>, and MAPE = <strong>2.63%</strong> — slightly worse in percentage terms than the first forecaster (2.44%), even though its MAE is smaller. Different measures can disagree; report more than one and say which decision each one serves.</p>\n<div class=\"callout\"><strong>Key idea:</strong> In-sample fit flatters; out-of-sample accuracy tells the truth. Never choose a forecasting model by how well it describes the past — choose it by how well it predicted data it had never seen.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Forecast methods: naive (F<sub>t+1</sub> = A<sub>t</sub>), moving average, exponential smoothing (F<sub>t+1</sub> = αA<sub>t</sub> + (1 − α)F<sub>t</sub>), regression-based.</li>\n<li>MAE = mean |e|; RMSE = √(mean e²); MAPE = mean (|e| ÷ A) × 100.</li>\n<li>Worked example: actual 120, 135, 128, 142 vs forecasts 118, 140, 130, 138 → MAE 3.25, RMSE 3.50, MAPE 2.44%.</li>\n<li>Judge forecasts out of sample on holdout data; check bias (mean signed error) as well as size.</li>\n<li>Second example: actual 100, 110, 120, 130 vs forecasts 103, 107, 123, 127 → MAE 3.00, RMSE 3.00, MAPE 2.63%.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Picking a forecasting model by in-sample R². A model with a higher R² on the data it was fitted to often forecasts worse — it fitted the noise. Always hold out data and compare MAE/RMSE/MAPE there.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Reporting MAPE when actual values can be near zero. Dividing by a tiny actual blows the percentage up; MAPE is only sensible when actuals stay well away from zero.</div>\n<p><strong>Ready-to-Work link:</strong> \"How good is your forecast?\" is the first question any manager asks, and MAE/RMSE/MAPE is the answer. If you can compute all three from a table of actuals and forecasts and explain which forecaster wins and why, you can answer it.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Forecast", "def": "A prediction of a future value, made by a stated method with a stated accuracy." },
    { "term": "Forecast error", "def": "Actual minus forecast: et = At − Ft." },
    { "term": "Naive forecast", "def": "The forecast that next period equals this period: Ft+1 = At." },
    { "term": "Moving average forecast", "def": "The average of the last k observed values, used as the next forecast." },
    { "term": "Exponential smoothing", "def": "Ft+1 = αAt + (1 − α)Ft: a weighted average that reacts more to recent data when α is larger." },
    { "term": "Smoothing constant (α)", "def": "The weight on the latest actual in exponential smoothing, between 0 and 1." },
    { "term": "MAE", "def": "Mean absolute error: the average size of forecast misses, in the original units." },
    { "term": "RMSE", "def": "Root mean squared error: the square root of the average squared error; punishes big misses." },
    { "term": "MAPE", "def": "Mean absolute percentage error: the average miss as a percentage of the actual value." },
    { "term": "Out-of-sample evaluation", "def": "Scoring forecasts on data the model was not fitted to (holdout data)." },
    { "term": "In-sample fit", "def": "How well a model describes the data it was fitted to — a description score, not a forecast score." },
    { "term": "Overfitting", "def": "A model that fits the training data's noise as well as its signal, and forecasts new data badly." },
    { "term": "Forecast bias", "def": "The average signed forecast error; a nonzero bias means forecasts are systematically too high or too low." },
    { "term": "Holdout sample", "def": "Data set aside before fitting, used only to test the forecast." }
  ],
  "video": {
    "title": "IS 335   Week 9 Beat the Naive Forecast: Moving Average vs Exponential Smoothing",
    "embedUrl": "https://www.youtube.com/embed/kLAAhQlXXC8",
    "note": "A lecture on beating the naive forecast with moving averages, exponential smoothing, trend and seasonal methods — and scoring forecasts with MAE, MSE, and MAPE. Watch it, then recompute the MAE, RMSE, and MAPE in this module's worked example.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Actual sales: 120, 135, 128, 142. Forecasts: 118, 140, 130, 138. Compute MAE, RMSE, and MAPE step by step.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Errors e = A − F are 2, −5, −2, 4. Step 2: MAE = (2 + 5 + 2 + 4) ÷ 4 = 13 ÷ 4 = <strong>3.25</strong>. Step 3: Squared errors are 4, 25, 4, 16, averaging 49 ÷ 4 = 12.25, so RMSE = √12.25 = <strong>3.50</strong>. Step 4: Percentage errors are 2÷120 = 1.67%, 5÷135 = 3.70%, 2÷128 = 1.56%, 4÷142 = 2.82%; their average is 9.75% ÷ 4 = <strong>2.44%</strong> MAPE. Step 5: The forecasts typically miss by 3.25 units, or 2.44%.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Actual: 100, 110, 120, 130. Forecasts: 103, 107, 123, 127. Compute MAE, RMSE, and MAPE, and compare with Problem 1's forecaster (MAE 3.25, RMSE 3.50, MAPE 2.44%).</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Errors are −3, 3, −3, 3. Step 2: MAE = (3 + 3 + 3 + 3) ÷ 4 = <strong>3.00</strong>. Step 3: RMSE = √(36 ÷ 4) = √9 = <strong>3.00</strong>. Step 4: Percentage errors are 3.00%, 2.73%, 2.50%, 2.31%; MAPE = 10.54% ÷ 4 = <strong>2.63%</strong>. Step 5: This forecaster wins on MAE and RMSE (3.00 vs 3.25 and 3.50) but loses on MAPE (2.63% vs 2.44%) — the measures disagree because the actual values are smaller here, so the same absolute miss is a bigger percentage. Report both and say which matters for the decision.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Quarterly sales are 120, 135, 128, 142. (a) What is the naive forecast for the next quarter? (b) What is the 3-period moving-average forecast? (c) With α = 0.5, last actual 142 and last forecast 138, what is the exponential-smoothing forecast?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Naive: next = last actual = <strong>142</strong>. Step 2: (b) 3-period moving average: (135 + 128 + 142) ÷ 3 = 405 ÷ 3 = <strong>135</strong>. Step 3: (c) Exponential smoothing: 0.5 × 142 + 0.5 × 138 = 71 + 69 = <strong>140</strong>. Step 4: The three methods disagree (142, 135, 140) — that is normal; the choice is settled by out-of-sample accuracy, not by argument.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A model has in-sample R² = 0.95 but its holdout RMSE is worse than the naive forecast's. Explain what happened and what to do.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The model is <strong>overfitted</strong>: it memorized the training data's noise, so it describes the past beautifully and predicts the future badly. Step 2: In-sample R² rewards fitting noise; holdout RMSE punishes it. Step 3: The fix is to simplify the model (fewer variables, Module 8), use a holdout sample for selection, or shrink the coefficients. Step 4: Until a model beats the naive forecast out of sample, the naive forecast is the better forecast.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A forecaster's errors over six months are −4, −6, −3, −5, −4, −2. Compute the mean signed error and the MAE, and say what the bias tells you.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Mean signed error = (−4 − 6 − 3 − 5 − 4 − 2) ÷ 6 = −24 ÷ 6 = <strong>−4</strong>. Step 2: MAE = (4 + 6 + 3 + 5 + 4 + 2) ÷ 6 = 24 ÷ 6 = <strong>4</strong>. Step 3: The bias of −4 means the forecasts are systematically too high by 4 units (actual minus forecast is negative, so forecasts exceed actuals). Step 4: The fix is simple: subtract 4 from every future forecast — the bias is a free accuracy gain.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why is MAPE a bad choice when actual values can be close to zero? Give a one-line example.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: MAPE divides each error by the actual value, so a tiny actual inflates the percentage enormously. Step 2: Example: actual 2, forecast 4 gives an error of 2 but a percentage error of 100% — the same 2-unit miss on an actual of 200 would be 1%. Step 3: When actuals can be near zero, use MAE or RMSE (in units) instead of MAPE.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A forecast error is defined as:",
      "choices": [
        "Forecast minus actual",
        "Actual minus forecast",
        "Forecast divided by actual",
        "The square of the actual"
      ],
      "answer": 1,
      "explanation": "Correct: (b). et = At − Ft. (a) is the negative of the error. (c) is a ratio, not the error. (d) is not an error at all."
    },
    {
      "q": "Actual sales 120, 135, 128, 142 and forecasts 118, 140, 130, 138 give an MAE of:",
      "choices": [
        "2.44",
        "3.25",
        "3.50",
        "4.00"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Errors are 2, −5, −2, 4; MAE = 13 ÷ 4 = 3.25. (a) is the MAPE (2.44%). (c) is the RMSE (3.50). (d) is the largest absolute error, not the average."
    },
    {
      "q": "For the same four quarters, the RMSE is:",
      "choices": [
        "2.44",
        "3.00",
        "3.25",
        "3.50"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Squared errors 4, 25, 4, 16 average 12.25; √12.25 = 3.50. (a) is the MAPE. (b) is the RMSE of the second example in this module. (c) is the MAE."
    },
    {
      "q": "The naive forecast for next period is:",
      "choices": [
        "The average of all past values",
        "This period's actual value",
        "Zero",
        "The regression fitted value"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Ft+1 = At — \"same as last time.\" (a) is a moving average with k = all periods. (c) is not a forecast method. (d) is a regression-based forecast."
    },
    {
      "q": "With sales 120, 135, 128, the 3-period moving-average forecast for the next period is:",
      "choices": [
        "120",
        "127.67",
        "128",
        "135"
      ],
      "answer": 1,
      "explanation": "Correct: (b). (120 + 135 + 128) ÷ 3 = 383 ÷ 3 = 127.67. (a) and (d) are single past values. (c) is the most recent value — the naive forecast."
    },
    {
      "q": "Exponential smoothing with α = 0.5, last actual 120, last forecast 118 gives a next forecast of:",
      "choices": [
        "118",
        "119",
        "120",
        "121"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 0.5 × 120 + 0.5 × 118 = 60 + 59 = 119. (a) is the old forecast. (c) is the naive forecast. (d) would need α above 0.5 with different numbers."
    },
    {
      "q": "Why must forecasts be judged out of sample?",
      "choices": [
        "Because in-sample forecasts are always zero",
        "Because a model can fit the past by memorizing noise and still forecast badly",
        "Because holdout data are easier to collect",
        "Because R² cannot be computed in sample"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Overfitting flatters in-sample fit; only unseen data test real forecasting ability. (a) is false. (c) is false — holdout data cost the same effort. (d) is false — R² is an in-sample measure."
    },
    {
      "q": "A forecaster's errors average −8. This means the forecasts are:",
      "choices": [
        "Unbiased",
        "Systematically too high by 8",
        "Systematically too low by 8",
        "Perfectly accurate"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Error = actual − forecast, so a negative average means forecasts exceed actuals — too high by 8 on average. (a) would need an average near zero. (c) reverses the sign. (d) would need errors of zero."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Forecasting: Quick Reference</h3>\n<p><strong>Core idea:</strong> A forecast is a prediction plus an accuracy measure — and it must be judged on data it never saw.</p>\n<div class=\"formula\">MAE = mean|e<sub>t</sub>| &nbsp;|&nbsp; RMSE = √(mean e<sub>t</sub>²) &nbsp;|&nbsp; MAPE = mean(|e<sub>t</sub>| / A<sub>t</sub>) × 100</div>\n<p><strong>Methods:</strong> naive F<sub>t+1</sub> = A<sub>t</sub> · moving average (mean of last k) · exponential smoothing F<sub>t+1</sub> = αA<sub>t</sub> + (1 − α)F<sub>t</sub> · regression-based.</p>\n<p><strong>Worked anchor:</strong> actual 120, 135, 128, 142 vs forecasts 118, 140, 130, 138 → errors 2, −5, −2, 4 → MAE 3.25, RMSE 3.50, MAPE 2.44%.</p>\n<p><strong>Second example:</strong> actual 100, 110, 120, 130 vs forecasts 103, 107, 123, 127 → MAE 3.00, RMSE 3.00, MAPE 2.63%.</p>\n<p><strong>Watch out:</strong> in-sample R² flatters; hold out data and compare MAE/RMSE/MAPE there. Check bias (mean signed error). MAPE breaks when actuals are near zero.</p>\n<p><strong>Self-check:</strong> Given four actuals and four forecasts, compute MAE, RMSE, and MAPE without looking.</p>\n"
};
