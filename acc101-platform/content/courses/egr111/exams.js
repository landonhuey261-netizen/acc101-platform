// egr111 — Midterm and Final exams.
// All questions are original to these exams (same topics as module quizzes, fresh scenarios and wording).
// Every explanation covers why the correct answer is right AND why each wrong choice is wrong.
module.exports = {
  "midterm": {
    "title": "Midterm Exam",
    "description": "Covers Modules 1–6: PLC hardware, ladder logic, timers and counters, sensors, motor controls, and sequencing. 25 questions, 75 minutes.",
    "minutes": 75,
    "coverage": "Modules 1–6",
    "questions": [
      {
        "q": "A PLC takes 3 ms to read its inputs, 5 ms to solve its logic, and 2 ms to write its outputs. What is its scan time?",
        "choices": [
          "5 ms",
          "8 ms",
          "10 ms",
          "3 ms"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Scan time is the sum: 3 + 5 + 2 = 10 ms. (a) is just the logic time. (b) is inputs plus logic, forgetting the outputs. (d) is just the input time.",
        "module": 1
      },
      {
        "q": "A factory wants to change a machine's control logic. Why is a PLC easier to change than a relay panel?",
        "choices": [
          "Because a PLC has fewer wires",
          "Because changing the logic means editing software, not rewiring a panel",
          "Because a PLC never needs maintenance",
          "Because a PLC is cheaper than relays"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A PLC's logic lives in a program, so changes are software edits. (a) is a side benefit, not the main reason. (c) is wrong: PLCs do need maintenance. (d) is wrong: a PLC system is not necessarily cheaper than relays.",
        "module": 1
      },
      {
        "q": "What does the PLC program actually see when it reads an input?",
        "choices": [
          "The live voltage on the input terminal at that instant",
          "The input image table, copied at the start of the scan",
          "The output image table",
          "The sensor's datasheet value"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The program only sees the input image table, copied at the start of each scan. (a) is wrong: the program does not read live terminals mid-scan. (c) is the output image, not the inputs. (d) is wrong: datasheets describe the sensor, not its live state.",
        "module": 1
      },
      {
        "q": "A sensor pulse lasts 2 ms, but the PLC's scan time is 8 ms. What can happen?",
        "choices": [
          "The PLC always sees the pulse",
          "The PLC can miss the pulse entirely if it falls between input reads",
          "The scan time becomes 2 ms",
          "The sensor is damaged"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A 2 ms pulse can start and finish between two reads 8 ms apart, so the PLC never sees it. (a) is wrong: the pulse is shorter than the scan. (c) is wrong: the sensor does not change the scan time. (d) is wrong: the sensor is not damaged by being missed.",
        "module": 1
      },
      {
        "q": "A rung has an NC contact for a door switch. The door is closed, so the switch is ON. Does power flow through the contact?",
        "choices": [
          "Yes — an NC contact passes power when its input is on",
          "No — an NC contact opens when its input turns on, so it blocks power",
          "Yes — but only for one scan",
          "No — because the door is closed"
        ],
        "answer": 1,
        "explanation": "Correct: (b). An NC contact is true when its input is off and opens when its input turns on, so with the switch on it blocks power. (a) describes a NO contact. (c) is wrong: contact state is not time-limited. (d) is backwards: a closed door turns this switch on, which opens the NC contact.",
        "module": 2
      },
      {
        "q": "A lamp must light only when Sensor A AND Sensor B both see a part. How are the two sensor contacts arranged on the rung?",
        "choices": [
          "In parallel",
          "In series",
          "On separate rungs driving the same coil",
          "One as a coil and one as a contact"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Series contacts are an AND: both must be true for power to reach the coil. (a) is an OR, which would light the lamp on either sensor. (c) is bad practice: one coil should appear once. (d) is wrong: a sensor is an input, not a coil.",
        "module": 2
      },
      {
        "q": "A motor rung has a Start NO contact and a Stop NC contact, but no seal-in contact. What happens when the operator presses Start and then releases it?",
        "choices": [
          "The motor keeps running",
          "The motor runs while Start is held, then stops when Start is released",
          "The motor runs backwards",
          "The PLC faults"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Without a seal-in contact there is nothing to hold the rung true, so the motor stops as soon as Start is released. (a) is what happens with a seal-in. (c) is wrong: direction is not controlled by this rung. (d) is wrong: nothing here faults the PLC.",
        "module": 2
      },
      {
        "q": "What does XIO mean in Allen-Bradley ladder logic?",
        "choices": [
          "Examine if closed — a normally open contact",
          "Examine if open — a normally closed contact",
          "Output energise — a coil",
          "Timer on delay"
        ],
        "answer": 1,
        "explanation": "Correct: (b). XIO (examine if open) is the NC contact instruction. (a) is XIC. (c) is OTE. (d) is a TON timer.",
        "module": 2
      },
      {
        "q": "The same motor coil appears on two different rungs in a program. What is the result?",
        "choices": [
          "The motor runs at double speed",
          "The last rung in the scan wins, so the output can behave unpredictably",
          "The PLC stops scanning",
          "The motor is protected from overload"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Each coil should appear once: with two rungs driving one coil, the last one scanned decides the output. (a) is wrong: coils do not add speed. (c) is wrong: the PLC keeps scanning. (d) is wrong: overload protection comes from an overload relay.",
        "module": 2
      },
      {
        "q": "A TON timer has a preset of 10 s. Its input turns on at t = 0 s and drops at t = 6 s. Does the done bit ever turn on?",
        "choices": [
          "Yes, at t = 10 s",
          "No — the accumulator resets when the input drops, so DN never turns on",
          "Yes, at t = 6 s",
          "Yes, but only for one scan"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A TON resets its accumulator on a false input, so the count is lost at 6 s and DN never turns on. (a) is wrong: the timer needs a continuous input. (c) is wrong: 6 s is when the input drops, not when DN turns on. (d) is wrong: DN never turns on at all.",
        "module": 3
      },
      {
        "q": "A CTU counter has a preset of 25 and has counted 18 pulses. What are ACC and DN?",
        "choices": [
          "ACC = 18, DN is false",
          "ACC = 25, DN is true",
          "ACC = 7, DN is false",
          "ACC = 18, DN is true"
        ],
        "answer": 0,
        "explanation": "Correct: (a). After 18 pulses ACC = 18, which is below the preset of 25, so DN is still false. (b) is the state after 25 pulses. (c) is wrong: ACC counts up, it does not count down from the preset. (d) is wrong: DN only turns on at the preset.",
        "module": 3
      },
      {
        "q": "A workshop light must stay on for 10 seconds after its switch is turned off. Which timer do you use?",
        "choices": [
          "TON",
          "TOF",
          "RTO",
          "CTU"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A TOF (off-delay) timer keeps its done bit on for the preset time after the input drops. (a) is wrong: a TON delays turning on. (c) is wrong: an RTO is a retentive on-delay timer. (d) is a counter, not a timer.",
        "module": 3
      },
      {
        "q": "A timer preset is 120 and the time base is 0.1 s. How long is the timed delay?",
        "choices": [
          "120 s",
          "12 s",
          "1.2 s",
          "1,200 s"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 120 × 0.1 s = 12 s. (a) forgets the time base. (c) uses a 0.01 s base. (d) multiplies by 10 instead of 0.1.",
        "module": 3
      },
      {
        "q": "A temperature transmitter sends 4–20 mA for 0–80 °C. The PLC reads 16 mA. What is the temperature?",
        "choices": [
          "80 °C",
          "60 °C",
          "64 °C",
          "40 °C"
        ],
        "answer": 1,
        "explanation": "Correct: (b). (16 − 4) ÷ 16 × 80 = 60 °C. (a) is the full-scale temperature. (c) comes from forgetting to subtract the live zero and scaling wrongly. (d) is half the range with no working.",
        "module": 4
      },
      {
        "q": "An incremental encoder produces 500 pulses per revolution. The PLC counts 125 pulses. How far has the shaft turned?",
        "choices": [
          "125°",
          "90°",
          "250°",
          "360°"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Each pulse is 360 ÷ 500 = 0.72°, so 125 × 0.72 = 90°. (a) mistakes the pulse count for degrees. (c) doubles the answer. (d) is a full revolution, which needs 500 pulses.",
        "module": 4
      },
      {
        "q": "A photoelectric sensor must detect cardboard boxes in a dusty warehouse. Which type is most reliable, and why?",
        "choices": [
          "Diffuse, because it needs no reflector",
          "Through-beam, because it has the strongest signal and is least affected by dust",
          "Retro-reflective, because it uses a reflector",
          "Capacitive, because it detects cardboard"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A through-beam sensor has a separate emitter and receiver with the strongest signal, so dust affects it least. (a) is wrong: diffuse sensors are the most easily fooled by dust. (c) is wrong: retro-reflective sensors rely on a reflected beam that dust weakens. (d) is wrong: capacitive is a proximity sensor type, not a photoelectric one.",
        "module": 4
      },
      {
        "q": "A flow sensor sends 0–10 V for 0–100 L/min. The PLC reads 4 V. What is the flow rate?",
        "choices": [
          "100 L/min",
          "40 L/min",
          "4 L/min",
          "60 L/min"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 4 ÷ 10 × 100 = 40 L/min. (a) is the full-scale flow. (c) mistakes the voltage for the flow. (d) is the remainder of the range, not the reading.",
        "module": 4
      },
      {
        "q": "A 1.5 kW motor runs at 1450 rpm. What is its torque, approximately?",
        "choices": [
          "9.88 N·m",
          "14.8 N·m",
          "4.94 N·m",
          "98.8 N·m"
        ],
        "answer": 0,
        "explanation": "Correct: (a). T = 9550 × 1.5 ÷ 1450 = 9.88 N·m. (b) is 1.5 times too big. (c) is half the right value. (d) is ten times too big.",
        "module": 5
      },
      {
        "q": "A 4-pole motor runs at 1800 rpm synchronous speed on 60 Hz. A VFD reduces the frequency to 45 Hz. What is the new synchronous speed?",
        "choices": [
          "1800 rpm",
          "1350 rpm",
          "900 rpm",
          "2400 rpm"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Speed follows frequency: 1800 × 45 ÷ 60 = 1350 rpm. (a) is the original speed. (c) is the speed at 30 Hz. (d) is the speed at 80 Hz.",
        "module": 5
      },
      {
        "q": "A motor's nameplate says FLA 12 A. What should its overload relay be set to?",
        "choices": [
          "12 A",
          "24 A",
          "6 A",
          "72 A"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The overload is set to the nameplate full-load current, 12 A. (b) would let the motor run dangerously overloaded. (c) would trip during normal running. (d) is the starting current, not the running current.",
        "module": 5
      },
      {
        "q": "In a three-wire start/stop circuit, what is the holding contact's job?",
        "choices": [
          "To stop the motor",
          "To keep the contactor energised after the Start button is released",
          "To protect the motor from overload",
          "To change the motor's speed"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The holding contact, wired in parallel with Start, seals the circuit in. (a) is the Stop button's job. (c) is the overload relay's job. (d) is a VFD's job.",
        "module": 5
      },
      {
        "q": "A traffic-light sequence is: north-south green 25 s, north-south yellow 4 s, all red 2 s, east-west green 20 s, east-west yellow 4 s, all red 2 s. What is the total cycle time?",
        "choices": [
          "57 s",
          "55 s",
          "51 s",
          "69 s"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 25 + 4 + 2 + 20 + 4 + 2 = 57 s. (b) misses 2 s. (c) misses 6 s. (d) is the total for a different set of timings.",
        "module": 6
      },
      {
        "q": "A push-button must trigger a counter exactly once per press, but the button stays pressed for several scans. What do you use?",
        "choices": [
          "A TON timer",
          "A one-shot (ONS) instruction, so the counter sees one pulse per press",
          "A longer preset",
          "A second counter"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A one-shot turns the button's level into a single-scan pulse, so the counter counts once. (a) is wrong: a timer delays, it does not create an edge. (c) is wrong: the preset does not affect the count rate. (d) is wrong: a second counter would count the same level.",
        "module": 6
      },
      {
        "q": "A press must not close while its guard door is open. Which contact belongs in the press rung, and what does it do?",
        "choices": [
          "A NO contact from the door switch, so the rung is true only when the door is closed",
          "An NC contact from the door switch, so the rung is true when the door is open",
          "No contact — the operator is trusted to check",
          "A timer contact, so the press waits 5 seconds"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A NO contact from the door-closed switch makes the rung true only when the door is closed. (b) is backwards: it would let the press close with the door open. (c) is wrong: safety must be in the logic, not left to the operator. (d) is wrong: a timer does not check the door.",
        "module": 6
      },
      {
        "q": "A machine's sequence is stuck at step 3, and it has been there for ten minutes. What does that tell you?",
        "choices": [
          "The PLC has crashed",
          "Step 3's completion condition has never arrived — the sensor, timer, or event it waits for has not happened",
          "Step 3's timer preset is too short",
          "The sequence has finished"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A sequence waits at a step until its completion condition arrives, so a stuck step means the expected sensor, timer, or event never happened. (a) is wrong: a crashed PLC would stop the whole program. (c) is wrong: a short preset would advance the step too soon, not hold it. (d) is wrong: a finished sequence would be at its last step or idle, not stuck mid-way.",
        "module": 6
      }
    ]
  },
  "final": {
    "title": "Final Exam",
    "description": "Covers Modules 1–12: the full PLCs, controls, fluid power, and robotics course. 40 questions, 120 minutes.",
    "minutes": 120,
    "coverage": "Modules 1–12",
    "questions": [
      {
        "q": "Which PLC module switches real loads such as contactors and solenoid valves?",
        "choices": [
          "The input module",
          "The output module",
          "The power supply",
          "The programming device"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Output modules switch real loads as the program directs. (a) reads sensors and switches. (c) supplies power. (d) is the laptop used to program the PLC.",
        "module": 1
      },
      {
        "q": "A PLC takes 1 ms to read inputs, 4 ms to solve logic, and 1 ms to write outputs. What is its scan time?",
        "choices": [
          "4 ms",
          "6 ms",
          "5 ms",
          "1 ms"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Scan time is the sum: 1 + 4 + 1 = 6 ms. (a) is just the logic time. (c) forgets one of the 1 ms steps. (d) is just the input time.",
        "module": 1
      },
      {
        "q": "What is the housekeeping step of the scan cycle for?",
        "choices": [
          "Reading the inputs",
          "Communications, diagnostics, and internal checks",
          "Writing the outputs",
          "Solving the ladder logic"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Housekeeping covers communications, diagnostics, and internal checks. (a) is the first scan step. (c) is the third scan step. (d) is the second scan step.",
        "module": 1
      },
      {
        "q": "A sensor is ON. A NO contact for that sensor is on a rung. Does power flow through the contact?",
        "choices": [
          "Yes — a NO contact passes power when its input is on",
          "No — a NO contact passes power only when its input is off",
          "Only for one scan",
          "Only if the sensor is analogue"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A NO contact closes when its input turns on, so power flows. (b) describes an NC contact. (c) is wrong: contact state is not time-limited. (d) is wrong: sensors on digital inputs are on/off, not analogue.",
        "module": 2
      },
      {
        "q": "An alarm must sound when Fault A OR Fault B occurs. How are the two fault contacts arranged?",
        "choices": [
          "In series",
          "In parallel",
          "On separate PLCs",
          "As coils, not contacts"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Parallel contacts are an OR: either fault sounds the alarm. (a) is an AND, which would need both faults at once. (c) is wrong: both contacts belong on one rung. (d) is wrong: faults are inputs, shown as contacts.",
        "module": 2
      },
      {
        "q": "A motor is running through a seal-in circuit. The operator presses Stop. What happens to the seal-in contact?",
        "choices": [
          "It stays closed",
          "It opens when the motor drops out, so the motor stays off when Stop is released",
          "It closes harder",
          "It becomes a timer"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Pressing Stop opens the rung, the motor drops out, and its seal-in contact opens with it — so the motor stays off. (a) is wrong: the seal-in opens with the motor. (c) is meaningless: contacts do not close harder. (d) is wrong: a contact does not become a timer.",
        "module": 2
      },
      {
        "q": "Why is a Stop button's NC contact fail-safe?",
        "choices": [
          "Because it is cheaper",
          "Because a broken wire opens the rung and stops the machine, which is the safe direction",
          "Because it makes the motor run faster",
          "Because the PLC requires NC stops"
        ],
        "answer": 1,
        "explanation": "Correct: (b). With an NC stop, any wire break or button failure opens the rung and stops the machine. (a) is wrong: cost is not the reason. (c) is wrong: a stop contact does not affect speed. (d) is wrong: the PLC does not require it — safety does.",
        "module": 2
      },
      {
        "q": "A TON timer has a preset of 8 s. Its input turns on at t = 0 s and stays on. When does the done bit turn on?",
        "choices": [
          "At t = 0 s",
          "At t = 8 s",
          "At t = 4 s",
          "Never"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The accumulator reaches the 8 s preset at t = 8 s, and DN turns on. (a) is when the input turns on. (c) is halfway, not the preset. (d) is wrong: a TON's done bit turns on at the preset.",
        "module": 3
      },
      {
        "q": "A CTU counter has a preset of 50 and receives its 50th pulse. What are ACC and DN?",
        "choices": [
          "ACC = 50, DN is true",
          "ACC = 50, DN is false",
          "ACC = 49, DN is true",
          "ACC = 0, DN is false"
        ],
        "answer": 0,
        "explanation": "Correct: (a). At the 50th pulse ACC reaches the preset and DN turns on. (b) is wrong: DN turns on at the preset. (c) is wrong: the 50th pulse makes ACC 50, not 49. (d) is the state after a reset, not after 50 pulses.",
        "module": 3
      },
      {
        "q": "Which timer holds its accumulator value when its input goes false, and needs a separate reset instruction?",
        "choices": [
          "TON",
          "TOF",
          "RTO",
          "CTU"
        ],
        "answer": 2,
        "explanation": "Correct: (c). An RTO (retentive timer) holds its accumulator until reset. (a) is wrong: a TON resets on a false input. (b) is wrong: a TOF counts after its input drops. (d) is a counter, not a timer.",
        "module": 3
      },
      {
        "q": "An inductive proximity sensor is set up to detect steel cans on a conveyor. Will it detect aluminium cans?",
        "choices": [
          "No — it only detects steel",
          "Yes — aluminium is a metal, so an inductive sensor detects it too",
          "No — aluminium is not magnetic enough",
          "Only if the cans are painted"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Inductive sensors detect metal, and aluminium is a metal — an inductive sensor cannot tell steel from aluminium. (a) is wrong: inductive sensing is not limited to steel. (c) is wrong: inductive sensors do not need magnetism, they disturb a magnetic field. (d) is wrong: paint does not change the metal underneath.",
        "module": 4
      },
      {
        "q": "A temperature transmitter sends 4–20 mA for 0–100 °C. The PLC reads 20 mA. What is the temperature?",
        "choices": [
          "0 °C",
          "50 °C",
          "100 °C",
          "20 °C"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 20 mA is full scale, so the temperature is 100 °C. (a) is the reading at 4 mA. (b) is the reading at 12 mA. (d) mistakes the current for the temperature.",
        "module": 4
      },
      {
        "q": "What is the main advantage of an absolute encoder over an incremental encoder?",
        "choices": [
          "It is cheaper",
          "It knows its exact position even after a power cut, with no need to find a home position",
          "It produces more pulses per revolution",
          "It needs no power supply"
        ],
        "answer": 1,
        "explanation": "Correct: (b). An absolute encoder reports its position as a digital code, so it survives a power cut. (a) is wrong: absolute encoders are more expensive. (c) is wrong: pulse count is not the difference. (d) is wrong: both types need power.",
        "module": 4
      },
      {
        "q": "A motor produces 20 N·m of torque at 1750 rpm. What power is it delivering, approximately?",
        "choices": [
          "3.66 kW",
          "2.00 kW",
          "7.32 kW",
          "0.37 kW"
        ],
        "answer": 0,
        "explanation": "Correct: (a). P = T × n ÷ 9550 = 20 × 1750 ÷ 9550 = 3.66 kW. (b) is a round guess. (c) doubles the answer. (d) is ten times too small.",
        "module": 5
      },
      {
        "q": "Which device gives speed control of an AC motor, and which only gives a gentle start?",
        "choices": [
          "A soft starter gives speed control; a VFD gives a gentle start",
          "A VFD gives speed control; a soft starter only gives a gentle start",
          "Both give speed control",
          "Neither gives speed control"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A VFD changes frequency and so controls speed; a soft starter only ramps the voltage for a gentle start. (a) has them backwards. (c) is wrong: a soft starter cannot vary speed. (d) is wrong: a VFD does control speed.",
        "module": 5
      },
      {
        "q": "Why does an overload relay have a time delay?",
        "choices": [
          "To save energy",
          "So the motor's high starting current does not trip it",
          "To delay the motor starting",
          "To protect the PLC"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A motor's starting current is often six times its full-load current for a second or two, and the delay lets it start without tripping. (a) is wrong: the delay does not save energy. (c) is wrong: the delay is on the trip, not the start. (d) is wrong: the overload protects the motor, not the PLC.",
        "module": 5
      },
      {
        "q": "A small lathe is driven by a 2.2 kW motor turning at 2850 rpm. What torque does the motor deliver, approximately?",
        "choices": [
          "7.37 N·m",
          "14.7 N·m",
          "3.69 N·m",
          "73.7 N·m"
        ],
        "answer": 0,
        "explanation": "Correct: (a). T = 9550 × 2.2 ÷ 2850 = 7.37 N·m. (b) is double. (c) is half. (d) is ten times too big.",
        "module": 5
      },
      {
        "q": "In a step sequence, what makes the machine move from one step to the next?",
        "choices": [
          "The scan cycle ending",
          "The step's completion condition, such as a sensor or a timer finishing",
          "The operator pressing a button each time",
          "The PLC restarting"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Each step advances when its completion condition is met. (a) is wrong: the scan runs constantly. (c) is wrong: sequences advance automatically. (d) is wrong: restarting is not part of normal operation.",
        "module": 6
      },
      {
        "q": "A heater must not run unless cooling water is flowing. What is the “water flowing” condition called?",
        "choices": [
          "An interlock",
          "A permissive — a condition that must be true before the action is allowed",
          "A seal-in",
          "A one-shot"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A permissive is a condition that must be true before an action is allowed. (a) is the related idea of preventing an unsafe action, but “water flowing” is the permissive that allows the heater. (c) is a latching circuit. (d) is a single-scan pulse.",
        "module": 6
      },
      {
        "q": "Why is a PLC program split into a main routine and subroutines?",
        "choices": [
          "Because the PLC cannot run more than 10 rungs",
          "So each part of the machine has its own block, making the program readable and faults traceable to one part",
          "Because subroutines run faster",
          "Because the main routine cannot contain timers"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Subroutines organise the program by machine part, so faults can be traced quickly. (a) is wrong: PLCs run hundreds of rungs. (c) is wrong: subroutines do not run faster. (d) is wrong: the main routine can contain any instruction.",
        "module": 6
      },
      {
        "q": "A hydraulic cylinder has a 40 mm bore and works at 12 MPa. What is its extend force, approximately?",
        "choices": [
          "15.1 kN",
          "12.6 kN",
          "7.5 kN",
          "30.2 kN"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Area is π ÷ 4 × 40² = 1,256.6 mm², and 12 × 1,256.6 = 15,079 N ≈ 15.1 kN. (b) is the force at 10 MPa. (c) is half the right value. (d) is double.",
        "module": 7
      },
      {
        "q": "A hydraulic cylinder with a 63 mm bore is fed 30 L/min of oil. What is its extend speed, approximately?",
        "choices": [
          "160.4 mm/s",
          "95.2 mm/s",
          "320.8 mm/s",
          "30 mm/s"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Flow is 500,000 mm³/s and area is 3,117.2 mm², so v = 160.4 mm/s. (b) is roughly the speed at a lower flow. (c) is double. (d) mistakes the flow rate for the speed.",
        "module": 7
      },
      {
        "q": "A hydraulic cylinder has a 63 mm bore and a 20 mm rod, working at 16 MPa. What is its retract force, approximately?",
        "choices": [
          "49.9 kN",
          "44.8 kN",
          "39.9 kN",
          "5.0 kN"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The annulus area is π ÷ 4 × (63² − 20²) = 2,802.9 mm², and 16 × 2,802.9 = 44,846 N ≈ 44.8 kN. (a) is the extend force of a 63 mm bore at 16 MPa. (c) is a lower value with no working. (d) is ten times too small.",
        "module": 7
      },
      {
        "q": "In a hydraulic system, which quantity decides the force a cylinder produces, and which decides its speed?",
        "choices": [
          "Flow decides force; pressure decides speed",
          "Pressure decides force; flow decides speed",
          "Both are decided by pressure",
          "Both are decided by flow"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Pressure decides how hard a cylinder pushes (F = P × A) and flow decides how fast it moves (v = Q ÷ A). (a) has them backwards. (c) and (d) confuse the two.",
        "module": 7
      },
      {
        "q": "A pneumatic cylinder has a 50 mm bore and works at 5 bar. What is its extend force, approximately?",
        "choices": [
          "982 N",
          "1,178 N",
          "1,963 N",
          "500 N"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Area is 1,963.5 mm² and 5 bar is 0.5 N/mm², so F = 0.5 × 1,963.5 = 982 N. (b) is the force at 6 bar. (c) is the area, not the force. (d) is a round guess.",
        "module": 8
      },
      {
        "q": "A 40 mm bore pneumatic cylinder with an 80 mm stroke works at 6 bar gauge. How much free air does one extend stroke use, approximately?",
        "choices": [
          "0.10 L",
          "0.70 L",
          "1.40 L",
          "7.0 L"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The volume is π ÷ 4 × 40² × 80 = 100,530 mm³ = 0.1005 L, and the absolute pressure is 7 bar, so free air is 0.1005 × 7 ≈ 0.70 L. (a) is the volume, not the free air. (c) is roughly the full cycle. (d) is the absolute pressure, not a volume.",
        "module": 8
      },
      {
        "q": "Which pneumatic cylinder is returned by a spring when its air is released?",
        "choices": [
          "Double-acting",
          "Single-acting",
          "Double-rod",
          "Telescopic"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A single-acting cylinder is driven by air in one direction and returned by a spring. (a) is driven by air in both directions. (c) has a rod on both sides. (d) is a multi-stage cylinder for long strokes.",
        "module": 8
      },
      {
        "q": "Which robot type is best for loading large, heavy parts into a machine tool over a wide area?",
        "choices": [
          "SCARA",
          "Delta",
          "Cartesian (gantry)",
          "Collaborative"
        ],
        "answer": 2,
        "explanation": "Correct: (c). A cartesian robot moves on straight rails and suits large, heavy, precise jobs. (a) suits fast flat pick-and-place. (b) suits fast sorting over a small area. (d) suits working beside people on light jobs.",
        "module": 9
      },
      {
        "q": "A palletising robot needs to lift 400 kg boxes. Which specification matters most?",
        "choices": [
          "Repeatability",
          "Payload — it must be rated above 400 kg",
          "Speed",
          "Number of axes"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The robot's payload must exceed the box weight, or it cannot lift the load. (a) matters for precision, not lifting. (c) matters for cycle time, not lifting. (d) matters for flexibility, not lifting.",
        "module": 9
      },
      {
        "q": "A cobot works beside an operator. What limits its force so it can stop safely on contact?",
        "choices": [
          "Its speed is limited to zero",
          "It is force-limited by design, with sensors that stop it when it touches someone",
          "It has no motor",
          "It is fenced off"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Cobots are force-limited and stop on contact, which is what allows them to work unfenced. (a) is wrong: a cobot that cannot move is useless. (c) is wrong: cobots have motors. (d) is wrong: cobots work without fencing.",
        "module": 9
      },
      {
        "q": "An HMI screen goes blank, but the machine keeps running normally. What has happened?",
        "choices": [
          "The PLC has stopped",
          "The HMI has failed, but the PLC keeps controlling the machine — the operator has lost visibility, not control",
          "The motor has tripped",
          "The program has been deleted"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The HMI only displays and takes commands; the PLC does the controlling, so the machine keeps running. (a) is wrong: a stopped PLC would stop the machine. (c) is wrong: a tripped motor would stop the machine. (d) is wrong: a deleted program would stop the PLC.",
        "module": 10
      },
      {
        "q": "Which industrial network is most associated with Siemens equipment?",
        "choices": [
          "EtherNet/IP",
          "PROFINET",
          "Modbus",
          "OPC UA"
        ],
        "answer": 1,
        "explanation": "Correct: (b). PROFINET is the Siemens industrial network. (a) is the Allen-Bradley network. (c) is a brand-neutral older protocol. (d) is a brand-neutral data-sharing standard, not a Siemens network.",
        "module": 10
      },
      {
        "q": "What is a historian used for in a SCADA system?",
        "choices": [
          "To control the PLCs",
          "To store long-term process data with timestamps for analysis and investigation",
          "To display one machine to one operator",
          "To supply power to the control room"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A historian stores trends for months or years so engineers can analyse batches and investigate incidents. (a) is the PLCs' job. (c) is an HMI's job. (d) is the power supply's job.",
        "module": 10
      },
      {
        "q": "What is the most common way an attacker gets into an industrial control system?",
        "choices": [
          "A clever hack through the firewall",
          "A default password that was never changed, or a USB stick plugged into a control computer",
          "Breaking into the plant physically",
          "Guessing the PLC's IP address"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Default passwords and USB sticks are the most common attack routes — basic hygiene stops most attacks. (a) is rarer than the simple routes. (c) is possible but less common. (d) is wrong: knowing an address is not access.",
        "module": 10
      },
      {
        "q": "A motor will not start and its PLC output LED is OFF. Where is the fault, and what do you check next?",
        "choices": [
          "In the motor; check the motor windings",
          "In the program or the inputs; check the online monitor to see which rung contact is blocking the output",
          "In the contactor; check its coil",
          "In the power supply; check the mains"
        ],
        "answer": 1,
        "explanation": "Correct: (b). An off output LED means the PLC is not commanding the motor, so the fault is upstream — check the online monitor for the blocking contact. (a), (c), and (d) are all in the field half, which the off LED rules out.",
        "module": 11
      },
      {
        "q": "After forcing an output to test a motor, what must you do before returning the machine to service?",
        "choices": [
          "Leave the force in place so the motor keeps working",
          "Remove all forces and check that none remain",
          "Force more outputs to match",
          "Restart the PLC five times"
        ],
        "answer": 1,
        "explanation": "Correct: (b). All forces must be removed and checked, or a forced output could start the machine unexpectedly. (a) is dangerous: a forgotten force bypasses the program and interlocks. (c) is wrong: forcing more outputs makes it worse. (d) is meaningless: restarting does not reliably clear forces.",
        "module": 11
      },
      {
        "q": "A fault appears only on hot days and disappears when the machine cools down. What kind of fault is this most likely to be?",
        "choices": [
          "A program bug",
          "An intermittent, temperature-related fault, such as a loose connection or a sensor drifting when hot",
          "A timer preset error",
          "A power cut"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A fault that depends on temperature is almost always in the field — a loose connection expanding when warm, or a sensor drifting. (a) is wrong: a program bug does not depend on temperature. (c) is wrong: a preset error would be constant. (d) is wrong: a power cut would stop the whole machine.",
        "module": 11
      },
      {
        "q": "In lockout/tagout, which step comes first?",
        "choices": [
          "Isolate the energy sources",
          "Notify everyone affected that the machine is being shut down",
          "Fit locks and tags",
          "Verify the machine cannot start"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Notify is step 1: tell everyone affected before doing anything else. (a) is step 3. (c) is step 4. (d) is step 6, the last step.",
        "module": 12
      },
      {
        "q": "A hydraulic accumulator holds pressurised oil after a press is isolated from its power supply. What must be done before work starts?",
        "choices": [
          "Nothing — isolation is enough",
          "The stored energy must be released: drain the accumulator and lower or block the load",
          "Fit a bigger lock",
          "Restart the press to use up the energy"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The accumulator's stored energy can still drive the press, so it must be drained and the load lowered or blocked. (a) is wrong: isolation alone does not remove stored energy. (c) is wrong: a bigger lock does not release stored energy. (d) is dangerous: restarting defeats the lockout.",
        "module": 12
      },
      {
        "q": "An E-stop that cuts power immediately, letting the machine coast to a stop, is which category?",
        "choices": [
          "Category 1",
          "Category 0",
          "Category 2",
          "Category 3"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Category 0 is an immediate power cut. (a) is a controlled stop under power. (c) and (d) are not E-stop categories in this context.",
        "module": 12
      }
    ]
  }
};
