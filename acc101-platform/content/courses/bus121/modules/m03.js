// BUS 121 - Module 3: Describing Data: Mean, Median, Mode & Variation
module.exports = {
  number: 3,
  slug: "describing-data-mean-median-mode-variation",
  title: "Describing Data: Mean, Median, Mode & Variation",
  estTime: "3–4 hours",
  objectives: [
    "Compute mean, median, and mode and explain when each is the right center.",
    "Compute range, variance, and standard deviation for a sample and a population.",
    "Explain why the median resists outliers while the mean does not.",
    "Use the coefficient of variation to compare spread across different scales.",
    "Describe a data set in one paragraph a manager can act on."
  ],
  sections: [
    {
      heading: "Center: Mean, Median, and Mode",
      html: `
<p>Three numbers claim to be "the typical value," and they disagree whenever the data are skewed. The <strong>mean</strong> is the arithmetic average: add everything and divide by how many there are. The <strong>median</strong> is the middle value when the data are ordered. The <strong>mode</strong> is the most frequent value — the only center that works for categories like product color or payment method.</p>
<p><strong>Worked example:</strong> Seven daily sales figures: 12, 15, 18, 20, 22, 25, 28. The sum is 140, so the mean is 140 ÷ 7 = <strong>20</strong>. Ordered, the middle (4th) value is <strong>20</strong> — the median. No value repeats, so there is <strong>no mode</strong>. When mean and median agree, the data are roughly symmetric; when they differ, the data are skewed and the gap tells you which way.</p>
<div class="callout"><strong>Key idea:</strong> The mean uses every value, so one extreme value pulls it. The median uses only position, so it ignores extremes. That is why "typical house price" is a median and "average test score" is a mean.</div>`
    },
    {
      heading: "Variation: Range, Variance, and Standard Deviation",
      html: `
<p>Center is only half the description. Two stores can both average $20,000 a week while one is steady and the other swings wildly — and the steady one is easier to staff, stock, and finance. <strong>Range</strong> is max minus min. <strong>Variance</strong> is the average squared distance from the mean. <strong>Standard deviation</strong> is the square root of variance, back in the original units — the typical distance of a value from the mean.</p>
<p><strong>Worked example:</strong> The same seven values (12, 15, 18, 20, 22, 25, 28), mean 20. Deviations: −8, −5, −2, 0, 2, 5, 8. Squared: 64, 25, 4, 0, 4, 25, 64 — sum 186. Range = 28 − 12 = <strong>16</strong>. Population variance = 186 ÷ 7 = <strong>26.57</strong>; population standard deviation = √26.57 ≈ <strong>5.15</strong>. Sample variance divides by n − 1 instead of n: 186 ÷ 6 = <strong>31.00</strong>; sample standard deviation = √31 ≈ <strong>5.57</strong>. Use the sample formula when the data are a sample from a larger population — which, in business, they almost always are.</p>`
    },
    {
      heading: "Outliers and Skew: When the Mean Lies",
      html: `
<p>Add one value to the worked data set: a single day of $120 in sales (a bulk order). The eight values are 12, 15, 18, 20, 22, 25, 28, 120. The mean jumps to 260 ÷ 8 = <strong>32.5</strong> — a "typical day" that is higher than seven of the eight actual days. The median becomes the average of the two middle values, (20 + 22) ÷ 2 = <strong>21</strong> — barely moved. The mean was dragged by one day; the median was not.</p>
<p>The rule: when data are skewed or contain outliers, report the median (and the range or interquartile range) as the headline, and mention the mean with a note about the outlier. When data are roughly symmetric with no outliers, the mean is fine and uses more information. Never report a mean alone on skewed data — it is the most common way honest numbers mislead a manager.</p>
<div class="callout"><strong>Key idea:</strong> An outlier is not necessarily an error. The $120 day is a real sale. The question is not whether to delete it, but which summary lets a manager plan staffing for a normal day.</div>`
    },
    {
      heading: "Comparing Spread: The Coefficient of Variation",
      html: `
<p>Standard deviation is in the data's units, so it cannot compare a store with $20,000 average weekly sales to one with $2,000 average daily sales. The <strong>coefficient of variation (CV)</strong> fixes that by dividing standard deviation by the mean: CV = s ÷ mean, often as a percent. It is a unit-free measure of relative spread.</p>
<p><strong>Worked example:</strong> The worked data set has sample standard deviation 5.57 and mean 20, so CV = 5.57 ÷ 20 = <strong>27.9%</strong> — a typical day deviates from the mean by about 28% of the mean. A second store with mean $50,000 and standard deviation $5,000 has CV = 10% — far steadier in relative terms, even though its dollar standard deviation is nearly a thousand times larger. CV is the right tool whenever the question is "which is more variable relative to its size?"</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Mean = sum ÷ n. Median = middle ordered value. Mode = most frequent value (the only center for categories).</li>
<li>Range = max − min. Variance = average squared deviation. Standard deviation = √variance, in original units.</li>
<li>Sample variance divides by n − 1; population variance divides by n. Business data are usually samples.</li>
<li>The median resists outliers; the mean does not. On skewed data, headline the median.</li>
<li>Coefficient of variation = standard deviation ÷ mean — the unit-free way to compare spread.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Dividing by n when the data are a sample. The n − 1 divisor corrects for the fact that a sample's spread understates the population's spread; using n makes the standard deviation too small.</div>
<div class="callout"><strong>Common mistake:</strong> Reporting the mean of a skewed data set without the median. Averages of house prices, incomes, and order sizes are all skewed — the mean alone misleads.</div>
<p><strong>Ready-to-work link:</strong> The statistics lab in this course computes all of these in a spreadsheet for a real data set. If you can do the seven-value example by hand, the lab is the same arithmetic with a better tool.</p>`
    }
  ],
  keyTerms: [
    { term: "Mean", def: "The arithmetic average: the sum of values divided by how many there are." },
    { term: "Median", def: "The middle value when data are ordered; the average of the two middle values when n is even." },
    { term: "Mode", def: "The most frequently occurring value; the only measure of center for categorical data." },
    { term: "Range", def: "Maximum minus minimum; the simplest measure of spread." },
    { term: "Variance", def: "The average squared distance of values from the mean." },
    { term: "Standard deviation", def: "The square root of variance; the typical distance of a value from the mean, in original units." },
    { term: "Population variance", def: "Variance computed by dividing the sum of squared deviations by n." },
    { term: "Sample variance", def: "Variance computed by dividing the sum of squared deviations by n − 1." },
    { term: "Outlier", def: "A value far from the rest of the data, which pulls the mean but barely moves the median." },
    { term: "Skew", def: "Asymmetry in a distribution; the mean is pulled toward the long tail." },
    { term: "Coefficient of variation", def: "Standard deviation divided by the mean; a unit-free measure of relative spread." },
    { term: "Interquartile range", def: "The range of the middle half of the data: the 75th percentile minus the 25th percentile." },
    { term: "Descriptive statistics", def: "Numbers that summarize a data set: its center, spread, and shape." },
    { term: "Symmetric distribution", def: "A distribution where mean and median are about equal and the two halves mirror each other." }
  ],
  video: {
    title: "Statistics intro: Mean, median, and mode | Data and statistics | 6th grade | Khan Academy",
    embedUrl: "https://www.youtube.com/embed/h8EYEJ32oQ8",
    note: "Khan Academy introduces mean, median, and mode from first principles with small worked examples. Watch it, then redo this module's seven-value data set (12, 15, 18, 20, 22, 25, 28) and confirm the mean and median are both 20 — and that there is no mode.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Daily sales: 12, 15, 18, 20, 22, 25, 28. Compute (a) the mean, (b) the median, (c) the mode, and (d) the range.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Sum = 140; mean = 140 ÷ 7 = <strong>20</strong>. Step 2: Ordered, the 4th of 7 values is <strong>20</strong> — the median. Step 3: No value repeats, so there is <strong>no mode</strong>. Step 4: Range = 28 − 12 = <strong>16</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Using the same data (mean 20), compute (a) the sum of squared deviations, (b) the population variance, (c) the population standard deviation, (d) the sample variance, and (e) the sample standard deviation.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Deviations −8, −5, −2, 0, 2, 5, 8; squares 64, 25, 4, 0, 4, 25, 64; sum = <strong>186</strong>. Step 2: Population variance = 186 ÷ 7 = <strong>26.57</strong>. Step 3: Population SD = √26.57 ≈ <strong>5.15</strong>. Step 4: Sample variance = 186 ÷ 6 = <strong>31.00</strong>. Step 5: Sample SD = √31 ≈ <strong>5.57</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Add a bulk-order day of $120 to the data set, making 8 values: 12, 15, 18, 20, 22, 25, 28, 120. Compute (a) the new mean and (b) the new median. Which one better describes a typical day, and why?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Sum = 260; mean = 260 ÷ 8 = <strong>32.5</strong>. Step 2: The two middle values are 20 and 22, so the median = (20 + 22) ÷ 2 = <strong>21</strong>. Step 3: The <strong>median</strong> is better — the mean of 32.5 is higher than seven of the eight actual days, while the median of 21 sits in the middle of the ordinary days.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A store's weekly sales have a mean of $20,000 and a sample standard deviation of $5,570. A second store has a mean of $50,000 and a standard deviation of $5,000. Compute the coefficient of variation for each and say which store is relatively more variable.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Store 1 CV = 5,570 ÷ 20,000 = <strong>27.9%</strong>. Step 2: Store 2 CV = 5,000 ÷ 50,000 = <strong>10%</strong>. Step 3: Store 1 is relatively more variable — its typical deviation is 28% of its mean, vs. 10% for Store 2 — even though its dollar standard deviation is larger only slightly.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Test scores: 70, 75, 80, 80, 85, 90, 95. (a) What is the mode? (b) What is the median? (c) What is the mean?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: 80 appears twice and no other value repeats, so the mode is <strong>80</strong>. Step 2: The 4th of 7 ordered values is <strong>80</strong> — the median. Step 3: Sum = 575; mean = 575 ÷ 7 ≈ <strong>82.14</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A manager reports \"average order size is $120\" for a shop where most orders are $30–$60 and a few corporate orders are $2,000+. Explain in two or three sentences why that average misleads and what she should report instead.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Order sizes are strongly right-skewed — a few huge orders pull the mean far above what a typical customer spends. Step 2: The mean of $120 describes almost no actual order. Step 3: She should report the <strong>median</strong> order size (and the range), which describes the typical customer, and report the large orders separately.</p>"
    }
  ],
  quiz: [
    {
      q: "Data: 12, 15, 18, 20, 22, 25, 28. The mean is:",
      choices: ["21", "20", "18", "28"],
      answer: 1,
      explanation: "Correct: (b). 140 ÷ 7 = 20. (a) is the mean after adding an outlier day. (c) is one of the values. (d) is the maximum."
    },
    {
      q: "For the same data, the median is:",
      choices: ["20", "18", "22", "No median exists"],
      answer: 0,
      explanation: "Correct: (a). With 7 ordered values, the 4th is 20. (b) and (c) are the values on either side of the middle. (d) is false — a median always exists for numeric data."
    },
    {
      q: "For the same data, the mode is:",
      choices: ["20", "28", "12", "There is no mode"],
      answer: 3,
      explanation: "Correct: (d). No value repeats, so there is no mode. (a), (b), and (c) are all values that appear exactly once."
    },
    {
      q: "The sum of squared deviations from the mean (20) for this data is 186. The sample variance is:",
      choices: ["26.57", "31.00", "186", "5.57"],
      answer: 1,
      explanation: "Correct: (b). Sample variance divides by n − 1: 186 ÷ 6 = 31.00. (a) is the population variance, 186 ÷ 7. (c) is the sum itself. (d) is the sample standard deviation, √31."
    },
    {
      q: "The sample standard deviation is about:",
      choices: ["5.15", "5.57", "26.57", "31.00"],
      answer: 1,
      explanation: "Correct: (b). √31 ≈ 5.57. (a) is the population standard deviation, √26.57. (c) and (d) are variances, not standard deviations."
    },
    {
      q: "Adding a $120 day to the data moves the mean to 32.5 and the median to 21. This shows:",
      choices: ["The median is more affected by outliers than the mean", "The mean is pulled by outliers while the median resists them", "Both measures are equally affected", "The data set is now symmetric"],
      answer: 1,
      explanation: "Correct: (b). The mean jumped 12.5 points; the median moved 1 point. (a) reverses the facts. (c) is false — the moves differ by an order of magnitude. (d) is false — the data are now strongly skewed."
    },
    {
      q: "The coefficient of variation is used to:",
      choices: ["Compare spread across data sets with different scales or units", "Compute the mean of skewed data", "Find the mode of categorical data", "Replace the standard deviation entirely"],
      answer: 0,
      explanation: "Correct: (a). CV = SD ÷ mean is unit-free, so it compares relative spread. (b) is the median's job. (c) is the mode's job. (d) is false — CV is built from the standard deviation."
    },
    {
      q: "Business data are usually treated as samples, so variance is usually computed by dividing by:",
      choices: ["n", "n − 1", "n + 1", "The mean"],
      answer: 1,
      explanation: "Correct: (b). Dividing by n − 1 corrects for the sample's tendency to understate population spread. (a) is the population formula. (c) and (d) are not variance divisors."
    }
  ],
  studyGuide: `
<h3>Module 3 — Describing Data: Quick Reference</h3>
<p><strong>Center:</strong> Mean = sum ÷ n. Median = middle ordered value. Mode = most frequent value (only center for categories).</p>
<p><strong>Spread:</strong> Range = max − min. Variance = average squared deviation. Standard deviation = √variance, in original units.</p>
<p><strong>Anchor data:</strong> 12, 15, 18, 20, 22, 25, 28 → mean 20, median 20, no mode, range 16, squared deviations sum 186, population variance 26.57 (SD 5.15), sample variance 31.00 (SD 5.57), CV 27.9%.</p>
<p><strong>Outlier check:</strong> Adding a $120 day moves the mean to 32.5 but the median only to 21. On skewed data, headline the median.</p>
<p><strong>Watch out:</strong> Sample variance divides by n − 1. And never report a mean alone on skewed data — house prices, incomes, and order sizes are all skewed.</p>
<p><strong>Self-check:</strong> Given any small data set, compute mean, median, mode, range, both variances, both standard deviations, and the CV — by hand, then check with a spreadsheet.</p>
`
};
