// egr102 - Module 2: Trigonometry: Right Triangles, Sine, Cosine, Tangent
module.exports = {
  "number": 2,
  "slug": "trigonometry",
  "title": "Trigonometry: Right Triangles, Sine, Cosine, Tangent",
  "estTime": "3–4 hours",
  "objectives": [
    "Name the sides of a right triangle: opposite, adjacent, hypotenuse.",
    "Use SOH-CAH-TOA to find a missing side or angle.",
    "Use Pythagoras’ theorem to find a missing side.",
    "Recognise the 3-4-5 triangle and 30°-60°-90° patterns.",
    "Apply trigonometry to a real job, such as a ladder or a ramp."
  ],
  "sections": [
    {
      "heading": "Right Triangles Are Everywhere",
      "html": "<p>A right triangle has one 90° corner. Engineers meet them constantly: a ladder against a wall makes a right triangle with the ground; a ramp makes one with the floor; a force pulling at an angle makes one with the horizontal. If you can solve a right triangle, you can solve a surprising amount of engineering.</p>\n<p>The three sides have names that depend on the angle you are looking at. The hypotenuse is the longest side, opposite the right angle — it never changes its name. The opposite side is across from your angle; the adjacent side is next to your angle (and not the hypotenuse).</p>\n"
    },
    {
      "heading": "SOH-CAH-TOA: Three Ratios That Never Change",
      "html": "<p>For any angle in a right triangle, the ratios of the sides are fixed. Sine = opposite ÷ hypotenuse. Cosine = adjacent ÷ hypotenuse. Tangent = opposite ÷ adjacent. The memory trick is SOH-CAH-TOA: Sine-Opposite-Hypotenuse, Cosine-Adjacent-Hypotenuse, Tangent-Opposite-Adjacent.</p>\n<p>Example: a right triangle has a hypotenuse of 5 m and the side opposite a 30° angle is unknown. Sin 30° = 0.5, so opposite = 5 × 0.5 = 2.5 m. The ratio does the work — you just need to pick the right one and know which side is which.</p>\n"
    },
    {
      "heading": "Pythagoras’ Theorem",
      "html": "<p>Pythagoras’ theorem links the three sides: hypotenuse² = opposite² + adjacent². If the two shorter sides are 3 m and 4 m, the hypotenuse is √(9 + 16) = √25 = 5 m. The 3-4-5 triangle is the most useful pattern in engineering — and its multiples, like 6-8-10, work the same way.</p>\n<p>Pythagoras also finds a missing short side: if the hypotenuse is 10 m and one side is 6 m, the other side is √(100 − 36) = √64 = 8 m. Builders use 3-4-5 to check right angles on site: mark 3 m along one wall and 4 m along the other, and the diagonal must be exactly 5 m.</p>\n"
    },
    {
      "heading": "Finding Angles: Inverse Trigonometry",
      "html": "<p>Sometimes you know the sides and need the angle. That is inverse trigonometry: if sin(angle) = opposite ÷ hypotenuse = 0.5, then the angle is sin⁻¹(0.5) = 30°. On a calculator, use the sin⁻¹, cos⁻¹, or tan⁻¹ key — and check the calculator is in degrees, not radians.</p>\n<p>Example: a ramp rises 1 m over a horizontal run of 2 m. The angle is tan⁻¹(1 ÷ 2) = tan⁻¹(0.5) = 26.6°. A small angle like that is a gentle ramp; a 45° ramp would rise 1 m for every 1 m of run — far too steep to walk up comfortably.</p>\n<p><strong>Ladders, Ramps, and Real Jobs</strong></p>\n<p>A 5 m ladder leans against a wall at 70° to the ground. How high does it reach? Height = 5 × sin 70° = 5 × 0.9397 = 4.70 m. How far is its foot from the wall? Distance = 5 × cos 70° = 5 × 0.3420 = 1.71 m. One triangle, two answers, both from SOH-CAH-TOA.</p>\n<p>The same maths sizes a ramp, a roof slope, or a pipe bend. The rule is always the same: draw the triangle, label the sides against your angle, pick the ratio that uses what you know and what you want, and check the answer by asking whether it looks sensible.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Hypotenuse = longest side; opposite and adjacent depend on your angle.</li><li>SOH-CAH-TOA: sin = opp/hyp, cos = adj/hyp, tan = opp/adj.</li><li>Pythagoras: hyp² = opp² + adj²; remember 3-4-5.</li><li>Inverse trig (sin⁻¹ etc.) finds angles from sides.</li><li>Ladder: height = length × sin(angle).</li></ul></p>\n<p><strong>Common mistake:</strong> Mixing up opposite and adjacent. Label the sides against YOUR angle before choosing a ratio.</p>\n<p><strong>Common mistake:</strong> Using a calculator in radians. Engineering angles in this course are in degrees — check the mode.</p>\n<p><strong>Ready check:</strong> If you can find a missing side with SOH-CAH-TOA, find a hypotenuse with Pythagoras, and work out a ladder’s height, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Right triangle",
      "def": "A triangle with one 90° corner."
    },
    {
      "term": "Hypotenuse",
      "def": "The longest side of a right triangle, opposite the right angle."
    },
    {
      "term": "Opposite side",
      "def": "The side across from the angle you are looking at."
    },
    {
      "term": "Adjacent side",
      "def": "The side next to the angle you are looking at, that is not the hypotenuse."
    },
    {
      "term": "Sine (sin)",
      "def": "Opposite ÷ hypotenuse for an angle in a right triangle."
    },
    {
      "term": "Cosine (cos)",
      "def": "Adjacent ÷ hypotenuse for an angle in a right triangle."
    },
    {
      "term": "Tangent (tan)",
      "def": "Opposite ÷ adjacent for an angle in a right triangle."
    },
    {
      "term": "SOH-CAH-TOA",
      "def": "A memory trick for the three trig ratios: Sine = Opposite/Hypotenuse, Cosine = Adjacent/Hypotenuse, Tangent = Opposite/Adjacent."
    },
    {
      "term": "Pythagoras’ theorem",
      "def": "In a right triangle, hypotenuse² = opposite² + adjacent²."
    },
    {
      "term": "Inverse trigonometry",
      "def": "Working backwards from a ratio to find the angle, using sin⁻¹, cos⁻¹, or tan⁻¹."
    },
    {
      "term": "Degree",
      "def": "The unit for measuring angles; a right angle is 90°."
    },
    {
      "term": "3-4-5 triangle",
      "def": "A right triangle with sides 3, 4, and 5 units — the most useful pattern in building and engineering."
    },
    {
      "term": "Angle of elevation",
      "def": "The angle above the horizontal, such as the angle of a ladder against a wall."
    },
    {
      "term": "Ramp",
      "def": "A sloping surface joining two levels; its steepness is an angle you can calculate."
    }
  ],
  "video": {
    "title": "Example: Using soh cah toa | Basic trigonometry | Trigonometry | Khan Academy",
    "embedUrl": "https://www.youtube.com/embed/I3jyBUyjg48",
    "note": "Khan Academy works a SOH-CAH-TOA example slowly: identify opposite, adjacent, and hypotenuse, then pick the ratio. Pause before each step and try it yourself.",
    "more": [
      {
        "title": "Newton's Laws: Crash Course Physics #5",
        "url": "https://www.youtube.com/watch?v=kKKM8Y-u7ds"
      },
      {
        "title": "Work and power | Physics | Khan Academy",
        "url": "https://www.youtube.com/watch?v=v2_qI9S6oIQ"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Right triangle” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Right triangle — A triangle with one 90° corner. It matters because it connects directly to this module’s first goal: Name the sides of a right triangle: opposite, adjacent, hypotenuse. A good answer names the term correctly, explains it in plain words, and gives a real example from the module.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Hypotenuse” and “Opposite side”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Hypotenuse — The longest side of a right triangle, opposite the right angle. Opposite side — The side across from the angle you are looking at. They differ in what they describe: the first is about hypotenuse, the second about opposite side. A good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module’s main idea: “Name the sides of a right triangle: opposite, adjacent, hypotenuse.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Name the sides of a right triangle: opposite, adjacent, hypotenuse. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Adjacent side — The side next to the angle you are looking at, that is not the hypotenuse. Sine (sin) — Opposite ÷ hypotenuse for an angle in a right triangle. Cosine (cos) — Adjacent ÷ hypotenuse for an angle in a right triangle. Tangent (tan) — Opposite ÷ adjacent for an angle in a right triangle. (Any four module terms, explained in the student’s own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A 5 m ladder leans against a wall at 70° to the ground. How high up the wall does it reach, and how far is its foot from the wall? Show your working. (sin 70° = 0.9397, cos 70° = 0.3420.)</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Height = 5 × sin 70° = 5 × 0.9397 = 4.70 m. Step 2: Foot distance = 5 × cos 70° = 5 × 0.3420 = 1.71 m. Step 3: Check with Pythagoras: 4.70² + 1.71² = 22.09 + 2.92 = 25.01 ≈ 5². Correct.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A right triangle has sides of 6 m and 8 m meeting at the right angle. How long is the hypotenuse? Explain which pattern this is.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Hypotenuse² = 6² + 8² = 36 + 64 = 100. Step 2: Hypotenuse = √100 = 10 m. Step 3: This is the 3-4-5 pattern doubled (6-8-10). A good answer shows both the calculation and the pattern.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Right triangle” mean?",
      "choices": [
        "A triangle with one 90° corner.",
        "The side across from the angle you are looking at.",
        "The side next to the angle you are looking at, that is not the hypotenuse.",
        "Opposite ÷ hypotenuse for an angle in a right triangle."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Right triangle means: A triangle with one 90° corner.. (b) is the definition of Opposite side, not of Right triangle. (c) is the definition of Adjacent side, not of Right triangle. (d) is the definition of Sine (sin), not of Right triangle."
    },
    {
      "q": "What does the term “Opposite side” mean?",
      "choices": [
        "Opposite ÷ hypotenuse for an angle in a right triangle.",
        "The side across from the angle you are looking at.",
        "Adjacent ÷ hypotenuse for an angle in a right triangle.",
        "Opposite ÷ adjacent for an angle in a right triangle."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Opposite side means: The side across from the angle you are looking at.. (a) is the definition of Sine (sin), not of Opposite side. (c) is the definition of Cosine (cos), not of Opposite side. (d) is the definition of Tangent (tan), not of Opposite side."
    },
    {
      "q": "What does the term “Sine (sin)” mean?",
      "choices": [
        "Opposite ÷ adjacent for an angle in a right triangle.",
        "A memory trick for the three trig ratios: Sine = Opposite/Hypotenuse, Cosine = Adjacent/Hypotenuse, Tangent = Opposite/Adjacent.",
        "Opposite ÷ hypotenuse for an angle in a right triangle.",
        "In a right triangle, hypotenuse² = opposite² + adjacent²."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Sine (sin) means: Opposite ÷ hypotenuse for an angle in a right triangle.. (a) is the definition of Tangent (tan), not of Sine (sin). (b) is the definition of SOH-CAH-TOA, not of Sine (sin). (d) is the definition of Pythagoras’ theorem, not of Sine (sin)."
    },
    {
      "q": "What does the term “Tangent (tan)” mean?",
      "choices": [
        "In a right triangle, hypotenuse² = opposite² + adjacent².",
        "Working backwards from a ratio to find the angle, using sin⁻¹, cos⁻¹, or tan⁻¹.",
        "The unit for measuring angles; a right angle is 90°.",
        "Opposite ÷ adjacent for an angle in a right triangle."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Tangent (tan) means: Opposite ÷ adjacent for an angle in a right triangle.. (a) is the definition of Pythagoras’ theorem, not of Tangent (tan). (b) is the definition of Inverse trigonometry, not of Tangent (tan). (c) is the definition of Degree, not of Tangent (tan)."
    },
    {
      "q": "In a right triangle, the side opposite the 30° angle is 2.5 m and the hypotenuse is 5 m. What is sin 30°?",
      "choices": [
        "0.25",
        "0.5",
        "2",
        "0.866"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Sin = opposite ÷ hypotenuse = 2.5 ÷ 5 = 0.5. (a) is 2.5 ÷ 10. (c) divides the wrong way. (d) is cos 30°."
    },
    {
      "q": "A right triangle has short sides 3 m and 4 m. How long is the hypotenuse?",
      "choices": [
        "5 m",
        "6 m",
        "7 m",
        "12 m"
      ],
      "answer": 0,
      "explanation": "Correct: (a). √(9 + 16) = √25 = 5 m — the 3-4-5 triangle. (b) is 3 + 4 − 1. (c) is 3 + 4. (d) is 3 × 4."
    },
    {
      "q": "What does tan of an angle equal in a right triangle?",
      "choices": [
        "Opposite ÷ hypotenuse",
        "Adjacent ÷ hypotenuse",
        "Opposite ÷ adjacent",
        "Hypotenuse ÷ opposite"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Tangent = opposite ÷ adjacent. (a) is sine. (b) is cosine. (d) is the reciprocal of sine."
    },
    {
      "q": "A ramp rises 1 m over a horizontal run of 1 m. What is its angle?",
      "choices": [
        "26.6°",
        "30°",
        "45°",
        "60°"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Tan(angle) = 1 ÷ 1 = 1, so the angle is 45°. (a) is the angle for a 1-in-2 ramp. (b) has tan = 0.577. (d) has tan = 1.732."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Trigonometry: Right Triangles, Sine, Cosine, Tangent: Quick Reference</h3>\n<p><strong>Core idea:</strong> Name the sides of a right triangle: opposite, adjacent, hypotenuse.</p>\n<p><strong>Key terms:</strong> Right triangle · Hypotenuse · Opposite side · Adjacent side · Sine (sin) · Cosine (cos) · Tangent (tan) · SOH-CAH-TOA.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Name the sides of a right triangle: opposite, adjacent, hypotenuse.</li>\n<li>Use SOH-CAH-TOA to find a missing side or angle.</li>\n<li>Use Pythagoras’ theorem to find a missing side.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module’s main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
