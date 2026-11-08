// eco221 - Module 8: Model Selection: Which Variables Belong?
module.exports = {
  "number": 8,
  "slug": "model-selection-which-variables-belong",
  "title": "Model Selection: Which Variables Belong?",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why R-squared always rises when a variable is added, and why that misleads.",
    "Compute and interpret adjusted R-squared.",
    "Use AIC and BIC to compare models, and explain why BIC penalizes complexity more.",
    "Run a nested F-test to decide whether a group of variables belongs.",
    "Explain the trade-off between omitted-variable bias and overfitting."
  ],
  "sections": [
    {
      "heading": "The Problem: More Variables Always \"Help\"",
      "html": "<p>Every variable you add to a regression raises R² — or leaves it unchanged. It can never lower it, because OLS can always set the new coefficient to zero and reproduce the old fit. So \"pick the model with the highest R²\" always picks the biggest model, including junk variables that happen to correlate with Y by luck. A model with 50 variables on 60 observations can have R² = 0.99 and be useless: it fitted the noise.</p>\n<p>Model selection is therefore about <strong>penalizing complexity</strong>: a new variable must earn its place by improving fit enough to justify the extra parameter. Three tools do this job — adjusted R², information criteria (AIC and BIC), and the nested F-test — and a fourth discipline, out-of-sample testing (Module 7), checks the winner. This module works all four on one running example: the lab dataset (n = 10, advertising X, sales Y, R² = 0.873) and a candidate second variable, price.</p>"
    },
    {
      "heading": "Adjusted R-Squared: R² That Charges for Variables",
      "html": "<p><strong>Adjusted R²</strong> corrects R² for the number of regressors k (not counting the intercept): adjusted R² = 1 − (1 − R²) × (n − 1) ÷ (n − k − 1). Adding a variable raises R² but also raises the penalty (n − k − 1 shrinks), so adjusted R² rises only if the new variable improves fit by more than chance would.</p>\n<p><strong>Worked example.</strong> Lab model with one regressor: R² = 0.873, n = 10, k = 1 → adjusted R² = 1 − (1 − 0.873) × 9 ÷ 8 = 1 − 0.127 × 1.125 = 1 − 0.1429 = <strong>0.857</strong>. Add price as a second regressor and suppose R² rises to 0.88: adjusted R² = 1 − (1 − 0.88) × 9 ÷ 7 = 1 − 0.12 × 1.2857 = 1 − 0.15429 = <strong>0.846</strong>. Adjusted R² <em>fell</em> (0.857 → 0.846), so price did not earn its place — the small R² gain was not worth the extra parameter.</p>\n<div class=\"formula\">Adjusted R² = 1 − (1 − R²) × (n − 1) / (n − k − 1)</div>"
    },
    {
      "heading": "AIC and BIC: Fit Minus a Penalty",
      "html": "<p><strong>AIC</strong> (Akaike information criterion) and <strong>BIC</strong> (Bayesian information criterion) score a model as fit minus a complexity penalty, and smaller is better. Using SSE and k = number of estimated parameters including the intercept: AIC = n·ln(SSE/n) + 2k, and BIC = n·ln(SSE/n) + k·ln(n). BIC's penalty per parameter is ln(n) instead of 2, so BIC punishes extra variables more than AIC once n &gt; 8 — BIC prefers simpler models.</p>\n<p><strong>Worked example.</strong> Lab model, one regressor (k = 2 parameters): SSE = 48, n = 10. AIC = 10 × ln(4.8) + 2 × 2 = 10 × 1.5686 + 4 = <strong>19.69</strong>. BIC = 10 × 1.5686 + 2 × ln(10) = 15.69 + 4.61 = <strong>20.29</strong>. Add price (k = 3) and suppose SSE falls only to 44: AIC = 10 × ln(4.4) + 6 = 14.82 + 6 = <strong>20.82</strong>; BIC = 14.82 + 3 × 2.3026 = 14.82 + 6.91 = <strong>21.72</strong>. Both criteria rise, so both prefer the simpler one-variable model. When AIC and BIC agree, the decision is easy; when they disagree, BIC is the more cautious choice.</p>\n<div class=\"formula\">AIC = n·ln(SSE/n) + 2k &nbsp;|&nbsp; BIC = n·ln(SSE/n) + k·ln(n) &nbsp;|&nbsp; Smaller is better</div>"
    },
    {
      "heading": "The Nested F-Test: Does the Group Belong?",
      "html": "<p>When one model is <strong>nested</strong> inside another — the small model is the big model with some coefficients set to zero — the <strong>nested F-test</strong> tests whether the extra variables jointly matter: F = ((SSE<sub>restricted</sub> − SSE<sub>unrestricted</sub>) ÷ q) ÷ (SSE<sub>unrestricted</sub> ÷ (n − k<sub>unrestricted</sub>)), where q is the number of added variables. The null is that all the added coefficients are zero.</p>\n<p><strong>Worked example.</strong> Restricted (advertising only): SSE = 48. Unrestricted (advertising + price): SSE = 44, q = 1, n − k = 10 − 3 = 7. F = ((48 − 44) ÷ 1) ÷ (44 ÷ 7) = 4 ÷ 6.29 = <strong>0.64</strong>. The 5% critical value for F(1, 7) is 5.59. Since 0.64 &lt; 5.59, we <strong>fail to reject</strong>: price does not add significant explanatory power, and it stays out. Three tools, one verdict — that is what good model selection looks like.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>R² never falls when a variable is added — so it cannot select models. Adjusted R², AIC, BIC, and the F-test can.</li>\n<li>Adjusted R² = 1 − (1 − R²)(n − 1)/(n − k − 1). Lab: 0.857 with one regressor; adding price (R² = 0.88) gives 0.846 — worse.</li>\n<li>AIC = n·ln(SSE/n) + 2k; BIC = n·ln(SSE/n) + k·ln(n); smaller is better. Lab: AIC 19.69 vs 20.82, BIC 20.29 vs 21.72 — the simpler model wins both.</li>\n<li>Nested F-test: F = 0.64 vs critical 5.59 → price stays out.</li>\n<li>The trade-off: omitting a real variable biases (Module 9); including junk overfits (Module 7). Theory decides what is a candidate; the tests decide what survives.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Adding variables until R² looks impressive. With enough variables R² approaches 1 on any dataset — including random numbers. A high R² in a kitchen-sink model is evidence of overfitting, not of understanding.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Letting a test overrule theory. If economic theory says a variable belongs and the test is borderline, keep it and say so — the test is a guide, not a judge. The worst models come from dropping real variables to please a criterion.</div>\n<p><strong>Ready-to-Work link:</strong> \"Which variables belong in the model?\" is the question behind every pricing, demand, and forecasting model in business. If you can run adjusted R², AIC/BIC, and an F-test on the same candidates and explain why they agree, you can answer it.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Model selection", "def": "Choosing which variables belong in a regression, balancing fit against complexity." },
    { "term": "Adjusted R-squared", "def": "R² corrected for the number of regressors: 1 − (1 − R²)(n − 1)/(n − k − 1); it can fall when a variable is added." },
    { "term": "AIC", "def": "Akaike information criterion: n·ln(SSE/n) + 2k; smaller is better." },
    { "term": "BIC", "def": "Bayesian information criterion: n·ln(SSE/n) + k·ln(n); smaller is better, penalizes complexity more than AIC." },
    { "term": "Nested models", "def": "Two models where the smaller is the larger with some coefficients set to zero." },
    { "term": "Nested F-test", "def": "A test of whether a group of added variables jointly improves fit: ((SSEr − SSEu)/q) ÷ (SSEu/(n − ku))." },
    { "term": "Overfitting", "def": "A model that fits the sample's noise as well as its signal, and predicts new data badly." },
    { "term": "Parsimony", "def": "The principle of preferring the simplest model that explains the data." },
    { "term": "Junk variable", "def": "A variable with no real relationship to Y that improves in-sample fit by chance." },
    { "term": "Omitted-variable bias", "def": "Bias from leaving out a variable that affects Y and is correlated with an included X." },
    { "term": "Stepwise selection", "def": "Adding or dropping variables one at a time by a test — convenient, but it can overfit and should be checked out of sample." },
    { "term": "Cross-validation", "def": "Judging models by their forecast accuracy on held-out folds of the data." }
  ],
  "video": {
    "title": "Time Series Model Selection (AIC & BIC) : Time Series Talk",
    "embedUrl": "https://www.youtube.com/embed/McEN54l3EPU",
    "note": "How to pick between competing time-series models with AIC and BIC — the same fit-versus-penalty logic this module uses for regressions. Watch it for the intuition that a better fit is only worth it if it beats the penalty.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A regression has R² = 0.873 with n = 10 and k = 1 regressor. Compute adjusted R² step by step.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Adjusted R² = 1 − (1 − R²) × (n − 1) ÷ (n − k − 1). Step 2: (1 − 0.873) = 0.127; (n − 1) ÷ (n − k − 1) = 9 ÷ 8 = 1.125. Step 3: 0.127 × 1.125 = 0.1429. Step 4: Adjusted R² = 1 − 0.1429 = <strong>0.857</strong>. Step 5: The adjustment costs about 0.016 of R² for the single regressor — a small price, because the fit is strong.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Adding a second regressor raises R² to 0.88 (n = 10, k = 2). Compute adjusted R² and say whether the new variable earned its place.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Adjusted R² = 1 − (1 − 0.88) × 9 ÷ 7 = 1 − 0.12 × 1.2857 = 1 − 0.15429 = <strong>0.846</strong>. Step 2: Adjusted R² fell from 0.857 to 0.846, so the new variable did <strong>not</strong> earn its place. Step 3: R² rose (0.873 → 0.88) only because R² always rises when a variable is added — that rise is meaningless by itself. Step 4: The penalty for the extra parameter outweighed the tiny fit gain.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Model A (k = 2 parameters) has SSE = 48 with n = 10. Compute its AIC and BIC (ln(4.8) = 1.5686, ln(10) = 2.3026).</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: AIC = n·ln(SSE/n) + 2k = 10 × ln(4.8) + 4 = 10 × 1.5686 + 4 = 15.69 + 4 = <strong>19.69</strong>. Step 2: BIC = n·ln(SSE/n) + k·ln(n) = 15.69 + 2 × 2.3026 = 15.69 + 4.61 = <strong>20.29</strong>. Step 3: Remember these numbers only matter in comparison — a lower AIC or BIC wins. Step 4: On their own, 19.69 and 20.29 mean nothing; next to Model B's 20.82 and 21.72, they say Model A wins.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Model B (k = 3) has SSE = 44 with n = 10. Compute AIC and BIC (ln(4.4) = 1.4816) and decide between A and B.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: AIC = 10 × ln(4.4) + 6 = 14.82 + 6 = <strong>20.82</strong>. Step 2: BIC = 14.82 + 3 × 2.3026 = 14.82 + 6.91 = <strong>21.72</strong>. Step 3: Both are higher than Model A's (19.69 and 20.29), so <strong>Model A wins</strong> on both criteria. Step 4: The SSE improvement (48 → 44) was not enough to pay for the extra parameter under either penalty.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Restricted model SSE = 48; unrestricted model (one added variable) SSE = 44, n = 10, k<sub>unrestricted</sub> = 3. Compute the nested F-statistic and test at 5% (critical value 5.59).</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: F = ((48 − 44) ÷ 1) ÷ (44 ÷ 7) = 4 ÷ 6.29 = <strong>0.64</strong>. Step 2: 0.64 &lt; 5.59, so <strong>fail to reject</strong> the null that the added coefficient is zero. Step 3: The added variable does not significantly improve fit — leave it out. Step 4: This agrees with adjusted R², AIC, and BIC: four tools, one verdict.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A researcher has 60 observations and adds 25 variables, reaching R² = 0.98. Explain why you are suspicious, and name two checks you would run.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: With 25 variables on 60 observations, the model has only 34 degrees of freedom left — it can fit noise almost perfectly, so R² = 0.98 is expected even from junk variables. Step 2: Check 1: adjusted R² — it will be much lower than 0.98. Step 3: Check 2: out-of-sample forecasting (Module 7) — hold out 20 observations and compare RMSE with a small model. Step 4: Also check AIC/BIC and the individual t-statistics; in an overfitted model many coefficients will be insignificant despite the high R².</p>"
    }
  ],
  "quiz": [
    {
      "q": "Why can't R² alone select a model?",
      "choices": [
        "Because R² is always zero",
        "Because R² never falls when a variable is added, so it always favors the biggest model",
        "Because R² cannot be computed for small samples",
        "Because R² is always 1"
      ],
      "answer": 1,
      "explanation": "Correct: (b). OLS can set a new coefficient to zero, so fit never worsens — R² rewards size, not quality. (a) and (d) are false. (c) is false — R² is computable for any sample."
    },
    {
      "q": "With R² = 0.873, n = 10, k = 1, adjusted R² is:",
      "choices": [
        "0.846",
        "0.857",
        "0.873",
        "0.88"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 1 − 0.127 × 9/8 = 1 − 0.1429 = 0.857. (a) is the adjusted R² after adding a second variable (R² = 0.88). (c) is the unadjusted R². (d) is the R² after adding the second variable."
    },
    {
      "q": "Adding a second variable raises R² to 0.88 but adjusted R² falls to 0.846. This means:",
      "choices": [
        "The new variable is clearly important",
        "The new variable did not earn its place — the fit gain was smaller than the penalty",
        "Adjusted R² was computed wrong",
        "The model now has R² = 0.846"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Adjusted R² falls exactly when the new variable adds less than chance would. (a) reverses the conclusion. (c) is false — the arithmetic is checked in the module. (d) confuses adjusted R² with R², which is 0.88."
    },
    {
      "q": "For AIC and BIC, the better model is the one with:",
      "choices": [
        "The larger value",
        "The smaller value",
        "The value closest to zero",
        "The value closest to 1"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Both criteria are fit minus penalty, scored so smaller is better. (a) reverses the rule. (c) and (d) invent a target — the criteria have no absolute scale, only comparisons matter."
    },
    {
      "q": "BIC penalizes extra variables more than AIC when:",
      "choices": [
        "n is very small",
        "n > 8, because ln(n) > 2",
        "The sample is a cross-section",
        "R² is above 0.9"
      ],
      "answer": 1,
      "explanation": "Correct: (b). BIC's per-parameter penalty is ln(n); once n exceeds e² ≈ 7.4, ln(n) > 2, so BIC is stricter than AIC's flat 2. (a) is backwards — with tiny n, ln(n) < 2 and BIC is more lenient. (c) and (d) are irrelevant to the penalty."
    },
    {
      "q": "The nested F-test with SSE restricted 48, SSE unrestricted 44, q = 1, n − k = 7 gives F = 0.64. At a 5% critical value of 5.59, you:",
      "choices": [
        "Reject the null and keep the added variable",
        "Fail to reject the null and leave the variable out",
        "Conclude the restricted model is wrong",
        "Conclude R² = 0.64"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 0.64 < 5.59, so the added variable does not significantly improve fit. (a) reverses the decision. (c) is not what the test says — it says the extra variable adds nothing. (d) confuses the F-statistic with R²."
    },
    {
      "q": "A model with 25 variables on 60 observations and R² = 0.98 is most likely:",
      "choices": [
        "A proven causal model",
        "Overfitted — it fitted the noise",
        "The best possible forecast model",
        "Impossible to compute"
      ],
      "answer": 1,
      "explanation": "Correct: (b). With so few degrees of freedom left, a high R² is expected from junk. (a) R² never proves causation. (c) Overfitted models forecast badly out of sample. (d) It is computable — that is the problem."
    },
    {
      "q": "Theory says a variable belongs, but the F-test is borderline (p = 0.06). The best advice is:",
      "choices": [
        "Drop it — the test is the judge",
        "Keep it and say so — theory is a reason to include, and the test is a guide",
        "Add ten more variables to fix it",
        "Report R² instead of the test"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Dropping a theoretically required variable risks omitted-variable bias, which is worse than a borderline test. (a) treats the test as absolute. (c) makes overfitting worse. (d) hides the evidence instead of reporting it."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Model Selection: Quick Reference</h3>\n<p><strong>Core idea:</strong> A new variable must earn its place — fit must improve by more than the complexity penalty.</p>\n<div class=\"formula\">Adjusted R² = 1 − (1 − R²) × (n − 1) / (n − k − 1)</div>\n<div class=\"formula\">AIC = n·ln(SSE/n) + 2k &nbsp;|&nbsp; BIC = n·ln(SSE/n) + k·ln(n) &nbsp;|&nbsp; Smaller is better</div>\n<p><strong>Worked anchor (lab dataset, n = 10):</strong> one regressor: R² = 0.873, adjusted R² = 0.857, AIC 19.69, BIC 20.29. Add price (R² = 0.88, SSE 44): adjusted R² = 0.846, AIC 20.82, BIC 21.72, nested F = 0.64 vs 5.59 → price stays out.</p>\n<p><strong>Rules:</strong> R² never falls when a variable is added, so it cannot select models. BIC punishes complexity more than AIC when n &gt; 8. Theory decides the candidates; tests decide the survivors; out-of-sample checks the winner.</p>\n<p><strong>Watch out:</strong> kitchen-sink models look great in sample and forecast badly. Don't drop a theoretically needed variable to please a criterion.</p>\n<p><strong>Self-check:</strong> Given R², n, and k, compute adjusted R²; given two SSEs, compute AIC, BIC, and the nested F.</p>\n"
};
