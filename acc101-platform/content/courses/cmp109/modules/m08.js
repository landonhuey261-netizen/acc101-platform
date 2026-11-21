// cmp109 - Module 8: Color Correction & Grading
module.exports = {
  "number": 8,
  "slug": "color-correction-and-grading",
  "title": "Color Correction & Grading",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the difference between color correction and color grading.",
    "Fix exposure, white balance, and contrast with Lumetri Color.",
    "Match the color of two clips so a scene looks consistent.",
    "Apply a creative look with the Creative section or a LUT.",
    "Copy color settings from one clip to others with Paste Attributes."
  ],
  "sections": [
    {
      "heading": "Correction First, Grading Second",
      "html": "<p>Color correction fixes what is wrong: a shot that is too dark, too yellow, or washed out. Color grading adds a look: warm and golden for a sunset, cool and blue for a night scene. Correct first, so every clip looks natural and consistent, and only then grade, so the look sits on top of a solid base.</p>\n<p>A scene cut between two cameras, or between indoors and outdoors, will often have clips that do not match. The viewer's eye notices the change even if they cannot name it. Matching clips is the most important color skill for a beginner, and it matters more than any creative look.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Work on one clip until it looks right, then copy its settings to the others. That is faster and more consistent than grading every clip from scratch.</div></p>\n"
    },
    {
      "heading": "Lumetri Color: Basic Correction",
      "html": "<p>The Lumetri Color panel, under Window, then Lumetri Color, is where color work happens. Its Basic Correction section holds the main controls: exposure, contrast, highlights, shadows, whites, blacks, temperature, tint, and saturation. Start with white balance: use the eyedropper on something that should be white or gray, or drag the temperature slider toward orange to warm the shot and toward blue to cool it.</p>\n<p>Next, set exposure and contrast so the picture has true blacks and true whites without clipping either end. The waveform and vectorscope, opened from the Lumetri Scopes panel, show you the truth: the waveform shows brightness from black at the bottom to white at the top, and it should touch both ends without flattening against them.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> The Auto button in Basic Correction gives a starting point by analyzing the clip. Use it as a starting point, not a finish: look at the result, then adjust the sliders yourself until the picture looks right to your eye.</div></p>\n"
    },
    {
      "heading": "Matching Clips and Copying Settings",
      "html": "<p>To match two clips, open the second clip, then use Color Wheels and Match in Lumetri Color to compare it with the first and apply a match. Check the result on avectorscope and by eye: skin tones should look the same in both shots, and the same wall should be the same color in both.</p>\n<p>Once the first clip of a scene looks right, copy its Lumetri Color effect to the rest: select the clip, press Ctrl or Command + C, select the other clips, then choose Edit, then Paste Attributes, and tick Lumetri Color only. Every clip in the scene now shares the same correction, and you can fine-tune individual clips afterwards.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> If a clip looks wrong after pasting, do not fight it: reset its Lumetri settings and correct it on its own. A clip shot in different light needs its own correction, not a copy of someone else's.</div></p>\n"
    },
    {
      "heading": "Creative Looks and LUTs",
      "html": "<p>The Creative section of Lumetri Color holds looks: ready-made styles that change the mood of a shot in one click, with a slider to control how strongly they apply. A look is a starting point: apply it, then lower its intensity until the effect is subtle, and adjust the Faded Film, Sharpen, and Vibrance sliders to taste.</p>\n<p>A LUT, or Look Up Table, is a file that maps colors from one set to another, used like a preset for color. You can load a LUT in the Creative section's Look menu. Use LUTs from sources you trust, and always correct the clip first: a LUT on an uncorrected clip bakes in the clip's problems instead of fixing them.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> The best grade is usually the one the viewer does not notice. If someone watches your video and says the color looks nice, the grade worked. If they say the color looks graded, it is probably too strong.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Explain the difference between color correction and color grading.</li>\n<li>Fix exposure, white balance, and contrast with Lumetri Color.</li>\n<li>Match the color of two clips so a scene looks consistent.</li>\n<li>Apply a creative look with the Creative section or a LUT.</li>\n<li>Copy color settings from one clip to others with Paste Attributes.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Grading before correcting. Fix exposure and white balance first, or the look bakes in the problems.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Applying a LUT at full strength. Lower its intensity until the look is subtle, and check skin tones.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain this module's main idea out loud in plain words, without looking, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Color correction",
      "def": "Fixing exposure, white balance, and contrast so a clip looks natural."
    },
    {
      "term": "Color grading",
      "def": "Adding a creative look or mood on top of a corrected clip."
    },
    {
      "term": "Lumetri Color",
      "def": "The Premiere Pro panel for color correction and grading."
    },
    {
      "term": "White balance",
      "def": "The setting that decides what counts as white, removing color casts."
    },
    {
      "term": "Temperature",
      "def": "The Lumetri slider that warms a shot toward orange or cools it toward blue."
    },
    {
      "term": "Waveform",
      "def": "The scope showing brightness from black at the bottom to white at the top."
    },
    {
      "term": "Vectorscope",
      "def": "The scope showing the color balance of a shot."
    },
    {
      "term": "LUT",
      "def": "A Look Up Table file that applies a color style to a clip."
    },
    {
      "term": "Paste Attributes",
      "def": "The command that copies effects from one clip to others."
    },
    {
      "term": "Creative section",
      "def": "The Lumetri section holding looks and creative color controls."
    },
    {
      "term": "Exposure",
      "def": "How bright a clip is overall."
    },
    {
      "term": "Contrast",
      "def": "The difference between the darkest and brightest parts of a picture."
    },
    {
      "term": "Saturation",
      "def": "How strong or intense the colors in a clip are."
    }
  ],
  "video": {
    "title": "How To Color Correct Like A PRO! | Learn Premiere Pro 2021 in 10 minutes",
    "embedUrl": "https://www.youtube.com/embed/PaYUbnjw8sU",
    "note": "A color-correction walkthrough, a sky replacement tutorial, and a video editing course. Practice: correct one clip, then paste its attributes to the rest of the scene.",
    "more": [
      {
        "title": "Easy Sky Replacement Adobe Premiere Pro Tutorial",
        "url": "https://www.youtube.com/watch?v=NgeTKqdw8Wk"
      },
      {
        "title": "Video Editing Course | Miracamp",
        "url": "https://www.youtube.com/watch?v=vi9M9eb8bY4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Color correction” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Color correction — Fixing exposure, white balance, and contrast so a clip looks natural. Step 2: It matters because it is part of: Explain the difference between color correction and color grading. Step 3: An example from the module is the way color correction shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Color grading” and “Lumetri Color”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Color grading — Adding a creative look or mood on top of a corrected clip. Step 2: Lumetri Color — The Premiere Pro panel for color correction and grading. Step 3: They differ because the first is about color grading while the second is about lumetri color; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Fix exposure, white balance, and contrast with Lumetri Color.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Fix exposure, white balance, and contrast with Lumetri Color. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “White balance” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: White balance — The setting that decides what counts as white, removing color casts. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Temperature — The Lumetri slider that warms a shot toward orange or cools it toward blue. Step 2: Waveform — The scope showing brightness from black at the bottom to white at the top. Step 3: Vectorscope — The scope showing the color balance of a shot. Step 4: LUT — A Look Up Table file that applies a color style to a clip. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Match the color of two clips so a scene looks consistent. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Color correction” mean?",
      "choices": [
        "Fixing exposure, white balance, and contrast so a clip looks natural.",
        "Adding a creative look or mood on top of a corrected clip.",
        "The Premiere Pro panel for color correction and grading.",
        "The setting that decides what counts as white, removing color casts."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Color correction means: Fixing exposure, white balance, and contrast so a clip looks natural. (b) is the definition of Color grading, not of Color correction. (c) is the definition of Lumetri Color, not of Color correction. (d) is the definition of White balance, not of Color correction."
    },
    {
      "q": "What does the term “Color grading” mean?",
      "choices": [
        "The Premiere Pro panel for color correction and grading.",
        "Adding a creative look or mood on top of a corrected clip.",
        "The setting that decides what counts as white, removing color casts.",
        "The Lumetri slider that warms a shot toward orange or cools it toward blue."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Color grading means: Adding a creative look or mood on top of a corrected clip. (a) is the definition of Lumetri Color, not of Color grading. (c) is the definition of White balance, not of Color grading. (d) is the definition of Temperature, not of Color grading."
    },
    {
      "q": "What does the term “Lumetri Color” mean?",
      "choices": [
        "The setting that decides what counts as white, removing color casts.",
        "The Lumetri slider that warms a shot toward orange or cools it toward blue.",
        "The Premiere Pro panel for color correction and grading.",
        "The scope showing brightness from black at the bottom to white at the top."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Lumetri Color means: The Premiere Pro panel for color correction and grading. (a) is the definition of White balance, not of Lumetri Color. (b) is the definition of Temperature, not of Lumetri Color. (d) is the definition of Waveform, not of Lumetri Color."
    },
    {
      "q": "What does the term “White balance” mean?",
      "choices": [
        "The Lumetri slider that warms a shot toward orange or cools it toward blue.",
        "The scope showing brightness from black at the bottom to white at the top.",
        "The scope showing the color balance of a shot.",
        "The setting that decides what counts as white, removing color casts."
      ],
      "answer": 3,
      "explanation": "Correct: (d). White balance means: The setting that decides what counts as white, removing color casts. (a) is the definition of Temperature, not of White balance. (b) is the definition of Waveform, not of White balance. (c) is the definition of Vectorscope, not of White balance."
    },
    {
      "q": "Which term means: The Lumetri slider that warms a shot toward orange or cools it toward blue.",
      "choices": [
        "Temperature",
        "Waveform",
        "Vectorscope",
        "LUT"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Temperature is the term for: The Lumetri slider that warms a shot toward orange or cools it toward blue. (b) Waveform means The scope showing brightness from black at the bottom to white at the top. (c) Vectorscope means The scope showing the color balance of a shot. (d) LUT means A Look Up Table file that applies a color style to a clip."
    },
    {
      "q": "Which term means: The scope showing brightness from black at the bottom to white at the top.",
      "choices": [
        "Vectorscope",
        "Waveform",
        "LUT",
        "Paste Attributes"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Waveform is the term for: The scope showing brightness from black at the bottom to white at the top. (a) Vectorscope means The scope showing the color balance of a shot. (c) LUT means A Look Up Table file that applies a color style to a clip. (d) Paste Attributes means The command that copies effects from one clip to others."
    },
    {
      "q": "Which term means: The scope showing the color balance of a shot.",
      "choices": [
        "LUT",
        "Paste Attributes",
        "Vectorscope",
        "Creative section"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Vectorscope is the term for: The scope showing the color balance of a shot. (a) LUT means A Look Up Table file that applies a color style to a clip. (b) Paste Attributes means The command that copies effects from one clip to others. (d) Creative section means The Lumetri section holding looks and creative color controls."
    },
    {
      "q": "Which term means: A Look Up Table file that applies a color style to a clip.",
      "choices": [
        "Paste Attributes",
        "Creative section",
        "Exposure",
        "LUT"
      ],
      "answer": 3,
      "explanation": "Correct: (d). LUT is the term for: A Look Up Table file that applies a color style to a clip. (a) Paste Attributes means The command that copies effects from one clip to others. (b) Creative section means The Lumetri section holding looks and creative color controls. (c) Exposure means How bright a clip is overall."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Color Correction & Grading: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain the difference between color correction and color grading.</p>\n<p><strong>Key terms:</strong> Color correction · Color grading · Lumetri Color · White balance · Temperature · Waveform · Vectorscope · LUT.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain the difference between color correction and color grading.</li>\n<li>Fix exposure, white balance, and contrast with Lumetri Color.</li>\n<li>Match the color of two clips so a scene looks consistent.</li>\n</ul>\n<p><strong>Watch out:</strong> Keep your original media files untouched and backed up. Premiere Pro edits by reference: it never changes your source files, so protect them and never move or rename them mid-project.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
