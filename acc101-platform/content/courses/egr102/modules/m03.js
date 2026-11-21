// egr102 - Module 3: Vectors: Components, Addition, and Resultants
module.exports = {
  "number": 3,
  "slug": "vectors",
  "title": "Vectors: Components, Addition, and Resultants",
  "estTime": "3–4 hours",
  "objectives": [
    "Tell a vector apart from a scalar.",
    "Break a vector into horizontal and vertical components.",
    "Add two vectors using components.",
    "Find the magnitude and direction of a resultant.",
    "Draw a vector to scale and read answers from the drawing."
  ],
  "sections": [
    {
      "heading": "Vectors Have Size AND Direction",
      "html": "<p>Some quantities need only a size: a mass of 5 kg, a temperature of 20°C, a time of 10 s. These are scalars — size only. Others need a size and a direction: a force of 10 N pushing east, a velocity of 20 m/s north. These are vectors, drawn as arrows: the length shows the size, the arrowhead shows the direction.</p>\n<p>Direction matters. A 10 N push east and a 10 N push west cancel out; two 10 N pushes east add to 20 N east. If you ignore direction, your answer is wrong even when your arithmetic is right.</p>\n"
    },
    {
      "heading": "Components: Splitting a Vector Into Two",
      "html": "<p>Any vector can be split into a horizontal part and a vertical part, called components. A 10 N force at 30° above the horizontal has a horizontal component of 10 × cos 30° = 10 × 0.866 = 8.66 N, and a vertical component of 10 × sin 30° = 10 × 0.5 = 5.00 N.</p>\n<p>The two components are the sides of a right triangle whose hypotenuse is the vector itself. Check with Pythagoras: 8.66² + 5.00² = 75.0 + 25.0 = 100, and √100 = 10 N — the original force. If the check fails, a component is wrong.</p>\n"
    },
    {
      "heading": "Adding Vectors: Components Make It Easy",
      "html": "<p>To add vectors, split each one into components, add the horizontal parts together, add the vertical parts together, and then combine the totals. Example: a 30 N force east and a 40 N force north. Horizontal total = 30 N, vertical total = 40 N.</p>\n<p>The resultant is the single vector that has the same effect as both together. Its size is √(30² + 40²) = √(900 + 1,600) = √2,500 = 50 N. Its direction is tan⁻¹(40 ÷ 30) = tan⁻¹(1.333) = 53.1° north of east. That 3-4-5 pattern appears again — 30-40-50 is just 3-4-5 times ten.</p>\n"
    },
    {
      "heading": "Resultants and Equilibrium",
      "html": "<p>The resultant is the answer to “what does all of this add up to?” If the resultant is zero, the forces balance and the object stays still or moves steadily — this is equilibrium. A picture hanging on two wires is in equilibrium: the two wire pulls add up to exactly balance the picture’s weight.</p>\n<p>Engineers use resultants to size real things: the pull on a crane cable, the push on a bridge support, the force on a bolt holding two plates together. If you can find the resultant, you can say how strong the part must be.</p>\n<p><strong>Drawing Vectors to Scale</strong></p>\n<p>Before calculators, engineers drew vectors to scale: 1 cm = 10 N, for example. Draw the first arrow, put the second arrow’s tail on the first arrow’s head, and the arrow from the start to the finish is the resultant. Measure its length and angle with a ruler and protractor.</p>\n<p>Drawing is still worth doing: it shows you roughly what the answer should be, so a calculator answer of 500 N when the drawing says about 50 N is obviously wrong. Draw first, calculate second, and compare.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Scalars have size only; vectors have size and direction.</li><li>Components: horizontal = F × cos(angle), vertical = F × sin(angle).</li><li>Add vectors by adding their components, then combine with Pythagoras.</li><li>Resultant size = √(H² + V²); direction = tan⁻¹(V ÷ H).</li><li>Zero resultant means equilibrium.</li></ul></p>\n<p><strong>Common mistake:</strong> Swapping sine and cosine. The component next to the angle uses cosine; the one across from it uses sine.</p>\n<p><strong>Common mistake:</strong> Forgetting that opposite directions subtract. A 10 N push east and a 10 N push west give 0 N, not 20 N.</p>\n<p><strong>Ready check:</strong> If you can split a 10 N force at 30° into 8.66 N and 5.00 N, and add 30 N east and 40 N north to get 50 N at 53.1°, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Scalar",
      "def": "A quantity with size only, such as mass (5 kg) or time (10 s)."
    },
    {
      "term": "Vector",
      "def": "A quantity with size and direction, such as a force of 10 N east; drawn as an arrow."
    },
    {
      "term": "Magnitude",
      "def": "The size of a vector, such as 10 N."
    },
    {
      "term": "Direction",
      "def": "Where a vector points, such as east, or 30° above the horizontal."
    },
    {
      "term": "Component",
      "def": "One of the two parts a vector is split into, usually horizontal and vertical."
    },
    {
      "term": "Resultant",
      "def": "The single vector that has the same effect as two or more vectors added together."
    },
    {
      "term": "Equilibrium",
      "def": "A state where all forces balance, so the resultant is zero and nothing accelerates."
    },
    {
      "term": "Scale drawing",
      "def": "A drawing where a fixed length stands for a fixed amount, such as 1 cm = 10 N."
    },
    {
      "term": "Force",
      "def": "A push or pull, measured in newtons (N); a vector."
    },
    {
      "term": "Velocity",
      "def": "Speed with a direction, such as 20 m/s north; a vector."
    },
    {
      "term": "Displacement",
      "def": "How far something has moved from its start, in a straight line and a direction; a vector."
    },
    {
      "term": "Newton (N)",
      "def": "The unit of force; 1 N is the force that accelerates 1 kg at 1 m/s²."
    },
    {
      "term": "Head-to-tail",
      "def": "A way of adding vectors: put the tail of the second arrow on the head of the first."
    },
    {
      "term": "Angle",
      "def": "How far a vector is turned from a reference direction, usually the horizontal, in degrees."
    }
  ],
  "video": {
    "title": "Vector intro for linear algebra | Vectors and spaces | Linear Algebra | Khan Academy",
    "embedUrl": "https://www.youtube.com/embed/br7tS1t2SFE",
    "note": "Khan Academy’s plain introduction to vectors: size plus direction, and how to draw them. Watch it, then split a 10 N force at 30° into its two components on paper.",
    "more": [
      {
        "title": "Work, Energy, and Power - Basic Introduction",
        "url": "https://www.youtube.com/watch?v=tqZ6xwu2Ve8"
      },
      {
        "title": "Work and energy (part 2) | Work and energy | Physics | Khan Academy",
        "url": "https://www.youtube.com/watch?v=3mier94pbnU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Scalar” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Scalar — A quantity with size only, such as mass (5 kg) or time (10 s). It matters because it connects directly to this module’s first goal: Tell a vector apart from a scalar. A good answer names the term correctly, explains it in plain words, and gives a real example from the module.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Vector” and “Magnitude”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Vector — A quantity with size and direction, such as a force of 10 N east; drawn as an arrow. Magnitude — The size of a vector, such as 10 N. They differ in what they describe: the first is about vector, the second about magnitude. A good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module’s main idea: “Tell a vector apart from a scalar.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Tell a vector apart from a scalar. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Direction — Where a vector points, such as east, or 30° above the horizontal. Component — One of the two parts a vector is split into, usually horizontal and vertical. Resultant — The single vector that has the same effect as two or more vectors added together. Equilibrium — A state where all forces balance, so the resultant is zero and nothing accelerates. (Any four module terms, explained in the student’s own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A 50 N force acts at 60° above the horizontal. Work out its horizontal and vertical components. (cos 60° = 0.5, sin 60° = 0.866.) Check your answer with Pythagoras.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Horizontal = 50 × cos 60° = 50 × 0.5 = 25.0 N. Step 2: Vertical = 50 × sin 60° = 50 × 0.866 = 43.3 N. Step 3: Check: 25.0² + 43.3² = 625 + 1,875 = 2,500; √2,500 = 50 N. Correct.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Two forces act on a bolt: 6 N east and 8 N north. Work out the resultant force (size and direction).</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Size = √(6² + 8²) = √(36 + 64) = √100 = 10 N. Step 2: Direction = tan⁻¹(8 ÷ 6) = tan⁻¹(1.333) = 53.1° north of east. A good answer gives both the size and the direction.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Scalar” mean?",
      "choices": [
        "A quantity with size only, such as mass (5 kg) or time (10 s).",
        "The size of a vector, such as 10 N.",
        "Where a vector points, such as east, or 30° above the horizontal.",
        "One of the two parts a vector is split into, usually horizontal and vertical."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Scalar means: A quantity with size only, such as mass (5 kg) or time (10 s).. (b) is the definition of Magnitude, not of Scalar. (c) is the definition of Direction, not of Scalar. (d) is the definition of Component, not of Scalar."
    },
    {
      "q": "What does the term “Magnitude” mean?",
      "choices": [
        "One of the two parts a vector is split into, usually horizontal and vertical.",
        "The size of a vector, such as 10 N.",
        "The single vector that has the same effect as two or more vectors added together.",
        "A state where all forces balance, so the resultant is zero and nothing accelerates."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Magnitude means: The size of a vector, such as 10 N.. (a) is the definition of Component, not of Magnitude. (c) is the definition of Resultant, not of Magnitude. (d) is the definition of Equilibrium, not of Magnitude."
    },
    {
      "q": "What does the term “Component” mean?",
      "choices": [
        "A state where all forces balance, so the resultant is zero and nothing accelerates.",
        "A drawing where a fixed length stands for a fixed amount, such as 1 cm = 10 N.",
        "One of the two parts a vector is split into, usually horizontal and vertical.",
        "A push or pull, measured in newtons (N); a vector."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Component means: One of the two parts a vector is split into, usually horizontal and vertical.. (a) is the definition of Equilibrium, not of Component. (b) is the definition of Scale drawing, not of Component. (d) is the definition of Force, not of Component."
    },
    {
      "q": "What does the term “Equilibrium” mean?",
      "choices": [
        "A push or pull, measured in newtons (N); a vector.",
        "Speed with a direction, such as 20 m/s north; a vector.",
        "How far something has moved from its start, in a straight line and a direction; a vector.",
        "A state where all forces balance, so the resultant is zero and nothing accelerates."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Equilibrium means: A state where all forces balance, so the resultant is zero and nothing accelerates.. (a) is the definition of Force, not of Equilibrium. (b) is the definition of Velocity, not of Equilibrium. (c) is the definition of Displacement, not of Equilibrium."
    },
    {
      "q": "Which of these is a vector?",
      "choices": [
        "A mass of 5 kg",
        "A temperature of 20°C",
        "A force of 10 N east",
        "A time of 10 s"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A force of 10 N east has size and direction. (a), (b), and (d) are scalars — size only."
    },
    {
      "q": "A 10 N force acts at 30° above the horizontal. What is its horizontal component? (cos 30° = 0.866.)",
      "choices": [
        "5.00 N",
        "8.66 N",
        "10 N",
        "15 N"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Horizontal = 10 × cos 30° = 8.66 N. (a) is the vertical component (10 × sin 30°). (c) is the whole force. (d) is 10 ÷ cos 30°, the wrong operation."
    },
    {
      "q": "Two forces act on a point: 30 N east and 40 N north. What is the size of the resultant?",
      "choices": [
        "10 N",
        "35 N",
        "50 N",
        "70 N"
      ],
      "answer": 2,
      "explanation": "Correct: (c). √(30² + 40²) = √2,500 = 50 N. (a) subtracts them. (b) averages them. (d) adds them as if they were in the same direction."
    },
    {
      "q": "If all the forces on an object add up to zero, what is true?",
      "choices": [
        "The object must be still.",
        "The object is in equilibrium: it stays still or moves at a steady speed.",
        "The object must be speeding up.",
        "The object has no mass."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Zero resultant means equilibrium — still or steady motion. (a) is too narrow: steady motion is also possible. (c) is wrong: speeding up needs a net force. (d) is wrong: mass is unrelated."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Vectors: Components, Addition, and Resultants: Quick Reference</h3>\n<p><strong>Core idea:</strong> Tell a vector apart from a scalar.</p>\n<p><strong>Key terms:</strong> Scalar · Vector · Magnitude · Direction · Component · Resultant · Equilibrium · Scale drawing.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Tell a vector apart from a scalar.</li>\n<li>Break a vector into horizontal and vertical components.</li>\n<li>Add two vectors using components.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module’s main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
