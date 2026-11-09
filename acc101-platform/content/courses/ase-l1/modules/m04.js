// ase-l1 - Module 4: Network Communication Diagnosis (CAN)
module.exports = {
  "number": 4,
  "slug": "network-communication-diagnosis-can",
  "title": "Network Communication Diagnosis (CAN)",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what the CAN bus is and why modern vehicles need modules to talk to each other.",
    "Describe CAN High and CAN Low, and how the two wires carry messages.",
    "Use resistance and voltage checks at the diagnostic connector to judge the network's health.",
    "Diagnose a network fault: a dead module, a wiring fault, or a module dragging the bus down.",
    "Read U-codes and explain what a loss of communication means for diagnosis."
  ],
  "sections": [
    {
      "heading": "Why Modules Need to Talk",
      "html": "<p>A modern vehicle has dozens of computers — modules — and they need to share information. The engine computer needs to know the transmission's gear; the transmission needs to know the engine's torque; the instrument cluster needs speed, temperature, and warning information from all of them; the body computer needs to know whether the doors are locked. Running a separate wire for every message would mean thousands of wires. Instead, the modules share a network — and the network they share is called <strong>CAN</strong>, the Controller Area Network.</p>\n<p>CAN is a two-wire network. Every module connects to the same two wires, and messages travel on those wires as voltage signals. Any module can send a message, and every module hears it — but each message carries an identifier, so only the module it is meant for acts on it. It is a party line with names attached, and it carries everything from engine speed to door-lock commands.</p>\n<div class=\"callout\"><strong>Key idea:</strong> CAN is a two-wire party line. Every module hears every message, and each message's identifier says who it is for. One pair of wires replaces thousands of individual connections.</div>"
    },
    {
      "heading": "CAN High and CAN Low: The Wires and the First Checks",
      "html": "<p>The two wires are called <strong>CAN High</strong> and <strong>CAN Low</strong>. They are twisted together, which cancels out electrical interference — an important detail, because the network runs through a noisy environment full of ignition pulses and motors. When the network is idle, both wires sit at the same middle voltage. When a message is sent, CAN High rises and CAN Low falls by the same amount, in opposite directions. The receiver reads the difference between the two wires, not either wire alone — so interference that hits both wires equally cancels out.</p>\n<p>The network also has <strong>terminating resistors</strong>, one at each end of the bus, which stabilize the signals and prevent reflections. Together the two resistors measure about 60 ohms across the network at the diagnostic connector when the system is off — the single most useful number in CAN diagnosis. A reading near 60 ohms says the wiring and both terminators are present; a reading near 120 ohms says one terminator is missing from the measurement, usually because of an open circuit; a reading near zero says the bus is shorted.</p>\n<p>CAN comes in speeds. <strong>High-speed CAN</strong> carries powertrain messages — engine, transmission, ABS — and runs fast. <strong>Low-speed CAN</strong> carries body and comfort messages and runs slower. The two networks are separate, and a fault on one does not necessarily affect the other — which is why a car can have a dead instrument cluster and a perfectly running engine, or vice versa.</p>\n<p>The diagnostic connector (the OBD II port) gives you the network on a plate. CAN High is on pin 6 and CAN Low is on pin 14. With the key off and the network asleep, measure resistance between pins 6 and 14: about 60 ohms is healthy. About 120 ohms means an open — one terminator is not in the measurement, so the wiring or a module connection is broken somewhere. Near zero means a short between the wires. An open circuit reading (infinite resistance) means the bus is broken entirely.</p>\n<p>With the key on, measure voltage on each pin. A healthy high-speed CAN bus shows CAN High and CAN Low both near the middle voltage at rest, moving in opposite directions when messages flow. A wire stuck at battery voltage or at ground means a short to power or to ground. A wire reading zero with the key off and the network asleep is normal — the network sleeps when the car sleeps, and a sleeping bus reads zero.</p>\n<p>One warning before any of this: check the battery first. A weak battery causes CAN faults across many modules at once, because modules brown out and stop communicating. A car full of U-codes and a weak battery has a battery problem, not a network problem — and replacing modules will not fix it.</p>"
    },
    {
      "heading": "Finding the Fault: Module, Wiring, or a Bus Dragged Down",
      "html": "<p>Network faults fall into three kinds. <strong>A dead module:</strong> one module stops talking, and the others report that they cannot hear it — U-codes naming that module. Check its power and ground first, then its network connections; modules are expensive, and most 'dead' modules are actually unpowered modules.</p>\n<p><strong>A wiring fault:</strong> a broken, shorted, or corroded wire in the bus itself. The resistance and voltage checks point at it, and the fix is found by splitting the circuit: disconnect sections of the network and watch the readings change. A reading that returns to normal when a section is disconnected says the fault is in that section.</p>\n<p><strong>A module dragging the bus down:</strong> a faulty module that floods the network with garbage or holds a wire at the wrong voltage, silencing every other module. The test is to disconnect modules one at a time and watch the network recover — when disconnecting one module brings the bus back to life, that module is the culprit. It is the network equivalent of finding the one bad bulb that kills the whole string of lights.</p>"
    },
    {
      "heading": "U-Codes: What Loss of Communication Means",
      "html": "<p><strong>U-codes</strong> are network codes: U0001 through U0300 cover bus faults, and the rest name lost communication with a specific module — U0100 is lost communication with the engine computer, for example. A U-code does not say the named module is broken. It says the reporting module cannot hear it — which could mean the module is dead, unpowered, disconnected, or silenced by a bus fault.</p>\n<p>Read U-codes as a map, not a verdict. One U-code naming one module points at that module's power, ground, or connections. Many U-codes naming many modules point at the bus itself, or at the battery. And a U-code alongside a drivability symptom — an engine that will not start, a transmission stuck in one gear — means the network fault is the drivability fault, not a separate problem: the modules cannot coordinate, so the powertrain cannot work.</p>\n<p>The diagnostic order for U-codes is fixed: battery and charging first, then the resistance and voltage checks at the connector, then power and ground at the named module, then the disconnect-one-at-a-time test for a module dragging the bus down. Skip the battery check and you will replace a module that was only hungry.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>CAN is a two-wire network (CAN High on pin 6, CAN Low on pin 14) that lets every module share messages, each tagged with an identifier.</li>\n<li>Healthy bus, key off and asleep: about 60 ohms between pins 6 and 14. About 120 ohms = open. Near zero = short.</li>\n<li>High-speed CAN carries powertrain messages; low-speed CAN carries body and comfort messages.</li>\n<li>Three fault kinds: a dead module (check power and ground first), a wiring fault (split the circuit), a module dragging the bus down (disconnect one at a time).</li>\n<li>U-codes mean lost communication, not a proven bad module. Battery first, then resistance and voltage, then the module.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Replacing the module a U-code names. The code says the module cannot be heard — check its power and ground and the bus itself before condemning it.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Diagnosing a network full of U-codes without checking the battery. A weak battery makes modules brown out and stop talking, and no module replacement fixes that.</div>\n<p><strong>Ready-to-work link:</strong> If you can explain the 60-ohm check and the disconnect-one-at-a-time test, you have this module. Module 5 goes back to the engine: advanced ignition diagnosis.</p>"
    }
  ],
  "keyTerms": [
    { "term": "CAN bus", "def": "Controller Area Network — the two-wire network that lets a vehicle's modules share messages." },
    { "term": "CAN High", "def": "One of the two CAN wires (pin 6 at the diagnostic connector); its voltage rises when a message is sent." },
    { "term": "CAN Low", "def": "One of the two CAN wires (pin 14 at the diagnostic connector); its voltage falls when a message is sent." },
    { "term": "Module", "def": "A computer in the vehicle — engine, transmission, ABS, body, cluster — that talks on the network." },
    { "term": "Terminating resistor", "def": "A resistor at each end of the CAN bus that stabilizes signals; the pair measures about 60 ohms together." },
    { "term": "High-speed CAN", "def": "The fast CAN network carrying powertrain messages — engine, transmission, ABS." },
    { "term": "Low-speed CAN", "def": "The slower CAN network carrying body and comfort messages." },
    { "term": "U-code", "def": "A network diagnostic trouble code reporting a bus fault or lost communication with a module." },
    { "term": "Diagnostic connector", "def": "The OBD II port under the dash; CAN High is pin 6, CAN Low is pin 14." },
    { "term": "Bus dragged down", "def": "A faulty module holding the network at the wrong voltage or flooding it, silencing every other module." },
    { "term": "Network asleep", "def": "The CAN bus powered down when the vehicle is off; a sleeping bus reads zero volts." },
    { "term": "Differential signaling", "def": "Reading the difference between CAN High and CAN Low, so interference hitting both wires cancels out." }
  ],
  "video": {
    "title": "Explained! CAN Bus Diagnosis — How to Troubleshoot Faults (ECU Testing)",
    "embedUrl": "https://www.youtube.com/embed/fZMNzKpCGfc",
    "note": "ECU Testing's Tim works a high-speed CAN fault with nothing but a multimeter: checking the battery, testing at the OBD2 port with the network asleep, the 60-ohm resistance check, and disconnecting modules one at a time. It is the exact procedure in this module, shown on a real car.",
    "more": [
      { "title": "How to Use an OBD2 Scanner Like a Pro?", "url": "https://www.youtube.com/watch?v=sl3Clzi7TPY" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Resistance between pins 6 and 14 at the diagnostic connector reads about 120 ohms with the key off. What does that mean, and what is the next step?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: About 120 ohms means an open circuit — one of the two terminating resistors is not in the measurement, so the bus is broken somewhere. Step 2: Next, split the circuit — disconnect sections of the network and watch the reading — to find which section holds the open.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A car has U-codes naming five different modules, and the battery is weak. What should be fixed first, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The battery, first. Step 2: A weak battery makes modules brown out and stop communicating, which produces U-codes across many modules at once — the network is not broken, the modules are hungry.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> The network reads near zero ohms between pins 6 and 14. What kind of fault is that, and what is the test to find it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Near zero ohms means a short between CAN High and CAN Low. Step 2: Disconnect modules and sections of the network one at a time — when the reading returns to normal, the disconnected section holds the short.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> One module stops talking and the others report they cannot hear it. Name the three things to check before condemning the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Its power supply — a module with no power cannot talk. Step 2: Its ground — a bad ground silences it the same way. Step 3: Its network connections — a broken or corroded wire to the bus. Only after all three are proven good is the module itself suspect.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Disconnecting one module brings the whole network back to life. What was wrong, and why does the test work?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: That module was dragging the bus down — holding a wire at the wrong voltage or flooding the network with garbage, silencing every other module. Step 2: The test works because removing the faulty module removes the interference, and the healthy modules can talk again.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A U-code names the engine computer, and the engine will not start. Is the U-code a separate problem from the no-start? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No — it is the same problem. Step 2: If the engine computer cannot be heard on the network, the modules cannot coordinate, so the powertrain cannot work; the network fault is the drivability fault, and fixing the communication restores the start.</p>"
    }
  ],
  "quiz": [
    {
      "q": "CAN is:",
      "choices": ["A single wire to each module", "A two-wire network that lets every module share messages, each tagged with an identifier", "A type of fuel injector", "A sensor on the engine"],
      "answer": 1,
      "explanation": "Correct: (b). Two wires carry all the messages, and identifiers say who each message is for. (a) Separate wires for every message would mean thousands of wires — the network exists to avoid that. (c) Injectors are actuators, not a network. (d) A sensor reports one measurement; CAN carries all of them."
    },
    {
      "q": "At the diagnostic connector, CAN High is on pin:",
      "choices": ["16", "6", "14", "4"],
      "answer": 1,
      "explanation": "Correct: (b). CAN High is pin 6 and CAN Low is pin 14. (a) Pin 16 is battery power. (c) Pin 14 is CAN Low. (d) Pin 4 is chassis ground."
    },
    {
      "q": "A healthy high-speed CAN bus, key off and asleep, measures about how many ohms between pins 6 and 14?",
      "choices": ["0 ohms", "60 ohms", "120 ohms", "Infinite resistance"],
      "answer": 1,
      "explanation": "Correct: (b). The two terminating resistors together measure about 60 ohms. (a) Near zero means a short. (c) About 120 ohms means an open — one terminator missing from the measurement. (d) Infinite resistance means the bus is broken entirely."
    },
    {
      "q": "A reading of about 120 ohms between pins 6 and 14 means:",
      "choices": ["The bus is healthy", "An open circuit — one terminating resistor is not in the measurement", "A short circuit", "The battery is dead"],
      "answer": 1,
      "explanation": "Correct: (b). 120 ohms is one terminator alone, so the other side of the bus is open. (a) Healthy is about 60 ohms. (c) A short reads near zero. (d) Battery condition is checked separately."
    },
    {
      "q": "A car has U-codes naming many modules at once. The first thing to check is:",
      "choices": ["The most expensive module", "The battery and charging system", "The instrument cluster", "The fuel pump"],
      "answer": 1,
      "explanation": "Correct: (b). A weak battery makes many modules brown out and stop talking at once. (a) Replacing modules before checking power wastes money. (c) The cluster is one module among many. (d) The fuel pump does not cause network codes."
    },
    {
      "q": "A module dragging the bus down is found by:",
      "choices": ["Replacing all the modules", "Disconnecting modules one at a time and watching the network recover", "Clearing the codes", "Checking the fuel pressure"],
      "answer": 1,
      "explanation": "Correct: (b). When disconnecting one module brings the bus back to life, that module is the culprit. (a) Replacing everything is parts-replacing. (c) Clearing codes destroys the evidence. (d) Fuel pressure is unrelated to the network."
    },
    {
      "q": "A U-code naming a module means:",
      "choices": ["That module is definitely broken", "That the reporting module cannot hear it — it could be dead, unpowered, disconnected, or silenced by a bus fault", "The module needs a software update", "The battery is fully charged"],
      "answer": 1,
      "explanation": "Correct: (b). A U-code reports lost communication, not a proven bad module. (a) The module may simply have no power. (c) Software is one possibility among many. (d) Battery state is a separate check."
    },
    {
      "q": "CAN High and CAN Low are twisted together because:",
      "choices": ["It saves copper", "Twisting cancels out electrical interference, since the receiver reads the difference between the two wires", "It makes them stronger", "It makes them easier to find"],
      "answer": 1,
      "explanation": "Correct: (b). Differential signaling cancels interference that hits both wires equally. (a) Twisting does not save material. (c) Strength is not the purpose. (d) Finding the wires is not why they are twisted."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Network Communication Diagnosis (CAN): Quick Reference</h3>\n<p><strong>CAN:</strong> Two-wire network, every module hears every message, identifiers say who each message is for.</p>\n<p><strong>Pins:</strong> CAN High pin 6 · CAN Low pin 14 at the diagnostic connector.</p>\n<p><strong>Resistance, key off and asleep:</strong> About 60 ohms = healthy · About 120 ohms = open · Near zero = short.</p>\n<p><strong>Speeds:</strong> High-speed CAN = powertrain · Low-speed CAN = body and comfort.</p>\n<p><strong>Fault kinds:</strong> Dead module (power and ground first) · Wiring fault (split the circuit) · Module dragging the bus down (disconnect one at a time).</p>\n<p><strong>U-codes:</strong> Lost communication, not a proven bad module. Battery first, then resistance and voltage, then the module.</p>\n<p><strong>Watch out:</strong> A weak battery causes U-codes across many modules. A sleeping bus reads zero volts — that is normal.</p>\n<p><strong>Self-check:</strong> Explain the 60-ohm check and the disconnect-one-at-a-time test to a classmate.</p>\n"
};
