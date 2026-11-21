module.exports = {
  "number": 8,
  "slug": "acp-photoshop-review-retouching-color-output",
  "title": "ACP Photoshop Review: Retouching, Color & Output",
  "estTime": "3–4 hours",
  "objectives": [
    "Retouch a photo non-destructively with the Spot Healing Brush, Healing Brush, Clone Stamp, and Content-Aware Fill.",
    "Correct colour and exposure with Levels, Curves, white balance, and the histogram.",
    "Explain colour modes (RGB, CMYK, Grayscale) and colour profiles (sRGB, Adobe RGB) and when each applies.",
    "Sharpen an image properly and reduce noise without losing detail.",
    "Export correctly for print and for the web, with the right format, size, and colour settings."
  ],
  "sections": [
    {
      "heading": "Retouching: Fix Without a Trace",
      "html": "<p>Retouching removes distractions while keeping the photo honest. The <strong>Spot Healing Brush</strong> is the first tool to reach for: click a blemish or a speck of dust and Photoshop fills it from the surrounding area automatically. The <strong>Healing Brush</strong> does the same but lets you pick the source area with Alt/Option+click — better for larger marks. The <strong>Clone Stamp</strong> copies pixels exactly from one place to another, which is right for duplicating an object or rebuilding a missing corner, but wrong for skin, where exact copying looks fake.</p>\n<p><strong>Content-Aware Fill</strong> removes a whole object — a rubbish bin, a stranger in the background — by analysing the area around it and inventing matching pixels. Work on a duplicate layer or a new empty layer (set the healing tools to sample 'Current & Below') so the original stays safe. For skin, the professional rule is light touch: remove temporary blemishes, keep permanent features such as moles and freckles, and never blur skin into plastic. <strong>Dodge and Burn</strong> (lighten and darken) shapes light on a face or a product without changing its colour.</p>"
    },
    {
      "heading": "Colour and Exposure: Levels, Curves, and the Histogram",
      "html": "<p>The <strong>histogram</strong> is the graph of an image's tones: shadows on the left, midtones in the middle, highlights on the right. A photo bunched to the left is underexposed; bunched to the right is overexposed; a healthy photo spreads across the graph. <strong>Levels</strong> fixes exposure fast: drag the black point to where the shadows start and the white point to where the highlights start, and the photo gains contrast. <strong>Curves</strong> is the precise version: click the line and drag it up to brighten or down to darken, and bend separate points for shadows, midtones, and highlights.</p>\n<p><strong>White balance</strong> fixes colour casts: a photo shot under tungsten light looks orange, under shade it looks blue. Use the white-balance eyedropper on something that should be neutral grey, or adjust the Temperature slider (warm to cool) and Tint (green to magenta). <strong>Hue/Saturation</strong> changes the strength and shade of colours; <strong>Vibrance</strong> boosts dull colours while protecting skin tones, which is why it is safer than Saturation for portraits. Always make these changes as adjustment layers, so the client can ask for a different grade later.</p>"
    },
    {
      "heading": "Colour Modes, Profiles, and Sharpening",
      "html": "<p><strong>RGB</strong> is how screens show colour (red, green, blue light mixed together) — it is the mode for web, social media, and video. <strong>CMYK</strong> is how printers make colour (cyan, magenta, yellow, black ink) — it is the mode for print, and its colour range is smaller, so a bright screen colour can look duller in print. <strong>Grayscale</strong> is black and white only. A <strong>colour profile</strong> (ICC profile) tells devices what the numbers mean: <strong>sRGB</strong> is the safe standard for the web, <strong>Adobe RGB</strong> holds more colours and is better for print work. If a photo looks right in Photoshop but wrong in a browser, the profile is the usual suspect.</p>\n<p>Sharpen last, after resizing, because sharpening depends on the final size. <strong>Unsharp Mask</strong> and <strong>Smart Sharpen</strong> are the classic tools: Amount controls strength, Radius controls how wide the edge effect is, and Threshold stops smooth areas (like skin) from getting noisy. Over-sharpening creates bright halos around edges — zoom to 100% and check. <strong>Noise reduction</strong> (Filter &gt; Noise &gt; Reduce Noise, or Camera Raw's Detail panel) smooths grain in high-ISO photos, but too much turns detail to mush; the balance is the skill.</p>"
    },
    {
      "heading": "Output: Print, Web, and the Client Handover",
      "html": "<p>Output is where good work is ruined by the wrong settings. For <strong>print</strong>: 300 PPI, CMYK colour mode (or the profile the printer asks for), TIFF or a high-quality PDF, and check the bleed — the extra image area past the trim edge so no white border shows. For <strong>web</strong>: sRGB, 72 PPI is enough, JPEG for photos (quality 70–80 is usually the sweet spot between size and quality), PNG for graphics and anything with transparency, and resize to the actual display size — a 6000-pixel image on a 1200-pixel web page is wasted bandwidth.</p>\n<p>Use <strong>File &gt; Export &gt; Export As</strong> for web work: it shows the file size, lets you compare quality settings, and strips the extra metadata. Keep the master <strong>PSD</strong> with all layers, and name exported files clearly (client-name_photo_final.jpg, not IMG_0042.jpg). Before handing work over, run the checklist: is the resolution right, is the colour mode right, is the file size sensible, and does the exported file actually look like the Photoshop file? Open the export and look at it — never trust the settings alone.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Retouching: Spot Healing for blemishes, Healing Brush for larger marks, Clone Stamp for exact copying, Content-Aware Fill for removing objects; work on a duplicate layer; keep skin natural.</li><li>Colour: histogram shows the tones; Levels fixes exposure fast, Curves precisely; white balance removes casts; Vibrance is safer than Saturation for portraits.</li><li>Modes and profiles: RGB for screens, CMYK for print, sRGB for web, Adobe RGB for print work; sharpen last, at 100% zoom.</li><li>Output: print 300 PPI CMYK TIFF/PDF with bleed; web sRGB JPEG 70–80 quality or PNG for transparency; keep the PSD master.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Sharpening before resizing — sharpen last, at the final size.</div><div class=\"callout\"><strong>Common mistake:</strong> Exporting a CMYK file for the web, or an sRGB file with the wrong profile for print. Match the mode to the destination.</div>\n<p><strong>Ready-to-Work link:</strong> If you can retouch a portrait without a trace, correct a colour cast, and export the same file correctly for print and web, you have this module. Module 9 switches to video: Premiere Pro editing, timeline, and audio.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Spot Healing Brush",
      "def": "Removes blemishes and dust automatically by filling from the surrounding area."
    },
    {
      "term": "Healing Brush",
      "def": "Removes marks using a source area you pick with Alt/Option+click."
    },
    {
      "term": "Clone Stamp",
      "def": "Copies pixels exactly from one place to another; for duplicating objects, not for skin."
    },
    {
      "term": "Content-Aware Fill",
      "def": "Removes a whole object by analysing the surroundings and inventing matching pixels."
    },
    {
      "term": "Dodge and Burn",
      "def": "Lightening (dodge) and darkening (burn) to shape light without changing colour."
    },
    {
      "term": "Histogram",
      "def": "A graph of an image's tones: shadows left, midtones middle, highlights right."
    },
    {
      "term": "Levels",
      "def": "An adjustment that sets the black point, white point, and midtones to fix exposure and contrast."
    },
    {
      "term": "Curves",
      "def": "A precise adjustment: drag the curve to brighten or darken specific tonal ranges."
    },
    {
      "term": "White balance",
      "def": "Correcting a colour cast so whites look white, using Temperature and Tint."
    },
    {
      "term": "Vibrance",
      "def": "Boosts dull colours while protecting skin tones; safer than Saturation for portraits."
    },
    {
      "term": "RGB",
      "def": "The screen colour mode: red, green, and blue light mixed together."
    },
    {
      "term": "CMYK",
      "def": "The print colour mode: cyan, magenta, yellow, and black ink."
    },
    {
      "term": "Colour profile",
      "def": "An ICC profile that tells devices what the colour numbers mean; sRGB for web, Adobe RGB for print."
    },
    {
      "term": "Unsharp Mask",
      "def": "A sharpening filter with Amount, Radius, and Threshold controls."
    },
    {
      "term": "Bleed",
      "def": "Extra image area past the trim edge in print, so no white border shows after cutting."
    },
    {
      "term": "Export As",
      "def": "Photoshop's export dialog for web files, showing file size and quality options."
    }
  ],
  "video": {
    "title": "Point Color: The Best Way to Get PERFECT Skin Tones! — Photoshop Trick (PiXimperfect)",
    "embedUrl": "https://www.youtube.com/embed/l5C378ey6uc",
    "note": "Unmesh Dinda (PiXimperfect) shows how to fix skin tones with Point Color in Camera Raw. As you watch, note the difference between fixing a colour cast and grading for a look.",
    "more": [
      {
        "title": "Photoshop for Beginners — Getting Started (PRO EDU)",
        "url": "https://www.youtube.com/watch?v=xTzvQkOll2U"
      },
      {
        "title": "Mastering Photoshop Tools (PRO EDU)",
        "url": "https://www.youtube.com/watch?v=VsSjXNOE7NM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A portrait has a pimple, a stray hair across the face, and a rubbish bin in the background. Which tool for each, and in what order?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Spot Healing Brush for the pimple — click it and it is gone. Step 2: Healing Brush for the stray hair — pick a clean source area first. Step 3: Content-Aware Fill for the bin — select it, fill, and check the result. Step 4: Do all of it on a duplicate layer so the original stays safe.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A photo looks orange because it was shot under tungsten light. How do you fix it, and what do you check first?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check the histogram and look for something in the photo that should be neutral grey or white. Step 2: Use the white-balance eyedropper on that neutral area, or drag the Temperature slider toward blue. Step 3: Use a Curves or Levels adjustment layer so the change is non-destructive. Step 4: Compare before and after — the whites should look white, not blue.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A client wants the same photo for a magazine (print) and for Instagram (web). List the output settings for each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Print: 300 PPI, CMYK, TIFF or high-quality PDF, with bleed if the printer asks for it. Step 2: Web: sRGB, resized to the display size, JPEG at quality 70–80. Step 3: Keep the PSD master with all layers. Step 4: Open both exports and look at them before sending.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> After sharpening, a portrait has bright halos around the hair and the skin looks crunchy. What went wrong, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Over-sharpening — too much Amount or Radius. Step 2: Undo it and sharpen again with lower settings, checking at 100% zoom. Step 3: Use the Threshold slider so smooth skin is not sharpened. Step 4: Remember to sharpen last, after resizing to the final size.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A photo looks right in Photoshop but dull and dark in a web browser. What is the most likely cause?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The colour profile — the file is probably Adobe RGB or has no profile, and the browser assumes sRGB. Step 2: Convert a copy to sRGB for the web (Edit &gt; Convert to Profile). Step 3: Export with Export As, which embeds the sRGB profile. Step 4: Check the export in the browser before sending it to the client.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A client asks you to remove a person's mole from a portrait 'to make it perfect'. What do you do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Explain that permanent features such as moles and freckles are part of the person's identity, and removing them changes who they are. Step 2: Offer to remove temporary blemishes instead. Step 3: If the client insists, confirm the request in writing and do it on a duplicate layer. Step 4: Keep the unretouched master so the change can be reversed.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Which tool removes a blemish automatically from the surrounding area?",
      "choices": [
        "Clone Stamp",
        "Spot Healing Brush",
        "Pen tool",
        "Crop tool"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The Spot Healing Brush fills a blemish from its surroundings automatically. (a) is wrong: the Clone Stamp copies pixels exactly from a source you pick. (c) is wrong: the Pen tool draws paths. (d) is wrong: the Crop tool changes the canvas edges."
    },
    {
      "q": "What does Content-Aware Fill do?",
      "choices": [
        "Changes the image size",
        "Removes a whole object by inventing matching pixels from the surroundings",
        "Adds text",
        "Converts to black and white"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Content-Aware Fill analyses the area around a selection and fills it with matching pixels. (a) is wrong: resizing is Image Size or Crop. (c) is wrong: text is the Type tool. (d) is wrong: black and white is a Black & White adjustment layer."
    },
    {
      "q": "When should you sharpen an image?",
      "choices": [
        "First, before anything else",
        "Last, after resizing to the final size",
        "Before retouching",
        "Never"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Sharpening depends on the final size, so it comes last, after resizing. (a) is wrong: sharpening first means the sharpening is wrong after every later change. (c) is wrong: retouching should come before sharpening. (d) is wrong: sharpening is a normal final step."
    },
    {
      "q": "Which colour mode is for print?",
      "choices": [
        "RGB",
        "CMYK",
        "Grayscale only",
        "Lab"
      ],
      "answer": 1,
      "explanation": "Correct: (b). CMYK is the print mode — cyan, magenta, yellow, black ink. (a) is wrong: RGB is the screen mode. (c) is wrong: Grayscale is black and white only, not a print colour mode. (d) is wrong: Lab is a reference mode, not the standard print mode."
    },
    {
      "q": "What does the histogram show?",
      "choices": [
        "The file size",
        "The distribution of tones: shadows, midtones, highlights",
        "The number of layers",
        "The colour profile"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The histogram graphs the image's tones from shadows (left) to highlights (right). (a) is wrong: file size is shown in the document info or Export As. (c) is wrong: layers are counted in the Layers panel. (d) is wrong: the profile is shown in the document status bar or Edit menu."
    },
    {
      "q": "A photo looks orange under tungsten light. What fixes it?",
      "choices": [
        "White balance correction",
        "More sharpening",
        "A higher resolution",
        "A different file format"
      ],
      "answer": 0,
      "explanation": "Correct: (a). White balance removes the colour cast so whites look white. (b) is wrong: sharpening affects detail, not colour. (c) is wrong: resolution affects size and detail, not colour. (d) is wrong: the format affects file size and transparency, not colour casts."
    },
    {
      "q": "Which is safer than Saturation for boosting colour in a portrait?",
      "choices": [
        "Vibrance",
        "Brightness",
        "Contrast",
        "Exposure"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Vibrance boosts dull colours while protecting skin tones. (b) is wrong: Brightness lightens everything, including skin. (c) is wrong: Contrast changes light and dark, not colour strength. (d) is wrong: Exposure changes overall brightness, not colour."
    },
    {
      "q": "For a web photo, which settings are right?",
      "choices": [
        "CMYK, 300 PPI, TIFF",
        "sRGB, resized to display size, JPEG quality 70–80",
        "Adobe RGB, 300 PPI, PSD",
        "Grayscale, 72 PPI, BMP"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Web photos want sRGB, the right display size, and JPEG at a sensible quality. (a) is wrong: CMYK and TIFF are for print. (c) is wrong: PSD is the master file, not a web delivery format. (d) is wrong: BMP is uncompressed and Grayscale removes colour."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — ACP Photoshop Review: Retouching, Color & Output: Quick Reference</h3>\n<p><strong>Core idea:</strong> Retouch lightly, correct colour with adjustment layers, and match the output to the destination.</p>\n<p><strong>Retouching:</strong> Spot Healing blemishes · Healing Brush larger marks · Clone Stamp exact copies · Content-Aware Fill removes objects · work on a duplicate layer · keep skin natural.</p>\n<p><strong>Colour:</strong> Histogram shows tones · Levels fast, Curves precise · white balance removes casts · Vibrance safer than Saturation for portraits.</p>\n<p><strong>Modes:</strong> RGB screens · CMYK print · sRGB web · Adobe RGB print work · sharpen last at 100% zoom.</p>\n<p><strong>Output:</strong> Print 300 PPI CMYK TIFF/PDF + bleed · web sRGB JPEG 70–80 or PNG for transparency · keep the PSD master.</p>\n<p><strong>Watch out:</strong> Sharpening before resizing; wrong colour mode for the destination; over-sharpening halos.</p>\n<p><strong>Self-check:</strong> Retouch a portrait, correct a colour cast, and export the same file for print and web, without looking. If you can, you have this module.</p>\n"
};
