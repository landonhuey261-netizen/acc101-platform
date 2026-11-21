// egr107 - Module 1: What Is Dynamics? Motion, Forces, and Units
module.exports = {
  "number": 1,
  "slug": "what-is-dynamics",
  "title": "What Is Dynamics? Motion, Forces, and Units",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what dynamics is and how it differs from statics.",
    "Use SI units correctly: metre, kilogram, second, newton, joule, watt.",
    "Convert between common engineering units, including hp to watts and psi to pascals.",
    "Draw a simple free-body diagram and name the forces on a part.",
    "Describe velocity, acceleration, force, and energy in plain words."
  ],
  "sections": [
    {
      "heading": "Dynamics: The Study of Moving Machines",
      "html": "<p><p>Dynamics is the study of how things move and why they move that way. Statics deals with things that stay still, like a bridge standing under its own weight. Dynamics deals with things that speed up, slow down, spin, or vibrate — a conveyor belt starting up, a robot arm swinging, a car braking. Most real machines live in the dynamics world, so this course is about predicting motion before you build the machine.</p></p>\n<p><p>Dynamics splits into two halves. Kinematics describes motion itself: how far, how fast, and how quickly speed changes, without asking what causes it. Kinetics connects motion to its causes: forces, torques, mass, and energy. You need both halves. Kinematics tells you a gear must spin at 400 revolutions per minute; kinetics tells you how much torque the motor must supply to get it there.</p></p>\n"
    },
    {
      "heading": "Units: The Language Every Engineer Must Share",
      "html": "<p><p>Engineers use SI units: length in metres (m), mass in kilograms (kg), time in seconds (s), force in newtons (N), energy in joules (J), and power in watts (W). One newton is the force that gives a 1 kg mass an acceleration of 1 m/s². One watt is one joule per second. Keep units attached to every number you write — a bare number is a mistake waiting to happen.</p></p>\n<p><p>American workshops still use horsepower and psi, so you must convert. One horsepower is 746 W, so a 5 hp motor is 5 × 746 = 3,730 W, about 3.7 kW. One psi is 6,895 Pa, so 100 psi is 100 × 6,895 = 689,500 Pa, about 690 kPa. Always show the conversion factor in your working, and check the answer makes sense: a car engine is tens of kilowatts, not tens of watts.</p></p>\n"
    },
    {
      "heading": "Free-Body Diagrams: Seeing the Forces",
      "html": "<p><p>A free-body diagram is a sketch of one part with every force on it drawn as an arrow. Weight pulls down from the centre of mass. A surface pushes back with a normal force. Friction opposes sliding. A cable pulls along its own line. Drawing the diagram first, before any maths, is the single best habit in dynamics — most wrong answers come from a forgotten force, not from bad arithmetic.</p></p>\n<p><p>Work through a trolley on a flat floor. Its weight is mg downward. The floor pushes up with the same size force if nothing accelerates vertically. A worker pushes it forward, and friction pushes back. If the push is bigger than friction, the trolley accelerates; if they balance, it rolls at steady speed. That balance of arrows is Newton's first law in picture form.</p></p>\n"
    },
    {
      "heading": "Speed, Acceleration, and Why They Are Not the Same",
      "html": "<p><p>Speed is how fast something moves; velocity is speed with a direction. Acceleration is the rate at which velocity changes, in m/s². A car cruising at a steady 30 m/s has zero acceleration even though it is moving fast. A car braking from 30 m/s to rest in 5 seconds has an acceleration of (0 − 30) ÷ 5 = −6 m/s² — the minus sign means it is slowing down in the direction of travel.</p></p>\n<p><p>Engineers also use revolutions per minute (rpm) for spinning parts. To use rpm in formulas, convert to radians per second: ω = 2πN ÷ 60. A shaft at 600 rpm spins at 2π × 600 ÷ 60 = 62.8 rad/s. Forgetting this conversion is one of the most common errors in power-transmission calculations, so write it out every time.</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>Dynamics predicts motion; kinematics describes it, kinetics explains it with forces.</li><li>SI units: m, kg, s, N, J, W. 1 hp = 746 W; 1 psi = 6,895 Pa.</li><li>Draw the free-body diagram before doing any maths.</li><li>Velocity has direction; acceleration is the rate of change of velocity.</li><li>Convert rpm to rad/s with ω = 2πN ÷ 60 before using it in formulas.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Mixing up mass and weight. Mass (kg) is how much stuff there is; weight (N) is the force of gravity on it, W = mg. A 10 kg part weighs 10 × 9.81 = 98.1 N on Earth.</p><p><strong>Common mistake:</strong> Dropping units mid-calculation and then guessing at the end. Keep the unit on every step.</p><p><strong>Ready check:</strong> If you can convert 3 hp to watts and sketch the forces on a trolley being pushed, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Dynamics",
      "def": "The study of how things move and what causes the motion."
    },
    {
      "term": "Kinematics",
      "def": "The description of motion — position, velocity, and acceleration — without considering forces."
    },
    {
      "term": "Kinetics",
      "def": "The study of motion together with the forces and torques that cause it."
    },
    {
      "term": "Statics",
      "def": "The study of bodies at rest or moving at steady velocity, where forces balance."
    },
    {
      "term": "Velocity",
      "def": "Speed with a direction, measured in m/s."
    },
    {
      "term": "Acceleration",
      "def": "The rate of change of velocity, measured in m/s²."
    },
    {
      "term": "Newton (N)",
      "def": "The SI unit of force: 1 N gives a 1 kg mass an acceleration of 1 m/s²."
    },
    {
      "term": "Joule (J)",
      "def": "The SI unit of energy and work: 1 J = 1 N·m."
    },
    {
      "term": "Watt (W)",
      "def": "The SI unit of power: 1 W = 1 J/s."
    },
    {
      "term": "Horsepower (hp)",
      "def": "An older power unit: 1 hp = 746 W."
    },
    {
      "term": "Free-body diagram",
      "def": "A sketch of one part showing every force on it as an arrow."
    },
    {
      "term": "Normal force",
      "def": "The push a surface exerts at right angles to itself on a body resting on it."
    },
    {
      "term": "Angular velocity",
      "def": "How fast a body spins, in radians per second (rad/s)."
    },
    {
      "term": "Mass",
      "def": "The amount of matter in a body, in kilograms; it resists acceleration."
    },
    {
      "term": "Weight",
      "def": "The force of gravity on a body: W = mg, in newtons."
    }
  ],
  "video": {
    "title": "General Physics Explained | Complete Masterclass",
    "embedUrl": "https://www.youtube.com/embed/58CRM_xHdc0",
    "note": "A full beginner physics masterclass covering forces, Newton's laws, work, energy, and momentum — watch the motion and forces sections to anchor this course.",
    "more": [
      {
        "title": "How to: Kinematics in One and Two Dimensions with Examples",
        "url": "https://www.youtube.com/watch?v=binsBcBvoBQ"
      },
      {
        "title": "Energy, Momentum, or F = ma? How to Choose the Right Equation",
        "url": "https://www.youtube.com/watch?v=XQY2iBJDTcU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Convert 3 hp to watts and to kilowatts. Show the conversion factor.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 1 hp = 746 W. Step 2: 3 × 746 = 2,238 W. Step 3: 2,238 ÷ 1,000 = 2.24 kW. Answer: 2,238 W, about 2.24 kW.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A pressure gauge reads 60 psi. Convert this to pascals and kilopascals.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 1 psi = 6,895 Pa. Step 2: 60 × 6,895 = 413,700 Pa. Step 3: ÷ 1,000 = 413.7 kPa. Answer: about 414 kPa.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 12 kg toolbox sits on a bench. What is its weight in newtons?</p>",
      "solution": "<p><strong>Answer:</strong> W = mg = 12 × 9.81 = 117.7 N, about 118 N downward. The bench pushes up with the same 118 N.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A shaft spins at 900 rpm. Convert this to rad/s.</p>",
      "solution": "<p><strong>Answer:</strong> ω = 2πN ÷ 60 = 2 × 3.1416 × 900 ÷ 60 = 94.2 rad/s.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A van travels at a steady 25 m/s for 40 s. How far does it go, and what is its acceleration?</p>",
      "solution": "<p><strong>Answer:</strong> Distance = 25 × 40 = 1,000 m (1 km). Acceleration is 0 m/s² because the velocity is not changing.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain in plain words the difference between kinematics and kinetics, with one machine example each.</p>",
      "solution": "<p><strong>Answer:</strong> Kinematics describes the motion (a robot arm tip moving at 2 m/s); kinetics explains it with forces (the motor torque needed to accelerate the arm). A good answer names both and gives a real example.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does 1 hp equal in watts?",
      "choices": [
        "100 W",
        "746 W",
        "1,000 W",
        "9.81 W"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 1 hp = 746 W exactly enough for engineering work. (a) 100 W is far too small. (c) 1,000 W is 1 kW, not 1 hp. (d) 9.81 is g, the acceleration of gravity, not a power conversion."
    },
    {
      "q": "A motor is rated 10 hp. What is its power in watts?",
      "choices": [
        "746 W",
        "7,460 W",
        "10,000 W",
        "98.1 W"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 10 × 746 = 7,460 W. (a) is 1 hp. (c) confuses hp with kW. (d) is unrelated — 98.1 N is the weight of a 10 kg mass."
    },
    {
      "q": "What is the weight of a 20 kg part on Earth?",
      "choices": [
        "20 N",
        "9.81 N",
        "196.2 N",
        "200 N"
      ],
      "answer": 2,
      "explanation": "Correct: (c). W = mg = 20 × 9.81 = 196.2 N. (a) mistakes mass for weight. (b) is g alone, without the mass. (d) rounds g to 10 and is close but not the value asked for with 9.81."
    },
    {
      "q": "A shaft spins at 600 rpm. What is its angular velocity in rad/s?",
      "choices": [
        "10 rad/s",
        "60 rad/s",
        "62.8 rad/s",
        "600 rad/s"
      ],
      "answer": 2,
      "explanation": "Correct: (c). ω = 2π × 600 ÷ 60 = 62.8 rad/s. (a) forgets the 2π. (b) is 600 ÷ 10, not the formula. (d) uses rpm as if it were rad/s."
    },
    {
      "q": "Which branch of dynamics describes motion without considering forces?",
      "choices": [
        "Kinetics",
        "Statics",
        "Kinematics",
        "Thermodynamics"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Kinematics describes position, velocity, and acceleration only. (a) Kinetics includes forces. (b) Statics is about balanced forces at rest. (d) Thermodynamics is about heat and energy, not motion description."
    },
    {
      "q": "A car slows from 20 m/s to 0 in 4 s. What is its acceleration?",
      "choices": [
        "−5 m/s²",
        "5 m/s²",
        "−20 m/s²",
        "0 m/s²"
      ],
      "answer": 0,
      "explanation": "Correct: (a). a = (0 − 20) ÷ 4 = −5 m/s²; the minus sign means slowing down. (b) has the wrong sign. (c) is the speed change without dividing by time. (d) would mean steady speed."
    },
    {
      "q": "Why draw a free-body diagram before calculating?",
      "choices": [
        "It makes the sketch look tidy",
        "It makes sure no force is forgotten before the maths starts",
        "It replaces the need for units",
        "It proves the part will not break"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The diagram lists every force so none is missed. (a) tidiness is not the point. (c) units are still needed. (d) a diagram alone proves nothing about strength."
    },
    {
      "q": "What is 150 psi in kilopascals (1 psi = 6,895 Pa)?",
      "choices": [
        "About 1,034 kPa",
        "About 150 kPa",
        "About 103 kPa",
        "About 6,895 kPa"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 150 × 6,895 = 1,034,250 Pa = 1,034 kPa. (b) mistakes psi for kPa. (c) is ten times too small. (d) is 1 psi in pascals, not 150 psi."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — What Is Dynamics? Motion, Forces, and Units: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what dynamics is and how it differs from statics.</p>\n<p><strong>Key terms:</strong> Dynamics · Kinematics · Kinetics · Statics · Velocity · Acceleration · Newton (N) · Joule (J).</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what dynamics is and how it differs from statics.</li>\n<li>Use SI units correctly: metre, kilogram, second, newton, joule, watt.</li>\n<li>Convert between common engineering units, including hp to watts and psi to pascals.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
