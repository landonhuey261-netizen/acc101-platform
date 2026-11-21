// egr102 - Module 4: Units, Conversions & Dimensional Analysis
module.exports = {
  "number": 4,
  "slug": "units-and-conversions",
  "title": "Units, Conversions & Dimensional Analysis",
  "estTime": "3–4 hours",
  "objectives": [
    "Name the SI base and derived units engineers use.",
    "Convert between mm, cm, m, and km.",
    "Convert between inches, feet, and millimetres.",
    "Convert speeds between km/h and m/s.",
    "Use dimensional analysis to check a formula."
  ],
  "sections": [
    {
      "heading": "The SI System, Properly",
      "html": "<p>SI has seven base units, but engineers mostly use four: the metre (m) for length, the kilogram (kg) for mass, the second (s) for time, and the ampere (A) for electric current. Everything else is built from these. A newton (N) is kg·m/s²; a joule (J) is N·m; a watt (W) is J/s.</p>\n<p>Prefixes scale units by powers of ten: milli- (0.001), centi- (0.01), kilo- (1,000), mega- (1,000,000). So 2.5 km is 2,500 m, and 250 mm is 0.25 m. Moving a decimal point is the whole trick — if you know which way it goes.</p>\n"
    },
    {
      "heading": "Length Conversions",
      "html": "<p>Inside SI, conversions are decimal shifts: 1 m = 100 cm = 1,000 mm; 1 km = 1,000 m. So 2.5 m = 250 cm = 2,500 mm, and 750 mm = 75 cm = 0.75 m. Count the zeros and move the point.</p>\n<p>Between systems, the key is 1 in = 25.4 mm exactly. So 3 in = 76.2 mm, and 100 mm ÷ 25.4 = 3.94 in. For feet: 1 ft = 12 in = 304.8 mm. A 6 ft person is 1,828.8 mm tall — about 1.83 m.</p>\n"
    },
    {
      "heading": "Speed, Area, and Volume Conversions",
      "html": "<p>Speed conversions use 1 km/h = 1,000 m ÷ 3,600 s = 0.2778 m/s. The shortcut: divide km/h by 3.6 to get m/s. So 72 km/h ÷ 3.6 = 20 m/s, and 90 km/h ÷ 3.6 = 25 m/s. To go back, multiply m/s by 3.6.</p>\n<p>Area and volume conversions square and cube the factor. 1 m² = 10,000 cm² (100 × 100), and 1 m³ = 1,000,000 cm³. A common trap: 1 cm² is not 10 mm² — it is 100 mm², because 10 mm × 10 mm = 100 mm².</p>\n"
    },
    {
      "heading": "Dimensional Analysis: Checking With Units",
      "html": "<p>Dimensional analysis means treating units like numbers in a calculation. To find speed, divide a distance by a time: 120 m ÷ 10 s = 12 m/s. The units tell you the answer is a speed — if they came out as m·s, you divided the wrong way round.</p>\n<p>Use it to check formulas. Force = mass × acceleration: kg × m/s² = kg·m/s², which is the newton — correct. If a formula gives you the wrong units, the formula is wrong, however neat it looks. This one check catches more errors than any other.</p>\n<p><strong>Mass, Weight, and Density</strong></p>\n<p>Mass (kg) is how much stuff there is; weight is the force gravity pulls it with, in newtons: weight = mass × g, where g = 9.81 m/s² on Earth. A 70 kg person weighs 70 × 9.81 = 686.7 N — about 687 N. On the Moon, g is 1.62 m/s², so the same person weighs 113.4 N but their mass is still 70 kg.</p>\n<p>Density is mass ÷ volume. Aluminium has a density of about 2.7 g/cm³: a 100 cm³ block has a mass of 270 g. Steel is about 7.85 g/cm³, so the same volume of steel has a mass of 785 g. Density is how engineers compare materials fairly, size for size.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>SI base units: m, kg, s, A; derived: N = kg·m/s², J = N·m, W = J/s.</li><li>1 in = 25.4 mm; 1 ft = 304.8 mm; km/h ÷ 3.6 = m/s.</li><li>Area factors square, volume factors cube: 1 cm² = 100 mm².</li><li>Check formulas by checking units.</li><li>Weight = mass × g; density = mass ÷ volume.</li></ul></p>\n<p><strong>Common mistake:</strong> Converting an area like a length: 1 m² is 10,000 cm², not 100 cm².</p>\n<p><strong>Common mistake:</strong> Confusing mass and weight. Mass stays the same on the Moon; weight does not.</p>\n<p><strong>Ready check:</strong> If you can convert 72 km/h to m/s, 3 in to mm, and work out the weight of a 70 kg person, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "SI unit",
      "def": "A unit of the metric system, such as the metre, kilogram, or second."
    },
    {
      "term": "Base unit",
      "def": "One of the seven fundamental SI units, such as the metre (m) or kilogram (kg)."
    },
    {
      "term": "Derived unit",
      "def": "A unit built from base units, such as the newton (N = kg·m/s²)."
    },
    {
      "term": "Newton (N)",
      "def": "The SI unit of force; 1 N accelerates 1 kg at 1 m/s²."
    },
    {
      "term": "Joule (J)",
      "def": "The SI unit of energy and work; 1 J = 1 N·m."
    },
    {
      "term": "Watt (W)",
      "def": "The SI unit of power; 1 W = 1 J/s."
    },
    {
      "term": "Dimensional analysis",
      "def": "Checking a calculation by treating units like numbers, to make sure the answer comes out in the right unit."
    },
    {
      "term": "Conversion factor",
      "def": "A number used to change one unit into another, such as 25.4 mm per inch."
    },
    {
      "term": "Mass",
      "def": "How much matter something contains, measured in kilograms; it does not change with location."
    },
    {
      "term": "Weight",
      "def": "The force of gravity on a mass, in newtons; weight = mass × g."
    },
    {
      "term": "Density",
      "def": "Mass divided by volume, such as 2.7 g/cm³ for aluminium."
    },
    {
      "term": "Gravity (g)",
      "def": "The acceleration due to gravity: 9.81 m/s² on Earth, 1.62 m/s² on the Moon."
    },
    {
      "term": "Prefix",
      "def": "A word part that scales a unit, such as milli- (0.001) or kilo- (1,000)."
    },
    {
      "term": "Volume",
      "def": "The space something occupies, measured in m³, cm³, or litres."
    }
  ],
  "video": {
    "title": "Mastering the Tape Measure  Learn How to Read Inches and Fractions",
    "embedUrl": "https://www.youtube.com/embed/fFw1HYcJt2c",
    "note": "Inches and fractions on a real tape measure, taught slowly. Follow along with your own tape measure and practise converting each reading to millimetres.",
    "more": [
      {
        "title": "How Levers, Pulleys and Gears Work",
        "url": "https://www.youtube.com/watch?v=JnYVz1TSmBQ"
      },
      {
        "title": "What Are Simple Machines? | Types Of Simple Machines | The Dr Binocs Show | Peekaboo Kidz",
        "url": "https://www.youtube.com/watch?v=tk9iUjMEnaY"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “SI unit” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> SI unit — A unit of the metric system, such as the metre, kilogram, or second. It matters because it connects directly to this module’s first goal: Name the SI base and derived units engineers use. A good answer names the term correctly, explains it in plain words, and gives a real example from the module.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Base unit” and “Derived unit”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Base unit — One of the seven fundamental SI units, such as the metre (m) or kilogram (kg). Derived unit — A unit built from base units, such as the newton (N = kg·m/s²). They differ in what they describe: the first is about base unit, the second about derived unit. A good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module’s main idea: “Name the SI base and derived units engineers use.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Name the SI base and derived units engineers use. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Newton (N) — The SI unit of force; 1 N accelerates 1 kg at 1 m/s². Joule (J) — The SI unit of energy and work; 1 J = 1 N·m. Watt (W) — The SI unit of power; 1 W = 1 J/s. Dimensional analysis — Checking a calculation by treating units like numbers, to make sure the answer comes out in the right unit. (Any four module terms, explained in the student’s own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A car travels at 90 km/h. Convert this speed to m/s. Then work out how far it travels in 12 s at that speed.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 90 ÷ 3.6 = 25 m/s. Step 2: Distance = speed × time = 25 × 12 = 300 m. A good answer shows both steps and both units.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A 60 kg astronaut weighs how much on the Moon? (g on the Moon = 1.62 m/s².) Does their mass change? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Weight = mass × g = 60 × 1.62 = 97.2 N. Step 2: Their mass stays 60 kg — mass is how much stuff there is, and that does not change. Step 3: Only the weight changes, because gravity is weaker on the Moon.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “SI unit” mean?",
      "choices": [
        "A unit of the metric system, such as the metre, kilogram, or second.",
        "A unit built from base units, such as the newton (N = kg·m/s²).",
        "The SI unit of force; 1 N accelerates 1 kg at 1 m/s².",
        "The SI unit of energy and work; 1 J = 1 N·m."
      ],
      "answer": 0,
      "explanation": "Correct: (a). SI unit means: A unit of the metric system, such as the metre, kilogram, or second.. (b) is the definition of Derived unit, not of SI unit. (c) is the definition of Newton (N), not of SI unit. (d) is the definition of Joule (J), not of SI unit."
    },
    {
      "q": "What does the term “Derived unit” mean?",
      "choices": [
        "The SI unit of energy and work; 1 J = 1 N·m.",
        "A unit built from base units, such as the newton (N = kg·m/s²).",
        "The SI unit of power; 1 W = 1 J/s.",
        "Checking a calculation by treating units like numbers, to make sure the answer comes out in the right unit."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Derived unit means: A unit built from base units, such as the newton (N = kg·m/s²).. (a) is the definition of Joule (J), not of Derived unit. (c) is the definition of Watt (W), not of Derived unit. (d) is the definition of Dimensional analysis, not of Derived unit."
    },
    {
      "q": "What does the term “Joule (J)” mean?",
      "choices": [
        "Checking a calculation by treating units like numbers, to make sure the answer comes out in the right unit.",
        "A number used to change one unit into another, such as 25.4 mm per inch.",
        "The SI unit of energy and work; 1 J = 1 N·m.",
        "How much matter something contains, measured in kilograms; it does not change with location."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Joule (J) means: The SI unit of energy and work; 1 J = 1 N·m.. (a) is the definition of Dimensional analysis, not of Joule (J). (b) is the definition of Conversion factor, not of Joule (J). (d) is the definition of Mass, not of Joule (J)."
    },
    {
      "q": "What does the term “Dimensional analysis” mean?",
      "choices": [
        "How much matter something contains, measured in kilograms; it does not change with location.",
        "The force of gravity on a mass, in newtons; weight = mass × g.",
        "Mass divided by volume, such as 2.7 g/cm³ for aluminium.",
        "Checking a calculation by treating units like numbers, to make sure the answer comes out in the right unit."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Dimensional analysis means: Checking a calculation by treating units like numbers, to make sure the answer comes out in the right unit.. (a) is the definition of Mass, not of Dimensional analysis. (b) is the definition of Weight, not of Dimensional analysis. (c) is the definition of Density, not of Dimensional analysis."
    },
    {
      "q": "A car travels at 72 km/h. What is its speed in m/s?",
      "choices": [
        "10 m/s",
        "20 m/s",
        "26 m/s",
        "72 m/s"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 72 ÷ 3.6 = 20 m/s. (a) divides by 7.2. (c) is 72 ÷ 2.77. (d) forgets to convert."
    },
    {
      "q": "How many millimetres are in 3 inches? (1 in = 25.4 mm.)",
      "choices": [
        "25.4 mm",
        "50.8 mm",
        "76.2 mm",
        "254 mm"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 3 × 25.4 = 76.2 mm. (a) is 1 inch. (b) is 2 inches. (d) is 10 inches."
    },
    {
      "q": "A 70 kg person stands on Earth (g = 9.81 m/s²). What is their weight?",
      "choices": [
        "70 N",
        "343 N",
        "687 N",
        "9.81 N"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 70 × 9.81 = 686.7 N, about 687 N. (a) is the mass, not the weight. (b) is 35 × 9.81. (d) is g alone."
    },
    {
      "q": "An aluminium block has a mass of 270 g and a volume of 100 cm³. What is its density?",
      "choices": [
        "0.27 g/cm³",
        "2.7 g/cm³",
        "27 g/cm³",
        "270 g/cm³"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Density = 270 ÷ 100 = 2.7 g/cm³. (a) divides by 1,000. (c) multiplies by 10. (d) forgets to divide by the volume."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Units, Conversions & Dimensional Analysis: Quick Reference</h3>\n<p><strong>Core idea:</strong> Name the SI base and derived units engineers use.</p>\n<p><strong>Key terms:</strong> SI unit · Base unit · Derived unit · Newton (N) · Joule (J) · Watt (W) · Dimensional analysis · Conversion factor.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Name the SI base and derived units engineers use.</li>\n<li>Convert between mm, cm, m, and km.</li>\n<li>Convert between inches, feet, and millimetres.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module’s main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
