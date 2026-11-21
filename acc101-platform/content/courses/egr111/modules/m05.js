// egr111 - Module 5: Actuators & Motor Controls
module.exports = {
  "number": 5,
  "slug": "actuators-motor-controls",
  "title": "Actuators & Motor Controls",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a contactor and a motor starter do.",
    "Describe a three-wire start/stop motor circuit.",
    "Explain overload protection and how it is set.",
    "Work out motor torque from power and speed.",
    "Explain how a VFD controls motor speed and why it matters."
  ],
  "sections": [
    {
      "heading": "Contactors, Starters, and Overloads",
      "html": "<p>A contactor is a heavy-duty relay that switches a motor's power: a small coil current from the PLC closes big contacts that carry the motor's amps. A motor starter is a contactor plus an overload relay in one unit. The overload relay watches the motor's current and trips — opening the control circuit — if the motor draws too much current for too long, which is what happens when a motor is jammed, overloaded, or has lost a phase.</p>\n<p>The overload is set to the motor's full-load current (FLA) from its nameplate, so it trips just above normal running current but well before the motor is damaged. It has a time delay so the motor's high starting current (often six times full-load current for a second or two) does not trip it. After a trip, the overload must be reset by hand before the motor can restart — a deliberate design choice, so someone investigates the fault first.</p>\n"
    },
    {
      "heading": "Three-Wire Start/Stop Control",
      "html": "<p>The standard motor control circuit is three-wire start/stop: a Start push-button, a Stop push-button, and a holding contact from the contactor itself. Press Start and the contactor coil energises, closing its main contacts to the motor and its auxiliary holding contact in parallel with Start — the same seal-in idea from Module 2, now in hard-wired form. Release Start and the holding contact keeps the contactor on; press Stop and the circuit opens, the contactor drops out, and the motor stops.</p>\n<p>The overload relay's NC contact is wired in series with the stop circuit, so an overload trip opens the control circuit and stops the motor, and the motor cannot restart until the overload is reset. In a PLC-controlled system the same logic lives in ladder rungs, with the contactor coil driven by a PLC output — the hard-wired and PLC versions are the same circuit, drawn two ways.</p>\n"
    },
    {
      "heading": "Motor Torque: Power and Speed",
      "html": "<p>A motor's torque comes from its power and its speed: torque T = 9550 × P ÷ n, where P is power in kilowatts and n is speed in revolutions per minute, giving torque in newton-metres. Example: a 5 hp motor (5 hp = 3.73 kW) running at 1750 rpm produces T = 9550 × 3.73 ÷ 1750 = 20.4 N·m, which is about 15.0 lb-ft. Another: a 3.7 kW motor at 1450 rpm gives T = 9550 × 3.7 ÷ 1450 = 24.4 N·m. And a 2.2 kW motor at 2850 rpm gives T = 9550 × 2.2 ÷ 2850 = 7.37 N·m.</p>\n<p>The formula shows the trade-off that matters in machine design: for the same power, a slower motor gives more torque. That is why gearboxes are used — they trade speed for torque. It also shows why a motor's torque falls when a VFD slows it down without changing the power, and why a motor that is too small for its load draws excess current and trips its overload.</p>\n"
    },
    {
      "heading": "Variable Frequency Drives (VFDs)",
      "html": "<p>A VFD controls an AC motor's speed by changing the frequency of the power it supplies. A standard induction motor's synchronous speed is set by the supply frequency and its number of poles: a 4-pole motor on 60 Hz runs at 1800 rpm synchronous speed (about 1750 rpm under load, because of slip). Halve the frequency to 30 Hz and the speed halves too — the synchronous speed becomes 900 rpm, about 875 rpm under load. Change the frequency and the motor follows.</p>\n<p>VFDs save energy (a fan or pump running at half speed uses far less than full power), give smooth soft starts with no current spike, and let one motor cover a range of speeds. They also need care: a motor run very slowly for a long time can overheat, because its own cooling fan is spinning slowly too, and VFDs generate electrical noise that must be filtered. A soft starter is a cheaper alternative when all you need is a gentle start, not speed control.</p>\n"
    },
    {
      "heading": "Choosing a Motor Control and Common Mistakes",
      "html": "<p>Use a direct-on-line starter for a small motor that can start at full voltage. Use a soft starter when the starting current or mechanical shock is a problem. Use a VFD when the speed must vary or energy must be saved. And always include overload protection — a motor without it is a fire waiting for a jam. Size the contactor for the motor's full-load current, set the overload to the nameplate FLA, and check the torque formula before claiming a motor can drive a load.</p>\n<p><p><strong>Takeaways:</strong><ul><li>A contactor switches motor power; an overload relay trips on excess current.</li><li>Three-wire start/stop uses a holding contact — the hard-wired seal-in.</li><li>Torque T = 9550 × P ÷ n: a 5 hp motor at 1750 rpm gives 20.4 N·m.</li><li>A VFD changes motor speed by changing frequency: 60 Hz to 30 Hz halves the speed.</li><li>Set the overload to the motor's nameplate full-load current.</li></ul></p>\n<p><strong>Common mistake:</strong> Setting the overload too high “so it never trips”. The overload is the motor's only protection — set it to the nameplate FLA, not above it.</p>\n<p><strong>Common mistake:</strong> Forgetting slip when working out VFD speeds. A 4-pole motor on 60 Hz runs at about 1750 rpm under load, not 1800 rpm — 1800 rpm is the synchronous speed with no load.</p>\n<p><strong>Ready check:</strong> If you can explain three-wire start/stop, work out motor torque, and explain what a VFD does to speed, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Contactor",
      "def": "A heavy-duty relay that switches a motor's power, driven by a small coil current from the control circuit."
    },
    {
      "term": "Motor starter",
      "def": "A contactor plus an overload relay in one unit, used to start and protect a motor."
    },
    {
      "term": "Overload relay",
      "def": "A device that trips and stops a motor if it draws too much current for too long."
    },
    {
      "term": "Full-load current (FLA)",
      "def": "The current a motor draws at its rated power, printed on its nameplate; the overload is set to this value."
    },
    {
      "term": "Three-wire control",
      "def": "A start/stop circuit using a momentary Start button, a Stop button, and a holding contact."
    },
    {
      "term": "Holding contact",
      "def": "An auxiliary contact on a contactor, wired in parallel with Start, that keeps the contactor energised after Start is released."
    },
    {
      "term": "VFD",
      "def": "Variable frequency drive: a device that controls an AC motor's speed by changing the frequency of its supply."
    },
    {
      "term": "Synchronous speed",
      "def": "The speed of an AC motor's rotating magnetic field, set by the supply frequency and the number of poles."
    },
    {
      "term": "Slip",
      "def": "The difference between a motor's synchronous speed and its actual speed under load, typically a few percent."
    },
    {
      "term": "Torque",
      "def": "The turning force a motor produces, measured in newton-metres (N·m) or pound-feet (lb-ft)."
    },
    {
      "term": "Soft starter",
      "def": "A device that ramps a motor's voltage up gently for a smooth start, without speed control."
    },
    {
      "term": "Horsepower (hp)",
      "def": "A unit of power: 1 hp = 746 W, so 5 hp = 3,730 W."
    },
    {
      "term": "Auxiliary contact",
      "def": "A small extra contact on a contactor, used for holding circuits and status signals."
    },
    {
      "term": "Direct-on-line (DOL)",
      "def": "Starting a motor by connecting it straight to full supply voltage through a contactor."
    }
  ],
  "video": {
    "title": "Motor Control 101",
    "embedUrl": "https://www.youtube.com/embed/aml0VGzNXEo",
    "note": "Contactors, overloads, and three-wire start/stop explained with real hardware. Trace the holding contact through the circuit, then sketch the same circuit as a ladder rung.",
    "more": [
      {
        "title": "Basic Motor Control: 3 Wire Start Stop Circuit (updated)",
        "url": "https://www.youtube.com/watch?v=kHbXbK7S188"
      },
      {
        "title": "Variable Frequency Drives Explained - VFD Basics IGBT inverter",
        "url": "https://www.youtube.com/watch?v=yEPe7RDtkgo"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 5 hp motor runs at 1750 rpm. Work out its torque in N·m, showing the power conversion and the formula.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Convert power: 5 hp × 746 W/hp = 3,730 W = 3.73 kW. Step 2: Torque T = 9550 × P ÷ n = 9550 × 3.73 ÷ 1750 = 20.4 N·m. Step 3: That is about 15.0 lb-ft. A good answer shows the conversion and the 20.4 N·m result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A 3.7 kW motor runs at 1450 rpm. Work out its torque.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: T = 9550 × P ÷ n = 9550 × 3.7 ÷ 1450. Step 2: 9550 × 3.7 = 35,335; 35,335 ÷ 1450 = 24.4 N·m. A good answer shows the multiplication and the 24.4 N·m result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 2.2 kW motor runs at 2850 rpm. Work out its torque, and compare it with the 3.7 kW motor in Problem 2.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: T = 9550 × 2.2 ÷ 2850 = 21,010 ÷ 2850 = 7.37 N·m. Step 2: The 2.2 kW motor gives far less torque (7.37 N·m versus 24.4 N·m) because it has less power and runs nearly twice as fast. Step 3: For the same power, a slower motor gives more torque. A good answer gives 7.37 N·m and the comparison.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A 4-pole motor runs at about 1750 rpm on a 60 Hz supply. A VFD reduces the frequency to 30 Hz. What is the motor's new speed, approximately, and why is it not exactly half of 1800 rpm?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Halving the frequency halves the synchronous speed: 1800 rpm becomes 900 rpm. Step 2: Under load the motor runs a little below synchronous speed because of slip, so about 875 rpm. Step 3: It is not exactly 900 rpm because slip is always present under load. A good answer gives about 875 rpm and explains slip.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A motor's nameplate says FLA 10 A. The overload relay is set to 15 A “so it never trips”. Explain the problem and say what the setting should be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The overload is the motor's protection: it must trip when the motor is overloaded, before the motor is damaged. Step 2: Set to 15 A, the motor can run 50% over its rated current for a long time without tripping, which will overheat and damage it. Step 3: The overload should be set to the nameplate FLA, 10 A. A good answer explains the protection role and gives the 10 A setting.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Describe the three-wire start/stop circuit for a motor, naming each part and explaining what happens when Start is pressed and released.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The circuit has a Start NO push-button, a Stop NC push-button, the contactor coil, and a holding contact from the contactor in parallel with Start. Step 2: Pressing Start energises the coil, which closes the main contacts to the motor and the holding contact. Step 3: Releasing Start leaves the coil energised through the holding contact, so the motor keeps running. Step 4: Pressing Stop opens the circuit, the coil drops out, and the motor stops. A good answer names all the parts and the sequence.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does a contactor do?",
      "choices": [
        "It measures motor current",
        "It switches a motor's power using a small coil current to close big contacts",
        "It changes the supply frequency",
        "It stores the PLC program"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A contactor is a heavy-duty relay that switches motor power. (a) is an overload relay or current sensor's job. (c) is a VFD's job. (d) is the CPU's memory."
    },
    {
      "q": "A 5 hp motor runs at 1750 rpm. What is its torque, approximately?",
      "choices": [
        "20.4 N·m",
        "10.2 N·m",
        "40.8 N·m",
        "2.04 N·m"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 5 hp = 3.73 kW, and T = 9550 × 3.73 ÷ 1750 = 20.4 N·m. (b) is half the right value. (c) is double. (d) is ten times too small."
    },
    {
      "q": "A 3.7 kW motor runs at 1450 rpm. What is its torque?",
      "choices": [
        "12.2 N·m",
        "24.4 N·m",
        "48.8 N·m",
        "2.44 N·m"
      ],
      "answer": 1,
      "explanation": "Correct: (b). T = 9550 × 3.7 ÷ 1450 = 24.4 N·m. (a) is half the right value. (c) is double. (d) is ten times too small."
    },
    {
      "q": "A 2.2 kW motor runs at 2850 rpm. What is its torque, approximately?",
      "choices": [
        "7.37 N·m",
        "14.7 N·m",
        "3.69 N·m",
        "73.7 N·m"
      ],
      "answer": 0,
      "explanation": "Correct: (a). T = 9550 × 2.2 ÷ 2850 = 7.37 N·m. (b) is double. (c) is half. (d) is ten times too big."
    },
    {
      "q": "A 4-pole motor runs at about 1750 rpm on 60 Hz. A VFD reduces the frequency to 30 Hz. What is the new speed, approximately?",
      "choices": [
        "1750 rpm",
        "875 rpm",
        "900 rpm exactly",
        "3500 rpm"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Halving the frequency halves the speed: synchronous 1800 becomes 900 rpm, and under load with slip it runs at about 875 rpm. (a) is the original speed. (c) forgets slip. (d) doubles the speed, which is backwards."
    },
    {
      "q": "What is the overload relay set to?",
      "choices": [
        "Twice the motor's full-load current",
        "The motor's nameplate full-load current (FLA)",
        "The motor's starting current",
        "Zero, so it never trips"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The overload is set to the nameplate FLA, so it trips just above normal running current. (a) would let the motor run dangerously overloaded. (c) is six times the running current and would never protect the motor. (d) would trip immediately."
    },
    {
      "q": "In a three-wire start/stop circuit, what keeps the contactor energised after the Start button is released?",
      "choices": [
        "The Stop button",
        "The holding contact from the contactor, wired in parallel with Start",
        "The overload relay",
        "The PLC program"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The holding contact seals the circuit in, like the seal-in rung in ladder logic. (a) is wrong: Stop opens the circuit. (c) is wrong: the overload protects, it does not hold. (d) is wrong: in a hard-wired circuit there is no PLC."
    },
    {
      "q": "Why does a motor run slightly slower than its synchronous speed?",
      "choices": [
        "Because the supply frequency is wrong",
        "Because of slip — the rotor must lag the rotating field to produce torque",
        "Because the VFD is faulty",
        "Because the overload is set too low"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Slip is the small speed difference that lets an induction motor produce torque; a 4-pole motor on 60 Hz runs at about 1750 rpm, not 1800 rpm. (a) is wrong: the frequency is correct. (c) is wrong: slip happens with or without a VFD. (d) is wrong: the overload setting does not affect speed."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Actuators & Motor Controls: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a contactor and a motor starter do.</p>\n<p><strong>Key terms:</strong> Contactor · Motor starter · Overload relay · Full-load current (FLA) · Three-wire control · Holding contact · VFD · Synchronous speed.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a contactor and a motor starter do.</li>\n<li>Describe a three-wire start/stop motor circuit.</li>\n<li>Explain overload protection and how it is set.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
