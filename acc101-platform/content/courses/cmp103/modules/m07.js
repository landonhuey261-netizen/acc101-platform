// cmp103 - Module 7: Layout: Flexbox
module.exports = {
  "number": 7,
  "slug": "layout-flexbox",
  "title": "Layout: Flexbox",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what Flexbox is and when to use it.",
    "Make a row of items with display: flex.",
    "Control direction, spacing, and alignment with flex properties.",
    "Make items wrap onto a new line when they run out of room.",
    "Build a simple navigation bar and a row of cards with Flexbox."
  ],
  "sections": [
    {
      "heading": "What Flexbox Is For",
      "html": "<p>Before Flexbox, laying out a row of boxes in CSS was genuinely hard — people used floats and tables and all sorts of tricks. Flexbox is the modern answer: you tell a container display: flex, and its children line up in a row (or a column), with simple controls for spacing and alignment. It is the right tool for one-dimensional layouts: a row of cards, a navigation bar, a header with a logo on one side and links on the other.</p>\n<p>Flexbox is not for everything: a full page grid with rows and columns is better done with CSS Grid, which is beyond this course. But for rows and navigation bars — the layouts beginners build most — Flexbox is exactly right.</p>\n"
    },
    {
      "heading": "Making a Row",
      "html": "<p>Turn an element into a flex container with display: flex, and its direct children become flex items, lined up in a row: </p>\n<pre>.row {\n  display: flex;\n  gap: 12px;\n}</pre>\n<p> The .row is the container; its children sit side by side with 12 pixels of gap between them. Add flex-wrap: wrap and the items drop onto a new line when they run out of room, instead of squeezing smaller and smaller.</p>\n<p>flex-direction: column stacks the items top to bottom instead. The default is row, left to right. Change it when the layout should be vertical — a stack of cards on a phone, for example.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> display: flex on the container lines its children up in a row. justify-content spaces them along the row; align-items lines them up across it.</div></p>\n"
    },
    {
      "heading": "Spacing and Alignment",
      "html": "<p>justify-content controls spacing along the main direction (the row): flex-start packs items to the left, center puts them in the middle, space-between pushes the first to the left edge and the last to the right edge with equal gaps between, and space-around gives equal space around each item. space-between is the classic choice for a navigation bar: logo on the left, links on the right.</p>\n<p>align-items controls lining up across the other direction: center lines items up in the middle vertically, flex-start lines them up at the top, stretch (the default) makes them all as tall as the tallest. If your cards look uneven, align-items is usually the property to check.</p>\n"
    },
    {
      "heading": "Building a Navigation Bar and Cards",
      "html": "<p>A navigation bar is a header with display: flex and justify-content: space-between: the logo sits on the left, the list of links sits on the right, and the space between them is automatic. The links themselves are a list with display: flex and a gap, so they sit in a row with even spacing.</p>\n<p>A row of cards is a container with display: flex, flex-wrap: wrap, and a gap. Each card has a fixed width (or flex: 1, meaning “grow to fill the space”) and on a narrow screen the cards wrap onto new lines instead of overflowing. Test your row by narrowing the browser window: if the cards wrap neatly, Flexbox is doing its job.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Flexbox arranges items in a row or a column with easy spacing and alignment.</li><li>display: flex goes on the container; its children become flex items.</li><li>justify-content spaces along the row; align-items lines up across it.</li><li>flex-wrap: wrap lets items drop to a new line.</li><li>space-between is the classic choice for a navigation bar.</li></ul></p>\n<p><strong>Common mistake:</strong> Putting display: flex on the items instead of the container. Flexbox is set on the parent, and it arranges the children.</p>\n<p><strong>Common mistake:</strong> Forgetting flex-wrap. Without it, items squeeze onto one line and overflow on small screens.</p>\n<p><strong>Ready check:</strong> If you can build a navigation bar with a logo on the left and links on the right, and a row of three cards that wrap on a narrow screen, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Flexbox",
      "def": "A CSS layout system for arranging items in a row or a column, with easy control of spacing and alignment."
    },
    {
      "term": "Flex container",
      "def": "The element with display: flex on it. Its direct children become flex items."
    },
    {
      "term": "Flex item",
      "def": "A direct child of a flex container, arranged by Flexbox."
    },
    {
      "term": "display: flex",
      "def": "The CSS declaration that turns an element into a flex container."
    },
    {
      "term": "flex-direction",
      "def": "Which way items flow: row (left to right) or column (top to bottom)."
    },
    {
      "term": "justify-content",
      "def": "How items are spaced along the main direction: flex-start, center, space-between, space-around."
    },
    {
      "term": "align-items",
      "def": "How items are lined up across the other direction: flex-start, center, flex-end, stretch."
    },
    {
      "term": "flex-wrap",
      "def": "Whether items wrap onto a new line when they run out of room (wrap) or squeeze onto one line (nowrap)."
    },
    {
      "term": "gap",
      "def": "The space between flex items, set with the gap property."
    },
    {
      "term": "flex-grow",
      "def": "How much an item grows to fill extra space, relative to the other items."
    },
    {
      "term": "Main axis",
      "def": "The direction items flow in: horizontal for a row, vertical for a column."
    },
    {
      "term": "Cross axis",
      "def": "The direction across the flow: vertical for a row, horizontal for a column."
    },
    {
      "term": "Navigation bar",
      "def": "The row of links at the top of a website, usually built with Flexbox."
    },
    {
      "term": "Card",
      "def": "A box holding a picture, a heading, and some text — a common building block of web pages."
    },
    {
      "term": "Responsive",
      "def": "A page that adapts to different screen sizes, from phones to desktops."
    }
  ],
  "video": {
    "title": "Flexbox CSS In 20 Minutes",
    "embedUrl": "https://www.youtube.com/embed/JJSoEo8JSnc",
    "note": "Traversy Media's Flexbox in 20 minutes: containers, items, direction, spacing, and alignment, with live examples. Watch it, then rebuild your navigation bar with Flexbox.",
    "more": [
      {
        "title": "CSS Tutorial - Zero to Hero (Complete Course)",
        "url": "https://www.youtube.com/watch?v=1Rs2ND1ryYc"
      },
      {
        "title": "CSS Tutorial – Full Course for Beginners",
        "url": "https://www.youtube.com/watch?v=OXGznpKZ_sA"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Flexbox” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Flexbox — A CSS layout system for arranging items in a row or a column, with easy control of spacing and alignment. Step 2: It matters because it is part of: Explain what Flexbox is and when to use it. Step 3: An example from the module is the way flexbox shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Flex container” and “Flex item”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Flex container — The element with display: flex on it. Its direct children become flex items. Step 2: Flex item — A direct child of a flex container, arranged by Flexbox. Step 3: They differ because the first is about flex container while the second is about flex item; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Make a row of items with display: flex.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Make a row of items with display: flex. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “display: flex” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: display: flex — The CSS declaration that turns an element into a flex container. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: flex-direction — Which way items flow: row (left to right) or column (top to bottom). Step 2: justify-content — How items are spaced along the main direction: flex-start, center, space-between, space-around. Step 3: align-items — How items are lined up across the other direction: flex-start, center, flex-end, stretch. Step 4: flex-wrap — Whether items wrap onto a new line when they run out of room (wrap) or squeeze onto one line (nowrap). (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Build a simple navigation bar and a row of cards with Flexbox. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “justify-content” mean?",
      "choices": [
        "How items are spaced along the main direction: flex-start, center, space-between, space-around.",
        "Whether items wrap onto a new line when they run out of room (wrap) or squeeze onto one line (nowrap).",
        "The space between flex items, set with the gap property.",
        "A box holding a picture, a heading, and some text — a common building block of web pages."
      ],
      "answer": 0,
      "explanation": "Correct: (a). justify-content means: How items are spaced along the main direction: flex-start, center, space-between, space-around. (b) is the definition of flex-wrap, not of justify-content. (c) is the definition of gap, not of justify-content. (d) is the definition of Card, not of justify-content."
    },
    {
      "q": "What does the term “gap” mean?",
      "choices": [
        "How items are spaced along the main direction: flex-start, center, space-between, space-around.",
        "A page that adapts to different screen sizes, from phones to desktops.",
        "How much an item grows to fill extra space, relative to the other items.",
        "The space between flex items, set with the gap property."
      ],
      "answer": 3,
      "explanation": "Correct: (d). gap means: The space between flex items, set with the gap property. (a) is the definition of justify-content, not of gap. (b) is the definition of flex-grow, not of gap. (c) is the definition of Responsive, not of gap."
    },
    {
      "q": "Which term means: The direction across the flow: vertical for a row, horizontal for a column.",
      "choices": [
        "gap",
        "Card",
        "flex-wrap",
        "Cross axis"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Cross axis is the term for: The direction across the flow: vertical for a row, horizontal for a column. (a) Card means A box holding a picture, a heading, and some text — a common building block of web pages. (b) flex-wrap means Whether items wrap onto a new line when they run out of room (wrap) or squeeze onto one line (nowrap). (c) gap means The space between flex items, set with the gap property."
    },
    {
      "q": "Which term means: A page that adapts to different screen sizes, from phones to desktops.",
      "choices": [
        "Responsive",
        "Card",
        "gap",
        "flex-direction"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Responsive is the term for: A page that adapts to different screen sizes, from phones to desktops. (b) Card means A box holding a picture, a heading, and some text — a common building block of web pages. (c) gap means The space between flex items, set with the gap property. (d) flex-direction means Which way items flow: row (left to right) or column (top to bottom)."
    },
    {
      "q": "Which of the following is TRUE about Flex item?",
      "choices": [
        "The CSS declaration that turns an element into a flex container.",
        "The direction items flow in: horizontal for a row, vertical for a column.",
        "A direct child of a flex container, arranged by Flexbox.",
        "A box holding a picture, a heading, and some text — a common building block of web pages."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Flex item: A direct child of a flex container, arranged by Flexbox. (a) describes Main axis, not Flex item. (b) describes display: flex, not Flex item. (d) describes Card, not Flex item."
    },
    {
      "q": "What does the term “justify-content” mean?",
      "choices": [
        "The row of links at the top of a website, usually built with Flexbox.",
        "How items are spaced along the main direction: flex-start, center, space-between, space-around.",
        "A direct child of a flex container, arranged by Flexbox.",
        "A box holding a picture, a heading, and some text — a common building block of web pages."
      ],
      "answer": 1,
      "explanation": "Correct: (b). justify-content means: How items are spaced along the main direction: flex-start, center, space-between, space-around. (a) is the definition of Navigation bar, not of justify-content. (c) is the definition of Flex item, not of justify-content. (d) is the definition of Card, not of justify-content."
    },
    {
      "q": "Where does display: flex go?",
      "choices": [
        "On each item you want to arrange",
        "On the container, whose children become flex items",
        "On the body element only",
        "On the image inside the card"
      ],
      "answer": 1,
      "explanation": "Correct: (b). display: flex goes on the container, and it arranges its direct children. (a) is wrong: items are arranged by the container, not by themselves. (c) is wrong: any element can be a flex container. (d) is wrong: the image is not the container."
    },
    {
      "q": "You want a navigation bar with the logo on the left and the links on the right, with space between them. Which justify-content value does that?",
      "choices": [
        "center",
        "flex-start",
        "space-between",
        "stretch"
      ],
      "answer": 2,
      "explanation": "Correct: (c). space-between pushes the first item to the left edge and the last to the right edge, with equal gaps between. (a) center groups everything in the middle. (b) flex-start packs everything to the left. (d) stretch is an align-items value, not a justify-content value."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Layout: Flexbox: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what Flexbox is and when to use it.</p>\n<p><strong>Key terms:</strong> Flexbox · Flex container · Flex item · display: flex · flex-direction · justify-content · align-items · flex-wrap.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what Flexbox is and when to use it.</li>\n<li>Make a row of items with display: flex.</li>\n<li>Control direction, spacing, and alignment with flex properties.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
