// ele109 - Module 1: Automation: From Relays to PLCs
module.exports = {
  "number": 1,
  "slug": "automation-relays-to-plcs",
  "title": "Automation: From Relays to PLCs",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what automation is and why industry uses it.",
    "Describe relay logic control and its limits: wiring, change, and troubleshooting.",
    "Explain what a PLC is and how it replaced relay panels.",
    "Compare hardwired relay logic with programmed PLC logic.",
    "Describe the history of the PLC, from the first Modicon 084 to today."
  ],
  "sections": [
    {
      "heading": "What Automation Means",
      "html": "<p><strong>Automation</strong> is the use of machines and control systems to run a process with little or no human intervention. A manual process needs a person at every step; an automated process needs a person to set it up, watch it, and fix it when it goes wrong — and the machine does the repetitive work in between. Automation exists for four reasons: <strong>consistency</strong> (a machine does the same job the same way every time), <strong>speed</strong> (a machine can repeat a task faster than a person), <strong>safety</strong> (a machine can work in places too hot, too fast, or too dangerous for a person), and <strong>cost</strong> (a machine that runs all night does not need a night shift).</p>\n<p>Automation is not new — the Jacquard loom used punched cards in 1804, and the thermostat automated heating in the 1800s. What changed in the late 1960s was the controller: the <strong>programmable logic controller (PLC)</strong> replaced rooms full of relays with a single box that could be reprogrammed instead of rewired. That change is the subject of this module, and it is the foundation of everything else in this course.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Automation is machines doing repetitive work consistently, quickly, and safely. The PLC is the controller that made modern automation practical — reprogram instead of rewire.</div>"
    },
    {
      "heading": "Relay Logic: How Machines Were Controlled Before PLCs",
      "html": "<p>Before PLCs, machine control was built from <strong>relay logic</strong>: panels full of electromechanical relays, timers, and counters, all wired together with hundreds of wires. The logic lived in the wiring — a relay's contacts in series meant AND, in parallel meant OR, and a relay's coil was the output. It worked, and it still works: relay logic is simple, rugged, and easy to understand one relay at a time. But it had three hard limits. First, <strong>change was expensive</strong>: changing the logic meant rewiring the panel, moving wires, and adding relays, which took days. Second, <strong>space was expensive</strong>: a complex machine needed a wall of relays and a cabinet the size of a room. Third, <strong>troubleshooting was slow</strong>: a fault could be any one of hundreds of wires or contacts, and the only map was the wiring diagram.</p>\n<p>Relay logic also wore out. Relays are mechanical devices with moving contacts that arc, pit, and eventually weld or fail, and a panel with a hundred relays has a hundred things that can fail. Timers drifted, counters wore, and the whole system aged together. By the late 1960s, the auto industry — General Motors in particular — was spending so much time and money rewiring relay panels for each new car model that it asked for a better way. The answer was the PLC.</p>"
    },
    {
      "heading": "The PLC Arrives: Reprogram, Don't Rewire",
      "html": "<p>In 1968, General Motors issued a specification for a new kind of controller: a solid-state device that could be programmed instead of wired, that could survive a factory floor, and that electricians could program in the language they already knew — the ladder diagram. In 1969, Bedford Associates (later Modicon) delivered the <strong>Modicon 084</strong>, the first commercial PLC. The \"084\" was the project's number, and the device was a box of solid-state logic that read its inputs, ran a program written as a ladder diagram, and set its outputs — doing in software what relay panels did in wire.</p>\n<p>The PLC's advantage was not speed or power — early PLCs were slow and limited — it was <strong>change</strong>. Changing a machine's logic meant editing the program and downloading it, not rewiring the panel. A new car model could be programmed in hours instead of rewired in weeks. The PLC also brought <strong>reliability</strong> (no moving contacts to wear out), <strong>compactness</strong> (one box instead of a wall), and <strong>diagnostics</strong> (the PLC could tell you which input was on and which rung was true). Within a decade, PLCs were in every factory, and relay panels were on their way out — though relay logic never disappeared entirely, and understanding it is still the fastest way to understand a PLC program.</p>"
    },
    {
      "heading": "Where PLCs Are Used Today",
      "html": "<p>PLCs are everywhere a machine must be controlled reliably: <strong>manufacturing</strong> (assembly lines, packaging machines, robots, and machine tools), <strong>process industries</strong> (water treatment, food and beverage, chemical plants, and oil and gas), <strong>building systems</strong> (HVAC, lighting, and access control), and <strong>infrastructure</strong> (traffic systems, pumping stations, and power distribution). The PLC's job is always the same: read the inputs, run the program, set the outputs, and repeat — thousands of times a second in modern controllers.</p>\n<p>The PLC did not make the electrician obsolete — it changed what the electrician does. The wiring is simpler (sensors and actuators wire to the PLC's input and output modules, and the logic lives in the program), but the troubleshooting is different: a fault can be in the wiring, in the program, or in the field device, and the technician must be able to tell which. That is the skill this course builds: the ability to read a PLC program the way you read a ladder diagram, to trace a signal from a sensor through the program to an output, and to find the fault wherever it is. The next module starts with the hardware itself.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Thinking a PLC is a computer that replaced the electrician. A PLC is an industrial controller programmed in the electrician's own ladder language — and it still needs an electrician to wire it, program it, and fix it.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Automation is machines doing repetitive work consistently, quickly, and safely, with a person setting up, watching, and fixing.</li>\n<li>Relay logic put the logic in the wiring: series contacts = AND, parallel contacts = OR, coil = output. It worked, but change was expensive, space was expensive, and troubleshooting was slow.</li>\n<li>The PLC (first the Modicon 084, 1969) replaced relay panels with a programmable box: reprogram instead of rewire.</li>\n<li>The PLC's advantages: fast change, reliability (no moving contacts), compactness, and diagnostics.</li>\n<li>PLCs are used in manufacturing, process industries, buildings, and infrastructure — always reading inputs, running the program, and setting outputs.</li>\n<li>Relay logic never disappeared: understanding it is still the fastest way to understand a PLC program.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Assuming a PLC program is written in a computer language. PLC programs are written in ladder logic — the electrician's own diagram language — which is why this course starts from the ladder diagrams of Electrical 108.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain why relay panels were replaced and what a PLC does differently, you have this module. Module 2 covers PLC hardware.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Automation", "def": "Using machines and control systems to run a process with little or no human intervention." },
    { "term": "Relay logic", "def": "Machine control built from electromechanical relays, timers, and counters wired together; the logic lives in the wiring." },
    { "term": "Programmable logic controller (PLC)", "def": "A solid-state industrial controller that reads inputs, runs a stored program, and sets outputs." },
    { "term": "Modicon 084", "def": "The first commercial PLC, delivered in 1969 to General Motors' specification." },
    { "term": "Hardwired logic", "def": "Control logic implemented in physical wiring, as in a relay panel." },
    { "term": "Programmed logic", "def": "Control logic implemented in software, as in a PLC program." },
    { "term": "Input", "def": "A signal into the PLC from a sensor, switch, or other field device." },
    { "term": "Output", "def": "A signal out of the PLC to a motor starter, solenoid, light, or other actuator." },
    { "term": "Scan", "def": "One pass of the PLC through its cycle: read inputs, run the program, set outputs." },
    { "term": "Ladder logic", "def": "The PLC programming language based on the ladder diagram." },
    { "term": "Diagnostics", "def": "The PLC's ability to report which inputs are on, which rungs are true, and what has faulted." },
    { "term": "Field device", "def": "A sensor or actuator in the plant, wired to the PLC's input or output modules." },
    { "term": "Actuator", "def": "A device that does physical work on the PLC's command: a motor, solenoid, or valve." },
    { "term": "Solid-state", "def": "Electronic, with no moving parts — as opposed to electromechanical relays." }
  ],
  "video": {
    "title": "History of PLCs - From Relay Logic to Software",
    "embedUrl": "https://www.youtube.com/embed/lAdRLkTNeUQ",
    "note": "The story of the PLC — from relay panels to the Modicon 084 and the controllers in every factory today. Watch how the same ladder logic moved from wires into software.",
    "more": [
      { "title": "The Untold History of the PLC: From Relay Nightmares to Modern Automation...", "url": "https://www.youtube.com/watch?v=0S7DwGkiscQ" },
      { "title": "The PLC Revolution - How Programmable Logic Controllers Changed Industry", "url": "https://www.youtube.com/watch?v=SpqA9v74kOw" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A factory changes its product every six months. Why is a PLC a better choice than a relay panel for its machine control?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Changing a relay panel means rewiring it — moving wires, adding relays — which takes days. Step 2: Changing a PLC means editing the program and downloading it, which takes hours. Step 3: For a factory that changes products often, the PLC's fast change is worth far more than the relay panel's lower cost.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> In relay logic, what do contacts in series mean, and what do contacts in parallel mean?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Contacts in series mean AND — all of them must close for the output to energize. Step 2: Contacts in parallel mean OR — any one of them closing energizes the output. Step 3: This is the same logic as the ladder diagram, which is why ladder logic became the PLC's programming language.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A relay panel has 100 relays. A PLC replaces it with one controller. What are two advantages of the PLC beyond the smaller size?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Reliability — the PLC has no moving contacts to wear out, while 100 relays have 100 things that can fail. Step 2: Diagnostics — the PLC can show which inputs are on and which rungs are true, while a relay panel must be traced wire by wire.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A machine's logic is: the motor runs when the start button is pressed AND the guard is closed. Express this as relay logic and as a PLC rung in words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Relay logic: the start button's NO contact and the guard switch's NO contact in series with the motor contactor's coil. Step 2: PLC rung: an XIC (examine if closed) instruction for the start button and an XIC for the guard switch, in series, driving the motor output. Step 3: Both say the same thing — AND means in series.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Why did General Motors ask for a PLC in 1968? What problem was it trying to solve?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Every new car model meant rewiring the relay panels on the assembly lines. Step 2: Rewiring took weeks and cost a fortune in downtime. Step 3: GM wanted a controller that could be reprogrammed instead of rewired, so a model change would take hours instead of weeks.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A PLC program has a fault: the motor does not start. Name three places the fault could be, and how you would tell them apart.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The field device — the start button or its wiring. Check the PLC's input indicator for that input. Step 2: The program — the rung's logic may be wrong or an interlock may be blocking it. Check the rung's status online. Step 3: The output — the output module, its wiring, or the starter. Check the PLC's output indicator and measure at the starter.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Automation exists mainly for:",
      "choices": ["Consistency, speed, safety, and cost", "Making machines larger", "Removing all human workers", "Increasing the number of relays"],
      "answer": 0,
      "explanation": "Correct: (a). Consistency, speed, safety, and cost are the four reasons. (b) Size is not a reason. (c) Automation reduces intervention, it does not remove all people. (d) Automation reduces relays, it does not increase them."
    },
    {
      "q": "In relay logic, contacts in series mean:",
      "choices": ["OR", "AND", "NOT", "XOR"],
      "answer": 1,
      "explanation": "Correct: (b). Series means AND — all must close. (a) OR is parallel. (c) NOT is an inverted contact. (d) XOR is not a basic relay-logic function."
    },
    {
      "q": "The first commercial PLC was the:",
      "choices": ["Allen-Bradley PLC-5", "Modicon 084, delivered in 1969", "Siemens S7", "Square D relay panel"],
      "answer": 1,
      "explanation": "Correct: (b). The Modicon 084 was the first commercial PLC. (a) The PLC-5 came much later. (c) The S7 came much later. (d) A relay panel is not a PLC."
    },
    {
      "q": "The main advantage of a PLC over a relay panel is that its logic can be:",
      "choices": ["Changed by reprogramming instead of rewiring", "Changed only by the manufacturer", "Never changed", "Changed by replacing the relays"],
      "answer": 0,
      "explanation": "Correct: (a). Reprogram instead of rewire. (b) The user programs the PLC. (c) PLC logic is changed routinely. (d) Replacing relays is the relay-panel way."
    },
    {
      "q": "A PLC's basic job, repeated continuously, is to:",
      "choices": ["Read inputs, run the program, and set outputs", "Wind the motor", "Charge the battery", "Print reports"],
      "answer": 0,
      "explanation": "Correct: (a). Read inputs, run the program, set outputs — the scan cycle. (b) The PLC does not wind motors. (c) The PLC does not charge batteries. (d) Printing is not the PLC's job."
    },
    {
      "q": "Relay panels were hard to change because:",
      "choices": ["The relays were too fast", "The logic lived in the wiring, so a change meant rewiring", "The panels were too small", "The relays used no power"],
      "answer": 1,
      "explanation": "Correct: (b). Logic in wiring means rewiring to change logic. (a) Relay speed was not the problem. (c) Panels were large, not small. (d) Relays use power."
    },
    {
      "q": "PLC programs are most commonly written in:",
      "choices": ["Ladder logic", "Python", "HTML", "Assembly language only"],
      "answer": 0,
      "explanation": "Correct: (a). Ladder logic is the standard PLC language. (b) Python is not a standard PLC language. (c) HTML is a web language. (d) Assembly is not the standard PLC language."
    },
    {
      "q": "A field device is:",
      "choices": ["The PLC's processor", "A sensor or actuator in the plant, wired to the PLC's I/O", "The programming cable", "The PLC's power supply"],
      "answer": 1,
      "explanation": "Correct: (b). Field devices are the sensors and actuators in the plant. (a) The processor is inside the PLC. (c) The programming cable connects the computer to the PLC. (d) The power supply is inside the PLC system."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — Automation: From Relays to PLCs: Quick Reference</h3>\n<p><strong>Core idea:</strong> Automation is machines doing repetitive work consistently, quickly, and safely. The PLC made it practical — reprogram instead of rewire.</p>\n<p><strong>Relay logic:</strong> Logic lives in the wiring. Series = AND · Parallel = OR · Coil = output. Change meant rewiring; a hundred relays meant a hundred failure points.</p>\n<p><strong>PLC:</strong> First commercial unit: Modicon 084 (1969), built to GM's specification. Advantages: fast change, reliability, compactness, diagnostics.</p>\n<p><strong>Scan:</strong> Read inputs → Run the program → Set outputs → Repeat.</p>\n<p><strong>Self-check:</strong> Explain why relay panels were replaced and what a PLC does differently. If you can, you have this module.</p>\n"
};
