module.exports = {
  "number": 8,
  "slug": "time-series-trends-seasons-cycles",
  "title": "Time Series: Trends, Seasons & Cycles",
  "estTime": "3–4 hours",
  "objectives": [
    "Name the four components of a time series: trend, seasonal, cyclical, and irregular.",
    "Compute a centred moving average and explain what it smooths out.",
    "Explain why seasonal adjustment exists and what a seasonally adjusted series shows.",
    "Distinguish a seasonal pattern (fixed period) from a cycle (irregular length).",
    "Read a time-series chart and separate a long-run trend from short-run noise."
  ],
  "sections": [
    {
      "heading": "Four Components in Every Time Series",
      "html": "<p>A <strong>time series</strong> is data in time order. Economists split it into four components. The <strong>trend</strong> is the long-run direction — up or down over years. The <strong>seasonal</strong> component repeats on a fixed calendar: retail sales spike every December, unemployment (unadjusted) rises every January as holiday jobs end. The <strong>cyclical</strong> component is the business cycle — booms and recessions that last years and have no fixed length. The <strong>irregular</strong> component is everything left over: strikes, storms, pandemics, one-off shocks.</p><p>Think of it as a sum: Value = Trend + Seasonal + Cyclical + Irregular. Analysis is the work of pulling those parts apart so you can see each one clearly.</p><div class=\"formula\">Value = Trend + Seasonal + Cyclical + Irregular</div>"
    },
    {
      "heading": "Moving Averages: Smoothing Out the Noise",
      "html": "<p>A <strong>moving average</strong> averages a window of nearby values and slides the window along the series, smoothing out short-run wiggles so the trend shows. <em>Example.</em> Three monthly rates 3.7, 3.9, 3.8 have a 3-month moving average of (3.7 + 3.9 + 3.8) ÷ 3 = 11.4 ÷ 3 = <strong>3.8</strong>. Slide the window one month forward — 3.9, 3.8, 3.9 — and the next average is (3.9 + 3.8 + 3.9) ÷ 3 = 11.6 ÷ 3 = <strong>3.87</strong>.</p><p>Longer windows smooth more but react more slowly: a 12-month moving average of monthly data kills seasonality entirely (every month of the year is in the window) but lags a turning point by months. Choose the window for the job: 3 months to see the recent direction, 12 months to see the trend.</p>"
    },
    {
      "heading": "Seasonal Adjustment: Why the BLS Does It",
      "html": "<p>Some patterns repeat so reliably that they hide the news. Unadjusted unemployment always jumps in January (holiday jobs end) and falls in spring — so a January rise tells you about the calendar, not the economy. <strong>Seasonal adjustment</strong> estimates the usual seasonal pattern and removes it, leaving a series where a month-to-month change means something changed in the economy.</p><p>That is why this course's lab uses the <em>seasonally adjusted</em> UNRATE series: its January 2024 value is 3.7%, while the unadjusted January value is 4.1% — the 0.4-point gap is the seasonal effect. Always check which version you have; comparing an adjusted month with an unadjusted month is comparing two different things.</p><div class=\"callout\"><strong>Key idea:</strong> Seasonally adjusted = the economy's movement, with the calendar removed. Unadjusted = the raw count, calendar included. Never mix the two.</div>"
    },
    {
      "heading": "Seasonal vs. Cyclical: Fixed vs. Irregular",
      "html": "<p>Seasonal and cyclical patterns are easy to confuse, and the difference matters. <strong>Seasonal</strong> patterns have a fixed period — 12 months, 4 quarters, 7 days — and repeat at the same time every year. <strong>Cycles</strong> have no fixed period: the U.S. business cycle has lasted anywhere from under two years to over ten years between recessions.</p><p>Test it: if the pattern happens every December, it is seasonal. If it happens “every few years, sometimes longer,” it is cyclical. And the irregular component is the remainder — the part no pattern explains, which is why honest analysts always leave room for surprise.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Four components: trend (long-run), seasonal (fixed calendar), cyclical (irregular business cycle), irregular (one-off shocks).</li><li>Moving averages smooth noise; longer windows smooth more and lag more.</li><li>Seasonal adjustment removes the calendar so month-to-month changes show the economy.</li><li>Seasonal = fixed period; cyclical = irregular length.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Calling a January jump in unadjusted unemployment “bad news.” It happens every January — check the seasonally adjusted series before reacting.</div><div class=\"callout\"><strong>Common mistake:</strong> Treating a moving average as a forecast. It describes the recent past; it does not predict the next value.</div>"
    }
  ],
  "keyTerms": [
    {
      "term": "Time series",
      "def": "Data recorded in time order, such as monthly unemployment rates."
    },
    {
      "term": "Trend",
      "def": "The long-run direction of a time series, up or down over years."
    },
    {
      "term": "Seasonal component",
      "def": "A pattern that repeats on a fixed calendar, such as every December or every January."
    },
    {
      "term": "Cyclical component",
      "def": "The business-cycle movement: booms and recessions with no fixed length."
    },
    {
      "term": "Irregular component",
      "def": "The leftover one-off shocks — strikes, storms, pandemics — that no pattern explains."
    },
    {
      "term": "Moving average",
      "def": "The average of a sliding window of values, used to smooth out short-run noise."
    },
    {
      "term": "Seasonal adjustment",
      "def": "Removing the usual seasonal pattern so month-to-month changes show the underlying economy."
    },
    {
      "term": "Seasonally adjusted",
      "def": "Data with the seasonal component removed."
    },
    {
      "term": "Not seasonally adjusted",
      "def": "Raw data with the seasonal pattern still in it; also called unadjusted."
    },
    {
      "term": "Business cycle",
      "def": "The irregular cycle of expansions and recessions in the whole economy."
    },
    {
      "term": "Turning point",
      "def": "The moment a series changes direction, such as from rising to falling."
    },
    {
      "term": "Lag",
      "def": "A delay: a long moving average reacts to a turning point months after it happens."
    },
    {
      "term": "Decomposition",
      "def": "Splitting a time series into its trend, seasonal, cyclical, and irregular parts."
    },
    {
      "term": "Window",
      "def": "The number of values averaged in a moving average, such as 3 months or 12 months."
    }
  ],
  "video": {
    "title": "Hans Rosling's 200 Countries, 200 Years, 4 Minutes - The Joy of Stats - BBC",
    "embedUrl": "https://www.youtube.com/embed/jbkSRLYSojo",
    "note": "Hans Rosling's 200 Countries, 200 Years, 4 Minutes: two centuries of health and wealth as a moving time series. Watch the long-run trend — and notice how much short-run noise disappears when you look at 200 years at once.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Retail sales spike every December and fall every January. (a) Which time-series component is this? (b) Is its period fixed or irregular?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: This is the <strong>seasonal</strong> component — it repeats on the calendar. Step 2: Its period is <strong>fixed</strong>: 12 months, every year.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Monthly rates are 3.7, 3.9, 3.8, 3.9. (a) Compute the 3-month moving average for the first three months. (b) Compute it for months 2–4.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: First window: (3.7 + 3.9 + 3.8) ÷ 3 = 11.4 ÷ 3 = <strong>3.8</strong>. Step 2: Second window: (3.9 + 3.8 + 3.9) ÷ 3 = 11.6 ÷ 3 = <strong>3.87</strong> (rounded). Step 3: The averages are smoother than the raw values — 3.8 and 3.87 instead of jumps between 3.7 and 3.9.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Unadjusted unemployment in January 2024 was 4.1%; seasonally adjusted it was 3.7%. (a) What is the seasonal effect in points? (b) What does it mean?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Seasonal effect = 4.1 − 3.7 = <strong>0.4 percentage points</strong>. Step 2: It means January unemployment is usually about 0.4 points higher than the underlying rate, because holiday jobs end — the calendar, not a weakening economy, explains the gap.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A recession lasts 18 months, the next expansion lasts 10 years, and the following recession lasts 8 months. (a) Which component is this? (b) Why is it not seasonal?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: This is the <strong>cyclical</strong> component — the business cycle. Step 2: It is not seasonal because its length is <strong>irregular</strong>: 18 months, 10 years, 8 months — no fixed period.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A factory closes for a month after a fire. (a) Which component captures this? (b) Should you delete the month from the series? Why or why not?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: This is the <strong>irregular</strong> component — a one-off shock. Step 2: No, do not delete it: it is real, and deleting real shocks hides evidence. Step 3: Note it in your analysis instead — “the dip in that month reflects the fire, not the trend.”</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why does a 12-month moving average of monthly data remove seasonality? Explain in two sentences.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Every 12-month window contains exactly one of each calendar month — one January, one February, and so on. Step 2: So each window has the same seasonal mix, and the seasonal ups and downs cancel out, leaving the trend.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Which component repeats on a fixed calendar?",
      "choices": [
        "Trend",
        "Seasonal",
        "Cyclical",
        "Irregular"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Seasonal patterns repeat every 12 months, 4 quarters, or 7 days. (a) Trend is the long-run direction. (c) Cycles have no fixed length. (d) Irregular is one-off shocks."
    },
    {
      "q": "The 3-month moving average of 3.7, 3.9, 3.8 is:",
      "choices": [
        "3.7",
        "3.8",
        "3.9",
        "11.4"
      ],
      "answer": 1,
      "explanation": "Correct: (b). (3.7 + 3.9 + 3.8) ÷ 3 = 11.4 ÷ 3 = 3.8. (a) is the first value. (c) is the second value. (d) is the sum, not the average."
    },
    {
      "q": "Seasonal adjustment exists to:",
      "choices": [
        "Remove recessions from the data",
        "Remove the usual calendar pattern so month-to-month changes show the economy",
        "Make the data look smoother for presentations",
        "Delete outliers"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It removes the calendar, not the economy. (a) Recessions are cyclical, not seasonal. (c) Smooth looks are a side effect, not the purpose. (d) Outliers stay in the data."
    },
    {
      "q": "Unadjusted January unemployment is 4.1% and seasonally adjusted is 3.7%. The seasonal effect is:",
      "choices": [
        "0.4 points",
        "7.8 points",
        "3.7 points",
        "4.1 points"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 4.1 − 3.7 = 0.4. (b) adds the two values. (c) and (d) are the rates themselves."
    },
    {
      "q": "A business cycle is:",
      "choices": [
        "Seasonal, with a fixed 12-month period",
        "Cyclical, with an irregular length",
        "The same as a trend",
        "Always exactly 10 years"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Booms and recessions last varying lengths. (a) describes seasonality. (c) Trend is the long-run direction. (d) No cycle has a fixed length."
    },
    {
      "q": "A longer moving-average window:",
      "choices": [
        "Smooths more but reacts more slowly to turning points",
        "Smooths less and reacts faster",
        "Changes the data's units",
        "Removes the trend"
      ],
      "answer": 0,
      "explanation": "Correct: (a). More values in the window means more smoothing and more lag. (b) is the opposite. (c) Windows do not change units. (d) Moving averages reveal the trend, they do not remove it."
    },
    {
      "q": "A factory fire closing a plant for a month is an example of the:",
      "choices": [
        "Trend component",
        "Seasonal component",
        "Irregular component",
        "Cyclical component"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A one-off shock is irregular. (a) Trend is long-run direction. (b) Seasonal repeats yearly. (d) Cyclical is the business cycle."
    },
    {
      "q": "Value = Trend + Seasonal + Cyclical + Irregular is:",
      "choices": [
        "A forecast formula",
        "The decomposition of a time series into its four components",
        "The formula for inflation",
        "A spreadsheet error"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It is the standard decomposition. (a) It describes the past, it does not forecast. (c) Inflation uses price indexes. (d) It is a concept, not an error."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Time Series: Quick Reference</h3>\n<div class=\"formula\">Value = Trend + Seasonal + Cyclical + Irregular</div>\n<p><strong>Trend:</strong> long-run direction · <strong>Seasonal:</strong> fixed calendar (12 months) · <strong>Cyclical:</strong> business cycle, irregular length · <strong>Irregular:</strong> one-off shocks.</p>\n<p><strong>Moving average:</strong> Average a sliding window; 3-month window on 3.7, 3.9, 3.8 gives 3.8. Longer window = smoother, slower.</p>\n<p><strong>Seasonal adjustment:</strong> Removes the calendar. Jan 2024: unadjusted 4.1% vs adjusted 3.7% — a 0.4-point seasonal effect. Never mix the two versions.</p>\n<p><strong>Watch out:</strong> A January jump in unadjusted data is the calendar, not news. A moving average describes the past; it does not forecast.</p>\n<p><strong>Self-check:</strong> Take any 6 monthly values, compute the 3-month moving averages, and say whether the trend is up, down, or flat.</p>\n"
};
