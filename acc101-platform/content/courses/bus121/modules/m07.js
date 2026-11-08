// BUS 121 - Module 7: Hypothesis Testing: Is the Difference Real?
module.exports = {
  number: 7,
  slug: "hypothesis-testing",
  title: "Hypothesis Testing: Is the Difference Real?",
  estTime: "3–4 hours",
  objectives: [
    "State a null and an alternative hypothesis for a business question.",
    "Compute a z-test statistic for a sample mean and find its p-value.",
    "Use a 0.05 significance level to decide whether to reject the null.",
    "Explain what a p-value is — and the common ways it is misread.",
    "Distinguish statistical significance from practical importance."
  ],
  sections: [
    {
      heading: "The Question Behind the Test",
      html: `
<p>Store A averages $105 per order; Store B averages $100. Is Store A really better, or is the $5 gap just chance — the luck of which customers happened to walk in? A <strong>hypothesis test</strong> is the formal way to answer that. It starts with a <strong>null hypothesis (H₀)</strong>, the "nothing is going on" claim: the two stores are equal, the new training changed nothing, the redesign did not move sales. The <strong>alternative hypothesis (H₁)</strong> is what you suspect instead: Store A is better, training helped, the redesign worked.</p>
<p>The test does not prove the alternative. It asks: if the null were true, how surprising is the data we actually saw? If the data would be very surprising under the null, we reject the null. If the data are ordinary under the null, we do not reject it — which is not the same as proving the null true.</p>
<div class="callout"><strong>Key idea:</strong> The null hypothesis is the default. The test asks whether the data give a good reason to leave it — and "not enough evidence" is not the same as "no effect."</div>`
    },
    {
      heading: "The z-Test for a Mean, Step by Step",
      html: `
<p>For a sample mean with a known population standard deviation, the test statistic is <strong>z = (sample mean − hypothesized mean) ÷ standard error</strong>, where SE = σ ÷ √n. The z-value measures how many standard errors the sample mean sits from the null value.</p>
<p><strong>Worked example:</strong> A company claims its average order is $100. A sample of 36 orders has mean $105, and the population standard deviation is $15. SE = 15 ÷ √36 = 15 ÷ 6 = 2.5. z = (105 − 100) ÷ 2.5 = 5 ÷ 2.5 = <strong>2.0</strong>. The sample mean is 2 standard errors above the claimed mean. For a two-sided test, the p-value — the probability of a z at least this far from zero if the null were true — is about <strong>0.0455</strong>. Since 0.0455 is below the usual 0.05 significance level, we <strong>reject the null</strong>: the data give evidence the true mean is not $100.</p>`
    },
    {
      heading: "The p-Value and the 0.05 Line",
      html: `
<p>The <strong>p-value</strong> is the probability of seeing data at least as extreme as yours, assuming the null hypothesis is true. A small p-value means the data would be unusual under the null — which is evidence against the null. A large p-value means the data are ordinary under the null — no evidence against it.</p>
<p>The conventional cutoff is the <strong>significance level</strong> of 0.05: reject the null when p &lt; 0.05. It is a convention, not a law of nature — there is nothing magic about 0.05, and a p-value of 0.049 is barely different from 0.051, though one is called "significant" and the other is not. Always report the p-value itself, not just the verdict. And remember the two errors: a <strong>Type I error</strong> is rejecting a true null (a false alarm), and a <strong>Type II error</strong> is failing to reject a false null (a missed effect). The 0.05 level caps the Type I error rate at 5%.</p>
<div class="callout"><strong>Key idea:</strong> A p-value is a probability about the data, assuming the null is true. It is not the probability that the null is true, and it is not the probability that your result is correct.</div>`
    },
    {
      heading: "Statistical Significance vs. Practical Importance",
      html: `
<p>With a large enough sample, even a trivial difference becomes "statistically significant." A $0.30 difference in average order size can have p &lt; 0.001 with 100,000 orders — and still not be worth acting on. Significance answers "is the difference real?"; practical importance answers "does it matter?" Both questions need answers, and the second one needs a dollar amount, not a p-value.</p>
<p>The habit to build: report the effect size (how big the difference is, in original units), the confidence interval for it, and the p-value — in that order. A $5 difference with p = 0.045 is a small effect with weak evidence; a $50 difference with p = 0.04 is a large effect with the same p-value. The p-value alone cannot tell them apart. Managers decide on dollars, not on p-values.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>H₀ is the "nothing is going on" claim; H₁ is what you suspect instead. The test asks how surprising the data are under H₀.</li>
<li>z = (sample mean − hypothesized mean) ÷ SE, with SE = σ ÷ √n.</li>
<li>p-value = probability of data at least this extreme if H₀ is true. Reject H₀ when p &lt; 0.05 (the conventional level).</li>
<li>Type I error = false alarm; Type II error = missed effect. Significance ≠ practical importance — always report the effect size.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Saying "the p-value is the probability the null is true." It is not. It is the probability of the data, assuming the null is true.</div>
<div class="callout"><strong>Common mistake:</strong> Treating "fail to reject" as "proved no effect." A small sample can fail to reject a real effect — the test may simply lack power.</div>
<p><strong>Ready-to-work link:</strong> Module 8's regression tests its slope the same way — a coefficient, a standard error, and a p-value. The machinery is identical; only the question changes.</p>`
    }
  ],
  keyTerms: [
    { term: "Null hypothesis (H₀)", def: "The default claim of 'nothing is going on' — no difference, no effect." },
    { term: "Alternative hypothesis (H₁)", def: "The claim you suspect instead of the null: a difference or an effect exists." },
    { term: "Test statistic", def: "A number measuring how far the sample result sits from the null value, in standard errors." },
    { term: "z-test", def: "A hypothesis test for a mean using the standard normal distribution, with known population standard deviation." },
    { term: "p-value", def: "The probability of seeing data at least as extreme as yours, assuming the null hypothesis is true." },
    { term: "Significance level", def: "The cutoff for rejecting the null, conventionally 0.05." },
    { term: "Reject the null", def: "The decision when p < 0.05: the data give evidence against the null." },
    { term: "Fail to reject", def: "The decision when p ≥ 0.05: not enough evidence against the null — not proof the null is true." },
    { term: "Type I error", def: "Rejecting a null hypothesis that is actually true — a false alarm." },
    { term: "Type II error", def: "Failing to reject a null hypothesis that is actually false — a missed effect." },
    { term: "Two-sided test", def: "A test that rejects for differences in either direction from the null value." },
    { term: "One-sided test", def: "A test that rejects only for a difference in a specified direction." },
    { term: "Effect size", def: "How large the difference or effect is, in original units — separate from whether it is significant." },
    { term: "Statistical significance", def: "A result unlikely enough under the null (p < 0.05) to reject it; not the same as practical importance." }
  ],
  video: {
    title: "Hypothesis Testing and The Null Hypothesis, Clearly Explained!!!",
    embedUrl: "https://www.youtube.com/embed/0oc49DyA3hU",
    note: "StatQuest builds the null hypothesis and the p-value from scratch with a coin-flip example — the clearest gentle introduction to what a test actually asks. Watch it, then redo this module's worked example: sample mean 105, claimed mean 100, σ = 15, n = 36 → z = 2.0, p ≈ 0.0455, reject at 0.05.",
    more: [
      { title: "p-values: What they are and how to interpret them", url: "https://www.youtube.com/watch?v=vemZtEM63GY" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A company claims its average order is $100. A sample of 36 orders has mean $105 and the population standard deviation is $15. (a) What is the standard error? (b) What is the z-statistic? (c) The two-sided p-value is about 0.0455. At the 0.05 level, do you reject the null?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: SE = 15 ÷ √36 = 15 ÷ 6 = <strong>2.5</strong>. Step 2: z = (105 − 100) ÷ 2.5 = <strong>2.0</strong>. Step 3: p = 0.0455 &lt; 0.05, so <strong>reject the null</strong> — there is evidence the true mean is not $100.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> The same company samples 144 orders instead of 36, with the same sample mean ($105) and σ ($15). (a) What is the new SE? (b) What is the new z? (c) Is the evidence stronger or weaker?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: SE = 15 ÷ √144 = 15 ÷ 12 = <strong>1.25</strong>. Step 2: z = (105 − 100) ÷ 1.25 = <strong>4.0</strong>. Step 3: <strong>Stronger</strong> — the same $5 gap is now 4 standard errors from the null instead of 2, so the p-value is far smaller.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A test of a new checkout page gives p = 0.20. (a) Do you reject the null at 0.05? (b) Does that prove the new page is no better? Explain.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: <strong>No</strong> — 0.20 &gt; 0.05, so do not reject. Step 2: <strong>No, it does not prove no effect.</strong> Failing to reject means the data are not surprising under the null; a real effect could still exist that this sample was too small to detect.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A test with 100,000 orders finds a $0.30 difference in average order size with p &lt; 0.001. (a) Is the difference statistically significant? (b) Is it practically important? Explain.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: <strong>Yes</strong> — p &lt; 0.001 is far below 0.05. Step 2: <strong>Probably not</strong> — $0.30 per order is tiny in dollars, and with 100,000 orders even a trivial gap becomes significant. Significance says the difference is real; it does not say it matters.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A quality test rejects the null that a machine fills bottles to 500 ml, but the machine was actually filling correctly. (a) What type of error is this? (b) What does the 0.05 significance level say about how often this error happens?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Rejecting a true null is a <strong>Type I error</strong> — a false alarm. Step 2: With a 0.05 level, this error happens at most <strong>5% of the time</strong> when the null is true.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A store tests whether a new display increases sales. H₀: no change. The test gives p = 0.06. The manager says, \"The p-value is 0.06, so there is a 6% chance the display does nothing.\" Correct the manager in two or three sentences.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The p-value is not the probability that the null is true. Step 2: p = 0.06 means that if the display truly did nothing, data at least this favorable would occur 6% of the time by chance. Step 3: The correct statement is that the evidence is not quite strong enough to reject the null at the 0.05 level — not that there is a 6% chance of no effect.</p>"
    }
  ],
  quiz: [
    {
      q: "Sample mean 105, hypothesized mean 100, σ = 15, n = 36. The standard error is:",
      choices: ["15", "6", "2.5", "5"],
      answer: 2,
      explanation: "Correct: (c). SE = 15 ÷ √36 = 15 ÷ 6 = 2.5. (a) is the population standard deviation. (b) is √36. (d) is the difference of the means."
    },
    {
      q: "For the same test, the z-statistic is:",
      choices: ["0.5", "2.0", "5.0", "15.0"],
      answer: 1,
      explanation: "Correct: (b). z = (105 − 100) ÷ 2.5 = 2.0. (a) is 2.5 ÷ 5. (c) is the raw difference. (d) is σ."
    },
    {
      q: "The two-sided p-value is 0.0455. At the 0.05 level, the decision is to:",
      choices: ["Reject the null", "Fail to reject the null", "Accept the null as proven", "Increase the sample size"],
      answer: 0,
      explanation: "Correct: (a). 0.0455 < 0.05, so reject. (b) is the decision when p ≥ 0.05. (c) is wrong — tests never prove the null. (d) is a design choice, not a decision."
    },
    {
      q: "A p-value of 0.20 means:",
      choices: ["There is a 20% chance the null is true", "If the null were true, data at least this extreme would occur 20% of the time", "The result is significant", "The effect is 20%"],
      answer: 1,
      explanation: "Correct: (b). The p-value is a probability about the data, assuming the null. (a) is the classic misreading. (c) is false — 0.20 > 0.05. (d) confuses p with effect size."
    },
    {
      q: "Rejecting a null hypothesis that is actually true is a:",
      choices: ["Type II error", "Type I error", "Correct decision", "Sampling error"],
      answer: 1,
      explanation: "Correct: (b). A Type I error is a false alarm. (a) is failing to reject a false null. (c) is wrong. (d) is the random variation in samples, not a decision error."
    },
    {
      q: "Failing to reject the null means:",
      choices: ["The null is proven true", "There is not enough evidence against the null in this sample", "The alternative is proven false", "The test was run incorrectly"],
      answer: 1,
      explanation: "Correct: (b). 'Fail to reject' is a statement about evidence, not proof. (a) and (c) overstate what a test can do. (d) is a different issue entirely."
    },
    {
      q: "A $0.30 difference with p < 0.001 from 100,000 orders is:",
      choices: ["Statistically significant but probably not practically important", "Not significant", "Proof the difference matters", "A Type I error"],
      answer: 0,
      explanation: "Correct: (a). Huge samples make tiny effects significant. (b) is false — p < 0.001 is significant. (c) confuses significance with importance. (d) cannot be known from the p-value."
    },
    {
      q: "The null hypothesis in a test of a new checkout page is:",
      choices: ["The new page increases sales", "The new page changes nothing", "The old page is worse", "Sales will double"],
      answer: 1,
      explanation: "Correct: (b). The null is the 'nothing is going on' claim. (a) is the alternative. (c) and (d) are specific alternatives, not the null."
    }
  ],
  studyGuide: `
<h3>Module 7 — Hypothesis Testing: Quick Reference</h3>
<p><strong>Setup:</strong> H₀ = "nothing is going on." H₁ = what you suspect instead. The test asks how surprising the data are under H₀.</p>
<div class="formula">z = (sample mean − hypothesized mean) ÷ SE, where SE = σ ÷ √n.</div>
<p><strong>Anchor:</strong> Sample mean 105, claimed mean 100, σ = 15, n = 36 → SE = 2.5, z = 2.0, two-sided p ≈ 0.0455 → reject at 0.05. With n = 144, SE = 1.25 and z = 4.0 — same gap, much stronger evidence.</p>
<p><strong>p-value:</strong> The probability of data at least this extreme if H₀ is true. Reject when p &lt; 0.05. It is NOT the probability that H₀ is true.</p>
<p><strong>Errors:</strong> Type I = false alarm (rejecting a true null). Type II = missed effect (failing to reject a false null).</p>
<p><strong>Watch out:</strong> "Fail to reject" is not "proved no effect." And significance is not importance — always report the effect size in dollars.</p>
<p><strong>Self-check:</strong> Given a sample mean, σ, n, and a claimed mean, compute SE, z, and the decision at 0.05 — and state the result in one plain sentence.</p>
`
};
