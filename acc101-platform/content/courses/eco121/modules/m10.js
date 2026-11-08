module.exports = {
  "number": 10,
  "slug": "correlation-and-simple-regression",
  "title": "Correlation & Simple Regression",
  "estTime": "3–4 hours",
  "objectives": [
    "Compute and interpret the correlation coefficient r.",
    "Fit a least-squares regression line and interpret its slope and intercept.",
    "Use R² to say how much variation the line explains.",
    "Make predictions from a regression line and know when not to extrapolate.",
    "Test whether a slope is significantly different from zero."
  ],
  "sections": [
    {
      "heading": "Correlation: How Strongly Do Two Variables Move Together?",
      "html": "<p>Eight small shops report monthly advertising spending (in $000) and monthly sales (in $000): spending 2, 3, 4, 5, 6, 7, 8, 9 against sales 14, 17, 16, 21, 23, 24, 27, 29. The two move together — bigger ad budgets go with bigger sales — and the <strong>correlation coefficient r</strong> measures how tightly: here r = <strong>0.9828</strong>. r always sits between −1 and +1: +1 is a perfect rising line, −1 a perfect falling line, and 0 means no linear relationship at all.</p><p>Correlation is symmetric — r between advertising and sales is the same as r between sales and advertising — and it has no units. But it only measures <em>linear</em> association: two variables can be strongly related in a curve and still have r near 0. And the oldest warning in statistics applies: correlation is not causation. Shops that advertise more may sell more because advertising works — or because bigger, richer shops both advertise and sell more.</p><div class=\"callout\"><strong>Key idea:</strong> r measures the strength and direction of a straight-line relationship, from −1 to +1. It says nothing about cause, and nothing about curves.</div>"
    },
    {
      "heading": "The Least-Squares Line: The Best Line Through the Points",
      "html": "<p><strong>Simple linear regression</strong> fits a line, ŷ = b₀ + b₁x, that predicts sales (y) from advertising (x). The <strong>least-squares</strong> line is the one that minimizes the sum of the squared residuals — the squared vertical gaps between the points and the line. For the shops, the slope is b₁ = <strong>2.1548</strong> and the intercept is b₀ = <strong>9.5238</strong>, so the fitted line is ŷ = 9.52 + 2.15x.</p><p>Read the slope as a rate: each extra $1,000 of advertising is associated with about <strong>$2,155</strong> more in monthly sales. The intercept, $9,524, is the predicted sales for a shop that spends nothing on advertising — a prediction inside the data's range, since spending starts at $2,000, so it is at least a small extrapolation but a plausible one. The residual for the shop that spent $4,000 and sold $16,000 is 16 − (9.52 + 2.15 × 4) = 16 − 18.14 = <strong>-2.14</strong> — it sold about $2,143 less than the line predicted.</p><div class=\"formula\">&yhat; = b&#8320; + b&#8321;x &nbsp;|&nbsp; b&#8321; = &Sigma;(x &#8722; x&#772;)(y &#8722; &#373;) &divide; &Sigma;(x &#8722; x&#772;)&sup2; &nbsp;|&nbsp; b&#8320; = &#373; &#8722; b&#8321;x&#772; &nbsp;|&nbsp; residual = y &#8722; &yhat;</div>"
    },
    {
      "heading": "R²: How Much Does the Line Explain?",
      "html": "<p><strong>R²</strong> is the fraction of the variation in y that the line explains: R² = r². Here R² = 0.9828² = <strong>0.9660</strong>, so about <strong>96.6%</strong> of the variation in sales is explained by advertising spending, and the remaining 3.4% is everything else — location, product, luck. R² is the single most-quoted number in regression, and the most misread: a high R² does not mean the model is right, and a low R² does not mean it is useless.</p><p>Is the slope real? Test H₀: β₁ = 0 (advertising does nothing) against H₁: β₁ ≠ 0. The standard error of the slope is about 0.1651, so t = 2.1548 ÷ 0.1651 = 13.05 with df = 6, and the p-value is about 0.00001 — far below 0.001. The slope is decisively significant — but remember, significance is about whether the slope is zero, not about whether advertising <em>causes</em> sales.</p><div class=\"callout\"><strong>Key idea:</strong> R² is the share of variation explained, not a grade. Report it with the slope, its standard error, and the p-value — never alone.</div>"
    },
    {
      "heading": "Predictions — and the Extrapolation Trap",
      "html": "<p>Use the line to predict: a shop spending $10,000 on advertising is predicted to sell ŷ = 9.52 + 2.15 × 10 = <strong>$31.07k</strong>, about $31,071. That is a small step past the data (spending tops out at $9,000), so it is a mild extrapolation and reasonably safe. Predicting sales for $50,000 of advertising would be reckless: the line was fit on $2,000–$9,000, and nothing guarantees the relationship stays straight at $50,000.</p><p>Before trusting any regression, check the <strong>assumptions</strong>: the relationship should look linear, the residuals should scatter randomly around zero with no pattern, their spread should be roughly constant, and they should be approximately normal. A residual plot that fans out or curves is the model telling you it is wrong — listen to it before you quote the slope.</p><div class=\"formula\">Prediction: &yhat; = b&#8320; + b&#8321;x&#8320; &nbsp;|&nbsp; Extrapolation = predicting outside the range of x in the data</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Correlation r = 0.9828 for advertising vs. sales: strong, positive, linear.</li><li>Fitted line: ŷ = 9.52 + 2.15x — each extra $1,000 of ads is associated with about $2,155 more sales.</li><li>R² = 0.9660: about 96.6% of sales variation is explained by advertising.</li><li>Slope t ≈ 13.05 (df = 6), p ≈ 0.00001 — the slope is significantly different from zero.</li><li>Prediction at $10,000 of ads: about $31,071 in sales. Never extrapolate far past the data.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Saying “advertising causes sales” from a correlation of 0.98. Regression on observational data cannot prove cause — a third variable (shop size, location, wealth) could drive both.</div><div class=\"callout\"><strong>Common mistake:</strong> Extrapolating the line far beyond the data. A line fit on $2,000–$9,000 of advertising says nothing reliable about $50,000.</div><p><strong>Ready-to-Work link:</strong> “If we raise the ad budget by $1,000, how much more will we sell?” is a regression slope. Every marketing budget, every price test, every “what drives sales?” meeting is this module.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Correlation coefficient (r)",
      "def": "A number from −1 to +1 measuring the strength and direction of a linear relationship."
    },
    {
      "term": "Simple linear regression",
      "def": "Fitting one straight line to predict y from one x variable."
    },
    {
      "term": "Least squares",
      "def": "Choosing the line that minimizes the sum of squared residuals."
    },
    {
      "term": "Slope (b₁)",
      "def": "The predicted change in y for a one-unit increase in x."
    },
    {
      "term": "Intercept (b₀)",
      "def": "The predicted y when x = 0; meaningful only if x = 0 is in or near the data."
    },
    {
      "term": "Fitted value (ŷ)",
      "def": "The value the regression line predicts for a given x."
    },
    {
      "term": "Residual",
      "def": "y − ŷ: the gap between the actual value and the line's prediction."
    },
    {
      "term": "R² (coefficient of determination)",
      "def": "The fraction of the variation in y explained by the regression; R² = r² in simple regression."
    },
    {
      "term": "Standard error of the slope",
      "def": "How far the estimated slope typically sits from the true slope; used to test the slope."
    },
    {
      "term": "Extrapolation",
      "def": "Predicting y for an x outside the range of the data — risky, because the line may not stay straight."
    },
    {
      "term": "Interpolation",
      "def": "Predicting y for an x inside the range of the data — the safe use of a regression line."
    },
    {
      "term": "Residual plot",
      "def": "A plot of residuals against x or ŷ, used to check linearity, constant spread, and outliers."
    },
    {
      "term": "Outlier (regression)",
      "def": "A point far from the line; a leverage point also has an extreme x value."
    },
    {
      "term": "Linearity assumption",
      "def": "The assumption that the true relationship between x and y is a straight line."
    },
    {
      "term": "Homoscedasticity",
      "def": "The assumption that the residual spread is roughly constant across x."
    }
  ],
  "video": {
    "title": "The Main Ideas of Fitting a Line to Data (The Main Ideas of Least Squares and Linear Regression.)",
    "embedUrl": "https://www.youtube.com/embed/PaFPbb66DxQ",
    "note": "StatQuest fits a line to data by least squares, step by step — the exact method behind this module's slope and intercept.",
    "more": [
      {
        "title": "Linear Regression, Clearly Explained!!! — StatQuest",
        "url": "https://www.youtube.com/watch?v=7ArmBVF2dCs"
      },
      {
        "title": "R-squared, Clearly Explained!!! — StatQuest",
        "url": "https://www.youtube.com/watch?v=2AQKmw14mHM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> For the eight shops, advertising (x, $000) is 2, 3, 4, 5, 6, 7, 8, 9 and sales (y, $000) are 14, 17, 16, 21, 23, 24, 27, 29. (a) The means are x̄ = 5.5 and ȳ = 21.375. Use the slope formula to find b₁. (b) Find b₀ and write the fitted line.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Σ(x − x̄)(y − ȳ) = 90.5 and Σ(x − x̄)² = 42, so b₁ = 90.5 ÷ 42 = <strong>2.1548</strong>. Step 2: b₀ = ȳ − b₁x̄ = 21.375 − 2.1548 × 5.5 = <strong>9.5238</strong>. Step 3: The fitted line is ŷ = <strong>9.52 + 2.15x</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> For the shop data, r = 0.9828. (a) Find R² and interpret it. (b) Predict sales for a shop spending $10,000 on advertising. (c) Find the residual for the shop that spent $4,000 and sold $16,000.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: R² = 0.9828² = <strong>0.9660</strong> — about 96.6% of the variation in sales is explained by advertising. Step 2: ŷ = 9.52 + 2.15 × 10 = <strong>$31.07k</strong>. Step 3: ŷ for x = 4 is 18.14, so the residual is 16 − 18.14 = <strong>-2.14</strong> (in $000).</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Five students study 2, 4, 6, 8, 10 hours and score 55, 60, 70, 75, 85. (a) Find the correlation r. (b) Find the regression line. (c) Predict the score for 7 hours of study.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: x̄ = 6, ȳ = 69. Σ(x − x̄)(y − ȳ) = 150, Σ(x − x̄)² = 40, Σ(y − ȳ)² = 570, so r = 150 ÷ √(40 × 570) = 150 ÷ 150.99 = <strong>0.9934</strong>. Step 2: b₁ = 150 ÷ 40 = <strong>3.75</strong>; b₀ = 69 − 3.75 × 6 = <strong>46.50</strong>, so ŷ = 46.50 + 3.75x. Step 3: For 7 hours, ŷ = 46.50 + 3.75 × 7 = <strong>72.75</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A regression of house prices on square footage gives ŷ = 50 + 120x (price in $000, x in 1,000 sq ft), with R² = 0.72. (a) Interpret the slope. (b) Interpret the intercept. (c) Interpret R². (d) Predict the price of a 2,000 sq ft house.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The slope 120 means each extra 1,000 sq ft is associated with <strong>$120,000</strong> more in price. Step 2: The intercept 50 means a 0 sq ft house is predicted at <strong>$50,000</strong> — meaningless on its own, since no house has 0 sq ft; it just anchors the line. Step 3: R² = 0.72 means <strong>72%</strong> of the variation in prices is explained by square footage. Step 4: For x = 2, ŷ = 50 + 120 × 2 = <strong>$290,000</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A study finds r = 0.85 between ice-cream sales and drownings. (a) What does r = 0.85 mean? (b) Does ice cream cause drowning? Explain. (c) Name a likely third variable.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: r = 0.85 means a strong positive linear association — months with more ice-cream sales also have more drownings. Step 2: <strong>No.</strong> Correlation is not causation; this is observational data. Step 3: The third variable is <strong>temperature / summer</strong>: hot months drive both ice-cream sales and swimming (and therefore drownings).</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A regression line is fit on advertising spending from $2,000 to $9,000. (a) Is predicting sales at $7,000 interpolation or extrapolation? (b) At $50,000? (c) Why is the second one risky?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) <strong>Interpolation</strong> — $7,000 is inside the data's range. Step 2: (b) <strong>Extrapolation</strong> — $50,000 is far outside it. Step 3: (c) The straight-line relationship was only checked on $2,000–$9,000; at $50,000 the effect could flatten out (diminishing returns), so the line's prediction could be wildly too high.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The correlation between advertising and sales is r = 0.9828. This means:",
      "choices": [
        "A perfect straight-line relationship",
        "A strong positive linear relationship",
        "No relationship",
        "Advertising causes sales"
      ],
      "answer": 1,
      "explanation": "Correct: (b). r = 0.9828 is close to +1: strongly positive and linear, but not perfect. (a) Perfect needs r = 1. (c) No relationship needs r ≈ 0. (d) Correlation never proves causation."
    },
    {
      "q": "The fitted line is ŷ = 9.52 + 2.15x. The slope means:",
      "choices": [
        "Sales are $2.15k on average",
        "Each extra $1,000 of advertising is associated with about $2,155 more in sales",
        "Advertising costs $2.15k",
        "Sales rise by $2.15k per shop"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The slope is the change in y per one-unit change in x. (a) confuses the slope with a mean. (c) confuses the slope with a cost. (d) The slope is per $1,000 of advertising, not per shop."
    },
    {
      "q": "R² for the shop data is 0.9660. This means:",
      "choices": [
        "98% of shops advertise",
        "About 97% of the variation in sales is explained by advertising",
        "The slope is 0.97",
        "The correlation is 0.97"
      ],
      "answer": 1,
      "explanation": "Correct: (b). R² is the share of variation in y explained by the line. (a) R² says nothing about how many shops advertise. (c) The slope is 2.15, not 0.97. (d) The correlation is 0.98; R² is its square."
    },
    {
      "q": "A residual is:",
      "choices": [
        "The predicted value ŷ",
        "The difference y − ŷ between the actual value and the prediction",
        "The slope of the line",
        "The correlation coefficient"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The residual is what the line missed. (a) is the fitted value. (c) is b₁. (d) is r."
    },
    {
      "q": "The shop that spent $4,000 and sold $16,000 has a residual of about -2.14 (in $000). This means:",
      "choices": [
        "It sold about $2,140 more than predicted",
        "It sold about $2,140 less than predicted",
        "Its advertising was $2,140",
        "The line is wrong"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The residual is negative (-2.14), so the actual sale was below the line's prediction by about $1,710. (a) would need a positive residual. (c) confuses the residual with spending. (d) One negative residual does not make the line wrong."
    },
    {
      "q": "Which value of r shows the strongest linear relationship?",
      "choices": [
        "0.5",
        "−0.9",
        "0.1",
        "0.0"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Strength is measured by |r|: 0.9 beats 0.5, 0.1, and 0. The minus sign only says the line slopes down. (a) 0.5 is moderate. (c) and (d) are weak or none."
    },
    {
      "q": "Extrapolation is risky because:",
      "choices": [
        "The slope changes sign outside the data",
        "The straight-line relationship may not hold outside the range of x in the data",
        "The intercept is wrong",
        "R² is always lower outside the data"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The line was only verified on the observed x range. (a) The slope does not change sign — the relationship itself may bend. (c) The intercept is a property of the fitted line. (d) R² is a property of the fit, not of new predictions."
    },
    {
      "q": "For the study-hours data, the regression line is ŷ = 46.50 + 3.75x. The predicted score for 7 hours is about:",
      "choices": [
        "73",
        "69",
        "85",
        "75"
      ],
      "answer": 0,
      "explanation": "Correct: (a). ŷ = 46.50 + 3.75 × 7 = 72.75. (b) 69 is the mean score. (c) 85 is the score for 10 hours. (d) 75 is the score for 8 hours."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Correlation &amp; Simple Regression: Quick Reference</h3>\n<p><strong>Correlation r:</strong> −1 to +1, strength and direction of a linear relationship. Symmetric, unitless, and never proof of cause.</p>\n<div class=\"formula\">&yhat; = b&#8320; + b&#8321;x &nbsp;|&nbsp; b&#8321; = &Sigma;(x &#8722; x&#772;)(y &#8722; &#373;) &divide; &Sigma;(x &#8722; x&#772;)&sup2; &nbsp;|&nbsp; b&#8320; = &#373; &#8722; b&#8321;x&#772; &nbsp;|&nbsp; residual = y &#8722; &yhat; &nbsp;|&nbsp; R&sup2; = r&sup2;</div>\n<p><strong>Worked anchors:</strong> Shops: r = 0.9828, line &yhat; = 9.52 + 2.15x, R&sup2; = 0.9660 (96.6% explained), prediction at $10,000 of ads ≈ $31,071. Study hours: &yhat; = 46.50 + 3.75x.</p>\n<p><strong>Watch out:</strong> Correlation ≠ causation. Never extrapolate far past the data. Always check the residual plot before trusting the line.</p>\n<p><strong>Self-check:</strong> Take any two variables from a news article, sketch the scatterplot in your head, and guess the sign and rough size of r before computing it.</p>\n"
};
