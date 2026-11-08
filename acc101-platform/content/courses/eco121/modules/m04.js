module.exports = {
  "number": 4,
  "slug": "random-variables-and-distributions",
  "title": "Random Variables & Distributions",
  "estTime": "3–4 hours",
  "objectives": [
    "Define a random variable and its probability distribution.",
    "Compute the expected value and variance of a discrete random variable.",
    "Use the binomial distribution for counts of successes.",
    "Use the normal distribution and z-scores to find probabilities and percentiles.",
    "Recognize the Poisson and uniform distributions and know when each applies."
  ],
  "sections": [
    {
      "heading": "Random Variables: Numbers That Depend on Chance",
      "html": "<p>A <strong>random variable</strong> is a number whose value depends on chance. Toss a coin three times and let X be the number of heads: X can be 0, 1, 2, or 3, and you do not know which until you toss. The <strong>probability distribution</strong> of X lists every value and its probability: P(X = 0) = 1/8, P(X = 1) = 3/8, P(X = 2) = 3/8, P(X = 3) = 1/8. Those four probabilities add to 1 — a distribution must always account for every possibility.</p><p>Random variables come in two kinds. <strong>Discrete</strong> ones take countable values: the number of heads, the number of customers today, the number of defective parts. <strong>Continuous</strong> ones take any value in a range: a wage, a price, a waiting time. The two kinds need different tools — sums for discrete, areas under curves for continuous — and this module teaches both.</p><div class=\"callout\"><strong>Key idea:</strong> A random variable is a question with a number for an answer; its distribution is the list of all possible answers and how likely each one is.</div>"
    },
    {
      "heading": "Expected Value and Variance: The Center and Spread of a Distribution",
      "html": "<p>The <strong>expected value</strong> E(X) is the long-run average of a random variable: multiply each value by its probability and add. For the three coin tosses, E(X) = 0×(1/8) + 1×(3/8) + 2×(3/8) + 3×(1/8) = 12/8 = <strong>1.50</strong> heads. That does not mean you will ever see 1.5 heads in one experiment — it means that over thousands of experiments, the average is 1.5.</p><p>The <strong>variance</strong> is E[(X − μ)²], the average squared distance from the mean. Here E(X²) = 0×(1/8) + 1×(3/8) + 4×(3/8) + 9×(1/8) = 24/8 = 3, so Var(X) = 3 − 1.5² = <strong>0.75</strong>, and the standard deviation is √0.75 = <strong>0.8660</strong>. The shortcut Var(X) = E(X²) − [E(X)]² saves a lot of arithmetic and you will use it constantly.</p><div class=\"formula\">E(X) = &Sigma; x&middot;P(X = x) &nbsp;|&nbsp; Var(X) = E(X&sup2;) &#8722; [E(X)]&sup2; &nbsp;|&nbsp; SD(X) = &radic;Var(X)</div>"
    },
    {
      "heading": "The Binomial Distribution: Counting Successes",
      "html": "<p>When you repeat the same yes/no trial n times with the same success probability p, the number of successes X follows the <strong>binomial distribution</strong>. Its mean is np and its variance is np(1 − p). Example: a job-training program places 30% of graduates in a job within a month. In a group of 20 graduates, the expected number placed is 20 × 0.30 = <strong>6</strong>, the variance is 20 × 0.30 × 0.70 = <strong>4.2</strong>, and the standard deviation is √4.2 = <strong>2.0494</strong>.</p><p>The probability of exactly k successes is C(n,k) × p^k × (1 − p)^(n−k). So the chance exactly 6 of the 20 graduates are placed is C(20,6) × 0.3^6 × 0.7^14 = <strong>0.1916</strong>, and the chance that 4 or fewer are placed is <strong>0.2375</strong>. The binomial is the workhorse of economics surveys: every “how many of the n people surveyed said yes?” question is a binomial question.</p><div class=\"formula\">X ~ Binomial(n, p): P(X = k) = C(n,k) p&#7511; (1 &#8722; p)&#8319;&#8315;&#7511; &nbsp;|&nbsp; E(X) = np &nbsp;|&nbsp; Var(X) = np(1 &#8722; p)</div>"
    },
    {
      "heading": "The Normal Distribution: The Bell Curve That Runs the World",
      "html": "<p>The <strong>normal distribution</strong> is the bell curve: symmetric, centered on its mean μ, with spread set by its standard deviation σ. It matters because so many real things are approximately normal — test scores, heights, measurement errors — and because of the Central Limit Theorem in the next module. To find a probability, convert to a <strong>z-score</strong>, z = (x − μ) ÷ σ, and read the standard normal table (or use software).</p><p>Example: exam scores are approximately normal with mean 70 and SD 10. The chance a random student scores above 85 is P(Z > 1.5) = <strong>0.0668</strong>. The chance of scoring between 60 and 80 is P(−1 < Z < 1) = <strong>0.6827</strong> — the familiar 68%. The chance of scoring below 55 is P(Z < −1.5) = <strong>0.0668</strong>. And the 95th percentile — the score that beats 95% of students — is 70 + 1.645 × 10 = <strong>86.45</strong>.</p><p>Two more distributions worth knowing: the <strong>Poisson</strong> counts rare events in a fixed window — if a shop averages 3 complaints a day, P(exactly 2 complaints) = e^(−3) × 3² ÷ 2! = <strong>0.2240</strong>, and P(none) = <strong>0.0498</strong>. The <strong>uniform</strong> gives every value in a range the same chance — a fair spinner, or a bus that arrives anywhere in a 10-minute window with equal probability.</p><div class=\"formula\">Z = (X &#8722; &mu;) &divide; &sigma; &nbsp;|&nbsp; X ~ Normal(&mu;, &sigma;) &nbsp;|&nbsp; Poisson: P(X = k) = e^( &#8722;&lambda;) &lambda;&#7511; &divide; k!</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>A random variable's distribution lists every value and its probability; the probabilities must add to 1.</li><li>Three coin tosses: E(X) = 1.50, Var(X) = 0.75, SD(X) = 0.8660.</li><li>Binomial(n = 20, p = 0.30): mean 6, SD 2.0494, P(X = 6) = 0.1916.</li><li>Normal(70, 10): P(X > 85) = 0.0668, P(60 < X < 80) = 0.6827, 95th percentile 86.45.</li><li>Poisson(λ = 3): P(X = 2) = 0.2240; uniform: every value in the range is equally likely.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Treating E(X) = 1.5 as a possible outcome. An expected value is a long-run average — it does not have to be a value the variable can take.</div><div class=\"callout\"><strong>Common mistake:</strong> Using the binomial when trials are not independent or p changes. Drawing cards without replacement is not binomial; flipping a coin is.</div><p><strong>Ready-to-Work link:</strong> “How many customers will show up?” is a Poisson question. “How many of the 20 will buy?” is a binomial question. “What is the chance sales exceed the target?” is a normal question. Naming the distribution is half the job.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Random variable",
      "def": "A number whose value depends on chance, such as the number of heads in three tosses."
    },
    {
      "term": "Probability distribution",
      "def": "The list of all possible values of a random variable and their probabilities."
    },
    {
      "term": "Discrete random variable",
      "def": "A random variable that takes countable values, such as a count of customers."
    },
    {
      "term": "Continuous random variable",
      "def": "A random variable that can take any value in a range, such as a wage or a price."
    },
    {
      "term": "Expected value",
      "def": "E(X): the long-run average of a random variable; the probability-weighted sum of its values."
    },
    {
      "term": "Variance of a random variable",
      "def": "Var(X) = E[(X − μ)²] = E(X²) − [E(X)]²; the spread of the distribution."
    },
    {
      "term": "Binomial distribution",
      "def": "The distribution of the number of successes in n independent trials with success probability p."
    },
    {
      "term": "Normal distribution",
      "def": "The symmetric bell-shaped distribution, described by its mean μ and standard deviation σ."
    },
    {
      "term": "Standard normal distribution",
      "def": "The normal distribution with mean 0 and SD 1; z-scores live on this scale."
    },
    {
      "term": "Z-score",
      "def": "z = (x − μ) ÷ σ; the number of standard deviations a value sits from its mean."
    },
    {
      "term": "Percentile",
      "def": "A value below which a given percentage of the distribution falls; the 95th percentile beats 95% of values."
    },
    {
      "term": "Poisson distribution",
      "def": "The distribution of the number of rare events in a fixed window, with mean λ."
    },
    {
      "term": "Uniform distribution",
      "def": "A distribution where every value in a range is equally likely."
    },
    {
      "term": "Probability density",
      "def": "For a continuous variable, the curve whose area over an interval is the probability of falling in it."
    },
    {
      "term": "Cumulative probability",
      "def": "P(X ≤ x): the probability of a value at or below x; the area to the left of x."
    },
    {
      "term": "Independence of trials",
      "def": "Each trial's outcome does not affect the others; required for the binomial distribution."
    }
  ],
  "video": {
    "title": "An Introduction to Discrete Random Variables and Discrete Probability Distributions",
    "embedUrl": "https://www.youtube.com/embed/oHcrna8Fk18",
    "note": "jbstatistics introduces discrete random variables and their distributions with the coin-toss examples this module uses.",
    "more": [
      {
        "title": "An Introduction to the Normal Distribution — jbstatistics",
        "url": "https://www.youtube.com/watch?v=iYiOVISWXS4"
      },
      {
        "title": "An Introduction to the Binomial Distribution — jbstatistics",
        "url": "https://www.youtube.com/watch?v=qIzC1-9PwQo"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Toss a coin three times; X = number of heads. (a) Write the probability distribution of X. (b) Find E(X). (c) Find Var(X) and SD(X).</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The distribution is P(X = 0) = 1/8, P(X = 1) = 3/8, P(X = 2) = 3/8, P(X = 3) = 1/8. Step 2: E(X) = 0×(1/8) + 1×(3/8) + 2×(3/8) + 3×(1/8) = 12/8 = <strong>1.50</strong>. Step 3: E(X²) = 0 + 3/8 + 12/8 + 9/8 = 3, so Var(X) = 3 − 1.5² = <strong>0.75</strong> and SD(X) = √0.75 = <strong>0.8660</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A training program places 30% of graduates in a job within a month. For a group of 20 graduates: (a) Find the expected number placed and the standard deviation. (b) Find P(exactly 6 placed). (c) Find P(4 or fewer placed).</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: X ~ Binomial(20, 0.30), so E(X) = 20 × 0.30 = <strong>6</strong> and Var(X) = 20 × 0.30 × 0.70 = 4.2, so SD(X) = <strong>2.0494</strong>. Step 2: P(X = 6) = C(20,6) × 0.3^6 × 0.7^14 = <strong>0.1916</strong>. Step 3: P(X ≤ 4) = <strong>0.2375</strong> (add the probabilities for 0, 1, 2, 3, and 4).</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Exam scores are Normal(70, 10). (a) What is P(a score above 85)? (b) What is P(a score between 60 and 80)? (c) What score is the 95th percentile?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: z for 85 = (85 − 70) ÷ 10 = 1.5, so P(X > 85) = P(Z > 1.5) = <strong>0.0668</strong>. Step 2: 60 and 80 are z = −1 and z = +1, so P(60 < X < 80) = P(−1 < Z < 1) = <strong>0.6827</strong>. Step 3: The 95th percentile of Z is 1.645, so x = 70 + 1.645 × 10 = <strong>86.45</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A shop averages 3 complaints a day (Poisson). (a) What is P(exactly 2 complaints tomorrow)? (b) What is P(no complaints tomorrow)? (c) What is the expected number of complaints in a 5-day week?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: P(X = 2) = e^(−3) × 3² ÷ 2! = 0.0498 × 9 ÷ 2 = <strong>0.2240</strong>. Step 2: P(X = 0) = e^(−3) = <strong>0.0498</strong>. Step 3: The expected number in 5 days is 5 × 3 = <strong>15</strong> — Poisson means add over time.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A game pays $10 if you roll a 6 on a fair die and $0 otherwise. Let X be your winnings on one roll. (a) Write the distribution of X. (b) Find E(X). (c) Find Var(X). Would you pay $2 to play?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: P(X = 10) = 1/6, P(X = 0) = 5/6. Step 2: E(X) = 10 × (1/6) + 0 × (5/6) = <strong>$1.67</strong>. Step 3: E(X²) = 100 × (1/6) = 16.67, so Var(X) = 16.67 − 1.67² = 16.67 − 2.78 = <strong>13.89</strong>, and SD(X) = $3.73. Step 4: <strong>No</strong> — the game costs $2 but is worth $1.67 on average, so you lose about $0.33 per play in the long run.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A bus arrives uniformly anywhere between 0 and 10 minutes after you reach the stop. (a) What is the mean waiting time? (b) What is P(you wait more than 8 minutes)? (c) What is P(you wait between 3 and 5 minutes)?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: For a uniform distribution on [0, 10], the mean is (0 + 10) ÷ 2 = <strong>5 minutes</strong>. Step 2: P(wait > 8) = (10 − 8) ÷ 10 = <strong>0.20</strong> — the length of the interval over the total length. Step 3: P(3 < wait < 5) = (5 − 3) ÷ 10 = <strong>0.20</strong>. Step 4: Uniform means every minute is equally likely, so probabilities are just interval lengths divided by 10.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A probability distribution must:",
      "choices": [
        "List every value and its probability, with probabilities adding to 1",
        "Be symmetric",
        "Have a mean of 0",
        "Contain only whole numbers"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Every possibility must be accounted for and the probabilities must total 1. (b) Many distributions are skewed. (c) Only the standard normal has mean 0. (d) Continuous distributions take any value."
    },
    {
      "q": "For three coin tosses, X = number of heads, E(X) is:",
      "choices": [
        "1",
        "1.5",
        "2",
        "3"
      ],
      "answer": 1,
      "explanation": "Correct: (b). E(X) = 0×(1/8) + 1×(3/8) + 2×(3/8) + 3×(1/8) = 12/8 = 1.50. (a) and (c) are possible values but not the average. (d) is the maximum."
    },
    {
      "q": "A Binomial(20, 0.30) variable has mean:",
      "choices": [
        "3",
        "6",
        "14",
        "20"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Mean = np = 20 × 0.30 = 6. (a) is 20 × 0.15. (c) is 20 × 0.70 — the expected number of failures. (d) is n itself."
    },
    {
      "q": "Exam scores are Normal(70, 10). P(a score above 85) is about:",
      "choices": [
        "0.0668",
        "0.1587",
        "0.3085",
        "0.5000"
      ],
      "answer": 0,
      "explanation": "Correct: (a). z = 1.5, and P(Z > 1.5) = 0.0668. (b) 0.1587 is P(Z > 1), i.e. a score above 80. (c) 0.3085 is P(Z > 0.5). (d) is the chance of beating the mean."
    },
    {
      "q": "The 95th percentile of Normal(70, 10) is about:",
      "choices": [
        "80",
        "86.45",
        "90",
        "70"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 70 + 1.645 × 10 = 86.45. (a) 80 is the 84th percentile. (c) 90 is the 97.7th percentile. (d) 70 is the 50th percentile — the median."
    },
    {
      "q": "Which situation is binomial?",
      "choices": [
        "Drawing 5 cards without replacement and counting aces",
        "Counting heads in 20 independent fair coin tosses",
        "Measuring the waiting time for a bus",
        "Counting the total rainfall in a month"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Fixed n, independent trials, same p — the binomial setup. (a) Fails independence: the deck changes as you draw. (c) Waiting time is continuous. (d) Rainfall is continuous, not a count of successes."
    },
    {
      "q": "A Poisson variable with λ = 3 has P(X = 0) ≈ 0.0498. This means:",
      "choices": [
        "3 events are certain",
        "There is about a 5% chance of no events",
        "The mean is 0",
        "Events happen every 3 minutes"
      ],
      "answer": 1,
      "explanation": "Correct: (b). P(X = 0) = e^(−3) = 0.0498 — about a 1-in-20 chance of none. (a) λ = 3 is the average count, not a certainty. (c) The mean is λ = 3. (d) λ has no time unit attached here."
    },
    {
      "q": "Var(X) = E(X²) − [E(X)]² is:",
      "choices": [
        "Wrong — variance is always E(X²)",
        "The shortcut for computing a variance from the second moment",
        "Only true for normal variables",
        "The formula for the standard deviation"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It is the standard shortcut: average of squares minus square of average. (a) E(X²) alone is not the variance. (c) It holds for any discrete variable. (d) The SD is the square root of the variance."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Random Variables &amp; Distributions: Quick Reference</h3>\n<p><strong>Random variable:</strong> A number that depends on chance. Its distribution lists every value and its probability (they add to 1).</p>\n<div class=\"formula\">E(X) = &Sigma; x&middot;P(X = x) &nbsp;|&nbsp; Var(X) = E(X&sup2;) &#8722; [E(X)]&sup2; &nbsp;|&nbsp; Z = (X &#8722; &mu;) &divide; &sigma;</div>\n<p><strong>Binomial(n, p):</strong> P(X = k) = C(n,k) p&#7511; (1 &#8722; p)&#8319;&#8315;&#7511;; mean np, variance np(1 − p). Needs independent trials with the same p.</p>\n<p><strong>Normal(&mu;, &sigma;):</strong> Bell curve; convert to z and read the standard normal. 68% within 1 SD, 95% within 2 SD, 99.7% within 3 SD.</p>\n<p><strong>Poisson(&lambda;):</strong> P(X = k) = e^( &#8722;&lambda;) &lambda;&#7511; &divide; k!; counts rare events. Uniform: every value in the range equally likely.</p>\n<p><strong>Worked anchors:</strong> 3 coin tosses: E(X) = 1.50, Var = 0.75. Binomial(20, 0.30): mean 6, P(X = 6) = 0.1916. Normal(70, 10): P(X &gt; 85) = 0.0668, 95th percentile 86.45.</p>\n<p><strong>Watch out:</strong> E(X) is a long-run average, not a possible outcome. And the binomial needs independent trials with constant p.</p>\n<p><strong>Self-check:</strong> For any binomial problem, always write n, p, np, and np(1 − p) before you compute a probability.</p>\n"
};
