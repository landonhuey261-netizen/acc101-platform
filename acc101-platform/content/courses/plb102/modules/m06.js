// plb102 - Module 6: Simple & Rolling Offsets
module.exports = {
  "number": 6,
  "slug": "simple-rolling-offsets",
  "title": "Simple & Rolling Offsets",
  "estTime": "3–4 hours",
  "objectives": [
    "Calculate a simple offset: travel, run, and cut length with fitting takeoffs.",
    "Explain what makes an offset a rolling offset and how its triangle differs.",
    "Calculate a rolling offset's true offset using the Pythagorean theorem on rise and roll.",
    "Calculate the rolling offset's travel with the 1.414 multiplier and the final cut length.",
    "Work a complete rolling-offset problem from measurements to cut length, with a check."
  ],
  "sections": [
    {
      "heading": "The Simple Offset, Start to Finish",
      "html": "<p>A <strong>simple offset</strong> moves a pipe in one plane — sideways, or up and down, but not both at once. The steps are always the same: <strong>(1)</strong> measure the offset (the distance the pipe must move); <strong>(2)</strong> find the travel with the multiplier for the fitting angle; <strong>(3)</strong> subtract the takeoffs of both fittings; <strong>(4)</strong> cut the pipe to the result; <strong>(5)</strong> check the run.</p>\n<p><strong>Worked example — 45-degree simple offset:</strong> A pipe must offset 8 inches. Two 45-degree fittings, each with a takeoff of 1 1/4 inches. Step 1: travel = 8 × 1.414 = 11.31 inches. Step 2: two takeoffs = 2 × 1.25 = 2.5 inches. Step 3: cut length = 11.31 − 2.5 = 8.81 inches, about 8 13/16 inches. Step 4: the run is 8 inches, equal to the offset at 45 degrees. Check: the cut piece plus the two takeoffs (8.81 + 2.5 = 11.31) equals the travel — the numbers close.</p>\n<p>The check is the point. If cut length + takeoffs does not equal travel, something is wrong — find it before the pipe is cut.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Simple offset, five steps: measure the offset → travel by the multiplier → subtract both takeoffs → cut → check that cut + takeoffs = travel.</div>"
    },
    {
      "heading": "The Rolling Offset: Two Moves at Once",
      "html": "<p>A <strong>rolling offset</strong> moves a pipe in two planes at once — sideways <em>and</em> up or down. The pipe rolls around an obstacle instead of stepping around it in one plane. The two legs you measure are the <strong>rise</strong> (the vertical move) and the <strong>roll</strong> (the horizontal sideways move). The <strong>true offset</strong> is the diagonal between them — and it is a hypotenuse: true offset = √(rise² + roll²).</p>\n<p><strong>Worked example:</strong> A pipe must rise 6 inches and roll 8 inches. True offset = √(6² + 8²) = √(36 + 64) = √100 = 10 inches. That 6-8-10 triangle is the 3-4-5 triangle doubled, and the answer is exact. If the rise and roll do not land on a known triangle, the square root is still the method — a calculator does the work.</p>\n<p>Once you have the true offset, the rest is the same as a simple offset: for 45-degree fittings, travel = true offset × 1.414, then subtract the two fittings' takeoffs for the cut length.</p>"
    },
    {
      "heading": "The Rolling Offset, Worked Completely",
      "html": "<p><strong>Full worked example:</strong> A pipe must rise 7 inches and roll 12 inches, using two 45-degree fittings with takeoffs of 2 1/2 inches each.</p>\n<p>Step 1 — true offset: √(7² + 12²) = √(49 + 144) = √193 = 13.89 inches, about 13 7/8 inches. Step 2 — travel: 13.89 × 1.414 = 19.64 inches, about 19 5/8 inches. Step 3 — takeoffs: 2 × 2.5 = 5 inches. Step 4 — cut length: 19.64 − 5 = 14.64 inches, about 14 5/8 inches. Step 5 — check: cut + takeoffs = 14.64 + 5 = 19.64, which equals the travel. The numbers close.</p>\n<p>Notice what the rolling offset costs: the true offset (13.89) is longer than either the rise (7) or the roll (12) alone, and the travel (19.64) is longer still. Rolling around an obstacle takes more pipe than stepping around it in one plane — that is the price of the second direction, and it is why the true offset must be calculated, not guessed.</p>"
    },
    {
      "heading": "Fitting Angles and Multipliers",
      "html": "<p>Offsets are not always 45 degrees. The multiplier table for the common fitting angles, all for the travel:</p>\n<ul>\n<li><strong>22 1/2 degrees:</strong> travel = offset × 2.613; run = offset × 2.414.</li>\n<li><strong>30 degrees:</strong> travel = offset × 2.000; run = offset × 1.732.</li>\n<li><strong>45 degrees:</strong> travel = offset × 1.414; run = offset × 1.000.</li>\n<li><strong>60 degrees:</strong> travel = offset × 1.155; run = offset × 0.577.</li>\n</ul>\n<p>The pattern: the shallower the angle, the longer the travel and the longer the run. A 22 1/2-degree offset is a long, gentle move; a 60-degree offset is short and steep. On the job, 45 degrees is the workhorse — the other angles appear when the space demands them, and the table (or a calculator) supplies the multiplier. Keep a multiplier card in your notebook; even experienced fitters check it.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The multiplier depends on the angle. 45° is 1.414; shallower angles give longer travels. Check the angle before you multiply.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Simple offset: travel = offset × multiplier; cut = travel − both takeoffs; check: cut + takeoffs = travel.</li>\n<li>Rolling offset: true offset = √(rise² + roll²); then travel = true offset × multiplier; then subtract takeoffs.</li>\n<li>Multipliers: 22 1/2° = 2.613, 30° = 2.000, 45° = 1.414, 60° = 1.155.</li>\n<li>Rolling costs more pipe than a simple offset — the true offset is longer than either leg.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Using the rise or the roll as the offset in a rolling offset. The true offset is the diagonal — √(rise² + roll²) — and it is always longer than either leg.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Multiplying by 1.414 for a fitting angle that is not 45 degrees. The multiplier belongs to the angle — check it first.</div>\n<p><strong>Ready-to-Work link:</strong> If you can work a rolling offset from rise and roll to cut length with the check, you have this module — and the lab for this course practices exactly that calculation. Module 7 turns from numbers to drawings.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Simple offset",
      "def": "An offset that moves a pipe in one plane — sideways, or up and down, but not both."
    },
    {
      "term": "Rolling offset",
      "def": "An offset that moves a pipe in two planes at once — sideways and up or down."
    },
    {
      "term": "Rise",
      "def": "In a rolling offset, the vertical distance the pipe must move."
    },
    {
      "term": "Roll",
      "def": "In a rolling offset, the horizontal sideways distance the pipe must move."
    },
    {
      "term": "True offset",
      "def": "In a rolling offset, the diagonal distance between the rise and the roll: √(rise² + roll²)."
    },
    {
      "term": "Travel",
      "def": "The diagonal piece of pipe between the two offset fittings — the hypotenuse."
    },
    {
      "term": "Run",
      "def": "The distance along the original direction of the pipe run."
    },
    {
      "term": "Multiplier",
      "def": "A number that converts an offset into a travel for a given fitting angle."
    },
    {
      "term": "Fitting takeoff",
      "def": "The amount a fitting consumes of a pipe run — subtracted from the travel to get the cut length."
    },
    {
      "term": "45-degree fitting",
      "def": "An elbow that changes a pipe's direction by 45 degrees; the workhorse of offsets."
    },
    {
      "term": "22 1/2-degree fitting",
      "def": "An elbow that changes a pipe's direction by 22 1/2 degrees, for long gentle offsets."
    },
    {
      "term": "Cut length",
      "def": "The length of pipe to cut: travel minus both fittings' takeoffs."
    },
    {
      "term": "Check",
      "def": "Verifying an offset calculation: cut length + takeoffs must equal travel."
    },
    {
      "term": "Center-to-center",
      "def": "The distance between the centers of two fittings — the travel is measured center-to-center."
    }
  ],
  "video": {
    "title": "How to Calculate Simple and Rolling Offsets | Pipe Trades Pro",
    "embedUrl": "https://www.youtube.com/embed/f2U_IP6HvCc",
    "note": "Pipe Trades Pro works simple and rolling offsets with a calculator: true offset, travel, and takeoffs. Work the module's examples alongside the video.",
    "more": [
      {
        "title": "Expert Plumber EXPLAINS How To CALCULATE A Rolling Offset",
        "url": "https://www.youtube.com/watch?v=xdmDVdNvOhM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A pipe must offset 8 inches at 45 degrees. The two fittings have takeoffs of 1 1/4 inches each. What is the cut length?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Travel = 8 × 1.414 = 11.31 inches. Step 2: Two takeoffs = 2 × 1.25 = 2.5 inches. Step 3: Cut = 11.31 − 2.5 = 8.81 inches, about 8 13/16 inches. Step 4: Check: 8.81 + 2.5 = 11.31 = travel.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A pipe must rise 6 inches and roll 8 inches. What is the true offset?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: True offset = √(6² + 8²) = √(36 + 64) = √100 = 10 inches. Step 2: This is the 3-4-5 triangle doubled (6-8-10), so the answer is exact.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Work the full rolling offset: rise 7 inches, roll 12 inches, 45-degree fittings with takeoffs of 2 1/2 inches each. Give the true offset, travel, and cut length.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: True offset = √(7² + 12²) = √193 = 13.89 inches, about 13 7/8. Step 2: Travel = 13.89 × 1.414 = 19.64 inches, about 19 5/8. Step 3: Takeoffs = 2 × 2.5 = 5 inches. Step 4: Cut = 19.64 − 5 = 14.64 inches, about 14 5/8. Step 5: Check: 14.64 + 5 = 19.64 = travel.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A pipe must offset 10 inches using 22 1/2-degree fittings. What is the travel, and how does it compare with a 45-degree offset of the same 10 inches?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: 22 1/2° travel = 10 × 2.613 = 26.13 inches. Step 2: 45° travel = 10 × 1.414 = 14.14 inches. Step 3: The shallower angle gives a much longer travel — 26.13 versus 14.14 inches — because the pipe moves more gradually.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A rolling offset has a rise of 9 inches and a roll of 12 inches. What is the true offset?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: True offset = √(9² + 12²) = √(81 + 144) = √225 = 15 inches. Step 2: This is the 3-4-5 triangle tripled (9-12-15), so the answer is exact.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A fitter calculates a cut length of 20 inches for a travel of 19.64 inches. What is wrong, and what should the cut be if the two takeoffs total 5 inches?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The cut length cannot be longer than the travel — the fittings consume part of it, they do not add to it. Step 2: The correct cut is travel minus takeoffs: 19.64 − 5 = 14.64 inches, about 14 5/8. Step 3: The check (cut + takeoffs = travel) catches this error before the pipe is cut.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A simple offset moves a pipe in:",
      "choices": [
        "Two planes at once",
        "One plane — sideways, or up and down, but not both",
        "Three directions",
        "A circle"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A simple offset is a single-plane move; two planes make it a rolling offset. (a) That describes a rolling offset. (c) Pipe offsets do not move in three directions. (d) An offset is not circular."
    },
    {
      "q": "A rolling offset with a rise of 6 inches and a roll of 8 inches has a true offset of:",
      "choices": [
        "14 inches",
        "10 inches",
        "7 inches",
        "8 inches"
      ],
      "answer": 1,
      "explanation": "Correct: (b). √(36 + 64) = √100 = 10 inches. (a) That adds the legs instead of using the theorem. (c) and (d) are the legs, not the diagonal."
    },
    {
      "q": "For a 45-degree offset, the travel is the offset times:",
      "choices": [
        "2.613",
        "1.155",
        "1.414",
        "2.000"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 1.414 is √2, the 45-degree multiplier. (a) 2.613 is the 22 1/2-degree multiplier. (b) 1.155 is the 60-degree multiplier. (d) 2.000 is the 30-degree multiplier."
    },
    {
      "q": "A rolling offset with rise 7 and roll 12 has a travel (45°) of about:",
      "choices": [
        "13.89 inches",
        "19.64 inches",
        "14.64 inches",
        "12 inches"
      ],
      "answer": 1,
      "explanation": "Correct: (b). True offset √193 = 13.89; travel = 13.89 × 1.414 = 19.64. (a) That is the true offset, not the travel. (c) That is the cut length after subtracting 5 inches of takeoffs. (d) That is the roll alone."
    },
    {
      "q": "The cut length of an offset is:",
      "choices": [
        "Travel plus both takeoffs",
        "Travel minus both takeoffs",
        "The offset itself",
        "Travel times 1.414"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Each fitting consumes part of the travel, so subtract both takeoffs. (a) Adding makes the piece too long. (c) The offset is a leg, not the cut piece. (d) The multiplier is applied once, to the offset."
    },
    {
      "q": "A 22 1/2-degree offset of 10 inches has a travel of about:",
      "choices": [
        "14.14 inches",
        "26.13 inches",
        "11.55 inches",
        "20 inches"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 10 × 2.613 = 26.13 inches. (a) That is the 45-degree travel. (c) That is the 60-degree travel. (d) That is the 30-degree travel."
    },
    {
      "q": "The check for an offset calculation is:",
      "choices": [
        "Cut length + takeoffs = travel",
        "Cut length = offset",
        "Travel = offset",
        "Takeoffs = travel"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Cut + takeoffs must equal the travel — if it does not, something is wrong. (b) The cut is shorter than the offset's travel. (c) Travel is longer than the offset. (d) Takeoffs are part of the travel, not equal to it."
    },
    {
      "q": "A rolling offset takes more pipe than a simple offset of the same rise because:",
      "choices": [
        "The fittings are bigger",
        "The true offset is the diagonal, longer than either leg alone",
        "Rolling offsets use 90-degree fittings",
        "The pipe is thicker"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The true offset √(rise² + roll²) is longer than the rise or the roll alone, so the travel is longer too. (a) Fitting size is not the reason. (c) Rolling offsets commonly use 45-degree fittings. (d) Pipe thickness is not the reason."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Simple &amp; Rolling Offsets: Quick Reference</h3>\n<p><strong>Simple offset (5 steps):</strong> Measure the offset → Travel = offset × multiplier → Subtract both takeoffs → Cut → Check: cut + takeoffs = travel.</p>\n<p><strong>Rolling offset:</strong> True offset = √(rise² + roll²) → Travel = true offset × multiplier → Cut = travel − takeoffs.</p>\n<p><strong>Multipliers:</strong> 22 1/2° = 2.613 · 30° = 2.000 · 45° = 1.414 · 60° = 1.155.</p>\n<p><strong>Worked rolling offset:</strong> Rise 7, roll 12 → true offset 13.89 in → travel 19.64 in → takeoffs 5 in → cut 14.64 in (≈14 5/8 in).</p>\n<p><strong>Watch out:</strong> Never use the rise or roll as the offset, and never use the 1.414 multiplier for a non-45° angle.</p>\n<p><strong>Self-check:</strong> Work a rolling offset from rise 6 and roll 8 to the cut length (travel 14.14 in with 45° fittings and 2 1/2-in takeoffs gives a cut of 9.14 in). If the numbers close, you have this module.</p>\n"
};
