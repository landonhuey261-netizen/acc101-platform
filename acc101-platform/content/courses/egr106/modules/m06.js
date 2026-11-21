// egr106 - Module 6: Trusses: Method of Sections
module.exports = {
  "number": 6,
  "slug": "trusses-method-of-sections",
  "title": "Trusses: Method of Sections",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what the method of sections is and when to use it instead of joints.",
    "Cut a truss with a section and draw the FBD of one side.",
    "Use ΣM = 0 about a joint to find a chord force directly.",
    "Find a web member force with ΣFy = 0.",
    "Check a sections answer against the method of joints."
  ],
  "sections": [
    {
      "heading": "Why Cut the Truss?",
      "html": "<p>The method of joints works joint by joint — fine for a small truss, but slow for a big one, and useless if you only need one member in the middle. The method of sections is the shortcut: cut the truss with an imaginary line through the members you want, throw one side away, and analyse the other side as a free body. The cut members' forces appear on the FBD as external forces, and the three equilibrium equations (ΣFx = 0, ΣFy = 0, ΣM = 0) solve for up to three of them at once.</p>\n<p>The rule: a section must cut through at most three members with unknown forces — because there are three equilibrium equations. Cut through more than three unknowns and you cannot solve it. A good section cuts through one top chord, one bottom chord, and one web member: three unknowns, three equations.</p>\n"
    },
    {
      "heading": "The Moment Trick: Finding a Chord Force Directly",
      "html": "<p>The power of sections is the moment equation. Take moments about the joint where two of the cut members meet, and those two members drop out of the equation (their lines of action pass through the moment centre), leaving the third member's force as the only unknown. Example: in the triangular truss from Module 5 (6 m span, 3 m high, 900 N at the apex, reactions 450 N), cut through the two top chords and the bottom chord, and take moments about the apex for the left half. The top chords act at the apex, so their moment about the apex is zero. The bottom chord pulls horizontally at the base, 3 m below the apex, so its moment about the apex is F(bottom) × 3 (counterclockwise). The reaction at A (450 N, up) is 3 m left of the apex, so its moment about the apex is 450 × 3 = 1,350 N·m clockwise. Equilibrium: F(bottom) × 3 = 1,350, so F(bottom) = 450 N tension ✓ — the same answer as the method of joints, found in one line.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Cut through at most three unknown members. Take moments about the joint where two cut members meet — they drop out, and the third member's force is the only unknown left.</div></p>\n"
    },
    {
      "heading": "Finding a Web Member with ΣFy",
      "html": "<p>Chord forces come from moments; web members (diagonals and verticals) come from ΣFy. After the chords are known, the vertical equilibrium of the section gives the diagonal's vertical component, and the angle gives the full force. In a truss with only vertical loads, the verticals and diagonals carry the shear — which is why a truss with no vertical load on a panel can have a zero-force vertical. The method of sections and the method of joints must agree: if they do not, one of them is wrong, and the section's moment check is usually the faster way to find the error.</p>\n"
    },
    {
      "heading": "Sections vs Joints: Which to Use",
      "html": "<p>Use joints when you need every member, or when the truss is small. Use sections when you need one member (or a few) in the middle of a large truss, or when a joint has three unknowns and you are stuck. In practice, engineers use both: sections for the chords (the big forces), joints for the web members. The two methods are the same physics — equilibrium — applied to different free bodies.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Cut the truss through the members you want, analyse one side as a free body.</li><li>A section can solve at most three unknown member forces (three equilibrium equations).</li><li>Take moments about the joint where two cut members meet to find the third directly.</li><li>Chord forces come from moments; web member forces come from ΣFy.</li><li>Sections and joints must agree — use one to check the other.</li></ul></p>\n<p><strong>Common mistake:</strong> Cutting through four or more unknown members. Three equations cannot solve four unknowns — choose a different section.</p>\n<p><strong>Common mistake:</strong> Forgetting to include the external loads and reactions on the section's FBD. The cut side is a free body: it needs every force acting on it, including the reactions.</p>\n<p><strong>Ready check:</strong> If you can find the bottom chord of the 6 m, 3 m, 900 N truss by taking moments about the apex (450 N tension), you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Method of sections",
      "def": "Cutting a truss through selected members and analysing one side as a free body."
    },
    {
      "term": "Section",
      "def": "An imaginary cut through a truss, exposing the cut members' forces."
    },
    {
      "term": "Chord force",
      "def": "The force in a top or bottom chord member, usually found by taking moments."
    },
    {
      "term": "Web member",
      "def": "A diagonal or vertical member, usually found from ΣFy."
    },
    {
      "term": "Free body (section)",
      "def": "One side of a cut truss, treated as an isolated body with the cut forces shown."
    },
    {
      "term": "Moment centre (sections)",
      "def": "The joint where two cut members meet, chosen so they drop out of the moment equation."
    },
    {
      "term": "Cut member",
      "def": "A member sliced by the section; its force appears on the section's FBD."
    },
    {
      "term": "Tension (sections)",
      "def": "A cut member is assumed to pull away from the section; a negative answer means compression."
    },
    {
      "term": "Shear (truss)",
      "def": "The vertical force a truss panel must carry, taken by the web members."
    },
    {
      "term": "Panel",
      "def": "The bay between two adjacent joints along a chord."
    },
    {
      "term": "Panel point",
      "def": "A joint on the top or bottom chord where a load is applied."
    },
    {
      "term": " Ritter's method",
      "def": "Another name for the method of sections."
    }
  ],
  "video": {
    "title": "Method Of Joints - Adaptive Map Worked Example 3 | Adaptive Map",
    "embedUrl": "https://www.youtube.com/embed/sDKESSbufEk",
    "note": "A worked truss example showing joint-by-joint analysis — the method of sections in this module is the shortcut for the same physics. (A dedicated method-of-sections video was not available; the module text covers sections in full.)",
    "more": [
      {
        "title": "5.3 The Method of Joints - Video Lecture - JPM | JPM",
        "url": "https://www.youtube.com/watch?v=B8SEG7xPI-o"
      },
      {
        "title": "Method of Joints - Adaptive Map Worked Example 1 | Adaptive Map",
        "url": "https://www.youtube.com/watch?v=vowewkEdTzw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In the triangular truss from Module 5 (6 m span, 3 m high, 900 N at the apex, reactions 450 N), use the method of sections to find the bottom chord force: cut through the two top chords and the bottom chord, and take moments about the apex for the left half.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The top chords act at the apex, so their moment about the apex is zero. Step 2: The reaction at A (450 N up) is 3 m left of the apex: moment = 450 × 3 = 1,350 N·m clockwise. Step 3: The bottom chord pulls horizontally at the base, 3 m below the apex: moment = F × 3 counterclockwise. Step 4: F × 3 = 1,350, so F = 450 N tension ✓ (matches the method of joints).</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Why can a section cut through at most three members with unknown forces?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A free body in two dimensions has three equilibrium equations: ΣFx = 0, ΣFy = 0, ΣM = 0. Step 2: Three equations can solve at most three unknowns. Step 3: Cutting through four unknown members leaves one unknown unsolvable — choose a different section.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A section cuts through a top chord, a bottom chord, and a diagonal. You want the top chord force. About which point should you take moments, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Take moments about the joint where the bottom chord and the diagonal meet. Step 2: Those two members' lines of action pass through that joint, so their moments about it are zero. Step 3: The top chord is the only cut member left in the moment equation, so you solve for it directly.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A section's FBD shows a 450 N reaction up at A, a 900 N load down at the apex, and three cut members. What else must be on the FBD for the analysis to be correct?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The cut members' forces, drawn as pulling away from the section (tension assumption). Step 2: Any other external loads or reactions acting on that half of the truss. Step 3: Nothing else — but leaving out a reaction or a load is the most common sections error.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> The method of joints gives a diagonal force of 300 N tension, but the method of sections gives 300 N compression for the same member. What should you conclude?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The two methods must agree — they are the same physics. Step 2: One of them has an error: a wrong angle, a missed force, or a sign error. Step 3: Re-check the section's moment centre and the joint's equilibrium; the sections moment check is usually the faster way to find the error.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A roof truss has 12 joints and you only need the force in the middle bottom chord. Which method should you use, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Use the method of sections. Step 2: The method of joints would require solving every joint from one end to the middle — 12 joints of work for one answer. Step 3: One section through the middle chords and a moment about the top joint gives the bottom chord force directly.</p>"
    }
  ],
  "quiz": [
    {
      "q": "In the triangular truss from Module 5 (6 m span, 3 m high, 900 N at the apex), what is the bottom chord force found by taking moments about the apex?",
      "choices": [
        "636 N compression",
        "450 N tension",
        "900 N tension",
        "0 N"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Moments about the apex: F × 3 = 450 × 3, so F = 450 N tension. (a) is the top chord. (c) is the apex load. (d) is wrong: the bottom chord carries load."
    },
    {
      "q": "How many unknown member forces can one section solve?",
      "choices": [
        "Two",
        "Three — one per equilibrium equation",
        "As many as you cut",
        "Six"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Three equilibrium equations (ΣFx, ΣFy, ΣM) solve at most three unknowns. (a) is the limit for a joint, not a section. (c) is wrong: cutting more members does not add equations. (d) is the three-dimensional count."
    },
    {
      "q": "You want the top chord force from a section. About which point should you take moments?",
      "choices": [
        "About the apex",
        "About the joint where the bottom chord and the diagonal meet",
        "About the support",
        "About the middle of the beam"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Taking moments there eliminates the bottom chord and the diagonal, leaving the top chord as the only unknown. (a) is the point for finding the bottom chord. (c) is a support, not a joint where two cut members meet. (d) is not a joint."
    },
    {
      "q": "Why do the two cut members drop out when you take moments about their meeting joint?",
      "choices": [
        "Because they carry no force",
        "Because their lines of action pass through the moment centre, so their moment arms are zero",
        "Because they are in compression",
        "Because they are zero-force members"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A force through the moment centre has no moment about it. (a) is wrong: they carry force. (c) is wrong: the sign does not matter. (d) is wrong: they are not zero-force members."
    },
    {
      "q": "In a truss, chord forces are usually found from ______, and web member forces from ______.",
      "choices": [
        "ΣFy, ΣM",
        "ΣM, ΣFy",
        "ΣFx, ΣM",
        "ΣM, ΣFx"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Moments give the chord forces directly (the moment trick); vertical equilibrium gives the web members. (a) swaps them. (c) and (d) are wrong combinations."
    },
    {
      "q": "The method of joints and the method of sections give different answers for the same member. What should you conclude?",
      "choices": [
        "The methods disagree by nature",
        "One of them has an error — they must agree",
        "Use the joints answer, it is always right",
        "Use the sections answer, it is always right"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Both methods are equilibrium applied to different free bodies; they must agree. (a) is wrong: they are the same physics. (c) and (d) are wrong: neither method is automatically right."
    },
    {
      "q": "When should you use the method of sections instead of the method of joints?",
      "choices": [
        "When you need every member",
        "When you need one member in the middle of a large truss",
        "When the truss is small",
        "When there are no loads"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Sections give one member directly, without solving every joint. (a) is when joints are better. (c) is when joints are fine. (d) is wrong: an unloaded truss has no forces to find."
    },
    {
      "q": "What must appear on a section's FBD besides the cut members' forces?",
      "choices": [
        "Nothing else",
        "Every external load and reaction acting on that half of the truss",
        "Only the loads, not the reactions",
        "Only the reactions, not the loads"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The cut half is a free body: it needs every force acting on it. (a) is the most common sections error. (c) and (d) each leave out half the forces."
    }
  ],
  "studyGuide": "<h2>Module 6 — Trusses: Method of Sections: Study Guide</h2><p>Cut the truss, analyse one side as a free body. At most three unknowns per section. Take moments about the joint where two cut members meet to find the third.</p><p><strong>Key terms:</strong> Method of sections · Section · Chord force · Web member</p><p><strong>Remember:</strong></p><ul><li>A section solves at most three unknowns.</li><li>Take moments about the joint where two cut members meet.</li><li>Chords from moments, web members from ΣFy.</li><li>Sections and joints must agree.</li></ul>"
};
