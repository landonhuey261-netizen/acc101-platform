// cmp105 - Module 3: Data Types & Choosing the Right Column
module.exports = {
  "number": 3,
  "slug": "data-types-choosing-columns",
  "title": "Data Types & Choosing the Right Column",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a data type is and why it matters.",
    "Choose the right type for text, whole numbers, money, dates, and yes/no values.",
    "Explain why a phone number should be stored as text, not as a number.",
    "Explain what happens when the wrong type is used.",
    "Name the SQLite types: INTEGER, REAL, TEXT, and BLOB."
  ],
  "sections": [
    {
      "heading": "A Column Has One Type",
      "html": "<p>Every column has a data type: the kind of value it holds. A name column holds text. An age column holds a whole number. A price column holds a number with decimals. A date column holds a date. The type is a promise the database keeps: put a word where a number belongs, and the database will stop you. That stopping is a feature, not a fault — it keeps bad data out.</p>\n<p>Types also decide what you can do with a value. You can add two numbers, but adding two names makes no sense. You can sort dates in order, but only if they are stored as dates. Choose the type that matches what the value really is, and the database will do the rest.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> The type is a promise: it keeps bad data out and decides what you can do with a value.</div></p>\n"
    },
    {
      "heading": "The Main Types in SQLite",
      "html": "<p>SQLite keeps things simple with a few types. INTEGER is a whole number, such as 28 or 41. REAL is a number with a decimal point, such as 24.50. TEXT is words and characters, such as “Maya” or “Detroit”. BLOB is raw data such as a picture file, which beginners rarely store in a database. There is no separate date type in SQLite: dates are stored as TEXT in the form YYYY-MM-DD, such as 2026-11-16, which sorts correctly as text.</p>\n<p>Most other databases have more types, including a true date type and a true/false type. The ideas are the same everywhere: pick the type that matches the value, and store dates in a form that sorts properly.</p>\n"
    },
    {
      "heading": "Tricky Choices: Phone Numbers and Money",
      "html": "<p>A phone number looks like a number, but it is not one: you never add two phone numbers, and a leading zero matters. Store it as TEXT. A postcode is the same: it may contain letters, and a leading zero matters. Store it as TEXT. A year, such as 2026, can be an INTEGER because you might compare years — but a phone number never should be.</p>\n<p>Money is trickier. Store prices as REAL, such as 24.50, and be careful with rounding: computers store decimals approximately, so a total of many small prices can be a cent out. Real shops often store money as whole cents in an INTEGER (2450 cents) to avoid that problem. For this course, REAL with two decimal places is fine, and the lab will show you the sums.</p>\n"
    },
    {
      "heading": "What Goes Wrong With the Wrong Type",
      "html": "<p>Store an age as TEXT and the database will sort it like words: “100” comes before “28”, because “1” comes before “2”. Store a price as TEXT and you cannot add prices at all. Store a date as “Nov 16, 2026” and sorting it is hopeless. The wrong type does not always shout; sometimes it quietly gives the wrong answer, which is worse.</p>\n<p>When a query gives a strange answer, check the types first. It is one of the most common causes of wrong results, and one of the easiest to fix — by choosing the right type when you create the table, before any data goes in.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Every column has a type: INTEGER, REAL, TEXT, or BLOB in SQLite.</li>\n<li>Text for names and phone numbers, whole numbers for counts and ages, REAL for money.</li>\n<li>Dates are stored as TEXT in YYYY-MM-DD form so they sort correctly.</li>\n<li>The wrong type gives quietly wrong answers — check types first.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Storing a phone number or postcode as a number. Leading zeros vanish and you cannot add them anyway.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Storing numbers as text, so 100 sorts before 28.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Data type",
      "def": "The kind of value a column holds, such as text, a whole number, or a decimal number."
    },
    {
      "term": "INTEGER",
      "def": "A SQLite type for whole numbers, such as 28 or 41."
    },
    {
      "term": "REAL",
      "def": "A SQLite type for numbers with a decimal point, such as 24.50."
    },
    {
      "term": "TEXT",
      "def": "A SQLite type for words and characters, such as a name or a phone number."
    },
    {
      "term": "BLOB",
      "def": "A SQLite type for raw data, such as a picture file."
    },
    {
      "term": "Date",
      "def": "A calendar day, stored in SQLite as TEXT in YYYY-MM-DD form, such as 2026-11-16."
    },
    {
      "term": "Boolean",
      "def": "A yes/no value, stored in SQLite as the INTEGER 1 for yes and 0 for no."
    },
    {
      "term": "NULL",
      "def": "A database value meaning “we do not know”; not zero and not a blank word."
    },
    {
      "term": "Column",
      "def": "One fact about every row in a table, such as the name column or the price column."
    },
    {
      "term": "Sorting",
      "def": "Putting rows in order, such as by date or by price, smallest first."
    },
    {
      "term": "Rounding",
      "def": "Trimming a decimal number to a set number of places, such as two places for money."
    },
    {
      "term": "Value",
      "def": "One piece of data in a cell, such as a name, a number, or a date."
    },
    {
      "term": "Phone number",
      "def": "A contact number, stored as TEXT because it is never added and may start with zero."
    },
    {
      "term": "Price",
      "def": "What something costs, stored as a REAL number with two decimal places."
    },
    {
      "term": "Schema",
      "def": "The plan of a database: its tables and their columns."
    }
  ],
  "video": {
    "title": "How to Easily Create a SQLite Database - Create Your First SQLite Database",
    "embedUrl": "https://www.youtube.com/embed/XSZE1iiKdSw",
    "note": "Watch how a database is created and how columns are chosen, and note the type picked for each column and why.",
    "more": [
      {
        "title": "How to Create a SQLite Database with the Command Line in Windows",
        "url": "https://www.youtube.com/watch?v=CCBv9vmwr2Q"
      },
      {
        "title": "SQLite Introduction - Beginners Guide to SQL and Databases",
        "url": "https://www.youtube.com/watch?v=8Xyn8R9eKB8"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Data type” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Data type — The kind of value a column holds, such as text, a whole number, or a decimal number. Step 2: It matters because it is part of: Explain what a data type is and why it matters. Step 3: An example from the module is the way data type shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “INTEGER” and “REAL”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: INTEGER — A SQLite type for whole numbers, such as 28 or 41. Step 2: REAL — A SQLite type for numbers with a decimal point, such as 24.50. Step 3: They differ because the first is about integer while the second is about real; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Choose the right type for text, whole numbers, money, dates, and yes/no values.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Choose the right type for text, whole numbers, money, dates, and yes/no values. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “TEXT” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: TEXT — A SQLite type for words and characters, such as a name or a phone number. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: BLOB — A SQLite type for raw data, such as a picture file. Step 2: Date — A calendar day, stored in SQLite as TEXT in YYYY-MM-DD form, such as 2026-11-16. Step 3: Boolean — A yes/no value, stored in SQLite as the INTEGER 1 for yes and 0 for no. Step 4: INTEGER — A SQLite type for whole numbers, such as 28 or 41. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain why a phone number should be stored as text, not as a number. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Data type” mean?",
      "choices": [
        "The kind of value a column holds, such as text, a whole number, or a decimal number.",
        "A SQLite type for whole numbers, such as 28 or 41.",
        "A SQLite type for numbers with a decimal point, such as 24.50.",
        "A SQLite type for words and characters, such as a name or a phone number."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Data type means: The kind of value a column holds, such as text, a whole number, or a decimal number. (b) is the definition of INTEGER, not of Data type. (c) is the definition of REAL, not of Data type. (d) is the definition of TEXT, not of Data type."
    },
    {
      "q": "What does the term “INTEGER” mean?",
      "choices": [
        "The kind of value a column holds, such as text, a whole number, or a decimal number.",
        "A SQLite type for whole numbers, such as 28 or 41.",
        "A SQLite type for numbers with a decimal point, such as 24.50.",
        "A SQLite type for words and characters, such as a name or a phone number."
      ],
      "answer": 1,
      "explanation": "Correct: (b). INTEGER means: A SQLite type for whole numbers, such as 28 or 41. (a) is the definition of Data type, not of INTEGER. (c) is the definition of REAL, not of INTEGER. (d) is the definition of TEXT, not of INTEGER."
    },
    {
      "q": "What does the term “REAL” mean?",
      "choices": [
        "The kind of value a column holds, such as text, a whole number, or a decimal number.",
        "A SQLite type for whole numbers, such as 28 or 41.",
        "A SQLite type for numbers with a decimal point, such as 24.50.",
        "A SQLite type for words and characters, such as a name or a phone number."
      ],
      "answer": 2,
      "explanation": "Correct: (c). REAL means: A SQLite type for numbers with a decimal point, such as 24.50. (a) is the definition of Data type, not of REAL. (b) is the definition of INTEGER, not of REAL. (d) is the definition of TEXT, not of REAL."
    },
    {
      "q": "What does the term “TEXT” mean?",
      "choices": [
        "The kind of value a column holds, such as text, a whole number, or a decimal number.",
        "A SQLite type for whole numbers, such as 28 or 41.",
        "A SQLite type for numbers with a decimal point, such as 24.50.",
        "A SQLite type for words and characters, such as a name or a phone number."
      ],
      "answer": 3,
      "explanation": "Correct: (d). TEXT means: A SQLite type for words and characters, such as a name or a phone number. (a) is the definition of Data type, not of TEXT. (b) is the definition of INTEGER, not of TEXT. (c) is the definition of REAL, not of TEXT."
    },
    {
      "q": "Which term means: A SQLite type for raw data, such as a picture file.",
      "choices": [
        "BLOB",
        "Data type",
        "INTEGER",
        "REAL"
      ],
      "answer": 0,
      "explanation": "Correct: (a). BLOB is the term for: A SQLite type for raw data, such as a picture file. (b) Data type means The kind of value a column holds, such as text, a whole number, or a decimal number. (c) INTEGER means A SQLite type for whole numbers, such as 28 or 41. (d) REAL means A SQLite type for numbers with a decimal point, such as 24.50."
    },
    {
      "q": "Which term means: A calendar day, stored in SQLite as TEXT in YYYY-MM-DD form, such as 2026-11-16.",
      "choices": [
        "Data type",
        "Date",
        "INTEGER",
        "REAL"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Date is the term for: A calendar day, stored in SQLite as TEXT in YYYY-MM-DD form, such as 2026-11-16. (a) Data type means The kind of value a column holds, such as text, a whole number, or a decimal number. (c) INTEGER means A SQLite type for whole numbers, such as 28 or 41. (d) REAL means A SQLite type for numbers with a decimal point, such as 24.50."
    },
    {
      "q": "Which term means: A yes/no value, stored in SQLite as the INTEGER 1 for yes and 0 for no.",
      "choices": [
        "Data type",
        "INTEGER",
        "Boolean",
        "REAL"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Boolean is the term for: A yes/no value, stored in SQLite as the INTEGER 1 for yes and 0 for no. (a) Data type means The kind of value a column holds, such as text, a whole number, or a decimal number. (b) INTEGER means A SQLite type for whole numbers, such as 28 or 41. (d) REAL means A SQLite type for numbers with a decimal point, such as 24.50."
    },
    {
      "q": "Which term means: A database value meaning “we do not know”; not zero and not a blank word.",
      "choices": [
        "Data type",
        "INTEGER",
        "REAL",
        "NULL"
      ],
      "answer": 3,
      "explanation": "Correct: (d). NULL is the term for: A database value meaning “we do not know”; not zero and not a blank word. (a) Data type means The kind of value a column holds, such as text, a whole number, or a decimal number. (b) INTEGER means A SQLite type for whole numbers, such as 28 or 41. (c) REAL means A SQLite type for numbers with a decimal point, such as 24.50."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Data Types & Choosing the Right Column: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a data type is and why it matters.</p>\n<p><strong>Key terms:</strong> Data type · INTEGER · REAL · TEXT · BLOB · Date · Boolean · NULL.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a data type is and why it matters.</li>\n<li>Choose the right type for text, whole numbers, money, dates, and yes/no values.</li>\n<li>Explain why a phone number should be stored as text, not as a number.</li>\n</ul>\n<p><strong>Watch out:</strong> Test the WHERE as a SELECT before any UPDATE or DELETE, and back up before any big change.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
