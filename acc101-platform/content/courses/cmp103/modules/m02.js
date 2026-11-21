// cmp103 - Module 2: Your First Web Page
module.exports = {
  "number": 2,
  "slug": "your-first-web-page",
  "title": "Your First Web Page",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what an HTML element is: opening tag, content, closing tag.",
    "Write a complete HTML document: doctype, html, head, and body.",
    "Use headings, paragraphs, and line breaks.",
    "Explain what the head is for and what the title does.",
    "Open your HTML file in a browser and see your page."
  ],
  "sections": [
    {
      "heading": "Elements: Opening Tag, Content, Closing Tag",
      "html": "<p>HTML is made of elements. An element is an opening tag, some content, and a closing tag: <p>Hello, world!</p>. The opening tag <p> says “a paragraph starts here”, the words are the content, and the closing tag </p> — with a forward slash — says “the paragraph ends here”. The browser reads the tags and shows you the content, formatted as a paragraph.</p>\n<p>Some elements have no content and no closing tag, such as <br> for a line break and <img> for a picture. Most elements do have both tags, and forgetting the closing tag is the most common beginner mistake in HTML — the browser guesses where the element ends, and its guess is often wrong.</p>\n"
    },
    {
      "heading": "The Skeleton of Every Page",
      "html": "<p>Every HTML page has the same skeleton: </p>\n<pre>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;head&gt;\n&lt;title&gt;My First Page&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n&lt;h1&gt;Hello, world!&lt;/h1&gt;\n&lt;p&gt;This is my first web page.&lt;/p&gt;\n&lt;/body&gt;\n&lt;/html&gt;</pre>\n<p> Line by line: <!DOCTYPE html> tells the browser this is a modern HTML page. <html> wraps the whole document. <head> holds information about the page — here, the <title>, which is the text shown in the browser tab. <body> holds everything visitors see: a heading <h1> and a paragraph <p>.</p>\n<p>Type this into a file called index.html in VS Code, save it, and double-click the file to open it in your browser. You have made a web page. Change the heading text, save, and refresh the browser — the page updates. That loop (edit, save, refresh) is how web development works, and you will do it hundreds of times in this course.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Every page has the same skeleton: doctype, html, head (with title), body. The head is information about the page; the body is what visitors see.</div></p>\n"
    },
    {
      "heading": "Headings and Paragraphs",
      "html": "<p>Headings run from <h1> (the biggest, the main title of the page — use only one per page) down to <h6> (the smallest). Use them in order, like an outline: <h1> for the page title, <h2> for the main sections, <h3> for sub-sections. Do not pick a heading because of its size — that is CSS's job. Pick it because of its place in the outline.</p>\n<p>Paragraphs are <p> blocks of text. The browser puts space between paragraphs automatically, and it collapses extra spaces and line breaks in your code into single spaces — so pressing Enter twice in your code does not make a gap on the page. To make a gap, use a new <p>. To break a line inside a paragraph, use <br>.</p>\n"
    },
    {
      "heading": "Opening Your Page in the Browser",
      "html": "<p>To see your page, save the file with a .html extension and open it in a browser — double-click it in File Explorer, or drag it into a browser window. The address bar will show something like file:///C:/Users/you/index.html, which means the browser is reading the file from your own computer, not from the internet. That is fine for learning.</p>\n<p><div class=\"callout\"><strong>Honest note:</strong> This app cannot run or grade your code. That is an honest limit of the app, not of you: real web developers write HTML, CSS, and JavaScript in a real editor on their own computer and test it in a real browser, and that is what you will do in this course. VS Code is free.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>An element is an opening tag, content, and a closing tag.</li><li>Every page has doctype, html, head (with title), and body.</li><li>Use one <h1> per page, then <h2> and <h3> in order like an outline.</li><li>Paragraphs are <p>; the browser collapses extra whitespace.</li><li>Save as .html and open in a browser; edit, save, refresh is the working loop.</li></ul></p>\n<p><strong>Common mistake:</strong> Forgetting the closing tag. <p>Hello with no </p> makes the browser guess — and guess wrong.</p>\n<p><strong>Common mistake:</strong> Using a heading for its size. Headings are about structure, not looks — CSS controls size.</p>\n<p><strong>Ready check:</strong> If you can write index.html with a title, one <h1>, and two paragraphs, and open it in your browser, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "HTML",
      "def": "HyperText Markup Language — the language that gives a web page its structure and content."
    },
    {
      "term": "Element",
      "def": "A piece of a web page, made of an opening tag, some content, and a closing tag: <p>Hello</p>."
    },
    {
      "term": "Tag",
      "def": "A marker in angle brackets that tells the browser what something is, such as <h1> or <p>."
    },
    {
      "term": "Opening tag",
      "def": "The tag that starts an element, such as <p>."
    },
    {
      "term": "Closing tag",
      "def": "The tag that ends an element, such as </p>. It has a forward slash after the < ."
    },
    {
      "term": "Heading",
      "def": "A title on a page, from <h1> (biggest) to <h6> (smallest)."
    },
    {
      "term": "Paragraph",
      "def": "A block of text on a page, marked with <p> and </p>."
    },
    {
      "term": "DOCTYPE",
      "def": "The first line of an HTML document, <!DOCTYPE html>, which tells the browser this is a modern HTML page."
    },
    {
      "term": "head",
      "def": "The part of an HTML document that holds information about the page, such as its title, that visitors do not see on the page itself."
    },
    {
      "term": "body",
      "def": "The part of an HTML document that holds everything visitors see on the page."
    },
    {
      "term": "title",
      "def": "The text in the browser tab for a page, set with the <title> element inside the head."
    },
    {
      "term": "Attribute",
      "def": "Extra information inside an opening tag, such as href in <a href=\"...\">."
    },
    {
      "term": "Comment",
      "def": "A note in HTML, written <!-- like this -->, that the browser ignores and humans read."
    },
    {
      "term": "Whitespace",
      "def": "Spaces, tabs, and new lines in your code. Browsers collapse extra whitespace in what they show."
    },
    {
      "term": "VS Code",
      "def": "Visual Studio Code — a free editor for writing HTML, CSS, and JavaScript."
    }
  ],
  "video": {
    "title": "HTML Crash Course For Absolute Beginners",
    "embedUrl": "https://www.youtube.com/embed/UB1O30fR-EE",
    "note": "Traversy Media's HTML crash course. Watch the opening sections on tags, headings, and paragraphs, and build the example page in VS Code as you go.",
    "more": [
      {
        "title": "HTML Tutorial for Beginners: HTML Crash Course",
        "url": "https://www.youtube.com/watch?v=qz0aGYrrlhU"
      },
      {
        "title": "HTML Full Course - Build a Website Tutorial",
        "url": "https://www.youtube.com/watch?v=pQN-pnXPaVg"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “HTML” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: HTML — HyperText Markup Language — the language that gives a web page its structure and content. Step 2: It matters because it is part of: Explain what an HTML element is: opening tag, content, closing tag. Step 3: An example from the module is the way html shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Element” and “Tag”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Element — A piece of a web page, made of an opening tag, some content, and a closing tag: <p>Hello</p>. Step 2: Tag — A marker in angle brackets that tells the browser what something is, such as <h1> or <p>. Step 3: They differ because the first is about element while the second is about tag; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Write a complete HTML document: doctype, html, head, and body.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Write a complete HTML document: doctype, html, head, and body. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Opening tag” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Opening tag — The tag that starts an element, such as <p>. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Closing tag — The tag that ends an element, such as </p>. It has a forward slash after the < . Step 2: Heading — A title on a page, from <h1> (biggest) to <h6> (smallest). Step 3: Paragraph — A block of text on a page, marked with <p> and </p>. Step 4: DOCTYPE — The first line of an HTML document, <!DOCTYPE html>, which tells the browser this is a modern HTML page. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Open your HTML file in a browser and see your page. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “title” mean?",
      "choices": [
        "A block of text on a page, marked with <p> and </p>.",
        "Extra information inside an opening tag, such as href in <a href=\"...\">.",
        "A note in HTML, written <!-- like this -->, that the browser ignores and humans read.",
        "The text in the browser tab for a page, set with the <title> element inside the head."
      ],
      "answer": 3,
      "explanation": "Correct: (d). title means: The text in the browser tab for a page, set with the <title> element inside the head. (a) is the definition of Paragraph, not of title. (b) is the definition of Comment, not of title. (c) is the definition of Attribute, not of title."
    },
    {
      "q": "What does the term “Whitespace” mean?",
      "choices": [
        "Spaces, tabs, and new lines in your code. Browsers collapse extra whitespace in what they show.",
        "The part of an HTML document that holds information about the page, such as its title, that visitors do not see on the page itself.",
        "The tag that ends an element, such as </p>. It has a forward slash after the < .",
        "The tag that starts an element, such as <p>."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Whitespace means: Spaces, tabs, and new lines in your code. Browsers collapse extra whitespace in what they show. (b) is the definition of head, not of Whitespace. (c) is the definition of Opening tag, not of Whitespace. (d) is the definition of Closing tag, not of Whitespace."
    },
    {
      "q": "Which term means: A piece of a web page, made of an opening tag, some content, and a closing tag: <p>Hello</p>.",
      "choices": [
        "HTML",
        "Element",
        "head",
        "DOCTYPE"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Element is the term for: A piece of a web page, made of an opening tag, some content, and a closing tag: <p>Hello</p>. (a) head means The part of an HTML document that holds information about the page, such as its title, that visitors do not see on the page itself. (c) HTML means HyperText Markup Language — the language that gives a web page its structure and content. (d) DOCTYPE means The first line of an HTML document, <!DOCTYPE html>, which tells the browser this is a modern HTML page."
    },
    {
      "q": "Which term means: The tag that ends an element, such as </p>. It has a forward slash after the < .",
      "choices": [
        "Paragraph",
        "Closing tag",
        "head",
        "DOCTYPE"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Closing tag is the term for: The tag that ends an element, such as </p>. It has a forward slash after the < . (a) head means The part of an HTML document that holds information about the page, such as its title, that visitors do not see on the page itself. (c) Paragraph means A block of text on a page, marked with <p> and </p>. (d) DOCTYPE means The first line of an HTML document, <!DOCTYPE html>, which tells the browser this is a modern HTML page."
    },
    {
      "q": "Which of the following is TRUE about DOCTYPE?",
      "choices": [
        "A note in HTML, written <!-- like this -->, that the browser ignores and humans read.",
        "A marker in angle brackets that tells the browser what something is, such as <h1> or <p>.",
        "The part of an HTML document that holds everything visitors see on the page.",
        "The first line of an HTML document, <!DOCTYPE html>, which tells the browser this is a modern HTML page."
      ],
      "answer": 3,
      "explanation": "Correct: (d). DOCTYPE: The first line of an HTML document, <!DOCTYPE html>, which tells the browser this is a modern HTML page. (a) describes Tag, not DOCTYPE. (b) describes body, not DOCTYPE. (c) describes Comment, not DOCTYPE."
    },
    {
      "q": "What does the term “title” mean?",
      "choices": [
        "A marker in angle brackets that tells the browser what something is, such as <h1> or <p>.",
        "The text in the browser tab for a page, set with the <title> element inside the head.",
        "A note in HTML, written <!-- like this -->, that the browser ignores and humans read.",
        "A title on a page, from <h1> (biggest) to <h6> (smallest)."
      ],
      "answer": 1,
      "explanation": "Correct: (b). title means: The text in the browser tab for a page, set with the <title> element inside the head. (a) is the definition of Tag, not of title. (c) is the definition of Heading, not of title. (d) is the definition of Comment, not of title."
    },
    {
      "q": "What does the <head> of an HTML document hold?",
      "choices": [
        "Everything visitors see on the page",
        "Information about the page, such as its title, that visitors do not see on the page itself",
        "The main heading of the page",
        "The page's paragraphs"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The head holds information about the page, like the title shown in the browser tab. (a) describes the body. (c) The main heading <h1> lives in the body. (d) Paragraphs live in the body."
    },
    {
      "q": "Which of these is a correctly written paragraph element?",
      "choices": [
        "<p>Hello</p>",
        "<p>Hello",
        "Hello</p>",
        "<P>Hello</P> with no closing tag"
      ],
      "answer": 0,
      "explanation": "Correct: (a). <p>Hello</p> has an opening tag, content, and a closing tag with a forward slash. (b) is missing the closing tag. (c) is missing the opening tag. (d) is missing the closing tag, and HTML tags are written in lowercase by convention."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Your First Web Page: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what an HTML element is: opening tag, content, closing tag.</p>\n<p><strong>Key terms:</strong> HTML · Element · Tag · Opening tag · Closing tag · Heading · Paragraph · DOCTYPE.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what an HTML element is: opening tag, content, closing tag.</li>\n<li>Write a complete HTML document: doctype, html, head, and body.</li>\n<li>Use headings, paragraphs, and line breaks.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
