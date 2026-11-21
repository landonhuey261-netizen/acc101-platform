// ele107 - Module 9: Generators & Alternators
module.exports = {
  "number": 9,
  "slug": "generators-alternators",
  "title": "Generators & Alternators",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how a generator converts mechanical energy into electrical energy.",
    "Describe the parts of an alternator: rotor, stator, exciter, and voltage regulator.",
    "Calculate generator frequency from speed and pole count.",
    "Compare synchronous generators, induction generators, and DC generators.",
    "Explain voltage regulation and the role of the automatic voltage regulator (AVR)."
  ],
  "sections": [
    {
      "heading": "A Motor in Reverse: How Generators Work",
      "html": "<p>A generator is a motor run backwards — instead of electricity making motion, motion makes electricity. Spin a conductor through a magnetic field and a voltage is induced in it (Faraday's law, from Module 1). Spin a coil inside a magnetic field, or spin a magnetic field past a stationary coil, and you get alternating current out. Every power plant, every portable generator, and every car alternator works this way: something mechanical turns a shaft — an engine, a turbine, a water wheel — and the generator turns that rotation into electricity.</p>\n<p>The amount of voltage depends on three things: how strong the magnetic field is, how fast the conductor cuts through it, and how many conductors there are. That is why generator voltage is controlled by adjusting the field strength (the excitation) and why frequency is set by the speed of rotation. A generator that spins too slowly makes low-frequency power; a generator whose field is too weak makes low-voltage power. The controls of a generator are really just ways of holding speed and field strength steady under a changing load.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Motors turn electricity into motion; generators turn motion into electricity. Same physics, opposite direction — which is why the two machines look so much alike inside.</div>"
    },
    {
      "heading": "The Alternator: Rotor, Stator, Exciter & AVR",
      "html": "<p>The modern AC generator is called an <strong>alternator</strong>. Its <strong>rotor</strong> is an electromagnet — a field winding on the shaft — and its <strong>stator</strong> is a stationary set of windings in which the output voltage is induced. The rotating field sweeps past the stator windings and generates the output, which is why the heavy output current never has to pass through slip rings or brushes. The field winding gets its DC from the <strong>exciter</strong>, a small generator on the same shaft, and the <strong>automatic voltage regulator (AVR)</strong> watches the output voltage and adjusts the exciter current to hold the voltage steady as the load changes.</p>\n<p>The <strong>frequency</strong> of the output is set by the speed and the pole count, with the same formula as a motor run in reverse: f = (P × N) / 120, where P is the number of poles and N is the speed in rpm. A 4-pole alternator must spin at 1,800 rpm to make 60 Hz; a 2-pole alternator must spin at 3,600 rpm. That is why small portable generators scream at 3,600 rpm while large standby generators rumble along at 1,800 rpm — the slower machine lasts longer and runs quieter, which is why standby units are usually 4-pole.</p>"
    },
    {
      "heading": "Types: Synchronous, Induction & DC Generators",
      "html": "<p>The <strong>synchronous generator</strong> is the standard: its output frequency is locked to its speed, and the AVR holds its voltage steady. It is what powers the grid, standby systems, and portable generators. An <strong>induction generator</strong> is an induction motor driven above synchronous speed — the rotor spins faster than the field, and power flows out of the stator instead of into it. It needs an external source of reactive power to excite it, so it is used mainly in small wind and hydro installations connected to the grid, not as a standalone source. A <strong>DC generator</strong> is a DC motor with a commutator, run in reverse; it is mostly a historical machine now, replaced by alternators with rectifiers wherever DC is needed.</p>\n<p>Generator ratings need care because two numbers describe the same machine. The <strong>kVA rating</strong> is the apparent power the alternator can deliver; the <strong>kW rating</strong> is the real power, and the two are linked by the power factor (kW = kVA × PF). A generator rated 100 kVA at 0.8 power factor delivers 80 kW. Ratings also come in classes: a <strong>standby rating</strong> is for emergency use with varying loads and limited hours; a <strong>prime rating</strong> is for continuous use as the main source with varying loads; a <strong>continuous rating</strong> is for constant load, 24 hours a day. A standby-rated generator run continuously will overheat — the rating class is part of the specification, not marketing.</p>"
    },
    {
      "heading": "Voltage Regulation and Loading",
      "html": "<p>When a load is connected to a generator, the output voltage wants to droop: the load current creates its own magnetic field in the stator (armature reaction) that weakens the main field, and the stator windings drop voltage through their resistance and reactance. The AVR compensates by increasing the excitation, holding the terminal voltage within a few percent of its setting. A generator with poor regulation will dim lights and stall motors when a large load starts, because a motor starting across the line can draw five to eight times its running current and pull the generator voltage down hard.</p>\n<p>That is why generator sizing is not just about the running load — the <strong>starting load</strong> matters more. A 10 kW generator can run a 5 kW air conditioner, but it may not start it, because the compressor's starting surge can exceed the generator's capacity and collapse the voltage. Sizing a generator means adding up the running loads, then checking the largest motor's starting requirement against the generator's surge capacity, and checking the voltage dip against what the equipment can tolerate. When in doubt, the generator manufacturer's sizing guide — not a guess — decides the size.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Sizing a generator from the running watts alone and forgetting the starting surge. A generator that can run a load but cannot start it is useless — always check the largest motor's starting requirement.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>A generator turns motion into electricity by Faraday's law; voltage depends on field strength, speed, and conductor count.</li>\n<li>The alternator: rotating field (rotor), stationary output windings (stator), exciter, and AVR holding the voltage steady.</li>\n<li>Frequency: f = (P × N) / 120 — 4-pole machines run at 1,800 rpm for 60 Hz; 2-pole at 3,600 rpm.</li>\n<li>Synchronous generators are the standard; induction generators need grid excitation; DC generators are largely historical.</li>\n<li>Ratings: kW = kVA × power factor; standby, prime, and continuous ratings are different duty classes.</li>\n<li>Size from the starting load, not just the running load — motor starting surge can collapse generator voltage.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Running a standby-rated generator as a continuous prime-power source. The standby rating assumes limited hours and varying load — continuous use overheats it.</div>\n<p><strong>Ready-to-Work link:</strong> If you can work out the speed for 60 Hz at 4 poles, explain the AVR's job, and say why starting load matters more than running load, you have this module. Module 10 covers standby and emergency systems.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Generator", "def": "A machine that converts mechanical energy into electrical energy by electromagnetic induction." },
    { "term": "Alternator", "def": "An AC generator with a rotating field and stationary output windings." },
    { "term": "Rotor (generator)", "def": "The rotating field winding of an alternator, fed with DC from the exciter." },
    { "term": "Stator (generator)", "def": "The stationary windings of an alternator in which the output voltage is induced." },
    { "term": "Exciter", "def": "A small generator on the same shaft that supplies DC to the alternator's field winding." },
    { "term": "Automatic voltage regulator (AVR)", "def": "The control that adjusts excitation to hold the generator's output voltage steady." },
    { "term": "Synchronous generator", "def": "A generator whose output frequency is locked to its rotational speed." },
    { "term": "Induction generator", "def": "An induction motor driven above synchronous speed so it generates power; needs external excitation." },
    { "term": "kVA rating", "def": "A generator's apparent-power rating; kW = kVA × power factor." },
    { "term": "Standby rating", "def": "A generator rating for emergency use with varying loads and limited hours." },
    { "term": "Prime rating", "def": "A generator rating for continuous use as the main power source with varying loads." },
    { "term": "Continuous rating", "def": "A generator rating for constant load, 24 hours a day." },
    { "term": "Armature reaction", "def": "The load current's magnetic effect in the stator, which weakens the main field and drops the voltage." },
    { "term": "Voltage regulation", "def": "How much a generator's voltage changes from no load to full load; smaller is better." },
    { "term": "Starting load", "def": "The surge a motor draws when starting, which a generator must be able to supply without excessive voltage dip." }
  ],
  "video": {
    "title": "How Alternators Work - Automotive Electricity Generator",
    "embedUrl": "https://www.youtube.com/embed/jdSKlg80DjU",
    "note": "The Engineering Mindset explains the alternator — rotor, stator, exciter, and rectifier — with clear animations. Focus on how the rotating field induces voltage in the stationary windings.",
    "more": [
      { "title": "How does an Alternator Work ?", "url": "https://www.youtube.com/watch?v=tiKH48EMgKE" },
      { "title": "How Alternators Work | 3D Animation Explained", "url": "https://www.youtube.com/watch?v=b0Gp2fs1u_8" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> What speed must a 4-pole alternator run at to produce 60 Hz? What about a 2-pole alternator?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Use f = (P × N) / 120, so N = (120 × f) / P. Step 2: 4-pole: N = (120 × 60) / 4 = 1,800 rpm. Step 3: 2-pole: N = (120 × 60) / 2 = 3,600 rpm.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A generator is rated 100 kVA at 0.8 power factor. How many kW can it deliver?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: kW = kVA × PF. Step 2: 100 × 0.8 = 80 kW. Step 3: The alternator can carry 100 kVA of apparent power but only 80 kW of real power at that power factor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A generator's output voltage drops sharply when a large motor starts, and lights dim throughout the building. Explain what is happening.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The motor's starting current is 5–8 times its running current. Step 2: That surge loads the generator heavily; armature reaction weakens the field and stator impedance drops voltage. Step 3: The AVR tries to compensate, but the generator may be too small for the starting surge — the generator needs to be sized for starting load, not just running load.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A site needs power 24 hours a day as its only source, with a varying load. Which generator rating class fits: standby, prime, or continuous?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Prime rating. Step 2: Prime is for continuous use as the main source with varying loads. Step 3: Standby is for emergency use with limited hours, and continuous is for a constant load — neither fits a varying 24-hour load.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A 6-pole alternator is driven at 1,200 rpm. What frequency does it produce?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: f = (P × N) / 120. Step 2: f = (6 × 1,200) / 120 = 7,200 / 120 = 60 Hz. Step 3: A 6-pole machine at 1,200 rpm makes 60 Hz.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why does the output current of an alternator not pass through slip rings, and why is that an advantage?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: In an alternator the field rotates and the output windings are stationary, so the heavy output current is collected from fixed terminals. Step 2: Only the small DC field current passes through slip rings. Step 3: This removes the wear, sparking, and current limits that slip rings would impose on the full output current.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A generator converts:",
      "choices": [ "Electrical energy into motion", "Mechanical energy into electrical energy", "DC into AC without moving parts", "Heat directly into voltage" ],
      "answer": 1,
      "explanation": "Correct: (b). Motion in, electricity out. (a) That is a motor. (c) That is an inverter, not a generator. (d) That describes a thermocouple, not a generator."
    },
    {
      "q": "The AVR in an alternator:",
      "choices": [ "Sets the engine speed", "Adjusts the excitation to hold output voltage steady as load changes", "Changes the number of poles", "Rectifies the output to DC" ],
      "answer": 1,
      "explanation": "Correct: (b). The AVR controls field current to regulate voltage. (a) The governor sets engine speed. (c) Pole count is fixed by construction. (d) A rectifier makes DC; the AVR regulates AC voltage."
    },
    {
      "q": "A 4-pole alternator must run at what speed to produce 60 Hz?",
      "choices": [ "900 rpm", "1,200 rpm", "1,800 rpm", "3,600 rpm" ],
      "answer": 2,
      "explanation": "Correct: (c). N = (120 × 60) / 4 = 1,800 rpm. (a) 900 rpm is an 8-pole speed. (b) 1,200 rpm is a 6-pole speed. (d) 3,600 rpm is a 2-pole speed."
    },
    {
      "q": "In an alternator, the output voltage is induced in the:",
      "choices": [ "Rotor", "Stator", "Exciter", "Governor" ],
      "answer": 1,
      "explanation": "Correct: (b). The stator windings are stationary and the rotating field induces voltage in them. (a) The rotor carries the field. (c) The exciter supplies the field. (d) The governor controls engine speed."
    },
    {
      "q": "A generator rated 50 kVA at 0.8 power factor can deliver:",
      "choices": [ "50 kW", "40 kW", "62.5 kW", "80 kW" ],
      "answer": 1,
      "explanation": "Correct: (b). 50 × 0.8 = 40 kW. (a) 50 kW would require a power factor of 1.0. (c) and (d) are larger than the kVA rating, which is impossible."
    },
    {
      "q": "An induction generator differs from a synchronous generator in that it:",
      "choices": [ "Needs an external source of reactive power to excite it", "Has no rotor", "Produces DC directly", "Runs at exactly 3,600 rpm always" ],
      "answer": 0,
      "explanation": "Correct: (a). An induction generator cannot self-excite; it needs the grid or capacitors. (b) It has a rotor. (c) It produces AC. (d) Its speed depends on its pole count."
    },
    {
      "q": "The rating class for a generator used only during power outages, with varying loads and limited hours, is:",
      "choices": [ "Continuous", "Prime", "Standby", "Peak" ],
      "answer": 2,
      "explanation": "Correct: (c). Standby is the emergency-use rating. (a) Continuous is for constant 24-hour load. (b) Prime is for continuous use as the main source. (d) Peak is not a standard generator rating class."
    },
    {
      "q": "When a large motor starts on a small generator, the voltage dips mainly because:",
      "choices": [ "The motor's starting current heavily loads the generator and armature reaction weakens the field", "The generator runs out of fuel", "The AVR turns the generator off", "The frequency rises too high" ],
      "answer": 0,
      "explanation": "Correct: (a). The 5–8× starting surge loads the generator and weakens the field. (b) Fuel is not the cause of a voltage dip. (c) The AVR tries to raise voltage, not turn the unit off. (d) Frequency falls under load, it does not rise."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Generators &amp; Alternators: Quick Reference</h3>\n<p><strong>Core idea:</strong> Motion through a magnetic field makes electricity — a motor in reverse.</p>\n<p><strong>Alternator:</strong> Rotating field (rotor) · Stationary output windings (stator) · Exciter supplies field DC · AVR holds voltage steady.</p>\n<p><strong>Frequency:</strong> f = (P × N) / 120 — 1,800 rpm for 4-pole, 3,600 rpm for 2-pole at 60 Hz.</p>\n<p><strong>Ratings:</strong> kW = kVA × power factor. Standby (emergency, limited hours) · Prime (continuous main source, varying load) · Continuous (constant load).</p>\n<p><strong>Watch out:</strong> Size for the starting load, not just the running load — motor inrush can collapse generator voltage.</p>\n<p><strong>Self-check:</strong> Work out the speed for 60 Hz at 6 poles and explain the AVR's job. If you can, you have this module.</p>\n"
};
