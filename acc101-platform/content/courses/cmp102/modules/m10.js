// cmp102 - Module 10: Working with Files
module.exports = {
  "number": 10,
  "slug": "working-with-files",
  "title": "Working with Files",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why programs read and write files.",
    "Open and read a text file with open() and with.",
    "Write text to a file.",
    "Read a file line by line in a loop.",
    "Explain why with is the safe way to open files."
  ],
  "sections": [
    {
      "heading": "Why Programs Use Files",
      "html": "<p>So far, everything your programs knew vanished when the program ended. Files fix that: a program can save its results to a file, and later — or another program entirely — can read them back. A shopping list app saves your list to a file. A game saves your progress to a file. A business saves its orders to a file. Files are how programs remember.</p>\n<p>The most common file job is also the simplest: read a text file, do something with each line, and write the result to another file. You will do exactly that in the final project, when your file-organiser script reads a list of file names and sorts them.</p>\n"
    },
    {
      "heading": "Reading a File",
      "html": "<p>Open a file with open(), read it, and close it. The safe way to do this is with a with statement, which closes the file for you automatically — even if something goes wrong in the middle: </p>\n<pre>with open(&quot;notes.txt&quot;, &quot;w&quot;) as f:\n    f.write(&quot;Buy milk\\nCall Ana\\n&quot;)\nwith open(&quot;notes.txt&quot;) as f:\n    print(f.read())</pre>\n<p> The first with block writes two lines into notes.txt. The second with block opens it for reading and prints the whole contents.</p>\n<p>You can also loop over a file directly: for line in f: visits each line in turn, one at a time. This is the memory-friendly way to read a big file, because only one line is in memory at once. Each line ends with a newline character (\\n), so you will often use line.strip() to remove the newline and any spaces at the ends.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Always open files with with. It closes the file for you automatically — even if an error happens in the middle of the block.</div></p>\n"
    },
    {
      "heading": "Writing and Appending",
      "html": "<p>Opening a file in write mode (\"w\") creates the file if it does not exist, and erases it if it does — be careful. Opening in append mode (\"a\") adds to the end without erasing. Reading is \"r\", the default. So: open(\"notes.txt\", \"w\") to start fresh, open(\"notes.txt\", \"a\") to add more, open(\"notes.txt\") to read.</p>\n<p>The write mode trap catches everyone once: opening an important file with \"w\" by mistake wipes it. If you only mean to add to a file, use \"a\". And always check the file name and the folder first — a program writes exactly where you tell it to, including the wrong place.</p>\n"
    },
    {
      "heading": "Paths: Where Is the File?",
      "html": "<p>A program looks for files relative to where it is running — the folder the terminal is in. If your program says open(\"notes.txt\") and notes.txt is in a different folder, Python fails with a FileNotFoundError. The fix is to run the program from the right folder, or to give the full path, such as open(\"Documents/notes.txt\").</p>\n<p>On Windows, paths use backslashes (Documents\\notes.txt), which clash with Python's escape characters — use forward slashes (Documents/notes.txt), which Python accepts on Windows too, or double the backslashes. A good habit: keep your program and the files it reads in the same folder while you are learning, so paths stay simple.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Files let programs remember things after they end.</li><li>Open with with: it closes the file for you automatically.</li><li>\"r\" reads, \"w\" writes (and erases), \"a\" appends.</li><li>Loop over a file with for line in f to read it line by line.</li><li>A program looks for files in the folder the terminal is in.</li></ul></p>\n<p><strong>Common mistake:</strong> Opening a file with \"w\" when you meant to add to it. \"w\" erases the file first — use \"a\" to append.</p>\n<p><strong>Common mistake:</strong> Forgetting to close a file. Without with, an unwritten buffer can lose your data — with closes it for you.</p>\n<p><strong>Ready check:</strong> If you can write three lines to a file, read them back, and add a fourth line without erasing the first three, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "File",
      "def": "Stored information on a drive, such as a text file, that a program can read from or write to."
    },
    {
      "term": "open()",
      "def": "The Python function that opens a file so a program can read from it or write to it."
    },
    {
      "term": "with",
      "def": "A Python statement that opens a file and closes it automatically when the block ends, even if an error happens."
    },
    {
      "term": "Read mode",
      "def": "Opening a file with \"r\" to read what is in it."
    },
    {
      "term": "Write mode",
      "def": "Opening a file with \"w\" to write new content into it. It erases what was there before."
    },
    {
      "term": "Append mode",
      "def": "Opening a file with \"a\" to add new content at the end without erasing what is there."
    },
    {
      "term": "read()",
      "def": "A file method that reads the whole file as one string."
    },
    {
      "term": "readline()",
      "def": "A file method that reads one line from a file."
    },
    {
      "term": "write()",
      "def": "A file method that writes a string into a file."
    },
    {
      "term": "Path",
      "def": "The location of a file, such as notes.txt or Documents/notes.txt."
    },
    {
      "term": "Text file",
      "def": "A file that holds plain readable text, such as .txt."
    },
    {
      "term": "CSV",
      "def": "Comma-separated values — a simple text format for tables, with one row per line and commas between values."
    },
    {
      "term": "Newline",
      "def": "The invisible character at the end of each line in a text file, written as \\n."
    },
    {
      "term": "Close",
      "def": "Finishing with a file so the computer saves it properly and other programs can use it."
    },
    {
      "term": "Encoding",
      "def": "How text is turned into bytes in a file. UTF-8 is the standard encoding Python uses."
    }
  ],
  "video": {
    "title": "Python Tutorial for Beginners - Full Course in 11 Hours [2020]",
    "embedUrl": "https://www.youtube.com/embed/4F2m91eKmts",
    "note": "Clever Programmer's full Python course. Watch the sections on file handling and work through the examples in VS Code.",
    "more": [
      {
        "title": "Python for Beginners – Full Course [Programming Tutorial]",
        "url": "https://www.youtube.com/watch?v=eWRfhZUzrAc"
      },
      {
        "title": "Harvard CS50's Introduction to Programming with Python – Full University Course",
        "url": "https://www.youtube.com/watch?v=nLRL_NcnK-4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “File” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: File — Stored information on a drive, such as a text file, that a program can read from or write to. Step 2: It matters because it is part of: Explain why programs read and write files. Step 3: An example from the module is the way file shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “open()” and “with”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: open() — The Python function that opens a file so a program can read from it or write to it. Step 2: with — A Python statement that opens a file and closes it automatically when the block ends, even if an error happens. Step 3: They differ because the first is about open() while the second is about with; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Open and read a text file with open() and with.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Open and read a text file with open() and with. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Read mode” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Read mode — Opening a file with \"r\" to read what is in it. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Write mode — Opening a file with \"w\" to write new content into it. It erases what was there before. Step 2: Append mode — Opening a file with \"a\" to add new content at the end without erasing what is there. Step 3: read() — A file method that reads the whole file as one string. Step 4: readline() — A file method that reads one line from a file. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain why with is the safe way to open files. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “CSV” mean?",
      "choices": [
        "Comma-separated values — a simple text format for tables, with one row per line and commas between values.",
        "The invisible character at the end of each line in a text file, written as \\n.",
        "Opening a file with \"w\" to write new content into it. It erases what was there before.",
        "A file that holds plain readable text, such as .txt."
      ],
      "answer": 0,
      "explanation": "Correct: (a). CSV means: Comma-separated values — a simple text format for tables, with one row per line and commas between values. (b) is the definition of Write mode, not of CSV. (c) is the definition of Text file, not of CSV. (d) is the definition of Newline, not of CSV."
    },
    {
      "q": "What does the term “Encoding” mean?",
      "choices": [
        "How text is turned into bytes in a file. UTF-8 is the standard encoding Python uses.",
        "Comma-separated values — a simple text format for tables, with one row per line and commas between values.",
        "Finishing with a file so the computer saves it properly and other programs can use it.",
        "A Python statement that opens a file and closes it automatically when the block ends, even if an error happens."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Encoding means: How text is turned into bytes in a file. UTF-8 is the standard encoding Python uses. (b) is the definition of Close, not of Encoding. (c) is the definition of with, not of Encoding. (d) is the definition of CSV, not of Encoding."
    },
    {
      "q": "Which term means: A Python statement that opens a file and closes it automatically when the block ends, even if an error happens.",
      "choices": [
        "Encoding",
        "open()",
        "write()",
        "with"
      ],
      "answer": 3,
      "explanation": "Correct: (d). with is the term for: A Python statement that opens a file and closes it automatically when the block ends, even if an error happens. (a) write() means A file method that writes a string into a file. (b) Encoding means How text is turned into bytes in a file. UTF-8 is the standard encoding Python uses. (c) open() means The Python function that opens a file so a program can read from it or write to it."
    },
    {
      "q": "Which term means: Opening a file with \"a\" to add new content at the end without erasing what is there.",
      "choices": [
        "Read mode",
        "Encoding",
        "Append mode",
        "CSV"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Append mode is the term for: Opening a file with \"a\" to add new content at the end without erasing what is there. (a) Read mode means Opening a file with \"r\" to read what is in it. (b) CSV means Comma-separated values — a simple text format for tables, with one row per line and commas between values. (d) Encoding means How text is turned into bytes in a file. UTF-8 is the standard encoding Python uses."
    },
    {
      "q": "Which of the following is TRUE about write()?",
      "choices": [
        "A file method that writes a string into a file.",
        "A file method that reads the whole file as one string.",
        "Finishing with a file so the computer saves it properly and other programs can use it.",
        "Stored information on a drive, such as a text file, that a program can read from or write to."
      ],
      "answer": 0,
      "explanation": "Correct: (a). write(): A file method that writes a string into a file. (b) describes Close, not write(). (c) describes read(), not write(). (d) describes File, not write()."
    },
    {
      "q": "What does the term “CSV” mean?",
      "choices": [
        "A file method that reads one line from a file.",
        "Comma-separated values — a simple text format for tables, with one row per line and commas between values.",
        "The invisible character at the end of each line in a text file, written as \\n.",
        "A file method that writes a string into a file."
      ],
      "answer": 1,
      "explanation": "Correct: (b). CSV means: Comma-separated values — a simple text format for tables, with one row per line and commas between values. (a) is the definition of Newline, not of CSV. (c) is the definition of readline(), not of CSV. (d) is the definition of write(), not of CSV."
    },
    {
      "q": "What does opening a file in write mode (\"w\") do if the file already has content?",
      "choices": [
        "It adds new content to the end",
        "It erases the old content first",
        "It reads the content and prints it",
        "It makes a copy of the file"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Write mode erases what was there before writing. (a) describes append mode (\"a\"). (c) describes read mode (\"r\"). (d) is wrong: opening a file never copies it."
    },
    {
      "q": "Why is with the recommended way to open a file?",
      "choices": [
        "It makes the file run faster",
        "It closes the file automatically, even if an error happens",
        "It lets you open the file without a file name",
        "It converts the file to a list automatically"
      ],
      "answer": 1,
      "explanation": "Correct: (b). with closes the file when the block ends, even on an error, so data is saved properly. (a) is wrong: speed is not the reason. (c) is wrong: you still need the file name. (d) is wrong: reading a file into a list is a separate step."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Working with Files: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain why programs read and write files.</p>\n<p><strong>Key terms:</strong> File · open() · with · Read mode · Write mode · Append mode · read() · readline().</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain why programs read and write files.</li>\n<li>Open and read a text file with open() and with.</li>\n<li>Write text to a file.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
