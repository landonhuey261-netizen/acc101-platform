// egr290 — module 11. Original review content.
module.exports = {
  "number": 11,
  "slug": "pmmi-mechatronics-industrial-electricity-plcs",
  "title": "PMMI Mechatronics: Industrial Electricity and PLCs",
  "estTime": "3–4 hours",
  "objectives": [
    "State the electrical safety rules for industrial work: lockout/tagout, PPE, and arc flash awareness.",
    "Describe three-phase motors, starters, and variable-frequency drives.",
    "Read motor nameplates and calculate synchronous speed and slip.",
    "Describe industrial wiring, conduit, and grounding.",
    "Troubleshoot a PLC-controlled machine step by step."
  ],
  "sections": [
    {
      "heading": "Safety First: Lockout/Tagout and Arc Flash",
      "html": "<p><strong>Step 0 — Safety first.</strong> Before you touch any industrial equipment: de-energise it, lock it out, tag it, and test that it is dead before you work. <strong>Lockout/tagout (LOTO)</strong> is the procedure that keeps a machine from being re-energised while someone is working on it: each worker puts their own lock on the energy-isolating device, and only that worker removes it. Never trust a switch position — test with a meter rated for the voltage. The first scored row of every lab in this course is a safety decision for exactly this reason.</p><p><strong>Arc flash</strong> is the explosive release of energy when a fault arcs between conductors — temperatures hotter than the surface of the sun, a pressure wave, and molten metal. The defence is distance, proper <strong>personal protective equipment (PPE)</strong> rated for the incident energy, and never working live when the work can be done dead. <strong>NFPA 70E</strong> is the standard for electrical safety in the workplace; the <strong>National Electrical Code (NEC, NFPA 70)</strong> is the installation standard. Know which is which: 70E protects the worker, 70 tells you how to install it.</p>"
    },
    {
      "heading": "Three-Phase Motors, Starters, and VFDs",
      "html": "<p>The workhorse of industry is the <strong>three-phase induction motor</strong>. Its <strong>synchronous speed</strong> is n_s = 120f/P, where f is the supply frequency and P is the number of poles: a 4-pole motor on 60 Hz has n_s = 120 × 60/4 = 1,800 rpm. The rotor always runs slower than synchronous speed; the difference is the <strong>slip</strong>, s = (n_s − n)/n_s. A motor running at 1,740 rpm has slip (1,800 − 1,740)/1,800 = 0.0333, or 3.33%. Slip is what makes the motor produce torque — a motor at synchronous speed produces no torque at all.</p><p>A <strong>motor starter</strong> switches the motor on and protects it: the contactor makes and breaks the power, and the <strong>overload relay</strong> trips if the motor draws too much current for too long. A <strong>variable-frequency drive (VFD)</strong> changes the motor's speed by changing the frequency (and voltage) it supplies — and, because it ramps the speed up slowly, it also soft-starts the motor and saves energy on fans and pumps. A 10 hp motor is 10 × 745.7 = 7,457 W; at 1,750 rpm it delivers torque T = 9,550 × P(kW)/n = 9,550 × 7.46/1,750 = 40.7 N·m.</p>"
    },
    {
      "heading": "Nameplates, Wiring, and Grounding",
      "html": "<p>The <strong>motor nameplate</strong> is the motor's identity card: horsepower, voltage, full-load current, frequency, poles (or synchronous speed), service factor, insulation class, and enclosure type. Read it before you wire anything: a motor wired for 230 V and fed 460 V will fail, and a motor wired for 460 V and fed 230 V will not start its load. <strong>Service factor</strong> is the short-term overload the motor can carry — a 1.15 service factor on a 10 hp motor means 11.5 hp for short periods, not forever.</p><p><strong>Wiring:</strong> conductors are sized by ampacity (how much current they can carry safely), and protected by breakers or fuses sized to the conductor. <strong>Conduit</strong> protects conductors and must be sized so the wires fill no more than the allowed percentage of its area. <strong>Grounding</strong> gives fault current a low-resistance path back to the source so the breaker trips instead of the equipment staying live — and <strong>bonding</strong> connects metal parts together so there is no voltage between them. A ground wire is never a current-carrying conductor in normal operation; if it is carrying current, something is wrong.</p>"
    },
    {
      "heading": "Troubleshooting a PLC-Controlled Machine",
      "html": "<p>Troubleshooting a machine is a method, not a talent. <strong>Step 1:</strong> gather information — what changed, when did it stop, what does the operator say? <strong>Step 2:</strong> check the obvious and the safe: power, fuses, breakers, emergency stops, and the PLC's status lights. <strong>Step 3:</strong> divide the system in half — is the problem in the inputs, the program, or the outputs? Force an output in the program (safely, with the machine in a safe state) to test the output side; watch an input's status light to test the input side. <strong>Step 4:</strong> test one theory at a time, and write down what you found.</p><p>The common faults, in order of likelihood: a loose wire or a blown fuse; a sensor out of adjustment or covered in dirt; a timer or counter that never resets; a rung that depends on the order of other rungs; and a program change nobody documented. When you fix it, <strong>verify the whole machine works</strong> and <strong>document what you did</strong> — the last two steps of the troubleshooting method, and the ones most often skipped. A fix nobody documents is a fault that will happen again, to someone else, at 2 a.m.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Safety: lockout/tagout, test before you touch, PPE rated for the incident energy. NFPA 70E protects the worker; the NEC (NFPA 70) is the installation standard.</li><li>Motors: n_s = 120f/P · slip s = (n_s − n)/n_s · VFD changes speed by changing frequency · overload relay protects the motor.</li><li>Nameplate: read it before wiring — voltage, current, poles, service factor. Grounding gives fault current a path home.</li><li>Troubleshooting: gather information, check the obvious, divide inputs/program/outputs, test one theory, verify, document.</li><li>PMMI honesty: this course states no PMMI item counts, pass marks, or fees — they are unverified. The PMMI practice exams here are the app's own size and benchmark.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Trusting a switch position instead of testing. A switch can be off and the circuit still live — test with a meter.</div><div class=\"callout\"><strong>Common mistake:</strong> Forgetting that slip is what makes an induction motor produce torque. Zero slip means zero torque.</div><p><strong>Ready-to-Work link:</strong> If you can find a synchronous speed and a slip, read a nameplate, and lay out a troubleshooting sequence, you have this module. Module 12 is the capstone design project.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Lockout/tagout (LOTO)",
      "def": "Isolating energy, locking it off, and tagging it so a machine cannot be re-energised while work is done."
    },
    {
      "term": "Arc flash",
      "def": "An explosive electrical fault: extreme heat, pressure, and molten metal; defended by distance and rated PPE."
    },
    {
      "term": "NFPA 70E",
      "def": "The standard for electrical safety in the workplace; protects the worker."
    },
    {
      "term": "NEC (NFPA 70)",
      "def": "The National Electrical Code: the installation standard for electrical work."
    },
    {
      "term": "Three-phase induction motor",
      "def": "The industrial workhorse motor; the rotor runs slower than synchronous speed by the slip."
    },
    {
      "term": "Synchronous speed",
      "def": "n_s = 120f/P: the speed of the rotating magnetic field."
    },
    {
      "term": "Slip",
      "def": "s = (n_s − n)/n_s: how far the rotor lags synchronous speed; slip is what produces torque."
    },
    {
      "term": "Motor starter",
      "def": "A contactor plus overload relay that switches a motor on and protects it."
    },
    {
      "term": "Overload relay",
      "def": "Trips the starter if the motor draws too much current for too long."
    },
    {
      "term": "VFD",
      "def": "Variable-frequency drive: changes motor speed by changing the supply frequency (and voltage)."
    },
    {
      "term": "Motor nameplate",
      "def": "The motor's identity card: hp, voltage, current, frequency, poles, service factor."
    },
    {
      "term": "Service factor",
      "def": "The short-term overload a motor can carry (e.g. 1.15 = 15% over rated hp, briefly)."
    },
    {
      "term": "Grounding",
      "def": "A low-resistance path for fault current back to the source, so the breaker trips."
    },
    {
      "term": "Bonding",
      "def": "Connecting metal parts together so no voltage appears between them."
    }
  ],
  "video": {
    "title": "How Electric Motors Work - 3 phase AC induction motors  ac motor",
    "embedUrl": "https://www.youtube.com/embed/59HBoIXzX_c",
    "note": "A clear visual explanation of how a three-phase induction motor works — the rotating field, the rotor, and the slip. Watch it, then redo the synchronous-speed examples here.",
    "more": [
      {
        "title": "How to Convert a Basic Wiring Diagram to a PLC Program",
        "url": "https://www.youtube.com/watch?v=snu8JNM-J1A"
      },
      {
        "title": "A Beginner's Guide to PLC Programming using Ladder Diagram, Function Block, and C++",
        "url": "https://www.youtube.com/watch?v=VDAxCtOzISo"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 4-pole motor runs on 60 Hz. Find its synchronous speed, and its slip if it runs at 1,740 rpm.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: n_s = 120 × 60/4 = 1,800 rpm. Step 2: Slip = (1,800 − 1,740)/1,800 = 60/1,800 = 0.0333 = 3.33%.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A 10 hp motor runs at 1,750 rpm. Find its output power in watts and its torque in N·m.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: P = 10 × 745.7 = 7,457 W = 7.46 kW. Step 2: T = 9,550 × 7.46/1,750 = 40.7 N·m.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A machine stops. List the first three troubleshooting steps in order.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Gather information — what changed, when, what the operator saw. Step 2: Check the obvious and safe — power, fuses, breakers, e-stops, PLC status lights. Step 3: Divide the system — inputs, program, or outputs — and test one side at a time.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A motor nameplate says 460 V, but the supply is 230 V. What happens, and what should you do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The motor will not develop enough torque to start or carry its load, and may overheat. Step 2: Do not run it — check the nameplate, check the supply, and wire or supply the correct voltage before starting.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> You must replace a sensor on a running machine. What is the first safety action?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: De-energise the machine, lock it out with your own lock, tag it, and test that it is dead before touching anything. Step 2: Never work on live equipment when the work can be done dead.</p>"
    }
  ],
  "quiz": [
    {
      "module": 11,
      "q": "A 4-pole motor runs on 60 Hz. What is its synchronous speed?",
      "choices": [
        "1,200 rpm",
        "1,800 rpm",
        "3,600 rpm",
        "900 rpm"
      ],
      "answer": 1,
      "explanation": "Correct: (b). n_s = 120 × 60/4 = 1,800 rpm. (a) is wrong: that is a 6-pole motor. (c) is wrong: that is a 2-pole motor. (d) is wrong: that is an 8-pole motor."
    },
    {
      "module": 11,
      "q": "A motor has n_s = 1,800 rpm and runs at 1,740 rpm. What is its slip?",
      "choices": [
        "1.67%",
        "3.33%",
        "6.67%",
        "0.33%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). (1,800 − 1,740)/1,800 = 3.33%. (a) is wrong: that is a 30 rpm difference. (c) is wrong: that is a 120 rpm difference. (d) is wrong: that is a 6 rpm difference."
    },
    {
      "module": 11,
      "q": "What does a VFD do?",
      "choices": [
        "Changes motor speed by changing the supply frequency",
        "Changes the motor's poles",
        "Replaces the motor",
        "Increases the supply voltage only"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A variable-frequency drive changes speed by changing frequency (and voltage). (b) is wrong: the pole count is fixed by the motor's construction. (c) is wrong: a VFD drives the motor, it does not replace it. (d) is wrong: a VFD changes frequency, not just voltage."
    },
    {
      "module": 11,
      "q": "What is the first safety action before working on industrial equipment?",
      "choices": [
        "Put on gloves",
        "De-energise, lock out, tag, and test that it is dead",
        "Tell the operator",
        "Read the manual"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Lockout/tagout plus testing is the first action — never trust a switch position. (a) is wrong: gloves are PPE, but isolation comes first. (c) is wrong: telling the operator matters, but after isolation. (d) is wrong: reading the manual matters, but after isolation."
    },
    {
      "module": 11,
      "q": "Which standard protects the worker from electrical hazards in the workplace?",
      "choices": [
        "NFPA 70 (NEC)",
        "NFPA 70E",
        "ISO 9001",
        "OSHA 1910.147 only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). NFPA 70E is the electrical safety standard for workers. (a) is wrong: the NEC is the installation standard. (c) is wrong: ISO 9001 is a quality standard. (d) is wrong: 1910.147 is the lockout/tagout rule, part of the picture, not the electrical safety standard."
    },
    {
      "module": 11,
      "q": "A 10 hp motor runs at 1,750 rpm. What torque does it deliver?",
      "choices": [
        "20.4 N·m",
        "40.7 N·m",
        "81.4 N·m",
        "7.46 N·m"
      ],
      "answer": 1,
      "explanation": "Correct: (b). T = 9,550 × 7.46/1,750 = 40.7 N·m. (a) is wrong: that is half — it uses 5 hp. (c) is wrong: that doubles it. (d) is wrong: that is the power in kW, not the torque."
    },
    {
      "module": 11,
      "q": "What does the overload relay in a motor starter do?",
      "choices": [
        "Starts the motor",
        "Trips if the motor draws too much current for too long",
        "Changes the motor speed",
        "Reverses the motor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The overload relay protects the motor from sustained overcurrent. (a) is wrong: the contactor starts the motor. (c) is wrong: a VFD changes speed. (d) is wrong: reversing needs a reversing starter."
    },
    {
      "module": 11,
      "q": "A machine stops and you suspect the PLC program. What is the safest way to test the output side?",
      "choices": [
        "Force the output with the machine running at full speed",
        "Force the output only with the machine in a safe state",
        "Bypass the safety circuit",
        "Replace the PLC immediately"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Forcing an output is only safe with the machine in a safe state. (a) is wrong: forcing outputs on a running machine can move it unexpectedly. (c) is wrong: never bypass a safety circuit. (d) is wrong: replacing the PLC before diagnosing wastes time and money."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — PMMI Mechatronics: Quick Reference</h3>\n<p><strong>Core idea:</strong> Make it safe first, then read the nameplate, then troubleshoot by dividing the system.</p>\n<p><strong>Safety:</strong> De-energise, lock out, tag, test · NFPA 70E protects the worker · NEC (NFPA 70) is the installation standard.</p>\n<p><strong>Motors:</strong> n_s = 120f/P · slip s = (n_s − n)/n_s · VFD changes frequency · overload relay protects the motor.</p>\n<p><strong>Nameplate:</strong> hp, voltage, current, frequency, poles, service factor — read it before wiring.</p>\n<p><strong>Grounding:</strong> Fault current needs a low-resistance path home so the breaker trips.</p>\n<p><strong>Troubleshoot:</strong> Gather information → check the obvious → divide inputs/program/outputs → test one theory → verify → document.</p>\n<p><strong>PMMI honesty:</strong> No PMMI item counts, pass marks, or fees are stated anywhere — they are unverified. The PMMI practice exams are the app's own size and benchmark.</p>\n<p><strong>Watch out:</strong> Never trust a switch position — test. And zero slip means zero torque.</p>\n<p><strong>Self-check:</strong> Find a synchronous speed and a slip, read a nameplate, and lay out a troubleshooting sequence without looking. If you can, you have this module.</p>\n"
};
