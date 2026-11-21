module.exports = {
  "number": 3,
  "slug": "building-your-portfolio-website",
  "title": "Building Your Portfolio Website",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the two ways to build a portfolio site: no-code tools and hand-written code.",
    "Describe the basic structure of a web page.",
    "Explain how to choose a domain name and hosting.",
    "Describe how to make a site work well on phones.",
    "Explain how to publish a site and check it live."
  ],
  "sections": [
    {
      "heading": "Two Ways to Build: No-Code or Hand-Written",
      "html": "<p>There are two good ways to build a portfolio site. No-code tools — website builders with drag-and-drop layouts — get a good-looking site online fast, and they handle hosting and mobile layout for you. Hand-written code, using HTML for structure and CSS for style, takes longer but teaches you exactly how websites work and gives you full control.</p>\n<p>For this program, either path is fine. If you took the coding courses, building the site by hand is a strong portfolio piece in itself. If you prefer speed, a website builder is a sensible choice — the work you show matters more than how the site was built.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The site is a frame for your work, not the work itself. Pick the path you will actually finish.</div>"
    },
    {
      "heading": "The Basic Structure of a Web Page",
      "html": "<p>A web page built by hand has a simple skeleton. The HTML file holds the content: a heading with your name, a short introduction, a list of projects, and a contact link. The CSS file holds the style: colors, typefaces, spacing, and layout. Keeping content and style in separate files is the professional habit — change the colors in one place and the whole site updates.</p>\n<p>Here is the smallest honest skeleton of a portfolio page, with each part doing one job:</p>\n<pre><code>&lt;!DOCTYPE html&gt;\n&lt;html lang=\"en\"&gt;\n&lt;head&gt;\n  &lt;meta charset=\"utf-8\"&gt;\n  &lt;title&gt;Maya Chen — Portfolio&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;h1&gt;Maya Chen&lt;/h1&gt;\n  &lt;p&gt;I design posters and build small websites.&lt;/p&gt;\n  &lt;h2&gt;My work&lt;/h2&gt;\n  &lt;ul&gt;\n    &lt;li&gt;Library poster — poster design&lt;/li&gt;\n    &lt;li&gt;Bakery website — HTML and CSS&lt;/li&gt;\n  &lt;/ul&gt;\n  &lt;p&gt;Contact me at maya@example.com&lt;/p&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre>\n<p>Every tag opens and closes in order, the page has a title, and the content is plain and readable even before any styling is added. That is the test of good HTML: it makes sense without the CSS.</p>"
    },
    {
      "heading": "Domain Names and Hosting",
      "html": "<p>A domain name is your site's address, like yourname.com. Short, easy to spell, and using your own name is the best choice for a portfolio — it is professional and easy to remember. A domain usually costs about ten to fifteen dollars a year from a registrar, and you should buy it yourself from a well-known registrar rather than through a stranger.</p>\n<p>Hosting is the service that stores your site's files and shows them to visitors. Many website builders include hosting, and there are free hosts for small hand-built sites. Whichever you choose, keep a copy of your files on your own computer too — hosting is not a backup.</p>"
    },
    {
      "heading": "Mobile First, Then Publish and Check",
      "html": "<p>Most visitors will first see your portfolio on a phone, so design for the small screen first: one column, big readable text, pictures that fit the width, and buttons large enough to tap. Then check how it looks on a wider screen. A site that works on a phone almost always works everywhere else.</p>\n<p>Before you share the link, check the live site yourself: open it on your phone, click every link, and read every word out loud. Fix broken links, blurry images, and typos now — a visitor who finds a broken link will not come back to see if you fixed it.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>No-code builders are fast; hand-written HTML and CSS give full control and teach the craft.</li>\n<li>HTML holds content, CSS holds style — keep them in separate files.</li>\n<li>A domain name should be short, easy to spell, and ideally your own name.</li>\n<li>Design for the phone screen first, then check wider screens.</li>\n<li>Publish, then check every link and read every word before sharing the link.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Buying a clever domain nobody can spell. Your own name is the safest choice.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Sharing the link before checking it live. Click every link and read every word first.</div>\n<p><strong>Ready-to-Work link:</strong> If you can describe the HTML skeleton of a portfolio page and the steps to publish and check it, you have this module.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "HTML",
      "def": "The language that gives a web page its structure and content."
    },
    {
      "term": "CSS",
      "def": "The language that gives a web page its style: colors, typefaces, and layout."
    },
    {
      "term": "No-code tool",
      "def": "A website builder that lets you make a site by dragging and dropping, without writing code."
    },
    {
      "term": "Domain name",
      "def": "A website's address, such as yourname.com."
    },
    {
      "term": "Hosting",
      "def": "A service that stores a website's files and shows them to visitors."
    },
    {
      "term": "Registrar",
      "def": "A company that sells and manages domain names."
    },
    {
      "term": "Mobile first",
      "def": "Designing for the phone screen first, then adapting to wider screens."
    },
    {
      "term": "Tag",
      "def": "A marker in HTML, such as h1 or p, that gives content a meaning or structure."
    },
    {
      "term": "Broken link",
      "def": "A link that leads nowhere, because the page moved or the address is wrong."
    },
    {
      "term": "Publish",
      "def": "To put a website online so visitors can reach it."
    },
    {
      "term": "Responsive design",
      "def": "A design that adapts its layout to the size of the visitor's screen."
    },
    {
      "term": "Website builder",
      "def": "An online tool for making a website without writing code."
    }
  ],
  "video": {
    "title": "Modern Responsive Portfolio Website with HTML & CSS & JavaScript",
    "embedUrl": "https://www.youtube.com/embed/NWZQkwXtHJo",
    "note": "A modern portfolio website built with HTML, CSS, and JavaScript. As you watch, note the page structure and how the mobile layout is handled.",
    "more": [
      {
        "title": "Build a Responsive Portfolio Website using HTML & CSS & JavaScript",
        "url": "https://www.youtube.com/watch?v=GnFH9Eg-OuM"
      },
      {
        "title": "Build a Stunning Portfolio Website Using AI, HTML & CSS | Beginner Project Tutorial",
        "url": "https://www.youtube.com/watch?v=hS5DMbVRuso"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “HTML” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: HTML — The language that gives a web page its structure and content. Step 2: It matters because it is part of: Explain the two ways to build a portfolio site: no-code tools and hand-written code. Step 3: An example from the module is the way html shows up in everyday work, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “CSS” and “No-code tool”. How are they different, and when would you use each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: CSS — The language that gives a web page its style: colors, typefaces, and layout. Step 2: No-code tool — A website builder that lets you make a site by dragging and dropping, without writing code. Step 3: They differ because the first is about css while the second is about no-code tool; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Describe the basic structure of a web page.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Describe the basic structure of a web page. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Domain name” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Domain name — A website's address, such as yourname.com. Step 3: The fix follows from that definition and from the module's accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Hosting — A service that stores a website's files and shows them to visitors. Step 2: Registrar — A company that sells and manages domain names. Step 3: Mobile first — Designing for the phone screen first, then adapting to wider screens. Step 4: Tag — A marker in HTML, such as h1 or p, that gives content a meaning or structure. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain how to choose a domain name and hosting. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “HTML” mean?",
      "choices": [
        "A service that stores a website's files and shows them to visitors.",
        "The language that gives a web page its structure and content.",
        "A website's address, such as yourname.com.",
        "A website builder that lets you make a site by dragging and dropping, without writing code."
      ],
      "answer": 1,
      "explanation": "Correct: (b). HTML means: The language that gives a web page its structure and content.. (a) is the definition of Hosting, not of HTML. (c) is the definition of Domain name, not of HTML. (d) is the definition of No-code tool, not of HTML."
    },
    {
      "q": "What does the term “CSS” mean?",
      "choices": [
        "The language that gives a web page its style: colors, typefaces, and layout.",
        "To put a website online so visitors can reach it.",
        "A company that sells and manages domain names.",
        "A design that adapts its layout to the size of the visitor's screen."
      ],
      "answer": 0,
      "explanation": "Correct: (a). CSS means: The language that gives a web page its style: colors, typefaces, and layout.. (b) is the definition of Publish, not of CSS. (c) is the definition of Registrar, not of CSS. (d) is the definition of Responsive design, not of CSS."
    },
    {
      "q": "What does the term “No-code tool” mean?",
      "choices": [
        "Designing for the phone screen first, then adapting to wider screens.",
        "A link that leads nowhere, because the page moved or the address is wrong.",
        "A company that sells and manages domain names.",
        "A website builder that lets you make a site by dragging and dropping, without writing code."
      ],
      "answer": 3,
      "explanation": "Correct: (d). No-code tool means: A website builder that lets you make a site by dragging and dropping, without writing code.. (a) is the definition of Mobile first, not of No-code tool. (b) is the definition of Broken link, not of No-code tool. (c) is the definition of Registrar, not of No-code tool."
    },
    {
      "q": "What does the term “Domain name” mean?",
      "choices": [
        "To put a website online so visitors can reach it.",
        "The language that gives a web page its style: colors, typefaces, and layout.",
        "A website's address, such as yourname.com.",
        "A company that sells and manages domain names."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Domain name means: A website's address, such as yourname.com.. (a) is the definition of Publish, not of Domain name. (b) is the definition of CSS, not of Domain name. (d) is the definition of Registrar, not of Domain name."
    },
    {
      "q": "Which term means: A service that stores a website's files and shows them to visitors.",
      "choices": [
        "CSS",
        "Hosting",
        "Responsive design",
        "No-code tool"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Hosting is the term for: A service that stores a website's files and shows them to visitors.. (a) CSS means The language that gives a web page its style: colors, typefaces, and layout. (c) Responsive design means A design that adapts its layout to the size of the visitor's screen. (d) No-code tool means A website builder that lets you make a site by dragging and dropping, without writing code."
    },
    {
      "q": "Which term means: A company that sells and manages domain names.",
      "choices": [
        "Website builder",
        "Hosting",
        "Broken link",
        "Registrar"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Registrar is the term for: A company that sells and manages domain names.. (a) Website builder means An online tool for making a website without writing code. (b) Hosting means A service that stores a website's files and shows them to visitors. (c) Broken link means A link that leads nowhere, because the page moved or the address is wrong."
    },
    {
      "q": "Which term means: Designing for the phone screen first, then adapting to wider screens.",
      "choices": [
        "Domain name",
        "Mobile first",
        "CSS",
        "Hosting"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Mobile first is the term for: Designing for the phone screen first, then adapting to wider screens.. (a) Domain name means A website's address, such as yourname.com. (c) CSS means The language that gives a web page its style: colors, typefaces, and layout. (d) Hosting means A service that stores a website's files and shows them to visitors."
    },
    {
      "q": "Which term means: A marker in HTML, such as h1 or p, that gives content a meaning or structure.",
      "choices": [
        "Responsive design",
        "Domain name",
        "CSS",
        "Tag"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Tag is the term for: A marker in HTML, such as h1 or p, that gives content a meaning or structure.. (a) Responsive design means A design that adapts its layout to the size of the visitor's screen. (b) Domain name means A website's address, such as yourname.com. (c) CSS means The language that gives a web page its style: colors, typefaces, and layout."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Building Your Portfolio Website: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain the two ways to build a portfolio site: no-code tools and hand-written code.</p>\n<p><strong>Key terms:</strong> HTML · CSS · No-code tool · Domain name · Hosting · Registrar · Mobile first · Tag.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain the two ways to build a portfolio site: no-code tools and hand-written code.</li>\n<li>Describe the basic structure of a web page.</li>\n<li>Explain how to choose a domain name and hosting.</li>\n</ul>\n<p><strong>Watch out:</strong> Check the live site on your own phone before sharing the link — broken links drive visitors away.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
