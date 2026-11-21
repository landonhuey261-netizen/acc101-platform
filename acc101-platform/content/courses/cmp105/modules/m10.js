// cmp105 - Module 10: JOINs: Combining Tables
module.exports = {
  "number": 10,
  "slug": "joins-combining-tables",
  "title": "JOINs: Combining Tables",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a JOIN does in plain words.",
    "Write an INNER JOIN that matches orders to their customers.",
    "Explain what a LEFT JOIN keeps that an INNER JOIN drops.",
    "Explain when to use a RIGHT JOIN or a FULL JOIN.",
    "Read a JOIN query and say what its answer will look like."
  ],
  "sections": [
    {
      "heading": "One Question, Two Tables",
      "html": "<p>So far every question has read one table. Real questions need two: “show each order with the name of the customer who placed it”. The order's total is in the orders table; the customer's name is in the customers table. A JOIN combines the tables for one question, matching rows by the foreign key: <pre><code>SELECT customers.name, orders.total\nFROM orders\nINNER JOIN customers ON orders.customer_id = customers.id;</code></pre> The answer is three rows: Maya 24.50, Maya 10.00, Sam 99.99. The ON clause says how the rows match.</p>\n<p>The JOIN happens in the FROM part of the query, before WHERE. Read it as: “from orders, joined to customers where the order's customer_id equals the customer's id”. The foreign key you learned in Module 4 is the thread the JOIN follows.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> A JOIN combines tables for one question, matching rows where the foreign key equals the primary key.</div></p>\n"
    },
    {
      "heading": "INNER JOIN: Only the Matches",
      "html": "<p>INNER JOIN keeps only rows that match on both sides. If a customer has placed no orders, they do not appear in the answer, because there is no order row to match them. If an order had a customer_id with no customer (which the foreign key rule should prevent), it would not appear either. INNER JOIN is the default and the commonest join: use it when you only want rows that have a match.</p>\n<p>In the sample data, every order has a customer and Maya and Sam both have orders, so INNER JOIN returns all three orders. Add a customer with no orders, and they vanish from the answer — which is exactly the behaviour Module 10's next section fixes.</p>\n"
    },
    {
      "heading": "LEFT JOIN: Keep Everyone on the Left",
      "html": "<p>LEFT JOIN keeps every row from the left table (the one named first), even if it has no match: <pre><code>SELECT customers.name, orders.total\nFROM customers\nLEFT JOIN orders ON orders.customer_id = customers.id;</code></pre> Now a customer with no orders still appears, with NULL for the total. The left side is never dropped; the right side shows NULL where there is no match.</p>\n<p>Use LEFT JOIN when the question is “show me all customers, and their orders if they have any”. Use INNER JOIN when the question is “show me orders with their customers”. The difference is one word, and it changes the answer completely — so read the question carefully before choosing.</p>\n"
    },
    {
      "heading": "RIGHT, FULL, and Self Joins",
      "html": "<p>RIGHT JOIN is the mirror of LEFT JOIN: it keeps every row from the right table. Most developers simply swap the tables and use LEFT JOIN instead, which is why you will rarely see RIGHT JOIN in real code. FULL JOIN keeps every row from both sides, with NULLs wherever a match is missing; SQLite does not support FULL JOIN, but you can build it from two LEFT JOINs if you ever need it.</p>\n<p>A self join joins a table to itself — for example, an employees table where each employee has a manager_id pointing at another employee in the same table. It sounds odd, but it answers “who is each person's manager?” in one query. You will not need it often, but now you know it exists.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>A JOIN combines tables, matching rows where the foreign key equals the primary key.</li>\n<li>INNER JOIN keeps only rows with a match on both sides.</li>\n<li>LEFT JOIN keeps every row from the left table, with NULL where there is no match.</li>\n<li>Read the question first: “all customers” means LEFT JOIN; “orders with customers” means INNER JOIN.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Using INNER JOIN when the question asks for everyone, and silently dropping people with no orders.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Forgetting the ON clause. A JOIN without ON matches every row to every row.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "JOIN",
      "def": "The SQL keyword that combines two tables in one query, matching rows by a key."
    },
    {
      "term": "INNER JOIN",
      "def": "A join that keeps only rows with a match on both sides."
    },
    {
      "term": "LEFT JOIN",
      "def": "A join that keeps every row from the left table, with NULL where there is no match."
    },
    {
      "term": "RIGHT JOIN",
      "def": "A join that keeps every row from the right table; rarely used, as tables can be swapped."
    },
    {
      "term": "FULL JOIN",
      "def": "A join that keeps every row from both tables, with NULLs where a match is missing."
    },
    {
      "term": "ON",
      "def": "The SQL keyword in a JOIN that says how rows match, such as orders.customer_id = customers.id."
    },
    {
      "term": "Foreign key",
      "def": "A column holding another table's primary key, linking the two tables."
    },
    {
      "term": "Primary key",
      "def": "The column that tells every row apart; unique for every row and never empty."
    },
    {
      "term": "Self join",
      "def": "Joining a table to itself, such as employees to their managers in the same table."
    },
    {
      "term": "Match",
      "def": "Two rows that belong together because the foreign key equals the primary key."
    },
    {
      "term": "NULL",
      "def": "A database value meaning “we do not know”; not zero and not a blank word."
    },
    {
      "term": "Alias",
      "def": "A new name for a column in a query's answer, made with AS."
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
      "term": "Result",
      "def": "The table a query returns: columns across the top, one row per match."
    }
  ],
  "video": {
    "title": "How to Join Tables in SQL | Clearly Explained | Beginners Start Here!",
    "embedUrl": "https://www.youtube.com/embed/FjxtntY5sO0",
    "note": "Watch joins drawn as matching rows, then run the INNER JOIN and the LEFT JOIN on the sample data and compare the answers.",
    "more": [
      {
        "title": "Learn MySQL joins in 5 minutes!",
        "url": "https://www.youtube.com/watch?v=G3lJAxg1cy8"
      },
      {
        "title": "6 SQL Joins you MUST know! (Animated + Practice)",
        "url": "https://www.youtube.com/watch?v=Yh4CrPHVBdE"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “JOIN” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: JOIN — The SQL keyword that combines two tables in one query, matching rows by a key. Step 2: It matters because it is part of: Explain what a JOIN does in plain words. Step 3: An example from the module is the way join shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “INNER JOIN” and “LEFT JOIN”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: INNER JOIN — A join that keeps only rows with a match on both sides. Step 2: LEFT JOIN — A join that keeps every row from the left table, with NULL where there is no match. Step 3: They differ because the first is about inner join while the second is about left join; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Write an INNER JOIN that matches orders to their customers.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Write an INNER JOIN that matches orders to their customers. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “RIGHT JOIN” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: RIGHT JOIN — A join that keeps every row from the right table; rarely used, as tables can be swapped. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: FULL JOIN — A join that keeps every row from both tables, with NULLs where a match is missing. Step 2: ON — The SQL keyword in a JOIN that says how rows match, such as orders.customer_id = customers.id. Step 3: Foreign key — A column holding another table's primary key, linking the two tables. Step 4: INNER JOIN — A join that keeps only rows with a match on both sides. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain what a LEFT JOIN keeps that an INNER JOIN drops. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “JOIN” mean?",
      "choices": [
        "The SQL keyword that combines two tables in one query, matching rows by a key.",
        "A join that keeps only rows with a match on both sides.",
        "A join that keeps every row from the left table, with NULL where there is no match.",
        "A join that keeps every row from the right table; rarely used, as tables can be swapped."
      ],
      "answer": 0,
      "explanation": "Correct: (a). JOIN means: The SQL keyword that combines two tables in one query, matching rows by a key. (b) is the definition of INNER JOIN, not of JOIN. (c) is the definition of LEFT JOIN, not of JOIN. (d) is the definition of RIGHT JOIN, not of JOIN."
    },
    {
      "q": "What does the term “INNER JOIN” mean?",
      "choices": [
        "The SQL keyword that combines two tables in one query, matching rows by a key.",
        "A join that keeps only rows with a match on both sides.",
        "A join that keeps every row from the left table, with NULL where there is no match.",
        "A join that keeps every row from the right table; rarely used, as tables can be swapped."
      ],
      "answer": 1,
      "explanation": "Correct: (b). INNER JOIN means: A join that keeps only rows with a match on both sides. (a) is the definition of JOIN, not of INNER JOIN. (c) is the definition of LEFT JOIN, not of INNER JOIN. (d) is the definition of RIGHT JOIN, not of INNER JOIN."
    },
    {
      "q": "What does the term “LEFT JOIN” mean?",
      "choices": [
        "The SQL keyword that combines two tables in one query, matching rows by a key.",
        "A join that keeps only rows with a match on both sides.",
        "A join that keeps every row from the left table, with NULL where there is no match.",
        "A join that keeps every row from the right table; rarely used, as tables can be swapped."
      ],
      "answer": 2,
      "explanation": "Correct: (c). LEFT JOIN means: A join that keeps every row from the left table, with NULL where there is no match. (a) is the definition of JOIN, not of LEFT JOIN. (b) is the definition of INNER JOIN, not of LEFT JOIN. (d) is the definition of RIGHT JOIN, not of LEFT JOIN."
    },
    {
      "q": "What does the term “RIGHT JOIN” mean?",
      "choices": [
        "The SQL keyword that combines two tables in one query, matching rows by a key.",
        "A join that keeps only rows with a match on both sides.",
        "A join that keeps every row from the left table, with NULL where there is no match.",
        "A join that keeps every row from the right table; rarely used, as tables can be swapped."
      ],
      "answer": 3,
      "explanation": "Correct: (d). RIGHT JOIN means: A join that keeps every row from the right table; rarely used, as tables can be swapped. (a) is the definition of JOIN, not of RIGHT JOIN. (b) is the definition of INNER JOIN, not of RIGHT JOIN. (c) is the definition of LEFT JOIN, not of RIGHT JOIN."
    },
    {
      "q": "Which term means: A join that keeps every row from both tables, with NULLs where a match is missing.",
      "choices": [
        "FULL JOIN",
        "JOIN",
        "INNER JOIN",
        "LEFT JOIN"
      ],
      "answer": 0,
      "explanation": "Correct: (a). FULL JOIN is the term for: A join that keeps every row from both tables, with NULLs where a match is missing. (b) JOIN means The SQL keyword that combines two tables in one query, matching rows by a key. (c) INNER JOIN means A join that keeps only rows with a match on both sides. (d) LEFT JOIN means A join that keeps every row from the left table, with NULL where there is no match."
    },
    {
      "q": "Which term means: The SQL keyword in a JOIN that says how rows match, such as orders.customer_id = customers.id.",
      "choices": [
        "JOIN",
        "ON",
        "INNER JOIN",
        "LEFT JOIN"
      ],
      "answer": 1,
      "explanation": "Correct: (b). ON is the term for: The SQL keyword in a JOIN that says how rows match, such as orders.customer_id = customers.id. (a) JOIN means The SQL keyword that combines two tables in one query, matching rows by a key. (c) INNER JOIN means A join that keeps only rows with a match on both sides. (d) LEFT JOIN means A join that keeps every row from the left table, with NULL where there is no match."
    },
    {
      "q": "Which term means: A column holding another table's primary key, linking the two tables.",
      "choices": [
        "JOIN",
        "INNER JOIN",
        "Foreign key",
        "LEFT JOIN"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Foreign key is the term for: A column holding another table's primary key, linking the two tables. (a) JOIN means The SQL keyword that combines two tables in one query, matching rows by a key. (b) INNER JOIN means A join that keeps only rows with a match on both sides. (d) LEFT JOIN means A join that keeps every row from the left table, with NULL where there is no match."
    },
    {
      "q": "Which term means: The column that tells every row apart; unique for every row and never empty.",
      "choices": [
        "JOIN",
        "INNER JOIN",
        "LEFT JOIN",
        "Primary key"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Primary key is the term for: The column that tells every row apart; unique for every row and never empty. (a) JOIN means The SQL keyword that combines two tables in one query, matching rows by a key. (b) INNER JOIN means A join that keeps only rows with a match on both sides. (c) LEFT JOIN means A join that keeps every row from the left table, with NULL where there is no match."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — JOINs: Combining Tables: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a JOIN does in plain words.</p>\n<p><strong>Key terms:</strong> JOIN · INNER JOIN · LEFT JOIN · RIGHT JOIN · FULL JOIN · ON · Foreign key · Primary key.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a JOIN does in plain words.</li>\n<li>Write an INNER JOIN that matches orders to their customers.</li>\n<li>Explain what a LEFT JOIN keeps that an INNER JOIN drops.</li>\n</ul>\n<p><strong>Watch out:</strong> Test the WHERE as a SELECT before any UPDATE or DELETE, and back up before any big change.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
