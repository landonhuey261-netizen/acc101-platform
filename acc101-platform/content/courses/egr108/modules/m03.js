// egr108 - Module 3: Stress, Strain, and the Tensile Test
module.exports = {
  "number": 3,
  "slug": "stress-strain-tensile-test",
  "title": "Stress, Strain, and the Tensile Test",
  "estTime": "3–4 hours",
  "objectives": [
    "Calculate stress from force and area, and strain from change in length.",
    "Read a stress–strain curve and find yield strength, ultimate strength, and fracture.",
    "Calculate Young's modulus from a tensile test.",
    "Explain the difference between ductile and brittle failure.",
    "Apply a factor of safety to choose a safe working stress."
  ],
  "sections": [
    {
      "heading": "Stress and Strain: The Basics",
      "html": "<p><p>Stress is force divided by area: σ = F ÷ A, in pascals (Pa) or megapascals (MPa). A 20,000 N pull on a bar with a cross-section of 100 mm² gives σ = 20,000 ÷ 100 = 200 N/mm², which is 200 MPa. Strain is the change in length divided by the original length: ε = ΔL ÷ L, with no units. A bar 200 mm long that stretches 0.2 mm has a strain of 0.2 ÷ 200 = 0.001.</p></p>\n<p><p>Stress and strain let you compare materials fairly, whatever the size of the test piece. A thin wire and a thick bar of the same steel reach the same stress at the same strain, even though the forces are very different. Always convert areas to consistent units: 1 mm² = 1 × 10⁻⁶ m², and 1 MPa = 1 N/mm² — that last one makes hand calculations easy.</p></p>\n"
    },
    {
      "heading": "The Tensile Test and the Stress–Strain Curve",
      "html": "<p><p>A tensile test pulls a standard dog-bone specimen until it breaks, recording force and stretch. The curve starts as a straight line (elastic region), bends at the yield point, rises to the ultimate tensile strength, then necks down and breaks. In the elastic region the material springs back when the load is removed; past the yield point the deformation is permanent.</p></p>\n<p><p>The slope of the straight part is Young's modulus E, the stiffness: E = stress ÷ strain. For steel, E is about 200 GPa; for aluminium, about 70 GPa; for a stiff plastic, about 3 GPa. The yield strength is where permanent deformation starts (often taken at 0.2% strain, the proof stress), and the ultimate strength is the highest point on the curve.</p></p>\n"
    },
    {
      "heading": "Worked Example: A Steel Bar in Tension",
      "html": "<p><p>A steel bar has a cross-section of 100 mm² and a gauge length of 200 mm. A pull of 20,000 N stretches it by 0.2 mm. Stress is 20,000 ÷ 100 = 200 MPa. Strain is 0.2 ÷ 200 = 0.001. Young's modulus is 200 MPa ÷ 0.001 = 200,000 MPa = 200 GPa — exactly the textbook value for steel, so the numbers check out. If your calculated E came out as 20 GPa or 2,000 GPa, you would know a unit was wrong.</p></p>\n<p><p>Now the safety check. If this steel's yield strength is 250 MPa, the load at yield is 250 × 100 = 25,000 N. A working load of 12,500 N gives a factor of safety of 25,000 ÷ 12,500 = 2 against yielding. A factor of safety of 2 is common for a static load; a lifting part or a part that sees shock loads would use a bigger one.</p></p>\n"
    },
    {
      "heading": "Ductile Versus Brittle",
      "html": "<p><p>A ductile material stretches a lot before breaking — mild steel can elongate 20% or more, and it necks down visibly before it fails. That visible warning is valuable: a ductile part gives notice before it breaks. A brittle material, like cast iron or glass, breaks with almost no stretch and no warning. The fracture surface tells the story: a ductile break is rough and torn, a brittle break is flat and shiny.</p></p>\n<p><p>Temperature changes behaviour: many steels become brittle when cold, which is why a part that works fine in summer can snap in a cold snap. Always check the material's behaviour at the lowest temperature it will see. If a part must not fail without warning, choose a ductile material and design so the stress stays well below yield.</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>Stress σ = F ÷ A (MPa); strain ε = ΔL ÷ L (no units).</li><li>Young's modulus E = stress ÷ strain in the elastic region.</li><li>Yield strength is where permanent deformation starts; ultimate strength is the peak.</li><li>Factor of safety = failure load ÷ working load.</li><li>Ductile materials warn before breaking; brittle ones do not.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Mixing mm² and m². Use 1 MPa = 1 N/mm² and keep everything in mm and N, or convert everything to m and Pa — never mix.</p><p><strong>Common mistake:</strong> Reading the ultimate strength as the yield strength. Yield is where the curve first bends; ultimate is the highest point.</p><p><strong>Ready check:</strong> If you can find E from a tensile test and apply a factor of safety, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Stress",
      "def": "Force divided by area: σ = F ÷ A, in Pa or MPa."
    },
    {
      "term": "Strain",
      "def": "Change in length divided by original length: ε = ΔL ÷ L; it has no units."
    },
    {
      "term": "Young's modulus (E)",
      "def": "Stiffness: stress divided by strain in the elastic region, in GPa."
    },
    {
      "term": "Yield strength",
      "def": "The stress at which a material starts to deform permanently."
    },
    {
      "term": "Ultimate tensile strength",
      "def": "The highest stress on the stress–strain curve."
    },
    {
      "term": "Fracture strength",
      "def": "The stress at which the material actually breaks."
    },
    {
      "term": "Elastic region",
      "def": "The straight part of the stress–strain curve, where deformation springs back."
    },
    {
      "term": "Plastic region",
      "def": "The part of the curve past yield, where deformation is permanent."
    },
    {
      "term": "Proof stress",
      "def": "The stress at 0.2% permanent strain, used as the yield strength when the yield point is not sharp."
    },
    {
      "term": "Ductile",
      "def": "Able to stretch a lot before breaking, with visible warning."
    },
    {
      "term": "Brittle",
      "def": "Breaking with almost no stretch and no warning."
    },
    {
      "term": "Factor of safety",
      "def": "Failure load divided by working load."
    },
    {
      "term": "Necking",
      "def": "The local narrowing of a tensile specimen just before it breaks."
    },
    {
      "term": "Gauge length",
      "def": "The marked length of a tensile specimen over which stretch is measured."
    },
    {
      "term": "Elongation",
      "def": "How much a material stretches before breaking, usually as a percentage."
    }
  ],
  "video": {
    "title": "Stress-Strain Relations: Tensile Testing, Yield & Ultimate Strengths, Elastic Modulus, Safety Factor",
    "embedUrl": "https://www.youtube.com/embed/o502uqywKKg",
    "note": "A full lecture on tensile testing: stress, strain, yield and ultimate strengths, elastic modulus, and safety factor.",
    "more": [
      {
        "title": "Stress, Strain and Hooke's Law | Young's Modulus, Stress–Strain Curve",
        "url": "https://www.youtube.com/watch?v=ccj4OPrxnUc"
      },
      {
        "title": "Metals 101-7 Tensile Testing and the Stress Strain Diagram",
        "url": "https://www.youtube.com/watch?v=uWgnBNOy-rA"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A bar with cross-section 50 mm² carries a pull of 10,000 N. What is the stress?</p>",
      "solution": "<p><strong>Answer:</strong> σ = 10,000 ÷ 50 = 200 MPa.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A 100 mm bar stretches 0.25 mm under load. What is the strain?</p>",
      "solution": "<p><strong>Answer:</strong> ε = 0.25 ÷ 100 = 0.0025.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A steel specimen has stress 140 MPa at strain 0.0007. What is Young's modulus?</p>",
      "solution": "<p><strong>Answer:</strong> E = 140 ÷ 0.0007 = 200,000 MPa = 200 GPa.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A tie rod has yield strength 300 MPa and cross-section 80 mm². What load makes it yield?</p>",
      "solution": "<p><strong>Answer:</strong> Load = 300 × 80 = 24,000 N, or 24 kN.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> The rod in the last question must carry 12 kN in service. What is the factor of safety against yielding?</p>",
      "solution": "<p><strong>Answer:</strong> Factor of safety = 24 ÷ 12 = 2.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain why a ductile material is safer than a brittle one for a lifting hook.</p>",
      "solution": "<p><strong>Answer:</strong> A ductile hook stretches and gives visible warning before it breaks; a brittle hook snaps without warning.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Stress is:",
      "choices": [
        "Force × area",
        "Force ÷ area",
        "Area ÷ force",
        "Force + area"
      ],
      "answer": 1,
      "explanation": "Correct: (b). σ = F ÷ A. (a) multiplies instead of dividing. (c) divides the wrong way. (d) adds them."
    },
    {
      "q": "A pull of 20,000 N on 100 mm² gives a stress of:",
      "choices": [
        "200 MPa",
        "2,000 MPa",
        "20 MPa",
        "200,000 MPa"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 20,000 ÷ 100 = 200 MPa. (b) divides by 10. (c) divides by 1,000. (d) forgets the mm² conversion."
    },
    {
      "q": "Strain has:",
      "choices": [
        "Units of Pa",
        "Units of mm",
        "No units",
        "Units of N"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Strain is length divided by length. (a) is the unit of stress. (b) is a length, not a ratio. (d) is the unit of force."
    },
    {
      "q": "Young's modulus is found from:",
      "choices": [
        "The slope of the elastic part of the stress–strain curve",
        "The highest point of the curve",
        "The breaking point",
        "The area under the curve"
      ],
      "answer": 0,
      "explanation": "Correct: (a). E = stress ÷ strain in the straight region. (b) is the ultimate strength. (c) is the fracture point. (d) is the energy absorbed, related to toughness."
    },
    {
      "q": "Steel's Young's modulus is about:",
      "choices": [
        "2 GPa",
        "20 GPa",
        "70 GPa",
        "200 GPa"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Steel is about 200 GPa. (a) is a soft plastic. (b) is a stiff polymer or wood. (c) is aluminium."
    },
    {
      "q": "Yield strength is the stress where:",
      "choices": [
        "The material breaks",
        "Permanent deformation starts",
        "The curve is straightest",
        "The specimen necks"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Past yield, the material does not spring back fully. (a) is fracture. (c) describes the elastic region. (d) happens near the end of the test."
    },
    {
      "q": "A part's failure load is 40 kN and it carries 10 kN. Its factor of safety is:",
      "choices": [
        "0.25",
        "4",
        "50",
        "400"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 40 ÷ 10 = 4. (a) divides the wrong way. (c) adds the numbers. (d) multiplies them."
    },
    {
      "q": "A brittle material fails with:",
      "choices": [
        "Large stretch and necking",
        "Almost no stretch and no warning",
        "A rough, torn surface",
        "Visible bending first"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Brittle failure is sudden. (a) describes ductile failure. (c) is a ductile fracture surface. (d) is ductile behaviour."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Stress, Strain, and the Tensile Test: Quick Reference</h3>\n<p><strong>Core idea:</strong> Calculate stress from force and area, and strain from change in length.</p>\n<p><strong>Key terms:</strong> Stress · Strain · Young's modulus (E) · Yield strength · Ultimate tensile strength · Fracture strength · Elastic region · Plastic region.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Calculate stress from force and area, and strain from change in length.</li>\n<li>Read a stress–strain curve and find yield strength, ultimate strength, and fracture.</li>\n<li>Calculate Young's modulus from a tensile test.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
