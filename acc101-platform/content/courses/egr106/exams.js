// egr106 — Midterm and Final exams.
// All questions are original to these exams (same topics as module quizzes, fresh scenarios and wording).
// Every explanation covers why the correct answer is right AND why each wrong choice is wrong.
module.exports = {
  "midterm": {
    "title": "Midterm Exam",
    "minutes": 75,
    "coverage": "Modules 1–6",
    "questions": [
      {
        "module": 1,
        "q": "An 80 N force acts at 36.87° above the horizontal. What are its x and y components?",
        "choices": [
          "48 N and 64 N",
          "64 N and 48 N",
          "40 N and 40 N",
          "80 N and 80 N"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Fx = 80 × cos 36.87° = 80 × 0.8 = 64 N; Fy = 80 × sin 36.87° = 80 × 0.6 = 48 N. (a) swaps sine and cosine. (c) would be a 45° force. (d) is wrong: components are never both equal to the force."
      },
      {
        "module": 1,
        "q": "A 60 N force acts east and an 80 N force acts north. What is the resultant?",
        "choices": [
          "140 N northeast",
          "100 N at 53.1° north of east",
          "20 N north",
          "100 N due east"
        ],
        "answer": 1,
        "explanation": "Correct: (b). R = √(60² + 80²) = 100 N, at tan⁻¹(80 ÷ 60) ≈ 53.1° north of east. (a) 140 N adds the magnitudes — wrong for perpendicular forces. (c) 20 N subtracts them. (d) ignores the northward force."
      },
      {
        "module": 1,
        "q": "A 25 N force acts at 53.13° above the horizontal. What is its vertical component?",
        "choices": [
          "15 N",
          "20 N",
          "25 N",
          "12.5 N"
        ],
        "answer": 1,
        "explanation": "Correct: (b). At 53.13°, sin = 0.8, so Fy = 25 × 0.8 = 20 N. (a) 15 N is the horizontal component. (c) 25 N is the full force. (d) 12.5 N is half the force."
      },
      {
        "module": 1,
        "q": "What is the weight of an 80 kg mass? (g = 9.81 m/s²)",
        "choices": [
          "80 N",
          "785 N",
          "8.15 N",
          "9.81 N"
        ],
        "answer": 1,
        "explanation": "Correct: (b). W = m × g = 80 × 9.81 ≈ 785 N. (a) 80 N confuses mass with weight. (c) 8.15 N divides instead of multiplying. (d) is g itself."
      },
      {
        "module": 2,
        "q": "A support is drawn as a small triangle with a pin through it, holding a beam. It can push the beam sideways and up, but it cannot stop the beam rotating. How many unknown reaction forces must be solved for at that support?",
        "choices": [
          "One: vertical only",
          "Two: one horizontal and one vertical",
          "Three: two forces and a moment",
          "None — it is a free end"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A pin can push in any direction, so it has a horizontal and a vertical reaction — but no moment, because it cannot stop rotation. (a) is a roller. (c) is a fixed support. (d) is wrong: a pin provides reactions."
      },
      {
        "module": 2,
        "q": "A steel beam is welded into a concrete wall so the end can neither move nor rotate. How many unknown reactions act at the wall?",
        "choices": [
          "One: a vertical force",
          "Two: a horizontal and a vertical force",
          "Three: a horizontal force, a vertical force, and a moment",
          "Four: two forces and two moments"
        ],
        "answer": 2,
        "explanation": "Correct: (c). A fixed support resists force in both directions and rotation. (a) is a roller. (b) is a pin. (d) is wrong: in two dimensions there is only one moment."
      },
      {
        "module": 2,
        "q": "A beam end rests on a small steel roller that sits on a flat plate. The roller is free to roll sideways. Which way can the roller push on the beam?",
        "choices": [
          "Sideways, along the plate",
          "Straight up, perpendicular to the plate",
          "In any direction",
          "Along the beam's length"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A roller can only push perpendicular to the surface it rolls on. (a) is wrong: it rolls freely, so it cannot push sideways. (c) is a pin. (d) is wrong: along the beam is horizontal here."
      },
      {
        "module": 2,
        "q": "On a free-body diagram, the forces shown are the forces acting ______ the body.",
        "choices": [
          "by",
          "on",
          "inside",
          "under"
        ],
        "answer": 1,
        "explanation": "Correct: (b). An FBD shows forces acting ON the body. (a) is backwards: forces by the body act on other bodies. (c) and (d) are not the rule."
      },
      {
        "module": 3,
        "q": "A 6 m beam on a pin at A and a roller at B carries a 1,000 N load 2 m from A. What is the reaction at B?",
        "choices": [
          "667 N",
          "333 N",
          "1,000 N",
          "500 N"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Moments about A: RB × 6 = 1,000 × 2 = 2,000, so RB ≈ 333 N. (a) 667 N is the reaction at A. (c) 1,000 N is the whole load. (d) 500 N would be right only for a central load."
      },
      {
        "module": 3,
        "q": "The roller at B of that 6 m beam pushes up with about 333 N. How much upward force must the pin at A provide for the vertical forces to balance?",
        "choices": [
          "333 N",
          "667 N",
          "1,000 N",
          "1,333 N"
        ],
        "answer": 1,
        "explanation": "Correct: (b). ΣFy = 0: RA = 1,000 − 333 ≈ 667 N. (a) 333 N is the reaction at B. (c) 1,000 N is the whole load. (d) adds the load and a reaction."
      },
      {
        "module": 3,
        "q": "A 4 m beam carries a single 800 N load at its middle. What is each reaction?",
        "choices": [
          "800 N and 0 N",
          "400 N and 400 N",
          "600 N and 200 N",
          "800 N and 800 N"
        ],
        "answer": 1,
        "explanation": "Correct: (b). By symmetry a central load splits equally: 400 N each. (a) is wrong: both supports carry load. (c) is not symmetric, so it cannot be right for a central load. (d) totals 1,600 N — double the load."
      },
      {
        "module": 3,
        "q": "A beam is held by a pin at one end and a roller at the other. Counting the unknown reactions against the three equilibrium equations available in two dimensions, can the reactions be found from statics alone?",
        "choices": [
          "No — there are four unknowns and only three equations",
          "Yes — three unknowns and three equations, so it is statically determinate",
          "No — a pin and a roller cannot hold a beam",
          "Yes — but only if the load is in the middle"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The pin gives two unknowns and the roller one — three in total, matching ΣFx, ΣFy, and ΣM. (a) is the count for two pins. (c) is wrong: pin and roller is the standard simply supported beam. (d) is wrong: the load position does not change determinacy."
      },
      {
        "module": 4,
        "q": "A 150 N force pushes at right angles to a 1.2 m arm. What is the moment?",
        "choices": [
          "125 N·m",
          "180 N·m",
          "150 N·m",
          "1.2 N·m"
        ],
        "answer": 1,
        "explanation": "Correct: (b). M = F × d = 150 × 1.2 = 180 N·m. (a) 125 N·m divides instead of multiplying. (c) 150 N·m is the force alone. (d) is the distance alone."
      },
      {
        "module": 4,
        "q": "A 60 N force acts at 30° to a 4 m arm. What is the moment about the end of the arm?",
        "choices": [
          "240 N·m",
          "120 N·m",
          "208 N·m",
          "60 N·m"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Only the perpendicular component counts: 60 × sin 30° × 4 = 60 × 0.5 × 4 = 120 N·m. (a) 240 N·m uses F × d without the angle. (c) 208 N·m uses cos 30° instead of sin 30°. (d) is the force alone."
      },
      {
        "module": 4,
        "q": "Two 80 N forces form a couple 0.75 m apart. What is the couple moment?",
        "choices": [
          "107 N·m",
          "60 N·m",
          "80 N·m",
          "0 N·m"
        ],
        "answer": 1,
        "explanation": "Correct: (b). M = F × s = 80 × 0.75 = 60 N·m. (a) 107 N·m divides by the distance. (c) 80 N·m is one force alone. (d) is wrong: the forces do not cancel as a moment — they add."
      },
      {
        "module": 4,
        "q": "What is the moment of a force about a point that lies on the force's line of action?",
        "choices": [
          "Maximum",
          "Zero — the force passes through the point, so its moment arm is zero",
          "Equal to the force",
          "Equal to the force times the length of the arm"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A force through the moment centre has no moment about it. (a) is wrong: the moment is smallest, not largest. (c) and (d) are wrong: the perpendicular distance is zero."
      },
      {
        "module": 5,
        "q": "A triangular truss has an 8 m span, a 4 m height, and a 1,200 N load at the apex. What is each reaction?",
        "choices": [
          "1,200 N each",
          "600 N each",
          "849 N each",
          "300 N each"
        ],
        "answer": 1,
        "explanation": "Correct: (b). By symmetry, each reaction is half the load: 600 N. (a) 1,200 N each would total 2,400 N — double the load. (c) 849 N is the top-chord force, not a reaction. (d) 300 N each would total 600 N — half the load."
      },
      {
        "module": 5,
        "q": "At the apex joint of that truss, the 1,200 N load pushes down and the two upper members meet the joint at 45°. How much force does each upper member carry, and is it pulling or pushing?",
        "choices": [
          "600 N pulling (tension)",
          "849 N pushing (compression)",
          "1,200 N pushing (compression)",
          "849 N pulling (tension)"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Vertical equilibrium: 2 × F × sin 45° = 1,200, so F ≈ 849 N, and the members push into the joint — compression. (a) 600 N is the bottom chord. (c) 1,200 N is the apex load. (d) has the right magnitude but the wrong sign."
      },
      {
        "module": 5,
        "q": "At the left support of that truss, the upper member pushes on the joint with 849 N at 45° above the horizontal. What must the lower horizontal member do to keep the joint from sliding sideways?",
        "choices": [
          "Push the joint with 849 N",
          "Pull the joint with 600 N (tension)",
          "Push the joint with 600 N",
          "Do nothing — the joint is already balanced"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The upper member's horizontal component is 849 × cos 45° ≈ 600 N to the right, so the bottom chord must pull left with 600 N — tension. (a) is the full member force, not its horizontal part. (c) has the wrong direction: a bottom chord pulls, it does not push. (d) is wrong: without the bottom chord the joint would slide."
      },
      {
        "module": 5,
        "q": "A member force is calculated as −500 N, using the rule that tension is positive. How should the result be reported?",
        "choices": [
          "500 N tension",
          "500 N compression",
          "0 N — the member carries nothing",
          "The calculation is wrong and must be redone"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A negative answer means compression, with a magnitude of 500 N. (a) is the opposite sign. (c) is wrong: zero would mean no force. (d) is wrong: a negative sign is a valid result, not an error."
      },
      {
        "module": 6,
        "q": "A student draws a section through five members of a large truss and tries to solve for all five member forces from that one section. Why will that not work?",
        "choices": [
          "Because a section can only cut three members",
          "Because one free body in two dimensions gives only three equilibrium equations, so at most three unknowns can be solved",
          "Because the truss is too large",
          "Because a section must pass through a joint"
        ],
        "answer": 1,
        "explanation": "Correct: (b). ΣFx, ΣFy, and ΣM are three equations — they solve at most three unknowns. (a) is wrong: a section can cut more than three members, it just cannot solve them all. (c) is wrong: size is not the issue. (d) is wrong: a section cuts members, not joints."
      },
      {
        "module": 6,
        "q": "A section cuts a top chord, a bottom chord, and a diagonal. You need the force in the upper chord. Which joint should be the centre of your moment equation, and why?",
        "choices": [
          "The apex, because it is the highest joint",
          "The joint where the bottom chord and the diagonal meet, because those two members then drop out of the equation",
          "The support, because the reaction is known there",
          "Any joint — the answer is the same"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Taking moments there eliminates the bottom chord and the diagonal, leaving the top chord as the only unknown. (a) is the point for finding the bottom chord. (c) is wrong: the support is not where two cut members meet. (d) is wrong: the choice of centre is what makes the trick work."
      },
      {
        "module": 6,
        "q": "A student finds a diagonal member's force by taking moments and a chord's force from vertical equilibrium. What is wrong with that approach?",
        "choices": [
          "Nothing — either equation works for any member",
          "It is backwards: moments give chord forces directly, while web members come from vertical equilibrium",
          "Moments cannot be used in the method of sections",
          "Vertical equilibrium cannot be used in the method of sections"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The moment trick isolates a chord force; ΣFy isolates a web member. (a) is wrong: the equations are not interchangeable for a direct solution. (c) is wrong: moments are the heart of sections. (d) is wrong: ΣFy is one of the three equations."
      },
      {
        "module": 6,
        "q": "A roof truss has 12 joints and you only need the force in the middle bottom chord. Which method should you use, and why?",
        "choices": [
          "Method of joints, because it is more accurate",
          "Method of sections, because one cut and one moment gives the answer directly",
          "Method of joints, because sections cannot find chord forces",
          "Neither — the truss must be solved by computer"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Sections give one member directly, without solving every joint. (a) is wrong: joints are not more accurate, just slower here. (c) is wrong: sections are the standard way to find chord forces. (d) is wrong: the truss is solvable by hand."
      },
      {
        "module": 6,
        "q": "For the 8 m span, 4 m high, 1,200 N truss, use the method of sections: take moments about the apex for the left half. What is the bottom chord force?",
        "choices": [
          "849 N compression",
          "600 N tension",
          "1,200 N tension",
          "300 N tension"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The reaction at A (600 N up) is 4 m left of the apex: moment = 600 × 4 = 2,400 N·m. The bottom chord pulls 4 m below the apex: F × 4 = 2,400, so F = 600 N tension. (a) is the top chord. (c) is the apex load. (d) is half the answer."
      }
    ]
  },
  "final": {
    "title": "Final Exam",
    "minutes": 120,
    "coverage": "Modules 1–12",
    "questions": [
      {
        "module": 1,
        "q": "A 120 N force acts at 36.87° above the horizontal. What are its x and y components?",
        "choices": [
          "72 N and 96 N",
          "96 N and 72 N",
          "60 N and 60 N",
          "120 N and 120 N"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Fx = 120 × 0.8 = 96 N; Fy = 120 × 0.6 = 72 N. (a) swaps sine and cosine. (c) would be a 45° force. (d) is wrong: components are never both equal to the force."
      },
      {
        "module": 1,
        "q": "A 90 N force acts east and a 120 N force acts north. What is the resultant?",
        "choices": [
          "210 N northeast",
          "150 N at 53.1° north of east",
          "30 N north",
          "150 N due east"
        ],
        "answer": 1,
        "explanation": "Correct: (b). R = √(90² + 120²) = 150 N, at tan⁻¹(120 ÷ 90) ≈ 53.1° north of east. (a) 210 N adds the magnitudes — wrong for perpendicular forces. (c) 30 N subtracts them. (d) ignores the northward force."
      },
      {
        "module": 1,
        "q": "A pull is described as 40 N toward the northeast. What kind of quantity is that, and why?",
        "choices": [
          "A scalar, because it has a size",
          "A vector, because it has both a size and a direction",
          "A scalar, because it is a force",
          "A vector, because it is measured in newtons"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 40 N is the size and northeast is the direction. (a) is wrong: a scalar has size only. (c) is wrong: being a force does not make it a scalar — force is a vector. (d) is wrong: the unit is not what makes it a vector."
      },
      {
        "module": 2,
        "q": "A cantilever beam is fixed into a wall. How many reactions does the fixed support provide?",
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
        "module": 2,
        "q": "A free-body diagram shows the forces acting ON a body. What happens if you draw a force the body exerts on something else?",
        "choices": [
          "Nothing — it is the same thing",
          "The diagram is wrong: the force belongs on the other body's FBD",
          "The equilibrium equations still work",
          "The force is doubled"
        ],
        "answer": 1,
        "explanation": "Correct: (b). An FBD shows forces on the body, not by it. (a) is wrong: action and reaction act on different bodies. (c) is wrong: including it breaks the equilibrium. (d) is wrong: nothing is doubled."
      },
      {
        "module": 2,
        "q": "What is a two-force member?",
        "choices": [
          "A member with two supports",
          "A member with forces at only two points, so the forces are equal, opposite, and along the member",
          "A member carrying two loads",
          "A member with two materials"
        ],
        "answer": 1,
        "explanation": "Correct: (b). With forces at only two points, equilibrium forces them to be equal, opposite, and collinear. (a) is wrong: supports are not the definition. (c) is wrong: two loads do not make a two-force member. (d) is wrong: materials are irrelevant."
      },
      {
        "module": 3,
        "q": "An 8 m beam on a pin at A and a roller at B carries a 1,600 N load 2 m from A. What is the reaction at B?",
        "choices": [
          "1,200 N",
          "400 N",
          "1,600 N",
          "800 N"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Moments about A: RB × 8 = 1,600 × 2 = 3,200, so RB = 400 N. (a) 1,200 N is the reaction at A. (c) 1,600 N is the whole load. (d) 800 N would be right only for a central load."
      },
      {
        "module": 3,
        "q": "The 8 m beam's roller at B pushes up with 400 N. What upward force must the pin at A supply for the vertical forces to balance?",
        "choices": [
          "400 N",
          "1,200 N",
          "1,600 N",
          "2,000 N"
        ],
        "answer": 1,
        "explanation": "Correct: (b). ΣFy = 0: RA = 1,600 − 400 = 1,200 N. (a) 400 N is the reaction at B. (c) 1,600 N is the whole load. (d) adds the load and a reaction."
      },
      {
        "module": 3,
        "q": "After solving for a beam's reactions, a student takes moments about the left support, gets zero, and stops. Has the solution been properly checked?",
        "choices": [
          "Yes — one check is enough",
          "No — moments about the support used to solve the problem cannot catch an error in that step; take moments about a different point",
          "No — the check must use ΣFx instead",
          "Yes — the left support is the best check point"
        ],
        "answer": 1,
        "explanation": "Correct: (b). ΣM = 0 must hold about every point, and a second, different centre is a real independent check. (a) is wrong: checking about the same point you solved from is circular. (c) is wrong: ΣFx is a different check, not the required one. (d) is wrong: the support is where the solution came from."
      },
      {
        "module": 4,
        "q": "A 250 N force pushes at right angles to a 0.8 m arm. What is the moment?",
        "choices": [
          "312 N·m",
          "200 N·m",
          "250 N·m",
          "0.8 N·m"
        ],
        "answer": 1,
        "explanation": "Correct: (b). M = F × d = 250 × 0.8 = 200 N·m. (a) 312 N·m divides instead of multiplying. (c) 250 N·m is the force alone. (d) is the distance alone."
      },
      {
        "module": 4,
        "q": "Two 120 N forces form a couple 0.25 m apart. What is the couple moment?",
        "choices": [
          "480 N·m",
          "30 N·m",
          "120 N·m",
          "0 N·m"
        ],
        "answer": 1,
        "explanation": "Correct: (b). M = F × s = 120 × 0.25 = 30 N·m. (a) 480 N·m divides by the distance. (c) 120 N·m is one force alone. (d) is wrong: the forces do not cancel as a moment — they add."
      },
      {
        "module": 4,
        "q": "A 100 N force acts at 45° to a 2 m arm. What is the moment about the end of the arm?",
        "choices": [
          "200 N·m",
          "141 N·m",
          "100 N·m",
          "70.7 N·m"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Perpendicular component = 100 × sin 45° ≈ 70.7 N; M = 70.7 × 2 ≈ 141 N·m. (a) 200 N·m uses F × d without the angle. (c) 100 N·m is the force alone. (d) 70.7 N·m is the perpendicular component, not the moment."
      },
      {
        "module": 5,
        "q": "A triangular truss has a 4 m span, a 2 m height, and a 600 N load at the apex. What is the force in each top chord?",
        "choices": [
          "300 N tension",
          "424 N compression",
          "600 N compression",
          "424 N tension"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The chords are at 45° (2 m rise over 2 m run); at the apex, 2 × F × sin 45° = 600, so F ≈ 424 N, and the chords push into the joint — compression. (a) 300 N is the bottom chord. (c) 600 N is the apex load. (d) has the right magnitude but the wrong sign."
      },
      {
        "module": 5,
        "q": "In that same truss, what is each reaction?",
        "choices": [
          "600 N each",
          "300 N each",
          "424 N each",
          "150 N each"
        ],
        "answer": 1,
        "explanation": "Correct: (b). By symmetry, each reaction is half the load: 300 N. (a) 600 N each would total 1,200 N — double the load. (c) 424 N is the top-chord force. (d) 150 N each would total 300 N — half the load."
      },
      {
        "module": 5,
        "q": "At an unloaded joint, two members lie in a straight line and a third member meets them at an angle. What is the force in the third member?",
        "choices": [
          "Equal to the other two",
          "Zero — it is a zero-force member",
          "Equal to the load",
          "Impossible to tell"
        ],
        "answer": 1,
        "explanation": "Correct: (b). With no load and the other two members collinear, equilibrium in the direction perpendicular to them forces the third member to zero. (a) is wrong: the third member is not carrying the others' force. (c) is wrong: there is no load. (d) is wrong: inspection gives the answer."
      },
      {
        "module": 6,
        "q": "A section cuts through three members with unknown forces. Can it be solved?",
        "choices": [
          "No — sections can only solve two",
          "Yes — three equations solve three unknowns",
          "No — sections need four unknowns",
          "Yes, but only if the truss is symmetric"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Three equilibrium equations solve three unknowns. (a) is the limit for a joint. (c) is wrong: four unknowns cannot be solved. (d) is wrong: symmetry is not required."
      },
      {
        "module": 6,
        "q": "A section cuts through four members with unknown forces. Can it be solved?",
        "choices": [
          "Yes — use all three equations",
          "No — three equations cannot solve four unknowns; choose a different section",
          "Yes — use the method of joints as well",
          "No — the truss is indeterminate"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Four unknowns need four equations, and a section gives three. (a) is wrong: three equations cannot solve four unknowns. (c) is wrong: combining methods does not add equations to the section. (d) is wrong: the truss may be determinate — the section is just a bad choice."
      },
      {
        "module": 6,
        "q": "In a truss, which forces are found from the moment equation in the method of sections?",
        "choices": [
          "The web member forces",
          "The chord forces",
          "The reactions",
          "The zero-force members"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Taking moments about a joint eliminates two cut members and leaves a chord force. (a) is wrong: web members come from ΣFy. (c) is wrong: reactions come from the whole truss. (d) is wrong: zero-force members are found by inspection."
      },
      {
        "module": 7,
        "q": "A T-section has a 120 × 20 mm flange on a 20 × 100 mm web. What is its centroid height (ȳ) from the bottom?",
        "choices": [
          "60 mm",
          "82.7 mm",
          "110 mm",
          "50 mm"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Web: A = 2,000 mm², centroid 50 mm; flange: A = 2,400 mm², centroid 110 mm. ȳ = (2,000 × 50 + 2,400 × 110) ÷ 4,400 ≈ 82.7 mm. (a) 60 mm is the mid-height. (c) 110 mm is the flange's centroid. (d) 50 mm is the web's centroid."
      },
      {
        "module": 7,
        "q": "What is the moment of inertia of an 80 mm wide × 160 mm deep rectangle about its horizontal centroidal axis?",
        "choices": [
          "13.65 × 10⁶ mm⁴",
          "27.31 × 10⁶ mm⁴",
          "54.61 × 10⁶ mm⁴",
          "6.83 × 10⁶ mm⁴"
        ],
        "answer": 1,
        "explanation": "Correct: (b). I = 80 × 160³ ÷ 12 ≈ 27.31 × 10⁶ mm⁴. (a) 13.65 × 10⁶ is half. (c) 54.61 × 10⁶ is double. (d) 6.83 × 10⁶ is a quarter — the on-its-side value."
      },
      {
        "module": 7,
        "q": "A shape has I = 10 × 10⁶ mm⁴ about its centroidal axis and an area of 5,000 mm². What is its moment of inertia about a parallel axis 40 mm away?",
        "choices": [
          "10 × 10⁶ mm⁴",
          "18 × 10⁶ mm⁴",
          "2 × 10⁶ mm⁴",
          "210 × 10⁶ mm⁴"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Parallel axis theorem: I = 10 × 10⁶ + 5,000 × 40² = 10 × 10⁶ + 8 × 10⁶ = 18 × 10⁶ mm⁴. (a) forgets the A × d² term. (c) subtracts it. (d) is far too big."
      },
      {
        "module": 7,
        "q": "What is the section modulus of an 80 × 160 mm rectangle?",
        "choices": [
          "170,667 mm³",
          "341,333 mm³",
          "682,667 mm³",
          "27,306,667 mm³"
        ],
        "answer": 1,
        "explanation": "Correct: (b). S = I ÷ c = 27.31 × 10⁶ ÷ 80 ≈ 341,333 mm³. (a) halves it. (c) doubles it. (d) is the moment of inertia itself."
      },
      {
        "module": 8,
        "q": "A 15 kN tensile force acts on a 15 mm diameter bar. What is the axial stress?",
        "choices": [
          "42.4 MPa",
          "84.9 MPa",
          "170 MPa",
          "15 MPa"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A = π × 15² ÷ 4 ≈ 176.7 mm²; σ = 15,000 ÷ 176.7 ≈ 84.9 MPa. (a) 42.4 MPa halves it. (c) 170 MPa doubles it. (d) is the force number."
      },
      {
        "module": 8,
        "q": "A 1 m bar stretches by 0.5 mm. What is the strain?",
        "choices": [
          "0.0005",
          "0.005",
          "0.001",
          "0.5"
        ],
        "answer": 0,
        "explanation": "Correct: (a). ε = 0.5 ÷ 1,000 = 0.0005. (b) 0.005 is ten times too big. (c) 0.001 is double. (d) 0.5 is 0.5 ÷ 1 — using metres and millimetres inconsistently."
      },
      {
        "module": 8,
        "q": "A steel bar with a yield strength of 250 MPa has a diameter of 25 mm. What load makes it yield?",
        "choices": [
          "61.4 kN",
          "122.7 kN",
          "245.4 kN",
          "250 kN"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A = π × 25² ÷ 4 ≈ 490.9 mm²; P = 250 × 490.9 ≈ 122,700 N ≈ 122.7 kN. (a) 61.4 kN halves it. (c) 245.4 kN doubles it. (d) 250 kN is the yield strength number, not a load."
      },
      {
        "module": 8,
        "q": "An 8 kN force acts on a 10 mm bolt in single shear. What is the shear stress?",
        "choices": [
          "50.9 MPa",
          "101.9 MPa",
          "203.7 MPa",
          "8 MPa"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A = π × 10² ÷ 4 ≈ 78.5 mm²; τ = 8,000 ÷ 78.5 ≈ 101.9 MPa. (a) 50.9 MPa is the double-shear value. (c) 203.7 MPa doubles it. (d) is the force number."
      },
      {
        "module": 9,
        "q": "A steel bar has a strain of 0.0008. What is the stress? (E = 200 GPa.)",
        "choices": [
          "80 MPa",
          "160 MPa",
          "250 MPa",
          "320 MPa"
        ],
        "answer": 1,
        "explanation": "Correct: (b). σ = E × ε = 200,000 × 0.0008 = 160 MPa. (a) 80 MPa halves it. (c) 250 MPa is the yield strength. (d) 320 MPa doubles it."
      },
      {
        "module": 9,
        "q": "A 40 kN pull acts on a 1.5 m steel bar, 25 mm in diameter. How much does it stretch? (E = 200 GPa.)",
        "choices": [
          "0.61 mm",
          "1.22 mm",
          "6.1 mm",
          "0.061 mm"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A = 490.9 mm²; δ = 40,000 × 1,500 ÷ (490.9 × 200,000) ≈ 0.61 mm. (b) 1.22 mm doubles it. (c) 6.1 mm is ten times too big. (d) 0.061 mm is ten times too small."
      },
      {
        "module": 9,
        "q": "A 6 m steel beam is heated by 40 °C (α = 12 × 10⁻⁶ per °C). How much does it grow?",
        "choices": [
          "0.288 mm",
          "2.88 mm",
          "28.8 mm",
          "0.0288 mm"
        ],
        "answer": 1,
        "explanation": "Correct: (b). δ = 12 × 10⁻⁶ × 6,000 × 40 = 2.88 mm. (a) 0.288 mm is ten times too small. (c) 28.8 mm is ten times too big. (d) is a hundred times too small."
      },
      {
        "module": 9,
        "q": "In the formula δ = P × L ÷ (A × E), what happens to the stretch if the bar's cross-sectional area doubles?",
        "choices": [
          "It doubles",
          "It halves",
          "It stays the same",
          "It quadruples"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A is in the denominator, so doubling it halves the stretch. (a) is backwards. (c) is wrong: A matters. (d) is wrong: the relationship is inverse, not squared."
      },
      {
        "module": 10,
        "q": "A 5 m beam carries a 20 kN load 3 m from the left support. What are the reactions and the maximum bending moment?",
        "choices": [
          "RA = 12 kN, RB = 8 kN, M = 36 kN·m",
          "RA = 8 kN, RB = 12 kN, M = 24 kN·m",
          "RA = 10 kN, RB = 10 kN, M = 25 kN·m",
          "RA = 20 kN, RB = 0 kN, M = 60 kN·m"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Moments about A: RB × 5 = 20 × 3 = 60, so RB = 12 kN; RA = 20 − 12 = 8 kN. M(max) is under the load: 8 × 3 = 24 kN·m. (a) swaps the reactions and uses the wrong moment. (c) would be right only for a central load. (d) is wrong: both supports carry load."
      },
      {
        "module": 10,
        "q": "A 6 m beam carries a UDL of 4 kN/m over its whole length. What is the maximum bending moment?",
        "choices": [
          "24 kN·m",
          "18 kN·m",
          "12 kN·m",
          "36 kN·m"
        ],
        "answer": 1,
        "explanation": "Correct: (b). M(max) = wL² ÷ 8 = 4 × 36 ÷ 8 = 18 kN·m. (a) 24 kN·m is the total load. (c) 12 kN·m is one reaction. (d) 36 kN·m doubles the answer."
      },
      {
        "module": 10,
        "q": "A beam has a maximum bending moment of 24 kN·m and a section modulus of 500,000 mm³. What is the maximum bending stress?",
        "choices": [
          "24 MPa",
          "48 MPa",
          "96 MPa",
          "12 MPa"
        ],
        "answer": 1,
        "explanation": "Correct: (b). σ = M ÷ S = 24 × 10⁶ ÷ 500,000 = 48 MPa. (a) 24 MPa is the moment number. (c) 96 MPa doubles it. (d) 12 MPa halves it."
      },
      {
        "module": 10,
        "q": "A cantilever carries a 3 kN load at the free end, 2 m from the wall. What is the maximum bending moment?",
        "choices": [
          "3 kN·m",
          "6 kN·m",
          "1.5 kN·m",
          "0 kN·m"
        ],
        "answer": 1,
        "explanation": "Correct: (b). M = P × L = 3 × 2 = 6 kN·m at the wall. (a) 3 kN·m is the load alone. (c) 1.5 kN·m halves it. (d) is wrong: the wall carries a large moment."
      },
      {
        "module": 11,
        "q": "A steel beam has a yield strength of 300 MPa and a factor of safety of 3. What is the allowable stress?",
        "choices": [
          "300 MPa",
          "100 MPa",
          "900 MPa",
          "33 MPa"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Allowable = 300 ÷ 3 = 100 MPa. (a) 300 MPa is the yield — using it forgets the factor of safety. (c) 900 MPa multiplies instead of dividing. (d) 33 MPa divides by 9."
      },
      {
        "module": 11,
        "q": "A beam has a maximum moment of 30 kN·m and an allowable stress of 120 MPa. What section modulus is required?",
        "choices": [
          "25,000 mm³",
          "250,000 mm³",
          "2,500,000 mm³",
          "360,000 mm³"
        ],
        "answer": 1,
        "explanation": "Correct: (b). S = 30 × 10⁶ ÷ 120 = 250,000 mm³. (a) 25,000 mm³ is ten times too small. (c) 2,500,000 mm³ is ten times too big. (d) 360,000 mm³ is 30 × 12,000 — the wrong operation."
      },
      {
        "module": 11,
        "q": "A beam's span is doubled with the same central point load and the same section. By what factor does the deflection increase?",
        "choices": [
          "2",
          "4",
          "8",
          "16"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Deflection depends on L³, so doubling the span multiplies it by 2³ = 8. (a) 2 would be a linear relationship. (b) 4 is L². (d) 16 is L⁴ — the UDL case."
      },
      {
        "module": 12,
        "q": "A 6 kN force acts on a 10 mm bolt in double shear. What is the shear stress?",
        "choices": [
          "76.4 MPa",
          "38.2 MPa",
          "19.1 MPa",
          "6 MPa"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A = 78.5 mm² per plane; τ = 6,000 ÷ (2 × 78.5) ≈ 38.2 MPa. (a) 76.4 MPa is the single-shear value. (c) 19.1 MPa halves it again. (d) is the force number."
      },
      {
        "module": 12,
        "q": "A steel column (E = 200 GPa) has I = 2.0 × 10⁶ mm⁴ and a length of 2 m, pinned at both ends (K = 1). What is the Euler buckling load?",
        "choices": [
          "987 kN",
          "493 kN",
          "3,948 kN",
          "247 kN"
        ],
        "answer": 0,
        "explanation": "Correct: (a). P(cr) = π² × 200 × 10⁹ × 2.0 × 10⁻⁶ ÷ 4 ≈ 987 kN. (b) 493 kN halves it. (c) 3,948 kN is the value for K = 0.5. (d) 247 kN is a quarter."
      },
      {
        "module": 12,
        "q": "What is the effective-length factor K for a column fixed at one end and free at the other?",
        "choices": [
          "0.5",
          "1.0",
          "0.7",
          "2.0"
        ],
        "answer": 3,
        "explanation": "Correct: (d). Fixed-free: K = 2.0 — the worst case, with the longest effective length. (a) 0.5 is fixed-fixed. (b) 1.0 is pinned-pinned. (c) 0.7 is fixed-pinned."
      }
    ]
  }
};
