// cmp102 - Module 7: Functions
module.exports = {
  "number": 7,
  "slug": "functions",
  "title": "Functions",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a function is and why programs use them.",
    "Define a function with def and call it.",
    "Pass information into a function with parameters.",
    "Return a value from a function with return.",
    "Explain the difference between local and global variables."
  ],
  "sections": [
    {
      "heading": "Functions: Do It Once, Use It Often",
      "html": "<p>A function is a named block of code that does one job. You define it once with def, and then you call it — run it — as many times as you like, by writing its name with brackets. Without functions, a program that greets ten people would need the greeting code written ten times; with a function, you write it once and call it ten times.</p>\n<p>Functions make programs shorter, easier to read, and easier to fix: when the greeting needs to change, you change it in one place. Every program you write from now on should be built from small functions, each doing one clear job.</p>\n"
    },
    {
      "heading": "Defining and Calling",
      "html": "<p>A function definition starts with def, then the name, then brackets, then a colon. The indented lines underneath are the function's body. </p>\n<pre>def greet(name):\n    return &quot;Hello, &quot; + name\n\nprint(greet(&quot;Maya&quot;))</pre>\n<p> The def line creates the function but does not run it — nothing happens until the last line calls greet(\"Maya\"), which runs the body with name set to \"Maya\" and prints Hello, Maya.</p>\n<p>A function can also return a value instead of printing it. return sends a value back to the code that called the function: </p>\n<pre>def add(a, b):\n    return a + b\n\nprint(add(3, 4))</pre>\n<p> add(3, 4) gives back 7, and print shows it. A function without a return statement gives back None — Python's way of saying “nothing”.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> def creates a function; calling it runs it. A function that prints shows its result immediately; a function that returns hands its result back for the caller to use.</div></p>\n"
    },
    {
      "heading": "Parameters and Arguments",
      "html": "<p>A parameter is a variable in the function's definition that receives a value when the function is called. In def greet(name), name is the parameter. In greet(\"Maya\"), \"Maya\" is the argument — the actual value passed in. A function can have several parameters, separated by commas: def add(a, b) takes two.</p>\n<p>Parameters make functions flexible: the same greet function can greet anyone, because the name comes in as a parameter instead of being fixed inside the function. When you call a function, give the arguments in the same order as the parameters, or name them: add(a=3, b=4).</p>\n"
    },
    {
      "heading": "Local and Global Variables",
      "html": "<p>A variable created inside a function is local: it exists only while the function runs, and the rest of the program cannot see it. A variable created outside any function is global: it can be read anywhere. If a function and the main program both use the name total, they are two different boxes — changing one does not change the other.</p>\n<p>This is a feature, not a bug: local variables keep functions self-contained, so one function's total cannot accidentally break another's. The rule to remember is simple: pass information into a function as parameters, and get information out with return. Avoid reaching for global variables from inside functions — it makes programs hard to follow and hard to test.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>A function is a named block of code that does one job; def creates it, calling it runs it.</li><li>Parameters receive values; arguments are the values passed in.</li><li>return sends a value back; a function without return gives back None.</li><li>Local variables exist only inside their function; global variables exist everywhere.</li><li>Pass data in with parameters, get data out with return.</li></ul></p>\n<p><strong>Common mistake:</strong> Defining a function but never calling it, then wondering why nothing happens. def only creates the function — the call runs it.</p>\n<p><strong>Common mistake:</strong> Printing inside a function and then trying to use the result. print shows a value; return hands it back. Use return when the caller needs the value.</p>\n<p><strong>Ready check:</strong> If you can write a function that takes two numbers and returns their sum, then call it and print the result, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Function",
      "def": "A named block of code that does one job, which you can run again and again by calling its name."
    },
    {
      "term": "def",
      "def": "The keyword that starts a function definition in Python."
    },
    {
      "term": "Call",
      "def": "Running a function by writing its name with brackets, such as greet(\"Maya\")."
    },
    {
      "term": "Parameter",
      "def": "A variable listed in a function's definition that receives a value when the function is called."
    },
    {
      "term": "Argument",
      "def": "The actual value you pass to a function when you call it."
    },
    {
      "term": "return",
      "def": "The statement that sends a value back from a function to the code that called it."
    },
    {
      "term": "Return value",
      "def": "The value a function sends back with return."
    },
    {
      "term": "Local variable",
      "def": "A variable created inside a function; it exists only while the function runs."
    },
    {
      "term": "Global variable",
      "def": "A variable created outside any function; it can be read anywhere in the program."
    },
    {
      "term": "Scope",
      "def": "The part of a program where a variable exists and can be used."
    },
    {
      "term": "Docstring",
      "def": "A short description at the top of a function, in triple quotes, explaining what the function does."
    },
    {
      "term": "None",
      "def": "Python's special value meaning “nothing” — what a function returns if it has no return statement."
    },
    {
      "term": "Reusable code",
      "def": "Code written once and used many times, usually as a function, instead of being copied and pasted."
    },
    {
      "term": "Built-in function",
      "def": "A function Python provides for free, such as print(), len(), and range()."
    },
    {
      "term": "Side effect",
      "def": "Something a function does besides returning a value, such as printing or changing a file."
    }
  ],
  "video": {
    "title": "Python Tutorial for Beginners - Learn Python in 5 Hours [FULL COURSE]",
    "embedUrl": "https://www.youtube.com/embed/t8pPdKYpowI",
    "note": "TechWorld with Nana's five-hour Python course. Watch the functions sections and build each example in VS Code as you go.",
    "more": [
      {
        "title": "Python Full Course for Beginners",
        "url": "https://www.youtube.com/watch?v=_uQrJ0TkZlc"
      },
      {
        "title": "Python Full Course for free 🐍",
        "url": "https://www.youtube.com/watch?v=XKHEtdqhLK8"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Function” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Function — A named block of code that does one job, which you can run again and again by calling its name. Step 2: It matters because it is part of: Explain what a function is and why programs use them. Step 3: An example from the module is the way function shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “def” and “Call”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: def — The keyword that starts a function definition in Python. Step 2: Call — Running a function by writing its name with brackets, such as greet(\"Maya\"). Step 3: They differ because the first is about def while the second is about call; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Define a function with def and call it.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Define a function with def and call it. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Parameter” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Parameter — A variable listed in a function's definition that receives a value when the function is called. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Argument — The actual value you pass to a function when you call it. Step 2: return — The statement that sends a value back from a function to the code that called it. Step 3: Return value — The value a function sends back with return. Step 4: Local variable — A variable created inside a function; it exists only while the function runs. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain the difference between local and global variables. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “return” mean?",
      "choices": [
        "The statement that sends a value back from a function to the code that called it.",
        "A variable created inside a function; it exists only while the function runs.",
        "A variable created outside any function; it can be read anywhere in the program.",
        "A function Python provides for free, such as print(), len(), and range()."
      ],
      "answer": 0,
      "explanation": "Correct: (a). return means: The statement that sends a value back from a function to the code that called it. (b) is the definition of Local variable, not of return. (c) is the definition of Global variable, not of return. (d) is the definition of Built-in function, not of return."
    },
    {
      "q": "What does the term “Global variable” mean?",
      "choices": [
        "The statement that sends a value back from a function to the code that called it.",
        "Something a function does besides returning a value, such as printing or changing a file.",
        "The part of a program where a variable exists and can be used.",
        "A variable created outside any function; it can be read anywhere in the program."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Global variable means: A variable created outside any function; it can be read anywhere in the program. (a) is the definition of return, not of Global variable. (b) is the definition of Scope, not of Global variable. (c) is the definition of Side effect, not of Global variable."
    },
    {
      "q": "Which term means: Python's special value meaning “nothing” — what a function returns if it has no return statement.",
      "choices": [
        "Global variable",
        "Built-in function",
        "Local variable",
        "None"
      ],
      "answer": 3,
      "explanation": "Correct: (d). None is the term for: Python's special value meaning “nothing” — what a function returns if it has no return statement. (a) Built-in function means A function Python provides for free, such as print(), len(), and range(). (b) Local variable means A variable created inside a function; it exists only while the function runs. (c) Global variable means A variable created outside any function; it can be read anywhere in the program."
    },
    {
      "q": "Which term means: Something a function does besides returning a value, such as printing or changing a file.",
      "choices": [
        "Side effect",
        "Built-in function",
        "Global variable",
        "Argument"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Side effect is the term for: Something a function does besides returning a value, such as printing or changing a file. (b) Built-in function means A function Python provides for free, such as print(), len(), and range(). (c) Global variable means A variable created outside any function; it can be read anywhere in the program. (d) Argument means The actual value you pass to a function when you call it."
    },
    {
      "q": "Which of the following is TRUE about Call?",
      "choices": [
        "A variable listed in a function's definition that receives a value when the function is called.",
        "A short description at the top of a function, in triple quotes, explaining what the function does.",
        "Running a function by writing its name with brackets, such as greet(\"Maya\").",
        "A function Python provides for free, such as print(), len(), and range()."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Call: Running a function by writing its name with brackets, such as greet(\"Maya\"). (a) describes Docstring, not Call. (b) describes Parameter, not Call. (d) describes Built-in function, not Call."
    },
    {
      "q": "What does the term “return” mean?",
      "choices": [
        "Code written once and used many times, usually as a function, instead of being copied and pasted.",
        "The statement that sends a value back from a function to the code that called it.",
        "Running a function by writing its name with brackets, such as greet(\"Maya\").",
        "A function Python provides for free, such as print(), len(), and range()."
      ],
      "answer": 1,
      "explanation": "Correct: (b). return means: The statement that sends a value back from a function to the code that called it. (a) is the definition of Reusable code, not of return. (c) is the definition of Call, not of return. (d) is the definition of Built-in function, not of return."
    },
    {
      "q": "What does this code print? def add(a, b): return a + b / print(add(3, 4))",
      "choices": [
        "7",
        "34",
        "None",
        "Nothing — it is an error"
      ],
      "answer": 0,
      "explanation": "Correct: (a). add(3, 4) returns 3 + 4, which is 7, and print shows 7. (b) is wrong: + adds numbers, it does not join them as text. (c) is wrong: the function has a return, so it does not return None. (d) is wrong: the code is valid Python."
    },
    {
      "q": "A function is defined but the program prints nothing. What is the most likely reason?",
      "choices": [
        "The function was defined but never called",
        "The function name is too long",
        "The computer is too slow",
        "The function has a parameter"
      ],
      "answer": 0,
      "explanation": "Correct: (a). def only creates a function; nothing runs until it is called. (b) is wrong: a long name is fine. (c) is wrong: speed does not stop a program from running. (d) is wrong: parameters are normal and do not prevent a call."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Functions: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a function is and why programs use them.</p>\n<p><strong>Key terms:</strong> Function · def · Call · Parameter · Argument · return · Return value · Local variable.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a function is and why programs use them.</li>\n<li>Define a function with def and call it.</li>\n<li>Pass information into a function with parameters.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
