module.exports = {
  "number": 5,
  "slug": "sampling-distributions-and-the-central-limit-theorem",
  "title": "Sampling Distributions & the Central Limit Theorem",
  "estTime": "3–4 hours",
  "objectives": [
    "Distinguish a sample distribution from a sampling distribution.",
    "Compute the standard error of the sample mean and of a sample proportion.",
    "State the Central Limit Theorem and explain why it makes inference possible.",
    "Find probabilities for sample means and sample proportions.",
    "Explain why larger samples give more precise estimates."
  ],
  "sections": [
    {
      "heading": "One Sample, Many Samples: The Sampling Distribution",
      "html": "<p>Take one sample of 36 workers and compute its mean wage. Take another sample of 36 and compute its mean again. The two means will differ — that is <strong>sampling variability</strong>. Now imagine taking every possible sample of 36 and plotting all their means. That plot is the <strong>sampling distribution</strong> of the sample mean: the distribution of a statistic over all possible samples.</p><p>Do not confuse it with the <strong>sample distribution</strong> — the histogram of the 36 wages in one sample. The sample distribution shows how individual workers' wages vary. The sampling distribution shows how sample means vary. The first is about people; the second is about statistics. Everything in Modules 6 through 9 is built on the sampling distribution, so this distinction is the most important idea in the course.</p><div class=\"callout\"><strong>Key idea:</strong> A sample distribution describes the data in one sample. A sampling distribution describes the statistic across all possible samples. Inference lives in the second one.</div>"
    },
    {
      "heading": "The Standard Error: How Far Off Is a Sample Mean?",
      "html": "<p>The sampling distribution of the sample mean has a mean equal to the population mean μ, and a standard deviation called the <strong>standard error</strong>: SE = σ ÷ √n. Suppose a population has mean μ = 50 and SD σ = 12. For samples of n = 36, the standard error is 12 ÷ 6 = <strong>2.00</strong>. For samples of only n = 9, it is 12 ÷ 3 = <strong>4.00</strong>. Bigger samples, smaller error — and the error shrinks with the square root of n, so quadrupling the sample only halves the error.</p><p>The same idea works for proportions. If 35% of a population supports a policy, the sample proportion from n = 200 has standard error √(0.35 × 0.65 ÷ 200) = <strong>0.0337</strong>. A sample proportion of 0.40 is (0.40 − 0.35) ÷ 0.0337 = 1.48 standard errors above the truth — unusual, but not shocking.</p><div class=\"formula\">SE of the mean = &sigma; &divide; &radic;n &nbsp;|&nbsp; SE of a proportion = &radic;[p(1 &#8722; p) &divide; n]</div>"
    },
    {
      "heading": "The Central Limit Theorem: The Most Important Theorem in Statistics",
      "html": "<p>The <strong>Central Limit Theorem (CLT)</strong> says: take samples of size n from any population with mean μ and SD σ, and as n grows, the sampling distribution of the sample mean approaches a normal distribution with mean μ and standard error σ ÷ √n — no matter what shape the population has. Roll one die and the results are flat (1 through 6 equally likely). Roll 30 dice and average them, and the averages are bell-shaped, centered on 3.5 with standard error 1.708 ÷ √30 = <strong>0.3118</strong>.</p><p>This is why inference works at all. We do not need the population to be normal — we only need the sample to be big enough (the usual rule of thumb is n ≥ 30) for the CLT to make the sample mean approximately normal. Once the sample mean is normal, we can use z-scores and normal probabilities on it, exactly as in Module 4. The CLT is the bridge from describing data to drawing conclusions about populations.</p><div class=\"callout\"><strong>Key idea:</strong> The CLT does not say the data are normal. It says the <em>average</em> of the data is approximately normal when n is large. That one fact powers every confidence interval and hypothesis test in this course.</div>"
    },
    {
      "heading": "Probabilities for Sample Means",
      "html": "<p>With the CLT, probabilities for sample means are just z-score problems. Population μ = 50, σ = 12, sample n = 36, so SE = 2.00. The chance the sample mean exceeds 53 is P(Z > (53 − 50) ÷ 2) = P(Z > 1.5) = <strong>0.0668</strong>. The chance it falls between 48 and 52 is P(−1 < Z < 1) = <strong>0.6827</strong>.</p><p>With a smaller sample the same questions get wider answers. For n = 9, SE = 4.00, and the chance the sample mean exceeds 54 is P(Z > 1) = <strong>0.1587</strong>. And for proportions: with p = 0.35 and n = 200, the chance the sample proportion exceeds 0.40 is P(Z > 1.48) = <strong>0.0691</strong>. Notice the pattern — every one of these is (value − center) ÷ standard error, then a normal probability.</p><div class=\"formula\">z = (x&#772; &#8722; &mu;) &divide; (&sigma; &divide; &radic;n) &nbsp;|&nbsp; z = (p&#770; &#8722; p) &divide; &radic;[p(1 &#8722; p) &divide; n]</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Sample distribution = values in one sample. Sampling distribution = the statistic across all samples.</li><li>Standard error of the mean = σ ÷ √n. For μ = 50, σ = 12: n = 36 gives SE = 2.00; n = 9 gives SE = 4.00.</li><li>CLT: with n large (≥ 30 as a rule of thumb), sample means are approximately normal whatever the population looks like.</li><li>P(x̄ > 53) = 0.0668 for n = 36; P(p̂ > 0.40) = 0.0691 for p = 0.35, n = 200.</li><li>Quadrupling n halves the standard error — precision is expensive.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Calling σ the standard error. σ is the spread of individual values; σ ÷ √n is the spread of sample means. They answer different questions, and mixing them up is the most common error in inference.</div><div class=\"callout\"><strong>Common mistake:</strong> Saying “the CLT makes the data normal.” It does not. The data keep whatever shape they had; only the distribution of the sample mean becomes normal.</div><p><strong>Ready-to-Work link:</strong> Every poll's “margin of error” is a standard error in disguise. When a poll says 52% ± 3%, that ±3% comes from √(p(1 − p) ÷ n) — the exact formula in this module.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Sampling variability",
      "def": "The fact that a statistic differs from sample to sample because different samples contain different people."
    },
    {
      "term": "Sampling distribution",
      "def": "The distribution of a statistic over all possible samples of a given size."
    },
    {
      "term": "Sample distribution",
      "def": "The distribution of the individual values in one sample."
    },
    {
      "term": "Standard error",
      "def": "The standard deviation of a sampling distribution; how far a statistic typically sits from the parameter."
    },
    {
      "term": "Central Limit Theorem (CLT)",
      "def": "For large n, the sampling distribution of the sample mean is approximately normal, whatever the population's shape."
    },
    {
      "term": "Standard error of the mean",
      "def": "σ ÷ √n; the spread of sample means around the population mean."
    },
    {
      "term": "Standard error of a proportion",
      "def": "√[p(1 − p) ÷ n]; the spread of sample proportions around the population proportion."
    },
    {
      "term": "Rule of thumb (n ≥ 30)",
      "def": "The usual guideline for when the CLT's normal approximation is good enough to use."
    },
    {
      "term": "Unbiased estimator",
      "def": "A statistic whose sampling distribution is centered on the parameter it estimates; the sample mean is unbiased for μ."
    },
    {
      "term": "Precision",
      "def": "How tightly a statistic clusters around the parameter; larger samples give more precision."
    },
    {
      "term": "Law of large numbers",
      "def": "As n grows, the sample mean gets closer and closer to the population mean."
    },
    {
      "term": "Finite population correction",
      "def": "A factor √[(N − n) ÷ (N − 1)] that shrinks the standard error when the sample is a large share of the population."
    },
    {
      "term": "Sampling frame",
      "def": "The list of the population from which a sample is drawn."
    },
    {
      "term": "Random sample",
      "def": "A sample chosen so every member of the population has a known chance of being selected."
    },
    {
      "term": "Bias",
      "def": "A systematic error that pushes a statistic away from the parameter in one direction."
    }
  ],
  "video": {
    "title": "The Central Limit Theorem, Clearly Explained!!!",
    "embedUrl": "https://www.youtube.com/embed/YAlJCEDH2uY",
    "note": "StatQuest shows the Central Limit Theorem in action with dice and sampling — watch the averages turn into a bell curve.",
    "more": [
      {
        "title": "StatQuest: Sampling from a Distribution, Clearly Explained!!!",
        "url": "https://www.youtube.com/watch?v=XLCWeSVzHUU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A population has μ = 50 and σ = 12. (a) What is the standard error of the sample mean for n = 36? For n = 9? (b) What is P(x̄ > 53) for n = 36? (c) What is P(x̄ > 54) for n = 9?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: SE = σ ÷ √n. For n = 36: 12 ÷ 6 = <strong>2.00</strong>. For n = 9: 12 ÷ 3 = <strong>4.00</strong>. Step 2: For n = 36, z = (53 − 50) ÷ 2 = 1.5, so P(x̄ > 53) = P(Z > 1.5) = <strong>0.0668</strong>. Step 3: For n = 9, z = (54 − 50) ÷ 4 = 1, so P(x̄ > 54) = P(Z > 1) = <strong>0.1587</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> 35% of a city's residents support a new bus line. A poll surveys n = 200 residents. (a) What is the standard error of the sample proportion? (b) What is P(the sample proportion exceeds 0.40)?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: SE = √(0.35 × 0.65 ÷ 200) = √0.0011375 = <strong>0.0337</strong>. Step 2: z = (0.40 − 0.35) ÷ 0.0337 = 1.48, so P(p̂ > 0.40) = P(Z > 1.48) = <strong>0.0691</strong>. Step 3: About a 7% chance — the poll could plausibly show 40% support even though the truth is 35%.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A fair die has mean 3.5 and SD 1.708. You roll it 30 times and average the results. (a) What is the standard error of that average? (b) What does the CLT say about the shape of the distribution of such averages? (c) What is P(the average exceeds 4.0)?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: SE = 1.708 ÷ √30 = <strong>0.3118</strong>. Step 2: The CLT says the averages are <strong>approximately normal</strong>, centered on 3.5, even though a single die roll is flat, not bell-shaped. Step 3: z = (4.0 − 3.5) ÷ 0.3118 = 1.60, so P(average > 4.0) = P(Z > 1.60) = <strong>0.0544</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A researcher wants the standard error of a sample mean to be half its current value. By what factor must she increase the sample size? Show the arithmetic.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: SE = σ ÷ √n. Step 2: To halve the SE, √n must double, because SE is proportional to 1 ÷ √n. Step 3: Doubling √n means multiplying n by 2² = <strong>4</strong>. Step 4: She must quadruple the sample — precision is expensive, and this is why big surveys cost so much.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> For the population with μ = 50, σ = 12 and n = 36 (SE = 2.00): (a) What is P(48 < x̄ < 52)? (b) Between what two values will the middle 95% of sample means fall?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: z for 48 is (48 − 50) ÷ 2 = −1 and for 52 is +1, so P(48 < x̄ < 52) = P(−1 < Z < 1) = <strong>0.6827</strong>. Step 2: The middle 95% of a normal distribution is within 1.96 standard errors of the center: 50 ± 1.96 × 2 = 50 ± 3.92, so <strong>46.08 to 53.92</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain in your own words the difference between the standard deviation and the standard error, and give one sentence each for what σ = 12 and SE = 2 mean in the Module 5 example.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The <strong>standard deviation</strong> σ describes how individual values spread around the population mean. Step 2: The <strong>standard error</strong> describes how sample means spread around the population mean. Step 3: σ = 12 means a typical individual value sits about 12 units from μ = 50. Step 4: SE = 2 means a typical sample mean (from samples of 36) sits about 2 units from μ = 50 — sample means cluster far more tightly than individuals do.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The sampling distribution of the sample mean is:",
      "choices": [
        "The histogram of the 36 values in one sample",
        "The distribution of sample means over all possible samples of size n",
        "The distribution of the population",
        "A chart of one sample's quartiles"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It describes the statistic across samples. (a) is the sample distribution. (c) is the population distribution. (d) is a five-number summary."
    },
    {
      "q": "For a population with σ = 12, the standard error of the mean for n = 36 is:",
      "choices": [
        "12",
        "6",
        "2",
        "0.33"
      ],
      "answer": 2,
      "explanation": "Correct: (c). SE = 12 ÷ √36 = 12 ÷ 6 = 2.00. (a) is σ itself. (b) is √36, the divisor. (d) is 12 ÷ 36 — dividing by n instead of √n."
    },
    {
      "q": "The Central Limit Theorem says that for large n, the sampling distribution of the sample mean is approximately:",
      "choices": [
        "Uniform",
        "Skewed like the population",
        "Normal",
        "Bimodal"
      ],
      "answer": 2,
      "explanation": "Correct: (c). The CLT guarantees an approximately normal shape for sample means when n is large. (a) Uniform is the shape of one die roll. (b) The whole point is that the shape does not follow the population. (d) Bimodal is not a CLT result."
    },
    {
      "q": "With μ = 50, σ = 12, n = 36, P(x̄ > 53) is about:",
      "choices": [
        "0.0668",
        "0.1587",
        "0.3085",
        "0.5000"
      ],
      "answer": 0,
      "explanation": "Correct: (a). z = (53 − 50) ÷ 2 = 1.5, and P(Z > 1.5) = 0.0668. (b) is P(Z > 1), the chance x̄ exceeds 52. (c) is P(Z > 0.5). (d) is the chance x̄ exceeds the mean."
    },
    {
      "q": "To halve the standard error, you must multiply the sample size by:",
      "choices": [
        "2",
        "4",
        "1.5",
        "10"
      ],
      "answer": 1,
      "explanation": "Correct: (b). SE is proportional to 1 ÷ √n, so halving SE needs √n to double, which needs n to quadruple. (a) Doubling n only cuts the SE by a factor of √2 ≈ 1.41. (c) and (d) do not match the square-root rule."
    },
    {
      "q": "A population proportion is 0.35 and n = 200. The standard error of the sample proportion is about:",
      "choices": [
        "0.35",
        "0.0337",
        "0.2275",
        "0.05"
      ],
      "answer": 1,
      "explanation": "Correct: (b). SE = √(0.35 × 0.65 ÷ 200) = 0.0337. (a) is p itself. (c) is p(1 − p) without dividing by n. (d) is a round guess with no formula behind it."
    },
    {
      "q": "The CLT's normal approximation for the sample mean is generally considered good when:",
      "choices": [
        "n ≥ 5",
        "n ≥ 30",
        "n ≥ 500",
        "The population is normal"
      ],
      "answer": 1,
      "explanation": "Correct: (b). n ≥ 30 is the standard rule of thumb. (a) 5 is too small for most populations. (c) 500 is overkill — the approximation is usually fine by 30. (d) If the population is already normal, any n works, but the CLT's value is that it works when the population is not normal."
    },
    {
      "q": "The standard error measures:",
      "choices": [
        "How spread out individual values are",
        "How far a statistic typically sits from the parameter",
        "The size of the sample",
        "The bias of the estimator"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The standard error is the SD of the sampling distribution — the typical error of the statistic. (a) is the standard deviation σ. (c) is n. (d) Bias is a systematic shift, not a spread."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Sampling Distributions &amp; the CLT: Quick Reference</h3>\n<p><strong>Sampling distribution:</strong> The distribution of a statistic over all possible samples. Not the same as the sample distribution (one sample's values).</p>\n<div class=\"formula\">SE of the mean = &sigma; &divide; &radic;n &nbsp;|&nbsp; SE of a proportion = &radic;[p(1 &#8722; p) &divide; n] &nbsp;|&nbsp; z = (statistic &#8722; parameter) &divide; SE</div>\n<p><strong>CLT:</strong> For large n (rule of thumb n ≥ 30), sample means are approximately normal with mean &mu; and SE &sigma; &divide; &radic;n — whatever the population looks like.</p>\n<p><strong>Worked anchors:</strong> &mu; = 50, &sigma; = 12: n = 36 gives SE = 2.00, P(x&#772; &gt; 53) = 0.0668; n = 9 gives SE = 4.00. Proportion p = 0.35, n = 200: SE = 0.0337, P(p&#770; &gt; 0.40) = 0.0691.</p>\n<p><strong>Watch out:</strong> &sigma; is the spread of individuals; &sigma; &divide; &radic;n is the spread of sample means. Halving the SE needs 4&times; the sample.</p>\n<p><strong>Self-check:</strong> Take any population mean and SD, pick two sample sizes, and compute both standard errors and one probability for each.</p>\n"
};
