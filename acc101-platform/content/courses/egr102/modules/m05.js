// egr102 - Module 5: Motion: Distance, Speed, Velocity, and Acceleration
module.exports = {
  "number": 5,
  "slug": "motion",
  "title": "Motion: Distance, Speed, Velocity, and Acceleration",
  "estTime": "3–4 hours",
  "objectives": [
    "Tell distance apart from displacement, and speed apart from velocity.",
    "Work out speed, distance, and time from each other.",
    "Work out acceleration from a change in velocity.",
    "Use the equations v = u + at and s = ut + ½at².",
    "Read a speed-time graph and find distance from its area."
  ],
  "sections": [
    {
      "heading": "Distance, Displacement, Speed, Velocity",
      "html": "<p>Distance is how far you travelled, full stop — 5 km walked is 5 km, whatever route you took. Displacement is how far you ended up from where you started, in a straight line, with a direction. Walk 3 km east then 4 km north and your distance is 7 km but your displacement is 5 km north-east (a 3-4-5 triangle again).</p>\n<p>Speed is distance ÷ time, a scalar: 60 km/h. Velocity is displacement ÷ time, a vector: 60 km/h north. A car going around a roundabout at a steady 30 km/h has constant speed but changing velocity, because its direction keeps changing.</p>\n"
    },
    {
      "heading": "Speed, Distance, and Time",
      "html": "<p>The three are linked: speed = distance ÷ time; distance = speed × time; time = distance ÷ speed. Worked example: a trolley covers 120 m in 10 s. Its speed is 120 ÷ 10 = 12 m/s. At that speed, how far does it go in 5 s? 12 × 5 = 60 m.</p>\n<p>Units must match: if speed is in m/s, time must be in seconds and distance comes out in metres. A car at 25 m/s for 12 s travels 25 × 12 = 300 m. Always write the unit with the answer — a speed without m/s or km/h is meaningless.</p>\n"
    },
    {
      "heading": "Acceleration: Speeding Up, Slowing Down",
      "html": "<p>Acceleration is the rate of change of velocity: acceleration = (final velocity − initial velocity) ÷ time. Its unit is m/s². A car going from 10 m/s to 30 m/s in 4 s accelerates at (30 − 10) ÷ 4 = 20 ÷ 4 = 5 m/s².</p>\n<p>Slowing down is negative acceleration, also called deceleration. A car braking from 20 m/s to a stop in 4 s has an acceleration of (0 − 20) ÷ 4 = −5 m/s². The minus sign is information, not a mistake: it says the velocity is falling.</p>\n"
    },
    {
      "heading": "The Equations of Motion",
      "html": "<p>For motion with constant acceleration, two equations do most of the work. First: v = u + at, where u is the starting velocity, v is the final velocity, a is the acceleration, and t is the time. Example: a trolley starts from rest (u = 0) and accelerates at 2 m/s² for 5 s. Its final velocity is v = 0 + 2 × 5 = 10 m/s.</p>\n<p>Second: s = ut + ½at², where s is the distance travelled. For the same trolley after 3 s: s = 0 × 3 + ½ × 2 × 3² = 0 + 1 × 9 = 9 m. These two equations solve most straight-line motion problems in engineering.</p>\n<p><strong>Graphs: Reading Motion at a Glance</strong></p>\n<p>On a distance-time graph, the slope is the speed: a steeper line means faster. A flat line means stopped. On a speed-time graph, the slope is the acceleration, and the area under the line is the distance travelled — a fact engineers use constantly.</p>\n<p>Example: a speed-time graph shows a steady 10 m/s for 6 s. The area is a rectangle: 10 × 6 = 60 m travelled. If the speed rises steadily from 0 to 10 m/s over 6 s, the area is a triangle: ½ × 10 × 6 = 30 m. Same time, half the distance — because the average speed was only 5 m/s.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Distance is total path; displacement is straight-line change of position.</li><li>Speed = distance ÷ time; velocity is speed with a direction.</li><li>Acceleration = (v − u) ÷ t, in m/s².</li><li>v = u + at; s = ut + ½at².</li><li>On a speed-time graph, area = distance.</li></ul></p>\n<p><strong>Common mistake:</strong> Using average speed when the speed is changing. For steady acceleration from rest, the average speed is half the final speed.</p>\n<p><strong>Common mistake:</strong> Forgetting that slowing down gives a negative acceleration — and then dropping the minus sign.</p>\n<p><strong>Ready check:</strong> If you can work out a speed from 120 m in 10 s, an acceleration from 10 to 30 m/s in 4 s, and a distance with s = ut + ½at², you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Distance",
      "def": "How far something has travelled in total, measured in metres or kilometres."
    },
    {
      "term": "Displacement",
      "def": "How far something has moved from its start, in a straight line and a direction."
    },
    {
      "term": "Speed",
      "def": "Distance divided by time, such as 12 m/s; a scalar."
    },
    {
      "term": "Velocity",
      "def": "Speed with a direction, such as 12 m/s east; a vector."
    },
    {
      "term": "Acceleration",
      "def": "The rate of change of velocity, in m/s²; positive means speeding up, negative means slowing down."
    },
    {
      "term": "Deceleration",
      "def": "Negative acceleration: velocity falling over time."
    },
    {
      "term": "Initial velocity (u)",
      "def": "The velocity at the start of a motion, in m/s."
    },
    {
      "term": "Final velocity (v)",
      "def": "The velocity at the end of a motion, in m/s."
    },
    {
      "term": "Time (t)",
      "def": "How long a motion takes, in seconds."
    },
    {
      "term": "Equation of motion",
      "def": "A formula linking u, v, a, t, and s for motion with constant acceleration, such as v = u + at."
    },
    {
      "term": "Constant acceleration",
      "def": "Acceleration that stays the same during a motion."
    },
    {
      "term": "Speed-time graph",
      "def": "A graph of speed against time; its slope is acceleration and the area under it is distance."
    },
    {
      "term": "Average speed",
      "def": "Total distance divided by total time."
    },
    {
      "term": "Free fall",
      "def": "Motion under gravity alone, with acceleration g = 9.81 m/s²."
    }
  ],
  "video": {
    "title": "How Electric Motors Work - 3 phase AC induction motors  ac motor",
    "embedUrl": "https://www.youtube.com/embed/59HBoIXzX_c",
    "note": "Motion in a machine: watch how a motor’s rotor spins, and listen for speed in revolutions per minute (rpm). Rotational speed is motion too — the same ideas of speed and acceleration apply to turning.",
    "more": [
      {
        "title": "How to Find the Volume of a Cylinder | Math with Mr. J",
        "url": "https://www.youtube.com/watch?v=fGVlL47TKAw"
      },
      {
        "title": "Understanding Fractions | Plumbing Math for Beginners | Updated",
        "url": "https://www.youtube.com/watch?v=ShNHqgtUqyE"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Distance” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Distance — How far something has travelled in total, measured in metres or kilometres. It matters because it connects directly to this module’s first goal: Tell distance apart from displacement, and speed apart from velocity. A good answer names the term correctly, explains it in plain words, and gives a real example from the module.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Displacement” and “Speed”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Displacement — How far something has moved from its start, in a straight line and a direction. Speed — Distance divided by time, such as 12 m/s; a scalar. They differ in what they describe: the first is about displacement, the second about speed. A good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module’s main idea: “Tell distance apart from displacement, and speed apart from velocity.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Tell distance apart from displacement, and speed apart from velocity. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Velocity — Speed with a direction, such as 12 m/s east; a vector. Acceleration — The rate of change of velocity, in m/s²; positive means speeding up, negative means slowing down. Deceleration — Negative acceleration: velocity falling over time. Initial velocity (u) — The velocity at the start of a motion, in m/s. (Any four module terms, explained in the student’s own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A car brakes from 20 m/s to a stop with a deceleration of 5 m/s². How far does it travel while braking? (Use v² = u² + 2as, with v = 0.)</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 0 = 20² + 2 × (−5) × s, so 0 = 400 − 10s. Step 2: 10s = 400, so s = 40 m. Step 3: Check the units: metres. The car travels 40 m while braking.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A trolley starts from rest and accelerates at 2 m/s². What is its velocity after 5 s, and how far has it travelled after 3 s?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: v = u + at = 0 + 2 × 5 = 10 m/s. Step 2: s = ut + ½at² = 0 + ½ × 2 × 9 = 9 m. A good answer gives both numbers with units.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Distance” mean?",
      "choices": [
        "How far something has travelled in total, measured in metres or kilometres.",
        "Distance divided by time, such as 12 m/s; a scalar.",
        "Speed with a direction, such as 12 m/s east; a vector.",
        "The rate of change of velocity, in m/s²; positive means speeding up, negative means slowing down."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Distance means: How far something has travelled in total, measured in metres or kilometres.. (b) is the definition of Speed, not of Distance. (c) is the definition of Velocity, not of Distance. (d) is the definition of Acceleration, not of Distance."
    },
    {
      "q": "What does the term “Speed” mean?",
      "choices": [
        "The rate of change of velocity, in m/s²; positive means speeding up, negative means slowing down.",
        "Distance divided by time, such as 12 m/s; a scalar.",
        "Negative acceleration: velocity falling over time.",
        "The velocity at the start of a motion, in m/s."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Speed means: Distance divided by time, such as 12 m/s; a scalar.. (a) is the definition of Acceleration, not of Speed. (c) is the definition of Deceleration, not of Speed. (d) is the definition of Initial velocity (u), not of Speed."
    },
    {
      "q": "What does the term “Acceleration” mean?",
      "choices": [
        "The velocity at the start of a motion, in m/s.",
        "The velocity at the end of a motion, in m/s.",
        "The rate of change of velocity, in m/s²; positive means speeding up, negative means slowing down.",
        "How long a motion takes, in seconds."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Acceleration means: The rate of change of velocity, in m/s²; positive means speeding up, negative means slowing down.. (a) is the definition of Initial velocity (u), not of Acceleration. (b) is the definition of Final velocity (v), not of Acceleration. (d) is the definition of Time (t), not of Acceleration."
    },
    {
      "q": "What does the term “Initial velocity (u)” mean?",
      "choices": [
        "How long a motion takes, in seconds.",
        "A formula linking u, v, a, t, and s for motion with constant acceleration, such as v = u + at.",
        "Acceleration that stays the same during a motion.",
        "The velocity at the start of a motion, in m/s."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Initial velocity (u) means: The velocity at the start of a motion, in m/s.. (a) is the definition of Time (t), not of Initial velocity (u). (b) is the definition of Equation of motion, not of Initial velocity (u). (c) is the definition of Constant acceleration, not of Initial velocity (u)."
    },
    {
      "q": "A trolley covers 120 m in 10 s at a steady speed. What is its speed?",
      "choices": [
        "10 m/s",
        "12 m/s",
        "120 m/s",
        "1,200 m/s"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 120 ÷ 10 = 12 m/s. (a) divides 120 by 12. (c) forgets to divide by time. (d) multiplies instead of dividing."
    },
    {
      "q": "A car speeds up from 10 m/s to 30 m/s in 4 s. What is its acceleration?",
      "choices": [
        "5 m/s²",
        "7.5 m/s²",
        "10 m/s²",
        "20 m/s²"
      ],
      "answer": 0,
      "explanation": "Correct: (a). (30 − 10) ÷ 4 = 20 ÷ 4 = 5 m/s². (b) divides 30 by 4. (c) is 40 ÷ 4. (d) is the change in velocity, not divided by time."
    },
    {
      "q": "A trolley starts from rest and accelerates at 2 m/s² for 5 s. What is its final velocity?",
      "choices": [
        "2 m/s",
        "5 m/s",
        "10 m/s",
        "20 m/s"
      ],
      "answer": 2,
      "explanation": "Correct: (c). v = 0 + 2 × 5 = 10 m/s. (a) is the acceleration. (b) is the time. (d) multiplies 2 × 5 × 2."
    },
    {
      "q": "On a speed-time graph, what does the area under the line tell you?",
      "choices": [
        "The acceleration",
        "The distance travelled",
        "The mass",
        "The force"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Area under a speed-time graph is distance. (a) is the slope of the graph. (c) and (d) do not appear on this graph."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Motion: Distance, Speed, Velocity, and Acceleration: Quick Reference</h3>\n<p><strong>Core idea:</strong> Tell distance apart from displacement, and speed apart from velocity.</p>\n<p><strong>Key terms:</strong> Distance · Displacement · Speed · Velocity · Acceleration · Deceleration · Initial velocity (u) · Final velocity (v).</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Tell distance apart from displacement, and speed apart from velocity.</li>\n<li>Work out speed, distance, and time from each other.</li>\n<li>Work out acceleration from a change in velocity.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module’s main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
