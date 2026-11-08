// Economics Capstone — Module 6: Regression Analysis: Testing Your Hypothesis
module.exports = {
  "number": 6,
  "slug": "regression-analysis",
  "title": "Regression Analysis: Testing Your Hypothesis",
  "estTime": "3–4 hours",
  "objectives": [
    "Run the OLS regression by hand: slope 2.425, intercept −14.70, from Sxy = 194.0 and Sxx = 80.0.",
    "Compute R² = 0.96 and the correlation r = 0.98, and explain what each one means.",
    "Compute standard errors and t-statistics (slope t = 13.57) and test the null hypothesis.",
    "Build a regression results table with coefficients, standard errors, t-statistics, and R².",
    "Write the regression results section of the paper (paper arc: Module 6)."
  ],
  "sections": [
    {
      "heading": "The Regression, Step by Step",
      "html": "<p>The regression is wage = a + b × schooling + error, fitted by OLS on the 10 workers. The ingredients were computed in Module 4: mean schooling 16.0, mean wage $24.10, Sxx = 80.0, Sxy = 194.0. The slope is b = Sxy ÷ Sxx = 194.0 ÷ 80.0 = <strong>2.425</strong>, rounded to $2.43 an hour per extra year. The intercept is a = 24.10 − 2.425 × 16.0 = 24.10 − 38.80 = <strong>−14.70</strong>. The fitted line is wage = −14.70 + 2.43 × schooling, and it passes through the point of means (16.0, $24.10) — every OLS line does, which is a useful check: at 16 years the line predicts exactly the mean wage, $24.10.</p><p>Check the line against the group means from Module 5: at 12 years it predicts −14.70 + 2.425 × 12 = $14.40 (actual group mean $15.00); at 20 years it predicts −14.70 + 2.425 × 20 = $33.80 (actual $34.50). The predictions sit just below the group means because the intercept is pulled down by the line's fit through all 10 points, not just the group averages. The residuals — actual minus predicted — are: −0.40, +1.60, −1.25, +0.75, −2.10, +0.90, −1.95, +1.05, −0.80, +2.20. They sum to zero (up to rounding), as OLS residuals always do, and their squares sum to 20.45.</p><div class=\"callout\"><strong>Key idea:</strong> The slope is the answer to the research question in one number: $2.43 of hourly wage per extra year of schooling, in this sample. Everything else in this module measures how much to trust it.</div>"
    },
    {
      "heading": "How Well Does the Line Fit? R² and r",
      "html": "<p>Fit is measured by <strong>R²</strong>: the share of the variation in wages that the line explains. Total variation (SST) is the sum of squared deviations of wages from their mean: 490.90. Unexplained variation (SSR) is the sum of squared residuals: 20.45. R² = 1 − SSR ÷ SST = 1 − 20.45 ÷ 490.90 = 1 − 0.0417 = <strong>0.958</strong>, rounded to 0.96. The line explains 96% of the variation in wages — a very tight fit, which is expected when the group means rise almost perfectly steadily. The <strong>correlation</strong> between schooling and wages is r = 0.98 (the square root of R², with the sign of the slope): a very strong positive linear association.</p><p>Two warnings. First, a high R² does not mean the slope is causal — it means the line fits, and a line can fit a spurious relationship perfectly. Second, R² rises whenever you add variables, so it cannot be used to compare models with different numbers of regressors without adjustment. Here, with one variable and 10 points, 0.96 says the pattern is strong; it says nothing about why the pattern exists. That is Module 7's job.</p>"
    },
    {
      "heading": "Is the Slope Real? Standard Errors and t-Statistics",
      "html": "<p>A slope of $2.43 from 10 workers could be luck. The <strong>standard error</strong> measures how much the slope would wobble if you drew a different 10 workers: SE(b) = 0.18. The <strong>t-statistic</strong> is the slope divided by its standard error: t = 2.425 ÷ 0.18 = <strong>13.57</strong>. With 8 degrees of freedom (10 workers minus 2 estimated numbers), the 5% critical value is 2.31 — and 13.57 is far beyond it. The p-value is far below 0.01: if the null (slope = 0) were true, a slope this large would be almost impossible to get by chance. The paper rejects H₀ and reports the slope as statistically significant.</p><p>The intercept's standard error is 2.90, giving t = −14.70 ÷ 2.90 = −5.06 — also significant, but meaningless to interpret, as Module 4 warned. The 95% confidence interval for the slope is 2.43 ± 2.31 × 0.18, or <strong>$2.01 to $2.84</strong> an hour per year: the paper is 95% confident the true slope (in the population this sample stands for) lies in that range — and the whole interval sits above zero and inside the literature's benchmark range. A confidence interval says more than a p-value: it gives the size of the effect and its precision in one line.</p><div class=\"callout\"><strong>Key idea:</strong> The t-statistic answers \"could this be luck?\" The confidence interval answers \"how big, and how precisely do we know it?\" Report both.</div>"
    },
    {
      "heading": "The Results Table",
      "html": "<p>A regression table has one row per coefficient and columns for the estimate, standard error, and t-statistic, with the fit statistics below. Here it is, with every number recomputed: Intercept: −14.70 (SE 2.90, t = −5.06). Schooling: 2.43 (SE 0.18, t = 13.57). R² = 0.96. n = 10. The table note states the dependent variable (hourly wage, dollars), the estimation method (OLS), and that standard errors are the usual OLS ones. One more number belongs in the text, not the table: the predicted wage at 16 years of schooling is $24.10 (the mean), at 12 years $14.40, and at 20 years $33.80 — predictions the reader can check against the group means ($15.00, $23.50, $34.50) and see that the line tracks them closely.</p><p>Two predictions must not be made: at 10 years ($9.55) and at 22 years ($38.65). Both lie outside the observed schooling range of 12–20 years, and the line has no evidence there — extrapolating assumes the relationship stays straight where no data exists. The paper states the observed range and refuses to predict outside it. That refusal is a sign of a careful paper, and the lab tests it.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> wage = −14.70 + 2.43 × schooling; slope 2.425 (SE 0.18, t = 13.57), intercept −14.70 (SE 2.90, t = −5.06); R² = 0.96, r = 0.98; 95% CI for the slope $2.01–$2.84; predictions $14.40 at 12 years, $24.10 at 16, $33.80 at 20; residuals sum to zero, SSR = 20.45, SST = 490.90. <strong>Paper arc:</strong> this module's assignment writes the regression results section.</p><div class=\"callout\"><strong>Common mistake:</strong> Reporting the slope without its standard error. A slope without a standard error is a claim without evidence — $2.43 means little until you know it is 13.57 standard errors from zero.</div><div class=\"callout\"><strong>Common mistake:</strong> Saying R² = 0.96 \"proves\" the model is right. R² measures fit, not truth: a line can fit a spurious relationship perfectly, and a true relationship can have a low R² when the data is noisy.</div>"
    }
  ],
  "keyTerms": [
    { "term": "OLS regression", "def": "Ordinary least squares: the line minimizing the sum of squared residuals. Here wage = −14.70 + 2.43 × schooling." },
    { "term": "Slope (b)", "def": "2.425, rounded to $2.43: the predicted change in hourly wage for one extra year of schooling." },
    { "term": "Intercept (a)", "def": "−14.70: the predicted wage at zero schooling. Reported, never interpreted." },
    { "term": "R-squared (R²)", "def": "1 − SSR ÷ SST = 1 − 20.45 ÷ 490.90 = 0.96: the share of wage variation the line explains." },
    { "term": "Correlation (r)", "def": "0.98: the strength and direction of the linear association between schooling and wages. r² = R² in a one-variable regression." },
    { "term": "SSR (sum of squared residuals)", "def": "20.45: the unexplained variation — the squared gaps between actual and predicted wages, summed." },
    { "term": "SST (total sum of squares)", "def": "490.90: the total variation in wages around their mean, before any regression." },
    { "term": "Standard error", "def": "How much an estimate would wobble across samples. SE of the slope is 0.18; of the intercept, 2.90." },
    { "term": "t-statistic", "def": "Estimate ÷ standard error. Slope t = 2.425 ÷ 0.18 = 13.57; intercept t = −14.70 ÷ 2.90 = −5.06." },
    { "term": "p-value", "def": "The probability of getting a result this extreme if the null were true. Here far below 0.01 for the slope." },
    { "term": "Degrees of freedom", "def": "n minus the number of estimated coefficients: 10 − 2 = 8. The t critical value at 5% is 2.31." },
    { "term": "Confidence interval", "def": "Estimate ± critical value × standard error. For the slope: 2.43 ± 2.31 × 0.18 = $2.01 to $2.84." },
    { "term": "Fitted value / prediction", "def": "The wage the line predicts for a given schooling level: $14.40 at 12 years, $24.10 at 16, $33.80 at 20." },
    { "term": "Extrapolation", "def": "Predicting outside the observed range of the data (here, below 12 or above 20 years of schooling). The paper refuses to do it." }
  ],
  "video": {
    "title": "Linear Regression, Explained: From Data to Prediction (Full Walkthrough)",
    "embedUrl": "https://www.youtube.com/embed/BSwtdNleQVs",
    "note": "One house-price example carries the whole video: means, deviations, slope, intercept, residuals, least squares, and R² — the same calculation you just did by hand on wages, worked through on a different dataset.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1 — Paper section: Regression results (the line).</strong> Write the results paragraph: the fitted line, the slope in words ($2.43 an hour per extra year), the intercept with its warning, and the check that the line passes through the point of means (16.0, $24.10).</p>",
      "solution": "<p><strong>Answer:</strong> The OLS regression of hourly wage on years of schooling, on the 10-worker teaching sample, is wage = −14.70 + 2.43 × schooling. Each additional year of schooling is associated with $2.43 more in hourly pay. The intercept (−$14.70) is the predicted wage at zero years of schooling and has no economic meaning — zero schooling lies outside the observed range of 12–20 years — so it is reported and not interpreted. The line passes through the point of means (16.0 years, $24.10), as every OLS line does.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2 — R² by hand.</strong> SSR = 20.45 and SST = 490.90. Compute R² and the correlation r (r = √R², positive because the slope is positive). Interpret both in one sentence each.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: R² = 1 − SSR ÷ SST = 1 − 20.45 ÷ 490.90 = 1 − 0.0417 = <strong>0.958</strong>, rounded to 0.96. Step 2: r = √0.958 = <strong>0.98</strong>. Step 3: R² = 0.96 means the line explains 96% of the variation in hourly wages. Step 4: r = 0.98 means schooling and wages have a very strong positive linear association — but neither number says the relationship is causal.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3 — t-test by hand.</strong> Slope = 2.425, SE = 0.18, df = 8, 5% critical value 2.31. Compute the t-statistic, state whether you reject H₀ (slope = 0), and say what the p-value being below 0.01 means.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: t = 2.425 ÷ 0.18 = <strong>13.57</strong>. Step 2: 13.57 &gt; 2.31, so reject H₀ at the 5% level — the slope is statistically significant. Step 3: A p-value below 0.01 means that if the true slope were zero, a sample slope this large would occur less than 1 time in 100 by chance. Step 4: The result supports H₁ (positive association), but significance is not causation — that judgment belongs to Module 7.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4 — Confidence interval.</strong> Slope = 2.43, SE = 0.18, critical value 2.31. Compute the 95% confidence interval and interpret it in one sentence.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Margin = 2.31 × 0.18 = 0.42 (2.31 × 0.18 = 0.4158, rounded to 0.42). Step 2: Interval = 2.43 ± 0.42 = <strong>$2.01 to $2.84</strong> (using unrounded numbers: 2.425 ± 0.4158 = 2.01 to 2.84). Step 3: Interpretation: we are 95% confident the true slope lies between $2.01 and $2.84 an hour per year — the whole interval is above zero and inside the literature's benchmark range.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5 — Predictions and residuals.</strong> (a) Predict the wage at 12, 16, and 20 years of schooling using wage = −14.70 + 2.425 × schooling. (b) The worker with 16 years earning $22 has what residual? (c) Why not predict at 10 or 22 years?</p>",
      "solution": "<p><strong>Solution:</strong> (a) At 12: −14.70 + 2.425 × 12 = −14.70 + 29.10 = <strong>$14.40</strong>. At 16: −14.70 + 38.80 = <strong>$24.10</strong>. At 20: −14.70 + 48.50 = <strong>$33.80</strong>. (b) Predicted $24.10, actual $22, residual = 22 − 24.10 = <strong>−$2.10</strong>. (c) 10 and 22 years lie outside the observed range (12–20); predicting there is extrapolation — the relationship may not stay straight where no data exists, so the paper refuses.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6 — Paper section: Regression table.</strong> Build the table: rows for Intercept and Schooling with estimate, SE, t; plus R² = 0.96 and n = 10. Add a notes line naming the dependent variable and the method.</p>",
      "solution": "<p><strong>Answer:</strong> Dependent variable: hourly wage ($). Method: OLS, n = 10. Intercept: −14.70 (SE 2.90, t = −5.06). Schooling (years): 2.43 (SE 0.18, t = 13.57). R² = 0.96. Notes: standard errors are the usual OLS standard errors; the intercept is reported but not interpreted (zero schooling is outside the data); predictions are made only within the observed schooling range of 12–20 years.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The OLS slope in this paper is:",
      "choices": [
        "$2.43 an hour per extra year of schooling",
        "$24.10 an hour",
        "−$14.70",
        "0.96"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 194.0 ÷ 80.0 = 2.425, rounded to $2.43. (b) is wrong: $24.10 is the mean wage. (c) is wrong: −$14.70 is the intercept. (d) is wrong: 0.96 is R²."
    },
    {
      "q": "R² = 0.96 means:",
      "choices": [
        "The slope is causal",
        "The line explains 96% of the variation in wages",
        "96% of workers earn above the mean",
        "The p-value is 0.96"
      ],
      "answer": 1,
      "explanation": "Correct: (b). R² = 1 − 20.45 ÷ 490.90 = 0.96. (a) is wrong: fit is not causation. (c) is wrong: R² says nothing about how many workers earn above the mean. (d) is wrong: the p-value is below 0.01."
    },
    {
      "q": "The t-statistic for the slope is 13.57. With a 5% critical value of 2.31, you:",
      "choices": [
        "Fail to reject H₀",
        "Reject H₀ — the slope is statistically significant",
        "Conclude the slope is causal",
        "Conclude the sample is too small to say anything"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 13.57 &gt; 2.31, so the null of a zero slope is rejected. (a) is wrong: that is what a small t would give. (c) is wrong: significance is not causation. (d) is wrong: the t-statistic already accounts for the small sample through the standard error."
    },
    {
      "q": "The 95% confidence interval for the slope is:",
      "choices": [
        "$0.00 to $2.43",
        "$2.01 to $2.84",
        "−$14.70 to $2.43",
        "$14.40 to $33.80"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 2.43 ± 2.31 × 0.18 = 2.43 ± 0.42 = $2.01 to $2.84. (a) is wrong: the interval does not include zero. (c) is wrong: those are the intercept and slope, not an interval. (d) is wrong: those are predictions at 12 and 20 years."
    },
    {
      "q": "The predicted wage at 20 years of schooling is:",
      "choices": [
        "$24.10",
        "$33.80",
        "$34.50",
        "$38.65"
      ],
      "answer": 1,
      "explanation": "Correct: (b). −14.70 + 2.425 × 20 = $33.80. (a) is wrong: that is the prediction at 16 years. (c) is wrong: that is the actual group mean at 20 years. (d) is wrong: that is the extrapolated prediction at 22 years, which the paper refuses to make."
    },
    {
      "q": "The residuals sum to zero because:",
      "choices": [
        "The data was made up",
        "OLS fits the line through the point of means, so positive and negative gaps cancel",
        "R² is 0.96",
        "The sample is symmetric"
      ],
      "answer": 1,
      "explanation": "Correct: (b). OLS with an intercept guarantees the residuals sum to zero (up to rounding). (a) is wrong: the data being a teaching sample is not the reason. (c) is wrong: R² measures fit, not the residual sum. (d) is wrong: symmetry of schooling is not the mechanism."
    },
    {
      "q": "Why does the paper refuse to predict wages at 22 years of schooling?",
      "choices": [
        "The arithmetic is too hard",
        "22 years is outside the observed range — extrapolation",
        "The slope is negative there",
        "The sample has no 22-year workers, so the wage must be zero"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The observed range is 12–20 years; beyond it the relationship may not stay straight. (a) is wrong: the arithmetic is the same. (c) is wrong: the slope is a single number, 2.425, for the whole line. (d) is wrong: no data does not mean zero wage — it means no evidence."
    },
    {
      "q": "The correlation between schooling and wages is 0.98. This means:",
      "choices": [
        "Schooling causes 98% of wages",
        "A very strong positive linear association — but not causation by itself",
        "98% of workers have 16 years of schooling",
        "The regression has 98 observations"
      ],
      "answer": 1,
      "explanation": "Correct: (b). r = 0.98 is a very strong linear association; causation needs more evidence. (a) is wrong: correlation is not a causal share. (c) is wrong: only 2 of 10 workers have 16 years. (d) is wrong: n = 10."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Regression Analysis: Quick Reference</h3>\n<p><strong>Core idea:</strong> The slope is the answer in one number — $2.43 an hour per extra year. Everything else measures how much to trust it.</p>\n<div class=\"formula\">wage = −14.70 + 2.43 × schooling &nbsp;|&nbsp; b = 194.0 ÷ 80.0 = 2.425 &nbsp;|&nbsp; R² = 1 − 20.45 ÷ 490.90 = 0.96 &nbsp;|&nbsp; r = 0.98</div>\n<p><strong>Tests:</strong> SE(slope) = 0.18, t = 13.57 &gt; 2.31 (df = 8) → reject H₀, p &lt; 0.01. 95% CI: $2.01–$2.84. <strong>Predictions:</strong> 12 yrs → $14.40 · 16 yrs → $24.10 · 20 yrs → $33.80. No extrapolation outside 12–20 years. <strong>Residuals:</strong> −0.40, +1.60, −1.25, +0.75, −2.10, +0.90, −1.95, +1.05, −0.80, +2.20 (sum to zero; SSR = 20.45).</p>\n<p><strong>Paper arc:</strong> This module's assignment writes the regression results section.</p>\n<p><strong>Self-check:</strong> Recompute the slope, R², t-statistic, and the 95% CI without looking. If you can, the lab will be arithmetic, not mystery.</p>\n"
};
