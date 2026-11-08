// eco221 - Module 11: Limitations: What Econometrics Can't Tell You
module.exports = {
  "number": 11,
  "slug": "limitations-what-econometrics-cant-tell-you",
  "title": "Limitations: What Econometrics Can't Tell You",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain measurement error and how it biases slope estimates.",
    "Explain simultaneity and why it makes OLS inconsistent.",
    "Describe instrumental variables as the response to endogeneity.",
    "Explain the Lucas critique and why policy changes can break estimated relationships.",
    "State honestly what a regression can and cannot establish."
  ],
  "sections": [
    {
      "heading": "Measurement Error: Wrong Numbers In, Wrong Slopes Out",
      "html": "<p>Econometrics assumes the variables are measured correctly. They often are not: income is underreported in surveys, prices are recorded with error, education is rounded. <strong>Measurement error in Y</strong> mostly adds noise — it inflates the standard errors but does not bias the slope. <strong>Measurement error in X</strong> is worse: it biases the slope toward zero, a problem called <strong>attenuation bias</strong>. If the true slope is 2 and X is measured with substantial error, OLS might estimate 1.2 — the relationship looks weaker than it is, because the noise in X dilutes the signal.</p>\n<p>The intuition is simple: the regression sees X wobbling for two reasons — real variation and measurement noise — and only the real variation moves Y. The more noise relative to signal, the more the slope is pulled toward zero. The fix is better measurement, or an instrumental variable (below) that is correlated with the true X but not with its measurement error.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Noise in the outcome costs precision; noise in the explanatory variable costs truth — it shrinks the slope toward zero. Always ask how the key variable was measured before believing its coefficient.</div>"
    },
    {
      "heading": "Simultaneity: When Y Causes X Too",
      "html": "<p><strong>Simultaneity</strong> means X and Y cause each other. Supply and demand are the classic case: price affects quantity demanded, but quantity supplied affects price — so in a regression of quantity on price, price is correlated with the error term, and OLS is biased and inconsistent. The same problem appears with police and crime, advertising and sales (successful firms advertise more), and schooling and wages (higher expected wages encourage more schooling).</p>\n<p>When X is correlated with the error term, X is called <strong>endogenous</strong>. OLS cannot fix endogeneity by itself: no amount of data helps, because the bias does not shrink as the sample grows. The remedy is to find variation in X that is unrelated to the error — an <strong>instrumental variable</strong> (Module 9). A good instrument for schooling is distance to college: it affects schooling but (arguably) affects wages only through schooling. A bad instrument is one that is itself related to the error — then IV is worse than OLS.</p>"
    },
    {
      "heading": "The Lucas Critique and Changing Relationships",
      "html": "<p>Even a well-estimated relationship can break when policy changes. The <strong>Lucas critique</strong> (Robert Lucas, 1976) says that estimated relationships reflect people's behavior under the old policy regime — and people change their behavior when the regime changes. A regression estimated when inflation was low may not describe the economy after a central bank announces a new inflation target, because firms and workers adjust their expectations and contracts.</p>\n<p>The practical lesson is humility about extrapolation across regimes: a slope estimated in one era, one country, or one policy environment may not travel. Report the context — the place, the period, the policy in force — alongside the estimate, so the reader can judge whether it applies to their question. A regression is a summary of a particular time and place, not a law of nature.</p>"
    },
    {
      "heading": "What Econometrics Can and Cannot Do",
      "html": "<p>Econometrics can: measure associations precisely, with margins of error; test whether data are consistent with a theory; forecast within a stable environment; and — with a good design — estimate causal effects. It cannot: prove a theory true; turn a correlation into a cause by itself; forecast a regime change it has never seen; or substitute for judgment about which variables matter, which data are trustworthy, and which assumptions are plausible.</p>\n<p>Two guardrails cover most failures. First, <strong>replication</strong>: a result that appears in one dataset, one specification, and one sample period is a hint, not a finding — check it on new data, with different controls, and in a different period. Second, <strong>transparency</strong>: state the data source and vintage, the model, the checks you ran, and the checks you could not run. A regression with an honest limits paragraph is worth more than a \"significant\" result with the limits hidden. That is the standard this course has used from Module 1, and it is the standard the capstone will hold you to.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The most important skill in econometrics is not running regressions — it is knowing when not to believe one. A skeptical reader who asks \"what's in the error term, and is it correlated with X?\" will catch more bad analysis than any software package.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Measurement error in X causes attenuation bias — the slope is pulled toward zero.</li>\n<li>Simultaneity makes X endogenous (correlated with the error); OLS is biased and inconsistent, and only an instrument or a design can fix it.</li>\n<li>The Lucas critique: relationships estimated under one policy regime may break when the regime changes.</li>\n<li>Econometrics measures, tests, and forecasts within a stable context — it does not prove theories or create causation from correlation.</li>\n<li>Guardrails: replication across data and specifications, and transparency about source, vintage, checks, and limits.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Treating a \"significant\" result as a settled fact. Significance is a statement about one sample under one specification. Until the result replicates and survives robustness checks, it is a claim, not a conclusion.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Using a bad instrument and calling the result causal. An instrument that is weak or itself related to the error gives estimates worse than OLS — and a fancy method does not rescue a bad design.</div>\n<p><strong>Ready-to-Work link:</strong> Every data job eventually asks you to say \"this analysis can't answer that.\" If you can name the limit — measurement error, simultaneity, a regime change, a missing control — and say what would be needed to answer it properly, you are doing the most valuable part of the job.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Measurement error", "def": "Error in recording a variable's true value; in X it biases the slope toward zero." },
    { "term": "Attenuation bias", "def": "The shrinking of an estimated slope toward zero caused by measurement error in X." },
    { "term": "Simultaneity", "def": "X and Y causing each other, so X is correlated with the error term." },
    { "term": "Endogeneity", "def": "An explanatory variable correlated with the error term; OLS is biased and inconsistent." },
    { "term": "Exogeneity", "def": "An explanatory variable uncorrelated with the error term — the condition OLS needs." },
    { "term": "Instrumental variable (IV)", "def": "A variable that moves an endogenous X but affects Y only through X." },
    { "term": "Weak instrument", "def": "An instrument barely related to X, giving unreliable IV estimates." },
    { "term": "Lucas critique", "def": "Lucas's argument that estimated relationships can break when policy changes behavior." },
    { "term": "Regime change", "def": "A change in the policy environment or economic structure that alters estimated relationships." },
    { "term": "Replication", "def": "Re-running an analysis on new data or specifications to see whether the result holds." },
    { "term": "Inconsistency", "def": "An estimator that does not converge to the truth even as the sample grows — as with OLS under endogeneity." },
    { "term": "Transparency", "def": "Reporting data source, vintage, model, checks, and limits so others can judge the work." }
  ],
  "video": {
    "title": "Instrumental Variables Intuition in Stata - Endogeneity Fix for DissertationDescription:",
    "embedUrl": "https://www.youtube.com/embed/BKZ_uxJWclA",
    "note": "Dr Bosede Ngozi Adeleye explains endogeneity — omitted variables, simultaneity, measurement error — and how instrumental variables fix it, using the schooling-and-ability example. Watch it for the relevance and exogeneity conditions, which are the heart of this module.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A survey measures income with substantial random error, and income is the X variable in a regression of spending on income. What happens to the estimated slope, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The slope suffers <strong>attenuation bias</strong> — it is pulled toward zero. Step 2: The regression sees income wobbling for two reasons: real differences and measurement noise. Only the real differences move spending, so the slope is diluted by the noise. Step 3: If the true slope were 0.8, OLS might estimate 0.5 — spending would look less responsive to income than it really is. Step 4: The fix is better measurement, or an instrument correlated with true income but not with its measurement error.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A city hires more police when crime rises, and police also reduce crime. Explain why regressing crime on police numbers gives a biased OLS slope, and in which direction.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: This is <strong>simultaneity</strong>: crime causes police hiring and police cause (lower) crime, so police numbers are correlated with the error term — police are endogenous. Step 2: Cities with high crime hire more police, so the data pair high police numbers with high crime. Step 3: That pushes the estimated slope upward (toward zero or positive), hiding the true crime-reducing effect — OLS may even suggest police \"cause\" crime. Step 4: The fix is an instrument that moves police hiring without being caused by crime, such as a federal hiring grant allocated by formula.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Explain the Lucas critique in your own words, using the example of a central bank that announces a new inflation target.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Under the old regime, firms set prices expecting low inflation, and a regression of inflation on money growth reflects that behavior. Step 2: When the central bank announces a new target, firms change their expectations and their price-setting — the behavior behind the estimated relationship changes. Step 3: The old regression no longer describes the economy, so using it to predict the effect of the new policy is misleading. Step 4: The lesson: relationships are conditional on the policy regime, so report the context and be cautious about forecasting across regime changes.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A researcher instruments schooling with distance to college. State the two conditions the instrument must satisfy, and give one reason each might fail.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: <strong>Relevance</strong>: distance must actually affect schooling — it fails if everyone goes to college regardless of distance. Step 2: <strong>Exogeneity</strong>: distance must be unrelated to the error term — it fails if colleges are built near wealthy areas, so distance also proxies for family background, which affects wages directly. Step 3: If relevance fails, the instrument is weak and IV estimates are wild. Step 4: If exogeneity fails, IV is biased — possibly worse than OLS.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A study finds a significant effect of a job-training program in one city in 2024. Name three replication checks you would run before believing it.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Re-run it on a <strong>different sample</strong> — another city or another year — to see whether the effect travels. Step 2: Re-run it with <strong>different controls and specifications</strong> — if the effect appears only in one specification, it is fragile. Step 3: Re-run it with a <strong>different method</strong> — for example, a matched comparison or an instrument — to see whether the design drives the result. Step 4: A result that survives all three is a finding; one that survives none is a hint.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A manager says, \"The regression is significant, so the theory is proven and we should act.\" Write the two-sentence reply an econometrician should give.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: \"Significance says the data are inconsistent with no effect in this sample under this specification — it does not prove the theory, because an omitted variable, a measurement problem, or a regime change could produce the same result.\" Step 2: \"Before we act, let's replicate the result on new data, check it with robust standard errors and a different specification, and confirm the design can support a causal reading — then we will know how much to bet on it.\"</p>"
    }
  ],
  "quiz": [
    {
      "q": "Measurement error in X (the explanatory variable) causes:",
      "choices": [
        "No problem at all",
        "Attenuation bias — the slope is pulled toward zero",
        "The slope to be biased away from zero",
        "R² to become 1"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Noise in X dilutes the signal, shrinking the slope. (a) is false — measurement error in X is a real problem. (c) is the opposite direction. (d) is false — measurement error lowers fit, it does not perfect it."
    },
    {
      "q": "Measurement error in Y (the dependent variable) mainly:",
      "choices": [
        "Biases the slope toward zero",
        "Adds noise and inflates standard errors without biasing the slope",
        "Makes OLS impossible to run",
        "Creates perfect multicollinearity"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Noise in Y goes into the error term, costing precision but not biasing the slope. (a) describes measurement error in X. (c) is false — OLS runs fine. (d) is a different problem entirely."
    },
    {
      "q": "Simultaneity makes OLS biased because:",
      "choices": [
        "X and Y cause each other, so X is correlated with the error term",
        "The sample is too small",
        "R² is too low",
        "The errors are heteroskedastic"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Two-way causation means X moves with u, violating exogeneity. (b) Small samples cause imprecision, not simultaneity bias. (c) Low R² is not a bias. (d) Heteroskedasticity affects standard errors, not bias."
    },
    {
      "q": "An endogenous variable is one that is:",
      "choices": [
        "Measured without error",
        "Correlated with the error term",
        "Uncorrelated with Y",
        "A dummy variable"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Endogeneity is defined as correlation with the error term. (a) describes clean measurement. (c) would make the variable useless. (d) is a type of variable, not a property of its relation to the error."
    },
    {
      "q": "The Lucas critique says:",
      "choices": [
        "All regressions are useless",
        "Estimated relationships can break when policy changes people's behavior",
        "OLS is always biased",
        "Forecasts should never use regressions"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Relationships estimated under one regime may not survive a regime change. (a) overstates it — regressions remain useful within a stable regime. (c) is false — OLS is unbiased under its assumptions. (d) is false — regression forecasts are fine within a stable environment."
    },
    {
      "q": "A valid instrument for an endogenous X must:",
      "choices": [
        "Be correlated with the error term",
        "Move X (relevance) and affect Y only through X (exogeneity)",
        "Be the same variable as X",
        "Have a VIF above 10"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Both conditions are required. (a) violates exogeneity. (c) is not an instrument at all. (d) is a multicollinearity diagnostic, irrelevant here."
    },
    {
      "q": "Why is replication an important guardrail?",
      "choices": [
        "Because it raises R²",
        "Because a result in one dataset and one specification may be a fluke — checking it elsewhere tests whether it is real",
        "Because it removes the need for standard errors",
        "Because journals require it for publication"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Replication tests whether a finding survives new data and new specifications. (a) is false — replication does not raise R². (c) is false — standard errors are still needed. (d) may be true in practice but is not the reason it matters."
    },
    {
      "q": "A regression is 'significant' but the result has never been replicated and the limits are hidden. The right attitude is:",
      "choices": [
        "Accept it as proven",
        "Treat it as a claim to be checked, not a conclusion",
        "Ignore it entirely",
        "Double the sample and accept it"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Significance in one specification is a claim; replication and transparency are what turn it into a conclusion. (a) overstates what significance means. (c) is too dismissive — the result may be real. (d) is not a substitute for replication and honest reporting."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Limitations: Quick Reference</h3>\n<p><strong>Core idea:</strong> The most important skill in econometrics is knowing when not to believe a regression.</p>\n<p><strong>Measurement error in X:</strong> attenuation bias — slope pulled toward zero. Error in Y: noise, bigger SEs, no bias.</p>\n<p><strong>Simultaneity:</strong> X and Y cause each other → X endogenous (correlated with u) → OLS biased and inconsistent. Fix: a valid instrument (relevance + exogeneity).</p>\n<p><strong>Lucas critique:</strong> relationships estimated under one policy regime can break when the regime changes behavior. Report context; don't extrapolate across regimes.</p>\n<p><strong>Guardrails:</strong> replication (new data, new specs, new methods) and transparency (source, vintage, checks, limits).</p>\n<p><strong>Watch out:</strong> a weak or invalid instrument is worse than OLS; significance is a claim, not a conclusion.</p>\n<p><strong>Self-check:</strong> For any regression, ask: what's in the error term, and is it correlated with X?</p>\n"
};
