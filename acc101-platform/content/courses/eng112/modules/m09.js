// eng112 - Module 9: Data, Tables & Charts in Workplace Documents
module.exports = {
  "number": 9,
  "slug": "data-tables-and-charts-in-workplace-documents",
  "title": "Data, Tables & Charts in Workplace Documents",
  "estTime": "3–4 hours",
  "objectives": [
    "Choose between a table and a chart based on what the reader needs to do with the numbers.",
    "Build a table with a clear title, labeled columns, and aligned numbers.",
    "Choose the right chart type: bar, line, or pie — and know when each one lies.",
    "Write an honest chart title and label axes so the reader cannot be misled.",
    "Spot misleading charts: truncated axes, cherry-picked ranges, and missing context."
  ],
  "sections": [
    {
      "heading": "Table or Chart? Ask What the Reader Must Do",
      "html": "<p>Numbers in a document serve the reader, and the reader does one of two things with them: look up an exact value, or see a pattern. A <strong>table</strong> is for looking up: \"What was the delivery time in March?\" The reader finds the row, finds the column, and reads the number. A <strong>chart</strong> is for seeing: \"Are deliveries getting later over the year?\" The reader sees the line climbing and understands in a glance. Choosing wrong wastes the reader's time — a chart forces a reader who needs an exact number to guess it from a bar's height, and a table forces a reader who needs a trend to compare twelve numbers in their head.</p><p>The rule is simple: exact values go in tables, patterns go in charts. A budget with twelve line items is a table. A year's sales by month is a chart. When the reader needs both — the trend and the exact numbers — give both: a chart in the body and the table in an appendix. Never make the reader do arithmetic the document should have done for them.</p><div class=\"callout\"><strong>Key idea:</strong> Tables answer \"how much exactly?\" Charts answer \"what is the pattern?\" Give the reader the form that matches their question.</div>"
    },
    {
      "heading": "Building an Honest Table",
      "html": "<p>A good table has five parts: a number and a title that says what it shows (\"Table 2: Late Deliveries by Cause, March 2026\"), column headings that name each column's contents and units, rows that are easy to follow, numbers aligned on the decimal point so magnitudes can be compared at a glance, and a source line underneath. Keep tables narrow — four to six columns at most — because a wide table forces the reader to turn the page sideways or lose the row. Round numbers to the precision the decision needs: a budget table does not need cents, and a table that shows 12.347% when 12% would do is showing off, not informing.</p><p>Sort the table by what matters. A table of late deliveries sorted alphabetically by cause hides the biggest cause in the middle; sorted by size, the biggest cause is on top and the reader sees it first. Always include a total row where one makes sense, so the reader can check that the parts add up. And never leave a blank cell unexplained — a blank means \"we forgot\" to a reader. Write \"0\" for zero, \"—\" for not applicable, and \"n/a\" only with a note explaining why the data does not exist.</p>"
    },
    {
      "heading": "Choosing the Right Chart",
      "html": "<p>Three chart types cover most workplace needs. A <strong>bar chart</strong> compares categories: deliveries by cause, sales by region, costs by department. A <strong>line chart</strong> shows change over time: deliveries per month across a year. A <strong>pie chart</strong> shows parts of a whole — and should be used rarely, with at most five or six slices, because readers are bad at comparing angles and a pie with twelve slices is unreadable. When in doubt, use a bar chart: bars are the easiest shape for the eye to compare, and a horizontal bar chart is best when the category names are long.</p><p>Every chart needs the same honesty equipment as a table: a number and a title that states the finding, not just the topic (\"Late Deliveries Rose 40% in March,\" not \"Deliveries\"), labeled axes with units, a source, and no decoration that distorts the data. Three-dimensional bars, exploded pie slices, and pictures instead of bars all make the numbers harder to read and easier to misjudge. A chart's job is to make the truth easier to see, not prettier to look at.</p>"
    },
    {
      "heading": "How Charts Mislead — and How to Spot It",
      "html": "<p>Charts can lie while using true numbers, and the tricks are few and learnable. The commonest is the <strong>truncated axis</strong>: a bar chart whose vertical axis starts at 95 instead of 0, making a 3 percent difference look like a doubling. The second is the <strong>cherry-picked range</strong>: a line chart that starts the year after a bad year, so the trend looks like growth when the full picture is flat. The third is the <strong>missing context</strong>: a chart showing a number rising without saying what else rose at the same time — sales rose, but so did prices, so the real story is different. The fourth is the <strong>wrong chart type</strong>: a pie chart used for change over time, or a line chart used for categories, both of which hide the pattern the reader needs.</p><p>The defense is a habit: every time you see a chart, check the axis (does it start at zero?), check the range (what years are shown, and what is left out?), check the source (where did the numbers come from?), and check the title (does it state a finding, or does it hide one?). Apply the same checks to your own charts before you publish them. An honest chart survives inspection; a misleading one survives only until someone looks closely — and someone always looks closely.</p><div class=\"callout\"><strong>Key idea:</strong> A chart can lie with true numbers. Check the axis, the range, the source, and the title — on every chart you read and every chart you make.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Tables are for exact values; charts are for patterns. Give the reader the form that matches their question.</li><li>A table needs a title, labeled columns with units, decimal-aligned numbers, a total row, and a source.</li><li>Bar charts compare categories, line charts show change over time, pie charts show parts of a whole (rarely, five or six slices at most).</li><li>Every chart needs an honest title, labeled axes, and a source — and no decoration that distorts the data.</li><li>Spot the tricks: truncated axes, cherry-picked ranges, missing context, wrong chart type.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> A bar chart whose axis starts at 95 instead of 0, making a tiny difference look enormous. Start bar-chart axes at zero unless you have a stated reason not to.</div><div class=\"callout\"><strong>Common mistake:</strong> A pie chart with twelve slices. Readers cannot compare angles; use a bar chart instead.</div><p><strong>Ready-to-work link:</strong> If you can take a set of numbers, decide table or chart, build it with an honest title and labeled axes, and spot a truncated axis in someone else's chart, you have this module. Module 10 turns to the document that sells you: the résumé.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Table",
      "def": "A grid of rows and columns for looking up exact values."
    },
    {
      "term": "Chart",
      "def": "A visual display of numbers for seeing a pattern, such as a trend or a comparison."
    },
    {
      "term": "Bar chart",
      "def": "A chart using bars to compare categories, such as sales by region."
    },
    {
      "term": "Line chart",
      "def": "A chart using a line to show change over time."
    },
    {
      "term": "Pie chart",
      "def": "A chart using slices to show parts of a whole; best with five or six slices at most."
    },
    {
      "term": "Axis",
      "def": "A line on a chart marking the scale; the vertical axis usually shows the value, the horizontal axis the category or time."
    },
    {
      "term": "Truncated axis",
      "def": "An axis that does not start at zero, which exaggerates small differences."
    },
    {
      "term": "Cherry-picking",
      "def": "Choosing only the data points or the time range that support a claim, and hiding the rest."
    },
    {
      "term": "Source line",
      "def": "The line under a table or chart naming where the numbers came from."
    },
    {
      "term": "Units",
      "def": "The measurement named in a column heading or axis — dollars, hours, percent — so the numbers mean something."
    },
    {
      "term": "Decimal alignment",
      "def": "Lining numbers up on the decimal point in a table so magnitudes can be compared at a glance."
    },
    {
      "term": "Total row",
      "def": "The bottom row of a table showing the sum, so the reader can check that the parts add up."
    },
    {
      "term": "Data visualization",
      "def": "Presenting numbers as charts, tables, or diagrams so the reader can grasp them quickly."
    },
    {
      "term": "Misleading chart",
      "def": "A chart that uses true numbers in a way that creates a false impression, such as a truncated axis."
    }
  ],
  "video": {
    "title": "How to spot a misleading graph",
    "embedUrl": "https://www.youtube.com/embed/E91bGT9BjYk",
    "note": "TED-Ed's Lea Gaslowitz shows how graphs mislead — truncated axes, cherry-picked ranges, missing context — using real examples. As you watch, list each trick she names and check whether any chart you have made uses one.",
    "more": [
      {
        "title": "Information Design for Technical Communicators",
        "url": "https://www.youtube.com/watch?v=wU5NhoINdRs"
      },
      {
        "title": "Document Design and Formatting",
        "url": "https://www.youtube.com/watch?v=KAuXHS9H-OM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A reader needs to know the exact delivery time for each of the last 12 months, and also whether deliveries are getting later overall. What should the document give them, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The reader needs both an exact value and a pattern. Step 2: Give a line chart in the body — it shows the trend at a glance. Step 3: Give the table with the 12 exact monthly numbers in an appendix (or below the chart) for lookup. Step 4: A chart alone forces the reader to guess exact numbers; a table alone forces them to compare 12 numbers in their head. Both together serve both needs.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A table lists late deliveries by cause, sorted alphabetically: \"Driver delay 8, Supplier warehouse 43, Weather 10.\" What is wrong with the sort order, and how should it be fixed?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Alphabetical order hides the biggest cause in the middle. Step 2: Sort by size, largest first, so the reader sees the main cause immediately. Step 3: \"Supplier warehouse 43, Weather 10, Driver delay 8. Total: 61.\" Step 4: Add the total row so the reader can check that the parts add up to 61.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A bar chart shows two bars: Company A at 98% and Company B at 95%, but the vertical axis starts at 90, so A's bar looks three times taller than B's. Explain the trick and how to fix the chart.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The trick is a truncated axis — starting at 90 instead of 0 exaggerates a 3-point difference into a visual tripling. Step 2: Fix it by starting the axis at 0, so the bars show their true proportion. Step 3: If the small difference matters, say it in the title — \"Company A leads by 3 points\" — and let the honest chart show how small that gap really is. Step 4: Never use a truncated axis to make a small difference look big.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A writer wants to show how a company's sales changed from 2021 to 2026. Which chart type fits, and why is a pie chart wrong?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Change over time fits a line chart — the reader sees the trend at a glance. Step 2: A pie chart is wrong because it shows parts of a whole at one moment, not change over time. Step 3: Six pie slices for six years would show six separate wholes and hide the trend entirely. Step 4: The rule: line for time, bar for categories, pie for parts of one whole.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A chart's title is \"Deliveries.\" Rewrite it as an honest title that states the finding, and list the three other things the chart needs.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: \"Deliveries\" names the topic, not the finding. Step 2: Honest title: \"Late Deliveries Rose 40% in March, Driven by the Supplier's Warehouse.\" Step 3: The chart also needs labeled axes with units, a source line, and a sentence in the text saying what the reader should notice. Step 4: A title that states the finding lets the reader know what to look for before they look.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A sales chart shows revenue rising from 2023 to 2025, but prices rose 20% in the same period and the chart does not say so. What is the trick, and what should the writer add?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The trick is missing context — revenue rose, but so did prices, so the real story (units sold) may be flat or falling. Step 2: The writer should add the context: show units sold alongside revenue, or adjust the revenue for price changes. Step 3: A chart that shows a number rising without saying what else rose is misleading even when every number is true. Step 4: Check the context on every chart you read and every chart you make.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A reader needs the exact delivery time for March. The best form is:",
      "choices": [
        "A line chart",
        "A table",
        "A pie chart",
        "A paragraph of text"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Tables are for looking up exact values. (a) is wrong: a line chart shows a trend, and the reader would have to guess the exact number. (c) is wrong: a pie chart shows parts of a whole. (d) is wrong: a paragraph buries the number."
    },
    {
      "q": "A reader needs to see whether deliveries are getting later over the year. The best form is:",
      "choices": [
        "A table of 12 numbers",
        "A line chart",
        "A pie chart with 12 slices",
        "A bulleted list"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A line chart shows change over time at a glance. (a) is wrong: comparing 12 numbers in your head is slow. (c) is wrong: a 12-slice pie is unreadable. (d) is wrong: a list hides the trend."
    },
    {
      "q": "A good table needs:",
      "choices": [
        "As many columns as possible",
        "A title, labeled columns with units, decimal-aligned numbers, and a source",
        "No title, so the reader can decide what it shows",
        "Blank cells wherever data is missing"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Title, labels, units, alignment, and a source make a table checkable. (a) is wrong: wide tables are unreadable — four to six columns at most. (c) is wrong: a table without a title cannot be understood. (d) is wrong: blank cells mean 'we forgot' — write 0 or explain."
    },
    {
      "q": "A bar chart is the right choice for:",
      "choices": [
        "Change over time",
        "Comparing categories, such as sales by region",
        "Parts of a whole with 12 slices",
        "Showing a single number"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Bars compare categories clearly. (a) is wrong: change over time fits a line chart. (c) is wrong: twelve slices make a pie unreadable. (d) is wrong: a single number belongs in a sentence."
    },
    {
      "q": "A pie chart should be used:",
      "choices": [
        "For any data at all",
        "Rarely, with five or six slices at most, to show parts of one whole",
        "For change over time",
        "With as many slices as possible"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Readers are bad at comparing angles, so pies must stay small. (a) is wrong: pies fit only parts of a whole. (c) is wrong: time fits a line chart. (d) is wrong: more slices make a pie less readable."
    },
    {
      "q": "A bar chart whose vertical axis starts at 95 instead of 0:",
      "choices": [
        "Is more accurate",
        "Exaggerates small differences and misleads the reader",
        "Is the standard for all bar charts",
        "Makes the chart easier to read"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A truncated axis makes a 3-point gap look like a doubling. (a) is wrong: it distorts the true proportion. (c) is wrong: bar charts should start at zero. (d) is wrong: it makes the chart harder to judge honestly."
    },
    {
      "q": "Cherry-picking in a chart means:",
      "choices": [
        "Choosing a nice color scheme",
        "Choosing only the data points or time range that support a claim, and hiding the rest",
        "Picking the best chart type",
        "Adding a source line"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Cherry-picking shows the favorable slice and hides the rest. (a) is wrong: color is design, not data selection. (c) is wrong: choosing the right chart type is good practice. (d) is wrong: a source line is honesty, not trickery."
    },
    {
      "q": "When you read any chart, you should check:",
      "choices": [
        "Only the title",
        "The axis, the range, the source, and the title",
        "Only the colors",
        "Only the author's name"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Axis (does it start at zero?), range (what is left out?), source, and title together reveal whether the chart is honest. (a) is wrong: the title alone can mislead. (c) is wrong: colors say nothing about honesty. (d) is wrong: the author's name does not validate the data."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Data, Tables & Charts: Quick Reference</h3><p><strong>Core idea:</strong> Tables answer \"how much exactly?\" Charts answer \"what is the pattern?\" Match the form to the reader's question.</p><p><strong>Table:</strong> Title · labeled columns with units · decimal-aligned numbers · total row · source. Four to six columns at most; sort by size.</p><p><strong>Charts:</strong> Bar = compare categories · Line = change over time · Pie = parts of one whole, five or six slices at most.</p><p><strong>Honesty:</strong> Title states the finding · labeled axes · source · no distorting decoration.</p><p><strong>Tricks:</strong> Truncated axis (start at zero) · cherry-picked range · missing context · wrong chart type.</p><p><strong>Self-check:</strong> Find a chart in the news and check its axis, range, source, and title. Does it survive inspection?</p>\n"
};
