// eco221 - Module 1: Econometrics: Statistics Meets Economic Theory
module.exports = {
  "number": 1,
  "slug": "econometrics-statistics-meets-economic-theory",
  "title": "Econometrics: Statistics Meets Economic Theory",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what econometrics is and how it combines economic theory, statistics, and data.",
    "Distinguish a population relationship from a sample estimate.",
    "State the three questions econometrics answers: describing, testing, and forecasting.",
    "Explain why economic data are mostly observational, not experimental.",
    "Describe the steps of an econometric study, from question to conclusion."
  ],
  "sections": [
    {
      "heading": "What Econometrics Is",
      "html": "<p><strong>Econometrics</strong> is the use of statistical methods to test economic ideas against data and to forecast economic outcomes. The word joins <em>economics</em> and <em>metrics</em> (measurement). Economic theory says, for example, that higher prices reduce the quantity demanded; econometrics asks, \"By how much, in this market, with these data?\" and then measures the answer.</p>\n<p>Every econometric study has three ingredients. <strong>Economic theory</strong> says which variables should matter and in which direction. <strong>Statistics</strong> (from eco121) supplies the tools for estimating and judging uncertainty. <strong>Data</strong> — prices, wages, GDP, survey answers — supply the evidence. Remove any one ingredient and the work falls apart: theory without data is speculation, data without theory is a fishing trip, and both without statistics is guesswork.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Econometrics turns \"I think X affects Y\" into a number with a margin of error: \"Each extra $1,000 of advertising is associated with about $2,000 more sales, give or take $540.\" The number and the uncertainty are both part of the answer.</div>"
    },
    {
      "heading": "Population, Sample, and the Regression Line",
      "html": "<p>The <strong>population regression function</strong> is the true relationship in the whole population — the line we would draw if we could observe everyone. We almost never can. Instead we take a <strong>sample</strong> and estimate a <strong>sample regression line</strong> from it. The sample line is our best guess at the population line, and it changes a little every time we draw a new sample. That sampling variation is why econometrics is full of standard errors and tests: they measure how much our guess might wobble.</p>\n<p>Write the population relationship as Y = β<sub>0</sub> + β<sub>1</sub>X + u. Here Y is the <strong>dependent variable</strong> (the outcome we explain), X is the <strong>independent variable</strong> (the explanatory variable), β<sub>0</sub> is the <strong>intercept</strong> (the value of Y when X is zero), β<sub>1</sub> is the <strong>slope</strong> (how much Y changes when X rises by one unit), and u is the <strong>error term</strong> (everything else that affects Y and is not in the model). The sample version, Ŷ = b<sub>0</sub> + b<sub>1</sub>X, uses estimated coefficients b<sub>0</sub> and b<sub>1</sub> — Module 2 shows how ordinary least squares finds them.</p>\n<div class=\"formula\">Population: Y = β<sub>0</sub> + β<sub>1</sub>X + u &nbsp;|&nbsp; Sample: Ŷ = b<sub>0</sub> + b<sub>1</sub>X</div>"
    },
    {
      "heading": "Three Jobs: Describe, Test, Forecast",
      "html": "<p>Econometrics does three jobs. First, <strong>description</strong>: summarize a relationship, such as \"wages rise about 8% with each extra year of schooling.\" Second, <strong>testing</strong>: check a theory's prediction, such as \"does a minimum-wage rise reduce teenage employment?\" The answer comes with a test that says whether the data are consistent with no effect. Third, <strong>forecasting</strong>: predict what comes next, such as next quarter's sales or unemployment, and say how far off the forecast is likely to be.</p>\n<p>The same regression can do all three jobs, but the standards differ. A description only needs a careful summary. A test needs a null hypothesis and a significance level (Module 3). A forecast needs accuracy measures and a holdout sample (Module 7). Knowing which job you are doing keeps you from grading a forecast by how well it describes the past — a mistake Module 7 explains.</p>"
    },
    {
      "heading": "Observational Data: The Central Difficulty",
      "html": "<p>In a laboratory experiment, the researcher assigns the treatment: half the plants get fertilizer, half do not, and the difference in growth is the effect. Economists almost never get to do that. We cannot randomly assign people to years of schooling, or countries to recessions. We work with <strong>observational data</strong> — data from the world as it happened, where people chose their schooling, firms chose their prices, and governments chose their policies.</p>\n<p>Because the world did not randomize, differences we observe may come from the variable we study or from something else entirely. Students who study more may also be more motivated; firms that advertise more may also have better products. That is why Module 9 is devoted to causality: a regression can show that two things move together, but moving together is not the same as one causing the other. <strong>Correlation is not causation</strong> — the sentence you will see in every module of this course.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Econometrics is largely the art of squeezing causal answers out of non-experimental data. Every method in this course — controls, dummies, instruments — is a different way of coping with the fact that the world did not run an experiment for us.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Econometrics = economic theory + statistics + data, used to test ideas and forecast.</li>\n<li>The population line Y = β<sub>0</sub> + β<sub>1</sub>X + u is the truth; the sample line Ŷ = b<sub>0</sub> + b<sub>1</sub>X is our estimate of it.</li>\n<li>β<sub>0</sub> is the intercept, β<sub>1</sub> is the slope, u is the error term — everything left out.</li>\n<li>The three jobs: describe a relationship, test a theory, forecast the future.</li>\n<li>Economic data are mostly observational, so causation is hard — that is the course's central problem.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Calling the estimated slope the \"true\" effect. b<sub>1</sub> is an estimate from one sample; the true β<sub>1</sub> is unknown, and another sample would give a slightly different b<sub>1</sub>. Report the estimate with its standard error, never alone.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying a regression \"proves\" a theory. A regression can support a theory or contradict it, but one regression on one dataset never proves anything — that is why we replicate, control, and test.</div>\n<p><strong>Ready-to-Work link:</strong> Every analyst job that touches data — pricing, marketing, forecasting, policy — asks the econometric question in plain English: \"How much does X move Y, and how sure are we?\" If you can answer that in one sentence, you understand Module 1.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Econometrics", "def": "The use of statistical methods to test economic ideas against data and to forecast economic outcomes." },
    { "term": "Dependent variable (Y)", "def": "The outcome variable a regression tries to explain or predict." },
    { "term": "Independent variable (X)", "def": "An explanatory variable used to explain or predict the dependent variable." },
    { "term": "Population regression function", "def": "The true relationship between Y and X in the whole population." },
    { "term": "Sample regression line", "def": "The estimated line fitted to a sample, Ŷ = b0 + b1X, used to guess the population line." },
    { "term": "Intercept (β0)", "def": "The value of Y when X equals zero; where the regression line crosses the Y-axis." },
    { "term": "Slope (β1)", "def": "How much Y changes, on average, when X rises by one unit." },
    { "term": "Error term (u)", "def": "Everything that affects Y besides X — omitted factors, randomness, and measurement error." },
    { "term": "Observational data", "def": "Data collected from the world as it happened, without the researcher assigning treatments." },
    { "term": "Experiment", "def": "A study in which the researcher randomly assigns a treatment, so differences in outcomes can be read as causal." },
    { "term": "Correlation", "def": "Two variables moving together in the data; it does not by itself show that one causes the other." },
    { "term": "Forecasting", "def": "Using a fitted model to predict future values of a variable, with a stated margin of error." },
    { "term": "Estimator", "def": "A rule or formula, such as OLS, that produces an estimate of a population parameter from a sample." },
    { "term": "Estimate", "def": "The numerical value an estimator produces from one particular sample." }
  ],
  "video": {
    "title": "Introduction to Econometrics [Visually and simply explained]",
    "embedUrl": "https://www.youtube.com/embed/-lS83g9T9QI",
    "note": "A clear visual tour of what econometrics is, why we study it, the types of data, and the basic parts of an econometric model. Watch it once for the big picture, then match its model components to the Y = β0 + β1X + u formula in this module.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what econometrics is, and name its three ingredients.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Econometrics uses statistical methods to test economic ideas against data and to forecast outcomes. Step 2: Its three ingredients are economic theory (which variables should matter and in which direction), statistics (the tools for estimating and judging uncertainty), and data (the evidence). Step 3: Without theory you fish for patterns; without data you speculate; without statistics you guess.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A researcher studies the effect of class size on test scores. Identify Y, X, β<sub>0</sub>, β<sub>1</sub>, and u in the model Y = β<sub>0</sub> + β<sub>1</sub>X + u.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Y is the test score (the outcome to explain). Step 2: X is class size (the explanatory variable). Step 3: β<sub>0</sub> is the expected test score in a class of zero pupils — a baseline, not a real class. Step 4: β<sub>1</sub> is the average change in test score from one extra pupil in the class (expected to be negative). Step 5: u holds everything else that affects scores — teacher quality, home background, school funding — that is not in the model.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A fitted line is Ŷ = 40 + 2.5X, where X is advertising spending in $1,000s and Y is sales in $1,000s. (a) What are predicted sales when advertising is $4,000? (b) What does the slope 2.5 mean in plain words?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: X = 4 (because X is measured in $1,000s), so Ŷ = 40 + 2.5 × 4 = 40 + 10 = <strong>50</strong>, i.e. $50,000 of predicted sales. Step 2: The slope 2.5 means each extra $1,000 of advertising is associated with $2,500 more sales on average. Step 3: \"Associated with\" is deliberate — this line alone does not prove advertising caused the extra sales.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Explain the difference between the population regression function and the sample regression line, and why the difference matters.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The population function Y = β<sub>0</sub> + β<sub>1</sub>X + u describes the true relationship for everyone. Step 2: The sample line Ŷ = b<sub>0</sub> + b<sub>1</sub>X is estimated from one sample and guesses the population line. Step 3: It matters because a different sample gives different b<sub>0</sub> and b<sub>1</sub> — so every estimate carries sampling uncertainty, which standard errors and tests (Modules 2–3) measure.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Give one example each of econometrics doing its three jobs: describing, testing, and forecasting.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Describing — \"Each extra year of schooling is associated with about 8% higher wages.\" Step 2: Testing — \"A minimum-wage rise had no statistically detectable effect on teenage employment in this state.\" Step 3: Forecasting — \"Next quarter's unemployment is forecast at 4.2%, with a typical error of about 0.3 percentage points.\" Step 4: The same regression can serve all three jobs, but each job is judged by a different standard.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why can't a study of schooling and wages run like a laboratory experiment, and what problem does that create?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: You cannot randomly assign people to 10 versus 16 years of schooling — people choose schooling, and their choices reflect ability, motivation, and family background. Step 2: The data are observational, not experimental. Step 3: The problem is that the wage gap between more- and less-schooled workers may reflect ability or background rather than schooling itself — so the regression slope may not be a causal effect. Step 4: Coping with that is the central problem of the whole course.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Econometrics is best defined as:",
      "choices": [
        "The study of economic history",
        "Using statistical methods to test economic ideas against data and forecast outcomes",
        "Collecting data without any theory",
        "Proving economic theories with certainty"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Econometrics joins theory, statistics, and data to test ideas and forecast. (a) is economic history, a different field. (c) leaves out theory and statistics. (d) is impossible — one regression never proves a theory."
    },
    {
      "q": "In Y = β0 + β1X + u, the symbol u stands for:",
      "choices": [
        "The slope of the regression line",
        "The sample size",
        "The error term — everything affecting Y besides X",
        "The predicted value of Y"
      ],
      "answer": 2,
      "explanation": "Correct: (c). u holds omitted factors, randomness, and measurement error. (a) is β1. (b) is n, not u. (d) is Ŷ, the fitted value, not the error."
    },
    {
      "q": "The slope β1 measures:",
      "choices": [
        "The value of Y when X is zero",
        "How much Y changes, on average, when X rises by one unit",
        "The number of observations",
        "The size of the error term"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The slope is the per-unit change in Y. (a) is the intercept β0. (c) is the sample size n. (d) is measured by the error term's variance, not by β1."
    },
    {
      "q": "The population regression function differs from the sample regression line because:",
      "choices": [
        "They use different variables",
        "The population line is the truth for everyone; the sample line is an estimate from one sample",
        "The sample line is always exactly correct",
        "The population line is never a straight line"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The population line is the unknown truth; the sample line estimates it and wobbles from sample to sample. (a) Both use the same Y and X. (c) reverses the truth — the sample line is the estimate. (d) The population line can be straight; that is the linear model."
    },
    {
      "q": "Which of these is a forecasting job for econometrics?",
      "choices": [
        "Summarizing how wages vary with schooling",
        "Testing whether a minimum wage cut jobs",
        "Predicting next quarter's unemployment rate",
        "Listing the assumptions of a model"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Forecasting predicts future values. (a) is description. (b) is testing. (d) is model setup, not a job in itself."
    },
    {
      "q": "Economic data are mostly observational, which means:",
      "choices": [
        "The researcher randomly assigned the treatment",
        "The data come from the world as it happened, without random assignment",
        "The data are always wrong",
        "No statistics are needed to analyze them"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Observational data record choices people and firms actually made. (a) describes an experiment, the opposite. (c) is false — observational data can be excellent. (d) is false — statistics are exactly what we need."
    },
    {
      "q": "If Ŷ = 40 + 2.5X with X in $1,000s of advertising and Y in $1,000s of sales, predicted sales at X = 6 are:",
      "choices": [
        "$42,500",
        "$55,000",
        "$65,000",
        "$150,000"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Ŷ = 40 + 2.5 × 6 = 40 + 15 = 55, in $1,000s, so $55,000. (a) adds 2.5 once instead of six times. (c) is 40 + 25, using X = 10. (d) multiplies 2.5 × 60, mixing up the units."
    },
    {
      "q": "Why does 'correlation is not causation' matter in econometrics?",
      "choices": [
        "Because correlations are always zero in economics",
        "Because two variables can move together for a third reason, so the regression slope may not be a causal effect",
        "Because regressions never use correlated variables",
        "Because causation can never be studied at all"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A common cause or reverse causation can create the correlation. (a) is false — correlations in economics are often large. (c) is false — regressions routinely use correlated variables. (d) is too strong — causation can be studied, but it needs care, which is Module 9's subject."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — Econometrics: Quick Reference</h3>\n<p><strong>Core idea:</strong> Econometrics = economic theory + statistics + data, used to test ideas and forecast.</p>\n<div class=\"formula\">Population: Y = β<sub>0</sub> + β<sub>1</sub>X + u &nbsp;|&nbsp; Sample: Ŷ = b<sub>0</sub> + b<sub>1</sub>X</div>\n<p><strong>Symbols:</strong> Y = dependent variable (outcome) · X = independent variable (explanatory) · β<sub>0</sub> = intercept (Y when X = 0) · β<sub>1</sub> = slope (change in Y per one-unit rise in X) · u = error term (everything else).</p>\n<p><strong>Three jobs:</strong> describe a relationship · test a theory · forecast the future.</p>\n<p><strong>Central difficulty:</strong> economic data are mostly observational, not experimental — so a slope shows association, and causation needs extra care.</p>\n<p><strong>Watch out:</strong> b<sub>1</sub> is an estimate, not the truth; always report it with its standard error. Correlation is not causation.</p>\n<p><strong>Self-check:</strong> Pick a headline claim (\"X raises Y\") and name Y, X, and three things hiding in u.</p>\n"
};
