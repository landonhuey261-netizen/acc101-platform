// egr106 - Module 7: Centroids & Moment of Inertia
module.exports = {
  "number": 7,
  "slug": "centroids-moment-of-inertia",
  "title": "Centroids & Moment of Inertia",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a centroid is and find the centroid of a composite shape.",
    "Use I = bh³ ÷ 12 for a rectangle about its own centroidal axis.",
    "Use the parallel axis theorem: I = I(centroid) + A × d².",
    "Find the moment of inertia of a T-section and an I-beam.",
    "Explain why moment of inertia matters: it controls how much a beam bends."
  ],
  "sections": [
    {
      "heading": "Centroid: The Balance Point of an Area",
      "html": "<p>The centroid of a shape is its balance point — the point where the area would balance on a pin. For a rectangle it is the centre; for a composite shape (a T, an I, an L) it is the weighted average of the parts: <strong>ȳ = Σ(A × y) ÷ ΣA</strong>, where y is the distance of each part's own centroid from a reference line. Example: a T-section with a 100 × 20 mm flange on top of a 20 × 80 mm web. Take the bottom as the reference. The web's area is 20 × 80 = 1,600 mm², its centroid 40 mm from the bottom. The flange's area is 100 × 20 = 2,000 mm², its centroid 90 mm from the bottom. ȳ = (1,600 × 40 + 2,000 × 90) ÷ (1,600 + 2,000) = (64,000 + 180,000) ÷ 3,600 = 244,000 ÷ 3,600 ≈ 67.8 mm from the bottom. The centroid sits closer to the flange, because the flange has more area.</p>\n<p>Why it matters: bending stress is measured from the neutral axis, which passes through the centroid. If the centroid is wrong, every stress and deflection that follows is wrong.</p>\n"
    },
    {
      "heading": "Moment of Inertia: Resistance to Bending",
      "html": "<p>The second moment of area — the moment of inertia, I — measures how a shape's area is spread away from an axis. Area far from the axis counts for much more than area near it, because I depends on distance squared. For a rectangle about its own centroidal axis: <strong>I = b × h³ ÷ 12</strong>, where h is the dimension in the bending direction. Example: a 100 mm wide × 200 mm deep rectangle. I = 100 × 200³ ÷ 12 = 100 × 8,000,000 ÷ 12 ≈ 66.67 × 10⁶ mm⁴. Turn the same rectangle on its side (200 mm wide × 100 mm deep) and I = 200 × 100³ ÷ 12 ≈ 16.67 × 10⁶ mm⁴ — four times smaller. A beam is always used with its deep dimension vertical, because depth cubed is what buys stiffness.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> I = bh³ ÷ 12 for a rectangle. Depth matters as the cube: doubling the depth multiplies I by eight. That is why beams are deep and I-beams put most of their area in the flanges, far from the neutral axis.</div></p>\n"
    },
    {
      "heading": "The Parallel Axis Theorem",
      "html": "<p>When a part's own centroid is not on the axis you need, the parallel axis theorem moves it: <strong>I = I(centroid) + A × d²</strong>, where d is the distance between the two parallel axes. The A × d² term is usually far bigger than the part's own I — for a flange, the own I (100 × 10³ ÷ 12 ≈ 8,333 mm⁴) is nothing next to A × d² (1,000 × 95² = 9,025,000 mm⁴). That is the whole secret of the I-beam: the flanges are far from the neutral axis, so their A × d² dominates, and the thin web just holds them apart.</p>\n<p>Worked example: an I-beam 200 mm deep, with 100 × 10 mm flanges and a 6 × 180 mm web. Web: I = 6 × 180³ ÷ 12 = 2,916,000 mm⁴. Each flange: own I ≈ 8,333 mm⁴ plus A × d² = 1,000 × 95² = 9,025,000 mm⁴, so ≈ 9,033,333 mm⁴. Total I = 2,916,000 + 2 × 9,033,333 ≈ 20.98 × 10⁶ mm⁴. An I-beam with the same area as a solid rectangle has several times the moment of inertia — which is why real beams are I-shaped.</p>\n"
    },
    {
      "heading": "From I to Bending",
      "html": "<p>Moment of inertia is the bridge to the next modules: bending stress is σ = M × y ÷ I, and deflection is proportional to 1 ÷ (E × I). A bigger I means less stress and less deflection for the same load. When you size a beam in Module 11, you are really choosing an I big enough to keep the stress below the allowable and the deflection below the limit. The shape of the cross-section is a design decision, not a given.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Centroid: ȳ = Σ(A × y) ÷ ΣA — the balance point of the area.</li><li>Rectangle: I = bh³ ÷ 12, with h the depth in the bending direction.</li><li>Parallel axis theorem: I = I(centroid) + A × d².</li><li>Depth matters as the cube; an I-beam's flanges dominate through A × d².</li><li>Example: T-section (100 × 20 flange, 20 × 80 web) has ȳ ≈ 67.8 mm from the bottom; the I-beam above has Ix ≈ 20.98 × 10⁶ mm⁴.</li></ul></p>\n<p><strong>Common mistake:</strong> Using the wrong h in bh³ ÷ 12. h is the dimension parallel to the bending direction (the depth), not the width. A beam on its side loses three-quarters of its stiffness.</p>\n<p><strong>Common mistake:</strong> Forgetting the A × d² term. A part's own I is tiny; the distance term is usually the whole answer.</p>\n<p><strong>Ready check:</strong> If you can find the centroid of the T-section (67.8 mm) and the I of a 100 × 200 mm rectangle (66.67 × 10⁶ mm⁴), you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Centroid",
      "def": "The balance point of an area: ȳ = Σ(A × y) ÷ ΣA."
    },
    {
      "term": "Neutral axis",
      "def": "The axis through the centroid about which a beam bends; bending stress is zero there."
    },
    {
      "term": "Moment of inertia (I)",
      "def": "The second moment of area: how a shape's area is spread from an axis. Units mm⁴."
    },
    {
      "term": "Second moment of area",
      "def": "Another name for the moment of inertia."
    },
    {
      "term": "Parallel axis theorem",
      "def": "I = I(centroid) + A × d²: the moment of inertia about any axis parallel to a centroidal axis."
    },
    {
      "term": "Composite shape",
      "def": "A shape made of two or more simple rectangles, analysed part by part."
    },
    {
      "term": "Flange",
      "def": "The horizontal top and bottom plates of an I-beam."
    },
    {
      "term": "Web",
      "def": "The vertical plate of an I-beam, joining the flanges."
    },
    {
      "term": "Section modulus (S)",
      "def": "S = I ÷ c: the moment of inertia divided by the distance to the farthest fibre."
    },
    {
      "term": "Radius of gyration",
      "def": "r = √(I ÷ A): a measure of how spread out an area is; used in column buckling."
    },
    {
      "term": "Polar moment of inertia (J)",
      "def": "The moment of inertia about an axis perpendicular to the cross-section; used for torsion."
    },
    {
      "term": "First moment of area (Q)",
      "def": "Q = A' × ȳ': the first moment of the area above (or below) a point; used for shear stress."
    }
  ],
  "video": {
    "title": "Example: 18-1 Moment of Inertia Calculation for an I-Beam | Structures",
    "embedUrl": "https://www.youtube.com/embed/Ag7XpNqEUqs",
    "note": "A full moment-of-inertia calculation for an I-beam, step by step, using the parallel axis theorem.",
    "more": [
      {
        "title": "Understanding Moment of Inertia | An Engineer's Guide to using Hand Calculations & Software | The Efficient Engineer",
        "url": "https://www.youtube.com/watch?v=BGBUps5pJyY"
      },
      {
        "title": "Understanding Shear Force and Bending Moment Diagrams | The Efficient Engineer",
        "url": "https://www.youtube.com/watch?v=C-FEVzI8oe8"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Find the centroid (ȳ from the bottom) of a T-section with a 100 × 20 mm flange on top of a 20 × 80 mm web.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Web: A = 20 × 80 = 1,600 mm², centroid 40 mm from the bottom. Step 2: Flange: A = 100 × 20 = 2,000 mm², centroid 90 mm from the bottom. Step 3: ȳ = (1,600 × 40 + 2,000 × 90) ÷ 3,600 = 244,000 ÷ 3,600 ≈ 67.8 mm from the bottom.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Find the moment of inertia of a 100 mm wide × 200 mm deep rectangle about its own horizontal centroidal axis.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: I = b × h³ ÷ 12, with h = 200 mm (the depth). Step 2: I = 100 × 200³ ÷ 12 = 100 × 8,000,000 ÷ 12 ≈ 66.67 × 10⁶ mm⁴.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> The same 100 × 200 mm rectangle is turned on its side (200 mm wide × 100 mm deep). What is I now, and what does that tell you?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: I = 200 × 100³ ÷ 12 = 200 × 1,000,000 ÷ 12 ≈ 16.67 × 10⁶ mm⁴. Step 2: That is one quarter of the upright value — a beam on its side is four times less stiff. Step 3: Always use a beam with its deep dimension vertical.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Find the moment of inertia of an I-beam 200 mm deep, with 100 × 10 mm flanges and a 6 × 180 mm web, about its horizontal centroidal axis.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Web: I = 6 × 180³ ÷ 12 = 2,916,000 mm⁴. Step 2: Each flange: own I = 100 × 10³ ÷ 12 ≈ 8,333 mm⁴, plus A × d² = 1,000 × 95² = 9,025,000 mm⁴, so ≈ 9,033,333 mm⁴. Step 3: Total I = 2,916,000 + 2 × 9,033,333 ≈ 20.98 × 10⁶ mm⁴.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A rectangle has I = 66.67 × 10⁶ mm⁴ about its centroidal axis. What is its moment of inertia about an axis 50 mm away from the centroidal axis? (The rectangle is 100 × 200 mm, area 20,000 mm².)</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Parallel axis theorem: I = I(centroid) + A × d². Step 2: A × d² = 20,000 × 50² = 20,000 × 2,500 = 50 × 10⁶ mm⁴. Step 3: I = 66.67 × 10⁶ + 50 × 10⁶ = 116.67 × 10⁶ mm⁴.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Two beams have the same cross-sectional area. One is a solid rectangle 100 × 200 mm (I ≈ 66.67 × 10⁶ mm⁴); the other is an I-beam with the same area but its flanges far from the neutral axis (I ≈ 20.98 × 10⁶ mm⁴ in the example — wait, which is stiffer?). Explain the apparent contradiction.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: There is no contradiction — the example I-beam has a much smaller area than the solid rectangle (flanges 2 × 1,000 + web 1,080 = 3,080 mm², versus 20,000 mm²), so its I is smaller in absolute terms. Step 2: The fair comparison is I per unit area: the I-beam gets far more stiffness per kilogram of steel, because its area sits far from the neutral axis. Step 3: That is why real beams are I-shaped — the same steel, placed farther from the axis, resists bending far better.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A T-section has a 100 × 20 mm flange on a 20 × 80 mm web. What is its centroid height (ȳ) from the bottom?",
      "choices": [
        "50 mm",
        "67.8 mm",
        "90 mm",
        "40 mm"
      ],
      "answer": 1,
      "explanation": "Correct: (b). ȳ = (1,600 × 40 + 2,000 × 90) ÷ 3,600 ≈ 67.8 mm. (a) 50 mm is the mid-height, not the centroid. (c) 90 mm is the flange's centroid. (d) 40 mm is the web's centroid."
    },
    {
      "q": "What is the moment of inertia of a 100 mm wide × 200 mm deep rectangle about its horizontal centroidal axis?",
      "choices": [
        "16.67 × 10⁶ mm⁴",
        "66.67 × 10⁶ mm⁴",
        "200 × 10⁶ mm⁴",
        "6.67 × 10⁶ mm⁴"
      ],
      "answer": 1,
      "explanation": "Correct: (b). I = 100 × 200³ ÷ 12 ≈ 66.67 × 10⁶ mm⁴. (a) is the value with the rectangle on its side. (c) is wrong. (d) is ten times too small."
    },
    {
      "q": "The same rectangle is turned on its side (200 wide × 100 deep). What is I now?",
      "choices": [
        "66.67 × 10⁶ mm⁴",
        "16.67 × 10⁶ mm⁴",
        "33.33 × 10⁶ mm⁴",
        "100 × 10⁶ mm⁴"
      ],
      "answer": 1,
      "explanation": "Correct: (b). I = 200 × 100³ ÷ 12 ≈ 16.67 × 10⁶ mm⁴ — a quarter of the upright value. (a) is the upright value. (c) is half. (d) is wrong."
    },
    {
      "q": "What does the parallel axis theorem say?",
      "choices": [
        "I = bh³ ÷ 12",
        "I = I(centroid) + A × d²",
        "I = A × d",
        "I = I(centroid) − A × d²"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The moment of inertia about a parallel axis is the centroidal I plus A × d². (a) is the rectangle formula. (c) is the first moment, not the second. (d) has the wrong sign."
    },
    {
      "q": "In the I-beam example (200 mm deep, 100 × 10 mm flanges, 6 × 180 mm web), which part contributes most to the moment of inertia?",
      "choices": [
        "The web's own I",
        "The flanges' A × d² term",
        "The flanges' own I",
        "The web's A × d² term"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Each flange contributes about 9,025,000 mm⁴ through A × d², dwarfing everything else. (a) the web's own I is 2,916,000 mm⁴. (c) the flanges' own I is only about 8,333 mm⁴ each. (d) the web's centroid is on the axis, so its d is zero."
    },
    {
      "q": "What is the moment of inertia of the I-beam in that example?",
      "choices": [
        "2.92 × 10⁶ mm⁴",
        "20.98 × 10⁶ mm⁴",
        "66.67 × 10⁶ mm⁴",
        "9.03 × 10⁶ mm⁴"
      ],
      "answer": 1,
      "explanation": "Correct: (b). I = 2,916,000 + 2 × 9,033,333 ≈ 20.98 × 10⁶ mm⁴. (a) is the web alone. (c) is the solid rectangle. (d) is one flange alone."
    },
    {
      "q": "Why are beams used with their deep dimension vertical?",
      "choices": [
        "Because they look better",
        "Because I depends on depth cubed, so a deep beam is far stiffer",
        "Because the centroid moves",
        "Because the area is bigger"
      ],
      "answer": 1,
      "explanation": "Correct: (b). I = bh³ ÷ 12, so doubling the depth multiplies I by eight. (a) is not an engineering reason. (c) is wrong: the centroid stays at mid-depth. (d) is wrong: the area is the same."
    },
    {
      "q": "What is the section modulus S of a 100 × 200 mm rectangle?",
      "choices": [
        "66,667 mm³",
        "666,667 mm³",
        "6,666,667 mm³",
        "66,667,000 mm³"
      ],
      "answer": 1,
      "explanation": "Correct: (b). S = I ÷ c = 66.67 × 10⁶ ÷ 100 = 666,667 mm³. (a) is ten times too small. (c) is ten times too big. (d) is the moment of inertia itself."
    }
  ],
  "studyGuide": "<h2>Module 7 — Centroids & Moment of Inertia: Study Guide</h2><p>Centroid: ȳ = Σ(A × y) ÷ ΣA. Rectangle: I = bh³ ÷ 12. Parallel axis: I = I(centroid) + A × d². Depth matters as the cube.</p><p><strong>Key terms:</strong> Centroid · Neutral axis · Moment of inertia · Parallel axis theorem</p><p><strong>Remember:</strong></p><ul><li>ȳ = Σ(A × y) ÷ ΣA.</li><li>I = bh³ ÷ 12, h = depth in the bending direction.</li><li>I = I(centroid) + A × d² — the distance term usually dominates.</li><li>Beams are deep because depth is cubed.</li></ul>"
};
