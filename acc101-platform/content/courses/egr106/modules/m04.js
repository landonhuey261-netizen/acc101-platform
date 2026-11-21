// egr106 - Module 4: Moments & Couples
module.exports = {
  "number": 4,
  "slug": "moments-and-couples",
  "title": "Moments & Couples",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a moment is and use M = F × d.",
    "Find a moment when the force is at an angle (use the perpendicular component).",
    "Explain what a couple is and find its moment: M = F × distance between the forces.",
    "Work out the moment of a force about any point.",
    "Use moments to find a reaction, as in Module 3."
  ],
  "sections": [
    {
      "heading": "What a Moment Is",
      "html": "<p>A moment is a force's turning effect. Push on a door near the hinge and it barely moves; push near the handle and it swings easily — the same force, a different moment. The moment is the force times the perpendicular distance from the point to the force's line of action: <strong>M = F × d</strong>. Its unit is the newton-metre (N·m). A 100 N force pushing at right angles to a 2 m arm gives a moment of 200 N·m.</p>\n<p>Moments have a direction too: clockwise or counterclockwise. By convention, counterclockwise is usually taken as positive and clockwise as negative — but the choice is yours, as long as you are consistent within one problem. A moment that tries to rotate a body clockwise is not “negative” in any physical sense; the sign is bookkeeping.</p>\n"
    },
    {
      "heading": "Forces at an Angle",
      "html": "<p>When the force is not perpendicular to the arm, only the perpendicular component creates a moment — the component along the arm passes through the point and has no turning effect. Example: a 50 N force acts at 60° to a 3 m arm. The perpendicular component is 50 × sin 60° ≈ 43.3 N, and the moment is 43.3 × 3 ≈ 130 N·m. (Equivalently: M = F × d × sin θ, where θ is the angle between the force and the arm.)</p>\n<p>The most reliable method is to resolve the force into components first (Module 1), then take the moment of each component — the component along the arm contributes nothing, and the perpendicular component contributes F × d. If you resolve first, you never have to remember which sine or cosine to use.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> M = F × d, where d is the perpendicular distance. Only the component of force perpendicular to the arm creates a moment. Resolve first, then take moments.</div></p>\n"
    },
    {
      "heading": "Couples: Two Equal, Opposite, Parallel Forces",
      "html": "<p>A couple is two equal, opposite, parallel forces separated by a distance. A couple's moment is <strong>M = F × s</strong>, where s is the distance between the two forces — and, unlike a single force's moment, a couple's moment is the same about every point. Turn a steering wheel with both hands and you apply a couple; the wheel turns, but the centre of the wheel does not move sideways. Example: two 100 N forces 0.5 m apart give a couple moment of 100 × 0.5 = 50 N·m, whichever point you calculate it about.</p>\n<p>Couples matter because they are pure rotation: they have no net force, so they do not translate a body, they only turn it. A fixed support's moment reaction (Module 2) is a couple, and the internal bending moment in a beam (Module 10) is a couple too.</p>\n"
    },
    {
      "heading": "Moments in Equilibrium",
      "html": "<p>Moments are the tool that makes Module 3 work: taking moments about a support eliminates that support's reaction, leaving one unknown. They are also the tool for the next modules: a truss joint is in moment equilibrium, a beam's internal moment is what bends it, and a column's buckling is a moment problem. Every moment you calculate in this course is F × d with the right distance — the skill is always the same, and the distance is always the perpendicular one.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>M = F × d: force times the perpendicular distance from the point.</li><li>Only the perpendicular component of a force creates a moment.</li><li>A couple is two equal, opposite, parallel forces; its moment is F × s, the same about every point.</li><li>Counterclockwise is usually positive, clockwise negative — be consistent.</li><li>Resolve a force into components first, then take moments.</li></ul></p>\n<p><strong>Common mistake:</strong> Using the distance along the arm instead of the perpendicular distance. If the force is at an angle, the moment is F × d × sin θ, not F × d.</p>\n<p><strong>Common mistake:</strong> Thinking a couple's moment depends on where you calculate it. It does not — a couple is a free moment, the same about every point.</p>\n<p><strong>Ready check:</strong> If you can find the moment of a 50 N force at 60° on a 3 m arm (130 N·m) and the moment of a 100 N couple 0.5 m apart (50 N·m), you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Moment",
      "def": "A force's turning effect: M = F × d, in newton-metres (N·m)."
    },
    {
      "term": "Newton-metre (N·m)",
      "def": "The unit of moment."
    },
    {
      "term": "Perpendicular distance",
      "def": "The shortest distance from a point to a force's line of action; the distance that matters for a moment."
    },
    {
      "term": "Clockwise",
      "def": "Rotation in the direction of a clock's hands; by convention often negative."
    },
    {
      "term": "Counterclockwise",
      "def": "Rotation opposite to a clock's hands; by convention often positive."
    },
    {
      "term": "Couple",
      "def": "Two equal, opposite, parallel forces; a pure moment with no net force."
    },
    {
      "term": "Free moment",
      "def": "A moment (such as a couple's) that is the same about every point."
    },
    {
      "term": "Lever arm",
      "def": "The perpendicular distance from a point to a force's line of action."
    },
    {
      "term": "Varignon's theorem",
      "def": "The moment of a force about a point equals the sum of the moments of its components about that point."
    },
    {
      "term": "Moment centre",
      "def": "The point about which a moment is calculated."
    },
    {
      "term": "Turning effect",
      "def": "The tendency of a force to rotate a body about a point — a moment."
    },
    {
      "term": "Resultant moment",
      "def": "The sum of all the moments acting on a body about a point."
    }
  ],
  "video": {
    "title": "6.4 Shear and Moment Diagrams - Video Lecture - JPM | JPM",
    "embedUrl": "https://www.youtube.com/embed/ErqQjGC5rg0",
    "note": "A lecture on shear and moment diagrams — the moment ideas in this module are the foundation of those diagrams. (The closest verified video on moments; the module text covers moments and couples in full.)",
    "more": [
      {
        "title": "Understanding Shear Force and Bending Moment Diagrams | The Efficient Engineer",
        "url": "https://www.youtube.com/watch?v=C-FEVzI8oe8"
      },
      {
        "title": "Adding and Resolving Force Vectors | MME",
        "url": "https://www.youtube.com/watch?v=GDcGBFrJCcU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 100 N force pushes at right angles to a 2 m arm. What is the moment about the end of the arm?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: M = F × d. Step 2: M = 100 × 2 = 200 N·m.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A 50 N force acts at 60° to a 3 m arm. What is the moment about the end of the arm?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The perpendicular component is 50 × sin 60° ≈ 43.3 N. Step 2: M = 43.3 × 3 ≈ 130 N·m. Step 3: Equivalently, M = 50 × 3 × sin 60° ≈ 130 N·m.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Two 100 N forces, equal, opposite, and parallel, are 0.5 m apart. What is the couple moment?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A couple's moment is M = F × s. Step 2: M = 100 × 0.5 = 50 N·m. Step 3: This moment is the same about every point.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A 200 N force acts downward at the end of a 1.5 m horizontal arm. What is the moment about the fixed end, and in which direction?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The force is perpendicular to the arm, so M = 200 × 1.5 = 300 N·m. Step 2: A downward force at the right end rotates the arm clockwise, so the moment is 300 N·m clockwise (negative by the usual convention).</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A force of 80 N acts at 30° above the horizontal at a point 2 m to the right of A. What is its moment about A? (Use sin 30° = 0.5, cos 30° ≈ 0.866.)</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Resolve: Fx = 80 × 0.866 ≈ 69.3 N (horizontal, along the arm — no moment about A), Fy = 80 × 0.5 = 40 N (vertical). Step 2: The vertical component's moment about A is 40 × 2 = 80 N·m counterclockwise. Step 3: The horizontal component passes 0 m from A vertically, so its moment is zero. Total: 80 N·m counterclockwise.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A steering wheel is 0.4 m across. The driver pushes up with 60 N on the left side and down with 60 N on the right side. What is the couple moment turning the wheel?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The two forces are equal, opposite, and parallel — a couple. Step 2: The distance between them is 0.4 m. Step 3: M = 60 × 0.4 = 24 N·m.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A 100 N force pushes at right angles to a 2 m arm. What is the moment?",
      "choices": [
        "50 N·m",
        "200 N·m",
        "100 N·m",
        "2 N·m"
      ],
      "answer": 1,
      "explanation": "Correct: (b). M = F × d = 100 × 2 = 200 N·m. (a) 50 N·m divides instead of multiplying. (c) 100 N·m is the force alone. (d) 2 N·m is the distance alone."
    },
    {
      "q": "A 50 N force acts at 60° to a 3 m arm. What is the moment?",
      "choices": [
        "150 N·m",
        "130 N·m",
        "75 N·m",
        "50 N·m"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Only the perpendicular component counts: 50 × sin 60° × 3 ≈ 130 N·m. (a) 150 N·m uses F × d without the angle. (c) 75 N·m is 50 × 3 × sin 30° — the wrong angle. (d) is the force alone."
    },
    {
      "q": "What is a couple?",
      "choices": [
        "Two forces acting at the same point",
        "Two equal, opposite, parallel forces separated by a distance",
        "A force and its reaction",
        "Two forces in the same direction"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A couple is two equal, opposite, parallel forces — a pure moment. (a) describes concurrent forces. (c) is Newton's third law, not a couple. (d) is two forces that add, not a couple."
    },
    {
      "q": "Two 100 N forces form a couple 0.5 m apart. What is the couple moment?",
      "choices": [
        "200 N·m",
        "50 N·m",
        "100 N·m",
        "0 N·m"
      ],
      "answer": 1,
      "explanation": "Correct: (b). M = F × s = 100 × 0.5 = 50 N·m. (a) 200 N·m divides by the distance. (c) 100 N·m is one force alone. (d) is wrong: the forces do not cancel as a moment — they add."
    },
    {
      "q": "What is the unit of a moment?",
      "choices": [
        "Newton (N)",
        "Joule (J)",
        "Newton-metre (N·m)",
        "Pascal (Pa)"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Moment = force × distance, so N·m. (a) is force. (b) is energy — also N·m in units, but the name joule is used for energy, not moments. (d) is pressure."
    },
    {
      "q": "A couple's moment is calculated about point A and then about point B. How do the two values compare?",
      "choices": [
        "They are different",
        "They are the same — a couple is a free moment",
        "The one about B is double",
        "The one about A is zero"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A couple's moment is the same about every point. (a) is true for a single force's moment, not a couple's. (c) and (d) are wrong."
    },
    {
      "q": "A 200 N downward force acts at the end of a 1.5 m horizontal arm. What is the moment about the fixed end?",
      "choices": [
        "300 N·m clockwise",
        "300 N·m counterclockwise",
        "133 N·m clockwise",
        "200 N·m clockwise"
      ],
      "answer": 0,
      "explanation": "Correct: (a). M = 200 × 1.5 = 300 N·m; a downward force at the right end turns the arm clockwise. (b) has the direction backwards. (c) 133 N·m divides instead of multiplying. (d) is the force alone."
    },
    {
      "q": "Why do you resolve a force into components before taking its moment?",
      "choices": [
        "Because moments only work on components",
        "Because the component along the arm has no moment, and the perpendicular component's moment is easy to find",
        "Because the force is too big to use directly",
        "Because you need the resultant first"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Resolving first means you only ever use F × d on a perpendicular component — no angle to remember. (a) is wrong: moments work on any force. (c) is wrong: size is not the issue. (d) is wrong: you do not need a resultant."
    }
  ],
  "studyGuide": "<h2>Module 4 — Moments & Couples: Study Guide</h2><p>A moment is a force's turning effect: M = F × d, using the perpendicular distance. A couple is two equal, opposite, parallel forces — a pure moment, the same about every point.</p><p><strong>Key terms:</strong> Moment · Couple · Lever arm · Perpendicular distance</p><p><strong>Remember:</strong></p><ul><li>M = F × d — perpendicular distance only.</li><li>Only the perpendicular component creates a moment.</li><li>Couple: M = F × s, same about every point.</li><li>Resolve first, then take moments.</li></ul>"
};
