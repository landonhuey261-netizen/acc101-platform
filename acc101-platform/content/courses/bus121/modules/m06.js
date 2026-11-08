// BUS 121 - Module 6: Sampling & Estimation: What a Sample Can Tell You
module.exports = {
  number: 6,
  slug: "sampling-estimation",
  title: "Sampling & Estimation: What a Sample Can Tell You",
  estTime: "3–4 hours",
  objectives: [
    "Explain the difference between a population and a sample, and why samples are used.",
    "Describe how the sampling distribution of the mean narrows as sample size grows.",
    "Compute the standard error of the mean from a population standard deviation.",
    "Build and interpret a 95% confidence interval for a mean.",
    "List the conditions a confidence interval depends on — and what breaks it."
  ],
  sections: [
    {
      heading: "Populations, Samples, and Why We Sample",
      html: `
<p>A <strong>population</strong> is everyone or everything you care about: all customers, all orders, all shipments. A <strong>sample</strong> is the part you actually observe. Businesses almost always work with samples, because measuring a whole population is too slow, too expensive, or impossible — you cannot survey every customer who will ever visit.</p>
<p>A sample is useful only if it represents the population. A <strong>random sample</strong> gives every member the same chance of being chosen, which is what makes the mathematics of this module work. A convenience sample — the customers who happen to answer, the orders from last Tuesday — can be badly biased: the people who answer a satisfaction survey are not the same as the people who don't. Before any estimate, ask how the sample was drawn. The sampling method matters more than the sample size.</p>
<div class="callout"><strong>Key idea:</strong> A biased sample of 10,000 is worse than a random sample of 100. Size does not fix bias — it only makes the wrong answer more precise.</div>`
    },
    {
      heading: "The Sampling Distribution and the Standard Error",
      html: `
<p>Take many random samples of the same size from one population and compute each sample's mean. The means will cluster around the true population mean, and the spread of that cluster is the <strong>standard error</strong>: SE = σ ÷ √n, where σ is the population standard deviation and n is the sample size. The standard error is the standard deviation of the sample means — it measures how far a typical sample mean lands from the truth.</p>
<p><strong>Worked example:</strong> A population has mean 50 and standard deviation 10. With samples of n = 25, SE = 10 ÷ √25 = 10 ÷ 5 = <strong>2</strong>. Most sample means fall within about 2 points of 50. With n = 100, SE = 10 ÷ 10 = <strong>1</strong> — quadrupling the sample halves the error. That square-root rule is why bigger samples help, but with diminishing returns: going from 25 to 100 halves the error; going from 100 to 400 halves it again.</p>`
    },
    {
      heading: "Confidence Intervals: Saying What You Know",
      html: `
<p>A point estimate — "the average order is $52" — hides its own uncertainty. A <strong>confidence interval</strong> shows it: sample mean ± margin of error, where the margin of error is a multiplier times the standard error. For a 95% interval with a known population standard deviation, the multiplier is 1.96 (from the normal curve: 95% of the area lies within 1.96 standard deviations of the center).</p>
<p><strong>Worked example:</strong> A sample of 25 orders has mean 52. The population standard deviation is 10, so SE = 10 ÷ 5 = 2. The 95% confidence interval is 52 ± 1.96 × 2 = 52 ± 3.92, which is <strong>48.08 to 55.92</strong>. The honest reading: we are 95% confident the true population mean lies between $48.08 and $55.92. It does not mean there is a 95% chance this particular interval contains the mean — the mean is fixed; the interval is what varies across samples. It means 95% of intervals built this way contain the true mean.</p>
<div class="callout"><strong>Key idea:</strong> A confidence interval is a range plus a confidence level. Widen the interval and confidence rises; shrink it and confidence falls. You cannot have a narrow interval and high confidence from a small sample — that is the trade-off.</div>`
    },
    {
      heading: "What a Confidence Interval Depends On",
      html: `
<p>Three things decide an interval's width: the confidence level, the sample size, and the population's variability. Higher confidence (99% instead of 95%) widens the interval — the multiplier grows from 1.96 to 2.58. A larger sample narrows it — SE shrinks with √n. A more variable population widens it — larger σ means larger SE. And all of it rests on the sample being random: a biased sample produces an interval centered on the wrong place, however narrow it looks.</p>
<p>In business, confidence intervals answer questions like "is average delivery time really under 3 days?" (check whether 3 is inside the interval), "how precisely do we know average order size?" (the interval's width), and "how many customers must we survey to know within ±$2?" (solve the margin-of-error formula for n). The interval turns a vague "about $52" into a claim with stated precision — which is what a manager needs to decide whether the number is good enough to act on.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Population = everyone you care about; sample = who you observe. Random sampling is what makes estimates trustworthy.</li>
<li>Standard error = σ ÷ √n. Quadrupling n halves the error.</li>
<li>95% confidence interval = sample mean ± 1.96 × SE (with known σ).</li>
<li>Interval width depends on confidence level, sample size, and population variability — and on the sample being random.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Saying "there is a 95% chance the true mean is in this interval." The correct reading: 95% of intervals built this way contain the true mean.</div>
<div class="callout"><strong>Common mistake:</strong> Treating a biased sample's interval as meaningful. A confidence interval measures sampling error only — it cannot correct for bias in how the sample was drawn.</div>
<p><strong>Ready-to-work link:</strong> Module 7's hypothesis test is the same machinery pointed at a yes-or-no question. If you can build a confidence interval, the test is one step further.</p>`
    }
  ],
  keyTerms: [
    { term: "Population", def: "Everyone or everything you want to learn about: all customers, all orders." },
    { term: "Sample", def: "The part of the population you actually observe." },
    { term: "Random sample", def: "A sample where every member of the population has the same chance of being chosen." },
    { term: "Sampling bias", def: "A systematic error from a sample that does not represent the population." },
    { term: "Sampling distribution", def: "The distribution of a statistic (like the sample mean) across many samples." },
    { term: "Standard error", def: "The standard deviation of the sample means: σ ÷ √n. It measures how far a typical sample mean lands from the truth." },
    { term: "Point estimate", def: "A single number used to estimate a population value, such as a sample mean." },
    { term: "Confidence interval", def: "A range of plausible values for a population value, built as estimate ± margin of error." },
    { term: "Margin of error", def: "The half-width of a confidence interval: a multiplier times the standard error." },
    { term: "Confidence level", def: "The share of intervals built the same way that would contain the true value (e.g., 95%)." },
    { term: "Central limit theorem", def: "The result that sample means are approximately normal for large samples, whatever the population's shape." },
    { term: "Sample size", def: "The number of observations in a sample; larger samples give smaller standard errors." },
    { term: "Parameter", def: "A number describing a population, such as the population mean μ." },
    { term: "Statistic", def: "A number computed from a sample, such as the sample mean x̄, used to estimate a parameter." }
  ],
  video: {
    title: "Introduction to sampling distributions | Sampling distributions | AP Statistics | Khan Academy",
    embedUrl: "https://www.youtube.com/embed/z0Ry_3_qhDw",
    note: "Khan Academy shows how the means of many samples cluster around the true population mean — the sampling distribution that this module's standard error describes. Watch it, then check the module's example: with σ = 10 and n = 25, the standard error is 2, so most sample means fall within about 2 points of 50.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A population has mean 50 and standard deviation 10. (a) What is the standard error of the mean for samples of n = 25? (b) For samples of n = 100? (c) By what factor does the error shrink?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: SE for n = 25: 10 ÷ √25 = 10 ÷ 5 = <strong>2</strong>. Step 2: SE for n = 100: 10 ÷ √100 = 10 ÷ 10 = <strong>1</strong>. Step 3: The error is <strong>halved</strong> — quadrupling the sample halves the standard error.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A sample of 25 orders has mean $52 and the population standard deviation is $10. Construct the 95% confidence interval for the true mean order size.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: SE = 10 ÷ √25 = <strong>2</strong>. Step 2: Margin of error = 1.96 × 2 = <strong>3.92</strong>. Step 3: Interval = 52 ± 3.92 = <strong>$48.08 to $55.92</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A manager wants a 95% confidence interval with a margin of error of at most $2, and the population standard deviation is $10. What sample size is needed? (Use margin = 1.96 × σ ÷ √n.)</p>",
      solution: "<p><strong>Solution:</strong> Step 1: 1.96 × 10 ÷ √n ≤ 2, so √n ≥ 19.6 ÷ 2 = 9.8. Step 2: n ≥ 9.8² = 96.04. Step 3: Round up: <strong>n = 97</strong> observations.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A 95% confidence interval for average delivery time is 2.4 to 3.1 days. (a) What is the sample mean? (b) What is the margin of error? (c) Can the manager claim the true mean is under 3 days?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Sample mean = midpoint = (2.4 + 3.1) ÷ 2 = <strong>2.75 days</strong>. Step 2: Margin of error = half-width = (3.1 − 2.4) ÷ 2 = <strong>0.35 days</strong>. Step 3: <strong>No</strong> — the interval extends to 3.1, so a true mean of 3 or above is still plausible at 95% confidence.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Two surveys measure the same population. Survey A (n = 25) gives a 95% interval of $48.08 to $55.92. Survey B (n = 100) has the same sample mean, $52, and the same σ = 10. What is Survey B's 95% interval, and why is it narrower?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: SE for n = 100: 10 ÷ 10 = <strong>1</strong>. Step 2: Margin = 1.96 × 1 = 1.96. Step 3: Interval = 52 ± 1.96 = <strong>$50.04 to $53.96</strong>. Step 4: It is narrower because the larger sample gives a smaller standard error — quadrupling n halves the margin.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A satisfaction survey is sent by email and only 8% of customers reply. The manager computes a 95% confidence interval from the replies and reports it as the population's satisfaction. Explain in two or three sentences why that interval is misleading.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The 8% who reply are not a random sample — unhappy customers are far more likely to answer than happy ones, so the sample is biased. Step 2: A confidence interval measures sampling error only; it cannot correct for bias. Step 3: The interval is centered on the wrong place — it describes the complainers, not the customer base.</p>"
    }
  ],
  quiz: [
    {
      q: "A population has mean 50 and standard deviation 10. The standard error for samples of n = 25 is:",
      choices: ["10", "5", "2", "0.4"],
      answer: 2,
      explanation: "Correct: (c). SE = 10 ÷ √25 = 10 ÷ 5 = 2. (a) is the population standard deviation. (b) is 10 ÷ 2. (d) is 10 ÷ 25, which is not the formula."
    },
    {
      q: "Quadrupling the sample size:",
      choices: ["Doubles the standard error", "Halves the standard error", "Leaves the standard error unchanged", "Quadruples the standard error"],
      answer: 1,
      explanation: "Correct: (b). SE = σ ÷ √n, and √4 = 2, so the error halves. (a) and (d) reverse the direction. (c) ignores the formula."
    },
    {
      q: "A sample of 25 has mean 52 and σ = 10. The 95% confidence interval is:",
      choices: ["50.04 to 53.96", "48.08 to 55.92", "42 to 62", "52 to 55.92"],
      answer: 1,
      explanation: "Correct: (b). SE = 2, margin = 1.96 × 2 = 3.92, so 52 ± 3.92. (a) is the interval for n = 100. (c) uses σ instead of SE. (d) is only the upper half."
    },
    {
      q: "The correct interpretation of a 95% confidence interval is:",
      choices: ["There is a 95% chance the true mean is in this interval", "95% of intervals built this way contain the true mean", "95% of the data fall inside the interval", "The sample mean is within 95% of the true mean"],
      answer: 1,
      explanation: "Correct: (b). The interval is the random part; the mean is fixed. (a) is the common misreading. (c) describes a range of data, not an interval for a mean. (d) is not a defined statement."
    },
    {
      q: "A 95% interval for average delivery time is 2.4 to 3.1 days. The sample mean is:",
      choices: ["2.4 days", "3.1 days", "2.75 days", "0.35 days"],
      answer: 2,
      explanation: "Correct: (c). The midpoint: (2.4 + 3.1) ÷ 2 = 2.75. (a) and (b) are the endpoints. (d) is the margin of error."
    },
    {
      q: "Which change makes a confidence interval wider?",
      choices: ["A larger sample", "A higher confidence level", "A smaller population standard deviation", "A smaller margin of error"],
      answer: 1,
      explanation: "Correct: (b). Higher confidence needs a larger multiplier (2.58 at 99% vs. 1.96 at 95%). (a) and (c) narrow the interval. (d) is the result of narrowing, not a cause."
    },
    {
      q: "A survey with only an 8% response rate is a problem because:",
      choices: ["The sample is too large", "Respondents are not random, so the sample is biased — and no interval can fix bias", "Confidence intervals cannot be computed from surveys", "The standard error is always zero"],
      answer: 1,
      explanation: "Correct: (b). Bias shifts the interval's center; the interval only measures sampling error. (a) is backwards. (c) is false. (d) is false."
    },
    {
      q: "A manager wants a margin of error of $2 with σ = $10 at 95% confidence. The required sample size is about:",
      choices: ["25", "50", "97", "400"],
      answer: 2,
      explanation: "Correct: (c). √n ≥ 19.6 ÷ 2 = 9.8, so n ≥ 97. (a) gives a margin of 3.92. (b) gives about 2.77. (d) gives a margin of 0.98 — more precision than asked for."
    }
  ],
  studyGuide: `
<h3>Module 6 — Sampling & Estimation: Quick Reference</h3>
<p><strong>Population vs. sample:</strong> Population = everyone you care about; sample = who you observe. Random sampling is what makes estimates trustworthy — size does not fix bias.</p>
<div class="formula">Standard error: SE = σ ÷ √n. &nbsp; 95% confidence interval = sample mean ± 1.96 × SE.</div>
<p><strong>Anchors:</strong> Population mean 50, σ = 10 → SE is 2 at n = 25 and 1 at n = 100 (quadrupling n halves the error). Sample mean 52, n = 25, σ = 10 → 95% interval $48.08 to $55.92.</p>
<p><strong>Interpretation:</strong> "95% confident" means 95% of intervals built this way contain the true mean — not that this interval has a 95% chance of containing it.</p>
<p><strong>Watch out:</strong> A biased sample's interval is centered on the wrong place. And interval width trades off against confidence: narrower interval, lower confidence.</p>
<p><strong>Self-check:</strong> Given σ, n, and a sample mean, build the 95% interval by hand — and check whether a claimed target (like "under 3 days") falls inside it.</p>
`
};
