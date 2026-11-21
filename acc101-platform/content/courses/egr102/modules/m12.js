// egr102 - Module 12: Putting It Together: Solving Real Engineering Problems
module.exports = {
  "number": 12,
  "slug": "solving-real-problems",
  "title": "Putting It Together: Solving Real Engineering Problems",
  "estTime": "3–4 hours",
  "objectives": [
    "Read a problem and list what is known and what is asked.",
    "Pick the right formula from the ones in this course.",
    "Work a multi-step problem without losing the units.",
    "Check an answer three ways: estimate, units, substitution.",
    "Present a solution clearly, step by step."
  ],
  "sections": [
    {
      "heading": "A Method for Every Problem",
      "html": "<p>Every engineering problem yields to the same method. Step 1: read it twice and list what is known and what is asked. Step 2: draw a sketch or a free-body diagram. Step 3: pick the formula that links what you know to what you want. Step 4: convert the units. Step 5: calculate. Step 6: check.</p>\n<p>Most mistakes happen in steps 1 and 4, not step 5. Students grab the wrong formula because they did not list what was known, or they calculate in mixed units. Slow down at the start and the calculation is usually easy.</p>\n"
    },
    {
      "heading": "Worked Problem 1: The Crane Cable",
      "html": "<p>A crane lifts a 500 kg load. The cable pulls at 30° from the vertical. What is the tension in the cable? Step 1: known: mass 500 kg, angle 30° from vertical; asked: tension. Step 2: the cable must support the weight: weight = 500 × 9.81 = 4,905 N straight down.</p>\n<p>Step 3: the vertical component of the tension must equal the weight, so T × cos 30° = 4,905 N. Step 4: T = 4,905 ÷ cos 30° = 4,905 ÷ 0.866 = 5,664 N, about 5.66 kN. Step 5: check — the tension is bigger than the weight, which makes sense: a tilted cable must pull harder to hold the same weight.</p>\n"
    },
    {
      "heading": "Worked Problem 2: The Braking Car",
      "html": "<p>A 1,000 kg car travels at 20 m/s and brakes to a stop in 40 m. What is the braking force? Step 1: known: m = 1,000 kg, u = 20 m/s, v = 0, s = 40 m; asked: force. Step 2: find the deceleration with v² = u² + 2as: 0 = 400 + 2 × a × 40, so a = −400 ÷ 80 = −5 m/s².</p>\n<p>Step 3: force = ma = 1,000 × 5 = 5,000 N. Step 4: check with energy: the car’s kinetic energy is ½ × 1,000 × 400 = 200,000 J, and work = force × distance = 5,000 × 40 = 200,000 J. The two methods agree — the answer is right.</p>\n"
    },
    {
      "heading": "Worked Problem 3: The Lever and the Load",
      "html": "<p>A worker uses a 1.5 m bar to lift a 900 N rock. The fulcrum is 0.3 m from the rock. What effort is needed? Step 1: known: load 900 N, load arm 0.3 m, bar 1.5 m; asked: effort. Step 2: the effort arm is 1.5 − 0.3 = 1.2 m.</p>\n<p>Step 3: moments balance: effort × 1.2 = 900 × 0.3 = 270 N·m. Step 4: effort = 270 ÷ 1.2 = 225 N. Step 5: check — MA = 1.2 ÷ 0.3 = 4, and 900 ÷ 4 = 225 N. Two ways, same answer.</p>\n<p><strong>Presenting Your Solution</strong></p>\n<p>A good solution is easy to follow: state what is known, name the formula, show the substitution, give the answer with its unit, and finish with a check. An answer with no working is a guess; an answer with wrong working but a right number is luck.</p>\n<p>In exams and at work, marks and trust go to the working, not just the answer. Write it so that another engineer can follow every step without asking you a question. If they cannot, the solution is not finished.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Method: known/asked, sketch, formula, units, calculate, check.</li><li>Resolve forces into components before balancing them.</li><li>Two methods that agree mean the answer is right.</li><li>Present solutions step by step, with units.</li></ul></p>\n<p><strong>Common mistake:</strong> Skipping the sketch. A free-body diagram or triangle sketch prevents most wrong-formula errors.</p>\n<p><strong>Common mistake:</strong> Mixing units mid-problem. Convert everything to SI first, then calculate.</p>\n<p><strong>Ready check:</strong> If you can work a crane-cable, a braking-car, and a lever problem from known to answer with a check, you have finished this course — well done.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Problem-solving method",
      "def": "Known/asked, sketch, formula, units, calculate, check — the six steps for any engineering problem."
    },
    {
      "term": "Free-body diagram",
      "def": "A sketch of an object with all the forces acting on it drawn as arrows."
    },
    {
      "term": "Tension",
      "def": "The pulling force in a rope, cable, or chain, in newtons."
    },
    {
      "term": "Known",
      "def": "A value given in the problem, to be listed before calculating."
    },
    {
      "term": "Asked",
      "def": "The value the problem wants you to find."
    },
    {
      "term": "Check",
      "def": "Verifying an answer by estimating, checking units, or solving a second way."
    },
    {
      "term": "Moment",
      "def": "Force × distance from a pivot; moments balance on a lever in equilibrium."
    },
    {
      "term": "Equilibrium",
      "def": "A state where forces and moments balance, so nothing accelerates or turns."
    },
    {
      "term": "Kilonewton (kN)",
      "def": "1,000 newtons; the everyday unit for large forces."
    },
    {
      "term": "Component",
      "def": "One part of a vector, usually horizontal or vertical."
    },
    {
      "term": "Resultant",
      "def": "The single vector that has the same effect as several vectors together."
    },
    {
      "term": "Work-energy principle",
      "def": "The net work done on an object equals its change in kinetic energy."
    },
    {
      "term": "Unit check",
      "def": "Checking that the units in a calculation give the unit the answer should have."
    },
    {
      "term": "Estimate",
      "def": "A rough answer worked out first, to check the exact answer makes sense."
    }
  ],
  "video": {
    "title": "Work and energy (part 2) | Work and energy | Physics | Khan Academy",
    "embedUrl": "https://www.youtube.com/embed/3mier94pbnU",
    "note": "Khan Academy puts work and energy together: kinetic energy from work, potential energy from lifting, and conservation of energy. It is a good review of the whole course’s physics before your final problem set.",
    "more": [
      {
        "title": "How Levers, Pulleys and Gears Work",
        "url": "https://www.youtube.com/watch?v=JnYVz1TSmBQ"
      },
      {
        "title": "What Are Simple Machines? | Types Of Simple Machines | The Dr Binocs Show | Peekaboo Kidz",
        "url": "https://www.youtube.com/watch?v=tk9iUjMEnaY"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Problem-solving method” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Problem-solving method — Known/asked, sketch, formula, units, calculate, check — the six steps for any engineering problem. It matters because it connects directly to this module’s first goal: Read a problem and list what is known and what is asked. A good answer names the term correctly, explains it in plain words, and gives a real example from the module.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Free-body diagram” and “Tension”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Free-body diagram — A sketch of an object with all the forces acting on it drawn as arrows. Tension — The pulling force in a rope, cable, or chain, in newtons. They differ in what they describe: the first is about free-body diagram, the second about tension. A good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module’s main idea: “Read a problem and list what is known and what is asked.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Read a problem and list what is known and what is asked. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Known — A value given in the problem, to be listed before calculating. Asked — The value the problem wants you to find. Check — Verifying an answer by estimating, checking units, or solving a second way. Moment — Force × distance from a pivot; moments balance on a lever in equilibrium. (Any four module terms, explained in the student’s own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A crane lifts a 500 kg load with a cable at 30° from the vertical. Work out the tension in the cable. (Weight = 500 × 9.81 = 4,905 N; cos 30° = 0.866.)</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The vertical component of the tension must balance the weight: T × cos 30° = 4,905 N. Step 2: T = 4,905 ÷ 0.866 = 5,664 N, about 5.66 kN. Step 3: Check: the tension is bigger than the weight, which is correct for a tilted cable.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A worker uses a 1.5 m bar to lift a 900 N rock. The fulcrum is 0.3 m from the rock. What effort is needed? Show the moment balance.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Effort arm = 1.5 − 0.3 = 1.2 m. Step 2: Moments balance: effort × 1.2 = 900 × 0.3 = 270 N·m. Step 3: Effort = 270 ÷ 1.2 = 225 N. Check: MA = 1.2 ÷ 0.3 = 4; 900 ÷ 4 = 225 N. Correct.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Problem-solving method” mean?",
      "choices": [
        "Known/asked, sketch, formula, units, calculate, check — the six steps for any engineering problem.",
        "The pulling force in a rope, cable, or chain, in newtons.",
        "A value given in the problem, to be listed before calculating.",
        "The value the problem wants you to find."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Problem-solving method means: Known/asked, sketch, formula, units, calculate, check — the six steps for any engineering problem.. (b) is the definition of Tension, not of Problem-solving method. (c) is the definition of Known, not of Problem-solving method. (d) is the definition of Asked, not of Problem-solving method."
    },
    {
      "q": "What does the term “Tension” mean?",
      "choices": [
        "The value the problem wants you to find.",
        "The pulling force in a rope, cable, or chain, in newtons.",
        "Verifying an answer by estimating, checking units, or solving a second way.",
        "Force × distance from a pivot; moments balance on a lever in equilibrium."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Tension means: The pulling force in a rope, cable, or chain, in newtons.. (a) is the definition of Asked, not of Tension. (c) is the definition of Check, not of Tension. (d) is the definition of Moment, not of Tension."
    },
    {
      "q": "What does the term “Asked” mean?",
      "choices": [
        "Force × distance from a pivot; moments balance on a lever in equilibrium.",
        "A state where forces and moments balance, so nothing accelerates or turns.",
        "The value the problem wants you to find.",
        "1,000 newtons; the everyday unit for large forces."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Asked means: The value the problem wants you to find.. (a) is the definition of Moment, not of Asked. (b) is the definition of Equilibrium, not of Asked. (d) is the definition of Kilonewton (kN), not of Asked."
    },
    {
      "q": "What does the term “Moment” mean?",
      "choices": [
        "1,000 newtons; the everyday unit for large forces.",
        "One part of a vector, usually horizontal or vertical.",
        "The single vector that has the same effect as several vectors together.",
        "Force × distance from a pivot; moments balance on a lever in equilibrium."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Moment means: Force × distance from a pivot; moments balance on a lever in equilibrium.. (a) is the definition of Kilonewton (kN), not of Moment. (b) is the definition of Component, not of Moment. (c) is the definition of Resultant, not of Moment."
    },
    {
      "q": "What is the FIRST step in the problem-solving method taught in this module?",
      "choices": [
        "Calculate as fast as possible.",
        "Read the problem twice and list what is known and what is asked.",
        "Pick a formula at random.",
        "Check the answer."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Listing known and asked comes first. (a) rushes and causes errors. (c) is guessing. (d) is the last step, not the first."
    },
    {
      "q": "A 1,000 kg car at 20 m/s brakes to a stop in 40 m. What is the braking force?",
      "choices": [
        "2,500 N",
        "5,000 N",
        "10,000 N",
        "20,000 N"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Deceleration is 5 m/s² (from v² = u² + 2as), so F = 1,000 × 5 = 5,000 N. (a) halves it. (c) doubles it. (d) uses 20 m/s²."
    },
    {
      "q": "A worker lifts a 900 N rock with a 1.5 m bar; the fulcrum is 0.3 m from the rock. What effort is needed?",
      "choices": [
        "225 N",
        "300 N",
        "450 N",
        "900 N"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Effort arm is 1.2 m; 900 × 0.3 ÷ 1.2 = 225 N. (b) uses a 0.9 m arm. (c) uses a 0.6 m arm. (d) is the load itself."
    },
    {
      "q": "Two different methods give the same answer to a problem. What does that mean?",
      "choices": [
        "Nothing — it is a coincidence.",
        "The answer is very likely correct, because two independent routes agree.",
        "One method must be wrong.",
        "The problem was too easy."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Agreement between independent methods is a strong check. (a) is wrong: agreement is evidence. (c) is backwards. (d) is irrelevant."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Putting It Together: Solving Real Engineering Problems: Quick Reference</h3>\n<p><strong>Core idea:</strong> Read a problem and list what is known and what is asked.</p>\n<p><strong>Key terms:</strong> Problem-solving method · Free-body diagram · Tension · Known · Asked · Check · Moment · Equilibrium.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Read a problem and list what is known and what is asked.</li>\n<li>Pick the right formula from the ones in this course.</li>\n<li>Work a multi-step problem without losing the units.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module’s main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
