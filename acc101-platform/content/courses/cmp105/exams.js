// cmp105 — Midterm and Final exams.
// All questions are original to these exams (same topics as module quizzes, fresh scenarios and wording).
// Every explanation covers why the correct answer is right AND why each wrong choice is wrong.
module.exports = {
  "midterm": {
    "title": "Midterm Exam",
    "minutes": 75,
    "coverage": "Modules 1–6",
    "questions": [
      {
        "module": 1,
        "q": "A student is asked to define “Database” on a test. Which answer is correct?",
        "choices": [
          "Database management system: the program that stores data, answers questions, and checks the rules.",
          "An organised store for facts an app needs to keep and find again.",
          "Structured Query Language: the plain-word language used to ask a database questions and change data.",
          "A small DBMS that stores a whole database in one file and needs no server."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Database means: An organised store for facts an app needs to keep and find again. (a) is the definition of DBMS, not of Database. (c) is the definition of SQL, not of Database. (d) is the definition of SQLite, not of Database."
      },
      {
        "module": 1,
        "q": "During a review, a classmate describes something as: “Structured Query Language: the plain-word language used to ask a database questions and change data.” Which term are they describing?",
        "choices": [
          "Database",
          "DBMS",
          "SQLite",
          "SQL"
        ],
        "answer": 3,
        "explanation": "Correct: (d). That description is SQL: Structured Query Language: the plain-word language used to ask a database questions and change data. (a) Database means An organised store for facts an app needs to keep and find again. (b) DBMS means Database management system: the program that stores data, answers questions, and checks the rules. (c) SQLite means A small DBMS that stores a whole database in one file and needs no server."
      },
      {
        "module": 1,
        "q": "Which of the following is TRUE about MySQL?",
        "choices": [
          "An organised store for facts an app needs to keep and find again.",
          "A popular DBMS used by many websites and apps, running on a server.",
          "Database management system: the program that stores data, answers questions, and checks the rules.",
          "Structured Query Language: the plain-word language used to ask a database questions and change data."
        ],
        "answer": 1,
        "explanation": "Correct: (b). MySQL: A popular DBMS used by many websites and apps, running on a server. (a) describes Database, not MySQL. (c) describes DBMS, not MySQL. (d) describes SQL, not MySQL."
      },
      {
        "module": 1,
        "q": "A student is asked to define “Spreadsheet” on a test. Which answer is correct?",
        "choices": [
          "An organised store for facts an app needs to keep and find again.",
          "Database management system: the program that stores data, answers questions, and checks the rules.",
          "Structured Query Language: the plain-word language used to ask a database questions and change data.",
          "A grid of cells for sums and small lists, suited to one person at a time."
        ],
        "answer": 3,
        "explanation": "Correct: (d). Spreadsheet means: A grid of cells for sums and small lists, suited to one person at a time. (a) is the definition of Database, not of Spreadsheet. (b) is the definition of DBMS, not of Spreadsheet. (c) is the definition of SQL, not of Spreadsheet."
      },
      {
        "module": 2,
        "q": "During a review, a classmate describes something as: “One thing in a table, such as one customer or one order.” Which term are they describing?",
        "choices": [
          "Table",
          "Column",
          "Cell",
          "Row"
        ],
        "answer": 3,
        "explanation": "Correct: (d). That description is Row: One thing in a table, such as one customer or one order. (a) Table means One organised set of rows and columns inside a database, such as a customers table. (b) Column means One fact about every row in a table, such as the name column or the price column. (c) Cell means Where a row and a column meet; it holds exactly one value."
      },
      {
        "module": 2,
        "q": "Which of the following is TRUE about Cell?",
        "choices": [
          "One organised set of rows and columns inside a database, such as a customers table.",
          "Where a row and a column meet; it holds exactly one value.",
          "One thing in a table, such as one customer or one order.",
          "One fact about every row in a table, such as the name column or the price column."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Cell: Where a row and a column meet; it holds exactly one value. (a) describes Table, not Cell. (c) describes Row, not Cell. (d) describes Column, not Cell."
      },
      {
        "module": 2,
        "q": "A student is asked to define “NULL” on a test. Which answer is correct?",
        "choices": [
          "One organised set of rows and columns inside a database, such as a customers table.",
          "One thing in a table, such as one customer or one order.",
          "One fact about every row in a table, such as the name column or the price column.",
          "A database value meaning “we do not know”; not zero and not a blank word."
        ],
        "answer": 3,
        "explanation": "Correct: (d). NULL means: A database value meaning “we do not know”; not zero and not a blank word. (a) is the definition of Table, not of NULL. (b) is the definition of Row, not of NULL. (c) is the definition of Column, not of NULL."
      },
      {
        "module": 2,
        "q": "During a review, a classmate describes something as: “The name of a column, such as name, city, or age.” Which term are they describing?",
        "choices": [
          "Table",
          "Heading",
          "Row",
          "Column"
        ],
        "answer": 1,
        "explanation": "Correct: (b). That description is Heading: The name of a column, such as name, city, or age. (a) Table means One organised set of rows and columns inside a database, such as a customers table. (c) Row means One thing in a table, such as one customer or one order. (d) Column means One fact about every row in a table, such as the name column or the price column."
      },
      {
        "module": 3,
        "q": "Which of the following is TRUE about REAL?",
        "choices": [
          "The kind of value a column holds, such as text, a whole number, or a decimal number.",
          "A SQLite type for numbers with a decimal point, such as 24.50.",
          "A SQLite type for whole numbers, such as 28 or 41.",
          "A SQLite type for words and characters, such as a name or a phone number."
        ],
        "answer": 1,
        "explanation": "Correct: (b). REAL: A SQLite type for numbers with a decimal point, such as 24.50. (a) describes Data type, not REAL. (c) describes INTEGER, not REAL. (d) describes TEXT, not REAL."
      },
      {
        "module": 3,
        "q": "A student is asked to define “BLOB” on a test. Which answer is correct?",
        "choices": [
          "The kind of value a column holds, such as text, a whole number, or a decimal number.",
          "A SQLite type for whole numbers, such as 28 or 41.",
          "A SQLite type for numbers with a decimal point, such as 24.50.",
          "A SQLite type for raw data, such as a picture file."
        ],
        "answer": 3,
        "explanation": "Correct: (d). BLOB means: A SQLite type for raw data, such as a picture file. (a) is the definition of Data type, not of BLOB. (b) is the definition of INTEGER, not of BLOB. (c) is the definition of REAL, not of BLOB."
      },
      {
        "module": 3,
        "q": "During a review, a classmate describes something as: “A yes/no value, stored in SQLite as the INTEGER 1 for yes and 0 for no.” Which term are they describing?",
        "choices": [
          "Data type",
          "Boolean",
          "INTEGER",
          "REAL"
        ],
        "answer": 1,
        "explanation": "Correct: (b). That description is Boolean: A yes/no value, stored in SQLite as the INTEGER 1 for yes and 0 for no. (a) Data type means The kind of value a column holds, such as text, a whole number, or a decimal number. (c) INTEGER means A SQLite type for whole numbers, such as 28 or 41. (d) REAL means A SQLite type for numbers with a decimal point, such as 24.50."
      },
      {
        "module": 3,
        "q": "Which of the following is TRUE about Column?",
        "choices": [
          "The kind of value a column holds, such as text, a whole number, or a decimal number.",
          "A SQLite type for whole numbers, such as 28 or 41.",
          "A SQLite type for numbers with a decimal point, such as 24.50.",
          "One fact about every row in a table, such as the name column or the price column."
        ],
        "answer": 3,
        "explanation": "Correct: (d). Column: One fact about every row in a table, such as the name column or the price column. (a) describes Data type, not Column. (b) describes INTEGER, not Column. (c) describes REAL, not Column."
      },
      {
        "module": 4,
        "q": "A student is asked to define “Unique” on a test. Which answer is correct?",
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
        "module": 4,
        "q": "During a review, a classmate describes something as: “A connection between two tables, made by a foreign key holding a primary key.” Which term are they describing?",
        "choices": [
          "Primary key",
          "Link",
          "Foreign key",
          "ID"
        ],
        "answer": 1,
        "explanation": "Correct: (b). That description is Link: A connection between two tables, made by a foreign key holding a primary key. (a) Primary key means The column that tells every row apart; unique for every row and never empty. (c) Foreign key means A column holding another table's primary key, linking the two tables. (d) ID means A number that is different for every row, used to tell rows apart."
      },
      {
        "module": 4,
        "q": "Which of the following is TRUE about Enforce?",
        "choices": [
          "The column that tells every row apart; unique for every row and never empty.",
          "A column holding another table's primary key, linking the two tables.",
          "A number that is different for every row, used to tell rows apart.",
          "What a database does when it refuses data that breaks a rule."
        ],
        "answer": 3,
        "explanation": "Correct: (d). Enforce: What a database does when it refuses data that breaks a rule. (a) describes Primary key, not Enforce. (b) describes Foreign key, not Enforce. (c) describes ID, not Enforce."
      },
      {
        "module": 4,
        "q": "A student is asked to define “Row” on a test. Which answer is correct?",
        "choices": [
          "The column that tells every row apart; unique for every row and never empty.",
          "One thing in a table, such as one customer or one order.",
          "A column holding another table's primary key, linking the two tables.",
          "A number that is different for every row, used to tell rows apart."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Row means: One thing in a table, such as one customer or one order. (a) is the definition of Primary key, not of Row. (c) is the definition of Foreign key, not of Row. (d) is the definition of ID, not of Row."
      },
      {
        "module": 5,
        "q": "During a review, a classmate describes something as: “A row in a linking table joining one student to one course.” Which term are they describing?",
        "choices": [
          "One-to-many",
          "Enrollment",
          "Many-to-many",
          "One-to-one"
        ],
        "answer": 1,
        "explanation": "Correct: (b). That description is Enrollment: A row in a linking table joining one student to one course. (a) One-to-many means A link where one row on one side matches many rows on the other, such as one customer and many orders. (c) Many-to-many means A link where many rows on each side match many on the other, such as students and courses. (d) One-to-one means A link where each row on one side matches exactly one row on the other, such as one person and one passport."
      },
      {
        "module": 5,
        "q": "Which of the following is TRUE about Primary key?",
        "choices": [
          "A link where one row on one side matches many rows on the other, such as one customer and many orders.",
          "A link where many rows on each side match many on the other, such as students and courses.",
          "A link where each row on one side matches exactly one row on the other, such as one person and one passport.",
          "The column that tells every row apart; unique for every row and never empty."
        ],
        "answer": 3,
        "explanation": "Correct: (d). Primary key: The column that tells every row apart; unique for every row and never empty. (a) describes One-to-many, not Primary key. (b) describes Many-to-many, not Primary key. (c) describes One-to-one, not Primary key."
      },
      {
        "module": 5,
        "q": "A student is asked to define “Diagram” on a test. Which answer is correct?",
        "choices": [
          "A link where one row on one side matches many rows on the other, such as one customer and many orders.",
          "A drawing of a database plan: boxes for tables and lines for links.",
          "A link where many rows on each side match many on the other, such as students and courses.",
          "A link where each row on one side matches exactly one row on the other, such as one person and one passport."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Diagram means: A drawing of a database plan: boxes for tables and lines for links. (a) is the definition of One-to-many, not of Diagram. (c) is the definition of Many-to-many, not of Diagram. (d) is the definition of One-to-one, not of Diagram."
      },
      {
        "module": 5,
        "q": "During a review, a classmate describes something as: “A person taking courses, stored as one row in a students table.” Which term are they describing?",
        "choices": [
          "One-to-many",
          "Many-to-many",
          "One-to-one",
          "Student"
        ],
        "answer": 3,
        "explanation": "Correct: (d). That description is Student: A person taking courses, stored as one row in a students table. (a) One-to-many means A link where one row on one side matches many rows on the other, such as one customer and many orders. (b) Many-to-many means A link where many rows on each side match many on the other, such as students and courses. (c) One-to-one means A link where each row on one side matches exactly one row on the other, such as one person and one passport."
      },
      {
        "module": 6,
        "q": "Which of the following is TRUE about Statement?",
        "choices": [
          "The SQL keyword that asks a database for data from chosen columns.",
          "The SQL keyword that names the table a query reads from.",
          "A new name for a column in a query's answer, made with AS.",
          "One complete SQL instruction, ending with a semicolon."
        ],
        "answer": 3,
        "explanation": "Correct: (d). Statement: One complete SQL instruction, ending with a semicolon. (a) describes SELECT, not Statement. (b) describes FROM, not Statement. (c) describes Alias, not Statement."
      },
      {
        "module": 6,
        "q": "A student is asked to define “Result” on a test. Which answer is correct?",
        "choices": [
          "The SQL keyword that asks a database for data from chosen columns.",
          "The table a query returns: columns across the top, one row per match.",
          "The SQL keyword that names the table a query reads from.",
          "A new name for a column in a query's answer, made with AS."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Result means: The table a query returns: columns across the top, one row per match. (a) is the definition of SELECT, not of Result. (c) is the definition of FROM, not of Result. (d) is the definition of Alias, not of Result."
      },
      {
        "module": 6,
        "q": "During a review, a classmate describes something as: “One organised set of rows and columns inside a database, such as a customers table.” Which term are they describing?",
        "choices": [
          "SELECT",
          "FROM",
          "Alias",
          "Table"
        ],
        "answer": 3,
        "explanation": "Correct: (d). That description is Table: One organised set of rows and columns inside a database, such as a customers table. (a) SELECT means The SQL keyword that asks a database for data from chosen columns. (b) FROM means The SQL keyword that names the table a query reads from. (c) Alias means A new name for a column in a query's answer, made with AS."
      },
      {
        "module": 6,
        "q": "Which of the following is TRUE about Row?",
        "choices": [
          "The SQL keyword that asks a database for data from chosen columns.",
          "One thing in a table, such as one customer or one order.",
          "The SQL keyword that names the table a query reads from.",
          "A new name for a column in a query's answer, made with AS."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Row: One thing in a table, such as one customer or one order. (a) describes SELECT, not Row. (c) describes FROM, not Row. (d) describes Alias, not Row."
      },
      {
        "module": 6,
        "q": "A student is asked to define “Case” on a test. Which answer is correct?",
        "choices": [
          "The SQL keyword that asks a database for data from chosen columns.",
          "The SQL keyword that names the table a query reads from.",
          "A new name for a column in a query's answer, made with AS.",
          "Upper or lower case letters; SQL keywords are usually written in capitals for readability."
        ],
        "answer": 3,
        "explanation": "Correct: (d). Case means: Upper or lower case letters; SQL keywords are usually written in capitals for readability. (a) is the definition of SELECT, not of Case. (b) is the definition of FROM, not of Case. (c) is the definition of Alias, not of Case."
      }
    ]
  },
  "final": {
    "title": "Final Exam",
    "minutes": 120,
    "coverage": "Modules 1–12",
    "questions": [
      {
        "module": 1,
        "q": "During a review, a classmate describes something as: “Database management system: the program that stores data, answers questions, and checks the rules.” Which term are they describing?",
        "choices": [
          "Database",
          "SQL",
          "DBMS",
          "SQLite"
        ],
        "answer": 2,
        "explanation": "Correct: (c). That description is DBMS: Database management system: the program that stores data, answers questions, and checks the rules. (a) Database means An organised store for facts an app needs to keep and find again. (b) SQL means Structured Query Language: the plain-word language used to ask a database questions and change data. (d) SQLite means A small DBMS that stores a whole database in one file and needs no server."
      },
      {
        "module": 1,
        "q": "Which of the following is TRUE about SQLite?",
        "choices": [
          "A small DBMS that stores a whole database in one file and needs no server.",
          "An organised store for facts an app needs to keep and find again.",
          "Database management system: the program that stores data, answers questions, and checks the rules.",
          "Structured Query Language: the plain-word language used to ask a database questions and change data."
        ],
        "answer": 0,
        "explanation": "Correct: (a). SQLite: A small DBMS that stores a whole database in one file and needs no server. (b) describes Database, not SQLite. (c) describes DBMS, not SQLite. (d) describes SQL, not SQLite."
      },
      {
        "module": 1,
        "q": "A student is asked to define “PostgreSQL” on a test. Which answer is correct?",
        "choices": [
          "An organised store for facts an app needs to keep and find again.",
          "Database management system: the program that stores data, answers questions, and checks the rules.",
          "A powerful open-source DBMS used by many large apps and companies.",
          "Structured Query Language: the plain-word language used to ask a database questions and change data."
        ],
        "answer": 2,
        "explanation": "Correct: (c). PostgreSQL means: A powerful open-source DBMS used by many large apps and companies. (a) is the definition of Database, not of PostgreSQL. (b) is the definition of DBMS, not of PostgreSQL. (d) is the definition of SQL, not of PostgreSQL."
      },
      {
        "module": 1,
        "q": "During a review, a classmate describes something as: “One item of stored data, such as one customer or one order.” Which term are they describing?",
        "choices": [
          "Record",
          "Database",
          "DBMS",
          "SQL"
        ],
        "answer": 0,
        "explanation": "Correct: (a). That description is Record: One item of stored data, such as one customer or one order. (b) Database means An organised store for facts an app needs to keep and find again. (c) DBMS means Database management system: the program that stores data, answers questions, and checks the rules. (d) SQL means Structured Query Language: the plain-word language used to ask a database questions and change data."
      },
      {
        "module": 2,
        "q": "Which of the following is TRUE about Column?",
        "choices": [
          "One fact about every row in a table, such as the name column or the price column.",
          "One organised set of rows and columns inside a database, such as a customers table.",
          "One thing in a table, such as one customer or one order.",
          "Where a row and a column meet; it holds exactly one value."
        ],
        "answer": 0,
        "explanation": "Correct: (a). Column: One fact about every row in a table, such as the name column or the price column. (b) describes Table, not Column. (c) describes Row, not Column. (d) describes Cell, not Column."
      },
      {
        "module": 2,
        "q": "A student is asked to define “Value” on a test. Which answer is correct?",
        "choices": [
          "One organised set of rows and columns inside a database, such as a customers table.",
          "One thing in a table, such as one customer or one order.",
          "One piece of data in a cell, such as a name, a number, or a date.",
          "One fact about every row in a table, such as the name column or the price column."
        ],
        "answer": 2,
        "explanation": "Correct: (c). Value means: One piece of data in a cell, such as a name, a number, or a date. (a) is the definition of Table, not of Value. (b) is the definition of Row, not of Value. (d) is the definition of Column, not of Value."
      },
      {
        "module": 2,
        "q": "During a review, a classmate describes something as: “A number that is different for every row, used to tell rows apart.” Which term are they describing?",
        "choices": [
          "ID",
          "Table",
          "Row",
          "Column"
        ],
        "answer": 0,
        "explanation": "Correct: (a). That description is ID: A number that is different for every row, used to tell rows apart. (b) Table means One organised set of rows and columns inside a database, such as a customers table. (c) Row means One thing in a table, such as one customer or one order. (d) Column means One fact about every row in a table, such as the name column or the price column."
      },
      {
        "module": 2,
        "q": "Which of the following is TRUE about Field?",
        "choices": [
          "One organised set of rows and columns inside a database, such as a customers table.",
          "One thing in a table, such as one customer or one order.",
          "Another word for a column: one kind of fact stored about each row.",
          "One fact about every row in a table, such as the name column or the price column."
        ],
        "answer": 2,
        "explanation": "Correct: (c). Field: Another word for a column: one kind of fact stored about each row. (a) describes Table, not Field. (b) describes Row, not Field. (d) describes Column, not Field."
      },
      {
        "module": 3,
        "q": "A student is asked to define “TEXT” on a test. Which answer is correct?",
        "choices": [
          "The kind of value a column holds, such as text, a whole number, or a decimal number.",
          "A SQLite type for whole numbers, such as 28 or 41.",
          "A SQLite type for words and characters, such as a name or a phone number.",
          "A SQLite type for numbers with a decimal point, such as 24.50."
        ],
        "answer": 2,
        "explanation": "Correct: (c). TEXT means: A SQLite type for words and characters, such as a name or a phone number. (a) is the definition of Data type, not of TEXT. (b) is the definition of INTEGER, not of TEXT. (d) is the definition of REAL, not of TEXT."
      },
      {
        "module": 3,
        "q": "During a review, a classmate describes something as: “A calendar day, stored in SQLite as TEXT in YYYY-MM-DD form, such as 2026-11-16.” Which term are they describing?",
        "choices": [
          "Date",
          "Data type",
          "INTEGER",
          "REAL"
        ],
        "answer": 0,
        "explanation": "Correct: (a). That description is Date: A calendar day, stored in SQLite as TEXT in YYYY-MM-DD form, such as 2026-11-16. (b) Data type means The kind of value a column holds, such as text, a whole number, or a decimal number. (c) INTEGER means A SQLite type for whole numbers, such as 28 or 41. (d) REAL means A SQLite type for numbers with a decimal point, such as 24.50."
      },
      {
        "module": 3,
        "q": "Which of the following is TRUE about NULL?",
        "choices": [
          "The kind of value a column holds, such as text, a whole number, or a decimal number.",
          "A SQLite type for whole numbers, such as 28 or 41.",
          "A database value meaning “we do not know”; not zero and not a blank word.",
          "A SQLite type for numbers with a decimal point, such as 24.50."
        ],
        "answer": 2,
        "explanation": "Correct: (c). NULL: A database value meaning “we do not know”; not zero and not a blank word. (a) describes Data type, not NULL. (b) describes INTEGER, not NULL. (d) describes REAL, not NULL."
      },
      {
        "module": 3,
        "q": "A student is asked to define “Sorting” on a test. Which answer is correct?",
        "choices": [
          "Putting rows in order, such as by date or by price, smallest first.",
          "The kind of value a column holds, such as text, a whole number, or a decimal number.",
          "A SQLite type for whole numbers, such as 28 or 41.",
          "A SQLite type for numbers with a decimal point, such as 24.50."
        ],
        "answer": 0,
        "explanation": "Correct: (a). Sorting means: Putting rows in order, such as by date or by price, smallest first. (b) is the definition of Data type, not of Sorting. (c) is the definition of INTEGER, not of Sorting. (d) is the definition of REAL, not of Sorting."
      },
      {
        "module": 4,
        "q": "During a review, a classmate describes something as: “A rule the database enforces, such as a primary key or a foreign key.” Which term are they describing?",
        "choices": [
          "Constraint",
          "Primary key",
          "Foreign key",
          "ID"
        ],
        "answer": 0,
        "explanation": "Correct: (a). That description is Constraint: A rule the database enforces, such as a primary key or a foreign key. (b) Primary key means The column that tells every row apart; unique for every row and never empty. (c) Foreign key means A column holding another table's primary key, linking the two tables. (d) ID means A number that is different for every row, used to tell rows apart."
      },
      {
        "module": 4,
        "q": "Which of the following is TRUE about Customer ID?",
        "choices": [
          "The column that tells every row apart; unique for every row and never empty.",
          "A column holding another table's primary key, linking the two tables.",
          "The foreign key in an orders table that says which customer placed the order.",
          "A number that is different for every row, used to tell rows apart."
        ],
        "answer": 2,
        "explanation": "Correct: (c). Customer ID: The foreign key in an orders table that says which customer placed the order. (a) describes Primary key, not Customer ID. (b) describes Foreign key, not Customer ID. (d) describes ID, not Customer ID."
      },
      {
        "module": 4,
        "q": "A student is asked to define “NULL” on a test. Which answer is correct?",
        "choices": [
          "A database value meaning “we do not know”; not zero and not a blank word.",
          "The column that tells every row apart; unique for every row and never empty.",
          "A column holding another table's primary key, linking the two tables.",
          "A number that is different for every row, used to tell rows apart."
        ],
        "answer": 0,
        "explanation": "Correct: (a). NULL means: A database value meaning “we do not know”; not zero and not a blank word. (b) is the definition of Primary key, not of NULL. (c) is the definition of Foreign key, not of NULL. (d) is the definition of ID, not of NULL."
      },
      {
        "module": 4,
        "q": "During a review, a classmate describes something as: “One organised set of rows and columns inside a database, such as a customers table.” Which term are they describing?",
        "choices": [
          "Primary key",
          "Foreign key",
          "Table",
          "ID"
        ],
        "answer": 2,
        "explanation": "Correct: (c). That description is Table: One organised set of rows and columns inside a database, such as a customers table. (a) Primary key means The column that tells every row apart; unique for every row and never empty. (b) Foreign key means A column holding another table's primary key, linking the two tables. (d) ID means A number that is different for every row, used to tell rows apart."
      },
      {
        "module": 5,
        "q": "Which of the following is TRUE about Foreign key?",
        "choices": [
          "A link where one row on one side matches many rows on the other, such as one customer and many orders.",
          "A link where many rows on each side match many on the other, such as students and courses.",
          "A column holding another table's primary key, linking the two tables.",
          "A link where each row on one side matches exactly one row on the other, such as one person and one passport."
        ],
        "answer": 2,
        "explanation": "Correct: (c). Foreign key: A column holding another table's primary key, linking the two tables. (a) describes One-to-many, not Foreign key. (b) describes Many-to-many, not Foreign key. (d) describes One-to-one, not Foreign key."
      },
      {
        "module": 5,
        "q": "A student is asked to define “Relationship” on a test. Which answer is correct?",
        "choices": [
          "A link between two tables, such as one-to-many or many-to-many.",
          "A link where one row on one side matches many rows on the other, such as one customer and many orders.",
          "A link where many rows on each side match many on the other, such as students and courses.",
          "A link where each row on one side matches exactly one row on the other, such as one person and one passport."
        ],
        "answer": 0,
        "explanation": "Correct: (a). Relationship means: A link between two tables, such as one-to-many or many-to-many. (b) is the definition of One-to-many, not of Relationship. (c) is the definition of Many-to-many, not of Relationship. (d) is the definition of One-to-one, not of Relationship."
      },
      {
        "module": 5,
        "q": "During a review, a classmate describes something as: “How many rows on each side a link can match: one or many.” Which term are they describing?",
        "choices": [
          "One-to-many",
          "Many-to-many",
          "Cardinality",
          "One-to-one"
        ],
        "answer": 2,
        "explanation": "Correct: (c). That description is Cardinality: How many rows on each side a link can match: one or many. (a) One-to-many means A link where one row on one side matches many rows on the other, such as one customer and many orders. (b) Many-to-many means A link where many rows on each side match many on the other, such as students and courses. (d) One-to-one means A link where each row on one side matches exactly one row on the other, such as one person and one passport."
      },
      {
        "module": 6,
        "q": "A student is asked to define “Semicolon” on a test. Which answer is correct?",
        "choices": [
          "The character ; that ends an SQL statement.",
          "The SQL keyword that asks a database for data from chosen columns.",
          "The SQL keyword that names the table a query reads from.",
          "A new name for a column in a query's answer, made with AS."
        ],
        "answer": 0,
        "explanation": "Correct: (a). Semicolon means: The character ; that ends an SQL statement. (b) is the definition of SELECT, not of Semicolon. (c) is the definition of FROM, not of Semicolon. (d) is the definition of Alias, not of Semicolon."
      },
      {
        "module": 6,
        "q": "During a review, a classmate describes something as: “One fact about every row in a table, such as the name column or the price column.” Which term are they describing?",
        "choices": [
          "SELECT",
          "FROM",
          "Column",
          "Alias"
        ],
        "answer": 2,
        "explanation": "Correct: (c). That description is Column: One fact about every row in a table, such as the name column or the price column. (a) SELECT means The SQL keyword that asks a database for data from chosen columns. (b) FROM means The SQL keyword that names the table a query reads from. (d) Alias means A new name for a column in a query's answer, made with AS."
      },
      {
        "module": 6,
        "q": "Which of the following is TRUE about Query?",
        "choices": [
          "A question asked to a database in SQL, such as asking for all customers in Detroit.",
          "The SQL keyword that asks a database for data from chosen columns.",
          "The SQL keyword that names the table a query reads from.",
          "A new name for a column in a query's answer, made with AS."
        ],
        "answer": 0,
        "explanation": "Correct: (a). Query: A question asked to a database in SQL, such as asking for all customers in Detroit. (b) describes SELECT, not Query. (c) describes FROM, not Query. (d) describes Alias, not Query."
      },
      {
        "module": 7,
        "q": "During a review, a classmate describes something as: “Tests whether text matches a pattern, with % meaning any characters.” Which term are they describing?",
        "choices": [
          "WHERE",
          "Condition",
          "LIKE",
          "AND"
        ],
        "answer": 2,
        "explanation": "Correct: (c). That description is LIKE: Tests whether text matches a pattern, with % meaning any characters. (a) WHERE means The SQL keyword that filters rows, keeping only those that pass a test. (b) Condition means A test in a WHERE clause, such as city = 'Detroit' or age > 30. (d) AND means Combines two tests: both must be true for the row to pass."
      },
      {
        "module": 7,
        "q": "Which of the following is TRUE about IS NULL?",
        "choices": [
          "The test that finds rows whose value is NULL.",
          "The SQL keyword that filters rows, keeping only those that pass a test.",
          "A test in a WHERE clause, such as city = 'Detroit' or age > 30.",
          "Combines two tests: both must be true for the row to pass."
        ],
        "answer": 0,
        "explanation": "Correct: (a). IS NULL: The test that finds rows whose value is NULL. (b) describes WHERE, not IS NULL. (c) describes Condition, not IS NULL. (d) describes AND, not IS NULL."
      },
      {
        "module": 7,
        "q": "A student is asked to define “Pattern” on a test. Which answer is correct?",
        "choices": [
          "The SQL keyword that filters rows, keeping only those that pass a test.",
          "A test in a WHERE clause, such as city = 'Detroit' or age > 30.",
          "A shape of text to match with LIKE, such as 'M%' for names starting with M.",
          "Combines two tests: both must be true for the row to pass."
        ],
        "answer": 2,
        "explanation": "Correct: (c). Pattern means: A shape of text to match with LIKE, such as 'M%' for names starting with M. (a) is the definition of WHERE, not of Pattern. (b) is the definition of Condition, not of Pattern. (d) is the definition of AND, not of Pattern."
      },
      {
        "module": 8,
        "q": "Which of the following is TRUE about Tie?",
        "choices": [
          "Two rows with the same value in the sort column; a second column breaks the tie.",
          "The SQL keyword that sorts a query's results by one or more columns.",
          "Ascending order: smallest first. This is the default for ORDER BY.",
          "Descending order: largest first, written after a column in ORDER BY."
        ],
        "answer": 0,
        "explanation": "Correct: (a). Tie: Two rows with the same value in the sort column; a second column breaks the tie. (b) describes ORDER BY, not Tie. (c) describes ASC, not Tie. (d) describes DESC, not Tie."
      },
      {
        "module": 8,
        "q": "A student is asked to define “WHERE” on a test. Which answer is correct?",
        "choices": [
          "The SQL keyword that sorts a query's results by one or more columns.",
          "Ascending order: smallest first. This is the default for ORDER BY.",
          "The SQL keyword that filters rows, keeping only those that pass a test.",
          "Descending order: largest first, written after a column in ORDER BY."
        ],
        "answer": 2,
        "explanation": "Correct: (c). WHERE means: The SQL keyword that filters rows, keeping only those that pass a test. (a) is the definition of ORDER BY, not of WHERE. (b) is the definition of ASC, not of WHERE. (d) is the definition of DESC, not of WHERE."
      },
      {
        "module": 8,
        "q": "During a review, a classmate describes something as: “The table a query returns: columns across the top, one row per match.” Which term are they describing?",
        "choices": [
          "Result",
          "ORDER BY",
          "ASC",
          "DESC"
        ],
        "answer": 0,
        "explanation": "Correct: (a). That description is Result: The table a query returns: columns across the top, one row per match. (b) ORDER BY means The SQL keyword that sorts a query's results by one or more columns. (c) ASC means Ascending order: smallest first. This is the default for ORDER BY. (d) DESC means Descending order: largest first, written after a column in ORDER BY."
      },
      {
        "module": 9,
        "q": "A student is asked to define “Soft delete” on a test. Which answer is correct?",
        "choices": [
          "The SQL keyword that adds a new row to a table.",
          "The SQL keyword that changes values in rows that pass a WHERE test.",
          "Marking a row as deleted with a flag instead of removing it, so a mistake can be undone.",
          "The SQL keyword that removes rows that pass a WHERE test."
        ],
        "answer": 2,
        "explanation": "Correct: (c). Soft delete means: Marking a row as deleted with a flag instead of removing it, so a mistake can be undone. (a) is the definition of INSERT, not of Soft delete. (b) is the definition of UPDATE, not of Soft delete. (d) is the definition of DELETE, not of Soft delete."
      },
      {
        "module": 9,
        "q": "During a review, a classmate describes something as: “Letting the database hand out the next id number automatically for each new row.” Which term are they describing?",
        "choices": [
          "Auto-increment",
          "INSERT",
          "UPDATE",
          "DELETE"
        ],
        "answer": 0,
        "explanation": "Correct: (a). That description is Auto-increment: Letting the database hand out the next id number automatically for each new row. (b) INSERT means The SQL keyword that adds a new row to a table. (c) UPDATE means The SQL keyword that changes values in rows that pass a WHERE test. (d) DELETE means The SQL keyword that removes rows that pass a WHERE test."
      },
      {
        "module": 9,
        "q": "Which of the following is TRUE about Statement?",
        "choices": [
          "The SQL keyword that adds a new row to a table.",
          "The SQL keyword that changes values in rows that pass a WHERE test.",
          "One complete SQL instruction, ending with a semicolon.",
          "The SQL keyword that removes rows that pass a WHERE test."
        ],
        "answer": 2,
        "explanation": "Correct: (c). Statement: One complete SQL instruction, ending with a semicolon. (a) describes INSERT, not Statement. (b) describes UPDATE, not Statement. (d) describes DELETE, not Statement."
      },
      {
        "module": 10,
        "q": "During a review, a classmate describes something as: “A database value meaning “we do not know”; not zero and not a blank word.” Which term are they describing?",
        "choices": [
          "NULL",
          "JOIN",
          "INNER JOIN",
          "LEFT JOIN"
        ],
        "answer": 0,
        "explanation": "Correct: (a). That description is NULL: A database value meaning “we do not know”; not zero and not a blank word. (b) JOIN means The SQL keyword that combines two tables in one query, matching rows by a key. (c) INNER JOIN means A join that keeps only rows with a match on both sides. (d) LEFT JOIN means A join that keeps every row from the left table, with NULL where there is no match."
      },
      {
        "module": 10,
        "q": "Which of the following is TRUE about Table?",
        "choices": [
          "The SQL keyword that combines two tables in one query, matching rows by a key.",
          "A join that keeps only rows with a match on both sides.",
          "One organised set of rows and columns inside a database, such as a customers table.",
          "A join that keeps every row from the left table, with NULL where there is no match."
        ],
        "answer": 2,
        "explanation": "Correct: (c). Table: One organised set of rows and columns inside a database, such as a customers table. (a) describes JOIN, not Table. (b) describes INNER JOIN, not Table. (d) describes LEFT JOIN, not Table."
      },
      {
        "module": 10,
        "q": "A student is asked to define “Result” on a test. Which answer is correct?",
        "choices": [
          "The table a query returns: columns across the top, one row per match.",
          "The SQL keyword that combines two tables in one query, matching rows by a key.",
          "A join that keeps only rows with a match on both sides.",
          "A join that keeps every row from the left table, with NULL where there is no match."
        ],
        "answer": 0,
        "explanation": "Correct: (a). Result means: The table a query returns: columns across the top, one row per match. (b) is the definition of JOIN, not of Result. (c) is the definition of INNER JOIN, not of Result. (d) is the definition of LEFT JOIN, not of Result."
      },
      {
        "module": 11,
        "q": "Which of the following is TRUE about Total?",
        "choices": [
          "A function such as COUNT or SUM that turns many rows into one value.",
          "An aggregate function that counts rows.",
          "The sum of a set of numbers, found with SUM.",
          "An aggregate function that adds numbers together."
        ],
        "answer": 2,
        "explanation": "Correct: (c). Total: The sum of a set of numbers, found with SUM. (a) describes Aggregate function, not Total. (b) describes COUNT, not Total. (d) describes SUM, not Total."
      },
      {
        "module": 11,
        "q": "A school database has a table of students with a column for middle name. For one student, whose middle name was never recorded, the cell is left as NULL. What does that NULL mean?",
        "choices": [
          "The student definitely has no middle name at all.",
          "The value is unknown: NULL means we do not know, not zero and not a blank word.",
          "The middle name is an empty word with zero letters.",
          "The number zero was typed into the cell."
        ],
        "answer": 1,
        "explanation": "Correct: (b). The NULL means the value is unknown: NULL is a database value meaning we do not know, not zero and not a blank word, so the school simply has no middle name on record. (a) is wrong: NULL does not prove the student has no middle name; it only says the value was never recorded. (c) is wrong: an empty word is a known value, a word with zero letters, which is different from unknown. (d) is wrong: zero is a real number, not a missing value."
      },
      {
        "module": 11,
        "q": "During a review, a classmate describes something as: “A function such as COUNT or SUM that turns many rows into one value.” Which term are they describing?",
        "choices": [
          "COUNT",
          "SUM",
          "Aggregate function",
          "AVG"
        ],
        "answer": 2,
        "explanation": "Correct: (c). That description is Aggregate function: A function such as COUNT or SUM that turns many rows into one value. (a) COUNT means An aggregate function that counts rows. (b) SUM means An aggregate function that adds numbers together. (d) AVG means An aggregate function that finds the average of numbers."
      },
      {
        "module": 12,
        "q": "A student is asked to define “Member” on a test. Which answer is correct?",
        "choices": [
          "A person who borrows books from a library, stored as one row in a members table.",
          "The habit of storing each fact in exactly one place, so copies can never disagree.",
          "The rule that every cell holds one value and every row has a primary key.",
          "The rule that every fact in a row depends on the whole primary key."
        ],
        "answer": 0,
        "explanation": "Correct: (a). Member means: A person who borrows books from a library, stored as one row in a members table. (b) is the definition of Normalisation, not of Member. (c) is the definition of First normal form, not of Member. (d) is the definition of Second normal form, not of Member."
      },
      {
        "module": 12,
        "q": "During a review, a classmate describes something as: “The same fact stored in two places, which can disagree over time.” Which term are they describing?",
        "choices": [
          "Normalisation",
          "First normal form",
          "Duplicate",
          "Second normal form"
        ],
        "answer": 2,
        "explanation": "Correct: (c). That description is Duplicate: The same fact stored in two places, which can disagree over time. (a) Normalisation means The habit of storing each fact in exactly one place, so copies can never disagree. (b) First normal form means The rule that every cell holds one value and every row has a primary key. (d) Second normal form means The rule that every fact in a row depends on the whole primary key."
      },
      {
        "module": 12,
        "q": "Which of the following is TRUE about First normal form?",
        "choices": [
          "The rule that every cell holds one value and every row has a primary key.",
          "The habit of storing each fact in exactly one place, so copies can never disagree.",
          "The rule that every fact in a row depends on the whole primary key.",
          "The rule that every fact depends on the key and nothing else."
        ],
        "answer": 0,
        "explanation": "Correct: (a). First normal form: The rule that every cell holds one value and every row has a primary key. (b) describes Normalisation, not First normal form. (c) describes Second normal form, not First normal form. (d) describes Third normal form, not First normal form."
      }
    ]
  }
};
