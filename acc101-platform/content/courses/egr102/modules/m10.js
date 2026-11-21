// egr102 - Module 10: Torque & Rotational Motion
module.exports = {
  "number": 10,
  "slug": "torque-and-rotation",
  "title": "Torque & Rotational Motion",
  "estTime": "3–4 hours",
  "objectives": [
    "Define torque as force times distance from the pivot.",
    "Work out torque, including when the force acts at an angle.",
    "Explain the difference between torque and force.",
    "Work out rotational speed in rpm and in rad/s.",
    "Explain why a longer spanner gives more torque."
  ],
  "sections": [
    {
      "heading": "Torque: The Turning Force",
      "html": "<p>Torque is the turning effect of a force: torque = force × distance from the pivot (the turning point). Push on a door near its hinge and it barely moves; push near the handle and it swings easily. Same force, different distance, different torque.</p>\n<p>Worked example: a 40 N force pushes at the end of a 0.5 m spanner, at right angles. Torque = 40 × 0.5 = 20 N·m. The unit is the newton-metre (N·m). Torque is what tightens bolts and turns wheels — force alone does not turn anything.</p>\n"
    },
    {
      "heading": "Torque at an Angle",
      "html": "<p>If the force does not act at right angles to the lever, only part of it turns the lever. Torque = F × d × sin θ, where θ is the angle between the force and the lever. At 90°, sin 90° = 1 and you get the full torque; at 0°, sin 0° = 0 and you get no turning at all.</p>\n<p>Worked example: a 100 N force acts at 60° on a 0.3 m lever. Torque = 100 × 0.3 × sin 60° = 30 × 0.866 = 25.98 N·m, about 26 N·m. Push at a right angle whenever you can — that is where all your effort turns into torque.</p>\n"
    },
    {
      "heading": "Why a Longer Spanner Works",
      "html": "<p>Torque grows with distance, so a longer spanner gives more torque for the same push. Double the length and you double the torque. That is why a stuck bolt yields to a long breaker bar when a short spanner fails — and why overtightening with a long bar can snap a bolt.</p>\n<p>Bolted joints are tightened to a specified torque, measured with a torque wrench, and in a set sequence (as in a gasket) so the load spreads evenly. Too little torque and the joint leaks or loosens; too much and the bolt stretches or breaks.</p>\n"
    },
    {
      "heading": "Rotational Speed: rpm and Radians",
      "html": "<p>Rotational speed is often given in revolutions per minute (rpm). A motor at 1,200 rpm turns 1,200 ÷ 60 = 20 times per second. In physics, speed is measured in radians per second: one revolution is 2π radians, so 20 revolutions per second is 20 × 2π = 125.7 rad/s.</p>\n<p>A point on a spinning wheel moves faster the further it is from the centre: speed = radius × angular speed. A wheel of radius 0.3 m spinning at 10 rad/s has a rim speed of 0.3 × 10 = 3 m/s. This is how a small motor pulley drives a big machine pulley at a different speed.</p>\n<p><strong>Torque, Power, and Machines</strong></p>\n<p>Power in a rotating machine is torque × angular speed: P = T × ω. A motor giving 20 N·m at 10 rad/s delivers 200 W. Gears trade speed for torque: a gear that halves the speed doubles the torque (minus a little lost to friction).</p>\n<p>That trade is everywhere: a car’s low gear gives high torque for pulling away, and its high gear gives high speed for cruising. You cannot have both at once from the same power — torque and speed trade against each other.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Torque = force × distance from the pivot, in N·m.</li><li>At an angle: torque = F × d × sin θ; best at 90°.</li><li>Longer lever = more torque for the same force.</li><li>rpm ÷ 60 = revolutions per second; × 2π = rad/s.</li><li>Rotational power P = torque × angular speed.</li></ul></p>\n<p><strong>Common mistake:</strong> Measuring the distance from the wrong point. Torque uses the distance from the pivot, not the length of the whole object.</p>\n<p><strong>Common mistake:</strong> Confusing force and torque. A 40 N push is a force; a 40 N push on a 0.5 m spanner is a 20 N·m torque.</p>\n<p><strong>Ready check:</strong> If you can work out torque from 40 N on a 0.5 m spanner, explain why a longer spanner helps, and convert 1,200 rpm to rad/s, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Torque",
      "def": "The turning effect of a force: torque = force × distance from the pivot, in N·m."
    },
    {
      "term": "Pivot",
      "def": "The point a lever turns around, such as a hinge or a bolt centre."
    },
    {
      "term": "Lever arm",
      "def": "The distance from the pivot to where the force acts."
    },
    {
      "term": "Newton-metre (N·m)",
      "def": "The unit of torque."
    },
    {
      "term": "Torque wrench",
      "def": "A spanner that measures the torque applied, so bolts are tightened to a specified value."
    },
    {
      "term": "RPM",
      "def": "Revolutions per minute, a unit of rotational speed."
    },
    {
      "term": "Radian",
      "def": "The physics unit of angle; one full turn is 2π radians."
    },
    {
      "term": "Angular speed",
      "def": "How fast something turns, in radians per second (rad/s)."
    },
    {
      "term": "Breaker bar",
      "def": "A long spanner handle used to loosen tight bolts by giving more torque."
    },
    {
      "term": "Gear",
      "def": "A toothed wheel that passes torque and speed to another toothed wheel."
    },
    {
      "term": "Rotational power",
      "def": "Power in a turning machine: P = torque × angular speed."
    },
    {
      "term": "Moment",
      "def": "Another word for torque: the moment of a force about a point."
    },
    {
      "term": "Clockwise",
      "def": "Turning in the direction of a clock’s hands."
    },
    {
      "term": "Anticlockwise",
      "def": "Turning opposite to a clock’s hands."
    }
  ],
  "video": {
    "title": "Importance of Torque Sequence in Gasket Installation",
    "embedUrl": "https://www.youtube.com/embed/v3DVRBumKgo",
    "note": "Torque in real work: watch why bolts are tightened in a sequence and to a set torque, not just “as tight as possible”. A gasket that is tightened unevenly leaks.",
    "more": [
      {
        "title": "Newton's Laws: Crash Course Physics #5",
        "url": "https://www.youtube.com/watch?v=kKKM8Y-u7ds"
      },
      {
        "title": "Work and power | Physics | Khan Academy",
        "url": "https://www.youtube.com/watch?v=v2_qI9S6oIQ"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Torque” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Torque — The turning effect of a force: torque = force × distance from the pivot, in N·m. It matters because it connects directly to this module’s first goal: Define torque as force times distance from the pivot. A good answer names the term correctly, explains it in plain words, and gives a real example from the module.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Pivot” and “Lever arm”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Pivot — The point a lever turns around, such as a hinge or a bolt centre. Lever arm — The distance from the pivot to where the force acts. They differ in what they describe: the first is about pivot, the second about lever arm. A good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module’s main idea: “Define torque as force times distance from the pivot.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Define torque as force times distance from the pivot. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Newton-metre (N·m) — The unit of torque. Torque wrench — A spanner that measures the torque applied, so bolts are tightened to a specified value. RPM — Revolutions per minute, a unit of rotational speed. Radian — The physics unit of angle; one full turn is 2π radians. (Any four module terms, explained in the student’s own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A 40 N force pushes at right angles at the end of a 0.5 m spanner. What is the torque? If the spanner were 1.0 m long, what would the torque be with the same force?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Torque = 40 × 0.5 = 20 N·m. Step 2: With a 1.0 m spanner, torque = 40 × 1.0 = 40 N·m. Step 3: Doubling the length doubles the torque — which is why a longer spanner loosens stuck bolts.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A motor runs at 1,200 rpm. How many revolutions per second is that, and what is its angular speed in rad/s?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 1,200 ÷ 60 = 20 revolutions per second. Step 2: Angular speed = 20 × 2π = 125.7 rad/s (using π = 3.14, 20 × 6.28 = 125.6 rad/s). A good answer shows both steps.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Torque” mean?",
      "choices": [
        "The turning effect of a force: torque = force × distance from the pivot, in N·m.",
        "The distance from the pivot to where the force acts.",
        "The unit of torque.",
        "A spanner that measures the torque applied, so bolts are tightened to a specified value."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Torque means: The turning effect of a force: torque = force × distance from the pivot, in N·m.. (b) is the definition of Lever arm, not of Torque. (c) is the definition of Newton-metre (N·m), not of Torque. (d) is the definition of Torque wrench, not of Torque."
    },
    {
      "q": "What does the term “Lever arm” mean?",
      "choices": [
        "A spanner that measures the torque applied, so bolts are tightened to a specified value.",
        "The distance from the pivot to where the force acts.",
        "Revolutions per minute, a unit of rotational speed.",
        "The physics unit of angle; one full turn is 2π radians."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Lever arm means: The distance from the pivot to where the force acts.. (a) is the definition of Torque wrench, not of Lever arm. (c) is the definition of RPM, not of Lever arm. (d) is the definition of Radian, not of Lever arm."
    },
    {
      "q": "What does the term “Torque wrench” mean?",
      "choices": [
        "The physics unit of angle; one full turn is 2π radians.",
        "How fast something turns, in radians per second (rad/s).",
        "A spanner that measures the torque applied, so bolts are tightened to a specified value.",
        "A long spanner handle used to loosen tight bolts by giving more torque."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Torque wrench means: A spanner that measures the torque applied, so bolts are tightened to a specified value.. (a) is the definition of Radian, not of Torque wrench. (b) is the definition of Angular speed, not of Torque wrench. (d) is the definition of Breaker bar, not of Torque wrench."
    },
    {
      "q": "What does the term “Radian” mean?",
      "choices": [
        "A long spanner handle used to loosen tight bolts by giving more torque.",
        "A toothed wheel that passes torque and speed to another toothed wheel.",
        "Power in a turning machine: P = torque × angular speed.",
        "The physics unit of angle; one full turn is 2π radians."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Radian means: The physics unit of angle; one full turn is 2π radians.. (a) is the definition of Breaker bar, not of Radian. (b) is the definition of Gear, not of Radian. (c) is the definition of Rotational power, not of Radian."
    },
    {
      "q": "A 40 N force pushes at right angles at the end of a 0.5 m spanner. What is the torque?",
      "choices": [
        "20 N·m",
        "40 N·m",
        "80 N·m",
        "0.5 N·m"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 40 × 0.5 = 20 N·m. (b) is the force alone. (c) divides 40 by 0.5. (d) is the length alone."
    },
    {
      "q": "Why does a longer spanner loosen a stuck bolt more easily?",
      "choices": [
        "Because it is heavier.",
        "Because torque = force × distance, so a longer spanner gives more torque for the same push.",
        "Because it is made of stronger steel.",
        "Because it turns faster."
      ],
      "answer": 1,
      "explanation": "Correct: (b). More distance means more torque. (a) is wrong: weight is not the point. (c) is wrong: the material is the same. (d) is wrong: speed is not the issue."
    },
    {
      "q": "A 100 N force acts at 60° on a 0.3 m lever (sin 60° = 0.866). What is the torque?",
      "choices": [
        "30 N·m",
        "26 N·m",
        "100 N·m",
        "3 N·m"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 100 × 0.3 × 0.866 = 25.98 N·m, about 26 N·m. (a) forgets the sine. (c) is the force. (d) is 100 × 0.3 ÷ 10."
    },
    {
      "q": "A motor runs at 1,200 rpm. How many revolutions per second is that?",
      "choices": [
        "12",
        "20",
        "72",
        "1,200"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 1,200 ÷ 60 = 20 rev/s. (a) divides by 100. (c) is 1,200 ÷ 16.7. (d) forgets to divide by 60."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Torque & Rotational Motion: Quick Reference</h3>\n<p><strong>Core idea:</strong> Define torque as force times distance from the pivot.</p>\n<p><strong>Key terms:</strong> Torque · Pivot · Lever arm · Newton-metre (N·m) · Torque wrench · RPM · Radian · Angular speed.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Define torque as force times distance from the pivot.</li>\n<li>Work out torque, including when the force acts at an angle.</li>\n<li>Explain the difference between torque and force.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module’s main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
