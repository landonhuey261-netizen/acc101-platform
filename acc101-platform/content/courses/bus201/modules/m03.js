// bus201 - Module 3: Databases & Data Management
module.exports = {
  "number": 3,
  "slug": "databases-and-data-management",
  "title": "Databases & Data Management",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why a growing business outgrows spreadsheets and what a database fixes.",
    "Describe tables, records, fields, primary keys, and foreign keys in plain words.",
    "Read a simple SQL SELECT query and say what it returns.",
    "Explain one-to-many and many-to-many relationships with a business example.",
    "Name the data-quality and governance habits that keep a database trustworthy."
  ],
  "sections": [
    {
      "heading": "Why Spreadsheets Break",
      "html": "\n<p>A spreadsheet is a fine tool for one person doing one analysis. It breaks as a system of record: two people edit different copies, nobody knows which copy is current, a customer appears under three different spellings, and a single deleted row silently changes every total. The failure is not laziness — a spreadsheet has no way to enforce the rules that keep shared facts straight.</p>\n<p>A <strong>database</strong> is an organized collection of data stored so that many people and programs can use it safely at the same time. A <strong>database management system (DBMS)</strong> is the software that manages it: it stores the data, enforces the rules, controls who can see and change what, and answers questions. When a business says \"our system of record,\" it usually means a database.</p>\n<p>The test is simple. If more than one person updates the same facts, if the same fact appears in more than one place, or if a wrong entry could cost real money, the facts belong in a database. A price list, a customer list, and an order history all pass that test.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A spreadsheet is a calculator with a grid. A database is a shared source of truth with rules. Use the calculator for analysis; use the database for facts the business depends on.</div>"
    },
    {
      "heading": "Tables, Keys, and Relationships",
      "html": "\n<p>A <strong>relational database</strong> stores data in tables. A table is one kind of thing: Customers, Products, Orders. Each row is one <strong>record</strong> — one customer, one order. Each column is a <strong>field</strong> — name, email, order date. Every table needs a <strong>primary key</strong>, a field (or combination) that identifies each row uniquely, such as a customer number that is never reused.</p>\n<p>Tables connect through keys. An Orders table carries a <strong>foreign key</strong> — the customer number of the person who placed the order — which points back to the Customers table. That link is what stops the same customer being typed three different ways in three places: the name lives in one row, and everything else points to it.</p>\n<p><strong>Worked check:</strong> A shop has 2,400 customers and 18,000 orders in its database. Step 1: the average customer has placed 18,000 ÷ 2,400 = 7.5 orders. Step 2: because orders point to customers by number, the shop can ask for \"all orders by customer 1042\" and get the right list instantly, with no retyping and no spelling mistakes. The structure is doing the work.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Enter each fact once, in one place, and point to it everywhere else. That single rule prevents most of the data errors that cost small businesses money.</div>"
    },
    {
      "heading": "SQL in Plain English",
      "html": "\n<p><strong>SQL (Structured Query Language)</strong> is the standard language for asking a relational database questions and for adding, changing, and deleting data. You do not need to become a programmer to read it — the words are close to English. A query says what you want, and the DBMS figures out how to get it.</p>\n<p>Read this one aloud: <code>SELECT name, total FROM Orders WHERE order_date &gt;= '2026-10-01' ORDER BY total DESC;</code> It means: \"Show me the name and total of each order placed since October 1, 2026, biggest total first.\" SELECT picks the fields, FROM picks the table, WHERE filters the rows, ORDER BY sorts the answer. Most business questions are some version of that sentence.</p>\n<p>The other SQL verbs are equally plain: INSERT adds a row, UPDATE changes one, DELETE removes one. The discipline is in the WHERE clause: an UPDATE or DELETE without a WHERE changes every row in the table, which is how a tired employee once repriced an entire catalog by accident. Always check the WHERE twice, and test on a copy first.</p>\n<div class=\"formula\">SELECT fields FROM table WHERE condition ORDER BY field; — the shape of most business questions</div>"
    },
    {
      "heading": "Relationships: One-to-Many and Many-to-Many",
      "html": "\n<p>A <strong>one-to-many</strong> relationship is the most common shape in business: one customer places many orders; one order contains many line items; one supplier delivers many products. The \"many\" side carries the foreign key pointing back to the \"one\" side. If you can say \"each X has many Y,\" you have found a one-to-many.</p>\n<p>A <strong>many-to-many</strong> relationship needs a middle table. One product can appear in many orders, and one order can contain many products — so a line-items table sits between Products and Orders, holding one row per product-per-order with its quantity and price. That middle table is also where the business keeps the price that was actually charged, which matters because prices change and history must not.</p>\n<p>Getting relationships right at design time is cheap; fixing them after a year of live data is expensive. Sketch the tables and their links on paper before anyone builds anything, and walk a real order through the sketch from customer to delivery to invoice.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Design the relationships before the data exists. A missing link table discovered a year late means rebuilding reports, retraining staff, and untangling a year of history.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Spreadsheets are for analysis; databases are the system of record for shared facts.</li>\n<li>Relational databases store data in tables: rows are records, columns are fields, primary keys identify rows, foreign keys link tables.</li>\n<li>SQL asks questions in near-English: SELECT fields FROM table WHERE condition ORDER BY field.</li>\n<li>One-to-many is the common shape; many-to-many needs a middle (junction) table.</li>\n<li>Data quality is a management habit: one source of truth, clean entry, backups, and access control.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Storing the same fact in two places — a customer address in the shop system and again in the mailing spreadsheet. The two copies will disagree within a month, and nobody will know which is right. One fact, one place, pointed to everywhere else.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Running an UPDATE or DELETE without a WHERE clause. It changes every row in the table. Always write the WHERE first, test with a SELECT using the same condition, and only then run the change.</div>\n<p><strong>Next step:</strong> Module 4 builds on the database idea — enterprise systems (ERP, CRM, SCM) are what happens when the whole company shares one database.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Database",
      "def": "An organized collection of data stored so many people and programs can use it safely at the same time."
    },
    {
      "term": "Database management system (DBMS)",
      "def": "Software that stores, organizes, protects, and retrieves the data in a database."
    },
    {
      "term": "Relational database",
      "def": "A database that stores data in tables of rows and columns, linked by keys."
    },
    {
      "term": "Table",
      "def": "A collection of records about one kind of thing, such as Customers or Orders."
    },
    {
      "term": "Record (row)",
      "def": "One entry in a table — one customer, one order, one product."
    },
    {
      "term": "Field (column)",
      "def": "One attribute of the records in a table, such as name, email, or order date."
    },
    {
      "term": "Primary key",
      "def": "A field that uniquely identifies each row in a table, such as a customer number."
    },
    {
      "term": "Foreign key",
      "def": "A field in one table that points to the primary key of another table, linking the two."
    },
    {
      "term": "SQL",
      "def": "Structured Query Language, the standard language for querying and changing data in a relational database."
    },
    {
      "term": "Query",
      "def": "A request for data from a database, usually written in SQL."
    },
    {
      "term": "One-to-many relationship",
      "def": "A link where one record in a table relates to many records in another — one customer, many orders."
    },
    {
      "term": "Many-to-many relationship",
      "def": "A link where records on both sides relate to many on the other, joined through a middle table."
    },
    {
      "term": "Junction table",
      "def": "A middle table that joins two tables in a many-to-many relationship, such as order line items."
    },
    {
      "term": "Data integrity",
      "def": "The accuracy, consistency, and trustworthiness of data over its life."
    },
    {
      "term": "System of record",
      "def": "The authoritative place where a business keeps a particular set of facts."
    }
  ],
  "video": {
    "title": "SQL - Part 1 -  Database Concepts (Database, DBMS, Data Models, RDBMS and SQL)",
    "embedUrl": "https://www.youtube.com/embed/pVKT4N-Cgb8",
    "note": "Covers exactly this module's ground — what a database is, what a DBMS does, data models, and what SQL is for. Pause at each concept and match it to the Customers/Orders example in the reading.",
    "more": [
      {
        "title": "Major Database Types Explained: PostgreSQL, Snowflake, BigQuery, Redis, MongoDB, Cassandra & More",
        "url": "https://www.youtube.com/watch?v=rR9JwLnbkrk"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A shop keeps its customer list in three spreadsheets: the till, the mailing list, and the owner's laptop. Name two specific problems this causes, and state the database rule that fixes them.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Problem one — the same customer appears under different spellings, so mailings go to the wrong address and sales history splits across copies. Step 2: Problem two — nobody knows which copy is current, so staff act on stale information. Step 3: The fix is the rule 'one fact, one place': the customer lives in one Customers table, and every system points to that row by customer number.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A database has 2,400 customers and 18,000 orders. (a) What is the average number of orders per customer? (b) If 600 customers have never ordered, what is the average among customers who have ordered?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) 18,000 ÷ 2,400 = <strong>7.5 orders per customer</strong>. Step 2: (b) Customers who ordered = 2,400 − 600 = 1,800. Step 3: 18,000 ÷ 1,800 = <strong>10 orders per ordering customer</strong>. The two averages tell different stories — the second is the one a loyalty program should use.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Read this query and say in one sentence what it returns: SELECT product_name, price FROM Products WHERE stock &lt; 10 ORDER BY price DESC;</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: SELECT picks product_name and price. Step 2: FROM Products names the table. Step 3: WHERE stock &lt; 10 keeps only low-stock products. Step 4: ORDER BY price DESC sorts most expensive first. In one sentence: it lists the name and price of every product with fewer than 10 in stock, most expensive first — a restock priority list.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Design the keys: a gym has Members, Classes, and Bookings. State the primary key of each table and which foreign keys the Bookings table needs.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Members primary key = member_number; Classes primary key = class_id; Bookings primary key = booking_id. Step 2: Bookings needs two foreign keys — member_number pointing to Members, and class_id pointing to Classes. Step 3: That is a many-to-many between members and classes, joined by Bookings, which can also hold the booking date and whether the member attended.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A clerk runs UPDATE Products SET price = 9.99; with no WHERE clause. What happened, and what should the clerk have done first?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Every product in the table now costs $9.99 — the update had no condition, so it changed all rows. Step 2: The clerk should have written the WHERE first, then tested it with SELECT product_name, price FROM Products WHERE (the same condition) to see exactly which rows would change. Step 3: Only then run the UPDATE, and check the row count the DBMS reports.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A café's loyalty spreadsheet lists 'Sara', 'Sarah', and 'S. Ahmed' with the same phone number. Explain, using the words primary key and foreign key, how a database would have prevented this.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: In a database, Sara Ahmed would be one row in Customers with one primary key, say customer 1042, and her phone number would be a field on that row. Step 2: Every visit and reward would record the foreign key 1042, not her name. Step 3: Typing 'Sarah' at the till could not create a second customer, because the lookup is by number or phone, and the name lives in exactly one place.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The main reason a growing business moves shared facts from spreadsheets to a database is:",
      "choices": [
        "Spreadsheets cannot do arithmetic",
        "A database enforces rules, controls access, and keeps one current copy everyone shares",
        "Databases are free",
        "Spreadsheets cannot store text"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A DBMS keeps one source of truth with rules and permissions, which is what shared facts need. (a) spreadsheets do arithmetic well — that is their strength. (c) database software is not generally free. (d) spreadsheets store text easily."
    },
    {
      "q": "In a Customers table, the customer number is the:",
      "choices": [
        "Foreign key",
        "Primary key",
        "Junction table",
        "Query"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The primary key uniquely identifies each row. (a) a foreign key lives in another table pointing back here. (c) a junction table joins two tables. (d) a query is a request for data, not an identifier."
    },
    {
      "q": "SELECT name, total FROM Orders WHERE order_date >= '2026-10-01' returns:",
      "choices": [
        "Every column of every order ever placed",
        "The name and total of orders placed on or after October 1, 2026",
        "The names of all customers",
        "A new table called Orders"
      ],
      "answer": 1,
      "explanation": "Correct: (b). SELECT picks name and total, FROM picks Orders, WHERE filters to dates on or after October 1, 2026. (a) ignores both the field list and the filter. (c) asks the wrong table and ignores totals. (d) SELECT reads data; it does not create a table."
    },
    {
      "q": "One customer places many orders. That relationship is:",
      "choices": [
        "Many-to-many",
        "One-to-many",
        "One-to-one",
        "No relationship"
      ],
      "answer": 1,
      "explanation": "Correct: (b). One record on the customer side relates to many records on the order side. (a) would need both sides to have many, joined by a middle table. (c) would mean each customer has exactly one order. (d) ignores the obvious link."
    },
    {
      "q": "A many-to-many relationship between Products and Orders is handled by:",
      "choices": [
        "Deleting one of the tables",
        "A junction table, such as order line items, holding one row per product-per-order",
        "Storing the product list inside the customer record",
        "Using a spreadsheet instead"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The line-items table joins the two, one row per product on each order, and holds the quantity and price charged. (a) destroys needed data. (c) breaks the one-fact-one-place rule. (d) avoids the design question rather than answering it."
    },
    {
      "q": "An UPDATE statement with no WHERE clause will:",
      "choices": [
        "Update nothing",
        "Update only the first row",
        "Update every row in the table",
        "Ask for confirmation automatically"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Without a condition, the change applies to all rows — the classic costly mistake. (a) and (b) misunderstand SQL: no WHERE means no filter at all. (d) the DBMS runs it as written; there is no automatic safety question."
    },
    {
      "q": "A shop has 2,400 customers and 18,000 orders. The average orders per customer is:",
      "choices": [
        "7.5",
        "15",
        "0.13",
        "20"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 18,000 ÷ 2,400 = 7.5. (b) doubles the real value. (c) divides customers by orders instead of orders by customers. (d) is not supported by any arithmetic on these numbers."
    },
    {
      "q": "The 'system of record' for customer addresses should be:",
      "choices": [
        "Every spreadsheet that mentions a customer",
        "The one authoritative table where the address lives, which all other uses point to",
        "The owner's memory",
        "The most recent email from the customer"
      ],
      "answer": 1,
      "explanation": "Correct: (b). One fact lives in one place; everything else references it. (a) guarantees conflicting copies. (c) is not a system at all. (d) is a single event, not a maintained record."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Databases &amp; Data Management: Quick Reference</h3>\n<p><strong>Core idea:</strong> Spreadsheets are for analysis; databases are the system of record. One fact, one place, pointed to everywhere else.</p>\n<p><strong>Structure:</strong> table = one kind of thing · row = one record · column = one field · primary key identifies a row · foreign key links tables.</p>\n<p><strong>Relationships:</strong> one-to-many is the common shape (one customer, many orders); many-to-many needs a junction table (order line items).</p>\n<div class=\"formula\">SELECT fields FROM table WHERE condition ORDER BY field; &nbsp;|&nbsp; Average = Total ÷ Count</div>\n<p><strong>Watch out:</strong> Never run UPDATE or DELETE without a WHERE — test the condition with a SELECT first. Never store the same fact in two places.</p>\n<p><strong>Self-check:</strong> Sketch three tables for a business you know (for example Customers, Orders, Products), name each primary key, and draw the foreign keys.</p>\n"
};
