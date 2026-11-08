// eco101 - Module 10: The Economist's Toolkit: Data, Statistics & Evidence
module.exports = {
  "number": 10,
  "slug": "economists-toolkit-data-statistics-evidence",
  "title": "The Economist's Toolkit: Data, Statistics & Evidence",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why economists use data and where economic data comes from.",
    "Compute a mean, a median, and a range from a small dataset.",
    "Compute a percentage change and read an index number.",
    "Distinguish correlation from causation and spot a misleading chart.",
    "Explain what a sample is and why a biased sample misleads."
  ],
  "sections": [
    {
      "heading": "Why Economists Count Things",
      "html": "<p>Economics is an evidence-based subject: claims are tested against data, not settled by argument alone. 'The minimum wage costs jobs' is a claim about the world, and economists test it by comparing employment in places that raised the wage with places that did not. 'Free trade raises incomes' is tested the same way — with data, not with slogans.</p>\n<p>Where does the data come from? Governments publish the big series: the Bureau of Labor Statistics (BLS) publishes unemployment and prices, the Bureau of Economic Analysis (BEA) publishes GDP, and the Census Bureau publishes income and population. The Federal Reserve's FRED database gathers thousands of these series in one free place. The World Bank publishes data for countries around the world. Private firms publish their own sales and prices. The lab datasets in this program are frozen tables from these public sources, so every number you compute is checkable.</p>\n<div class=\"callout\"><strong>Key idea:</strong> An economic argument without data is an opinion. Data is what turns 'I think' into 'the evidence shows' — and the evidence can prove you wrong, which is exactly why it is useful.</div>"
    },
    {
      "heading": "Summarizing Data: Mean, Median, Range",
      "html": "<p>A dataset is a list of numbers; a <strong>descriptive statistic</strong> summarizes it in one number. The <strong>mean</strong> (average) is the sum divided by the count. The <strong>median</strong> is the middle value when the numbers are in order. The <strong>range</strong> is the largest minus the smallest, showing the spread.</p>\n<p>Work it with a small dataset — five workers' hourly wages: $14, $16, $18, $20, $22. Mean = (14 + 16 + 18 + 20 + 22) ÷ 5 = 90 ÷ 5 = $18. Median: the numbers are already in order, and the middle one (third of five) is $18. Range = $22 − $14 = $8. Here the mean and median agree, which happens when the data are symmetric.</p>\n<p>Now add one manager earning $60 an hour: $14, $16, $18, $20, $22, $60. Mean = (90 + 60) ÷ 6 = 150 ÷ 6 = $25. Median: with six numbers, the median is the average of the third and fourth — ($18 + $20) ÷ 2 = $19. The mean ($25) is pulled up by the one high earner; the median ($19) still describes the typical worker. That is why news reports of 'average income' can mislead: one billionaire raises the mean but not the median.</p>"
    },
    {
      "heading": "Percentage Changes and Index Numbers",
      "html": "<p>Economists compare changes in percentage terms (Module 6) and with <strong>index numbers</strong>, which set one period equal to 100 and express other periods relative to it. Suppose a price index is 100 in Year 1 and 120 in Year 2. Prices rose 20%. If the index is 90 in Year 3, prices are 10% below the Year 1 level.</p>\n<p>Work a wage example. A worker earns $20 an hour in Year 1 (index 100) and $24 an hour in Year 2 (index 120). Nominal wage growth is ($24 − $20) ÷ $20 = 20%. But prices also rose 20%, so the real wage is $24 ÷ 120 × 100 = $20 — unchanged. The worker earns more dollars and buys exactly the same basket. Index numbers make that comparison a one-line calculation.</p>\n<div class=\"formula\">Real value = nominal value ÷ index × 100 &nbsp;|&nbsp; Mean = sum ÷ count &nbsp;|&nbsp; Range = largest − smallest</div>"
    },
    {
      "heading": "Correlation Is Not Causation — and Charts Can Lie",
      "html": "<p><strong>Correlation</strong> means two things move together. <strong>Causation</strong> means one thing makes the other happen. Ice cream sales and drownings both rise in summer — they are correlated, but ice cream does not cause drowning. Both are caused by a third thing: hot weather and swimming. Economists call that third thing a <strong>confounding variable</strong>, and finding it is half the job of applied economics.</p>\n<p>Charts can mislead too. A chart whose vertical axis starts at 90 instead of 0 makes a 5% rise look like a doubling. A chart that cherry-picks two years can hide a decade of opposite movement. A good reader always checks: what is on the axes, where do they start, what years are shown, and what is the source? A chart without a source is a claim without evidence.</p>\n<p>Finally, watch the <strong>sample</strong>: the group actually measured. A survey of 100 shoppers at one expensive store does not describe all shoppers. A <strong>biased sample</strong> — one that systematically misses part of the population — gives wrong answers no matter how large it is. Random sampling, where everyone has an equal chance of being picked, is the fix. eco121 and eco221 go deep on all of this; here, the habit is the lesson: ask where the number came from before you believe it.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Economics tests claims with data from public sources: BLS, BEA, Census, FRED, World Bank.</li>\n<li>Mean = sum ÷ count; median = middle value; range = largest − smallest.</li>\n<li>Real value = nominal ÷ index × 100; percentage change = (new − old) ÷ old × 100.</li>\n<li>Correlation is not causation — look for the confounding variable.</li>\n<li>Check every chart's axes, start point, years, and source; check every sample for bias.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Quoting the mean when the median is the honest number. Add one $60 earner to five workers at $14–$22 and the mean jumps to $25 while the typical worker still earns $19. Always ask which average you are being shown.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Reading a chart whose axis does not start at zero and believing the visual gap. A 5% rise drawn on an axis from 90 to 100 looks enormous — check the numbers, not the picture.</div>\n<p><strong>Ready-to-Work link:</strong> Every job now involves data: sales figures, survey results, dashboards. The person who can compute a mean, spot a biased sample, and ask 'correlation or causation?' is the person whose numbers the team can trust.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Data", "def": "Recorded facts and numbers used to test economic claims." },
    { "term": "Descriptive statistic", "def": "A single number that summarizes a dataset, such as a mean, median, or range." },
    { "term": "Mean", "def": "The average: the sum of the numbers divided by how many there are." },
    { "term": "Median", "def": "The middle value when numbers are arranged in order." },
    { "term": "Range", "def": "The largest value minus the smallest value — a measure of spread." },
    { "term": "Outlier", "def": "An extreme value far from the rest of the data, which can pull the mean away from the typical value." },
    { "term": "Index number", "def": "A number that expresses a value relative to a base period set equal to 100." },
    { "term": "Percentage change", "def": "(New − old) ÷ old × 100 — how much a value changed in percentage terms." },
    { "term": "Correlation", "def": "Two variables moving together; it does not by itself prove one causes the other." },
    { "term": "Causation", "def": "One variable actually producing a change in another." },
    { "term": "Confounding variable", "def": "A third factor that causes both variables in a correlation, such as hot weather causing both ice cream sales and drownings." },
    { "term": "Sample", "def": "The group actually measured, drawn from a larger population." },
    { "term": "Biased sample", "def": "A sample that systematically misses part of the population and so gives wrong answers." },
    { "term": "Random sample", "def": "A sample in which everyone in the population has an equal chance of being picked." },
    { "term": "FRED", "def": "The Federal Reserve's free database of economic time series from public sources." }
  ],
  "video": {
    "title": "Statistics: The average | Descriptive statistics | Probability and Statistics | Khan Academy",
    "embedUrl": "https://www.youtube.com/embed/uhxtUt_-GyM",
    "note": "Khan Academy introduces the mean, median, and mode as three ways to describe a typical value — and shows why the choice matters. Watch it, then redo the wage example in this module with the $60 earner added.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Five workers earn $14, $16, $18, $20, and $22 an hour. (a) What is the mean? (b) What is the median? (c) What is the range?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Mean = (14 + 16 + 18 + 20 + 22) ÷ 5 = 90 ÷ 5 = $18. Step 2: Median: the numbers are in order and the middle (third) value is $18. Step 3: Range = $22 − $14 = $8.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Add a manager earning $60 an hour to the five workers in Problem 1. (a) What is the new mean? (b) What is the new median? (c) Which number better describes the typical worker, and why?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: New mean = (90 + 60) ÷ 6 = 150 ÷ 6 = $25. Step 2: The six numbers in order are 14, 16, 18, 20, 22, 60; the median is the average of the third and fourth: ($18 + $20) ÷ 2 = $19. Step 3: The median ($19) better describes the typical worker — the mean ($25) is pulled up by the one $60 outlier and describes nobody in the group.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A price index is 100 in Year 1 and 120 in Year 2. A worker earns $20 an hour in Year 1 and $24 in Year 2. (a) What is the nominal wage growth? (b) What is the real wage in Year 2? (c) Did the worker's purchasing power rise?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Nominal growth = ($24 − $20) ÷ $20 = 20%. Step 2: Real wage = $24 ÷ 120 × 100 = $20. Step 3: No — the real wage is $20, the same as Year 1. The 20% pay rise was exactly eaten by 20% inflation.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A shop's sales rise from $50,000 to $57,500 in a year. (a) What is the percentage change? (b) If prices rose 5% in the same year, roughly what is the real growth in sales?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Change = ($57,500 − $50,000) ÷ $50,000 = $7,500 ÷ $50,000 = 0.15 = 15%. Step 2: Real growth is roughly nominal minus inflation: 15% − 5% = 10%. Step 3: The shop really sold about 10% more; the other 5% is higher prices.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Ice cream sales and drownings both rise in summer. A headline says 'Ice cream causes drowning.' Explain the error, naming the confounding variable.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The error is confusing correlation with causation — two things moving together does not mean one causes the other. Step 2: The confounding variable is hot weather: it raises ice cream sales and it sends more people swimming, which raises drownings. Step 3: Remove the hot weather and the correlation disappears; ice cream itself causes nothing.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A store surveys 100 customers who are in the store on a Saturday and finds they spend $80 on average. The owner concludes all customers spend $80. (a) What is wrong with the sample? (b) How should the survey be improved?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) The sample is biased — Saturday shoppers may be weekend browsers who spend more than weekday shoppers, and people who never visit the store are missed entirely. Step 2: (b) Survey a random sample across all days of the week, including different times, so every customer has a chance of being picked. Step 3: A biased sample gives wrong answers no matter how many people are in it.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Five workers earn $14, $16, $18, $20, and $22 an hour. The mean wage is:",
      "choices": ["$16", "$18", "$20", "$22"],
      "answer": 1,
      "explanation": "Correct: (b). (14 + 16 + 18 + 20 + 22) ÷ 5 = 90 ÷ 5 = $18. (a) Is the second value. (c) Is the fourth value. (d) Is the largest value."
    },
    {
      "q": "Add a manager earning $60 to those five workers. The new median is:",
      "choices": ["$25", "$19", "$18", "$60"],
      "answer": 1,
      "explanation": "Correct: (b). The six ordered values are 14, 16, 18, 20, 22, 60; the median is ($18 + $20) ÷ 2 = $19. (a) Is the new mean, $25. (c) Is the old median. (d) Is the outlier, not the middle."
    },
    {
      "q": "In that example, the mean ($25) is higher than the median ($19) because:",
      "choices": ["The median is always lower", "One high outlier pulls the mean up", "There are six workers", "The range is $46"],
      "answer": 1,
      "explanation": "Correct: (b). The $60 earner raises the total without changing the typical worker. (a) The median is not always lower — with symmetric data they agree. (c) The count does not cause the gap. (d) The range ($60 − $14 = $46) describes spread, not the mean-median gap."
    },
    {
      "q": "A price index is 100 in Year 1 and 120 in Year 2. A $24 wage in Year 2 is worth, in Year 1 dollars:",
      "choices": ["$24", "$20", "$28.80", "$12"],
      "answer": 1,
      "explanation": "Correct: (b). $24 ÷ 120 × 100 = $20. (a) Is the nominal wage. (c) Multiplies by the index instead of dividing. (d) Halves the wage for no reason."
    },
    {
      "q": "Sales rise from $50,000 to $57,500. The percentage change is:",
      "choices": ["7.5%", "10%", "15%", "57.5%"],
      "answer": 2,
      "explanation": "Correct: (c). $7,500 ÷ $50,000 = 15%. (a) Would need a rise of $3,750. (b) Would need a rise of $5,000. (d) Confuses the new level with the change."
    },
    {
      "q": "Ice cream sales and drownings both rise in summer. This shows:",
      "choices": ["Ice cream causes drowning", "Correlation, not causation — hot weather causes both", "Drowning causes ice cream sales", "The two are unrelated in every way"],
      "answer": 1,
      "explanation": "Correct: (b). Hot weather is the confounding variable behind both. (a) Confuses correlation with causation. (c) Reverses the supposed direction with no evidence. (d) They are correlated — they move together — just not causally."
    },
    {
      "q": "A survey of 100 Saturday shoppers at one expensive store is a biased sample because:",
      "choices": ["100 people is too few", "It systematically misses weekday shoppers and non-visitors", "Saturday shoppers never tell the truth", "Surveys are always wrong"],
      "answer": 1,
      "explanation": "Correct: (b). The sample misses part of the population, so it cannot describe all customers. (a) Size is not the problem — bias is. (c) There is no reason to doubt their honesty. (d) Well-designed random surveys are reliable."
    },
    {
      "q": "A chart whose vertical axis starts at 90 instead of 0 is misleading because:",
      "choices": ["It shows too much data", "It makes a small change look large", "It hides the source", "It uses the wrong colors"],
      "answer": 1,
      "explanation": "Correct: (b). Cutting off the axis exaggerates the visual gap — a 5% rise can look like a doubling. (a) The amount of data is not the issue. (c) A missing source is a different problem. (d) Colors do not distort scale."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — The Economist's Toolkit Quick Reference</h3>\n<p><strong>Data sources:</strong> BLS (unemployment, prices) · BEA (GDP) · Census (income, population) · FRED (the Fed's free database) · World Bank (countries).</p>\n<p><strong>Mean = sum ÷ count; median = middle value; range = largest − smallest.</strong> Worked anchor: $14, $16, $18, $20, $22 → mean $18, median $18, range $8. Add a $60 earner → mean $25, median $19 — the median describes the typical worker.</p>\n<p><strong>Real = nominal ÷ index × 100:</strong> $24 ÷ 120 × 100 = $20. <strong>Percentage change = (new − old) ÷ old × 100.</strong></p>\n<p><strong>Correlation ≠ causation:</strong> ice cream and drownings both rise in summer — hot weather is the confounding variable.</p>\n<p><strong>Watch out:</strong> check every chart's axes, start point, years, and source; check every sample for bias.</p>\n<p><strong>Self-check:</strong> Find one chart in the news and check its axis start point and its source before believing its message.</p>\n"
};
