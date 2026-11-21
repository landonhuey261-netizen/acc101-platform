// cmp105 - Module 4: Primary Keys & Foreign Keys
module.exports = {
  "number": 4,
  "slug": "primary-and-foreign-keys",
  "title": "Primary Keys & Foreign Keys",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a primary key is and why every table needs one.",
    "Explain what a foreign key is and what it links to.",
    "Tell a primary key from a foreign key in a table.",
    "Explain why a name is a bad primary key.",
    "Describe what happens when a foreign key points at a row that does not exist."
  ],
  "sections": [
    {
      "heading": "Every Row Needs a Label",
      "html": "<p>A primary key is the column — or columns — that tells every row apart. In a customers table it is usually an id number: 1, 2, 3, and so on. No two rows share the same primary key, and it is never empty. It is the row's label, and every other table that needs to mention this row will use that label, not the name.</p>\n<p>The database enforces it: try to add a second row with id 1, and the database refuses. That refusal is the database protecting you. Without a primary key, two customers both called Lee would be impossible to tell apart, and an order could not say which Lee it belonged to.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> A primary key tells every row apart. No two rows share it, and it is never empty.</div></p>\n"
    },
    {
      "heading": "Why Not Use the Name?",
      "html": "<p>A name feels like a natural label, but it fails in three ways. Names repeat: two customers can both be called Lee. Names change: a person marries and takes a new name, and every link to the old name breaks. And names are long and messy to type. An id number never repeats, never needs to change, and is short. That is why databases use id numbers, not names, as primary keys.</p>\n<p>The same rule applies to products, orders, and students: give each row its own id number, and let the name be an ordinary fact in a column. The id is for the database; the name is for people.</p>\n"
    },
    {
      "heading": "Foreign Keys: The Links Between Tables",
      "html": "<p>A foreign key is a column in one table that holds the primary key of a row in another table. An orders table has a customer_id column: each order's customer_id is the id of the customer who placed it. Order 1 has customer_id 1, which means “this order belongs to Maya”. The link is just a number, but it joins the two tables together.</p>\n<p>Try it with the sample tables: <pre><code>SELECT id, name FROM customers;\nSELECT id, customer_id, total FROM orders;</code></pre> Order 1 (customer_id 1, total 24.50) belongs to Maya; order 3 (customer_id 2, total 99.99) belongs to Sam. The foreign key is the thread that ties an order to its customer. Module 10 shows how to follow that thread with a JOIN.</p>\n"
    },
    {
      "heading": "What the Database Checks",
      "html": "<p>A foreign key is also a rule the database enforces. You cannot add an order with customer_id 99 if there is no customer 99 — the database refuses, because the order would point at nobody. You cannot delete a customer who still has orders without deciding what happens to those orders first. These rules stop the database filling up with links to nowhere.</p>\n<p>In SQLite, foreign key checking must be switched on with <code>PRAGMA foreign_keys = ON;</code> before it is enforced. In other databases it is on by default. Either way, the idea is the same: a link must always point at a real row.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>A primary key is unique for every row and never empty — usually an id number.</li>\n<li>Names make bad primary keys: they repeat and they change.</li>\n<li>A foreign key holds another table's primary key, linking the tables.</li>\n<li>The database refuses links to rows that do not exist.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Using a name as the primary key. Two people called Lee will break it.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Deleting a customer who still has orders, leaving links to nowhere.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Primary key",
      "def": "The column that tells every row apart; unique for every row and never empty."
    },
    {
      "term": "Foreign key",
      "def": "A column holding another table's primary key, linking the two tables."
    },
    {
      "term": "ID",
      "def": "A number that is different for every row, used to tell rows apart."
    },
    {
      "term": "Unique",
      "def": "A rule that no two rows may hold the same value in a column."
    },
    {
      "term": "Constraint",
      "def": "A rule the database enforces, such as a primary key or a foreign key."
    },
    {
      "term": "Link",
      "def": "A connection between two tables, made by a foreign key holding a primary key."
    },
    {
      "term": "Customer ID",
      "def": "The foreign key in an orders table that says which customer placed the order."
    },
    {
      "term": "Enforce",
      "def": "What a database does when it refuses data that breaks a rule."
    },
    {
      "term": "NULL",
      "def": "A database value meaning “we do not know”; not zero and not a blank word."
    },
    {
      "term": "Row",
      "def": "One thing in a table, such as one customer or one order."
    },
    {
      "term": "Table",
      "def": "One organised set of rows and columns inside a database, such as a customers table."
    },
    {
      "term": "Reference",
      "def": "When one row points at another row, using its primary key."
    },
    {
      "term": "Delete",
      "def": "Removing a row; the database checks first that nothing still links to it."
    },
    {
      "term": "Auto-increment",
      "def": "Letting the database hand out the next id number automatically for each new row."
    },
    {
      "term": "Schema",
      "def": "The plan of a database: its tables and their columns."
    }
  ],
  "video": {
    "title": "What is a Foreign Key Constraint? Understanding Primary & Foreign Keys",
    "embedUrl": "https://www.youtube.com/embed/5kiMg7GXAsY",
    "note": "Watch the primary and foreign key idea with a real example, and trace one order back to its customer by following the key.",
    "more": [
      {
        "title": "Primary & Foreign Keys",
        "url": "https://www.youtube.com/watch?v=B5r8CcTUs5Y"
      },
      {
        "title": "Primary Key vs Foreign Key in 60 Seconds #SQL #database #dbms",
        "url": "https://www.youtube.com/watch?v=xfBm57JmDc4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Primary key” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Primary key — The column that tells every row apart; unique for every row and never empty. Step 2: It matters because it is part of: Explain what a primary key is and why every table needs one. Step 3: An example from the module is the way primary key shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Foreign key” and “ID”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Foreign key — A column holding another table's primary key, linking the two tables. Step 2: ID — A number that is different for every row, used to tell rows apart. Step 3: They differ because the first is about foreign key while the second is about id; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Explain what a foreign key is and what it links to.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Explain what a foreign key is and what it links to. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Unique” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Unique — A rule that no two rows may hold the same value in a column. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Constraint — A rule the database enforces, such as a primary key or a foreign key. Step 2: Link — A connection between two tables, made by a foreign key holding a primary key. Step 3: Customer ID — The foreign key in an orders table that says which customer placed the order. Step 4: Foreign key — A column holding another table's primary key, linking the two tables. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Tell a primary key from a foreign key in a table. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Primary key” mean?",
      "choices": [
        "The column that tells every row apart; unique for every row and never empty.",
        "A column holding another table's primary key, linking the two tables.",
        "A number that is different for every row, used to tell rows apart.",
        "A rule that no two rows may hold the same value in a column."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Primary key means: The column that tells every row apart; unique for every row and never empty. (b) is the definition of Foreign key, not of Primary key. (c) is the definition of ID, not of Primary key. (d) is the definition of Unique, not of Primary key."
    },
    {
      "q": "What does the term “Foreign key” mean?",
      "choices": [
        "The column that tells every row apart; unique for every row and never empty.",
        "A column holding another table's primary key, linking the two tables.",
        "A number that is different for every row, used to tell rows apart.",
        "A rule that no two rows may hold the same value in a column."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Foreign key means: A column holding another table's primary key, linking the two tables. (a) is the definition of Primary key, not of Foreign key. (c) is the definition of ID, not of Foreign key. (d) is the definition of Unique, not of Foreign key."
    },
    {
      "q": "What does the term “ID” mean?",
      "choices": [
        "The column that tells every row apart; unique for every row and never empty.",
        "A column holding another table's primary key, linking the two tables.",
        "A number that is different for every row, used to tell rows apart.",
        "A rule that no two rows may hold the same value in a column."
      ],
      "answer": 2,
      "explanation": "Correct: (c). ID means: A number that is different for every row, used to tell rows apart. (a) is the definition of Primary key, not of ID. (b) is the definition of Foreign key, not of ID. (d) is the definition of Unique, not of ID."
    },
    {
      "q": "What does the term “Unique” mean?",
      "choices": [
        "The column that tells every row apart; unique for every row and never empty.",
        "A column holding another table's primary key, linking the two tables.",
        "A number that is different for every row, used to tell rows apart.",
        "A rule that no two rows may hold the same value in a column."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Unique means: A rule that no two rows may hold the same value in a column. (a) is the definition of Primary key, not of Unique. (b) is the definition of Foreign key, not of Unique. (c) is the definition of ID, not of Unique."
    },
    {
      "q": "Which term means: A rule the database enforces, such as a primary key or a foreign key.",
      "choices": [
        "Constraint",
        "Primary key",
        "Foreign key",
        "ID"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Constraint is the term for: A rule the database enforces, such as a primary key or a foreign key. (b) Primary key means The column that tells every row apart; unique for every row and never empty. (c) Foreign key means A column holding another table's primary key, linking the two tables. (d) ID means A number that is different for every row, used to tell rows apart."
    },
    {
      "q": "Which term means: A connection between two tables, made by a foreign key holding a primary key.",
      "choices": [
        "Primary key",
        "Link",
        "Foreign key",
        "ID"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Link is the term for: A connection between two tables, made by a foreign key holding a primary key. (a) Primary key means The column that tells every row apart; unique for every row and never empty. (c) Foreign key means A column holding another table's primary key, linking the two tables. (d) ID means A number that is different for every row, used to tell rows apart."
    },
    {
      "q": "Which term means: The foreign key in an orders table that says which customer placed the order.",
      "choices": [
        "Primary key",
        "Foreign key",
        "Customer ID",
        "ID"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Customer ID is the term for: The foreign key in an orders table that says which customer placed the order. (a) Primary key means The column that tells every row apart; unique for every row and never empty. (b) Foreign key means A column holding another table's primary key, linking the two tables. (d) ID means A number that is different for every row, used to tell rows apart."
    },
    {
      "q": "Which term means: What a database does when it refuses data that breaks a rule.",
      "choices": [
        "Primary key",
        "Foreign key",
        "ID",
        "Enforce"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Enforce is the term for: What a database does when it refuses data that breaks a rule. (a) Primary key means The column that tells every row apart; unique for every row and never empty. (b) Foreign key means A column holding another table's primary key, linking the two tables. (c) ID means A number that is different for every row, used to tell rows apart."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Primary Keys & Foreign Keys: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a primary key is and why every table needs one.</p>\n<p><strong>Key terms:</strong> Primary key · Foreign key · ID · Unique · Constraint · Link · Customer ID · Enforce.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a primary key is and why every table needs one.</li>\n<li>Explain what a foreign key is and what it links to.</li>\n<li>Tell a primary key from a foreign key in a table.</li>\n</ul>\n<p><strong>Watch out:</strong> Test the WHERE as a SELECT before any UPDATE or DELETE, and back up before any big change.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
