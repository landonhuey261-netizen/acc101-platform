// egr107 - Module 6: Rotational Motion, Torque, and Moment of Inertia
module.exports = {
  "number": 6,
  "slug": "rotational-motion-torque",
  "title": "Rotational Motion, Torque, and Moment of Inertia",
  "estTime": "3–4 hours",
  "objectives": [
    "Convert rpm to rad/s and relate linear and angular speed with v = ωr.",
    "Calculate torque from force and lever arm, including the angle.",
    "Use moment of inertia to find rotational kinetic energy and angular acceleration.",
    "Apply P = Tω to motors, shafts, and flywheels.",
    "Explain how a flywheel stores energy and smooths a machine's motion."
  ],
  "sections": [
    {
      "heading": "Angles, Angular Velocity, and v = ωr",
      "html": "<p><p>Rotation is measured in radians: one full turn is 2π radians, about 6.28. Angular velocity ω is in rad/s, and a point at radius r from the centre moves with linear speed v = ωr. A pulley of radius 0.2 m spinning at 30 rad/s has a rim speed of 30 × 0.2 = 6 m/s. Bigger radius at the same spin speed means faster rim speed — that is why belt speeds depend on pulley size.</p></p>\n<p><p>Angular acceleration α is the rate of change of ω, in rad/s². The same SUVAT-style equations work for rotation: ω = ω₀ + αt, and angle turned θ = ω₀t + ½αt². A motor that spins up from rest to 60 rad/s in 3 s has α = 20 rad/s² and turns through ½ × 20 × 9 = 90 rad, about 14.3 turns.</p></p>\n"
    },
    {
      "heading": "Torque: The Twist That Turns Things",
      "html": "<p><p>Torque is force times lever arm: T = F × r, in newton-metres, when the force acts at right angles to the arm. A 200 N force on a 0.25 m spanner gives 200 × 0.25 = 50 N·m of torque. If the force acts at an angle, only the perpendicular part counts: T = Fr sin θ. Torque is what a motor must supply to accelerate a load or to overcome a resisting load.</p></p>\n<p><p>Torque and force are linked through radius: the same torque gives a bigger force on a smaller radius. That is why a small pinion can push hard on a large gear, and why a long spanner makes a tight bolt easier to undo. Always check whether a problem gives you torque or force — they are related, but they are not the same thing.</p></p>\n"
    },
    {
      "heading": "Moment of Inertia: Rotational Mass",
      "html": "<p><p>Just as mass resists linear acceleration, moment of inertia I resists angular acceleration: T = Iα. A solid disc has I = ½mr², a thin hoop has I = mr², and a solid sphere has I = ⅖mr². Mass far from the axis counts for more, which is why flywheels are built as heavy rims — the same mass stores more energy out at the edge.</p></p>\n<p><p>Example: a flywheel disc of mass 20 kg and radius 0.3 m has I = ½ × 20 × 0.09 = 0.9 kg·m². To accelerate it at 10 rad/s² needs torque T = 0.9 × 10 = 9 N·m. Its rotational kinetic energy at 50 rad/s is KE = ½Iω² = ½ × 0.9 × 2,500 = 1,125 J. That stored energy is what keeps a press or an engine turning smoothly between power strokes.</p></p>\n"
    },
    {
      "heading": "Power From a Spinning Shaft: P = Tω",
      "html": "<p><p>Power from a rotating shaft is torque times angular velocity: P = Tω. A motor delivering 50 N·m at 100 rad/s produces 5,000 W, or 5 kW — about 6.7 hp (5,000 ÷ 746). This one equation connects the motor catalogue (torque and speed) to the job (power), and it is the key to sizing every drive in this course.</p></p>\n<p><p>Example: a conveyor drive needs 2 kW at a shaft speed of 1,500 rpm. First convert: ω = 2π × 1,500 ÷ 60 = 157.1 rad/s. Then torque is T = P ÷ ω = 2,000 ÷ 157.1 = 12.7 N·m. If the load needs more torque than that, the motor will stall or overheat — so check torque, not just power, when choosing a motor.</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>ω = 2πN ÷ 60; v = ωr at the rim.</li><li>Torque T = Fr (perpendicular force times radius), in N·m.</li><li>T = Iα, like F = ma for rotation.</li><li>Rotational KE = ½Iω²; shaft power P = Tω.</li><li>Flywheels store energy as ½Iω² and smooth out jerky loads.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Using rpm directly in P = Tω. Convert to rad/s first, or the power will be about 10 times too big.</p><p><strong>Common mistake:</strong> Confusing torque (N·m) with work (J). They share units but torque is a twist and work is energy transferred.</p><p><strong>Ready check:</strong> If you can find the torque a motor needs from its power and speed, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Radian",
      "def": "The SI unit of angle: one full turn is 2π radians."
    },
    {
      "term": "Angular velocity (ω)",
      "def": "How fast a body spins, in rad/s."
    },
    {
      "term": "Angular acceleration (α)",
      "def": "The rate of change of angular velocity, in rad/s²."
    },
    {
      "term": "Torque",
      "def": "A twisting effort: T = Fr, in N·m."
    },
    {
      "term": "Moment of inertia (I)",
      "def": "A body's resistance to angular acceleration; it depends on mass and how far the mass is from the axis."
    },
    {
      "term": "Rotational kinetic energy",
      "def": "Energy of a spinning body: KE = ½Iω²."
    },
    {
      "term": "Flywheel",
      "def": "A heavy spinning disc that stores energy and smooths out speed changes."
    },
    {
      "term": "Lever arm",
      "def": "The perpendicular distance from the axis to the line of a force."
    },
    {
      "term": "rpm",
      "def": "Revolutions per minute; convert to rad/s with ω = 2πN ÷ 60."
    },
    {
      "term": "Shaft power",
      "def": "Power carried by a spinning shaft: P = Tω."
    },
    {
      "term": "Radius",
      "def": "Distance from the centre of rotation to the rim."
    },
    {
      "term": "Stall",
      "def": "When a motor cannot turn its load because the torque needed is too large."
    },
    {
      "term": "Inertia",
      "def": "Resistance to a change in motion — linear for mass, rotational for moment of inertia."
    },
    {
      "term": "Angular displacement",
      "def": "The angle a body has turned through, in radians."
    }
  ],
  "video": {
    "title": "Rigid Body Rotation Dynamics | Angular Velocity & Point Acceleration Step by Step",
    "embedUrl": "https://www.youtube.com/embed/m9A0F2cMOzM",
    "note": "Rigid-body rotation worked step by step: angular velocity, tangential and normal acceleration of a point on a rotating body.",
    "more": [
      {
        "title": "Slider-Crank Mechanism: Piston Position, Velocity & Acceleration",
        "url": "https://www.youtube.com/watch?v=6STFvhqOtjw"
      },
      {
        "title": "How to: Kinematics in One and Two Dimensions with Examples",
        "url": "https://www.youtube.com/watch?v=binsBcBvoBQ"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A pulley of radius 0.15 m spins at 40 rad/s. What is the rim speed?</p>",
      "solution": "<p><strong>Answer:</strong> v = 40 × 0.15 = 6 m/s.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A 300 N force is applied at right angles to a 0.4 m lever. What torque is produced?</p>",
      "solution": "<p><strong>Answer:</strong> T = 300 × 0.4 = 120 N·m.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A motor delivers 40 N·m at 120 rad/s. What power does it produce, in kW and hp?</p>",
      "solution": "<p><strong>Answer:</strong> P = 40 × 120 = 4,800 W = 4.8 kW. In hp: 4,800 ÷ 746 = 6.43 hp, about 6.4 hp.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A disc flywheel has mass 10 kg and radius 0.25 m. Find its moment of inertia.</p>",
      "solution": "<p><strong>Answer:</strong> I = ½ × 10 × 0.0625 = 0.3125 kg·m², about 0.31 kg·m².</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> The same flywheel spins at 60 rad/s. How much kinetic energy does it store?</p>",
      "solution": "<p><strong>Answer:</strong> KE = ½ × 0.3125 × 3,600 = 562.5 J, about 563 J.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A drive needs 1.5 kW at 750 rpm. What torque must the motor supply?</p>",
      "solution": "<p><strong>Answer:</strong> ω = 2π × 750 ÷ 60 = 78.54 rad/s. T = 1,500 ÷ 78.54 = 19.1 N·m.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A shaft at 1,200 rpm spins at what angular velocity?",
      "choices": [
        "20 rad/s",
        "125.7 rad/s",
        "1,200 rad/s",
        "75.4 rad/s"
      ],
      "answer": 1,
      "explanation": "Correct: (b). ω = 2π × 1,200 ÷ 60 = 125.7 rad/s. (a) is 1,200 ÷ 60 without 2π. (c) uses rpm as rad/s. (d) is the value for 720 rpm."
    },
    {
      "q": "A pulley radius 0.25 m spins at 20 rad/s. Rim speed is:",
      "choices": [
        "0.8 m/s",
        "5 m/s",
        "80 m/s",
        "20 m/s"
      ],
      "answer": 1,
      "explanation": "Correct: (b). v = 20 × 0.25 = 5 m/s. (a) divides. (c) multiplies 20 by 4. (d) is the angular velocity, not the rim speed."
    },
    {
      "q": "Torque from a 100 N force on a 0.5 m arm at right angles is:",
      "choices": [
        "50 N·m",
        "200 N·m",
        "100 N·m",
        "500 N·m"
      ],
      "answer": 0,
      "explanation": "Correct: (a). T = 100 × 0.5 = 50 N·m. (b) divides force by radius. (c) is the force alone. (d) multiplies by 5."
    },
    {
      "q": "A motor gives 50 N·m at 100 rad/s. Its power is:",
      "choices": [
        "5,000 W",
        "500 W",
        "50 W",
        "0.5 W"
      ],
      "answer": 0,
      "explanation": "Correct: (a). P = 50 × 100 = 5,000 W. (b) is ten times too small. (c) is the torque alone. (d) divides."
    },
    {
      "q": "Moment of inertia is the rotational equivalent of:",
      "choices": [
        "Force",
        "Mass",
        "Velocity",
        "Energy"
      ],
      "answer": 1,
      "explanation": "Correct: (b). I resists angular acceleration as mass resists linear acceleration. (a) is the cause, not the resistance. (c) is the result of motion. (d) is what motion carries."
    },
    {
      "q": "Rotational kinetic energy is:",
      "choices": [
        "½Iω²",
        "Iω",
        "½mv²",
        "Tω"
      ],
      "answer": 0,
      "explanation": "Correct: (a). KE = ½Iω². (b) is angular momentum, not energy. (c) is linear kinetic energy. (d) is power, not energy."
    },
    {
      "q": "A flywheel's main job in a machine is to:",
      "choices": [
        "Increase the speed",
        "Store energy and smooth out speed changes",
        "Reduce the mass",
        "Change the direction of rotation"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It absorbs energy when power is high and gives it back when power is low. (a) it does not add speed. (c) it adds mass by design. (d) direction is changed by gears, not flywheels."
    },
    {
      "q": "To get more torque from the same force, you should:",
      "choices": [
        "Use a shorter lever arm",
        "Use a longer lever arm",
        "Push at a smaller angle",
        "Reduce the radius"
      ],
      "answer": 1,
      "explanation": "Correct: (b). T = Fr, so a longer arm gives more torque. (a) reduces torque. (c) reduces the perpendicular part. (d) also reduces torque."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Rotational Motion, Torque, and Moment of Inertia: Quick Reference</h3>\n<p><strong>Core idea:</strong> Convert rpm to rad/s and relate linear and angular speed with v = ωr.</p>\n<p><strong>Key terms:</strong> Radian · Angular velocity (ω) · Angular acceleration (α) · Torque · Moment of inertia (I) · Rotational kinetic energy · Flywheel · Lever arm.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Convert rpm to rad/s and relate linear and angular speed with v = ωr.</li>\n<li>Calculate torque from force and lever arm, including the angle.</li>\n<li>Use moment of inertia to find rotational kinetic energy and angular acceleration.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
