// cmp103 - Module 4: Links, Images & Tables
module.exports = {
  "number": 4,
  "slug": "links-images-and-tables",
  "title": "Links, Images & Tables",
  "estTime": "3–4 hours",
  "objectives": [
    "Link between pages on your own site with relative addresses.",
    "Link to other websites and to email addresses.",
    "Add images with the right file path and useful alt text.",
    "Build a simple table with rows, headings, and cells.",
    "Explain when a table is the right choice and when it is not."
  ],
  "sections": [
    {
      "heading": "Linking Between Your Own Pages",
      "html": "<p>A website is pages linked together. A relative link uses just the file name: <a href=\"about.html\">About</a> links to the about.html file in the same folder. If the page is in a subfolder, include the folder: <a href=\"pages/contact.html\">Contact</a>. If you need to go up one folder, use two dots: <a href=\"../index.html\">Home</a>.</p>\n<p>Keep every page's file name lowercase with no spaces — about.html, not About Page.html — because web servers are picky about capital letters and spaces, and a link that works on your Windows computer can break on a real server. A link to another website uses the full address: <a href=\"https://example.com\">Example</a>. And a link starting with mailto: opens the visitor's email program: <a href=\"mailto:hello@example.com\">Email us</a>.</p>\n"
    },
    {
      "heading": "Images: Paths and Formats",
      "html": "<p>An image's src is a file path, and the path is relative to the page, not to your computer. If cat.jpg sits next to index.html, src=\"cat.jpg\" works. If it sits in a folder called images, the path is src=\"images/cat.jpg\". The most common reason an image shows as a broken picture is a wrong path — a typo, a wrong folder, or a capital letter that does not match the file name.</p>\n<p>Photos are usually JPEG (.jpg): small files, good for photos. Logos and graphics are usually PNG (.png): sharp edges, and they support transparency. Keep file names lowercase with no spaces, and resize photos before using them — a page with five 5-megabyte photos is slow for everyone, especially on a phone.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> A broken image almost always means a wrong file path. Check the file name letter by letter, check the folder, and check the capital letters.</div></p>\n"
    },
    {
      "heading": "Tables for Data",
      "html": "<p>A table shows data in rows and columns: opening times, prices, results. A table is built from <table>, rows <tr>, heading cells <th>, and ordinary cells <td>: </p>\n<pre>&lt;table&gt;\n&lt;tr&gt;\n&lt;th&gt;Day&lt;/th&gt;\n&lt;th&gt;Hours&lt;/th&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td&gt;Monday&lt;/td&gt;\n&lt;td&gt;9 to 5&lt;/td&gt;\n&lt;/tr&gt;\n&lt;/table&gt;</pre>\n<p> The first row holds the headings (Day, Hours); each row after it holds one set of values. A <caption> adds a title above the table.</p>\n<p>Tables are for data — not for laying out a page. Beginners used to build whole page layouts from tables, and it made pages that were hard to change and hard for screen readers to use. Layout is CSS's job (Module 7); tables are for data, and only for data.</p>\n"
    },
    {
      "heading": "Putting It Together: A Second Page",
      "html": "<p>Your site now needs a second page, so the links have somewhere to go. Make about.html with the same skeleton as index.html, the same navigation, and different content. Then link the two pages to each other: index.html links to about.html, and about.html links back to index.html. Open index.html in the browser and click the link — you have navigated a website you built.</p>\n<p>Test every link by clicking it. A link that goes nowhere (a 404 page on a real site, or a file-not-found error on your computer) is the most common website bug of all, and it is found by clicking, not by looking.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Relative links (about.html) link within your site; absolute links (https://...) link elsewhere.</li><li>Keep file names lowercase with no spaces.</li><li>Images use src paths relative to the page; a broken image usually means a wrong path.</li><li>JPEG is for photos, PNG is for logos and graphics.</li><li>Tables are for data, built from table, tr, th, and td — never for page layout.</li></ul></p>\n<p><strong>Common mistake:</strong> Using a capital letter in a file name but lowercase in the link. About.html and about.html are different files on a real server.</p>\n<p><strong>Common mistake:</strong> Using a table to lay out a page. Tables are for data; layout is CSS's job.</p>\n<p><strong>Ready check:</strong> If you can link two pages to each other, add a photo with alt text, and build a small table of opening times, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Relative link",
      "def": "A link to a page on your own site using its file name, such as about.html."
    },
    {
      "term": "Absolute link",
      "def": "A link using a full web address, such as https://example.com."
    },
    {
      "term": "Anchor",
      "def": "The <a> element, which makes a link. Its href attribute holds the address."
    },
    {
      "term": "Email link",
      "def": "A link starting with mailto: that opens the visitor's email program, such as mailto:hello@example.com."
    },
    {
      "term": "Image file",
      "def": "A picture file, such as cat.jpg or logo.png, shown with the <img> element."
    },
    {
      "term": "File path",
      "def": "The location of a file, such as images/cat.jpg, relative to the page that uses it."
    },
    {
      "term": "Table",
      "def": "A grid of rows and columns for showing data, built with <table>, <tr>, <th>, and <td>."
    },
    {
      "term": "Table row",
      "def": "One row in a table, marked with <tr>."
    },
    {
      "term": "Table heading",
      "def": "A heading cell in a table, marked with <th>, usually bold and centred."
    },
    {
      "term": "Table cell",
      "def": "One cell in a table, marked with <td>."
    },
    {
      "term": "Caption",
      "def": "A title for a table, marked with <caption>."
    },
    {
      "term": "JPEG",
      "def": "A common image format for photos, with small file sizes."
    },
    {
      "term": "PNG",
      "def": "An image format for graphics and logos, which supports transparency."
    },
    {
      "term": "Broken image",
      "def": "An image that does not load, usually because the file path is wrong."
    },
    {
      "term": "Target",
      "def": "The target attribute on a link: target=\"_blank\" opens the link in a new tab."
    }
  ],
  "video": {
    "title": "Learn HTML5 and CSS3 From Scratch - Full Course",
    "embedUrl": "https://www.youtube.com/embed/mU6anWqZJcc",
    "note": "freeCodeCamp's full HTML and CSS course. Watch the sections on links, images, and tables, and add each one to your two-page site.",
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
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Relative link” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Relative link — A link to a page on your own site using its file name, such as about.html. Step 2: It matters because it is part of: Link between pages on your own site with relative addresses. Step 3: An example from the module is the way relative link shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Absolute link” and “Anchor”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Absolute link — A link using a full web address, such as https://example.com. Step 2: Anchor — The <a> element, which makes a link. Its href attribute holds the address. Step 3: They differ because the first is about absolute link while the second is about anchor; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Link to other websites and to email addresses.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Link to other websites and to email addresses. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Email link” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Email link — A link starting with mailto: that opens the visitor's email program, such as mailto:hello@example.com. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Image file — A picture file, such as cat.jpg or logo.png, shown with the <img> element. Step 2: File path — The location of a file, such as images/cat.jpg, relative to the page that uses it. Step 3: Table — A grid of rows and columns for showing data, built with <table>, <tr>, <th>, and <td>. Step 4: Table row — One row in a table, marked with <tr>. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain when a table is the right choice and when it is not. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Target” mean?",
      "choices": [
        "An image format for graphics and logos, which supports transparency.",
        "The target attribute on a link: target=\"_blank\" opens the link in a new tab.",
        "A link starting with mailto: that opens the visitor's email program, such as mailto:hello@example.com.",
        "One row in a table, marked with <tr>."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Target means: The target attribute on a link: target=\"_blank\" opens the link in a new tab. (a) is the definition of Email link, not of Target. (c) is the definition of Table row, not of Target. (d) is the definition of PNG, not of Target."
    },
    {
      "q": "What does the term “Anchor” mean?",
      "choices": [
        "The <a> element, which makes a link. Its href attribute holds the address.",
        "An image that does not load, usually because the file path is wrong.",
        "A link starting with mailto: that opens the visitor's email program, such as mailto:hello@example.com.",
        "A heading cell in a table, marked with <th>, usually bold and centred."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Anchor means: The <a> element, which makes a link. Its href attribute holds the address. (b) is the definition of Table heading, not of Anchor. (c) is the definition of Broken image, not of Anchor. (d) is the definition of Email link, not of Anchor."
    },
    {
      "q": "Which term means: The location of a file, such as images/cat.jpg, relative to the page that uses it.",
      "choices": [
        "Caption",
        "Image file",
        "Broken image",
        "File path"
      ],
      "answer": 3,
      "explanation": "Correct: (d). File path is the term for: The location of a file, such as images/cat.jpg, relative to the page that uses it. (a) Broken image means An image that does not load, usually because the file path is wrong. (b) Image file means A picture file, such as cat.jpg or logo.png, shown with the <img> element. (c) Caption means A title for a table, marked with <caption>."
    },
    {
      "q": "Which term means: A heading cell in a table, marked with <th>, usually bold and centred.",
      "choices": [
        "Image file",
        "Table cell",
        "Absolute link",
        "Table heading"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Table heading is the term for: A heading cell in a table, marked with <th>, usually bold and centred. (a) Absolute link means A link using a full web address, such as https://example.com. (b) Table cell means One cell in a table, marked with <td>. (c) Image file means A picture file, such as cat.jpg or logo.png, shown with the <img> element."
    },
    {
      "q": "Which of the following is TRUE about JPEG?",
      "choices": [
        "A title for a table, marked with <caption>.",
        "A heading cell in a table, marked with <th>, usually bold and centred.",
        "A common image format for photos, with small file sizes.",
        "A link using a full web address, such as https://example.com."
      ],
      "answer": 2,
      "explanation": "Correct: (c). JPEG: A common image format for photos, with small file sizes. (a) describes Table heading, not JPEG. (b) describes Absolute link, not JPEG. (d) describes Caption, not JPEG."
    },
    {
      "q": "What does the term “Target” mean?",
      "choices": [
        "A picture file, such as cat.jpg or logo.png, shown with the <img> element.",
        "A grid of rows and columns for showing data, built with <table>, <tr>, <th>, and <td>.",
        "The target attribute on a link: target=\"_blank\" opens the link in a new tab.",
        "A link to a page on your own site using its file name, such as about.html."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Target means: The target attribute on a link: target=\"_blank\" opens the link in a new tab. (a) is the definition of Image file, not of Target. (b) is the definition of Table, not of Target. (d) is the definition of Relative link, not of Target."
    },
    {
      "q": "Your page index.html and your photo cat.jpg are in the same folder. Which src is correct?",
      "choices": [
        "src=\"images/cat.jpg\"",
        "src=\"cat.jpg\"",
        "src=\"C:/Users/you/cat.jpg\"",
        "src=\"cat.png\""
      ],
      "answer": 1,
      "explanation": "Correct: (b). When the file sits next to the page, the path is just the file name. (a) is wrong: there is no images folder here. (c) is wrong: a full path from your own computer will not work for anyone else. (d) is wrong: the file is cat.jpg, not cat.png."
    },
    {
      "q": "When should you use an HTML table?",
      "choices": [
        "To lay out a whole page with columns",
        "To show data in rows and columns, such as opening times",
        "To make text bold",
        "To add a picture to a page"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Tables are for tabular data like opening times or prices. (a) is wrong: layout is CSS's job, and tables make layouts hard to change and hard for screen readers. (c) is wrong: bold text is <strong> or CSS. (d) is wrong: pictures use <img>."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Links, Images & Tables: Quick Reference</h3>\n<p><strong>Core idea:</strong> Link between pages on your own site with relative addresses.</p>\n<p><strong>Key terms:</strong> Relative link · Absolute link · Anchor · Email link · Image file · File path · Table · Table row.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Link between pages on your own site with relative addresses.</li>\n<li>Link to other websites and to email addresses.</li>\n<li>Add images with the right file path and useful alt text.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
