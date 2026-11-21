// cmp105 - Module 6: SELECT: Asking for Data
module.exports = {
  "number": 6,
  "slug": "select-asking-for-data",
  "title": "SELECT: Asking for Data",
  "estTime": "3–4 hours",
  "objectives": [
    "Write a SELECT query that asks for chosen columns from a table.",
    "Explain what SELECT * does and why it should be used sparingly.",
    "Use a column alias to rename a result.",
    "Explain the order in which to write the parts of a query.",
    "Run a query and read its answer as a table."
  ],
  "sections": [
    {
      "heading": "Asking in SQL",
      "html": "<p>SELECT is how you ask a database for data. The simplest question is: <pre><code>SELECT name, city FROM customers;</code></pre> It says: from the customers table, show me the name and city columns, for every row. The answer comes back as a table with two columns and three rows: Maya, Detroit; Sam, Grand Rapids; Lee, Detroit. Every query in this course is built from this shape.</p>\n<p>SQL keywords are usually written in capitals — SELECT, FROM, WHERE — and table and column names in lower case. The database does not care about capitals, but people do: capitals make the keywords easy to spot. Every statement ends with a semicolon.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> SELECT names the columns, FROM names the table. That is the whole shape of a question.</div></p>\n"
    },
    {
      "heading": "Choosing Columns",
      "html": "<p>Ask for only the columns you need. <code>SELECT name FROM customers;</code> gives one column. <code>SELECT name, age FROM customers;</code> gives two. <code>SELECT * FROM customers;</code> gives every column — the star means “all columns”. The star is handy for a quick look, but in a real app it is wasteful: it fetches data nobody asked for, including facts that should stay private, and it breaks when someone adds a column.</p>\n<p>Get into the habit of naming the columns you want. It makes your queries faster, your answers clearer, and your apps safer.</p>\n"
    },
    {
      "heading": "Renaming With Aliases",
      "html": "<p>A column alias renames a column in the answer, without changing the table: <pre><code>SELECT name AS customer_name, age AS years_old FROM customers;</code></pre> The answer's headings become customer_name and years_old. Aliases are useful when a column name is unclear, when two tables have the same column name, or when the answer will be shown to a user who should see a friendly heading.</p>\n<p>The word AS is optional — <code>SELECT name customer_name</code> works — but writing AS makes the query easier to read. Readability is a feature: queries are read far more often than they are written.</p>\n"
    },
    {
      "heading": "Reading the Answer",
      "html": "<p>A query's answer is always a table: columns across the top, one row per matching row. If no rows match, the answer is an empty table — not an error. If the answer surprises you, read the query again slowly: which table, which columns, and (from the next module) which rows. Most wrong answers come from asking for the wrong table or the wrong columns.</p>\n<p>Try these three now, on the sample database: <pre><code>SELECT name FROM customers;\nSELECT name, city, age FROM customers;\nSELECT * FROM orders;</code></pre> Check each answer by hand against the tables in Module 2. If they match, you can ask a database a question — the core skill of this whole course.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>SELECT names the columns, FROM names the table, and the answer is a table.</li>\n<li>Name the columns you need; use * only for a quick look.</li>\n<li>AS renames a column in the answer, without changing the table.</li>\n<li>No matching rows gives an empty table, not an error.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Using SELECT * in a real app. It fetches data nobody asked for and breaks when columns change.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Forgetting the semicolon or the FROM. The query needs both.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "SELECT",
      "def": "The SQL keyword that asks a database for data from chosen columns."
    },
    {
      "term": "FROM",
      "def": "The SQL keyword that names the table a query reads from."
    },
    {
      "term": "Alias",
      "def": "A new name for a column in a query's answer, made with AS."
    },
    {
      "term": "Star",
      "def": "In SELECT *, the star means “all columns”."
    },
    {
      "term": "Keyword",
      "def": "A word with a special meaning in SQL, such as SELECT, FROM, or WHERE."
    },
    {
      "term": "Statement",
      "def": "One complete SQL instruction, ending with a semicolon."
    },
    {
      "term": "Semicolon",
      "def": "The character ; that ends an SQL statement."
    },
    {
      "term": "Result",
      "def": "The table a query returns: columns across the top, one row per match."
    },
    {
      "term": "Column",
      "def": "One fact about every row in a table, such as the name column or the price column."
    },
    {
      "term": "Table",
      "def": "One organised set of rows and columns inside a database, such as a customers table."
    },
    {
      "term": "Query",
      "def": "A question asked to a database in SQL, such as asking for all customers in Detroit."
    },
    {
      "term": "Row",
      "def": "One thing in a table, such as one customer or one order."
    },
    {
      "term": "Heading",
      "def": "The name shown at the top of a column in a query's answer."
    },
    {
      "term": "Case",
      "def": "Upper or lower case letters; SQL keywords are usually written in capitals for readability."
    },
    {
      "term": "Database",
      "def": "An organised store for facts an app needs to keep and find again."
    }
  ],
  "video": {
    "title": "SQL SELECT Tutorial   |¦| SQL Tutorial |¦| SQL for Beginners",
    "embedUrl": "https://www.youtube.com/embed/YufocuHbYZo",
    "note": "Watch the first SELECT queries and run each one yourself. Check the answer by hand before moving on.",
    "more": [
      {
        "title": "Learn Basic SQL in 15 Minutes | Business Intelligence For Beginners | SQL Tutorial For Beginners 1/3",
        "url": "https://www.youtube.com/watch?v=kbKty5ZVKMY"
      },
      {
        "title": "SQL - SELECT Statement - W3Schools.com",
        "url": "https://www.youtube.com/watch?v=af4LckivJT8"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “SELECT” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: SELECT — The SQL keyword that asks a database for data from chosen columns. Step 2: It matters because it is part of: Write a SELECT query that asks for chosen columns from a table. Step 3: An example from the module is the way select shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “FROM” and “Alias”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: FROM — The SQL keyword that names the table a query reads from. Step 2: Alias — A new name for a column in a query's answer, made with AS. Step 3: They differ because the first is about from while the second is about alias; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Explain what SELECT * does and why it should be used sparingly.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Explain what SELECT * does and why it should be used sparingly. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Star” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Star — In SELECT *, the star means “all columns”. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Keyword — A word with a special meaning in SQL, such as SELECT, FROM, or WHERE. Step 2: Statement — One complete SQL instruction, ending with a semicolon. Step 3: Semicolon — The character ; that ends an SQL statement. Step 4: FROM — The SQL keyword that names the table a query reads from. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Use a column alias to rename a result. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “SELECT” mean?",
      "choices": [
        "The SQL keyword that asks a database for data from chosen columns.",
        "The SQL keyword that names the table a query reads from.",
        "A new name for a column in a query's answer, made with AS.",
        "In SELECT *, the star means “all columns”."
      ],
      "answer": 0,
      "explanation": "Correct: (a). SELECT means: The SQL keyword that asks a database for data from chosen columns. (b) is the definition of FROM, not of SELECT. (c) is the definition of Alias, not of SELECT. (d) is the definition of Star, not of SELECT."
    },
    {
      "q": "What does the term “FROM” mean?",
      "choices": [
        "The SQL keyword that asks a database for data from chosen columns.",
        "The SQL keyword that names the table a query reads from.",
        "A new name for a column in a query's answer, made with AS.",
        "In SELECT *, the star means “all columns”."
      ],
      "answer": 1,
      "explanation": "Correct: (b). FROM means: The SQL keyword that names the table a query reads from. (a) is the definition of SELECT, not of FROM. (c) is the definition of Alias, not of FROM. (d) is the definition of Star, not of FROM."
    },
    {
      "q": "What does the term “Alias” mean?",
      "choices": [
        "The SQL keyword that asks a database for data from chosen columns.",
        "The SQL keyword that names the table a query reads from.",
        "A new name for a column in a query's answer, made with AS.",
        "In SELECT *, the star means “all columns”."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Alias means: A new name for a column in a query's answer, made with AS. (a) is the definition of SELECT, not of Alias. (b) is the definition of FROM, not of Alias. (d) is the definition of Star, not of Alias."
    },
    {
      "q": "What does the term “Star” mean?",
      "choices": [
        "The SQL keyword that asks a database for data from chosen columns.",
        "The SQL keyword that names the table a query reads from.",
        "A new name for a column in a query's answer, made with AS.",
        "In SELECT *, the star means “all columns”."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Star means: In SELECT *, the star means “all columns”. (a) is the definition of SELECT, not of Star. (b) is the definition of FROM, not of Star. (c) is the definition of Alias, not of Star."
    },
    {
      "q": "Which term means: A word with a special meaning in SQL, such as SELECT, FROM, or WHERE.",
      "choices": [
        "Keyword",
        "SELECT",
        "FROM",
        "Alias"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Keyword is the term for: A word with a special meaning in SQL, such as SELECT, FROM, or WHERE. (b) SELECT means The SQL keyword that asks a database for data from chosen columns. (c) FROM means The SQL keyword that names the table a query reads from. (d) Alias means A new name for a column in a query's answer, made with AS."
    },
    {
      "q": "Which term means: One complete SQL instruction, ending with a semicolon.",
      "choices": [
        "SELECT",
        "Statement",
        "FROM",
        "Alias"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Statement is the term for: One complete SQL instruction, ending with a semicolon. (a) SELECT means The SQL keyword that asks a database for data from chosen columns. (c) FROM means The SQL keyword that names the table a query reads from. (d) Alias means A new name for a column in a query's answer, made with AS."
    },
    {
      "q": "Which term means: The character ; that ends an SQL statement.",
      "choices": [
        "SELECT",
        "FROM",
        "Semicolon",
        "Alias"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Semicolon is the term for: The character ; that ends an SQL statement. (a) SELECT means The SQL keyword that asks a database for data from chosen columns. (b) FROM means The SQL keyword that names the table a query reads from. (d) Alias means A new name for a column in a query's answer, made with AS."
    },
    {
      "q": "Which term means: The table a query returns: columns across the top, one row per match.",
      "choices": [
        "SELECT",
        "FROM",
        "Alias",
        "Result"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Result is the term for: The table a query returns: columns across the top, one row per match. (a) SELECT means The SQL keyword that asks a database for data from chosen columns. (b) FROM means The SQL keyword that names the table a query reads from. (c) Alias means A new name for a column in a query's answer, made with AS."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — SELECT: Asking for Data: Quick Reference</h3>\n<p><strong>Core idea:</strong> Write a SELECT query that asks for chosen columns from a table.</p>\n<p><strong>Key terms:</strong> SELECT · FROM · Alias · Star · Keyword · Statement · Semicolon · Result.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Write a SELECT query that asks for chosen columns from a table.</li>\n<li>Explain what SELECT * does and why it should be used sparingly.</li>\n<li>Use a column alias to rename a result.</li>\n</ul>\n<p><strong>Watch out:</strong> Test the WHERE as a SELECT before any UPDATE or DELETE, and back up before any big change.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
