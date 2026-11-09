// Auto-generated original course content for College Without College
module.exports = {
  "number": 6,
  "slug": "obd-ii-scan-tools",
  "title": "OBD II & Scan Tools",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what OBD II is and why it is standard on cars from 1996 onward.",
    "Find the diagnostic link connector and connect a scan tool.",
    "Read a diagnostic trouble code and explain what its letter and digits mean.",
    "Explain the difference between a code reader and a scan tool.",
    "Describe live data, freeze-frame data, and readiness monitors."
  ],
  "sections": [
    {
      "heading": "What OBD II Is",
      "html": "<p>OBD II — on-board diagnostics, second generation — is the standard system every car sold from 1996 onward carries. It watches the engine and emissions systems, stores a code when it detects a fault, and turns on the check-engine light to tell the driver. It also gives every technician the same door in: a standard 16-pin connector under the dashboard, and a standard code format, so one tool can talk to any car.</p>\n<p>Before OBD II, each maker had its own connector and its own codes, and diagnosis meant owning a shelf of different tools. The standard changed the trade: a technician can now read any car's codes, watch its live data, and check whether its emissions monitors have run, with one tool.</p>\n"
    },
    {
      "heading": "The Connector and the Code",
      "html": "<p>The diagnostic link connector sits under the driver's side of the dashboard, near the steering column. Plug the scan tool in, switch the ignition on without starting the engine, and the tool powers up from the port and talks to the car's computers. A code is one letter followed by four numbers — for example, P0301. The letter says which system is involved: P for powertrain, B for body, C for chassis, U for network.</p>\n<p>The digits narrow it down: the first digit says whether the code is standard or maker-specific, and the rest point at the system and the fault. P0301, for instance, is a powertrain code for a misfire in cylinder 1. The code names the system that reported the problem and the cylinder or circuit involved — it does not name the part that failed.</p>\n"
    },
    {
      "heading": "Code Reader or Scan Tool?",
      "html": "<p>A code reader does one job: it reads codes and clears them. A scan tool does much more: it shows live data as the engine runs, records freeze-frame data — a snapshot of the conditions when the code was set — and runs tests such as commanding parts on and off. For engine performance work, live data is where the diagnosis lives: a code tells you where to look, and live data tells you what is actually happening.</p>\n<p>Clearing a code without fixing the fault only turns the light off for a while. The computer will detect the fault again, set the code again, and the light will come back. Clearing also wipes the readiness monitors, which matters for emissions testing — a car with cleared monitors is not ready for its test until the monitors have run again.</p>\n"
    },
    {
      "heading": "Live Data, Freeze Frame, and Monitors",
      "html": "<p>Live data is the engine's vital signs in real time: engine speed, coolant temperature, airflow, fuel trims, oxygen sensor readings, and more. Watching them while the fault happens is often the fastest way to the cause — a sensor that reads wrong when the engine is warm, or a fuel trim that climbs under load, tells a story a static code cannot.</p>\n<p>Freeze-frame data is the snapshot taken the moment the code was set: speed, load, temperature, and fuel trim at that instant. It answers the question of when the fault happened, which is often the key to what caused it. Readiness monitors are the computer's self-tests of the emissions systems; each one reports complete or incomplete, and an emissions test needs them complete.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<p><ul><li>OBD II is standard on cars from 1996 onward: one connector, one code format.</li><li>The connector sits under the driver's dashboard; a code is one letter and four numbers.</li><li>A code names the reporting system, not the failed part.</li><li>A scan tool shows live data and freeze frame; a code reader only reads and clears codes.</li><li>Clearing a code wipes the readiness monitors — they must run again before an emissions test.</li></ul></p>\n<p><strong>Common mistake:</strong> Clearing a code and calling the car fixed. The light will come back, and the monitors will be incomplete — the fault is still there.</p>\n<p><strong>Ready-to-Work link:</strong> If you can find the connector, read a code, and say what its letter means, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "OBD II",
      "def": "On-board diagnostics, second generation — the standard fault-reporting system on cars from 1996 onward."
    },
    {
      "term": "Diagnostic link connector",
      "def": "The standard 16-pin connector under the driver's dashboard where a scan tool plugs in."
    },
    {
      "term": "DTC",
      "def": "A diagnostic trouble code — one letter followed by four numbers."
    },
    {
      "term": "Check-engine light",
      "def": "The dashboard light that tells the driver the computer has detected a fault."
    },
    {
      "term": "Code reader",
      "def": "A basic tool that reads and clears codes only."
    },
    {
      "term": "Scan tool",
      "def": "A tool that reads codes and shows live data, freeze frame, and readiness monitors."
    },
    {
      "term": "Live data",
      "def": "Sensor readings watched in real time on a scan tool."
    },
    {
      "term": "Freeze-frame data",
      "def": "A snapshot of engine conditions taken the moment a code was set."
    },
    {
      "term": "Readiness monitor",
      "def": "A computer self-test of an emissions system, reporting complete or incomplete."
    },
    {
      "term": "Powertrain",
      "def": "The engine and transmission systems, coded with the letter P."
    },
    {
      "term": "Pending code",
      "def": "A fault the computer has seen once but not yet confirmed."
    },
    {
      "term": "Stored code",
      "def": "A confirmed fault code stored by the computer."
    },
    {
      "term": "Clearing a code",
      "def": "Erasing a code from the computer, which also wipes the readiness monitors."
    },
    {
      "term": "Network code",
      "def": "A code for a communication fault between modules, coded with the letter U."
    }
  ],
  "video": {
    "title": "AutoZone DIY Garage: Check Engine Light",
    "embedUrl": "https://www.youtube.com/embed/QAg6cXO-yHI",
    "note": "AutoZone shows how a check engine light is read with a scan tool: find the diagnostic port under the dashboard, plug in, and read the code. Watch where the port sits and what the code format looks like.",
    "more": [
      {
        "title": "How to Use an OBD2 Scanner",
        "url": "https://www.youtube.com/watch?v=ES45ALi2LGI"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem.</strong> Explain what OBD II standardised, and why that changed the trade.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Before OBD II, each maker had its own connector and codes. Step 2: OBD II gave every car the same 16-pin connector and the same code format. Step 3: One tool can now read any car's codes and live data.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> A scan tool shows P0301. Explain what each part of that code tells you.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: P means powertrain — engine or transmission. Step 2: 03 points at a misfire. Step 3: 01 points at cylinder 1. Step 4: So the code reports a misfire in cylinder 1 — it does not say which part failed.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Explain the difference between a code reader and a scan tool, and say when a scan tool is needed.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A code reader only reads and clears codes. Step 2: A scan tool also shows live data, freeze frame, and readiness monitors. Step 3: A scan tool is needed for engine performance work, where live data tells you what is actually happening.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Why is clearing a code without fixing the fault not a repair?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The computer will detect the fault again and set the code again. Step 2: The light will come back. Step 3: Clearing also wipes the readiness monitors, so the car is not ready for an emissions test.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> What is freeze-frame data, and why is it useful?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It is a snapshot of engine conditions taken the moment a code was set. Step 2: It shows speed, load, temperature, and fuel trim at that instant. Step 3: It answers when the fault happened, which often points at what caused it.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Where is the diagnostic link connector, and what do you do first after plugging in?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Under the driver's side of the dashboard, near the steering column. Step 2: Switch the ignition on without starting the engine. Step 3: The tool powers up from the port and talks to the car's computers.</p>"
    }
  ],
  "quiz": [
    {
      "q": "OBD II is standard on cars sold from:",
      "choices": [
        "1980 onward",
        "1996 onward",
        "2010 onward",
        "2020 onward"
      ],
      "answer": 1,
      "explanation": "Correct: (b). OBD II is standard from 1996 onward. (a) 1980 predates the standard. (c) and (d) are too late — the standard was already in place."
    },
    {
      "q": "The diagnostic link connector is:",
      "choices": [
        "Under the bonnet",
        "Under the driver's side of the dashboard",
        "In the boot",
        "Under the passenger seat"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The 16-pin connector sits under the driver's dashboard. (a) The engine bay holds the engine, not the connector. (c) The boot is not the location. (d) The passenger side is not the standard location."
    },
    {
      "q": "In the code P0301, the letter P means:",
      "choices": [
        "Body",
        "Powertrain",
        "Chassis",
        "Network"
      ],
      "answer": 1,
      "explanation": "Correct: (b). P is powertrain — engine and transmission. (a) Body is B. (c) Chassis is C. (d) Network is U."
    },
    {
      "q": "P0301 reports:",
      "choices": [
        "A misfire in cylinder 1",
        "A failed fuel pump",
        "A loose fuel cap",
        "A bad oxygen sensor"
      ],
      "answer": 0,
      "explanation": "Correct: (a). P0301 is a powertrain misfire code for cylinder 1. (b) A fuel pump fault has a different code. (c) A fuel cap fault is an EVAP code. (d) An oxygen sensor fault has its own code."
    },
    {
      "q": "A code reader differs from a scan tool because it:",
      "choices": [
        "Shows live data",
        "Only reads and clears codes, while a scan tool also shows live data and freeze frame",
        "Can command parts on and off",
        "Costs more"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A reader does one job; a scan tool shows live data, freeze frame, and monitors. (a) That is a scan tool. (c) That is a scan tool. (d) Readers are usually cheaper."
    },
    {
      "q": "Freeze-frame data is:",
      "choices": [
        "A photo of the car",
        "A snapshot of engine conditions taken the moment a code was set",
        "The list of all codes ever set",
        "The owner's manual"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Freeze frame records speed, load, temperature, and fuel trim at the fault. (a) It is data, not a photo. (c) That is the code history. (d) The manual is a book."
    },
    {
      "q": "Clearing a code without fixing the fault will:",
      "choices": [
        "Fix the car",
        "Turn the light off for a while, then the code will return — and the readiness monitors will be wiped",
        "Improve fuel economy",
        "Make the car faster"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The fault is still there, so the computer will set the code again, and the monitors are incomplete. (a) Clearing is not a repair. (c) It does not change fuel use. (d) It does not change performance."
    },
    {
      "q": "Readiness monitors report whether:",
      "choices": [
        "The tyres are ready",
        "The computer's self-tests of the emissions systems have run and are complete",
        "The battery is charged",
        "The brakes work"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Each monitor reports complete or incomplete for its emissions system. (a) Tyres are not monitored this way. (c) Battery charge is not a monitor. (d) Brakes are not an OBD II monitor."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — OBD II & Scan Tools: Quick Reference</h3>\n<p><strong>OBD II:</strong> Standard from 1996 onward — one 16-pin connector under the driver's dashboard, one code format.</p>\n<p><strong>Code:</strong> One letter (P = powertrain, B = body, C = chassis, U = network) + four numbers. P0301 = misfire, cylinder 1.</p>\n<p><strong>Reader vs scan tool:</strong> A reader reads and clears codes; a scan tool adds live data, freeze frame, and monitors.</p>\n<p><strong>Watch out:</strong> Clearing a code wipes the readiness monitors. A code names a system, not a part.</p>\n<p><strong>Self-check:</strong> Find the connector, read a code, and say what its letter means.</p>\n"
};
