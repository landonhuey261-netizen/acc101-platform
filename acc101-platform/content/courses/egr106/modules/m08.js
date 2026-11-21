// egr106 - Module 8: Stress & Strain
module.exports = {
  "number": 8,
  "slug": "stress-and-strain",
  "title": "Stress & Strain",
  "estTime": "3–4 hours",
  "objectives": [
    "Define stress (force ÷ area) and strain (change in length ÷ original length).",
    "Use σ = P ÷ A to find axial stress, in MPa.",
    "Find strain from a measured extension.",
    "Explain the stress-strain curve: proportional limit, yield, ultimate, fracture.",
    "Tell tensile, compressive, and shear stress apart."
  ],
  "sections": [
    {
      "heading": "Stress: Force Spread Over Area",
      "html": "<p>Stress (σ, the Greek letter sigma) is force divided by area: <strong>σ = P ÷ A</strong>. Its unit is the pascal (Pa), which is one newton per square metre — a tiny unit, so engineers use the megapascal (MPa), which is one newton per square millimetre (1 MPa = 1 N/mm²). A 20 kN (20,000 N) pull on a 20 mm diameter bar: the area is π × 20² ÷ 4 ≈ 314.2 mm², so σ = 20,000 ÷ 314.2 ≈ 63.7 MPa tensile. The same force on a bar half the diameter gives four times the stress, because the area is a quarter — stress is brutally sensitive to size.</p>\n<p>Stress is not a force: a 20 kN force is safe on a thick bar and catastrophic on a thin one. What matters is the force per unit area. That is the whole idea of strength of materials.</p>\n"
    },
    {
      "heading": "Strain: How Much It Stretches",
      "html": "<p>Strain (ε, epsilon) is the change in length divided by the original length: <strong>ε = δ ÷ L</strong>. It has no units — millimetres per millimetre. A 2 m (2,000 mm) bar that stretches by 1 mm has a strain of 1 ÷ 2,000 = 0.0005. Strain is small, so it is often written in microstrain (µε): 0.0005 = 500 µε. A strain of 0.001 (0.1%) is already large for steel in the elastic range.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> σ = P ÷ A (MPa = N/mm²). ε = δ ÷ L (no units). Stress is the cause, strain is the effect — and the next module links them with Hooke's law.</div></p>\n"
    },
    {
      "heading": "The Stress-Strain Curve",
      "html": "<p>Pull a steel bar in a testing machine and plot stress against strain, and you get the stress-strain curve. At first the line is straight: stress proportional to strain (the elastic region). The top of the straight part is the proportional limit. Then the bar yields: it stretches a lot with little extra stress (the yield point, about 250 MPa for ordinary structural steel). Then it strain-hardens, climbing to the ultimate strength (about 400 MPa), then necks down and fractures. Unload in the elastic region and the bar springs back to its original length; unload after yielding and it stays permanently stretched.</p>\n<p>Different materials have different curves: aluminium yields gradually with no sharp yield point, cast iron is brittle and breaks with almost no yielding, and rubber stretches enormously at tiny stress. The curve is the material's fingerprint — and the reason a design must stay below yield, with a factor of safety.</p>\n"
    },
    {
      "heading": "Tension, Compression, and Shear",
      "html": "<p>Axial stress is either tensile (pulling apart, positive) or compressive (pushing together, negative). Most materials are weaker in compression when they are slender (they buckle — Module 12), but in a short block, compression is straightforward. Shear stress (τ, tau) is different: it acts parallel to a surface, not perpendicular to it. A bolt in single shear has one shear plane; in double shear it has two, so the same force gives half the shear stress. Shear stress in a beam is highest at the neutral axis and zero at the top and bottom — the opposite of bending stress.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>σ = P ÷ A; 1 MPa = 1 N/mm².</li><li>ε = δ ÷ L; strain has no units.</li><li>The stress-strain curve: elastic region, yield (~250 MPa for structural steel), ultimate (~400 MPa), fracture.</li><li>Below yield, unloading returns the bar to its original length; after yield, the stretch is permanent.</li><li>Shear stress acts parallel to the surface; a bolt in double shear has half the stress of single shear.</li></ul></p>\n<p><strong>Common mistake:</strong> Mixing up kN and N, or mm² and m². A 20 kN force is 20,000 N, and an area of 314 mm² is 314 × 10⁻⁶ m². Work in N and mm² to get MPa directly.</p>\n<p><strong>Common mistake:</strong> Using the diameter instead of the area. Stress needs the cross-sectional area (πd² ÷ 4), not the diameter. Doubling the diameter quarters the stress.</p>\n<p><strong>Ready check:</strong> If you can find the stress of a 20 kN pull on a 20 mm bar (63.7 MPa) and the strain of a 1 mm stretch over 2 m (0.0005), you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Stress (σ)",
      "def": "Force divided by area: σ = P ÷ A, measured in pascals (Pa) or megapascals (MPa)."
    },
    {
      "term": "Strain (ε)",
      "def": "Change in length divided by original length: ε = δ ÷ L. No units."
    },
    {
      "term": "Megapascal (MPa)",
      "def": "One million pascals; 1 MPa = 1 N/mm²."
    },
    {
      "term": "Tensile stress",
      "def": "Stress from a pulling force; positive by convention."
    },
    {
      "term": "Compressive stress",
      "def": "Stress from a pushing force; negative by convention."
    },
    {
      "term": "Shear stress (τ)",
      "def": "Stress acting parallel to a surface, not perpendicular to it."
    },
    {
      "term": "Proportional limit",
      "def": "The highest stress at which stress is still proportional to strain."
    },
    {
      "term": "Yield strength",
      "def": "The stress at which a material begins to deform permanently (about 250 MPa for structural steel)."
    },
    {
      "term": "Ultimate strength",
      "def": "The highest stress a material reaches before necking and fracture (about 400 MPa for structural steel)."
    },
    {
      "term": "Elastic region",
      "def": "The part of the stress-strain curve where unloading returns the material to its original length."
    },
    {
      "term": "Necking",
      "def": "The local narrowing of a bar just before fracture."
    },
    {
      "term": "Ductile",
      "def": "Able to deform a lot before breaking (steel); the opposite is brittle (cast iron, glass)."
    }
  ],
  "video": {
    "title": "An Introduction to Stress and Strain | The Efficient Engineer",
    "embedUrl": "https://www.youtube.com/embed/aQf6Q8t1FQE",
    "note": "Stress and strain from first principles: force over area, stretch over length, and the stress-strain curve.",
    "more": [
      {
        "title": "Mechanics of Materials: Lesson 9 - Stress Strain Diagram, Guaranteed for Exam 1! | Jeff Hanson",
        "url": "https://www.youtube.com/watch?v=P38xMOqvytU"
      },
      {
        "title": "Strength I: L-01 - Axial Stress & Strain | Structures",
        "url": "https://www.youtube.com/watch?v=9d0OpI6fV1A"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 20 kN tensile force acts on a steel bar 20 mm in diameter. Find the axial stress in MPa.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Area A = π × 20² ÷ 4 ≈ 314.2 mm². Step 2: σ = P ÷ A = 20,000 ÷ 314.2 ≈ 63.7 MPa tensile.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The same 20 kN force acts on a bar 10 mm in diameter. What is the stress, and how does it compare with Problem 1?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A = π × 10² ÷ 4 ≈ 78.5 mm². Step 2: σ = 20,000 ÷ 78.5 ≈ 254.6 MPa. Step 3: Halving the diameter quarters the area, so the stress is four times higher — 254.6 MPa versus 63.7 MPa.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 2 m steel bar stretches by 1 mm under load. What is the strain?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: ε = δ ÷ L. Step 2: ε = 1 ÷ 2,000 = 0.0005 (or 500 µε).</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A steel bar with a yield strength of 250 MPa has a cross-sectional area of 314.2 mm² (20 mm diameter). What load makes it yield, and what load makes it fail in tension if the ultimate strength is 400 MPa?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Yield load = 250 × 314.2 = 78,550 N ≈ 78.5 kN. Step 2: Ultimate load = 400 × 314.2 = 125,680 N ≈ 125.7 kN.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A bolt 12 mm in diameter carries 10 kN in double shear. What is the shear stress?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Area of one shear plane: A = π × 12² ÷ 4 ≈ 113.1 mm². Step 2: Double shear means two planes, so τ = 10,000 ÷ (2 × 113.1) ≈ 44.2 MPa.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A 1.5 m bar stretches by 2 mm under load. What is the strain, and what is the stress if E = 200 GPa? (Use σ = E × ε — the link from the next module.)</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: ε = 2 ÷ 1,500 ≈ 0.00133. Step 2: σ = E × ε = 200,000 MPa × 0.00133 ≈ 266.7 MPa. Step 3: That is above the 250 MPa yield of ordinary structural steel — this bar has yielded.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A 20 kN tensile force acts on a 20 mm diameter bar. What is the axial stress?",
      "choices": [
        "31.8 MPa",
        "63.7 MPa",
        "127 MPa",
        "20 MPa"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A = π × 20² ÷ 4 ≈ 314.2 mm²; σ = 20,000 ÷ 314.2 ≈ 63.7 MPa. (a) 31.8 MPa halves the answer. (c) 127 MPa doubles it. (d) 20 MPa is the force number, not a stress."
    },
    {
      "q": "A 2 m bar stretches by 1 mm. What is the strain?",
      "choices": [
        "0.0005",
        "0.005",
        "0.001",
        "0.5"
      ],
      "answer": 0,
      "explanation": "Correct: (a). ε = 1 ÷ 2,000 = 0.0005. (b) 0.005 is ten times too big. (c) 0.001 is double. (d) 0.5 is 1 ÷ 2 — using metres and millimetres inconsistently."
    },
    {
      "q": "What is 1 MPa in N/mm²?",
      "choices": [
        "1,000 N/mm²",
        "1 N/mm²",
        "0.001 N/mm²",
        "100 N/mm²"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 1 MPa = 1 N/mm² — the most useful conversion in this course. (a) is 1 GPa. (c) is 1 kPa. (d) is wrong."
    },
    {
      "q": "What happens at the yield point on a stress-strain curve?",
      "choices": [
        "The bar fractures",
        "The bar begins to deform permanently, stretching a lot with little extra stress",
        "The bar returns to its original length",
        "The stress drops to zero"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Yield is the start of permanent deformation. (a) is fracture, which comes later. (c) is what happens in the elastic region, before yield. (d) is wrong: stress does not drop to zero."
    },
    {
      "q": "A bolt 12 mm in diameter carries 10 kN in double shear. What is the shear stress?",
      "choices": [
        "88.4 MPa",
        "44.2 MPa",
        "22.1 MPa",
        "10 MPa"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A = π × 12² ÷ 4 ≈ 113.1 mm²; τ = 10,000 ÷ (2 × 113.1) ≈ 44.2 MPa. (a) 88.4 MPa is the single-shear value. (c) 22.1 MPa halves it again. (d) is the force number."
    },
    {
      "q": "If a bar's diameter is halved, what happens to the stress under the same force?",
      "choices": [
        "It halves",
        "It stays the same",
        "It doubles",
        "It quadruples"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Area depends on diameter squared, so halving the diameter quarters the area and quadruples the stress. (a) and (c) forget the square. (b) is wrong: stress depends on area."
    },
    {
      "q": "A steel bar yields at 250 MPa. A 20 mm diameter bar (area 314.2 mm²) carries 78.5 kN. Has it yielded?",
      "choices": [
        "No, it is well below yield",
        "Yes, it is just at yield",
        "No, it has fractured",
        "Yes, it is past ultimate"
      ],
      "answer": 1,
      "explanation": "Correct: (b). σ = 78,500 ÷ 314.2 ≈ 250 MPa — exactly the yield strength. (a) is wrong: 250 MPa is yield, not below it. (c) is wrong: fracture is at about 400 MPa. (d) is wrong: ultimate is higher still."
    },
    {
      "q": "What is the difference between tensile stress and shear stress?",
      "choices": [
        "Tensile stress acts perpendicular to the surface (pulling); shear stress acts parallel to the surface",
        "They are the same thing",
        "Tensile stress is always bigger",
        "Shear stress only acts on bolts"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Tensile stress pulls perpendicular to the cross-section; shear stress slides parallel to it. (b) is wrong: they are different. (c) is wrong: either can be bigger. (d) is wrong: shear stress acts in beams, shafts, and adhesives too."
    }
  ],
  "studyGuide": "<h2>Module 8 — Stress & Strain: Study Guide</h2><p>Stress is force over area: σ = P ÷ A (MPa = N/mm²). Strain is stretch over length: ε = δ ÷ L. The stress-strain curve runs elastic, yield, ultimate, fracture.</p><p><strong>Key terms:</strong> Stress · Strain · Yield strength · Ultimate strength · Shear stress</p><p><strong>Remember:</strong></p><ul><li>σ = P ÷ A; 1 MPa = 1 N/mm².</li><li>ε = δ ÷ L; strain has no units.</li><li>Yield ≈ 250 MPa, ultimate ≈ 400 MPa for structural steel.</li><li>Halving the diameter quadruples the stress.</li></ul>"
};
