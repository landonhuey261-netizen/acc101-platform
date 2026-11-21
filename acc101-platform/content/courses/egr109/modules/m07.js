// egr109 - Module 7: Hydrostatics and Buoyancy: Fluids at Rest
module.exports = {
  "number": 7,
  "slug": "hydrostatics-buoyancy",
  "title": "Hydrostatics and Buoyancy: Fluids at Rest",
  "estTime": "3–4 hours",
  "objectives": [
    "Calculate pressure at a depth using p = ρgh.",
    "Explain why pressure acts equally in all directions in a still fluid.",
    "Use Pascal's principle to explain a hydraulic jack.",
    "Calculate buoyant force and say whether an object floats or sinks.",
    "Explain how a manometer and a barometer measure pressure."
  ],
  "sections": [
    {
      "heading": "Pressure Grows With Depth",
      "html": "<p><p>In a still liquid, pressure grows with depth: p = ρgh, where ρ is density, g is 9.81 m/s², and h is depth. At 5 m under water, the gauge pressure is 1,000 × 9.81 × 5 = 49,050 Pa, about 49 kPa. Add atmospheric pressure for the absolute value: 49 + 101.3 = 150.3 kPa. That is why a dam is thickest at the bottom — the water pushes hardest there.</p></p>\n<p><p>Pressure in a still fluid acts equally in all directions and depends only on depth, not on the shape of the container. A narrow pipe and a wide tank with the same water depth have the same pressure at the bottom. That surprises people, but it is true — and it is why a tall, thin standpipe can burst a tank that a wide, shallow one would not.</p></p>\n"
    },
    {
      "heading": "Pascal's Principle and Hydraulics",
      "html": "<p><p>Pascal's principle says pressure applied to a confined fluid is transmitted undiminished to every part of the fluid. That is how a hydraulic jack works: a small force on a small piston creates a pressure, and the same pressure on a large piston gives a large force. Force multiplies by the area ratio, while the distance moved divides by the same ratio — energy is conserved, so there is no free lunch.</p></p>\n<p><p>Example: a jack has a small piston of 0.001 m² and a large piston of 0.05 m². A force of 200 N on the small piston gives a pressure of 200 ÷ 0.001 = 200,000 Pa. The large piston then pushes with 200,000 × 0.05 = 10,000 N — fifty times the input force. The large piston moves only 1/50 as far as the small one, so the work in equals the work out.</p></p>\n"
    },
    {
      "heading": "Buoyancy: Why Things Float",
      "html": "<p><p>Buoyancy is the upward force a fluid exerts on an object in it, equal to the weight of the fluid the object displaces (Archimedes' principle). A steel block of 0.01 m³ under water displaces 0.01 × 1,000 = 10 kg of water, so the buoyant force is 10 × 9.81 = 98.1 N. The block weighs more than that, so it sinks — but it feels lighter under water by 98.1 N.</p></p>\n<p><p>An object floats when its average density is less than the fluid's. A ship floats because its hull encloses a lot of air, so its average density is less than water's even though it is made of steel. A hydrometer measures a liquid's density by how deep it floats: the denser the liquid, the higher it floats. If an object is denser than the fluid, it sinks; if it is less dense, it floats.</p></p>\n"
    },
    {
      "heading": "Measuring Pressure: Manometers and Barometers",
      "html": "<p><p>A manometer measures pressure with a column of liquid: the height difference between the two sides gives the pressure difference, p = ρgh. A U-tube with water and a height difference of 0.2 m reads 1,000 × 9.81 × 0.2 = 1,962 Pa, about 1.96 kPa. Mercury manometers read higher pressures because mercury is 13.6 times denser than water.</p></p>\n<p><p>A barometer measures atmospheric pressure, usually with a mercury column about 760 mm high at sea level. A Bourdon gauge — the round dial gauge on a compressor — works differently: pressure bends a curved tube, and the movement turns the needle. Whatever the instrument, always check whether it reads gauge or absolute pressure before you use its number.</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>Pressure at depth is p = ρgh; it grows with depth only.</li><li>Pascal's principle: pressure in a confined fluid is transmitted undiminished.</li><li>Buoyant force equals the weight of displaced fluid.</li><li>Objects float when their average density is less than the fluid's.</li><li>Manometers read pressure from a liquid column height.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Thinking a wide tank has more pressure at the bottom than a narrow one at the same depth. Only depth matters.</p><p><strong>Common mistake:</strong> Forgetting atmospheric pressure when an absolute pressure is needed.</p><p><strong>Ready check:</strong> If you can find the pressure 5 m under water and the lift of a hydraulic jack, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Hydrostatics",
      "def": "The study of fluids at rest."
    },
    {
      "term": "Pressure at depth",
      "def": "p = ρgh, the pressure from the weight of fluid above."
    },
    {
      "term": "Pascal's principle",
      "def": "Pressure applied to a confined fluid is transmitted undiminished."
    },
    {
      "term": "Buoyancy",
      "def": "The upward force a fluid exerts on an object in it."
    },
    {
      "term": "Archimedes' principle",
      "def": "The buoyant force equals the weight of the fluid displaced."
    },
    {
      "term": "Hydraulic jack",
      "def": "A device that multiplies force using Pascal's principle."
    },
    {
      "term": "Manometer",
      "def": "An instrument that measures pressure with a liquid column."
    },
    {
      "term": "Barometer",
      "def": "An instrument that measures atmospheric pressure."
    },
    {
      "term": "Bourdon gauge",
      "def": "A dial pressure gauge that works by bending a curved tube."
    },
    {
      "term": "Specific gravity",
      "def": "A fluid's density divided by water's density."
    },
    {
      "term": "Hydrometer",
      "def": "A floating instrument that measures a liquid's density."
    },
    {
      "term": "Gauge pressure",
      "def": "Pressure above atmospheric pressure."
    },
    {
      "term": "Absolute pressure",
      "def": "Pressure from a perfect vacuum, including the atmosphere."
    },
    {
      "term": "Displacement",
      "def": "The volume of fluid pushed aside by an object in it."
    }
  ],
  "video": {
    "title": "Do Pumps Create Pressure or Flow?",
    "embedUrl": "https://www.youtube.com/embed/m3i_5xP9PYU",
    "note": "Practical Engineering on pumps and pressure: how pumps make flow, how resistance makes pressure, and how the two work together.",
    "more": [
      {
        "title": "Fluid Flow & Equipment: Crash Course Engineering #13",
        "url": "https://www.youtube.com/watch?v=bRrfsv9hiX4"
      },
      {
        "title": "How California Pushes Water 1,926 Feet Over a Mountain",
        "url": "https://www.youtube.com/watch?v=ybAt6Lm35x4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> What is the gauge pressure 3 m under water?</p>",
      "solution": "<p><strong>Answer:</strong> p = 1,000 × 9.81 × 3 = 29,430 Pa, about 29.4 kPa.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> What is the absolute pressure at that depth?</p>",
      "solution": "<p><strong>Answer:</strong> 29.4 + 101.3 = 130.7 kPa.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A hydraulic jack has pistons of 0.002 m² and 0.08 m². A force of 300 N is applied to the small piston. What force does the large piston give?</p>",
      "solution": "<p><strong>Answer:</strong> Pressure = 300 ÷ 0.002 = 150,000 Pa. Force = 150,000 × 0.08 = 12,000 N.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A block of 0.02 m³ is fully under water. What is the buoyant force?</p>",
      "solution": "<p><strong>Answer:</strong> Displaced water = 0.02 × 1,000 = 20 kg. Buoyant force = 20 × 9.81 = 196.2 N.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A steel part weighs 500 N in air and 430 N in water. What is the buoyant force, and what is the volume of the part?</p>",
      "solution": "<p><strong>Answer:</strong> Buoyant force = 500 − 430 = 70 N. Displaced water mass = 70 ÷ 9.81 = 7.14 kg, volume = 7.14 ÷ 1,000 = 0.00714 m³.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain why a steel ship floats but a steel block sinks.</p>",
      "solution": "<p><strong>Answer:</strong> The ship's average density (steel plus the air inside the hull) is less than water's; the solid block's density is greater than water's.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Pressure 5 m under water (gauge) is about:",
      "choices": [
        "49 kPa",
        "9.81 kPa",
        "5 kPa",
        "150 kPa"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 1,000 × 9.81 × 5 = 49,050 Pa. (b) is g alone. (c) is the depth alone. (d) is the absolute pressure."
    },
    {
      "q": "Pressure at the bottom of a tank depends on:",
      "choices": [
        "The shape of the tank",
        "The depth only",
        "The volume of the tank",
        "The colour of the liquid"
      ],
      "answer": 1,
      "explanation": "Correct: (b). p = ρgh depends on depth, not shape or volume. (a) and (c) do not affect pressure. (d) is irrelevant."
    },
    {
      "q": "Pascal's principle says pressure in a confined fluid is:",
      "choices": [
        "Lost quickly",
        "Transmitted undiminished",
        "Doubled",
        "Zero"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It reaches every part equally. (a) is wrong — it is not lost. (c) it is not doubled. (d) it is not zero."
    },
    {
      "q": "A jack's small piston is 0.001 m² and the large one is 0.04 m². The force is multiplied by:",
      "choices": [
        "0.04",
        "40",
        "4",
        "400"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 0.04 ÷ 0.001 = 40. (a) is the large area alone. (c) is a tenth of the ratio. (d) is ten times the ratio."
    },
    {
      "q": "Buoyant force equals:",
      "choices": [
        "The weight of the object",
        "The weight of the fluid displaced",
        "The volume of the object",
        "The density of the fluid"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Archimedes' principle. (a) is the object's weight, not the buoyant force. (c) is a volume, not a force. (d) is a property, not a force."
    },
    {
      "q": "An object floats when its average density is:",
      "choices": [
        "Greater than the fluid's",
        "Less than the fluid's",
        "Equal to the fluid's",
        "Zero"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Less dense than the fluid means it floats. (a) means it sinks. (c) means it hovers. (d) is impossible."
    },
    {
      "q": "A U-tube manometer with a 0.1 m water height difference reads about:",
      "choices": [
        "981 Pa",
        "98 Pa",
        "9,810 Pa",
        "1 Pa"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 1,000 × 9.81 × 0.1 = 981 Pa. (b) is ten times too small. (c) is ten times too big. (d) is far too small."
    },
    {
      "q": "A dam is thickest at the bottom because:",
      "choices": [
        "It looks better",
        "Water pressure is greatest at the greatest depth",
        "The concrete is cheaper there",
        "Fish push on it"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Pressure grows with depth, so the bottom carries the most load. (a) is cosmetic. (c) is false. (d) is not a design load."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Hydrostatics and Buoyancy: Fluids at Rest: Quick Reference</h3>\n<p><strong>Core idea:</strong> Calculate pressure at a depth using p = ρgh.</p>\n<p><strong>Key terms:</strong> Hydrostatics · Pressure at depth · Pascal's principle · Buoyancy · Archimedes' principle · Hydraulic jack · Manometer · Barometer.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Calculate pressure at a depth using p = ρgh.</li>\n<li>Explain why pressure acts equally in all directions in a still fluid.</li>\n<li>Use Pascal's principle to explain a hydraulic jack.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
