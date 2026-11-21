// ele108 - Module 1: Control Fundamentals: Manual vs Automatic
module.exports = {
  "number": 1,
  "slug": "control-fundamentals-manual-vs-automatic",
  "title": "Control Fundamentals: Manual vs Automatic",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a motor control system does: start, stop, protect, and sequence a motor.",
    "Compare manual, semi-automatic, and automatic control and give an example of each.",
    "Describe the parts of a control system: power circuit, control circuit, and load.",
    "Explain open-loop versus closed-loop control with examples.",
    "Describe the control devices that sense conditions: temperature, pressure, level, and flow."
  ],
  "sections": [
    {
      "heading": "What Motor Control Does",
      "html": "<p>A motor control system does four jobs: it <strong>starts</strong> the motor, it <strong>stops</strong> the motor, it <strong>protects</strong> the motor and the people around it, and it <strong>sequences</strong> the motor with other equipment. A bare motor connected straight to a breaker can do none of these well — it starts whenever the breaker is closed, it has no overload protection of its own, and it cannot be told to wait for another machine. Control is the layer between the power supply and the motor that adds those decisions. Every control system, from a simple wall switch to a PLC, is built from the same ideas in this module.</p>\n<p>Control is split into two circuits that work together. The <strong>power circuit</strong> carries the heavy current to the motor — the three-phase lines, the contactor's main contacts, and the overload relay's heaters. The <strong>control circuit</strong> carries the small current that operates the contactor's coil and the pilot devices — push buttons, limit switches, and timers — usually at a lower voltage such as 120 V or 24 V. Keeping the two circuits separate is what makes control safe to operate: the operator touches only the low-current control devices, never the power conductors.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Control adds decisions to power. The power circuit feeds the motor; the control circuit decides when the power circuit is allowed to do it.</div>"
    },
    {
      "heading": "Manual, Semi-Automatic & Automatic Control",
      "html": "<p>In <strong>manual control</strong>, a person operates the control directly — a drum switch on a drill press, a toggle switch on a fan, a push button that must be held down. The operator is the decision-maker, and the machine does exactly what the operator's hands do. Manual control is simple and cheap, and it is right for machines that run only while someone is standing at them. Its weakness is that it cannot respond to anything the operator does not see, and it cannot protect the motor from an overload the operator does not notice.</p>\n<p><strong>Automatic control</strong> lets devices make the decisions: a thermostat starts a fan when the room gets warm, a float switch starts a pump when the tank fills, a pressure switch cycles a compressor. The operator sets the conditions and walks away. <strong>Semi-automatic control</strong> sits between the two: a person starts the cycle, and the machine finishes it on its own — a start button that launches a timed sequence, for example. Most industrial control is automatic or semi-automatic, because machines must respond faster and more reliably than a person can, and they must keep working when nobody is watching.</p>"
    },
    {
      "heading": "Open-Loop vs Closed-Loop Control",
      "html": "<p>Control systems come in two shapes. An <strong>open-loop</strong> system sends a command and does not check the result: press the start button and the motor runs, whether or not the load is actually moving. A toaster is open-loop — it runs the heater for a set time and never measures the toast. Open-loop control is simple and works when the outcome is predictable. A <strong>closed-loop</strong> system measures the result and corrects itself: a thermostat measures the room temperature and turns the heater off when the setpoint is reached, then on again when the room cools. The measurement is called <strong>feedback</strong>, and the difference between the setpoint and the measurement is the <strong>error</strong> the controller works to eliminate.</p>\n<p>Most motor control you will meet is open-loop at the motor itself — the contactor is either on or off — with closed-loop control around it at the process level: a temperature switch, a pressure switch, or a level switch tells the contactor what to do. A variable frequency drive (Module 9) is a closed-loop device in itself when it uses feedback from a sensor to hold a speed or a pressure. Knowing which loop you are looking at tells you where to troubleshoot: in an open-loop system the fault is in the command or the device; in a closed-loop system it can also be in the sensor or the feedback path.</p>"
    },
    {
      "heading": "Sensing Devices and Why Control Voltage Is Low",
      "html": "<p>Automatic control needs senses, and industry has a sensor for every condition that matters. A <strong>thermostat</strong> senses temperature, a <strong>pressure switch</strong> senses pressure, a <strong>float switch</strong> senses liquid level, a <strong>flow switch</strong> senses movement of liquid or air, a <strong>limit switch</strong> senses the position of a moving part, and a <strong>photoelectric sensor</strong> senses the presence of an object without touching it (Module 7 of Electrical 109 covers sensors in detail). Each of these is a switch in the control circuit: when the condition is met, its contacts change state and the control circuit responds — starting a motor, stopping it, or sounding an alarm.</p>\n<p>Control circuits usually run at a lower voltage than the power circuit — 120 V from a control transformer, or 24 V DC — for two reasons. First, safety: the operator's push buttons and the sensors scattered around the machine carry only the control voltage, so a damaged wire or a wet push button is far less dangerous than a 480 V conductor in the same place. Second, size and cost: control devices, coils, and wiring can be smaller and cheaper at low voltage and low current. The control transformer that makes that low voltage is the subject of Module 3.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Treating the control circuit and the power circuit as one circuit. They are separate circuits with separate voltages, separate protection, and separate drawings — and troubleshooting them needs different measurements and different expectations.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Motor control starts, stops, protects, and sequences a motor — the four jobs of every control system.</li>\n<li>The power circuit carries motor current; the control circuit operates the contactor coil and pilot devices, usually at lower voltage.</li>\n<li>Manual control: the operator decides. Automatic control: devices decide. Semi-automatic: the operator starts, the machine finishes.</li>\n<li>Open-loop sends a command without checking; closed-loop measures the result (feedback) and corrects the error.</li>\n<li>Sensors — thermostat, pressure switch, float switch, limit switch, photoelectric sensor — are switches in the control circuit.</li>\n<li>Control voltage is low for safety and for smaller, cheaper devices.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Assuming a control system is broken when the motor does not start, without checking whether a sensor is simply telling it not to start. A float switch holding a pump off because the tank is full is the system working, not failing.</div>\n<p><strong>Ready-to-Work link:</strong> If you can name the four jobs of control, explain the two circuits, and tell open-loop from closed-loop, you have this module. Module 2 covers contactors, relays, and overloads.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Motor control", "def": "The system that starts, stops, protects, and sequences a motor." },
    { "term": "Power circuit", "def": "The circuit that carries the heavy current to the motor." },
    { "term": "Control circuit", "def": "The circuit that operates the contactor coil and pilot devices, usually at lower voltage." },
    { "term": "Manual control", "def": "Control in which a person operates the switching device directly." },
    { "term": "Automatic control", "def": "Control in which sensing devices make the start and stop decisions." },
    { "term": "Semi-automatic control", "def": "Control in which a person starts a cycle that the machine then finishes on its own." },
    { "term": "Open-loop control", "def": "A system that sends a command without measuring the result." },
    { "term": "Closed-loop control", "def": "A system that measures the result and corrects itself using feedback." },
    { "term": "Feedback", "def": "A measurement of the controlled result, fed back to the controller." },
    { "term": "Setpoint", "def": "The target value a closed-loop controller tries to hold." },
    { "term": "Error", "def": "The difference between the setpoint and the measured value." },
    { "term": "Thermostat", "def": "A temperature-sensing switch that opens or closes at a set temperature." },
    { "term": "Pressure switch", "def": "A switch that operates at a set pressure." },
    { "term": "Float switch", "def": "A switch operated by liquid level." },
    { "term": "Limit switch", "def": "A switch operated by the position of a moving machine part." }
  ],
  "video": {
    "title": "Motor Control 101",
    "embedUrl": "https://www.youtube.com/embed/aml0VGzNXEo",
    "note": "A plain-language introduction to motor control — what the power circuit and the control circuit each do, and how a small control signal switches a large motor.",
    "more": [
      { "title": "Motor control fundamentals | Eaton PSEC", "url": "https://www.youtube.com/watch?v=L46PWrQChtA" },
      { "title": "Basic Motor Controls Explained", "url": "https://www.youtube.com/watch?v=imr3zBi3pCw" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A sump pump starts when the water rises and stops when it falls. Is this manual, semi-automatic, or automatic control, and what senses the water?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Automatic control — no person is involved in the start or stop decision. Step 2: A float switch senses the water level. Step 3: The float switch's contacts close when the water rises and open when it falls.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A drill press has a drum switch the operator turns to start and stop the motor. Is this open-loop or closed-loop control? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Open-loop. Step 2: The switch sends the command and nothing measures whether the drill is actually turning. Step 3: If the belt slips, the control has no way to know or to correct it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A room thermostat holds a room at 70°F. Identify the setpoint, the feedback, and the error when the room is at 65°F.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Setpoint = 70°F. Step 2: Feedback = the measured room temperature, 65°F. Step 3: Error = 70 − 65 = 5°F, so the controller calls for heat until the error reaches zero.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Why do control circuits usually run at 120 V or 24 V instead of the 480 V of the power circuit? Give two reasons.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Safety — operators and sensors touch control wiring, and a lower voltage is far less dangerous if a wire is damaged. Step 2: Size and cost — control devices, coils, and wiring can be smaller and cheaper at low voltage and low current.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A conveyor starts when an operator presses a button, then runs through a timed sequence and stops itself. Is this manual, semi-automatic, or automatic?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Semi-automatic. Step 2: A person starts the cycle, and the machine finishes it on its own. Step 3: It is not fully automatic because it needs the operator to start each cycle.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A motor will not start. The control circuit has a float switch in series with the start button, and the tank is full. Is the control system broken?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Probably not — the system is working as designed. Step 2: The float switch is holding the pump off because the tank is full; that is its job. Step 3: Check the sensor's state before condemning the starter — a sensor telling the system not to run is the system working, not failing.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The four jobs of a motor control system are to:",
      "choices": ["Start, stop, protect, and sequence the motor", "Make, break, heat, and cool the motor", "Measure, record, report, and bill the motor", "Wind, insulate, paint, and ship the motor"],
      "answer": 0,
      "explanation": "Correct: (a). Start, stop, protect, sequence. (b) Heating and cooling are not control jobs. (c) Measuring and billing are not control jobs. (d) Winding and painting are manufacturing jobs."
    },
    {
      "q": "The power circuit differs from the control circuit in that it:",
      "choices": ["Carries the heavy current to the motor", "Operates the contactor coil", "Runs at a lower voltage", "Contains the push buttons"],
      "answer": 0,
      "explanation": "Correct: (a). The power circuit feeds the motor. (b) The coil is in the control circuit. (c) The control circuit is the low-voltage one. (d) Push buttons are in the control circuit."
    },
    {
      "q": "A thermostat controlling a heater is an example of:",
      "choices": ["Open-loop control", "Closed-loop control", "Manual control only", "No control at all"],
      "answer": 1,
      "explanation": "Correct: (b). The thermostat measures the temperature and corrects it — feedback. (a) Open-loop sends a command without measuring. (c) The thermostat decides on its own. (d) It is a control system."
    },
    {
      "q": "In a closed-loop system, the error is:",
      "choices": ["A wiring mistake", "The difference between the setpoint and the measured value", "The sensor's brand name", "The motor's speed"],
      "answer": 1,
      "explanation": "Correct: (b). Error = setpoint − measurement. (a) A wiring mistake is a fault, not the control error. (c) Brand names are irrelevant. (d) Speed is a measurement, not the error."
    },
    {
      "q": "A float switch is used to sense:",
      "choices": ["Temperature", "Pressure", "Liquid level", "Motor speed"],
      "answer": 2,
      "explanation": "Correct: (c). A float switch operates by liquid level. (a) Temperature is sensed by a thermostat. (b) Pressure is sensed by a pressure switch. (d) Speed is sensed by a tachometer or encoder."
    },
    {
      "q": "Semi-automatic control means:",
      "choices": ["The machine runs with no operator at all", "A person starts the cycle and the machine finishes it on its own", "The operator must hold the button the whole time", "Two operators are required"],
      "answer": 1,
      "explanation": "Correct: (b). Operator starts, machine finishes. (a) That is fully automatic. (c) That is manual control. (d) The number of operators does not define the type."
    },
    {
      "q": "Control circuits run at lower voltage mainly for:",
      "choices": ["Safety and smaller, cheaper devices", "Faster motor starting", "Higher motor torque", "Longer wire runs"],
      "answer": 0,
      "explanation": "Correct: (a). Lower voltage is safer to touch and allows smaller devices. (b) Control voltage does not change starting speed. (c) Control voltage does not change torque. (d) Lower voltage is worse for long runs, not better."
    },
    {
      "q": "A limit switch is operated by:",
      "choices": ["The temperature of the motor", "The position of a moving machine part", "The pressure in a pipe", "The level of liquid in a tank"],
      "answer": 1,
      "explanation": "Correct: (b). A limit switch senses position. (a) Temperature is sensed by a thermostat. (c) Pressure is sensed by a pressure switch. (d) Level is sensed by a float switch."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — Control Fundamentals: Quick Reference</h3>\n<p><strong>Core idea:</strong> Control adds decisions to power. The power circuit feeds the motor; the control circuit decides when.</p>\n<p><strong>Four jobs:</strong> Start · Stop · Protect · Sequence.</p>\n<p><strong>Types:</strong> Manual (operator decides) · Automatic (devices decide) · Semi-automatic (operator starts, machine finishes).</p>\n<p><strong>Loops:</strong> Open-loop — command without checking · Closed-loop — feedback measures the result and corrects the error (setpoint − measurement).</p>\n<p><strong>Sensors:</strong> Thermostat (temperature) · Pressure switch · Float switch (level) · Limit switch (position) · Photoelectric (presence).</p>\n<p><strong>Self-check:</strong> Name the four jobs of control and tell open-loop from closed-loop. If you can, you have this module.</p>\n"
};
