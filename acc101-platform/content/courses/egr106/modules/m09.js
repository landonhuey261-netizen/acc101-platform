// egr106 - Module 9: Hooke's Law & Axial Deformation
module.exports = {
  "number": 9,
  "slug": "hookes-law-axial-deformation",
  "title": "Hooke's Law & Axial Deformation",
  "estTime": "3–4 hours",
  "objectives": [
    "State Hooke's law: σ = E × ε, and name E for steel (200 GPa).",
    "Use δ = P × L ÷ (A × E) to find how much a bar stretches.",
    "Find the stress from a measured strain.",
    "Explain what happens when the load is removed after yielding.",
    "Work out the deformation of a stepped bar (two sections in series)."
  ],
  "sections": [
    {
      "heading": "Hooke's Law: Stress Is Proportional to Strain",
      "html": "<p>In the elastic region, stress and strain are proportional: <strong>σ = E × ε</strong>, where E is Young's modulus (the modulus of elasticity). E is a property of the material, not the shape: for steel, E ≈ 200 GPa (200,000 MPa); for aluminium, about 70 GPa; for timber, about 10 GPa. A stiffer material (bigger E) stretches less under the same stress. Example: a steel bar with a strain of 0.0005 has a stress of σ = 200,000 × 0.0005 = 100 MPa.</p>\n<p>Hooke's law only holds in the elastic region — below the proportional limit. Above yield, the bar stretches far more than Hooke's law predicts, and the stretch is permanent. Every calculation in this module assumes the bar is still elastic, and you should always check that the stress is below yield before trusting the answer.</p>\n"
    },
    {
      "heading": "How Much Does a Bar Stretch?",
      "html": "<p>Combine σ = P ÷ A, ε = δ ÷ L, and σ = E × ε, and you get the axial deformation formula: <strong>δ = P × L ÷ (A × E)</strong>. Example: a 50 kN pull on a 2 m steel bar, 20 mm in diameter. A = 314.2 mm², E = 200,000 MPa. δ = 50,000 × 2,000 ÷ (314.2 × 200,000) = 100,000,000 ÷ 62,840,000 ≈ 1.59 mm. The bar stretches by about 1.6 mm — a small number, but exactly the kind of number that matters when a machine must fit together.</p>\n<p>Check the stress first: σ = 50,000 ÷ 314.2 ≈ 159 MPa, which is below the 250 MPa yield, so the elastic formula is valid. If the stress had been above yield, the real stretch would be much bigger than the formula says.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> δ = P × L ÷ (A × E). Longer bar, bigger load → more stretch. Bigger area, stiffer material → less stretch. Always check σ < yield before trusting the answer.</div></p>\n"
    },
    {
      "heading": "Stepped Bars and Thermal Expansion",
      "html": "<p>A stepped bar (two sections of different diameter in series) stretches by the sum of its parts: work out δ for each section with its own A and L, then add them. The force is the same through both sections (it is one bar), but the stress and the stretch are different in each. Example: a 30 kN pull on a 1.5 m bar, 16 mm in diameter. A = π × 16² ÷ 4 ≈ 201.1 mm². δ = 30,000 × 1,500 ÷ (201.1 × 200,000) = 45,000,000 ÷ 40,220,000 ≈ 1.12 mm.</p>\n<p>Temperature does the same thing without any force: a bar expands by δ = α × L × ΔT, where α is the coefficient of thermal expansion (about 12 × 10⁻⁶ per °C for steel). A 10 m steel beam heated by 30 °C grows by 12 × 10⁻⁶ × 10,000 × 30 = 3.6 mm. If the beam is prevented from expanding, the thermal stress is σ = E × α × ΔT = 200,000 × 12 × 10⁻⁶ × 30 = 72 MPa — a real stress, with no load applied. That is why bridges have expansion joints.</p>\n"
    },
    {
      "heading": "Unloading and Permanent Set",
      "html": "<p>Unload a bar that stayed elastic and it springs back to its original length — the strain was elastic. Unload a bar that yielded and it springs back only by the elastic part (σ ÷ E); the rest of the stretch stays as permanent set. That is how a bent nail stays bent, and how a bolt is preloaded: tighten it into the elastic region and it clamps the joint with a known force. Over-tighten past yield and the bolt has yielded — it will not hold its preload, and it must be replaced.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Hooke's law: σ = E × ε; E ≈ 200 GPa for steel.</li><li>δ = P × L ÷ (A × E): longer and more loaded means more stretch; bigger area and stiffer material means less.</li><li>Example: 50 kN on a 2 m, 20 mm steel bar stretches it by about 1.59 mm (stress 159 MPa, below yield ✓).</li><li>Thermal expansion: δ = α × L × ΔT; prevented expansion causes stress σ = E × α × ΔT.</li><li>After yield, unloading leaves a permanent set.</li></ul></p>\n<p><strong>Common mistake:</strong> Mixing units: P in newtons, L in millimetres, A in mm², E in MPa (N/mm²) — then δ comes out in millimetres. If you use metres for L and millimetres for A, the answer is wrong by a factor of a thousand.</p>\n<p><strong>Common mistake:</strong> Using Hooke's law above yield. The formula is elastic only — check σ < yield first.</p>\n<p><strong>Ready check:</strong> If you can find the stretch of a 50 kN, 2 m, 20 mm steel bar (1.59 mm) and the stress from a strain of 0.0005 (100 MPa), you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Hooke's law",
      "def": "In the elastic region, stress is proportional to strain: σ = E × ε."
    },
    {
      "term": "Young's modulus (E)",
      "def": "The stiffness of a material: E ≈ 200 GPa for steel, 70 GPa for aluminium."
    },
    {
      "term": "Axial deformation (δ)",
      "def": "How much a bar stretches or shortens: δ = P × L ÷ (A × E)."
    },
    {
      "term": "Elastic deformation",
      "def": "Stretch that disappears when the load is removed."
    },
    {
      "term": "Permanent set",
      "def": "Stretch that remains after unloading, because the material yielded."
    },
    {
      "term": "Proportional limit",
      "def": "The highest stress at which Hooke's law still holds."
    },
    {
      "term": "Stepped bar",
      "def": "A bar with two or more sections of different cross-section; total stretch is the sum of the parts."
    },
    {
      "term": "Thermal expansion",
      "def": "Growth from heating: δ = α × L × ΔT."
    },
    {
      "term": "Thermal stress",
      "def": "Stress from prevented thermal expansion: σ = E × α × ΔT."
    },
    {
      "term": "Coefficient of thermal expansion (α)",
      "def": "How much a material grows per degree: about 12 × 10⁻⁶ per °C for steel."
    },
    {
      "term": "Preload",
      "def": "The tension put into a bolt by tightening it, so it clamps a joint."
    },
    {
      "term": "GPa",
      "def": "Gigapascal: 1 GPa = 1,000 MPa = 1,000 N/mm²."
    }
  ],
  "video": {
    "title": "Mechanics of Materials Lecture 05: Stress-strain behavior | Mechanics of Materials",
    "embedUrl": "https://www.youtube.com/embed/IyQvsi4s9do",
    "note": "Stress-strain behaviour and Hooke's law: the elastic region, the modulus, and what happens past yield.",
    "more": [
      {
        "title": "Strength I: L-01 - Axial Stress & Strain | Structures",
        "url": "https://www.youtube.com/watch?v=9d0OpI6fV1A"
      },
      {
        "title": "Stress-Strain Diagram | Strength of Materials (SOM) | GATE Civil (CE) & Mechanical (ME) 2023 EXAM | GATE",
        "url": "https://www.youtube.com/watch?v=6tf7pyw7J60"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 50 kN tensile force acts on a 2 m steel bar, 20 mm in diameter. Find the stretch. (E = 200 GPa.) Check that the stress is below yield (250 MPa).</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A = π × 20² ÷ 4 ≈ 314.2 mm². Step 2: Stress: σ = 50,000 ÷ 314.2 ≈ 159 MPa — below yield ✓, so the elastic formula is valid. Step 3: δ = P × L ÷ (A × E) = 50,000 × 2,000 ÷ (314.2 × 200,000) ≈ 1.59 mm.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A steel bar has a strain of 0.0005. What is the stress? (E = 200 GPa.)</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: σ = E × ε. Step 2: σ = 200,000 MPa × 0.0005 = 100 MPa.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 30 kN pull acts on a 1.5 m steel bar, 16 mm in diameter. Find the stretch. (E = 200 GPa.)</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A = π × 16² ÷ 4 ≈ 201.1 mm². Step 2: δ = 30,000 × 1,500 ÷ (201.1 × 200,000) = 45,000,000 ÷ 40,220,000 ≈ 1.12 mm. Step 3: Stress check: σ = 30,000 ÷ 201.1 ≈ 149 MPa — below yield ✓.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A 10 m steel beam is heated by 30 °C. How much does it grow? (α = 12 × 10⁻⁶ per °C.) If it is prevented from growing, what is the thermal stress? (E = 200 GPa.)</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: δ = α × L × ΔT = 12 × 10⁻⁶ × 10,000 × 30 = 3.6 mm. Step 2: If prevented, σ = E × α × ΔT = 200,000 × 12 × 10⁻⁶ × 30 = 72 MPa.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A bar is loaded to 300 MPa (past the 250 MPa yield), then unloaded. The total strain at 300 MPa was 0.01. How much permanent set remains after unloading?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The elastic recovery is σ ÷ E = 300 ÷ 200,000 = 0.0015. Step 2: Permanent set = total strain − elastic recovery = 0.01 − 0.0015 = 0.0085. Step 3: The bar stays 0.85% longer than it started.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A stepped bar has two sections in series under a 20 kN pull: section 1 is 1 m long, 20 mm diameter; section 2 is 1 m long, 10 mm diameter. Find the total stretch. (E = 200 GPa.)</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 1: A = 314.2 mm², δ₁ = 20,000 × 1,000 ÷ (314.2 × 200,000) ≈ 0.32 mm. Step 2: Section 2: A = 78.5 mm², δ₂ = 20,000 × 1,000 ÷ (78.5 × 200,000) ≈ 1.27 mm. Step 3: Total δ = 0.32 + 1.27 ≈ 1.59 mm. Step 4: Check section 2's stress: 20,000 ÷ 78.5 ≈ 255 MPa — just above the 250 MPa yield, so in reality section 2 would have yielded and stretched more than the elastic formula says.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A 50 kN pull acts on a 2 m steel bar, 20 mm in diameter. How much does it stretch? (E = 200 GPa.)",
      "choices": [
        "0.16 mm",
        "1.59 mm",
        "15.9 mm",
        "3.18 mm"
      ],
      "answer": 1,
      "explanation": "Correct: (b). δ = 50,000 × 2,000 ÷ (314.2 × 200,000) ≈ 1.59 mm. (a) 0.16 mm is ten times too small. (c) 15.9 mm is ten times too big. (d) 3.18 mm doubles it."
    },
    {
      "q": "A steel bar has a strain of 0.0005. What is the stress? (E = 200 GPa.)",
      "choices": [
        "50 MPa",
        "100 MPa",
        "200 MPa",
        "400 MPa"
      ],
      "answer": 1,
      "explanation": "Correct: (b). σ = E × ε = 200,000 × 0.0005 = 100 MPa. (a) 50 MPa halves it. (c) 200 MPa is E ÷ 1,000 — the wrong operation. (d) 400 MPa is the ultimate strength."
    },
    {
      "q": "What is Young's modulus for steel?",
      "choices": [
        "70 GPa",
        "200 GPa",
        "10 GPa",
        "400 GPa"
      ],
      "answer": 1,
      "explanation": "Correct: (b). E ≈ 200 GPa for steel. (a) 70 GPa is aluminium. (c) 10 GPa is timber. (d) 400 GPa is the ultimate strength in MPa, not a modulus."
    },
    {
      "q": "A bar is loaded past yield and then unloaded. What happens?",
      "choices": [
        "It returns exactly to its original length",
        "It springs back by the elastic part (σ ÷ E) and keeps the rest as permanent set",
        "It keeps stretching",
        "It breaks"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Only the elastic strain recovers; the plastic strain stays. (a) is what happens below yield. (c) is wrong: unloading stops the stretching. (d) is wrong: unloading does not break the bar."
    },
    {
      "q": "A 30 kN pull acts on a 1.5 m steel bar, 16 mm in diameter. What is the stretch?",
      "choices": [
        "1.12 mm",
        "0.56 mm",
        "2.24 mm",
        "11.2 mm"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A = 201.1 mm²; δ = 30,000 × 1,500 ÷ (201.1 × 200,000) ≈ 1.12 mm. (b) 0.56 mm halves it. (c) 2.24 mm doubles it. (d) 11.2 mm is ten times too big."
    },
    {
      "q": "A 10 m steel beam is heated by 30 °C (α = 12 × 10⁻⁶ per °C). How much does it grow?",
      "choices": [
        "0.36 mm",
        "3.6 mm",
        "36 mm",
        "0.036 mm"
      ],
      "answer": 1,
      "explanation": "Correct: (b). δ = 12 × 10⁻⁶ × 10,000 × 30 = 3.6 mm. (a) 0.36 mm is ten times too small. (c) 36 mm is ten times too big. (d) is a hundred times too small."
    },
    {
      "q": "If that beam is prevented from growing, what thermal stress develops? (E = 200 GPa.)",
      "choices": [
        "7.2 MPa",
        "72 MPa",
        "720 MPa",
        "0.72 MPa"
      ],
      "answer": 1,
      "explanation": "Correct: (b). σ = E × α × ΔT = 200,000 × 12 × 10⁻⁶ × 30 = 72 MPa. (a) 7.2 MPa is ten times too small. (c) 720 MPa is ten times too big. (d) is a hundred times too small."
    },
    {
      "q": "In the deformation formula δ = P × L ÷ (A × E), what happens if the bar's cross-sectional area doubles?",
      "choices": [
        "The stretch doubles",
        "The stretch halves",
        "The stretch stays the same",
        "The stretch quadruples"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A is in the denominator, so doubling it halves the stretch. (a) is backwards. (c) is wrong: A matters. (d) is wrong: the relationship is inverse, not squared."
    }
  ],
  "studyGuide": "<h2>Module 9 — Hooke's Law & Axial Deformation: Study Guide</h2><p>Hooke's law: σ = E × ε (E ≈ 200 GPa for steel). Stretch: δ = P × L ÷ (A × E). Always check σ < yield first.</p><p><strong>Key terms:</strong> Hooke's law · Young's modulus · Axial deformation · Thermal expansion</p><p><strong>Remember:</strong></p><ul><li>σ = E × ε; E ≈ 200 GPa for steel.</li><li>δ = P × L ÷ (A × E).</li><li>Check σ < yield before trusting the elastic formula.</li><li>Thermal: δ = α × L × ΔT; prevented expansion gives σ = E × α × ΔT.</li></ul>"
};
