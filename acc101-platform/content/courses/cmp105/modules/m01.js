// cmp105 - Module 1: What Is a Database?
module.exports = {
  "number": 1,
  "slug": "what-is-a-database",
  "title": "What Is a Database?",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain in plain words what a database is and why apps need one.",
    "Name four everyday places that use a database.",
    "Explain the difference between a database and a spreadsheet.",
    "Describe what a database management system (DBMS) does.",
    "Give an example of data that must live in a database, not in a file on one computer."
  ],
  "sections": [
    {
      "heading": "A Database Is an Organised Store",
      "html": "<p>A database is an organised store for facts that an app needs to keep and find again: accounts, orders, messages, appointments, grades. It is not a pile of files. It is a system that keeps facts tidy, finds any one of them in a blink, and stops two people changing the same fact at the same time in a way that loses one of the changes.</p>\n<p>Every app you use sits on a database. Your bank's database holds your balance. A shop's database holds its products and orders. A school's database holds its students and grades. When you log in and see your own information, you are looking at rows in a database, fetched just for you.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> A database keeps facts tidy, finds any one fast, and protects them when many people use the app at once.</div></p>\n"
    },
    {
      "heading": "Why Not Just a Spreadsheet?",
      "html": "<p>A spreadsheet is a fine tool for one person doing sums on a small list. It struggles when the list grows, when many people edit it at once, or when one fact must never be lost. A database is built for exactly those jobs: thousands of people, millions of rows, and rules that stop bad data getting in.</p>\n<p>A spreadsheet also mixes the data with the layout and the sums. A database keeps the facts clean and separate, and apps ask it questions in a language called SQL. The spreadsheet is a notebook; the database is a library with a librarian who never loses a book.</p>\n"
    },
    {
      "heading": "The DBMS: The Librarian",
      "html": "<p>A database management system, or DBMS, is the program that runs the database. It stores the data on disk, answers questions, checks the rules, and keeps a backup copy safe. SQLite, MySQL, and PostgreSQL are all DBMS programs. SQLite is the one you will use in this course, because it lives in a single file, needs no server, and runs anywhere — including on your phone.</p>\n<p>You talk to the DBMS in SQL (Structured Query Language): short, plain sentences such as SELECT name FROM customers. The DBMS reads the sentence, finds the answer, and sends it back. You do not need to know how it stores the data inside; you only need to ask well.</p>\n"
    },
    {
      "heading": "What Belongs in a Database?",
      "html": "<p>Anything that must survive, be shared, or be searched belongs in a database: accounts and passwords (scrambled, never plain), orders and payments, messages, appointments, and grades. Anything that only matters for a moment — the words in a search box before you press Enter — does not need to be stored at all.</p>\n<p>Ask two questions about any piece of data: must it still be there tomorrow, and must someone else (or another device) be able to see it? If the answer to either is yes, it belongs in a database. That simple test will guide every design decision in this course.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>A database is an organised store for facts an app must keep and find again.</li>\n<li>Spreadsheets suit one person and a small list; databases suit many people and millions of rows.</li>\n<li>The DBMS stores the data, answers questions, and checks the rules.</li>\n<li>SQL is the language you use to ask a database questions.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Keeping shared, must-not-lose data in a spreadsheet or a file on one computer.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Thinking the database is the app. The database is the store; the app is what uses it.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Database",
      "def": "An organised store for facts an app needs to keep and find again."
    },
    {
      "term": "DBMS",
      "def": "Database management system: the program that stores data, answers questions, and checks the rules."
    },
    {
      "term": "SQL",
      "def": "Structured Query Language: the plain-word language used to ask a database questions and change data."
    },
    {
      "term": "SQLite",
      "def": "A small DBMS that stores a whole database in one file and needs no server."
    },
    {
      "term": "MySQL",
      "def": "A popular DBMS used by many websites and apps, running on a server."
    },
    {
      "term": "PostgreSQL",
      "def": "A powerful open-source DBMS used by many large apps and companies."
    },
    {
      "term": "Spreadsheet",
      "def": "A grid of cells for sums and small lists, suited to one person at a time."
    },
    {
      "term": "Record",
      "def": "One item of stored data, such as one customer or one order."
    },
    {
      "term": "Data",
      "def": "Facts stored in a database, such as names, prices, and dates."
    },
    {
      "term": "App",
      "def": "A program that uses a database to store and show information to its users."
    },
    {
      "term": "Backup",
      "def": "A copy of a database kept safe so the data can be restored if something goes wrong."
    },
    {
      "term": "Query",
      "def": "A question asked to a database in SQL, such as asking for all customers in Detroit."
    },
    {
      "term": "Server",
      "def": "An always-on computer that can hold a database and answer requests from apps."
    },
    {
      "term": "User",
      "def": "A person whose facts an app stores, or who uses the app."
    },
    {
      "term": "Table",
      "def": "One organised set of rows and columns inside a database, such as a customers table."
    }
  ],
  "video": {
    "title": "3. SQL Tables, Rows and Columns Explained for Beginners | SQL Tutorial",
    "embedUrl": "https://www.youtube.com/embed/VRylLmD7LBA",
    "note": "Watch how a database is organised and why apps need one. As you watch, name the database behind three apps you use every day.",
    "more": [
      {
        "title": "Row vs Column: What’s the Difference? | SQL and Database Basics",
        "url": "https://www.youtube.com/watch?v=NyI2yl7tXAo"
      },
      {
        "title": "Tables, Rows & Columns Explained | Database Basics for Beginners #bvrk #bvrktechtutorial",
        "url": "https://www.youtube.com/watch?v=TcRuUlGtKd0"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Database” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Database — An organised store for facts an app needs to keep and find again. Step 2: It matters because it is part of: Explain in plain words what a database is and why apps need one. Step 3: An example from the module is the way database shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “DBMS” and “SQL”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: DBMS — Database management system: the program that stores data, answers questions, and checks the rules. Step 2: SQL — Structured Query Language: the plain-word language used to ask a database questions and change data. Step 3: They differ because the first is about dbms while the second is about sql; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Name four everyday places that use a database.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Name four everyday places that use a database. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “SQLite” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: SQLite — A small DBMS that stores a whole database in one file and needs no server. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: MySQL — A popular DBMS used by many websites and apps, running on a server. Step 2: PostgreSQL — A powerful open-source DBMS used by many large apps and companies. Step 3: Spreadsheet — A grid of cells for sums and small lists, suited to one person at a time. Step 4: DBMS — Database management system: the program that stores data, answers questions, and checks the rules. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain the difference between a database and a spreadsheet. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Database” mean?",
      "choices": [
        "An organised store for facts an app needs to keep and find again.",
        "Database management system: the program that stores data, answers questions, and checks the rules.",
        "Structured Query Language: the plain-word language used to ask a database questions and change data.",
        "A small DBMS that stores a whole database in one file and needs no server."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Database means: An organised store for facts an app needs to keep and find again. (b) is the definition of DBMS, not of Database. (c) is the definition of SQL, not of Database. (d) is the definition of SQLite, not of Database."
    },
    {
      "q": "What does the term “DBMS” mean?",
      "choices": [
        "An organised store for facts an app needs to keep and find again.",
        "Database management system: the program that stores data, answers questions, and checks the rules.",
        "Structured Query Language: the plain-word language used to ask a database questions and change data.",
        "A small DBMS that stores a whole database in one file and needs no server."
      ],
      "answer": 1,
      "explanation": "Correct: (b). DBMS means: Database management system: the program that stores data, answers questions, and checks the rules. (a) is the definition of Database, not of DBMS. (c) is the definition of SQL, not of DBMS. (d) is the definition of SQLite, not of DBMS."
    },
    {
      "q": "What does the term “SQL” mean?",
      "choices": [
        "An organised store for facts an app needs to keep and find again.",
        "Database management system: the program that stores data, answers questions, and checks the rules.",
        "Structured Query Language: the plain-word language used to ask a database questions and change data.",
        "A small DBMS that stores a whole database in one file and needs no server."
      ],
      "answer": 2,
      "explanation": "Correct: (c). SQL means: Structured Query Language: the plain-word language used to ask a database questions and change data. (a) is the definition of Database, not of SQL. (b) is the definition of DBMS, not of SQL. (d) is the definition of SQLite, not of SQL."
    },
    {
      "q": "What does the term “SQLite” mean?",
      "choices": [
        "An organised store for facts an app needs to keep and find again.",
        "Database management system: the program that stores data, answers questions, and checks the rules.",
        "Structured Query Language: the plain-word language used to ask a database questions and change data.",
        "A small DBMS that stores a whole database in one file and needs no server."
      ],
      "answer": 3,
      "explanation": "Correct: (d). SQLite means: A small DBMS that stores a whole database in one file and needs no server. (a) is the definition of Database, not of SQLite. (b) is the definition of DBMS, not of SQLite. (c) is the definition of SQL, not of SQLite."
    },
    {
      "q": "Which term means: A popular DBMS used by many websites and apps, running on a server.",
      "choices": [
        "MySQL",
        "Database",
        "DBMS",
        "SQL"
      ],
      "answer": 0,
      "explanation": "Correct: (a). MySQL is the term for: A popular DBMS used by many websites and apps, running on a server. (b) Database means An organised store for facts an app needs to keep and find again. (c) DBMS means Database management system: the program that stores data, answers questions, and checks the rules. (d) SQL means Structured Query Language: the plain-word language used to ask a database questions and change data."
    },
    {
      "q": "Which term means: A powerful open-source DBMS used by many large apps and companies.",
      "choices": [
        "Database",
        "PostgreSQL",
        "DBMS",
        "SQL"
      ],
      "answer": 1,
      "explanation": "Correct: (b). PostgreSQL is the term for: A powerful open-source DBMS used by many large apps and companies. (a) Database means An organised store for facts an app needs to keep and find again. (c) DBMS means Database management system: the program that stores data, answers questions, and checks the rules. (d) SQL means Structured Query Language: the plain-word language used to ask a database questions and change data."
    },
    {
      "q": "Which term means: A grid of cells for sums and small lists, suited to one person at a time.",
      "choices": [
        "Database",
        "DBMS",
        "Spreadsheet",
        "SQL"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Spreadsheet is the term for: A grid of cells for sums and small lists, suited to one person at a time. (a) Database means An organised store for facts an app needs to keep and find again. (b) DBMS means Database management system: the program that stores data, answers questions, and checks the rules. (d) SQL means Structured Query Language: the plain-word language used to ask a database questions and change data."
    },
    {
      "q": "Which term means: One item of stored data, such as one customer or one order.",
      "choices": [
        "Database",
        "DBMS",
        "SQL",
        "Record"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Record is the term for: One item of stored data, such as one customer or one order. (a) Database means An organised store for facts an app needs to keep and find again. (b) DBMS means Database management system: the program that stores data, answers questions, and checks the rules. (c) SQL means Structured Query Language: the plain-word language used to ask a database questions and change data."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — What Is a Database?: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain in plain words what a database is and why apps need one.</p>\n<p><strong>Key terms:</strong> Database · DBMS · SQL · SQLite · MySQL · PostgreSQL · Spreadsheet · Record.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain in plain words what a database is and why apps need one.</li>\n<li>Name four everyday places that use a database.</li>\n<li>Explain the difference between a database and a spreadsheet.</li>\n</ul>\n<p><strong>Watch out:</strong> Test the WHERE as a SELECT before any UPDATE or DELETE, and back up before any big change.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
