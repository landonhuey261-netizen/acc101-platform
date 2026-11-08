// BUS 121 - Module 4: Charts & Data Visualization: Telling the Story
module.exports = {
  number: 4,
  slug: "charts-data-visualization",
  title: "Charts & Data Visualization: Telling the Story",
  estTime: "3–4 hours",
  objectives: [
    "Choose the right chart for a comparison, a trend, a part-to-whole, or a distribution.",
    "Build bar, line, pie, histogram, and scatter charts in a spreadsheet.",
    "Explain why a pie chart fails with many categories and why a truncated axis misleads.",
    "Read a chart critically: check the axis, the scale, and the source.",
    "Design a one-page dashboard a manager can read in thirty seconds."
  ],
  sections: [
    {
      heading: "The Chart Follows the Question",
      html: `
<p>A chart is an answer to a question, and the question decides the chart. Comparing categories — sales by region, defects by type — calls for a <strong>bar chart</strong>: length encodes value, and the eye compares lengths easily. Showing change over time — monthly sales, website visits — calls for a <strong>line chart</strong>: the eye follows the slope. Showing parts of a whole — market share, budget split — calls for a <strong>pie chart</strong>, but only with two or three slices; beyond that, angles become unreadable. Showing a distribution — how order sizes spread — calls for a <strong>histogram</strong>: values grouped into bins, with bar height showing frequency. Showing a relationship between two numbers — advertising spend vs. sales — calls for a <strong>scatter plot</strong>: one dot per observation, and the pattern (or its absence) is visible at a glance.</p>
<p>Before choosing, state the question in one sentence. "Which region sells most?" is a bar chart. "Are sales rising?" is a line chart. "Where does the money go?" is a pie chart with few slices. A chart chosen before the question is decoration.</p>
<div class="callout"><strong>Key idea:</strong> The chart follows the question, not the data. If you cannot state the question in one sentence, you are not ready to choose a chart.</div>`
    },
    {
      heading: "Bar, Line, and Pie: Worked Examples",
      html: `
<p><strong>Bar chart:</strong> Quarterly sales of $40,000, $55,000, $48,000, $62,000. Four bars, one per quarter, make the ranking obvious: Q4 highest, Q1 lowest, Q3 below Q2. Sort the bars when the order does not matter — a sorted bar chart answers "which is biggest?" faster than any table.</p>
<p><strong>Line chart:</strong> The same four quarters as a line show the shape: up from Q1 to Q2, down to Q3, up to Q4. A line implies continuity between points, so use it for time series and ordered data — never for unrelated categories, where the line between "North" and "South" means nothing.</p>
<p><strong>Pie chart:</strong> A budget split of 50% product, 30% marketing, 20% operations reads cleanly as three slices. A split across eight categories does not — the eye cannot compare eight angles, and the labels crowd each other. With more than three or four parts, use a sorted bar chart instead: it shows the same shares and ranks them.</p>`
    },
    {
      heading: "Histograms and Scatter Plots",
      html: `
<p>A <strong>histogram</strong> groups numbers into bins and counts how many fall in each. Order sizes of 12, 15, 18, 20, 22, 25, 28, and 120 fall into bins of 0–29 (seven orders) and 120–149 (one order) — the shape is immediately clear: most orders are small, one is huge. The bin width matters: bins too wide hide the shape, bins too narrow show noise. A good histogram reveals skew, clusters, and gaps that a table of numbers hides.</p>
<p>A <strong>scatter plot</strong> puts one variable on each axis and plots one dot per observation. Advertising spend on the x-axis and sales on the y-axis, with dots rising from bottom-left to top-right, suggests a positive relationship — the subject of Module 8's correlation and regression. Dots in a cloud with no pattern suggest no relationship. A scatter plot is the fastest honest check of "do these two things move together?" — and it also exposes outliers a correlation coefficient would hide.</p>`
    },
    {
      heading: "How Charts Lie (and How to Spot It)",
      html: `
<p>Charts mislead in predictable ways. A <strong>truncated axis</strong> — a bar chart whose y-axis starts at $35,000 instead of $0 — makes a $40,000 bar look half the height of a $55,000 bar, exaggerating a 37.5% difference into a visual doubling. A <strong>3D effect</strong> distorts areas and hides values behind other bars. A <strong>dual axis</strong> can make two unrelated lines appear to move together. And a chart without a source, a date, or units is an assertion, not evidence.</p>
<p>The defense is a short checklist: does the axis start at zero (for bar charts)? Are the units labeled? Is the time period stated? Is the source named? Would the same data as a table tell the same story? If the chart fails any of those, read it as a claim to verify, not as a fact.</p>
<div class="callout"><strong>Key idea:</strong> A chart's job is to make the truth easier to see. If a chart makes a small difference look large, it is not a better chart — it is a worse one.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Comparison → bar chart. Trend over time → line chart. Part-to-whole (2–3 parts) → pie chart. Distribution → histogram. Relationship → scatter plot.</li>
<li>Sort bars when order does not matter; never use a line chart for unrelated categories.</li>
<li>Histogram bin width shapes the story — too wide hides shape, too narrow shows noise.</li>
<li>Check every chart: axis from zero, units labeled, period and source stated, no 3D distortion.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Using a pie chart with eight slices. The eye cannot compare angles; use a sorted bar chart instead.</div>
<div class="callout"><strong>Common mistake:</strong> A bar chart whose axis does not start at zero. Bar length encodes value only when the axis starts at zero — otherwise the visual comparison is a lie.</div>
<p><strong>Ready-to-work link:</strong> The statistics lab asks you to describe a data set and the forecasting lab asks you to plot a trend. Both are charting exercises in disguise — the chart you choose is the story you tell.</p>`
    }
  ],
  keyTerms: [
    { term: "Bar chart", def: "A chart that compares categories by the length of bars; best for comparisons." },
    { term: "Line chart", def: "A chart that joins points in order, best for trends over time." },
    { term: "Pie chart", def: "A chart that shows parts of a whole as slices; readable only with two or three slices." },
    { term: "Histogram", def: "A chart that groups numbers into bins and shows how many fall in each bin; reveals distribution shape." },
    { term: "Scatter plot", def: "A chart with one dot per observation, showing the relationship between two numbers." },
    { term: "Bin", def: "One interval in a histogram; values falling in it are counted together." },
    { term: "Axis", def: "The scale along the side or bottom of a chart; for bar charts it should start at zero." },
    { term: "Truncated axis", def: "An axis that does not start at zero, exaggerating differences in a bar chart." },
    { term: "Dashboard", def: "A one-page display of the key charts and numbers a manager checks regularly." },
    { term: "Distribution", def: "How values spread across their range — their center, spread, and shape." },
    { term: "Skew", def: "Asymmetry in a distribution, visible in a histogram as a long tail on one side." },
    { term: "Outlier", def: "A value far from the rest, visible in a histogram or scatter plot as a lone point." },
    { term: "Data visualization", def: "Showing data as a picture so patterns, comparisons, and exceptions are visible at a glance." },
    { term: "Sort order", def: "Arranging bars from largest to smallest so ranking is visible without reading numbers." }
  ],
  video: {
    title: "How To Choose The Right Graph (Types of Graphs and When To Use Them)",
    embedUrl: "https://www.youtube.com/embed/o7F-tbBl_hA",
    note: "A short tour of the five most-used chart types and when each one fits: bar charts for category comparison, histograms for distributions, pie charts for parts of a whole — and why a pie chart is usually the wrong choice. Watch it, then match each chart in this module to its question.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Match each question to the best chart: (a) Which region sells most? (b) Are monthly sales rising? (c) What share of the budget goes to marketing? (d) How are order sizes distributed? (e) Does advertising spend move with sales?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: (a) <strong>Bar chart</strong> — compares categories. Step 2: (b) <strong>Line chart</strong> — trend over time. Step 3: (c) <strong>Pie chart</strong> (if few categories) — part-to-whole. Step 4: (d) <strong>Histogram</strong> — distribution. Step 5: (e) <strong>Scatter plot</strong> — relationship between two numbers.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Quarterly sales are $40,000, $55,000, $48,000, $62,000. (a) What is the percent increase from Q1 to Q2? (b) What is the percent decrease from Q2 to Q3? (c) Which quarter is highest?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Q1 to Q2 = (55,000 − 40,000) ÷ 40,000 = 15,000 ÷ 40,000 = <strong>37.5% increase</strong>. Step 2: Q2 to Q3 = (48,000 − 55,000) ÷ 55,000 = −7,000 ÷ 55,000 ≈ <strong>−12.7%</strong>. Step 3: <strong>Q4 ($62,000)</strong> is highest.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A budget split is 50% product, 30% marketing, 20% operations, on a total budget of $200,000. (a) How many dollars go to each part? (b) Why is a pie chart acceptable here but not for an eight-category split?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Product = 50% × 200,000 = <strong>$100,000</strong>; marketing = 30% × 200,000 = <strong>$60,000</strong>; operations = 20% × 200,000 = <strong>$40,000</strong>. Step 2: Three slices are easy to compare by angle; eight slices are not — the eye cannot rank eight angles, so a sorted bar chart is better.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A bar chart shows two bars: $40,000 and $55,000. Its y-axis starts at $35,000. (a) What does the chart make the difference look like? (b) What is the true percent difference? (c) How should the chart be fixed?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: The $40,000 bar shows only $5,000 of height above the axis start, while the $55,000 bar shows $20,000 — the second bar looks <strong>four times as tall</strong>. Step 2: The true difference is (55,000 − 40,000) ÷ 40,000 = <strong>37.5%</strong>. Step 3: Start the axis at <strong>$0</strong> so bar length encodes value honestly.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Order sizes: 12, 15, 18, 20, 22, 25, 28, 120. Using bins of 0–29, 30–59, 60–89, 90–119, 120–149, how many orders fall in each bin, and what does the histogram show?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: 0–29: <strong>7 orders</strong> (12, 15, 18, 20, 22, 25, 28). Step 2: 30–59, 60–89, 90–119: <strong>0 each</strong>. Step 3: 120–149: <strong>1 order</strong> (120). Step 4: The histogram shows a strongly right-skewed distribution — most orders are small, with one large outlier.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A dashboard shows sales, profit margin, and customer satisfaction, but no dates, no units, and no source. Name three things wrong with it and what to add.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: No dates — add the period each number covers, so the reader knows whether it is this month or this year. Step 2: No units — label dollars vs. percent vs. count, so $40,000 is not mistaken for 40,000 units. Step 3: No source — name where the numbers came from, so the reader can verify them and know how fresh they are.</p>"
    }
  ],
  quiz: [
    {
      q: "The best chart for comparing sales across regions is a:",
      choices: ["Pie chart", "Bar chart", "Line chart", "Histogram"],
      answer: 1,
      explanation: "Correct: (b). Bar length compares categories directly. (a) is for parts of a whole with few slices. (c) is for trends over time. (d) is for distributions of numbers."
    },
    {
      q: "The best chart for showing monthly sales over two years is a:",
      choices: ["Bar chart", "Pie chart", "Line chart", "Scatter plot"],
      answer: 2,
      explanation: "Correct: (c). A line follows the trend over time. (a) could show the months but hides the trend's shape. (b) cannot show 24 time periods. (d) shows a relationship between two variables, not a trend."
    },
    {
      q: "A pie chart is a good choice when:",
      choices: ["There are eight categories to compare", "There are two or three parts of a whole to show", "The data are a time series", "You need to show a distribution"],
      answer: 1,
      explanation: "Correct: (b). Two or three slices are easy to compare by angle. (a) needs a sorted bar chart. (c) needs a line chart. (d) needs a histogram."
    },
    {
      q: "A histogram shows:",
      choices: ["Parts of a whole", "A trend over time", "How numbers are distributed across bins", "The relationship between two variables"],
      answer: 2,
      explanation: "Correct: (c). Bin counts reveal shape, skew, and gaps. (a) is a pie chart. (b) is a line chart. (d) is a scatter plot."
    },
    {
      q: "A scatter plot with dots rising from bottom-left to top-right suggests:",
      choices: ["No relationship", "A positive relationship between the two variables", "A negative relationship", "That the data are categorical"],
      answer: 1,
      explanation: "Correct: (b). Rising dots mean larger x goes with larger y. (a) would be a shapeless cloud. (c) would be dots falling from top-left to bottom-right. (d) is wrong — scatter plots need two numbers."
    },
    {
      q: "A bar chart whose y-axis starts at $35,000 instead of $0:",
      choices: ["Is more accurate", "Exaggerates differences — a $55,000 bar looks four times as tall as a $40,000 bar", "Makes all bars the same height", "Is required for dollar data"],
      answer: 1,
      explanation: "Correct: (b). The visible heights are $20,000 vs. $5,000 above the axis start, a 4:1 visual ratio for a 37.5% real difference. (a) is false. (c) is false. (d) is false — bar charts should start at zero."
    },
    {
      q: "Quarterly sales $40,000, $55,000, $48,000, $62,000. The increase from Q1 to Q2 is:",
      choices: ["12.7%", "37.5%", "55%", "15%"],
      answer: 1,
      explanation: "Correct: (b). (55,000 − 40,000) ÷ 40,000 = 37.5%. (a) is the Q2-to-Q3 change. (c) is Q2's value in thousands. (d) is the dollar change in thousands."
    },
    {
      q: "The first step in choosing a chart is to:",
      choices: ["Pick the prettiest chart type", "State the question the chart must answer in one sentence", "Add 3D effects", "Use the default chart in the spreadsheet"],
      answer: 1,
      explanation: "Correct: (b). The question determines the chart type. (a) and (c) are decoration. (d) lets the software choose for you."
    }
  ],
  studyGuide: `
<h3>Module 4 — Charts & Data Visualization: Quick Reference</h3>
<p><strong>Chart picker:</strong> Comparison → bar. Trend over time → line. Part-to-whole (2–3) → pie. Distribution → histogram. Relationship → scatter.</p>
<p><strong>Anchor:</strong> Quarterly sales $40,000, $55,000, $48,000, $62,000 → Q1→Q2 +37.5%, Q2→Q3 −12.7%, Q4 highest. Budget 50/30/20 of $200,000 → $100,000 / $60,000 / $40,000.</p>
<p><strong>Histogram anchor:</strong> Orders 12, 15, 18, 20, 22, 25, 28, 120 → seven in the 0–29 bin, one in the 120–149 bin: strongly right-skewed.</p>
<p><strong>Honesty checklist:</strong> Axis from zero (bars), units labeled, period stated, source named, no 3D distortion.</p>
<p><strong>Watch out:</strong> Pie charts with many slices, line charts for unrelated categories, and truncated axes are the three classic chart lies.</p>
<p><strong>Self-check:</strong> Given any data set and a question, name the chart, sketch it, and run the honesty checklist before showing it to anyone.</p>
`
};
