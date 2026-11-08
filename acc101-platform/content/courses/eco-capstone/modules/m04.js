// Economics Capstone — Module 4: Data & Methods: What You'll Measure & How
module.exports = {
  "number": 4,
  "slug": "data-and-methods",
  "title": "Data & Methods: What You'll Measure & How",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe the teaching sample fully: 10 workers, two variables, how each is measured.",
    "Explain the difference between cross-sectional data and time-series data, and which this paper uses.",
    "Write down the regression model (wage = a + b × schooling + error) and say what each part means.",
    "Name the data's limits honestly: 10 workers, no controls, a teaching sample not a survey.",
    "Write the data and methods section of the paper (paper arc: Module 4)."
  ],
  "sections": [
    {
      "heading": "The Data, in Full",
      "html": "<p>The data and methods section is where a paper earns trust: it prints the data, says exactly how each variable is measured, and admits the limits before anyone else finds them. Here is the whole dataset — all 10 workers, because the sample is small enough to print in full. Schooling is years of formal schooling completed; wage is hourly pay in dollars.</p><p>Worker 1: 12 years, $14. Worker 2: 12 years, $16. Worker 3: 14 years, $18. Worker 4: 14 years, $20. Worker 5: 16 years, $22. Worker 6: 16 years, $25. Worker 7: 18 years, $27. Worker 8: 18 years, $30. Worker 9: 20 years, $33. Worker 10: 20 years, $36. Two things to notice before any statistics: wages rise with schooling at every step, and two workers with the same schooling earn different wages (12 years → $14 and $16; 16 years → $22 and $25). The first fact is the relationship; the second is the noise the regression must live with.</p><div class=\"callout\"><strong>Key idea:</strong> Print the data. A reader who can see all 10 rows can check every number in the paper — and a paper that hides its data asks to be trusted instead of checked.</div>"
    },
    {
      "heading": "What Kind of Data Is This?",
      "html": "<p>This is <strong>cross-sectional data</strong>: different workers observed at one point in time. It is not time-series data (one worker or economy followed over years) and not panel data (many workers followed over years). The distinction matters because each kind answers different questions: cross-sectional data is good for comparing people, time-series data is good for tracking change, and panel data can do both. This paper compares workers, so cross-sectional data is the right kind — but it also means the paper cannot say anything about how one worker's wage changes over time.</p><p>Real economists would use survey data for this question — the U.S. Census Bureau's Current Population Survey, the Bureau of Labor Statistics' wage data, or the National Longitudinal Surveys — and the module notes teach where those live (FRED for macro series, BLS for wages and prices, Census for income, the World Bank for cross-country data). The teaching sample stands in for those surveys here, and the paper says so: the method is the same, the data is a miniature. When you do the project for real, replace the teaching sample with a real survey and keep the method.</p>"
    },
    {
      "heading": "The Model: Ordinary Least Squares",
      "html": "<p>The method is <strong>ordinary least squares (OLS) regression</strong>: fit the straight line that gets as close as possible to the 10 points. The model is wage = a + b × schooling + error. <strong>a (the intercept)</strong> is the predicted wage at zero years of schooling — here −$14.70, a number with no real-world meaning (nobody with zero schooling earns a negative wage), which is why the paper reports it but never interprets it. <strong>b (the slope)</strong> is the payoff: the predicted change in hourly wage for one extra year of schooling — here $2.43. <strong>The error</strong> is everything the line misses: ability, motivation, occupation, luck — the gap between each worker's actual wage and the line's prediction, called the residual.</p><p>OLS chooses a and b to minimize the sum of the squared residuals — the squared gaps between actual and predicted wages. Squaring stops positive and negative gaps from canceling out, and it punishes big misses more than small ones. The formulas are simple enough to do by hand on 10 workers: slope = Sxy ÷ Sxx (194.0 ÷ 80.0 = 2.425, rounded to 2.43) and intercept = mean wage − slope × mean schooling (24.10 − 2.425 × 16.0 = −14.70). Module 6 does the arithmetic in full; this module's job is to write the model down before the numbers arrive.</p><div class=\"callout\"><strong>Key idea:</strong> Write the model before you run it. A model written after the results is a description of the results, not a test of an idea.</div>"
    },
    {
      "heading": "The Limits, Stated Up Front",
      "html": "<p>Every dataset has limits, and this one has four, stated here so no reader has to discover them. <strong>First, size:</strong> 10 workers is tiny; the standard errors will be wide and the result will not generalize. <strong>Second, no controls:</strong> the regression has one variable, so ability, experience, occupation, and location are all in the error term — the ability-bias problem from Module 3. <strong>Third, a teaching sample:</strong> these are not real survey responses, so the paper estimates a relationship in a made-up miniature, not in the U.S. labor market. <strong>Fourth, one point in time:</strong> cross-sectional data cannot show change over time or prove causation.</p><p>Stating limits is not weakness — it is the difference between a paper and a sales pitch. The limits section also tells the reader what a follow-up study would do: a larger real survey, controls for experience and occupation, and a natural experiment for causation. A paper that names its own next step is a paper that understands its own result.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> the dataset is 10 workers, two variables, printed in full; it is cross-sectional data (different people, one point in time); the model is wage = a + b × schooling + error, fitted by OLS; slope = Sxy ÷ Sxx = 194.0 ÷ 80.0 = 2.425; intercept = 24.10 − 2.425 × 16.0 = −14.70; the limits are size, no controls, teaching sample, and one point in time. <strong>Paper arc:</strong> this module's assignment writes the data and methods section.</p><div class=\"callout\"><strong>Common mistake:</strong> Interpreting the intercept as a real wage. At zero years of schooling the line predicts −$14.70 — a nonsense number that only exists because the line is extended beyond the data (the lowest schooling observed is 12 years). Report the intercept; never interpret it.</div><div class=\"callout\"><strong>Common mistake:</strong> Describing the method after the results. The data and methods section is written before the regression is run — it is a promise about how the test will be done, not a report of what it found.</div>"
    }
  ],
  "keyTerms": [
    { "term": "Cross-sectional data", "def": "Data on different people (or firms, or places) at one point in time — here, 10 workers observed once." },
    { "term": "Time-series data", "def": "Data on one person, firm, or economy followed over time — for example, U.S. GDP each year from 2000 to 2025." },
    { "term": "Panel data", "def": "Data following many people over many time periods — cross-section plus time series combined." },
    { "term": "Ordinary least squares (OLS)", "def": "The regression method that chooses the line minimizing the sum of squared residuals — the squared gaps between actual and predicted values." },
    { "term": "Intercept (a)", "def": "The predicted value of the dependent variable when the independent variable is zero — here −$14.70, reported but not interpreted." },
    { "term": "Slope (b)", "def": "The predicted change in the dependent variable for a one-unit change in the independent variable — here $2.43 of hourly wage per extra year of schooling." },
    { "term": "Error term", "def": "Everything the model does not explain — ability, occupation, luck — captured in the gap between actual and predicted values." },
    { "term": "Residual", "def": "For one observation, actual value minus predicted value — the error term as observed. Here the residuals range from −2.10 to +2.20." },
    { "term": "Sxy and Sxx", "def": "The sums behind the slope: Sxy = Σ(x − x̄)(y − ȳ) = 194.0 and Sxx = Σ(x − x̄)² = 80.0, so slope = 194.0 ÷ 80.0 = 2.425." },
    { "term": "FRED", "def": "The Federal Reserve Bank of St. Louis database of economic time series — the first place to look for real macro data." },
    { "term": "BLS / Census", "def": "The Bureau of Labor Statistics (wages, prices, unemployment) and the U.S. Census Bureau (income, population) — the sources for real survey data on this question." },
    { "term": "Controls", "def": "Extra variables added to a regression to hold other factors fixed — for example, experience and occupation, which this paper's one-variable regression lacks." },
    { "term": "Measurement", "def": "How a variable is defined and recorded — here, years of schooling completed and hourly wage in dollars. Bad measurement biases results." }
  ],
  "video": {
    "title": "Qualitative vs Quantitative Research: Key Differences Explained",
    "embedUrl": "https://www.youtube.com/embed/hAUgRPZ33BE",
    "note": "National University explains the two kinds of research data — quantitative (numbers, surveys, statistics) and qualitative (interviews, meaning, context) — and when each is the right tool. This paper is quantitative: numbers, a regression, and a test.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1 — Paper section: Data description.</strong> Write the data paragraph: 10 workers, cross-sectional, teaching sample (not a real survey), two variables — years of schooling completed and hourly wage in dollars — and list all 10 pairs.</p>",
      "solution": "<p><strong>Answer:</strong> The data is a teaching sample of 10 workers, observed once (cross-sectional), built for this project so that every calculation can be checked by hand; it is not a real survey. The two variables are years of schooling completed (12, 12, 14, 14, 16, 16, 18, 18, 20, 20) and hourly wage in dollars (14, 16, 18, 20, 22, 25, 27, 30, 33, 36), paired in order: (12, $14), (12, $16), (14, $18), (14, $20), (16, $22), (16, $25), (18, $27), (18, $30), (20, $33), (20, $36).</p>"
    },
    {
      "prompt": "<p><strong>Problem 2 — Paper section: The model.</strong> Write the regression model in words and symbols, and say in one sentence each what the intercept, the slope, and the error term mean.</p>",
      "solution": "<p><strong>Answer:</strong> Wage = a + b × Schooling + error, estimated by ordinary least squares. The intercept (a) is the predicted wage at zero years of schooling — a mathematical anchor with no real-world meaning here. The slope (b) is the predicted change in hourly wage for one extra year of schooling — the payoff this paper estimates. The error term is everything the line does not capture: ability, motivation, occupation, and luck, visible as the residual for each worker.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3 — Slope by hand.</strong> Given Sxy = 194.0 and Sxx = 80.0, compute the slope. Then, using mean wage $24.10 and mean schooling 16.0 years, compute the intercept. Show both steps.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Slope b = Sxy ÷ Sxx = 194.0 ÷ 80.0 = <strong>2.425</strong>, rounded to $2.43 an hour per extra year. Step 2: Intercept a = mean wage − b × mean schooling = 24.10 − 2.425 × 16.0 = 24.10 − 38.80 = <strong>−14.70</strong>. Step 3: The regression line is wage = −14.70 + 2.43 × schooling (using the rounded slope).</p>"
    },
    {
      "prompt": "<p><strong>Problem 4 — Data-type drill.</strong> Classify each: (a) 10 workers observed once; (b) U.S. GDP each year 2000–2025; (c) 500 workers followed for 10 years. One word each, with one reason.</p>",
      "solution": "<p><strong>Answer:</strong> (a) Cross-sectional — different people, one point in time. (b) Time-series — one economy followed over years. (c) Panel — many people followed over many years. The paper uses (a): it compares workers, so it cannot say how one worker's wage changes over time.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5 — Paper section: Limits.</strong> Write the limits paragraph: four limits — 10 workers, no controls, teaching sample not a survey, one point in time — and one sentence on what a follow-up study would do.</p>",
      "solution": "<p><strong>Answer:</strong> This study has four limits. The sample is 10 workers, so the results will not generalize and the standard errors will be wide. The regression has no controls, so ability, experience, and occupation sit in the error term and the slope is subject to ability bias. The data is a teaching sample, not a real survey, so the paper demonstrates a method rather than estimating the U.S. labor market. And the data is cross-sectional, so it cannot show change over time or prove causation. A follow-up would use a large real survey with controls for experience and occupation, and a natural experiment for the causal claim.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6 — Where real data lives.</strong> Name the real source you would use for each: (a) U.S. unemployment over time, (b) wages by occupation, (c) income by state, (d) GDP across countries.</p>",
      "solution": "<p><strong>Answer:</strong> (a) FRED (Federal Reserve Bank of St. Louis) or the BLS — both publish the unemployment rate as a time series. (b) The BLS Occupational Employment and Wage Statistics. (c) The U.S. Census Bureau (American Community Survey). (d) The World Bank (World Development Indicators). Each is a public source; the module text and the lab use frozen tables from such sources so every expected answer is fixed and gradeable.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The teaching sample is what kind of data?",
      "choices": [
        "Time-series",
        "Cross-sectional — different workers, one point in time",
        "Panel",
        "Experimental"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Ten different workers observed once is cross-sectional. (a) is wrong: time series follows one unit over time. (c) is wrong: panel follows many units over time. (d) is wrong: nothing was randomly assigned here."
    },
    {
      "q": "In wage = a + b × schooling + error, the slope b is:",
      "choices": [
        "The wage at zero schooling",
        "The predicted change in wage for one extra year of schooling",
        "The error for one worker",
        "The mean wage"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The slope is the payoff per year — here $2.43. (a) is wrong: that is the intercept. (c) is wrong: that is the residual. (d) is wrong: the mean wage is $24.10, a different number."
    },
    {
      "q": "With Sxy = 194.0 and Sxx = 80.0, the slope is:",
      "choices": [
        "0.41",
        "2.425",
        "14.70",
        "24.10"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 194.0 ÷ 80.0 = 2.425. (a) is wrong: that is 80.0 ÷ 194.0, the reciprocal. (c) is wrong: that is the size of the intercept. (d) is wrong: that is the mean wage."
    },
    {
      "q": "The intercept of −$14.70 should be:",
      "choices": [
        "Interpreted as the wage of someone with no schooling",
        "Reported but not interpreted — it extends the line beyond the data",
        "Dropped from the paper",
        "Used to predict wages at 12 years of schooling"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Zero schooling is outside the data (lowest observed is 12 years), so −$14.70 is a nonsense wage. (a) is wrong: nobody earns a negative wage. (c) is wrong: the intercept is part of the regression and is reported. (d) is wrong: prediction at 12 years uses the whole line, giving $14.40."
    },
    {
      "q": "OLS chooses the line that:",
      "choices": [
        "Passes through every point",
        "Minimizes the sum of squared residuals",
        "Maximizes R² by adding variables",
        "Goes through the origin"
      ],
      "answer": 1,
      "explanation": "Correct: (b). OLS minimizes Σ(actual − predicted)². (a) is wrong: with noise, no straight line passes through all 10 points. (c) is wrong: adding variables is not part of OLS fitting. (d) is wrong: the line has an intercept, −14.70, so it does not go through the origin."
    },
    {
      "q": "A residual is:",
      "choices": [
        "The slope of the line",
        "Actual value minus predicted value for one worker",
        "The mean of the dependent variable",
        "The standard error"
      ],
      "answer": 1,
      "explanation": "Correct: (b). For the worker with 16 years earning $22, the prediction is $24.10 and the residual is −$2.10. (a) is wrong: the slope is 2.425. (c) is wrong: the mean wage is $24.10. (d) is wrong: the standard error measures the slope's precision."
    },
    {
      "q": "Which is NOT a stated limit of this study?",
      "choices": [
        "Only 10 workers",
        "No controls for ability or experience",
        "The data is a teaching sample, not a real survey",
        "The regression uses too many variables"
      ],
      "answer": 3,
      "explanation": "Correct: (d). The regression uses one variable — the problem is too few, not too many. (a), (b), and (c) are all stated limits in this module."
    },
    {
      "q": "For U.S. GDP over time, the first place to look is:",
      "choices": [
        "A newspaper opinion page",
        "FRED, the Federal Reserve Bank of St. Louis database",
        "The teaching sample",
        "A single worker's pay stub"
      ],
      "answer": 1,
      "explanation": "Correct: (b). FRED publishes GDP and hundreds of other series as downloadable time series. (a) is wrong: opinions are not data. (c) is wrong: the teaching sample has 10 workers and no GDP. (d) is wrong: one pay stub is one observation, not a series."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Data &amp; Methods: Quick Reference</h3>\n<p><strong>Core idea:</strong> Print the data, write the model before running it, and state the limits before anyone else finds them.</p>\n<p><strong>The data:</strong> 10 workers, cross-sectional, teaching sample. Schooling: 12, 12, 14, 14, 16, 16, 18, 18, 20, 20. Wages: 14, 16, 18, 20, 22, 25, 27, 30, 33, 36.</p>\n<div class=\"formula\">wage = a + b × schooling + error &nbsp;|&nbsp; b = Sxy ÷ Sxx = 194.0 ÷ 80.0 = 2.425 &nbsp;|&nbsp; a = 24.10 − 2.425 × 16.0 = −14.70</div>\n<p><strong>OLS:</strong> minimizes the sum of squared residuals. <strong>Intercept:</strong> report it, never interpret it (−$14.70 is outside the data). <strong>Limits:</strong> 10 workers · no controls · teaching sample · one point in time. <strong>Real data:</strong> FRED, BLS, Census, World Bank.</p>\n<p><strong>Paper arc:</strong> This module's assignment writes the data and methods section.</p>\n<p><strong>Self-check:</strong> Recompute the slope and intercept from Sxy = 194.0, Sxx = 80.0, means 24.10 and 16.0 — without looking.</p>\n"
};
