// egr112 - Module 10: Tolerance Stackups & DFM/DFA
module.exports = {
  "number": 10,
  "slug": "tolerance-stackups-dfm-dfa",
  "title": "Tolerance Stackups & DFM/DFA",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a tolerance stackup is and why it matters.",
    "Work out a worst-case stackup and a nominal gap.",
    "Work out a statistical (RSS) stackup.",
    "Explain when to use worst-case and when to use RSS.",
    "Explain DFM and DFA and how they cut cost."
  ],
  "sections": [
    {
      "heading": "Stackups: Tolerances Add Up",
      "html": "<p>A single part's tolerance is rarely the problem — the problem is what happens when several parts are assembled. Each part varies within its tolerance, and the variations add up along the assembly: that is a tolerance stackup. If a housing is 50.00 ± 0.10 mm deep and the parts inside total 45.50 ± 0.20 mm, the gap between them is not a fixed number — it varies, and the designer must check that it is always acceptable.</p>\n<p>The nominal gap is the difference of the nominal sizes: 50.00 − 45.50 = 4.50 mm. The worst-case variation is the sum of the tolerances: ±0.10 + ±0.20 = ±0.30 mm. So the gap ranges from 4.50 − 0.30 = 4.20 mm to 4.50 + 0.30 = 4.80 mm. If the gap must stay above 4.00 mm for a seal to work, the worst case of 4.20 mm passes — but only just. That is the stackup check, and it is done before anything is made.</p>\n"
    },
    {
      "heading": "Worst-Case and RSS: Two Ways to Add Tolerances",
      "html": "<p>The worst-case stackup assumes every part is at its worst limit at the same time: add the tolerances directly. It is safe — if the worst case passes, every assembly passes — but it is pessimistic, because all parts are rarely at their extremes together. Example: contributors of ±0.10, ±0.08, ±0.05, and ±0.12 mm give a worst-case total of ±0.35 mm.</p>\n<p>The statistical (RSS) stackup assumes the variations are random and partly cancel out: take the root sum of squares. For the same contributors, RSS = √(0.10² + 0.08² + 0.05² + 0.12²) = √(0.01 + 0.0064 + 0.0025 + 0.0144) = √0.0333 = ±0.18 mm — about half the worst case. RSS is realistic for production runs of many parts, because random variation does cancel out. Use worst-case when a failure is dangerous or the assembly must always work; use RSS when a small failure rate is acceptable and the cost of worst-case tolerancing is too high.</p>\n"
    },
    {
      "heading": "Finding the Stackup: The Chain",
      "html": "<p>A stackup is worked out by drawing the chain: start at one end of the assembly, follow the dimensions through each part to the other end, and add the tolerances with their signs. The chain must close — the sum of the part dimensions must equal the assembly dimension — or the stackup is wrong. Draw the chain as a simple diagram with arrows, and check that every dimension in the chain is on the drawing with its tolerance. A dimension that is missing from the drawing is a dimension that cannot be checked, and it will cause an assembly problem later.</p>\n<p>The most common stackup mistake is forgetting a contributor: a gasket's thickness, a washer, a coating, or a weld gap. List every part in the chain, including the ones that seem too thin to matter — three thin contributors of ±0.05 mm add up to ±0.15 mm, which can be the difference between a fit and a failure.</p>\n"
    },
    {
      "heading": "DFM: Design for Manufacturing",
      "html": "<p>DFM (design for manufacturing) means designing parts so they are easy and cheap to make. The rules are simple: use standard sizes and materials, avoid tight tolerances except where they matter, design so the part can be made in one setup, avoid undercuts and deep pockets, and keep walls thick enough to mould or cast. A part that is easy to make is cheaper, faster, and more consistent than a clever part that needs five setups and a special tool.</p>\n<p>DFM also means designing for the process that will actually be used. A part designed for 3D printing should not need support structures it cannot have; a part designed for casting needs draft angles and even wall thickness; a part designed for sheet metal needs bend radii and flat patterns. Talk to the maker before the design is finished — they know what their process can and cannot do, and a ten-minute conversation can save weeks of rework.</p>\n"
    },
    {
      "heading": "DFA: Design for Assembly and Common Mistakes",
      "html": "<p>DFA (design for assembly) means designing so the product is easy to put together: fewer parts, parts that only fit one way, self-locating features, and no fiddly fasteners in awkward places. Each part that is removed saves its cost, its assembly time, and a possible failure. A classic DFA improvement is replacing four screws with a snap fit, or combining three brackets into one moulded part. The best assembly is the one with the fewest steps.</p>\n<p><p><strong>Takeaways:</strong><ul><li>A stackup adds the tolerances along an assembly chain; the nominal gap is the difference of the nominals.</li><li>Worst-case adds tolerances directly (±0.35 mm for ±0.10, ±0.08, ±0.05, ±0.12); RSS takes the root sum of squares (±0.18 mm).</li><li>Use worst-case when failure is dangerous; use RSS for production runs where a small failure rate is acceptable.</li><li>DFM makes parts easy and cheap to make; DFA makes products easy to assemble with fewer parts.</li><li>List every contributor in the chain, including gaskets and washers.</li></ul></p>\n<p><strong>Common mistake:</strong> Forgetting a contributor in the stackup chain. A gasket, a washer, or a coating can be the tolerance that breaks the assembly.</p>\n<p><strong>Common mistake:</strong> Using worst-case tolerancing everywhere. It is safe but expensive — use RSS where a small failure rate is acceptable.</p>\n<p><strong>Ready check:</strong> If you can work out a worst-case and an RSS stackup, explain when to use each, and give two DFM and two DFA rules, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Tolerance stackup",
      "def": "The accumulation of tolerances along an assembly chain, which decides the variation of the final gap or fit."
    },
    {
      "term": "Worst-case stackup",
      "def": "Adding tolerances directly, assuming every part is at its worst limit at the same time."
    },
    {
      "term": "RSS stackup",
      "def": "Root sum of squares: a statistical stackup that assumes variations are random and partly cancel out."
    },
    {
      "term": "Nominal gap",
      "def": "The gap between parts at their nominal sizes, before tolerances are applied."
    },
    {
      "term": "Chain",
      "def": "The sequence of dimensions through an assembly, followed from one end to the other to work out a stackup."
    },
    {
      "term": "DFM",
      "def": "Design for manufacturing: designing parts so they are easy and cheap to make."
    },
    {
      "term": "DFA",
      "def": "Design for assembly: designing products so they are easy to put together, with few parts and few steps."
    },
    {
      "term": "Snap fit",
      "def": "A joint that clicks together without fasteners, used to cut assembly time and part count."
    },
    {
      "term": "Draft angle",
      "def": "A slight taper on a moulded or cast part so it can be removed from its mould."
    },
    {
      "term": "Standard sizes",
      "def": "Commonly available dimensions and materials, cheaper and faster than custom ones."
    },
    {
      "term": "Setup",
      "def": "One fixturing of a part on a machine; fewer setups mean cheaper manufacturing."
    },
    {
      "term": "Rework",
      "def": "Fixing a part or assembly that does not fit or work, usually expensive and slow."
    }
  ],
  "video": {
    "title": "CETOL Summary - 3D Tolerance Analysis Overview - Find the Source of Variation and Solve it Digitally",
    "embedUrl": "https://www.youtube.com/embed/NyWrgvmRsUo",
    "note": "How tolerance analysis software finds the source of variation in an assembly. Watch how the contributors are ranked, then work out this module's RSS example by hand.",
    "more": [
      {
        "title": "Geometric Dimensioning & Tolerancing vs. Traditional | 4 Fundamentals of GD&T | Ideas & Terminology",
        "url": "https://www.youtube.com/watch?v=a3uBWU9TlUg"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A housing is 50.00 ± 0.10 mm deep and the parts inside total 45.50 ± 0.20 mm. Work out the nominal gap and the worst-case gap range.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Nominal gap = 50.00 − 45.50 = 4.50 mm. Step 2: Worst-case variation = ±0.10 + ±0.20 = ±0.30 mm. Step 3: The gap ranges from 4.50 − 0.30 = 4.20 mm to 4.50 + 0.30 = 4.80 mm. A good answer gives the nominal gap and both ends of the range.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Four contributors have tolerances of ±0.10, ±0.08, ±0.05, and ±0.12 mm. Work out the worst-case total and the RSS total.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Worst-case = 0.10 + 0.08 + 0.05 + 0.12 = ±0.35 mm. Step 2: RSS = √(0.10² + 0.08² + 0.05² + 0.12²) = √(0.01 + 0.0064 + 0.0025 + 0.0144) = √0.0333 = ±0.18 mm. Step 3: RSS is about half the worst case, because random variations partly cancel. A good answer gives both totals.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A seal needs a gap of at least 4.00 mm to work. The stackup from Problem 1 gives a worst-case gap of 4.20–4.80 mm. Does it pass, and what is the margin?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The worst-case minimum gap is 4.20 mm, which is above the 4.00 mm the seal needs, so it passes. Step 2: The margin is 4.20 − 4.00 = 0.20 mm. Step 3: The margin is thin — if any tolerance is worse than specified, the seal could fail, so the designer might tighten a tolerance or redesign for a bigger nominal gap. A good answer gives the pass verdict and the margin.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Three parts in a chain are 30.00 ± 0.05 mm, 20.00 ± 0.08 mm, and a housing of 50.00 ± 0.10 mm. Work out the nominal gap, the worst-case variation, and the RSS variation.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Nominal gap = 50.00 − (30.00 + 20.00) = 0.00 mm. Step 2: Worst-case variation = 0.05 + 0.08 + 0.10 = ±0.23 mm, so the gap ranges from −0.23 mm (interference) to +0.23 mm. Step 3: RSS = √(0.05² + 0.08² + 0.10²) = √0.0189 = ±0.14 mm. Step 4: The nominal gap of zero means some assemblies will interfere — the design needs a bigger nominal gap. A good answer gives all three numbers and the interference warning.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A product has 40 parts and takes 20 minutes to assemble. Suggest two DFA improvements and explain how each helps.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Combine parts — for example, mould three brackets into one part, cutting the part count and the fasteners. Step 2: Replace screws with snap fits where the joint is not structural, cutting assembly time per joint. Step 3: Each part removed saves its cost, its assembly time, and a possible failure — fewer parts means a cheaper, more reliable product. A good answer gives two real improvements.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A designer specifies a tolerance of ±0.01 mm on a dimension that only needs ±0.5 mm to work. Explain the cost consequence, and say when worst-case stackup should still be used despite its cost.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: ±0.01 mm needs grinding and heavy inspection, so the part costs far more than it needs to — the tolerance should be loosened to ±0.5 mm. Step 2: Worst-case stackup should still be used when a failure is dangerous or the assembly must always work, such as a safety-critical clearance or a seal that must never leak. Step 3: For ordinary production parts, RSS is the economical choice. A good answer explains both the cost and the worst-case exception.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A housing is 50.00 ± 0.10 mm deep and the parts inside total 45.50 ± 0.20 mm. What is the nominal gap?",
      "choices": [
        "4.50 mm",
        "4.20 mm",
        "4.80 mm",
        "0.30 mm"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Nominal gap = 50.00 − 45.50 = 4.50 mm. (b) is the worst-case minimum gap. (c) is the worst-case maximum gap. (d) is the worst-case variation, not the gap."
    },
    {
      "q": "What is the worst-case gap range for the housing above?",
      "choices": [
        "4.50 mm exactly",
        "4.20–4.80 mm",
        "4.30–4.70 mm",
        "4.00–5.00 mm"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Worst-case variation is ±0.30 mm, so the gap ranges from 4.20 to 4.80 mm. (a) ignores the tolerances. (c) uses ±0.20 mm, not ±0.30 mm. (d) uses ±0.50 mm."
    },
    {
      "q": "Four contributors have tolerances of ±0.10, ±0.08, ±0.05, and ±0.12 mm. What is the worst-case total?",
      "choices": [
        "±0.18 mm",
        "±0.35 mm",
        "±0.12 mm",
        "±0.23 mm"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Worst-case adds directly: 0.10 + 0.08 + 0.05 + 0.12 = 0.35 mm. (a) is the RSS total. (c) is the largest single contributor. (d) is a different set of contributors."
    },
    {
      "q": "What is the RSS total for the same four contributors?",
      "choices": [
        "±0.35 mm",
        "±0.18 mm",
        "±0.09 mm",
        "±0.30 mm"
      ],
      "answer": 1,
      "explanation": "Correct: (b). RSS = √(0.10² + 0.08² + 0.05² + 0.12²) = √0.0333 = 0.18 mm. (a) is the worst-case total. (c) is half the RSS value. (d) has no basis."
    },
    {
      "q": "When should you use a worst-case stackup instead of RSS?",
      "choices": [
        "Always — RSS is never used",
        "When a failure is dangerous or the assembly must always work",
        "When you want to save money",
        "When there are only two contributors"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Worst-case is for safety-critical or must-always-work assemblies. (a) is wrong: RSS is standard for production runs. (c) is backwards: worst-case costs more. (d) is wrong: the number of contributors does not decide the method."
    },
    {
      "q": "What does DFM stand for, and what does it aim to do?",
      "choices": [
        "Design for manufacturing — make parts easy and cheap to make",
        "Design for marketing — make products look good",
        "Design for maintenance — make products easy to repair",
        "Design for measurement — make parts easy to inspect"
      ],
      "answer": 0,
      "explanation": "Correct: (a). DFM is design for manufacturing: easy, cheap production. (b) is marketing, not DFM. (c) is design for maintainability. (d) is part of inspection, not DFM."
    },
    {
      "q": "What does DFA aim to do?",
      "choices": [
        "Make parts stronger",
        "Make products easy to assemble, with fewer parts and fewer steps",
        "Make products cheaper to ship",
        "Make drawings prettier"
      ],
      "answer": 1,
      "explanation": "Correct: (b). DFA is design for assembly: fewer parts, fewer steps, faster assembly. (a) is strength design. (c) is packaging. (d) is drafting."
    },
    {
      "q": "A stackup chain is missing a gasket's thickness. What is the risk?",
      "choices": [
        "None — gaskets are too thin to matter",
        "The stackup is wrong, and the assembly may not fit or seal, because the gasket's tolerance was never counted",
        "The gasket will be thicker than expected",
        "The housing will be too big"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Every contributor counts — even thin ones add up, and a missing one makes the stackup wrong. (a) is wrong: thin contributors add up. (c) is wrong: the risk is the uncounted variation, not a thicker gasket. (d) is wrong: the housing size is unchanged."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Tolerance Stackups & DFM/DFA: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a tolerance stackup is and why it matters.</p>\n<p><strong>Key terms:</strong> Tolerance stackup · Worst-case stackup · RSS stackup · Nominal gap · Chain · DFM · DFA · Snap fit.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a tolerance stackup is and why it matters.</li>\n<li>Work out a worst-case stackup and a nominal gap.</li>\n<li>Work out a statistical (RSS) stackup.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
