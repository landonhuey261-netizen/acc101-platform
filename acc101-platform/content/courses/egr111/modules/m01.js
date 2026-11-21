// egr111 - Module 1: PLC Hardware & the Scan Cycle
module.exports = {
  "number": 1,
  "slug": "plc-hardware-scan-cycle",
  "title": "PLC Hardware & the Scan Cycle",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain in plain words what a PLC is and why factories use them.",
    "Name the main parts of a PLC system and what each does.",
    "Describe the four steps of the scan cycle in order.",
    "Work out a PLC's scan time from its four parts.",
    "Explain why a slow scan can miss a short input pulse."
  ],
  "sections": [
    {
      "heading": "What a PLC Is and Why Factories Use Them",
      "html": "<p>A PLC — a programmable logic controller — is a rugged industrial computer built to control machines. It reads signals from sensors and switches, runs a program written as ladder logic, and switches outputs such as motors, valves, and lights on and off. PLCs run assembly lines, packaging machines, water plants, and building systems all over the world. They replaced rooms full of wired relays because a program is far easier to change than a wall of rewired relays.</p>\n<p>A PLC is built for the factory floor, not the office. It survives dust, vibration, electrical noise, and temperature swings that would kill a normal computer, and it can run for years without stopping. Its inputs and outputs are electrically isolated and protected, so a fault on the factory floor does not destroy the controller. Reliability is the whole point: when a PLC stops, a production line stops, and that costs real money.</p>\n"
    },
    {
      "heading": "The Parts of a PLC System",
      "html": "<p>A PLC system has four main parts. The power supply converts mains or 24 V DC power into the clean, stable voltages the controller needs. The CPU (central processing unit) runs the program and holds it in memory. Input modules read the real world — switches, sensors, and push-buttons — and convert their signals into numbers the CPU can use. Output modules do the reverse, switching real loads such as contactors, solenoid valves, and indicator lamps.</p>\n<p>The modules plug into a rack (also called a backplane or chassis), which connects them together and to the CPU. A programming device — usually a laptop running the manufacturer's software — connects to the PLC to write, test, and monitor the program. Modern PLCs also have communication ports so they can talk to HMIs, other PLCs, and plant networks, which Module 10 covers.</p>\n"
    },
    {
      "heading": "The Scan Cycle: Read, Solve, Write, Repeat",
      "html": "<p>A PLC does not run its program once and stop — it runs it in a continuous loop called the scan cycle, and the loop has four steps. Step 1: read the inputs — the PLC copies the state of every input into its input image table. Step 2: solve the logic — the CPU runs the ladder program from top to bottom, using the input image, and works out what every output should be. Step 3: write the outputs — the results are copied to the output modules, switching the real loads. Step 4: housekeeping — the CPU handles communications, diagnostics, and internal checks. Then the cycle starts again, thousands of times a minute.</p>\n<p>The key idea is that the program only ever sees the input image, taken at the start of the scan. If an input changes in the middle of the logic solve, the program will not see it until the next scan. That makes PLC behaviour predictable and repeatable — the same inputs always give the same outputs in the same scan.</p>\n"
    },
    {
      "heading": "Scan Time and the Missed Pulse",
      "html": "<p>Scan time is how long one full cycle takes, and it is the sum of its four parts. Example: reading the inputs takes 2 ms, solving the logic takes 3 ms, writing the outputs takes 1 ms, and housekeeping is included in those figures — so the total scan time is 2 + 3 + 1 = 6 ms. A PLC with a 6 ms scan runs its program about 167 times a second. Most small PLCs scan in a few milliseconds; big programs on big systems can take tens of milliseconds.</p>\n<p>Scan time matters because an input pulse shorter than the scan time can be missed entirely. If a sensor is on for only 4 ms and the scan time is 10 ms, the pulse can start and finish between two input reads, and the PLC never sees it. The fixes are a faster scan, a longer pulse, a high-speed counter input (which catches pulses between scans), or a sensor that latches its output until the PLC reads it. When a machine “sometimes misses” a part on a fast conveyor, a too-slow scan is one of the first things to check.</p>\n"
    },
    {
      "heading": "PLC, Relay Panel, or Microcontroller?",
      "html": "<p>Relay panels are the old way: logic wired with physical relays. They are simple and visible, but changing the logic means rewiring, and a panel full of relays is bulky and hard to fault-find. A PLC replaces the relays with a program — changing the logic means editing software, and the program can be monitored live on a laptop. Microcontrollers are cheap and flexible, but they are not built for the factory floor: they lack rugged I/O, isolation, and the industrial support that a PLC has.</p>\n<p>Choose a PLC when the machine must run reliably for years in a harsh environment, when the logic will change over the machine's life, and when maintenance staff need to read and fault-find the program. Choose a microcontroller for a small, cheap, one-off product. <p><strong>Takeaways:</strong><ul><li>A PLC is a rugged industrial computer that reads inputs, runs ladder logic, and drives outputs.</li><li>Its parts are the power supply, CPU, input modules, output modules, and rack.</li><li>The scan cycle is read inputs, solve logic, write outputs, housekeeping — repeated forever.</li><li>Scan time is the sum of its parts: 2 ms + 3 ms + 1 ms = 6 ms.</li><li>An input pulse shorter than the scan time can be missed.</li></ul></p>\n<p><strong>Common mistake:</strong> Thinking the PLC sees inputs instantly. It only reads them once per scan, at the start — a change mid-scan waits until the next scan.</p>\n<p><strong>Common mistake:</strong> Forgetting housekeeping and communications in scan time. They take real time, and a PLC doing heavy communications scans more slowly.</p>\n<p><strong>Ready check:</strong> If you can name the PLC's parts, list the scan steps in order, work out a scan time, and explain a missed pulse, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "PLC",
      "def": "Programmable logic controller: a rugged industrial computer that controls machines by reading inputs, running a program, and driving outputs."
    },
    {
      "term": "CPU",
      "def": "Central processing unit: the part of the PLC that runs the program and holds it in memory."
    },
    {
      "term": "Power supply",
      "def": "The PLC module that converts mains or 24 V DC power into the clean voltages the controller needs."
    },
    {
      "term": "Input module",
      "def": "A PLC module that reads real-world signals from switches and sensors into the CPU."
    },
    {
      "term": "Output module",
      "def": "A PLC module that switches real loads such as contactors, valves, and lamps as the program directs."
    },
    {
      "term": "Rack / backplane",
      "def": "The chassis that holds the PLC modules and connects them together and to the CPU."
    },
    {
      "term": "Scan cycle",
      "def": "The PLC's repeating loop: read inputs, solve logic, write outputs, housekeeping."
    },
    {
      "term": "Scan time",
      "def": "How long one full scan cycle takes, typically a few milliseconds."
    },
    {
      "term": "Input image table",
      "def": "The PLC's internal copy of the input states, taken at the start of each scan."
    },
    {
      "term": "Ladder logic",
      "def": "The graphical programming language for PLCs, drawn as rungs between two rails like a ladder."
    },
    {
      "term": "Relay logic",
      "def": "Control logic built from physical wired relays, the older technology PLCs replaced."
    },
    {
      "term": "Programming device",
      "def": "Usually a laptop with the manufacturer's software, used to write, test, and monitor the PLC program."
    },
    {
      "term": "I/O",
      "def": "Input/output: the PLC's connections to the sensors and loads of the machine it controls."
    },
    {
      "term": "Housekeeping",
      "def": "The scan step where the CPU handles communications, diagnostics, and internal checks."
    },
    {
      "term": "High-speed counter input",
      "def": "A special PLC input that catches short pulses between scans, used for fast sensors and encoders."
    }
  ],
  "video": {
    "title": "PLC Basics | Programmable Logic Controller",
    "embedUrl": "https://www.youtube.com/embed/PbAGl_mv5XI",
    "note": "A clear introduction to what a PLC is, its hardware, and the scan cycle. Watch the scan-cycle section twice, then write the four scan steps from memory in order.",
    "more": [
      {
        "title": "What is a PLC? (90 sec)",
        "url": "https://www.youtube.com/watch?v=ReTtgzN-Dmc"
      },
      {
        "title": "History of PLCs - From Relay Logic to Software",
        "url": "https://www.youtube.com/watch?v=lAdRLkTNeUQ"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A PLC's scan has three measured parts: reading inputs takes 2 ms, solving the logic takes 3 ms, and writing outputs takes 1 ms. Work out the total scan time, and how many scans the PLC completes per second.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Total scan time = 2 + 3 + 1 = 6 ms. Step 2: Scans per second = 1,000 ms ÷ 6 ms ≈ 167 scans per second. A good answer shows the addition and the division.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A sensor on a fast conveyor is on for only 4 ms, but the PLC's scan time is 10 ms. Explain why the PLC can miss the sensor, and name two ways to fix it.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The 4 ms pulse can start and finish between two input reads, so the PLC never sees it. Step 2: Fix one — use a high-speed counter input, which catches pulses between scans. Step 3: Fix two — make the sensor pulse longer, use a latching sensor, or shorten the scan time. A good answer explains the timing gap and gives two real fixes.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Name the four parts of a PLC system and, in one sentence each, say what each part does.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Power supply — provides clean, stable power to the controller. Step 2: CPU — runs the program and holds it in memory. Step 3: Input modules — read switches and sensors into the CPU. Step 4: Output modules — switch real loads such as contactors and valves. A good answer names all four with a correct one-sentence job each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A machine must react to an input within 20 ms. Its PLC scans in 6 ms. Is that fast enough? Explain, allowing for the fact that an input can arrive at any point in the scan.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Yes — the worst case is that the input arrives just after a read, so it is seen on the next scan (6 ms) and the output is written at the end of that scan (another 6 ms), giving a worst-case response of about 12 ms. Step 2: 12 ms is well inside the 20 ms requirement. Step 3: The general rule is that the scan time should be well under half the required response time. A good answer works out the two-scan worst case.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A factory is replacing a relay panel with a PLC. Give three advantages of the PLC over the wired relays.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Changing the logic means editing software, not rewiring a panel. Step 2: The program can be monitored live on a laptop, so faults are found faster. Step 3: A PLC takes far less space, uses less wiring, and adds timers, counters, and communications that relays cannot do. A good answer gives three real advantages.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> An input changes state halfway through the logic-solve step of a scan. When will the program see the change, and when will the output react? Explain using the input image table.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The program only sees the input image table, which was copied at the start of the scan. Step 2: The change is not in the image, so the program does not see it until the next scan's input read. Step 3: The output then reacts at the end of that next scan. A good answer links the delay to the input image table.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does PLC stand for?",
      "choices": [
        "Programmable logic controller",
        "Power line computer",
        "Process loop circuit",
        "Personal laptop computer"
      ],
      "answer": 0,
      "explanation": "Correct: (a). PLC stands for programmable logic controller. (b), (c), and (d) are invented expansions — none of them is the standard term."
    },
    {
      "q": "What is the correct order of the four scan-cycle steps?",
      "choices": [
        "Solve logic, read inputs, write outputs, housekeeping",
        "Read inputs, solve logic, write outputs, housekeeping",
        "Write outputs, read inputs, solve logic, housekeeping",
        "Housekeeping, read inputs, solve logic, write outputs"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The scan is read inputs, solve logic, write outputs, then housekeeping, repeated forever. (a) solves before reading, which is impossible. (c) writes before reading. (d) starts with housekeeping, which is the last step."
    },
    {
      "q": "A PLC takes 2 ms to read inputs, 3 ms to solve logic, and 1 ms to write outputs. What is its scan time?",
      "choices": [
        "3 ms",
        "5 ms",
        "6 ms",
        "2 ms"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Scan time is the sum: 2 + 3 + 1 = 6 ms. (a) is just the logic time. (b) is inputs plus logic, forgetting the outputs. (d) is just the input time."
    },
    {
      "q": "A PLC with a 10 ms scan time is watching a sensor that is on for only 4 ms. What can happen?",
      "choices": [
        "The PLC always sees the sensor",
        "The PLC can miss the pulse entirely if it falls between input reads",
        "The scan time doubles",
        "The sensor is damaged"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A 4 ms pulse can start and finish between two reads 10 ms apart, so the PLC never sees it. (a) is wrong: the pulse is shorter than the scan. (c) is wrong: the sensor does not change the scan time. (d) is wrong: the sensor is not damaged by being missed."
    },
    {
      "q": "What does the CPU do in a PLC system?",
      "choices": [
        "It supplies power to the modules",
        "It runs the program and holds it in memory",
        "It reads the sensors directly",
        "It switches the loads on and off"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The CPU runs the ladder program. (a) is the power supply's job. (c) is the input modules' job. (d) is the output modules' job."
    },
    {
      "q": "What is the job of an input module?",
      "choices": [
        "To switch motors and valves",
        "To read switches and sensors and pass their states to the CPU",
        "To store the program",
        "To supply 24 V to the whole system"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Input modules read the real world into the CPU. (a) is an output module's job. (c) is the CPU's memory. (d) is the power supply's job."
    },
    {
      "q": "Why are PLCs used in factories instead of ordinary computers?",
      "choices": [
        "Because they are cheaper than a laptop",
        "Because they are rugged, reliable, and built for dust, vibration, and electrical noise",
        "Because they run faster than any computer",
        "Because they need no programming"
      ],
      "answer": 1,
      "explanation": "Correct: (b). PLCs survive factory conditions and run for years without stopping. (a) is wrong: a PLC system is not cheaper than a laptop. (c) is wrong: a PLC is slower than a desktop computer. (d) is wrong: PLCs must be programmed."
    },
    {
      "q": "An input changes in the middle of the logic-solve step. When does the program see the change?",
      "choices": [
        "Immediately, in the same scan",
        "On the next scan, when the inputs are read again",
        "Only after the PLC is restarted",
        "Never — the input is lost forever"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The program only sees the input image copied at the start of the scan, so the change waits until the next read. (a) is wrong: the program cannot see mid-scan changes. (c) is wrong: no restart is needed. (d) is wrong: the change is seen on the next scan."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — PLC Hardware & the Scan Cycle: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain in plain words what a PLC is and why factories use them.</p>\n<p><strong>Key terms:</strong> PLC · CPU · Power supply · Input module · Output module · Rack / backplane · Scan cycle · Scan time.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain in plain words what a PLC is and why factories use them.</li>\n<li>Name the main parts of a PLC system and what each does.</li>\n<li>Describe the four steps of the scan cycle in order.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
