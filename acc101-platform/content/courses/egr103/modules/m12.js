// egr103 - Module 12: Final Project: Model & Document a Real Part
module.exports = {
  "number": 12,
  "slug": "final-project-bracket",
  "title": "Final Project: Model & Document a Real Part",
  "estTime": "3–4 hours",
  "objectives": [
    "Plan a bracket project from a drawing.",
    "Model the bracket in SOLIDWORKS.",
    "Assemble it with its bolts.",
    "Make a full drawing with dimensions and a title block.",
    "Present the project honestly, including what went wrong."
  ],
  "sections": [
    {
      "heading": "The Project: An L-Bracket and Its Bolts",
      "html": "<p>Your final project is a real part: an L-bracket, 60 mm long, 40 mm wide, 40 mm tall, with a 10 mm thick base and upright, two Ø10 mm holes in the base and two Ø8 mm holes in the upright. It bolts to a wall with two M8 bolts and holds a shelf on its upright. Everything in this course comes together here.</p>\n<p>Start with the drawing in this module: read it fully before you model. List the features in order, sketch the plan, and only then open SOLIDWORKS. The modelling happens in SOLIDWORKS on your computer — this app teaches the workflow and checks your understanding; it cannot grade your model file.</p>\n"
    },
    {
      "heading": "Planning: Features in Order",
      "html": "<p>Plan the feature order before you model. Base plate first: sketch the L-shape and extrude 10 mm. Then the upright: sketch on the base’s back face and extrude 40 mm tall. Then the holes: two Ø10 mm through the base, two Ø8 mm through the upright, using the Hole Wizard.</p>\n<p>Then the finishing features: a 2 mm fillet where the upright meets the base (to spread stress), and a 1 mm chamfer on the outer edges. Check the volume in Mass Properties and compare it with the expected value from the drawing.</p>\n"
    },
    {
      "heading": "Modelling and Assembling",
      "html": "<p>Model the bracket, then model the two M8 bolts (or use the Toolbox bolts in SOLIDWORKS). Assemble them: fix the bracket, add concentric mates for the bolts through the base holes, coincident mates for the bolt heads on the base, and check for interference.</p>\n<p>Make an exploded view showing the assembly order: bracket first, then the bolts. If a mate fails, read the error: it usually says which faces are fighting, and the fix is to delete the last mate and re-mate to the right faces.</p>\n"
    },
    {
      "heading": "Drawing the Project",
      "html": "<p>Make a drawing from the bracket model: front, top, and side views, plus an isometric view. Insert the model dimensions: 60, 40, 40, 10, Ø10, Ø8, and the hole positions. Add the title block, the material (mild steel), the scale, and a note: “deburr all edges”.</p>\n<p>Add an assembly drawing too: the bracket with its bolts, an exploded view, and a bill of materials listing the bracket and two M8 bolts. Check the drawing on paper before you call it done.</p>\n<p><strong>Presenting Your Project</strong></p>\n<p>Present in this order: the drawing and what the bracket does; your feature plan; the model and its mass properties; the assembly and exploded view; the drawing; and what went wrong and how you fixed it. Honesty about the problems is the strongest part of a presentation.</p>\n<p>What went wrong is where the learning lives. A student who says “the first fillet broke the model, so I moved it last and it worked” has understood this course. A student who says “it worked first time” has either not modelled it or not looked closely.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Plan before you model: drawing, feature order, sketch.</li><li>Base first, holes next, fillets and chamfers last.</li><li>Assemble with concentric and coincident mates; check interference.</li><li>Draw with model dimensions, a title block, and an isometric view.</li><li>Present honestly, problems included.</li></ul></p>\n<p><strong>Common mistake:</strong> Modelling without reading the drawing first. The drawing is the master — read it, then model.</p>\n<p><strong>Common mistake:</strong> Forgetting that this app cannot grade your model file. Your check is the comparison with the drawing and the mass properties.</p>\n<p><strong>Ready check:</strong> If you can show the drawing, the model, the assembly, the exploded view, and the drawing sheet — all made in SOLIDWORKS on your computer — you have finished this course. Well done.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "L-bracket",
      "def": "A part shaped like the letter L, with a base and an upright at right angles."
    },
    {
      "term": "Feature plan",
      "def": "The ordered list of features you will build, decided before you open CAD."
    },
    {
      "term": "Mass properties",
      "def": "SOLIDWORKS’ report of a part’s volume, mass, and centre of gravity."
    },
    {
      "term": "M8 bolt",
      "def": "A bolt with an 8 mm diameter thread, a standard metric size."
    },
    {
      "term": "Toolbox",
      "def": "The SOLIDWORKS library of standard parts, such as bolts, nuts, and washers."
    },
    {
      "term": "Exploded view",
      "def": "A view with the parts pulled apart along their assembly directions."
    },
    {
      "term": "Bill of Materials (BOM)",
      "def": "A list of all the parts in an assembly, with quantities and part numbers."
    },
    {
      "term": "Assembly drawing",
      "def": "A drawing showing how parts fit together, often with an exploded view and a BOM."
    },
    {
      "term": "Mild steel",
      "def": "A common low-carbon steel, cheap and easy to weld and machine."
    },
    {
      "term": "Deburr",
      "def": "Removing sharp edges left by cutting or drilling."
    },
    {
      "term": "Revision",
      "def": "A version of a drawing; each change gets a new revision letter or number."
    },
    {
      "term": "Design intent",
      "def": "The plan behind a model: which dimensions drive it and what should happen when a size changes."
    },
    {
      "term": "Fully defined sketch",
      "def": "A sketch where every line is fixed by dimensions and relations; shown in black."
    },
    {
      "term": "Check",
      "def": "Comparing your model and drawing against the master drawing, including mass and volume."
    }
  ],
  "video": {
    "title": "Stapler – SolidWorks Assembly Tutorial | Exploded View | JD CAD TUTORIAL",
    "embedUrl": "https://www.youtube.com/embed/lpNPIwpjUEE",
    "note": "A complete small project: model the parts, assemble them with mates, and finish with an exploded view. Treat it as the pattern for your bracket project — parts, assembly, exploded view, done. The modelling happens in SOLIDWORKS on your computer.",
    "more": [
      {
        "title": "GD&T Datums, Reference Frames, & Part Immobilization | 3-2-1, 4-1-1, 4-2-0 | Actual Mating Envelopes",
        "url": "https://www.youtube.com/watch?v=ZN1LWcIURJI"
      },
      {
        "title": "SolidWorks: From Sketch to 3D Model | Part Modeling, Assembly, & Engineering Drawing",
        "url": "https://www.youtube.com/watch?v=j7pnl16OajM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “L-bracket” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> L-bracket — A part shaped like the letter L, with a base and an upright at right angles. It matters because it connects directly to this module’s first goal: Plan a bracket project from a drawing. A good answer names the term correctly, explains it in plain words, and gives a real example from the module.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Feature plan” and “Mass properties”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Feature plan — The ordered list of features you will build, decided before you open CAD. Mass properties — SOLIDWORKS’ report of a part’s volume, mass, and centre of gravity. They differ in what they describe: the first is about feature plan, the second about mass properties. A good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module’s main idea: “Plan a bracket project from a drawing.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Plan a bracket project from a drawing. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> M8 bolt — A bolt with an 8 mm diameter thread, a standard metric size. Toolbox — The SOLIDWORKS library of standard parts, such as bolts, nuts, and washers. Exploded view — A view with the parts pulled apart along their assembly directions. Bill of Materials (BOM) — A list of all the parts in an assembly, with quantities and part numbers. (Any four module terms, explained in the student’s own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Write the feature plan for the L-bracket (60 × 40 × 40 mm, 10 mm thick, two Ø10 mm base holes, two Ø8 mm upright holes). List every feature in order, with its sketch plane and key dimensions.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Base Plate — sketch the 60 × 40 rectangle on the Top plane, extrude 10 mm. Step 2: Upright — sketch the 40 × 40 profile on the back face, extrude 10 mm thick. Step 3: Base Holes — Hole Wizard, two Ø10 mm through the base. Step 4: Upright Holes — Hole Wizard, two Ø8 mm through the upright. Step 5: Fillet 2 mm at the base-upright join, chamfer 1 mm on outer edges. Step 6: Check mass properties against the drawing. (Modelling happens in SOLIDWORKS.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Your bracket model’s volume does not match the volume you worked out by hand. List three things to check, in order.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check the base size and thickness (60 × 40 × 10) against the drawing. Step 2: Check the holes: two Ø10 and two Ø8, through the right faces, with the right diameters. Step 3: Check the fillet and chamfer sizes, and that no extra feature was added. A good answer checks sizes, holes, then finishing features.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “L-bracket” mean?",
      "choices": [
        "A part shaped like the letter L, with a base and an upright at right angles.",
        "SOLIDWORKS’ report of a part’s volume, mass, and centre of gravity.",
        "A bolt with an 8 mm diameter thread, a standard metric size.",
        "The SOLIDWORKS library of standard parts, such as bolts, nuts, and washers."
      ],
      "answer": 0,
      "explanation": "Correct: (a). L-bracket means: A part shaped like the letter L, with a base and an upright at right angles.. (b) is the definition of Mass properties, not of L-bracket. (c) is the definition of M8 bolt, not of L-bracket. (d) is the definition of Toolbox, not of L-bracket."
    },
    {
      "q": "What does the term “Mass properties” mean?",
      "choices": [
        "The SOLIDWORKS library of standard parts, such as bolts, nuts, and washers.",
        "SOLIDWORKS’ report of a part’s volume, mass, and centre of gravity.",
        "A view with the parts pulled apart along their assembly directions.",
        "A list of all the parts in an assembly, with quantities and part numbers."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Mass properties means: SOLIDWORKS’ report of a part’s volume, mass, and centre of gravity.. (a) is the definition of Toolbox, not of Mass properties. (c) is the definition of Exploded view, not of Mass properties. (d) is the definition of Bill of Materials (BOM), not of Mass properties."
    },
    {
      "q": "What does the term “Toolbox” mean?",
      "choices": [
        "A list of all the parts in an assembly, with quantities and part numbers.",
        "A drawing showing how parts fit together, often with an exploded view and a BOM.",
        "The SOLIDWORKS library of standard parts, such as bolts, nuts, and washers.",
        "A common low-carbon steel, cheap and easy to weld and machine."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Toolbox means: The SOLIDWORKS library of standard parts, such as bolts, nuts, and washers.. (a) is the definition of Bill of Materials (BOM), not of Toolbox. (b) is the definition of Assembly drawing, not of Toolbox. (d) is the definition of Mild steel, not of Toolbox."
    },
    {
      "q": "What does the term “Bill of Materials (BOM)” mean?",
      "choices": [
        "A common low-carbon steel, cheap and easy to weld and machine.",
        "Removing sharp edges left by cutting or drilling.",
        "A version of a drawing; each change gets a new revision letter or number.",
        "A list of all the parts in an assembly, with quantities and part numbers."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Bill of Materials (BOM) means: A list of all the parts in an assembly, with quantities and part numbers.. (a) is the definition of Mild steel, not of Bill of Materials (BOM). (b) is the definition of Deburr, not of Bill of Materials (BOM). (c) is the definition of Revision, not of Bill of Materials (BOM)."
    },
    {
      "q": "What is the first step of the final project?",
      "choices": [
        "Open SOLIDWORKS and start modelling.",
        "Read the drawing fully and plan the features in order.",
        "Add the fillets.",
        "Make the drawing."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Read the drawing and plan first; modelling comes after. (a) skips the plan. (c) and (d) come last."
    },
    {
      "q": "In the feature plan, when do the fillets and chamfers go?",
      "choices": [
        "First",
        "After the base, before the holes",
        "Last, as finishing features",
        "They are not needed"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Fillets and chamfers go last so later features are not built on rounded edges. (a) and (b) risk breaking the model. (d) is wrong: they matter for strength and safety."
    },
    {
      "q": "How do you check your bracket model is right, given that this app cannot grade your model file?",
      "choices": [
        "You cannot check it at all.",
        "Compare it with the drawing: sizes, holes, and the mass properties (volume) from SOLIDWORKS.",
        "Ask the app to open the file.",
        "Guess."
      ],
      "answer": 1,
      "explanation": "Correct: (b). The drawing and mass properties are your check. (a) is wrong: checks exist. (c) is impossible — the app cannot grade live modelling. (d) is not a check."
    },
    {
      "q": "What should a project presentation include?",
      "choices": [
        "Only the successes.",
        "The drawing, the feature plan, the model, the assembly, the drawing sheet, and what went wrong and how it was fixed.",
        "Only the drawing.",
        "Only the model file."
      ],
      "answer": 1,
      "explanation": "Correct: (b). A full, honest presentation covers the whole project including problems. (a) hides the learning. (c) and (d) are only one part of the project."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Final Project: Model & Document a Real Part: Quick Reference</h3>\n<p><strong>Core idea:</strong> Plan a bracket project from a drawing.</p>\n<p><strong>Key terms:</strong> L-bracket · Feature plan · Mass properties · M8 bolt · Toolbox · Exploded view · Bill of Materials (BOM) · Assembly drawing.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Plan a bracket project from a drawing.</li>\n<li>Model the bracket in SOLIDWORKS.</li>\n<li>Assemble it with its bolts.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module’s main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
