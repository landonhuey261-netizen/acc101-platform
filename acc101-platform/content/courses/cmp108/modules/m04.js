// cmp108 - Module 4: Selections
module.exports = {
  "number": 4,
  "slug": "selections",
  "title": "Selections",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a selection is and why selections matter.",
    "Use the Marquee, Lasso, and Quick Selection tools.",
    "Use Select Subject and Select and Mask for tricky edges.",
    "Add to, subtract from, and feather a selection.",
    "Invert a selection and save a selection for later."
  ],
  "sections": [
    {
      "heading": "What a Selection Does",
      "html": "<p>A selection is a boundary that says where your next edit is allowed to happen. Everything inside the selection is affected; everything outside is protected. Select the sky, and a brightness change touches only the sky. Select a person, and a color change touches only the person.</p>\n<p>Selections are shown by the marching ants, the moving dashed line around the selected area. The ants show the boundary, not the edit itself. A selection can be any shape, from a neat rectangle to the wavy edge of a person's hair, and you can save it to use again later.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> The golden rule of selections: select first, then edit. If your edit is landing in the wrong place, check your selection before you check anything else.</div></p>\n"
    },
    {
      "heading": "The Basic Selection Tools",
      "html": "<p>The Rectangular and Elliptical Marquee tools, shortcut M, select rectangles and ovals. Drag to draw the shape, hold Shift to force a perfect square or circle, and hold Alt or Option to draw from the center out. They are best for simple, geometric selections.</p>\n<p>The Lasso tools, shortcut L, select by hand. The regular Lasso follows your mouse exactly, the Polygonal Lasso clicks point to point in straight lines, and the Magnetic Lasso snaps to edges as you drag. The Quick Selection tool, shortcut W, paints a selection over an area and Photoshop finds the edges for you, which is fast for objects that stand out from their background.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> No single selection tool is best for everything. Try Quick Selection first for an object, Marquee for a shape, and the Lasso family when you need control.</div></p>\n"
    },
    {
      "heading": "Select Subject and Select and Mask",
      "html": "<p>Select Subject is the fastest way to select a person or a clear object. Choose Select, then Subject, and Photoshop finds the subject using its built-in detection. It is not perfect, especially with hair or busy backgrounds, but it is a strong starting point that you can refine.</p>\n<p>Select and Mask is the workspace for fixing edges. Choose Select, then Select and Mask, and use the Refine Edge Brush to paint over hair and fur, where the automatic selection struggles. The view modes let you see the selection against black, white, or a red overlay, so you can spot missed spots.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> When an edge looks rough, the problem is usually a hard edge on a soft subject. Feather the selection slightly, or use Select and Mask to soften it, and the cut-out will look natural instead of pasted on.</div></p>\n"
    },
    {
      "heading": "Refining a Selection",
      "html": "<p>Hold Shift while using a selection tool to add to a selection, and hold Alt or Option to subtract from it. The options bar also has Add, Subtract, and Intersect buttons that do the same job. Feather softens the edge of a selection by a number of pixels, so the edit fades in instead of stopping abruptly: choose Select, then Modify, then Feather, and try 1 to 2 pixels for a photo.</p>\n<p>Choose Select, then Inverse to flip a selection: what was selected becomes unselected, and vice versa. That is useful when it is easier to select the background than the subject. Choose Select, then Save Selection to store a selection with the document, so you can load it again tomorrow with Select, then Load Selection.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Press Ctrl or Command + D to deselect when you are done. A selection left active by accident is the cause of many mysterious edits that only affect part of a photo.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Explain what a selection is and why selections matter.</li>\n<li>Use the Marquee, Lasso, and Quick Selection tools.</li>\n<li>Use Select Subject and Select and Mask for tricky edges.</li>\n<li>Add to, subtract from, and feather a selection.</li>\n<li>Invert a selection and save a selection for later.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Forgetting a selection is active and wondering why an edit only affects part of the photo. Press Ctrl or Command + D when you are done.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Cutting out a person with a hard, unfeathered edge. Soften the edge slightly so the subject looks like it belongs in the photo.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain this module's main idea out loud in plain words, without looking, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Selection",
      "def": "A boundary that limits where an edit is allowed to happen."
    },
    {
      "term": "Marching ants",
      "def": "The moving dashed line showing the edge of a selection."
    },
    {
      "term": "Marquee tool",
      "def": "The tool for selecting rectangles and ovals; shortcut M."
    },
    {
      "term": "Lasso tool",
      "def": "The tool for drawing a selection by hand; shortcut L."
    },
    {
      "term": "Quick Selection tool",
      "def": "The tool that paints a selection and finds edges automatically; shortcut W."
    },
    {
      "term": "Select Subject",
      "def": "The command that automatically selects the main subject of a photo."
    },
    {
      "term": "Select and Mask",
      "def": "The workspace for refining tricky selection edges such as hair."
    },
    {
      "term": "Feather",
      "def": "Softening the edge of a selection so an edit fades in gradually."
    },
    {
      "term": "Inverse",
      "def": "Flipping a selection so the unselected area becomes selected."
    },
    {
      "term": "Refine Edge Brush",
      "def": "The brush in Select and Mask for painting over hair and fur edges."
    },
    {
      "term": "Add to selection",
      "def": "Extending a selection, done by holding Shift."
    },
    {
      "term": "Subtract from selection",
      "def": "Removing part of a selection, done by holding Alt or Option."
    },
    {
      "term": "Deselect",
      "def": "Clearing a selection, with Ctrl or Command + D."
    }
  ],
  "video": {
    "title": "How to Create Selections in Photoshop | Day 5",
    "embedUrl": "https://www.youtube.com/embed/Erfx1cqM1Hs",
    "note": "PHLEARN on creating selections and using Select Subject. Practice on a photo with a clear subject, then try Select and Mask on the edges.",
    "more": [
      {
        "title": "Select Subject in Photoshop - Day 9",
        "url": "https://www.youtube.com/watch?v=MplF8QAoMiI"
      },
      {
        "title": "Layers in Photoshop – Ultimate Guide for Beginners",
        "url": "https://www.youtube.com/watch?v=zj9fxeJvpjo"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Selection” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Selection — A boundary that limits where an edit is allowed to happen. Step 2: It matters because it is part of: Explain what a selection is and why selections matter. Step 3: An example from the module is the way selection shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Marching ants” and “Marquee tool”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Marching ants — The moving dashed line showing the edge of a selection. Step 2: Marquee tool — The tool for selecting rectangles and ovals; shortcut M. Step 3: They differ because the first is about marching ants while the second is about marquee tool; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Use the Marquee, Lasso, and Quick Selection tools.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Use the Marquee, Lasso, and Quick Selection tools. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Lasso tool” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Lasso tool — The tool for drawing a selection by hand; shortcut L. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Quick Selection tool — The tool that paints a selection and finds edges automatically; shortcut W. Step 2: Select Subject — The command that automatically selects the main subject of a photo. Step 3: Select and Mask — The workspace for refining tricky selection edges such as hair. Step 4: Feather — Softening the edge of a selection so an edit fades in gradually. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Use Select Subject and Select and Mask for tricky edges. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Selection” mean?",
      "choices": [
        "A boundary that limits where an edit is allowed to happen.",
        "The moving dashed line showing the edge of a selection.",
        "The tool for selecting rectangles and ovals; shortcut M.",
        "The tool for drawing a selection by hand; shortcut L."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Selection means: A boundary that limits where an edit is allowed to happen. (b) is the definition of Marching ants, not of Selection. (c) is the definition of Marquee tool, not of Selection. (d) is the definition of Lasso tool, not of Selection."
    },
    {
      "q": "What does the term “Marching ants” mean?",
      "choices": [
        "The tool for selecting rectangles and ovals; shortcut M.",
        "The moving dashed line showing the edge of a selection.",
        "The tool for drawing a selection by hand; shortcut L.",
        "The tool that paints a selection and finds edges automatically; shortcut W."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Marching ants means: The moving dashed line showing the edge of a selection. (a) is the definition of Marquee tool, not of Marching ants. (c) is the definition of Lasso tool, not of Marching ants. (d) is the definition of Quick Selection tool, not of Marching ants."
    },
    {
      "q": "What does the term “Marquee tool” mean?",
      "choices": [
        "The tool for drawing a selection by hand; shortcut L.",
        "The tool that paints a selection and finds edges automatically; shortcut W.",
        "The tool for selecting rectangles and ovals; shortcut M.",
        "The command that automatically selects the main subject of a photo."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Marquee tool means: The tool for selecting rectangles and ovals; shortcut M. (a) is the definition of Lasso tool, not of Marquee tool. (b) is the definition of Quick Selection tool, not of Marquee tool. (d) is the definition of Select Subject, not of Marquee tool."
    },
    {
      "q": "What does the term “Lasso tool” mean?",
      "choices": [
        "The tool that paints a selection and finds edges automatically; shortcut W.",
        "The command that automatically selects the main subject of a photo.",
        "The workspace for refining tricky selection edges such as hair.",
        "The tool for drawing a selection by hand; shortcut L."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Lasso tool means: The tool for drawing a selection by hand; shortcut L. (a) is the definition of Quick Selection tool, not of Lasso tool. (b) is the definition of Select Subject, not of Lasso tool. (c) is the definition of Select and Mask, not of Lasso tool."
    },
    {
      "q": "Which term means: The tool that paints a selection and finds edges automatically; shortcut W.",
      "choices": [
        "Quick Selection tool",
        "Select Subject",
        "Select and Mask",
        "Feather"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Quick Selection tool is the term for: The tool that paints a selection and finds edges automatically; shortcut W. (b) Select Subject means The command that automatically selects the main subject of a photo. (c) Select and Mask means The workspace for refining tricky selection edges such as hair. (d) Feather means Softening the edge of a selection so an edit fades in gradually."
    },
    {
      "q": "Which term means: The command that automatically selects the main subject of a photo.",
      "choices": [
        "Select and Mask",
        "Select Subject",
        "Feather",
        "Inverse"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Select Subject is the term for: The command that automatically selects the main subject of a photo. (a) Select and Mask means The workspace for refining tricky selection edges such as hair. (c) Feather means Softening the edge of a selection so an edit fades in gradually. (d) Inverse means Flipping a selection so the unselected area becomes selected."
    },
    {
      "q": "Which term means: The workspace for refining tricky selection edges such as hair.",
      "choices": [
        "Feather",
        "Inverse",
        "Select and Mask",
        "Refine Edge Brush"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Select and Mask is the term for: The workspace for refining tricky selection edges such as hair. (a) Feather means Softening the edge of a selection so an edit fades in gradually. (b) Inverse means Flipping a selection so the unselected area becomes selected. (d) Refine Edge Brush means The brush in Select and Mask for painting over hair and fur edges."
    },
    {
      "q": "Which term means: Softening the edge of a selection so an edit fades in gradually.",
      "choices": [
        "Inverse",
        "Refine Edge Brush",
        "Add to selection",
        "Feather"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Feather is the term for: Softening the edge of a selection so an edit fades in gradually. (a) Inverse means Flipping a selection so the unselected area becomes selected. (b) Refine Edge Brush means The brush in Select and Mask for painting over hair and fur edges. (c) Add to selection means Extending a selection, done by holding Shift."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Selections: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a selection is and why selections matter.</p>\n<p><strong>Key terms:</strong> Selection · Marching ants · Marquee tool · Lasso tool · Quick Selection tool · Select Subject · Select and Mask · Feather.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a selection is and why selections matter.</li>\n<li>Use the Marquee, Lasso, and Quick Selection tools.</li>\n<li>Use Select Subject and Select and Mask for tricky edges.</li>\n</ul>\n<p><strong>Watch out:</strong> Always work on a copy or a duplicate layer, and keep your original photo file untouched. A non-destructive edit can always be undone; a destructive one cannot.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
