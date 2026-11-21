// cmp103 - Module 11: The DOM & Events
module.exports = {
  "number": 11,
  "slug": "dom-and-events",
  "title": "The DOM & Events",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what the DOM is.",
    "Select an element with querySelector().",
    "Change an element's text and style with JavaScript.",
    "Listen for a click with addEventListener().",
    "Explain what an event is and name common ones: click, submit, input."
  ],
  "sections": [
    {
      "heading": "The DOM: The Browser's Map of the Page",
      "html": "<p>When the browser reads your HTML, it builds a live map of the page called the DOM — the Document Object Model. It is a tree: the html element at the top, head and body below it, and every heading, paragraph, and button as a branch. JavaScript does not work on your HTML file directly; it works on this live map. When JavaScript changes the DOM, the page on the screen changes immediately, without reloading.</p>\n<p>This is the key idea of the whole module: your HTML is the starting point, the DOM is the live page in the browser, and JavaScript is the tool that reads and changes the DOM. Everything in this module is about those three steps: find an element, then read or change it.</p>\n"
    },
    {
      "heading": "Finding Elements and Changing Them",
      "html": "<p>To find an element, use document.querySelector() with a CSS selector — the same selectors you learned in Module 6: document.querySelector(\"h1\") finds the first heading, document.querySelector(\".card\") finds the first element with class card, document.querySelector(\"#myButton\") finds the element with id myButton. document.getElementById(\"myButton\") does the same job for ids.</p>\n<p>Once you have the element, you can change it: </p>\n<pre>const heading = document.querySelector(&quot;h1&quot;);\nheading.textContent = &quot;Hello, visitor!&quot;;</pre>\n<p> This finds the first h1 and changes its text to “Hello, visitor!” — and the page updates at once. You can change styles the same way: </p>\n<pre>const box = document.querySelector(&quot;.box&quot;);\nbox.style.backgroundColor = &quot;lightblue&quot;;</pre>\n<p> Note the spelling: backgroundColor in JavaScript, not background-color as in CSS — JavaScript uses camelCase for CSS properties with dashes.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> The DOM is the browser's live map of the page. JavaScript finds an element with querySelector(), then reads or changes it — and the page updates at once, without reloading.</div></p>\n"
    },
    {
      "heading": "Events: Waiting for the Visitor",
      "html": "<p>An event is something that happens on a page: a click, a key press, a form being submitted, a field being typed in. An event listener is code that waits for an event on an element and runs a function when it happens: </p>\n<pre>const button = document.querySelector(&quot;#myButton&quot;);\nbutton.addEventListener(&quot;click&quot;, function () {\n  alert(&quot;You clicked the button!&quot;);\n});</pre>\n<p> The button is found with querySelector, then addEventListener(\"click\", ...) waits for a click, and when the visitor clicks, the function runs and shows the message.</p>\n<p>The function that runs when an event happens is often written inline, as above, and it is usually small: change some text, show or hide something, or check what the visitor typed. Big jobs belong in named functions that the listener calls — the listener itself stays short.</p>\n"
    },
    {
      "heading": "Common Events and a First Interactive Page",
      "html": "<p>The events you will use most are click (a button or link is clicked), submit (a form is sent — listen for this on the form, not on the button, so you can check the input first), and input (the visitor types in a field — useful for live feedback, such as counting characters). There are others — mouseover, keydown, change — but these three cover most beginner pages.</p>\n<p>Try this now: a page with a heading, a button, and a paragraph. When the button is clicked, change the paragraph's text. That is your first interactive page — and it is the pattern behind almost every interactive feature on the web: find the element, listen for the event, change something.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>The DOM is the browser's live map of the page; JavaScript reads and changes it.</li><li>querySelector() finds an element with a CSS selector.</li><li>Change text with textContent and styles with .style (camelCase in JavaScript).</li><li>addEventListener() waits for an event and runs a function when it happens.</li><li>click, submit, and input are the most useful events for beginners.</li></ul></p>\n<p><strong>Common mistake:</strong> Running a script before the page exists, so querySelector finds nothing. Put scripts at the end of the body.</p>\n<p><strong>Common mistake:</strong> Writing background-color in JavaScript. CSS properties with dashes become camelCase: backgroundColor.</p>\n<p><strong>Ready check:</strong> If you can make a button that changes a paragraph's text when clicked, and explain what the DOM is, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "DOM",
      "def": "The Document Object Model — the browser's live map of a page, as a tree of elements that JavaScript can read and change."
    },
    {
      "term": "Element",
      "def": "One node in the DOM tree, such as a heading, a paragraph, or a button."
    },
    {
      "term": "querySelector()",
      "def": "A JavaScript function that finds the first element matching a CSS selector, such as document.querySelector(\"h1\")."
    },
    {
      "term": "getElementById()",
      "def": "A JavaScript function that finds an element by its id, such as document.getElementById(\"myButton\")."
    },
    {
      "term": "textContent",
      "def": "The text inside an element, which JavaScript can read and change."
    },
    {
      "term": "style",
      "def": "The way JavaScript changes an element's CSS, such as box.style.backgroundColor = \"lightblue\"."
    },
    {
      "term": "Event",
      "def": "Something that happens on a page, such as a click, a key press, or a form being submitted."
    },
    {
      "term": "Event listener",
      "def": "Code that waits for an event on an element and runs a function when it happens."
    },
    {
      "term": "addEventListener()",
      "def": "The JavaScript function that attaches an event listener to an element."
    },
    {
      "term": "click",
      "def": "The event that happens when a visitor clicks something."
    },
    {
      "term": "submit",
      "def": "The event that happens when a form is submitted."
    },
    {
      "term": "input",
      "def": "The event that happens when a visitor types in a field."
    },
    {
      "term": "Function",
      "def": "A named block of code that does one job. Event listeners run a function when the event happens."
    },
    {
      "term": "id",
      "def": "A unique label on one element, used by JavaScript to find it with getElementById()."
    },
    {
      "term": "classList",
      "def": "The way JavaScript adds or removes CSS classes on an element, such as box.classList.add(\"open\")."
    }
  ],
  "video": {
    "title": "Learn JavaScript - Full Course for Beginners",
    "embedUrl": "https://www.youtube.com/embed/PkZNo7MFNFg",
    "note": "freeCodeCamp's JavaScript course. Watch the sections on the DOM and events, and build the click-a-button example in VS Code as you go.",
    "more": [
      {
        "title": "JavaScript Crash Course For Beginners",
        "url": "https://www.youtube.com/watch?v=hdI2bqOjy3c"
      },
      {
        "title": "JavaScript Full Course for free 🌐",
        "url": "https://www.youtube.com/watch?v=8dWL3wF_OMw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “DOM” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: DOM — The Document Object Model — the browser's live map of a page, as a tree of elements that JavaScript can read and change. Step 2: It matters because it is part of: Explain what the DOM is. Step 3: An example from the module is the way dom shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Element” and “querySelector()”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Element — One node in the DOM tree, such as a heading, a paragraph, or a button. Step 2: querySelector() — A JavaScript function that finds the first element matching a CSS selector, such as document.querySelector(\"h1\"). Step 3: They differ because the first is about element while the second is about queryselector(); a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Select an element with querySelector().” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Select an element with querySelector(). Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “getElementById()” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: getElementById() — A JavaScript function that finds an element by its id, such as document.getElementById(\"myButton\"). Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: textContent — The text inside an element, which JavaScript can read and change. Step 2: style — The way JavaScript changes an element's CSS, such as box.style.backgroundColor = \"lightblue\". Step 3: Event — Something that happens on a page, such as a click, a key press, or a form being submitted. Step 4: Event listener — Code that waits for an event on an element and runs a function when it happens. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain what an event is and name common ones: click, submit, input. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “id” mean?",
      "choices": [
        "A unique label on one element, used by JavaScript to find it with getElementById().",
        "Something that happens on a page, such as a click, a key press, or a form being submitted.",
        "The way JavaScript changes an element's CSS, such as box.style.backgroundColor = \"lightblue\".",
        "The event that happens when a visitor clicks something."
      ],
      "answer": 0,
      "explanation": "Correct: (a). id means: A unique label on one element, used by JavaScript to find it with getElementById(). (b) is the definition of click, not of id. (c) is the definition of Event, not of id. (d) is the definition of style, not of id."
    },
    {
      "q": "What does the term “Element” mean?",
      "choices": [
        "The way JavaScript changes an element's CSS, such as box.style.backgroundColor = \"lightblue\".",
        "The Document Object Model — the browser's live map of a page, as a tree of elements that JavaScript can read and change.",
        "The JavaScript function that attaches an event listener to an element.",
        "One node in the DOM tree, such as a heading, a paragraph, or a button."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Element means: One node in the DOM tree, such as a heading, a paragraph, or a button. (a) is the definition of DOM, not of Element. (b) is the definition of addEventListener(), not of Element. (c) is the definition of style, not of Element."
    },
    {
      "q": "Which term means: The text inside an element, which JavaScript can read and change.",
      "choices": [
        "submit",
        "textContent",
        "DOM",
        "getElementById()"
      ],
      "answer": 1,
      "explanation": "Correct: (b). textContent is the term for: The text inside an element, which JavaScript can read and change. (a) getElementById() means A JavaScript function that finds an element by its id, such as document.getElementById(\"myButton\"). (c) DOM means The Document Object Model — the browser's live map of a page, as a tree of elements that JavaScript can read and change. (d) submit means The event that happens when a form is submitted."
    },
    {
      "q": "Which term means: Code that waits for an event on an element and runs a function when it happens.",
      "choices": [
        "submit",
        "input",
        "classList",
        "Event listener"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Event listener is the term for: Code that waits for an event on an element and runs a function when it happens. (a) input means The event that happens when a visitor types in a field. (b) submit means The event that happens when a form is submitted. (c) classList means The way JavaScript adds or removes CSS classes on an element, such as box.classList.add(\"open\")."
    },
    {
      "q": "Which of the following is TRUE about submit?",
      "choices": [
        "A unique label on one element, used by JavaScript to find it with getElementById().",
        "The event that happens when a form is submitted.",
        "The Document Object Model — the browser's live map of a page, as a tree of elements that JavaScript can read and change.",
        "The text inside an element, which JavaScript can read and change."
      ],
      "answer": 1,
      "explanation": "Correct: (b). submit: The event that happens when a form is submitted. (a) describes id, not submit. (c) describes DOM, not submit. (d) describes textContent, not submit."
    },
    {
      "q": "What does the term “id” mean?",
      "choices": [
        "A unique label on one element, used by JavaScript to find it with getElementById().",
        "The way JavaScript changes an element's CSS, such as box.style.backgroundColor = \"lightblue\".",
        "The event that happens when a visitor clicks something.",
        "The text inside an element, which JavaScript can read and change."
      ],
      "answer": 0,
      "explanation": "Correct: (a). id means: A unique label on one element, used by JavaScript to find it with getElementById(). (b) is the definition of style, not of id. (c) is the definition of click, not of id. (d) is the definition of textContent, not of id."
    },
    {
      "q": "What does document.querySelector(\"h1\") do?",
      "choices": [
        "It changes the heading's text",
        "It finds the first h1 element on the page",
        "It creates a new heading",
        "It deletes the heading"
      ],
      "answer": 1,
      "explanation": "Correct: (b). querySelector finds the first element matching the CSS selector — here, the first h1. (a) is wrong: changing the text is a separate step, using textContent. (c) is wrong: querySelector never creates elements. (d) is wrong: it never deletes them either."
    },
    {
      "q": "What does this code do? const button = document.querySelector(\"#myButton\"); / button.addEventListener(\"click\", function () { alert(\"You clicked the button!\"); });",
      "choices": [
        "It clicks the button automatically when the page loads",
        "It waits for the visitor to click the button, then shows a message",
        "It changes the button's text to “You clicked the button!”",
        "It deletes the button"
      ],
      "answer": 1,
      "explanation": "Correct: (b). addEventListener waits for a click on the button, then runs the function, which shows the message. (a) is wrong: nothing happens until the visitor clicks. (c) is wrong: alert shows a pop-up message; it does not change the button's text. (d) is wrong: the button stays on the page."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — The DOM & Events: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what the DOM is.</p>\n<p><strong>Key terms:</strong> DOM · Element · querySelector() · getElementById() · textContent · style · Event · Event listener.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what the DOM is.</li>\n<li>Select an element with querySelector().</li>\n<li>Change an element's text and style with JavaScript.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
