// egr112 - Module 9: Tolerances, Fits & GD&T Basics
module.exports = {
  "number": 9,
  "slug": "tolerances-fits-gdt",
  "title": "Tolerances, Fits & GD&T Basics",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a tolerance is and why parts need one.",
    "Explain clearance, interference, and transition fits.",
    "Read an ISO fit code such as H7/g6 and work out its limits.",
    "Explain datums and the basic ideas of GD&T.",
    "Explain why tighter tolerances cost more."
  ],
  "sections": [
    {
      "heading": "Why Tolerances Exist",
      "html": "<p>No manufacturing process makes parts exactly to size. A shaft drawn as 25 mm might come out at 25.01 mm or 24.99 mm, and both are fine — as long as the part still works. A tolerance is the allowed range of variation: a dimension written as 25.00 ± 0.05 mm may be anywhere from 24.95 mm to 25.05 mm. Without tolerances, no part would ever pass inspection, because nothing is ever exactly to size.</p>\n<p>Tolerances are a deal between the designer and the maker: the designer says how much variation the part can stand, and the maker says how tightly they can hold it. A tolerance that is tighter than the process can achieve means scrap and rework; a tolerance that is looser than the function needs means parts that do not fit or work. Good tolerancing is giving each dimension just the tolerance it needs — no tighter, no looser.</p>\n"
    },
    {
      "heading": "Fits: Clearance, Interference, and Transition",
      "html": "<p>A fit describes how a shaft and a hole go together. A clearance fit always leaves a gap: the shaft is always smaller than the hole, so the parts slide freely — a shaft in a bearing housing. An interference fit always overlaps: the shaft is always bigger than the hole, so the parts must be pressed or heated together and stay locked — a gear pressed onto a shaft. A transition fit can be either, depending on the actual sizes — a tight fit that may need a light press or may slide, used where a part must be located precisely but removed for maintenance.</p>\n<p>The fit is chosen by the job: clearance where parts must move, interference where they must never move, transition where they must be located exactly. The choice is made by the tolerance codes, not by guessing — the ISO fit system gives standard combinations that workshops everywhere understand.</p>\n"
    },
    {
      "heading": "Reading an ISO Fit: H7/g6",
      "html": "<p>An ISO fit code such as H7/g6 for a 25 mm shaft tells you everything. The capital letter is the hole: H means the hole's lower limit is exactly the nominal size, and 7 is the tolerance grade (the width of the tolerance band). The small letter is the shaft: g means the shaft is always below nominal, and 6 is its grade. For 25 mm H7/g6, the hole is 25.000–25.021 mm and the shaft is 24.980–24.993 mm.</p>\n<p>The clearances follow from the limits. The maximum clearance is the biggest hole minus the smallest shaft: 25.021 − 24.980 = 0.041 mm. The minimum clearance is the smallest hole minus the biggest shaft: 25.000 − 24.993 = 0.007 mm. So the fit always leaves a gap between 0.007 mm and 0.041 mm — a clearance fit, as intended. Working out the clearances from the limits is the core skill of this module, and it is what the lab tests.</p>\n"
    },
    {
      "heading": "GD&T: Controlling Shape, Not Just Size",
      "html": "<p>Size tolerances alone do not control shape: a shaft can be within its diameter tolerance and still be bent, oval, or tapered. Geometric Dimensioning and Tolerancing (GD&T) controls shape, orientation, and position with symbols on the drawing: flatness (how flat a surface is), straightness, circularity, perpendicularity (how square a face is to a datum), and true position (where a hole is relative to its datums).</p>\n<p>A datum is a reference — a surface, axis, or plane that other features are measured from. The 3-2-1 principle locates a part in space: three points define a plane, two points define a line, and one point defines the origin. GD&T lets a designer say exactly what matters — a hole's position relative to a datum matters, its exact diameter matters less — and it lets the maker inspect it with a clear rule. The full GD&T system is a subject of its own; this module gives you the vocabulary and the idea.</p>\n"
    },
    {
      "heading": "The Cost of Tight Tolerances and Common Mistakes",
      "html": "<p>Tighter tolerances cost more, steeply: halving a tolerance can double or triple the cost, because it needs a more precise machine, more inspection, and more scrap. A tolerance of ±0.01 mm needs grinding; ±0.1 mm can be milled; ±0.5 mm can be cut on a saw. Give each dimension the loosest tolerance that still lets the part work, and tighten only the dimensions that matter — the ones that control the fit, the function, or the assembly.</p>\n<p><p><strong>Takeaways:</strong><ul><li>A tolerance is the allowed range of variation around a nominal size.</li><li>Clearance fits always leave a gap; interference fits always overlap; transition fits can do either.</li><li>H7/g6 for 25 mm gives a hole of 25.000–25.021 mm and a shaft of 24.980–24.993 mm, with clearances of 0.007–0.041 mm.</li><li>GD&T controls shape, orientation, and position, using datums as references.</li><li>Tighter tolerances cost much more — tighten only what matters.</li></ul></p>\n<p><strong>Common mistake:</strong> Tolerancing every dimension tightly. It multiplies cost for no benefit — tighten only the dimensions that control fit or function.</p>\n<p><strong>Common mistake:</strong> Thinking a size tolerance controls shape. A shaft can be within its diameter tolerance and still be bent — that is what GD&T is for.</p>\n<p><strong>Ready check:</strong> If you can explain the three fit types, work out clearances from an H7/g6 code, and explain what a datum is, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Tolerance",
      "def": "The allowed range of variation around a nominal dimension, such as 25.00 ± 0.05 mm."
    },
    {
      "term": "Nominal size",
      "def": "The ideal size a dimension is designed to, before tolerances are applied."
    },
    {
      "term": "Clearance fit",
      "def": "A fit that always leaves a gap between shaft and hole, so the parts move freely."
    },
    {
      "term": "Interference fit",
      "def": "A fit where the shaft is always bigger than the hole, so the parts must be pressed together and stay locked."
    },
    {
      "term": "Transition fit",
      "def": "A fit that can be either clearance or interference, depending on the actual sizes."
    },
    {
      "term": "ISO fit code",
      "def": "A standard code such as H7/g6 that defines a hole and shaft tolerance combination."
    },
    {
      "term": "Tolerance grade",
      "def": "The number in a fit code (such as 7 in H7) that sets the width of the tolerance band."
    },
    {
      "term": "GD&T",
      "def": "Geometric Dimensioning and Tolerancing: symbols on a drawing that control shape, orientation, and position."
    },
    {
      "term": "Datum",
      "def": "A reference surface, axis, or plane that other features are measured from."
    },
    {
      "term": "Flatness",
      "def": "A GD&T control for how flat a surface is."
    },
    {
      "term": "Perpendicularity",
      "def": "A GD&T control for how square a feature is to a datum."
    },
    {
      "term": "True position",
      "def": "A GD&T control for where a hole or feature is relative to its datums."
    },
    {
      "term": "3-2-1 principle",
      "def": "Locating a part in space: three points define a plane, two define a line, one defines the origin."
    }
  ],
  "video": {
    "title": "Geometric Dimensioning & Tolerancing vs. Traditional | 4 Fundamentals of GD&T | Ideas & Terminology",
    "embedUrl": "https://www.youtube.com/embed/a3uBWU9TlUg",
    "note": "GD&T versus traditional tolerancing, with the four fundamentals and real drawing examples. Note the GD&T symbols shown, then match each one to the definitions in this module.",
    "more": [
      {
        "title": "GD&T Datums, Reference Frames, & Part Immobilization | 3-2-1, 4-1-1, 4-2-0 | Actual Mating Envelopes",
        "url": "https://www.youtube.com/watch?v=ZN1LWcIURJI"
      },
      {
        "title": "GD&T Module 2 Full Course | Datum Selection & 3-2-1 Principle with Live Project",
        "url": "https://www.youtube.com/watch?v=nbH_r8sM7VU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 25 mm H7/g6 fit has a hole of 25.000–25.021 mm and a shaft of 24.980–24.993 mm. Work out the maximum and minimum clearances.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Maximum clearance = biggest hole − smallest shaft = 25.021 − 24.980 = 0.041 mm. Step 2: Minimum clearance = smallest hole − biggest shaft = 25.000 − 24.993 = 0.007 mm. Step 3: The fit always leaves a gap of 0.007–0.041 mm — a clearance fit. A good answer shows both subtractions.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A gear must be pressed onto a shaft and never move. Which fit type do you choose — clearance, interference, or transition — and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Choose an interference fit, because the shaft is always bigger than the hole, so the parts must be pressed together and stay locked. Step 2: A clearance fit would let the gear slide and spin on the shaft. Step 3: A transition fit might be clearance, which is not good enough for a joint that must never move. A good answer names interference and the never-move reason.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A shaft must slide freely in a housing but with as little play as possible. Which fit type, and what does the ISO code tell you?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Choose a clearance fit with a small clearance, such as H7/g6 — the shaft is always smaller than the hole, so it slides, but the gap is only 0.007–0.041 mm. Step 2: The ISO code gives the exact limits for the hole and the shaft, so the workshop can make and inspect them. A good answer names the clearance fit and the code's role.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A drawing gives a shaft diameter as 25.00 ± 0.05 mm. A part measures 25.06 mm. Does it pass inspection? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The allowed range is 24.95–25.05 mm. Step 2: 25.06 mm is above the upper limit of 25.05 mm, so the part fails inspection. Step 3: It must be reworked or scrapped, or the drawing changed if the design can accept it. A good answer gives the range and the fail verdict.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A hole's position matters relative to a flat face, but its exact diameter matters less. Which GD&T approach fits, and why is it better than a tight size tolerance?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Use true position with the flat face as a datum — it controls where the hole is, which is what matters. Step 2: A tight size tolerance would control the diameter (which matters less) and say nothing about position. Step 3: GD&T lets the designer control what matters and leave the rest loose, which is cheaper to make. A good answer names true position and the datum.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A designer tolerances every dimension on a drawing to ±0.01 mm. Explain why this is a bad idea, and what should be done instead.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: ±0.01 mm needs grinding and heavy inspection, so the cost is very high — and most dimensions do not need it. Step 2: Tighten only the dimensions that control fit or function, and leave the rest at a loose, cheap tolerance such as ±0.5 mm. Step 3: The drawing should show the maker's general tolerance for untoleranced dimensions. A good answer explains the cost and the selective approach.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What is a tolerance?",
      "choices": [
        "The exact size a part must be",
        "The allowed range of variation around a nominal size",
        "The material a part is made from",
        "The cost of making a part"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A tolerance is the permitted variation, such as 25.00 ± 0.05 mm. (a) is the nominal size, which no real part matches exactly. (c) is the material. (d) is the price."
    },
    {
      "q": "A 25 mm H7/g6 fit has a hole of 25.000–25.021 mm and a shaft of 24.980–24.993 mm. What is the maximum clearance?",
      "choices": [
        "0.007 mm",
        "0.041 mm",
        "0.021 mm",
        "0.013 mm"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Maximum clearance = biggest hole − smallest shaft = 25.021 − 24.980 = 0.041 mm. (a) is the minimum clearance. (c) is the hole's tolerance width. (d) is the shaft's tolerance width."
    },
    {
      "q": "What is the minimum clearance for the same H7/g6 fit?",
      "choices": [
        "0.041 mm",
        "0.007 mm",
        "0.021 mm",
        "0.000 mm"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Minimum clearance = smallest hole − biggest shaft = 25.000 − 24.993 = 0.007 mm. (a) is the maximum clearance. (c) is the hole's tolerance width. (d) would mean the parts touch, which this fit never does."
    },
    {
      "q": "Which fit always leaves a gap between shaft and hole, so the parts move freely?",
      "choices": [
        "Interference fit",
        "Clearance fit",
        "Transition fit",
        "Press fit"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A clearance fit always leaves a gap. (a) always overlaps and locks the parts. (c) can be either. (d) is another name for an interference fit."
    },
    {
      "q": "A gear must be pressed onto a shaft and never move. Which fit do you choose?",
      "choices": [
        "Clearance fit",
        "Interference fit",
        "Transition fit",
        "Loose fit"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An interference fit locks the parts together. (a) would let the gear slide. (c) might be clearance, which is not good enough. (d) is a clearance fit by another name."
    },
    {
      "q": "What is a datum in GD&T?",
      "choices": [
        "A date on the drawing",
        "A reference surface, axis, or plane that other features are measured from",
        "A type of tolerance",
        "A material specification"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A datum is the reference for measuring other features. (a) is a calendar date. (c) is wrong: a datum is a reference, not a tolerance. (d) is wrong: materials are specified separately."
    },
    {
      "q": "A shaft is within its diameter tolerance but is bent. What controls the bend?",
      "choices": [
        "The size tolerance",
        "GD&T — shape controls such as straightness",
        "The material",
        "The fit code"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Size tolerances do not control shape; GD&T shape controls such as straightness do. (a) is wrong: diameter tolerance says nothing about bending. (c) is wrong: material does not control shape. (d) is wrong: a fit code controls size, not shape."
    },
    {
      "q": "Why does tightening a tolerance make a part more expensive?",
      "choices": [
        "Because the material costs more",
        "Because it needs a more precise machine, more inspection, and produces more scrap",
        "Because the drawing costs more",
        "Because the part gets heavier"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Tight tolerances need better machines, more checking, and more rejects. (a) is wrong: the material is the same. (c) is wrong: drawing cost does not change. (d) is wrong: tolerance does not change weight."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Tolerances, Fits & GD&T Basics: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a tolerance is and why parts need one.</p>\n<p><strong>Key terms:</strong> Tolerance · Nominal size · Clearance fit · Interference fit · Transition fit · ISO fit code · Tolerance grade · GD&T.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a tolerance is and why parts need one.</li>\n<li>Explain clearance, interference, and transition fits.</li>\n<li>Read an ISO fit code such as H7/g6 and work out its limits.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
