// egr107 - Module 12: Putting It Together: Designing a Drive Train
module.exports = {
  "number": 12,
  "slug": "drive-train-design",
  "title": "Putting It Together: Designing a Drive Train",
  "estTime": "3–4 hours",
  "objectives": [
    "Work through a full drive-train design: motor, reduction, and output.",
    "Check power, torque, speed, and efficiency at each stage.",
    "Choose between gears, belts, and chains for each stage and justify the choice.",
    "Spot the safety and maintenance points in a finished design.",
    "Explain the whole drive train in plain words to a non-engineer."
  ],
  "sections": [
    {
      "heading": "The Design Job: A Conveyor Drive",
      "html": "<p><p>Here is the job: a conveyor needs 800 W at its head pulley, which must turn at 120 rpm. A motor is available at 1,440 rpm. The total reduction needed is 1,440 ÷ 120 = 12. One gear pair of 12:1 would need a huge driven gear, so split it: a belt first stage of 3:1, then a gearbox of 4:1. The belt absorbs shock and lets the motor sit away from the gearbox; the gearbox gives the precise final reduction.</p></p>\n<p><p>Now check the torque. Output torque at the conveyor is P ÷ ω = 800 ÷ (2π × 120 ÷ 60) = 800 ÷ 12.57 = 63.7 N·m. Working back with efficiencies of 95% for the belt and 95% per gear mesh (two meshes, 0.95² = 0.90), the motor must supply 800 ÷ (0.95 × 0.90) = 936 W. A 1.1 kW motor gives a comfortable margin. Check motor torque too: 936 W at 1,440 rpm (150.8 rad/s) needs 936 ÷ 150.8 = 6.2 N·m — well within a 1.1 kW motor's rating.</p></p>\n"
    },
    {
      "heading": "Choosing Each Stage",
      "html": "<p><p>Stage 1, the belt: a V-belt is right here — quiet, cheap, and it slips if the conveyor jams, protecting the gearbox. Pulley sizes: a 100 mm driver and a 300 mm driven give the 3:1 reduction, and belt speed is π × 0.1 × 1,440 ÷ 60 = 7.54 m/s, well under the 25 m/s limit. Stage 2, the gearbox: helical gears for quiet running at this power, with a 4:1 ratio (say 20 teeth driving 80 teeth).</p></p>\n<p><p>Check the speeds through the train: motor 1,440 rpm → belt output 480 rpm → gearbox output 120 rpm. Check the torques: motor 6.2 N·m → after the belt, 6.2 × 3 × 0.95 = 17.7 N·m → after the gearbox, 17.7 × 4 × 0.90 = 63.7 N·m at the conveyor. Every number ties back to the 800 W the conveyor needs. If any stage does not check out, the design is wrong — do not build it.</p></p>\n"
    },
    {
      "heading": "Bearings, Shafts, and Guards",
      "html": "<p><p>Each shaft needs bearings sized for its loads: the motor shaft carries belt pull (radial), the gearbox shafts carry gear forces (radial plus axial from the helical gears), and the conveyor head shaft carries the belt tension of the conveyor itself. Ball bearings suit the fast motor shaft; tapered roller bearings suit the gearbox output with its axial load. Shafts are sized for torque and for bending from belt pull, with a safety factor.</p></p>\n<p><p>Guards are not optional: the belt drive and every coupling get a fixed guard, and the conveyor gets an emergency stop within reach of the operator. The design also needs a maintenance plan: belt tension checked monthly, gearbox oil checked quarterly, bearings listened to at every inspection. A design that cannot be maintained is a bad design.</p></p>\n"
    },
    {
      "heading": "Presenting Your Design",
      "html": "<p><p>A good design is one you can explain. In plain words: the motor spins fast with little torque; the belt slows it down three times and triples the torque; the gearbox slows it four more times and quadruples the torque again; the conveyor turns slowly with enough torque to move its load. Total reduction 12:1, power in about 936 W, power out 800 W, efficiency about 85%.</p></p>\n<p><p>Write the numbers in a table: stage, ratio, speed in, speed out, torque in, torque out, efficiency. Then list the parts: 1.1 kW motor, V-belt 100/300 mm pulleys, helical gearbox 4:1, couplings, bearings, guards. If a colleague can check your numbers from the table alone, the design is ready to build.</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>Work from the load backwards: speed, torque, power, then the motor.</li><li>Split a big reduction into stages; check every stage.</li><li>Efficiency multiplies through the stages — divide by it when working backwards.</li><li>Size bearings for the real loads, and guard every moving drive.</li><li>If the numbers do not tie out, the design is wrong.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Sizing the motor from output power alone and forgetting efficiency losses — the motor must supply more than the load needs.</p><p><strong>Common mistake:</strong> A single-stage 12:1 gear pair. It works on paper but the driven gear is huge; split the reduction.</p><p><strong>Ready check:</strong> If you can design a two-stage drive from a load requirement and check every number, you have finished this course.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Drive train",
      "def": "The whole chain from motor to load: motor, belts or gears, shafts, and bearings."
    },
    {
      "term": "Reduction",
      "def": "Slowing the speed down (and raising the torque) through gearing or belts."
    },
    {
      "term": "Overall ratio",
      "def": "The product of all the stage ratios in a drive train."
    },
    {
      "term": "Stage",
      "def": "One step of reduction in a drive train, such as one belt drive or one gear pair."
    },
    {
      "term": "Efficiency",
      "def": "Useful power out divided by power in, for one stage or the whole train."
    },
    {
      "term": "Safety factor",
      "def": "Extra capacity built into a design beyond the calculated need."
    },
    {
      "term": "Head pulley",
      "def": "The pulley at the drive end of a conveyor."
    },
    {
      "term": "Guard",
      "def": "A fixed cover over moving parts that keeps people safe."
    },
    {
      "term": "Maintenance plan",
      "def": "The scheduled checks — tension, oil, bearings — that keep a machine running."
    },
    {
      "term": "Torque check",
      "def": "Confirming that each shaft and motor can supply the torque its stage needs."
    },
    {
      "term": "Power balance",
      "def": "Checking that power in, minus losses, equals power out at every stage."
    },
    {
      "term": "Coupling",
      "def": "A part that joins two shafts in a drive train."
    },
    {
      "term": "Helical gearbox",
      "def": "A gearbox using helical gears for quiet, smooth running."
    },
    {
      "term": "V-belt",
      "def": "A belt with a V cross-section, used for the first stage of many drives."
    }
  ],
  "video": {
    "title": "DON'T SUBSCRIBE | Manual Transmission, How it works?",
    "embedUrl": "https://www.youtube.com/embed/wCu9W9xNwtI",
    "note": "A manual transmission as a complete drive train: gears, ratios, and torque working together to match an engine to the road.",
    "more": [
      {
        "title": "Calculating compound gear ratios",
        "url": "https://www.youtube.com/watch?v=I-nWzMYohCY"
      },
      {
        "title": "E-Trike Gear Ratios for Beginners — How 7 Speeds + Pedal Assist Work",
        "url": "https://www.youtube.com/watch?v=HctFPIHSyfI"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A conveyor needs 600 W at 90 rpm. A motor runs at 1,800 rpm. What total reduction is needed?</p>",
      "solution": "<p><strong>Answer:</strong> Reduction = 1,800 ÷ 90 = 20.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Split the 20:1 reduction into two stages and name a suitable drive for each.</p>",
      "solution": "<p><strong>Answer:</strong> Example: belt 4:1 then gearbox 5:1 (4 × 5 = 20). Belt first for shock absorption, gearbox second for the precise final reduction.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> The conveyor output torque is 63.7 N·m at 120 rpm. What power is that?</p>",
      "solution": "<p><strong>Answer:</strong> ω = 12.57 rad/s. P = 63.7 × 12.57 = 801 W, about 800 W.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Overall efficiency is 85% and the load needs 800 W. What motor power is needed?</p>",
      "solution": "<p><strong>Answer:</strong> Motor power = 800 ÷ 0.85 = 941 W, about 0.94 kW — so choose a 1.1 kW motor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A belt stage has 95% efficiency and a gearbox 90%. What is the combined efficiency?</p>",
      "solution": "<p><strong>Answer:</strong> 0.95 × 0.90 = 0.855, or 85.5%.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain the conveyor drive in this module in plain words to a non-engineer.</p>",
      "solution": "<p><strong>Answer:</strong> The motor spins fast with little turning force; the belt and gearbox slow it down in two steps, trading speed for turning force, until the conveyor turns slowly with enough force to move its load.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A load needs 800 W and the drive train is 80% efficient. The motor must supply:",
      "choices": [
        "640 W",
        "800 W",
        "1,000 W",
        "1,600 W"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 800 ÷ 0.80 = 1,000 W. (a) multiplies by efficiency instead of dividing. (b) ignores losses. (d) divides by 0.5."
    },
    {
      "q": "A 12:1 reduction is best split into stages because:",
      "choices": [
        "One pair would need a huge driven gear",
        "It is cheaper to use one pair",
        "It increases power",
        "It removes the need for bearings"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Splitting keeps gear sizes reasonable. (b) one pair is not cheaper once size is counted. (c) power is conserved, not increased. (d) bearings are still needed."
    },
    {
      "q": "Two stages of 95% and 90% efficiency give a combined efficiency of:",
      "choices": [
        "92.5%",
        "85.5%",
        "185%",
        "5%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 0.95 × 0.90 = 0.855. (a) averages instead of multiplying. (c) adds them. (d) subtracts them."
    },
    {
      "q": "Working backwards from the load, the first thing to find is:",
      "choices": [
        "The motor catalogue number",
        "The load's speed, torque, and power",
        "The paint colour",
        "The guard size"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The load's needs set everything else. (a) comes after the numbers are known. (c) is cosmetic. (d) comes after the drive is sized."
    },
    {
      "q": "A V-belt first stage is useful because it:",
      "choices": [
        "Absorbs shock and can slip if the machine jams",
        "Is the most precise drive",
        "Needs no maintenance",
        "Carries the highest torque"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Slip protects the rest of the drive. (b) timing belts and gears are more precise. (c) belts need tension checks. (d) gears and chains carry more torque."
    },
    {
      "q": "Output torque 63.7 N·m at 120 rpm gives about what power?",
      "choices": [
        "800 W",
        "64 W",
        "7,644 W",
        "12.6 W"
      ],
      "answer": 0,
      "explanation": "Correct: (a). ω = 12.57 rad/s, P = 63.7 × 12.57 ≈ 800 W. (b) is the torque alone. (c) multiplies torque by rpm without converting. (d) is ω alone."
    },
    {
      "q": "In a design table, the check that matters most is:",
      "choices": [
        "That power in minus losses equals power out at every stage",
        "That all parts are the same colour",
        "That the motor is the biggest available",
        "That the guard is shiny"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The power balance proves the numbers tie out. (b) and (d) are cosmetic. (c) oversizing wastes money and energy."
    },
    {
      "q": "A fixed guard on a belt drive is there to:",
      "choices": [
        "Keep the belt cool",
        "Keep hands and clothing out of moving parts",
        "Make the machine quieter",
        "Hold the belt in place"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Guards prevent contact injuries. (a) guards do not cool belts. (c) noise is a side effect. (d) tensioners hold the belt, not guards."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Putting It Together: Designing a Drive Train: Quick Reference</h3>\n<p><strong>Core idea:</strong> Work through a full drive-train design: motor, reduction, and output.</p>\n<p><strong>Key terms:</strong> Drive train · Reduction · Overall ratio · Stage · Efficiency · Safety factor · Head pulley · Guard.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Work through a full drive-train design: motor, reduction, and output.</li>\n<li>Check power, torque, speed, and efficiency at each stage.</li>\n<li>Choose between gears, belts, and chains for each stage and justify the choice.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
