// cmp108 - Module 3: Layers Essentials
module.exports = {
  "number": 3,
  "slug": "layers-essentials",
  "title": "Layers Essentials",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a layer is and why Photoshop is built on layers.",
    "Create, rename, reorder, hide, and delete layers.",
    "Duplicate a layer and use it as a safe editing copy.",
    "Change a layer's opacity and blend mode.",
    "Group layers and keep the Layers panel tidy."
  ],
  "sections": [
    {
      "heading": "Layers Are Like Sheets of Glass",
      "html": "<p>Imagine your photo as a stack of clear sheets of glass. The bottom sheet holds the photo itself. On the sheet above it you paint a correction, on the next you add some text, and on the next a color change. You see through the stack to the finished picture, but each sheet can be changed, hidden, or removed without touching the others.</p>\n<p>That is exactly how Photoshop layers work. The Layers panel shows the stack from top to bottom: the top layer is in front, the bottom layer is behind. Click a layer to select it, and everything you do affects only that layer. Click the eye icon to hide a layer and see what the picture looks like without it.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Layers are the reason Photoshop edits are safe. Instead of changing the photo itself, you change a layer above it, and you can always go back. That idea, called non-destructive editing, runs through this whole course.</div></p>\n"
    },
    {
      "heading": "Creating and Organizing Layers",
      "html": "<p>Create a new empty layer from the Layers panel with the New Layer button, or with Ctrl + Shift + N on Windows and Command + Shift + N on a Mac. Name it straight away: Retouch, Text, or Sky Fix is far more useful than Layer 3 when you come back to a file with twenty layers.</p>\n<p>Drag layers up and down in the panel to change their order, and drag one onto the folder icon to group layers together. Groups work like folders: collapse them to tidy the panel, and expand them when you need to work inside. Color-code a layer by right-clicking its eye icon and choosing a color.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Duplicate a layer with Ctrl or Command + J. Duplicating the Background layer before you retouch is the single most important layer habit: your original pixels stay safe on the layer below, and you edit the copy.</div></p>\n"
    },
    {
      "heading": "Opacity and Blend Modes",
      "html": "<p>Opacity controls how see-through a layer is. A layer at 100 percent opacity hides everything below it; at 50 percent, half of what is below shows through. Lower the opacity of a retouch layer to make an edit more subtle, or of a text layer to make it sit gently on the photo.</p>\n<p>Blend modes change how a layer's pixels mix with the ones below. Normal is the default: the top layer simply covers what is below. Multiply darkens, Screen lightens, and Overlay boosts contrast. You do not need to memorize them all: pick a layer, open the blend mode menu at the top of the Layers panel, and try a few to see what they do.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Blend modes are for experimenting. Try one, look at the result, and if it is wrong, pick another. Nothing is permanent until you flatten the image, and you should almost never flatten a PSD.</div></p>\n"
    },
    {
      "heading": "Layers in a Real Edit",
      "html": "<p>A simple portrait edit might have five layers: the Background, a duplicate for retouching, an adjustment layer for brightness, a text layer for a caption, and a layer for a logo. Each one has one job, a clear name, and can be turned off to check its effect.</p>\n<p>Work from the bottom up: fix the photo first, then adjust color and light, then add text and graphics last. If you add text before you fix the photo, you will keep moving it every time the photo underneath changes.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> When a layer misbehaves, check three things: is the right layer selected, is it visible, and is its opacity above zero? Those three questions solve most layer problems.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Explain what a layer is and why Photoshop is built on layers.</li>\n<li>Create, rename, reorder, hide, and delete layers.</li>\n<li>Duplicate a layer and use it as a safe editing copy.</li>\n<li>Change a layer's opacity and blend mode.</li>\n<li>Group layers and keep the Layers panel tidy.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Editing on the wrong layer. Always check which layer is highlighted in the Layers panel before you paint or erase.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Flattening a PSD to save space. You lose every layer and can never go back, so keep the PSD layered.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain this module's main idea out loud in plain words, without looking, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Layer",
      "def": "One sheet in the stack that makes up a Photoshop document."
    },
    {
      "term": "Background layer",
      "def": "The locked bottom layer of a newly opened photo."
    },
    {
      "term": "Opacity",
      "def": "How see-through a layer is, from 0 to 100 percent."
    },
    {
      "term": "Blend mode",
      "def": "The setting that controls how a layer's pixels mix with the layers below."
    },
    {
      "term": "Multiply",
      "def": "A blend mode that darkens the image below."
    },
    {
      "term": "Screen",
      "def": "A blend mode that lightens the image below."
    },
    {
      "term": "Overlay",
      "def": "A blend mode that boosts contrast in the image below."
    },
    {
      "term": "Layer group",
      "def": "A folder in the Layers panel that holds several layers together."
    },
    {
      "term": "Duplicate layer",
      "def": "An exact copy of a layer, made with Ctrl or Command + J."
    },
    {
      "term": "Flatten",
      "def": "Merging all layers into one, which cannot be undone after saving."
    },
    {
      "term": "Non-destructive editing",
      "def": "Editing on separate layers so the original pixels are never changed."
    },
    {
      "term": "Adjustment layer",
      "def": "A layer that changes color or light without touching the pixels below."
    },
    {
      "term": "Fill",
      "def": "The opacity setting that affects only a layer's pixels, not its effects."
    }
  ],
  "video": {
    "title": "Understanding Layers in Photoshop - Day 4",
    "embedUrl": "https://www.youtube.com/embed/MTQw0jl5M8g",
    "note": "PHLEARN on layers and masks, plus a beginner layers guide. Follow along: duplicate the Background, name your layers, and try the opacity slider.",
    "more": [
      {
        "title": "How to Use Layers & Masks in Photoshop | Day 3",
        "url": "https://www.youtube.com/watch?v=yQsYziKvx9c"
      },
      {
        "title": "Photoshop Layers Explained - A Beginner's Guide",
        "url": "https://www.youtube.com/watch?v=iJ5_wwEgYVM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Layer” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Layer — One sheet in the stack that makes up a Photoshop document. Step 2: It matters because it is part of: Explain what a layer is and why Photoshop is built on layers. Step 3: An example from the module is the way layer shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Background layer” and “Opacity”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Background layer — The locked bottom layer of a newly opened photo. Step 2: Opacity — How see-through a layer is, from 0 to 100 percent. Step 3: They differ because the first is about background layer while the second is about opacity; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Create, rename, reorder, hide, and delete layers.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Create, rename, reorder, hide, and delete layers. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Blend mode” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Blend mode — The setting that controls how a layer's pixels mix with the layers below. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Multiply — A blend mode that darkens the image below. Step 2: Screen — A blend mode that lightens the image below. Step 3: Overlay — A blend mode that boosts contrast in the image below. Step 4: Layer group — A folder in the Layers panel that holds several layers together. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Duplicate a layer and use it as a safe editing copy. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Layer” mean?",
      "choices": [
        "One sheet in the stack that makes up a Photoshop document.",
        "The locked bottom layer of a newly opened photo.",
        "How see-through a layer is, from 0 to 100 percent.",
        "The setting that controls how a layer's pixels mix with the layers below."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Layer means: One sheet in the stack that makes up a Photoshop document. (b) is the definition of Background layer, not of Layer. (c) is the definition of Opacity, not of Layer. (d) is the definition of Blend mode, not of Layer."
    },
    {
      "q": "What does the term “Background layer” mean?",
      "choices": [
        "How see-through a layer is, from 0 to 100 percent.",
        "The locked bottom layer of a newly opened photo.",
        "The setting that controls how a layer's pixels mix with the layers below.",
        "A blend mode that darkens the image below."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Background layer means: The locked bottom layer of a newly opened photo. (a) is the definition of Opacity, not of Background layer. (c) is the definition of Blend mode, not of Background layer. (d) is the definition of Multiply, not of Background layer."
    },
    {
      "q": "What does the term “Opacity” mean?",
      "choices": [
        "The setting that controls how a layer's pixels mix with the layers below.",
        "A blend mode that darkens the image below.",
        "How see-through a layer is, from 0 to 100 percent.",
        "A blend mode that lightens the image below."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Opacity means: How see-through a layer is, from 0 to 100 percent. (a) is the definition of Blend mode, not of Opacity. (b) is the definition of Multiply, not of Opacity. (d) is the definition of Screen, not of Opacity."
    },
    {
      "q": "What does the term “Blend mode” mean?",
      "choices": [
        "A blend mode that darkens the image below.",
        "A blend mode that lightens the image below.",
        "A blend mode that boosts contrast in the image below.",
        "The setting that controls how a layer's pixels mix with the layers below."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Blend mode means: The setting that controls how a layer's pixels mix with the layers below. (a) is the definition of Multiply, not of Blend mode. (b) is the definition of Screen, not of Blend mode. (c) is the definition of Overlay, not of Blend mode."
    },
    {
      "q": "Which term means: A blend mode that darkens the image below.",
      "choices": [
        "Multiply",
        "Screen",
        "Overlay",
        "Layer group"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Multiply is the term for: A blend mode that darkens the image below. (b) Screen means A blend mode that lightens the image below. (c) Overlay means A blend mode that boosts contrast in the image below. (d) Layer group means A folder in the Layers panel that holds several layers together."
    },
    {
      "q": "Which term means: A blend mode that lightens the image below.",
      "choices": [
        "Overlay",
        "Screen",
        "Layer group",
        "Duplicate layer"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Screen is the term for: A blend mode that lightens the image below. (a) Overlay means A blend mode that boosts contrast in the image below. (c) Layer group means A folder in the Layers panel that holds several layers together. (d) Duplicate layer means An exact copy of a layer, made with Ctrl or Command + J."
    },
    {
      "q": "Which term means: A blend mode that boosts contrast in the image below.",
      "choices": [
        "Layer group",
        "Duplicate layer",
        "Overlay",
        "Flatten"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Overlay is the term for: A blend mode that boosts contrast in the image below. (a) Layer group means A folder in the Layers panel that holds several layers together. (b) Duplicate layer means An exact copy of a layer, made with Ctrl or Command + J. (d) Flatten means Merging all layers into one, which cannot be undone after saving."
    },
    {
      "q": "Which term means: A folder in the Layers panel that holds several layers together.",
      "choices": [
        "Duplicate layer",
        "Flatten",
        "Non-destructive editing",
        "Layer group"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Layer group is the term for: A folder in the Layers panel that holds several layers together. (a) Duplicate layer means An exact copy of a layer, made with Ctrl or Command + J. (b) Flatten means Merging all layers into one, which cannot be undone after saving. (c) Non-destructive editing means Editing on separate layers so the original pixels are never changed."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Layers Essentials: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a layer is and why Photoshop is built on layers.</p>\n<p><strong>Key terms:</strong> Layer · Background layer · Opacity · Blend mode · Multiply · Screen · Overlay · Layer group.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a layer is and why Photoshop is built on layers.</li>\n<li>Create, rename, reorder, hide, and delete layers.</li>\n<li>Duplicate a layer and use it as a safe editing copy.</li>\n</ul>\n<p><strong>Watch out:</strong> Always work on a copy or a duplicate layer, and keep your original photo file untouched. A non-destructive edit can always be undone; a destructive one cannot.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
