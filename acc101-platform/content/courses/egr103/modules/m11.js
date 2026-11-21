// egr103 - Module 11: Design Intent, Features & Best Practices
module.exports = {
  "number": 11,
  "slug": "design-intent-best-practices",
  "title": "Design Intent, Features & Best Practices",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain design intent in plain words.",
    "Name features so the tree reads like a story.",
    "Use equations and configurations to drive a family of parts.",
    "Explain when to use a pattern instead of copying features.",
    "List the best practices that keep a model healthy."
  ],
  "sections": [
    {
      "heading": "Design Intent: The Plan Behind the Model",
      "html": "<p>Design intent is the set of decisions that make a model behave sensibly when it changes. Which dimension drives the part’s length? Which face is the datum? If the plate gets longer, should the holes move with it or stay where they are? A model with good design intent answers those questions by itself.</p>\n<p>Build intent in from the start: dimension from datums, not from random edges; use symmetry where the part is symmetrical; and link related sizes with equations (for example, hole spacing = length ÷ 3). A model without intent is a model that breaks the first time someone changes a number.</p>\n"
    },
    {
      "heading": "Naming and Organising Features",
      "html": "<p>Name every feature: “Base Plate”, “Mounting Holes”, “Edge Fillet” — not “Extrude1” and “Cut-Extrude2”. The next person to open your model (often you, six months later) should be able to read the FeatureManager tree like a story of how the part was made.</p>\n<p>Group related features with folders, and add comments to the tricky ones. A tidy tree is not vanity — it is how a team works on one model without breaking it.</p>\n"
    },
    {
      "heading": "Equations and Configurations",
      "html": "<p>An equation links dimensions: set the hole spacing equal to the plate length divided by three, and the holes stay centred when the plate grows. Configurations are versions of one part — the same bracket in small, medium, and large, each with its own dimensions, all in one file.</p>\n<p>Use equations for sizes that must stay related, and configurations for families of parts that share a shape but differ in size. Both save hours of remodelling and both prevent the copy-and-change errors that come from editing each version by hand.</p>\n"
    },
    {
      "heading": "Patterns: Copy Smart, Not Often",
      "html": "<p>A pattern repeats a feature: four holes in a row, six ribs around a hub, a row of fins. Use a linear pattern for a row, a circular pattern for a ring, and a mirror for a symmetrical half. One pattern is easier to change than four separate holes — change the spacing once and all four move.</p>\n<p>Mirror is the most powerful pattern: model half a symmetrical part, mirror it, and the two halves always match. Never model both halves by hand — they will drift apart the first time you change something.</p>\n<p><strong>Best Practices That Keep Models Healthy</strong></p>\n<p>Fully define every sketch. Build on stable faces and datums, not on fillets and chamfers that may disappear. Keep the feature tree short: if a part needs fifty features, it probably needs rethinking. Check the model after every change — mass, volume, and a quick look at the drawing.</p>\n<p>Save versions as you go, and never model on a part file someone else is editing. These habits sound boring, and they are the difference between a professional and someone who rebuilds the same part three times.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Design intent = the plan that lets a model survive changes.</li><li>Name features so the tree reads like a story.</li><li>Equations link related sizes; configurations make families of parts.</li><li>Patterns and mirrors beat copying features by hand.</li><li>Fully define sketches; build on stable faces; check after every change.</li></ul></p>\n<p><strong>Common mistake:</strong> Dimensioning from a fillet or a chamfer. When the fillet changes, the dimension breaks — dimension from datums instead.</p>\n<p><strong>Common mistake:</strong> Copying a hole four times instead of patterning it. Four separate holes drift apart; one pattern stays consistent.</p>\n<p><strong>Ready check:</strong> If you can explain design intent, name features properly, and say when to use a pattern, an equation, and a configuration, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Design intent",
      "def": "The plan behind a model: which dimensions drive it and what should happen when a size changes."
    },
    {
      "term": "Equation",
      "def": "A link between dimensions in SOLIDWORKS, such as hole spacing = length ÷ 3."
    },
    {
      "term": "Configuration",
      "def": "A version of a part in the same file, such as small, medium, and large sizes of one bracket."
    },
    {
      "term": "Pattern",
      "def": "A feature repeated in a row, a ring, or a grid, such as four holes in a line."
    },
    {
      "term": "Linear pattern",
      "def": "A pattern that repeats a feature along a straight line."
    },
    {
      "term": "Circular pattern",
      "def": "A pattern that repeats a feature around a circle."
    },
    {
      "term": "Mirror",
      "def": "A feature that copies geometry to the other side of a plane, for symmetrical parts."
    },
    {
      "term": "FeatureManager tree",
      "def": "The ordered list of features in a SOLIDWORKS model."
    },
    {
      "term": "Datum",
      "def": "A fixed starting point or surface that dimensions are measured from."
    },
    {
      "term": "Fully defined sketch",
      "def": "A sketch where every line is fixed by dimensions and relations; shown in black."
    },
    {
      "term": "Mass properties",
      "def": "SOLIDWORKS’ report of a part’s volume, mass, and centre of gravity."
    },
    {
      "term": "Rebuild",
      "def": "Updating a SOLIDWORKS model after a change, so all features recalculate."
    },
    {
      "term": "Suppress",
      "def": "Temporarily switching a feature off without deleting it, to test what happens without it."
    },
    {
      "term": "Roll back",
      "def": "Moving the FeatureManager bar to an earlier feature, to see or edit the model at that stage."
    }
  ],
  "video": {
    "title": "⚡CSWP, Level 18, 17A | SolidWorks Configurations & Equations Tutorial | Exam Guide",
    "embedUrl": "https://www.youtube.com/embed/Vy5E6yKJMC0",
    "note": "Configurations and equations in a real exam-style part: one model, several sizes, driven by equations, with the volume checked at each step. Follow it in SOLIDWORKS and try changing one driving dimension to see the whole part update.",
    "more": [
      {
        "title": "Orthographic Projection_An Introduction_Engineering Drawing_Engineering Graphics_English",
        "url": "https://www.youtube.com/watch?v=WG6H2pISUzQ"
      },
      {
        "title": "GD&T Position vs. Coordinate Dimensions",
        "url": "https://www.youtube.com/watch?v=PI5V3HUY9Ro"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Design intent” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Design intent — The plan behind a model: which dimensions drive it and what should happen when a size changes. It matters because it connects directly to this module’s first goal: Explain design intent in plain words. A good answer names the term correctly, explains it in plain words, and gives a real example from the module.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Equation” and “Configuration”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Equation — A link between dimensions in SOLIDWORKS, such as hole spacing = length ÷ 3. Configuration — A version of a part in the same file, such as small, medium, and large sizes of one bracket. They differ in what they describe: the first is about equation, the second about configuration. A good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module’s main idea: “Explain design intent in plain words.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Explain design intent in plain words. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Pattern — A feature repeated in a row, a ring, or a grid, such as four holes in a line. Linear pattern — A pattern that repeats a feature along a straight line. Circular pattern — A pattern that repeats a feature around a circle. Mirror — A feature that copies geometry to the other side of a plane, for symmetrical parts. (Any four module terms, explained in the student’s own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A bracket must come in three sizes: 60, 80, and 100 mm long, with two holes always spaced at one-third and two-thirds of the length. Explain how you would build this in SOLIDWORKS using equations and configurations.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Model the bracket once, with the length as a driving dimension. Step 2: Add an equation: hole positions = length ÷ 3 and length × 2 ÷ 3, so the holes stay placed when the length changes. Step 3: Make three configurations (Small 60, Medium 80, Large 100) that change only the length. Step 4: Check each configuration’s holes and volume. One model, three sizes, no copying.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A part needs six identical holes in a ring. Explain why a circular pattern is better than modelling six separate holes.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A circular pattern models one hole and repeats it six times around a centre. Step 2: Changing the hole size or the ring spacing once updates all six. Step 3: Six separate holes must each be edited by hand, and they drift apart. A good answer names the single point of change as the advantage.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A student builds a CAD model of a bookshelf so that changing the shelf height automatically moves the holes with it. What good practice is the student following?",
      "choices": [
        "Design intent, the plan behind a model: which dimensions drive it and what should happen when a size changes.",
        "Configuration, a version of a part in the same file, such as small, medium, and large sizes.",
        "Linear pattern, a pattern that repeats a feature along a straight line.",
        "Fillet, a rounded edge on a part."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Design intent means the plan behind a model: which dimensions drive it and what should happen when a size changes. (b) is wrong: a configuration is a version of a part in the same file, such as small, medium, and large sizes of one bracket. (c) is wrong: a linear pattern repeats a feature along a straight line. (d) is wrong: a fillet is a rounded edge on a part."
    },
    {
      "q": "What does the term “Configuration” mean?",
      "choices": [
        "A pattern that repeats a feature along a straight line.",
        "A version of a part in the same file, such as small, medium, and large sizes of one bracket.",
        "A pattern that repeats a feature around a circle.",
        "A feature that copies geometry to the other side of a plane, for symmetrical parts."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Configuration means: A version of a part in the same file, such as small, medium, and large sizes of one bracket.. (a) is the definition of Linear pattern, not of Configuration. (c) is the definition of Circular pattern, not of Configuration. (d) is the definition of Mirror, not of Configuration."
    },
    {
      "q": "What does the term “Linear pattern” mean?",
      "choices": [
        "A feature that copies geometry to the other side of a plane, for symmetrical parts.",
        "The ordered list of features in a SOLIDWORKS model.",
        "A pattern that repeats a feature along a straight line.",
        "A fixed starting point or surface that dimensions are measured from."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Linear pattern means: A pattern that repeats a feature along a straight line.. (a) is the definition of Mirror, not of Linear pattern. (b) is the definition of FeatureManager tree, not of Linear pattern. (d) is the definition of Datum, not of Linear pattern."
    },
    {
      "q": "What does the term “Mirror” mean?",
      "choices": [
        "A fixed starting point or surface that dimensions are measured from.",
        "A sketch where every line is fixed by dimensions and relations; shown in black.",
        "SOLIDWORKS’ report of a part’s volume, mass, and centre of gravity.",
        "A feature that copies geometry to the other side of a plane, for symmetrical parts."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Mirror means: A feature that copies geometry to the other side of a plane, for symmetrical parts.. (a) is the definition of Datum, not of Mirror. (b) is the definition of Fully defined sketch, not of Mirror. (c) is the definition of Mass properties, not of Mirror."
    },
    {
      "q": "A colleague opens your CAD model, changes one dimension, and the whole bracket falls apart. What was missing from the model?",
      "choices": [
        "Colour, the appearance of the part.",
        "Design intent, the plan that lets a model survive changes.",
        "A file name, the name of the file.",
        "A pattern, a feature repeated in a row or a grid."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Design intent is the plan behind a model — which dimensions drive it and what should happen when a size changes — and without it, a small change breaks the model. (a) is wrong: colour is only appearance. (c) is wrong: a file name is just a label. (d) is wrong: a pattern is a feature repeated in a row, a ring, or a grid."
    },
    {
      "q": "Why name your features instead of leaving them as “Extrude1” and “Cut-Extrude2”?",
      "choices": [
        "Because SOLIDWORKS requires it.",
        "So the next person (often you, later) can read the tree like a story of how the part was made.",
        "Because names make the part lighter.",
        "Because unnamed features do not work."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Named features make the model readable and maintainable. (a) is wrong: it is a practice, not a requirement. (c) is nonsense. (d) is wrong: unnamed features work, they are just unreadable."
    },
    {
      "q": "A bracket comes in three sizes with the same shape. What is the best SOLIDWORKS tool for this?",
      "choices": [
        "Three separate files, copied by hand.",
        "Configurations: three versions of one part in one file.",
        "Three assemblies.",
        "Three drawings."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Configurations make families of parts in one file. (a) risks copy errors. (c) is for assemblies, not versions. (d) is output, not the model."
    },
    {
      "q": "Why use a mirror instead of modelling both halves of a symmetrical part?",
      "choices": [
        "Because mirrors are faster to click.",
        "Because the two halves always match — a change to one side updates the other.",
        "Because symmetrical parts cannot be modelled by hand.",
        "Because mirrors make the part stronger."
      ],
      "answer": 1,
      "explanation": "Correct: (b). A mirror keeps both halves identical through changes. (a) is not the reason. (c) is wrong: they can be, just badly. (d) is wrong: strength is unchanged."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Design Intent, Features & Best Practices: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain design intent in plain words.</p>\n<p><strong>Key terms:</strong> Design intent · Equation · Configuration · Pattern · Linear pattern · Circular pattern · Mirror · FeatureManager tree.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain design intent in plain words.</li>\n<li>Name features so the tree reads like a story.</li>\n<li>Use equations and configurations to drive a family of parts.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module’s main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
