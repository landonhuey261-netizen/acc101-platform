// BUS 121 - Module 9: Forecasting: Trends, Seasons & Moving Averages
module.exports = {
  number: 9,
  slug: "forecasting-trends-seasons-moving-averages",
  title: "Forecasting: Trends, Seasons & Moving Averages",
  estTime: "3–4 hours",
  objectives: [
    "Compute a moving-average forecast and a weighted moving-average forecast.",
    "Apply exponential smoothing step by step with a given alpha.",
    "Fit a linear trend line and use it to forecast.",
    "Measure forecast accuracy with mean absolute error (MAE).",
    "Explain when each method fits — and when none of them does."
  ],
  sections: [
    {
      heading: "Why Forecast, and What a Forecast Is",
      html: `
<p>Every business decision about the future — how much to order, how many staff to schedule, how much cash to keep — is a forecast, whether or not anyone writes it down. Formal forecasting replaces a gut feeling with a stated method applied to past data, so the forecast can be checked, improved, and argued about. A forecast is not a promise: it is a best estimate with a stated method and a measurable error.</p>
<p>This module covers four workhorse methods. <strong>Moving averages</strong> smooth out noise by averaging the last few periods. <strong>Weighted moving averages</strong> give recent periods more weight. <strong>Exponential smoothing</strong> weights all past periods, with weights that decay exponentially. <strong>Trend lines</strong> fit a straight line to time and extend it. Each method assumes the future resembles the recent past — when that assumption breaks (a new competitor, a price change), every method fails together.</p>
<div class="callout"><strong>Key idea:</strong> A forecast is a method, not a guess. Write the method down, measure its past errors, and you can improve it — which is impossible with a gut feeling.</div>`
    },
    {
      heading: "Moving Averages: Simple and Weighted",
      html: `
<p>A <strong>3-period moving average</strong> forecasts the next period as the average of the last three actuals. It smooths out one-off spikes, which is exactly what a manager wants when ordering stock — but it lags behind a genuine trend, because it always looks backward.</p>
<p><strong>Worked example:</strong> Monthly sales: 120, 140, 130, 150, 160. The 3-period moving-average forecast for period 6 is (130 + 150 + 160) ÷ 3 = 440 ÷ 3 = <strong>146.67</strong>. A <strong>weighted moving average</strong> gives the most recent period the most weight — with weights 0.5, 0.3, 0.2 (most recent first): 160 × 0.5 + 150 × 0.3 + 130 × 0.2 = 80 + 45 + 26 = <strong>151.00</strong>. The weighted forecast is higher because it leans on the most recent (and highest) months. The weights are a judgment call: heavier recent weights react faster to change but also chase noise.</p>`
    },
    {
      heading: "Exponential Smoothing",
      html: `
<p><strong>Exponential smoothing</strong> updates the forecast each period with one simple rule: new forecast = old forecast + α × (actual − old forecast), where α (alpha) is between 0 and 1. A small α (0.1) barely reacts to new data — smooth but slow. A large α (0.5) reacts fast — but chases noise.</p>
<p><strong>Worked example:</strong> Sales: 120, 140, 130, 150, 160. Start with F₁ = 120 and α = 0.3. F₂ = 120 + 0.3 × (120 − 120) = <strong>120</strong>. F₃ = 120 + 0.3 × (140 − 120) = 120 + 6 = <strong>126</strong>. F₄ = 126 + 0.3 × (130 − 126) = 126 + 1.2 = <strong>127.2</strong>. F₅ = 127.2 + 0.3 × (150 − 127.2) = 127.2 + 6.84 = <strong>134.04</strong>. F₆ = 134.04 + 0.3 × (160 − 134.04) = 134.04 + 7.788 = <strong>141.83</strong>. The forecast trails the rising sales — smoothing always lags a trend, and the lag grows as α shrinks. That lag is why trend methods exist.</p>
<div class="callout"><strong>Key idea:</strong> Exponential smoothing is a weighted average of all past data, with weights that shrink by (1 − α) each period back. A bigger α means the recent past matters more.</div>`
    },
    {
      heading: "Trend Lines and Measuring Accuracy",
      html: `
<p>When data trend steadily, a <strong>linear trend line</strong> — the regression line from Module 8, with time as x — captures what moving averages miss. For the same sales (120, 140, 130, 150, 160 over periods 1–5): x̄ = 3, ȳ = 140, Sxy = 90, Sxx = 10, so the slope is 90 ÷ 10 = <strong>9</strong> and the intercept is 140 − 9 × 3 = <strong>113</strong>. The trend forecast for period 6 is 113 + 9 × 6 = <strong>167</strong> — higher than the moving-average forecasts, because the trend line projects the upward slope instead of averaging the past.</p>
<p>Which method is best? Measure it. <strong>Mean absolute error (MAE)</strong> is the average of the absolute forecast errors. Using the 3-period moving average on this series: the forecasts for periods 4 and 5 are 130 and 140, against actuals of 150 and 160 — the errors are 20 and 20, so MAE = 20. Compare methods on the same periods, pick the smallest MAE, and re-check as new data arrive. A forecast method is only as good as its last few errors.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Moving average: average of the last n actuals. Weighted: recent periods get more weight. Both smooth noise and lag trends.</li>
<li>Exponential smoothing: Fₜ₊₁ = Fₜ + α × (Aₜ − Fₜ). Small α = smooth and slow; large α = fast and noisy.</li>
<li>Trend line: regression with time as x; it projects the slope instead of averaging the past.</li>
<li>MAE = average absolute forecast error. Compare methods on the same periods and pick the smallest MAE.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Using a moving average on trending data and wondering why the forecast is always behind. A moving average averages the past; a trend line projects the slope. Use the tool that matches the pattern.</div>
<div class="callout"><strong>Common mistake:</strong> Treating a forecast as a promise. A forecast is a best estimate with a measurable error — always report the MAE alongside it.</div>
<p><strong>Ready-to-work link:</strong> The forecasting lab applies all four methods to six months of sales and compares their MAE. If you can do the five-month example by hand, the lab is the same arithmetic with a spreadsheet.</p>`
    }
  ],
  keyTerms: [
    { term: "Forecast", def: "A best estimate of a future value, produced by a stated method applied to past data." },
    { term: "Moving average", def: "A forecast equal to the average of the last n actual values." },
    { term: "Weighted moving average", def: "A moving average that gives more weight to more recent periods." },
    { term: "Exponential smoothing", def: "A forecast updated as Fₜ₊₁ = Fₜ + α × (Aₜ − Fₜ), weighting all past data with decaying weights." },
    { term: "Alpha (α)", def: "The smoothing constant in exponential smoothing, between 0 and 1; larger α reacts faster to new data." },
    { term: "Trend line", def: "A regression line fitted to time, used to project a steady trend forward." },
    { term: "Seasonality", def: "A repeating pattern within a year — holiday peaks, summer slumps — that must be separated from trend." },
    { term: "Mean absolute error (MAE)", def: "The average of the absolute forecast errors; the standard way to compare forecast methods." },
    { term: "Forecast error", def: "Actual value minus forecast value for a period." },
    { term: "Lag", def: "How far a forecast trails a genuine trend; moving averages and smoothing always lag." },
    { term: "Naive forecast", def: "The simplest forecast: next period equals this period's actual value." },
    { term: "Time series", def: "Data recorded in time order — the raw material for forecasting." },
    { term: "Extrapolation", def: "Projecting a fitted pattern beyond the observed data; the trend line's job, and its risk." },
    { term: "Smoothing", def: "Averaging away short-term noise to reveal the underlying pattern." }
  ],
  video: {
    title: "Excel Forecasting: Single Exponential Smoothing & Weighted Moving Average Time Series Forecasting",
    embedUrl: "https://www.youtube.com/embed/IjETktmL4Kg",
    note: "Matt Macarty works through single exponential smoothing and weighted moving averages in Excel — exactly the two methods this module teaches, shown in the spreadsheet you will use in the lab. Watch it, then check the module's worked example: with α = 0.3 and sales 120, 140, 130, 150, 160, the forecast for period 6 is 141.83.",
    more: [
      { title: "IS 335 Week 9 Beat the Naive Forecast: Moving Average vs Exponential Smoothing", url: "https://www.youtube.com/watch?v=kLAAhQlXXC8" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Monthly sales: 120, 140, 130, 150, 160. (a) What is the 3-period moving-average forecast for period 6? (b) What is the weighted moving-average forecast for period 6 with weights 0.5, 0.3, 0.2 (most recent first)?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: 3-period MA = (130 + 150 + 160) ÷ 3 = 440 ÷ 3 = <strong>146.67</strong>. Step 2: Weighted MA = 160 × 0.5 + 150 × 0.3 + 130 × 0.2 = 80 + 45 + 26 = <strong>151.00</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Using the same sales (120, 140, 130, 150, 160), apply exponential smoothing with α = 0.3, starting with F₁ = 120. Compute F₂, F₃, F₄, F₅, and F₆.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: F₂ = 120 + 0.3 × (120 − 120) = <strong>120</strong>. Step 2: F₃ = 120 + 0.3 × (140 − 120) = <strong>126</strong>. Step 3: F₄ = 126 + 0.3 × (130 − 126) = <strong>127.2</strong>. Step 4: F₅ = 127.2 + 0.3 × (150 − 127.2) = <strong>134.04</strong>. Step 5: F₆ = 134.04 + 0.3 × (160 − 134.04) = <strong>141.83</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Using the same sales over periods 1–5, fit a linear trend line (regression with time as x). (a) What are the slope and intercept? (b) What is the trend forecast for period 6?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: x̄ = 3, ȳ = 140, Sxy = 90, Sxx = 10, so slope = 90 ÷ 10 = <strong>9</strong>. Step 2: Intercept = 140 − 9 × 3 = <strong>113</strong>. Step 3: Forecast for period 6 = 113 + 9 × 6 = <strong>167</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A 3-period moving average gives forecasts of 130 and 140 for periods 4 and 5, while actual sales are 150 and 160. (a) What are the two forecast errors? (b) What is the MAE?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Errors = |150 − 130| = <strong>20</strong> and |160 − 140| = <strong>20</strong>. Step 2: MAE = (20 + 20) ÷ 2 = <strong>20</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Two methods forecast the same four periods. Method A has absolute errors 5, 8, 3, 4. Method B has absolute errors 12, 2, 6, 4. (a) What is each method's MAE? (b) Which method would you choose?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: MAE(A) = (5 + 8 + 3 + 4) ÷ 4 = 20 ÷ 4 = <strong>5</strong>. Step 2: MAE(B) = (12 + 2 + 6 + 4) ÷ 4 = 24 ÷ 4 = <strong>6</strong>. Step 3: Choose <strong>Method A</strong> — the smaller MAE means smaller average errors.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A retailer forecasts December sales by averaging last December, this November, and this October. Explain in two or three sentences what is wrong with that forecast.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: December is a seasonal peak — averaging it with October and November mixes a seasonal high with ordinary months, so the average understates December. Step 2: The method ignores seasonality entirely. Step 3: A better forecast uses last December (and the Decembers before it) as the seasonal base, then adjusts for trend.</p>"
    }
  ],
  quiz: [
    {
      q: "Sales: 120, 140, 130, 150, 160. The 3-period moving-average forecast for period 6 is:",
      choices: ["140", "143.33", "146.67", "150"],
      answer: 2,
      explanation: "Correct: (c). (130 + 150 + 160) ÷ 3 = 146.67. (a) is the average of the last two. (b) is (140 + 150 + 140) ÷ 3 — wrong periods. (d) is the most recent actual."
    },
    {
      q: "With weights 0.5, 0.3, 0.2 (most recent first), the weighted moving-average forecast for period 6 is:",
      choices: ["146.67", "151.00", "140.00", "160.00"],
      answer: 1,
      explanation: "Correct: (b). 160 × 0.5 + 150 × 0.3 + 130 × 0.2 = 80 + 45 + 26 = 151. (a) is the unweighted average. (c) is the middle value. (d) is the most recent actual."
    },
    {
      q: "Exponential smoothing with α = 0.3, F₁ = 120, actuals 120, 140: F₃ is:",
      choices: ["120", "126", "140", "127.2"],
      answer: 1,
      explanation: "Correct: (b). F₂ = 120, then F₃ = 120 + 0.3 × (140 − 120) = 126. (a) is F₂. (c) is the actual for period 2. (d) is F₄."
    },
    {
      q: "In exponential smoothing, a larger α means the forecast:",
      choices: ["Reacts more slowly to new data", "Reacts faster to new data but chases noise", "Ignores all past data", "Always has a smaller MAE"],
      answer: 1,
      explanation: "Correct: (b). Larger α gives the latest actual more weight. (a) describes a smaller α. (c) is false — smoothing always uses past forecasts. (d) is false — α must be chosen by testing."
    },
    {
      q: "Sales over periods 1–5: 120, 140, 130, 150, 160. The trend line's slope is:",
      choices: ["5", "9", "113", "140"],
      answer: 1,
      explanation: "Correct: (b). Sxy = 90, Sxx = 10, so slope = 90 ÷ 10 = 9. (a) is roughly half the slope. (c) is the intercept. (d) is the mean of y."
    },
    {
      q: "The trend forecast for period 6 is:",
      choices: ["146.67", "141.83", "167", "160"],
      answer: 2,
      explanation: "Correct: (c). 113 + 9 × 6 = 167. (a) is the 3-period moving average. (b) is the exponential smoothing forecast. (d) is the last actual."
    },
    {
      q: "Forecasts 130 and 140 against actuals 150 and 160. The MAE is:",
      choices: ["10", "20", "40", "30"],
      answer: 1,
      explanation: "Correct: (b). Errors are 20 and 20; MAE = 20. (a) is half the error. (c) is the sum of errors. (d) is the average of forecast and actual."
    },
    {
      q: "The main reason a moving average lags behind a genuine trend is:",
      choices: ["It uses only the most recent period", "It averages the past, so it always looks backward", "It uses too much data", "It ignores seasonality"],
      answer: 1,
      explanation: "Correct: (b). An average of past values cannot lead a rising series. (a) describes the naive forecast. (c) is false. (d) is a separate issue."
    }
  ],
  studyGuide: `
<h3>Module 9 — Forecasting: Quick Reference</h3>
<p><strong>Moving average:</strong> Average of the last n actuals. Weighted: recent periods get more weight.</p>
<div class="formula">Exponential smoothing: Fₜ₊₁ = Fₜ + α × (Aₜ − Fₜ). Trend line: regression with time as x.</div>
<p><strong>Anchor (sales 120, 140, 130, 150, 160):</strong> 3-period MA forecast for period 6 = 146.67. Weighted MA (0.5/0.3/0.2) = 151.00. Exponential smoothing, α = 0.3, F₁ = 120 → F₆ = 141.83. Trend line: slope 9, intercept 113, forecast for period 6 = 167.</p>
<p><strong>Accuracy:</strong> MAE = average absolute forecast error. Compare methods on the same periods; pick the smallest MAE.</p>
<p><strong>Watch out:</strong> Moving averages and smoothing lag trends — use a trend line for trending data. And never mix seasonal peaks with ordinary months in one average.</p>
<p><strong>Self-check:</strong> Given five monthly values, compute the 3-period MA forecast, a weighted MA, the exponential smoothing chain with α = 0.3, and the trend forecast — then rank the methods by MAE.</p>
`
};
