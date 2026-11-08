// eco221 - Module 2: The Regression Model: OLS & What It Estimates
module.exports = {
  "number": 2,
  "slug": "the-regression-model-ols",
  "title": "The Regression Model: OLS & What It Estimates",
  "estTime": "3–4 hours",
  "objectives": [
    "Write the simple linear regression model and define every symbol in it.",
    "Derive the OLS slope and intercept from the sums of the data.",
    "Compute fitted values and residuals, and explain what a residual is.",
    "Compute and interpret R-squared from SST, SSR, and SSE.",
    "Interpret a slope and an intercept in plain words, including when the intercept means little."
  ],
  "sections": [
    {
      "heading": "The Model, Symbol by Symbol",
      "html": "<p>The <strong>simple linear regression model</strong> is Y = β<sub>0</sub> + β<sub>1</sub>X + u. Y is the <strong>dependent variable</strong>, the outcome. X is the <strong>independent variable</strong>, the explanatory variable. β<sub>0</sub> is the <strong>intercept</strong>: the average value of Y when X = 0. β<sub>1</sub> is the <strong>slope</strong>: the average change in Y when X rises by one unit. u is the <strong>error term</strong>: everything that moves Y besides X.</p>\n<p>Two words in those definitions do heavy work. \"Average\" matters because the model describes the average Y for a given X — individual observations scatter around the line. \"Besides X\" matters because u is not a mistake in the data; it is real variation the model does not explain. A good regression does not make u disappear; it makes u small and, ideally, unrelated to X.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A regression line is a summary of averages, not a rule every observation obeys. The slope says \"on average, one more unit of X goes with β<sub>1</sub> more units of Y\" — and the residuals show how far each real observation sits from that average.</div>"
    },
    {
      "heading": "Ordinary Least Squares: The Line That Minimizes the Misses",
      "html": "<p><strong>Ordinary least squares (OLS)</strong> picks the line that makes the total squared miss as small as possible. For each observation i, the <strong>fitted value</strong> is Ŷ<sub>i</sub> = b<sub>0</sub> + b<sub>1</sub>X<sub>i</sub> and the <strong>residual</strong> is e<sub>i</sub> = Y<sub>i</sub> − Ŷ<sub>i</sub>, the vertical distance from the point to the line. OLS chooses b<sub>0</sub> and b<sub>1</sub> to minimize Σe<sub>i</sub>², the sum of squared residuals. Squaring matters: it punishes big misses more than small ones and stops positive and negative misses from cancelling out.</p>\n<p>The formulas fall out of that minimization. Let x̄ be the mean of X and ȳ the mean of Y. Then the slope is b<sub>1</sub> = Σ(X<sub>i</sub> − x̄)(Y<sub>i</sub> − ȳ) ÷ Σ(X<sub>i</sub> − x̄)², and the intercept is b<sub>0</sub> = ȳ − b<sub>1</sub>x̄. Notice the intercept formula forces the fitted line to pass through the point (x̄, ȳ) — the means of the data. Every OLS line goes through the center of its data.</p>\n<div class=\"formula\">b<sub>1</sub> = Σ(X<sub>i</sub> − x̄)(Y<sub>i</sub> − ȳ) / Σ(X<sub>i</sub> − x̄)² &nbsp;|&nbsp; b<sub>0</sub> = ȳ − b<sub>1</sub>x̄ &nbsp;|&nbsp; e<sub>i</sub> = Y<sub>i</sub> − Ŷ<sub>i</sub></div>\n<p><strong>Worked example — study hours and exam scores (teaching numbers).</strong> Six students studied X = 1, 2, 3, 4, 5, 6 hours and scored Y = 53, 56, 60, 60, 66, 68. The means are x̄ = 3.5 and ȳ = 60.5. The sums are Σ(X<sub>i</sub> − x̄)(Y<sub>i</sub> − ȳ) = 52.5 and Σ(X<sub>i</sub> − x̄)² = 17.5, so b<sub>1</sub> = 52.5 ÷ 17.5 = <strong>3</strong> points per extra hour, and b<sub>0</sub> = 60.5 − 3 × 3.5 = <strong>50</strong>. The fitted line is Ŷ = 50 + 3X. Fitted values are 53, 56, 59, 62, 65, 68, so the residuals are 0, 0, 1, −2, 1, 0 — and they sum to zero, as OLS residuals always do.</p>"
    },
    {
      "heading": "R-Squared: How Much of Y Does X Explain?",
      "html": "<p>How well does the line fit? Split the total variation in Y into two parts. <strong>SST</strong> (total sum of squares) is Σ(Y<sub>i</sub> − ȳ)² — all the variation in Y. <strong>SSR</strong> (regression sum of squares) is Σ(Ŷ<sub>i</sub> − ȳ)² — the part the line explains. <strong>SSE</strong> (error sum of squares) is Σe<sub>i</sub>² — the part left over. They add up exactly: SST = SSR + SSE.</p>\n<p><strong>R-squared</strong> is R² = SSR ÷ SST = 1 − SSE ÷ SST: the share of the variation in Y that the regression explains. It runs from 0 (X explains nothing) to 1 (the line fits every point exactly). In the study-hours example, SST = 163.5, SSE = 0² + 0² + 1² + (−2)² + 1² + 0² = 6, and SSR = 163.5 − 6 = 157.5, so R² = 157.5 ÷ 163.5 = <strong>0.963</strong>: study hours explain 96.3% of the variation in scores in this small teaching sample.</p>\n<div class=\"formula\">R² = SSR / SST = 1 − SSE / SST &nbsp;|&nbsp; SST = SSR + SSE</div>\n<p>A high R² feels like success, but read it carefully. It measures fit, not truth: a high R² does not prove X causes Y, and a low R² does not prove X is irrelevant — Y may be noisy for reasons that have nothing to do with X. In the lab dataset for this course (Module 10 and the lab), R² is 0.873: advertising explains 87.3% of the variation in sales in that teaching sample, and 12.7% remains unexplained.</p>"
    },
    {
      "heading": "Interpreting Slope and Intercept — and Their Limits",
      "html": "<p>Interpretation is where regressions earn their keep. In the study example, the slope 3 means: \"Each extra hour of study is associated with 3 more points on the exam, on average.\" The intercept 50 means: \"A student who studies zero hours is predicted to score 50.\" The slope is the star; the intercept is often just the anchor that puts the line in the right place.</p>\n<p>Two cautions. First, the intercept is only meaningful when X = 0 is a sensible value inside (or near) the data. Predicting a score for zero study hours is fine — zero is just below the observed range of 1–6 hours. But if X were the price of a house, X = 0 would be nonsense, and the intercept would be a meaningless number. Second, never extrapolate far beyond the data: the line Ŷ = 50 + 3X predicts 110 points for 20 hours of study, which is impossible on a 100-point exam. A line is a local summary, not a law of nature.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Interpret the slope as an average association, in the units of the data, over the range of X actually observed. The moment you leave that range, you are guessing, not estimating.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Model: Y = β<sub>0</sub> + β<sub>1</sub>X + u; fitted line: Ŷ = b<sub>0</sub> + b<sub>1</sub>X; residual: e<sub>i</sub> = Y<sub>i</sub> − Ŷ<sub>i</sub>.</li>\n<li>OLS minimizes Σe<sub>i</sub>²; b<sub>1</sub> = Σ(X<sub>i</sub> − x̄)(Y<sub>i</sub> − ȳ) / Σ(X<sub>i</sub> − x̄)²; b<sub>0</sub> = ȳ − b<sub>1</sub>x̄; the line passes through (x̄, ȳ).</li>\n<li>R² = SSR / SST = 1 − SSE / SST; SST = SSR + SSE.</li>\n<li>Study example: Ŷ = 50 + 3X, R² = 0.963, residuals 0, 0, 1, −2, 1, 0.</li>\n<li>Interpret slopes as average associations in the data's units and range; the intercept is often just an anchor.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying R² = 0.963 means \"the model is 96.3% correct.\" It means 96.3% of the variation in Y is explained by X in this sample — nothing about causation, and nothing about how well the model will predict new data.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Extrapolating the line far outside the observed X range. A line fitted on 1–6 hours of study says nothing reliable about 20 hours.</div>\n<p><strong>Ready-to-Work link:</strong> \"Run a regression and tell me the slope\" is the single most common data task in business analysis. If you can compute b<sub>0</sub> and b<sub>1</sub> from the sums, explain the residuals, and state R² in plain words, you can do it.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Simple linear regression", "def": "A model with one explanatory variable: Y = β0 + β1X + u." },
    { "term": "Ordinary least squares (OLS)", "def": "The estimation method that chooses b0 and b1 to minimize the sum of squared residuals." },
    { "term": "Fitted value (Ŷ)", "def": "The value the regression line predicts for an observation: Ŷi = b0 + b1Xi." },
    { "term": "Residual (e)", "def": "The gap between the actual and fitted value: ei = Yi − Ŷi. OLS residuals always sum to zero." },
    { "term": "Slope (b1)", "def": "The OLS estimate of β1: the average change in Y per one-unit rise in X." },
    { "term": "Intercept (b0)", "def": "The OLS estimate of β0: the fitted value of Y when X = 0." },
    { "term": "SST", "def": "Total sum of squares, Σ(Yi − ȳ)² — all the variation in Y." },
    { "term": "SSR", "def": "Regression sum of squares, Σ(Ŷi − ȳ)² — the variation the line explains." },
    { "term": "SSE", "def": "Error sum of squares, Σei² — the variation left unexplained." },
    { "term": "R-squared (R²)", "def": "SSR ÷ SST, the share of the variation in Y explained by the regression; between 0 and 1." },
    { "term": "Extrapolation", "def": "Predicting for X values far outside the observed range — unreliable, because the line may not hold there." },
    { "term": "Least squares criterion", "def": "The rule of minimizing the sum of squared residuals to choose the fitted line." }
  ],
  "video": {
    "title": "Introduction to REGRESSION! | SSE, SSR, SST | R-squared | Errors (ε vs. e)",
    "embedUrl": "https://www.youtube.com/embed/aq8VU5KLmkY",
    "note": "Ben Lambert's first regression video: what regression is, why errors are squared, and what SSR, SSE, and SST mean — the exact sums this module uses. Watch it, then redo the study-hours sums yourself.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Six students studied X = 1, 2, 3, 4, 5, 6 hours and scored Y = 53, 56, 60, 60, 66, 68. Compute the OLS slope b<sub>1</sub> step by step from the sums (x̄ = 3.5, ȳ = 60.5).</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Compute the deviations. (X<sub>i</sub> − x̄) are −2.5, −1.5, −0.5, 0.5, 1.5, 2.5; (Y<sub>i</sub> − ȳ) are −7.5, −4.5, −0.5, −0.5, 5.5, 7.5. Step 2: The cross-products are 18.75, 6.75, 0.25, −0.25, 8.25, 18.75, summing to Σ(X<sub>i</sub> − x̄)(Y<sub>i</sub> − ȳ) = 52.5. Step 3: The squared X-deviations are 6.25, 2.25, 0.25, 0.25, 2.25, 6.25, summing to Σ(X<sub>i</sub> − x̄)² = 17.5. Step 4: b<sub>1</sub> = 52.5 ÷ 17.5 = <strong>3</strong> points per hour.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Using the same six students, compute the intercept b<sub>0</sub>, write the fitted line, and predict the score for a student who studies 7 hours.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: b<sub>0</sub> = ȳ − b<sub>1</sub>x̄ = 60.5 − 3 × 3.5 = 60.5 − 10.5 = <strong>50</strong>. Step 2: The fitted line is Ŷ = 50 + 3X. Step 3: At X = 7, Ŷ = 50 + 3 × 7 = <strong>71</strong> points. Step 4: Note 7 hours is just outside the observed range 1–6, so this is a mild extrapolation — treat it as an estimate, not a promise.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> For the same six students, compute every residual, check that they sum to zero, and compute SSE.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Fitted values are 50 + 3X = 53, 56, 59, 62, 65, 68. Step 2: Residuals e<sub>i</sub> = Y<sub>i</sub> − Ŷ<sub>i</sub> are 53 − 53 = 0, 56 − 56 = 0, 60 − 59 = 1, 60 − 62 = −2, 66 − 65 = 1, 68 − 68 = 0. Step 3: They sum to 0 + 0 + 1 − 2 + 1 + 0 = <strong>0</strong>, as OLS residuals always do. Step 4: SSE = 0² + 0² + 1² + (−2)² + 1² + 0² = 0 + 0 + 1 + 4 + 1 + 0 = <strong>6</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> For the six students, SST = 163.5 and SSE = 6. Compute SSR and R², and interpret R² in plain words.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: SSR = SST − SSE = 163.5 − 6 = <strong>157.5</strong>. Step 2: R² = SSR ÷ SST = 157.5 ÷ 163.5 = <strong>0.963</strong>. Step 3: Interpretation: study hours explain 96.3% of the variation in exam scores in this small teaching sample; 3.7% remains unexplained. Step 4: This says nothing about causation — motivated students may both study more and score higher.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A regression of house price (in $1,000s) on size (in 100s of square feet) gives Ŷ = 20 + 15X. (a) What is the predicted price of a 2,000-square-foot house? (b) What does the slope mean? (c) Is the intercept meaningful here?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: A 2,000-square-foot house has X = 20 (in 100s of sq ft), so Ŷ = 20 + 15 × 20 = 20 + 300 = <strong>320</strong>, i.e. $320,000. Step 2: The slope 15 means each extra 100 square feet is associated with $15,000 more in price, on average. Step 3: The intercept 20 means a zero-square-foot house is predicted to cost $20,000 — nonsense, because a house with no size does not exist. Step 4: Here the intercept is only an anchor for the line, not a meaningful prediction.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Two regressions both have R² = 0.80. One has n = 10 observations, the other n = 1,000. Which is more convincing, and why? What else would you want to know?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The n = 1,000 regression is far more convincing — with 10 points, an R² of 0.80 can arise by luck or from one outlier, while with 1,000 points it is a stable pattern. Step 2: R² says nothing about sample size, so it cannot be read alone. Step 3: You would also want the standard errors and t-statistics (Module 3), the residual plots (Module 5), and whether the relationship holds out of sample (Module 7). Step 4: A high R² with a tiny sample is a warning sign, not a triumph.</p>"
    }
  ],
  "quiz": [
    {
      "q": "OLS chooses the line that:",
      "choices": [
        "Passes through every data point",
        "Minimizes the sum of squared residuals",
        "Minimizes the sum of the residuals",
        "Maximizes R-squared directly"
      ],
      "answer": 1,
      "explanation": "Correct: (b). OLS minimizes Σei². (a) is impossible unless the points are exactly linear. (c) is useless — residuals sum to zero for any line through the means, so minimizing their sum does nothing. (d) OLS does not target R² directly; maximizing fit in the squared-residual sense is the criterion."
    },
    {
      "q": "A residual ei is defined as:",
      "choices": [
        "Ŷi − Yi",
        "Yi − Ŷi",
        "Yi − ȳ",
        "Ŷi − ȳ"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The residual is actual minus fitted — how far the point sits above or below the line. (a) is the negative of the residual. (c) is the total deviation of Y from its mean. (d) is the explained deviation, part of SSR."
    },
    {
      "q": "The OLS slope formula is b1 = Σ(Xi − x̄)(Yi − ȳ) ÷ Σ(Xi − x̄)². In the study-hours example (Σ cross-products 52.5, Σ squared X-deviations 17.5), b1 is:",
      "choices": [
        "0.33",
        "1.5",
        "3",
        "17.5"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 52.5 ÷ 17.5 = 3 points per hour. (a) is the reciprocal, 17.5 ÷ 52.5. (b) is 52.5 ÷ 35, using the wrong denominator. (d) is the denominator alone, not the ratio."
    },
    {
      "q": "With SST = 163.5 and SSE = 6, R² is:",
      "choices": [
        "0.037",
        "0.50",
        "0.963",
        "1.00"
      ],
      "answer": 2,
      "explanation": "Correct: (c). R² = 1 − SSE/SST = 1 − 6/163.5 = 1 − 0.0367 = 0.963. (a) is SSE/SST, the unexplained share. (b) is a guess with no basis. (d) would need SSE = 0, a perfect fit."
    },
    {
      "q": "If Ŷ = 50 + 3X (X = study hours, Y = exam points), the predicted score for 4 hours of study is:",
      "choices": [
        "50",
        "53",
        "62",
        "71"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 50 + 3 × 4 = 62. (a) is the intercept, the prediction at zero hours. (b) is the prediction at 1 hour. (d) is the prediction at 7 hours."
    },
    {
      "q": "The OLS fitted line always passes through:",
      "choices": [
        "The origin (0, 0)",
        "The point (x̄, ȳ), the means of X and Y",
        "The largest observation",
        "The first observation"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Because b0 = ȳ − b1x̄, the line goes through the means. (a) only if the intercept is zero. (c) and (d) have no special role — OLS is not anchored to any single point."
    },
    {
      "q": "R² = 0.873 in the course lab dataset means:",
      "choices": [
        "The model is 87.3% likely to be the true model",
        "Advertising explains 87.3% of the variation in sales in that sample",
        "87.3% of the predictions are exactly right",
        "The slope is 0.873"
      ],
      "answer": 1,
      "explanation": "Correct: (b). R² is the share of variation explained. (a) confuses fit with probability of truth. (c) confuses explained variation with exact predictions — residuals still exist. (d) The slope in that dataset is 2, not 0.873."
    },
    {
      "q": "Why is extrapolating Ŷ = 50 + 3X to 20 hours of study a bad idea?",
      "choices": [
        "Because the slope changes sign after 6 hours",
        "Because 20 hours is far outside the observed range and the prediction (110) exceeds the exam's maximum",
        "Because OLS cannot predict at all",
        "Because R² would become negative"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The line was fitted on 1–6 hours; 20 hours is far outside, and 50 + 60 = 110 is impossible on a 100-point exam. (a) invents a sign change — nothing in the data says that. (c) is false — OLS predicts fine inside the data range. (d) R² is a property of the fitted sample, not of a prediction."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — The Regression Model: Quick Reference</h3>\n<p><strong>Core idea:</strong> OLS picks the line that minimizes the sum of squared residuals.</p>\n<div class=\"formula\">b<sub>1</sub> = Σ(X<sub>i</sub> − x̄)(Y<sub>i</sub> − ȳ) / Σ(X<sub>i</sub> − x̄)² &nbsp;|&nbsp; b<sub>0</sub> = ȳ − b<sub>1</sub>x̄ &nbsp;|&nbsp; e<sub>i</sub> = Y<sub>i</sub> − Ŷ<sub>i</sub></div>\n<div class=\"formula\">R² = SSR / SST = 1 − SSE / SST &nbsp;|&nbsp; SST = SSR + SSE</div>\n<p><strong>Worked anchor (study hours):</strong> X = 1–6, Y = 53, 56, 60, 60, 66, 68 → Ŷ = 50 + 3X; residuals 0, 0, 1, −2, 1, 0; SSE = 6; SST = 163.5; R² = 0.963.</p>\n<p><strong>Interpretation:</strong> slope = average change in Y per one-unit rise in X; intercept = fitted Y at X = 0 (often just an anchor); R² = share of Y's variation explained.</p>\n<p><strong>Watch out:</strong> OLS residuals always sum to zero; never extrapolate far outside the observed X range; R² measures fit, not causation.</p>\n<p><strong>Self-check:</strong> Given x̄, ȳ, Σ(X<sub>i</sub> − x̄)(Y<sub>i</sub> − ȳ), and Σ(X<sub>i</sub> − x̄)², compute b<sub>1</sub> and b<sub>0</sub> without looking.</p>\n"
};
