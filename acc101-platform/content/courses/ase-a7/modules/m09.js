// Auto-generated original course content for College Without College
module.exports = {
  "number": 9,
  "slug": "electrical-controls",
  "title": "Electrical Controls",
  "estTime": "3–4 hours",
  "objectives": [
    "Name the electrical parts that control the A/C system.",
    "Explain how pressure switches protect the compressor.",
    "Describe how the blower motor speeds are controlled.",
    "Explain what a relay does and why the compressor has one.",
    "Diagnose a no-cooling complaint that is electrical, not a refrigerant fault."
  ],
  "sections": [
    {
      "heading": "The Electrical Side of Cooling",
      "html": "<p>The refrigeration loop is mechanical, but it is switched, guarded, and timed by electricity. The A/C request switch on the dashboard tells the control module the driver wants cooling. The module checks the pressure switches, the evaporator temperature sensor, and the engine's state, then energises the compressor clutch relay and the cooling fan. If any guard says no, the compressor stays off — and the refrigerant side is innocent.</p>\n<p>This is why a no-cooling complaint is not automatically a refrigerant fault. A blown fuse, a failed relay, a broken wire, or a pressure switch holding the clutch out will all leave the gauges reading like a system that was never switched on, because it never was.</p>\n"
    },
    {
      "heading": "Pressure Switches: The Guards",
      "html": "<p>Two switches guard the compressor. The low-pressure switch cuts the clutch out when pressure is too low, because running a compressor with too little refrigerant starves it of the oil that travels with the refrigerant. The high-pressure switch cuts the clutch out when pressure climbs too high, because something is wrong on the high side — a blocked condenser, a failed fan, or an overcharge.</p>\n<p>A switch can also fail itself, holding the clutch out even when pressures are fine. Testing a switch means checking whether it is open or closed at the pressure the system is actually at, not guessing from the symptom. Jumping a switch to force the compressor on is a test for a moment, never a repair — it removes the protection the switch exists to give.</p>\n"
    },
    {
      "heading": "Relays, Fuses, and the Clutch Coil",
      "html": "<p>The compressor clutch coil draws more current than a dashboard switch should carry, so a relay does the heavy work: a small current from the control module switches the relay, and the relay sends battery power to the clutch coil. A relay that clicks but sends no power, or one that never clicks at all, is a common no-cooling fault and a cheap part to test by swapping with a matching relay.</p>\n<p>Fuses protect the wiring. A blown fuse is a symptom, not a diagnosis — something drew too much current, and the cause must be found before a new fuse is fitted, or the new fuse will blow too. The clutch coil itself can fail open, so it draws no current and never pulls in, or short, so it blows its fuse the moment it is energised.</p>\n"
    },
    {
      "heading": "The Blower Circuit",
      "html": "<p>The blower motor is the other big electrical load in the system. Its speeds are set by a resistor pack on older cars, which drops voltage to slow the motor, or by a control module on newer cars. A resistor that has burned out leaves only the highest speed working, because that speed bypasses the resistor entirely. A blower that does not run at all may be a failed motor, a blown fuse, a bad resistor or module, or a failed switch.</p>\n<p>Ohm's law — voltage equals current times resistance (V = IR) — is the tool for these circuits. A voltage drop across a connection that should have none means resistance where there should be none, such as a corroded connector. Measuring voltage at the motor and at the switch tells you which side of the circuit the fault sits on.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<p><ul><li>The control module checks guards before energising the clutch relay and the fan.</li><li>Low-pressure switch protects against low charge; high-pressure switch protects against high pressure.</li><li>A relay lets a small control current switch the larger clutch current.</li><li>A blown fuse is a symptom — find what drew too much current.</li><li>Blower speeds are set by a resistor or a control module; only high speed working points at the resistor.</li></ul></p>\n<p><strong>Common mistake:</strong> Adding refrigerant to a system whose compressor never engages because of an electrical fault. The gauges will look like a dead system, but the refrigerant is not the problem — the clutch circuit is.</p>\n<p><strong>Ready-to-Work link:</strong> If you can trace power from the A/C switch through the guards and relay to the clutch coil, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "A/C request switch",
      "def": "The dashboard switch that tells the control module the driver wants cooling."
    },
    {
      "term": "Compressor clutch relay",
      "def": "The relay that sends battery power to the clutch coil when the module commands cooling."
    },
    {
      "term": "Low-pressure switch",
      "def": "The guard that cuts the clutch out when system pressure is too low."
    },
    {
      "term": "High-pressure switch",
      "def": "The guard that cuts the clutch out when system pressure is too high."
    },
    {
      "term": "Clutch coil",
      "def": "The electromagnet that pulls the clutch plate in when energised."
    },
    {
      "term": "Relay",
      "def": "A switch that lets a small control current switch a larger load current."
    },
    {
      "term": "Fuse",
      "def": "A protective device that breaks the circuit when current gets too high."
    },
    {
      "term": "Blower resistor",
      "def": "The part that drops voltage to set the lower blower speeds."
    },
    {
      "term": "Control module",
      "def": "The electronic brain that reads switches and sensors and commands the clutch, fan, and doors."
    },
    {
      "term": "Voltage drop",
      "def": "Voltage lost across a connection or wire, a sign of unwanted resistance."
    },
    {
      "term": "Ohm's law",
      "def": "Voltage equals current times resistance (V = IR)."
    },
    {
      "term": "Evaporator temperature sensor",
      "def": "The sensor that watches the evaporator so it does not freeze."
    },
    {
      "term": "Cooling fan",
      "def": "The fan that pulls air across the condenser and radiator."
    },
    {
      "term": "Wiring fault",
      "def": "A broken, shorted, or corroded wire that stops a circuit working."
    }
  ],
  "video": {
    "title": "How to Recharge Your Car's AC System (Fast and Easy)",
    "embedUrl": "https://www.youtube.com/embed/SHg2xRMnM38",
    "note": "ChrisFix recharges an A/C system with a kit and shows the low-pressure port, the gauge, and the compressor clutch engaging as refrigerant is added. Watch for the clutch: it is the electrical control that lets the compressor run at all.",
    "more": [
      {
        "title": "How to Properly Recharge Your AC System",
        "url": "https://www.youtube.com/watch?v=Pdq8JAlct6s"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem.</strong> Trace the path of the command to cool, from the dashboard switch to the compressor clutch.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The A/C request switch tells the control module the driver wants cooling. Step 2: The module checks the pressure switches and the evaporator sensor. Step 3: If the guards allow it, the module energises the clutch relay, which sends battery power to the clutch coil.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Why does the low-pressure switch cut the compressor out when the charge is low?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Refrigerant carries the compressor's oil around the loop. Step 2: With too little refrigerant, too little oil reaches the compressor. Step 3: The switch stops the compressor before it runs dry and seizes.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> A relay clicks when cooling is requested but the clutch never engages. What does the click tell you, and what is the next test?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The click means the control side of the relay is working — the module is commanding cooling. Step 2: The load side may not be sending power. Step 3: Test for battery voltage at the clutch coil; if it is missing, the relay contacts or the wiring after it are at fault.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> A fuse for the clutch circuit blows as soon as a new one is fitted. What is the right response?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Do not fit a bigger fuse. Step 2: A fuse blows because something drew too much current — the clutch coil may be shorted, or a wire may be shorted to ground. Step 3: Find and fix the short, then fit the correct fuse.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Explain, using Ohm's law (V = IR), why a corroded connector can make a blower motor run slowly.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Corrosion adds resistance (R) in the circuit. Step 2: By V = IR, that resistance drops voltage across the connector. Step 3: Less voltage reaches the motor, so it runs slowly — the voltage was lost in the connector, not used by the motor.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> The compressor never engages and the gauges read like the system was never switched on. Name two electrical checks to make before adding refrigerant.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check the clutch fuse and relay — is power reaching the clutch coil? Step 2: Check the pressure switches — is one holding the clutch out? (Also: check the A/C request signal is reaching the module.)</p>"
    }
  ],
  "quiz": [
    {
      "q": "The low-pressure switch protects the compressor by:",
      "choices": [
        "Cutting the clutch out when pressure is too low, so it does not run starved of oil",
        "Speeding the compressor up",
        "Opening the expansion valve",
        "Turning the blower on"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Low charge means little oil reaches the compressor, so the switch stops it. (b) The switch does not speed anything. (c) The expansion device is not controlled by this switch. (d) The blower is a separate circuit."
    },
    {
      "q": "The high-pressure switch cuts the clutch out when:",
      "choices": [
        "The cabin is cold enough",
        "Pressure climbs too high, such as from a blocked condenser or overcharge",
        "The blower is on high",
        "The engine is cold"
      ],
      "answer": 1,
      "explanation": "Correct: (b). High pressure means something is wrong on the high side, and the switch protects the system. (a) Cabin temperature is the evaporator sensor's job. (c) Blower speed does not trip this switch. (d) A cold engine affects heating, not this switch."
    },
    {
      "q": "A relay is used for the compressor clutch because:",
      "choices": [
        "The dashboard switch cannot carry the clutch coil's current directly",
        "Relays make the compressor colder",
        "The clutch needs no power",
        "Fuses are too slow"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A small control current switches the relay, which sends battery power to the coil. (b) Relays do not cool anything. (c) The clutch coil needs battery power. (d) Fuses protect wiring; they do not switch loads."
    },
    {
      "q": "A blown fuse should be treated as:",
      "choices": [
        "The fault itself — just replace it",
        "A symptom: something drew too much current, and the cause must be found",
        "A sign the system is working",
        "Proof the compressor is bad"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A new fuse will blow again until the short or overload is fixed. (a) Replacing it without finding the cause repeats the failure. (c) A blown fuse means the circuit stopped. (d) Many faults can blow a fuse."
    },
        {
      "q": "A customer says the heater fan stopped working on speeds 1, 2, and 3, but still blows on 4. What should you check first?",
      "choices": [
        "The heater core",
        "The blower motor resistor",
        "The condenser",
        "The refrigerant charge"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Speed 4 bypasses the resistor, so a burned resistor leaves only top speed. (a) is wrong: the core heats air, it does not set fan speed. (c) is wrong: the condenser is in the A/C loop. (d) is wrong: refrigerant level does not affect blower speeds."
    },
    {
      "q": "Ohm's law states:",
      "choices": [
        "V = IR — voltage equals current times resistance",
        "P = IV — power equals current times voltage",
        "R = V + I",
        "I = V × R"
      ],
      "answer": 0,
      "explanation": "Correct: (a). V = IR is Ohm's law. (b) That is the power formula, not Ohm's law. (c) Resistance is V divided by I, not V plus I. (d) Current is V divided by R, not V times R."
    },
    {
      "q": "Jumping a pressure switch to force the compressor on is:",
      "choices": [
        "A proper repair",
        "A test for a moment only — never a repair, because it removes the protection the switch gives",
        "The first step in every diagnosis",
        "Safe to leave in place"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Bypassing a guard for a test is one thing; leaving it bypassed removes the protection. (a) It is not a repair. (c) It is not the first step. (d) Leaving it bypassed risks compressor damage."
    },
    {
      "q": "A no-cooling complaint with a compressor that never engages could be:",
      "choices": [
        "An electrical fault, such as a failed relay or a pressure switch holding the clutch out",
        "Always a low refrigerant charge",
        "Always a blocked condenser",
        "Always a failed evaporator"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Electrical faults stop engagement without any refrigerant fault. (b) Low charge is one cause, not the only one. (c) A blocked condenser raises high-side pressure. (d) A failed evaporator affects cooling, not clutch engagement."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Electrical Controls: Quick Reference</h3>\n<p><strong>Command path:</strong> A/C switch → control module → checks guards → clutch relay → clutch coil.</p>\n<p><strong>Guards:</strong> Low-pressure switch (too little charge/oil) · High-pressure switch (pressure too high).</p>\n<p><strong>Relay:</strong> Small control current switches the larger clutch current. A blown fuse is a symptom, not the fault.</p>\n<p><strong>Ohm's law:</strong> V = IR — a voltage drop across a connection means unwanted resistance there.</p>\n<p><strong>Self-check:</strong> Trace power from the A/C switch to the clutch coil, naming each guard on the way.</p>\n"
};
