// ele107 - Module 12: Efficiency, Power Factor & Motor Selection
module.exports = {
  "number": 12,
  "slug": "efficiency-power-factor-motor-selection",
  "title": "Efficiency, Power Factor & Motor Selection",
  "estTime": "3–4 hours",
  "objectives": [
    "Define motor efficiency and explain where the losses go.",
    "Explain power factor, the power triangle, and why a low power factor costs money.",
    "Calculate the capacitor size needed for power factor correction.",
    "Compare standard-efficiency and premium-efficiency (NEMA Premium) motors.",
    "Select a motor for a job: horsepower, speed, enclosure, frame, design letter, and duty."
  ],
  "sections": [
    {
      "heading": "Efficiency: Where the Energy Goes",
      "html": "<p>A motor's <strong>efficiency</strong> is the output power divided by the input power — the share of the electricity that becomes useful shaft power instead of heat. The rest is lost in five places: copper loss in the stator and rotor windings, core loss in the steel, friction and windage in the bearings and fan, stray load loss from leakage fields, and (in brushed machines) brush loss. A typical modern induction motor is 85–95% efficient, and the losses grow with load — which is why a motor's efficiency is highest near its rated load and falls off when it is lightly loaded.</p>\n<p>That last point is the key to real-world savings: a motor that is oversized for its load spends its life running lightly loaded, where its efficiency is poor and its power factor is worse. The old habit of \"buying the next size up just in case\" wastes energy for the entire life of the machine. The right size is the size the load actually needs, with a modest margin — not double the load. Premium-efficiency motors (NEMA Premium) use more copper, better steel, and tighter manufacturing to cut the losses further, and they pay for their higher price in energy savings, especially on motors that run many hours a day.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Efficiency peaks near rated load. An oversized motor is not a safe choice — it is a wasteful one that runs inefficiently for its whole life.</div>"
    },
    {
      "heading": "Power Factor: The Power Triangle",
      "html": "<p>Not all the current a motor draws does useful work. The <strong>power triangle</strong> has three sides: <strong>real power (kW)</strong>, which does the work; <strong>reactive power (kVAR)</strong>, which builds the magnetic fields and flows back and forth without doing work; and <strong>apparent power (kVA)</strong>, the combination the supply must deliver. <strong>Power factor</strong> is real power divided by apparent power (kW/kVA), and it tells you how much of the delivered power is useful. An induction motor at full load has a power factor around 0.85; the same motor at half load may be at 0.7 or lower, because the magnetizing current stays nearly constant while the working current falls.</p>\n<p>A low power factor costs money three ways: the supply must carry more current for the same work, which means bigger conductors and transformers; the extra current makes extra I²R losses; and many utilities charge a penalty when a facility's power factor falls below a set value (often 0.9 or 0.95). A plant full of lightly loaded motors is a plant paying for current that does no work — and the fix is either to load the motors properly or to correct the power factor.</p>"
    },
    {
      "heading": "Power Factor Correction with Capacitors",
      "html": "<p><strong>Power factor correction</strong> adds capacitors to cancel the motor's inductive reactive power. A capacitor draws a leading current that is the mirror image of the motor's lagging magnetizing current, so the two cancel at the supply and the utility sees a power factor close to 1.0. The capacitor size is chosen from the motor's reactive power: for a motor drawing P kW at power factor PF1, corrected to PF2, the capacitor kVAR is P × (tan θ1 − tan θ2), where θ is the angle whose cosine is the power factor. In practice, the capacitor is sized from a table or the motor manufacturer's data, and it is connected at the motor starter so it switches with the motor.</p>\n<p>Correction has limits. Overcorrecting — adding more capacitance than the motor needs — pushes the power factor leading, which can cause overvoltage when the motor is switched off, because the capacitor and the motor's inductance can resonate and pump the voltage up. Capacitors are therefore sized to bring the power factor to about 0.95, not to 1.0, and they are never left connected to a motor that is not running. On a plant scale, a central capacitor bank at the service does the same job for the whole building, with automatic switching that adds or removes steps as the load changes.</p>"
    },
    {
      "heading": "Selecting the Right Motor",
      "html": "<p>Motor selection is a checklist, and every item on it comes from earlier modules in this course. <strong>Horsepower:</strong> match the load's requirement, with a modest margin — not double. <strong>Speed:</strong> the pole count that gives the needed rpm (1,800 for most pumps and fans). <strong>Voltage and phase:</strong> match the supply. <strong>Enclosure:</strong> ODP indoors and clean, TEFC outdoors or dusty, explosion-proof in hazardous locations. <strong>Frame:</strong> must match the mounting. <strong>Design letter:</strong> B for general purpose, C for hard-to-start loads, D for shock loads. <strong>Duty:</strong> continuous for a pump that runs all day, intermittent for a hoist. <strong>Efficiency:</strong> NEMA Premium where the motor runs long hours.</p>\n<p>The last step is the money: the purchase price of a motor is a small share of what it costs to own. A 10 hp motor running 8,000 hours a year at 10 cents per kWh uses about $6,400 of electricity a year — many times its purchase price over its life. A premium-efficiency motor that costs $200 more and saves 3% of that energy pays for itself in a little over a year. When you present a motor choice, present the lifetime cost, not just the price tag — that is the argument that wins the premium motor, and it is the argument the customer remembers.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Choosing a motor on purchase price alone. The electricity it uses over its life dwarfs the price tag — a 3% efficiency gain on a motor that runs all day pays for itself many times over.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Efficiency = output / input; losses are copper, core, friction and windage, and stray load loss. Efficiency peaks near rated load.</li>\n<li>Power factor = kW / kVA. Induction motors run about 0.85 at full load and worse when lightly loaded.</li>\n<li>Low power factor means bigger conductors, more losses, and possible utility penalties.</li>\n<li>Capacitors correct power factor by canceling inductive reactive power; correct to about 0.95, never overcorrect, and switch the capacitor with the motor.</li>\n<li>Select by checklist: HP, speed, voltage, phase, enclosure, frame, design letter, duty, efficiency.</li>\n<li>Total cost of ownership: lifetime energy cost dwarfs the purchase price — premium efficiency pays for itself on long-running motors.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Oversizing a motor \"just in case.\" It runs lightly loaded, where both efficiency and power factor are at their worst — the safe choice is the right size, not the big size.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain the power triangle, size a correction capacitor, and run the lifetime-cost argument for a premium motor, you have this module — and this course. The midterm and final exams are next.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Efficiency", "def": "Output power divided by input power; the share of electricity that becomes useful shaft power." },
    { "term": "Real power (kW)", "def": "The power that does useful work in a circuit." },
    { "term": "Reactive power (kVAR)", "def": "The power that builds magnetic fields and flows back and forth without doing work." },
    { "term": "Apparent power (kVA)", "def": "The combination of real and reactive power that the supply must deliver." },
    { "term": "Power factor", "def": "Real power divided by apparent power (kW/kVA); a measure of how much delivered power is useful." },
    { "term": "Power triangle", "def": "The diagram relating kW, kVAR, and kVA; power factor is the cosine of the angle between kW and kVA." },
    { "term": "Power factor correction", "def": "Adding capacitors to cancel a motor's inductive reactive power and raise the power factor." },
    { "term": "NEMA Premium", "def": "The highest standard efficiency class for induction motors, with lower losses than standard-efficiency motors." },
    { "term": "Copper loss", "def": "Heat lost in the windings (I²R); one of the main motor losses." },
    { "term": "Core loss", "def": "Hysteresis and eddy-current loss in the motor's steel." },
    { "term": "Friction and windage", "def": "Losses from bearing friction and the cooling fan's air drag." },
    { "term": "Total cost of ownership", "def": "Purchase price plus lifetime energy and maintenance costs — energy dominates for motors." },
    { "term": "Leading power factor", "def": "A power factor in which current leads voltage, caused by overcorrecting with too much capacitance." },
    { "term": "Lagging power factor", "def": "A power factor in which current lags voltage, caused by inductive loads such as motors." }
  ],
  "video": {
    "title": "Power Factor Explained - The basics what is power factor pf",
    "embedUrl": "https://www.youtube.com/embed/Tv_7XWf96gg",
    "note": "The Engineering Mindset explains the power triangle — real, reactive, and apparent power — with the beer-glass analogy and the math behind it. Follow the triangle and the power factor formula.",
    "more": [
      { "title": "MOTOR EFFICIENCY: What about the power factor?", "url": "https://www.youtube.com/watch?v=rdJlKfBNwa8" },
      { "title": "Power Factor Correction Demonstration", "url": "https://www.youtube.com/watch?v=maC5wVh7da8" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A motor draws 10 kW of real power and 12 kVA of apparent power. What is its power factor?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: PF = kW / kVA. Step 2: PF = 10 / 12 = 0.83. Step 3: About 83% of the delivered power does useful work; the rest is reactive power building the magnetic field.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A motor delivers 7.5 kW of shaft power and draws 8.8 kW of electrical power. What is its efficiency?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Efficiency = output / input. Step 2: 7.5 / 8.8 = 0.852, or 85.2%. Step 3: The remaining 14.8% is lost as heat in the windings, the core, and friction.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 10 hp motor runs 8,000 hours a year. Its input power is 8 kW and electricity costs $0.10 per kWh. What is its annual energy cost?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Energy per year = 8 kW × 8,000 h = 64,000 kWh. Step 2: Cost = 64,000 × $0.10 = $6,400 per year. Step 3: The energy cost in one year is many times the motor's purchase price — efficiency matters.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> The motor in Problem 3 is replaced with a premium-efficiency motor that draws 7.7 kW for the same output. How much does it save per year, and how long does it take to pay back a $300 price premium?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Savings = (8.0 − 7.7) kW × 8,000 h × $0.10 = 0.3 × 8,000 × 0.10 = $240 per year. Step 2: Payback = $300 / $240 per year = 1.25 years. Step 3: After about 15 months the premium motor is pure savings.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A plant's power factor is 0.75 and the utility penalizes anything below 0.90. Two fixes are proposed: replace oversized motors with right-sized ones, or add capacitors. Which should come first, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Right-size the motors first. Step 2: Oversized motors running lightly loaded are the cause of the low power factor — their magnetizing current stays high while their working current falls. Step 3: Fixing the cause improves both efficiency and power factor; capacitors then correct whatever lag remains.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A capacitor bank is sized to correct a motor's power factor all the way to 1.0. Why is this a bad idea?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Correcting to 1.0 leaves no margin, and any change in load pushes the power factor leading. Step 2: A leading power factor can cause overvoltage when the motor is switched off, as the capacitor and the motor's inductance resonate. Step 3: Correct to about 0.95 instead, and switch the capacitor with the motor.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Motor efficiency is defined as:",
      "choices": [ "Input power divided by output power", "Output power divided by input power", "Horsepower divided by voltage", "Current divided by voltage" ],
      "answer": 1,
      "explanation": "Correct: (b). Efficiency is useful output over electrical input. (a) That ratio is greater than one and is not efficiency. (c) Horsepower over voltage is not a defined quantity. (d) Current over voltage is conductance, not efficiency."
    },
    {
      "q": "Power factor is:",
      "choices": [ "kVA divided by kW", "kW divided by kVA", "kVAR divided by kW", "kW multiplied by kVA" ],
      "answer": 1,
      "explanation": "Correct: (b). PF = real power / apparent power. (a) That is the inverse. (c) That is the tangent of the power angle, not the power factor. (d) Multiplying the two has no meaning."
    },
    {
      "q": "An induction motor's power factor is worst when the motor is:",
      "choices": [ "At full load", "Lightly loaded", "Overloaded", "Stopped" ],
      "answer": 1,
      "explanation": "Correct: (b). Light loading leaves the magnetizing current high while the working current falls. (a) Full load is where power factor is best. (c) Overloading raises current but does not drop power factor as much. (d) A stopped motor draws no power."
    },
    {
      "q": "Power factor correction uses capacitors because they:",
      "choices": [ "Store real power for later", "Draw a leading current that cancels the motor's lagging magnetizing current", "Increase the motor's horsepower", "Reduce the supply voltage" ],
      "answer": 1,
      "explanation": "Correct: (b). The capacitor's leading current cancels the inductive lagging current. (a) Capacitors do not store real power for later use. (c) Capacitors do not change horsepower. (d) Correction does not reduce supply voltage."
    },
    {
      "q": "Power factor should be corrected to about:",
      "choices": [ "0.50", "0.75", "0.95", "1.50" ],
      "answer": 2,
      "explanation": "Correct: (c). About 0.95 leaves a margin against going leading. (a) and (b) are below most utility penalty thresholds. (d) A power factor above 1.0 is impossible."
    },
    {
      "q": "A NEMA Premium motor differs from a standard-efficiency motor in that it:",
      "choices": [ "Has lower losses from more copper, better steel, and tighter manufacturing", "Runs at a higher voltage", "Has no rotor", "Is always smaller" ],
      "answer": 0,
      "explanation": "Correct: (a). Premium motors cut losses with better materials and construction. (b) Voltage is set by the supply. (c) Premium motors have rotors. (d) Premium motors are often slightly larger, not smaller."
    },
    {
      "q": "The largest share of a motor's lifetime cost is usually:",
      "choices": [ "The purchase price", "The electricity it uses", "The paint", "The shipping" ],
      "answer": 1,
      "explanation": "Correct: (b). Energy cost over years of running dwarfs the purchase price. (a) Purchase price is a small share. (c) and (d) are trivial costs."
    },
    {
      "q": "An oversized motor is a poor choice mainly because:",
      "choices": [ "It costs less", "It runs lightly loaded, where efficiency and power factor are at their worst", "It starts too quickly", "It has no nameplate" ],
      "answer": 1,
      "explanation": "Correct: (b). Light loading wastes energy and worsens power factor for the motor's whole life. (a) Oversized motors cost more, not less. (c) Starting quickly is not a problem. (d) All motors have nameplates."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Efficiency, Power Factor &amp; Motor Selection: Quick Reference</h3>\n<p><strong>Core idea:</strong> Efficiency peaks near rated load; an oversized motor wastes energy for its whole life.</p>\n<p><strong>Power triangle:</strong> kW (real) · kVAR (reactive) · kVA (apparent). Power factor = kW / kVA, about 0.85 at full load, worse when lightly loaded.</p>\n<p><strong>Correction:</strong> Capacitors cancel inductive reactive power; correct to about 0.95, never overcorrect, switch the capacitor with the motor.</p>\n<p><strong>Selection checklist:</strong> HP · speed · voltage/phase · enclosure · frame · design letter · duty · efficiency.</p>\n<p><strong>Money:</strong> Lifetime energy cost dwarfs the purchase price — premium efficiency pays for itself on long-running motors.</p>\n<p><strong>Self-check:</strong> Explain the power triangle and run the lifetime-cost argument for a premium motor. If you can, you have this module and this course.</p>\n"
};
