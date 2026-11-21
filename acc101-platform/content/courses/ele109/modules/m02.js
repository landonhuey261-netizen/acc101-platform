// ele109 - Module 2: PLC Hardware: CPU, I/O & Power Supplies
module.exports = {
  "number": 2,
  "slug": "plc-hardware-cpu-io-power-supplies",
  "title": "PLC Hardware: CPU, I/O & Power Supplies",
  "estTime": "3–4 hours",
  "objectives": [
    "Name the parts of a PLC system: CPU, power supply, input modules, output modules, and rack.",
    "Explain the scan cycle: input scan, program scan, output scan, and housekeeping.",
    "Describe discrete, analog, and specialty I/O modules.",
    "Explain fixed, modular, and rack-based PLC architectures.",
    "Describe PLC memory: program memory, data memory, and retentive memory."
  ],
  "sections": [
    {
      "heading": "The Parts of a PLC System",
      "html": "<p>A PLC system has five parts. The <strong>power supply</strong> converts the line voltage (120/240 V AC, or 24 V DC) into the low DC voltages the PLC's electronics need, and it powers the modules in the rack. The <strong>CPU</strong> (central processing unit) is the brain: it reads the inputs, runs the program, and sets the outputs, and it holds the program in its memory. The <strong>input modules</strong> connect the field devices (switches, sensors) to the CPU, converting their signals into the logic levels the CPU understands. The <strong>output modules</strong> connect the CPU to the actuators (contactors, solenoids, lights), switching the power that drives them. The <strong>rack</strong> (or chassis) is the backplane that holds the modules and carries power and signals between them.</p>\n<p>The modules are isolated from the field wiring by <strong>optical isolation</strong>: a small LED and a light-sensitive transistor carry the signal across a gap with no electrical connection, so a surge or a fault on a field wire cannot reach the CPU. Each input and output point also has a status <strong>LED</strong> on the module, so a technician can see at a glance which inputs are on and which outputs are on — the fastest diagnostic tool in the panel. The whole system is built to survive a factory floor: wide temperature ranges, vibration, electrical noise, and dust that would kill an office computer.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Power supply, CPU, input modules, output modules, rack. The CPU runs the program; the modules are the PLC's senses and hands; optical isolation keeps field faults away from the CPU.</div>"
    },
    {
      "heading": "The Scan Cycle",
      "html": "<p>The PLC does its work in a repeating cycle called the <strong>scan</strong>, and understanding the scan is the key to understanding PLC behavior. The scan has four steps. <strong>1. Input scan:</strong> the CPU reads all the input modules and copies their states into an <strong>input image table</strong> in memory — a snapshot of the field at that moment. <strong>2. Program scan:</strong> the CPU runs the program, rung by rung, using the input image table (not the live inputs) and writing results to an <strong>output image table</strong>. <strong>3. Output scan:</strong> the CPU copies the output image table to the output modules, which set the field devices. <strong>4. Housekeeping:</strong> the CPU updates timers, communicates with other devices, and checks itself for faults. Then the cycle repeats.</p>\n<p>The whole scan takes a few milliseconds on a modern PLC — typically 1 to 20 ms depending on the program size — which means the PLC responds to a change in an input within one scan. Two consequences follow. First, the program always sees a consistent snapshot of the inputs, even if an input changes in the middle of the program scan — the change is picked up on the next scan. Second, an input that pulses for less than one scan time can be missed entirely, which is why very fast signals need a high-speed counter module or an interrupt, not a regular input. The scan time is shown on the programming software, and a scan time that grows over months is a sign the program has grown too large or a module is failing.</p>"
    },
    {
      "heading": "Fixed, Modular & Rack-Based PLCs",
      "html": "<p>PLCs come in three architectures. A <strong>fixed (brick) PLC</strong> has a set number of inputs and outputs built into one box — cheap, compact, and right for a small machine with a fixed I/O count. A <strong>modular PLC</strong> has a CPU and a set of slots into which input and output modules are plugged, so the I/O count and type can be chosen for the job and expanded later. A <strong>rack-based PLC</strong> is the large version of the modular idea: several racks of modules, connected by a backplane and by communication, for a whole production line or a plant. The choice is a matter of scale: a brick for a single machine, a modular PLC for a cell, a rack system for a line.</p>\n<p>I/O modules come in three kinds. <strong>Discrete modules</strong> handle on/off signals — a switch is on or off, a contactor is on or off — and they are the most common. <strong>Analog modules</strong> handle continuously varying signals — a temperature, a pressure, a level — converted to a number by the module (Module 6). <strong>Specialty modules</strong> handle jobs the CPU cannot do fast enough on its own: high-speed counters for encoders, motion control for servo motors, and communication modules for networks (Module 10). Each module is chosen by its signal type, its voltage, its current rating, and its point count, and the points are wired to the field devices through terminal blocks.</p>"
    },
    {
      "heading": "Memory, Selection & the Programming Terminal",
      "html": "<p>The CPU's memory has three parts. <strong>Program memory</strong> holds the ladder program. <strong>Data memory</strong> holds the values the program works with — the input and output image tables, the timer and counter values, and the data registers. <strong>Retentive memory</strong> (battery-backed or non-volatile) holds values that must survive a power failure, such as a counter's total or a machine's position. The program is written on a <strong>programming terminal</strong> — a computer running the PLC manufacturer's software — and downloaded to the CPU through a cable or a network. The terminal is also the diagnostic tool: it shows the program running live, with each rung's true and false states, so a technician can watch the logic work in real time.</p>\n<p>Selecting I/O is a checklist: how many points of each type, what voltage (24 V DC, 120 V AC), what current the outputs must switch, whether the points need isolation from each other, and whether the module must be able to survive the environment. A relay output module can switch AC or DC and isolates the PLC from the load, but it is slow and its contacts wear; a transistor output module is fast and has no contacts to wear, but it switches DC only and needs a separate relay for AC loads. The module's datasheet is the authority, and the selection is recorded in the panel's bill of materials (Electrical 108, Module 12).</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Assuming the PLC sees the field devices in real time. The program sees the input image table — a snapshot taken at the start of the scan. An input that changes mid-scan is not seen until the next scan, and a pulse shorter than one scan can be missed entirely.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Five parts: power supply, CPU, input modules, output modules, rack. Optical isolation keeps field faults away from the CPU; status LEDs show each point's state.</li>\n<li>Scan cycle: input scan (snapshot to the input image table) → program scan (rung by rung, using the image tables) → output scan (copy to the output modules) → housekeeping → repeat. Typically 1–20 ms.</li>\n<li>Architectures: fixed (brick) for small machines, modular for cells, rack-based for lines and plants.</li>\n<li>I/O types: discrete (on/off), analog (varying signals), specialty (high-speed counting, motion, communications).</li>\n<li>Memory: program, data (including the image tables), and retentive (survives power loss). The programming terminal writes the program and shows it running live.</li>\n<li>Output choice: relay outputs switch AC or DC and isolate the load but wear; transistor outputs are fast and wear-free but switch DC only.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Wiring a field device to a module of the wrong voltage — 120 V AC into a 24 V DC input, for example. The module is destroyed instantly. Check the module's voltage rating before landing any wire.</div>\n<p><strong>Ready-to-Work link:</strong> If you can name the five parts of a PLC system and walk through the scan cycle, you have this module. Module 3 covers discrete inputs and outputs.</p>"
    }
  ],
  "keyTerms": [
    { "term": "CPU", "def": "The central processing unit of a PLC; it runs the program and controls the scan cycle." },
    { "term": "Power supply", "def": "The PLC module that converts line voltage into the low DC voltages the PLC needs." },
    { "term": "Input module", "def": "The module that connects field sensors and switches to the CPU." },
    { "term": "Output module", "def": "The module that connects the CPU to actuators such as contactors and solenoids." },
    { "term": "Rack (chassis)", "def": "The backplane that holds the PLC modules and carries power and signals between them." },
    { "term": "Scan cycle", "def": "The PLC's repeating cycle: input scan, program scan, output scan, housekeeping." },
    { "term": "Input image table", "def": "The CPU's memory snapshot of all input states, taken at the start of each scan." },
    { "term": "Output image table", "def": "The CPU's memory record of the output states the program has set, copied to the modules at the end of each scan." },
    { "term": "Optical isolation", "def": "A light-based barrier between field wiring and the CPU that blocks surges and faults." },
    { "term": "Fixed (brick) PLC", "def": "A PLC with a set number of I/O points built into one box." },
    { "term": "Modular PLC", "def": "A PLC with slots for plug-in I/O modules, expandable for the job." },
    { "term": "Discrete I/O", "def": "On/off input and output points." },
    { "term": "Analog I/O", "def": "Continuously varying input and output signals, such as temperature or pressure." },
    { "term": "Retentive memory", "def": "Memory that keeps its values through a power failure, such as counter totals." },
    { "term": "Programming terminal", "def": "The computer and software used to write, download, and monitor a PLC program." }
  ],
  "video": {
    "title": "PLC Hardware Components",
    "embedUrl": "https://www.youtube.com/embed/wlCG8d2iQ5c",
    "note": "A walkthrough of PLC hardware — CPU, power supply, input and output modules, and the rack — with each part's job explained on a real controller.",
    "more": [
      { "title": "PLC Hardware Explained", "url": "https://www.youtube.com/watch?v=pPUnihpL6UI" },
      { "title": "PLC Basics Explained | The 4 Main Components of a PLC", "url": "https://www.youtube.com/watch?v=5NIhiLP2tkY" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> List the four steps of the PLC scan cycle in order, and say what happens in each step.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Input scan — the CPU reads all inputs into the input image table. Step 2: Program scan — the CPU runs the program rung by rung, using the image tables. Step 3: Output scan — the CPU copies the output image table to the output modules. Step 4: Housekeeping — timers update, communications run, and the CPU checks itself. Then the cycle repeats.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> An input turns on and off in 1 ms. The PLC's scan time is 10 ms. Will the program reliably see this input? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No — the pulse is shorter than one scan. Step 2: The input image table is only updated once per scan, so a 1 ms pulse can occur entirely between two input scans and never appear in the table. Step 3: Fast pulses need a high-speed counter module or an interrupt input, not a regular discrete input.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A machine has 12 sensors and 8 actuators, and the owner expects to add more devices later. Which PLC architecture fits best: fixed, modular, or rack-based? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Modular. Step 2: A fixed PLC has a set I/O count and cannot grow. Step 3: A modular PLC lets you plug in more input and output modules as the machine grows, and it is far cheaper than a rack system for a single machine.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A technician wires a 120 V AC limit switch to a 24 V DC input module. What happens?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The module is destroyed — its input circuit is rated for 24 V DC and 120 V AC will burn it out. Step 2: The fault may also damage the CPU if the isolation fails. Step 3: Always check the module's voltage rating before landing any wire.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A counter must keep its total when the power fails. Which kind of memory holds it, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Retentive memory — battery-backed or non-volatile. Step 2: Ordinary data memory is lost when power fails. Step 3: The counter's total is stored in retentive memory so the machine resumes counting from the right number after a power failure.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A PLC output must switch a 120 V AC contactor coil. Which output module type fits: relay or transistor? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A relay output module. Step 2: Relay outputs can switch AC or DC and isolate the PLC from the load. Step 3: A transistor output switches DC only, so it cannot drive a 120 V AC coil directly — it would need a separate interposing relay.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The five parts of a PLC system are the:",
      "choices": ["CPU, monitor, keyboard, mouse, and printer", "Power supply, CPU, input modules, output modules, and rack", "Motor, starter, overload, contactor, and breaker", "Sensor, actuator, cable, panel, and door"],
      "answer": 1,
      "explanation": "Correct: (b). Power supply, CPU, inputs, outputs, rack. (a) Those are computer peripherals. (c) Those are motor-control components. (d) Those are field and panel parts, not the PLC system."
    },
    {
      "q": "The scan cycle order is:",
      "choices": ["Program scan, input scan, output scan, housekeeping", "Input scan, program scan, output scan, housekeeping", "Output scan, input scan, program scan, housekeeping", "Housekeeping, output scan, input scan, program scan"],
      "answer": 1,
      "explanation": "Correct: (b). Input, program, output, housekeeping. (a), (c), and (d) put the steps out of order."
    },
    {
      "q": "The input image table is:",
      "choices": ["The live field wiring", "The CPU's memory snapshot of all input states, taken at the start of each scan", "The programming cable", "The output module's fuse"],
      "answer": 1,
      "explanation": "Correct: (b). A snapshot in memory, updated once per scan. (a) The live wiring is the field, not the table. (c) The cable connects the terminal to the CPU. (d) Output modules do not have an image table."
    },
    {
      "q": "Optical isolation in an I/O module:",
      "choices": ["Makes the module faster", "Blocks surges and faults on field wiring from reaching the CPU", "Increases the number of points", "Cools the module"],
      "answer": 1,
      "explanation": "Correct: (b). Light carries the signal across a gap with no electrical connection. (a) Isolation does not speed the module. (c) Point count is set by the module design. (d) Isolation does not cool the module."
    },
    {
      "q": "A pulse shorter than one scan time:",
      "choices": ["Is always seen by the program", "Can be missed entirely by the program", "Doubles the scan time", "Trips the overload"],
      "answer": 1,
      "explanation": "Correct: (b). The input image table updates once per scan. (a) Short pulses are the ones that get missed. (c) Scan time does not double. (d) The overload is a motor device, not a PLC input."
    },
    {
      "q": "A modular PLC is chosen over a fixed PLC when:",
      "choices": ["The I/O count is fixed and small", "The I/O count and type must be chosen for the job and expanded later", "No programming is needed", "The machine has no sensors"],
      "answer": 1,
      "explanation": "Correct: (b). Modular PLCs expand with plug-in modules. (a) A fixed PLC fits a fixed small I/O count. (c) All PLCs need programming. (d) A machine with no sensors needs no PLC."
    },
    {
      "q": "Retentive memory is used for values that must:",
      "choices": ["Be erased on power failure", "Survive a power failure, such as a counter total", "Run faster", "Be displayed on the HMI only"],
      "answer": 1,
      "explanation": "Correct: (b). Retentive memory keeps values through a power loss. (a) That is ordinary data memory. (c) Memory type does not change speed. (d) HMI display is separate from memory type."
    },
    {
      "q": "A transistor output module:",
      "choices": ["Switches AC or DC and has contacts that wear", "Switches DC only, is fast, and has no contacts to wear", "Cannot switch any load", "Is the same as a relay output"],
      "answer": 1,
      "explanation": "Correct: (b). Transistor outputs are fast, wear-free, and DC-only. (a) That describes a relay output. (c) Transistor outputs switch DC loads. (d) Relay and transistor outputs are different."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — PLC Hardware: Quick Reference</h3>\n<p><strong>Core idea:</strong> Power supply, CPU, input modules, output modules, rack. The CPU runs the program; the modules are the PLC's senses and hands.</p>\n<p><strong>Scan:</strong> Input scan (snapshot to the input image table) → Program scan (rung by rung, using the image tables) → Output scan → Housekeeping. Typically 1–20 ms.</p>\n<p><strong>Architectures:</strong> Fixed (brick) for small machines · Modular for cells · Rack-based for lines and plants.</p>\n<p><strong>I/O:</strong> Discrete (on/off) · Analog (varying signals) · Specialty (high-speed counting, motion, communications).</p>\n<p><strong>Memory:</strong> Program · Data (image tables, timers, counters) · Retentive (survives power loss).</p>\n<p><strong>Watch out:</strong> The program sees the input image table, not the live field — a pulse shorter than one scan can be missed. Check module voltage ratings before landing wires.</p>\n<p><strong>Self-check:</strong> Name the five parts and walk through the scan cycle. If you can, you have this module.</p>\n"
};
