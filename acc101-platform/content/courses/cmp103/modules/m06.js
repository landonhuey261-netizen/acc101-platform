// cmp103 - Module 6: The Box Model & Selectors
module.exports = {
  "number": 6,
  "slug": "box-model-and-selectors",
  "title": "The Box Model & Selectors",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the box model: content, padding, border, margin.",
    "Use classes and ids to target specific elements.",
    "Style links differently in their normal, hover, and visited states.",
    "Use descendant selectors to target elements inside other elements.",
    "Explain the difference between block and inline elements."
  ],
  "sections": [
    {
      "heading": "Every Element Is a Box",
      "html": "<p>CSS sees every element as a box, made of four layers from the inside out: the content (the text or image itself), the padding (space between the content and the border), the border (the line around the padding), and the margin (space outside the border, between this box and the next one). When two elements look too close together, it is usually the margin; when text touches the edge of its own box, it is usually the padding.</p>\n<p>A card is the classic example: </p>\n<pre>.card {\n  background-color: white;\n  padding: 16px;\n  border: 1px solid gray;\n}</pre>\n<p> The background is white, the padding gives the text 16 pixels of breathing room inside the card, and the border draws a thin grey line around it. Change the padding to 0 and the text touches the border; change the margin and the card moves away from its neighbours.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> The box model, inside out: content, padding, border, margin. Padding is space inside the box; margin is space outside it.</div></p>\n"
    },
    {
      "heading": "Classes and IDs: Targeting Exactly What You Mean",
      "html": "<p>A class is a label you put on elements so CSS can target them: class=\"card\" on a div, styled with .card in CSS — a dot before the name. Many elements can share one class, which is the point: every card on the site gets the same styling from one rule. An id is different: id=\"main\" is unique, used once per page, and styled with #main in CSS — a hash before the name.</p>\n<p>Use classes for anything that repeats (cards, buttons, warnings) and ids for one-off parts of the page (the main content area, the navigation). A common beginner mistake is using an id for something that appears twice — the browser will style only the first one, and the page will look wrong in a confusing way.</p>\n"
    },
    {
      "heading": "Links in Different States",
      "html": "<p>Links change with what the visitor does, and CSS can style each state with pseudo-classes: a:link is a normal unvisited link, a:visited is one the visitor has already been to, a:hover is the link the mouse is over right now, and a:active is the link being clicked. The hover state is the most useful: a:hover { text-decoration: underline; } or a colour change tells the visitor “this is clickable, and you are on it”.</p>\n<p>The order matters: write them in the order link, visited, hover, active (remember it as LoVe HAte: Link, Visited, Hover, Active). If hover comes before visited, the visited rule can override the hover, and the link will not change colour when you hover over it.</p>\n"
    },
    {
      "heading": "Block and Inline: How Elements Take Space",
      "html": "<p>Block elements — paragraphs, headings, lists, divs — take the full width available and start on a new line. Inline elements — links, <strong>, <span> — sit inside a line of text and take only as much width as they need. A paragraph is a block; a link inside it is inline.</p>\n<p>This matters when you style things: width and height work on block elements but are mostly ignored on inline ones, and top and bottom margins on inline elements do not push other lines away. If a style seems to do nothing, check whether the element is inline — setting display: block on it, or display: inline-block, usually fixes it. A descendant selector targets elements inside other elements: nav a styles only the links inside a nav, not every link on the page.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>The box model is content, padding, border, margin — inside out.</li><li>Classes (.card) can repeat; ids (#main) are unique, once per page.</li><li>Link states are :link, :visited, :hover, :active — in that order.</li><li>Block elements take the full width and start a new line; inline elements sit inside a line.</li><li>Descendant selectors (nav a) target elements inside other elements.</li></ul></p>\n<p><strong>Common mistake:</strong> Mixing up padding and margin. Padding is space inside the box; margin is space outside it.</p>\n<p><strong>Common mistake:</strong> Using an id on two elements. An id must be unique — use a class when something repeats.</p>\n<p><strong>Ready check:</strong> If you can make a card with padding, a border, and a margin, style it with a class, and make its links change colour on hover, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Box model",
      "def": "How CSS sees every element: a box made of content, padding, border, and margin, from the inside out."
    },
    {
      "term": "Content",
      "def": "The innermost part of the box: the actual text or image."
    },
    {
      "term": "Padding",
      "def": "The space between the content and the border, inside the box."
    },
    {
      "term": "Border",
      "def": "The line around the padding and content."
    },
    {
      "term": "Margin",
      "def": "The space outside the border, between this box and the next one."
    },
    {
      "term": "Class",
      "def": "A label you put on elements with class=\"card\" so CSS can target them with .card."
    },
    {
      "term": "ID",
      "def": "A unique label you put on one element with id=\"main\" so CSS can target it with #main. Each id may be used once per page."
    },
    {
      "term": "Descendant selector",
      "def": "A selector that targets elements inside other elements, such as nav a (links inside a nav)."
    },
    {
      "term": "Pseudo-class",
      "def": "A selector for an element in a particular state, such as a:hover for a link the mouse is over."
    },
    {
      "term": "hover",
      "def": "The state of an element when the mouse pointer is over it."
    },
    {
      "term": "Block element",
      "def": "An element that takes the full width available and starts on a new line, such as a paragraph or a heading."
    },
    {
      "term": "Inline element",
      "def": "An element that sits inside a line of text and only takes as much width as it needs, such as a link or <strong>."
    },
    {
      "term": "Width",
      "def": "The width of an element's content box, set with the width property."
    },
    {
      "term": "Background colour",
      "def": "The colour behind an element's content, set with background-color."
    },
    {
      "term": "Border radius",
      "def": "Rounded corners on a box, set with border-radius."
    }
  ],
  "video": {
    "title": "CSS Tutorial - Zero to Hero (Complete Course)",
    "embedUrl": "https://www.youtube.com/embed/1Rs2ND1ryYc",
    "note": "freeCodeCamp's complete CSS course. Watch the sections on the box model, classes, ids, and selectors, and apply each one to your own site.",
    "more": [
      {
        "title": "CSS Crash Course For Absolute Beginners",
        "url": "https://www.youtube.com/watch?v=yfoY53QXEnI"
      },
      {
        "title": "CSS Tutorial – Full Course for Beginners",
        "url": "https://www.youtube.com/watch?v=OXGznpKZ_sA"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Box model” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Box model — How CSS sees every element: a box made of content, padding, border, and margin, from the inside out. Step 2: It matters because it is part of: Explain the box model: content, padding, border, margin. Step 3: An example from the module is the way box model shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Content” and “Padding”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Content — The innermost part of the box: the actual text or image. Step 2: Padding — The space between the content and the border, inside the box. Step 3: They differ because the first is about content while the second is about padding; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Use classes and ids to target specific elements.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Use classes and ids to target specific elements. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Border” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Border — The line around the padding and content. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Margin — The space outside the border, between this box and the next one. Step 2: Class — A label you put on elements with class=\"card\" so CSS can target them with .card. Step 3: ID — A unique label you put on one element with id=\"main\" so CSS can target it with #main. Each id may be used once per page. Step 4: Descendant selector — A selector that targets elements inside other elements, such as nav a (links inside a nav). (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain the difference between block and inline elements. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Border” mean?",
      "choices": [
        "The space outside the border, between this box and the next one.",
        "A unique label you put on one element with id=\"main\" so CSS can target it with #main. Each id may be used once per page.",
        "The line around the padding and content.",
        "The state of an element when the mouse pointer is over it."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Border means: The line around the padding and content. (a) is the definition of Margin, not of Border. (b) is the definition of hover, not of Border. (d) is the definition of ID, not of Border."
    },
    {
      "q": "What does the term “ID” mean?",
      "choices": [
        "The space between the content and the border, inside the box.",
        "The space outside the border, between this box and the next one.",
        "An element that sits inside a line of text and only takes as much width as it needs, such as a link or <strong>.",
        "A unique label you put on one element with id=\"main\" so CSS can target it with #main. Each id may be used once per page."
      ],
      "answer": 3,
      "explanation": "Correct: (d). ID means: A unique label you put on one element with id=\"main\" so CSS can target it with #main. Each id may be used once per page. (a) is the definition of Inline element, not of ID. (b) is the definition of Margin, not of ID. (c) is the definition of Padding, not of ID."
    },
    {
      "q": "Which term means: The state of an element when the mouse pointer is over it.",
      "choices": [
        "Content",
        "Padding",
        "hover",
        "Class"
      ],
      "answer": 2,
      "explanation": "Correct: (c). hover is the term for: The state of an element when the mouse pointer is over it. (a) Padding means The space between the content and the border, inside the box. (b) Class means A label you put on elements with class=\"card\" so CSS can target them with .card. (d) Content means The innermost part of the box: the actual text or image."
    },
    {
      "q": "Which term means: The width of an element's content box, set with the width property.",
      "choices": [
        "ID",
        "Pseudo-class",
        "Width",
        "hover"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Width is the term for: The width of an element's content box, set with the width property. (a) ID means A unique label you put on one element with id=\"main\" so CSS can target it with #main. Each id may be used once per page. (b) Pseudo-class means A selector for an element in a particular state, such as a:hover for a link the mouse is over. (d) hover means The state of an element when the mouse pointer is over it."
    },
    {
      "q": "Which of the following is TRUE about Box model?",
      "choices": [
        "The space between the content and the border, inside the box.",
        "How CSS sees every element: a box made of content, padding, border, and margin, from the inside out.",
        "A unique label you put on one element with id=\"main\" so CSS can target it with #main. Each id may be used once per page.",
        "The space outside the border, between this box and the next one."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Box model: How CSS sees every element: a box made of content, padding, border, and margin, from the inside out. (a) describes Margin, not Box model. (c) describes Padding, not Box model. (d) describes ID, not Box model."
    },
    {
      "q": "What does the term “Border” mean?",
      "choices": [
        "An element that sits inside a line of text and only takes as much width as it needs, such as a link or <strong>.",
        "The innermost part of the box: the actual text or image.",
        "The line around the padding and content.",
        "The colour behind an element's content, set with background-color."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Border means: The line around the padding and content. (a) is the definition of Inline element, not of Border. (b) is the definition of Content, not of Border. (d) is the definition of Background colour, not of Border."
    },
    {
      "q": "In the box model, what is padding?",
      "choices": [
        "The space outside the border, between this box and the next one",
        "The space between the content and the border, inside the box",
        "The line around the content",
        "The text itself"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Padding is the space between the content and the border, inside the box. (a) describes margin. (c) describes the border. (d) describes the content."
    },
    {
      "q": "What is the difference between a class and an id in HTML and CSS?",
      "choices": [
        "A class is unique and used once; an id can be used on many elements",
        "A class can be used on many elements; an id is unique and used once per page",
        "Classes are for text and ids are for images",
        "There is no difference"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Classes repeat (styled with .name); ids are unique (styled with #name). (a) has it backwards. (c) is wrong: both can be used on any element. (d) is wrong: the uniqueness rule is the whole difference."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — The Box Model & Selectors: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain the box model: content, padding, border, margin.</p>\n<p><strong>Key terms:</strong> Box model · Content · Padding · Border · Margin · Class · ID · Descendant selector.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain the box model: content, padding, border, margin.</li>\n<li>Use classes and ids to target specific elements.</li>\n<li>Style links differently in their normal, hover, and visited states.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
