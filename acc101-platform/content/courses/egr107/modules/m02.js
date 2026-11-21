// egr107 - Module 2: Kinematics: Position, Velocity, and Acceleration
module.exports = {
  "number": 2,
  "slug": "kinematics-motion",
  "title": "Kinematics: Position, Velocity, and Acceleration",
  "estTime": "3–4 hours",
  "objectives": [
    "Use the constant-acceleration equations (SUVAT) to solve straight-line motion problems.",
    "Read position-time and velocity-time graphs and find velocity and distance from them.",
    "Solve projectile problems by separating horizontal and vertical motion.",
    "Calculate distance, time, and speed for a conveyor or trolley move.",
    "Explain the difference between average and instantaneous velocity."
  ],
  "sections": [
    {
      "heading": "Straight-Line Motion and the SUVAT Equations",
      "html": "<p><p>For motion in a straight line with constant acceleration, five quantities are linked: displacement s, initial velocity u, final velocity v, acceleration a, and time t. The equations are v = u + at, s = ut + ½at², and v² = u² + 2as. Pick the equation that contains what you know and what you want, and ignore the rest. Write down u, v, a, s, and t first — that list is half the solution.</p></p>\n<p><p>Example: a conveyor cart starts from rest (u = 0) and accelerates at 2 m/s² for 5 s. Its final speed is v = 0 + 2 × 5 = 10 m/s. The distance covered is s = 0 + ½ × 2 × 25 = 25 m. Check the units: m/s² × s gives m/s, and m/s² × s² gives m. If the units do not work out, the equation is wrong.</p></p>\n"
    },
    {
      "heading": "Graphs Tell the Story",
      "html": "<p><p>A velocity-time graph is a powerful tool. The slope of the graph is the acceleration, and the area under the graph is the distance travelled. A flat line means steady speed (zero acceleration); a rising line means speeding up; a falling line means slowing down. A position-time graph works the same way: its slope is the velocity.</p></p>\n<p><p>Example: a trolley speeds up from 0 to 6 m/s in 3 s, then cruises at 6 m/s for 4 s. The area under the velocity-time graph is a triangle (½ × 3 × 6 = 9 m) plus a rectangle (4 × 6 = 24 m), giving 33 m in total. Drawing the graph first often makes a messy word problem easy.</p></p>\n"
    },
    {
      "heading": "Projectile Motion: Two Motions at Once",
      "html": "<p><p>A thrown or dropped object moves in two independent directions at once. Horizontally there is (nearly) no acceleration, so horizontal distance is simply speed × time. Vertically, gravity accelerates it downward at 9.81 m/s². Solve the two directions separately, then combine them — time is the link between them.</p></p>\n<p><p>Example: a part is dropped from a shelf 1.25 m high. Falling from rest, s = ½gt² gives 1.25 = ½ × 9.81 × t², so t² = 0.255 and t = 0.50 s. In that half second it keeps whatever horizontal speed it had. That is why a part that rolls off a bench lands a short distance from the bench, not straight below the edge.</p></p>\n"
    },
    {
      "heading": "Relative Motion and Moving Machines",
      "html": "<p><p>In machines, what matters is often motion relative to another moving part: a piston relative to its cylinder, a belt relative to a pulley, a robot gripper relative to a moving conveyor. Relative velocity is found by subtracting vectors: the velocity of A as seen from B is v_A − v_B. If both move the same way at the same speed, the relative velocity is zero.</p></p>\n<p><p>Example: a conveyor moves at 1.5 m/s and a worker walks alongside it at 1.5 m/s in the same direction. Relative to the conveyor, the worker is standing still, so they can place a part without chasing it. A robot that must pick from a moving belt has to match the belt speed first — that is a relative-motion problem, not an absolute-speed one.</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>SUVAT links s, u, v, a, t for constant acceleration.</li><li>On a v–t graph, slope is acceleration and area is distance.</li><li>Projectiles: horizontal motion is steady, vertical motion accelerates at g.</li><li>Relative velocity is the difference of the two velocities.</li><li>List the knowns before choosing an equation.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Using v = u + at when acceleration is not constant. These equations only work for constant acceleration.</p><p><strong>Common mistake:</strong> Forgetting that g acts downward, so a falling object's velocity grows by 9.81 m/s every second.</p><p><strong>Ready check:</strong> If you can find the stopping distance of a cart from its speed and deceleration, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Displacement",
      "def": "How far a body has moved from its start, with direction, in metres."
    },
    {
      "term": "Velocity",
      "def": "The rate of change of displacement, in m/s, with direction."
    },
    {
      "term": "Acceleration",
      "def": "The rate of change of velocity, in m/s²."
    },
    {
      "term": "SUVAT equations",
      "def": "The constant-acceleration equations linking s, u, v, a, and t."
    },
    {
      "term": "Initial velocity (u)",
      "def": "The velocity at the start of the time interval being studied."
    },
    {
      "term": "Final velocity (v)",
      "def": "The velocity at the end of the time interval being studied."
    },
    {
      "term": "Free fall",
      "def": "Motion under gravity alone, with acceleration g = 9.81 m/s² downward."
    },
    {
      "term": "Projectile",
      "def": "An object thrown or dropped that moves under gravity, with no engine pushing it."
    },
    {
      "term": "Position-time graph",
      "def": "A graph of position against time; its slope is velocity."
    },
    {
      "term": "Velocity-time graph",
      "def": "A graph of velocity against time; its slope is acceleration and the area under it is distance."
    },
    {
      "term": "Relative velocity",
      "def": "The velocity of one body as seen from another moving body."
    },
    {
      "term": "Average velocity",
      "def": "Total displacement divided by total time."
    },
    {
      "term": "Instantaneous velocity",
      "def": "The velocity at one particular moment, the slope of the position-time graph there."
    },
    {
      "term": "Uniform acceleration",
      "def": "Acceleration that stays the same value through the whole motion."
    }
  ],
  "video": {
    "title": "How to: Kinematics in One and Two Dimensions with Examples",
    "embedUrl": "https://www.youtube.com/embed/binsBcBvoBQ",
    "note": "Worked kinematics examples in one and two dimensions, with the constant-acceleration equations used step by step.",
    "more": [
      {
        "title": "Slider-Crank Mechanism: Piston Position, Velocity & Acceleration",
        "url": "https://www.youtube.com/watch?v=6STFvhqOtjw"
      },
      {
        "title": "General Physics Explained | Complete Masterclass",
        "url": "https://www.youtube.com/watch?v=58CRM_xHdc0"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A cart starts from rest and accelerates at 1.5 m/s² for 6 s. Find its final speed and the distance travelled.</p>",
      "solution": "<p><strong>Answer:</strong> v = 0 + 1.5 × 6 = 9 m/s. s = ½ × 1.5 × 36 = 27 m.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A forklift moving at 8 m/s brakes with a deceleration of 4 m/s². How far does it travel before stopping?</p>",
      "solution": "<p><strong>Answer:</strong> v² = u² + 2as → 0 = 64 + 2(−4)s → s = 64 ÷ 8 = 8 m.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A bolt falls from a platform 20 m high. How long does it take to hit the ground? (g = 9.81 m/s²)</p>",
      "solution": "<p><strong>Answer:</strong> s = ½gt² → 20 = 4.905t² → t² = 4.077 → t = 2.02 s, about 2.0 s.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A conveyor runs at 2 m/s. A sensor 30 m downstream must trigger after the part passes. How long after the part passes the start sensor?</p>",
      "solution": "<p><strong>Answer:</strong> t = s ÷ v = 30 ÷ 2 = 15 s.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A trolley speeds up from 2 m/s to 10 m/s over 16 m. Find its acceleration.</p>",
      "solution": "<p><strong>Answer:</strong> v² = u² + 2as → 100 = 4 + 32a → a = 96 ÷ 32 = 3 m/s².</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A ball is thrown horizontally at 12 m/s from a bench 0.8 m high. How far from the bench does it land?</p>",
      "solution": "<p><strong>Answer:</strong> Fall time: 0.8 = 4.905t² → t = 0.404 s. Horizontal distance = 12 × 0.404 = 4.85 m, about 4.9 m.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A cart starts from rest, a = 2 m/s², t = 5 s. What is its final speed?",
      "choices": [
        "5 m/s",
        "10 m/s",
        "25 m/s",
        "2 m/s"
      ],
      "answer": 1,
      "explanation": "Correct: (b). v = 0 + 2 × 5 = 10 m/s. (a) forgets to multiply by time. (c) is the distance, not the speed. (d) is the acceleration, not the speed."
    },
    {
      "q": "The same cart (a = 2 m/s², t = 5 s, from rest). How far does it travel?",
      "choices": [
        "10 m",
        "25 m",
        "50 m",
        "5 m"
      ],
      "answer": 1,
      "explanation": "Correct: (b). s = ½ × 2 × 25 = 25 m. (a) is the final speed. (c) doubles the correct answer. (d) is the time, not a distance."
    },
    {
      "q": "On a velocity-time graph, what does the area under the graph give?",
      "choices": [
        "Acceleration",
        "Distance travelled",
        "Force",
        "Mass"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Area under a v–t graph is distance. (a) is the slope, not the area. (c) and (d) cannot be read from a v–t graph."
    },
    {
      "q": "On a velocity-time graph, what does the slope give?",
      "choices": [
        "Distance",
        "Acceleration",
        "Time",
        "Speed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Slope is change in velocity over time, which is acceleration. (a) is the area. (c) is the horizontal axis itself. (d) is the vertical value, not the slope."
    },
    {
      "q": "A van at 12 m/s brakes at −3 m/s². How long until it stops?",
      "choices": [
        "3 s",
        "4 s",
        "9 s",
        "36 s"
      ],
      "answer": 1,
      "explanation": "Correct: (b). t = (0 − 12) ÷ (−3) = 4 s. (a) divides 12 by 4. (c) is 12 − 3. (d) multiplies 12 by 3."
    },
    {
      "q": "A stone is dropped from rest. How fast is it falling after 3 s? (g = 9.81 m/s²)",
      "choices": [
        "9.81 m/s",
        "19.62 m/s",
        "29.43 m/s",
        "3 m/s"
      ],
      "answer": 2,
      "explanation": "Correct: (c). v = 9.81 × 3 = 29.43 m/s. (a) is the speed after 1 s. (b) is after 2 s. (d) is the time, not the speed."
    },
    {
      "q": "A part rolls off a bench at 3 m/s horizontally and takes 0.45 s to fall. How far from the bench does it land?",
      "choices": [
        "0.45 m",
        "1.35 m",
        "3 m",
        "6.67 m"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 3 × 0.45 = 1.35 m. (a) is the fall time alone. (c) is the speed alone. (d) divides speed by time instead of multiplying."
    },
    {
      "q": "Two trolleys move the same way at 2 m/s and 5 m/s. What is the faster one's velocity relative to the slower one?",
      "choices": [
        "7 m/s",
        "3 m/s",
        "2 m/s",
        "0 m/s"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 5 − 2 = 3 m/s. (a) adds them, which is for opposite directions. (c) is the slower speed. (d) would mean they move together."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Kinematics: Position, Velocity, and Acceleration: Quick Reference</h3>\n<p><strong>Core idea:</strong> Use the constant-acceleration equations (SUVAT) to solve straight-line motion problems.</p>\n<p><strong>Key terms:</strong> Displacement · Velocity · Acceleration · SUVAT equations · Initial velocity (u) · Final velocity (v) · Free fall · Projectile.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Use the constant-acceleration equations (SUVAT) to solve straight-line motion problems.</li>\n<li>Read position-time and velocity-time graphs and find velocity and distance from them.</li>\n<li>Solve projectile problems by separating horizontal and vertical motion.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
