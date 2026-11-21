// cmp103 - Module 5: CSS Basics
module.exports = {
  "number": 5,
  "slug": "css-basics",
  "title": "CSS Basics",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what CSS does and how it connects to HTML.",
    "Write a CSS rule: selector, property, and value.",
    "Change colours, fonts, and text sizes with CSS.",
    "Explain the difference between inline, internal, and external CSS.",
    "Link an external stylesheet to an HTML page."
  ],
  "sections": [
    {
      "heading": "What CSS Does",
      "html": "<p>CSS is the language that styles a web page: the colours, the fonts, the sizes, the spacing, and the layout. HTML says what things are; CSS says what they look like. The same HTML page can look completely different with a different stylesheet — which is why CSS is kept separate from HTML, in its own file, instead of mixed into every tag.</p>\n<p>A CSS rule has three parts: a selector, which says which elements it styles; a property, which says what to change; and a value, which says what to change it to. </p>\n<pre>h1 {\n  color: darkblue;\n  font-size: 32px;\n}</pre>\n<p> This rule says: every h1 on the page should be dark blue and 32 pixels tall. The selector is h1, the properties are color and font-size, and the values are darkblue and 32px.</p>\n"
    },
    {
      "heading": "Colours and Fonts",
      "html": "<p>Colours in CSS can be named (darkblue, coral, gold), written as hex codes (#14365e is a navy blue — the # followed by six characters for red, green, and blue), or as rgb values (rgb(20, 54, 94)). Named colours are easiest to remember; hex codes give you any colour you want. Pick two or three colours for your site and reuse them — a site with twelve colours looks messy.</p>\n<p>Fonts are set with font-family: list your first choice, then a fallback, such as font-family: Georgia, serif; — if the visitor's computer does not have Georgia, it uses any serif font. Body text is usually 16 pixels; headings are bigger. And never set body text below about 14 pixels: small text is hard to read for everyone, not just for older visitors.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> A CSS rule is selector { property: value; }. The selector picks the elements; the property picks what changes; the value picks what it becomes.</div></p>\n"
    },
    {
      "heading": "Three Ways to Add CSS",
      "html": "<p>There are three ways to add CSS to a page. Inline CSS sits on one element: <p style=\"color: red;\">. It works, but it is hard to maintain, because changing the colour means editing every element. Internal CSS sits in a <style> element in the page's head: it styles one page. External CSS lives in a separate .css file, linked from the page with <link rel=\"stylesheet\" href=\"styles.css\"> in the head.</p>\n<p>External CSS is the way to go for any real site: one stylesheet can style every page, so changing the colour of every heading means editing one file, not fifty pages. This course uses external CSS from here on. When your styles do not appear, check first that the <link> is in the head and that the file name matches exactly — a wrong path is the most common CSS bug of all.</p>\n"
    },
    {
      "heading": "The Cascade: Which Rule Wins?",
      "html": "<p>CSS stands for Cascading Style Sheets, and the cascade is the set of rules that decides which style wins when several rules target the same element. The short version: a more specific selector beats a less specific one, and when two rules are equally specific, the later one wins. An inline style beats both. That is why it is called a cascade — rules flow down, and the most specific, latest rule wins.</p>\n<p>In practice, the cascade mostly stays out of your way if you keep your CSS simple: one stylesheet, rules in a sensible order, and no inline styles. When a style does not apply and you cannot see why, check whether another rule is overriding it — your browser's developer tools (right-click, Inspect) show exactly which rules apply to an element and which ones lost.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>CSS styles a page: colours, fonts, sizes, spacing, layout.</li><li>A rule is selector { property: value; }.</li><li>Colours can be named, hex (#14365e), or rgb.</li><li>External CSS in a separate .css file is the way to go for a real site.</li><li>The cascade decides which rule wins: more specific beats less specific, later beats earlier.</li></ul></p>\n<p><strong>Common mistake:</strong> Forgetting the <link> to the stylesheet, or getting its file name wrong. No link means no styles at all.</p>\n<p><strong>Common mistake:</strong> Using inline styles everywhere. One change then means editing every element — use a stylesheet instead.</p>\n<p><strong>Ready check:</strong> If you can link a stylesheet to a page and write rules that change a heading's colour and size and a paragraph's font, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "CSS",
      "def": "Cascading Style Sheets — the language that styles a web page: colours, fonts, spacing, and layout."
    },
    {
      "term": "Rule",
      "def": "One CSS instruction: a selector plus a block of declarations, such as h1 { color: darkblue; }."
    },
    {
      "term": "Selector",
      "def": "The part of a CSS rule that says which elements it styles, such as h1 or .card."
    },
    {
      "term": "Property",
      "def": "What a CSS rule changes, such as color or font-size."
    },
    {
      "term": "Value",
      "def": "What a property is set to, such as darkblue or 32px."
    },
    {
      "term": "Declaration",
      "def": "One property-value pair inside a rule, such as color: darkblue;."
    },
    {
      "term": "Colour",
      "def": "In CSS, colours can be named (darkblue), hex codes (#14365e), or rgb values (rgb(20, 54, 94))."
    },
    {
      "term": "Font",
      "def": "The typeface of text, set with font-family, such as Arial or Georgia."
    },
    {
      "term": "Font size",
      "def": "The size of text, set with font-size, usually in pixels (px)."
    },
    {
      "term": "External stylesheet",
      "def": "A separate .css file linked to a page with <link>, so many pages can share the same styles."
    },
    {
      "term": "Internal CSS",
      "def": "CSS written inside a <style> element in the page's head."
    },
    {
      "term": "Inline CSS",
      "def": "CSS written directly on one element with the style attribute. Useful rarely; hard to maintain."
    },
    {
      "term": "Cascade",
      "def": "The rules CSS uses to decide which style wins when several rules target the same element."
    },
    {
      "term": "Comment",
      "def": "A note in CSS, written /* like this */, that the browser ignores and humans read."
    },
    {
      "term": "Stylesheet",
      "def": "A file, or a block of code, that holds CSS rules."
    }
  ],
  "video": {
    "title": "CSS Crash Course For Absolute Beginners",
    "embedUrl": "https://www.youtube.com/embed/yfoY53QXEnI",
    "note": "Traversy Media's CSS crash course. Watch the opening sections on selectors, properties, colours, and fonts, and style your own two-page site as you go.",
    "more": [
      {
        "title": "CSS Tutorial - Zero to Hero (Complete Course)",
        "url": "https://www.youtube.com/watch?v=1Rs2ND1ryYc"
      },
      {
        "title": "Learn HTML5 and CSS3 From Scratch - Full Course",
        "url": "https://www.youtube.com/watch?v=mU6anWqZJcc"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “CSS” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: CSS — Cascading Style Sheets — the language that styles a web page: colours, fonts, spacing, and layout. Step 2: It matters because it is part of: Explain what CSS does and how it connects to HTML. Step 3: An example from the module is the way css shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Rule” and “Selector”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Rule — One CSS instruction: a selector plus a block of declarations, such as h1 { color: darkblue; }. Step 2: Selector — The part of a CSS rule that says which elements it styles, such as h1 or .card. Step 3: They differ because the first is about rule while the second is about selector; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Write a CSS rule: selector, property, and value.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Write a CSS rule: selector, property, and value. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Property” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Property — What a CSS rule changes, such as color or font-size. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Value — What a property is set to, such as darkblue or 32px. Step 2: Declaration — One property-value pair inside a rule, such as color: darkblue;. Step 3: Colour — In CSS, colours can be named (darkblue), hex codes (#14365e), or rgb values (rgb(20, 54, 94)). Step 4: Font — The typeface of text, set with font-family, such as Arial or Georgia. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Link an external stylesheet to an HTML page. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Rule” mean?",
      "choices": [
        "A note in CSS, written /* like this */, that the browser ignores and humans read.",
        "A file, or a block of code, that holds CSS rules.",
        "One CSS instruction: a selector plus a block of declarations, such as h1 { color: darkblue; }.",
        "Cascading Style Sheets — the language that styles a web page: colours, fonts, spacing, and layout."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Rule means: One CSS instruction: a selector plus a block of declarations, such as h1 { color: darkblue; }. (a) is the definition of CSS, not of Rule. (b) is the definition of Comment, not of Rule. (d) is the definition of Stylesheet, not of Rule."
    },
    {
      "q": "What does the term “Value” mean?",
      "choices": [
        "What a property is set to, such as darkblue or 32px.",
        "Cascading Style Sheets — the language that styles a web page: colours, fonts, spacing, and layout.",
        "One property-value pair inside a rule, such as color: darkblue;.",
        "A file, or a block of code, that holds CSS rules."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Value means: What a property is set to, such as darkblue or 32px. (b) is the definition of CSS, not of Value. (c) is the definition of Declaration, not of Value. (d) is the definition of Stylesheet, not of Value."
    },
    {
      "q": "Which term means: The typeface of text, set with font-family, such as Arial or Georgia.",
      "choices": [
        "Rule",
        "Font",
        "Inline CSS",
        "Font size"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Font is the term for: The typeface of text, set with font-family, such as Arial or Georgia. (a) Font size means The size of text, set with font-size, usually in pixels (px). (c) Inline CSS means CSS written directly on one element with the style attribute. Useful rarely; hard to maintain. (d) Rule means One CSS instruction: a selector plus a block of declarations, such as h1 { color: darkblue; }."
    },
    {
      "q": "Which term means: CSS written inside a <style> element in the page's head.",
      "choices": [
        "CSS",
        "Internal CSS",
        "Font",
        "Selector"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Internal CSS is the term for: CSS written inside a <style> element in the page's head. (a) CSS means Cascading Style Sheets — the language that styles a web page: colours, fonts, spacing, and layout. (c) Font means The typeface of text, set with font-family, such as Arial or Georgia. (d) Selector means The part of a CSS rule that says which elements it styles, such as h1 or .card."
    },
    {
      "q": "Which of the following is TRUE about Comment?",
      "choices": [
        "What a CSS rule changes, such as color or font-size.",
        "A separate .css file linked to a page with <link>, so many pages can share the same styles.",
        "One CSS instruction: a selector plus a block of declarations, such as h1 { color: darkblue; }.",
        "A note in CSS, written /* like this */, that the browser ignores and humans read."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Comment: A note in CSS, written /* like this */, that the browser ignores and humans read. (a) describes Rule, not Comment. (b) describes Property, not Comment. (c) describes External stylesheet, not Comment."
    },
    {
      "q": "What does the term “Rule” mean?",
      "choices": [
        "The rules CSS uses to decide which style wins when several rules target the same element.",
        "What a property is set to, such as darkblue or 32px.",
        "The size of text, set with font-size, usually in pixels (px).",
        "One CSS instruction: a selector plus a block of declarations, such as h1 { color: darkblue; }."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Rule means: One CSS instruction: a selector plus a block of declarations, such as h1 { color: darkblue; }. (a) is the definition of Font size, not of Rule. (b) is the definition of Cascade, not of Rule. (c) is the definition of Value, not of Rule."
    },
    {
      "q": "In this CSS rule — h1 { color: darkblue; font-size: 32px; } — what is the selector?",
      "choices": [
        "color",
        "darkblue",
        "h1",
        "32px"
      ],
      "answer": 2,
      "explanation": "Correct: (c). The selector is h1 — it picks which elements the rule styles. (a) color is a property. (b) darkblue is a value. (d) 32px is a value."
    },
    {
      "q": "Why is external CSS better than inline CSS for a real website?",
      "choices": [
        "It makes pages load more slowly",
        "One stylesheet can style every page, so one edit changes the whole site",
        "It works without a browser",
        "It lets you use more colours"
      ],
      "answer": 1,
      "explanation": "Correct: (b). One shared stylesheet means one edit updates every page. (a) is wrong: external CSS is cached and usually faster. (c) is wrong: CSS always needs a browser to show. (d) is wrong: inline CSS can use the same colours."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — CSS Basics: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what CSS does and how it connects to HTML.</p>\n<p><strong>Key terms:</strong> CSS · Rule · Selector · Property · Value · Declaration · Colour · Font.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what CSS does and how it connects to HTML.</li>\n<li>Write a CSS rule: selector, property, and value.</li>\n<li>Change colours, fonts, and text sizes with CSS.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
