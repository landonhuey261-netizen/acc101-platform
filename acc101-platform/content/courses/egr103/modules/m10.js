// egr103 - Module 10: Drawings in SOLIDWORKS: From Model to Drawing Sheet
module.exports = {
  "number": 10,
  "slug": "drawings-in-solidworks",
  "title": "Drawings in SOLIDWORKS: From Model to Drawing Sheet",
  "estTime": "3–4 hours",
  "objectives": [
    "Make a drawing from a SOLIDWORKS model.",
    "Place front, top, and side views on a sheet.",
    "Add dimensions that come from the model.",
    "Add a title block, notes, and a scale.",
    "Explain why a drawing updates when the model changes."
  ],
  "sections": [
    {
      "heading": "The Model Is the Master",
      "html": "<p>In SOLIDWORKS, the drawing is not a separate picture — it is a view of the model. Place a front view, a top view, and a side view on a sheet, and they show the model exactly as it is. Change the model and the drawing updates itself.</p>\n<p>That link is the whole point of CAD drawings. A hand drawing can disagree with the part; a SOLIDWORKS drawing cannot disagree with the model, because it is the model. Your job is to choose the views and dimensions that tell the maker everything they need.</p>\n"
    },
    {
      "heading": "Views on the Sheet",
      "html": "<p>Start a drawing from the part, pick a sheet size (A4 or A3 for most course work), and place the front view first. Then project the top view above it and the side view to its right — third-angle projection, as in Module 3 — and add an isometric view in a corner so the reader can see the part at a glance.</p>\n<p>Keep the views balanced on the sheet: not crowded into one corner, not spread so far apart that the sheet looks empty. The drawing should be readable at arm’s length.</p>\n"
    },
    {
      "heading": "Dimensions From the Model",
      "html": "<p>Dimensions in a SOLIDWORKS drawing can be inserted from the model — the same dimensions that drive the sketches and features. That is best practice: the drawing and the model can never disagree about a size.</p>\n<p>Place dimensions on the view that shows the feature’s true shape, do not repeat a dimension, and keep the sheet uncluttered. Add reference dimensions only where they help the reader, and mark them as reference so nobody mistakes them for a requirement.</p>\n"
    },
    {
      "heading": "Title Block, Notes, and Scale",
      "html": "<p>Fill in the title block: part name, drawing number, material, scale, and your name. Add notes for anything the views cannot say: “deburr all edges”, “all dimensions in mm”, or the surface finish. Check the projection symbol is third-angle (for this course) and that the sheet size is right.</p>\n<p>A drawing with an empty title block is unfinished. The title block is how the workshop knows what the part is, what it is made of, and which revision they are building to.</p>\n<p><strong>Checking the Drawing Before It Leaves</strong></p>\n<p>Before a drawing leaves your desk, check it like a reader, not like its author. Are all the sizes there? Do the views line up? Is any dimension repeated or missing? Does the isometric view match the three main views? Is the scale right?</p>\n<p>Print it and check it on paper: errors that are invisible on screen often jump out on paper. A drawing is a contract — once it leaves, the workshop builds what it says, not what you meant.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>The drawing is a view of the model; change the model and the drawing updates.</li><li>Front view first, then top above and side to the right (third-angle), plus an isometric view.</li><li>Insert dimensions from the model so they can never disagree with it.</li><li>Fill in the title block, notes, and scale.</li><li>Check the drawing on paper before it leaves.</li></ul></p>\n<p><strong>Common mistake:</strong> Typing dimensions by hand instead of inserting them from the model. A typed number can disagree with the model; an inserted one cannot.</p>\n<p><strong>Common mistake:</strong> Forgetting the isometric view. It is the fastest way for a reader to understand the part.</p>\n<p><strong>Ready check:</strong> If you can make a three-view drawing with model dimensions, a title block, and an isometric view — in SOLIDWORKS on your computer — you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Drawing (SOLIDWORKS)",
      "def": "A sheet showing views of a model, with dimensions, notes, and a title block."
    },
    {
      "term": "Sheet",
      "def": "The page a drawing is made on, such as A4 or A3, with a border and a title block."
    },
    {
      "term": "Model view",
      "def": "A view of the 3D model placed on a drawing sheet, such as front, top, or isometric."
    },
    {
      "term": "Projected view",
      "def": "A view made by projecting from another view, such as a top view projected from a front view."
    },
    {
      "term": "Isometric view",
      "def": "A 3D-style view on a drawing sheet, showing three faces of the part at once."
    },
    {
      "term": "Model dimension",
      "def": "A dimension inserted into a drawing from the model, so it always matches the model."
    },
    {
      "term": "Reference dimension",
      "def": "A dimension shown for information only, in brackets, that is not a requirement."
    },
    {
      "term": "Title block",
      "def": "The box on a drawing giving the part name, drawing number, scale, material, and who drew it."
    },
    {
      "term": "Revision",
      "def": "A version of a drawing; each change gets a new revision letter or number."
    },
    {
      "term": "Scale",
      "def": "The ratio between a drawing’s size and the real object’s size, such as 1:1 or 1:2."
    },
    {
      "term": "Bill of Materials (BOM)",
      "def": "A table on an assembly drawing listing all the parts, with quantities and part numbers."
    },
    {
      "term": "Balloon",
      "def": "A circled number on a drawing pointing to a part, linked to the BOM."
    },
    {
      "term": "Sheet format",
      "def": "The border, title block, and standard text that appear on every sheet of a drawing."
    },
    {
      "term": "Third-angle projection",
      "def": "The US standard: the top view sits above the front view and the right-side view to its right."
    }
  ],
  "video": {
    "title": "⚡CSWP, 18.16 | SolidWorks tutorial | SolidWorks Exam Guide",
    "embedUrl": "https://www.youtube.com/embed/BG6RgCZDPEg",
    "note": "A full part built from a drawing, with the final volume checked against the expected value. Watch how the modeller reads the drawing first, then builds — and notice that the drawing is the master. Practise in SOLIDWORKS on your computer.",
    "more": [
      {
        "title": "Reading Plumbing Drawings - The Easy Way",
        "url": "https://www.youtube.com/watch?v=g8VyP4fFWbg"
      },
      {
        "title": "How to Do An Isometric Drawing | Advanced Plumbing",
        "url": "https://www.youtube.com/watch?v=hFIUfdJ7PiM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Drawing (SOLIDWORKS)” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Drawing (SOLIDWORKS) — A sheet showing views of a model, with dimensions, notes, and a title block. It matters because it connects directly to this module’s first goal: Make a drawing from a SOLIDWORKS model. A good answer names the term correctly, explains it in plain words, and gives a real example from the module.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Sheet” and “Model view”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Sheet — The page a drawing is made on, such as A4 or A3, with a border and a title block. Model view — A view of the 3D model placed on a drawing sheet, such as front, top, or isometric. They differ in what they describe: the first is about sheet, the second about model view. A good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module’s main idea: “Make a drawing from a SOLIDWORKS model.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Make a drawing from a SOLIDWORKS model. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Projected view — A view made by projecting from another view, such as a top view projected from a front view. Isometric view — A 3D-style view on a drawing sheet, showing three faces of the part at once. Model dimension — A dimension inserted into a drawing from the model, so it always matches the model. Reference dimension — A dimension shown for information only, in brackets, that is not a requirement. (Any four module terms, explained in the student’s own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> In SOLIDWORKS, make a drawing of your plate from Module 8 (60 × 40 × 10 mm, two Ø10 mm holes). Place front, top, and side views plus an isometric view, insert the model dimensions, and fill in the title block.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start a drawing from the part on an A4 sheet. Step 2: Place the front view, project the top view above and the side view to the right, and add an isometric view in a corner. Step 3: Insert the model dimensions (60, 40, 10, Ø10, hole positions). Step 4: Fill in the title block: part name, material, scale, your name. Step 5: Check the sheet on paper before calling it done. (Modelling happens in SOLIDWORKS; this app checks your understanding of the steps.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A drawing dimension reads 60 mm but the model measures 62 mm. How can that happen in SOLIDWORKS, and how do you fix it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It happens when the dimension was typed by hand instead of inserted from the model — a typed number does not update when the model changes. Step 2: Delete the typed dimension and insert the model dimension instead. Step 3: Check the rest of the sheet for other typed dimensions. A good answer names typed dimensions as the cause.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Drawing (SOLIDWORKS)” mean?",
      "choices": [
        "A sheet showing views of a model, with dimensions, notes, and a title block.",
        "A view of the 3D model placed on a drawing sheet, such as front, top, or isometric.",
        "A view made by projecting from another view, such as a top view projected from a front view.",
        "A 3D-style view on a drawing sheet, showing three faces of the part at once."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Drawing (SOLIDWORKS) means: A sheet showing views of a model, with dimensions, notes, and a title block.. (b) is the definition of Model view, not of Drawing (SOLIDWORKS). (c) is the definition of Projected view, not of Drawing (SOLIDWORKS). (d) is the definition of Isometric view, not of Drawing (SOLIDWORKS)."
    },
    {
      "q": "What does the term “Model view” mean?",
      "choices": [
        "A 3D-style view on a drawing sheet, showing three faces of the part at once.",
        "A view of the 3D model placed on a drawing sheet, such as front, top, or isometric.",
        "A dimension inserted into a drawing from the model, so it always matches the model.",
        "A dimension shown for information only, in brackets, that is not a requirement."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Model view means: A view of the 3D model placed on a drawing sheet, such as front, top, or isometric.. (a) is the definition of Isometric view, not of Model view. (c) is the definition of Model dimension, not of Model view. (d) is the definition of Reference dimension, not of Model view."
    },
    {
      "q": "What does the term “Isometric view” mean?",
      "choices": [
        "A dimension shown for information only, in brackets, that is not a requirement.",
        "The box on a drawing giving the part name, drawing number, scale, material, and who drew it.",
        "A 3D-style view on a drawing sheet, showing three faces of the part at once.",
        "A version of a drawing; each change gets a new revision letter or number."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Isometric view means: A 3D-style view on a drawing sheet, showing three faces of the part at once.. (a) is the definition of Reference dimension, not of Isometric view. (b) is the definition of Title block, not of Isometric view. (d) is the definition of Revision, not of Isometric view."
    },
    {
      "q": "What does the term “Reference dimension” mean?",
      "choices": [
        "A version of a drawing; each change gets a new revision letter or number.",
        "The ratio between a drawing’s size and the real object’s size, such as 1:1 or 1:2.",
        "A table on an assembly drawing listing all the parts, with quantities and part numbers.",
        "A dimension shown for information only, in brackets, that is not a requirement."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Reference dimension means: A dimension shown for information only, in brackets, that is not a requirement.. (a) is the definition of Revision, not of Reference dimension. (b) is the definition of Scale, not of Reference dimension. (c) is the definition of Bill of Materials (BOM), not of Reference dimension."
    },
    {
      "q": "In SOLIDWORKS, what happens to a drawing when you change the model?",
      "choices": [
        "Nothing — the drawing is separate.",
        "The drawing updates itself, because it is a view of the model.",
        "The drawing is deleted.",
        "The drawing must be redrawn by hand."
      ],
      "answer": 1,
      "explanation": "Correct: (b). The drawing is linked to the model and updates with it. (a) is wrong: the link is the point of CAD drawings. (c) and (d) are wrong."
    },
    {
      "q": "Which dimensions should you put on a SOLIDWORKS drawing?",
      "choices": [
        "Dimensions typed by hand, so you control them.",
        "Dimensions inserted from the model, so they can never disagree with it.",
        "No dimensions at all.",
        "Dimensions copied from another drawing."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Model dimensions always match the model. (a) is the mistake: typed numbers can disagree. (c) leaves the drawing unbuildable. (d) copies someone else’s sizes."
    },
    {
      "q": "Where should the top view sit relative to the front view on a third-angle drawing?",
      "choices": [
        "Below the front view",
        "Above the front view",
        "To the left of the front view",
        "On a separate sheet"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Third-angle: top view above the front view. (a) is first-angle. (c) is the left-side view’s place. (d) is wrong."
    },
    {
      "q": "Why add an isometric view to a drawing sheet?",
      "choices": [
        "Because it is required by law.",
        "Because it is the fastest way for a reader to understand the part at a glance.",
        "Because it replaces the other views.",
        "Because it makes the sheet look full."
      ],
      "answer": 1,
      "explanation": "Correct: (b). An isometric view shows the part in 3D at a glance. (a) is wrong. (c) is wrong: it supports the main views, it does not replace them. (d) is not the reason."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Drawings in SOLIDWORKS: From Model to Drawing Sheet: Quick Reference</h3>\n<p><strong>Core idea:</strong> Make a drawing from a SOLIDWORKS model.</p>\n<p><strong>Key terms:</strong> Drawing (SOLIDWORKS) · Sheet · Model view · Projected view · Isometric view · Model dimension · Reference dimension · Title block.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Make a drawing from a SOLIDWORKS model.</li>\n<li>Place front, top, and side views on a sheet.</li>\n<li>Add dimensions that come from the model.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module’s main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
