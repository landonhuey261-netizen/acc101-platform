// egr102 - Module 9: Stress, Strain & Strength of Materials
module.exports = {
  "number": 9,
  "slug": "stress-strain-strength",
  "title": "Stress, Strain & Strength of Materials",
  "estTime": "3–4 hours",
  "objectives": [
    "Define stress as force divided by area.",
    "Work out stress in N/m² and in MPa.",
    "Explain strain and Hooke’s law in plain words.",
    "Tell elastic from plastic deformation.",
    "Explain a factor of safety and why it matters."
  ],
  "sections": [
    {
      "heading": "Stress: Force Spread Over an Area",
      "html": "<p>Stress is force divided by the area it acts on: stress = F ÷ A. The same force hurts more when it is squeezed into a small area — which is why a sharp knife cuts and a blunt one does not, and why a stiletto heel dents a wooden floor.</p>\n<p>Worked example: a force of 2,000 N pushes on a plate with an area of 4 cm². First convert the area: 4 cm² = 0.0004 m². Stress = 2,000 ÷ 0.0004 = 5,000,000 Pa = 5 MPa (megapascals). One MPa is one million pascals.</p>\n"
    },
    {
      "heading": "Tension, Compression, and Shear",
      "html": "<p>Stress comes in three flavours. Tensile stress pulls a part apart (a rope holding a load). Compressive stress squeezes it (a column holding a roof). Shear stress slides one part past another (scissors cutting paper, or a bolt holding two plates that try to slide).</p>\n<p>Materials behave differently under each. Concrete is strong in compression but weak in tension — which is why it needs steel bars inside. Steel is strong in both, which is why it is used for beams and cables.</p>\n"
    },
    {
      "heading": "Strain and Hooke’s Law",
      "html": "<p>Strain is how much a material stretches compared with its original length: strain = change in length ÷ original length. It has no unit — it is a ratio. A 100 mm bar that stretches by 0.1 mm has a strain of 0.1 ÷ 100 = 0.001.</p>\n<p>Hooke’s law says that, up to a point, stress is proportional to strain: double the stress, double the stretch. That point is the elastic limit. Stretch a spring a little and it springs back; stretch it too far and it stays bent — you have passed the elastic limit.</p>\n"
    },
    {
      "heading": "Elastic vs Plastic: Will It Spring Back?",
      "html": "<p>Elastic deformation is temporary: remove the load and the part returns to its old shape. Plastic deformation is permanent: the part stays bent or stretched. A paperclip bent a little springs back (elastic); bent sharply, it stays bent (plastic).</p>\n<p>Engineers design parts to stay in the elastic region during normal use. A bridge that bent permanently under every truck would soon be useless. The yield strength is the stress where plastic deformation starts, and it is the number designers watch most closely.</p>\n<p><strong>Factor of Safety: Designing With a Margin</strong></p>\n<p>A factor of safety is extra strength built in on purpose: factor of safety = breaking load ÷ working load. A rope with a breaking load of 10,000 N used to lift 2,000 N has a factor of safety of 5.</p>\n<p>Why the margin? Because real loads are uncertain, materials vary, and people make mistakes. Lifting gear uses factors of 5 or more because a failure kills. A bookshelf can use a factor of 2. The more serious the consequence of failure, the bigger the factor.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Stress = force ÷ area, in Pa or MPa.</li><li>Tension pulls, compression squeezes, shear slides.</li><li>Strain = change in length ÷ original length (no unit).</li><li>Hooke’s law: stress is proportional to strain, up to the elastic limit.</li><li>Factor of safety = breaking load ÷ working load.</li></ul></p>\n<p><strong>Common mistake:</strong> Forgetting to convert cm² to m² before dividing. 4 cm² is 0.0004 m², not 4 m².</p>\n<p><strong>Common mistake:</strong> Thinking a part is safe because it has not broken yet. A part past its yield strength is permanently damaged even if it has not broken.</p>\n<p><strong>Ready check:</strong> If you can work out stress from 2,000 N on 4 cm², explain strain, and work out a factor of safety, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Stress",
      "def": "Force divided by the area it acts on, in pascals (Pa) or megapascals (MPa)."
    },
    {
      "term": "Strain",
      "def": "How much a material stretches compared with its original length; change in length ÷ original length."
    },
    {
      "term": "Pascal (Pa)",
      "def": "The unit of stress and pressure; 1 Pa = 1 N/m²."
    },
    {
      "term": "Megapascal (MPa)",
      "def": "One million pascals; the everyday unit for material stress."
    },
    {
      "term": "Tensile stress",
      "def": "Stress that pulls a material apart."
    },
    {
      "term": "Compressive stress",
      "def": "Stress that squeezes a material together."
    },
    {
      "term": "Shear stress",
      "def": "Stress that slides one part of a material past another."
    },
    {
      "term": "Hooke’s law",
      "def": "Up to the elastic limit, stress is proportional to strain."
    },
    {
      "term": "Elastic limit",
      "def": "The greatest stress a material can take and still spring back to its original shape."
    },
    {
      "term": "Elastic deformation",
      "def": "Temporary change of shape that disappears when the load is removed."
    },
    {
      "term": "Plastic deformation",
      "def": "Permanent change of shape that stays after the load is removed."
    },
    {
      "term": "Yield strength",
      "def": "The stress at which a material starts to deform permanently."
    },
    {
      "term": "Factor of safety",
      "def": "Breaking load divided by working load; extra strength built in on purpose."
    },
    {
      "term": "Pressure",
      "def": "Force divided by area, in pascals; the same idea as stress, used for fluids and gases."
    }
  ],
  "video": {
    "title": "Foundation Inspection - Open Concept Engineering",
    "embedUrl": "https://www.youtube.com/embed/vDltMp3ZvCc",
    "note": "Stress in the real world: foundations spread a building’s weight over the ground so the stress on the soil stays low. Watch how inspectors check that the load is spread safely.",
    "more": [
      {
        "title": "Example: Using soh cah toa | Basic trigonometry | Trigonometry | Khan Academy",
        "url": "https://www.youtube.com/watch?v=I3jyBUyjg48"
      },
      {
        "title": "Vector intro for linear algebra | Vectors and spaces | Linear Algebra | Khan Academy",
        "url": "https://www.youtube.com/watch?v=br7tS1t2SFE"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Stress” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Stress — Force divided by the area it acts on, in pascals (Pa) or megapascals (MPa). It matters because it connects directly to this module’s first goal: Define stress as force divided by area. A good answer names the term correctly, explains it in plain words, and gives a real example from the module.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Strain” and “Pascal (Pa)”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Strain — How much a material stretches compared with its original length; change in length ÷ original length. Pascal (Pa) — The unit of stress and pressure; 1 Pa = 1 N/m². They differ in what they describe: the first is about strain, the second about pascal (pa). A good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module’s main idea: “Define stress as force divided by area.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Define stress as force divided by area. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Megapascal (MPa) — One million pascals; the everyday unit for material stress. Tensile stress — Stress that pulls a material apart. Compressive stress — Stress that squeezes a material together. Shear stress — Stress that slides one part of a material past another. (Any four module terms, explained in the student’s own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A force of 2,000 N acts on a plate with an area of 4 cm². Work out the stress in Pa and in MPa. Show the area conversion.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Area = 4 cm² = 4 × 0.0001 = 0.0004 m². Step 2: Stress = 2,000 ÷ 0.0004 = 5,000,000 Pa. Step 3: 5,000,000 Pa = 5 MPa. A good answer shows the conversion first.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A rope has a breaking load of 10,000 N and is used to lift 2,000 N. What is its factor of safety? Is that enough for lifting people? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Factor of safety = 10,000 ÷ 2,000 = 5. Step 2: A factor of 5 is the usual minimum for lifting gear, so it is acceptable for lifting, provided the rope is inspected and the load is really 2,000 N. A good answer gives the number and the judgement.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Stress” mean?",
      "choices": [
        "Force divided by the area it acts on, in pascals (Pa) or megapascals (MPa).",
        "The unit of stress and pressure; 1 Pa = 1 N/m².",
        "One million pascals; the everyday unit for material stress.",
        "Stress that pulls a material apart."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Stress means: Force divided by the area it acts on, in pascals (Pa) or megapascals (MPa).. (b) is the definition of Pascal (Pa), not of Stress. (c) is the definition of Megapascal (MPa), not of Stress. (d) is the definition of Tensile stress, not of Stress."
    },
    {
      "q": "What does the term “Pascal (Pa)” mean?",
      "choices": [
        "Stress that pulls a material apart.",
        "The unit of stress and pressure; 1 Pa = 1 N/m².",
        "Stress that squeezes a material together.",
        "Stress that slides one part of a material past another."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Pascal (Pa) means: The unit of stress and pressure; 1 Pa = 1 N/m².. (a) is the definition of Tensile stress, not of Pascal (Pa). (c) is the definition of Compressive stress, not of Pascal (Pa). (d) is the definition of Shear stress, not of Pascal (Pa)."
    },
    {
      "q": "What does the term “Tensile stress” mean?",
      "choices": [
        "Stress that slides one part of a material past another.",
        "Up to the elastic limit, stress is proportional to strain.",
        "Stress that pulls a material apart.",
        "The greatest stress a material can take and still spring back to its original shape."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Tensile stress means: Stress that pulls a material apart.. (a) is the definition of Shear stress, not of Tensile stress. (b) is the definition of Hooke’s law, not of Tensile stress. (d) is the definition of Elastic limit, not of Tensile stress."
    },
    {
      "q": "What does the term “Shear stress” mean?",
      "choices": [
        "The greatest stress a material can take and still spring back to its original shape.",
        "Temporary change of shape that disappears when the load is removed.",
        "Permanent change of shape that stays after the load is removed.",
        "Stress that slides one part of a material past another."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Shear stress means: Stress that slides one part of a material past another.. (a) is the definition of Elastic limit, not of Shear stress. (b) is the definition of Elastic deformation, not of Shear stress. (c) is the definition of Plastic deformation, not of Shear stress."
    },
    {
      "q": "A force of 2,000 N acts on an area of 4 cm² (0.0004 m²). What is the stress?",
      "choices": [
        "0.5 MPa",
        "5 MPa",
        "50 MPa",
        "500 MPa"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 2,000 ÷ 0.0004 = 5,000,000 Pa = 5 MPa. (a) uses 4 m² by mistake. (c) is ten times too big. (d) is a hundred times too big."
    },
    {
      "q": "A 100 mm bar stretches by 0.1 mm under load. What is the strain?",
      "choices": [
        "0.001",
        "0.01",
        "0.1",
        "1"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Strain = 0.1 ÷ 100 = 0.001. (b) divides by 10. (c) is the stretch in mm, not the strain. (d) forgets to divide."
    },
    {
      "q": "A steel bar is loaded, then unloaded, and returns exactly to its original length. What happened?",
      "choices": [
        "Plastic deformation",
        "Elastic deformation",
        "It broke",
        "It yielded"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Returning to the original shape means the deformation was elastic. (a) is permanent deformation. (c) is false — it did not break. (d) means it passed the yield point."
    },
    {
      "q": "A rope breaks at 10,000 N and is used to lift 2,000 N. What is the factor of safety?",
      "choices": [
        "0.2",
        "2",
        "5",
        "20"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 10,000 ÷ 2,000 = 5. (a) divides the wrong way. (b) is 10,000 ÷ 5,000. (d) is 10,000 ÷ 500."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Stress, Strain & Strength of Materials: Quick Reference</h3>\n<p><strong>Core idea:</strong> Define stress as force divided by area.</p>\n<p><strong>Key terms:</strong> Stress · Strain · Pascal (Pa) · Megapascal (MPa) · Tensile stress · Compressive stress · Shear stress · Hooke’s law.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Define stress as force divided by area.</li>\n<li>Work out stress in N/m² and in MPa.</li>\n<li>Explain strain and Hooke’s law in plain words.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module’s main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
