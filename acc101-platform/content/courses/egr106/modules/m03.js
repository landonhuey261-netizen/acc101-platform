// egr106 - Module 3: Equilibrium
module.exports = {
  "number": 3,
  "slug": "equilibrium",
  "title": "Equilibrium",
  "estTime": "3–4 hours",
  "objectives": [
    "State the three equilibrium equations for two dimensions.",
    "Use ΣFx = 0, ΣFy = 0, and ΣM = 0 to find beam reactions.",
    "Choose the moment centre to eliminate unknowns.",
    "Check a solution by taking moments about a different point.",
    "Explain what statically determinate means."
  ],
  "sections": [
    {
      "heading": "The Three Equilibrium Equations",
      "html": "<p>A body at rest is in equilibrium when the forces and the moments all balance. In two dimensions that gives three equations: <strong>ΣFx = 0</strong> (the horizontal forces add to zero), <strong>ΣFy = 0</strong> (the vertical forces add to zero), and <strong>ΣM = 0</strong> (the moments about any point add to zero). If all three hold, the body does not move and does not rotate. If any one fails, the body accelerates or spins.</p>\n<p>These three equations are the whole of statics. Every beam reaction, every truss member force, and every equilibrium check in this course comes from them. The skill is not memorising them — it is using them in the right order and with the right signs.</p>\n"
    },
    {
      "heading": "Worked Example: A Beam with Two Loads",
      "html": "<p>A 4 m beam rests on a pin at A (left end) and a roller at B (right end). It carries an 800 N load 1 m from A and a 600 N load 3 m from A. Find the reactions.</p>\n<p>Step 1: ΣFx = 0 gives Ax = 0 (there are no horizontal forces). Step 2: Take moments about A to eliminate Ay: ΣMA = 0. The 800 N load creates a clockwise moment of 800 × 1 = 800 N·m; the 600 N load creates 600 × 3 = 1,800 N·m clockwise; the roller reaction By creates a counterclockwise moment of By × 4. So By × 4 = 800 + 1,800 = 2,600, and <strong>By = 650 N</strong> up. Step 3: ΣFy = 0: Ay + By − 800 − 600 = 0, so Ay = 1,400 − 650 = <strong>750 N</strong> up. Step 4: Check by taking moments about B: Ay × 4 − 800 × 3 − 600 × 1 = 750 × 4 − 2,400 − 600 = 3,000 − 3,000 = 0 ✓.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Take moments about a support to eliminate its reaction from the equation — that leaves one unknown, which you can solve directly. Then check your answer by taking moments about a different point.</div></p>\n"
    },
    {
      "heading": "Signs and Moment Centres",
      "html": "<p>Pick a sign convention and stick to it: counterclockwise moments positive, clockwise negative (or the reverse — it does not matter, as long as you are consistent). Distances are measured from the moment centre to the line of action of the force, perpendicular to the force. A force acting through the moment centre has no moment about it — which is why taking moments about a support eliminates that support's reaction.</p>\n<p>Any point can be the moment centre, and ΣM = 0 must hold about every point. That is why the check works: if your reactions are right, moments about any point balance. If they do not, you have made an arithmetic error — go back and find it, do not just move on.</p>\n"
    },
    {
      "heading": "Statically Determinate — and When Statics Is Not Enough",
      "html": "<p>A structure is statically determinate when the number of unknown reactions equals the number of equilibrium equations (three, in two dimensions) — then statics alone solves it. A beam on a pin and a roller has three unknowns and three equations: determinate. A beam on two pins has four unknowns and three equations: indeterminate — statics alone cannot solve it, and you need to know how the beam bends (Module 11) to find the extra reaction. This course works with determinate structures, because the point is to learn the method, not to fight the maths.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Equilibrium in 2D: ΣFx = 0, ΣFy = 0, ΣM = 0.</li><li>Take moments about a support to eliminate its reaction and solve for the other one directly.</li><li>Always check by taking moments about a different point.</li><li>Three unknowns and three equations means statically determinate — solvable by statics alone.</li><li>Counterclockwise positive, clockwise negative (or the reverse), consistently.</li></ul></p>\n<p><strong>Common mistake:</strong> Mixing up the distance in a moment: the moment is force times the perpendicular distance from the moment centre, not the distance along the beam to the wrong point. Measure from the centre you chose.</p>\n<p><strong>Common mistake:</strong> Forgetting a load in ΣFy after using it in the moment equation. Every force appears in every equation it belongs to.</p>\n<p><strong>Ready check:</strong> If you can find the reactions of the 4 m beam with 800 N at 1 m and 600 N at 3 m (Ay = 750 N, By = 650 N) and check them by moments about B, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Equilibrium",
      "def": "The state where all forces and moments balance: ΣFx = 0, ΣFy = 0, ΣM = 0."
    },
    {
      "term": "ΣFx = 0",
      "def": "The horizontal forces add to zero."
    },
    {
      "term": "ΣFy = 0",
      "def": "The vertical forces add to zero."
    },
    {
      "term": "ΣM = 0",
      "def": "The moments about any point add to zero."
    },
    {
      "term": "Moment centre",
      "def": "The point about which moments are calculated."
    },
    {
      "term": "Statically determinate",
      "def": "A structure whose reactions can be found from the equilibrium equations alone."
    },
    {
      "term": "Statically indeterminate",
      "def": "A structure with more unknown reactions than equilibrium equations."
    },
    {
      "term": "Clockwise",
      "def": "The direction of rotation of a clock's hands; by convention often taken as negative."
    },
    {
      "term": "Counterclockwise",
      "def": "The opposite of clockwise; by convention often taken as positive."
    },
    {
      "term": "Line of action",
      "def": "The line along which a force acts; a moment is force times the perpendicular distance to this line."
    },
    {
      "term": "Concurrent forces",
      "def": "Forces whose lines of action meet at one point."
    },
    {
      "term": "Coplanar forces",
      "def": "Forces that all act in the same plane."
    }
  ],
  "video": {
    "title": "Resolution of Forces | Engineering Mechanics | Fx, Fy Components Explained",
    "embedUrl": "https://www.youtube.com/embed/08fMbh0jRUs",
    "note": "Resolving forces and using equilibrium — the bridge from Module 1's vectors to this module's reactions.",
    "more": [
      {
        "title": "Block on an Inclined Plane: Resolve Forces into x & y Components (With Examples)",
        "url": "https://www.youtube.com/watch?v=Sg798Bwvioc"
      },
      {
        "title": "Example 1 - Statics (Ansys FBD & Equilibrium lesson) | Ansys",
        "url": "https://www.youtube.com/watch?v=aaYO8HXUhTc"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 4 m beam on a pin at A and a roller at B carries an 800 N load 1 m from A and a 600 N load 3 m from A. Find the reactions at A and B.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: ΣFx = 0 gives Ax = 0. Step 2: Moments about A: By × 4 = 800 × 1 + 600 × 3 = 2,600, so By = 650 N up. Step 3: ΣFy = 0: Ay = 800 + 600 − 650 = 750 N up. Step 4: Check by moments about B: 750 × 4 − 800 × 3 − 600 × 1 = 3,000 − 3,000 = 0 ✓.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A 6 m beam on a pin at A and a roller at B carries a single 1,200 N load at the middle (3 m from A). Find the reactions.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: ΣFx = 0 gives Ax = 0. Step 2: Moments about A: By × 6 = 1,200 × 3 = 3,600, so By = 600 N up. Step 3: ΣFy = 0: Ay = 1,200 − 600 = 600 N up. Step 4: By symmetry, a central load splits equally — 600 N each ✓.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 5 m beam on a pin at A and a roller at B carries a 900 N load 2 m from A. Find the reactions.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: ΣFx = 0 gives Ax = 0. Step 2: Moments about A: By × 5 = 900 × 2 = 1,800, so By = 360 N up. Step 3: ΣFy = 0: Ay = 900 − 360 = 540 N up. Step 4: Check by moments about B: 540 × 5 − 900 × 3 = 2,700 − 2,700 = 0 ✓.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A beam on a pin and a roller has Ay = 750 N and By = 650 N, with loads of 800 N and 600 N. Verify ΣFy = 0.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Upward forces: 750 + 650 = 1,400 N. Step 2: Downward forces: 800 + 600 = 1,400 N. Step 3: 1,400 − 1,400 = 0 ✓ — the vertical forces balance.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A sign weighing 200 N hangs from the end of a 2 m horizontal arm pinned to a wall, held by a cable that pulls up at 45°. Find the cable tension (vertical equilibrium only: the cable's vertical component must balance the 200 N).</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The cable's vertical component is T × sin 45°. Step 2: ΣFy = 0 gives T × sin 45° = 200 N. Step 3: T = 200 ÷ 0.7071 ≈ 283 N.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A beam rests on two pins (four unknown reactions). Is it statically determinate? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Two pins give four unknowns (Ax, Ay, Bx, By). Step 2: Two dimensions give three equilibrium equations. Step 3: Four unknowns and three equations — the beam is statically indeterminate, so statics alone cannot solve it. Step 4: You would need to know how the beam bends (its stiffness) to find the extra reaction.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A 4 m beam on a pin at A and a roller at B carries 800 N at 1 m from A and 600 N at 3 m from A. What is the reaction at B?",
      "choices": [
        "750 N",
        "650 N",
        "1,400 N",
        "550 N"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Moments about A: By × 4 = 800 × 1 + 600 × 3 = 2,600, so By = 650 N. (a) 750 N is the reaction at A. (c) 1,400 N is the total load. (d) 550 N is neither reaction."
    },
    {
      "q": "In that same beam, what is the reaction at A (vertical)?",
      "choices": [
        "650 N",
        "750 N",
        "1,400 N",
        "100 N"
      ],
      "answer": 1,
      "explanation": "Correct: (b). ΣFy = 0: Ay = 800 + 600 − 650 = 750 N. (a) 650 N is the reaction at B. (c) 1,400 N is the total load. (d) 100 N is the difference between the reactions."
    },
    {
      "q": "What are the three equilibrium equations in two dimensions?",
      "choices": [
        "ΣFx = 0, ΣFy = 0, ΣFz = 0",
        "ΣFx = 0, ΣFy = 0, ΣM = 0",
        "ΣF = 0, ΣM = 0, ΣE = 0",
        "ΣFx = 0, ΣM = 0, ΣT = 0"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Two force equations and one moment equation. (a) is three-dimensional force balance, missing the moment. (c) and (d) invent equations that do not exist."
    },
    {
      "q": "Why take moments about a support when finding beam reactions?",
      "choices": [
        "Because moments are always zero at a support",
        "Because the support's own reaction has no moment about itself, so it drops out of the equation",
        "Because the beam is heaviest at the support",
        "Because the moment equation only works at a support"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A force through the moment centre has no moment, so taking moments about A eliminates Ay (and Ax) from the equation. (a) is wrong: moments about a support are not zero in general. (c) is wrong: weight is not the reason. (d) is wrong: moments can be taken about any point."
    },
    {
      "q": "A 6 m beam carries a single 1,200 N load at its middle. What is each reaction?",
      "choices": [
        "1,200 N and 0 N",
        "600 N and 600 N",
        "800 N and 400 N",
        "1,000 N and 200 N"
      ],
      "answer": 1,
      "explanation": "Correct: (b). By symmetry a central load splits equally: 600 N each. (a) is wrong: both supports carry load. (c) and (d) are not symmetric, so they cannot be right for a central load."
    },
    {
      "q": "How do you check a beam reaction solution?",
      "choices": [
        "Take moments about a different point and confirm they balance to zero",
        "Add the reactions and confirm they equal the beam's weight",
        "Check that Ax = 0",
        "Measure the beam again"
      ],
      "answer": 0,
      "explanation": "Correct: (a). ΣM = 0 must hold about every point, so a second moment centre is a real check. (b) is wrong: reactions must equal the total load, not just the beam's weight. (c) is wrong: Ax = 0 only when there are no horizontal forces. (d) is not a calculation check."
    },
    {
      "q": "A structure has 3 unknown reactions and 3 equilibrium equations. What is it called?",
      "choices": [
        "Statically indeterminate",
        "Statically determinate",
        "Unstable",
        "Over-constrained"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Equal numbers mean statics alone can solve it — determinate. (a) is the case with more unknowns than equations. (c) means it can move freely. (d) is not the standard term."
    },
    {
      "q": "A sign weighing 200 N hangs from a cable pulling up at 45°. What is the cable tension?",
      "choices": [
        "200 N",
        "283 N",
        "141 N",
        "400 N"
      ],
      "answer": 1,
      "explanation": "Correct: (b). T × sin 45° = 200, so T = 200 ÷ 0.7071 ≈ 283 N. (a) 200 N forgets the angle — only the vertical component balances the weight. (c) 141 N multiplies by sin 45°. (d) 400 N doubles the weight."
    }
  ],
  "studyGuide": "<h2>Module 3 — Equilibrium: Study Guide</h2><p>A body at rest satisfies ΣFx = 0, ΣFy = 0, ΣM = 0. Take moments about a support to eliminate its reaction; always check about a second point.</p><p><strong>Key terms:</strong> Equilibrium · ΣFx · ΣFy · ΣM · Statically determinate</p><p><strong>Remember:</strong></p><ul><li>ΣFx = 0, ΣFy = 0, ΣM = 0.</li><li>Take moments about a support to eliminate its reaction.</li><li>Check by taking moments about a different point.</li><li>3 unknowns, 3 equations = determinate.</li></ul>"
};
