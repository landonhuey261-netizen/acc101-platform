// egr106 - Module 1: Forces & Vectors
module.exports = {
  "number": 1,
  "slug": "forces-and-vectors",
  "title": "Forces & Vectors",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a force is and name its units (newtons and pounds).",
    "Tell scalar and vector quantities apart.",
    "Resolve a force into its x and y components.",
    "Add two forces to find their resultant, by components.",
    "Use the 3-4-5 triangle to resolve forces quickly."
  ],
  "sections": [
    {
      "heading": "What a Force Is",
      "html": "<p>A force is a push or a pull. It has a size (magnitude) and a direction — which makes it a vector, not a scalar. A scalar has only a size: temperature (20 °C), mass (5 kg), time (3 s). A vector has size and direction: a 50 N force pushing east, a 30 N force pulling up. In this course, forces are measured in newtons (N) in SI units, and sometimes in pounds (lb) in US practice: 1 lb ≈ 4.45 N.</p>\n<p>Forces you will meet constantly: weight (the pull of gravity, W = m × g, where g = 9.81 m/s²), the normal force (a surface pushing back on an object), friction (resisting sliding), tension (a rope or cable pulling), and applied loads (a person standing on a beam, a car on a bridge). Every structure in the world is a collection of forces in balance — or, when they are not in balance, a collection of forces causing motion.</p>\n"
    },
    {
      "heading": "Resolving a Force into Components",
      "html": "<p>Any force can be split into two perpendicular parts — its x (horizontal) and y (vertical) components — and those two parts have exactly the same effect as the original force. If a force F acts at an angle θ above the horizontal, its components are <strong>Fx = F × cos θ</strong> and <strong>Fy = F × sin θ</strong>. Example: a 50 N force at 36.87° above the horizontal. Fx = 50 × cos 36.87° = 50 × 0.8 = 40 N. Fy = 50 × sin 36.87° = 50 × 0.6 = 30 N. Check: √(40² + 30²) = √2,500 = 50 N ✓ — the components rebuild the original force.</p>\n<p>The angle 36.87° is special: it is the angle of a 3-4-5 triangle, where sin = 3/5 = 0.6 and cos = 4/5 = 0.8. Whenever you see a force of 50 N at 36.87°, the components are 40 N and 30 N — no calculator needed. The 3-4-5 triangle shows up everywhere in statics, and recognising it saves time and prevents errors.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Fx = F × cos θ, Fy = F × sin θ. The components are the sides of a right triangle whose hypotenuse is the force. Check your work: √(Fx² + Fy²) must equal F.</div></p>\n"
    },
    {
      "heading": "Adding Forces: The Resultant",
      "html": "<p>To add two or more forces, resolve each one into x and y components, add the x components together, add the y components together, and then combine the totals into the resultant: <strong>R = √(Rx² + Ry²)</strong>, at an angle <strong>θ = tan⁻¹(Ry ÷ Rx)</strong>. Example: a 30 N force east and a 40 N force north. Rx = 30 N, Ry = 40 N. R = √(30² + 40²) = √2,500 = 50 N, at θ = tan⁻¹(40 ÷ 30) ≈ 53.1° north of east. The two forces together act like a single 50 N force at 53.1°.</p>\n<p>Watch the signs: east and north are positive, west and south are negative. A 30 N force west is Fx = −30 N, not +30 N. Getting a sign wrong flips the direction of your answer, and in statics a flipped sign is a wrong answer.</p>\n"
    },
    {
      "heading": "Why This Matters",
      "html": "<p>Every calculation in this course starts with resolving and adding forces. A truss is a set of forces at joints. A beam's reactions are forces. Stress is force divided by area. If you cannot resolve a force into components, nothing else works — so this module is the foundation, and the skill must become automatic.</p>\n<p>Practice until the 3-4-5 triangle is instant: 30-40-50, 60-80-100, 15-20-25 — all the same triangle at different sizes. When a problem gives you an angle of 36.87°, it is handing you the 3-4-5 triangle on purpose.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>A force is a vector: it has magnitude and direction. Its unit is the newton (N).</li><li>Fx = F × cos θ, Fy = F × sin θ.</li><li>To add forces: add the x components, add the y components, then R = √(Rx² + Ry²) at θ = tan⁻¹(Ry ÷ Rx).</li><li>The 3-4-5 triangle (36.87°) gives components of 0.8F and 0.6F.</li><li>East and north are positive; west and south are negative.</li></ul></p>\n<p><strong>Common mistake:</strong> Swapping sine and cosine. Fx uses cosine (the adjacent side), Fy uses sine (the opposite side). If your components do not rebuild the original force (√(Fx² + Fy²) ≠ F), you have them backwards.</p>\n<p><strong>Common mistake:</strong> Forgetting that a force pointing west or south is negative. A sign error flips the resultant's direction.</p>\n<p><strong>Ready check:</strong> If you can resolve 50 N at 36.87° (40 N and 30 N) and add 30 N east and 40 N north (50 N at 53.1°), you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Force",
      "def": "A push or a pull, measured in newtons (N). A vector: it has magnitude and direction."
    },
    {
      "term": "Vector",
      "def": "A quantity with magnitude and direction, e.g. force, velocity, displacement."
    },
    {
      "term": "Scalar",
      "def": "A quantity with magnitude only, e.g. mass, temperature, time."
    },
    {
      "term": "Newton (N)",
      "def": "The SI unit of force: 1 N accelerates 1 kg at 1 m/s²."
    },
    {
      "term": "Components",
      "def": "The x and y parts of a force: Fx = F × cos θ, Fy = F × sin θ."
    },
    {
      "term": "Resultant",
      "def": "The single force that has the same effect as a group of forces acting together."
    },
    {
      "term": "Weight",
      "def": "The force of gravity on a mass: W = m × g, with g = 9.81 m/s²."
    },
    {
      "term": "Normal force",
      "def": "The force a surface exerts perpendicular to itself on an object resting on it."
    },
    {
      "term": "Tension",
      "def": "The pulling force in a rope, cable, or member."
    },
    {
      "term": "Friction",
      "def": "The force that resists sliding between two surfaces."
    },
    {
      "term": "3-4-5 triangle",
      "def": "A right triangle with sides in the ratio 3:4:5; its acute angles are 36.87° and 53.13°."
    },
    {
      "term": "Free vector",
      "def": "A vector defined by magnitude and direction only, not by where it acts — useful for adding forces."
    }
  ],
  "video": {
    "title": "Adding and Resolving Force Vectors | MME",
    "embedUrl": "https://www.youtube.com/embed/GDcGBFrJCcU",
    "note": "Resolving forces into components and adding them to find a resultant — the foundation skill of this course.",
    "more": [
      {
        "title": "177 - MME - A Level Maths - Mechanics - Resolving Forces | MME",
        "url": "https://www.youtube.com/watch?v=q3C4170FEWo"
      },
      {
        "title": "Mechanics Part 03 Resolution of forces | Engineering Mechanics",
        "url": "https://www.youtube.com/watch?v=cWLoXHSO50s"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 50 N force acts at 36.87° above the horizontal. Find its x and y components, and check them by rebuilding the force.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Fx = 50 × cos 36.87° = 50 × 0.8 = 40 N. Step 2: Fy = 50 × sin 36.87° = 50 × 0.6 = 30 N. Step 3: Check: √(40² + 30²) = √2,500 = 50 N ✓.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A 100 N force acts at 53.13° above the horizontal. Find its components.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: At 53.13°, cos = 0.6 and sin = 0.8 (the 3-4-5 triangle the other way round). Step 2: Fx = 100 × 0.6 = 60 N. Step 3: Fy = 100 × 0.8 = 80 N. Step 4: Check: √(60² + 80²) = √10,000 = 100 N ✓.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 30 N force acts east and a 40 N force acts north. Find the resultant force (magnitude and direction).</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Rx = 30 N, Ry = 40 N. Step 2: R = √(30² + 40²) = √2,500 = 50 N. Step 3: θ = tan⁻¹(40 ÷ 30) ≈ 53.1° north of east.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A 60 N force acts at 30° above the horizontal. Find its components. (Use cos 30° ≈ 0.866, sin 30° = 0.5.)</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Fx = 60 × cos 30° = 60 × 0.866 ≈ 52.0 N. Step 2: Fy = 60 × sin 30° = 60 × 0.5 = 30 N. Step 3: Check: √(52² + 30²) = √(2,704 + 900) = √3,604 ≈ 60 N ✓.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Two forces act on a bolt: 80 N east and 60 N south. Find the resultant.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Rx = 80 N, Ry = −60 N (south is negative). Step 2: R = √(80² + 60²) = √10,000 = 100 N. Step 3: θ = tan⁻¹(60 ÷ 80) ≈ 36.9° south of east.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A crate weighs 500 N. What is its mass? (Use g = 9.81 m/s².)</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: W = m × g, so m = W ÷ g. Step 2: m = 500 ÷ 9.81 ≈ 51.0 kg.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A 50 N force acts at 36.87° above the horizontal. What are its x and y components?",
      "choices": [
        "30 N and 40 N",
        "40 N and 30 N",
        "25 N and 25 N",
        "50 N and 50 N"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Fx = 50 × cos 36.87° = 40 N; Fy = 50 × sin 36.87° = 30 N. (a) swaps sine and cosine. (c) 25 N and 25 N would be a 45° force. (d) is wrong: components are never both equal to the force."
    },
    {
      "q": "Which of these is a vector quantity?",
      "choices": [
        "Mass",
        "Temperature",
        "Force",
        "Time"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Force has magnitude and direction. (a), (b), and (d) are scalars — magnitude only."
    },
    {
      "q": "A 30 N force acts east and a 40 N force acts north. What is the resultant?",
      "choices": [
        "70 N east",
        "50 N at 53.1° north of east",
        "10 N north",
        "50 N due east"
      ],
      "answer": 1,
      "explanation": "Correct: (b). R = √(30² + 40²) = 50 N, at tan⁻¹(40 ÷ 30) ≈ 53.1° north of east. (a) 70 N adds the magnitudes — wrong for perpendicular forces. (c) 10 N subtracts them. (d) ignores the northward force."
    },
    {
      "q": "What is the unit of force in SI units?",
      "choices": [
        "Kilogram (kg)",
        "Joule (J)",
        "Newton (N)",
        "Pascal (Pa)"
      ],
      "answer": 2,
      "explanation": "Correct: (c). The newton is the SI unit of force. (a) is mass. (b) is energy. (d) is pressure (stress)."
    },
    {
      "q": "A 100 N force acts at 53.13° above the horizontal. What is its horizontal component?",
      "choices": [
        "80 N",
        "60 N",
        "100 N",
        "50 N"
      ],
      "answer": 1,
      "explanation": "Correct: (b). At 53.13°, cos = 0.6, so Fx = 100 × 0.6 = 60 N. (a) 80 N is the vertical component. (c) 100 N is the full force. (d) 50 N is half the force."
    },
    {
      "q": "How do you check that your force components are correct?",
      "choices": [
        "Add them: Fx + Fy must equal F",
        "Use Pythagoras: √(Fx² + Fy²) must equal F",
        "Multiply them: Fx × Fy must equal F",
        "Divide them: Fx ÷ Fy must equal F"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The components are the sides of a right triangle with the force as the hypotenuse. (a) is wrong: Fx + Fy is bigger than F. (c) and (d) are not checks that work."
    },
    {
      "q": "A 60 N force acts west. What is its x component?",
      "choices": [
        "+60 N",
        "−60 N",
        "0 N",
        "+30 N"
      ],
      "answer": 1,
      "explanation": "Correct: (b). West is the negative x direction, so Fx = −60 N. (a) is east. (c) would mean no horizontal force. (d) is half the force in the wrong direction."
    },
    {
      "q": "A crate weighs 500 N. What is its mass? (g = 9.81 m/s²)",
      "choices": [
        "500 kg",
        "51 kg",
        "4,905 kg",
        "9.81 kg"
      ],
      "answer": 1,
      "explanation": "Correct: (b). m = W ÷ g = 500 ÷ 9.81 ≈ 51 kg. (a) confuses weight with mass. (c) 4,905 kg multiplies W × g. (d) is g itself, not a mass."
    }
  ],
  "studyGuide": "<h2>Module 1 — Forces & Vectors: Study Guide</h2><p>A force is a vector: magnitude and direction. Resolve it with Fx = F × cos θ and Fy = F × sin θ, and add forces by adding components.</p><p><strong>Key terms:</strong> Force · Vector · Scalar · Components · Resultant · 3-4-5 triangle</p><p><strong>Remember:</strong></p><ul><li>Fx = F × cos θ, Fy = F × sin θ.</li><li>Add forces by adding x components and y components.</li><li>Check: √(Fx² + Fy²) must equal F.</li><li>3-4-5 triangle: 36.87° gives 0.8F and 0.6F.</li></ul>"
};
