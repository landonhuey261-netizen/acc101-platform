// cmp104 - Module 3: HTML: The Structure of a Web Page
module.exports = {
  "number": 3,
  "slug": "html-structure-of-a-web-page",
  "title": "HTML: The Structure of a Web Page",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what HTML does and what it does not do.",
    "Write a simple page using headings, paragraphs, links, pictures, and lists.",
    "Explain what a tag is and how opening and closing tags work.",
    "Build a simple form with labels and an input box.",
    "Check your own HTML by opening it in a browser."
  ],
  "sections": [
    {
      "heading": "HTML Is the Skeleton",
      "html": "<p>HTML (HyperText Markup Language) is not really a programming language — it is a way of marking up text so a browser knows what each part is. You wrap words in tags: <code>&lt;h1&gt;</code> says “this is the main heading”, <code>&lt;p&gt;</code> says “this is a paragraph”, <code>&lt;a&gt;</code> says “this is a link”. The browser reads the tags and draws the page.</p>\n<p>A tag usually comes in a pair: an opening tag and a closing tag with a slash, like <code>&lt;p&gt;Hello&lt;/p&gt;</code>. Everything between the pair belongs to that element. A few tags, like the picture tag <code>&lt;img&gt;</code>, stand alone. If you forget a closing tag, the browser guesses — and often guesses wrong, which is why tidy HTML matters.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> HTML says what things are. It does not say what they look like — that is CSS's job.</div></p>\n"
    },
    {
      "heading": "A First Page, Piece by Piece",
      "html": "<p>Every HTML page has the same bones: a <code>&lt;!DOCTYPE html&gt;</code> line, an <code>&lt;html&gt;</code> wrapper, a <code>&lt;head&gt;</code> holding the page title, and a <code>&lt;body&gt;</code> holding everything you see. Inside the body you stack headings from <code>&lt;h1&gt;</code> (biggest) to <code>&lt;h6&gt;</code>, paragraphs, lists with <code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code>, and pictures with <code>&lt;img src=\"photo.jpg\" alt=\"A photo of a dog\"&gt;</code>. The <code>alt</code> text describes the picture for people who cannot see it, and for search engines.</p>\n<p>Here is a tiny complete page you can try in any text editor, saved as <code>hello.html</code>, then opened in a browser: <pre><code>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;head&gt;&lt;title&gt;My first page&lt;/title&gt;&lt;/head&gt;\n&lt;body&gt;\n&lt;h1&gt;Hello, world&lt;/h1&gt;\n&lt;p&gt;This is my first web page.&lt;/p&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre> Change the words, save, refresh the browser, and watch it change. That loop — edit, save, refresh — is how web developers work all day.</p>\n"
    },
    {
      "heading": "Links and Pictures",
      "html": "<p>A link is an anchor tag with a destination: <code>&lt;a href=\"https://example.com\"&gt;Visit Example&lt;/a&gt;</code>. The words between the tags are what the user sees and clicks. A picture needs a source file and alt text. Keep pictures small and name files clearly, so the page loads fast and you can find things later.</p>\n<p>Links can also jump inside your own app: from a home page to a settings page, for example. That is how the screens of a web app connect to each other. Each screen is a page, and links are the doors between them.</p>\n"
    },
    {
      "heading": "Forms: Letting the User Talk Back",
      "html": "<p>A form is how a page collects information: a name, an email address, a message. It uses <code>&lt;form&gt;</code> to wrap the whole thing, <code>&lt;label&gt;</code> to name each box, <code>&lt;input&gt;</code> for the box itself, and a <code>&lt;button&gt;</code> to send it. Every input should have a label, so people using screen readers know what to type.</p>\n<p>Try this small form: <pre><code>&lt;form&gt;\n&lt;label&gt;Your name: &lt;input type=\"text\"&gt;&lt;/label&gt;\n&lt;button&gt;Say hello&lt;/button&gt;\n&lt;/form&gt;</code></pre> On its own it does nothing when you press the button — making it do something is JavaScript's job, in Module 6. HTML's job is simply to put the boxes on the page, clearly labelled.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>HTML marks up text with tags so the browser knows what each part is.</li>\n<li>Tags usually come in opening and closing pairs; <img> stands alone.</li>\n<li>Headings, paragraphs, lists, links, pictures, and forms build a page.</li>\n<li>Every input in a form needs a label.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Forgetting a closing tag and wondering why the whole page looks wrong.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Using HTML to make things look pretty. That is CSS's job — HTML is structure only.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "HTML",
      "def": "The language that gives a web page its structure, using tags."
    },
    {
      "term": "Tag",
      "def": "A marker in HTML, such as <h1> or <p>, that tells the browser what a piece of content is."
    },
    {
      "term": "Element",
      "def": "An opening tag, its content, and its closing tag taken together."
    },
    {
      "term": "Heading",
      "def": "A title on a page, from <h1> (biggest) to <h6> (smallest)."
    },
    {
      "term": "Paragraph",
      "def": "A block of text on a page, marked with <p> tags."
    },
    {
      "term": "Link",
      "def": "A clickable anchor (<a>) that takes you to another page or file."
    },
    {
      "term": "Image",
      "def": "A picture on a page, added with an <img> tag and a file name."
    },
    {
      "term": "Alt text",
      "def": "Short text describing a picture, read out for people who cannot see it."
    },
    {
      "term": "List",
      "def": "A set of items marked up with <ul> or <ol> and <li> tags."
    },
    {
      "term": "Form",
      "def": "A part of a page that collects information from the user."
    },
    {
      "term": "Input",
      "def": "A box in a form where the user types, such as a name or email box."
    },
    {
      "term": "Label",
      "def": "Text naming what an input box is for."
    },
    {
      "term": "Button",
      "def": "A control the user clicks to send a form or start an action."
    },
    {
      "term": "Attribute",
      "def": "Extra information inside a tag, such as src in an image tag or href in a link."
    },
    {
      "term": "Title",
      "def": "The name of a page shown in the browser tab, set in the <head>."
    }
  ],
  "video": {
    "title": "HTML Tutorial for Beginners: HTML Crash Course",
    "embedUrl": "https://www.youtube.com/embed/qz0aGYrrlhU",
    "note": "Follow along and build the example page yourself. Pause after each tag and try it in your own file before moving on.",
    "more": [
      {
        "title": "HTML Tutorial For Beginners: HTML Crash Course (2026)",
        "url": "https://www.youtube.com/watch?v=2u4q2vDLiU0"
      },
      {
        "title": "HTML in 5 minutes",
        "url": "https://www.youtube.com/watch?v=salY_Sm6mv4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “HTML” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: HTML — The language that gives a web page its structure, using tags. Step 2: It matters because it is part of: Explain what HTML does and what it does not do. Step 3: An example from the module is the way html shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Tag” and “Element”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Tag — A marker in HTML, such as <h1> or <p>, that tells the browser what a piece of content is. Step 2: Element — An opening tag, its content, and its closing tag taken together. Step 3: They differ because the first is about tag while the second is about element; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Write a simple page using headings, paragraphs, links, pictures, and lists.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Write a simple page using headings, paragraphs, links, pictures, and lists. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Heading” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Heading — A title on a page, from <h1> (biggest) to <h6> (smallest). Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Paragraph — A block of text on a page, marked with <p> tags. Step 2: Link — A clickable anchor (<a>) that takes you to another page or file. Step 3: Image — A picture on a page, added with an <img> tag and a file name. Step 4: Tag — A marker in HTML, such as <h1> or <p>, that tells the browser what a piece of content is. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain what a tag is and how opening and closing tags work. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “HTML” mean?",
      "choices": [
        "The language that gives a web page its structure, using tags.",
        "A marker in HTML, such as <h1> or <p>, that tells the browser what a piece of content is.",
        "An opening tag, its content, and its closing tag taken together.",
        "A title on a page, from <h1> (biggest) to <h6> (smallest)."
      ],
      "answer": 0,
      "explanation": "Correct: (a). HTML means: The language that gives a web page its structure, using tags. (b) is the definition of Tag, not of HTML. (c) is the definition of Element, not of HTML. (d) is the definition of Heading, not of HTML."
    },
    {
      "q": "What does the term “Tag” mean?",
      "choices": [
        "The language that gives a web page its structure, using tags.",
        "A marker in HTML, such as <h1> or <p>, that tells the browser what a piece of content is.",
        "An opening tag, its content, and its closing tag taken together.",
        "A title on a page, from <h1> (biggest) to <h6> (smallest)."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Tag means: A marker in HTML, such as <h1> or <p>, that tells the browser what a piece of content is. (a) is the definition of HTML, not of Tag. (c) is the definition of Element, not of Tag. (d) is the definition of Heading, not of Tag."
    },
    {
      "q": "What does the term “Element” mean?",
      "choices": [
        "The language that gives a web page its structure, using tags.",
        "A marker in HTML, such as <h1> or <p>, that tells the browser what a piece of content is.",
        "An opening tag, its content, and its closing tag taken together.",
        "A title on a page, from <h1> (biggest) to <h6> (smallest)."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Element means: An opening tag, its content, and its closing tag taken together. (a) is the definition of HTML, not of Element. (b) is the definition of Tag, not of Element. (d) is the definition of Heading, not of Element."
    },
    {
      "q": "What does the term “Heading” mean?",
      "choices": [
        "The language that gives a web page its structure, using tags.",
        "A marker in HTML, such as <h1> or <p>, that tells the browser what a piece of content is.",
        "An opening tag, its content, and its closing tag taken together.",
        "A title on a page, from <h1> (biggest) to <h6> (smallest)."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Heading means: A title on a page, from <h1> (biggest) to <h6> (smallest). (a) is the definition of HTML, not of Heading. (b) is the definition of Tag, not of Heading. (c) is the definition of Element, not of Heading."
    },
    {
      "q": "Which term means: A block of text on a page, marked with <p> tags.",
      "choices": [
        "Paragraph",
        "HTML",
        "Tag",
        "Element"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Paragraph is the term for: A block of text on a page, marked with <p> tags. (b) HTML means The language that gives a web page its structure, using tags. (c) Tag means A marker in HTML, such as <h1> or <p>, that tells the browser what a piece of content is. (d) Element means An opening tag, its content, and its closing tag taken together."
    },
    {
      "q": "Which term means: A clickable anchor (<a>) that takes you to another page or file.",
      "choices": [
        "HTML",
        "Link",
        "Tag",
        "Element"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Link is the term for: A clickable anchor (<a>) that takes you to another page or file. (a) HTML means The language that gives a web page its structure, using tags. (c) Tag means A marker in HTML, such as <h1> or <p>, that tells the browser what a piece of content is. (d) Element means An opening tag, its content, and its closing tag taken together."
    },
    {
      "q": "Which term means: A picture on a page, added with an <img> tag and a file name.",
      "choices": [
        "HTML",
        "Tag",
        "Image",
        "Element"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Image is the term for: A picture on a page, added with an <img> tag and a file name. (a) HTML means The language that gives a web page its structure, using tags. (b) Tag means A marker in HTML, such as <h1> or <p>, that tells the browser what a piece of content is. (d) Element means An opening tag, its content, and its closing tag taken together."
    },
    {
      "q": "Which term means: Short text describing a picture, read out for people who cannot see it.",
      "choices": [
        "HTML",
        "Tag",
        "Element",
        "Alt text"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Alt text is the term for: Short text describing a picture, read out for people who cannot see it. (a) HTML means The language that gives a web page its structure, using tags. (b) Tag means A marker in HTML, such as <h1> or <p>, that tells the browser what a piece of content is. (c) Element means An opening tag, its content, and its closing tag taken together."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — HTML: The Structure of a Web Page: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what HTML does and what it does not do.</p>\n<p><strong>Key terms:</strong> HTML · Tag · Element · Heading · Paragraph · Link · Image · Alt text.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what HTML does and what it does not do.</li>\n<li>Write a simple page using headings, paragraphs, links, pictures, and lists.</li>\n<li>Explain what a tag is and how opening and closing tags work.</li>\n</ul>\n<p><strong>Watch out:</strong> Do not skip the stranger test: open your own app as a brand-new user before you call it done.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
