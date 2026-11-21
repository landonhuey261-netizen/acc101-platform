// egr290 — module 2. Original review content.
module.exports = {
  "number": 2,
  "slug": "statics-and-dynamics-review",
  "title": "Statics and Dynamics Review",
  "estTime": "3–4 hours",
  "objectives": [
    "Draw a free-body diagram and write the equilibrium equations ΣF = 0 and ΣM = 0 for a rigid body.",
    "Find reactions on beams and forces in truss members by the method of joints and the method of sections.",
    "Use friction, centroids, and moments of inertia on FE-style problems.",
    "Solve kinematics problems with constant acceleration and projectile motion.",
    "Apply Newton's second law, work–energy, and impulse–momentum to moving bodies."
  ],
  "sections": [
    {
      "heading": "Equilibrium: Free-Body Diagrams First",
      "html": "<p>Statics is the study of bodies at rest or moving at constant velocity — bodies in <strong>equilibrium</strong>. The whole subject rests on two equations: <strong>ΣF = 0</strong> (the sum of forces is zero) and <strong>ΣM = 0</strong> (the sum of moments about any point is zero). Every statics problem starts the same way: draw the <strong>free-body diagram</strong>, showing the body alone with every force on it, including the reactions at the supports. A pin support has two reaction components (horizontal and vertical); a roller has one (perpendicular to the surface); a fixed support has two forces and a moment.</p><p>Worked example: a simply supported beam spans 8 m. A 30 kN load acts 3 m from the left support A. Take moments about A: R_B × 8 = 30 × 3, so R_B = 90/8 = 11.25 kN. Vertical equilibrium gives R_A = 30 − 11.25 = 18.75 kN. The maximum bending moment is under the load: M = R_A × 3 = 18.75 × 3 = 56.25 kN·m. Check: the moment at B from the load is 30 × 5 = 150 kN·m minus R_A × 8 = 150 kN·m — it balances, so the reactions are right.</p>"
    },
    {
      "heading": "Trusses, Friction, and Centroids",
      "html": "<p>A <strong>truss</strong> is a frame of members joined at pins, loaded only at the joints, so each member carries axial force only — tension or compression. The <strong>method of joints</strong> writes ΣF_x = 0 and ΣF_y = 0 at one joint at a time; the <strong>method of sections</strong> cuts through the truss and writes equilibrium for one side, which is faster when you only need one member. A zero-force member is one that carries no load in the given loading — spotting them saves time. Remember the sign convention: a member pulling away from the joint is in tension (positive); pushing into the joint is compression (negative).</p><p><strong>Friction:</strong> the maximum static friction force is F = μ_s × N, where N is the normal force. A block on a flat surface with μ_s = 0.3 and weight 1,000 N needs 300 N to start moving. Once moving, kinetic friction (μ_k, usually smaller) applies. <strong>Centroid:</strong> the centre of area — for a rectangle it is at the middle; for a triangle it is one-third of the height from the base. The <strong>moment of inertia</strong> of a rectangle about its centroidal axis is I = bh³/12; for a solid circle, I = πd⁴/64. A circle 100 mm in diameter has I = π × (100)⁴/64 = 4.91 × 10⁶ mm⁴.</p>"
    },
    {
      "heading": "Kinematics: Describing Motion",
      "html": "<p>Kinematics describes motion without asking what causes it. For <strong>constant acceleration</strong>, the three equations you need are v = u + at, s = ut + ½at², and v² = u² + 2as. A car accelerating from rest at 2 m/s² for 5 s reaches v = 0 + 2 × 5 = 10 m/s and travels s = 0 + ½ × 2 × 25 = 25 m. <strong>Projectile motion</strong> splits into horizontal motion (constant velocity) and vertical motion (constant acceleration g = 9.81 m/s² downward). A ball thrown horizontally at 10 m/s from a height of 5 m hits the ground after t = √(2h/g) = √(10/9.81) = 1.01 s, having travelled 10 × 1.01 = 10.1 m horizontally.</p><p><strong>Circular motion:</strong> a body moving at speed v on a circle of radius r has centripetal acceleration a = v²/r toward the centre. At v = 10 m/s and r = 5 m, a = 100/5 = 20 m/s², and the angular velocity is ω = v/r = 2 rad/s. Keep the directions straight: velocity is tangent to the circle, acceleration points to the centre, and the force that provides it is whatever pulls inward — tension, friction, or a normal force.</p>"
    },
    {
      "heading": "Kinetics: Work, Energy, and Momentum",
      "html": "<p>Kinetics connects forces to motion. <strong>Newton's second law</strong>, F = ma, is the starting point: a 2 kg mass pushed with 10 N accelerates at 5 m/s². <strong>Work</strong> is force times distance in the direction of the force: W = Fd cos θ. A 100 N force pushing a box 5 m at 60° to the motion does W = 100 × 5 × 0.5 = 250 J. <strong>Kinetic energy</strong> is ½mv² — a 2 kg mass at 10 m/s has ½ × 2 × 100 = 100 J — and <strong>gravitational potential energy</strong> is mgh: a 5 kg mass 10 m up holds 5 × 9.81 × 10 = 490.5 J. The <strong>work–energy principle</strong> says the work done equals the change in kinetic energy.</p><p><strong>Impulse and momentum:</strong> momentum is p = mv (a 3 kg mass at 4 m/s has 12 kg·m/s), and impulse is F × t — a 50 N force for 0.2 s delivers 10 N·s of impulse, changing the momentum by 10 kg·m/s. In a collision with no outside impulse, total momentum is conserved. <strong>Power</strong> is the rate of doing work: 1,000 J in 5 s is 200 W, and for a rotating shaft P = Tω, so a torque of 100 N·m at 100 rad/s is 10 kW.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Equilibrium: ΣF = 0 and ΣM = 0. Draw the free-body diagram first, every time.</li><li>Beam reactions: moments about one support give the other reaction. Trusses: joints for one member at a time, sections for a quick cut.</li><li>Friction: F_max = μ_s N. Centroid of a triangle is h/3 from the base. Rectangle I = bh³/12.</li><li>Kinematics: v = u + at, s = ut + ½at², v² = u² + 2as. Circular: a = v²/r, ω = v/r.</li><li>Kinetics: W = Fd cos θ, KE = ½mv², PE = mgh, p = mv, impulse = Ft, P = Tω.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Forgetting the moment reaction at a fixed support, or counting a roller as having two reactions. A roller has one.</div><div class=\"callout\"><strong>Common mistake:</strong> Mixing up tension and compression signs in a truss — a member pulling away from the joint is in tension.</div><p><strong>Ready-to-Work link:</strong> If you can find beam reactions, a truss member force, and a work–energy answer, you have this module. Module 3 moves to mechanics of materials and thermodynamics.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Equilibrium",
      "def": "ΣF = 0 and ΣM = 0: the conditions for a body at rest or in uniform motion."
    },
    {
      "term": "Free-body diagram",
      "def": "A sketch of a body alone, showing every force and moment acting on it."
    },
    {
      "term": "Pin support",
      "def": "A support with two reaction components (horizontal and vertical) but no moment reaction."
    },
    {
      "term": "Roller support",
      "def": "A support with one reaction, perpendicular to the supporting surface."
    },
    {
      "term": "Truss",
      "def": "A frame of pin-jointed members loaded only at the joints, carrying axial force only."
    },
    {
      "term": "Method of joints",
      "def": "Finding truss member forces by writing ΣF = 0 at one joint at a time."
    },
    {
      "term": "Method of sections",
      "def": "Finding truss member forces by cutting through members and writing equilibrium for one side."
    },
    {
      "term": "Friction",
      "def": "A force opposing motion, with maximum value F = μN."
    },
    {
      "term": "Centroid",
      "def": "The centre of area of a shape; for a triangle it is h/3 from the base."
    },
    {
      "term": "Moment of inertia",
      "def": "A shape's resistance to bending; for a rectangle I = bh³/12 about its centroidal axis."
    },
    {
      "term": "Kinetic energy",
      "def": "½mv² — the energy of motion."
    },
    {
      "term": "Impulse",
      "def": "Force × time (Ft); it equals the change in momentum."
    }
  ],
  "video": {
    "title": "House Rough Framing EXPLAINED In 17 Minutes!",
    "embedUrl": "https://www.youtube.com/embed/VGtnzGdsZeI",
    "note": "Framing is applied statics — loads, supports, and members working together. Watch how the frame carries loads to the supports, then connect it to the beam and truss analysis in this module.",
    "more": [
      {
        "title": "Building A House Start To Finish | Episode 6: Framing 1st Floor Walls",
        "url": "https://www.youtube.com/watch?v=xofiH1CpPT0"
      },
      {
        "title": "Reading Construction Drawings - 10 Minute Crash Course",
        "url": "https://www.youtube.com/watch?v=A3v3ik3kmks"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A simply supported beam spans 8 m. A 30 kN load acts 3 m from the left support A. Find the reactions at A and B and the maximum bending moment.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Moments about A: R_B × 8 = 30 × 3 = 90, so R_B = 11.25 kN. Step 2: R_A = 30 − 11.25 = 18.75 kN. Step 3: Maximum moment is under the load: M = 18.75 × 3 = 56.25 kN·m.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A block weighing 1,000 N sits on a flat surface with μ_s = 0.3. What horizontal force is needed to start it moving?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Maximum static friction F = μ_s × N = 0.3 × 1,000 = 300 N. Step 2: The push must exceed 300 N to start motion.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A car accelerates from rest at 2 m/s² for 5 s. Find its final speed and distance travelled.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: v = u + at = 0 + 2 × 5 = 10 m/s. Step 2: s = ut + ½at² = 0 + ½ × 2 × 25 = 25 m.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A 100 N force pushes a box 5 m at 60° to the direction of motion. How much work is done?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: W = Fd cos θ = 100 × 5 × cos 60° = 100 × 5 × 0.5 = 250 J.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A 2 kg mass moves at 10 m/s. Find its kinetic energy, and the power if it is stopped by a force doing 100 J of work in 0.5 s.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: KE = ½mv² = ½ × 2 × 100 = 100 J. Step 2: Power = work/time = 100/0.5 = 200 W.</p>"
    }
  ],
  "quiz": [
    {
      "module": 2,
      "q": "A simply supported beam spans 8 m with a 30 kN load 3 m from the left support. What is the reaction at the right support?",
      "choices": [
        "18.75 kN",
        "11.25 kN",
        "30 kN",
        "15 kN"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Moments about A: R_B = 30 × 3 / 8 = 11.25 kN. (a) is wrong: 18.75 kN is the left reaction. (c) is wrong: that is the whole load. (d) is wrong: that is half the load, not the reaction."
    },
    {
      "module": 2,
      "q": "Which support has a moment reaction?",
      "choices": [
        "Pin",
        "Roller",
        "Fixed",
        "Cable"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A fixed support resists force in both directions and a moment. (a) is wrong: a pin has two force reactions but no moment. (b) is wrong: a roller has one force reaction only. (d) is wrong: a cable carries tension only."
    },
    {
      "module": 2,
      "q": "In the method of joints, a member pulling away from the joint is in:",
      "choices": [
        "Compression",
        "Tension",
        "Bending",
        "Shear"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Pulling away from the joint means tension. (a) is wrong: compression pushes into the joint. (c) is wrong: truss members carry axial force, not bending. (d) is wrong: shear is not the axial force in a truss member."
    },
    {
      "module": 2,
      "q": "A block weighs 1,000 N on a surface with μ_s = 0.3. What force starts it moving?",
      "choices": [
        "30 N",
        "300 N",
        "3,000 N",
        "100 N"
      ],
      "answer": 1,
      "explanation": "Correct: (b). F = 0.3 × 1,000 = 300 N. (a) is wrong: that is 0.03 × 1,000. (c) is wrong: that is 3 × 1,000. (d) is wrong: that is μ = 0.1, not 0.3."
    },
    {
      "module": 2,
      "q": "What is the moment of inertia of a solid circle 100 mm in diameter about a diameter?",
      "choices": [
        "4.91 × 10⁶ mm⁴",
        "1.25 × 10⁶ mm⁴",
        "7.85 × 10⁶ mm⁴",
        "3.14 × 10⁶ mm⁴"
      ],
      "answer": 0,
      "explanation": "Correct: (a). I = πd⁴/64 = π × 10⁸/64 = 4.91 × 10⁶ mm⁴. (b) is wrong: that is πd⁴/256. (c) is wrong: that is the area in mm², not I. (d) is wrong: that is π × 10⁶, not the formula."
    },
    {
      "module": 2,
      "q": "A body moves at 10 m/s on a circle of radius 5 m. What is its centripetal acceleration?",
      "choices": [
        "2 m/s²",
        "5 m/s²",
        "20 m/s²",
        "50 m/s²"
      ],
      "answer": 2,
      "explanation": "Correct: (c). a = v²/r = 100/5 = 20 m/s². (a) is wrong: that is v/r, the angular velocity. (b) is wrong: that is r/2. (d) is wrong: that is v²/2."
    },
    {
      "module": 2,
      "q": "A 2 kg mass moves at 10 m/s. What is its kinetic energy?",
      "choices": [
        "20 J",
        "50 J",
        "100 J",
        "200 J"
      ],
      "answer": 2,
      "explanation": "Correct: (c). KE = ½ × 2 × 100 = 100 J. (a) is wrong: that is mv, the momentum. (b) is wrong: that is ½ × 1 × 100. (d) is wrong: that is mv², forgetting the ½."
    },
    {
      "module": 2,
      "q": "A 50 N force acts for 0.2 s. What impulse does it deliver?",
      "choices": [
        "10 N·s",
        "25 N·s",
        "250 N·s",
        "0.2 N·s"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Impulse = 50 × 0.2 = 10 N·s. (b) is wrong: that is 50/2. (c) is wrong: that is 50/0.2. (d) is wrong: that is the time alone."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Statics and Dynamics Review: Quick Reference</h3>\n<p><strong>Core idea:</strong> Draw the free-body diagram, write ΣF = 0 and ΣM = 0, then let work–energy and momentum carry the dynamics.</p>\n<p><strong>Beam reactions:</strong> Moments about one support give the other reaction; check with vertical equilibrium.</p>\n<p><strong>Trusses:</strong> Joints one at a time, or a section cut; tension pulls away from the joint.</p>\n<p><strong>Friction:</strong> F_max = μ_s N · <strong>Rectangle I:</strong> bh³/12 · <strong>Circle I:</strong> πd⁴/64.</p>\n<p><strong>Kinematics:</strong> v = u + at · s = ut + ½at² · v² = u² + 2as · a = v²/r.</p>\n<p><strong>Kinetics:</strong> W = Fd cos θ · KE = ½mv² · PE = mgh · p = mv · impulse = Ft · P = Tω.</p>\n<p><strong>Watch out:</strong> A roller has one reaction; a fixed support has three. Tension is positive away from the joint.</p>\n<p><strong>Self-check:</strong> Find beam reactions, a friction force, and a kinetic energy without looking. If you can, you have this module.</p>\n"
};
