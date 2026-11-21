// ele109 - Module 3: PLC Inputs & Outputs: Discrete
module.exports = {
  "number": 3,
  "slug": "plc-inputs-outputs-discrete",
  "title": "PLC Inputs & Outputs: Discrete",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how a discrete input module reads a switch or sensor.",
    "Explain how a discrete output module drives a contactor, solenoid, or light.",
    "Compare sinking and sourcing input wiring.",
    "Compare sinking and sourcing output wiring and NPN vs PNP sensors.",
    "Explain why field wiring is kept separate from PLC logic wiring."
  ],
  "sections": [
    {
      "heading": "Discrete Inputs: Reading a Switch",
      "html": "<p>A <strong>discrete input</strong> is on or off — nothing in between. The field device (a push button, a limit switch, a proximity sensor) either connects the input point to the supply voltage or it does not, and the input module turns that into a 1 or a 0 in the input image table. The module's job is to accept the field voltage (24 V DC or 120 V AC, depending on the module), isolate it optically from the CPU, and report the state. The input point also has a status LED that lights when the input is on, so a technician can see the field state without a meter.</p>\n<p>Inputs are wired through terminal blocks, with each point having its own terminal and a common terminal shared by a group of points. The field power supply — the 24 V DC supply that powers the sensors and switches — is separate from the PLC's own power supply, so a fault in the field wiring does not take down the CPU. The input module's datasheet gives its voltage range, its input current, and its response time (how long a signal must be present before the module reports it), and the wiring must match the module's rating.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A discrete input is a 1 or a 0. The module accepts the field voltage, isolates it from the CPU, and reports the state in the input image table — with an LED so you can see it.</div>"
    },
    {
      "heading": "Sinking and Sourcing Inputs",
      "html": "<p><strong>Sinking and sourcing</strong> describe which way the current flows through an input point, and they are the most confusing wiring topic in PLC work — so take them slowly. In a <strong>sourcing input</strong> module, the module supplies (sources) the current: the field device connects the input point to the common (ground), and current flows out of the module, through the device, to ground. In a <strong>sinking input</strong> module, the module accepts (sinks) the current: the field device connects the input point to the supply voltage (+24 V), and current flows from the supply, through the device, into the module, and out to ground. The two wirings are mirror images of each other, and a device wired for one will not work on the other.</p>\n<p>The rule that keeps it straight is: <strong>the sensor and the input module must be opposite types</strong>. A sourcing (PNP) sensor, which supplies current from its output, must connect to a sinking input, which accepts current. A sinking (NPN) sensor, which pulls current to ground, must connect to a sourcing input, which supplies current. If both are sourcing, there is no path to ground and the input never turns on; if both are sinking, there is no supply and the input never turns on. The module's datasheet and the sensor's datasheet both state their type — match them, and the input works.</p>"
    },
    {
      "heading": "Discrete Outputs: Driving a Load",
      "html": "<p>A <strong>discrete output</strong> is also on or off, but it does the driving: when the program sets an output to 1, the output module switches power to the field device — a contactor coil, a solenoid valve, a pilot light, or a relay. The output module's switching device is either a <strong>relay</strong> (a mechanical contact that can switch AC or DC, isolates the PLC from the load, but wears and is slow) or a <strong>transistor</strong> (a solid-state switch that is fast and wear-free but switches DC only). The output point has a status LED and, on many modules, a fuse that protects the module if the field wiring shorts.</p>\n<p>Outputs are wired the same way as inputs, through terminal blocks, with a common terminal for a group of points and a field power supply that is separate from the PLC's own supply. The output module's current rating is per point and per group — a module rated 2 A per point and 8 A per group cannot drive four 2 A loads at once, even though each point is within its rating. The load's inrush current matters too: a contactor coil or a solenoid draws several times its holding current when it pulls in, and the output must be rated for that inrush.</p>"
    },
    {
      "heading": "NPN vs PNP Sensors and Wiring Practice",
      "html": "<p>The sensors in Module 7 come in two output types. A <strong>PNP (sourcing) sensor</strong> connects its output to the positive supply when it detects its target, supplying current to the load. An <strong>NPN (sinking) sensor</strong> connects its output to ground when it detects its target, pulling current from the load to ground. The sensor's type is printed on its label and its datasheet, and the input module must be the opposite type (Module 3's rule). In North America, PNP sensors with sinking inputs are the more common combination; in some Asian equipment, NPN sensors with sourcing inputs are common. When a machine is built from mixed equipment, the sensor type is one of the first things to check.</p>\n<p>Good wiring practice keeps the field wiring and the PLC logic wiring separate: field wires run in their own duct, away from the PLC's internal wiring, and the field power supply is fused separately. Each wire is numbered and labeled (Electrical 108, Module 12), and the I/O list — a table that says which field device is wired to which PLC point — is kept with the panel documentation. The I/O list is the map of the whole system: without it, a technician cannot tell which input is the guard switch and which is the start button, and troubleshooting becomes guesswork.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Wiring a PNP sensor to a sourcing input (or an NPN sensor to a sinking input). Both are the same type, so there is no complete current path and the input never turns on. The sensor and the input must be opposite types.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Discrete inputs are on/off: the module accepts the field voltage, isolates it, and reports a 1 or a 0 with a status LED.</li>\n<li>Discrete outputs are on/off: the module switches power to the load through a relay (AC or DC, wears) or a transistor (DC only, fast, wear-free).</li>\n<li>Sinking vs sourcing: a sourcing input supplies current and the device connects to ground; a sinking input accepts current and the device connects to the supply. The sensor and the input must be opposite types.</li>\n<li>PNP sensors source current; NPN sensors sink current. Match the sensor to the opposite input type.</li>\n<li>Field power is separate from PLC power; each wire is numbered; the I/O list maps every field device to its PLC point.</li>\n<li>Output ratings are per point and per group — and inrush current counts.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Loading an output group beyond its group rating. Four 2 A loads on a module rated 2 A per point but 8 A per group is exactly at the limit — and any inrush pushes it over.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain sinking versus sourcing and match a PNP sensor to the right input, you have this module. Module 4 covers ladder logic programming.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Discrete input", "def": "An on/off input point that reads a switch or sensor as a 1 or a 0." },
    { "term": "Discrete output", "def": "An on/off output point that switches power to a contactor, solenoid, or light." },
    { "term": "Sinking input", "def": "An input module that accepts current; the field device connects the point to the supply voltage." },
    { "term": "Sourcing input", "def": "An input module that supplies current; the field device connects the point to ground." },
    { "term": "Sinking output", "def": "An output that pulls current to ground when it turns on." },
    { "term": "Sourcing output", "def": "An output that supplies current from the positive supply when it turns on." },
    { "term": "PNP sensor", "def": "A sourcing sensor that connects its output to the positive supply when it detects its target." },
    { "term": "NPN sensor", "def": "A sinking sensor that connects its output to ground when it detects its target." },
    { "term": "Relay output", "def": "A PLC output that switches through a mechanical contact; AC or DC, isolates the load, but wears." },
    { "term": "Transistor output", "def": "A PLC output that switches through a transistor; fast and wear-free, but DC only." },
    { "term": "Field power supply", "def": "The power supply for the field devices, separate from the PLC's own power supply." },
    { "term": "I/O list", "def": "The table mapping every field device to its PLC input or output point." },
    { "term": "Status LED", "def": "The light on an I/O module showing whether a point is on or off." },
    { "term": "Common terminal", "def": "The shared terminal for a group of I/O points." },
    { "term": "Inrush current (output)", "def": "The brief high current a coil or solenoid draws when it first energizes." }
  ],
  "video": {
    "title": "Sourcing & Sinking in PLC Digital I/O Modules | Mr. SMART!",
    "embedUrl": "https://www.youtube.com/embed/ijS7USWT6j0",
    "note": "A clear explanation of sinking and sourcing inputs — which way the current flows, and why the sensor and the input module must be opposite types.",
    "more": [
      { "title": "Sinking vs Sourcing Digital Input module Explained Simply", "url": "https://www.youtube.com/watch?v=vZGrWUuzvM8" },
      { "title": "Sinking and Sourcing PLC Inputs Explained | What is the Difference?", "url": "https://www.youtube.com/watch?v=B65detMhnoc" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A PNP sensor is wired to a sinking input module. Will the input work? Explain the current path.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Yes. Step 2: The PNP sensor sources current — when it detects its target, it connects its output to +24 V. Step 3: Current flows from the sensor into the sinking input, which accepts it to ground. The sensor and the input are opposite types, so the path is complete.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The same PNP sensor is wired to a sourcing input module. Will the input work? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No. Step 2: Both the sensor and the input are sourcing — both try to supply current, and neither provides a path to ground. Step 3: No current flows, so the input never turns on. The sensor and the input must be opposite types.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A relay output module is rated 2 A per point and 8 A per group. Four contactor coils, each drawing 1.5 A holding current, are wired to one group. Is this acceptable?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Each point is within its 2 A rating. Step 2: The group total is 4 × 1.5 = 6 A, within the 8 A group rating. Step 3: Yes, it is acceptable — but the inrush current of the coils must also be checked, because four coils pulling in at once could exceed the group rating briefly.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A PLC output must drive a 120 V AC contactor coil. Which output type do you use, and why not the other?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A relay output. Step 2: Relay outputs switch AC or DC and isolate the PLC from the load. Step 3: A transistor output switches DC only, so it cannot drive a 120 V AC coil directly.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> An input's status LED is on, but the program does not see the input as on. What are two possible causes?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The input may be wired to a different point than the program addresses — check the I/O list and the addressing. Step 2: The input image table may not have updated yet if the signal is a short pulse, or the module may have a fault. Check the program's address and the module's diagnostics.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why is the field power supply separate from the PLC's own power supply?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A fault in the field wiring — a shorted sensor cable, for example — blows the field supply's fuse, not the PLC's. Step 2: The CPU keeps running and can report the fault instead of going down with it. Step 3: Separation also keeps field noise away from the PLC's electronics.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A discrete input reports a switch's state as:",
      "choices": ["A voltage between 0 and 10 V", "A 1 or a 0 — on or off", "A frequency", "A temperature"],
      "answer": 1,
      "explanation": "Correct: (b). Discrete means on or off. (a) A 0–10 V signal is analog. (c) Frequency is not a discrete input. (d) Temperature is an analog input."
    },
    {
      "q": "A PNP sensor must be wired to a:",
      "choices": ["Sourcing input", "Sinking input", "Analog input", "Relay output"],
      "answer": 1,
      "explanation": "Correct: (b). PNP sources current, so the input must sink it — opposite types. (a) Two sourcing devices have no path to ground. (c) A PNP sensor is a discrete device, not analog. (d) An output cannot read a sensor."
    },
    {
      "q": "A sinking input module:",
      "choices": ["Supplies current to the field device", "Accepts current from the field device, which connects the point to the supply voltage", "Has no power supply", "Reads analog signals"],
      "answer": 1,
      "explanation": "Correct: (b). Sinking accepts current from a device connected to +24 V. (a) That is a sourcing input. (c) All input modules need power. (d) Sinking inputs are discrete, not analog."
    },
    {
      "q": "A relay output is chosen over a transistor output when the load is:",
      "choices": ["DC only and very fast", "AC, or when isolation from the PLC is needed", "Very small", "A sensor"],
      "answer": 1,
      "explanation": "Correct: (b). Relay outputs switch AC or DC and isolate the load. (a) DC and fast suits a transistor output. (c) Small loads suit either type. (d) Sensors are inputs, not outputs."
    },
    {
      "q": "The status LED on an input module shows:",
      "choices": ["The module's temperature", "Whether that input point is on or off", "The program's rung number", "The CPU's scan time"],
      "answer": 1,
      "explanation": "Correct: (b). The LED mirrors the point's state. (a) Temperature is not shown by the LED. (c) Rung numbers are in the program. (d) Scan time is shown in the programming software."
    },
    {
      "q": "An NPN sensor connects its output to:",
      "choices": ["The positive supply when it detects its target", "Ground when it detects its target", "The PLC's CPU directly", "Nothing — it is wireless"],
      "answer": 1,
      "explanation": "Correct: (b). NPN sinks current to ground. (a) That is a PNP sensor. (c) Sensors wire to input modules, not the CPU. (d) NPN sensors are wired devices."
    },
    {
      "q": "Output ratings are given per point and per group because:",
      "choices": ["The group rating is always higher than the sum of the points", "The module's total current capacity can be exceeded even when each point is within its rating", "Points are never used together", "The group rating is decorative"],
      "answer": 1,
      "explanation": "Correct: (b). Four 2 A points on an 8 A group is exactly at the limit. (a) The group rating is usually less than the sum of the points. (c) Points are often used together. (d) The group rating is a real limit."
    },
    {
      "q": "The I/O list is:",
      "choices": ["A shopping list for the panel", "The table mapping every field device to its PLC input or output point", "The PLC's program", "The motor's nameplate"],
      "answer": 1,
      "explanation": "Correct: (b). The I/O list is the map of the system. (a) It is not a shopping list. (c) The program is the ladder logic. (d) The nameplate is on the motor."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — PLC Inputs &amp; Outputs: Discrete: Quick Reference</h3>\n<p><strong>Core idea:</strong> Discrete I/O is on/off. The module accepts the field signal, isolates it, and reports a 1 or a 0 — with an LED so you can see it.</p>\n<p><strong>Sinking vs sourcing:</strong> Sourcing supplies current (device connects to ground) · Sinking accepts current (device connects to +24 V). The sensor and the input must be OPPOSITE types.</p>\n<p><strong>PNP:</strong> Sources current (+24 V out when on). <strong>NPN:</strong> Sinks current (to ground when on).</p>\n<p><strong>Outputs:</strong> Relay — AC or DC, isolates, wears · Transistor — DC only, fast, wear-free. Ratings are per point AND per group; inrush counts.</p>\n<p><strong>Practice:</strong> Field power separate from PLC power · Every wire numbered · I/O list maps devices to points.</p>\n<p><strong>Self-check:</strong> Match a PNP sensor to the right input type and explain why. If you can, you have this module.</p>\n"
};
