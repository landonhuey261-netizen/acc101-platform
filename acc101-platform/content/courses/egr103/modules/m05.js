// egr103 - Module 5: Section Views & Auxiliary Views
module.exports = {
  "number": 5,
  "slug": "section-and-auxiliary-views",
  "title": "Section Views & Auxiliary Views",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a section view shows.",
    "Read a cutting-plane line and its arrows.",
    "Tell a full section apart from a half section.",
    "Explain when an auxiliary view is needed.",
    "Sketch a simple full section of a block with a hole."
  ],
  "sections": [
    {
      "heading": "Seeing Inside: Why Sections Exist",
      "html": "<p>Some parts hide their most important features inside: a hole that does not go all the way through, a hollow chamber, a step on the far side. Hidden lines can show these, but a drawing full of dashed lines is hard to read. A section view solves the problem by pretending to cut the part open and drawing what the cut reveals.</p>\n<p>A section view shows the inside as if it were the outside: the cut surfaces are hatched (marked with diagonal lines), and the internal features appear as solid lines. One section view can replace a page of hidden lines.</p>\n"
    },
    {
      "heading": "Cutting Planes and Arrows",
      "html": "<p>A cutting-plane line shows where the imaginary cut is made. It is a thick line with arrows at its ends pointing in the direction you look from, and a letter at each end (A—A, B—B). The section view is labelled with the same letter, so you know which cut it belongs to.</p>\n<p>The arrows matter: they say which half of the part you are looking at. If the arrows point left, you look from the right and draw the left half’s cut face. Getting the arrows backwards gives you a mirror image of the part — a classic and expensive mistake.</p>\n"
    },
    {
      "heading": "Full, Half, and Offset Sections",
      "html": "<p>A full section cuts the whole part in half and shows one half. A half section cuts only a quarter away, so one half of the view shows the outside and the other half shows the inside — useful for symmetrical parts, where the outside is already clear from the other half.</p>\n<p>An offset section bends the cutting plane to pass through features that are not in a straight line, such as two holes at different positions. The section view is drawn as if the plane were straight, so both holes appear in true position. A broken-out section cuts away only a small local area to reveal one hidden feature.</p>\n"
    },
    {
      "heading": "Auxiliary Views: For Slanted Faces",
      "html": "<p>A slanted face never shows its true shape in a front, top, or side view — it always looks squashed. An auxiliary view is an extra view taken looking straight at the slanted face, so the face appears in its true shape and size, and its holes can be dimensioned correctly.</p>\n<p>Auxiliary views are used for angled brackets, chamfered blocks, and roof-like shapes. The rule is simple: if a face is not parallel to any principal view, you need an auxiliary view to dimension it properly.</p>\n<p><strong>Hatching: Reading the Cut</strong></p>\n<p>Cut solid material is shown with hatching — thin diagonal lines at 45°. Different parts in an assembly get different hatch directions or spacings, so you can tell where one part ends and the next begins. Hollow spaces are not hatched, because there is no material to cut.</p>\n<p>Some parts are never hatched, even when cut: shafts, bolts, nuts, and ribs are left unhatched by convention, because hatching them hides their shape. Knowing what is hatched and what is not is part of reading a drawing fluently.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>A section view pretends to cut the part open to show the inside.</li><li>The cutting-plane line shows where the cut is; its arrows show which way you look.</li><li>Full section = whole part cut; half section = one quarter removed; offset section = bent cutting plane.</li><li>Auxiliary views show slanted faces in true shape.</li><li>Cut material is hatched; hollow space is not.</li></ul></p>\n<p><strong>Common mistake:</strong> Reading a section view backwards because the cutting-plane arrows were ignored. Check the arrows first.</p>\n<p><strong>Common mistake:</strong> Hatching a bolt or a shaft. By convention, these are never hatched in section.</p>\n<p><strong>Ready check:</strong> If you can explain a cutting-plane line, tell a full section from a half section, and say when an auxiliary view is needed, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Section view",
      "def": "A view that shows a part as if it had been cut open, revealing its inside."
    },
    {
      "term": "Cutting-plane line",
      "def": "A thick line with arrows showing where an imaginary cut is made and which way to look."
    },
    {
      "term": "Hatching",
      "def": "Thin diagonal lines marking solid material that has been cut in a section view."
    },
    {
      "term": "Full section",
      "def": "A section that cuts the whole part in half and shows one half."
    },
    {
      "term": "Half section",
      "def": "A section that removes one quarter of a part, showing outside on one half and inside on the other."
    },
    {
      "term": "Offset section",
      "def": "A section whose cutting plane bends to pass through features that are not in a straight line."
    },
    {
      "term": "Broken-out section",
      "def": "A small local section that cuts away only a small area to reveal one hidden feature."
    },
    {
      "term": "Auxiliary view",
      "def": "An extra view taken looking straight at a slanted face, so it appears in true shape."
    },
    {
      "term": "True shape",
      "def": "How a face really looks, without being squashed by viewing it at an angle."
    },
    {
      "term": "Rib",
      "def": "A thin flat stiffener on a part; never hatched in section by convention."
    },
    {
      "term": "Through hole",
      "def": "A hole that goes all the way through a part."
    },
    {
      "term": "Blind hole",
      "def": "A hole that does not go all the way through a part."
    },
    {
      "term": "Counterbore",
      "def": "A flat-bottomed enlargement at the top of a hole, so a bolt head sits flush."
    },
    {
      "term": "Countersink",
      "def": "A cone-shaped enlargement at the top of a hole, so a flat-head screw sits flush."
    }
  ],
  "video": {
    "title": "Reading Construction Drawings - 10 Minute Crash Course",
    "embedUrl": "https://www.youtube.com/embed/A3v3ik3kmks",
    "note": "A fast crash course in reading drawings, including sections and hidden detail. Watch it and find one section view — then trace its cutting-plane line and arrows.",
    "more": [
      {
        "title": "SolidWorks Tutorial: C-Bracket Design with Complete Dimensions Explained",
        "url": "https://www.youtube.com/watch?v=CkYf9xVFI3g"
      },
      {
        "title": "SolidWorks Tutorial: ARM Design for Piston Practice (Step-by-Step Guide)",
        "url": "https://www.youtube.com/watch?v=RVfWWqK-l5Y"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Section view” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Section view — A view that shows a part as if it had been cut open, revealing its inside. It matters because it connects directly to this module’s first goal: Explain what a section view shows. A good answer names the term correctly, explains it in plain words, and gives a real example from the module.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Cutting-plane line” and “Hatching”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Cutting-plane line — A thick line with arrows showing where an imaginary cut is made and which way to look. Hatching — Thin diagonal lines marking solid material that has been cut in a section view. They differ in what they describe: the first is about cutting-plane line, the second about hatching. A good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module’s main idea: “Explain what a section view shows.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Explain what a section view shows. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Full section — A section that cuts the whole part in half and shows one half. Half section — A section that removes one quarter of a part, showing outside on one half and inside on the other. Offset section — A section whose cutting plane bends to pass through features that are not in a straight line. Broken-out section — A small local section that cuts away only a small area to reveal one hidden feature. (Any four module terms, explained in the student’s own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A block has a blind hole 10 mm across and 15 mm deep. Sketch a full section through the hole. Show the hatching and the hole’s depth dimension.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Draw the cutting-plane line through the hole’s centre with arrows and a letter. Step 2: In the section view, hatch the cut solid material and leave the hole unhatched. Step 3: Dimension the hole as Ø10 and 15 deep, with the depth measured from the top face. A good answer hatches only the solid and shows the blind bottom.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A bracket has a slanted face with two holes in it. Explain why an auxiliary view is needed and what it shows.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The slanted face never shows its true shape in front, top, or side views — it looks squashed. Step 2: An auxiliary view looks straight at the slanted face, so the face and its holes appear in true shape and size. Step 3: Only then can the holes be dimensioned correctly. A good answer names true shape as the reason.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Section view” mean?",
      "choices": [
        "A view that shows a part as if it had been cut open, revealing its inside.",
        "Thin diagonal lines marking solid material that has been cut in a section view.",
        "A section that cuts the whole part in half and shows one half.",
        "A section that removes one quarter of a part, showing outside on one half and inside on the other."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Section view means: A view that shows a part as if it had been cut open, revealing its inside.. (b) is the definition of Hatching, not of Section view. (c) is the definition of Full section, not of Section view. (d) is the definition of Half section, not of Section view."
    },
    {
      "q": "What does the term “Hatching” mean?",
      "choices": [
        "A section that removes one quarter of a part, showing outside on one half and inside on the other.",
        "Thin diagonal lines marking solid material that has been cut in a section view.",
        "A section whose cutting plane bends to pass through features that are not in a straight line.",
        "A small local section that cuts away only a small area to reveal one hidden feature."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Hatching means: Thin diagonal lines marking solid material that has been cut in a section view.. (a) is the definition of Half section, not of Hatching. (c) is the definition of Offset section, not of Hatching. (d) is the definition of Broken-out section, not of Hatching."
    },
    {
      "q": "What does the term “Half section” mean?",
      "choices": [
        "A small local section that cuts away only a small area to reveal one hidden feature.",
        "An extra view taken looking straight at a slanted face, so it appears in true shape.",
        "A section that removes one quarter of a part, showing outside on one half and inside on the other.",
        "How a face really looks, without being squashed by viewing it at an angle."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Half section means: A section that removes one quarter of a part, showing outside on one half and inside on the other.. (a) is the definition of Broken-out section, not of Half section. (b) is the definition of Auxiliary view, not of Half section. (d) is the definition of True shape, not of Half section."
    },
    {
      "q": "What does the term “Broken-out section” mean?",
      "choices": [
        "How a face really looks, without being squashed by viewing it at an angle.",
        "A thin flat stiffener on a part; never hatched in section by convention.",
        "A hole that goes all the way through a part.",
        "A small local section that cuts away only a small area to reveal one hidden feature."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Broken-out section means: A small local section that cuts away only a small area to reveal one hidden feature.. (a) is the definition of True shape, not of Broken-out section. (b) is the definition of Rib, not of Broken-out section. (c) is the definition of Through hole, not of Broken-out section."
    },
    {
      "q": "What does hatching show in a section view?",
      "choices": [
        "Hollow space",
        "Solid material that has been cut",
        "Hidden edges",
        "The edge of the paper"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Hatching marks cut solid material. (a) is left unhatched. (c) are dashed lines. (d) is the border."
    },
    {
      "q": "What do the arrows on a cutting-plane line tell you?",
      "choices": [
        "The price of the part",
        "Which way to look at the section",
        "The material of the part",
        "The scale of the drawing"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The arrows show the viewing direction for the section. (a) is not on a drawing. (c) is in the title block. (d) is in the title block."
    },
    {
      "q": "A symmetrical part needs its inside shown, but the outside is also important. Which section is the best choice?",
      "choices": [
        "Full section",
        "Half section",
        "Offset section",
        "Broken-out section"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A half section shows outside on one half and inside on the other. (a) hides the outside. (c) is for features not in a line. (d) shows only a small local area."
    },
    {
      "q": "When is an auxiliary view needed?",
      "choices": [
        "When a part is very large.",
        "When a face is slanted and never shows its true shape in the principal views.",
        "When a part has no holes.",
        "When a drawing has no title block."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Slanted faces need an auxiliary view for true shape. (a) is a scale issue. (c) is irrelevant. (d) is a title-block issue."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Section Views & Auxiliary Views: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a section view shows.</p>\n<p><strong>Key terms:</strong> Section view · Cutting-plane line · Hatching · Full section · Half section · Offset section · Broken-out section · Auxiliary view.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a section view shows.</li>\n<li>Read a cutting-plane line and its arrows.</li>\n<li>Tell a full section apart from a half section.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module’s main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
