module.exports = {
  "number": 8,
  "slug": "comparing-two-groups-difference-in-means",
  "title": "Comparing Two Groups: Difference in Means",
  "estTime": "3–4 hours",
  "objectives": [
    "Set up a two-sample hypothesis test for the difference in means.",
    "Compute a pooled two-sample t-test and interpret its p-value.",
    "Build a confidence interval for the difference in means.",
    "Run a paired t-test for before-and-after data and explain why pairing helps.",
    "Compare two proportions with a z-test."
  ],
  "sections": [
    {
      "heading": "Two Groups, One Question",
      "html": "<p>Most economic questions compare two groups: do workers with a degree earn more than workers without one? Does a training program raise wages? Does a new store layout sell more? The parameter of interest is the <strong>difference in means</strong>, μ₁ − μ₂, and the null hypothesis is usually that the difference is zero: the groups are the same.</p><p>Example: two training programs each taught 20 workers. Program A graduates averaged $68 a day in output value (s = 8); Program B graduates averaged $62 (s = 9). The observed difference is 68 − 62 = <strong>$6</strong>. Is $6 a real difference between the programs, or could two groups of 20 differ by $6 just by chance? The standard error of the difference decides.</p><div class=\"callout\"><strong>Key idea:</strong> A difference in means is just another statistic — it has its own sampling distribution, its own standard error, and its own t-test.</div>"
    },
    {
      "heading": "The Pooled Two-Sample t-Test",
      "html": "<p>When the two population standard deviations are assumed equal, we <strong>pool</strong> the sample variances into one estimate: s_p² = [(n₁ − 1)s₁² + (n₂ − 1)s₂²] ÷ (n₁ + n₂ − 2). Here s_p² = (19 × 64 + 19 × 81) ÷ 38 = 2,755 ÷ 38 = <strong>72.50</strong>, so s_p = <strong>8.5147</strong>. The standard error of the difference is s_p × √(1/n₁ + 1/n₂) = 8.5147 × √0.10 = <strong>2.6926</strong>.</p><p>The test statistic is t = (68 − 62) ÷ 2.6926 = <strong>2.228</strong> with df = 20 + 20 − 2 = 38, and the two-sided p-value is <strong>0.0319</strong>. At α = 0.05 we <strong>reject</strong> H₀: the $6 gap is bigger than chance alone would usually produce. The programs genuinely differ — or at least, the data say the difference is real.</p><div class=\"formula\">s_p&sup2; = [(n&#8321; &#8722; 1)s&#8321;&sup2; + (n&#8322; &#8722; 1)s&#8322;&sup2;] &divide; (n&#8321; + n&#8322; &#8722; 2) &nbsp;|&nbsp; t = [(x&#772;&#8321; &#8722; x&#772;&#8322;) &#8722; 0] &divide; [s_p &times; &radic;(1/n&#8321; + 1/n&#8322;)]</div>"
    },
    {
      "heading": "A Confidence Interval for the Difference",
      "html": "<p>A p-value says “the difference is real”; a confidence interval says “and here is how big it plausibly is.” The 95% interval for μ₁ − μ₂ is (x̄₁ − x̄₂) ± t* × SE. With t* = 2.0244 for df = 38, the margin is 2.0244 × 2.6926 = 5.45, so the interval is 6 ± 5.45 = <strong>($0.55, $11.45)</strong>.</p><p>Two things to read from that interval. First, it excludes 0 — consistent with rejecting H₀. Second, it is wide: the true advantage of Program A could be as small as $0.55 a day or as large as $11.45. A $6 point estimate with a $5.45 margin of error is a real effect with a fuzzy size. If the decision needs a precise size, the answer is a bigger sample — 20 per group is small for this question.</p><div class=\"callout\"><strong>Key idea:</strong> Always report the interval with the test. “Significant” tells you the difference is not zero; the interval tells you what it might actually be.</div>"
    },
    {
      "heading": "Paired Data: Before and After",
      "html": "<p>Sometimes the two groups are not independent — the same workers measured before and after training. Then you do not compare two means; you analyze the <strong>differences</strong> with a one-sample t-test. Sixteen workers were tested before and after a training program: the average improvement was d̄ = 3.2 points with s_d = 4.0. The standard error is 4.0 ÷ √16 = <strong>1.00</strong>, and t = 3.2 ÷ 1.0 = <strong>3.20</strong> with df = 15, giving a two-sided p-value of <strong>0.0060</strong>.</p><p>That is a clear rejection: training improved scores. The 95% confidence interval for the average improvement is 3.2 ± 2.131 × 1.0 = <strong>(1.07, 5.33)</strong> points. Pairing is powerful because each worker is their own control: the differences between workers (some are just better test-takers) cancel out, leaving only the change. That is why before-and-after studies can detect small effects with small samples.</p><div class=\"formula\">Paired t = d&#772; &divide; (s_d &divide; &radic;n) &nbsp;|&nbsp; df = n &#8722; 1 &nbsp;|&nbsp; CI: d&#772; &plusmn; t* &times; (s_d &divide; &radic;n)</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Two-sample test: pool the variances, SE = s_p × √(1/n₁ + 1/n₂) = 2.6926, t = 2.228, p = 0.0319 — reject H₀.</li><li>95% CI for the difference: ($0.55, $11.45) — excludes 0, but wide.</li><li>Paired test: t = 3.20 (df = 15), p = 0.0060 — reject; 95% CI for the improvement is (1.07, 5.33).</li><li>Two proportions: 62% vs. 54% in samples of 200 gives z = 1.62, p = 0.1050 — fail to reject.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Running a two-sample test on paired data. Before-and-after measurements on the same people are one sample of differences, not two independent samples — pairing them is what gives the test its power.</div><div class=\"callout\"><strong>Common mistake:</strong> Pooling when the variances are clearly unequal. If s₁ and s₂ differ a lot, use Welch's t-test (separate variances, adjusted df) instead of the pooled version.</div><p><strong>Ready-to-Work link:</strong> “Did the training work?” is a paired test. “Is Program A better than Program B?” is a two-sample test. Knowing which one you are running is the whole job — the arithmetic is the easy part.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Difference in means",
      "def": "μ₁ − μ₂: the parameter that compares two groups' averages."
    },
    {
      "term": "Two-sample t-test",
      "def": "A test of whether two population means differ, using the difference in sample means."
    },
    {
      "term": "Pooled variance",
      "def": "A weighted average of two sample variances, used when the population variances are assumed equal."
    },
    {
      "term": "Pooled standard deviation",
      "def": "s_p: the square root of the pooled variance."
    },
    {
      "term": "Degrees of freedom (two-sample)",
      "def": "df = n₁ + n₂ − 2 for the pooled two-sample t-test."
    },
    {
      "term": "Welch's t-test",
      "def": "A two-sample t-test that does not assume equal variances; uses separate variances and adjusted df."
    },
    {
      "term": "Paired data",
      "def": "Two measurements on the same subjects, such as before-and-after scores."
    },
    {
      "term": "Paired t-test",
      "def": "A one-sample t-test on the differences in paired data, with df = n − 1."
    },
    {
      "term": "Independent samples",
      "def": "Two samples with no pairing between their members."
    },
    {
      "term": "Difference in proportions",
      "def": "p₁ − p₂: the parameter comparing two groups' proportions."
    },
    {
      "term": "Pooled proportion",
      "def": "The combined proportion used in the standard error of a two-proportion z-test."
    },
    {
      "term": "Standard error of the difference",
      "def": "How far the observed difference in means typically sits from the true difference."
    },
    {
      "term": "Effect size (Cohen's d)",
      "def": "The difference in means divided by the pooled standard deviation — the difference in SD units."
    },
    {
      "term": "Confounding",
      "def": "When a third variable, not the grouping, explains the difference between groups."
    },
    {
      "term": "Random assignment",
      "def": "Assigning subjects to groups by chance, which makes the groups comparable and the test valid."
    }
  ],
  "video": {
    "title": "Introduction to the t Distribution (non-technical)",
    "embedUrl": "https://www.youtube.com/embed/Uv6nGIgZMVw",
    "note": "jbstatistics introduces the t-distribution without jargon — the distribution every test in this module runs on.",
    "more": [
      {
        "title": "Confidence Intervals for One Mean: Sigma Not Known (t Method) — jbstatistics",
        "url": "https://www.youtube.com/watch?v=bFefxSE5bmo"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Program A: n = 20, mean $68, s = 8. Program B: n = 20, mean $62, s = 9. (a) Find the pooled variance and pooled SD. (b) Find the standard error of the difference. (c) Find t and the two-sided p-value, and state the decision at α = 0.05.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: s_p² = (19 × 64 + 19 × 81) ÷ 38 = 2,755 ÷ 38 = <strong>72.50</strong>, so s_p = <strong>8.5147</strong>. Step 2: SE = 8.5147 × √(1/20 + 1/20) = 8.5147 × 0.3162 = <strong>2.6926</strong>. Step 3: t = 6 ÷ 2.6926 = <strong>2.228</strong> with df = 38; two-sided p = <strong>0.0319</strong>. Step 4: Since 0.0319 < 0.05, <strong>reject H₀</strong> — the programs differ.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> For the same two programs: (a) Find the 95% confidence interval for μ₁ − μ₂ using t* = 2.0244. (b) Interpret the interval in plain words. (c) Does it agree with the hypothesis test? Why?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Margin = 2.0244 × 2.6926 = 5.45. Step 2: The interval is 6 ± 5.45 = <strong>($0.55, $11.45)</strong>. Step 3: We are 95% confident Program A's true advantage is between $0.55 and $11.45 a day. Step 4: <strong>Yes</strong> — the interval excludes 0, which matches rejecting H₀: μ₁ − μ₂ = 0.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Sixteen workers are tested before and after training. The average improvement is 3.2 points with s_d = 4.0. (a) Find the standard error of the mean difference. (b) Find t and the two-sided p-value (df = 15). (c) Find the 95% confidence interval for the average improvement.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: SE = 4.0 ÷ √16 = <strong>1.00</strong>. Step 2: t = 3.2 ÷ 1.0 = <strong>3.20</strong>; two-sided p = <strong>0.0060</strong> — reject H₀ at α = 0.05. Step 3: 95% CI = 3.2 ± 2.131 × 1.0 = <strong>(1.07, 5.33)</strong> points of improvement.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Two surveys of 200 voters each: 62% support a policy in City 1 and 54% in City 2. Test H₀: p₁ = p₂ at α = 0.05. (a) Find the pooled proportion. (b) Find the standard error and z. (c) Find the two-sided p-value and decide.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Pooled p̂ = (124 + 108) ÷ 400 = <strong>0.58</strong>. Step 2: SE = √(0.58 × 0.42 × (1/200 + 1/200)) = <strong>0.0494</strong>. Step 3: z = 0.08 ÷ 0.0494 = <strong>1.62</strong>; two-sided p = <strong>0.1050</strong>. Step 4: Since 0.1050 > 0.05, <strong>fail to reject</strong> — an 8-point gap in samples of 200 is not strong enough evidence.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A researcher compares wages in two cities with a two-sample t-test and gets p = 0.04. Her colleague says, “So the cities' wages differ by a lot.” Explain why the colleague is wrong, using the ideas of statistical vs. practical significance.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A p-value of 0.04 says the difference is unlikely to be zero — it says nothing about how <strong>big</strong> the difference is. Step 2: With a huge sample, even a $0.50-an-hour difference can be “significant.” Step 3: To judge “a lot,” look at the confidence interval for the difference and at the size in dollars — statistical significance is about existence, practical significance is about size.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> You have before-and-after test scores for 16 workers. A classmate runs a pooled two-sample t-test instead of a paired test. (a) What is wrong with that? (b) Would the two-sample test be more or less likely to detect the improvement? Why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The data are <strong>paired</strong> — the same 16 workers measured twice — so the two groups are not independent, and a two-sample test treats them as if they were. Step 2: The paired test is <strong>more</strong> likely to detect the improvement, because it analyzes differences and the between-worker variation (some workers are just better test-takers) cancels out. Step 3: The two-sample test leaves that variation in the standard error, making it bigger and the test weaker.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The pooled variance for the two training programs is about:",
      "choices": [
        "72.50",
        "64.00",
        "81.00",
        "8.51"
      ],
      "answer": 0,
      "explanation": "Correct: (a). s_p² = (19 × 64 + 19 × 81) ÷ 38 = 2,755 ÷ 38 = 72.50. (b) is s₁² alone. (c) is s₂² alone. (d) 8.51 is s_p, the square root of the pooled variance."
    },
    {
      "q": "The two-sample t-statistic for the programs is about 2.23 with p = 0.032. At α = 0.05:",
      "choices": [
        "Fail to reject H₀",
        "Reject H₀",
        "The test is invalid",
        "Accept H₀"
      ],
      "answer": 1,
      "explanation": "Correct: (b). p = 0.0319 < 0.05, so reject H₀ — the programs differ. (a) needs p > 0.05. (c) The test is valid: independent samples, similar variances. (d) We never “accept” H₀."
    },
    {
      "q": "The 95% confidence interval for the difference in program means is about (0.55, 11.45). This means:",
      "choices": [
        "Program A is better by exactly $6",
        "We are 95% confident the true advantage is between $0.55 and $11.45 a day",
        "95% of workers differ by that much",
        "The difference is not significant"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The interval is the range of plausible true differences. (a) $6 is the point estimate, not the truth. (c) The interval is about the parameter, not about individual workers. (d) The interval excludes 0, so the difference is significant."
    },
    {
      "q": "Paired data should be analyzed with:",
      "choices": [
        "A pooled two-sample t-test",
        "A one-sample t-test on the differences",
        "A chi-square test",
        "A z-test for proportions"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Paired data reduce to one sample of differences. (a) treats the pairs as independent and wastes the pairing. (c) is for categorical data. (d) is for proportions, not means."
    },
    {
      "q": "The paired training test gives t = 3.20 with p = 0.0060. The decision is:",
      "choices": [
        "Fail to reject — no evidence of improvement",
        "Reject H₀ — training improved scores",
        "Inconclusive",
        "Use a larger α"
      ],
      "answer": 1,
      "explanation": "Correct: (b). p = 0.0060 is far below 0.05. (a) would need p > 0.05. (c) A p-value of 0.0060 is decisive, not inconclusive. (d) There is no need to change α."
    },
    {
      "q": "Two proportions 0.62 and 0.54 (n = 200 each) give z = 1.62 and p = 0.1050. At α = 0.05:",
      "choices": [
        "Reject H₀ — the cities differ",
        "Fail to reject H₀",
        "The samples are too small",
        "The pooled proportion is wrong"
      ],
      "answer": 1,
      "explanation": "Correct: (b). p = 0.1050 > 0.05. (a) needs p ≤ 0.05. (c) n = 200 per group is a large sample; the test ran fine. (d) The pooled proportion 0.58 is correct: (124 + 108) ÷ 400."
    },
    {
      "q": "The pooled two-sample t-test assumes:",
      "choices": [
        "The two samples are paired",
        "The two population variances are equal",
        "Both samples have the same mean",
        "The data are categorical"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Pooling combines the variances into one estimate, which only makes sense if the population variances are equal. (a) Pairing needs a paired test. (c) Equal means is the null hypothesis, not an assumption. (d) t-tests are for quantitative data."
    },
    {
      "q": "Cohen's d measures:",
      "choices": [
        "The p-value",
        "The difference in means in standard-deviation units",
        "The standard error",
        "The degrees of freedom"
      ],
      "answer": 1,
      "explanation": "Correct: (b). d = (x̄₁ − x̄₂) ÷ s_p — the size of the effect on a common scale. (a) The p-value measures surprise, not size. (c) The SE measures precision. (d) df sets the t-distribution."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Comparing Two Groups: Quick Reference</h3>\n<p><strong>Parameter:</strong> &mu;&#8321; − &mu;&#8322;, the difference in means. H&#8320; is usually &mu;&#8321; − &mu;&#8322; = 0.</p>\n<div class=\"formula\">s_p&sup2; = [(n&#8321; &#8722; 1)s&#8321;&sup2; + (n&#8322; &#8722; 1)s&#8322;&sup2;] &divide; (n&#8321; + n&#8322; &#8722; 2) &nbsp;|&nbsp; t = (x&#772;&#8321; &#8722; x&#772;&#8322;) &divide; [s_p &times; &radic;(1/n&#8321; + 1/n&#8322;)] &nbsp;|&nbsp; Paired: t = d&#772; &divide; (s_d &divide; &radic;n)</div>\n<p><strong>Worked anchors:</strong> Programs: s_p&sup2; = 72.50, SE = 2.6926, t = 2.228, p = 0.0319 → reject; 95% CI ($0.55, $11.45). Paired: t = 3.20, p = 0.0060 → reject; 95% CI (1.07, 5.33). Two proportions: z = 1.62, p = 0.1050 → fail to reject.</p>\n<p><strong>Watch out:</strong> Paired data need a paired test — never run a two-sample test on before-and-after measurements on the same people. And always report the confidence interval with the p-value.</p>\n<p><strong>Self-check:</strong> Take any two-group comparison from the news and decide: independent samples or paired? Then name the test you would run.</p>\n"
};
