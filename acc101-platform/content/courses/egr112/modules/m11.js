// egr112 - Module 11: Technical Documentation: Drawings, BOMs & Revision Control
module.exports = {
  "number": 11,
  "slug": "technical-documentation",
  "title": "Technical Documentation: Drawings, BOMs & Revision Control",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what an engineering drawing must contain.",
    "Read the main views, dimensions, and symbols on a drawing.",
    "Build a bill of materials (BOM) for a simple assembly.",
    "Explain revision control and why it matters.",
    "Explain what a design report and a test report contain."
  ],
  "sections": [
    {
      "heading": "Engineering Drawings: The Language of Making",
      "html": "<p>An engineering drawing is the contract between the designer and the maker: it says exactly what to make, from what, and to what accuracy. A complete drawing has: the part's views (front, top, side, and sections where needed), every dimension with its tolerance, the material and any heat treatment, the surface finish, the GD&T symbols, a title block with the part name, number, scale, and revision, and the drawing number. If it is not on the drawing, the maker is not obliged to do it — and if it is on the drawing, the maker must do it.</p>\n<p>Drawings follow standards (ISO or ASME) so that anyone, anywhere, reads them the same way. Views are arranged by projection — third-angle projection is standard in the US, first-angle in much of Europe — and the projection symbol in the title block says which one is used. Sections cut through a part to show internal features; a section view is labelled with cutting-plane arrows and hatching. Learning to read a drawing is learning to read the language of manufacturing.</p>\n"
    },
    {
      "heading": "Dimensions, Notes, and the Title Block",
      "html": "<p>Dimensions on a drawing are not suggestions: each one is a requirement, and each one should be toleranced or covered by the drawing's general tolerance note. Dimensions should be given from datums, not chained from feature to feature, so that a tolerance error in one feature does not shift all the others. Notes carry the information that dimensions cannot: material, finish, heat treatment, assembly instructions, and “do not scale the drawing” — the dimensions are the authority, not a ruler on the paper.</p>\n<p>The title block is the drawing's identity card: part name and number, revision letter, scale, sheet number, the company, the designer, the checker, and the date. The revision letter is critical: a part made to revision C is different from the same part made to revision B, and using the wrong revision is one of the most common and expensive mistakes in manufacturing.</p>\n"
    },
    {
      "heading": "The Bill of Materials (BOM)",
      "html": "<p>A bill of materials is the complete list of everything needed to make an assembly: every part, its quantity, its part number, its material, and its source (made in-house or bought). A BOM for a small gearbox might list the housing, two shafts, four bearings, two gears, eight bolts, and a seal — each with a quantity and a part number. The BOM is what purchasing buys from, what the store picks from, and what costing is built on.</p>\n<p>A good BOM is structured: assemblies and sub-assemblies are indented under their parents, so the structure of the product is visible. Each line has one part and one quantity — never “bolts, various” — and each part has a unique number. A BOM that is wrong means the wrong parts are ordered, the assembly cannot be built, or the cost is wrong. The BOM and the drawings must agree: every part on a drawing must be on the BOM, and every part on the BOM must have a drawing or a purchase specification.</p>\n"
    },
    {
      "heading": "Revision Control: Never Build the Wrong Version",
      "html": "<p>Revision control is the system that makes sure everyone is working from the same version of a design. Each change to a drawing or a BOM gets a new revision letter (A, B, C…), a description of what changed, the date, and the name of the person who approved it. Old revisions are kept, not deleted, so that a part made last year can be identified and a failure can be traced to the version that was built.</p>\n<p>The rules are simple and strict: never change a released drawing without a new revision; never build from an uncontrolled copy (a printout on someone's desk, a file emailed without a number); and always check the revision before making or ordering. A factory that builds revision B parts when the design is at revision D has wasted material, time, and money — and if the change was a safety fix, it has built a dangerous part.</p>\n"
    },
    {
      "heading": "Design Reports, Test Reports, and Common Mistakes",
      "html": "<p>A design report records the reasoning: the requirements, the concepts considered, the selection, the calculations, and the decisions — so that the next person understands why the design is the way it is. A test report records the evidence: what was tested, how, what the results were, and whether the design passed. Both are written for someone who was not in the room: clear, dated, and with the numbers, not just the conclusions.</p>\n<p><p><strong>Takeaways:</strong><ul><li>A drawing is the contract with the maker: views, dimensions with tolerances, material, finish, GD&T, and a title block.</li><li>Dimensions are requirements; the title block carries the part number, revision, and scale.</li><li>A BOM lists every part with quantity, part number, material, and source — and must agree with the drawings.</li><li>Revision control ensures everyone builds the same version; never build from an uncontrolled copy.</li><li>Design reports record reasoning; test reports record evidence.</li></ul></p>\n<p><strong>Common mistake:</strong> Building from the wrong revision. Always check the revision letter before making or ordering — a superseded drawing is the most expensive piece of paper in the factory.</p>\n<p><strong>Common mistake:</strong> A BOM that does not match the drawings. Every part on a drawing must be on the BOM, and every part on the BOM must have a drawing or a purchase specification.</p>\n<p><strong>Ready check:</strong> If you can list what a drawing must contain, build a small BOM, and explain revision control, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Engineering drawing",
      "def": "The formal document that tells a maker exactly what to make, from what, and to what accuracy."
    },
    {
      "term": "Title block",
      "def": "The drawing's identity card: part name, number, revision, scale, sheet, designer, checker, and date."
    },
    {
      "term": "Revision",
      "def": "A letter (A, B, C…) marking a version of a drawing or BOM; each change gets a new revision."
    },
    {
      "term": "Bill of materials (BOM)",
      "def": "The complete list of parts, quantities, part numbers, materials, and sources needed to make an assembly."
    },
    {
      "term": "Section view",
      "def": "A drawing view cut through a part to show its internal features, with hatching on the cut material."
    },
    {
      "term": "Third-angle projection",
      "def": "The standard view arrangement used in the US; first-angle is used in much of Europe."
    },
    {
      "term": "Surface finish",
      "def": "How smooth a surface must be, specified on the drawing (for example, Ra 1.6 µm)."
    },
    {
      "term": "General tolerance",
      "def": "A note on a drawing giving the tolerance for all dimensions that have no individual tolerance."
    },
    {
      "term": "Design report",
      "def": "A document recording the design's requirements, concepts, selection, calculations, and decisions."
    },
    {
      "term": "Test report",
      "def": "A document recording what was tested, how, the results, and whether the design passed."
    },
    {
      "term": "Part number",
      "def": "A unique identifier for a part, used on drawings, BOMs, and in stores."
    },
    {
      "term": "Heat treatment",
      "def": "A process such as hardening or annealing that changes a material's properties, specified on the drawing."
    }
  ],
  "video": {
    "title": "How to Read Blueprints for Beginners - How to Read Blueprints - Home Blueprints",
    "embedUrl": "https://www.youtube.com/embed/MtUeB3KkrGM",
    "note": "How to read a technical drawing: views, dimensions, symbols, and the title block. Follow along with the drawing on screen, then find the title block and the revision letter on it.",
    "more": [
      {
        "title": "Reading Construction Drawings - 10 Minute Crash Course",
        "url": "https://www.youtube.com/watch?v=A3v3ik3kmks"
      },
      {
        "title": "How to Read Construction Drawings | Beginners Guide to Blueprint Reading | Architectural Drawings",
        "url": "https://www.youtube.com/watch?v=e5GVlJ_N68I"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> List six things a complete engineering drawing must contain, and say why each one matters.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Views (front, top, side, sections) — they show the part's shape. Step 2: Dimensions with tolerances — they say what sizes to make. Step 3: Material and heat treatment — they say what to make it from. Step 4: Surface finish — it controls how smooth the surfaces must be. Step 5: GD&T symbols — they control shape and position. Step 6: Title block with part number, revision, and scale — it identifies the drawing and its version. A good answer lists six items with a reason each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Build a BOM for a small hand clamp with these parts: 1 frame, 1 screw, 1 handle, 1 pad, 2 washers, 2 nuts. Present it as a table with part, quantity, and a part number for each line.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The BOM lists each part once with its quantity: Frame ×1 (CLP-001), Screw ×1 (CLP-002), Handle ×1 (CLP-003), Pad ×1 (CLP-004), Washer ×2 (CLP-005), Nut ×2 (CLP-006). Step 2: Each line has one part, one quantity, and a unique part number. Step 3: The total is 9 pieces. A good answer presents the table with quantities and unique numbers.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A drawing is at revision C. A workshop has a printout marked revision B and builds 50 parts from it. The change from B to C was a safety fix to a load-bearing dimension. Explain what has gone wrong and what must happen now.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The workshop built from a superseded revision — the printout was uncontrolled and out of date. Step 2: The 50 parts are to the old design, which has a known safety problem, so they cannot be used. Step 3: The parts must be quarantined, the revision-control failure investigated, and the parts remade to revision C. A good answer names the uncontrolled copy and the quarantine.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A drawing dimension has no individual tolerance, but the drawing has a general tolerance note of ±0.5 mm. A part measures 0.4 mm over its nominal size. Does it pass? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Yes — the general tolerance applies to all dimensions without an individual tolerance. Step 2: The allowed range is nominal ±0.5 mm, and 0.4 mm over is inside it. Step 3: The part passes inspection. A good answer explains the general tolerance's role.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A design report and a test report are both needed for a new product. Say what each one contains and who each one is written for.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The design report records the reasoning: requirements, concepts, selection, calculations, and decisions — written for the next designer, who needs to understand why the design is the way it is. Step 2: The test report records the evidence: what was tested, how, the results, and whether it passed — written for the checker, the customer, and anyone who must trust the product. Step 3: Both are written for someone who was not in the room, with numbers, not just conclusions. A good answer distinguishes reasoning from evidence.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A BOM lists “bolts, various” with a quantity of 1. Explain what is wrong with this line and how to fix it.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The line is useless: it does not say which bolts, how many of each, or their part numbers, so purchasing cannot buy them and the store cannot pick them. Step 2: Fix it by listing each bolt type as its own line with its own part number and quantity — for example, “Bolt M10 × 30, class 8.8 ×4 (BLT-010)”. Step 3: Every line needs one part, one quantity, and one unique number. A good answer names the problem and the fix.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What must a complete engineering drawing contain?",
      "choices": [
        "Only the part's shape",
        "Views, dimensions with tolerances, material, finish, GD&T, and a title block",
        "Only the dimensions",
        "A photograph of the part"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A complete drawing has views, toleranced dimensions, material, finish, GD&T, and a title block. (a) is incomplete: shape alone is not enough to make a part. (c) is incomplete: dimensions without material and finish are not enough. (d) is wrong: a photograph is not a drawing."
    },
    {
      "q": "What is the title block on a drawing?",
      "choices": [
        "A decorative border",
        "The drawing's identity card: part name, number, revision, scale, designer, checker, and date",
        "The list of materials",
        "The tolerance table"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The title block identifies the drawing and its version. (a) is wrong: it is functional, not decorative. (c) is the BOM's job. (d) is the general tolerance note's job."
    },
    {
      "q": "A drawing is at revision C, but a workshop builds parts from a revision B printout. What is the problem?",
      "choices": [
        "There is no problem — revisions do not matter",
        "The parts are built to a superseded design, which may have a known fault that revision C fixed",
        "Revision B parts are always better",
        "The workshop will be faster"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Building from the wrong revision means building the old design, possibly with a known fault. (a) is wrong: revisions exist precisely because designs change. (c) is wrong: later revisions fix earlier problems. (d) is wrong: speed is irrelevant to correctness."
    },
    {
      "q": "What is a bill of materials (BOM)?",
      "choices": [
        "A list of tools in the workshop",
        "The complete list of parts, quantities, part numbers, materials, and sources needed to make an assembly",
        "A drawing of the assembly",
        "A test report"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A BOM is the parts list for an assembly. (a) is a tool list. (c) is an assembly drawing. (d) is a test report."
    },
    {
      "q": "A BOM line says “bolts, various” with a quantity of 1. What is wrong with it?",
      "choices": [
        "Nothing — it is a standard line",
        "It does not say which bolts, how many of each, or their part numbers, so nobody can buy or pick them",
        "The quantity should be 0",
        "Bolts should not be on a BOM"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Every BOM line needs one part, one quantity, and one unique part number. (a) is wrong: it is unusable. (c) is wrong: the quantity is not the issue. (d) is wrong: bolts belong on a BOM as their own lines."
    },
    {
      "q": "What does a general tolerance note on a drawing do?",
      "choices": [
        "It replaces all dimensions",
        "It gives the tolerance for all dimensions that have no individual tolerance",
        "It makes the drawing cheaper",
        "It lists the materials"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The general tolerance covers untoleranced dimensions. (a) is wrong: dimensions still need their values. (c) is wrong: it does not change cost directly. (d) is wrong: materials are in the title block or notes."
    },
    {
      "q": "What is a section view on a drawing?",
      "choices": [
        "A view of one section of the factory",
        "A view cut through a part to show its internal features, with hatching on the cut material",
        "A view from the side only",
        "A photograph of a section"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A section view cuts through the part to reveal internal features. (a) is wrong: it is a part view, not a factory view. (c) is wrong: a side view is a normal view. (d) is wrong: it is a drawing, not a photograph."
    },
    {
      "q": "What is the difference between a design report and a test report?",
      "choices": [
        "There is no difference",
        "A design report records the reasoning (requirements, concepts, calculations, decisions); a test report records the evidence (what was tested, results, pass or fail)",
        "A design report is shorter",
        "A test report is written before the design"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Design reports record reasoning; test reports record evidence. (a) is wrong: they have different contents. (c) is wrong: length is not the difference. (d) is wrong: testing follows design."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Technical Documentation: Drawings, BOMs & Revision Control: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what an engineering drawing must contain.</p>\n<p><strong>Key terms:</strong> Engineering drawing · Title block · Revision · Bill of materials (BOM) · Section view · Third-angle projection · Surface finish · General tolerance.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what an engineering drawing must contain.</li>\n<li>Read the main views, dimensions, and symbols on a drawing.</li>\n<li>Build a bill of materials (BOM) for a simple assembly.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
