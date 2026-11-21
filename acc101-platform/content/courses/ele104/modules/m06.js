// ele104 - Module 6: Boxes, Enclosures & Box Fill (Article 314)
module.exports = {
  "number": 6,
  "slug": "boxes-enclosures-box-fill",
  "title": "Boxes, Enclosures & Box Fill (Article 314)",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain when a box is required and how boxes must be installed and supported.",
    "Count conductor volume allowances under Table 314.16(B).",
    "Calculate box fill and choose the smallest compliant box.",
    "Apply the 2023 grounding-conductor counting rule for box fill.",
    "Size pull and junction boxes for conductors 4 AWG and larger."
  ],
  "sections": [
    {
      "heading": "When a Box Is Required",
      "html": "<p>Article 314.1 requires a box or conduit body at every splice, every outlet, every switch point, and every place conductors are joined. Conductors must never be spliced outside a box, and a splice must never be buried in a wall where it cannot be reached. The box is the fire containment: if a splice fails, the arc and heat stay inside a metal or listed nonmetallic enclosure instead of reaching wood framing.</p><p>Boxes must be installed so their front edge is flush with the finished wall surface in noncombustible walls, and no more than 1/4 inch back in combustible walls (314.20). A box set too deep is a violation and a fire risk, because the device sits recessed and arcing can reach the framing. In a finished wall, the box must be accessible — a cover plate is not a wall, but drywall over a box is a buried splice.</p><p>Boxes must be supported: nailed or screwed to framing, or supported by the raceway system within the rules of 314.23. A box hanging by its cables alone is not supported, and a box that moves when a plug is pulled will loosen its splices over time.</p><div class=\"callout\"><strong>Key idea:</strong> Every splice lives in a box, and every box must be accessible. A buried splice is a hidden fire.</div>"
    },
    {
      "heading": "Counting Volume: Table 314.16(B)",
      "html": "<p>Box fill is a counting exercise in cubic inches. Each conductor that enters the box counts as one volume allowance, based on the largest conductor in the box: 14 AWG counts 2.00 in³, 12 AWG counts 2.25 in³, 10 AWG counts 2.50 in³, 8 AWG counts 3.00 in³, and 6 AWG counts 5.00 in³ (Table 314.16(B)). A conductor that passes through the box without a splice still counts once; a conductor that is spliced inside counts once per end? No — each conductor counts once, whether it terminates or passes through, and a loop of unbroken conductor counts twice because it enters and leaves as two lengths.</p><p>Devices count too: each device yoke (a switch or receptacle strap) counts as two volume allowances based on the largest conductor connected to it. Internal cable clamps count as one allowance total, not one per clamp. Equipment grounding conductors follow the 2023 rule: the first four grounding conductors together count as one allowance, and each additional grounding conductor beyond four counts as 1/4 allowance. Fittings such as studs and hickeys count as one allowance each.</p><p>The total of all allowances, multiplied by the volume per conductor, must not exceed the box volume marked on the box or listed in Table 314.16(A). A standard 4-inch square box, 1-1/2 inches deep, holds 18.0 in³; the same box 2-1/8 inches deep holds 30.3 in³. When in doubt, go deeper — the cost difference is small and the inspection difference is large.</p><ul><li>Each conductor: 1 allowance (a loop counts 2).</li><li>Each device yoke: 2 allowances, at the largest conductor size.</li><li>Internal clamps: 1 allowance total. Grounds (2023): first 4 = 1 allowance, each extra = 1/4.</li><li>Volume per conductor: 14 AWG 2.00 · 12 AWG 2.25 · 10 AWG 2.50 · 8 AWG 3.00 · 6 AWG 5.00 in³.</li></ul>"
    },
    {
      "heading": "Worked Box-Fill Example",
      "html": "<p>A 4-inch square box, 1-1/2 inches deep (18.0 in³), holds two 12/2 NM cables and one receptacle. Count: four circuit conductors (two black, two white) = 4 allowances. The receptacle yoke = 2 allowances. Internal clamps = 1 allowance. Grounding conductors: two grounds, which fall in the first four, = 1 allowance. Total = 4 + 2 + 1 + 1 = 8 allowances. At 2.25 in³ each for 12 AWG, the fill is 8 × 2.25 = 18.0 in³ — exactly the box volume, so the box is compliant but full. One more conductor would fail it.</p><p>Now add a second receptacle on the same box (a two-gang situation) and the count changes: each device yoke adds 2 allowances. This is why multi-gang boxes exist and why a single-gang box stuffed with two devices is a classic violation. The fix is a larger box, a deeper box, or an extension ring that adds marked volume.</p><p>A common exam trap is the grounding count. Before the 2023 NEC, all grounding conductors together counted as one allowance. The 2023 rule keeps the first four at one allowance but adds 1/4 allowance for each additional ground — so five grounds count 1.25 allowances and eight grounds count 2. Use the 2023 rule on every calculation in this program.</p><div class=\"callout\"><strong>Key idea:</strong> Count everything: conductors, device yokes (2 each), clamps (1), grounds (first 4 = 1, each extra = 1/4). Compare the total to the marked box volume.</div>"
    },
    {
      "heading": "Pull and Junction Boxes for Large Conductors",
      "html": "<p>Table 314.16 covers boxes for conductors 6 AWG and smaller. For conductors 4 AWG and larger, 314.28 governs, and the sizing is about bending radius, not just volume. For a straight pull, the box must be at least eight times the trade size of the largest raceway entering it. For an angle or U pull, the distance from the raceway entry to the opposite wall must be at least six times the largest raceway trade size, plus the sizes of the other raceways on the same wall.</p><p>Example: a junction box with a 2-inch conduit entering for an angle pull needs at least 6 × 2 inches = 12 inches from the entry wall to the opposite wall, plus the trade sizes of any other conduits on that wall. The rule exists because large conductors cannot make a tight turn without damaging their insulation — the box must be big enough for the bend.</p><p>Covers matter too: 314.28(C) requires covers for pull and junction boxes to be accessible and, where the box is in a finished space, to remain accessible without removing finish materials. A junction box above a lay-in ceiling is accessible; one buried above drywall is not.</p><ul><li>Straight pull: box length ≥ 8 × largest raceway trade size.</li><li>Angle/U pull: entry to opposite wall ≥ 6 × largest raceway + other raceways on that wall.</li><li>Covers must stay accessible (314.28(C)).</li></ul>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Every splice, outlet, and switch point needs a box (314.1); boxes must be accessible and flush with the finished surface.</li><li>Box fill is counted in volume allowances per Table 314.16(B); the total must not exceed the marked box volume.</li><li>2023 grounding rule: first four grounds = 1 allowance, each extra = 1/4 allowance.</li><li>Device yokes count 2 allowances each; internal clamps count 1 total.</li><li>Conductors 4 AWG and larger use 314.28: 8× for straight pulls, 6× for angle pulls.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Forgetting the device yoke counts as two allowances. A box that fits the wires often fails once the receptacle is counted.</div><div class=\"callout\"><strong>Common mistake:</strong> Using the old grounding rule (all grounds = 1 allowance). The 2023 NEC adds 1/4 allowance for each ground beyond four.</div><p><strong>Ready-to-Work link:</strong> If you can count a box with two cables and a receptacle and explain the 6× angle-pull rule, you have this module. Module 7 surveys the wiring methods of Articles 300 and 334–396.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Box fill",
      "def": "The total volume of conductors, devices, clamps, and fittings in a box, compared with the box's marked volume (314.16)."
    },
    {
      "term": "Volume allowance",
      "def": "The cubic-inch value assigned to one conductor, device yoke, clamp, or fitting in a box-fill count."
    },
    {
      "term": "Device yoke",
      "def": "The metal strap of a switch or receptacle; counts as two volume allowances in box fill."
    },
    {
      "term": "Conduit body",
      "def": "A fitting such as an LB or LL that provides access to conductors in a raceway run."
    },
    {
      "term": "Table 314.16(A)",
      "def": "The table of standard metal box volumes."
    },
    {
      "term": "Table 314.16(B)",
      "def": "The table of volume allowances per conductor size."
    },
    {
      "term": "Extension ring",
      "def": "A box extension that adds marked volume to an existing box."
    },
    {
      "term": "Straight pull",
      "def": "Conductors entering and leaving a box in a straight line; box length ≥ 8× the largest raceway (314.28(A)(1))."
    },
    {
      "term": "Angle pull",
      "def": "Conductors entering and turning in a box; entry-to-opposite-wall ≥ 6× the largest raceway (314.28(A)(2))."
    },
    {
      "term": "U pull",
      "def": "Conductors entering and leaving on the same wall in a U shape; sized like an angle pull."
    },
    {
      "term": "Accessible",
      "def": "Capable of being reached without removing finish materials; required for boxes and covers."
    },
    {
      "term": "314.20",
      "def": "The rule that a box must be flush with the finished surface (or within 1/4 in. in combustible walls)."
    }
  ],
  "video": {
    "title": "Journeyman Electrician Exam Prep (NEC 2023) — Box Fill 314.16: 6 Worked Examples + 5 Self-Test",
    "embedUrl": "https://www.youtube.com/embed/ptk5wNAqHL0",
    "note": "This NEC 2023 masterclass works box fill end to end, including the 2023 grounding rule and six worked examples. Work each example on paper before the presenter solves it, and check your count against theirs.",
    "more": [
      {
        "title": "Box Fill Calculations - Electrical Box Fill (THE EASY WAY)",
        "url": "https://www.youtube.com/watch?v=Icrnm6cXsR8"
      },
      {
        "title": "Commercial Box Fill Calculations: Sizing Multi-Gang Metal Enclosures!",
        "url": "https://www.youtube.com/watch?v=CjyaDypDkPo"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A box holds three 14/2 NM cables and one receptacle, with internal clamps. Count the volume allowances and the total fill in cubic inches.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Six circuit conductors = 6 allowances. Step 2: Receptacle yoke = 2 allowances. Step 3: Internal clamps = 1 allowance. Step 4: Three grounds fall in the first four = 1 allowance. Step 5: Total = 10 allowances × 2.00 in³ (14 AWG) = 20.0 in³ — a 4-inch square box 1-1/2 in. deep (18.0 in³) is too small; use the 2-1/8 in. deep box (30.3 in³).</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A box contains two 12/2 cables and one receptacle, with internal clamps. What is the fill, and does a 4-inch square 1-1/2-inch-deep box (18.0 in³) work?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Four conductors = 4 allowances. Step 2: Yoke = 2, clamps = 1, grounds (two, in the first four) = 1. Step 3: Total 8 allowances × 2.25 in³ = 18.0 in³. Step 4: Exactly 18.0 in³, so the box is compliant but full.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> How many volume allowances do six grounding conductors count in a box under the 2023 NEC?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The first four grounds together count as 1 allowance. Step 2: The two additional grounds count 1/4 each = 0.5. Step 3: Total = 1.5 allowances.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A junction box has a 3-inch conduit entering for an angle pull, plus a 2-inch conduit on the same wall. What is the minimum distance from the entry wall to the opposite wall?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Angle pull: 6 × the largest raceway = 6 × 3 in. = 18 in. Step 2: Add the other raceway on the same wall: + 2 in. Step 3: Minimum distance = 20 inches.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A box for a switch is set 1/2 inch back from the finished surface of a combustible (wood) wall. Is that compliant?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No. Step 2: Section 314.20 allows a box to be set back at most 1/4 inch in a combustible wall, and it must be flush in a noncombustible wall. Step 3: The fix is to bring the box forward with a box extension or a deeper box.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A straight pull box has a 2-inch conduit entering and leaving straight through. What is the minimum box length?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Straight pull: 8 × the largest raceway trade size. Step 2: 8 × 2 in. = 16 inches. Step 3: The box must be at least 16 inches long.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Every splice must be made:",
      "choices": [
        "Inside a box or conduit body",
        "Inside the wall cavity, taped",
        "Under the floor, if it is accessible",
        "Anywhere, if it is soldered"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 314.1 requires splices in a box or conduit body. (b) A splice loose in a wall cavity is a buried splice and a fire risk. (c) Under-floor splices still need a box and accessibility. (d) Soldering does not replace the box."
    },
    {
      "q": "In a combustible wall, a box may be set back from the finished surface by at most:",
      "choices": [
        "Flush only",
        "1/4 inch",
        "1/2 inch",
        "1 inch"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 314.20 allows at most 1/4 inch in combustible walls. (a) Flush is required in noncombustible walls. (c) and (d) 1/2 inch and 1 inch are too far back."
    },
    {
      "q": "Each device yoke counts as how many volume allowances in box fill?",
      "choices": [
        "One",
        "Two",
        "Three",
        "Zero — devices are not counted"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Each yoke counts as two allowances at the largest conductor size. (a) One is the count for a single conductor. (c) Three is not a box-fill count. (d) Devices are counted."
    },
    {
      "q": "Under the 2023 NEC, five grounding conductors in a box count as:",
      "choices": [
        "1 allowance",
        "1.25 allowances",
        "2 allowances",
        "5 allowances"
      ],
      "answer": 1,
      "explanation": "Correct: (b). First four = 1 allowance, the fifth adds 1/4, for 1.25 total. (a) 1 allowance was the pre-2023 rule for all grounds. (c) 2 allowances would be eight grounds. (d) Grounds are not counted one-for-one."
    },
    {
      "q": "The volume allowance for one 12 AWG conductor is:",
      "choices": [
        "2.00 in³",
        "2.25 in³",
        "2.50 in³",
        "3.00 in³"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Table 314.16(B): 12 AWG = 2.25 in³. (a) 2.00 in³ is 14 AWG. (c) 2.50 in³ is 10 AWG. (d) 3.00 in³ is 8 AWG."
    },
    {
      "q": "A 4-inch square box 1-1/2 inches deep has a marked volume of:",
      "choices": [
        "12.5 in³",
        "18.0 in³",
        "21.0 in³",
        "30.3 in³"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The 1-1/2 in. deep 4-inch square box is 18.0 in³. (a) 12.5 in³ is a smaller box. (c) 21.0 in³ is the 4-11/16 in. square 1-1/2 in. box. (d) 30.3 in³ is the 4-inch square 2-1/8 in. deep box."
    },
    {
      "q": "For an angle pull, the distance from the raceway entry to the opposite wall must be at least:",
      "choices": [
        "4 times the largest raceway trade size",
        "6 times the largest raceway trade size plus other raceways on that wall",
        "8 times the largest raceway trade size",
        "12 inches regardless of size"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 314.28(A)(2): 6× the largest raceway plus the other raceways on the same wall. (a) 4× is not the rule. (c) 8× is the straight-pull rule. (d) A fixed 12 inches ignores raceway size."
    },
    {
      "q": "Internal cable clamps in a box count as:",
      "choices": [
        "One allowance per clamp",
        "One allowance total",
        "Two allowances",
        "Zero allowances"
      ],
      "answer": 1,
      "explanation": "Correct: (b). All internal clamps together count as one allowance. (a) Counting per clamp over-counts. (c) Two allowances is the device-yoke count. (d) Clamps are counted."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Boxes &amp; Box Fill: Quick Reference</h3>\n<p><strong>Core idea:</strong> Every splice lives in an accessible box; box fill is a volume count that must not exceed the marked box volume.</p>\n<p><strong>Counts (Table 314.16(B)):</strong> Each conductor 1 · device yoke 2 · internal clamps 1 total · grounds (2023): first 4 = 1, each extra = 1/4 · fittings 1 each.</p>\n<p><strong>Volume per conductor:</strong> 14 AWG 2.00 · 12 AWG 2.25 · 10 AWG 2.50 · 8 AWG 3.00 · 6 AWG 5.00 in³.</p>\n<p><strong>Common box:</strong> 4-in. square, 1-1/2 in. deep = 18.0 in³; 2-1/8 in. deep = 30.3 in³.</p>\n<p><strong>Large conductors (314.28):</strong> Straight pull ≥ 8× largest raceway · angle/U pull ≥ 6× largest + other raceways on that wall.</p>\n<p><strong>Self-check:</strong> Count a box with two 12/2 cables and a receptacle, and state the 2023 grounding count for six grounds.</p>\n"
};
