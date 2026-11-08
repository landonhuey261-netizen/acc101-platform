module.exports = {
  "number": 6,
  "slug": "estimation-and-confidence-intervals",
  "title": "Estimation & Confidence Intervals",
  "estTime": "3–4 hours",
  "objectives": [
    "Distinguish a point estimate from an interval estimate.",
    "Build and interpret a confidence interval for a population mean (z and t versions).",
    "Build and interpret a confidence interval for a population proportion.",
    "Explain what “95% confident” does and does not mean.",
    "Compute the sample size needed for a target margin of error."
  ],
  "sections": [
    {
      "heading": "Point Estimates and Interval Estimates",
      "html": "<p>A <strong>point estimate</strong> is a single number guessed for a parameter: the sample mean x̄ = 52 estimates the population mean μ. It is the best single guess, but it is almost certainly wrong by a little — sampling variability guarantees it. An <strong>interval estimate</strong> admits that: it gives a range of plausible values for the parameter, built as point estimate ± margin of error.</p><p>The <strong>margin of error</strong> is the price of honesty: it is (critical value) × (standard error). A wider interval is more likely to contain the truth but less useful; a narrower interval is more useful but riskier. The confidence level — usually 95% — sets the trade-off, and this module shows you how to build the interval in each of the three common cases: a mean with σ known, a mean with σ unknown, and a proportion.</p><div class=\"callout\"><strong>Key idea:</strong> A point estimate is a guess; an interval estimate is a guess plus an honest statement of how far off it might be. Economists almost always report the interval.</div>"
    },
    {
      "heading": "Confidence Intervals for a Mean: The z Version",
      "html": "<p>When the population standard deviation σ is known (rare, but the cleanest case), the 95% confidence interval for μ is x̄ ± 1.96 × (σ ÷ √n). Example: a sample of n = 36 workers has a mean wage of $52 an hour with σ = $12 known. The standard error is 12 ÷ 6 = 2, the margin of error is 1.96 × 2 = 3.92, and the interval is 52 ± 3.92 = <strong>($48.08, $55.92)</strong>.</p><p>Read it as: “We are 95% confident the true mean wage is between $48.08 and $55.92.” That does <strong>not</strong> mean there is a 95% chance μ is in this particular interval — μ is a fixed number, and it either is in there or it is not. It means the <em>procedure</em> works 95% of the time: if you built intervals this way from 100 different samples, about 95 of them would contain μ.</p><div class=\"formula\">x&#772; &plusmn; z* &times; (&sigma; &divide; &radic;n) &nbsp;|&nbsp; 95% uses z* = 1.96 &nbsp;|&nbsp; 90% uses z* = 1.645 &nbsp;|&nbsp; 99% uses z* = 2.576</div>"
    },
    {
      "heading": "When σ Is Unknown: The t-Distribution",
      "html": "<p>In real life σ is almost never known, so we estimate it with the sample standard deviation s — and that extra uncertainty widens the interval. The fix is the <strong>t-distribution</strong>: like the normal curve but with fatter tails, and the tails get fatter as the sample gets smaller. The interval becomes x̄ ± t* × (s ÷ √n), where t* depends on the degrees of freedom (df = n − 1).</p><p>Example: a sample of n = 16 workers has mean $48 and s = $8. The standard error is 8 ÷ 4 = 2, the degrees of freedom are 15, and t* for 95% confidence is 2.131. The margin of error is 2.131 × 2 = 4.26, and the interval is <strong>($43.74, $52.26)</strong>. Compare with the z version: the t interval is wider (margin 4.26 instead of 3.92) because we had to estimate σ. At 90% confidence, t* = 1.753 and the interval narrows to <strong>($44.49, $51.51)</strong> — less confidence, narrower interval.</p><div class=\"callout\"><strong>Key idea:</strong> Use z when σ is known; use t (with df = n − 1) when σ is estimated from the sample. With large n the two agree, because t approaches z.</div>"
    },
    {
      "heading": "Confidence Intervals for a Proportion",
      "html": "<p>For a proportion the interval is p̂ ± z* × √[p̂(1 − p̂) ÷ n]. Example: in a survey of n = 400 voters, 62% support a transit levy, so p̂ = 0.62. The standard error is √(0.62 × 0.38 ÷ 400) = <strong>0.0243</strong>, the margin of error is 1.96 × 0.0243 = 0.0476, and the 95% interval is <strong>(0.572, 0.668)</strong> — 57.2% to 66.8% support.</p><p>This is the “±3 points” you see in polls. The margin of error depends on n and on p̂: it is biggest when p̂ is near 0.5 and shrinks as p̂ moves toward 0 or 1. And note the condition: the normal approximation needs at least 10 successes and 10 failures in the sample (here 248 and 152 — comfortably met).</p><div class=\"formula\">p&#770; &plusmn; z* &times; &radic;[p&#770;(1 &#8722; p&#770;) &divide; n] &nbsp;|&nbsp; needs np&#770; &ge; 10 and n(1 &#8722; p&#770;) &ge; 10</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Interval = point estimate ± (critical value × standard error).</li><li>Mean, σ known: 52 ± 3.92 = ($48.08, $55.92).</li><li>Mean, σ unknown (t, df = 15): 48 ± 4.26 = ($43.74, $52.26).</li><li>Proportion: 0.62 ± 0.0476 = (0.572, 0.668).</li><li>Sample size for a mean: to get a margin of 2 with σ = 10 at 95%, n = 97. For a proportion with margin 0.03, n = 1068.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Saying “there is a 95% chance μ is in this interval.” The 95% describes the procedure over many samples, not this one interval. Say “we are 95% confident,” and mean the procedure.</div><div class=\"callout\"><strong>Common mistake:</strong> Using z when σ is unknown. If you estimated σ from the sample, you must use t — and the smaller n is, the more it matters.</div><p><strong>Ready-to-Work link:</strong> “Our estimate is $52 an hour, plus or minus $4” is how economists talk in meetings. The ± is the margin of error, and now you know exactly where it comes from.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Point estimate",
      "def": "A single number used to guess a parameter, such as the sample mean estimating μ."
    },
    {
      "term": "Interval estimate",
      "def": "A range of plausible values for a parameter, built as estimate ± margin of error."
    },
    {
      "term": "Margin of error",
      "def": "Critical value × standard error; half the width of a confidence interval."
    },
    {
      "term": "Confidence interval",
      "def": "An interval built from sample data that plausibly contains the parameter."
    },
    {
      "term": "Confidence level",
      "def": "The long-run success rate of the interval procedure, usually 90%, 95%, or 99%."
    },
    {
      "term": "Critical value",
      "def": "The z* or t* multiplier that sets the confidence level; 1.96 for 95% with z."
    },
    {
      "term": "t-distribution",
      "def": "A bell-shaped distribution with fatter tails than the normal, used when σ is estimated; indexed by degrees of freedom."
    },
    {
      "term": "Degrees of freedom",
      "def": "For one mean, df = n − 1; it sets which t-distribution to use."
    },
    {
      "term": "Standard error",
      "def": "The standard deviation of the sampling distribution; the building block of the margin of error."
    },
    {
      "term": "Sample size determination",
      "def": "Solving the margin-of-error formula for n to plan how big a sample you need."
    },
    {
      "term": "Conservative sample size",
      "def": "For a proportion, using p = 0.5 in the sample-size formula, which gives the largest (safest) n."
    },
    {
      "term": "Coverage",
      "def": "How often a confidence-interval procedure actually contains the parameter over many samples."
    },
    {
      "term": "Width of an interval",
      "def": "Upper limit minus lower limit; twice the margin of error."
    },
    {
      "term": "One-sided interval",
      "def": "A bound in one direction only, such as “at least $48,” used when only one side matters."
    },
    {
      "term": "Robustness",
      "def": "How well a procedure keeps working when its assumptions are slightly wrong; t intervals are fairly robust to non-normality with moderate n."
    }
  ],
  "video": {
    "title": "Introduction to Confidence Intervals",
    "embedUrl": "https://www.youtube.com/embed/27iSnzss2wM",
    "note": "jbstatistics introduces confidence intervals from first principles and works a full example — the exact calculation this module practices.",
    "more": [
      {
        "title": "Intro to Confidence Intervals for One Mean (Sigma Known) — jbstatistics",
        "url": "https://www.youtube.com/watch?v=KG921rfbTDw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A sample of n = 36 workers has mean wage $52 with σ = $12 known. (a) Find the standard error. (b) Find the 95% confidence interval for μ. (c) Find the 90% confidence interval.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: SE = 12 ÷ √36 = 12 ÷ 6 = <strong>2</strong>. Step 2: 95% margin = 1.96 × 2 = 3.92, so the interval is 52 ± 3.92 = <strong>($48.08, $55.92)</strong>. Step 3: 90% uses z* = 1.645, margin = 3.29, so the interval is 52 ± 3.29 = <strong>($48.71, $55.29)</strong> — narrower, because 90% confidence is a weaker promise.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A sample of n = 16 workers has mean $48 and s = $8 (σ unknown). (a) Find the standard error and the degrees of freedom. (b) Find the 95% confidence interval using t* = 2.131. (c) Find the 90% interval using t* = 1.753.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: SE = 8 ÷ √16 = 8 ÷ 4 = <strong>2</strong>; df = 16 − 1 = <strong>15</strong>. Step 2: 95% margin = 2.131 × 2 = 4.26, so the interval is <strong>($43.74, $52.26)</strong>. Step 3: 90% margin = 1.753 × 2 = 3.51, so the interval is <strong>($44.49, $51.51)</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> In a survey of n = 400 voters, 62% support a transit levy. (a) Find the standard error of the sample proportion. (b) Find the 95% confidence interval for the true proportion. (c) Check the success/failure condition.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: SE = √(0.62 × 0.38 ÷ 400) = <strong>0.0243</strong>. Step 2: Margin = 1.96 × 0.0243 = 0.0476, so the interval is 0.62 ± 0.0476 = <strong>(0.572, 0.668)</strong>. Step 3: Successes = 0.62 × 400 = 248 and failures = 152 — both above 10, so the normal approximation is fine.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A researcher wants a 95% confidence interval for a mean with a margin of error of at most 2, and knows σ = 10. (a) How large a sample is needed? (b) If she can only afford n = 64, what margin of error will she get?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: n = (z* × σ ÷ E)² = (1.96 × 10 ÷ 2)² = 9.8² = 96.04, so round up to <strong>n = 97</strong>. Step 2: With n = 64, SE = 10 ÷ 8 = 1.25 and the margin is 1.96 × 1.25 = <strong>2.45</strong>. Step 3: A smaller sample means a wider interval — she would miss her target of 2.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A pollster wants a 95% confidence interval for a proportion with a margin of error of at most 0.03, using the conservative p = 0.5. How large a sample is needed? Show the arithmetic.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: n = (z* ÷ E)² × p(1 − p) = (1.96 ÷ 0.03)² × 0.25. Step 2: (1.96 ÷ 0.03) = 65.33; 65.33² = 4,268.44; × 0.25 = 1,067.11. Step 3: Round up to <strong>n = 1068</strong>. Step 4: Using p = 0.5 is conservative — it gives the largest sample size, so the margin is guaranteed no matter what the true proportion turns out to be.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Two intervals for the same population mean are (46, 54) at 95% confidence and (47, 53) at 90% confidence, both from the same sample. (a) Which interval is wider, and why? (b) A colleague says “the 95% interval means there is a 95% chance the mean is between 46 and 54.” Correct her in one or two sentences.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The <strong>95% interval is wider</strong> (width 8 vs. width 6), because a stronger promise needs a bigger margin — the critical value grows from 1.645 to 1.96. Step 2: The correction: 95% describes the <strong>procedure</strong>, not this interval. If we repeated the sampling and built intervals the same way 100 times, about 95 of them would contain μ; this particular interval either contains μ or it does not.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A sample of n = 36 has mean 52 and σ = 12 known. The 95% confidence interval for μ is:",
      "choices": [
        "(48.08, 55.92)",
        "(50, 54)",
        "(44, 60)",
        "(51, 53)"
      ],
      "answer": 0,
      "explanation": "Correct: (a). SE = 2, margin = 1.96 × 2 = 3.92, so 52 ± 3.92 = (48.08, 55.92). (b) uses a margin of 2, which is one standard error, not 1.96. (c) uses a margin of 8. (d) uses a margin of 1."
    },
    {
      "q": "When σ is unknown, a confidence interval for a mean uses:",
      "choices": [
        "The z-distribution with z* = 1.96",
        "The t-distribution with df = n − 1",
        "The chi-square distribution",
        "No critical value at all"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Estimating σ adds uncertainty, so the fatter-tailed t-distribution with n − 1 degrees of freedom is used. (a) is right only when σ is known. (c) is for variances, not means. (d) Every interval needs a critical value."
    },
    {
      "q": "With n = 16, mean 48, s = 8, the 95% t-interval is about (43.74, 52.26) because:",
      "choices": [
        "t* = 2.131 and the margin is 4.26",
        "z* = 1.96 and the margin is 3.92",
        "The SE is 8",
        "df = 16"
      ],
      "answer": 0,
      "explanation": "Correct: (a). df = 15, t* = 2.131, SE = 2, margin = 4.26. (b) describes the z interval, which is too narrow here. (c) The SE is 8 ÷ 4 = 2, not 8. (d) df = n − 1 = 15, not 16."
    },
    {
      "q": "“We are 95% confident” means:",
      "choices": [
        "There is a 95% chance μ is in this interval",
        "The interval procedure captures μ in about 95% of repeated samples",
        "95% of the data fall in the interval",
        "The sample mean is 95% accurate"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Confidence is a long-run property of the procedure. (a) is the classic misreading — μ is fixed, not random. (c) describes a prediction interval, not a confidence interval. (d) “95% accurate” is not a defined quantity."
    },
    {
      "q": "Raising the confidence level from 90% to 99% will:",
      "choices": [
        "Narrow the interval",
        "Widen the interval",
        "Leave the interval unchanged",
        "Change the sample mean"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A stronger promise needs a larger critical value (2.576 instead of 1.645) and therefore a wider interval. (a) is backwards. (c) The critical value changes, so the interval changes. (d) The sample mean is fixed by the data."
    },
    {
      "q": "In the voter survey (n = 400, p̂ = 0.62), the 95% confidence interval is about:",
      "choices": [
        "(0.57, 0.67)",
        "(0.60, 0.64)",
        "(0.52, 0.72)",
        "(0.62, 0.62)"
      ],
      "answer": 0,
      "explanation": "Correct: (a). SE = 0.0243, margin = 0.0476, so 0.62 ± 0.0476 = (0.572, 0.668). (b) uses a margin of 0.02 — too small. (c) uses a margin of 0.10. (d) has no margin at all."
    },
    {
      "q": "Doubling the sample size will:",
      "choices": [
        "Halve the margin of error",
        "Cut the margin of error by a factor of about 1.41",
        "Double the margin of error",
        "Leave the margin unchanged"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The margin is proportional to 1 ÷ √n, and √2 ≈ 1.41, so doubling n divides the margin by 1.41. (a) needs n to quadruple. (c) is backwards. (d) ignores the √n in the standard error."
    },
    {
      "q": "To get a margin of error of 2 for a mean with σ = 10 at 95% confidence, you need about n =",
      "choices": [
        "25",
        "97",
        "400",
        "1,068"
      ],
      "answer": 1,
      "explanation": "Correct: (b). n = (1.96 × 10 ÷ 2)² = 96.04, rounded up to 97. (a) 25 gives a margin of 3.92. (c) 400 gives a margin of 0.98 — more precision than asked for. (d) 1,068 is the conservative sample size for a proportion with margin 0.03."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Estimation &amp; Confidence Intervals: Quick Reference</h3>\n<p><strong>Interval = estimate ± margin of error</strong>, and margin of error = critical value × standard error.</p>\n<div class=\"formula\">Mean (&sigma; known): x&#772; &plusmn; z* &times; (&sigma; &divide; &radic;n) &nbsp;|&nbsp; Mean (&sigma; unknown): x&#772; &plusmn; t* &times; (s &divide; &radic;n), df = n &#8722; 1 &nbsp;|&nbsp; Proportion: p&#770; &plusmn; z* &times; &radic;[p&#770;(1 &#8722; p&#770;) &divide; n]</div>\n<p><strong>Critical values (z):</strong> 90% → 1.645 · 95% → 1.96 · 99% → 2.576. <strong>t* is larger than z*</strong> and shrinks toward it as n grows.</p>\n<p><strong>Worked anchors:</strong> Mean 52 ± 3.92 = (48.08, 55.92); t interval 48 ± 4.26 = (43.74, 52.26); proportion 0.62 ± 0.0476 = (0.572, 0.668).</p>\n<p><strong>Sample sizes:</strong> Mean: n = (z*&sigma; ÷ E)&sup2; = 97 for E = 2, &sigma; = 10. Proportion: n = (z* ÷ E)&sup2; × 0.25 = 1068 for E = 0.03.</p>\n<p><strong>Watch out:</strong> 95% describes the procedure over many samples, not this one interval. And use t whenever &sigma; is estimated from the sample.</p>\n<p><strong>Self-check:</strong> Take any poll result (percentage + sample size) and build its 95% confidence interval yourself.</p>\n"
};
