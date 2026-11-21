// egr109 - Module 6: Fluid Properties: Density, Viscosity, and Pressure
module.exports = {
  "number": 6,
  "slug": "fluid-properties-pressure",
  "title": "Fluid Properties: Density, Viscosity, and Pressure",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a fluid is and how liquids differ from gases.",
    "Use density and specific weight to find mass and weight of a fluid.",
    "Explain viscosity and why oil flows slower than water.",
    "Calculate pressure from force and area, and convert psi, bar, and kPa.",
    "Explain gauge pressure versus absolute pressure."
  ],
  "sections": [
    {
      "heading": "What Is a Fluid?",
      "html": "<p><p>A fluid is a substance that flows — a liquid or a gas. Unlike a solid, a fluid cannot resist a sideways push; it deforms and flows instead. Liquids keep their volume but take the shape of their container; gases expand to fill the whole container and can be compressed easily. Water, oil, and air are the three fluids you will meet most in engineering.</p></p>\n<p><p>Fluids are described by properties: density (mass per volume), viscosity (resistance to flow), and pressure. Water's density is 1,000 kg/m³, oil's is about 850 kg/m³, and air's is about 1.2 kg/m³ at room temperature. Those numbers decide how heavy a tank is, how fast a fluid flows, and how much pressure a pump must make.</p></p>\n"
    },
    {
      "heading": "Density and Specific Weight",
      "html": "<p><p>Density ρ is mass divided by volume, in kg/m³. A tank holding 0.5 m³ of water holds 0.5 × 1,000 = 500 kg of water. Specific weight is density times gravity: γ = ρg, in N/m³. Water's specific weight is 1,000 × 9.81 = 9,810 N/m³. Specific gravity compares a fluid's density with water's: oil with a density of 850 kg/m³ has a specific gravity of 0.85.</p></p>\n<p><p>Density changes with temperature: hot water is a little lighter than cold water, and air gets much lighter as it warms up — that is why hot air rises. For most liquid calculations at room temperature, the textbook density is close enough. For gases, density depends strongly on pressure and temperature, so always state the conditions.</p></p>\n"
    },
    {
      "heading": "Viscosity: How Thick a Fluid Is",
      "html": "<p><p>Viscosity is a fluid's resistance to flowing. Water flows easily (dynamic viscosity about 0.001 Pa·s); honey flows slowly (about 10 Pa·s); engine oil sits in between (about 0.1–0.4 Pa·s depending on grade). A fluid with high viscosity needs more pressure to push through a pipe, and it gives a thicker lubricating film in a bearing.</p></p>\n<p><p>Viscosity falls as temperature rises — cold oil is thick and hard to pump, hot oil is thin and flows easily. That is why engine oil has a grade like 10W-30: it must flow when cold and still protect when hot. In a pipe, a more viscous fluid means more friction loss, which you will calculate in Module 9.</p></p>\n"
    },
    {
      "heading": "Pressure: Force Per Area",
      "html": "<p><p>Pressure is force divided by area: p = F ÷ A, in pascals (1 Pa = 1 N/m²). A force of 5,000 N on a piston of 0.01 m² gives a pressure of 5,000 ÷ 0.01 = 500,000 Pa, or 500 kPa. Pressure units to know: 1 bar = 100 kPa, 1 psi = 6.895 kPa, and standard atmospheric pressure is 101.3 kPa (14.7 psi).</p></p>\n<p><p>Gauge pressure is measured above atmospheric pressure; absolute pressure adds the atmosphere back on: p_absolute = p_gauge + 101.3 kPa. A tyre gauge reading 200 kPa is a gauge pressure — the absolute pressure inside is 200 + 101.3 = 301.3 kPa. Always say which one you mean, because using the wrong one in a gas calculation gives a wrong answer.</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>Fluids flow; liquids keep volume, gases fill the container.</li><li>Density ρ is mass per volume; specific weight γ = ρg.</li><li>Viscosity is resistance to flow; it falls as temperature rises.</li><li>Pressure p = F ÷ A; 1 bar = 100 kPa; 1 psi = 6.895 kPa.</li><li>Absolute pressure = gauge pressure + atmospheric pressure.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Mixing gauge and absolute pressure in gas calculations. Gas laws need absolute pressure.</p><p><strong>Common mistake:</strong> Using density in kg/m³ and volume in litres without converting. One litre is 0.001 m³.</p><p><strong>Ready check:</strong> If you can find the mass of water in a tank and convert 200 kPa gauge to absolute, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Fluid",
      "def": "A substance that flows: a liquid or a gas."
    },
    {
      "term": "Density (ρ)",
      "def": "Mass per unit volume, in kg/m³."
    },
    {
      "term": "Specific weight (γ)",
      "def": "Weight per unit volume: γ = ρg, in N/m³."
    },
    {
      "term": "Specific gravity",
      "def": "A fluid's density divided by water's density; it has no units."
    },
    {
      "term": "Viscosity",
      "def": "A fluid's resistance to flowing, in Pa·s."
    },
    {
      "term": "Dynamic viscosity",
      "def": "Viscosity measured as shear stress divided by velocity gradient, in Pa·s."
    },
    {
      "term": "Pressure",
      "def": "Force per unit area, in pascals."
    },
    {
      "term": "Pascal (Pa)",
      "def": "The SI unit of pressure: 1 Pa = 1 N/m²."
    },
    {
      "term": "Bar",
      "def": "A pressure unit: 1 bar = 100,000 Pa = 100 kPa."
    },
    {
      "term": "Gauge pressure",
      "def": "Pressure measured above atmospheric pressure."
    },
    {
      "term": "Absolute pressure",
      "def": "Pressure measured from a perfect vacuum; gauge pressure plus atmospheric pressure."
    },
    {
      "term": "Atmospheric pressure",
      "def": "The pressure of the air around us: about 101.3 kPa."
    },
    {
      "term": "Litre",
      "def": "A volume unit: 1 L = 0.001 m³."
    },
    {
      "term": "Compressibility",
      "def": "How much a fluid's volume changes with pressure; gases compress easily, liquids barely at all."
    }
  ],
  "video": {
    "title": "Fluid Flow & Equipment: Crash Course Engineering #13",
    "embedUrl": "https://www.youtube.com/embed/bRrfsv9hiX4",
    "note": "Crash Course Engineering on fluid flow and equipment — Bernoulli's principle, pumps, and how to choose the right pump for the job.",
    "more": [
      {
        "title": "How a Centrifugal Pump Moves Water",
        "url": "https://www.youtube.com/watch?v=IN5Qq1cOrco"
      },
      {
        "title": "How a Centrifugal Pump Works | 3D Animation Explained for Operators & Engineers",
        "url": "https://www.youtube.com/watch?v=VKMi79Z-G-w"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A tank holds 0.8 m³ of water. What is the mass of the water?</p>",
      "solution": "<p><strong>Answer:</strong> Mass = 0.8 × 1,000 = 800 kg.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> What is the specific weight of oil with density 850 kg/m³?</p>",
      "solution": "<p><strong>Answer:</strong> γ = 850 × 9.81 = 8,338.5 N/m³, about 8.34 kN/m³.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A force of 8,000 N acts on a piston of area 0.02 m². What is the pressure in kPa?</p>",
      "solution": "<p><strong>Answer:</strong> p = 8,000 ÷ 0.02 = 400,000 Pa = 400 kPa.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A gauge reads 150 kPa. What is the absolute pressure?</p>",
      "solution": "<p><strong>Answer:</strong> Absolute = 150 + 101.3 = 251.3 kPa.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Convert 50 psi to kPa.</p>",
      "solution": "<p><strong>Answer:</strong> 50 × 6.895 = 344.75 kPa, about 345 kPa.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain in plain words why cold engine oil is harder to pump than hot oil.</p>",
      "solution": "<p><strong>Answer:</strong> Viscosity falls as temperature rises, so cold oil is thicker and resists flowing more than hot oil.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A 1-litre bottle of water has a mass of about 1 kg. What does that tell you about water's density?",
      "choices": [
        "About 1 kg/m³.",
        "About 100 kg/m³.",
        "About 1,000 kg/m³.",
        "About 10,000 kg/m³."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Density is mass divided by volume: 1 litre is 0.001 m³, so 1 kg ÷ 0.001 m³ = 1,000 kg/m³. (a) is a thousand times too small. (b) is ten times too small. (d) is ten times too big."
    },
    {
      "q": "A tank holds 0.5 m³ of oil at 850 kg/m³. The mass is:",
      "choices": [
        "425 kg",
        "1,700 kg",
        "850 kg",
        "500 kg"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 0.5 × 850 = 425 kg. (b) divides the wrong way. (c) is the density alone. (d) is the water mass for the same volume."
    },
    {
      "q": "Viscosity is:",
      "choices": [
        "Density of a fluid",
        "Resistance to flowing",
        "Pressure in a pipe",
        "Speed of a fluid"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Viscosity resists flow. (a) is density. (c) is pressure. (d) is velocity."
    },
    {
      "q": "As temperature rises, a liquid's viscosity usually:",
      "choices": [
        "Rises",
        "Falls",
        "Stays the same",
        "Becomes zero"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Hot liquids flow more easily. (a) is backwards. (c) viscosity changes with temperature. (d) it never reaches zero."
    },
    {
      "q": "Pressure is:",
      "choices": [
        "Force × area",
        "Force ÷ area",
        "Area ÷ force",
        "Mass × gravity"
      ],
      "answer": 1,
      "explanation": "Correct: (b). p = F ÷ A. (a) multiplies instead of dividing. (c) divides the wrong way. (d) is weight."
    },
    {
      "q": "A force of 10,000 N on 0.05 m² gives a pressure of:",
      "choices": [
        "500 Pa",
        "200,000 Pa",
        "2,000 Pa",
        "50,000 Pa"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 10,000 ÷ 0.05 = 200,000 Pa. (a) multiplies. (c) divides by 5. (d) divides by 0.2."
    },
    {
      "q": "1 bar equals:",
      "choices": [
        "1,000 Pa",
        "10,000 Pa",
        "100,000 Pa",
        "1,000,000 Pa"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 1 bar = 100 kPa. (a) is 1 kPa. (b) is 10 kPa. (d) is 1 MPa."
    },
    {
      "q": "A tyre gauge reads 200 kPa. The absolute pressure is about:",
      "choices": [
        "200 kPa",
        "99 kPa",
        "301 kPa",
        "101 kPa"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 200 + 101.3 = 301.3 kPa. (a) is the gauge pressure. (b) subtracts the atmosphere. (d) is atmospheric pressure alone."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Fluid Properties: Density, Viscosity, and Pressure: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a fluid is and how liquids differ from gases.</p>\n<p><strong>Key terms:</strong> Fluid · Density (ρ) · Specific weight (γ) · Specific gravity · Viscosity · Dynamic viscosity · Pressure · Pascal (Pa).</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a fluid is and how liquids differ from gases.</li>\n<li>Use density and specific weight to find mass and weight of a fluid.</li>\n<li>Explain viscosity and why oil flows slower than water.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
