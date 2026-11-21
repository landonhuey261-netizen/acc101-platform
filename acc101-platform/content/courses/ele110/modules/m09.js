module.exports = {
  "number": 9,
  "slug": "grounding-bonding-low-voltage",
  "title": "Grounding & Bonding for Low-Voltage Systems",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the difference between grounding and bonding.",
    "Describe the grounding electrode system and the equipment grounding conductor.",
    "Explain why low-voltage systems need grounding and bonding even though they are low power.",
    "Describe how to ground a telecommunications room and a rack.",
    "Explain ground loops and how bonding prevents them."
  ],
  "sections": [
    {
      "heading": "Grounding Is Not Bonding — and You Need Both",
      "html": "<p><strong>Grounding</strong> is the connection of an electrical system to the earth. It limits the voltage imposed by lightning, line surges, or accidental contact with higher-voltage lines, and it stabilizes the voltage to earth during normal operation. <strong>Bonding</strong> is connecting metal parts together to establish electrical continuity and conductivity, so that all the metal parts of a system are at the same potential and a fault has a low-impedance path back to the source that will trip the overcurrent device. The NEC defines both terms in Article 100, and Article 250 is the article that governs them.</p><p>The two work together. Grounding without bonding leaves metal parts at different potentials, so a fault can energize a rack or a panel without tripping a breaker. Bonding without grounding leaves the system with no reference to earth, so a surge has nowhere to go. In a low-voltage system, the same logic applies: the racks, the cable trays, the patch panels, and the equipment are all bonded together and to the grounding electrode system, so that a fault or a surge has a safe path and the system has a stable reference.</p>"
    },
    {
      "heading": "The Grounding Electrode System and the Equipment Grounding Conductor",
      "html": "<p>The <strong>grounding electrode system</strong> is the set of electrodes — ground rods, concrete-encased electrodes (rebar in the foundation), metal water pipe, and other listed electrodes — that connect the building's electrical system to the earth. All electrodes present at a building must be bonded together into one system, so that the whole building shares one ground reference instead of several that can sit at different potentials.</p><p>The <strong>equipment grounding conductor (EGC)</strong> is the conductor that connects the normally non-current-carrying metal parts of equipment — the enclosures, the racks, the conduit — back to the source, so that a fault has a low-impedance path that trips the breaker. In low-voltage work, the EGC is often the green or bare conductor in a cable, or a separate bonding conductor run to a telecommunications grounding busbar. The conductor must be sized by the tables in Article 250 — Table 250.122 for equipment grounding conductors — and the sizing is based on the overcurrent device protecting the circuit, not on the size of the load.</p><div class=\"callout\"><strong>Key idea:</strong> Grounding connects the system to earth; bonding connects the metal parts to each other. Both are needed, and both are sized by the tables in Article 250.</div>"
    },
    {
      "heading": "Grounding a Telecommunications Room and a Rack",
      "html": "<p>A telecommunications room has its own grounding arrangement, built on the same principles. A <strong>telecommunications grounding busbar (TGB)</strong> is mounted in the room, bonded to the building's grounding electrode system, and every rack, cabinet, cable tray, and patch panel in the room is bonded to it with a listed bonding conductor. The busbar is the single point where the room's grounding comes together, so that all the equipment in the room shares one reference.</p><p>The rack itself is bonded at multiple points: the rack frame, the patch panels, the cable tray, and the equipment inside. A rack that is not bonded can float at a different potential from the equipment plugged into it, which causes noise on data circuits, intermittent faults, and in a worst case a shock hazard. The bonding conductors are green or green with yellow stripe, they are sized per Article 250, and they are installed with listed connectors — not with a random screw through a painted surface. Paint must be removed at the bonding point, because paint is an insulator and a bonding connection through paint is no connection at all.</p>"
    },
    {
      "heading": "Ground Loops: When Two Grounds Disagree",
      "html": "<p>A <strong>ground loop</strong> happens when a piece of equipment is connected to ground at two points that sit at different potentials, and current flows through the ground path between them. On a data or audio system, that current shows up as hum, noise, or intermittent faults that come and go with the weather, the time of day, or which equipment is running. Ground loops are one of the most frustrating faults in low-voltage work, because the system works fine on the bench and fails in the building.</p><p>The prevention is in the design: one grounding reference for the system, bonding conductors run with the signal cable so they share the same path, and no accidental second ground — such as a rack bonded to a water pipe on one side and to the busbar on the other. When a ground loop is suspected, the technician's job is to find the second ground path and remove it, not to add more grounds. Adding grounds to fix a ground loop is like adding water to fix a leak — it makes the problem worse. And as with all grounding work, the technician verifies the connections with a meter and documents them; a bonding connection that is not tested is a guess.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Grounding connects the system to earth; bonding connects metal parts to each other — you need both.</li><li>All grounding electrodes at a building are bonded together into one grounding electrode system.</li><li>The equipment grounding conductor gives a fault a low-impedance path back to the source so the breaker trips.</li><li>A telecommunications room uses a grounding busbar (TGB); every rack, tray, and panel bonds to it.</li><li>A ground loop is current flowing between two grounds at different potentials — fix it by removing the extra path, not by adding grounds.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Bonding through paint. Paint is an insulator — remove it at the bonding point and use a listed connector, or the bond is not a bond.</div><div class=\"callout\"><strong>Common mistake:</strong> Adding a second ground to fix noise. A second ground path is usually the cause of the noise, not the cure — find the loop and remove the extra path.</div><p><strong>Ready-to-Work link:</strong> If you can explain grounding vs bonding, describe a telecommunications room's grounding, and explain a ground loop, you have this module. Module 10 teaches how to prove the cabling works: testing and certifying.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Grounding",
      "def": "Connecting an electrical system to the earth to limit voltage from surges and stabilize voltage to earth."
    },
    {
      "term": "Bonding",
      "def": "Connecting metal parts together to establish electrical continuity and conductivity."
    },
    {
      "term": "Grounding electrode system",
      "def": "All grounding electrodes at a building bonded together into one system."
    },
    {
      "term": "Grounding electrode",
      "def": "A conducting object through which a connection to earth is established, such as a ground rod or concrete-encased electrode."
    },
    {
      "term": "Equipment grounding conductor (EGC)",
      "def": "The conductor connecting normally non-current-carrying metal parts back to the source so a fault trips the breaker."
    },
    {
      "term": "Effective ground-fault current path",
      "def": "An intentionally built low-impedance path designed to carry fault current back to the source."
    },
    {
      "term": "Telecommunications grounding busbar (TGB)",
      "def": "The busbar in a telecommunications room to which racks, trays, and panels are bonded."
    },
    {
      "term": "Ground loop",
      "def": "Current flowing between two ground points at different potentials, causing noise and intermittent faults."
    },
    {
      "term": "NEC Article 250",
      "def": "The NEC article governing grounding and bonding."
    },
    {
      "term": "Table 250.122",
      "def": "The NEC table used to size equipment grounding conductors based on the overcurrent device."
    },
    {
      "term": "Main bonding jumper",
      "def": "The connection between the grounded conductor and the equipment grounding conductor at the service."
    },
    {
      "term": "Concrete-encased electrode",
      "def": "A grounding electrode made of rebar or bare copper in the concrete foundation (a Ufer ground)."
    }
  ],
  "video": {
    "title": "Grounding and Bonding",
    "embedUrl": "https://www.youtube.com/embed/dXYYXAD9Alk",
    "note": "Watch the video, then work the assignment below. As you watch, note every term from this module's key terms list and write down one question the video raises for you.",
    "more": [
      {
        "title": "Grounding and Bonding",
        "url": "https://www.youtube.com/watch?v=E7d0gfejhJg"
      },
      {
        "title": "How to Install and Wire a Sub Panel",
        "url": "https://www.youtube.com/watch?v=_ir2ap_ft_Y"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Explain the difference between grounding and bonding in two sentences a homeowner could understand.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Grounding connects the electrical system to the earth, so a surge or lightning has somewhere safe to go. Step 2: Bonding connects all the metal parts together, so a fault has a clear path back that trips the breaker instead of energizing the metal you can touch.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A rack in a telecommunications room is not bonded to the room's grounding busbar. What problems can that cause?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The rack can float at a different potential from the equipment in it, causing noise and intermittent faults on data circuits. Step 2: A fault could energize the rack without tripping a breaker — a shock hazard. Step 3: The fix is a listed bonding conductor from the rack to the busbar, with paint removed at the connection point.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A data system has a hum that comes and goes. The technician suspects a ground loop. What is a ground loop, and what should the technician look for?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A ground loop is current flowing between two ground points at different potentials. Step 2: Look for a second, accidental ground path — a rack bonded to a water pipe as well as to the busbar, or a cable shield grounded at both ends. Step 3: Remove the extra path; do not add more grounds.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Why must all grounding electrodes at a building be bonded together?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: So the whole building shares one ground reference. Step 2: Separate, unbonded electrodes can sit at different potentials, which causes ground loops and means a fault may not have a clear path back. Step 3: Article 250 requires all electrodes present to be bonded into one grounding electrode system.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A bonding connection is made with a screw through a painted rack surface. Why is this a bad connection, and what is the right way?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Paint is an insulator — the screw may touch paint, not metal, so the bond is unreliable or nonexistent. Step 2: Remove the paint at the bonding point, use a listed bonding connector, and torque it properly. Step 3: Verify the connection with a meter and document it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the equipment grounding conductor's job, and what decides its size?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The EGC connects metal parts back to the source so a ground fault has a low-impedance path that trips the overcurrent device. Step 2: Its size is set by NEC Table 250.122, based on the rating of the overcurrent device protecting the circuit — not on the size of the load.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Grounding is:",
      "choices": [
        "Connecting metal parts together",
        "Connecting an electrical system to the earth",
        "Painting a rack green",
        "Running a second ground to fix noise"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Grounding is the connection to earth. (a) Connecting metal parts together is bonding. (c) Paint is an insulator, not a ground. (d) A second ground causes ground loops, it does not fix them."
    },
    {
      "q": "Bonding is:",
      "choices": [
        "Connecting a system to the earth",
        "Connecting metal parts together for electrical continuity",
        "Using a bigger wire",
        "Turning off the power"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Bonding connects metal parts together so they share one potential. (a) That is grounding. (c) Wire size is a separate issue. (d) Turning off power is lockout, not bonding."
    },
    {
      "q": "The NEC article governing grounding and bonding is:",
      "choices": [
        "Article 725",
        "Article 760",
        "Article 250",
        "Article 800"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Article 250 governs grounding and bonding. (a) Article 725 covers signaling circuits. (b) Article 760 covers fire alarms. (d) Article 800 covers communications circuits."
    },
    {
      "q": "The equipment grounding conductor's job is to:",
      "choices": [
        "Carry the normal load current",
        "Give a fault a low-impedance path back to the source so the breaker trips",
        "Power the equipment",
        "Carry data"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The EGC carries fault current so the overcurrent device trips. (a) The EGC does not carry normal load current. (c) Power comes from the circuit conductors. (d) Data travels on the signal conductors."
    },
    {
      "q": "A ground loop is caused by:",
      "choices": [
        "A cable that is too short",
        "Current flowing between two ground points at different potentials",
        "A battery that is too small",
        "A missing label"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A ground loop is current between two grounds at different potentials. (a) Cable length does not cause a ground loop. (c) Battery size is unrelated. (d) A missing label is a documentation error."
    },
    {
      "q": "The fix for a ground loop is to:",
      "choices": [
        "Add more grounds",
        "Remove the extra ground path",
        "Use a longer cable",
        "Turn up the volume"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Remove the extra path so the system has one grounding reference. (a) Adding grounds makes a loop worse. (c) Cable length does not fix a loop. (d) Volume does not fix a ground loop."
    },
    {
      "q": "A telecommunications grounding busbar (TGB) is:",
      "choices": [
        "A power strip",
        "The busbar in a telecommunications room to which racks, trays, and panels are bonded",
        "A type of patch panel",
        "A battery"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The TGB is the room's single grounding point. (a) A power strip distributes power. (c) A patch panel terminates cables. (d) A battery stores energy."
    },
    {
      "q": "A bonding connection made through paint is bad because:",
      "choices": [
        "Paint is the wrong color",
        "Paint is an insulator, so the connection may not conduct",
        "Paint makes the screw rust",
        "Paint is expensive"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Paint insulates, so the bond may not conduct at all. (a) Color does not matter. (c) Rust is not the issue. (d) Cost is not the issue."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Grounding & Bonding: Quick Reference</h3>\n<p><strong>Core idea:</strong> Grounding connects the system to earth; bonding connects the metal parts to each other. You need both, and both are governed by NEC Article 250.</p>\n<p><strong>System:</strong> All electrodes at a building are bonded into one grounding electrode system. The EGC gives a fault a low-impedance path back to the source — sized by Table 250.122.</p>\n<p><strong>Telecom room:</strong> A grounding busbar (TGB) is the room's single point; every rack, tray, and panel bonds to it with listed connectors.</p>\n<p><strong>Ground loop:</strong> Current between two grounds at different potentials — hum, noise, intermittent faults. Fix by removing the extra path, never by adding grounds.</p>\n<p><strong>Watch out:</strong> Remove paint at bonding points — paint is an insulator.</p>\n<p><strong>Self-check:</strong> Explain grounding vs bonding and a ground loop to a coworker in plain words. If you can, you have this module.</p>\n"
};
