// egr103 - Module 4: Dimensioning Rules & Tolerances
module.exports = {
  "number": 4,
  "slug": "dimensioning-and-tolerances",
  "title": "Dimensioning Rules & Tolerances",
  "estTime": "3–4 hours",
  "objectives": [
    "Place dimensions on a drawing correctly.",
    "Read a limit dimension such as 50.0 ± 0.2 mm.",
    "Work out the maximum and minimum size from a tolerance.",
    "Explain why dimensions are not repeated.",
    "Tell a tolerance stack-up problem apart from a single tolerance."
  ],
  "sections": [
    {
      "heading": "Dimensions: The Numbers That Make It Real",
      "html": "<p>A dimension is a number on a drawing that gives a size. Without dimensions, a drawing is a picture; with them, it is instructions. Every size a maker needs must be on the drawing exactly once, in the right place, with the right unit.</p>\n<p>Dimensions are drawn with extension lines (thin lines reaching out from the part), a dimension line (with arrowheads touching the extension lines), and the number placed above or in the middle of the dimension line. The arrowheads show exactly what is being measured.</p>\n"
    },
    {
      "heading": "The Rules of Good Dimensioning",
      "html": "<p>Rule one: dimension the view that shows the feature’s true shape — a hole’s diameter is dimensioned on the view where the hole looks like a circle. Rule two: put dimensions outside the outline where possible, so they do not cross the part. Rule three: never repeat a dimension — two numbers for one size will disagree one day.</p>\n<p>Rule four: dimension from a sensible starting point, usually one edge or a centre line, so the maker measures from the same place you did. Rule five: keep numbers readable and uncluttered; a crowded drawing is a drawing that will be misread.</p>\n"
    },
    {
      "heading": "Tolerances: How Much Wrong Is Allowed",
      "html": "<p>No part is ever made exactly to size. A tolerance says how much a size is allowed to vary and still be acceptable. A dimension written as 50.0 ± 0.2 mm means the part may be from 49.8 mm to 50.2 mm. The nominal size is 50.0 mm; the tolerance is ±0.2 mm.</p>\n<p>A hole written as Ø10.0 ± 0.1 mm may be from 9.9 mm to 10.1 mm across. Tolerances are tight where parts must fit together (a shaft in a bearing) and loose where they do not matter (the length of a handle). Tight tolerances cost money, so engineers only tighten the ones that matter.</p>\n"
    },
    {
      "heading": "Limits and Fits",
      "html": "<p>Sometimes a dimension is written as limits: 50.0 / 49.8 mm means the size must lie between 49.8 and 50.0 mm. The difference between the limits is the tolerance (0.2 mm here). Limits are clear and hard to misread, which is why workshops like them.</p>\n<p>A fit describes how two parts go together: a clearance fit (the shaft is always smaller than the hole, so it slides), an interference fit (the shaft is always bigger, so it must be pressed in), or a transition fit (sometimes one, sometimes the other). The fit is chosen by the tolerances on the two parts.</p>\n<p><strong>Tolerance Stack-Up: Small Errors Add Up</strong></p>\n<p>When several parts stack together, their tolerances add up. Three parts, each 20.0 ± 0.1 mm, stacked together measure 60.0 ± 0.3 mm — the worst case is 59.7 mm or 60.3 mm. If the assembly only has room for 60.1 mm, the stack can fail even though every single part is “in tolerance”.</p>\n<p>Engineers fight stack-up by dimensioning from a single datum (a baseline) instead of chaining dimensions part to part, and by using GD&T position tolerances, which you will meet in Module 6. The lesson: always think about the assembly, not just the single part.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Dimension the view that shows the feature’s true shape; never repeat a dimension.</li><li>50.0 ± 0.2 mm means 49.8 to 50.2 mm.</li><li>Tight tolerances where parts fit; loose tolerances where they do not matter.</li><li>Limits state the allowed range directly.</li><li>Tolerances add up across an assembly — watch the stack-up.</li></ul></p>\n<p><strong>Common mistake:</strong> Dimensioning a hole on the view where it looks like two lines instead of the view where it looks like a circle.</p>\n<p><strong>Common mistake:</strong> Chaining dimensions from part to part, so small errors add up. Dimension from one datum instead.</p>\n<p><strong>Ready check:</strong> If you can work out the max and min size from 50.0 ± 0.2 mm, explain why dimensions are never repeated, and spot a stack-up risk, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Dimension",
      "def": "A number on a drawing giving a size, such as a length of 50 mm."
    },
    {
      "term": "Extension line",
      "def": "A thin line reaching out from the part to show what a dimension measures."
    },
    {
      "term": "Dimension line",
      "def": "The line with arrowheads at its ends that carries the dimension number."
    },
    {
      "term": "Nominal size",
      "def": "The stated size on a drawing, such as 50.0 mm, before tolerance is applied."
    },
    {
      "term": "Tolerance",
      "def": "How much a real part is allowed to differ from its nominal size and still be acceptable."
    },
    {
      "term": "Limit",
      "def": "The largest and smallest sizes allowed, such as 50.2 mm and 49.8 mm."
    },
    {
      "term": "Bilateral tolerance",
      "def": "A tolerance that allows variation both ways, such as ± 0.2 mm."
    },
    {
      "term": "Clearance fit",
      "def": "A fit where the shaft is always smaller than the hole, so the parts slide freely."
    },
    {
      "term": "Interference fit",
      "def": "A fit where the shaft is always bigger than the hole, so the parts must be pressed together."
    },
    {
      "term": "Transition fit",
      "def": "A fit that may be clearance or interference, depending on the actual sizes."
    },
    {
      "term": "Datum",
      "def": "A fixed starting point or surface that dimensions are measured from."
    },
    {
      "term": "Tolerance stack-up",
      "def": "The adding up of tolerances across several parts in an assembly."
    },
    {
      "term": "Diameter (Ø)",
      "def": "The distance across a circle through its centre; holes are dimensioned by diameter."
    },
    {
      "term": "Radius (R)",
      "def": "Half the diameter; arcs are dimensioned by radius."
    }
  ],
  "video": {
    "title": "Reading Plumbing Drawings - The Easy Way",
    "embedUrl": "https://www.youtube.com/embed/g8VyP4fFWbg",
    "note": "Reading drawings the easy way: follow the dimensions from the datum and check each size against the views. Watch how the presenter traces a dimension from the drawing to the real part.",
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
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Dimension” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Dimension — A number on a drawing giving a size, such as a length of 50 mm. It matters because it connects directly to this module’s first goal: Place dimensions on a drawing correctly. A good answer names the term correctly, explains it in plain words, and gives a real example from the module.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Extension line” and “Dimension line”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Extension line — A thin line reaching out from the part to show what a dimension measures. Dimension line — The line with arrowheads at its ends that carries the dimension number. They differ in what they describe: the first is about extension line, the second about dimension line. A good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module’s main idea: “Place dimensions on a drawing correctly.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Place dimensions on a drawing correctly. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Nominal size — The stated size on a drawing, such as 50.0 mm, before tolerance is applied. Tolerance — How much a real part is allowed to differ from its nominal size and still be acceptable. Limit — The largest and smallest sizes allowed, such as 50.2 mm and 49.8 mm. Bilateral tolerance — A tolerance that allows variation both ways, such as ± 0.2 mm. (Any four module terms, explained in the student’s own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A dimension reads 50.0 ± 0.2 mm. What are the maximum and minimum allowed sizes? A part measures 50.3 mm — is it acceptable?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Maximum = 50.0 + 0.2 = 50.2 mm. Step 2: Minimum = 50.0 − 0.2 = 49.8 mm. Step 3: 50.3 mm is bigger than 50.2 mm, so the part is NOT acceptable — it is out of tolerance.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Three plates, each 20.0 ± 0.1 mm thick, are stacked. What is the worst-case total thickness (maximum and minimum), and why does it matter?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Nominal total = 60.0 mm. Step 2: Worst case = 60.0 ± 0.3 mm, so from 59.7 mm to 60.3 mm. Step 3: It matters because the assembly the stack fits into may only accept 60.1 mm — every plate can be in tolerance while the stack fails. That is tolerance stack-up.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Dimension” mean?",
      "choices": [
        "A number on a drawing giving a size, such as a length of 50 mm.",
        "The line with arrowheads at its ends that carries the dimension number.",
        "The stated size on a drawing, such as 50.0 mm, before tolerance is applied.",
        "How much a real part is allowed to differ from its nominal size and still be acceptable."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Dimension means: A number on a drawing giving a size, such as a length of 50 mm.. (b) is the definition of Dimension line, not of Dimension. (c) is the definition of Nominal size, not of Dimension. (d) is the definition of Tolerance, not of Dimension."
    },
    {
      "q": "What does the term “Dimension line” mean?",
      "choices": [
        "How much a real part is allowed to differ from its nominal size and still be acceptable.",
        "The line with arrowheads at its ends that carries the dimension number.",
        "The largest and smallest sizes allowed, such as 50.2 mm and 49.8 mm.",
        "A tolerance that allows variation both ways, such as ± 0.2 mm."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Dimension line means: The line with arrowheads at its ends that carries the dimension number.. (a) is the definition of Tolerance, not of Dimension line. (c) is the definition of Limit, not of Dimension line. (d) is the definition of Bilateral tolerance, not of Dimension line."
    },
    {
      "q": "A drawing says a shaft must be 25.0 ± 0.05 mm. The machinist makes one shaft at 25.04 mm and another at 24.96 mm. Both are accepted. What does the ±0.05 mm describe?",
      "choices": [
        "The nominal size, the stated size of 25.0 mm.",
        "The tolerance, how much a real part is allowed to differ from its nominal size and still be acceptable.",
        "The datum, the fixed starting point dimensions are measured from.",
        "An interference fit, where the shaft is always bigger than the hole."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Tolerance means how much a real part is allowed to differ from its nominal size and still be acceptable — here, 0.05 mm either way. (a) is wrong: the nominal size is the stated 25.0 mm. (c) is wrong: a datum is a fixed starting point or surface that dimensions are measured from. (d) is wrong: an interference fit is a fit where the shaft is always bigger than the hole, so the parts must be pressed together."
    },
    {
      "q": "What does the term “Bilateral tolerance” mean?",
      "choices": [
        "A fit where the shaft is always bigger than the hole, so the parts must be pressed together.",
        "A fit that may be clearance or interference, depending on the actual sizes.",
        "A fixed starting point or surface that dimensions are measured from.",
        "A tolerance that allows variation both ways, such as ± 0.2 mm."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Bilateral tolerance means: A tolerance that allows variation both ways, such as ± 0.2 mm.. (a) is the definition of Interference fit, not of Bilateral tolerance. (b) is the definition of Transition fit, not of Bilateral tolerance. (c) is the definition of Datum, not of Bilateral tolerance."
    },
    {
      "q": "A dimension reads 50.0 ± 0.2 mm. What sizes are acceptable?",
      "choices": [
        "49.8 mm to 50.2 mm",
        "49.0 mm to 51.0 mm",
        "50.0 mm exactly, nothing else",
        "48.0 mm to 52.0 mm"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 50.0 − 0.2 = 49.8 and 50.0 + 0.2 = 50.2. (b) uses ±1.0. (c) ignores the tolerance. (d) uses ±2.0."
    },
    {
      "q": "Why should a dimension never appear twice on a drawing?",
      "choices": [
        "Because it wastes ink.",
        "Because the two copies can disagree after a revision, and nobody knows which is right.",
        "Because dimensions are only for the front view.",
        "Because two dimensions are harder to read."
      ],
      "answer": 1,
      "explanation": "Correct: (b). A repeated dimension can be updated in one place and not the other. (a) is trivial. (c) is wrong: dimensions go on several views. (d) is not the reason."
    },
    {
      "q": "A hole is Ø10.0 ± 0.1 mm. What is the largest hole allowed?",
      "choices": [
        "9.9 mm",
        "10.0 mm",
        "10.1 mm",
        "10.2 mm"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 10.0 + 0.1 = 10.1 mm. (a) is the smallest. (b) is the nominal. (d) uses ±0.2."
    },
    {
      "q": "Three parts of 20.0 ± 0.1 mm are stacked. What is the worst-case total?",
      "choices": [
        "60.0 ± 0.1 mm",
        "60.0 ± 0.3 mm",
        "60.0 ± 0.9 mm",
        "20.0 ± 0.3 mm"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Tolerances add: 0.1 + 0.1 + 0.1 = 0.3 mm. (a) forgets to add them. (c) multiplies by 9. (d) forgets to add the nominal sizes."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Dimensioning Rules & Tolerances: Quick Reference</h3>\n<p><strong>Core idea:</strong> Place dimensions on a drawing correctly.</p>\n<p><strong>Key terms:</strong> Dimension · Extension line · Dimension line · Nominal size · Tolerance · Limit · Bilateral tolerance · Clearance fit.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Place dimensions on a drawing correctly.</li>\n<li>Read a limit dimension such as 50.0 ± 0.2 mm.</li>\n<li>Work out the maximum and minimum size from a tolerance.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module’s main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
