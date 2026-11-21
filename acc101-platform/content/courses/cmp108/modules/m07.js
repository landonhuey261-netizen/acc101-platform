// cmp108 - Module 7: Color & Light Adjustments
module.exports = {
  "number": 7,
  "slug": "color-and-light-adjustments",
  "title": "Color & Light Adjustments",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain brightness, contrast, exposure, and white balance in plain words.",
    "Use Levels and Curves to fix light and tone.",
    "Use Hue/Saturation and Vibrance to control color.",
    "Fix a photo that is too dark, too bright, or too yellow.",
    "Use adjustment layers so every change stays editable."
  ],
  "sections": [
    {
      "heading": "Light First, Color Second",
      "html": "<p>Every photo edit should fix light before color. If a photo is too dark, too bright, or flat, no amount of color work will save it. The light controls are brightness, which lifts everything; contrast, which pushes brights and darks apart; and exposure, which mimics changing the camera's exposure. Fix those, then look at color.</p>\n<p>White balance is the other half of the job: it decides what counts as white in the photo. A photo shot indoors often looks yellow because the camera guessed the wrong light. Fixing white balance removes the color cast so whites look white and skin looks natural.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Work in this order: exposure and contrast, then white balance, then color strength. It is the order professionals use, because each step depends on the one before it.</div></p>\n"
    },
    {
      "heading": "Levels and Curves",
      "html": "<p>Levels shows a histogram, a graph of how many pixels are dark, mid-tone, or bright. The black, gray, and white sliders under the graph let you set the darkest point, the brightest point, and the middle. Dragging the black slider right makes the darks truly dark; dragging the white slider left makes the brights truly bright. A photo with no true black and no true white usually looks flat.</p>\n<p>Curves does the same job with more control: a diagonal line from black to white, which you bend by adding points. Pull the middle of the line up to brighten the mid-tones, or make a gentle S shape to add contrast. Curves can also fix color: pick the red, green, or blue channel and bend it to remove a cast.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Levels is the faster tool and the better one to learn first. Curves is the precise one you grow into. Both are available as adjustment layers, which is how you should use them.</div></p>\n"
    },
    {
      "heading": "Hue, Saturation, and Vibrance",
      "html": "<p>Hue is which color something is, saturation is how strong the color is, and lightness is how bright it is. The Hue/Saturation adjustment lets you change all three, for the whole photo or for one color at a time: pick Reds from the menu and you can make only the reds stronger or shift them toward orange.</p>\n<p>Vibrance is the gentler cousin of Saturation. Saturation boosts every color equally, which quickly makes skin look orange. Vibrance boosts the weak colors most and protects skin tones, so it is the safer choice for portraits. For most photos, a small Vibrance boost is all the color work you need.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> When a photo's colors look wrong, check white balance before saturation. A yellow cast makes every color look muddy, and adding saturation to a muddy photo only makes the mud stronger.</div></p>\n"
    },
    {
      "heading": "Adjustment Layers: The Safe Way to Adjust",
      "html": "<p>An adjustment layer is a layer that changes the look of everything below it without touching a single pixel. Add one from the Adjustments panel or from Layer, then New Adjustment Layer. Levels, Curves, Hue/Saturation, and Brightness/Contrast are all available as adjustment layers.</p>\n<p>Because the change lives on its own layer, you can turn it off to compare, lower its opacity to weaken it, paint on its mask to limit it to part of the photo, or delete it and start over. That is non-destructive editing, and it is why professionals almost never use the destructive versions under the Image menu.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Name your adjustment layers: Levels - Sky, Vibrance - Portrait. A file with six unnamed adjustment layers is a puzzle; a file with six named ones is a recipe you can follow again.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Explain brightness, contrast, exposure, and white balance in plain words.</li>\n<li>Use Levels and Curves to fix light and tone.</li>\n<li>Use Hue/Saturation and Vibrance to control color.</li>\n<li>Fix a photo that is too dark, too bright, or too yellow.</li>\n<li>Use adjustment layers so every change stays editable.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Using the destructive adjustments under the Image menu instead of adjustment layers. The menu versions change pixels permanently.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Pushing saturation until skin turns orange. Use Vibrance for portraits, and fix white balance before adding color.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain this module's main idea out loud in plain words, without looking, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Brightness",
      "def": "How light or dark the whole photo is."
    },
    {
      "term": "Contrast",
      "def": "The difference between the darkest and brightest parts of a photo."
    },
    {
      "term": "Exposure",
      "def": "How much light a photo received, mimicked by the Exposure adjustment."
    },
    {
      "term": "White balance",
      "def": "The setting that decides what counts as white, removing color casts."
    },
    {
      "term": "Histogram",
      "def": "A graph showing how many pixels are dark, mid-tone, or bright."
    },
    {
      "term": "Levels",
      "def": "The adjustment that sets the black, white, and middle points of a photo."
    },
    {
      "term": "Curves",
      "def": "The adjustment that bends the tone curve for precise control of light and color."
    },
    {
      "term": "Hue",
      "def": "Which color something is, such as red or blue."
    },
    {
      "term": "Saturation",
      "def": "How strong or intense a color is."
    },
    {
      "term": "Vibrance",
      "def": "A gentler saturation control that protects skin tones."
    },
    {
      "term": "Color cast",
      "def": "An unwanted tint over a whole photo, such as yellow from indoor light."
    },
    {
      "term": "Adjustment layer",
      "def": "A layer that changes light or color without touching the pixels below."
    },
    {
      "term": "Mid-tones",
      "def": "The middle brightness values of a photo, between shadows and highlights."
    }
  ],
  "video": {
    "title": "Levels vs Curves in Photoshop - Day 7",
    "embedUrl": "https://www.youtube.com/embed/iS7ijvctMoA",
    "note": "PHLEARN on Levels vs Curves and on color correction. Fix one dark photo and one yellow-cast photo using adjustment layers only.",
    "more": [
      {
        "title": "How to Use Levels & Curves in Photoshop | Day 6",
        "url": "https://www.youtube.com/watch?v=dvbnPi52GX0"
      },
      {
        "title": "Color Correction in Photoshop - Day 20",
        "url": "https://www.youtube.com/watch?v=QE0vOrgDSHY"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Brightness” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Brightness — How light or dark the whole photo is. Step 2: It matters because it is part of: Explain brightness, contrast, exposure, and white balance in plain words. Step 3: An example from the module is the way brightness shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Contrast” and “Exposure”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Contrast — The difference between the darkest and brightest parts of a photo. Step 2: Exposure — How much light a photo received, mimicked by the Exposure adjustment. Step 3: They differ because the first is about contrast while the second is about exposure; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Use Levels and Curves to fix light and tone.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Use Levels and Curves to fix light and tone. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “White balance” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: White balance — The setting that decides what counts as white, removing color casts. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Histogram — A graph showing how many pixels are dark, mid-tone, or bright. Step 2: Levels — The adjustment that sets the black, white, and middle points of a photo. Step 3: Curves — The adjustment that bends the tone curve for precise control of light and color. Step 4: Hue — Which color something is, such as red or blue. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Use Hue/Saturation and Vibrance to control color. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Brightness” mean?",
      "choices": [
        "How light or dark the whole photo is.",
        "The difference between the darkest and brightest parts of a photo.",
        "How much light a photo received, mimicked by the Exposure adjustment.",
        "The setting that decides what counts as white, removing color casts."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Brightness means: How light or dark the whole photo is. (b) is the definition of Contrast, not of Brightness. (c) is the definition of Exposure, not of Brightness. (d) is the definition of White balance, not of Brightness."
    },
    {
      "q": "What does the term “Contrast” mean?",
      "choices": [
        "How much light a photo received, mimicked by the Exposure adjustment.",
        "The difference between the darkest and brightest parts of a photo.",
        "The setting that decides what counts as white, removing color casts.",
        "A graph showing how many pixels are dark, mid-tone, or bright."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Contrast means: The difference between the darkest and brightest parts of a photo. (a) is the definition of Exposure, not of Contrast. (c) is the definition of White balance, not of Contrast. (d) is the definition of Histogram, not of Contrast."
    },
    {
      "q": "What does the term “Exposure” mean?",
      "choices": [
        "The setting that decides what counts as white, removing color casts.",
        "A graph showing how many pixels are dark, mid-tone, or bright.",
        "How much light a photo received, mimicked by the Exposure adjustment.",
        "The adjustment that sets the black, white, and middle points of a photo."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Exposure means: How much light a photo received, mimicked by the Exposure adjustment. (a) is the definition of White balance, not of Exposure. (b) is the definition of Histogram, not of Exposure. (d) is the definition of Levels, not of Exposure."
    },
    {
      "q": "What does the term “White balance” mean?",
      "choices": [
        "A graph showing how many pixels are dark, mid-tone, or bright.",
        "The adjustment that sets the black, white, and middle points of a photo.",
        "The adjustment that bends the tone curve for precise control of light and color.",
        "The setting that decides what counts as white, removing color casts."
      ],
      "answer": 3,
      "explanation": "Correct: (d). White balance means: The setting that decides what counts as white, removing color casts. (a) is the definition of Histogram, not of White balance. (b) is the definition of Levels, not of White balance. (c) is the definition of Curves, not of White balance."
    },
    {
      "q": "Which term means: A graph showing how many pixels are dark, mid-tone, or bright.",
      "choices": [
        "Histogram",
        "Levels",
        "Curves",
        "Hue"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Histogram is the term for: A graph showing how many pixels are dark, mid-tone, or bright. (b) Levels means The adjustment that sets the black, white, and middle points of a photo. (c) Curves means The adjustment that bends the tone curve for precise control of light and color. (d) Hue means Which color something is, such as red or blue."
    },
    {
      "q": "Which term means: The adjustment that sets the black, white, and middle points of a photo.",
      "choices": [
        "Curves",
        "Levels",
        "Hue",
        "Saturation"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Levels is the term for: The adjustment that sets the black, white, and middle points of a photo. (a) Curves means The adjustment that bends the tone curve for precise control of light and color. (c) Hue means Which color something is, such as red or blue. (d) Saturation means How strong or intense a color is."
    },
    {
      "q": "Which term means: The adjustment that bends the tone curve for precise control of light and color.",
      "choices": [
        "Hue",
        "Saturation",
        "Curves",
        "Vibrance"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Curves is the term for: The adjustment that bends the tone curve for precise control of light and color. (a) Hue means Which color something is, such as red or blue. (b) Saturation means How strong or intense a color is. (d) Vibrance means A gentler saturation control that protects skin tones."
    },
    {
      "q": "Which term means: Which color something is, such as red or blue.",
      "choices": [
        "Saturation",
        "Vibrance",
        "Color cast",
        "Hue"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Hue is the term for: Which color something is, such as red or blue. (a) Saturation means How strong or intense a color is. (b) Vibrance means A gentler saturation control that protects skin tones. (c) Color cast means An unwanted tint over a whole photo, such as yellow from indoor light."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Color & Light Adjustments: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain brightness, contrast, exposure, and white balance in plain words.</p>\n<p><strong>Key terms:</strong> Brightness · Contrast · Exposure · White balance · Histogram · Levels · Curves · Hue.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain brightness, contrast, exposure, and white balance in plain words.</li>\n<li>Use Levels and Curves to fix light and tone.</li>\n<li>Use Hue/Saturation and Vibrance to control color.</li>\n</ul>\n<p><strong>Watch out:</strong> Always work on a copy or a duplicate layer, and keep your original photo file untouched. A non-destructive edit can always be undone; a destructive one cannot.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
