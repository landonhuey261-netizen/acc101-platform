// eco221 - Module 6: Time Series & Autocorrelation
module.exports = {
  "number": 6,
  "slug": "time-series-and-autocorrelation",
  "title": "Time Series & Autocorrelation",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what makes time-series data different from cross-sectional data.",
    "Define autocorrelation and explain why it breaks the OLS standard errors.",
    "Compute and interpret a Durbin–Watson statistic.",
    "Use lagged variables and differencing to handle time dependence.",
    "Explain stationarity and why a random walk must be differenced before regressing."
  ],
  "sections": [
    {
      "heading": "Time Is Different",
      "html": "<p>So far the data have been <strong>cross-sectional</strong>: different shops, students, or workers observed at one moment. <strong>Time-series data</strong> follow one thing over time: GDP each quarter, unemployment each month, a stock price each day. Time brings two new problems. First, today's value depends on yesterday's — economies do not reset each morning. Second, many series trend upward over time, so two unrelated trending series can look strongly related.</p>\n<p>Write a time-series regression with a subscript t for time: Y<sub>t</sub> = β<sub>0</sub> + β<sub>1</sub>X<sub>t</sub> + u<sub>t</sub>. The error term now has a time index too, and the question is whether u<sub>t</sub> is related to u<sub>t−1</sub>, u<sub>t−2</sub>, and so on. In cross-sections we assume errors are independent; in time series that assumption is usually false.</p>\n<div class=\"callout\"><strong>Key idea:</strong> In time series, the past is in the present. A shock to GDP this quarter echoes into next quarter, so the errors carry memory — and OLS standard errors, which assume no memory, stop being trustworthy.</div>"
    },
    {
      "heading": "Autocorrelation: Errors That Remember",
      "html": "<p><strong>Autocorrelation</strong> (serial correlation) means the error at time t is correlated with the error at earlier times. With <strong>positive autocorrelation</strong>, a positive error this period tends to be followed by another positive error — the residuals run in streaks above and below the line. With <strong>negative autocorrelation</strong>, errors alternate sign. Positive autocorrelation is the common case in economics: booms and busts persist.</p>\n<p>Like heteroskedasticity, autocorrelation leaves OLS unbiased but wrecks the standard errors — typically making them too small, so t-statistics look too good. It also makes R² look better than it is, because the persistent errors masquerade as explained variation. The diagnostic is the <strong>Durbin–Watson statistic</strong>: DW = Σ(e<sub>t</sub> − e<sub>t−1</sub>)² ÷ Σe<sub>t</sub>². It runs from 0 to 4: near 2 means no autocorrelation, near 0 means strong positive autocorrelation, near 4 means strong negative autocorrelation.</p>\n<div class=\"formula\">DW = Σ(e<sub>t</sub> − e<sub>t−1</sub>)² / Σe<sub>t</sub>² &nbsp;|&nbsp; DW ≈ 2: none &nbsp;|&nbsp; DW ≈ 0: positive &nbsp;|&nbsp; DW ≈ 4: negative</div>\n<p><strong>Worked examples (teaching numbers).</strong> Residuals [2, 2, 1, 1, −1, −2, −2, −1] run in streaks: the squared changes are 0, 1, 0, 4, 1, 0, 1, summing to 7, and Σe² = 20, so DW = 7 ÷ 20 = <strong>0.35</strong> — strong positive autocorrelation. Residuals [1, −1, 1, −1, 1, −1] alternate: the squared changes are 4 five times, summing to 20, and Σe² = 6, so DW = 20 ÷ 6 = <strong>3.33</strong> — negative autocorrelation.</p>"
    },
    {
      "heading": "Lags, Differencing, and AR Models",
      "html": "<p>The fix for autocorrelation is to model the memory instead of ignoring it. A <strong>lagged variable</strong> is a variable's value in an earlier period: X<sub>t−1</sub> is last period's X. Adding lags of Y or X to the regression often soaks up the persistence. An <strong>AR(1) model</strong> says today's value depends on yesterday's: Y<sub>t</sub> = α + ρY<sub>t−1</sub> + u<sub>t</sub>, where ρ measures the persistence. <strong>Worked example:</strong> if Y<sub>t</sub> = 2 + 0.8Y<sub>t−1</sub> + u<sub>t</sub> and today's value is 50, the forecast for tomorrow is 2 + 0.8 × 50 = <strong>42</strong>.</p>\n<p><strong>Differencing</strong> is the other workhorse: instead of the level Y<sub>t</sub>, use the change ΔY<sub>t</sub> = Y<sub>t</sub> − Y<sub>t−1</sub>. Differencing removes a trend and often removes autocorrelation with it. If a series grows by roughly the same amount each period, its differences are stable even though its levels keep climbing. Regressing changes on changes is the honest way to ask \"does a change in X go with a change in Y?\"</p>"
    },
    {
      "heading": "Stationarity and the Random Walk",
      "html": "<p>A series is <strong>stationary</strong> if its mean, variance, and correlation pattern do not change over time — it wobbles around a fixed level instead of wandering off. In the AR(1) model, stationarity needs |ρ| &lt; 1: shocks fade away. If ρ = 1, the series is a <strong>random walk</strong>: Y<sub>t</sub> = Y<sub>t−1</sub> + u<sub>t</sub>, so every shock is permanent and the series wanders without returning to any level. Stock prices and many GDP series behave roughly like random walks.</p>\n<p>Regressing one random walk on another is the classic trap: two unrelated wandering series will often show a high R² and a \"significant\" slope purely because both trend. This is a <strong>spurious regression</strong>. The defense is to difference first — random walks become stationary after one difference — or to test for stationarity (the Dickey–Fuller test) before trusting the regression. A trend is not a relationship.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Before regressing time series, ask: is each series stationary? If it wanders like a random walk, difference it first. A high R² between two trending series is usually a mirage.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Time-series errors often remember the past — autocorrelation — which leaves OLS unbiased but makes standard errors too small.</li>\n<li>Durbin–Watson: DW ≈ 2 means no autocorrelation, ≈ 0 strong positive, ≈ 4 strong negative.</li>\n<li>Worked DW examples: streaky residuals [2, 2, 1, 1, −1, −2, −2, −1] give DW = 0.35; alternating residuals [1, −1, 1, −1, 1, −1] give DW = 3.33.</li>\n<li>Lags and differencing model the memory; an AR(1) with |ρ| &lt; 1 is stationary, ρ = 1 is a random walk.</li>\n<li>Regressing two random walks on each other gives a spurious regression — difference first.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Treating a Durbin–Watson near 2 as proof the model is fine. DW only checks first-order autocorrelation; a series can have deeper memory (seasonal patterns, longer lags) that DW misses. Always plot the residuals over time as well.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Celebrating a high R² between two trending series. If both series climb over time, they will look related even when they have nothing to do with each other. Difference first, then judge.</div>\n<p><strong>Ready-to-Work link:</strong> Every forecast in business is a time-series problem, and every time-series regression is checked for autocorrelation before anyone trusts it. If you can compute a DW, read a residual-over-time plot, and difference a wandering series, you can do honest time-series work.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Time-series data", "def": "Observations on one unit over time — GDP each quarter, unemployment each month." },
    { "term": "Cross-sectional data", "def": "Observations on many units at one point in time." },
    { "term": "Autocorrelation (serial correlation)", "def": "Correlation between the error term at time t and at earlier times." },
    { "term": "Positive autocorrelation", "def": "Errors run in streaks — a positive error tends to follow a positive error." },
    { "term": "Negative autocorrelation", "def": "Errors alternate sign from one period to the next." },
    { "term": "Durbin–Watson statistic (DW)", "def": "Σ(et − et−1)² ÷ Σet²; near 2 means no autocorrelation, near 0 positive, near 4 negative." },
    { "term": "Lagged variable", "def": "A variable's value in an earlier period, e.g. Xt−1." },
    { "term": "AR(1) model", "def": "An autoregressive model of order 1: Yt = α + ρYt−1 + ut." },
    { "term": "Differencing", "def": "Using changes ΔYt = Yt − Yt−1 instead of levels, to remove a trend or a random walk." },
    { "term": "Stationary series", "def": "A series whose mean, variance, and correlation pattern do not change over time." },
    { "term": "Random walk", "def": "A series where Yt = Yt−1 + ut: every shock is permanent, so the series wanders." },
    { "term": "Spurious regression", "def": "A misleadingly strong regression between two unrelated trending (non-stationary) series." },
    { "term": "Trend", "def": "A long-run upward or downward movement in a time series." },
    { "term": "Dickey–Fuller test", "def": "A formal test of whether a series has a unit root (is a random walk) or is stationary." }
  ],
  "video": {
    "title": "ARIMA Model Explained Simply | ARIMA Forecasting, ACF, PACF, AIC & BIC",
    "embedUrl": "https://www.youtube.com/embed/SggV98bRc0k",
    "note": "A plain-English tour of AR, MA, and ARIMA models, stationarity, differencing, and how ACF and PACF identify a model. Watch it for the AR(1) intuition and the stationarity section, which this module builds on.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A regression's residuals, in order, are [2, 2, 1, 1, −1, −2, −2, −1]. Compute the Durbin–Watson statistic and interpret it.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The changes e<sub>t</sub> − e<sub>t−1</sub> are 0, −1, 0, −2, −1, 0, 1; their squares are 0, 1, 0, 4, 1, 0, 1, summing to <strong>7</strong>. Step 2: Σe² = 4 + 4 + 1 + 1 + 1 + 4 + 4 + 1 = <strong>20</strong>. Step 3: DW = 7 ÷ 20 = <strong>0.35</strong>. Step 4: 0.35 is far below 2, near 0 — strong <strong>positive autocorrelation</strong>. The residuals run in streaks, so the OLS standard errors are too small and the t-tests overstate significance.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Residuals [1, −1, 1, −1, 1, −1] give DW = 3.33. Explain the calculation in one line and say what it means.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Each change is ±2, squared 4, five times: Σ(e<sub>t</sub> − e<sub>t−1</sub>)² = 20; Σe² = 6; DW = 20 ÷ 6 = <strong>3.33</strong>. Step 2: 3.33 is well above 2, near 4 — <strong>negative autocorrelation</strong>: the errors alternate sign. Step 3: Negative autocorrelation is rarer in economics than positive, but it still invalidates the usual standard errors.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> An AR(1) model is Y<sub>t</sub> = 2 + 0.8Y<sub>t−1</sub> + u<sub>t</sub>. (a) Is the series stationary? (b) If today's value is 50, what is the forecast for tomorrow? (c) What if ρ were 1.0 instead?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Yes — |ρ| = 0.8 &lt; 1, so shocks fade and the series is stationary. Step 2: (b) Forecast: 2 + 0.8 × 50 = 2 + 40 = <strong>42</strong>. Step 3: (c) If ρ = 1.0 the series is a <strong>random walk</strong>: shocks never fade, the series wanders, and it must be differenced before regressing. Step 4: Note the forecast 42 is below today's 50 — with ρ &lt; 1 the series is pulled back toward its long-run mean of 2 ÷ (1 − 0.8) = 10.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Two series — the number of televisions sold and the price of tea in China — both trend upward for 20 years, and regressing one on the other gives R² = 0.91 and a \"significant\" slope. Explain what is happening and what to do.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: This is a <strong>spurious regression</strong>: both series trend, so they look related even though neither causes the other. Step 2: The high R² and significant t come from the shared trend, not from any real relationship. Step 3: The fix is to difference both series and regress the changes on the changes — or test for stationarity first. Step 4: If the differenced regression shows nothing, there was never a relationship; the trend was doing all the work.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A quarterly sales series is 120, 135, 128, 142. Compute the first differences and explain why a forecaster might model the differences instead of the levels.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The differences are 135 − 120 = <strong>15</strong>, 128 − 135 = <strong>−7</strong>, 142 − 128 = <strong>14</strong>. Step 2: The levels trend upward (120 → 142), but the differences bounce around zero with no trend — they look stationary. Step 3: Modeling differences asks \"what makes sales rise or fall this quarter?\" instead of \"what makes the level high?\" — and it avoids the spurious-regression trap. Step 4: Forecasts of differences can be added back to the last level to forecast the next level.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why does positive autocorrelation make OLS t-statistics too large, in one paragraph?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: With positive autocorrelation, the errors run in streaks, so the effective information in the sample is less than n independent observations — ten streaky errors carry less information than ten independent ones. Step 2: The usual standard-error formula assumes independence, so it understates how much the slope would wobble across samples. Step 3: Dividing the slope by a too-small standard error gives a too-large t, so you reject the null too often. Step 4: The fix is to model the autocorrelation (lags, differencing) or use autocorrelation-robust standard errors.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Autocorrelation means:",
      "choices": [
        "Two explanatory variables are correlated",
        "The error term at time t is correlated with errors at earlier times",
        "The error variance changes with X",
        "The slope changes every period"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Autocorrelation is correlation across time in the errors. (a) is multicollinearity. (c) is heteroskedasticity. (d) describes a changing relationship, not autocorrelated errors."
    },
    {
      "q": "Residuals [2, 2, 1, 1, −1, −2, −2, −1] give a Durbin–Watson statistic of:",
      "choices": [
        "0.35",
        "1.00",
        "2.00",
        "3.33"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Σ(e_t − e_{t−1})² = 7 and Σe² = 20, so DW = 7 ÷ 20 = 0.35 — strong positive autocorrelation. (b) and (c) would indicate mild or no autocorrelation. (d) is the DW for the alternating residuals [1, −1, 1, −1, 1, −1]."
    },
    {
      "q": "A Durbin–Watson statistic near 0 indicates:",
      "choices": [
        "No autocorrelation",
        "Strong positive autocorrelation",
        "Strong negative autocorrelation",
        "Heteroskedasticity"
      ],
      "answer": 1,
      "explanation": "Correct: (b). DW runs 0 to 4: near 0 is strong positive, near 2 is none, near 4 is strong negative. (a) is DW ≈ 2. (c) is DW ≈ 4. (d) is a different problem, diagnosed from a residual plot, not DW."
    },
    {
      "q": "In the AR(1) model Yt = 2 + 0.8Yt−1 + ut, if today's value is 50, tomorrow's forecast is:",
      "choices": [
        "40",
        "42",
        "50",
        "52"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 2 + 0.8 × 50 = 42. (a) forgets the intercept 2. (c) assumes a random walk with no pullback. (d) adds instead of applying 0.8."
    },
    {
      "q": "A random walk is a series with:",
      "choices": [
        "ρ = 0 in the AR(1) model",
        "ρ = 1 in the AR(1) model — shocks are permanent",
        "No variance at all",
        "A constant mean and no trend"
      ],
      "answer": 1,
      "explanation": "Correct: (b). With ρ = 1, Yt = Yt−1 + ut and every shock lasts forever. (a) is white noise — no memory at all. (c) is impossible for a random walk, whose variance grows with time. (d) describes a stationary series, the opposite."
    },
    {
      "q": "A spurious regression is:",
      "choices": [
        "A regression with a low R²",
        "A misleadingly strong regression between two unrelated trending series",
        "A regression run on the wrong software",
        "A regression with no intercept"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Two wandering series can show a high R² and significant slope from their shared trend alone. (a) is just a weak fit. (c) and (d) are not the meaning of spurious."
    },
    {
      "q": "Differencing a time series means:",
      "choices": [
        "Subtracting the mean from every observation",
        "Using changes ΔYt = Yt − Yt−1 instead of levels",
        "Dividing by the standard deviation",
        "Dropping the first observation"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Differencing takes period-to-period changes, which removes trends and random walks. (a) is centering. (c) is standardizing. (d) is just losing one row."
    },
    {
      "q": "Why does positive autocorrelation make t-statistics too large?",
      "choices": [
        "Because it biases the slope upward",
        "Because streaky errors carry less information than independent ones, so the usual standard error is too small",
        "Because it raises R² to 1",
        "Because it makes the sample size effectively larger"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The standard-error formula assumes independence; streaks mean less real information, so the true uncertainty is larger than computed. (a) is false — OLS stays unbiased. (c) is false — R² does not go to 1. (d) is backwards — the effective sample size shrinks, not grows."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Time Series & Autocorrelation: Quick Reference</h3>\n<p><strong>Core idea:</strong> In time series the errors remember the past, so OLS standard errors are too small unless you model the memory.</p>\n<div class=\"formula\">DW = Σ(e<sub>t</sub> − e<sub>t−1</sub>)² / Σe<sub>t</sub>² &nbsp;|&nbsp; DW ≈ 2: none · ≈ 0: positive · ≈ 4: negative</div>\n<div class=\"formula\">AR(1): Y<sub>t</sub> = α + ρY<sub>t−1</sub> + u<sub>t</sub> &nbsp;|&nbsp; Differencing: ΔY<sub>t</sub> = Y<sub>t</sub> − Y<sub>t−1</sub></div>\n<p><strong>Worked anchors:</strong> streaky residuals [2, 2, 1, 1, −1, −2, −2, −1] → DW = 0.35 (strong positive); alternating [1, −1, 1, −1, 1, −1] → DW = 3.33 (negative). AR(1) 2 + 0.8Y<sub>t−1</sub>, Y<sub>t</sub> = 50 → forecast 42.</p>\n<p><strong>Stationarity:</strong> |ρ| &lt; 1 stationary; ρ = 1 random walk — difference it first. Two random walks regressed on each other give a spurious regression.</p>\n<p><strong>Watch out:</strong> DW only checks first-order autocorrelation — plot residuals over time too. Never trust a high R² between two trending series.</p>\n<p><strong>Self-check:</strong> Given a residual sequence, compute DW by hand; given an AR(1), forecast one step ahead and state whether it is stationary.</p>\n"
};
