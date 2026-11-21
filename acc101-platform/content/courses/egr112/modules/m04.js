// egr112 - Module 4: Failure Modes: Static, Fatigue & Stress Concentration
module.exports = {
  "number": 4,
  "slug": "failure-modes",
  "title": "Failure Modes: Static, Fatigue & Stress Concentration",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the difference between yielding and fracture.",
    "Work out a factor of safety from a stress and a strength.",
    "Explain fatigue and why parts fail below their static strength.",
    "Use the Goodman relation to check a part under fluctuating load.",
    "Explain stress concentration and how to reduce it."
  ],
  "sections": [
    {
      "heading": "How Parts Fail: Yielding and Fracture",
      "html": "<p>A part fails when the stress in it exceeds what the material can take. There are two main static failures. Yielding is permanent deformation: the stress passes the yield strength, the part bends or stretches, and it does not spring back. A yielded part may still hold together, but it no longer fits or works. Fracture is breaking apart: the stress passes the ultimate strength, and the part separates into pieces. A ductile material yields a lot before it fractures, giving warning; a brittle material fractures with almost no yielding, giving none.</p>\n<p>Stress is force divided by area, and it comes in two kinds: tensile stress pulls a part apart, compressive stress squeezes it, and shear stress slides one part of it past another. A real part usually feels a combination — a shaft in a machine feels torsion and bending at once — and the von Mises stress combines them into one number that can be compared with the material's yield strength. That comparison is the factor of safety.</p>\n"
    },
    {
      "heading": "Factor of Safety: The Margin That Keeps You Safe",
      "html": "<p>The factor of safety (FoS) is how much stronger a part is than it needs to be: FoS = strength ÷ stress. If a part's von Mises stress is 91.6 MPa and the material's yield strength is 350 MPa, the factor of safety is 350 ÷ 91.6 = 3.8 — the part can carry nearly four times its working load before yielding. A FoS of 1 means the part is exactly at its limit; below 1 means it has already failed on paper.</p>\n<p>What FoS is enough? It depends on the consequences and the uncertainty. A garden chair might be designed to FoS 2; a lifting hook to FoS 5; an aircraft part to FoS 1.5, because weight matters and the loads are known precisely. A high FoS is not always better — it usually means a heavier, more expensive part — but a FoS below 1 is never acceptable, and a FoS barely above 1 leaves no room for the unexpected.</p>\n"
    },
    {
      "heading": "Fatigue: Failure by Repetition",
      "html": "<p>Fatigue is failure after many cycles of load, at stresses well below the static strength. A paperclip bent back and forth breaks after a few dozen bends, even though one bend is easy — that is fatigue. A crankshaft, a bridge, and an aircraft wing all live under fluctuating loads, and fatigue is the most common cause of mechanical failure in service. The key number is the endurance limit (Se): the stress below which a steel can survive an infinite number of cycles without failing.</p>\n<p>The endurance limit of a real part is lower than the textbook value, because of surface finish, size, and other factors — the Marin factors. Example: a steel with Sut = 560 MPa has a textbook endurance limit Se′ = 0.5 × Sut = 280 MPa. With Marin factors ka = 0.8 (surface), kb = 0.85 (size), and kc = 0.9 (other), the corrected limit is Se = 280 × 0.8 × 0.85 × 0.9 = 171.4 MPa. That is the stress the part can survive forever — design below it, and fatigue is not a concern.</p>\n"
    },
    {
      "heading": "The Goodman Relation: Fluctuating Loads",
      "html": "<p>Most real loads fluctuate between a mean stress and an alternating stress: a rotating shaft, for example, feels a steady torque (mean) plus a bending stress that reverses every revolution (alternating). The Goodman relation checks whether the combination is safe: σa ÷ Se + σm ÷ Sut = 1 ÷ n, where σa is the alternating stress, σm is the mean stress, Se is the corrected endurance limit, Sut is the ultimate strength, and n is the factor of safety. If the left side is less than 1, the part is safe; the factor of safety is 1 divided by the left side.</p>\n<p>Example: σa = 120 MPa, σm = 80 MPa, Se = 171.4 MPa, Sut = 560 MPa. Then 120 ÷ 171.4 + 80 ÷ 560 = 0.700 + 0.143 = 0.843, so the factor of safety is n = 1 ÷ 0.843 = 1.19. That is a thin margin — the part is safe on paper, but there is little room for error, and a designer would want a bigger margin or a stronger section. Goodman is a check, not a guarantee: it assumes the loads are known, and real loads are often higher than expected.</p>\n"
    },
    {
      "heading": "Stress Concentration: Where Cracks Start",
      "html": "<p>Stress concentrates where a part's shape changes suddenly: at a sharp corner, a hole, a keyway, or a step in a shaft. The stress concentration factor Kt tells you how much higher the local stress is than the nominal stress: peak stress = Kt × nominal stress. Example: a shoulder with Kt = 2.2 and a nominal stress of 60 MPa has a peak stress of 2.2 × 60 = 132 MPa at the shoulder — more than double the stress elsewhere. That is where a fatigue crack starts.</p>\n<p>The fix is to smooth the change: use a generous fillet radius at a shoulder, a large radius at a hole, and avoid sharp internal corners. A small fillet costs almost nothing and can halve the stress concentration — it is the cheapest strength improvement in machine design. Cracks also start at surface defects: a scratch, a corrosion pit, or a rough machined surface is a stress raiser, which is why fatigue-critical parts are polished and protected.</p>\n<p><p><strong>Takeaways:</strong><ul><li>Yielding is permanent deformation; fracture is breaking apart; ductile materials warn, brittle ones do not.</li><li>Factor of safety = strength ÷ stress; a FoS below 1 means failure on paper.</li><li>Fatigue fails parts below their static strength after many cycles; the endurance limit is the safe stress.</li><li>Marin factors correct the textbook endurance limit for the real part.</li><li>Goodman checks a fluctuating load: σa ÷ Se + σm ÷ Sut = 1 ÷ n.</li><li>Stress concentrates at shape changes; smooth them with fillets.</li></ul></p>\n<p><strong>Common mistake:</strong> Designing only for static strength and forgetting fatigue. A part that is strong enough for one load can still fail after a million cycles.</p>\n<p><strong>Common mistake:</strong> Leaving a sharp corner at a shaft shoulder. A generous fillet radius is the cheapest strength improvement there is.</p>\n<p><strong>Ready check:</strong> If you can work out a factor of safety, correct an endurance limit, apply Goodman, and explain stress concentration, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Yielding",
      "def": "Permanent deformation: the stress has passed the yield strength and the part does not spring back."
    },
    {
      "term": "Fracture",
      "def": "Breaking apart: the stress has passed the ultimate strength and the part separates."
    },
    {
      "term": "Stress",
      "def": "Force per unit area inside a material, measured in MPa; tensile pulls, compressive squeezes, shear slides."
    },
    {
      "term": "Von Mises stress",
      "def": "A single number that combines tensile, compressive, and shear stresses so they can be compared with yield strength."
    },
    {
      "term": "Factor of safety (FoS)",
      "def": "Strength divided by stress: how much stronger a part is than it needs to be."
    },
    {
      "term": "Fatigue",
      "def": "Failure after many cycles of load, at stresses well below the static strength."
    },
    {
      "term": "Endurance limit (Se)",
      "def": "The stress below which a steel can survive an infinite number of cycles without fatigue failure."
    },
    {
      "term": "Marin factors",
      "def": "Correction factors (surface, size, and others) that reduce the textbook endurance limit to the real part's limit."
    },
    {
      "term": "Goodman relation",
      "def": "A check for fluctuating loads: σa ÷ Se + σm ÷ Sut = 1 ÷ n."
    },
    {
      "term": "Alternating stress (σa)",
      "def": "The part of a fluctuating load that reverses each cycle."
    },
    {
      "term": "Mean stress (σm)",
      "def": "The steady part of a fluctuating load, constant through the cycle."
    },
    {
      "term": "Stress concentration factor (Kt)",
      "def": "How many times higher the local stress is at a shape change than the nominal stress."
    },
    {
      "term": "Fillet",
      "def": "A rounded transition at a shoulder or corner that reduces stress concentration."
    },
    {
      "term": "Ductile",
      "def": "Able to deform a lot before breaking, giving warning before failure."
    },
    {
      "term": "Brittle",
      "def": "Breaking with almost no deformation, giving no warning before failure."
    }
  ],
  "video": {
    "title": "Why are plane windows round?",
    "embedUrl": "https://www.youtube.com/embed/7rXGRPMD-GQ",
    "note": "The classic stress-concentration story: square windows cracked, round windows did not. Watch it, then explain in your own words why a sharp corner is dangerous.",
    "more": [
      {
        "title": "Deadliest High Speed Train Crash in History - Eschede Train Disaster",
        "url": "https://www.youtube.com/watch?v=8MHf9H7H8jU"
      },
      {
        "title": "The Problem with Welding",
        "url": "https://www.youtube.com/watch?v=p_0duihxmW4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A part's von Mises stress is 91.6 MPa and the material's yield strength is 350 MPa. Work out the factor of safety, and say whether it is a comfortable margin.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: FoS = strength ÷ stress = 350 ÷ 91.6 = 3.8. Step 2: A factor of safety of 3.8 is comfortable — the part can carry nearly four times its working load before yielding. A good answer shows the division and the judgement.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A steel has Sut = 560 MPa. Its textbook endurance limit is Se′ = 0.5 × Sut. Marin factors are ka = 0.8, kb = 0.85, kc = 0.9. Work out the corrected endurance limit Se.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Se′ = 0.5 × 560 = 280 MPa. Step 2: Se = 280 × 0.8 × 0.85 × 0.9 = 280 × 0.612 = 171.4 MPa. Step 3: The part can survive an infinite number of cycles below 171.4 MPa. A good answer shows both steps and the 171.4 MPa result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A shaft has an alternating stress σa = 120 MPa and a mean stress σm = 80 MPa. Se = 171.4 MPa and Sut = 560 MPa. Use the Goodman relation to work out the factor of safety.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: σa ÷ Se + σm ÷ Sut = 120 ÷ 171.4 + 80 ÷ 560 = 0.700 + 0.143 = 0.843. Step 2: Factor of safety n = 1 ÷ 0.843 = 1.19. Step 3: The part is safe on paper but the margin is thin — a designer would want a bigger margin. A good answer shows the sum and the 1.19 result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A shaft shoulder has a stress concentration factor Kt = 2.2 and a nominal stress of 60 MPa. What is the peak stress at the shoulder, and what is the cheapest fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Peak stress = Kt × nominal = 2.2 × 60 = 132 MPa. Step 2: The cheapest fix is a generous fillet radius at the shoulder, which smooths the shape change and reduces Kt. Step 3: A small fillet can halve the stress concentration for almost no cost. A good answer gives 132 MPa and the fillet fix.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A cantilever beam (20 mm wide, 40 mm tall, 400 mm long, E = 200 GPa) carries a 500 N load at its free end. Work out the deflection, showing the second moment of area.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Second moment of area I = b × h³ ÷ 12 = 20 × 40³ ÷ 12 = 20 × 64,000 ÷ 12 = 106,667 mm⁴. Step 2: Deflection δ = F × L³ ÷ (3 × E × I) = 500 × 400³ ÷ (3 × 200,000 × 106,667). Step 3: 500 × 64,000,000 = 32,000,000,000; 3 × 200,000 × 106,667 = 64,000,200,000; δ = 0.50 mm. A good answer shows I, the formula, and the 0.50 mm result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A designer sizes a crane hook for static strength only, with a factor of safety of 3. Explain why the hook could still fail in service, and what should have been checked.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The hook's load fluctuates every lift, so it is subject to fatigue, not just static load. Step 2: Fatigue can fail a part below its static strength after many cycles, so a static factor of safety of 3 is not a guarantee. Step 3: The designer should have checked the endurance limit with Marin factors and applied the Goodman relation to the fluctuating load. A good answer names fatigue and the two checks.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What is the difference between yielding and fracture?",
      "choices": [
        "There is no difference",
        "Yielding is permanent deformation; fracture is breaking apart",
        "Yielding is breaking apart; fracture is permanent deformation",
        "Yielding happens only in brittle materials"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Yielding deforms a part permanently; fracture separates it into pieces. (a) is wrong: they are different failures. (c) has them backwards. (d) is wrong: brittle materials fracture with almost no yielding."
    },
    {
      "q": "A part's von Mises stress is 91.6 MPa and its yield strength is 350 MPa. What is the factor of safety?",
      "choices": [
        "0.26",
        "3.8",
        "38",
        "91.6"
      ],
      "answer": 1,
      "explanation": "Correct: (b). FoS = 350 ÷ 91.6 = 3.8. (a) is stress ÷ strength, the inverse. (c) is ten times too big. (d) is the stress, not the factor."
    },
    {
      "q": "A steel has Sut = 560 MPa. What is its textbook endurance limit Se′?",
      "choices": [
        "560 MPa",
        "280 MPa",
        "1120 MPa",
        "56 MPa"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Se′ = 0.5 × Sut = 0.5 × 560 = 280 MPa. (a) is Sut itself. (c) doubles Sut. (d) is ten times too small."
    },
    {
      "q": "With Marin factors ka = 0.8, kb = 0.85, kc = 0.9, what is the corrected endurance limit for a steel with Se′ = 280 MPa?",
      "choices": [
        "280 MPa",
        "171.4 MPa",
        "224 MPa",
        "140 MPa"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Se = 280 × 0.8 × 0.85 × 0.9 = 171.4 MPa. (a) forgets the Marin factors. (c) applies only the surface factor. (d) halves the textbook value."
    },
    {
      "q": "A shaft has σa = 120 MPa, σm = 80 MPa, Se = 171.4 MPa, Sut = 560 MPa. What is the Goodman factor of safety?",
      "choices": [
        "1.19",
        "0.84",
        "2.38",
        "1.00"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 120 ÷ 171.4 + 80 ÷ 560 = 0.843, so n = 1 ÷ 0.843 = 1.19. (b) is the Goodman sum, not the factor of safety. (c) doubles the answer. (d) would mean the part is exactly at its limit."
    },
    {
      "q": "A shaft shoulder has Kt = 2.2 and a nominal stress of 60 MPa. What is the peak stress?",
      "choices": [
        "60 MPa",
        "132 MPa",
        "27 MPa",
        "220 MPa"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Peak = Kt × nominal = 2.2 × 60 = 132 MPa. (a) is the nominal stress, ignoring the concentration. (c) divides instead of multiplying. (d) mistakes Kt for a stress."
    },
    {
      "q": "What is the cheapest way to reduce stress concentration at a shaft shoulder?",
      "choices": [
        "Use a stronger material",
        "Add a generous fillet radius to smooth the shape change",
        "Make the shaft thicker everywhere",
        "Polish the whole shaft"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A fillet radius smooths the change and can halve the stress concentration for almost no cost. (a) helps but costs more and does not fix the concentration. (c) adds weight and cost everywhere. (d) helps surface finish but does not fix the shape change."
    },
    {
      "q": "Why can a part fail by fatigue even though its static factor of safety is 3?",
      "choices": [
        "Because fatigue is a static failure",
        "Because repeated cycles of load can crack a part at stresses well below its static strength",
        "Because the factor of safety was calculated wrong",
        "Because fatigue only affects brittle materials"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Fatigue fails parts below their static strength after many cycles — static strength is not the whole story. (a) is wrong: fatigue is a cyclic failure. (c) is wrong: the FoS can be right and fatigue can still fail the part. (d) is wrong: fatigue affects ductile materials too."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Failure Modes: Static, Fatigue & Stress Concentration: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain the difference between yielding and fracture.</p>\n<p><strong>Key terms:</strong> Yielding · Fracture · Stress · Von Mises stress · Factor of safety (FoS) · Fatigue · Endurance limit (Se) · Marin factors.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain the difference between yielding and fracture.</li>\n<li>Work out a factor of safety from a stress and a strength.</li>\n<li>Explain fatigue and why parts fail below their static strength.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
