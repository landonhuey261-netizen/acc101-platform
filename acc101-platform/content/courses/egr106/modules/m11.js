// egr106 - Module 11: Beam Design, Deflection & Factor of Safety
module.exports = {
  "number": 11,
  "slug": "beam-design-deflection-factor-of-safety",
  "title": "Beam Design, Deflection & Factor of Safety",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a factor of safety is and use it to find an allowable stress.",
    "Size a beam: choose a section modulus big enough for the maximum moment.",
    "Use δ = P × L³ ÷ (48 × E × I) for a central point load on a simply supported beam.",
    "Find the deflection of a cantilever and a UDL.",
    "Explain why deflection, not just strength, can govern a design."
  ],
  "sections": [
    {
      "heading": "Factor of Safety: Designing Below Failure",
      "html": "<p>No structure is designed to its failure load. The factor of safety (FS) is the margin between what a material can take and what you allow it to take: <strong>allowable stress = yield strength ÷ FS</strong>. For a steel beam with a yield of 250 MPa and a factor of safety of 2.5, the allowable stress is 250 ÷ 2.5 = 100 MPa. The factor of safety covers what you do not know: the load might be bigger than expected, the material might be weaker than specified, the workmanship might be imperfect, and the analysis might be approximate. A factor of safety is not waste — it is honesty about uncertainty.</p>\n<p>Factors of safety vary by industry and by consequence: a bookshelf might use 1.5, a crane 3 or more, and a structure whose failure would kill people uses the highest of all. This course uses 2.5 as a working example; real design follows codes that set the numbers.</p>\n"
    },
    {
      "heading": "Sizing a Beam by Its Section Modulus",
      "html": "<p>To size a beam, start from the maximum bending moment, then find the section modulus you need: <strong>S(required) = M(max) ÷ σ(allowable)</strong>. Example: the 40 kN·m beam from Module 10, with an allowable stress of 100 MPa. S(required) = 40 × 10⁶ ÷ 100 = 400,000 mm³. The 100 × 200 mm rectangle has S = 666,667 mm³, which is bigger than required — so it passes, with a margin. If it had not passed, you would pick a deeper section (depth is cubed in I, so a small increase in depth buys a lot of section modulus) or a stronger material.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> S(required) = M(max) ÷ σ(allowable). Pick a section whose S is bigger than required. Depth is the cheapest way to get more S.</div></p>\n"
    },
    {
      "heading": "Deflection: How Much Does It Sag?",
      "html": "<p>Strength is not enough: a beam that is strong enough can still sag so much that it is useless — a floor that bounces, a shelf that droops, a crane rail that misaligns. Deflection is governed by stiffness (E × I), not strength. For a central point load P on a simply supported beam of span L: <strong>δ = P × L³ ÷ (48 × E × I)</strong>. Example: P = 10 kN, L = 4 m, E = 200 GPa, I = 66.67 × 10⁶ mm⁴ (= 66.67 × 10⁻⁶ m⁴). δ = 10,000 × 64 ÷ (48 × 200 × 10⁹ × 66.67 × 10⁻⁶) = 640,000 ÷ 640,032,000 ≈ 0.001 m = 1.0 mm. A millimetre of sag on a 4 m beam — barely visible, and well within the usual limit of span ÷ 360 (≈ 11 mm).</p>\n<p>Other cases: a cantilever with an end load P deflects by δ = P × L³ ÷ (3 × E × I) — sixteen times more than the same load on a simply supported beam, because the 3 in the denominator replaces the 48. A UDL of w over a span L deflects by δ = 5 × w × L⁴ ÷ (384 × E × I). Example: w = 5 kN/m over 4 m with the same section: δ = 5 × 5,000 × 256 ÷ (384 × 200 × 10⁹ × 66.67 × 10⁻⁶) ≈ 1.25 mm. Notice the pattern: deflection depends on L³ or L⁴, so doubling the span multiplies the deflection by 8 or 16. Span is the most powerful variable in the whole formula.</p>\n"
    },
    {
      "heading": "Strength vs Stiffness: Which Governs?",
      "html": "<p>A beam can fail in two ways: by breaking (stress too high) or by sagging too much (deflection too high). Short, heavily loaded beams are governed by strength; long, lightly loaded beams are governed by stiffness. A long floor joist often passes the stress check easily and fails the deflection check — it would hold the load, but the floor would feel like a trampoline. Good design checks both, and the check that fails first is the one that sizes the beam. Always check both.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Allowable stress = yield strength ÷ factor of safety. With 250 MPa and FS = 2.5, the allowable is 100 MPa.</li><li>S(required) = M(max) ÷ σ(allowable). Pick a section with a bigger S.</li><li>Central point load: δ = PL³ ÷ (48EI). Cantilever end load: δ = PL³ ÷ (3EI). UDL: δ = 5wL⁴ ÷ (384EI).</li><li>Example: 10 kN at the middle of a 4 m beam (I = 66.67 × 10⁶ mm⁴) deflects about 1.0 mm.</li><li>Deflection depends on L³ or L⁴ — span is the most powerful variable.</li><li>Always check both strength and deflection.</li></ul></p>\n<p><strong>Common mistake:</strong> Using the yield strength instead of the allowable stress when sizing. The allowable is yield ÷ FS — forgetting the FS makes the beam unsafe by a factor of 2.5.</p>\n<p><strong>Common mistake:</strong> Mixing units in the deflection formula: P in newtons, L in metres, E in pascals, I in m⁴ — then δ comes out in metres. Or use N, mm, MPa, and mm⁴ consistently, and δ comes out in millimetres. Never mix the two sets.</p>\n<p><strong>Ready check:</strong> If you can find the allowable stress (100 MPa), the required section modulus for a 40 kN·m moment (400,000 mm³), and the deflection of a 10 kN central load on a 4 m beam (1.0 mm), you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Factor of safety (FS)",
      "def": "The margin between failure and what is allowed: allowable stress = yield ÷ FS."
    },
    {
      "term": "Allowable stress",
      "def": "The highest stress a design is permitted to reach: yield strength ÷ factor of safety."
    },
    {
      "term": "Required section modulus",
      "def": "S(required) = M(max) ÷ σ(allowable): the smallest section modulus that is strong enough."
    },
    {
      "term": "Deflection (δ)",
      "def": "How much a beam sags under load."
    },
    {
      "term": "Stiffness",
      "def": "Resistance to deflection, governed by E × I."
    },
    {
      "term": "Strength",
      "def": "Resistance to breaking, governed by the yield strength and the section modulus."
    },
    {
      "term": "Span",
      "def": "The distance between a beam's supports."
    },
    {
      "term": "Deflection limit",
      "def": "The maximum sag allowed, often span ÷ 360 for floors."
    },
    {
      "term": "Serviceability",
      "def": "Whether a structure works well in use (deflection, vibration), as opposed to whether it breaks."
    },
    {
      "term": "E × I",
      "def": "Flexural rigidity: the product of Young's modulus and the moment of inertia; the beam's stiffness."
    },
    {
      "term": "Governing check",
      "def": "The check (strength or deflection) that fails first and therefore sizes the beam."
    },
    {
      "term": "Design code",
      "def": "The published rules (e.g. AISC, Eurocode) that set factors of safety and limits for real design."
    }
  ],
  "video": {
    "title": "SFD and BMD Explained: Simply Supported Beam with Point Load (Easy Step-by-Step for Beginners) | Engineering",
    "embedUrl": "https://www.youtube.com/embed/WSn7Hn0bv1k",
    "note": "A simply supported beam with a point load, worked step by step: reactions, shear, moment — and the numbers this module designs from.",
    "more": [
      {
        "title": "WP 6.4.1-SZL | Structures",
        "url": "https://www.youtube.com/watch?v=5yDAp8jou50"
      },
      {
        "title": "WP 6.4.2-SZL | Structures",
        "url": "https://www.youtube.com/watch?v=J4SaMKA1fGw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A steel beam has a yield strength of 250 MPa and a factor of safety of 2.5. What is the allowable stress?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Allowable = yield ÷ FS. Step 2: 250 ÷ 2.5 = 100 MPa.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A beam has a maximum bending moment of 40 kN·m and an allowable stress of 100 MPa. What section modulus is required? Does a 100 × 200 mm rectangle (S = 666,667 mm³) pass?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: S(required) = M ÷ σ = 40 × 10⁶ ÷ 100 = 400,000 mm³. Step 2: The rectangle has S = 666,667 mm³, which is bigger than 400,000 mm³ — so yes, it passes, with a good margin.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 10 kN load acts at the middle of a 4 m simply supported beam. E = 200 GPa, I = 66.67 × 10⁶ mm⁴. Find the deflection.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Convert I to m⁴: 66.67 × 10⁶ mm⁴ = 66.67 × 10⁻⁶ m⁴. Step 2: δ = P × L³ ÷ (48 × E × I) = 10,000 × 64 ÷ (48 × 200 × 10⁹ × 66.67 × 10⁻⁶) = 640,000 ÷ 640,032,000 ≈ 0.001 m = 1.0 mm.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A 2 kN load acts at the free end of a 3 m cantilever. E = 200 GPa, I = 66.67 × 10⁶ mm⁴. Find the deflection at the free end.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: For a cantilever end load, δ = P × L³ ÷ (3 × E × I). Step 2: δ = 2,000 × 27 ÷ (3 × 200 × 10⁹ × 66.67 × 10⁻⁶) = 54,000 ÷ 40,002,000 ≈ 0.00135 m = 1.35 mm.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A 4 m beam carries a UDL of 5 kN/m. E = 200 GPa, I = 66.67 × 10⁶ mm⁴. Find the maximum deflection.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: δ = 5 × w × L⁴ ÷ (384 × E × I). Step 2: δ = 5 × 5,000 × 256 ÷ (384 × 200 × 10⁹ × 66.67 × 10⁻⁶) = 6,400,000 ÷ 5,120,256,000 ≈ 0.00125 m = 1.25 mm.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A beam's span is doubled from 4 m to 8 m, with the same load and the same section. By what factor does the deflection increase (central point load)?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Deflection depends on L³ for a central point load. Step 2: Doubling L multiplies the deflection by 2³ = 8. Step 3: The beam would sag eight times as much — which is why long spans need much deeper sections.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A steel beam has a yield strength of 250 MPa and a factor of safety of 2.5. What is the allowable stress?",
      "choices": [
        "250 MPa",
        "100 MPa",
        "625 MPa",
        "25 MPa"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Allowable = 250 ÷ 2.5 = 100 MPa. (a) 250 MPa is the yield — using it as the allowable forgets the factor of safety. (c) 625 MPa multiplies instead of dividing. (d) 25 MPa divides by 10."
    },
    {
      "q": "A beam has a maximum moment of 40 kN·m and an allowable stress of 100 MPa. What section modulus is required?",
      "choices": [
        "400 mm³",
        "40,000 mm³",
        "400,000 mm³",
        "4,000,000 mm³"
      ],
      "answer": 2,
      "explanation": "Correct: (c). S = 40 × 10⁶ ÷ 100 = 400,000 mm³. (a) 400 mm³ is a million times too small. (b) 40,000 mm³ is ten times too small. (d) 4,000,000 mm³ is ten times too big."
    },
    {
      "q": "A 10 kN load acts at the middle of a 4 m simply supported beam (E = 200 GPa, I = 66.67 × 10⁶ mm⁴). What is the deflection?",
      "choices": [
        "10 mm",
        "1.0 mm",
        "0.1 mm",
        "100 mm"
      ],
      "answer": 1,
      "explanation": "Correct: (b). δ = 10,000 × 64 ÷ (48 × 200 × 10⁹ × 66.67 × 10⁻⁶) ≈ 1.0 mm. (a) 10 mm is ten times too big. (c) 0.1 mm is ten times too small. (d) 100 mm is a hundred times too big."
    },
    {
      "q": "What is the deflection formula for a cantilever with an end load P?",
      "choices": [
        "δ = PL³ ÷ (48EI)",
        "δ = PL³ ÷ (3EI)",
        "δ = 5wL⁴ ÷ (384EI)",
        "δ = PL ÷ (AE)"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A cantilever end load deflects by PL³ ÷ (3EI). (a) is the simply supported central load. (c) is the UDL. (d) is axial deformation, not bending."
    },
    {
      "q": "A beam's span is doubled with the same load and section. By what factor does the deflection increase (central point load)?",
      "choices": [
        "2",
        "4",
        "8",
        "16"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Deflection depends on L³, so doubling the span multiplies it by 2³ = 8. (a) 2 would be a linear relationship. (b) 4 is L². (d) 16 is L⁴ — the UDL case."
    },
    {
      "q": "Why can a beam be strong enough but still fail as a design?",
      "choices": [
        "Because it is too heavy",
        "Because it deflects too much — serviceability (sag, bounce) can govern over strength",
        "Because the factor of safety is too high",
        "Because the reactions are wrong"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A beam that holds the load but sags too much is unusable — deflection can govern. (a) is wrong: weight is not a failure. (c) is wrong: a high factor of safety makes it safer. (d) is wrong: wrong reactions are an analysis error, not a design failure."
    },
    {
      "q": "What does the factor of safety cover?",
      "choices": [
        "Only the material's weakness",
        "Uncertainty: loads bigger than expected, material weaker than specified, imperfect workmanship, approximate analysis",
        "Only the load",
        "Nothing — it is just a tradition"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The factor of safety is a margin against everything you do not know. (a) and (c) each cover only one part. (d) is wrong: it is a real engineering margin."
    },
    {
      "q": "A 4 m beam carries a UDL of 5 kN/m (E = 200 GPa, I = 66.67 × 10⁶ mm⁴). What is the maximum deflection?",
      "choices": [
        "1.25 mm",
        "12.5 mm",
        "0.125 mm",
        "5 mm"
      ],
      "answer": 0,
      "explanation": "Correct: (a). δ = 5 × 5,000 × 256 ÷ (384 × 200 × 10⁹ × 66.67 × 10⁻⁶) ≈ 1.25 mm. (b) 12.5 mm is ten times too big. (c) 0.125 mm is ten times too small. (d) 5 mm is the load number."
    }
  ],
  "studyGuide": "<h2>Module 11 — Beam Design, Deflection & Factor of Safety: Study Guide</h2><p>Allowable stress = yield ÷ FS. Size by S(required) = M(max) ÷ σ(allowable). Deflection: central load δ = PL³ ÷ (48EI); cantilever δ = PL³ ÷ (3EI); UDL δ = 5wL⁴ ÷ (384EI).</p><p><strong>Key terms:</strong> Factor of safety · Allowable stress · Section modulus · Deflection</p><p><strong>Remember:</strong></p><ul><li>Allowable = yield ÷ FS.</li><li>S(required) = M(max) ÷ σ(allowable).</li><li>Deflection depends on L³ or L⁴ — span dominates.</li><li>Check both strength and deflection.</li></ul>"
};
