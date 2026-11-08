// mgt201 - Module 8: Forecasting Demand for Operations
module.exports = {
  "number": 8,
  "slug": "forecasting-demand-for-operations",
  "title": "Forecasting Demand for Operations",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why operations needs a forecast and what a forecast can and cannot do.",
    "Compute a naive forecast, a moving average, and a weighted moving average.",
    "Compute an exponential smoothing forecast and explain the role of alpha.",
    "Measure forecast error with MAD and MAPE.",
    "Explain the difference between a forecast and a plan, and between a forecast and a target."
  ],
  "sections": [
    {
      "heading": "Why Forecast, and What a Forecast Is Not",
      "html": "\n<p>Every operations decision — how much to make, how many staff to schedule, how much stock to hold — is a bet on future demand. A <strong>forecast</strong> is the best estimate of that demand, built from past data and judgment. It drives the production plan, the inventory policy, and the capacity decision; without it, the business is guessing in the dark.</p>\n<p>Three distinctions keep forecasts honest. First, a forecast is not a plan: the forecast says what demand will probably be, and the plan says what the business will do about it. Second, a forecast is not a target: a sales target is what the business wants, and a forecast is what it expects — confusing the two makes the forecast a wish. Third, forecasts are always wrong. The job is not to be right, but to be close enough, and to know how wrong you are — which is why every forecast needs an error measure.</p>\n<p>Forecasts come in three horizons. <strong>Short-term</strong> (days to months) schedules staff and orders stock. <strong>Medium-term</strong> (months to a year) plans production and capacity. <strong>Long-term</strong> (years) decides new facilities and products. This module covers the short-term quantitative methods; the judgment that surrounds them — a promotion, a new competitor, a season — is what makes forecasting a skill rather than a formula.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A forecast is an estimate, not a plan and not a target. Forecasts are always wrong — the job is to be close enough and to know how wrong you are.</div>"
    },
    {
      "heading": "Moving Averages: Smoothing the Past",
      "html": "\n<p>The simplest forecast is the <strong>naive forecast</strong>: next period will be the same as this period. It is the baseline every other method must beat, and for a stable product it is surprisingly hard to beat. When demand wobbles, averaging smooths the noise.</p>\n<p>A <strong>moving average</strong> averages the last n periods. <strong>Worked example.</strong> Actual demand for the last three months was 120, 140, and 130 units. Step 1: the 3-period moving average forecast for next month = (120 + 140 + 130) ÷ 3 = 390 ÷ 3 = <strong>130 units</strong>. Step 2: when the next actual arrives, the oldest period drops out and the window moves on — which is why it is called a moving average.</p>\n<p>A <strong>weighted moving average</strong> gives more weight to recent periods, because the most recent demand is usually the most relevant. <strong>Worked example.</strong> Using weights 0.5, 0.3, and 0.2 with the most recent period first: forecast = (0.5 × 130) + (0.3 × 140) + (0.2 × 120) = 65 + 42 + 24 = <strong>131 units</strong>. The weights must add to 1.00 — if they do not, the forecast is scaled wrong.</p>\n<div class=\"formula\">Moving average = (Sum of last n periods) ÷ n &nbsp;|&nbsp; Weighted moving average = Σ(weight × demand), weights adding to 1.00</div>"
    },
    {
      "heading": "Exponential Smoothing: One Number, One Weight",
      "html": "\n<p><strong>Exponential smoothing</strong> is the workhorse of short-term forecasting. Its formula is: new forecast = old forecast + α × (actual − old forecast), where <strong>α (alpha)</strong> is the smoothing constant between 0 and 1. It needs only the last forecast and the last actual — no long history — which is why it is built into almost every inventory system.</p>\n<p><strong>Worked example.</strong> Last month's forecast was 100 units, actual demand was 120, and α = 0.3. Step 1: the error was 120 − 100 = 20. Step 2: new forecast = 100 + (0.3 × 20) = 100 + 6 = <strong>106 units</strong>. Only 30% of the error is carried into the forecast, so the forecast moves toward the actual but does not chase it.</p>\n<p>Alpha sets the responsiveness. A <strong>high alpha</strong> (near 1) reacts fast to change but chases noise; a <strong>low alpha</strong> (near 0) is smooth and slow to react. A stable product wants a low alpha; a product whose demand has genuinely shifted wants a higher one. Choosing alpha is a judgment about whether the latest change is a signal or noise — the same judgment as in Module 4.</p>\n<div class=\"formula\">New forecast = Old forecast + α × (Actual − Old forecast) &nbsp;|&nbsp; High α = fast but noisy · Low α = smooth but slow</div>"
    },
    {
      "heading": "Measuring How Wrong You Are",
      "html": "\n<p>A forecast without an error measure is a guess with a spreadsheet. The two standard measures are <strong>MAD</strong> (mean absolute deviation) and <strong>MAPE</strong> (mean absolute percentage error). MAD is the average of the absolute errors: add up |actual − forecast| for each period and divide by the number of periods. It is in the same units as the demand, so a MAD of 8 means the forecast is typically off by about 8 units.</p>\n<p><strong>Worked example.</strong> Errors over three months were 10, 10, and 5 units. Step 1: sum = 10 + 10 + 5 = 25. Step 2: MAD = 25 ÷ 3 = <strong>8.33 units</strong>. Step 3: MAPE expresses each error as a percentage of the actual — for example, an error of 10 on an actual of 100 is 10% — and averages those percentages, which lets the business compare forecasts across products of different sizes.</p>\n<p>Two habits make error measurement useful. First, track it over time: a forecast method whose MAD is drifting up is a method that has stopped working. Second, use the error to set safety stock — the safety stock formula in Module 5 uses the standard deviation of demand, and forecast error is a direct measure of that uncertainty. A business that knows its forecast error can size its safety stock honestly instead of guessing.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Measure the error, track it, and use it. MAD is the average absolute error in units; MAPE is the same idea in percentages. Forecast error is what safety stock is really protecting against.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p>\n<ul>\n<li>A forecast is an estimate, not a plan and not a target; forecasts are always wrong, so measure the error.</li>\n<li>Naive forecast: next period equals this period. Moving average: average the last n periods.</li>\n<li>Weighted moving average: weight recent periods more; weights must add to 1.00.</li>\n<li>Exponential smoothing: new forecast = old forecast + α × (actual − old forecast); high α reacts fast, low α is smooth.</li>\n<li>MAD is the average absolute error in units; MAPE is the average absolute percentage error.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Treating the forecast as a target. When a forecast is also the sales target, nobody reports the truth — the forecast becomes a wish, the plan is built on a wish, and the stockout or the surplus is the result. Keep the forecast honest and set the target separately.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Picking a method by how impressive it sounds. A naive forecast often beats a fancy model on a stable product, and the best method is the one with the lowest MAD on your data — measured, not assumed.</div>\n<p><strong>Next step:</strong> Module 9 turns to project management — how to run the one-off work that changes the operation, from charter to close.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Forecast",
      "def": "An estimate of future demand, built from past data and judgment, used to plan production, staff, and stock."
    },
    {
      "term": "Naive forecast",
      "def": "The forecast that next period's demand will equal this period's demand."
    },
    {
      "term": "Moving average",
      "def": "A forecast equal to the average of the last n periods of actual demand."
    },
    {
      "term": "Weighted moving average",
      "def": "A moving average that gives more weight to recent periods; weights must add to 1.00."
    },
    {
      "term": "Exponential smoothing",
      "def": "A forecast that adjusts the old forecast by a fraction (alpha) of the last error."
    },
    {
      "term": "Alpha (α)",
      "def": "The smoothing constant in exponential smoothing, between 0 and 1; high alpha reacts fast, low alpha is smooth."
    },
    {
      "term": "MAD",
      "def": "Mean absolute deviation: the average of the absolute forecast errors, in the same units as demand."
    },
    {
      "term": "MAPE",
      "def": "Mean absolute percentage error: the average forecast error expressed as a percentage of actual demand."
    },
    {
      "term": "Forecast error",
      "def": "The difference between actual demand and the forecast, used to judge and improve a forecasting method."
    },
    {
      "term": "Forecast horizon",
      "def": "How far ahead a forecast looks: short-term (days to months), medium-term (months to a year), or long-term (years)."
    },
    {
      "term": "Trend",
      "def": "A sustained upward or downward movement in demand over time."
    },
    {
      "term": "Seasonality",
      "def": "A regular, repeating pattern in demand tied to the calendar, such as higher sales every December."
    },
    {
      "term": "Time series",
      "def": "A sequence of demand data recorded over time, the input to quantitative forecasting methods."
    },
    {
      "term": "Qualitative forecasting",
      "def": "Forecasting by judgment — expert opinion, sales force estimates, and market research — used when there is no history."
    }
  ],
  "video": {
    "title": "On Time Series, Regression Based Forecasting & Smoothing Methods",
    "embedUrl": "https://www.youtube.com/embed/dUp84DL8HyI",
    "note": "Covers time-series forecasting and smoothing methods, including moving averages and exponential smoothing — the methods of this module. Watch the smoothing section, then work the module's examples (3-period moving average 130, weighted 131, exponential smoothing 106) by hand.",
    "more": [
      {
        "title": "IS 335 Week 9 Beat the Naive Forecast: Moving Average vs Exponential Smoothing",
        "url": "https://www.youtube.com/watch?v=kLAAhQlXXC8"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Actual demand for the last three months was 120, 140, and 130 units. (a) What is the 3-period moving average forecast for next month? (b) What is the weighted moving average with weights 0.5, 0.3, 0.2 (most recent first)?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Moving average = (120 + 140 + 130) ÷ 3 = 390 ÷ 3 = <strong>130 units</strong>. Step 2: (b) Weighted = (0.5 × 130) + (0.3 × 140) + (0.2 × 120) = 65 + 42 + 24 = <strong>131 units</strong>. Step 3: The weighted forecast is slightly higher because it gives the most weight to the most recent month.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Last month's forecast was 100 units, actual demand was 120, and α = 0.3. (a) What is the exponential smoothing forecast for next month? (b) What would it be with α = 0.8?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Error = 120 − 100 = 20. New forecast = 100 + (0.3 × 20) = 100 + 6 = <strong>106 units</strong>. Step 2: (b) With α = 0.8: new forecast = 100 + (0.8 × 20) = 100 + 16 = <strong>116 units</strong>. Step 3: The higher alpha reacts much faster to the change — useful if demand has genuinely shifted, harmful if the 120 was a one-off spike.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Forecast errors over three months were 10, 10, and 5 units. (a) What is the MAD? (b) A second method has errors of 4, 6, and 5. What is its MAD, and which method is better?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) MAD = (10 + 10 + 5) ÷ 3 = 25 ÷ 3 = <strong>8.33 units</strong>. Step 2: (b) Second method MAD = (4 + 6 + 5) ÷ 3 = 15 ÷ 3 = <strong>5 units</strong>. Step 3: The second method is better — its average error is smaller, so its forecasts are typically closer to the actual.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A bakery's December sales are always twice its January sales. (a) Is this trend or seasonality? (b) A moving average of the last three months is used to forecast January. Explain why it will over-forecast.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) This is <strong>seasonality</strong> — a regular, repeating calendar pattern. Step 2: (b) The last three months include the high December sales, so their average is pulled up by the seasonal peak; January is a low month, so the forecast will be too high. Step 3: A seasonal adjustment, or a forecast built from last January rather than last month, is needed.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A new product has no sales history. (a) Which forecasting approach — quantitative or qualitative — should be used, and why? (b) Name two qualitative methods.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) <strong>Qualitative</strong> forecasting, because the quantitative methods need a history of actual demand and there is none. Step 2: (b) Expert opinion and sales force estimates (or market research). Step 3: As real sales arrive, the business should switch to quantitative methods and measure the error.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A manager sets the sales forecast equal to the sales target and uses it to plan production. Explain the two mistakes in this, and what should happen instead.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Mistake one — a forecast is what the business <em>expects</em>, a target is what it <em>wants</em>; making them the same turns the forecast into a wish. Step 2: Mistake two — production planned on a wish produces either a stockout (if the wish was too low) or a surplus (if it was too high). Step 3: Instead, keep the forecast honest and measured (track MAD), plan production on the forecast, and set the target separately as the goal the sales team works toward.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Actual demand for the last three months was 120, 140, and 130. The 3-period moving average forecast is:",
      "choices": [
        "120 units",
        "130 units",
        "140 units",
        "135 units"
      ],
      "answer": 1,
      "explanation": "Correct: (b). (120 + 140 + 130) ÷ 3 = 390 ÷ 3 = 130. (a) is the oldest period. (c) is the middle period. (d) averages only two numbers."
    },
    {
      "q": "With weights 0.5, 0.3, 0.2 (most recent first) on 130, 140, 120, the weighted moving average is:",
      "choices": [
        "130 units",
        "131 units",
        "132 units",
        "135 units"
      ],
      "answer": 1,
      "explanation": "Correct: (b). (0.5 × 130) + (0.3 × 140) + (0.2 × 120) = 65 + 42 + 24 = 131. (a) is the simple moving average. (c) and (d) come from weighting the wrong periods."
    },
    {
      "q": "Last forecast 100, actual 120, α = 0.3. The exponential smoothing forecast is:",
      "choices": [
        "100 units",
        "106 units",
        "116 units",
        "120 units"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 100 + 0.3 × (120 − 100) = 100 + 6 = 106. (a) is the old forecast. (c) uses α = 0.8. (d) is the actual, not a forecast."
    },
    {
      "q": "A high alpha in exponential smoothing means the forecast:",
      "choices": [
        "Reacts fast to change but chases noise",
        "Is always accurate",
        "Ignores the latest actual",
        "Is smoother and slower"
      ],
      "answer": 0,
      "explanation": "Correct: (a). High alpha carries most of the last error into the forecast. (b) no alpha guarantees accuracy. (c) high alpha reacts more, not less. (d) describes a low alpha."
    },
    {
      "q": "Forecast errors were 10, 10, and 5. The MAD is:",
      "choices": [
        "5 units",
        "8.33 units",
        "10 units",
        "25 units"
      ],
      "answer": 1,
      "explanation": "Correct: (b). (10 + 10 + 5) ÷ 3 = 25 ÷ 3 = 8.33. (a) is the smallest error. (c) is the largest. (d) is the sum, not the average."
    },
    {
      "q": "A forecast and a target differ because:",
      "choices": [
        "They are the same thing",
        "A forecast is what is expected; a target is what is wanted",
        "A target is always lower",
        "A forecast is never written down"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Expected versus wanted — confusing them turns the forecast into a wish. (a) is the mistake this module corrects. (c) targets can be higher or lower. (d) forecasts are written down and tracked."
    },
    {
      "q": "December sales are always twice January sales. This is:",
      "choices": [
        "Trend",
        "Seasonality",
        "Random variation",
        "A forecasting error"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Seasonality is a regular, repeating calendar pattern. (a) trend is a sustained movement, not a repeating one. (c) random variation does not repeat on schedule. (d) it is a pattern in the data, not an error."
    },
    {
      "q": "The best way to choose between two forecasting methods is to:",
      "choices": [
        "Pick the one with the fanciest name",
        "Compare their MAD (or MAPE) on your data and pick the lower one",
        "Always use the naive forecast",
        "Ask the sales team which they like"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Measure the error on your own data and choose the method that is actually closer. (a) impressiveness is not accuracy. (c) the naive forecast is a baseline, not always the best. (d) preference is not evidence."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Forecasting Demand: Quick Reference</h3>\n<p><strong>Core idea:</strong> A forecast is an estimate, not a plan and not a target. Forecasts are always wrong — measure the error and keep the forecast honest.</p>\n<div class=\"formula\">Moving average = (Sum of last n periods) ÷ n &nbsp;|&nbsp; Weighted moving average = Σ(weight × demand), weights adding to 1.00</div>\n<div class=\"formula\">New forecast = Old forecast + α × (Actual − Old forecast) &nbsp;|&nbsp; MAD = (Σ|Actual − Forecast|) ÷ n</div>\n<p><strong>Alpha:</strong> high α reacts fast but chases noise; low α is smooth but slow. <strong>MAPE:</strong> the average absolute error as a percentage of actual — useful for comparing products of different sizes.</p>\n<p><strong>Watch out:</strong> Never forecast from orders (they contain the bullwhip) and never set the forecast equal to the target. And a moving average that includes a seasonal peak will over-forecast the low season.</p>\n<p><strong>Self-check:</strong> Take three months of demand you know, compute the moving average, the weighted moving average, and an exponential smoothing forecast — then say which method you would trust and why.</p>\n"
};
