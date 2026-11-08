// eco221 - Module 10: Applied Econometrics: A Guided Project
module.exports = {
  "number": 10,
  "slug": "applied-econometrics-a-guided-project",
  "title": "Applied Econometrics: A Guided Project",
  "estTime": "3–4 hours",
  "objectives": [
    "Follow a complete applied project from question to conclusion.",
    "Run a regression on the course teaching dataset and report every number.",
    "Check the regression's assumptions with residual plots and tests.",
    "Write up results in a short, honest regression table and paragraph.",
    "State the limits of the findings and what you would do next."
  ],
  "sections": [
    {
      "heading": "The Project: Does Advertising Raise Sales?",
      "html": "<p>Here is the whole course in one project. The question: <strong>does advertising spending raise sales?</strong> The data are a teaching sample of 10 shops: advertising X in $1,000s (1, 2, 3, 4, 5, 6, 7, 8, 9, 10) and monthly sales Y in $1,000s (12, 14, 18, 14, 22, 22, 24, 28, 24, 32). Say it plainly, as the lab does: <strong>these are clearly-labeled example numbers for teaching, not real data and not a publishable finding.</strong> The method is real; the numbers are illustrative. Your job is to run the regression, test it, check it, and write it up honestly — the same steps you will use on real data in the capstone.</p>\n<p>The plan has five steps: (1) state the question and the model; (2) estimate by OLS; (3) test the slope; (4) check the assumptions; (5) write up the results with their limits. Work through them in order — skipping step 4 is how bad regressions get published.</p>\n<div class=\"callout\"><strong>Key idea:</strong> An applied project is a chain: question → model → estimate → test → check → write-up. A weak link anywhere — a vague question, an unchecked assumption, a missing caveat — weakens the whole chain.</div>"
    },
    {
      "heading": "Steps 1–2: Model and Estimate",
      "html": "<p><strong>Step 1 — Question and model.</strong> Economic theory says advertising can raise sales by informing customers, so the model is sales = β<sub>0</sub> + β<sub>1</sub> × advertising + u. The error term holds everything else: location, product quality, price, season. Note the threat already: shops that advertise more may also have better locations, so the slope may partly reflect location — an omitted variable (Module 9). Keep that in mind for the write-up.</p>\n<p><strong>Step 2 — Estimate.</strong> The means are x̄ = 5.5 and ȳ = 21. The sums are Σ(X<sub>i</sub> − x̄)(Y<sub>i</sub> − ȳ) = 165 and Σ(X<sub>i</sub> − x̄)² = 82.5, so b<sub>1</sub> = 165 ÷ 82.5 = <strong>2</strong> and b<sub>0</sub> = 21 − 2 × 5.5 = <strong>10</strong>. The fitted line is Ŷ = 10 + 2X. The sums of squares are SST = 378, SSR = 330, SSE = 48, so R² = 330 ÷ 378 = <strong>0.873</strong> and adjusted R² = 1 − (1 − 0.873) × 9 ÷ 8 = <strong>0.857</strong>.</p>\n<div class=\"formula\">Ŷ = 10 + 2X &nbsp;|&nbsp; R² = 0.873 &nbsp;|&nbsp; Adjusted R² = 0.857</div>"
    },
    {
      "heading": "Step 3: Test the Slope",
      "html": "<p><strong>Step 3 — Test.</strong> The standard error of the regression is s = √(48 ÷ 8) = <strong>2.45</strong>. The standard error of the slope is SE(b<sub>1</sub>) = 2.45 ÷ √82.5 = <strong>0.27</strong>. The t-statistic is t = 2 ÷ 0.27 = <strong>7.42</strong> with 8 degrees of freedom; the 5% critical value is 2.306, so we <strong>reject H<sub>0</sub>: β<sub>1</sub> = 0</strong> — the slope is statistically significant, with a p-value of about 0.0001. The 95% confidence interval is 2 ± 2.306 × 0.27 = <strong>(1.38, 2.62)</strong>. The F-statistic is <strong>55</strong> (t² = 7.416² = 55.00), which also equals (330 ÷ 1) ÷ (48 ÷ 8) = 330 ÷ 6 = 55.</p>\n<p>Forecasting from the line: at advertising of $12,000 (X = 12), predicted sales are 10 + 2 × 12 = <strong>$34,000</strong>. At $15,000, predicted sales are 10 + 2 × 15 = <strong>$40,000</strong>. Note that 12 and 15 are outside the observed range 1–10, so these are extrapolations — useful as illustrations, not as promises.</p>"
    },
    {
      "heading": "Step 4: Check the Assumptions",
      "html": "<p><strong>Step 4 — Check.</strong> The residuals are 0, 0, 2, −4, 2, 0, 0, 2, −4, 2 (actual minus fitted). Check them three ways. First, they sum to zero, as OLS residuals must. Second, plot them against X: they bounce between −4 and +2 with no fan shape, so there is no obvious heteroskedasticity in this tiny sample — though with n = 10 you could easily miss it, so report the robust standard error anyway (0.41, giving a robust t of 4.88 — still significant). Third, check the sequence: the residuals do not run in long streaks, and the Durbin–Watson statistic is 3.25, which is above 2 (some negative autocorrelation in this teaching sample, but with n = 10 the DW test has little power — say so rather than over-claiming).</p>\n<p>Also check the model choice: adding price as a second variable (Module 8) raised R² only to 0.88, adjusted R² fell to 0.846, AIC rose from 19.69 to 20.82, BIC from 20.29 to 21.72, and the nested F was 0.64 against a critical value of 5.59 — price stays out. Finally, remember the sample: 10 shops, one time period, no controls for location or price. That is the project's biggest limit, and it belongs in the write-up.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>The project chain: question → model → estimate → test → check → write-up.</li>\n<li>Results: Ŷ = 10 + 2X; R² = 0.873; adjusted R² = 0.857; s = 2.45; SE(b<sub>1</sub>) = 0.27; t = 7.42 (df = 8, critical 2.306) → reject H<sub>0</sub>; 95% CI (1.38, 2.62); F = 55.</li>\n<li>Forecasts: X = 12 → $34,000; X = 15 → $40,000 (extrapolations — say so).</li>\n<li>Checks: residuals sum to zero; no fan shape; robust t = 4.88 still significant; price fails every model-selection test.</li>\n<li>The dataset is a teaching sample, not a publishable finding — and correlation is not causation: location may explain part of the slope.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Writing up the significant slope and stopping. A result without assumption checks, a robustness check, and a limits paragraph is an unfinished project — and a referee, a manager, or a client will ask for all three.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Hiding the sample size. \"Advertising raises sales (t = 7.42)\" sounds strong; \"in a teaching sample of 10 shops\" tells the reader exactly how much weight to give it. Always state n, the data source, and the vintage up front.</div>\n<p><strong>Ready-to-Work link:</strong> This is the capstone in miniature. If you can run this project end to end — and write the one paragraph that reports it honestly — you can run the capstone's regression analysis (Step 13) and any applied project a job asks for.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Applied econometrics", "def": "Running a complete regression project on real (or teaching) data, from question to write-up." },
    { "term": "Regression table", "def": "A compact table reporting coefficients, standard errors, t-statistics, and R² for a fitted model." },
    { "term": "Robustness check", "def": "Re-running results with a different method (e.g. robust standard errors) to see whether the conclusion survives." },
    { "term": "Teaching sample", "def": "Clearly-labeled example numbers used to demonstrate a method; not real data and not a publishable finding." },
    { "term": "Write-up", "def": "A short, honest report of a regression: question, data, model, results, checks, and limits." },
    { "term": "Data source and vintage", "def": "Where data came from and what period they cover — required in any honest write-up." },
    { "term": "Replication", "def": "Re-running an analysis on new data or with new methods to see whether the result holds." },
    { "term": "Sensitivity analysis", "def": "Checking how results change when assumptions, variables, or samples change." },
    { "term": "Out-of-sample check", "def": "Testing a fitted model on data it was not estimated on." },
    { "term": "Limits section", "def": "The part of a write-up that states what the analysis cannot show." },
    { "term": "Fitted line", "def": "Ŷ = b0 + b1X, the estimated regression line used for prediction." },
    { "term": "Prediction", "def": "A fitted value for a given X, including values outside the observed range (extrapolation)." }
  ],
  "video": {
    "title": "Linear Regression, Explained: From Data to Prediction (Full Walkthrough)",
    "embedUrl": "https://www.youtube.com/embed/BSwtdNleQVs",
    "note": "One house-price example carries the whole video: building the regression from scratch, predicting a new house, and evaluating the model — the same end-to-end arc as this module's guided project. Watch it, then redo the advertising project with its steps.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In the guided project, the sums are Σ(X<sub>i</sub> − x̄)(Y<sub>i</sub> − ȳ) = 165, Σ(X<sub>i</sub> − x̄)² = 82.5, x̄ = 5.5, ȳ = 21. Compute b<sub>1</sub> and b<sub>0</sub> and write the fitted line.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: b<sub>1</sub> = 165 ÷ 82.5 = <strong>2</strong>. Step 2: b<sub>0</sub> = ȳ − b<sub>1</sub>x̄ = 21 − 2 × 5.5 = 21 − 11 = <strong>10</strong>. Step 3: The fitted line is Ŷ = 10 + 2X, with Y and X in $1,000s. Step 4: Interpretation: each extra $1,000 of advertising is associated with $2,000 more sales, and a shop advertising nothing is predicted to sell $10,000.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> In the guided project, SST = 378, SSR = 330, SSE = 48. Compute R² and adjusted R² (n = 10, k = 1) and interpret both.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: R² = SSR ÷ SST = 330 ÷ 378 = <strong>0.873</strong>: advertising explains 87.3% of the variation in sales in this teaching sample. Step 2: Adjusted R² = 1 − (1 − 0.873) × 9 ÷ 8 = 1 − 0.127 × 1.125 = 1 − 0.1429 = <strong>0.857</strong>. Step 3: The adjustment is small because there is only one regressor. Step 4: Neither number shows causation — location or price could explain part of the fit.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> In the guided project, SSE = 48, n = 10, Σ(X<sub>i</sub> − x̄)² = 82.5. Compute s, SE(b<sub>1</sub>), and t, and test H<sub>0</sub>: β<sub>1</sub> = 0 at 5% (critical value 2.306).</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: s = √(48 ÷ 8) = √6 = <strong>2.45</strong>. Step 2: SE(b<sub>1</sub>) = 2.45 ÷ √82.5 = 2.45 ÷ 9.08 = <strong>0.27</strong>. Step 3: t = 2 ÷ 0.27 = <strong>7.42</strong>. Step 4: |7.42| &gt; 2.306, so <strong>reject H<sub>0</sub></strong> — the slope is statistically significant. Step 5: The 95% CI is 2 ± 2.306 × 0.27 = (1.38, 2.62).</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Using Ŷ = 10 + 2X, predict sales for advertising of $7,000 and $12,000. Which prediction is safer, and why?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: At X = 7, Ŷ = 10 + 14 = <strong>24</strong> ($24,000) — and the actual sales at X = 7 are 24, so the residual is 0. Step 2: At X = 12, Ŷ = 10 + 24 = <strong>34</strong> ($34,000). Step 3: The X = 7 prediction is safer: 7 is inside the observed range 1–10, while 12 is an extrapolation beyond the data. Step 4: The line may not hold outside the observed range — advertising could hit diminishing returns, for example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Write the one-paragraph write-up for the guided project, including the result, the test, and the limits.</p>",
      "solution": "<p><strong>Answer (model paragraph):</strong> Step 1: State the result: \"In a teaching sample of 10 shops, regressing monthly sales on advertising spending gives Ŷ = 10 + 2X (sales and advertising in $1,000s), with R² = 0.873.\" Step 2: State the test: \"The slope is 2.00 (SE 0.27, t = 7.42, p ≈ 0.0001), significant at 5%, with a 95% confidence interval of (1.38, 2.62).\" Step 3: State the checks: \"The result survives robust standard errors (t = 4.88), and adding price does not improve the model.\" Step 4: State the limits: \"The sample is 10 teaching observations with no controls for location or price, so the slope is an association, not a proven causal effect.\" Step 5: A paragraph with all four parts is an honest write-up; any part missing is a gap.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A colleague says \"t = 7.42, so advertising definitely causes sales — let's double the ad budget.\" Give three reasons to slow down.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The data are a <strong>teaching sample of 10 shops</strong>, not a real study — the numbers demonstrate the method, they are not evidence about real advertising. Step 2: Even on real data, the slope is an <strong>association</strong>: shops that advertise more may have better locations or products, so part of the slope may be omitted-variable bias. Step 3: The forecast at higher spending is an <strong>extrapolation</strong> — doubling the budget goes beyond the observed range, where diminishing returns may apply. Step 4: The right next step is a bigger sample with controls, or better, an experiment — not a budget doubling on the strength of one small regression.</p>"
    }
  ],
  "quiz": [
    {
      "q": "In the guided project, the fitted line is:",
      "choices": [
        "Ŷ = 2 + 10X",
        "Ŷ = 10 + 2X",
        "Ŷ = 21 + 5.5X",
        "Ŷ = 0.873 + 2X"
      ],
      "answer": 1,
      "explanation": "Correct: (b). b1 = 165 ÷ 82.5 = 2 and b0 = 21 − 2 × 5.5 = 10. (a) swaps slope and intercept. (c) uses the means as coefficients. (d) uses R² as the intercept."
    },
    {
      "q": "In the guided project, R² = 0.873 means:",
      "choices": [
        "Advertising causes 87.3% of sales",
        "Advertising explains 87.3% of the variation in sales in this teaching sample",
        "87.3% of the predictions are exactly right",
        "The slope is 0.873"
      ],
      "answer": 1,
      "explanation": "Correct: (b). R² is the share of variation explained. (a) claims causation, which R² never shows. (c) confuses explained variation with exact prediction. (d) The slope is 2, not 0.873."
    },
    {
      "q": "The t-statistic for the slope in the guided project is 7.42. The correct conclusion at 5% (critical value 2.306) is:",
      "choices": [
        "Fail to reject H0",
        "Reject H0 — the slope is statistically significant",
        "The slope is exactly 7.42",
        "The model is proven causal"
      ],
      "answer": 1,
      "explanation": "Correct: (b). |7.42| > 2.306. (a) reverses the decision. (c) confuses t with the slope, which is 2. (d) Significance is not causation — the project has no controls for location or price."
    },
    {
      "q": "Predicted sales at advertising of $12,000 (X = 12) are:",
      "choices": [
        "$24,000",
        "$34,000",
        "$40,000",
        "$12,000"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 10 + 2 × 12 = 34, in $1,000s. (a) is the prediction at X = 7. (c) is the prediction at X = 15. (d) is the advertising spend itself, not sales."
    },
    {
      "q": "The residuals in the guided project are 0, 0, 2, −4, 2, 0, 0, 2, −4, 2. Their sum is:",
      "choices": [
        "−4",
        "0",
        "2",
        "48"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 0 + 0 + 2 − 4 + 2 + 0 + 0 + 2 − 4 + 2 = 0, as OLS residuals always sum to zero. (a) is one residual, not the sum. (c) is a single residual value. (d) is the SSE, the sum of squared residuals."
    },
    {
      "q": "In the guided project, adding price raised R² to 0.88 but adjusted R² fell to 0.846 and the nested F was 0.64. The decision is:",
      "choices": [
        "Keep price — R² rose",
        "Leave price out — every penalized criterion says it did not earn its place",
        "Keep price because the F-test is significant",
        "Drop advertising instead"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Adjusted R², AIC, BIC, and the F-test all say no. (a) is the R² trap — R² always rises. (c) is false: 0.64 < 5.59, not significant. (d) is backwards — advertising is the significant variable."
    },
    {
      "q": "Why must the write-up say the dataset is a teaching sample?",
      "choices": [
        "Because the numbers are wrong",
        "Because the reader must know the numbers demonstrate a method and are not evidence about real advertising",
        "Because teaching samples cannot have R² values",
        "Because the lab requires it for grading"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Honesty about data provenance is part of the result — a reader who thinks these are real shops would draw real conclusions from made-up numbers. (a) is false — the arithmetic is correct. (c) is false. (d) is not the reason — it is about honest reporting."
    },
    {
      "q": "The most important limit of the guided project is:",
      "choices": [
        "The R² is too high",
        "Only 10 teaching observations, no controls for location or price, so the slope is an association, not a proven causal effect",
        "The t-statistic is too large",
        "The intercept is significant"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Small sample, no controls, teaching data — the slope cannot be read as causal. (a) A high R² is not a limit. (c) A large t is evidence of association, not a problem. (d) A significant intercept is normal and unimportant."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Applied Econometrics: Quick Reference</h3>\n<p><strong>Core idea:</strong> A project is a chain — question → model → estimate → test → check → write-up — and every link must hold.</p>\n<div class=\"formula\">Ŷ = 10 + 2X &nbsp;|&nbsp; R² = 0.873 &nbsp;|&nbsp; Adjusted R² = 0.857 &nbsp;|&nbsp; t = 7.42 &nbsp;|&nbsp; 95% CI (1.38, 2.62) &nbsp;|&nbsp; F = 55</div>\n<p><strong>Dataset (teaching sample, clearly labeled):</strong> 10 shops, X = advertising $1,000s (1–10), Y = sales $1,000s (12, 14, 18, 14, 22, 22, 24, 28, 24, 32). Not real data, not a publishable finding.</p>\n<p><strong>Checks:</strong> residuals sum to zero; no fan shape; robust t = 4.88 still significant; price fails adjusted R², AIC, BIC, and the nested F (0.64 vs 5.59).</p>\n<p><strong>Forecasts:</strong> X = 12 → $34,000; X = 15 → $40,000 — extrapolations, say so.</p>\n<p><strong>Watch out:</strong> always report n, source, and vintage; always include a limits paragraph; correlation is not causation.</p>\n<p><strong>Self-check:</strong> Write the one-paragraph write-up — result, test, checks, limits — from memory.</p>\n"
};
