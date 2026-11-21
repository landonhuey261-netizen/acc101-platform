// egr111 - Module 4: Sensors: Proximity, Photoelectric, Encoders & More
module.exports = {
  "number": 4,
  "slug": "sensors",
  "title": "Sensors: Proximity, Photoelectric, Encoders & More",
  "estTime": "3–4 hours",
  "objectives": [
    "Tell digital and analogue PLC inputs apart.",
    "Choose the right proximity sensor for a detection job.",
    "Explain how photoelectric sensors and limit switches work.",
    "Explain encoders and work out position from pulse counts.",
    "Scale an analogue signal (4–20 mA or 0–10 V) into engineering units."
  ],
  "sections": [
    {
      "heading": "Digital and Analogue Inputs",
      "html": "<p>PLC inputs come in two kinds. Digital inputs are on or off: a push-button, a limit switch, a proximity sensor. They tell the PLC whether something is present, pressed, or in position. Analogue inputs are a range of values: a temperature, a pressure, a level, a speed. They arrive as a 4–20 mA current loop or a 0–10 V voltage, and the PLC scales the signal into engineering units — degrees, bar, litres.</p>\n<p>Analogue signals need care. A 4–20 mA loop is the industrial standard because 4 mA is a “live zero”: if the loop reads 0 mA, the wire is broken — with a 0–10 V signal, 0 V could mean a real zero or a broken wire, and you cannot tell which. Current loops also resist electrical noise over long cable runs far better than voltage signals, which is why they dominate in factories.</p>\n"
    },
    {
      "heading": "Proximity Sensors: Detecting Without Touching",
      "html": "<p>A proximity sensor detects an object without touching it. An inductive proximity sensor detects metal: it generates a magnetic field, and a metal target disturbs the field and triggers the output. It only sees metal, which makes it ideal for detecting steel parts on a conveyor. A capacitive proximity sensor detects almost anything — metal, plastic, liquid, wood — because it senses a change in capacitance, which makes it the choice for detecting plastic bottles or liquid levels through a container wall.</p>\n<p>A photoelectric sensor uses a beam of light: a through-beam sensor has a separate emitter and receiver, and the output triggers when an object breaks the beam; a retro-reflective sensor bounces the beam off a reflector; a diffuse sensor detects light reflected off the object itself. Photoelectric sensors work over longer distances than inductive ones and can detect any material, but dust, steam, or a shiny surface can fool them.</p>\n"
    },
    {
      "heading": "Limit Switches, Encoders, and Position",
      "html": "<p>A limit switch is a mechanical switch with a lever or roller: a moving part presses it, and its contacts change state. Limit switches are simple, cheap, and rugged, and they are used as end-of-travel stops and safety interlocks. Their weakness is that they wear out — every operation is a mechanical movement — so they are used where precision is not critical.</p>\n<p>An encoder measures position or speed by counting pulses. An incremental encoder produces a fixed number of pulses per revolution — for example, 360 pulses per revolution means each pulse is one degree. Count 90 pulses and the shaft has turned 90°. An absolute encoder reports its exact position as a digital code, so it knows where it is even after a power cut, while an incremental encoder must find a reference point (a home position) after power-up.</p>\n"
    },
    {
      "heading": "Sinking, Sourcing, and Wiring",
      "html": "<p>Digital sensors are wired as sinking (NPN) or sourcing (PNP). A sourcing (PNP) sensor switches the positive supply to the PLC input, so the input sees +24 V when the sensor is on. A sinking (NPN) sensor switches the input to ground (0 V), so the input sees 0 V when the sensor is on. The sensor type must match the PLC input module: a PNP sensor needs a sinking input module, and an NPN sensor needs a sourcing input module. Mixing them up is one of the most common wiring mistakes in control panels.</p>\n<p>Mechanical switch inputs bounce: when a contact closes, it chatters open and closed for a few milliseconds before settling. A PLC can count each bounce as a separate pulse, so fast counters and edge-triggered logic need debounce — either a hardware filter or a short timer in the program that ignores changes shorter than the bounce time.</p>\n"
    },
    {
      "heading": "Scaling Analogue Signals and Common Mistakes",
      "html": "<p>Scaling turns a raw signal into engineering units. Example: a temperature transmitter sends 4–20 mA for 0–100 °C. At 12 mA, the temperature is (12 − 4) ÷ (20 − 4) × 100 = 8 ÷ 16 × 100 = 50 °C. The formula is always the same: subtract the live zero, divide by the span, multiply by the engineering range. Another example: a pressure sensor sends 0–10 V for 0–50 bar, so 6 V means 6 ÷ 10 × 50 = 30 bar.</p>\n<p><p><strong>Takeaways:</strong><ul><li>Digital inputs are on/off; analogue inputs are a range, usually 4–20 mA or 0–10 V.</li><li>4 mA is a live zero: 0 mA means a broken wire.</li><li>Inductive sensors detect metal; capacitive sensors detect almost anything; photoelectric sensors use a light beam.</li><li>Encoders count pulses to measure position: 360 pulses per rev means 1° per pulse.</li><li>Scale analogue signals with (signal − live zero) ÷ span × range.</li></ul></p>\n<p><strong>Common mistake:</strong> Mixing PNP and NPN sensors with the wrong input module. A PNP sensor needs a sinking input; an NPN sensor needs a sourcing input.</p>\n<p><strong>Common mistake:</strong> Forgetting the live zero when scaling. A 12 mA reading on a 4–20 mA, 0–100 °C loop is 50 °C, not 75 °C — subtract the 4 mA first.</p>\n<p><strong>Ready check:</strong> If you can pick the right sensor for a job, work out a position from encoder pulses, and scale a 4–20 mA signal, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Digital input",
      "def": "A PLC input that is on or off, such as a push-button, limit switch, or proximity sensor."
    },
    {
      "term": "Analogue input",
      "def": "A PLC input that reads a range of values, usually as 4–20 mA or 0–10 V."
    },
    {
      "term": "Proximity sensor",
      "def": "A sensor that detects an object without touching it."
    },
    {
      "term": "Inductive sensor",
      "def": "A proximity sensor that detects metal by disturbing a magnetic field."
    },
    {
      "term": "Capacitive sensor",
      "def": "A proximity sensor that detects almost any material by sensing a change in capacitance."
    },
    {
      "term": "Photoelectric sensor",
      "def": "A sensor that uses a beam of light to detect an object breaking or reflecting the beam."
    },
    {
      "term": "Limit switch",
      "def": "A mechanical switch operated by a moving part pressing its lever or roller."
    },
    {
      "term": "Encoder",
      "def": "A sensor that measures position or speed by producing pulses as a shaft turns."
    },
    {
      "term": "Incremental encoder",
      "def": "An encoder that produces a fixed number of pulses per revolution and must find a home position after power-up."
    },
    {
      "term": "Absolute encoder",
      "def": "An encoder that reports its exact position as a digital code, even after a power cut."
    },
    {
      "term": "4–20 mA loop",
      "def": "The standard industrial analogue signal, where 4 mA is a live zero and 20 mA is full scale."
    },
    {
      "term": "Live zero",
      "def": "A signal's minimum value that is above zero (4 mA), so 0 mA means a broken wire, not a real zero."
    },
    {
      "term": "Sourcing (PNP)",
      "def": "A sensor that switches the positive supply to the PLC input when on."
    },
    {
      "term": "Sinking (NPN)",
      "def": "A sensor that switches the PLC input to ground (0 V) when on."
    },
    {
      "term": "Debounce",
      "def": "Filtering out the rapid chatter of a mechanical contact closing, so the PLC sees one clean change."
    },
    {
      "term": "Scaling",
      "def": "Converting a raw analogue signal into engineering units such as degrees or bar."
    }
  ],
  "video": {
    "title": "Industrial Control Switches & Sensors Explained | Push Buttons, Selector, Proximity & Limit Switch",
    "embedUrl": "https://www.youtube.com/embed/kSXqKsN7Sus",
    "note": "Push-buttons, selector switches, limit switches, and proximity sensors explained with real hardware. Note which sensor type is used for each job, then match them to the jobs in this module's assignment.",
    "more": [
      {
        "title": "PLC Analog Inputs and Signals",
        "url": "https://www.youtube.com/watch?v=ZS3W7uBdQok"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A steel part must be detected on a conveyor. An aluminium part must NOT be detected. Which proximity sensor do you choose, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Choose an inductive proximity sensor, because it detects metal. Step 2: Wait — aluminium is also a metal, so an inductive sensor would detect it too. Step 3: The correct answer is that an inductive sensor cannot tell steel from aluminium; you need a different method, such as a photoelectric sensor with a colour or contrast check, a vision sensor, or a mechanical gauge. A good answer catches the trap and proposes a real alternative.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> An incremental encoder produces 360 pulses per revolution. The PLC counts 90 pulses. How far has the shaft turned?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Each pulse is 360° ÷ 360 pulses = 1° per pulse. Step 2: 90 pulses × 1° = 90°. Step 3: The shaft has turned a quarter of a revolution. A good answer shows the degrees-per-pulse step and the 90° result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A temperature transmitter sends 4–20 mA for 0–100 °C. The PLC reads 12 mA. What is the temperature? Show the scaling.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Subtract the live zero: 12 − 4 = 8 mA. Step 2: Divide by the span: 8 ÷ 16 = 0.5. Step 3: Multiply by the range: 0.5 × 100 = 50 °C. A good answer shows all three steps and the 50 °C result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A pressure sensor sends 0–10 V for 0–50 bar. The PLC reads 6 V. What is the pressure?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The signal is 6 ÷ 10 = 0.6 of full scale. Step 2: 0.6 × 50 bar = 30 bar. Step 3: Note that with a 0–10 V signal there is no live zero, so 0 V could mean a real zero or a broken wire. A good answer gives 30 bar and notes the live-zero point.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A photoelectric sensor must detect cardboard boxes on a conveyor in a dusty warehouse. Which type (through-beam, retro-reflective, or diffuse) is the most reliable here, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Choose a through-beam sensor, because it has a separate emitter and receiver and the strongest signal. Step 2: Dust weakens a reflected beam, so retro-reflective and diffuse sensors are more easily fooled in a dusty environment. Step 3: Through-beam also works over the longest distance and is least affected by the box's colour or surface. A good answer names through-beam and explains the dust issue.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A counter is counting parts from a mechanical limit switch, but it counts two or three parts for each real one. What is happening, and how do you fix it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The switch contacts are bouncing — chattering open and closed for a few milliseconds on each operation, and the counter sees each bounce as a pulse. Step 2: Fix it with debounce: a short timer in the program that ignores changes shorter than the bounce time, or a hardware debounce filter. Step 3: Alternatively, replace the limit switch with a proximity sensor, which has no bouncing contacts. A good answer names bounce and gives a fix.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What is the main advantage of a 4–20 mA analogue signal over a 0–10 V signal?",
      "choices": [
        "It is cheaper",
        "4 mA is a live zero, so 0 mA means a broken wire — and current loops resist noise over long cables",
        "It carries more power",
        "It needs no scaling"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The live zero gives wire-break detection, and current loops resist noise. (a) is wrong: 4–20 mA hardware is not cheaper. (c) is wrong: the signal carries almost no power. (d) is wrong: 4–20 mA signals still need scaling."
    },
    {
      "q": "An inductive proximity sensor detects…",
      "choices": [
        "Any material, including plastic and wood",
        "Metal only",
        "Only liquids",
        "Only transparent objects"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Inductive sensors work by disturbing a magnetic field, which only metal does. (a) describes a capacitive sensor. (c) is wrong: liquids are detected by capacitive sensors. (d) is wrong: transparency is irrelevant to inductive sensing."
    },
    {
      "q": "A capacitive proximity sensor can detect…",
      "choices": [
        "Metal only",
        "Almost any material, including plastic, wood, and liquid",
        "Only magnetic materials",
        "Only objects that are hotter than the sensor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Capacitive sensors sense a change in capacitance, which almost any material causes. (a) describes an inductive sensor. (c) is wrong: magnetism is not involved. (d) is wrong: temperature is irrelevant."
    },
    {
      "q": "A temperature transmitter sends 4–20 mA for 0–100 °C. The PLC reads 12 mA. What is the temperature?",
      "choices": [
        "75 °C",
        "50 °C",
        "60 °C",
        "12 °C"
      ],
      "answer": 1,
      "explanation": "Correct: (b). (12 − 4) ÷ 16 × 100 = 50 °C. (a) 75 °C comes from forgetting to subtract the 4 mA live zero (12 ÷ 16 × 100). (c) 60 °C has no basis. (d) mistakes the current for the temperature."
    },
    {
      "q": "A pressure sensor sends 0–10 V for 0–50 bar. The PLC reads 6 V. What is the pressure?",
      "choices": [
        "60 bar",
        "30 bar",
        "6 bar",
        "50 bar"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 6 ÷ 10 × 50 = 30 bar. (a) multiplies by 10 instead of 5. (c) mistakes the voltage for the pressure. (d) is the full-scale pressure, not the reading."
    },
    {
      "q": "An incremental encoder produces 360 pulses per revolution. The PLC counts 90 pulses. How far has the shaft turned?",
      "choices": [
        "360°",
        "180°",
        "90°",
        "45°"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Each pulse is 1°, so 90 pulses is 90°. (a) is a full revolution (360 pulses). (b) is 180 pulses. (d) is 45 pulses."
    },
    {
      "q": "A PNP (sourcing) sensor must be wired to…",
      "choices": [
        "A sinking PLC input module",
        "A sourcing PLC input module",
        "An analogue input",
        "The power supply directly"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A PNP sensor switches +24 V to the input, so the input module must sink that current to ground. (b) is wrong: a sourcing input with a sourcing sensor has nowhere for the current to go. (c) is wrong: a PNP sensor is digital, not analogue. (d) is wrong: the sensor must connect through the PLC input."
    },
    {
      "q": "A counter counts two or three parts for each real part from a mechanical limit switch. What is the most likely cause?",
      "choices": [
        "The counter preset is too low",
        "Contact bounce — the switch chatters and the counter sees each bounce as a pulse",
        "The sensor is the wrong type",
        "The PLC scan is too fast"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Mechanical contacts bounce for a few milliseconds, and a fast counter counts each bounce. (a) is wrong: the preset affects when DN turns on, not the count rate. (c) is wrong: a limit switch is a valid sensor for this job. (d) is wrong: a fast scan makes bounce worse, but the cause is the bounce itself."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Sensors: Proximity, Photoelectric, Encoders & More: Quick Reference</h3>\n<p><strong>Core idea:</strong> Tell digital and analogue PLC inputs apart.</p>\n<p><strong>Key terms:</strong> Digital input · Analogue input · Proximity sensor · Inductive sensor · Capacitive sensor · Photoelectric sensor · Limit switch · Encoder.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Tell digital and analogue PLC inputs apart.</li>\n<li>Choose the right proximity sensor for a detection job.</li>\n<li>Explain how photoelectric sensors and limit switches work.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
