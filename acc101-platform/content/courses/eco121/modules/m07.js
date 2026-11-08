module.exports = {
  "number": 7,
  "slug": "hypothesis-testing-is-the-difference-real",
  "title": "Hypothesis Testing: Is the Difference Real?",
  "estTime": "3–4 hours",
  "objectives": [
    "State a null and an alternative hypothesis for a mean or a proportion.",
    "Compute a test statistic (z or t) and a p-value, and interpret both.",
    "Make a reject / fail-to-reject decision at a chosen significance level.",
    "Explain Type I and Type II errors and what power means.",
    "Connect hypothesis tests to confidence intervals."
  ],
  "sections": [
    {
      "heading": "The Question: Is the Difference Real or Just Noise?",
      "html": "<p>A factory claims its workers average $100 a day in output value. You sample 36 workers and find a mean of $104. Is the factory's claim wrong — or did you just happen to sample 36 unusually productive workers? That is the question hypothesis testing answers. The sample mean will almost never equal the claimed value exactly, even when the claim is true. The test asks whether the gap is bigger than sampling variability can explain.</p><p>The setup has two hypotheses. The <strong>null hypothesis</strong> H₀ is the status quo: μ = 100. The <strong>alternative hypothesis</strong> H₁ is what you suspect instead: μ > 100 (one-sided) or μ ≠ 100 (two-sided). You assume H₀ is true, work out how surprising your sample would be under that assumption, and decide. The machinery is one number: the <strong>p-value</strong>.</p><div class=\"callout\"><strong>Key idea:</strong> A hypothesis test never proves H₀ or H₁. It measures how surprising the data are if H₀ were true — and if they are surprising enough, you reject H₀.</div>"
    },
    {
      "heading": "The Test Statistic and the P-Value",
      "html": "<p>The <strong>test statistic</strong> is a z-score (or t-score) for your sample: how many standard errors the sample statistic sits from the null value. For the factory, σ = 15 is known and n = 36, so the standard error is 15 ÷ 6 = 2.5, and z = (104 − 100) ÷ 2.5 = <strong>1.60</strong>. The sample mean is 1.6 standard errors above the claimed mean.</p><p>The <strong>p-value</strong> is the probability of a result at least this extreme if H₀ were true. For the one-sided alternative μ > 100, p = P(Z > 1.6) = <strong>0.0548</strong>. In plain words: if the true mean really were 100, about 5.5% of samples of 36 would show a mean of 104 or more just by chance. That is not quite rare enough to reject at the usual 5% level — so we <strong>fail to reject</strong> H₀. The evidence leans against the claim but does not clear the bar.</p><div class=\"formula\">z = (x&#772; &#8722; &mu;&#8320;) &divide; (&sigma; &divide; &radic;n) &nbsp;|&nbsp; t = (x&#772; &#8722; &mu;&#8320;) &divide; (s &divide; &radic;n) &nbsp;|&nbsp; p-value = P(result this extreme | H&#8320; true)</div>"
    },
    {
      "heading": "The t-Test: When σ Is Unknown",
      "html": "<p>When σ is unknown you use the sample SD and the t-distribution, exactly as with confidence intervals. Example: a sample of n = 25 students has a mean test score of 52.4 with s = 10, testing H₀: μ = 50 against H₁: μ ≠ 50. The standard error is 10 ÷ 5 = 2, the test statistic is t = (52.4 − 50) ÷ 2 = <strong>1.20</strong> with df = 24, and the two-sided p-value is <strong>0.2419</strong>.</p><p>At α = 0.05 we fail to reject H₀: a p-value of 0.24 means results this far from 50 happen about 24% of the time even when the true mean is 50. Notice the same data with a bigger sample would tell a different story — with n = 100 the same mean and SD would give t = 2.4 and p = 0.018, a rejection. Sample size is not a detail; it is half the test.</p><div class=\"callout\"><strong>Key idea:</strong> A p-value is not the probability that H₀ is true. It is the probability of the data (or more extreme data) if H₀ is true. That “if” is doing all the work.</div>"
    },
    {
      "heading": "Errors, Power, and the Link to Confidence Intervals",
      "html": "<p>Two mistakes are possible. A <strong>Type I error</strong> is rejecting a true H₀ — a false alarm, with probability α (usually 0.05). A <strong>Type II error</strong> is failing to reject a false H₀ — a missed signal, with probability β. <strong>Power</strong> is 1 − β: the chance of catching a real effect. For the factory test (one-sided, α = 0.05), we reject when x̄ exceeds 100 + 1.645 × 2.5 = 104.11. If the true mean were actually 105, the power is P(x̄ > 104.11 | μ = 105) = <strong>0.6387</strong> — about a 64% chance of detecting it.</p><p>Hypothesis tests and confidence intervals are two sides of one coin: a two-sided test at α = 0.05 rejects H₀: μ = μ₀ exactly when μ₀ falls outside the 95% confidence interval. The factory's 95% interval is 104 ± 1.96 × 2.5 = (99.10, 108.90), and 100 sits inside it — consistent with failing to reject. The proportion test works the same way: 110 of 200 voters (55%) support a policy against H₀: p = 0.50. The standard error under H₀ is √(0.25 ÷ 200) = 0.0354, z = (0.55 − 0.50) ÷ 0.0354 = <strong>1.41</strong>, and the two-sided p-value is <strong>0.1573</strong> — fail to reject.</p><div class=\"formula\">Power = 1 &#8722; &beta; = P(reject H&#8320; | H&#8320; false) &nbsp;|&nbsp; Two-sided test at &alpha; rejects &mu;&#8320; exactly when &mu;&#8320; is outside the (1 &#8722; &alpha;) confidence interval</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>H₀ is the status quo; H₁ is the claim. Assume H₀, measure surprise with the p-value.</li><li>Factory test: z = 1.60, one-sided p = 0.0548 — fail to reject at α = 0.05 (just barely).</li><li>t-test: t = 1.20 (df = 24), two-sided p = 0.2419 — fail to reject.</li><li>Proportion test: z = 1.41, two-sided p = 0.1573 — fail to reject.</li><li>Type I error = false alarm (probability α). Type II error = missed signal (probability β). Power = 1 − β = 0.64 in the factory example if μ = 105.</li><li>A two-sided test rejects exactly when the null value falls outside the matching confidence interval.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Saying “we accept H₀” or “the p-value proves H₀ is true.” Failing to reject is not proof — it means the data were not surprising enough. Absence of evidence is not evidence of absence.</div><div class=\"callout\"><strong>Common mistake:</strong> Reading p = 0.055 as “almost significant.” The 0.05 line is a convention, not a cliff — but you do not get to move it after seeing the result. Report the p-value and let the reader judge.</div><p><strong>Ready-to-Work link:</strong> “Did the new training program actually raise productivity, or did we just get a lucky group?” is a hypothesis test. Every A/B test, every program evaluation, every “is this real?” question at work is this module.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Null hypothesis (H₀)",
      "def": "The status-quo claim being tested, such as μ = 100."
    },
    {
      "term": "Alternative hypothesis (H₁)",
      "def": "The claim you suspect instead of H₀; one-sided (μ > 100) or two-sided (μ ≠ 100)."
    },
    {
      "term": "Test statistic",
      "def": "A z- or t-score measuring how many standard errors the sample statistic sits from the null value."
    },
    {
      "term": "P-value",
      "def": "The probability of a result at least as extreme as the one observed, if H₀ were true."
    },
    {
      "term": "Significance level (α)",
      "def": "The threshold for rejecting H₀, usually 0.05; the allowed Type I error rate."
    },
    {
      "term": "Reject H₀",
      "def": "The decision when p ≤ α: the data are too surprising under H₀ to keep believing it."
    },
    {
      "term": "Fail to reject H₀",
      "def": "The decision when p > α: the data are not surprising enough to abandon H₀. Not proof H₀ is true."
    },
    {
      "term": "Type I error",
      "def": "Rejecting a true null hypothesis — a false alarm; probability α."
    },
    {
      "term": "Type II error",
      "def": "Failing to reject a false null hypothesis — a missed signal; probability β."
    },
    {
      "term": "Power",
      "def": "1 − β: the probability of correctly rejecting a false H₀; the chance of detecting a real effect."
    },
    {
      "term": "One-sided test",
      "def": "An alternative that points in one direction (μ > 100 or μ < 100)."
    },
    {
      "term": "Two-sided test",
      "def": "An alternative that points in either direction (μ ≠ 100); the p-value doubles the one-sided tail."
    },
    {
      "term": "Practical significance",
      "def": "Whether an effect is big enough to matter in the real world — different from statistical significance."
    },
    {
      "term": "Statistical significance",
      "def": "A result with p ≤ α; surprising enough under H₀ to reject it."
    },
    {
      "term": "Effect size",
      "def": "How large the difference actually is, in original units or standardized units."
    },
    {
      "term": "Rejection region",
      "def": "The set of test-statistic values that lead to rejecting H₀."
    }
  ],
  "video": {
    "title": "Hypothesis Testing and The Null Hypothesis, Clearly Explained!!!",
    "embedUrl": "https://www.youtube.com/embed/0oc49DyA3hU",
    "note": "StatQuest explains hypothesis testing and the null hypothesis with the mouse example — the clearest five minutes on what a p-value actually is.",
    "more": [
      {
        "title": "An Introduction to Hypothesis Testing — jbstatistics",
        "url": "https://www.youtube.com/watch?v=tTeMYuS87oU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A factory claims μ = 100. A sample of n = 36 has mean 104 with σ = 15 known. Test H₀: μ = 100 vs. H₁: μ > 100 at α = 0.05. (a) Find z. (b) Find the p-value. (c) What is your decision?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: SE = 15 ÷ 6 = 2.5. Step 2: z = (104 − 100) ÷ 2.5 = <strong>1.60</strong>. Step 3: One-sided p = P(Z > 1.6) = <strong>0.0548</strong>. Step 4: Since 0.0548 > 0.05, <strong>fail to reject H₀</strong>. The mean of 104 is not quite surprising enough — it would happen about 5.5% of the time even if μ really were 100.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A sample of n = 25 students has mean 52.4 and s = 10. Test H₀: μ = 50 vs. H₁: μ ≠ 50 at α = 0.05. (a) Find t and df. (b) Find the two-sided p-value. (c) What is your decision?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: SE = 10 ÷ 5 = 2, so t = (52.4 − 50) ÷ 2 = <strong>1.20</strong> with df = 24. Step 2: Two-sided p = <strong>0.2419</strong>. Step 3: Since 0.2419 > 0.05, <strong>fail to reject H₀</strong>. A mean of 52.4 is entirely ordinary when the true mean is 50.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> In a poll of n = 200 voters, 110 (55%) support a policy. Test H₀: p = 0.50 vs. H₁: p ≠ 0.50 at α = 0.05. (a) Find the standard error under H₀. (b) Find z and the two-sided p-value. (c) What is your decision?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: SE under H₀ = √(0.50 × 0.50 ÷ 200) = √0.00125 = <strong>0.0354</strong>. Step 2: z = (0.55 − 0.50) ÷ 0.0354 = <strong>1.41</strong>; two-sided p = <strong>0.1573</strong>. Step 3: Since 0.1573 > 0.05, <strong>fail to reject H₀</strong>. A 55% result in a poll of 200 is not strong evidence the true support differs from 50%.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> For the factory test (one-sided, α = 0.05, SE = 2.5): (a) What sample mean would trigger rejection? (b) If the true mean is 105, what is the power of the test?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Reject when z > 1.645, i.e. when x̄ > 100 + 1.645 × 2.5 = <strong>104.11</strong>. Step 2: If μ = 105, the power is P(x̄ > 104.11) = P(Z > (104.11 − 105) ÷ 2.5) = P(Z > −0.36) = <strong>0.6387</strong>. Step 3: About a 64% chance of detecting a true mean of 105 — and a 36% chance of missing it (Type II error).</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A drug trial tests H₀: the drug has no effect, at α = 0.05. (a) Describe a Type I error in plain words. (b) Describe a Type II error in plain words. (c) Which error is worse here, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A <strong>Type I error</strong> is concluding the drug works when it does not — approving a useless drug. Step 2: A <strong>Type II error</strong> is concluding the drug does not work when it does — shelving a drug that could have helped patients. Step 3: In a drug trial the Type I error is usually treated as worse, because it puts an ineffective (and possibly unsafe) drug on the market; that is why α is set low at 0.05 and why trials need large samples to keep power high.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A 95% confidence interval for a population mean is (99.10, 108.90). (a) What does a two-sided test of H₀: μ = 100 at α = 0.05 decide, and why? (b) What does it decide for H₀: μ = 110? (c) Explain in one sentence why the test and the interval always agree.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) <strong>Fail to reject</strong> μ = 100, because 100 lies inside the interval. Step 2: (b) <strong>Reject</strong> μ = 110, because 110 lies outside the interval. Step 3: (c) Both are built from the same margin of error: the test rejects exactly the values the interval excludes.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The null hypothesis is:",
      "choices": [
        "The claim you hope to prove",
        "The status-quo claim you assume true while testing",
        "Always false",
        "The same as the p-value"
      ],
      "answer": 1,
      "explanation": "Correct: (b). H₀ is the default you test against — you assume it true and see whether the data contradict it. (a) That is the alternative. (c) H₀ may be true or false; the test does not assume. (d) The p-value is a probability about the data, not a hypothesis."
    },
    {
      "q": "In the factory test, z = 1.60 and the one-sided p-value is 0.0548. At α = 0.05 you should:",
      "choices": [
        "Reject H₀",
        "Fail to reject H₀",
        "Accept H₀ as proven",
        "Increase α to 0.10 and reject"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 0.0548 > 0.05, so the result is not surprising enough to reject. (a) needs p ≤ 0.05. (c) Failing to reject is never proof. (d) Moving α after seeing the result is cheating — α is set before the test."
    },
    {
      "q": "A p-value of 0.03 means:",
      "choices": [
        "There is a 3% chance H₀ is true",
        "If H₀ were true, results this extreme would occur 3% of the time",
        "H₀ is false with 97% probability",
        "The sample mean is 0.03"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The p-value is P(data this extreme | H₀ true). (a) and (c) swap the conditioning — the p-value says nothing about the probability of H₀ itself. (d) confuses a probability with a mean."
    },
    {
      "q": "The t-test (n = 25, mean 52.4, s = 10, H₀: μ = 50) gives t = 1.20 and p = 0.2419. The decision at α = 0.05 is:",
      "choices": [
        "Reject H₀",
        "Fail to reject H₀",
        "The test is invalid",
        "Use z instead"
      ],
      "answer": 1,
      "explanation": "Correct: (b). p = 0.2419 > 0.05, so fail to reject. (a) needs p ≤ 0.05. (c) The test is valid — a non-significant result is still a result. (d) σ is unknown, so t is correct."
    },
    {
      "q": "A Type I error is:",
      "choices": [
        "Failing to reject a false H₀",
        "Rejecting a true H₀",
        "Using the wrong critical value",
        "A calculation mistake"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Type I = false alarm: rejecting a true null. (a) is a Type II error. (c) and (d) are procedural mistakes, not error types."
    },
    {
      "q": "Power is:",
      "choices": [
        "The probability of a Type I error",
        "1 − β, the probability of correctly rejecting a false H₀",
        "The sample size",
        "The p-value"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Power is the chance of detecting a real effect. (a) is α. (c) Sample size affects power but is not power. (d) The p-value is a property of the observed data, not of the test's design."
    },
    {
      "q": "The proportion test (110 of 200, H₀: p = 0.50) gives z = 1.41 and two-sided p = 0.1573. At α = 0.05:",
      "choices": [
        "Reject H₀ — support differs from 50%",
        "Fail to reject H₀",
        "The sample is too small to test",
        "The p-value proves p = 0.50"
      ],
      "answer": 1,
      "explanation": "Correct: (b). p = 0.1573 > 0.05, so the 55% result is not strong enough evidence. (a) needs p ≤ 0.05. (c) n = 200 is plenty — the test ran fine. (d) No p-value proves a null."
    },
    {
      "q": "A two-sided test at α = 0.05 rejects H₀: μ = μ₀ exactly when:",
      "choices": [
        "μ₀ is inside the 95% confidence interval",
        "μ₀ is outside the 95% confidence interval",
        "The sample mean equals μ₀",
        "The p-value is greater than 0.05"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The test and the interval use the same margin of error, so they always agree. (a) is the fail-to-reject case. (c) A sample mean equal to μ₀ gives p = 1 — never a rejection. (d) p > 0.05 means fail to reject."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Hypothesis Testing: Quick Reference</h3>\n<p><strong>Setup:</strong> H&#8320; = status quo, H&#8321; = the claim. Assume H&#8320;, compute how surprising the data are.</p>\n<div class=\"formula\">z = (x&#772; &#8722; &mu;&#8320;) &divide; (&sigma; &divide; &radic;n) &nbsp;|&nbsp; t = (x&#772; &#8722; &mu;&#8320;) &divide; (s &divide; &radic;n) &nbsp;|&nbsp; p-value = P(result this extreme | H&#8320; true)</div>\n<p><strong>Decision:</strong> p &le; &alpha; → reject H&#8320;. p &gt; &alpha; → fail to reject H&#8320; (never “accept” it).</p>\n<p><strong>Errors:</strong> Type I = reject a true H&#8320; (probability &alpha;). Type II = miss a false H&#8320; (probability &beta;). Power = 1 − &beta;.</p>\n<p><strong>Worked anchors:</strong> Factory: z = 1.60, one-sided p = 0.0548 → fail to reject. t-test: t = 1.20, p = 0.2419 → fail to reject. Proportion: z = 1.41, p = 0.1573 → fail to reject. Power when &mu; = 105: 0.6387.</p>\n<p><strong>Watch out:</strong> The p-value is P(data | H&#8320;), not P(H&#8320; | data). And a two-sided test rejects exactly when the null value falls outside the matching confidence interval.</p>\n<p><strong>Self-check:</strong> Take any poll (percentage + n) and test whether support differs from 50% — compute z and the p-value by hand.</p>\n"
};
