// egr106 - Module 2: Free-Body Diagrams
module.exports = {
  "number": 2,
  "slug": "free-body-diagrams",
  "title": "Free-Body Diagrams",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a free-body diagram (FBD) is and why it is the first step in every statics problem.",
    "Draw an FBD: isolate the body, show every force, and label the supports.",
    "Tell pin, roller, and fixed supports apart and name the reactions each provides.",
    "Include weight, applied loads, and contact forces correctly.",
    "Read an FBD and list the unknown reactions."
  ],
  "sections": [
    {
      "heading": "What a Free-Body Diagram Is",
      "html": "<p>A free-body diagram is a sketch of one body — a beam, a joint, a crate — isolated from everything around it, with every force acting on it drawn as an arrow. Nothing else goes on the diagram: no supports, no other bodies, no dimensions that are not needed. The point is to make the forces visible so you can write equilibrium equations from them. Every statics problem in this course starts with an FBD; if the FBD is wrong, everything after it is wrong.</p>\n<p>The rules: draw the body alone. Show the weight acting down from the centre of gravity. Show every applied load with its direction. Show the support reactions at the supports. Show contact forces where the body touches something. Label every force with a name and, if known, a value. Draw arrows in the direction you think the force acts — if you guess a direction wrong, the maths will give you a negative answer, which tells you the force actually acts the other way.</p>\n"
    },
    {
      "heading": "Supports and Their Reactions",
      "html": "<p>Three supports appear in this course. A pin support (a hinge) can push in any direction, so it has two reactions: horizontal and vertical (Ax and Ay). A roller support can only push perpendicular to the surface it rolls on — on a horizontal surface, that is one vertical reaction (Ay). A fixed support (a cantilever built into a wall) can push in any direction and can also resist rotation, so it has three reactions: horizontal, vertical, and a moment (Ax, Ay, and M). Counting the reactions matters: the number of unknowns must match the number of equilibrium equations, or the structure cannot be solved by statics alone.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Pin = 2 reactions (Ax, Ay). Roller = 1 reaction (perpendicular to the surface). Fixed = 3 reactions (Ax, Ay, moment). Count the unknowns before you start.</div></p>\n"
    },
    {
      "heading": "Drawing an FBD, Step by Step",
      "html": "<p>Step 1: Decide what the “free body” is — the one thing you are analysing. Step 2: Draw it alone, as a simple shape. Step 3: Add the weight, acting down from the centre. Step 4: Add every applied load (a person, a crate, a wind force). Step 5: Replace each support with its reaction arrows. Step 6: Add contact forces (a cable pulling, a wall pushing). Step 7: Label everything, and add the dimensions you need for moments (distances from a point).</p>\n<p>Example: a beam on a pin at A (left) and a roller at B (right), with a 1,000 N load in the middle. The FBD shows: the beam, the 1,000 N load pointing down at the middle, Ax and Ay at A, and By (up) at B. That is the whole diagram — five arrows. From it, the equilibrium equations give Ax = 0, Ay = 500 N, By = 500 N.</p>\n"
    },
    {
      "heading": "Common FBD Errors",
      "html": "<p>The most common error is leaving a force out — usually the weight, or a horizontal reaction. The second is drawing a force on the wrong body: the FBD shows forces acting ON the body, not forces the body exerts on something else. If a beam pushes down on a wall, the wall pushes up on the beam — and it is the wall's push on the beam that goes on the beam's FBD. The third error is drawing a reaction in the wrong direction and then forgetting that a negative answer means the direction was wrong, not that the maths failed.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>An FBD isolates one body and shows every force acting on it, as arrows.</li><li>Pin = 2 reactions, roller = 1, fixed = 3.</li><li>Show the weight, every applied load, every support reaction, and every contact force.</li><li>Forces on the FBD act ON the body, not BY the body.</li><li>A negative answer means the force acts opposite to the direction you drew — flip the arrow.</li></ul></p>\n<p><strong>Common mistake:</strong> Leaving the weight off the diagram. A beam's own weight is a real force, and on a heavy beam it changes the answers.</p>\n<p><strong>Common mistake:</strong> Drawing a roller support with a horizontal reaction. A roller can only push perpendicular to its surface.</p>\n<p><strong>Ready check:</strong> If you can draw the FBD of a beam on a pin and a roller with a central load, and name each reaction, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Free-body diagram (FBD)",
      "def": "A sketch of one body isolated from its surroundings, showing every force acting on it."
    },
    {
      "term": "Pin support",
      "def": "A hinge support with two reactions: horizontal and vertical."
    },
    {
      "term": "Roller support",
      "def": "A support that can only push perpendicular to its surface: one reaction."
    },
    {
      "term": "Fixed support",
      "def": "A support built into a wall, with three reactions: horizontal, vertical, and a moment."
    },
    {
      "term": "Reaction",
      "def": "The force (or moment) a support exerts on a body to keep it in place."
    },
    {
      "term": "Applied load",
      "def": "A force applied to a body, e.g. a person standing on a beam."
    },
    {
      "term": "Centre of gravity",
      "def": "The point where a body's weight can be taken to act."
    },
    {
      "term": "Contact force",
      "def": "A force exerted where two bodies touch, e.g. a wall pushing on a beam."
    },
    {
      "term": "Isolate",
      "def": "To consider one body alone, separated from everything around it, for analysis."
    },
    {
      "term": "Two-force member",
      "def": "A member with forces at only two points (e.g. a truss member), so the forces must be equal, opposite, and along the member."
    },
    {
      "term": "Action and reaction",
      "def": "Newton's third law: every force has an equal and opposite force on the other body."
    },
    {
      "term": "Equilibrium",
      "def": "The state where all forces and moments balance, so a body stays at rest."
    }
  ],
  "video": {
    "title": "Example 1 - Statics (Ansys FBD & Equilibrium lesson) | Ansys",
    "embedUrl": "https://www.youtube.com/embed/aaYO8HXUhTc",
    "note": "A worked statics example built around a free-body diagram and equilibrium — watch how the diagram comes first.",
    "more": [
      {
        "title": "5.3 The Method of Joints - Video Lecture - JPM | JPM",
        "url": "https://www.youtube.com/watch?v=B8SEG7xPI-o"
      },
      {
        "title": "Adding and Resolving Force Vectors | MME",
        "url": "https://www.youtube.com/watch?v=GDcGBFrJCcU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A beam rests on a pin at A (left) and a roller at B (right), with a 1,000 N load at the middle. List every force that must appear on the beam's FBD, and how many unknown reactions there are.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The 1,000 N load, pointing down at the middle. Step 2: At the pin A: two reactions, Ax (horizontal) and Ay (vertical). Step 3: At the roller B: one reaction, By (vertical). Step 4: The beam's own weight, pointing down from the centre (if the weight is given). Step 5: Total unknowns: Ax, Ay, By — three.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A cantilever beam is fixed into a wall at A, with a 500 N load at the free end. How many reactions does the fixed support provide, and what are they?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A fixed support provides three reactions: a horizontal force Ax, a vertical force Ay, and a moment MA. Step 2: With a vertical load only, Ax = 0, Ay = 500 N up, and MA = 500 N × the beam length (counterclockwise), resisting the rotation the load causes.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A ladder leans against a smooth wall, with its foot on rough ground. List the forces on the ladder's FBD.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The ladder's weight, acting down from its centre. Step 2: At the wall (smooth, so no friction): a horizontal normal force pushing the ladder away from the wall. Step 3: At the ground (rough): a vertical normal force up, and a horizontal friction force toward the wall. Step 4: Total: four forces.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A sign hangs from a horizontal arm by two cables. The arm is pinned to a wall. Draw the FBD in words: what forces act on the arm?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The arm's weight, acting down from its centre. Step 2: The pull of each cable on the arm, acting along the cable. Step 3: At the pin: two reactions, Ax and Ay. Step 4: The sign's weight acts on the cables, not directly on the arm — it reaches the arm through the cable tension.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> You solve a problem and get Ay = −200 N. What does the negative sign mean?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The negative sign means the force actually acts opposite to the direction drawn on the FBD. Step 2: Ay was drawn upward, so it really acts downward with a magnitude of 200 N. Step 3: The maths is not wrong — the guessed direction was. Flip the arrow on the diagram.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A beam on a pin and a roller has three unknown reactions (Ax, Ay, By). How many equilibrium equations are available in two dimensions, and is the beam solvable by statics alone?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: In two dimensions there are three equilibrium equations: ΣFx = 0, ΣFy = 0, and ΣM = 0. Step 2: Three unknowns and three equations, so yes — the beam is statically determinate and solvable by statics alone.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What is a free-body diagram?",
      "choices": [
        "A drawing of a body with all its dimensions",
        "A sketch of one body isolated from its surroundings, showing every force acting on it",
        "A chart of a material's strength",
        "A diagram of a body's motion"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An FBD isolates one body and shows every force on it. (a) is a dimensioned drawing, not an FBD. (c) is a stress-strain diagram. (d) is a motion diagram."
    },
    {
      "q": "How many reactions does a pin support provide?",
      "choices": [
        "One: vertical only",
        "Two: horizontal and vertical",
        "Three: horizontal, vertical, and a moment",
        "None"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A pin (hinge) can push in any direction, so it has horizontal and vertical reactions. (a) is a roller. (c) is a fixed support. (d) is wrong: a pin provides reactions."
    },
    {
      "q": "How many reactions does a fixed support provide?",
      "choices": [
        "One",
        "Two",
        "Three: horizontal, vertical, and a moment",
        "Four"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A fixed support resists force in both directions and rotation. (a) is a roller. (b) is a pin. (d) is wrong: there are three."
    },
    {
      "q": "A roller support sits on a horizontal surface. In which direction does its reaction act?",
      "choices": [
        "Horizontally",
        "Vertically (perpendicular to the surface)",
        "Along the beam",
        "In any direction"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A roller can only push perpendicular to the surface it rolls on. (a) is wrong: a roller cannot push along the surface. (c) is wrong: along the beam is horizontal here. (d) is wrong: that is a pin."
    },
    {
      "q": "On a beam's FBD, which forces must be shown?",
      "choices": [
        "Only the applied loads",
        "Only the reactions",
        "Every force acting ON the beam: weight, applied loads, reactions, and contact forces",
        "Only the forces the beam exerts on other bodies"
      ],
      "answer": 2,
      "explanation": "Correct: (c). An FBD shows every force acting on the body. (a) and (b) each leave out half the forces. (d) is backwards: the FBD shows forces on the body, not by the body."
    },
    {
      "q": "You solve a problem and get a reaction of −200 N. What does the negative sign mean?",
      "choices": [
        "The maths is wrong",
        "The force acts opposite to the direction drawn on the FBD",
        "The force is zero",
        "The support has failed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A negative answer means the guessed direction was wrong — flip the arrow. (a) is wrong: the maths is fine. (c) is wrong: the magnitude is 200 N. (d) is wrong: a negative sign says nothing about failure."
    },
    {
      "q": "A beam on a pin and a roller has three unknown reactions. How many equilibrium equations are available in two dimensions?",
      "choices": [
        "Two",
        "Three: ΣFx = 0, ΣFy = 0, ΣM = 0",
        "Six",
        "One"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Two dimensions give three equilibrium equations. (a) forgets the moment equation. (c) is the count for three dimensions. (d) is wrong."
    },
    {
      "q": "A ladder leans against a smooth wall. What force does the wall exert on the ladder?",
      "choices": [
        "A horizontal force, because the wall is smooth and cannot provide friction",
        "A vertical force",
        "No force at all",
        "A force along the ladder"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A smooth surface can only push perpendicular to itself — horizontally, for a vertical wall. (b) is wrong: a smooth wall provides no vertical (friction) force. (c) is wrong: the wall pushes the ladder. (d) is wrong: the force is perpendicular to the wall, not along the ladder."
    }
  ],
  "studyGuide": "<h2>Module 2 — Free-Body Diagrams: Study Guide</h2><p>An FBD isolates one body and shows every force acting on it. Pin = 2 reactions, roller = 1, fixed = 3.</p><p><strong>Key terms:</strong> Free-body diagram · Pin · Roller · Fixed support · Reaction</p><p><strong>Remember:</strong></p><ul><li>Draw the body alone; show every force on it.</li><li>Pin = 2, roller = 1, fixed = 3 reactions.</li><li>A negative answer means the force acts the other way.</li><li>Forces on the FBD act ON the body, not BY it.</li></ul>"
};
