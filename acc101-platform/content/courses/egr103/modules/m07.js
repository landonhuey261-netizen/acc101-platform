// egr103 - Module 7: Introduction to SOLIDWORKS: Interface and Sketches
module.exports = {
  "number": 7,
  "slug": "solidworks-interface-and-sketches",
  "title": "Introduction to SOLIDWORKS: Interface and Sketches",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what SOLIDWORKS is and what it is for.",
    "Name the main parts of the SOLIDWORKS screen.",
    "Start a new part and pick a sketch plane.",
    "Draw and dimension a fully defined sketch.",
    "Explain the CAD limit of this app in plain words."
  ],
  "sections": [
    {
      "heading": "What SOLIDWORKS Is",
      "html": "<p>SOLIDWORKS is CAD software — computer-aided design — used to model parts in 3D, assemble them, and make engineering drawings from the models. It is the most widely used CAD program in mechanical design, and the CSWA certification proves you can use it.</p>\n<p>SOLIDWORKS is parametric: you build a part from features (extrudes, cuts, fillets) driven by sketches with dimensions. Change a dimension and the whole part updates. That is the power of CAD — and the reason a sloppy sketch makes a sloppy part.</p>\n"
    },
    {
      "heading": "The Screen: What You Are Looking At",
      "html": "<p>The SOLIDWORKS screen has a graphics area in the middle where the model lives, a FeatureManager tree on the left listing every feature in order, a toolbar at the top with the tools, and a PropertyManager that shows the settings for whatever tool is active.</p>\n<p>The three starting planes — Front, Top, and Right — are the sketch planes you begin on. The origin is the 0,0,0 point where the planes meet. Learn the screen before you model: knowing where things live saves hours of hunting.</p>\n"
    },
    {
      "heading": "Your First Sketch: Lines, Rectangles, Circles",
      "html": "<p>Every SOLIDWORKS part starts as a 2D sketch on a plane. The sketch tools draw lines, rectangles, circles, arcs, and slots. Sketch the shape roughly first, then add relations (such as horizontal, vertical, or equal) and dimensions to pin it down exactly.</p>\n<p>A sketch is fully defined when every line is fixed by dimensions and relations — SOLIDWORKS shows fully defined sketches in black and under-defined ones in blue. A blue sketch can move when you least expect it, so fully define every sketch before you build on it.</p>\n"
    },
    {
      "heading": "Relations and Dimensions: Pinning the Sketch Down",
      "html": "<p>Relations are rules between sketch lines: horizontal, vertical, coincident (two points joined), tangent, or symmetric. Dimensions are numbers: a length of 60 mm, a circle of Ø10 mm. Together they lock the sketch in place.</p>\n<p>Work in this order: sketch the shape, add relations, add dimensions, check that the sketch is fully defined (black). If a dimension turns red, two dimensions are fighting — delete one and try again. A fully defined sketch is the foundation of a good model.</p>\n<p><strong>The CAD Limit of This App — Read This Carefully</strong></p>\n<p>This app teaches CAD and SOLIDWORKS workflows step by step, but it cannot grade live modelling. There is no SOLIDWORKS inside this app, and no one here can check your model file. The actual modelling happens in SOLIDWORKS itself, on your own computer — that is where you build, and that is where your skill grows.</p>\n<p>What this app can do is teach you the workflow, the order of operations, the rules, and the checks — and test your understanding of them. What it cannot do is watch you model. So for every SOLIDWORKS module, open SOLIDWORKS, follow the steps, and compare your result with the drawings and checks given here. That comparison is your grading.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>SOLIDWORKS is parametric CAD: sketches plus features, driven by dimensions.</li><li>Screen: graphics area, FeatureManager tree, toolbars, PropertyManager.</li><li>Every part starts as a sketch on Front, Top, or Right plane.</li><li>Fully defined sketch = black lines; under-defined = blue.</li><li>This app teaches CAD workflows but cannot grade live modelling — modelling happens in SOLIDWORKS.</li></ul></p>\n<p><strong>Common mistake:</strong> Building features on a blue, under-defined sketch. The model will move when you change something later.</p>\n<p><strong>Common mistake:</strong> Dimensioning everything and adding relations that fight each other. If a dimension turns red, something is over-defined — remove one constraint.</p>\n<p><strong>Ready check:</strong> If you can name the screen parts, sketch and fully define a rectangle, and explain the CAD limit of this app, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "SOLIDWORKS",
      "def": "Parametric CAD software used to model parts in 3D, build assemblies, and make engineering drawings."
    },
    {
      "term": "CAD",
      "def": "Computer-aided design: using software to create, change, and document engineering designs."
    },
    {
      "term": "Parametric",
      "def": "Driven by parameters (dimensions and relations), so changing a number updates the whole model."
    },
    {
      "term": "Feature",
      "def": "A building block of a SOLIDWORKS model, such as an extrude, a cut, a fillet, or a hole."
    },
    {
      "term": "Sketch",
      "def": "A 2D drawing on a plane that a feature is built from, made of lines, circles, and arcs."
    },
    {
      "term": "Sketch plane",
      "def": "A flat surface a sketch is drawn on, such as the Front, Top, or Right plane."
    },
    {
      "term": "FeatureManager tree",
      "def": "The list on the left of the SOLIDWORKS screen showing every feature in the order it was made."
    },
    {
      "term": "Fully defined sketch",
      "def": "A sketch where every line is fixed by dimensions and relations; shown in black."
    },
    {
      "term": "Under-defined sketch",
      "def": "A sketch with lines that can still move; shown in blue."
    },
    {
      "term": "Relation",
      "def": "A rule between sketch lines, such as horizontal, vertical, coincident, or tangent."
    },
    {
      "term": "Origin",
      "def": "The 0,0,0 point where the Front, Top, and Right planes meet."
    },
    {
      "term": "PropertyManager",
      "def": "The panel showing the settings for the tool you are using."
    },
    {
      "term": "CSWA",
      "def": "Certified SOLIDWORKS Associate — an entry-level certification proving basic SOLIDWORKS skill."
    },
    {
      "term": "Extrude",
      "def": "A feature that turns a 2D sketch into a 3D solid by pushing it out to a depth."
    }
  ],
  "video": {
    "title": "SolidWorks: From Sketch to 3D Model | Part Modeling, Assembly, & Engineering Drawing",
    "embedUrl": "https://www.youtube.com/embed/j7pnl16OajM",
    "note": "A complete masterclass: sketch, model, assemble, and draw a real suspension part. Watch the first section for the interface and sketching workflow, and keep it open as a reference for the rest of this course. Remember: the modelling happens in SOLIDWORKS on your computer — this app teaches the workflow, it does not run SOLIDWORKS.",
    "more": [
      {
        "title": "Stapler – SolidWorks Assembly Tutorial | Exploded View | JD CAD TUTORIAL",
        "url": "https://www.youtube.com/watch?v=lpNPIwpjUEE"
      },
      {
        "title": "Back Cowl Modeling in SolidWorks | Step-by-Step Part Design Tutorial",
        "url": "https://www.youtube.com/watch?v=v7vQR8XrpO0"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “SOLIDWORKS” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> SOLIDWORKS — Parametric CAD software used to model parts in 3D, build assemblies, and make engineering drawings. It matters because it connects directly to this module’s first goal: Explain what SOLIDWORKS is and what it is for. A good answer names the term correctly, explains it in plain words, and gives a real example from the module.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “CAD” and “Parametric”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> CAD — Computer-aided design: using software to create, change, and document engineering designs. Parametric — Driven by parameters (dimensions and relations), so changing a number updates the whole model. They differ in what they describe: the first is about cad, the second about parametric. A good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module’s main idea: “Explain what SOLIDWORKS is and what it is for.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Explain what SOLIDWORKS is and what it is for. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Feature — A building block of a SOLIDWORKS model, such as an extrude, a cut, a fillet, or a hole. Sketch — A 2D drawing on a plane that a feature is built from, made of lines, circles, and arcs. Sketch plane — A flat surface a sketch is drawn on, such as the Front, Top, or Right plane. FeatureManager tree — The list on the left of the SOLIDWORKS screen showing every feature in the order it was made. (Any four module terms, explained in the student’s own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> In SOLIDWORKS, sketch a 60 mm × 40 mm rectangle on the Front plane and fully define it. List the relations and dimensions you used, in order.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Sketch a rectangle on the Front plane. Step 2: Add relations: two sides horizontal, two sides vertical. Step 3: Add dimensions: 60 mm long, 40 mm tall, and locate one corner from the origin (for example, 0 mm from the origin in both directions). Step 4: Check the sketch is black (fully defined). A good answer lists relations, dimensions, and the check.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain in 3–4 sentences what “this app cannot grade live modelling” means, and what you should do instead when you practise SOLIDWORKS.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The app has no SOLIDWORKS inside it, so it cannot see or check your model file. Step 2: The actual modelling happens in SOLIDWORKS on your own computer. Step 3: Practise there, following the steps here, and compare your result with the drawings and checks given — that comparison is your grading.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “SOLIDWORKS” mean?",
      "choices": [
        "Parametric CAD software used to model parts in 3D, build assemblies, and make engineering drawings.",
        "Driven by parameters (dimensions and relations), so changing a number updates the whole model.",
        "A building block of a SOLIDWORKS model, such as an extrude, a cut, a fillet, or a hole.",
        "A 2D drawing on a plane that a feature is built from, made of lines, circles, and arcs."
      ],
      "answer": 0,
      "explanation": "Correct: (a). SOLIDWORKS means: Parametric CAD software used to model parts in 3D, build assemblies, and make engineering drawings.. (b) is the definition of Parametric, not of SOLIDWORKS. (c) is the definition of Feature, not of SOLIDWORKS. (d) is the definition of Sketch, not of SOLIDWORKS."
    },
    {
      "q": "What does the term “Parametric” mean?",
      "choices": [
        "A 2D drawing on a plane that a feature is built from, made of lines, circles, and arcs.",
        "Driven by parameters (dimensions and relations), so changing a number updates the whole model.",
        "A flat surface a sketch is drawn on, such as the Front, Top, or Right plane.",
        "The list on the left of the SOLIDWORKS screen showing every feature in the order it was made."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Parametric means: Driven by parameters (dimensions and relations), so changing a number updates the whole model.. (a) is the definition of Sketch, not of Parametric. (c) is the definition of Sketch plane, not of Parametric. (d) is the definition of FeatureManager tree, not of Parametric."
    },
    {
      "q": "You open a sketch in SOLIDWORKS and every line is blue. What does that tell you, and what must you do before you extrude it?",
      "choices": [
        "The sketch is fully defined and ready to extrude.",
        "The sketch is under-defined, so its lines can still move — add dimensions and relations until it turns black.",
        "The sketch is on the wrong plane and must be redrawn.",
        "The sketch has failed and must be deleted."
      ],
      "answer": 1,
      "explanation": "Correct: (b). In SOLIDWORKS blue lines mean under-defined: the sketch is not fully fixed in place and can still move, so you add dimensions and relations until the lines turn black (fully defined). (a) is backwards — black means fully defined, not blue. (c) is wrong because the plane is a separate choice and blue lines say nothing about it. (d) is wrong because an under-defined sketch is normal while you are working — it is fixed by adding dimensions, not by deleting it."
    },
    {
      "q": "What does the term “FeatureManager tree” mean?",
      "choices": [
        "A sketch with lines that can still move; shown in blue.",
        "A rule between sketch lines, such as horizontal, vertical, coincident, or tangent.",
        "The 0,0,0 point where the Front, Top, and Right planes meet.",
        "The list on the left of the SOLIDWORKS screen showing every feature in the order it was made."
      ],
      "answer": 3,
      "explanation": "Correct: (d). FeatureManager tree means: The list on the left of the SOLIDWORKS screen showing every feature in the order it was made.. (a) is the definition of Under-defined sketch, not of FeatureManager tree. (b) is the definition of Relation, not of FeatureManager tree. (c) is the definition of Origin, not of FeatureManager tree."
    },
    {
      "q": "What does “parametric” mean in SOLIDWORKS?",
      "choices": [
        "The model is made of paper.",
        "The model is driven by dimensions and relations, so changing a number updates the whole part.",
        "The model cannot be changed once made.",
        "The model is only 2D."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Parametric models update when dimensions change. (a) is nonsense. (c) is backwards. (d) is wrong: SOLIDWORKS models are 3D."
    },
    {
      "q": "In SOLIDWORKS, what colour are the lines of a fully defined sketch?",
      "choices": [
        "Blue",
        "Black",
        "Red",
        "Green"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Fully defined sketches are black; under-defined ones are blue. (a) is under-defined. (c) usually means an error or over-definition. (d) is not used for this."
    },
    {
      "q": "What is the FeatureManager tree?",
      "choices": [
        "A list of your files.",
        "The list on the left showing every feature in the order it was made.",
        "A type of sketch.",
        "The help menu."
      ],
      "answer": 1,
      "explanation": "Correct: (b). The FeatureManager lists features in order. (a) is the file browser. (c) is wrong: features are not sketches. (d) is wrong."
    },
    {
      "q": "A student models a part in SOLIDWORKS and asks this app to grade the model file. What is the correct answer?",
      "choices": [
        "The app will grade it automatically.",
        "The app cannot grade live modelling — modelling and checking happen in SOLIDWORKS, using the steps and checks taught here.",
        "The app grades it if the file is small.",
        "The app grades it after 24 hours."
      ],
      "answer": 1,
      "explanation": "Correct: (b). This app teaches the workflow; the modelling happens in SOLIDWORKS. (a), (c), and (d) are all wrong: there is no live grading here."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Introduction to SOLIDWORKS: Interface and Sketches: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what SOLIDWORKS is and what it is for.</p>\n<p><strong>Key terms:</strong> SOLIDWORKS · CAD · Parametric · Feature · Sketch · Sketch plane · FeatureManager tree · Fully defined sketch.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what SOLIDWORKS is and what it is for.</li>\n<li>Name the main parts of the SOLIDWORKS screen.</li>\n<li>Start a new part and pick a sketch plane.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module’s main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
