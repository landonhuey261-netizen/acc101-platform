module.exports = {
  "number": 5,
  "slug": "visualization-charts-that-tell-the-truth",
  "title": "Visualization: Charts That Tell the Truth",
  "estTime": "3–4 hours",
  "objectives": [
    "Choose the right chart for the data: line for time, bar for categories, scatter for relationships.",
    "Read a chart in order: title, axes, scale, source — before trusting its message.",
    "Spot the three classic tricks: truncated axes, cherry-picked time ranges, and misleading pictograms.",
    "Build a clean line chart of a time series with labelled axes and a source line.",
    "Explain why a chart that is technically accurate can still mislead."
  ],
  "sections": [
    {
      "heading": "Choosing the Right Chart",
      "html": "<p>Chart choice is a decision about what you want the reader to see. <strong>Line charts</strong> show change over time — the unemployment rate month by month. <strong>Bar charts</strong> compare categories — unemployment by state, or sales by product. <strong>Scatter plots</strong> show a relationship between two variables — does higher education go with higher pay? <strong>Pie charts</strong> show parts of a whole, and only work with a few slices that add to 100%.</p><p>When in doubt, use a line for time and a bar for categories. Those two cover most economics work, and readers understand them instantly.</p><div class=\"callout\"><strong>Key idea:</strong> Match the chart to the question: time → line, categories → bar, relationship → scatter, parts of a whole → pie.</div>"
    },
    {
      "heading": "Reading a Chart in Order",
      "html": "<p>Read a chart the way you would read a contract: title first (what is shown?), then the axes (what is measured, in what units?), then the scale (where does each axis start?), then the source (who produced the numbers?). Only then look at the shape.</p><p>The scale is where most tricks hide. A bar chart whose vertical axis starts at 45 instead of 0 makes a 48-versus-52 difference look like a landslide: the bars' heights above 45 are 3 and 7, a ratio of 2.33, while the real values differ by only 52 ÷ 48 = 1.08, or 8%. Always check where the axis starts.</p>"
    },
    {
      "heading": "Three Classic Tricks",
      "html": "<p><strong>1. Truncated axes:</strong> starting a bar chart above zero exaggerates small differences. <strong>2. Cherry-picked ranges:</strong> showing only the months that support a claim — a series that fell all year looks like it rose if you show only its best three months. <strong>3. Misleading pictograms:</strong> doubling a picture's height to show a doubled value quadruples its area, so the eye sees four times the change.</p><p>None of these tricks invents a number. Every value can be real and the chart can still lie. That is why Module 11 returns to this: honest charts are an ethics issue, not just a design issue.</p>"
    },
    {
      "heading": "Building a Clean Line Chart",
      "html": "<p>Build it step by step. Put time on the horizontal axis and the value on the vertical axis, starting at a sensible zero or a clearly labelled minimum. Label both axes with units (“Unemployment rate, %”). Give the chart a title that states the finding, not just the topic: “U.S. unemployment rose from 3.7% to 4.1% in 2024” beats “Unemployment.” Add a source line underneath: “Source: BLS via FRED, UNRATE, seasonally adjusted.”</p><p>Then test it: cover the title and ask a friend what the chart says. If they cannot tell you in one sentence, the chart needs work.</p><div class=\"callout\"><strong>Key idea:</strong> A chart's title should state the finding. “Unemployment, 2024” is a label; “Unemployment rose from 3.7% to 4.1% in 2024” is a message.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Time → line, categories → bar, relationship → scatter, parts of a whole → pie.</li><li>Read title, axes, scale, source — in that order — before trusting a chart.</li><li>Truncated axes, cherry-picked ranges, and misleading pictograms can make true numbers lie.</li><li>Label axes with units, start bars at zero, and put the source under the chart.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Using a pie chart for a time series. A pie shows parts of one whole at one moment; it cannot show change over time.</div><div class=\"callout\"><strong>Common mistake:</strong> Starting a bar chart above zero without saying so. If you must truncate an axis, say so in the title — or better, do not truncate it.</div>"
    }
  ],
  "keyTerms": [
    {
      "term": "Line chart",
      "def": "A chart that connects values over time with a line; the standard chart for a time series."
    },
    {
      "term": "Bar chart",
      "def": "A chart that compares categories with bars; bars must start at zero."
    },
    {
      "term": "Scatter plot",
      "def": "A chart with one variable on each axis, showing the relationship between two variables."
    },
    {
      "term": "Pie chart",
      "def": "A chart showing parts of a whole as slices; only for a few slices that add to 100%."
    },
    {
      "term": "Truncated axis",
      "def": "An axis that starts above zero, exaggerating small differences in a bar chart."
    },
    {
      "term": "Cherry-picking",
      "def": "Showing only the time range or cases that support a claim, hiding the rest."
    },
    {
      "term": "Pictogram",
      "def": "A chart that uses pictures instead of bars; scaling pictures misleads the eye."
    },
    {
      "term": "Axis",
      "def": "The horizontal or vertical line of a chart, labelled with the variable and its units."
    },
    {
      "term": "Scale",
      "def": "The range and spacing of numbers along an axis."
    },
    {
      "term": "Source line",
      "def": "A note under a chart naming who produced the data and when."
    },
    {
      "term": "Time series",
      "def": "Data recorded in time order, such as monthly unemployment rates."
    },
    {
      "term": "Category",
      "def": "A group being compared, such as a state or a product."
    },
    {
      "term": "Proportional ink",
      "def": "The rule that the amount of ink in a chart should match the size of the numbers it shows."
    },
    {
      "term": "Legend",
      "def": "The key explaining what each colour or symbol in a chart means."
    }
  ],
  "video": {
    "title": "Charts Are Like Pasta - Data Visualization Part 1: Crash Course Statistics #5",
    "embedUrl": "https://www.youtube.com/embed/hEWY6kkBdpo",
    "note": "Crash Course Statistics on data visualisation: choosing charts, and how the wrong chart misleads. Compare its examples with the truncated-axis example in this module.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> You want to show (a) unemployment month by month in 2024, (b) unemployment by state, (c) the relationship between education and pay. Name the right chart for each and say why.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) <strong>Line chart</strong> — the data are a time series. Step 2: (b) <strong>Bar chart</strong> — states are categories to compare. Step 3: (c) <strong>Scatter plot</strong> — two variables, looking for a relationship.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A bar chart shows two values, 48 and 52, with the vertical axis starting at 45. (a) What is the ratio of the bars' heights above 45? (b) What is the ratio of the real values? (c) What does the chart make the difference look like?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Heights above 45 are 48 − 45 = 3 and 52 − 45 = 7; ratio 7 ÷ 3 = <strong>2.33</strong>. Step 2: Real values ratio is 52 ÷ 48 = <strong>1.08</strong>. Step 3: The chart makes a small 8% difference look more than twice as big — a truncated-axis trick.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A chart's title is “Unemployment.” Rewrite it as a finding, using these <em>example</em> facts: the rate rose from 3.7% in January to 4.1% in December 2024.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A finding states what happened, not just the topic. Step 2: “U.S. unemployment rose from 3.7% to 4.1% during 2024.” Step 3: A reader who sees only the title now knows the message.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A politician shows a chart of unemployment for March–May only, when it fell, and says “unemployment is falling.” The full year shows it rising overall. What trick is this, and what is the honest fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: This is <strong>cherry-picking</strong> — showing only the range that supports the claim. Step 2: The honest fix is to show the full year, or to say plainly “unemployment fell in March–May, but rose over the full year.”</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A pictogram uses a money-bag picture to show spending. Spending doubles, so the picture is drawn twice as tall and twice as wide. (a) How many times bigger is its area? (b) Why is that misleading?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Area scales with height × width, so 2 × 2 = <strong>4 times</strong> the area. Step 2: The eye reads area, so a doubling looks like a quadrupling. Step 3: Pictograms should scale in one dimension only — or better, use bars.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> List the four things to check when reading a chart, in order, and write one question to ask about each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Title — “What is this chart claiming?” Step 2: Axes — “What is measured, in what units?” Step 3: Scale — “Where does each axis start, and are the gaps equal?” Step 4: Source — “Who produced these numbers, and when?”</p>"
    }
  ],
  "quiz": [
    {
      "q": "The right chart for a time series is a:",
      "choices": [
        "Pie chart",
        "Bar chart",
        "Line chart",
        "Pictogram"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Lines show change over time. (a) Pies show parts of one whole. (b) Bars compare categories. (d) Pictograms mislead the eye."
    },
    {
      "q": "The right chart for comparing categories is a:",
      "choices": [
        "Line chart",
        "Scatter plot",
        "Bar chart",
        "Histogram only"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Bars compare categories side by side. (a) Lines are for time. (b) Scatters show relationships between two variables. (d) A histogram is a special bar chart for distributions, not the general answer."
    },
    {
      "q": "A bar chart with values 48 and 52 and an axis starting at 45 makes the difference look:",
      "choices": [
        "8% — the true difference",
        "More than twice as big",
        "Smaller than it is",
        "Exactly right"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Bar heights above 45 are 3 and 7, a ratio of 2.33, while the values differ by only 8%. (a) is the true difference, hidden by the trick. (c) is the opposite effect. (d) is false — the axis is truncated."
    },
    {
      "q": "Showing only the three best months of a year is called:",
      "choices": [
        "Seasonal adjustment",
        "Cherry-picking",
        "Indexing",
        "Smoothing"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Cherry-picking hides the rest of the data. (a) Seasonal adjustment removes regular patterns properly. (c) Indexing rescales to a base year. (d) Smoothing averages out noise."
    },
    {
      "q": "A pie chart should be used when:",
      "choices": [
        "Showing change over time",
        "Comparing ten categories",
        "Showing parts of one whole with a few slices",
        "Showing a relationship between two variables"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Pies show parts of a whole. (a) needs a line chart. (b) Ten slices are unreadable. (d) needs a scatter plot."
    },
    {
      "q": "When reading a chart, you should check FIRST:",
      "choices": [
        "The colours",
        "The title",
        "The source line",
        "The legend"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The title states what is shown. (a) Colours are decoration. (c) The source matters, but after the title and axes. (d) The legend explains symbols, not the claim."
    },
    {
      "q": "Doubling both the height and width of a pictogram makes its area:",
      "choices": [
        "Twice as big",
        "Four times as big",
        "The same",
        "Half as big"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Area = height × width, so 2 × 2 = 4. (a) is true only if one dimension doubles. (c) and (d) are wrong."
    },
    {
      "q": "A good chart title should:",
      "choices": [
        "State the finding, not just the topic",
        "Be as short as possible, with no numbers",
        "Hide the result so readers look at the chart",
        "List the source"
      ],
      "answer": 0,
      "explanation": "Correct: (a). “Unemployment rose from 3.7% to 4.1%” tells the message. (b) Short titles that say nothing waste the best line. (c) Hiding the result defeats the chart. (d) The source goes in the source line, not the title."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Visualization: Quick Reference</h3>\n<p><strong>Chart choice:</strong> Time → line · Categories → bar · Relationship → scatter · Parts of a whole (few slices) → pie.</p>\n<p><strong>Read in order:</strong> Title → axes (variable + units) → scale (where does it start?) → source.</p>\n<p><strong>Three tricks:</strong> Truncated axes (bars must start at zero) · cherry-picked ranges · pictograms scaled in two dimensions (area grows 4× when a value doubles).</p>\n<p><strong>Build clean:</strong> Label axes with units, title states the finding, source line underneath.</p>\n<p><strong>Self-check:</strong> Find any chart online and check its title, axes, scale, and source — write down one thing it does well and one thing it hides.</p>\n"
};
