// cmp102 - Module 1: What Is Programming? Setting Up Python
module.exports = {
  "number": 1,
  "slug": "what-is-programming-setup",
  "title": "What Is Programming? Setting Up Python",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a program and a programming language are.",
    "Explain what an algorithm is and write one in plain words.",
    "Install Python 3 and VS Code on your own computer.",
    "Write and run a first Python program.",
    "Explain what the terminal is and how to run a Python file from it."
  ],
  "sections": [
    {
      "heading": "Programs Are Recipes",
      "html": "<p>A program is a set of instructions that tells a computer how to do a job, written in a programming language. Think of it like a recipe: a recipe lists steps in order — mix the flour, add the eggs, bake for 30 minutes — and a program lists steps in order too. The difference is that a computer follows the steps exactly, with no common sense, so the steps must be complete and exact.</p>\n<p>Before you write any code, you plan. That plan is called an algorithm: a step-by-step description of how to solve a problem, in plain words. Making a cup of tea is an algorithm (fill the kettle, boil it, pour the water, add the tea bag, wait, remove the bag). Writing the algorithm first, in words, is how you avoid staring at a blank screen.</p>\n"
    },
    {
      "heading": "Why Python?",
      "html": "<p>Python is one of the most popular programming languages in the world, used for websites, data, automation, and science. It is a good first language because it reads almost like plain English and needs very little boilerplate — the extra punctuation other languages demand. print(\"Hello, world!\") is a complete Python program; in some other languages the same program takes five lines.</p>\n<p>Python is also free, runs on Windows, Mac, and Linux, and has a huge community, so when you get stuck, someone has almost always answered your question online already. This course teaches Python 3, the current version. If you see old code online that uses print without brackets, that is Python 2 — retired, and not what this course teaches.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> An algorithm is the plan in plain words; the code is the plan written in Python. Always plan first, in words, then write the code.</div></p>\n"
    },
    {
      "heading": "Setting Up: Python and VS Code",
      "html": "<p>You need two free things: Python itself, and VS Code, the editor where you will write it. Download Python from python.org and, during installation, tick the box “Add Python to PATH” — without it, your computer will not find Python when you try to run it. Then download VS Code from code.visualstudio.com and install it.</p>\n<p>Check the installation in VS Code: open the Terminal menu, choose New Terminal, and type python --version, then press Enter. If it prints something like Python 3.12.3, you are ready. If it says Python was not found, reinstall Python and tick the PATH box. In VS Code, also install the free Python extension from Microsoft — it adds helpful colours and error hints.</p>\n"
    },
    {
      "heading": "Your First Program, Run for Real",
      "html": "<p>Make a new file in VS Code called hello.py and type this line: </p>\n<pre>print(&quot;Hello, world!&quot;)</pre>\n<p> Save the file, then in the terminal type python hello.py and press Enter. The computer prints Hello, world! That is a program you wrote, running for real. Change the words inside the quotes to your own name and run it again — you have already edited a program.</p>\n<p><div class=\"callout\"><strong>Honest note:</strong> This app cannot run or grade your code. That is an honest limit of the app, not of you: real programmers write and run code in a real editor on their own computer, and that is what you will do in this course. VS Code and Python are both free.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>A program is instructions for a computer, written in a programming language.</li><li>An algorithm is the step-by-step plan in plain words, written before the code.</li><li>Python 3 is the current version; Python 2 is retired.</li><li>You need Python and VS Code installed on your own computer, both free.</li><li>Run a program from the terminal with python filename.py.</li></ul></p>\n<p><strong>Common mistake:</strong> Skipping the Python PATH box during installation, then wondering why the computer cannot find Python. Reinstall and tick the box.</p>\n<p><strong>Common mistake:</strong> Trying to write code before planning. Write the steps in plain words first — the code follows easily from the plan.</p>\n<p><strong>Ready check:</strong> If you can write hello.py, run it from the terminal, and explain what an algorithm is, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Program",
      "def": "A set of instructions that tells a computer how to do a job."
    },
    {
      "term": "Programming language",
      "def": "A language for writing instructions for a computer, such as Python or JavaScript."
    },
    {
      "term": "Python",
      "def": "A popular, beginner-friendly programming language, known for reading almost like plain English."
    },
    {
      "term": "Python 3",
      "def": "The current version of Python. All code in this course is Python 3."
    },
    {
      "term": "Algorithm",
      "def": "A step-by-step plan for solving a problem, written before you write any code."
    },
    {
      "term": "VS Code",
      "def": "Visual Studio Code — a free program for writing and running code, made by Microsoft."
    },
    {
      "term": "Editor",
      "def": "A program for writing code, such as VS Code."
    },
    {
      "term": "Terminal",
      "def": "The text window where you type commands to run programs."
    },
    {
      "term": "Run",
      "def": "Making the computer carry out a program's instructions."
    },
    {
      "term": "Syntax",
      "def": "The exact spelling and punctuation rules of a programming language."
    },
    {
      "term": "Bug",
      "def": "A mistake in a program that makes it behave wrongly or not run at all."
    },
    {
      "term": "Debugging",
      "def": "Finding and fixing the mistakes in a program."
    },
    {
      "term": "Code",
      "def": "Instructions written in a programming language that a computer can follow."
    },
    {
      "term": "Interpreter",
      "def": "The program that reads Python code and carries it out, line by line."
    },
    {
      "term": "Comment",
      "def": "A note inside code, starting with #, that the computer ignores and humans read."
    }
  ],
  "video": {
    "title": "Python for Beginners – Full Course [Programming Tutorial]",
    "embedUrl": "https://www.youtube.com/embed/eWRfhZUzrAc",
    "note": "A full beginner Python course from freeCodeCamp. Watch the opening sections on installing Python and writing your first program, and code along in VS Code.",
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
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Program” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Program — A set of instructions that tells a computer how to do a job. Step 2: It matters because it is part of: Explain what a program and a programming language are. Step 3: An example from the module is the way program shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Programming language” and “Python”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Programming language — A language for writing instructions for a computer, such as Python or JavaScript. Step 2: Python — A popular, beginner-friendly programming language, known for reading almost like plain English. Step 3: They differ because the first is about programming language while the second is about python; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Explain what an algorithm is and write one in plain words.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Explain what an algorithm is and write one in plain words. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Python 3” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Python 3 — The current version of Python. All code in this course is Python 3. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Algorithm — A step-by-step plan for solving a problem, written before you write any code. Step 2: VS Code — Visual Studio Code — a free program for writing and running code, made by Microsoft. Step 3: Editor — A program for writing code, such as VS Code. Step 4: Terminal — The text window where you type commands to run programs. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain what the terminal is and how to run a Python file from it. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Run” mean?",
      "choices": [
        "Visual Studio Code — a free program for writing and running code, made by Microsoft.",
        "Making the computer carry out a program's instructions.",
        "The text window where you type commands to run programs.",
        "Finding and fixing the mistakes in a program."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Run means: Making the computer carry out a program's instructions. (a) is the definition of Terminal, not of Run. (c) is the definition of Debugging, not of Run. (d) is the definition of VS Code, not of Run."
    },
    {
      "q": "What does the term “Debugging” mean?",
      "choices": [
        "Visual Studio Code — a free program for writing and running code, made by Microsoft.",
        "Making the computer carry out a program's instructions.",
        "Finding and fixing the mistakes in a program.",
        "A popular, beginner-friendly programming language, known for reading almost like plain English."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Debugging means: Finding and fixing the mistakes in a program. (a) is the definition of Python, not of Debugging. (b) is the definition of VS Code, not of Debugging. (d) is the definition of Run, not of Debugging."
    },
    {
      "q": "Which term means: A note inside code, starting with #, that the computer ignores and humans read.",
      "choices": [
        "Comment",
        "Editor",
        "Interpreter",
        "Programming language"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Comment is the term for: A note inside code, starting with #, that the computer ignores and humans read. (b) Editor means A program for writing code, such as VS Code. (c) Interpreter means The program that reads Python code and carries it out, line by line. (d) Programming language means A language for writing instructions for a computer, such as Python or JavaScript."
    },
    {
      "q": "Which term means: A popular, beginner-friendly programming language, known for reading almost like plain English.",
      "choices": [
        "Bug",
        "Terminal",
        "Python",
        "Algorithm"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Python is the term for: A popular, beginner-friendly programming language, known for reading almost like plain English. (a) Terminal means The text window where you type commands to run programs. (b) Bug means A mistake in a program that makes it behave wrongly or not run at all. (d) Algorithm means A step-by-step plan for solving a problem, written before you write any code."
    },
    {
      "q": "Which of the following is TRUE about VS Code?",
      "choices": [
        "The exact spelling and punctuation rules of a programming language.",
        "The text window where you type commands to run programs.",
        "A set of instructions that tells a computer how to do a job.",
        "Visual Studio Code — a free program for writing and running code, made by Microsoft."
      ],
      "answer": 3,
      "explanation": "Correct: (d). VS Code: Visual Studio Code — a free program for writing and running code, made by Microsoft. (a) describes Syntax, not VS Code. (b) describes Program, not VS Code. (c) describes Terminal, not VS Code."
    },
    {
      "q": "What does the term “Run” mean?",
      "choices": [
        "A language for writing instructions for a computer, such as Python or JavaScript.",
        "A note inside code, starting with #, that the computer ignores and humans read.",
        "A program for writing code, such as VS Code.",
        "Making the computer carry out a program's instructions."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Run means: Making the computer carry out a program's instructions. (a) is the definition of Comment, not of Run. (b) is the definition of Programming language, not of Run. (c) is the definition of Editor, not of Run."
    },
    {
      "q": "What is an algorithm?",
      "choices": [
        "A kind of computer virus",
        "A step-by-step plan for solving a problem, written in plain words before you code",
        "The Python program that runs your code",
        "A type of keyboard shortcut"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An algorithm is the plan in plain words, written before the code. (a) is wrong: an algorithm is a plan, not a virus. (c) is wrong: the program that runs Python code is the interpreter. (d) is wrong: a shortcut is a key combination."
    },
    {
      "q": "Ravi types python hello.py in the terminal and gets an error saying Python was not found. What is the most likely cause?",
      "choices": [
        "His program has a bug in it",
        "Python was installed without ticking the Add Python to PATH box",
        "His file is named wrong",
        "His computer has no internet connection"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Without the PATH box ticked, the computer cannot find Python at all. (a) is wrong: a bug would appear after Python starts, not before. (c) is wrong: a wrong file name gives a different error about the file. (d) is wrong: running Python needs no internet."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — What Is Programming? Setting Up Python: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a program and a programming language are.</p>\n<p><strong>Key terms:</strong> Program · Programming language · Python · Python 3 · Algorithm · VS Code · Editor · Terminal.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a program and a programming language are.</li>\n<li>Explain what an algorithm is and write one in plain words.</li>\n<li>Install Python 3 and VS Code on your own computer.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
