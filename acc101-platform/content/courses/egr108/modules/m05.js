// egr108 - Module 5: Heat Treatment: Annealing, Quenching, and Tempering
module.exports = {
  "number": 5,
  "slug": "heat-treatment-steel",
  "title": "Heat Treatment: Annealing, Quenching, and Tempering",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what heat treatment does: change properties without changing shape or composition.",
    "Describe annealing, normalising, quenching, and tempering and say when each is used.",
    "Explain why quenched steel is hard but brittle and why tempering follows quenching.",
    "Read a simple TTT idea: faster cooling gives harder structures.",
    "List the safety rules for hot metal, quench oil, and furnaces."
  ],
  "sections": [
    {
      "heading": "What Heat Treatment Is",
      "html": "<p><p>Heat treatment changes a metal's properties by heating it to a set temperature, holding it there, and cooling it at a controlled rate — without changing its shape or its composition. The same steel can be soft for machining, then hard for service, just by choosing the right heating and cooling cycle. It is one of the cheapest ways to get more performance from a part you already have.</p></p>\n<p><p>The science is the iron–carbon diagram from Module 2. Heat steel above about 727 °C and it becomes austenite, which can dissolve carbon. How fast you cool from there decides what the austenite turns into: slow cooling gives soft pearlite, fast cooling gives hard martensite. Control the cooling and you control the properties.</p></p>\n"
    },
    {
      "heading": "Softening: Annealing and Normalising",
      "html": "<p><p>Annealing heats steel above its critical temperature and cools it very slowly in the furnace. The result is soft, ductile steel with coarse pearlite — easy to machine and form. Use it before heavy machining or after cold working that has made a part too hard to bend. Full annealing of a medium-carbon steel typically means heating to 830–900 °C and cooling at 20–50 °C per hour.</p></p>\n<p><p>Normalising is similar but the steel cools in still air instead of in the furnace. It is faster, and the result is a little stronger and harder than annealed steel, with a finer grain. Normalising is the usual treatment after forging: it refines the grain and evens out the properties before machining. Stress-relief annealing, at 550–650 °C, removes internal stresses from welding or machining without changing the structure much.</p></p>\n"
    },
    {
      "heading": "Hardening: Quenching",
      "html": "<p><p>Quenching heats steel into austenite (800–900 °C for a medium-carbon steel) and then cools it fast in water, oil, or polymer solution. The carbon gets trapped in the crystal and forms martensite — very hard (HRC 55–65 for a 0.4–0.8% carbon steel) but brittle. A quenched chisel will cut, but it can snap if it is dropped or hit sideways.</p></p>\n<p><p>The quench medium sets the cooling speed: water is fastest and riskiest (cracking and distortion), oil is slower and gentler, and polymer solutions sit in between. Thick parts cool slower in the middle than at the surface, so a big part may be hard outside and softer inside. Always check hardenability — the steel's ability to harden through its thickness — before choosing a quench.</p></p>\n"
    },
    {
      "heading": "Tempering: The Essential Follow-Up",
      "html": "<p><p>Tempering always follows quenching. The hardened steel is reheated to a lower temperature (150–700 °C), held, and cooled. This lets some carbon move, turning brittle martensite into tempered martensite: a little less hard, but much tougher. Low tempering (150–200 °C) keeps HRC 58–64 for cutting tools; medium tempering (350–450 °C) gives HRC 40–52 for springs; high tempering (550–650 °C) gives HRC 28–40 for gears and shafts.</p></p>\n<p><p>Never delay tempering after a quench — a quenched part left overnight can crack on its own from internal stress. And never skip it: untempered martensite is a broken part waiting to happen. The full sequence is: normalise, machine, harden (quench), temper immediately, then grind to final size if needed. Write the temperatures and times on the job card and follow them exactly.</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>Heat treatment changes properties, not shape or composition.</li><li>Annealing softens (slow furnace cool); normalising refines grain (air cool).</li><li>Quenching makes hard, brittle martensite.</li><li>Tempering always follows quenching and trades a little hardness for toughness.</li><li>Temper immediately — never leave a quenched part overnight.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Quenching and then using the part without tempering. It will be hard, but it can shatter without warning.</p><p><strong>Common mistake:</strong> Quenching in water when oil was specified. Faster is not better — it cracks and distorts the part.</p><p><strong>Ready check:</strong> If you can name the treatment that softens steel for machining and the one that must follow quenching, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Heat treatment",
      "def": "Changing a metal's properties by controlled heating and cooling."
    },
    {
      "term": "Annealing",
      "def": "Heating steel and cooling it very slowly in the furnace, to soften it."
    },
    {
      "term": "Normalising",
      "def": "Heating steel and cooling it in still air, to refine the grain."
    },
    {
      "term": "Quenching",
      "def": "Cooling heated steel fast in water, oil, or polymer, to harden it."
    },
    {
      "term": "Tempering",
      "def": "Reheating quenched steel to a lower temperature to restore toughness."
    },
    {
      "term": "Martensite",
      "def": "The hard, brittle structure formed by quenching steel."
    },
    {
      "term": "Pearlite",
      "def": "Layers of ferrite and cementite formed by slow cooling."
    },
    {
      "term": "Austenite",
      "def": "The high-temperature form of iron that dissolves carbon."
    },
    {
      "term": "Hardenability",
      "def": "A steel's ability to harden through its thickness."
    },
    {
      "term": "Hardness (HRC)",
      "def": "Rockwell C hardness, a measure of resistance to indentation."
    },
    {
      "term": "Stress relief",
      "def": "A low-temperature heat treatment that removes internal stresses."
    },
    {
      "term": "Quench medium",
      "def": "The liquid a hot part is cooled in: water, oil, or polymer solution."
    },
    {
      "term": "Critical temperature",
      "def": "The temperature at which iron changes to austenite, about 727 °C."
    },
    {
      "term": "Case hardening",
      "def": "Hardening only the surface of a part, leaving the core tough."
    }
  ],
  "video": {
    "title": "BBC Technical Studies Heat Treatment",
    "embedUrl": "https://www.youtube.com/embed/diDweeu-zR0",
    "note": "A classic BBC film: a chisel is hardened, annealed, and tempered, showing exactly what each treatment does to the same steel.",
    "more": [
      {
        "title": "Heat Treatment - Types (Including Annealing), Process and Structures",
        "url": "https://www.youtube.com/watch?v=skQRLfU3plM"
      },
      {
        "title": "Heat Treatment -The Science of Forging (feat. Alec Steele)",
        "url": "https://www.youtube.com/watch?v=6jQ4y0LK1kY"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A steel bar is too hard to machine. Which heat treatment would you use, and what does it do?</p>",
      "solution": "<p><strong>Answer:</strong> Annealing: heat above the critical temperature and cool slowly in the furnace, giving soft, ductile steel.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A gear is quenched to HRC 60. Why must it be tempered before use?</p>",
      "solution": "<p><strong>Answer:</strong> Quenched martensite is hard but brittle; tempering restores toughness so the gear does not shatter in service.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A cutting tool needs HRC 58–64. Which tempering range would you choose?</p>",
      "solution": "<p><strong>Answer:</strong> Low tempering, 150–200 °C.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Explain the difference between annealing and normalising.</p>",
      "solution": "<p><strong>Answer:</strong> Annealing cools slowly in the furnace (softest result); normalising cools in still air (faster, a little stronger and harder).</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A quenched part is left overnight before tempering. What is the risk?</p>",
      "solution": "<p><strong>Answer:</strong> It can crack on its own from internal stress. Temper immediately after quenching.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why is water a riskier quench medium than oil?</p>",
      "solution": "<p><strong>Answer:</strong> Water cools faster, which gives more hardness but also more distortion and a higher risk of cracking.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Heat treatment changes a metal's:",
      "choices": [
        "Shape",
        "Composition",
        "Properties, by heating and cooling",
        "Colour only"
      ],
      "answer": 2,
      "explanation": "Correct: (c). It changes structure and therefore properties. (a) shape is changed by forming or machining. (b) composition is set when the metal is made. (d) colour change is incidental."
    },
    {
      "q": "Annealing cools steel:",
      "choices": [
        "In water",
        "In oil",
        "Very slowly in the furnace",
        "In liquid nitrogen"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Slow furnace cooling gives soft steel. (a) and (b) are quenching. (d) is not a normal annealing medium."
    },
    {
      "q": "Quenching produces which structure?",
      "choices": [
        "Ferrite",
        "Pearlite",
        "Martensite",
        "Austenite"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Fast cooling traps carbon as martensite. (a) is the soft room-temperature phase. (b) comes from slow cooling. (d) is the high-temperature phase before quenching."
    },
    {
      "q": "Why must tempering follow quenching?",
      "choices": [
        "To make the steel harder",
        "To restore toughness so the hard steel does not shatter",
        "To change the shape",
        "To remove the carbon"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Tempering trades a little hardness for much-needed toughness. (a) tempering reduces hardness. (c) shape is unchanged. (d) carbon stays in the steel."
    },
    {
      "q": "Low tempering (150–200 °C) is used for:",
      "choices": [
        "Gears and shafts",
        "Springs",
        "Cutting tools and bearings",
        "Softening for machining"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Low tempering keeps hardness at HRC 58–64. (a) needs high tempering. (b) needs medium tempering. (d) is annealing."
    },
    {
      "q": "Normalising cools steel in:",
      "choices": [
        "The furnace",
        "Still air",
        "Water",
        "Oil"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Air cooling is faster than furnace cooling. (a) is annealing. (c) and (d) are quenching."
    },
    {
      "q": "A quenched part left overnight before tempering may:",
      "choices": [
        "Get softer",
        "Crack from internal stress",
        "Rust away",
        "Grow larger"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Internal stresses can crack it without any load. (a) it stays hard. (c) rust takes longer. (d) size does not grow."
    },
    {
      "q": "Which quench medium cools fastest?",
      "choices": [
        "Oil",
        "Polymer solution",
        "Water",
        "Air"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Water is the fastest common quench medium. (a) oil is slower and gentler. (b) polymer sits between water and oil. (d) air is the slowest."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Heat Treatment: Annealing, Quenching, and Tempering: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what heat treatment does: change properties without changing shape or composition.</p>\n<p><strong>Key terms:</strong> Heat treatment · Annealing · Normalising · Quenching · Tempering · Martensite · Pearlite · Austenite.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what heat treatment does: change properties without changing shape or composition.</li>\n<li>Describe annealing, normalising, quenching, and tempering and say when each is used.</li>\n<li>Explain why quenched steel is hard but brittle and why tempering follows quenching.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
