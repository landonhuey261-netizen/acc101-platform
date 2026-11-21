// cmp104 - Module 4: CSS: Making Pages Look Good
module.exports = {
  "number": 4,
  "slug": "css-making-pages-look-good",
  "title": "CSS: Making Pages Look Good",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what CSS does and how it connects to HTML.",
    "Change colours, fonts, and sizes with CSS rules.",
    "Explain the box model: content, padding, border, and margin.",
    "Lay out a page with flexbox in plain words.",
    "Fix a simple styling mistake using the browser's developer tools."
  ],
  "sections": [
    {
      "heading": "CSS Is the Clothing",
      "html": "<p>If HTML is the skeleton of a page, CSS (Cascading Style Sheets) is the clothing: colours, fonts, spacing, and layout. A CSS rule has two parts: a selector that picks which elements it applies to, and declarations that say what to change. For example, <code>h1 { color: teal; }</code> picks every main heading and makes it teal.</p>\n<p>CSS can live in three places: inside a tag, in a <code>&lt;style&gt;</code> block at the top of the page, or in a separate <code>.css</code> file linked to the page. The separate file is the tidy way: one file styles every page of your app, so changing one line changes the whole app.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> One CSS file can style every page of an app. Change it once, and the whole app changes.</div></p>\n"
    },
    {
      "heading": "Colours, Fonts, and Sizes",
      "html": "<p>Colours in CSS are usually written as names (<code>teal</code>), hex codes (<code>#008080</code>), or rgb values. Fonts are set with <code>font-family</code>, and it is wise to list fallbacks: <code>font-family: Arial, sans-serif;</code> means “use Arial, or any plain font if Arial is missing”. Sizes use pixels (<code>px</code>) for fixed sizes or <code>rem</code> for sizes that grow with the user's settings.</p>\n<p>A little restraint goes a long way. Pick two or three colours and two fonts for your whole app, and use them everywhere. Apps that look calm and consistent feel professional; apps with a different colour on every screen feel unfinished, however good the code is.</p>\n"
    },
    {
      "heading": "The Box Model",
      "html": "<p>Every element on a page sits inside an invisible box, and the box has four layers. In the middle is the content — the words or picture. Around it is padding, space inside the box. Around that is the border, a line you can see. Outside it is the margin, space between this box and its neighbours. Most “why is there a gap here?” problems are really a padding or margin you forgot.</p>\n<p>Try it: give a paragraph a background colour, then add padding, then a border, then a margin, refreshing after each step. Seeing the layers appear one at a time makes the box model click in a way reading about it never does.</p>\n"
    },
    {
      "heading": "Laying Things Out With Flexbox",
      "html": "<p>Old web pages stacked everything in one column. Modern pages use flexbox: you mark a container as <code>display: flex;</code> and its children line up in a row or a column, with even gaps, and they can wrap to the next line on a small screen. A navigation bar, a row of cards, and a centred button are all one-line flexbox jobs.</p>\n<p>A simple card row looks like this: <pre><code>.cards { display: flex; gap: 16px; }\n.card { padding: 16px; border: 1px solid #ccc; }</code></pre> The browser does the measuring. You say “line these up with gaps”, and flexbox works out the widths. When a layout fights you, check two things: is the parent the flex container, and did you mean row or column?</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>CSS rules pick elements with a selector and change them with declarations.</li>\n<li>Keep one shared .css file and a small set of colours and fonts.</li>\n<li>Every element is a box: content, padding, border, margin.</li>\n<li>Flexbox lines things up in rows or columns with even gaps.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Styling every page separately instead of using one shared CSS file.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Forgetting which layer of the box model is making the gap — check padding and margin first.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "CSS",
      "def": "The language that gives a web page its looks: colours, fonts, spacing, and layout."
    },
    {
      "term": "Selector",
      "def": "The part of a CSS rule that picks which elements it applies to."
    },
    {
      "term": "Declaration",
      "def": "One style change inside a CSS rule, such as color: teal."
    },
    {
      "term": "Rule",
      "def": "A selector plus its declarations, taken together."
    },
    {
      "term": "Colour",
      "def": "A style value for text or backgrounds, written as a name, hex code, or rgb value."
    },
    {
      "term": "Font",
      "def": "The style of lettering used for text on a page."
    },
    {
      "term": "Box model",
      "def": "The four layers around every element: content, padding, border, and margin."
    },
    {
      "term": "Padding",
      "def": "Space inside an element's box, between the content and the border."
    },
    {
      "term": "Margin",
      "def": "Space outside an element's box, between it and its neighbours."
    },
    {
      "term": "Border",
      "def": "A visible line around an element's box."
    },
    {
      "term": "Flexbox",
      "def": "A CSS layout method that lines elements up in a row or column with even gaps."
    },
    {
      "term": "Class",
      "def": "A label you add to HTML elements so one CSS rule can style them all."
    },
    {
      "term": "Stylesheet",
      "def": "A separate .css file holding all the style rules for a site or app."
    },
    {
      "term": "Developer tools",
      "def": "Built-in browser tools that let you inspect a page and try style changes live."
    },
    {
      "term": "Pixel",
      "def": "A single dot of screen; px is the common unit for fixed sizes in CSS."
    }
  ],
  "video": {
    "title": "A practical guide to responsive web design",
    "embedUrl": "https://www.youtube.com/embed/x4u1yp3Msao",
    "note": "Watch how one CSS file changes a whole page. Try changing one colour in the example and see the whole page follow.",
    "more": [
      {
        "title": "5 CSS Tips & Tricks for better Responsive Web Design",
        "url": "https://www.youtube.com/watch?v=2IV08sP9m3U"
      },
      {
        "title": "Master Responsive CSS Media Queries in easy way",
        "url": "https://www.youtube.com/watch?v=n9yI6fjkrfE"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “CSS” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: CSS — The language that gives a web page its looks: colours, fonts, spacing, and layout. Step 2: It matters because it is part of: Explain what CSS does and how it connects to HTML. Step 3: An example from the module is the way css shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Selector” and “Declaration”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Selector — The part of a CSS rule that picks which elements it applies to. Step 2: Declaration — One style change inside a CSS rule, such as color: teal. Step 3: They differ because the first is about selector while the second is about declaration; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Change colours, fonts, and sizes with CSS rules.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Change colours, fonts, and sizes with CSS rules. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Rule” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Rule — A selector plus its declarations, taken together. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Colour — A style value for text or backgrounds, written as a name, hex code, or rgb value. Step 2: Font — The style of lettering used for text on a page. Step 3: Box model — The four layers around every element: content, padding, border, and margin. Step 4: Selector — The part of a CSS rule that picks which elements it applies to. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain the box model: content, padding, border, and margin. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “CSS” mean?",
      "choices": [
        "The language that gives a web page its looks: colours, fonts, spacing, and layout.",
        "The part of a CSS rule that picks which elements it applies to.",
        "One style change inside a CSS rule, such as color: teal.",
        "A selector plus its declarations, taken together."
      ],
      "answer": 0,
      "explanation": "Correct: (a). CSS means: The language that gives a web page its looks: colours, fonts, spacing, and layout. (b) is the definition of Selector, not of CSS. (c) is the definition of Declaration, not of CSS. (d) is the definition of Rule, not of CSS."
    },
    {
      "q": "What does the term “Selector” mean?",
      "choices": [
        "The language that gives a web page its looks: colours, fonts, spacing, and layout.",
        "The part of a CSS rule that picks which elements it applies to.",
        "One style change inside a CSS rule, such as color: teal.",
        "A selector plus its declarations, taken together."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Selector means: The part of a CSS rule that picks which elements it applies to. (a) is the definition of CSS, not of Selector. (c) is the definition of Declaration, not of Selector. (d) is the definition of Rule, not of Selector."
    },
    {
      "q": "What does the term “Declaration” mean?",
      "choices": [
        "The language that gives a web page its looks: colours, fonts, spacing, and layout.",
        "The part of a CSS rule that picks which elements it applies to.",
        "One style change inside a CSS rule, such as color: teal.",
        "A selector plus its declarations, taken together."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Declaration means: One style change inside a CSS rule, such as color: teal. (a) is the definition of CSS, not of Declaration. (b) is the definition of Selector, not of Declaration. (d) is the definition of Rule, not of Declaration."
    },
    {
      "q": "What does the term “Rule” mean?",
      "choices": [
        "The language that gives a web page its looks: colours, fonts, spacing, and layout.",
        "The part of a CSS rule that picks which elements it applies to.",
        "One style change inside a CSS rule, such as color: teal.",
        "A selector plus its declarations, taken together."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Rule means: A selector plus its declarations, taken together. (a) is the definition of CSS, not of Rule. (b) is the definition of Selector, not of Rule. (c) is the definition of Declaration, not of Rule."
    },
    {
      "q": "Which term means: A style value for text or backgrounds, written as a name, hex code, or rgb value.",
      "choices": [
        "Colour",
        "CSS",
        "Selector",
        "Declaration"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Colour is the term for: A style value for text or backgrounds, written as a name, hex code, or rgb value. (b) CSS means The language that gives a web page its looks: colours, fonts, spacing, and layout. (c) Selector means The part of a CSS rule that picks which elements it applies to. (d) Declaration means One style change inside a CSS rule, such as color: teal."
    },
    {
      "q": "Which term means: The style of lettering used for text on a page.",
      "choices": [
        "CSS",
        "Font",
        "Selector",
        "Declaration"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Font is the term for: The style of lettering used for text on a page. (a) CSS means The language that gives a web page its looks: colours, fonts, spacing, and layout. (c) Selector means The part of a CSS rule that picks which elements it applies to. (d) Declaration means One style change inside a CSS rule, such as color: teal."
    },
    {
      "q": "Which term means: The four layers around every element: content, padding, border, and margin.",
      "choices": [
        "CSS",
        "Selector",
        "Box model",
        "Declaration"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Box model is the term for: The four layers around every element: content, padding, border, and margin. (a) CSS means The language that gives a web page its looks: colours, fonts, spacing, and layout. (b) Selector means The part of a CSS rule that picks which elements it applies to. (d) Declaration means One style change inside a CSS rule, such as color: teal."
    },
    {
      "q": "Which term means: Space inside an element's box, between the content and the border.",
      "choices": [
        "CSS",
        "Selector",
        "Declaration",
        "Padding"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Padding is the term for: Space inside an element's box, between the content and the border. (a) CSS means The language that gives a web page its looks: colours, fonts, spacing, and layout. (b) Selector means The part of a CSS rule that picks which elements it applies to. (c) Declaration means One style change inside a CSS rule, such as color: teal."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — CSS: Making Pages Look Good: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what CSS does and how it connects to HTML.</p>\n<p><strong>Key terms:</strong> CSS · Selector · Declaration · Rule · Colour · Font · Box model · Padding.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what CSS does and how it connects to HTML.</li>\n<li>Change colours, fonts, and sizes with CSS rules.</li>\n<li>Explain the box model: content, padding, border, and margin.</li>\n</ul>\n<p><strong>Watch out:</strong> Do not skip the stranger test: open your own app as a brand-new user before you call it done.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
