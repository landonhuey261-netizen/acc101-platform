module.exports = {
  "number": 7,
  "slug": "a6-electrical-review",
  "title": "A6 Review — Electrical / Electronic Systems",
  "estTime": "3–4 hours",
  "objectives": [
    "Apply Ohm's law (V = IR) to predict voltage, current, and resistance in a circuit.",
    "Perform and interpret a voltage-drop test on both sides of a circuit.",
    "Diagnose batteries, starting, and charging systems from voltage readings.",
    "Read a wiring diagram and trace a circuit from power to ground.",
    "Score the A6 practice exam timed (50 questions, 90 minutes) at the 70% benchmark."
  ],
  "sections": [
    {
      "heading": "Ohm's Law — the One Equation the Whole Test Runs On",
      "html": "<p>Ohm's law is V = IR: voltage equals current times resistance. Every electrical question in A6 is that equation in disguise. A 12-volt battery pushing current through a 4-ohm load gives 3 amps (12 ÷ 4). A circuit that should draw 3 amps but draws only 1.5 has twice the resistance it should — a bad connection, a corroded terminal, or a partly broken wire. A circuit that draws far too much current has too little resistance — a short, or a load that has failed internally.</p><p>Power is the second equation: P = VI. A 12-volt circuit drawing 10 amps is using 120 watts. That is how you check a load's health without removing it: measure the current, multiply by the voltage, and compare with what the load is supposed to use. A headlamp that draws half its rated current is not getting full voltage — and that is a voltage-drop problem, which is the next section.</p><p><div class=\"callout\"><strong>Key idea:</strong> V = IR, and P = VI. If a question gives you two of the three values, the third is arithmetic — and the exam's 'which is most likely' questions are usually answered by that arithmetic.</div></p>"
    },
    {
      "heading": "Voltage Drop — the Test That Finds Bad Connections",
      "html": "<p>Voltage drop is the voltage used up across a part of a circuit while current flows. A good wire drops almost nothing; a corroded connection drops volts, and those volts are stolen from the load. The test is simple: meter across the suspect part — one lead on each side of it — with the circuit on and current flowing. A voltage-drop test done with the circuit off tells you nothing, because with no current there is no drop to measure.</p><p>The limits the exam uses are the ones technicians use: about 0.2 V (200 mV) or less on the positive side of a charging circuit, about 0.1 V (100 mV) or less on the ground side, and small fractions of a volt on a single connection. A starter circuit that drops 2 volts across a battery cable will crank slowly even with a good battery — the battery is fine, the cable is the load. A ground side that drops a volt makes every load on that ground dim, slow, or erratic, and the fault is one bolt, not the load.</p><p><div class=\"callout\"><strong>Key idea:</strong> Voltage is lost where resistance lives. Test the drop across the connection, under load, and the bad connection confesses in millivolts.</div></p>"
    },
    {
      "heading": "Battery, Starting, and Charging",
      "html": "<p>A fully charged 12-volt battery reads about 12.6 volts at rest — 12.4 is usable, below 12.39 means charge it and test again, and a battery that will not hold a charge after charging is done. During cranking a healthy battery should not drop below about 9.6 volts; a battery that reads 12.6 at rest and collapses to 8 volts while cranking has lost its delivery capacity, even though its resting voltage looked fine.</p><p>The charging system is checked with the engine running: about 13.5–14.5 volts at the battery with a load on (lights, blower) is a healthy alternator doing its job. Below that, check the belt and the wiring before the alternator — a slipping belt or a voltage drop on the B+ cable starves the battery the same way a weak alternator does. A parasitic draw is the third member of the family: a normal key-off draw is roughly 25–50 milliamps, and a draw in the amps means a module staying awake or a light staying on.</p><p><div class=\"callout\"><strong>Key idea:</strong> Resting voltage is what the battery stores. Cranking voltage is what it can deliver. Charging voltage is what the alternator replaces. Three numbers, three different tests.</div></p>"
    },
    {
      "heading": "Wiring Diagrams, Modules, and Networks",
      "html": "<p>A wiring diagram is a map: power at the top, ground at the bottom, and the load in the middle. Trace from the fuse to the load to the ground, and the fault is wherever the voltage stops. A load that has power but no ground does not work; a load that has ground but no power does not work; a load with both that still does not work is the load itself. The diagram also shows the splices and grounds — and a shared ground that fails takes out every load on it at once, which is why three dead items at once means one shared feed or ground, not three failed parts.</p><p>Modern cars add modules and networks. The CAN bus lets modules share information on two wires, and a module that cannot talk to the others sets network codes — U-codes — in several modules at once. A single module that is silent while the rest talk has a power, ground, or bus fault of its own; every module silent at once means the bus itself is down. A scan tool shows you the conversation; the wiring diagram shows you the wires it travels on.</p><p><div class=\"callout\"><strong>Key idea:</strong> Three dead loads at once = one shared power or ground. Several modules with U-codes = a network fault. One module silent = that module's own power, ground, or bus connection.</div></p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> V = IR and P = VI answer the arithmetic; voltage drop is measured across a part, under load; 12.6 V at rest, 9.6 V while cranking, 13.5–14.5 V charging; a shared ground takes out everything on it; U-codes mean the network, not the part.</p><p>The A6 exam is 50 questions in 90 minutes — 108 seconds a question, the most generous of the core eight. Use the time: work the Ohm's law arithmetic on paper, and for every voltage-drop question, ask which side of the circuit the drop is on before you answer.</p><p><div class=\"callout\"><strong>Key idea:</strong> Common mistake: replacing the battery for a slow crank caused by a cable. A battery that reads 12.6 at rest and drops to 8 volts while cranking is bad; a battery that reads 12.6 and stays there while the starter turns slowly has a cable or connection stealing its voltage.</div></p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Ohm's law",
      "def": "V = IR — voltage equals current times resistance."
    },
    {
      "term": "Voltage drop",
      "def": "Voltage used up across a part of a circuit while current flows; a bad connection drops volts and starves the load."
    },
    {
      "term": "Resistance",
      "def": "Opposition to current flow, measured in ohms; corroded connections and broken wires add resistance."
    },
    {
      "term": "Current",
      "def": "Flow of charge, measured in amps; too much current means too little resistance, too little means too much."
    },
    {
      "term": "Power",
      "def": "P = VI, measured in watts; what a load actually uses."
    },
    {
      "term": "Series circuit",
      "def": "One path for current; the same current flows through every part, and voltage drops add up."
    },
    {
      "term": "Parallel circuit",
      "def": "Multiple paths; each branch gets full voltage, and currents add up."
    },
    {
      "term": "Ground",
      "def": "The return path to the battery negative; a bad ground is a resistance in the return path."
    },
    {
      "term": "Parasitic draw",
      "def": "Current drawn with the key off; roughly 25–50 mA is normal, amps is a fault."
    },
    {
      "term": "Alternator",
      "def": "Generates charging current and holds system voltage at about 13.5–14.5 V with the engine running."
    },
    {
      "term": "Starter solenoid",
      "def": "The relay that connects the battery to the starter motor when the key is turned."
    },
    {
      "term": "CAN bus",
      "def": "The two-wire network modules use to share information; a fault sets U-codes."
    },
    {
      "term": "DTC",
      "def": "Diagnostic trouble code — the code a module stores when it detects a fault."
    },
    {
      "term": "Continuity",
      "def": "An unbroken electrical path; tested with the circuit off, it shows whether a wire is open."
    }
  ],
  "video": {
    "title": "Battery Not Charging? Check Voltage Drop Before Replacing the Alternator",
    "embedUrl": "https://www.youtube.com/embed/QzoJdGMYVec",
    "note": "A charging-system voltage-drop test with a digital multimeter: positive side and ground side, under load, with the pass limits stated. The single most exam-relevant electrical test in this module.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1 — Ohm's law.</strong> A 12-volt circuit has a 4-ohm load. How much current flows? If the load's resistance rises to 6 ohms, what happens to the current?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: I = V ÷ R = 12 ÷ 4 = <strong>3 amps</strong>. Step 2: at 6 ohms, I = 12 ÷ 6 = <strong>2 amps</strong>. Higher resistance means less current for the same voltage — a corroded connection that adds 2 ohms cuts this circuit's current by a third, and the load runs dim or slow.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2 — Power.</strong> A blower motor runs on 12 volts and draws 10 amps. How much power does it use? A second motor draws only 5 amps on the same 12 volts — what does that tell you?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: P = V × I = 12 × 10 = <strong>120 watts</strong>. Step 2: the second motor uses 12 × 5 = 60 watts — half the power. Step 3: a motor drawing half its rated current is not getting full voltage or is failing internally; check the voltage at the motor before condemning it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3 — Voltage drop.</strong> A charging circuit is tested under load. The positive side from the alternator B+ to the battery positive drops 0.35 V; the ground side from the alternator case to the battery negative drops 0.08 V. Which side has the fault, and why?</p>",
      "solution": "<p><strong>Answer:</strong> The positive side. Step 1: the positive-side limit is about 0.20 V — 0.35 V is over it, so the B+ cable or its connections have excess resistance. Step 2: the ground side at 0.08 V is under its 0.10 V limit and is fine. Step 3: clean and tighten the B+ connections, or replace the cable, then retest under load.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4 — Cranking voltage.</strong> A 2018 Ford F-150 battery reads 12.6 V at rest and 8.1 V while cranking. A second battery reads 12.6 V at rest and 10.2 V while cranking. Which battery is bad, and why?</p>",
      "solution": "<p><strong>Answer:</strong> The first battery. Step 1: a healthy battery should not drop below about 9.6 V while cranking. Step 2: 8.1 V is below that — the battery cannot deliver current under load even though its resting voltage looked perfect. Step 3: the second battery at 10.2 V passes the cranking test; resting voltage alone would have called both batteries good.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5 — Shared ground.</strong> A 2019 Honda Civic has three dead items at once: the right headlamp, the right turn signal, and the right parking lamp. All three fuses are good. What is the most likely fault?</p>",
      "solution": "<p><strong>Answer:</strong> A shared ground (or shared power feed) for the right-front lamps. Step 1: three loads failing together means one thing they share, not three separate failures. Step 2: check the ground point for the right-front lamps — a loose or corroded ground takes out everything on it. Step 3: voltage-drop test the ground with the lamps on; a large drop across the ground connection is the confession.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6 — Charging check.</strong> A 2017 Toyota Camry shows 12.3 V at the battery with the engine running and the lights on. What is the next step, and what should the reading be?</p>",
      "solution": "<p><strong>Answer:</strong> The system is undercharging — it should read about 13.5–14.5 V. Step 1: check the drive belt for slip and tension. Step 2: voltage-drop test the B+ cable from the alternator to the battery under load. Step 3: only if the belt and wiring pass is the alternator itself condemned — a slipping belt or a bad cable starves the battery exactly like a weak alternator.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A 12-volt circuit has a 4-ohm load. How much current flows?",
      "choices": [
        "2 amps",
        "3 amps",
        "4 amps",
        "48 amps"
      ],
      "answer": 1,
      "explanation": "Correct: (b). I = V ÷ R = 12 ÷ 4 = 3 amps. (a) is wrong: 2 amps would need 6 ohms. (c) is wrong: 4 amps would need 3 ohms. (d) is wrong: 48 is V × R, the wrong operation — current is voltage divided by resistance."
    },
    {
      "q": "A voltage-drop test must be done:",
      "choices": [
        "With the circuit off, for safety",
        "With the circuit on and current flowing",
        "With the battery disconnected",
        "Only on the ground side"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Voltage drop only exists while current flows — with the circuit off there is no drop to measure. (a) is wrong: a dead circuit shows no drop and proves nothing. (c) is wrong: a disconnected battery means no current at all. (d) is wrong: both sides are tested; the positive side has its own limit."
    },
    {
      "q": "A charging-circuit positive side drops 0.35 V under load. What does that mean?",
      "choices": [
        "It is fine — the limit is 1.0 V",
        "It is over the roughly 0.20 V limit — excess resistance on the positive side",
        "The alternator is overcharging",
        "The battery is fully charged"
      ],
      "answer": 1,
      "explanation": "Correct: (b). About 0.20 V is the positive-side limit; 0.35 V means a cable or connection is stealing voltage. (a) is wrong: the limit is about 0.20 V, not 1.0 V. (c) is wrong: overcharging shows as high system voltage, not as a drop. (d) is wrong: state of charge does not change the drop limit."
    },
    {
      "q": "A battery reads 12.6 V at rest and 8.1 V while cranking. What is the verdict?",
      "choices": [
        "Good battery — resting voltage is perfect",
        "Bad battery — it cannot deliver current under load",
        "The starter is bad",
        "The alternator is bad"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A healthy battery should not drop below about 9.6 V while cranking; 8.1 V means it has lost delivery capacity. (a) is wrong: resting voltage is what it stores, not what it can deliver. (c) is wrong: a bad starter draws too much current, but the collapse here is the battery's. (d) is wrong: the alternator is not involved in a cranking test."
    },
    {
      "q": "Three lamps on the same corner all go dead at once, and their fuses are good. What is most likely?",
      "choices": [
        "Three bulbs failed together",
        "A shared power feed or ground for those lamps",
        "The alternator failed",
        "The battery is dead"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Three loads failing together means one thing they share — a feed or a ground. (a) is wrong: three bulbs do not fail at the same instant. (c) is wrong: a failed alternator affects the whole car, not one corner. (d) is wrong: a dead battery stops the whole car."
    },
    {
      "q": "A 12-volt load draws 10 amps. How much power does it use?",
      "choices": [
        "12 watts",
        "22 watts",
        "120 watts",
        "1,200 watts"
      ],
      "answer": 2,
      "explanation": "Correct: (c). P = V × I = 12 × 10 = 120 watts. (a) is wrong: 12 is the voltage alone. (b) is wrong: 22 is V + I, the wrong operation. (d) is wrong: 1,200 is 120 × 10, an extra multiplication."
    },
    {
      "q": "With the engine running and a load on, a healthy charging system reads about:",
      "choices": [
        "12.0 V",
        "12.6 V",
        "13.5–14.5 V",
        "15.5–16.5 V"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A healthy alternator holds the system at about 13.5–14.5 V under load. (a) is wrong: 12.0 V is a discharged battery with the engine off. (b) is wrong: 12.6 V is a fully charged battery at rest, not charging voltage. (d) is wrong: over 15 V is overcharging and will damage the battery."
    },
    {
      "q": "Several modules all store U-codes (network codes) at once. What does that point at?",
      "choices": [
        "One failed sensor",
        "A fault on the CAN bus itself",
        "A dead battery",
        "A blown fuse in one module"
      ],
      "answer": 1,
      "explanation": "Correct: (b). U-codes in several modules at once mean the modules cannot talk to each other — the network is down. (a) is wrong: one sensor sets codes in its own system, not network codes everywhere. (c) is wrong: a dead battery stops everything, it does not set U-codes. (d) is wrong: one module's fuse silences one module, not the whole network."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — A6 Review: Quick Reference</h3>\n<p><strong>Core idea:</strong> V = IR and P = VI answer the arithmetic. Voltage drop is measured across a part, under load.</p>\n<p><strong>Three voltages:</strong> 12.6 V at rest (fully charged) · 9.6 V minimum while cranking · 13.5–14.5 V charging under load.</p>\n<div class=\"formula\">V = IR &nbsp;|&nbsp; P = VI &nbsp;|&nbsp; Positive-side drop limit ~0.20 V &nbsp;|&nbsp; Ground-side drop limit ~0.10 V &nbsp;|&nbsp; Normal key-off draw ~25–50 mA</div>\n<p><strong>A6 exam:</strong> 50 questions, 90 minutes, 108 seconds a question, 70% practice benchmark. Work the arithmetic on paper.</p>\n<p><strong>Self-check:</strong> Compute current for 12 V across 6 ohms from memory, then explain why a voltage-drop test with the circuit off proves nothing.</p>\n"
};
