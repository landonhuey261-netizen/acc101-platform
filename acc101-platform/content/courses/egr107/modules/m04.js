// egr107 - Module 4: Work, Energy, and Power
module.exports = {
  "number": 4,
  "slug": "work-energy-power",
  "title": "Work, Energy, and Power",
  "estTime": "3–4 hours",
  "objectives": [
    "Calculate work from force and distance, including work against gravity.",
    "Use kinetic and potential energy to solve motion problems without time.",
    "Apply conservation of mechanical energy to drops, lifts, and ramps.",
    "Calculate power from work and time, and from force times velocity.",
    "Explain efficiency and calculate it from input and output power."
  ],
  "sections": [
    {
      "heading": "Work: Force Times Distance",
      "html": "<p><p>Work is done when a force moves its point of application: W = F × d, in joules, when the force acts along the direction of motion. Pushing a crate 5 m with a steady 200 N does 200 × 5 = 1,000 J of work. Lifting a mass does work against gravity: W = mgh, where h is the height gained. Work is a transfer of energy, not a force — a large force that moves nothing does no work.</p></p>\n<p><p>If the force acts at an angle, only the part along the motion counts: W = Fd cos θ. Pulling a trolley with a rope at 30° to the horizontal, a 100 N pull over 10 m does 100 × 10 × cos 30° = 866 J. The rest of the pull presses the trolley into the floor instead of moving it. Always check the angle before multiplying.</p></p>\n"
    },
    {
      "heading": "Kinetic and Potential Energy",
      "html": "<p><p>A moving body carries kinetic energy: KE = ½mv². A 10 kg part moving at 4 m/s has KE = ½ × 10 × 16 = 80 J. Double the speed and the energy quadruples, because speed is squared — that is why high-speed crashes and fast-spinning parts are so dangerous. A raised body stores gravitational potential energy: PE = mgh. A 5 kg part raised 10 m stores 5 × 9.81 × 10 = 490.5 J.</p></p>\n<p><p>Energy lets you solve problems without knowing the time. A part dropped from 5 m hits the ground at a speed found from mgh = ½mv², so v = √(2gh) = √(2 × 9.81 × 5) = 9.9 m/s. The mass cancels out — a heavy part and a light part dropped from the same height hit at the same speed (ignoring air resistance).</p></p>\n"
    },
    {
      "heading": "Conservation of Energy and Efficiency",
      "html": "<p><p>Energy cannot be created or destroyed, only changed from one form to another. In a perfect world, the potential energy lost by a falling body becomes exactly its kinetic energy. In the real world, some energy becomes heat through friction, so the useful output is less than the input. Efficiency is useful output divided by input, times 100%.</p></p>\n<p><p>Example: a motor takes in 2,000 W of electrical power and delivers 1,700 W of mechanical power. Its efficiency is 1,700 ÷ 2,000 = 0.85, or 85%. The missing 300 W becomes heat in the motor windings. No machine is 100% efficient, and the lost energy always shows up as heat, noise, or vibration somewhere.</p></p>\n"
    },
    {
      "heading": "Power: How Fast Energy Moves",
      "html": "<p><p>Power is the rate of doing work: P = W ÷ t, in watts. Lifting the same load twice as fast needs twice the power. Power can also be written as force times velocity: P = Fv. A conveyor pushing a load with 500 N at 2 m/s needs 500 × 2 = 1,000 W of mechanical power. For rotating shafts, power is torque times angular velocity: P = Tω, which you will use constantly in the gear and belt modules.</p></p>\n<p><p>Example: a hoist lifts a 200 kg load 6 m in 10 s. Work = 200 × 9.81 × 6 = 11,772 J. Power = 11,772 ÷ 10 = 1,177 W, about 1.18 kW. With a motor efficiency of 80%, the electrical input must be 1,177 ÷ 0.80 = 1,471 W. Always divide by efficiency when working back from output to input.</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>Work = force × distance (along the motion), in joules.</li><li>KE = ½mv²; PE = mgh.</li><li>Energy is conserved; losses become heat.</li><li>Power = work ÷ time = force × velocity = torque × angular velocity.</li><li>Efficiency = useful output ÷ input.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Saying a force does work when nothing moves. No movement, no work — even if you are pushing hard.</p><p><strong>Common mistake:</strong> Multiplying by efficiency when you should divide. Output = input × efficiency, so input = output ÷ efficiency.</p><p><strong>Ready check:</strong> If you can find the power a hoist needs to lift a load in a given time, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Work",
      "def": "Energy transferred when a force moves its point of application: W = Fd, in joules."
    },
    {
      "term": "Joule (J)",
      "def": "The SI unit of work and energy: 1 J = 1 N·m."
    },
    {
      "term": "Kinetic energy",
      "def": "The energy of a moving body: KE = ½mv²."
    },
    {
      "term": "Potential energy",
      "def": "Stored energy from position: gravitational PE = mgh."
    },
    {
      "term": "Conservation of energy",
      "def": "Energy cannot be created or destroyed, only changed from one form to another."
    },
    {
      "term": "Power",
      "def": "The rate of doing work, in watts: P = W ÷ t = Fv = Tω."
    },
    {
      "term": "Watt (W)",
      "def": "The SI unit of power: 1 W = 1 J/s."
    },
    {
      "term": "Efficiency",
      "def": "Useful output divided by input, usually as a percentage."
    },
    {
      "term": "Torque",
      "def": "A twisting force, in N·m; power from a shaft is torque times angular velocity."
    },
    {
      "term": "Horsepower (hp)",
      "def": "An older power unit: 1 hp = 746 W."
    },
    {
      "term": "Heat loss",
      "def": "Energy that leaves a system as heat, usually through friction."
    },
    {
      "term": "Gravitational potential energy",
      "def": "Energy stored by raising a mass: PE = mgh."
    },
    {
      "term": "Mechanical energy",
      "def": "Kinetic plus potential energy of a body."
    },
    {
      "term": "Input power",
      "def": "The power supplied to a machine, before losses."
    }
  ],
  "video": {
    "title": "Energy, Momentum, or F = ma? How to Choose the Right Equation",
    "embedUrl": "https://www.youtube.com/embed/XQY2iBJDTcU",
    "note": "Three original dynamics problems solved three ways — force, work–energy, and impulse–momentum — so you learn which method to pick.",
    "more": [
      {
        "title": "General Physics Explained | Complete Masterclass",
        "url": "https://www.youtube.com/watch?v=58CRM_xHdc0"
      },
      {
        "title": "Episode 05 — Newton's Second Law",
        "url": "https://www.youtube.com/watch?v=EDC1BJTY06M"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A worker pushes a crate with 150 N over 8 m. How much work is done?</p>",
      "solution": "<p><strong>Answer:</strong> W = 150 × 8 = 1,200 J.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A 20 kg part moves at 6 m/s. What is its kinetic energy?</p>",
      "solution": "<p><strong>Answer:</strong> KE = ½ × 20 × 36 = 360 J.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A hoist lifts 100 kg by 4 m. How much work is done against gravity?</p>",
      "solution": "<p><strong>Answer:</strong> W = 100 × 9.81 × 4 = 3,924 J, about 3.9 kJ.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A part is dropped from 8 m. At what speed does it hit the ground? (Ignore air resistance.)</p>",
      "solution": "<p><strong>Answer:</strong> v = √(2 × 9.81 × 8) = √156.96 = 12.5 m/s.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A motor delivers 3,000 W of useful power from 3,750 W input. What is its efficiency?</p>",
      "solution": "<p><strong>Answer:</strong> Efficiency = 3,000 ÷ 3,750 = 0.80, or 80%.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A conveyor belt pushes a load with 400 N at 3 m/s. What mechanical power is needed?</p>",
      "solution": "<p><strong>Answer:</strong> P = Fv = 400 × 3 = 1,200 W, or 1.2 kW.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Work is calculated as:",
      "choices": [
        "force × time",
        "force × distance",
        "mass × velocity",
        "mass × acceleration"
      ],
      "answer": 1,
      "explanation": "Correct: (b). W = Fd. (a) force × time is impulse, not work. (c) is momentum. (d) is force itself."
    },
    {
      "q": "A 5 kg part moves at 4 m/s. Its kinetic energy is:",
      "choices": [
        "10 J",
        "20 J",
        "40 J",
        "80 J"
      ],
      "answer": 2,
      "explanation": "Correct: (c). KE = ½ × 5 × 16 = 40 J. (a) forgets the ½ and the square. (b) is ½ × 5 × 8, using speed instead of speed squared. (d) forgets the ½."
    },
    {
      "q": "A 2 kg book is raised 3 m. Its gain in potential energy is about:",
      "choices": [
        "6 J",
        "19.6 J",
        "58.9 J",
        "29.4 J"
      ],
      "answer": 2,
      "explanation": "Correct: (c). PE = 2 × 9.81 × 3 = 58.86 J. (a) is mass × height without g. (b) is one-third of the answer. (d) is ½ of it."
    },
    {
      "q": "Power is:",
      "choices": [
        "work ÷ time",
        "work × time",
        "force ÷ distance",
        "energy × mass"
      ],
      "answer": 0,
      "explanation": "Correct: (a). P = W ÷ t. (b) has the wrong operation. (c) is not a standard quantity. (d) is meaningless."
    },
    {
      "q": "A machine takes in 1,000 W and delivers 750 W. Its efficiency is:",
      "choices": [
        "25%",
        "75%",
        "133%",
        "750%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 750 ÷ 1,000 = 0.75 = 75%. (a) is the loss fraction. (c) divides the wrong way round. (d) mistakes watts for percent."
    },
    {
      "q": "Doubling the speed of a moving part changes its kinetic energy by a factor of:",
      "choices": [
        "2",
        "3",
        "4",
        "8"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Speed is squared in ½mv², so 2² = 4. (a) would be true if energy were linear in speed. (b) has no basis. (d) is 2³, the factor for volume, not energy."
    },
    {
      "q": "A hoist does 6,000 J of work in 12 s. What power does it use?",
      "choices": [
        "72,000 W",
        "500 W",
        "6,012 W",
        "12 W"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 6,000 ÷ 12 = 500 W. (a) multiplies instead of dividing. (c) adds the numbers. (d) is the time alone."
    },
    {
      "q": "A force of 200 N pushes a load at 2.5 m/s. The power is:",
      "choices": [
        "80 W",
        "500 W",
        "202.5 W",
        "1,250 W"
      ],
      "answer": 1,
      "explanation": "Correct: (b). P = Fv = 200 × 2.5 = 500 W. (a) divides force by speed. (c) adds them. (d) multiplies 200 by 6.25."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Work, Energy, and Power: Quick Reference</h3>\n<p><strong>Core idea:</strong> Calculate work from force and distance, including work against gravity.</p>\n<p><strong>Key terms:</strong> Work · Joule (J) · Kinetic energy · Potential energy · Conservation of energy · Power · Watt (W) · Efficiency.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Calculate work from force and distance, including work against gravity.</li>\n<li>Use kinetic and potential energy to solve motion problems without time.</li>\n<li>Apply conservation of mechanical energy to drops, lifts, and ramps.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
