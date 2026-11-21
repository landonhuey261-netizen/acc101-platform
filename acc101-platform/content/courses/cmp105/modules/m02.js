// cmp105 - Module 2: Tables, Rows & Columns
module.exports = {
  "number": 2,
  "slug": "tables-rows-and-columns",
  "title": "Tables, Rows & Columns",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a table, a row, and a column are.",
    "Read a small table and answer questions from it.",
    "Explain why each table should hold one kind of thing.",
    "Name the columns a simple customers table needs.",
    "Explain what a cell is and what one value it holds."
  ],
  "sections": [
    {
      "heading": "Tables Hold One Kind of Thing",
      "html": "<p>A database is made of tables, and each table holds one kind of thing: one table for customers, one for orders, one for products. Mixing kinds in one table — customers and their orders in the same rows — makes a mess that is hard to search and easy to break. One kind of thing, one table: that is the first rule of database design.</p>\n<p>Think of a table as a paper form repeated many times. The form's headings are the columns. Each filled-in form is a row. The stack of filled-in forms is the table. A customers table has a form with Name, City, and Age; an orders table has a form with Order number, Customer, and Total.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> One kind of thing, one table. Mixing kinds in one table is the first design mistake.</div></p>\n"
    },
    {
      "heading": "Rows Are the Things, Columns Are the Facts",
      "html": "<p>A row is one thing: one customer, one order, one product. A column is one fact about every row: the customer's name, the order's total, the product's price. Read across a row and you learn everything about one thing. Read down a column and you see one fact about all the things.</p>\n<p>Every row in a table has the same columns, in the same order. That sameness is what makes a database searchable: the DBMS always knows where the price is, in every row, so it can find the cheapest product in a blink.</p>\n"
    },
    {
      "heading": "Cells Hold One Value",
      "html": "<p>Where a row and a column meet is a cell, and a cell holds exactly one value: one name, one number, one date. A cell should never hold a list, such as “apples, bananas, pears” in one cell — that is three facts hiding in one place, and the database cannot search inside them properly. If a thing has many of something, that something belongs in its own table, linked back.</p>\n<p>A cell can also be empty, which the database calls NULL. NULL does not mean zero or a blank word; it means “we do not know”. A customer with no phone number has a NULL phone, not a phone number of zero. That difference matters, and you will see it again in Module 7.</p>\n"
    },
    {
      "heading": "Reading a Table",
      "html": "<p>Here is a tiny customers table: <pre><code>id | name | city        | age\n1  | Maya | Detroit     | 28\n2  | Sam  | Grand Rapids| 41\n3  | Lee  | Detroit     | 35</code></pre> Reading across row 1: customer 1 is Maya, from Detroit, aged 28. Reading down the city column: two customers live in Detroit, one in Grand Rapids. Every question in this course starts by reading a table like this one, slowly, across and down.</p>\n<p>Notice the id column: a number that is different for every row. It is the row's label, and it is the subject of Module 4. For now, notice that without it, two customers both called Lee would be hard to tell apart.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>A table holds one kind of thing; a row is one thing; a column is one fact about every row.</li>\n<li>A cell holds exactly one value — never a list.</li>\n<li>NULL means “we do not know”, not zero and not blank.</li>\n<li>Read across a row for one thing, down a column for one fact about all things.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Stuffing a list into one cell. Lists belong in their own table, linked back.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Mixing two kinds of things in one table. One kind, one table.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Table",
      "def": "One organised set of rows and columns inside a database, such as a customers table."
    },
    {
      "term": "Row",
      "def": "One thing in a table, such as one customer or one order."
    },
    {
      "term": "Column",
      "def": "One fact about every row in a table, such as the name column or the price column."
    },
    {
      "term": "Cell",
      "def": "Where a row and a column meet; it holds exactly one value."
    },
    {
      "term": "Value",
      "def": "One piece of data in a cell, such as a name, a number, or a date."
    },
    {
      "term": "NULL",
      "def": "A database value meaning “we do not know”; not zero and not a blank word."
    },
    {
      "term": "ID",
      "def": "A number that is different for every row, used to tell rows apart."
    },
    {
      "term": "Heading",
      "def": "The name of a column, such as name, city, or age."
    },
    {
      "term": "Field",
      "def": "Another word for a column: one kind of fact stored about each row."
    },
    {
      "term": "Record",
      "def": "One item of stored data, such as one customer or one order."
    },
    {
      "term": "Database",
      "def": "An organised store for facts an app needs to keep and find again."
    },
    {
      "term": "Schema",
      "def": "The plan of a database: its tables and their columns."
    },
    {
      "term": "Order",
      "def": "In a shop database, one purchase by one customer, stored as one row."
    },
    {
      "term": "Customer",
      "def": "A person who buys from a shop, stored as one row in a customers table."
    },
    {
      "term": "Product",
      "def": "One thing a shop sells, stored as one row in a products table."
    }
  ],
  "video": {
    "title": "What is a database? Tables, rows & queries explained in 38s",
    "embedUrl": "https://www.youtube.com/embed/8Yfz3t_wOEE",
    "note": "Watch the table, row, and column idea with a real example, and practise reading a table across and down.",
    "more": [
      {
        "title": "📚 Understanding SQL Tables, Rows, and Columns - Quick Guide ⏳",
        "url": "https://www.youtube.com/watch?v=bFI-JKvfWT4"
      },
      {
        "title": "Database Tables, Keys and Relationships Explained Simply",
        "url": "https://www.youtube.com/watch?v=twmJnzqiYu0"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Table” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Table — One organised set of rows and columns inside a database, such as a customers table. Step 2: It matters because it is part of: Explain what a table, a row, and a column are. Step 3: An example from the module is the way table shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Row” and “Column”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Row — One thing in a table, such as one customer or one order. Step 2: Column — One fact about every row in a table, such as the name column or the price column. Step 3: They differ because the first is about row while the second is about column; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Read a small table and answer questions from it.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Read a small table and answer questions from it. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Cell” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Cell — Where a row and a column meet; it holds exactly one value. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Value — One piece of data in a cell, such as a name, a number, or a date. Step 2: NULL — A database value meaning “we do not know”; not zero and not a blank word. Step 3: ID — A number that is different for every row, used to tell rows apart. Step 4: Row — One thing in a table, such as one customer or one order. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain why each table should hold one kind of thing. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Table” mean?",
      "choices": [
        "One organised set of rows and columns inside a database, such as a customers table.",
        "One thing in a table, such as one customer or one order.",
        "One fact about every row in a table, such as the name column or the price column.",
        "Where a row and a column meet; it holds exactly one value."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Table means: One organised set of rows and columns inside a database, such as a customers table. (b) is the definition of Row, not of Table. (c) is the definition of Column, not of Table. (d) is the definition of Cell, not of Table."
    },
    {
      "q": "What does the term “Row” mean?",
      "choices": [
        "One organised set of rows and columns inside a database, such as a customers table.",
        "One thing in a table, such as one customer or one order.",
        "One fact about every row in a table, such as the name column or the price column.",
        "Where a row and a column meet; it holds exactly one value."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Row means: One thing in a table, such as one customer or one order. (a) is the definition of Table, not of Row. (c) is the definition of Column, not of Row. (d) is the definition of Cell, not of Row."
    },
    {
      "q": "What does the term “Column” mean?",
      "choices": [
        "One organised set of rows and columns inside a database, such as a customers table.",
        "One thing in a table, such as one customer or one order.",
        "One fact about every row in a table, such as the name column or the price column.",
        "Where a row and a column meet; it holds exactly one value."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Column means: One fact about every row in a table, such as the name column or the price column. (a) is the definition of Table, not of Column. (b) is the definition of Row, not of Column. (d) is the definition of Cell, not of Column."
    },
    {
      "q": "What does the term “Cell” mean?",
      "choices": [
        "One organised set of rows and columns inside a database, such as a customers table.",
        "One thing in a table, such as one customer or one order.",
        "One fact about every row in a table, such as the name column or the price column.",
        "Where a row and a column meet; it holds exactly one value."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Cell means: Where a row and a column meet; it holds exactly one value. (a) is the definition of Table, not of Cell. (b) is the definition of Row, not of Cell. (c) is the definition of Column, not of Cell."
    },
    {
      "q": "Which term means: One piece of data in a cell, such as a name, a number, or a date.",
      "choices": [
        "Value",
        "Table",
        "Row",
        "Column"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Value is the term for: One piece of data in a cell, such as a name, a number, or a date. (b) Table means One organised set of rows and columns inside a database, such as a customers table. (c) Row means One thing in a table, such as one customer or one order. (d) Column means One fact about every row in a table, such as the name column or the price column."
    },
    {
      "q": "Which term means: A database value meaning “we do not know”; not zero and not a blank word.",
      "choices": [
        "Table",
        "NULL",
        "Row",
        "Column"
      ],
      "answer": 1,
      "explanation": "Correct: (b). NULL is the term for: A database value meaning “we do not know”; not zero and not a blank word. (a) Table means One organised set of rows and columns inside a database, such as a customers table. (c) Row means One thing in a table, such as one customer or one order. (d) Column means One fact about every row in a table, such as the name column or the price column."
    },
    {
      "q": "Which term means: A number that is different for every row, used to tell rows apart.",
      "choices": [
        "Table",
        "Row",
        "ID",
        "Column"
      ],
      "answer": 2,
      "explanation": "Correct: (c). ID is the term for: A number that is different for every row, used to tell rows apart. (a) Table means One organised set of rows and columns inside a database, such as a customers table. (b) Row means One thing in a table, such as one customer or one order. (d) Column means One fact about every row in a table, such as the name column or the price column."
    },
    {
      "q": "Which term means: The name of a column, such as name, city, or age.",
      "choices": [
        "Table",
        "Row",
        "Column",
        "Heading"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Heading is the term for: The name of a column, such as name, city, or age. (a) Table means One organised set of rows and columns inside a database, such as a customers table. (b) Row means One thing in a table, such as one customer or one order. (c) Column means One fact about every row in a table, such as the name column or the price column."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Tables, Rows & Columns: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a table, a row, and a column are.</p>\n<p><strong>Key terms:</strong> Table · Row · Column · Cell · Value · NULL · ID · Heading.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a table, a row, and a column are.</li>\n<li>Read a small table and answer questions from it.</li>\n<li>Explain why each table should hold one kind of thing.</li>\n</ul>\n<p><strong>Watch out:</strong> Test the WHERE as a SELECT before any UPDATE or DELETE, and back up before any big change.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
