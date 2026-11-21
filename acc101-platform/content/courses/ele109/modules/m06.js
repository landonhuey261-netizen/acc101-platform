// ele109 - Module 6: Analog Inputs, Outputs & Scaling
module.exports = {
  "number": 6,
  "slug": "analog-inputs-outputs-scaling",
  "title": "Analog Inputs, Outputs & Scaling",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the difference between discrete and analog signals.",
    "Describe the common analog signals: 4–20 mA, 0–10 V, and 0–5 V.",
    "Explain analog-to-digital conversion and resolution (bits).",
    "Scale a raw analog input value into engineering units.",
    "Explain analog outputs and how they drive valves, drives, and actuators."
  ],
  "sections": [
    {
      "heading": "Discrete vs Analog: On/Off vs How Much",
      "html": "<p>A discrete signal is on or off — a switch is closed or open, a motor is running or stopped. An <strong>analog signal</strong> is a continuously varying value — a temperature of 73.4°F, a pressure of 42.7 psi, a tank level of 61%. The PLC reads an analog signal as a number, and the number changes as the process changes. Where a discrete input tells the PLC that a tank is full, an analog input tells the PLC how full the tank is — and that difference is what makes process control possible. A PLC that only had discrete I/O could start and stop machines; a PLC with analog I/O can hold a temperature, a pressure, or a level at a setpoint.</p>\n<p>Analog signals come in two standard forms. A <strong>voltage signal</strong> (usually 0–10 V or 0–5 V) varies the voltage to represent the process value. A <strong>current signal</strong> (usually 4–20 mA) varies the current. The 4–20 mA signal is the industrial standard, and its lower limit of 4 mA (instead of 0) is a deliberate design choice: a wire break gives 0 mA, which the PLC can detect as a fault, while a real reading is never below 4 mA. That fault detection — called <strong>open-loop detection</strong> — is why 4–20 mA is preferred over 0–10 V in plants, where a broken wire must be found, not mistaken for a zero reading.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Discrete is on/off; analog is how much. The 4–20 mA standard starts at 4 mA so a broken wire (0 mA) can be detected as a fault.</div>"
    },
    {
      "heading": "Analog-to-Digital Conversion & Resolution",
      "html": "<p>An analog input module converts the field signal into a number the CPU can use — a process called <strong>analog-to-digital conversion (ADC)</strong>. The module samples the signal many times a second and produces a <strong>raw value</strong> in counts. The number of counts depends on the module's <strong>resolution</strong>, measured in bits: a 12-bit module gives 4,096 counts (0–4095), a 16-bit module gives 65,536 counts (0–65535). More bits mean finer steps — a 12-bit module reading a 0–100 psi sensor changes by about 0.024 psi per count, while a 16-bit module changes by about 0.0015 psi per count. For most process work, 12-bit resolution is enough; for precise control, 16-bit is used.</p>\n<p>The raw value is not the engineering value — it is a count that must be <strong>scaled</strong> into the process units (Module 6's next section). The module's datasheet gives its input range and its raw range: for a 4–20 mA module, 4 mA might read as 0 counts and 20 mA as 32,767 counts, or 4 mA might read as 6,400 and 20 mA as 32,000, depending on the manufacturer. The scaling math must use the module's actual raw range, not a guess — and the raw range is in the datasheet and in the module's configuration, not in the program.</p>"
    },
    {
      "heading": "Scaling: From Raw Counts to Engineering Units",
      "html": "<p><strong>Scaling</strong> is the math that turns a raw count into a process value. The formula is a straight line: engineering value = (raw − raw_min) / (raw_max − raw_min) × (eng_max − eng_min) + eng_min. In practice, most PLC programming software has a <strong>scale instruction</strong> (SCP, SCL, or NORM_X/SCALE_X, depending on the brand) that does this math in one block: you give it the raw input, the raw range, and the engineering range, and it outputs the scaled value. For example, a pressure sensor reads 4–20 mA for 0–100 psi, and the module gives 0 counts at 4 mA and 32,767 counts at 20 mA. A raw reading of 16,384 counts (half scale) scales to 50 psi.</p>\n<p>Worked example, step by step: a temperature sensor reads 4–20 mA for 0–200°F, and the module's raw range is 0–32,767. The raw reading is 24,576 counts. The fraction of scale is 24,576 / 32,767 = 0.75. The engineering value is 0.75 × 200 = 150°F. The same math works in reverse for an <strong>analog output</strong>: to drive a valve to 75% open, the program scales 75% into the output's raw range and the module produces the corresponding current or voltage. Scaling errors are the most common analog fault — a wrong raw range or a swapped engineering range gives a reading that looks plausible but is wrong, and the process runs on a lie.</p>"
    },
    {
      "heading": "Analog Outputs, Noise & Grounding",
      "html": "<p>An <strong>analog output</strong> module does the reverse of an input: it takes a number from the program and produces a current or voltage that drives a field device — a control valve that opens in proportion to the signal, a VFD whose speed follows a 4–20 mA setpoint, or a damper actuator. The output is scaled from engineering units to raw counts the same way as an input, and the field device's own range must match: a valve that expects 4–20 mA for 0–100% open must receive 4 mA at 0% and 20 mA at 100%, or it will not open fully or close fully.</p>\n<p>Analog signals are small and easily corrupted by <strong>noise</strong> — the electrical interference from motors, VFDs, and power wiring that runs alongside the signal cable. The defenses are standard: use <strong>shielded twisted-pair cable</strong> for analog signals, ground the shield at one end only (usually at the PLC end), keep analog wiring away from power wiring, and use 4–20 mA current signals (which are far less sensitive to noise than voltage signals) for long runs. A signal that jumps around on the HMI is usually a noise or grounding problem, not a sensor problem — check the shield, the grounding, and the cable routing before replacing the sensor.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Grounding an analog cable shield at both ends. The two grounds are at different potentials, current flows in the shield, and the noise gets worse instead of better. Ground the shield at one end only.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Discrete is on/off; analog is how much — a temperature, a pressure, a level, as a number.</li>\n<li>Standard signals: 4–20 mA (industrial standard, live zero at 4 mA so a broken wire reads 0 mA and is detected) and 0–10 V.</li>\n<li>ADC converts the field signal to raw counts; resolution in bits sets the step size (12-bit = 4,096 counts, 16-bit = 65,536).</li>\n<li>Scaling turns raw counts into engineering units with a straight-line formula, usually in a scale instruction. Use the module's actual raw range from its datasheet.</li>\n<li>Analog outputs drive valves, VFDs, and actuators in proportion to the signal; the field device's range must match the module's range.</li>\n<li>Noise defense: shielded twisted-pair cable, shield grounded at one end only, analog wiring away from power wiring, 4–20 mA for long runs.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Scaling with the wrong raw range — using 0–32,767 when the module actually gives 6,400–32,000 for 4–20 mA. The reading looks plausible but is wrong, and the process runs on a lie.</div>\n<p><strong>Ready-to-Work link:</strong> If you can scale a 4–20 mA signal into engineering units and explain why 4 mA is the live zero, you have this module. Module 7 covers sensors.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Analog signal", "def": "A continuously varying signal representing a process value, such as temperature or pressure." },
    { "term": "4–20 mA", "def": "The industrial standard analog current signal; 4 mA is the live zero, 20 mA is full scale." },
    { "term": "0–10 V", "def": "A common analog voltage signal; 0 V is zero, 10 V is full scale." },
    { "term": "Live zero", "def": "A signal range that starts above zero (4 mA) so a broken wire (0 mA) can be detected as a fault." },
    { "term": "Open-loop detection", "def": "The PLC's ability to detect a broken analog signal wire because the reading falls below the live zero." },
    { "term": "Analog-to-digital conversion (ADC)", "def": "Converting a field analog signal into a raw count the CPU can use." },
    { "term": "Raw value", "def": "The unscaled count from an analog input module." },
    { "term": "Resolution (bits)", "def": "The fineness of an analog module's conversion; 12-bit = 4,096 counts, 16-bit = 65,536 counts." },
    { "term": "Scaling", "def": "The math that turns a raw count into an engineering value (or the reverse for an output)." },
    { "term": "Engineering units", "def": "The real process units of a measurement: °F, psi, percent, gallons per minute." },
    { "term": "Analog output", "def": "A PLC output that produces a varying current or voltage to drive a valve, drive, or actuator." },
    { "term": "Shielded twisted-pair cable", "def": "Cable with a foil or braid shield and twisted conductors, used for analog signals to resist noise." },
    { "term": "Noise", "def": "Electrical interference that corrupts small analog signals." },
    { "term": "Scale instruction", "def": "A PLC instruction (SCP, SCL, NORM_X/SCALE_X) that scales a raw value into engineering units." },
    { "term": "Transmitter", "def": "A field device that converts a process measurement into a standard analog signal (4–20 mA or 0–10 V)." }
  ],
  "video": {
    "title": "PLC Analog Inputs and Signals",
    "embedUrl": "https://www.youtube.com/embed/ZS3W7uBdQok",
    "note": "A clear explanation of PLC analog inputs — the 4–20 mA and 0–10 V signals, how the module converts them to raw counts, and what the numbers mean.",
    "more": [
      { "title": "Analog Inputs and Outputs in PLC Systems", "url": "https://www.youtube.com/watch?v=32wE5ypUuec" },
      { "title": "Analog Input Scaling in PLC Explained (4-20mA to Value) | Easy Concept", "url": "https://www.youtube.com/watch?v=B2TpukbBKS8" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A pressure sensor reads 4–20 mA for 0–100 psi. The module's raw range is 0–32,767 counts. The raw reading is 16,384 counts. What is the pressure?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Fraction of scale = 16,384 / 32,767 = 0.5. Step 2: Pressure = 0.5 × 100 psi = 50 psi. Step 3: Half scale on the raw counts means half scale on the engineering range.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The same sensor's raw reading is 24,576 counts. What is the pressure?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Fraction = 24,576 / 32,767 = 0.75. Step 2: Pressure = 0.75 × 100 = 75 psi. Step 3: Three-quarters of the raw range is three-quarters of the engineering range.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A temperature sensor reads 4–20 mA for 0–200°F. The raw reading is 0 counts. What does this mean, and what should you do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 0 counts means 0 mA — below the 4 mA live zero. Step 2: This is an open-loop fault: the wire is broken or the transmitter has failed. Step 3: Check the wiring and the transmitter before trusting any reading — a 0 mA signal is a fault, not a 0°F temperature.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A valve must be driven to 75% open. Its analog output is 4–20 mA for 0–100% open, and the module's raw range is 0–32,767. What raw value should the program write?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 75% of the raw range = 0.75 × 32,767 = 24,575 counts. Step 2: The program writes 24,575 to the output. Step 3: The module produces 16 mA (4 + 0.75 × 16), and the valve opens to 75%.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A 12-bit analog module reads a 0–100 psi sensor. What is the smallest pressure change it can detect?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A 12-bit module has 4,096 counts. Step 2: Each count is 100 / 4,096 = 0.024 psi. Step 3: The smallest detectable change is about 0.024 psi — finer than most process work needs.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> An analog temperature reading jumps around by several degrees on the HMI. The sensor is new. What is the most likely cause, and what do you check first?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Noise or a grounding problem, not the sensor. Step 2: Check that the signal cable is shielded twisted-pair, that the shield is grounded at one end only (at the PLC), and that the analog wiring runs away from power wiring and VFD cables. Step 3: A shield grounded at both ends or an unshielded cable next to a VFD is the usual cause.</p>"
    }
  ],
  "quiz": [
    {
      "q": "An analog signal differs from a discrete signal in that it:",
      "choices": ["Is on or off only", "Varies continuously to represent a process value", "Is always 24 V DC", "Cannot be read by a PLC"],
      "answer": 1,
      "explanation": "Correct: (b). Analog is how much, not on/off. (a) That is a discrete signal. (c) Analog signals are 4–20 mA or 0–10 V, not always 24 V DC. (d) PLCs read analog signals through analog input modules."
    },
    {
      "q": "The 4–20 mA signal starts at 4 mA instead of 0 mA so that:",
      "choices": ["The sensor uses less power", "A broken wire (0 mA) can be detected as a fault", "The signal is faster", "The PLC uses fewer bits"],
      "answer": 1,
      "explanation": "Correct: (b). The live zero makes open-loop detection possible. (a) Power use is not the reason. (c) Speed is not the reason. (d) Bit count is set by the module's resolution."
    },
    {
      "q": "A 12-bit analog input module gives how many raw counts?",
      "choices": ["256", "1,024", "4,096", "65,536"],
      "answer": 2,
      "explanation": "Correct: (c). 2^12 = 4,096 counts. (a) 256 is 8-bit. (b) 1,024 is 10-bit. (d) 65,536 is 16-bit."
    },
    {
      "q": "A 4–20 mA sensor reads 0–100 psi. A raw reading at half scale (16,384 of 32,767 counts) means the pressure is:",
      "choices": ["0 psi", "25 psi", "50 psi", "100 psi"],
      "answer": 2,
      "explanation": "Correct: (c). Half scale is 50 psi. (a) 0 psi would be 4 mA, 0 counts. (b) 25 psi is quarter scale. (d) 100 psi is full scale, 20 mA."
    },
    {
      "q": "A raw analog reading of 0 counts on a 4–20 mA input means:",
      "choices": ["The process value is zero", "An open-loop fault — a broken wire or a failed transmitter", "The sensor is calibrated", "The PLC is in program mode"],
      "answer": 1,
      "explanation": "Correct: (b). 0 mA is below the 4 mA live zero, so it is a fault. (a) A real zero reading would be 4 mA. (c) Calibration does not produce 0 counts. (d) Program mode does not change the raw reading."
    },
    {
      "q": "An analog cable shield should be grounded:",
      "choices": ["At both ends", "At one end only, usually at the PLC", "Nowhere", "At the sensor only"],
      "answer": 1,
      "explanation": "Correct: (b). One end only prevents shield current from ground potential differences. (a) Both ends lets current flow in the shield and makes noise worse. (c) An ungrounded shield does not protect against noise. (d) Grounding at the sensor only is not the usual practice."
    },
    {
      "q": "Scaling a raw analog value into engineering units uses:",
      "choices": ["A straight-line formula between the raw range and the engineering range", "The motor's horsepower", "The PLC's scan time", "The cable length"],
      "answer": 0,
      "explanation": "Correct: (a). Scaling is a linear map from raw counts to engineering units. (b) Horsepower is irrelevant. (c) Scan time is irrelevant. (d) Cable length does not affect scaling."
    },
    {
      "q": "An analog output module drives:",
      "choices": ["A contactor coil only", "A varying signal to a valve, VFD, or actuator in proportion to the program's value", "A discrete sensor", "The PLC's CPU"],
      "answer": 1,
      "explanation": "Correct: (b). Analog outputs drive proportional field devices. (a) Contactor coils are discrete outputs. (c) Sensors are inputs. (d) The CPU is not driven by an output module."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Analog Inputs, Outputs &amp; Scaling: Quick Reference</h3>\n<p><strong>Core idea:</strong> Discrete is on/off; analog is how much — a temperature, a pressure, a level, as a number.</p>\n<p><strong>Signals:</strong> 4–20 mA (industrial standard; 4 mA live zero so 0 mA = broken wire) · 0–10 V.</p>\n<p><strong>ADC:</strong> Raw counts from the module. Resolution: 12-bit = 4,096 counts · 16-bit = 65,536 counts.</p>\n<p><strong>Scaling:</strong> Eng = (raw − raw_min)/(raw_max − raw_min) × (eng_max − eng_min) + eng_min. Use the module's actual raw range from its datasheet. A scale instruction does this in one block.</p>\n<p><strong>Noise:</strong> Shielded twisted-pair, shield grounded at ONE end only, analog wiring away from power wiring, 4–20 mA for long runs.</p>\n<p><strong>Self-check:</strong> Scale a 4–20 mA signal into engineering units and explain the live zero. If you can, you have this module.</p>\n"
};
