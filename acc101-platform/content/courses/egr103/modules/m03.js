// egr103 - Module 3: Orthographic Projection: Front, Top, and Side Views
module.exports = {
  "number": 3,
  "slug": "orthographic-projection",
  "title": "Orthographic Projection: Front, Top, and Side Views",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what orthographic projection is.",
    "Draw the front, top, and right-side views of a simple block.",
    "Tell first-angle apart from third-angle projection.",
    "Explain the glass-box idea in plain words.",
    "Check that views line up with each other."
  ],
  "sections": [
    {
      "heading": "One Object, Several Flat Views",
      "html": "<p>Orthographic projection shows a 3D object as several flat 2D views: the front view, the top view, and the side view. Each view shows two of the object’s three dimensions, and together the views describe the object completely. It is the standard way engineers draw parts, and it is what SOLIDWORKS drawings are made of.</p>\n<p>Imagine looking at a brick. From the front you see its length and height. From the top you see its length and width. From the side you see its width and height. No single view tells you everything; all three together leave nothing out.</p>\n"
    },
    {
      "heading": "The Glass Box Idea",
      "html": "<p>Picture the object inside a glass box. Each face of the box is a view: the front face shows the front view, the top face shows the top view, and the side face shows the side view. The views are projected onto the glass, as if light shone through the object and left a shadow on each face.</p>\n<p>Then the box is unfolded flat, like opening a cardboard box, so all the views lie on one sheet of paper. That unfolding is why the views sit in particular places on the page — and why the layout differs between first-angle and third-angle projection.</p>\n"
    },
    {
      "heading": "First-Angle vs Third-Angle Projection",
      "html": "<p>In third-angle projection — the standard in the US and Canada — the top view sits above the front view, and the right-side view sits to the right of the front view. Think of it as: the view goes on the side you looked from.</p>\n<p>In first-angle projection — the standard in much of Europe and Asia — the top view sits below the front view, and the right-side view sits to the left of the front view. The views are flipped. The drawing always carries a small projection symbol (a truncated cone) showing which system was used — check it before reading any drawing.</p>\n"
    },
    {
      "heading": "Lining Up the Views",
      "html": "<p>Views on a drawing line up with each other. The front and top views share the same width, so their vertical edges line up. The front and side views share the same height, so their horizontal edges line up. This alignment is the quickest way to check a drawing: if the edges do not line up, something is wrong.</p>\n<p>When you draw views, use light projection lines to carry sizes from one view to another. Draw the front view first, then project its width up to the top view and its height across to the side view. The views will then agree, because they were built from the same sizes.</p>\n<p><strong>Hidden Lines and What They Tell You</strong></p>\n<p>Edges you cannot see from a viewpoint are drawn as dashed hidden lines in that view. A hole through a block shows as a circle in the top view and as two dashed lines in the front view. Hidden lines are how a flat drawing shows the inside of a part without cutting it open.</p>\n<p>Read hidden lines carefully: they tell you where holes, slots, and steps are, even when the view looks blank. A front view with no hidden lines is either a very simple part or a drawing with a mistake — check which.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Orthographic projection = flat front, top, and side views of a 3D object.</li><li>Glass box: views are projected onto the box faces, then unfolded flat.</li><li>Third-angle (US): top view above, right view to the right. First-angle (Europe/Asia): flipped.</li><li>Views line up: front/top share width, front/side share height.</li><li>Hidden edges are dashed lines.</li></ul></p>\n<p><strong>Common mistake:</strong> Reading a first-angle drawing as if it were third-angle. Check the projection symbol first.</p>\n<p><strong>Common mistake:</strong> Drawing views that do not line up. If the top view is wider than the front view, one of them is wrong.</p>\n<p><strong>Ready check:</strong> If you can place the three views correctly in third-angle projection and explain first-angle, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Orthographic projection",
      "def": "Showing a 3D object as flat front, top, and side views on one sheet."
    },
    {
      "term": "Front view",
      "def": "The view of a part as seen from the front; it usually shows the most shape."
    },
    {
      "term": "Top view",
      "def": "The view of a part as seen from above (also called the plan view)."
    },
    {
      "term": "Side view",
      "def": "The view of a part as seen from the side; the right-side view is most common."
    },
    {
      "term": "Third-angle projection",
      "def": "The US standard: the top view sits above the front view and the right-side view to its right."
    },
    {
      "term": "First-angle projection",
      "def": "The European/Asian standard: the top view sits below the front view and the right-side view to its left."
    },
    {
      "term": "Glass box",
      "def": "The idea of an object inside a transparent box, with each face showing one view."
    },
    {
      "term": "Projection symbol",
      "def": "A small truncated-cone symbol on a drawing showing whether first- or third-angle projection was used."
    },
    {
      "term": "Hidden line",
      "def": "A dashed line showing an edge that cannot be seen from that viewpoint."
    },
    {
      "term": "Alignment",
      "def": "Views lining up with each other: front and top share width, front and side share height."
    },
    {
      "term": "Plan view",
      "def": "Another name for the top view."
    },
    {
      "term": "Elevation",
      "def": "Another name for a front or side view."
    },
    {
      "term": "Principal views",
      "def": "The six standard views: front, top, bottom, left, right, and back; usually only three are needed."
    },
    {
      "term": "Projector line",
      "def": "A light line used to carry a size from one view to another while drawing."
    }
  ],
  "video": {
    "title": "Orthographic Projection_An Introduction_Engineering Drawing_Engineering Graphics_English",
    "embedUrl": "https://www.youtube.com/embed/WG6H2pISUzQ",
    "note": "A full introduction to orthographic projection: the planes, the projectors, and first- vs third-angle. Watch the glass-box explanation twice — it is the idea the whole module rests on.",
    "more": [
      {
        "title": "GD&T Position vs. Coordinate Dimensions",
        "url": "https://www.youtube.com/watch?v=PI5V3HUY9Ro"
      },
      {
        "title": "GD&T Datums, Reference Frames, & Part Immobilization | 3-2-1, 4-1-1, 4-2-0 | Actual Mating Envelopes",
        "url": "https://www.youtube.com/watch?v=ZN1LWcIURJI"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Orthographic projection” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Orthographic projection — Showing a 3D object as flat front, top, and side views on one sheet. It matters because it connects directly to this module’s first goal: Explain what orthographic projection is. A good answer names the term correctly, explains it in plain words, and gives a real example from the module.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Front view” and “Top view”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Front view — The view of a part as seen from the front; it usually shows the most shape. Top view — The view of a part as seen from above (also called the plan view). They differ in what they describe: the first is about front view, the second about top view. A good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module’s main idea: “Explain what orthographic projection is.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Explain what orthographic projection is. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Side view — The view of a part as seen from the side; the right-side view is most common. Third-angle projection — The US standard: the top view sits above the front view and the right-side view to its right. First-angle projection — The European/Asian standard: the top view sits below the front view and the right-side view to its left. Glass box — The idea of an object inside a transparent box, with each face showing one view. (Any four module terms, explained in the student’s own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Draw the front, top, and right-side views of a rectangular block 60 mm long, 40 mm wide, and 30 mm tall, with a step cut out of one top corner (20 mm deep, 20 mm wide). Use third-angle projection.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Front view 60 wide × 30 tall, with the step shown as a notch. Step 2: Top view above the front view, 60 × 40, with the step shown. Step 3: Right-side view to the right of the front view, 40 × 30. Step 4: Check alignment: front and top share 60 mm width; front and side share 30 mm height. A good answer has all three views aligned.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A drawing shows the top view BELOW the front view. Which projection system is it, and where would the right-side view sit?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Top view below the front view means first-angle projection. Step 2: In first-angle, the right-side view sits to the left of the front view. Step 3: Check the projection symbol to confirm. A good answer names the system and the side-view position.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Orthographic projection” mean?",
      "choices": [
        "Showing a 3D object as flat front, top, and side views on one sheet.",
        "The view of a part as seen from above (also called the plan view).",
        "The view of a part as seen from the side; the right-side view is most common.",
        "The US standard: the top view sits above the front view and the right-side view to its right."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Orthographic projection means: Showing a 3D object as flat front, top, and side views on one sheet.. (b) is the definition of Top view, not of Orthographic projection. (c) is the definition of Side view, not of Orthographic projection. (d) is the definition of Third-angle projection, not of Orthographic projection."
    },
    {
      "q": "What does the term “Top view” mean?",
      "choices": [
        "The US standard: the top view sits above the front view and the right-side view to its right.",
        "The view of a part as seen from above (also called the plan view).",
        "The European/Asian standard: the top view sits below the front view and the right-side view to its left.",
        "The idea of an object inside a transparent box, with each face showing one view."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Top view means: The view of a part as seen from above (also called the plan view).. (a) is the definition of Third-angle projection, not of Top view. (c) is the definition of First-angle projection, not of Top view. (d) is the definition of Glass box, not of Top view."
    },
    {
      "q": "What does the term “Third-angle projection” mean?",
      "choices": [
        "The idea of an object inside a transparent box, with each face showing one view.",
        "A small truncated-cone symbol on a drawing showing whether first- or third-angle projection was used.",
        "The US standard: the top view sits above the front view and the right-side view to its right.",
        "A dashed line showing an edge that cannot be seen from that viewpoint."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Third-angle projection means: The US standard: the top view sits above the front view and the right-side view to its right.. (a) is the definition of Glass box, not of Third-angle projection. (b) is the definition of Projection symbol, not of Third-angle projection. (d) is the definition of Hidden line, not of Third-angle projection."
    },
    {
      "q": "What does the term “Glass box” mean?",
      "choices": [
        "A dashed line showing an edge that cannot be seen from that viewpoint.",
        "Views lining up with each other: front and top share width, front and side share height.",
        "Another name for the top view.",
        "The idea of an object inside a transparent box, with each face showing one view."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Glass box means: The idea of an object inside a transparent box, with each face showing one view.. (a) is the definition of Hidden line, not of Glass box. (b) is the definition of Alignment, not of Glass box. (c) is the definition of Plan view, not of Glass box."
    },
    {
      "q": "In third-angle projection (the US standard), where does the top view sit?",
      "choices": [
        "Below the front view",
        "Above the front view",
        "To the left of the front view",
        "On a separate sheet"
      ],
      "answer": 1,
      "explanation": "Correct: (b). In third-angle, the top view sits above the front view. (a) is first-angle. (c) is where the left-side view would sit. (d) is wrong: all views share one sheet."
    },
    {
      "q": "Which two views share the same width, so their edges must line up?",
      "choices": [
        "Front and side",
        "Top and side",
        "Front and top",
        "Front and back"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Front and top views share the width. (a) share height. (b) share depth, not width in the same way. (d) are the same size but are not usually both drawn."
    },
    {
      "q": "A hole through a block shows as a circle in the top view. How does it appear in the front view?",
      "choices": [
        "As a circle",
        "As two dashed hidden lines",
        "As a thick solid line",
        "It does not appear at all"
      ],
      "answer": 1,
      "explanation": "Correct: (b). From the front, the hole’s edges are hidden behind the block, so they are dashed. (a) is the top view. (c) would mean the edges are visible. (d) is wrong: hidden lines show it."
    },
    {
      "q": "What does the projection symbol on a drawing tell you?",
      "choices": [
        "The price of the part",
        "Whether first-angle or third-angle projection was used",
        "The material of the part",
        "Who drew the part"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The truncated-cone symbol shows the projection system. (a) is not on a drawing. (c) is in the title block. (d) is in the title block."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Orthographic Projection: Front, Top, and Side Views: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what orthographic projection is.</p>\n<p><strong>Key terms:</strong> Orthographic projection · Front view · Top view · Side view · Third-angle projection · First-angle projection · Glass box · Projection symbol.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what orthographic projection is.</li>\n<li>Draw the front, top, and right-side views of a simple block.</li>\n<li>Tell first-angle apart from third-angle projection.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module’s main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
