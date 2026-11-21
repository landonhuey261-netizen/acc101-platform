// cmp108 - Module 10: Filters & Effects
module.exports = {
  "number": 10,
  "slug": "filters-and-effects",
  "title": "Filters & Effects",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a filter does and when to use one.",
    "Use Blur, Sharpen, and Noise filters to clean up a photo.",
    "Use the Liquify filter to reshape small details.",
    "Apply a filter as a Smart Filter so it stays editable.",
    "Use Camera Raw as a filter for quick global edits."
  ],
  "sections": [
    {
      "heading": "What Filters Do",
      "html": "<p>A filter is a ready-made effect that changes a photo in a defined way: blurring it, sharpening it, adding grain, distorting it, or turning it into a painting. Photoshop ships with dozens, under the Filter menu, grouped into Blur, Sharpen, Noise, Distort, and more. Most of them are fun to try and easy to overdo.</p>\n<p>The rule for filters is the same as for seasoning: a little improves the dish, a lot ruins it. A small amount of sharpening makes a photo crisper. A large amount makes it look crunchy and artificial. A little blur softens a background. A large amount makes the photo look out of focus.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Before applying a filter, convert the layer to a Smart Object so the filter becomes a Smart Filter. Then you can lower its strength, mask it, or remove it later without damage.</div></p>\n"
    },
    {
      "heading": "Blur, Sharpen, and Noise",
      "html": "<p>Gaussian Blur, under Filter, then Blur, softens a photo evenly. It is the right tool for softening a distracting background or for a gentle glow when combined with a low opacity. Field Blur and Iris Blur, under Filter, then Blur Gallery, let you blur with a focal point, which is more natural for photos.</p>\n<p>Sharpening does the opposite: it increases the contrast along edges so they look crisper. Use Filter, then Sharpen, then Unsharp Mask or Smart Sharpen, with small settings, and view the photo at 100 percent so you can judge the result. Sharpen last, after resizing, because resizing changes what sharp means.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Noise is the grain that appears in dark photos. Filter, then Noise, then Reduce Noise can clean it up, but it also softens fine detail, so use it lightly. Adding a little grain back with the Add Noise filter can actually make a photo look more natural after heavy editing.</div></p>\n"
    },
    {
      "heading": "Liquify and Reshaping",
      "html": "<p>Liquify, under Filter, then Liquify, lets you push and pull pixels like clay. It is used for small fixes: straightening a slightly tilted collar, fixing a distorted reflection, or nudging a stray hair. The Forward Warp tool pushes pixels where you drag, and the Freeze Mask tool protects areas you do not want to move.</p>\n<p>Liquify is also the tool behind unrealistic body reshaping, and this course teaches the honest use: small corrections that make the photo true to the scene, not a different body. A small nudge is a correction; a large reshape is a deception, and a client can tell.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Work on a duplicate layer or a Smart Object, use a large soft brush, and make small moves. Zoom out often, because a warp that looks fine up close can look warped in the whole photo.</div></p>\n"
    },
    {
      "heading": "Camera Raw as a Filter",
      "html": "<p>Filter, then Camera Raw Filter opens the Camera Raw controls on any layer, not just raw files. It is a fast way to fix exposure, white balance, and color in one place, with sliders that are easier to use than Levels and Curves for a quick global edit.</p>\n<p>Use it for the first pass on a photo, then use adjustment layers for the fine work. Because it runs as a Smart Filter on a Smart Object, you can reopen it and change the settings at any time.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Camera Raw also has a detail panel for sharpening and noise reduction, and a lens correction panel that fixes the distortion and dark corners some lenses produce. Those two panels alone can rescue a photo that looks slightly off for reasons you cannot name.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Explain what a filter does and when to use one.</li>\n<li>Use Blur, Sharpen, and Noise filters to clean up a photo.</li>\n<li>Use the Liquify filter to reshape small details.</li>\n<li>Apply a filter as a Smart Filter so it stays editable.</li>\n<li>Use Camera Raw as a filter for quick global edits.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Applying a filter to a normal layer so it becomes permanent. Convert to a Smart Object first so the filter stays editable.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Sharpening at 50 percent zoom and overshooting. Judge sharpening at 100 percent, where you see the real pixels.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain this module's main idea out loud in plain words, without looking, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Filter",
      "def": "A ready-made effect that changes a photo in a defined way."
    },
    {
      "term": "Gaussian Blur",
      "def": "A filter that softens a photo evenly."
    },
    {
      "term": "Blur Gallery",
      "def": "The set of blurs with a focal point, such as Field Blur and Iris Blur."
    },
    {
      "term": "Unsharp Mask",
      "def": "A sharpening filter that increases contrast along edges."
    },
    {
      "term": "Smart Sharpen",
      "def": "A sharpening filter with more control than Unsharp Mask."
    },
    {
      "term": "Reduce Noise",
      "def": "A filter that cleans up grain in dark photos."
    },
    {
      "term": "Liquify",
      "def": "The filter that pushes and pulls pixels like clay."
    },
    {
      "term": "Forward Warp",
      "def": "The Liquify tool that pushes pixels where you drag."
    },
    {
      "term": "Smart Filter",
      "def": "A filter on a Smart Object that stays editable and maskable."
    },
    {
      "term": "Camera Raw Filter",
      "def": "The filter that opens Camera Raw controls on any layer."
    },
    {
      "term": "Lens correction",
      "def": "Fixing the distortion and dark corners a lens adds to a photo."
    },
    {
      "term": "Grain",
      "def": "The speckled texture in a photo, also called noise."
    }
  ],
  "video": {
    "title": "Using The Liquify Tool in Photoshop - Day 15",
    "embedUrl": "https://www.youtube.com/embed/qPrDFI8SZLE",
    "note": "PHLEARN on the Liquify tool and Blend If, plus a long-exposure effect tutorial. Try one filter as a Smart Filter and mask it to part of the photo.",
    "more": [
      {
        "title": "Discover Blend If in Photoshop - Day 17",
        "url": "https://www.youtube.com/watch?v=GWJXMNA5OSM"
      },
      {
        "title": "Long Exposure Effect - Adobe Photoshop",
        "url": "https://www.youtube.com/watch?v=BXYQf8kxJs8"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Filter” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Filter — A ready-made effect that changes a photo in a defined way. Step 2: It matters because it is part of: Explain what a filter does and when to use one. Step 3: An example from the module is the way filter shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Gaussian Blur” and “Blur Gallery”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Gaussian Blur — A filter that softens a photo evenly. Step 2: Blur Gallery — The set of blurs with a focal point, such as Field Blur and Iris Blur. Step 3: They differ because the first is about gaussian blur while the second is about blur gallery; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Use Blur, Sharpen, and Noise filters to clean up a photo.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Use Blur, Sharpen, and Noise filters to clean up a photo. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Unsharp Mask” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Unsharp Mask — A sharpening filter that increases contrast along edges. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Smart Sharpen — A sharpening filter with more control than Unsharp Mask. Step 2: Reduce Noise — A filter that cleans up grain in dark photos. Step 3: Liquify — The filter that pushes and pulls pixels like clay. Step 4: Forward Warp — The Liquify tool that pushes pixels where you drag. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Use the Liquify filter to reshape small details. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Filter” mean?",
      "choices": [
        "A ready-made effect that changes a photo in a defined way.",
        "A filter that softens a photo evenly.",
        "The set of blurs with a focal point, such as Field Blur and Iris Blur.",
        "A sharpening filter that increases contrast along edges."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Filter means: A ready-made effect that changes a photo in a defined way. (b) is the definition of Gaussian Blur, not of Filter. (c) is the definition of Blur Gallery, not of Filter. (d) is the definition of Unsharp Mask, not of Filter."
    },
    {
      "q": "What does the term “Gaussian Blur” mean?",
      "choices": [
        "The set of blurs with a focal point, such as Field Blur and Iris Blur.",
        "A filter that softens a photo evenly.",
        "A sharpening filter that increases contrast along edges.",
        "A sharpening filter with more control than Unsharp Mask."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Gaussian Blur means: A filter that softens a photo evenly. (a) is the definition of Blur Gallery, not of Gaussian Blur. (c) is the definition of Unsharp Mask, not of Gaussian Blur. (d) is the definition of Smart Sharpen, not of Gaussian Blur."
    },
    {
      "q": "What does the term “Blur Gallery” mean?",
      "choices": [
        "A sharpening filter that increases contrast along edges.",
        "A sharpening filter with more control than Unsharp Mask.",
        "The set of blurs with a focal point, such as Field Blur and Iris Blur.",
        "A filter that cleans up grain in dark photos."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Blur Gallery means: The set of blurs with a focal point, such as Field Blur and Iris Blur. (a) is the definition of Unsharp Mask, not of Blur Gallery. (b) is the definition of Smart Sharpen, not of Blur Gallery. (d) is the definition of Reduce Noise, not of Blur Gallery."
    },
    {
      "q": "What does the term “Unsharp Mask” mean?",
      "choices": [
        "A sharpening filter with more control than Unsharp Mask.",
        "A filter that cleans up grain in dark photos.",
        "The filter that pushes and pulls pixels like clay.",
        "A sharpening filter that increases contrast along edges."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Unsharp Mask means: A sharpening filter that increases contrast along edges. (a) is the definition of Smart Sharpen, not of Unsharp Mask. (b) is the definition of Reduce Noise, not of Unsharp Mask. (c) is the definition of Liquify, not of Unsharp Mask."
    },
    {
      "q": "Which term means: A sharpening filter with more control than Unsharp Mask.",
      "choices": [
        "Smart Sharpen",
        "Reduce Noise",
        "Liquify",
        "Forward Warp"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Smart Sharpen is the term for: A sharpening filter with more control than Unsharp Mask. (b) Reduce Noise means A filter that cleans up grain in dark photos. (c) Liquify means The filter that pushes and pulls pixels like clay. (d) Forward Warp means The Liquify tool that pushes pixels where you drag."
    },
    {
      "q": "Which term means: A filter that cleans up grain in dark photos.",
      "choices": [
        "Liquify",
        "Reduce Noise",
        "Forward Warp",
        "Smart Filter"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Reduce Noise is the term for: A filter that cleans up grain in dark photos. (a) Liquify means The filter that pushes and pulls pixels like clay. (c) Forward Warp means The Liquify tool that pushes pixels where you drag. (d) Smart Filter means A filter on a Smart Object that stays editable and maskable."
    },
    {
      "q": "Which term means: The filter that pushes and pulls pixels like clay.",
      "choices": [
        "Forward Warp",
        "Smart Filter",
        "Liquify",
        "Camera Raw Filter"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Liquify is the term for: The filter that pushes and pulls pixels like clay. (a) Forward Warp means The Liquify tool that pushes pixels where you drag. (b) Smart Filter means A filter on a Smart Object that stays editable and maskable. (d) Camera Raw Filter means The filter that opens Camera Raw controls on any layer."
    },
    {
      "q": "Which term means: The Liquify tool that pushes pixels where you drag.",
      "choices": [
        "Smart Filter",
        "Camera Raw Filter",
        "Lens correction",
        "Forward Warp"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Forward Warp is the term for: The Liquify tool that pushes pixels where you drag. (a) Smart Filter means A filter on a Smart Object that stays editable and maskable. (b) Camera Raw Filter means The filter that opens Camera Raw controls on any layer. (c) Lens correction means Fixing the distortion and dark corners a lens adds to a photo."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Filters & Effects: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a filter does and when to use one.</p>\n<p><strong>Key terms:</strong> Filter · Gaussian Blur · Blur Gallery · Unsharp Mask · Smart Sharpen · Reduce Noise · Liquify · Forward Warp.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a filter does and when to use one.</li>\n<li>Use Blur, Sharpen, and Noise filters to clean up a photo.</li>\n<li>Use the Liquify filter to reshape small details.</li>\n</ul>\n<p><strong>Watch out:</strong> Always work on a copy or a duplicate layer, and keep your original photo file untouched. A non-destructive edit can always be undone; a destructive one cannot.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
