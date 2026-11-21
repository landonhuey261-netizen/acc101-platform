// cmp108 - Module 8: Masks & Non-Destructive Editing
module.exports = {
  "number": 8,
  "slug": "masks-and-non-destructive-editing",
  "title": "Masks & Non-Destructive Editing",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a layer mask is and how black and white control it.",
    "Add a mask to a layer and paint on it with the Brush tool.",
    "Use a mask to limit an adjustment to part of a photo.",
    "Use Smart Objects for non-destructive transforms and filters.",
    "Explain why masks beat the Eraser tool."
  ],
  "sections": [
    {
      "heading": "What a Mask Is",
      "html": "<p>A layer mask is a black-and-white image attached to a layer that controls where the layer shows and where it hides. White on the mask means the layer is visible there. Black means it is hidden there. Gray means partly visible. Painting on the mask with black hides part of the layer; painting with white brings it back.</p>\n<p>That is the whole secret, and it is powerful: instead of erasing pixels, which destroys them, you hide them with a mask, and you can always bring them back. Select a layer, click the Add Layer Mask button at the bottom of the Layers panel, and a white mask appears next to the layer's thumbnail.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Click the mask thumbnail to paint on the mask, and click the layer thumbnail to paint on the layer itself. Mixing the two up is the most common mask mistake, so glance at the panel before you paint.</div></p>\n"
    },
    {
      "heading": "Painting on a Mask",
      "html": "<p>Choose the Brush tool, shortcut B, set the foreground color to black to hide or white to paint back in, and paint on the photo. Press X to swap black and white quickly, and D to reset them to black and white. A soft brush makes a gentle edge; a hard brush makes a sharp one.</p>\n<p>The mask thumbnail in the Layers panel shows your painting as a black-and-white picture. Alt-click or Option-click the thumbnail to see the mask itself, large, so you can check for stray marks. Alt-click or Option-click it again to return to the photo.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> If you make a mess of a mask, select it and press Ctrl or Command + I to invert it, or fill it with white or black from Edit, then Fill, and start again. A mask is never a mistake you cannot fix.</div></p>\n"
    },
    {
      "heading": "Masks on Adjustment Layers",
      "html": "<p>Every adjustment layer comes with its own mask, which is how you limit an adjustment to part of a photo. Add a Curves layer to brighten a dark face, fill its mask with black so the adjustment disappears, then paint white on the mask over just the face. The rest of the photo is untouched.</p>\n<p>That technique is the heart of professional photo editing: every change is an adjustment layer, and every adjustment layer is limited by a mask to exactly where it belongs. It takes longer than a global edit, but the result looks natural instead of processed.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Feather a mask's edge by selecting the mask and raising the Feather slider in the Properties panel. A slightly soft edge is almost always better than a razor-sharp one on a photo.</div></p>\n"
    },
    {
      "heading": "Smart Objects: The Other Safety Net",
      "html": "<p>A Smart Object is a layer that remembers the original pixels and lets you transform or filter them without damage. Convert a layer with right-click, then Convert to Smart Object. Now you can scale it up and down, rotate it, and apply filters, and Photoshop remembers the original every time.</p>\n<p>Filters applied to a Smart Object become Smart Filters, which you can turn off, edit, or mask individually, just like adjustment layers. A filter applied to a normal layer is permanent; the same filter on a Smart Object is reversible.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Use Smart Objects for any layer you plan to transform or filter more than once. The small icon on the layer thumbnail is the sign that the layer is protected.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Explain what a layer mask is and how black and white control it.</li>\n<li>Add a mask to a layer and paint on it with the Brush tool.</li>\n<li>Use a mask to limit an adjustment to part of a photo.</li>\n<li>Use Smart Objects for non-destructive transforms and filters.</li>\n<li>Explain why masks beat the Eraser tool.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Painting on the layer when you meant to paint on the mask, or vice versa. Check which thumbnail is highlighted before you paint.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Using the Eraser tool instead of a mask. Erasing destroys pixels; a mask only hides them and can always be undone.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain this module's main idea out loud in plain words, without looking, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Layer mask",
      "def": "A black-and-white image attached to a layer that controls where it shows or hides."
    },
    {
      "term": "Smart Object",
      "def": "A layer that preserves its original pixels through transforms and filters."
    },
    {
      "term": "Smart Filter",
      "def": "A filter applied to a Smart Object, which stays editable and maskable."
    },
    {
      "term": "Brush tool",
      "def": "The tool for painting on layers and masks; shortcut B."
    },
    {
      "term": "Foreground color",
      "def": "The color the Brush paints with; black hides on a mask, white reveals."
    },
    {
      "term": "Feather",
      "def": "Softening the edge of a mask so a change fades in gradually."
    },
    {
      "term": "Invert",
      "def": "Flipping a mask so black becomes white and white becomes black."
    },
    {
      "term": "Add Layer Mask button",
      "def": "The button at the bottom of the Layers panel that adds a mask to a layer."
    },
    {
      "term": "Mask thumbnail",
      "def": "The small black-and-white image in the Layers panel showing a layer's mask."
    },
    {
      "term": "Non-destructive editing",
      "def": "Editing with layers, masks, and Smart Objects so original pixels are never changed."
    },
    {
      "term": "Eraser tool",
      "def": "The tool that deletes pixels permanently, which masks should replace."
    },
    {
      "term": "Properties panel",
      "def": "The panel showing settings for the selected layer or mask."
    }
  ],
  "video": {
    "title": "Using Layer Masks in Photoshop - Day 6",
    "embedUrl": "https://www.youtube.com/embed/UUAAj9-Lu0A",
    "note": "PHLEARN on layer masks, Smart Objects, and blending modes. Practice: add an adjustment layer, fill its mask black, and paint the effect in only where you want it.",
    "more": [
      {
        "title": "Smart Objects in Photoshop - Day 16",
        "url": "https://www.youtube.com/watch?v=y3SEdmqRAG0"
      },
      {
        "title": "Explore Blending Modes in Photoshop - Day 18",
        "url": "https://www.youtube.com/watch?v=5dJl_Lr5TGQ"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Layer mask” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Layer mask — A black-and-white image attached to a layer that controls where it shows or hides. Step 2: It matters because it is part of: Explain what a layer mask is and how black and white control it. Step 3: An example from the module is the way layer mask shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Smart Object” and “Smart Filter”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Smart Object — A layer that preserves its original pixels through transforms and filters. Step 2: Smart Filter — A filter applied to a Smart Object, which stays editable and maskable. Step 3: They differ because the first is about smart object while the second is about smart filter; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Add a mask to a layer and paint on it with the Brush tool.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Add a mask to a layer and paint on it with the Brush tool. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Brush tool” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Brush tool — The tool for painting on layers and masks; shortcut B. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Foreground color — The color the Brush paints with; black hides on a mask, white reveals. Step 2: Feather — Softening the edge of a mask so a change fades in gradually. Step 3: Invert — Flipping a mask so black becomes white and white becomes black. Step 4: Add Layer Mask button — The button at the bottom of the Layers panel that adds a mask to a layer. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Use a mask to limit an adjustment to part of a photo. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Layer mask” mean?",
      "choices": [
        "A black-and-white image attached to a layer that controls where it shows or hides.",
        "A layer that preserves its original pixels through transforms and filters.",
        "A filter applied to a Smart Object, which stays editable and maskable.",
        "The tool for painting on layers and masks; shortcut B."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Layer mask means: A black-and-white image attached to a layer that controls where it shows or hides. (b) is the definition of Smart Object, not of Layer mask. (c) is the definition of Smart Filter, not of Layer mask. (d) is the definition of Brush tool, not of Layer mask."
    },
    {
      "q": "What does the term “Smart Object” mean?",
      "choices": [
        "A filter applied to a Smart Object, which stays editable and maskable.",
        "A layer that preserves its original pixels through transforms and filters.",
        "The tool for painting on layers and masks; shortcut B.",
        "The color the Brush paints with; black hides on a mask, white reveals."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Smart Object means: A layer that preserves its original pixels through transforms and filters. (a) is the definition of Smart Filter, not of Smart Object. (c) is the definition of Brush tool, not of Smart Object. (d) is the definition of Foreground color, not of Smart Object."
    },
    {
      "q": "What does the term “Smart Filter” mean?",
      "choices": [
        "The tool for painting on layers and masks; shortcut B.",
        "The color the Brush paints with; black hides on a mask, white reveals.",
        "A filter applied to a Smart Object, which stays editable and maskable.",
        "Softening the edge of a mask so a change fades in gradually."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Smart Filter means: A filter applied to a Smart Object, which stays editable and maskable. (a) is the definition of Brush tool, not of Smart Filter. (b) is the definition of Foreground color, not of Smart Filter. (d) is the definition of Feather, not of Smart Filter."
    },
    {
      "q": "What does the term “Brush tool” mean?",
      "choices": [
        "The color the Brush paints with; black hides on a mask, white reveals.",
        "Softening the edge of a mask so a change fades in gradually.",
        "Flipping a mask so black becomes white and white becomes black.",
        "The tool for painting on layers and masks; shortcut B."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Brush tool means: The tool for painting on layers and masks; shortcut B. (a) is the definition of Foreground color, not of Brush tool. (b) is the definition of Feather, not of Brush tool. (c) is the definition of Invert, not of Brush tool."
    },
    {
      "q": "Which term means: The color the Brush paints with; black hides on a mask, white reveals.",
      "choices": [
        "Foreground color",
        "Feather",
        "Invert",
        "Add Layer Mask button"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Foreground color is the term for: The color the Brush paints with; black hides on a mask, white reveals. (b) Feather means Softening the edge of a mask so a change fades in gradually. (c) Invert means Flipping a mask so black becomes white and white becomes black. (d) Add Layer Mask button means The button at the bottom of the Layers panel that adds a mask to a layer."
    },
    {
      "q": "Which term means: Softening the edge of a mask so a change fades in gradually.",
      "choices": [
        "Invert",
        "Feather",
        "Add Layer Mask button",
        "Mask thumbnail"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Feather is the term for: Softening the edge of a mask so a change fades in gradually. (a) Invert means Flipping a mask so black becomes white and white becomes black. (c) Add Layer Mask button means The button at the bottom of the Layers panel that adds a mask to a layer. (d) Mask thumbnail means The small black-and-white image in the Layers panel showing a layer's mask."
    },
    {
      "q": "Which term means: Flipping a mask so black becomes white and white becomes black.",
      "choices": [
        "Add Layer Mask button",
        "Mask thumbnail",
        "Invert",
        "Non-destructive editing"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Invert is the term for: Flipping a mask so black becomes white and white becomes black. (a) Add Layer Mask button means The button at the bottom of the Layers panel that adds a mask to a layer. (b) Mask thumbnail means The small black-and-white image in the Layers panel showing a layer's mask. (d) Non-destructive editing means Editing with layers, masks, and Smart Objects so original pixels are never changed."
    },
    {
      "q": "Which term means: The button at the bottom of the Layers panel that adds a mask to a layer.",
      "choices": [
        "Mask thumbnail",
        "Non-destructive editing",
        "Eraser tool",
        "Add Layer Mask button"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Add Layer Mask button is the term for: The button at the bottom of the Layers panel that adds a mask to a layer. (a) Mask thumbnail means The small black-and-white image in the Layers panel showing a layer's mask. (b) Non-destructive editing means Editing with layers, masks, and Smart Objects so original pixels are never changed. (c) Eraser tool means The tool that deletes pixels permanently, which masks should replace."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Masks & Non-Destructive Editing: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a layer mask is and how black and white control it.</p>\n<p><strong>Key terms:</strong> Layer mask · Smart Object · Smart Filter · Brush tool · Foreground color · Feather · Invert · Add Layer Mask button.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a layer mask is and how black and white control it.</li>\n<li>Add a mask to a layer and paint on it with the Brush tool.</li>\n<li>Use a mask to limit an adjustment to part of a photo.</li>\n</ul>\n<p><strong>Watch out:</strong> Always work on a copy or a duplicate layer, and keep your original photo file untouched. A non-destructive edit can always be undone; a destructive one cannot.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
