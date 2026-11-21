// cmp102 - Module 11: Errors & Debugging
module.exports = {
  "number": 11,
  "slug": "errors-and-debugging",
  "title": "Errors & Debugging",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the three kinds of error: syntax, runtime, and logic.",
    "Read a traceback and find the line where the error happened.",
    "Name the common errors: SyntaxError, NameError, TypeError, IndexError, KeyError, ValueError, ZeroDivisionError, FileNotFoundError.",
    "Use try/except to handle errors you expect.",
    "Debug with a plan: reproduce, read, check, change one thing, test again."
  ],
  "sections": [
    {
      "heading": "Three Kinds of Error",
      "html": "<p>Programs go wrong in three ways. A syntax error is a mistake in spelling or punctuation — a missing quote, a missing colon, a wrong bracket. Python finds it before the program even runs and refuses to start. A runtime error happens while the program is running: dividing by zero, opening a missing file, reading a list index that does not exist. The program starts, then crashes.</p>\n<p>A logic error is the sneakiest kind: the program runs fine and gives the wrong answer. Adding instead of subtracting, checking the wrong variable, or looping one time too many — no error message appears, because Python has no idea what answer you wanted. Logic errors are found by testing with values whose answers you already know.</p>\n"
    },
    {
      "heading": "Reading a Traceback",
      "html": "<p>When Python crashes, it prints a traceback: a report that ends with the error type and a message, and lists the lines that led there. Read it from the bottom up: the last line is the error itself (for example, NameError: name 'prnit' is not defined), and the line above it tells you which line of your code caused it. The traceback is not shouting at you — it is telling you exactly where to look.</p>\n<p>The most common errors and what they mean: NameError — a name is misspelt or was never given a value. TypeError — the wrong kind of value for an operation, such as \"Age: \" + 34. IndexError — a list index that does not exist. KeyError — a dictionary key that does not exist. ValueError — the right type, wrong content, such as int(\"hello\"). ZeroDivisionError — dividing by zero. FileNotFoundError — the file is not where you said it was.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Read a traceback from the bottom up. The last line names the error; the line above it names the line of your code that caused it.</div></p>\n"
    },
    {
      "heading": "try/except: Handling Errors You Expect",
      "html": "<p>Some errors are not bugs — they are things that can genuinely go wrong in the real world, like a missing file or a user typing letters where a number was expected. For those, Python has try/except: try the risky code, and if a named error happens, run the except block instead of crashing. </p>\n<pre>try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print(&quot;Cannot divide by zero&quot;)</pre>\n<p> Dividing by zero would normally crash the program; here the except block catches the ZeroDivisionError and prints a friendly message instead.</p>\n<p>Only catch errors you expect and know how to handle. Wrapping everything in a broad try/except hides real bugs and makes them impossible to find. And never use try/except to hide a mistake in your own logic — fix the logic instead.</p>\n"
    },
    {
      "heading": "Debugging With a Plan",
      "html": "<p>Debugging is a skill, and it has a method. First, reproduce the problem: make it happen again on purpose, so you can watch it. Second, read the error message — really read it — and look at the line it names. Third, check the usual suspects: spelling, quotes, brackets, indentation, and = versus ==. Fourth, add print() calls to show what your variables actually hold — most bugs turn out to be a variable holding something different from what you assumed.</p>\n<p>Fifth, change one thing, then run the program again. If you change five things at once and it works, you have no idea which change fixed it — and you have probably hidden another bug. Finally, test with simple values whose answers you already know: if your program cannot add 2 + 3 correctly, the bug is in the basics, not in the hard part.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Syntax errors stop a program before it runs; runtime errors crash it while running; logic errors give wrong answers silently.</li><li>Read a traceback from the bottom up: last line is the error, above it is your line.</li><li>try/except handles errors you expect; it is not for hiding bugs.</li><li>Debug with a plan: reproduce, read, check, print values, change one thing, test again.</li><li>Test with values whose answers you already know.</li></ul></p>\n<p><strong>Common mistake:</strong> Ignoring the error message and guessing. The message names the error type and the line — start there.</p>\n<p><strong>Common mistake:</strong> Changing five things at once. Change one thing, run it again, and see what changes.</p>\n<p><strong>Ready check:</strong> If you can read a traceback, name what a NameError and a TypeError mean, and fix a program that divides by zero with try/except, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Error",
      "def": "A problem that stops a program from running or makes it behave wrongly."
    },
    {
      "term": "SyntaxError",
      "def": "An error in the spelling or punctuation of code, found before the program even runs."
    },
    {
      "term": "NameError",
      "def": "An error when the program uses a name that does not exist, such as a misspelt variable."
    },
    {
      "term": "TypeError",
      "def": "An error when an operation is used on the wrong type of value, such as adding a number and a string."
    },
    {
      "term": "IndexError",
      "def": "An error when a list is asked for an index that does not exist."
    },
    {
      "term": "KeyError",
      "def": "An error when a dictionary is asked for a key that does not exist."
    },
    {
      "term": "ValueError",
      "def": "An error when a value has the right type but the wrong content, such as int(\"hello\")."
    },
    {
      "term": "ZeroDivisionError",
      "def": "An error when a program divides by zero."
    },
    {
      "term": "FileNotFoundError",
      "def": "An error when a program tries to open a file that does not exist."
    },
    {
      "term": "Traceback",
      "def": "The report Python prints when an error happens, showing the error type, message, and the line where it happened."
    },
    {
      "term": "try/except",
      "def": "A Python structure that tries code and, if a named error happens, runs the except block instead of crashing."
    },
    {
      "term": "Debugging",
      "def": "Finding and fixing the mistakes in a program."
    },
    {
      "term": "Logic error",
      "def": "A mistake where the program runs without crashing but gives the wrong answer."
    },
    {
      "term": "Runtime error",
      "def": "An error that happens while a program is running, such as dividing by zero."
    },
    {
      "term": "Print debugging",
      "def": "Finding a bug by adding print() calls to show what values variables actually hold while the program runs."
    }
  ],
  "video": {
    "title": "Intro to Prog. 12.10.2023",
    "embedUrl": "https://www.youtube.com/embed/UjWu85v73YI",
    "note": "A lesson covering Python basics including files, errors, and input validation. Watch the sections on reading errors and handling bad input, and try the examples yourself.",
    "more": [
      {
        "title": "Python Tutorial for Beginners - Full Course in 11 Hours [2020]",
        "url": "https://www.youtube.com/watch?v=4F2m91eKmts"
      },
      {
        "title": "Harvard CS50's Introduction to Programming with Python – Full University Course",
        "url": "https://www.youtube.com/watch?v=nLRL_NcnK-4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Error” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Error — A problem that stops a program from running or makes it behave wrongly. Step 2: It matters because it is part of: Explain the three kinds of error: syntax, runtime, and logic. Step 3: An example from the module is the way error shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “SyntaxError” and “NameError”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: SyntaxError — An error in the spelling or punctuation of code, found before the program even runs. Step 2: NameError — An error when the program uses a name that does not exist, such as a misspelt variable. Step 3: They differ because the first is about syntaxerror while the second is about nameerror; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Read a traceback and find the line where the error happened.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Read a traceback and find the line where the error happened. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “TypeError” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: TypeError — An error when an operation is used on the wrong type of value, such as adding a number and a string. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: IndexError — An error when a list is asked for an index that does not exist. Step 2: KeyError — An error when a dictionary is asked for a key that does not exist. Step 3: ValueError — An error when a value has the right type but the wrong content, such as int(\"hello\"). Step 4: ZeroDivisionError — An error when a program divides by zero. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Debug with a plan: reproduce, read, check, change one thing, test again. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Runtime error” mean?",
      "choices": [
        "An error that happens while a program is running, such as dividing by zero.",
        "An error when a value has the right type but the wrong content, such as int(\"hello\").",
        "An error when a dictionary is asked for a key that does not exist.",
        "The report Python prints when an error happens, showing the error type, message, and the line where it happened."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Runtime error means: An error that happens while a program is running, such as dividing by zero. (b) is the definition of Traceback, not of Runtime error. (c) is the definition of ValueError, not of Runtime error. (d) is the definition of KeyError, not of Runtime error."
    },
    {
      "q": "What does the term “SyntaxError” mean?",
      "choices": [
        "An error when a dictionary is asked for a key that does not exist.",
        "A problem that stops a program from running or makes it behave wrongly.",
        "An error when a program tries to open a file that does not exist.",
        "An error in the spelling or punctuation of code, found before the program even runs."
      ],
      "answer": 3,
      "explanation": "Correct: (d). SyntaxError means: An error in the spelling or punctuation of code, found before the program even runs. (a) is the definition of Error, not of SyntaxError. (b) is the definition of FileNotFoundError, not of SyntaxError. (c) is the definition of KeyError, not of SyntaxError."
    },
    {
      "q": "Which term means: An error when a list is asked for an index that does not exist.",
      "choices": [
        "try/except",
        "IndexError",
        "Error",
        "TypeError"
      ],
      "answer": 1,
      "explanation": "Correct: (b). IndexError is the term for: An error when a list is asked for an index that does not exist. (a) TypeError means An error when an operation is used on the wrong type of value, such as adding a number and a string. (c) Error means A problem that stops a program from running or makes it behave wrongly. (d) try/except means A Python structure that tries code and, if a named error happens, runs the except block instead of crashing."
    },
    {
      "q": "Which term means: An error when a program divides by zero.",
      "choices": [
        "try/except",
        "Debugging",
        "Print debugging",
        "ZeroDivisionError"
      ],
      "answer": 3,
      "explanation": "Correct: (d). ZeroDivisionError is the term for: An error when a program divides by zero. (a) Debugging means Finding and fixing the mistakes in a program. (b) try/except means A Python structure that tries code and, if a named error happens, runs the except block instead of crashing. (c) Print debugging means Finding a bug by adding print() calls to show what values variables actually hold while the program runs."
    },
    {
      "q": "Which of the following is TRUE about try/except?",
      "choices": [
        "An error that happens while a program is running, such as dividing by zero.",
        "A Python structure that tries code and, if a named error happens, runs the except block instead of crashing.",
        "A problem that stops a program from running or makes it behave wrongly.",
        "An error when a list is asked for an index that does not exist."
      ],
      "answer": 1,
      "explanation": "Correct: (b). try/except: A Python structure that tries code and, if a named error happens, runs the except block instead of crashing. (a) describes Runtime error, not try/except. (c) describes Error, not try/except. (d) describes IndexError, not try/except."
    },
    {
      "q": "What does the term “Runtime error” mean?",
      "choices": [
        "An error that happens while a program is running, such as dividing by zero.",
        "An error when a dictionary is asked for a key that does not exist.",
        "The report Python prints when an error happens, showing the error type, message, and the line where it happened.",
        "An error when a list is asked for an index that does not exist."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Runtime error means: An error that happens while a program is running, such as dividing by zero. (b) is the definition of KeyError, not of Runtime error. (c) is the definition of Traceback, not of Runtime error. (d) is the definition of IndexError, not of Runtime error."
    },
    {
      "q": "What does this code print? try: print(10 / 0) / except ZeroDivisionError: print(\"Cannot divide by zero\")",
      "choices": [
        "0",
        "An error message and a crash",
        "Cannot divide by zero",
        "10"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Dividing by zero raises ZeroDivisionError, which the except block catches, so it prints the friendly message instead of crashing. (a) is wrong: 10 / 0 has no answer. (b) is wrong: that is what would happen without the try/except. (d) is wrong: the division never completes."
    },
    {
      "q": "A program runs without crashing but gives the wrong total for a shopping list. What kind of error is this?",
      "choices": [
        "A syntax error",
        "A runtime error",
        "A logic error",
        "A NameError"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A logic error is when the program runs but gives the wrong answer — no error message appears. (a) is wrong: a syntax error stops the program before it runs. (b) is wrong: a runtime error crashes the program. (d) is wrong: a NameError is a specific runtime error about a missing name, and it would crash the program."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Errors & Debugging: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain the three kinds of error: syntax, runtime, and logic.</p>\n<p><strong>Key terms:</strong> Error · SyntaxError · NameError · TypeError · IndexError · KeyError · ValueError · ZeroDivisionError.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain the three kinds of error: syntax, runtime, and logic.</li>\n<li>Read a traceback and find the line where the error happened.</li>\n<li>Name the common errors: SyntaxError, NameError, TypeError, IndexError, KeyError, ValueError, ZeroDivisionError, FileNotFoundError.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
