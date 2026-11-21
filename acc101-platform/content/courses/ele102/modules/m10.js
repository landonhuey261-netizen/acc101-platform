// ele102 - Module 10: Magnetism & Electromagnetism Basics
module.exports = {
  "number": 10,
  "slug": "magnetism-and-electromagnetism-basics",
  "title": "Magnetism & Electromagnetism Basics",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe a magnetic field and the behavior of magnetic poles.",
    "Explain the left-hand and right-hand rules for magnetic fields around a conductor.",
    "Describe how an electromagnet is made and what controls its strength.",
    "Explain electromagnetic induction and how a generator produces voltage.",
    "Describe the parts of a relay and a solenoid, and how each one works."
  ],
  "sections": [
    {
      "heading": "Magnets & Magnetic Fields",
      "html": "<p>A magnet has two poles, north and south. Like poles repel and unlike poles attract, and the force between them acts through the space around the magnet — the <strong>magnetic field</strong>. The field is drawn as lines leaving the north pole and entering the south pole, and the field is strongest where the lines are closest together. A compass needle is a small magnet that lines up with a magnetic field, which is how it points north: it lines up with the Earth's magnetic field.</p>\n<p>Some materials are magnetic — iron, nickel, cobalt, and their alloys — and some are not. A permanent magnet keeps its magnetism; a piece of iron that is only magnetized while it is near a magnet is a temporary magnet. The electrician meets magnetism in motors, in relays, in magnetic starters, and in the clamp meter, which reads the magnetic field around a conductor to measure current.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A magnetic field is invisible, but its effects are not — it moves compass needles, pulls iron, and, when it changes, makes voltage.</div>"
    },
    {
      "heading": "Current Makes a Magnetic Field",
      "html": "<p>Whenever current flows through a conductor, a magnetic field forms around it. The field circles the conductor, and its direction is given by the <strong>right-hand rule</strong>: point your right thumb in the direction of conventional current, and your fingers curl in the direction of the magnetic field. Reverse the current and the field reverses. The field is strongest close to the conductor and weakens with distance.</p>\n<p>Coiling the wire makes the field stronger: each turn of the coil adds its field to the others, and the coil becomes an <strong>electromagnet</strong> — a magnet that can be switched on and off. The strength of an electromagnet depends on the number of turns, the current, and the core material: an iron core concentrates the field and makes the magnet much stronger. This is the principle behind relays, solenoids, contactors, and the motors that run the world.</p>"
    },
    {
      "heading": "Electromagnetic Induction",
      "html": "<p><strong>Electromagnetic induction</strong> is the reverse process: a changing magnetic field makes voltage in a conductor. Move a magnet near a coil, or move a coil through a magnetic field, and a voltage appears across the coil — and if the coil is part of a closed circuit, current flows. The voltage depends on how fast the field changes and on the number of turns in the coil. This is how a generator works: a coil (or a magnet) is spun inside a magnetic field, the field through the coil changes continuously, and the changing field makes a continuously changing voltage — alternating current.</p>\n<p>Induction also works against the electrician in the form of back-EMF: when the current through a coil changes, the coil's own changing field induces a voltage that opposes the change. That is why a coil's current cannot change instantly, why a relay coil needs a snubber or a flyback diode in electronic circuits, and why switching an inductive load makes a spark at the switch contacts.</p>"
    },
    {
      "heading": "Relays, Solenoids & Contactors",
      "html": "<p>A <strong>relay</strong> is an electrically operated switch: a small current through its coil makes an electromagnet that pulls a set of contacts closed (or open), switching a larger current in another circuit. Relays let a small, safe control circuit — a thermostat, a pushbutton, a sensor — control a large load, such as a motor or a heater, without the control circuit carrying the load current. A <strong>contactor</strong> is a heavy-duty relay built to switch large motor currents, with arc chutes to quench the arc when the contacts open.</p>\n<p>A <strong>solenoid</strong> is an electromagnet with a movable iron plunger: energize the coil and the plunger is pulled in; de-energize it and a spring pushes the plunger back out. Solenoids open and close valves, lock and unlock doors, and shift mechanical parts. The relay, the contactor, and the solenoid are the three electromagnetic workhorses of the trade, and all three are just a coil, a core, and a moving part.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Magnets have north and south poles; like poles repel, unlike poles attract; the field is strongest where the lines are closest.</li>\n<li>Current makes a magnetic field around a conductor; the right-hand rule gives its direction.</li>\n<li>An electromagnet is a coil, usually with an iron core; its strength depends on turns, current, and the core.</li>\n<li>Electromagnetic induction: a changing magnetic field makes voltage in a conductor — the generator principle.</li>\n<li>Relays switch large currents with small control currents; contactors are heavy-duty relays; solenoids move a plunger.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Mixing up the left-hand and right-hand rules. The right-hand rule is for the magnetic field around a conductor (thumb = current); the left-hand rule is for the force on a conductor in a magnetic field (the motor rule).</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Thinking an electromagnet is always on. It is a magnet only while current flows — switch the current off and the field collapses, which is exactly what makes relays and solenoids useful.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain magnetic fields, the right-hand rule, electromagnets, induction, and relays, you have this module. Module 11 covers batteries and DC sources.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Magnetic field",
      "def": "The region around a magnet or a current-carrying conductor where magnetic force acts."
    },
    {
      "term": "North pole",
      "def": "The pole of a magnet from which field lines leave."
    },
    {
      "term": "South pole",
      "def": "The pole of a magnet into which field lines enter."
    },
    {
      "term": "Right-hand rule",
      "def": "Point the right thumb in the direction of conventional current; the fingers curl in the direction of the magnetic field."
    },
    {
      "term": "Electromagnet",
      "def": "A coil, usually with an iron core, that becomes a magnet when current flows through it."
    },
    {
      "term": "Electromagnetic induction",
      "def": "A changing magnetic field making voltage in a conductor."
    },
    {
      "term": "Generator",
      "def": "A machine that converts mechanical energy into electrical energy using electromagnetic induction."
    },
    {
      "term": "Relay",
      "def": "An electrically operated switch: a small coil current switches a larger load current."
    },
    {
      "term": "Contactor",
      "def": "A heavy-duty relay built to switch large motor currents."
    },
    {
      "term": "Solenoid",
      "def": "An electromagnet with a movable iron plunger that moves when the coil is energized."
    },
    {
      "term": "Back-EMF",
      "def": "The voltage a coil induces in itself that opposes a change in its current."
    },
    {
      "term": "Core",
      "def": "The iron center of a coil that concentrates the magnetic field."
    },
    {
      "term": "Flux",
      "def": "The total magnetic field passing through an area; measured in webers."
    },
    {
      "term": "Turns",
      "def": "The number of times a wire is wound around a coil; more turns mean a stronger field."
    },
    {
      "term": "Permanent magnet",
      "def": "A magnet that keeps its magnetism without current."
    }
  ],
  "video": {
    "title": "Electromagnetism Explained in Simple Words",
    "embedUrl": "https://www.youtube.com/embed/nllCgjlWAF4",
    "note": "An electromagnetism overview. As you watch, note the right-hand rule and what makes an electromagnet stronger.",
    "more": [
      {
        "title": "Magnetism: Crash Course Physics #32",
        "url": "https://www.youtube.com/watch?v=s94suB5uLWw"
      },
      {
        "title": "Magnetism, Magnetic Field Force, Right Hand Rule, Ampere's Law, Torque, Solenoid",
        "url": "https://www.youtube.com/watch?v=csMqfwJRjCs"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> What are the two poles of a magnet, and how do they interact?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: North and south poles. Step 2: Like poles repel each other. Step 3: Unlike poles attract each other.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> State the right-hand rule for the magnetic field around a conductor.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Point your right thumb in the direction of conventional current. Step 2: Your fingers curl in the direction of the magnetic field around the conductor. Step 3: Reverse the current and the field reverses.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Name three things that make an electromagnet stronger.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: More turns of wire in the coil. Step 2: More current through the coil. Step 3: An iron core to concentrate the field.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Explain electromagnetic induction in two or three sentences.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A changing magnetic field makes voltage in a conductor. Step 2: The voltage depends on how fast the field changes and on the number of turns in the coil. Step 3: This is how a generator works — spinning a coil in a magnetic field makes a continuously changing voltage.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> What is a relay, and why is it useful?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A relay is an electrically operated switch — a small coil current pulls contacts closed or open. Step 2: It lets a small, safe control circuit switch a large load current. Step 3: The control circuit never carries the load current.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A solenoid valve does not open when its coil is energized. Name two possible causes.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The coil may be open (burned out) and drawing no current. Step 2: The plunger may be stuck from dirt or corrosion. Step 3: Check the coil's voltage and continuity, de-energized and under a licensed supervisor, before replacing parts.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Like magnetic poles:",
      "choices": [
        "Attract",
        "Repel",
        "Do nothing",
        "Cancel each other"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Like poles repel; unlike poles attract. (a) Unlike poles attract. (c) Poles always exert a force. (d) Poles do not cancel each other."
    },
    {
      "q": "The right-hand rule gives:",
      "choices": [
        "The direction of current",
        "The direction of the magnetic field around a conductor",
        "The size of the voltage",
        "The resistance of the wire"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Thumb points with the current; fingers curl with the field. (a) Current direction is the input to the rule. (c) The rule does not give voltage. (d) The rule does not give resistance."
    },
    {
      "q": "An electromagnet's strength depends on all of the following EXCEPT:",
      "choices": [
        "The number of turns",
        "The current",
        "The core material",
        "The color of the wire"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Wire color does not affect the magnetic field. (a), (b), and (c) all affect the field strength."
    },
    {
      "q": "Electromagnetic induction is:",
      "choices": [
        "A magnet attracting iron",
        "A changing magnetic field making voltage in a conductor",
        "Current making a magnetic field",
        "A battery charging"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Induction is a changing field making voltage. (a) Attraction is a static magnetic force. (c) Current making a field is electromagnetism in the other direction. (d) Battery charging is a chemical process."
    },
    {
      "q": "A generator works by:",
      "choices": [
        "Burning fuel directly into electricity",
        "Spinning a coil in a magnetic field so the changing field makes voltage",
        "Storing charge in a capacitor",
        "Heating a wire"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A generator uses induction: motion through a magnetic field makes voltage. (a) Fuel is burned to make motion, not electricity directly. (c) A capacitor stores charge, it does not generate it. (d) Heating a wire wastes energy."
    },
    {
      "q": "A relay lets a small control circuit:",
      "choices": [
        "Carry the load current",
        "Switch a larger load current without carrying it",
        "Generate power",
        "Measure voltage"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The relay's coil is the control; its contacts carry the load. (a) The control circuit never carries the load current. (c) A relay does not generate power. (d) A relay does not measure voltage."
    },
    {
      "q": "A solenoid is:",
      "choices": [
        "A type of battery",
        "An electromagnet with a movable plunger",
        "A type of fuse",
        "A wire with no resistance"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A solenoid's coil pulls a plunger in when energized. (a) A battery stores chemical energy. (c) A fuse is a protective device. (d) No wire has zero resistance."
    },
    {
      "q": "A clamp meter measures current by reading:",
      "choices": [
        "The voltage on the wire",
        "The magnetic field around the conductor",
        "The wire's temperature",
        "The wire's color"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The clamp reads the magnetic field the current makes. (a) A clamp meter does not measure voltage on the wire. (c) Temperature is not current. (d) Color is irrelevant."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Magnetism & Electromagnetism Basics: Quick Reference</h3>\n<p><strong>Core idea:</strong> Current makes a magnetic field, and a changing magnetic field makes voltage. That two-way link runs every motor, relay, and generator.</p>\n<p><strong>Magnets:</strong> North and south poles · Like repel, unlike attract · Field strongest where lines are closest.</p>\n<p><strong>Right-hand rule:</strong> Thumb = conventional current · Fingers = magnetic field direction.</p>\n<p><strong>Electromagnet:</strong> Coil + core · Strength from turns, current, and core.</p>\n<p><strong>Induction:</strong> Changing field → voltage in a conductor · Generator principle · Back-EMF opposes current changes.</p>\n<p><strong>Devices:</strong> Relay (small control switches large load) · Contactor (heavy-duty relay) · Solenoid (coil moves a plunger).</p>\n<p><strong>Self-check:</strong> State the right-hand rule, name three things that strengthen an electromagnet, and explain induction, without looking.</p>\n"
};
