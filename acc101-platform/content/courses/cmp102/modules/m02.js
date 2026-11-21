// cmp102 - Module 2: Variables & Data Types
module.exports = {
  "number": 2,
  "slug": "variables-and-data-types",
  "title": "Variables & Data Types",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a variable is and why programs need them.",
    "Create variables and give them good names.",
    "Name the four basic data types: int, float, str, and bool.",
    "Use type() to check what type a value is.",
    "Follow the rules for naming variables in Python."
  ],
  "sections": [
    {
      "heading": "Variables: Named Boxes",
      "html": "<p>A variable is a named box that holds a value. When you write age = 34, you are putting the number 34 into a box called age, so the program can use it later. When you write name = \"Maya\", you are putting the text Maya into a box called name. Later, print(name) shows what is inside the box.</p>\n<p>Try it: </p>\n<pre>name = &quot;Maya&quot;\nage = 34\nprint(name)\nprint(age)</pre>\n<p> The first two lines put values into boxes. The print lines open the boxes and show what is inside. Run it and you will see Maya on one line and 34 on the next.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> A variable is a named box holding a value. The = sign puts a value into the box — it does not mean “equals” the way it does in maths.</div></p>\n"
    },
    {
      "heading": "The Four Basic Data Types",
      "html": "<p>Every value in Python has a type. An int is a whole number: 7, -3, 100. A float is a number with a decimal point: 3.5, 19.99. A str (string) is text inside quotes: \"Maya\", \"Hello\". A bool (Boolean) is either True or False — used for yes/no questions, such as “is the door open?”</p>\n<p>The type matters because different types allow different operations. You can add two ints, but you cannot add a number and a string — Python will stop with a TypeError. You can check a type with type(): </p>\n<pre>print(type(7))\nprint(type(3.5))\nprint(type(&quot;hi&quot;))\nprint(type(True))</pre>\n<p> Run it and Python prints <class 'int'>, <class 'float'>, <class 'str'>, and <class 'bool'>.</p>\n"
    },
    {
      "heading": "Naming Variables Well",
      "html": "<p>Variable names must start with a letter or an underscore, and can contain only letters, numbers, and underscores — no spaces, no dashes. age, first_name, and total_price are good names. 2fast, first-name, and my name are not allowed. Python also reserves some words for itself — if, else, while, for, def — and you cannot use those as variable names.</p>\n<p>Good names say what the value is for. total_price is better than x, and number_of_students is better than n. Use snake_case: lowercase words joined with underscores. A clear name is a gift to your future self, who will read this code next week and need to understand it.</p>\n"
    },
    {
      "heading": "Changing Values and Common Traps",
      "html": "<p>A variable's value can change: age = 34, then later age = 35, and the box now holds 35 — the old value is gone. You can also put one variable's value into another: price = 10, then total = price, and total now holds 10 too.</p>\n<p>Two traps catch beginners. First, = means “put into”, not “is equal to” — age = 34 puts 34 into age; checking whether two things are equal uses ==, which you will meet in Module 4. Second, a variable must be given a value before you use it: print(score) before score = 0 will fail with a NameError, because the box does not exist yet.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>A variable is a named box holding a value; = puts a value into it.</li><li>The four basic types are int, float, str, and bool.</li><li>type() tells you a value's type.</li><li>Names use letters, numbers, and underscores, start with a letter, and use snake_case.</li><li>A variable must be given a value before you use it.</li></ul></p>\n<p><strong>Common mistake:</strong> Writing 2fast = 10. A name cannot start with a number — use fast2 or speed2 instead.</p>\n<p><strong>Common mistake:</strong> Using a variable before giving it a value. print(score) fails until score = 0 (or something) has run first.</p>\n<p><strong>Ready check:</strong> If you can create three variables of different types, print them, and check their types with type(), you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Variable",
      "def": "A named box that holds a value, such as a name or a number, so a program can use it later."
    },
    {
      "term": "Value",
      "def": "A single piece of data, such as 7, 3.5, or \"Maya\"."
    },
    {
      "term": "Assignment",
      "def": "Putting a value into a variable with =, such as age = 34."
    },
    {
      "term": "int",
      "def": "An integer — a whole number with no decimal point, such as 7 or -3."
    },
    {
      "term": "float",
      "def": "A number with a decimal point, such as 3.5 or 19.99."
    },
    {
      "term": "str",
      "def": "A string — text inside quotes, such as \"Maya\" or \"Hello\"."
    },
    {
      "term": "bool",
      "def": "A Boolean — a value that is either True or False."
    },
    {
      "term": "Data type",
      "def": "The kind of value something is: int, float, str, or bool."
    },
    {
      "term": "type()",
      "def": "A built-in Python function that tells you the type of a value."
    },
    {
      "term": "Variable name",
      "def": "The name you give a variable. It must start with a letter or underscore and contain only letters, numbers, and underscores."
    },
    {
      "term": "Snake case",
      "def": "Writing names with lowercase words joined by underscores, such as first_name."
    },
    {
      "term": "Reassignment",
      "def": "Giving a variable a new value later in the program; the old value is replaced."
    },
    {
      "term": "Keyword",
      "def": "A word Python reserves for itself, such as if or while, which you cannot use as a variable name."
    },
    {
      "term": "String",
      "def": "Text inside quotes, such as \"Maya\". A string is the str data type."
    },
    {
      "term": "Integer",
      "def": "A whole number with no decimal point, such as 7. An integer is the int data type."
    }
  ],
  "video": {
    "title": "Python Tutorial for Absolute Beginners #1 - What Are Variables?",
    "embedUrl": "https://www.youtube.com/embed/Z1Yd7upQsXY",
    "note": "CS Dojo's first lesson in its Python series: what variables are, with clear examples. Watch it, then write your own three variables in VS Code.",
    "more": [
      {
        "title": "Python Full Course for Beginners",
        "url": "https://www.youtube.com/watch?v=_uQrJ0TkZlc"
      },
      {
        "title": "Python for Beginners - Learn Coding with Python in 1 Hour",
        "url": "https://www.youtube.com/watch?v=kqtD5dpn9C8"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Variable” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Variable — A named box that holds a value, such as a name or a number, so a program can use it later. Step 2: It matters because it is part of: Explain what a variable is and why programs need them. Step 3: An example from the module is the way variable shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Value” and “Assignment”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Value — A single piece of data, such as 7, 3.5, or \"Maya\". Step 2: Assignment — Putting a value into a variable with =, such as age = 34. Step 3: They differ because the first is about value while the second is about assignment; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Create variables and give them good names.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Create variables and give them good names. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “int” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: int — An integer — a whole number with no decimal point, such as 7 or -3. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: float — A number with a decimal point, such as 3.5 or 19.99. Step 2: str — A string — text inside quotes, such as \"Maya\" or \"Hello\". Step 3: bool — A Boolean — a value that is either True or False. Step 4: Data type — The kind of value something is: int, float, str, or bool. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Follow the rules for naming variables in Python. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Snake case” mean?",
      "choices": [
        "A Boolean — a value that is either True or False.",
        "Giving a variable a new value later in the program; the old value is replaced.",
        "A word Python reserves for itself, such as if or while, which you cannot use as a variable name.",
        "Writing names with lowercase words joined by underscores, such as first_name."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Snake case means: Writing names with lowercase words joined by underscores, such as first_name. (a) is the definition of bool, not of Snake case. (b) is the definition of Keyword, not of Snake case. (c) is the definition of Reassignment, not of Snake case."
    },
    {
      "q": "What does the term “String” mean?",
      "choices": [
        "Text inside quotes, such as \"Maya\". A string is the str data type.",
        "A built-in Python function that tells you the type of a value.",
        "A number with a decimal point, such as 3.5 or 19.99.",
        "An integer — a whole number with no decimal point, such as 7 or -3."
      ],
      "answer": 0,
      "explanation": "Correct: (a). String means: Text inside quotes, such as \"Maya\". A string is the str data type. (b) is the definition of type(), not of String. (c) is the definition of int, not of String. (d) is the definition of float, not of String."
    },
    {
      "q": "Which term means: A single piece of data, such as 7, 3.5, or \"Maya\".",
      "choices": [
        "Variable",
        "Value",
        "type()",
        "Data type"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Value is the term for: A single piece of data, such as 7, 3.5, or \"Maya\". (a) type() means A built-in Python function that tells you the type of a value. (c) Variable means A named box that holds a value, such as a name or a number, so a program can use it later. (d) Data type means The kind of value something is: int, float, str, or bool."
    },
    {
      "q": "Which term means: A number with a decimal point, such as 3.5 or 19.99.",
      "choices": [
        "bool",
        "float",
        "type()",
        "Data type"
      ],
      "answer": 1,
      "explanation": "Correct: (b). float is the term for: A number with a decimal point, such as 3.5 or 19.99. (a) type() means A built-in Python function that tells you the type of a value. (c) bool means A Boolean — a value that is either True or False. (d) Data type means The kind of value something is: int, float, str, or bool."
    },
    {
      "q": "Which of the following is TRUE about Data type?",
      "choices": [
        "A word Python reserves for itself, such as if or while, which you cannot use as a variable name.",
        "Putting a value into a variable with =, such as age = 34.",
        "The name you give a variable. It must start with a letter or underscore and contain only letters, numbers, and underscores.",
        "The kind of value something is: int, float, str, or bool."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Data type: The kind of value something is: int, float, str, or bool. (a) describes Assignment, not Data type. (b) describes Variable name, not Data type. (c) describes Keyword, not Data type."
    },
    {
      "q": "What does the term “Snake case” mean?",
      "choices": [
        "Putting a value into a variable with =, such as age = 34.",
        "Writing names with lowercase words joined by underscores, such as first_name.",
        "A word Python reserves for itself, such as if or while, which you cannot use as a variable name.",
        "A string — text inside quotes, such as \"Maya\" or \"Hello\"."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Snake case means: Writing names with lowercase words joined by underscores, such as first_name. (a) is the definition of Assignment, not of Snake case. (c) is the definition of str, not of Snake case. (d) is the definition of Keyword, not of Snake case."
    },
    {
      "q": "What does this code print? name = \"Maya\" / age = 34 / print(name) / print(age)",
      "choices": [
        "Maya then 34",
        "34 then Maya",
        "name then age",
        "Nothing — it is an error"
      ],
      "answer": 0,
      "explanation": "Correct: (a). print(name) shows Maya and print(age) shows 34, in order. (b) is wrong: the prints run in the order they are written. (c) is wrong: print shows the value inside the box, not the box's name. (d) is wrong: both variables were given values before printing, so the code runs fine."
    },
    {
      "q": "Which of these is a valid Python variable name?",
      "choices": [
        "2fast",
        "first-name",
        "first_name",
        "my name"
      ],
      "answer": 2,
      "explanation": "Correct: (c). first_name starts with a letter and uses only letters and an underscore. (a) is wrong: a name cannot start with a number. (b) is wrong: a dash is not allowed in a name. (d) is wrong: spaces are not allowed in a name."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Variables & Data Types: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a variable is and why programs need them.</p>\n<p><strong>Key terms:</strong> Variable · Value · Assignment · int · float · str · bool · Data type.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a variable is and why programs need them.</li>\n<li>Create variables and give them good names.</li>\n<li>Name the four basic data types: int, float, str, and bool.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
