// egr290 — Engineering Capstone practice exams. Original questions in the real exams' style/format.
module.exports = {
  "fe-mechanical": {
    "title": "FE Mechanical Practice Exam",
    "minutes": 320,
    "passPercent": 70,
    "coverage": "100 original questions in the real exam's style, spanning the FE Mechanical domains: mathematics, probability and statistics, ethics and professional practice, engineering economics, statics, dynamics, mechanics of materials, fluid mechanics, thermodynamics, heat transfer, mechanical design, and materials. Practice benchmark only: the real FE Mechanical exam is 110 questions (100 scored and 10 unscored) in 5 hours 20 minutes of testing, costs $225, and NCEES publishes no passing score — results are pass/fail only — so the 70% used here is a practice benchmark only, never the real pass mark.",
    "questions": [
      {
        "module": 1,
        "q": "How many questions are on the real FE exam, and how many are scored?",
        "choices": [
          "100 questions, all scored",
          "110 questions, 100 scored and 10 unscored",
          "120 questions, 110 scored",
          "90 questions, all scored"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The real FE has 110 questions: 100 scored and 10 unscored trial questions. (a) is wrong: there are 110 questions, not 100. (c) is wrong: the total is 110, not 120. (d) is wrong: the real exam is 110 questions."
      },
      {
        "module": 1,
        "q": "How much testing time does the real FE exam allow?",
        "choices": [
          "4 hours",
          "5 hours 20 minutes",
          "6 hours",
          "3 hours"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The 6-hour appointment includes a tutorial and a break; actual testing time is 5 hours 20 minutes. (a) is wrong: that is too short. (c) is wrong: 6 hours is the whole appointment, not the testing time. (d) is wrong: that is the CSWA length."
      },
      {
        "module": 1,
        "q": "A candidate books the FE exam twice (failing once). The fee is $225 each time. How much do the two fees total?",
        "choices": [
          "$225",
          "$450",
          "$324",
          "$550"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Two fees at $225 each total $450. (a) is wrong: that is one fee. (c) is wrong: that is $225 plus a typically-$99 CSWA voucher. (d) is wrong: that is too much."
      },
      {
        "module": 1,
        "q": "What were the 2024 first-time FE pass rates for Mechanical and for Electrical & Computer?",
        "choices": [
          "68% Mechanical, 62% Electrical & Computer",
          "62% Mechanical, 68% Electrical & Computer",
          "75% for both",
          "50% for both"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 2024 first-time pass rates were 68% Mechanical and 62% Electrical & Computer. (b) is wrong: the two figures are swapped. (c) is wrong: neither rate was 75%. (d) is wrong: both rates were well above 50%."
      },
      {
        "module": 1,
        "q": "What does NCEES publish as the FE passing score?",
        "choices": [
          "70%",
          "Nothing — results are pass/fail only",
          "165 out of 240",
          "675 on a 100–900 scale"
        ],
        "answer": 1,
        "explanation": "Correct: (b). NCEES publishes no passing score; FE results are pass/fail only. (a) is wrong: 70% is this course's practice benchmark only. (c) is wrong: that is the CSWA pass mark. (d) is wrong: that is a CompTIA A+ scaled score."
      },
      {
        "module": 1,
        "q": "Convert 250 lb of force to newtons (1 lb = 4.448 N).",
        "choices": [
          "1,112 N",
          "2,224 N",
          "556 N",
          "11,120 N"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 250 × 4.448 = 1,112 N. (b) is wrong: that is 500 lb. (c) is wrong: that is 125 lb. (d) is wrong: that is ten times too large."
      },
      {
        "module": 1,
        "q": "What is the determinant of [[3, 2], [1, 4]]?",
        "choices": [
          "10",
          "14",
          "5",
          "0"
        ],
        "answer": 0,
        "explanation": "Correct: (a). det = 3×4 − 2×1 = 12 − 2 = 10. (b) is wrong: that is 12 + 2. (c) is wrong: that is 12 − 7. (d) is wrong: the determinant is 10, not zero."
      },
      {
        "module": 1,
        "q": "What is the value of ∫₀³ 2x dx?",
        "choices": [
          "6",
          "9",
          "3",
          "18"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The antiderivative is x², so 9 − 0 = 9. (a) is wrong: that is 2 × 3, not the integral. (c) is wrong: that is the upper limit. (d) is wrong: that is 2 × 9."
      },
      {
        "module": 1,
        "q": "The solution of dy/dx = 3x² is:",
        "choices": [
          "y = 3x + C",
          "y = x³ + C",
          "y = 6x + C",
          "y = x² + C"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Integrating 3x² gives x³ + C. (a) is wrong: that is the integral of 3. (c) is wrong: that is the derivative of 3x². (d) is wrong: that is the integral of 2x."
      },
      {
        "module": 1,
        "q": "What is the mean of 10, 20, and 30?",
        "choices": [
          "15",
          "20",
          "25",
          "30"
        ],
        "answer": 1,
        "explanation": "Correct: (b). (10 + 20 + 30)/3 = 60/3 = 20. (a) is wrong: that is 45/3. (c) is wrong: that is 75/3. (d) is wrong: that is the largest value, not the mean."
      },
      {
        "module": 1,
        "q": "A value of 85 comes from a normal distribution with mean 70 and standard deviation 15. What is its z-score?",
        "choices": [
          "0.5",
          "1",
          "1.5",
          "2"
        ],
        "answer": 1,
        "explanation": "Correct: (b). z = (85 − 70)/15 = 1. (a) is wrong: that would need a value of 77.5. (c) is wrong: that would need a value of 92.5. (d) is wrong: that would need a value of 100."
      },
      {
        "module": 1,
        "q": "For two independent events A and B, P(A and B) equals:",
        "choices": [
          "P(A) + P(B)",
          "P(A) × P(B)",
          "P(A) − P(B)",
          "P(A) / P(B)"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Independent events multiply: P(A and B) = P(A) × P(B). (a) is wrong: that is for mutually exclusive events (P(A or B)). (c) is wrong: probabilities do not subtract this way. (d) is wrong: probabilities do not divide this way."
      },
      {
        "module": 2,
        "q": "A simply supported beam spans 6 m. A 20 kN load acts 2 m from the left support. What is the reaction at the right support?",
        "choices": [
          "13.33 kN",
          "6.67 kN",
          "20 kN",
          "10 kN"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Moments about A: R_B = 20 × 2/6 = 6.67 kN. (a) is wrong: 13.33 kN is the left reaction. (c) is wrong: that is the whole load. (d) is wrong: that is half the load."
      },
      {
        "module": 2,
        "q": "For the same beam (6 m span, 20 kN at 2 m from A), what is the maximum bending moment?",
        "choices": [
          "13.33 kN·m",
          "26.67 kN·m",
          "40 kN·m",
          "20 kN·m"
        ],
        "answer": 1,
        "explanation": "Correct: (b). M = R_A × 2 = 13.33 × 2 = 26.67 kN·m. (a) is wrong: that is R_A alone. (c) is wrong: that is 20 × 2. (d) is wrong: that is the load times 1 m."
      },
      {
        "module": 2,
        "q": "Which support provides a moment reaction?",
        "choices": [
          "Pin",
          "Roller",
          "Fixed",
          "Cable"
        ],
        "answer": 2,
        "explanation": "Correct: (c). A fixed support resists forces and a moment. (a) is wrong: a pin has two force reactions, no moment. (b) is wrong: a roller has one force reaction. (d) is wrong: a cable carries tension only."
      },
      {
        "module": 2,
        "q": "A truss member that pushes into its joint is in:",
        "choices": [
          "Tension",
          "Compression",
          "Bending",
          "Torsion"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Pushing into the joint means compression. (a) is wrong: tension pulls away from the joint. (c) is wrong: truss members carry axial force, not bending. (d) is wrong: torsion is twisting, not axial force."
      },
      {
        "module": 2,
        "q": "A block weighs 500 N on a surface with μ_s = 0.4. What horizontal force starts it moving?",
        "choices": [
          "125 N",
          "200 N",
          "500 N",
          "20 N"
        ],
        "answer": 1,
        "explanation": "Correct: (b). F = 0.4 × 500 = 200 N. (a) is wrong: that is 0.25 × 500. (c) is wrong: that is the weight, not the friction force. (d) is wrong: that is far too small."
      },
      {
        "module": 2,
        "q": "Where is the centroid of a triangle, measured from its base?",
        "choices": [
          "At h/2",
          "At h/3",
          "At h/4",
          "At the apex"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A triangle's centroid is one-third of its height from the base. (a) is wrong: that is the centroid of a rectangle. (c) is wrong: that is not the centroid. (d) is wrong: the apex is the top vertex."
      },
      {
        "module": 2,
        "q": "A body moves at 20 m/s on a circle of radius 10 m. What is its centripetal acceleration?",
        "choices": [
          "2 m/s²",
          "20 m/s²",
          "40 m/s²",
          "200 m/s²"
        ],
        "answer": 2,
        "explanation": "Correct: (c). a = v²/r = 400/10 = 40 m/s². (a) is wrong: that is v/r, the angular velocity. (b) is wrong: that is v alone. (d) is wrong: that is v²/2."
      },
      {
        "module": 2,
        "q": "A 4 kg mass moves at 5 m/s. What is its kinetic energy?",
        "choices": [
          "20 J",
          "50 J",
          "100 J",
          "10 J"
        ],
        "answer": 1,
        "explanation": "Correct: (b). KE = ½ × 4 × 25 = 50 J. (a) is wrong: that is mv. (c) is wrong: that is mv², forgetting the ½. (d) is wrong: that is far too small."
      },
      {
        "module": 2,
        "q": "A 50 N force pushes a box 8 m in the direction of motion. How much work is done?",
        "choices": [
          "400 J",
          "58 J",
          "6.25 J",
          "40 J"
        ],
        "answer": 0,
        "explanation": "Correct: (a). W = 50 × 8 = 400 J. (b) is wrong: that is 50 + 8. (c) is wrong: that is 50/8. (d) is wrong: that is 50 × 0.8."
      },
      {
        "module": 2,
        "q": "A 2 kg mass moves at 6 m/s. What is its momentum?",
        "choices": [
          "3 kg·m/s",
          "12 kg·m/s",
          "36 kg·m/s",
          "8 kg·m/s"
        ],
        "answer": 1,
        "explanation": "Correct: (b). p = 2 × 6 = 12 kg·m/s. (a) is wrong: that is 6/2. (c) is wrong: that is mv²/2, the kinetic energy. (d) is wrong: that is 2 + 6."
      },
      {
        "module": 3,
        "q": "A 60 kN force acts on a bar of 200 mm² cross-section. What is the stress?",
        "choices": [
          "120 MPa",
          "300 MPa",
          "30 MPa",
          "12 MPa"
        ],
        "answer": 1,
        "explanation": "Correct: (b). σ = 60,000/200 = 300 MPa. (a) is wrong: that is 60,000/500. (c) is wrong: that is 60,000/2,000. (d) is wrong: that is 60,000/5,000."
      },
      {
        "module": 3,
        "q": "A steel bar at 300 MPa has E = 200 GPa. What is its strain?",
        "choices": [
          "0.0015",
          "0.015",
          "0.00015",
          "0.15"
        ],
        "answer": 0,
        "explanation": "Correct: (a). ε = σ/E = 300 × 10⁶/200 × 10⁹ = 0.0015. (b) is wrong: that is ten times too large. (c) is wrong: that is ten times too small. (d) is wrong: that is a hundred times too large."
      },
      {
        "module": 3,
        "q": "A bar stretches axially by 0.002. With Poisson's ratio 0.3, what is the lateral strain?",
        "choices": [
          "0.0006 contraction",
          "0.006 expansion",
          "0.002 expansion",
          "0.0006 expansion"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Lateral strain = 0.3 × 0.002 = 0.0006, and it is a contraction. (b) is wrong: that is ten times too large and the wrong direction. (c) is wrong: that is the axial strain, not the lateral one. (d) is wrong: lateral strain is a contraction, not an expansion."
      },
      {
        "module": 3,
        "q": "An aluminium bar (E = 70 GPa, α = 23 × 10⁻⁶/°C) is heated 40 °C while fully restrained. What thermal stress develops?",
        "choices": [
          "64.4 MPa",
          "6.44 MPa",
          "644 MPa",
          "16.1 MPa"
        ],
        "answer": 0,
        "explanation": "Correct: (a). σ = 70 × 10⁹ × 23 × 10⁻⁶ × 40 = 64.4 × 10⁶ Pa = 64.4 MPa. (b) is wrong: that is ten times too small. (c) is wrong: that is ten times too large. (d) is wrong: that is a quarter of the value."
      },
      {
        "module": 3,
        "q": "A solid shaft 30 mm in diameter carries 100 N·m of torque. What is the maximum shear stress?",
        "choices": [
          "18.9 MPa",
          "9.4 MPa",
          "37.7 MPa",
          "1.89 MPa"
        ],
        "answer": 0,
        "explanation": "Correct: (a). J = π(0.03)⁴/32 = 7.95 × 10⁻⁸ m⁴; τ = 100 × 0.015/7.95 × 10⁻⁸ = 18.9 MPa. (b) is wrong: that is half — it uses the radius as the diameter. (c) is wrong: that doubles it. (d) is wrong: that is ten times too small."
      },
      {
        "module": 3,
        "q": "A rectangular beam 80 mm wide and 160 mm deep carries a bending moment of 12 kN·m. What is the maximum bending stress?",
        "choices": [
          "35.2 MPa",
          "17.6 MPa",
          "70.3 MPa",
          "3.52 MPa"
        ],
        "answer": 0,
        "explanation": "Correct: (a). I = 0.08 × 0.16³/12 = 2.73 × 10⁻⁵ m⁴, c = 0.08 m, σ = 12,000 × 0.08/2.73 × 10⁻⁵ = 35.2 MPa. (b) is wrong: that is half. (c) is wrong: that doubles it. (d) is wrong: that is ten times too small."
      },
      {
        "module": 3,
        "q": "In the FE sign convention, the first law for a closed system is:",
        "choices": [
          "ΔU = Q + W",
          "ΔU = Q − W",
          "ΔU = W − Q",
          "ΔU = Q × W"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The FE Reference Handbook uses ΔU = Q − W, with W the work done by the system. (a) is wrong: that is the chemistry convention. (c) is wrong: that reverses the signs. (d) is wrong: energy terms add and subtract, they do not multiply."
      },
      {
        "module": 3,
        "q": "A system receives 500 kJ of heat and does 200 kJ of work. What is the change in internal energy (FE sign convention)?",
        "choices": [
          "700 kJ",
          "300 kJ",
          "−300 kJ",
          "100 kJ"
        ],
        "answer": 1,
        "explanation": "Correct: (b). ΔU = Q − W = 500 − 200 = 300 kJ. (a) is wrong: that adds heat and work. (c) is wrong: that is the chemistry-convention answer. (d) is wrong: that is (500 − 200)/3."
      },
      {
        "module": 3,
        "q": "A tank holds 0.8 m³ of air at 150 kPa and 350 K (R = 0.287 kJ/kg·K). What is the mass of air?",
        "choices": [
          "1.19 kg",
          "2.38 kg",
          "0.60 kg",
          "11.9 kg"
        ],
        "answer": 0,
        "explanation": "Correct: (a). m = (150 × 0.8)/(0.287 × 350) = 120/100.45 = 1.19 kg. (b) is wrong: that doubles the volume. (c) is wrong: that halves the volume. (d) is wrong: that is ten times too large."
      },
      {
        "module": 3,
        "q": "How much heat is needed to raise 2 kg of air by 30 K at constant volume (c_v = 0.718 kJ/kg·K)?",
        "choices": [
          "43.1 kJ",
          "21.5 kJ",
          "86.2 kJ",
          "4.31 kJ"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Q = 2 × 0.718 × 30 = 43.08 kJ. (b) is wrong: that is for 1 kg. (c) is wrong: that is for 4 kg. (d) is wrong: that is ten times too small."
      },
      {
        "module": 3,
        "q": "What is the Carnot efficiency of an engine working between 900 K and 400 K?",
        "choices": [
          "44.4%",
          "55.6%",
          "66.7%",
          "25%"
        ],
        "answer": 1,
        "explanation": "Correct: (b). η = 1 − 400/900 = 0.556 = 55.6%. (a) is wrong: that is T_C/T_H. (c) is wrong: that is 1 − 300/900. (d) is wrong: that is not the Carnot value here."
      },
      {
        "module": 3,
        "q": "A heat engine takes 800 kJ of heat and does 240 kJ of work. What is its efficiency, and how much heat is rejected?",
        "choices": [
          "30%, 560 kJ",
          "40%, 560 kJ",
          "30%, 240 kJ",
          "70%, 560 kJ"
        ],
        "answer": 0,
        "explanation": "Correct: (a). η = 240/800 = 30%; Q_C = 800 − 240 = 560 kJ. (b) is wrong: the efficiency is 30%, not 40%. (c) is wrong: the rejected heat is 560 kJ, not 240 kJ. (d) is wrong: 70% is the rejected fraction, not the efficiency."
      },
      {
        "module": 3,
        "q": "Which cycle is the steam power cycle?",
        "choices": [
          "Brayton",
          "Rankine",
          "Otto",
          "Diesel"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The Rankine cycle (boiler, turbine, condenser, pump) is the steam power cycle. (a) is wrong: Brayton is the gas turbine cycle. (c) is wrong: Otto is the spark-ignition engine cycle. (d) is wrong: Diesel is the compression-ignition engine cycle."
      },
      {
        "module": 3,
        "q": "Entropy increases in:",
        "choices": [
          "Reversible processes only",
          "Irreversible (real) processes",
          "No process",
          "Isothermal processes only"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Entropy increases in every real, irreversible process; it stays constant only in a reversible one. (a) is wrong: reversible processes hold entropy constant. (c) is wrong: entropy does increase in real processes. (d) is wrong: entropy can change in any process type."
      },
      {
        "module": 4,
        "q": "Water flows at 1.5 m/s in a pipe of area 0.03 m² into a pipe of area 0.015 m². What is the new velocity?",
        "choices": [
          "0.75 m/s",
          "3 m/s",
          "1.5 m/s",
          "6 m/s"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Continuity: v₂ = 1.5 × 0.03/0.015 = 3 m/s. (a) is wrong: halving the area doubles the velocity, it does not halve it. (c) is wrong: the velocity must change when the area changes. (d) is wrong: that would need the area to quarter."
      },
      {
        "module": 4,
        "q": "For the same flow, what is the pressure drop between the two sections (ρ = 1,000 kg/m³, horizontal)?",
        "choices": [
          "3,375 Pa",
          "1,125 Pa",
          "6,750 Pa",
          "0 Pa"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Δp = ½ × 1,000 × (3² − 1.5²) = 500 × 6.75 = 3,375 Pa. (b) is wrong: that is ½ × 1,000 × 2.25. (c) is wrong: that doubles the correct value. (d) is wrong: the pressure must fall as the velocity rises."
      },
      {
        "module": 4,
        "q": "Water at 1.5 m/s in a 40 mm pipe (ρ = 1,000 kg/m³, μ = 0.001 Pa·s) has a Reynolds number of:",
        "choices": [
          "60,000",
          "6,000",
          "600,000",
          "600"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Re = 1,000 × 1.5 × 0.04/0.001 = 60,000 — turbulent. (b) is wrong: that is ten times too small. (c) is wrong: that is ten times too large. (d) is wrong: that is a hundred times too small."
      },
      {
        "module": 4,
        "q": "What is the gauge pressure at the bottom of 3 m of water?",
        "choices": [
          "29.4 kPa",
          "9.81 kPa",
          "294 kPa",
          "2.94 kPa"
        ],
        "answer": 0,
        "explanation": "Correct: (a). p = 1,000 × 9.81 × 3 = 29,430 Pa ≈ 29.4 kPa. (b) is wrong: that is the pressure at 1 m. (c) is wrong: that is the pressure at 30 m. (d) is wrong: that is the pressure at 0.3 m."
      },
      {
        "module": 4,
        "q": "What volume flow rate passes a pipe of area 0.05 m² at 4 m/s?",
        "choices": [
          "0.2 m³/s",
          "0.0125 m³/s",
          "20 m³/s",
          "0.8 m³/s"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Q = 0.05 × 4 = 0.2 m³/s. (b) is wrong: that is A/v. (c) is wrong: that is v/A. (d) is wrong: that is 0.05 × 16."
      },
      {
        "module": 4,
        "q": "A body displaces 0.05 m³ of water. What is the buoyant force?",
        "choices": [
          "490.5 N",
          "49.05 N",
          "4,905 N",
          "9.81 N"
        ],
        "answer": 0,
        "explanation": "Correct: (a). F = 0.05 × 1,000 × 9.81 = 490.5 N. (b) is wrong: that is ten times too small. (c) is wrong: that is ten times too large. (d) is wrong: that is g alone."
      },
      {
        "module": 4,
        "q": "An insulation layer (k = 0.04 W/m·K) of area 10 m² and thickness 0.1 m has 20 K across it. What is the conduction heat rate?",
        "choices": [
          "80 W",
          "8 W",
          "800 W",
          "200 W"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Q = 0.04 × 10 × 20/0.1 = 80 W. (b) is wrong: that is ten times too small. (c) is wrong: that is ten times too large. (d) is wrong: that is 0.04 × 10 × 20 × 25."
      },
      {
        "module": 4,
        "q": "A surface (h = 10 W/m²·K, area 2 m²) is 30 K hotter than the air. What is the convection heat rate?",
        "choices": [
          "600 W",
          "60 W",
          "6,000 W",
          "150 W"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Q = 10 × 2 × 30 = 600 W. (b) is wrong: that is ten times too small. (c) is wrong: that is ten times too large. (d) is wrong: that is 10 × 2 × 7.5."
      },
      {
        "module": 4,
        "q": "A surface with emissivity 0.9 and area 2 m² is at 400 K. About how much does it radiate (σ = 5.67 × 10⁻⁸ W/m²·K⁴)?",
        "choices": [
          "2.61 kW",
          "261 W",
          "26.1 kW",
          "1.45 kW"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Q = 0.9 × 5.67 × 10⁻⁸ × 2 × 400⁴ = 2,613 W ≈ 2.61 kW. (b) is wrong: that is ten times too small. (c) is wrong: that is ten times too large. (d) is wrong: that forgets the emissivity and one factor of area."
      },
      {
        "module": 4,
        "q": "A heat exchanger has end temperature differences of 60 K and 30 K. What is the LMTD?",
        "choices": [
          "45 K",
          "43.3 K",
          "30 K",
          "60 K"
        ],
        "answer": 1,
        "explanation": "Correct: (b). LMTD = 30/ln 2 = 43.3 K. (a) is wrong: that is the arithmetic mean. (c) is wrong: that is the smaller end difference. (d) is wrong: that is the larger end difference."
      },
      {
        "module": 5,
        "q": "A 12 V source drives a 4 Ω resistor. What is the current and the power?",
        "choices": [
          "3 A, 36 W",
          "4 A, 48 W",
          "2 A, 24 W",
          "3 A, 12 W"
        ],
        "answer": 0,
        "explanation": "Correct: (a). I = 12/4 = 3 A; P = 12 × 3 = 36 W. (b) is wrong: that is 12/3. (c) is wrong: that is 12/6. (d) is wrong: the current is right but the power is 36 W, not 12 W."
      },
      {
        "module": 5,
        "q": "Three resistors (5 Ω, 10 Ω, 15 Ω) in series across 90 V carry what current?",
        "choices": [
          "3 A",
          "6 A",
          "1.5 A",
          "18 A"
        ],
        "answer": 0,
        "explanation": "Correct: (a). R = 30 Ω, I = 90/30 = 3 A. (b) is wrong: that is 90/15. (c) is wrong: that is 90/60. (d) is wrong: that is 90/5."
      },
      {
        "module": 5,
        "q": "Two 20 Ω resistors in parallel have an equivalent resistance of:",
        "choices": [
          "40 Ω",
          "20 Ω",
          "10 Ω",
          "5 Ω"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Equal resistors in parallel halve: 20/2 = 10 Ω. (a) is wrong: that is the series value. (b) is wrong: that is one resistor alone. (d) is wrong: that would need four 20 Ω resistors in parallel."
      },
      {
        "module": 5,
        "q": "A Thévenin source (V_th = 12 V, R_th = 4 Ω) drives a 4 Ω load. What is the load power?",
        "choices": [
          "9 W",
          "4.5 W",
          "18 W",
          "36 W"
        ],
        "answer": 0,
        "explanation": "Correct: (a). I = 12/8 = 1.5 A; P = 1.5² × 4 = 9 W. (b) is wrong: that is half — it uses 1.06 A. (c) is wrong: that is V_th²/(2R_th). (d) is wrong: that is V_th²/R_th."
      },
      {
        "module": 5,
        "q": "A 230 V RMS source drives a 23 Ω resistor. What is the power?",
        "choices": [
          "2,300 W",
          "230 W",
          "10 W",
          "5,290 W"
        ],
        "answer": 0,
        "explanation": "Correct: (a). I = 230/23 = 10 A; P = 230 × 10 = 2,300 W. (b) is wrong: that is the voltage alone. (c) is wrong: that is the current, not the power. (d) is wrong: that is 230²/10."
      },
      {
        "module": 5,
        "q": "A load draws 600 W with an apparent power of 750 VA. What is its power factor and reactive power?",
        "choices": [
          "0.8, 450 VAR",
          "0.6, 450 VAR",
          "0.8, 600 VAR",
          "1.25, 450 VAR"
        ],
        "answer": 0,
        "explanation": "Correct: (a). PF = 600/750 = 0.8; Q = √(750² − 600²) = √202,500 = 450 VAR. (b) is wrong: 0.6 is Q/S, not P/S. (c) is wrong: the reactive power is 450 VAR, not 600. (d) is wrong: 1.25 is S/P, upside down."
      },
      {
        "module": 5,
        "q": "A balanced three-phase load has V_L = 400 V, I_L = 15 A, PF = 0.85. What is the real power?",
        "choices": [
          "5.1 kW",
          "8.83 kW",
          "6.0 kW",
          "10.4 kW"
        ],
        "answer": 1,
        "explanation": "Correct: (b). P = √3 × 400 × 15 × 0.85 = 8,833 W ≈ 8.83 kW. (a) is wrong: that is 400 × 15 × 0.85, forgetting √3. (c) is wrong: that is 400 × 15. (d) is wrong: that forgets the power factor."
      },
      {
        "module": 5,
        "q": "A 5:1 step-down transformer is fed with 240 V and supplies 10 A. What is the secondary voltage and primary current?",
        "choices": [
          "48 V, 2 A",
          "48 V, 50 A",
          "1,200 V, 2 A",
          "48 V, 10 A"
        ],
        "answer": 0,
        "explanation": "Correct: (a). V₂ = 240/5 = 48 V; I₁ = 10/5 = 2 A. (b) is wrong: the primary current is smaller, not larger. (c) is wrong: 1,200 V is a step-up. (d) is wrong: the primary current is 2 A, not 10 A."
      },
      {
        "module": 5,
        "q": "A capacitor of 50 µF is charged to 100 V. How much energy does it store?",
        "choices": [
          "0.25 J",
          "2.5 J",
          "0.025 J",
          "5 J"
        ],
        "answer": 0,
        "explanation": "Correct: (a). E = ½ × 50 × 10⁻⁶ × 100² = 0.25 J. (b) is wrong: that is ten times too large. (c) is wrong: that is ten times too small. (d) is wrong: that is ½ × 100 × 0.1."
      },
      {
        "module": 5,
        "q": "An inductor of 2 H carries 3 A. How much energy does it store?",
        "choices": [
          "9 J",
          "6 J",
          "18 J",
          "3 J"
        ],
        "answer": 0,
        "explanation": "Correct: (a). E = ½ × 2 × 9 = 9 J. (b) is wrong: that is L × I. (c) is wrong: that is L × I², forgetting the ½. (d) is wrong: that is the current alone."
      },
      {
        "module": 5,
        "q": "A series LC circuit has L = 10 mH and C = 400 nF. What is its resonant frequency?",
        "choices": [
          "2.52 kHz",
          "5.03 kHz",
          "25.2 kHz",
          "503 Hz"
        ],
        "answer": 0,
        "explanation": "Correct: (a). LC = 4 × 10⁻⁹, √LC = 6.32 × 10⁻⁵, f₀ = 1/(2π × 6.32 × 10⁻⁵) = 2,516 Hz ≈ 2.52 kHz. (b) is wrong: that is the frequency for LC = 10⁻⁹. (c) is wrong: that is ten times too large. (d) is wrong: that is about a fifth of the value."
      },
      {
        "module": 6,
        "q": "What is 110101₂ in decimal?",
        "choices": [
          "45",
          "53",
          "37",
          "61"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 32 + 16 + 0 + 4 + 0 + 1 = 53. (a) is wrong: that is 101101₂. (c) is wrong: that is 100101₂. (d) is wrong: that is 111101₂."
      },
      {
        "module": 7,
        "q": "What is the future worth of $500 at 5% for 10 years?",
        "choices": [
          "$750.00",
          "$814.45",
          "$500.00",
          "$1,000.00"
        ],
        "answer": 1,
        "explanation": "Correct: (b). F = 500 × (1.05)¹⁰ = 500 × 1.6289 = $814.45. (a) is wrong: that is simple interest. (c) is wrong: that is no interest at all. (d) is wrong: that doubles the money."
      },
      {
        "module": 7,
        "q": "What is the present worth of $1,000 due in 5 years at 10%?",
        "choices": [
          "$620.92",
          "$500.00",
          "$1,610.51",
          "$909.09"
        ],
        "answer": 0,
        "explanation": "Correct: (a). P = 1,000/(1.10)⁵ = 1,000/1.6105 = $620.92. (b) is wrong: that is half the future sum. (c) is wrong: that is the future worth of $1,000. (d) is wrong: that is one year of discounting only."
      },
      {
        "module": 7,
        "q": "An annuity pays $200 a year for 6 years at 8%. What is its present worth ((P/A, 8%, 6) = 4.6229)?",
        "choices": [
          "$924.58",
          "$1,200.00",
          "$1,469.33",
          "$4,622.90"
        ],
        "answer": 0,
        "explanation": "Correct: (a). P = 200 × 4.6229 = $924.58. (b) is wrong: that is the undiscounted total. (c) is wrong: that is a different problem's answer. (d) is wrong: that is the factor times 1,000."
      },
      {
        "module": 7,
        "q": "What is the annual worth of $5,000 over 5 years at 10% ((A/P, 10%, 5) = 0.2638)?",
        "choices": [
          "$1,000",
          "$1,319",
          "$1,500",
          "$2,638"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A = 5,000 × 0.2638 = $1,319 per year. (a) is wrong: that is 5,000/5, ignoring interest. (c) is wrong: that is too large. (d) is wrong: that is 10,000 × 0.2638."
      },
      {
        "module": 7,
        "q": "A machine costs $20,000 with a $2,000 salvage value and an 8-year life. What is its straight-line depreciation per year?",
        "choices": [
          "$2,500",
          "$2,250",
          "$2,000",
          "$2,750"
        ],
        "answer": 1,
        "explanation": "Correct: (b). (20,000 − 2,000)/8 = $2,250 per year. (a) is wrong: that is 20,000/8, forgetting salvage. (c) is wrong: that is the salvage divided by 10. (d) is wrong: that is (20,000 + 2,000)/8."
      },
      {
        "module": 7,
        "q": "Fixed costs are $12,000, price is $40, variable cost is $25 per unit. What is the break-even quantity?",
        "choices": [
          "480 units",
          "800 units",
          "300 units",
          "1,200 units"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 12,000/(40 − 25) = 800 units. (a) is wrong: that is 12,000/25. (c) is wrong: that is 12,000/40. (d) is wrong: that is 12,000/10."
      },
      {
        "module": 7,
        "q": "A project costs $500 and returns $600 in one year. What is its IRR?",
        "choices": [
          "10%",
          "20%",
          "120%",
          "50%"
        ],
        "answer": 1,
        "explanation": "Correct: (b). −500 + 600/(1 + i) = 0 gives i = 20%. (a) is wrong: that would return $550. (c) is wrong: that is the return as a percentage of the wrong base. (d) is wrong: that would return $750."
      },
      {
        "module": 8,
        "q": "A CSWA candidate scores 180 out of 240 points. Did they pass, and by how many points?",
        "choices": [
          "Passed by 15 points",
          "Failed by 15 points",
          "Passed by 75 points",
          "Failed by 60 points"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The pass mark is 165, so 180 − 165 = 15 points above it — a pass. (b) is wrong: 180 is above 165, not below. (c) is wrong: 180 − 105 is not the margin. (d) is wrong: 180 is not below 165."
      },
      {
        "module": 8,
        "q": "A steel block is 50 mm × 40 mm × 10 mm. What is its mass (density 7,850 kg/m³)?",
        "choices": [
          "0.157 kg",
          "1.57 kg",
          "0.0157 kg",
          "15.7 kg"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Volume = 20,000 mm³ = 2 × 10⁻⁵ m³; mass = 7,850 × 2 × 10⁻⁵ = 0.157 kg. (b) is wrong: that is ten times too large. (c) is wrong: that is ten times too small. (d) is wrong: that is a hundred times too large."
      },
      {
        "module": 8,
        "q": "In SOLIDWORKS, what should you do before dimensioning a sketch?",
        "choices": [
          "Add relations first",
          "Extrude first",
          "Add fillets first",
          "Dimension from the wrong plane"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Add relations (horizontal, vertical, coincident, tangent) before dimensions. (b) is wrong: you cannot extrude an unfinished sketch. (c) is wrong: fillets go last. (d) is wrong: dimension from the origin or a datum."
      },
      {
        "module": 9,
        "q": "A 15-tooth gear at 1,200 rpm drives a 45-tooth gear. What is the output speed?",
        "choices": [
          "1,200 rpm",
          "800 rpm",
          "400 rpm",
          "3,600 rpm"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Ratio 45/15 = 3, so 1,200/3 = 400 rpm. (a) is wrong: that is the input speed. (b) is wrong: that is 1,200 × 2/3. (d) is wrong: that multiplies by the ratio."
      },
      {
        "module": 9,
        "q": "An 80 mm pulley at 900 rpm drives a 240 mm pulley. What is the output speed?",
        "choices": [
          "900 rpm",
          "2,700 rpm",
          "300 rpm",
          "240 rpm"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 900 × 80/240 = 300 rpm. (a) is wrong: that is the input speed. (b) is wrong: that multiplies by the diameter ratio. (d) is wrong: that is the driven diameter, not a speed."
      },
      {
        "module": 9,
        "q": "A ball bearing has C = 20 kN and carries P = 10 kN. What is its L10 life?",
        "choices": [
          "2 million rev",
          "8 million rev",
          "4 million rev",
          "20 million rev"
        ],
        "answer": 1,
        "explanation": "Correct: (b). L10 = (20/10)³ = 8 million revolutions. (a) is wrong: that is C/P, forgetting the cube. (c) is wrong: that is (C/P)². (d) is wrong: that is C/P × 10."
      },
      {
        "module": 9,
        "q": "A part has σ_a = 80 MPa, S_e = 160 MPa, σ_m = 120 MPa, S_ut = 480 MPa. What is the Goodman factor of safety?",
        "choices": [
          "1.33",
          "2.00",
          "1.00",
          "0.75"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 80/160 + 120/480 = 0.5 + 0.25 = 0.75, so n = 1/0.75 = 1.33. (b) is wrong: that is 1/0.5, ignoring mean stress. (c) is wrong: that would need the sum to equal 1. (d) is wrong: that is the sum, not the factor of safety."
      },
      {
        "module": 9,
        "q": "A shaft at 1,500 rpm carries 60 N·m of torque. What power does it transmit?",
        "choices": [
          "9.42 kW",
          "6.28 kW",
          "18.8 kW",
          "942 W"
        ],
        "answer": 0,
        "explanation": "Correct: (a). P = 2π × 1,500 × 60/60 = 9,425 W ≈ 9.42 kW. (b) is wrong: that is 2π × 1,000 × 60/60. (c) is wrong: that doubles it. (d) is wrong: that is ten times too small."
      },
      {
        "module": 10,
        "q": "A Pt100 RTD (R₀ = 100 Ω, α = 0.00385/°C) is at 50 °C. What is its resistance?",
        "choices": [
          "119.25 Ω",
          "138.5 Ω",
          "100 Ω",
          "192.5 Ω"
        ],
        "answer": 0,
        "explanation": "Correct: (a). R = 100 × (1 + 0.00385 × 50) = 119.25 Ω. (b) is wrong: that is the resistance at 100 °C. (c) is wrong: that is the resistance at 0 °C. (d) is wrong: that multiplies 100 by 1.925."
      },
      {
        "module": 10,
        "q": "A 0–100 °C transmitter sends 4–20 mA. What current represents 25 °C?",
        "choices": [
          "8 mA",
          "12 mA",
          "4 mA",
          "16 mA"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 25% of range: I = 4 + 0.25 × 16 = 8 mA. (b) is wrong: that is 50 °C. (c) is wrong: that is 0 °C. (d) is wrong: that is 75 °C."
      },
      {
        "module": 10,
        "q": "A PID controller has K_p = 3 and the error is 4. What is the proportional term?",
        "choices": [
          "3",
          "4",
          "12",
          "7"
        ],
        "answer": 2,
        "explanation": "Correct: (c). P term = 3 × 4 = 12. (a) is wrong: that is K_p alone. (b) is wrong: that is the error alone. (d) is wrong: that adds K_p and the error."
      },
      {
        "module": 11,
        "q": "A 6-pole motor runs on 60 Hz. What is its synchronous speed?",
        "choices": [
          "1,800 rpm",
          "1,200 rpm",
          "3,600 rpm",
          "900 rpm"
        ],
        "answer": 1,
        "explanation": "Correct: (b). n_s = 120 × 60/6 = 1,200 rpm. (a) is wrong: that is a 4-pole motor. (c) is wrong: that is a 2-pole motor. (d) is wrong: that is an 8-pole motor."
      },
      {
        "module": 11,
        "q": "A motor has n_s = 1,200 rpm and runs at 1,150 rpm. What is its slip?",
        "choices": [
          "4.17%",
          "2.08%",
          "8.33%",
          "0.42%"
        ],
        "answer": 0,
        "explanation": "Correct: (a). (1,200 − 1,150)/1,200 = 4.17%. (b) is wrong: that is a 25 rpm difference. (c) is wrong: that is a 100 rpm difference. (d) is wrong: that is a 5 rpm difference."
      },
      {
        "module": 11,
        "q": "A 5 hp motor runs at 1,750 rpm. What torque does it deliver? (1 hp = 745.7 W)",
        "choices": [
          "20.4 N·m",
          "40.7 N·m",
          "10.2 N·m",
          "81.4 N·m"
        ],
        "answer": 0,
        "explanation": "Correct: (a). P = 5 × 745.7 = 3,728.5 W = 3.73 kW; T = 9,550 × 3.73/1,750 = 20.4 N·m. (b) is wrong: that is the torque of a 10 hp motor. (c) is wrong: that is half. (d) is wrong: that is four times too large."
      },
      {
        "module": 7,
        "q": "A client asks you to sign off on a design you did not check, saying it will save time. What do you do?",
        "choices": [
          "Sign it — the client takes the risk",
          "Refuse and check it first — public safety comes first",
          "Sign it and check it later",
          "Ask for more money"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Public safety, health, and welfare come first — never sign work you have not checked. (a) is wrong: the risk stays with the public, not the client. (c) is wrong: checking later is too late. (d) is wrong: money does not change the duty."
      },
      {
        "module": 7,
        "q": "Which of these must you hold before you can sit the PE exam?",
        "choices": [
          "An ABET-accredited engineering degree and typically 4 years of experience",
          "A CSWA certificate",
          "A business degree",
          "A PMMI certificate"
        ],
        "answer": 0,
        "explanation": "Correct: (a). PE licensure needs an ABET-accredited degree plus typically 4 years of experience, plus both exams. (b) is wrong: the CSWA is a CAD credential, not a licence requirement. (c) is wrong: a business degree does not qualify. (d) is wrong: a PMMI certificate is not a licence requirement."
      },
      {
        "module": 12,
        "q": "The device must sort 60 washers a minute, verified by timing a run. Why is this a good requirement?",
        "choices": [
          "It has a number, a unit, and a test",
          "It is short",
          "It mentions washers",
          "It is ambitious"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A requirement needs a number, a unit, and a test. (b) is wrong: shortness does not make a requirement testable. (c) is wrong: mentioning washers does not make it measurable. (d) is wrong: ambition is not a test."
      },
      {
        "module": 12,
        "q": "You have 320 minutes for 110 questions and spend 100 minutes on the first 40. How many minutes per remaining question do you have?",
        "choices": [
          "About 3.1 minutes",
          "2.9 minutes",
          "2.0 minutes",
          "4.0 minutes"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Time left is 220 minutes for 70 questions: 220/70 = 3.14, about 3.1 minutes each. (b) is wrong: 2.9 is the overall average, not the remaining average. (c) is wrong: that is too fast. (d) is wrong: that would need 280 minutes left."
      },
      {
        "module": 12,
        "q": "On the FE, you flag a hard question and move on. What should you do at the end if time remains?",
        "choices": [
          "Return to the flagged questions",
          "Leave them blank",
          "Spend the time checking easy answers only",
          "Submit immediately"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Return to flagged questions on a second pass — a guess is better than a blank. (b) is wrong: a blank is always wrong. (c) is wrong: flagged questions deserve the time. (d) is wrong: use the time you have."
      },
      {
        "module": 3,
        "q": "A steel bar 500 mm long stretches 0.5 mm under load. What is the strain?",
        "choices": [
          "0.01",
          "0.001",
          "0.0001",
          "0.1"
        ],
        "answer": 1,
        "explanation": "Correct: (b). ε = 0.5/500 = 0.001. (a) is wrong: that is 5/500. (c) is wrong: that is 0.05/500. (d) is wrong: that is 50/500."
      },
      {
        "module": 3,
        "q": "What is the section modulus S of a beam, in terms of I and c?",
        "choices": [
          "S = I × c",
          "S = I/c",
          "S = c/I",
          "S = I + c"
        ],
        "answer": 1,
        "explanation": "Correct: (b). S = I/c, so σ_max = M/S. (a) is wrong: that multiplies instead of dividing. (c) is wrong: that is upside down. (d) is wrong: moduli do not add."
      },
      {
        "module": 3,
        "q": "A refrigerator has a COP of 3 and uses 200 W of work. How much heat does it remove?",
        "choices": [
          "600 W",
          "67 W",
          "200 W",
          "3 W"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Q_C = COP × W = 3 × 200 = 600 W. (b) is wrong: that is W/COP. (c) is wrong: that is the work alone. (d) is wrong: that is the COP alone."
      },
      {
        "module": 4,
        "q": "A counter-flow heat exchanger has the same area as a parallel-flow one. Which transfers more heat, and why?",
        "choices": [
          "Counter-flow, because its LMTD is larger",
          "Parallel-flow, because its LMTD is larger",
          "They transfer the same",
          "Parallel-flow, because it is simpler"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Counter-flow keeps a more even temperature difference, giving a larger LMTD and more heat transfer. (b) is wrong: parallel-flow has the smaller LMTD. (c) is wrong: the arrangements differ. (d) is wrong: simplicity does not transfer more heat."
      },
      {
        "module": 5,
        "q": "What does the voltage divider give for R₁ in series with R₂ across V?",
        "choices": [
          "V × R₂/(R₁ + R₂)",
          "V × R₁/(R₁ + R₂)",
          "V × (R₁ + R₂)/R₁",
          "V/2 always"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The voltage across R₁ is V × R₁/(R₁ + R₂). (a) is wrong: that is the voltage across R₂. (c) is wrong: that is upside down. (d) is wrong: it is V/2 only when R₁ = R₂."
      },
      {
        "module": 5,
        "q": "What is the maximum power transfer condition?",
        "choices": [
          "R_L = 0",
          "R_L = R_th",
          "R_L as large as possible",
          "R_L = 2 × R_th"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Maximum power when the load equals the Thévenin resistance. (a) is wrong: a short circuit draws maximum current but zero load power. (c) is wrong: a huge load draws almost no current. (d) is wrong: that is not the maximum-power condition."
      },
      {
        "module": 6,
        "q": "A 10-bit ADC has a 3.3 V reference. What is its resolution?",
        "choices": [
          "3.22 mV",
          "4.88 mV",
          "1.61 mV",
          "6.44 mV"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 3.3/1,024 = 3.22 mV per count. (b) is wrong: that is a 10-bit ADC with a 5 V reference. (c) is wrong: that is half. (d) is wrong: that is double."
      },
      {
        "module": 6,
        "q": "A ladder rung has an XIO contact for a sensor that is ON. Is the contact true or false?",
        "choices": [
          "True",
          "False",
          "True only on the first scan",
          "It depends on the output"
        ],
        "answer": 1,
        "explanation": "Correct: (b). XIO (examine if open) is true when its input is OFF — so with the sensor on, the contact is false. (a) is wrong: that is an XIC contact. (c) is wrong: contacts do not change on the first scan. (d) is wrong: a contact examines its input, not the output."
      },
      {
        "module": 6,
        "q": "What does a TON timer do?",
        "choices": [
          "Counts pulses",
          "Delays its done bit by the preset time",
          "Turns on immediately",
          "Resets counters"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A timer on-delay sets its done bit after the preset time has passed. (a) is wrong: that is a counter. (c) is wrong: that is an ordinary coil. (d) is wrong: that is a RES instruction."
      },
      {
        "module": 10,
        "q": "A controller has a steady-state error that will not go away with proportional control alone. Which term fixes it?",
        "choices": [
          "Proportional",
          "Integral",
          "Derivative",
          "Feedforward"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The integral term accumulates past error and drives the offset to zero. (a) is wrong: P alone leaves a steady-state error. (c) is wrong: D damps overshoot, it does not remove offset. (d) is wrong: feedforward is a different technique."
      },
      {
        "module": 11,
        "q": "You must replace a sensor on a running machine. What is the first safety action?",
        "choices": [
          "Put on gloves",
          "De-energise, lock out, tag, and test that it is dead",
          "Tell the operator",
          "Read the manual"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Lockout/tagout plus testing is the first action — never trust a switch position. (a) is wrong: gloves are PPE, but isolation comes first. (c) is wrong: telling the operator matters, but after isolation. (d) is wrong: reading the manual matters, but after isolation."
      },
      {
        "module": 11,
        "q": "A motor's overload relay keeps tripping. What should you check first?",
        "choices": [
          "A jammed load or a failing motor",
          "A bigger overload relay to fit",
          "The paint on the motor",
          "The PLC program first"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A tripping overload signals a fault — a jammed load or a failing motor. (b) is wrong: a bigger relay hides the fault and risks fire. (c) is wrong: paint has nothing to do with it. (d) is wrong: the physical fault comes before the program."
      },
      {
        "module": 11,
        "q": "Which standard is the installation standard for electrical work?",
        "choices": [
          "NFPA 70E",
          "NFPA 70 (NEC)",
          "ISO 9001",
          "ASME Y14.5"
        ],
        "answer": 1,
        "explanation": "Correct: (b). NFPA 70, the National Electrical Code, is the installation standard. (a) is wrong: NFPA 70E protects the worker. (c) is wrong: ISO 9001 is a quality standard. (d) is wrong: ASME Y14.5 is the GD&T standard."
      },
      {
        "module": 12,
        "q": "A design project has four deliverables. Which is NOT one of them?",
        "choices": [
          "Requirements document",
          "Test plan and results",
          "Project report",
          "A patent application"
        ],
        "answer": 3,
        "explanation": "Correct: (d). The four deliverables are the requirements document, the design, the test plan and results, and the project report — not a patent application. (a), (b), and (c) are all deliverables."
      },
      {
        "module": 12,
        "q": "Your design project is finished and passes the rubric. Does completing it certify you as an engineer?",
        "choices": [
          "Yes — it is a credential",
          "No — it is proof of work, not a certification",
          "Yes, but only the CAD part",
          "Only if a teacher signs it"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The project is proof of work; completing this course certifies no one. (a) is wrong: the project is not a credential. (c) is wrong: no part of it certifies you. (d) is wrong: a signature does not make it a credential."
      },
      {
        "module": 12,
        "q": "What is a decision log for?",
        "choices": [
          "Recording what was decided, why, and what was rejected",
          "Listing the parts to buy",
          "Recording the test results",
          "Writing the requirements"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A decision log records decisions and their reasons. (b) is wrong: that is the parts list. (c) is wrong: that is the test record. (d) is wrong: that is the requirements document."
      }
    ]
  },
  "fe-electrical-computer": {
    "title": "FE Electrical & Computer Practice Exam",
    "minutes": 320,
    "passPercent": 70,
    "coverage": "100 original questions in the real exam's style, spanning the FE Electrical & Computer domains: mathematics, probability and statistics, ethics and professional practice, engineering economics, circuit analysis, electronics, digital systems, signals and systems, electromagnetics, power, control systems, and computer systems and networks. Practice benchmark only: the real FE Electrical & Computer exam is 110 questions (100 scored and 10 unscored) in 5 hours 20 minutes of testing, costs $225, and NCEES publishes no passing score — results are pass/fail only — so the 70% used here is a practice benchmark only, never the real pass mark.",
    "questions": [
      {
        "module": 1,
        "q": "The FE exam's 110 questions include 10 unscored trial questions. How many questions count toward your result?",
        "choices": [
          "100",
          "110",
          "90",
          "120"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 110 − 10 = 100 scored questions. (b) is wrong: that is the total, including unscored trials. (c) is wrong: that is too few. (d) is wrong: that is too many."
      },
      {
        "module": 1,
        "q": "The FE fee is $225 and a CSWA voucher typically costs $99. How much do the two cost together?",
        "choices": [
          "$225",
          "$324",
          "$99",
          "$450"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 225 + 99 = $324. (a) is wrong: that is the FE fee alone. (c) is wrong: that is the CSWA voucher alone. (d) is wrong: that is two FE fees."
      },
      {
        "module": 1,
        "q": "In 2024, the FE Mechanical first-time pass rate was 68% and Electrical & Computer was 62%. Which discipline had the higher first-time pass rate, and by how much?",
        "choices": [
          "Mechanical, by 6 percentage points",
          "Electrical & Computer, by 6 percentage points",
          "They were equal",
          "Mechanical, by 10 percentage points"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 68 − 62 = 6 percentage points in favour of Mechanical. (b) is wrong: Electrical & Computer was lower. (c) is wrong: they differ by 6 points. (d) is wrong: the gap is 6 points, not 10."
      },
      {
        "module": 1,
        "q": "A friend tells you the FE pass mark is 70%. What is wrong with that claim?",
        "choices": [
          "Nothing — 70% is the pass mark",
          "NCEES publishes no passing score; 70% is this course's practice benchmark only",
          "The pass mark is 165 out of 240",
          "The pass mark is 675 on a 100–900 scale"
        ],
        "answer": 1,
        "explanation": "Correct: (b). NCEES publishes no passing score; FE results are pass/fail only, and 70% is the course's practice benchmark. (a) is wrong: 70% is not the pass mark. (c) is wrong: that is the CSWA pass mark. (d) is wrong: that is a CompTIA A+ scaled score."
      },
      {
        "module": 1,
        "q": "What is the determinant of [[1, 2], [3, 5]]?",
        "choices": [
          "-1",
          "1",
          "11",
          "0"
        ],
        "answer": 0,
        "explanation": "Correct: (a). det = 1×5 − 2×3 = 5 − 6 = −1. (b) is wrong: that is 5 − 4. (c) is wrong: that is 5 + 6. (d) is wrong: the determinant is −1, not zero."
      },
      {
        "module": 1,
        "q": "What is the value of ∫₀¹ x² dx?",
        "choices": [
          "1",
          "1/3",
          "1/2",
          "2/3"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The antiderivative is x³/3, so 1/3 − 0 = 1/3. (a) is wrong: that is the upper limit. (c) is wrong: that is ∫₀¹ x dx. (d) is wrong: that is 2 × 1/3."
      },
      {
        "module": 1,
        "q": "What is the derivative of sin x?",
        "choices": [
          "−sin x",
          "cos x",
          "−cos x",
          "tan x"
        ],
        "answer": 1,
        "explanation": "Correct: (b). d/dx(sin x) = cos x. (a) is wrong: that is the derivative of cos x with a sign error. (c) is wrong: that is the derivative of cos x. (d) is wrong: that is sin x/cos x."
      },
      {
        "module": 1,
        "q": "What is the mean of 4, 8, 15, 13, and 10?",
        "choices": [
          "10",
          "12",
          "8",
          "15"
        ],
        "answer": 0,
        "explanation": "Correct: (a). (4 + 8 + 15 + 13 + 10)/5 = 50/5 = 10. (b) is wrong: that is 60/5. (c) is wrong: that is 40/5. (d) is wrong: that is the largest value, not the mean."
      },
      {
        "module": 1,
        "q": "A value of 130 comes from a normal distribution with mean 100 and standard deviation 15. What is its z-score?",
        "choices": [
          "1",
          "2",
          "3",
          "0.5"
        ],
        "answer": 1,
        "explanation": "Correct: (b). z = (130 − 100)/15 = 2. (a) is wrong: that would need a value of 115. (c) is wrong: that would need a value of 145. (d) is wrong: that would need a value of 107.5."
      },
      {
        "module": 1,
        "q": "For mutually exclusive events A and B, P(A or B) equals:",
        "choices": [
          "P(A) × P(B)",
          "P(A) + P(B)",
          "P(A) − P(B)",
          "P(A) / P(B)"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Mutually exclusive events add: P(A or B) = P(A) + P(B). (a) is wrong: that is for independent events (P(A and B)). (c) is wrong: probabilities do not subtract this way. (d) is wrong: probabilities do not divide this way."
      },
      {
        "module": 5,
        "q": "A 9 V source drives a 3 Ω resistor. What is the current and the power?",
        "choices": [
          "3 A, 27 W",
          "3 A, 9 W",
          "27 A, 81 W",
          "1 A, 9 W"
        ],
        "answer": 0,
        "explanation": "Correct: (a). I = 9/3 = 3 A; P = 9 × 3 = 27 W. (b) is wrong: the power is 27 W, not 9 W. (c) is wrong: that is 9 × 3 for current. (d) is wrong: the current is 3 A, not 1 A."
      },
      {
        "module": 5,
        "q": "Three resistors (4 Ω, 6 Ω, 10 Ω) in series across 100 V carry what current?",
        "choices": [
          "5 A",
          "10 A",
          "2.5 A",
          "25 A"
        ],
        "answer": 0,
        "explanation": "Correct: (a). R = 20 Ω, I = 100/20 = 5 A. (b) is wrong: that is 100/10. (c) is wrong: that is 100/40. (d) is wrong: that is 100/4."
      },
      {
        "module": 5,
        "q": "Two 30 Ω resistors in parallel have an equivalent resistance of:",
        "choices": [
          "60 Ω",
          "30 Ω",
          "15 Ω",
          "7.5 Ω"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Equal resistors in parallel halve: 30/2 = 15 Ω. (a) is wrong: that is the series value. (b) is wrong: that is one resistor alone. (d) is wrong: that would need four 30 Ω resistors in parallel."
      },
      {
        "module": 5,
        "q": "A 12 V source drives two series resistors, 2 kΩ and 4 kΩ. What is the voltage across the 2 kΩ resistor?",
        "choices": [
          "4 V",
          "8 V",
          "12 V",
          "6 V"
        ],
        "answer": 0,
        "explanation": "Correct: (a). V₁ = 12 × 2/(2 + 4) = 4 V. (b) is wrong: that is the voltage across the 4 kΩ resistor. (c) is wrong: that is the whole source voltage. (d) is wrong: that is half the source voltage."
      },
      {
        "module": 5,
        "q": "At a node, 5 A enters and 2 A leaves through one branch. How much leaves through the other branch?",
        "choices": [
          "2 A",
          "3 A",
          "5 A",
          "7 A"
        ],
        "answer": 1,
        "explanation": "Correct: (b). KCL: 5 = 2 + I, so I = 3 A. (a) is wrong: that is the other branch's current. (c) is wrong: that is the entering current. (d) is wrong: that adds the currents."
      },
      {
        "module": 5,
        "q": "A Thévenin source (V_th = 15 V, R_th = 3 Ω) drives a 3 Ω load. What is the load power?",
        "choices": [
          "18.75 W",
          "7.5 W",
          "75 W",
          "37.5 W"
        ],
        "answer": 0,
        "explanation": "Correct: (a). I = 15/6 = 2.5 A; P = 2.5² × 3 = 18.75 W. (b) is wrong: that is the power in R_th alone at a different current. (c) is wrong: that is V_th²/R_th. (d) is wrong: that is V_th × I with I = 2.5 A and V = 15 V."
      },
      {
        "module": 5,
        "q": "What is the Norton current of a network with V_th = 15 V and R_th = 3 Ω?",
        "choices": [
          "45 A",
          "5 A",
          "3 A",
          "15 A"
        ],
        "answer": 1,
        "explanation": "Correct: (b). I_N = V_th/R_th = 15/3 = 5 A. (a) is wrong: that is V_th × R_th. (c) is wrong: that is R_th alone. (d) is wrong: that is V_th alone."
      },
      {
        "module": 5,
        "q": "A capacitor of 200 µF is charged to 25 V. How much energy does it store?",
        "choices": [
          "0.0625 J",
          "0.625 J",
          "6.25 J",
          "0.00625 J"
        ],
        "answer": 0,
        "explanation": "Correct: (a). E = ½ × 200 × 10⁻⁶ × 625 = 0.0625 J. (b) is wrong: that is ten times too large. (c) is wrong: that is a hundred times too large. (d) is wrong: that is ten times too small."
      },
      {
        "module": 5,
        "q": "An inductor of 0.25 H carries 8 A. How much energy does it store?",
        "choices": [
          "8 J",
          "2 J",
          "16 J",
          "1 J"
        ],
        "answer": 0,
        "explanation": "Correct: (a). E = ½ × 0.25 × 64 = 8 J. (b) is wrong: that is L × I²/32. (c) is wrong: that is L × I², forgetting the ½. (d) is wrong: that is far too small."
      },
      {
        "module": 5,
        "q": "An RC circuit has R = 10 kΩ and C = 100 µF. What is its time constant?",
        "choices": [
          "1 s",
          "0.1 s",
          "10 s",
          "1 ms"
        ],
        "answer": 0,
        "explanation": "Correct: (a). τ = RC = 10,000 × 100 × 10⁻⁶ = 1 s. (b) is wrong: that is ten times too small. (c) is wrong: that is ten times too large. (d) is wrong: that is a thousand times too small."
      },
      {
        "module": 5,
        "q": "An RL circuit has L = 0.5 H and R = 25 Ω. What is its time constant?",
        "choices": [
          "0.02 s",
          "12.5 s",
          "0.5 s",
          "2 s"
        ],
        "answer": 0,
        "explanation": "Correct: (a). τ = L/R = 0.5/25 = 0.02 s. (b) is wrong: that is L × R. (c) is wrong: that is L alone. (d) is wrong: that is R/L × 1."
      },
      {
        "module": 5,
        "q": "A series LC circuit has L = 5 mH and C = 200 nF. What is its resonant frequency?",
        "choices": [
          "5.03 kHz",
          "1.59 kHz",
          "50.3 kHz",
          "503 Hz"
        ],
        "answer": 0,
        "explanation": "Correct: (a). LC = 10⁻⁹, √LC = 3.16 × 10⁻⁵, f₀ = 1/(2π × 3.16 × 10⁻⁵) = 5,033 Hz ≈ 5.03 kHz. (b) is wrong: that is about a third of the value. (c) is wrong: that is ten times too large. (d) is wrong: that is ten times too small."
      },
      {
        "module": 5,
        "q": "A 100 V RMS source drives a 25 Ω resistor. What is the power?",
        "choices": [
          "400 W",
          "100 W",
          "4 W",
          "2,500 W"
        ],
        "answer": 0,
        "explanation": "Correct: (a). I = 100/25 = 4 A; P = 100 × 4 = 400 W. (b) is wrong: that is the voltage alone. (c) is wrong: that is the current, not the power. (d) is wrong: that is 100²/4."
      },
      {
        "module": 5,
        "q": "A load draws 900 W with an apparent power of 1,500 VA. What is its power factor and reactive power?",
        "choices": [
          "0.6, 1,200 VAR",
          "0.8, 1,200 VAR",
          "0.6, 900 VAR",
          "1.67, 1,200 VAR"
        ],
        "answer": 0,
        "explanation": "Correct: (a). PF = 900/1,500 = 0.6; Q = √(1,500² − 900²) = √1,440,000 = 1,200 VAR. (b) is wrong: 0.8 is not 900/1,500. (c) is wrong: the reactive power is 1,200 VAR, not 900. (d) is wrong: 1.67 is S/P, upside down."
      },
      {
        "module": 5,
        "q": "A balanced three-phase load has V_L = 208 V, I_L = 20 A, PF = 0.9. What is the real power?",
        "choices": [
          "3.74 kW",
          "6.48 kW",
          "4.16 kW",
          "7.2 kW"
        ],
        "answer": 1,
        "explanation": "Correct: (b). P = √3 × 208 × 20 × 0.9 = 6,484 W ≈ 6.48 kW. (a) is wrong: that is 208 × 20 × 0.9, forgetting √3. (c) is wrong: that is 208 × 20. (d) is wrong: that forgets the power factor."
      },
      {
        "module": 5,
        "q": "A 4:1 step-down transformer is fed with 120 V and supplies 8 A. What is the secondary voltage and primary current?",
        "choices": [
          "30 V, 2 A",
          "30 V, 32 A",
          "480 V, 2 A",
          "30 V, 8 A"
        ],
        "answer": 0,
        "explanation": "Correct: (a). V₂ = 120/4 = 30 V; I₁ = 8/4 = 2 A. (b) is wrong: the primary current is smaller, not larger. (c) is wrong: 480 V is a step-up. (d) is wrong: the primary current is 2 A, not 8 A."
      },
      {
        "module": 5,
        "q": "What is the approximate forward voltage of a silicon diode?",
        "choices": [
          "0.2 V",
          "0.7 V",
          "1.5 V",
          "5 V"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A silicon diode drops about 0.7 V when forward-biased. (a) is wrong: that is a germanium or Schottky diode. (c) is wrong: that is closer to an LED. (d) is wrong: that is a supply voltage, not a diode drop."
      },
      {
        "module": 5,
        "q": "A BJT has β = 100 and a base current of 20 µA. What is the collector current?",
        "choices": [
          "2 mA",
          "20 mA",
          "0.2 mA",
          "200 mA"
        ],
        "answer": 0,
        "explanation": "Correct: (a). I_C = β × I_B = 100 × 20 µA = 2 mA. (b) is wrong: that is ten times too large. (c) is wrong: that is ten times too small. (d) is wrong: that is a hundred times too large."
      },
      {
        "module": 5,
        "q": "An inverting op-amp has R_f = 100 kΩ and R_1 = 10 kΩ. What is its voltage gain?",
        "choices": [
          "−10",
          "10",
          "−100",
          "11"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Gain = −R_f/R_1 = −10. (b) is wrong: that is the magnitude without the inverting sign. (c) is wrong: that is −R_f/R_1 × 10. (d) is wrong: that is the non-inverting gain 1 + R_f/R_1."
      },
      {
        "module": 5,
        "q": "A non-inverting op-amp has R_f = 90 kΩ and R_1 = 10 kΩ. What is its voltage gain?",
        "choices": [
          "9",
          "10",
          "−10",
          "90"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Gain = 1 + R_f/R_1 = 1 + 9 = 10. (a) is wrong: that is R_f/R_1, forgetting the +1. (c) is wrong: that is the inverting gain. (d) is wrong: that is R_f/R_1 × 10."
      },
      {
        "module": 5,
        "q": "What is the gain of a voltage follower (unity-gain buffer)?",
        "choices": [
          "0",
          "1",
          "−1",
          "Infinite"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A voltage follower has a gain of 1: the output follows the input. (a) is wrong: a gain of 0 would give no output. (c) is wrong: that is an inverting follower. (d) is wrong: the open-loop gain is very large, but the closed-loop follower gain is 1."
      },
      {
        "module": 5,
        "q": "An LED drops 2 V and is fed from 5 V through a resistor. What resistor gives 20 mA?",
        "choices": [
          "150 Ω",
          "100 Ω",
          "250 Ω",
          "25 Ω"
        ],
        "answer": 0,
        "explanation": "Correct: (a). R = (5 − 2)/0.02 = 150 Ω. (b) is wrong: that would give 30 mA. (c) is wrong: that would give 12 mA. (d) is wrong: that would give 120 mA."
      },
      {
        "module": 5,
        "q": "A half-wave rectifier has a peak input of 10 V. What is its average DC output (ideal diodes)?",
        "choices": [
          "3.18 V",
          "6.37 V",
          "10 V",
          "7.07 V"
        ],
        "answer": 0,
        "explanation": "Correct: (a). V_avg = V_p/π = 10/3.1416 = 3.18 V. (b) is wrong: that is the full-wave average. (c) is wrong: that is the peak, not the average. (d) is wrong: that is the RMS value."
      },
      {
        "module": 5,
        "q": "A full-wave rectifier has a peak input of 10 V. What is its average DC output (ideal diodes)?",
        "choices": [
          "3.18 V",
          "6.37 V",
          "10 V",
          "7.07 V"
        ],
        "answer": 1,
        "explanation": "Correct: (b). V_avg = 2V_p/π = 20/3.1416 = 6.37 V. (a) is wrong: that is the half-wave average. (c) is wrong: that is the peak, not the average. (d) is wrong: that is the RMS value."
      },
      {
        "module": 5,
        "q": "What does a Zener diode do in a circuit?",
        "choices": [
          "Amplifies signals",
          "Regulates voltage by breaking down at a set reverse voltage",
          "Stores charge",
          "Rectifies AC"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A Zener diode holds a nearly constant voltage in reverse breakdown, so it regulates voltage. (a) is wrong: that is a transistor or op-amp. (c) is wrong: that is a capacitor. (d) is wrong: that is an ordinary diode."
      },
      {
        "module": 6,
        "q": "What is 1101₂ in decimal?",
        "choices": [
          "11",
          "13",
          "15",
          "9"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 8 + 4 + 0 + 1 = 13. (a) is wrong: that is 1011₂. (c) is wrong: that is 1111₂. (d) is wrong: that is 1001₂."
      },
      {
        "module": 6,
        "q": "What is 3F₁₆ in decimal?",
        "choices": [
          "63",
          "48",
          "53",
          "31"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 3 × 16 + 15 = 63. (b) is wrong: that is 30₁₆. (c) is wrong: that is 35₁₆. (d) is wrong: that is 1F₁₆."
      },
      {
        "module": 6,
        "q": "Simplify A + A'B.",
        "choices": [
          "A",
          "A + B",
          "B",
          "0"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A + A'B = A + B (absorption). (a) is wrong: A alone is not the result. (c) is wrong: B alone is not the result. (d) is wrong: the expression is not always 0."
      },
      {
        "module": 6,
        "q": "What is the output of an XOR gate with both inputs 1?",
        "choices": [
          "1",
          "0",
          "X",
          "Depends on the clock"
        ],
        "answer": 1,
        "explanation": "Correct: (b). XOR outputs 1 only when the inputs differ; 1 and 1 are the same, so the output is 0. (a) is wrong: that is the OR output. (c) is wrong: XOR has a definite output. (d) is wrong: XOR is combinational, not clocked."
      },
      {
        "module": 6,
        "q": "What is the maximum count of a 6-bit counter?",
        "choices": [
          "32",
          "63",
          "64",
          "255"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A 6-bit counter counts 0 to 2⁶ − 1 = 63. (a) is wrong: that is 2⁵. (c) is wrong: that is 2⁶, but the count starts at 0. (d) is wrong: that is an 8-bit counter."
      },
      {
        "module": 6,
        "q": "An 8-bit ADC has a 5 V reference. What is its resolution?",
        "choices": [
          "19.5 mV",
          "5 mV",
          "39 mV",
          "2.5 mV"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 5/256 = 19.5 mV per count. (b) is wrong: that is 5/1,000. (c) is wrong: that is 5/128. (d) is wrong: that is half the reference."
      },
      {
        "module": 6,
        "q": "A signal contains frequencies up to 2 kHz. What is the minimum sampling rate (Nyquist)?",
        "choices": [
          "1 kHz",
          "2 kHz",
          "4 kHz",
          "8 kHz"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Nyquist requires sampling at least twice the highest frequency: 2 × 2 kHz = 4 kHz. (a) is wrong: that is below the signal frequency. (b) is wrong: that equals the highest frequency, not twice it. (d) is wrong: that is four times the frequency — safe, but not the minimum."
      },
      {
        "module": 6,
        "q": "Which gate is functionally complete (universal) on its own?",
        "choices": [
          "AND",
          "OR",
          "NAND",
          "XOR"
        ],
        "answer": 2,
        "explanation": "Correct: (c). NAND (and NOR) can build any logic function alone. (a) is wrong: AND alone cannot make NOT. (b) is wrong: OR alone cannot make NOT. (d) is wrong: XOR alone cannot make AND or OR."
      },
      {
        "module": 6,
        "q": "What does a D flip-flop do on a clock edge?",
        "choices": [
          "Toggles its output",
          "Copies its D input to its Q output",
          "Clears its output",
          "Sets its output to 1"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A D flip-flop copies D to Q on the clock edge and holds it. (a) is wrong: that is a T flip-flop. (c) is wrong: clearing needs a reset input. (d) is wrong: it copies D, which may be 0."
      },
      {
        "module": 6,
        "q": "What is the Laplace transform of a unit step function?",
        "choices": [
          "1/s",
          "s",
          "1/s²",
          "e^(−s)"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The Laplace transform of a unit step is 1/s. (b) is wrong: that is the transform of a derivative operator. (c) is wrong: that is the transform of a ramp. (d) is wrong: that is a time delay."
      },
      {
        "module": 6,
        "q": "What is the Laplace transform of e^(−at)?",
        "choices": [
          "1/(s − a)",
          "1/(s + a)",
          "a/s",
          "1/a"
        ],
        "answer": 1,
        "explanation": "Correct: (b). L{e^(−at)} = 1/(s + a). (a) is wrong: that is the transform of e^(at). (c) is wrong: that is not a standard transform. (d) is wrong: that is a constant, not a transform."
      },
      {
        "module": 6,
        "q": "A transfer function H(s) = 1/(s + 2) has what time constant?",
        "choices": [
          "2 s",
          "0.5 s",
          "1 s",
          "4 s"
        ],
        "answer": 1,
        "explanation": "Correct: (b). τ = 1/2 = 0.5 s. (a) is wrong: that is the pole magnitude, not the time constant. (c) is wrong: that would need a pole at −1. (d) is wrong: that is 2²."
      },
      {
        "module": 6,
        "q": "A system has poles at s = −1 and s = −2. Is it stable?",
        "choices": [
          "Yes — all poles have negative real parts",
          "No — the poles are real",
          "Marginally stable",
          "Unstable"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Poles in the left half-plane mean stability. (b) is wrong: real poles can be stable; the sign matters. (c) is wrong: marginal stability needs a pole on the imaginary axis. (d) is wrong: no pole has a positive real part."
      },
      {
        "module": 6,
        "q": "A system has a pole at s = +0.5. Is it stable?",
        "choices": [
          "Yes",
          "No — a positive real pole means instability",
          "Marginally stable",
          "Stable only at low frequency"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A pole with a positive real part grows without bound, so the system is unstable. (a) is wrong: the pole is in the right half-plane. (c) is wrong: marginal stability needs a pole on the imaginary axis. (d) is wrong: stability does not depend on frequency this way."
      },
      {
        "module": 10,
        "q": "A first-order system has a time constant of 0.5 s. About how long does its step response take to settle (within 2%)?",
        "choices": [
          "0.5 s",
          "2 s",
          "0.1 s",
          "5 s"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Settling takes about 4 time constants: 4 × 0.5 = 2 s. (a) is wrong: that is one time constant (63% of the way). (c) is wrong: that is far too fast. (d) is wrong: that is 10 time constants."
      },
      {
        "module": 10,
        "q": "In a Bode magnitude plot, a single pole causes the slope to change by:",
        "choices": [
          "+20 dB/decade",
          "−20 dB/decade",
          "+40 dB/decade",
          "0 dB/decade"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A single pole adds a −20 dB/decade slope above its corner frequency. (a) is wrong: that is a zero. (c) is wrong: that is two poles. (d) is wrong: a pole does change the slope."
      },
      {
        "module": 10,
        "q": "A power ratio of 10 corresponds to how many decibels?",
        "choices": [
          "3 dB",
          "10 dB",
          "20 dB",
          "100 dB"
        ],
        "answer": 1,
        "explanation": "Correct: (b). dB = 10 log₁₀(10) = 10 dB for power. (a) is wrong: 3 dB is a ratio of 2. (c) is wrong: 20 dB is a power ratio of 100. (d) is wrong: 100 dB is a power ratio of 10¹⁰."
      },
      {
        "module": 10,
        "q": "A voltage ratio of 100 corresponds to how many decibels?",
        "choices": [
          "20 dB",
          "40 dB",
          "10 dB",
          "100 dB"
        ],
        "answer": 1,
        "explanation": "Correct: (b). dB = 20 log₁₀(100) = 40 dB for voltage. (a) is wrong: 20 dB is a voltage ratio of 10. (c) is wrong: 10 dB is a voltage ratio of about 3.16. (d) is wrong: 100 dB is a voltage ratio of 100,000."
      },
      {
        "module": 10,
        "q": "A sine wave contains which frequencies?",
        "choices": [
          "One frequency only",
          "All frequencies",
          "Only odd harmonics",
          "Only DC"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A pure sine wave is a single frequency; harmonics appear only in non-sinusoidal waves. (b) is wrong: that is noise or an impulse. (c) is wrong: odd harmonics appear in a square wave. (d) is wrong: a sine wave has no DC component."
      },
      {
        "module": 10,
        "q": "What is the final value of a step response for H(s) = 2/(s + 1) with a unit step input?",
        "choices": [
          "0",
          "1",
          "2",
          "Infinite"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Final value = lim s→0 s × (1/s) × 2/(s+1) = 2. (a) is wrong: the system settles at 2, not 0. (b) is wrong: that is the gain of 1/(s+1). (d) is wrong: the system is stable, so the final value is finite."
      },
      {
        "module": 5,
        "q": "An inductor has L = 0.1 H and the current through it rises at 50 A/s. What voltage appears across it?",
        "choices": [
          "5 V",
          "0.5 V",
          "50 V",
          "500 V"
        ],
        "answer": 0,
        "explanation": "Correct: (a). V = L di/dt = 0.1 × 50 = 5 V. (b) is wrong: that is 0.1 × 5. (c) is wrong: that is di/dt alone. (d) is wrong: that is 0.1 × 5,000."
      },
      {
        "module": 5,
        "q": "A parallel-plate capacitor has area 0.01 m² and plate spacing 0.001 m (ε₀ = 8.85 × 10⁻¹² F/m). What is its capacitance?",
        "choices": [
          "88.5 pF",
          "8.85 pF",
          "885 pF",
          "8.85 nF"
        ],
        "answer": 0,
        "explanation": "Correct: (a). C = ε₀A/d = 8.85 × 10⁻¹² × 0.01/0.001 = 8.85 × 10⁻¹¹ F = 88.5 pF. (b) is wrong: that is ten times too small. (c) is wrong: that is ten times too large. (d) is wrong: that is a hundred times too large."
      },
      {
        "module": 5,
        "q": "What does Faraday's law say?",
        "choices": [
          "A changing magnetic flux induces a voltage",
          "A steady current produces no field",
          "Voltage equals current times resistance",
          "Charge is conserved"
        ],
        "answer": 0,
        "explanation": "Correct: (a). emf = −N dΦ/dt: a changing flux induces a voltage. (b) is wrong: a steady current does produce a magnetic field. (c) is wrong: that is Ohm's law. (d) is wrong: that is charge conservation."
      },
      {
        "module": 5,
        "q": "What is the force on a charge moving perpendicular to a magnetic field?",
        "choices": [
          "F = qvB",
          "F = qE",
          "F = 0",
          "F = qv/B"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The magnetic force is F = qvB sin θ, and sin 90° = 1. (b) is wrong: that is the electric force. (c) is wrong: the force is maximum when the motion is perpendicular. (d) is wrong: the force grows with B, it does not divide by it."
      },
      {
        "module": 5,
        "q": "What is the speed of an electromagnetic wave in free space?",
        "choices": [
          "3 × 10⁸ m/s",
          "3 × 10⁶ m/s",
          "1.5 × 10⁸ m/s",
          "9 × 10¹⁶ m/s"
        ],
        "answer": 0,
        "explanation": "Correct: (a). c = 3 × 10⁸ m/s. (b) is wrong: that is a hundred times too slow. (c) is wrong: that is half the speed of light. (d) is wrong: that is c²."
      },
      {
        "module": 5,
        "q": "Which way does current flow in a conductor, by the right-hand rule?",
        "choices": [
          "The thumb points in the current direction; the fingers curl in the field direction",
          "The thumb points against the current",
          "The fingers point along the current",
          "There is no rule"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Thumb along the current, fingers curl in the magnetic field direction. (b) is wrong: the thumb points with the current. (c) is wrong: the fingers curl around the conductor. (d) is wrong: the right-hand rule is the standard."
      },
      {
        "module": 5,
        "q": "What is skin effect?",
        "choices": [
          "Current crowds toward the surface of a conductor at high frequency",
          "Current flows only in the centre",
          "Resistance falls with frequency",
          "Voltage drops to zero"
        ],
        "answer": 0,
        "explanation": "Correct: (a). At high frequency, current flows mainly near the surface, raising the effective resistance. (b) is wrong: that is the opposite. (c) is wrong: effective resistance rises with frequency. (d) is wrong: voltage does not drop to zero."
      },
      {
        "module": 5,
        "q": "A transformer delivers 950 W from 1,000 W input. What is its efficiency?",
        "choices": [
          "95%",
          "90%",
          "105%",
          "50%"
        ],
        "answer": 0,
        "explanation": "Correct: (a). η = 950/1,000 = 95%. (b) is wrong: that would need 900 W out. (c) is wrong: efficiency cannot exceed 100%. (d) is wrong: that would need 500 W out."
      },
      {
        "module": 11,
        "q": "A 2-pole motor runs on 60 Hz. What is its synchronous speed?",
        "choices": [
          "1,800 rpm",
          "3,600 rpm",
          "1,200 rpm",
          "900 rpm"
        ],
        "answer": 1,
        "explanation": "Correct: (b). n_s = 120 × 60/2 = 3,600 rpm. (a) is wrong: that is a 4-pole motor. (c) is wrong: that is a 6-pole motor. (d) is wrong: that is an 8-pole motor."
      },
      {
        "module": 11,
        "q": "Why is power transmitted at high voltage?",
        "choices": [
          "To reduce current and so reduce I²R losses",
          "To increase the current",
          "To reduce the voltage drop to zero",
          "Because transformers only work at high voltage"
        ],
        "answer": 0,
        "explanation": "Correct: (a). High voltage means low current for the same power, and losses are I²R. (b) is wrong: high voltage reduces current. (c) is wrong: the drop is reduced, not zero. (d) is wrong: transformers work at any voltage."
      },
      {
        "module": 11,
        "q": "What does a power-factor correction capacitor do?",
        "choices": [
          "Supplies reactive power locally, raising the power factor",
          "Consumes real power",
          "Increases the load current",
          "Reduces the voltage"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Capacitors supply VARs locally, so the supply carries less reactive current and the power factor rises. (b) is wrong: an ideal capacitor consumes no real power. (c) is wrong: correction reduces the supply current. (d) is wrong: correction slightly raises the voltage, it does not reduce it."
      },
      {
        "module": 11,
        "q": "A DC motor's back EMF does what as the motor speeds up?",
        "choices": [
          "Falls",
          "Rises, opposing the supply voltage",
          "Stays constant",
          "Reverses the supply"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Back EMF grows with speed and opposes the supply, limiting the current. (a) is wrong: back EMF grows with speed. (c) is wrong: back EMF is proportional to speed. (d) is wrong: back EMF never exceeds the supply in normal running."
      },
      {
        "module": 11,
        "q": "In a three-phase wye connection, how does line voltage relate to phase voltage?",
        "choices": [
          "V_L = V_phase",
          "V_L = √3 × V_phase",
          "V_L = V_phase/√3",
          "V_L = 3 × V_phase"
        ],
        "answer": 1,
        "explanation": "Correct: (b). In wye, V_L = √3 × V_phase. (a) is wrong: that is the delta connection. (c) is wrong: that is upside down. (d) is wrong: the factor is √3, not 3."
      },
      {
        "module": 11,
        "q": "In a three-phase delta connection, how does line current relate to phase current?",
        "choices": [
          "I_L = I_phase",
          "I_L = √3 × I_phase",
          "I_L = I_phase/√3",
          "I_L = 3 × I_phase"
        ],
        "answer": 1,
        "explanation": "Correct: (b). In delta, I_L = √3 × I_phase. (a) is wrong: that is the wye connection for current. (c) is wrong: that is upside down. (d) is wrong: the factor is √3, not 3."
      },
      {
        "module": 11,
        "q": "What is per-unit analysis used for in power systems?",
        "choices": [
          "Expressing quantities as fractions of a chosen base, so different voltage levels compare directly",
          "Measuring power in watts",
          "Counting the number of units",
          "Sizing breakers only"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Per-unit values normalise quantities to a base, so a 480 V and a 13.8 kV system compare on the same scale. (b) is wrong: watts are absolute units. (c) is wrong: per-unit is not a count. (d) is wrong: per-unit is used for all power-system analysis, not only breakers."
      },
      {
        "module": 11,
        "q": "Which device protects a circuit by opening when current exceeds its rating?",
        "choices": [
          "A fuse or circuit breaker",
          "A transformer",
          "A capacitor",
          "A resistor"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Fuses and breakers open the circuit on overcurrent. (b) is wrong: a transformer changes voltage. (c) is wrong: a capacitor stores charge. (d) is wrong: a resistor limits current but does not open."
      },
      {
        "module": 11,
        "q": "A motor draws 10 A at 480 V three-phase with PF 0.8. What is its apparent power?",
        "choices": [
          "8,315 VA",
          "6,652 VA",
          "4,800 VA",
          "3,840 VA"
        ],
        "answer": 0,
        "explanation": "Correct: (a). S = √3 × 480 × 10 = 8,315 VA. (b) is wrong: that is the real power (S × PF). (c) is wrong: that is 480 × 10, forgetting √3. (d) is wrong: that is 480 × 10 × 0.8."
      },
      {
        "module": 11,
        "q": "What is the difference between a relay and a contactor?",
        "choices": [
          "A contactor is a heavy-duty relay for switching power loads; a relay switches control signals",
          "There is no difference",
          "A relay switches power; a contactor switches signals",
          "A contactor is a type of sensor"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Contactors are built for high-current power switching; relays are for low-current control. (b) is wrong: the construction and ratings differ. (c) is wrong: that is backwards. (d) is wrong: a contactor is a switch, not a sensor."
      },
      {
        "module": 10,
        "q": "Which control term acts on the accumulated past error?",
        "choices": [
          "Proportional",
          "Integral",
          "Derivative",
          "Feedforward"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The integral term accumulates past error and removes steady-state offset. (a) is wrong: P acts on the present error. (c) is wrong: D acts on the rate of change. (d) is wrong: feedforward is a different technique."
      },
      {
        "module": 10,
        "q": "What is open-loop control?",
        "choices": [
          "Control with feedback",
          "Control without feedback — the output is not measured",
          "Control with a sensor",
          "Control with a PID"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Open-loop drives an output without measuring the result. (a) is wrong: that is closed-loop. (c) is wrong: a sensor implies feedback. (d) is wrong: PID is a closed-loop method."
      },
      {
        "module": 10,
        "q": "A type-1 system has what steady-state error for a step input?",
        "choices": [
          "Zero",
          "A constant non-zero error",
          "Infinite",
          "It depends on the gain"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A type-1 system (one integrator) has zero steady-state error for a step. (b) is wrong: that is a type-0 system. (c) is wrong: the error is finite. (d) is wrong: the type decides it, not the gain."
      },
      {
        "module": 10,
        "q": "What does gain margin tell you?",
        "choices": [
          "How much the gain can rise before instability",
          "The steady-state error",
          "The rise time",
          "The overshoot"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Gain margin is how much the loop gain can increase before the system goes unstable. (b) is wrong: that is a different measure. (c) is wrong: that is a time-domain measure. (d) is wrong: that is also time-domain."
      },
      {
        "module": 10,
        "q": "What is a root locus?",
        "choices": [
          "A plot of how the closed-loop poles move as the gain changes",
          "A plot of the step response",
          "A wiring diagram",
          "A Bode plot"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The root locus shows pole locations versus gain. (b) is wrong: that is the step response. (c) is wrong: that is a schematic. (d) is wrong: a Bode plot shows gain and phase versus frequency."
      },
      {
        "module": 10,
        "q": "Which of these is a closed-loop system?",
        "choices": [
          "A toaster on a timer",
          "A thermostat controlling a heater",
          "A light switch",
          "An open-loop stepper motor"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A thermostat measures the room and corrects the error — closed-loop. (a) is wrong: a timer has no feedback. (c) is wrong: a switch has no feedback. (d) is wrong: an open-loop stepper has no feedback."
      },
      {
        "module": 10,
        "q": "What does the derivative term in a PID controller do?",
        "choices": [
          "Removes steady-state offset",
          "Damps overshoot by acting on the rate of change of error",
          "Acts on the present error",
          "Increases the gain"
        ],
        "answer": 1,
        "explanation": "Correct: (b). D acts on the error's rate of change and damps overshoot. (a) is wrong: that is the integral term. (c) is wrong: that is the proportional term. (d) is wrong: D does not simply increase gain."
      },
      {
        "module": 6,
        "q": "How many layers does the OSI model have?",
        "choices": [
          "4",
          "5",
          "7",
          "3"
        ],
        "answer": 2,
        "explanation": "Correct: (c). The OSI model has 7 layers: physical, data link, network, transport, session, presentation, application. (a) is wrong: that is the TCP/IP model's layer count in some versions. (b) is wrong: that is the TCP/IP model. (d) is wrong: that is too few."
      },
      {
        "module": 6,
        "q": "Which protocol is connectionless and does not check delivery?",
        "choices": [
          "TCP",
          "UDP",
          "HTTP",
          "SMTP"
        ],
        "answer": 1,
        "explanation": "Correct: (b). UDP sends fast without checking delivery; TCP is reliable and resends lost data. (a) is wrong: TCP is reliable and connection-oriented. (c) is wrong: HTTP runs over TCP. (d) is wrong: SMTP runs over TCP."
      },
      {
        "module": 6,
        "q": "Which of these is a private IPv4 address?",
        "choices": [
          "8.8.8.8",
          "192.168.1.10",
          "200.100.50.25",
          "1.1.1.1"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 192.168.x.x is a private range. (a) is wrong: 8.8.8.8 is Google's public DNS. (c) is wrong: 200.100.50.25 is public. (d) is wrong: 1.1.1.1 is a public DNS address."
      },
      {
        "module": 6,
        "q": "A /24 subnet mask is:",
        "choices": [
          "255.255.255.0",
          "255.255.0.0",
          "255.0.0.0",
          "255.255.255.255"
        ],
        "answer": 0,
        "explanation": "Correct: (a). /24 means 24 network bits: 255.255.255.0. (b) is wrong: that is /16. (c) is wrong: that is /8. (d) is wrong: that is /32."
      },
      {
        "module": 6,
        "q": "How many usable host addresses does a /24 network have?",
        "choices": [
          "254",
          "256",
          "255",
          "24"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 2⁸ = 256 addresses minus the network and broadcast addresses = 254. (b) is wrong: that counts the network and broadcast addresses. (c) is wrong: that is 256 − 1. (d) is wrong: that is the prefix length."
      },
      {
        "module": 6,
        "q": "Which port does DNS use?",
        "choices": [
          "80",
          "53",
          "443",
          "3389"
        ],
        "answer": 1,
        "explanation": "Correct: (b). DNS uses port 53. (a) is wrong: 80 is HTTP. (c) is wrong: 443 is HTTPS. (d) is wrong: 3389 is RDP."
      },
      {
        "module": 6,
        "q": "Which port does HTTPS use?",
        "choices": [
          "80",
          "443",
          "22",
          "25"
        ],
        "answer": 1,
        "explanation": "Correct: (b). HTTPS uses port 443. (a) is wrong: 80 is HTTP. (c) is wrong: 22 is SSH. (d) is wrong: 25 is SMTP."
      },
      {
        "module": 6,
        "q": "In ASCII, what is the decimal code for 'A'?",
        "choices": [
          "65",
          "97",
          "48",
          "32"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 'A' is 65 in ASCII. (b) is wrong: 97 is 'a'. (c) is wrong: 48 is '0'. (d) is wrong: 32 is the space character."
      },
      {
        "module": 7,
        "q": "What is the future worth of $2,000 at 7% for 4 years?",
        "choices": [
          "$2,621.60",
          "$2,560.00",
          "$2,280.00",
          "$2,000.00"
        ],
        "answer": 0,
        "explanation": "Correct: (a). F = 2,000 × (1.07)⁴ = 2,000 × 1.3108 = $2,621.60. (b) is wrong: that is simple interest. (c) is wrong: that is 7% for 2 years. (d) is wrong: that is no interest at all."
      },
      {
        "module": 7,
        "q": "What is the present worth of $5,000 due in 3 years at 8%?",
        "choices": [
          "$3,969.16",
          "$4,000.00",
          "$6,298.56",
          "$4,629.63"
        ],
        "answer": 0,
        "explanation": "Correct: (a). P = 5,000/(1.08)³ = 5,000/1.2597 = $3,969.16. (b) is wrong: that is too large. (c) is wrong: that is the future worth. (d) is wrong: that is one year of discounting only."
      },
      {
        "module": 7,
        "q": "What is the annual worth of $8,000 over 8 years at 6% ((A/P, 6%, 8) = 0.1610)?",
        "choices": [
          "$1,000",
          "$1,288",
          "$1,610",
          "$2,000"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A = 8,000 × 0.1610 = $1,288 per year. (a) is wrong: that is 8,000/8, ignoring interest. (c) is wrong: that is 10,000 × 0.1610. (d) is wrong: that is too large."
      },
      {
        "module": 7,
        "q": "A machine costs $30,000 with a $3,000 salvage value and a 9-year life. What is its straight-line depreciation per year?",
        "choices": [
          "$3,000",
          "$3,333",
          "$2,700",
          "$3,666"
        ],
        "answer": 0,
        "explanation": "Correct: (a). (30,000 − 3,000)/9 = $3,000 per year. (b) is wrong: that is 30,000/9, forgetting salvage. (c) is wrong: that is (30,000 − 5,700)/9. (d) is wrong: that is (30,000 + 3,000)/9."
      },
      {
        "module": 7,
        "q": "Fixed costs are $15,000, price is $60, variable cost is $35 per unit. What is the break-even quantity?",
        "choices": [
          "600 units",
          "250 units",
          "429 units",
          "1,000 units"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 15,000/(60 − 35) = 600 units. (b) is wrong: that is 15,000/60. (c) is wrong: that is 15,000/35. (d) is wrong: that is 15,000/15."
      },
      {
        "module": 7,
        "q": "Your manager asks you to approve a product you know has a safety flaw, promising it will be fixed later. What do you do?",
        "choices": [
          "Approve it — the fix is promised",
          "Refuse — public safety comes first",
          "Approve it and document the flaw",
          "Ask for a pay rise"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Public safety, health, and welfare come first — never approve a known safety flaw. (a) is wrong: a promise does not make it safe. (c) is wrong: documenting a flaw does not fix it. (d) is wrong: money does not change the duty."
      },
      {
        "module": 7,
        "q": "Which degree is required for PE licensure?",
        "choices": [
          "An ABET-accredited engineering degree",
          "A business degree",
          "A CSWA certificate",
          "No degree is required"
        ],
        "answer": 0,
        "explanation": "Correct: (a). PE licensure requires an ABET-accredited engineering degree, plus typically 4 years of experience and both exams. (b) is wrong: a business degree does not qualify. (c) is wrong: the CSWA is a CAD credential. (d) is wrong: the degree is required."
      },
      {
        "module": 12,
        "q": "Which of these is a wish rather than a requirement?",
        "choices": [
          "The device must lift 5 kg, verified by lifting a 5 kg test mass",
          "The device must be strong",
          "The device must sort 60 washers a minute",
          "The device must run on 24 V, verified with a meter"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 'Strong' has no number, unit, or test — it is a wish. (a) is wrong: that has a number, a unit, and a test. (c) is wrong: that has a number and a test. (d) is wrong: that has a number and a test."
      },
      {
        "module": 12,
        "q": "You have 320 minutes for 110 questions. If you answer 55 questions in the first 110 minutes, how much time per question remains?",
        "choices": [
          "About 3.8 minutes",
          "2.9 minutes",
          "2.0 minutes",
          "5.8 minutes"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Time left is 210 minutes for 55 questions: 210/55 = 3.82, about 3.8 minutes each. (b) is wrong: 2.9 is the overall average. (c) is wrong: that is too fast. (d) is wrong: that would need 319 minutes left."
      },
      {
        "module": 12,
        "q": "On the FE, why should you never leave a question blank?",
        "choices": [
          "A blank is always wrong and there is no penalty for guessing",
          "Blanks earn partial credit",
          "Blanks are not counted",
          "The exam stops at the first blank"
        ],
        "answer": 0,
        "explanation": "Correct: (a). There is no penalty for guessing, so a guess can only help. (b) is wrong: blanks earn nothing. (c) is wrong: blanks count as wrong. (d) is wrong: the exam does not stop."
      },
      {
        "module": 5,
        "q": "What is the voltage across a 10 Ω resistor carrying 2 A?",
        "choices": [
          "20 V",
          "5 V",
          "12 V",
          "0.2 V"
        ],
        "answer": 0,
        "explanation": "Correct: (a). V = IR = 10 × 2 = 20 V. (b) is wrong: that is R/I. (c) is wrong: that is not the product. (d) is wrong: that is I/R."
      },
      {
        "module": 5,
        "q": "A load has P = 400 W and Q = 300 VAR. What is its apparent power?",
        "choices": [
          "500 VA",
          "700 VA",
          "100 VA",
          "400 VA"
        ],
        "answer": 0,
        "explanation": "Correct: (a). S = √(400² + 300²) = √250,000 = 500 VA. (b) is wrong: that adds P and Q. (c) is wrong: that subtracts them. (d) is wrong: that is P alone."
      }
    ]
  },
  "cswa-prep": {
    "title": "CSWA Knowledge Practice Exam",
    "minutes": 120,
    "passPercent": 70,
    "coverage": "50 original knowledge questions in the CSWA's style: sketching, features, assemblies, drawings, mass properties, and design intent. Practice benchmark only, and knowledge only: the real CSWA exam is 3 hours with 14 live modeling tasks in SOLIDWORKS through TesterPRO, scored out of 240 points and passing at 165 — this text-only practice exam cannot grade live modeling, so the 70% used here is a practice benchmark only, never the real pass mark.",
    "questions": [
      {
        "module": 8,
        "q": "How long is the real CSWA exam?",
        "choices": [
          "90 minutes",
          "2 hours",
          "3 hours",
          "4 hours"
        ],
        "answer": 2,
        "explanation": "Correct: (c). The real CSWA is 3 hours long. (a) is wrong: that is an ACP exam length. (b) is wrong: that is too short. (d) is wrong: that is too long."
      },
      {
        "module": 8,
        "q": "How many tasks does the real CSWA exam have?",
        "choices": [
          "10",
          "12",
          "14",
          "20"
        ],
        "answer": 2,
        "explanation": "Correct: (c). The real CSWA has 14 tasks. (a) is wrong: that is too few. (b) is wrong: that is too few. (d) is wrong: that is too many."
      },
      {
        "module": 8,
        "q": "What is the CSWA scored out of, and what is the pass mark?",
        "choices": [
          "100 points, pass 70",
          "240 points, pass 165",
          "1,000 points, pass 700",
          "900 points, pass 675"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The CSWA is scored out of 240 points and passes at 165. (a) is wrong: the CSWA is not scored out of 100. (c) is wrong: that is an Adobe scaled score. (d) is wrong: that is a CompTIA A+ scaled score."
      },
      {
        "module": 8,
        "q": "What percentage is the CSWA pass mark (165 out of 240)?",
        "choices": [
          "70%",
          "68.75%",
          "65%",
          "75%"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 165/240 = 68.75%. (a) is wrong: that is this course's practice benchmark, not the CSWA pass mark. (c) is wrong: 156/240 would be 65%. (d) is wrong: 180/240 would be 75%."
      },
      {
        "module": 8,
        "q": "How much does a CSWA voucher typically cost?",
        "choices": [
          "$225",
          "Typically $99",
          "$175",
          "$50"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A CSWA voucher typically costs $99 — labelled 'typically' because the price is set by the provider and can change. (a) is wrong: $225 is the FE fee. (c) is wrong: $175 is a stale FE figure. (d) is wrong: that is not the CSWA voucher price."
      },
      {
        "module": 8,
        "q": "You fail the CSWA on 1 March. What is the earliest you can retake it?",
        "choices": [
          "2 March",
          "8 March",
          "15 March",
          "31 March"
        ],
        "answer": 2,
        "explanation": "Correct: (c). The retake wait is 14 days, so 1 March + 14 days = 15 March. (a) is wrong: that is 1 day later. (b) is wrong: that is 7 days later. (d) is wrong: that is 30 days later."
      },
      {
        "module": 8,
        "q": "What application does the real CSWA exam run in?",
        "choices": [
          "TesterPRO",
          "Pearson VUE OnVUE",
          "Certiport Compass",
          "ProctorU"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The real CSWA runs live in SOLIDWORKS through TesterPRO. (b) is wrong: Pearson VUE hosts the FE, not the CSWA. (c) is wrong: Certiport hosts Adobe exams. (d) is wrong: that is a different proctoring service."
      },
      {
        "module": 8,
        "q": "You are not at a college. Which CSWA version should you take?",
        "choices": [
          "CSWA–Academic",
          "The commercial version, available on demand",
          "Either — they are identical",
          "Neither — the CSWA needs a college"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The commercial version is on demand; the Academic version needs a qualified institution and proctoring. (a) is wrong: the Academic version needs an institution. (c) is wrong: the delivery differs. (d) is wrong: the commercial version does not need a college."
      },
      {
        "module": 8,
        "q": "Can this app grade your live CAD modeling for the CSWA?",
        "choices": [
          "Yes — it grades models",
          "No — it tests CAD knowledge only; you must practise in real SOLIDWORKS",
          "Yes, but only sketches",
          "Only if you upload a file"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The app tests knowledge of CAD but cannot grade live modeling — practise in real SOLIDWORKS. (a) is wrong: the app cannot grade models. (c) is wrong: it cannot grade sketches either. (d) is wrong: uploading a file does not make it gradable."
      },
      {
        "module": 8,
        "q": "Your sketch is black in SOLIDWORKS. What does that mean?",
        "choices": [
          "Under-defined — it can still move",
          "Fully defined",
          "The sketch has an error",
          "The sketch is hidden"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Black means fully defined; blue means under-defined. (a) is wrong: under-defined sketches are blue. (c) is wrong: an error shows differently. (d) is wrong: hidden sketches are not shown."
      },
      {
        "module": 8,
        "q": "What should you do before dimensioning a sketch?",
        "choices": [
          "Add relations first",
          "Extrude first",
          "Add fillets first",
          "Dimension from the wrong plane"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Add relations (horizontal, vertical, coincident, tangent) before dimensions. (b) is wrong: you cannot extrude an unfinished sketch. (c) is wrong: fillets go last. (d) is wrong: dimension from the origin or a datum."
      },
      {
        "module": 8,
        "q": "Which document units should you check before starting a CSWA part?",
        "choices": [
          "MMGS (millimetres)",
          "IPS (inches) always",
          "Any units — it does not matter",
          "CGS always"
        ],
        "answer": 0,
        "explanation": "Correct: (a). CSWA parts are usually modelled in MMGS; check the units first, because a part in the wrong units fails. (b) is wrong: inches are wrong when the exam expects millimetres. (c) is wrong: units matter enormously. (d) is wrong: CGS is not the usual CSWA unit system."
      },
      {
        "module": 8,
        "q": "Which sketch tool makes a rectangle with two semicircular ends?",
        "choices": [
          "Line",
          "Slot",
          "Circle",
          "Spline"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The Slot tool draws a slot — a rectangle with two semicircles. (a) is wrong: lines would need manual tangencies. (c) is wrong: a circle is round, not a slot. (d) is wrong: a spline is a freeform curve."
      },
      {
        "module": 8,
        "q": "What does Offset Entities do?",
        "choices": [
          "Copies a profile at a set distance",
          "Deletes a sketch",
          "Mirrors a feature",
          "Adds a fillet"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Offset Entities copies a sketch profile at a distance. (b) is wrong: that is Delete. (c) is wrong: that is Mirror Entities. (d) is wrong: that is the Fillet feature."
      },
      {
        "module": 8,
        "q": "What does Convert Entities do?",
        "choices": [
          "Projects existing edges into the sketch",
          "Converts a part to an assembly",
          "Changes the units",
          "Exports a drawing"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Convert Entities projects model edges into the active sketch. (b) is wrong: that is not a sketch tool. (c) is wrong: units are a document setting. (d) is wrong: exporting is a file operation."
      },
      {
        "module": 8,
        "q": "Which feature adds material by extruding a sketch?",
        "choices": [
          "Extruded Cut",
          "Boss-Extrude",
          "Shell",
          "Fillet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Boss-Extrude adds material. (a) is wrong: Extruded Cut removes material. (c) is wrong: Shell hollows a part. (d) is wrong: Fillet rounds an edge."
      },
      {
        "module": 8,
        "q": "Which feature removes material by extruding a sketch?",
        "choices": [
          "Boss-Extrude",
          "Extruded Cut",
          "Revolved Boss",
          "Swept Boss"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Extruded Cut removes material. (a) is wrong: Boss-Extrude adds material. (c) is wrong: Revolved Boss adds material by revolving. (d) is wrong: Swept Boss adds material along a path."
      },
      {
        "module": 8,
        "q": "Which end condition cuts through the entire part?",
        "choices": [
          "Blind",
          "Through All",
          "Up to Surface",
          "Offset"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Through All goes through everything. (a) is wrong: Blind goes a set distance. (c) is wrong: Up to Surface stops at a face. (d) is wrong: Offset is a start condition, not an end condition."
      },
      {
        "module": 8,
        "q": "Which feature spins a sketch around an axis to make a solid?",
        "choices": [
          "Boss-Extrude",
          "Revolved Boss",
          "Swept Boss",
          "Loft"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Revolved Boss spins a profile around an axis. (a) is wrong: Boss-Extrude pushes straight. (c) is wrong: Swept Boss follows a path. (d) is wrong: Loft blends between profiles."
      },
      {
        "module": 8,
        "q": "Which feature blends between two or more profiles?",
        "choices": [
          "Loft",
          "Sweep",
          "Extrude",
          "Revolve"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Loft blends between profiles. (b) is wrong: Sweep pushes one profile along a path. (c) is wrong: Extrude pushes one profile straight. (d) is wrong: Revolve spins one profile."
      },
      {
        "module": 8,
        "q": "When should you add fillets and chamfers in a part?",
        "choices": [
          "First",
          "Last",
          "Before the first sketch",
          "Never"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Fillets and chamfers go last — they are the first features to fail when a sketch changes. (a) is wrong: adding them first guarantees failures later. (c) is wrong: there is no feature before the first sketch. (d) is wrong: fillets are needed, just late."
      },
      {
        "module": 8,
        "q": "What does Shell do?",
        "choices": [
          "Adds material",
          "Hollows a part to a set wall thickness",
          "Cuts a hole",
          "Mirrors a feature"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Shell hollows a part, leaving walls of a set thickness. (a) is wrong: Shell removes material. (c) is wrong: that is a cut or Hole Wizard. (d) is wrong: that is Mirror."
      },
      {
        "module": 8,
        "q": "What is Hole Wizard for?",
        "choices": [
          "Making standard holes — counterbore, countersink, tapped — to a real standard",
          "Making any shape",
          "Adding fillets",
          "Creating assemblies"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Hole Wizard makes standard holes to a real standard. (b) is wrong: it makes holes, not any shape. (c) is wrong: fillets are a different feature. (d) is wrong: assemblies are built in assembly files."
      },
      {
        "module": 8,
        "q": "Which pattern repeats a feature around an axis?",
        "choices": [
          "Linear Pattern",
          "Circular Pattern",
          "Mirror",
          "Fill Pattern"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Circular Pattern repeats around an axis. (a) is wrong: Linear Pattern repeats along a direction. (c) is wrong: Mirror copies across a plane. (d) is wrong: Fill Pattern fills an area, not around an axis."
      },
      {
        "module": 8,
        "q": "A colleague changes one dimension in your SOLIDWORKS bracket from 50 mm to 60 mm, and three other features break. What went wrong, and what should have been done differently?",
        "choices": [
          "The model was built with no design intent — its features were not driven by the right dimensions and relations, so it should be rebuilt with the base sketch and driving dimensions planned first.",
          "The model used too few features — more features would have absorbed the change.",
          "The 60 mm dimension itself was wrong and must be changed back.",
          "SOLIDWORKS cannot handle dimension changes once a model is built."
        ],
        "answer": 0,
        "explanation": "Correct: (a). Design intent is the plan behind a model: which dimensions drive it and what should happen when a size changes. Without it, one edit breaks the features built on top. (b) is wrong — more features do not fix a model with no intent; they usually make it more fragile. (c) is wrong because the change was intended — the problem is how the model was built, not the new size. (d) is wrong — SOLIDWORKS is built for exactly this: a model with good design intent updates cleanly when a dimension changes."
      },
      {
        "module": 8,
        "q": "What do configurations store?",
        "choices": [
          "Different versions of a part — sizes or suppressed features — in one file",
          "Different files",
          "Drawing views only",
          "Material colours only"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Configurations store versions of a part in one file. (b) is wrong: configurations live in one file. (c) is wrong: drawings are separate documents. (d) is wrong: configurations can change size and features, not just colour."
      },
      {
        "module": 8,
        "q": "What do equations do in SOLIDWORKS?",
        "choices": [
          "Drive dimensions from a formula, so one change updates the part",
          "Add text to a drawing",
          "Calculate mass properties",
          "Create mates"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Equations link dimensions to a formula. (b) is wrong: that is a note. (c) is wrong: mass properties are calculated automatically. (d) is wrong: mates are assembly constraints."
      },
      {
        "module": 8,
        "q": "You need two flat faces to stay touching in an assembly. Which mate do you use?",
        "choices": [
          "Concentric",
          "Coincident",
          "Distance",
          "Angle"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A Coincident mate makes faces touch. (a) is wrong: Concentric aligns axes. (c) is wrong: Distance sets a gap. (d) is wrong: Angle sets an angle between faces."
      },
      {
        "module": 8,
        "q": "Which mate makes two faces touch?",
        "choices": [
          "Concentric",
          "Coincident",
          "Parallel",
          "Tangent"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A Coincident mate makes faces (or edges, or points) touch. (a) is wrong: Concentric aligns axes. (c) is wrong: Parallel keeps faces parallel without touching. (d) is wrong: Tangent makes a face touch a curved surface tangentially."
      },
      {
        "module": 8,
        "q": "What does an under-mated part do in an assembly?",
        "choices": [
          "It cannot move",
          "It can still move — a degree of freedom is free",
          "It disappears",
          "It turns red"
        ],
        "answer": 1,
        "explanation": "Correct: (b). An under-mated part still has a free degree of freedom. (a) is wrong: that is a fully mated part. (c) is wrong: parts do not disappear. (d) is wrong: colour is not the indicator."
      },
      {
        "module": 8,
        "q": "A steel block is 80 mm × 60 mm × 25 mm. What is its mass (density 7,850 kg/m³)?",
        "choices": [
          "0.942 kg",
          "0.785 kg",
          "1.57 kg",
          "0.0942 kg"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Volume = 120,000 mm³ = 1.2 × 10⁻⁴ m³; mass = 7,850 × 1.2 × 10⁻⁴ = 0.942 kg. (b) is wrong: that is the mass of a 100 × 50 × 20 mm block. (c) is wrong: that is far too large. (d) is wrong: that is ten times too small."
      },
      {
        "module": 8,
        "q": "An aluminium block is 100 mm × 50 mm × 20 mm. What is its mass (density 2,700 kg/m³)?",
        "choices": [
          "0.27 kg",
          "0.785 kg",
          "2.7 kg",
          "0.027 kg"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Volume = 1 × 10⁻⁴ m³; mass = 2,700 × 10⁻⁴ = 0.27 kg. (b) is wrong: that is the mass of the same block in steel. (c) is wrong: that is ten times too large. (d) is wrong: that is ten times too small."
      },
      {
        "module": 8,
        "q": "If your CSWA practice part's mass is higher than the target, what does that tell you?",
        "choices": [
          "The material is wrong",
          "A dimension is too large or an extra feature was added",
          "The units are wrong",
          "Nothing — mass does not matter"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A heavier model means too much material — a wrong dimension or an extra feature. (a) is wrong: the material is set by the problem; check dimensions first. (c) is wrong: wrong units would usually change the mass by a large factor. (d) is wrong: mass properties are the CSWA's check."
      },
      {
        "module": 8,
        "q": "What do mass properties include?",
        "choices": [
          "Mass, volume, centre of mass, and moments of inertia",
          "Only the mass",
          "Only the volume",
          "The part number"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Mass properties are mass, volume, centre of mass, and moments of inertia. (b) is wrong: they include more than mass. (c) is wrong: they include more than volume. (d) is wrong: the part number is not a mass property."
      },
      {
        "module": 8,
        "q": "What is reference geometry used for?",
        "choices": [
          "Building features where no face exists — planes, axes, coordinate systems",
          "Dimensioning drawings",
          "Adding colour",
          "Creating mates only"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Reference planes, axes, and coordinate systems let you build where no face exists. (b) is wrong: dimensioning is a drawing task. (c) is wrong: colour is appearance. (d) is wrong: reference geometry is used for features too, not only mates."
      },
      {
        "module": 8,
        "q": "Which drawing view shows the part from the front?",
        "choices": [
          "Top view",
          "Front view",
          "Isometric view",
          "Section view"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The front view shows the part from the front. (a) is wrong: the top view shows it from above. (c) is wrong: the isometric view shows it in 3D. (d) is wrong: a section view cuts through the part."
      },
      {
        "module": 8,
        "q": "What does a title block contain?",
        "choices": [
          "The part name, material, scale, and drawing information",
          "Only the part name",
          "The mass properties",
          "The feature tree"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The title block carries the part name, material, scale, and drawing data. (b) is wrong: it carries more than the name. (c) is wrong: mass properties are not in the title block. (d) is wrong: the feature tree is in the part file."
      },
      {
        "module": 8,
        "q": "What should you dimension from in a drawing?",
        "choices": [
          "Random edges",
          "Datums",
          "The title block",
          "The sheet border"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Dimension from datums, so the part can be made and checked consistently. (a) is wrong: random edges give inconsistent dimensions. (c) is wrong: the title block is not a datum. (d) is wrong: the sheet border is not part of the design."
      },
      {
        "module": 8,
        "q": "A part needs a 10 mm diameter hole, 20 mm deep, with a flat bottom at a set depth. Which end condition do you use?",
        "choices": [
          "Through All",
          "Blind at 20 mm",
          "Up to Surface",
          "Offset"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A Blind end condition at 20 mm gives a flat-bottomed hole of the set depth. (a) is wrong: Through All would go through the whole part. (c) is wrong: Up to Surface stops at a face, not a depth. (d) is wrong: Offset is a start condition."
      },
      {
        "module": 8,
        "q": "What is the first thing to check when you open a CSWA exam part file?",
        "choices": [
          "The feature tree",
          "The document units",
          "The colour",
          "The drawing"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Check the units (MMGS) first — a part modelled in the wrong units fails. (a) is wrong: the feature tree matters, but after the units. (c) is wrong: colour does not affect the geometry check. (d) is wrong: the drawing comes later."
      },
      {
        "module": 8,
        "q": "What does Mirror Entities do?",
        "choices": [
          "Copies sketch geometry across a centreline",
          "Deletes a sketch",
          "Adds a fillet",
          "Creates an assembly"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Mirror Entities copies sketch geometry across a centreline. (b) is wrong: that is Delete. (c) is wrong: that is the Fillet feature. (d) is wrong: assemblies are separate files."
      },
      {
        "module": 8,
        "q": "Which relation makes two lines perpendicular?",
        "choices": [
          "Horizontal",
          "Perpendicular",
          "Tangent",
          "Coincident"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The Perpendicular relation makes lines meet at 90°. (a) is wrong: Horizontal makes a line level. (c) is wrong: Tangent makes a line touch a curve smoothly. (d) is wrong: Coincident makes points share a location."
      },
      {
        "module": 8,
        "q": "Which relation makes a line touch a circle smoothly?",
        "choices": [
          "Tangent",
          "Concentric",
          "Symmetric",
          "Equal"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The Tangent relation makes a line touch a curve without crossing it. (b) is wrong: Concentric shares a centre point. (c) is wrong: Symmetric mirrors geometry. (d) is wrong: Equal makes two entities the same size."
      },
      {
        "module": 8,
        "q": "What is the best order for modelling a CSWA part?",
        "choices": [
          "Sketch fully defined, features in order, fillets last, check mass properties",
          "Fillets first, sketch last",
          "Extrude first, sketch later",
          "Assembly first, part later"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Fully define the sketch, build features in order, add fillets last, and check mass properties after each part. (b) is wrong: fillets first guarantees failures. (c) is wrong: you cannot extrude before sketching. (d) is wrong: parts come before assemblies."
      },
      {
        "module": 8,
        "q": "What happens if you change a dimension in an under-defined sketch?",
        "choices": [
          "Nothing",
          "The sketch can move unpredictably and the model can break",
          "The model improves",
          "The sketch turns black"
        ],
        "answer": 1,
        "explanation": "Correct: (b). An under-defined sketch can drift when a dimension changes, breaking the model. (a) is wrong: under-defined geometry does move. (c) is wrong: it does not improve. (d) is wrong: the sketch turns black only when fully defined."
      },
      {
        "module": 8,
        "q": "What is a slot in a sketch?",
        "choices": [
          "A rectangle with two semicircular ends",
          "A circle",
          "A triangle",
          "A spline"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A slot is a rectangle with two semicircular ends, drawn with the Slot tool. (b) is wrong: a circle is round. (c) is wrong: a triangle has three sides. (d) is wrong: a spline is a freeform curve."
      },
      {
        "module": 8,
        "q": "Which feature would you use to make a thin-walled container from a solid block?",
        "choices": [
          "Boss-Extrude",
          "Shell",
          "Revolve",
          "Loft"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Shell hollows a part to a wall thickness. (a) is wrong: Boss-Extrude adds material. (c) is wrong: Revolve spins a profile. (d) is wrong: Loft blends profiles."
      },
      {
        "module": 8,
        "q": "What does the CSWA check your model against?",
        "choices": [
          "The target geometry and mass properties",
          "Your name",
          "The time you took",
          "Your sketch colour"
        ],
        "answer": 0,
        "explanation": "Correct: (a). TesterPRO checks your geometry and mass properties against the target. (b) is wrong: your name is not graded. (c) is wrong: time is limited but not scored. (d) is wrong: sketch colour is a modelling aid, not a score."
      },
      {
        "module": 8,
        "q": "How many points is each CSWA task worth on average (240 points over 14 tasks)?",
        "choices": [
          "About 17 points",
          "10 points",
          "24 points",
          "50 points"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 240/14 ≈ 17.1 points per task on average (tasks are weighted differently in reality). (b) is wrong: that would total 140. (c) is wrong: that would total 336. (d) is wrong: that would total 700."
      },
      {
        "module": 8,
        "q": "What is the difference between a Boss-Extrude and a Cut-Extrude?",
        "choices": [
          "Boss-Extrude adds material; Cut-Extrude removes material",
          "There is no difference",
          "Boss-Extrude removes material; Cut-Extrude adds it",
          "Boss-Extrude is for assemblies only"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Boss-Extrude adds material and Extruded Cut removes it. (b) is wrong: they do opposite things. (c) is wrong: that is backwards. (d) is wrong: both are part features."
      }
    ]
  },
  "pmmi-industrial-electricity-1": {
    "title": "PMMI Industrial Electricity 1 Practice Exam",
    "minutes": 75,
    "passPercent": 70,
    "coverage": "50 original questions in the style of the PMMI Industrial Electricity 1 assessment: electrical safety, DC and AC fundamentals, motors, transformers, wiring, and measurements. This course states no PMMI item counts, pass marks, or fees, because those are unverified — this practice exam is the app's own size and benchmark, so the 70% used here is a practice benchmark only.",
    "questions": [
      {
        "module": 11,
        "q": "A colleague says a circuit is dead because the switch is off. What do you do?",
        "choices": [
          "Trust the switch",
          "Test the circuit with a meter rated for the voltage",
          "Ask another colleague",
          "Wait five minutes"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Never trust a switch position — test with a meter. (a) is wrong: a switch can be off and the circuit still live. (c) is wrong: asking does not prove it dead. (d) is wrong: waiting does not de-energise a circuit."
      },
      {
        "module": 11,
        "q": "What does lockout/tagout (LOTO) do?",
        "choices": [
          "Keeps a machine from being re-energised while work is done",
          "Speeds up a repair",
          "Replaces the need for PPE",
          "Tests the motor"
        ],
        "answer": 0,
        "explanation": "Correct: (a). LOTO isolates energy and locks it off so the machine cannot restart while someone works on it. (b) is wrong: LOTO takes time; safety is the point. (c) is wrong: PPE is still needed. (d) is wrong: testing is a separate step."
      },
      {
        "module": 11,
        "q": "Who removes a worker's lockout lock?",
        "choices": [
          "Any supervisor",
          "Only the worker who put it on",
          "The next shift",
          "Anyone with a key"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Only the worker who applied the lock removes it. (a) is wrong: a supervisor must not remove another worker's lock. (c) is wrong: the next shift cannot remove it. (d) is wrong: the lock is personal to the worker."
      },
      {
        "module": 11,
        "q": "A technician is about to open a 480 V panel to check a loose connection. The panel carries an arc-flash warning label. What is the label warning about, and what must the technician do first?",
        "choices": [
          "A small spark like the one from a phone charger — no special steps are needed.",
          "A possible explosive release of energy from an electrical fault — extreme heat, a pressure wave, and molten metal — so the technician must wear arc-rated PPE and de-energize and lock out the panel first where the work allows it.",
          "The panel may hum loudly — ear protection is the only precaution.",
          "Nothing — the label is there for inspectors only and does not apply to maintenance work."
        ],
        "answer": 1,
        "explanation": "Correct: (b). An arc flash is a violent fault event that releases extreme heat, a pressure wave, and molten metal in a fraction of a second — the reason arc-rated PPE exists and why panels are de-energized and locked out before work. (a) is wrong: a charger spark is tiny, an arc flash can cause severe burns. (c) is wrong: humming is not the hazard the label warns about. (d) is wrong and dangerous: the label applies to everyone opening the panel."
      },
      {
        "module": 11,
        "q": "Which standard is the workplace electrical safety standard?",
        "choices": [
          "NFPA 70 (NEC)",
          "NFPA 70E",
          "ISO 9001",
          "ASME Y14.5"
        ],
        "answer": 1,
        "explanation": "Correct: (b). NFPA 70E is the electrical safety standard for workers. (a) is wrong: the NEC is the installation standard. (c) is wrong: ISO 9001 is a quality standard. (d) is wrong: ASME Y14.5 is the GD&T standard."
      },
      {
        "module": 11,
        "q": "Which standard tells you how to install electrical work?",
        "choices": [
          "NFPA 70E",
          "NFPA 70 (NEC)",
          "OSHA 1910.147",
          "IEC 61131"
        ],
        "answer": 1,
        "explanation": "Correct: (b). NFPA 70, the National Electrical Code, is the installation standard. (a) is wrong: NFPA 70E protects the worker. (c) is wrong: 1910.147 is the lockout/tagout rule. (d) is wrong: IEC 61131 is the PLC programming standard."
      },
      {
        "module": 11,
        "q": "What should you do before trusting that a circuit is dead?",
        "choices": [
          "Look at the switch",
          "Test it with a meter rated for the voltage",
          "Ask a colleague",
          "Wait five minutes"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Test with a meter rated for the voltage — never trust a switch position. (a) is wrong: a switch can be off and the circuit still live. (c) is wrong: asking does not prove it dead. (d) is wrong: waiting does not de-energise a circuit."
      },
      {
        "module": 11,
        "q": "A 12 V source drives a 4 Ω resistor. What is the current?",
        "choices": [
          "2 A",
          "3 A",
          "4 A",
          "48 A"
        ],
        "answer": 1,
        "explanation": "Correct: (b). I = 12/4 = 3 A. (a) is wrong: that is 12/6. (c) is wrong: that is the resistance, not the current. (d) is wrong: that is 12 × 4."
      },
      {
        "module": 11,
        "q": "Three resistors (10 Ω, 20 Ω, 30 Ω) in series across 120 V carry what current?",
        "choices": [
          "2 A",
          "4 A",
          "6 A",
          "12 A"
        ],
        "answer": 0,
        "explanation": "Correct: (a). R = 60 Ω, I = 120/60 = 2 A. (b) is wrong: that is 120/30. (c) is wrong: that is 120/20. (d) is wrong: that is 120/10."
      },
      {
        "module": 11,
        "q": "Three 30 Ω resistors in parallel have an equivalent resistance of:",
        "choices": [
          "10 Ω",
          "30 Ω",
          "90 Ω",
          "3.33 Ω"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Three equal resistors in parallel give R/3 = 10 Ω. (b) is wrong: that is one resistor alone. (c) is wrong: that is the series value. (d) is wrong: that would need nine 30 Ω resistors in parallel."
      },
      {
        "module": 11,
        "q": "A 24 V source drives an 8 Ω resistor. What is the power?",
        "choices": [
          "72 W",
          "3 W",
          "192 W",
          "24 W"
        ],
        "answer": 0,
        "explanation": "Correct: (a). I = 24/8 = 3 A; P = 24 × 3 = 72 W. (b) is wrong: that is the current, not the power. (c) is wrong: that is 24 × 8. (d) is wrong: that is the voltage alone."
      },
      {
        "module": 11,
        "q": "What does a fuse do?",
        "choices": [
          "Limits current to a safe value forever",
          "Opens the circuit when current exceeds its rating",
          "Stores energy",
          "Steps voltage up"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A fuse melts and opens the circuit on overcurrent. (a) is wrong: a fuse opens once; it does not limit current continuously. (c) is wrong: that is a capacitor or battery. (d) is wrong: that is a transformer."
      },
      {
        "module": 11,
        "q": "An 8-pole motor runs on 60 Hz. What is its synchronous speed?",
        "choices": [
          "1,800 rpm",
          "900 rpm",
          "3,600 rpm",
          "1,200 rpm"
        ],
        "answer": 1,
        "explanation": "Correct: (b). n_s = 120 × 60/8 = 900 rpm. (a) is wrong: that is a 4-pole motor. (c) is wrong: that is a 2-pole motor. (d) is wrong: that is a 6-pole motor."
      },
      {
        "module": 11,
        "q": "A motor has n_s = 3,600 rpm and runs at 3,500 rpm. What is its slip?",
        "choices": [
          "2.78%",
          "5.56%",
          "1.39%",
          "27.8%"
        ],
        "answer": 0,
        "explanation": "Correct: (a). (3,600 − 3,500)/3,600 = 2.78%. (b) is wrong: that is a 200 rpm difference. (c) is wrong: that is a 50 rpm difference. (d) is wrong: that is ten times too large."
      },
      {
        "module": 11,
        "q": "What makes an induction motor produce torque?",
        "choices": [
          "Slip — the rotor lagging synchronous speed",
          "Zero slip",
          "A permanent magnet",
          "A battery"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Slip is what produces torque; a motor at synchronous speed produces no torque. (b) is wrong: zero slip means zero torque. (c) is wrong: induction motors have no permanent magnet. (d) is wrong: a battery does not drive an AC motor."
      },
      {
        "module": 11,
        "q": "What does a motor starter's contactor do?",
        "choices": [
          "Protects against overcurrent",
          "Makes and breaks the power to the motor",
          "Changes the motor speed",
          "Reverses the motor"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The contactor switches the motor's power on and off. (a) is wrong: the overload relay protects against overcurrent. (c) is wrong: a VFD changes speed. (d) is wrong: reversing needs a reversing starter."
      },
      {
        "module": 11,
        "q": "What does the overload relay do?",
        "choices": [
          "Starts the motor",
          "Trips if the motor draws too much current for too long",
          "Changes the motor speed",
          "Reverses the motor"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The overload relay protects the motor from sustained overcurrent. (a) is wrong: the contactor starts the motor. (c) is wrong: a VFD changes speed. (d) is wrong: reversing needs a reversing starter."
      },
      {
        "module": 11,
        "q": "A fan motor runs too fast and wastes energy. What device lets you slow it down by changing the supply frequency?",
        "choices": [
          "A VFD",
          "A bigger motor",
          "A transformer",
          "A fuse"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A variable-frequency drive changes motor speed by changing frequency. (b) is wrong: a bigger motor does not slow it down. (c) is wrong: a transformer changes voltage, not frequency. (d) is wrong: a fuse protects, it does not control speed."
      },
      {
        "module": 11,
        "q": "A 10 hp motor runs at 1,750 rpm. What torque does it deliver? (1 hp = 745.7 W)",
        "choices": [
          "20.4 N·m",
          "40.7 N·m",
          "81.4 N·m",
          "7.46 N·m"
        ],
        "answer": 1,
        "explanation": "Correct: (b). T = 9,550 × 7.46/1,750 = 40.7 N·m. (a) is wrong: that is the torque of a 5 hp motor. (c) is wrong: that doubles it. (d) is wrong: that is the power in kW, not the torque."
      },
      {
        "module": 11,
        "q": "What information is on a motor nameplate?",
        "choices": [
          "Horsepower, voltage, current, frequency, poles, service factor",
          "Only the horsepower",
          "Only the colour",
          "The price"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The nameplate lists hp, voltage, full-load current, frequency, poles, service factor, and more. (b) is wrong: it lists much more than horsepower. (c) is wrong: colour is not on a nameplate. (d) is wrong: price is not on a nameplate."
      },
      {
        "module": 11,
        "q": "A motor nameplate says 460 V, but the supply is 230 V. What happens?",
        "choices": [
          "It runs normally",
          "It will not develop enough torque and may overheat",
          "It runs twice as fast",
          "It draws half the current safely"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Half voltage means far too little torque, and the motor may stall and overheat. (a) is wrong: the voltage is wrong. (c) is wrong: speed depends on frequency and poles, not voltage. (d) is wrong: it will draw high current trying to start."
      },
      {
        "module": 11,
        "q": "What is service factor on a motor nameplate?",
        "choices": [
          "The short-term overload the motor can carry",
          "The service interval",
          "The efficiency",
          "The warranty length"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Service factor (e.g. 1.15) is the short-term overload the motor can carry. (b) is wrong: that is maintenance scheduling. (c) is wrong: efficiency is a separate value. (d) is wrong: warranty is not a service factor."
      },
      {
        "module": 11,
        "q": "What is grounding for?",
        "choices": [
          "Giving fault current a low-resistance path back to the source so the breaker trips",
          "Carrying normal load current",
          "Increasing the voltage",
          "Saving wire"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Grounding gives fault current a path home so the protective device trips. (b) is wrong: the ground wire never carries normal load current. (c) is wrong: grounding does not change voltage. (d) is wrong: grounding adds a conductor."
      },
      {
        "module": 11,
        "q": "What is bonding?",
        "choices": [
          "Connecting metal parts together so no voltage appears between them",
          "Soldering wires",
          "Insulating conductors",
          "Grounding a motor only"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Bonding connects metal parts so they stay at the same potential. (b) is wrong: soldering joins conductors electrically, not the same thing. (c) is wrong: bonding is about connection, not insulation. (d) is wrong: bonding applies to all metal parts, not only motors."
      },
      {
        "module": 11,
        "q": "If a ground wire is carrying current in normal operation, what does that mean?",
        "choices": [
          "Normal operation",
          "Something is wrong — a fault or a wiring error",
          "The circuit is efficient",
          "The ground is oversized"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A ground wire never carries current in normal operation; current there means a fault. (a) is wrong: it is never normal. (c) is wrong: efficiency has nothing to do with it. (d) is wrong: size does not cause current."
      },
      {
        "module": 11,
        "q": "What does conduit do?",
        "choices": [
          "Protects conductors and must be sized so wires fill no more than the allowed percentage",
          "Carries current",
          "Steps voltage down",
          "Stores energy"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Conduit protects conductors and has fill limits. (b) is wrong: conductors carry current, conduit protects them. (c) is wrong: that is a transformer. (d) is wrong: that is a capacitor or battery."
      },
      {
        "module": 11,
        "q": "Conductors are sized by:",
        "choices": [
          "Ampacity — how much current they can carry safely",
          "Colour",
          "Length only",
          "Price"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Ampacity decides conductor size. (b) is wrong: colour identifies the conductor, it does not size it. (c) is wrong: length affects voltage drop, not ampacity alone. (d) is wrong: price does not size a conductor."
      },
      {
        "module": 11,
        "q": "A transformer with a 10:1 turns ratio is fed with 480 V. What is the secondary voltage?",
        "choices": [
          "48 V",
          "4,800 V",
          "480 V",
          "10 V"
        ],
        "answer": 0,
        "explanation": "Correct: (a). V₂ = 480/10 = 48 V. (b) is wrong: that is a 1:10 step-up. (c) is wrong: that is the primary voltage. (d) is wrong: that is the ratio, not a voltage."
      },
      {
        "module": 11,
        "q": "A balanced three-phase load has V_L = 400 V, I_L = 25 A, PF = 0.85. What is the real power?",
        "choices": [
          "8.5 kW",
          "14.7 kW",
          "10 kW",
          "17.3 kW"
        ],
        "answer": 1,
        "explanation": "Correct: (b). P = √3 × 400 × 25 × 0.85 = 14,722 W ≈ 14.7 kW. (a) is wrong: that is 400 × 25 × 0.85, forgetting √3. (c) is wrong: that is 400 × 25. (d) is wrong: that forgets the power factor."
      },
      {
        "module": 11,
        "q": "What is the first step in troubleshooting a machine?",
        "choices": [
          "Replace the PLC",
          "Gather information — what changed, when, what the operator saw",
          "Force all outputs on",
          "Bypass the safety circuit"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Troubleshooting starts by gathering information. (a) is wrong: replacing parts comes after diagnosis. (c) is wrong: forcing outputs is dangerous and comes later, if at all. (d) is wrong: never bypass a safety circuit."
      },
      {
        "module": 11,
        "q": "A machine stops. What should you check after gathering information?",
        "choices": [
          "The obvious and safe: power, fuses, breakers, e-stops, PLC status lights",
          "The program code first",
          "The motor bearings",
          "The paint"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Check power, fuses, breakers, e-stops, and status lights first. (b) is wrong: code comes after the physical checks. (c) is wrong: bearings are a later suspect. (d) is wrong: paint has nothing to do with it."
      },
      {
        "module": 11,
        "q": "How do you divide a PLC machine fault for diagnosis?",
        "choices": [
          "Into inputs, program, or outputs — and test one side at a time",
          "Into two equal halves by weight",
          "By replacing everything",
          "By guessing"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Divide into inputs, program, or outputs and test one side. (b) is wrong: weight has nothing to do with it. (c) is wrong: replacing everything wastes time and money. (d) is wrong: guessing is not a method."
      },
      {
        "module": 11,
        "q": "What is the safest way to test the output side of a PLC machine?",
        "choices": [
          "Force the output with the machine running at full speed",
          "Force the output only with the machine in a safe state",
          "Bypass the safety circuit",
          "Replace the PLC immediately"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Forcing an output is only safe with the machine in a safe state. (a) is wrong: forcing outputs on a running machine can move it unexpectedly. (c) is wrong: never bypass a safety circuit. (d) is wrong: replacing the PLC before diagnosing wastes time and money."
      },
      {
        "module": 11,
        "q": "What are the most common PLC machine faults, in order of likelihood?",
        "choices": [
          "A loose wire or blown fuse; a sensor out of adjustment; a timer that never resets",
          "A failed CPU first",
          "A lightning strike",
          "A software virus"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Loose wires, fuses, dirty sensors, and unreset timers are the common faults. (b) is wrong: CPU failure is rare. (c) is wrong: lightning is rare. (d) is wrong: viruses are not a common PLC fault."
      },
      {
        "module": 11,
        "q": "After fixing a machine, what two steps are still missing?",
        "choices": [
          "Verify the whole machine works and document what you did",
          "Replace the motor and the PLC",
          "Paint the machine",
          "Nothing — the fix is enough"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Verify full functionality and document findings, actions, and outcomes. (b) is wrong: replacing parts is not a methodology step. (c) is wrong: paint is cosmetic. (d) is wrong: a fix without verification and documentation is incomplete."
      },
      {
        "module": 11,
        "q": "A sensor is covered in dirt and the machine keeps stopping. What is the likely cause?",
        "choices": [
          "The sensor cannot see its target",
          "The motor is too big",
          "The PLC program is too long",
          "The voltage is too high"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A dirty sensor cannot detect its target reliably. (b) is wrong: motor size does not cause sensor faults. (c) is wrong: program length does not cause this. (d) is wrong: high voltage would cause different symptoms."
      },
      {
        "module": 11,
        "q": "What does a 4–20 mA signal of 0 mA mean?",
        "choices": [
          "The bottom of the range",
          "A broken wire",
          "The top of the range",
          "Normal operation"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 0 mA means no current at all — a broken wire or dead transmitter. (a) is wrong: the bottom of the range is 4 mA. (c) is wrong: the top is 20 mA. (d) is wrong: 0 mA is a fault, not normal."
      },
      {
        "module": 11,
        "q": "A 0–200 °C transmitter sends 4–20 mA. What temperature does 12 mA represent?",
        "choices": [
          "50 °C",
          "100 °C",
          "150 °C",
          "12 °C"
        ],
        "answer": 1,
        "explanation": "Correct: (b). (12 − 4)/16 = 0.5, so half of 200 °C = 100 °C. (a) is wrong: that is the answer for a 0–100 °C range. (c) is wrong: that would be 16 mA. (d) is wrong: that confuses the current with the temperature."
      },
      {
        "module": 11,
        "q": "What is the synchronous speed of a 2-pole motor on 60 Hz?",
        "choices": [
          "1,800 rpm",
          "3,600 rpm",
          "1,200 rpm",
          "900 rpm"
        ],
        "answer": 1,
        "explanation": "Correct: (b). n_s = 120 × 60/2 = 3,600 rpm. (a) is wrong: that is a 4-pole motor. (c) is wrong: that is a 6-pole motor. (d) is wrong: that is an 8-pole motor."
      },
      {
        "module": 11,
        "q": "A transmission line carries 10 MW at 100 kV instead of 10 kV. How does the current compare, and what happens to the I²R losses?",
        "choices": [
          "One-tenth the current, one-hundredth the losses",
          "Ten times the current, ten times the losses",
          "The same current, the same losses",
          "One-tenth the current, one-tenth the losses"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Ten times the voltage means one-tenth the current for the same power, and losses go as current squared: (1/10)² = 1/100. (b) is wrong: high voltage reduces current. (c) is wrong: the current changes with voltage. (d) is wrong: losses fall by the square, not linearly."
      },
      {
        "module": 11,
        "q": "A factory has a low power factor of 0.7. What equipment raises it?",
        "choices": [
          "A capacitor bank",
          "A bigger transformer",
          "A longer cable",
          "A smaller motor"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Capacitors supply reactive power locally, raising the power factor. (b) is wrong: a bigger transformer does not correct power factor. (c) is wrong: cable length does not fix power factor. (d) is wrong: motor size does not fix it."
      },
      {
        "module": 11,
        "q": "This course states no PMMI item counts, pass marks, or fees. Why?",
        "choices": [
          "They are unverified",
          "They do not exist",
          "They are secret",
          "The course forgot them"
        ],
        "answer": 0,
        "explanation": "Correct: (a). PMMI item counts, pass marks, and fees are unverified, so this course states none of them. (b) is wrong: PMMI exams do have counts and fees — they are just unverified here. (c) is wrong: they are not secret. (d) is wrong: the omission is deliberate and honest."
      },
      {
        "module": 11,
        "q": "What is the practice benchmark used on the PMMI practice exams in this course?",
        "choices": [
          "70%",
          "165 out of 240",
          "The real PMMI pass mark",
          "100%"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The PMMI practice exams here use the app's own 70% benchmark. (b) is wrong: 165/240 is the CSWA pass mark. (c) is wrong: this course states no real PMMI pass mark. (d) is wrong: 100% is not the benchmark."
      },
      {
        "module": 11,
        "q": "A 6-pole motor runs on 50 Hz. What is its synchronous speed?",
        "choices": [
          "1,200 rpm",
          "1,000 rpm",
          "3,000 rpm",
          "600 rpm"
        ],
        "answer": 1,
        "explanation": "Correct: (b). n_s = 120 × 50/6 = 1,000 rpm. (a) is wrong: that is the 60 Hz speed. (c) is wrong: that is a 2-pole motor on 50 Hz. (d) is wrong: that is far too slow."
      },
      {
        "module": 11,
        "q": "A motor has n_s = 1,000 rpm and runs at 960 rpm. What is its slip?",
        "choices": [
          "4%",
          "2%",
          "8%",
          "0.4%"
        ],
        "answer": 0,
        "explanation": "Correct: (a). (1,000 − 960)/1,000 = 4%. (b) is wrong: that is a 20 rpm difference. (c) is wrong: that is an 80 rpm difference. (d) is wrong: that is a 4 rpm difference."
      },
      {
        "module": 11,
        "q": "What does PPE rated for the incident energy protect against?",
        "choices": [
          "Arc flash",
          "Noise only",
          "Dust only",
          "Cold"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Arc-rated PPE protects against the heat of an arc flash. (b) is wrong: hearing protection is separate. (c) is wrong: dust masks are separate. (d) is wrong: cold-weather gear is separate."
      },
      {
        "module": 11,
        "q": "A machine's e-stop is pressed and the machine will not restart. What do you check first?",
        "choices": [
          "The PLC program",
          "Whether the e-stop is still latched in and needs resetting",
          "The motor bearings",
          "The paint"
        ],
        "answer": 1,
        "explanation": "Correct: (b). An e-stop latches in; reset it before anything else. (a) is wrong: the program is a later suspect. (c) is wrong: bearings do not cause this. (d) is wrong: paint has nothing to do with it."
      },
      {
        "module": 11,
        "q": "What is the correct order of the troubleshooting method's last two steps?",
        "choices": [
          "Fix, then test",
          "Verify full system functionality, then document findings, actions, and outcomes",
          "Document, then verify",
          "Test, then replace"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Step 5 is verify, step 6 is document. (a) is wrong: fixing is step 4. (c) is wrong: verification comes before documentation. (d) is wrong: replacing is not a methodology step."
      },
      {
        "module": 11,
        "q": "A fuse keeps blowing on a motor circuit. What should you do?",
        "choices": [
          "Fit a bigger fuse",
          "Find the fault — a short, a jammed load, or a failing motor — before replacing it",
          "Remove the fuse",
          "Ignore it"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A blowing fuse signals a fault; find it first. (a) is wrong: a bigger fuse hides the fault and risks fire. (c) is wrong: removing protection is dangerous. (d) is wrong: ignoring it risks damage."
      },
      {
        "module": 11,
        "q": "What is the purpose of a motor overload relay's reset button?",
        "choices": [
          "To restart the motor after the fault is found and cleared",
          "To bypass the overload",
          "To increase the motor speed",
          "To change the voltage"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Reset only after finding and clearing the cause of the trip. (b) is wrong: reset does not bypass protection. (c) is wrong: reset does not change speed. (d) is wrong: reset does not change voltage."
      }
    ]
  },
  "pmmi-plcs-1": {
    "title": "PMMI PLCs 1 Practice Exam",
    "minutes": 75,
    "passPercent": 70,
    "coverage": "50 original questions in the style of the PMMI PLCs 1 assessment: PLC hardware, ladder logic, timers and counters, inputs and outputs, sensors, and troubleshooting. This course states no PMMI item counts, pass marks, or fees, because those are unverified — this practice exam is the app's own size and benchmark, so the 70% used here is a practice benchmark only.",
    "questions": [
      {
        "module": 6,
        "q": "What is a PLC?",
        "choices": [
          "A personal computer",
          "A rugged industrial computer that reads inputs, runs a program, and drives outputs",
          "A type of motor",
          "A sensor"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A PLC is a rugged industrial computer running a repeating scan cycle. (a) is wrong: a PLC is industrial, not a desktop PC. (c) is wrong: a PLC controls motors, it is not one. (d) is wrong: a PLC reads sensors, it is not one."
      },
      {
        "module": 6,
        "q": "A PLC reads its inputs at the start of the scan. What happens to an input that changes halfway through the scan?",
        "choices": [
          "It is seen immediately",
          "It is seen at the next scan's input-read step",
          "It is never seen",
          "It is seen at the output-write step"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Inputs are read once per scan; a mid-scan change waits for the next scan. (a) is wrong: the PLC does not interrupt the scan for inputs. (c) is wrong: it is seen on the next scan. (d) is wrong: the output-write step writes outputs, it does not read inputs."
      },
      {
        "module": 6,
        "q": "What is a digital input to a PLC?",
        "choices": [
          "A continuous signal like 4–20 mA",
          "An on/off signal like a pushbutton or limit switch",
          "A voltage that varies smoothly",
          "A temperature reading"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Digital inputs are on or off. (a) is wrong: 4–20 mA is an analogue input. (c) is wrong: that is an analogue signal. (d) is wrong: temperature is usually an analogue input."
      },
      {
        "module": 6,
        "q": "What is an analogue input to a PLC?",
        "choices": [
          "A pushbutton",
          "A continuous signal like a 4–20 mA temperature transmitter",
          "A limit switch",
          "A relay contact"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Analogue inputs are continuous values. (a) is wrong: a pushbutton is digital. (c) is wrong: a limit switch is digital. (d) is wrong: a relay contact is digital."
      },
      {
        "module": 6,
        "q": "In ladder logic, what does XIC mean?",
        "choices": [
          "Examine if closed — true when its input is on",
          "Examine if open — true when its input is off",
          "Output energize",
          "Timer on-delay"
        ],
        "answer": 0,
        "explanation": "Correct: (a). XIC is true when its input is on. (b) is wrong: that is XIO. (c) is wrong: that is OTE. (d) is wrong: that is TON."
      },
      {
        "module": 6,
        "q": "In ladder logic, what does XIO mean?",
        "choices": [
          "Examine if closed — true when its input is on",
          "Examine if open — true when its input is off",
          "Output energize",
          "Count up"
        ],
        "answer": 1,
        "explanation": "Correct: (b). XIO is true when its input is off. (a) is wrong: that is XIC. (c) is wrong: that is OTE. (d) is wrong: that is CTU."
      },
      {
        "module": 6,
        "q": "In ladder logic, what does OTE do?",
        "choices": [
          "Examines an input",
          "Drives an output on when its rung is true",
          "Counts pulses",
          "Delays a signal"
        ],
        "answer": 1,
        "explanation": "Correct: (b). OTE (output energize) turns an output on when its rung is true. (a) is wrong: XIC and XIO examine inputs. (c) is wrong: that is a counter. (d) is wrong: that is a timer."
      },
      {
        "module": 6,
        "q": "In ladder logic, contacts in series mean:",
        "choices": [
          "OR",
          "AND",
          "NOT",
          "XOR"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Series contacts are AND — all must be true. (a) is wrong: parallel contacts are OR. (c) is wrong: NOT is an XIO contact. (d) is wrong: XOR is not a simple series/parallel arrangement."
      },
      {
        "module": 6,
        "q": "In ladder logic, contacts in parallel mean:",
        "choices": [
          "AND",
          "OR",
          "NOT",
          "NAND"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Parallel contacts are OR — any one true makes the rung true. (a) is wrong: series contacts are AND. (c) is wrong: NOT is an XIO contact. (d) is wrong: NAND is a different function."
      },
      {
        "module": 6,
        "q": "What is a seal-in (latching) circuit?",
        "choices": [
          "A rung that keeps a motor running after the start button is released",
          "A circuit that seals a box",
          "A timer circuit",
          "A counter circuit"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A seal-in contact in parallel with the start button latches the motor on. (b) is wrong: it has nothing to do with sealing a box. (c) is wrong: a timer is a TON or TOF. (d) is wrong: a counter is a CTU or CTD."
      },
      {
        "module": 6,
        "q": "In a motor start/stop station, what does the stop button do?",
        "choices": [
          "Starts the motor",
          "Breaks the rung, so the coil drops out and the motor stops",
          "Resets the timer",
          "Counts a part"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The stop button is a normally-closed contact in series; pressing it breaks the rung. (a) is wrong: the start button starts the motor. (c) is wrong: resetting a timer needs a RES instruction. (d) is wrong: counting is a counter's job."
      },
      {
        "module": 6,
        "q": "A TON timer's done bit is on. What does that mean?",
        "choices": [
          "The rung has been true for the full preset time",
          "The timer just started",
          "The timer is broken",
          "The rung is false"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The done bit sets only after the rung has been true for the whole preset time. (b) is wrong: a just-started timer has not reached its preset. (c) is wrong: a set done bit is normal operation. (d) is wrong: a false rung resets a TON."
      },
      {
        "module": 6,
        "q": "A TON timer has a preset of 10 s and its rung has been true for 6 s. Is the done bit on?",
        "choices": [
          "Yes",
          "No — it needs 4 more seconds",
          "No — it needs 10 more seconds",
          "Yes, but only briefly"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The rung has been true for 6 s of a 10 s preset, so 4 s remain. (a) is wrong: the preset has not elapsed. (c) is wrong: only 4 s remain, not 10. (d) is wrong: the done bit is off until the preset elapses."
      },
      {
        "module": 6,
        "q": "What does a TOF timer do?",
        "choices": [
          "Delays the done bit when the rung goes true",
          "Keeps its output on for a time after the rung goes false",
          "Counts down to zero",
          "Resets immediately"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A timer off-delay keeps its output on for the preset time after the rung goes false. (a) is wrong: that is a TON. (c) is wrong: that is a counter. (d) is wrong: a TOF delays turning off."
      },
      {
        "module": 6,
        "q": "What does a CTU counter do?",
        "choices": [
          "Counts false-to-true transitions and sets its done bit at the preset",
          "Counts down from the preset",
          "Delays a signal",
          "Measures time"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A count-up counter increments on each false-to-true transition and sets done at the preset. (b) is wrong: that is a CTD. (c) is wrong: that is a timer. (d) is wrong: timers measure time."
      },
      {
        "module": 6,
        "q": "A CTU counter has a preset of 25 and has counted 20 pulses. How many more does it need?",
        "choices": [
          "5",
          "20",
          "25",
          "45"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 25 − 20 = 5 more false-to-true transitions. (b) is wrong: that is the count so far. (c) is wrong: that is the preset, not what remains. (d) is wrong: that adds the count and the preset."
      },
      {
        "module": 6,
        "q": "What is the most common PLC programming bug with timers and counters?",
        "choices": [
          "They run too fast",
          "They never reset — no RES instruction or clearing rung is provided",
          "They use too much memory",
          "They are too accurate"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A timer or counter that never resets is the most common bug — always provide a reset. (a) is wrong: speed is not the bug. (c) is wrong: memory is rarely the issue. (d) is wrong: accuracy is not a bug."
      },
      {
        "module": 6,
        "q": "What does the RES instruction do?",
        "choices": [
          "Starts a timer",
          "Resets a timer or counter to zero",
          "Sets an output",
          "Reads an input"
        ],
        "answer": 1,
        "explanation": "Correct: (b). RES resets a timer or counter. (a) is wrong: a timer starts when its rung goes true. (c) is wrong: that is an OTE. (d) is wrong: inputs are read in the scan."
      },
      {
        "module": 6,
        "q": "What is the standard for PLC programming languages?",
        "choices": [
          "IEC 61131-3",
          "NFPA 70",
          "ISO 9001",
          "IEEE 802.11"
        ],
        "answer": 0,
        "explanation": "Correct: (a). IEC 61131-3 defines the five PLC programming languages, including Ladder Diagram. (b) is wrong: NFPA 70 is the National Electrical Code. (c) is wrong: ISO 9001 is a quality standard. (d) is wrong: IEEE 802.11 is Wi-Fi."
      },
      {
        "module": 6,
        "q": "Which of these is one of the five IEC 61131-3 PLC languages?",
        "choices": [
          "Ladder Diagram",
          "Python",
          "C++ only",
          "HTML"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Ladder Diagram is one of the five IEC 61131-3 languages. (b) is wrong: Python is not an IEC 61131-3 language. (c) is wrong: C++ is not an IEC 61131-3 language. (d) is wrong: HTML is a web language."
      },
      {
        "module": 6,
        "q": "What is a PLC output module type?",
        "choices": [
          "Relay, transistor, or analogue",
          "Pushbutton only",
          "Thermocouple only",
          "Keyboard"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Output modules are relay, transistor (DC), or analogue. (b) is wrong: a pushbutton is an input device. (c) is wrong: a thermocouple is an input sensor. (d) is wrong: a keyboard is not a PLC output module."
      },
      {
        "module": 6,
        "q": "Why is a relay output module used instead of a transistor output for an AC load?",
        "choices": [
          "Relays switch AC and DC and isolate the PLC; transistors switch DC only",
          "Relays are faster",
          "Relays are cheaper always",
          "Transistors cannot switch at all"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Relay outputs switch AC or DC and provide isolation; transistor outputs switch DC only. (b) is wrong: transistors are faster than relays. (c) is wrong: relays are not always cheaper. (d) is wrong: transistors do switch — DC loads."
      },
      {
        "module": 6,
        "q": "What happens to a PLC output if the rung goes false?",
        "choices": [
          "It stays on",
          "It turns off (unless latched by a seal-in or latch instruction)",
          "It toggles",
          "It counts"
        ],
        "answer": 1,
        "explanation": "Correct: (b). An OTE output follows its rung — false rung means off, unless a latch holds it. (a) is wrong: that is a latched output. (c) is wrong: toggling needs special logic. (d) is wrong: counting is a counter's job."
      },
      {
        "module": 6,
        "q": "What is the difference between a latch (OTL) and an ordinary output (OTE)?",
        "choices": [
          "OTL stays on until unlatched; OTE follows its rung",
          "There is no difference",
          "OTE stays on; OTL follows its rung",
          "OTL is an input"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A latch stays on until an unlatch instruction clears it; an OTE follows its rung. (b) is wrong: they behave differently. (c) is wrong: that is backwards. (d) is wrong: OTL is an output instruction."
      },
      {
        "module": 10,
        "q": "A 4–20 mA temperature transmitter is ranged 0–100 °C. What temperature does 12 mA represent?",
        "choices": [
          "25 °C",
          "50 °C",
          "75 °C",
          "12 °C"
        ],
        "answer": 1,
        "explanation": "Correct: (b). (12 − 4)/16 = 0.5, so 50 °C. (a) is wrong: that would be 8 mA. (c) is wrong: that would be 16 mA. (d) is wrong: that confuses the current with the temperature."
      },
      {
        "module": 10,
        "q": "A 0–100 °C transmitter sends 4–20 mA. What current represents 75 °C?",
        "choices": [
          "12 mA",
          "16 mA",
          "8 mA",
          "20 mA"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 75% of range: I = 4 + 0.75 × 16 = 16 mA. (a) is wrong: that is 50 °C. (c) is wrong: that is 25 °C. (d) is wrong: that is 100 °C."
      },
      {
        "module": 10,
        "q": "What does a proximity sensor do?",
        "choices": [
          "Detects a part without touching it",
          "Measures temperature",
          "Measures pressure",
          "Counts time"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A proximity sensor (inductive or capacitive) detects a part without contact. (b) is wrong: that is a thermocouple or RTD. (c) is wrong: that is a pressure transducer. (d) is wrong: that is a timer."
      },
      {
        "module": 10,
        "q": "What does a photoelectric sensor use?",
        "choices": [
          "A beam of light",
          "A magnetic field",
          "Sound waves",
          "Heat"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A photoelectric sensor uses a beam of light to detect a part. (b) is wrong: that is an inductive sensor. (c) is wrong: that is an ultrasonic sensor. (d) is wrong: that is a temperature sensor."
      },
      {
        "module": 11,
        "q": "What is the first step in troubleshooting a PLC machine?",
        "choices": [
          "Replace the PLC",
          "Gather information — what changed, when, what the operator saw",
          "Force all outputs on",
          "Bypass the safety circuit"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Troubleshooting starts by gathering information. (a) is wrong: replacing parts comes after diagnosis. (c) is wrong: forcing outputs is dangerous and comes later, if at all. (d) is wrong: never bypass a safety circuit."
      },
      {
        "module": 11,
        "q": "A PLC's status lights show the CPU in fault. What do you check first?",
        "choices": [
          "The program code",
          "Power, the key switch position, and the fault code in the programming software",
          "The motor",
          "The paint"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Check power, the key switch, and read the fault code first. (a) is wrong: code comes after the physical checks. (c) is wrong: the motor is not the CPU. (d) is wrong: paint has nothing to do with it."
      },
      {
        "module": 11,
        "q": "An input's status light is off, but the sensor is wired and the part is present. What is the likely cause?",
        "choices": [
          "The sensor is faulty, misadjusted, dirty, or has no power",
          "The program is too long",
          "The output module failed",
          "The CPU is too slow"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A dark input light with a present target means a sensor, wiring, or power fault. (b) is wrong: program length does not turn off an input light. (c) is wrong: the output module does not affect input lights. (d) is wrong: CPU speed does not turn off an input light."
      },
      {
        "module": 11,
        "q": "How do you test whether a PLC output module is working?",
        "choices": [
          "Watch the input lights",
          "Force the output (with the machine in a safe state) and check the output light and the field device",
          "Replace the CPU",
          "Reboot the sensor"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Forcing the output safely tests the module, the wiring, and the device. (a) is wrong: input lights test inputs, not outputs. (c) is wrong: replacing the CPU is not a test. (d) is wrong: rebooting a sensor does not test an output."
      },
      {
        "module": 11,
        "q": "A rung depends on the order of other rungs. What is the risk?",
        "choices": [
          "None — order never matters",
          "The program behaves differently if rungs are reordered — a bug waiting to happen",
          "It runs faster",
          "It uses less memory"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Rungs should depend only on inputs and coils set by earlier rungs; order-dependent logic is fragile. (a) is wrong: order matters in a scan. (c) is wrong: order dependence does not make it faster. (d) is wrong: memory is not the issue."
      },
      {
        "module": 11,
        "q": "What should you do after fixing a PLC machine fault?",
        "choices": [
          "Verify the whole machine works and document what you did",
          "Replace the motor",
          "Paint the machine",
          "Nothing"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Verify full functionality and document findings, actions, and outcomes. (b) is wrong: replacing parts is not a methodology step. (c) is wrong: paint is cosmetic. (d) is wrong: a fix without verification and documentation is incomplete."
      },
      {
        "module": 11,
        "q": "What is an HMI?",
        "choices": [
          "Human-machine interface — the screen an operator uses to monitor and control a machine",
          "A type of PLC",
          "A sensor",
          "A motor"
        ],
        "answer": 0,
        "explanation": "Correct: (a). An HMI is the operator's screen for a machine. (b) is wrong: the PLC is the controller, the HMI is the display. (c) is wrong: an HMI is not a sensor. (d) is wrong: an HMI is not a motor."
      },
      {
        "module": 11,
        "q": "What does a PLC program's documentation (rung comments) do?",
        "choices": [
          "Slows the scan",
          "Explains what each rung does, so the next person can understand and fix it",
          "Increases the program size too much to run",
          "Nothing"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Comments explain intent — essential for maintenance. (a) is wrong: comments do not affect scan time. (c) is wrong: comments are negligible in size. (d) is wrong: documentation is essential."
      },
      {
        "module": 11,
        "q": "Which of these is an analogue output from a PLC?",
        "choices": [
          "0–10 V to a VFD speed reference",
          "A relay contact to a motor starter",
          "A pushbutton",
          "A limit switch"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A 0–10 V analogue output can set a VFD's speed reference. (b) is wrong: a relay contact is a digital output. (c) is wrong: a pushbutton is a digital input. (d) is wrong: a limit switch is a digital input."
      },
      {
        "module": 6,
        "q": "What is the scan time of a typical PLC program?",
        "choices": [
          "A few milliseconds",
          "Several seconds",
          "Several minutes",
          "One hour"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A typical scan takes a few milliseconds. (b) is wrong: that would make the machine unresponsive. (c) is wrong: that is far too slow. (d) is wrong: that is absurdly slow."
      },
      {
        "module": 6,
        "q": "An input changes state in the middle of a PLC scan. When is it seen?",
        "choices": [
          "Immediately",
          "At the next scan's input-read step",
          "Never",
          "At the next output-write step"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Inputs are read once per scan; a mid-scan change waits for the next scan. (a) is wrong: the PLC does not interrupt the scan for inputs. (c) is wrong: it is seen on the next scan. (d) is wrong: the output-write step writes outputs, it does not read inputs."
      },
      {
        "module": 6,
        "q": "What is 101011₂ in decimal?",
        "choices": [
          "43",
          "53",
          "35",
          "51"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 32 + 0 + 8 + 0 + 2 + 1 = 43. (b) is wrong: that is 110101₂. (c) is wrong: that is 100011₂. (d) is wrong: that is 110011₂."
      },
      {
        "module": 6,
        "q": "What is A5₁₆ in decimal?",
        "choices": [
          "165",
          "150",
          "105",
          "255"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 10 × 16 + 5 = 165. (b) is wrong: that is 96₁₆. (c) is wrong: that is 69₁₆. (d) is wrong: that is FF₁₆."
      },
      {
        "module": 6,
        "q": "Simplify (A·B)' using De Morgan's law.",
        "choices": [
          "A' + B'",
          "A' · B'",
          "A + B",
          "A · B"
        ],
        "answer": 0,
        "explanation": "Correct: (a). De Morgan: (A·B)' = A' + B'. (b) is wrong: that is the De Morgan form of (A+B)'. (c) is wrong: that is not the complement of A·B. (d) is wrong: that is the original expression without the NOT."
      },
      {
        "module": 6,
        "q": "A 12-bit ADC has a 5 V reference. What is its resolution?",
        "choices": [
          "1.22 mV",
          "4.88 mV",
          "19.5 mV",
          "2.44 mV"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 5/4,096 = 1.22 mV per count. (b) is wrong: that is a 10-bit ADC. (c) is wrong: that is an 8-bit ADC. (d) is wrong: that is twice the value."
      },
      {
        "module": 11,
        "q": "What is the first safety action before working on a PLC-controlled machine?",
        "choices": [
          "Put on gloves",
          "De-energise, lock out, tag, and test that it is dead",
          "Open the programming software",
          "Force the outputs"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Lockout/tagout plus testing is the first action — never trust a switch position. (a) is wrong: gloves are PPE, but isolation comes first. (c) is wrong: software comes after isolation. (d) is wrong: forcing outputs on live equipment is dangerous."
      },
      {
        "module": 11,
        "q": "A website quotes a PMMI pass mark of 75%. Why should you not trust that figure from this course?",
        "choices": [
          "This course states no PMMI pass marks, because they are unverified",
          "PMMI exams have no pass mark",
          "The pass mark is secret",
          "This course forgot to print it"
        ],
        "answer": 0,
        "explanation": "Correct: (a). PMMI pass marks are unverified, so this course states none of them. (b) is wrong: PMMI assessments do have pass marks — they are just unverified here. (c) is wrong: they are not secret. (d) is wrong: the omission is deliberate and honest."
      },
      {
        "module": 11,
        "q": "You score 72% on a PMMI practice exam in this course. Have you passed the real PMMI assessment?",
        "choices": [
          "Yes — 72% beats the benchmark",
          "No — 70% is the app's own practice benchmark, not the real pass mark",
          "Yes — the benchmark is the pass mark",
          "No — you need 100%"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The 70% used here is the app's own practice benchmark; this course states no real PMMI pass mark. (a) is wrong: beating the practice benchmark does not pass the real assessment. (c) is wrong: the benchmark is not the pass mark. (d) is wrong: 100% is not required."
      },
      {
        "module": 10,
        "q": "What does a limit switch do?",
        "choices": [
          "Detects when a moving part reaches a position and signals the PLC",
          "Measures temperature",
          "Limits the current",
          "Counts time"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A limit switch is a digital input that signals position. (b) is wrong: that is a temperature sensor. (c) is wrong: that is a fuse or breaker. (d) is wrong: that is a timer."
      },
      {
        "module": 10,
        "q": "What is a photoelectric sensor's advantage over a limit switch?",
        "choices": [
          "It detects without contact, so nothing wears out",
          "It measures temperature",
          "It is always cheaper",
          "It needs no power"
        ],
        "answer": 0,
        "explanation": "Correct: (a). No-contact detection means no mechanical wear. (b) is wrong: it does not measure temperature. (c) is wrong: it is not always cheaper. (d) is wrong: it needs power."
      },
      {
        "module": 10,
        "q": "A TON timer's rung goes false before the preset elapses. What happens to its accumulated time?",
        "choices": [
          "It stays where it was",
          "It resets to zero",
          "It keeps counting",
          "It sets the done bit"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A TON resets its accumulated time when its rung goes false. (a) is wrong: that is a retentive timer (RTO). (c) is wrong: it stops and resets. (d) is wrong: the done bit only sets after the preset."
      },
      {
        "module": 10,
        "q": "What is a retentive timer (RTO)?",
        "choices": [
          "A timer that keeps its accumulated time when its rung goes false",
          "A timer that resets immediately",
          "A counter",
          "A timer that never times out"
        ],
        "answer": 0,
        "explanation": "Correct: (a). An RTO holds its accumulated time across false rungs until reset. (b) is wrong: that is a TON. (c) is wrong: a counter counts pulses. (d) is wrong: an RTO does time out — it just remembers."
      }
    ]
  }
};
