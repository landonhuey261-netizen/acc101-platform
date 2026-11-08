module.exports = {
  "number": 2,
  "slug": "describing-data-center-spread-shape",
  "title": "Describing Data: Center, Spread & Shape",
  "estTime": "3–4 hours",
  "objectives": [
    "Compute and compare the mean, median, and mode, and explain when each is the honest summary.",
    "Measure spread with the range, interquartile range, variance, and standard deviation.",
    "State when to divide by n and when to divide by n − 1, and why it matters.",
    "Use z-scores to compare values from different datasets.",
    "Read shape — skew and outliers — from a list of numbers and a five-number summary."
  ],
  "sections": [
    {
      "heading": "Center: Mean, Median, Mode",
      "html": "<p>Twelve one-bedroom apartments in a college town advertise these monthly rents (in dollars): 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1400, 2200. The <strong>mean</strong> is the sum, $13,850, divided by 12: <strong>$1154.17</strong>. The <strong>median</strong> is the middle of the ordered list: the 6th and 7th values are $1,050 and $1,100, so the median is <strong>$1075.00</strong>. There is no repeated value, so there is <strong>no mode</strong>.</p><p>Notice the mean ($1154.17) is higher than the median ($1075.00). That gap is a clue: one very expensive apartment ($2,200) pulls the mean up, while the median ignores it. When data are <strong>skewed</strong> — stretched out on one side — the median is usually the more honest “typical” value, because the mean chases the tail. Income and house prices are skewed the same way, which is why economists quote median income and median house prices far more often than means.</p><div class=\"callout\"><strong>Key idea:</strong> Mean = every value counts, so outliers drag it. Median = only the middle counts, so outliers cannot touch it. When the two disagree, ask which one answers your question.</div>"
    },
    {
      "heading": "Spread: Range, IQR, Variance, and Standard Deviation",
      "html": "<p>Center alone is not enough: two towns can both have a median rent of $1,075 while one town's rents are all near $1,075 and the other's range from $800 to $2,200. <strong>Spread</strong> measures that difference. The <strong>range</strong> is the simplest: $2,200 − $800 = <strong>$1,400</strong>. The <strong>interquartile range (IQR)</strong> is the middle 50% of the data: the first quartile is $937.50 and the third quartile is $1212.50, so the IQR is $275.00.</p><p>The workhorse is the <strong>standard deviation</strong>. For these rents the sample standard deviation is <strong>$372.62</strong>: a typical apartment's rent sits about $373 away from the mean of $1154. The <strong>variance</strong> is the standard deviation squared: 138,844.70 (in “squared dollars,” which is why we almost always report the SD instead — it is in dollars, the original units).</p><div class=\"formula\">Sample variance s&sup2; = &Sigma;(x &#8722; x&#772;)&sup2; &divide; (n &#8722; 1) &nbsp;|&nbsp; Standard deviation s = &radic;s&sup2; &nbsp;|&nbsp; IQR = Q3 &#8722; Q1</div>"
    },
    {
      "heading": "Sample or Population? The n − 1 Rule",
      "html": "<p>Here is the one formula choice that trips up more students than any other. If you have measured the <strong>whole population</strong>, divide by n. If you have a <strong>sample</strong> and want to estimate the population's spread, divide by n − 1. For the rents, the population SD (dividing by 12) is $356.76; the sample SD (dividing by 11) is $372.62.</p><p>Why divide by n − 1? A sample's values cluster a little too tightly around the sample mean — the sample mean is computed from the same data, so it sits in the middle of them by construction. Dividing by the smaller number n − 1 corrects that underestimate. In practice: if you are describing only the data in front of you, either is defensible if you say which you used; if you are estimating a population, use n − 1. This course uses the sample standard deviation (n − 1) everywhere unless it says otherwise.</p><div class=\"callout\"><strong>Key idea:</strong> n = you measured everyone. n − 1 = you measured a sample and are estimating the population. When in doubt in this course, use n − 1.</div>"
    },
    {
      "heading": "Z-Scores: Comparing Apples and Oranges",
      "html": "<p>A <strong>z-score</strong> says how many standard deviations a value sits from its mean: z = (x − mean) ÷ SD. The $2,200 apartment has a z-score of (2,200 − 1154.17) ÷ 372.62 = <strong>2.81</strong> — more than two and a half standard deviations above the mean. The $800 apartment has z = (800 − 1154.17) ÷ 372.62 = <strong>-0.95</strong>.</p><p>Z-scores are powerful because they have no units. A z-score of 2.5 means the same thing for rents, wages, or test scores: unusually high. That is how economists compare things measured in different units — a wage that is 2 SD above its mean and a rent that is 2 SD above its mean are equally unusual, even though one is in dollars per hour and the other in dollars per month. Module 4 uses z-scores to turn any normal distribution into the standard one.</p><div class=\"formula\">z = (x &#8722; x&#772;) &divide; s</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Mean, median, mode: the mean chases outliers; the median resists them. Rents: mean $1154.17, median $1075.00, no mode.</li><li>Spread: range $1,400, IQR $275.00, sample SD $372.62, variance 138,844.70.</li><li>Divide by n for a population, by n − 1 for a sample estimating a population.</li><li>Z-scores put any value on the same scale: the $2,200 rent is z = 2.81.</li><li>Shape: mean above median means right skew — a long tail of high values.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Reporting the mean for skewed data without the median. If you say “average rent is $1154” and hide that the median is $1075, a student budgeting for a typical apartment is misled by $85 a month.</div><div class=\"callout\"><strong>Common mistake:</strong> Using the population SD (dividing by n) on sample data and calling it the sample SD. The two differ — $356.76 vs. $372.62 here — and the difference grows when n is small.</div><p><strong>Ready-to-Work link:</strong> “What's typical, and how spread out is it?” is the first question you ask of any dataset at work. Answer it with a center and a spread, every time — never a center alone.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Mean",
      "def": "The average: the sum of the values divided by how many there are. Sensitive to outliers."
    },
    {
      "term": "Median",
      "def": "The middle value of ordered data. Resistant to outliers."
    },
    {
      "term": "Mode",
      "def": "The most frequently occurring value. The only center that works for categorical data."
    },
    {
      "term": "Skew",
      "def": "Asymmetry in a distribution. Right skew has a long tail of high values; left skew has a long tail of low values."
    },
    {
      "term": "Range",
      "def": "The maximum minus the minimum; the simplest measure of spread."
    },
    {
      "term": "Quartile",
      "def": "A value dividing ordered data into quarters. Q1 is the 25th percentile; Q3 is the 75th percentile."
    },
    {
      "term": "Interquartile range (IQR)",
      "def": "Q3 minus Q1; the spread of the middle 50% of the data."
    },
    {
      "term": "Variance",
      "def": "The average squared distance of values from the mean. Sample variance divides by n − 1."
    },
    {
      "term": "Standard deviation",
      "def": "The square root of the variance; the typical distance from the mean, in the original units."
    },
    {
      "term": "Population standard deviation",
      "def": "Spread computed dividing by n; used when you measured the whole population."
    },
    {
      "term": "Sample standard deviation",
      "def": "Spread computed dividing by n − 1; used when a sample estimates a population."
    },
    {
      "term": "Z-score",
      "def": "How many standard deviations a value sits from the mean: z = (x − mean) ÷ SD."
    },
    {
      "term": "Outlier",
      "def": "A value far from the rest of the data, often found with the 1.5×IQR rule or a large z-score."
    },
    {
      "term": "Five-number summary",
      "def": "Minimum, Q1, median, Q3, maximum — the numbers behind a boxplot."
    },
    {
      "term": "Boxplot",
      "def": "A chart showing the five-number summary as a box (the IQR) with whiskers to the extremes."
    },
    {
      "term": "Empirical rule",
      "def": "For bell-shaped data: about 68% of values fall within 1 SD of the mean, 95% within 2 SD, 99.7% within 3 SD."
    }
  ],
  "video": {
    "title": "Finding mean, median, and mode | Descriptive statistics | Probability and Statistics | Khan Academy",
    "embedUrl": "https://www.youtube.com/embed/k3aKKasOmIw",
    "note": "Khan Academy works the mean, median, and mode on real numbers — watch it, then redo the rent example in this module by hand.",
    "more": [
      {
        "title": "StatQuest: Histograms, Clearly Explained",
        "url": "https://www.youtube.com/watch?v=qBigTkBLU6g"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> The rents are: 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1400, 2200. (a) Find the mean. (b) Find the median. (c) Is the distribution skewed left or right? How do you know?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Sum = $13,850; mean = 13850 ÷ 12 = <strong>$1154.17</strong>. Step 2: The middle two values are $1,050 and $1,100, so the median = <strong>$1075.00</strong>. Step 3: The mean ($1154.17) is above the median ($1075.00), and the $2,200 value stretches the high end, so the distribution is <strong>right-skewed</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> For the rents, the sum of squared deviations from the mean is 1,527,291.67. (a) Find the sample variance and sample standard deviation. (b) Find the range and the IQR (Q1 = $937.50, Q3 = $1212.50).</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Sample variance = 1,527,291.67 ÷ 11 = <strong>138,844.70</strong>. Step 2: Sample SD = √138,844.70 = <strong>$372.62</strong>. Step 3: Range = 2,200 − 800 = <strong>$1,400</strong>. Step 4: IQR = 1212.50 − 937.50 = <strong>$275.00</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Using the rent data (mean $1154.17, sample SD $372.62): (a) What is the z-score of the $2,200 apartment? (b) What is the z-score of the $800 apartment? (c) Which is more unusual, and why?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: z for $2,200 = (2,200 − 1154.17) ÷ 372.62 = <strong>2.81</strong>. Step 2: z for $800 = (800 − 1154.17) ÷ 372.62 = <strong>-0.95</strong>. Step 3: The $2,200 apartment is more unusual: its z-score (2.81) is farther from 0 than −0.95, so it sits further from the typical rent.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A dataset of 8 test scores has a mean of 75 and a sample standard deviation of 5. (a) What is the variance? (b) A score of 85 has what z-score? (c) If the scores were the whole population instead of a sample, would the standard deviation be larger or smaller? Why?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Variance = 5² = <strong>25</strong>. Step 2: z = (85 − 75) ÷ 5 = <strong>2.00</strong>. Step 3: <strong>Smaller.</strong> The population SD divides by n = 8 instead of n − 1 = 7, so it is 5 × √(7/8) ≈ 4.68. Dividing by the larger number shrinks the result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Five workers earn $12, $14, $16, $18, and $40 an hour. (a) Find the mean and the median. (b) Which one better describes a “typical” worker here, and why? (c) What is the range?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Mean = (12 + 14 + 16 + 18 + 40) ÷ 5 = 100 ÷ 5 = <strong>$20</strong>. Step 2: Median = the middle value = <strong>$16</strong>. Step 3: The <strong>median</strong> is better: the $40 outlier drags the mean $4 above every worker except one, while the median sits in the middle of the group. Step 4: Range = 40 − 12 = <strong>$28</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> The 1.5×IQR rule flags values below Q1 − 1.5×IQR or above Q3 + 1.5×IQR as outliers. For the rents, Q1 = $937.50 and Q3 = $1212.50. (a) Find the upper fence. (b) Is the $2,200 rent an outlier by this rule?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: IQR = 1212.50 − 937.50 = $275.00. Step 2: Upper fence = 1212.50 + 1.5 × 275.00 = <strong>$1625.00</strong>. Step 3: $2,200 is above $1625.00, so <strong>yes</strong>, it is an outlier by the 1.5×IQR rule. Step 4: Note the rule is a flag, not a proof — the apartment is real, just unusually expensive.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The rents have mean $1154.17 and median $1075.00. The distribution is:",
      "choices": [
        "Left-skewed",
        "Right-skewed",
        "Perfectly symmetric",
        "Bimodal"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The mean sits above the median because the $2,200 apartment pulls the mean toward the high tail — right skew. (a) Left skew would put the mean below the median. (c) Symmetry needs mean ≈ median. (d) Bimodal needs two peaks."
    },
    {
      "q": "The best single number for a “typical” value when data are strongly skewed is the:",
      "choices": [
        "Mean",
        "Median",
        "Mode",
        "Range"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The median ignores outliers. (a) The mean is dragged by the tail. (c) The mode may not exist or may be unrepresentative. (d) The range measures spread, not center."
    },
    {
      "q": "The interquartile range measures:",
      "choices": [
        "The spread of the middle 50% of the data",
        "The distance from the mean to the maximum",
        "The average squared deviation",
        "The most common value"
      ],
      "answer": 0,
      "explanation": "Correct: (a). IQR = Q3 − Q1, the middle half. (b) That is not a standard measure. (c) That is the variance. (d) That is the mode."
    },
    {
      "q": "You have a sample of 12 rents and want to estimate the population's spread. You should divide the sum of squared deviations by:",
      "choices": [
        "12",
        "11",
        "10",
        "6"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A sample uses n − 1 = 11 (Bessel's correction). (a) Dividing by 12 gives the population SD. (c) and (d) have no basis here."
    },
    {
      "q": "A z-score of −1.5 means the value is:",
      "choices": [
        "1.5 units below the mean",
        "1.5 standard deviations below the mean",
        "1.5 times the mean",
        "Impossible — z-scores cannot be negative"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A z-score counts standard deviations from the mean; the minus sign means below. (a) Confuses units with SDs. (c) Is not what z means. (d) Negative z-scores are routine."
    },
    {
      "q": "The sample standard deviation of the rents is $372.62. The variance is about:",
      "choices": [
        "$372.62",
        "$138,845",
        "$1,400",
        "$1,075"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Variance = SD² = 372.62² ≈ 138,845. (a) That is the SD itself. (c) That is the range. (d) That is the median."
    },
    {
      "q": "Which measure of spread is in the same units as the original data?",
      "choices": [
        "Variance",
        "Standard deviation",
        "Squared deviations",
        "Coefficient of variation"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The SD is the square root of the variance, restoring the original units (dollars). (a) Variance is in squared dollars. (c) Same problem. (d) The coefficient of variation is unitless."
    },
    {
      "q": "If every rent rose by $100, the mean would rise by $100 and the standard deviation would:",
      "choices": [
        "Rise by $100",
        "Fall by $100",
        "Stay the same",
        "Double"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Adding a constant shifts every value and the mean together, so distances from the mean do not change. (a) and (b) confuse center with spread. (d) Multiplying by 2 would double the SD; adding does not."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Describing Data: Quick Reference</h3>\n<p><strong>Center:</strong> Mean (sensitive to outliers) · Median (resistant) · Mode (most common). Mean &gt; median signals right skew.</p>\n<p><strong>Spread:</strong> Range = max − min · IQR = Q3 − Q1 (middle 50%) · Variance = average squared deviation · SD = √variance (original units).</p>\n<div class=\"formula\">Sample variance s&sup2; = &Sigma;(x &#8722; x&#772;)&sup2; &divide; (n &#8722; 1) &nbsp;|&nbsp; z = (x &#8722; x&#772;) &divide; s &nbsp;|&nbsp; Outlier fence: Q3 + 1.5&times;IQR</div>\n<p><strong>n vs. n − 1:</strong> Divide by n for a whole population; divide by n − 1 when a sample estimates a population.</p>\n<p><strong>Worked anchor:</strong> Rents 800–2,200 — mean $1154.17, median $1075.00, sample SD $372.62, IQR $275.00, $2,200 rent z = 2.81.</p>\n<p><strong>Watch out:</strong> Never report a mean for skewed data without the median beside it.</p>\n<p><strong>Self-check:</strong> Take any five numbers, compute mean, median, range, and sample SD by hand, and check the SD against a spreadsheet.</p>\n"
};
