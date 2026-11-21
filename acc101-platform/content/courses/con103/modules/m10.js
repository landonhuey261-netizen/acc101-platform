// con103 - Module 10: Scale: The Architect's Scale & Measuring Drawings
module.exports = {
  "number": 10,
  "slug": "scale-architects-scale-measuring-drawings",
  "title": "Scale: The Architect's Scale & Measuring Drawings",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what scale means and why drawings are drawn to scale.",
    "Describe the common scales for plans, details, and site plans.",
    "Explain how to use an architect's scale to measure a drawing.",
    "Describe how to convert a scaled measurement to a real dimension.",
    "Explain when you must not measure a drawing (NTS, and the written dimension rule)."
  ],
  "sections": [
    {
      "heading": "What Scale Means",
      "html": "<p><strong>Scale</strong> is the ratio between a drawing and the real building: a drawing at 1/4 inch = 1 foot means every 1/4 inch on the paper stands for 1 foot in the real building. A 40-foot building is 10 inches long on a 1/4-inch-scale drawing (40 feet x 1/4 inch per foot = 10 inches). Scale lets a whole building fit on a sheet of paper while keeping every part in the right proportion \u2014 and it lets you measure the drawing to find a size that is not written down.</p>\n<p>The scale is always printed in the title block and under each drawing. A plan is usually drawn at 1/4 inch = 1 foot (1:48) or 1/8 inch = 1 foot (1:96); a detail is drawn at 1 1/2 inches = 1 foot (1:8) or 3 inches = 1 foot (1:4); a site plan is drawn at 1 inch = 20 feet or 1 inch = 30 feet. The scale is part of the drawing's identity: a plan at 1/4 inch = 1 foot and the same plan at 1/8 inch = 1 foot are two different drawings, and measuring one with the other's scale gives a size that is wrong by a factor of two.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Scale is the ratio between the drawing and the real building. Always check the scale before you measure anything \u2014 and never measure a drawing marked NTS.</div>"
    },
    {
      "heading": "The Architect's Scale",
      "html": "<p>An <strong>architect's scale</strong> is a triangular ruler with a different scale on each edge \u2014 usually 1/16, 1/8, 1/4, 1/2, 3/4, 1, 1 1/2, and 3 inches = 1 foot. Each edge is marked in feet and inches, so you lay the edge that matches the drawing's scale along a line and read the real dimension directly \u2014 no math. To measure a wall on a 1/4-inch-scale plan, use the 1/4 edge: line up the zero with one end of the wall, read the mark at the other end, and that is the wall's length in feet and inches.</p>\n<p>Two habits make the scale reliable. First, always check the scale printed under the drawing before you pick an edge \u2014 the title block gives the scale, and the drawing's own scale note confirms it. Second, always measure twice: once with the scale, and once by checking the written dimension if there is one. The written dimension is the authority; the scale is a check. If the scale measurement and the written dimension disagree, the written dimension wins \u2014 and the disagreement is worth an RFI, because it may mean the drawing was printed at the wrong size.</p>\n<p>A printed drawing can be the wrong size. A PDF printed at \"fit to page\" instead of 100% shrinks the drawing, and every scale measurement on it is wrong. That is why the written dimension always wins, and why a drawing that is marked NTS (not to scale) must never be measured at all. If a drawing has no scale bar and no written dimension, the size is unknown \u2014 and unknown is an RFI.</p>"
    },
    {
      "heading": "Converting Scaled Measurements to Real Dimensions",
      "html": "<p>When there is no architect's scale handy, convert with arithmetic. At 1/4 inch = 1 foot, every inch on the paper is 4 feet in the building (12 inches per foot divided by 1/4 inch per foot = 4 feet per inch). A line that measures 3 inches on the paper is 3 x 4 = 12 feet. At 1/8 inch = 1 foot, every inch on the paper is 8 feet: a 3-inch line is 24 feet. At 1/2 inch = 1 foot, every inch is 2 feet: a 3-inch line is 6 feet. The conversion is always the same: real dimension = paper measurement x (12 / scale in inches per foot).</p>\n<p>For a site plan at 1 inch = 20 feet, the conversion is simpler: every inch on the paper is 20 feet. A property line that measures 5 inches on the paper is 5 x 20 = 100 feet. For an engineer's scale (used on civil drawings), the scale is given as a ratio \u2014 1:20, 1:50 \u2014 and the same multiplication applies: at 1:20, one inch on the paper is 20 inches in the real world.</p>\n<p>Practice the conversions until they are automatic, because the field is full of moments when the scale is in the truck and the drawing is in your hand. A builder who can convert 1/4 inch = 1 foot in their head \u2014 an inch is 4 feet, a half inch is 2 feet, a quarter inch is 1 foot \u2014 can measure any plan without a tool.</p>"
    },
    {
      "heading": "When NOT to Measure a Drawing",
      "html": "<p>There are three times you must not measure a drawing. First, when it is marked <strong>NTS</strong> (not to scale): the drawing is a diagram, not a scaled representation, and any measurement from it is meaningless. Second, when the drawing has a <strong>written dimension</strong> that covers the size you need: the written dimension is the authority, and measuring is a check, not a replacement. Third, when the drawing was <strong>printed at the wrong size</strong>: a PDF printed at \"fit to page\" shrinks the drawing, and every scale measurement is wrong by the same factor.</p>\n<p>The rule is written into the general notes of almost every set: \"do not scale drawings \u2014 use written dimensions.\" That rule exists because a scaled measurement is only as accurate as the print, and a print can be off by a few percent without anyone noticing. A few percent on a 40-foot building is more than a foot \u2014 enough to order the wrong beam, frame the wrong opening, or pour the wrong foundation.</p>\n<p>When a size is not written and the drawing is to scale, measuring with an architect's scale is the right move \u2014 and it is the move this course teaches. When a size is not written and the drawing is NTS, the size is unknown, and the answer is an RFI. Knowing the difference is the skill.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Scale: the ratio between the drawing and the real building. Plans at 1/4\" = 1'-0\" or 1/8\" = 1'-0\"; details at 1 1/2\" = 1'-0\" or 3\" = 1'-0\"; site plans at 1\" = 20' or 1\" = 30'.</li>\n<li>Architect's scale: a triangular ruler with a different scale on each edge. Lay the matching edge along the line and read the real dimension directly.</li>\n<li>Conversion: at 1/4\" = 1'-0\", one inch on paper is 4 feet; at 1/8\" = 1'-0\", one inch is 8 feet; at 1\" = 20', one inch is 20 feet.</li>\n<li>Written dimension always wins over a scaled measurement. Never measure a drawing marked NTS.</li>\n<li>A PDF printed at \"fit to page\" shrinks the drawing and makes every scale measurement wrong. Check the scale before you measure.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Measuring with the wrong edge of the scale. Check the scale printed under the drawing first \u2014 1/4\" and 1/8\" are a factor of two apart.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Measuring a drawing that was printed at \"fit to page\". The written dimension is the authority; the scale is a check.</div>\n<p><strong>Ready-to-Work link:</strong> If you can read a scale, measure a wall with an architect's scale, and convert 1/4\" = 1'-0\" in your head, you have this module. Module 11 covers dimensions, tolerances, and takeoff.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Scale",
      "def": "The ratio between a drawing and the real building, such as 1/4 inch = 1 foot."
    },
    {
      "term": "Architect's scale",
      "def": "A triangular ruler with a different scale on each edge, marked in feet and inches."
    },
    {
      "term": "Engineer's scale",
      "def": "A ruler for civil drawings, with scales given as ratios such as 1:20."
    },
    {
      "term": "NTS",
      "def": "Not to scale \u2014 do not measure this drawing."
    },
    {
      "term": "Scale bar",
      "def": "A printed bar on a drawing showing a known length, used to check the print size."
    },
    {
      "term": "Fit to page",
      "def": "A print setting that shrinks a drawing to fit the paper, making scale measurements wrong."
    },
    {
      "term": "1/4 inch = 1 foot",
      "def": "The most common plan scale; one inch on paper is 4 feet in the building."
    },
    {
      "term": "1/8 inch = 1 foot",
      "def": "A smaller plan scale for large buildings; one inch on paper is 8 feet."
    },
    {
      "term": "Written dimension",
      "def": "A dimension printed as numbers on a drawing \u2014 the authority over any scaled measurement."
    },
    {
      "term": "Datum",
      "def": "The reference level from which heights are measured."
    },
    {
      "term": "Ratio",
      "def": "A comparison of two numbers, such as 1:48 for a 1/4-inch scale."
    },
    {
      "term": "Proportion",
      "def": "The relative size of parts to each other and to the whole."
    },
    {
      "term": "Detail scale",
      "def": "A large scale for details, such as 1 1/2 inches = 1 foot or 3 inches = 1 foot."
    },
    {
      "term": "Site plan scale",
      "def": "A small scale for site plans, such as 1 inch = 20 feet."
    },
    {
      "term": "Conversion",
      "def": "Turning a measurement on paper into a real dimension using the scale."
    }
  ],
  "video": {
    "title": "How to Read an Architect's Scale",
    "embedUrl": "https://www.youtube.com/embed/PrbjWgyZlFc",
    "note": "A clear demonstration of the architect's scale: which edge to use for which drawing scale, how to line up the zero, and how to read feet and inches directly. Watch it with a scale in your hand if you have one \u2014 or a ruler, to see how the edges are marked.",
    "more": [
      {
        "title": "How to Measure Fitting Takeoff | Advanced Plumbing",
        "url": "https://www.youtube.com/watch?v=FPPZKm7c6xw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A plan is drawn at 1/4 inch = 1 foot. A wall measures 2 1/2 inches on the paper. How long is the wall in the real building?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: At 1/4\" = 1'-0\", one inch on paper is 4 feet. Step 2: 2 1/2 inches x 4 feet per inch = 10 feet. Step 3: The wall is 10 feet long.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A plan is drawn at 1/8 inch = 1 foot. A room measures 3 inches by 2 inches on the paper. What are the room's real dimensions?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: At 1/8\" = 1'-0\", one inch on paper is 8 feet. Step 2: 3 inches x 8 = 24 feet; 2 inches x 8 = 16 feet. Step 3: The room is 24 feet by 16 feet.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A site plan is drawn at 1 inch = 20 feet. A property line measures 5 1/2 inches on the paper. How long is the property line?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: At 1\" = 20', one inch on paper is 20 feet. Step 2: 5 1/2 inches x 20 feet = 110 feet. Step 3: The property line is 110 feet long.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A detail is drawn at 3 inches = 1 foot. A flashing strip measures 1 inch on the paper. How long is it in real life?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: At 3\" = 1'-0\", one inch on paper is 4 inches in real life (12 inches per foot divided by 3 = 4 inches per inch). Step 2: 1 inch x 4 inches = 4 inches. Step 3: The flashing strip is 4 inches long.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A drawing is marked NTS. What does that mean, and what must you not do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: NTS means not to scale. Step 2: You must not measure the drawing with a ruler or a scale to find a size. Step 3: Use the written dimensions instead \u2014 or send an RFI if the size is not written.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A wall has a written dimension of 12'-0\", but your scale measurement reads 11'-6\". Which one do you trust, and what do you do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Trust the written dimension \u2014 it is the authority. Step 2: The disagreement may mean the drawing was printed at the wrong size. Step 3: Build to 12'-0\" and send an RFI noting the discrepancy, so the designer can confirm.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A plan drawn at 1/4 inch = 1 foot means:",
      "choices": [
        "Every 1/4 inch on the paper is 1 foot in the building",
        "Every foot on the paper is 1/4 inch in the building",
        "The building is 1/4 the size of the paper",
        "The plan is not to scale"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 1/4 inch on paper stands for 1 foot in the building. (b) That reverses the ratio. (c) The building is 48 times the paper, not 1/4. (d) A scale is given, so the plan is to scale."
    },
    {
      "q": "At 1/4 inch = 1 foot, one inch on the paper is:",
      "choices": [
        "1 foot",
        "2 feet",
        "4 feet",
        "12 feet"
      ],
      "answer": 2,
      "explanation": "Correct: (c). One inch is four quarters, so one inch is 4 feet. (a) That is one quarter inch. (b) That is one half inch. (d) 12 feet is one foot at 1 inch = 1 foot."
    },
    {
      "q": "A wall that measures 2 1/2 inches on a 1/4-inch-scale plan is:",
      "choices": [
        "5 feet",
        "10 feet",
        "2 feet 6 inches",
        "40 feet"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 2 1/2 inches x 4 feet per inch = 10 feet. (a) 5 feet is 1 1/4 inches. (c) 2'-6\" is the paper measurement, not the real size. (d) 40 feet is 10 inches on the paper."
    },
    {
      "q": "At 1/8 inch = 1 foot, a 3-inch line on the paper is:",
      "choices": [
        "3 feet",
        "12 feet",
        "24 feet",
        "6 feet"
      ],
      "answer": 2,
      "explanation": "Correct: (c). One inch is 8 feet, so 3 inches is 24 feet. (a) 3 feet is the paper measurement. (b) 12 feet is the 1/4-inch-scale answer. (d) 6 feet is 3/4 inch on the paper."
    },
    {
      "q": "An architect's scale is:",
      "choices": [
        "A triangular ruler with a different scale on each edge",
        "A regular ruler with inches only",
        "A computer program",
        "A type of drawing"
      ],
      "answer": 0,
      "explanation": "Correct: (a). An architect's scale is a triangular ruler with several scales. (b) A regular ruler has only inches. (c) It is a physical tool, not a program. (d) It is a tool for reading drawings, not a drawing."
    },
    {
      "q": "A drawing marked NTS means:",
      "choices": [
        "It is drawn to scale",
        "It is not to scale \u2014 do not measure it",
        "It has no title block",
        "It is the newest revision"
      ],
      "answer": 1,
      "explanation": "Correct: (b). NTS means not to scale. (a) That is the opposite. (c) Every sheet has a title block. (d) Revision is shown by the revision number."
    },
    {
      "q": "If a written dimension and a scaled measurement disagree, you trust the:",
      "choices": [
        "Scaled measurement",
        "Written dimension",
        "Larger of the two",
        "Smaller of the two"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The written dimension is the authority. (a) A scaled measurement can be wrong if the print is the wrong size. (c) and (d) Picking the larger or smaller is guessing."
    },
    {
      "q": "A PDF printed at \"fit to page\" will:",
      "choices": [
        "Make the drawing larger",
        "Shrink the drawing and make every scale measurement wrong",
        "Change the written dimensions",
        "Add a scale bar"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Fit to page shrinks the drawing, so scale measurements are wrong. (a) It shrinks, not enlarges. (c) Written dimensions are text and do not change. (d) It does not add anything."
    }
  ],
  "studyGuide": "\n<h3>Module 10 \u2014 Scale: Quick Reference</h3>\n<p><strong>Core idea:</strong> Scale is the ratio between the drawing and the real building. Always check the scale before you measure \u2014 and never measure a drawing marked NTS.</p>\n<p><strong>Common scales:</strong> Plans 1/4\" = 1'-0\" or 1/8\" = 1'-0\" \u00b7 details 1 1/2\" = 1'-0\" or 3\" = 1'-0\" \u00b7 site plans 1\" = 20' or 1\" = 30'.</p>\n<p><strong>Conversion:</strong> At 1/4\" = 1'-0\", 1 in on paper = 4 ft. At 1/8\" = 1'-0\", 1 in = 8 ft. At 1\" = 20', 1 in = 20 ft.</p>\n<p><strong>Architect's scale:</strong> Triangular ruler, one scale per edge. Lay the matching edge along the line and read feet and inches directly.</p>\n<p><strong>Rule:</strong> The written dimension always wins over a scaled measurement. A PDF printed at \"fit to page\" shrinks the drawing.</p>\n<p><strong>Self-check:</strong> Convert 2 1/2 in at 1/4\" scale to 10 ft, and explain why you never measure an NTS drawing. If you can, you have this module.</p>\n"
};
