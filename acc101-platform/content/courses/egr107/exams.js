// egr107 — Midterm and Final exams.
// All questions are original to these exams (same topics as module quizzes, fresh scenarios and wording).
// Every explanation covers why the correct answer is right AND why each wrong choice is wrong.
module.exports = {
  "midterm": {
    "title": "Midterm Exam",
    "minutes": 75,
    "coverage": "Modules 1–6",
    "questions": [
      {
        "module": 1,
        "q": "A workshop motor is rated 2 hp. What is its power in watts?",
        "choices": [
          "1,492 W",
          "746 W",
          "2,000 W",
          "373 W"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 2 × 746 = 1,492 W. (b) is 1 hp. (c) confuses hp with watts directly. (d) is half of 1 hp."
      },
      {
        "module": 1,
        "q": "A gauge reads 200 psi. Using 1 psi = 6,895 Pa, what is the pressure in kPa?",
        "choices": [
          "About 1,379 kPa",
          "About 200 kPa",
          "About 34.5 kPa",
          "About 6,895 kPa"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 200 × 6,895 = 1,379,000 Pa = 1,379 kPa. (b) mistakes psi for kPa. (c) divides instead of multiplying. (d) is 1 psi in pascals."
      },
      {
        "module": 1,
        "q": "A 5 kg part weighs how much on Earth?",
        "choices": [
          "5 N",
          "49.05 N",
          "9.81 N",
          "50 N"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 5 × 9.81 = 49.05 N. (a) mistakes mass for weight. (c) is g alone. (d) rounds g to 10."
      },
      {
        "module": 1,
        "q": "A shaft spins at 300 rpm. What is its angular velocity?",
        "choices": [
          "5 rad/s",
          "31.4 rad/s",
          "300 rad/s",
          "1,885 rad/s"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 2π × 300 ÷ 60 = 31.4 rad/s. (a) forgets 2π. (c) uses rpm as rad/s. (d) multiplies by 2π twice."
      },
      {
        "module": 2,
        "q": "A trolley starts from rest and accelerates at 3 m/s² for 4 s. Its final speed is:",
        "choices": [
          "7 m/s",
          "12 m/s",
          "24 m/s",
          "3 m/s"
        ],
        "answer": 1,
        "explanation": "Correct: (b). v = 0 + 3 × 4 = 12 m/s. (a) adds acceleration and time. (c) is the distance (½ × 3 × 16 = 24 m). (d) is the acceleration."
      },
      {
        "module": 2,
        "q": "The same trolley (a = 3 m/s², t = 4 s, from rest) travels how far?",
        "choices": [
          "12 m",
          "24 m",
          "48 m",
          "4 m"
        ],
        "answer": 1,
        "explanation": "Correct: (b). s = ½ × 3 × 16 = 24 m. (a) is the final speed. (c) doubles the distance. (d) is the time."
      },
      {
        "module": 2,
        "q": "A forklift at 10 m/s brakes at −5 m/s². How far does it travel before stopping?",
        "choices": [
          "2 m",
          "5 m",
          "10 m",
          "50 m"
        ],
        "answer": 2,
        "explanation": "Correct: (c). v² = u² + 2as gives 0 = 100 − 10s, so s = 10 m. (a) divides 10 by 5 without squaring. (b) is the deceleration. (d) multiplies speed by deceleration."
      },
      {
        "module": 2,
        "q": "On a velocity-time graph, a horizontal line means:",
        "choices": [
          "Speeding up",
          "Slowing down",
          "Steady speed",
          "Stopped"
        ],
        "answer": 2,
        "explanation": "Correct: (c). A flat line means constant velocity. (a) is a rising line. (b) is a falling line. (d) would be a line on the zero axis, not just any horizontal line."
      },
      {
        "module": 3,
        "q": "A 25 kg crate accelerates at 2 m/s². The net force is:",
        "choices": [
          "12.5 N",
          "27 N",
          "50 N",
          "23 N"
        ],
        "answer": 2,
        "explanation": "Correct: (c). F = 25 × 2 = 50 N. (a) divides. (b) adds. (d) subtracts."
      },
      {
        "module": 3,
        "q": "A push of 500 N acts against 150 N of friction on a 70 kg trolley. Its acceleration is:",
        "choices": [
          "5 m/s²",
          "7.1 m/s²",
          "9.3 m/s²",
          "2.1 m/s²"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Net force 350 N ÷ 70 = 5 m/s². (b) uses the push alone. (c) adds push and friction. (d) uses friction alone."
      },
      {
        "module": 3,
        "q": "A 50 kg crate on a flat floor has μ = 0.25. The friction force is about:",
        "choices": [
          "12.25 N",
          "122.6 N",
          "490.5 N",
          "1,962 N"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Normal force 490.5 N × 0.25 = 122.6 N. (a) divides by 4 instead of multiplying by 0.25 after finding the weight. (c) is the normal force. (d) multiplies weight by 4."
      },
      {
        "module": 3,
        "q": "A 12 kg block on a 45° slope: the downhill pull of its weight is about:",
        "choices": [
          "58.9 N",
          "83.3 N",
          "117.7 N",
          "12 N"
        ],
        "answer": 1,
        "explanation": "Correct: (b). mg sin 45° = 12 × 9.81 × 0.707 = 83.3 N. (a) is mg sin 30°. (c) is the full weight. (d) is the mass."
      },
      {
        "module": 4,
        "q": "A worker pulls a crate with 120 N over 6 m. The work done is:",
        "choices": [
          "20 J",
          "126 J",
          "720 J",
          "2,000 J"
        ],
        "answer": 2,
        "explanation": "Correct: (c). W = 120 × 6 = 720 J. (a) divides. (b) adds. (d) is unrelated."
      },
      {
        "module": 4,
        "q": "A 8 kg part moves at 5 m/s. Its kinetic energy is:",
        "choices": [
          "20 J",
          "40 J",
          "100 J",
          "200 J"
        ],
        "answer": 2,
        "explanation": "Correct: (c). KE = ½ × 8 × 25 = 100 J. (a) is ½ × 8 × 5. (b) forgets the square. (d) forgets the ½."
      },
      {
        "module": 4,
        "q": "A 3 kg part is raised 6 m. Its potential energy gain is about:",
        "choices": [
          "18 J",
          "58.9 J",
          "176.6 J",
          "29.4 J"
        ],
        "answer": 2,
        "explanation": "Correct: (c). PE = 3 × 9.81 × 6 = 176.6 J. (a) is mass × height without g. (b) is one-third of the answer. (d) is one-sixth."
      },
      {
        "module": 4,
        "q": "A hoist does 9,000 J in 15 s. Its power is:",
        "choices": [
          "135,000 W",
          "600 W",
          "9,015 W",
          "15 W"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 9,000 ÷ 15 = 600 W. (a) multiplies. (c) adds. (d) is the time."
      },
      {
        "module": 5,
        "q": "A 3 kg part moves at 8 m/s. Its momentum is:",
        "choices": [
          "11 kg·m/s",
          "24 kg·m/s",
          "5 kg·m/s",
          "64 kg·m/s"
        ],
        "answer": 1,
        "explanation": "Correct: (b). p = 3 × 8 = 24 kg·m/s. (a) adds. (c) subtracts. (d) is 8²."
      },
      {
        "module": 5,
        "q": "A force of 40 N acts for 0.5 s. The impulse is:",
        "choices": [
          "80 N·s",
          "20 N·s",
          "40.5 N·s",
          "39.5 N·s"
        ],
        "answer": 1,
        "explanation": "Correct: (b). J = 40 × 0.5 = 20 N·s. (a) divides. (c) and (d) add or subtract."
      },
      {
        "module": 5,
        "q": "A 4 kg trolley at 5 m/s hits a stationary 6 kg trolley and they stick. Their speed after is:",
        "choices": [
          "1 m/s",
          "2 m/s",
          "5 m/s",
          "9 m/s"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Momentum 20 kg·m/s shared by 10 kg = 2 m/s. (a) divides by 20. (c) is the speed before. (d) adds the masses to the speed."
      },
      {
        "module": 5,
        "q": "In a perfectly elastic collision, which quantities are conserved?",
        "choices": [
          "Momentum only",
          "Kinetic energy only",
          "Both momentum and kinetic energy",
          "Neither"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Elastic means both are conserved. (a) is true of all collisions, but incomplete here. (b) is wrong — momentum is also conserved. (d) is wrong on both counts."
      },
      {
        "module": 6,
        "q": "A pulley of radius 0.4 m spins at 25 rad/s. Its rim speed is:",
        "choices": [
          "0.6 m/s",
          "10 m/s",
          "62.5 m/s",
          "25 m/s"
        ],
        "answer": 1,
        "explanation": "Correct: (b). v = 25 × 0.4 = 10 m/s. (a) divides. (c) divides speed by radius. (d) is the angular velocity."
      },
      {
        "module": 6,
        "q": "A 150 N force acts on a 0.3 m lever at right angles. The torque is:",
        "choices": [
          "45 N·m",
          "500 N·m",
          "150 N·m",
          "450 N·m"
        ],
        "answer": 0,
        "explanation": "Correct: (a). T = 150 × 0.3 = 45 N·m. (b) divides. (c) is the force. (d) multiplies by 3."
      },
      {
        "module": 6,
        "q": "A motor delivers 25 N·m at 80 rad/s. Its power is:",
        "choices": [
          "2,000 W",
          "320 W",
          "105 W",
          "0.31 W"
        ],
        "answer": 0,
        "explanation": "Correct: (a). P = 25 × 80 = 2,000 W. (b) divides torque by speed. (c) adds them. (d) divides the wrong way."
      },
      {
        "module": 6,
        "q": "A disc of mass 8 kg and radius 0.5 m has moment of inertia:",
        "choices": [
          "1.0 kg·m²",
          "2.0 kg·m²",
          "4.0 kg·m²",
          "0.5 kg·m²"
        ],
        "answer": 0,
        "explanation": "Correct: (a). I = ½ × 8 × 0.25 = 1.0 kg·m². (b) forgets the ½. (c) uses radius instead of radius squared. (d) is the radius alone."
      },
      {
        "module": 6,
        "q": "A drive needs 3 kW at 1,000 rpm. The torque the motor must supply is about:",
        "choices": [
          "28.6 N·m",
          "3,000 N·m",
          "3 N·m",
          "104.7 N·m"
        ],
        "answer": 0,
        "explanation": "Correct: (a). ω = 104.7 rad/s, T = 3,000 ÷ 104.7 = 28.6 N·m. (b) is the power in watts. (c) divides power by 1,000 without converting rpm. (d) is ω, not torque."
      }
    ]
  },
  "final": {
    "title": "Final Exam",
    "minutes": 120,
    "coverage": "Modules 1–12",
    "questions": [
      {
        "module": 1,
        "q": "A 4 hp motor produces how many watts?",
        "choices": [
          "746 W",
          "2,984 W",
          "4,000 W",
          "1,864 W"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 4 × 746 = 2,984 W. (a) is 1 hp. (c) confuses hp with watts. (d) is 2.5 hp."
      },
      {
        "module": 1,
        "q": "What is the weight of a 15 kg toolbox?",
        "choices": [
          "15 N",
          "147.2 N",
          "9.81 N",
          "150 N"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 15 × 9.81 = 147.2 N. (a) is the mass. (c) is g. (d) rounds g to 10."
      },
      {
        "module": 1,
        "q": "Which quantity has the unit kg·m/s?",
        "choices": [
          "Force",
          "Momentum",
          "Energy",
          "Power"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Momentum is mv, kg·m/s. (a) force is kg·m/s². (c) energy is kg·m²/s². (d) power is kg·m²/s³."
      },
      {
        "module": 2,
        "q": "A cart accelerates from 4 m/s to 16 m/s over 24 m. Its acceleration is:",
        "choices": [
          "3 m/s²",
          "5 m/s²",
          "0.5 m/s²",
          "12 m/s²"
        ],
        "answer": 1,
        "explanation": "Correct: (b). v² = u² + 2as gives 256 = 16 + 48a, so a = 240 ÷ 48 = 5 m/s². (a) uses 72 ÷ 24. (c) divides speed change by distance. (d) is the speed change."
      },
      {
        "module": 2,
        "q": "A stone is dropped from rest. After 2 s its speed is about:",
        "choices": [
          "9.81 m/s",
          "19.6 m/s",
          "4.9 m/s",
          "2 m/s"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 9.81 × 2 = 19.6 m/s. (a) is after 1 s. (c) is the distance fallen in 1 s. (d) is the time."
      },
      {
        "module": 2,
        "q": "A ball is thrown horizontally at 8 m/s from 1.25 m high. It lands about how far out?",
        "choices": [
          "0.5 m",
          "4.0 m",
          "8 m",
          "10 m"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Fall time t = √(2 × 1.25 ÷ 9.81) = 0.505 s; distance = 8 × 0.505 = 4.04 m. (a) is the fall time. (c) is the speed. (d) is speed × 1.25."
      },
      {
        "module": 3,
        "q": "A 60 kg crate needs a net force of 180 N. Its acceleration is:",
        "choices": [
          "3 m/s²",
          "10,800 m/s²",
          "0.33 m/s²",
          "240 m/s²"
        ],
        "answer": 0,
        "explanation": "Correct: (a). a = 180 ÷ 60 = 3 m/s². (b) multiplies. (c) divides mass by force. (d) adds."
      },
      {
        "module": 3,
        "q": "Push 700 N, friction 200 N, mass 50 kg. Acceleration is:",
        "choices": [
          "14 m/s²",
          "10 m/s²",
          "4 m/s²",
          "18 m/s²"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Net 500 N ÷ 50 = 10 m/s². (a) uses the push alone. (c) uses friction alone. (d) adds push and friction then divides."
      },
      {
        "module": 3,
        "q": "On a slope, the normal force equals:",
        "choices": [
          "mg",
          "mg sin θ",
          "mg cos θ",
          "μmg"
        ],
        "answer": 2,
        "explanation": "Correct: (c). The into-slope component is mg cos θ. (a) is the full weight, true only on flat ground. (b) is the downhill component. (d) is the friction force."
      },
      {
        "module": 4,
        "q": "A 6 kg part at 10 m/s has kinetic energy:",
        "choices": [
          "30 J",
          "60 J",
          "300 J",
          "600 J"
        ],
        "answer": 2,
        "explanation": "Correct: (c). KE = ½ × 6 × 100 = 300 J. (a) forgets the square. (b) is ½ × 6 × 20. (d) forgets the ½."
      },
      {
        "module": 4,
        "q": "A motor takes in 5,000 W and delivers 4,250 W. Its efficiency is:",
        "choices": [
          "85%",
          "118%",
          "15%",
          "750 W"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 4,250 ÷ 5,000 = 0.85. (b) divides the wrong way. (c) is the loss fraction. (d) is the loss in watts, not a percentage."
      },
      {
        "module": 4,
        "q": "A force of 300 N pushes a load at 4 m/s. The power is:",
        "choices": [
          "75 W",
          "1,200 W",
          "304 W",
          "1,500 W"
        ],
        "answer": 1,
        "explanation": "Correct: (b). P = 300 × 4 = 1,200 W. (a) divides. (c) adds. (d) multiplies by 5."
      },
      {
        "module": 5,
        "q": "A 0.2 kg ball at 25 m/s is caught in 0.1 s. The average force is:",
        "choices": [
          "50 N",
          "5 N",
          "250 N",
          "2.5 N"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Momentum 5 kg·m/s ÷ 0.1 s = 50 N. (b) is the momentum itself. (c) divides by 0.02. (d) divides momentum by 2."
      },
      {
        "module": 5,
        "q": "Two trolleys stick together after a collision. Kinetic energy after is:",
        "choices": [
          "Greater than before",
          "The same as before",
          "Less than before",
          "Zero"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Some energy becomes heat and deformation in an inelastic collision. (a) energy cannot grow. (b) is true only for elastic collisions. (d) they are still moving, so energy is not zero."
      },
      {
        "module": 5,
        "q": "A 10 kg part at 3 m/s and a 5 kg part at 6 m/s move the same way. Total momentum is:",
        "choices": [
          "60 kg·m/s",
          "30 kg·m/s",
          "45 kg·m/s",
          "90 kg·m/s"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 30 + 30 = 60 kg·m/s. (b) is one part alone. (c) averages them. (d) adds the speeds times the total mass."
      },
      {
        "module": 6,
        "q": "A wheel of radius 0.3 m spins at 10 rad/s. A point on the rim moves at:",
        "choices": [
          "3 m/s",
          "30 m/s",
          "0.03 m/s",
          "33.3 m/s"
        ],
        "answer": 0,
        "explanation": "Correct: (a). v = 10 × 0.3 = 3 m/s. (b) multiplies by 100. (c) divides. (d) divides speed by radius."
      },
      {
        "module": 6,
        "q": "A flywheel stores 800 J at 40 rad/s. Its moment of inertia is:",
        "choices": [
          "1.0 kg·m²",
          "0.5 kg·m²",
          "20 kg·m²",
          "2.0 kg·m²"
        ],
        "answer": 0,
        "explanation": "Correct: (a). KE = ½Iω² gives 800 = ½ × I × 1,600, so I = 1.0 kg·m². (b) forgets the ½. (c) divides 800 by 40. (d) doubles the answer."
      },
      {
        "module": 6,
        "q": "Torque 12 N·m at 150 rad/s gives power:",
        "choices": [
          "1,800 W",
          "12.5 W",
          "162 W",
          "0.08 W"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 12 × 150 = 1,800 W. (b) divides. (c) adds. (d) divides the wrong way."
      },
      {
        "module": 7,
        "q": "A four-bar has lengths 30, 50, 60, 80 mm (shortest 30, longest 80). Can a link rotate fully?",
        "choices": [
          "Yes, 30 + 80 = 110 < 50 + 60 = 110",
          "No, 30 + 80 = 110 is not less than 50 + 60 = 110",
          "Yes, because the crank is longest",
          "No, because the ground is fixed"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Grashof needs shortest + longest < other two; 110 is not less than 110, so no full rotation. (a) misreads the comparison as less-than. (c) crank length is not the test. (d) the ground being fixed is true but not the Grashof test."
      },
      {
        "module": 7,
        "q": "A slider-crank has a crank radius of 40 mm. The piston stroke is:",
        "choices": [
          "40 mm",
          "80 mm",
          "20 mm",
          "120 mm"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Stroke = 2 × 40 = 80 mm. (a) is the radius. (c) is half the radius. (d) is three times the radius."
      },
      {
        "module": 7,
        "q": "Which mechanism turns steady rotation into stepping motion?",
        "choices": [
          "Four-bar linkage",
          "Geneva mechanism",
          "Slider-crank",
          "Toggle clamp"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The Geneva drive indexes in steps. (a) gives continuous swinging motion. (c) gives reciprocating motion. (d) gives clamping force."
      },
      {
        "module": 8,
        "q": "A 30-tooth driver at 600 rpm drives a 90-tooth gear. Output speed is:",
        "choices": [
          "200 rpm",
          "1,800 rpm",
          "540 rpm",
          "30 rpm"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Ratio 3, 600 ÷ 3 = 200 rpm. (b) multiplies. (c) is 600 × 0.9. (d) is the driver teeth."
      },
      {
        "module": 8,
        "q": "Input torque 15 N·m, ratio 4. Ideal output torque is:",
        "choices": [
          "3.75 N·m",
          "15 N·m",
          "60 N·m",
          "19 N·m"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 15 × 4 = 60 N·m. (a) divides. (b) is unchanged. (d) adds."
      },
      {
        "module": 8,
        "q": "A compound train has stages 2:1 and 5:1. Overall ratio is:",
        "choices": [
          "7:1",
          "10:1",
          "2.5:1",
          "3:1"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 2 × 5 = 10. (a) adds. (c) divides. (d) adds and subtracts."
      },
      {
        "module": 8,
        "q": "Which gear is best for a large reduction in one step that must not back-drive?",
        "choices": [
          "Spur",
          "Helical",
          "Bevel",
          "Worm"
        ],
        "answer": 3,
        "explanation": "Correct: (d). A worm gives a big reduction and usually locks against back-driving. (a) spur gears give small reductions and back-drive freely. (b) helical gears also back-drive. (c) bevel gears change direction but do not lock."
      },
      {
        "module": 9,
        "q": "A cam's dwell is the part of the cycle where the follower:",
        "choices": [
          "Rises",
          "Falls",
          "Stays still",
          "Jumps"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Dwell means no motion at constant lift. (a) is the rise. (b) is the return. (d) jump is a fault, not a designed phase."
      },
      {
        "module": 9,
        "q": "Why use a roller follower instead of a flat follower?",
        "choices": [
          "It is cheaper",
          "It rolls on the cam, so friction and wear are lower",
          "It lifts higher",
          "It needs no spring"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Rolling beats sliding for wear. (a) rollers cost more. (c) lift is set by the cam. (d) a spring is still needed."
      },
      {
        "module": 9,
        "q": "A cam lifts 24 mm in 120°. The average lift per degree is:",
        "choices": [
          "0.2 mm",
          "2 mm",
          "0.5 mm",
          "24 mm"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 24 ÷ 120 = 0.2 mm per degree. (b) divides by 12. (c) divides by 48. (d) is the total lift."
      },
      {
        "module": 10,
        "q": "A 120 mm driver pulley at 900 rpm drives a 360 mm pulley. Output speed is:",
        "choices": [
          "300 rpm",
          "2,700 rpm",
          "1,080 rpm",
          "360 rpm"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 900 × 120 ÷ 360 = 300 rpm. (b) multiplies by the ratio. (c) is 900 × 1.2. (d) is the driven diameter."
      },
      {
        "module": 10,
        "q": "A 250 mm pulley at 480 rpm gives a belt speed of about:",
        "choices": [
          "6.28 m/s",
          "12.57 m/s",
          "120 m/s",
          "1.2 m/s"
        ],
        "answer": 0,
        "explanation": "Correct: (a). v = π × 0.25 × 480 ÷ 60 = 6.28 m/s. (b) uses a 500 mm diameter. (c) forgets to convert mm to m. (d) divides by 100."
      },
      {
        "module": 10,
        "q": "Which drive cannot slip and is used for exact engine timing?",
        "choices": [
          "Flat belt",
          "V-belt",
          "Timing belt",
          "Chain with a worn sprocket"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Its teeth mesh with the pulley. (a) and (b) rely on friction and can slip. (d) a worn chain can jump teeth."
      },
      {
        "module": 11,
        "q": "A bearing rated 12,000 hours at 800 N is loaded to 1,600 N. Its life is about:",
        "choices": [
          "12,000 hours",
          "6,000 hours",
          "1,500 hours",
          "24,000 hours"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Doubling load cuts life by 2³ = 8: 12,000 ÷ 8 = 1,500 hours. (a) ignores the load change. (b) assumes life halves. (d) has it backwards."
      },
      {
        "module": 11,
        "q": "Which bearing type is best for heavy radial loads?",
        "choices": [
          "Ball bearing",
          "Roller bearing",
          "Thrust bearing",
          "Plain bearing with no oil"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Rollers spread load over a line. (a) balls carry moderate loads. (c) thrust bearings carry axial load. (d) a plain bearing without oil fails at once."
      },
      {
        "module": 11,
        "q": "A maintenance log shows most bearings in a plant fail early, long before their rated life. What is the usual culprit?",
        "choices": ["Too little load", "Wrong or dirty lubricant", "Too slow a speed", "A shaft that is too short"],
        "answer": 1,
        "explanation": "Correct: (b). Wrong or dirty lubricant causes most early bearing failures. (a) light load rarely fails a bearing. (c) slow speed is not a killer. (d) shaft length is not a failure cause.",
      },
      {
        "module": 12,
        "q": "A load needs 500 W and the drive is 80% efficient. The motor must supply:",
        "choices": [
          "400 W",
          "500 W",
          "625 W",
          "900 W"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 500 ÷ 0.80 = 625 W. (a) multiplies by efficiency. (b) ignores losses. (d) adds 400 W."
      },
      {
        "module": 12,
        "q": "A drive has a belt stage of 95% and a gear stage of 95%. Combined efficiency is about:",
        "choices": [
          "95%",
          "90.3%",
          "190%",
          "100%"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 0.95 × 0.95 = 0.9025. (a) takes one stage only. (c) adds them. (d) ignores losses."
      },
      {
        "module": 12,
        "q": "A 1,440 rpm motor must drive a load at 180 rpm. The total reduction is:",
        "choices": [
          "8:1",
          "1,620:1",
          "1,260:1",
          "0.125:1"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 1,440 ÷ 180 = 8. (b) adds the speeds. (c) subtracts them. (d) divides the wrong way."
      },
      {
        "module": 12,
        "q": "In a drive-train design, the power balance check means:",
        "choices": [
          "Power in minus losses equals power out at every stage",
          "The motor is the biggest part",
          "All pulleys are the same size",
          "The guard is fitted"
        ],
        "answer": 0,
        "explanation": "Correct: (a). It proves the numbers tie out. (b) size is not a check. (c) equal pulleys give no reduction. (d) guarding is safety, not a power check."
      },
      {
        "module": 7,
        "q": "In a four-bar linkage, the link that connects the crank to the output link is the:",
        "choices": [
          "Ground",
          "Crank",
          "Coupler",
          "Rocker"
        ],
        "answer": 2,
        "explanation": "Correct: (c). The coupler connects crank to rocker. (a) the ground is fixed. (b) the crank is the input. (d) the rocker is the output."
      },
      {
        "module": 9,
        "q": "A cam must lift a follower 12 mm in 60° of rotation. The average lift per degree is:",
        "choices": [
          "0.2 mm",
          "0.5 mm",
          "2 mm",
          "12 mm"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 12 ÷ 60 = 0.2 mm per degree. (b) divides by 24. (c) divides by 6. (d) is the total lift."
      }
    ]
  }
};
