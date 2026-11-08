// BUS 121 — Spreadsheet labs.
// Each lab renders as a fill-in table: rows carry static cell HTML plus checked inputs.
// Input shape: { col, key, expected, hint } where col is the 1-based data column (label column excluded).
// Grading tolerance is 0.01, so two-decimal answers are safe.

module.exports = [
  {
    id: "business-statistics-spreadsheets",
    title: "Business Statistics in Spreadsheets",
    introHtml: "<p>A shop records six days of sales (in hundreds of dollars): <strong>10, 14, 18, 22, 26, 30</strong>. In this lab you will describe the data set the way a manager needs it described — center, spread, and relative spread — computing each statistic by hand and checking it the way a spreadsheet would: with =SUM, =AVERAGE, =MEDIAN, =VAR.S, =STDEV.S, =VAR.P, and =STDEV.P. Round answers to two decimal places where the hint says so.</p>",
    taskHtml: "<p><strong>Step 0 — Read the case.</strong> The first row below is the framing decision: before any modeling, a data set must be described. Enter <strong>1</strong>, <strong>2</strong>, or <strong>3</strong>.</p><p><strong>Worked example (different numbers, already solved):</strong> Data 4, 6, 8, 10, 12. Sum = <strong>40</strong>; mean = 40 ÷ 5 = <strong>8</strong>; median = <strong>8</strong>; range = 12 − 4 = <strong>8</strong>. Squared deviations: (4−8)² + (6−8)² + (8−8)² + (10−8)² + (12−8)² = 16 + 4 + 0 + 4 + 16 = <strong>40</strong>. Sample variance = 40 ÷ 4 = <strong>10</strong>; sample SD = √10 ≈ <strong>3.16</strong>. Population variance = 40 ÷ 5 = <strong>8</strong>; population SD = √8 ≈ <strong>2.83</strong>. CV = 3.16 ÷ 8 ≈ <strong>39.53%</strong>. Now do the same for the shop's six days.</p><ol><li>Compute the sum, mean, median, and range.</li><li>Compute the sum of squared deviations from the mean.</li><li>Compute the sample variance and sample standard deviation (divide by n − 1).</li><li>Compute the population variance and population standard deviation (divide by n).</li><li>Compute the coefficient of variation as a percent, to two decimal places.</li></ol>",
    headers: ["Statistic", "Value"],
    rows: [
      { label: "Step 0 — Framing decision: What is the first step in describing a data set? (1) Fit a regression line (2) Compute the center and spread — mean, median, range, standard deviation (3) Build a confidence interval", cells: [""], inputs: [
        { col: 1, key: "stats_frame", expected: 2, hint: "Describe before you model — center and spread come first. Enter 2." } ] },
      { label: "Sum of the six values", cells: [""], inputs: [
        { col: 1, key: "stats_sum", expected: 120, hint: "10 + 14 + 18 + 22 + 26 + 30." } ] },
      { label: "Mean", cells: [""], inputs: [
        { col: 1, key: "stats_mean", expected: 20, hint: "Sum 120 divided by 6 values." } ] },
      { label: "Median", cells: [""], inputs: [
        { col: 1, key: "stats_median", expected: 20, hint: "Six ordered values — the median is the average of the 3rd and 4th: (18 + 22) / 2." } ] },
      { label: "Range", cells: [""], inputs: [
        { col: 1, key: "stats_range", expected: 20, hint: "Maximum 30 minus minimum 10." } ] },
      { label: "Sum of squared deviations from the mean", cells: [""], inputs: [
        { col: 1, key: "stats_ss", expected: 280, hint: "Deviations from 20 are −10, −6, −2, 2, 6, 10; squares are 100, 36, 4, 4, 36, 100 — add them." } ] },
      { label: "Sample variance (divide by n − 1)", cells: [""], inputs: [
        { col: 1, key: "stats_var_s", expected: 56, hint: "Sum of squared deviations 280 divided by 5 (n − 1)." } ] },
      { label: "Sample standard deviation (2 decimals)", cells: [""], inputs: [
        { col: 1, key: "stats_sd_s", expected: 7.48, hint: "Square root of the sample variance 56: about 7.48." } ] },
      { label: "Population variance (2 decimals)", cells: [""], inputs: [
        { col: 1, key: "stats_var_p", expected: 46.67, hint: "Sum of squared deviations 280 divided by 6 (n)." } ] },
      { label: "Population standard deviation (2 decimals)", cells: [""], inputs: [
        { col: 1, key: "stats_sd_p", expected: 6.83, hint: "Square root of the population variance 46.67: about 6.83." } ] },
      { label: "Coefficient of variation (%) (2 decimals)", cells: [""], inputs: [
        { col: 1, key: "stats_cv", expected: 37.42, hint: "Sample standard deviation 7.48 divided by mean 20, as a percent: 7.48 / 20 = 0.3742." } ] }
    ],
    passing: 70,
    csvFilename: "business-statistics-workpaper.csv",
    csv: "Statistic,Value\nStep 0 - Framing decision (enter 1, 2, or 3),\nSum of the six values,\nMean,\nMedian,\nRange,\nSum of squared deviations from the mean,\nSample variance (divide by n - 1),\nSample standard deviation,\nPopulation variance,\nPopulation standard deviation,\nCoefficient of variation (%),"
  },
  {
    id: "forecasting-lab",
    title: "Forecasting Lab",
    introHtml: "<p>A shop records six months of sales: Month 1: <strong>100</strong>, Month 2: <strong>110</strong>, Month 3: <strong>105</strong>, Month 4: <strong>120</strong>, Month 5: <strong>130</strong>, Month 6: <strong>125</strong>. The owner needs a forecast for Month 7 to plan orders. In this lab you will forecast Month 7 four ways — a 3-month moving average, a weighted moving average, exponential smoothing, and a linear trend line — and measure which method was most accurate on the months you can check.</p>",
    taskHtml: "<p><strong>Step 0 — Read the case.</strong> The first row below is the framing decision: what is the shop actually asking for? Enter <strong>1</strong>, <strong>2</strong>, or <strong>3</strong>.</p><p><strong>Worked example (different numbers, already solved):</strong> Sales 80, 90, 100 over periods 1–3. 3-period moving-average forecast for period 4 = (80 + 90 + 100) ÷ 3 = <strong>90</strong>. Exponential smoothing with α = 0.5 starting at F₁ = 80: F₂ = <strong>80</strong>, F₃ = 80 + 0.5 × (90 − 80) = <strong>85</strong>, F₄ = 85 + 0.5 × (100 − 85) = <strong>92.5</strong>. Trend line: slope = <strong>10</strong>, intercept = <strong>70</strong>, forecast for period 4 = 70 + 10 × 4 = <strong>110</strong>. Now forecast Month 7 for the shop's six months.</p><ol><li>Compute the 3-month moving-average forecast for Month 7.</li><li>Compute the weighted moving-average forecast for Month 7 with weights 0.5, 0.3, 0.2 (most recent first).</li><li>Run exponential smoothing with α = 0.4, starting with F₁ = 100, through F₇.</li><li>Compute the mean absolute error (MAE) of the 3-month moving average over Months 4–6.</li><li>Fit the linear trend line (regression with time as x) and forecast Month 7.</li></ol>",
    headers: ["Forecast", "Value"],
    rows: [
      { label: "Step 0 — Framing decision: Which question is the shop asking? (1) What will next month's sales be? (2) What was last year's profit? (3) How many staff should we hire today?", cells: [""], inputs: [
        { col: 1, key: "fc_frame", expected: 1, hint: "The shop needs a Month 7 sales forecast to plan orders. Enter 1." } ] },
      { label: "3-month moving-average forecast, Month 7", cells: [""], inputs: [
        { col: 1, key: "fc_ma3", expected: 125, hint: "Average of the last three months: (120 + 130 + 125) / 3." } ] },
      { label: "Weighted moving-average forecast, Month 7 (weights 0.5 / 0.3 / 0.2)", cells: [""], inputs: [
        { col: 1, key: "fc_wma", expected: 125.5, hint: "125 × 0.5 + 130 × 0.3 + 120 × 0.2 (most recent first)." } ] },
      { label: "Exponential smoothing F₂ (α = 0.4)", cells: [""], inputs: [
        { col: 1, key: "fc_f2", expected: 100, hint: "F₂ = F₁ + 0.4 × (100 − 100) — the first actual equals the starting forecast." } ] },
      { label: "Exponential smoothing F₃ (α = 0.4)", cells: [""], inputs: [
        { col: 1, key: "fc_f3", expected: 104, hint: "F₃ = 100 + 0.4 × (110 − 100)." } ] },
      { label: "Exponential smoothing F₄ (α = 0.4)", cells: [""], inputs: [
        { col: 1, key: "fc_f4", expected: 104.4, hint: "F₄ = 104 + 0.4 × (105 − 104)." } ] },
      { label: "Exponential smoothing F₅ (α = 0.4)", cells: [""], inputs: [
        { col: 1, key: "fc_f5", expected: 110.64, hint: "F₅ = 104.4 + 0.4 × (120 − 104.4)." } ] },
      { label: "Exponential smoothing F₆ (α = 0.4)", cells: [""], inputs: [
        { col: 1, key: "fc_f6", expected: 118.38, hint: "F₆ = 110.64 + 0.4 × (130 − 110.64)." } ] },
      { label: "Exponential smoothing forecast F₇ (α = 0.4)", cells: [""], inputs: [
        { col: 1, key: "fc_f7", expected: 121.03, hint: "F₇ = 118.38 + 0.4 × (125 − 118.38), rounded to two decimals." } ] },
      { label: "MAE of the 3-month moving average, Months 4–6 (2 decimals)", cells: [""], inputs: [
        { col: 1, key: "fc_mae", expected: 13.33, hint: "Forecasts are 105, 111.67, 118.33 against actuals 120, 130, 125. Errors are 15, 18.33, 6.67 — average them." } ] },
      { label: "Trend-line slope (2 decimals)", cells: [""], inputs: [
        { col: 1, key: "fc_slope", expected: 5.71, hint: "With x̄ = 3.5, ȳ = 115, Sxy = 100, Sxx = 17.5: slope = 100 / 17.5." } ] },
      { label: "Trend-line intercept", cells: [""], inputs: [
        { col: 1, key: "fc_intercept", expected: 95, hint: "Intercept = ȳ − slope × x̄ = 115 − 5.714 × 3.5." } ] },
      { label: "Trend-line forecast, Month 7", cells: [""], inputs: [
        { col: 1, key: "fc_trend", expected: 135, hint: "Intercept 95 + slope 5.714 × 7." } ] }
    ],
    passing: 70,
    csvFilename: "forecasting-workpaper.csv",
    csv: "Forecast,Value\nStep 0 - Framing decision (enter 1, 2, or 3),\n3-month moving-average forecast Month 7,\nWeighted moving-average forecast Month 7,\nExponential smoothing F2,\nExponential smoothing F3,\nExponential smoothing F4,\nExponential smoothing F5,\nExponential smoothing F6,\nExponential smoothing forecast F7,\nMAE of the 3-month moving average Months 4-6,\nTrend-line slope,\nTrend-line intercept,\nTrend-line forecast Month 7,"
  }
];
