// cmp105 - Module 5: Relationships: One-to-Many & Many-to-Many
module.exports = {
  "number": 5,
  "slug": "relationships-between-tables",
  "title": "Relationships: One-to-Many & Many-to-Many",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain a one-to-many relationship with a real example.",
    "Explain a many-to-many relationship with a real example.",
    "Explain what a linking table is and when to use one.",
    "Explain a one-to-one relationship and when it is useful.",
    "Draw a small database with three tables and their links."
  ],
  "sections": [
    {
      "heading": "One-to-Many: The Commonest Link",
      "html": "<p>A one-to-many relationship is the workhorse of databases: one customer has many orders, one teacher has many students, one author writes many books. The “one” side holds the primary key; the “many” side holds it as a foreign key. One customer, Maya, has orders 1 and 2; Sam has order 3. The orders table's customer_id column is the whole mechanism.</p>\n<p>You can read it in both directions. From a customer, follow the foreign key out to find their orders. From an order, follow the foreign key back to find its customer. One column, in the many-side table, does all of it. Most of the links in a real database are one-to-many.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> One-to-many: the one side holds the key, the many side holds it as a foreign key.</div></p>\n"
    },
    {
      "heading": "Many-to-Many: When Both Sides Have Many",
      "html": "<p>A many-to-many relationship is when both sides have many of the other: a student takes many courses, and a course has many students. A book has many authors, and an author writes many books. No single foreign key can hold this, because one column cannot hold many values — remember the one-value-per-cell rule from Module 2.</p>\n<p>The answer is a linking table: a small table in the middle whose only job is to hold pairs. An enrollments table holds one row per pair — student 5 in course 9, student 5 in course 12, student 7 in course 9 — with two foreign keys, one to each side. The many-to-many link becomes two one-to-many links, which the database handles easily.</p>\n"
    },
    {
      "heading": "One-to-One: Rare, but Real",
      "html": "<p>A one-to-one relationship is when each row on one side matches exactly one row on the other: one person has one passport, one employee has one locker. It is the rarest of the three, and it is usually used to split a table: facts everyone needs go in the main table, and sensitive or rarely used facts — such as a salary — go in a second table linked one-to-one, where access can be controlled.</p>\n<p>If you find yourself designing a one-to-one link, ask whether the two tables should simply be one table. Often they should. The genuine uses are splitting off sensitive facts and splitting off facts that most rows do not have.</p>\n"
    },
    {
      "heading": "Drawing the Map",
      "html": "<p>Database designers draw their plan as a diagram: boxes for tables, lines for links, a small mark at each end showing one or many. Draw yours before you build: customers — orders — products, with the links labelled. A diagram that fits on one page is a good design; a diagram that needs a wall is a warning that the design is too complicated.</p>\n<p>Start with the things (customers, orders, products), then the facts each one needs, then the links. Things first, facts second, links third. That order keeps the design simple and the tables clean.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>One-to-many: one customer, many orders; the many side holds the foreign key.</li>\n<li>Many-to-many: students and courses; solved with a linking table of pairs.</li>\n<li>One-to-one: one person, one passport; used to split off sensitive facts.</li>\n<li>Draw the plan first: things, facts, links.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Putting many values in one cell to fake a many-to-many link. Use a linking table.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Making a one-to-one link when one table would do.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "One-to-many",
      "def": "A link where one row on one side matches many rows on the other, such as one customer and many orders."
    },
    {
      "term": "Many-to-many",
      "def": "A link where many rows on each side match many on the other, such as students and courses."
    },
    {
      "term": "One-to-one",
      "def": "A link where each row on one side matches exactly one row on the other, such as one person and one passport."
    },
    {
      "term": "Linking table",
      "def": "A small table in the middle of a many-to-many link, holding one row per pair."
    },
    {
      "term": "Enrollment",
      "def": "A row in a linking table joining one student to one course."
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
      "term": "Relationship",
      "def": "A link between two tables, such as one-to-many or many-to-many."
    },
    {
      "term": "Diagram",
      "def": "A drawing of a database plan: boxes for tables and lines for links."
    },
    {
      "term": "Cardinality",
      "def": "How many rows on each side a link can match: one or many."
    },
    {
      "term": "Student",
      "def": "A person taking courses, stored as one row in a students table."
    },
    {
      "term": "Course",
      "def": "A class a student takes, stored as one row in a courses table."
    },
    {
      "term": "Author",
      "def": "A person who writes a book, linked to books in a many-to-many relationship."
    },
    {
      "term": "Order",
      "def": "In a shop database, one purchase by one customer, stored as one row."
    },
    {
      "term": "Customer",
      "def": "A person who buys from a shop, stored as one row in a customers table."
    }
  ],
  "video": {
    "title": "What Is a Foreign Key? | SQL and Database Basics for Beginners",
    "embedUrl": "https://www.youtube.com/embed/c2QEyszvja8",
    "note": "Watch how tables link together, then draw the customers-orders link on paper and label the one and the many ends.",
    "more": [
      {
        "title": "What Is a Foreign Key in Databases?",
        "url": "https://www.youtube.com/watch?v=RH3AKCnsWes"
      },
      {
        "title": "Primary Key vs Foreign Key Explained Visually #shorts",
        "url": "https://www.youtube.com/watch?v=Q9RlUMG4P2E"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “One-to-many” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: One-to-many — A link where one row on one side matches many rows on the other, such as one customer and many orders. Step 2: It matters because it is part of: Explain a one-to-many relationship with a real example. Step 3: An example from the module is the way one-to-many shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Many-to-many” and “One-to-one”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Many-to-many — A link where many rows on each side match many on the other, such as students and courses. Step 2: One-to-one — A link where each row on one side matches exactly one row on the other, such as one person and one passport. Step 3: They differ because the first is about many-to-many while the second is about one-to-one; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Explain a many-to-many relationship with a real example.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Explain a many-to-many relationship with a real example. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Linking table” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Linking table — A small table in the middle of a many-to-many link, holding one row per pair. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Enrollment — A row in a linking table joining one student to one course. Step 2: Foreign key — A column holding another table's primary key, linking the two tables. Step 3: Primary key — The column that tells every row apart; unique for every row and never empty. Step 4: Many-to-many — A link where many rows on each side match many on the other, such as students and courses. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain what a linking table is and when to use one. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “One-to-many” mean?",
      "choices": [
        "A link where one row on one side matches many rows on the other, such as one customer and many orders.",
        "A link where many rows on each side match many on the other, such as students and courses.",
        "A link where each row on one side matches exactly one row on the other, such as one person and one passport.",
        "A small table in the middle of a many-to-many link, holding one row per pair."
      ],
      "answer": 0,
      "explanation": "Correct: (a). One-to-many means: A link where one row on one side matches many rows on the other, such as one customer and many orders. (b) is the definition of Many-to-many, not of One-to-many. (c) is the definition of One-to-one, not of One-to-many. (d) is the definition of Linking table, not of One-to-many."
    },
    {
      "q": "What does the term “Many-to-many” mean?",
      "choices": [
        "A link where one row on one side matches many rows on the other, such as one customer and many orders.",
        "A link where many rows on each side match many on the other, such as students and courses.",
        "A link where each row on one side matches exactly one row on the other, such as one person and one passport.",
        "A small table in the middle of a many-to-many link, holding one row per pair."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Many-to-many means: A link where many rows on each side match many on the other, such as students and courses. (a) is the definition of One-to-many, not of Many-to-many. (c) is the definition of One-to-one, not of Many-to-many. (d) is the definition of Linking table, not of Many-to-many."
    },
    {
      "q": "What does the term “One-to-one” mean?",
      "choices": [
        "A link where one row on one side matches many rows on the other, such as one customer and many orders.",
        "A link where many rows on each side match many on the other, such as students and courses.",
        "A link where each row on one side matches exactly one row on the other, such as one person and one passport.",
        "A small table in the middle of a many-to-many link, holding one row per pair."
      ],
      "answer": 2,
      "explanation": "Correct: (c). One-to-one means: A link where each row on one side matches exactly one row on the other, such as one person and one passport. (a) is the definition of One-to-many, not of One-to-one. (b) is the definition of Many-to-many, not of One-to-one. (d) is the definition of Linking table, not of One-to-one."
    },
    {
      "q": "What does the term “Linking table” mean?",
      "choices": [
        "A link where one row on one side matches many rows on the other, such as one customer and many orders.",
        "A link where many rows on each side match many on the other, such as students and courses.",
        "A link where each row on one side matches exactly one row on the other, such as one person and one passport.",
        "A small table in the middle of a many-to-many link, holding one row per pair."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Linking table means: A small table in the middle of a many-to-many link, holding one row per pair. (a) is the definition of One-to-many, not of Linking table. (b) is the definition of Many-to-many, not of Linking table. (c) is the definition of One-to-one, not of Linking table."
    },
    {
      "q": "Which term means: A row in a linking table joining one student to one course.",
      "choices": [
        "Enrollment",
        "One-to-many",
        "Many-to-many",
        "One-to-one"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Enrollment is the term for: A row in a linking table joining one student to one course. (b) One-to-many means A link where one row on one side matches many rows on the other, such as one customer and many orders. (c) Many-to-many means A link where many rows on each side match many on the other, such as students and courses. (d) One-to-one means A link where each row on one side matches exactly one row on the other, such as one person and one passport."
    },
    {
      "q": "Which term means: A column holding another table's primary key, linking the two tables.",
      "choices": [
        "One-to-many",
        "Foreign key",
        "Many-to-many",
        "One-to-one"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Foreign key is the term for: A column holding another table's primary key, linking the two tables. (a) One-to-many means A link where one row on one side matches many rows on the other, such as one customer and many orders. (c) Many-to-many means A link where many rows on each side match many on the other, such as students and courses. (d) One-to-one means A link where each row on one side matches exactly one row on the other, such as one person and one passport."
    },
    {
      "q": "Which term means: The column that tells every row apart; unique for every row and never empty.",
      "choices": [
        "One-to-many",
        "Many-to-many",
        "Primary key",
        "One-to-one"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Primary key is the term for: The column that tells every row apart; unique for every row and never empty. (a) One-to-many means A link where one row on one side matches many rows on the other, such as one customer and many orders. (b) Many-to-many means A link where many rows on each side match many on the other, such as students and courses. (d) One-to-one means A link where each row on one side matches exactly one row on the other, such as one person and one passport."
    },
    {
      "q": "Which term means: A link between two tables, such as one-to-many or many-to-many.",
      "choices": [
        "One-to-many",
        "Many-to-many",
        "One-to-one",
        "Relationship"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Relationship is the term for: A link between two tables, such as one-to-many or many-to-many. (a) One-to-many means A link where one row on one side matches many rows on the other, such as one customer and many orders. (b) Many-to-many means A link where many rows on each side match many on the other, such as students and courses. (c) One-to-one means A link where each row on one side matches exactly one row on the other, such as one person and one passport."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Relationships: One-to-Many & Many-to-Many: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain a one-to-many relationship with a real example.</p>\n<p><strong>Key terms:</strong> One-to-many · Many-to-many · One-to-one · Linking table · Enrollment · Foreign key · Primary key · Relationship.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain a one-to-many relationship with a real example.</li>\n<li>Explain a many-to-many relationship with a real example.</li>\n<li>Explain what a linking table is and when to use one.</li>\n</ul>\n<p><strong>Watch out:</strong> Test the WHERE as a SELECT before any UPDATE or DELETE, and back up before any big change.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
