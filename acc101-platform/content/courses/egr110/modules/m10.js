// egr110 - Module 10: Microcontrollers: An Introduction
module.exports = {
  "number": 10,
  "slug": "microcontrollers-intro",
  "title": "Microcontrollers: An Introduction",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a microcontroller is and how it differs from a computer.",
    "Name the main parts of a microcontroller and what each does.",
    "Explain digital input and output (GPIO) in plain words.",
    "Explain analogue-to-digital conversion and pulse-width modulation.",
    "Describe a simple microcontroller program: read a sensor, decide, act."
  ],
  "sections": [
    {
      "heading": "A Whole Computer on One Chip",
      "html": "<p>A microcontroller is a complete computer shrunk onto a single chip: a processor, memory, and input/output pins, all in one package costing a few dollars. The Arduino Uno, built around the ATmega328P, is the classic learning board; the Raspberry Pi Pico and the ESP32 are popular modern alternatives. Unlike your laptop, a microcontroller runs one program, forever, in a loop — it has no operating system, no screen, and no keyboard, just pins that connect it to the real world.</p>\n<p>The processor executes instructions from flash memory, the program's variables live in a small amount of RAM, and the pins are the microcontroller's senses and hands. A microcontroller's job is to read the world through its pins, make decisions, and act on them — turning a heater on, sounding an alarm, or displaying a reading. That read-decide-act loop is the pattern behind every embedded system, from washing machines to car engine controllers.</p>\n"
    },
    {
      "heading": "GPIO: Digital Input and Output",
      "html": "<p>GPIO stands for General Purpose Input/Output: pins that can be configured as inputs or outputs. As a digital output, a pin is either HIGH (5 V on an Arduino Uno, 3.3 V on many newer boards) or LOW (0 V) — enough to light an LED, drive a transistor, or signal another chip. As a digital input, a pin reads whether the voltage on it is HIGH or LOW, which is how it reads buttons, switches, and digital sensors.</p>\n<p>Inputs need care: a pin that is not connected to anything floats, picking up stray signals and reading randomly. A pull-up or pull-down resistor ties the pin to a known level when nothing is driving it — many microcontrollers have built-in pull-up resistors you can switch on in software. Always check a pin's voltage rating: putting 5 V into a 3.3 V pin can destroy it.</p>\n"
    },
    {
      "heading": "Analogue In, PWM Out",
      "html": "<p>The real world is analogue — temperature, light, and pressure vary smoothly — but a microcontroller is digital. An ADC (analogue-to-digital converter) bridges the gap: it measures an input voltage and returns a number. A 10-bit ADC with a 5 V reference returns 0 for 0 V and 1023 for 5 V, so each step is 5 ÷ 1024 ≈ 4.88 mV. A reading of 512 means a voltage of 512 × 5 ÷ 1024 = 2.50 V. A reading of 205 means 205 × 5 ÷ 1024 ≈ 1.00 V.</p>\n<p>PWM (pulse-width modulation) does the reverse: it produces an analogue-like output from a digital pin by switching it on and off very fast. The duty cycle is the fraction of time the pin is on: 25% duty on a 5 V pin averages 1.25 V, 75% duty averages 3.75 V. That average voltage can dim an LED, set a motor's speed, or control a heater. On an Arduino, analogWrite(pin, 128) gives a duty cycle of 128 ÷ 255 ≈ 50.2%, averaging about 2.51 V on a 5 V pin.</p>\n"
    },
    {
      "heading": "A Program: Read, Decide, Act",
      "html": "<p>A typical microcontroller program is a loop: read the sensor, decide what to do, act, and repeat. In Arduino's C++-like language, setup() runs once at start-up (to configure pins), and loop() repeats forever. A temperature controller might read an LM35 sensor on an analogue pin, convert the reading to degrees, and switch a fan on if the temperature is above 30 °C. The whole program is only a dozen lines — but it is a complete control system.</p>\n<p>The microcontroller's limits shape the design: an Arduino Uno has 2 KB of RAM, so programs must be small and simple; it runs at 16 MHz, which is fast for control but slow for heavy maths; and its pins can supply only about 20 mA each, so motors and relays must be driven through a transistor or MOSFET, never directly. Respecting those limits is the difference between a reliable product and a board that keeps resetting.</p>\n"
    },
    {
      "heading": "From Blink to Real Systems and Common Mistakes",
      "html": "<p>Every microcontroller journey starts with Blink — turning an LED on and off once a second. From there the path is: read a button, read a sensor, drive a motor, talk to another chip, and finally build a complete system. The skills from this whole course come together here: the transistor switch from Module 3, the MOSFET from Module 4, the sensor interfacing from the next module, and the power supply from Module 12.</p>\n<p><p><strong>Takeaways:</strong><ul><li>A microcontroller is a whole computer on one chip, running one program in a loop.</li><li>GPIO pins are digital inputs or outputs; floating inputs need pull-up or pull-down resistors.</li><li>A 10-bit ADC with a 5 V reference gives 2.50 V for a reading of 512.</li><li>PWM controls average voltage by duty cycle: 25% of 5 V averages 1.25 V.</li><li>Programs follow read–decide–act, and heavy loads need a transistor, not a bare pin.</li></ul></p>\n<p><strong>Common mistake:</strong> Connecting a motor or relay directly to a microcontroller pin. Pins supply about 20 mA; motors need hundreds of milliamps and will damage the pin — always use a transistor or MOSFET.</p>\n<p><strong>Common mistake:</strong> Leaving an input pin floating. An unconnected pin reads random noise; always use a pull-up or pull-down resistor.</p>\n<p><strong>Ready check:</strong> If you can explain GPIO, work out an ADC voltage, work out a PWM average, and describe the read–decide–act loop, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Microcontroller",
      "def": "A complete computer — processor, memory, and input/output — on a single chip, running one program in a loop."
    },
    {
      "term": "Arduino",
      "def": "A popular microcontroller board and programming environment, widely used for learning and prototyping."
    },
    {
      "term": "Flash memory",
      "def": "Non-volatile memory in a microcontroller that holds the program, kept even when the power is off."
    },
    {
      "term": "RAM",
      "def": "Volatile memory that holds a program's variables while it runs; lost when the power goes off."
    },
    {
      "term": "GPIO",
      "def": "General Purpose Input/Output: pins that can be configured as digital inputs or outputs."
    },
    {
      "term": "Digital input",
      "def": "A pin configured to read whether the voltage on it is HIGH (1) or LOW (0)."
    },
    {
      "term": "Digital output",
      "def": "A pin configured to drive its voltage HIGH (5 V or 3.3 V) or LOW (0 V)."
    },
    {
      "term": "Pull-up resistor",
      "def": "A resistor that ties an input pin to the supply voltage so it reads HIGH when nothing else drives it."
    },
    {
      "term": "Pull-down resistor",
      "def": "A resistor that ties an input pin to ground so it reads LOW when nothing else drives it."
    },
    {
      "term": "ADC",
      "def": "Analogue-to-digital converter: measures an input voltage and returns a digital number."
    },
    {
      "term": "Resolution",
      "def": "The smallest voltage change an ADC can detect; for a 10-bit ADC with a 5 V reference, about 4.88 mV per step."
    },
    {
      "term": "PWM",
      "def": "Pulse-width modulation: switching a digital pin on and off fast so its average voltage can be controlled."
    },
    {
      "term": "Duty cycle",
      "def": "The fraction of time a PWM signal is on, expressed as a percentage."
    },
    {
      "term": "Embedded system",
      "def": "A microcontroller-based system built into a product to control it, such as a washing machine or a car engine controller."
    },
    {
      "term": "setup() and loop()",
      "def": "In Arduino programming, setup() runs once at start-up and loop() repeats forever."
    }
  ],
  "video": {
    "title": "Playing with Arduino On-Board LEDs.",
    "embedUrl": "https://www.youtube.com/embed/x6VdzNKUoZk",
    "note": "A first Arduino session: the board, the built-in LED, and the classic Blink program. Follow along and get an LED blinking — it is the “hello world” of embedded systems.",
    "more": [
      {
        "title": "Lesson 00 What is Arduino? | Robojax Arduino Step By Step Course - RJT544",
        "url": "https://www.youtube.com/watch?v=-6qSrDUA5a8"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 10-bit ADC with a 5 V reference returns a reading of 512. What input voltage does that mean? Show the calculation.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Each ADC step is 5 V ÷ 1024 ≈ 4.88 mV. Step 2: Voltage = 512 × 5 ÷ 1024 = 2.50 V. A good answer shows the division and the 2.50 V result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The same ADC returns a reading of 205. What is the input voltage?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Voltage = 205 × 5 ÷ 1024 = 1025 ÷ 1024 ≈ 1.00 V. Step 2: A reading near 205 means the input is about 1 V. A good answer shows the calculation and the 1.00 V result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A PWM output on a 5 V pin runs at 25% duty cycle. What is the average voltage? What about 75% duty cycle?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Average voltage = duty cycle × supply voltage. Step 2: 25% of 5 V = 0.25 × 5 = 1.25 V. Step 3: 75% of 5 V = 0.75 × 5 = 3.75 V. A good answer gives both averages.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> On an Arduino, analogWrite(pin, 128) is called. What is the duty cycle as a percentage, and what average voltage appears on a 5 V pin?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: analogWrite takes a value from 0 to 255, so 128 ÷ 255 ≈ 0.502, or about 50.2% duty cycle. Step 2: Average voltage = 0.502 × 5 V ≈ 2.51 V. A good answer gives both the percentage and the voltage.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A student connects a push-button to a microcontroller input pin with no pull-up or pull-down resistor, and the program reads random values. Explain what is happening and how to fix it.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The pin is floating — not connected to any defined voltage — so it picks up stray electrical noise and reads randomly. Step 2: The fix is a pull-up resistor (or the microcontroller's built-in pull-up) so the pin reads HIGH when the button is not pressed, and LOW when the button connects it to ground. Step 3: Alternatively, use a pull-down resistor with the button wired to the supply. A good answer names the floating pin and the pull-up fix.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Describe, in five steps, a microcontroller program that keeps a small greenhouse fan running whenever the temperature is above 30 °C, and name the hardware each step needs.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Read the temperature sensor (LM35) on an analogue pin — an ADC reading. Step 2: Convert the reading to degrees Celsius. Step 3: Decide: if the temperature is above 30 °C, the fan must run. Step 4: Act: switch the fan on through a MOSFET (never directly from the pin), or switch it off. Step 5: Wait a short time and repeat the loop. A good answer covers read, convert, decide, act, and repeat, with the MOSFET for the fan.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What is a microcontroller?",
      "choices": [
        "A small computer on one chip, running one program in a loop",
        "A type of resistor",
        "A large desktop computer",
        "A power supply"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A microcontroller packs a processor, memory, and I/O onto one chip and runs one program forever. (b) is wrong: a resistor is a passive component. (c) is wrong: a desktop runs an operating system and many programs. (d) is wrong: a power supply provides power, it does not run programs."
    },
    {
      "q": "A 10-bit ADC with a 5 V reference returns a reading of 512. What is the input voltage?",
      "choices": [
        "1.25 V",
        "2.50 V",
        "5.00 V",
        "0.25 V"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Voltage = 512 × 5 ÷ 1024 = 2.50 V. (a) 1.25 V would be a reading of 256. (c) 5.00 V would be a reading of 1023. (d) 0.25 V would be a reading of about 51."
    },
    {
      "q": "The same ADC returns a reading of 205. What is the input voltage, approximately?",
      "choices": [
        "0.50 V",
        "1.00 V",
        "2.05 V",
        "4.10 V"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Voltage = 205 × 5 ÷ 1024 ≈ 1.00 V. (a) 0.50 V would be a reading near 102. (c) 2.05 V mistakes the reading for the voltage. (d) 4.10 V would be a reading near 840."
    },
    {
      "q": "A PWM output on a 5 V pin runs at 25% duty cycle. What is the average voltage?",
      "choices": [
        "5.00 V",
        "3.75 V",
        "1.25 V",
        "0.25 V"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Average = 0.25 × 5 = 1.25 V. (a) is the peak voltage, not the average. (b) is the average at 75% duty. (d) is 5% of 5 V, not 25%."
    },
    {
      "q": "analogWrite(pin, 128) on an Arduino gives what duty cycle, approximately?",
      "choices": [
        "12.8%",
        "25%",
        "50.2%",
        "100%"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 128 ÷ 255 ≈ 0.502, about 50.2%. (a) confuses 128 with 12.8. (b) would be a value of about 64. (d) would be a value of 255."
    },
    {
      "q": "Why should a motor not be connected directly to a microcontroller pin?",
      "choices": [
        "Because motors only run on AC",
        "Because a pin can supply only about 20 mA, far less than a motor needs, and the motor could damage the pin",
        "Because motors need a clock signal",
        "Because the pin voltage is too high"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Pins supply about 20 mA; motors need hundreds of milliamps and produce voltage spikes, so a transistor or MOSFET must drive them. (a) is wrong: small DC motors run on DC. (c) is wrong: motors do not need a clock. (d) is wrong: the pin voltage is lower than the motor's supply, not too high."
    },
    {
      "q": "An input pin that is not connected to anything will…",
      "choices": [
        "Always read LOW",
        "Always read HIGH",
        "Float and read random values from stray noise",
        "Shut the microcontroller down"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A floating pin picks up stray signals and reads unpredictably. (a) and (b) are wrong: a floating pin has no defined level. (d) is wrong: a floating pin does not shut anything down."
    },
    {
      "q": "In an Arduino program, what is the difference between setup() and loop()?",
      "choices": [
        "setup() runs once at start-up; loop() repeats forever",
        "loop() runs once; setup() repeats",
        "They are the same function",
        "setup() is for outputs and loop() is for inputs"
      ],
      "answer": 0,
      "explanation": "Correct: (a). setup() configures pins once, and loop() runs the read-decide-act cycle forever. (b) has them backwards. (c) is wrong: they have different roles. (d) is wrong: both can handle inputs and outputs."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Microcontrollers: An Introduction: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a microcontroller is and how it differs from a computer.</p>\n<p><strong>Key terms:</strong> Microcontroller · Arduino · Flash memory · RAM · GPIO · Digital input · Digital output · Pull-up resistor.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a microcontroller is and how it differs from a computer.</li>\n<li>Name the main parts of a microcontroller and what each does.</li>\n<li>Explain digital input and output (GPIO) in plain words.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
