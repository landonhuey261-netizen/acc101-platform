// ase-a6 - Module 8: Electronic Controls & Modules
module.exports = {
  "number": 8,
  "slug": "electronic-controls-modules",
  "title": "Electronic Controls & Modules",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a control module is and what it does.",
    "Describe the input-processing-output loop every module runs.",
    "Name the main modules in a car and what each one controls.",
    "Explain how a module's software and calibration fit into diagnosis.",
    "Recognize module faults and avoid the most common module mistake."
  ],
  "sections": [
    {
      "heading": "What a Control Module Is",
      "html": "<p>A <strong>control module</strong> is a computer built for a car. It reads signals from sensors, decides what to do, and commands actuators — motors, solenoids, injectors — to do it. The engine control module reads the crankshaft position, the air entering the engine, and the temperature, then decides how much fuel to inject and when to fire the spark plugs. The transmission control module reads the vehicle speed and the throttle position, then decides when to shift. The body control module runs the lights, the locks, and the wipers. A modern car can have dozens of modules, each responsible for one system, all talking to each other.</p>\n<p>A module is not magic — it is a loop. <strong>Input:</strong> sensors report what is happening. <strong>Processing:</strong> the module compares the inputs with its programming and decides what should happen. <strong>Output:</strong> it commands the actuators. When a system misbehaves, the fault can be in any of the three: a lying sensor, a module that cannot decide correctly, or an actuator that cannot do what it is told. Diagnosis means finding which of the three it is — and the module is the last suspect, not the first.</p>"
    },
    {
      "heading": "The Main Modules in a Car",
      "html": "<p>The <strong>engine control module (ECM)</strong> — also called the powertrain control module (PCM) when it also controls the transmission — runs the engine: fuel, spark, idle, emissions. The <strong>transmission control module (TCM)</strong> runs the transmission: shift timing and firmness. The <strong>body control module (BCM)</strong> runs the body: lights, locks, windows, wipers. The <strong>anti-lock brake module</strong> runs the brakes: it watches wheel speed and releases a locking brake. The <strong>airbag module</strong> watches crash sensors and fires the airbags. And on a hybrid or electric car, a <strong>hybrid control module</strong> manages the high-voltage system and the handoff between the engine and the electric motor.</p>\n<p>Modules talk to each other over the car's networks (Module 9). The ECM tells the TCM how much torque the engine is making so the transmission can shift smoothly; the BCM tells the ECM that the air conditioning has been switched on so the engine can raise its idle speed. A fault in one module can show up as a symptom in another system — which is why a transmission complaint can turn out to be an engine sensor fault, and why the scan tool's whole-car fault list matters more than any single code.</p>"
    },
    {
      "heading": "Software, Calibration, and Updates",
      "html": "<p>A module's behavior comes from its <strong>software</strong> — the program it runs — and its <strong>calibration</strong>, the data that tunes the program to that exact car: its engine, its transmission, its tire size. Two cars with the same module part number but different calibrations will behave differently, which is why a replacement module must be programmed with the right calibration for the car, not just bolted in. A module fitted with the wrong calibration can cause faults that look like wiring problems.</p>\n<p>Manufacturers also release <strong>software updates</strong> that fix known problems — a harsh shift, a false warning, a battery drain. Before replacing a module for a strange fault, a technician checks whether an update exists for that fault. An update takes minutes; a module costs far more. And a module that has lost its programming — after a dead battery or a failed update — may need to be reprogrammed before the car will run at all.</p>"
    },
    {
      "heading": "Diagnosing Module Faults — and the Common Mistake",
      "html": "<p>Module faults are rare. Most of the time, a fault code that names a module is really naming a sensor, a wire, or an actuator — the module is reporting what it sees, and what it sees is wrong because the input is wrong. The diagnostic order is: check the power and ground to the module (a module with no power cannot work), check the inputs (are the sensors telling the truth?), check the outputs (can the actuator do what it is told?), and only then suspect the module itself.</p>\n<p>The common mistake is the most expensive one in this course: replacing a module because a fault code mentions it. A code that says a sensor's signal is out of range usually means the sensor or its wiring has failed, not the module that reported it. A new module costs a great deal, needs programming, and will report the same fault if the sensor is still lying. Test the inputs and the outputs first — the module is the last suspect, not the first.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>A module runs an input-processing-output loop: sensors in, decision, actuators out.</li>\n<li>Main modules: ECM/PCM (engine and powertrain), TCM (transmission), BCM (body), anti-lock brake module, airbag module, hybrid control module.</li>\n<li>Modules talk to each other over the car's networks; a fault in one system can show up in another.</li>\n<li>A module's behavior comes from its software and its calibration — a replacement must be programmed for the car.</li>\n<li>Diagnose in order: module power and ground, inputs, outputs — and only then the module itself.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Replacing a module because a fault code mentions it. The code usually names a sensor or a wire that is lying to the module — test the inputs and outputs first, because a new module will report the same fault.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain the input-processing-output loop and why the module is the last suspect, you have this module. Module 9 follows the conversation between modules: CAN bus and networks.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Control module",
      "def": "A computer built for a car: it reads sensor signals, decides what to do, and commands actuators."
    },
    {
      "term": "ECM (engine control module)",
      "def": "The module that runs the engine: fuel, spark, idle, and emissions."
    },
    {
      "term": "PCM (powertrain control module)",
      "def": "A module that controls both the engine and the transmission."
    },
    {
      "term": "TCM (transmission control module)",
      "def": "The module that runs the transmission: shift timing and firmness."
    },
    {
      "term": "BCM (body control module)",
      "def": "The module that runs the body systems: lights, locks, windows, wipers."
    },
    {
      "term": "Anti-lock brake module",
      "def": "The module that watches wheel speed and releases a locking brake."
    },
    {
      "term": "Airbag module",
      "def": "The module that watches crash sensors and fires the airbags."
    },
    {
      "term": "Hybrid control module",
      "def": "The module that manages a hybrid or electric car's high-voltage system and the handoff between engine and motor."
    },
    {
      "term": "Sensor",
      "def": "A part that measures something and turns it into an electrical signal for a module."
    },
    {
      "term": "Actuator",
      "def": "A part that does something when a module tells it to — a motor, a solenoid, an injector."
    },
    {
      "term": "Input-processing-output",
      "def": "The loop every module runs: sensors in, decision, actuators out."
    },
    {
      "term": "Software",
      "def": "The program a module runs."
    },
    {
      "term": "Calibration",
      "def": "The data that tunes a module's software to one exact car — its engine, transmission, and tire size."
    },
    {
      "term": "Software update",
      "def": "A manufacturer's revised program for a module, released to fix a known problem."
    },
    {
      "term": "Fault code",
      "def": "A code a module stores when it sees something wrong, read with a scan tool."
    },
    {
      "term": "Scan tool",
      "def": "The tool that reads a module's fault codes and live data, and can command actuators for testing."
    }
  ],
  "video": {
    "title": "What is an ECU? Car, SUV and Truck Computer Acronyms Explained!",
    "embedUrl": "https://www.youtube.com/embed/C8ZuE-ttMoA",
    "note": "1A Auto explains the car's computers — ECM, PCM, TCM, BCM — and what each one does. Watch how the modules divide the work; that division is the heart of this module.",
    "more": [
      {
        "title": "What is an Engine Control Module (ECM) and how does it work?",
        "url": "https://www.youtube.com/watch?v=qnwSGUHCmII"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Explain the input-processing-output loop using the engine control module as the example.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Input — sensors report the crankshaft position, the air entering the engine, and the temperature. Step 2: Processing — the ECM compares the inputs with its programming and decides how much fuel to inject and when to fire the spark plugs. Step 3: Output — it commands the injectors and the ignition coils. A fault can be in any of the three stages.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A fault code says a sensor's signal is out of range. Why should you test the sensor and its wiring before replacing the module?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The module is reporting what it sees — and what it sees is wrong because the input is wrong. Step 2: The sensor or its wiring has usually failed, not the module. Step 3: A new module will report the same fault if the sensor is still lying, and it costs far more than the sensor. Step 4: Test the inputs first; the module is the last suspect.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A replacement module is bolted into a car but the car still has faults. What was probably missed?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The module's programming — its software and its calibration for that exact car. Step 2: A module must be programmed with the right calibration (engine, transmission, tire size) for the car it is fitted to. Step 3: A module with the wrong calibration will behave wrongly and set faults that look like wiring problems.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A transmission shifts harshly, but the transmission itself tests fine. How could an engine fault cause a transmission symptom?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Modules talk to each other — the ECM tells the TCM how much torque the engine is making so the transmission can shift smoothly. Step 2: If an engine sensor lies, the ECM reports the wrong torque. Step 3: The TCM then shifts at the wrong time or with the wrong firmness. Step 4: The symptom is in the transmission, but the fault is in the engine's inputs.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List the diagnostic order for a suspected module fault, and say why the module is last.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check the module's power and ground — a module with no power cannot work. Step 2: Check the inputs — are the sensors telling the truth? Step 3: Check the outputs — can the actuator do what it is told? Step 4: Only then suspect the module itself. Step 5: The module is last because module faults are rare, modules are expensive, and most module codes are really sensor, wiring, or actuator faults.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A car has a strange fault and the manufacturer has released a software update for exactly that fault. What should you do, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Apply the software update. Step 2: An update takes minutes and fixes the known problem in the module's program. Step 3: Replacing the module would cost far more and would still need the same update. Step 4: Always check for an update before replacing a module.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A control module runs the loop:",
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
      "q": "The ECM controls the:",
      "choices": [
        "Transmission only",
        "Engine: fuel, spark, idle, and emissions",
        "Windows and locks",
        "Airbags"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The engine control module runs the engine. (a) The TCM runs the transmission. (c) The BCM runs the body. (d) The airbag module runs the airbags."
    },
    {
      "q": "A fault code that names a sensor usually means:",
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
      "q": "A replacement module must be:",
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
      "q": "Modules talk to each other so that, for example:",
      "choices": [
        "The ECM can tell the TCM how much torque the engine is making, so the transmission shifts smoothly",
        "The radio can charge the battery",
        "The headlights can steer the car",
        "The horn can open the windows"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Modules share information over the networks so systems can work together. (b) The radio does not charge the battery. (c) Headlights do not steer. (d) The horn does not open windows."
    },
    {
      "q": "The correct order for diagnosing a suspected module fault is:",
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
      "q": "A manufacturer's software update for a module is worth checking because:",
      "choices": [
        "It makes the car faster",
        "It can fix a known problem in minutes, instead of replacing the module",
        "It changes the paint color",
        "It voids the warranty"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An update fixes the program; a module replacement costs far more and still needs the same update. (a) Updates fix faults, not add speed. (c) Software does not change paint. (d) A manufacturer update does not void the warranty."
    },
    {
      "q": "The BCM controls the:",
      "choices": [
        "Engine",
        "Body systems: lights, locks, windows, wipers",
        "Transmission",
        "Brakes"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The body control module runs the body systems. (a) The ECM runs the engine. (c) The TCM runs the transmission. (d) The anti-lock brake module runs the brakes."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Electronic Controls & Modules: Quick Reference</h3>\n<p><strong>Core idea:</strong> A module runs an input-processing-output loop — sensors in, decision, actuators out. The fault can be in any of the three, and the module is the last suspect.</p>\n<p><strong>Main modules:</strong> ECM/PCM (engine and powertrain) · TCM (transmission) · BCM (body) · Anti-lock brake module · Airbag module · Hybrid control module.</p>\n<p><strong>Networks:</strong> Modules share information — a fault in one system can show up as a symptom in another.</p>\n<p><strong>Software and calibration:</strong> A replacement module must be programmed for that exact car; check for a software update before replacing a module.</p>\n<p><strong>Diagnose in order:</strong> Module power and ground → inputs → outputs → module last.</p>\n<p><strong>Self-check:</strong> Explain the input-processing-output loop and why the module is the last suspect. If you can, you have this module.</p>\n"
};
