// egr106 - Module 12: Fasteners, Joints & Columns
module.exports = {
  "number": 12,
  "slug": "fasteners-joints-and-columns",
  "title": "Fasteners, Joints & Columns",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how a bolted joint carries load: shear, tension, and bearing.",
    "Find the shear stress in a bolt in single and double shear.",
    "Find the bearing stress between a bolt and a plate.",
    "Explain column buckling and use Euler's formula: P(cr) = π² × E × I ÷ (K × L)².",
    "Explain why a column's end conditions (K) matter so much."
  ],
  "sections": [
    {
      "heading": "Bolted Joints: Three Ways a Bolt Can Fail",
      "html": "<p>A bolted joint holds two plates together, and a bolt can fail in three ways. First, shear: the plates slide past each other and cut the bolt across its cross-section. A bolt in single shear has one shear plane; in double shear (a middle plate pulled one way, two outer plates the other) it has two, so the same force gives half the stress. Second, tension: the bolt is pulled along its length, and the stress is the force divided by the bolt's cross-sectional area. Third, bearing: the bolt presses against the side of its hole in the plate, and the bearing stress is the force divided by the projected area (bolt diameter × plate thickness). A joint is safe only if all three checks pass.</p>\n<p>Example: a 10 kN force on a 12 mm bolt in double shear. One shear plane has A = π × 12² ÷ 4 ≈ 113.1 mm²; with two planes, τ = 10,000 ÷ (2 × 113.1) ≈ 44.2 MPa. The same bolt in single shear with a 5 kN force on an 8 mm bolt: A = π × 8² ÷ 4 ≈ 50.3 mm², τ = 5,000 ÷ 50.3 ≈ 99.5 MPa. And a bolt in tension: a 10 kN pull on an 8 mm bolt gives σ = 10,000 ÷ 50.3 ≈ 199 MPa — near the yield of a common bolt, which is why bolt grades matter.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Check a bolted joint three ways: shear (τ = P ÷ (n × A)), tension (σ = P ÷ A), and bearing (σ = P ÷ (d × t)). Double shear halves the shear stress.</div></p>\n"
    },
    {
      "heading": "Reading Bolt Markings and Preload",
      "html": "<p>Bolt heads carry markings that say how strong the bolt is — for example, an 8.8 marking means a tensile strength of 800 MPa and a yield of 80% of that (640 MPa). Using a weak bolt where a strong one is needed is a common and dangerous mistake, and the markings are the only way to tell them apart once they are in a box together. Always match the bolt grade to the design.</p>\n<p>Bolts are usually tightened to a preload: the tightening stretches the bolt elastically, and the stretched bolt clamps the plates together with a known force. The clamping friction then carries much of the shear, so the bolt itself sees less. A bolt that is not preloaded — or one that has yielded from over-tightening — will not hold its clamp, and the joint will slip and work loose. Torque wrenches exist for a reason: “tight enough” is not a specification.</p>\n"
    },
    {
      "heading": "Columns and Buckling: Euler's Formula",
      "html": "<p>A short, fat column fails by crushing: the stress reaches yield. A long, slender column fails differently — it buckles, bending sideways at a load far below the crushing load. Buckling is a stability failure, not a strength failure, and it is sudden: the column looks fine, then bows out and collapses. Euler's formula gives the critical buckling load: <strong>P(cr) = π² × E × I ÷ (K × L)²</strong>, where I is the smallest moment of inertia of the cross-section (the column buckles about its weakest axis), L is the length, and K is the effective-length factor set by the end conditions.</p>\n<p>Example: a steel column (E = 200 GPa) with I = 1.0 × 10⁶ mm⁴ (= 1.0 × 10⁻⁶ m⁴), length 3 m, pinned at both ends (K = 1). P(cr) = π² × 200 × 10⁹ × 1.0 × 10⁻⁶ ÷ 3² = 9.8696 × 200,000 ÷ 9 ≈ 219,300 N ≈ 219 kN. The same column with both ends fixed (K = 0.5) has an effective length of 1.5 m, and P(cr) = 219 × 4 ≈ 877 kN — four times higher. End conditions are not a detail: they change the answer by a factor of four.</p>\n"
    },
    {
      "heading": "Slenderness and Safe Column Design",
      "html": "<p>Whether a column crushes or buckles depends on its slenderness: the ratio of its effective length to its radius of gyration (r = √(I ÷ A)). A stocky column crushes; a slender column buckles. Euler's formula only applies to long, slender columns — for short ones, the crushing load (yield × area) is lower and governs. Real design uses code formulas that blend the two, with a factor of safety on top. The practical lessons: make columns stocky where you can, brace them so their effective length is short, and never assume a column is as strong as its cross-section suggests — buckling is the silent failure mode.</p>\n<p>Safety note: nothing in this course qualifies you to design a real column, beam, or joint. Real structures are designed to codes by qualified engineers, with factors of safety, load combinations, and inspections. This course teaches you to understand the numbers and to spot when something is wrong — not to sign off on a structure.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>A bolted joint must be checked in shear (τ = P ÷ (n × A)), tension (σ = P ÷ A), and bearing (σ = P ÷ (d × t)).</li><li>Double shear halves the shear stress; bolt grades (e.g. 8.8) say how strong the bolt is.</li><li>Columns buckle: P(cr) = π²EI ÷ (KL)². Buckling is sudden and uses the smallest I.</li><li>Example: E = 200 GPa, I = 1.0 × 10⁶ mm⁴, L = 3 m, K = 1 → P(cr) ≈ 219 kN; with K = 0.5 → ≈ 877 kN.</li><li>End conditions change the buckling load by a factor of four — they are not a detail.</li><li>Real structures are designed to codes by qualified engineers; this course teaches understanding, not sign-off.</li></ul></p>\n<p><strong>Common mistake:</strong> Using the largest I in Euler's formula. A column buckles about its weakest axis, so use the smallest I.</p>\n<p><strong>Common mistake:</strong> Forgetting the K factor, or using K = 1 for a fixed-ended column. K = 1 is pinned-pinned; K = 0.5 is fixed-fixed; K = 0.7 is fixed-pinned; K = 2 is fixed-free.</p>\n<p><strong>Ready check:</strong> If you can find the shear stress of a 10 kN, 12 mm bolt in double shear (44.2 MPa) and the buckling load of the 3 m column (219 kN, K = 1), you have this module — and this course.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Bolted joint",
      "def": "A connection held together by bolts, checked in shear, tension, and bearing."
    },
    {
      "term": "Single shear",
      "def": "A bolt cut across one plane; τ = P ÷ A."
    },
    {
      "term": "Double shear",
      "def": "A bolt cut across two planes; τ = P ÷ (2 × A) — half the stress."
    },
    {
      "term": "Bearing stress",
      "def": "The stress where a bolt presses on its hole: σ = P ÷ (d × t)."
    },
    {
      "term": "Bolt grade",
      "def": "The strength marking on a bolt head (e.g. 8.8 = 800 MPa tensile, 640 MPa yield)."
    },
    {
      "term": "Preload",
      "def": "The tension put into a bolt by tightening, clamping the joint together."
    },
    {
      "term": "Buckling",
      "def": "The sudden sideways bending of a slender column under compression, below the crushing load."
    },
    {
      "term": "Euler's formula",
      "def": "P(cr) = π² × E × I ÷ (K × L)²: the critical buckling load of a column."
    },
    {
      "term": "Effective length factor (K)",
      "def": "A factor for the end conditions: 1.0 pinned-pinned, 0.5 fixed-fixed, 0.7 fixed-pinned, 2.0 fixed-free."
    },
    {
      "term": "Radius of gyration (r)",
      "def": "r = √(I ÷ A); slenderness is the effective length divided by r."
    },
    {
      "term": "Slenderness ratio",
      "def": "Effective length ÷ radius of gyration; decides whether a column crushes or buckles."
    },
    {
      "term": "Torsion",
      "def": "Twisting: a shaft under torque has shear stress τ = T × r ÷ J."
    }
  ],
  "video": {
    "title": "The Incredible Strength of Bolted Joints | The Engineering Mindset",
    "embedUrl": "https://www.youtube.com/embed/XLzTB4KLCxU",
    "note": "How bolted joints actually carry load — shear, tension, bearing, and why preload matters.",
    "more": [
      {
        "title": "How to Read Bolt Head Markings? (Don't Make This Fatal Mistake!) | The Engineering Mindset",
        "url": "https://www.youtube.com/watch?v=PdRk_cEtcW0"
      },
      {
        "title": "WP 6.4.3-SZL | Structures",
        "url": "https://www.youtube.com/watch?v=ZCukuoLmK0Q"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 10 kN force acts on a 12 mm bolt in double shear. Find the shear stress.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: One shear plane: A = π × 12² ÷ 4 ≈ 113.1 mm². Step 2: Double shear means two planes: τ = 10,000 ÷ (2 × 113.1) ≈ 44.2 MPa.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A 5 kN force acts on an 8 mm bolt in single shear. Find the shear stress.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A = π × 8² ÷ 4 ≈ 50.3 mm². Step 2: Single shear, one plane: τ = 5,000 ÷ 50.3 ≈ 99.5 MPa.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 10 kN force presses a 12 mm bolt against a 10 mm thick plate. Find the bearing stress.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Projected area = d × t = 12 × 10 = 120 mm². Step 2: σ(bearing) = 10,000 ÷ 120 ≈ 83.3 MPa.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A steel column (E = 200 GPa) has I = 1.0 × 10⁶ mm⁴ and a length of 3 m, pinned at both ends (K = 1). Find the Euler buckling load.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Convert I: 1.0 × 10⁶ mm⁴ = 1.0 × 10⁻⁶ m⁴. Step 2: P(cr) = π² × E × I ÷ (K × L)² = 9.8696 × 200 × 10⁹ × 1.0 × 10⁻⁶ ÷ 9 = 1,973,920 ÷ 9 ≈ 219,300 N ≈ 219 kN.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> The same column is now fixed at both ends (K = 0.5). What is the buckling load, and why did it change?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Effective length = K × L = 0.5 × 3 = 1.5 m. Step 2: P(cr) = 9.8696 × 200,000 ÷ 1.5² = 1,973,920 ÷ 2.25 ≈ 877,300 N ≈ 877 kN. Step 3: It is four times higher because the effective length halved, and the load depends on length squared. Step 4: Fixed ends restrain the column from rotating, so it buckles in a shorter effective length.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A shaft 40 mm in diameter carries a torque of 500 N·m. Find the maximum shear stress. (J = π × d⁴ ÷ 32, τ = T × r ÷ J.)</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: J = π × (0.04)⁴ ÷ 32 = π × 2.56 × 10⁻⁶ ÷ 32 ≈ 2.51 × 10⁻⁷ m⁴. Step 2: r = 0.02 m. Step 3: τ = 500 × 0.02 ÷ 2.51 × 10⁻⁷ = 10 ÷ 2.51 × 10⁻⁷ ≈ 39.8 × 10⁶ Pa ≈ 39.8 MPa.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A 10 kN force acts on a 12 mm bolt in double shear. What is the shear stress?",
      "choices": [
        "88.4 MPa",
        "44.2 MPa",
        "22.1 MPa",
        "10 MPa"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A = 113.1 mm² per plane; τ = 10,000 ÷ (2 × 113.1) ≈ 44.2 MPa. (a) 88.4 MPa is the single-shear value. (c) 22.1 MPa halves it again. (d) is the force number."
    },
    {
      "q": "A 5 kN force acts on an 8 mm bolt in single shear. What is the shear stress?",
      "choices": [
        "49.7 MPa",
        "99.5 MPa",
        "199 MPa",
        "5 MPa"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A = 50.3 mm²; τ = 5,000 ÷ 50.3 ≈ 99.5 MPa. (a) 49.7 MPa is the double-shear value. (c) 199 MPa is the tensile stress for a 10 kN pull. (d) is the force number."
    },
    {
      "q": "A 10 kN force presses a 12 mm bolt against a 10 mm thick plate. What is the bearing stress?",
      "choices": [
        "83.3 MPa",
        "44.2 MPa",
        "10 MPa",
        "120 MPa"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Projected area = 12 × 10 = 120 mm²; σ = 10,000 ÷ 120 ≈ 83.3 MPa. (b) is the double-shear stress. (c) is the force number. (d) is the area number."
    },
    {
      "q": "A steel column (E = 200 GPa, I = 1.0 × 10⁶ mm⁴, L = 3 m, K = 1) buckles at what load?",
      "choices": [
        "877 kN",
        "219 kN",
        "55 kN",
        "440 kN"
      ],
      "answer": 1,
      "explanation": "Correct: (b). P(cr) = π² × 200 × 10⁹ × 1.0 × 10⁻⁶ ÷ 9 ≈ 219 kN. (a) 877 kN is the fixed-fixed value (K = 0.5). (c) 55 kN is a quarter. (d) 440 kN doubles it."
    },
    {
      "q": "The same column is fixed at both ends (K = 0.5). What is the buckling load?",
      "choices": [
        "219 kN",
        "438 kN",
        "877 kN",
        "110 kN"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Effective length halves to 1.5 m, and the load depends on length squared, so it quadruples: 219 × 4 ≈ 877 kN. (a) is the pinned-pinned value. (b) doubles it. (d) halves it."
    },
    {
      "q": "Why must you use the smallest moment of inertia in Euler's formula?",
      "choices": [
        "Because the column is weakest that way",
        "Because a column buckles about its weakest axis — the axis with the smallest I",
        "Because the largest I is for bending, not buckling",
        "Because the formula requires it by definition"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Buckling happens about the axis with the least resistance — the smallest I. (a) is vague. (c) is wrong: I is I, whichever axis. (d) is not a reason."
    },
    {
      "q": "What does a bolt head marking of 8.8 mean?",
      "choices": [
        "The bolt is 8.8 mm in diameter",
        "Tensile strength 800 MPa and yield 80% of that (640 MPa)",
        "The bolt needs 8.8 Nm of torque",
        "The bolt is grade 8, size 8"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The first number is the tensile strength in hundreds of MPa; the second is the yield ratio. (a) is wrong: the marking is not a size. (c) is wrong: it is not a torque. (d) is wrong: that is not how the marking reads."
    },
    {
      "q": "A shaft 40 mm in diameter carries a torque of 500 N·m. What is the maximum shear stress?",
      "choices": [
        "19.9 MPa",
        "39.8 MPa",
        "79.6 MPa",
        "500 MPa"
      ],
      "answer": 1,
      "explanation": "Correct: (b). J = π × 0.04⁴ ÷ 32 ≈ 2.51 × 10⁻⁷ m⁴; τ = 500 × 0.02 ÷ 2.51 × 10⁻⁷ ≈ 39.8 MPa. (a) 19.9 MPa halves it. (c) 79.6 MPa doubles it. (d) is the torque number."
    }
  ],
  "studyGuide": "<h2>Module 12 — Fasteners, Joints & Columns: Study Guide</h2><p>Check a bolt in shear, tension, and bearing. Columns buckle: P(cr) = π²EI ÷ (KL)², using the smallest I. End conditions change the answer by up to four times.</p><p><strong>Key terms:</strong> Bolted joint · Double shear · Bearing stress · Buckling · Euler</p><p><strong>Remember:</strong></p><ul><li>Shear: τ = P ÷ (n × A). Bearing: σ = P ÷ (d × t).</li><li>P(cr) = π²EI ÷ (KL)² — smallest I.</li><li>K = 1 pinned-pinned, 0.5 fixed-fixed, 0.7 fixed-pinned, 2 fixed-free.</li><li>Real structures are designed to codes by qualified engineers.</li></ul>"
};
