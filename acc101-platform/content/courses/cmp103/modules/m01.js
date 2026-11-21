// cmp103 - Module 1: How the Web Works
module.exports = {
  "number": 1,
  "slug": "how-the-web-works",
  "title": "How the Web Works",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how a web page gets from a server to your browser.",
    "Explain the three languages of the web: HTML, CSS, and JavaScript.",
    "Explain what a URL is made of.",
    "Explain the difference between HTTP and HTTPS.",
    "Explain what a web browser does with HTML, CSS, and JavaScript."
  ],
  "sections": [
    {
      "heading": "A Page's Journey: Browser to Server and Back",
      "html": "<p>When you type a web address and press Enter, your browser sends a request across the internet to a server — a powerful computer, always on, that stores the website. The server sends back the page as three kinds of files: HTML for the structure, CSS for the styling, and JavaScript for the interactivity. Your browser reads those files and builds the page you see.</p>\n<p>This happens in a fraction of a second, every time you click a link. The page you see is not a picture sent from the server — it is built fresh in your browser from those files, which is why the same page can look slightly different in different browsers or on different screen sizes.</p>\n"
    },
    {
      "heading": "The Three Languages: Structure, Style, Behaviour",
      "html": "<p>Every web page is built from three languages, each with one job. HTML (HyperText Markup Language) gives the page its structure and content: the headings, paragraphs, pictures, and links. CSS (Cascading Style Sheets) styles it: the colours, fonts, spacing, and layout. JavaScript makes it interactive: buttons that do things, forms that check what you typed, and content that changes without reloading the page.</p>\n<p>A useful comparison: if a web page were a person, HTML would be the skeleton and the words, CSS would be the clothes and the haircut, and JavaScript would be the muscles that let it move. You need all three for a complete website, and this course teaches them in that order.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> HTML is structure and content. CSS is style. JavaScript is behaviour. One page, three jobs, three languages.</div></p>\n"
    },
    {
      "heading": "URLs: Reading a Web Address",
      "html": "<p>A URL is a web address, and it has parts. In https://example.com/about: https means the connection is secure; example.com is the domain name, the readable name of the website; and /about is the path, the specific page on that site. The part before the first single slash is the site; everything after it is the page.</p>\n<p>When you see a long URL with ? and = in it, those are extra details the page needs, such as a search term or a product number. You rarely need to read them — but knowing that the domain is the part that identifies the site helps you spot fakes: example.com is not the same as example-support.com.</p>\n"
    },
    {
      "heading": "HTTP, HTTPS, and the Browser's Job",
      "html": "<p>HTTP is the set of rules browsers and servers use to ask for and send pages: the browser asks “please send me /about”, the server sends it back. HTTPS is the same, but scrambled — encrypted — so anyone listening in between sees only nonsense. The padlock in the address bar means HTTPS. Never type a password or a card number into a page that is not HTTPS.</p>\n<p>The browser's job is to read the HTML, CSS, and JavaScript and turn them into the page you see and use. Different browsers do this slightly differently, which is why a good habit is to test your own pages in two browsers before you call them finished.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Your browser asks a server for a page; the server sends HTML, CSS, and JavaScript back.</li><li>HTML is structure, CSS is style, JavaScript is behaviour.</li><li>A URL has a protocol (https), a domain (example.com), and a path (/about).</li><li>HTTPS means the connection is scrambled; look for the padlock before typing anything private.</li><li>The browser builds the page fresh from the files it receives.</li></ul></p>\n<p><strong>Common mistake:</strong> Thinking HTML, CSS, and JavaScript are three names for the same thing. They are three languages with three different jobs.</p>\n<p><strong>Common mistake:</strong> Trusting a website because it has a padlock. The padlock only means the connection is scrambled — a scam site can have a padlock too.</p>\n<p><strong>Ready check:</strong> If you can explain the three languages with the skeleton/clothes/muscles comparison and read the parts of a URL, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "HTML",
      "def": "HyperText Markup Language — the language that gives a web page its structure and content."
    },
    {
      "term": "CSS",
      "def": "Cascading Style Sheets — the language that styles a web page: colours, fonts, spacing, and layout."
    },
    {
      "term": "JavaScript",
      "def": "The programming language that makes web pages interactive: buttons, forms, and changing content."
    },
    {
      "term": "Browser",
      "def": "A program for viewing websites, such as Chrome, Edge, Firefox, or Safari. It reads HTML, CSS, and JavaScript and shows you the page."
    },
    {
      "term": "Server",
      "def": "A powerful computer, always on, that stores websites and sends them to your browser when you ask."
    },
    {
      "term": "URL",
      "def": "A web address, such as https://example.com/about, that tells the browser exactly which page to fetch."
    },
    {
      "term": "HTTP",
      "def": "HyperText Transfer Protocol — the rules browsers and servers use to ask for and send web pages."
    },
    {
      "term": "HTTPS",
      "def": "The secure version of HTTP: the connection is scrambled so others cannot read what you send."
    },
    {
      "term": "Domain name",
      "def": "The readable name of a website, such as example.com."
    },
    {
      "term": "Web page",
      "def": "One single page on the web, such as one article or one product page."
    },
    {
      "term": "Website",
      "def": "A collection of web pages under one name, stored on a server."
    },
    {
      "term": "Front end",
      "def": "The part of a website that runs in the browser: HTML, CSS, and JavaScript."
    },
    {
      "term": "Back end",
      "def": "The part of a website that runs on the server: databases and server programs the visitor never sees."
    },
    {
      "term": "Hosting",
      "def": "Paying a company to keep your website on its servers so anyone can visit it."
    },
    {
      "term": "World Wide Web",
      "def": "The system of web pages and links that runs on top of the internet."
    }
  ],
  "video": {
    "title": "HTML Full Course - Build a Website Tutorial",
    "embedUrl": "https://www.youtube.com/embed/pQN-pnXPaVg",
    "note": "freeCodeCamp's HTML course: build a website from scratch. Watch the opening sections on how websites are put together, and follow along in VS Code.",
    "more": [
      {
        "title": "HTML Crash Course For Absolute Beginners",
        "url": "https://www.youtube.com/watch?v=UB1O30fR-EE"
      },
      {
        "title": "Introduction to Web Development Using HTML, CSS & JavaScript",
        "url": "https://www.youtube.com/watch?v=PSnsDK0gRTU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “HTML” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: HTML — HyperText Markup Language — the language that gives a web page its structure and content. Step 2: It matters because it is part of: Explain how a web page gets from a server to your browser. Step 3: An example from the module is the way html shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “CSS” and “JavaScript”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: CSS — Cascading Style Sheets — the language that styles a web page: colours, fonts, spacing, and layout. Step 2: JavaScript — The programming language that makes web pages interactive: buttons, forms, and changing content. Step 3: They differ because the first is about css while the second is about javascript; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Explain the three languages of the web: HTML, CSS, and JavaScript.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Explain the three languages of the web: HTML, CSS, and JavaScript. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Browser” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Browser — A program for viewing websites, such as Chrome, Edge, Firefox, or Safari. It reads HTML, CSS, and JavaScript and shows you the page. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Server — A powerful computer, always on, that stores websites and sends them to your browser when you ask. Step 2: URL — A web address, such as https://example.com/about, that tells the browser exactly which page to fetch. Step 3: HTTP — HyperText Transfer Protocol — the rules browsers and servers use to ask for and send web pages. Step 4: HTTPS — The secure version of HTTP: the connection is scrambled so others cannot read what you send. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain what a web browser does with HTML, CSS, and JavaScript. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Domain name” mean?",
      "choices": [
        "A web address, such as https://example.com/about, that tells the browser exactly which page to fetch.",
        "The readable name of a website, such as example.com.",
        "The secure version of HTTP: the connection is scrambled so others cannot read what you send.",
        "The part of a website that runs in the browser: HTML, CSS, and JavaScript."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Domain name means: The readable name of a website, such as example.com. (a) is the definition of HTTPS, not of Domain name. (c) is the definition of Front end, not of Domain name. (d) is the definition of URL, not of Domain name."
    },
    {
      "q": "What does the term “Front end” mean?",
      "choices": [
        "A web address, such as https://example.com/about, that tells the browser exactly which page to fetch.",
        "The readable name of a website, such as example.com.",
        "The part of a website that runs in the browser: HTML, CSS, and JavaScript.",
        "The programming language that makes web pages interactive: buttons, forms, and changing content."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Front end means: The part of a website that runs in the browser: HTML, CSS, and JavaScript. (a) is the definition of JavaScript, not of Front end. (b) is the definition of URL, not of Front end. (d) is the definition of Domain name, not of Front end."
    },
    {
      "q": "Which term means: The system of web pages and links that runs on top of the internet.",
      "choices": [
        "World Wide Web",
        "HTTP",
        "Hosting",
        "CSS"
      ],
      "answer": 0,
      "explanation": "Correct: (a). World Wide Web is the term for: The system of web pages and links that runs on top of the internet. (b) HTTP means HyperText Transfer Protocol — the rules browsers and servers use to ask for and send web pages. (c) Hosting means Paying a company to keep your website on its servers so anyone can visit it. (d) CSS means Cascading Style Sheets — the language that styles a web page: colours, fonts, spacing, and layout."
    },
    {
      "q": "Which term means: The programming language that makes web pages interactive: buttons, forms, and changing content.",
      "choices": [
        "Website",
        "HTTPS",
        "JavaScript",
        "Server"
      ],
      "answer": 2,
      "explanation": "Correct: (c). JavaScript is the term for: The programming language that makes web pages interactive: buttons, forms, and changing content. (a) HTTPS means The secure version of HTTP: the connection is scrambled so others cannot read what you send. (b) Website means A collection of web pages under one name, stored on a server. (d) Server means A powerful computer, always on, that stores websites and sends them to your browser when you ask."
    },
    {
      "q": "Which of the following is TRUE about URL?",
      "choices": [
        "One single page on the web, such as one article or one product page.",
        "The secure version of HTTP: the connection is scrambled so others cannot read what you send.",
        "HyperText Markup Language — the language that gives a web page its structure and content.",
        "A web address, such as https://example.com/about, that tells the browser exactly which page to fetch."
      ],
      "answer": 3,
      "explanation": "Correct: (d). URL: A web address, such as https://example.com/about, that tells the browser exactly which page to fetch. (a) describes Web page, not URL. (b) describes HTML, not URL. (c) describes HTTPS, not URL."
    },
    {
      "q": "What does the term “Domain name” mean?",
      "choices": [
        "Cascading Style Sheets — the language that styles a web page: colours, fonts, spacing, and layout.",
        "The system of web pages and links that runs on top of the internet.",
        "HyperText Transfer Protocol — the rules browsers and servers use to ask for and send web pages.",
        "The readable name of a website, such as example.com."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Domain name means: The readable name of a website, such as example.com. (a) is the definition of World Wide Web, not of Domain name. (b) is the definition of CSS, not of Domain name. (c) is the definition of HTTP, not of Domain name."
    },
    {
      "q": "A web page has a heading, a blue background, and a button that shows a message when clicked. Which language does each job?",
      "choices": [
        "HTML makes the button work, CSS writes the heading, JavaScript colours the background",
        "HTML gives the heading, CSS colours the background, JavaScript makes the button work",
        "JavaScript gives the heading, HTML colours the background, CSS makes the button work",
        "CSS gives the heading, JavaScript colours the background, HTML makes the button work"
      ],
      "answer": 1,
      "explanation": "Correct: (b). HTML is structure and content (the heading), CSS is style (the blue background), JavaScript is behaviour (the button). (a), (c), and (d) all mix up the three jobs."
    },
    {
      "q": "In the URL https://example.com/about, what is example.com?",
      "choices": [
        "The path",
        "The protocol",
        "The domain name",
        "The file extension"
      ],
      "answer": 2,
      "explanation": "Correct: (c). example.com is the domain name — the readable name of the website. (a) The path is /about. (b) The protocol is https. (d) A file extension is the part after a dot in a file name, not in a URL."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — How the Web Works: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain how a web page gets from a server to your browser.</p>\n<p><strong>Key terms:</strong> HTML · CSS · JavaScript · Browser · Server · URL · HTTP · HTTPS.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain how a web page gets from a server to your browser.</li>\n<li>Explain the three languages of the web: HTML, CSS, and JavaScript.</li>\n<li>Explain what a URL is made of.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
