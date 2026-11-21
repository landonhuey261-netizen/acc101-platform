// cmp108 - Module 2: Opening, Saving & File Formats
module.exports = {
  "number": 2,
  "slug": "opening-saving-and-file-formats",
  "title": "Opening, Saving & File Formats",
  "estTime": "3–4 hours",
  "objectives": [
    "Open photos in Photoshop from files, a camera, or a phone.",
    "Explain the difference between PSD, JPEG, PNG, and TIFF files.",
    "Save layered work as a PSD and a finished photo as a JPEG or PNG.",
    "Explain RGB for screens and CMYK for print.",
    "Set up a safe file habit: originals untouched, work saved often."
  ],
  "sections": [
    {
      "heading": "Opening Photos",
      "html": "<p>Open a photo with File, then Open, or by dragging the file from your computer onto the Photoshop window. Photoshop can open JPEGs, PNGs, TIFFs, and raw files from cameras. A raw file opens in Adobe Camera Raw first, where you set the basic exposure and color before the photo reaches Photoshop proper.</p>\n<p>When you open a photo, it appears as a single layer called Background, with a small lock icon. The lock means the layer is protected: you cannot move it or paint on it until you unlock it. Double-click the layer to turn it into a normal layer, or duplicate it with Ctrl or Command + J and work on the copy, leaving the locked original below as a safety net.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> If Photoshop asks about a color profile when opening a file, accept the embedded profile. It describes how the photo's colors should look, and keeping it is the safe choice for a beginner.</div></p>\n"
    },
    {
      "heading": "PSD: Your Working File",
      "html": "<p>The PSD format is Photoshop's own format, and it is the only one that saves everything: every layer, every mask, every adjustment, exactly as you left it. Save your work in progress as a PSD with File, then Save As, and choose Photoshop as the format. Keep the Layers box ticked.</p>\n<p>A PSD is your master copy. You can close Photoshop, come back tomorrow, open the PSD, and every layer is still there, still editable. No other format does that, which is why professionals save a PSD for every important edit, even if the final delivery is a JPEG.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Save early and save often: Ctrl + S on Windows, Command + S on a Mac. Photoshop does not autosave a PSD until you have saved it once, so make that first save as soon as you open a photo.</div></p>\n"
    },
    {
      "heading": "JPEG, PNG, and TIFF: Finished Files",
      "html": "<p>When a photo is finished, you export a flat copy in the format the job needs. JPEG is the standard for photos shared online or printed from a lab: it makes small files by compressing the image, which loses a little quality each time you save it. Always export JPEG from your PSD, never re-save a JPEG over and over.</p>\n<p>PNG keeps every pixel exactly and supports transparency, which makes it the right choice for graphics, logos, and images that need a see-through background. Its files are larger than JPEGs, so it is a poor choice for a big photo on a website. TIFF is the high-quality print format: large files, no quality loss, and the standard for professional printing.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Use File, then Export, then Export As for a finished copy, or File, then Save a Copy for a quick JPEG or PNG. Either way, your PSD stays untouched, ready for the next round of edits.</div></p>\n"
    },
    {
      "heading": "RGB, CMYK, and Resolution",
      "html": "<p>Screens make color from red, green, and blue light, so photos for screens use RGB color mode. Printers make color from cyan, magenta, yellow, and black ink, so print work uses CMYK. Photoshop photos start in RGB, and you only convert to CMYK when a printer asks for it, using Image, then Mode, then CMYK Color.</p>\n<p>Resolution is measured in pixels per inch, or PPI. A photo for the web needs only 72 PPI, because screens cannot show more. A photo for print needs about 300 PPI, because paper can. Check a photo's size with Image, then Image Size, which shows the pixel dimensions and the resolution together.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> A photo with too few pixels cannot be printed large, no matter what you do: enlarging it only makes it blurry. Always check the pixel dimensions before promising a client a big print.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Open photos in Photoshop from files, a camera, or a phone.</li>\n<li>Explain the difference between PSD, JPEG, PNG, and TIFF files.</li>\n<li>Save layered work as a PSD and a finished photo as a JPEG or PNG.</li>\n<li>Explain RGB for screens and CMYK for print.</li>\n<li>Set up a safe file habit: originals untouched, work saved often.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Saving your only copy as a JPEG and losing all your layers. Keep a PSD as the master and export JPEGs from it.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Re-saving the same JPEG again and again. Each save loses a little quality, so always go back to the PSD.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain this module's main idea out loud in plain words, without looking, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "PSD",
      "def": "Photoshop's own file format, which saves all layers and edits."
    },
    {
      "term": "JPEG",
      "def": "A compressed photo format for sharing online and printing; small files, slight quality loss."
    },
    {
      "term": "PNG",
      "def": "A format that keeps every pixel and supports transparency; best for graphics."
    },
    {
      "term": "TIFF",
      "def": "A high-quality, lossless format used for professional printing."
    },
    {
      "term": "Raw file",
      "def": "An unprocessed photo straight from a camera sensor, opened in Camera Raw."
    },
    {
      "term": "Camera Raw",
      "def": "The Photoshop plug-in for adjusting raw photos before editing."
    },
    {
      "term": "Background layer",
      "def": "The locked bottom layer of a newly opened photo."
    },
    {
      "term": "RGB",
      "def": "The color mode for screens, built from red, green, and blue light."
    },
    {
      "term": "CMYK",
      "def": "The color mode for print, built from cyan, magenta, yellow, and black ink."
    },
    {
      "term": "PPI",
      "def": "Pixels per inch, the measure of a photo's resolution."
    },
    {
      "term": "Color profile",
      "def": "Information in a file describing how its colors should be displayed."
    },
    {
      "term": "Export As",
      "def": "The command that saves a finished flat copy in JPEG, PNG, or another format."
    },
    {
      "term": "Save a Copy",
      "def": "The command that saves a copy of your file without changing the open document."
    },
    {
      "term": "Compression",
      "def": "Making a file smaller by discarding some image data, as JPEG does."
    }
  ],
  "video": {
    "title": "Opening, Editing & Saving in Photoshop - Day 2",
    "embedUrl": "https://www.youtube.com/embed/yYm2SN0IOaU",
    "note": "PHLEARN on opening, editing, and saving, plus file formats. Practice: open a photo, save a PSD, then export a JPEG.",
    "more": [
      {
        "title": "Exploring File Formats in Photoshop - Day 3",
        "url": "https://www.youtube.com/watch?v=lLQ3miK4GQE"
      },
      {
        "title": "Welcome to 30 Days of Photoshop 2025 Edition - INTRO",
        "url": "https://www.youtube.com/watch?v=78MCz6BpeXM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “PSD” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: PSD — Photoshop's own file format, which saves all layers and edits. Step 2: It matters because it is part of: Open photos in Photoshop from files, a camera, or a phone. Step 3: An example from the module is the way psd shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “JPEG” and “PNG”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: JPEG — A compressed photo format for sharing online and printing; small files, slight quality loss. Step 2: PNG — A format that keeps every pixel and supports transparency; best for graphics. Step 3: They differ because the first is about jpeg while the second is about png; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Explain the difference between PSD, JPEG, PNG, and TIFF files.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Explain the difference between PSD, JPEG, PNG, and TIFF files. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “TIFF” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: TIFF — A high-quality, lossless format used for professional printing. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Raw file — An unprocessed photo straight from a camera sensor, opened in Camera Raw. Step 2: Camera Raw — The Photoshop plug-in for adjusting raw photos before editing. Step 3: Background layer — The locked bottom layer of a newly opened photo. Step 4: RGB — The color mode for screens, built from red, green, and blue light. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Save layered work as a PSD and a finished photo as a JPEG or PNG. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “PSD” mean?",
      "choices": [
        "Photoshop's own file format, which saves all layers and edits.",
        "A compressed photo format for sharing online and printing; small files, slight quality loss.",
        "A format that keeps every pixel and supports transparency; best for graphics.",
        "A high-quality, lossless format used for professional printing."
      ],
      "answer": 0,
      "explanation": "Correct: (a). PSD means: Photoshop's own file format, which saves all layers and edits. (b) is the definition of JPEG, not of PSD. (c) is the definition of PNG, not of PSD. (d) is the definition of TIFF, not of PSD."
    },
    {
      "q": "What does the term “JPEG” mean?",
      "choices": [
        "A format that keeps every pixel and supports transparency; best for graphics.",
        "A compressed photo format for sharing online and printing; small files, slight quality loss.",
        "A high-quality, lossless format used for professional printing.",
        "An unprocessed photo straight from a camera sensor, opened in Camera Raw."
      ],
      "answer": 1,
      "explanation": "Correct: (b). JPEG means: A compressed photo format for sharing online and printing; small files, slight quality loss. (a) is the definition of PNG, not of JPEG. (c) is the definition of TIFF, not of JPEG. (d) is the definition of Raw file, not of JPEG."
    },
    {
      "q": "What does the term “PNG” mean?",
      "choices": [
        "A high-quality, lossless format used for professional printing.",
        "An unprocessed photo straight from a camera sensor, opened in Camera Raw.",
        "A format that keeps every pixel and supports transparency; best for graphics.",
        "The Photoshop plug-in for adjusting raw photos before editing."
      ],
      "answer": 2,
      "explanation": "Correct: (c). PNG means: A format that keeps every pixel and supports transparency; best for graphics. (a) is the definition of TIFF, not of PNG. (b) is the definition of Raw file, not of PNG. (d) is the definition of Camera Raw, not of PNG."
    },
    {
      "q": "What does the term “TIFF” mean?",
      "choices": [
        "An unprocessed photo straight from a camera sensor, opened in Camera Raw.",
        "The Photoshop plug-in for adjusting raw photos before editing.",
        "The locked bottom layer of a newly opened photo.",
        "A high-quality, lossless format used for professional printing."
      ],
      "answer": 3,
      "explanation": "Correct: (d). TIFF means: A high-quality, lossless format used for professional printing. (a) is the definition of Raw file, not of TIFF. (b) is the definition of Camera Raw, not of TIFF. (c) is the definition of Background layer, not of TIFF."
    },
    {
      "q": "Which term means: An unprocessed photo straight from a camera sensor, opened in Camera Raw.",
      "choices": [
        "Raw file",
        "Camera Raw",
        "Background layer",
        "RGB"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Raw file is the term for: An unprocessed photo straight from a camera sensor, opened in Camera Raw. (b) Camera Raw means The Photoshop plug-in for adjusting raw photos before editing. (c) Background layer means The locked bottom layer of a newly opened photo. (d) RGB means The color mode for screens, built from red, green, and blue light."
    },
    {
      "q": "Which term means: The Photoshop plug-in for adjusting raw photos before editing.",
      "choices": [
        "Background layer",
        "Camera Raw",
        "RGB",
        "CMYK"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Camera Raw is the term for: The Photoshop plug-in for adjusting raw photos before editing. (a) Background layer means The locked bottom layer of a newly opened photo. (c) RGB means The color mode for screens, built from red, green, and blue light. (d) CMYK means The color mode for print, built from cyan, magenta, yellow, and black ink."
    },
    {
      "q": "Which term means: The locked bottom layer of a newly opened photo.",
      "choices": [
        "RGB",
        "CMYK",
        "Background layer",
        "PPI"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Background layer is the term for: The locked bottom layer of a newly opened photo. (a) RGB means The color mode for screens, built from red, green, and blue light. (b) CMYK means The color mode for print, built from cyan, magenta, yellow, and black ink. (d) PPI means Pixels per inch, the measure of a photo's resolution."
    },
    {
      "q": "Which term means: The color mode for screens, built from red, green, and blue light.",
      "choices": [
        "CMYK",
        "PPI",
        "Color profile",
        "RGB"
      ],
      "answer": 3,
      "explanation": "Correct: (d). RGB is the term for: The color mode for screens, built from red, green, and blue light. (a) CMYK means The color mode for print, built from cyan, magenta, yellow, and black ink. (b) PPI means Pixels per inch, the measure of a photo's resolution. (c) Color profile means Information in a file describing how its colors should be displayed."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Opening, Saving & File Formats: Quick Reference</h3>\n<p><strong>Core idea:</strong> Open photos in Photoshop from files, a camera, or a phone.</p>\n<p><strong>Key terms:</strong> PSD · JPEG · PNG · TIFF · Raw file · Camera Raw · Background layer · RGB.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Open photos in Photoshop from files, a camera, or a phone.</li>\n<li>Explain the difference between PSD, JPEG, PNG, and TIFF files.</li>\n<li>Save layered work as a PSD and a finished photo as a JPEG or PNG.</li>\n</ul>\n<p><strong>Watch out:</strong> Always work on a copy or a duplicate layer, and keep your original photo file untouched. A non-destructive edit can always be undone; a destructive one cannot.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
