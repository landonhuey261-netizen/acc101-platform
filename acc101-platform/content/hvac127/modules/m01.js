// HVAC 127 - Module 1: Control Fundamentals
module.exports = {
  number: 1,
  slug: "control-fundamentals",
  title: "Control Fundamentals",
  estTime: "3–4 hours",
  objectives: [
    "Define a control system and name its three essential parts: sensor, controller, and controlled device.",
    "Trace a signal around a complete control loop from measurement to correction and back.",
    "Distinguish the controlled variable, the setpoint, and the error (offset) in a working system.",
    "Explain why every automatic control needs a power source and a signal path, and identify both on real equipment.",
    "Classify common HVAC devices as sensors, controllers, or controlled devices without hesitation."
  ],
  sections: [
    {
      heading: "What a Control System Is",
      html: `
<p>A <strong>control system</strong> is any arrangement of devices that holds some condition where you want it without a human standing there adjusting it. In HVAC work the condition is usually temperature, but it can just as well be pressure, humidity, airflow, or fluid level. Before controls, a fireman watched a boiler gauge and opened or closed a damper by hand all day. Automatic controls replaced the watching and the hand — not the judgment. Your job as a controls technician is to understand what the machine is trying to do so you can tell when it is failing.</p>
<p>Every control system, from a $15 line-voltage thermostat to a campus-wide automation network, is built from the same three functional parts:</p>
<ul>
<li><strong>Sensor</strong> — measures the condition you care about (the <em>controlled variable</em>) and turns it into a signal. A bulb of temperature-sensitive fluid, a thermistor, and a pressure transducer are all sensors.</li>
<li><strong>Controller</strong> — receives the sensor's signal, compares it with the desired value (the <em>setpoint</em>), and decides what to do about the difference.</li>
<li><strong>Controlled device</strong> — does the physical work the controller commands: a valve opens, a damper swings, a contactor pulls in, a compressor starts.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Sensor, controller, controlled device. If you can point at a piece of equipment and say which of the three it is — or admit it combines two of them — you can reason about any control system you will ever meet.</div>
<p>A residential thermostat is the classic combined package: it contains the sensor (its internal temperature element), the controller (the comparison and switching logic), and it commands controlled devices it does not contain — the contactor, gas valve, and blower relay in the equipment. When someone says "the thermostat is bad," they may mean any of those functions. This course teaches you to separate them.</p>`
    },
    {
      heading: "The Control Loop, Traced Once Around",
      html: `
<p>Connect the three parts in a circle and you have a <strong>control loop</strong>. Follow a cooling loop on a small rooftop unit. The sensor measures space temperature at 76°F. The controller compares that with a setpoint of 74°F and finds the space 2°F too warm. The controller energizes its cooling output. The controlled device — the compressor contactor — pulls in and the compressor runs. Refrigeration removes heat, the space cools toward 74°F, and the sensor reports the new value. The loop never stops; it is a continuous conversation of measure, compare, act, and measure again.</p>
<p>Three vocabulary words ride on that loop:</p>
<ul>
<li><strong>Controlled variable:</strong> the condition being held — here, space temperature.</li>
<li><strong>Setpoint:</strong> the value the operator chose — 74°F.</li>
<li><strong>Error (offset):</strong> setpoint minus measured value, with sign depending on convention; here the space is 2°F above setpoint, an error that calls for cooling.</li>
</ul>
<div class="formula">Error = Setpoint − Measured value (the controller acts to drive error toward zero)</div>
<p><strong>Worked example:</strong> A warehouse thermostat is set to 68°F for heating. The sensor reads 65°F. The error is 3°F in the heating direction, so the controller calls for heat. The furnace runs, the sensor reading climbs — 66, 67, 68 — and as the error shrinks the controller prepares to end the call. If the sensor were lying — reading 72°F while the room is really 65°F — every downstream decision would be wrong even though the controller and furnace are perfect. That is why experienced techs verify the sensor first: <em>a control system is only as honest as its measurement.</em></p>
<div class="callout"><strong>Key idea:</strong> Troubleshooting a loop means breaking it mentally into measure → compare → act. Test each leg separately and the guilty part identifies itself.</div>`
    },
    {
      heading: "Signals and Power: The Loop's Plumbing",
      html: `
<p>Parts of a loop communicate by <strong>signals</strong>, and every signal rides on some energy. In HVAC controls you will meet four signal families, and this course covers each in depth:</p>
<ul>
<li><strong>Electrical signals</strong> — a thermostat switching 24 VAC, a sensor changing resistance, a transmitter sending 4–20 mA, or a controller outputting 0–10 VDC (Modules 3–5).</li>
<li><strong>Pneumatic signals</strong> — air pressure in a tube, typically a varying branch pressure between a controller and an air-powered actuator (Module 6).</li>
<li><strong>Mechanical signals</strong> — linkages, capillaries, and expanding fluids that carry information by physical movement.</li>
<li><strong>Digital signals</strong> — numbers carried on a network cable between microprocessor controllers (Modules 8–9).</li>
</ul>
<p>Power matters as much as signal. A 24 VAC control transformer does not merely "run the thermostat"; its limited capacity (sized in VA) must supply every relay coil, contactor coil, and board hanging on it. A classic field fault is a system that works until two loads energize together and the overloaded transformer sags, chattering a contactor. When you trace a loop, trace its power source too.</p>
<div class="callout"><strong>Key idea:</strong> Ask two questions of every device: <em>What tells it what to do?</em> (signal in) and <em>What does it move or switch?</em> (work out). A device with no signal in is not being controlled; a device with no work out is not controlling anything.</div>
<p>Signals also have direction. An input carries information <em>into</em> a controller; an output carries a command <em>out of</em> it. Confusing the two at a terminal strip is the beginner's most expensive mistake, because applying power to an output or an input expecting a dry contact can damage a board. Read the labels, then verify with a meter before landing wires.</p>`
    },
    {
      heading: "Manual, Automatic, and Fail-Safe Thinking",
      html: `
<p>Not every control is automatic. A hand valve is a controlled device with a human as sensor and controller. Automatic control earns its cost when conditions change faster, more often, or in more places than a person can attend — and when the process must hold steady overnight, over weekends, and through lunch breaks. But automation adds a question manuals never ask: <strong>what should happen when something fails?</strong></p>
<p>Good control design answers that question in advance. A heating valve on a coil exposed to freezing outdoor air is commonly chosen <em>fail-open</em> (spring return drives it open on power or air loss) so a dead control cannot freeze the coil. A gas valve is fail-closed, because the dangerous failure is unburned fuel, not a cold building. This <strong>normal position</strong> thinking — normally open (NO) versus normally closed (NC), energize-to-run versus de-energize-to-safe — appears in nearly every module of this course, from relay contacts to DDC programming.</p>
<div class="callout"><strong>Key idea:</strong> "Fails safe" does not mean "fails off." It means the designer chose the failure position that protects people and equipment for that specific application. A freeze-protection valve that fails closed fails dangerously.</div>
<p><strong>Worked example:</strong> A spring-return damper actuator loses power on a winter night. If the spring drives the outdoor-air damper closed, the building simply recirculates its own air until power returns — a safe failure. If the same actuator were linked backward so the spring drove the damper open, sub-freezing air would pour across the heating coil. Same parts, same failure, opposite outcomes: the difference is design intent, and reading that intent from the hardware is a core controls skill.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Every control system = sensor + controller + controlled device, connected in a loop.</li>
<li>The controller compares the measured controlled variable with the setpoint; the difference is the error it acts to eliminate.</li>
<li>Signals carry the loop's information (electrical, pneumatic, mechanical, digital); every loop also needs a power source sized for its loads.</li>
<li>Inputs bring information in; outputs send commands out. Verify before you land wires.</li>
<li>Fail-safe means failing to the position that protects people and equipment — which may be open, closed, running, or stopped depending on the application.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Replacing the controller when the sensor is lying. A controller acting on bad information produces bad control with perfectly good parts. Verify the measurement against an independent instrument before condemning anything downstream.</div>
<div class="callout"><strong>Common mistake:</strong> Treating "the thermostat" as one indivisible thing. Sensing, deciding, and switching are separate functions; each can fail alone, and each is tested differently.</div>
<p><strong>NATE Core link:</strong> NATE's Core exam includes Achieving Desired Conditions and Basic Electrical among its domains. The sensor–controller–device model in this module is the mental framework those questions assume: name the controlled variable, find the setpoint, and follow the signal.</p>`
    }
  ],
  keyTerms: [
    { term: "Control system", def: "An arrangement of devices that automatically holds a condition (temperature, pressure, humidity) at a desired value." },
    { term: "Sensor", def: "The device that measures the controlled variable and converts it into a signal the controller can use." },
    { term: "Controller", def: "The device that compares the sensor signal with the setpoint and decides the corrective action." },
    { term: "Controlled device", def: "The equipment that does the physical work on command — a valve, damper actuator, contactor, or motor." },
    { term: "Control loop", def: "The closed path of measure, compare, act, and measure again that keeps a variable at setpoint." },
    { term: "Controlled variable", def: "The condition being regulated, such as space temperature, duct pressure, or humidity." },
    { term: "Setpoint", def: "The desired value of the controlled variable, chosen by the operator or programmer." },
    { term: "Error (offset)", def: "The difference between setpoint and the measured value; the controller acts to drive it toward zero." },
    { term: "Signal", def: "The information carrier between loop parts: electrical, pneumatic, mechanical, or digital." },
    { term: "Input", def: "A signal flowing into a controller, carrying information about a condition." },
    { term: "Output", def: "A signal flowing out of a controller, carrying a command to a controlled device." },
    { term: "Normally open (NO)", def: "A contact or valve position that is open when the device is de-energized or unpowered." },
    { term: "Normally closed (NC)", def: "A contact or valve position that is closed when the device is de-energized or unpowered." },
    { term: "Fail-safe", def: "A design choice so that on power or signal loss the device moves to the position safest for people and equipment." },
    { term: "Control transformer", def: "The step-down transformer, commonly supplying 24 VAC, that powers low-voltage control circuits; sized in VA." },
    { term: "Actuator", def: "A controlled device that converts a signal into mechanical motion to position a valve or damper." },
    { term: "Feedback", def: "Information returning to the controller about the result of its action, closing the loop." },
    { term: "Load (electrical)", def: "Any device drawing power from a control circuit, such as a relay or contactor coil." }
  ],
  video: {
    title: "Intro to HVAC Controls Class 1 Webinar",
    embedUrl: "https://www.youtube.com/embed/cCFIBw7zU6k",
    note: "A class-style introduction to HVAC controls covering the basic building blocks of control systems. Watch how the instructor breaks systems into sensing, deciding, and acting parts, and map each example onto the sensor–controller–controlled device model from this module.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> For each item, label it S (sensor), C (controller), or D (controlled device): (a) a thermistor taped to a discharge-air duct, (b) a thermostat's switching logic, (c) a chilled-water valve actuator, (d) a humidity sensor in a return duct, (e) a damper motor on an economizer.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Ask what each item does — measure, decide, or move. Step 2: (a) S — it only measures duct temperature. (b) C — it compares and decides. (c) D — it moves the valve on command. (d) S — it measures humidity. (e) D — it positions the damper. Note that a thermostat as a whole box combines S and C, which is why item (b) names its logic only.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A cooler thermostat is set to 38°F. The sensor inside the case reads 43°F. (a) What is the error, and in which direction? (b) What should the controller output be doing?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Error = setpoint − measured = 38 − 43 = <strong>−5°F</strong>; the case is 5°F warmer than setpoint. Step 2: For a cooling controller, a warm error calls for more cooling, so the output should be calling for the refrigeration system to run (or run longer) until the measured value approaches 38°F and the error shrinks toward zero.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A rooftop unit heats a space to 61°F although the thermostat is set to 70°F. Your thermometer beside the thermostat reads 70°F at the wall but the thermostat's own displayed temperature reads 61°F. Which loop function is faulty, and why do you test it first?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Compare the loop's measurement against an independent instrument at the same location: the wall is truly 70°F. Step 2: The thermostat believes the room is 61°F, so its <strong>sensor</strong> (or its location/calibration) is wrong. Step 3: Test sensing first because every later decision — comparing and switching — is built on that measurement; a perfect controller with a lying sensor will always produce wrong control.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> An outdoor-air damper serves a coil that can freeze. On loss of control power, should the spring-return actuator drive the damper open or closed? Explain in terms of fail-safe design.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Identify the danger on failure in winter: sub-freezing air across a water coil bursts the coil. Step 2: The safe failure position is therefore damper <strong>closed</strong>, so the spring must drive it closed on power loss. Step 3: 'Fail-safe' means failing to the protective position for this application, not automatically failing open or off.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A technician lands a wire carrying 24 VAC onto a controller terminal labeled as an input expecting a dry (unpowered) contact closure. What two things are wrong with calling this finished work?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: An input is a receiving point; applying external voltage to a dry-contact input can damage the controller's input circuitry. Step 2: The error came from skipping verification — direction of the signal (in versus out) and what the terminal expects must be read from the device labeling and confirmed before landing wires. Direction and signal type are part of the connection, not details to discover afterward.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Write a one-paragraph loop trace for a dehumidifier control: sensor, controller, controlled device, controlled variable, setpoint, and what happens as the variable approaches setpoint.</p>",
      solution: "<p><strong>Answer (example):</strong> Step 1: The <strong>sensor</strong> is a humidity element in the space measuring the <strong>controlled variable</strong>, relative humidity. Step 2: The <strong>controller</strong> compares the reading with the <strong>setpoint</strong>, say 50% RH; at 58% RH the error calls for drying. Step 3: The controller starts the <strong>controlled device</strong> — the dehumidifier's compressor and fan. Step 4: Moisture condenses out, RH falls toward 50%, the error shrinks, and the controller stops the machine before overshooting far below setpoint. Then the loop keeps watching.</p>"
    }
  ],
  quiz: [
    {
      q: "The three essential parts of every control system are the:",
      choices: ["Transformer, fuse, and terminal strip", "Sensor, controller, and controlled device", "Thermostat, furnace, and ductwork", "Compressor, condenser, and evaporator"],
      answer: 1,
      explanation: "Correct: (b). Sensing, deciding, and acting are the three functions every loop needs. (a) lists power hardware, which serves the loop but performs none of the three functions. (c) names one common package and equipment, not the universal functions. (d) lists refrigeration components, which are controlled equipment, not the control system's structure."
    },
    {
      q: "In a control loop, the error is best defined as:",
      choices: ["The amount the equipment is oversized", "The wiring mistake found during checkout", "The difference between the setpoint and the measured value", "The time delay before equipment starts"],
      answer: 2,
      explanation: "Correct: (c). The controller exists to act on this difference and drive it toward zero. (a) is a design issue, not a loop quantity. (b) misuses the term; an installation mistake is a fault, not the error signal. (d) describes a timing function, which may shape the response but is not the error itself."
    },
    {
      q: "A sensor reads 65°F in a room that is actually 72°F. The controller and equipment are perfect. The room will most likely end up:",
      choices: ["At setpoint, because the controller corrects sensor error", "Too warm or too cold, because the controller acts on the false 65°F value", "Unchanged, because faulty sensors shut systems down", "Cycling rapidly with no temperature effect"],
      answer: 1,
      explanation: "Correct: (b). The controller can only act on the information it receives; a 7°F-low measurement shifts every decision by 7°F. (a) is false — a standard controller has no way to know its sensor lies. (c) is wrong; most sensor failures produce wrong control, not a safe shutdown. (d) describes a different fault pattern (short cycling), not a steady measurement offset."
    },
    {
      q: "Which device is a controlled device?",
      choices: ["A duct temperature sensor", "A thermostat's comparison circuit", "A modulating damper actuator", "A setpoint dial"],
      answer: 2,
      explanation: "Correct: (c). The actuator does physical work — positioning the damper — on command. (a) only measures, so it is a sensor. (b) compares and decides, so it is controller function. (d) merely communicates the operator's chosen setpoint to the controller; it moves nothing in the process."
    },
    {
      q: "A heating valve on a coil exposed to freezing air is usually selected to fail open on loss of control power because:",
      choices: ["Open valves use less energy", "Water flow through the coil protects it from freezing", "Fail-safe always means fail open", "The pump cannot run with the valve closed"],
      answer: 1,
      explanation: "Correct: (b). Moving water resists freezing and keeps heat available to the coil during a control failure. (a) is irrelevant and generally untrue. (c) is the trap answer — fail-safe means failing to the safest position for that application, which for a gas valve is closed. (d) is false; pumps routinely run against control valves in other positions."
    },
    {
      q: "Before landing a wire on a controller terminal, the two things to verify are:",
      choices: ["Wire color and wire length", "Signal direction (input vs output) and the signal type the terminal expects", "The brand of the controller and the age of the building", "Whether the wire is copper or aluminum only"],
      answer: 1,
      explanation: "Correct: (b). Applying power to a dry-contact input or connecting an output as an input can damage the board and guarantees wrong operation. (a) Color conventions help but do not establish what a terminal is. (c) Neither fact tells you how to wire the point. (d) Conductor material matters for terminations generally but is not the verification that protects the input."
    },
    {
      q: "A 24 VAC control transformer begins to sag in voltage only when two contactor coils energize at once. The root problem is:",
      choices: ["The setpoint is too low", "The transformer is undersized (in VA) for the combined connected load", "The sensor needs recalibration", "The control loop is open-loop"],
      answer: 1,
      explanation: "Correct: (b). Each coil alone is within capacity, but the combined simultaneous load exceeds the transformer's VA rating, so voltage sags under load. (a) A setpoint change cannot fix an electrical capacity problem. (c) Sensor calibration affects temperature accuracy, not control voltage. (d) The loop architecture is unrelated to a power supply sagging under load."
    },
    {
      q: "The controlled variable in a duct static-pressure control loop is:",
      choices: ["The fan's speed command", "The pressure sensor's output voltage", "The duct static pressure itself", "The setpoint entered at the front end"],
      answer: 2,
      explanation: "Correct: (c). The variable being held at a value is the duct pressure; the loop exists to keep it steady as dampers move. (a) is the controller's output action, the means rather than the goal. (b) is the sensor's representation of the variable, not the variable itself. (d) is the desired value of the variable, not the variable."
    }
  ],
  studyGuide: `
<h3>Module 1 — Control Fundamentals: Quick Reference</h3>
<p><strong>The model:</strong> Sensor → Controller → Controlled device → process changes → sensor again. Every control system in this course is this loop wearing different clothes.</p>
<ul>
<li><strong>Controlled variable:</strong> the condition held (temperature, pressure, humidity). <strong>Setpoint:</strong> its desired value. <strong>Error:</strong> setpoint − measured; the controller acts to zero it.</li>
<li><strong>Signal families:</strong> electrical (24 VAC switching, resistance, 4–20 mA, 0–10 V), pneumatic (branch air pressure), mechanical, digital (network data).</li>
<li><strong>Inputs</strong> carry information in; <strong>outputs</strong> carry commands out. Verify direction and signal type before landing wires — a dry-contact input fed with voltage is a damaged board.</li>
<li><strong>Power:</strong> the 24 VAC control transformer must be sized in VA for all simultaneous loads; sagging voltage under combined load = undersized transformer until proven otherwise.</li>
<li><strong>NO/NC and fail-safe:</strong> normal position is the de-energized position. Fail-safe = failure position that protects people/equipment: freeze-exposed heating valve fails open; gas valve fails closed.</li>
<li><strong>Troubleshooting order:</strong> verify the measurement with an independent instrument first — a controller acting on a lying sensor produces wrong control with good parts.</li>
</ul>
<p><strong>Field habit:</strong> for any device, ask "What tells it what to do?" and "What does it move or switch?" If you cannot answer both, you do not understand the loop yet.</p>`
};
