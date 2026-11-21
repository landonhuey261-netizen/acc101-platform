// cmp104 - Module 6: JavaScript: Making Pages Do Things
module.exports = {
  "number": 6,
  "slug": "javascript-making-pages-do-things",
  "title": "JavaScript: Making Pages Do Things",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what JavaScript does that HTML and CSS cannot.",
    "Store a value in a variable and use it in a message.",
    "Respond to a click with a function.",
    "Change the text on a page when a button is pressed.",
    "Read a browser error message and find the line it points to."
  ],
  "sections": [
    {
      "heading": "JavaScript Is the Behaviour",
      "html": "<p>HTML puts things on the page and CSS makes them look good, but neither can react. JavaScript is the language that makes a page do things: show a message when you click, check that a form is filled in, count items in a basket, or fetch new data without reloading the page. Almost every app you use runs JavaScript in your browser.</p>\n<p>JavaScript runs in the browser, line by line, from top to bottom. When something goes wrong it stops at the bad line and writes an error in the browser console — the developer tools' message log. Learning to read those errors is half of learning JavaScript.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> HTML is structure, CSS is looks, JavaScript is behaviour. If nothing happens when you click, JavaScript is where to look.</div></p>\n"
    },
    {
      "heading": "Variables: Naming a Value",
      "html": "<p>A variable is a named box that holds a value. You create one with <code>const</code> (for values that will not change) or <code>let</code> (for values that will). For example: <pre><code>const userName = \"Maya\";\nlet visits = 1;\nconsole.log(\"Hello, \" + userName);</code></pre> Run this and the console shows <code>Hello, Maya</code>. Change the name, run it again, and the message changes — that is the whole point of a variable.</p>\n<p>Good names matter more than clever code. <code>userName</code> tells you what it holds; <code>x</code> tells you nothing. Pick names that read like plain English, and your future self will thank you.</p>\n"
    },
    {
      "heading": "Functions: Named Jobs",
      "html": "<p>A function is a named set of instructions you can run whenever you want. You define it once, then call it by name: <pre><code>function greet(name) {\n  return \"Hello, \" + name + \"!\";\n}\nconsole.log(greet(\"Maya\"));</code></pre> This prints <code>Hello, Maya!</code>. The value in the brackets is an argument — the input the function works with — and <code>return</code> sends the answer back.</p>\n<p>Functions keep your code tidy: instead of writing the same ten lines in five places, you write them once and call the function five times. When the job changes, you change it in one place.</p>\n"
    },
    {
      "heading": "Listening for Clicks and Changing the Page",
      "html": "<p>JavaScript finds elements on the page and listens for events, such as clicks. This small script changes a heading when a button is pressed: <pre><code>const button = document.querySelector(\"#helloBtn\");\nconst heading = document.querySelector(\"#title\");\nbutton.addEventListener(\"click\", function () {\n  heading.textContent = \"You clicked it!\";\n});</code></pre> <code>document.querySelector</code> finds an element by its id, <code>addEventListener</code> waits for the click, and <code>textContent</code> changes the words on the page. That pattern — find, listen, change — is the heart of almost every interactive page.</p>\n<p>When it does not work, open the console first. It will usually name the line and the problem: a misspelled id, a missing bracket, or a file that did not load. Fix one error at a time, refresh, and try again.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>JavaScript adds behaviour: clicks, checks, counts, and fetching data.</li>\n<li>Variables hold values; const for fixed values, let for changing ones.</li>\n<li>Functions are named jobs you define once and call by name.</li>\n<li>Find an element, listen for an event, change the page.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Using a variable before you create it, or misspelling its name in one place.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Ignoring the console. The error message usually names the exact line.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "JavaScript",
      "def": "The language that makes a web page react to clicks, typing, and other events."
    },
    {
      "term": "Variable",
      "def": "A named box that holds a value, created with const or let."
    },
    {
      "term": "Constant",
      "def": "A variable created with const, whose value is not meant to change."
    },
    {
      "term": "Function",
      "def": "A named set of instructions you can run by calling its name."
    },
    {
      "term": "Argument",
      "def": "A value passed into a function for it to work with."
    },
    {
      "term": "Return",
      "def": "The answer a function sends back to the code that called it."
    },
    {
      "term": "Event",
      "def": "Something that happens on a page, such as a click or a key press."
    },
    {
      "term": "Event listener",
      "def": "Code that waits for an event on an element and then runs a function."
    },
    {
      "term": "Console",
      "def": "The browser's message log, where JavaScript prints messages and errors."
    },
    {
      "term": "Document",
      "def": "In JavaScript, the web page itself, which code can read and change."
    },
    {
      "term": "Selector",
      "def": "In JavaScript, a pattern such as #helloBtn that finds an element on the page."
    },
    {
      "term": "Text content",
      "def": "The words inside an element, which JavaScript can read or change."
    },
    {
      "term": "Error message",
      "def": "A note in the console saying what went wrong and on which line."
    },
    {
      "term": "String",
      "def": "Text in code, written inside quote marks, such as \"Maya\"."
    },
    {
      "term": "Number",
      "def": "A numeric value in code, such as 1 or 24.50, used for maths."
    }
  ],
  "video": {
    "title": "DOM Events - Beau teaches JavaScript",
    "embedUrl": "https://www.youtube.com/embed/0fy9TCcX8Uc",
    "note": "Follow the click example and build it yourself. If it does not work, open the console and read the error before changing anything.",
    "more": [
      {
        "title": "JavaScript DOM Tutorial #1 - Introduction",
        "url": "https://www.youtube.com/watch?v=FIORjGvT0kk"
      },
      {
        "title": "JavaScript DOM Tutorial #2 - Get Element By ID",
        "url": "https://www.youtube.com/watch?v=t90K6HExEJo"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “JavaScript” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: JavaScript — The language that makes a web page react to clicks, typing, and other events. Step 2: It matters because it is part of: Explain what JavaScript does that HTML and CSS cannot. Step 3: An example from the module is the way javascript shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Variable” and “Constant”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Variable — A named box that holds a value, created with const or let. Step 2: Constant — A variable created with const, whose value is not meant to change. Step 3: They differ because the first is about variable while the second is about constant; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Store a value in a variable and use it in a message.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Store a value in a variable and use it in a message. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Function” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Function — A named set of instructions you can run by calling its name. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Argument — A value passed into a function for it to work with. Step 2: Return — The answer a function sends back to the code that called it. Step 3: Event — Something that happens on a page, such as a click or a key press. Step 4: Variable — A named box that holds a value, created with const or let. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Respond to a click with a function. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “JavaScript” mean?",
      "choices": [
        "The language that makes a web page react to clicks, typing, and other events.",
        "A named box that holds a value, created with const or let.",
        "A variable created with const, whose value is not meant to change.",
        "A named set of instructions you can run by calling its name."
      ],
      "answer": 0,
      "explanation": "Correct: (a). JavaScript means: The language that makes a web page react to clicks, typing, and other events. (b) is the definition of Variable, not of JavaScript. (c) is the definition of Constant, not of JavaScript. (d) is the definition of Function, not of JavaScript."
    },
    {
      "q": "What does the term “Variable” mean?",
      "choices": [
        "The language that makes a web page react to clicks, typing, and other events.",
        "A named box that holds a value, created with const or let.",
        "A variable created with const, whose value is not meant to change.",
        "A named set of instructions you can run by calling its name."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Variable means: A named box that holds a value, created with const or let. (a) is the definition of JavaScript, not of Variable. (c) is the definition of Constant, not of Variable. (d) is the definition of Function, not of Variable."
    },
    {
      "q": "What does the term “Constant” mean?",
      "choices": [
        "The language that makes a web page react to clicks, typing, and other events.",
        "A named box that holds a value, created with const or let.",
        "A variable created with const, whose value is not meant to change.",
        "A named set of instructions you can run by calling its name."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Constant means: A variable created with const, whose value is not meant to change. (a) is the definition of JavaScript, not of Constant. (b) is the definition of Variable, not of Constant. (d) is the definition of Function, not of Constant."
    },
    {
      "q": "What does the term “Function” mean?",
      "choices": [
        "The language that makes a web page react to clicks, typing, and other events.",
        "A named box that holds a value, created with const or let.",
        "A variable created with const, whose value is not meant to change.",
        "A named set of instructions you can run by calling its name."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Function means: A named set of instructions you can run by calling its name. (a) is the definition of JavaScript, not of Function. (b) is the definition of Variable, not of Function. (c) is the definition of Constant, not of Function."
    },
    {
      "q": "Which term means: A value passed into a function for it to work with.",
      "choices": [
        "Argument",
        "JavaScript",
        "Variable",
        "Constant"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Argument is the term for: A value passed into a function for it to work with. (b) JavaScript means The language that makes a web page react to clicks, typing, and other events. (c) Variable means A named box that holds a value, created with const or let. (d) Constant means A variable created with const, whose value is not meant to change."
    },
    {
      "q": "Which term means: The answer a function sends back to the code that called it.",
      "choices": [
        "JavaScript",
        "Return",
        "Variable",
        "Constant"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Return is the term for: The answer a function sends back to the code that called it. (a) JavaScript means The language that makes a web page react to clicks, typing, and other events. (c) Variable means A named box that holds a value, created with const or let. (d) Constant means A variable created with const, whose value is not meant to change."
    },
    {
      "q": "Which term means: Something that happens on a page, such as a click or a key press.",
      "choices": [
        "JavaScript",
        "Variable",
        "Event",
        "Constant"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Event is the term for: Something that happens on a page, such as a click or a key press. (a) JavaScript means The language that makes a web page react to clicks, typing, and other events. (b) Variable means A named box that holds a value, created with const or let. (d) Constant means A variable created with const, whose value is not meant to change."
    },
    {
      "q": "Which term means: Code that waits for an event on an element and then runs a function.",
      "choices": [
        "JavaScript",
        "Variable",
        "Constant",
        "Event listener"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Event listener is the term for: Code that waits for an event on an element and then runs a function. (a) JavaScript means The language that makes a web page react to clicks, typing, and other events. (b) Variable means A named box that holds a value, created with const or let. (c) Constant means A variable created with const, whose value is not meant to change."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — JavaScript: Making Pages Do Things: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what JavaScript does that HTML and CSS cannot.</p>\n<p><strong>Key terms:</strong> JavaScript · Variable · Constant · Function · Argument · Return · Event · Event listener.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what JavaScript does that HTML and CSS cannot.</li>\n<li>Store a value in a variable and use it in a message.</li>\n<li>Respond to a click with a function.</li>\n</ul>\n<p><strong>Watch out:</strong> Do not skip the stranger test: open your own app as a brand-new user before you call it done.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
