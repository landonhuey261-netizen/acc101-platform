module.exports = {
  "number": 5,
  "slug": "fire-alarm-wiring-nec-760",
  "title": "Fire Alarm Wiring & NEC Article 760",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the difference between power-limited (PLFA) and non-power-limited (NPLFA) fire alarm circuits.",
    "Identify FPL, FPLR, and FPLP cable types and where each is used.",
    "Explain Class A and Class B circuit wiring and what happens when a wire breaks.",
    "Describe separation rules between fire alarm cable and power conductors.",
    "Explain why fire alarm wiring must be identified and protected."
  ],
  "sections": [
    {
      "heading": "Power-Limited vs Non-Power-Limited Fire Alarm Circuits",
      "html": "<p>NEC Article 760 divides fire alarm circuits into two families. <strong>Non-power-limited fire alarm (NPLFA)</strong> circuits are the higher-energy circuits: they operate at up to 120 volts, they are wired much like ordinary power circuits, and they need the same protection — conduit or listed cable, overcurrent protection, and the wiring methods of Chapters 1 through 4 of the NEC. <strong>Power-limited fire alarm (PLFA)</strong> circuits are the low-energy circuits fed by a listed power-limited source, and they are the ones you will meet most often: the signaling line circuits and notification circuits of a modern addressable panel.</p><p>The distinction matters because it decides everything downstream: the cable type, the wiring method, and the separation rules. A PLFA circuit can often be run in listed fire alarm cable without conduit; an NPLFA circuit cannot. The source decides the class, just as in Article 725 — the panel's listed power-limited output makes the circuit power-limited, and a circuit fed from a non-power-limited source is NPLFA even if it carries a low voltage. Never assume a circuit is power-limited because it looks small.</p>"
    },
    {
      "heading": "Fire Alarm Cable: FPL, FPLR, and FPLP",
      "html": "<p>Fire alarm cable is marked with its rating, and the rating tells you where the cable may go. <strong>FPL</strong> is general-purpose fire alarm cable, listed for general use. <strong>FPLR</strong> is riser-rated: it is listed to resist spreading fire from floor to floor through a vertical shaft, and it is the minimum for vertical runs between floors. <strong>FPLP</strong> is plenum-rated: it is listed for use in air-handling spaces such as the space above a drop ceiling used as a return-air plenum, where a burning cable would spread smoke through the ventilation system.</p><p>The hierarchy is simple: plenum cable may be used anywhere, riser cable may be used in risers and general locations but not in plenums, and general-purpose cable may not be used in risers or plenums. The jacket is marked — FPL, FPLR, or FPLP — and the inspector will check it. Fire alarm cable is also usually red, which is a trade convention that helps everyone identify it, but the color is not the listing: the printed marking on the jacket is what counts.</p><div class=\"callout\"><strong>Key idea:</strong> The jacket marking decides where the cable can go: FPLP anywhere, FPLR in risers and general use, FPL general use only. Color is a helpful convention, not a listing.</div>"
    },
    {
      "heading": "Class A and Class B Circuits: What Happens When a Wire Breaks",
      "html": "<p>Fire alarm circuits are wired in two styles. In a <strong>Class B</strong> circuit, devices are wired in a single path from the panel, and the end of the circuit is terminated with an end-of-line resistor or device that lets the panel supervise the wiring. If a wire breaks, the devices beyond the break stop working, and the panel reports a trouble signal. Class B is the common, economical style, and it is used in most small and medium systems.</p><p>In a <strong>Class A</strong> circuit, the wiring leaves the panel and returns to the panel, forming a loop. If a wire breaks anywhere, the panel can feed the circuit from the other direction, so every device keeps working — the system survives a single open fault. Class A costs more in cable and labor, and it is specified where the system must keep working through a fault: high-rise buildings, hospitals, and other critical occupancies. The drawings will state the class, and the technician must wire it exactly as drawn — a Class A loop wired as a Class B run is not a Class A circuit.</p>"
    },
    {
      "heading": "Separation, Identification, and Protection",
      "html": "<p>Article 760 requires fire alarm conductors to be separated from power conductors so that a fault in a power circuit cannot take out the fire alarm, and so that electrical noise from power wiring does not cause false alarms. Power-limited fire alarm cable must not be run in the same raceway, box, or cable tray compartment as power conductors, with limited exceptions the article spells out. Where fire alarm cable shares a space with other low-voltage cable, it must be identified — usually by its red jacket and by labeling — so that a future worker does not cut it thinking it is a data cable.</p><p>Fire alarm wiring must also be protected from physical damage: cable run through a wall or exposed where it can be struck must be in conduit or otherwise protected, and cable in a plenum or riser must carry the right rating. All of this is life-safety work, and it is inspected as life-safety work: the inspector will check the cable type, the separation, the terminations, and the supervision, and the system will be tested end to end before it is accepted. A fire alarm system that is not tested is not a fire alarm system — it is a guess.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>NPLFA circuits are higher-energy and wired like power circuits; PLFA circuits are power-limited by a listed source and are the common case.</li><li>FPL is general-purpose, FPLR is riser-rated, FPLP is plenum-rated — the jacket marking decides where the cable may go.</li><li>Class B circuits end in an end-of-line device; a break disables devices beyond it. Class A circuits loop back to the panel and survive a single open fault.</li><li>Fire alarm cable must be separated from power conductors, identified, and protected from damage.</li><li>The source decides the class — never assume a circuit is power-limited because it looks small.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Running general-purpose FPL cable in a riser or a plenum. The cable will fail inspection and must be replaced — check the jacket marking before the cable goes in, not after.</div><div class=\"callout\"><strong>Common mistake:</strong> Wiring a Class A loop as a Class B run and leaving the return leg off. The panel cannot feed the circuit from the other direction, so the loop's survivability is gone even though the system appears to work.</div><p><strong>Ready-to-Work link:</strong> If you can explain PLFA vs NPLFA, pick the right cable for a riser and a plenum, and describe what happens when a Class B wire breaks, you have this module. Module 6 covers what the system does with all of this: notification and power.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "NPLFA",
      "def": "Non-power-limited fire alarm circuit — higher-energy fire alarm wiring, installed like a power circuit."
    },
    {
      "term": "PLFA",
      "def": "Power-limited fire alarm circuit — low-energy fire alarm wiring fed by a listed power-limited source."
    },
    {
      "term": "FPL",
      "def": "General-purpose fire alarm cable, listed for general use."
    },
    {
      "term": "FPLR",
      "def": "Riser-rated fire alarm cable, listed for vertical runs between floors."
    },
    {
      "term": "FPLP",
      "def": "Plenum-rated fire alarm cable, listed for air-handling spaces."
    },
    {
      "term": "Class A circuit",
      "def": "A fire alarm circuit wired as a loop returning to the panel, so it survives a single open fault."
    },
    {
      "term": "Class B circuit",
      "def": "A fire alarm circuit wired in a single path ending in an end-of-line device; a break disables devices beyond it."
    },
    {
      "term": "End-of-line resistor/device",
      "def": "The device at the end of a Class B circuit that lets the panel supervise the wiring for opens."
    },
    {
      "term": "Signaling line circuit (SLC)",
      "def": "The circuit connecting addressable devices to the panel."
    },
    {
      "term": "Supervision",
      "def": "The panel's continuous monitoring of its circuits for opens, shorts, and ground faults."
    },
    {
      "term": "Riser",
      "def": "A vertical shaft or run carrying cable between floors."
    },
    {
      "term": "Plenum",
      "def": "An air-handling space, such as above a drop ceiling used as a return-air path, where cable must be plenum-rated."
    },
    {
      "term": "NEC Article 760",
      "def": "The NEC article covering fire alarm systems, PLFA and NPLFA circuits, and fire alarm cable."
    }
  ],
  "video": {
    "title": "Conventional Fire Alarm System Wiring Diagram",
    "embedUrl": "https://www.youtube.com/embed/mNVhdSyIqx4",
    "note": "Watch the video, then work the assignment below. As you watch, note every term from this module's key terms list and write down one question the video raises for you.",
    "more": [
      {
        "title": "Introduction to Fire Alarm Systems and Main Components",
        "url": "https://www.youtube.com/watch?v=gV9znH4RQY0"
      },
      {
        "title": "Fire Alarm Control Panel and Power Supply",
        "url": "https://www.youtube.com/watch?v=L_7fLtuXe5Q"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A fire alarm circuit is fed from a listed power-limited output of the FACP. Is it PLFA or NPLFA, and what cable may be used?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: PLFA — the listed power-limited source makes it power-limited. Step 2: Listed fire alarm cable (FPL, FPLR, or FPLP as the location requires) may be used, often without conduit. Step 3: The cable rating must still match the location — riser or plenum.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A cable run goes up a vertical shaft between floors, then across a ceiling space used as a return-air plenum. Which cable ratings are needed for each part?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The vertical shaft needs riser-rated cable at minimum — FPLR (FPLP also works). Step 2: The plenum space needs plenum-rated cable — FPLP only. Step 3: General-purpose FPL may not be used in either location.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A Class B notification circuit has a break in the middle. What happens to the devices on each side of the break, and what does the panel report?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Devices on the panel side of the break keep working. Step 2: Devices beyond the break stop working — they have no path back to the panel. Step 3: The panel reports a trouble signal because the end-of-line device is no longer seen.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> The same break happens on a Class A circuit. What is different, and why is Class A specified in hospitals?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: In a Class A loop the panel feeds the circuit from both directions, so all devices keep working despite the break. Step 2: The panel still reports a trouble signal so the fault is found and repaired. Step 3: Hospitals specify Class A because the system must keep working through a single fault — lives depend on it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Why must fire alarm cable be separated from power conductors, and how is it identified?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Separation prevents a power fault from taking out the fire alarm and prevents electrical noise from causing false alarms. Step 2: Fire alarm cable is identified by its red jacket (a trade convention) and by its printed FPL/FPLR/FPLP marking, plus labeling. Step 3: The printed marking is the listing — color alone is not proof.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A job uses FPL cable everywhere, including a riser and a plenum. What will the inspector say, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The inspector will fail the riser and plenum runs — FPL is general-purpose only. Step 2: Replace the riser run with FPLR (or FPLP) and the plenum run with FPLP. Step 3: Check jacket markings before installing cable on the next job — the fix after installation costs far more than the check before it.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A PLFA circuit is:",
      "choices": [
        "A fire alarm circuit fed by a listed power-limited source",
        "A fire alarm circuit wired like a 120 V power circuit",
        "A circuit with no power source",
        "A data cable"
      ],
      "answer": 0,
      "explanation": "Correct: (a). PLFA means power-limited, fed by a listed power-limited source. (b) That describes an NPLFA circuit. (c) Every circuit has a source. (d) A data cable is Article 800 work, not a fire alarm circuit."
    },
    {
      "q": "FPLP cable is required for:",
      "choices": [
        "General-purpose use only",
        "Vertical runs between floors",
        "Air-handling (plenum) spaces",
        "Outdoor direct burial"
      ],
      "answer": 2,
      "explanation": "Correct: (c). FPLP is plenum-rated for air-handling spaces. (a) General-purpose cable is FPL. (b) Riser runs need FPLR at minimum. (d) Direct burial needs a cable listed for that use."
    },
    {
      "q": "In a Class B fire alarm circuit, a wire break causes:",
      "choices": [
        "Nothing — the system keeps working",
        "Devices beyond the break to stop working, and a trouble signal",
        "The whole building to lose power",
        "The panel to shut down"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Devices beyond the break lose their path to the panel, and the panel reports trouble. (a) That is a Class A loop. (c) A fire alarm fault does not cut building power. (d) The panel stays on and reports the trouble."
    },
    {
      "q": "A Class A fire alarm circuit survives a single open fault because:",
      "choices": [
        "It has no wire",
        "It loops back to the panel and can be fed from either direction",
        "It uses thicker wire",
        "It has two panels"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The loop returns to the panel, so the panel feeds the circuit from the other direction after a break. (a) It uses wire like any circuit. (c) Wire size is not the reason. (d) One panel feeds the loop."
    },
    {
      "q": "The device at the end of a Class B circuit that lets the panel supervise the wiring is the:",
      "choices": [
        "End-of-line resistor or device",
        "Smoke detector",
        "Battery",
        "Pull station"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The end-of-line device lets the panel see the circuit as complete and detect an open. (b) A smoke detector is an initiating device. (c) The battery is the standby power source. (d) A pull station is an initiating device."
    },
    {
      "q": "Fire alarm cable must be separated from power conductors because:",
      "choices": [
        "The colors clash",
        "A power fault could disable the fire alarm and noise could cause false alarms",
        "Fire alarm cable is too expensive",
        "Power cable is always red"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Separation protects the life-safety system from power faults and interference. (a) Color is not a code reason. (c) Cost is not a code reason. (d) Power cable is not always red."
    },
    {
      "q": "Which cable may be used anywhere — general, riser, or plenum?",
      "choices": [
        "FPL",
        "FPLR",
        "FPLP",
        "None of them"
      ],
      "answer": 2,
      "explanation": "Correct: (c). FPLP is plenum-rated and may be used in all three locations. (a) FPL is general-purpose only. (b) FPLR may be used in risers and general locations, but not in plenums. (d) FPLP may be used anywhere."
    },
    {
      "q": "The red color of fire alarm cable is:",
      "choices": [
        "The listing itself",
        "A trade convention that helps identify it; the printed jacket marking is the listing",
        "Required to be red by law in all cases",
        "Only for decoration"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Red is a helpful convention; the printed FPL/FPLR/FPLP marking is what proves the listing. (a) Color alone is not a listing. (c) The NEC requires the listing marking, not a specific color. (d) Identification is a real function, not decoration."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Fire Alarm Wiring & NEC 760: Quick Reference</h3>\n<p><strong>Core idea:</strong> Article 760 divides fire alarm circuits into PLFA (power-limited, listed source) and NPLFA (wired like power circuits). The source decides the class.</p>\n<p><strong>Cable:</strong> FPL general use · FPLR risers · FPLP plenums. FPLP may be used anywhere; FPL may not be used in risers or plenums.</p>\n<p><strong>Circuits:</strong> Class B — single path, end-of-line device, break disables devices beyond it · Class A — loop back to the panel, survives a single open fault.</p>\n<p><strong>Rules:</strong> Separate fire alarm cable from power conductors; identify it; protect it from damage; test the system end to end.</p>\n<p><strong>Self-check:</strong> Pick the right cable for a riser and a plenum, and explain what a break does on Class A vs Class B. If you can, you have this module.</p>\n"
};
