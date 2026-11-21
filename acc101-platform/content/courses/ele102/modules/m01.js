// ele102 - Module 1: Atoms, Charge & Current
module.exports = {
  "number": 1,
  "slug": "atoms-charge-and-current",
  "title": "Atoms, Charge & Current",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe the structure of an atom: protons, neutrons, and electrons.",
    "Explain what electric charge is and how electrons move in a conductor.",
    "Define current, and explain the difference between conventional current and electron flow.",
    "Explain the difference between conductors, insulators, and semiconductors.",
    "Describe what makes a material a good conductor of electricity."
  ],
  "sections": [
    {
      "heading": "The Atom: Protons, Neutrons & Electrons",
      "html": "<p>Everything in the electrical trade starts with the atom. An atom has a nucleus at its center, made of protons (positive charge) and neutrons (no charge), and electrons (negative charge) orbiting the nucleus in shells. The number of protons defines the element: copper has 29 protons, aluminum has 13, and silver has 47. The electrons in the outermost shell — the valence electrons — decide how the material behaves electrically.</p>\n<p>In a conductor such as copper, the outermost electrons are held loosely and can move freely from atom to atom. These free electrons are the raw material of electric current. In an insulator such as rubber or glass, the outer electrons are held tightly and cannot move, so current cannot flow. A semiconductor, such as silicon, sits in between: its electrons can be freed with a little energy, which is why semiconductors are the basis of electronics.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Electricity is the movement of free electrons. A conductor has many free electrons, an insulator has almost none, and a semiconductor can be controlled to have some — and that control is the whole of electronics.</div>"
    },
    {
      "heading": "Charge & the Coulomb",
      "html": "<p>Electric charge is measured in <strong>coulombs</strong>. One electron carries a tiny negative charge, and one coulomb is the charge of about 6.25 × 10<sup>18</sup> electrons. Charges of the same sign repel each other; charges of opposite sign attract. That attraction and repulsion is the force that moves electrons through a circuit: a voltage source pushes electrons away from its negative terminal and pulls them toward its positive terminal.</p>\n<p>Charge is never created or destroyed in a circuit — it is moved. A battery does not make electrons; it pumps the electrons that are already in the wire around the circuit, the way a water pump moves water that is already in the pipes. The electrons themselves move slowly, drifting along the wire, but the energy they carry moves at nearly the speed of light, which is why a light turns on the instant a switch is flipped.</p>"
    },
    {
      "heading": "Current: Electron Flow & Conventional Current",
      "html": "<p><strong>Current</strong> is the rate at which charge flows past a point, measured in <strong>amperes (amps)</strong>. One amp is one coulomb of charge passing a point every second. In a metal wire, the electrons actually flow from the negative terminal of the source toward the positive terminal — this is called <strong>electron flow</strong>. But the electrical trade, and almost all textbooks and diagrams, use <strong>conventional current</strong>, which flows from positive to negative. The two describe the same circuit from opposite directions, and the math works out the same either way.</p>\n<p>Current needs a complete path — a closed circuit — to flow. Break the path with a switch, a blown fuse, or a loose connection, and the current stops everywhere in that circuit, instantly. Current also needs a difference in potential to drive it: without voltage, the free electrons wander randomly and no net current flows. Voltage is the push; current is the flow; and resistance is what limits the flow.</p>"
    },
    {
      "heading": "Conductors, Insulators & Semiconductors",
      "html": "<p><strong>Conductors</strong> — copper, aluminum, silver, gold — have many free electrons and let current flow easily. Copper is the standard for building wiring because it conducts well, is easy to work with, and holds its connections. <strong>Insulators</strong> — rubber, plastic, glass, ceramic, dry wood — hold their electrons tightly and block current. Insulation is what keeps current in the wire and off the person holding the tool.</p>\n<p><strong>Semiconductors</strong> — silicon and germanium — can be made to conduct or to block, depending on how they are treated. Doping silicon with a tiny amount of another element adds free electrons or creates \"holes\" where electrons can move, and that control is what makes diodes, transistors, and computer chips possible. The electrician meets semiconductors in LED lighting, in motor drives, and in the controls of modern equipment — and the DC theory in this course is the foundation for understanding all of them.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Atoms have protons (positive), neutrons (neutral), and electrons (negative); valence electrons decide electrical behavior.</li>\n<li>Charge is measured in coulombs; one coulomb is about 6.25 × 10<sup>18</sup> electrons.</li>\n<li>Current is charge flow in amps; one amp is one coulomb per second.</li>\n<li>Electron flow goes negative to positive; conventional current goes positive to negative — the math works the same either way.</li>\n<li>Conductors have many free electrons, insulators have almost none, and semiconductors can be controlled.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Thinking a battery \"makes\" electrons. A battery pumps the electrons already in the wire — it moves charge, it does not create it.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Mixing up electron flow and conventional current on a diagram. Both are correct descriptions of the same circuit; the trade uses conventional current, positive to negative.</div>\n<p><strong>Ready-to-Work link:</strong> If you can describe an atom, define the coulomb and the amp, and explain conductors vs. insulators vs. semiconductors, you have this module. Module 2 covers voltage, resistance, and Ohm's law.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Atom",
      "def": "The smallest unit of an element: a nucleus of protons and neutrons with electrons orbiting it."
    },
    {
      "term": "Proton",
      "def": "A positively charged particle in the nucleus of an atom."
    },
    {
      "term": "Neutron",
      "def": "A particle with no charge in the nucleus of an atom."
    },
    {
      "term": "Electron",
      "def": "A negatively charged particle that orbits the nucleus; free electrons carry current."
    },
    {
      "term": "Valence electron",
      "def": "An electron in the outermost shell of an atom; it decides how the material behaves electrically."
    },
    {
      "term": "Free electron",
      "def": "An electron loosely held by its atom that can move freely through a conductor."
    },
    {
      "term": "Coulomb",
      "def": "The unit of electric charge; one coulomb is about 6.25 × 10^18 electrons."
    },
    {
      "term": "Current",
      "def": "The rate of charge flow past a point, measured in amperes."
    },
    {
      "term": "Ampere (amp)",
      "def": "The unit of current; one amp is one coulomb per second."
    },
    {
      "term": "Electron flow",
      "def": "Current described as electrons moving from negative to positive."
    },
    {
      "term": "Conventional current",
      "def": "Current described as flowing from positive to negative; the standard used in the trade."
    },
    {
      "term": "Conductor",
      "def": "A material with many free electrons that lets current flow easily, such as copper."
    },
    {
      "term": "Insulator",
      "def": "A material that holds its electrons tightly and blocks current, such as rubber or glass."
    },
    {
      "term": "Semiconductor",
      "def": "A material, such as silicon, that can be controlled to conduct or to block current."
    },
    {
      "term": "Closed circuit",
      "def": "A complete path that lets current flow from the source, through the load, and back."
    }
  ],
  "video": {
    "title": "What is electricity? - Electricity Explained - (1)",
    "embedUrl": "https://www.youtube.com/embed/ru032Mfsfig",
    "note": "An introduction to electricity, atoms, and charge. As you watch, note how the video describes free electrons and what makes copper a good conductor.",
    "more": [
      {
        "title": "What is Electricity? Part One: The Structure of an Atom",
        "url": "https://www.youtube.com/watch?v=XBJQ_JfJ57Y"
      },
      {
        "title": "What's Inside an Atom? Protons, Electrons, and Neutrons!",
        "url": "https://www.youtube.com/watch?v=e9GuJUaX0UM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Describe the structure of an atom: what is in the nucleus, and what orbits it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The nucleus contains protons (positive charge) and neutrons (no charge). Step 2: Electrons (negative charge) orbit the nucleus in shells. Step 3: The electrons in the outermost shell — the valence electrons — decide how the material behaves electrically.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> How many electrons are in one coulomb of charge?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: One coulomb is the charge of about 6.25 × 10^18 electrons. Step 2: That is a huge number, which is why a coulomb is a large unit of charge. Step 3: One amp is one coulomb passing a point every second.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Explain the difference between electron flow and conventional current.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Electron flow is the actual movement of electrons, from negative to positive. Step 2: Conventional current is the trade's standard description, from positive to negative. Step 3: Both describe the same circuit, and the math works out the same either way.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Why is copper a good conductor and rubber a good insulator?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Copper's outer electrons are held loosely and can move freely from atom to atom. Step 2: Rubber's outer electrons are held tightly and cannot move. Step 3: Many free electrons means current flows easily; almost none means current is blocked.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A circuit has 2 amps of current. How much charge passes a point in the circuit every second?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: One amp is one coulomb per second. Step 2: 2 amps means 2 coulombs per second. Step 3: That is about 2 × 6.25 × 10^18 electrons per second.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A switch in a circuit is opened. What happens to the current, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The current stops everywhere in that circuit. Step 2: Current needs a complete path to flow. Step 3: Opening the switch breaks the path, so the electrons have nowhere to go.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The particles in the nucleus of an atom are:",
      "choices": [
        "Electrons and neutrons",
        "Protons and neutrons",
        "Electrons and protons",
        "Only electrons"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The nucleus holds protons and neutrons. (a) Electrons orbit the nucleus, they are not in it. (c) Electrons are not in the nucleus. (d) Electrons orbit outside the nucleus."
    },
    {
      "q": "One coulomb of charge is about how many electrons?",
      "choices": [
        "6.25 × 10^6",
        "6.25 × 10^12",
        "6.25 × 10^18",
        "6.25 × 10^24"
      ],
      "answer": 2,
      "explanation": "Correct: (c). One coulomb is about 6.25 × 10^18 electrons. (a) and (b) are far too few. (d) 10^24 is far too many."
    },
    {
      "q": "One ampere is:",
      "choices": [
        "One coulomb per minute",
        "One coulomb per second",
        "One electron per second",
        "One volt per ohm"
      ],
      "answer": 1,
      "explanation": "Correct: (b). One amp is one coulomb passing a point every second. (a) Per minute would be a much smaller current. (c) One electron per second is a tiny fraction of an amp. (d) Volts per ohm is a formula for current, not the definition of an amp."
    },
    {
      "q": "Conventional current flows:",
      "choices": [
        "Negative to positive",
        "Positive to negative",
        "In both directions at once",
        "Only in AC circuits"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Conventional current flows from positive to negative. (a) That is electron flow. (c) Current flows one way in a DC circuit. (d) Conventional current is used for DC and AC alike."
    },
    {
      "q": "A material with many free electrons is a:",
      "choices": [
        "Insulator",
        "Conductor",
        "Semiconductor",
        "Magnet"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Many free electrons make a conductor. (a) An insulator has almost no free electrons. (c) A semiconductor can be controlled to conduct or block. (d) A magnet is a different property."
    },
    {
      "q": "The electrons that decide how a material behaves electrically are the:",
      "choices": [
        "Inner-shell electrons",
        "Valence electrons",
        "Neutrons",
        "Protons"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Valence electrons are in the outermost shell and decide electrical behavior. (a) Inner-shell electrons are held tightly. (c) Neutrons have no charge. (d) Protons are in the nucleus."
    },
    {
      "q": "Current needs what to flow?",
      "choices": [
        "A complete, closed path",
        "A battery only",
        "A magnet only",
        "A very long wire"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Current needs a complete closed circuit. (b) A battery alone, with no path, gives no current. (c) A magnet does not make current flow in a circuit. (d) Length does not create a path."
    },
    {
      "q": "Silicon is an example of a:",
      "choices": [
        "Conductor",
        "Insulator",
        "Semiconductor",
        "Superconductor"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Silicon is a semiconductor that can be controlled to conduct or block. (a) Silicon does not conduct freely like copper. (b) Silicon is not an insulator like rubber. (d) Silicon is not a superconductor."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — Atoms, Charge & Current: Quick Reference</h3>\n<p><strong>Core idea:</strong> Electricity is the movement of free electrons — a conductor has many, an insulator has almost none.</p>\n<p><strong>Atom:</strong> Protons (+) and neutrons in the nucleus · Electrons (−) in shells · Valence electrons decide electrical behavior.</p>\n<p><strong>Charge:</strong> 1 coulomb ≈ 6.25 × 10^18 electrons.</p>\n<p><strong>Current:</strong> 1 amp = 1 coulomb per second · Electron flow is negative to positive · Conventional current is positive to negative.</p>\n<p><strong>Materials:</strong> Conductors (copper, aluminum) · Insulators (rubber, glass) · Semiconductors (silicon).</p>\n<p><strong>Self-check:</strong> Describe an atom, define the coulomb and the amp, and explain the three material types, without looking.</p>\n"
};
