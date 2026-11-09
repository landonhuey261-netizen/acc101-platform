// ase-a6 — Midterm and Final exams.
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
        "q": "A technician knows the current and the resistance in a circuit and needs the voltage. According to Ohm's law, how is voltage found from current and resistance?",
        "choices": [
          "Current divided by resistance",
          "Current multiplied by resistance",
          "Resistance divided by current",
          "Current plus resistance"
        ],
        "answer": 1,
        "explanation": "Correct: (b). V = I × R. (a) Current divided by resistance is not voltage. (c) Resistance divided by current is not voltage. (d) Adding current and resistance mixes units."
      },
      {
        "module": 1,
        "q": "A circuit has a 12-volt source and a 4-ohm load. The current is:",
        "choices": [
          "3 amps",
          "8 amps",
          "16 amps",
          "48 amps"
        ],
        "answer": 0,
        "explanation": "Correct: (a). I = V ÷ R = 12 ÷ 4 = 3 amps. (b) 8 is 12 − 4. (c) 16 is 12 + 4. (d) 48 is 12 × 4, which is V × R, not V ÷ R."
      },
      {
        "module": 1,
        "q": "A circuit carries 2 amps through a 6-ohm load. The voltage drop across the load is:",
        "choices": [
          "3 volts",
          "4 volts",
          "8 volts",
          "12 volts"
        ],
        "answer": 3,
        "explanation": "Correct: (d). V = I × R = 2 × 6 = 12 volts. (a) 3 is 6 ÷ 2. (b) 4 is 6 − 2. (c) 8 is 6 + 2."
      },
      {
        "module": 1,
        "q": "Two headlights are wired in parallel and one bulb burns out. What happens to the other headlight, and why?",
        "choices": [
          "Gets the full voltage and works independently of the others",
          "Shares the voltage with the other loads",
          "Gets no voltage until the others are on",
          "Stops working if another load fails"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Parallel loads each get full voltage and work independently. (b) That describes a series circuit. (c) Parallel loads do not wait for each other. (d) That describes a series circuit."
      },
      {
        "module": 1,
        "q": "A headlight burns dimly even though the bulb is new and the fuse is good. What kind of fault is most likely?",
        "choices": [
          "An open circuit",
          "A short to ground",
          "High resistance in a connector or wire",
          "A dead battery"
        ],
        "answer": 2,
        "explanation": "Correct: (c). High resistance lets some current through but not enough, so the bulb lights dimly. (a) An open would kill the light completely. (b) A short would blow the fuse. (d) A dead battery would affect the whole car."
      },
      {
        "module": 2,
        "q": "What three jobs does the car battery do?",
        "choices": [
          "Start the engine, power loads with the engine off, and steady the electrical system",
          "Pump fuel, cool the engine, and light the road",
          "Charge the alternator and run the radio",
          "Make spark and spray fuel"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Starting, powering loads with the engine off, and steadying the system are the battery's three jobs. (b) Those are fuel, cooling, and lighting jobs. (c) The alternator charges the battery, not the other way around. (d) Those are ignition and fuel jobs."
      },
      {
        "module": 2,
        "q": "Why is a car battery built with six cells?",
        "choices": [
          "Each cell makes about two volts, and six in series make the battery's nominal voltage",
          "Six is the legal minimum",
          "Each cell powers one cylinder",
          "The alternator needs six cells"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Six two-volt cells in series give the battery its voltage. (b) There is no legal minimum of six cells. (c) Cells do not power individual cylinders. (d) The alternator charges the battery."
      },
      {
        "module": 2,
        "q": "A battery reads a healthy voltage with the engine off, but its voltage collapses the moment the starter is cranked. What does that tell you about the battery?",
        "choices": [
          "Healthy",
          "Worn out — it cannot deliver current when asked",
          "Overcharged",
          "Too new"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Resting voltage is easy; the load test decides, and this battery fails it. (a) A healthy battery holds its voltage under load. (c) Overcharging shows as high voltage and damage. (d) A new battery would hold its voltage."
      },
      {
        "module": 2,
        "q": "A battery that started a car all summer fails on the first cold morning of winter. Why does cold weather expose a weak battery?",
        "choices": [
          "The battery gets bigger",
          "Cold thickens the oil so the starter needs more current, while the cold battery can deliver less",
          "The fuel freezes solid",
          "The tires get flat"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Cold raises demand and lowers supply at the same time. (a) Batteries do not get bigger in the cold. (c) Fuel does not freeze solid in a car. (d) Tires lose some pressure in the cold but that does not stop starting."
      },
      {
        "module": 2,
        "q": "A battery's capacity — how much energy it can store — is measured in what unit?",
        "choices": [
          "Volts",
          "Amps",
          "Amp-hours",
          "Ohms"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Amp-hours measure how much energy the battery stores. (a) Volts measure push. (b) Amps measure current flow. (d) Ohms measure resistance."
      },
      {
        "module": 3,
        "q": "Trace the starting circuit: in what order do the parts act from the moment the driver turns the key?",
        "choices": [
          "Battery → starter motor → solenoid → ignition switch",
          "Ignition switch → relay → solenoid → starter motor",
          "Solenoid → battery → relay → ignition switch",
          "Relay → battery → starter motor → solenoid"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Switch to relay to solenoid to motor — small current controlling larger current at each step. (a) and (c) put the parts in the wrong order. (d) The relay does not feed the battery."
      },
      {
        "module": 3,
        "q": "The key is turned, there is one loud click, and the engine does not crank. What is the most likely fault?",
        "choices": [
          "A dead battery",
          "Worn solenoid contacts — the solenoid pulls in but does not pass current to the motor",
          "A blown headlight fuse",
          "A flat tire"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The click proves the solenoid coil works; the missing crank proves its contacts do not pass current. (a) A dead battery usually gives repeated clicking or nothing. (c) A headlight fuse has nothing to do with cranking. (d) A tire does not affect cranking."
      },
      {
        "module": 3,
        "q": "The key is turned and the starter clicks rapidly, over and over, without cranking the engine. What is the most likely cause?",
        "choices": [
          "The starter motor is new",
          "A weak battery that cannot hold the solenoid in",
          "The fuel tank is full",
          "The alternator is overcharging"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The solenoid pulls in, the voltage drops, it drops out, and the cycle repeats. (a) A new starter would crank strongly. (c) Fuel level does not affect the solenoid. (d) Overcharging is a charging-system fault."
      },
      {
        "module": 3,
        "q": "A car refuses to crank with the shifter in Park, but cranks normally when shifted to Neutral. Which part has failed?",
        "choices": [
          "Starter motor",
          "Neutral safety switch",
          "Battery",
          "Alternator"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The starter works in Neutral, proving the battery and starter are healthy — only the Park position of the safety switch has failed. (a) A faulty starter would fail in Neutral too. (c) A faulty battery would fail in Neutral too. (d) The alternator charges the battery; it does not control cranking."
      },
      {
        "module": 4,
        "q": "Once the engine is running, what two jobs does the charging system do?",
        "choices": [
          "Start the engine and pump the fuel",
          "Power the electrical loads while the engine runs and recharge the battery",
          "Cool the engine and light the road",
          "Open the windows and run the radio"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Powering the loads and recharging the battery are the charging system's two jobs. (a) Starting is the starter's job. (c) Cooling and lighting are separate systems. (d) Windows and radio are loads, not the charging system's job."
      },
      {
        "module": 4,
        "q": "The alternator's coils make alternating current, but the car runs on direct current. Which part changes the alternator's output into direct current?",
        "choices": [
          "Turn the alternator's alternating current into direct current",
          "Spin the rotor",
          "Regulate the voltage",
          "Drive the belt"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Diodes let current flow in one direction only, turning AC into DC. (b) The belt spins the rotor. (c) The regulator controls the voltage. (d) The engine drives the belt."
      },
      {
        "module": 4,
        "q": "The alternator's output rises with engine speed. What does the voltage regulator prevent by adjusting that output?",
        "choices": [
          "Both overcharging and undercharging, by adjusting the alternator's output to hold the voltage steady",
          "The engine from overheating",
          "The brakes from wearing",
          "The tires from going flat"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The regulator holds the voltage steady whatever the speed and the loads. (b) Cooling is the cooling system's job. (c) Brakes are a separate system. (d) Tires are a separate system."
      },
      {
        "module": 4,
        "q": "The driver switches the ignition on with the engine off, then starts the engine. What should the charging warning light do?",
        "choices": [
          "Stay on all the time",
          "Come on with the ignition and the engine off, and go out once the engine runs and the alternator charges",
          "Never come on",
          "Flash when the fuel is low"
        ],
        "answer": 1,
        "explanation": "Correct: (b). On with the ignition and the engine off is normal; out once running means the alternator is charging. (a) A light that stays on means the alternator is not charging. (c) A light that never comes on can mean a burned-out bulb. (d) The fuel gauge warns about fuel."
      },
      {
        "module": 4,
        "q": "A battery passes a load test, yet it keeps going flat every few days. What is the most likely cause?",
        "choices": [
          "The battery is too big",
          "The charging system is undercharging",
          "The tires are low",
          "The radio is too loud"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A healthy battery that keeps going flat is not being recharged — test the charging system. (a) A big battery holds more charge, not less. (c) Tires do not drain the battery. (d) The radio is a small load."
      },
      {
        "module": 5,
        "q": "The left headlight is out, but the right one works perfectly. What are the most likely causes, and why is a system-wide fault unlikely?",
        "choices": [
          "A dead battery",
          "A burned-out bulb, a failed connector, or a bad ground on that one light",
          "A failed alternator",
          "A blown main fuse"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The circuits are parallel, so a single-light fault is in that light's own bulb, connector, or ground. (a) A dead battery would affect both lights. (c) A failed alternator would dim all the lights. (d) A blown main fuse would kill far more than one light."
      },
      {
        "module": 5,
        "q": "The heater blower works on its highest speed but on no lower speed. Which part has most likely failed?",
        "choices": [
          "Blower motor",
          "Blower resistor",
          "Fuse",
          "Battery"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The highest speed bypasses the resistor, so it still works when the resistor is dead. (a) A failed motor would not work on any speed. (c) A blown fuse would kill all speeds. (d) A dead battery would affect the whole car."
      },
      {
        "module": 5,
        "q": "A fuse blows the moment it is replaced, and the next one blows too. What does that mean?",
        "choices": [
          "The fuse is too small",
          "There is a short circuit to find and repair",
          "The battery is too big",
          "The lights are too bright"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A fuse that blows again and again means current is taking a shortcut to ground. (a) The fuse size is set by the circuit; a larger fuse would let the wiring overheat. (c) Battery size does not blow fuses. (d) Bright lights do not blow fuses."
      },
      {
        "module": 6,
        "q": "On a wiring diagram, two wires cross with a small dot at the crossing. What does that dot mean?",
        "choices": [
          "The wires are joined",
          "The wires are not connected",
          "The wires are damaged",
          "The wires are the same color"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A dot marks a junction — the wires are the same electrical point. (b) A crossing without a dot means no connection. (c) Damage is not shown by a dot. (d) Wire color is written as a code, not shown by a dot."
      },
      {
        "module": 6,
        "q": "A headlight is dead and you have the wiring diagram. How do you use the diagram to find the fault?",
        "choices": [
          "Replace the load first",
          "Measure at points along the circuit; the fault sits between the last good reading and the first bad one",
          "Guess the most expensive part",
          "Ignore the diagram and follow the wire by eye"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Testing point by point narrows the fault to the section between two readings. (a) Replacing the load first wastes money when the fault is upstream. (c) Guessing is not diagnosis. (d) Following a wire by eye cannot show you what is inside a relay or a switch."
      },
      {
        "module": 6,
        "q": "A dead horn has full voltage at its connector. Where is the fault?",
        "choices": [
          "The fuse",
          "The load itself or its ground path",
          "The switch",
          "The relay"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Power reaching the load proves the fuse, switch, and relay are working — the load has failed or its ground is broken. (a), (c), and (d) are all upstream of the connector, so they would have stopped the power from arriving."
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
        "q": "A circuit has a 12-volt source and a 3-ohm load. The current is:",
        "choices": [
          "4 amps",
          "9 amps",
          "15 amps",
          "36 amps"
        ],
        "answer": 0,
        "explanation": "Correct: (a). I = V ÷ R = 12 ÷ 3 = 4 amps. (b) 9 is 12 − 3. (c) 15 is 12 + 3. (d) 36 is 12 × 3, which is V × R, not V ÷ R."
      },
      {
        "module": 1,
        "q": "A circuit carries 4 amps through a 3-ohm load. The voltage drop across the load is:",
        "choices": [
          "0.75 volts",
          "1 volt",
          "7 volts",
          "12 volts"
        ],
        "answer": 3,
        "explanation": "Correct: (d). V = I × R = 4 × 3 = 12 volts. (a) 0.75 is 3 ÷ 4. (b) 1 is neither the product nor the quotient. (c) 7 is 4 + 3."
      },
      {
        "module": 1,
        "q": "Current is taking a shortcut to ground and blowing a fuse. What is that fault called?",
        "choices": [
          "A break in the circuit",
          "Current taking a shortcut it should not take, usually to ground",
          "A wire that is too short",
          "A battery that is too small"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A short bypasses the load, usually to ground, and blows a fuse or overheats a wire. (a) A break is an open. (c) Wire length does not make a short. (d) Battery size does not make a short."
      },
      {
        "module": 2,
        "q": "A car's battery terminals are covered in crusty buildup and the car cranks slowly. What does that buildup do to the starter's current?",
        "choices": [
          "The battery to overcharge",
          "Resistance that blocks the starter's large current, so the car cranks slowly or not at all",
          "The alternator to fail",
          "The radio to get louder"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Corrosion resists current flow, and the starter needs a large current. (a) Corrosion does not overcharge the battery. (c) The alternator is a separate system. (d) The radio is unaffected by terminal corrosion."
      },
      {
        "module": 2,
        "q": "A technician is about to test a battery that may be failing. In what order should the tests be done?",
        "choices": [
          "Load test, then voltage, then inspect",
          "State of charge (voltage, engine off), inspect, then load test",
          "Replace the battery, then test",
          "Inspect only"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Check the charge first (a flat battery cannot be judged), inspect, then load test to decide. (a) Load-testing a flat battery tells you nothing. (c) Replacing before testing wastes money. (d) Inspection alone cannot judge a battery's health."
      },
      {
        "module": 2,
        "q": "A technician is about to work around a battery. Which safety rules matter most?",
        "choices": [
          "Wear eye protection and keep sparks and flames away — batteries make explosive gas and contain acid",
          "Wear gloves only",
          "Keep the battery warm",
          "Disconnect the positive cable first"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Eye protection and no ignition sources are the core battery safety rules. (b) Gloves help, but eye protection and no sparks are the key rules. (c) Warming the battery is not a safety rule. (d) The negative cable is disconnected first, not the positive."
      },
      {
        "module": 3,
        "q": "The starter solenoid is energized when the key is turned. What two things does it do at the same time?",
        "choices": [
          "Charges the battery and starts the engine",
          "Pushes the drive gear into the flywheel and closes the heavy contacts that feed the motor",
          "Opens the throttle and turns on the fuel pump",
          "Locks the steering and sets the alarm"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The solenoid engages the gear and closes the heavy switch — one plunger, two jobs. (a) The alternator charges the battery. (c) The throttle and fuel pump are separate systems. (d) The steering lock and alarm are separate systems."
      },
      {
        "module": 3,
        "q": "A starter turns the engine, but too slowly for it to start. What are the possible causes?",
        "choices": [
          "A weak battery, corroded cables, or a failing starter motor",
          "A full fuel tank",
          "A new air filter",
          "A charged battery"
        ],
        "answer": 0,
        "explanation": "Correct: (a). All three reduce the current or the motor's ability to turn the engine. (b) Fuel level does not affect cranking speed. (c) A new filter improves breathing. (d) A charged battery cranks strongly."
      },
      {
        "module": 3,
        "q": "The starter draws the largest current in the car. Why does the ignition switch control a relay instead of switching that current directly?",
        "choices": [
          "The relay is cheaper",
          "The starter's large current would burn out the ignition switch if it were switched directly",
          "The relay makes the car faster",
          "The battery is too small"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The switch handles a small current; the relay's contacts handle the large one. (a) Cost is not the reason. (c) A relay does not make the car faster. (d) Battery size is unrelated."
      },
      {
        "module": 4,
        "q": "The alternator's belt spins a magnet inside coils of wire. What does that spinning make?",
        "choices": [
          "Burning fuel",
          "Spinning a magnet inside coils of wire",
          "Storing charge in plates",
          "Pumping oil"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The spinning rotor's magnetic field makes current in the stator coils. (a) The alternator does not burn fuel. (c) Storing charge is the battery's job. (d) The oil pump moves oil."
      },
      {
        "module": 4,
        "q": "The alternator's drive belt is slipping. What happens to the charging system?",
        "choices": [
          "The alternator to stop charging, so the car runs on the battery until it dies",
          "The engine to overheat only",
          "The brakes to fail",
          "The headlights to get brighter"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The belt drives the alternator; a slipping belt means the alternator spins too slowly or not at all. (b) A slipping belt can also affect the water pump, but the charging failure is the point here. (c) Brakes are a separate system. (d) A slipping belt dims the lights, it does not brighten them."
      },
      {
        "module": 4,
        "q": "A battery's electrolyte is boiling away and the battery smells of acid. What is damaging the battery?",
        "choices": [
          "Freezing the electrolyte",
          "Boiling the electrolyte away",
          "Making the battery bigger",
          "Charging it too fast once"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Too much voltage boils the electrolyte away and damages the plates. (a) Cold does not boil electrolyte. (c) Batteries do not get bigger from overcharging. (d) One fast charge is not the same as sustained overcharging."
      },
      {
        "module": 5,
        "q": "Every light in the car is dim at the same time, including the interior lights. What kind of fault does that pattern suggest?",
        "choices": [
          "A burned-out bulb",
          "A charging-system problem or a bad main ground",
          "A failed turn-signal flasher",
          "A dirty windshield"
        ],
        "answer": 1,
        "explanation": "Correct: (b). All lights dim at once means the whole system is starved — low voltage or a bad main ground. (a) One bulb cannot dim all the lights. (c) The flasher only affects the turn signals. (d) A dirty windshield does not dim the lights."
      },
      {
        "module": 5,
        "q": "The turn signals on the left side flash much faster than normal. What is the most likely cause?",
        "choices": [
          "The flasher is new",
          "A burned-out bulb on that side — the flasher's timing depends on the load",
          "The battery is overcharged",
          "The steering wheel is turned"
        ],
        "answer": 1,
        "explanation": "Correct: (b). With one bulb out the load is smaller, so the flasher cycles faster. (a) A new flasher would flash at the normal rate. (c) Overcharging does not change the flash rate. (d) Steering does not change the flash rate."
      },
      {
        "module": 5,
        "q": "The headlight switch on the dashboard is small, yet it controls headlights that draw a large current. How is that arranged?",
        "choices": [
          "The dashboard switch only handles a small current while the relay's contacts carry the large current to the lights",
          "The lights use less power",
          "The fuse can be smaller",
          "The battery lasts longer"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The relay does the heavy switching so the dashboard switch stays small and cool. (b) The lights use the same power either way. (c) Fuse size is set by the load, not the relay. (d) The relay does not change how much energy the lights use."
      },
      {
        "module": 6,
        "q": "A technician needs to understand how a circuit is connected before testing it. What does a wiring diagram show?",
        "choices": [
          "A photograph of the car's wiring",
          "An electrical map showing every part in a circuit and how the parts connect",
          "A list of part numbers",
          "A drawing of where parts sit in the car"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A diagram maps connections, not physical locations. (a) A photograph shows locations, not connections. (c) A parts list is not a diagram. (d) Physical locations come from the component location data, not the diagram."
      },
      {
        "module": 6,
        "q": "A technician needs the diagram for the starting circuit. How are the service information's diagrams organized so it can be found?",
        "choices": [
          "Alphabetical part name",
          "System — starting, charging, lighting, engine controls, body controls",
          "Wire color",
          "Price of the parts"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Diagrams are grouped by system so you can find the one for the circuit you are working on. (a) Parts are not listed alphabetically in the diagrams. (c) Wire color is a detail inside a diagram, not how they are organized. (d) Price has nothing to do with it."
      },
      {
        "module": 6,
        "q": "A wiring diagram has a small key in the corner explaining its symbols. What does that key tell you?",
        "choices": [
          "The price of the parts",
          "What the symbols and wire colors on that diagram mean",
          "How long the repair will take",
          "The car's history"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The legend is the key to the diagram's symbols and color codes. (a) Prices are not on diagrams. (c) Repair times are in the labor data, not the diagram. (d) The car's history is not on a wiring diagram."
      },
      {
        "module": 7,
        "q": "A technician wants to measure the voltage across a headlight bulb while it is on. How should the meter leads be connected?",
        "choices": [
          "In series with the circuit",
          "Across the part or circuit, while it is powered",
          "To the battery only",
          "With the power off"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Voltage is measured across two points while the circuit is powered. (a) In series is how current is measured. (c) Voltage can be measured across any part, not just the battery. (d) Resistance is measured with the power off; voltage is not."
      },
      {
        "module": 7,
        "q": "A technician wants to measure a sensor's resistance. What must be done before the meter is connected?",
        "choices": [
          "Keep the power on",
          "Switch the power off and disconnect the part, so the meter is the only source of current",
          "Use the highest voltage range",
          "Measure across the battery"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The meter sends its own test current; circuit voltage would fight it and make the reading meaningless. (a) Power on is exactly what you must not do. (c) Resistance is measured on a resistance range, not a voltage range. (d) The battery is a voltage source, not a resistance to measure."
      },
      {
        "module": 7,
        "q": "A multimeter shows one number at a time, but a sensor's signal switches on and off rapidly. Which tool shows voltage changing over time?",
        "choices": [
          "One number at a time",
          "Voltage over time, as a waveform",
          "Only the battery voltage",
          "Only resistance"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A scope plots voltage against time, revealing pulses and patterns. (a) One number at a time is a multimeter. (c) A scope can show any signal, not just the battery. (d) A scope does not measure resistance."
      },
      {
        "module": 7,
        "q": "A sensor reads correctly on a multimeter, yet it still sets a fault code. What kind of fault is most likely, and which tool will show it?",
        "choices": [
          "A fault in the pattern of its signal, which only a scope will show",
          "A dead battery",
          "A blown fuse",
          "No fault at all"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The average can be right while the waveform is ragged or bouncing — the fault is in the pattern. (b) A dead battery would affect the whole car. (c) A blown fuse would stop the sensor entirely. (d) The fault code means there is a fault to find."
      },
      {
        "module": 8,
        "q": "A control module reads its sensors, decides what to do, and commands its actuators. What is that three-step loop called?",
        "choices": [
          "Input, processing, output",
          "Power, ground, fuse",
          "Fuel, spark, air",
          "Start, stop, park"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Sensors in, decision, actuators out — the loop every module runs. (b) Power, ground, and fuse are the module's supply, not its loop. (c) Fuel, spark, and air are engine things, not the module's loop. (d) Start, stop, and park are driver actions."
      },
      {
        "module": 8,
        "q": "A scan tool shows a code saying a sensor's signal is out of range. What has most likely failed?",
        "choices": [
          "The module has failed",
          "The sensor or its wiring has failed — the module is reporting what it sees",
          "The battery is dead",
          "The fuse is blown"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The module reports what it sees; a lying input makes a code, not a broken module. (a) Module faults are rare. (c) A dead battery would affect the whole car. (d) A blown fuse would stop the circuit entirely."
      },
      {
        "module": 8,
        "q": "A new control module is about to be fitted to a car. What must be done to it besides bolting it in?",
        "choices": [
          "Bolted in only",
          "Programmed with the right software and calibration for that exact car",
          "Painted to match",
          "Left unplugged"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Software and calibration tune the module to the car; the wrong calibration causes faults. (a) Bolting it in is not enough. (c) Paint is irrelevant. (d) An unplugged module does nothing."
      },
      {
        "module": 8,
        "q": "A module is suspected of being faulty. In what order should the diagnosis be done?",
        "choices": [
          "Replace the module, then test",
          "Module power and ground, then inputs, then outputs — and only then the module itself",
          "Replace the sensors, then the module",
          "Ignore the module and replace the battery"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Power and ground first, then inputs, then outputs, module last — because module faults are rare and modules are expensive. (a) Replacing first is the most expensive mistake in this course. (c) Replacing sensors without testing is also guessing. (d) The battery is unrelated to a module fault."
      },
      {
        "module": 9,
        "q": "Dozens of modules in a car need to share information with each other. What shared pair of wires carries their messages?",
        "choices": [
          "A single wire to each sensor",
          "A shared pair of wires that the car's modules use to send each other messages",
          "A type of battery",
          "A kind of fuse"
        ],
        "answer": 1,
        "explanation": "Correct: (b). One shared pair carries hundreds of signals as messages. (a) A wire to each sensor is the old way networks replaced. (c) A battery stores energy; it is not a network. (d) A fuse protects a circuit; it is not a network."
      },
      {
        "module": 9,
        "q": "A CAN bus message carries more than just a value. What two parts does each message have?",
        "choices": [
          "Only a voltage",
          "An identifier saying what it is, and data carrying the value",
          "A fuse",
          "A battery"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The identifier names the message and sets its priority; the data carries the value. (a) A message is data, not just a voltage. (c) A fuse is a protection device. (d) A battery is a power source."
      },
      {
        "module": 9,
        "q": "A scan tool shows that every module in the car has stopped answering at the same time. What kind of fault does that point to?",
        "choices": [
          "One module has failed",
          "The bus wiring — the two bus wires shorted together or to ground, or a module jamming the bus",
          "A burned-out headlight bulb",
          "A flat tire"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Every module silent at once means the bus itself is down, not any one module. (a) One failed module would leave the others talking. (c) A bulb is a load, not a network part. (d) A tire has nothing to do with the network."
      },
      {
        "module": 9,
        "q": "One module has stopped answering, but every other module answers normally. What should be checked first?",
        "choices": [
          "The bus wiring for the whole car",
          "That module's power and ground",
          "The battery's age",
          "The tires"
        ],
        "answer": 1,
        "explanation": "Correct: (b). One silent module points at that module's own power or ground — the rest of the network is working. (a) The whole bus would affect all modules. (c) Battery age does not silence one module. (d) Tires are unrelated."
      },
      {
        "module": 10,
        "q": "Current flows through a corroded connection, and some voltage is lost across it. What is that lost voltage called?",
        "choices": [
          "The battery's voltage when the car is off",
          "The voltage lost across a wire or connection while current flows through it",
          "The voltage of a blown fuse",
          "The resistance of a wire"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Voltage is lost across any resistance when current flows; a large loss means high resistance at that point. (a) Battery voltage with the car off is the resting voltage. (c) A blown fuse has no voltage across it because no current flows. (d) Resistance is measured in ohms, not volts."
      },
      {
        "module": 10,
        "q": "A connection looks fine on a resistance test with the power off, but the starter still cranks slowly. Why is a voltage drop test the better test here?",
        "choices": [
          "It is the fastest test",
          "It tests the circuit while it is working under its real load, catching faults a power-off resistance test misses",
          "It needs no meter",
          "It works with the battery removed"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The fault only shows itself when the real current flows. (a) Speed is not the reason. (c) It needs a voltmeter. (d) It needs the battery connected and the circuit powered."
      },
      {
        "module": 10,
        "q": "A car is switched off and everything should be asleep, yet current keeps flowing and the battery dies overnight. What is that current called?",
        "choices": [
          "Current that flows while the engine runs",
          "Current that keeps flowing after the car is switched off and everything should be asleep",
          "The starter's current",
          "The alternator's output"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Draw after switch-off drains the battery overnight. (a) Current while running is normal load, not parasitic draw. (c) The starter draws current only while cranking. (d) The alternator's output charges the battery."
      },
      {
        "module": 10,
        "q": "A technician is testing for a battery drain. Under what conditions must the draw test be done?",
        "choices": [
          "With the engine running",
          "With the car switched off and the modules asleep, the meter in series with the battery",
          "With all the doors open",
          "With the headlights on"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The car must be off and asleep so the meter reads the true draw. (a) With the engine running, the alternator supplies the loads. (c) Open doors wake the modules and ruin the reading. (d) Headlights on is a load, not a draw test."
      },
      {
        "module": 11,
        "q": "A hybrid car has a familiar low-voltage system for its lights and computers. What is its other electrical system?",
        "choices": [
          "A second low-voltage system",
          "A high-voltage system, running at roughly 200 to 450 volts DC, that drives the car",
          "A solar panel",
          "A second battery of the same voltage"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The high-voltage system powers the electric motor and runs at roughly 200 to 450 volts DC. (a) A second low-voltage system would not drive the car. (c) Solar panels are not part of the drive system. (d) A second battery of the same voltage would not drive the car."
      },
      {
        "module": 11,
        "q": "A hybrid's battery pack makes direct current, but its motor needs alternating current. Which part changes one into the other?",
        "choices": [
          "Charge the low-voltage battery",
          "Turn the battery pack's direct current into alternating current for the motor, and back again during regenerative braking",
          "Start the gasoline engine",
          "Pump coolant"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The inverter converts DC to AC for the motor and AC back to DC when the motor generates during braking. (a) A DC-to-DC converter charges the low-voltage battery. (c) The starter starts the engine. (d) The water pump moves coolant."
      },
      {
        "module": 11,
        "q": "A technician is about to work on a hybrid's high-voltage system. What must be done before touching any high-voltage part?",
        "choices": [
          "Switch it off and start work",
          "De-power it per the manufacturer's procedure and verify it is dead with a meter rated for high voltage",
          "Disconnect the low-voltage battery only",
          "Wear gloves only"
        ],
        "answer": 1,
        "explanation": "Correct: (b). De-powering plus verification is the procedure — never trust a switch or a light. (a) Switching off alone does not prove the system is dead. (c) The low-voltage battery is a separate system. (d) Gloves alone do not make a live system safe."
      },
      {
        "module": 12,
        "q": "A module is suspected, but the technician has not checked anything else yet. Where does the module sit in the order of suspects?",
        "choices": [
          "The first suspect",
          "The last suspect, after power, ground, inputs, and outputs have been checked",
          "Never a suspect",
          "The only suspect"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Module faults are rare and modules are expensive; most module codes are sensor, wiring, or actuator faults. (a) Suspecting the module first is the most expensive mistake in this course. (c) Modules can fail, just rarely. (d) The module is one suspect among many."
      },
      {
        "module": 12,
        "q": "A car is dead every morning, starts with a jump, and runs well all day. The battery and charging system both test healthy. What is the most likely problem?",
        "choices": [
          "A dead battery",
          "A parasitic draw draining the battery overnight",
          "A failed alternator",
          "A broken starter"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The battery passes a load test and the charging system is healthy, so the energy is being used after switch-off. (a) A dead battery would fail a load test. (c) A failed alternator would not let the car run well all day. (d) A broken starter would not crank even with a jump."
      },
      {
        "module": 12,
        "q": "A student is preparing for the ASE A6 test. Which areas does that test cover?",
        "choices": [
          "Only batteries",
          "General electrical diagnosis, batteries, starting and charging, lighting and accessories, wiring diagrams, and electronic controls and networks",
          "Only transmissions",
          "Only engines"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A6 covers the whole electrical system. (a) Batteries are only one area. (c) Transmissions are ASE A2 and A3. (d) Engines are ASE A1."
      }
    ]
  }
};
