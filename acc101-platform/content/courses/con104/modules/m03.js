// con104 - Module 3: Leveling: Elevations, Benchmarks & Grade Stakes
module.exports = {
  "number": 3,
  "slug": "leveling-elevations-benchmarks-grade-stakes",
  "title": "Leveling: Elevations, Benchmarks & Grade Stakes",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what an elevation is and how a benchmark anchors all heights on a job.",
    "Compute the height of instrument (HI) from a backsight on a known point.",
    "Find the elevation of any point from a foresight reading and the HI.",
    "Set grade stakes that tell the crew how much to cut or fill.",
    "Explain how to check leveling work and catch a mistake before it costs money."
  ],
  "sections": [
    {
      "heading": "Elevations & the Benchmark",
      "html": "<p>An elevation is a height above a reference point called the datum. On most jobs the datum is sea level, so an elevation like 812.50 feet means that point sits 812.50 feet above sea level. All the heights on a site plan — footing bottoms, finished floors, driveway edges — are elevations, and they all hang from one starting point: the benchmark.</p>\n<p>A benchmark is a point whose elevation is known and trusted — often a brass disk set in concrete, a nail in a tree, or a mark on an existing foundation, written on the plans as “BM” with its elevation. Every leveling run on the job starts at the benchmark. If the benchmark is wrong, everything built from it is wrong by the same amount, which is why the first job each morning can be re-checking the benchmark.</p>\n<p>Think of the benchmark as the zero on a ruler that the whole job shares. The surveyor gives you the number; your job is to carry that number, step by step, to every stake and form on the site without losing or adding anything along the way. That carrying is called leveling, and it is the most-used math in site work.</p>"
    },
    {
      "heading": "Height of Instrument & the Backsight",
      "html": "<p>Leveling starts by setting the instrument up, leveling it, and taking a reading on the rod held at the benchmark. That first reading is called the backsight, and adding it to the benchmark’s elevation gives the height of instrument — the elevation of the level’s line of sight. The formula is short: HI = benchmark elevation + backsight. If the benchmark is 100.00 feet and the rod reads 4.20 feet, the HI is 104.20 feet.</p>\n<p>The HI is the key number for the whole setup. As long as the instrument does not move, every point you read is simply the HI minus the rod reading at that point. That is the second formula: elevation = HI − foresight. A foresight of 6.80 feet means the point is at 104.20 − 6.80 = 97.40 feet. Two readings and one subtraction — that is all leveling is, repeated carefully.</p>\n<p>The catch is that the HI only lives while the instrument stays put. Bump the tripod, move to a new setup, or let the sun heat the instrument, and the HI changes. Every new setup needs a fresh backsight on a known point. Crews write the HI on the stake or in the field book at each setup so nobody has to guess it later.</p>"
    },
    {
      "heading": "Foresights, Turning Points & Carrying Elevation",
      "html": "<p>When the point you need is too far away or too low to read from one setup, the crew uses a turning point — a solid, stable spot, like a stake with a nail or a flat rock, where the rod is read, then the instrument is moved past it, and the turning point is read again from the new setup. The turning point’s elevation is carried forward like a baton in a relay, one setup at a time.</p>\n<p>The rule for turning points is that they must not move between the two readings. A rod held on soft dirt that sinks, or a stake that gets stepped on, breaks the chain and every elevation after it is wrong. Good crews pick hard points, mark them, and protect them until the run is done.</p>\n<p>At the end of a leveling run, the crew closes the loop: they level back to the starting benchmark and check that they get the same elevation they started with. If the closing reading is off by more than a small amount — a hundredth or two of a foot on building work — something moved or was misread, and the run is done again. Closing the loop is what turns a guess into a measurement.</p>"
    },
    {
      "heading": "Grade Stakes: Cut & Fill",
      "html": "<p>A grade stake is a wooden stake with a mark — and usually a written number — that tells the machine operator or the crew how much dirt to cut away or add at that spot. The stake is set so its mark is at a known elevation, often the finished grade plus a fixed offset, and the number on it says “cut 1.2 feet” or “fill 0.8 feet.” Cut means remove dirt down to grade; fill means add dirt up to grade.</p>\n<p>Reading a grade stake is simple once you know the code: the top of the stake, a ribbon, or a painted line marks the reference, and the written cut or fill is measured from that reference. Operators work to the stakes, checking with a grade rod and a laser as they go, because dirt moved wrong is dirt moved twice — and the second move costs more than the first.</p>\n<p>Stakes are set in lines along the work — along a footing trench, across a building pad, down the center of a driveway — so the operator always has a stake in sight. They are set back from the actual digging so machines do not run them over, and they are checked after rain or a weekend, because stakes heave, lean, and get knocked. A stake you cannot trust is worse than no stake.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> Elevations hang from the benchmark. HI = benchmark + backsight; point elevation = HI − foresight. Turning points carry elevation across setups, and closing the loop back to the benchmark proves the run. Grade stakes tell the crew cut or fill at each spot.</p>\n<p><strong>Common mistake:</strong> Reading the rod upside down or misreading tenths as hundredths — a 0.10-foot error is more than an inch, and it shows up in the footing.</p>\n<p><strong>Common mistake:</strong> Using a turning point that moved between readings, or forgetting to close the loop. Both mistakes hide until the concrete is poured.</p>\n<p><strong>Ready-to-Work link:</strong> If you can compute an HI, find a point’s elevation, and read a cut-or-fill stake, you have this module. Module 4 uses the same careful measuring to make a layout square.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Elevation",
      "def": "A height above a datum, usually sea level, given in feet."
    },
    {
      "term": "Benchmark (BM)",
      "def": "A point of known elevation that anchors all leveling on a job."
    },
    {
      "term": "Datum",
      "def": "The reference surface, usually mean sea level, that elevations are measured from."
    },
    {
      "term": "Backsight (BS)",
      "def": "The first rod reading in a setup, taken on a point of known elevation."
    },
    {
      "term": "Height of instrument (HI)",
      "def": "The elevation of the level’s line of sight: benchmark elevation + backsight."
    },
    {
      "term": "Foresight (FS)",
      "def": "A rod reading on a point whose elevation you want to find."
    },
    {
      "term": "Turning point (TP)",
      "def": "A stable point used to carry elevation from one instrument setup to the next."
    },
    {
      "term": "Closing the loop",
      "def": "Leveling back to the starting benchmark to check that the run is correct."
    },
    {
      "term": "Grade stake",
      "def": "A stake marked with the cut or fill needed to reach finished grade at that spot."
    },
    {
      "term": "Cut",
      "def": "Dirt to be removed to reach grade."
    },
    {
      "term": "Fill",
      "def": "Dirt to be added to reach grade."
    },
    {
      "term": "Field book",
      "def": "The notebook where survey readings, HI values, and stake notes are recorded."
    },
    {
      "term": "Rod reading",
      "def": "The number read on the grade rod where the level’s line of sight crosses it."
    },
    {
      "term": "Offset stake",
      "def": "A stake set back from the work so machines do not destroy it, holding the line or grade."
    },
    {
      "term": "Hub",
      "def": "A short stake driven flush with the ground, often with a nail, marking an exact point."
    }
  ],
  "video": {
    "title": "How to Use a Laser Level for Beginners",
    "embedUrl": "https://www.youtube.com/embed/qsmbw_9wiDQ",
    "note": "A rotary laser level, a grade rod, and a receiver: watch how the beeps tell you when the rod is level with the beam, and how the same reading gives you cut or fill. This is the leveling of this module, done with light instead of a telescope.",
    "more": [
      {
        "title": "Building a Shouse: Column Layout + Piers",
        "url": "https://www.youtube.com/watch?v=ocR7EXq9pcM"
      },
      {
        "title": "What Is Site Preparation?",
        "url": "https://www.youtube.com/watch?v=gTWKeDJ5_AE"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A benchmark is 100.00 feet. The backsight reads 4.20 feet. What is the HI?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: HI = benchmark + backsight. Step 2: 100.00 + 4.20 = 104.20 feet.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> With an HI of 104.20 feet, a foresight at a footing corner reads 6.80 feet. What is the elevation of the footing corner?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Elevation = HI − foresight. Step 2: 104.20 − 6.80 = 97.40 feet.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A point has an elevation of 99.10 feet and the finished grade there is 98.50 feet. Is this a cut or a fill, and by how much?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The ground is higher than the finished grade, so it is a cut. Step 2: 99.10 − 98.50 = 0.60 feet of cut.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A leveling run starts at a benchmark of 100.00 feet and closes back at 100.03 feet. What is the closing error, and should the crew accept the run?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The closing error is 100.03 − 100.00 = 0.03 feet. Step 2: That is about 3/8 of an inch — small, but on building layout the crew should note it and, if the job needs tight grades, re-run the loop to find where the error crept in.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Two points are 85 feet apart. Point A is at 97.40 feet and point B is at 99.10 feet. What is the slope between them as a percent?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Rise = 99.10 − 97.40 = 1.70 feet. Step 2: Slope = 1.70 ÷ 85 = 0.02, or 2%.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain why a turning point must be a hard, stable spot — and what happens if it sinks between the two readings.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The turning point carries the elevation from one setup to the next, so its height must be identical for both readings. Step 2: If it sinks, the second setup starts from a lower number, and every elevation after it is wrong by the amount it sank — an error that closing the loop will catch, but only after the work is done.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A benchmark elevation is 100.00 feet and the backsight reads 4.20 feet. The HI is:",
      "choices": [
        "95.80 feet",
        "100.00 feet",
        "104.20 feet",
        "108.40 feet"
      ],
      "answer": 2,
      "explanation": "Correct: (c). HI = 100.00 + 4.20 = 104.20. (a) Subtracts instead of adding. (b) Forgets the backsight. (d) Adds the backsight twice."
    },
    {
      "q": "With an HI of 104.20 feet, a foresight of 5.10 feet gives an elevation of:",
      "choices": [
        "99.10 feet",
        "109.30 feet",
        "104.20 feet",
        "98.10 feet"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 104.20 − 5.10 = 99.10. (b) Adds instead of subtracting. (c) Forgets the foresight. (d) Uses the wrong subtraction."
    },
    {
      "q": "A larger foresight reading means the point is:",
      "choices": [
        "Higher",
        "Lower",
        "At the same height as the instrument",
        "At the benchmark"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The rod reading is measured down from the level line of sight, so a bigger reading means lower ground. (a) Reverses the relationship. (c) A zero reading would mean that. (d) The benchmark is a specific point, not a reading size."
    },
    {
      "q": "A turning point is used to:",
      "choices": [
        "Mark the property line",
        "Carry elevation from one instrument setup to the next",
        "Measure the slope of a roof",
        "Hold the string line"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It is the relay point between setups. (a) Property corners are marked by the surveyor. (c) Roof slope is not a leveling job. (d) String lines are held by batter boards."
    },
    {
      "q": "Closing the loop means:",
      "choices": [
        "Finishing the job for the day",
        "Leveling back to the starting benchmark to check the run",
        "Tying the string line in a loop",
        "Closing the gate to the site"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The closing reading proves the run — it should match the starting elevation. (a) Closing the loop is a check, not the end of the day. (c) String work is layout, not leveling. (d) That is site security, not surveying."
    },
    {
      "q": "A grade stake marked “FILL 0.8” tells the crew to:",
      "choices": [
        "Remove 0.8 feet of dirt",
        "Add 0.8 feet of dirt to reach grade",
        "Dig 0.8 feet deeper than the footing",
        "Move the stake 0.8 feet"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Fill means add material up to grade. (a) That is a cut. (c) Footing depth is a separate number. (d) The stake stays where it is."
    },
    {
      "q": "The ground at a stake is at 99.10 feet and finished grade is 98.50 feet. The stake should read:",
      "choices": [
        "FILL 0.60",
        "CUT 0.60",
        "FILL 1.60",
        "CUT 1.60"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Ground is higher than grade, so cut 99.10 − 98.50 = 0.60 feet. (a) Fill is the opposite. (c) and (d) use the wrong difference."
    },
    {
      "q": "The most common leveling reading mistake is:",
      "choices": [
        "Forgetting the date",
        "Misreading tenths as hundredths on the rod",
        "Using a wooden stake",
        "Leveling on a cloudy day"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A tenth-of-a-foot error is over an inch and shows up in the work. (a) The date does not affect a reading. (c) Wooden stakes are standard. (d) Clouds do not affect an optical level."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Leveling — Quick Reference</h3>\n<p><strong>Core idea:</strong> All heights hang from the benchmark: HI = benchmark + backsight; elevation = HI − foresight.</p>\n<ul>\n<li>Backsight on a known point gives the HI; foresights give every other point.</li><li>Turning points carry elevation between setups — they must not move.</li><li>Closing the loop back to the benchmark proves the run.</li><li>Grade stakes read CUT or FILL: the dirt to remove or add to reach grade.</li>\n</ul>\n<div class=\"callout\"><strong>Watch out:</strong> Misreading tenths as hundredths is a 0.10-foot error — more than an inch in the footing.</div>\n<p><strong>Self-check:</strong> Compute an HI, find a point’s elevation, and read a cut-or-fill stake from a rod reading.</p>\n"
};
