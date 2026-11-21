// ele107 - Module 1: Magnetism & the Rotating Magnetic Field
module.exports = {
  "number": 1,
  "slug": "magnetism-rotating-magnetic-field",
  "title": "Magnetism & the Rotating Magnetic Field",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how current through a conductor creates a magnetic field and state the right-hand rule.",
    "Describe how a changing magnetic field induces voltage in a conductor (Faraday's law).",
    "Explain how three-phase currents 120 degrees apart create a rotating magnetic field.",
    "Calculate synchronous speed from frequency and pole count using Ns = 120f/P.",
    "Explain the difference between synchronous speed and rotor speed (slip)."
  ],
  "sections": [
    {
      "heading": "Magnetism from Current: The Right-Hand Rule",
      "html": "<p>Every electric motor is a magnetism machine. When current flows through a conductor, it creates a magnetic field around that conductor — invisible loops of force circling the wire. The <strong>right-hand rule</strong> tells you the direction: point your right thumb in the direction of the current, and your fingers curl in the direction of the magnetic field. Reverse the current, and the field reverses. Coil the wire into many turns and the fields add up, which is why motor windings are coils, not single straight wires.</p>\n<p>A coil wrapped around an iron core becomes an <strong>electromagnet</strong> — a magnet you can switch on, off, and reverse by controlling the current. Iron concentrates the field enormously compared with air, so motor cores are built from laminated steel. The laminations (thin sheets insulated from each other) matter: a solid iron core would waste energy as eddy currents, little circulating currents that heat the metal. Every motor you will meet in this course is built from electromagnets pulling on, pushing against, or inducing currents in other conductors.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Current makes magnetism, and magnetism makes motion. If you can picture the field around a wire and the field of a coil, you can picture how every motor in this course works.</div>"
    },
    {
      "heading": "Faraday's Law: A Changing Field Makes Voltage",
      "html": "<p>The second half of the motor story is <strong>Faraday's law</strong>: a changing magnetic field induces a voltage in a conductor. Move a magnet past a coil, or change the current in a nearby coil, and a voltage appears in the coil. That is how generators make electricity — and it is also how the rotor of an induction motor gets its current without any wires connected to it. The rotating field of the stator sweeps past the rotor bars, induces voltage in them, and the resulting rotor current creates its own magnetic field.</p>\n<p><strong>Lenz's law</strong> adds the direction: the induced current always acts to oppose the change that created it. In an induction motor, that opposition is exactly what produces torque — the rotor is pulled along, chasing the rotating field, trying to catch up with the change. The rotor never quite catches the field, and that difference is called <strong>slip</strong>. No slip means no relative motion between field and rotor, no induced voltage, and no torque. A little slip is not a defect; it is the price of torque.</p>"
    },
    {
      "heading": "Three Phases, 120 Degrees Apart",
      "html": "<p>A single-phase supply makes a magnetic field that pulses back and forth but does not rotate — that is why single-phase motors need a starting trick (Module 3). A three-phase supply is different: three currents, each reaching its peak one-third of a cycle after the previous one, 120 electrical degrees apart. Feed each phase to its own set of stator coils, spaced 120 degrees around the motor, and the point of strongest magnetism sweeps smoothly around the stator. The field rotates — at a speed set by the supply frequency and the number of poles.</p>\n<p>This rotating magnetic field is the heart of the three-phase induction motor, the workhorse of industry. There are no brushes, no commutator, and no electrical connection to the rotor at all. The stator field does all the work through induction, which is why these motors are rugged, cheap, and everywhere: pumps, fans, compressors, conveyors, and machine tools. Reversing the motor is simple too — swap any two of the three supply leads and the field rotates the other way.</p>"
    },
    {
      "heading": "Synchronous Speed and Slip",
      "html": "<p>The speed of the rotating field is the <strong>synchronous speed</strong>, and it comes from one formula you will use for the rest of your career: <strong>Ns = 120f / P</strong>, where f is the supply frequency in hertz and P is the number of poles. On a 60 Hz supply, a 2-pole motor's field spins at 3,600 rpm, a 4-pole at 1,800 rpm, and a 6-pole at 1,200 rpm. More poles means a slower field and a slower motor — pole count is how the motor's base speed is built in at the factory.</p>\n<p>The rotor always runs a little slower than the field. <strong>Slip</strong> is the difference, usually expressed as a percentage: slip = (Ns − Nr) / Ns × 100. A typical 4-pole motor with a nameplate speed of 1,750 rpm has a synchronous speed of 1,800 rpm and a slip of about 2.8%. Slip grows as load grows: the harder the motor works, the further behind the field it falls, the more voltage is induced in the rotor, and the more torque it makes. If you measure a motor running at exactly synchronous speed, it is not loaded — or it is not an induction motor.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Reading the nameplate rpm (for example, 1,750) as the field speed. The nameplate shows rotor speed under full load; the field speed is the round number (1,800) from Ns = 120f/P. Confusing the two makes every slip calculation wrong.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Current through a conductor makes a magnetic field; the right-hand rule gives its direction.</li>\n<li>Faraday's law: a changing magnetic field induces voltage; Lenz's law gives the direction of the induced current.</li>\n<li>Three-phase currents 120° apart, fed to coils 120° apart, make a magnetic field that rotates.</li>\n<li>Synchronous speed Ns = 120f/P: 3,600 rpm for 2 poles, 1,800 for 4 poles, 1,200 for 6 poles at 60 Hz.</li>\n<li>Slip is the gap between field speed and rotor speed — and it is what makes torque possible.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Thinking a single-phase field rotates. It pulses. Only a polyphase supply — or a starting winding that fakes a second phase — makes a truly rotating field.</div>\n<p><strong>Ready-to-Work link:</strong> If you can work out Ns for a 6-pole motor on 60 Hz and explain why the rotor can never catch the field, you have this module. Module 2 puts magnetism to work in DC motors.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Magnetic field", "def": "The region of force around a magnet or a current-carrying conductor." },
    { "term": "Right-hand rule", "def": "Thumb points with the current, fingers curl in the direction of the magnetic field around a conductor." },
    { "term": "Electromagnet", "def": "A coil of wire, usually on an iron core, that becomes a magnet when current flows through it." },
    { "term": "Faraday's law", "def": "A changing magnetic field induces a voltage in a conductor." },
    { "term": "Lenz's law", "def": "An induced current flows in the direction that opposes the change that created it." },
    { "term": "Rotating magnetic field", "def": "A magnetic field whose point of maximum strength sweeps around the stator, produced by polyphase currents." },
    { "term": "Stator", "def": "The stationary part of a motor, containing the windings that create the magnetic field." },
    { "term": "Rotor", "def": "The rotating part of a motor, mounted on the shaft." },
    { "term": "Synchronous speed (Ns)", "def": "The speed of the rotating magnetic field: Ns = 120f/P." },
    { "term": "Slip", "def": "The difference between synchronous speed and rotor speed, usually as a percentage." },
    { "term": "Poles", "def": "The magnetic north-south pairs formed by the stator windings; more poles means a slower motor." },
    { "term": "Eddy currents", "def": "Wasteful circulating currents induced in a solid iron core; reduced by laminating the core." },
    { "term": "Air gap", "def": "The small space between the stator and the rotor across which the magnetic field must act." },
    { "term": "Induction", "def": "Producing voltage or current in a conductor by a changing magnetic field, without a direct connection." },
    { "term": "Frequency", "def": "How many times per second an alternating current reverses; 60 Hz in North America." }
  ],
  "video": {
    "title": "How does an Induction Motor work how it works 3 phase motor ac motor",
    "embedUrl": "https://www.youtube.com/embed/N7TZ4gm3aUg",
    "note": "The Engineering Mindset walks through the rotating magnetic field step by step. Watch how the three phases take turns peaking, and notice how the field sweeps around the stator.",
    "more": [
      { "title": "How a 3 Phase Induction Motor Works", "url": "https://www.youtube.com/watch?v=AWnHG7KbJjA" },
      { "title": "How Does an AC Induction Motor Work? // HSC Physics", "url": "https://www.youtube.com/watch?v=KjWkYH8ghSg" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 4-pole motor runs on a 60 Hz supply. What is its synchronous speed?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Use Ns = 120f / P. Step 2: Ns = 120 × 60 / 4 = 7,200 / 4 = 1,800 rpm. Step 3: The field rotates at 1,800 rpm; the rotor will run slightly slower than this under load.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> What is the synchronous speed of a 6-pole motor on 60 Hz? What about a 2-pole motor?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 6-pole: Ns = 120 × 60 / 6 = 1,200 rpm. Step 2: 2-pole: Ns = 120 × 60 / 2 = 3,600 rpm. Step 3: More poles means a slower field — pole count sets the motor's base speed.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 4-pole motor's nameplate reads 1,740 rpm. What is its slip in rpm and as a percentage?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Synchronous speed is 1,800 rpm. Step 2: Slip in rpm = 1,800 − 1,740 = 60 rpm. Step 3: Slip % = 60 / 1,800 × 100 = 3.3%. Step 4: About 3% slip is normal for a loaded induction motor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Explain in your own words why an induction motor rotor can never run at synchronous speed.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Torque comes from voltage induced in the rotor by the field sweeping past it. Step 2: If the rotor ran at field speed, there would be no relative motion between field and rotor. Step 3: No relative motion means no induced voltage, no rotor current, and no torque — so the rotor must lag the field to keep turning.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> You swap two of the three supply leads to a three-phase motor. What happens, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The motor reverses direction. Step 2: Swapping two phases changes the order in which the three coils peak. Step 3: The rotating magnetic field now sweeps the other way around the stator, so the rotor follows it in the opposite direction.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A motor's rotor runs at 1,770 rpm on a 60 Hz supply. The field speed is 1,800 rpm. Is this motor lightly or heavily loaded, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Slip = 1,800 − 1,770 = 30 rpm, or 1.7%. Step 2: That is a small slip, below the typical full-load value of about 3–5%. Step 3: The motor is lightly loaded — more load would increase the slip as the rotor falls further behind the field.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The right-hand rule for a straight conductor says:",
      "choices": [ "The thumb points with the current and the fingers curl in the direction of the magnetic field", "The thumb points against the current and the fingers point at the north pole", "The fingers point with the current and the thumb points at the south pole", "The palm faces the wire and the thumb points up" ],
      "answer": 0,
      "explanation": "Correct: (a). Thumb with current, fingers curl with the field. (b) Reverses the thumb direction. (c) Swaps thumb and fingers. (d) Is not the right-hand rule for a conductor."
    },
    {
      "q": "Faraday's law states that a voltage is induced in a conductor when:",
      "choices": [ "The conductor is connected to a battery", "The magnetic field around it is changing", "The conductor is made of copper", "The conductor is at rest in a steady field" ],
      "answer": 1,
      "explanation": "Correct: (b). Only a changing field induces voltage. (a) A battery supplies voltage, it does not induce it. (c) The material does not matter to the law. (d) A steady field with no motion induces nothing."
    },
    {
      "q": "A rotating magnetic field in a three-phase motor is produced because:",
      "choices": [ "The three currents peak at different times, 120 degrees apart", "The motor has three rotors", "The supply voltage is three times higher", "The windings are wound in reverse" ],
      "answer": 0,
      "explanation": "Correct: (a). The 120-degree timing plus the 120-degree coil spacing sweeps the field around. (b) A motor has one rotor. (c) Voltage level does not create rotation. (d) Reversed windings do not make a rotating field."
    },
    {
      "q": "The synchronous speed of a 2-pole motor on 60 Hz is:",
      "choices": [ "1,200 rpm", "1,800 rpm", "3,600 rpm", "7,200 rpm" ],
      "answer": 2,
      "explanation": "Correct: (c). Ns = 120 × 60 / 2 = 3,600 rpm. (a) Is the 6-pole speed. (b) Is the 4-pole speed. (d) Is 120 × 60 with no pole division."
    },
    {
      "q": "Slip in an induction motor is:",
      "choices": [ "The gap between the stator and the rotor", "The difference between synchronous speed and rotor speed", "The looseness of the motor bearings", "The drop in supply voltage under load" ],
      "answer": 1,
      "explanation": "Correct: (b). Slip is the speed difference between field and rotor. (a) That gap is the air gap. (c) Bearing looseness is a mechanical fault. (d) Voltage drop is a supply issue, not slip."
    },
    {
      "q": "If an induction motor's rotor ran at exactly synchronous speed, torque would be:",
      "choices": [ "At its maximum", "Zero, because no voltage would be induced in the rotor", "Doubled", "The same as at full load" ],
      "answer": 1,
      "explanation": "Correct: (b). No relative motion means no induced voltage and no torque. (a) Maximum torque needs slip. (c) Torque cannot double at zero slip. (d) Full-load torque needs several percent slip."
    },
    {
      "q": "Laminated steel is used for motor cores mainly to:",
      "choices": [ "Make the motor lighter", "Reduce eddy-current losses", "Increase the air gap", "Insulate the windings from the frame" ],
      "answer": 1,
      "explanation": "Correct: (b). Laminations break up the paths of eddy currents, cutting heat loss. (a) Laminations do not save much weight. (c) The air gap is set by the machining, not the laminations. (d) Winding insulation is a separate material."
    },
    {
      "q": "To reverse a three-phase induction motor you:",
      "choices": [ "Swap any two of the three supply leads", "Swap the ground wire with a phase wire", "Increase the supply frequency", "Add a capacitor to the rotor" ],
      "answer": 0,
      "explanation": "Correct: (a). Swapping two phases reverses the field rotation. (b) Swapping ground with a phase is dangerous and does not reverse the motor. (c) Frequency changes speed, not direction. (d) The rotor has no capacitor to add."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — Magnetism &amp; the Rotating Magnetic Field: Quick Reference</h3>\n<p><strong>Core idea:</strong> Current makes magnetism; a changing magnetic field makes voltage; three phases 120° apart make the field rotate.</p>\n<p><strong>Right-hand rule:</strong> Thumb with current, fingers curl with the field.</p>\n<p><strong>Faraday:</strong> Changing field induces voltage. <strong>Lenz:</strong> Induced current opposes the change.</p>\n<p><strong>Synchronous speed:</strong> Ns = 120f / P — 3,600 (2-pole), 1,800 (4-pole), 1,200 (6-pole) rpm at 60 Hz.</p>\n<p><strong>Slip:</strong> (Ns − Nr) / Ns × 100 — typically 2–5% at full load; zero slip means zero torque.</p>\n<p><strong>Watch out:</strong> The nameplate rpm is rotor speed, not field speed; single-phase fields pulse, they do not rotate.</p>\n<p><strong>Self-check:</strong> Work out Ns for a 6-pole motor and the slip of a 1,750 rpm 4-pole motor without looking. If you can, you have this module.</p>\n"
};
