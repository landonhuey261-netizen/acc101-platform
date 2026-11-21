// egr109 — Midterm and Final exams.
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
        "q": "A heater is rated 5,000 BTU/h. In watts this is about:",
        "choices": [
          "5,000 W",
          "1,465 W",
          "5,275 W",
          "3,600 W"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 5,000 × 1,055 ÷ 3,600 = 1,465 W. (a) confuses BTU/h with watts. (c) is 5,000 × 1,055 without dividing by time. (d) is the seconds in an hour."
      },
      {
        "module": 1,
        "q": "Convert 100 °C to kelvin.",
        "choices": [
          "100 K",
          "273 K",
          "373 K",
          "173 K"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 100 + 273.15 = 373.15 K. (a) forgets to add 273.15. (b) is 0 °C. (d) subtracts instead of adding."
      },
      {
        "module": 1,
        "q": "A sealed hot-water cylinder is which kind of system?",
        "choices": [
          "Open",
          "Closed",
          "Isolated",
          "Steady-flow"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Energy crosses the boundary but no mass leaves. (a) would need mass flow. (c) would block energy too. (d) is a flow condition, not a system type."
      },
      {
        "module": 1,
        "q": "A 1.5 kW heater runs for 2 hours. The energy used is:",
        "choices": [
          "3 kWh",
          "750 Wh",
          "3,000 kWh",
          "0.75 kWh"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 1.5 × 2 = 3 kWh. (b) divides instead of multiplying. (c) forgets the hours. (d) divides power by time."
      },
      {
        "module": 2,
        "q": "A system receives 700 J of heat and does 250 J of work. ΔU is:",
        "choices": [
          "950 J",
          "450 J",
          "−450 J",
          "250 J"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 700 − 250 = 450 J. (a) adds them. (c) has the sign wrong. (d) is the work alone."
      },
      {
        "module": 2,
        "q": "How much heat raises 4 kg of water by 15 K? (c = 4,186 J/kg·K)",
        "choices": [
          "62,790 J",
          "251,160 J",
          "16,744 J",
          "1,004,640 J"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 4 × 4,186 × 15 = 251,160 J. (a) is the value for 1 kg by 15 K. (c) divides by 15. (d) multiplies by 4 twice."
      },
      {
        "module": 2,
        "q": "A gas at 250,000 Pa expands by 0.04 m³ at constant pressure. The work is:",
        "choices": [
          "10,000 J",
          "6,250 J",
          "1,000 J",
          "100,000 J"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 250,000 × 0.04 = 10,000 J. (b) divides. (c) is ten times too small. (d) is ten times too big."
      },
      {
        "module": 2,
        "q": "A heater must raise 0.2 kg/s of water by 10 K. The power needed is about:",
        "choices": [
          "8,372 W",
          "837 W",
          "41,860 W",
          "2,093 W"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 0.2 × 4,186 × 10 = 8,372 W. (b) is ten times too small. (c) multiplies by 5. (d) is a quarter of the answer."
      },
      {
        "module": 3,
        "q": "Carnot efficiency between 700 K and 350 K is:",
        "choices": [
          "25%",
          "50%",
          "75%",
          "100%"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 1 − 350 ÷ 700 = 0.5. (a) uses 350 ÷ 1,400. (c) is 1 − 0.25. (d) needs a cold sink at 0 K."
      },
      {
        "module": 3,
        "q": "A heat pump delivers 8 kW of heat using 2 kW of electricity. Its COP is:",
        "choices": [
          "0.25",
          "2",
          "4",
          "16"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 8 ÷ 2 = 4. (a) divides the wrong way. (b) is half the answer. (d) multiplies."
      },
      {
        "module": 3,
        "q": "Entropy increases when energy:",
        "choices": [
          "Is concentrated",
          "Spreads out",
          "Is destroyed",
          "Stops moving"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Entropy measures how spread out energy is. (a) is the opposite. (c) energy is never destroyed. (d) still energy can be spread out."
      },
      {
        "module": 3,
        "q": "A car engine is 30% efficient and burns fuel worth 60 kW of heat. The power at the wheels is:",
        "choices": [
          "18 kW",
          "42 kW",
          "60 kW",
          "200 kW"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 0.30 × 60 = 18 kW. (b) is the heat rejected. (c) is the fuel energy. (d) divides the wrong way."
      },
      {
        "module": 4,
        "q": "A wall has k = 0.5 W/m·K, area 8 m², thickness 0.25 m, ΔT = 20 K. The heat loss is:",
        "choices": [
          "320 W",
          "80 W",
          "640 W",
          "40 W"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 0.5 × 8 × 20 ÷ 0.25 = 320 W. (b) uses d = 1 m. (c) doubles it. (d) divides by 8."
      },
      {
        "module": 4,
        "q": "Thermal resistance of a 0.2 m layer with k = 0.04 W/m·K is:",
        "choices": [
          "0.2 m²·K/W",
          "5.0 m²·K/W",
          "0.008 m²·K/W",
          "0.8 m²·K/W"
        ],
        "answer": 1,
        "explanation": "Correct: (b). R = 0.2 ÷ 0.04 = 5.0. (a) is the thickness alone. (c) multiplies. (d) divides the wrong way."
      },
      {
        "module": 4,
        "q": "Two layers with R = 0.5 and 2.0 m²·K/W give a total R of:",
        "choices": [
          "2.5 m²·K/W",
          "1.5 m²·K/W",
          "0.4 m²·K/W",
          "1.0 m²·K/W"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Resistances in series add. (b) subtracts. (c) divides. (d) multiplies."
      },
      {
        "module": 4,
        "q": "Doubling a wall's thickness:",
        "choices": [
          "Doubles heat loss",
          "Halves heat loss",
          "Quadruples heat loss",
          "Does nothing"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Q is proportional to 1 ÷ d. (a) is backwards. (c) is the square law, which does not apply here. (d) thickness is in Fourier's law."
      },
      {
        "module": 5,
        "q": "A radiator panel of 4 m², h = 10 W/m²·K, ΔT = 30 K gives off:",
        "choices": [
          "1,200 W",
          "300 W",
          "120 W",
          "12,000 W"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 10 × 4 × 30 = 1,200 W. (b) forgets the area. (c) forgets ΔT. (d) is ten times too big."
      },
      {
        "module": 5,
        "q": "A fan heater and a plain panel radiator have the same surface area and the same surface temperature. Why does the fan heater give off far more heat?",
        "choices": ["It uses a hotter element", "The fan drives forced convection, which moves far more heat than natural convection", "It has a bigger surface", "It uses radiation only"],
        "answer": 1,
        "explanation": "Correct: (b). The fan raises the heat transfer coefficient h, so Q = hAΔT is much larger. (a) the temperatures are stated to be the same. (c) the areas are stated to be the same. (d) both heaters lose heat by convection and radiation, not radiation only.",
      },
      {
        "module": 5,
        "q": "Radiation heat transfer grows with:",
        "choices": [
          "T in °C",
          "T⁴ in kelvin",
          "Area squared",
          "Emissivity squared"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Q = εσAT⁴ with T in kelvin. (a) needs kelvin, not °C. (c) area is linear. (d) emissivity is linear."
      },
      {
        "module": 5,
        "q": "A thermos flask is shiny inside to:",
        "choices": [
          "Look nice",
          "Reduce radiation heat loss",
          "Increase conduction",
          "Hold more liquid"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Low emissivity means little radiation. (a) appearance is not the reason. (c) shiny walls do not increase conduction. (d) shine does not change volume."
      },
      {
        "module": 6,
        "q": "A tank holds 2 m³ of water. Its mass is:",
        "choices": [
          "2,000 kg",
          "2 kg",
          "200 kg",
          "20,000 kg"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 2 × 1,000 = 2,000 kg. (b) is the volume in litres divided by 1,000. (c) is ten times too small. (d) is ten times too big."
      },
      {
        "module": 6,
        "q": "Pressure from a 4,000 N force on 0.02 m² is:",
        "choices": [
          "80 Pa",
          "200,000 Pa",
          "8,000 Pa",
          "2,000 Pa"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 4,000 ÷ 0.02 = 200,000 Pa. (a) multiplies. (c) is the force times 2. (d) divides by 2."
      },
      {
        "module": 6,
        "q": "A gauge reads 300 kPa. The absolute pressure is about:",
        "choices": [
          "300 kPa",
          "199 kPa",
          "401 kPa",
          "101 kPa"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 300 + 101.3 = 401.3 kPa. (a) is the gauge pressure. (b) subtracts the atmosphere. (d) is atmospheric pressure alone."
      },
      {
        "module": 6,
        "q": "Oil with density 850 kg/m³ has a specific gravity of:",
        "choices": [
          "0.85",
          "1.18",
          "850",
          "8.5"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 850 ÷ 1,000 = 0.85. (b) divides the wrong way. (c) is the density. (d) is ten times too big."
      },
      {
        "module": 6,
        "q": "A tank holds 1.5 m³ of water. Its mass is:",
        "choices": [
          "1,500 kg",
          "150 kg",
          "15,000 kg",
          "1.5 kg"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 1.5 × 1,000 = 1,500 kg. (b) is ten times too small. (c) is ten times too big. (d) is the volume alone."
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
        "q": "2 kWh of energy is how many kilojoules?",
        "choices": [
          "2,000 kJ",
          "7,200 kJ",
          "3,600 kJ",
          "746 kJ"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 2 × 3,600 = 7,200 kJ. (a) 2,000 kJ is 2 MJ, only about 0.56 kWh. (c) is 1 kWh. (d) is 1 hp in watts."
      },
      {
        "module": 1,
        "q": "An open system lets what cross its boundary?",
        "choices": [
          "Nothing",
          "Energy only",
          "Mass and energy",
          "Mass only"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Open means both cross. (a) is an isolated system. (b) is a closed system. (d) is not a system type."
      },
      {
        "module": 1,
        "q": "Standard atmospheric pressure is about 101 kPa. In psi this is about:",
        "choices": [
          "1.47 psi",
          "14.7 psi",
          "101 psi",
          "6.9 psi"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 101,325 ÷ 6,895 ≈ 14.7 psi. (a) is ten times too small. (c) mistakes kPa for psi. (d) is 1 psi in kPa, roughly."
      },
      {
        "module": 2,
        "q": "A system loses 100 J of heat and has 50 J of work done on it. ΔU is:",
        "choices": [
          "−150 J",
          "−50 J",
          "150 J",
          "50 J"
        ],
        "answer": 1,
        "explanation": "Correct: (b). ΔU = (−100) − (−50) = −50 J. (a) adds the magnitudes with the wrong sign. (c) adds them as positives. (d) is the work alone."
      },
      {
        "module": 2,
        "q": "Heating 3 kg of water by 20 K needs about:",
        "choices": [
          "251 kJ",
          "25 kJ",
          "2,511 kJ",
          "84 kJ"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 3 × 4,186 × 20 = 251,160 J. (b) is ten times too small. (c) is ten times too big. (d) is a third of the answer."
      },
      {
        "module": 2,
        "q": "A 2 kW kettle heats 1 kg of water from 20 °C to 100 °C. The time needed (ignore losses) is about:",
        "choices": [
          "167 s",
          "84 s",
          "334 s",
          "20 s"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Heat = 1 × 4,186 × 80 = 334,880 J; time = 334,880 ÷ 2,000 = 167 s. (b) halves it. (c) is the heat in kJ. (d) is the temperature rise divided by 4."
      },
      {
        "module": 3,
        "q": "Carnot efficiency between 500 K and 250 K is:",
        "choices": [
          "25%",
          "50%",
          "75%",
          "0%"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 1 − 250 ÷ 500 = 0.5. (a) uses 250 ÷ 1,000. (c) is 1 − 0.25. (d) would need equal temperatures."
      },
      {
        "module": 3,
        "q": "A heat pump with COP 2.5 uses 4 kW of electricity. It delivers:",
        "choices": [
          "1.6 kW",
          "10 kW",
          "6.5 kW",
          "4 kW"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 2.5 × 4 = 10 kW. (a) divides. (c) adds. (d) is the electricity alone."
      },
      {
        "module": 3,
        "q": "The second law means a heat engine must:",
        "choices": [
          "Reject some heat to a cold sink",
          "Turn all heat into work",
          "Run without fuel",
          "Use absolute zero"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Some heat must always be rejected. (b) is impossible. (c) is a perpetual motion machine. (d) absolute zero cannot be reached."
      },
      {
        "module": 4,
        "q": "A wall (k = 0.6, A = 5 m², d = 0.15 m, ΔT = 24 K) loses:",
        "choices": [
          "480 W",
          "120 W",
          "960 W",
          "24 W"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 0.6 × 5 × 24 ÷ 0.15 = 480 W. (b) uses d = 0.6. (c) doubles it. (d) is ΔT alone."
      },
      {
        "module": 4,
        "q": "Insulation 0.08 m thick with k = 0.04 has an R value of:",
        "choices": [
          "0.5 m²·K/W",
          "2.0 m²·K/W",
          "0.0032 m²·K/W",
          "3.2 m²·K/W"
        ],
        "answer": 1,
        "explanation": "Correct: (b). R = 0.08 ÷ 0.04 = 2.0. (a) divides the wrong way. (c) multiplies. (d) multiplies by 40."
      },
      {
        "module": 4,
        "q": "Copper's thermal conductivity is about 400 W/m·K and brick's is 0.72. Copper conducts about how many times better?",
        "choices": [
          "556 times",
          "5.6 times",
          "55 times",
          "2 times"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 400 ÷ 0.72 ≈ 556. (b) and (c) are ten and a hundred times too small. (d) is far too small."
      },
      {
        "module": 5,
        "q": "A panel of 1.5 m², h = 12 W/m²·K, ΔT = 25 K gives off:",
        "choices": [
          "450 W",
          "37.5 W",
          "300 W",
          "4,500 W"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 12 × 1.5 × 25 = 450 W. (b) forgets the area. (c) is 12 × 25. (d) is ten times too big."
      },
      {
        "module": 5,
        "q": "A matt black surface has emissivity near 1 and a shiny surface near 0.05. At the same temperature the black surface radiates about:",
        "choices": [
          "The same",
          "19 times more",
          "0.05 times as much",
          "Twice as much"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 1 ÷ 0.05 = 20, about 19 times with 0.95. (a) ignores emissivity. (c) is the inverse. (d) understates it greatly."
      },
      {
        "module": 5,
        "q": "Natural convection is driven by:",
        "choices": [
          "A fan",
          "A pump",
          "Warm fluid rising because it is lighter",
          "A compressor"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Warm fluid rises on its own. (a) and (b) drive forced convection. (d) is a refrigeration part."
      },
      {
        "module": 6,
        "q": "A 0.25 m³ tank of oil (850 kg/m³) holds a mass of:",
        "choices": [
          "212.5 kg",
          "3,400 kg",
          "850 kg",
          "250 kg"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 0.25 × 850 = 212.5 kg. (b) divides the wrong way. (c) is the density. (d) is the volume in litres."
      },
      {
        "module": 6,
        "q": "A force of 6,000 N on 0.03 m² gives a pressure of:",
        "choices": [
          "180 Pa",
          "200,000 Pa",
          "2,000 Pa",
          "18,000 Pa"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 6,000 ÷ 0.03 = 200,000 Pa. (a) multiplies. (c) divides by 3. (d) divides by 0.33."
      },
      {
        "module": 6,
        "q": "Viscosity falls when temperature:",
        "choices": [
          "Rises",
          "Falls",
          "Stays the same",
          "Reaches zero"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Hot liquids flow more easily. (b) is backwards. (c) viscosity changes with temperature. (d) temperature reaching zero is not the mechanism."
      },
      {
        "module": 7,
        "q": "Gauge pressure 10 m under water is about:",
        "choices": [
          "98.1 kPa",
          "9.81 kPa",
          "10 kPa",
          "199 kPa"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 1,000 × 9.81 × 10 = 98,100 Pa. (b) is 1 m. (c) is the depth alone. (d) is the absolute pressure."
      },
      {
        "module": 7,
        "q": "A jack's pistons are 0.002 m² and 0.1 m². A 100 N push on the small piston gives:",
        "choices": [
          "5,000 N",
          "2,000 N",
          "100 N",
          "50 N"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Pressure 50,000 Pa × 0.1 = 5,000 N. (b) uses a ratio of 20. (c) is the input force. (d) halves it."
      },
      {
        "module": 7,
        "q": "A 0.005 m³ block fully under water feels a buoyant force of about:",
        "choices": [
          "49 N",
          "5 N",
          "490 N",
          "0.5 N"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 0.005 × 1,000 × 9.81 = 49.05 N. (b) is ten times too small. (c) is ten times too big. (d) is a hundred times too small."
      },
      {
        "module": 8,
        "q": "A pipe narrows from 0.2 m to 0.1 m. Water enters at 1.5 m/s. The speed in the narrow section is:",
        "choices": [
          "3 m/s",
          "6 m/s",
          "0.75 m/s",
          "1.5 m/s"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Area ratio 4, so 1.5 × 4 = 6 m/s. (a) is the diameter ratio. (c) divides. (d) is unchanged."
      },
      {
        "module": 8,
        "q": "Water at 3 m/s and 250 kPa enters a section at 6 m/s (horizontal). The new pressure is about:",
        "choices": [
          "264 kPa",
          "236 kPa",
          "250 kPa",
          "213 kPa"
        ],
        "answer": 1,
        "explanation": "Correct: (b). p₂ = 250,000 + 500 × (9 − 36) = 236,500 Pa. (a) adds instead of subtracting. (c) ignores the speed change. (d) doubles the drop."
      },
      {
        "module": 8,
        "q": "The velocity head of water at 4 m/s is about:",
        "choices": [
          "0.82 m",
          "0.41 m",
          "1.63 m",
          "0.20 m"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 16 ÷ 19.62 = 0.816 m. (b) is the value for 2.83 m/s. (c) doubles it. (d) is the value for 2 m/s."
      },
      {
        "module": 9,
        "q": "Water (ρ = 1,000, μ = 0.001) at 2 m/s in a 0.1 m pipe has Re =",
        "choices": [
          "200,000",
          "20,000",
          "2,000",
          "2,000,000"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 1,000 × 2 × 0.1 ÷ 0.001 = 200,000. (b) is ten times too small. (c) is a hundred times too small. (d) is ten times too big."
      },
      {
        "module": 9,
        "q": "A pipe has f = 0.02, L = 100 m, D = 0.1 m, v = 2 m/s. Its friction head loss is about:",
        "choices": [
          "4.08 m",
          "0.41 m",
          "40.8 m",
          "2.04 m"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 0.02 × 1,000 × 0.2039 = 4.08 m. (b) is ten times too small. (c) is ten times too big. (d) is half the velocity head times 10."
      },
      {
        "module": 9,
        "q": "Doubling the flow speed in a pipe makes the friction loss:",
        "choices": [
          "Double",
          "Quadruple",
          "Halve",
          "Stay the same"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Loss depends on v². (a) would be true for a linear law. (c) and (d) are backwards."
      },
      {
        "module": 10,
        "q": "A pump delivers 0.02 m³/s at 10 m head with 80% efficiency. Its power is about:",
        "choices": [
          "2,453 W",
          "1,962 W",
          "1,570 W",
          "19,620 W"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 1,000 × 9.81 × 0.02 × 10 ÷ 0.80 = 2,452.5 W. (b) multiplies by efficiency. (c) is the power at 100% times 0.8. (d) is ten times too big."
      },
      {
        "module": 10,
        "q": "Cavitation in a pump is caused by:",
        "choices": [
          "High discharge pressure",
          "Pressure falling so low that water boils inside the pump",
          "Too much flow",
          "A clean filter"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Low suction pressure lets water boil. (a) high discharge pressure does not cause it. (c) high flow can contribute, but the mechanism is low pressure. (d) a clean filter prevents it."
      },
      {
        "module": 10,
        "q": "The operating point of a pump is:",
        "choices": [
          "Where its curve meets the system curve",
          "Its shut-off head",
          "Its best efficiency point",
          "Its maximum flow"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The crossing is the actual running point. (b) is zero flow. (c) is the peak efficiency, which may not be the operating point. (d) is the end of the curve."
      },
      {
        "module": 11,
        "q": "The Otto cycle is the cycle of:",
        "choices": [
          "A diesel engine",
          "A petrol engine",
          "A refrigerator",
          "A steam turbine"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Petrol engines use the Otto cycle. (a) is the Diesel cycle. (c) is the vapour-compression cycle. (d) is the Rankine cycle."
      },
      {
        "module": 11,
        "q": "In a refrigeration cycle, the compressor:",
        "choices": [
          "Boils the refrigerant",
          "Squeezes the vapour, raising its temperature and pressure",
          "Condenses the vapour",
          "Drops the pressure"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The compressor raises pressure and temperature. (a) is the evaporator. (c) is the condenser. (d) is the expansion valve."
      },
      {
        "module": 11,
        "q": "A fridge removes 600 W of heat using 150 W of electricity. Its COP is:",
        "choices": [
          "0.25",
          "4",
          "750",
          "900"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 600 ÷ 150 = 4. (a) divides the wrong way. (c) adds. (d) multiplies."
      },
      {
        "module": 12,
        "q": "A wall of 50 m² with R = 2.0 m²·K/W and ΔT = 20 K loses:",
        "choices": [
          "500 W",
          "2,000 W",
          "50 W",
          "200 W"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 50 × 20 ÷ 2.0 = 500 W. (b) multiplies by R instead of dividing. (c) is the area alone. (d) is a tenth of the answer."
      },
      {
        "module": 12,
        "q": "A pump must lift water 6 m with 4 m of friction and minor losses. Its total head is:",
        "choices": [
          "2 m",
          "10 m",
          "24 m",
          "6 m"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 6 + 4 = 10 m. (a) subtracts. (c) multiplies. (d) ignores the losses."
      },
      {
        "module": 12,
        "q": "When the roof-tank pump stops, water tries to run back down the pipe. Which part stops it?",
        "choices": ["Float switch", "Non-return valve", "Thermostat", "Suction strainer"],
        "answer": 1,
        "explanation": "Correct: (b). A non-return valve lets water flow one way only. (a) a float switch follows the water level and controls the pump. (c) a thermostat controls temperature. (d) a strainer filters debris."
      },
      {
        "module": 12,
        "q": "A customer wants the biggest heater available for a small workshop 'to be safe'. What should the engineer do first?",
        "choices": ["Order the biggest heater", "Calculate the heat loss, then size the heater to it", "Fit the thermostat first", "Choose the paint"],
        "answer": 1,
        "explanation": "Correct: (b). Heat loss sets the heater size; oversizing wastes money and energy. (a) is what the customer asked for, not what the engineer should do. (c) controls come after sizing. (d) is cosmetic.",
      },
      {
        "module": 4,
        "q": "A wall's R_total is 2.5 m²·K/W, its area is 10 m², and ΔT is 16 K. The heat loss is:",
        "choices": [
          "64 W",
          "400 W",
          "160 W",
          "40 W"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 10 × 16 ÷ 2.5 = 64 W. (b) multiplies by R. (c) is 10 × 16. (d) divides by 4."
      },
      {
        "module": 7,
        "q": "A U-tube manometer with a 0.5 m water height difference reads about:",
        "choices": [
          "4,905 Pa",
          "491 Pa",
          "49,050 Pa",
          "98 Pa"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 1,000 × 9.81 × 0.5 = 4,905 Pa. (b) is ten times too small. (c) is ten times too big. (d) is far too small."
      },
      {
        "module": 9,
        "q": "Four 90° elbows (K = 0.9 each) in water at 3 m/s give a minor loss of about:",
        "choices": [
          "1.65 m",
          "0.41 m",
          "3.3 m",
          "0.92 m"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Velocity head = 9 ÷ 19.62 = 0.459 m; minor loss = 4 × 0.9 × 0.459 = 1.65 m. (b) is the loss of one elbow. (c) doubles it. (d) is two elbows."
      }
    ]
  }
};
