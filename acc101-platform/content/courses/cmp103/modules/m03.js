// cmp103 - Module 3: HTML Tags & Structure
module.exports = {
  "number": 3,
  "slug": "html-tags-and-structure",
  "title": "HTML Tags & Structure",
  "estTime": "3–4 hours",
  "objectives": [
    "Use lists: ordered, unordered, and nested.",
    "Use links with the a element and the href attribute.",
    "Add images with the img element and alt text.",
    "Use semantic tags: header, nav, main, section, article, footer.",
    "Nest elements correctly and indent your code so it is readable."
  ],
  "sections": [
    {
      "heading": "Lists: Bullets, Numbers, and Nesting",
      "html": "<p>Lists are everywhere on the web: menus, steps, shopping lists. An unordered list <ul> makes bullets, for items with no set order. An ordered list <ol> makes numbers, for steps that must happen in order. Each item is an <li>. </p>\n<pre>&lt;h2&gt;My favourite foods&lt;/h2&gt;\n&lt;ul&gt;\n&lt;li&gt;Pizza&lt;/li&gt;\n&lt;li&gt;Rice and beans&lt;/li&gt;\n&lt;li&gt;Apples&lt;/li&gt;\n&lt;/ul&gt;</pre>\n<p> The <ul> opens, each <li> holds one item and closes, then the </ul> closes the list.</p>\n<p>Lists can nest: an <li> can hold a whole <ul> inside it, for a sub-list. The rule for nesting is simple and strict: the inner element must be fully closed before the outer one closes. If you open <ul>, then <li>, then <ul>, you must close them in reverse order: </ul>, </li>, </ul>. Getting this wrong is the most common HTML structure mistake.</p>\n"
    },
    {
      "heading": "Links: The a Element",
      "html": "<p>A link is made with the <a> element and its href attribute: <a href=\"about.html\">About us</a>. The href holds the address; the text between the tags is what the visitor clicks. A link to another page on your own site uses a relative address (about.html). A link to another site uses a full address (https://example.com).</p>\n<p>Make link text say where it goes: “Read our guide to pensions” is a good link; “click here” is a bad one, because it says nothing out of context — and screen readers, used by blind visitors, often read links out of context. Links to other sites usually open in the same tab; opening in a new tab (target=\"_blank\") is best saved for links that leave your site.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Nesting closes in reverse order: the last tag opened is the first tag closed. And link text should say where the link goes — never just “click here”.</div></p>\n"
    },
    {
      "heading": "Images and alt Text",
      "html": "<p>An image is added with <img src=\"cat.jpg\" alt=\"A tabby cat sitting in the sun\">. The src attribute names the file; the alt attribute describes the picture in words. Alt text matters twice: screen readers read it aloud for blind visitors, and it is shown if the image cannot load. Write alt text that says what is in the picture, not “image” or the file name.</p>\n<p>Keep image files in the same folder as your page while you are learning, or in a folder called images with the path images/cat.jpg. And keep images reasonably small: a photo straight from a phone can be several megabytes, which makes a page slow. Resize big photos before you use them.</p>\n"
    },
    {
      "heading": "Semantic Tags: Saying What Things Are",
      "html": "<p>Semantic tags say what a part of the page is, not just how it looks. <header> is the top of the page, <nav> holds the navigation links, <main> holds the main content, <section> marks a section of content, <article> marks a self-contained piece like a blog post, and <footer> is the bottom of the page.</p>\n<p>Using them costs nothing and helps everyone: screen readers use them to let blind visitors jump to the main content, and search engines use them to understand the page. A page built from divs alone works, but a page built with semantic tags works for more people. The book HTML and CSS: Design and Build Websites by Jon Duckett explains these tags with clear diagrams, if you want a printed reference.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li><ul> makes bullets, <ol> makes numbers, <li> is one item.</li><li>Links use <a href=\"...\"> with text that says where they go.</li><li>Images use <img src=\"...\" alt=\"...\"> — always write alt text.</li><li>Semantic tags (header, nav, main, section, footer) say what a part is.</li><li>Nesting closes in reverse order: last opened, first closed.</li></ul></p>\n<p><strong>Common mistake:</strong> Closing tags in the wrong order. <ul><li>text</ul></li> is broken — close the <li> before the <ul>.</p>\n<p><strong>Common mistake:</strong> Writing alt=\"image\" or leaving alt out. Alt text should describe the picture for people who cannot see it.</p>\n<p><strong>Ready check:</strong> If you can build a page with a heading, a list, a link to another page, an image with alt text, and a header, main, and footer, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "List",
      "def": "A group of related items on a page, marked with <ul>, <ol>, or <li>."
    },
    {
      "term": "Unordered list",
      "def": "A bulleted list, marked with <ul>, for items with no set order."
    },
    {
      "term": "Ordered list",
      "def": "A numbered list, marked with <ol>, for steps or items in order."
    },
    {
      "term": "List item",
      "def": "One item in a list, marked with <li>."
    },
    {
      "term": "Link",
      "def": "A clickable piece of text or a picture that takes you to another page, made with <a> and href."
    },
    {
      "term": "href",
      "def": "The attribute on a link that holds the address it goes to, such as href=\"about.html\"."
    },
    {
      "term": "Image",
      "def": "A picture on a page, added with <img> and the src attribute."
    },
    {
      "term": "src",
      "def": "The attribute on an image that holds the file it shows, such as src=\"cat.jpg\"."
    },
    {
      "term": "alt text",
      "def": "The alt attribute on an image: words describing the picture, read by screen readers and shown if the image cannot load."
    },
    {
      "term": "Semantic tag",
      "def": "A tag that says what something is, not just how it looks: header, nav, main, section, article, footer."
    },
    {
      "term": "header",
      "def": "The top part of a page or section, usually holding the title and navigation."
    },
    {
      "term": "nav",
      "def": "The navigation area of a page, holding the links to the other pages."
    },
    {
      "term": "main",
      "def": "The main content of a page — the part that is not the header, navigation, or footer."
    },
    {
      "term": "footer",
      "def": "The bottom part of a page, usually holding contact details and copyright."
    },
    {
      "term": "Nesting",
      "def": "Putting one element inside another, such as an <li> inside a <ul>, with the inner element fully closed before the outer one closes."
    }
  ],
  "video": {
    "title": "HTML Tutorial for Beginners: HTML Crash Course",
    "embedUrl": "https://www.youtube.com/embed/qz0aGYrrlhU",
    "note": "Programming with Mosh's HTML crash course. Watch the sections on lists, links, and images, and add each one to your own page in VS Code.",
    "more": [
      {
        "title": "HTML Crash Course For Absolute Beginners",
        "url": "https://www.youtube.com/watch?v=UB1O30fR-EE"
      },
      {
        "title": "Learn HTML5 and CSS3 From Scratch - Full Course",
        "url": "https://www.youtube.com/watch?v=mU6anWqZJcc"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “List” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: List — A group of related items on a page, marked with <ul>, <ol>, or <li>. Step 2: It matters because it is part of: Use lists: ordered, unordered, and nested. Step 3: An example from the module is the way list shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Unordered list” and “Ordered list”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Unordered list — A bulleted list, marked with <ul>, for items with no set order. Step 2: Ordered list — A numbered list, marked with <ol>, for steps or items in order. Step 3: They differ because the first is about unordered list while the second is about ordered list; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Use links with the a element and the href attribute.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Use links with the a element and the href attribute. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “List item” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: List item — One item in a list, marked with <li>. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Link — A clickable piece of text or a picture that takes you to another page, made with <a> and href. Step 2: href — The attribute on a link that holds the address it goes to, such as href=\"about.html\". Step 3: Image — A picture on a page, added with <img> and the src attribute. Step 4: src — The attribute on an image that holds the file it shows, such as src=\"cat.jpg\". (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Nest elements correctly and indent your code so it is readable. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “main” mean?",
      "choices": [
        "The main content of a page — the part that is not the header, navigation, or footer.",
        "The top part of a page or section, usually holding the title and navigation.",
        "A bulleted list, marked with <ul>, for items with no set order.",
        "The attribute on an image that holds the file it shows, such as src=\"cat.jpg\"."
      ],
      "answer": 0,
      "explanation": "Correct: (a). main means: The main content of a page — the part that is not the header, navigation, or footer. (b) is the definition of Unordered list, not of main. (c) is the definition of src, not of main. (d) is the definition of header, not of main."
    },
    {
      "q": "What does the term “List” mean?",
      "choices": [
        "A bulleted list, marked with <ul>, for items with no set order.",
        "A group of related items on a page, marked with <ul>, <ol>, or <li>.",
        "One item in a list, marked with <li>.",
        "A clickable piece of text or a picture that takes you to another page, made with <a> and href."
      ],
      "answer": 1,
      "explanation": "Correct: (b). List means: A group of related items on a page, marked with <ul>, <ol>, or <li>. (a) is the definition of Link, not of List. (c) is the definition of Unordered list, not of List. (d) is the definition of List item, not of List."
    },
    {
      "q": "Which term means: One item in a list, marked with <li>.",
      "choices": [
        "footer",
        "List item",
        "Link",
        "List"
      ],
      "answer": 1,
      "explanation": "Correct: (b). List item is the term for: One item in a list, marked with <li>. (a) footer means The bottom part of a page, usually holding contact details and copyright. (c) Link means A clickable piece of text or a picture that takes you to another page, made with <a> and href. (d) List means A group of related items on a page, marked with <ul>, <ol>, or <li>."
    },
    {
      "q": "Which term means: A picture on a page, added with <img> and the src attribute.",
      "choices": [
        "Nesting",
        "Image",
        "href",
        "Unordered list"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Image is the term for: A picture on a page, added with <img> and the src attribute. (a) Nesting means Putting one element inside another, such as an <li> inside a <ul>, with the inner element fully closed before the outer one closes. (c) href means The attribute on a link that holds the address it goes to, such as href=\"about.html\". (d) Unordered list means A bulleted list, marked with <ul>, for items with no set order."
    },
    {
      "q": "Which of the following is TRUE about Semantic tag?",
      "choices": [
        "A numbered list, marked with <ol>, for steps or items in order.",
        "A tag that says what something is, not just how it looks: header, nav, main, section, article, footer.",
        "A picture on a page, added with <img> and the src attribute.",
        "The alt attribute on an image: words describing the picture, read by screen readers and shown if the image cannot load."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Semantic tag: A tag that says what something is, not just how it looks: header, nav, main, section, article, footer. (a) describes Ordered list, not Semantic tag. (c) describes alt text, not Semantic tag. (d) describes Image, not Semantic tag."
    },
    {
      "q": "What does the term “main” mean?",
      "choices": [
        "A bulleted list, marked with <ul>, for items with no set order.",
        "The main content of a page — the part that is not the header, navigation, or footer.",
        "The bottom part of a page, usually holding contact details and copyright.",
        "A tag that says what something is, not just how it looks: header, nav, main, section, article, footer."
      ],
      "answer": 1,
      "explanation": "Correct: (b). main means: The main content of a page — the part that is not the header, navigation, or footer. (a) is the definition of Semantic tag, not of main. (c) is the definition of footer, not of main. (d) is the definition of Unordered list, not of main."
    },
    {
      "q": "Which HTML is written correctly?",
      "choices": [
        "<ul><li>Apples</li><li>Oranges</li></ul>",
        "<ul><li>Apples<ul><li>Oranges</li></ul>",
        "<ol><li>Apples</li><ol><li>Oranges</li></ol>",
        "<ul>Apples<li>Oranges</li></ul>"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The <ul> opens, each <li> opens and closes, then the </ul> closes the list. (b) is wrong: the inner <ul> is never closed and neither is the outer <li>. (c) is wrong: it opens an <ol> inside an <li> that was never opened. (d) is wrong: “Apples” sits directly inside the <ul> without an <li>."
    },
    {
      "q": "Why should an image have alt text?",
      "choices": [
        "It makes the image load faster",
        "Screen readers read it aloud for blind visitors, and it shows if the image cannot load",
        "It changes the size of the image",
        "It is required for the image to appear at all"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Alt text describes the picture for people who cannot see it and appears when the image fails to load. (a) is wrong: alt text does not affect speed. (c) is wrong: size is set with CSS or width/height. (d) is wrong: an image without alt still appears for sighted visitors — it is just inaccessible."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — HTML Tags & Structure: Quick Reference</h3>\n<p><strong>Core idea:</strong> Use lists: ordered, unordered, and nested.</p>\n<p><strong>Key terms:</strong> List · Unordered list · Ordered list · List item · Link · href · Image · src.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Use lists: ordered, unordered, and nested.</li>\n<li>Use links with the a element and the href attribute.</li>\n<li>Add images with the img element and alt text.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
