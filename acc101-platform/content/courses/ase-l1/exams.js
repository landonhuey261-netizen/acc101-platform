// ase-l1 - Midterm and final exams
module.exports = {
  "midterm": {
    "title": "L1 Midterm Exam",
    "minutes": 75,
    "coverage": "Modules 1–6",
    "questions": [
      {
        "module": 1,
        "q": "A four-cylinder engine hesitates only on hard acceleration, never at idle or light cruise. Fuel trims are near normal and there are no codes. The most likely next step is to:",
        "choices": ["Replace the fuel pump", "Check the ignition system under load, because an ignition fault appears when cylinder pressure rises", "Replace the catalytic converter", "Clean the throttle body"],
        "answer": 1,
        "explanation": "Correct: (b). Load raises cylinder pressure and stresses ignition; an ignition fault often shows only then. (a) The fuel pump is one possibility but the load-only pattern points at ignition first. (c) A converter fault would show at other speeds too. (d) A dirty throttle body causes idle problems, not a load-only hesitation."
      },
      {
        "module": 1,
        "q": "On a misfire diagnosis, the technician finds a steady idle, a pending misfire code for cylinder 3, and a fuel trim of +2%. The best first test is to:",
        "choices": ["Replace the injector on cylinder 3", "Swap cylinder 3's coil and plug with another cylinder and see if the misfire follows", "Replace the catalytic converter", "Clear the code and road-test"],
        "answer": 1,
        "explanation": "Correct: (b). A swap isolates the coil or plug from the cylinder — if the misfire moves, the part is proven bad. (a) Replacing the injector first is a guess with no test behind it. (c) The converter is a victim of misfire, not its cause. (d) Clearing destroys the evidence before the fault is found."
      },
      {
        "module": 2,
        "q": "A vehicle has a stored P0171 (system too lean, bank 1) and a long-term fuel trim of +18% at idle, falling to +4% at cruise. The pattern most likely indicates:",
        "choices": ["A vacuum leak after the throttle body", "A weak fuel pump", "A dead oxygen sensor", "A clogged catalytic converter"],
        "answer": 0,
        "explanation": "Correct: (a). A vacuum leak adds unmetered air at idle, where it matters most; at cruise the leak is a smaller share of the airflow. (b) A weak pump shows up under load, not at idle. (c) A dead sensor would set a sensor code. (d) A clogged converter restricts exhaust, not the fuel mixture."
      },
      {
        "module": 2,
        "q": "Freeze-frame data on a lean code shows a cold engine, a short trip, and low coolant temperature. The most useful conclusion is that:",
        "choices": ["The code was set during warm-up, when the engine runs rich and a leak has less effect", "The freeze-frame proves the sensor is faulty", "The code was set during steady cruise", "The freeze-frame is useless"],
        "answer": 0,
        "explanation": "Correct: (a). The conditions at the time of the code tell you what the engine was doing when it failed — here, a cold engine on a short trip, which shapes the diagnosis. (b) Freeze-frame does not prove a sensor fault by itself. (c) The data shows a cold engine, not steady cruise. (d) Freeze-frame is one of the best clues a code carries."
      },
      {
        "module": 2,
        "q": "An oxygen sensor's waveform shows a lazy, slow response but no sensor code is set. The technician should:",
        "choices": ["Ignore it, because no code means the sensor is fine", "Treat the slow response as a clue — a lazy sensor can still cause a mixture problem without setting a code", "Replace the catalytic converter", "Clear the codes"],
        "answer": 1,
        "explanation": "Correct: (b). A sensor can be slow enough to hurt the mixture but not slow enough to set a code — the waveform is the evidence. (a) No code does not mean no fault. (c) The converter is not the cause of a slow sensor waveform. (d) Clearing destroys the data."
      },
      {
        "module": 3,
        "q": "On the practice CV4 vehicle — four-cylinder gasoline, coil-on-plug, port fuel injection — the booklet lists the normal long-term fuel trim as −5% to +5%. A scan shows +18% at idle and +3% at cruise. The booklet value tells the technician that:",
        "choices": ["The trim is normal", "+18% is outside the reference range, so the engine is lean at idle", "The reference range is for cruise only", "The trim is irrelevant"],
        "answer": 1,
        "explanation": "Correct: (b). The booklet's range is the standard; +18% at idle is far outside it, so the engine is lean at idle. (a) +18% is well outside −5% to +5%. (c) The range applies to the trim generally, not to cruise only. (d) The trim is the key clue in this case."
      },
      {
        "module": 3,
        "q": "A question stem gives a CV4 symptom and a list of reference values. The correct way to use the booklet is to:",
        "choices": ["Memorize the booklet before the test", "Read the question, decide what data you need, look it up, and trust it over memory", "Skip the booklet and guess from experience", "Look up every value in the booklet before reading the question"],
        "answer": 1,
        "explanation": "Correct: (b). The booklet is a reference to be consulted question-first — the question tells you what to look up. (a) The booklet is too large to memorize and is on screen during the test. (c) Guessing wastes the reference that is provided. (d) Looking up values before reading the question wastes time."
      },
      {
        "module": 3,
        "q": "The real L1 test's Composite Vehicle Type 4 Reference Booklet contains:",
        "choices": ["The answers to the test questions", "Specifications, diagrams, and reference values for the composite vehicle", "A list of every ASE test", "Repair procedures for all vehicles"],
        "answer": 1,
        "explanation": "Correct: (b). The booklet is a reference — specs, diagrams, and values for the CV4 — not an answer key. (a) The booklet holds data, not answers. (c) It covers only the CV4. (d) It covers one composite vehicle, not all vehicles."
      },
      {
        "module": 3,
        "q": "The practice vehicle used in this course is:",
        "choices": ["The exact ASE Composite Vehicle Type 4", "A fictional stand-in — four-cylinder, coil-on-plug, port injection — used to practice the booklet skill", "A real car in the instructor's shop", "A diesel engine"],
        "answer": 1,
        "explanation": "Correct: (b). The practice vehicle is a stand-in for learning the method; the real CV4's data lives only in ASE's booklet. (a) ASE's CV4 cannot be reproduced in this course. (c) It is fictional, not a real shop car. (d) The practice vehicle is a gasoline engine, not a diesel."
      },
      {
        "module": 4,
        "q": "A scan tool cannot communicate with the vehicle. The battery is good and the tool works on other vehicles. The first check is to:",
        "choices": ["Replace the computer", "Check the diagnostic connector's power and ground pins", "Replace the scan tool", "Clear the codes"],
        "answer": 1,
        "explanation": "Correct: (b). A dead connector power pin is a common, cheap cause of a no-communication fault — and a multimeter check takes a minute. (a) Replacing the computer before checking the connector is a costly guess. (c) The tool works on other vehicles, so it is not the fault. (d) Codes cannot be cleared without communication."
      },
      {
        "module": 4,
        "q": "The resistance across the CAN bus at the diagnostic connector measures about 60 ohms with the battery disconnected. This reading indicates:",
        "choices": ["An open circuit in the bus", "A healthy bus — the two terminating resistors in parallel", "A short to ground", "A dead computer"],
        "answer": 1,
        "explanation": "Correct: (b). Two terminating resistors in parallel give about 60 ohms; that is the expected healthy reading. (a) An open reads about 120 ohms — one resistor only. (c) A short to ground reads near zero. (d) Resistance alone does not prove a computer is dead."
      },
      {
        "module": 4,
        "q": "A vehicle sets U-codes for several modules at once, and the engine runs normally. The most likely cause is:",
        "choices": ["All of the modules failed at the same time", "A network fault — a bad connection, a damaged wire, or a module dragging the bus down", "A dead battery", "A faulty gas cap"],
        "answer": 1,
        "explanation": "Correct: (b). Multiple modules losing communication at once points at the shared network, not at each module individually. (a) Several modules failing simultaneously is unlikely. (c) A dead battery would stop the engine. (d) A gas cap cannot cause communication codes."
      },
      {
        "module": 4,
        "q": "During CAN diagnosis, disconnecting one module restores communication for all the others. This proves that:",
        "choices": ["The disconnected module was dragging the bus down", "All the other modules are faulty", "The scan tool is broken", "The wiring is shorted to ground"],
        "answer": 0,
        "explanation": "Correct: (a). Restoring communication by removing one module proves that module was the fault — it was corrupting the shared bus. (b) The other modules now communicate, so they are not faulty. (c) The tool now works, so it is fine. (d) A wiring short would remain after the module was removed."
      },
      {
        "module": 5,
        "q": "A vehicle misfires only under load, with no codes at idle. The ignition waveform shows a weak current ramp on one coil. The most likely cause is:",
        "choices": ["A clogged fuel filter", "A weak coil that fails when cylinder pressure rises", "A dead oxygen sensor", "A vacuum leak"],
        "answer": 1,
        "explanation": "Correct: (b). The weak ramp is the clue, and load-dependent failure fits ignition — higher pressure needs a stronger spark. (a) A fuel filter would show up at high fuel demand, but the waveform points at the coil. (c) A sensor fault would set a code and affect the mixture, not one cylinder's ramp. (d) A vacuum leak is worst at idle, not under load."
      },
      {
        "module": 5,
        "q": "A secondary ignition waveform shows a short burn time on one cylinder. The most likely cause is:",
        "choices": ["A rich mixture", "A wide plug gap or a lean mixture — the spark has too little fuel to burn", "A dead battery", "A clogged air filter"],
        "answer": 1,
        "explanation": "Correct: (b). A short burn time means the spark found too little to burn — a wide gap or a lean mixture. (a) A rich mixture lengthens the burn. (c) A battery fault affects cranking, not burn time. (d) A clogged filter enriches the mixture, lengthening the burn."
      },
      {
        "module": 5,
        "q": "A coil-on-plug system has a misfire on cylinder 2. The technician swaps the coil from cylinder 2 with the coil from cylinder 4, and the misfire moves to cylinder 4. This proves:",
        "choices": ["The injector on cylinder 2 is bad", "The coil is bad — the fault followed the part", "The spark plug on cylinder 4 is bad", "The computer is bad"],
        "answer": 1,
        "explanation": "Correct: (b). The fault moved with the coil, so the coil is the fault — the swap is the proof. (a) An injector fault would not move with a coil swap. (c) The plug on cylinder 4 was not moved. (d) A computer fault would not follow one coil."
      },
      {
        "module": 5,
        "q": "A vehicle has a random misfire code, rough idle, and a fuel trim of +12% at idle. The ignition waveforms look normal. The next step is to:",
        "choices": ["Replace all the coils", "Check for a vacuum leak or unmetered air — the lean trim and random misfire point at air, not ignition", "Replace the catalytic converter", "Replace the battery"],
        "answer": 1,
        "explanation": "Correct: (b). Normal waveforms rule out ignition, and the lean trim with a random misfire points at unmetered air. (a) Replacing coils with normal waveforms is a guess. (c) The converter is a victim, not a cause. (d) A battery fault does not cause a lean trim."
      },
      {
        "module": 6,
        "q": "A vehicle surges at cruise, with fuel trims swinging from −8% to +10%. The mass air flow reading is erratic at steady speed. The most likely cause is:",
        "choices": ["A faulty mass air flow sensor", "A clogged catalytic converter", "A dead battery", "A vacuum leak"],
        "answer": 0,
        "explanation": "Correct: (a). An erratic air flow reading at steady speed is a lying sensor, and the swinging trims follow it. (b) A clogged converter restricts exhaust, not the air reading. (c) A battery fault does not make the air reading erratic. (d) A vacuum leak is steady, not erratic, and is worst at idle."
      },
      {
        "module": 6,
        "q": "A vehicle has a lean code and a long crank before starting, with fuel pressure dropping quickly after shutdown. The most likely cause is:",
        "choices": ["A leaking injector or a faulty check valve — pressure is bleeding off", "A dead oxygen sensor", "A clogged air filter", "A weak battery"],
        "answer": 0,
        "explanation": "Correct: (a). Pressure that bleeds off after shutdown points at a leak or a check valve, and the long crank is the engine refilling the system. (b) A sensor fault would set a sensor code. (c) A clogged filter enriches the mixture. (d) A weak battery causes slow cranking, not pressure loss."
      },
      {
        "module": 6,
        "q": "A turbocharged vehicle loses power under boost, with no codes. The most likely first check is to:",
        "choices": ["Replace the turbocharger", "Check boost pressure and look for a leak in the charge piping", "Replace the spark plugs", "Clear the codes"],
        "answer": 1,
        "explanation": "Correct: (b). Lost power under boost with no codes points at the boost system — a leak or a wastegate fault — and a pressure check proves it. (a) Replacing the turbo before testing is a costly guess. (c) Plugs would cause a misfire, not a boost-only power loss. (d) There are no codes to clear."
      },
      {
        "module": 6,
        "q": "A vehicle idles roughly and stalls at stops, but runs fine at speed. The throttle body is dirty. The correct diagnosis is:",
        "choices": ["The throttle body is the cause — it cannot pass enough air at idle", "The fuel pump is weak", "The catalytic converter is clogged", "The battery is dead"],
        "answer": 0,
        "explanation": "Correct: (a). At idle the throttle is nearly closed, so a dirty bore starves the engine of air; at speed the opening is large enough that the dirt matters less. (b) A weak pump shows up under load, not at idle. (c) A clogged converter restricts exhaust at speed. (d) A dead battery prevents cranking."
      },
      {
        "module": 1,
        "q": "A vehicle stalls only when hot, and restarts after cooling. The most useful next step is to:",
        "choices": ["Replace the fuel pump immediately", "Test the suspect components while the fault is present — a hot no-start must be caught hot", "Wait for a code to appear", "Replace the battery"],
        "answer": 1,
        "explanation": "Correct: (b). An intermittent fault must be tested while it is happening; testing a cool engine proves nothing. (a) Replacing the pump without a test is a guess. (c) A hot stall may set no code at all. (d) A battery fault causes a no-crank, not a hot stall."
      },
      {
        "module": 2,
        "q": "A scan shows a pending code but no stored code and no check-engine light. The correct interpretation is:",
        "choices": ["The vehicle is fine — pending codes mean nothing", "The fault happened once but has not recurred enough to set the light — it is a real clue, not a false alarm", "The code should be cleared", "The scan tool is faulty"],
        "answer": 1,
        "explanation": "Correct: (b). A pending code means the monitor detected the fault on one drive cycle; it needs a second failure to set the light. (a) Pending codes are real evidence. (c) Clearing destroys the clue. (d) The tool is reporting correctly."
      },
      {
        "module": 4,
        "q": "The CAN bus resistance at the diagnostic connector reads about 120 ohms. The most likely cause is:",
        "choices": ["A healthy bus", "An open circuit — one terminating resistor is missing from the measurement", "A short to ground", "A dead scan tool"],
        "answer": 1,
        "explanation": "Correct: (b). About 120 ohms means only one terminating resistor is in the circuit — the other is open or disconnected. (a) A healthy bus reads about 60 ohms. (c) A short to ground reads near zero. (d) Resistance is measured with a meter, not the scan tool."
      },
      {
        "module": 5,
        "q": "A vehicle has a hard start when cold, with a long crank and a rich smell. The ignition waveforms are normal. The most likely cause is:",
        "choices": ["A weak coil", "Over-fueling — a leaking injector or a sensor reporting a colder engine than it is", "A clogged catalytic converter", "A vacuum leak"],
        "answer": 1,
        "explanation": "Correct: (b). Normal waveforms rule out ignition, and the rich smell points at too much fuel — a leaking injector or a temperature sensor lying about the cold start. (a) A weak coil would show on the waveform. (c) A clogged converter causes power loss, not a rich smell. (d) A vacuum leak leans the mixture, the opposite of the symptom."
      }
    ]
  },
  "final": {
    "title": "L1 Final Exam",
    "minutes": 120,
    "coverage": "Modules 1–12",
    "questions": [
      {
        "module": 1,
        "q": "A customer reports a vibration at highway speed that disappears below 40 mph. The engine runs smoothly at all speeds. The most likely area to investigate is:",
        "choices": ["The ignition system", "The driveline or tires — the symptom is speed-dependent, not engine-dependent", "The fuel system", "The cooling system"],
        "answer": 1,
        "explanation": "Correct: (b). A smooth engine with a speed-dependent vibration points at the driveline or tires, not the powertrain. (a) An ignition fault would affect the engine's running. (c) A fuel fault would show in driveability, not as a pure vibration. (d) The cooling system does not cause highway vibration."
      },
      {
        "module": 1,
        "q": "A vehicle has a complaint of poor fuel economy, no codes, and fuel trims of +3%. The best first step is to:",
        "choices": ["Replace the oxygen sensors", "Verify the complaint — check tire pressure, driving conditions, and recent service before testing the engine", "Replace the fuel injectors", "Replace the catalytic converter"],
        "answer": 1,
        "explanation": "Correct: (b). Poor economy has many causes outside the engine — tires, load, driving, and service history — and the trims say the engine is running correctly. (a) The sensors are working, given the normal trims. (c) Injectors are a guess with no evidence. (d) The converter has no symptom pointing at it."
      },
      {
        "module": 2,
        "q": "A vehicle sets a P0420 catalyst efficiency code. The upstream oxygen sensor switches normally and the downstream sensor switches slowly. The most likely cause is:",
        "choices": ["A dead upstream oxygen sensor", "A weak catalytic converter — the downstream sensor is tracking the upstream one", "A vacuum leak", "A faulty gas cap"],
        "answer": 1,
        "explanation": "Correct: (b). A healthy converter holds the downstream sensor steady; a downstream sensor switching like the upstream one means the converter is not cleaning the exhaust. (a) The upstream sensor is switching normally. (c) A vacuum leak would set a lean code. (d) A gas cap sets an EVAP code, not a catalyst code."
      },
      {
        "module": 2,
        "q": "A vehicle has a stored P0174 (system too lean, bank 2) only. Bank 1 trims are normal. The most likely cause is:",
        "choices": ["A weak fuel pump", "A fault affecting bank 2 only — a vacuum leak on that bank, or a bank-2 injector or sensor", "A clogged air filter", "A dead battery"],
        "answer": 1,
        "explanation": "Correct: (b). One bank lean while the other is normal means the fault is on that bank, not in a shared system. (a) A weak pump affects both banks. (c) A clogged filter affects both banks. (d) A battery fault does not cause a single-bank lean code."
      },
      {
        "module": 3,
        "q": "A CV4 question gives a symptom, a scan reading, and a booklet reference value that the reading exceeds by a wide margin. The correct use of the data is to:",
        "choices": ["Ignore the reference value and use experience", "Compare the reading to the reference value and let the difference name the fault", "Memorize the reference value", "Skip the question"],
        "answer": 1,
        "explanation": "Correct: (b). The booklet's value is the standard; a reading far outside it is the fault's signature. (a) The reference value is the authority, not experience. (c) Memorizing is unnecessary — the booklet is on screen. (d) Skipping wastes a question the data answers."
      },
      {
        "module": 3,
        "q": "The CV4 Reference Booklet is available:",
        "choices": ["Only in this course", "On screen during the real L1 test", "Only to ASE staff", "In every repair manual"],
        "answer": 1,
        "explanation": "Correct: (b). The booklet is provided on screen during the real L1 test. (a) This course uses a fictional stand-in, not the real booklet. (c) Candidates use it during the test. (d) It is specific to the CV4, not in general manuals."
      },
      {
        "module": 4,
        "q": "A module fails to communicate, but all other modules communicate normally. The most likely cause is:",
        "choices": ["A bus-wide wiring fault", "A fault in that module or its power, ground, or connection", "A dead battery", "A faulty scan tool"],
        "answer": 1,
        "explanation": "Correct: (b). One silent module while the rest talk points at that module or its own power and ground, not at the shared bus. (a) A bus fault would silence many modules. (c) A dead battery stops everything. (d) The tool communicates with the other modules."
      },
      {
        "module": 4,
        "q": "CAN High and CAN Low are measured at the diagnostic connector with the bus active. The expected pattern is:",
        "choices": ["Both lines sit at a steady 12 volts", "Both lines rest near a middle voltage, with CAN High rising and CAN Low falling when a message is sent", "Both lines sit at zero volts", "CAN High is always higher than CAN Low"],
        "answer": 1,
        "explanation": "Correct: (b). The pair rests near a middle voltage and mirrors around it — High rises, Low falls — when transmitting. (a) CAN lines do not sit at battery voltage. (c) Zero volts means the bus is dead. (d) The lines are equal at rest, not one always higher."
      },
      {
        "module": 5,
        "q": "A vehicle has a misfire code on cylinder 1, and the coil current ramp for cylinder 1 is normal but the secondary waveform shows a short burn time. The most likely cause is:",
        "choices": ["A bad coil", "A wide plug gap or a lean condition on that cylinder — the coil is working but the spark has too little to burn", "A dead computer", "A clogged fuel filter"],
        "answer": 1,
        "explanation": "Correct: (b). A normal ramp rules out the coil; a short burn points at the gap or the mixture on that cylinder. (a) The coil's ramp is normal, so it is not the fault. (c) A computer fault would affect more than one cylinder. (d) A fuel filter affects all cylinders, not one burn time."
      },
      {
        "module": 5,
        "q": "A vehicle misfires at idle but runs smoothly at speed. The most likely cause is:",
        "choices": ["A weak coil", "A vacuum leak or a dirty throttle body — idle is where small air faults show", "A clogged catalytic converter", "A dead battery"],
        "answer": 1,
        "explanation": "Correct: (b). Idle is the most sensitive condition for air faults — a small leak or a dirty bore starves the engine at idle and fades at speed. (a) A weak coil fails under load, not at idle. (c) A clogged converter restricts at speed. (d) A battery fault prevents cranking."
      },
      {
        "module": 6,
        "q": "A vehicle has a rich code and black smoke at idle, with a mass air flow reading higher than expected. The most likely cause is:",
        "choices": ["A vacuum leak", "A mass air flow sensor over-reporting the air entering the engine", "A leaking injector", "A clogged air filter"],
        "answer": 1,
        "explanation": "Correct: (b). An over-reading air sensor makes the computer add too much fuel — rich at idle, with black smoke. (a) A vacuum leak leans the mixture. (c) A leaking injector would enrich the mixture but would not raise the air reading. (d) A clogged filter reduces airflow, lowering the reading."
      },
      {
        "module": 6,
        "q": "A vehicle's idle speed is too high after the battery was replaced. The most likely cause is:",
        "choices": ["A vacuum leak", "The idle relearn has not completed — the computer lost its learned idle settings with the battery", "A faulty fuel pump", "A dead oxygen sensor"],
        "answer": 1,
        "explanation": "Correct: (b). A battery disconnect erases learned idle settings, and the engine idles high until the relearn completes. (a) A leak would also raise idle but would not be tied to the battery replacement. (c) A pump fault causes a lean condition, not high idle. (d) A sensor fault would set a code."
      },
      {
        "module": 7,
        "q": "A vehicle fails an emissions test for high HC, with a misfire code on one cylinder and fuel trims near normal. The correct first repair is to:",
        "choices": ["Replace the catalytic converter", "Fix the misfire — the unburned fuel from the dead cylinder is the HC source", "Replace the oxygen sensors", "Replace the fuel injectors"],
        "answer": 1,
        "explanation": "Correct: (b). HC is unburned fuel from the misfiring cylinder; the converter cannot clean up a whole cylinder's worth. (a) The converter is the victim, not the cause. (c) The sensors are reading correctly. (d) The injectors have no symptom pointing at them."
      },
      {
        "module": 7,
        "q": "A vehicle fails for high CO, with fuel trims at −12% and a fuel smell at idle. The most likely cause is:",
        "choices": ["A vacuum leak", "Over-fueling — a leaking injector or high fuel pressure", "A failed EGR valve", "A dead battery"],
        "answer": 1,
        "explanation": "Correct: (b). Negative trims with a fuel smell mean the engine is being over-fueled. (a) A vacuum leak leans the mixture — positive trims. (c) A failed EGR raises NOx, not CO. (d) A battery fault does not cause a rich mixture."
      },
      {
        "module": 7,
        "q": "A vehicle fails for high NOx, with fuel trims near normal and an EGR valve that does not move on command. The correct diagnosis is:",
        "choices": ["A rich mixture", "A failed EGR system — combustion is too hot without recirculated gas", "A clogged catalytic converter", "A vacuum leak"],
        "answer": 1,
        "explanation": "Correct: (b). With the mixture correct, the temperature control — EGR — is the fault, proven by the command test. (a) A rich mixture raises CO, not NOx. (c) A clogged converter restricts exhaust, not combustion temperature. (d) A vacuum leak leans the mixture and would show in the trims."
      },
      {
        "module": 8,
        "q": "A scope capture of a crankshaft sensor shows a regular pattern with one missing tooth in the same place every revolution. This indicates:",
        "choices": ["A faulty sensor", "A normal reference mark — the missing tooth is the crankshaft position reference", "A damaged flywheel", "A dead computer"],
        "answer": 1,
        "explanation": "Correct: (b). The missing tooth is a deliberate reference mark the computer uses to know crankshaft position. (a) A faulty sensor would show an irregular or absent pattern. (c) A damaged flywheel would show an irregular gap, not a consistent one. (d) A dead computer would not display a clean pattern."
      },
      {
        "module": 8,
        "q": "A scope waveform of a fuel injector shows a clean switch-on, a steady hold, and a sharp switch-off spike. This indicates:",
        "choices": ["A faulty injector", "A healthy injector circuit — the spike is the coil's stored energy releasing at switch-off", "A shorted injector", "A dead driver"],
        "answer": 1,
        "explanation": "Correct: (b). The switch-off spike is the normal inductive kick of a healthy coil — its absence would be the fault. (a) A faulty injector would show a missing or distorted pattern. (c) A shorted injector would show no spike and a flat trace. (d) A dead driver would show no switching at all."
      },
      {
        "module": 8,
        "q": "A secondary ignition waveform shows a tall firing line, a short burn, and a normal coil oscillation after. The most likely cause of the short burn is:",
        "choices": ["A rich mixture", "A wide plug gap or a lean mixture", "A weak coil", "A dead battery"],
        "answer": 1,
        "explanation": "Correct: (b). A tall firing line with a short burn means the spark needed high voltage to jump and found little to burn — a wide gap or a lean mixture. (a) A rich mixture lengthens the burn. (c) A weak coil would show a low firing line. (d) A battery fault does not change burn time."
      },
      {
        "module": 9,
        "q": "A vehicle has an intermittent stall that never happens in the shop. The best strategy is to:",
        "choices": ["Replace the most likely part", "Set up a flight recorder or data logger and let the customer drive until the fault happens", "Clear the codes and hope", "Replace the computer"],
        "answer": 1,
        "explanation": "Correct: (b). A fault that never happens in the shop must be captured when it happens — a recorder catches the data the technician cannot see. (a) Replacing a part without a test is a guess. (c) Clearing destroys the evidence. (d) The computer is the most expensive guess, not the first test."
      },
      {
        "module": 9,
        "q": "A wiggle test on a wiring harness causes the engine to stumble. The correct conclusion is:",
        "choices": ["The harness is fine", "There is a connection fault in the harness — the wiggle disturbed a bad connection", "The computer is faulty", "The fuel pump is weak"],
        "answer": 1,
        "explanation": "Correct: (b). A symptom that follows a wiggle proves a connection fault in that harness — the movement disturbed it. (a) A healthy harness does not stumble when wiggled. (c) A computer fault would not follow a harness wiggle. (d) A pump fault does not respond to harness movement."
      },
      {
        "module": 9,
        "q": "A customer says the fault happens only on rainy days. The most useful next step is to:",
        "choices": ["Ignore the weather — it cannot matter", "Use the weather as a condition: check for water entry, corroded connectors, or insulation faults that moisture exposes", "Replace the battery", "Clear the codes"],
        "answer": 1,
        "explanation": "Correct: (b). Conditions are clues — rain points at water entry and moisture-sensitive connections. (a) Dismissing a condition throws away the best clue. (c) A battery fault is not weather-dependent. (d) Clearing destroys the evidence."
      },
      {
        "module": 10,
        "q": "A vehicle hesitates on acceleration, with no codes and normal fuel trims. A snap-throttle scope capture shows a weak coil current ramp on one cylinder. The most likely cause is:",
        "choices": ["A clogged fuel filter", "A weak coil that fails under load", "A vacuum leak", "A dead oxygen sensor"],
        "answer": 1,
        "explanation": "Correct: (b). The weak ramp under snap-throttle is the clue, and load-dependent failure fits ignition. (a) A fuel filter would show a fuel delivery problem, not a coil ramp. (c) A vacuum leak is worst at idle. (d) A sensor fault would set a code and affect the mixture."
      },
      {
        "module": 10,
        "q": "A vehicle stalls at stops but restarts immediately, with no codes. The throttle body is dirty and the idle air control is slow to respond. The correct repair is to:",
        "choices": ["Replace the fuel pump", "Clean the throttle body and relearn the idle — the idle air path is starved", "Replace the catalytic converter", "Replace the battery"],
        "answer": 1,
        "explanation": "Correct: (b). A dirty throttle body starves the idle air path; cleaning and a relearn restore idle control. (a) A pump fault shows under load, not at stops. (c) A clogged converter restricts at speed. (d) A battery fault prevents cranking."
      },
      {
        "module": 10,
        "q": "A vehicle surges at steady cruise, with fuel trims swinging and an erratic mass air flow reading. The most likely cause is:",
        "choices": ["A faulty mass air flow sensor", "A clogged catalytic converter", "A vacuum leak", "A dead battery"],
        "answer": 0,
        "explanation": "Correct: (a). An erratic air reading at steady speed is a lying sensor, and the swinging trims follow it. (b) A clogged converter restricts exhaust, not the air reading. (c) A vacuum leak is steady and worst at idle. (d) A battery fault does not make the air reading erratic."
      },
      {
        "module": 11,
        "q": "A vehicle fails an inspection with no light and no codes, and the battery was replaced last week. The failure is most likely:",
        "choices": ["A dead catalytic converter", "Monitors not ready — the battery replacement reset them and they have not run again", "A faulty gas cap", "A rich mixture"],
        "answer": 1,
        "explanation": "Correct: (b). A battery disconnect resets every readiness monitor to not ready. (a) A dead converter would set a catalyst code. (c) A gas cap sets an EVAP code. (d) A rich mixture would set a fuel trim code."
      },
      {
        "module": 11,
        "q": "An EVAP system fails a smoke test at a cracked hose, and the purge valve is stuck open. The correct repair is to:",
        "choices": ["Replace the hose only", "Replace both the hose and the purge valve — one fault caused two failures", "Replace the gas cap", "Clear the codes"],
        "answer": 1,
        "explanation": "Correct: (b). The hose is the leak and the stuck valve is a second fault that also sets a lean code; fixing one leaves the other. (a) The valve would still fail the next test. (c) The cap is not the fault. (d) Clearing does not repair anything."
      },
      {
        "module": 11,
        "q": "A customer's car gets a new catalytic converter, then fails its emissions test again two months later with the same high HC reading. The converter is new, so what should the technician look for?",
        "choices": ["A defective replacement converter", "The engine fault — a misfire or rich mixture — that destroyed the first converter and is now destroying the second", "The wrong grade of gasoline", "A weak battery"],
        "answer": 1,
        "explanation": "Correct: (b). A converter fails because of what the engine feeds it — a misfire or a rich mixture poisons or melts a new converter the same way it killed the first. (a) A defective replacement is possible but far less likely than an unfixed upstream fault. (c) Fuel grade does not kill converters in weeks. (d) A weak battery does not damage a converter."
      },
      {
        "module": 12,
        "q": "On the real L1 test, the best way to use the Composite Vehicle Reference Booklet is to:",
        "choices": ["Memorize it before the test", "Read the question, decide what data you need, look it up, and trust it over memory", "Ignore it and use experience", "Read the whole booklet before starting"],
        "answer": 1,
        "explanation": "Correct: (b). The booklet is a reference to consult question-first. (a) It is too large to memorize and is on screen during the test. (c) Ignoring the provided reference wastes the test's own data. (d) Reading the whole booklet first wastes the clock."
      },
      {
        "module": 12,
        "q": "ASE requires what before you can register for the L1 test?",
        "choices": ["A6 passed", "A8 passed", "3 years of experience", "A scan tool"],
        "answer": 1,
        "explanation": "Correct: (b). A8 passed is the registration prerequisite, checked at registration. (a) A6 is not a registration prerequisite. (c) The 3 years is needed to certify, not to register. (d) Tools are not a registration requirement."
      },
      {
        "module": 12,
        "q": "A technician passes the L1 test after two years in the trade and applies for the credential. ASE tells them the certificate is not ready yet. Why?",
        "choices": ["They need one more year — L1 requires 3 years of hands-on experience to certify", "They need to pass A6 first", "They need to buy a scan tool", "They need to wait 5 years"],
        "answer": 0,
        "explanation": "Correct: (a). L1 requires 3 years of hands-on experience before ASE issues the credential, even if the test is passed earlier. (b) A6 is not a registration or certification requirement for L1 — A8 is the prerequisite. (c) Tools are not a certification requirement. (d) 5 years is how long the certification lasts, not how long the wait is."
      },
      {
        "module": 12,
        "q": "A technician certified in L1 in 2021 asks when they will need to recertify. What is the correct answer?",
        "choices": ["2023 — after 2 years", "2024 — after 3 years", "2026 — after 5 years", "Never — ASE certifications last for life"],
        "answer": 2,
        "explanation": "Correct: (c). ASE certifications last 5 years, so a 2021 certification needs recertification in 2026. (a) 2 years is the A1–A9 experience requirement, not a certification length. (b) 3 years is the L1 experience requirement, not a certification length. (d) No ASE certification lasts for life."
      },
      {
        "module": 7,
        "q": "A vehicle fails an emissions test for high HC, with no misfire codes and fuel trims near normal. The next test should be:",
        "choices": ["Replace the catalytic converter", "Check the converter's efficiency — with the engine healthy, a weak converter is the remaining suspect", "Replace the oxygen sensors", "Clear the codes"],
        "answer": 1,
        "explanation": "Correct: (b). With no misfire and a correct mixture, the converter itself is the suspect — test it, do not guess it. (a) Replacing without a test is a guess. (c) The sensors have no symptom pointing at them. (d) Clearing destroys the evidence."
      },
      {
        "module": 8,
        "q": "A scope capture of a camshaft sensor shows a pattern that drifts out of phase with the crankshaft sensor pattern. This indicates:",
        "choices": ["A normal condition", "A timing fault — the cam and crank signals no longer agree", "A dead battery", "A clogged fuel filter"],
        "answer": 1,
        "explanation": "Correct: (b). Cam and crank signals must stay in phase; drift means the timing relationship has changed. (a) Drift is not normal. (c) A battery fault does not shift sensor phase. (d) A fuel fault does not change sensor timing."
      },
      {
        "module": 9,
        "q": "A fault happens only on the first start of the day, never after the engine warms. The most useful next step is to:",
        "choices": ["Test the vehicle cold, first thing — the fault must be caught in its own conditions", "Test it after a long drive", "Replace the most likely part", "Clear the codes"],
        "answer": 0,
        "explanation": "Correct: (a). A cold-only fault must be tested cold; a warm engine proves nothing. (b) Testing warm misses the fault entirely. (c) Replacing without a test is a guess. (d) Clearing destroys the evidence."
      },
      {
        "module": 10,
        "q": "A vehicle has a long crank before starting when cold, with a rich smell and normal ignition waveforms. The most likely cause is:",
        "choices": ["A weak coil", "Over-fueling — a leaking injector or a temperature sensor lying about the cold start", "A clogged catalytic converter", "A vacuum leak"],
        "answer": 1,
        "explanation": "Correct: (b). Normal waveforms rule out ignition, and the rich smell points at too much fuel. (a) A weak coil would show on the waveform. (c) A clogged converter causes power loss, not a rich smell. (d) A vacuum leak leans the mixture."
      },
      {
        "module": 11,
        "q": "A vehicle fails for high CO, with short injector pulse width and strongly negative fuel trims. The combination means:",
        "choices": ["The fuel system cannot deliver enough fuel", "The computer is trying to take fuel away from a system delivering too much", "The oxygen sensor is dead", "The engine is running lean"],
        "answer": 1,
        "explanation": "Correct: (b). Short pulses with a still-rich mixture mean over-delivery. (a) That pattern shows long pulses with lean trims. (c) A dead sensor would set a sensor code. (d) Negative trims mean the mixture is rich."
      },
      {
        "module": 2,
        "q": "A vehicle's long-term fuel trim is +16% at idle and +15% at cruise, with a mass air flow reading lower than expected. The most likely cause is:",
        "choices": ["A vacuum leak", "A mass air flow sensor under-reporting the air entering the engine", "A leaking injector", "A clogged catalytic converter"],
        "answer": 1,
        "explanation": "Correct: (b). A low air reading at all speeds means the sensor is under-reporting, and the computer adds fuel to compensate. (a) A vacuum leak fades at cruise. (c) A leaking injector would make the mixture rich. (d) A clogged converter does not change the air reading."
      },
      {
        "module": 4,
        "q": "A scan tool cannot communicate with a vehicle, and the diagnostic connector's power pin shows no voltage. The correct next step is to:",
        "choices": ["Replace the computer", "Find and repair the blown fuse or broken wire feeding the connector", "Replace the scan tool", "Replace the battery"],
        "answer": 1,
        "explanation": "Correct: (b). A dead power pin is a fuse or wiring fault — cheap, common, and proven by the meter reading. (a) The computer is not the cause of a dead connector pin. (c) The tool works on other vehicles. (d) The battery is good."
      },
      {
        "module": 5,
        "q": "A vehicle misfires only under load, with no codes at idle. The ignition waveform shows a weak current ramp on one coil. The most likely cause is:",
        "choices": ["A clogged fuel filter", "A weak coil that fails when cylinder pressure rises", "A dead oxygen sensor", "A vacuum leak"],
        "answer": 1,
        "explanation": "Correct: (b). The weak ramp is the clue, and load-dependent failure fits ignition. (a) A fuel filter would not show as a coil ramp. (c) A sensor fault would set a code. (d) A vacuum leak is worst at idle."
      },
      {
        "module": 6,
        "q": "A turbocharged vehicle loses power under boost, with no codes. The most likely first check is to:",
        "choices": ["Replace the turbocharger", "Check boost pressure and look for a leak in the charge piping", "Replace the spark plugs", "Clear the codes"],
        "answer": 1,
        "explanation": "Correct: (b). Lost power under boost with no codes points at the boost system, and a pressure check proves it. (a) Replacing the turbo before testing is a costly guess. (c) Plugs would cause a misfire. (d) There are no codes to clear."
      }
    ]
  }
};
