// cmp104 - Module 2: How a Web App Is Put Together
module.exports = {
  "number": 2,
  "slug": "how-a-web-app-is-put-together",
  "title": "How a Web App Is Put Together",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how a browser asks a server for a page and gets an answer back.",
    "Describe what a server is and what it does for a web app.",
    "Explain what happens, step by step, when you click a link or submit a form.",
    "Name the three languages of the web: HTML, CSS, and JavaScript.",
    "Explain what a web address (URL) is pointing at."
  ],
  "sections": [
    {
      "heading": "Your Browser Asks, a Server Answers",
      "html": "<p>When you type a web address and press Enter, your browser sends a request across the internet to a server — a computer that is always on, waiting to answer requests. The server finds the page or data you asked for and sends back a response. Your browser then turns that response into the page you see. This ask-and-answer happens every time you click a link, load a picture, or open a new page.</p>\n<p>Think of it like ordering at a counter. You (the browser) ask for something. The kitchen (the server) makes it. The waiter brings it back. You never go into the kitchen yourself. The internet is the road between your device and the server, and the whole trip usually takes less than a second.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Every page you see is an answer to a request your browser sent. Nothing appears by magic.</div></p>\n"
    },
    {
      "heading": "What Is a Server?",
      "html": "<p>A server is a computer built to serve many people at once, day and night. It holds the app's files and data, runs the back-end instructions, and answers thousands of requests. Big apps use many servers working together, so if one is busy or breaks, others take over. Your own computer can act as a tiny server while you practise — that is how developers test apps before anyone else sees them.</p>\n<p>Servers live in data centres: big buildings full of computers, cooling, and backup power. When you hear “the cloud”, it usually means servers owned by someone else, rented by the app's makers, sitting in one of those buildings.</p>\n"
    },
    {
      "heading": "The Three Languages of the Web",
      "html": "<p>Web pages are built from three languages working together. HTML gives a page its structure: headings, paragraphs, pictures, buttons, and forms. CSS gives it its looks: colours, fonts, spacing, and layout. JavaScript gives it behaviour: what happens when you click, type, or submit. A page with only HTML looks plain; add CSS and it looks designed; add JavaScript and it reacts.</p>\n<p>You will meet all three in this course. You do not need to memorise them now — you need to know which one does which job, so that when something looks wrong you know where to look. Structure problem? HTML. Looks problem? CSS. Nothing happens when you click? JavaScript.</p>\n"
    },
    {
      "heading": "Web Addresses and Requests",
      "html": "<p>A web address, or URL, is the address of one thing on one server: the name of the server, then the path to the page or file. When you submit a form — say, a search — your browser sends the words you typed along with the request, and the server uses them to build its answer. That is how a search box works: your words travel to the server, and the results travel back.</p>\n<p>Most requests are simple “please send me this page” asks. Some, like logging in or paying, send private details and need extra protection, which you will learn about in Module 9. For now, remember the shape: request out, response back, browser draws the page.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>A browser sends a request to a server; the server sends back a response.</li>\n<li>A server is an always-on computer that holds the app and answers requests.</li>\n<li>HTML is structure, CSS is looks, JavaScript is behaviour.</li>\n<li>A URL names a server and the path to one page or file.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Thinking a web page lives inside your browser. It lives on a server; your browser only shows a copy.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Mixing up the three languages. If it looks wrong, check CSS; if it does nothing, check JavaScript.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Browser",
      "def": "The program that shows web pages, such as Chrome, Safari, or Firefox."
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
      "term": "URL",
      "def": "A web address naming a server and the path to one page or file on it."
    },
    {
      "term": "HTML",
      "def": "The language that gives a web page its structure: headings, text, pictures, and buttons."
    },
    {
      "term": "CSS",
      "def": "The language that gives a web page its looks: colours, fonts, spacing, and layout."
    },
    {
      "term": "JavaScript",
      "def": "The language that makes a web page react: clicks, typing, and changing what is shown."
    },
    {
      "term": "Data centre",
      "def": "A building full of servers, cooling, and backup power that hosts apps and websites."
    },
    {
      "term": "Cloud",
      "def": "Servers owned by someone else and rented over the internet to run apps."
    },
    {
      "term": "Form",
      "def": "Part of a page where you type information, such as a search box or a login box, and send it to the server."
    },
    {
      "term": "Link",
      "def": "A tappable piece of text or a picture that takes you to another page."
    },
    {
      "term": "Refresh",
      "def": "Asking the browser to request the page again and show the newest version."
    },
    {
      "term": "Loading",
      "def": "The short wait while a browser is getting a response from a server."
    },
    {
      "term": "Home page",
      "def": "The main first page of a website or web app."
    }
  ],
  "video": {
    "title": "How the Backend works? Server, Application, Database, and API ( by CodeON Jason K )",
    "embedUrl": "https://www.youtube.com/embed/gOghS3BmaxI",
    "note": "Watch how a request travels from a browser to a server and back. Note each step: request, server work, response, page drawn.",
    "more": [
      {
        "title": "APIs Explained (in 4 Minutes)",
        "url": "https://www.youtube.com/watch?v=bxuYDT-BWaI"
      },
      {
        "title": "What is an API (in 5 minutes)",
        "url": "https://www.youtube.com/watch?v=ByGJQzlzxQg"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Browser” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Browser — The program that shows web pages, such as Chrome, Safari, or Firefox. Step 2: It matters because it is part of: Explain how a browser asks a server for a page and gets an answer back. Step 3: An example from the module is the way browser shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Server” and “Request”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Server — An always-on computer that holds an app and answers requests from browsers. Step 2: Request — A message from a browser asking a server for a page or some data. Step 3: They differ because the first is about server while the second is about request; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Describe what a server is and what it does for a web app.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Describe what a server is and what it does for a web app. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Response” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Response — The answer a server sends back to a browser: a page, a picture, or some data. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: URL — A web address naming a server and the path to one page or file on it. Step 2: HTML — The language that gives a web page its structure: headings, text, pictures, and buttons. Step 3: CSS — The language that gives a web page its looks: colours, fonts, spacing, and layout. Step 4: Server — An always-on computer that holds an app and answers requests from browsers. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain what happens, step by step, when you click a link or submit a form. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Browser” mean?",
      "choices": [
        "The program that shows web pages, such as Chrome, Safari, or Firefox.",
        "An always-on computer that holds an app and answers requests from browsers.",
        "A message from a browser asking a server for a page or some data.",
        "The answer a server sends back to a browser: a page, a picture, or some data."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Browser means: The program that shows web pages, such as Chrome, Safari, or Firefox. (b) is the definition of Server, not of Browser. (c) is the definition of Request, not of Browser. (d) is the definition of Response, not of Browser."
    },
    {
      "q": "What does the term “Server” mean?",
      "choices": [
        "The program that shows web pages, such as Chrome, Safari, or Firefox.",
        "An always-on computer that holds an app and answers requests from browsers.",
        "A message from a browser asking a server for a page or some data.",
        "The answer a server sends back to a browser: a page, a picture, or some data."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Server means: An always-on computer that holds an app and answers requests from browsers. (a) is the definition of Browser, not of Server. (c) is the definition of Request, not of Server. (d) is the definition of Response, not of Server."
    },
    {
      "q": "What does the term “Request” mean?",
      "choices": [
        "The program that shows web pages, such as Chrome, Safari, or Firefox.",
        "An always-on computer that holds an app and answers requests from browsers.",
        "A message from a browser asking a server for a page or some data.",
        "The answer a server sends back to a browser: a page, a picture, or some data."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Request means: A message from a browser asking a server for a page or some data. (a) is the definition of Browser, not of Request. (b) is the definition of Server, not of Request. (d) is the definition of Response, not of Request."
    },
    {
      "q": "What does the term “Response” mean?",
      "choices": [
        "The program that shows web pages, such as Chrome, Safari, or Firefox.",
        "An always-on computer that holds an app and answers requests from browsers.",
        "A message from a browser asking a server for a page or some data.",
        "The answer a server sends back to a browser: a page, a picture, or some data."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Response means: The answer a server sends back to a browser: a page, a picture, or some data. (a) is the definition of Browser, not of Response. (b) is the definition of Server, not of Response. (c) is the definition of Request, not of Response."
    },
    {
      "q": "Which term means: A web address naming a server and the path to one page or file on it.",
      "choices": [
        "URL",
        "Browser",
        "Server",
        "Request"
      ],
      "answer": 0,
      "explanation": "Correct: (a). URL is the term for: A web address naming a server and the path to one page or file on it. (b) Browser means The program that shows web pages, such as Chrome, Safari, or Firefox. (c) Server means An always-on computer that holds an app and answers requests from browsers. (d) Request means A message from a browser asking a server for a page or some data."
    },
    {
      "q": "Which term means: The language that gives a web page its structure: headings, text, pictures, and buttons.",
      "choices": [
        "Browser",
        "HTML",
        "Server",
        "Request"
      ],
      "answer": 1,
      "explanation": "Correct: (b). HTML is the term for: The language that gives a web page its structure: headings, text, pictures, and buttons. (a) Browser means The program that shows web pages, such as Chrome, Safari, or Firefox. (c) Server means An always-on computer that holds an app and answers requests from browsers. (d) Request means A message from a browser asking a server for a page or some data."
    },
    {
      "q": "Which term means: The language that gives a web page its looks: colours, fonts, spacing, and layout.",
      "choices": [
        "Browser",
        "Server",
        "CSS",
        "Request"
      ],
      "answer": 2,
      "explanation": "Correct: (c). CSS is the term for: The language that gives a web page its looks: colours, fonts, spacing, and layout. (a) Browser means The program that shows web pages, such as Chrome, Safari, or Firefox. (b) Server means An always-on computer that holds an app and answers requests from browsers. (d) Request means A message from a browser asking a server for a page or some data."
    },
    {
      "q": "Which term means: The language that makes a web page react: clicks, typing, and changing what is shown.",
      "choices": [
        "Browser",
        "Server",
        "Request",
        "JavaScript"
      ],
      "answer": 3,
      "explanation": "Correct: (d). JavaScript is the term for: The language that makes a web page react: clicks, typing, and changing what is shown. (a) Browser means The program that shows web pages, such as Chrome, Safari, or Firefox. (b) Server means An always-on computer that holds an app and answers requests from browsers. (c) Request means A message from a browser asking a server for a page or some data."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — How a Web App Is Put Together: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain how a browser asks a server for a page and gets an answer back.</p>\n<p><strong>Key terms:</strong> Browser · Server · Request · Response · URL · HTML · CSS · JavaScript.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain how a browser asks a server for a page and gets an answer back.</li>\n<li>Describe what a server is and what it does for a web app.</li>\n<li>Explain what happens, step by step, when you click a link or submit a form.</li>\n</ul>\n<p><strong>Watch out:</strong> Do not skip the stranger test: open your own app as a brand-new user before you call it done.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
