// BUS 121 - Module 12: Course Review: Data-Driven Decisions
module.exports = {
  number: 12,
  slug: "course-review-data-driven-decisions",
  title: "Course Review: Data-Driven Decisions",
  estTime: "3–4 hours",
  objectives: [
    "Recompute the course's anchor examples: mean, spread, probability, and intervals.",
    "Run a hypothesis test and a regression from scratch on small data.",
    "Produce a forecast by three methods and compare their accuracy.",
    "Describe a data set and defend a recommendation in one page.",
    "Name the statistical habit that matters most for each business decision."
  ],
  sections: [
    {
      heading: "The Toolkit, End to End",
      html: `
<p>This course built one toolkit in twelve steps. It starts with <strong>business math</strong> (Module 1): percent change, markup vs. margin, discounts, growth rates — the numbers every manager computes weekly. It continues with <strong>spreadsheets</strong> (Module 2): the tool that does the arithmetic, so your time goes to thinking instead of adding. Then <strong>describing data</strong> (Modules 3–4): center, spread, and charts — how to summarize a data set honestly and show it so a manager can read it in thirty seconds.</p>
<p>Then the inference half: <strong>probability</strong> (Module 5), <strong>sampling and estimation</strong> (Module 6), and <strong>hypothesis testing</strong> (Module 7) — the machinery for deciding whether a difference is real. Then the modeling half: <strong>correlation and regression</strong> (Module 8), <strong>forecasting</strong> (Module 9), <strong>index numbers</strong> (Module 10), and <strong>statistical quality</strong> (Module 11). Each module's anchor example is a tool you can reuse; the review below recomputes the most important ones.</p>
<div class="callout"><strong>Key idea:</strong> The toolkit is a chain: math → spreadsheet → description → inference → modeling. Skipping a link weakens everything after it — a regression on data you never described is a guess with a formula.</div>`
    },
    {
      heading: "Anchor Recomputation: Describing and Estimating",
      html: `
<p><strong>Describing data (Module 3):</strong> 12, 15, 18, 20, 22, 25, 28. Sum 140, mean 20, median 20, no mode, range 16. Squared deviations sum 186; population variance 26.57 (SD 5.15); sample variance 31.00 (SD 5.57). Adding a $120 day moves the mean to 32.5 but the median only to 21 — headline the median on skewed data.</p>
<p><strong>Sampling (Module 6):</strong> Population mean 50, σ = 10. At n = 25, SE = 2; at n = 100, SE = 1. A sample mean of 52 with n = 25 gives a 95% interval of 52 ± 1.96 × 2 = <strong>48.08 to 55.92</strong>. Quadrupling the sample halves the error — and no interval can fix a biased sample.</p>
<p><strong>Probability (Module 5):</strong> P(A) = 0.60, P(B) = 0.50, P(both) = 0.30 → P(at least one) = 0.80. A project with a 70% chance of +$50,000 and a 30% chance of −$10,000 has expected value <strong>$32,000</strong> — higher than a safe $25,000, but with risk the safe option does not have.</p>`
    },
    {
      heading: "Anchor Recomputation: Testing, Modeling, Forecasting",
      html: `
<p><strong>Hypothesis testing (Module 7):</strong> Sample mean 105, claimed mean 100, σ = 15, n = 36 → SE = 2.5, z = 2.0, two-sided p ≈ 0.0455 → reject at 0.05. With n = 144, the same $5 gap gives z = 4.0. Remember: significance is not importance — a $0.30 difference can be significant with 100,000 orders and still not matter.</p>
<p><strong>Regression (Module 8):</strong> x = 1, 2, 3, 4, 5; y = 3, 5, 7, 9, 11 → line y = 2x + 1, r = 1, R² = 1. Prediction at x = 6 is 13. Correlation is not causation — check the mechanism before acting.</p>
<p><strong>Forecasting (Module 9):</strong> Sales 120, 140, 130, 150, 160. 3-period moving average for period 6: <strong>146.67</strong>. Weighted (0.5/0.3/0.2): <strong>151.00</strong>. Exponential smoothing, α = 0.3: F₆ = <strong>141.83</strong>. Trend line (slope 9, intercept 113): <strong>167</strong>. The trend forecast is highest because it projects the slope; the smoothing forecast is lowest because it lags. Compare by MAE and re-check as data arrive.</p>
<p><strong>Index numbers (Module 10):</strong> Basket $400 in 2020, $480 in 2026 → index 120, inflation 20%. A $25 wage in 2026 is $20.83 in 2020 dollars. <strong>Quality (Module 11):</strong> Mean 50, σ = 2 → UCL 56, LCL 44. Specs 44–56 → Cp = 1.0; mean 51 → Cpk = 0.83. Center the process to fix it.</p>`
    },
    {
      heading: "From Numbers to a Decision",
      html: `
<p>The final skill is not a formula — it is the habit of turning numbers into a decision and stating it plainly. The pattern is the same in every module: state the question in one sentence, choose the tool that answers it, compute with the data you have, report the result with its uncertainty, and say what you recommend and what would change your mind. A one-page recommendation that names the method, the number, the uncertainty, and the next step is worth more than a twenty-page report that hides them.</p>
<p>Three questions to ask before any recommendation: Did I describe the data before modeling it? Is the difference real, or could it be chance? And what would make me wrong — a biased sample, a confounding factor, an extrapolation? If you can answer those three, the numbers will usually take care of themselves.</p>
<div class="callout"><strong>Key idea:</strong> Statistics does not make decisions; it makes the grounds for a decision visible. The manager still decides — but now the decision is written down, checkable, and improvable.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Describe before you model: mean, median, spread, chart — then inference, then prediction.</li>
<li>Every estimate carries uncertainty: report the interval or the p-value, not just the point.</li>
<li>Correlation is not causation; extrapolation is risky; a biased sample cannot be fixed by arithmetic.</li>
<li>A forecast is a method with a measurable error — compare methods by MAE and re-check them.</li>
<li>The final habit: state the question, name the tool, show the number with its uncertainty, and say what would change your mind.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Reporting a mean without a median on skewed data, a p-value without an effect size, a forecast without its MAE, or a correlation as if it were a cause. Each one hides exactly the information a manager needs.</div>
<p><strong>Ready-to-work link:</strong> The final exam covers all twelve modules. The statistics lab and forecasting lab are the practical versions of this review — if you can recompute every anchor on this page by hand, you are ready.</p>`
    }
  ],
  keyTerms: [
    { term: "Data-driven decision", def: "A decision whose grounds — the data, the method, and the uncertainty — are stated and checkable." },
    { term: "Mean", def: "The arithmetic average: sum ÷ n. Anchor data: 20." },
    { term: "Median", def: "The middle ordered value; resists outliers. Anchor data: 20 (21 with the $120 day)." },
    { term: "Standard deviation", def: "The typical distance of a value from the mean. Anchor sample SD: 5.57." },
    { term: "Standard error", def: "σ ÷ √n. Anchor: 2 at n = 25 with σ = 10." },
    { term: "Confidence interval", def: "Estimate ± margin of error. Anchor: 48.08 to 55.92." },
    { term: "p-value", def: "The probability of data at least this extreme if the null is true. Anchor: 0.0455." },
    { term: "Regression line", def: "y = a + bx, fitted by least squares. Anchor: y = 2x + 1." },
    { term: "R-squared", def: "The share of y's variation the line explains. Anchor: 1." },
    { term: "Moving average", def: "A forecast averaging the last n actuals. Anchor: 146.67." },
    { term: "Exponential smoothing", def: "Fₜ₊₁ = Fₜ + α × (Aₜ − Fₜ). Anchor: F₆ = 141.83 at α = 0.3." },
    { term: "Price index", def: "A fixed-basket cost measure, base year = 100. Anchor: 120." },
    { term: "Control chart", def: "A time-ordered plot with mean ± 3σ limits. Anchor: UCL 56, LCL 44." },
    { term: "Cpk", def: "Process capability accounting for centering. Anchor: 0.83 at mean 51, specs 44–56." },
    { term: "Effect size", def: "How large a difference is, in original units — separate from its p-value." }
  ],
  video: {
    title: "Statistics: The average | Descriptive statistics | Probability and Statistics | Khan Academy",
    embedUrl: "https://www.youtube.com/embed/uhxtUt_-GyM",
    note: "Khan Academy returns to the beginning — what an average is and what it hides — which is the right place to end a course on describing data. Watch it, then recompute the anchor data set (12, 15, 18, 20, 22, 25, 28) from memory: mean 20, median 20, no mode, range 16, sample SD about 5.57.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Data: 12, 15, 18, 20, 22, 25, 28. (a) Mean, median, mode, range. (b) Sample variance and sample standard deviation.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Sum = 140; mean = <strong>20</strong>; median = <strong>20</strong>; no mode; range = 28 − 12 = <strong>16</strong>. Step 2: Squared deviations sum 186; sample variance = 186 ÷ 6 = <strong>31.00</strong>; sample SD = √31 ≈ <strong>5.57</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Population mean 50, σ = 10. A sample of 25 has mean 52. (a) What is the standard error? (b) What is the 95% confidence interval? (c) What is the interval if n = 100 instead?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: SE = 10 ÷ 5 = <strong>2</strong>. Step 2: Interval = 52 ± 1.96 × 2 = <strong>48.08 to 55.92</strong>. Step 3: At n = 100, SE = 1, so the interval is 52 ± 1.96 = <strong>50.04 to 53.96</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Sample mean 105, claimed mean 100, σ = 15, n = 36. (a) z-statistic? (b) Decision at 0.05, given p ≈ 0.0455? (c) What is z if n = 144?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: SE = 15 ÷ 6 = 2.5; z = (105 − 100) ÷ 2.5 = <strong>2.0</strong>. Step 2: p = 0.0455 &lt; 0.05, so <strong>reject the null</strong>. Step 3: At n = 144, SE = 1.25, z = 5 ÷ 1.25 = <strong>4.0</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> x = 1, 2, 3, 4, 5; y = 3, 5, 7, 9, 11. (a) Regression line? (b) r and R²? (c) Prediction at x = 6?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Line is y = <strong>2x + 1</strong>. Step 2: r = <strong>1</strong>, R² = <strong>1</strong> — every point lies on the line. Step 3: At x = 6, y = 2 × 6 + 1 = <strong>13</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Sales: 120, 140, 130, 150, 160. (a) 3-period moving-average forecast for period 6? (b) Exponential smoothing forecast F₆ with α = 0.3, F₁ = 120? (c) Trend-line forecast for period 6 (slope 9, intercept 113)?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: MA = (130 + 150 + 160) ÷ 3 = <strong>146.67</strong>. Step 2: F₂ = 120, F₃ = 126, F₄ = 127.2, F₅ = 134.04, F₆ = <strong>141.83</strong>. Step 3: Trend = 113 + 9 × 6 = <strong>167</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A basket costs $400 in 2020 and $480 in 2026; a filling process has mean 50, σ = 2, specs 44–56. (a) Index and inflation? (b) A $25 wage in 2026 in 2020 dollars? (c) UCL, LCL, Cp, and Cpk at mean 51?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Index = 480 ÷ 400 × 100 = <strong>120</strong>; inflation <strong>20%</strong>. Step 2: Real wage = 25 ÷ 1.20 = <strong>$20.83</strong>. Step 3: UCL = 50 + 6 = <strong>56</strong>; LCL = 50 − 6 = <strong>44</strong>; Cp = 12 ÷ 12 = <strong>1.0</strong>; Cpk = min(5 ÷ 6, 7 ÷ 6) = <strong>0.83</strong>.</p>"
    }
  ],
  quiz: [
    {
      q: "Data 12, 15, 18, 20, 22, 25, 28. The mean and median are:",
      choices: ["20 and 20", "20 and 21", "21 and 20", "18 and 20"],
      answer: 0,
      explanation: "Correct: (a). Sum 140 ÷ 7 = 20; the 4th ordered value is 20. (b) is the median after adding the $120 day. (c) reverses them. (d) uses the wrong middle value."
    },
    {
      q: "The sample standard deviation of that data is about:",
      choices: ["5.15", "5.57", "26.57", "31.00"],
      answer: 1,
      explanation: "Correct: (b). Squared deviations sum 186; 186 ÷ 6 = 31; √31 ≈ 5.57. (a) is the population SD. (c) and (d) are variances."
    },
    {
      q: "Population mean 50, σ = 10, sample mean 52, n = 25. The 95% confidence interval is:",
      choices: ["50.04 to 53.96", "48.08 to 55.92", "42 to 62", "50 to 54"],
      answer: 1,
      explanation: "Correct: (b). SE = 2, margin = 3.92. (a) is the n = 100 interval. (c) uses σ instead of SE. (d) is a guess with no basis."
    },
    {
      q: "Sample mean 105, claimed 100, σ = 15, n = 36. The z-statistic is:",
      choices: ["1.0", "2.0", "2.5", "4.0"],
      answer: 1,
      explanation: "Correct: (b). SE = 2.5; z = 5 ÷ 2.5 = 2.0. (a) is half of z. (c) is the SE. (d) is z at n = 144."
    },
    {
      q: "x = 1, 2, 3, 4, 5; y = 3, 5, 7, 9, 11. The regression line is:",
      choices: ["y = x + 1", "y = 2x + 1", "y = 3x − 1", "y = 2x + 3"],
      answer: 1,
      explanation: "Correct: (b). Slope 2, intercept 1. (a) has slope 1. (c) has slope 3. (d) has intercept 3."
    },
    {
      q: "Sales 120, 140, 130, 150, 160. The trend-line forecast for period 6 is:",
      choices: ["141.83", "146.67", "167", "151.00"],
      answer: 2,
      explanation: "Correct: (c). 113 + 9 × 6 = 167. (a) is exponential smoothing. (b) is the moving average. (d) is the weighted moving average."
    },
    {
      q: "A basket costs $400 in 2020 and $480 in 2026. Inflation is:",
      choices: ["10%", "20%", "120%", "80%"],
      answer: 1,
      explanation: "Correct: (b). Index 120 means 20% above base. (a) is half. (c) is the index. (d) is 100 − 20."
    },
    {
      q: "A process has mean 50, σ = 2, specs 44–56, and its mean is 51. Cpk is:",
      choices: ["1.0", "0.83", "1.33", "0.67"],
      answer: 1,
      explanation: "Correct: (b). min((56 − 51) ÷ 6, (51 − 44) ÷ 6) = min(0.83, 1.17) = 0.83. (a) is Cp. (c) would need σ = 1.5. (d) is Cp with σ = 3."
    }
  ],
  studyGuide: `
<h3>Module 12 — Course Review: Data-Driven Decisions: Quick Reference</h3>
<p><strong>The chain:</strong> Math → spreadsheets → describing data → inference → modeling. Describe before you model; report uncertainty with every estimate.</p>
<p><strong>Anchor recomputation — describing & estimating:</strong> 12, 15, 18, 20, 22, 25, 28 → mean 20, median 20, no mode, range 16, sample variance 31.00, sample SD 5.57. Population mean 50, σ = 10, n = 25 → SE 2, 95% interval 48.08 to 55.92.</p>
<p><strong>Anchor recomputation — testing & modeling:</strong> Sample mean 105 vs. 100, σ = 15, n = 36 → z = 2.0, p ≈ 0.0455, reject at 0.05. Regression y = 2x + 1, r = 1, R² = 1; prediction at x = 6 is 13.</p>
<p><strong>Anchor recomputation — forecasting & quality:</strong> Sales 120, 140, 130, 150, 160 → MA 146.67, weighted MA 151.00, smoothing F₆ 141.83, trend 167. Basket $400 → $480: index 120, inflation 20%. Process mean 50, σ = 2, specs 44–56: UCL 56, LCL 44, Cp 1.0, Cpk 0.83 at mean 51.</p>
<p><strong>Watch out:</strong> Mean without median on skewed data; p-value without effect size; forecast without MAE; correlation as causation; extrapolation far from the data.</p>
<p><strong>Self-check:</strong> Recompute every anchor on this page from the raw numbers, by hand, with no notes. If you can, you are ready for the final exam.</p>
`
};
