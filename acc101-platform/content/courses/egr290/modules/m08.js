// egr290 — module 8. Original review content.
module.exports = {
  "number": 8,
  "slug": "cad-and-solidworks-cswa-review",
  "title": "CAD and SOLIDWORKS Knowledge Review (CSWA)",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe the real CSWA exam honestly: 3 hours, 14 tasks, 240 points, pass at 165, voucher typically $99, 14-day retake wait, live modeling in TesterPRO.",
    "Explain the sketch-to-feature workflow: sketch, fully define, extrude, cut, fillet, chamfer, shell, and pattern.",
    "Use design intent: relations, dimensions, and equations that survive a change.",
    "Build and mate an assembly, and read mass properties.",
    "Create a drawing with views, dimensions, and a title block."
  ],
  "sections": [
    {
      "heading": "The CSWA Exam, Stated Plainly",
      "html": "<p>The <strong>Certified SOLIDWORKS Associate (CSWA)</strong> is Dassault Systèmes' entry-level SOLIDWORKS credential. The real exam is <strong>3 hours</strong> long, has <strong>14 tasks</strong>, is scored out of <strong>240 points</strong>, and passes at <strong>165</strong> (165/240 = 68.75%). A voucher typically costs <strong>$99</strong> — labelled \"typically\" because the price is set by the provider and can change — and if you fail, you must wait <strong>14 days</strong> before retaking. The exam is taken live in SOLIDWORKS through the <strong>TesterPRO</strong> application: you model real parts, assemblies, and drawings, and the system checks your geometry and mass properties against the target.</p><p>That last point is the honest limit of this course: the app tests your <strong>knowledge</strong> of CAD — the workflow, the features, the decisions — but it cannot grade live CAD modeling. You must practise in real SOLIDWORKS to pass, because the real exam grades the model itself. There are two versions of the credential: the <strong>CSWA–Academic</strong> version, which needs a qualified institution and proctoring, and the <strong>commercial</strong> version, which is available on demand. Check which one fits you before you buy a voucher. The 70% used on this course's CSWA practice exam is a <strong>practice benchmark only</strong> — the real pass mark is 165 out of 240 points.</p>"
    },
    {
      "heading": "Sketching: Fully Define Everything",
      "html": "<p>Every SOLIDWORKS part starts as a <strong>sketch</strong> on a plane — Front, Top, or Right. A sketch is <strong>fully defined</strong> when its geometry is fixed by dimensions and relations so it cannot move: the sketch turns black. An under-defined sketch is blue and can drift, which is the single most common cause of a model that breaks when you change a dimension. The rules: put the sketch on the right plane, use <strong>relations</strong> (horizontal, vertical, coincident, tangent, concentric, symmetric) before dimensions, dimension from the origin or a datum, and never leave a sketch under-defined.</p><p>Sketch tools you must know: <strong>Line, Circle, Rectangle, Slot, Arc, Spline</strong>, and <strong>Trim Entities</strong> to clean up. <strong>Offset Entities</strong> copies a profile at a distance; <strong>Convert Entities</strong> projects existing edges into the sketch; <strong>Mirror Entities</strong> copies across a centreline. A slot is a rectangle with two semicircles — draw it with the Slot tool, not by hand, or the tangencies will fight you. And always check the units of the document (MMGS for millimetres) before you start — a part modelled in inches when the exam expects millimetres is a failed part.</p>"
    },
    {
      "heading": "Features: Extrude, Cut, Fillet, Shell, Pattern",
      "html": "<p>A sketch becomes solid with <strong>Boss-Extrude</strong> (add material) or <strong>Extruded Cut</strong> (remove material). The end conditions matter: <strong>Blind</strong> goes a set distance, <strong>Through All</strong> goes through everything, <strong>Up to Surface</strong> stops at a face. <strong>Revolved Boss</strong> spins a sketch around an axis; <strong>Swept Boss</strong> pushes a profile along a path; <strong>Loft</strong> blends between profiles. <strong>Fillet</strong> rounds an edge and <strong>Chamfer</strong> cuts it at an angle — add them last, because they are the first features to fail when a sketch changes. <strong>Shell</strong> hollows a part to a wall thickness; <strong>Hole Wizard</strong> makes standard holes (counterbore, countersink, tapped) to a real standard.</p><p><strong>Patterns</strong> repeat a feature: Linear Pattern along a direction, Circular Pattern around an axis, Mirror across a plane. <strong>Reference geometry</strong> — planes, axes, and coordinate systems — lets you build features where no face exists. <strong>Configurations</strong> store versions of a part (different sizes, suppressed features) in one file, and <strong>equations</strong> drive dimensions from a formula — a change to one number updates the whole part. That is <strong>design intent</strong>: build the model so a change to a dimension updates the part correctly, instead of breaking it.</p>"
    },
    {
      "heading": "Assemblies, Drawings, and Mass Properties",
      "html": "<p>An <strong>assembly</strong> brings parts together with <strong>mates</strong>: Coincident (faces touching), Concentric (axes aligned), Parallel, Perpendicular, Distance, and Angle. A fully mated part cannot move; an under-mated part floats. The exam's assembly tasks ask you to insert components, add mates, and then read the <strong>mass properties</strong> — mass, volume, centre of mass, and moments of inertia — and compare them with the target. If your mass is wrong, a mate or a feature is wrong; the mass is the check.</p><p>Worked example: a steel block 100 mm × 50 mm × 20 mm has volume 100 × 50 × 20 = 100,000 mm³ = 1 × 10⁻⁴ m³. Steel's density is 7,850 kg/m³, so the mass is 7,850 × 1 × 10⁻⁴ = 0.785 kg. If SOLIDWORKS reports 0.785 kg, the model is right; if it reports something else, a dimension is wrong. A <strong>drawing</strong> documents the part: standard views (front, top, right, isometric), <strong>dimensions</strong> with tolerances, notes, and a <strong>title block</strong> with the part name, material, and scale. A drawing that cannot be read cannot be made — dimension from datums, and dimension what matters.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Real CSWA: 3 hours, 14 tasks, 240 points, pass 165 (68.75%), voucher typically $99, 14-day retake wait, live modeling in TesterPRO.</li><li>CSWA–Academic needs a qualified institution + proctoring; the commercial version is on demand. This app tests CAD knowledge only — it cannot grade live modeling.</li><li>Sketches: fully define everything (black, not blue). Relations before dimensions. Check the units (MMGS) first.</li><li>Features: Boss-Extrude, Extruded Cut, Revolve, Sweep, Loft, Fillet/Chamfer last, Shell, Hole Wizard, Patterns.</li><li>Assemblies: mates (Coincident, Concentric, Distance, Angle). Mass properties are the check — mass = density × volume.</li><li>Drawings: standard views, dimensions from datums, title block.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Leaving a sketch under-defined (blue). It will move when you change a dimension, and the model will break.</div><div class=\"callout\"><strong>Common mistake:</strong> Adding fillets early. Fillet last — they are the first features to fail when a sketch changes.</div><p><strong>Ready-to-Work link:</strong> If you can state the CSWA's length, tasks, points, and pass mark, and explain fully defined sketches and mates, you have this module. Module 9 moves to mechanical design.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "CSWA",
      "def": "Certified SOLIDWORKS Associate: 3 hours, 14 tasks, 240 points, pass at 165, voucher typically $99, 14-day retake wait."
    },
    {
      "term": "TesterPRO",
      "def": "The application the real CSWA exam runs in; it checks your live SOLIDWORKS model against the target."
    },
    {
      "term": "Fully defined sketch",
      "def": "A sketch fixed by dimensions and relations so it cannot move; shown in black."
    },
    {
      "term": "Relation",
      "def": "A geometric rule in a sketch (horizontal, vertical, coincident, tangent, concentric, symmetric)."
    },
    {
      "term": "Boss-Extrude",
      "def": "A feature that adds material by extruding a sketch."
    },
    {
      "term": "Extruded Cut",
      "def": "A feature that removes material by extruding a sketch through the part."
    },
    {
      "term": "Fillet / Chamfer",
      "def": "Rounding an edge (fillet) or cutting it at an angle (chamfer); add them last."
    },
    {
      "term": "Shell",
      "def": "A feature that hollows a part to a set wall thickness."
    },
    {
      "term": "Hole Wizard",
      "def": "A feature that makes standard holes — counterbore, countersink, tapped — to a real standard."
    },
    {
      "term": "Mate",
      "def": "An assembly constraint between parts: Coincident, Concentric, Parallel, Distance, Angle."
    },
    {
      "term": "Mass properties",
      "def": "A part's mass, volume, centre of mass, and moments of inertia; the CSWA checks them against a target."
    },
    {
      "term": "Design intent",
      "def": "Building a model so a dimension change updates it correctly instead of breaking it."
    },
    {
      "term": "Configuration",
      "def": "A stored version of a part (different size or features) in the same file."
    },
    {
      "term": "Drawing",
      "def": "A 2D document of a part: standard views, dimensions, notes, and a title block."
    }
  ],
  "video": {
    "title": "SolidWorks CSWA practice exam",
    "embedUrl": "https://www.youtube.com/embed/CWbDrbiepSE",
    "note": "A walkthrough of a CSWA practice exam part. Watch how the sketch is fully defined before any feature is built, then try the same approach on your own practice parts.",
    "more": [
      {
        "title": "Certified Solidworks Associate (CSWA) exam exercise",
        "url": "https://www.youtube.com/watch?v=W9OtdcHyKVc"
      },
      {
        "title": "SolidWorks Tutorial | CSWA Certificate Practice Guide | Level-8",
        "url": "https://www.youtube.com/watch?v=iiSOX3d96Q8"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> The CSWA is scored out of 240 points and passes at 165. What percentage is the pass mark?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 165/240 = 0.6875 = 68.75%. Step 2: The 70% used on this course's CSWA practice exam is a practice benchmark only — the real pass mark is 165 points.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A steel block is 100 mm × 50 mm × 20 mm. Find its volume in m³ and its mass (steel density 7,850 kg/m³).</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Volume = 100 × 50 × 20 = 100,000 mm³ = 1 × 10⁻⁴ m³. Step 2: Mass = 7,850 × 1 × 10⁻⁴ = 0.785 kg.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A sketch is blue in SOLIDWORKS. What does that mean, and what should you do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Blue means under-defined — the geometry can still move. Step 2: Add relations and dimensions until the sketch is fully defined (black).</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> You need a 10 mm diameter hole, 20 mm deep, in a part, with a flat bottom at a set depth. Which feature and end condition do you use?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Use an Extruded Cut (or Hole Wizard for a standard hole) with a Blind end condition at 20 mm. Step 2: Through All would go through the whole part, which is not wanted here.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> An assembly part can still slide along one axis. What is wrong, and what fixes it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The part is under-mated — a degree of freedom is still free. Step 2: Add a mate that constrains that direction (for example a Distance mate) until the part is fully mated.</p>"
    }
  ],
  "quiz": [
    {
      "module": 8,
      "q": "How long is the real CSWA exam, and how many tasks does it have?",
      "choices": [
        "2 hours, 10 tasks",
        "3 hours, 14 tasks",
        "4 hours, 20 tasks",
        "90 minutes, 50 tasks"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The real CSWA is 3 hours with 14 tasks. (a) is wrong: that is shorter and fewer tasks. (c) is wrong: that is longer with more tasks. (d) is wrong: that is the length of an ACP exam, not the CSWA."
    },
    {
      "module": 8,
      "q": "What is the CSWA pass mark?",
      "choices": [
        "70%",
        "165 out of 240 points",
        "700 out of 1,000",
        "68%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The CSWA passes at 165 out of 240 points (68.75%). (a) is wrong: 70% is this course's practice benchmark only. (c) is wrong: 700/1,000 is an Adobe scaled score. (d) is wrong: 68% is the FE Mechanical first-time pass rate."
    },
    {
      "module": 8,
      "q": "If you fail the CSWA, how long must you wait before retaking it?",
      "choices": [
        "24 hours",
        "7 days",
        "14 days",
        "30 days"
      ],
      "answer": 2,
      "explanation": "Correct: (c). The CSWA retake wait is 14 days. (a) is wrong: that is too short. (b) is wrong: that is half the wait. (d) is wrong: that is the ASE retake wait, not the CSWA's."
    },
    {
      "module": 8,
      "q": "What does a blue sketch mean in SOLIDWORKS?",
      "choices": [
        "Fully defined",
        "Under-defined — it can still move",
        "The sketch has an error",
        "The sketch is hidden"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Blue means under-defined; black means fully defined. (a) is wrong: fully defined sketches are black. (c) is wrong: an error shows differently. (d) is wrong: hidden sketches are not shown."
    },
    {
      "module": 8,
      "q": "A steel block is 100 mm × 50 mm × 20 mm. What is its mass (density 7,850 kg/m³)?",
      "choices": [
        "0.785 kg",
        "7.85 kg",
        "0.0785 kg",
        "78.5 kg"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Volume = 1 × 10⁻⁴ m³, mass = 7,850 × 10⁻⁴ = 0.785 kg. (b) is wrong: that is ten times too large. (c) is wrong: that is ten times too small. (d) is wrong: that is a hundred times too large."
    },
    {
      "module": 8,
      "q": "Which feature should you add LAST in a part, because it fails first when a sketch changes?",
      "choices": [
        "Boss-Extrude",
        "Fillet",
        "Extruded Cut",
        "Shell"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Fillets (and chamfers) depend on edges that move, so add them last. (a) is wrong: extrudes are base features, added first. (c) is wrong: cuts are usually mid-tree. (d) is wrong: shell is also late, but fillets are the classic first-to-fail feature."
    },
    {
      "module": 8,
      "q": "Which mate aligns the axes of two cylindrical parts?",
      "choices": [
        "Coincident",
        "Concentric",
        "Distance",
        "Angle"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A Concentric mate aligns axes. (a) is wrong: Coincident makes faces touch. (c) is wrong: Distance sets a gap. (d) is wrong: Angle sets an angle between faces."
    },
    {
      "module": 8,
      "q": "What does the CSWA–Academic version need that the commercial version does not?",
      "choices": [
        "A qualified institution and proctoring",
        "A faster computer",
        "A different CAD program",
        "Nothing — they are identical"
      ],
      "answer": 0,
      "explanation": "Correct: (a). CSWA–Academic needs a qualified institution and proctoring; the commercial version is on demand. (b) is wrong: the computer requirements are the same. (c) is wrong: both use SOLIDWORKS. (d) is wrong: the delivery differs."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — CAD and SOLIDWORKS Knowledge Review (CSWA): Quick Reference</h3>\n<p><strong>Core idea:</strong> Fully define the sketch, build features in the right order, mate the assembly, and let mass properties check your work — in real SOLIDWORKS, because this app cannot grade live modeling.</p>\n<p><strong>Real CSWA:</strong> 3 hours · 14 tasks · 240 points · pass 165 (68.75%) · voucher typically $99 · 14-day retake wait · live modeling in TesterPRO.</p>\n<p><strong>CSWA–Academic:</strong> needs a qualified institution + proctoring · <strong>Commercial:</strong> on demand.</p>\n<p><strong>Sketch:</strong> Black = fully defined, blue = under-defined · relations before dimensions · check units (MMGS) first.</p>\n<p><strong>Features:</strong> Boss-Extrude · Extruded Cut · Revolve · Sweep · Loft · Shell · Hole Wizard · Patterns · fillets last.</p>\n<p><strong>Assemblies:</strong> Mates (Coincident, Concentric, Distance, Angle) · mass = density × volume.</p>\n<p><strong>Watch out:</strong> A blue sketch will move; a fillet added early will fail; and the 70% here is a practice benchmark, not the 165-point pass mark.</p>\n<p><strong>Self-check:</strong> State the CSWA's length, tasks, points, and pass mark, and explain fully defined sketches and mates without looking. If you can, you have this module.</p>\n"
};
