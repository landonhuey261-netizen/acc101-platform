// cmp105 - Module 9: INSERT, UPDATE & DELETE
module.exports = {
  "number": 9,
  "slug": "insert-update-delete",
  "title": "INSERT, UPDATE & DELETE",
  "estTime": "3–4 hours",
  "objectives": [
    "Add a new row with INSERT.",
    "Change rows with UPDATE and a WHERE clause.",
    "Remove rows with DELETE and a WHERE clause.",
    "Explain why UPDATE or DELETE without WHERE is dangerous.",
    "Explain what a transaction is and why it matters."
  ],
  "sections": [
    {
      "heading": "Adding Rows With INSERT",
      "html": "<p>INSERT adds a new row: <pre><code>INSERT INTO customers (name, city, age) VALUES ('Ana', 'Lansing', 30);</code></pre> Name the columns, then give one value for each, in the same order. The id is left out, because the database hands out the next id automatically. After this, the customers table has four rows, and Ana is id 4.</p>\n<p>If you leave a column out, the database fills it with its default value, or NULL if there is none. Always name the columns you are filling in — it makes the statement clear and keeps working if someone adds a column later.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> INSERT names the columns and gives one value for each, in the same order.</div></p>\n"
    },
    {
      "heading": "Changing Rows With UPDATE",
      "html": "<p>UPDATE changes rows that pass a test: <pre><code>UPDATE customers SET age = 29 WHERE name = 'Maya';</code></pre> Maya's age becomes 29, and nobody else changes. The WHERE is the whole safety of the statement: it says exactly which rows to change. Test the WHERE first as a SELECT — <code>SELECT name FROM customers WHERE name = 'Maya';</code> — and if it returns the rows you expect, the UPDATE will change exactly those rows.</p>\n<p>You can change more than one column at once: <code>SET city = 'Ann Arbor', age = 29</code>. And you can change a value based on itself: <code>SET age = age + 1</code> adds one to every row the WHERE selects. Useful, and dangerous without a WHERE.</p>\n"
    },
    {
      "heading": "Removing Rows With DELETE",
      "html": "<p>DELETE removes rows that pass a test: <pre><code>DELETE FROM orders WHERE id = 2;</code></pre> removes Maya's second order, and nothing else. Like UPDATE, its safety is entirely in the WHERE. And like UPDATE, you should test the WHERE as a SELECT first. In a real app, many teams never truly delete: they mark a row as deleted with a flag, so a mistake can be undone. That is called a soft delete.</p>\n<p>The most famous beginner disaster in databases is a missing WHERE: <code>DELETE FROM customers;</code> with no WHERE deletes every customer. <code>UPDATE customers SET age = 0;</code> with no WHERE sets every age to zero. Both run without complaint. The database does exactly what you asked — which is why you must ask carefully.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Test the WHERE as a SELECT first. An UPDATE or DELETE without WHERE touches every row.</div></p>\n"
    },
    {
      "heading": "Transactions: All or Nothing",
      "html": "<p>Sometimes a change is really several changes that must all happen or none: moving money from one account to another means taking it from one row and adding it to another. If the first half happens and the second fails, money has vanished. A transaction wraps the steps together: BEGIN, the changes, then COMMIT to keep them, or ROLLBACK to undo them all.</p>\n<p>In SQLite you write: <pre><code>BEGIN;\nUPDATE customers SET age = 29 WHERE name = 'Maya';\nCOMMIT;</code></pre> If anything goes wrong before COMMIT, ROLLBACK undoes every step. For a beginner the rule is simple: when one job needs two or more changes, wrap them in a transaction so they succeed together or fail together.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>INSERT adds a row; UPDATE changes rows; DELETE removes rows.</li>\n<li>Every UPDATE and DELETE needs a WHERE — test it as a SELECT first.</li>\n<li>A missing WHERE changes or deletes every row, without complaint.</li>\n<li>A transaction makes several changes succeed together or fail together.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Running UPDATE or DELETE without a WHERE. It touches every row.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Deleting for real when a soft delete (a deleted flag) would let you undo a mistake.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "INSERT",
      "def": "The SQL keyword that adds a new row to a table."
    },
    {
      "term": "UPDATE",
      "def": "The SQL keyword that changes values in rows that pass a WHERE test."
    },
    {
      "term": "DELETE",
      "def": "The SQL keyword that removes rows that pass a WHERE test."
    },
    {
      "term": "SET",
      "def": "The SQL keyword in UPDATE that says which columns to change and to what."
    },
    {
      "term": "VALUES",
      "def": "The SQL keyword in INSERT that gives the values for a new row."
    },
    {
      "term": "WHERE",
      "def": "The SQL keyword that filters rows, keeping only those that pass a test."
    },
    {
      "term": "Transaction",
      "def": "A group of changes that succeed together or fail together, wrapped in BEGIN and COMMIT."
    },
    {
      "term": "COMMIT",
      "def": "The SQL keyword that keeps all the changes in a transaction."
    },
    {
      "term": "ROLLBACK",
      "def": "The SQL keyword that undoes all the changes in a transaction."
    },
    {
      "term": "Soft delete",
      "def": "Marking a row as deleted with a flag instead of removing it, so a mistake can be undone."
    },
    {
      "term": "Default",
      "def": "The value a column gets automatically when INSERT does not give one."
    },
    {
      "term": "Auto-increment",
      "def": "Letting the database hand out the next id number automatically for each new row."
    },
    {
      "term": "Row",
      "def": "One thing in a table, such as one customer or one order."
    },
    {
      "term": "Statement",
      "def": "One complete SQL instruction, ending with a semicolon."
    },
    {
      "term": "Backup",
      "def": "A copy of a database kept safe so the data can be restored if something goes wrong."
    }
  ],
  "video": {
    "title": "SQL INSERT, UPDATE, DELETE Explained | Beginner Guide to Modifying Data",
    "embedUrl": "https://www.youtube.com/embed/t9y5g2NUQL0",
    "note": "Watch INSERT, UPDATE, and DELETE with a real table, and notice the safety step the teacher takes before every UPDATE and DELETE.",
    "more": [
      {
        "title": "SQL Query Basics: Insert, Select, Update, and Delete",
        "url": "https://www.youtube.com/watch?v=QX1eOjAZzws"
      },
      {
        "title": "SQL Data Manipulation: INSERT, UPDATE, DELETE Explained - SQL Tutorial for Beginners",
        "url": "https://www.youtube.com/watch?v=YOjy9rpneNY"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “INSERT” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: INSERT — The SQL keyword that adds a new row to a table. Step 2: It matters because it is part of: Add a new row with INSERT. Step 3: An example from the module is the way insert shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “UPDATE” and “DELETE”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: UPDATE — The SQL keyword that changes values in rows that pass a WHERE test. Step 2: DELETE — The SQL keyword that removes rows that pass a WHERE test. Step 3: They differ because the first is about update while the second is about delete; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Change rows with UPDATE and a WHERE clause.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Change rows with UPDATE and a WHERE clause. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “SET” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: SET — The SQL keyword in UPDATE that says which columns to change and to what. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: VALUES — The SQL keyword in INSERT that gives the values for a new row. Step 2: WHERE — The SQL keyword that filters rows, keeping only those that pass a test. Step 3: Transaction — A group of changes that succeed together or fail together, wrapped in BEGIN and COMMIT. Step 4: UPDATE — The SQL keyword that changes values in rows that pass a WHERE test. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Remove rows with DELETE and a WHERE clause. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “INSERT” mean?",
      "choices": [
        "The SQL keyword that adds a new row to a table.",
        "The SQL keyword that changes values in rows that pass a WHERE test.",
        "The SQL keyword that removes rows that pass a WHERE test.",
        "The SQL keyword in UPDATE that says which columns to change and to what."
      ],
      "answer": 0,
      "explanation": "Correct: (a). INSERT means: The SQL keyword that adds a new row to a table. (b) is the definition of UPDATE, not of INSERT. (c) is the definition of DELETE, not of INSERT. (d) is the definition of SET, not of INSERT."
    },
    {
      "q": "What does the term “UPDATE” mean?",
      "choices": [
        "The SQL keyword that adds a new row to a table.",
        "The SQL keyword that changes values in rows that pass a WHERE test.",
        "The SQL keyword that removes rows that pass a WHERE test.",
        "The SQL keyword in UPDATE that says which columns to change and to what."
      ],
      "answer": 1,
      "explanation": "Correct: (b). UPDATE means: The SQL keyword that changes values in rows that pass a WHERE test. (a) is the definition of INSERT, not of UPDATE. (c) is the definition of DELETE, not of UPDATE. (d) is the definition of SET, not of UPDATE."
    },
    {
      "q": "What does the term “DELETE” mean?",
      "choices": [
        "The SQL keyword that adds a new row to a table.",
        "The SQL keyword that changes values in rows that pass a WHERE test.",
        "The SQL keyword that removes rows that pass a WHERE test.",
        "The SQL keyword in UPDATE that says which columns to change and to what."
      ],
      "answer": 2,
      "explanation": "Correct: (c). DELETE means: The SQL keyword that removes rows that pass a WHERE test. (a) is the definition of INSERT, not of DELETE. (b) is the definition of UPDATE, not of DELETE. (d) is the definition of SET, not of DELETE."
    },
    {
      "q": "What does the term “SET” mean?",
      "choices": [
        "The SQL keyword that adds a new row to a table.",
        "The SQL keyword that changes values in rows that pass a WHERE test.",
        "The SQL keyword that removes rows that pass a WHERE test.",
        "The SQL keyword in UPDATE that says which columns to change and to what."
      ],
      "answer": 3,
      "explanation": "Correct: (d). SET means: The SQL keyword in UPDATE that says which columns to change and to what. (a) is the definition of INSERT, not of SET. (b) is the definition of UPDATE, not of SET. (c) is the definition of DELETE, not of SET."
    },
    {
      "q": "Which term means: The SQL keyword in INSERT that gives the values for a new row.",
      "choices": [
        "VALUES",
        "INSERT",
        "UPDATE",
        "DELETE"
      ],
      "answer": 0,
      "explanation": "Correct: (a). VALUES is the term for: The SQL keyword in INSERT that gives the values for a new row. (b) INSERT means The SQL keyword that adds a new row to a table. (c) UPDATE means The SQL keyword that changes values in rows that pass a WHERE test. (d) DELETE means The SQL keyword that removes rows that pass a WHERE test."
    },
    {
      "q": "Which term means: The SQL keyword that filters rows, keeping only those that pass a test.",
      "choices": [
        "INSERT",
        "WHERE",
        "UPDATE",
        "DELETE"
      ],
      "answer": 1,
      "explanation": "Correct: (b). WHERE is the term for: The SQL keyword that filters rows, keeping only those that pass a test. (a) INSERT means The SQL keyword that adds a new row to a table. (c) UPDATE means The SQL keyword that changes values in rows that pass a WHERE test. (d) DELETE means The SQL keyword that removes rows that pass a WHERE test."
    },
    {
      "q": "Which term means: A group of changes that succeed together or fail together, wrapped in BEGIN and COMMIT.",
      "choices": [
        "INSERT",
        "UPDATE",
        "Transaction",
        "DELETE"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Transaction is the term for: A group of changes that succeed together or fail together, wrapped in BEGIN and COMMIT. (a) INSERT means The SQL keyword that adds a new row to a table. (b) UPDATE means The SQL keyword that changes values in rows that pass a WHERE test. (d) DELETE means The SQL keyword that removes rows that pass a WHERE test."
    },
    {
      "q": "Which term means: The SQL keyword that keeps all the changes in a transaction.",
      "choices": [
        "INSERT",
        "UPDATE",
        "DELETE",
        "COMMIT"
      ],
      "answer": 3,
      "explanation": "Correct: (d). COMMIT is the term for: The SQL keyword that keeps all the changes in a transaction. (a) INSERT means The SQL keyword that adds a new row to a table. (b) UPDATE means The SQL keyword that changes values in rows that pass a WHERE test. (c) DELETE means The SQL keyword that removes rows that pass a WHERE test."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — INSERT, UPDATE & DELETE: Quick Reference</h3>\n<p><strong>Core idea:</strong> Add a new row with INSERT.</p>\n<p><strong>Key terms:</strong> INSERT · UPDATE · DELETE · SET · VALUES · WHERE · Transaction · COMMIT.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Add a new row with INSERT.</li>\n<li>Change rows with UPDATE and a WHERE clause.</li>\n<li>Remove rows with DELETE and a WHERE clause.</li>\n</ul>\n<p><strong>Watch out:</strong> Test the WHERE as a SELECT before any UPDATE or DELETE, and back up before any big change.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
