// cmp105 - Module 12: Designing a Small Database & Backups
module.exports = {
  "number": 12,
  "slug": "designing-a-database-and-backups",
  "title": "Designing a Small Database & Backups",
  "estTime": "3–4 hours",
  "objectives": [
    "Design a small database from a plain-word description.",
    "Explain normalisation in plain words and why it prevents duplicate data.",
    "Name the first three normal forms in plain words.",
    "Write the CREATE TABLE statements for a small database.",
    "Explain how to back up a database and how often to do it."
  ],
  "sections": [
    {
      "heading": "Start From the Description",
      "html": "<p>Design starts with words, not with tables. “A library lends books to members. A member can borrow many books, and a book can be borrowed by many members over time.” From that sentence you can pull the things: members, books, loans. Then the facts: a member has a name and an email; a book has a title and an author; a loan has a borrow date and a return date. Then the links: one member has many loans; one book has many loans.</p>\n<p>That gives three tables: members, books, and loans, with loans as the linking table between members and books — a many-to-many link, exactly as in Module 5. If the design is hard to describe in words, it will be hard to build in tables. Describe it first, in plain sentences, and the tables follow.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Describe it in plain sentences first. The things, the facts, and the links follow from the words.</div></p>\n"
    },
    {
      "heading": "Normalisation: Say Each Fact Once",
      "html": "<p>Normalisation is the habit of storing each fact in exactly one place. If a customer's city is stored in the customers table and also copied into every order row, the two copies can disagree — the customer moves, one copy is updated, the other is not, and now the database contradicts itself. Store the city once, in the customers table, and let orders reach it through the customer_id link.</p>\n<p>The price is consistency: one fact, one home, and every question reads the same value. The cost is more tables and more JOINs, which is a fair trade. A database that says each fact once is a database you can trust.</p>\n"
    },
    {
      "heading": "The First Three Normal Forms, in Plain Words",
      "html": "<p>First normal form: every cell holds one value, and every row has a primary key. No lists in cells, no repeated columns such as phone1, phone2, phone3. Second normal form: every fact in a row depends on the whole primary key, not on part of it — which mostly matters for tables with a two-column key, such as a linking table. Third normal form: every fact depends on the key and nothing else — a customer's city depends on the customer, not on the order, so the city lives in the customers table, not the orders table.</p>\n<p>You do not need to recite these forms. You need the habit they describe: one value per cell, facts in the table they belong to, and each fact stored once. If your design passes those three checks, it is in good shape.</p>\n"
    },
    {
      "heading": "Building It and Backing It Up",
      "html": "<p>Building the library database is three CREATE TABLE statements: <pre><code>CREATE TABLE members (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  email TEXT\n);\nCREATE TABLE books (\n  id INTEGER PRIMARY KEY,\n  title TEXT,\n  author TEXT\n);\nCREATE TABLE loans (\n  id INTEGER PRIMARY KEY,\n  member_id INTEGER,\n  book_id INTEGER,\n  borrow_date TEXT\n);</code></pre> The loans table holds two foreign keys, one to each side, exactly as Module 5 promised.</p>\n<p>And then back it up. A database without a backup is a disaster waiting for a date. Copy the database file to somewhere else — a different drive, or cloud storage — on a schedule: daily for a busy app, weekly for a quiet one. Test the backup by restoring it somewhere safe; a backup you have never restored is a hope, not a backup. Back up before any big change, and before any DELETE you are unsure about.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Design from words: things, facts, links — then tables.</li>\n<li>Normalisation means each fact lives in exactly one place.</li>\n<li>First normal form: one value per cell. Third: facts live in the table they belong to.</li>\n<li>Back up on a schedule, to somewhere else, and test the restore.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Copying a fact into two tables. The copies will disagree one day.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Never testing a backup. A backup you have never restored is only a hope.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Normalisation",
      "def": "The habit of storing each fact in exactly one place, so copies can never disagree."
    },
    {
      "term": "First normal form",
      "def": "The rule that every cell holds one value and every row has a primary key."
    },
    {
      "term": "Second normal form",
      "def": "The rule that every fact in a row depends on the whole primary key."
    },
    {
      "term": "Third normal form",
      "def": "The rule that every fact depends on the key and nothing else."
    },
    {
      "term": "CREATE TABLE",
      "def": "The SQL statement that makes a new table with named columns and types."
    },
    {
      "term": "Design",
      "def": "Planning a database from a plain-word description before building it."
    },
    {
      "term": "Backup",
      "def": "A copy of a database kept safe so the data can be restored if something goes wrong."
    },
    {
      "term": "Restore",
      "def": "Bringing a database back from a backup copy."
    },
    {
      "term": "Linking table",
      "def": "A small table in the middle of a many-to-many link, holding one row per pair."
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
      "term": "Schema",
      "def": "The plan of a database: its tables and their columns."
    },
    {
      "term": "Member",
      "def": "A person who borrows books from a library, stored as one row in a members table."
    },
    {
      "term": "Loan",
      "def": "One borrowing of one book by one member, stored as one row in a loans table."
    },
    {
      "term": "Duplicate",
      "def": "The same fact stored in two places, which can disagree over time."
    }
  ],
  "video": {
    "title": "Introduction to Database Normalization",
    "embedUrl": "https://www.youtube.com/embed/27VeGN1h0Pw",
    "note": "Watch normalisation explained with a real messy table, then fix the mess on paper before you build anything.",
    "more": [
      {
        "title": "Learn Database Normalization - 1NF, 2NF, 3NF, 4NF, 5NF",
        "url": "https://www.youtube.com/watch?v=GFQaEYEc8_8"
      },
      {
        "title": "Learn Database Normalization Fast | 1NF, 2NF, 3NF Explained Simply (2025)",
        "url": "https://www.youtube.com/watch?v=FzVCGou8SMA"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Normalisation” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Normalisation — The habit of storing each fact in exactly one place, so copies can never disagree. Step 2: It matters because it is part of: Design a small database from a plain-word description. Step 3: An example from the module is the way normalisation shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “First normal form” and “Second normal form”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: First normal form — The rule that every cell holds one value and every row has a primary key. Step 2: Second normal form — The rule that every fact in a row depends on the whole primary key. Step 3: They differ because the first is about first normal form while the second is about second normal form; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Explain normalisation in plain words and why it prevents duplicate data.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Explain normalisation in plain words and why it prevents duplicate data. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Third normal form” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Third normal form — The rule that every fact depends on the key and nothing else. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: CREATE TABLE — The SQL statement that makes a new table with named columns and types. Step 2: Design — Planning a database from a plain-word description before building it. Step 3: Backup — A copy of a database kept safe so the data can be restored if something goes wrong. Step 4: First normal form — The rule that every cell holds one value and every row has a primary key. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Name the first three normal forms in plain words. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Normalisation” mean?",
      "choices": [
        "The habit of storing each fact in exactly one place, so copies can never disagree.",
        "The rule that every cell holds one value and every row has a primary key.",
        "The rule that every fact in a row depends on the whole primary key.",
        "The rule that every fact depends on the key and nothing else."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Normalisation means: The habit of storing each fact in exactly one place, so copies can never disagree. (b) is the definition of First normal form, not of Normalisation. (c) is the definition of Second normal form, not of Normalisation. (d) is the definition of Third normal form, not of Normalisation."
    },
    {
      "q": "What does the term “First normal form” mean?",
      "choices": [
        "The habit of storing each fact in exactly one place, so copies can never disagree.",
        "The rule that every cell holds one value and every row has a primary key.",
        "The rule that every fact in a row depends on the whole primary key.",
        "The rule that every fact depends on the key and nothing else."
      ],
      "answer": 1,
      "explanation": "Correct: (b). First normal form means: The rule that every cell holds one value and every row has a primary key. (a) is the definition of Normalisation, not of First normal form. (c) is the definition of Second normal form, not of First normal form. (d) is the definition of Third normal form, not of First normal form."
    },
    {
      "q": "What does the term “Second normal form” mean?",
      "choices": [
        "The habit of storing each fact in exactly one place, so copies can never disagree.",
        "The rule that every cell holds one value and every row has a primary key.",
        "The rule that every fact in a row depends on the whole primary key.",
        "The rule that every fact depends on the key and nothing else."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Second normal form means: The rule that every fact in a row depends on the whole primary key. (a) is the definition of Normalisation, not of Second normal form. (b) is the definition of First normal form, not of Second normal form. (d) is the definition of Third normal form, not of Second normal form."
    },
    {
      "q": "What does the term “Third normal form” mean?",
      "choices": [
        "The habit of storing each fact in exactly one place, so copies can never disagree.",
        "The rule that every cell holds one value and every row has a primary key.",
        "The rule that every fact in a row depends on the whole primary key.",
        "The rule that every fact depends on the key and nothing else."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Third normal form means: The rule that every fact depends on the key and nothing else. (a) is the definition of Normalisation, not of Third normal form. (b) is the definition of First normal form, not of Third normal form. (c) is the definition of Second normal form, not of Third normal form."
    },
    {
      "q": "Which term means: The SQL statement that makes a new table with named columns and types.",
      "choices": [
        "CREATE TABLE",
        "Normalisation",
        "First normal form",
        "Second normal form"
      ],
      "answer": 0,
      "explanation": "Correct: (a). CREATE TABLE is the term for: The SQL statement that makes a new table with named columns and types. (b) Normalisation means The habit of storing each fact in exactly one place, so copies can never disagree. (c) First normal form means The rule that every cell holds one value and every row has a primary key. (d) Second normal form means The rule that every fact in a row depends on the whole primary key."
    },
    {
      "q": "Which term means: Planning a database from a plain-word description before building it.",
      "choices": [
        "Normalisation",
        "Design",
        "First normal form",
        "Second normal form"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Design is the term for: Planning a database from a plain-word description before building it. (a) Normalisation means The habit of storing each fact in exactly one place, so copies can never disagree. (c) First normal form means The rule that every cell holds one value and every row has a primary key. (d) Second normal form means The rule that every fact in a row depends on the whole primary key."
    },
    {
      "q": "Which term means: A copy of a database kept safe so the data can be restored if something goes wrong.",
      "choices": [
        "Normalisation",
        "First normal form",
        "Backup",
        "Second normal form"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Backup is the term for: A copy of a database kept safe so the data can be restored if something goes wrong. (a) Normalisation means The habit of storing each fact in exactly one place, so copies can never disagree. (b) First normal form means The rule that every cell holds one value and every row has a primary key. (d) Second normal form means The rule that every fact in a row depends on the whole primary key."
    },
    {
      "q": "Which term means: Bringing a database back from a backup copy.",
      "choices": [
        "Normalisation",
        "First normal form",
        "Second normal form",
        "Restore"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Restore is the term for: Bringing a database back from a backup copy. (a) Normalisation means The habit of storing each fact in exactly one place, so copies can never disagree. (b) First normal form means The rule that every cell holds one value and every row has a primary key. (c) Second normal form means The rule that every fact in a row depends on the whole primary key."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Designing a Small Database & Backups: Quick Reference</h3>\n<p><strong>Core idea:</strong> Design a small database from a plain-word description.</p>\n<p><strong>Key terms:</strong> Normalisation · First normal form · Second normal form · Third normal form · CREATE TABLE · Design · Backup · Restore.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Design a small database from a plain-word description.</li>\n<li>Explain normalisation in plain words and why it prevents duplicate data.</li>\n<li>Name the first three normal forms in plain words.</li>\n</ul>\n<p><strong>Watch out:</strong> Test the WHERE as a SELECT before any UPDATE or DELETE, and back up before any big change.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
