// eco221 - Module 3: Hypothesis Testing in Regression
module.exports = {
  "number": 3,
  "slug": "hypothesis-testing-in-regression",
  "title": "Hypothesis Testing in Regression",
  "estTime": "3–4 hours",
  "objectives": [
    "State null and alternative hypotheses for a regression slope.",
    "Compute a t-statistic from an estimate and its standard error.",
    "Use a t-table critical value to decide whether to reject the null.",
    "Interpret a p-value and a confidence interval in plain words.",
    "Explain the difference between statistical significance and practical importance."
  ],
  "sections": [
    {
      "heading": "The Question: Is the Slope Really Different from Zero?",
      "html": "<p>An estimated slope of 2 could mean advertising truly raises sales — or it could be noise from one lucky sample. <strong>Hypothesis testing</strong> asks whether the data are consistent with no effect at all. The <strong>null hypothesis</strong> is H<sub>0</sub>: β<sub>1</sub> = 0 (X has no effect on Y). The <strong>alternative hypothesis</strong> is usually H<sub>1</sub>: β<sub>1</sub> ≠ 0 (X has some effect, in either direction) — a <strong>two-sided test</strong>.</p>\n<p>The logic is the same as in eco121: assume the null is true, then ask how surprising our estimate would be. If b<sub>1</sub> is many standard errors away from zero, the null looks implausible and we <strong>reject</strong> it. If b<sub>1</sub> is close to zero relative to its standard error, the data are consistent with no effect and we <strong>fail to reject</strong> the null. \"Fail to reject\" is deliberate: we never prove the null is true, we only find no evidence against it.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A hypothesis test does not ask \"is the slope big?\" It asks \"is the slope big <em>compared with its standard error</em>?\" A slope of 0.5 with a standard error of 0.1 is strong evidence; a slope of 50 with a standard error of 100 is no evidence at all.</div>"
    },
    {
      "heading": "The t-Statistic and the Standard Error",
      "html": "<p>The <strong>standard error</strong> of the slope, SE(b<sub>1</sub>), measures how much b<sub>1</sub> would wobble across different samples. It is smaller when the sample is larger, when X varies more, and when the residuals are smaller. Its formula is SE(b<sub>1</sub>) = s ÷ √Σ(X<sub>i</sub> − x̄)², where s = √[SSE ÷ (n − 2)] is the <strong>standard error of the regression</strong>, the typical size of a residual. The (n − 2) appears because estimating two coefficients (b<sub>0</sub> and b<sub>1</sub>) uses up two degrees of freedom.</p>\n<p>The <strong>t-statistic</strong> is t = (b<sub>1</sub> − 0) ÷ SE(b<sub>1</sub>): the estimate divided by its standard error, i.e. how many standard errors the estimate sits from zero. Under the null hypothesis, t follows a <strong>t-distribution</strong> with n − 2 degrees of freedom.</p>\n<div class=\"formula\">s = √(SSE / (n − 2)) &nbsp;|&nbsp; SE(b<sub>1</sub>) = s / √Σ(X<sub>i</sub> − x̄)² &nbsp;|&nbsp; t = b<sub>1</sub> / SE(b<sub>1</sub>)</div>\n<p><strong>Worked example — the course lab dataset (teaching numbers).</strong> Ten shops, advertising X = 1–10 ($1,000s), sales Y = 12, 14, 18, 14, 22, 22, 24, 28, 24, 32 ($1,000s). The fitted line is Ŷ = 10 + 2X with SSE = 48 and Σ(X<sub>i</sub> − x̄)² = 82.5. Then s = √(48 ÷ 8) = √6 = <strong>2.45</strong>; SE(b<sub>1</sub>) = 2.45 ÷ √82.5 = 2.45 ÷ 9.08 = <strong>0.27</strong>; and t = 2 ÷ 0.27 = <strong>7.42</strong>. The slope is 7.42 standard errors above zero — a long way from the null.</p>"
    },
    {
      "heading": "Deciding: Critical Values and p-Values",
      "html": "<p>To decide, compare t with a <strong>critical value</strong> from the t-table at your chosen <strong>significance level</strong> α, usually 5%. For the lab dataset, degrees of freedom are n − 2 = 8, and the two-sided 5% critical value is <strong>2.306</strong>. Our t = 7.42 is far beyond 2.306, so we <strong>reject H<sub>0</sub></strong>: advertising is significantly related to sales at the 5% level.</p>\n<p>The <strong>p-value</strong> is the probability of getting a t-statistic at least as extreme as ours if the null were true. For t = 7.42 with 8 degrees of freedom, the p-value is about 0.0001 — roughly a 1-in-10,000 chance. A p-value below α (0.05) means reject; above α means fail to reject. Never say \"the p-value is the probability the null is true\" — it is the probability of data this extreme <em>assuming</em> the null is true.</p>\n<p>A <strong>95% confidence interval</strong> gives the same decision in range form: b<sub>1</sub> ± (critical value × SE). For the lab slope: 2 ± 2.306 × 0.27 = 2 ± 0.62, i.e. <strong>(1.38, 2.62)</strong>. The interval excludes zero, which is the same as rejecting H<sub>0</sub> — and it adds useful information: the effect is plausibly between $1,380 and $2,620 of extra sales per $1,000 of advertising.</p>\n<div class=\"formula\">95% CI for β<sub>1</sub>: b<sub>1</sub> ± t<sub>critical</sub> × SE(b<sub>1</sub>)</div>"
    },
    {
      "heading": "The F-Test and Testing the Whole Regression",
      "html": "<p>For a simple regression with one X, the <strong>F-test</strong> of overall significance is the same test as the slope t-test, in different clothes: F = t². In the lab dataset, F = <strong>55</strong> (the unrounded t is 7.416, and 7.416² = 55.00). You can also compute it from the sums of squares: F = (SSR ÷ 1) ÷ (SSE ÷ (n − 2)) = 330 ÷ 6 = <strong>55</strong>. The F-test earns its keep in multiple regression (Module 8), where it tests all slopes at once.</p>\n<p>Also test the intercept the same way when it matters: in the lab dataset, SE(b<sub>0</sub>) = 1.67, so t = 10 ÷ 1.67 = <strong>5.98</strong>, which also exceeds 2.306 — the intercept is significantly different from zero. But remember Module 2: the intercept is often just an anchor, so a significant intercept is rarely the headline result.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>H<sub>0</sub>: β<sub>1</sub> = 0 (no effect); H<sub>1</sub>: β<sub>1</sub> ≠ 0. Reject when |t| exceeds the critical value, or when p &lt; 0.05.</li>\n<li>s = √(SSE / (n − 2)); SE(b<sub>1</sub>) = s / √Σ(X<sub>i</sub> − x̄)²; t = b<sub>1</sub> / SE(b<sub>1</sub>), with n − 2 degrees of freedom.</li>\n<li>Lab dataset: b<sub>1</sub> = 2, SE = 0.27, t = 7.42, df = 8, critical value 2.306 → reject H<sub>0</sub>; 95% CI (1.38, 2.62); F = 55.</li>\n<li>A confidence interval that excludes zero is the same as rejecting H<sub>0</sub> — and it shows the plausible size of the effect.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying a p-value of 0.03 means \"there is a 3% chance the null is true.\" It means: if the null were true, data this extreme would occur 3% of the time. The null is either true or false; the p-value is about the data, not about the probability of the hypothesis.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Confusing statistical significance with practical importance. A slope can be significant (tiny standard error, huge sample) yet trivially small in dollars — or large in dollars yet insignificant in a small sample. Always report the size of the estimate alongside the test.</div>\n<p><strong>Ready-to-Work link:</strong> \"Is this effect real or noise?\" is the question every regression report must answer. If you can state H<sub>0</sub>, compute t, compare it with the critical value, and translate the result into one plain sentence, you can answer it.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Null hypothesis (H0)", "def": "The default claim tested, usually β1 = 0: X has no effect on Y." },
    { "term": "Alternative hypothesis (H1)", "def": "The claim accepted if the null is rejected, usually β1 ≠ 0." },
    { "term": "Two-sided test", "def": "A test that rejects the null for large effects in either direction." },
    { "term": "Standard error of the regression (s)", "def": "√(SSE ÷ (n − 2)): the typical size of a residual." },
    { "term": "Standard error of the slope, SE(b1)", "def": "How much the estimated slope would vary across samples: s ÷ √Σ(Xi − x̄)²." },
    { "term": "t-statistic", "def": "The estimate divided by its standard error: how many standard errors it sits from the null value." },
    { "term": "Degrees of freedom", "def": "n − 2 for a simple regression: the sample size minus the two estimated coefficients." },
    { "term": "Critical value", "def": "The t-value that marks the rejection boundary at a chosen significance level." },
    { "term": "Significance level (α)", "def": "The threshold, usually 5%, below which a p-value leads to rejecting the null." },
    { "term": "p-value", "def": "The probability of data at least as extreme as observed, assuming the null is true." },
    { "term": "Confidence interval", "def": "A range of plausible values for a parameter: estimate ± critical value × standard error." },
    { "term": "F-test", "def": "A test of overall regression significance; in a simple regression F = t²." },
    { "term": "Statistical significance", "def": "A result unlikely enough under the null to reject it — not the same as practical importance." },
    { "term": "Reject / fail to reject", "def": "The two possible test outcomes: the data are inconsistent with the null, or they are not." }
  ],
  "video": {
    "title": "Video 6: Hypothesis testing for regression",
    "embedUrl": "https://www.youtube.com/embed/NpMW5UX1sZk",
    "note": "Dr Andrew Bryce applies hypothesis testing to regression coefficients step by step — the same t-statistic and decision rule this module uses. Watch it, then redo the lab-dataset test (t = 7.42) yourself.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In the lab dataset, the slope is b<sub>1</sub> = 2 with SE(b<sub>1</sub>) = 0.27 and n = 10. State H<sub>0</sub> and H<sub>1</sub>, compute t, and test at the 5% level (critical value 2.306, df = 8).</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: H<sub>0</sub>: β<sub>1</sub> = 0 (advertising has no effect on sales); H<sub>1</sub>: β<sub>1</sub> ≠ 0. Step 2: t = b<sub>1</sub> ÷ SE(b<sub>1</sub>) = 2 ÷ 0.27 = <strong>7.42</strong>. Step 3: |7.42| &gt; 2.306, so <strong>reject H<sub>0</sub></strong> at the 5% level. Step 4: In plain words, advertising is significantly related to sales in this sample — the slope is 7.42 standard errors above zero.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Build the 95% confidence interval for the lab slope (b<sub>1</sub> = 2, SE = 0.27, critical value 2.306) and explain what it means.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The margin of error is 2.306 × 0.27 = 0.62. Step 2: The interval is 2 ± 0.62 = <strong>(1.38, 2.62)</strong>. Step 3: It means the data are consistent with a true slope anywhere from 1.38 to 2.62 — each extra $1,000 of advertising is plausibly associated with $1,380 to $2,620 more sales. Step 4: Because the interval excludes zero, it agrees with the t-test: reject H<sub>0</sub>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> In the study-hours example (Module 2), the slope is b<sub>1</sub> = 3, SSE = 6, n = 6, Σ(X<sub>i</sub> − x̄)² = 17.5. Compute s, SE(b<sub>1</sub>), and t, and test at 5% (critical value 2.776, df = 4).</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: s = √(SSE ÷ (n − 2)) = √(6 ÷ 4) = √1.5 = <strong>1.22</strong>. Step 2: SE(b<sub>1</sub>) = 1.22 ÷ √17.5 = 1.22 ÷ 4.18 = <strong>0.29</strong>. Step 3: t = 3 ÷ 0.29 = <strong>10.25</strong>. Step 4: |10.25| &gt; 2.776, so <strong>reject H<sub>0</sub></strong>: study hours are significantly related to exam scores. Step 5: The 95% CI is 3 ± 2.776 × 0.29 = 3 ± 0.81 = (2.19, 3.81) points per hour.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A regression of wages on schooling gives b<sub>1</sub> = 0.08 (log wages) with SE = 0.05 and n = 200. Test H<sub>0</sub>: β<sub>1</sub> = 0 at 5% (critical value ≈ 1.96 for large samples). Is the result significant? Is it practically important?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: t = 0.08 ÷ 0.05 = <strong>1.60</strong>. Step 2: |1.60| &lt; 1.96, so <strong>fail to reject H<sub>0</sub></strong> — the schooling effect is not statistically significant at 5%. Step 3: The 95% CI is 0.08 ± 1.96 × 0.05 = 0.08 ± 0.098 = (−0.018, 0.178), which includes zero, agreeing with the test. Step 4: Practical importance is separate: 0.08 means about 8% higher wages per year of schooling, which would be large if real — but this sample cannot establish it. A bigger sample might.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> In the lab dataset, SSR = 330 and SSE = 48 with n = 10. Compute the F-statistic two ways and confirm they agree.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: From the t-statistic: F = t². Using the unrounded t = 7.416, F = 7.416² = <strong>55.00</strong>. Step 2: From the sums of squares: F = (SSR ÷ 1) ÷ (SSE ÷ (n − 2)) = 330 ÷ (48 ÷ 8) = 330 ÷ 6 = <strong>55</strong>. Step 3: They agree exactly. Step 4: This is the same test as the slope t-test in a simple regression; the F-test earns its keep when there are several slopes to test at once.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A researcher reports p = 0.04 for a slope of 0.002 and announces \"a highly significant effect.\" What is wrong with that announcement?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: p = 0.04 only says the data are unlikely under the null — it says nothing about the size of the effect. Step 2: A slope of 0.002 is tiny in practical terms, whatever its p-value. Step 3: \"Highly significant\" also overstates p = 0.04, which is barely below the 0.05 threshold. Step 4: The honest report is: \"The slope is 0.002 (p = 0.04) — statistically significant at 5% but too small to matter in practice.\" Significance and importance are different questions.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The null hypothesis for a regression slope is usually:",
      "choices": [
        "H0: β1 = 1",
        "H0: β1 = 0",
        "H0: β1 = b1",
        "H0: R² = 0"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The null is no effect: the true slope is zero. (a) tests a slope of one, a special case, not the default. (c) is circular — b1 is the estimate, not a hypothesis. (d) is a different test (overall fit), not the slope test."
    },
    {
      "q": "In the lab dataset, b1 = 2 and SE(b1) = 0.27. The t-statistic is:",
      "choices": [
        "0.135",
        "0.54",
        "7.42",
        "54"
      ],
      "answer": 2,
      "explanation": "Correct: (c). t = 2 ÷ 0.27 = 7.42. (a) is 0.27 ÷ 2, the reciprocal. (b) is 2 × 0.27, a product, not a ratio. (d) is roughly t², the F-statistic, not t."
    },
    {
      "q": "With df = 8 and a 5% two-sided critical value of 2.306, a t-statistic of 7.42 means:",
      "choices": [
        "Fail to reject H0 — the slope is not significant",
        "Reject H0 — the slope is statistically significant",
        "The p-value is exactly 0.05",
        "The slope equals 7.42"
      ],
      "answer": 1,
      "explanation": "Correct: (b). |7.42| > 2.306, so reject. (a) reverses the decision. (c) is false — the p-value is about 0.0001, far below 0.05. (d) confuses the t-statistic with the slope; the slope is 2."
    },
    {
      "q": "The 95% confidence interval for the lab slope is (1.38, 2.62). This means:",
      "choices": [
        "95% of the shops have slopes between 1.38 and 2.62",
        "The data are consistent with a true slope anywhere in that range; it excludes zero, agreeing with rejecting H0",
        "The slope is exactly 2.00 with no uncertainty",
        "There is a 95% chance the null hypothesis is true"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The interval is the set of plausible true values. (a) misreads it as a statement about shops, not about the parameter. (c) ignores the uncertainty the interval exists to show. (d) reverses the logic — the interval excludes zero, which is evidence against the null."
    },
    {
      "q": "A p-value of 0.03 means:",
      "choices": [
        "There is a 3% chance the null hypothesis is true",
        "If the null were true, data at least this extreme would occur 3% of the time",
        "The slope is 0.03",
        "The result is certainly practically important"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The p-value is a probability about the data under the null. (a) is the classic misreading — the p-value is not the probability the null is true. (c) confuses the p-value with the estimate. (d) confuses significance with importance."
    },
    {
      "q": "In a simple regression, the F-statistic equals:",
      "choices": [
        "The square root of the t-statistic",
        "t², the squared t-statistic of the slope",
        "R² divided by n",
        "The slope divided by the intercept"
      ],
      "answer": 1,
      "explanation": "Correct: (b). F = t² (lab: 7.416² = 55.00). (a) is the inverse operation. (c) is not a formula for F. (d) is a meaningless ratio of two coefficients."
    },
    {
      "q": "The standard error of the slope gets smaller when:",
      "choices": [
        "The sample gets smaller",
        "The residuals get bigger",
        "X varies more across observations",
        "R² gets smaller"
      ],
      "answer": 2,
      "explanation": "Correct: (c). More variation in X pins the line down more precisely. (a) A smaller sample gives a larger standard error. (b) Bigger residuals (larger s) increase the standard error. (d) A smaller R² usually goes with bigger residuals, hence a larger standard error."
    },
    {
      "q": "A slope is statistically significant but tiny (0.002). The right conclusion is:",
      "choices": [
        "The effect is large and important",
        "The effect is real but too small to matter in practice",
        "The test must have been done wrong",
        "The p-value must be above 0.05"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Significance says the effect is unlikely to be zero; size says how much it matters — and 0.002 is negligible. (a) confuses significance with size. (c) is wrong — small significant effects are common with big samples. (d) is false — a tiny slope can have p < 0.05 with enough data."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Hypothesis Testing in Regression: Quick Reference</h3>\n<p><strong>Core idea:</strong> Test whether the slope is really different from zero by comparing it with its standard error.</p>\n<div class=\"formula\">s = √(SSE / (n − 2)) &nbsp;|&nbsp; SE(b<sub>1</sub>) = s / √Σ(X<sub>i</sub> − x̄)² &nbsp;|&nbsp; t = b<sub>1</sub> / SE(b<sub>1</sub>)</div>\n<div class=\"formula\">95% CI: b<sub>1</sub> ± t<sub>critical</sub> × SE(b<sub>1</sub>) &nbsp;|&nbsp; F = t² (simple regression)</div>\n<p><strong>Worked anchor (lab dataset):</strong> b<sub>1</sub> = 2, SE = 0.27, t = 7.42, df = 8, critical value 2.306 → reject H<sub>0</sub>; 95% CI (1.38, 2.62); p ≈ 0.0001; F = 55.</p>\n<p><strong>Decisions:</strong> reject H<sub>0</sub> when |t| &gt; critical value or p &lt; 0.05; a CI excluding zero agrees with rejection.</p>\n<p><strong>Watch out:</strong> p-value = probability of data this extreme if the null were true, not the probability the null is true. Significance ≠ practical importance.</p>\n<p><strong>Self-check:</strong> Given b<sub>1</sub>, SE, and df, compute t, find the decision, and build the 95% CI.</p>\n"
};
