// ele106 - Module 6: Motors & Motor Circuits in Commercial Buildings
module.exports = {
  "number": 6,
  "slug": "motors-motor-circuits-commercial-buildings",
  "title": "Motors & Motor Circuits in Commercial Buildings",
  "estTime": "3–4 hours",
  "objectives": [
    "Find a motor's full-load current in Tables 430.248 and 430.250.",
    "Size motor branch-circuit conductors at 125% of FLC (430.22).",
    "Size motor overload protection at 115% or 125% of nameplate current (430.32).",
    "Size short-circuit and ground-fault protection from Table 430.52.",
    "Explain motor disconnects, starters, and star-delta starting."
  ],
  "sections": [
    {
      "heading": "Finding Full-Load Current: Tables 430.248 and 430.250",
      "html": "<p>Every motor circuit starts with the motor's full-load current (FLC), and Article 430 requires you to use the tables — not the nameplate — for sizing the conductors, the disconnect, and the short-circuit and ground-fault protection. Table 430.248 covers single-phase motors; Table 430.250 covers three-phase motors. Find the motor's horsepower and voltage, read across to the FLC, and that number drives the rest of the circuit.</p><p>For example, a 10-horsepower, 480-volt, three-phase motor has an FLC of 14 amperes from Table 430.250. A 5-horsepower, 208-volt, three-phase motor has an FLC of 16.7 amperes. A 5-horsepower, 230-volt, single-phase motor has an FLC of 28 amperes from Table 430.248. The nameplate current is used only for the overload protection — everything else uses the table FLC.</p><p>The reason for the table is that a motor's nameplate current varies by manufacturer and efficiency, while the table gives a standard value the Code can rely on. Using the nameplate for conductor sizing would let a low-current motor be wired with conductors too small for a replacement motor of the same horsepower.</p><div class=\"callout\"><strong>Key idea:</strong> Size motor conductors, disconnects, and short-circuit protection from the table FLC (430.248 single-phase, 430.250 three-phase). The nameplate current is used only for overload protection.</div>"
    },
    {
      "heading": "Branch-Circuit Conductors: 125% of FLC (430.22)",
      "html": "<p>Section 430.22(A) requires motor branch-circuit conductors to have an ampacity of at least 125% of the motor's full-load current. A 10-horsepower, 480-volt motor with an FLC of 14 amperes needs conductors rated at least 17.5 amperes — so 14 AWG copper (20 amperes at 75°C) is the minimum, though 12 AWG is often used in practice. The 125% factor accounts for the motor's starting current and the heat it produces in continuous service.</p><p>Where a feeder supplies several motors, Section 430.24 requires the feeder conductors to carry 125% of the largest motor's FLC plus the FLC of all the other motors plus the other loads. The largest motor gets the 125% factor; the rest are taken at 100%. The same rule applies to the feeder overcurrent device.</p><p>Motor conductors must also be protected against short circuits and ground faults, and the protection is sized from Table 430.52 — which is the next section. The conductor size and the protection size are calculated separately, and they are often different numbers.</p><ul><li>430.22(A): motor branch-circuit conductors at 125% of FLC.</li><li>430.24: feeder = 125% of the largest motor's FLC + 100% of the other motors + other loads.</li><li>Example: 10 HP, 480 V, FLC 14 A → conductors at least 17.5 A.</li></ul>"
    },
    {
      "heading": "Overload Protection (430.32) and Short-Circuit Protection (Table 430.52)",
      "html": "<p>A motor needs two kinds of protection, and they do different jobs. Overload protection (430.32) protects the motor from running too hot for too long — a motor that is overloaded, stalled, or running on a single phase. It is sized from the motor's nameplate current: 115% of nameplate for a motor with a service factor of 1.15 or greater (or a temperature rise of 40°C or less), and 125% of nameplate for all other motors. The overload device is usually a heater in the starter, matched to the motor's nameplate.</p><p>Short-circuit and ground-fault protection (430.52) protects the conductors and the equipment from a fault — a short circuit or a ground fault in the motor circuit. It is sized from Table 430.52 as a percentage of the table FLC: an inverse-time circuit breaker at 250%, a dual-element time-delay fuse at 175%, a nontime-delay fuse at 300%, and an instantaneous-trip breaker at 800%. For our 10-horsepower, 480-volt motor (FLC 14 A), an inverse-time breaker may be rated up to 35 amperes (14 × 2.5).</p><p>The two protections work together: the overload device handles the slow overheat, and the breaker or fuse handles the sudden fault. A motor circuit with only a breaker and no overload protection will burn out its motor; a motor circuit with only overload protection and no short-circuit protection is a fire waiting for a fault.</p><div class=\"callout\"><strong>Key idea:</strong> Overload (430.32) = 115% or 125% of NAMEPLATE current — protects the motor from overheating. Short-circuit/ground-fault (Table 430.52) = a percentage of TABLE FLC — protects the conductors. Inverse-time breaker: 250%.</div>"
    },
    {
      "heading": "Disconnects, Starters, and Star-Delta Starting",
      "html": "<p>Section 430.102 requires a disconnecting means for the motor and for the controller, and the disconnect must be within sight of the motor — within 50 feet and visible from the motor's location — so that the person working on the motor can see that it is disconnected. The disconnect must be rated at least 115% of the motor's FLC (430.110). A disconnect that is not within sight is a violation, and it is one of the most common motor-circuit violations an inspector finds.</p><p>The starter is the device that starts and stops the motor: a magnetic starter with a contactor and overload heaters, or a manual starter for a small motor. A variable-frequency drive (VFD) is a starter that also controls the motor's speed by changing the frequency of the power it supplies. A VFD lets a fan or a pump run slower when less output is needed, saving energy — but it also creates harmonics, which is why VFD circuits need the harmonic considerations from Module 5.</p><p>Star-delta starting is used for large motors to limit the starting current. The motor starts connected in star (wye), which gives it about one-third of the starting current and one-third of the starting torque, and then switches to delta for full running power. The motor must be built for star-delta starting — a standard motor cannot be star-delta started — and the starter must switch at the right moment, or the motor will stall.</p><ul><li>Disconnect within sight of the motor (430.102), rated at least 115% of FLC (430.110).</li><li>Starter: magnetic starter with overload heaters, or a VFD for speed control.</li><li>Star-delta starting: star gives about 1/3 the starting current, then switches to delta for running.</li></ul>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>FLC comes from the tables: 430.248 (single-phase), 430.250 (three-phase). Nameplate current is for overload protection only.</li><li>Conductors: 125% of FLC (430.22). Feeder: 125% of the largest motor + 100% of the rest (430.24).</li><li>Overload (430.32): 115% of nameplate (SF ≥ 1.15 or rise ≤ 40°C) or 125% of nameplate (all others).</li><li>Short-circuit/ground-fault (Table 430.52): inverse-time breaker 250%, dual-element fuse 175%, nontime-delay fuse 300%, instantaneous-trip breaker 800% of FLC.</li><li>Disconnect within sight (430.102), rated at least 115% of FLC (430.110). Star-delta starting cuts starting current to about one-third.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Sizing motor conductors from the nameplate current. The Code requires the table FLC (430.6(A)(1)) — the nameplate is only for overload protection.</div><div class=\"callout\"><strong>Common mistake:</strong> Installing a motor disconnect that is not within sight of the motor. If the person working on the motor cannot see the disconnect, it is a violation (430.102).</div><p><strong>Ready-to-Work link:</strong> If you can find an FLC in the tables, size the conductors, the overload, and the breaker for a motor, you have this module. Module 7 covers hazardous (classified) locations.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Full-load current (FLC)",
      "def": "The current a motor draws at full load, taken from Tables 430.248 or 430.250 for Code sizing."
    },
    {
      "term": "Table 430.248",
      "def": "Full-load currents for single-phase motors."
    },
    {
      "term": "Table 430.250",
      "def": "Full-load currents for three-phase motors."
    },
    {
      "term": "430.22(A)",
      "def": "Motor branch-circuit conductors are sized at 125% of FLC."
    },
    {
      "term": "430.24",
      "def": "A feeder supplying motors is sized at 125% of the largest motor's FLC plus the rest at 100%."
    },
    {
      "term": "Overload protection",
      "def": "Protection against a motor running too hot for too long (430.32)."
    },
    {
      "term": "430.32",
      "def": "Overload protection is 115% of nameplate (SF ≥ 1.15 or rise ≤ 40°C) or 125% of nameplate (all others)."
    },
    {
      "term": "Table 430.52",
      "def": "Short-circuit and ground-fault protection as a percentage of FLC: inverse-time breaker 250%, dual-element fuse 175%, nontime-delay fuse 300%, instantaneous-trip breaker 800%."
    },
    {
      "term": "Service factor",
      "def": "A multiplier on a motor's nameplate rating, showing how much overload it can carry briefly."
    },
    {
      "term": "430.102",
      "def": "A disconnecting means is required for the motor and the controller, within sight of the motor."
    },
    {
      "term": "430.110",
      "def": "A motor disconnect must be rated at least 115% of FLC."
    },
    {
      "term": "Magnetic starter",
      "def": "A contactor and overload heaters that start and stop a motor."
    },
    {
      "term": "Variable-frequency drive (VFD)",
      "def": "A starter that controls motor speed by changing the frequency of the power."
    },
    {
      "term": "Star-delta starting",
      "def": "Starting a motor in star (about 1/3 starting current) and switching to delta for running."
    }
  ],
  "video": {
    "title": "3 Phase Induction Motor Panel Wiring & Running Practical | ITI Electrician",
    "embedUrl": "https://www.youtube.com/embed/VxhBSU5sCZg",
    "note": "This video shows a three-phase induction motor panel being wired and run — the contactor, the overload, the starter, and the motor. Watch it and identify the parts from this module: where is the overload protection, where is the disconnect, and what does the starter do?",
    "more": [
      {
        "title": "How to wire STAR DELTA MOTOR STARTER | CONTROL & POWER CIRCUIT",
        "url": "https://www.youtube.com/watch?v=gyT_L2U45A4"
      },
      {
        "title": "Contactor Working & Types Of Switches | Live Practical Panel Wiring | Control Panel Wiring Part-6",
        "url": "https://www.youtube.com/watch?v=PP4P8_zzbV4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 10-horsepower, 480-volt, three-phase motor has an FLC of 14 amperes from Table 430.250. What is the minimum branch-circuit conductor ampacity?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 430.22(A) requires conductors at 125% of FLC. Step 2: 14 × 1.25 = 17.5 A. Step 3: The minimum conductor ampacity is 17.5 A — 14 AWG copper (20 A at 75°C) is the minimum, and 12 AWG is often used.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The same 10 HP, 480 V motor (FLC 14 A) will be protected by an inverse-time circuit breaker. What is the maximum breaker rating from Table 430.52?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Table 430.52 allows an inverse-time breaker at 250% of FLC. Step 2: 14 × 2.5 = 35 A. Step 3: The maximum breaker rating is 35 amperes.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A motor's nameplate current is 20 amperes, its service factor is 1.15, and its temperature rise is 40°C. What is the maximum overload protection setting?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 430.32 allows 115% of nameplate for a motor with SF ≥ 1.15 or a temperature rise of 40°C or less. Step 2: 20 × 1.15 = 23 A. Step 3: The overload device must trip at no more than 23 amperes.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A feeder supplies three motors: 10 HP (FLC 14 A), 5 HP (FLC 7.6 A), and 3 HP (FLC 4.8 A), all 480 V three-phase. What is the minimum feeder conductor ampacity for the motors alone?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 430.24: 125% of the largest motor plus 100% of the rest. Step 2: 14 × 1.25 = 17.5 A. Step 3: 17.5 + 7.6 + 4.8 = 29.9 A minimum.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A motor's disconnect is installed in a room 100 feet away, around a corner from the motor. What is wrong?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 430.102 requires the disconnect to be within sight of the motor. Step 2: A disconnect 100 feet away around a corner is not within sight. Step 3: The fix is a disconnect within sight of the motor, rated at least 115% of FLC (430.110).</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A large motor's starting current is tripping the building's main breaker. What starting method could reduce it, and by how much?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Star-delta starting reduces the starting current to about one-third. Step 2: The motor starts in star, then switches to delta for running. Step 3: The motor must be built for star-delta starting, and the starter must switch at the right moment.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Motor branch-circuit conductors are sized at:",
      "choices": [
        "100% of FLC",
        "115% of FLC",
        "125% of FLC",
        "250% of FLC"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 430.22(A): 125% of FLC. (a) 100% has no margin for starting current. (b) 115% is an overload figure. (d) 250% is a short-circuit protection figure."
    },
    {
      "q": "The FLC used for sizing motor conductors comes from:",
      "choices": [
        "The motor nameplate",
        "Tables 430.248 and 430.250",
        "Table 310.16",
        "The motor's horsepower only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Article 430 requires the table FLC for sizing. (a) The nameplate is used only for overload protection. (c) Table 310.16 is conductor ampacity. (d) Horsepower alone does not give the current."
    },
    {
      "q": "A 10 HP, 480 V, three-phase motor has an FLC of 14 A. The minimum conductor ampacity is:",
      "choices": [
        "14 A",
        "16.1 A",
        "17.5 A",
        "35 A"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 14 × 1.25 = 17.5 A. (a) 14 A is the FLC with no factor. (b) 16.1 A is 14 × 1.15, the overload factor. (d) 35 A is the breaker size, not the conductor size."
    },
    {
      "q": "Table 430.52 allows an inverse-time circuit breaker at what percentage of FLC?",
      "choices": [
        "115%",
        "125%",
        "175%",
        "250%"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Table 430.52: inverse-time breaker 250%. (a) 115% is an overload figure. (b) 125% is a conductor figure. (c) 175% is the dual-element fuse figure."
    },
    {
      "q": "Overload protection for a motor with a service factor of 1.15 is sized at:",
      "choices": [
        "100% of nameplate",
        "115% of nameplate",
        "125% of nameplate",
        "250% of FLC"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 430.32: 115% of nameplate for SF ≥ 1.15. (a) 100% would trip on normal load. (c) 125% applies to motors with a lower service factor. (d) 250% is a short-circuit protection figure."
    },
    {
      "q": "A motor disconnect must be:",
      "choices": [
        "In the panelboard only",
        "Within sight of the motor",
        "At least 100 feet from the motor",
        "Locked in the off position"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 430.102 requires the disconnect within sight of the motor. (a) A disconnect in the panelboard is not within sight. (c) 100 feet away is not within sight. (d) Locking is good practice but not the location rule."
    },
    {
      "q": "A motor disconnect must be rated at least:",
      "choices": [
        "100% of FLC",
        "115% of FLC",
        "125% of FLC",
        "250% of FLC"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 430.110: at least 115% of FLC. (a) 100% has no margin. (c) 125% is the conductor factor. (d) 250% is a short-circuit protection figure."
    },
    {
      "q": "Star-delta starting reduces the starting current to about:",
      "choices": [
        "One-half",
        "One-third",
        "One-tenth",
        "The same as direct-on-line"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Star-delta starting gives about one-third of the direct-on-line starting current. (a) One-half is too much. (c) One-tenth is too little. (d) Direct-on-line starting gives the full starting current."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Motors &amp; Motor Circuits: Quick Reference</h3>\n<p><strong>Core idea:</strong> Motors get two protections: overload (slow overheat, from the nameplate) and short-circuit/ground-fault (sudden fault, from the table FLC). Size the conductors at 125% of FLC.</p>\n<p><strong>FLC:</strong> Tables 430.248 (single-phase) and 430.250 (three-phase). Nameplate current is for overload protection only.</p>\n<p><strong>Conductors:</strong> 125% of FLC (430.22) · feeder: 125% largest + 100% rest (430.24).</p>\n<p><strong>Overload (430.32):</strong> 115% of nameplate (SF ≥ 1.15 or rise ≤ 40°C) or 125% of nameplate (all others).</p>\n<p><strong>Short-circuit/ground-fault (Table 430.52):</strong> Inverse-time breaker 250% · dual-element fuse 175% · nontime-delay fuse 300% · instantaneous-trip breaker 800% of FLC.</p>\n<p><strong>Disconnect:</strong> Within sight (430.102), rated ≥ 115% of FLC (430.110). Star-delta: about 1/3 starting current.</p>\n<p><strong>Self-check:</strong> Size the conductors, overload, and breaker for a 10 HP, 480 V motor (FLC 14 A).</p>\n"
};
