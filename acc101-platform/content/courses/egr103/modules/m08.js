// egr103 - Module 8: SOLIDWORKS Part Modeling: Extrude, Revolve, Fillet, Chamfer
module.exports = {
  "number": 8,
  "slug": "solidworks-part-modeling",
  "title": "SOLIDWORKS Part Modeling: Extrude, Revolve, Fillet, Chamfer",
  "estTime": "3–4 hours",
  "objectives": [
    "Build a part with Extruded Boss/Base.",
    "Cut material with Extruded Cut and holes.",
    "Use Revolve for round parts.",
    "Add fillets and chamfers.",
    "Explain design intent and feature order."
  ],
  "sections": [
    {
      "heading": "From Sketch to Solid: Extrude",
      "html": "<p>Extruded Boss/Base is the first feature you will use: it takes a closed sketch and pushes it out to a depth, turning 2D into 3D. Sketch a 60 mm × 40 mm rectangle, extrude it 10 mm, and you have a plate. The depth can be blind (a set number), through-all, or mid-plane (equal both ways).</p>\n<p>Pick the right sketch plane before you start: the plate’s big face usually goes on the Front or Top plane. Think before you extrude — the first feature sets the part’s orientation for everything that follows.</p>\n"
    },
    {
      "heading": "Cutting Away: Extruded Cut and Holes",
      "html": "<p>Extruded Cut removes material: sketch a circle on a face, cut it through, and you have a hole. The Hole Wizard is better for real holes — it knows about counterbores, countersinks, and threads, and it sizes them to standard drill and tap sizes.</p>\n<p>Cut in the right order: cut holes after the base shape exists, and cut the biggest features first. A hole cut before the plate exists has nothing to cut through, and SOLIDWORKS will tell you so.</p>\n"
    },
    {
      "heading": "Revolve: For Round Parts",
      "html": "<p>Revolve spins a sketch around an axis to make a round part: a shaft, a pulley, a bottle. Sketch half the profile (the shape from the centre line out), pick the centre line as the axis, and revolve it 360°. One revolve can make a shaft with steps, grooves, and tapers in a single feature.</p>\n<p>Revolve is the right tool for anything round. Trying to build a shaft from extrudes is slow and leaves flat faces where there should be curves. Match the feature to the shape.</p>\n"
    },
    {
      "heading": "Fillets and Chamfers: Edges That Work",
      "html": "<p>A fillet rounds an edge; a chamfer cuts it at 45°. Fillets spread stress so a part is less likely to crack at a sharp corner, and they make parts safer to handle. Chamfers break sharp edges, help parts slide together in assembly, and are cheaper to machine than fillets.</p>\n<p>Add fillets and chamfers late in the feature tree — they are finishing features. A fillet added early can break later features that were built on the sharp edge. When a fillet fails, it is usually because the radius is bigger than the face it sits on.</p>\n<p><strong>Design Intent and Feature Order</strong></p>\n<p>Design intent is the plan behind the model: which dimensions drive the part, which faces are datums, and what should happen when a size changes. A model with good design intent survives a dimension change; a model without it falls apart.</p>\n<p>Build in a sensible order: base shape first, then the main cuts, then the details, then fillets and chamfers last. Name your features (Base Plate, Mounting Holes, Edge Fillet) so the next person — or you, in six months — can read the tree like a story.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Extrude turns a sketch into a solid; Cut removes material; Revolve spins a profile into a round part.</li><li>Hole Wizard is best for real holes.</li><li>Fillets round edges and spread stress; chamfers break sharp edges.</li><li>Fillets and chamfers go last in the feature tree.</li><li>Design intent = the plan that lets the model survive changes.</li></ul></p>\n<p><strong>Common mistake:</strong> Building on an under-defined sketch. Fully define the sketch first, or the feature will move later.</p>\n<p><strong>Common mistake:</strong> Adding fillets early. A fillet on an edge that later features need will break the model.</p>\n<p><strong>Ready check:</strong> If you can model a plate with holes, a revolved shaft, and fillets in the right order — in SOLIDWORKS on your computer — you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Extruded Boss/Base",
      "def": "The feature that pushes a sketch out to a depth to make a solid."
    },
    {
      "term": "Extruded Cut",
      "def": "The feature that cuts material away using a sketch, such as a hole or a slot."
    },
    {
      "term": "Hole Wizard",
      "def": "The SOLIDWORKS tool for making standard holes, including counterbores, countersinks, and threads."
    },
    {
      "term": "Revolve",
      "def": "The feature that spins a sketch around an axis to make a round part."
    },
    {
      "term": "Fillet",
      "def": "A rounded edge on a part, which spreads stress and makes the part safer to handle."
    },
    {
      "term": "Chamfer",
      "def": "A flat 45° cut on an edge, which breaks sharpness and helps parts fit together."
    },
    {
      "term": "Design intent",
      "def": "The plan behind a model: which dimensions drive it and what should happen when a size changes."
    },
    {
      "term": "Feature tree",
      "def": "The ordered list of features in the FeatureManager; the order they were made."
    },
    {
      "term": "Blind extrude",
      "def": "An extrude to a set depth, stopping at a number rather than at another face."
    },
    {
      "term": "Through-all",
      "def": "An extrude or cut that goes all the way through the part."
    },
    {
      "term": "Counterbore",
      "def": "A flat-bottomed enlargement at the top of a hole, so a bolt head sits flush."
    },
    {
      "term": "Countersink",
      "def": "A cone-shaped enlargement at the top of a hole, so a flat-head screw sits flush."
    },
    {
      "term": "Axis",
      "def": "The line a revolve spins around, usually a centre line in the sketch."
    },
    {
      "term": "Profile",
      "def": "The 2D shape in a sketch that a feature is built from."
    }
  ],
  "video": {
    "title": "SolidWorks Tutorial: ARM Design for Piston Practice (Step-by-Step Guide)",
    "embedUrl": "https://www.youtube.com/embed/RVfWWqK-l5Y",
    "note": "A full part-modeling exercise: sketch, extrude, cut, and check the result against the drawing. Follow it in SOLIDWORKS on your computer, step by step — this app teaches the workflow; the modelling happens in SOLIDWORKS.",
    "more": [
      {
        "title": "SolidWorks Part Modeling: Overhung Pivot Hinge | CAD Exercise #051",
        "url": "https://www.youtube.com/watch?v=9L2fJtD7wKQ"
      },
      {
        "title": "SOLIDWORKSTutorial|BossExtrude Options|Practical Exercise 006#solidworks2026   #solidworkstutorials",
        "url": "https://www.youtube.com/watch?v=ntP8S1fXqiw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Extruded Boss/Base” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Extruded Boss/Base — The feature that pushes a sketch out to a depth to make a solid. It matters because it connects directly to this module’s first goal: Build a part with Extruded Boss/Base. A good answer names the term correctly, explains it in plain words, and gives a real example from the module.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Extruded Cut” and “Hole Wizard”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Extruded Cut — The feature that cuts material away using a sketch, such as a hole or a slot. Hole Wizard — The SOLIDWORKS tool for making standard holes, including counterbores, countersinks, and threads. They differ in what they describe: the first is about extruded cut, the second about hole wizard. A good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module’s main idea: “Build a part with Extruded Boss/Base.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Build a part with Extruded Boss/Base. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Revolve — The feature that spins a sketch around an axis to make a round part. Fillet — A rounded edge on a part, which spreads stress and makes the part safer to handle. Chamfer — A flat 45° cut on an edge, which breaks sharpness and helps parts fit together. Design intent — The plan behind a model: which dimensions drive it and what should happen when a size changes. (Any four module terms, explained in the student’s own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> In SOLIDWORKS, model a plate 60 mm × 40 mm × 10 mm with two Ø10 mm holes through it, 20 mm from each end on the centre line. List the features in order.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Sketch a 60 × 40 rectangle on the Front plane, fully defined, and Extrude it 10 mm (Base Plate). Step 2: Sketch two Ø10 circles on the top face, 20 mm from each end on the centre line, and Extruded Cut them through-all (Mounting Holes). Step 3: Check the model against the drawing: 60 × 40 × 10, two holes, correct positions. (Modelling happens in SOLIDWORKS; this app checks your understanding of the order.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A student adds a 5 mm fillet to an edge, then tries to cut a hole through that edge and the cut fails. Explain what went wrong and what to do instead.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The fillet was added too early — the hole was built on an edge that no longer exists in its sharp form. Step 2: Fillets and chamfers are finishing features and go last. Step 3: Delete or reorder the fillet after the hole, then re-add it. A good answer names feature order as the cause.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Extruded Boss/Base” mean?",
      "choices": [
        "The feature that pushes a sketch out to a depth to make a solid.",
        "The SOLIDWORKS tool for making standard holes, including counterbores, countersinks, and threads.",
        "The feature that spins a sketch around an axis to make a round part.",
        "A rounded edge on a part, which spreads stress and makes the part safer to handle."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Extruded Boss/Base means: The feature that pushes a sketch out to a depth to make a solid.. (b) is the definition of Hole Wizard, not of Extruded Boss/Base. (c) is the definition of Revolve, not of Extruded Boss/Base. (d) is the definition of Fillet, not of Extruded Boss/Base."
    },
    {
      "q": "What does the term “Hole Wizard” mean?",
      "choices": [
        "A rounded edge on a part, which spreads stress and makes the part safer to handle.",
        "The SOLIDWORKS tool for making standard holes, including counterbores, countersinks, and threads.",
        "A flat 45° cut on an edge, which breaks sharpness and helps parts fit together.",
        "The plan behind a model: which dimensions drive it and what should happen when a size changes."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Hole Wizard means: The SOLIDWORKS tool for making standard holes, including counterbores, countersinks, and threads.. (a) is the definition of Fillet, not of Hole Wizard. (c) is the definition of Chamfer, not of Hole Wizard. (d) is the definition of Design intent, not of Hole Wizard."
    },
    {
      "q": "What does the term “Fillet” mean?",
      "choices": [
        "The plan behind a model: which dimensions drive it and what should happen when a size changes.",
        "The ordered list of features in the FeatureManager; the order they were made.",
        "A rounded edge on a part, which spreads stress and makes the part safer to handle.",
        "An extrude to a set depth, stopping at a number rather than at another face."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Fillet means: A rounded edge on a part, which spreads stress and makes the part safer to handle.. (a) is the definition of Design intent, not of Fillet. (b) is the definition of Feature tree, not of Fillet. (d) is the definition of Blind extrude, not of Fillet."
    },
    {
      "q": "What does the term “Design intent” mean?",
      "choices": [
        "An extrude to a set depth, stopping at a number rather than at another face.",
        "An extrude or cut that goes all the way through the part.",
        "A flat-bottomed enlargement at the top of a hole, so a bolt head sits flush.",
        "The plan behind a model: which dimensions drive it and what should happen when a size changes."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Design intent means: The plan behind a model: which dimensions drive it and what should happen when a size changes.. (a) is the definition of Blind extrude, not of Design intent. (b) is the definition of Through-all, not of Design intent. (c) is the definition of Counterbore, not of Design intent."
    },
    {
      "q": "Which feature turns a 2D sketch into a 3D solid by pushing it out to a depth?",
      "choices": [
        "Revolve",
        "Extruded Boss/Base",
        "Fillet",
        "Chamfer"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Extrude pushes a sketch out to a depth. (a) spins a sketch around an axis. (c) rounds an edge. (d) cuts an edge at 45°."
    },
    {
      "q": "Why is the Hole Wizard better than a plain Extruded Cut for a bolt hole?",
      "choices": [
        "Because it is faster to click.",
        "Because it knows standard hole sizes, counterbores, countersinks, and threads.",
        "Because it makes the hole bigger.",
        "Because it needs no sketch."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Hole Wizard uses standard hole definitions. (a) is not the reason. (c) is wrong: size is your choice. (d) is wrong: it still needs a sketch point."
    },
    {
      "q": "When should fillets and chamfers be added in the feature tree?",
      "choices": [
        "First, before anything else.",
        "In the middle, after the base.",
        "Last, as finishing features.",
        "Never — they are not needed."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Fillets and chamfers go last so later features are not built on rounded edges. (a) and (b) risk breaking later features. (d) is wrong: they matter for strength and safety."
    },
    {
      "q": "What is design intent?",
      "choices": [
        "The colour of the part.",
        "The plan behind a model: which dimensions drive it and what should happen when a size changes.",
        "The name of the file.",
        "The first feature in the tree."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Design intent is the plan that lets a model survive changes. (a) is appearance. (c) is a file name. (d) is just the first feature."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — SOLIDWORKS Part Modeling: Extrude, Revolve, Fillet, Chamfer: Quick Reference</h3>\n<p><strong>Core idea:</strong> Build a part with Extruded Boss/Base.</p>\n<p><strong>Key terms:</strong> Extruded Boss/Base · Extruded Cut · Hole Wizard · Revolve · Fillet · Chamfer · Design intent · Feature tree.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Build a part with Extruded Boss/Base.</li>\n<li>Cut material with Extruded Cut and holes.</li>\n<li>Use Revolve for round parts.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module’s main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
