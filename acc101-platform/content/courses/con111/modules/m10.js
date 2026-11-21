// con111 - Module 10: Structural Connections and Joint Design
module.exports = {
  "number": 10,
  "slug": "structural-connections-and-joint-design",
  "title": "Structural Connections and Joint Design",
  "estTime": "3–4 hours",
  "objectives": [
    "Name the five basic joint types: butt, corner, lap, tee, and edge.",
    "Explain the difference between a fillet weld and a groove weld, and when each is used.",
    "Describe joint preparation: bevels, root opening, and root face.",
    "Explain complete joint penetration (CJP) versus partial joint penetration (PJP).",
    "Explain fit-up, tacking, and why a bad fit-up cannot be fixed by welding."
  ],
  "sections": [
    {
      "heading": "The Five Joints",
      "html": "<p>Every welded joint in construction is one of five types. A <strong>butt joint</strong> joins two pieces edge to edge, in the same plane — the joint of two plates or two beams end to end. A <strong>corner joint</strong> joins two pieces at a corner, at roughly 90 degrees. A <strong>lap joint</strong> overlaps two pieces, one on top of the other. A <strong>tee joint</strong> joins one piece to the face of another at 90 degrees, forming a T. An <strong>edge joint</strong> joins the edges of two parallel pieces.</p>\n<p>The joint type decides the weld type. A butt joint usually gets a groove weld. A corner, lap, or tee joint usually gets a fillet weld, sometimes with a groove weld where the load demands it. The drawing names the joint and the weld; the welder's job is to make the weld the joint needs, not the weld that is easiest.</p>\n<p>Joint names are also the language of the WPS and the inspection. A WPS that says 'butt joint, single V-groove, 1-inch plate' tells the welder the joint, the groove, and the thickness in one line. An inspector who finds a fillet where a groove was specified has found a failed joint, whatever it looks like.</p>\n"
    },
    {
      "heading": "Fillet Versus Groove",
      "html": "<p>A <strong>fillet weld</strong> is a triangular weld in a corner — it joins two surfaces at an angle without cutting a groove into either one. It is the most common weld in construction because it is fast, needs little preparation, and is strong enough for most connections. A fillet's strength is set by its leg size and its length: a 1/4-inch fillet, 6 inches long, carries a known load, and the designer sizes it from that.</p>\n<p>A <strong>groove weld</strong> is a weld in a prepared groove between two pieces, where the edges have been beveled so the weld metal can reach through the full thickness. A groove weld can carry the full strength of the members it joins — it is the weld for butt joints in beams and columns, where the connection must be as strong as the steel itself. Groove welds need preparation, backing, and often multiple passes, and they are inspected more strictly.</p>\n<p>The choice is the designer's, not the welder's. A fillet used where a groove was specified is a weaker joint than the design, and a groove used where a fillet was specified wastes time and material. The symbol on the drawing is the instruction, and the welder follows it.</p>\n"
    },
    {
      "heading": "Joint Preparation",
      "html": "<p>A groove weld starts before the arc does, with preparation. The edges are beveled — cut at an angle — so the arc can reach the root of the joint. The <strong>root opening</strong> is the gap between the pieces at the root; the <strong>root face</strong> is the flat land at the bottom of the bevel. The bevel angle, the root opening, and the root face are all specified in the WPS, and they must be right before welding starts.</p>\n<p>Preparation is done by oxyfuel cutting, plasma cutting, or grinding, and it is checked with a gauge. A bevel that is too narrow will not let the arc reach the root, leaving a lack of fusion at the bottom of the joint — the most dangerous defect in a groove weld, because it is hidden inside the joint. A root opening that is too wide wastes filler and can burn through; too narrow and the root does not penetrate.</p>\n<p>The joint is also cleaned before welding: mill scale, rust, oil, and paint are removed from the weld area, because contamination causes porosity and lack of fusion. A groove weld on dirty steel is a defective weld before the arc is even struck.</p>\n"
    },
    {
      "heading": "CJP, PJP, and Fit-Up",
      "html": "<p><strong>Complete joint penetration (CJP)</strong> means the weld metal goes all the way through the joint, from one face to the other — the weld is as strong as the base metal. <strong>Partial joint penetration (PJP)</strong> means the weld goes only partway through, and the joint is designed for the reduced strength. The drawing and the WPS say which one is required, and the welder's root pass is what makes it happen — or fails to.</p>\n<p>CJP welds are often welded from one side, then back-gouged — the root is gouged out from the back with an arc gouger or a grinder — and then welded from the back side, so the weld is sound through the full thickness. A CJP weld that is not back-gouged can hide a lack of fusion at the root, which is why the procedure specifies the gouging and the inspection checks for it.</p>\n<p><strong>Fit-up</strong> is how the pieces are aligned before welding: the gap, the alignment, and the angle. A bad fit-up — pieces misaligned, a gap too wide, an angle off — cannot be fixed by welding. Filling a wide gap with weld metal makes a weak, distorted joint, and the right fix is to re-fit the pieces, not to weld harder. Tack welds hold the fit-up in place while the joint is welded, and they are placed so they become part of the finished weld or are removed.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> Five joints: butt, corner, lap, tee, edge. Fillet welds are triangular corner welds; groove welds are in prepared grooves and can carry full member strength. Preparation is bevel angle, root opening, and root face — checked before welding. CJP goes all the way through; PJP goes partway. Fit-up must be right before welding; a bad fit-up cannot be welded into a good joint.</p>\n<p><strong>Common mistake:</strong> Using a fillet where a groove was specified. The joint is weaker than the design, and the inspector will fail it.</p>\n<p><strong>Common mistake:</strong> Welding a groove with the wrong root opening. Too narrow and the root does not penetrate; too wide and the weld burns through and wastes filler. Check the preparation with a gauge before striking the arc.</p>\n<p><strong>Ready-to-Work link:</strong> If you can name the five joints, explain fillet versus groove, and say what CJP means, you have this module. Module 11 covers weld inspection and quality.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Butt joint",
      "def": "Two pieces joined edge to edge in the same plane."
    },
    {
      "term": "Corner joint",
      "def": "Two pieces joined at a corner, at roughly 90 degrees."
    },
    {
      "term": "Lap joint",
      "def": "Two pieces overlapped, one on top of the other."
    },
    {
      "term": "Tee joint",
      "def": "One piece joined to the face of another at 90 degrees, forming a T."
    },
    {
      "term": "Edge joint",
      "def": "The edges of two parallel pieces joined together."
    },
    {
      "term": "Fillet weld",
      "def": "A triangular weld in a corner joint; strength is set by leg size and length."
    },
    {
      "term": "Groove weld",
      "def": "A weld in a prepared groove between two pieces; can carry the full strength of the members."
    },
    {
      "term": "Bevel",
      "def": "An angled cut on the edge of a piece so the arc can reach the root of a groove weld."
    },
    {
      "term": "Root opening",
      "def": "The gap between the pieces at the root of a groove weld."
    },
    {
      "term": "Root face",
      "def": "The flat land at the bottom of a bevel in a groove weld."
    },
    {
      "term": "Complete joint penetration (CJP)",
      "def": "A groove weld that goes all the way through the joint, as strong as the base metal."
    },
    {
      "term": "Partial joint penetration (PJP)",
      "def": "A groove weld that goes only partway through the joint, designed for reduced strength."
    },
    {
      "term": "Back-gouging",
      "def": "Removing the root of a weld from the back side, by arc gouging or grinding, before welding the back side of a CJP joint."
    },
    {
      "term": "Fit-up",
      "def": "How the pieces are aligned before welding: gap, alignment, and angle."
    },
    {
      "term": "Tack weld",
      "def": "A small temporary weld that holds pieces in position for fit-up and welding."
    }
  ],
  "video": {
    "title": "Heavy Structural Welding Made Easy: 1-Inch Plate Double V-Groove Explained",
    "embedUrl": "https://www.youtube.com/embed/oyt6-kA-IpA",
    "note": "A 1-inch plate double V-groove joint: the weld symbol, the machine settings, the root pass with 7018, and arc gouging the back side. Watch the root pass — the first pass is the one that has to penetrate, and everything after it builds on it.",
    "more": [
      {
        "title": "Fillet Welds",
        "url": "https://www.youtube.com/watch?v=InXzW0KI5zc"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Name the five basic joint types and give one example of each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Butt — two plates edge to edge. Step 2: Corner — two plates at 90 degrees at a corner. Step 3: Lap — two plates overlapped. Step 4: Tee — a plate joined to the face of another at 90 degrees. Step 5: Edge — the edges of two parallel plates joined.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Explain the difference between a fillet weld and a groove weld, and say when each is used.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A fillet is a triangular weld in a corner, fast and needing little preparation, for most connections. Step 2: A groove is a weld in a prepared groove, able to carry the full strength of the members, for butt joints in beams and columns. Step 3: The designer chooses; the welder follows the drawing.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> What are bevel angle, root opening, and root face, and why must they be checked before welding?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Bevel angle — the angle cut on the edge so the arc can reach the root. Step 2: Root opening — the gap between the pieces at the root. Step 3: Root face — the flat land at the bottom of the bevel. Step 4: If they are wrong, the root does not penetrate or the weld burns through — check with a gauge before striking the arc.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Explain CJP versus PJP in one sentence each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: CJP — complete joint penetration, the weld goes all the way through and is as strong as the base metal. Step 2: PJP — partial joint penetration, the weld goes only partway through and the joint is designed for the reduced strength.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Why is a bad fit-up not fixable by welding?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Filling a wide gap or a misalignment with weld metal makes a weak, distorted joint. Step 2: The extra metal shrinks, pulls the joint, and hides a lack of fusion. Step 3: The fix is to re-fit the pieces, not to weld harder.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A CJP butt joint is welded from one side only, with no back-gouging. What is the risk?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The root may not be fully fused — a lack of fusion hidden inside the joint. Step 2: The joint is not truly complete penetration, even though it looks complete from the front. Step 3: The procedure calls for back-gouging and welding the back side to make the weld sound through the full thickness.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A tee joint is:",
      "choices": [
        "Two pieces edge to edge",
        "One piece joined to the face of another at 90 degrees",
        "Two pieces overlapped",
        "Two pieces at a corner"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A tee joint forms a T — one piece to the face of another at 90 degrees. (a) That is a butt joint. (c) That is a lap joint. (d) That is a corner joint."
    },
    {
      "q": "A fillet weld is:",
      "choices": [
        "A weld in a prepared groove",
        "A triangular weld in a corner joint",
        "A weld through the full thickness",
        "A spot weld"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A fillet is the triangular corner weld. (a) That is a groove weld. (c) That is a CJP groove weld. (d) A spot weld is a different weld type."
    },
    {
      "q": "A groove weld is used where:",
      "choices": [
        "The joint must carry the full strength of the members",
        "The weld is cosmetic",
        "No preparation is wanted",
        "The pieces are thin"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Groove welds can carry full member strength — butt joints in beams and columns. (b) Cosmetic welds do not need grooves. (c) Grooves need preparation by definition. (d) Thin pieces usually get fillets."
    },
    {
      "q": "The root opening is:",
      "choices": [
        "The bevel angle",
        "The gap between the pieces at the root of a groove weld",
        "The flat land at the bottom of the bevel",
        "The weld length"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Root opening is the gap at the root. (a) That is the bevel angle. (c) That is the root face. (d) Length is a different dimension."
    },
    {
      "q": "CJP means:",
      "choices": [
        "The weld goes all the way through the joint",
        "The weld goes partway through",
        "The weld is on the surface",
        "The weld is a fillet"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Complete joint penetration — through the full thickness, as strong as the base metal. (b) That is PJP. (c) A surface weld is not a CJP. (d) A fillet is a different weld type."
    },
    {
      "q": "Back-gouging is done to:",
      "choices": [
        "Make the weld prettier",
        "Remove the root from the back side before welding it, so a CJP joint is sound through the full thickness",
        "Cut the plate",
        "Remove slag"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Back-gouging clears the root so the back-side weld fuses fully. (a) Appearance is not the reason. (c) It does not cut the plate. (d) Slag is chipped, not gouged."
    },
    {
      "q": "A bad fit-up should be fixed by:",
      "choices": [
        "Welding harder and filling the gap",
        "Re-fitting the pieces before welding",
        "Using a bigger electrode",
        "Grinding the weld after"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Re-fit the pieces — a bad fit-up cannot be welded into a good joint. (a) Filling a gap with weld metal makes a weak, distorted joint. (c) A bigger electrode does not fix alignment. (d) Grinding after does not fix the joint inside."
    },
    {
      "q": "A groove weld's preparation is checked with:",
      "choices": [
        "A guess",
        "A gauge, before welding starts",
        "The finished bead",
        "The inspector's eye only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Bevel angle, root opening, and root face are checked with a gauge before the arc is struck. (a) Guessing is not inspection. (c) The finished bead is too late. (d) The welder checks it too — the gauge is the tool."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Structural Connections: Quick Reference</h3>\n<p><strong>Joints:</strong> Butt (edge to edge) · Corner (90° corner) · Lap (overlapped) · Tee (T shape) · Edge (parallel edges).</p>\n<p><strong>Welds:</strong> Fillet = triangular corner weld, strength by leg size and length · Groove = in a prepared groove, can carry full member strength.</p>\n<p><strong>Preparation:</strong> Bevel angle · Root opening (gap at the root) · Root face (flat land). Check with a gauge before welding; clean the joint.</p>\n<p><strong>Penetration:</strong> CJP = all the way through · PJP = partway. CJP often needs back-gouging and a back-side weld. Fit-up must be right first.</p>\n<p><strong>Self-check:</strong> Name the five joints and explain CJP vs PJP.</p>\n"
};
