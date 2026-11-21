// cmp104 - Module 10: Back Ends & APIs
module.exports = {
  "number": 10,
  "slug": "back-ends-and-apis",
  "title": "Back Ends & APIs",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a back end does for an app.",
    "Describe how an API lets a front end ask a back end for data.",
    "Explain what a database does on the back end.",
    "Name three things that must never be put in front-end code.",
    "Explain what an API key is and how to keep it secret."
  ],
  "sections": [
    {
      "heading": "The Back End Does the Real Work",
      "html": "<p>The back end is the part of an app that runs on a server. It takes requests from the front end, checks who is asking, does the work — saving a note, charging a payment, searching a catalogue — and sends back an answer. The front end is the shop window; the back end is the shop itself, with the stockroom and the till.</p>\n<p>Back ends are written in languages like JavaScript (with Node.js), Python, or Java. You do not need to pick one now. What matters is the shape: front end asks, back end checks and works, database remembers. Every app you have used follows that shape.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Front end asks, back end checks and works, database remembers.</div></p>\n"
    },
    {
      "heading": "APIs: The Menu Between Front and Back",
      "html": "<p>An API is the agreed menu of things the front end can ask for: “get my tasks”, “save this note”, “search for shoes”. Each item on the menu is an endpoint — an address on the server — and the answer comes back as JSON. The front end never touches the database directly; it only ever talks to the API. That wall is what keeps the data safe.</p>\n<p>A good API is boring and predictable: the same shape of ask, the same shape of answer, clear errors when something is wrong. When you use someone else's API — a weather service, a maps service — you read its menu (its documentation) and ask exactly as it says.</p>\n"
    },
    {
      "heading": "The Database Behind the Back End",
      "html": "<p>On the back end, the database is the memory of the whole app: every account, every order, every message. The back end is the only part allowed to read and write it, and it checks the rules every time: is this person allowed to see this? Is this value sensible? That is why a stolen phone does not mean stolen data — the data lives on the server, behind the API, behind the login.</p>\n<p>Databases are the whole subject of the next course, cmp105. For now, remember that the back end is the gatekeeper and the database is the vault.</p>\n"
    },
    {
      "heading": "Secrets Stay on the Server",
      "html": "<p>Three things must never appear in front-end code, because anyone can read front-end code: passwords, database connection details, and API keys. An API key is a secret password an app uses to prove itself to another service, such as a maps or payment service. If it leaks into front-end code, anyone can copy it and use the service as if they were you — and you get the bill.</p>\n<p>Keep keys in the server's own settings, never in code you share or publish. If a key ever leaks, cancel it and make a new one, just as you would cancel a stolen bank card. And never commit a file holding secrets to a shared code store.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>The back end runs on a server: it checks, works, and answers requests.</li>\n<li>An API is the agreed menu of asks between front end and back end.</li>\n<li>Only the back end touches the database; the front end talks to the API.</li>\n<li>Passwords, database details, and API keys never go in front-end code.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Letting the front end talk straight to the database — the wall between them is the security.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Pasting an API key into front-end code or shared code. Cancel it and make a new one if it leaks.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Back end",
      "def": "The hidden part of an app that checks details, does the work, and decides what to show."
    },
    {
      "term": "API",
      "def": "A set of addresses on a server that apps ask for data, usually answered as JSON."
    },
    {
      "term": "Endpoint",
      "def": "One address in an API that answers one kind of ask, such as “get my tasks”."
    },
    {
      "term": "JSON",
      "def": "A plain text format for data, such as {\"name\": \"Maya\"}, that JavaScript can read easily."
    },
    {
      "term": "Node.js",
      "def": "A way to run JavaScript on a server, so one language can do front end and back end."
    },
    {
      "term": "Database",
      "def": "The organised store where an app keeps accounts, messages, and settings."
    },
    {
      "term": "API key",
      "def": "A secret code an app uses to prove itself to another service, such as maps or payments."
    },
    {
      "term": "Documentation",
      "def": "The written menu and rules for an API: what to ask and what comes back."
    },
    {
      "term": "Server",
      "def": "An always-on computer that holds an app and answers requests from browsers."
    },
    {
      "term": "Request",
      "def": "A message from a browser asking a server for a page or some data."
    },
    {
      "term": "Response",
      "def": "The answer a server sends back to a browser: a page, a picture, or some data."
    },
    {
      "term": "Gatekeeper",
      "def": "The back end's job of checking who may see or change each piece of data."
    },
    {
      "term": "Secret",
      "def": "A value such as a password or key that must never appear in front-end code."
    },
    {
      "term": "Payment",
      "def": "Money moved through an app, always handled on the back end, never in the browser."
    },
    {
      "term": "Error",
      "def": "An API answer saying what went wrong, such as “not logged in” or “not found”."
    }
  ],
  "video": {
    "title": "How APIs Actually Work Explained with a Restaurant Analogy 🍔 | API for Beginners",
    "embedUrl": "https://www.youtube.com/embed/uPZqeLrODxI",
    "note": "Watch how the back end, API, and database fit together, and note which part the front end is never allowed to touch.",
    "more": [
      {
        "title": "API Explained (In 2 Minutes)",
        "url": "https://www.youtube.com/watch?v=sOr24nu-CiI"
      },
      {
        "title": "What EXACTLY is an API?! Real world example",
        "url": "https://www.youtube.com/watch?v=dTA7hDShkR8"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Back end” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Back end — The hidden part of an app that checks details, does the work, and decides what to show. Step 2: It matters because it is part of: Explain what a back end does for an app. Step 3: An example from the module is the way back end shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “API” and “Endpoint”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: API — A set of addresses on a server that apps ask for data, usually answered as JSON. Step 2: Endpoint — One address in an API that answers one kind of ask, such as “get my tasks”. Step 3: They differ because the first is about api while the second is about endpoint; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Describe how an API lets a front end ask a back end for data.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Describe how an API lets a front end ask a back end for data. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “JSON” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: JSON — A plain text format for data, such as {\"name\": \"Maya\"}, that JavaScript can read easily. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Node.js — A way to run JavaScript on a server, so one language can do front end and back end. Step 2: Database — The organised store where an app keeps accounts, messages, and settings. Step 3: API key — A secret code an app uses to prove itself to another service, such as maps or payments. Step 4: API — A set of addresses on a server that apps ask for data, usually answered as JSON. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain what a database does on the back end. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Back end” mean?",
      "choices": [
        "The hidden part of an app that checks details, does the work, and decides what to show.",
        "A set of addresses on a server that apps ask for data, usually answered as JSON.",
        "One address in an API that answers one kind of ask, such as “get my tasks”.",
        "A plain text format for data, such as {\"name\": \"Maya\"}, that JavaScript can read easily."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Back end means: The hidden part of an app that checks details, does the work, and decides what to show. (b) is the definition of API, not of Back end. (c) is the definition of Endpoint, not of Back end. (d) is the definition of JSON, not of Back end."
    },
    {
      "q": "What does the term “API” mean?",
      "choices": [
        "The hidden part of an app that checks details, does the work, and decides what to show.",
        "A set of addresses on a server that apps ask for data, usually answered as JSON.",
        "One address in an API that answers one kind of ask, such as “get my tasks”.",
        "A plain text format for data, such as {\"name\": \"Maya\"}, that JavaScript can read easily."
      ],
      "answer": 1,
      "explanation": "Correct: (b). API means: A set of addresses on a server that apps ask for data, usually answered as JSON. (a) is the definition of Back end, not of API. (c) is the definition of Endpoint, not of API. (d) is the definition of JSON, not of API."
    },
    {
      "q": "What does the term “Endpoint” mean?",
      "choices": [
        "The hidden part of an app that checks details, does the work, and decides what to show.",
        "A set of addresses on a server that apps ask for data, usually answered as JSON.",
        "One address in an API that answers one kind of ask, such as “get my tasks”.",
        "A plain text format for data, such as {\"name\": \"Maya\"}, that JavaScript can read easily."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Endpoint means: One address in an API that answers one kind of ask, such as “get my tasks”. (a) is the definition of Back end, not of Endpoint. (b) is the definition of API, not of Endpoint. (d) is the definition of JSON, not of Endpoint."
    },
    {
      "q": "What does the term “JSON” mean?",
      "choices": [
        "The hidden part of an app that checks details, does the work, and decides what to show.",
        "A set of addresses on a server that apps ask for data, usually answered as JSON.",
        "One address in an API that answers one kind of ask, such as “get my tasks”.",
        "A plain text format for data, such as {\"name\": \"Maya\"}, that JavaScript can read easily."
      ],
      "answer": 3,
      "explanation": "Correct: (d). JSON means: A plain text format for data, such as {\"name\": \"Maya\"}, that JavaScript can read easily. (a) is the definition of Back end, not of JSON. (b) is the definition of API, not of JSON. (c) is the definition of Endpoint, not of JSON."
    },
    {
      "q": "Which term means: A way to run JavaScript on a server, so one language can do front end and back end.",
      "choices": [
        "Node.js",
        "Back end",
        "API",
        "Endpoint"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Node.js is the term for: A way to run JavaScript on a server, so one language can do front end and back end. (b) Back end means The hidden part of an app that checks details, does the work, and decides what to show. (c) API means A set of addresses on a server that apps ask for data, usually answered as JSON. (d) Endpoint means One address in an API that answers one kind of ask, such as “get my tasks”."
    },
    {
      "q": "Which term means: The organised store where an app keeps accounts, messages, and settings.",
      "choices": [
        "Back end",
        "Database",
        "API",
        "Endpoint"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Database is the term for: The organised store where an app keeps accounts, messages, and settings. (a) Back end means The hidden part of an app that checks details, does the work, and decides what to show. (c) API means A set of addresses on a server that apps ask for data, usually answered as JSON. (d) Endpoint means One address in an API that answers one kind of ask, such as “get my tasks”."
    },
    {
      "q": "Which term means: A secret code an app uses to prove itself to another service, such as maps or payments.",
      "choices": [
        "Back end",
        "API",
        "API key",
        "Endpoint"
      ],
      "answer": 2,
      "explanation": "Correct: (c). API key is the term for: A secret code an app uses to prove itself to another service, such as maps or payments. (a) Back end means The hidden part of an app that checks details, does the work, and decides what to show. (b) API means A set of addresses on a server that apps ask for data, usually answered as JSON. (d) Endpoint means One address in an API that answers one kind of ask, such as “get my tasks”."
    },
    {
      "q": "Which term means: The written menu and rules for an API: what to ask and what comes back.",
      "choices": [
        "Back end",
        "API",
        "Endpoint",
        "Documentation"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Documentation is the term for: The written menu and rules for an API: what to ask and what comes back. (a) Back end means The hidden part of an app that checks details, does the work, and decides what to show. (b) API means A set of addresses on a server that apps ask for data, usually answered as JSON. (c) Endpoint means One address in an API that answers one kind of ask, such as “get my tasks”."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Back Ends & APIs: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a back end does for an app.</p>\n<p><strong>Key terms:</strong> Back end · API · Endpoint · JSON · Node.js · Database · API key · Documentation.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a back end does for an app.</li>\n<li>Describe how an API lets a front end ask a back end for data.</li>\n<li>Explain what a database does on the back end.</li>\n</ul>\n<p><strong>Watch out:</strong> Do not skip the stranger test: open your own app as a brand-new user before you call it done.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
