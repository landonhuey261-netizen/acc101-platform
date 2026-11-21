// ele102 — Midterm and Final exams.
// All questions are original to these exams (same topics as module quizzes, fresh scenarios and numbers).
// Every explanation covers why the correct answer is right AND why each wrong choice is wrong.
module.exports = {
  "midterm": {
    "title": "Midterm Exam",
    "minutes": 75,
    "coverage": "Modules 1–6",
    "questions": [
      {
        "module": 1,
        "q": "A copper atom has 29 protons. How many electrons does a neutral copper atom have, and where are the valence electrons?",
        "choices": [
          "29 electrons; the valence electrons are in the outermost shell",
          "29 electrons; the valence electrons are in the nucleus",
          "13 electrons; in the nucleus",
          "47 electrons; in the inner shell"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A neutral atom has as many electrons as protons, and the valence electrons are in the outermost shell. (b) Valence electrons orbit the nucleus; they are not in it. (c) 13 is aluminum's proton count. (d) 47 is silver's proton count."
      },
      {
        "module": 1,
        "q": "A wire carries 3 amps of current. How much charge passes a point in the wire every second?",
        "choices": [
          "3 coulombs",
          "1 coulomb",
          "6.25 × 10^18 coulombs",
          "0.3 coulombs"
        ],
        "answer": 0,
        "explanation": "Correct: (a). One amp is one coulomb per second, so 3 amps is 3 coulombs per second. (b) 1 coulomb per second is 1 amp. (c) 6.25 × 10^18 is the number of electrons in one coulomb. (d) 0.3 coulombs per second is 0.3 amps."
      },
      {
        "module": 1,
        "q": "Which material is a semiconductor?",
        "choices": [
          "Copper",
          "Rubber",
          "Silicon",
          "Glass"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Silicon is a semiconductor that can be controlled to conduct or block. (a) Copper is a conductor. (b) Rubber is an insulator. (d) Glass is an insulator."
      },
      {
        "module": 1,
        "q": "In a metal wire, the electrons actually flow from:",
        "choices": [
          "Positive to negative",
          "Negative to positive",
          "Both directions at once",
          "The middle outward"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Electron flow is from negative to positive. (a) That is conventional current. (c) Electrons flow one way in a DC circuit. (d) Electrons do not flow outward from the middle."
      },
      {
        "module": 2,
        "q": "A 48-volt source feeds a 12-ohm load. The current is:",
        "choices": [
          "4 amps",
          "12 amps",
          "48 amps",
          "576 amps"
        ],
        "answer": 0,
        "explanation": "Correct: (a). I = 48 ÷ 12 = 4 amps. (b) 12 amps confuses the resistance with the current. (c) 48 amps confuses the voltage with the current. (d) 576 amps is 48 × 12."
      },
      {
        "module": 2,
        "q": "A 9-volt battery drives 3 amps through a load. The load's resistance is:",
        "choices": [
          "3 ohms",
          "9 ohms",
          "27 ohms",
          "0.33 ohms"
        ],
        "answer": 0,
        "explanation": "Correct: (a). R = 9 ÷ 3 = 3 ohms. (b) 9 ohms confuses the voltage with the resistance. (c) 27 ohms is 9 × 3. (d) 0.33 ohms is 3 ÷ 9."
      },
      {
        "module": 2,
        "q": "A current of 0.5 amps flows through a 40-ohm resistor. The voltage across the resistor is:",
        "choices": [
          "20 volts",
          "80 volts",
          "0.5 volts",
          "40 volts"
        ],
        "answer": 0,
        "explanation": "Correct: (a). E = 0.5 × 40 = 20 volts. (b) 80 volts is 40 ÷ 0.5. (c) 0.5 volts confuses the current with the voltage. (d) 40 volts confuses the resistance with the voltage."
      },
      {
        "module": 2,
        "q": "A wire is replaced with a wire of the same material but twice the cross-sectional area. What happens to its resistance?",
        "choices": [
          "It doubles",
          "It is halved",
          "It stays the same",
          "It goes to zero"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Resistance falls as cross-sectional area rises — twice the area means half the resistance. (a) Doubling happens when length doubles. (c) Area changes resistance. (d) Resistance never goes to zero in an ordinary wire."
      },
      {
        "module": 3,
        "q": "A 240-volt circuit feeds a load drawing 5 amps. The power is:",
        "choices": [
          "48 watts",
          "240 watts",
          "1,200 watts",
          "12,000 watts"
        ],
        "answer": 2,
        "explanation": "Correct: (c). P = 240 × 5 = 1,200 watts. (a) 48 watts is 240 ÷ 5. (b) 240 watts confuses the voltage with the power. (d) 12,000 watts is 240 × 50."
      },
      {
        "module": 3,
        "q": "A 900-watt load runs on 120 volts. What current does it draw?",
        "choices": [
          "7.5 amps",
          "9 amps",
          "120 amps",
          "900 amps"
        ],
        "answer": 0,
        "explanation": "Correct: (a). I = 900 ÷ 120 = 7.5 amps. (b) 9 amps is 900 ÷ 100. (c) 120 amps confuses volts with amps. (d) 900 amps confuses watts with amps."
      },
      {
        "module": 3,
        "q": "A resistor of 5 ohms carries 6 amps. How much power is lost as heat?",
        "choices": [
          "30 watts",
          "180 watts",
          "11 watts",
          "1.2 watts"
        ],
        "answer": 1,
        "explanation": "Correct: (b). P = I² × R = 36 × 5 = 180 watts. (a) 30 watts is 5 × 6, the voltage drop. (c) 11 watts is 5 + 6. (d) 1.2 watts is 6 ÷ 5."
      },
      {
        "module": 3,
        "q": "A 500-watt load runs for 6 hours. How many kilowatt-hours does it use?",
        "choices": [
          "0.5 kWh",
          "3 kWh",
          "6 kWh",
          "30 kWh"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 500 W × 6 h = 3,000 Wh = 3 kWh. (a) 0.5 kWh would be 500 W for 1 hour. (c) 6 kWh would need 1,000 watts. (d) 30 kWh is 500 × 60, the wrong math."
      },
      {
        "module": 4,
        "q": "Three resistors of 5 Ω, 10 Ω, and 15 Ω are in series across a 120 V source. What is the total resistance?",
        "choices": [
          "3 Ω",
          "15 Ω",
          "30 Ω",
          "150 Ω"
        ],
        "answer": 2,
        "explanation": "Correct: (c). R_T = 5 + 10 + 15 = 30 ohms. (a) 3 ohms is not the sum. (b) 15 ohms is one resistor. (d) 150 ohms is 5 × 10 × 15 ÷ 5, not the rule."
      },
      {
        "module": 4,
        "q": "In that circuit, what is the total current?",
        "choices": [
          "4 amps",
          "8 amps",
          "30 amps",
          "120 amps"
        ],
        "answer": 0,
        "explanation": "Correct: (a). I_T = 120 ÷ 30 = 4 amps. (b) 8 amps would need 15 ohms. (c) 30 amps confuses resistance with current. (d) 120 amps confuses voltage with current."
      },
      {
        "module": 4,
        "q": "In that circuit, what is the voltage drop across the 15 Ω resistor?",
        "choices": [
          "15 volts",
          "30 volts",
          "60 volts",
          "120 volts"
        ],
        "answer": 2,
        "explanation": "Correct: (c). V = 4 × 15 = 60 volts. (a) 15 volts confuses the resistance with the drop. (b) 30 volts is not a drop in this circuit — the drops are 20 V, 40 V, and 60 V. (d) 120 volts is the source voltage."
      },
      {
        "module": 4,
        "q": "How much power does the 10 Ω resistor use in that circuit?",
        "choices": [
          "40 watts",
          "160 watts",
          "400 watts",
          "10 watts"
        ],
        "answer": 1,
        "explanation": "Correct: (b). P = I² × R = 16 × 10 = 160 watts. (a) 40 watts is the voltage drop across the 10 Ω resistor. (c) 400 watts is 4 × 100, the wrong math. (d) 10 watts confuses the resistance with the power."
      },
      {
        "module": 5,
        "q": "Two resistors, 20 Ω and 20 Ω, are in parallel. What is their total resistance?",
        "choices": [
          "40 Ω",
          "20 Ω",
          "10 Ω",
          "400 Ω"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Two equal resistors in parallel give half of one: 10 ohms. (a) 40 ohms is the series sum. (b) 20 ohms is one resistor. (d) 400 ohms is the product, not the total."
      },
      {
        "module": 5,
        "q": "A 240 V source feeds a parallel branch of 40 Ω. What is the branch current?",
        "choices": [
          "4 amps",
          "6 amps",
          "40 amps",
          "240 amps"
        ],
        "answer": 1,
        "explanation": "Correct: (b). I = 240 ÷ 40 = 6 amps. (a) 4 amps would need 60 ohms. (c) 40 amps confuses resistance with current. (d) 240 amps confuses voltage with current."
      },
      {
        "module": 5,
        "q": "Three parallel branches carry 2 A, 3 A, and 5 A. What is the total current?",
        "choices": [
          "2 amps",
          "5 amps",
          "10 amps",
          "30 amps"
        ],
        "answer": 2,
        "explanation": "Correct: (c). I_T = 2 + 3 + 5 = 10 amps. (a) 2 amps is one branch. (b) 5 amps is one branch. (d) 30 amps is the product of the three currents."
      },
      {
        "module": 5,
        "q": "In a parallel circuit, which resistor gets the biggest share of the current?",
        "choices": [
          "The largest resistor",
          "The smallest resistor",
          "They all get the same",
          "The one closest to the source"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Current divides inversely to resistance, so the smallest resistor takes the most current. (a) The largest resistor takes the least current. (c) Branch currents differ with resistance. (d) Position does not decide current share."
      },
      {
        "module": 6,
        "q": "A 5 Ω resistor is in series with a parallel pair of 10 Ω and 10 Ω, across a 120 V source. What is the total resistance?",
        "choices": [
          "5 Ω",
          "10 Ω",
          "15 Ω",
          "25 Ω"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The pair is 5 ohms (half of 10), and 5 + 5 = 10 ohms total. (a) 5 ohms is the series resistor alone. (c) 15 ohms adds the pair as 10 ohms. (d) 25 ohms is the series sum of all three."
      },
      {
        "module": 6,
        "q": "In that combination circuit, what is the total current?",
        "choices": [
          "12 amps",
          "6 amps",
          "24 amps",
          "120 amps"
        ],
        "answer": 0,
        "explanation": "Correct: (a). I_T = 120 ÷ 10 = 12 amps. (b) 6 amps would need 20 ohms. (c) 24 amps would need 5 ohms. (d) 120 amps confuses voltage with current."
      },
      {
        "module": 6,
        "q": "In that circuit, what is the voltage drop across the 5 Ω series resistor?",
        "choices": [
          "60 volts",
          "120 volts",
          "30 volts",
          "5 volts"
        ],
        "answer": 0,
        "explanation": "Correct: (a). V = 12 × 5 = 60 volts. (b) 120 volts is the source voltage. (c) 30 volts is half the correct drop. (d) 5 volts confuses the resistance with the drop."
      },
      {
        "module": 6,
        "q": "In that circuit, what is the current through one 10 Ω branch?",
        "choices": [
          "12 amps",
          "6 amps",
          "10 amps",
          "3 amps"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The voltage across the pair is 120 − 60 = 60 V, so each branch carries 60 ÷ 10 = 6 amps, and 6 + 6 = 12 amps total. (a) 12 amps is the total current. (c) 10 amps confuses the resistance with the current. (d) 3 amps is half the branch current."
      },
      {
        "module": 6,
        "q": "A series resistor opens in a combination circuit. What happens to the current in the parallel branches?",
        "choices": [
          "It doubles",
          "It stops — the only path is broken",
          "It stays the same",
          "It triples"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A series open breaks the only path, so all current stops. (a) Current cannot rise through a broken path. (c) Current stops, it does not stay. (d) Current cannot triple through a broken path."
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
        "q": "A material has almost no free electrons. It is most likely:",
        "choices": [
          "Copper",
          "Aluminum",
          "Rubber",
          "Silver"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Rubber is an insulator with almost no free electrons. (a) Copper is a conductor with many free electrons. (b) Aluminum is a conductor. (d) Silver is a conductor."
      },
      {
        "module": 1,
        "q": "A circuit is open and no current flows. What is the voltage across the open switch?",
        "choices": [
          "Zero",
          "The full source voltage",
          "Half the source voltage",
          "Twice the source voltage"
        ],
        "answer": 1,
        "explanation": "Correct: (b). With no current, there are no voltage drops elsewhere, so the full source voltage appears across the open. (a) Zero volts would mean the source is dead. (c) Half the source voltage has no basis. (d) Voltage cannot exceed the source in this circuit."
      },
      {
        "module": 2,
        "q": "A 24-volt source feeds a 6-ohm load. The current is:",
        "choices": [
          "4 amps",
          "6 amps",
          "24 amps",
          "144 amps"
        ],
        "answer": 0,
        "explanation": "Correct: (a). I = 24 ÷ 6 = 4 amps. (b) 6 amps confuses the resistance with the current. (c) 24 amps confuses the voltage with the current. (d) 144 amps is 24 × 6."
      },
      {
        "module": 2,
        "q": "A wire's length is halved and nothing else changes. What happens to its resistance?",
        "choices": [
          "It doubles",
          "It is halved",
          "It stays the same",
          "It goes to zero"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Resistance is proportional to length, so halving the length halves the resistance. (a) Doubling happens when length doubles. (c) Length changes resistance. (d) Resistance never goes to zero in an ordinary wire."
      },
      {
        "module": 3,
        "q": "A 480-volt circuit feeds a load drawing 2 amps. The power is:",
        "choices": [
          "240 watts",
          "480 watts",
          "960 watts",
          "2,400 watts"
        ],
        "answer": 2,
        "explanation": "Correct: (c). P = 480 × 2 = 960 watts. (a) 240 watts is 480 ÷ 2. (b) 480 watts confuses the voltage with the power. (d) 2,400 watts is 480 × 5."
      },
      {
        "module": 3,
        "q": "A load draws 8 amps at 120 volts. How much power does it use?",
        "choices": [
          "15 watts",
          "960 watts",
          "120 watts",
          "8 watts"
        ],
        "answer": 1,
        "explanation": "Correct: (b). P = 120 × 8 = 960 watts. (a) 15 watts is 120 ÷ 8. (c) 120 watts confuses the voltage with the power. (d) 8 watts confuses the current with the power."
      },
      {
        "module": 3,
        "q": "A 2,000-watt heater runs for 3 hours. How many kilowatt-hours does it use?",
        "choices": [
          "2 kWh",
          "3 kWh",
          "6 kWh",
          "9 kWh"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 2,000 W × 3 h = 6,000 Wh = 6 kWh. (a) 2 kWh would be 2,000 W for 1 hour. (b) 3 kWh would need 1,000 watts. (d) 9 kWh is 3,000 W × 3 h."
      },
      {
        "module": 4,
        "q": "A series circuit has resistors of 4 Ω, 6 Ω, and 10 Ω on a 100 V source. What is the total current?",
        "choices": [
          "5 amps",
          "10 amps",
          "20 amps",
          "100 amps"
        ],
        "answer": 0,
        "explanation": "Correct: (a). R_T = 20 ohms, so I_T = 100 ÷ 20 = 5 amps. (b) 10 amps would need 10 ohms. (c) 20 amps confuses the resistance with the current. (d) 100 amps confuses the voltage with the current."
      },
      {
        "module": 4,
        "q": "In that circuit, what is the voltage drop across the 6 Ω resistor?",
        "choices": [
          "6 volts",
          "30 volts",
          "50 volts",
          "100 volts"
        ],
        "answer": 1,
        "explanation": "Correct: (b). V = 5 × 6 = 30 volts. (a) 6 volts confuses the resistance with the drop. (c) 50 volts is the drop across the 10 Ω resistor. (d) 100 volts is the source voltage."
      },
      {
        "module": 4,
        "q": "A series resistor shorts. What happens to the total current?",
        "choices": [
          "It falls to zero",
          "It rises, because the total resistance fell",
          "It stays the same",
          "It reverses"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A short lowers the total resistance, so the current rises. (a) Current falls to zero in an open, not a short. (c) Current changes when resistance changes. (d) Current does not reverse in a DC circuit."
      },
      {
        "module": 5,
        "q": "Two resistors, 30 Ω and 60 Ω, are in parallel. What is their total resistance?",
        "choices": [
          "20 Ω",
          "30 Ω",
          "45 Ω",
          "90 Ω"
        ],
        "answer": 0,
        "explanation": "Correct: (a). (30 × 60) ÷ (30 + 60) = 1,800 ÷ 90 = 20 ohms. (b) 30 ohms is one resistor. (c) 45 ohms is the average. (d) 90 ohms is the series sum."
      },
      {
        "module": 5,
        "q": "A 120 V source feeds a 15 Ω parallel branch. What is the branch current?",
        "choices": [
          "8 amps",
          "15 amps",
          "120 amps",
          "1,800 amps"
        ],
        "answer": 0,
        "explanation": "Correct: (a). I = 120 ÷ 15 = 8 amps. (b) 15 amps confuses the resistance with the current. (c) 120 amps confuses the voltage with the current. (d) 1,800 amps is 120 × 15."
      },
      {
        "module": 5,
        "q": "A parallel branch shorts. What happens to the voltage across the other branches?",
        "choices": [
          "It rises",
          "It collapses, and the breaker trips",
          "It stays the same",
          "It doubles"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A short is a near-zero-resistance path across the source, so the voltage collapses and the breaker trips. (a) Voltage falls, it does not rise. (c) Voltage changes when a short is present. (d) Voltage does not double."
      },
      {
        "module": 6,
        "q": "A combination circuit has a 20 Ω resistor in series with a parallel pair of 20 Ω and 20 Ω, on a 120 V source. What is the total resistance?",
        "choices": [
          "20 Ω",
          "30 Ω",
          "40 Ω",
          "60 Ω"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The pair is 10 ohms, and 20 + 10 = 30 ohms. (a) 20 ohms is the series resistor alone. (c) 40 ohms adds the pair as 20 ohms. (d) 60 ohms is the series sum of all three."
      },
      {
        "module": 6,
        "q": "In that circuit, what is the voltage across the parallel pair?",
        "choices": [
          "40 volts",
          "60 volts",
          "80 volts",
          "120 volts"
        ],
        "answer": 0,
        "explanation": "Correct: (a). I_T = 120 ÷ 30 = 4 A, so the series resistor drops 4 × 20 = 80 V, leaving 120 − 80 = 40 V across the pair. (b) 60 volts is not a voltage in this circuit. (c) 80 volts is the drop across the series resistor. (d) 120 volts is the source voltage."
      },
      {
        "module": 7,
        "q": "At a junction, 8 amps enter and two branches leave carrying 3 amps and 2 amps. What does the third branch carry?",
        "choices": [
          "2 amps",
          "3 amps",
          "5 amps",
          "8 amps"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 8 − 3 − 2 = 3 amps by KCL. (a) 2 amps is another branch's current. (c) 5 amps is 3 + 2. (d) 8 amps is the total entering."
      },
      {
        "module": 7,
        "q": "A 48 V source feeds three series resistors with drops of 12 V and 18 V. What is the third drop?",
        "choices": [
          "6 V",
          "12 V",
          "18 V",
          "30 V"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 48 − 12 − 18 = 18 volts by KVL. (a) 6 volts is 48 − 42, the wrong math. (b) 12 V is the first drop. (d) 30 V is 12 + 18."
      },
      {
        "module": 7,
        "q": "At a junction, 20 amps enter and three branches leave carrying 8 amps, 6 amps, and 4 amps. How much current is unaccounted for, and what does that mean?",
        "choices": [
          "0 amps — the currents balance",
          "2 amps — one of the measurements is wrong, because KCL says the currents must balance",
          "10 amps — the junction is losing current",
          "20 amps — the branches carry nothing"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 8 + 6 + 4 = 18 amps, but 20 amps enter, so 2 amps are unaccounted for — one of the measurements is wrong, because KCL says currents in equal currents out. (a) The currents do not balance: 18 is not 20. (c) A junction does not lose current; charge is conserved. (d) The branches carry 18 amps, not nothing."
      },
      {
        "module": 7,
        "q": "After solving a series circuit, you add the voltage drops and get 100 V, but the source is 120 V. What should you do?",
        "choices": [
          "Accept the answer",
          "Recheck your math — KVL is violated, so one of the drops is wrong",
          "Change the source voltage",
          "Add another resistor"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A KVL violation means an error in the math. (a) Accepting a mismatch hides an error. (c) The source voltage is set by the circuit. (d) Adding a resistor changes the circuit."
      },
      {
        "module": 8,
        "q": "A voltmeter reads 24.0 V on a circuit. The meter's accuracy is ±1%. About how far off could the true voltage be?",
        "choices": [
          "0.024 V",
          "0.24 V",
          "2.4 V",
          "24 V"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 1% of 24 is 0.24 volts. (a) 0.024 V is 0.1%. (c) 2.4 V is 10%. (d) 24 V is 100%."
      },
      {
        "module": 8,
        "q": "A fuse is tested for continuity while still connected in a circuit with a parallel path. What is the risk?",
        "choices": [
          "The fuse will blow",
          "A false reading — the meter can read through the parallel path",
          "The meter will read zero",
          "Nothing — parallel paths do not affect continuity tests"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A parallel path can give a false continuity reading. (a) Testing does not blow the fuse. (c) The meter may read a low resistance, not zero. (d) Parallel paths do affect resistance and continuity readings."
      },
      {
        "module": 8,
        "q": "Why is a clamp meter safer than a multimeter for measuring current in a live panel?",
        "choices": [
          "It measures voltage instead",
          "It does not require breaking the circuit — it clamps around a conductor",
          "It has no battery",
          "It cannot measure current"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A clamp meter reads the magnetic field without opening the circuit. (a) A clamp meter measures current, not voltage. (c) A clamp meter has a battery. (d) A clamp meter does measure current."
      },
      {
        "module": 8,
        "q": "A meter's leads are cracked and bare wire shows through. What should be done?",
        "choices": [
          "Use them carefully",
          "Take them out of service and replace them",
          "Wrap them in tape and use them",
          "Use them only on low-voltage circuits"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Damaged leads are a shock hazard and must be replaced. (a) Careful use does not make damaged leads safe. (c) Tape does not restore the leads' rating. (d) Damaged leads are unsafe at any voltage."
      },
      {
        "module": 9,
        "q": "A 120 V, 15 A circuit runs 50 feet one way in 14 AWG copper. Using the field formula with K = 12.9 and 14 AWG = 4,110 CM, what is the voltage drop? (Round to the nearest whole number.)",
        "choices": [
          "2 V",
          "5 V",
          "9 V",
          "15 V"
        ],
        "answer": 1,
        "explanation": "Correct: (b). V_D = (2 × 12.9 × 15 × 50) ÷ 4,110 = 19,350 ÷ 4,110 ≈ 4.7 V — 5 rounded. (a) 2 V is too low. (c) 9 V is about double. (d) 15 V is the current, not the drop."
      },
      {
        "module": 9,
        "q": "Is a 4.7 V drop on a 120 V branch circuit within the NEC's 3% recommendation?",
        "choices": [
          "Yes — 3% of 120 V is 3.6 V, and 4.7 V is less",
          "No — 3% of 120 V is 3.6 V, and 4.7 V is more",
          "Yes — the limit is 5%",
          "No — the limit is 1%"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 3% of 120 V is 3.6 V, and 4.7 V exceeds it. (a) 4.7 V is more than 3.6 V, not less. (c) 5% is the total (feeder plus branch) recommendation, not the branch-circuit one. (d) The branch-circuit recommendation is 3%, not 1%."
      },
      {
        "module": 9,
        "q": "A wire is replaced with aluminum instead of copper, same size and length. What happens to its resistance?",
        "choices": [
          "It falls",
          "It rises — aluminum has a higher resistivity than copper",
          "It stays the same",
          "It goes to zero"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Aluminum has a higher resistivity, so the same size aluminum wire has more resistance. (a) Resistance rises, it does not fall. (c) Material changes resistance. (d) Resistance never goes to zero."
      },
      {
        "module": 9,
        "q": "What is the 3% voltage-drop limit on a 240-volt branch circuit, in volts?",
        "choices": [
          "2.4 V",
          "3.6 V",
          "7.2 V",
          "12 V"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 0.03 × 240 = 7.2 volts. (a) 2.4 V is 1% of 240. (b) 3.6 V is 3% of 120. (d) 12 V is 5% of 240."
      },
      {
        "module": 10,
        "q": "A coil with more turns of wire has:",
        "choices": [
          "Less inductance",
          "More inductance",
          "The same inductance",
          "No magnetic field"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Inductance rises with the number of turns. (a) More turns mean more inductance. (c) Turns change inductance. (d) A coil with more turns has a stronger field."
      },
      {
        "module": 10,
        "q": "A relay coil is de-energized and its contacts stay closed. What is a likely cause?",
        "choices": [
          "The coil is too strong",
          "The contacts are welded shut from arcing",
          "The spring is too strong",
          "The voltage is too high"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Contacts can weld shut when they arc under load. (a) Coil strength does not hold contacts closed when de-energized. (c) A strong spring would open the contacts. (d) High voltage does not weld contacts by itself."
      },
      {
        "module": 10,
        "q": "What does a solenoid do when its coil is energized?",
        "choices": [
          "It generates power",
          "Its plunger is pulled in",
          "Its plunger is pushed out by a spring",
          "It opens a circuit"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Energizing the coil pulls the iron plunger in. (a) A solenoid does not generate power. (c) The spring pushes the plunger out when the coil is de-energized. (d) A solenoid moves a plunger; it does not open a circuit by itself."
      },
      {
        "module": 10,
        "q": "The left-hand rule is used for:",
        "choices": [
          "The magnetic field around a conductor",
          "The force on a current-carrying conductor in a magnetic field (the motor rule)",
          "The voltage across a resistor",
          "The current through a capacitor"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The left-hand rule gives the force on a conductor in a field. (a) The field around a conductor uses the right-hand rule. (c) Voltage across a resistor uses Ohm's law. (d) Current through a capacitor uses the capacitive reactance formula."
      },
      {
        "module": 11,
        "q": "A 12 V battery bank is made of two 6 V, 50 Ah batteries. How must they be connected, and what is the capacity?",
        "choices": [
          "In parallel — 12 V, 100 Ah",
          "In series — 12 V, 50 Ah",
          "In series — 12 V, 100 Ah",
          "In parallel — 6 V, 50 Ah"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Series adds voltage (6 + 6 = 12 V) and keeps capacity at 50 Ah. (a) Parallel would give 6 V and 100 Ah. (c) Series does not add capacity. (d) Parallel does not add voltage."
      },
      {
        "module": 11,
        "q": "A battery is rated 20 Ah and powers a 4-amp load. About how long will it last?",
        "choices": [
          "4 hours",
          "5 hours",
          "20 hours",
          "80 hours"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Run time = 20 ÷ 4 = 5 hours. (a) 4 hours is the current, not the time. (c) 20 hours would need a 1-amp load. (d) 80 hours is 20 × 4."
      },
      {
        "module": 11,
        "q": "A lead-acid battery's terminals are covered with a white, crusty deposit. What is the correct action?",
        "choices": [
          "Ignore it",
          "Clean it (with PPE, de-energized and under a licensed supervisor) and check the connections",
          "Add water to the terminals",
          "Charge the battery faster"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Corrosion on terminals causes high resistance and must be cleaned and checked. (a) Corrosion is a problem, not cosmetic. (c) Water does not go on the terminals. (d) Faster charging does not fix corrosion."
      },
      {
        "module": 11,
        "q": "A lithium-ion tool battery is hot and swollen. What should be done with it?",
        "choices": [
          "Charge it fully",
          "Take it out of service and dispose of it through the proper battery channel",
          "Use it until it dies",
          "Put it in the freezer"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A hot, swollen lithium-ion battery is a fire risk and must be disposed of properly. (a) Charging it is dangerous. (c) Using it is dangerous. (d) A freezer does not make it safe."
      },
      {
        "module": 12,
        "q": "A circuit is dead and the fuse tests good on continuity. What should be checked next?",
        "choices": [
          "The switch and the connections — the open may be elsewhere in the path",
          "The battery voltage only",
          "The wire color",
          "The fuse rating only"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A good fuse means the open is elsewhere — the switch, a connection, or a wire. (b) Battery voltage alone does not find the open. (c) Wire color is irrelevant. (d) Fuse rating is not the issue when the fuse tests good."
      },
      {
        "module": 12,
        "q": "A motor winding reads near zero ohms to the motor frame. What does that mean?",
        "choices": [
          "The winding is good",
          "The winding is grounded — its insulation has failed",
          "The winding is open",
          "The meter is broken"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Near-zero resistance to the frame means the winding is shorted to ground. (a) A good winding reads its normal resistance to the frame as very high. (c) An open winding reads infinite resistance. (d) The meter is reporting a real condition."
      },
      {
        "module": 12,
        "q": "In a 16-point circuit, the half-split method finds a fault in about how many tests?",
        "choices": [
          "16",
          "8",
          "4",
          "2"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Each test halves the search, so 16 points take about 4 tests. (a) 16 tests is checking every point. (b) 8 tests is one halving. (d) 2 tests is not enough to find a fault in 16 points."
      },
      {
        "module": 12,
        "q": "A repair is made and the circuit works. What should the troubleshooter do next?",
        "choices": [
          "Leave immediately",
          "Verify the readings match the expected values and document the fault and the fix",
          "Replace another part just in case",
          "Turn the power off and leave it off"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Verify the repair and document what was found. (a) Leaving without verifying is a guess. (c) Replacing another part is random. (d) Leaving the power off does not verify the repair."
      },
      {
        "module": 5,
        "q": "A 120 V source feeds parallel branches of 30 Ω and 60 Ω. What is the total current?",
        "choices": [
          "2 amps",
          "4 amps",
          "6 amps",
          "10 amps"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Branch currents are 120 ÷ 30 = 4 A and 120 ÷ 60 = 2 A, so the total is 4 + 2 = 6 amps. (a) 2 amps is one branch's current. (b) 4 amps is the other branch's current. (d) 10 amps is not the sum."
      }
    ]
  }
};
