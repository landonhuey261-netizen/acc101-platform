// ele108 - Module 9: Variable Frequency Drives (VFD) Basics
module.exports = {
  "number": 9,
  "slug": "variable-frequency-drives-vfd-basics",
  "title": "Variable Frequency Drives (VFD) Basics",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how a VFD controls motor speed by changing frequency and voltage together.",
    "Describe the three parts of a VFD: rectifier, DC bus, and inverter.",
    "Explain the volts-per-hertz (V/Hz) ratio and why it must be held constant.",
    "Describe the benefits of VFDs: energy savings, soft starting, and process control.",
    "Explain VFD issues: harmonics, motor heating, and bearing currents."
  ],
  "sections": [
    {
      "heading": "Speed by Frequency: The VFD's Big Idea",
      "html": "<p>A VFD controls a motor's speed by changing the frequency of the power it supplies. Remember the synchronous speed formula from Electrical 107: Ns = 120f/P. Change the frequency and the field speed changes with it, so the motor's speed follows. A 4-pole motor runs at 1,800 rpm on 60 Hz, at 900 rpm on 30 Hz, and at 600 rpm on 20 Hz. The VFD is the device that makes that variable frequency — it takes the fixed 60 Hz supply, turns it into DC, and then builds a new AC supply at whatever frequency the process needs.</p>\n<p>But frequency alone is not enough. The motor's magnetic field depends on the ratio of voltage to frequency (V/Hz): if the frequency falls and the voltage stays the same, the field becomes too strong, the iron saturates, and the motor overheats. If the voltage falls faster than the frequency, the field becomes too weak and the motor loses torque. The VFD therefore changes voltage and frequency together, holding the V/Hz ratio constant — 480 V at 60 Hz becomes 240 V at 30 Hz and 120 V at 15 Hz — so the motor keeps its rated torque across its speed range.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A VFD changes frequency to change speed, and changes voltage with it to hold the V/Hz ratio constant — so the motor keeps its torque at any speed.</div>"
    },
    {
      "heading": "Inside a VFD: Rectifier, DC Bus & Inverter",
      "html": "<p>A VFD has three stages. The <strong>rectifier</strong> converts the incoming AC to DC, using diodes (or, in larger drives, controlled rectifiers). The <strong>DC bus</strong> stores that DC on capacitors, smoothing it into a steady DC voltage. The <strong>inverter</strong> turns the DC back into AC at the desired frequency, using transistors (IGBTs) that switch on and off thousands of times per second to build a waveform that approximates a sine wave. The inverter's switching is controlled by the drive's processor, which sets the frequency, the voltage, the acceleration ramp, and the protection.</p>\n<p>The output waveform is not a clean sine wave — it is a series of pulses (pulse-width modulation, or PWM) that the motor's inductance smooths into something close to a sine wave. That pulsing is the source of most VFD side effects: it creates <strong>harmonics</strong> on the supply, it can cause extra heating in the motor, and the fast voltage rises can damage motor insulation and cause <strong>bearing currents</strong> — small currents through the bearings that pit the bearing surfaces over time. These are real issues with real fixes (see below), not reasons to avoid VFDs, but a technician must know they exist.</p>"
    },
    {
      "heading": "Why VFDs Save Energy",
      "html": "<p>The biggest reason VFDs are everywhere is energy. A fan or a pump driven by a motor at fixed speed and throttled by a damper or a valve wastes the energy that the throttling throws away. A VFD slows the motor instead, and the power a fan or pump needs falls with the cube of the speed: a fan at half speed needs about one-eighth of the power. Slowing a fan from full speed to 80% speed cuts its power to about half. That is why VFDs pay for themselves so quickly on fans, pumps, and blowers — the energy saved is large, and it starts the day the drive is installed.</p>\n<p>VFDs also give the process control that fixed-speed motors cannot: a conveyor that speeds up and slows down with the line, a pump that holds a constant pressure as demand changes, a machine that ramps up gently instead of jerking to full speed. The drive's <strong>acceleration time</strong> and <strong>deceleration time</strong> are set in its parameters — a slow ramp for a fragile load, a fast ramp for a machine that must respond quickly. The <strong>minimum frequency</strong> is set so the motor never runs so slowly that its own cooling fan cannot cool it, and the <strong>maximum frequency</strong> is set so the motor never exceeds its rated speed.</p>"
    },
    {
      "heading": "VFD Issues and How They Are Handled",
      "html": "<p>Three issues need attention on a VFD installation. <strong>Harmonics:</strong> the rectifier draws current in pulses, distorting the supply waveform and heating transformers and other equipment. The fix is a line reactor or a harmonic filter on the drive's input, and keeping the drive's input wiring short and separate from sensitive circuits. <strong>Motor heating:</strong> the PWM waveform adds losses in the motor, and a motor running slowly gets less cooling from its shaft fan. The fix is an <strong>inverter-duty motor</strong> — built with better insulation and often with a separate constant-speed cooling fan — for applications that run slowly for long periods. <strong>Bearing currents:</strong> the fast voltage pulses can drive current through the bearings, pitting them. The fix is shaft grounding rings, insulated bearings, or a load reactor (output filter) on the drive.</p>\n<p>Basic VFD setup is a matter of entering the motor's nameplate data into the drive — horsepower, voltage, full-load amps, rated speed, and frequency — and then setting the acceleration and deceleration times, the minimum and maximum frequencies, and the protection (overcurrent, overload, and stall). The drive's manual is the authority for its own parameters, and the settings are recorded on the panel schedule. Never run a VFD with the wrong motor data entered: the drive's protection is only as good as the data it was given.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Running a standard motor very slowly on a VFD for long periods. The shaft fan slows with the motor, cooling falls, and the motor overheats — use an inverter-duty motor with a separate cooling fan, or set a minimum frequency that keeps the cooling adequate.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>A VFD changes frequency to change speed (Ns = 120f/P) and changes voltage with it to hold the V/Hz ratio constant.</li>\n<li>Three stages: rectifier (AC to DC), DC bus (capacitors smooth the DC), inverter (IGBTs build new AC at the set frequency).</li>\n<li>Energy savings: fan and pump power falls with the cube of speed — half speed is about one-eighth power.</li>\n<li>Issues: harmonics (fix with a line reactor or filter), motor heating at low speed (fix with an inverter-duty motor), bearing currents (fix with shaft grounding or an output filter).</li>\n<li>Setup: enter the motor nameplate data, set acceleration and deceleration times, and set minimum and maximum frequency.</li>\n<li>A VFD controls speed; a soft starter only controls the start. Do not confuse the two.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Calling a soft starter a VFD, or expecting a VFD to be as cheap as a soft starter. The VFD does far more — continuous speed control, process control, and energy savings — and it costs more because of it.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain the three stages of a VFD, the V/Hz ratio, and the cube law for fan power, you have this module. Module 10 covers industrial wiring methods and panels.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Variable frequency drive (VFD)", "def": "A device that controls motor speed by varying the frequency and voltage of the power it supplies." },
    { "term": "Rectifier", "def": "The VFD stage that converts incoming AC to DC." },
    { "term": "DC bus", "def": "The capacitors in a VFD that store and smooth the DC voltage between the rectifier and the inverter." },
    { "term": "Inverter", "def": "The VFD stage that turns DC back into AC at the desired frequency, using IGBTs." },
    { "term": "Volts-per-hertz (V/Hz) ratio", "def": "The ratio of voltage to frequency that a VFD holds constant so the motor keeps its torque at any speed." },
    { "term": "Pulse-width modulation (PWM)", "def": "The inverter's method of building an AC waveform from rapid on-off pulses." },
    { "term": "IGBT", "def": "An insulated-gate bipolar transistor; the switching device in a VFD's inverter." },
    { "term": "Harmonics", "def": "Distortion of the supply waveform caused by the VFD's pulsed current draw." },
    { "term": "Inverter-duty motor", "def": "A motor built with better insulation and cooling for use on a VFD, especially at low speeds." },
    { "term": "Bearing currents", "def": "Small currents through a motor's bearings caused by VFD voltage pulses, which pit the bearing surfaces." },
    { "term": "Line reactor", "def": "An inductor on a VFD's input that reduces harmonics and protects the drive from supply surges." },
    { "term": "Acceleration time", "def": "The VFD setting for how long the motor takes to ramp from stop to the set speed." },
    { "term": "Deceleration time", "def": "The VFD setting for how long the motor takes to ramp from speed to a stop." },
    { "term": "Cube law", "def": "The rule that fan and pump power falls with the cube of speed — half speed is about one-eighth power." },
    { "term": "Minimum frequency", "def": "The lowest frequency a VFD will run, set so the motor stays cool enough." }
  ],
  "video": {
    "title": "Variable Frequency Drives Explained - VFD Basics IGBT inverter",
    "embedUrl": "https://www.youtube.com/embed/yEPe7RDtkgo",
    "note": "The Engineering Mindset explains the VFD — rectifier, DC bus, and inverter — with the V/Hz ratio and the PWM waveform shown step by step.",
    "more": [
      { "title": "What is a VFD? (Variable Frequency Drive)", "url": "https://www.youtube.com/watch?v=g7jFGOn6xfU" },
      { "title": "VFD 101 Basics", "url": "https://www.youtube.com/watch?v=YA-6TNhFsE4" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 4-pole motor runs at 1,800 rpm on 60 Hz. A VFD is set to 30 Hz. What is the motor's synchronous speed now, and what voltage should the VFD supply if the motor is rated 480 V at 60 Hz?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Ns = 120 × 30 / 4 = 900 rpm. Step 2: Hold the V/Hz ratio constant: 480 / 60 = 8 V/Hz, so at 30 Hz the voltage is 8 × 30 = 240 V. Step 3: The motor runs at 900 rpm with 240 V, keeping its rated torque.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A fan uses 10 kW at full speed. A VFD slows it to 80% speed. About how much power does it use now?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Fan power follows the cube law: P ∝ speed³. Step 2: 0.8³ = 0.512. Step 3: About 5.1 kW — roughly half the power for an 80% speed.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> The same fan is slowed to 50% speed. About how much power does it use now?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 0.5³ = 0.125. Step 2: 10 kW × 0.125 = 1.25 kW. Step 3: About one-eighth of full power — the reason VFDs save so much energy on fans and pumps.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A standard motor on a VFD runs at 10 Hz for hours and overheats. Explain why, and give the fix.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: At 10 Hz the motor turns slowly, so its shaft-mounted cooling fan moves little air. Step 2: The PWM waveform also adds losses in the motor. Step 3: The fix is an inverter-duty motor with a separate constant-speed cooling fan, or a minimum frequency setting that keeps the cooling adequate.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A VFD installation is causing distortion on the building's supply and overheating a nearby transformer. What is the cause, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Harmonics — the VFD's rectifier draws current in pulses, distorting the supply waveform. Step 2: The fix is a line reactor or a harmonic filter on the drive's input. Step 3: Keep the drive's input wiring short and separate from sensitive circuits.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A motor must run at a speed that varies continuously with the process, and it must also start gently. Which device fits, and why not a soft starter?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A VFD. Step 2: It controls speed continuously and ramps the motor up gently. Step 3: A soft starter only controls the start — once the motor is up to speed it runs at full speed, so it cannot vary the running speed.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A VFD changes a motor's speed by changing the:",
      "choices": ["Supply voltage only", "Frequency of the power it supplies, with voltage changed to hold the V/Hz ratio", "Number of poles", "Size of the motor"],
      "answer": 1,
      "explanation": "Correct: (b). Frequency sets speed; voltage follows to hold V/Hz constant. (a) Voltage alone cannot set speed. (c) Pole count is fixed by construction. (d) Motor size does not change speed."
    },
    {
      "q": "The three stages of a VFD, in order, are:",
      "choices": ["Inverter, DC bus, rectifier", "Rectifier, DC bus, inverter", "DC bus, inverter, rectifier", "Rectifier, inverter, DC bus"],
      "answer": 1,
      "explanation": "Correct: (b). AC to DC (rectifier), smoothed DC (bus), DC back to AC at the set frequency (inverter). (a), (c), and (d) put the stages in the wrong order."
    },
    {
      "q": "The V/Hz ratio must be held constant because:",
      "choices": ["It makes the motor quieter", "Too much voltage for the frequency saturates the iron and overheats the motor; too little loses torque", "It is required by the NEC", "It reduces the motor's weight"],
      "answer": 1,
      "explanation": "Correct: (b). The field strength depends on V/Hz. (a) Noise is not the reason. (c) The NEC does not set the V/Hz ratio. (d) V/Hz does not affect weight."
    },
    {
      "q": "A fan slowed to half speed by a VFD uses about:",
      "choices": ["Half its full-speed power", "One-quarter of its full-speed power", "One-eighth of its full-speed power", "The same power"],
      "answer": 2,
      "explanation": "Correct: (c). The cube law: 0.5³ = 0.125. (a) Half would be the linear rule, not the cube law. (b) One-quarter is the square law. (d) Power falls sharply with speed."
    },
    {
      "q": "Harmonics from a VFD are reduced by:",
      "choices": ["A line reactor or harmonic filter on the drive's input", "A bigger motor", "A longer cable", "Removing the DC bus"],
      "answer": 0,
      "explanation": "Correct: (a). A reactor or filter smooths the pulsed current draw. (b) A bigger motor does not fix harmonics. (c) A longer cable makes the problem worse. (d) The DC bus is essential to the drive."
    },
    {
      "q": "A motor running very slowly on a VFD for long periods needs:",
      "choices": ["A standard motor, which is fine at any speed", "An inverter-duty motor with better insulation and separate cooling", "A smaller breaker", "No cooling at all"],
      "answer": 1,
      "explanation": "Correct: (b). Slow running means poor shaft-fan cooling and extra PWM losses. (a) A standard motor overheats at low speed. (c) Breaker size does not fix cooling. (d) Motors always need cooling."
    },
    {
      "q": "Bearing currents in a VFD-driven motor are caused by:",
      "choices": ["The fast voltage pulses of the PWM waveform driving current through the bearings", "Too much grease", "A worn shaft", "The wrong motor frame"],
      "answer": 0,
      "explanation": "Correct: (a). The PWM pulses can drive current through the bearings, pitting them. (b) Grease does not cause bearing currents. (c) A worn shaft is a result, not the cause. (d) Frame size is irrelevant."
    },
    {
      "q": "A soft starter differs from a VFD in that the soft starter:",
      "choices": ["Controls the motor's running speed", "Only controls the start and then bypasses itself", "Is more expensive than a VFD", "Has no electronics"],
      "answer": 1,
      "explanation": "Correct: (b). A soft starter ramps voltage to start, then the bypass contactor takes over. (a) Speed control is the VFD's job. (c) A soft starter is cheaper than a VFD. (d) Soft starters are electronic."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Variable Frequency Drives (VFD) Basics: Quick Reference</h3>\n<p><strong>Core idea:</strong> A VFD changes frequency to change speed (Ns = 120f/P) and changes voltage with it to hold the V/Hz ratio constant.</p>\n<p><strong>Three stages:</strong> Rectifier (AC→DC) · DC bus (capacitors smooth the DC) · Inverter (IGBTs build new AC at the set frequency, PWM).</p>\n<p><strong>Energy:</strong> Fan/pump power follows the cube law — half speed ≈ one-eighth power, 80% speed ≈ half power.</p>\n<p><strong>Issues:</strong> Harmonics (line reactor/filter) · Low-speed heating (inverter-duty motor) · Bearing currents (shaft grounding, output filter).</p>\n<p><strong>Setup:</strong> Enter the motor nameplate data; set accel/decel times and min/max frequency. A VFD controls speed; a soft starter only controls the start.</p>\n<p><strong>Self-check:</strong> Explain the three stages and the cube law. If you can, you have this module.</p>\n"
};
