// egr108 - Module 12: Selecting Materials and Processes: The Whole Decision
module.exports = {
  "number": 12,
  "slug": "selecting-materials-processes",
  "title": "Selecting Materials and Processes: The Whole Decision",
  "estTime": "3–4 hours",
  "objectives": [
    "Work through a full selection: requirements, screening, ranking, and choice.",
    "Use strength-to-weight and cost to compare candidates.",
    "Match the manufacturing process to the material and the quantity.",
    "Explain the environmental and recycling side of a material choice.",
    "Present a material and process choice in plain words with reasons."
  ],
  "sections": [
    {
      "heading": "The Selection Method",
      "html": "<p><p>Selection has four steps. First, translate the job into requirements: loads, temperatures, environment, life, and quantity. Second, screen out the materials that cannot do the job at all — a plastic that melts at the service temperature is out, whatever its price. Third, rank the survivors on the properties that matter most, using numbers: strength per weight, stiffness per weight, cost per part. Fourth, check the process: can you actually make the shape in that material at that quantity?</p></p>\n<p><p>Write the requirements down before you look at any catalogue. A list that says 'strong, light, cheap, rust-proof, and easy to make' is a wish list, not a specification. A specification says 'must carry 500 N, weigh under 200 g, survive 80 °C and salt spray, and cost under $5 in a batch of 1,000'. Numbers make the choice possible.</p></p>\n"
    },
    {
      "heading": "Comparing Candidates With Numbers",
      "html": "<p><p>Compare like with like. A steel bracket weighs 500 g and costs $2; an aluminium one weighs 250 g and costs $4; a glass-fibre one weighs 180 g and costs $8. If weight matters most, the composite wins; if cost matters most, steel wins; if the answer is in the middle, aluminium wins. There is no right answer until the customer says what matters most — so ask them, and write the answer down.</p></p>\n<p><p>Specific strength (strength divided by density) is the number that matters when weight is critical. Steel's yield strength of 250 MPa divided by its density gives about 32 kN·m/kg; aluminium at 200 MPa gives about 74 kN·m/kg; carbon fibre at 1,000 MPa gives about 625 kN·m/kg. That is why aircraft use aluminium and carbon fibre despite the cost — weight saved is fuel saved.</p></p>\n"
    },
    {
      "heading": "Matching Process to Material and Quantity",
      "html": "<p><p>The process and the material must fit together. You cannot injection-mould steel, and you cannot forge a plastic. Quantity decides the process: one part is machined or printed, a hundred parts are cast or CNC-machined, ten thousand parts are moulded, forged, or stamped. The process also decides the shape: casting allows complex shapes, machining allows tight tolerances, and moulding allows thin walls.</p></p>\n<p><p>Example: a plastic housing. One prototype is 3D-printed. A hundred housings are machined from solid or printed. Ten thousand are injection-moulded — the mould costs thousands, but each part then costs cents. The break-even point is where the mould cost divided by the quantity is less than the saving per part. Do that sum before committing to tooling.</p></p>\n"
    },
    {
      "heading": "Environment, Recycling, and the End of Life",
      "html": "<p><p>Materials have an end of life. Steel and aluminium are recycled easily and keep their properties; a recycled aluminium can becomes a new can with about 5% of the energy of making it from ore. Thermoplastics can be remelted and recycled, though the quality drops each time. Thermosets and most composites are hard to recycle and often end up as landfill. Design for disassembly — parts that come apart easily — makes recycling possible.</p></p>\n<p><p>Choosing a material is also choosing its footprint: mining, energy, transport, and disposal. A lighter part that saves fuel for ten years can justify a material that costs more energy to make. There is no perfect green choice, only an honest one: weigh the whole life of the part, not just the price on the invoice.</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>Selection: requirements, screening, ranking, process check.</li><li>Write numbers, not wishes, in the specification.</li><li>Specific strength decides when weight matters.</li><li>Quantity decides the process: print one, machine a hundred, mould ten thousand.</li><li>Think about the whole life: making, using, and recycling.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Choosing a material before writing the requirements. The catalogue will sell you something; the specification will tell you what you need.</p><p><strong>Common mistake:</strong> Forgetting the process cost. A cheap material in an expensive process is an expensive part.</p><p><strong>Ready check:</strong> If you can run a four-step selection for a bracket and justify the choice in plain words, you have finished this course.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Requirement",
      "def": "A numbered need the part must meet, such as a load or a temperature."
    },
    {
      "term": "Screening",
      "def": "Removing materials that cannot meet a requirement, whatever their other merits."
    },
    {
      "term": "Ranking",
      "def": "Ordering the surviving materials by the properties that matter most."
    },
    {
      "term": "Specific strength",
      "def": "Strength divided by density, in kN·m/kg."
    },
    {
      "term": "Specific stiffness",
      "def": "Stiffness divided by density."
    },
    {
      "term": "Break-even quantity",
      "def": "The batch size where an expensive process becomes cheaper per part than a cheap one."
    },
    {
      "term": "Design for disassembly",
      "def": "Designing a product so its parts can be taken apart for repair or recycling."
    },
    {
      "term": "Life-cycle thinking",
      "def": "Weighing a part's whole life: making, using, and disposing of it."
    },
    {
      "term": "Recycling",
      "def": "Reprocessing a used material into a new product."
    },
    {
      "term": "Embodied energy",
      "def": "The energy used to make a material, from mining to the factory gate."
    },
    {
      "term": "Trade-off",
      "def": "Giving up one benefit to gain another, such as weight against cost."
    },
    {
      "term": "Specification",
      "def": "The written list of what a part must do, with numbers."
    },
    {
      "term": "Process selection",
      "def": "Choosing how a part will be made, to fit the material and the quantity."
    },
    {
      "term": "Sustainability",
      "def": "Meeting today's needs without harming the ability of future generations to meet theirs."
    }
  ],
  "video": {
    "title": "Stainless Steel (304 vs 316) for CNC machining",
    "embedUrl": "https://www.youtube.com/embed/3TsqUvZdF3o",
    "note": "304 versus 316 stainless steel for CNC machining — a real selection decision: corrosion resistance, cost, and machinability compared.",
    "more": [
      {
        "title": "Aluminum 6061 for CNC machining (Explained and Compared)",
        "url": "https://www.youtube.com/watch?v=yHEIrjjlAJ0"
      },
      {
        "title": "What Is Additive Manufacturing?",
        "url": "https://www.youtube.com/watch?v=t4S0mKjXtT4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A bracket must carry 500 N, weigh under 200 g, and cost under $5 in a batch of 1,000. Write the screening step in one sentence.</p>",
      "solution": "<p><strong>Answer:</strong> Any material that cannot carry 500 N, or cannot be made under 200 g, or costs more than $5 per part at 1,000 off, is screened out.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Steel's specific strength is about 32 kN·m/kg and aluminium's about 74 kN·m/kg. Which is better when weight matters, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Aluminium: it gives more strength per kilogram, so a part of the same strength weighs less.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> One prototype housing is needed. Which process, and why?</p>",
      "solution": "<p><strong>Answer:</strong> 3D printing: no tooling is needed and the part can be ready in hours.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> 10,000 identical plastic housings are needed. Which process, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Injection moulding: the mould cost is spread over 10,000 parts and each part then costs cents.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Why is aluminium recycling so valuable?</p>",
      "solution": "<p><strong>Answer:</strong> Recycled aluminium keeps its properties and takes about 5% of the energy of making it from ore.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain in plain words why there is no single 'best' material.</p>",
      "solution": "<p><strong>Answer:</strong> The best choice depends on what matters most — strength, weight, cost, corrosion, or how many are made — and different jobs rank those differently.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The first step in material selection is to:",
      "choices": [
        "Open a catalogue",
        "Write the requirements with numbers",
        "Choose the cheapest material",
        "Ask a supplier"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Requirements decide everything else. (a) a catalogue sells, it does not specify. (c) cheapest may fail the job. (d) a supplier needs your requirements first."
    },
    {
      "q": "Screening means:",
      "choices": [
        "Picking the cheapest",
        "Removing materials that cannot meet a requirement",
        "Testing every material",
        "Painting the part"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Screening cuts the list to feasible candidates. (a) is ranking by cost, not screening. (c) testing everything is wasteful. (d) is finishing, not selection."
    },
    {
      "q": "Specific strength is:",
      "choices": [
        "Strength × density",
        "Strength ÷ density",
        "Density ÷ strength",
        "Strength + density"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Strength per unit weight. (a) would reward heavy materials. (c) is the inverse. (d) adds unlike quantities."
    },
    {
      "q": "When weight matters most, the best guide is:",
      "choices": [
        "Absolute strength",
        "Specific strength",
        "Lowest cost",
        "Highest density"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Strength per weight decides. (a) ignores weight. (c) cost is a separate ranking. (d) high density is the opposite of what you want."
    },
    {
      "q": "For ten thousand identical plastic parts, the cheapest process is usually:",
      "choices": [
        "3D printing",
        "CNC machining",
        "Injection moulding",
        "Hand making"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Tooling cost spreads over many parts. (a) printing is slow per part. (b) machining each part is costly. (d) hand making is slowest of all."
    },
    {
      "q": "A cheap material in an expensive process:",
      "choices": [
        "Is always the cheapest part",
        "Can be an expensive part overall",
        "Is always the best choice",
        "Needs no tooling"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Total cost is material plus process. (a) ignores process cost. (c) best depends on the whole cost. (d) most processes need tooling."
    },
    {
      "q": "Steel and aluminium are easy to recycle because they:",
      "choices": [
        "Melt and keep their properties",
        "Burn cleanly",
        "Dissolve in water",
        "Are light"
      ],
      "answer": 0,
      "explanation": "Correct: (a). They can be remelted without losing properties. (b) metals do not burn. (c) they do not dissolve. (d) lightness is not the reason."
    },
    {
      "q": "Design for disassembly helps recycling by:",
      "choices": [
        "Making parts that come apart easily",
        "Gluing everything together",
        "Using only one material",
        "Painting parts bright colours"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Parts that separate can be sorted and recycled. (b) glueing prevents separation. (c) one material helps, but disassembly is the mechanism. (d) colour is irrelevant."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Selecting Materials and Processes: The Whole Decision: Quick Reference</h3>\n<p><strong>Core idea:</strong> Work through a full selection: requirements, screening, ranking, and choice.</p>\n<p><strong>Key terms:</strong> Requirement · Screening · Ranking · Specific strength · Specific stiffness · Break-even quantity · Design for disassembly · Life-cycle thinking.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Work through a full selection: requirements, screening, ranking, and choice.</li>\n<li>Use strength-to-weight and cost to compare candidates.</li>\n<li>Match the manufacturing process to the material and the quantity.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
