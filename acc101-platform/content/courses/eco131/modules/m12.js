module.exports = {
  "number": 12,
  "slug": "course-review-raw-data-to-insight",
  "title": "Course Review: From Raw Data to Insight",
  "estTime": "3–4 hours",
  "objectives": [
    "Walk the full workflow on a new question, from asking to presenting, without prompts.",
    "Recompute the course's key numbers — mean, growth, index, moving average — from the lab dataset.",
    "Explain how each module's skill fits into the workflow.",
    "Identify the most common error at each workflow step and how to avoid it.",
    "Plan your next step: which skill to practise first, and on what dataset."
  ],
  "sections": [
    {
      "heading": "The Whole Workflow, End to End",
      "html": "<p>Take a new question and walk it through. <strong>Ask:</strong> “Did U.S. unemployment rise in 2024?” — variable: UNRATE; comparison: January vs. December. <strong>Get:</strong> FRED UNRATE, BLS, monthly, seasonally adjusted. <strong>Clean:</strong> 12 rows, no blanks, percent units, one spelling of each month. <strong>Analyse:</strong> mean 4.03%, median 4.1%, range 0.6 points, Jan-to-Dec change +0.4 points (+10.8%), index Dec = 110.8 with Jan = 100, second-half mean 4.17% vs. first-half 3.9%. <strong>Present:</strong> a line chart titled “U.S. unemployment rose from 3.7% to 4.1% during 2024,” with the source line and one honest paragraph.</p><p>That is the course in one paragraph. Every module was one step of that journey.</p><div class=\"callout\"><strong>Key idea:</strong> The whole course in one line: ask a sharp question, get trusted data, clean it honestly, summarise it correctly, and present it plainly.</div>"
    },
    {
      "heading": "The Numbers You Should Be Able to Recompute",
      "html": "<p>By now these should be reflexes. <strong>Mean:</strong> sum ÷ count — the 2024 UNRATE values sum to 48.4 over 12 months, so the mean is 48.4 ÷ 12 = <strong>4.03%</strong>. <strong>Growth:</strong> (new − old) ÷ old — (4.1 − 3.7) ÷ 3.7 = <strong>10.8%</strong>. <strong>Index:</strong> (year ÷ base) × 100 — December: (4.1 ÷ 3.7) × 100 = <strong>110.8</strong>. <strong>Moving average:</strong> (3.7 + 3.9 + 3.8) ÷ 3 = <strong>3.8</strong>. <strong>Real value:</strong> (nominal ÷ index) × 100.</p><p>If any of those feels shaky, go back to its module and redo the assignments by hand. Fluency here is what the final exam tests.</p>"
    },
    {
      "heading": "Where Each Module Fits",
      "html": "<p>Module 1 gave you the workflow and the question. Module 2 gave you the sources. Module 3 gave you the spreadsheet. Module 4 gave you clean data. Module 5 gave you honest charts. Module 6 gave you summaries. Module 7 gave you indexes and inflation. Module 8 gave you trends and seasons. Module 9 put it together in a project. Module 10 taught you to present it. Module 11 taught you to keep it honest.</p><p>No step is optional. A brilliant chart of dirty data is a polished error; a perfect analysis presented badly is a secret. The workflow only works as a whole.</p>"
    },
    {
      "heading": "The Most Common Error at Each Step",
      "html": "<p><strong>Ask:</strong> a vague question with no variable. Fix: name the variable and the comparison. <strong>Get:</strong> the wrong series or the wrong version (unadjusted vs. adjusted). Fix: read the series page. <strong>Clean:</strong> filling blanks with zero. Fix: leave them blank and say so. <strong>Analyse:</strong> confusing points with percent. Fix: say which one you mean. <strong>Present:</strong> a title that states the topic, not the finding. Fix: state the finding.</p><p>Print that list and tape it to your desk. It will save you more often than any formula.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Full workflow: ask, get, clean, analyse, present — with the 2024 UNRATE numbers as your worked example.</li><li>Key numbers: mean 4.03%, median 4.1%, range 0.6, Jan→Dec +0.4 points (+10.8%), Dec index 110.8.</li><li>Every module is one workflow step; no step is optional.</li><li>Next step: pick one skill, one dataset, and one question — and do a full project on your own.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Treating the course as twelve separate topics. It is one workflow, practised twelve ways — the final exam tests the whole thing, not the pieces.</div><div class=\"callout\"><strong>Common mistake:</strong> Stopping at the chart. An analysis is finished only when someone who was not in the room can read your paragraph, check your source, and trust your answer.</div>"
    }
  ],
  "keyTerms": [
    {
      "term": "Workflow",
      "def": "Ask, get, clean, analyse, present — the repeatable spine of every analysis in this course."
    },
    {
      "term": "UNRATE",
      "def": "The FRED series ID for the U.S. unemployment rate, from the BLS."
    },
    {
      "term": "Mean",
      "def": "Sum ÷ count; 2024 UNRATE mean is 4.03%."
    },
    {
      "term": "Median",
      "def": "Middle sorted value; 2024 UNRATE median is 4.1%."
    },
    {
      "term": "Growth rate",
      "def": "(New − Old) ÷ Old; Jan→Dec 2024 UNRATE growth is 10.8%."
    },
    {
      "term": "Index",
      "def": "(Year ÷ Base) × 100; Dec 2024 UNRATE index with Jan = 100 is 110.8."
    },
    {
      "term": "Moving average",
      "def": "Average of a sliding window; 3-month average for Jan–Mar 2024 is 3.8%."
    },
    {
      "term": "Seasonally adjusted",
      "def": "Data with the regular seasonal pattern removed."
    },
    {
      "term": "Real value",
      "def": "A value in base-year dollars: (Nominal ÷ Index) × 100."
    },
    {
      "term": "Disclosure",
      "def": "Source, vintage, method, and limits — on every analysis."
    },
    {
      "term": "Finding",
      "def": "The answer, its evidence, and its limit, in one paragraph."
    },
    {
      "term": "Next step",
      "def": "The skill and dataset you will practise on your own after this course."
    }
  ],
  "video": {
    "title": "Statistical questions | Data and statistics | 6th grade | Khan Academy",
    "embedUrl": "https://www.youtube.com/embed/OjzfQDFf7Uk",
    "note": "Khan Academy on statistical questions: what makes a question statistical, and what data with variability can answer. Use it as a final check — can you turn any curiosity into a question this video would call statistical?",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> <em>Real lab data.</em> 2024 UNRATE values sum to 48.4 over 12 months. (a) Compute the mean. (b) The sorted values are 3.7, 3.8, 3.9, 3.9, 4.0, 4.1, 4.1, 4.1, 4.1, 4.2, 4.2, 4.3 — find the median.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Mean = 48.4 ÷ 12 = <strong>4.03%</strong> (rounded). Step 2: With 12 values, the median is the average of the 6th and 7th sorted values: (4.1 + 4.1) ÷ 2 = <strong>4.1%</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> <em>Real lab data.</em> UNRATE was 3.7% in January and 4.1% in December 2024. (a) Change in points? (b) Percent change? (c) Index for December with January = 100?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Points: 4.1 − 3.7 = <strong>0.4</strong>. Step 2: Percent: 0.4 ÷ 3.7 = 0.1081 = <strong>10.8%</strong>. Step 3: Index: (4.1 ÷ 3.7) × 100 = <strong>110.8</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Name the module that teaches each skill: (a) finding UNRATE on FRED, (b) the median vs. the mean, (c) seasonal adjustment, (d) the disclosure line.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) Module 2 — where data lives. Step 2: (b) Module 6 — descriptive analytics. Step 3: (c) Module 8 — time series. Step 4: (d) Module 11 — data ethics.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A student fills a missing month with 0%, then reports a mean of 3.1% instead of 3.875%. (a) Which workflow step went wrong? (b) What was the error, in one sentence?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The <strong>clean</strong> step went wrong. Step 2: The error was filling a blank with zero — zero is a value, not an absence — which dragged the mean down.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Write a one-paragraph finding for the 2024 UNRATE analysis: answer, evidence (two numbers), and limit.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Answer — “U.S. unemployment drifted up through 2024.” Step 2: Evidence — “The rate rose from 3.7% in January to 4.1% in December (+0.4 points, +10.8%), and the second-half mean (4.17%) was above the first-half mean (3.9%).” Step 3: Limit — “These are national, seasonally adjusted figures (BLS via FRED, UNRATE); they do not describe any single state or city.”</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Plan your next project in four lines (question, data, method, deliverable) on a topic you care about — for example, rent, petrol prices, or wages in Michigan.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Question — for example, “Did the median rent in Michigan rise between 2023 and 2024?” Step 2: Data — Census Bureau American Community Survey median gross rent, or a FRED series, with source and vintage noted. Step 3: Method — tidy table, mean and median, growth rate, index, line chart. Step 4: Deliverable — one table, one chart, and one paragraph with the answer, the evidence, and the limit.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The 2024 UNRATE mean (sum 48.4 over 12 months) is:",
      "choices": [
        "4.1%",
        "4.03%",
        "3.9%",
        "48.4%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 48.4 ÷ 12 = 4.03. (a) is the median. (c) is the first-half mean. (d) is the sum, not the mean."
    },
    {
      "q": "Jan 3.7% to Dec 4.1% is a percent change of:",
      "choices": [
        "0.4%",
        "4.0%",
        "10.8%",
        "110.8%"
      ],
      "answer": 2,
      "explanation": "Correct: (c). (4.1 − 3.7) ÷ 3.7 = 10.8%. (a) is the change in points. (b) is a wrong division. (d) is the December index, not the change."
    },
    {
      "q": "The December 2024 index with January = 100 is:",
      "choices": [
        "100",
        "104",
        "110.8",
        "4.1"
      ],
      "answer": 2,
      "explanation": "Correct: (c). (4.1 ÷ 3.7) × 100 = 110.8. (a) is January's index. (b) is a wrong value. (d) is the December rate itself."
    },
    {
      "q": "The 3-month moving average for Jan–Mar 2024 (3.7, 3.9, 3.8) is:",
      "choices": [
        "3.7",
        "3.8",
        "3.9",
        "11.4"
      ],
      "answer": 1,
      "explanation": "Correct: (b). (3.7 + 3.9 + 3.8) ÷ 3 = 3.8. (a) is January. (c) is February. (d) is the sum."
    },
    {
      "q": "Which module teaches seasonal adjustment?",
      "choices": [
        "Module 2",
        "Module 6",
        "Module 8",
        "Module 11"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Module 8 is time series: trends, seasons, and cycles. (a) is data sources. (b) is descriptive analytics. (d) is data ethics."
    },
    {
      "q": "Filling a blank with zero is an error in which workflow step?",
      "choices": [
        "Ask",
        "Get",
        "Clean",
        "Present"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Cleaning is where missing values are handled — and zero is a value, not an absence. (a) Ask is the question. (b) Get is finding data. (d) Present is the write-up."
    },
    {
      "q": "A complete analysis is finished when:",
      "choices": [
        "The chart looks good",
        "Someone who was not in the room can read it, check the source, and trust the answer",
        "The mean is computed",
        "The data are downloaded"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Reproducibility and trust are the finish line. (a) Looks are not enough. (c) A mean is one step. (d) Downloading is the start."
    },
    {
      "q": "The course workflow in order is:",
      "choices": [
        "Get, ask, clean, analyse, present",
        "Ask, get, clean, analyse, present",
        "Clean, ask, get, present, analyse",
        "Ask, clean, get, present, analyse"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Ask first, then get, clean, analyse, and present last. The other orders start with the wrong step."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Course Review: Quick Reference</h3>\n<p><strong>Workflow:</strong> Ask → Get → Clean → Analyse → Present. Each module is one step.</p>\n<p><strong>2024 UNRATE (real lab data):</strong> Values Jan–Dec: 3.7, 3.9, 3.8, 3.9, 4.0, 4.1, 4.3, 4.2, 4.1, 4.1, 4.2, 4.1 · Sum 48.4 · Mean 4.03% · Median 4.1% · Range 0.6 · Jan→Dec +0.4 points (+10.8%) · Dec index (Jan=100) 110.8 · First-half mean 3.9% · Second-half mean 4.17%.</p>\n<p><strong>Formulas:</strong> Mean = sum ÷ count · Growth = (new − old) ÷ old · Index = (year ÷ base) × 100 · Real = (nominal ÷ index) × 100 · Moving average = average of the window.</p>\n<p><strong>Common errors by step:</strong> Ask — vague question · Get — wrong version (adjusted vs. unadjusted) · Clean — blanks filled with zero · Analyse — points vs. percent · Present — title states the topic, not the finding.</p>\n<p><strong>Next step:</strong> One question, one dataset, one full project of your own — with a disclosure line (source, vintage, method, limits).</p>\n"
};
