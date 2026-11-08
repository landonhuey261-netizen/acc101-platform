// BUS 121 - Module 8: Correlation & Regression: Finding Relationships
module.exports = {
  number: 8,
  slug: "correlation-regression",
  title: "Correlation & Regression: Finding Relationships",
  estTime: "3–4 hours",
  objectives: [
    "Compute and interpret a correlation coefficient.",
    "Explain what correlation can and cannot show about causation.",
    "Fit a least-squares regression line by hand for a small data set.",
    "Use a regression line to predict, and explain why extrapolation is risky.",
    "Interpret slope, intercept, and R-squared in plain business language."
  ],
  sections: [
    {
      heading: "Correlation: How Strongly Two Things Move Together",
      html: `
<p>When two numbers move together — advertising spend and sales, price and quantity sold — the <strong>correlation coefficient (r)</strong> measures how tightly they move: from −1 (perfect negative) through 0 (no linear relationship) to +1 (perfect positive). The sign tells the direction; the size tells the strength. An r of 0.9 is a strong relationship; 0.3 is weak; 0 is none.</p>
<p>The quickest check is a scatter plot (Module 4): dots rising from bottom-left to top-right mean positive correlation; dots falling mean negative; a cloud means none. The coefficient puts a number on what the eye sees. But correlation is about a <em>linear</em> relationship — a perfect curve can have r near zero, and a single outlier can inflate or destroy a correlation. Always look at the plot, not just the number.</p>
<div class="callout"><strong>Key idea:</strong> Correlation measures the strength of a straight-line relationship. A scatter plot is the fastest honest check — the number alone can hide curves and outliers.</div>`
    },
    {
      heading: "Correlation Is Not Causation",
      html: `
<p>Ice cream sales and drownings rise together every summer. The correlation is real; the causation is not — the shared cause is hot weather. This is the most famous trap in business statistics, and it bites constantly: a correlation between a website change and sales may be caused by a holiday, a competitor's outage, or a season — not by the change.</p>
<p>Three explanations always compete for any correlation: A causes B, B causes A, or a third factor causes both. Correlation alone cannot choose among them. Choosing requires a controlled comparison — the same logic as Module 7's hypothesis test — or a mechanism you can explain. Until you have one, treat a correlation as a lead to investigate, not as a conclusion to act on.</p>`
    },
    {
      heading: "The Regression Line: Predicting With a Straight Line",
      html: `
<p><strong>Regression</strong> goes one step further than correlation: it fits the best straight line through the points and uses it to predict. The line is y = a + bx, where b is the <strong>slope</strong> (how much y changes per unit of x) and a is the <strong>intercept</strong> (the predicted y when x = 0). The line is chosen by <strong>least squares</strong>: it minimizes the sum of the squared vertical distances from the points to the line.</p>
<p><strong>Worked example:</strong> Advertising spend x (in $1,000s): 1, 2, 3, 4, 5. Sales y (in $1,000s): 3, 5, 7, 9, 11. The points lie exactly on the line y = 2x + 1: the slope is 2 (each extra $1,000 of advertising predicts $2,000 more sales) and the intercept is 1. With real data the points scatter around the line instead of sitting on it; least squares finds the line that misses them least. Here the correlation is r = 1 — a perfect line — because every point lies exactly on it.</p>
<div class="callout"><strong>Key idea:</strong> The slope is the business answer: "each extra dollar of X predicts how many dollars of Y." The intercept is often meaningless in business (advertising of $0 is not a real scenario) — report the slope first.</div>`
    },
    {
      heading: "R-Squared, Prediction, and Extrapolation",
      html: `
<p><strong>R-squared (R²)</strong> is the share of the variation in y that the line explains: R² = r² for a simple regression. In the worked example, R² = 1 — the line explains everything. A real regression might give R² = 0.64, meaning the line explains 64% of sales variation and 36% is left to other factors. High R² is good, but it never proves causation — it only measures fit.</p>
<p>Prediction is the line's job: plug in an x and read off the predicted y. For x = 6 in the worked example, predicted y = 2 × 6 + 1 = <strong>13</strong>. But <strong>extrapolation</strong> — predicting far outside the observed x-range — is risky: the straight-line relationship may bend, flatten, or break beyond the data. The line is a summary of what you observed, not a law of nature. Predict near your data; be skeptical far from it.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Correlation r runs from −1 to +1: sign = direction, size = strength of a linear relationship. Check the scatter plot first.</li>
<li>Correlation is not causation: A causes B, B causes A, or a third factor causes both — correlation cannot choose.</li>
<li>Regression line y = a + bx, fitted by least squares. Slope = predicted change in y per unit of x; intercept = predicted y at x = 0.</li>
<li>R² = the share of y's variation the line explains. Prediction is safe near the data; extrapolation far outside it is risky.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Acting on a correlation as if it were causation. A correlation is a lead — investigate the mechanism before spending money on it.</div>
<div class="callout"><strong>Common mistake:</strong> Extrapolating a regression line far beyond the observed data. The line summarizes what you saw; it does not promise the relationship holds outside that range.</div>
<p><strong>Ready-to-work link:</strong> Module 9's forecasting uses the same line-fitting idea for trend. The forecasting lab computes a regression trend on real monthly sales.</p>`
    }
  ],
  keyTerms: [
    { term: "Correlation coefficient (r)", def: "A number from −1 to +1 measuring the strength and direction of a linear relationship." },
    { term: "Positive correlation", def: "When larger values of one variable go with larger values of the other." },
    { term: "Negative correlation", def: "When larger values of one variable go with smaller values of the other." },
    { term: "Regression", def: "Fitting a line (or curve) to data to predict one variable from another." },
    { term: "Least squares", def: "The fitting rule that minimizes the sum of squared vertical distances from points to the line." },
    { term: "Slope", def: "In y = a + bx, the predicted change in y per one-unit change in x." },
    { term: "Intercept", def: "In y = a + bx, the predicted value of y when x = 0." },
    { term: "R-squared (R²)", def: "The share of the variation in y explained by the regression line." },
    { term: "Extrapolation", def: "Predicting outside the range of observed x values — risky, because the relationship may not hold there." },
    { term: "Residual", def: "The difference between an observed y and the y predicted by the line." },
    { term: "Causation", def: "One variable directly producing a change in another — which correlation alone cannot establish." },
    { term: "Confounding factor", def: "A third variable that causes both correlated variables, creating a misleading correlation." },
    { term: "Independent variable (x)", def: "The predictor variable in a regression." },
    { term: "Dependent variable (y)", def: "The outcome variable being predicted in a regression." },
    { term: "Scatter plot", def: "A plot of one dot per observation, the first check for a relationship between two numbers." }
  ],
  video: {
    title: "Linear Regression, Clearly Explained!!!",
    embedUrl: "https://www.youtube.com/embed/nk2CQITm_eo",
    note: "StatQuest explains regression with the same clarity as its hypothesis-testing video: the line, the residuals, and what 'best fit' means. Watch it, then redo this module's worked example — x = 1, 2, 3, 4, 5 and y = 3, 5, 7, 9, 11 — and confirm the line is y = 2x + 1 with r = 1.",
    more: [
      { title: "The Main Ideas of Fitting a Line to Data (The Main Ideas of Least Squares and Linear Regression.)", url: "https://www.youtube.com/watch?v=PaFPbb66DxQ" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Advertising spend x (in $1,000s): 1, 2, 3, 4, 5. Sales y (in $1,000s): 3, 5, 7, 9, 11. (a) What is the regression line? (b) What is the correlation r? (c) What is R²?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: The points lie exactly on y = 2x + 1 — slope <strong>2</strong>, intercept <strong>1</strong>. Step 2: Every point lies exactly on the line, so r = <strong>1</strong>. Step 3: R² = r² = <strong>1</strong> (100% of the variation explained).</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Using the line y = 2x + 1 from Problem 1: (a) Predict sales when advertising spend is $6,000. (b) Predict sales when spend is $0. (c) Why is the $0 prediction less useful in practice?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: x = 6 → y = 2 × 6 + 1 = <strong>13</strong> (i.e., $13,000). Step 2: x = 0 → y = <strong>1</strong> (i.e., $1,000). Step 3: The intercept is an extrapolation to zero advertising, which is outside the observed range (1 to 5) and may not reflect reality — a business with no advertising may sell nothing at all.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A regression of sales on price gives slope −4: each $1 price increase predicts $4,000 less in sales. (a) Is the correlation positive or negative? (b) If R² = 0.64, what share of sales variation is unexplained?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: A negative slope means a <strong>negative</strong> correlation. Step 2: Unexplained share = 1 − 0.64 = <strong>36%</strong> — other factors explain the rest.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A store finds r = 0.85 between the number of staff on the floor and daily sales. (a) What does the 0.85 say? (b) Give two explanations other than \"more staff causes more sales.\"</p>",
      solution: "<p><strong>Solution:</strong> Step 1: r = 0.85 is a <strong>strong positive</strong> linear relationship — busy days have more staff and more sales. Step 2: Reverse causation — busy days (high expected sales) cause the manager to schedule more staff. Step 3: A third factor — weekends and holidays cause both more staff and more sales.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A regression line fitted on advertising spends of $1,000–$5,000 predicts sales of $30,000 at a spend of $20,000. (a) Is this an interpolation or an extrapolation? (b) Why should the manager be skeptical?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: <strong>Extrapolation</strong> — $20,000 is far outside the observed range of $1,000–$5,000. Step 2: The straight-line relationship may bend or flatten at higher spends (diminishing returns), so the line's prediction beyond the data is unreliable.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Two regressions predict weekly sales. Model A has R² = 0.80; Model B has R² = 0.55. (a) Which fits the data better? (b) Does that prove Model A causes sales? Explain in one or two sentences.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <strong>Model A</strong> fits better — it explains 80% of the variation vs. 55%. Step 2: <strong>No.</strong> R² measures fit, not causation; a high R² can come from a third factor or from reverse causation, just like a high correlation.</p>"
    }
  ],
  quiz: [
    {
      q: "Advertising x: 1, 2, 3, 4, 5. Sales y: 3, 5, 7, 9, 11. The regression line is:",
      choices: ["y = x + 1", "y = 2x + 1", "y = 3x + 1", "y = 2x + 3"],
      answer: 1,
      explanation: "Correct: (b). Each x increase of 1 raises y by 2, and at x = 0, y = 1. (a) has slope 1. (c) has slope 3. (d) has intercept 3."
    },
    {
      q: "For the same data, the correlation r is:",
      choices: ["0", "0.5", "1", "−1"],
      answer: 2,
      explanation: "Correct: (c). Every point lies exactly on a rising line, a perfect positive linear relationship. (a) would mean no relationship. (b) would mean a weak one. (d) would mean a falling line."
    },
    {
      q: "For the same data, R² is:",
      choices: ["0.5", "1", "2", "0"],
      answer: 1,
      explanation: "Correct: (b). R² = r² = 1 — the line explains all the variation. (a) would be r = 0.5 squared. (c) exceeds 1, impossible for R². (d) would mean the line explains nothing."
    },
    {
      q: "Using y = 2x + 1, predicted sales at x = 6 are:",
      choices: ["11", "12", "13", "14"],
      answer: 2,
      explanation: "Correct: (c). 2 × 6 + 1 = 13. (a) is the prediction at x = 5. (b) is 2 × 6 without the intercept. (d) is 2 × 6 + 2."
    },
    {
      q: "Ice cream sales and drownings are positively correlated. The best explanation is:",
      choices: ["Ice cream causes drowning", "Drowning causes ice cream sales", "Hot weather causes both — a confounding factor", "The correlation must be a calculation error"],
      answer: 2,
      explanation: "Correct: (c). A third factor explains both. (a) and (b) mistake correlation for causation. (d) is false — the correlation is real."
    },
    {
      q: "A regression slope of −4 means:",
      choices: ["Each $1 price increase predicts $4,000 less in sales", "Each $1 price increase predicts $4,000 more in sales", "Sales are $4,000 when price is zero", "The correlation is +1"],
      answer: 0,
      explanation: "Correct: (a). A negative slope means y falls as x rises. (b) reverses the sign. (c) describes the intercept, not the slope. (d) is false — a negative slope means negative correlation."
    },
    {
      q: "Predicting sales at an advertising spend far above the observed range is:",
      choices: ["Interpolation", "Extrapolation — risky, because the relationship may not hold", "The safest kind of prediction", "Impossible to compute"],
      answer: 1,
      explanation: "Correct: (b). Outside the data, the straight-line relationship may bend or break. (a) is predicting inside the range. (c) is backwards. (d) is false — the line can always be extended, but the result is unreliable."
    },
    {
      q: "R² = 0.64 means:",
      choices: ["The correlation is 0.64", "64% of the variation in y is explained by the line", "The slope is 0.64", "64% of predictions will be exactly right"],
      answer: 1,
      explanation: "Correct: (b). R² is the explained share of variation. (a) confuses R² with r — here r = 0.8. (c) confuses R² with the slope. (d) is false — R² says nothing about exact predictions."
    }
  ],
  studyGuide: `
<h3>Module 8 — Correlation & Regression: Quick Reference</h3>
<p><strong>Correlation:</strong> r from −1 to +1. Sign = direction, size = strength of a linear relationship. Always check the scatter plot — curves and outliers can fool the number.</p>
<p><strong>Causation:</strong> Correlation cannot prove it. A causes B, B causes A, or a third factor causes both — investigate before acting.</p>
<div class="formula">Regression line: y = a + bx (least squares). Slope = predicted change in y per unit of x. R² = share of y's variation explained.</div>
<p><strong>Anchor:</strong> x = 1, 2, 3, 4, 5; y = 3, 5, 7, 9, 11 → line y = 2x + 1, r = 1, R² = 1. Prediction at x = 6: y = 13.</p>
<p><strong>Watch out:</strong> The intercept is often meaningless in business. And never extrapolate far beyond the observed x-range — the line may bend.</p>
<p><strong>Self-check:</strong> Given five paired values, sketch the scatter, guess the line, compute the slope and intercept, and state the prediction — then check against the least-squares line.</p>
`
};
