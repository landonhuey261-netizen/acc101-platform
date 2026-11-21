// egr107 - Module 3: Newton's Laws and Kinetics: F = ma
module.exports = {
  "number": 3,
  "slug": "newtons-laws-kinetics",
  "title": "Newton's Laws and Kinetics: F = ma",
  "estTime": "3–4 hours",
  "objectives": [
    "State Newton's three laws in plain words and spot each one in a machine.",
    "Draw free-body diagrams and write equations of motion for a sliding body.",
    "Calculate friction force from the coefficient of friction and the normal force.",
    "Solve inclined-plane problems by splitting weight into components.",
    "Explain inertia and why a heavier load needs more force to accelerate."
  ],
  "sections": [
    {
      "heading": "Newton's Three Laws in Plain Words",
      "html": "<p><p>First law: a body keeps doing what it is doing — staying still or moving steadily — unless a net force acts on it. That resistance to change is called inertia, and it grows with mass. Second law: net force equals mass times acceleration, F = ma. Third law: every action has an equal and opposite reaction — if a wheel pushes backward on the ground, the ground pushes the wheel forward.</p></p>\n<p><p>These three laws run every machine. A motor must overcome inertia to start a load spinning. A brake must supply a force to decelerate a mass. A rocket and a forklift both work because of action and reaction. When a dynamics problem feels confusing, go back to the laws: which forces act, what is the net force, and what acceleration must it produce?</p></p>\n"
    },
    {
      "heading": "F = ma: The Workhorse Equation",
      "html": "<p><p>F = ma is the heart of kinetics. Given any two of force, mass, and acceleration, you can find the third. A 50 kg crate needs a net force of 50 × 2 = 100 N to accelerate at 2 m/s². Double the mass and you double the force for the same acceleration; double the acceleration and you double the force too. The equation uses net force — the total after all forces are added up, with direction.</p></p>\n<p><p>Example: a 200 kg machine slide is pushed with 600 N while friction pushes back with 200 N. Net force is 400 N, so acceleration is 400 ÷ 200 = 2 m/s². If the push stopped, friction alone would decelerate it at 200 ÷ 200 = 1 m/s². Always subtract the opposing forces first; using the push alone would give a wrong, too-large acceleration.</p></p>\n"
    },
    {
      "heading": "Friction: Helpful and Harmful",
      "html": "<p><p>Friction is a force that opposes sliding, equal to the coefficient of friction μ times the normal force N: F = μN. A steel-on-steel dry contact has μ around 0.15, a rubber tyre on dry road around 0.7, and a greased bearing far less. Static friction holds things still up to a limit; once sliding starts, kinetic friction (usually a little lower) takes over.</p></p>\n<p><p>Example: a 100 kg crate on a flat floor has a normal force of 100 × 9.81 = 981 N. With μ = 0.3, the friction force is 0.3 × 981 = 294 N. You must push harder than 294 N to get it moving. Friction is a friend in brakes and tyres and an enemy in bearings and slides — engineers fight it with lubrication and use it with brake pads, both by design.</p></p>\n"
    },
    {
      "heading": "Inclined Planes: Splitting the Weight",
      "html": "<p><p>On a slope, weight splits into two parts: one pressing into the slope (mg cos θ) and one pulling the body down the slope (mg sin θ). The normal force equals mg cos θ, so friction on the slope is μmg cos θ. A body slides when the downhill pull beats friction, which for a simple block happens when tan θ exceeds μ.</p></p>\n<p><p>Example: a 20 kg crate on a 30° ramp. Downhill pull = 20 × 9.81 × sin 30° = 20 × 9.81 × 0.5 = 98.1 N. Normal force = 20 × 9.81 × cos 30° = 169.9 N. With μ = 0.2, friction = 0.2 × 169.9 = 34.0 N, so the net downhill force is 98.1 − 34.0 = 64.1 N and acceleration is 64.1 ÷ 20 = 3.2 m/s² down the ramp.</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>First law: inertia resists change. Second law: F = ma. Third law: action and reaction.</li><li>Always use net force in F = ma.</li><li>Friction is F = μN, with N the normal force.</li><li>On a slope, weight splits into mg sin θ downhill and mg cos θ into the slope.</li><li>Heavier loads need proportionally more force for the same acceleration.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Using the full weight as the normal force on a slope. The normal force is mg cos θ, which is less than the weight.</p><p><strong>Common mistake:</strong> Forgetting friction when finding net force — the push alone is not the net force.</p><p><strong>Ready check:</strong> If you can find the acceleration of a crate pushed across a floor against friction, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Newton's first law",
      "def": "A body stays at rest or in steady motion unless a net force acts on it."
    },
    {
      "term": "Newton's second law",
      "def": "Net force equals mass times acceleration: F = ma."
    },
    {
      "term": "Newton's third law",
      "def": "For every action there is an equal and opposite reaction."
    },
    {
      "term": "Inertia",
      "def": "A body's resistance to a change in its motion; it grows with mass."
    },
    {
      "term": "Net force",
      "def": "The total force after all forces on a body are added up, with direction."
    },
    {
      "term": "Friction",
      "def": "A force that opposes sliding between two surfaces in contact."
    },
    {
      "term": "Coefficient of friction (μ)",
      "def": "A number that says how grippy a pair of surfaces is; friction = μ × normal force."
    },
    {
      "term": "Static friction",
      "def": "Friction that holds a body still before sliding starts."
    },
    {
      "term": "Kinetic friction",
      "def": "Friction that acts while a body is sliding."
    },
    {
      "term": "Normal force",
      "def": "The force a surface exerts at right angles to itself."
    },
    {
      "term": "Free-body diagram",
      "def": "A sketch of one part showing every force on it as an arrow."
    },
    {
      "term": "Inclined plane",
      "def": "A slope; weight on it splits into downhill and into-slope parts."
    },
    {
      "term": "Mass",
      "def": "Amount of matter, in kg; it decides how much force a given acceleration needs."
    },
    {
      "term": "Weight",
      "def": "The force of gravity on a body: W = mg."
    }
  ],
  "video": {
    "title": "Episode 05 — Newton's Second Law",
    "embedUrl": "https://www.youtube.com/embed/EDC1BJTY06M",
    "note": "Newton's second law explained step by step: force, mass, and acceleration, with worked examples.",
    "more": [
      {
        "title": "Newton's Laws of Motion Lesson 2 | Force, Friction, Momentum, Work & Energy",
        "url": "https://www.youtube.com/watch?v=g9fwavyDgJQ"
      },
      {
        "title": "Energy, Momentum, or F = ma? How to Choose the Right Equation",
        "url": "https://www.youtube.com/watch?v=XQY2iBJDTcU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 40 kg crate must accelerate at 3 m/s². What net force is needed?</p>",
      "solution": "<p><strong>Answer:</strong> F = ma = 40 × 3 = 120 N.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A 500 kg trolley is pushed with 1,500 N while friction opposes with 500 N. Find its acceleration.</p>",
      "solution": "<p><strong>Answer:</strong> Net force = 1,500 − 500 = 1,000 N. a = 1,000 ÷ 500 = 2 m/s².</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 60 kg crate sits on a floor with μ = 0.4. What horizontal force is needed to start it sliding?</p>",
      "solution": "<p><strong>Answer:</strong> Normal force = 60 × 9.81 = 588.6 N. Friction = 0.4 × 588.6 = 235.4 N, about 235 N.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A 10 kg block slides down a 20° slope with μ = 0.1. Find its acceleration down the slope.</p>",
      "solution": "<p><strong>Answer:</strong> Downhill pull = 10 × 9.81 × sin 20° = 33.6 N. Normal = 10 × 9.81 × cos 20° = 92.2 N. Friction = 0.1 × 92.2 = 9.2 N. Net = 24.4 N. a = 24.4 ÷ 10 = 2.44 m/s², about 2.4 m/s².</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A motor must accelerate a 25 kg carriage at 4 m/s² against 30 N of friction. What force must it supply?</p>",
      "solution": "<p><strong>Answer:</strong> Needed net force = 25 × 4 = 100 N. Motor force = 100 + 30 = 130 N.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain why a loaded truck takes longer to stop than an empty one, using F = ma.</p>",
      "solution": "<p><strong>Answer:</strong> The brakes supply a similar maximum force, but the loaded truck has more mass, so a = F ÷ m is smaller and it needs more time and distance to stop.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A 10 kg mass accelerates at 3 m/s². What net force acts on it?",
      "choices": [
        "3 N",
        "13 N",
        "30 N",
        "33 N"
      ],
      "answer": 2,
      "explanation": "Correct: (c). F = 10 × 3 = 30 N. (a) is the acceleration alone. (b) adds mass and acceleration. (d) divides instead of multiplying."
    },
    {
      "q": "A 200 N net force acts on a 50 kg crate. What is its acceleration?",
      "choices": [
        "4 m/s²",
        "10,000 m/s²",
        "0.25 m/s²",
        "250 m/s²"
      ],
      "answer": 0,
      "explanation": "Correct: (a). a = 200 ÷ 50 = 4 m/s². (b) multiplies force by mass. (c) divides mass by force. (d) adds them."
    },
    {
      "q": "A crate weighs 981 N on a flat floor and μ = 0.2. What is the friction force?",
      "choices": [
        "4,905 N",
        "196.2 N",
        "981 N",
        "49.05 N"
      ],
      "answer": 1,
      "explanation": "Correct: (b). F = 0.2 × 981 = 196.2 N. (a) divides weight by μ. (c) is the normal force, not friction. (d) multiplies by 0.05."
    },
    {
      "q": "Which law says a body keeps moving steadily unless a net force acts?",
      "choices": [
        "Second law",
        "Third law",
        "First law",
        "Law of gravitation"
      ],
      "answer": 2,
      "explanation": "Correct: (c). The first law is the inertia law. (a) is F = ma. (b) is action and reaction. (d) describes gravity, not inertia."
    },
    {
      "q": "A 30 kg block on a 30° slope: what is the downhill pull of its weight? (g = 9.81)",
      "choices": [
        "147.2 N",
        "254.9 N",
        "294.3 N",
        "30 N"
      ],
      "answer": 0,
      "explanation": "Correct: (a). mg sin 30° = 30 × 9.81 × 0.5 = 147.2 N. (b) is mg cos 30°, the into-slope part. (c) is the full weight. (d) is the mass alone."
    },
    {
      "q": "Push is 800 N, friction is 300 N, mass is 100 kg. What is the acceleration?",
      "choices": [
        "11 m/s²",
        "8 m/s²",
        "5 m/s²",
        "3 m/s²"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Net force = 500 N, a = 500 ÷ 100 = 5 m/s². (a) adds push and friction. (b) uses the push alone. (d) uses friction alone."
    },
    {
      "q": "Why does a heavier load need more force for the same acceleration?",
      "choices": [
        "Because friction disappears",
        "Because F = ma, so force grows with mass",
        "Because gravity gets weaker",
        "Because the load moves slower"
      ],
      "answer": 1,
      "explanation": "Correct: (b). F = ma means doubling mass doubles the force needed. (a) friction does not disappear. (c) gravity does not change. (d) speed is not the cause."
    },
    {
      "q": "Static friction is usually ___ kinetic friction.",
      "choices": [
        "less than",
        "greater than",
        "equal to",
        "unrelated to"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It takes more force to start sliding than to keep sliding. (a) is backwards. (c) they are usually different values. (d) they are closely related."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Newton's Laws and Kinetics: F = ma: Quick Reference</h3>\n<p><strong>Core idea:</strong> State Newton's three laws in plain words and spot each one in a machine.</p>\n<p><strong>Key terms:</strong> Newton's first law · Newton's second law · Newton's third law · Inertia · Net force · Friction · Coefficient of friction (μ) · Static friction.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>State Newton's three laws in plain words and spot each one in a machine.</li>\n<li>Draw free-body diagrams and write equations of motion for a sliding body.</li>\n<li>Calculate friction force from the coefficient of friction and the normal force.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
