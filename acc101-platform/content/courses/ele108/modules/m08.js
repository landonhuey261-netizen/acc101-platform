// ele108 - Module 8: Motor Starters: Across-the-Line, Reduced-Voltage, Soft Start
module.exports = {
  "number": 8,
  "slug": "motor-starters-across-line-reduced-voltage-soft-start",
  "title": "Motor Starters: Across-the-Line, Reduced-Voltage, Soft Start",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain across-the-line starting and when it is used.",
    "Describe star-delta starting and how it cuts starting current and torque.",
    "Describe autotransformer starting and its tap settings.",
    "Describe part-winding and primary-resistance starting.",
    "Explain how a soft starter ramps voltage and limits current."
  ],
  "sections": [
    {
      "heading": "Across-the-Line Starting: Full Voltage, Full Current",
      "html": "<p><strong>Across-the-line (ATL) starting</strong> connects the motor straight to the full supply voltage through a contactor — the starter in Modules 2 and 4. It is the simplest, cheapest, and most common starting method, and it gives the motor its full starting torque. Its cost is the full locked-rotor current, five to eight times the full-load current, for the first few seconds. On a strong supply with a small motor, nobody notices. On a weak supply, or with a large motor, the voltage dip from that inrush can dim lights, drop out other contactors, and disturb sensitive equipment — and the mechanical shock of full-torque starting can stress belts, gears, and couplings.</p>\n<p>Whether ATL starting is acceptable is a supply question, not a motor question. The utility or the plant engineer sets a limit — often based on the motor's size relative to the service or transformer size — and motors above that limit need a reduced-voltage starter. A common rule of thumb is that ATL starting is fine when the motor is small relative to the supply, and reduced-voltage starting is needed when the starting current would cause an objectionable voltage dip. The NEC does not ban ATL starting; it requires the starting method to be suitable for the motor and the supply (Article 430, Part VII covers motor controllers generally).</p>\n<div class=\"callout\"><strong>Key idea:</strong> Across-the-line is the default — full voltage, full torque, full inrush current. Reduced-voltage starting exists for the cases where that inrush is a problem for the supply or the machine.</div>"
    },
    {
      "heading": "Star-Delta Starting: One-Third the Current, One-Third the Torque",
      "html": "<p><strong>Star-delta (wye-delta) starting</strong> is the classic reduced-voltage method for motors built for it. The motor is started with its windings connected in star (wye), which puts only 58% of the line voltage (1/√3) across each winding. Starting current and starting torque both fall to about one-third of their across-the-line values. After a timed delay — a few seconds, set by a timer — the starter switches the windings to delta, giving each winding the full line voltage for normal running. The switch from star to delta is the critical moment: it must happen after the motor has nearly reached speed, or the motor will draw a second surge as it accelerates from a slow speed in delta.</p>\n<p>Star-delta starting only works on motors that are designed for delta running at the supply voltage — the nameplate must show the delta voltage matching the supply — and it only suits loads that need little torque to start, such as fans, pumps, and unloaded conveyors. A loaded conveyor or a crusher that needs full torque to break away will stall in star and never reach the speed where the switch to delta helps. The starter itself has three contactors (main, star, and delta) and a timer, and its interlocks must prevent the star and delta contactors from ever closing at the same time.</p>"
    },
    {
      "heading": "Autotransformer, Part-Winding & Primary-Resistance Starting",
      "html": "<p>An <strong>autotransformer starter</strong> puts an autotransformer between the supply and the motor during starting, with taps (commonly 50%, 65%, and 80%) that set the starting voltage. At the 65% tap, the motor sees 65% voltage, draws about 42% of its ATL starting current from the line, and makes about 42% of its ATL starting torque. After a timed delay, the autotransformer is switched out and the motor runs across the line. Autotransformer starting gives more torque than star-delta at the same line current, which makes it the choice for heavier starting loads — but the autotransformer is large, expensive, and only rated for short duty, so it must not be left in the circuit.</p>\n<p><strong>Part-winding starting</strong> is for motors built with two parallel windings: the starter energizes one winding first, then the second a second or two later, cutting the starting current roughly in half. <strong>Primary-resistance (or primary-reactor) starting</strong> puts resistors or reactors in series with the motor during starting and shorts them out after a delay; it is simple and smooth but wastes energy as heat in the resistors. Both methods are less common today than they were, because the soft starter (below) does the same job better — but you will still find them in older plants, and a technician must recognize them.</p>"
    },
    {
      "heading": "Soft Starters: A Smooth Electronic Ramp",
      "html": "<p>A <strong>soft starter</strong> is an electronic device that ramps the motor voltage up smoothly from a set starting level to full voltage over a set time, usually a few seconds. It uses thyristors (SCRs) to chop the AC waveform, controlling how much voltage reaches the motor at each moment. The result is a smooth acceleration with no torque shock and a starting current limited to a set value — typically two to four times full-load current instead of six to eight. When the motor reaches full speed, a bypass contactor closes and takes the soft starter out of the circuit, so it does not waste energy or generate heat during normal running.</p>\n<p>Soft starters also provide the protection that used to need separate devices: adjustable current limiting, overload protection, phase-loss detection, and sometimes a gentle ramp-down that stops a pump without water hammer. They do not control speed — a soft starter is not a variable frequency drive (Module 9), and once the motor is up to speed it runs at full speed on the line frequency. The choice between a soft starter and a VFD is a choice between starting control and speed control: if the motor only needs a gentle start, the soft starter is cheaper and simpler; if the speed must vary, the VFD is the tool.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Calling a soft starter a VFD. A soft starter ramps voltage to start the motor and then bypasses itself; it cannot vary the running speed. A VFD controls speed continuously. They are different devices for different jobs.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Across-the-line: full voltage, full torque, 5–8× inrush. The default method; use it unless the supply or the machine objects.</li>\n<li>Star-delta: start in star (58% voltage), switch to delta after a timed delay. Current and torque fall to about one-third. Only for motors designed for delta running and loads that start easily.</li>\n<li>Autotransformer: taps at 50%, 65%, 80% set the starting voltage; more torque than star-delta at the same line current, but large and expensive.</li>\n<li>Part-winding: two windings energized in steps. Primary-resistance: resistors in series during starting, shorted out after a delay.</li>\n<li>Soft starter: electronic voltage ramp, current limited to 2–4× FLA, bypass contactor at full speed. Starts gently; does not control running speed.</li>\n<li>Choose by the load's starting torque, the supply's tolerance for inrush, and whether speed must vary.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Using star-delta starting on a load that needs full torque to break away. The motor will stall in star, draw current, and never reach the speed where the switch to delta helps.</div>\n<p><strong>Ready-to-Work link:</strong> If you can compare the five starting methods and pick the right one for a fan versus a loaded conveyor, you have this module. Module 9 covers variable frequency drives.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Across-the-line (ATL) starting", "def": "Connecting a motor straight to full supply voltage; full torque and full inrush current." },
    { "term": "Reduced-voltage starting", "def": "Starting a motor at less than full voltage to limit inrush current and torque shock." },
    { "term": "Star-delta starting", "def": "Starting a motor with windings in star (58% voltage), then switching to delta for running." },
    { "term": "Autotransformer starter", "def": "A starter that uses an autotransformer with taps (50%, 65%, 80%) to set the starting voltage." },
    { "term": "Part-winding starting", "def": "Starting a dual-winding motor by energizing one winding first, then the second." },
    { "term": "Primary-resistance starting", "def": "Starting with resistors in series with the motor, shorted out after a delay." },
    { "term": "Soft starter", "def": "An electronic device that ramps motor voltage up smoothly and limits starting current, then bypasses itself." },
    { "term": "Thyristor (SCR)", "def": "An electronic switch used in a soft starter to control how much voltage reaches the motor." },
    { "term": "Bypass contactor", "def": "A contactor that takes a soft starter out of the circuit once the motor is at full speed." },
    { "term": "Voltage dip", "def": "The drop in supply voltage caused by a large starting current." },
    { "term": "Torque shock", "def": "The mechanical stress of full-torque starting on belts, gears, and couplings." },
    { "term": "Starting torque", "def": "The torque a motor produces at zero speed under a given starting method." },
    { "term": "Water hammer", "def": "The pressure surge in a pipe when a pump stops suddenly; a soft ramp-down prevents it." },
    { "term": "Short duty", "def": "A rating for equipment meant to carry current only briefly, such as a starting autotransformer." }
  ],
  "video": {
    "title": "Star Delta Starter Explained - Working Principle",
    "embedUrl": "https://www.youtube.com/embed/h89TTwlNnpY",
    "note": "A clear explanation of star-delta starting — why the star connection cuts the voltage to 58%, why current and torque fall to one-third, and when the timer switches the motor to delta.",
    "more": [
      { "title": "Motor Starters, Soft Starters, and VFD's", "url": "https://www.youtube.com/watch?v=CVYkilD7fm0" },
      { "title": "Autotransformer Reduced Voltage Starters", "url": "https://www.youtube.com/watch?v=qh_JdVUDkNM" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 10 hp motor has an across-the-line starting current of 84 A. If it is started star-delta, about what starting current and starting torque should you expect?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Star-delta cuts both to about one-third. Step 2: Current ≈ 84 / 3 = 28 A. Step 3: Torque ≈ one-third of the across-the-line starting torque — which is why star-delta only suits loads that start easily.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A fan motor is started across the line and the lights in the building dim badly on every start. Which starting method would fix this, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A reduced-voltage method — star-delta or a soft starter. Step 2: Both cut the starting current to about one-third, so the voltage dip on the supply is much smaller. Step 3: A fan needs little starting torque, so star-delta is a good fit; a soft starter is the smoother modern choice.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> An autotransformer starter is set to the 65% tap. What percentage of across-the-line starting current does the motor draw from the line, and what percentage of starting torque does it make?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Line current is about the square of the voltage ratio: 0.65² = 0.42, or about 42%. Step 2: Torque is also about the square of the voltage ratio: about 42% of across-the-line starting torque. Step 3: The autotransformer gives more torque than star-delta at the same line current.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A loaded conveyor needs nearly full torque to break away. Can it be started star-delta? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No. Step 2: Star-delta gives only about one-third of the across-the-line starting torque. Step 3: The conveyor would stall in star and never reach the speed where the switch to delta helps — use across-the-line, autotransformer, or a soft starter instead.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A pump must start gently to avoid water hammer when it stops. Which device fits, and what feature of it helps?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A soft starter. Step 2: It ramps the voltage up smoothly on starting and can ramp it down gently on stopping. Step 3: The gentle ramp-down stops the pump without the sudden pressure surge that causes water hammer.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A motor's speed must vary continuously to match a changing process demand. Is a soft starter the right device? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No. Step 2: A soft starter only controls the start; once the motor is up to speed it runs at full speed on the line frequency. Step 3: Continuous speed variation needs a variable frequency drive (Module 9).</p>"
    }
  ],
  "quiz": [
    {
      "q": "Across-the-line starting gives the motor:",
      "choices": ["Reduced voltage and reduced torque", "Full voltage, full torque, and full inrush current", "Variable speed", "No starting current"],
      "answer": 1,
      "explanation": "Correct: (b). ATL connects the motor straight to full voltage. (a) That is reduced-voltage starting. (c) Speed control needs a VFD. (d) Starting current is at its highest with ATL."
    },
    {
      "q": "Star-delta starting reduces starting current and starting torque to about:",
      "choices": ["One-half", "One-third", "One-tenth", "Two-thirds"],
      "answer": 1,
      "explanation": "Correct: (b). Both fall to about one-third in star. (a) One-half is the part-winding reduction. (c) One-tenth is far too much. (d) Two-thirds is not the star-delta reduction."
    },
    {
      "q": "In star connection, each winding sees what share of the line voltage?",
      "choices": ["100%", "58% (1/√3)", "33%", "150%"],
      "answer": 1,
      "explanation": "Correct: (b). Star puts 1/√3 = 58% of line voltage across each winding. (a) 100% is the delta connection. (c) 33% is the torque and current reduction, not the voltage. (d) 150% is impossible."
    },
    {
      "q": "An autotransformer starter set to the 65% tap gives about what starting torque?",
      "choices": ["65% of across-the-line torque", "42% of across-the-line torque", "100% of across-the-line torque", "10% of across-the-line torque"],
      "answer": 1,
      "explanation": "Correct: (b). Torque follows the square of the voltage: 0.65² = 0.42. (a) 65% is the voltage, not the torque. (c) Full torque needs full voltage. (d) 10% is far too low."
    },
    {
      "q": "A soft starter differs from a VFD in that it:",
      "choices": ["Controls the motor's running speed", "Only controls the start; the motor runs at full speed once started", "Uses no electronics", "Cannot limit starting current"],
      "answer": 1,
      "explanation": "Correct: (b). A soft starter ramps voltage to start, then bypasses itself. (a) Speed control is the VFD's job. (c) Soft starters are electronic. (d) Limiting starting current is the soft starter's main job."
    },
    {
      "q": "The bypass contactor in a soft starter:",
      "choices": ["Starts the motor", "Takes the soft starter out of the circuit once the motor is at full speed", "Reverses the motor", "Measures the current"],
      "answer": 1,
      "explanation": "Correct: (b). The bypass contactor carries the running current so the soft starter does not waste energy or overheat. (a) The soft starter starts the motor. (c) Reversing needs a reversing starter. (d) Current is measured by the soft starter's sensors."
    },
    {
      "q": "Star-delta starting is NOT suitable for:",
      "choices": ["Fans", "Pumps", "A loaded conveyor that needs full torque to break away", "Unloaded conveyors"],
      "answer": 2,
      "explanation": "Correct: (c). A loaded conveyor stalls in star at one-third torque. (a) Fans start easily and suit star-delta. (b) Pumps start easily and suit star-delta. (d) Unloaded conveyors suit star-delta."
    },
    {
      "q": "Part-winding starting works by:",
      "choices": ["Energizing one of two parallel windings first, then the second", "Reversing the motor", "Adding a capacitor", "Changing the frequency"],
      "answer": 0,
      "explanation": "Correct: (a). Two windings are energized in steps, cutting starting current roughly in half. (b) Reversing is a different starter. (c) Capacitors are for single-phase motors. (d) Frequency change is a VFD function."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Motor Starters: Quick Reference</h3>\n<p><strong>Core idea:</strong> Across-the-line is the default — full voltage, full torque, 5–8× inrush. Reduced-voltage methods exist for supplies and machines that cannot take the inrush.</p>\n<p><strong>Star-delta:</strong> Start in star (58% voltage), switch to delta after a timed delay. Current and torque ≈ one-third. Only for delta-rated motors and easy-starting loads.</p>\n<p><strong>Autotransformer:</strong> Taps at 50%, 65%, 80%. Torque and line current ≈ (tap)² — 65% tap gives about 42% torque.</p>\n<p><strong>Soft starter:</strong> Electronic voltage ramp, current limited to 2–4× FLA, bypass contactor at full speed. Starts gently; does not control running speed.</p>\n<p><strong>Part-winding:</strong> Two windings energized in steps. <strong>Primary-resistance:</strong> Resistors in series during starting.</p>\n<p><strong>Self-check:</strong> Compare the five starting methods and pick the right one for a fan vs a loaded conveyor. If you can, you have this module.</p>\n"
};
