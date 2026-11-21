// egr103 - Module 9: Assemblies in SOLIDWORKS: Mates and Exploded Views
module.exports = {
  "number": 9,
  "slug": "solidworks-assemblies",
  "title": "Assemblies in SOLIDWORKS: Mates and Exploded Views",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what an assembly is.",
    "Insert parts into an assembly.",
    "Apply coincident, concentric, and distance mates.",
    "Tell a fully defined assembly apart from one that can still move.",
    "Make an exploded view."
  ],
  "sections": [
    {
      "heading": "What an Assembly Is",
      "html": "<p>An assembly is a SOLIDWORKS file that puts several parts together in their working positions: a bracket, a bolt, and a nut, for example. The parts are not copied into the assembly — the assembly file points to the part files, so changing a part updates every assembly that uses it.</p>\n<p>Assemblies are how real products are designed. Nobody designs a bicycle as one part; they design the frame, the wheels, and the gears separately, then assemble them and check that everything fits and moves correctly.</p>\n"
    },
    {
      "heading": "Fixed and Floating Parts",
      "html": "<p>The first part you insert into an assembly is fixed in place by default — it cannot move. Every part after that floats: it can be dragged around until mates hold it. The usual habit is to fix the biggest part (the base or frame) and mate everything else to it.</p>\n<p>A part that can still move is under-defined, just like a blue sketch. A fully mated part cannot move at all (unless it is meant to, like a hinge). Check the status: SOLIDWORKS tells you when a part is fully defined.</p>\n"
    },
    {
      "heading": "Mates: How Parts Are Held Together",
      "html": "<p>Mates are the rules that hold parts together. A coincident mate puts two faces on the same plane. A concentric mate lines up two round features, such as a bolt in a hole, on the same axis. A distance mate holds two faces a set distance apart.</p>\n<p>Mate in a sensible order: first the mate that sets the main position (often concentric for a bolt), then the mate that sets the face (coincident), then the mate that stops rotation. Three good mates usually fully define a part; more mates than needed will fight each other.</p>\n"
    },
    {
      "heading": "Checking the Assembly: Interference and Movement",
      "html": "<p>Once mated, check the assembly. Interference detection finds parts that overlap — two solids in the same space, which cannot happen in real life. Move the parts that should move (a hinge, a slider) and watch that they move freely and stop where they should.</p>\n<p>Also check the mass and the centre of gravity: SOLIDWORKS can report both from the assembly. A product that is heavier on one side than expected will tip, wear unevenly, or need a bigger motor than planned.</p>\n<p><strong>Exploded Views: Showing How It Goes Together</strong></p>\n<p>An exploded view pulls the parts apart along their assembly directions, so you can see every part and how it fits. Exploded views are used in assembly instructions and catalogues — they are how a customer knows which bolt goes where.</p>\n<p>Make the exploded view by dragging parts along sensible directions (usually along the bolt axis first), keeping the order the parts assemble in. A good exploded view reads like a story: base first, then each part in the order it is fitted.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>An assembly points to part files; changing a part updates the assembly.</li><li>First part fixed; the rest float until mated.</li><li>Coincident = same plane; concentric = same axis; distance = set gap.</li><li>Check interference and movement before calling an assembly done.</li><li>Exploded views show assembly order.</li></ul></p>\n<p><strong>Common mistake:</strong> Over-mating — adding mates that fight each other. Three good mates usually do the job; a fourth that says the same thing will cause errors.</p>\n<p><strong>Common mistake:</strong> Mating to the wrong face. A coincident mate on a filleted face will move when the fillet changes — mate to stable faces and datums.</p>\n<p><strong>Ready check:</strong> If you can assemble a bracket, bolt, and nut with three mates, check for interference, and make an exploded view — in SOLIDWORKS on your computer — you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Assembly",
      "def": "A SOLIDWORKS file that puts several parts together in their working positions."
    },
    {
      "term": "Component",
      "def": "A part placed inside an assembly."
    },
    {
      "term": "Mate",
      "def": "A rule that holds two parts together, such as coincident, concentric, or distance."
    },
    {
      "term": "Coincident mate",
      "def": "A mate that puts two faces on the same plane."
    },
    {
      "term": "Concentric mate",
      "def": "A mate that lines up two round features, such as a bolt and a hole, on the same axis."
    },
    {
      "term": "Distance mate",
      "def": "A mate that holds two faces a set distance apart."
    },
    {
      "term": "Fixed part",
      "def": "A part in an assembly that cannot move; usually the first part inserted."
    },
    {
      "term": "Floating part",
      "def": "A part in an assembly that can still be dragged around because it has no mates yet."
    },
    {
      "term": "Interference",
      "def": "Two solid parts overlapping in space, which cannot happen in real life; checked with interference detection."
    },
    {
      "term": "Exploded view",
      "def": "A view with the parts pulled apart along their assembly directions, showing how they fit together."
    },
    {
      "term": "Sub-assembly",
      "def": "An assembly used as a component inside a bigger assembly."
    },
    {
      "term": "Bill of Materials (BOM)",
      "def": "A list of all the parts in an assembly, with quantities and part numbers."
    },
    {
      "term": "Degrees of freedom",
      "def": "The ways a part can move: three translations and three rotations; mates remove them."
    },
    {
      "term": "Mass properties",
      "def": "SOLIDWORKS’ report of a part or assembly’s volume, mass, and centre of gravity."
    }
  ],
  "video": {
    "title": "Beginners Guide to SOLIDWORKS: Assembly Modeling",
    "embedUrl": "https://www.youtube.com/embed/XcOzOMelEyc",
    "note": "Dassault Systèmes’ own beginner’s guide to assemblies: insert parts, apply coincident and concentric mates, and understand fixed vs floating. Follow it in SOLIDWORKS on your computer.",
    "more": [
      {
        "title": "How to Read Construction Drawings | Beginners Guide to Blueprint Reading | Architectural Drawings",
        "url": "https://www.youtube.com/watch?v=e5GVlJ_N68I"
      },
      {
        "title": "Reading Construction Drawings - 10 Minute Crash Course",
        "url": "https://www.youtube.com/watch?v=A3v3ik3kmks"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Assembly” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Assembly — A SOLIDWORKS file that puts several parts together in their working positions. It matters because it connects directly to this module’s first goal: Explain what an assembly is. A good answer names the term correctly, explains it in plain words, and gives a real example from the module.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Component” and “Mate”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Component — A part placed inside an assembly. Mate — A rule that holds two parts together, such as coincident, concentric, or distance. They differ in what they describe: the first is about component, the second about mate. A good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module’s main idea: “Explain what an assembly is.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Explain what an assembly is. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Coincident mate — A mate that puts two faces on the same plane. Concentric mate — A mate that lines up two round features, such as a bolt and a hole, on the same axis. Distance mate — A mate that holds two faces a set distance apart. Fixed part — A part in an assembly that cannot move; usually the first part inserted. (Any four module terms, explained in the student’s own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> In SOLIDWORKS, assemble a plate, a bolt, and a nut: the bolt goes through a hole in the plate and the nut threads onto it. List the mates you would use, in order.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Fix the plate (first part, fixed). Step 2: Concentric mate between the bolt and the hole — this lines up the axes. Step 3: Coincident mate between the bolt head and the plate face. Step 4: Concentric mate between the nut and the bolt, then a coincident mate between the nut face and the plate’s other face. Step 5: Check for interference and that nothing unexpected can move. (Modelling happens in SOLIDWORKS; this app checks your understanding of the mates.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> An assembly shows an interference error: a bolt and a plate overlap by 2 mm. List two possible causes and how you would fix each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Cause A — the bolt is too long or the plate is too thick for the mate; fix by checking the dimensions and the distance mate. Step 2: Cause B — a mate is on the wrong face; fix by deleting the mate and re-mating to the correct face. Step 3: Re-run interference detection to confirm the overlap is gone.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Assembly” mean?",
      "choices": [
        "A SOLIDWORKS file that puts several parts together in their working positions.",
        "A rule that holds two parts together, such as coincident, concentric, or distance.",
        "A mate that puts two faces on the same plane.",
        "A mate that lines up two round features, such as a bolt and a hole, on the same axis."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Assembly means: A SOLIDWORKS file that puts several parts together in their working positions.. (b) is the definition of Mate, not of Assembly. (c) is the definition of Coincident mate, not of Assembly. (d) is the definition of Concentric mate, not of Assembly."
    },
    {
      "q": "What does the term “Mate” mean?",
      "choices": [
        "A mate that lines up two round features, such as a bolt and a hole, on the same axis.",
        "A rule that holds two parts together, such as coincident, concentric, or distance.",
        "A mate that holds two faces a set distance apart.",
        "A part in an assembly that cannot move; usually the first part inserted."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Mate means: A rule that holds two parts together, such as coincident, concentric, or distance.. (a) is the definition of Concentric mate, not of Mate. (c) is the definition of Distance mate, not of Mate. (d) is the definition of Fixed part, not of Mate."
    },
    {
      "q": "What does the term “Concentric mate” mean?",
      "choices": [
        "A part in an assembly that cannot move; usually the first part inserted.",
        "A part in an assembly that can still be dragged around because it has no mates yet.",
        "A mate that lines up two round features, such as a bolt and a hole, on the same axis.",
        "Two solid parts overlapping in space, which cannot happen in real life; checked with interference detection."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Concentric mate means: A mate that lines up two round features, such as a bolt and a hole, on the same axis.. (a) is the definition of Fixed part, not of Concentric mate. (b) is the definition of Floating part, not of Concentric mate. (d) is the definition of Interference, not of Concentric mate."
    },
    {
      "q": "What does the term “Fixed part” mean?",
      "choices": [
        "Two solid parts overlapping in space, which cannot happen in real life; checked with interference detection.",
        "A view with the parts pulled apart along their assembly directions, showing how they fit together.",
        "An assembly used as a component inside a bigger assembly.",
        "A part in an assembly that cannot move; usually the first part inserted."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Fixed part means: A part in an assembly that cannot move; usually the first part inserted.. (a) is the definition of Interference, not of Fixed part. (b) is the definition of Exploded view, not of Fixed part. (c) is the definition of Sub-assembly, not of Fixed part."
    },
    {
      "q": "What does a concentric mate do?",
      "choices": [
        "Puts two faces on the same plane.",
        "Lines up two round features, such as a bolt and a hole, on the same axis.",
        "Holds two faces a set distance apart.",
        "Fixes a part so it can never move."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Concentric lines up axes. (a) is a coincident mate. (c) is a distance mate. (d) is fixing a part, not a mate."
    },
    {
      "q": "Why is the first part in an assembly fixed by default?",
      "choices": [
        "Because it is the most expensive part.",
        "So there is a stable base that everything else is mated to.",
        "Because fixed parts cannot be changed.",
        "Because SOLIDWORKS requires it by law."
      ],
      "answer": 1,
      "explanation": "Correct: (b). A fixed base gives the assembly a stable reference. (a) is irrelevant. (c) is wrong: fixed parts can still be edited. (d) is nonsense."
    },
    {
      "q": "An assembly has a part that can still be dragged around. What does that mean?",
      "choices": [
        "The part is broken.",
        "The part is under-defined: it needs more mates.",
        "The part is too heavy.",
        "The assembly is finished."
      ],
      "answer": 1,
      "explanation": "Correct: (b). A draggable part lacks enough mates. (a) is wrong: it is normal for unmated parts. (c) is irrelevant. (d) is wrong: the assembly is not finished."
    },
    {
      "q": "What is an exploded view for?",
      "choices": [
        "To show the parts after an explosion.",
        "To pull the parts apart along their assembly directions so you can see how they fit together.",
        "To make the assembly lighter.",
        "To delete parts from the assembly."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Exploded views show assembly order and fit. (a) is a joke, not the meaning. (c) is wrong: nothing is lighter. (d) is wrong: no parts are deleted."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Assemblies in SOLIDWORKS: Mates and Exploded Views: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what an assembly is.</p>\n<p><strong>Key terms:</strong> Assembly · Component · Mate · Coincident mate · Concentric mate · Distance mate · Fixed part · Floating part.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what an assembly is.</li>\n<li>Insert parts into an assembly.</li>\n<li>Apply coincident, concentric, and distance mates.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module’s main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
