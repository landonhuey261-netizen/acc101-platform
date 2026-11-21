// egr110 — Midterm and Final exams.
// All questions are original to these exams (same topics as module quizzes, fresh scenarios and wording).
// Every explanation covers why the correct answer is right AND why each wrong choice is wrong.
module.exports = {
  "midterm": {
    "title": "Midterm Exam",
    "description": "Covers Modules 1–6: semiconductors, diodes, BJTs, MOSFETs, and op-amps. 25 questions, 75 minutes.",
    "minutes": 75,
    "coverage": "Modules 1–6",
    "questions": [
      {
        "q": "A silicon crystal is doped with boron, which has three outer electrons. What type of material results, and what are its majority carriers?",
        "choices": [
          "N-type, with electrons as majority carriers",
          "P-type, with holes as majority carriers",
          "An insulator, with no carriers at all",
          "Pure silicon, unchanged by the doping"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Boron has three outer electrons, so it leaves a hole behind — p-type material with holes as majority carriers. (a) describes phosphorus doping. (c) is wrong: doping increases conductivity, it does not make an insulator. (d) is wrong: doping changes the crystal's carriers.",
        "module": 1
      },
      {
        "q": "A student applies 0.3 V forward to a silicon diode and measures almost no current. What is the most likely reason?",
        "choices": [
          "The diode is broken",
          "0.3 V is below the diode's turn-on voltage of about 0.7 V",
          "The diode is in reverse bias",
          "The current is too large for the meter to read"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A silicon diode stays effectively off below about 0.7 V forward, so 0.3 V gives almost no current. (a) is unlikely: the behaviour matches a healthy diode. (c) is wrong: the voltage is applied forward. (d) is wrong: the current is nearly zero, not too large.",
        "module": 1
      },
      {
        "q": "Which doping atom would you add to silicon to make p-type material?",
        "choices": [
          "Phosphorus, because it has five outer electrons",
          "Boron, because it has three outer electrons",
          "Silicon, because it is the base material",
          "Copper, because it is a good conductor"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Boron has three outer electrons, so it creates holes — p-type material. (a) describes n-type doping with phosphorus. (c) is wrong: adding silicon to silicon changes nothing. (d) is wrong: copper is not a dopant for silicon.",
        "module": 1
      },
      {
        "q": "A PN junction is reverse biased with 5 V. Which statement is true?",
        "choices": [
          "The depletion region widens and only a tiny leakage current flows",
          "The depletion region disappears and a large current flows",
          "The junction becomes a short circuit",
          "The built-in voltage rises to 5 V"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Reverse bias pulls carriers away, widening the depletion region so only a tiny leakage current flows. (b) describes forward bias. (c) is wrong: a reverse-biased junction is nearly an open circuit. (d) is wrong: the built-in voltage is a property of the junction, about 0.7 V, not the applied voltage.",
        "module": 1
      },
      {
        "q": "A 12 V supply powers a green LED with a forward voltage of 3 V at 20 mA. What series resistor is needed?",
        "choices": [
          "150 Ω",
          "450 Ω",
          "600 Ω",
          "900 Ω"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Resistor voltage is 12 − 3 = 9 V, and 9 ÷ 0.020 = 450 Ω. (a) 150 Ω would give 60 mA, far too much. (c) 600 Ω would give only 15 mA. (d) 900 Ω would give only 10 mA.",
        "module": 2
      },
      {
        "q": "A full-wave bridge rectifier is fed with AC of 20 V peak. What is the average DC output?",
        "choices": [
          "6.37 V",
          "12.73 V",
          "20 V",
          "3.18 V"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Full-wave average is 2 × Vpeak ÷ π = 40 ÷ 3.1416 ≈ 12.73 V. (a) 6.37 V is the full-wave average for a 10 V peak. (c) 20 V is the peak, not the average. (d) 3.18 V is the half-wave average for a 10 V peak.",
        "module": 2
      },
      {
        "q": "A Zener diode rated 3.3 V is used as a regulator with a 9 V supply and a 330 Ω series resistor. What is the Zener current?",
        "choices": [
          "27.3 mA",
          "17.3 mA",
          "10.0 mA",
          "3.3 mA"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The resistor drops 9 − 3.3 = 5.7 V, and 5.7 ÷ 330 = 0.0173 A, about 17.3 mA. (a) 27.3 mA comes from using the full 9 V across the resistor. (c) 10 mA is a guess with no working. (d) 3.3 mA mistakes the Zener voltage for a current.",
        "module": 2
      },
      {
        "q": "A diode reads OL (open circuit) on diode-test in both directions. What does that mean?",
        "choices": [
          "The diode is shorted",
          "The diode is open-circuited — it has failed open",
          "The diode is working normally",
          "The meter is set to the wrong range"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A good diode reads about 0.5–0.8 V forward and OL in reverse; OL both ways means it never conducts — it has failed open. (a) would read near 0 V both ways. (c) is wrong: a working diode conducts forward. (d) is wrong: the test is valid on the diode-test setting.",
        "module": 2
      },
      {
        "q": "A student connects a red LED (forward voltage 2 V) directly across a 9 V battery with no resistor. What is the most likely outcome?",
        "choices": [
          "The LED lights normally and stays lit",
          "The LED draws far too much current and burns out",
          "The LED lights dimly at 2 V",
          "Nothing happens — the LED blocks the current"
        ],
        "answer": 1,
        "explanation": "Correct: (b). With no resistor to limit it, the LED takes a destructive current and burns out in seconds. (a) is wrong: no resistor means no current limit. (c) is wrong: the LED does not limit its own current. (d) is wrong: the LED is forward biased, so it conducts.",
        "module": 2
      },
      {
        "q": "An NPN transistor has β = 200 and a base current of 50 µA. What is the collector current in the active region?",
        "choices": [
          "10 mA",
          "1 mA",
          "100 mA",
          "0.25 mA"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Ic = β × Ib = 200 × 50 µA = 10,000 µA = 10 mA. (b) 1 mA is ten times too small. (c) 100 mA would need β = 2,000. (d) 0.25 mA is Ib ÷ 200, the wrong operation.",
        "module": 3
      },
      {
        "q": "A transistor switch must drive a 200 mA load, and the transistor has β = 50. What minimum base current is needed, and what would you design for to guarantee saturation?",
        "choices": [
          "Minimum 4 mA; design for about 20 mA",
          "Minimum 10 mA; design for about 10 mA",
          "Minimum 0.4 mA; design for about 2 mA",
          "Minimum 200 mA; design for about 200 mA"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Minimum Ib = Ic ÷ β = 200 ÷ 50 = 4 mA, and driving about five times that (20 mA) guarantees saturation. (b) uses the wrong ratio. (c) is ten times too small. (d) mistakes the load current for the base current.",
        "module": 3
      },
      {
        "q": "A BJT has Vce = 0.1 V and Ic = 150 mA. Which region is it in?",
        "choices": [
          "Cutoff",
          "Active",
          "Saturation",
          "Breakdown"
        ],
        "answer": 2,
        "explanation": "Correct: (c). A collector-emitter voltage near 0.2 V with substantial current means the transistor is fully on — saturation. (a) Cutoff would have Ic near zero. (b) Active would have Vce of several volts. (d) Breakdown is a fault, not a normal region.",
        "module": 3
      },
      {
        "q": "In a PNP transistor, the arrow on the emitter points…",
        "choices": [
          "Outward, away from the base",
          "Toward the base",
          "Into the collector",
          "There is no arrow on a PNP symbol"
        ],
        "answer": 1,
        "explanation": "Correct: (b). On a PNP the emitter arrow points inward, toward the base. (a) describes an NPN transistor. (c) is wrong: the arrow is on the emitter, not the collector. (d) is wrong: the emitter arrow is on every BJT symbol.",
        "module": 3
      },
      {
        "q": "A MOSFET has Rds(on) = 0.1 Ω and carries 3 A when on. How much power does it waste as heat?",
        "choices": [
          "0.3 W",
          "0.9 W",
          "3.0 W",
          "9.0 W"
        ],
        "answer": 1,
        "explanation": "Correct: (b). P = I² × R = 9 × 0.1 = 0.9 W. (a) 0.3 W comes from using I × R instead of I² × R. (c) 3.0 W would need Rds(on) of about 0.33 Ω. (d) 9.0 W is I² without multiplying by R.",
        "module": 4
      },
      {
        "q": "An N-channel MOSFET switches a 12 V relay coil from a microcontroller. Where does the MOSFET sit, and what protects it from the relay's turn-off spike?",
        "choices": [
          "High side, protected by a pull-down resistor",
          "Low side between relay and ground, protected by a flyback diode across the coil",
          "In series with the microcontroller pin, protected by a capacitor",
          "Across the supply, protected by a fuse"
        ],
        "answer": 1,
        "explanation": "Correct: (b). An N-channel MOSFET is a low-side switch (source to ground), and a flyback diode across the coil absorbs the turn-off spike. (a) is wrong: N-channel devices switch the low side, and a pull-down does not absorb spikes. (c) is wrong: the MOSFET is in the load path, not in series with the pin. (d) is wrong: a fuse protects against overcurrent, not voltage spikes.",
        "module": 4
      },
      {
        "q": "A logic-level MOSFET is needed when…",
        "choices": [
          "The load current is very small",
          "The gate drive is only 3.3 V or 5 V, as from a microcontroller",
          "The supply voltage is very high",
          "The load is a resistor"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A logic-level MOSFET is designed to turn fully on with a 3.3 V or 5 V gate drive; a standard MOSFET needs about 10 V. (a) is wrong: small loads do not need a logic-level device. (c) is wrong: high supply voltage needs a high voltage rating, not a logic-level gate. (d) is wrong: the load type does not decide the gate type.",
        "module": 4
      },
      {
        "q": "A MOSFET gate is connected to a microcontroller pin through a 47 Ω resistor, with a 10 kΩ resistor from the gate to ground. What is the 10 kΩ resistor's job?",
        "choices": [
          "It limits the load current",
          "It is a pull-down that keeps the MOSFET off while the microcontroller is starting up",
          "It sets the MOSFET's Rds(on)",
          "It charges the gate faster"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The pull-down holds the gate at 0 V so the MOSFET stays off until the pin takes over. (a) is wrong: the load current is set by the load and supply. (c) is wrong: Rds(on) is a property of the MOSFET. (d) is wrong: a pull-down slows the gate slightly.",
        "module": 4
      },
      {
        "q": "A non-inverting amplifier has Rf = 47 kΩ and R1 = 4.7 kΩ. What is its gain?",
        "choices": [
          "10",
          "11",
          "47",
          "5"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Gain = 1 + Rf ÷ R1 = 1 + 47 ÷ 4.7 = 1 + 10 = 11. (a) 10 forgets the 1 + in the formula. (c) 47 is just Rf. (d) 5 has no basis in the resistor values.",
        "module": 5
      },
      {
        "q": "An inverting amplifier has Rf = 22 kΩ and Rin = 2.2 kΩ, with an input of 0.5 V. What is the output?",
        "choices": [
          "5.0 V",
          "−5.0 V",
          "0.5 V",
          "−0.5 V"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Gain = −22 ÷ 2.2 = −10, so Vout = −10 × 0.5 = −5.0 V. (a) forgets the minus sign. (c) and (d) are the input, not the amplified output.",
        "module": 5
      },
      {
        "q": "An op-amp circuit's output is stuck at +11 V with ±12 V supplies even though the input is 0 V. What is the most likely fault?",
        "choices": [
          "The feedback resistor is open, so there is no negative feedback and the op-amp saturates",
          "The input resistor is too large",
          "The supply voltage is too low",
          "The gain is set too low"
        ],
        "answer": 0,
        "explanation": "Correct: (a). With no negative feedback the op-amp's huge open-loop gain drives the output to a rail for any tiny offset. (b) is wrong: an input resistor cannot cause saturation at zero input. (c) is wrong: ±12 V supplies are normal. (d) is wrong: too low a gain would give too small an output, not a saturated one.",
        "module": 5
      },
      {
        "q": "In a non-inverting amplifier, why is the input impedance very high?",
        "choices": [
          "Because the input resistor is very large",
          "Because the signal goes straight into the op-amp's + input, which draws almost no current",
          "Because the feedback resistor is very large",
          "Because the gain is very high"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Golden rule 1 says the op-amp inputs draw no current, so the source sees almost no load. (a) is wrong: a non-inverting amplifier has no input resistor. (c) is wrong: the feedback resistor does not set the input impedance. (d) is wrong: gain and input impedance are different properties.",
        "module": 5
      },
      {
        "q": "A summing amplifier has Rf = 10 kΩ and three 10 kΩ input resistors, with inputs of 1 V, 2 V, and 3 V. What is the output?",
        "choices": [
          "6 V",
          "−6 V",
          "2 V",
          "−2 V"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Each weight is 10 ÷ 10 = 1, so Vout = −(1 + 2 + 3) = −6 V. (a) forgets the inversion. (c) and (d) average the inputs instead of summing them.",
        "module": 6
      },
      {
        "q": "A comparator's reference voltage of 2.5 V is on its − input, and the signal on its + input is 3 V. What is the output?",
        "choices": [
          "Low, near the negative rail",
          "High, near the positive rail",
          "2.5 V",
          "0 V"
        ],
        "answer": 1,
        "explanation": "Correct: (b). With V+ above V− the comparator's output goes to the positive rail. (a) is what happens when V+ is below V−. (c) is the reference voltage, not the output. (d) is wrong: a comparator output is high or low, not zero.",
        "module": 6
      },
      {
        "q": "A voltage follower is placed between a pH sensor with a very high output resistance and an ADC. Why?",
        "choices": [
          "To amplify the sensor signal by 100",
          "To buffer the signal: the follower's high input impedance does not load the sensor, and its low output impedance drives the ADC",
          "To convert the signal to AC",
          "To compare the signal with a reference"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A follower has gain 1 but isolates the weak source from the load, so the sensor keeps its full voltage. (a) is wrong: a follower's gain is 1. (c) is wrong: a follower does not convert DC to AC. (d) is a comparator's job.",
        "module": 6
      },
      {
        "q": "A low-pass filter is added to a sensor signal that changes slowly but carries fast electrical noise. What does the filter do?",
        "choices": [
          "It passes the slow signal and attenuates the fast noise",
          "It passes the fast noise and attenuates the slow signal",
          "It amplifies both equally",
          "It converts the signal to a square wave"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A low-pass filter passes low frequencies and attenuates high frequencies, so the slow signal survives and the fast noise is reduced. (b) describes a high-pass filter. (c) describes a flat amplifier. (d) describes a comparator or Schmitt trigger.",
        "module": 6
      }
    ]
  },
  "final": {
    "title": "Final Exam",
    "description": "Covers Modules 1–12: the full electronics and digital systems course. 40 questions, 120 minutes.",
    "minutes": 120,
    "coverage": "Modules 1–12",
    "questions": [
      {
        "q": "A silicon wafer is doped with phosphorus at one atom per million. What is the wafer's overall electrical charge?",
        "choices": [
          "Positive, because phosphorus adds electrons",
          "Negative, because phosphorus adds electrons",
          "Neutral — doping adds carriers but the crystal stays uncharged",
          "Positive, because the extra electrons are balanced by holes"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Doping adds free carriers but the crystal stays electrically neutral — each extra electron is balanced by a positively charged donor atom. (a) and (b) are wrong: the free electrons do not make the wafer charged. (d) is wrong: the balance is with donor atoms, not holes.",
        "module": 1
      },
      {
        "q": "In p-type silicon, which carriers do most of the conducting?",
        "choices": [
          "Electrons",
          "Holes",
          "Protons",
          "Neutrons"
        ],
        "answer": 1,
        "explanation": "Correct: (b). In p-type material the majority carriers are holes, created by boron doping. (a) is the majority carrier in n-type material. (c) and (d) are particles in the atomic nucleus and do not carry current in a semiconductor.",
        "module": 1
      },
      {
        "q": "A diode is forward biased and the applied voltage is raised from 0 V to 1 V. What happens to the depletion region as the voltage passes 0.7 V?",
        "choices": [
          "It widens steadily",
          "It shrinks until carriers can flow freely across the junction",
          "It moves to the other end of the diode",
          "It stays exactly the same"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Forward bias shrinks the depletion region; past about 0.7 V the barrier is low enough for a large current to flow. (a) describes reverse bias. (c) is wrong: the region stays at the junction. (d) is wrong: the region changes with the applied voltage.",
        "module": 1
      },
      {
        "q": "A half-wave rectifier is fed with AC of 5 V peak. What is the average DC output?",
        "choices": [
          "5.00 V",
          "3.18 V",
          "1.59 V",
          "0 V"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Half-wave average is Vpeak ÷ π = 5 ÷ 3.1416 ≈ 1.59 V. (a) is the peak, not the average. (b) is the half-wave average for a 10 V peak. (d) is wrong: the diode passes half the cycle.",
        "module": 2
      },
      {
        "q": "A bridge rectifier's output has a large ripple. Which component is added to reduce it?",
        "choices": [
          "A smaller transformer",
          "A smoothing capacitor across the output",
          "A Zener diode in series",
          "A larger load resistor"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A smoothing capacitor fills in the gaps between pulses, reducing the ripple. (a) is wrong: the transformer sets the voltage, not the ripple. (c) is wrong: a Zener regulates voltage but is not the ripple fix. (d) is wrong: a larger load reduces the current, not the ripple directly.",
        "module": 2
      },
      {
        "q": "In a Zener regulator, the load current increases. What happens to the Zener current, assuming the supply voltage stays the same?",
        "choices": [
          "It increases by the same amount",
          "It decreases, because the total current through the series resistor stays roughly the same",
          "It stays exactly the same",
          "It reverses direction"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The series resistor carries the sum of the load and Zener currents, and that total is roughly fixed by the supply and resistor — so more load current means less Zener current. (a) is backwards. (c) is wrong: the Zener current changes as the load changes. (d) is wrong: the Zener current does not reverse.",
        "module": 2
      },
      {
        "q": "Why would you choose a Schottky diode instead of an ordinary silicon diode?",
        "choices": [
          "Because it has a higher forward voltage drop",
          "Because it has a lower forward drop (about 0.3 V) and switches very fast",
          "Because it blocks more reverse voltage",
          "Because it glows when it conducts"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Schottky diodes drop about 0.3 V and switch fast, which suits high-speed and low-loss circuits. (a) is wrong: the drop is lower, not higher. (c) is wrong: Schottky diodes usually have lower PIV ratings. (d) describes an LED, not a Schottky diode.",
        "module": 2
      },
      {
        "q": "A BJT has β = 80 and a base current of 0.5 mA. What is the collector current in the active region?",
        "choices": [
          "4 mA",
          "40 mA",
          "160 mA",
          "0.4 mA"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Ic = β × Ib = 80 × 0.5 mA = 40 mA. (a) is ten times too small. (c) would need β = 320. (d) is Ib ÷ 1,000, a meaningless operation.",
        "module": 3
      },
      {
        "q": "A transistor in the active region has Ic = 20 mA and β = 100. What is the base current?",
        "choices": [
          "2 mA",
          "0.2 mA",
          "20 mA",
          "0.02 mA"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Ib = Ic ÷ β = 20 ÷ 100 = 0.2 mA. (a) multiplies instead of dividing. (c) mistakes Ic for Ib. (d) is ten times too small.",
        "module": 3
      },
      {
        "q": "Why is a BJT switch driven into saturation rather than left in the active region?",
        "choices": [
          "Because saturation gives a higher gain",
          "Because in saturation Vce is only about 0.2 V, so the transistor wastes little power as heat",
          "Because saturation makes the transistor switch faster",
          "Because the active region cannot carry any current"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A saturated transistor has a tiny voltage across it, so P = V × I is small and the switch stays cool. (a) is wrong: saturation has no current gain — the current is set by the load. (c) is wrong: saturation is actually slower to switch off. (d) is wrong: the active region carries current fine.",
        "module": 3
      },
      {
        "q": "A P-channel MOSFET is used to switch a load from a 12 V supply. Where does it sit in the circuit?",
        "choices": [
          "Low side, between the load and ground",
          "High side, with its source connected to the 12 V supply",
          "In series with the gate drive",
          "Across the load as a diode"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A P-channel MOSFET is a high-side switch: source to the supply, drain to the load. (a) describes an N-channel MOSFET. (c) is wrong: the MOSFET is in the load path. (d) is wrong: a MOSFET is a switch, not a diode.",
        "module": 4
      },
      {
        "q": "A MOSFET has Rds(on) = 0.04 Ω and carries 5 A. How much power does it waste as heat?",
        "choices": [
          "0.2 W",
          "1.0 W",
          "5.0 W",
          "0.04 W"
        ],
        "answer": 1,
        "explanation": "Correct: (b). P = I² × R = 25 × 0.04 = 1.0 W. (a) comes from using I × R instead of I² × R. (c) is the current, not a power. (d) is just the resistance.",
        "module": 4
      },
      {
        "q": "A MOSFET gate is driven directly by a microcontroller pin with no gate resistor. What is the risk?",
        "choices": [
          "The MOSFET will never turn on",
          "The brief charging surge into the gate capacitance can exceed the pin's current rating and damage it",
          "The load will draw too much current",
          "The MOSFET will run backwards"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The gate is a capacitor, and charging it directly can pull a large brief current from the pin. (a) is wrong: the MOSFET will turn on. (c) is wrong: the load current is set by the load. (d) is wrong: MOSFETs do not run backwards.",
        "module": 4
      },
      {
        "q": "A non-inverting amplifier has Rf = 20 kΩ and R1 = 5 kΩ. What is its gain?",
        "choices": [
          "4",
          "5",
          "20",
          "25"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Gain = 1 + 20 ÷ 5 = 1 + 4 = 5. (a) forgets the 1 +. (c) is just Rf. (d) adds Rf and R1, which is not the formula.",
        "module": 5
      },
      {
        "q": "An inverting amplifier has Rf = 20 kΩ and Rin = 5 kΩ, with an input of 0.4 V. What is the output?",
        "choices": [
          "1.6 V",
          "−1.6 V",
          "0.4 V",
          "−0.4 V"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Gain = −20 ÷ 5 = −4, so Vout = −4 × 0.4 = −1.6 V. (a) forgets the minus sign. (c) and (d) are the input, not the output.",
        "module": 5
      },
      {
        "q": "An op-amp with ±15 V supplies and a gain of 20 has an input of 1 V. What does the output do?",
        "choices": [
          "It outputs 20 V",
          "It saturates near the positive rail, about +15 V",
          "It outputs 0 V",
          "It outputs −15 V"
        ],
        "answer": 1,
        "explanation": "Correct: (b). It tries for 20 V but cannot exceed the rails, so it saturates near +15 V. (a) is wrong: no output can exceed the supplies. (c) is wrong: the output goes high. (d) is wrong: the input is positive, so it saturates at the positive rail.",
        "module": 5
      },
      {
        "q": "Golden rule 1 says the op-amp inputs draw no current. What does that imply for the current through Rf in an inverting amplifier?",
        "choices": [
          "No current flows through Rf",
          "All of the input current flows through Rf, because none of it can enter the op-amp",
          "Half the input current flows through Rf",
          "The current through Rf equals the supply current"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The input current has nowhere else to go, so it all flows through the feedback resistor — that is how the inverting gain formula works. (a) is wrong: current does flow through Rf. (c) is wrong: there is no splitting. (d) is wrong: the supply current is a different thing.",
        "module": 5
      },
      {
        "q": "A summing amplifier has Rf = 10 kΩ, one 10 kΩ input at 2 V, and one 20 kΩ input at 1 V. What is the output?",
        "choices": [
          "−2.5 V",
          "2.5 V",
          "−3.0 V",
          "−1.5 V"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The first input has weight 10 ÷ 10 = 1 and the second has weight 10 ÷ 20 = 0.5, so Vout = −(2 × 1 + 1 × 0.5) = −2.5 V. (b) forgets the inversion. (c) gives both inputs a weight of 1. (d) uses the wrong weights.",
        "module": 6
      },
      {
        "q": "A comparator's output chatters when its input sits near the switching point. What is the fix?",
        "choices": [
          "Increase the supply voltage",
          "Add hysteresis with a little positive feedback, separating the switch-on and switch-off points",
          "Remove the reference voltage",
          "Use a larger input resistor"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Hysteresis separates the two switching points so noise can no longer flip the output back and forth. (a) is wrong: supply voltage does not cause chatter. (c) is wrong: a comparator needs a reference. (d) is wrong: the input resistor does not affect chatter.",
        "module": 6
      },
      {
        "q": "A voltage follower has a gain of 1. Why would you use one?",
        "choices": [
          "To amplify a signal",
          "To buffer a weak source from a heavy load without changing the voltage",
          "To convert DC to AC",
          "To add two signals together"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A follower's high input impedance and low output impedance let a weak signal drive a load unchanged. (a) is wrong: the gain is 1. (c) is wrong: a follower does not convert DC to AC. (d) is a summing amplifier's job.",
        "module": 6
      },
      {
        "q": "What is the binary number 1101 in decimal?",
        "choices": [
          "11",
          "13",
          "15",
          "9"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 1101 = 8 + 4 + 0 + 1 = 13. (a) 11 is 1011. (c) 15 is 1111. (d) 9 is 1001.",
        "module": 7
      },
      {
        "q": "What is 0x3C in decimal?",
        "choices": [
          "36",
          "60",
          "48",
          "52"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 0x3C = 3×16 + 12 = 48 + 12 = 60. (a) 36 treats the hex digits as decimal. (c) 48 is 3×16 without the C. (d) is wrong by 8.",
        "module": 7
      },
      {
        "q": "A two-input NAND gate has inputs 1 and 1. What is its output?",
        "choices": [
          "1",
          "0",
          "It depends on the clock",
          "Both 1 and 0"
        ],
        "answer": 1,
        "explanation": "Correct: (b). NAND is AND followed by NOT: 1 AND 1 = 1, inverted to 0. (a) is the output of an AND gate. (c) is wrong: a NAND gate has no clock. (d) is wrong: a gate has one output.",
        "module": 7
      },
      {
        "q": "Simplify the Boolean expression A·B + A·B̄.",
        "choices": [
          "A",
          "B",
          "0",
          "1"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Factor out A: A·(B + B̄) = A·1 = A. (b) is wrong: the result does not depend on B alone. (c) is wrong: the expression is 1 whenever A is 1. (d) is wrong: the expression is 0 when A is 0.",
        "module": 7
      },
      {
        "q": "A half adder has inputs A = 0 and B = 1. What are its sum and carry outputs?",
        "choices": [
          "Sum 1, carry 0",
          "Sum 0, carry 1",
          "Sum 1, carry 1",
          "Sum 0, carry 0"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Sum = 0 XOR 1 = 1, carry = 0 AND 1 = 0. (b) is the result for A = 1, B = 1. (c) would be 1 + 1 = 11, which is wrong. (d) is the result for A = 0, B = 0.",
        "module": 8
      },
      {
        "q": "A 4-to-1 multiplexer has select lines S1S0 = 01 and inputs D0 = 1, D1 = 0, D2 = 1, D3 = 1. What is the output?",
        "choices": [
          "1",
          "0",
          "It depends on D0",
          "Both 0 and 1"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Select 01 chooses D1, which is 0. (a) would be the answer if D1 were 1. (c) is wrong: D0 is selected only when the code is 00. (d) is wrong: a mux has one output.",
        "module": 8
      },
      {
        "q": "A 2-to-4 decoder has inputs 10. Which output is active?",
        "choices": [
          "Output 0",
          "Output 1",
          "Output 2",
          "Output 3"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Input 10 is binary 2, so output 2 is active. (a) is for input 00. (b) is for input 01. (d) is for input 11.",
        "module": 8
      },
      {
        "q": "A D flip-flop has D = 0 when the clock rises. What is Q after the edge?",
        "choices": [
          "1",
          "0",
          "It toggles",
          "It stays the same as before"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A D flip-flop copies D to Q on the rising edge, so Q = 0. (a) would be the result if D were 1. (c) is JK toggle behaviour. (d) is what happens between edges, not at an edge.",
        "module": 9
      },
      {
        "q": "A counter counts from 0 to 31 before wrapping back to 0. How many bits does it have?",
        "choices": [
          "4 bits",
          "5 bits",
          "6 bits",
          "31 bits"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 0 to 31 is 32 states, and 2⁵ = 32, so the counter has 5 bits. (a) 4 bits gives only 16 states. (c) 6 bits gives 64 states. (d) confuses the maximum count with the bit count.",
        "module": 9
      },
      {
        "q": "An 8-bit shift register holds 1010 in its lowest four bits (00001010). It is shifted right once, with a 0 shifting in. What does it hold now?",
        "choices": [
          "00000101",
          "00010100",
          "00001010",
          "10000101"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Shifting right moves every bit one place down: 00001010 becomes 00000101, which is 5 — half of 10. (b) is a left shift. (c) is no shift at all. (d) shifts in a 1 instead of a 0.",
        "module": 9
      },
      {
        "q": "A 10-bit ADC with a 3.3 V reference returns a reading of 512. What is the input voltage?",
        "choices": [
          "3.30 V",
          "1.65 V",
          "0.83 V",
          "2.50 V"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Voltage = 512 × 3.3 ÷ 1024 = 1.65 V. (a) would be a reading of 1023. (c) would be a reading of 256. (d) is the answer for a 5 V reference.",
        "module": 10
      },
      {
        "q": "A PWM output on a 3.3 V pin runs at 40% duty cycle. What is the average voltage?",
        "choices": [
          "3.30 V",
          "1.32 V",
          "0.40 V",
          "2.00 V"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Average = 0.40 × 3.3 = 1.32 V. (a) is the peak voltage. (c) is the duty cycle as a voltage, not the average. (d) has no basis in the numbers.",
        "module": 10
      },
      {
        "q": "On an Arduino, analogWrite(pin, 255) is called. What duty cycle does that give?",
        "choices": [
          "25.5%",
          "50%",
          "100%",
          "0%"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 255 is the maximum analogWrite value, giving 255 ÷ 255 = 100% duty — the pin stays on. (a) confuses 255 with 25.5. (b) would be a value of about 128. (d) would be a value of 0.",
        "module": 10
      },
      {
        "q": "A microcontroller pin reads a push-button. Why is a pull-up resistor needed?",
        "choices": [
          "To limit the current through the button",
          "To stop the pin floating and reading random values when the button is not pressed",
          "To increase the supply voltage",
          "To make the button press faster"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The pull-up ties the pin to a known HIGH level when the button is open, so it reads reliably. (a) is wrong: the button current is tiny either way. (c) is wrong: a resistor cannot raise the supply. (d) is wrong: resistors do not change press speed.",
        "module": 10
      },
      {
        "q": "An LM35 temperature sensor outputs 0.15 V. What temperature is it measuring?",
        "choices": [
          "1.5 °C",
          "15 °C",
          "150 °C",
          "0.15 °C"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The LM35 gives 10 mV per °C, so 0.15 ÷ 0.01 = 15 °C. (a) is ten times too small. (c) is ten times too big. (d) is the voltage, not the temperature.",
        "module": 11
      },
      {
        "q": "An LDR is on top of a voltage divider and a fixed resistor is below it, across a 5 V supply. In bright light the LDR's resistance falls. What happens to the midpoint voltage?",
        "choices": [
          "It falls, because the LDR takes more of the voltage",
          "It rises, because the LDR takes less of the voltage and more appears across the fixed resistor",
          "It stays the same",
          "It becomes 0 V"
        ],
        "answer": 1,
        "explanation": "Correct: (b). In bright light the LDR's resistance falls, so less voltage appears across it and more across the fixed resistor below — the midpoint rises. (a) has the direction backwards. (c) is wrong: the divider ratio changes. (d) is wrong: the midpoint never reaches 0 V in this circuit.",
        "module": 11
      },
      {
        "q": "A sensor outputs 5 V logic, but the microcontroller it connects to uses 3.3 V pins. What is needed?",
        "choices": [
          "Nothing — 5 V is safe for any pin",
          "A level shifter to translate the 5 V signal down to 3.3 V",
          "A bigger pull-up resistor",
          "A longer wire"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A level shifter safely translates between the two logic voltages. (a) is wrong: 5 V can damage a 3.3 V pin. (c) is wrong: a pull-up does not change the voltage level. (d) is wrong: wire length does not change voltage.",
        "module": 11
      },
      {
        "q": "A linear regulator is fed 12 V and delivers 3.3 V at 0.2 A. How much power does it waste as heat?",
        "choices": [
          "0.66 W",
          "1.74 W",
          "2.40 W",
          "0.20 W"
        ],
        "answer": 1,
        "explanation": "Correct: (b). P = (12 − 3.3) × 0.2 = 8.7 × 0.2 = 1.74 W. (a) is 3.3 × 0.2, the output power, not the waste. (c) is 12 × 0.2, the input power, not the waste. (d) is just the current.",
        "module": 12
      },
      {
        "q": "A 7805 linear regulator is fed 12 V and delivers 5 V at 1 A. How much heat must it shed, and what does that mean?",
        "choices": [
          "2 W — no heatsink needed",
          "7 W — a substantial heatsink is essential",
          "12 W — the regulator will fail immediately",
          "5 W — a small heatsink is enough"
        ],
        "answer": 1,
        "explanation": "Correct: (b). P = (12 − 5) × 1 = 7 W, which is far too much for a bare regulator — a substantial heatsink is essential, or a switching regulator should be used. (a) understates the power by 5 W. (c) overstates it. (d) understates it by 2 W.",
        "module": 12
      },
      {
        "q": "Why must a mains power supply include a transformer?",
        "choices": [
          "To convert AC to DC",
          "To step the voltage down and isolate the circuit from the mains, so it is safe to touch",
          "To smooth the output voltage",
          "To regulate the output to exactly 5 V"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The transformer steps the mains down and provides isolation — without it the circuit would be directly connected to dangerous mains voltage. (a) is the rectifier's job. (c) is the smoothing capacitor's job. (d) is the regulator's job.",
        "module": 12
      }
    ]
  }
};
