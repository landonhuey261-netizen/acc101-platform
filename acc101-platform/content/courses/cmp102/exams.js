// cmp102 — Midterm and Final exams.
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
        "q": "A student is asked to define “Debugging” on a test. Which answer is correct?",
        "choices": [
          "A program for writing code, such as VS Code.",
          "Finding and fixing the mistakes in a program.",
          "A mistake in a program that makes it behave wrongly or not run at all.",
          "Instructions written in a programming language that a computer can follow."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Debugging means: Finding and fixing the mistakes in a program. (a) is the definition of Bug, not of Debugging. (c) is the definition of Code, not of Debugging. (d) is the definition of Editor, not of Debugging."
      },
      {
        "module": 1,
        "q": "During a review, a classmate describes something as: “A note inside code, starting with #, that the computer ignores and humans read.” Which term are they describing?",
        "choices": [
          "Program",
          "Syntax",
          "Comment",
          "Interpreter"
        ],
        "answer": 2,
        "explanation": "Correct: (c). That description is Comment: A note inside code, starting with #, that the computer ignores and humans read. (a) Program means A set of instructions that tells a computer how to do a job. (b) Syntax means The exact spelling and punctuation rules of a programming language. (d) Interpreter means The program that reads Python code and carries it out, line by line."
      },
      {
        "module": 1,
        "q": "Which of the following is TRUE about Python?",
        "choices": [
          "The program that reads Python code and carries it out, line by line.",
          "The current version of Python. All code in this course is Python 3.",
          "A popular, beginner-friendly programming language, known for reading almost like plain English.",
          "A set of instructions that tells a computer how to do a job."
        ],
        "answer": 2,
        "explanation": "Correct: (c). Python: A popular, beginner-friendly programming language, known for reading almost like plain English. (a) describes Python 3, not Python. (b) describes Interpreter, not Python. (d) describes Program, not Python."
      },
      {
        "module": 1,
        "q": "A student is asked to define “VS Code” on a test. Which answer is correct?",
        "choices": [
          "A note inside code, starting with #, that the computer ignores and humans read.",
          "Visual Studio Code — a free program for writing and running code, made by Microsoft.",
          "The text window where you type commands to run programs.",
          "Making the computer carry out a program's instructions."
        ],
        "answer": 1,
        "explanation": "Correct: (b). VS Code means: Visual Studio Code — a free program for writing and running code, made by Microsoft. (a) is the definition of Run, not of VS Code. (c) is the definition of Comment, not of VS Code. (d) is the definition of Terminal, not of VS Code."
      },
      {
        "module": 2,
        "q": "During a review, a classmate describes something as: “A single piece of data, such as 7, 3.5, or \"Maya\".” Which term are they describing?",
        "choices": [
          "Keyword",
          "Variable",
          "Snake case",
          "Value"
        ],
        "answer": 3,
        "explanation": "Correct: (d). That description is Value: A single piece of data, such as 7, 3.5, or \"Maya\". (a) Keyword means A word Python reserves for itself, such as if or while, which you cannot use as a variable name. (b) Variable means A named box that holds a value, such as a name or a number, so a program can use it later. (c) Snake case means Writing names with lowercase words joined by underscores, such as first_name."
      },
      {
        "module": 2,
        "q": "Which of the following is TRUE about float?",
        "choices": [
          "A number with a decimal point, such as 3.5 or 19.99.",
          "A word Python reserves for itself, such as if or while, which you cannot use as a variable name.",
          "A named box that holds a value, such as a name or a number, so a program can use it later.",
          "A string — text inside quotes, such as \"Maya\" or \"Hello\"."
        ],
        "answer": 0,
        "explanation": "Correct: (a). float: A number with a decimal point, such as 3.5 or 19.99. (b) describes str, not float. (c) describes Keyword, not float. (d) describes Variable, not float."
      },
      {
        "module": 2,
        "q": "A student is asked to define “Data type” on a test. Which answer is correct?",
        "choices": [
          "The kind of value something is: int, float, str, or bool.",
          "Writing names with lowercase words joined by underscores, such as first_name.",
          "A whole number with no decimal point, such as 7. An integer is the int data type.",
          "An integer — a whole number with no decimal point, such as 7 or -3."
        ],
        "answer": 0,
        "explanation": "Correct: (a). Data type means: The kind of value something is: int, float, str, or bool. (b) is the definition of int, not of Data type. (c) is the definition of Snake case, not of Data type. (d) is the definition of Integer, not of Data type."
      },
      {
        "module": 2,
        "q": "During a review, a classmate describes something as: “Writing names with lowercase words joined by underscores, such as first_name.” Which term are they describing?",
        "choices": [
          "String",
          "Snake case",
          "float",
          "Reassignment"
        ],
        "answer": 1,
        "explanation": "Correct: (b). That description is Snake case: Writing names with lowercase words joined by underscores, such as first_name. (a) String means Text inside quotes, such as \"Maya\". A string is the str data type. (c) float means A number with a decimal point, such as 3.5 or 19.99. (d) Reassignment means Giving a variable a new value later in the program; the old value is replaced."
      },
      {
        "module": 3,
        "q": "Which of the following is TRUE about upper()?",
        "choices": [
          "A built-in function that converts a value to an integer, such as int(\"5\") is 5.",
          "A string method that returns the string in capital letters.",
          "A built-in function that converts a value to a decimal number, such as float(\"3.5\") is 3.5.",
          "A built-in function that converts a value to a string, such as str(7) is \"7\"."
        ],
        "answer": 1,
        "explanation": "Correct: (b). upper(): A string method that returns the string in capital letters. (a) describes float(), not upper(). (c) describes int(), not upper(). (d) describes str(), not upper()."
      },
      {
        "module": 3,
        "q": "A student is asked to define “int()” on a test. Which answer is correct?",
        "choices": [
          "A built-in function that converts a value to an integer, such as int(\"5\") is 5.",
          "A string starting with f that lets you put variables inside curly braces, such as f\"Hello, {name}!\"",
          "A string method that returns the string in capital letters.",
          "A built-in function that converts a value to a decimal number, such as float(\"3.5\") is 3.5."
        ],
        "answer": 0,
        "explanation": "Correct: (a). int() means: A built-in function that converts a value to an integer, such as int(\"5\") is 5. (b) is the definition of float(), not of int(). (c) is the definition of upper(), not of int(). (d) is the definition of f-string, not of int()."
      },
      {
        "module": 3,
        "q": "During a review, a classmate describes something as: “A backslash sequence inside a string for a special character, such as \\n for a new line.” Which term are they describing?",
        "choices": [
          "int()",
          "String",
          "Escape character",
          "print()"
        ],
        "answer": 2,
        "explanation": "Correct: (c). That description is Escape character: A backslash sequence inside a string for a special character, such as \\n for a new line. (a) String means Text inside quotes, such as \"Maya\". A string is the str data type. (b) print() means The Python function that shows text or a value on the screen. (d) int() means A built-in function that converts a value to an integer, such as int(\"5\") is 5."
      },
      {
        "module": 3,
        "q": "Which of the following is TRUE about String?",
        "choices": [
          "A backslash sequence inside a string for a special character, such as \\n for a new line.",
          "The Python function that asks the user to type something and gives it back as a string.",
          "Joining two strings together with +, such as \"Hello, \" + \"Maya\".",
          "Text inside quotes, such as \"Maya\". A string is the str data type."
        ],
        "answer": 3,
        "explanation": "Correct: (d). String: Text inside quotes, such as \"Maya\". A string is the str data type. (a) describes Concatenation, not String. (b) describes Escape character, not String. (c) describes input(), not String."
      },
      {
        "module": 4,
        "q": "A student is asked to define “and” on a test. Which answer is correct?",
        "choices": [
          "The - operator: 5 - 2 is 3.",
          "The ** operator: 2 ** 3 is 8.",
          "An operator that does maths: + - * / // % **.",
          "A logical operator: True only when both sides are True."
        ],
        "answer": 3,
        "explanation": "Correct: (d). and means: A logical operator: True only when both sides are True. (a) is the definition of Subtraction, not of and. (b) is the definition of Arithmetic operator, not of and. (c) is the definition of Power, not of and."
      },
      {
        "module": 4,
        "q": "During a review, a classmate describes something as: “The rules for which maths happens first: brackets, powers, multiplication and division, then addition and subtraction.” Which term are they describing?",
        "choices": [
          "Multiplication",
          "Order of operations",
          "not",
          "and"
        ],
        "answer": 1,
        "explanation": "Correct: (b). That description is Order of operations: The rules for which maths happens first: brackets, powers, multiplication and division, then addition and subtraction. (a) and means A logical operator: True only when both sides are True. (c) Multiplication means The * operator: 4 * 3 is 12. It also repeats strings. (d) not means A logical operator: flips True to False and False to True."
      },
      {
        "module": 4,
        "q": "Which of the following is TRUE about Addition?",
        "choices": [
          "The ** operator: 2 ** 3 is 8.",
          "A symbol that does something to values, such as + for addition or == for comparison.",
          "A logical operator: True when at least one side is True.",
          "The + operator: 2 + 3 is 5. It also joins strings."
        ],
        "answer": 3,
        "explanation": "Correct: (d). Addition: The + operator: 2 + 3 is 5. It also joins strings. (a) describes Power, not Addition. (b) describes Operator, not Addition. (c) describes or, not Addition."
      },
      {
        "module": 4,
        "q": "A student is asked to define “Division” on a test. Which answer is correct?",
        "choices": [
          "The ** operator: 2 ** 3 is 8.",
          "A logical operator: True only when both sides are True.",
          "The % operator: 10 % 4 is 2 — the remainder after division.",
          "The / operator: 10 / 4 is 2.5. Division in Python always gives a float."
        ],
        "answer": 3,
        "explanation": "Correct: (d). Division means: The / operator: 10 / 4 is 2.5. Division in Python always gives a float. (a) is the definition of Modulo, not of Division. (b) is the definition of Power, not of Division. (c) is the definition of and, not of Division."
      },
      {
        "module": 5,
        "q": "During a review, a classmate describes something as: “The true/false question an if statement asks, such as age >= 18.” Which term are they describing?",
        "choices": [
          "Block",
          "and",
          "Condition",
          "Truthy"
        ],
        "answer": 2,
        "explanation": "Correct: (c). That description is Condition: The true/false question an if statement asks, such as age >= 18. (a) and means A logical operator: True only when both sides are True. (b) Block means A group of lines that belong together, marked by indentation in Python. (d) Truthy means A value Python treats as True in a condition, such as a non-empty string or a non-zero number."
      },
      {
        "module": 5,
        "q": "Which of the following is TRUE about Block?",
        "choices": [
          "A group of lines that belong together, marked by indentation in Python.",
          "A value Python treats as True in a condition, such as a non-empty string or a non-zero number.",
          "A logical operator: flips True to False and False to True.",
          "The block that runs when the if condition is False."
        ],
        "answer": 0,
        "explanation": "Correct: (a). Block: A group of lines that belong together, marked by indentation in Python. (b) describes not, not Block. (c) describes Truthy, not Block. (d) describes else, not Block."
      },
      {
        "module": 5,
        "q": "A student is asked to define “Comparison operator” on a test. Which answer is correct?",
        "choices": [
          "An operator that compares two values and gives True or False: == != < > <= >=.",
          "A logical operator: True when at least one side is True.",
          "The true/false question an if statement asks, such as age >= 18.",
          "A value that is either True or False."
        ],
        "answer": 0,
        "explanation": "Correct: (a). Comparison operator means: An operator that compares two values and gives True or False: == != < > <= >=. (b) is the definition of or, not of Comparison operator. (c) is the definition of Boolean, not of Comparison operator. (d) is the definition of Condition, not of Comparison operator."
      },
      {
        "module": 5,
        "q": "During a review, a classmate describes something as: “A logical operator: True when at least one side is True.” Which term are they describing?",
        "choices": [
          "Nested if",
          "or",
          "elif",
          "not"
        ],
        "answer": 1,
        "explanation": "Correct: (b). That description is or: A logical operator: True when at least one side is True. (a) elif means Short for “else if” — an extra condition checked when the earlier ones were False. (c) not means A logical operator: flips True to False and False to True. (d) Nested if means An if statement inside another if statement."
      },
      {
        "module": 6,
        "q": "Which of the following is TRUE about break?",
        "choices": [
          "A statement that leaves a loop immediately, whatever the loop's condition says.",
          "The true/false question a while loop asks before each round.",
          "A loop that keeps running while its condition is True, and stops when the condition becomes False.",
          "A loop that never stops, usually because its condition never becomes False."
        ],
        "answer": 0,
        "explanation": "Correct: (a). break: A statement that leaves a loop immediately, whatever the loop's condition says. (b) describes Condition, not break. (c) describes while loop, not break. (d) describes Infinite loop, not break."
      },
      {
        "module": 6,
        "q": "A student is asked to define “Counter” on a test. Which answer is correct?",
        "choices": [
          "A loop that keeps running while its condition is True, and stops when the condition becomes False.",
          "A variable that counts how many times something has happened, often increased by 1 inside a loop.",
          "Code that repeats a block of instructions, instead of you writing the same lines again and again.",
          "An ordered collection of items you can loop over, such as a range, a string, or a list."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Counter means: A variable that counts how many times something has happened, often increased by 1 inside a loop. (a) is the definition of while loop, not of Counter. (c) is the definition of Loop, not of Counter. (d) is the definition of Sequence, not of Counter."
      },
      {
        "module": 6,
        "q": "During a review, a classmate describes something as: “A loop inside another loop.” Which term are they describing?",
        "choices": [
          "range()",
          "Condition",
          "Nested loop",
          "Accumulator"
        ],
        "answer": 2,
        "explanation": "Correct: (c). That description is Nested loop: A loop inside another loop. (a) range() means A built-in function that produces a sequence of numbers: range(3) gives 0, 1, 2. (b) Condition means The true/false question a while loop asks before each round. (d) Accumulator means A variable that adds up values inside a loop, such as a running total."
      },
      {
        "module": 6,
        "q": "A teacher wants a program that prints Good morning! to every student in a class list of 30 names, without writing 30 separate print lines. What programming idea should she use?",
        "choices": [
          "A variable, to store one student's name at a time.",
          "A loop, which repeats a block of instructions instead of writing the same lines again and again.",
          "A comment, to explain in words what the program does.",
          "An if statement, to print the greeting once when a condition is true."
        ],
        "answer": 1,
        "explanation": "Correct: (b). She should use a loop: code that repeats a block of instructions, instead of writing the same lines again and again, so one print line runs once per name. (a) is wrong: a variable only stores one value at a time; it does not repeat anything. (c) is wrong: a comment is just a note for the reader and the computer ignores it. (d) is wrong: an if statement runs its block at most once, so it cannot print the greeting 30 times."
      },
      {
        "module": 6,
        "q": "Sam writes a program that counts how many of 50 quiz answers are correct. He needs a variable that starts at 0 and goes up by 1 every time an answer is right. What is this variable called?",
        "choices": [
          "A counter: a variable that counts how many times something has happened, often increased by 1 inside a loop.",
          "An accumulator, which adds up the values themselves rather than counting how many there are.",
          "A loop variable, which holds the current item being visited by a for loop.",
          "A condition, which is the true or false question a loop asks before each round."
        ],
        "answer": 0,
        "explanation": "Correct: (a). Sam needs a counter: a variable that counts how many times something has happened, often increased by 1 inside a loop, so it ends up holding the number of correct answers. (b) is wrong: an accumulator adds up values, such as a running total of scores, rather than counting how many events happened. (c) is wrong: a loop variable holds the current item being visited, not a running count. (d) is wrong: a condition is the true or false question a loop asks; it is not a variable at all."
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
        "q": "A student is asked to define “Terminal” on a test. Which answer is correct?",
        "choices": [
          "A language for writing instructions for a computer, such as Python or JavaScript.",
          "A step-by-step plan for solving a problem, written before you write any code.",
          "A popular, beginner-friendly programming language, known for reading almost like plain English.",
          "The text window where you type commands to run programs."
        ],
        "answer": 3,
        "explanation": "Correct: (d). Terminal means: The text window where you type commands to run programs. (a) is the definition of Algorithm, not of Terminal. (b) is the definition of Python, not of Terminal. (c) is the definition of Programming language, not of Terminal."
      },
      {
        "module": 1,
        "q": "During a review, a classmate describes something as: “A mistake in a program that makes it behave wrongly or not run at all.” Which term are they describing?",
        "choices": [
          "Algorithm",
          "Bug",
          "Programming language",
          "Program"
        ],
        "answer": 1,
        "explanation": "Correct: (b). That description is Bug: A mistake in a program that makes it behave wrongly or not run at all. (a) Algorithm means A step-by-step plan for solving a problem, written before you write any code. (c) Programming language means A language for writing instructions for a computer, such as Python or JavaScript. (d) Program means A set of instructions that tells a computer how to do a job."
      },
      {
        "module": 1,
        "q": "Which of the following is TRUE about Interpreter?",
        "choices": [
          "Instructions written in a programming language that a computer can follow.",
          "A popular, beginner-friendly programming language, known for reading almost like plain English.",
          "Visual Studio Code — a free program for writing and running code, made by Microsoft.",
          "The program that reads Python code and carries it out, line by line."
        ],
        "answer": 3,
        "explanation": "Correct: (d). Interpreter: The program that reads Python code and carries it out, line by line. (a) describes Code, not Interpreter. (b) describes Python, not Interpreter. (c) describes VS Code, not Interpreter."
      },
      {
        "module": 2,
        "q": "During a review, a classmate describes something as: “A word Python reserves for itself, such as if or while, which you cannot use as a variable name.” Which term are they describing?",
        "choices": [
          "type()",
          "Keyword",
          "Variable",
          "float"
        ],
        "answer": 1,
        "explanation": "Correct: (b). That description is Keyword: A word Python reserves for itself, such as if or while, which you cannot use as a variable name. (a) Variable means A named box that holds a value, such as a name or a number, so a program can use it later. (c) float means A number with a decimal point, such as 3.5 or 19.99. (d) type() means A built-in Python function that tells you the type of a value."
      },
      {
        "module": 2,
        "q": "Which of the following is TRUE about Variable?",
        "choices": [
          "A named box that holds a value, such as a name or a number, so a program can use it later.",
          "Putting a value into a variable with =, such as age = 34.",
          "A word Python reserves for itself, such as if or while, which you cannot use as a variable name.",
          "Giving a variable a new value later in the program; the old value is replaced."
        ],
        "answer": 0,
        "explanation": "Correct: (a). Variable: A named box that holds a value, such as a name or a number, so a program can use it later. (b) describes Reassignment, not Variable. (c) describes Keyword, not Variable. (d) describes Assignment, not Variable."
      },
      {
        "module": 2,
        "q": "A student is asked to define “int” on a test. Which answer is correct?",
        "choices": [
          "An integer — a whole number with no decimal point, such as 7 or -3.",
          "A built-in Python function that tells you the type of a value.",
          "The name you give a variable. It must start with a letter or underscore and contain only letters, numbers, and underscores.",
          "The kind of value something is: int, float, str, or bool."
        ],
        "answer": 0,
        "explanation": "Correct: (a). int means: An integer — a whole number with no decimal point, such as 7 or -3. (b) is the definition of Data type, not of int. (c) is the definition of type(), not of int. (d) is the definition of Variable name, not of int."
      },
      {
        "module": 3,
        "q": "Which of the following is TRUE about input()?",
        "choices": [
          "Text inside quotes, such as \"Maya\". A string is the str data type.",
          "A function that belongs to a value, called with a dot, such as word.upper().",
          "A string method that returns the string in small letters.",
          "The Python function that asks the user to type something and gives it back as a string."
        ],
        "answer": 3,
        "explanation": "Correct: (d). input(): The Python function that asks the user to type something and gives it back as a string. (a) describes Method, not input(). (b) describes String, not input(). (c) describes lower(), not input()."
      },
      {
        "module": 3,
        "q": "A student is asked to define “len()” on a test. Which answer is correct?",
        "choices": [
          "A string method that returns the string in small letters.",
          "A built-in function that converts a value to an integer, such as int(\"5\") is 5.",
          "A string method that returns the string in capital letters.",
          "A built-in function that gives the length of a string (or a list): len(\"Python\") is 6."
        ],
        "answer": 3,
        "explanation": "Correct: (d). len() means: A built-in function that gives the length of a string (or a list): len(\"Python\") is 6. (a) is the definition of lower(), not of len(). (b) is the definition of upper(), not of len(). (c) is the definition of int(), not of len()."
      },
      {
        "module": 3,
        "q": "During a review, a classmate describes something as: “A function that belongs to a value, called with a dot, such as word.upper().” Which term are they describing?",
        "choices": [
          "Index",
          "Method",
          "f-string",
          "input()"
        ],
        "answer": 1,
        "explanation": "Correct: (b). That description is Method: A function that belongs to a value, called with a dot, such as word.upper(). (a) f-string means A string starting with f that lets you put variables inside curly braces, such as f\"Hello, {name}!\" (c) Index means The position of a character in a string, counting from 0: in \"Python\", P is at index 0. (d) input() means The Python function that asks the user to type something and gives it back as a string."
      },
      {
        "module": 4,
        "q": "A student is asked to define “Modulo” on a test. Which answer is correct?",
        "choices": [
          "An operator that compares two values and gives True or False: == != < > <= >=.",
          "The * operator: 4 * 3 is 12. It also repeats strings.",
          "A symbol that does something to values, such as + for addition or == for comparison.",
          "The % operator: 10 % 4 is 2 — the remainder after division."
        ],
        "answer": 3,
        "explanation": "Correct: (d). Modulo means: The % operator: 10 % 4 is 2 — the remainder after division. (a) is the definition of Multiplication, not of Modulo. (b) is the definition of Comparison operator, not of Modulo. (c) is the definition of Operator, not of Modulo."
      },
      {
        "module": 4,
        "q": "During a review, a classmate describes something as: “A value that is either True or False.” Which term are they describing?",
        "choices": [
          "Arithmetic operator",
          "Addition",
          "Boolean",
          "Order of operations"
        ],
        "answer": 2,
        "explanation": "Correct: (c). That description is Boolean: A value that is either True or False. (a) Order of operations means The rules for which maths happens first: brackets, powers, multiplication and division, then addition and subtraction. (b) Addition means The + operator: 2 + 3 is 5. It also joins strings. (d) Arithmetic operator means An operator that does maths: + - * / // % **."
      },
      {
        "module": 4,
        "q": "Which of the following is TRUE about not?",
        "choices": [
          "A logical operator: flips True to False and False to True.",
          "The + operator: 2 + 3 is 5. It also joins strings.",
          "The rules for which maths happens first: brackets, powers, multiplication and division, then addition and subtraction.",
          "The // operator: 10 // 4 is 2 — division rounded down to a whole number."
        ],
        "answer": 0,
        "explanation": "Correct: (a). not: A logical operator: flips True to False and False to True. (b) describes Addition, not not. (c) describes Floor division, not not. (d) describes Order of operations, not not."
      },
      {
        "module": 5,
        "q": "During a review, a classmate describes something as: “One of the possible paths a program can take at a decision point.” Which term are they describing?",
        "choices": [
          "Branch",
          "Falsy",
          "Comparison operator",
          "else"
        ],
        "answer": 0,
        "explanation": "Correct: (a). That description is Branch: One of the possible paths a program can take at a decision point. (b) Comparison operator means An operator that compares two values and gives True or False: == != < > <= >=. (c) Falsy means A value Python treats as False in a condition, such as 0, an empty string, or None. (d) else means The block that runs when the if condition is False."
      },
      {
        "module": 5,
        "q": "Which of the following is TRUE about if statement?",
        "choices": [
          "A logical operator: True only when both sides are True.",
          "The true/false question an if statement asks, such as age >= 18.",
          "A statement that runs a block of code only when its condition is True.",
          "The spaces at the start of a line. In Python, indentation shows which lines belong to an if, a loop, or a function."
        ],
        "answer": 2,
        "explanation": "Correct: (c). if statement: A statement that runs a block of code only when its condition is True. (a) describes Indentation, not if statement. (b) describes and, not if statement. (d) describes Condition, not if statement."
      },
      {
        "module": 5,
        "q": "A student is asked to define “elif” on a test. Which answer is correct?",
        "choices": [
          "Short for “else if” — an extra condition checked when the earlier ones were False.",
          "A logical operator: True only when both sides are True.",
          "A logical operator: True when at least one side is True.",
          "The block that runs when the if condition is False."
        ],
        "answer": 0,
        "explanation": "Correct: (a). elif means: Short for “else if” — an extra condition checked when the earlier ones were False. (b) is the definition of and, not of elif. (c) is the definition of else, not of elif. (d) is the definition of or, not of elif."
      },
      {
        "module": 6,
        "q": "Which of the following is TRUE about while loop?",
        "choices": [
          "A variable that counts how many times something has happened, often increased by 1 inside a loop.",
          "The variable a for loop uses to hold the current item, such as i in for i in range(3).",
          "A loop that keeps running while its condition is True, and stops when the condition becomes False.",
          "One single run through a loop's block. A loop that runs three times does three iterations."
        ],
        "answer": 2,
        "explanation": "Correct: (c). while loop: A loop that keeps running while its condition is True, and stops when the condition becomes False. (a) describes Counter, not while loop. (b) describes Iteration, not while loop. (d) describes Loop variable, not while loop."
      },
      {
        "module": 6,
        "q": "A student is asked to define “Loop variable” on a test. Which answer is correct?",
        "choices": [
          "A classic mistake where a loop runs one time too many or one time too few.",
          "The variable a for loop uses to hold the current item, such as i in for i in range(3).",
          "A variable that counts how many times something has happened, often increased by 1 inside a loop.",
          "Code that repeats a block of instructions, instead of you writing the same lines again and again."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Loop variable means: The variable a for loop uses to hold the current item, such as i in for i in range(3). (a) is the definition of Off-by-one error, not of Loop variable. (c) is the definition of Counter, not of Loop variable. (d) is the definition of Loop, not of Loop variable."
      },
      {
        "module": 6,
        "q": "During a review, a classmate describes something as: “A loop that never stops, usually because its condition never becomes False.” Which term are they describing?",
        "choices": [
          "Infinite loop",
          "while loop",
          "Sequence",
          "Nested loop"
        ],
        "answer": 0,
        "explanation": "Correct: (a). That description is Infinite loop: A loop that never stops, usually because its condition never becomes False. (b) Nested loop means A loop inside another loop. (c) while loop means A loop that keeps running while its condition is True, and stops when the condition becomes False. (d) Sequence means An ordered collection of items you can loop over, such as a range, a string, or a list."
      },
      {
        "module": 7,
        "q": "A student is asked to define “Local variable” on a test. Which answer is correct?",
        "choices": [
          "The keyword that starts a function definition in Python.",
          "The part of a program where a variable exists and can be used.",
          "A named block of code that does one job, which you can run again and again by calling its name.",
          "A variable created inside a function; it exists only while the function runs."
        ],
        "answer": 3,
        "explanation": "Correct: (d). Local variable means: A variable created inside a function; it exists only while the function runs. (a) is the definition of def, not of Local variable. (b) is the definition of Function, not of Local variable. (c) is the definition of Scope, not of Local variable."
      },
      {
        "module": 7,
        "q": "During a review, a classmate describes something as: “A short description at the top of a function, in triple quotes, explaining what the function does.” Which term are they describing?",
        "choices": [
          "Side effect",
          "def",
          "Global variable",
          "Docstring"
        ],
        "answer": 3,
        "explanation": "Correct: (d). That description is Docstring: A short description at the top of a function, in triple quotes, explaining what the function does. (a) def means The keyword that starts a function definition in Python. (b) Side effect means Something a function does besides returning a value, such as printing or changing a file. (c) Global variable means A variable created outside any function; it can be read anywhere in the program."
      },
      {
        "module": 7,
        "q": "Which of the following is TRUE about Built-in function?",
        "choices": [
          "A variable created inside a function; it exists only while the function runs.",
          "The part of a program where a variable exists and can be used.",
          "A variable listed in a function's definition that receives a value when the function is called.",
          "A function Python provides for free, such as print(), len(), and range()."
        ],
        "answer": 3,
        "explanation": "Correct: (d). Built-in function: A function Python provides for free, such as print(), len(), and range(). (a) describes Scope, not Built-in function. (b) describes Local variable, not Built-in function. (c) describes Parameter, not Built-in function."
      },
      {
        "module": 8,
        "q": "During a review, a classmate describes something as: “A list that contains other lists, such as [[1, 2], [3, 4]].” Which term are they describing?",
        "choices": [
          "Tuple",
          "append()",
          "Immutable",
          "Nested list"
        ],
        "answer": 3,
        "explanation": "Correct: (d). That description is Nested list: A list that contains other lists, such as [[1, 2], [3, 4]]. (a) Tuple means An ordered collection like a list, but written with round brackets and immutable: (1, 2). (b) append() means A list method that adds an item to the end of a list. (c) Immutable means Unchangeable. Strings and tuples are immutable: you cannot change their items in place."
      },
      {
        "module": 8,
        "q": "Which of the following is TRUE about List?",
        "choices": [
          "The position of an item in a list, counting from 0: in [\"apple\", \"banana\"], \"apple\" is at index 0.",
          "An ordered collection of values in square brackets, such as [\"apple\", \"banana\", \"cherry\"].",
          "One item in a list.",
          "Code that repeats a block of instructions — often used to visit every item in a list."
        ],
        "answer": 1,
        "explanation": "Correct: (b). List: An ordered collection of values in square brackets, such as [\"apple\", \"banana\", \"cherry\"]. (a) describes Element, not List. (c) describes Loop, not List. (d) describes Index, not List."
      },
      {
        "module": 8,
        "q": "Ana has a list of her classmates: friends = ['Mia', 'Noah', 'Zoe', 'Liam']. She wants her program to work out how many names are in the list. Which code does that?",
        "choices": [
          "friends[0], which gives the first item in the list, 'Mia', not how many items there are.",
          "len(friends), a built-in function that gives the number of items in a list.",
          "print(friends), which shows the whole list on screen but does not count its items.",
          "friends + 1, which is not valid code because you cannot add a number to a list."
        ],
        "answer": 1,
        "explanation": "Correct: (b). len(friends) is a built-in function that gives the number of items in a list, so it returns 4 for Ana's list. (a) is wrong: friends[0] gives one item, the first name, not the count. (c) is wrong: print(friends) only displays the list; it does not work out how many items it holds. (d) is wrong: adding a number to a list is not valid, and it would not count anything."
      },
      {
        "module": 9,
        "q": "Which of the following is TRUE about Value?",
        "choices": [
          "An ordered collection of values in square brackets; use a list when order matters and a dictionary when labels matter.",
          "The statement that removes a key-value pair from a dictionary: del user[\"age\"].",
          "A dictionary method that reads a key safely: it returns a default instead of failing when the key is missing.",
          "The data stored under a key in a dictionary, such as \"Maya\" under \"name\"."
        ],
        "answer": 3,
        "explanation": "Correct: (d). Value: The data stored under a key in a dictionary, such as \"Maya\" under \"name\". (a) describes get(), not Value. (b) describes List, not Value. (c) describes del, not Value."
      },
      {
        "module": 9,
        "q": "A student is asked to define “keys()” on a test. Which answer is correct?",
        "choices": [
          "The data stored under a key in a dictionary, such as \"Maya\" under \"name\".",
          "Changeable. Dictionaries are mutable: you can add, change, and remove pairs after creating them.",
          "A dictionary method that gives all the values.",
          "A dictionary method that gives all the keys."
        ],
        "answer": 3,
        "explanation": "Correct: (d). keys() means: A dictionary method that gives all the keys. (a) is the definition of Mutable, not of keys(). (b) is the definition of Value, not of keys(). (c) is the definition of values(), not of keys()."
      },
      {
        "module": 9,
        "q": "During a review, a classmate describes something as: “A dictionary method that adds or changes several key-value pairs at once.” Which term are they describing?",
        "choices": [
          "keys()",
          "update()",
          "List",
          "items()"
        ],
        "answer": 1,
        "explanation": "Correct: (b). That description is update(): A dictionary method that adds or changes several key-value pairs at once. (a) keys() means A dictionary method that gives all the keys. (c) List means An ordered collection of values in square brackets; use a list when order matters and a dictionary when labels matter. (d) items() means A dictionary method that gives all the key-value pairs, for looping."
      },
      {
        "module": 10,
        "q": "A student is asked to define “readline()” on a test. Which answer is correct?",
        "choices": [
          "How text is turned into bytes in a file. UTF-8 is the standard encoding Python uses.",
          "Opening a file with \"r\" to read what is in it.",
          "A file method that reads one line from a file.",
          "A file method that reads the whole file as one string."
        ],
        "answer": 2,
        "explanation": "Correct: (c). readline() means: A file method that reads one line from a file. (a) is the definition of Encoding, not of readline(). (b) is the definition of Read mode, not of readline(). (d) is the definition of read(), not of readline()."
      },
      {
        "module": 10,
        "q": "During a review, a classmate describes something as: “A file that holds plain readable text, such as .txt.” Which term are they describing?",
        "choices": [
          "Append mode",
          "Encoding",
          "Close",
          "Text file"
        ],
        "answer": 3,
        "explanation": "Correct: (d). That description is Text file: A file that holds plain readable text, such as .txt. (a) Close means Finishing with a file so the computer saves it properly and other programs can use it. (b) Append mode means Opening a file with \"a\" to add new content at the end without erasing what is there. (c) Encoding means How text is turned into bytes in a file. UTF-8 is the standard encoding Python uses."
      },
      {
        "module": 10,
        "q": "Which of the following is TRUE about Close?",
        "choices": [
          "The invisible character at the end of each line in a text file, written as \\n.",
          "A file method that reads one line from a file.",
          "Finishing with a file so the computer saves it properly and other programs can use it.",
          "The Python function that opens a file so a program can read from it or write to it."
        ],
        "answer": 2,
        "explanation": "Correct: (c). Close: Finishing with a file so the computer saves it properly and other programs can use it. (a) describes readline(), not Close. (b) describes Newline, not Close. (d) describes open(), not Close."
      },
      {
        "module": 11,
        "q": "During a review, a classmate describes something as: “A mistake where the program runs without crashing but gives the wrong answer.” Which term are they describing?",
        "choices": [
          "Print debugging",
          "Error",
          "FileNotFoundError",
          "Logic error"
        ],
        "answer": 3,
        "explanation": "Correct: (d). That description is Logic error: A mistake where the program runs without crashing but gives the wrong answer. (a) FileNotFoundError means An error when a program tries to open a file that does not exist. (b) Print debugging means Finding a bug by adding print() calls to show what values variables actually hold while the program runs. (c) Error means A problem that stops a program from running or makes it behave wrongly."
      },
      {
        "module": 11,
        "q": "Which of the following is TRUE about Error?",
        "choices": [
          "An error when a value has the right type but the wrong content, such as int(\"hello\").",
          "A problem that stops a program from running or makes it behave wrongly.",
          "Finding a bug by adding print() calls to show what values variables actually hold while the program runs.",
          "An error when an operation is used on the wrong type of value, such as adding a number and a string."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Error: A problem that stops a program from running or makes it behave wrongly. (a) describes Print debugging, not Error. (c) describes TypeError, not Error. (d) describes ValueError, not Error."
      },
      {
        "module": 11,
        "q": "A student is asked to define “TypeError” on a test. Which answer is correct?",
        "choices": [
          "An error when a list is asked for an index that does not exist.",
          "A problem that stops a program from running or makes it behave wrongly.",
          "An error when an operation is used on the wrong type of value, such as adding a number and a string.",
          "The report Python prints when an error happens, showing the error type, message, and the line where it happened."
        ],
        "answer": 2,
        "explanation": "Correct: (c). TypeError means: An error when an operation is used on the wrong type of value, such as adding a number and a string. (a) is the definition of Error, not of TypeError. (b) is the definition of IndexError, not of TypeError. (d) is the definition of Traceback, not of TypeError."
      },
      {
        "module": 12,
        "q": "Which of the following is TRUE about Input?",
        "choices": [
          "The algorithm for a program, written in plain words before any code.",
          "Code that repeats a block, such as visiting every file name in a list.",
          "The result a program produces, such as a sorted list of groups.",
          "The information a program starts with, such as a list of file names."
        ],
        "answer": 3,
        "explanation": "Correct: (d). Input: The information a program starts with, such as a list of file names. (a) describes Loop, not Input. (b) describes Output, not Input. (c) describes Plan, not Input."
      },
      {
        "module": 12,
        "q": "A student is asked to define “Dictionary” on a test. Which answer is correct?",
        "choices": [
          "The information a program starts with, such as a list of file names.",
          "A collection of key-value pairs, such as a file type with its list of files.",
          "Code that repeats a block, such as visiting every file name in a list.",
          "The result a program produces, such as a sorted list of groups."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Dictionary means: A collection of key-value pairs, such as a file type with its list of files. (a) is the definition of Output, not of Dictionary. (c) is the definition of Input, not of Dictionary. (d) is the definition of Loop, not of Dictionary."
      },
      {
        "module": 12,
        "q": "During a review, a classmate describes something as: “An unusual input that might break a program, such as a file name with no dot in it.” Which term are they describing?",
        "choices": [
          "Docstring",
          "Edge case",
          "Refactor",
          "Main program"
        ],
        "answer": 1,
        "explanation": "Correct: (b). That description is Edge case: An unusual input that might break a program, such as a file name with no dot in it. (a) Main program means The part of a script that runs the steps in order, usually calling functions to do the work. (c) Docstring means A short description at the top of a function, in triple quotes, explaining what the function does. (d) Refactor means Tidying code without changing what it does, usually by moving repeated code into a function."
      },
      {
        "module": 2,
        "q": "A student runs this code: x = 5 / y = \"3\" / print(x + y) What happens?",
        "choices": [
          "It prints 8",
          "It prints 53",
          "It fails with a TypeError, because you cannot add an int and a str",
          "It prints 5"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Python will not add an int and a str — that is a TypeError. (a) is wrong: 5 + 3 would need int(\"3\"). (b) is wrong: 5 + \"3\" does not join them, because 5 is not a string. (d) is wrong: the print never runs."
      },
      {
        "module": 5,
        "q": "A student writes a grade program with these checks in this order: if score >= 80: print(\"B\") / elif score >= 90: print(\"A\") / A score of 95 prints B. Why?",
        "choices": [
          "Because 95 is less than 90",
          "Because Python checks conditions in order and 95 meets >= 80 first",
          "Because elif is checked before if",
          "Because the program has a syntax error"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Python runs the first block whose condition is True; 95 >= 80 is True, so it prints B and never reaches the >= 90 check. (a) is wrong: 95 is more than 90. (c) is wrong: if is checked before elif. (d) is wrong: the code runs fine — it is a logic error, not a syntax error."
      },
      {
        "module": 8,
        "q": "A student has a list of seven test scores and wants the third one. Which index should they use?",
        "choices": [
          "scores[3]",
          "scores[2]",
          "scores[7]",
          "scores[0]"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Indexes start at 0, so the third item is at index 2. (a) scores[3] is the fourth item. (c) scores[7] does not exist in a seven-item list and gives an IndexError. (d) scores[0] is the first item."
      },
      {
        "module": 11,
        "q": "A program crashes with the last line of the traceback reading: NameError: name 'totla' is not defined. What is the most likely cause?",
        "choices": [
          "The variable total was spelled totla somewhere",
          "The program divided by zero",
          "A file was missing",
          "The list was empty"
        ],
        "answer": 0,
        "explanation": "Correct: (a). NameError means a name does not exist — here 'totla' is a misspelling of total. (b) is wrong: dividing by zero gives ZeroDivisionError. (c) is wrong: a missing file gives FileNotFoundError. (d) is wrong: an empty list does not cause a NameError."
      }
    ]
  }
};
