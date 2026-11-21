// cmp103 - Module 8: Responsive Design
module.exports = {
  "number": 8,
  "slug": "responsive-design",
  "title": "Responsive Design",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what responsive design is and why it matters.",
    "Add the viewport meta tag to a page.",
    "Use fluid widths and flexible images so pages fit any screen.",
    "Write a media query that changes a layout on small screens.",
    "Test a page at phone, tablet, and desktop widths."
  ],
  "sections": [
    {
      "heading": "Why Responsive Design Matters",
      "html": "<p>More than half of all web visits now happen on a phone. A page designed only for a desktop is painful on a phone: tiny text, sideways scrolling, buttons too small to tap. Responsive design means building a page that adapts: a row of three cards on a desktop becomes one card per row on a phone, and the navigation bar becomes a simple stacked list.</p>\n<p>The goal is one page that works everywhere, not a separate mobile site. You build it with three tools: the viewport meta tag, fluid widths, and media queries. This module teaches all three.</p>\n"
    },
    {
      "heading": "The Viewport Meta Tag",
      "html": "<p>Phones pretend to be wider than they are: without any instruction, a phone browser shows a desktop-width page shrunk down to fit, with tiny unreadable text. The fix is one line in the head of every page: <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">. It tells the phone “this page is as wide as your screen”, and the page renders at a readable size.</p>\n<p>Every page you build from now on should have this line. Without it, none of the responsive work in the rest of this module will behave properly on a real phone.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Every page needs <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> in its head. Without it, phones shrink your page to desktop width and everything looks tiny.</div></p>\n"
    },
    {
      "heading": "Fluid Widths and Flexible Images",
      "html": "<p>Fixed pixel widths break on small screens: a 900-pixel-wide box overflows a 375-pixel-wide phone screen. Fluid widths use percentages instead: width: 100% means “as wide as the container”, whatever the screen is. A common pattern is a page container with max-width: 900px and margin: 0 auto — it is at most 900 pixels wide on a desktop, and fills the screen on a phone, centred.</p>\n<p>Images need the same treatment: img { max-width: 100%; height: auto; } means an image never overflows its container and keeps its shape. Without it, a wide photo forces the whole page sideways — the horizontal scroll that tells you a layout is broken.</p>\n"
    },
    {
      "heading": "Media Queries: Changing the Layout",
      "html": "<p>A media query is a CSS rule that applies only when the screen meets a condition, usually a width: </p>\n<pre>@media (max-width: 600px) {\n  .row {\n    flex-direction: column;\n  }\n}</pre>\n<p> This says: when the screen is 600 pixels wide or less, make .row a column instead of a row. The cards stack one above the other on a phone, and sit side by side on a desktop. 600px and 900px are common breakpoints: phones below 600, tablets up to 900, desktops above.</p>\n<p>Mobile-first means writing the small-screen layout first, then adding media queries for bigger screens (min-width). Desktop-first means the opposite. Either works; mobile-first is the more common modern habit, because the small screen forces you to decide what matters most. Test your page by dragging the browser window narrower, and by using the device toolbar in developer tools (right-click, Inspect, then the phone icon).</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Responsive design means one page that works on phones, tablets, and desktops.</li><li>Every page needs the viewport meta tag in its head.</li><li>Use fluid widths (percentages) and max-width instead of fixed pixel widths.</li><li>Images need max-width: 100% so they never overflow.</li><li>Media queries change the layout at breakpoints, such as 600px.</li></ul></p>\n<p><strong>Common mistake:</strong> Forgetting the viewport meta tag. Without it, phones shrink the page and nothing else works properly.</p>\n<p><strong>Common mistake:</strong> Fixed pixel widths on containers. A 900px box overflows a 375px phone screen — use max-width instead.</p>\n<p><strong>Ready check:</strong> If your site has the viewport tag, a container with max-width, flexible images, and a media query that stacks the cards on a small screen, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Responsive design",
      "def": "Building a page so it adapts to different screen sizes, from phones to desktops."
    },
    {
      "term": "Viewport",
      "def": "The visible area of a web page in the browser. The viewport meta tag tells phones how wide the page is."
    },
    {
      "term": "Media query",
      "def": "A CSS rule that applies only when the screen meets a condition, such as @media (max-width: 600px)."
    },
    {
      "term": "Breakpoint",
      "def": "A screen width where a layout changes, such as 600px for phones and 900px for tablets."
    },
    {
      "term": "Fluid width",
      "def": "A width in percentages rather than pixels, so an element grows and shrinks with its container."
    },
    {
      "term": "max-width",
      "def": "A CSS property that sets the widest an element may be, such as max-width: 900px on a page container."
    },
    {
      "term": "Mobile-first",
      "def": "Designing for the small screen first, then adding rules for bigger screens."
    },
    {
      "term": "Flexible image",
      "def": "An image with max-width: 100%, so it never overflows its container."
    },
    {
      "term": "Pixel",
      "def": "A single dot on a screen. Screen widths are measured in pixels, such as 600px."
    },
    {
      "term": "Desktop-first",
      "def": "Designing for the big screen first, then adding rules for smaller screens. The opposite of mobile-first."
    },
    {
      "term": "Horizontal scroll",
      "def": "When a page is wider than the screen and the visitor must scroll sideways — a sign the layout is broken on that screen."
    },
    {
      "term": "Touch target",
      "def": "A button or link big enough to tap comfortably with a finger — at least about 44 pixels tall."
    },
    {
      "term": "Stack",
      "def": "When a row of items becomes a column on a small screen, one item above the next."
    },
    {
      "term": "Device toolbar",
      "def": "The browser tool (in developer tools) that shows your page at phone and tablet sizes."
    },
    {
      "term": "rem",
      "def": "A CSS unit based on the root font size; 1rem is usually 16 pixels."
    }
  ],
  "video": {
    "title": "CSS Tutorial – Full Course for Beginners",
    "embedUrl": "https://www.youtube.com/embed/OXGznpKZ_sA",
    "note": "freeCodeCamp's CSS course. Watch the sections on responsive design and media queries, and add a media query to your own site.",
    "more": [
      {
        "title": "CSS Tutorial - Zero to Hero (Complete Course)",
        "url": "https://www.youtube.com/watch?v=1Rs2ND1ryYc"
      },
      {
        "title": "Flexbox CSS In 20 Minutes",
        "url": "https://www.youtube.com/watch?v=JJSoEo8JSnc"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Responsive design” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Responsive design — Building a page so it adapts to different screen sizes, from phones to desktops. Step 2: It matters because it is part of: Explain what responsive design is and why it matters. Step 3: An example from the module is the way responsive design shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Viewport” and “Media query”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Viewport — The visible area of a web page in the browser. The viewport meta tag tells phones how wide the page is. Step 2: Media query — A CSS rule that applies only when the screen meets a condition, such as @media (max-width: 600px). Step 3: They differ because the first is about viewport while the second is about media query; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Add the viewport meta tag to a page.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Add the viewport meta tag to a page. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Breakpoint” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Breakpoint — A screen width where a layout changes, such as 600px for phones and 900px for tablets. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Fluid width — A width in percentages rather than pixels, so an element grows and shrinks with its container. Step 2: max-width — A CSS property that sets the widest an element may be, such as max-width: 900px on a page container. Step 3: Mobile-first — Designing for the small screen first, then adding rules for bigger screens. Step 4: Flexible image — An image with max-width: 100%, so it never overflows its container. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Test a page at phone, tablet, and desktop widths. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Flexible image” mean?",
      "choices": [
        "The visible area of a web page in the browser. The viewport meta tag tells phones how wide the page is.",
        "Building a page so it adapts to different screen sizes, from phones to desktops.",
        "An image with max-width: 100%, so it never overflows its container.",
        "A screen width where a layout changes, such as 600px for phones and 900px for tablets."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Flexible image means: An image with max-width: 100%, so it never overflows its container. (a) is the definition of Viewport, not of Flexible image. (b) is the definition of Breakpoint, not of Flexible image. (d) is the definition of Responsive design, not of Flexible image."
    },
    {
      "q": "What does the term “Horizontal scroll” mean?",
      "choices": [
        "The browser tool (in developer tools) that shows your page at phone and tablet sizes.",
        "When a page is wider than the screen and the visitor must scroll sideways — a sign the layout is broken on that screen.",
        "When a row of items becomes a column on a small screen, one item above the next.",
        "A button or link big enough to tap comfortably with a finger — at least about 44 pixels tall."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Horizontal scroll means: When a page is wider than the screen and the visitor must scroll sideways — a sign the layout is broken on that screen. (a) is the definition of Device toolbar, not of Horizontal scroll. (c) is the definition of Stack, not of Horizontal scroll. (d) is the definition of Touch target, not of Horizontal scroll."
    },
    {
      "q": "Which term means: The browser tool (in developer tools) that shows your page at phone and tablet sizes.",
      "choices": [
        "rem",
        "Viewport",
        "Device toolbar",
        "Pixel"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Device toolbar is the term for: The browser tool (in developer tools) that shows your page at phone and tablet sizes. (a) rem means A CSS unit based on the root font size; 1rem is usually 16 pixels. (b) Pixel means A single dot on a screen. Screen widths are measured in pixels, such as 600px. (d) Viewport means The visible area of a web page in the browser. The viewport meta tag tells phones how wide the page is."
    },
    {
      "q": "Which term means: The visible area of a web page in the browser. The viewport meta tag tells phones how wide the page is.",
      "choices": [
        "max-width",
        "Pixel",
        "Viewport",
        "Device toolbar"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Viewport is the term for: The visible area of a web page in the browser. The viewport meta tag tells phones how wide the page is. (a) Device toolbar means The browser tool (in developer tools) that shows your page at phone and tablet sizes. (b) Pixel means A single dot on a screen. Screen widths are measured in pixels, such as 600px. (d) max-width means A CSS property that sets the widest an element may be, such as max-width: 900px on a page container."
    },
    {
      "q": "Which of the following is TRUE about Fluid width?",
      "choices": [
        "Designing for the small screen first, then adding rules for bigger screens.",
        "A width in percentages rather than pixels, so an element grows and shrinks with its container.",
        "A single dot on a screen. Screen widths are measured in pixels, such as 600px.",
        "Designing for the big screen first, then adding rules for smaller screens. The opposite of mobile-first."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Fluid width: A width in percentages rather than pixels, so an element grows and shrinks with its container. (a) describes Pixel, not Fluid width. (c) describes Mobile-first, not Fluid width. (d) describes Desktop-first, not Fluid width."
    },
    {
      "q": "What does the term “Flexible image” mean?",
      "choices": [
        "When a page is wider than the screen and the visitor must scroll sideways — a sign the layout is broken on that screen.",
        "The browser tool (in developer tools) that shows your page at phone and tablet sizes.",
        "A button or link big enough to tap comfortably with a finger — at least about 44 pixels tall.",
        "An image with max-width: 100%, so it never overflows its container."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Flexible image means: An image with max-width: 100%, so it never overflows its container. (a) is the definition of Device toolbar, not of Flexible image. (b) is the definition of Touch target, not of Flexible image. (c) is the definition of Horizontal scroll, not of Flexible image."
    },
    {
      "q": "What does the viewport meta tag do?",
      "choices": [
        "It makes the page load faster",
        "It tells the phone the page is as wide as its screen, so the page renders at a readable size",
        "It changes the colours of the page",
        "It hides the page from search engines"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Without the viewport tag, a phone shrinks a desktop-width page down to fit, with tiny text. (a) is wrong: speed is not its job. (c) is wrong: colours are CSS. (d) is wrong: hiding a page from search engines is a different tag entirely."
    },
    {
      "q": "Your row of cards looks fine on a desktop but overflows the screen on a phone, forcing sideways scrolling. What is the most likely fix?",
      "choices": [
        "Make the cards wider",
        "Add a media query that turns the row into a column on small screens",
        "Remove the viewport meta tag",
        "Make the text smaller"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A media query at a small-screen breakpoint can stack the cards in a column, so nothing overflows. (a) is wrong: wider cards overflow more. (c) is wrong: removing the viewport tag makes it worse. (d) is wrong: smaller text does not fix a row that is too wide."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Responsive Design: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what responsive design is and why it matters.</p>\n<p><strong>Key terms:</strong> Responsive design · Viewport · Media query · Breakpoint · Fluid width · max-width · Mobile-first · Flexible image.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what responsive design is and why it matters.</li>\n<li>Add the viewport meta tag to a page.</li>\n<li>Use fluid widths and flexible images so pages fit any screen.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
