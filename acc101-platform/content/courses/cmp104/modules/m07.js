// cmp104 - Module 7: Working With Data in the Browser
module.exports = {
  "number": 7,
  "slug": "data-in-the-browser",
  "title": "Working With Data in the Browser",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain where an app's data lives: in the page, in the browser, or on a server.",
    "Read what a user typed into a form with JavaScript.",
    "Save a small value in the browser with localStorage and read it back.",
    "Explain what an API is and what a fetch request does.",
    "Check that a form is filled in before sending it."
  ],
  "sections": [
    {
      "heading": "Where Does the Data Live?",
      "html": "<p>An app's data lives in one of three places. Some lives only in the page while it is open — the words in a search box, for example. Some lives in the browser itself, saved on the device so it is still there tomorrow. And some lives on a server, shared between devices and people: your messages, your orders, your account. Each place has a job, and a good app uses all three.</p>\n<p>Data that only matters right now can stay in the page. Data that belongs to one person on one device, like a dark-mode setting, can live in the browser. Data that must survive a lost phone or be seen on another device must live on a server. Choosing the wrong home for data is one of the most common beginner mistakes.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> If losing the device would lose the data, it belongs on a server, not in the browser.</div></p>\n"
    },
    {
      "heading": "Reading a Form",
      "html": "<p>When a user types into a form, JavaScript can read the value and use it before anything is sent anywhere. This reads a name box and greets the user: <pre><code>const nameBox = document.querySelector(\"#name\");\nconst button = document.querySelector(\"#go\");\nbutton.addEventListener(\"click\", function () {\n  const name = nameBox.value;\n  console.log(\"Hello, \" + name);\n});</code></pre> The <code>.value</code> property is the key: it holds whatever the user typed. That is how live search, character counters, and instant feedback all work.</p>\n<p>Never trust what comes from a form until you have checked it. A name box can be empty, an email box can hold nonsense, and a number box can hold letters. Check first, then act — in the browser for a quick warning, and again on the server, because browser checks can be bypassed.</p>\n"
    },
    {
      "heading": "Saving Small Things With localStorage",
      "html": "<p>The browser has a tiny built-in store called localStorage: a set of named values saved on the device. You save with <code>localStorage.setItem(\"theme\", \"dark\")</code> and read back with <code>localStorage.getItem(\"theme\")</code>. Close the browser, come back tomorrow, and the value is still there. It is perfect for settings and small preferences.</p>\n<p>It is not a database. It holds only text, only a few megabytes, and only on that one device and browser. Never store passwords, payment details, or anything private in localStorage — anyone with the device can read it, and it is not the place for anything that matters.</p>\n"
    },
    {
      "heading": "Asking a Server for Data: APIs",
      "html": "<p>When an app needs data from a server — the weather, a list of products, your messages — it asks an API (Application Programming Interface): a set of addresses on the server that answer with data, usually as JSON, a plain text format JavaScript can read. The browser's <code>fetch</code> function sends the ask: <pre><code>fetch(\"https://api.example.com/weather\")\n  .then(function (response) { return response.json(); })\n  .then(function (data) { console.log(data); });</code></pre> The answer arrives a moment later, and the app draws it on the page without reloading.</p>\n<p>Because the answer takes time, fetch works with promises: “ask now, deal with the answer when it arrives”. While waiting, show a loading message. If the request fails, say so plainly instead of leaving a blank page. You will use APIs properly in Module 10; for now, know the shape: ask, wait, draw the answer.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Data lives in the page, in the browser (localStorage), or on a server.</li>\n<li>Read form values with .value and check them before using them.</li>\n<li>localStorage saves small text settings on one device — never passwords.</li>\n<li>An API is a set of server addresses that answer with data, fetched with fetch.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Storing important data only in localStorage, where a lost phone loses it.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Trusting form input without checking it, in the browser and on the server.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "localStorage",
      "def": "A small store in the browser that saves named text values on the device."
    },
    {
      "term": "API",
      "def": "A set of addresses on a server that apps ask for data, usually answered as JSON."
    },
    {
      "term": "JSON",
      "def": "A plain text format for data, such as {\"name\": \"Maya\"}, that JavaScript can read easily."
    },
    {
      "term": "Fetch",
      "def": "The browser function that asks a server for data and waits for the answer."
    },
    {
      "term": "Promise",
      "def": "JavaScript's way of saying “the answer will arrive later; here is what to do then”."
    },
    {
      "term": "Form value",
      "def": "Whatever the user typed into an input box, read in JavaScript as .value."
    },
    {
      "term": "Validation",
      "def": "Checking what a user typed — filled in, the right shape — before using it."
    },
    {
      "term": "Loading state",
      "def": "What an app shows, such as a spinner or message, while it waits for data."
    },
    {
      "term": "Setting",
      "def": "A small preference a user chooses, such as dark mode or a language."
    },
    {
      "term": "Server data",
      "def": "Data kept on a server so it survives losing a device and works on other devices."
    },
    {
      "term": "Client",
      "def": "In web apps, the browser and the code running in it, as opposed to the server."
    },
    {
      "term": "Request",
      "def": "A message asking a server for a page or some data."
    },
    {
      "term": "Response",
      "def": "The answer a server sends back, such as a page or some JSON data."
    },
    {
      "term": "Error message",
      "def": "A note in the console saying what went wrong and on which line."
    },
    {
      "term": "Input",
      "def": "A box in a form where the user types, such as a name or email box."
    }
  ],
  "video": {
    "title": "Frontend, API, Backend and Database explained",
    "embedUrl": "https://www.youtube.com/embed/NzEYYemQ3_8",
    "note": "Watch what an API is and how data moves. Then try the localStorage example in your own console and refresh the page.",
    "more": [
      {
        "title": "What Is an API? Backend & Frontend Development Basics for Absolute Beginners | BDT",
        "url": "https://www.youtube.com/watch?v=SNzR9p1dCwc"
      },
      {
        "title": "What is an API?  you’re using one right now",
        "url": "https://www.youtube.com/watch?v=mjvDvniAjTA"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “localStorage” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: localStorage — A small store in the browser that saves named text values on the device. Step 2: It matters because it is part of: Explain where an app's data lives: in the page, in the browser, or on a server. Step 3: An example from the module is the way localstorage shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “API” and “JSON”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: API — A set of addresses on a server that apps ask for data, usually answered as JSON. Step 2: JSON — A plain text format for data, such as {\"name\": \"Maya\"}, that JavaScript can read easily. Step 3: They differ because the first is about api while the second is about json; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Read what a user typed into a form with JavaScript.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Read what a user typed into a form with JavaScript. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Fetch” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Fetch — The browser function that asks a server for data and waits for the answer. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Promise — JavaScript's way of saying “the answer will arrive later; here is what to do then”. Step 2: Form value — Whatever the user typed into an input box, read in JavaScript as .value. Step 3: Validation — Checking what a user typed — filled in, the right shape — before using it. Step 4: API — A set of addresses on a server that apps ask for data, usually answered as JSON. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Save a small value in the browser with localStorage and read it back. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “localStorage” mean?",
      "choices": [
        "A small store in the browser that saves named text values on the device.",
        "A set of addresses on a server that apps ask for data, usually answered as JSON.",
        "A plain text format for data, such as {\"name\": \"Maya\"}, that JavaScript can read easily.",
        "The browser function that asks a server for data and waits for the answer."
      ],
      "answer": 0,
      "explanation": "Correct: (a). localStorage means: A small store in the browser that saves named text values on the device. (b) is the definition of API, not of localStorage. (c) is the definition of JSON, not of localStorage. (d) is the definition of Fetch, not of localStorage."
    },
    {
      "q": "What does the term “API” mean?",
      "choices": [
        "A small store in the browser that saves named text values on the device.",
        "A set of addresses on a server that apps ask for data, usually answered as JSON.",
        "A plain text format for data, such as {\"name\": \"Maya\"}, that JavaScript can read easily.",
        "The browser function that asks a server for data and waits for the answer."
      ],
      "answer": 1,
      "explanation": "Correct: (b). API means: A set of addresses on a server that apps ask for data, usually answered as JSON. (a) is the definition of localStorage, not of API. (c) is the definition of JSON, not of API. (d) is the definition of Fetch, not of API."
    },
    {
      "q": "What does the term “JSON” mean?",
      "choices": [
        "A small store in the browser that saves named text values on the device.",
        "A set of addresses on a server that apps ask for data, usually answered as JSON.",
        "A plain text format for data, such as {\"name\": \"Maya\"}, that JavaScript can read easily.",
        "The browser function that asks a server for data and waits for the answer."
      ],
      "answer": 2,
      "explanation": "Correct: (c). JSON means: A plain text format for data, such as {\"name\": \"Maya\"}, that JavaScript can read easily. (a) is the definition of localStorage, not of JSON. (b) is the definition of API, not of JSON. (d) is the definition of Fetch, not of JSON."
    },
    {
      "q": "What does the term “Fetch” mean?",
      "choices": [
        "A small store in the browser that saves named text values on the device.",
        "A set of addresses on a server that apps ask for data, usually answered as JSON.",
        "A plain text format for data, such as {\"name\": \"Maya\"}, that JavaScript can read easily.",
        "The browser function that asks a server for data and waits for the answer."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Fetch means: The browser function that asks a server for data and waits for the answer. (a) is the definition of localStorage, not of Fetch. (b) is the definition of API, not of Fetch. (c) is the definition of JSON, not of Fetch."
    },
    {
      "q": "Which term means: JavaScript's way of saying “the answer will arrive later; here is what to do then”.",
      "choices": [
        "Promise",
        "localStorage",
        "API",
        "JSON"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Promise is the term for: JavaScript's way of saying “the answer will arrive later; here is what to do then”. (b) localStorage means A small store in the browser that saves named text values on the device. (c) API means A set of addresses on a server that apps ask for data, usually answered as JSON. (d) JSON means A plain text format for data, such as {\"name\": \"Maya\"}, that JavaScript can read easily."
    },
    {
      "q": "Which term means: Whatever the user typed into an input box, read in JavaScript as .value.",
      "choices": [
        "localStorage",
        "Form value",
        "API",
        "JSON"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Form value is the term for: Whatever the user typed into an input box, read in JavaScript as .value. (a) localStorage means A small store in the browser that saves named text values on the device. (c) API means A set of addresses on a server that apps ask for data, usually answered as JSON. (d) JSON means A plain text format for data, such as {\"name\": \"Maya\"}, that JavaScript can read easily."
    },
    {
      "q": "Which term means: Checking what a user typed — filled in, the right shape — before using it.",
      "choices": [
        "localStorage",
        "API",
        "Validation",
        "JSON"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Validation is the term for: Checking what a user typed — filled in, the right shape — before using it. (a) localStorage means A small store in the browser that saves named text values on the device. (b) API means A set of addresses on a server that apps ask for data, usually answered as JSON. (d) JSON means A plain text format for data, such as {\"name\": \"Maya\"}, that JavaScript can read easily."
    },
    {
      "q": "Which term means: What an app shows, such as a spinner or message, while it waits for data.",
      "choices": [
        "localStorage",
        "API",
        "JSON",
        "Loading state"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Loading state is the term for: What an app shows, such as a spinner or message, while it waits for data. (a) localStorage means A small store in the browser that saves named text values on the device. (b) API means A set of addresses on a server that apps ask for data, usually answered as JSON. (c) JSON means A plain text format for data, such as {\"name\": \"Maya\"}, that JavaScript can read easily."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Working With Data in the Browser: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain where an app's data lives: in the page, in the browser, or on a server.</p>\n<p><strong>Key terms:</strong> localStorage · API · JSON · Fetch · Promise · Form value · Validation · Loading state.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain where an app's data lives: in the page, in the browser, or on a server.</li>\n<li>Read what a user typed into a form with JavaScript.</li>\n<li>Save a small value in the browser with localStorage and read it back.</li>\n</ul>\n<p><strong>Watch out:</strong> Do not skip the stranger test: open your own app as a brand-new user before you call it done.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
