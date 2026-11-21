// cmp102 - Module 5: Making Decisions: if, elif, else
module.exports = {
  "number": 5,
  "slug": "making-decisions-if-else",
  "title": "Making Decisions: if, elif, else",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how an if statement chooses what to run.",
    "Write if/else and if/elif/else chains.",
    "Use comparison and logical operators inside conditions.",
    "Explain why indentation matters in Python.",
    "Nest one if statement inside another."
  ],
  "sections": [
    {
      "heading": "The if Statement: Choosing a Path",
      "html": "<p>An if statement lets a program choose. It asks a true/false question — the condition — and runs a block of code only when the answer is True. </p>\n<pre>age = 20\nif age &gt;= 18:\n    print(&quot;adult&quot;)\nelse:\n    print(&quot;minor&quot;)</pre>\n<p> If age is 20, the condition age >= 18 is True, so Python prints “adult”. If age were 12, the condition would be False and Python would run the else block instead, printing “minor”.</p>\n<p>The colon at the end of the if line and the indentation of the lines underneath are not decoration — they are how Python knows which lines belong to the if. Every line indented under the if is part of it; the first line back at the left edge is outside it.</p>\n"
    },
    {
      "heading": "elif: More Than Two Choices",
      "html": "<p>When there are more than two possibilities, use elif — short for “else if”. Python checks each condition in order and runs the first block whose condition is True, then skips the rest. </p>\n<pre>score = 85\nif score &gt;= 90:\n    print(&quot;A&quot;)\nelif score &gt;= 80:\n    print(&quot;B&quot;)\nelse:\n    print(&quot;C&quot;)</pre>\n<p> With score 85, the first condition (score >= 90) is False, the second (score >= 80) is True, so Python prints B and skips the else.</p>\n<p>Order matters in an elif chain: put the most specific or highest condition first. If you checked score >= 80 before score >= 90, a score of 95 would match the first condition and print B — wrong. Always check the strictest condition first.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> In an if/elif/else chain, Python runs the FIRST block whose condition is True, then skips the rest. Put the strictest condition first.</div></p>\n"
    },
    {
      "heading": "Indentation Is the Rule, Not a Style",
      "html": "<p>In most languages, indentation is a matter of taste. In Python, it is the rule: indentation is how Python knows which lines belong together. All lines in the same block must be indented by the same amount — four spaces is the standard. Mixing tabs and spaces, or indenting one line by three spaces and the next by four, gives an IndentationError.</p>\n<p>If your code will not run and the error mentions indentation, count the spaces. Set your editor to insert four spaces when you press Tab — VS Code does this by default for Python — and the problem mostly goes away.</p>\n"
    },
    {
      "heading": "Nesting and Combining Conditions",
      "html": "<p>You can put an if inside another if — this is called nesting. For example: if it is the weekend, then if the weather is good, go for a walk, else stay in and read. Nesting is powerful but easy to overdo: if you find yourself three levels deep, step back and ask whether the logic can be simplified, often with and or or.</p>\n<p>Combining conditions with and and or keeps code flatter and easier to read: if age >= 18 and has_ticket: is clearer than two nested ifs. But remember that and needs both sides to be True, while or needs only one — and that not flips the whole thing. When a condition gets complicated, test it with a few values by hand before you trust it.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>if runs a block only when its condition is True; else runs when it is False.</li><li>elif adds more choices; Python runs the first True block and skips the rest.</li><li>Indentation (four spaces) shows which lines belong to a block.</li><li>Put the strictest condition first in an elif chain.</li><li>and, or, and not combine conditions; nesting puts one if inside another.</li></ul></p>\n<p><strong>Common mistake:</strong> Forgetting the colon at the end of the if line. Every if, elif, and else line ends with a colon.</p>\n<p><strong>Common mistake:</strong> Checking conditions in the wrong order — a score of 95 must meet >= 90 before it meets >= 80.</p>\n<p><strong>Ready check:</strong> If you can write a program that prints a grade (A, B, or C) from a score, with correct indentation, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "if statement",
      "def": "A statement that runs a block of code only when its condition is True."
    },
    {
      "term": "Condition",
      "def": "The true/false question an if statement asks, such as age >= 18."
    },
    {
      "term": "else",
      "def": "The block that runs when the if condition is False."
    },
    {
      "term": "elif",
      "def": "Short for “else if” — an extra condition checked when the earlier ones were False."
    },
    {
      "term": "Block",
      "def": "A group of lines that belong together, marked by indentation in Python."
    },
    {
      "term": "Indentation",
      "def": "The spaces at the start of a line. In Python, indentation shows which lines belong to an if, a loop, or a function."
    },
    {
      "term": "Nested if",
      "def": "An if statement inside another if statement."
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
      "term": "Branch",
      "def": "One of the possible paths a program can take at a decision point."
    },
    {
      "term": "Truthy",
      "def": "A value Python treats as True in a condition, such as a non-empty string or a non-zero number."
    },
    {
      "term": "Falsy",
      "def": "A value Python treats as False in a condition, such as 0, an empty string, or None."
    }
  ],
  "video": {
    "title": "Python Full Course for Beginners",
    "embedUrl": "https://www.youtube.com/embed/_uQrJ0TkZlc",
    "note": "Programming with Mosh's full Python course. Watch the sections on conditionals and comparison operators, and code along with each example.",
    "more": [
      {
        "title": "Python for Beginners - Learn Coding with Python in 1 Hour",
        "url": "https://www.youtube.com/watch?v=kqtD5dpn9C8"
      },
      {
        "title": "Learn Python - Full Course for Beginners [Tutorial]",
        "url": "https://www.youtube.com/watch?v=rfscVS0vtbw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “if statement” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: if statement — A statement that runs a block of code only when its condition is True. Step 2: It matters because it is part of: Explain how an if statement chooses what to run. Step 3: An example from the module is the way if statement shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Condition” and “else”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Condition — The true/false question an if statement asks, such as age >= 18. Step 2: else — The block that runs when the if condition is False. Step 3: They differ because the first is about condition while the second is about else; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Write if/else and if/elif/else chains.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Write if/else and if/elif/else chains. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “elif” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: elif — Short for “else if” — an extra condition checked when the earlier ones were False. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Block — A group of lines that belong together, marked by indentation in Python. Step 2: Indentation — The spaces at the start of a line. In Python, indentation shows which lines belong to an if, a loop, or a function. Step 3: Nested if — An if statement inside another if statement. Step 4: Comparison operator — An operator that compares two values and gives True or False: == != < > <= >=. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Nest one if statement inside another. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Condition” mean?",
      "choices": [
        "A value Python treats as True in a condition, such as a non-empty string or a non-zero number.",
        "A value Python treats as False in a condition, such as 0, an empty string, or None.",
        "The true/false question an if statement asks, such as age >= 18.",
        "A statement that runs a block of code only when its condition is True."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Condition means: The true/false question an if statement asks, such as age >= 18. (a) is the definition of if statement, not of Condition. (b) is the definition of Truthy, not of Condition. (d) is the definition of Falsy, not of Condition."
    },
    {
      "q": "What does the term “Block” mean?",
      "choices": [
        "A group of lines that belong together, marked by indentation in Python.",
        "A statement that runs a block of code only when its condition is True.",
        "The spaces at the start of a line. In Python, indentation shows which lines belong to an if, a loop, or a function.",
        "A value Python treats as False in a condition, such as 0, an empty string, or None."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Block means: A group of lines that belong together, marked by indentation in Python. (b) is the definition of if statement, not of Block. (c) is the definition of Indentation, not of Block. (d) is the definition of Falsy, not of Block."
    },
    {
      "q": "Which term means: An operator that compares two values and gives True or False: == != < > <= >=.",
      "choices": [
        "Condition",
        "Comparison operator",
        "not",
        "Boolean"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Comparison operator is the term for: An operator that compares two values and gives True or False: == != < > <= >=. (a) Boolean means A value that is either True or False. (c) not means A logical operator: flips True to False and False to True. (d) Condition means The true/false question an if statement asks, such as age >= 18."
    },
    {
      "q": "Which term means: A logical operator: True when at least one side is True.",
      "choices": [
        "if statement",
        "or",
        "Comparison operator",
        "else"
      ],
      "answer": 1,
      "explanation": "Correct: (b). or is the term for: A logical operator: True when at least one side is True. (a) if statement means A statement that runs a block of code only when its condition is True. (c) Comparison operator means An operator that compares two values and gives True or False: == != < > <= >=. (d) else means The block that runs when the if condition is False."
    },
    {
      "q": "Which of the following is TRUE about Truthy?",
      "choices": [
        "Short for “else if” — an extra condition checked when the earlier ones were False.",
        "A logical operator: True only when both sides are True.",
        "The true/false question an if statement asks, such as age >= 18.",
        "A value Python treats as True in a condition, such as a non-empty string or a non-zero number."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Truthy: A value Python treats as True in a condition, such as a non-empty string or a non-zero number. (a) describes Condition, not Truthy. (b) describes elif, not Truthy. (c) describes and, not Truthy."
    },
    {
      "q": "What does the term “Condition” mean?",
      "choices": [
        "One of the possible paths a program can take at a decision point.",
        "A group of lines that belong together, marked by indentation in Python.",
        "A value that is either True or False.",
        "The true/false question an if statement asks, such as age >= 18."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Condition means: The true/false question an if statement asks, such as age >= 18. (a) is the definition of Boolean, not of Condition. (b) is the definition of Branch, not of Condition. (c) is the definition of Block, not of Condition."
    },
    {
      "q": "What does this code print? score = 85 / if score >= 90: print(\"A\") / elif score >= 80: print(\"B\") / else: print(\"C\")",
      "choices": [
        "A",
        "B",
        "C",
        "Nothing — it is an error"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 85 is not >= 90, so the first condition is False; it is >= 80, so the elif runs and prints B. (a) is wrong: 85 is below 90. (c) is wrong: the elif matched, so the else is skipped. (d) is wrong: the code is valid Python."
    },
    {
      "q": "Why does Python care about indentation?",
      "choices": [
        "It makes the code look pretty",
        "Indentation shows which lines belong to a block, such as an if statement",
        "It makes the program run faster",
        "It is required only in comments"
      ],
      "answer": 1,
      "explanation": "Correct: (b). In Python, indentation is the syntax that groups lines into blocks. (a) is wrong: pretty code is a side benefit, not the reason. (c) is wrong: indentation does not affect speed. (d) is wrong: comments are ignored by Python entirely."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Making Decisions: if, elif, else: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain how an if statement chooses what to run.</p>\n<p><strong>Key terms:</strong> if statement · Condition · else · elif · Block · Indentation · Nested if · Comparison operator.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain how an if statement chooses what to run.</li>\n<li>Write if/else and if/elif/else chains.</li>\n<li>Use comparison and logical operators inside conditions.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
