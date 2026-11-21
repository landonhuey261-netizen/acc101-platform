// egr103 - Module 6: GD&T Basics: Datums, Flatness, and Position
module.exports = {
  "number": 6,
  "slug": "gdt-basics",
  "title": "GD&T Basics: Datums, Flatness, and Position",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what GD&T is and why it exists.",
    "Name the datum and the datum reference frame.",
    "Read a flatness callout.",
    "Read a position callout with a datum.",
    "Explain why GD&T beats plain coordinate dimensions for holes."
  ],
  "sections": [
    {
      "heading": "Why GD&T Exists",
      "html": "<p>Ordinary dimensions say how big a feature is, but they do not say how flat it must be, how straight, or how exactly a hole must sit relative to another feature. Geometric Dimensioning and Tolerancing (GD&T) is a symbol language that says exactly that — it controls the shape, direction, and position of features, not just their size.</p>\n<p>GD&T matters because parts must fit and work together. A hole that is the right size but in the wrong place is useless. GD&T tells the maker and the inspector exactly what “right” means, with symbols everyone in the world reads the same way.</p>\n"
    },
    {
      "heading": "Datums: The Starting Points",
      "html": "<p>A datum is a theoretically perfect starting point — a flat surface, a hole centre, or an edge — that all measurements are taken from. The datum feature is the real surface on the part; the datum itself is the perfect plane or axis it stands for. Datum A is usually the main mounting face of the part.</p>\n<p>Three datums together make a datum reference frame, which locks the part in space like a corner of a room: one datum stops it moving up and down, the second stops it sliding sideways, the third stops it turning. The 3-2-1 principle says three points on the first datum, two on the second, and one on the third fully locate a part.</p>\n"
    },
    {
      "heading": "Form Controls: Flatness and Straightness",
      "html": "<p>Flatness says how flat a surface must be: all points on the surface must lie between two parallel planes a stated distance apart. A flatness callout of 0.1 mm means the surface may wobble by at most 0.1 mm. Flatness needs no datum — it is about the surface itself, not where it sits.</p>\n<p>Straightness works the same way for an edge or an axis. These form controls are the simplest GD&T symbols and the most used: if a sealing face must be flat, flatness is the callout that says so.</p>\n"
    },
    {
      "heading": "Position: Where Holes Really Belong",
      "html": "<p>Position is the most useful GD&T symbol. It says how far a hole’s centre may wander from its true position, measured from the datums. A callout like ⌀ 0.2 mm | A | B | C means the hole’s centre must lie inside a circle of 0.2 mm diameter around its true position, located from datums A, B, and C.</p>\n<p>The true position is given by basic dimensions — exact numbers in a box, with no tolerance of their own, because the tolerance lives in the position callout. This is better than plain ± coordinate dimensions, which allow a square zone that is bigger at the corners than at the sides — a round zone matches how holes actually fit.</p>\n<p><strong>Reading a Feature Control Frame</strong></p>\n<p>A GD&T callout lives in a feature control frame: a box divided into compartments. The first holds the symbol (flatness, position, and so on), the second holds the tolerance number, and the rest hold the datum letters in order. Read it left to right: symbol, tolerance, datums.</p>\n<p>Example: a frame reading ⌀ | Ø0.2 | A | B means: position, within a 0.2 mm diameter zone, located from datum A and then datum B. The order of the datums matters — the first datum is the most important, and the part is located from it first.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>GD&T controls shape, direction, and position — not just size.</li><li>A datum is a perfect starting point; three datums make a reference frame (3-2-1).</li><li>Flatness: the surface must lie between two planes 0.1 mm apart (for a 0.1 callout).</li><li>Position: the hole centre must lie in a round zone around its true position, from the datums.</li><li>Read a feature control frame left to right: symbol, tolerance, datums.</li></ul></p>\n<p><strong>Common mistake:</strong> Treating a basic dimension like an ordinary dimension. Basic dimensions have no tolerance of their own — the tolerance is in the GD&T callout.</p>\n<p><strong>Common mistake:</strong> Ignoring datum order. Datum A is located first; swapping datums changes what the callout means.</p>\n<p><strong>Ready check:</strong> If you can explain a datum, read a flatness callout, and read a position callout with datums, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "GD&T",
      "def": "Geometric Dimensioning and Tolerancing: a symbol language that controls the shape, direction, and position of features."
    },
    {
      "term": "Datum",
      "def": "A theoretically perfect starting point — a plane, axis, or point — that measurements are taken from."
    },
    {
      "term": "Datum feature",
      "def": "The real surface on a part that stands for a datum, such as the main mounting face."
    },
    {
      "term": "Datum reference frame",
      "def": "Three datums together, which lock a part in space like the corner of a room."
    },
    {
      "term": "3-2-1 principle",
      "def": "Three points on the first datum, two on the second, and one on the third fully locate a part."
    },
    {
      "term": "Flatness",
      "def": "How flat a surface must be; all its points must lie between two parallel planes a stated distance apart."
    },
    {
      "term": "Straightness",
      "def": "How straight an edge or axis must be."
    },
    {
      "term": "Position",
      "def": "How far a feature’s centre may wander from its true position, measured from the datums."
    },
    {
      "term": "True position",
      "def": "The exact, theoretically perfect location of a feature, given by basic dimensions."
    },
    {
      "term": "Basic dimension",
      "def": "An exact dimension in a box, with no tolerance of its own; the tolerance lives in the GD&T callout."
    },
    {
      "term": "Feature control frame",
      "def": "The box holding a GD&T callout: symbol, tolerance, and datums, read left to right."
    },
    {
      "term": "Tolerance zone",
      "def": "The region a feature must lie inside, such as a circle of 0.2 mm diameter for a position callout."
    },
    {
      "term": "Form control",
      "def": "A GD&T control on shape alone, such as flatness or straightness, needing no datum."
    },
    {
      "term": "ASME Y14.5",
      "def": "The US standard that defines GD&T symbols and rules."
    }
  ],
  "video": {
    "title": "GD&T Position vs. Coordinate Dimensions",
    "embedUrl": "https://www.youtube.com/embed/PI5V3HUY9Ro",
    "note": "GD&T Basics shows why a position tolerance beats plain coordinate dimensions for holes: a round zone matches how parts really fit. Watch it, then explain the difference to a classmate.",
    "more": [
      {
        "title": "Beginners Guide to SOLIDWORKS: Assembly Modeling",
        "url": "https://www.youtube.com/watch?v=XcOzOMelEyc"
      },
      {
        "title": "SolidWorks Assembly tutorial: Introduction & some Basic Concept | SolidWorks 2023 | Assembly Design",
        "url": "https://www.youtube.com/watch?v=ORTiHZoeLjk"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “GD&T” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> GD&T — Geometric Dimensioning and Tolerancing: a symbol language that controls the shape, direction, and position of features. It matters because it connects directly to this module’s first goal: Explain what GD&T is and why it exists. A good answer names the term correctly, explains it in plain words, and gives a real example from the module.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Datum” and “Datum feature”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Datum — A theoretically perfect starting point — a plane, axis, or point — that measurements are taken from. Datum feature — The real surface on a part that stands for a datum, such as the main mounting face. They differ in what they describe: the first is about datum, the second about datum feature. A good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module’s main idea: “Explain what GD&T is and why it exists.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Explain what GD&T is and why it exists. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Datum reference frame — Three datums together, which lock a part in space like the corner of a room. 3-2-1 principle — Three points on the first datum, two on the second, and one on the third fully locate a part. Flatness — How flat a surface must be; all its points must lie between two parallel planes a stated distance apart. Straightness — How straight an edge or axis must be. (Any four module terms, explained in the student’s own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A drawing says a hole has a position tolerance of Ø0.2 mm from datums A, B, and C. Explain in plain words what the maker must achieve.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The hole’s centre must lie inside a circle 0.2 mm across, centred on its true position. Step 2: The true position is located from datums A, B, and C, in that order. Step 3: If the centre is inside the circle, the hole passes; outside, it fails. A good answer explains the round zone and the datums.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A sealing face has a flatness callout of 0.1 mm. A measurement finds the surface wobbles by 0.15 mm. Does it pass? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Flatness of 0.1 mm means all points must lie between two planes 0.1 mm apart. Step 2: A wobble of 0.15 mm is bigger than 0.1 mm. Step 3: The face fails — it must be re-machined or scrapped. A good answer gives the numbers and the verdict.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “GD&T” mean?",
      "choices": [
        "Geometric Dimensioning and Tolerancing: a symbol language that controls the shape, direction, and position of features.",
        "The real surface on a part that stands for a datum, such as the main mounting face.",
        "Three datums together, which lock a part in space like the corner of a room.",
        "Three points on the first datum, two on the second, and one on the third fully locate a part."
      ],
      "answer": 0,
      "explanation": "Correct: (a). GD&T means: Geometric Dimensioning and Tolerancing: a symbol language that controls the shape, direction, and position of features.. (b) is the definition of Datum feature, not of GD&T. (c) is the definition of Datum reference frame, not of GD&T. (d) is the definition of 3-2-1 principle, not of GD&T."
    },
    {
      "q": "What does the term “Datum feature” mean?",
      "choices": [
        "Three points on the first datum, two on the second, and one on the third fully locate a part.",
        "The real surface on a part that stands for a datum, such as the main mounting face.",
        "How flat a surface must be; all its points must lie between two parallel planes a stated distance apart.",
        "How straight an edge or axis must be."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Datum feature means: The real surface on a part that stands for a datum, such as the main mounting face.. (a) is the definition of 3-2-1 principle, not of Datum feature. (c) is the definition of Flatness, not of Datum feature. (d) is the definition of Straightness, not of Datum feature."
    },
    {
      "q": "What does the term “3-2-1 principle” mean?",
      "choices": [
        "How straight an edge or axis must be.",
        "How far a feature’s centre may wander from its true position, measured from the datums.",
        "Three points on the first datum, two on the second, and one on the third fully locate a part.",
        "The exact, theoretically perfect location of a feature, given by basic dimensions."
      ],
      "answer": 2,
      "explanation": "Correct: (c). 3-2-1 principle means: Three points on the first datum, two on the second, and one on the third fully locate a part.. (a) is the definition of Straightness, not of 3-2-1 principle. (b) is the definition of Position, not of 3-2-1 principle. (d) is the definition of True position, not of 3-2-1 principle."
    },
    {
      "q": "What does the term “Straightness” mean?",
      "choices": [
        "The exact, theoretically perfect location of a feature, given by basic dimensions.",
        "An exact dimension in a box, with no tolerance of its own; the tolerance lives in the GD&T callout.",
        "The box holding a GD&T callout: symbol, tolerance, and datums, read left to right.",
        "How straight an edge or axis must be."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Straightness means: How straight an edge or axis must be.. (a) is the definition of True position, not of Straightness. (b) is the definition of Basic dimension, not of Straightness. (c) is the definition of Feature control frame, not of Straightness."
    },
    {
      "q": "What does a datum do in GD&T?",
      "choices": [
        "It tells you the price of the part.",
        "It gives a perfect starting point that measurements are taken from.",
        "It tells you the colour of the part.",
        "It replaces all dimensions."
      ],
      "answer": 1,
      "explanation": "Correct: (b). A datum is the reference all measurements come from. (a) is not on a drawing. (c) is irrelevant. (d) is wrong: datums work with dimensions, not instead of them."
    },
    {
      "q": "A flatness callout of 0.1 mm means:",
      "choices": [
        "The surface must be exactly flat.",
        "All points on the surface must lie between two parallel planes 0.1 mm apart.",
        "The surface must be 0.1 mm thick.",
        "The surface must be 0.1 mm from datum A."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Flatness allows 0.1 mm of wobble between two planes. (a) is impossible — nothing is exactly flat. (c) confuses flatness with thickness. (d) describes a position, not flatness."
    },
    {
      "q": "A position callout reads ⌀ 0.2 mm | A | B | C. What is the tolerance zone?",
      "choices": [
        "A square 0.2 mm on each side.",
        "A circle 0.2 mm in diameter around the true position.",
        "A line 0.2 mm long.",
        "A sphere 0.2 mm across."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Position uses a round (cylindrical) zone of the stated diameter. (a) is what plain coordinate dimensions allow — the problem GD&T fixes. (c) and (d) are wrong shapes."
    },
    {
      "q": "Why is a position tolerance better than plain ± coordinate dimensions for a hole?",
      "choices": [
        "Because it is cheaper to write.",
        "Because a round zone matches how holes fit, while a square zone is bigger at the corners.",
        "Because it needs no datums.",
        "Because it allows bigger errors."
      ],
      "answer": 1,
      "explanation": "Correct: (b). The round zone is fair in every direction; the square zone is loose at the corners. (a) is not the reason. (c) is wrong: position needs datums. (d) is wrong: it is more precise, not looser."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — GD&T Basics: Datums, Flatness, and Position: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what GD&T is and why it exists.</p>\n<p><strong>Key terms:</strong> GD&T · Datum · Datum feature · Datum reference frame · 3-2-1 principle · Flatness · Straightness · Position.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what GD&T is and why it exists.</li>\n<li>Name the datum and the datum reference frame.</li>\n<li>Read a flatness callout.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module’s main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
