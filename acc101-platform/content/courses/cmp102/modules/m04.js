// cmp102 - Module 4: Numbers, Math & Comparison
module.exports = {
  "number": 4,
  "slug": "numbers-math-and-comparison",
  "title": "Numbers, Math & Comparison",
  "estTime": "3–4 hours",
  "objectives": [
    "Use Python's arithmetic operators: +, -, *, /, //, %, and **.",
    "Explain the order of operations in Python.",
    "Use comparison operators to ask true/false questions.",
    "Combine comparisons with and, or, and not.",
    "Use the result of a comparison in an if statement."
  ],
  "sections": [
    {
      "heading": "Doing Maths in Python",
      "html": "<p>Python is a calculator as well as a programming language. The operators are: + add, - subtract, * multiply, / divide, // floor divide, % modulo (remainder), and ** power. Try them: </p>\n<pre>total = 12 + 8\nprint(total)\nprint(7 * 6)\nprint(10 / 4)</pre>\n<p> The first line adds 12 and 8 to get 20. 7 * 6 is 42. 10 / 4 is 2.5 — note that division in Python always gives a float, even when the answer is whole: 10 / 2 is 5.0, not 5.</p>\n<p>Floor division // rounds down: 10 // 4 is 2. Modulo % gives the remainder: 10 % 4 is 2, because 4 goes into 10 twice with 2 left over. Modulo is surprisingly useful: number % 2 is 0 for even numbers and 1 for odd numbers, which is how programs check “is this number even?”</p>\n"
    },
    {
      "heading": "Order of Operations",
      "html": "<p>Python follows the same order of operations as school maths: brackets first, then powers, then multiplication and division, then addition and subtraction. 2 + 3 * 4 is 14, not 20, because 3 * 4 happens first. (2 + 3) * 4 is 20, because the brackets force the addition first.</p>\n<p>When in doubt, use brackets. They cost nothing, they make your meaning clear, and they prevent the most common maths mistakes in code. A programmer reading (price + tax) * count knows exactly what you meant; price + tax * count is a puzzle.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Division / always gives a float. Floor division // rounds down. Modulo % gives the remainder — and number % 2 tells you if a number is even (0) or odd (1).</div></p>\n"
    },
    {
      "heading": "Asking Questions: Comparisons",
      "html": "<p>A comparison operator asks a true/false question and gives back a Boolean: True or False. == means “is equal to”, != means “is not equal to”, < less than, > greater than, <= less than or equal to, >= greater than or equal to. 5 > 3 is True. 7 == 7 is True. 7 == 8 is False.</p>\n<p>The single most common beginner mistake in programming is writing = when you mean ==. age = 18 puts 18 into age; age == 18 asks whether age is 18. Mixing them up is so common that every programmer has done it — and the error message is your clue.</p>\n"
    },
    {
      "heading": "Combining Questions with and, or, not",
      "html": "<p>You can combine comparisons with and, or, and not. and is True only when both sides are True: age >= 18 and has_ticket is True only for an adult with a ticket. or is True when at least one side is True: is_weekend or is_holiday is True on a Saturday or a public holiday. not flips a value: not is_raining is True when it is not raining.</p>\n<p>These three words are the building blocks of every decision a program makes. You will use them in the next module, inside if statements, to decide what a program should do.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>The maths operators are + - * / // % **.</li><li>Division / always gives a float; // rounds down; % gives the remainder.</li><li>Brackets first, then powers, then * and /, then + and -.</li><li>Comparisons give True or False: == != < > <= >=.</li><li>and needs both sides True; or needs one; not flips a value.</li></ul></p>\n<p><strong>Common mistake:</strong> Writing = when you mean ==. = puts a value in; == asks a question.</p>\n<p><strong>Common mistake:</strong> Expecting 10 / 2 to be the integer 5. In Python it is 5.0 — use // if you want a whole number.</p>\n<p><strong>Ready check:</strong> If you can work out 2 + 3 * 4, 10 % 3, and whether 5 >= 5 is True or False without running the code, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Operator",
      "def": "A symbol that does something to values, such as + for addition or == for comparison."
    },
    {
      "term": "Arithmetic operator",
      "def": "An operator that does maths: + - * / // % **."
    },
    {
      "term": "Addition",
      "def": "The + operator: 2 + 3 is 5. It also joins strings."
    },
    {
      "term": "Subtraction",
      "def": "The - operator: 5 - 2 is 3."
    },
    {
      "term": "Multiplication",
      "def": "The * operator: 4 * 3 is 12. It also repeats strings."
    },
    {
      "term": "Division",
      "def": "The / operator: 10 / 4 is 2.5. Division in Python always gives a float."
    },
    {
      "term": "Floor division",
      "def": "The // operator: 10 // 4 is 2 — division rounded down to a whole number."
    },
    {
      "term": "Modulo",
      "def": "The % operator: 10 % 4 is 2 — the remainder after division."
    },
    {
      "term": "Power",
      "def": "The ** operator: 2 ** 3 is 8."
    },
    {
      "term": "Comparison operator",
      "def": "An operator that compares two values and gives True or False: == != < > <= >=."
    },
    {
      "term": "Boolean",
      "def": "A value that is either True or False."
    },
    {
      "term": "and",
      "def": "A logical operator: True only when both sides are True."
    },
    {
      "term": "or",
      "def": "A logical operator: True when at least one side is True."
    },
    {
      "term": "not",
      "def": "A logical operator: flips True to False and False to True."
    },
    {
      "term": "Order of operations",
      "def": "The rules for which maths happens first: brackets, powers, multiplication and division, then addition and subtraction."
    }
  ],
  "video": {
    "title": "Python for Beginners - Learn Coding with Python in 1 Hour",
    "embedUrl": "https://www.youtube.com/embed/kqtD5dpn9C8",
    "note": "Programming with Mosh's one-hour Python tour. Watch the sections on numbers, operators, and comparisons, and try each example yourself.",
    "more": [
      {
        "title": "Learn Python - Full Course for Beginners [Tutorial]",
        "url": "https://www.youtube.com/watch?v=rfscVS0vtbw"
      },
      {
        "title": "Python Full Course for Beginners",
        "url": "https://www.youtube.com/watch?v=_uQrJ0TkZlc"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Operator” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Operator — A symbol that does something to values, such as + for addition or == for comparison. Step 2: It matters because it is part of: Use Python's arithmetic operators: +, -, *, /, //, %, and **. Step 3: An example from the module is the way operator shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Arithmetic operator” and “Addition”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Arithmetic operator — An operator that does maths: + - * / // % **. Step 2: Addition — The + operator: 2 + 3 is 5. It also joins strings. Step 3: They differ because the first is about arithmetic operator while the second is about addition; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Explain the order of operations in Python.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Explain the order of operations in Python. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Subtraction” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Subtraction — The - operator: 5 - 2 is 3. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Multiplication — The * operator: 4 * 3 is 12. It also repeats strings. Step 2: Division — The / operator: 10 / 4 is 2.5. Division in Python always gives a float. Step 3: Floor division — The // operator: 10 // 4 is 2 — division rounded down to a whole number. Step 4: Modulo — The % operator: 10 % 4 is 2 — the remainder after division. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Use the result of a comparison in an if statement. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Order of operations” mean?",
      "choices": [
        "A logical operator: True when at least one side is True.",
        "The rules for which maths happens first: brackets, powers, multiplication and division, then addition and subtraction.",
        "The - operator: 5 - 2 is 3.",
        "The % operator: 10 % 4 is 2 — the remainder after division."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Order of operations means: The rules for which maths happens first: brackets, powers, multiplication and division, then addition and subtraction. (a) is the definition of Subtraction, not of Order of operations. (c) is the definition of Modulo, not of Order of operations. (d) is the definition of or, not of Order of operations."
    },
    {
      "q": "What does the term “Addition” mean?",
      "choices": [
        "The + operator: 2 + 3 is 5. It also joins strings.",
        "A logical operator: flips True to False and False to True.",
        "The - operator: 5 - 2 is 3.",
        "The ** operator: 2 ** 3 is 8."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Addition means: The + operator: 2 + 3 is 5. It also joins strings. (b) is the definition of Power, not of Addition. (c) is the definition of not, not of Addition. (d) is the definition of Subtraction, not of Addition."
    },
    {
      "q": "Which term means: The / operator: 10 / 4 is 2.5. Division in Python always gives a float.",
      "choices": [
        "Boolean",
        "Multiplication",
        "not",
        "Division"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Division is the term for: The / operator: 10 / 4 is 2.5. Division in Python always gives a float. (a) not means A logical operator: flips True to False and False to True. (b) Multiplication means The * operator: 4 * 3 is 12. It also repeats strings. (c) Boolean means A value that is either True or False."
    },
    {
      "q": "Which term means: The ** operator: 2 ** 3 is 8.",
      "choices": [
        "Multiplication",
        "Comparison operator",
        "Arithmetic operator",
        "Power"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Power is the term for: The ** operator: 2 ** 3 is 8. (a) Arithmetic operator means An operator that does maths: + - * / // % **. (b) Comparison operator means An operator that compares two values and gives True or False: == != < > <= >=. (c) Multiplication means The * operator: 4 * 3 is 12. It also repeats strings."
    },
    {
      "q": "Which of the following is TRUE about and?",
      "choices": [
        "A value that is either True or False.",
        "The ** operator: 2 ** 3 is 8.",
        "A logical operator: True only when both sides are True.",
        "An operator that does maths: + - * / // % **."
      ],
      "answer": 2,
      "explanation": "Correct: (c). and: A logical operator: True only when both sides are True. (a) describes Power, not and. (b) describes Arithmetic operator, not and. (d) describes Boolean, not and."
    },
    {
      "q": "What does the term “Order of operations” mean?",
      "choices": [
        "The * operator: 4 * 3 is 12. It also repeats strings.",
        "The // operator: 10 // 4 is 2 — division rounded down to a whole number.",
        "The rules for which maths happens first: brackets, powers, multiplication and division, then addition and subtraction.",
        "A symbol that does something to values, such as + for addition or == for comparison."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Order of operations means: The rules for which maths happens first: brackets, powers, multiplication and division, then addition and subtraction. (a) is the definition of Multiplication, not of Order of operations. (b) is the definition of Floor division, not of Order of operations. (d) is the definition of Operator, not of Order of operations."
    },
    {
      "q": "What is the value of 10 % 4 in Python?",
      "choices": [
        "2.5",
        "2",
        "4",
        "0"
      ],
      "answer": 1,
      "explanation": "Correct: (b). % is modulo, the remainder: 4 goes into 10 twice with 2 left over. (a) 2.5 is 10 / 4, plain division. (c) 4 is the divisor, not the answer. (d) 0 would mean 10 divides exactly by 4, which it does not."
    },
    {
      "q": "What does this print? print(2 + 3 * 4)",
      "choices": [
        "20",
        "14",
        "24",
        "9"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Multiplication happens before addition: 3 * 4 is 12, then 2 + 12 is 14. (a) 20 is what you get if you add first, which Python does not do. (c) 24 and (d) 9 do not follow the order of operations."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Numbers, Math & Comparison: Quick Reference</h3>\n<p><strong>Core idea:</strong> Use Python's arithmetic operators: +, -, *, /, //, %, and **.</p>\n<p><strong>Key terms:</strong> Operator · Arithmetic operator · Addition · Subtraction · Multiplication · Division · Floor division · Modulo.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Use Python's arithmetic operators: +, -, *, /, //, %, and **.</li>\n<li>Explain the order of operations in Python.</li>\n<li>Use comparison operators to ask true/false questions.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
