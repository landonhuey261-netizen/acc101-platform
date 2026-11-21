// cmp108 - Module 6: Retouching: Healing & Cloning
module.exports = {
  "number": 6,
  "slug": "retouching-healing-and-cloning",
  "title": "Retouching: Healing & Cloning",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the difference between healing and cloning.",
    "Remove blemishes with the Spot Healing Brush.",
    "Remove larger objects with the Healing Brush and Clone Stamp.",
    "Retouch on a separate layer so the original stays safe.",
    "Retouch skin naturally without making it look plastic."
  ],
  "sections": [
    {
      "heading": "Healing vs Cloning",
      "html": "<p>Retouching is removing what should not be there: a spot on a cheek, a bin in the background, a stray hair across a face. Photoshop offers two families of tools for this. Healing tools copy pixels from a clean area and blend them with the area around the blemish, so the repair matches the local color and light. Cloning tools copy pixels exactly, with no blending, which is better for sharp edges and patterns.</p>\n<p>The Spot Healing Brush, shortcut J, is the quick one: click on a blemish and Photoshop samples the area around it automatically and fills the spot. The Healing Brush, also under J, lets you choose the sample point yourself with Alt-click on Windows or Option-click on a Mac. The Clone Stamp, shortcut S, copies exactly what you sample, which is ideal for removing an object against a sharp edge such as a wall.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Start with the Spot Healing Brush for small spots. If it smears or guesses wrong, switch to the Healing Brush with a manual sample. If the area has a hard edge, use the Clone Stamp.</div></p>\n"
    },
    {
      "heading": "Retouching on a Separate Layer",
      "html": "<p>Never retouch on the Background layer. Create a new empty layer above it, name it Retouch, and set the healing tools to sample Current and Below in the options bar. Your repairs land on the empty layer, the original photo stays untouched below, and you can erase a repair or delete the whole layer if it goes wrong.</p>\n<p>Work zoomed in, at 100 percent or more, so you can see what you are doing. Use a brush slightly larger than the blemish, with a soft edge, and click once per spot instead of scrubbing. Short, careful clicks beat long strokes, which repeat the same texture and start to look obvious.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> After each repair, zoom out to check the whole face. Repairs that look perfect at 200 percent can look strange at normal size, and repairs that look invisible at normal size are the goal.</div></p>\n"
    },
    {
      "heading": "Skin: Less Is More",
      "html": "<p>The biggest beginner mistake in portrait retouching is removing every pore and line until the skin looks like plastic. Real skin has texture, and a good retouch keeps it. Remove temporary things: spots, stray hairs, a scratch. Keep permanent things: moles, freckles, and the lines that make a face recognizable.</p>\n<p>If you use the Clone Stamp on skin, lower the opacity to around 50 percent and build the repair up with two light passes instead of one heavy one. If you smooth skin, do it on a separate layer and lower that layer's opacity until the texture comes back.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Show the photo to someone else and ask what they notice. If they notice the retouching, you have done too much. The best retouching is invisible.</div></p>\n"
    },
    {
      "heading": "Removing Objects and Distractions",
      "html": "<p>To remove a larger object, such as a sign or a person at the edge of a frame, select it loosely first, then use Content-Aware Fill: Edit, then Content-Aware Fill, and Photoshop invents what should be behind it from the surrounding pixels. Check the preview, adjust the sampling area if it picks up the wrong texture, and apply it on a new layer.</p>\n<p>For a clean background, the Clone Stamp with a soft brush and a sample from a nearby clean area is often more predictable than Content-Aware Fill. Work in small sections, re-sample often, and keep the light direction in mind: a repair that ignores the direction of shadows looks wrong even when the colors match.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Step back and compare with the original. If you cannot tell where the object was, the job is done. If you can, the repair needs another pass, usually with a smaller brush and a fresh sample point.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Explain the difference between healing and cloning.</li>\n<li>Remove blemishes with the Spot Healing Brush.</li>\n<li>Remove larger objects with the Healing Brush and Clone Stamp.</li>\n<li>Retouch on a separate layer so the original stays safe.</li>\n<li>Retouch skin naturally without making it look plastic.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Retouching on the Background layer so a mistake cannot be undone. Always retouch on a separate layer set to sample Current and Below.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Smoothing skin until it looks plastic. Remove temporary spots, keep texture, freckles, and moles.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain this module's main idea out loud in plain words, without looking, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Spot Healing Brush",
      "def": "The tool that removes small blemishes automatically; shortcut J."
    },
    {
      "term": "Healing Brush",
      "def": "The tool that repairs using a sample point you choose; shortcut J."
    },
    {
      "term": "Clone Stamp",
      "def": "The tool that copies pixels exactly from a sample point; shortcut S."
    },
    {
      "term": "Sample",
      "def": "The clean area a retouching tool copies pixels from."
    },
    {
      "term": "Current and Below",
      "def": "The sample setting that lets a tool read the layers below an empty retouch layer."
    },
    {
      "term": "Content-Aware Fill",
      "def": "The feature that invents what should be behind a removed object."
    },
    {
      "term": "Patch tool",
      "def": "The tool that repairs an area by dragging a selection over clean pixels."
    },
    {
      "term": "Brush hardness",
      "def": "How soft or sharp the edge of a brush is."
    },
    {
      "term": "Opacity",
      "def": "How strongly a brush or layer applies its effect."
    },
    {
      "term": "Flow",
      "def": "How quickly a brush applies its effect as you paint."
    },
    {
      "term": "Texture",
      "def": "The fine detail of a surface, such as skin pores, which good retouching preserves."
    },
    {
      "term": "Blemish",
      "def": "A temporary mark on skin, such as a spot, that retouching removes."
    }
  ],
  "video": {
    "title": "Basic Retouching in Photoshop - Day 23",
    "embedUrl": "https://www.youtube.com/embed/PGrlJpYHZo4",
    "note": "PHLEARN on basic and advanced retouching, plus a blemish-removal tutorial. Retouch one portrait on a separate layer and compare before and after.",
    "more": [
      {
        "title": "Blemish Removal - Skin Retouching Photoshop Tutorial",
        "url": "https://www.youtube.com/watch?v=uBnuO-_V5sQ"
      },
      {
        "title": "Advanced Retouching in Photoshop - Day 24",
        "url": "https://www.youtube.com/watch?v=kMDT_ZNFtUk"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Spot Healing Brush” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Spot Healing Brush — The tool that removes small blemishes automatically; shortcut J. Step 2: It matters because it is part of: Explain the difference between healing and cloning. Step 3: An example from the module is the way spot healing brush shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Healing Brush” and “Clone Stamp”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Healing Brush — The tool that repairs using a sample point you choose; shortcut J. Step 2: Clone Stamp — The tool that copies pixels exactly from a sample point; shortcut S. Step 3: They differ because the first is about healing brush while the second is about clone stamp; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Remove blemishes with the Spot Healing Brush.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Remove blemishes with the Spot Healing Brush. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Sample” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Sample — The clean area a retouching tool copies pixels from. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Current and Below — The sample setting that lets a tool read the layers below an empty retouch layer. Step 2: Content-Aware Fill — The feature that invents what should be behind a removed object. Step 3: Patch tool — The tool that repairs an area by dragging a selection over clean pixels. Step 4: Brush hardness — How soft or sharp the edge of a brush is. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Remove larger objects with the Healing Brush and Clone Stamp. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Spot Healing Brush” mean?",
      "choices": [
        "The tool that removes small blemishes automatically; shortcut J.",
        "The tool that repairs using a sample point you choose; shortcut J.",
        "The tool that copies pixels exactly from a sample point; shortcut S.",
        "The clean area a retouching tool copies pixels from."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Spot Healing Brush means: The tool that removes small blemishes automatically; shortcut J. (b) is the definition of Healing Brush, not of Spot Healing Brush. (c) is the definition of Clone Stamp, not of Spot Healing Brush. (d) is the definition of Sample, not of Spot Healing Brush."
    },
    {
      "q": "What does the term “Healing Brush” mean?",
      "choices": [
        "The tool that copies pixels exactly from a sample point; shortcut S.",
        "The tool that repairs using a sample point you choose; shortcut J.",
        "The clean area a retouching tool copies pixels from.",
        "The sample setting that lets a tool read the layers below an empty retouch layer."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Healing Brush means: The tool that repairs using a sample point you choose; shortcut J. (a) is the definition of Clone Stamp, not of Healing Brush. (c) is the definition of Sample, not of Healing Brush. (d) is the definition of Current and Below, not of Healing Brush."
    },
    {
      "q": "What does the term “Clone Stamp” mean?",
      "choices": [
        "The clean area a retouching tool copies pixels from.",
        "The sample setting that lets a tool read the layers below an empty retouch layer.",
        "The tool that copies pixels exactly from a sample point; shortcut S.",
        "The feature that invents what should be behind a removed object."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Clone Stamp means: The tool that copies pixels exactly from a sample point; shortcut S. (a) is the definition of Sample, not of Clone Stamp. (b) is the definition of Current and Below, not of Clone Stamp. (d) is the definition of Content-Aware Fill, not of Clone Stamp."
    },
    {
      "q": "What does the term “Sample” mean?",
      "choices": [
        "The sample setting that lets a tool read the layers below an empty retouch layer.",
        "The feature that invents what should be behind a removed object.",
        "The tool that repairs an area by dragging a selection over clean pixels.",
        "The clean area a retouching tool copies pixels from."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Sample means: The clean area a retouching tool copies pixels from. (a) is the definition of Current and Below, not of Sample. (b) is the definition of Content-Aware Fill, not of Sample. (c) is the definition of Patch tool, not of Sample."
    },
    {
      "q": "Which term means: The sample setting that lets a tool read the layers below an empty retouch layer.",
      "choices": [
        "Current and Below",
        "Content-Aware Fill",
        "Patch tool",
        "Brush hardness"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Current and Below is the term for: The sample setting that lets a tool read the layers below an empty retouch layer. (b) Content-Aware Fill means The feature that invents what should be behind a removed object. (c) Patch tool means The tool that repairs an area by dragging a selection over clean pixels. (d) Brush hardness means How soft or sharp the edge of a brush is."
    },
    {
      "q": "Which term means: The feature that invents what should be behind a removed object.",
      "choices": [
        "Patch tool",
        "Content-Aware Fill",
        "Brush hardness",
        "Opacity"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Content-Aware Fill is the term for: The feature that invents what should be behind a removed object. (a) Patch tool means The tool that repairs an area by dragging a selection over clean pixels. (c) Brush hardness means How soft or sharp the edge of a brush is. (d) Opacity means How strongly a brush or layer applies its effect."
    },
    {
      "q": "Which term means: The tool that repairs an area by dragging a selection over clean pixels.",
      "choices": [
        "Brush hardness",
        "Opacity",
        "Patch tool",
        "Flow"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Patch tool is the term for: The tool that repairs an area by dragging a selection over clean pixels. (a) Brush hardness means How soft or sharp the edge of a brush is. (b) Opacity means How strongly a brush or layer applies its effect. (d) Flow means How quickly a brush applies its effect as you paint."
    },
    {
      "q": "Which term means: How soft or sharp the edge of a brush is.",
      "choices": [
        "Opacity",
        "Flow",
        "Texture",
        "Brush hardness"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Brush hardness is the term for: How soft or sharp the edge of a brush is. (a) Opacity means How strongly a brush or layer applies its effect. (b) Flow means How quickly a brush applies its effect as you paint. (c) Texture means The fine detail of a surface, such as skin pores, which good retouching preserves."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Retouching: Healing & Cloning: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain the difference between healing and cloning.</p>\n<p><strong>Key terms:</strong> Spot Healing Brush · Healing Brush · Clone Stamp · Sample · Current and Below · Content-Aware Fill · Patch tool · Brush hardness.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain the difference between healing and cloning.</li>\n<li>Remove blemishes with the Spot Healing Brush.</li>\n<li>Remove larger objects with the Healing Brush and Clone Stamp.</li>\n</ul>\n<p><strong>Watch out:</strong> Always work on a copy or a duplicate layer, and keep your original photo file untouched. A non-destructive edit can always be undone; a destructive one cannot.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
