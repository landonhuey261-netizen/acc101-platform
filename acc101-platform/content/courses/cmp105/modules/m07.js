// cmp105 - Module 7: WHERE: Filtering Rows
module.exports = {
  "number": 7,
  "slug": "where-filtering-rows",
  "title": "WHERE: Filtering Rows",
  "estTime": "3–4 hours",
  "objectives": [
    "Use WHERE to ask for only the rows you need.",
    "Compare values with =, <, >, <=, >=, and <> (not equal).",
    "Combine conditions with AND, OR, and NOT.",
    "Use IN, BETWEEN, and LIKE to match sets, ranges, and patterns.",
    "Explain why a missing WHERE can change or delete everything."
  ],
  "sections": [
    {
      "heading": "Only the Rows You Need",
      "html": "<p>SELECT without WHERE returns every row. WHERE adds a test each row must pass: <pre><code>SELECT name FROM customers WHERE city = 'Detroit';</code></pre> The answer is Maya and Lee — the two customers whose city is Detroit. Sam is left out, because Grand Rapids is not Detroit. Text values go in single quotes; numbers do not: <code>WHERE age &gt; 30</code> needs no quotes.</p>\n<p>WHERE is a yes/no question asked about every row, one at a time. The rows that answer yes come back; the rows that answer no do not. That is all filtering is.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> WHERE asks a yes/no question about every row. Only the yes rows come back.</div></p>\n"
    },
    {
      "heading": "Comparing Values",
      "html": "<p>The comparisons are: = (equal), &lt;&gt; or != (not equal), &lt; (less than), &gt; (greater than), &lt;= and &gt;= (less or greater, including equal). So <code>WHERE age &gt;= 35</code> returns Sam (41) and Lee (35), but not Maya (28). A common beginner slip is writing = when you mean &gt;=, and wondering why a row on the boundary is missing.</p>\n<p>Watch out for NULL. A row whose value is NULL fails every comparison, even <code>= NULL</code>, because NULL means “we do not know”, and we do not know whether an unknown equals anything. To find NULLs you must write <code>WHERE phone IS NULL</code>. That one rule surprises almost everyone once.</p>\n"
    },
    {
      "heading": "Combining Conditions",
      "html": "<p>AND needs both parts true; OR needs at least one true; NOT flips a test. <pre><code>SELECT name FROM customers WHERE city = 'Detroit' AND age &gt; 30;</code></pre> returns only Lee: Maya is in Detroit but is 28, Sam is over 30 but not in Detroit. With OR, <code>WHERE city = 'Detroit' OR age &gt; 40</code> returns all three — Maya and Lee for the city, Sam for the age.</p>\n<p>Brackets control the order when you mix AND and OR, just as in maths: <code>WHERE city = 'Detroit' AND (age &gt; 30 OR age &lt; 20)</code>. Without brackets, AND is checked first, which may not be what you meant. When in doubt, add brackets.</p>\n"
    },
    {
      "heading": "IN, BETWEEN, and LIKE",
      "html": "<p>IN tests against a list: <code>WHERE city IN ('Detroit', 'Chicago')</code> is a tidy way of writing two ORs. BETWEEN tests a range: <code>WHERE age BETWEEN 30 AND 40</code> returns Lee (35) — and note that BETWEEN includes both ends. LIKE tests a pattern with % meaning “any characters”: <code>WHERE name LIKE 'M%'</code> returns Maya, and <code>WHERE name LIKE '%a%'</code> returns Maya and Sam.</p>\n<p>LIKE is handy for searching names, but it is slow on huge tables and it matches more than you expect — '%a%' matches any name containing an a anywhere. Use it for searching, not for exact matches, where = is the right tool.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>WHERE tests every row and returns only the ones that pass.</li>\n<li>=, <>, <, >, <=, >= compare values; AND, OR, NOT combine tests.</li>\n<li>IN tests a list, BETWEEN tests a range including both ends, LIKE tests a pattern with %.</li>\n<li>NULL fails every comparison; use IS NULL to find it.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Writing WHERE age = 30 when you mean >= 30 and losing the boundary row.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Forgetting WHERE on an UPDATE or DELETE. The next module shows why that is dangerous.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "WHERE",
      "def": "The SQL keyword that filters rows, keeping only those that pass a test."
    },
    {
      "term": "Condition",
      "def": "A test in a WHERE clause, such as city = 'Detroit' or age > 30."
    },
    {
      "term": "AND",
      "def": "Combines two tests: both must be true for the row to pass."
    },
    {
      "term": "OR",
      "def": "Combines two tests: at least one must be true for the row to pass."
    },
    {
      "term": "NOT",
      "def": "Flips a test: true becomes false and false becomes true."
    },
    {
      "term": "IN",
      "def": "Tests whether a value is in a list, such as city IN ('Detroit', 'Chicago')."
    },
    {
      "term": "BETWEEN",
      "def": "Tests whether a value is in a range, including both ends."
    },
    {
      "term": "LIKE",
      "def": "Tests whether text matches a pattern, with % meaning any characters."
    },
    {
      "term": "NULL",
      "def": "A database value meaning “we do not know”; not zero and not a blank word."
    },
    {
      "term": "IS NULL",
      "def": "The test that finds rows whose value is NULL."
    },
    {
      "term": "Comparison",
      "def": "An operator such as =, <, or > that compares two values."
    },
    {
      "term": "Pattern",
      "def": "A shape of text to match with LIKE, such as 'M%' for names starting with M."
    },
    {
      "term": "Quote",
      "def": "Single quote marks around text values in SQL, such as 'Detroit'."
    },
    {
      "term": "Filter",
      "def": "Keeping only the rows that pass a test, and leaving the rest out."
    },
    {
      "term": "Row",
      "def": "One thing in a table, such as one customer or one order."
    }
  ],
  "video": {
    "title": "How to Write Basic SQL Statements (SELECT, FROM)",
    "embedUrl": "https://www.youtube.com/embed/YfTDBA45PHk",
    "note": "Watch WHERE in action and try each comparison yourself. Predict the answer before you run the query — that is how the skill sticks.",
    "more": [
      {
        "title": "SQL SELECT and WHERE Tutorial for Beginners | Data Skills",
        "url": "https://www.youtube.com/watch?v=u_pol8dsIv4"
      },
      {
        "title": "Select Statement in MySQL | Beginner MySQL Series",
        "url": "https://www.youtube.com/watch?v=HYD8KjPB9F8"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “WHERE” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: WHERE — The SQL keyword that filters rows, keeping only those that pass a test. Step 2: It matters because it is part of: Use WHERE to ask for only the rows you need. Step 3: An example from the module is the way where shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Condition” and “AND”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Condition — A test in a WHERE clause, such as city = 'Detroit' or age > 30. Step 2: AND — Combines two tests: both must be true for the row to pass. Step 3: They differ because the first is about condition while the second is about and; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Compare values with =, <, >, <=, >=, and <> (not equal).” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Compare values with =, <, >, <=, >=, and <> (not equal). Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “OR” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: OR — Combines two tests: at least one must be true for the row to pass. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: NOT — Flips a test: true becomes false and false becomes true. Step 2: IN — Tests whether a value is in a list, such as city IN ('Detroit', 'Chicago'). Step 3: BETWEEN — Tests whether a value is in a range, including both ends. Step 4: Condition — A test in a WHERE clause, such as city = 'Detroit' or age > 30. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Combine conditions with AND, OR, and NOT. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “WHERE” mean?",
      "choices": [
        "The SQL keyword that filters rows, keeping only those that pass a test.",
        "A test in a WHERE clause, such as city = 'Detroit' or age > 30.",
        "Combines two tests: both must be true for the row to pass.",
        "Combines two tests: at least one must be true for the row to pass."
      ],
      "answer": 0,
      "explanation": "Correct: (a). WHERE means: The SQL keyword that filters rows, keeping only those that pass a test. (b) is the definition of Condition, not of WHERE. (c) is the definition of AND, not of WHERE. (d) is the definition of OR, not of WHERE."
    },
    {
      "q": "What does the term “Condition” mean?",
      "choices": [
        "The SQL keyword that filters rows, keeping only those that pass a test.",
        "A test in a WHERE clause, such as city = 'Detroit' or age > 30.",
        "Combines two tests: both must be true for the row to pass.",
        "Combines two tests: at least one must be true for the row to pass."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Condition means: A test in a WHERE clause, such as city = 'Detroit' or age > 30. (a) is the definition of WHERE, not of Condition. (c) is the definition of AND, not of Condition. (d) is the definition of OR, not of Condition."
    },
    {
      "q": "What does the term “AND” mean?",
      "choices": [
        "The SQL keyword that filters rows, keeping only those that pass a test.",
        "A test in a WHERE clause, such as city = 'Detroit' or age > 30.",
        "Combines two tests: both must be true for the row to pass.",
        "Combines two tests: at least one must be true for the row to pass."
      ],
      "answer": 2,
      "explanation": "Correct: (c). AND means: Combines two tests: both must be true for the row to pass. (a) is the definition of WHERE, not of AND. (b) is the definition of Condition, not of AND. (d) is the definition of OR, not of AND."
    },
    {
      "q": "What does the term “OR” mean?",
      "choices": [
        "The SQL keyword that filters rows, keeping only those that pass a test.",
        "A test in a WHERE clause, such as city = 'Detroit' or age > 30.",
        "Combines two tests: both must be true for the row to pass.",
        "Combines two tests: at least one must be true for the row to pass."
      ],
      "answer": 3,
      "explanation": "Correct: (d). OR means: Combines two tests: at least one must be true for the row to pass. (a) is the definition of WHERE, not of OR. (b) is the definition of Condition, not of OR. (c) is the definition of AND, not of OR."
    },
    {
      "q": "Which term means: Flips a test: true becomes false and false becomes true.",
      "choices": [
        "NOT",
        "WHERE",
        "Condition",
        "AND"
      ],
      "answer": 0,
      "explanation": "Correct: (a). NOT is the term for: Flips a test: true becomes false and false becomes true. (b) WHERE means The SQL keyword that filters rows, keeping only those that pass a test. (c) Condition means A test in a WHERE clause, such as city = 'Detroit' or age > 30. (d) AND means Combines two tests: both must be true for the row to pass."
    },
    {
      "q": "Which term means: Tests whether a value is in a list, such as city IN ('Detroit', 'Chicago').",
      "choices": [
        "WHERE",
        "IN",
        "Condition",
        "AND"
      ],
      "answer": 1,
      "explanation": "Correct: (b). IN is the term for: Tests whether a value is in a list, such as city IN ('Detroit', 'Chicago'). (a) WHERE means The SQL keyword that filters rows, keeping only those that pass a test. (c) Condition means A test in a WHERE clause, such as city = 'Detroit' or age > 30. (d) AND means Combines two tests: both must be true for the row to pass."
    },
    {
      "q": "Which term means: Tests whether a value is in a range, including both ends.",
      "choices": [
        "WHERE",
        "Condition",
        "BETWEEN",
        "AND"
      ],
      "answer": 2,
      "explanation": "Correct: (c). BETWEEN is the term for: Tests whether a value is in a range, including both ends. (a) WHERE means The SQL keyword that filters rows, keeping only those that pass a test. (b) Condition means A test in a WHERE clause, such as city = 'Detroit' or age > 30. (d) AND means Combines two tests: both must be true for the row to pass."
    },
    {
      "q": "Which term means: Tests whether text matches a pattern, with % meaning any characters.",
      "choices": [
        "WHERE",
        "Condition",
        "AND",
        "LIKE"
      ],
      "answer": 3,
      "explanation": "Correct: (d). LIKE is the term for: Tests whether text matches a pattern, with % meaning any characters. (a) WHERE means The SQL keyword that filters rows, keeping only those that pass a test. (b) Condition means A test in a WHERE clause, such as city = 'Detroit' or age > 30. (c) AND means Combines two tests: both must be true for the row to pass."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — WHERE: Filtering Rows: Quick Reference</h3>\n<p><strong>Core idea:</strong> Use WHERE to ask for only the rows you need.</p>\n<p><strong>Key terms:</strong> WHERE · Condition · AND · OR · NOT · IN · BETWEEN · LIKE.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Use WHERE to ask for only the rows you need.</li>\n<li>Compare values with =, <, >, <=, >=, and <> (not equal).</li>\n<li>Combine conditions with AND, OR, and NOT.</li>\n</ul>\n<p><strong>Watch out:</strong> Test the WHERE as a SELECT before any UPDATE or DELETE, and back up before any big change.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
