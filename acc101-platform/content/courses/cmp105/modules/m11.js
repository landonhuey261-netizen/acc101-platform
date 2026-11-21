// cmp105 - Module 11: GROUP BY & Aggregate Functions
module.exports = {
  "number": 11,
  "slug": "group-by-and-aggregates",
  "title": "GROUP BY & Aggregate Functions",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what an aggregate function does to a group of rows.",
    "Use COUNT, SUM, AVG, MIN, and MAX.",
    "Group rows with GROUP BY and summarise each group.",
    "Filter groups with HAVING and explain how it differs from WHERE.",
    "Answer a “how many per group” question with one query."
  ],
  "sections": [
    {
      "heading": "One Answer From Many Rows",
      "html": "<p>An aggregate function takes many rows and returns one value. COUNT counts rows: <code>SELECT COUNT(*) FROM customers;</code> returns 3. SUM adds numbers: <code>SELECT SUM(total) FROM orders;</code> returns 134.49 — Maya's 24.50 and 10.00 plus Sam's 99.99. AVG finds the average, MIN the smallest, MAX the largest. These five — COUNT, SUM, AVG, MIN, MAX — answer most “how much in total?” questions.</p>\n<p>COUNT(*) counts every row. COUNT(city) counts only rows where city is not NULL. That difference matters when some rows have missing values. And remember: aggregates ignore NULLs, except COUNT(*), which counts the row whatever its values are.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> COUNT, SUM, AVG, MIN, MAX turn many rows into one answer.</div></p>\n"
    },
    {
      "heading": "GROUP BY: One Answer Per Group",
      "html": "<p>GROUP BY splits rows into groups and gives one answer per group: <pre><code>SELECT city, COUNT(*) FROM customers GROUP BY city;</code></pre> returns two rows: Detroit 2, Grand Rapids 1. The database groups the rows by city, then counts inside each group. For orders per customer: <pre><code>SELECT customer_id, SUM(total) FROM orders GROUP BY customer_id;</code></pre> returns customer 1 with 34.50 and customer 2 with 99.99.</p>\n<p>Every column in the SELECT that is not an aggregate must be in the GROUP BY. Asking for a name alongside a group total, without grouping by name, is a mistake the database may refuse — and if it does not refuse, the name it shows is meaningless. That rule is worth memorising.</p>\n"
    },
    {
      "heading": "HAVING: Filtering Groups",
      "html": "<p>WHERE filters rows before they are grouped; HAVING filters groups after they are grouped. To find cities with more than one customer: <pre><code>SELECT city, COUNT(*) AS n FROM customers GROUP BY city HAVING n &gt; 1;</code></pre> Only Detroit survives, with 2. WHERE could not do this, because the count does not exist until after grouping.</p>\n<p>The order in a query is: SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT. WHERE trims the rows going in; HAVING trims the groups coming out. If your filter uses an aggregate such as COUNT or SUM, it belongs in HAVING. If it uses an ordinary column, it belongs in WHERE.</p>\n"
    },
    {
      "heading": "Putting It Together: A Shop's Questions",
      "html": "<p>A shop owner asks: how many orders did each customer place, and what did they spend in total, biggest spender first? One query answers it: <pre><code>SELECT customer_id, COUNT(*) AS orders, SUM(total) AS spent\nFROM orders\nGROUP BY customer_id\nORDER BY spent DESC;</code></pre> The answer is customer 2, 1 order, 99.99; then customer 1, 2 orders, 34.50. That is the whole power of GROUP BY: a question that would take an afternoon by hand, answered in one sentence.</p>\n<p>Combine GROUP BY with a JOIN and you can show names instead of ids — customer names with their totals — which is exactly what the lab for this course asks you to do.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>COUNT, SUM, AVG, MIN, MAX turn many rows into one value.</li>\n<li>GROUP BY splits rows into groups and summarises each group.</li>\n<li>WHERE filters rows before grouping; HAVING filters groups after.</li>\n<li>Every non-aggregate column in SELECT must be in GROUP BY.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Putting an aggregate test in WHERE. Aggregates belong in HAVING.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Selecting a column that is neither aggregated nor grouped. The value it shows is meaningless.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Aggregate function",
      "def": "A function such as COUNT or SUM that turns many rows into one value."
    },
    {
      "term": "COUNT",
      "def": "An aggregate function that counts rows."
    },
    {
      "term": "SUM",
      "def": "An aggregate function that adds numbers together."
    },
    {
      "term": "AVG",
      "def": "An aggregate function that finds the average of numbers."
    },
    {
      "term": "MIN",
      "def": "An aggregate function that finds the smallest value."
    },
    {
      "term": "MAX",
      "def": "An aggregate function that finds the largest value."
    },
    {
      "term": "GROUP BY",
      "def": "The SQL keyword that splits rows into groups so each group can be summarised."
    },
    {
      "term": "HAVING",
      "def": "The SQL keyword that filters groups after grouping, such as keeping only groups with more than one row."
    },
    {
      "term": "Group",
      "def": "A set of rows sharing a value, such as all customers from one city."
    },
    {
      "term": "WHERE",
      "def": "The SQL keyword that filters rows, keeping only those that pass a test."
    },
    {
      "term": "Alias",
      "def": "A new name for a column in a query's answer, made with AS."
    },
    {
      "term": "Total",
      "def": "The sum of a set of numbers, found with SUM."
    },
    {
      "term": "Average",
      "def": "The sum divided by the count, found with AVG."
    },
    {
      "term": "NULL",
      "def": "A database value meaning “we do not know”; not zero and not a blank word."
    },
    {
      "term": "Result",
      "def": "The table a query returns: columns across the top, one row per match."
    }
  ],
  "video": {
    "title": "Basic Aggregate Functions in SQL (COUNT, SUM, AVG, MAX, and MIN)",
    "embedUrl": "https://www.youtube.com/embed/jcoJuc5e3RE",
    "note": "Watch the aggregates and GROUP BY with real numbers, and work out the per-city counts by hand before you run the query.",
    "more": [
      {
        "title": "SQL Aggregate Functions | COUNT, SUM, AVG, MAX, MIN  | #SQL Course 21",
        "url": "https://www.youtube.com/watch?v=AsuPVZ_EjEw"
      },
      {
        "title": "Advanced Aggregate Functions in SQL (GROUP BY, HAVING vs. WHERE)",
        "url": "https://www.youtube.com/watch?v=nNrgRVIzeHg"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Aggregate function” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Aggregate function — A function such as COUNT or SUM that turns many rows into one value. Step 2: It matters because it is part of: Explain what an aggregate function does to a group of rows. Step 3: An example from the module is the way aggregate function shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “COUNT” and “SUM”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: COUNT — An aggregate function that counts rows. Step 2: SUM — An aggregate function that adds numbers together. Step 3: They differ because the first is about count while the second is about sum; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Use COUNT, SUM, AVG, MIN, and MAX.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Use COUNT, SUM, AVG, MIN, and MAX. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “AVG” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: AVG — An aggregate function that finds the average of numbers. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: MIN — An aggregate function that finds the smallest value. Step 2: MAX — An aggregate function that finds the largest value. Step 3: GROUP BY — The SQL keyword that splits rows into groups so each group can be summarised. Step 4: COUNT — An aggregate function that counts rows. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Group rows with GROUP BY and summarise each group. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Aggregate function” mean?",
      "choices": [
        "A function such as COUNT or SUM that turns many rows into one value.",
        "An aggregate function that counts rows.",
        "An aggregate function that adds numbers together.",
        "An aggregate function that finds the average of numbers."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Aggregate function means: A function such as COUNT or SUM that turns many rows into one value. (b) is the definition of COUNT, not of Aggregate function. (c) is the definition of SUM, not of Aggregate function. (d) is the definition of AVG, not of Aggregate function."
    },
    {
      "q": "What does the term “COUNT” mean?",
      "choices": [
        "A function such as COUNT or SUM that turns many rows into one value.",
        "An aggregate function that counts rows.",
        "An aggregate function that adds numbers together.",
        "An aggregate function that finds the average of numbers."
      ],
      "answer": 1,
      "explanation": "Correct: (b). COUNT means: An aggregate function that counts rows. (a) is the definition of Aggregate function, not of COUNT. (c) is the definition of SUM, not of COUNT. (d) is the definition of AVG, not of COUNT."
    },
    {
      "q": "What does the term “SUM” mean?",
      "choices": [
        "A function such as COUNT or SUM that turns many rows into one value.",
        "An aggregate function that counts rows.",
        "An aggregate function that adds numbers together.",
        "An aggregate function that finds the average of numbers."
      ],
      "answer": 2,
      "explanation": "Correct: (c). SUM means: An aggregate function that adds numbers together. (a) is the definition of Aggregate function, not of SUM. (b) is the definition of COUNT, not of SUM. (d) is the definition of AVG, not of SUM."
    },
    {
      "q": "What does the term “AVG” mean?",
      "choices": [
        "A function such as COUNT or SUM that turns many rows into one value.",
        "An aggregate function that counts rows.",
        "An aggregate function that adds numbers together.",
        "An aggregate function that finds the average of numbers."
      ],
      "answer": 3,
      "explanation": "Correct: (d). AVG means: An aggregate function that finds the average of numbers. (a) is the definition of Aggregate function, not of AVG. (b) is the definition of COUNT, not of AVG. (c) is the definition of SUM, not of AVG."
    },
    {
      "q": "Which term means: An aggregate function that finds the smallest value.",
      "choices": [
        "MIN",
        "Aggregate function",
        "COUNT",
        "SUM"
      ],
      "answer": 0,
      "explanation": "Correct: (a). MIN is the term for: An aggregate function that finds the smallest value. (b) Aggregate function means A function such as COUNT or SUM that turns many rows into one value. (c) COUNT means An aggregate function that counts rows. (d) SUM means An aggregate function that adds numbers together."
    },
    {
      "q": "Which term means: An aggregate function that finds the largest value.",
      "choices": [
        "Aggregate function",
        "MAX",
        "COUNT",
        "SUM"
      ],
      "answer": 1,
      "explanation": "Correct: (b). MAX is the term for: An aggregate function that finds the largest value. (a) Aggregate function means A function such as COUNT or SUM that turns many rows into one value. (c) COUNT means An aggregate function that counts rows. (d) SUM means An aggregate function that adds numbers together."
    },
    {
      "q": "Which term means: The SQL keyword that splits rows into groups so each group can be summarised.",
      "choices": [
        "Aggregate function",
        "COUNT",
        "GROUP BY",
        "SUM"
      ],
      "answer": 2,
      "explanation": "Correct: (c). GROUP BY is the term for: The SQL keyword that splits rows into groups so each group can be summarised. (a) Aggregate function means A function such as COUNT or SUM that turns many rows into one value. (b) COUNT means An aggregate function that counts rows. (d) SUM means An aggregate function that adds numbers together."
    },
    {
      "q": "Which term means: The SQL keyword that filters groups after grouping, such as keeping only groups with more than one row.",
      "choices": [
        "Aggregate function",
        "COUNT",
        "SUM",
        "HAVING"
      ],
      "answer": 3,
      "explanation": "Correct: (d). HAVING is the term for: The SQL keyword that filters groups after grouping, such as keeping only groups with more than one row. (a) Aggregate function means A function such as COUNT or SUM that turns many rows into one value. (b) COUNT means An aggregate function that counts rows. (c) SUM means An aggregate function that adds numbers together."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — GROUP BY & Aggregate Functions: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what an aggregate function does to a group of rows.</p>\n<p><strong>Key terms:</strong> Aggregate function · COUNT · SUM · AVG · MIN · MAX · GROUP BY · HAVING.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what an aggregate function does to a group of rows.</li>\n<li>Use COUNT, SUM, AVG, MIN, and MAX.</li>\n<li>Group rows with GROUP BY and summarise each group.</li>\n</ul>\n<p><strong>Watch out:</strong> Test the WHERE as a SELECT before any UPDATE or DELETE, and back up before any big change.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
