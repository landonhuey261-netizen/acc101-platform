// eco221 - Module 12: Course Review: From Data to Decisions
module.exports = {
  "number": 12,
  "slug": "course-review-from-data-to-decisions",
  "title": "Course Review: From Data to Decisions",
  "estTime": "3–4 hours",
  "objectives": [
    "Rebuild the whole course's toolkit from memory: OLS, testing, dummies, diagnostics, time series, forecasting, selection, causality.",
    "Work the course's anchor datasets (study hours, lab advertising) end to end.",
    "Choose the right tool for a new applied problem.",
    "Write an honest one-paragraph regression report.",
    "Plan the next steps: the capstone project and further study."
  ],
  "sections": [
    {
      "heading": "The Toolkit, in One Page",
      "html": "<p>Twelve modules, one toolkit. <strong>Module 1:</strong> econometrics joins theory, statistics, and data; the model is Y = β<sub>0</sub> + β<sub>1</sub>X + u. <strong>Module 2:</strong> OLS minimizes the sum of squared residuals; b<sub>1</sub> = Σ(X<sub>i</sub> − x̄)(Y<sub>i</sub> − ȳ) ÷ Σ(X<sub>i</sub> − x̄)²; R² = SSR ÷ SST. <strong>Module 3:</strong> test with t = b<sub>1</sub> ÷ SE(b<sub>1</sub>), compare with the critical value, and report the confidence interval. <strong>Module 4:</strong> dummies code categories as 0/1, with a base group and no trap. <strong>Module 5:</strong> multicollinearity inflates standard errors (VIF), heteroskedasticity makes them wrong (robust SEs fix them). <strong>Module 6:</strong> time series remember the past — check DW, difference random walks.</p>\n<p><strong>Module 7:</strong> forecast with naive, moving-average, smoothing, or regression methods, and score with MAE, RMSE, and MAPE out of sample. <strong>Module 8:</strong> select models with adjusted R², AIC, BIC, and the nested F-test — never R² alone. <strong>Module 9:</strong> correlation is not causation; sign the omitted-variable bias and pick a design. <strong>Module 10:</strong> run the whole chain on a real project. <strong>Module 11:</strong> know the limits — measurement error, simultaneity, regime change — and replicate. If you can state each of those in one sentence, you have the course.</p>"
    },
    {
      "heading": "The Two Anchor Datasets, End to End",
      "html": "<p><strong>Study hours (Module 2, teaching numbers).</strong> X = 1–6 hours, Y = 53, 56, 60, 60, 66, 68. The fitted line is Ŷ = 50 + 3X. SSE = 6, SST = 163.5, R² = 0.963. Testing: s = 1.22, SE(b<sub>1</sub>) = 0.29, t = 10.25 (df = 4, critical 2.776) → reject H<sub>0</sub>; 95% CI (2.19, 3.81). Prediction at 7 hours: 71 points — a mild extrapolation.</p>\n<p><strong>Advertising and sales (Modules 3, 8, 10 and the lab; teaching numbers).</strong> X = 1–10 ($1,000s), Y = 12, 14, 18, 14, 22, 22, 24, 28, 24, 32 ($1,000s). The fitted line is Ŷ = 10 + 2X. R² = 0.873, adjusted R² = 0.857. Testing: s = 2.45, SE(b<sub>1</sub>) = 0.27, t = 7.42 (df = 8, critical 2.306) → reject H<sub>0</sub>; 95% CI (1.38, 2.62); F = 55; robust t = 4.88, still significant. Forecasts: X = 12 → $34,000; X = 15 → $40,000. Model selection: adding price fails every test (adjusted R² 0.846, AIC 20.82 vs 19.69, BIC 21.72 vs 20.29, F = 0.64 vs 5.59). Forecast accuracy on the four-quarter example: MAE 3.25, RMSE 3.50, MAPE 2.44%.</p>\n<div class=\"formula\">Ŷ = 50 + 3X (study) &nbsp;|&nbsp; Ŷ = 10 + 2X (advertising) &nbsp;|&nbsp; t = b<sub>1</sub> / SE(b<sub>1</sub>) &nbsp;|&nbsp; R² = 1 − SSE / SST</div>"
    },
    {
      "heading": "Choosing the Right Tool",
      "html": "<p>New problem? Walk the decision tree. <strong>One X, one Y, cross-section:</strong> simple regression, OLS, t-test, R². <strong>Categories:</strong> add dummies, pick a base group, watch the trap. <strong>Several X's:</strong> multiple regression, check VIF, test jointly with F. <strong>Residuals fan out:</strong> robust standard errors. <strong>Data over time:</strong> plot residuals over time, check DW, difference if the series wanders. <strong>Forecasting:</strong> hold out data, compare MAE/RMSE/MAPE. <strong>Choosing variables:</strong> adjusted R², AIC/BIC, nested F. <strong>Causal claim:</strong> name the threat, sign the bias, pick a design (experiment, IV, DiD, RD). <strong>Result looks too good:</strong> replicate, and read the limits paragraph you wrote.</p>\n<p>The most common error in applied work is not a wrong formula — it is the wrong tool for the question. A t-test cannot answer a causal question, R² cannot select a model, and an in-sample fit cannot judge a forecast. Matching the tool to the question is the skill the final exam tests.</p>"
    },
    {
      "heading": "From This Course to the Capstone",
      "html": "<p>The capstone (Step 13) asks you to do original economics research: pick a question, find real data, run a regression, and write it up. Everything in this course is preparation for it. The question comes from Module 1's three jobs; the regression from Modules 2–5; the time-series care from Module 6; the forecasting from Module 7; the variable choice from Module 8; the causal discipline from Module 9; the project chain from Module 10; and the honesty from Module 11. Your capstone paper will be judged by the same standard as Module 10's write-up: a clear question, a stated data source and vintage, a tested model, checked assumptions, and a limits paragraph.</p>\n<p>Beyond the capstone, this course is the entry ticket to the parts of economics that use data every day: forecasting, policy evaluation, market research, and financial analysis. The CFA and graduate-economics paths both build on exactly this material — OLS, inference, time series, and causal design — so the toolkit travels. Keep the two anchor datasets in your notes; they are the fastest way to check whether you still remember how the machinery works.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>The toolkit: OLS → t-test → dummies → diagnostics (VIF, robust SEs, DW) → forecasting (MAE/RMSE/MAPE) → selection (adjusted R², AIC/BIC, F) → causality (OVB, designs) → limits.</li>\n<li>Study anchor: Ŷ = 50 + 3X, R² = 0.963, t = 10.25. Lab anchor: Ŷ = 10 + 2X, R² = 0.873, t = 7.42, 95% CI (1.38, 2.62).</li>\n<li>Match the tool to the question — a t-test cannot prove causation, R² cannot select a model, in-sample fit cannot judge a forecast.</li>\n<li>The capstone uses this whole chain on real data; the standard is Module 10's honest write-up.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Memorizing formulas without the decision rules that go with them. The final exam tests both: compute the number <em>and</em> say what to do with it — reject or not, keep the variable or not, trust the forecast or not.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Forgetting that correlation is not causation — the sentence that appears in Modules 1, 2, 9, 10, and 11 for a reason. If you remember one thing from this course, remember that.</div>\n<p><strong>Ready-to-Work link:</strong> You now have the full applied-econometrics toolkit: run a regression, test it, check it, forecast with it, and say honestly what it can and cannot show. That is the job description of an analyst, a forecaster, and a policy evaluator — and the foundation of the capstone research project.</p>"
    }
  ],
  "keyTerms": [
    { "term": "OLS", "def": "Ordinary least squares: the line minimizing the sum of squared residuals." },
    { "term": "t-test", "def": "A test of a coefficient using t = estimate ÷ standard error." },
    { "term": "Confidence interval", "def": "Estimate ± critical value × standard error: the plausible range for a parameter." },
    { "term": "R-squared", "def": "The share of Y's variation explained by the regression." },
    { "term": "Dummy variable", "def": "A 0/1 variable coding category membership." },
    { "term": "VIF", "def": "Variance inflation factor: 1 ÷ (1 − R²j); 10 is the multicollinearity warning line." },
    { "term": "Robust standard errors", "def": "Standard errors valid under heteroskedasticity." },
    { "term": "Durbin–Watson", "def": "A statistic for first-order autocorrelation: near 2 none, near 0 positive, near 4 negative." },
    { "term": "MAE / RMSE / MAPE", "def": "Forecast accuracy measures: mean absolute error, root mean squared error, mean absolute percentage error." },
    { "term": "Adjusted R-squared / AIC / BIC", "def": "Model-selection criteria that penalize complexity; smaller AIC/BIC is better." },
    { "term": "Omitted-variable bias", "def": "Bias from leaving out a Z that affects Y and correlates with X: β2 × δ." },
    { "term": "Causal design", "def": "An experiment or quasi-experiment (IV, DiD, RD) that isolates causal variation in X." },
    { "term": "Replication", "def": "Checking a result on new data and specifications." },
    { "term": "Capstone", "def": "The program's final research project, built on this course's full toolkit." }
  ],
  "video": {
    "title": "Regression Analysis | Full Course",
    "embedUrl": "https://www.youtube.com/embed/0m-rs2M7K-Y",
    "note": "A full regression course in one video — what regression is, simple and multiple regression, interpreting results, assumptions, dummy variables, and logistic regression. Use it as the course review: watch the sections on the topics you are least sure of, then redo the two anchor datasets by hand.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> From memory, write down the OLS slope formula, the R² formula, and the t-statistic formula, then check them against Modules 2–3.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: b<sub>1</sub> = Σ(X<sub>i</sub> − x̄)(Y<sub>i</sub> − ȳ) ÷ Σ(X<sub>i</sub> − x̄)². Step 2: R² = SSR ÷ SST = 1 − SSE ÷ SST. Step 3: t = b<sub>1</sub> ÷ SE(b<sub>1</sub>), with SE(b<sub>1</sub>) = s ÷ √Σ(X<sub>i</sub> − x̄)² and s = √(SSE ÷ (n − 2)). Step 4: If any formula was wrong, copy it onto a card and drill it — these three are the course in miniature.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A dataset has X = 1, 2, 3, 4, 5 and Y = 7, 10, 9, 14, 15. Compute the OLS line, R², and the t-statistic for the slope (critical value 3.182, df = 3). Show every step.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: x̄ = 3, ȳ = 11. Σ(X<sub>i</sub> − x̄)(Y<sub>i</sub> − ȳ) = 20, Σ(X<sub>i</sub> − x̄)² = 10, so b<sub>1</sub> = 20 ÷ 10 = <strong>2</strong> and b<sub>0</sub> = 11 − 2 × 3 = <strong>5</strong>: Ŷ = 5 + 2X. Step 2: Fitted values 7, 9, 11, 13, 15; residuals 0, 1, −2, 1, 0; SSE = 6. SST = 46, so R² = 1 − 6 ÷ 46 = <strong>0.870</strong>. Step 3: s = √(6 ÷ 3) = √2 = 1.41; SE(b<sub>1</sub>) = 1.41 ÷ √10 = <strong>0.45</strong>; t = 2 ÷ 0.45 = <strong>4.47</strong>. Step 4: |4.47| &gt; 3.182, so <strong>reject H<sub>0</sub></strong> at 5% — the slope is significant even with only 5 observations.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A regression of sales on advertising and price gives a VIF of 11 for price and a fan-shaped residual plot. Name both problems and the fix for each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: VIF 11 means <strong>multicollinearity</strong> — price is 91% explained by the other variables (1 − 1/11 ≈ 0.91), so its coefficient is imprecisely estimated. Step 2: The fan-shaped plot means <strong>heteroskedasticity</strong> — the error variance grows with X. Step 3: Fix for the standard errors: report <strong>robust standard errors</strong>. Step 4: Fix for the VIF: check whether price is a redundant duplicate of another variable; if theory says price belongs, keep it and report the imprecision honestly — do not drop a real variable to please the VIF.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Actual sales 120, 135, 128, 142; forecasts 118, 140, 130, 138. Compute MAE and MAPE, and say whether this forecaster beats a second forecaster with MAE 3.00 and MAPE 2.63%.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Errors 2, −5, −2, 4 → MAE = 13 ÷ 4 = <strong>3.25</strong>. Step 2: Percentage errors 1.67%, 3.70%, 1.56%, 2.82% → MAPE = <strong>2.44%</strong>. Step 3: The second forecaster wins on MAE (3.00 &lt; 3.25) but loses on MAPE (2.63% &gt; 2.44%). Step 4: The measures disagree because the second forecaster worked on smaller actual values; report both and choose by the decision at hand — MAE for dollar budgeting, MAPE for comparing across products of different sizes.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A headline says \"Coffee drinkers earn 20% more — study proves coffee boosts income.\" Using this course, give the three-sentence skeptical reply.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: \"The 20% is an association from a regression — it shows coffee drinking and income move together, and correlation is not causation.\" Step 2: \"The likely omitted variables are occupation, education, and work hours, all correlated with both coffee drinking and income, so the slope is probably biased upward.\" Step 3: \"Before acting on it, run the regression with those controls, or better, find a design — an experiment or an instrument — that isolates variation in coffee drinking unrelated to who the drinkers are.\"</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Plan your capstone regression in five lines: question, data, model, checks, and limits.</p>",
      "solution": "<p><strong>Answer (template — fill in your own topic):</strong> Step 1: Question: \"Does X affect Y, and by how much?\" Step 2: Data: a named public source (FRED, BLS, Census, or World Bank) with the vintage and the sample size. Step 3: Model: Y = β<sub>0</sub> + β<sub>1</sub>X + controls + u, with dummies for categories and logs where the relationship is proportional. Step 4: Checks: t-tests and confidence intervals, residual plots, VIF, robust standard errors, DW if time series, out-of-sample forecast check. Step 5: Limits: what is omitted, what could be endogenous, and what design would be needed to claim causation.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The OLS slope formula is:",
      "choices": [
        "b1 = Σ(Xi − x̄)(Yi − ȳ) ÷ Σ(Xi − x̄)²",
        "b1 = Σ(Yi − ȳ) ÷ Σ(Xi − x̄)",
        "b1 = ȳ ÷ x̄",
        "b1 = R² ÷ SE(b1)"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The ratio of the cross-products to the squared X-deviations. (b) divides sums of deviations, which is not the formula. (c) is the ratio of means. (d) mixes R² with the standard error."
    },
    {
      "q": "In the lab advertising dataset, the 95% confidence interval for the slope is:",
      "choices": [
        "(0.27, 7.42)",
        "(1.38, 2.62)",
        "(2.19, 3.81)",
        "(10, 2)"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 2 ± 2.306 × 0.27 = (1.38, 2.62). (a) pairs the SE with the t-statistic. (c) is the study-hours interval. (d) lists the intercept and slope, not an interval."
    },
    {
      "q": "A VIF of 10 means the variable's coefficient variance is:",
      "choices": [
        "Zero",
        "The same as with no collinearity",
        "10 times what it would be with uncorrelated X's",
        "10% larger than with no collinearity"
      ],
      "answer": 2,
      "explanation": "Correct: (c). VIF is the inflation factor for the variance. (a) and (b) describe VIF = 1 or 0. (d) confuses a factor of 10 with 10%."
    },
    {
      "q": "Which measure should you use to judge a forecast?",
      "choices": [
        "In-sample R²",
        "MAE, RMSE, or MAPE computed out of sample",
        "The size of the intercept",
        "The number of variables in the model"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Forecasts are judged on unseen data with accuracy measures. (a) is a description score that flatters overfitted models. (c) and (d) are irrelevant to forecast quality."
    },
    {
      "q": "Adjusted R² falls when a variable is added. This means:",
      "choices": [
        "The variable is definitely causal",
        "The variable did not improve fit enough to justify the extra parameter",
        "R² also fell",
        "The model is now unusable"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The penalty outweighed the fit gain. (a) Adjusted R² says nothing about causation. (c) is false — R² never falls when a variable is added. (d) is false — the model still works, it is just not improved."
    },
    {
      "q": "A Durbin–Watson statistic of 0.35 indicates:",
      "choices": [
        "No autocorrelation",
        "Strong positive autocorrelation",
        "Strong negative autocorrelation",
        "Heteroskedasticity"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Near 0 means strong positive autocorrelation. (a) is DW ≈ 2. (c) is DW ≈ 4. (d) is diagnosed from a residual plot, not DW."
    },
    {
      "q": "The omitted-variable bias formula is:",
      "choices": [
        "Bias = β2 + δ",
        "Bias = β2 × δ",
        "Bias = β2 ÷ δ",
        "Bias = β1 × β2"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Bias = β2 × δ, where δ is the slope of the omitted Z on X. (a) adds instead of multiplying. (c) divides. (d) uses the wrong coefficients."
    },
    {
      "q": "The single most important sentence to remember from this course is:",
      "choices": [
        "R² should always be above 0.9",
        "Correlation is not causation",
        "OLS always gives the true slope",
        "Forecasts are always accurate"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Association is what a regression estimates; causation needs a design. (a) is false — good models can have low R². (c) is false — OLS estimates, with bias under endogeneity. (d) is false — forecasts have errors, which is why we measure them."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Course Review: Quick Reference</h3>\n<p><strong>The toolkit:</strong> OLS → t-test + CI → dummies → diagnostics (VIF, robust SEs, DW) → forecasting (MAE/RMSE/MAPE, out of sample) → selection (adjusted R², AIC/BIC, nested F) → causality (OVB = β<sub>2</sub> × δ, designs) → limits (replication, transparency).</p>\n<div class=\"formula\">b<sub>1</sub> = Σ(X<sub>i</sub> − x̄)(Y<sub>i</sub> − ȳ) / Σ(X<sub>i</sub> − x̄)² &nbsp;|&nbsp; R² = 1 − SSE / SST &nbsp;|&nbsp; t = b<sub>1</sub> / SE(b<sub>1</sub>)</div>\n<p><strong>Anchor 1 (study hours):</strong> Ŷ = 50 + 3X, R² = 0.963, s = 1.22, SE = 0.29, t = 10.25, 95% CI (2.19, 3.81).</p>\n<p><strong>Anchor 2 (advertising, teaching sample):</strong> Ŷ = 10 + 2X, R² = 0.873, adjusted R² = 0.857, s = 2.45, SE = 0.27, t = 7.42, 95% CI (1.38, 2.62), F = 55, robust t = 4.88.</p>\n<p><strong>Forecast accuracy anchor:</strong> actual 120, 135, 128, 142 vs forecasts 118, 140, 130, 138 → MAE 3.25, RMSE 3.50, MAPE 2.44%.</p>\n<p><strong>Watch out:</strong> match the tool to the question; correlation is not causation; always report n, source, vintage, checks, and limits.</p>\n<p><strong>Self-check:</strong> Work the 5-observation dataset (X = 1–5, Y = 7, 10, 9, 14, 15) end to end: line, R², t-test, decision.</p>\n"
};
