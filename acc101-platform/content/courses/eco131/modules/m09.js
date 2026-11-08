module.exports = {
  "number": 9,
  "slug": "working-with-real-datasets",
  "title": "Working with Real Datasets: A Guided Project",
  "estTime": "3–4 hours",
  "objectives": [
    "Plan a small guided project: question, data, method, and deliverable, on one page.",
    "Download a real series from FRED, check it, and build a tidy table from it.",
    "Use a pivot table to summarise a dataset by groups and compare the groups.",
    "Combine two series in one chart and explain what the comparison shows — and what it does not.",
    "Write a one-paragraph finding that states the answer, the evidence, and the limit."
  ],
  "sections": [
    {
      "heading": "Planning the Project on One Page",
      "html": "<p>Every guided project starts on one page, before any data are touched. Write four lines: <strong>Question</strong> — one sentence, with a variable and a comparison. <strong>Data</strong> — the series ID, the source, the dates, and the vintage. <strong>Method</strong> — the summaries you will compute (mean, change, index, moving average) and the chart you will draw. <strong>Deliverable</strong> — one chart, one table, and one paragraph.</p><p><em>Example.</em> Question: “Did U.S. unemployment rise in 2024?” Data: FRED UNRATE, BLS, monthly, seasonally adjusted, Jan–Dec 2024. Method: mean, median, range, Jan-to-Dec change, index with Jan = 100, line chart. Deliverable: the chart, the 12-month table, and one paragraph. That plan is the lab for this course.</p><div class=\"callout\"><strong>Key idea:</strong> If the plan does not fit on one page, it is not a plan yet — it is a wish list. Shrink it until it fits.</div>"
    },
    {
      "heading": "From Download to Tidy Table",
      "html": "<p>Download the series as a spreadsheet (CSV or Excel) from FRED, then build the tidy table: one row per month, columns for Month and Rate, header in row 1. Check the download before you trust it: 12 rows for 12 months, no blanks, values in the right range (unemployment rates between 0% and 25%, not 370%), and the units in percent.</p><p>Then compute the summaries in new columns with formulas, not typed answers: the 3-month moving average, the change from January, and the index with January = 100. Each new column is one idea, labelled in its header, so a reader can follow your thinking down the page.</p>"
    },
    {
      "heading": "Summarising by Groups with a Pivot Table",
      "html": "<p>A pivot table turns a long list into a comparison. Put the 12 months of 2024 into two groups — first half (Jan–Jun) and second half (Jul–Dec) — and ask the pivot table for the mean of each group. <em>Example, using the lab's real 2024 UNRATE values.</em> First half: 3.7, 3.9, 3.8, 3.9, 4.0, 4.1 — sum 23.4, mean 23.4 ÷ 6 = <strong>3.9%</strong>. Second half: 4.3, 4.2, 4.1, 4.1, 4.2, 4.1 — sum 25.0, mean 25.0 ÷ 6 = <strong>4.17%</strong>. The second half averaged 0.27 points higher.</p><p>That is the whole point of grouping: one number per group, compared side by side, with the method visible. If a grouping changes the story, say which grouping you used and why.</p>"
    },
    {
      "heading": "Two Series, One Chart — Carefully",
      "html": "<p>Comparing two series is powerful and easy to get wrong. If the two series have different units — say, the unemployment rate in percent and GDP in trillions of dollars — plot them on two axes and label both, or index both to 100 in the same base month so they share a scale. Never plot two different units on one axis and hope the reader notices.</p><p>And remember: two lines moving together is not proof that one caused the other. Unemployment and inflation often move in opposite directions, but that correlation alone does not prove which causes which — or whether a third factor drives both. Correlation is a clue for the next question, not an answer.</p><div class=\"callout\"><strong>Key idea:</strong> Two series, two units: use two labelled axes, or index both to 100. And correlation is a clue, never a proof of cause.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Plan on one page: question, data (ID, source, dates, vintage), method, deliverable.</li><li>Build a tidy table from the download and check it before computing anything.</li><li>Use a pivot table to compare group means — first half vs. second half is a good start.</li><li>Two series need two labelled axes or a shared index base; correlation is not causation.</li><li>End with one paragraph: the answer, the evidence, and the limit.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Downloading data and computing before checking it. One wrong unit or one missing month poisons every number after it.</div><div class=\"callout\"><strong>Common mistake:</strong> Claiming causation from two lines moving together. Say what the chart shows, then say what it cannot prove.</div>"
    }
  ],
  "keyTerms": [
    {
      "term": "Guided project",
      "def": "A small complete analysis: one question, one dataset, one chart, one table, one paragraph."
    },
    {
      "term": "Project plan",
      "def": "A one-page plan naming the question, data, method, and deliverable before work starts."
    },
    {
      "term": "Deliverable",
      "def": "What you hand in: a chart, a table, and a written finding."
    },
    {
      "term": "Tidy table",
      "def": "A table with one observation per row and one variable per column, built from a download."
    },
    {
      "term": "Pivot table",
      "def": "A tool that summarises data by groups, such as the mean for the first half versus the second half of a year."
    },
    {
      "term": "Group mean",
      "def": "The mean of one group of observations, compared with another group's mean."
    },
    {
      "term": "Dual axis",
      "def": "A chart with two vertical axes for two series with different units, each labelled."
    },
    {
      "term": "Correlation",
      "def": "Two variables moving together; a clue, not proof that one causes the other."
    },
    {
      "term": "Causation",
      "def": "One thing causing another; correlation alone never proves it."
    },
    {
      "term": "Finding",
      "def": "A one-paragraph answer stating what you found, the evidence, and the limit."
    },
    {
      "term": "CSV",
      "def": "Comma-separated values — a plain-text file format for downloading data."
    },
    {
      "term": "Vintage",
      "def": "The date a dataset was downloaded; record it so others can reproduce your work."
    },
    {
      "term": "Reproduce",
      "def": "To repeat an analysis from the same data and method and get the same answer."
    }
  ],
  "video": {
    "title": "How to Analyze Your Data with Excel's Pivot Tables (101-Level Beginner Tutorial & Practice File)",
    "embedUrl": "https://www.youtube.com/embed/Zn_HTOFPrPA",
    "note": "A beginner pivot-table tutorial: build a pivot table from a flat dataset, group by category, and compare group means. Follow along with the 12-month unemployment table from this course.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Write a one-page project plan (four lines: Question, Data, Method, Deliverable) for the question “Did U.S. unemployment rise in 2024?”</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Question — “Did the U.S. unemployment rate rise between January and December 2024?” Step 2: Data — FRED UNRATE, BLS via FRED, monthly, seasonally adjusted, Jan–Dec 2024. Step 3: Method — mean, median, range, Jan-to-Dec change, index with Jan = 100, line chart. Step 4: Deliverable — the 12-month table, the line chart, and one paragraph with the answer and the source.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> <em>Real lab data.</em> First-half 2024 UNRATE values: 3.7, 3.9, 3.8, 3.9, 4.0, 4.1. (a) Compute the sum. (b) Compute the mean.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Sum = 3.7 + 3.9 + 3.8 + 3.9 + 4.0 + 4.1 = <strong>23.4</strong>. Step 2: Mean = 23.4 ÷ 6 = <strong>3.9%</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> <em>Real lab data.</em> Second-half 2024 UNRATE values: 4.3, 4.2, 4.1, 4.1, 4.2, 4.1. (a) Compute the sum and the mean. (b) How much higher was the second-half mean than the first-half mean (3.9%)?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Sum = 4.3 + 4.2 + 4.1 + 4.1 + 4.2 + 4.1 = <strong>25.0</strong>. Mean = 25.0 ÷ 6 = <strong>4.17%</strong> (rounded). Step 2: Difference = 4.17 − 3.9 = <strong>0.27 percentage points</strong> higher in the second half.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> You want to chart the unemployment rate (%) and GDP ($ trillions) together. (a) What is the problem with one shared axis? (b) Name two honest fixes.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: One axis cannot show percent and trillions of dollars at once — one series would look flat. Step 2: Fix 1 — use a <strong>dual axis</strong>, one labelled axis per series. Fix 2 — <strong>index both series to 100</strong> in the same base month so they share a scale.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A chart shows unemployment falling while house prices rise, and a student writes “Falling unemployment caused house prices to rise.” (a) What is wrong with that sentence? (b) Rewrite it honestly.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Two lines moving together show <strong>correlation</strong>, not causation — a third factor (such as low interest rates) could drive both. Step 2: Honest version: “In this period, unemployment fell while house prices rose. The chart shows they moved together; it does not show that one caused the other.”</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> You download UNRATE and find only 11 rows for 2024 — December is missing. (a) What should you do? (b) What should you NOT do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Do check the source — the month may not be published yet — and say in your write-up that the data run Jan–Nov only. Step 2: Do NOT invent a December value, copy November's, or fill it with zero; any of those would fake the answer to “did it rise in 2024?”</p>"
    }
  ],
  "quiz": [
    {
      "q": "A good project plan fits on one page and names:",
      "choices": [
        "Question, data, method, deliverable",
        "The software version only",
        "Every formula you might use",
        "The grade you want"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Those four lines are the whole plan. (b) Software is a detail. (c) Formulas come after the plan. (d) The grade is not part of the analysis."
    },
    {
      "q": "First-half 2024 UNRATE values sum to 23.4 over 6 months. The mean is:",
      "choices": [
        "3.7%",
        "3.9%",
        "4.1%",
        "23.4%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 23.4 ÷ 6 = 3.9. (a) is January's value. (c) is June's value. (d) is the sum, not the mean."
    },
    {
      "q": "Second-half mean 4.17% minus first-half mean 3.9% is:",
      "choices": [
        "0.27 points",
        "0.17 points",
        "4.17 points",
        "8.07 points"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 4.17 − 3.9 = 0.27. (b) is a subtraction error. (c) is the second-half mean itself. (d) adds the two means."
    },
    {
      "q": "When charting two series with different units, an honest fix is to:",
      "choices": [
        "Plot both on one unlabelled axis",
        "Use a dual axis with both axes labelled, or index both to 100",
        "Delete the smaller series",
        "Multiply one series until it fits"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Both fixes keep the units visible and honest. (a) hides the unit difference. (c) throws away data. (d) distorts the values."
    },
    {
      "q": "Two lines moving together prove:",
      "choices": [
        "Causation",
        "Correlation — a clue, not proof of cause",
        "Nothing at all",
        "That the data are wrong"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Correlation is a clue for the next question. (a) is the classic error. (c) is too strong — co-movement is real information. (d) is false."
    },
    {
      "q": "After downloading a series, the FIRST thing to do is:",
      "choices": [
        "Compute the mean",
        "Check it: right number of rows, no blanks, sensible range and units",
        "Make a chart",
        "Write the conclusion"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Check before computing — one bad download poisons everything after it. (a) and (c) come after the check. (d) comes last."
    },
    {
      "q": "A December value is missing from your download. You should:",
      "choices": [
        "Invent a plausible value",
        "Copy November's value",
        "Say the data run Jan–Nov only and check whether December is published yet",
        "Fill it with zero"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Honest disclosure beats invented data. (a), (b), and (d) all fake a value."
    },
    {
      "q": "A good one-paragraph finding states:",
      "choices": [
        "The answer, the evidence, and the limit",
        "Only the answer",
        "Only the chart title",
        "The software used"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Answer + evidence + limit is a complete finding. (b) An answer without evidence cannot be checked. (c) A title is not a finding. (d) Software is a method note, not the finding."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Working with Real Datasets: Quick Reference</h3>\n<p><strong>Plan (one page):</strong> Question (variable + comparison) · Data (series ID, source, dates, vintage) · Method (summaries + chart) · Deliverable (table + chart + paragraph).</p>\n<p><strong>Check the download:</strong> Right row count, no blanks, sensible range, correct units — before computing anything.</p>\n<p><strong>Group comparison (2024 UNRATE):</strong> First half mean 3.9% (sum 23.4) · Second half mean 4.17% (sum 25.0) · Difference 0.27 points.</p>\n<p><strong>Two series:</strong> Dual labelled axes, or index both to 100. Correlation is a clue, never proof of cause.</p>\n<p><strong>Self-check:</strong> Write a one-page plan for a question of your own, then find the series ID for it on FRED.</p>\n"
};
