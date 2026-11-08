module.exports = {
  "number": 1,
  "slug": "data-analytics-for-economists",
  "title": "Data Analytics for Economists: The Workflow",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what data analytics is and how it differs from simply having data.",
    "Describe the five-step analytics workflow: ask, get, clean, analyse, present.",
    "Turn a vague curiosity into a clear, answerable question with a variable and a comparison.",
    "Distinguish descriptive, diagnostic, predictive, and prescriptive analysis.",
    "Choose the right first step for a small economics project and write it down as a plan."
  ],
  "sections": [
    {
      "heading": "What Data Analytics Actually Is",
      "html": "<p><strong>Data analytics</strong> is the work of turning raw numbers into a decision. Data on its own is just a pile of observations — prices, unemployment rates, sales figures. Analytics is what you do with it: you ask a question, find the right numbers, check them, summarise them, and explain what they mean in plain words.</p><p>An economist does this constantly. A mayor asks, “Is unemployment rising in our city?” A shop owner asks, “Which product actually makes money?” A student asks, “Do higher minimum wages cost jobs?” None of those questions can be answered by staring at a spreadsheet. Each one needs a workflow — a repeatable set of steps you can trust.</p><div class=\"callout\"><strong>Key idea:</strong> Analytics is not the software. Excel, FRED, and a notebook are tools; the workflow — question first, data second, claim last — is the skill.</div>"
    },
    {
      "heading": "The Five-Step Workflow",
      "html": "<p>Every analysis in this course follows the same five steps. <strong>1. Ask:</strong> write the question in one sentence, naming the variable you will measure and the comparison you will make. <strong>2. Get:</strong> find the data from a trusted source (Module 2). <strong>3. Clean:</strong> fix the mess — missing values, wrong units, duplicates (Module 4). <strong>4. Analyse:</strong> summarise and chart it (Modules 5–8). <strong>5. Present:</strong> tell the story honestly, with the source and the limits stated (Module 10).</p><p>Beginners usually skip step 1 and jump to step 4. That is how you get a beautiful chart that answers nobody's question. Write the question down first, on paper, before you open a spreadsheet.</p><div class=\"formula\">Ask → Get → Clean → Analyse → Present</div>"
    },
    {
      "heading": "From a Curiosity to a Question",
      "html": "<p>“Is the economy doing well?” is a curiosity, not a question — it has no variable and no comparison. “Did the U.S. unemployment rate rise or fall between January and December 2024?” is a question: the variable is the unemployment rate, the comparison is January versus December, and the answer is a number. In the lab for this course you will answer exactly that question with real FRED data.</p><p>A good question also names its population and its time. “Do students spend more?” becomes “Did the average weekly spending of students at one college rise between September and November?” Narrow questions are answerable; wide ones are only discussable.</p><div class=\"callout\"><strong>Key idea:</strong> Test your question: can you finish the sentence “I will know the answer when I see…”? If you cannot, the question is still too vague.</div>"
    },
    {
      "heading": "Four Kinds of Analysis",
      "html": "<p><strong>Descriptive</strong> analysis says what happened: unemployment averaged 4.0% in 2024. <strong>Diagnostic</strong> analysis asks why: which industries lost jobs? <strong>Predictive</strong> analysis asks what might happen next, using past patterns — and it is always uncertain. <strong>Prescriptive</strong> analysis recommends what to do: given the evidence, raise, hold, or cut a budget.</p><p>This course lives mostly in descriptive and diagnostic work. That is honest: a beginner who can describe a series accurately and explain one plausible cause is far more useful than a beginner who builds a fancy forecast nobody can check. Prediction comes later, in eco221 Econometrics.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Analytics turns raw numbers into a decision; the workflow is ask, get, clean, analyse, present.</li><li>A good question names a variable, a comparison, a population, and a time.</li><li>Descriptive says what happened; diagnostic asks why; predictive forecasts; prescriptive recommends.</li><li>Write the question before opening the spreadsheet.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Starting with the data instead of the question. A dataset with no question produces charts that impress nobody and decide nothing.</div><div class=\"callout\"><strong>Common mistake:</strong> Confusing a forecast with a fact. “Unemployment will be 5% next year” is a prediction, not a measurement — label it as one.</div>"
    }
  ],
  "keyTerms": [
    {
      "term": "Data analytics",
      "def": "Turning raw numbers into a decision by asking a question, finding data, checking it, summarising it, and explaining it."
    },
    {
      "term": "Variable",
      "def": "The thing you measure, such as the unemployment rate or a price."
    },
    {
      "term": "Descriptive analysis",
      "def": "Analysis that says what happened, using summaries and charts."
    },
    {
      "term": "Diagnostic analysis",
      "def": "Analysis that asks why something happened."
    },
    {
      "term": "Predictive analysis",
      "def": "Analysis that forecasts what might happen next, always with uncertainty."
    },
    {
      "term": "Prescriptive analysis",
      "def": "Analysis that recommends what to do, given the evidence."
    },
    {
      "term": "Workflow",
      "def": "A repeatable set of steps for an analysis: ask, get, clean, analyse, present."
    },
    {
      "term": "Population",
      "def": "The whole group a question is about, such as all U.S. workers."
    },
    {
      "term": "Observation",
      "def": "One recorded value in a dataset, such as one month's unemployment rate."
    },
    {
      "term": "Dataset",
      "def": "A organised collection of observations, usually in rows and columns."
    },
    {
      "term": "Comparison",
      "def": "The contrast a question turns on, such as January versus December."
    },
    {
      "term": "Claim",
      "def": "A conclusion drawn from data, which must be supported by the numbers shown."
    },
    {
      "term": "Source",
      "def": "Where data came from; always state it so others can check your work."
    },
    {
      "term": "Spreadsheet",
      "def": "A grid of rows and columns used to store and calculate with data."
    }
  ],
  "video": {
    "title": "Introduction to Statistics | The Organic Chemistry Tutor",
    "embedUrl": "https://www.youtube.com/embed/XZo4xyJXCak",
    "note": "A broad introduction to statistics — what it is for, and why collecting, presenting, and analysing data matters. Watch it once, then write your own one-sentence question for the lab dataset.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Turn this curiosity into a good question: “Are houses expensive?” Name the variable, the comparison, the population, and the time.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Variable — the median sale price of a house. Step 2: Comparison — this year versus last year. Step 3: Population — houses sold in one city, for example Grand Rapids, Michigan. Step 4: Time — 2023 versus 2024. Step 5: The question: “Did the median sale price of houses in Grand Rapids rise or fall between 2023 and 2024?” That question has a number for an answer.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A friend says, “Unemployment averaged about 4% in 2024.” Is that descriptive, diagnostic, predictive, or prescriptive analysis? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It describes what happened in a past period, using a summary number. Step 2: It does not ask why, forecast the future, or recommend an action. Step 3: So it is <strong>descriptive</strong> analysis.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> List the five workflow steps in order, and write one sentence for each saying what you do in that step for the question “Did unemployment rise in 2024?”</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Ask — write “Did the U.S. unemployment rate rise between January and December 2024?” Step 2: Get — download the FRED UNRATE series. Step 3: Clean — check for missing months and confirm the units are percent. Step 4: Analyse — compute the mean, the change, and an index. Step 5: Present — write one paragraph with the chart, the source, and the answer.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Which of these is the best first step for a project: (a) download a dataset, (b) write the question, (c) make a chart? Why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (b) Write the question. Step 2: The question decides which dataset you need and which chart would answer it. Step 3: Downloading first (a) or charting first (c) leaves you with numbers that may answer nobody's question.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A shop owner asks, “Should I open on Sundays?” Rewrite this as an answerable analytics question, naming a variable and a comparison.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Variable — Sunday sales revenue, and Sunday costs. Step 2: Comparison — Sundays versus the average weekday, over the same months. Step 3: The question: “Would Sunday revenue exceed Sunday costs, based on the shop's weekday sales and a trial month of Sundays?” Step 4: Note that the final decision also needs a trial — past weekday data alone cannot prove what Sundays would earn.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Give one example each of a diagnostic question and a predictive question about the price of petrol, and say how they differ.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Diagnostic — “Why did the average petrol price rise last summer: higher oil prices, a refinery shutdown, or higher taxes?” It looks backwards for a cause. Step 2: Predictive — “Will the average petrol price be higher next summer than this summer?” It looks forwards and is uncertain. Step 3: The difference is direction in time: diagnostic explains the past, predictive bets on the future.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Data analytics is best described as: ",
      "choices": [
        "Collecting as much data as possible",
        "Turning raw numbers into a decision by following a workflow",
        "Making charts that look impressive",
        "Guessing what will happen next"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Analytics is the question-to-decision workflow. (a) Collecting data is only one step. (c) A chart is a tool, not the goal. (d) Guessing is not analysis — predictions must come from data and be labelled uncertain."
    },
    {
      "q": "Which step comes FIRST in the analytics workflow?",
      "choices": [
        "Clean the data",
        "Analyse the data",
        "Ask the question",
        "Present the results"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Ask first — the question decides which data and which chart you need. (a) and (b) come after you know what you are looking for. (d) Present is the last step."
    },
    {
      "q": "“Did the U.S. unemployment rate rise between January and December 2024?” is a good question mainly because it:",
      "choices": [
        "Uses a big word",
        "Names a variable and a comparison",
        "Is about the whole economy",
        "Has a yes-or-no answer"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It names the variable (unemployment rate) and the comparison (January vs December). (a) Big words do not help. (c) It is about one series, not the whole economy. (d) A yes/no answer alone does not make a question good — the variable and comparison do."
    },
    {
      "q": "“Unemployment averaged 4.0% in 2024” is an example of:",
      "choices": [
        "Diagnostic analysis",
        "Predictive analysis",
        "Descriptive analysis",
        "Prescriptive analysis"
      ],
      "answer": 2,
      "explanation": "Correct: (c). It describes what happened. (a) would ask why. (b) would forecast the future. (d) would recommend an action."
    },
    {
      "q": "Which question is diagnostic?",
      "choices": [
        "What was the average price last year?",
        "Why did the average price rise last year?",
        "What will the price be next year?",
        "Should we cut the price?"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Diagnostic asks why. (a) is descriptive. (c) is predictive. (d) is prescriptive."
    },
    {
      "q": "A predictive statement should always be labelled as:",
      "choices": [
        "A proven fact",
        "A recommendation",
        "Uncertain — a forecast, not a measurement",
        "A description of the past"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Forecasts are uncertain by nature. (a) is wrong — the future cannot be measured yet. (b) A recommendation is prescriptive. (d) The past is descriptive."
    },
    {
      "q": "The main risk of starting with the data instead of the question is:",
      "choices": [
        "The data will be too small",
        "You will make charts that answer nobody's question",
        "The spreadsheet will crash",
        "You will need more data"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Without a question, analysis has no target. (a) Size is not the issue. (c) Spreadsheets do not crash from this. (d) More data does not fix a missing question."
    },
    {
      "q": "In the workflow, “clean” means:",
      "choices": [
        "Delete all data you do not like",
        "Fix messes such as missing values, wrong units, and duplicates",
        "Make the chart colourful",
        "Write the final report"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Cleaning fixes errors so the analysis is honest. (a) Deleting inconvenient data is dishonest. (c) Colour is presentation. (d) The report is the present step."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — The Analytics Workflow: Quick Reference</h3>\n<p><strong>Core idea:</strong> Analytics turns raw numbers into a decision. The workflow is ask → get → clean → analyse → present.</p>\n<p><strong>Good question test:</strong> Name the variable, the comparison, the population, and the time. Finish the sentence: “I will know the answer when I see…”</p>\n<p><strong>Four kinds:</strong> Descriptive (what happened) · Diagnostic (why) · Predictive (what might happen — uncertain) · Prescriptive (what to do).</p>\n<p><strong>Watch out:</strong> Never start with the data. Write the question first, and never present a forecast as a fact.</p>\n<p><strong>Self-check:</strong> Write one good question about a price, a wage, or a job number you care about, naming all four parts.</p>\n"
};
