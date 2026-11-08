module.exports = {
  "number": 12,
  "slug": "course-review-statistics-as-evidence",
  "title": "Course Review: Statistics as Evidence",
  "estTime": "3–4 hours",
  "objectives": [
    "Trace the full inference path from a question to a conclusion.",
    "Choose the right tool — describe, estimate, test, compare, or model — for a question.",
    "Read a statistical claim in the news and spot its weak points.",
    "Recompute the course's key numbers from scratch.",
    "Explain what statistics can and cannot prove."
  ],
  "sections": [
    {
      "heading": "The Whole Course in One Path",
      "html": "<p>Every statistical analysis in this course follows the same path. (1) <strong>Ask</strong> a question and name the population. (2) <strong>Describe</strong> the data — center, spread, shape — with the tools of Modules 1–2: the rents had mean $1154.17, median $1075.00, sample SD $372.62. (3) <strong>Model</strong> the uncertainty with probability and distributions (Modules 3–4): the binomial, the normal, the z-score. (4) <strong>Estimate</strong> with sampling distributions and the CLT (Module 5), then build confidence intervals (Module 6): the wage interval was ($48.08, $55.92). (5) <strong>Test</strong> with hypothesis tests (Modules 7–9): the factory test gave z = 1.60, p = 0.0548. (6) <strong>Model relationships</strong> with regression (Modules 10–11): ŷ = 9.52 + 2.15x for the shops, R² = 0.9660.</p><p>If you can walk that path for a new question — describe, model, estimate, test, relate — you can do statistics. The formulas are the vocabulary; the path is the grammar.</p><div class=\"callout\"><strong>Key idea:</strong> Statistics is not a bag of separate tricks. It is one path: question → data → description → uncertainty → estimate → test → model.</div>"
    },
    {
      "heading": "Choosing the Right Tool",
      "html": "<p>The most common exam mistake is not arithmetic — it is picking the wrong tool. Use this decision guide. One quantitative variable, describe it: mean, median, SD (Module 2). One mean, estimate it: confidence interval (Module 6). One mean, test a claim about it: one-sample z- or t-test (Module 7). Two means: two-sample or paired t-test (Module 8). Categories: chi-square (Module 9). Three or more means: ANOVA (Module 9). Two quantitative variables, straight line: correlation and regression (Module 10). Several predictors: multiple regression (Module 11).</p><p>Before any of that, ask three questions: What kind of data is it? What is the population and what was the sample? What is the question — describe, estimate, test, or predict? The answers pick the tool, and the tool picks the formula.</p><div class=\"callout\"><strong>Key idea:</strong> Name the data type and the question before you touch a formula. Most wrong answers start with the right arithmetic on the wrong test.</div>"
    },
    {
      "heading": "Reading Statistics in the Wild",
      "html": "<p>Headlines are where statistics goes to be misused. When you read “the average household earns $80,000,” ask: mean or median? (Income is skewed; the median is usually far lower.) When a poll says “52% ± 3%,” ask: what was n, and was the sample random? (The margin of error assumes a random sample.) When a study says “significant at p = 0.04,” ask: significant <em>and</em> big? (A tiny effect in a huge sample is significant and useless.) When a chart shows a correlation, ask: what third variable could drive both?</p><p>And always ask who benefits from the number. A company quoting the mean salary of its workers, a politician quoting the unemployment rate without the labor-force participation rate, a study funded by the industry it praises — the number may be correct and the impression false. Statistics is a tool for honesty, but only in honest hands.</p><div class=\"formula\">Checklist: mean or median? &nbsp;|&nbsp; n and random? &nbsp;|&nbsp; significant AND big? &nbsp;|&nbsp; what third variable? &nbsp;|&nbsp; who benefits?</div>"
    },
    {
      "heading": "What Statistics Cannot Prove",
      "html": "<p>Statistics cannot prove causation from observational data — only a randomized experiment (or a very careful design) can. It cannot prove a null hypothesis — failing to reject is not proof. It cannot rescue a bad sample: no test fixes a biased survey. It cannot tell you what to do — a p-value of 0.03 does not say “approve the drug”; it says “the data are surprising under the null,” and the decision needs costs, benefits, and judgment.</p><p>What it can do is narrower and more valuable: it can measure uncertainty honestly, separate signal from noise, and tell you how much you do not know. That is the whole job. An economist who says “the estimate is $52 an hour, plus or minus $4, and here is what would change my mind” is doing statistics right.</p><div class=\"callout\"><strong>Key idea:</strong> The honest sentence in statistics is never “this proves it.” It is “here is the estimate, here is the uncertainty, and here is what the data cannot tell us.”</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>The path: question → describe → model uncertainty → estimate → test → relate.</li><li>Pick the tool by data type and question, not by which formula you remember best.</li><li>Read headlines with the checklist: mean or median, n and random, significant and big, third variable, who benefits.</li><li>Key numbers to carry forward: rent mean $1154.17 (SD $372.62); wage CI ($48.08, $55.92); factory z = 1.60, p = 0.0548; shops ŷ = 9.52 + 2.15x, R² = 0.9660.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Memorizing formulas without the path. On the final exam, the first mark is always for choosing the right tool — the arithmetic is the easy part.</div><div class=\"callout\"><strong>Common mistake:</strong> Overclaiming. “Significant” does not mean “big,” “associated” does not mean “caused,” and “fail to reject” does not mean “proven.”</div><p><strong>Ready-to-Work link:</strong> You now have the full toolkit of GVSU STA 215/225 and STA 216: describing, estimating, testing, comparing, and modeling. The next course, eco131, puts it to work on real economic data — and eco221 turns the regression in Module 11 into econometrics.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Statistical inference",
      "def": "The whole path from a sample to a conclusion about a population: estimation and testing."
    },
    {
      "term": "Descriptive statistics",
      "def": "Summarizing data: center, spread, shape, charts."
    },
    {
      "term": "Inferential statistics",
      "def": "Using a sample to estimate parameters and test hypotheses about a population."
    },
    {
      "term": "Estimation",
      "def": "Guessing a parameter with a point estimate or a confidence interval."
    },
    {
      "term": "Hypothesis testing",
      "def": "Deciding whether data contradict a null hypothesis, using a test statistic and a p-value."
    },
    {
      "term": "Modeling",
      "def": "Describing relationships between variables, as in regression."
    },
    {
      "term": "Sampling variability",
      "def": "The fact that statistics differ from sample to sample — the reason inference is needed at all."
    },
    {
      "term": "Margin of error",
      "def": "Half the width of a confidence interval: critical value × standard error."
    },
    {
      "term": "P-value",
      "def": "The probability of data this extreme if the null hypothesis were true."
    },
    {
      "term": "Statistical significance",
      "def": "A result with p ≤ α; surprising enough under H₀ to reject it."
    },
    {
      "term": "Practical significance",
      "def": "Whether an effect is large enough to matter in the real world."
    },
    {
      "term": "Causation",
      "def": "One thing making another happen; not established by correlation or by observational regression."
    },
    {
      "term": "Confounding variable",
      "def": "A third variable that explains an apparent association between two others."
    },
    {
      "term": "Random sample",
      "def": "A sample chosen by chance, so inference tools (which assume randomness) are valid."
    },
    {
      "term": "Reproducibility",
      "def": "The idea that another analyst with the same data and methods should get the same answer."
    },
    {
      "term": "Statistical literacy",
      "def": "The ability to read, question, and use statistical claims in everyday life."
    }
  ],
  "video": {
    "title": "Inferential Statistics FULL Tutorial: T-Test, ANOVA, Chi-Square, Correlation & Regression Analysis",
    "embedUrl": "https://www.youtube.com/embed/6E6pB5JFLgM",
    "note": "Grad Coach reviews the whole inferential toolkit — t-tests, ANOVA, chi-square, correlation, and regression — in one sitting. Watch it as your final-exam revision.",
    "more": [
      {
        "title": "StatQuest: The Central Limit Theorem, Clearly Explained!!!",
        "url": "https://www.youtube.com/watch?v=YAlJCEDH2uY"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A researcher asks: “Do workers with a college degree earn more than workers without one?” (a) What is the population? (b) What kind of data is the outcome? (c) Which test from this course answers the question?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The <strong>population</strong> is all workers (or the workers in the area studied). Step 2: The outcome, earnings, is <strong>quantitative continuous</strong> data. Step 3: The question compares two group means, so the tool is a <strong>two-sample t-test</strong> (Module 8) — or a regression with a degree dummy (Module 11).</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Recompute from scratch: the rents are 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1400, 2200. (a) Find the mean and median. (b) Find the sample standard deviation. (c) What is the z-score of the $2,200 rent?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Sum = 13,850; mean = 13,850 ÷ 12 = <strong>$1154.17</strong>. Median = (1,050 + 1,100) ÷ 2 = <strong>$1075.00</strong>. Step 2: The sum of squared deviations is about 1,527,291.67; sample variance = 1,527,291.67 ÷ 11 = 138,844.70, so the sample SD = <strong>$372.62</strong>. Step 3: z = (2,200 − 1154.17) ÷ 372.62 = <strong>2.81</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A poll of n = 400 finds 55% support for a policy. (a) Build the 95% confidence interval for the true proportion. (b) Test H₀: p = 0.50 at α = 0.05. (c) Do the interval and the test agree? Show why.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: SE = √(0.55 × 0.45 ÷ 400) = √0.000619 = 0.0249; margin = 1.96 × 0.0249 = 0.0488; the interval is 0.55 ± 0.0488 = <strong>(0.501, 0.599)</strong>. Step 2: Under H₀, SE = √(0.25 ÷ 400) = 0.025; z = (0.55 − 0.50) ÷ 0.025 = 2.00; two-sided p = <strong>0.0455</strong> — reject H₀. Step 3: <strong>Yes</strong> — 0.50 sits just outside the interval (0.501, 0.599), matching the rejection. (Both are borderline: the result is barely significant.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> The shop regression is ŷ = 9.52 + 2.15x (sales in $000, advertising in $000), R² = 0.9660. (a) Predict sales for $6,000 of advertising. (b) Interpret R². (c) A manager says, “R² is 0.97, so advertising causes sales.” Correct her.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: ŷ = 9.52 + 2.15 × 6 = <strong>$22.45k</strong>. Step 2: R² = 0.9660 means about <strong>96.6%</strong> of the variation in sales is explained by advertising. Step 3: The correction: R² measures <strong>fit, not cause</strong>. These are observational data — bigger shops may both advertise and sell more — so the regression cannot prove advertising causes sales.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A headline says “New study: coffee drinkers live longer (p = 0.01).” List four questions you would ask before believing the headline, and say what each one is checking.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: <strong>Was the study randomized or observational?</strong> — observational data cannot prove coffee causes longer life. Step 2: <strong>How big was the effect?</strong> — p = 0.01 says the result is unlikely under the null, not that the extra lifespan is large. Step 3: <strong>What was the sample, and was it random?</strong> — a biased sample (healthy volunteers, one country) may not generalize. Step 4: <strong>What third variables were controlled?</strong> — coffee drinkers may differ in income, exercise, or smoking, and any of those could explain the gap.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Write the six-step inference path from this module and, for each step, name the module that teaches it.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: <strong>Ask</strong> — Module 1 (populations, samples, questions). Step 2: <strong>Describe</strong> — Module 2 (center, spread, shape). Step 3: <strong>Model uncertainty</strong> — Modules 3–4 (probability, distributions). Step 4: <strong>Estimate</strong> — Modules 5–6 (sampling distributions, confidence intervals). Step 5: <strong>Test</strong> — Modules 7–9 (hypothesis tests, two groups, chi-square/ANOVA). Step 6: <strong>Model relationships</strong> — Modules 10–11 (correlation, simple and multiple regression).</p>"
    }
  ],
  "quiz": [
    {
      "q": "The first step in any statistical analysis is:",
      "choices": [
        "Compute the standard deviation",
        "Ask a question and name the population",
        "Run a hypothesis test",
        "Fit a regression"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Everything follows from the question and the population. (a) Describing comes after the question. (c) Testing comes much later. (d) Modeling is the last step, not the first."
    },
    {
      "q": "To compare the means of two independent groups, you use:",
      "choices": [
        "A one-sample t-test",
        "A two-sample t-test",
        "A chi-square test",
        "A goodness-of-fit test"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Two independent group means need a two-sample test. (a) is for one mean against a value. (c) and (d) are for categorical counts."
    },
    {
      "q": "To test whether two categorical variables are associated, you use:",
      "choices": [
        "A t-test",
        "ANOVA",
        "A chi-square test of independence",
        "Simple regression"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Categorical data need chi-square. (a) compares means. (b) compares three or more means. (d) models two quantitative variables."
    },
    {
      "q": "The factory test gave z = 1.60 and one-sided p = 0.0548. The correct conclusion at α = 0.05 is:",
      "choices": [
        "Reject H₀ — the mean is above 100",
        "Fail to reject H₀",
        "The mean is exactly 100",
        "The test is invalid"
      ],
      "answer": 1,
      "explanation": "Correct: (b). p = 0.0548 > 0.05, so the evidence is not strong enough. (a) needs p ≤ 0.05. (c) Failing to reject never proves the null. (d) The test is valid — a non-significant result is a result."
    },
    {
      "q": "The shop regression has R² = 0.9660. This means:",
      "choices": [
        "Advertising causes sales",
        "About 97% of the variation in sales is explained by advertising",
        "The slope is 0.97",
        "Sales are 97% advertising"
      ],
      "answer": 1,
      "explanation": "Correct: (b). R² is the share of variation explained. (a) Observational data cannot prove causation. (c) The slope is 2.15. (d) R² is not a share of sales."
    },
    {
      "q": "A result can be statistically significant but practically unimportant when:",
      "choices": [
        "The sample is huge and the effect is tiny",
        "The p-value is large",
        "The sample is small",
        "The effect is huge"
      ],
      "answer": 0,
      "explanation": "Correct: (a). With a huge sample, even a trivial difference clears p = 0.05. (b) A large p-value means not significant at all. (c) A small sample makes significance harder, not easier. (d) A huge effect is practically important."
    },
    {
      "q": "“Fail to reject H₀” means:",
      "choices": [
        "H₀ is proven true",
        "The data were not surprising enough under H₀ to reject it",
        "The test was run wrong",
        "The p-value was exactly 0.05"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It is a statement about the evidence, not about the truth of H₀. (a) No test proves a null. (c) A non-significant result is a valid outcome. (d) The p-value can be any value above α."
    },
    {
      "q": "The best description of what statistics can do is:",
      "choices": [
        "Prove causation from observational data",
        "Measure uncertainty honestly and separate signal from noise",
        "Prove the null hypothesis",
        "Replace judgment in decisions"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Statistics quantifies what the data can and cannot say. (a) Causation needs experiments or careful design. (c) Nulls are never proven. (d) Decisions need costs, benefits, and judgment on top of the statistics."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Course Review: Quick Reference</h3>\n<p><strong>The path:</strong> Ask (M1) → Describe (M2) → Model uncertainty (M3–M4) → Estimate (M5–M6) → Test (M7–M9) → Model relationships (M10–M11).</p>\n<p><strong>Tool picker:</strong> One mean → z/t interval or test · Two means → two-sample or paired t · Categories → chi-square · 3+ means → ANOVA · Two quantitative variables → correlation/regression · Several predictors → multiple regression.</p>\n<div class=\"formula\">Estimate &plusmn; margin of error &nbsp;|&nbsp; p-value = P(data this extreme | H&#8320;) &nbsp;|&nbsp; R&sup2; = share of variation explained</div>\n<p><strong>Headline checklist:</strong> Mean or median? · n and random? · Significant AND big? · What third variable? · Who benefits?</p>\n<p><strong>Key numbers:</strong> Rents: mean $1154.17, median $1075.00, SD $372.62. Wage CI: ($48.08, $55.92). Factory: z = 1.60, p = 0.0548. Shops: &yhat; = 9.52 + 2.15x, R&sup2; = 0.9660.</p>\n<p><strong>Watch out:</strong> Significant ≠ big. Associated ≠ caused. Fail to reject ≠ proven. Next: eco131 (data analytics) and eco221 (econometrics) build on everything here.</p>\n<p><strong>Self-check:</strong> Without looking, write the six-step path and the tool for each of these: one mean, two means, categories, three means, two quantitative variables.</p>\n"
};
