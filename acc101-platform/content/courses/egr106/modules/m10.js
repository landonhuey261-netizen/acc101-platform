// egr106 - Module 10: Shear & Bending in Beams
module.exports = {
  "number": 10,
  "slug": "shear-and-bending-in-beams",
  "title": "Shear & Bending in Beams",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what shear force and bending moment are inside a beam.",
    "Draw shear force and bending moment diagrams for a simply supported beam with a point load.",
    "Find the maximum bending moment of a beam with a central or off-centre point load.",
    "Work out the maximum bending moment of a uniformly distributed load.",
    "Use σ = M × y ÷ I to find the bending stress, and S = I ÷ c for the section modulus."
  ],
  "sections": [
    {
      "heading": "Shear Force and Bending Moment",
      "html": "<p>Cut a beam anywhere and look at the cross-section: the material on one side must push on the material on the other side to hold it up. The vertical push is the shear force (V); the turning push is the bending moment (M). Shear force is the sum of the vertical forces to one side of the cut; bending moment is the sum of their moments about the cut. Together they are the internal forces that the beam's material must resist — and the bending moment is what bends the beam, putting the top in compression and the bottom in tension (for a sagging beam).</p>\n<p>Shear and moment are linked: the shear force is the slope of the bending moment diagram (V = dM ÷ dx), and a point load makes the shear jump by the load's size. Where the shear is zero, the bending moment is at its maximum — which is how you find the most stressed point in the beam.</p>\n"
    },
    {
      "heading": "Worked Example: Point Load on a Simply Supported Beam",
      "html": "<p>A 6 m beam on a pin at A and a roller at B carries a 30 kN load 2 m from A. First the reactions: moments about A give RB × 6 = 30 × 2 = 60, so <strong>RB = 10 kN</strong> up; ΣFy gives <strong>RA = 20 kN</strong> up. The shear diagram: from A to the load, V = +20 kN (constant); at the load it drops by 30 kN to −10 kN; from the load to B it stays at −10 kN. The bending moment diagram: at A, M = 0; it rises linearly to the load, where M = 20 × 2 = <strong>40 kN·m</strong> (the maximum); then it falls linearly back to 0 at B. The maximum moment is under the load — which is where the beam is most stressed.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> The maximum bending moment is where the shear crosses zero — usually under the load. For a point load P at distance a from the left support on a span L: M(max) = RA × a, with RA = P × (L − a) ÷ L.</div></p>\n"
    },
    {
      "heading": "Uniformly Distributed Loads and Cantilevers",
      "html": "<p>A uniformly distributed load (UDL) of w per metre over a span L gives reactions of w × L ÷ 2 at each end, and a maximum moment at the middle of <strong>M(max) = w × L² ÷ 8</strong>. Example: w = 5 kN/m over 4 m. Each reaction is 5 × 4 ÷ 2 = 10 kN, and M(max) = 5 × 16 ÷ 8 = 10 kN·m. The moment diagram is a parabola, not a triangle, because the load is spread out.</p>\n<p>A cantilever (fixed at one end, free at the other) is different: a 2 kN load at the free end of a 3 m cantilever gives a maximum moment at the wall of M = 2 × 3 = 6 kN·m, and the shear is a constant 2 kN along the whole beam. The wall must resist both the force and the moment — which is why a fixed support has three reactions.</p>\n"
    },
    {
      "heading": "Bending Stress: σ = M × y ÷ I",
      "html": "<p>Bending stress varies through the depth of the beam: zero at the neutral axis (the centroid), maximum at the farthest fibre (top and bottom). The formula is <strong>σ = M × y ÷ I</strong>, where y is the distance from the neutral axis. The maximum stress is σ(max) = M × c ÷ I, where c is the distance to the farthest fibre — usually written with the section modulus S = I ÷ c, so <strong>σ(max) = M ÷ S</strong>. Example: the 40 kN·m beam from above, with a 100 × 200 mm rectangular section (I = 66.67 × 10⁶ mm⁴, c = 100 mm). S = 66.67 × 10⁶ ÷ 100 = 666,667 mm³. σ(max) = 40 × 10⁶ ÷ 666,667 ≈ 60 MPa. The top is 60 MPa in compression, the bottom 60 MPa in tension, and the middle is zero.</p>\n<p>Shear stress in a beam is a different shape: it is maximum at the neutral axis and zero at the top and bottom. For a rectangle, the maximum shear stress is τ(max) = 1.5 × V ÷ A. For our beam, V(max) = 20 kN and A = 20,000 mm², so τ(max) = 1.5 × 20,000 ÷ 20,000 = 1.5 MPa — tiny next to the 60 MPa bending stress, which is why bending usually governs beam design and shear is a check.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Shear force V is the sum of vertical forces to one side of a cut; bending moment M is the sum of their moments.</li><li>The maximum moment is where the shear crosses zero — usually under the load.</li><li>Point load: M(max) = RA × a. UDL: M(max) = wL² ÷ 8. Cantilever end load: M(max) = P × L at the wall.</li><li>Bending stress: σ = M × y ÷ I; maximum σ = M ÷ S, where S = I ÷ c.</li><li>Example: 30 kN at 2 m on a 6 m span — RA = 20 kN, RB = 10 kN, M(max) = 40 kN·m, σ(max) = 60 MPa for a 100 × 200 mm section.</li></ul></p>\n<p><strong>Common mistake:</strong> Forgetting that the bending moment at a pin or roller support is zero. A simple support cannot resist a moment, so the moment diagram starts and ends at zero.</p>\n<p><strong>Common mistake:</strong> Using the wrong M in σ = M ÷ S. The stress is maximum where the moment is maximum — use M(max), not the moment at some other point.</p>\n<p><strong>Ready check:</strong> If you can find the reactions (20 kN, 10 kN), the maximum moment (40 kN·m), and the maximum bending stress (60 MPa) for the 30 kN, 6 m beam, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Shear force (V)",
      "def": "The internal vertical force at a cross-section: the sum of vertical forces to one side of the cut."
    },
    {
      "term": "Bending moment (M)",
      "def": "The internal moment at a cross-section: the sum of the moments of the forces to one side of the cut."
    },
    {
      "term": "Shear force diagram (SFD)",
      "def": "A plot of shear force along the beam."
    },
    {
      "term": "Bending moment diagram (BMD)",
      "def": "A plot of bending moment along the beam."
    },
    {
      "term": "Sagging",
      "def": "Bending that makes the beam curve down in the middle: bottom in tension, top in compression."
    },
    {
      "term": "Hogging",
      "def": "Bending that makes the beam curve up in the middle: top in tension, bottom in compression."
    },
    {
      "term": "Uniformly distributed load (UDL)",
      "def": "A load spread evenly along a length, in force per unit length (e.g. kN/m)."
    },
    {
      "term": "Bending stress",
      "def": "Stress from bending: σ = M × y ÷ I; zero at the neutral axis, maximum at the outer fibres."
    },
    {
      "term": "Section modulus (S)",
      "def": "S = I ÷ c; maximum bending stress is σ(max) = M ÷ S."
    },
    {
      "term": "Farthest fibre (c)",
      "def": "The distance from the neutral axis to the outermost fibre of the cross-section."
    },
    {
      "term": "Point of zero shear",
      "def": "The point where the shear force crosses zero — usually where the bending moment is maximum."
    },
    {
      "term": "Cantilever",
      "def": "A beam fixed at one end and free at the other."
    }
  ],
  "video": {
    "title": "Understanding Shear Force and Bending Moment Diagrams | The Efficient Engineer",
    "embedUrl": "https://www.youtube.com/embed/C-FEVzI8oe8",
    "note": "Shear and bending moment diagrams explained: what shear and moment are, and how the diagrams are drawn.",
    "more": [
      {
        "title": "How to Draw Shear Force & Bending Moment Diagrams (SFD & BMD) | Step-by-Step Explained | The Efficient Engineer",
        "url": "https://www.youtube.com/watch?v=OP9Hx1MHMsY"
      },
      {
        "title": "6.4 Shear and Moment Diagrams - Video Lecture - JPM | JPM",
        "url": "https://www.youtube.com/watch?v=ErqQjGC5rg0"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 6 m beam on a pin at A and a roller at B carries a 30 kN load 2 m from A. Find the reactions and the maximum bending moment.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Moments about A: RB × 6 = 30 × 2 = 60, so RB = 10 kN up. Step 2: ΣFy: RA = 30 − 10 = 20 kN up. Step 3: Maximum moment is under the load: M(max) = 20 × 2 = 40 kN·m.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> For the beam in Problem 1 with a 100 × 200 mm rectangular section (I = 66.67 × 10⁶ mm⁴), find the maximum bending stress.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: c = 100 mm (half the depth). Step 2: S = I ÷ c = 66.67 × 10⁶ ÷ 100 = 666,667 mm³. Step 3: σ(max) = M ÷ S = 40 × 10⁶ ÷ 666,667 ≈ 60 MPa.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 4 m simply supported beam carries a UDL of 5 kN/m over its whole length. Find the reactions and the maximum bending moment.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Total load = 5 × 4 = 20 kN, acting at the middle. Step 2: Each reaction = 20 ÷ 2 = 10 kN. Step 3: M(max) = w × L² ÷ 8 = 5 × 16 ÷ 8 = 10 kN·m at the middle.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A 3 m cantilever carries a 2 kN load at its free end. Find the maximum bending moment and where it occurs.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The maximum moment is at the wall: M = 2 × 3 = 6 kN·m. Step 2: The shear is a constant 2 kN along the beam. Step 3: The wall must resist both the 2 kN force and the 6 kN·m moment.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A beam has a maximum shear force of 20 kN and a rectangular section 100 × 200 mm. What is the maximum shear stress?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: For a rectangle, τ(max) = 1.5 × V ÷ A. Step 2: A = 100 × 200 = 20,000 mm². Step 3: τ(max) = 1.5 × 20,000 ÷ 20,000 = 1.5 MPa — small next to the bending stress.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A simply supported beam carries a 12 kN load at its middle (span 4 m). Find the reactions and the maximum bending moment.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: By symmetry, each reaction is 6 kN. Step 2: M(max) is under the load: M = 6 × 2 = 12 kN·m. Step 3: (General rule: a central point load P on a span L gives M(max) = P × L ÷ 4 = 12 × 4 ÷ 4 = 12 kN·m ✓.)</p>"
    }
  ],
  "quiz": [
    {
      "q": "A 6 m beam carries a 30 kN load 2 m from the left support. What are the reactions?",
      "choices": [
        "15 kN and 15 kN",
        "20 kN (left) and 10 kN (right)",
        "10 kN (left) and 20 kN (right)",
        "30 kN and 0 kN"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Moments about A: RB × 6 = 30 × 2 = 60, so RB = 10 kN; RA = 30 − 10 = 20 kN. (a) would be right only for a central load. (c) swaps the reactions — the support nearer the load carries more. (d) is wrong: both supports carry load."
    },
    {
      "q": "In that same beam, what is the maximum bending moment?",
      "choices": [
        "60 kN·m",
        "40 kN·m",
        "20 kN·m",
        "30 kN·m"
      ],
      "answer": 1,
      "explanation": "Correct: (b). M(max) is under the load: 20 × 2 = 40 kN·m. (a) 60 kN·m is 30 × 2 — using the load instead of the reaction. (c) 20 kN·m is RA × 1 — the wrong distance. (d) 30 kN·m is the load number."
    },
    {
      "q": "For that beam with a 100 × 200 mm section (I = 66.67 × 10⁶ mm⁴), what is the maximum bending stress?",
      "choices": [
        "40 MPa",
        "60 MPa",
        "100 MPa",
        "30 MPa"
      ],
      "answer": 1,
      "explanation": "Correct: (b). S = 66.67 × 10⁶ ÷ 100 = 666,667 mm³; σ = 40 × 10⁶ ÷ 666,667 ≈ 60 MPa. (a) 40 MPa is the moment number. (c) 100 MPa is c itself. (d) 30 MPa halves the answer."
    },
    {
      "q": "A 4 m beam carries a UDL of 5 kN/m over its whole length. What is the maximum bending moment?",
      "choices": [
        "20 kN·m",
        "10 kN·m",
        "5 kN·m",
        "40 kN·m"
      ],
      "answer": 1,
      "explanation": "Correct: (b). M(max) = wL² ÷ 8 = 5 × 16 ÷ 8 = 10 kN·m. (a) 20 kN·m is the total load. (c) 5 kN·m is w alone. (d) 40 kN·m doubles the answer."
    },
    {
      "q": "A 3 m cantilever carries a 2 kN load at its free end. What is the maximum bending moment?",
      "choices": [
        "2 kN·m",
        "6 kN·m",
        "3 kN·m",
        "0 kN·m"
      ],
      "answer": 1,
      "explanation": "Correct: (b). M = P × L = 2 × 3 = 6 kN·m at the wall. (a) 2 kN·m is the load alone. (c) 3 kN·m is the length alone. (d) is wrong: the wall carries a large moment."
    },
    {
      "q": "Where in a beam is the bending stress zero?",
      "choices": [
        "At the top fibre",
        "At the bottom fibre",
        "At the neutral axis",
        "At the supports"
      ],
      "answer": 2,
      "explanation": "Correct: (c). σ = M × y ÷ I, and y = 0 at the neutral axis. (a) and (b) are where the stress is maximum. (d) is wrong: the stress at a support depends on the moment there."
    },
    {
      "q": "Where in a rectangular beam is the shear stress maximum?",
      "choices": [
        "At the top and bottom fibres",
        "At the neutral axis",
        "At the supports only",
        "Nowhere — shear stress is constant"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Shear stress is maximum at the neutral axis and zero at the outer fibres — the opposite of bending stress. (a) is where bending stress is maximum. (c) is wrong: shear stress varies along the beam. (d) is wrong: it varies through the depth."
    },
    {
      "q": "What is the bending moment at a pin or roller support of a simply supported beam?",
      "choices": [
        "Maximum",
        "Equal to the reaction times the span",
        "Zero",
        "Equal to the load"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A simple support cannot resist a moment, so the moment diagram starts and ends at zero. (a) is wrong: the maximum is usually under the load. (b) and (d) are wrong."
    }
  ],
  "studyGuide": "<h2>Module 10 — Shear & Bending in Beams: Study Guide</h2><p>Shear V is the vertical force at a cut; moment M is the turning effect. Maximum moment is where shear crosses zero. Bending stress: σ = M × y ÷ I, maximum σ = M ÷ S.</p><p><strong>Key terms:</strong> Shear force · Bending moment · SFD · BMD · Section modulus</p><p><strong>Remember:</strong></p><ul><li>M(max) is where V = 0.</li><li>Point load: M(max) = RA × a. UDL: M(max) = wL² ÷ 8.</li><li>σ(max) = M ÷ S, S = I ÷ c.</li><li>Moment is zero at a simple support.</li></ul>"
};
