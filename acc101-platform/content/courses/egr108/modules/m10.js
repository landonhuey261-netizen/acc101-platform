// egr108 - Module 10: Additive Manufacturing: 3D Printing
module.exports = {
  "number": 10,
  "slug": "additive-manufacturing",
  "title": "Additive Manufacturing: 3D Printing",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how additive manufacturing builds a part layer by layer.",
    "Compare FDM, SLA, and SLS and say what each one makes.",
    "Explain the design freedoms of 3D printing: internal channels and lattices.",
    "List the limits: strength, surface finish, size, and speed.",
    "Choose between 3D printing, CNC, and moulding for a part."
  ],
  "sections": [
    {
      "heading": "Building Up Instead of Cutting Away",
      "html": "<p><p>Additive manufacturing (3D printing) builds a part one thin layer at a time from a digital model, instead of cutting material away from a block. The printer reads the model, slices it into layers, and lays down material — melted plastic, cured resin, or fused powder — until the part is complete. A part that would need five machined pieces and three fasteners can sometimes be printed as one.</p></p>\n<p><p>The process starts with a CAD model, which is sliced into layers (often 0.1–0.2 mm thick for plastic). The printer follows the slices, and the part grows from the build plate upward. Support material holds up overhangs and is removed afterwards. The whole job can go from screen to part in hours, with no tooling at all.</p></p>\n"
    },
    {
      "heading": "FDM, SLA, and SLS",
      "html": "<p><p>FDM (fused deposition modelling) melts a plastic filament and squeezes it out of a nozzle, like a precise hot-glue gun. It is cheap, easy, and good for prototypes and jigs. SLA (stereolithography) cures liquid resin with a laser or light, giving smooth, detailed parts — good for dental models and small detailed prototypes. SLS (selective laser sintering) fuses powder with a laser, making strong nylon parts with no supports needed, because the powder itself supports the part.</p></p>\n<p><p>Metal printing (DMLS) fuses metal powder with a laser to make aircraft brackets and medical implants with internal channels no other process can make. It is expensive and slow, but for a part that cannot be made any other way, it is the only option. Match the process to the material and the accuracy the part needs.</p></p>\n"
    },
    {
      "heading": "Design Freedom — and Its Limits",
      "html": "<p><p>3D printing frees the designer: internal cooling channels that follow a mould's shape, lattice structures that are strong and light, and parts with undercuts that no mould could release. A printed bracket can be half the weight of a machined one because material is only put where the load needs it. That is the real promise of additive manufacturing, not just fast prototypes.</p></p>\n<p><p>The limits are real too. Printed parts are weaker along the layer lines — a part pulled apart across its layers can split. Surface finish is rougher than machined, size is limited by the printer, and printing is slow for large batches. A thousand parts are cheaper by moulding; one complex prototype is cheaper by printing. Always check the strength direction before trusting a printed part with a load.</p></p>\n"
    },
    {
      "heading": "When to Print, When to Machine, When to Mould",
      "html": "<p><p>Print when you need one or a few complex parts fast, or a shape no other process can make. Machine when you need strength, accuracy, and a good surface on a metal part. Mould (injection moulding) when you need thousands of identical plastic parts cheaply. The three processes are complements, not rivals — many products use all three at different stages.</p></p>\n<p><p>A good workflow is: print a prototype to check the shape and fit, machine a metal version to test strength, then mould the production run. That path catches design mistakes when they are cheap to fix. And remember: a 3D-printed part is a real part, but it is not automatically as strong as the same shape in solid metal.</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>Additive manufacturing builds layer by layer from a digital model.</li><li>FDM is cheap plastic, SLA is smooth resin, SLS is strong nylon powder.</li><li>Printing allows internal channels and lattices no other process can make.</li><li>Printed parts are weaker across the layer lines.</li><li>Print for prototypes and complex parts; mould for thousands; machine for strength and accuracy.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Trusting a printed part's strength in every direction. It is weaker across the layers — orient the part so the load runs along the layers.</p><p><strong>Common mistake:</strong> Printing a thousand parts that should have been moulded. Printing is slow and costly per part at volume.</p><p><strong>Ready check:</strong> If you can say which process suits a prototype, a production run, and a strong metal bracket, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Additive manufacturing",
      "def": "Building a part layer by layer from a digital model (3D printing)."
    },
    {
      "term": "FDM",
      "def": "Fused deposition modelling: melted plastic filament squeezed from a nozzle."
    },
    {
      "term": "SLA",
      "def": "Stereolithography: liquid resin cured by light, giving smooth detailed parts."
    },
    {
      "term": "SLS",
      "def": "Selective laser sintering: powder fused by a laser into a solid part."
    },
    {
      "term": "DMLS",
      "def": "Direct metal laser sintering: metal powder fused by a laser."
    },
    {
      "term": "Layer",
      "def": "One thin slice of a printed part, often 0.1–0.2 mm thick."
    },
    {
      "term": "Support material",
      "def": "Extra printed material that holds up overhangs and is removed later."
    },
    {
      "term": "Lattice structure",
      "def": "A light, strong internal structure of thin struts inside a printed part."
    },
    {
      "term": "Build plate",
      "def": "The flat surface a printed part grows on."
    },
    {
      "term": "Slicing",
      "def": "Cutting a CAD model into thin layers for the printer to follow."
    },
    {
      "term": "Anisotropy",
      "def": "Properties that differ with direction — printed parts are weaker across layers."
    },
    {
      "term": "Prototype",
      "def": "An early version of a part made to check shape, fit, or function."
    },
    {
      "term": "Injection moulding",
      "def": "Making many identical plastic parts by injecting melted plastic into a mould."
    },
    {
      "term": "Overhang",
      "def": "Part of a print that sticks out with nothing below it, needing support."
    }
  ],
  "video": {
    "title": "What Is Additive Manufacturing?",
    "embedUrl": "https://www.youtube.com/embed/t4S0mKjXtT4",
    "note": "What additive manufacturing is, what it is good for, and whether it will replace machining — from the editor of Additive Manufacturing magazine.",
    "more": [
      {
        "title": "3D Printing Materials Explained: Compare FDM, SLA, and SLS",
        "url": "https://www.youtube.com/watch?v=9B-HGhN_jCk"
      },
      {
        "title": "CNC machining - What is it and How Does it Work?",
        "url": "https://www.youtube.com/watch?v=lEyNWtM6MW4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Explain in plain words how a 3D printer makes a part.</p>",
      "solution": "<p><strong>Answer:</strong> It reads a digital model, slices it into thin layers, and lays down material layer by layer until the part is complete.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A prototype bracket must be made today to check the fit. Print, machine, or mould — and why?</p>",
      "solution": "<p><strong>Answer:</strong> Print: it needs no tooling and can be ready in hours.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A printed part must carry a pull load. How should it be oriented on the build plate, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Orient it so the pull runs along the layers, not across them — printed parts are weaker across layer lines.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Compare FDM and SLA in one sentence each.</p>",
      "solution": "<p><strong>Answer:</strong> FDM melts plastic filament through a nozzle and is cheap and good for prototypes. SLA cures resin with light and gives smooth, detailed parts.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> 1,000 identical plastic housings are needed. Print or mould, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Mould: injection moulding is far cheaper per part at that volume; printing 1,000 would be slow and costly.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Name one shape that 3D printing can make but machining cannot (easily).</p>",
      "solution": "<p><strong>Answer:</strong> An internal cooling channel that follows a curved path, or a lattice structure inside a part.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Additive manufacturing builds a part by:",
      "choices": [
        "Cutting material away",
        "Adding material layer by layer",
        "Melting it in a mould",
        "Forging it"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It adds layers from a digital model. (a) is machining. (c) is casting or moulding. (d) is forging."
    },
    {
      "q": "FDM printing uses:",
      "choices": [
        "Liquid resin cured by light",
        "Melted plastic filament from a nozzle",
        "Powder fused by a laser",
        "Sheet metal"
      ],
      "answer": 1,
      "explanation": "Correct: (b). FDM squeezes melted filament. (a) is SLA. (c) is SLS or DMLS. (d) is not a printing material."
    },
    {
      "q": "SLA is best for:",
      "choices": [
        "Cheap large parts",
        "Smooth, detailed small parts",
        "Strong metal brackets",
        "Thousands of parts"
      ],
      "answer": 1,
      "explanation": "Correct: (b). SLA gives fine detail and smooth surfaces. (a) FDM is cheaper for large parts. (c) DMLS makes metal parts. (d) moulding suits thousands."
    },
    {
      "q": "SLS printing works with:",
      "choices": [
        "Filament",
        "Liquid resin",
        "Powder fused by a laser",
        "Molten metal poured in"
      ],
      "answer": 2,
      "explanation": "Correct: (c). SLS fuses powder. (a) is FDM. (b) is SLA. (d) is casting."
    },
    {
      "q": "Printed parts are weakest:",
      "choices": [
        "Along the layers",
        "Across the layer lines",
        "At the bottom",
        "On the build plate"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Layers can split apart across the lines. (a) is the strong direction. (c) and (d) are not the weak direction."
    },
    {
      "q": "A lattice structure inside a printed part is used to:",
      "choices": [
        "Make it heavier",
        "Make it strong and light",
        "Make it waterproof",
        "Make it cheaper to paint"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Lattices give strength with little material. (a) lattices save weight. (c) they are not for waterproofing. (d) paint is unrelated."
    },
    {
      "q": "For 1,000 identical plastic parts, the cheapest process is usually:",
      "choices": [
        "FDM printing",
        "SLA printing",
        "Injection moulding",
        "CNC machining"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Moulding spreads the tooling cost over many parts. (a) and (b) are slow per part. (d) machining each part is costly."
    },
    {
      "q": "Support material in 3D printing is needed for:",
      "choices": [
        "Flat bases",
        "Overhangs with nothing below them",
        "Solid blocks",
        "The build plate"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Overhangs need support while they print. (a) flat bases sit on the plate. (c) solid blocks support themselves. (d) the plate needs no support."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Additive Manufacturing: 3D Printing: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain how additive manufacturing builds a part layer by layer.</p>\n<p><strong>Key terms:</strong> Additive manufacturing · FDM · SLA · SLS · DMLS · Layer · Support material · Lattice structure.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain how additive manufacturing builds a part layer by layer.</li>\n<li>Compare FDM, SLA, and SLS and say what each one makes.</li>\n<li>Explain the design freedoms of 3D printing: internal channels and lattices.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
