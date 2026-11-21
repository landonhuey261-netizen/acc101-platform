// egr104 — Midterm and Final exams.
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
        "q": "A student rubs a balloon on a wool sweater and the balloon sticks to a wall. Which kind of electricity is this?",
        "choices": [
          "Current electricity flowing in a loop",
          "Static electricity: charge built up in one place",
          "A short circuit",
          "Induced voltage from a transformer"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Rubbing moves charge onto the balloon, where it sits still — static electricity. (a) is wrong: nothing flows in a loop. (c) is wrong: there is no circuit. (d) is wrong: no transformer is involved."
      },
      {
        "module": 1,
        "q": "Which material would you choose for the insulation around a power cord, and why?",
        "choices": [
          "Copper, because it conducts well",
          "Plastic, because it is an insulator that blocks current",
          "Aluminium, because it is light",
          "Silicon, because it is a semiconductor"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Insulation must block current, and plastic is an insulator. (a) is wrong: copper conducts, which is the opposite of what insulation must do. (c) is wrong: aluminium is a conductor too. (d) is wrong: silicon's controlled conduction is for chips, not insulation."
      },
      {
        "module": 1,
        "q": "A torch has a good battery and a good bulb, but the bulb is dark. The switch is open. What is the problem?",
        "choices": [
          "The battery is dead",
          "The bulb has used up all the charge",
          "The circuit is open, so no charge can flow",
          "The electrons are stuck in the battery"
        ],
        "answer": 2,
        "explanation": "Correct: (c). An open switch breaks the loop — an open circuit carries no current. (a) is wrong: the battery is good. (b) is wrong: charge is not used up by a load. (d) is wrong: electrons are always in the wire; they need a complete path and a push."
      },
      {
        "module": 1,
        "q": "Why is a short circuit dangerous?",
        "choices": [
          "It stops all current from flowing",
          "It gives the load too little voltage",
          "It bypasses the load, so a very large current flows and the wire overheats",
          "It makes the battery last longer"
        ],
        "answer": 2,
        "explanation": "Correct: (c). A short is a near-zero resistance path, so current surges and the wire heats dangerously. (a) describes an open circuit. (b) is wrong: the danger is too much current, not too little voltage. (d) is wrong: a short drains a battery fast."
      },
      {
        "module": 2,
        "q": "A resistor is marked 2.2 kΩ. How many ohms is that?",
        "choices": [
          "2.2 Ω",
          "22 Ω",
          "220 Ω",
          "2,200 Ω"
        ],
        "answer": 3,
        "explanation": "Correct: (d). 1 kΩ = 1,000 Ω, so 2.2 × 1,000 = 2,200 Ω. (a) is the number without converting. (b) is 2.2 × 10. (c) is 2.2 × 100."
      },
      {
        "module": 2,
        "q": "In the water analogy, what does the water pressure represent?",
        "choices": [
          "Current",
          "Resistance",
          "Voltage",
          "Power"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Pressure is the push — voltage. (a) is the flow rate. (b) is the narrowness of the pipe. (d) is the rate of energy use, which is not a water-analogy term in this module."
      },
      {
        "module": 2,
        "q": "A circuit's resistance is doubled while the voltage stays the same. What happens to the current?",
        "choices": [
          "It doubles",
          "It halves",
          "It stays the same",
          "It drops to zero"
        ],
        "answer": 1,
        "explanation": "Correct: (b). More opposition with the same push means less flow — the current halves. (a) is backwards. (c) is wrong: current depends on resistance. (d) is wrong: the circuit is still complete."
      },
      {
        "module": 2,
        "q": "Which of these currents is the largest?",
        "choices": [
          "250 mA",
          "0.05 A",
          "50 mA",
          "0.5 A"
        ],
        "answer": 3,
        "explanation": "Correct: (d). Convert everything to amps: 250 mA = 0.25 A, 0.05 A = 50 mA, 50 mA = 0.05 A, and 0.5 A = 500 mA. The largest is 0.5 A. (a) 250 mA is only 0.25 A. (b) 0.05 A is ten times smaller than 0.5 A. (c) 50 mA is 0.05 A."
      },
      {
        "module": 3,
        "q": "A 24 V supply is connected to an 8 Ω resistor. What current flows?",
        "choices": [
          "0.33 A",
          "3 A",
          "32 A",
          "192 A"
        ],
        "answer": 1,
        "explanation": "Correct: (b). I = V ÷ R = 24 ÷ 8 = 3 A. (a) 0.33 A is 8 ÷ 24 — upside down. (c) 32 A is 24 + 8. (d) 192 A is 24 × 8 — multiplication instead of division."
      },
      {
        "module": 3,
        "q": "A current of 0.25 A flows through a 40 Ω resistor. What is the voltage across it?",
        "choices": [
          "10 V",
          "160 V",
          "0.00625 V",
          "65 V"
        ],
        "answer": 0,
        "explanation": "Correct: (a). V = I × R = 0.25 × 40 = 10 V. (b) 160 V is 40 ÷ 0.25. (c) 0.00625 V is 0.25 ÷ 40. (d) 65 V is 25 + 40 — mixing units and adding."
      },
      {
        "module": 3,
        "q": "A 12 V battery drives 0.4 A through a motor. What is the motor's resistance?",
        "choices": [
          "4.8 Ω",
          "30 Ω",
          "12.4 Ω",
          "0.033 Ω"
        ],
        "answer": 1,
        "explanation": "Correct: (b). R = V ÷ I = 12 ÷ 0.4 = 30 Ω. (a) 4.8 Ω is 12 × 0.4 — multiplication. (c) 12.4 Ω adds the numbers. (d) 0.033 Ω is 0.4 ÷ 12 — upside down."
      },
      {
        "module": 3,
        "q": "A resistor carries 5 mA and the voltage across it is 11 V. What is its resistance?",
        "choices": [
          "55 Ω",
          "2,200 Ω",
          "0.45 Ω",
          "16 Ω"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Convert 5 mA to 0.005 A, then R = 11 ÷ 0.005 = 2,200 Ω. (a) 55 Ω is 11 × 5 — using milliamps unconverted. (c) 0.45 Ω is 5 ÷ 11. (d) 16 Ω adds the numbers."
      },
      {
        "module": 4,
        "q": "Resistors of 5 Ω, 15 Ω, and 20 Ω are in series across 12 V. What is the current?",
        "choices": [
          "0.3 A",
          "0.6 A",
          "1.2 A",
          "2.4 A"
        ],
        "answer": 0,
        "explanation": "Correct: (a). R(total) = 40 Ω, so I = 12 ÷ 40 = 0.3 A. (b) 0.6 A is 12 ÷ 20 — using one resistor. (c) 1.2 A is 12 ÷ 10. (d) 2.4 A is 12 ÷ 5."
      },
      {
        "module": 4,
        "q": "In that series circuit, what is the voltage drop across the 15 Ω resistor?",
        "choices": [
          "1.5 V",
          "4.5 V",
          "6 V",
          "12 V"
        ],
        "answer": 1,
        "explanation": "Correct: (b). V = I × R = 0.3 × 15 = 4.5 V. (a) 1.5 V is the drop across the 5 Ω resistor. (c) 6 V is the drop across the 20 Ω resistor. (d) 12 V is the whole battery voltage."
      },
      {
        "module": 4,
        "q": "A series string of three bulbs goes completely dark when one bulb is removed. Why?",
        "choices": [
          "The battery died at the same moment",
          "Removing one bulb breaks the only path, so no current flows anywhere",
          "The other bulbs used up the charge",
          "The voltage doubled and burned them out"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Series means one path; a break anywhere stops all current. (a) is a coincidence, not the cause. (c) is wrong: charge is not used up. (d) is wrong: the voltage does not double."
      },
      {
        "module": 4,
        "q": "In a series circuit, which resistor dissipates the most power?",
        "choices": [
          "The smallest one",
          "The largest one",
          "The one nearest the battery",
          "They all dissipate the same"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Power is I² × R with the same I everywhere, so the largest R dissipates the most. (a) is backwards. (c) is wrong: position does not matter. (d) is wrong: power depends on R."
      },
      {
        "module": 5,
        "q": "Resistors of 4 Ω and 12 Ω are in parallel across 24 V. What is the total resistance?",
        "choices": [
          "16 Ω",
          "8 Ω",
          "3 Ω",
          "48 Ω"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 1/R = 1/4 + 1/12 = 4/12 = 1/3, so R = 3 Ω. (a) 16 Ω is the series total. (b) 8 Ω is the average. (d) 48 Ω is 4 × 12."
      },
      {
        "module": 5,
        "q": "In that parallel circuit, what is the current in the 4 Ω branch?",
        "choices": [
          "2 A",
          "6 A",
          "8 A",
          "0.5 A"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Every branch gets the full 24 V, so I = 24 ÷ 4 = 6 A. (a) 2 A is the 12 Ω branch (24 ÷ 12). (c) 8 A is the total current (6 + 2). (d) 0.5 A is 12 ÷ 24 — the wrong numbers."
      },
      {
        "module": 5,
        "q": "Three resistors in parallel are 5 Ω, 10 Ω, and 30 Ω. What is the total resistance?",
        "choices": [
          "45 Ω",
          "3 Ω",
          "5 Ω",
          "15 Ω"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 1/R = 1/5 + 1/10 + 1/30 = 10/30 = 1/3, so R = 3 Ω. (a) 45 Ω is the series total. (c) 5 Ω is the smallest branch — the total must be smaller than that. (d) 15 Ω is the average."
      },
      {
        "module": 5,
        "q": "Why is a house wired in parallel rather than in series?",
        "choices": [
          "Parallel uses less wire",
          "In parallel every socket gets the full supply voltage and one appliance failing does not stop the others",
          "Series circuits are illegal",
          "Parallel circuits use less power"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Parallel gives every branch full voltage and independence. (a) is wrong: parallel generally uses more wire. (c) is wrong: series is not illegal, just unsuitable here. (d) is wrong: power depends on the loads, not the wiring style."
      },
      {
        "module": 6,
        "q": "A 24 V battery feeds a 6 Ω resistor in series with a parallel pair of 8 Ω and 24 Ω. What is the total resistance?",
        "choices": [
          "38 Ω",
          "12 Ω",
          "6 Ω",
          "3 Ω"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The pair is 8 || 24 = 6 Ω, and 6 + 6 = 12 Ω in series. (a) 38 Ω adds all three. (c) 6 Ω is only the pair. (d) 3 Ω is 24 ÷ 8 — not a resistance calculation."
      },
      {
        "module": 6,
        "q": "In that circuit, what is the voltage across the parallel pair?",
        "choices": [
          "24 V",
          "12 V",
          "6 V",
          "2 V"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Total current is 2 A, so the series 6 Ω drops 12 V, leaving 12 V across the pair. (a) 24 V is the whole battery. (c) 6 V is the series resistance value, not a voltage. (d) 2 V is the current, not a voltage."
      },
      {
        "module": 6,
        "q": "A voltage divider has R1 = 2 kΩ, R2 = 6 kΩ, and a 16 V supply. What is the output voltage across R2?",
        "choices": [
          "4 V",
          "8 V",
          "12 V",
          "16 V"
        ],
        "answer": 2,
        "explanation": "Correct: (c). V2 = 16 × 6 ÷ (2 + 6) = 12 V. (a) 4 V is the voltage across R1. (b) 8 V is half the supply — true only for equal resistors. (d) 16 V is the whole supply."
      },
      {
        "module": 6,
        "q": "A divider gives 6 V out with nothing connected. A load is connected across the output and the voltage falls. What happened?",
        "choices": [
          "The battery went flat",
          "The load in parallel with the lower resistor lowered its effective resistance — loading",
          "The resistors changed value",
          "The supply voltage doubled"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Loading: the load sits in parallel with R2 and drags the output down. (a) is wrong: the battery is unchanged. (c) is wrong: resistors do not change value here. (d) is wrong: the supply is fixed at its voltage."
      },
      {
        "module": 6,
        "q": "Two resistors are drawn one above the other in a diagram. How do you tell whether they are in parallel?",
        "choices": [
          "They must be in parallel because of how they are drawn",
          "Trace the wires: they are in parallel only if both ends connect to the same two points",
          "They are in parallel only if they have the same value",
          "They are in parallel only if the battery is between them"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Parallel is about connections, not the drawing's shape. (a) is wrong: the shape of the drawing does not decide it. (c) is wrong: values do not matter. (d) is wrong: the battery's position is irrelevant."
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
        "q": "A metal rod is wrapped in rubber. Which part is the conductor and which is the insulator?",
        "choices": [
          "The rod is the insulator and the rubber is the conductor",
          "The rod is the conductor and the rubber is the insulator",
          "Both are conductors",
          "Both are insulators"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Metal conducts; rubber blocks current, which is why it is used as insulation. (a) is backwards. (c) is wrong: rubber is an insulator. (d) is wrong: metal is a conductor."
      },
      {
        "module": 1,
        "q": "A circuit has a battery and a bulb, but the bulb is dark and the wires are intact. The switch is closed. What else could be wrong?",
        "choices": [
          "The battery is fitted backwards",
          "The bulb's filament is broken, making an open circuit",
          "The wires are too short",
          "The battery is too new"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A broken filament is an open in the loop, so no current flows. (a) is wrong: a backwards battery still makes a complete circuit (the bulb would light, though other parts might not like it). (c) is wrong: wire length does not stop a circuit. (d) is nonsense."
      },
      {
        "module": 2,
        "q": "How many amps are in 750 mA?",
        "choices": [
          "750 A",
          "7.5 A",
          "0.75 A",
          "0.075 A"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 750 ÷ 1,000 = 0.75 A. (a) is the number without converting. (b) is 750 ÷ 100. (d) is 750 ÷ 10,000."
      },
      {
        "module": 2,
        "q": "A student says “this battery has 2 amps in it.” What is wrong with that sentence?",
        "choices": [
          "Nothing — batteries are rated in amps",
          "A battery is rated in volts (its push); the current depends on the circuit connected to it",
          "Batteries are rated in ohms",
          "Amps are too small a unit for batteries"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Voltage is the battery's property; current is set by the circuit (I = V ÷ R). (a) is wrong: amps describe flow, not what a battery “has”. (c) is wrong: ohms measure resistance. (d) is wrong: amps are the right unit for current."
      },
      {
        "module": 3,
        "q": "A 9 V battery is connected to a resistor and 0.3 A flows. What is the resistance?",
        "choices": [
          "2.7 Ω",
          "30 Ω",
          "9.3 Ω",
          "0.033 Ω"
        ],
        "answer": 1,
        "explanation": "Correct: (b). R = V ÷ I = 9 ÷ 0.3 = 30 Ω. (a) 2.7 Ω is 9 × 0.3. (c) 9.3 Ω adds the numbers. (d) 0.033 Ω is 0.3 ÷ 9 — upside down."
      },
      {
        "module": 3,
        "q": "Voltage is tripled and resistance is tripled at the same time. What happens to the current?",
        "choices": [
          "It triples",
          "It stays the same",
          "It drops to one third",
          "It increases nine times"
        ],
        "answer": 1,
        "explanation": "Correct: (b). I = V ÷ R: tripling both top and bottom leaves the ratio unchanged. (a) counts only the voltage change. (c) counts only the resistance change. (d) multiplies the two changes."
      },
      {
        "module": 4,
        "q": "A 24 V supply feeds 8 Ω, 12 Ω, and 20 Ω in series. What is the voltage drop across the 12 Ω resistor?",
        "choices": [
          "4.8 V",
          "7.2 V",
          "12 V",
          "24 V"
        ],
        "answer": 1,
        "explanation": "Correct: (b). R(total) = 40 Ω, I = 0.6 A, drop = 0.6 × 12 = 7.2 V. (a) 4.8 V is the 8 Ω drop. (c) 12 V is the 20 Ω drop. (d) 24 V is the whole supply."
      },
      {
        "module": 4,
        "q": "Two bulbs in series across 12 V: one is 6 Ω and the other is 18 Ω. Which is brighter?",
        "choices": [
          "The 6 Ω bulb, because it has less resistance",
          "The 18 Ω bulb, because it takes more voltage and more power",
          "They are equally bright",
          "Neither — series bulbs never light"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Same current through both; P = I² × R, so the larger R dissipates more power. (a) is the parallel rule, not series. (c) is wrong: the powers differ (1.5 W vs 4.5 W). (d) is wrong: series bulbs light normally."
      },
      {
        "module": 5,
        "q": "A 120 V household circuit has a 1,200 W heater and a 60 W lamp in parallel. What is the total current?",
        "choices": [
          "10 A",
          "10.5 A",
          "0.5 A",
          "20 A"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Heater: 1,200 ÷ 120 = 10 A; lamp: 60 ÷ 120 = 0.5 A; total 10.5 A. (a) forgets the lamp. (c) is only the lamp. (d) is 1,200 ÷ 60 — the wrong numbers."
      },
      {
        "module": 5,
        "q": "Four equal 40 Ω resistors in parallel give a total resistance of…",
        "choices": [
          "160 Ω",
          "40 Ω",
          "20 Ω",
          "10 Ω"
        ],
        "answer": 3,
        "explanation": "Correct: (d). Equal resistors: R ÷ n = 40 ÷ 4 = 10 Ω. (a) 160 Ω is the series total. (b) 40 Ω is one resistor. (c) 20 Ω is the value for two resistors."
      },
      {
        "module": 6,
        "q": "A 20 V supply feeds a 10 Ω resistor in series with a parallel pair of 20 Ω and 20 Ω. What is the total current?",
        "choices": [
          "0.5 A",
          "1 A",
          "2 A",
          "4 A"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The pair is 10 Ω, total is 20 Ω, so I = 20 ÷ 20 = 1 A. (a) 0.5 A is one branch current. (c) 2 A is 20 ÷ 10 — using only the pair. (d) 4 A is 20 ÷ 5 — the wrong resistance."
      },
      {
        "module": 6,
        "q": "Design a divider from a 9 V battery to give 3 V out with a total resistance of 9 kΩ. What are R1 and R2?",
        "choices": [
          "R1 = 3 kΩ, R2 = 6 kΩ",
          "R1 = 6 kΩ, R2 = 3 kΩ",
          "R1 = 9 kΩ, R2 = 9 kΩ",
          "R1 = 1 kΩ, R2 = 8 kΩ"
        ],
        "answer": 1,
        "explanation": "Correct: (b). V2 = 9 × 3 ÷ 9 = 3 V ✓. (a) gives 9 × 6 ÷ 9 = 6 V. (c) gives 4.5 V. (d) gives 9 × 8 ÷ 9 = 8 V."
      },
      {
        "module": 7,
        "q": "At a node, 8 A enters. Two branches carry 3 A and 2 A out. What does the third branch carry?",
        "choices": [
          "13 A out",
          "3 A out",
          "5 A in",
          "3 A in"
        ],
        "answer": 1,
        "explanation": "Correct: (b). KCL: 8 = 3 + 2 + I3, so I3 = 3 A out. (a) adds everything. (c) is the wrong value and direction. (d) is the right size but the wrong direction."
      },
      {
        "module": 7,
        "q": "A loop has a 24 V battery and drops of 4.8 V, 7.2 V, and 12 V. Does KVL hold?",
        "choices": [
          "Yes: the drops add to 24 V",
          "No: the drops add to 19.2 V",
          "No: the drops add to 28.8 V",
          "Cannot tell without the current"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 4.8 + 7.2 + 12 = 24 V — rises equal drops, so KVL holds. (b) misses the 4.8 V drop. (c) adds an extra 4.8 V. (d) is wrong: KVL needs only the voltages."
      },
      {
        "module": 7,
        "q": "A student walks a loop and gets +9 V, −4 V, −6 V, a sum of −1 V. What is the right conclusion?",
        "choices": [
          "KVL is wrong",
          "A measurement or a sign is wrong, or a component was missed — investigate",
          "The battery is dead",
          "The current is −1 A"
        ],
        "answer": 1,
        "explanation": "Correct: (b). KVL must sum to zero; a −1 V sum means an error or a missing volt. (a) is wrong: KVL is a conservation law. (c) is wrong: the battery reading is part of the sum. (d) confuses volts with amps."
      },
      {
        "module": 8,
        "q": "A 12 V battery supplies 0.2 A to a circuit. How much power does it deliver?",
        "choices": [
          "60 W",
          "2.4 W",
          "12.2 W",
          "0.017 W"
        ],
        "answer": 1,
        "explanation": "Correct: (b). P = V × I = 12 × 0.2 = 2.4 W. (a) 60 W is 12 ÷ 0.2. (c) 12.2 W adds the numbers. (d) 0.017 W is 0.2 ÷ 12."
      },
      {
        "module": 8,
        "q": "A wire with 0.5 Ω resistance carries 10 A. How much power is lost as heat?",
        "choices": [
          "5 W",
          "50 W",
          "20 W",
          "200 W"
        ],
        "answer": 1,
        "explanation": "Correct: (b). P = I² × R = 100 × 0.5 = 50 W. (a) 5 W is 10 × 0.5 — forgetting to square the current. (c) 20 W is 10 ÷ 0.5. (d) 200 W is the loss at 20 A, not 10 A."
      },
      {
        "module": 8,
        "q": "A 60 W bulb runs for 10 hours. How much energy does it use, in kWh?",
        "choices": [
          "600 kWh",
          "0.6 kWh",
          "6 kWh",
          "0.06 kWh"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 60 × 10 = 600 Wh = 0.6 kWh. (a) forgets the watts-to-kilowatts conversion. (c) is 60 × 10 ÷ 100. (d) is ten times too small."
      },
      {
        "module": 8,
        "q": "Why is a 5 W resistor a bad choice for a job that dissipates 7.2 W?",
        "choices": [
          "It will change the circuit's voltage",
          "It will overheat and fail — use a higher rating",
          "It will draw less current",
          "It will make the circuit more efficient"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A resistor must be rated above the power it dissipates, with margin. (a) is wrong: the rating does not set the voltage. (c) is wrong: the current is set by V and R. (d) is wrong: an overheating resistor is less reliable, not more efficient."
      },
      {
        "module": 9,
        "q": "To measure the current through a lamp, you should connect the meter…",
        "choices": [
          "in parallel across the lamp",
          "in series, so the current flows through the meter",
          "across the battery terminals",
          "with the power off"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Current is measured in series, breaking the wire. (a) is how you measure voltage. (c) is dangerous on the amps range — it would blow the fuse. (d) is wrong: current only flows with the power on."
      },
      {
        "module": 9,
        "q": "A meter set to resistance reads a sensible value on a resistor, but the circuit is still powered. What is wrong?",
        "choices": [
          "Nothing — resistance can be measured live",
          "The reading is meaningless because the circuit's voltage corrupts the meter's own test signal",
          "The meter is broken",
          "The resistor is the wrong value"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Resistance must be measured with the power off. (a) is dangerous and wrong. (c) is not established: the meter may be fine. (d) is not the issue — the method is."
      },
      {
        "module": 9,
        "q": "The black lead of a multimeter always goes in which jack?",
        "choices": [
          "10 A",
          "VΩ",
          "COM",
          "It does not matter"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Black always goes in COM. (a) is for the red lead on large currents. (b) is for the red lead on voltage and resistance. (d) is wrong."
      },
      {
        "module": 9,
        "q": "A fuse is suspected blown. Which test finds out fastest?",
        "choices": [
          "Measure the voltage across it while powered",
          "Continuity test with the power off — a beep means it is good",
          "Measure the current through it while powered",
          "Measure its temperature"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Continuity with the power off: beep = good, silence = blown. (a) is a valid voltage check but slower and live. (c) is wrong: no current flows through a blown fuse, and measuring current is riskier. (d) is not a real test."
      },
      {
        "module": 10,
        "q": "A 24 V source feeds 6 Ω in series with 12 Ω. The load connects across the 12 Ω resistor. What is Vth?",
        "choices": [
          "24 V",
          "8 V",
          "16 V",
          "6 V"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Vth = 24 × 12 ÷ (6 + 12) = 16 V. (a) 24 V is the whole source. (b) 8 V is the drop across the 6 Ω resistor. (d) 6 V is the resistance value, not a voltage."
      },
      {
        "module": 10,
        "q": "In that same circuit, what is Rth?",
        "choices": [
          "18 Ω",
          "6 Ω",
          "12 Ω",
          "4 Ω"
        ],
        "answer": 3,
        "explanation": "Correct: (d). Short the source: 6 Ω || 12 Ω = 72 ÷ 18 = 4 Ω. (a) 18 Ω is the series total. (b) and (c) are single resistors."
      },
      {
        "module": 10,
        "q": "With a 12 Ω load on that equivalent (Vth = 16 V, Rth = 4 Ω), what is the load current?",
        "choices": [
          "4 A",
          "1 A",
          "1.33 A",
          "0.5 A"
        ],
        "answer": 1,
        "explanation": "Correct: (b). I = 16 ÷ (4 + 12) = 1 A. (a) 4 A is 16 ÷ 4 — forgetting the load. (c) 1.33 A is 16 ÷ 12 — forgetting Rth. (d) 0.5 A is 8 ÷ 16 — the wrong numbers."
      },
      {
        "module": 10,
        "q": "What load resistance gets maximum power from a source with Rth = 4 Ω?",
        "choices": [
          "0 Ω",
          "2 Ω",
          "4 Ω",
          "8 Ω"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Maximum power when RL = Rth = 4 Ω. (a) 0 Ω takes no voltage. (b) 2 Ω is less than Rth. (d) 8 Ω takes less current."
      },
      {
        "module": 11,
        "q": "Which step comes FIRST in lockout/tagout?",
        "choices": [
          "Apply your lock",
          "Verify the circuit is dead",
          "Identify every energy source",
          "Release stored energy"
        ],
        "answer": 2,
        "explanation": "Correct: (c). You must identify all energy sources before you can isolate them. (a) comes after isolation. (b) comes near the end, after locking. (d) comes after locking, before verifying."
      },
      {
        "module": 11,
        "q": "A switch says OFF, but nobody locked it or tested it. Is it safe to work on?",
        "choices": [
          "Yes — OFF means safe",
          "No — a switch can fail or be mislabelled; only isolation, lock, and your own test make it safe",
          "Yes, if the switch is new",
          "No, because switches never work"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Off is not safe; only the full LOTO procedure plus verification makes it safe. (a) is the dangerous assumption this course warns against. (c) is wrong: even a new switch can be mislabelled. (d) is an overstatement — switches usually work, but “usually” is not proof."
      },
      {
        "module": 11,
        "q": "What does a GFCI do?",
        "choices": [
          "Limits the voltage to 120 V",
          "Trips when outgoing and returning currents differ by about 5 mA, meaning current is leaking",
          "Trips on overload like a breaker",
          "Protects against lightning"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A GFCI watches for a current difference — a leak, possibly through a person. (a) is wrong: it does not regulate voltage. (c) describes a breaker. (d) is wrong: surge protection is a different device."
      },
      {
        "module": 11,
        "q": "Why is wet skin more dangerous than dry skin at the same voltage?",
        "choices": [
          "Wet skin has higher resistance",
          "Wet skin has much lower resistance, so far more current flows",
          "Wet skin insulates better",
          "Water increases the voltage"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Wet skin can be ~1,000 Ω versus ~100,000 Ω dry, so at 120 V the current jumps from ~1.2 mA to ~120 mA. (a) is backwards. (c) is wrong: water makes skin conduct better. (d) is wrong: water does not change the voltage."
      },
      {
        "module": 12,
        "q": "A 50 ft run of 14 AWG (2.58 Ω per 1,000 ft) carries 15 A on 120 V. What is the percentage voltage drop?",
        "choices": [
          "1.6%",
          "3.2%",
          "6.5%",
          "0.26%"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Loop is 100 ft, R = 0.258 Ω, drop = 3.87 V, which is 3.87 ÷ 120 ≈ 3.2% — just over the 3% guideline. (a) 1.6% uses only the one-way length. (c) 6.5% doubles the answer. (d) 0.26% is the resistance as a percentage, not the drop."
      },
      {
        "module": 12,
        "q": "A 15 A breaker keeps tripping when a 10 A heater and an 8 A dryer run together. What is the right fix?",
        "choices": [
          "Fit a 20 A breaker",
          "Run one appliance on a different circuit",
          "Reset the breaker until it holds",
          "Remove the breaker"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Together they draw 18 A — an overload — and the 14 AWG wire is only rated for 15 A. (a) is dangerous: the wire would overheat. (c) is dangerous: resetting into an overload can start a fire. (d) is extremely dangerous."
      },
      {
        "module": 12,
        "q": "There is full supply voltage across a lamp but no current. What is the fault?",
        "choices": [
          "A short circuit",
          "An open fault in the lamp",
          "A ground fault",
          "An overload"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Voltage present with no current means the path is broken — an open. (a) would draw a huge current and trip the breaker. (c) would trip a GFCI. (d) would trip the breaker on excess current."
      },
      {
        "module": 12,
        "q": "A technician arrives at a dead lighting circuit. The breaker is on and the lamp is known to be good. Where should the investigation begin, and why?",
        "choices": [
          "At the lamp socket, by replacing the lamp again",
          "At the supply: check the voltage at the source before anything else",
          "By measuring the resistance of the wiring",
          "By resetting the breaker and leaving"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Start at the source: if the supply is missing, the fault is upstream. (a) wastes time — the lamp is known good. (c) comes later, after the supply is confirmed. (d) is unsafe: reset a breaker only after finding why it tripped."
      },
      {
        "module": 12,
        "q": "Which wire is thicker: 12 AWG or 14 AWG?",
        "choices": [
          "14 AWG",
          "12 AWG",
          "They are the same",
          "It depends on the length"
        ],
        "answer": 1,
        "explanation": "Correct: (b). AWG runs backwards: 12 AWG is thicker than 14 AWG. (a) is backwards. (c) is wrong. (d) is wrong: gauge is about diameter, not length."
      },
      {
        "module": 3,
        "q": "A student calculates V = I ÷ R for a 3 A, 10 Ω resistor and gets 0.3 V. What is the error?",
        "choices": [
          "The numbers are wrong",
          "The formula is wrong: V = I × R, so the answer is 30 V",
          "The resistor is the wrong value",
          "The current should be in milliamps"
        ],
        "answer": 1,
        "explanation": "Correct: (b). V = I × R = 3 × 10 = 30 V; dividing gives the wrong answer. (a) is wrong: 3 and 10 are correct inputs. (c) is wrong: the resistor value is given. (d) is wrong: 3 A is already in amps."
      },
      {
        "module": 5,
        "q": "Two resistors in parallel are 20 Ω and 20 Ω. A third 20 Ω resistor is added in parallel. What happens to the total resistance?",
        "choices": [
          "It stays at 10 Ω",
          "It rises to 30 Ω",
          "It falls to about 6.67 Ω",
          "It becomes 60 Ω"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Three equal 20 Ω resistors: 20 ÷ 3 ≈ 6.67 Ω. Adding a parallel branch always lowers the total. (a) is the two-resistor value. (b) and (d) are series thinking."
      },
      {
        "module": 6,
        "q": "A divider with R1 = 10 kΩ and R2 = 10 kΩ from 12 V gives 6 V out. A 10 kΩ load is connected across the output. What is the new output voltage?",
        "choices": [
          "6 V — it does not change",
          "4 V",
          "3 V",
          "12 V"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The load in parallel with R2 gives 5 kΩ, so V(out) = 12 × 5 ÷ 15 = 4 V. (a) ignores loading. (c) 3 V would need a different ratio. (d) is the whole supply."
      },
      {
        "module": 9,
        "q": "A meter shows “OL” on the resistance range. What does it mean?",
        "choices": [
          "The resistance is zero",
          "The resistance is higher than the range can show — possibly an open circuit",
          "The meter is switched off",
          "The leads are shorted"
        ],
        "answer": 1,
        "explanation": "Correct: (b). OL means overload — the value exceeds the range, often an open. (a) would show 0. (c) would show nothing. (d) would read near 0 Ω."
      }
    ]
  }
};
