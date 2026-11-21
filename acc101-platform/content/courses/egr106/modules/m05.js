// egr106 - Module 5: Trusses: Method of Joints
module.exports = {
  "number": 5,
  "slug": "trusses-method-of-joints",
  "title": "Trusses: Method of Joints",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a truss is and why its members carry only axial force.",
    "Find the reactions of a simple truss.",
    "Use the method of joints: ΣFx = 0 and ΣFy = 0 at each joint.",
    "Tell tension from compression and use the sign convention (tension positive).",
    "Work a triangular truss end to end: reactions, top chords, bottom chord."
  ],
  "sections": [
    {
      "heading": "What a Truss Is",
      "html": "<p>A truss is a structure made of straight members joined at points called joints (or nodes), forming triangles. Roof trusses, bridge trusses, and crane jibs are all trusses. The triangle is the point: a triangle cannot change shape without stretching a member, so a truss is stiff even though its joints are pinned and its members are slender. The loads are applied at the joints, and each member carries only axial force — pure tension (pulling apart) or pure compression (pushing together) — with no bending. That is what makes a truss efficient: every member works at full strength along its length.</p>\n<p>The assumptions that make truss analysis work: members are joined by frictionless pins, loads act only at the joints, and each member's weight is small enough to ignore (or is split between its two end joints). Under those assumptions, every member is a two-force member — the forces at its two ends are equal, opposite, and along the member.</p>\n"
    },
    {
      "heading": "Tension and Compression: The Sign Convention",
      "html": "<p>When you analyse a joint, you assume every member pulls away from the joint — that is, you assume tension. If the maths gives a positive answer, the member really is in tension. If it gives a negative answer, the member is in compression, and the force really pushes into the joint. Tension is positive, compression is negative. A tie (a rope, a cable, a bottom chord) is in tension; a strut (a column, a top chord) is usually in compression.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Assume every member pulls away from the joint (tension). A positive answer means tension; a negative answer means compression. Tension +, compression −.</div></p>\n"
    },
    {
      "heading": "The Method of Joints",
      "html": "<p>The method of joints works one joint at a time. At each joint, the forces balance: ΣFx = 0 and ΣFy = 0. Start at a joint with only two unknown member forces (usually a support joint), solve those two, then move to the next joint, using the forces you just found. Work your way across the truss joint by joint until every member is known.</p>\n<p>Worked example: a triangular truss with a 6 m span and a 3 m height, carrying a 900 N load down at the apex. The supports are a pin at A (left) and a roller at B (right). First, the reactions: by symmetry, each is 450 N up. Now the apex joint: the 900 N load pushes down, and the two top chords push on the joint. Each top chord is at 45° (the triangle is 3 m wide and 3 m high, so tan θ = 3 ÷ 3 = 1). Vertical equilibrium at the apex: 2 × F(top) × sin 45° = 900, so F(top) = 900 ÷ (2 × 0.7071) ≈ 636 N. The answer is negative in the tension convention (the chords push into the joint), so each top chord carries about <strong>636 N compression</strong>. Then the support joint: horizontal equilibrium gives the bottom chord: F(bottom) = 636 × cos 45° ≈ <strong>450 N tension</strong>.</p>\n"
    },
    {
      "heading": "Which Joint First?",
      "html": "<p>Always start at a joint with at most two unknowns — otherwise you have two equations and three unknowns, and you cannot solve it. A support joint usually qualifies (one reaction is known, and two members meet there). If every joint has three unknowns, you have started in the wrong place or the truss is not solvable joint by joint — work out the reactions first, then look again. And always check: at the last joint, all the forces you found must balance with no unknowns left. If they do not, an earlier joint is wrong.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>A truss is triangles of two-force members; each member carries only axial tension or compression.</li><li>Assume tension (member pulls away from the joint); a negative answer means compression.</li><li>Method of joints: at each joint, ΣFx = 0 and ΣFy = 0.</li><li>Start at a joint with at most two unknowns.</li><li>Example: 6 m span, 3 m high, 900 N at the apex — top chords ≈ 636 N compression, bottom chord 450 N tension, reactions 450 N each.</li></ul></p>\n<p><strong>Common mistake:</strong> Getting the angle wrong. The angle of a diagonal member comes from the truss geometry (rise over run) — for a 3 m rise over a 3 m run, the angle is 45°, not 30° or 60°.</p>\n<p><strong>Common mistake:</strong> Forgetting that a compression member pushes into the joint. If you draw it pulling away and get a negative answer, that is compression — do not “fix” the sign.</p>\n<p><strong>Ready check:</strong> If you can find the top-chord and bottom-chord forces of the 6 m, 3 m, 900 N triangular truss (636 N compression, 450 N tension), you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Truss",
      "def": "A structure of straight members joined at joints, forming triangles, carrying only axial force."
    },
    {
      "term": "Joint (node)",
      "def": "A point where truss members meet; assumed to be a frictionless pin."
    },
    {
      "term": "Member",
      "def": "One straight piece of a truss, carrying axial force only."
    },
    {
      "term": "Axial force",
      "def": "A force acting along a member's length: tension or compression."
    },
    {
      "term": "Tension",
      "def": "A pulling force; a member in tension is being stretched. Positive by convention."
    },
    {
      "term": "Compression",
      "def": "A pushing force; a member in compression is being squeezed. Negative by convention."
    },
    {
      "term": "Two-force member",
      "def": "A member with forces at only two points, so the forces are equal, opposite, and along the member."
    },
    {
      "term": "Method of joints",
      "def": "Solving a truss one joint at a time with ΣFx = 0 and ΣFy = 0."
    },
    {
      "term": "Top chord",
      "def": "The upper members of a truss, usually in compression."
    },
    {
      "term": "Bottom chord",
      "def": "The lower members of a truss, usually in tension."
    },
    {
      "term": "Web member",
      "def": "A diagonal or vertical member between the top and bottom chords."
    },
    {
      "term": "Zero-force member",
      "def": "A member that carries no force under a given loading, found by inspection at an unloaded joint."
    }
  ],
  "video": {
    "title": "5.3 The Method of Joints - Video Lecture - JPM | JPM",
    "embedUrl": "https://www.youtube.com/embed/B8SEG7xPI-o",
    "note": "The method of joints explained step by step: joint by joint, ΣFx = 0 and ΣFy = 0.",
    "more": [
      {
        "title": "Method of Joints - Adaptive Map Worked Example 1 | Adaptive Map",
        "url": "https://www.youtube.com/watch?v=vowewkEdTzw"
      },
      {
        "title": "Method of Joints - Adaptive Map Worked Example 2 | Adaptive Map",
        "url": "https://www.youtube.com/watch?v=IxnClZ-ppjM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A triangular truss has a 6 m span and a 3 m height, with a 900 N load down at the apex. The supports are a pin at A and a roller at B. Find the reactions.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The truss and loading are symmetric, so each reaction is half the load. Step 2: RA = RB = 900 ÷ 2 = 450 N up. Step 3: Check: 450 + 450 = 900 N ✓.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> For the truss in Problem 1, find the force in each top chord using the apex joint.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The top chords are at 45° (3 m rise over 3 m run). Step 2: Vertical equilibrium at the apex: 2 × F × sin 45° = 900. Step 3: F = 900 ÷ (2 × 0.7071) ≈ 636 N. Step 4: The chords push into the joint, so this is 636 N compression (negative in the tension convention).</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> For the truss in Problem 1, find the force in the bottom chord using the support joint at A.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: At joint A, the top chord pushes on the joint with 636 N at 45° above the horizontal (into the joint). Step 2: Its horizontal component is 636 × cos 45° ≈ 450 N, pushing the joint to the right. Step 3: Horizontal equilibrium needs the bottom chord to pull left with 450 N. Step 4: The bottom chord is in 450 N tension.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A truss joint has three members and no external load. Two of the members are horizontal and vertical. What can you say about the third member if it is at 45°?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: With no external load, ΣFx = 0 and ΣFy = 0 must hold from the members alone. Step 2: The diagonal member has both horizontal and vertical components, so it can only balance if the other two members balance those components — the joint is solvable, but the diagonal is not a zero-force member. Step 3: (A zero-force member needs a joint where equilibrium forces it to zero — e.g. two members in a straight line and a third at an angle, with no load: the third must be zero.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A member force comes out as −500 N. Is the member in tension or compression, and what is the magnitude of the force?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The sign convention is tension positive, compression negative. Step 2: −500 N means the member is in compression. Step 3: The magnitude is 500 N.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why does a truss use triangles instead of rectangles?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A triangle cannot change shape without stretching one of its members, so it is rigid. Step 2: A rectangle can collapse sideways into a parallelogram without stretching any member, so it is a mechanism, not a structure. Step 3: That is why trusses are triangulated — the triangle is the only rigid polygon.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A triangular truss has a 6 m span, a 3 m height, and a 900 N load at the apex. What is each reaction?",
      "choices": [
        "900 N each",
        "450 N each",
        "636 N each",
        "300 N each"
      ],
      "answer": 1,
      "explanation": "Correct: (b). By symmetry, each reaction is half the load: 450 N. (a) 900 N each would total 1,800 N — double the load. (c) 636 N is the top-chord force, not a reaction. (d) 300 N each would total 600 N — less than the load."
    },
    {
      "q": "In that same truss, what is the force in each top chord?",
      "choices": [
        "450 N tension",
        "636 N compression",
        "900 N compression",
        "636 N tension"
      ],
      "answer": 1,
      "explanation": "Correct: (b). At the apex, 2 × F × sin 45° = 900, so F ≈ 636 N, and the chords push into the joint — compression. (a) 450 N is the bottom chord. (c) 900 N is the apex load. (d) has the right magnitude but the wrong sign: the top chords are in compression."
    },
    {
      "q": "In that same truss, what is the force in the bottom chord?",
      "choices": [
        "636 N compression",
        "450 N tension",
        "900 N tension",
        "0 N"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Horizontal equilibrium at the support: the bottom chord balances the top chord's horizontal component, 636 × cos 45° ≈ 450 N, pulling away — tension. (a) is the top chord. (c) is the apex load. (d) is wrong: the bottom chord carries load."
    },
    {
      "q": "What does a negative member force mean in the tension-positive convention?",
      "choices": [
        "The member is in tension",
        "The member is in compression",
        "The member carries no force",
        "The member has failed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Tension is positive, so a negative answer means compression. (a) is a positive answer. (c) is a zero answer. (d) is wrong: the sign says nothing about failure."
    },
    {
      "q": "What equations do you use at each joint in the method of joints?",
      "choices": [
        "ΣFx = 0 and ΣFy = 0",
        "ΣM = 0 only",
        "ΣFx = 0, ΣFy = 0, and ΣM = 0",
        "ΣF = 0 only"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A joint is a point, so moments about it are all zero — only the two force equations are useful. (b) is useless at a point. (c) adds a moment equation that gives no information. (d) is incomplete: you need both directions."
    },
    {
      "q": "Why must you start the method of joints at a joint with at most two unknowns?",
      "choices": [
        "Because the truss is symmetric",
        "Because two equations (ΣFx = 0, ΣFy = 0) can only solve two unknowns",
        "Because the first joint is always a support",
        "Because the method only works on triangles"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Two equations, two unknowns — any more and the joint cannot be solved yet. (a) is wrong: symmetry is not the reason. (c) is wrong: the first joint need not be a support, though it often is. (d) is wrong: the method works on any truss, joint by joint."
    },
    {
      "q": "Why are truss members assumed to carry only axial force?",
      "choices": [
        "Because they are made of steel",
        "Because loads act only at the joints and the joints are pins, so no bending is applied to a member",
        "Because members are always in tension",
        "Because trusses are always triangular"
      ],
      "answer": 1,
      "explanation": "Correct: (b). With pinned joints and joint-only loading, a member feels forces only at its ends, along its length. (a) is wrong: the material is not the reason. (c) is wrong: members can be in compression too. (d) is wrong: the triangle is about rigidity, not about axial force."
    },
    {
      "q": "Why do trusses use triangles instead of rectangles?",
      "choices": [
        "Triangles look better",
        "A triangle cannot change shape without stretching a member; a rectangle can collapse sideways",
        "Triangles are cheaper",
        "Rectangles cannot carry load"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A triangle is rigid; a rectangle is a mechanism that can shear into a parallelogram. (a) is not an engineering reason. (c) is wrong: cost is not the reason. (d) is wrong: rectangles can carry load, but they are not rigid."
    }
  ],
  "studyGuide": "<h2>Module 5 — Trusses: Method of Joints: Study Guide</h2><p>A truss is triangles of two-force members. Assume tension (pull away from the joint); a negative answer means compression. Solve joint by joint with ΣFx = 0 and ΣFy = 0.</p><p><strong>Key terms:</strong> Truss · Joint · Member · Tension · Compression · Method of joints</p><p><strong>Remember:</strong></p><ul><li>Assume tension; negative means compression.</li><li>Start at a joint with at most two unknowns.</li><li>ΣFx = 0 and ΣFy = 0 at each joint.</li><li>Example: 6 m span, 3 m high, 900 N — top chords 636 N compression, bottom 450 N tension.</li></ul>"
};
