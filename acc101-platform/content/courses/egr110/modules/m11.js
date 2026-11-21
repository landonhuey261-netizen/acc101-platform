// egr110 - Module 11: Sensors & Interfacing
module.exports = {
  "number": 11,
  "slug": "sensors-interfacing",
  "title": "Sensors & Interfacing",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a sensor does and how its output is read.",
    "Work out a temperature from an LM35 sensor voltage.",
    "Explain voltage dividers and use them to read resistive sensors.",
    "Describe digital sensor interfaces and level shifting.",
    "Design a simple sensor-to-microcontroller interface."
  ],
  "sections": [
    {
      "heading": "Sensors: The Senses of a Machine",
      "html": "<p>A sensor converts a physical quantity — temperature, light, pressure, distance, motion — into an electrical signal a circuit can use. Some sensors give an analogue voltage that varies smoothly with the quantity; others give a digital signal, either a simple on/off or a stream of bits over a serial interface. The interface circuit between the sensor and the microcontroller is what turns a raw signal into a reliable measurement.</p>\n<p>Choosing a sensor means matching its output to what the microcontroller can read. An analogue sensor must produce a voltage inside the ADC's range (0–5 V on an Arduino Uno, 0–3.3 V on many newer boards). A digital sensor must speak a protocol the microcontroller supports, and its voltage levels must match the microcontroller's pins — a 5 V sensor output into a 3.3 V pin can damage it.</p>\n"
    },
    {
      "heading": "The LM35 Temperature Sensor",
      "html": "<p>The LM35 is the classic analogue temperature sensor: its output voltage is directly proportional to the temperature, at 10 mV per degree Celsius. At 25 °C it outputs 0.25 V; at 37 °C it outputs 0.37 V. To find the temperature, divide the voltage by 0.01 V/°C: temperature = Vout ÷ 0.01. A reading of 0.25 V means 25 °C, and 0.37 V means 37 °C — the maths is deliberately simple.</p>\n<p>Read the LM35 with the ADC and the two conversions chain together: the ADC reading gives the voltage (reading × 5 ÷ 1024), and the voltage gives the temperature (voltage ÷ 0.01). A reading of 512 means 2.50 V, which would be 250 °C — far beyond the LM35's range, which tells you the sensor is not wired correctly or the reading is wrong. Sanity-checking numbers against the sensor's range is a habit worth building now.</p>\n"
    },
    {
      "heading": "Voltage Dividers and Resistive Sensors",
      "html": "<p>Many sensors are resistive: their resistance changes with the quantity they measure. A light-dependent resistor (LDR) has high resistance in the dark and low resistance in bright light; a thermistor's resistance changes with temperature; a force-sensitive resistor's resistance falls as you press harder. To read a resistive sensor, put it in a voltage divider with a fixed resistor: the voltage at the midpoint changes as the sensor's resistance changes, and the ADC reads that voltage.</p>\n<p>Example: an LDR in series with a 10 kΩ fixed resistor across 5 V. In bright light the LDR is 1 kΩ, so the midpoint voltage (across the fixed resistor) is 5 × 10 ÷ (10 + 1) ≈ 4.55 V. In the dark the LDR is 100 kΩ, so the midpoint is 5 × 10 ÷ (10 + 100) ≈ 0.45 V. The same divider, read by the ADC, turns light level into a number. Picking the fixed resistor near the sensor's mid-range resistance gives the biggest voltage swing.</p>\n"
    },
    {
      "heading": "Digital Sensors and Level Shifting",
      "html": "<p>Digital sensors such as the DHT11 (temperature and humidity) send their readings as a stream of bits over a single wire, using a timing protocol the microcontroller's software must follow. Others use I²C or SPI, standard two-wire and four-wire buses that let many sensors share the same pins, each with its own address. Libraries exist for almost every common sensor, so you rarely need to write the protocol yourself — but you do need to know which bus a sensor uses and what its voltage is.</p>\n<p>Level shifting matters when a 5 V microcontroller talks to a 3.3 V sensor. A 3.3 V output into a 5 V input usually works (the input reads it as HIGH), but a 5 V output into a 3.3 V input can damage the sensor. A level shifter — a small circuit or chip — translates between the two voltages safely. When in doubt, check the sensor's datasheet for its supply and logic voltages before wiring anything.</p>\n"
    },
    {
      "heading": "Putting an Interface Together and Common Mistakes",
      "html": "<p>A good sensor interface follows a checklist: is the sensor's output analogue or digital? Is its voltage range inside the ADC's or the pins' range? Does it need a divider, a pull-up, or a level shifter? Is the power supply clean and stable, or will supply noise appear in the readings? And does the reading make sense — a temperature of 250 °C from an LM35 means the wiring is wrong, not that the room is on fire.</p>\n<p><p><strong>Takeaways:</strong><ul><li>Sensors turn physical quantities into electrical signals, analogue or digital.</li><li>An LM35 gives 10 mV per °C: 0.25 V means 25 °C, 0.37 V means 37 °C.</li><li>Resistive sensors are read through a voltage divider into the ADC.</li><li>Digital sensors use protocols like I²C or SPI; mind the voltage levels.</li><li>Always sanity-check a reading against the sensor's real range.</li></ul></p>\n<p><strong>Common mistake:</strong> Feeding a 5 V sensor output into a 3.3 V pin. It can damage the pin — use a level shifter or a divider.</p>\n<p><strong>Common mistake:</strong> Trusting a reading without checking it. A temperature of 250 °C from an LM35 means the wiring is wrong, not that the room is on fire.</p>\n<p><strong>Ready check:</strong> If you can work out a temperature from an LM35 voltage, design a divider for an LDR, and explain level shifting, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Sensor",
      "def": "A device that converts a physical quantity, such as temperature or light, into an electrical signal."
    },
    {
      "term": "Analogue sensor",
      "def": "A sensor whose output voltage varies smoothly with the quantity it measures."
    },
    {
      "term": "Digital sensor",
      "def": "A sensor that outputs its reading as digital bits, either on/off or over a serial protocol."
    },
    {
      "term": "LM35",
      "def": "A temperature sensor whose output is 10 mV per degree Celsius."
    },
    {
      "term": "LDR",
      "def": "Light-dependent resistor: a sensor whose resistance falls as the light level rises."
    },
    {
      "term": "Thermistor",
      "def": "A resistor whose resistance changes with temperature, used as a temperature sensor."
    },
    {
      "term": "Voltage divider",
      "def": "Two resistors in series across a supply; the midpoint voltage depends on the ratio of the resistances."
    },
    {
      "term": "I²C",
      "def": "Inter-Integrated Circuit: a two-wire serial bus that lets many sensors share the same pins."
    },
    {
      "term": "SPI",
      "def": "Serial Peripheral Interface: a fast four-wire serial bus used by sensors and displays."
    },
    {
      "term": "Level shifter",
      "def": "A circuit that translates signals safely between different logic voltages, such as 5 V and 3.3 V."
    },
    {
      "term": "Signal conditioning",
      "def": "Processing a raw sensor signal — amplifying, filtering, or scaling it — so it can be read reliably."
    },
    {
      "term": "Calibration",
      "def": "Comparing a sensor's readings against known values and correcting any offset or scale error."
    },
    {
      "term": "Noise",
      "def": "Unwanted electrical interference that appears in a measurement and must be filtered or averaged out."
    },
    {
      "term": "Range",
      "def": "The span of values a sensor can measure accurately; readings outside it are not trustworthy."
    }
  ],
  "video": {
    "title": "Arduino Temperature Sensor Tutorial – LM35 & DHT11 with Serial Data & Processing Challenge",
    "embedUrl": "https://www.youtube.com/embed/5umUYEVYzm4",
    "note": "LM35 and DHT11 sensors wired to an Arduino, with the readings shown on screen and the conversion maths explained. Work out the temperature from the LM35 voltage before the video shows the answer.",
    "more": [
      {
        "title": "Lesson 27 Using DHT11 Temperature sensor with LCD | Arduino Step By Step Course",
        "url": "https://www.youtube.com/watch?v=0XMLnCYkvbE"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> An LM35 outputs 0.25 V. What temperature is it measuring? Show the calculation.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The LM35 gives 10 mV per °C, which is 0.01 V per °C. Step 2: Temperature = 0.25 V ÷ 0.01 V/°C = 25 °C. A good answer shows the division and the 25 °C result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> An LM35 outputs 0.37 V. What is the temperature? And what would 0 V mean?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Temperature = 0.37 ÷ 0.01 = 37 °C. Step 2: 0 V would mean 0 °C — or, more likely, that the sensor is not powered or not wired correctly, since a room is rarely at 0 °C. A good answer gives 37 °C and flags the 0 V reading as suspicious.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> An LDR and a 10 kΩ fixed resistor form a divider across 5 V. In bright light the LDR is 1 kΩ. Work out the midpoint voltage (across the fixed resistor).</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Total resistance = 1 kΩ + 10 kΩ = 11 kΩ. Step 2: Midpoint voltage = 5 V × 10 ÷ 11 ≈ 4.55 V. A good answer shows the divider ratio and the 4.55 V result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> The same divider is now in the dark, where the LDR is 100 kΩ. Work out the midpoint voltage and explain the change.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Total resistance = 100 kΩ + 10 kΩ = 110 kΩ. Step 2: Midpoint voltage = 5 V × 10 ÷ 110 ≈ 0.45 V. Step 3: In the dark the LDR takes most of the voltage, so the midpoint falls from about 4.55 V to about 0.45 V — a swing of roughly 4.1 V for the ADC to read. A good answer gives 0.45 V and explains the swing.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A 5 V Arduino reads a sensor that outputs 3.3 V logic. A second sensor outputs 5 V logic but the board it connects to uses 3.3 V pins. Which connection is safe as it is, and which needs a level shifter? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A 3.3 V output into a 5 V input is usually safe — the 5 V input reads 3.3 V as HIGH. Step 2: A 5 V output into a 3.3 V input is not safe — it can damage the 3.3 V pin. Step 3: The second connection needs a level shifter (or a voltage divider for a slow signal). A good answer distinguishes the two directions.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Design the sensor interface for a greenhouse controller: an LM35 measures temperature and an LDR measures light. Describe the wiring, the divider choice for the LDR, and how the program uses the readings.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: LM35 output to an analogue pin, powered from 5 V and ground; temperature = ADC voltage ÷ 0.01. Step 2: LDR in a divider with a 10 kΩ fixed resistor across 5 V, midpoint to a second analogue pin. Step 3: The program reads both, converts them, and decides: fan on if temperature is above 30 °C, grow-light on if the light reading is low. Step 4: The fan and light are driven through MOSFETs, not directly from the pins. A good answer covers wiring, the divider, the conversions, and the MOSFET outputs.</p>"
    }
  ],
  "quiz": [
    {
      "q": "An LM35 temperature sensor outputs 0.25 V. What temperature is it measuring?",
      "choices": [
        "2.5 °C",
        "25 °C",
        "250 °C",
        "0.25 °C"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The LM35 gives 10 mV per °C, so 0.25 ÷ 0.01 = 25 °C. (a) divides by 0.1 instead of 0.01. (c) multiplies by 1,000 instead of dividing. (d) is the voltage, not the temperature."
    },
    {
      "q": "An LM35 outputs 0.37 V. What is the temperature?",
      "choices": [
        "3.7 °C",
        "37 °C",
        "370 °C",
        "0.37 °C"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 0.37 ÷ 0.01 = 37 °C. (a) is ten times too small. (c) is ten times too big. (d) is the voltage, not the temperature."
    },
    {
      "q": "An LDR and a 10 kΩ resistor form a divider across 5 V. In bright light the LDR is 1 kΩ. What is the midpoint voltage across the fixed resistor?",
      "choices": [
        "0.45 V",
        "4.55 V",
        "5.00 V",
        "2.50 V"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Midpoint = 5 × 10 ÷ 11 ≈ 4.55 V. (a) is the dark value, with the LDR at 100 kΩ. (c) is the full supply. (d) would need equal resistances."
    },
    {
      "q": "The same divider in the dark has the LDR at 100 kΩ. What is the midpoint voltage?",
      "choices": [
        "0.45 V",
        "4.55 V",
        "5.00 V",
        "0.05 V"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Midpoint = 5 × 10 ÷ 110 ≈ 0.45 V. (b) is the bright-light value. (c) is the full supply. (d) is ten times too small."
    },
    {
      "q": "Why does a resistive sensor like an LDR need a voltage divider to be read by an ADC?",
      "choices": [
        "Because the ADC measures voltage, not resistance",
        "Because the LDR produces too much current",
        "Because the LDR only works on AC",
        "Because the ADC cannot read anything above 1 V"
      ],
      "answer": 0,
      "explanation": "Correct: (a). An ADC measures voltage, so the divider converts the sensor's changing resistance into a changing voltage. (b) is wrong: an LDR draws very little current. (c) is wrong: LDRs work on DC. (d) is wrong: the ADC reads up to its reference voltage, 5 V here."
    },
    {
      "q": "A 5 V output is connected directly to a 3.3 V microcontroller pin. What is the risk?",
      "choices": [
        "None — the pin will read it fine",
        "The pin can be damaged by the overvoltage",
        "The pin will read it as LOW",
        "The microcontroller will run faster"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 5 V exceeds the 3.3 V pin's rating and can damage it; a level shifter is needed. (a) is wrong: it is not safe. (c) is wrong: 5 V would read as HIGH, not LOW. (d) is wrong: voltage does not change the clock speed."
    },
    {
      "q": "What does I²C let you do?",
      "choices": [
        "Connect many sensors to the same two wires, each with its own address",
        "Amplify a sensor signal",
        "Convert AC to DC",
        "Measure temperature directly"
      ],
      "answer": 0,
      "explanation": "Correct: (a). I²C is a two-wire bus shared by many devices. (b) is an amplifier's job. (c) is a rectifier's job. (d) is a temperature sensor's job."
    },
    {
      "q": "An LM35-based thermometer reads 250 °C in a normal room. What is the most likely explanation?",
      "choices": [
        "The room really is 250 °C",
        "The sensor is wired wrong or the reading is wrong — 250 °C is outside the LM35's sensible range",
        "The LM35 is measuring in Fahrenheit",
        "The ADC is set to 8-bit mode"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A reading far outside the sensor's range means a wiring or measurement fault, not a real temperature. (a) is wrong: a room at 250 °C would be on fire. (c) is wrong: the LM35 outputs a voltage proportional to Celsius. (d) is wrong: bit depth changes resolution, not a 250 °C reading."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Sensors & Interfacing: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a sensor does and how its output is read.</p>\n<p><strong>Key terms:</strong> Sensor · Analogue sensor · Digital sensor · LM35 · LDR · Thermistor · Voltage divider · I²C.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a sensor does and how its output is read.</li>\n<li>Work out a temperature from an LM35 sensor voltage.</li>\n<li>Explain voltage dividers and use them to read resistive sensors.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
