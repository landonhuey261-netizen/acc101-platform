// egr107 - Module 10: Belts and Chains: Flexible Power Transmission
module.exports = {
  "number": 10,
  "slug": "belts-chains-drives",
  "title": "Belts and Chains: Flexible Power Transmission",
  "estTime": "3–4 hours",
  "objectives": [
    "Calculate belt speed and pulley speed from diameters and rpm.",
    "Explain belt slip and creep and how tensioning prevents them.",
    "Compare flat, V-belt, timing, and chain drives and pick the right one.",
    "Calculate chain speed and sprocket ratio from tooth counts.",
    "List the maintenance checks for a belt or chain drive."
  ],
  "sections": [
    {
      "heading": "Why Use a Belt or Chain?",
      "html": "<p><p>Belts and chains carry power between shafts that are too far apart for gears, and they do it quietly and cheaply. A belt drive also absorbs shock and can slip if the machine jams, which protects the motor and gearbox from damage. The trade-off is that belts stretch, wear, and need tensioning, while chains need lubrication and are noisier.</p></p>\n<p><p>The basic rule is simple: the belt (or chain) speed is the same on both pulleys, so the speeds are in inverse proportion to the diameters. A driver pulley of 100 mm at 1,440 rpm drives a 300 mm pulley at 1,440 × 100 ÷ 300 = 480 rpm. Torque rises by the same factor of 3 (minus losses), just like gears.</p></p>\n"
    },
    {
      "heading": "Belt Speed and Slip",
      "html": "<p><p>Belt speed is v = πDN ÷ 60, with D in metres and N in rpm. A 200 mm pulley at 600 rpm gives v = π × 0.2 × 600 ÷ 60 = 6.28 m/s. Both pulleys share the same belt speed, which is why the speed ratio is the inverse of the diameter ratio. Check the belt speed against the maker's limit — most V-belts are happiest below about 25 m/s.</p></p>\n<p><p>Slip is when the belt moves slower than the pulley surface, and creep is the tiny stretch difference between the tight and slack sides. Both waste power and make the output speed uncertain. The cure is correct tension: too loose and it slips, too tight and it overloads the bearings. A timing (toothed) belt does not slip at all, which is why engines use one to time the camshaft.</p></p>\n"
    },
    {
      "heading": "Belt Types and Chain Drives",
      "html": "<p><p>Flat belts are simple and quiet but slip easily. V-belts wedge into a groove, grip harder, and are the workshop standard for motors and fans. Timing belts have teeth that mesh with the pulley grooves, giving exact timing with no slip. Chains use sprockets with teeth: they do not slip, carry high loads, and work in dirty conditions, but they stretch over time and need oil.</p></p>\n<p><p>Chain ratio works like gears: ratio = driven teeth ÷ driver teeth. A 15-tooth driver sprocket and a 45-tooth driven sprocket give a 3:1 reduction. Chains are the right choice for a motorcycle final drive or a conveyor in a dirty shop; belts are the right choice for a quiet fan drive in a clean room.</p></p>\n"
    },
    {
      "heading": "Maintenance That Prevents Breakdowns",
      "html": "<p><p>Belt maintenance is mostly tension and alignment: check tension with the maker's deflection test, check that the pulleys are in line (a misaligned belt wears one edge and can jump off), and look for cracks, glazing, or missing chunks. Replace a V-belt before it snaps — a snapped belt on a production line costs far more than the belt.</p></p>\n<p><p>Chain maintenance is mostly lubrication and stretch: oil the chain regularly, measure its stretch over a set number of links, and replace it before it starts wearing the sprocket teeth into hooks. A worn chain on a worn sprocket is a breakdown waiting for the worst possible moment. Keep guards on both belts and chains — a caught sleeve or glove is a serious injury.</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>Belt speed is the same on both pulleys; speed ratio is the inverse of the diameter ratio.</li><li>Belt speed v = πDN ÷ 60.</li><li>Slip wastes power; correct tension and timing belts prevent it.</li><li>Chains do not slip but need oil and stretch checks.</li><li>Alignment and tension are the two maintenance checks that matter most.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Tensioning a belt by feel alone. Use the maker's deflection figure — too tight kills bearings, too loose slips.</p><p><strong>Common mistake:</strong> Treating belt ratio like gear ratio but using diameters the wrong way round. Speed is inverse to diameter.</p><p><strong>Ready check:</strong> If you can size a belt reduction from 1,440 rpm to 480 rpm, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Belt drive",
      "def": "Power carried between pulleys by a flexible belt."
    },
    {
      "term": "Chain drive",
      "def": "Power carried between sprockets by a chain."
    },
    {
      "term": "Pulley",
      "def": "A wheel with a groove or flat rim that a belt runs on."
    },
    {
      "term": "Sprocket",
      "def": "A toothed wheel that a chain runs on."
    },
    {
      "term": "Belt speed",
      "def": "The speed of the belt itself: v = πDN ÷ 60."
    },
    {
      "term": "Slip",
      "def": "When a belt moves slower than the pulley surface, losing speed and power."
    },
    {
      "term": "Creep",
      "def": "The small stretch difference between the tight and slack sides of a belt."
    },
    {
      "term": "V-belt",
      "def": "A belt with a V-shaped cross-section that wedges into a pulley groove for grip."
    },
    {
      "term": "Timing belt",
      "def": "A toothed belt that meshes with pulley grooves and cannot slip."
    },
    {
      "term": "Tension",
      "def": "The tightness of a belt or chain; it must be set to the maker's figure."
    },
    {
      "term": "Alignment",
      "def": "Pulleys or sprockets sitting in the same plane so the belt or chain runs true."
    },
    {
      "term": "Chain stretch",
      "def": "The lengthening of a chain as its pins and bushes wear."
    },
    {
      "term": "Guard",
      "def": "A cover over a belt or chain drive that keeps hands and clothing out."
    },
    {
      "term": "Driver pulley",
      "def": "The pulley that supplies the power."
    },
    {
      "term": "Driven pulley",
      "def": "The pulley that receives the power."
    }
  ],
  "video": {
    "title": "E-Trike Gear Ratios for Beginners — How 7 Speeds + Pedal Assist Work",
    "embedUrl": "https://www.youtube.com/embed/HctFPIHSyfI",
    "note": "Gear ratios and chain drives explained on a real machine — how chainring and cog sizes trade speed for effort.",
    "more": [
      {
        "title": "DON'T SUBSCRIBE | Manual Transmission, How it works?",
        "url": "https://www.youtube.com/watch?v=wCu9W9xNwtI"
      },
      {
        "title": "Simple Machines – Gears",
        "url": "https://www.youtube.com/watch?v=5hKTvVG6eqA"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 100 mm driver pulley at 1,440 rpm drives a 300 mm pulley. Find the output speed.</p>",
      "solution": "<p><strong>Answer:</strong> Output = 1,440 × 100 ÷ 300 = 480 rpm.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A 200 mm pulley spins at 600 rpm. What is the belt speed in m/s?</p>",
      "solution": "<p><strong>Answer:</strong> v = π × 0.2 × 600 ÷ 60 = 6.28 m/s.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A chain drive has a 15-tooth driver and a 45-tooth driven sprocket. What is the ratio and the output speed from 900 rpm?</p>",
      "solution": "<p><strong>Answer:</strong> Ratio = 45 ÷ 15 = 3. Output = 900 ÷ 3 = 300 rpm.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A belt drive must reduce 1,800 rpm to 600 rpm. The driver pulley is 80 mm. What diameter should the driven pulley be?</p>",
      "solution": "<p><strong>Answer:</strong> Ratio = 3, so driven diameter = 80 × 3 = 240 mm.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Explain the difference between slip and creep in a belt drive.</p>",
      "solution": "<p><strong>Answer:</strong> Slip is the belt sliding on the pulley and losing speed; creep is the tiny stretch difference between the tight side and the slack side.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A V-belt is cracked and glazed. What should you do, and why not wait for it to snap?</p>",
      "solution": "<p><strong>Answer:</strong> Replace it now: a snapped belt stops the machine without warning, and a worn belt slips and wastes power.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A driver pulley is 100 mm at 1,200 rpm; the driven pulley is 400 mm. Output speed is:",
      "choices": [
        "300 rpm",
        "4,800 rpm",
        "1,200 rpm",
        "400 rpm"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 1,200 × 100 ÷ 400 = 300 rpm. (b) multiplies instead of dividing. (c) is the input speed. (d) is the driven diameter."
    },
    {
      "q": "Belt speed v = πDN ÷ 60 uses D in:",
      "choices": [
        "Millimetres",
        "Metres",
        "Inches",
        "Revolutions"
      ],
      "answer": 1,
      "explanation": "Correct: (b). D must be in metres for v in m/s. (a) millimetres would give mm/s. (c) inches would give in/s. (d) revolutions is not a length."
    },
    {
      "q": "Which belt type cannot slip?",
      "choices": [
        "Flat belt",
        "V-belt",
        "Timing belt",
        "Round belt"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Its teeth mesh with the pulley grooves. (a) and (b) rely on friction and can slip. (d) also relies on friction."
    },
    {
      "q": "A chain drive's ratio is found from:",
      "choices": [
        "Pulley diameters",
        "Sprocket tooth counts",
        "Belt length",
        "Chain length"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Ratio = driven teeth ÷ driver teeth. (a) is for belt drives. (c) and (d) do not set the ratio."
    },
    {
      "q": "A belt that is too loose will:",
      "choices": [
        "Overload the bearings",
        "Slip and lose speed",
        "Run quieter",
        "Last longer"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Loose belts slip and waste power. (a) is caused by a belt that is too tight. (c) slipping belts often squeal. (d) slipping wears belts faster."
    },
    {
      "q": "Why do chain drives need lubrication?",
      "choices": [
        "To stop the chain stretching",
        "To reduce wear on pins and bushes",
        "To make the chain quieter only",
        "To increase the ratio"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Oil protects the pins and bushes from wear. (a) lubrication slows wear but does not stop stretch. (c) noise is a side benefit, not the reason. (d) lubrication does not change the ratio."
    },
    {
      "q": "A 15-tooth driver and a 60-tooth driven sprocket give a ratio of:",
      "choices": [
        "0.25",
        "4",
        "75",
        "45"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 60 ÷ 15 = 4. (a) divides the wrong way. (c) adds the teeth. (d) subtracts them."
    },
    {
      "q": "The main safety rule for belt and chain drives is:",
      "choices": [
        "Keep guards fitted",
        "Run them as fast as possible",
        "Oil them while running",
        "Remove the guard for inspection while running"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Guards keep hands and clothing out of moving drives. (b) over-speeding is dangerous. (c) and (d) put hands near moving parts."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Belts and Chains: Flexible Power Transmission: Quick Reference</h3>\n<p><strong>Core idea:</strong> Calculate belt speed and pulley speed from diameters and rpm.</p>\n<p><strong>Key terms:</strong> Belt drive · Chain drive · Pulley · Sprocket · Belt speed · Slip · Creep · V-belt.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Calculate belt speed and pulley speed from diameters and rpm.</li>\n<li>Explain belt slip and creep and how tensioning prevents them.</li>\n<li>Compare flat, V-belt, timing, and chain drives and pick the right one.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
