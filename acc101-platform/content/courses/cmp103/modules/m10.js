// cmp103 - Module 10: JavaScript Basics
module.exports = {
  "number": 10,
  "slug": "javascript-basics",
  "title": "JavaScript Basics",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what JavaScript does on a web page.",
    "Add JavaScript to a page with a script element or a separate file.",
    "Create variables with let and const.",
    "Use strings, numbers, and booleans in JavaScript.",
    "Write functions and use if statements and loops in JavaScript."
  ],
  "sections": [
    {
      "heading": "What JavaScript Does",
      "html": "<p>JavaScript is the programming language of the web browser. HTML gives a page its structure, CSS gives it its style, and JavaScript gives it behaviour: a button that shows a message, a form that checks what you typed, a page that updates without reloading. If you learned Python in cmp102, JavaScript will feel familiar — variables, if statements, loops, and functions all work the same way, with different spelling.</p>\n<p>You add JavaScript to a page with a <script> element at the end of the body, or — better — in a separate .js file linked with <script src=\"script.js\"></script>. A separate file keeps your page tidy and lets several pages share the same script, just like a separate CSS file. Put the script at the end of the body so the page's HTML exists before the script runs.</p>\n"
    },
    {
      "heading": "Variables: let and const",
      "html": "<p>JavaScript has two ways to make a variable: let for a value that can change, and const for a value that cannot be reassigned. </p>\n<pre>let name = &quot;Maya&quot;;\nconsole.log(name);</pre>\n<p> let name = \"Maya\" creates a variable called name holding \"Maya\"; console.log(name) prints it to the browser's console. Use const by default, and let only when you know the value will change — it makes your intentions clear to anyone reading the code.</p>\n<p>JavaScript has the same basic types as Python, with small differences: strings in quotes, numbers (one type for whole and decimal numbers — 7 and 3.5 are both numbers), and booleans written lowercase true and false. The old keyword var still exists, but do not use it: let and const are the modern way.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Use const by default and let when the value will change. Do not use var — it is the old way, and it has surprising behaviour that let and const fixed.</div></p>\n"
    },
    {
      "heading": "Functions, Decisions, and Loops",
      "html": "<p>A JavaScript function looks like this: </p>\n<pre>function add(a, b) {\n  return a + b;\n}\nconsole.log(add(3, 4));</pre>\n<p> function add(a, b) defines it, return a + b sends the sum back, and console.log(add(3, 4)) prints 7. If you know Python, compare it with def add(a, b): return a + b — the same idea, with curly braces {} instead of indentation to mark the block, and a semicolon at the end of most lines.</p>\n<p>Decisions and loops work the same way too: </p>\n<pre>let age = 20;\nif (age &gt;= 18) {\n  console.log(&quot;adult&quot;);\n} else {\n  console.log(&quot;minor&quot;);\n}</pre>\n<p> And a for loop: </p>\n<pre>for (let i = 0; i &lt; 3; i++) {\n  console.log(i);\n}</pre>\n<p> The differences from Python are spelling, not thinking: curly braces instead of indentation, === instead of == for a strict comparison, and true/false in lowercase. The thinking — conditions, loops, functions — is exactly what you learned in cmp102.</p>\n"
    },
    {
      "heading": "The Console: Your Best Friend",
      "html": "<p>The browser's console is where console.log() output appears and where JavaScript errors are shown. Open it with F12 or Ctrl + Shift + J (on a Mac, Command + Option + J), then click the Console tab. When your script does nothing and you cannot see why, the console is the first place to look — it usually shows an error with a line number.</p>\n<p><div class=\"callout\"><strong>Honest note:</strong> This app cannot run or grade your code. That is an honest limit of the app, not of you: real web developers write JavaScript in a real editor on their own computer and test it in a real browser, using the console to see what happens. VS Code is free, and every browser has a console built in.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>JavaScript makes pages interactive; HTML is structure, CSS is style.</li><li>Put JavaScript in a separate .js file linked at the end of the body.</li><li>Use const by default, let when the value changes, never var.</li><li>Functions, if, and loops work like Python, with braces instead of indentation.</li><li>console.log() prints to the browser console; errors appear there too.</li></ul></p>\n<p><strong>Common mistake:</strong> Writing True and False with capital letters, as in Python. JavaScript uses lowercase true and false.</p>\n<p><strong>Common mistake:</strong> Putting the script in the head so it runs before the page exists. Put scripts at the end of the body, or use a separate file linked there.</p>\n<p><strong>Ready check:</strong> If you can write a script with a const, a function that returns a value, and an if statement, and see its output in the console, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "JavaScript",
      "def": "The programming language that makes web pages interactive: buttons, forms, and changing content."
    },
    {
      "term": "Variable",
      "def": "A named box that holds a value, such as a name or a number, so a program can use it later."
    },
    {
      "term": "let",
      "def": "The keyword for a JavaScript variable whose value can change."
    },
    {
      "term": "const",
      "def": "The keyword for a JavaScript variable whose value cannot be reassigned."
    },
    {
      "term": "String",
      "def": "Text inside quotes in JavaScript, such as \"Maya\"."
    },
    {
      "term": "Number",
      "def": "A numeric value in JavaScript, such as 7 or 3.5. JavaScript has one number type for whole and decimal numbers."
    },
    {
      "term": "Boolean",
      "def": "A value that is either true or false in JavaScript (lowercase, unlike Python's True and False)."
    },
    {
      "term": "Function",
      "def": "A named block of code that does one job, which you can run again and again by calling its name."
    },
    {
      "term": "console.log()",
      "def": "A JavaScript function that prints a value to the browser's console, for checking what your code does."
    },
    {
      "term": "Console",
      "def": "The panel in the browser's developer tools where console.log() output appears and errors are shown."
    },
    {
      "term": "Operator",
      "def": "A symbol that does something to values, such as + for addition or === for strict comparison."
    },
    {
      "term": "if statement",
      "def": "A statement that runs a block of code only when its condition is true."
    },
    {
      "term": "Loop",
      "def": "Code that repeats a block of instructions, such as a for loop."
    },
    {
      "term": "Array",
      "def": "JavaScript's ordered collection of values, written in square brackets, such as [\"apple\", \"banana\"]."
    },
    {
      "term": "Script",
      "def": "A block of JavaScript code, in a <script> element or a separate .js file."
    }
  ],
  "video": {
    "title": "JavaScript Crash Course For Beginners",
    "embedUrl": "https://www.youtube.com/embed/hdI2bqOjy3c",
    "note": "Traversy Media's JavaScript crash course. Watch the sections on variables, functions, and conditionals, and type along in VS Code.",
    "more": [
      {
        "title": "Learn JavaScript - Full Course for Beginners",
        "url": "https://www.youtube.com/watch?v=PkZNo7MFNFg"
      },
      {
        "title": "JavaScript Full Course for free 🌐",
        "url": "https://www.youtube.com/watch?v=8dWL3wF_OMw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “JavaScript” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: JavaScript — The programming language that makes web pages interactive: buttons, forms, and changing content. Step 2: It matters because it is part of: Explain what JavaScript does on a web page. Step 3: An example from the module is the way javascript shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Variable” and “let”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Variable — A named box that holds a value, such as a name or a number, so a program can use it later. Step 2: let — The keyword for a JavaScript variable whose value can change. Step 3: They differ because the first is about variable while the second is about let; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Add JavaScript to a page with a script element or a separate file.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Add JavaScript to a page with a script element or a separate file. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “const” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: const — The keyword for a JavaScript variable whose value cannot be reassigned. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: String — Text inside quotes in JavaScript, such as \"Maya\". Step 2: Number — A numeric value in JavaScript, such as 7 or 3.5. JavaScript has one number type for whole and decimal numbers. Step 3: Boolean — A value that is either true or false in JavaScript (lowercase, unlike Python's True and False). Step 4: Function — A named block of code that does one job, which you can run again and again by calling its name. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Write functions and use if statements and loops in JavaScript. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “if statement” mean?",
      "choices": [
        "A statement that runs a block of code only when its condition is true.",
        "Code that repeats a block of instructions, such as a for loop.",
        "Text inside quotes in JavaScript, such as \"Maya\".",
        "A symbol that does something to values, such as + for addition or === for strict comparison."
      ],
      "answer": 0,
      "explanation": "Correct: (a). if statement means: A statement that runs a block of code only when its condition is true. (b) is the definition of String, not of if statement. (c) is the definition of Operator, not of if statement. (d) is the definition of Loop, not of if statement."
    },
    {
      "q": "What does the term “Script” mean?",
      "choices": [
        "A block of JavaScript code, in a <script> element or a separate .js file.",
        "A statement that runs a block of code only when its condition is true.",
        "JavaScript's ordered collection of values, written in square brackets, such as [\"apple\", \"banana\"].",
        "The keyword for a JavaScript variable whose value can change."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Script means: A block of JavaScript code, in a <script> element or a separate .js file. (b) is the definition of Array, not of Script. (c) is the definition of let, not of Script. (d) is the definition of if statement, not of Script."
    },
    {
      "q": "Which term means: The keyword for a JavaScript variable whose value can change.",
      "choices": [
        "Script",
        "Variable",
        "console.log()",
        "let"
      ],
      "answer": 3,
      "explanation": "Correct: (d). let is the term for: The keyword for a JavaScript variable whose value can change. (a) console.log() means A JavaScript function that prints a value to the browser's console, for checking what your code does. (b) Script means A block of JavaScript code, in a <script> element or a separate .js file. (c) Variable means A named box that holds a value, such as a name or a number, so a program can use it later."
    },
    {
      "q": "Which term means: A numeric value in JavaScript, such as 7 or 3.5. JavaScript has one number type for whole and decimal numbers.",
      "choices": [
        "const",
        "Script",
        "Number",
        "if statement"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Number is the term for: A numeric value in JavaScript, such as 7 or 3.5. JavaScript has one number type for whole and decimal numbers. (a) const means The keyword for a JavaScript variable whose value cannot be reassigned. (b) if statement means A statement that runs a block of code only when its condition is true. (d) Script means A block of JavaScript code, in a <script> element or a separate .js file."
    },
    {
      "q": "Which of the following is TRUE about console.log()?",
      "choices": [
        "A JavaScript function that prints a value to the browser's console, for checking what your code does.",
        "A value that is either true or false in JavaScript (lowercase, unlike Python's True and False).",
        "JavaScript's ordered collection of values, written in square brackets, such as [\"apple\", \"banana\"].",
        "The programming language that makes web pages interactive: buttons, forms, and changing content."
      ],
      "answer": 0,
      "explanation": "Correct: (a). console.log(): A JavaScript function that prints a value to the browser's console, for checking what your code does. (b) describes Array, not console.log(). (c) describes Boolean, not console.log(). (d) describes JavaScript, not console.log()."
    },
    {
      "q": "What does the term “if statement” mean?",
      "choices": [
        "A named block of code that does one job, which you can run again and again by calling its name.",
        "A statement that runs a block of code only when its condition is true.",
        "Code that repeats a block of instructions, such as a for loop.",
        "A JavaScript function that prints a value to the browser's console, for checking what your code does."
      ],
      "answer": 1,
      "explanation": "Correct: (b). if statement means: A statement that runs a block of code only when its condition is true. (a) is the definition of Loop, not of if statement. (c) is the definition of Function, not of if statement. (d) is the definition of console.log(), not of if statement."
    },
    {
      "q": "What does this JavaScript print? function add(a, b) { return a + b; } / console.log(add(3, 4));",
      "choices": [
        "34",
        "7",
        "undefined",
        "Nothing — it is an error"
      ],
      "answer": 1,
      "explanation": "Correct: (b). add(3, 4) returns 3 + 4, which is 7, and console.log shows 7. (a) is wrong: + adds numbers, it does not join them as text. (c) is wrong: the function has a return, so it does not return undefined. (d) is wrong: the code is valid JavaScript."
    },
    {
      "q": "What is the difference between let and const in JavaScript?",
      "choices": [
        "let is for numbers and const is for text",
        "let can be reassigned later; const cannot be reassigned",
        "const is for functions and let is for variables",
        "There is no difference"
      ],
      "answer": 1,
      "explanation": "Correct: (b). let creates a variable whose value can change; const creates one that cannot be reassigned. (a) is wrong: both can hold any type. (c) is wrong: both are for variables. (d) is wrong: reassignment is the whole difference."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — JavaScript Basics: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what JavaScript does on a web page.</p>\n<p><strong>Key terms:</strong> JavaScript · Variable · let · const · String · Number · Boolean · Function.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what JavaScript does on a web page.</li>\n<li>Add JavaScript to a page with a script element or a separate file.</li>\n<li>Create variables with let and const.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
