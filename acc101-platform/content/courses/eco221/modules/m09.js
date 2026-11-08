// eco221 - Module 9: Causality: Correlation Is Not Causation
module.exports = {
  "number": 9,
  "slug": "causality-correlation-is-not-causation",
  "title": "Causality: Correlation Is Not Causation",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the three ways a correlation can arise without causation.",
    "Derive the omitted-variable bias formula and sign the bias.",
    "Explain why random assignment solves the causality problem.",
    "Describe instrumental variables, difference-in-differences, and regression discontinuity.",
    "Judge whether a given regression result can be read as causal."
  ],
  "sections": [
    {
      "heading": "Three Ways to Get a Correlation Without Causation",
      "html": "<p>A correlation between X and Y can arise three ways. First, <strong>X causes Y</strong> — the case we want. Second, <strong>Y causes X</strong> (reverse causation): police numbers and crime rates are correlated partly because high crime causes cities to hire more police, not only because police reduce crime. Third, a <strong>common cause</strong> (confounding): ice-cream sales and drownings rise together in summer, but neither causes the other — hot weather causes both. A fourth cousin is <strong>selection</strong>: people who choose a treatment differ from those who don't, so the treated group's outcomes reflect who they are, not only what they received.</p>\n<p>The regression slope cannot tell these apart. It measures association — how Y moves with X in the data — and stays silent about why. Every causal claim needs an argument beyond the regression: a design, a theory, or an assumption that rules out the other three stories. Module 1 warned you; this module gives you the tools to do something about it.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Correlation is not causation — and neither is a significant t-statistic, a high R², or a big sample. Association is what a regression estimates; causation is what a research design earns.</div>"
    },
    {
      "heading": "Omitted-Variable Bias: The Formula",
      "html": "<p>The most common threat is <strong>omitted-variable bias (OVB)</strong>: a variable Z that affects Y and is correlated with X is left out of the regression, so X takes credit for Z's effect. Suppose the true model is Y = β<sub>0</sub> + β<sub>1</sub>X + β<sub>2</sub>Z + u, but you regress Y on X alone. The estimated slope converges to β<sub>1</sub> + β<sub>2</sub> × δ, where δ is the slope from regressing Z on X. The bias is β<sub>2</sub> × δ — the effect of the omitted variable times how strongly it moves with X.</p>\n<p><strong>Worked example.</strong> True model: wage = 1 + 2 × schooling + 3 × ability (in stylized units), and ability's slope on schooling is δ = 0.5 (more able people get more schooling). Regressing wage on schooling alone gives an estimated slope of 2 + 3 × 0.5 = 2 + 1.5 = <strong>3.5</strong> — the true return to schooling is 2, but the estimate says 3.5, overstated by 1.5 because schooling is taking credit for ability. The sign rule is general: if β<sub>2</sub> and δ have the same sign, the bias is upward; opposite signs, downward. You can sign the bias even when you cannot measure Z — a useful skill when data are missing.</p>\n<div class=\"formula\">Estimated slope = β<sub>1</sub> + β<sub>2</sub> × δ &nbsp;|&nbsp; Bias = β<sub>2</sub> × δ (δ = slope of Z on X)</div>\n<p>The fix is to control for Z — include it in the regression — if you can measure it. If you cannot, you need a design that breaks the link between X and the omitted variable, which is the rest of this module.</p>"
    },
    {
      "heading": "Experiments: The Gold Standard",
      "html": "<p>A <strong>randomized experiment</strong> assigns the treatment by lottery. Because assignment is random, the treated and untreated groups are the same on average in every respect — observed and unobserved, including ability, motivation, and background. Any later difference in outcomes must be caused by the treatment, because nothing else differs systematically between the groups. That is why experiments are the gold standard for causation.</p>\n<p>Economists run experiments when they can — job-training lotteries, classroom lotteries, audit studies — but often they cannot: you cannot randomize schooling, tax rates, or recessions. The rest of econometrics is a set of <strong>quasi-experimental</strong> designs that mimic randomization as closely as possible with observational data. Three are the workhorses below.</p>"
    },
    {
      "heading": "Three Quasi-Experimental Designs",
      "html": "<p><strong>Instrumental variables (IV).</strong> Find a variable Z (an <strong>instrument</strong>) that moves X but affects Y only through X. The classic example: distance to college affects schooling but (arguably) does not directly affect wages except through schooling — so variation in schooling caused by distance is as good as random. IV needs two conditions: <strong>relevance</strong> (Z really moves X) and <strong>exogeneity</strong> (Z is unrelated to the error). A weak instrument — one barely related to X — gives wild, unreliable estimates.</p>\n<p><strong>Difference-in-differences (DiD).</strong> Compare the change over time in a treated group with the change in an untreated control group. <strong>Worked example:</strong> a state raises its minimum wage; employment in the treated state rises by 5 (from an index of 100 to 105) while employment in a neighboring control state rises by 2 (100 to 102). The DiD estimate is 5 − 2 = <strong>3</strong>: the policy is associated with 3 extra points of employment growth, after removing the trend both states shared. DiD needs the <strong>parallel trends</strong> assumption: without the policy, both groups would have moved together.</p>\n<p><strong>Regression discontinuity (RD).</strong> When a treatment turns on at a sharp cutoff — a scholarship for test scores above 80, a program for firms with fewer than 50 employees — compare people just above and just below the cutoff. They are nearly identical except for the treatment, so the jump in outcomes at the cutoff is the causal effect. RD is clean but local: it estimates the effect only near the cutoff.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Every causal design is a different way of finding variation in X that is as good as random. Experiments randomize it; IV finds it in an instrument; DiD finds it in a policy change; RD finds it at a cutoff. The design, not the regression, is what makes the result causal.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Correlation can come from X causing Y, Y causing X, a common cause, or selection — the slope alone cannot tell which.</li>\n<li>Omitted-variable bias: estimated slope = β<sub>1</sub> + β<sub>2</sub> × δ. Example: true return 2, bias 1.5, estimated 3.5.</li>\n<li>Random assignment solves the problem by making groups identical on average in every respect.</li>\n<li>IV needs relevance + exogeneity; DiD needs parallel trends (worked example: 5 − 2 = 3); RD compares just above and below a cutoff.</li>\n<li>Correlation is not causation — repeat it every time you report a slope.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Controlling for a variable that is itself caused by X (a \"bad control\"). Controlling for occupation when estimating the effect of schooling on wages blocks part of schooling's effect — schooling raises wages partly by opening better occupations. Control for things that come before X, not things X causes.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Calling a DiD estimate causal without checking parallel trends. If the treated and control groups were already diverging before the policy, the DiD estimate is just that divergence wearing a policy label. Always plot the pre-trends.</div>\n<p><strong>Ready-to-Work link:</strong> \"Does X cause Y, or do they just move together?\" is the question behind every policy evaluation and every A/B test. If you can name the threat (reverse causation, confounding, selection, OVB), sign the bias, and pick the design that answers it, you can evaluate any causal claim.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Causation", "def": "X causes Y if changing X (and nothing else) changes Y." },
    { "term": "Reverse causation", "def": "Y causing X, so a correlation runs the wrong way round." },
    { "term": "Confounding (common cause)", "def": "A third variable that causes both X and Y, creating a correlation between them." },
    { "term": "Selection", "def": "People choosing a treatment based on traits that also affect outcomes, so groups differ for reasons other than the treatment." },
    { "term": "Omitted-variable bias (OVB)", "def": "Bias from leaving out a Z that affects Y and is correlated with X: bias = β2 × δ." },
    { "term": "Randomized experiment", "def": "A study that assigns treatment by lottery, making groups identical on average." },
    { "term": "Quasi-experiment", "def": "A design that mimics randomization using observational data (IV, DiD, RD)." },
    { "term": "Instrumental variable (IV)", "def": "A variable that moves X but affects Y only through X, used to isolate causal variation." },
    { "term": "Relevance", "def": "An instrument must actually move X — a weak instrument gives unreliable estimates." },
    { "term": "Exogeneity (of an instrument)", "def": "An instrument must be unrelated to the error term in the outcome equation." },
    { "term": "Difference-in-differences (DiD)", "def": "The change in a treated group minus the change in a control group; needs parallel trends." },
    { "term": "Parallel trends", "def": "The assumption that treated and control groups would have moved together without the policy." },
    { "term": "Regression discontinuity (RD)", "def": "Comparing outcomes just above and below a sharp treatment cutoff." },
    { "term": "Bad control", "def": "A control variable that is itself caused by X, which blocks part of X's effect when included." }
  ],
  "video": {
    "title": "What is correlation?",
    "embedUrl": "https://www.youtube.com/embed/ucB9svLYXoQ",
    "note": "A short, clear explanation of correlation — what it measures, and why a pattern that helps you notice a relationship does not by itself tell you what caused it. Watch it, then list the three non-causal stories that could explain any correlation in this module.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Ice-cream sales and drownings are strongly correlated in monthly data. Give the causal story, the reverse-causation story, and the common-cause story, and say which is most plausible.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Causal story: eating ice cream causes drowning — implausible; there is no mechanism. Step 2: Reverse causation: drowning causes ice-cream sales — absurd. Step 3: Common cause: hot summer weather causes both more ice-cream eating and more swimming, hence more drownings. Step 4: The common-cause story is the plausible one: temperature is the confounder. Step 5: Controlling for temperature (or using monthly dummies) should make the ice-cream–drowning correlation vanish — a testable prediction of the common-cause story.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The true model is wage = 1 + 2 × schooling + 3 × ability, and the slope of ability on schooling is δ = 0.5. What slope do you get regressing wage on schooling alone? Is it biased up or down, and by how much?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The estimated slope is β<sub>1</sub> + β<sub>2</sub> × δ = 2 + 3 × 0.5 = 2 + 1.5 = <strong>3.5</strong>. Step 2: The bias is <strong>+1.5</strong> (upward): the estimate overstates the true return of 2. Step 3: The sign follows the rule: β<sub>2</sub> = 3 (positive) and δ = 0.5 (positive) have the same sign, so the bias is upward. Step 4: Schooling takes credit for ability, because more able people get more schooling and ability also raises wages.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> In Problem 2, suppose instead that δ = −0.5 (more schooling is associated with lower ability, because only the less able stay in school longer in this strange sample). What is the estimated slope and the bias?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Estimated slope = 2 + 3 × (−0.5) = 2 − 1.5 = <strong>0.5</strong>. Step 2: The bias is <strong>−1.5</strong> (downward). Step 3: β<sub>2</sub> and δ now have opposite signs, so the bias flips down — the estimate understates the true return of 2. Step 4: This is why you can sign the bias from theory even when you cannot measure the omitted variable: the signs of β<sub>2</sub> and δ are often known even when their sizes are not.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A state raises its minimum wage. Employment (index) in the treated state goes from 100 to 105; in a neighboring control state it goes from 100 to 102. Compute the difference-in-differences estimate and state the key assumption.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Treated change = 105 − 100 = <strong>5</strong>. Step 2: Control change = 102 − 100 = <strong>2</strong>. Step 3: DiD = 5 − 2 = <strong>3</strong>: the policy is associated with 3 extra points of employment growth. Step 4: The key assumption is <strong>parallel trends</strong> — without the policy, the treated state would have grown by the same 2 points as the control. Step 5: Check it by plotting both states' employment before the policy: if they were already diverging, the DiD estimate is not credible.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A researcher wants the causal effect of a job-training program. Workers who enroll are more motivated than those who don't. Explain the problem and name two designs that could fix it.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The problem is <strong>selection</strong>: enrollees differ in motivation, which also affects earnings, so the earnings gap mixes the program's effect with the motivation gap — an omitted variable (motivation) correlated with treatment. Step 2: Design 1: a <strong>randomized experiment</strong> — offer training by lottery among applicants, so motivation is balanced across groups. Step 3: Design 2: an <strong>instrumental variable</strong> — for example, distance to the training center, which affects enrollment but not earnings directly. Step 4: Either design isolates variation in training that is unrelated to motivation.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A scholarship is awarded to students scoring 80 or above on a test. Explain how regression discontinuity estimates its effect, and why the estimate is \"local.\"</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Compare students just above 80 (who get the scholarship) with students just below 80 (who do not). Step 2: Those two groups are nearly identical in ability and background — the cutoff is arbitrary, so which side you land on is nearly random near the boundary. Step 3: The jump in outcomes (say, college enrollment) at the cutoff is the causal effect of the scholarship. Step 4: The estimate is <strong>local</strong> because it only applies near the cutoff: it says what the scholarship does for students scoring around 80, not for students scoring 50 or 95.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Ice-cream sales and drownings are correlated. The most plausible explanation is:",
      "choices": [
        "Ice cream causes drowning",
        "Drowning causes ice-cream sales",
        "Hot weather is a common cause of both",
        "The correlation must be a data error"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Summer heat raises both ice-cream eating and swimming. (a) has no plausible mechanism. (b) reverses causation absurdly. (d) is wrong — real correlations can be non-causal."
    },
    {
      "q": "Omitted-variable bias arises when the omitted variable Z:",
      "choices": [
        "Affects Y but is uncorrelated with X",
        "Affects Y and is correlated with X",
        "Affects neither Y nor X",
        "Is measured with error only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Both conditions are needed: Z must matter for Y (β2 ≠ 0) and move with X (δ ≠ 0). (a) gives no bias — if δ = 0, the bias term β2 × δ is zero. (c) gives no bias. (d) is measurement error, a different problem."
    },
    {
      "q": "True model: Y = 1 + 2X + 3Z, and the slope of Z on X is δ = 0.5. Regressing Y on X alone gives a slope of:",
      "choices": [
        "2",
        "2.5",
        "3.5",
        "5"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Estimated slope = 2 + 3 × 0.5 = 3.5. (a) is the true slope, which the short regression does not recover. (b) is 2 + 0.5, forgetting to multiply by β2 = 3. (d) is 2 + 3, forgetting δ."
    },
    {
      "q": "If β2 and δ have opposite signs, the omitted-variable bias is:",
      "choices": [
        "Upward",
        "Downward",
        "Zero",
        "Impossible to sign"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Bias = β2 × δ, and a product of opposite signs is negative. (a) is the case for same signs. (c) needs one of them to be zero. (d) is false — the sign rule is exactly how you sign it."
    },
    {
      "q": "Random assignment solves the causality problem because:",
      "choices": [
        "It increases the sample size",
        "It makes treated and untreated groups the same on average in every respect",
        "It guarantees a high R²",
        "It removes the need for a control group"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Randomization balances observed and unobserved traits alike, so differences in outcomes must come from the treatment. (a) is incidental. (c) is false — experiments often have low R². (d) is backwards — the untreated group is the control."
    },
    {
      "q": "A valid instrumental variable must be:",
      "choices": [
        "Correlated with the error term",
        "Related to X (relevance) and unrelated to the error (exogeneity)",
        "The same as the dependent variable",
        "Measured without error only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Both conditions are required: relevance and exogeneity. (a) violates exogeneity — that is the problem IV is meant to solve. (c) is nonsense. (d) is not a requirement for IV."
    },
    {
      "q": "Treated employment rises 5 points, control employment rises 2 points. The difference-in-differences estimate is:",
      "choices": [
        "2",
        "3",
        "5",
        "7"
      ],
      "answer": 1,
      "explanation": "Correct: (b). DiD = 5 − 2 = 3. (a) is the control change alone. (c) is the treated change alone. (d) adds the two changes instead of subtracting."
    },
    {
      "q": "Controlling for occupation when estimating the effect of schooling on wages is a problem because occupation is:",
      "choices": [
        "A bad control — schooling affects occupation, so controlling for it blocks part of schooling's effect",
        "Irrelevant to wages",
        "A perfect instrument",
        "Always uncorrelated with schooling"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Occupation is on the causal path from schooling to wages; controlling for it removes part of the effect you want to measure. (b) is false — occupation strongly affects wages. (c) is false — an instrument must move schooling, not be caused by it. (d) is false — schooling and occupation are strongly related."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Causality: Quick Reference</h3>\n<p><strong>Core idea:</strong> A regression estimates association. Causation needs a design — and the slope alone can never tell you which story produced the correlation.</p>\n<div class=\"formula\">Estimated slope = β<sub>1</sub> + β<sub>2</sub> × δ &nbsp;|&nbsp; Bias = β<sub>2</sub> × δ (δ = slope of omitted Z on X)</div>\n<p><strong>Three non-causal stories:</strong> reverse causation (Y causes X) · common cause / confounding · selection.</p>\n<p><strong>Worked anchors:</strong> OVB: true slope 2, β<sub>2</sub> = 3, δ = 0.5 → estimated 3.5 (bias +1.5). DiD: treated +5, control +2 → estimate 3 (needs parallel trends).</p>\n<p><strong>Designs:</strong> randomized experiment (gold standard) · IV (relevance + exogeneity) · DiD (parallel trends) · RD (jump at a cutoff, local effect).</p>\n<p><strong>Watch out:</strong> don't control for a \"bad control\" that X itself causes; always check pre-trends in DiD; correlation is not causation — every time.</p>\n<p><strong>Self-check:</strong> Given a headline slope, name the omitted variable, sign the bias, and pick the design that would test it.</p>\n"
};
