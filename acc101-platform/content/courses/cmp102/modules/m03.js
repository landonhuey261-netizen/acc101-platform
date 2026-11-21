// cmp102 - Module 3: Strings, Input & Output
module.exports = {
  "number": 3,
  "slug": "strings-input-and-output",
  "title": "Strings, Input & Output",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a string is and how to write one.",
    "Join strings together and repeat them.",
    "Use print() to show text and values, including f-strings.",
    "Use input() to ask the user for text.",
    "Convert input text into a number with int() and float()."
  ],
  "sections": [
    {
      "heading": "Strings: Text in Quotes",
      "html": "<p>A string is text inside quotes: \"Maya\", \"Hello, world!\", \"42\". Single quotes and double quotes both work — pick one style and stay with it. A string can hold letters, numbers, spaces, and symbols; the quotes tell Python “this is text, not code”. The length of a string is the number of characters in it, counted with len(): </p>\n<pre>word = &quot;Python&quot;\nprint(len(word))\nprint(word.upper())\nprint(word[0])</pre>\n<p> Run it and you get 6, PYTHON, and P — the length, the upper-case version, and the first character (index 0).</p>\n<p>Strings have methods — functions that belong to the string, called with a dot. word.upper() returns the string in capitals, word.lower() in small letters. Methods return a new string; they do not change the original unless you store the result: word = word.upper().</p>\n"
    },
    {
      "heading": "Joining Strings",
      "html": "<p>You can join strings with +: \"Hello, \" + \"Maya\" gives \"Hello, Maya\". This is called concatenation. You can also repeat a string with *: \"ha\" * 3 gives \"hahaha\". But you cannot add a string and a number: \"Age: \" + 34 fails, because Python will not guess how to combine them. Convert first: \"Age: \" + str(34).</p>\n<p>The cleaner way to mix text and values is an f-string: put f before the quotes and variables inside curly braces: </p>\n<pre>name = &quot;Sam&quot;\nprint(f&quot;Hello, {name}!&quot;)</pre>\n<p> The braces are filled in with the variable's value. F-strings are the way most Python programmers build messages, and you will use them constantly.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> input() always gives you a string — even when the user types a number. Convert it with int() or float() before doing maths with it.</div></p>\n"
    },
    {
      "heading": "print(): Showing Things",
      "html": "<p>print() shows things on the screen. It can show text, numbers, and variables, and several things at once separated by commas: print(\"Age:\", 34) prints Age: 34. By default print() adds a new line at the end, so each call starts a fresh line. You can also print a blank line with print() on its own, which is handy for spacing output out.</p>\n<p>A common beginner surprise: print() shows the value, not the code. print(\"Hello\") shows Hello, without the quotes. The quotes are instructions to Python, not part of the text.</p>\n"
    },
    {
      "heading": "input(): Asking the User",
      "html": "<p>input() asks the user to type something. It shows a prompt, waits, and gives back whatever was typed — always as a string. name = input(\"What is your name? \") stores the answer in name. Then print(f\"Hello, {name}!\") greets them by name.</p>\n<p>Because input() always returns a string, maths needs a conversion first. age = input(\"How old are you? \") gives the string \"34\", not the number 34. age = int(input(\"How old are you? \")) converts it to an integer right away. If the user types something that is not a number, int() fails with a ValueError — which is why real programs check input carefully (you will learn try/except in Module 11).</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>A string is text in quotes; len() counts its characters.</li><li>Join strings with +; mix text and values with f-strings.</li><li>print() shows things; input() asks the user and always returns a string.</li><li>Convert input with int() or float() before doing maths.</li><li>String methods like .upper() return a new string.</li></ul></p>\n<p><strong>Common mistake:</strong> Adding a string and a number: \"Age: \" + 34 fails. Convert the number with str(34) or use an f-string.</p>\n<p><strong>Common mistake:</strong> Forgetting that input() returns a string. \"5\" + \"3\" is \"53\", not 8 — convert with int() first.</p>\n<p><strong>Ready check:</strong> If you can ask for a name and an age, convert the age to a number, and print a greeting with an f-string, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "String",
      "def": "Text inside quotes, such as \"Maya\". A string is the str data type."
    },
    {
      "term": "print()",
      "def": "The Python function that shows text or a value on the screen."
    },
    {
      "term": "input()",
      "def": "The Python function that asks the user to type something and gives it back as a string."
    },
    {
      "term": "Concatenation",
      "def": "Joining two strings together with +, such as \"Hello, \" + \"Maya\"."
    },
    {
      "term": "f-string",
      "def": "A string starting with f that lets you put variables inside curly braces, such as f\"Hello, {name}!\""
    },
    {
      "term": "len()",
      "def": "A built-in function that gives the length of a string (or a list): len(\"Python\") is 6."
    },
    {
      "term": "upper()",
      "def": "A string method that returns the string in capital letters."
    },
    {
      "term": "lower()",
      "def": "A string method that returns the string in small letters."
    },
    {
      "term": "Method",
      "def": "A function that belongs to a value, called with a dot, such as word.upper()."
    },
    {
      "term": "int()",
      "def": "A built-in function that converts a value to an integer, such as int(\"5\") is 5."
    },
    {
      "term": "float()",
      "def": "A built-in function that converts a value to a decimal number, such as float(\"3.5\") is 3.5."
    },
    {
      "term": "str()",
      "def": "A built-in function that converts a value to a string, such as str(7) is \"7\"."
    },
    {
      "term": "Escape character",
      "def": "A backslash sequence inside a string for a special character, such as \\n for a new line."
    },
    {
      "term": "Index",
      "def": "The position of a character in a string, counting from 0: in \"Python\", P is at index 0."
    },
    {
      "term": "Whitespace",
      "def": "Spaces, tabs, and new lines — the invisible characters between words."
    }
  ],
  "video": {
    "title": "Learn Python - Full Course for Beginners [Tutorial]",
    "embedUrl": "https://www.youtube.com/embed/rfscVS0vtbw",
    "note": "freeCodeCamp's Python course with Mike Dane. Watch the sections on strings, print, and input, and type along with each example in VS Code.",
    "more": [
      {
        "title": "Python for Beginners – Full Course [Programming Tutorial]",
        "url": "https://www.youtube.com/watch?v=eWRfhZUzrAc"
      },
      {
        "title": "Python for Beginners - Learn Coding with Python in 1 Hour",
        "url": "https://www.youtube.com/watch?v=kqtD5dpn9C8"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “String” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: String — Text inside quotes, such as \"Maya\". A string is the str data type. Step 2: It matters because it is part of: Explain what a string is and how to write one. Step 3: An example from the module is the way string shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “print()” and “input()”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: print() — The Python function that shows text or a value on the screen. Step 2: input() — The Python function that asks the user to type something and gives it back as a string. Step 3: They differ because the first is about print() while the second is about input(); a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Join strings together and repeat them.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Join strings together and repeat them. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Concatenation” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Concatenation — Joining two strings together with +, such as \"Hello, \" + \"Maya\". Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: f-string — A string starting with f that lets you put variables inside curly braces, such as f\"Hello, {name}!\" Step 2: len() — A built-in function that gives the length of a string (or a list): len(\"Python\") is 6. Step 3: upper() — A string method that returns the string in capital letters. Step 4: lower() — A string method that returns the string in small letters. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Convert input text into a number with int() and float(). Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Escape character” mean?",
      "choices": [
        "A backslash sequence inside a string for a special character, such as \\n for a new line.",
        "A built-in function that converts a value to a decimal number, such as float(\"3.5\") is 3.5.",
        "The Python function that shows text or a value on the screen.",
        "A string method that returns the string in small letters."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Escape character means: A backslash sequence inside a string for a special character, such as \\n for a new line. (b) is the definition of print(), not of Escape character. (c) is the definition of lower(), not of Escape character. (d) is the definition of float(), not of Escape character."
    },
    {
      "q": "What does the term “String” mean?",
      "choices": [
        "The Python function that shows text or a value on the screen.",
        "Text inside quotes, such as \"Maya\". A string is the str data type.",
        "Joining two strings together with +, such as \"Hello, \" + \"Maya\".",
        "A string starting with f that lets you put variables inside curly braces, such as f\"Hello, {name}!\""
      ],
      "answer": 1,
      "explanation": "Correct: (b). String means: Text inside quotes, such as \"Maya\". A string is the str data type. (a) is the definition of f-string, not of String. (c) is the definition of print(), not of String. (d) is the definition of Concatenation, not of String."
    },
    {
      "q": "Which term means: Joining two strings together with +, such as \"Hello, \" + \"Maya\".",
      "choices": [
        "Index",
        "Concatenation",
        "f-string",
        "String"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Concatenation is the term for: Joining two strings together with +, such as \"Hello, \" + \"Maya\". (a) Index means The position of a character in a string, counting from 0: in \"Python\", P is at index 0. (c) f-string means A string starting with f that lets you put variables inside curly braces, such as f\"Hello, {name}!\" (d) String means Text inside quotes, such as \"Maya\". A string is the str data type."
    },
    {
      "q": "Which term means: A string method that returns the string in capital letters.",
      "choices": [
        "Whitespace",
        "upper()",
        "len()",
        "print()"
      ],
      "answer": 1,
      "explanation": "Correct: (b). upper() is the term for: A string method that returns the string in capital letters. (a) Whitespace means Spaces, tabs, and new lines — the invisible characters between words. (c) len() means A built-in function that gives the length of a string (or a list): len(\"Python\") is 6. (d) print() means The Python function that shows text or a value on the screen."
    },
    {
      "q": "Which of the following is TRUE about int()?",
      "choices": [
        "The Python function that asks the user to type something and gives it back as a string.",
        "A built-in function that converts a value to an integer, such as int(\"5\") is 5.",
        "A string method that returns the string in capital letters.",
        "A function that belongs to a value, called with a dot, such as word.upper()."
      ],
      "answer": 1,
      "explanation": "Correct: (b). int(): A built-in function that converts a value to an integer, such as int(\"5\") is 5. (a) describes input(), not int(). (c) describes Method, not int(). (d) describes upper(), not int()."
    },
    {
      "q": "What does the term “Escape character” mean?",
      "choices": [
        "The Python function that shows text or a value on the screen.",
        "A backslash sequence inside a string for a special character, such as \\n for a new line.",
        "The position of a character in a string, counting from 0: in \"Python\", P is at index 0.",
        "A built-in function that converts a value to an integer, such as int(\"5\") is 5."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Escape character means: A backslash sequence inside a string for a special character, such as \\n for a new line. (a) is the definition of int(), not of Escape character. (c) is the definition of Index, not of Escape character. (d) is the definition of print(), not of Escape character."
    },
    {
      "q": "What does this code print? word = \"Python\" / print(len(word)) / print(word.upper())",
      "choices": [
        "6 then PYTHON",
        "PYTHON then 6",
        "P then ython",
        "6 then Python"
      ],
      "answer": 0,
      "explanation": "Correct: (a). len(\"Python\") is 6 and word.upper() is \"PYTHON\". (b) is wrong: the prints run in order, len first. (c) is wrong: nothing here prints a single letter. (d) is wrong: .upper() changes the letters to capitals, it does not leave them as they were."
    },
    {
      "q": "A user types 5 at the prompt in this code: total = input(\"Number? \") / print(total + total) What is printed?",
      "choices": [
        "10",
        "55",
        "5",
        "An error"
      ],
      "answer": 1,
      "explanation": "Correct: (b). input() returns the string \"5\", and \"5\" + \"5\" joins the strings into \"55\". (a) is wrong: that would need int() conversion first. (c) is wrong: total + total joins two copies. (d) is wrong: adding two strings is allowed in Python."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Strings, Input & Output: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a string is and how to write one.</p>\n<p><strong>Key terms:</strong> String · print() · input() · Concatenation · f-string · len() · upper() · lower().</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a string is and how to write one.</li>\n<li>Join strings together and repeat them.</li>\n<li>Use print() to show text and values, including f-strings.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
