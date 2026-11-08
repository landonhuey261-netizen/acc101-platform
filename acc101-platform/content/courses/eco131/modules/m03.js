module.exports = {
  "number": 3,
  "slug": "spreadsheets-for-economists",
  "title": "Spreadsheets for Economists: Formulas, Tables & Lookups",
  "estTime": "3–4 hours",
  "objectives": [
    "Build a small spreadsheet with labelled columns, one observation per row, and no merged cells.",
    "Write formulas for sums, means, growth rates, and index values that update when data change.",
    "Use absolute references ($) so a formula can be copied down a column correctly.",
    "Use VLOOKUP or XLOOKUP to pull a value from a reference table.",
    "Turn a flat list into a summary with a table or a pivot table."
  ],
  "sections": [
    {
      "heading": "One Observation per Row",
      "html": "<p>A good spreadsheet is boring to look at: one row per observation, one column per variable, a clear header in row 1, and no merged cells. For the lab dataset that means 12 rows — one per month of 2024 — with columns for Month and Unemployment Rate. Anything else (titles, notes, sources) goes above the table or below it, never inside it.</p><p>This layout is what makes formulas work. If January's rate is in B2 and December's is in B13, the mean is =AVERAGE(B2:B13) and the change is =B13-B2. If the numbers are scattered across merged cells and blank rows, every formula becomes a guessing game.</p><div class=\"callout\"><strong>Key idea:</strong> Tidy data rule: rows are observations, columns are variables, and every cell holds one value. Break this rule and every later step gets harder.</div>"
    },
    {
      "heading": "Formulas That Update Themselves",
      "html": "<p>Never type an answer into a spreadsheet — type a formula. If the unemployment rate in January is 3.7% in B2 and in February is 3.9% in B3, the change in percentage points is =B3-B2, which gives 0.2. The percent change is =(B3-B2)/B2, which gives 0.054, or 5.4% when formatted as a percent. If the BLS revises February to 3.8%, both answers update themselves.</p><p>Three formulas carry most economics work: <strong>=SUM</strong> for totals, <strong>=AVERAGE</strong> for means, and <strong>=(new-old)/old</strong> for growth rates. Learn to write them once, copy them down a column, and check one by hand.</p><div class=\"formula\">Growth rate = (New − Old) ÷ Old &nbsp;|&nbsp; Change in points = New − Old</div>"
    },
    {
      "heading": "Absolute References: The $ Sign",
      "html": "<p>Copying a formula down a column is where spreadsheets bite. Suppose the base-year basket cost sits in cell $B$2 and each year's cost is in column C. The index formula =C5/$B$2*100 uses <strong>absolute</strong> references ($B$2) for the base, which never moves when copied, and a <strong>relative</strong> reference (C5) for the year's cost, which moves down with each row.</p><p>Forget the $ signs and the base moves too: row 6 would divide by the wrong cell and every index after the first would be wrong — silently. When a formula must always point at one fixed cell, lock it with $.</p>"
    },
    {
      "heading": "Lookups: VLOOKUP and XLOOKUP",
      "html": "<p>A <strong>lookup</strong> finds a value in a reference table and returns the matching value from another column. Example: a table lists each state and its minimum wage; =XLOOKUP(\"Michigan\", states, wages) returns Michigan's wage. XLOOKUP is the modern function — it searches in any direction and lets you set a message if nothing is found. VLOOKUP is the older one; it only searches to the right and needs an exact-match flag (FALSE) to be safe.</p><p>Lookups matter in economics because reference tables are everywhere: state codes, industry codes, price deflators, and exchange rates. Type a code once, look up the rest — and never retype a table by hand, because retyping is where errors are born.</p><div class=\"callout\"><strong>Key idea:</strong> XLOOKUP(lookup value, lookup column, return column) is the one to learn first. With VLOOKUP, always end the formula with FALSE for an exact match.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Tidy data: one row per observation, one column per variable, header in row 1.</li><li>Type formulas, not answers — then check one by hand.</li><li>Growth rate = (new − old) ÷ old; change in points = new − old. They are different numbers.</li><li>Lock fixed cells with $ so copied formulas stay correct.</li><li>Use XLOOKUP to pull values from reference tables instead of retyping them.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Confusing percentage points with percent. A rise from 3.7% to 4.1% is +0.4 percentage points but +10.8% in percent terms. Say which one you mean.</div><div class=\"callout\"><strong>Common mistake:</strong> Typing a computed answer as a plain number. When the data are revised, a typed answer stays wrong forever; a formula fixes itself.</div>"
    }
  ],
  "keyTerms": [
    {
      "term": "Tidy data",
      "def": "Data arranged with one observation per row, one variable per column, and one value per cell."
    },
    {
      "term": "Formula",
      "def": "A spreadsheet instruction, such as =AVERAGE(B2:B13), that computes a value and updates when inputs change."
    },
    {
      "term": "Relative reference",
      "def": "A cell reference such as B2 that moves when a formula is copied."
    },
    {
      "term": "Absolute reference",
      "def": "A cell reference such as $B$2 that stays fixed when a formula is copied."
    },
    {
      "term": "Growth rate",
      "def": "(New − Old) ÷ Old — the percent change in a value."
    },
    {
      "term": "Percentage point",
      "def": "The simple difference between two percentages, such as 4.1% − 3.7% = 0.4 points."
    },
    {
      "term": "XLOOKUP",
      "def": "A spreadsheet function that finds a value in one column and returns the matching value from another."
    },
    {
      "term": "VLOOKUP",
      "def": "The older lookup function; searches the first column of a table and returns a value to its right."
    },
    {
      "term": "Reference table",
      "def": "A small table of codes and their meanings, such as state codes and minimum wages."
    },
    {
      "term": "Pivot table",
      "def": "A spreadsheet tool that summarises a flat list by grouping rows and computing totals or means."
    },
    {
      "term": "Table",
      "def": "A formatted range with a header row that makes sorting, filtering, and formulas easier."
    },
    {
      "term": "Cell",
      "def": "One box in a spreadsheet, where a row and a column meet."
    },
    {
      "term": "Header row",
      "def": "The first row of a table, naming each column's variable."
    },
    {
      "term": "Observation",
      "def": "One row of tidy data — one month, one state, one person."
    },
    {
      "term": "Variable",
      "def": "One column of tidy data — the thing measured in that column."
    }
  ],
  "video": {
    "title": "How to Use XLOOKUP in Excel (From Beginner to Advanced)",
    "embedUrl": "https://www.youtube.com/embed/A6Mt2LfJfz0",
    "note": "XLOOKUP from beginner to advanced: the modern lookup function, with five worked examples. Follow along in your own spreadsheet and try one lookup on a small table of your own.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> <em>Example data.</em> A shop's monthly sales ($000) are: Jan 120, Feb 135, Mar 128. (a) Write the formula for the total of the three months. (b) Compute it by hand.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: With the values in B2:B4, the formula is =SUM(B2:B4). Step 2: By hand, 120 + 135 + 128 = <strong>383</strong>. Step 3: The formula and the hand check agree — that is the point of checking one by hand.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> <em>Example data.</em> Unemployment was 3.7% in January and 4.1% in December. (a) What is the change in percentage points? (b) What is the percent change? Show both.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Change in points = 4.1 − 3.7 = <strong>0.4 percentage points</strong>. Step 2: Percent change = (4.1 − 3.7) ÷ 3.7 = 0.4 ÷ 3.7 = 0.1081 = <strong>10.8%</strong>. Step 3: Same two numbers, two different meanings — always say which one you mean.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> <em>Example data.</em> A price basket cost $200 in the base year (cell $B$2) and $224 in 2022 (cell C4). Write the index formula for 2022 and compute the index.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The formula is =C4/$B$2*100 — the $ signs lock the base-year cell. Step 2: 224 ÷ 200 = 1.12; 1.12 × 100 = <strong>112.0</strong>. Step 3: The index says prices were 12% above the base year.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A reference table lists three states and their minimum wages: Michigan $12.48, Ohio $10.70, Indiana $7.25 (example wages for practice). Write the XLOOKUP formula that returns Michigan's wage, and give the answer.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: With states in A2:A4 and wages in B2:B4, the formula is =XLOOKUP(\"Michigan\", A2:A4, B2:B4). Step 2: It returns <strong>$12.48</strong>. Step 3: No retyping, no hunting — the table is the single source of truth.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> <em>Example data.</em> Sales ($000) for 12 months total $1,995. (a) Write the mean formula. (b) Compute the mean.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: With the values in B2:B13, the formula is =AVERAGE(B2:B13). Step 2: 1,995 ÷ 12 = <strong>166.25</strong>. Step 3: Mean monthly sales were $166,250 in the example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> You copy the formula =C5/B2*100 down a column, but B2 should have stayed fixed as the base year. (a) What goes wrong? (b) Write the corrected formula.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Without $ signs, B2 becomes B3, B4, and so on as the formula is copied — each row divides by a different, wrong base. Step 2: The corrected formula is =C5/$B$2*100. Step 3: The $ locks the base; only the year's cost moves.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Tidy data means:",
      "choices": [
        "One observation per row, one variable per column",
        "One table per page, in any layout",
        "Merging cells to make titles",
        "Putting notes inside the data range"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Rows are observations, columns are variables. (b) Layout still matters. (c) Merged cells break formulas. (d) Notes belong outside the data range."
    },
    {
      "q": "The growth rate from 120 to 135 is:",
      "choices": [
        "15%",
        "12.5%",
        "11.1%",
        "135%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). (135 − 120) ÷ 120 = 15 ÷ 120 = 12.5%. (a) is the raw change, 15. (c) divides by 135 instead of 120. (d) is the new value as a share of 100, not a growth rate."
    },
    {
      "q": "A rise from 3.7% to 4.1% is:",
      "choices": [
        "0.4 percentage points and 10.8% in percent terms",
        "0.4% in both measures",
        "10.8 percentage points",
        "4.1 percentage points"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Points: 4.1 − 3.7 = 0.4. Percent: 0.4 ÷ 3.7 = 10.8%. (b) confuses the two measures. (c) swaps them. (d) is the December value itself."
    },
    {
      "q": "In =C5/$B$2*100, the $ signs mean:",
      "choices": [
        "The result is in dollars",
        "B2 stays fixed when the formula is copied",
        "C5 stays fixed",
        "The formula is an error"
      ],
      "answer": 1,
      "explanation": "Correct: (b). $ locks the reference. (a) $ in a formula is a lock, not a currency sign. (c) C5 has no $ signs, so it moves. (d) It is a correct, standard formula."
    },
    {
      "q": "XLOOKUP is preferred over VLOOKUP mainly because it:",
      "choices": [
        "Only works on Mondays",
        "Searches in any direction and allows a “not found” message",
        "Is slower",
        "Needs no table"
      ],
      "answer": 1,
      "explanation": "Correct: (b). XLOOKUP is more flexible and safer. (a) is nonsense. (c) It is not slower in any way that matters here. (d) It still needs a lookup table."
    },
    {
      "q": "You should type a formula instead of an answer because:",
      "choices": [
        "Formulas look fancier",
        "A formula updates itself when the data are revised",
        "Answers are not allowed",
        "Formulas are shorter"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A typed answer goes stale when data change; a formula recomputes. (a) Looks do not matter. (c) Answers are fine as outputs of formulas. (d) Formulas are often longer."
    },
    {
      "q": "A pivot table is used to:",
      "choices": [
        "Draw pictures",
        "Summarise a flat list by grouping rows and computing totals or means",
        "Delete duplicates only",
        "Change fonts"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Grouping and summarising is its job. (a) Charts draw pictures. (c) Removing duplicates is a cleaning step. (d) Formatting is separate."
    },
    {
      "q": "With VLOOKUP, you should end the formula with FALSE to:",
      "choices": [
        "Make it faster",
        "Get an exact match instead of an approximate one",
        "Hide errors",
        "Sort the table"
      ],
      "answer": 1,
      "explanation": "Correct: (b). FALSE forces an exact match; without it VLOOKUP may return the nearest value below, silently wrong. (a) Speed is not the issue. (c) Errors still show. (d) VLOOKUP does not sort."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Spreadsheets for Economists: Quick Reference</h3>\n<p><strong>Tidy data:</strong> One row per observation, one column per variable, header in row 1, no merged cells, notes outside the range.</p>\n<div class=\"formula\">Growth rate = (New − Old) ÷ Old &nbsp;|&nbsp; Change in points = New − Old &nbsp;|&nbsp; Index = (Year ÷ Base) × 100</div>\n<p><strong>Formulas:</strong> =SUM(range) · =AVERAGE(range) · lock fixed cells with $ ($B$2) · XLOOKUP(value, lookup column, return column).</p>\n<p><strong>Watch out:</strong> Percentage points ≠ percent. Type formulas, not answers — and check one by hand.</p>\n<p><strong>Self-check:</strong> Build a 12-row monthly table, add a growth-rate column with one formula copied down, and verify the first row by hand.</p>\n"
};
