// con107 - Module 8: Stair Math: Rise, Run & Code Basics
module.exports = {
  "number": 8,
  "slug": "stair-math-rise-run-code-basics",
  "title": "Stair Math: Rise, Run & Code Basics",
  "estTime": "3–4 hours",
  "objectives": [
    "Find the number of risers and the unit rise from a total rise.",
    "Find the total run from the number of treads and the unit run.",
    "Explain the common code limits for riser height, tread depth, and headroom.",
    "Explain the 2R + T comfort rule for stairs.",
    "Check a stair calculation against the plan before cutting stringers."
  ],
  "sections": [
    {
      "heading": "Total Rise and Unit Rise",
      "html": "<p>Every stair starts with one measurement: the total rise, the vertical distance from the finished floor below to the finished floor above. Finished floor means the floor surface you will actually walk on, including the flooring — measuring to the subfloor is the classic mistake that makes every riser wrong by the thickness of the flooring.</p>\n<p>To find the number of risers, divide the total rise by a comfortable unit rise — about 7 inches is the target — and round to a whole number. Then divide the total rise by that whole number to get the exact unit rise. For example, a total rise of 105 inches divided by 7 gives 15 risers, and 105 divided by 15 gives a unit rise of exactly 7 inches.</p>\n<p>If the division does not come out even, the rounding decides the comfort. A total rise of 100 inches divided by 7 gives 14.3, so you use 14 risers and the unit rise becomes 100 divided by 14, or about 7-1/7 inches. Every riser in a flight must be the same height — the code allows only a tiny variation — because a riser that is even a quarter inch different is a trip hazard.</p>"
    },
    {
      "heading": "Treads, Run, and Total Run",
      "html": "<p>The tread is the part you step on, and its depth is the unit run — usually 10 to 11 inches. The number of treads depends on how the stair meets the upper floor. If the upper floor itself is the last tread, the flight has one fewer tread than risers. If the stair ends with a tread at the top, treads and risers are equal.</p>\n<p>Total run is the number of treads times the unit run. A flight with 14 treads at 10 inches each has a total run of 140 inches, or 11 feet 8 inches. That horizontal distance is what the plan must provide: if the stairwell is shorter than the total run, the stair cannot fit, and the design has to change.</p>\n<p>The nosing — the small overhang of the tread past the riser below — adds a little to the stepping surface without changing the run. The nosing is usually about 3/4 inch to 1-1/4 inches. It makes the stair feel roomier underfoot, but it does not count toward the tread depth for code purposes in the way beginners often assume.</p>"
    },
    {
      "heading": "The Comfort Rule: 2R + T",
      "html": "<p>A comfortable stair follows a simple rule: two risers plus one tread should add up to about 24 to 25 inches. A 7-inch riser and an 11-inch tread give 2 × 7 + 11 = 25 inches — right in the range. A 7-1/2-inch riser with a 10-inch tread gives 25 inches too.</p>\n<p>The rule works because it matches how people walk: a steeper stair (taller risers, shorter treads) feels like a ladder, and a shallower stair (short risers, deep treads) feels like a ramp that wastes space. When the sum is far from 25, the stair will feel wrong even if it passes code.</p>\n<p>Use the rule as a check, not as a replacement for the code. A stair can satisfy 2R + T and still fail if a riser is too tall or a tread too shallow for the local code, so always check both the rule and the code limits for the job.</p>"
    },
    {
      "heading": "Code Limits You Must Know",
      "html": "<p>Residential stair codes set maximums and minimums that every builder must know, even though the exact numbers vary by jurisdiction and the local code always governs. The common residential limits are: risers no more than 7-3/4 inches high, treads at least 10 inches deep, and headroom of at least 6 feet 8 inches measured vertically from the nosing line.</p>\n<p>Headroom is the clearance above the stair as you walk up it, and it is measured from a sloped line over the nosings, not from the floor. A stair that fits the rise and run but passes under a low beam or a low ceiling fails on headroom, and the fix — moving the stair or cutting the opening bigger — is expensive after framing.</p>\n<p>Other code points that catch beginners: handrails are required on stairs with four or more risers, guardrails are required where the stair is open on a side with a drop, and the riser heights and tread depths in a flight must be uniform within a small tolerance. The inspector measures every riser, so a stair that varies will be flagged.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Total rise ÷ target unit rise (about 7 in) = number of risers; total rise ÷ risers = exact unit rise.</li><li>Total run = treads × unit run; treads = risers − 1 when the upper floor is the last tread.</li><li>Comfort rule: 2R + T ≈ 24–25 in.</li><li>Common code limits: risers ≤ 7-3/4 in, treads ≥ 10 in, headroom ≥ 6 ft 8 in — local code governs.</li></ul><p><strong>Common mistake:</strong> Measuring total rise to the subfloor instead of the finished floor. The flooring thickness makes every riser wrong, and the top and bottom risers end up different from the rest.</p>\n<p>Another common mistake is forgetting headroom. A stair can be perfect on paper and still fail because a beam or a low ceiling cuts across the flight. Check the headroom line on the plan before framing the stairwell.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Stairs are math before they are lumber. Total rise, unit rise, total run, and headroom are all settled on paper — the stringer just records the answers.</div></p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Total rise",
      "def": "The vertical distance from the finished floor below to the finished floor above."
    },
    {
      "term": "Unit rise",
      "def": "The height of one riser — total rise divided by the number of risers."
    },
    {
      "term": "Riser",
      "def": "The vertical part of a step, between one tread and the next."
    },
    {
      "term": "Tread",
      "def": "The horizontal part of a step that you walk on."
    },
    {
      "term": "Unit run",
      "def": "The depth of one tread, usually 10 to 11 inches."
    },
    {
      "term": "Total run",
      "def": "The horizontal distance a stair flight covers: treads × unit run."
    },
    {
      "term": "Nosing",
      "def": "The small overhang of a tread past the riser below it, usually 3/4 to 1-1/4 in."
    },
    {
      "term": "Headroom",
      "def": "The vertical clearance above a stair, measured from the nosing line; usually at least 6 ft 8 in."
    },
    {
      "term": "Stringer",
      "def": "The diagonal board that carries the treads and risers of a stair."
    },
    {
      "term": "2R + T rule",
      "def": "The comfort rule: two risers plus one tread should total about 24–25 inches."
    },
    {
      "term": "Flight",
      "def": "A continuous run of steps between two floors or landings."
    },
    {
      "term": "Landing",
      "def": "A flat platform between stair flights or at the top or bottom of a stair."
    },
    {
      "term": "Handrail",
      "def": "A rail gripped while using a stair; required on stairs with four or more risers."
    },
    {
      "term": "Guardrail",
      "def": "A barrier along an open side of a stair or landing that prevents falls."
    },
    {
      "term": "Finished floor",
      "def": "The floor surface as it will be walked on, including the flooring material."
    }
  ],
  "video": {
    "title": "First Time Building Stairs — Everything You Need To Know",
    "embedUrl": "https://www.youtube.com/embed/UFIqiwtaAYA",
    "note": "Training Hands Academy works through total rise, unit rise, and stringer layout for a first set of stairs. Follow the math in the video and compare it with the method in this module.",
    "more": [
      {
        "title": "How to Build Stair Stringers",
        "url": "https://www.youtube.com/watch?v=Z2uHj2mJkvc"
      },
      {
        "title": "How to Build Steps",
        "url": "https://www.youtube.com/watch?v=g7aa2gI0uvg"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Total rise is 105 in. How many risers at a 7-in unit rise, and what is the exact unit rise?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 105 ÷ 7 = 15 risers. Step 2: 105 ÷ 15 = 7 in exactly.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Total rise is 98 in. How many risers, and what is the unit rise?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 98 ÷ 7 = 14 risers. Step 2: 98 ÷ 14 = 7 in exactly.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Total rise is 100 in. Divide by 7 and round to a whole number of risers, then find the exact unit rise.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 100 ÷ 7 = 14.3, so use 14 risers. Step 2: 100 ÷ 14 = 7.14 in (about 7-1/7 in) per riser.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A flight has 15 risers and the upper floor is the last tread. Treads are 11 in deep. What is the total run?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Treads = 15 − 1 = 14. Step 2: Total run = 14 × 11 = 154 in (12 ft 10 in).</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Check the comfort rule for a 7-in riser and an 11-in tread. Is it in range?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 2R + T = 2 × 7 + 11 = 25 in. Step 2: Yes — 25 in is at the top of the 24–25 in comfort range.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A stair has a total rise of 112 in and a target riser of 7 in. How many risers, what is the unit rise, and what is the total run with 10-in treads (upper floor is the last tread)?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 112 ÷ 7 = 16 risers; unit rise = 112 ÷ 16 = 7 in. Step 2: Treads = 15; total run = 15 × 10 = 150 in (12 ft 6 in).</p>"
    }
  ],
  "quiz": [
    {
      "q": "Total rise is measured:",
      "choices": [
        "From subfloor to subfloor",
        "From finished floor below to finished floor above",
        "From the ceiling to the floor",
        "From the top tread to the bottom tread"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Total rise is finished floor to finished floor, including flooring. (a) Subfloor-to-subfloor misses the flooring thickness. (c) Ceiling height is not stair rise. (d) Tread-to-tread is not the full rise."
    },
    {
      "q": "A total rise of 105 in with a 7-in target riser gives:",
      "choices": [
        "14 risers at 7.5 in",
        "15 risers at 7 in",
        "16 risers at 6.5 in",
        "12 risers at 8.75 in"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 105 ÷ 7 = 15 risers, and 105 ÷ 15 = 7 in. (a) 14 risers would be 7.5 in each. (c) 16 risers would be 6.56 in each. (d) 12 risers would be 8.75 in — over the usual code maximum."
    },
    {
      "q": "If the upper floor is the last tread, the number of treads is:",
      "choices": [
        "Equal to the number of risers",
        "One fewer than the number of risers",
        "One more than the number of risers",
        "Twice the number of risers"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The upper floor counts as the last tread, so treads = risers − 1. (a) That is true only when the stair ends with its own top tread. (c) Treads never exceed risers in a normal flight. (d) Twice is far too many."
    },
    {
      "q": "The 2R + T comfort rule says two risers plus one tread should total about:",
      "choices": [
        "18–19 in",
        "24–25 in",
        "30–31 in",
        "12 in"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 24–25 inches matches a natural walking stride. (a) 18–19 in would be a very steep, ladder-like stair. (c) 30–31 in would be a very shallow stair. (d) 12 in is less than one tread alone."
    },
    {
      "q": "A 7-in riser with an 11-in tread gives 2R + T of:",
      "choices": [
        "18 in",
        "21 in",
        "25 in",
        "29 in"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 2 × 7 + 11 = 25 in. (a) 18 is 7 + 11, forgetting to double the riser. (b) 21 is wrong arithmetic. (d) 29 would need a 15-in tread."
    },
    {
      "q": "Common residential headroom minimum over a stair is:",
      "choices": [
        "6 ft 0 in",
        "6 ft 8 in",
        "7 ft 6 in",
        "8 ft 0 in"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Headroom is usually at least 6 ft 8 in from the nosing line. (a) 6 ft is too low for most adults. (c) and (d) are higher than the common minimum."
    },
    {
      "q": "A total rise of 100 in divided by a 7-in target gives 14.3. The builder should use:",
      "choices": [
        "14 risers, with unit rise 100 ÷ 14",
        "15 risers, with unit rise 100 ÷ 15",
        "14.3 risers",
        "7 risers"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Round to the nearest whole number, 14, then recompute the unit rise as 100 ÷ 14 ≈ 7.14 in. (b) 15 risers is also whole but farther from the target. (c) You cannot build 0.3 of a riser. (d) 7 risers would be over 14 in each — impossible."
    },
    {
      "q": "Why must every riser in a flight be the same height?",
      "choices": [
        "For looks only",
        "Because a riser even slightly different is a trip hazard",
        "Because the code bans landings",
        "Because treads must be level"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Your feet learn the rhythm; one different riser trips people. (a) Looks matter, but safety is the reason. (c) The code allows landings between flights. (d) Level treads are needed too, but they are not the reason risers must match."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Stair Math: Quick Reference</h3>\n<p><strong>Core idea:</strong> Stairs are math before they are lumber: total rise, unit rise, total run, headroom — settled on paper first.</p>\n<p><strong>Risers:</strong> Total rise ÷ target unit rise (≈7 in) = number of risers; total rise ÷ risers = exact unit rise. 105 in → 15 risers at 7 in. 100 in → 14 risers at ≈7.14 in.</p>\n<p><strong>Run:</strong> Treads = risers − 1 when the upper floor is the last tread. Total run = treads × unit run. 14 treads × 11 in = 154 in.</p>\n<p><strong>Comfort:</strong> 2R + T ≈ 24–25 in. 7-in riser + 11-in tread = 25 in.</p>\n<p><strong>Code (common, local code governs):</strong> Risers ≤ 7-3/4 in · Treads ≥ 10 in · Headroom ≥ 6 ft 8 in · Handrail at 4+ risers.</p>\n<p><strong>Watch out:</strong> Measure total rise finished floor to finished floor, and check headroom before framing the stairwell.</p>\n<p><strong>Self-check:</strong> Total rise 112 in → 16 risers at 7 in; 15 treads × 10 in = 150 in run.</p>\n"
};
