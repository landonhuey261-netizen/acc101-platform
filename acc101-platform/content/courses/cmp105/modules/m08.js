// cmp105 - Module 8: ORDER BY, LIMIT & Sorting Results
module.exports = {
  "number": 8,
  "slug": "order-by-limit-sorting",
  "title": "ORDER BY, LIMIT & Sorting Results",
  "estTime": "3–4 hours",
  "objectives": [
    "Sort results with ORDER BY, smallest first and largest first.",
    "Sort by more than one column.",
    "Use LIMIT to take only the first few rows.",
    "Explain why rows have no order without ORDER BY.",
    "Combine WHERE, ORDER BY, and LIMIT in one query."
  ],
  "sections": [
    {
      "heading": "Rows Have No Order Until You Ask",
      "html": "<p>Without ORDER BY, a database returns rows in whatever order is convenient for it — usually the order they were added, but that is not promised. If your app shows “the newest orders first”, you must say so in the query. Never trust the order of a query that has no ORDER BY; it can change without warning.</p>\n<p>ORDER BY adds the order: <pre><code>SELECT name, age FROM customers ORDER BY age;</code></pre> returns Maya (28), Lee (35), Sam (41) — smallest first, which is the default, called ascending. Add DESC for largest first: <code>ORDER BY age DESC</code> returns Sam, Lee, Maya.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> No ORDER BY, no promised order. If the order matters, say so in the query.</div></p>\n"
    },
    {
      "heading": "Sorting by More Than One Column",
      "html": "<p>You can sort by a second column for ties: <code>ORDER BY city, age DESC</code> sorts by city first, and within each city by age, largest first. Detroit comes before Grand Rapids, and within Detroit, Lee (35) comes before Maya (28). The order of the columns in ORDER BY is the order of the sorting: the first column matters most.</p>\n<p>Sorting works on text too: <code>ORDER BY name</code> gives Lee, Maya, Sam — alphabetical order. Dates sort in order only when stored as YYYY-MM-DD, which is why Module 3 insisted on that form.</p>\n"
    },
    {
      "heading": "LIMIT: Just the First Few",
      "html": "<p>LIMIT takes only the first rows after sorting: <pre><code>SELECT name, age FROM customers ORDER BY age DESC LIMIT 2;</code></pre> returns Sam and Lee — the two oldest customers. LIMIT without ORDER BY takes two rows in no particular order, which is rarely useful. Always pair LIMIT with ORDER BY, so “the first two” means something.</p>\n<p>LIMIT is how apps show “top 10” lists and pages of results: the first 10, then the next 10, and so on. The next page uses OFFSET: <code>LIMIT 10 OFFSET 10</code> skips the first ten and takes the next ten. You will use this whenever a list is too long for one screen.</p>\n"
    },
    {
      "heading": "Putting It Together",
      "html": "<p>The parts of a query go in a fixed order: SELECT, FROM, WHERE, ORDER BY, LIMIT. For example: <pre><code>SELECT customer_id, total FROM orders\nWHERE total &gt; 20\nORDER BY total DESC\nLIMIT 2;</code></pre> This returns the two biggest orders over 20: customer 2 with 99.99, then customer 1 with 24.50. Read it as a sentence: “show customer and total, from orders, where total is over 20, biggest first, just two.”</p>\n<p>If a query fails, check the order of its parts first. WHERE before ORDER BY, ORDER BY before LIMIT. The database is strict about that order, and it is the most common reason a query that looks right will not run.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>ORDER BY sorts results; ASC is smallest first (the default), DESC is largest first.</li>\n<li>Sort by a second column to break ties.</li>\n<li>LIMIT takes only the first few rows — always pair it with ORDER BY.</li>\n<li>Query parts go in order: SELECT, FROM, WHERE, ORDER BY, LIMIT.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Trusting the order of a query with no ORDER BY.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Using LIMIT without ORDER BY and getting two random rows.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "ORDER BY",
      "def": "The SQL keyword that sorts a query's results by one or more columns."
    },
    {
      "term": "ASC",
      "def": "Ascending order: smallest first. This is the default for ORDER BY."
    },
    {
      "term": "DESC",
      "def": "Descending order: largest first, written after a column in ORDER BY."
    },
    {
      "term": "LIMIT",
      "def": "The SQL keyword that takes only the first few rows of a result."
    },
    {
      "term": "OFFSET",
      "def": "With LIMIT, the number of rows to skip before taking rows, used for pages of results."
    },
    {
      "term": "Sorting",
      "def": "Putting rows in order, such as by date or by price, smallest first."
    },
    {
      "term": "Ascending",
      "def": "In order from smallest to largest, or A to Z."
    },
    {
      "term": "Descending",
      "def": "In order from largest to smallest, or Z to A."
    },
    {
      "term": "Tie",
      "def": "Two rows with the same value in the sort column; a second column breaks the tie."
    },
    {
      "term": "Top N",
      "def": "The first N rows after sorting, such as the top 10 products by sales."
    },
    {
      "term": "WHERE",
      "def": "The SQL keyword that filters rows, keeping only those that pass a test."
    },
    {
      "term": "SELECT",
      "def": "The SQL keyword that asks a database for data from chosen columns."
    },
    {
      "term": "Result",
      "def": "The table a query returns: columns across the top, one row per match."
    },
    {
      "term": "Page",
      "def": "One screenful of a long list, fetched with LIMIT and OFFSET."
    },
    {
      "term": "Column",
      "def": "One fact about every row in a table, such as the name column or the price column."
    }
  ],
  "video": {
    "title": "5 Basic SELECT Statement Queries in SQL",
    "embedUrl": "https://www.youtube.com/embed/5tEApCGgpEQ",
    "note": "Watch sorting and limiting with real data, and try the top-two query yourself. Predict the answer first, then run it.",
    "more": [
      {
        "title": "SQL SELECT Queries (Visually Explained) for Beginners | All Essential Clauses | #SQL Course 4",
        "url": "https://www.youtube.com/watch?v=TDKoTItCVMU"
      },
      {
        "title": "Getting Started with SQL | SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY",
        "url": "https://www.youtube.com/watch?v=eRWOdpludPM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “ORDER BY” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: ORDER BY — The SQL keyword that sorts a query's results by one or more columns. Step 2: It matters because it is part of: Sort results with ORDER BY, smallest first and largest first. Step 3: An example from the module is the way order by shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “ASC” and “DESC”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: ASC — Ascending order: smallest first. This is the default for ORDER BY. Step 2: DESC — Descending order: largest first, written after a column in ORDER BY. Step 3: They differ because the first is about asc while the second is about desc; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Sort by more than one column.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Sort by more than one column. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “LIMIT” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: LIMIT — The SQL keyword that takes only the first few rows of a result. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: OFFSET — With LIMIT, the number of rows to skip before taking rows, used for pages of results. Step 2: Sorting — Putting rows in order, such as by date or by price, smallest first. Step 3: Ascending — In order from smallest to largest, or A to Z. Step 4: ASC — Ascending order: smallest first. This is the default for ORDER BY. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Use LIMIT to take only the first few rows. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “ORDER BY” mean?",
      "choices": [
        "The SQL keyword that sorts a query's results by one or more columns.",
        "Ascending order: smallest first. This is the default for ORDER BY.",
        "Descending order: largest first, written after a column in ORDER BY.",
        "The SQL keyword that takes only the first few rows of a result."
      ],
      "answer": 0,
      "explanation": "Correct: (a). ORDER BY means: The SQL keyword that sorts a query's results by one or more columns. (b) is the definition of ASC, not of ORDER BY. (c) is the definition of DESC, not of ORDER BY. (d) is the definition of LIMIT, not of ORDER BY."
    },
    {
      "q": "What does the term “ASC” mean?",
      "choices": [
        "The SQL keyword that sorts a query's results by one or more columns.",
        "Ascending order: smallest first. This is the default for ORDER BY.",
        "Descending order: largest first, written after a column in ORDER BY.",
        "The SQL keyword that takes only the first few rows of a result."
      ],
      "answer": 1,
      "explanation": "Correct: (b). ASC means: Ascending order: smallest first. This is the default for ORDER BY. (a) is the definition of ORDER BY, not of ASC. (c) is the definition of DESC, not of ASC. (d) is the definition of LIMIT, not of ASC."
    },
    {
      "q": "What does the term “DESC” mean?",
      "choices": [
        "The SQL keyword that sorts a query's results by one or more columns.",
        "Ascending order: smallest first. This is the default for ORDER BY.",
        "Descending order: largest first, written after a column in ORDER BY.",
        "The SQL keyword that takes only the first few rows of a result."
      ],
      "answer": 2,
      "explanation": "Correct: (c). DESC means: Descending order: largest first, written after a column in ORDER BY. (a) is the definition of ORDER BY, not of DESC. (b) is the definition of ASC, not of DESC. (d) is the definition of LIMIT, not of DESC."
    },
    {
      "q": "What does the term “LIMIT” mean?",
      "choices": [
        "The SQL keyword that sorts a query's results by one or more columns.",
        "Ascending order: smallest first. This is the default for ORDER BY.",
        "Descending order: largest first, written after a column in ORDER BY.",
        "The SQL keyword that takes only the first few rows of a result."
      ],
      "answer": 3,
      "explanation": "Correct: (d). LIMIT means: The SQL keyword that takes only the first few rows of a result. (a) is the definition of ORDER BY, not of LIMIT. (b) is the definition of ASC, not of LIMIT. (c) is the definition of DESC, not of LIMIT."
    },
    {
      "q": "Which term means: With LIMIT, the number of rows to skip before taking rows, used for pages of results.",
      "choices": [
        "OFFSET",
        "ORDER BY",
        "ASC",
        "DESC"
      ],
      "answer": 0,
      "explanation": "Correct: (a). OFFSET is the term for: With LIMIT, the number of rows to skip before taking rows, used for pages of results. (b) ORDER BY means The SQL keyword that sorts a query's results by one or more columns. (c) ASC means Ascending order: smallest first. This is the default for ORDER BY. (d) DESC means Descending order: largest first, written after a column in ORDER BY."
    },
    {
      "q": "Which term means: Putting rows in order, such as by date or by price, smallest first.",
      "choices": [
        "ORDER BY",
        "Sorting",
        "ASC",
        "DESC"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Sorting is the term for: Putting rows in order, such as by date or by price, smallest first. (a) ORDER BY means The SQL keyword that sorts a query's results by one or more columns. (c) ASC means Ascending order: smallest first. This is the default for ORDER BY. (d) DESC means Descending order: largest first, written after a column in ORDER BY."
    },
    {
      "q": "Which term means: In order from smallest to largest, or A to Z.",
      "choices": [
        "ORDER BY",
        "ASC",
        "Ascending",
        "DESC"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Ascending is the term for: In order from smallest to largest, or A to Z. (a) ORDER BY means The SQL keyword that sorts a query's results by one or more columns. (b) ASC means Ascending order: smallest first. This is the default for ORDER BY. (d) DESC means Descending order: largest first, written after a column in ORDER BY."
    },
    {
      "q": "Which term means: In order from largest to smallest, or Z to A.",
      "choices": [
        "ORDER BY",
        "ASC",
        "DESC",
        "Descending"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Descending is the term for: In order from largest to smallest, or Z to A. (a) ORDER BY means The SQL keyword that sorts a query's results by one or more columns. (b) ASC means Ascending order: smallest first. This is the default for ORDER BY. (c) DESC means Descending order: largest first, written after a column in ORDER BY."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — ORDER BY, LIMIT & Sorting Results: Quick Reference</h3>\n<p><strong>Core idea:</strong> Sort results with ORDER BY, smallest first and largest first.</p>\n<p><strong>Key terms:</strong> ORDER BY · ASC · DESC · LIMIT · OFFSET · Sorting · Ascending · Descending.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Sort results with ORDER BY, smallest first and largest first.</li>\n<li>Sort by more than one column.</li>\n<li>Use LIMIT to take only the first few rows.</li>\n</ul>\n<p><strong>Watch out:</strong> Test the WHERE as a SELECT before any UPDATE or DELETE, and back up before any big change.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
