// HVAC 127 - Module 8: Introduction to Direct Digital Control (DDC)
module.exports = {
  number: 8,
  slug: "introduction-to-ddc",
  title: "Introduction to Direct Digital Control (DDC)",
  estTime: "3–4 hours",
  objectives: [
    "Define direct digital control and explain what the microprocessor replaced and what it did not.",
    "Classify any field point as AI, AO, DI, or DO and defend the classification.",
    "Describe the layered architecture from field devices to field controllers to supervisory controllers to the front end.",
    "Explain what a DDC controller can do that a standalone thermostat cannot.",
    "Build a correct point list for a simple air handler from a sequence description."
  ],
  sections: [
    {
      heading: "What 'Direct Digital Control' Actually Means",
      html: `
<p><strong>Direct digital control</strong> means a microprocessor — a small computer — sits directly in the control loop: it reads sensors through its inputs, runs control logic in software (the PID loops of Module 2, schedules, alarms), and drives equipment through its outputs. "Digital" refers to the <em>controller's brain</em> being digital, not to the field devices: the sensors and actuators at the ends of the wires are still the analog and two-position devices of Modules 3–6. A DDC system measuring temperature with a thermistor and stroking a valve with 0–10 V is digital in the middle and analog at both ends.</p>
<p>What did the microprocessor actually buy? Four things no thermostat or pneumatic panel could offer:</p>
<ul>
<li><strong>Logic in software:</strong> change the strategy by editing, not rewiring — staging, resets, interlocks, and PID tuning are configuration.</li>
<li><strong>Memory:</strong> schedules, setpoints, and history live in the controller; it knows what time it is and what happened yesterday.</li>
<li><strong>Communication:</strong> controllers share data — one outdoor sensor can serve fifty loops — and report to a central front end (Module 9).</li>
<li><strong>Self-awareness:</strong> alarms, run-time totals, and fault detection are built in; the system can call for help.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> DDC replaced the <em>deciding</em>, not the sensing or the muscle. A DDC panel with a lying sensor produces wrong control at network speed — Modules 1–7 fundamentals still govern.</div>`
    },
    {
      heading: "The Four Point Types: AI, AO, DI, DO",
      html: `
<p>Every wire landing on a DDC controller carries one of four <strong>point types</strong>. Learn the 2×2 grid — analog vs. digital, input vs. output — and DDC hardware never mystifies you again:</p>
<ul>
<li><strong>AI — Analog Input:</strong> a varying measurement coming in: thermistor, 4–20 mA, 0–10 V. Examples: space temperature, duct static pressure, humidity, valve position feedback.</li>
<li><strong>AO — Analog Output:</strong> a varying command going out: 0–10 V or 4–20 mA to position something. Examples: modulating valve, damper actuator, VFD speed command.</li>
<li><strong>DI — Digital Input:</strong> a two-state fact coming in: contact open or closed. Examples: fan status (current switch), flow switch, filter alarm switch, door switch.</li>
<li><strong>DO — Digital Output:</strong> a two-state command going out: relay or triac on/off. Examples: fan start/stop, pump enable, stage of heat, alarm horn.</li>
</ul>
<div class="formula">Analog = 'how much.' Digital = 'which state.' Input = the controller listens. Output = the controller speaks.</div>
<div class="callout"><strong>Key idea:</strong> Confusing an AO with an AI at the panel is the DDC version of Module 1's warning: outputs and inputs are different electrical animals, and landing a field device on the wrong type damages boards or simply never works. Count and classify points before you pull wire.</div>
<p>Controllers are sold by their point complement (for example, a unit controller might offer some fixed mix of UI/AI/AO/DI/DO, with 'universal inputs' that can be configured per point). The <strong>points list</strong> — a table of every field device, its type, its range, and its controller address — is the foundational document of every DDC job; Module 10's sequences and Module 12's checkout both hang off it.</p>`
    },
    {
      heading: "Architecture: Field, Controller, Supervisor, Front End",
      html: `
<p>DDC systems are layered, and knowing the layers tells you where a given function lives:</p>
<ul>
<li><strong>Field level:</strong> the sensors, actuators, valves, dampers, and drives — the physical world of Modules 3–6.</li>
<li><strong>Field (application) controllers:</strong> microprocessors dedicated to one piece of equipment — a rooftop unit, a VAV box, an air handler. They run their loops autonomously, thousands of times a day, whether or not anyone is watching. A VAV controller modulating its damper to hold airflow is the canonical example.</li>
<li><strong>Supervisory controllers:</strong> network-level engines that coordinate many field controllers: schedules, global strategies (demand limiting), alarm routing, trend storage, and the bridge to the operator's screens. They supervise; they usually don't close fast loops themselves.</li>
<li><strong>Front end (operator workstation/server):</strong> where humans see graphics, change setpoints, acknowledge alarms, and pull reports — Module 9's territory.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Good architecture keeps control <em>local</em>: if the network or server dies, field controllers keep running their equipment on their last instructions. A system that freezes a building when a PC reboots was designed wrong, and recognizing that distinction is professional-grade thinking.</div>
<p><strong>Worked example — the tutor's favorite question:</strong> <em>What can a DDC controller do that a thermostat cannot?</em> A thermostat closes one loop around one variable with fixed logic. A DDC controller runs many loops, follows a calendar, resets setpoints by outdoor temperature, shares one sensor across a building, limits electrical demand by shedding loads in rotation, trends its own performance for a month, and phones the operator at 2 a.m. when a freezer warms. Same loop ancestry — vastly wider responsibilities.</p>`
    },
    {
      heading: "Standalone vs. Networked, and the Controller's Program",
      html: `
<p>Not every DDC controller is networked: a single rooftop unit may run a perfectly capable DDC board that never talks to anything (unit control boards from Module 7 are, in effect, fixed-program DDC). The industry divides controllers roughly into:</p>
<ul>
<li><strong>Application-specific controllers (ASCs):</strong> pre-programmed for one job (VAV box, fan coil, small RTU) with configuration choices rather than free programming. Cheaper, predictable, limited.</li>
<li><strong>Freely programmable controllers:</strong> general-purpose point counts and a programming tool; the integrator writes the logic. Flexible, powerful, and exactly as good as the programmer — which is why Module 10 (sequences) and Module 11 (programming concepts) matter.</li>
</ul>
<p>The program itself is built from the Module 2 vocabulary: PID blocks, schedules, setpoint resets, interlock logic, alarm comparisons — wired together in software 'blocks' or lines of control language instead of copper. That shift has a troubleshooting consequence you must internalize: <em>a DDC fault can be a programming fact, not a hardware fact.</em> A damper at 40% may be there because a wire failed — or because the program is in a mode you haven't read yet. DDC diagnosis always has two halves: the physical point check (Module 12) and the logic check (what is the program trying to do, and in what mode?).</p>
<div class="callout"><strong>Common mistake:</strong> Treating every DDC misbehavior as a field-device failure and swapping sensors while the real cause — a schedule, an override, a mode — sits untouched in the software. Check for overrides and modes before parts.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>DDC = a microprocessor directly closing control loops; field ends stay analog/two-position, the brain is digital.</li>
<li>Points: AI (analog in, 'how much' measured), AO (analog out, 'how much' commanded), DI (digital in, state reported), DO (digital out, state commanded).</li>
<li>Architecture: field devices → field/application controllers (autonomous loops) → supervisory controllers (coordination) → front end (humans).</li>
<li>Control stays local by design: network/server loss must not stop equipment control.</li>
<li>ASC = pre-programmed/configured; freely programmable = logic written by the integrator.</li>
<li>DDC faults live in hardware OR in software (modes, overrides, schedules) — check both halves.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Counting points by wires instead of by function. A sensor with a shared power pair is still one AI; a start/stop with a status is one DO <em>plus</em> one DI. Points lists count functions, and undercounting status points is how 'the front end shows RUN but the fan belt is off' happens.</div>
<p><strong>Where this leads:</strong> Everything after this module assumes the four point types are reflex. Module 9 puts those points on networks, Module 10 writes the behavior they execute, Module 11 adds the strategies, and Module 12 makes you prove every one of them physically, point by point. If AI/AO/DI/DO still requires thought, re-read Section 2 before moving on — it is the cheapest study time in the course.</p>`
    }
  ],
  keyTerms: [
    { term: "Direct digital control (DDC)", def: "Control in which a microprocessor directly reads inputs, executes logic, and drives outputs in the loop." },
    { term: "Point", def: "One field function wired to a controller: a single measurement or command channel." },
    { term: "AI (analog input)", def: "A varying measurement entering the controller (thermistor, 4–20 mA, 0–10 V)." },
    { term: "AO (analog output)", def: "A varying command leaving the controller to position a device (valve, damper, VFD)." },
    { term: "DI (digital input)", def: "A two-state fact entering the controller (contact open/closed), e.g., fan status." },
    { term: "DO (digital output)", def: "A two-state command leaving the controller (relay/triac on/off), e.g., fan start/stop." },
    { term: "Points list", def: "The job document tabulating every field device, its point type, range, and controller assignment." },
    { term: "Field controller", def: "A controller dedicated to one equipment application, running its loops autonomously." },
    { term: "Supervisory controller", def: "A network-level controller coordinating many field controllers: schedules, alarms, trends, global strategies." },
    { term: "Front end", def: "The operator interface (workstation/server software) for graphics, setpoints, alarms, and reports." },
    { term: "Application-specific controller (ASC)", def: "A pre-programmed controller for one application, set up by configuration rather than free programming." },
    { term: "Freely programmable controller", def: "A general controller whose control logic is written by the integrator." },
    { term: "Universal input", def: "An input configurable in software for thermistor, voltage, current, or contact signals." },
    { term: "Override", def: "A manual command at the front end or controller that takes a point out of automatic control temporarily." },
    { term: "Building automation system (BAS)", def: "The complete networked system of controllers, network, and front end managing a building's systems." },
    { term: "Standalone control", def: "DDC control that runs its equipment without any network connection." },
    { term: "Status point", def: "A DI proving a commanded device actually runs (e.g., current switch on a fan), distinct from the command point." },
    { term: "Trend", def: "A time-stamped log of point values stored for later review and diagnosis." }
  ],
  video: {
    title: "Building Automation Training — Level I",
    embedUrl: "https://www.youtube.com/embed/1LHw8q6XBTg",
    note: "An introductory training on a native BACnet DDC product line, showing the controllers and software used in real new and retrofit jobs. Watch for how physical equipment maps to controller points and software — that mapping is this module's architecture in commercial form.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Classify each point as AI, AO, DI, or DO: (a) supply-air temperature sensor, (b) chilled-water valve command, (c) exhaust fan start/stop, (d) differential-pressure switch across a filter, (e) VFD speed reference, (f) space humidity sensor.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Ask two questions — analog or digital? in or out? Step 2: (a) <strong>AI</strong> (varying value in). (b) <strong>AO</strong> (varying command out). (c) <strong>DO</strong> (two-state command out). (d) <strong>DI</strong> (two-state fact in). (e) <strong>AO</strong> (varying command out). (f) <strong>AI</strong> (varying value in). Fluency here is the price of admission to every DDC document.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Build the points list for a small air handler with: supply fan start/stop and status, a modulating heating valve with a supply-air temperature sensor, an outdoor-air damper with two-position actuator, and a filter alarm switch.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Fan start/stop = <strong>DO</strong>; fan status (current switch) = <strong>DI</strong>. Step 2: Heating valve = <strong>AO</strong>; supply-air temperature = <strong>AI</strong> (the loop's sensor). Step 3: Two-position damper = <strong>DO</strong> (it has states, not positions). Step 4: Filter alarm switch = <strong>DI</strong>. Totals: 2 DO, 2 DI, 1 AO, 1 AI. Note the status DI — command without proof is how phantom 'running' fans happen.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A building's front-end server crashes at noon. By correct DDC architecture, what should the VAV boxes and air handlers be doing at 12:05, and what is lost?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Field controllers are autonomous: they keep running their loops on their stored programs and schedules — spaces stay conditioned. Step 2: What is lost is the <em>supervisory</em> layer: operator graphics, central alarm annunciation, new trend storage at the server, global strategies run from above. Step 3: If equipment stopped with the server, the architecture was violated — control was placed in the wrong layer, a design fault worth reporting.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Answer the tutor's question in your own words: what can a DDC controller do that a thermostat cannot? Give four distinct capabilities.</p>",
      solution: "<p><strong>Answer (any four):</strong> Step 1: Run <strong>many loops at once</strong> (temperature, pressure, humidity) rather than one. Step 2: Follow <strong>time schedules</strong> and calendars with setbacks. Step 3: <strong>Share data</strong> — use one outdoor sensor for building-wide resets. Step 4: <strong>Record history</strong> (trends, run times) and <strong>alarm</strong> abnormal conditions to operators. Step 5: Execute <strong>global strategies</strong> like demand limiting across many units. A thermostat does exactly one of these jobs well: one loop, fixed logic.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> An AO lands on a valve actuator but the point was configured in the controller as a DI by mistake during setup. Predict the symptom and the fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The controller never sends a positioning signal — as a 'DI' the channel is configured to listen, so the valve sits wherever its fail position leaves it while the software may display nonsense 'input' values. Step 2: Symptom pattern: output device dead, no signal measurable at the terminals, program calling normally. Step 3: Fix = correct the point-type configuration (AO, proper signal range), then stroke-test the valve 0/50/100% and verify at the actuator — configuration faults are fixed in software and proven in hardware.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Your integrator proposes saving money by deleting all fan status DIs and 'trusting the DO.' Write the professional objection in two sentences.</p>",
      solution: "<p><strong>Answer (example):</strong> Step 1: 'A DO proves we <em>asked</em>; only a status point proves the fan <em>ran</em> — a tripped overload or broken belt would otherwise display as normal operation at the front end.' Step 2: 'Every sequence in Module 10 that says 'upon proof of fan status' becomes unenforceable, and the first undetected no-airflow event will cost more than every deleted switch combined.' Command and status are different points because reality and intention are different things.</p>"
    }
  ],
  quiz: [
    {
      q: "'Digital' in direct digital control refers to:",
      choices: ["All field signals being digital pulses", "The controller being a microprocessor that computes the control decisions", "The system having no sensors", "The thermostat having a numeric display"],
      answer: 1,
      explanation: "Correct: (b). The brain is digital; the field ends remain analog and two-position devices. (a) Thermistors and 0–10 V signals are analog and are the norm at DDC inputs/outputs. (c) DDC depends on sensors entirely. (d) A display is a user-interface feature, not the control architecture."
    },
    {
      q: "A duct static-pressure transmitter wired to a controller is which point type?",
      choices: ["AO", "DO", "AI", "DI"],
      answer: 2,
      explanation: "Correct: (c). A varying measurement flowing into the controller is an analog input. (a) An AO is a varying command flowing out. (b) A DO is a two-state command out. (d) A DI is a two-state state-report in — a pressure <em>switch</em> would be a DI, but a transmitter reports a continuous value."
    },
    {
      q: "A VFD speed command from a controller is:",
      choices: ["AI", "AO", "DI", "DO"],
      answer: 1,
      explanation: "Correct: (b). The controller outputs a varying (analog) command to set speed anywhere in a range. (a) Inputs flow the other way. (c) A DI reports a state to the controller. (d) A DO could start/stop the drive, but speed setting is proportional — analog — so it is an AO (with a separate DO often handling run enable)."
    },
    {
      q: "In proper DDC architecture, if the supervisory network and front end fail, field controllers should:",
      choices: ["Stop all equipment immediately", "Continue running their equipment autonomously on stored programs", "Revert to pneumatic control", "Wait for an operator to arrive before any control action"],
      answer: 1,
      explanation: "Correct: (b). Autonomy at the field level is a defining design requirement. (a) Stopping everything on an IT failure is exactly the design error this principle prevents. (c) There is no pneumatic fallback in a DDC panel. (d) Loops run thousands of times a day without operators; supervision is coordination, not permission."
    },
    {
      q: "An application-specific controller (ASC) differs from a freely programmable controller in that it:",
      choices: ["Has no inputs or outputs", "Comes pre-programmed for one application and is set up by configuration choices", "Cannot control a VAV box", "Requires no power supply"],
      answer: 1,
      explanation: "Correct: (b). ASCs trade flexibility for predictability and cost — you configure parameters, not write logic. (a) ASCs are fully wired controllers with normal point complements. (c) VAV boxes are the classic ASC application. (d) All controllers need power; programming style doesn't change physics."
    },
    {
      q: "A damper sits at 40% although its sensor and actuator test perfectly. A DDC-specific cause to check before swapping parts is:",
      choices: ["The building's water pressure", "A software condition — an override, schedule mode, or program limit holding it there", "The color of the actuator", "The age of the ductwork"],
      answer: 1,
      explanation: "Correct: (b). In DDC, correct hardware obeying an unnoticed software state is a daily occurrence; check modes and overrides first. (a) Water pressure is irrelevant to an air damper's command logic. (c) Cosmetics don't command actuators. (d) Duct age affects leakage, not a precise held position."
    },
    {
      q: "The points list for a job is important because it:",
      choices: ["Replaces the need for wiring diagrams entirely", "Defines every field function, type, and assignment — the contract that sequences, panel building, and checkout are all built against", "Is only needed for the invoice", "Lists the building's tenants"],
      answer: 1,
      explanation: "Correct: (b). Controller selection, programming, and point-to-point checkout all verify against this one document. (a) Wiring diagrams still show routing and terminations; the points list doesn't replace them. (c) Billing may use it, but its engineering role is primary. (d) Tenant lists are property management, not controls documentation."
    },
    {
      q: "A fan commanded by a DO shows 'RUN' at the front end, but the served space gets no air and the belt is found broken. The design lesson is:",
      choices: ["DOs are unreliable", "A command is not a status — a separate DI status point (e.g., current switch) is needed to prove operation", "Front ends should not show fan state", "Belts should be replaced by the controller"],
      answer: 1,
      explanation: "Correct: (b). Without independent status proof, the display reports intention as if it were reality. (a) The DO worked perfectly; the missing piece was feedback. (c) Operators deserve fan state — real state, from a status device. (d) Controllers can't maintain belts; they can only detect the failure if given the point to see it with."
    }
  ],
  studyGuide: `
<h3>Module 8 — Introduction to DDC: Quick Reference</h3>
<ul>
<li><strong>DDC:</strong> microprocessor in the loop. Digital brain, analog/two-position field ends. Software logic, memory, communication, self-alarming are what it adds over a thermostat.</li>
<li><strong>Point types:</strong> AI = analog in (measure 'how much'). AO = analog out (command 'how much'). DI = digital in (report a state). DO = digital out (command a state). Classify by asking: varying or two-state? flowing in or out?</li>
<li><strong>Layers:</strong> field devices → field/application controllers (autonomous loops) → supervisory controllers (schedules, alarms, global logic) → front end (operator). Network loss must NOT stop field control.</li>
<li><strong>ASC vs programmable:</strong> ASC = factory logic, you configure. Programmable = integrator writes logic — power and responsibility together.</li>
<li><strong>Points list</strong> = the contract document: every function, type, range, controller. Sequences and checkout are written against it.</li>
<li><strong>Command ≠ status:</strong> budget the DI that proves each important DO actually worked.</li>
<li><strong>Two-half diagnosis:</strong> physical point health AND software state (mode, override, schedule) — every DDC call, both halves.</li>
</ul>
<p><strong>Answer to the course's signature question:</strong> a DDC controller runs many loops, follows calendars, resets setpoints from shared sensors, limits demand, trends itself, and alarms at 2 a.m. A thermostat closes one loop.</p>`
};
