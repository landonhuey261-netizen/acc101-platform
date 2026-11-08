module.exports = {
  "number": 11,
  "slug": "data-ethics",
  "title": "Data Ethics: Honest Analysis & Common Traps",
  "estTime": "3–4 hours",
  "objectives": [
    "List the five questions to ask before trusting any statistic (who says so, how was it measured, what is missing, does it compare like with like, who benefits?).",
    "Explain why cherry-picking, p-hacking, and hiding the source are dishonest even when the numbers are real.",
    "Distinguish an honest mistake from a misleading presentation.",
    "Decide what to do when data contradict what you hoped to find.",
    "Write a disclosure line for an analysis: source, vintage, method, and limits."
  ],
  "sections": [
    {
      "heading": "Five Questions for Any Statistic",
      "html": "<p>Darrell Huff's 1954 classic <em>How to Lie with Statistics</em> gave readers five questions that still work. <strong>Who says so?</strong> — is the source the BLS or a seller with something to gain? <strong>How was it measured?</strong> — who was counted, and how? <strong>What is missing?</strong> — which months, groups, or cases were left out? <strong>Does it compare like with like?</strong> — same units, same definitions, same time? <strong>Who benefits</strong> if you believe it?</p><p>Ask all five before you repeat a number. A statistic that fails even one of them is not necessarily false — but it is not yet trustworthy either.</p><div class=\"callout\"><strong>Key idea:</strong> Who says so? How was it measured? What is missing? Like with like? Who benefits? Ask all five before you repeat a number.</div>"
    },
    {
      "heading": "The Traps: Cherry-Picking, Hiding, and Overclaiming",
      "html": "<p>The common traps all share one feature: the numbers are real, and the presentation is dishonest. <strong>Cherry-picking</strong> shows only the months that support the claim. <strong>Hiding the source</strong> makes a number uncheckable. <strong>Overclaiming</strong> says “this proves” when the data only suggest. <strong>Confusing correlation with causation</strong> turns a co-movement into a cause. And <strong>averaging without saying which average</strong> lets the speaker pick the mean or the median — whichever looks better.</p><p>None of these requires inventing data. That is what makes them dangerous: a fact-checker who only checks the numbers will pass them all.</p>"
    },
    {
      "heading": "When the Data Disagree with You",
      "html": "<p>Sooner or later the data will contradict what you hoped to find. That is not a failure — it is the job working. The honest move is to report the result, check your method once for an error, and if the result stands, say so plainly: “I expected unemployment to fall; it rose from 3.7% to 4.1%.”</p><p>The dishonest moves are all tempting: redefining the question after seeing the answer, dropping the awkward months, or switching from the mean to the median because it looks better. Every one of them is visible to a careful reader — and every one destroys trust faster than a wrong forecast ever could.</p><div class=\"callout\"><strong>Key idea:</strong> Report what you found, not what you hoped. A result that surprises you is the most valuable kind — it means you learned something.</div>"
    },
    {
      "heading": "Privacy, Consent, and Care",
      "html": "<p>Economics data are often about people: wages, health, addresses, spending. Three rules apply. <strong>Aggregate:</strong> report group summaries, not individuals — a median wage for a town is fine; one named person's wage is not. <strong>Consent:</strong> if you collected data yourself, people must know what it is for. <strong>Care:</strong> even public data can harm if it identifies a small group — a table with one person in a cell can identify that person.</p><p>Official statistics already follow these rules (the BLS and Census suppress small cells). When you work with your own survey, follow them too.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Five questions: who says so, how measured, what is missing, like with like, who benefits.</li><li>Cherry-picking, hiding the source, overclaiming, and correlation-as-cause are dishonest even with real numbers.</li><li>When data contradict you, report it — never redefine the question after seeing the answer.</li><li>Aggregate people data, get consent, and suppress small cells that could identify someone.</li><li>Every analysis ends with a disclosure: source, vintage, method, limits.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Thinking honesty means only “don't invent numbers.” Presentation — which months you show, which average you pick, what you leave out — is where most misleading happens.</div><div class=\"callout\"><strong>Common mistake:</strong> Dropping an awkward result and keeping the neat one. If you drop data, say so, with the reason, in the write-up.</div>"
    }
  ],
  "keyTerms": [
    {
      "term": "Cherry-picking",
      "def": "Showing only the data that support a claim and hiding the rest."
    },
    {
      "term": "Overclaiming",
      "def": "Saying data “prove” something when they only suggest it."
    },
    {
      "term": "Disclosure",
      "def": "A note stating the source, vintage, method, and limits of an analysis."
    },
    {
      "term": "Correlation vs. causation",
      "def": "Two variables moving together does not prove one causes the other."
    },
    {
      "term": "P-hacking",
      "def": "Trying many analyses until one gives a striking result, then reporting only that one."
    },
    {
      "term": "Selection bias",
      "def": "A sample that is not representative of the population it claims to describe."
    },
    {
      "term": "Survivorship bias",
      "def": "Looking only at the survivors — successful firms, open shops — and ignoring the ones that failed."
    },
    {
      "term": "Aggregation",
      "def": "Reporting group summaries instead of individual people's data."
    },
    {
      "term": "Consent",
      "def": "Permission from people whose data you collect, given with knowledge of its purpose."
    },
    {
      "term": "Suppression",
      "def": "Hiding small cells in a table that could identify an individual."
    },
    {
      "term": "Like with like",
      "def": "Comparing values measured the same way, in the same units, over the same period."
    },
    {
      "term": "Vintage",
      "def": "When data were downloaded or published; part of every honest disclosure."
    },
    {
      "term": "Reproducibility",
      "def": "The ability of someone else to repeat your analysis and get the same answer."
    }
  ],
  "video": {
    "title": "How to spot a misleading graph - Lea Gaslowitz",
    "embedUrl": "https://www.youtube.com/embed/E91bGT9BjYk",
    "note": "TED-Ed: “How to spot a misleading graph” — the classic traps (truncated axes, missing context, cherry-picked ranges) in under five minutes. Use its checklist on any chart you meet this week.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A headline says “Unemployment fell!” and shows March–May only, when it fell, while the full year shows a rise. (a) Name the trap. (b) Write the honest headline.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: This is <strong>cherry-picking</strong> — the range was chosen to support the claim. Step 2: Honest headline: “Unemployment fell in March–May, but rose over the full year.”</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A report says “the average wage is $76,000” in a town where nine people earn $40,000 and one earns $400,000, without saying which average. (a) Which average was probably used? (b) What is the trap, and what should the report have said?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: $76,000 is the <strong>mean</strong> (760,000 ÷ 10). Step 2: The trap is averaging without naming the average — the median is $40,000, the typical wage. Step 3: The report should have said “the mean wage is $76,000; the median wage is $40,000,” so readers can see the skew.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> You expected unemployment to fall in 2024, but the data show it rising from 3.7% to 4.1%. (a) What is the honest thing to do? (b) Name two dishonest moves you must not make.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Honest — check your method once, then report the rise plainly: “I expected a fall; the rate rose.” Step 2: Dishonest moves to avoid: (1) redefining the question after seeing the answer, and (2) dropping the awkward months so the series looks flat.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A survey of “successful restaurants” finds they all spend heavily on advertising, and the author concludes “advertising causes success.” (a) Name the bias. (b) Explain it in one sentence.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: This is <strong>survivorship bias</strong>. Step 2: The survey looked only at restaurants that survived — failed restaurants that also advertised heavily are invisible, so the comparison is rigged.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> You publish a table of wages by neighbourhood, and one neighbourhood has a single respondent. (a) What is the risk? (b) What should you do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The risk is identification — one person in a cell can be identified, and their wage exposed. Step 2: <strong>Suppress</strong> the cell (show a dash, not the value) or merge the neighbourhood with a neighbouring one, and say you did so for privacy.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Write a disclosure line for the course lab analysis, naming the source, the series, the vintage, and one limit.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Source and series — “Source: U.S. Bureau of Labor Statistics via FRED, series UNRATE, seasonally adjusted.” Step 2: Vintage and limit — “Monthly values for 2024 as published in the frozen lab table (vintage November 2026). Limit: national figures only — they do not describe any single state or city.”</p>"
    }
  ],
  "quiz": [
    {
      "q": "The five questions for any statistic include:",
      "choices": [
        "Who says so? How was it measured? What is missing?",
        "What colour is the chart?",
        "How many decimals are shown?",
        "Who wrote the headline?"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Those are three of Huff's five questions (with “like with like?” and “who benefits?”). (b) Colour is decoration. (c) Precision is a detail, not a trust test. (d) The headline writer is not the source."
    },
    {
      "q": "Showing only the months that support a claim is:",
      "choices": [
        "Seasonal adjustment",
        "Cherry-picking",
        "Indexing",
        "Cleaning"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Cherry-picking hides the rest of the data. (a) Seasonal adjustment is a legitimate, disclosed method. (c) Indexing rescales. (d) Cleaning fixes errors, it does not hide data."
    },
    {
      "q": "Saying data “prove” something when they only suggest it is:",
      "choices": [
        "Overclaiming",
        "Underclaiming",
        "Describing",
        "Forecasting"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Overclaiming states more certainty than the evidence supports. (b) is the opposite. (c) Describing states what happened. (d) Forecasting is about the future."
    },
    {
      "q": "When data contradict what you hoped to find, the honest move is to:",
      "choices": [
        "Drop the awkward months",
        "Report the result plainly after one method check",
        "Switch from the mean to the median",
        "Redefine the question"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Report what you found. (a), (c), and (d) are all ways of hiding an unwelcome result."
    },
    {
      "q": "A survey of only successful restaurants that concludes advertising causes success suffers from:",
      "choices": [
        "Selection bias — survivorship bias",
        "Seasonal adjustment",
        "Index bias",
        "A small sample only"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Only survivors were studied, so failures are invisible. (b) Seasonality is irrelevant here. (c) There is no index. (d) The sample could be large and still biased."
    },
    {
      "q": "A table cell with a single respondent should be:",
      "choices": [
        "Published as-is",
        "Suppressed or merged, to protect privacy",
        "Rounded to zero",
        "Deleted along with the whole table"
      ],
      "answer": 1,
      "explanation": "Correct: (b). One person in a cell can be identified. (a) exposes them. (c) invents a false value. (d) destroys good data."
    },
    {
      "q": "An honest disclosure line names:",
      "choices": [
        "Source, vintage, method, and limits",
        "Only the conclusion",
        "The software version only",
        "The author's opinion"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Those four let a reader check the work. (b) A conclusion alone cannot be checked. (c) Software is a detail. (d) Opinions are not disclosures."
    },
    {
      "q": "“Average wage $76,000” without saying mean or median is misleading when:",
      "choices": [
        "The data are symmetric",
        "The data are skewed by one high earner",
        "The sample is large",
        "The wage is in dollars"
      ],
      "answer": 1,
      "explanation": "Correct: (b). With skew, mean ($76,000) and median ($40,000) tell different stories, and the speaker chose the flattering one. (a) With symmetry they agree. (c) Size does not fix the ambiguity. (d) Units are not the issue."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Data Ethics: Quick Reference</h3>\n<p><strong>Five questions:</strong> Who says so? · How was it measured? · What is missing? · Like with like? · Who benefits?</p>\n<p><strong>Traps (numbers real, presentation dishonest):</strong> Cherry-picking · hiding the source · overclaiming (“proves” for “suggests”) · correlation as cause · unnamed average · survivorship bias.</p>\n<p><strong>When data surprise you:</strong> Check the method once, then report the result plainly. Never redefine the question, drop awkward months, or switch averages to look better.</p>\n<p><strong>People data:</strong> Aggregate, get consent, suppress cells with one person.</p>\n<p><strong>Disclosure line:</strong> Source + series + vintage + method + limit — on every analysis.</p>\n<p><strong>Self-check:</strong> Take any headline number you saw this week and run the five questions on it.</p>\n"
};
