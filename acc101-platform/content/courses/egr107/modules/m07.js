// egr107 - Module 7: Linkages and Mechanisms: Four-Bar, Slider-Crank, and More
module.exports = {
  "number": 7,
  "slug": "linkages-mechanisms",
  "title": "Linkages and Mechanisms: Four-Bar, Slider-Crank, and More",
  "estTime": "3–4 hours",
  "objectives": [
    "Name the parts of a four-bar linkage and say what each one does.",
    "Explain Grashof's rule for whether a link can make a full turn.",
    "Describe how a slider-crank turns rotation into straight-line motion.",
    "Compare quick-return, Geneva, and toggle mechanisms and say where each is used.",
    "Spot a mechanism's dead-centre position and explain why it matters."
  ],
  "sections": [
    {
      "heading": "Links, Joints, and Degrees of Freedom",
      "html": "<p><p>A mechanism is a set of rigid links joined by pins or sliders that turns one motion into another. A link is a solid part; a joint is where two links connect and move relative to each other. A pin joint lets links rotate; a slider lets one link slide along another. Most machines are built from a small set of these building blocks.</p></p>\n<p><p>Degrees of freedom say how many independent inputs a mechanism needs. A four-bar linkage has one degree of freedom: turn the crank once and every other link's position is fixed. That is what makes it useful — one motor drives a whole coordinated motion, like a windscreen wiper or a folding chair.</p></p>\n"
    },
    {
      "heading": "The Four-Bar Linkage",
      "html": "<p><p>The four-bar has four links: the ground (fixed), the crank (the input, which turns), the coupler (which connects crank to output), and the rocker or follower (the output). The crank usually makes full turns while the rocker swings back and forth. Change the link lengths and you change the motion completely — a few millimetres can turn a smooth swing into a jam.</p></p>\n<p><p>Grashof's rule tells you whether the shortest link can make a full turn: add the shortest and longest link lengths, and compare with the sum of the other two. If shortest + longest is less than the other two, at least one link can rotate fully. If it is greater, no link can make a full turn and the mechanism only rocks. Check Grashof before building, or the crank may lock up halfway round.</p></p>\n"
    },
    {
      "heading": "Slider-Crank: The Engine's Heart",
      "html": "<p><p>The slider-crank turns rotation into straight-line motion: a crank pin drives a connecting rod, which pushes a piston back and forth in a cylinder. It is the heart of every piston engine and many pumps and compressors. The piston moves fastest near mid-stroke and momentarily stops at top and bottom dead centre, where it changes direction.</p></p>\n<p><p>At dead centre the crank and connecting rod line up, and the piston has zero velocity for an instant. That is also where the force on the piston is highest for a given torque, and where a mechanism can lock if it is driven backwards from the slider. Designers avoid starting a machine exactly at dead centre, or they add a flywheel to carry it through.</p></p>\n"
    },
    {
      "heading": "Quick-Return, Geneva, and Toggle Mechanisms",
      "html": "<p><p>A quick-return mechanism, used in shaping machines, moves slowly on the cutting stroke and fast on the return stroke, so most of the time is spent doing useful work. A Geneva mechanism turns steady rotation into stepping motion — the film projector and the indexing table in a factory both use it. A toggle mechanism multiplies force near the end of its travel, which is why toggle clamps can hold a workpiece with a small hand force.</p></p>\n<p><p>Each mechanism trades something: speed for force, smooth motion for stepping, or simplicity for precision. Pick the mechanism that matches the job's motion pattern, not the one that looks clever. A Geneva drive is wonderful for indexing and terrible for continuous cutting; a toggle clamp is wonderful for holding and useless for lifting.</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>Mechanisms turn one motion into another using links and joints.</li><li>Four-bar: ground, crank, coupler, rocker.</li><li>Grashof's rule predicts whether a link can rotate fully.</li><li>Slider-crank turns rotation into straight-line motion; piston speed is zero at dead centre.</li><li>Quick-return, Geneva, and toggle mechanisms each suit a different job.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Assuming a crank will always turn fully. Check Grashof's rule — wrong link lengths lock the mechanism.</p><p><strong>Common mistake:</strong> Forgetting dead centre: a slider-crank cannot be started from dead centre by pushing the piston.</p><p><strong>Ready check:</strong> If you can name the four links of a four-bar and explain what a slider-crank does, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Mechanism",
      "def": "A set of links and joints that turns one motion into another."
    },
    {
      "term": "Link",
      "def": "A rigid part of a mechanism."
    },
    {
      "term": "Joint",
      "def": "A connection between two links that lets them move relative to each other."
    },
    {
      "term": "Pin joint",
      "def": "A joint that lets two links rotate relative to each other."
    },
    {
      "term": "Slider",
      "def": "A joint that lets one link slide in a straight line along another."
    },
    {
      "term": "Four-bar linkage",
      "def": "A mechanism with four links: ground, crank, coupler, and rocker."
    },
    {
      "term": "Crank",
      "def": "The input link of a mechanism, which rotates."
    },
    {
      "term": "Coupler",
      "def": "The link that connects the crank to the output link."
    },
    {
      "term": "Rocker",
      "def": "An output link that swings back and forth instead of making full turns."
    },
    {
      "term": "Grashof's rule",
      "def": "A length test that predicts whether a link in a four-bar can make a full turn."
    },
    {
      "term": "Slider-crank",
      "def": "A mechanism that turns rotation into straight-line motion, used in engines and pumps."
    },
    {
      "term": "Dead centre",
      "def": "The position where the crank and connecting rod line up and the piston momentarily stops."
    },
    {
      "term": "Quick-return mechanism",
      "def": "A mechanism that moves slowly on the working stroke and fast on the return."
    },
    {
      "term": "Geneva mechanism",
      "def": "A mechanism that turns steady rotation into stepping, indexed motion."
    },
    {
      "term": "Toggle mechanism",
      "def": "A mechanism that multiplies force greatly near the end of its travel."
    }
  ],
  "video": {
    "title": "200 MECHANICAL MECHANIMS ENGINEER MUST MASTER",
    "embedUrl": "https://www.youtube.com/embed/FUvB1WxLfi0",
    "note": "A visual tour of 200 mechanisms — four-bar linkages, cams, Geneva drives, and more — watch the four-bar and slider-crank sections.",
    "more": [
      {
        "title": "Mechanical Mechanisms | Mechanisms | Mechanical Principle 2",
        "url": "https://www.youtube.com/watch?v=JjtFHlWbjrA"
      },
      {
        "title": "Slider-Crank Mechanism: Piston Position, Velocity & Acceleration",
        "url": "https://www.youtube.com/watch?v=6STFvhqOtjw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A four-bar has link lengths 40, 90, 70, and 100 mm (shortest 40, longest 100). Can the shortest link make a full turn?</p>",
      "solution": "<p><strong>Answer:</strong> Shortest + longest = 140 mm. Other two = 90 + 70 = 160 mm. 140 < 160, so yes — Grashof is satisfied and a link can rotate fully.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Name the four links of a four-bar linkage and say which one is fixed.</p>",
      "solution": "<p><strong>Answer:</strong> Ground (fixed), crank (input), coupler (connecting link), rocker or follower (output).</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A crank of radius 50 mm drives a slider-crank. What is the piston's stroke length?</p>",
      "solution": "<p><strong>Answer:</strong> Stroke = 2 × crank radius = 2 × 50 = 100 mm.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A shaping machine uses a quick-return mechanism. Why is the return stroke faster than the cutting stroke?</p>",
      "solution": "<p><strong>Answer:</strong> So most of the cycle time is spent cutting (useful work) and little time is wasted on the return.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Explain what dead centre is and why a flywheel helps a slider-crank through it.</p>",
      "solution": "<p><strong>Answer:</strong> Dead centre is where crank and rod line up and piston speed is zero; the flywheel's stored energy carries the crank through the position where the piston cannot push it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A Geneva mechanism is used on an indexing table. Why not use a plain gear drive instead?</p>",
      "solution": "<p><strong>Answer:</strong> The table must stop at each station while work is done; a Geneva drive gives stepping motion with built-in dwells, while gears give continuous motion.</p>"
    }
  ],
  "quiz": [
    {
      "q": "In a four-bar linkage, which link is fixed?",
      "choices": [
        "The crank",
        "The coupler",
        "The ground",
        "The rocker"
      ],
      "answer": 2,
      "explanation": "Correct: (c). The ground link is fixed to the frame. (a) the crank is the moving input. (b) the coupler connects crank to output. (d) the rocker is the moving output."
    },
    {
      "q": "Grashof's rule compares:",
      "choices": [
        "The shortest and longest links with the other two",
        "The crank speed with the rocker speed",
        "The mass of the links",
        "The friction in the joints"
      ],
      "answer": 0,
      "explanation": "Correct: (a). If shortest + longest is less than the other two, a link can rotate fully. (b) speeds are a result, not the test. (c) mass is irrelevant to Grashof. (d) friction is not part of the rule."
    },
    {
      "q": "A slider-crank turns:",
      "choices": [
        "Straight-line motion into rotation",
        "Rotation into straight-line motion",
        "Heat into motion",
        "Electricity into motion"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The crank rotates and the piston slides. (a) is the reverse, which a steam engine does not do in this form. (c) and (d) are other energy conversions."
    },
    {
      "q": "At dead centre, the piston's velocity is:",
      "choices": [
        "Maximum",
        "Zero",
        "Equal to the crank speed",
        "Constant"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The piston momentarily stops as it changes direction. (a) maximum speed is near mid-stroke. (c) piston speed is never equal to crank speed. (d) speed changes through the stroke."
    },
    {
      "q": "A crank of radius 60 mm gives a slider stroke of:",
      "choices": [
        "60 mm",
        "120 mm",
        "30 mm",
        "180 mm"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Stroke = 2 × radius = 120 mm. (a) is the radius alone. (c) is half the radius. (d) is three times the radius."
    },
    {
      "q": "A Geneva mechanism is used when you need:",
      "choices": [
        "Continuous rotation",
        "Stepping motion with stops",
        "Very high speed",
        "Very high torque"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It indexes in steps with dwells between. (a) gears do continuous rotation better. (c) it is not a high-speed device. (d) it is not a torque multiplier."
    },
    {
      "q": "A toggle clamp holds tightly because:",
      "choices": [
        "It is very heavy",
        "It multiplies force near the end of its travel",
        "It uses a big motor",
        "It is made of steel"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Near the locked position, a small input force gives a very large clamping force. (a) weight is not the mechanism. (c) it is hand-operated. (d) material alone does not multiply force."
    },
    {
      "q": "How many independent inputs does a four-bar linkage normally need?",
      "choices": [
        "One",
        "Two",
        "Three",
        "Four"
      ],
      "answer": 0,
      "explanation": "Correct: (a). It has one degree of freedom. (b), (c), and (d) would over-constrain it."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Linkages and Mechanisms: Four-Bar, Slider-Crank, and More: Quick Reference</h3>\n<p><strong>Core idea:</strong> Name the parts of a four-bar linkage and say what each one does.</p>\n<p><strong>Key terms:</strong> Mechanism · Link · Joint · Pin joint · Slider · Four-bar linkage · Crank · Coupler.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Name the parts of a four-bar linkage and say what each one does.</li>\n<li>Explain Grashof's rule for whether a link can make a full turn.</li>\n<li>Describe how a slider-crank turns rotation into straight-line motion.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
