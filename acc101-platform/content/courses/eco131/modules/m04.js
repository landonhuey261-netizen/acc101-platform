module.exports = {
  "number": 4,
  "slug": "cleaning-data",
  "title": "Cleaning Data: Messy Numbers, Honest Numbers",
  "estTime": "3–4 hours",
  "objectives": [
    "List the five most common kinds of mess in economic data and how to spot each one.",
    "Decide, for a missing value, whether to leave it blank, carry a value forward, or drop the row — and say why.",
    "Standardise units, dates, and categories so like is compared with like.",
    "Detect duplicates and outliers and handle each one without hiding evidence.",
    "Keep a cleaning log so every change you made can be checked by someone else."
  ],
  "sections": [
    {
      "heading": "The Five Kinds of Mess",
      "html": "<p>Real data arrive messy. The five messes you will meet most are: <strong>missing values</strong> (a blank month, a survey non-response); <strong>wrong units</strong> (dollars mixed with thousands of dollars, or a rate typed as 4.1 instead of 0.041); <strong>inconsistent categories</strong> (“MI”, “Michigan”, and “michigan” as three different states); <strong>duplicates</strong> (the same month entered twice); and <strong>outliers</strong> (a value far from the rest, which may be a typo — or may be real, like a pandemic month).</p><p>Your first job is not to fix anything. It is to <em>find</em> the mess: sort each column, look at the smallest and largest values, count the blanks, and check that every category is spelled one way.</p><div class=\"callout\"><strong>Key idea:</strong> Sort, count, and eyeball before you fix. Most cleaning errors come from fixing a problem you never actually looked at.</div>"
    },
    {
      "heading": "Missing Values: Three Honest Choices",
      "html": "<p>A blank cell is a fact: the value is unknown. You have three honest choices. <strong>Leave it blank</strong> — best when you are only describing what you have, and you say how many values are missing. <strong>Carry forward</strong> the last value — sometimes right for a slow-moving series, but it invents data, so say so. <strong>Drop the row</strong> — acceptable when a few rows are missing and dropping them cannot bias the result much.</p><p>What you must never do is silently type in a guess, or fill blanks with zero. Zero is a value, not an absence: filling a missing unemployment rate with 0% would drag the mean down and lie to every reader.</p>"
    },
    {
      "heading": "Units, Dates, and Categories",
      "html": "<p>Standardise before you compare. If one column is in dollars and another in thousands of dollars, convert one of them — and write the conversion in your log. Dates are the classic trap: 03/04/2024 means 3 April in most of the world and March 4 in the United States, so store dates as real dates (YYYY-MM-DD) and let the spreadsheet format them.</p><p>Categories need one spelling each. Use Find &amp; Replace to turn “MI”, “Michigan”, and “michigan” into one value, and check with a pivot table that each category now appears once. A category spelled two ways is counted as two categories.</p>"
    },
    {
      "heading": "Duplicates and Outliers",
      "html": "<p>Duplicates are usually errors: the same month imported twice doubles its weight in the mean. Use Remove Duplicates on the columns that should be unique together (month + series), and keep a copy of the raw file so you can prove what you removed.</p><p>Outliers need judgement, not deletion. A value of 14.8% unemployment in April 2020 looks like a typo — but it is real: the pandemic shutdown. A value of 41% in a normal month is almost certainly a misplaced decimal. Rule: investigate first, delete only with a written reason, and never delete a value just because it spoils a neat story.</p><div class=\"callout\"><strong>Key idea:</strong> An outlier is a question, not an error. Ask “what happened in that month?” before you touch it.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Find the mess first: sort, count blanks, check ranges and spellings.</li><li>Missing values: leave blank, carry forward, or drop — and always say which you did.</li><li>Standardise units, dates (YYYY-MM-DD), and category spellings before comparing.</li><li>Duplicates: remove with a reason. Outliers: investigate first, delete only with a written reason.</li><li>Keep a cleaning log: every change, its reason, and the date.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Filling blanks with zero. Zero is a measurement; a blank is an absence. They are not interchangeable.</div><div class=\"callout\"><strong>Common mistake:</strong> Cleaning the only copy of the data. Always keep the raw file untouched and clean a copy — otherwise you can never prove what changed.</div>"
    }
  ],
  "keyTerms": [
    {
      "term": "Missing value",
      "def": "A blank cell: the value is unknown, not zero."
    },
    {
      "term": "Cleaning log",
      "def": "A written record of every change made to a dataset, with the reason and the date."
    },
    {
      "term": "Raw file",
      "def": "The untouched original copy of a dataset, kept so changes can be checked."
    },
    {
      "term": "Duplicate",
      "def": "The same observation entered twice, which double-counts it."
    },
    {
      "term": "Outlier",
      "def": "A value far from the rest of the data — possibly an error, possibly real."
    },
    {
      "term": "Standardise",
      "def": "Convert values to one consistent unit, format, or spelling before comparing."
    },
    {
      "term": "Category",
      "def": "A text label that groups observations, such as a state name or an industry."
    },
    {
      "term": "Unit",
      "def": "What a number is measured in; mixing units is a common cleaning error."
    },
    {
      "term": "Carry forward",
      "def": "Filling a missing value with the previous value — an invented value that must be disclosed."
    },
    {
      "term": "Revision",
      "def": "A later correction to published data by the agency that produced it."
    },
    {
      "term": "Find & Replace",
      "def": "A spreadsheet tool for fixing inconsistent spellings in bulk."
    },
    {
      "term": "Remove Duplicates",
      "def": "A spreadsheet tool that deletes repeated rows based on chosen columns."
    },
    {
      "term": "Range check",
      "def": "Looking at the smallest and largest values in a column to spot impossible values."
    },
    {
      "term": "Blank",
      "def": "An empty cell. In analysis it means “unknown,” and most functions ignore it."
    }
  ],
  "video": {
    "title": "10 Excel Data Cleaning Techniques You NEED Before Analyzing Data",
    "embedUrl": "https://www.youtube.com/embed/AQ-GBVyuAX4",
    "note": "Ten Excel data-cleaning techniques on a messy 20-row sales dataset: duplicates, text case, trailing spaces, numbers stored as text, blanks, and dates. Try each technique on a copy of your own practice file.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A column of monthly unemployment rates reads: 3.7, 3.9, blank, 3.9, 4.0. (a) What is the mean of the four known values? (b) What would the mean become if you wrongly filled the blank with 0? Show both.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Known values sum to 3.7 + 3.9 + 3.9 + 4.0 = 15.5; mean = 15.5 ÷ 4 = <strong>3.875%</strong>. Step 2: Filling with 0 gives a sum of 15.5 and five values, so the mean is 15.5 ÷ 5 = <strong>3.1%</strong>. Step 3: The zero drags the mean down by 0.775 points — a lie created by the fill, not by the data.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A dataset lists states as “MI”, “Michigan”, “michigan”, and “OH”. (a) How many categories will a pivot table count? (b) What should you do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A pivot table counts <strong>four</strong> categories — three spellings of Michigan plus Ohio. Step 2: Use Find &amp; Replace to standardise all three spellings to “Michigan”. Step 3: Re-check with a pivot table: it should now show two categories.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> <em>Example.</em> A sales file shows one month at $41,000 when every other month is $3,000–$5,000. (a) What is the most likely explanation? (b) What do you do first?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The most likely explanation is a typo — an extra zero, or a value entered in dollars instead of thousands of dollars. Step 2: First, investigate: check the source document for that month before changing anything. Step 3: Only correct it with a written reason in the cleaning log; never delete it silently.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A date column mixes “03/04/2024” (meant as 3 April) with “2024-04-03”. (a) Why is this dangerous? (b) What is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: “03/04/2024” is read as March 4 in U.S. format and 3 April elsewhere — the same text means two different dates. Step 2: The fix is to convert every date to real dates in YYYY-MM-DD format (2024-04-03) and let the spreadsheet format the display. Step 3: Record the conversion in the cleaning log.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> You find the month “2024-06” entered twice with the same rate, 4.1%. (a) What is the problem? (b) What do you do, and what do you keep?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The duplicate double-counts June in any mean or total. Step 2: Use Remove Duplicates on the month column, keeping one copy. Step 3: Keep the untouched raw file and note the removal in the cleaning log, so anyone can verify it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Write three lines of a cleaning log for this change: “Converted the wage column from dollars to thousands of dollars on 8 Nov 2026.” Include the reason and the check you ran.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Change: “Divided the wage column by 1,000; values now in thousands of dollars.” Step 2: Reason: “The source file mixed dollars and thousands of dollars; the header said $000.” Step 3: Check: “Range check after conversion: smallest 12.5, largest 48.2 (thousands), matching the source table; raw file untouched.”</p>"
    }
  ],
  "quiz": [
    {
      "q": "The FIRST step in cleaning data is to:",
      "choices": [
        "Delete all blanks",
        "Find the mess — sort, count blanks, check ranges and spellings",
        "Fill blanks with the mean",
        "Make a chart"
      ],
      "answer": 1,
      "explanation": "Correct: (b). You must see the problems before fixing them. (a) Deleting first destroys evidence. (c) Filling first invents data. (d) Charting messy data just charts the mess."
    },
    {
      "q": "Filling a missing unemployment rate with 0% is wrong because:",
      "choices": [
        "Zero is hard to type",
        "Zero is a value, not an absence — it drags the mean down",
        "Blanks are prettier",
        "The spreadsheet forbids it"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 0% is a real measurement of no unemployment, not “unknown.” (a) Typing is not the issue. (c) Looks do not matter. (d) The spreadsheet allows it — that is the danger."
    },
    {
      "q": "“MI”, “Michigan”, and “michigan” in one column will be counted as:",
      "choices": [
        "One category",
        "Two categories",
        "Three categories",
        "No categories"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A pivot table treats each spelling as a different category. (a) is what you want after standardising. (b) miscounts. (d) They are counted, wrongly."
    },
    {
      "q": "The safest way to store dates is:",
      "choices": [
        "As text like 03/04/2024",
        "As real dates in YYYY-MM-DD format",
        "As month names only",
        "As numbers like 03042024"
      ],
      "answer": 1,
      "explanation": "Correct: (b). YYYY-MM-DD is unambiguous everywhere. (a) 03/04 means different dates in different countries. (c) Month names lose the year and day. (d) Plain numbers are not dates to a spreadsheet."
    },
    {
      "q": "You find a duplicate month in your data. You should:",
      "choices": [
        "Keep both copies to be safe",
        "Remove one copy and note it in the cleaning log",
        "Delete the whole dataset",
        "Change the value to zero"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Remove the duplicate, keep the raw file, and log it. (a) Double-counts the month. (c) Destroys good data. (d) Invents a false value."
    },
    {
      "q": "An outlier should be:",
      "choices": [
        "Deleted immediately",
        "Investigated first — it may be real, like a pandemic month",
        "Ignored in every calculation",
        "Replaced with the mean"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Outliers are questions first. (a) Deleting real data is dishonest. (c) Ignoring without a reason hides evidence. (d) Replacing invents data."
    },
    {
      "q": "A cleaning log is important because:",
      "choices": [
        "It makes the file bigger",
        "It lets someone else check every change you made, with its reason",
        "It is required by law",
        "It replaces the raw file"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Reproducibility is the point. (a) Size is irrelevant. (c) No law requires it here. (d) The raw file must be kept untouched alongside the log."
    },
    {
      "q": "Before cleaning, you should keep:",
      "choices": [
        "Only the cleaned copy",
        "The raw file untouched, and clean a copy",
        "A screenshot of the mess",
        "Nothing — cleaning is final"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The untouched raw file is your proof. (a) Leaves no way to check changes. (c) A screenshot is not data. (d) Cleaning must always be reversible."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Cleaning Data: Quick Reference</h3>\n<p><strong>Five messes:</strong> missing values · wrong units · inconsistent categories · duplicates · outliers.</p>\n<p><strong>Missing values:</strong> Leave blank, carry forward, or drop the row — always say which. Never fill with zero.</p>\n<p><strong>Standardise:</strong> One unit, dates as YYYY-MM-DD, one spelling per category (check with a pivot table).</p>\n<p><strong>Duplicates:</strong> Remove one copy, log it. <strong>Outliers:</strong> Investigate first; delete only with a written reason.</p>\n<p><strong>Golden rule:</strong> Keep the raw file untouched, clean a copy, and log every change with its reason and date.</p>\n<p><strong>Self-check:</strong> Take any small table, sort each column, and list every problem you find before fixing any of them.</p>\n"
};
