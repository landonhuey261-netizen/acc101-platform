// cmp102 - Module 12: Final Project: A File-Organiser Script
module.exports = {
  "number": 12,
  "slug": "final-project-file-organizer",
  "title": "Final Project: A File-Organiser Script",
  "estTime": "3–4 hours",
  "objectives": [
    "Plan a small program before writing it: inputs, steps, outputs.",
    "Combine variables, loops, functions, and dictionaries in one program.",
    "Write a script that sorts file names into groups by type.",
    "Test a program with known values and fix the bugs you find.",
    "Describe what you would learn next after this course."
  ],
  "sections": [
    {
      "heading": "The Job: Sort a Pile of File Names",
      "html": "<p>Your final project is a small, real program: a file-organiser script. It takes a list of file names — photo.jpg, report.docx, song.mp3, photo2.jpg — and sorts them into groups by their type, so you can see at a glance which files are photos, which are documents, and which are music. It is the same job you did by hand in cmp101's lab, now done by a program.</p>\n<p>Before you write any code, write the plan in plain words: (1) start with a list of file names; (2) make an empty dictionary to hold the groups; (3) for each file name, work out its type from the part after the last dot; (4) add the file name to the right group in the dictionary; (5) print the groups. That is the algorithm. The code follows from it.</p>\n"
    },
    {
      "heading": "Building It, Step by Step",
      "html": "<p>Here is the whole program: </p>\n<pre>files = [&quot;photo.jpg&quot;, &quot;report.docx&quot;, &quot;song.mp3&quot;, &quot;photo2.jpg&quot;]\nby_type = {}\nfor f in files:\n    ext = f.split(&quot;.&quot;)[-1]\n    by_type.setdefault(ext, []).append(f)\nprint(by_type)</pre>\n<p> Walk through it line by line. files is the input list. by_type is an empty dictionary that will hold the groups. The for loop visits each file name. f.split(\".\")[-1] takes the part after the last dot — the extension. by_type.setdefault(ext, []).append(f) adds the file to its group, creating the group if it does not exist yet. Finally, print shows the result: {'jpg': ['photo.jpg', 'photo2.jpg'], 'docx': ['report.docx'], 'mp3': ['song.mp3']}.</p>\n<p>Run it yourself, then change the input list: add your own file names, including a .pdf and a .png, and run it again. Then try an edge case: a file name with no dot in it, such as README. What happens? The whole name becomes the “extension” — a bug you could fix by checking whether \".\" is in the name first.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> The final project is just the course skills combined: a list for the input, a loop to visit each item, a dictionary to hold the groups, and print to show the result. Nothing in it is new — it is all pieces you already know.</div></p>\n"
    },
    {
      "heading": "Testing and Fixing",
      "html": "<p>Test with values whose answers you already know. If you give the script [\"a.jpg\", \"b.jpg\"], you should get one group, jpg, with two files. If you get something else, the bug is in your code, not in your test. Test the empty list too: [] should give an empty dictionary, {}, not a crash.</p>\n<p>When something goes wrong, debug with the method from Module 11: read the traceback from the bottom up, add a print() to show what a variable actually holds, change one thing, and run it again. The file-organiser is small enough that you can trace it by hand, line by line, with a three-item list — do that once, on paper, and you will understand it properly.</p>\n"
    },
    {
      "heading": "What Comes Next",
      "html": "<p>You now have the foundations of programming: variables, types, input and output, decisions, loops, functions, lists, dictionaries, files, and debugging. The next step is practice: small programs, every week, are worth more than re-reading this course. Ideas: a tip calculator, a password generator, a quiz game, a to-do list saved to a file.</p>\n<p>After that, two paths open up. One is more Python: the book Python Crash Course, 3rd edition, by Eric Matthes, is a well-regarded next step, and its projects build real programs. The other is the next course in this program, cmp103, where you will use JavaScript — a language a lot like Python, but one that runs in a web browser and makes web pages interactive.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Plan in plain words first: inputs, steps, outputs.</li><li>The file-organiser combines a list, a loop, a dictionary, and print.</li><li>Test with values whose answers you already know, including edge cases.</li><li>Debug with the Module 11 method: reproduce, read, print, change one thing, test again.</li><li>Keep practising with small programs — that is how programming sticks.</li></ul></p>\n<p><strong>Common mistake:</strong> Writing the whole program at once and then wondering why it does not work. Build it one step at a time and run it after each step.</p>\n<p><strong>Common mistake:</strong> Testing only with easy inputs. A file name with no dot, or an empty list, is where the bugs hide.</p>\n<p><strong>Ready check:</strong> If you can explain the file-organiser's plan in plain words, run it, add your own file names, and fix one bug in it, you have finished this course.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Project",
      "def": "A complete program built to do a real job, made by combining the small skills from the course."
    },
    {
      "term": "Plan",
      "def": "The algorithm for a program, written in plain words before any code."
    },
    {
      "term": "Input",
      "def": "The information a program starts with, such as a list of file names."
    },
    {
      "term": "Output",
      "def": "The result a program produces, such as a sorted list of groups."
    },
    {
      "term": "Function",
      "def": "A named block of code that does one job, which you can call again and again."
    },
    {
      "term": "Dictionary",
      "def": "A collection of key-value pairs, such as a file type with its list of files."
    },
    {
      "term": "Loop",
      "def": "Code that repeats a block, such as visiting every file name in a list."
    },
    {
      "term": "Test",
      "def": "Running a program with values whose answers you already know, to check it works."
    },
    {
      "term": "Edge case",
      "def": "An unusual input that might break a program, such as a file name with no dot in it."
    },
    {
      "term": "Refactor",
      "def": "Tidying code without changing what it does, usually by moving repeated code into a function."
    },
    {
      "term": "Main program",
      "def": "The part of a script that runs the steps in order, usually calling functions to do the work."
    },
    {
      "term": "Script",
      "def": "A small Python program saved in a .py file and run from the terminal."
    },
    {
      "term": "Docstring",
      "def": "A short description at the top of a function, in triple quotes, explaining what the function does."
    },
    {
      "term": "README",
      "def": "A short text file that explains what a program does and how to run it."
    },
    {
      "term": "Next step",
      "def": "What to learn after this course: more Python, a bigger project, or a new language such as JavaScript."
    }
  ],
  "video": {
    "title": "Python OOP Tutorial 1: Classes and Instances",
    "embedUrl": "https://www.youtube.com/embed/ZDa-Z5JzLYM",
    "note": "Corey Schafer's first lesson on classes — a look ahead at how bigger programs organise code into classes. Watch it as a preview of where Python goes next, after this course's functions and dictionaries.",
    "more": [
      {
        "title": "Harvard CS50's Introduction to Programming with Python – Full University Course",
        "url": "https://www.youtube.com/watch?v=nLRL_NcnK-4"
      },
      {
        "title": "Python Tutorial for Beginners - Learn Python in 5 Hours [FULL COURSE]",
        "url": "https://www.youtube.com/watch?v=t8pPdKYpowI"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Project” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Project — A complete program built to do a real job, made by combining the small skills from the course. Step 2: It matters because it is part of: Plan a small program before writing it: inputs, steps, outputs. Step 3: An example from the module is the way project shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Plan” and “Input”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Plan — The algorithm for a program, written in plain words before any code. Step 2: Input — The information a program starts with, such as a list of file names. Step 3: They differ because the first is about plan while the second is about input; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Combine variables, loops, functions, and dictionaries in one program.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Combine variables, loops, functions, and dictionaries in one program. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Output” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Output — The result a program produces, such as a sorted list of groups. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Function — A named block of code that does one job, which you can call again and again. Step 2: Dictionary — A collection of key-value pairs, such as a file type with its list of files. Step 3: Loop — Code that repeats a block, such as visiting every file name in a list. Step 4: Test — Running a program with values whose answers you already know, to check it works. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Describe what you would learn next after this course. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Project” mean?",
      "choices": [
        "A named block of code that does one job, which you can call again and again.",
        "The part of a script that runs the steps in order, usually calling functions to do the work.",
        "An unusual input that might break a program, such as a file name with no dot in it.",
        "A complete program built to do a real job, made by combining the small skills from the course."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Project means: A complete program built to do a real job, made by combining the small skills from the course. (a) is the definition of Function, not of Project. (b) is the definition of Edge case, not of Project. (c) is the definition of Main program, not of Project."
    },
    {
      "q": "What does the term “Output” mean?",
      "choices": [
        "What to learn after this course: more Python, a bigger project, or a new language such as JavaScript.",
        "A named block of code that does one job, which you can call again and again.",
        "The result a program produces, such as a sorted list of groups.",
        "A short description at the top of a function, in triple quotes, explaining what the function does."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Output means: The result a program produces, such as a sorted list of groups. (a) is the definition of Function, not of Output. (b) is the definition of Docstring, not of Output. (d) is the definition of Next step, not of Output."
    },
    {
      "q": "Which term means: Code that repeats a block, such as visiting every file name in a list.",
      "choices": [
        "Input",
        "Dictionary",
        "Loop",
        "Edge case"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Loop is the term for: Code that repeats a block, such as visiting every file name in a list. (a) Dictionary means A collection of key-value pairs, such as a file type with its list of files. (b) Input means The information a program starts with, such as a list of file names. (d) Edge case means An unusual input that might break a program, such as a file name with no dot in it."
    },
    {
      "q": "Which term means: Tidying code without changing what it does, usually by moving repeated code into a function.",
      "choices": [
        "Loop",
        "Refactor",
        "Dictionary",
        "Project"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Refactor is the term for: Tidying code without changing what it does, usually by moving repeated code into a function. (a) Loop means Code that repeats a block, such as visiting every file name in a list. (c) Project means A complete program built to do a real job, made by combining the small skills from the course. (d) Dictionary means A collection of key-value pairs, such as a file type with its list of files."
    },
    {
      "q": "Which of the following is TRUE about Docstring?",
      "choices": [
        "A short description at the top of a function, in triple quotes, explaining what the function does.",
        "Code that repeats a block, such as visiting every file name in a list.",
        "The part of a script that runs the steps in order, usually calling functions to do the work.",
        "A named block of code that does one job, which you can call again and again."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Docstring: A short description at the top of a function, in triple quotes, explaining what the function does. (b) describes Loop, not Docstring. (c) describes Main program, not Docstring. (d) describes Function, not Docstring."
    },
    {
      "q": "What does the term “Project” mean?",
      "choices": [
        "An unusual input that might break a program, such as a file name with no dot in it.",
        "The part of a script that runs the steps in order, usually calling functions to do the work.",
        "A complete program built to do a real job, made by combining the small skills from the course.",
        "Code that repeats a block, such as visiting every file name in a list."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Project means: A complete program built to do a real job, made by combining the small skills from the course. (a) is the definition of Loop, not of Project. (b) is the definition of Main program, not of Project. (d) is the definition of Edge case, not of Project."
    },
    {
      "q": "In the file-organiser script, what does f.split(\".\")[-1] give for the file name \"photo.jpg\"?",
      "choices": [
        "\"photo\"",
        "\"jpg\"",
        "\"photo.jpg\"",
        "An error"
      ],
      "answer": 1,
      "explanation": "Correct: (b). split(\".\") cuts \"photo.jpg\" into [\"photo\", \"jpg\"], and [-1] takes the last piece, \"jpg\" — the extension. (a) is wrong: \"photo\" is the first piece, index 0. (c) is wrong: the whole name is split, not returned. (d) is wrong: splitting a string with a dot in it works fine."
    },
    {
      "q": "What does this code print? files = [\"photo.jpg\", \"report.docx\", \"song.mp3\", \"photo2.jpg\"] / by_type = {} / for f in files: ext = f.split(\".\")[-1] / by_type.setdefault(ext, []).append(f) / print(by_type)",
      "choices": [
        "{'jpg': ['photo.jpg', 'photo2.jpg'], 'docx': ['report.docx'], 'mp3': ['song.mp3']}",
        "{'photo': ['jpg'], 'report': ['docx']}",
        "['photo.jpg', 'report.docx', 'song.mp3', 'photo2.jpg']",
        "An error, because setdefault is not a real method"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Each file is grouped by its extension: two jpgs together, one docx, one mp3. (b) is wrong: the keys are extensions, not file names. (c) is wrong: the output is a dictionary of groups, not the original list. (d) is wrong: setdefault is a real dictionary method."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Final Project: A File-Organiser Script: Quick Reference</h3>\n<p><strong>Core idea:</strong> Plan a small program before writing it: inputs, steps, outputs.</p>\n<p><strong>Key terms:</strong> Project · Plan · Input · Output · Function · Dictionary · Loop · Test.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Plan a small program before writing it: inputs, steps, outputs.</li>\n<li>Combine variables, loops, functions, and dictionaries in one program.</li>\n<li>Write a script that sorts file names into groups by type.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
