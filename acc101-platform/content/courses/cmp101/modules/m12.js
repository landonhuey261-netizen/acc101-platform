// cmp101 - Module 12: Your First Program
module.exports = {
  "number": 12,
  "slug": "your-first-program",
  "title": "Your First Program",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what code and a programming language are, in plain words.",
    "Explain why Python is a good first language.",
    "Install Python and VS Code on your own computer.",
    "Write and run a first program that prints a message.",
    "Explain what a bug is and what to do when your program does not work."
  ],
  "sections": [
    {
      "heading": "What Is Code?",
      "html": "<p>Code is instructions for a computer, written in a programming language. A programming language is a simpler, stricter version of a human language: it has a small vocabulary and exact rules, because computers cannot guess what you meant. Python is one of the most popular languages in the world, and it is a good first language because it reads almost like plain English: print(\"Hello, world!\") does exactly what it looks like it does.</p>\n<p>Every app you use — email, maps, games — is made of code written by people. Learning to code does not mean memorising everything; it means learning to break a job into small steps and to write those steps clearly enough for a computer to follow. That skill is what the next two courses teach, step by step.</p>\n"
    },
    {
      "heading": "Setting Up: Python and VS Code",
      "html": "<p>You need two free things on your own computer: Python, the language, and VS Code, the editor where you will write it. Go to python.org, download Python for your system, and during installation tick the box that says “Add Python to PATH” — without it, your computer will not find Python later. Then go to code.visualstudio.com, download VS Code, and install it.</p>\n<p>To check Python is installed, open the terminal in VS Code (Terminal menu, then New Terminal) and type python --version, then press Enter. If it prints a version number like Python 3.12, you are ready. If it says Python was not found, the PATH box was probably missed — reinstall Python and tick it.</p>\n<p><div class=\"callout\"><strong>Honest note:</strong> This app cannot run or grade your code. That is an honest limit of the app, not of you: real programmers write and run code in a real editor on their own computer, and that is what you will do from here on. VS Code and Python are both free.</div></p>\n"
    },
    {
      "heading": "Your First Program",
      "html": "<p>In VS Code, make a new file called hello.py, and type this one line: </p>\n<pre>print(&quot;Hello, world!&quot;)</pre>\n<p> Then open the terminal in VS Code and run it with this command: python hello.py Press Enter, and the computer prints Hello, world! You have written a program. It is a small one, but every programmer's first program looks exactly like this.</p>\n<p>Try changing the words inside the quotes to your own name and run it again. Then try a second line: </p>\n<pre>name = &quot;Sam&quot;\nprint(f&quot;Hello, {name}!&quot;)</pre>\n<p> Run it and you will see Hello, Sam! The computer ran your lines from top to bottom, in order. That is the whole secret of a program: lines of instructions, run in order.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> A program is lines of instructions, run in order from top to bottom. If you can print your own name, you have written a real program.</div></p>\n"
    },
    {
      "heading": "Bugs: When It Does Not Work",
      "html": "<p>Sooner or later — usually sooner — your program will not run, and the computer will show an error message. This is normal. Programmers call mistakes bugs, and fixing them is called debugging. The error message is your friend: it usually tells you the line number where the problem is and what kind of problem it is, such as a missing quote mark or a misspelt word.</p>\n<p>When you hit a bug, do three things. First, read the error message and look at the line it names. Second, check the usual suspects: missing quotes, missing brackets, and spelling — print is not prnit. Third, change one thing, run it again, and see what changes. Guessing wildly and changing five things at once only makes the puzzle harder.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Code is instructions for a computer, written in a programming language.</li><li>Python reads almost like plain English, which makes it a good first language.</li><li>You need Python and VS Code installed on your own computer — both are free.</li><li>print(\"Hello, world!\") is a real program, and every programmer starts there.</li><li>A bug is a mistake in a program; the error message tells you where to look.</li></ul></p>\n<p><strong>Common mistake:</strong> Forgetting the quotes around words in print(). print(Hello) fails; print(\"Hello\") works — the quotes tell Python it is text.</p>\n<p><strong>Common mistake:</strong> Typing python hello.py in the wrong folder, so the computer says it cannot find the file. Make sure the terminal is in the folder where you saved hello.py.</p>\n<p><strong>Ready check:</strong> If you can install Python and VS Code, write hello.py, run it, and change the message to your own name, you have finished this course — and you are ready for cmp102.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Code",
      "def": "Instructions written in a programming language that a computer can follow."
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
      "term": "VS Code",
      "def": "Visual Studio Code — a free program for writing and running code, made by Microsoft."
    },
    {
      "term": "Program",
      "def": "A set of instructions that tells a computer how to do a job."
    },
    {
      "term": "Run",
      "def": "Making the computer carry out a program's instructions."
    },
    {
      "term": "Print",
      "def": "In Python, the print() command shows text or a result on the screen."
    },
    {
      "term": "Bug",
      "def": "A mistake in a program that makes it behave wrongly or not run at all."
    },
    {
      "term": "Error message",
      "def": "What the computer shows you when a program cannot run, telling you what went wrong and where."
    },
    {
      "term": "Variable",
      "def": "A named box that holds a value, such as a name or a number, so a program can use it later."
    },
    {
      "term": "Syntax",
      "def": "The exact spelling and punctuation rules of a programming language."
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
      "term": "Comment",
      "def": "A note inside code, starting with #, that the computer ignores and humans read."
    },
    {
      "term": "Algorithm",
      "def": "A step-by-step plan for solving a problem, before you write any code."
    }
  ],
  "video": {
    "title": "Learn to Program: Variables, If, Loops, Functions and Bugs in Python (Computer Science 101 · Part 2)",
    "embedUrl": "https://www.youtube.com/embed/pjJ4Pd4Mc4M",
    "note": "Your first real programs, explained from zero: variables, if/else, loops, lists, and functions, built step by step on a real example. Watch it after you have run hello.py yourself.",
    "more": [
      {
        "title": "Computer & Technology Basics Course for Absolute Beginners | freeCodeCamp.org",
        "url": "https://www.youtube.com/watch?v=i084Z2ImqNI"
      },
      {
        "title": "What Is Inside a Computer? CPU, RAM, Binary and the Operating System (Computer Science 101 · Part 1)",
        "url": "https://www.youtube.com/watch?v=HEyCXhLNAxQ"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Code” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Code — Instructions written in a programming language that a computer can follow. Step 2: It matters because it is part of: Explain what code and a programming language are, in plain words. Step 3: An example from the module is the way code shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Programming language” and “Python”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Programming language — A language for writing instructions for a computer, such as Python or JavaScript. Step 2: Python — A popular, beginner-friendly programming language, known for reading almost like plain English. Step 3: They differ because the first is about programming language while the second is about python; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Explain why Python is a good first language.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Explain why Python is a good first language. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “VS Code” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: VS Code — Visual Studio Code — a free program for writing and running code, made by Microsoft. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Program — A set of instructions that tells a computer how to do a job. Step 2: Run — Making the computer carry out a program's instructions. Step 3: Print — In Python, the print() command shows text or a result on the screen. Step 4: Bug — A mistake in a program that makes it behave wrongly or not run at all. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain what a bug is and what to do when your program does not work. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Code” mean?",
      "choices": [
        "A set of instructions that tells a computer how to do a job.",
        "The exact spelling and punctuation rules of a programming language.",
        "What the computer shows you when a program cannot run, telling you what went wrong and where.",
        "Instructions written in a programming language that a computer can follow."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Code means: Instructions written in a programming language that a computer can follow. (a) is the definition of Program, not of Code. (b) is the definition of Error message, not of Code. (c) is the definition of Syntax, not of Code."
    },
    {
      "q": "What does the term “VS Code” mean?",
      "choices": [
        "A step-by-step plan for solving a problem, before you write any code.",
        "A set of instructions that tells a computer how to do a job.",
        "Visual Studio Code — a free program for writing and running code, made by Microsoft.",
        "The text window where you type commands to run programs."
      ],
      "answer": 2,
      "explanation": "Correct: (c). VS Code means: Visual Studio Code — a free program for writing and running code, made by Microsoft. (a) is the definition of Program, not of VS Code. (b) is the definition of Terminal, not of VS Code. (d) is the definition of Algorithm, not of VS Code."
    },
    {
      "q": "Which term means: In Python, the print() command shows text or a result on the screen.",
      "choices": [
        "Python",
        "Run",
        "Print",
        "Error message"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Print is the term for: In Python, the print() command shows text or a result on the screen. (a) Run means Making the computer carry out a program's instructions. (b) Python means A popular, beginner-friendly programming language, known for reading almost like plain English. (d) Error message means What the computer shows you when a program cannot run, telling you what went wrong and where."
    },
    {
      "q": "Which term means: A named box that holds a value, such as a name or a number, so a program can use it later.",
      "choices": [
        "Print",
        "Variable",
        "Run",
        "Code"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Variable is the term for: A named box that holds a value, such as a name or a number, so a program can use it later. (a) Print means In Python, the print() command shows text or a result on the screen. (c) Code means Instructions written in a programming language that a computer can follow. (d) Run means Making the computer carry out a program's instructions."
    },
    {
      "q": "Which of the following is TRUE about Terminal?",
      "choices": [
        "The text window where you type commands to run programs.",
        "In Python, the print() command shows text or a result on the screen.",
        "The exact spelling and punctuation rules of a programming language.",
        "A set of instructions that tells a computer how to do a job."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Terminal: The text window where you type commands to run programs. (b) describes Print, not Terminal. (c) describes Syntax, not Terminal. (d) describes Program, not Terminal."
    },
    {
      "q": "What does the term “Code” mean?",
      "choices": [
        "What the computer shows you when a program cannot run, telling you what went wrong and where.",
        "The exact spelling and punctuation rules of a programming language.",
        "Instructions written in a programming language that a computer can follow.",
        "In Python, the print() command shows text or a result on the screen."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Code means: Instructions written in a programming language that a computer can follow. (a) is the definition of Print, not of Code. (b) is the definition of Syntax, not of Code. (d) is the definition of Error message, not of Code."
    },
    {
      "q": "What does this Python line do? print(\"Hello, world!\")",
      "choices": [
        "It saves a file called Hello",
        "It shows the words Hello, world! on the screen",
        "It deletes the program",
        "It asks the user a question"
      ],
      "answer": 1,
      "explanation": "Correct: (b). print() shows what is inside the brackets on the screen. (a) is wrong: print does not save files. (c) is wrong: nothing is deleted. (d) is wrong: asking the user a question needs input(), not print()."
    },
    {
      "q": "Sara runs her program and gets an error message naming line 3 and saying a quote mark is missing. What should she do first?",
      "choices": [
        "Delete the whole program and start over",
        "Read the error message and look at line 3",
        "Change five different things and run it again",
        "Turn the computer off and give up"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The error message names the line and the problem — start there. (a) is wrong: one missing quote does not need a rewrite. (c) is wrong: changing many things at once makes the puzzle harder. (d) is wrong: a bug is normal and fixable."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Your First Program: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what code and a programming language are, in plain words.</p>\n<p><strong>Key terms:</strong> Code · Programming language · Python · VS Code · Program · Run · Print · Bug.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what code and a programming language are, in plain words.</li>\n<li>Explain why Python is a good first language.</li>\n<li>Install Python and VS Code on your own computer.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
