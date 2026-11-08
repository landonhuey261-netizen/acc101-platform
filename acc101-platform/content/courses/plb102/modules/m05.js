// plb102 - Module 5: The Pythagorean Theorem & Offsets
module.exports = {
  "number": 5,
  "slug": "pythagorean-theorem-offsets",
  "title": "The Pythagorean Theorem & Offsets",
  "estTime": "3–4 hours",
  "objectives": [
    "State the Pythagorean theorem and identify the hypotenuse of a right triangle.",
    "Solve for any side of a right triangle using a² + b² = c².",
    "Explain what an offset is and why a pipe run needs one.",
    "Calculate the travel of a simple 45-degree offset using the 1.414 multiplier.",
    "Apply the 45-degree offset multipliers: 1.414 for travel, and equal rise and run."
  ],
  "sections": [
    {
      "heading": "The Pythagorean Theorem",
      "html": "<p>A <strong>right triangle</strong> has one 90-degree angle. Its longest side, opposite the right angle, is the <strong>hypotenuse</strong>. The <strong>Pythagorean theorem</strong> says the squares of the two shorter sides add up to the square of the hypotenuse: <strong>a² + b² = c²</strong>. If you know any two sides, you can find the third — and that is the whole of offset math.</p>\n<p><strong>Worked example:</strong> A right triangle has legs of 3 inches and 4 inches. The hypotenuse is √(3² + 4²) = √(9 + 16) = √25 = 5 inches — the famous 3-4-5 triangle, which is how carpenters and plumbers check square corners on site. <strong>Worked example:</strong> A triangle has a hypotenuse of 13 inches and one leg of 5 inches. The other leg is √(13² − 5²) = √(169 − 25) = √144 = 12 inches.</p>\n<p>Memorize the triangles that recur on the job: 3-4-5, 5-12-13, and 8-15-17. When your numbers land on one of them, the answer is exact and you know it at a glance.</p>\n<div class=\"callout\"><strong>Key idea:</strong> a² + b² = c². Know any two sides of a right triangle and the third is a square root away.</div>"
    },
    {
      "heading": "What an Offset Is",
      "html": "<p>An <strong>offset</strong> is a change of direction in a pipe run: the pipe must move sideways, up, or down to get around an obstacle or to meet a fixture that is not in line with the main. Two fittings — usually two 45-degree elbows — and a diagonal piece of pipe between them make the move. The diagonal piece is called the <strong>travel</strong>.</p>\n<p>Every offset is a right triangle. The <strong>offset</strong> itself (the sideways distance the pipe must move) is one leg, the <strong>run</strong> (the distance along the original direction) is the other leg, and the <strong>travel</strong> (the diagonal pipe) is the hypotenuse. Measure the two legs and the travel follows from the theorem — or from the multipliers, which are the theorem pre-solved for common angles.</p>\n<p>The fittings add their own length: each fitting consumes some of the travel (its takeoff), so the pipe piece you cut is the travel minus the takeoffs of both fittings. Module 6 works the full calculation, including the rolling offset; this module builds the triangle.</p>"
    },
    {
      "heading": "The 45-Degree Offset: The 1.414 Multiplier",
      "html": "<p>A 45-degree offset is a right triangle with two equal angles (45-45-90), so its two legs are equal: the offset and the run are the same number. The travel is the hypotenuse: travel = offset × √2, and √2 is 1.414. That is the <strong>1.414 multiplier</strong>: <strong>travel = offset × 1.414</strong>.</p>\n<p><strong>Worked example:</strong> A pipe must offset 12 inches at 45 degrees. Travel = 12 × 1.414 = 16.97 inches, about 16 15/16 inches. The run is also 12 inches — the same as the offset, because the triangle's legs are equal. <strong>Worked example:</strong> An offset of 6 inches: travel = 6 × 1.414 = 8.48 inches, about 8 1/2 inches.</p>\n<p>Other angles have their own multipliers, found the same way from the triangle: 22 1/2 degrees uses 2.613, 60 degrees uses 1.155. The 45-degree multiplier is the one you will use most, and the one to know by heart.</p>\n<div class=\"callout\"><strong>Key idea:</strong> 45-degree offset: travel = offset × 1.414, and run = offset. The two legs are equal because the two angles are equal.</div>"
    },
    {
      "heading": "Checking Square with 3-4-5",
      "html": "<p>The 3-4-5 triangle is also the jobsite's square-check. To check that a corner is square, measure 3 feet along one wall and 4 feet along the other, and the diagonal between the marks should be exactly 5 feet. If it is not 5 feet, the corner is not square — and a pipe run laid out from a corner that is not square will be out of line at the far end.</p>\n<p>The same check works in inches (3, 4, and 5 inches) or in any multiple: 6-8-10, 9-12-15, 12-16-20. The multiples are useful on large layouts where 3 and 4 feet are too small to show the error. A layout error of 1/4 inch at the corner becomes inches of error at the end of a long run — check square early, and check it with a triangle, not by eye.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Pythagorean theorem: a² + b² = c². The hypotenuse is the side opposite the right angle.</li>\n<li>An offset is a right triangle: offset and run are the legs, travel is the hypotenuse.</li>\n<li>45-degree offset: travel = offset × 1.414; run = offset.</li>\n<li>Other multipliers: 22 1/2° = 2.613, 60° = 1.155.</li>\n<li>3-4-5 (and its multiples) checks square on site.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Using the offset itself as the travel. The travel is the diagonal — longer than the offset. For 45 degrees, it is 1.414 times the offset, not equal to it.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Forgetting to subtract fitting takeoffs from the travel. The travel is center-to-center; the cut piece is the travel minus both fittings' takeoffs.</div>\n<p><strong>Ready-to-Work link:</strong> If you can find the travel for a 12-inch 45-degree offset and check a corner with 3-4-5, you have this module. Module 6 puts it together: simple and rolling offsets.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Right triangle",
      "def": "A triangle with one 90-degree angle."
    },
    {
      "term": "Hypotenuse",
      "def": "The longest side of a right triangle, opposite the 90-degree angle."
    },
    {
      "term": "Pythagorean theorem",
      "def": "a² + b² = c² — the squares of the two shorter sides of a right triangle add up to the square of the hypotenuse."
    },
    {
      "term": "Offset",
      "def": "The sideways (or vertical) distance a pipe run must move — one leg of the offset triangle."
    },
    {
      "term": "Run",
      "def": "The distance along the original direction of a pipe run — the other leg of the offset triangle."
    },
    {
      "term": "Travel",
      "def": "The diagonal piece of pipe between the two offset fittings — the hypotenuse of the offset triangle."
    },
    {
      "term": "45-degree offset",
      "def": "An offset made with two 45-degree fittings; its legs are equal and its travel is offset × 1.414."
    },
    {
      "term": "Multiplier",
      "def": "A number that converts an offset into a travel for a given angle: 1.414 for 45°, 2.613 for 22 1/2°, 1.155 for 60°."
    },
    {
      "term": "3-4-5 triangle",
      "def": "A right triangle with sides 3, 4, and 5 — used on site to check that a corner is square."
    },
    {
      "term": "Fitting takeoff",
      "def": "The amount a fitting consumes of a pipe run — subtracted from the travel to get the cut length."
    },
    {
      "term": "Center-to-center",
      "def": "The distance between the centers of two fittings — the travel is measured center-to-center."
    },
    {
      "term": "Elbow",
      "def": "A fitting that changes a pipe's direction, commonly 90, 45, or 22 1/2 degrees."
    },
    {
      "term": "Square",
      "def": "A corner at exactly 90 degrees — checked on site with a 3-4-5 triangle."
    },
    {
      "term": "Square root",
      "def": "The number that, multiplied by itself, gives a given number: √25 = 5."
    }
  ],
  "video": {
    "title": "1.414 Explained",
    "embedUrl": "https://www.youtube.com/embed/58YdnxYF23E",
    "note": "BG's Plumb it Right Academy explains where the 1.414 multiplier comes from — the 45-45-90 triangle — and why it is not a magic number.",
    "more": [
      {
        "title": "Pipe Trig",
        "url": "https://www.youtube.com/watch?v=bD5bMRqrJ4o"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A right triangle has legs of 3 inches and 4 inches. What is the hypotenuse? Show the work.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: c² = 3² + 4² = 9 + 16 = 25. Step 2: c = √25 = 5 inches. Step 3: This is the 3-4-5 triangle.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A right triangle has a hypotenuse of 13 inches and one leg of 5 inches. Find the other leg.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: a² = c² − b² = 13² − 5² = 169 − 25 = 144. Step 2: a = √144 = 12 inches. Step 3: This is the 5-12-13 triangle.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A pipe must offset 12 inches at 45 degrees. What is the travel, and what is the run?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Travel = offset × 1.414 = 12 × 1.414 = 16.97 inches, about 16 15/16 inches. Step 2: At 45 degrees the legs are equal, so the run is also 12 inches. Step 3: The cut piece will be the travel minus the two fittings' takeoffs.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A pipe must offset 6 inches at 45 degrees. What is the travel?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Travel = 6 × 1.414 = 8.48 inches. Step 2: Rounded to the nearest sixteenth, that is about 8 1/2 inches. Step 3: The run is 6 inches, equal to the offset.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> You measure 3 feet along one wall and 4 feet along the other, and the diagonal is 5 feet 2 inches. Is the corner square? What does the error mean?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: A square corner gives exactly 5 feet on the diagonal. Step 2: 5 feet 2 inches is 2 inches too long, so the corner is not square — it is open (more than 90 degrees). Step 3: A pipe run laid out from this corner will drift out of line; square the layout before running pipe.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> An offset of 10 inches at 45 degrees has fittings that take up 1 1/2 inches each. What length of pipe do you cut?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Travel = 10 × 1.414 = 14.14 inches. Step 2: Two fittings take 2 × 1 1/2 = 3 inches. Step 3: Cut length = 14.14 − 3 = 11.14 inches, about 11 1/8 inches.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The Pythagorean theorem states:",
      "choices": [
        "a + b = c",
        "a² + b² = c²",
        "a × b = c",
        "a² − b² = c²"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The squares of the legs add up to the square of the hypotenuse. (a) Adding the sides is not the theorem. (c) Multiplying the legs gives an area, not the hypotenuse. (d) Subtraction solves for a leg, but it is not the theorem's statement."
    },
    {
      "q": "In a right triangle, the hypotenuse is:",
      "choices": [
        "The shortest side",
        "The side opposite the right angle — the longest side",
        "Either of the legs",
        "The side next to the right angle"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The hypotenuse is opposite the 90-degree angle and is the longest side. (a) The shortest side is a leg. (c) The legs are the sides that form the right angle. (d) Both legs are next to the right angle."
    },
    {
      "q": "A 3-4-5 triangle has a hypotenuse of:",
      "choices": [
        "7",
        "5",
        "12",
        "9"
      ],
      "answer": 1,
      "explanation": "Correct: (b). √(9 + 16) = √25 = 5. (a) 7 is 3 + 4, not the hypotenuse. (c) 12 is a leg of the 5-12-13 triangle. (d) 9 is 3²."
    },
    {
      "q": "A pipe must offset 12 inches at 45 degrees. The travel is about:",
      "choices": [
        "12 inches",
        "16.97 inches",
        "24 inches",
        "8.48 inches"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Travel = 12 × 1.414 = 16.97 inches. (a) That is the offset itself, not the travel. (c) That doubles the offset. (d) That is the travel for a 6-inch offset."
    },
    {
      "q": "At 45 degrees, the run of an offset equals:",
      "choices": [
        "The travel",
        "The offset",
        "Twice the offset",
        "Half the offset"
      ],
      "answer": 1,
      "explanation": "Correct: (b). In a 45-45-90 triangle the legs are equal, so run = offset. (a) The travel is longer — offset × 1.414. (c) and (d) are not the 45-degree relationship."
    },
    {
      "q": "The multiplier for a 45-degree offset is:",
      "choices": [
        "2.613",
        "1.155",
        "1.414",
        "3.1416"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 1.414 is √2, the 45-degree multiplier. (a) 2.613 is the 22 1/2-degree multiplier. (b) 1.155 is the 60-degree multiplier. (d) 3.1416 is pi."
    },
    {
      "q": "A 5-12-13 triangle's missing leg, given a hypotenuse of 13 and one leg of 5, is:",
      "choices": [
        "8",
        "12",
        "10",
        "7"
      ],
      "answer": 1,
      "explanation": "Correct: (b). √(169 − 25) = √144 = 12. (a) 8 is not the root of 144. (c) 10 would give 125, not 169. (d) 7 would give 74, not 169."
    },
    {
      "q": "The cut piece of pipe in an offset is the travel:",
      "choices": [
        "Plus both fittings' takeoffs",
        "Minus both fittings' takeoffs",
        "With no adjustment",
        "Times 1.414 again"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Each fitting consumes part of the travel, so subtract both takeoffs to get the cut length. (a) Adding would make the piece too long. (c) No adjustment leaves the pipe overlapping the fittings. (d) The multiplier is applied once, to the offset."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — The Pythagorean Theorem &amp; Offsets: Quick Reference</h3>\n<p><strong>Pythagorean theorem:</strong> a² + b² = c². Hypotenuse = side opposite the right angle.</p>\n<p><strong>Triangles to know:</strong> 3-4-5 · 5-12-13 · 8-15-17. Use 3-4-5 to check square on site.</p>\n<p><strong>Offset triangle:</strong> Offset and run are the legs; travel is the hypotenuse.</p>\n<p><strong>45° offset:</strong> Travel = offset × 1.414; run = offset.</p>\n<p><strong>Other multipliers:</strong> 22 1/2° = 2.613 · 60° = 1.155.</p>\n<p><strong>Cut length:</strong> Travel minus both fittings' takeoffs.</p>\n<p><strong>Self-check:</strong> Find the travel for a 12-inch 45° offset (16.97 in) and check a corner with 3-4-5. If both work, you have this module.</p>\n"
};
