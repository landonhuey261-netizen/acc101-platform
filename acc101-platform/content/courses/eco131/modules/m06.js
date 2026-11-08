module.exports = {
  "number": 6,
  "slug": "descriptive-analytics",
  "title": "Descriptive Analytics: Summarizing a Dataset",
  "estTime": "3–4 hours",
  "objectives": [
    "Compute the mean, median, mode, and range of a small dataset by hand.",
    "Explain when the median beats the mean, and when the mean is the right choice.",
    "Compute a simple standard deviation and explain what it measures in plain words.",
    "Describe a distribution's shape — symmetric, skewed left, or skewed right — from its numbers.",
    "Choose the right summary for a dataset and defend the choice in one sentence."
  ],
  "sections": [
    {
      "heading": "Center: Mean, Median, Mode",
      "html": "<p>A dataset of twelve monthly sales figures is hard to hold in your head; three numbers summarise its centre. The <strong>mean</strong> is the sum divided by the count. The <strong>median</strong> is the middle value when the data are sorted. The <strong>mode</strong> is the most frequent value.</p><p><em>Example.</em> A shop's monthly sales ($000) for 12 months are 120, 135, 128, 150, 162, 158, 175, 180, 172, 190, 205, 220. The sum is 1,995, so the mean is 1,995 ÷ 12 = <strong>166.25</strong>. Sorted, the middle two values are 162 and 172, so the median is (162 + 172) ÷ 2 = <strong>167</strong>. No value repeats, so there is no mode. Mean and median agree closely here — the data are fairly symmetric.</p><div class=\"callout\"><strong>Key idea:</strong> Mean uses every value; median uses only order. When they disagree a lot, something interesting — usually skew or an outlier — is going on.</div>"
    },
    {
      "heading": "When the Median Beats the Mean",
      "html": "<p>Income is the classic case. In a town where nine people earn $40,000 and one person earns $400,000, the mean is (9 × $40,000 + $400,000) ÷ 10 = $760,000 ÷ 10 = <strong>$76,000</strong> — a number nobody in the town earns. The median is <strong>$40,000</strong>, the typical person's income. The mean is pulled up by the one high earner; the median is not.</p><p>Rule of thumb: use the median for skewed data (income, house prices, wealth) and the mean for roughly symmetric data (test scores, monthly temperatures) — and report both when they disagree, because the gap itself is information.</p>"
    },
    {
      "heading": "Spread: Range and Standard Deviation",
      "html": "<p>Centre is only half the story. Two datasets can have the same mean and look nothing alike. The <strong>range</strong> is the simplest spread measure: largest minus smallest. For the shop sales above, the range is 220 − 120 = <strong>100</strong>.</p><p>The <strong>standard deviation</strong> is the average distance of values from the mean. <em>Example.</em> Five values 2, 4, 6, 8, 10 have mean 6. Their distances from the mean are −4, −2, 0, 2, 4; squared, they are 16, 4, 0, 4, 16, summing to 40; divided by 5 gives a variance of 8; the square root is √8 ≈ <strong>2.83</strong>. A bigger standard deviation means the data are more spread out. In plain words: “typical values sit about 2.8 units from the mean.”</p><div class=\"formula\">Variance = average of (value − mean)² &nbsp;|&nbsp; Standard deviation = √variance</div>"
    },
    {
      "heading": "Shape: Symmetric or Skewed?",
      "html": "<p>Plot the data and look at its shape. A <strong>symmetric</strong> distribution has mean ≈ median ≈ mode. A <strong>right-skewed</strong> distribution has a long tail to the right — a few very high values pull the mean above the median (income). A <strong>left-skewed</strong> distribution has a long tail to the left — a few very low values pull the mean below the median (exam scores with a hard test and a few very low marks).</p><p>Shape decides the summary. Right-skewed: lead with the median. Symmetric: the mean is fine. And always say which you used — “average” without saying mean or median is not a summary, it is a riddle.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Mean = sum ÷ count; median = middle sorted value; mode = most frequent value.</li><li>Median resists outliers and skew; mean uses every value.</li><li>Range = largest − smallest; standard deviation = typical distance from the mean.</li><li>Right-skewed: mean &gt; median. Left-skewed: mean &lt; median. Symmetric: they agree.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Reporting “the average” without saying which average. For income, the mean and the median can differ by tens of thousands of dollars.</div><div class=\"callout\"><strong>Common mistake:</strong> Describing spread with the mean alone. Two datasets with the same mean can have wildly different spreads — always report a spread measure too.</div>"
    }
  ],
  "keyTerms": [
    {
      "term": "Mean",
      "def": "The sum of all values divided by the count; the arithmetic average."
    },
    {
      "term": "Median",
      "def": "The middle value of sorted data; half the values are above it, half below."
    },
    {
      "term": "Mode",
      "def": "The most frequent value in a dataset; a dataset may have no mode or several."
    },
    {
      "term": "Range",
      "def": "Largest value minus smallest value; the simplest measure of spread."
    },
    {
      "term": "Standard deviation",
      "def": "The typical distance of values from the mean; a bigger value means more spread."
    },
    {
      "term": "Variance",
      "def": "The average of the squared distances from the mean; the square of the standard deviation."
    },
    {
      "term": "Skewed",
      "def": "A distribution with a long tail on one side; right-skewed has the tail on the right."
    },
    {
      "term": "Symmetric distribution",
      "def": "A distribution where mean, median, and mode agree and both sides mirror each other."
    },
    {
      "term": "Outlier",
      "def": "A value far from the rest, which pulls the mean but barely moves the median."
    },
    {
      "term": "Distribution",
      "def": "The pattern of how values are spread out — its centre, spread, and shape."
    },
    {
      "term": "Descriptive statistics",
      "def": "Numbers that summarise a dataset: centre, spread, and shape."
    },
    {
      "term": "Population mean",
      "def": "The mean of a whole population, usually written μ (mu)."
    },
    {
      "term": "Sample mean",
      "def": "The mean of a sample, usually written x̄ (x-bar)."
    },
    {
      "term": "Quartile",
      "def": "A value dividing sorted data into quarters; the median is the second quartile."
    }
  ],
  "video": {
    "title": "Mean, Median, and Mode: Measures of Central Tendency: Crash Course Statistics #3",
    "embedUrl": "https://www.youtube.com/embed/kn83BA7cRNM",
    "note": "Crash Course Statistics on mean, median, and mode: what each one measures, and why the mean can mislead when data are skewed. Work its examples before doing this module's assignments.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> <em>Example data.</em> Monthly sales ($000): 120, 135, 128, 150, 162, 158, 175, 180, 172, 190, 205, 220. (a) Find the mean. (b) Find the median. (c) Find the range.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Sum = 120+135+128+150+162+158+175+180+172+190+205+220 = 1,995. Mean = 1,995 ÷ 12 = <strong>166.25</strong>. Step 2: Sorted: 120, 128, 135, 150, 158, 162, 172, 175, 180, 190, 205, 220. The middle two are 162 and 172, so the median = (162+172) ÷ 2 = <strong>167</strong>. Step 3: Range = 220 − 120 = <strong>100</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Nine people earn $40,000 and one earns $400,000. (a) Compute the mean. (b) State the median. (c) Which better describes a typical person, and why?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Total = 9 × $40,000 + $400,000 = $360,000 + $400,000 = $760,000. Mean = $760,000 ÷ 10 = <strong>$76,000</strong>. Step 2: Sorted, the 5th and 6th values are both $40,000, so the median is <strong>$40,000</strong>. Step 3: The median is better — nine of ten people earn $40,000, and the mean is pulled up by one person.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Values 2, 4, 6, 8, 10 have mean 6. (a) Compute the variance (divide by 5). (b) Compute the standard deviation. (c) Say in plain words what it means.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Distances from 6 are −4, −2, 0, 2, 4. Squared: 16, 4, 0, 4, 16; sum = 40. Step 2: Variance = 40 ÷ 5 = <strong>8</strong>. Step 3: Standard deviation = √8 ≈ <strong>2.83</strong>. Step 4: In plain words, a typical value sits about 2.8 units away from the mean of 6.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A dataset has mean 90 and median 60. (a) Is it skewed left or right? (b) Explain your answer in one sentence.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The mean (90) is well above the median (60). Step 2: High values pull the mean up, so the tail is on the right — <strong>right-skewed</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> <em>Example data.</em> Five house prices ($000): 180, 200, 210, 220, 900. (a) Compute the mean. (b) Find the median. (c) Which should a news report lead with?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Sum = 180+200+210+220+900 = 1,710; mean = 1,710 ÷ 5 = <strong>342</strong> ($342,000). Step 2: Sorted, the middle value is <strong>210</strong> ($210,000). Step 3: Lead with the median — the $900,000 house is an outlier that drags the mean far above what a typical house costs.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Two classes both average 70 on a test. Class A scores range from 65 to 75; Class B scores range from 40 to 100. (a) Which class has the bigger standard deviation? (b) What does that tell a teacher?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Class B has the bigger standard deviation — its scores are far more spread out. Step 2: The same mean hides different realities: Class A is uniformly near 70, while Class B has some students far behind and some far ahead, so the teacher's help should go to the low scorers in Class B.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The mean of 120, 135, and 128 is:",
      "choices": [
        "120",
        "127.67",
        "128",
        "383"
      ],
      "answer": 1,
      "explanation": "Correct: (b). (120 + 135 + 128) ÷ 3 = 383 ÷ 3 = 127.67. (a) is the smallest value. (c) is the median of the three. (d) is the sum, not the mean."
    },
    {
      "q": "The median of 120, 128, 135, 150, 158 is:",
      "choices": [
        "120",
        "135",
        "128",
        "150"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Sorted, the middle (3rd of 5) value is 135. (a) is the smallest. (c) is the 2nd value. (d) is the 4th value."
    },
    {
      "q": "Nine people earn $40,000 and one earns $400,000. The median is:",
      "choices": [
        "$40,000",
        "$76,000",
        "$400,000",
        "$44,000"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Sorted, the middle values are $40,000. (b) is the mean, pulled up by the high earner. (c) is the outlier. (d) is neither mean nor median."
    },
    {
      "q": "The range of 120, 135, 128, 150, 162, 158, 175, 180, 172, 190, 205, 220 is:",
      "choices": [
        "100",
        "166.25",
        "167",
        "220"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 220 − 120 = 100. (b) is the mean. (c) is the median. (d) is the largest value, not the range."
    },
    {
      "q": "Values 2, 4, 6, 8, 10 have a standard deviation of about:",
      "choices": [
        "2.83",
        "8",
        "6",
        "40"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Variance is 8, so the standard deviation is √8 ≈ 2.83. (b) is the variance, not its square root. (c) is the mean. (d) is the sum of squared distances."
    },
    {
      "q": "A dataset with mean 90 and median 60 is:",
      "choices": [
        "Symmetric",
        "Right-skewed",
        "Left-skewed",
        "Bimodal"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Mean above median means a long right tail pulled the mean up. (a) would need mean ≈ median. (c) would need mean below median. (d) Bimodal means two peaks, which these two numbers do not show."
    },
    {
      "q": "For house prices in a town with a few mansions, the best “typical” summary is the:",
      "choices": [
        "Mean",
        "Median",
        "Mode",
        "Range"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The median resists the mansions' pull. (a) The mean is dragged up by outliers. (c) The mode is rarely useful for prices. (d) The range measures spread, not centre."
    },
    {
      "q": "Two datasets have the same mean but different standard deviations. This means:",
      "choices": [
        "They are identical",
        "One is more spread out than the other",
        "One has a bigger mean",
        "The median must differ"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Standard deviation measures spread, independent of the mean. (a) Same mean does not mean same data. (c) The means are equal by the question. (d) The medians could be equal too."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Descriptive Analytics: Quick Reference</h3>\n<p><strong>Centre:</strong> Mean = sum ÷ count · Median = middle sorted value · Mode = most frequent value.</p>\n<p><strong>Spread:</strong> Range = largest − smallest · Variance = average of (value − mean)² · Standard deviation = √variance = typical distance from the mean.</p>\n<p><strong>Shape:</strong> Symmetric: mean ≈ median · Right-skewed: mean &gt; median (income, house prices — lead with the median) · Left-skewed: mean &lt; median.</p>\n<p><strong>Worked anchor:</strong> Sales 120…220 ($000): mean 166.25, median 167, range 100 — fairly symmetric.</p>\n<p><strong>Watch out:</strong> Never report “the average” without saying mean or median. Always report a spread measure with a centre measure.</p>\n<p><strong>Self-check:</strong> Take any five numbers, compute mean, median, range, and standard deviation by hand, and say whether the data look skewed.</p>\n"
};
