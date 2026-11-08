// eco221 - Module 5: Multicollinearity, Heteroskedasticity & Robust Errors
module.exports = {
  "number": 5,
  "slug": "multicollinearity-heteroskedasticity-and-robust-errors",
  "title": "Multicollinearity, Heteroskedasticity & Robust Errors",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain multicollinearity and why it inflates standard errors without biasing OLS.",
    "Compute and interpret a variance inflation factor (VIF).",
    "Explain heteroskedasticity and why it makes OLS standard errors wrong.",
    "Use robust (heteroskedasticity-consistent) standard errors to fix inference.",
    "Read a residual plot to spot heteroskedasticity and other assumption failures."
  ],
  "sections": [
    {
      "heading": "The Classical Assumptions, Briefly",
      "html": "<p>OLS is unbiased and efficient only under the <strong>classical linear model assumptions</strong>: the model is linear in the parameters; the sample is random; no explanatory variable is a perfect linear combination of the others; the error has mean zero given X; the error has constant variance (<strong>homoskedasticity</strong>); and the errors are uncorrelated with each other. When an assumption fails, OLS does not always break — but something about the results stops being trustworthy. This module covers the two failures you will meet most: multicollinearity (assumption 3 bending) and heteroskedasticity (assumption 5 failing).</p>\n<p>Keep the distinction straight. Some failures <strong>bias</strong> the coefficients (Module 9's omitted variables). The failures in this module mostly damage the <strong>standard errors</strong>: the estimates stay unbiased, but the t-tests and confidence intervals can mislead. That is why the fix here is usually to the standard errors, not to the estimates.</p>"
    },
    {
      "heading": "Multicollinearity: When X's Move Together",
      "html": "<p><strong>Multicollinearity</strong> means two or more explanatory variables are strongly correlated with each other. If you regress wages on both years of schooling and years of education, the two variables are nearly the same thing — the data cannot tell which one deserves the credit. OLS stays unbiased, but the standard errors blow up: each coefficient's estimate becomes wobbly, t-statistics shrink, and coefficients can even flip sign when you add or drop a variable.</p>\n<p>The diagnostic is the <strong>variance inflation factor (VIF)</strong>. Regress X<sub>j</sub> on all the other X's and call that R²<sub>j</sub>; then VIF<sub>j</sub> = 1 ÷ (1 − R²<sub>j</sub>). A VIF of 1 means no collinearity; a VIF of 10 (R²<sub>j</sub> = 0.90) is the usual warning line; a VIF of 5 (R²<sub>j</sub> = 0.80) already deserves attention. <strong>Worked example:</strong> if schooling is 90% explained by the other variables (R²<sub>j</sub> = 0.90), VIF = 1 ÷ (1 − 0.90) = <strong>10</strong> — the variance of its coefficient is 10 times what it would be with uncorrelated X's, and its standard error is √10 ≈ 3.16 times larger.</p>\n<div class=\"formula\">VIF<sub>j</sub> = 1 / (1 − R²<sub>j</sub>) &nbsp;|&nbsp; VIF = 10 when R²<sub>j</sub> = 0.90</div>\n<p>Fixes: drop one of the redundant variables, combine them into an index, or collect more data so the variables vary independently. Never \"fix\" multicollinearity by dropping a variable that theory says belongs — that trades inflated standard errors for omitted-variable bias (Module 9). Perfect multicollinearity — the dummy variable trap — is the extreme case: OLS cannot run at all.</p>"
    },
    {
      "heading": "Heteroskedasticity: When the Spread Isn't Constant",
      "html": "<p><strong>Heteroskedasticity</strong> means the error term's variance changes with X: Var(u|X) is not constant. It is everywhere in economics. In a wage regression, high earners' wages spread out far more than low earners'; in a spending regression, rich households' spending varies more than poor households'. Plot the residuals against X: homoskedasticity looks like a formless cloud of even width; heteroskedasticity looks like a fan or a funnel, widening as X grows.</p>\n<p>Under heteroskedasticity OLS coefficients are still unbiased, but the usual standard errors are wrong — usually too small, so t-statistics look too good and you reject the null too often. The <strong>Breusch–Pagan test</strong> checks it formally: regress the squared residuals on X and test whether X explains them. But you do not need a test to act: the standard fix works whether or not heteroskedasticity is present.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Heteroskedasticity is a problem for the standard errors, not for the estimates. The slope is still right on average — but the t-test that says \"significant\" may be lying to you.</div>"
    },
    {
      "heading": "Robust Standard Errors: The Practical Fix",
      "html": "<p><strong>Robust standard errors</strong> (heteroskedasticity-consistent, or White standard errors) recompute the standard errors in a way that stays valid even when the error variance changes with X. The coefficients do not change — only the standard errors, t-statistics, and p-values do. Because they are valid with or without heteroskedasticity, most applied work now reports robust standard errors by default.</p>\n<p><strong>Worked example — the lab dataset.</strong> The OLS standard error of the slope is 0.27, giving t = 2 ÷ 0.27 = 7.42. Suppose the robust standard error is 0.41 (larger, because the residual spread grows with advertising). Then the robust t-statistic is 2 ÷ 0.41 = <strong>4.88</strong> — smaller, but still far above the 5% critical value of 2.306, so the conclusion stands: the slope is significant either way. If the robust t had fallen below 2.306, the honest conclusion would change — that is why you always check.</p>\n<p>Other remedies exist: <strong>weighted least squares</strong> (give less weight to high-variance observations) and <strong>transforming the variables</strong> — taking logs often shrinks a fan-shaped residual plot, because logs compress large values. But robust standard errors are the first tool to reach for: they are one line in any statistics package and they fix the inference without changing the model.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Multicollinearity: X's correlated with each other → unbiased coefficients but inflated standard errors. VIF = 1 / (1 − R²<sub>j</sub>); 10 is the warning line.</li>\n<li>Heteroskedasticity: error variance changes with X → OLS unbiased but standard errors wrong (usually too small).</li>\n<li>Robust (White) standard errors fix the inference without changing the coefficients.</li>\n<li>Lab example: OLS t = 7.42; with a robust SE of 0.41, t = 4.88 — still significant at 5%.</li>\n<li>Read residual plots: a fan or funnel shape is heteroskedasticity; a formless even cloud is fine.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Dropping a variable to \"cure\" multicollinearity when theory says it belongs. You trade wobbly standard errors for omitted-variable bias — usually a worse deal. Drop a redundant duplicate, not a real control.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Thinking heteroskedasticity biases the slope. It does not — it biases the standard errors. Re-estimating with a different method to \"fix the slope\" misses the point; fix the standard errors.</div>\n<p><strong>Ready-to-Work link:</strong> Any regression you run on real data will be checked for these two problems before anyone believes the t-statistics. If you can compute a VIF, read a residual plot, and report robust standard errors, you can defend your results.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Classical linear model assumptions", "def": "The conditions (linearity, random sample, no perfect collinearity, zero conditional mean error, homoskedasticity, uncorrelated errors) under which OLS is unbiased and efficient." },
    { "term": "Homoskedasticity", "def": "The error term has constant variance for all values of X." },
    { "term": "Heteroskedasticity", "def": "The error term's variance changes with X — for example, widening as X grows." },
    { "term": "Multicollinearity", "def": "Strong correlation among explanatory variables, inflating standard errors without biasing OLS." },
    { "term": "Perfect multicollinearity", "def": "One explanatory variable is an exact linear combination of others; OLS cannot run (e.g. the dummy variable trap)." },
    { "term": "Variance inflation factor (VIF)", "def": "1 ÷ (1 − R²j), where R²j is from regressing Xj on the other X's; 10 is the usual warning line." },
    { "term": "Robust standard errors", "def": "Heteroskedasticity-consistent (White) standard errors, valid whether or not the errors are homoskedastic." },
    { "term": "White standard errors", "def": "Another name for robust standard errors, after Halbert White, who derived them." },
    { "term": "Breusch–Pagan test", "def": "A test for heteroskedasticity: regress squared residuals on X and test whether X explains them." },
    { "term": "Residual plot", "def": "A plot of residuals against X or fitted values, used to spot heteroskedasticity and nonlinearity." },
    { "term": "Weighted least squares", "def": "OLS with weights that give less influence to high-variance observations." },
    { "term": "Efficiency", "def": "An estimator having the smallest variance among unbiased estimators; lost when assumptions fail." }
  ],
  "video": {
    "title": "Regression Assumptions, Residual Plots, Log Models & Prediction Intervals | CFA® Program Level I",
    "embedUrl": "https://www.youtube.com/embed/OZoP9t6buZI",
    "note": "A visual tour of the four regression assumptions read from residual plots — homoskedasticity, heteroskedasticity, autocorrelation, normality — plus log models and prediction intervals. Watch the residual-plot section, then sketch what a fan-shaped plot means.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A regression of wages includes both \"years of schooling\" and \"years of education\" as separate variables. Explain what goes wrong and what you would do.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The two variables are nearly the same thing, so they are almost perfectly collinear. Step 2: OLS stays unbiased, but each coefficient's standard error inflates — the data cannot tell which variable deserves the credit, so both estimates wobble. Step 3: The fix is to keep one and drop the other (or combine them into one measure), because they measure the same concept. Step 4: Do not keep both and hope — the t-statistics will be misleadingly small.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Regressing X<sub>1</sub> on the other explanatory variables gives R²<sub>1</sub> = 0.90. Compute VIF<sub>1</sub> and interpret it. What if R²<sub>1</sub> = 0.80?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: VIF<sub>1</sub> = 1 ÷ (1 − 0.90) = 1 ÷ 0.10 = <strong>10</strong>. Step 2: The variance of the X<sub>1</sub> coefficient is 10 times what it would be with uncorrelated X's, and its standard error is √10 ≈ 3.16 times larger — the warning line is reached. Step 3: If R²<sub>1</sub> = 0.80, VIF = 1 ÷ 0.20 = <strong>5</strong>: moderate collinearity, worth watching but below the usual alarm threshold. Step 4: VIF = 1 would mean no collinearity at all.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> In a spending regression, the residual plot fans out as income rises. (a) What is this called? (b) Are the OLS slopes biased? (c) What happens to the t-tests?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) <strong>Heteroskedasticity</strong> — the error variance grows with income. Step 2: (b) No, the OLS slopes are still unbiased; heteroskedasticity does not bias coefficients. Step 3: (c) The usual standard errors are wrong (typically too small), so t-statistics are too large and you reject the null too often. Step 4: Report robust standard errors, which stay valid under heteroskedasticity.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> In the lab dataset the slope is 2, the OLS standard error is 0.27 (t = 7.42), and the robust standard error is 0.41. Compute the robust t-statistic and state whether the slope is still significant at 5% (critical value 2.306).</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Robust t = 2 ÷ 0.41 = <strong>4.88</strong>. Step 2: |4.88| &gt; 2.306, so the slope is <strong>still significant</strong> at 5%. Step 3: The robust standard error is larger, so the evidence is weaker than the OLS t suggested — but not weak enough to change the conclusion. Step 4: If the robust t had fallen below 2.306, the honest answer would be \"not significant once heteroskedasticity is accounted for.\"</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A researcher finds VIF = 12 for a variable that theory says must stay in the model. What should they do, and what should they NOT do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: They should keep the variable — dropping a theoretically required control creates omitted-variable bias, which is worse than inflated standard errors. Step 2: They can collect more data, where the variables vary more independently, or combine a genuinely redundant twin into an index. Step 3: They should report the VIF honestly and note that the coefficient is imprecisely estimated. Step 4: They should NOT drop the variable just to make the VIF look nice, and should NOT claim the coefficient is precisely measured when it is not.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain in two sentences why robust standard errors are now reported by default in most applied econometrics, and one situation where they do not help.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Robust standard errors are valid whether or not heteroskedasticity is present, and they cost nothing — the coefficients are unchanged, only the standard errors are corrected — so there is no downside to using them. Step 2: They do not help with biased coefficients: if a variable is omitted (Module 9) or X is endogenous, the slope itself is wrong, and no standard-error fix can repair it.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Multicollinearity makes OLS coefficients:",
      "choices": [
        "Biased and inconsistent",
        "Unbiased but with inflated standard errors",
        "Always zero",
        "Impossible to compute in every case"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Collinearity does not bias OLS; it makes the estimates wobbly. (a) describes omitted-variable bias, not collinearity. (c) is false — coefficients are estimated, just imprecisely. (d) is false — only perfect multicollinearity stops OLS entirely."
    },
    {
      "q": "If regressing Xj on the other X's gives R²j = 0.90, the VIF is:",
      "choices": [
        "0.10",
        "0.90",
        "9",
        "10"
      ],
      "answer": 3,
      "explanation": "Correct: (d). VIF = 1 ÷ (1 − 0.90) = 1 ÷ 0.10 = 10. (a) is 1 − R²j, the denominator. (b) is R²j itself. (c) is 1 ÷ 0.90 − 1, a wrong formula."
    },
    {
      "q": "Heteroskedasticity means:",
      "choices": [
        "The error variance is constant",
        "The error variance changes with X",
        "The slope is always zero",
        "The errors are perfectly correlated"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The spread of u depends on X — for example, fanning out as income rises. (a) is homoskedasticity, the opposite. (c) is unrelated. (d) describes autocorrelation, Module 6's topic."
    },
    {
      "q": "Under heteroskedasticity, the usual OLS standard errors are:",
      "choices": [
        "Exactly correct",
        "Usually too small, so t-statistics look too good",
        "Always too large",
        "Zero"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The usual formula assumes constant variance, so it understates uncertainty when variance grows with X. (a) is true only under homoskedasticity. (c) is false — they are typically too small, not too large. (d) is nonsense."
    },
    {
      "q": "Robust (White) standard errors:",
      "choices": [
        "Change the slope estimates",
        "Fix biased coefficients from omitted variables",
        "Correct the standard errors without changing the coefficients",
        "Require homoskedasticity to work"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Robust SEs leave b0 and b1 alone and fix the inference. (a) is false — coefficients are unchanged. (b) is false — no standard-error fix repairs bias. (d) is backwards — robust SEs are designed for heteroskedasticity."
    },
    {
      "q": "A residual plot that fans out as X grows suggests:",
      "choices": [
        "Perfect multicollinearity",
        "Heteroskedasticity",
        "A missing intercept",
        "A perfect fit"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Widening spread is the visual signature of heteroskedasticity. (a) cannot be seen in a residual plot. (c) would show a pattern in the level of residuals, not their spread. (d) would show residuals of zero."
    },
    {
      "q": "In the lab dataset, the robust t-statistic for the slope (robust SE 0.41) is 4.88. Compared with the OLS t of 7.42, this means:",
      "choices": [
        "The slope is now insignificant",
        "The evidence is weaker but the slope is still significant at 5%",
        "The slope estimate changed from 2 to 4.88",
        "The R² fell to 4.88"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 4.88 > 2.306, so still significant — just less overwhelmingly. (a) is false: 4.88 exceeds the critical value. (c) confuses the t-statistic with the slope, which stays 2. (d) confuses t with R², which is 0.873."
    },
    {
      "q": "The dummy variable trap is an example of:",
      "choices": [
        "Heteroskedasticity",
        "Perfect multicollinearity",
        "Autocorrelation",
        "Omitted-variable bias"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The dummies sum to 1, an exact linear relation with the intercept. (a) is about error variance. (c) is about correlated errors over time. (d) is about a missing variable correlated with X."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Multicollinearity & Heteroskedasticity: Quick Reference</h3>\n<p><strong>Core idea:</strong> Both problems damage the standard errors, not the unbiasedness of OLS — so fix the inference, don't re-estimate the slope.</p>\n<div class=\"formula\">VIF<sub>j</sub> = 1 / (1 − R²<sub>j</sub>) &nbsp;|&nbsp; Robust t = b<sub>1</sub> / SE<sub>robust</sub>(b<sub>1</sub>)</div>\n<p><strong>Multicollinearity:</strong> X's move together → inflated SEs, wobbly coefficients. VIF = 10 (R²<sub>j</sub> = 0.90) is the warning line; perfect collinearity (dummy trap) stops OLS.</p>\n<p><strong>Heteroskedasticity:</strong> error variance changes with X → usual SEs too small, t too big. Fan-shaped residual plot is the giveaway.</p>\n<p><strong>Fix:</strong> robust (White) standard errors — valid with or without heteroskedasticity, coefficients unchanged. Lab example: OLS t = 7.42, robust t = 4.88, still significant.</p>\n<p><strong>Watch out:</strong> don't drop a theoretically needed variable to fix a VIF; don't expect robust SEs to fix a biased slope.</p>\n<p><strong>Self-check:</strong> Given R²<sub>j</sub> = 0.80, compute the VIF; given a fan-shaped residual plot, name the problem and the fix.</p>\n"
};
