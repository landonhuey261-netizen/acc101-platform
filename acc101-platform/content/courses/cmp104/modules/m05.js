// cmp104 - Module 5: Responsive Design: One Page, Every Screen
module.exports = {
  "number": 5,
  "slug": "responsive-design-every-screen",
  "title": "Responsive Design: One Page, Every Screen",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what responsive design means in plain words.",
    "Describe how a page should change between a phone, a tablet, and a computer.",
    "Use a media query to change a layout at a chosen screen width.",
    "Explain why touch targets on a phone must be big enough to tap.",
    "Test a page at phone width and list what breaks."
  ],
  "sections": [
    {
      "heading": "One Page, Many Screens",
      "html": "<p>People open the same app on a phone held in one hand, a tablet on a sofa, and a wide computer monitor. Responsive design means the page reshapes itself for each one: one column on a phone, two or three on a computer, pictures that shrink instead of overflowing, and text that stays readable without pinching and zooming. You build one page, and it adapts.</p>\n<p>The alternative — a separate page for phones and another for computers — doubles your work and breaks every time a new screen size appears. Responsive design is the standard way modern apps are built, and it is mostly a handful of CSS habits rather than a separate skill.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Build one page that adapts. Do not build a phone page and a computer page.</div></p>\n"
    },
    {
      "heading": "Flexible Widths and Pictures",
      "html": "<p>The first habit is to stop fixing widths in pixels. A box that is <code>width: 900px;</code> overflows a 360-pixel phone screen. A box that is <code>max-width: 900px; width: 100%;</code> fills a phone and stops growing on a computer. Pictures get the same treatment: <code>img { max-width: 100%; }</code> means a picture can never be wider than its container, so it shrinks instead of breaking the page.</p>\n<p>Text should wrap naturally and stay big enough to read: body text around 16 pixels is a good floor. If you have to zoom to read it, the page is not responsive yet.</p>\n"
    },
    {
      "heading": "Media Queries: Rules That Switch On",
      "html": "<p>A media query is a CSS rule that only applies when the screen meets a condition, usually its width. For example: <pre><code>@media (max-width: 600px) {\n  .cards { flex-direction: column; }\n}</code></pre> On screens up to 600 pixels wide — most phones — the card row becomes a single column. On wider screens the normal row rule applies. You write the desktop layout first, then add one or two breakpoints where it starts to look squeezed.</p>\n<p>Pick breakpoints from your content, not from a list of phone models. Shrink the browser window slowly; when the layout starts to look wrong, that width is your breakpoint. Two or three breakpoints are usually enough for a whole app.</p>\n"
    },
    {
      "heading": "Designing for Fingers, Not Mice",
      "html": "<p>A mouse can click a tiny link. A finger cannot. Buttons and links on a phone need to be at least about 44 pixels tall, with space around them so you do not tap the wrong one. Forms should use the right keyboard: a phone number box should open the number keyboard, an email box the email keyboard. These small choices are the difference between an app people enjoy and one they abandon.</p>\n<p>Test on a real phone whenever you can. The browser's phone preview is useful, but your thumb on a real screen finds problems a preview never shows: buttons too close together, text hidden behind a keyboard, a menu that is hard to reach with one hand.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Responsive pages reshape themselves for phones, tablets, and computers.</li>\n<li>Use flexible widths (max-width, percentages) instead of fixed pixel widths.</li>\n<li>Media queries switch layout rules on at chosen screen widths.</li>\n<li>Touch targets need to be big — about 44 pixels tall — with space around them.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Fixing widths in pixels so the page overflows a phone screen.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Adding a breakpoint for every phone model instead of two or three for your own content.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Responsive design",
      "def": "Building one page that reshapes itself for phones, tablets, and computers."
    },
    {
      "term": "Breakpoint",
      "def": "A screen width at which the layout changes, set with a media query."
    },
    {
      "term": "Media query",
      "def": "A CSS rule that only applies when the screen meets a condition, such as its width."
    },
    {
      "term": "Viewport",
      "def": "The visible area of a web page on a device's screen."
    },
    {
      "term": "Flexible width",
      "def": "A width set as a percentage or a maximum, so an element grows or shrinks with the screen."
    },
    {
      "term": "Flex direction",
      "def": "Whether flexbox lines items up in a row or a column."
    },
    {
      "term": "Touch target",
      "def": "The tappable area of a button or link; on a phone it should be big enough for a finger."
    },
    {
      "term": "Mobile-first",
      "def": "Designing for the phone screen first, then adding layout for wider screens."
    },
    {
      "term": "Overflow",
      "def": "Content spilling outside its container, often sideways off a phone screen."
    },
    {
      "term": "Zoom",
      "def": "Making a page bigger on screen; a responsive page should not need it to be readable."
    },
    {
      "term": "Column layout",
      "def": "Stacking content top to bottom, the natural shape for a narrow phone screen."
    },
    {
      "term": "Row layout",
      "def": "Placing content side by side, the natural shape for a wide computer screen."
    },
    {
      "term": "Screen reader",
      "def": "Software that reads a page aloud for people who cannot see it."
    },
    {
      "term": "Keyboard",
      "def": "On a phone, the on-screen keys that appear when you tap an input box."
    },
    {
      "term": "Preview",
      "def": "A browser tool that shows how a page looks at a chosen screen size."
    }
  ],
  "video": {
    "title": "17: How to Make a Website Responsive | Learn HTML and CSS | Full Course For Beginners",
    "embedUrl": "https://www.youtube.com/embed/ZYV6dYtz4HA",
    "note": "Watch a page reshape as the screen narrows. Note the exact widths where the layout changes — those are the breakpoints.",
    "more": [
      {
        "title": "CSS in 5 minutes",
        "url": "https://www.youtube.com/watch?v=Z4pCqK-V_Wo"
      },
      {
        "title": "Are you writing responsive CSS the wrong way?",
        "url": "https://www.youtube.com/watch?v=0ohtVzCSHqs"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Responsive design” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Responsive design — Building one page that reshapes itself for phones, tablets, and computers. Step 2: It matters because it is part of: Explain what responsive design means in plain words. Step 3: An example from the module is the way responsive design shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Breakpoint” and “Media query”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Breakpoint — A screen width at which the layout changes, set with a media query. Step 2: Media query — A CSS rule that only applies when the screen meets a condition, such as its width. Step 3: They differ because the first is about breakpoint while the second is about media query; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Describe how a page should change between a phone, a tablet, and a computer.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Describe how a page should change between a phone, a tablet, and a computer. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Viewport” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Viewport — The visible area of a web page on a device's screen. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Flexible width — A width set as a percentage or a maximum, so an element grows or shrinks with the screen. Step 2: Flex direction — Whether flexbox lines items up in a row or a column. Step 3: Touch target — The tappable area of a button or link; on a phone it should be big enough for a finger. Step 4: Breakpoint — A screen width at which the layout changes, set with a media query. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Use a media query to change a layout at a chosen screen width. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Responsive design” mean?",
      "choices": [
        "Building one page that reshapes itself for phones, tablets, and computers.",
        "A screen width at which the layout changes, set with a media query.",
        "A CSS rule that only applies when the screen meets a condition, such as its width.",
        "The visible area of a web page on a device's screen."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Responsive design means: Building one page that reshapes itself for phones, tablets, and computers. (b) is the definition of Breakpoint, not of Responsive design. (c) is the definition of Media query, not of Responsive design. (d) is the definition of Viewport, not of Responsive design."
    },
    {
      "q": "What does the term “Breakpoint” mean?",
      "choices": [
        "Building one page that reshapes itself for phones, tablets, and computers.",
        "A screen width at which the layout changes, set with a media query.",
        "A CSS rule that only applies when the screen meets a condition, such as its width.",
        "The visible area of a web page on a device's screen."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Breakpoint means: A screen width at which the layout changes, set with a media query. (a) is the definition of Responsive design, not of Breakpoint. (c) is the definition of Media query, not of Breakpoint. (d) is the definition of Viewport, not of Breakpoint."
    },
    {
      "q": "What does the term “Media query” mean?",
      "choices": [
        "Building one page that reshapes itself for phones, tablets, and computers.",
        "A screen width at which the layout changes, set with a media query.",
        "A CSS rule that only applies when the screen meets a condition, such as its width.",
        "The visible area of a web page on a device's screen."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Media query means: A CSS rule that only applies when the screen meets a condition, such as its width. (a) is the definition of Responsive design, not of Media query. (b) is the definition of Breakpoint, not of Media query. (d) is the definition of Viewport, not of Media query."
    },
    {
      "q": "What does the term “Viewport” mean?",
      "choices": [
        "Building one page that reshapes itself for phones, tablets, and computers.",
        "A screen width at which the layout changes, set with a media query.",
        "A CSS rule that only applies when the screen meets a condition, such as its width.",
        "The visible area of a web page on a device's screen."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Viewport means: The visible area of a web page on a device's screen. (a) is the definition of Responsive design, not of Viewport. (b) is the definition of Breakpoint, not of Viewport. (c) is the definition of Media query, not of Viewport."
    },
    {
      "q": "Which term means: A width set as a percentage or a maximum, so an element grows or shrinks with the screen.",
      "choices": [
        "Flexible width",
        "Responsive design",
        "Breakpoint",
        "Media query"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Flexible width is the term for: A width set as a percentage or a maximum, so an element grows or shrinks with the screen. (b) Responsive design means Building one page that reshapes itself for phones, tablets, and computers. (c) Breakpoint means A screen width at which the layout changes, set with a media query. (d) Media query means A CSS rule that only applies when the screen meets a condition, such as its width."
    },
    {
      "q": "Which term means: Whether flexbox lines items up in a row or a column.",
      "choices": [
        "Responsive design",
        "Flex direction",
        "Breakpoint",
        "Media query"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Flex direction is the term for: Whether flexbox lines items up in a row or a column. (a) Responsive design means Building one page that reshapes itself for phones, tablets, and computers. (c) Breakpoint means A screen width at which the layout changes, set with a media query. (d) Media query means A CSS rule that only applies when the screen meets a condition, such as its width."
    },
    {
      "q": "Which term means: The tappable area of a button or link; on a phone it should be big enough for a finger.",
      "choices": [
        "Responsive design",
        "Breakpoint",
        "Touch target",
        "Media query"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Touch target is the term for: The tappable area of a button or link; on a phone it should be big enough for a finger. (a) Responsive design means Building one page that reshapes itself for phones, tablets, and computers. (b) Breakpoint means A screen width at which the layout changes, set with a media query. (d) Media query means A CSS rule that only applies when the screen meets a condition, such as its width."
    },
    {
      "q": "Which term means: Designing for the phone screen first, then adding layout for wider screens.",
      "choices": [
        "Responsive design",
        "Breakpoint",
        "Media query",
        "Mobile-first"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Mobile-first is the term for: Designing for the phone screen first, then adding layout for wider screens. (a) Responsive design means Building one page that reshapes itself for phones, tablets, and computers. (b) Breakpoint means A screen width at which the layout changes, set with a media query. (c) Media query means A CSS rule that only applies when the screen meets a condition, such as its width."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Responsive Design: One Page, Every Screen: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what responsive design means in plain words.</p>\n<p><strong>Key terms:</strong> Responsive design · Breakpoint · Media query · Viewport · Flexible width · Flex direction · Touch target · Mobile-first.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what responsive design means in plain words.</li>\n<li>Describe how a page should change between a phone, a tablet, and a computer.</li>\n<li>Use a media query to change a layout at a chosen screen width.</li>\n</ul>\n<p><strong>Watch out:</strong> Do not skip the stranger test: open your own app as a brand-new user before you call it done.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
