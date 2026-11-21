// ele105 - Module 4: Receptacles: GFCI & AFCI Protection
module.exports = {
  "number": 4,
  "slug": "receptacles-gfci-afci-protection",
  "title": "Receptacles: GFCI & AFCI Protection",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how a GFCI works and what a Class A GFCI trips at.",
    "List the dwelling locations where GFCI protection is required by 210.8(A).",
    "Explain how an AFCI works and where AFCI protection is required by 210.12.",
    "Wire a GFCI receptacle correctly: line vs. load.",
    "Explain dual-function breakers and when to use them."
  ],
  "sections": [
    {
      "heading": "How a GFCI Works",
      "html": "<p>A ground-fault circuit interrupter (GFCI) watches the current going out on the hot conductor and the current coming back on the neutral. In a healthy circuit the two are equal. If some current leaks to ground — through a person, for example — the returning current is smaller than the outgoing current, and the GFCI trips. A Class A GFCI trips when the difference reaches 4 to 6 milliamperes, in a fraction of a second.</p><p>Four to six milliamperes is a tiny current — far below what a breaker trips at, and below the level that can stop a heart. That is the point: an ordinary 20-ampere breaker protects wires from overheating, but it will happily let a lethal shock current flow, because a shock is only a fraction of an ampere. The GFCI protects people; the breaker protects wires.</p><p>A GFCI does not need a grounding conductor to work. It compares hot and neutral, not ground, so it can protect an old two-wire circuit too — and the NEC permits GFCI receptacles as the fix for ungrounded receptacles in older homes, marked “No Equipment Ground.” A GFCI will not protect against a shock between hot and neutral with no current leaking to ground, and it is not a substitute for safe work practices.</p><div class=\"callout\"><strong>Key idea:</strong> A Class A GFCI trips at 4–6 mA of leakage. The breaker protects wires; the GFCI protects people.</div>"
    },
    {
      "heading": "Where GFCI Protection Is Required",
      "html": "<p>Section 210.8(A) requires GFCI protection for 125-volt through 250-volt receptacles in dwelling units in these locations: bathrooms, garages and accessory buildings, outdoors, crawl spaces, basements, kitchens (receptacles serving countertop surfaces, and receptacles within 6 feet of the top inside edge of a sink), sinks (within 6 feet of the top inside edge), laundry areas, and boathouses. The 2023 NEC expanded GFCI protection to 250-volt receptacles in these areas too — so a 240-volt receptacle in a garage or laundry area needs GFCI protection as well.</p><p>The rule is about water and ground contact: every listed location is a place where a person is likely to be wet, barefoot, or in contact with the earth or concrete while touching an appliance. Kitchens and bathrooms are the obvious ones; garages, basements, and crawl spaces are the ones beginners forget.</p><p>GFCI protection can be provided by a GFCI receptacle or a GFCI breaker. A GFCI receptacle protects itself and, when wired through its load terminals, every receptacle downstream of it. A GFCI breaker protects the whole circuit. Either is compliant — the choice is about cost, access to the test button, and whether the whole circuit needs protection.</p><ul><li>GFCI required (210.8(A)): bathrooms, garages, outdoors, crawl spaces, basements, kitchens, sinks, laundry areas, boathouses.</li><li>2023 NEC: GFCI applies to 125-volt through 250-volt receptacles in those areas.</li><li>Protection by GFCI receptacle or GFCI breaker; a receptacle's load terminals protect downstream receptacles.</li></ul>"
    },
    {
      "heading": "Line vs. Load: Wiring a GFCI Receptacle",
      "html": "<p>A GFCI receptacle has two sets of terminals: line and load. The line terminals connect to the power coming from the panel. The load terminals connect to the receptacles downstream that the GFCI will protect. Wiring the incoming power to the load terminals, or the downstream receptacles to the line terminals, defeats the protection — the downstream receptacles will work, but they will not be GFCI-protected, and the GFCI may not test correctly.</p><p>The correct sequence is: turn the circuit off and verify it is dead, connect the incoming hot to the brass line terminal and the incoming neutral to the silver line terminal, connect the downstream hot and neutral to the load terminals, connect all grounds together and to the green ground screw, fold the wires neatly into the box, mount the device, and test with the test and reset buttons. The test button simulates a ground fault; if the receptacle does not trip, the wiring or the device is wrong.</p><p>GFCI receptacles should be tested monthly by pressing the test button. A GFCI that will not trip, or will not reset, has failed and must be replaced. A failed GFCI that still passes power is more dangerous than no GFCI at all, because it gives a false sense of safety.</p><div class=\"callout\"><strong>Key idea:</strong> Line = power from the panel. Load = downstream receptacles the GFCI protects. Swap them and the downstream receptacles lose protection.</div>"
    },
    {
      "heading": "How an AFCI Works and Where It Is Required",
      "html": "<p>An arc-fault circuit interrupter (AFCI) watches the waveform of the current for the signature of an arc — the sputtering, irregular current of a loose connection, a damaged cord, or a nail through a cable. A normal breaker cannot see an arc, because an arcing fault may draw less current than the breaker's rating. The AFCI sees the arc's pattern and trips before the arc can start a fire.</p><p>Section 210.12 requires AFCI protection for 120-volt, 15- and 20-ampere branch circuits supplying outlets or devices in dwelling-unit kitchens, family rooms, dining rooms, living rooms, parlors, libraries, dens, bedrooms, sunrooms, recreation rooms, closets, hallways, laundry areas, and similar rooms. In practice that means nearly every 120-volt circuit in a house except the ones the Code excludes — and the protection is usually provided by an AFCI breaker in the panel.</p><p>A dual-function breaker combines AFCI and GFCI protection in one device, and it is the usual choice where both are required — for example, a kitchen small-appliance circuit, which needs AFCI protection as a kitchen circuit and GFCI protection as a countertop circuit. One dual-function breaker satisfies both rules. AFCI and GFCI protect against different hazards — fire and shock — and neither replaces the other.</p><ul><li>AFCI detects arcing faults that a normal breaker cannot see (210.12).</li><li>AFCI required on 120 V, 15/20 A circuits in nearly every living area of a dwelling.</li><li>Dual-function breakers provide AFCI + GFCI in one device — the usual choice for kitchens and laundry areas.</li></ul>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>GFCI: trips at 4–6 mA of leakage; protects people from shock. Breakers protect wires.</li><li>GFCI required (210.8(A)): bathrooms, garages, outdoors, crawl spaces, basements, kitchens, sinks, laundry, boathouses; 125–250 V in the 2023 NEC.</li><li>Line terminals = power in; load terminals = downstream receptacles protected.</li><li>AFCI (210.12): detects arcing faults; required on 120 V, 15/20 A circuits in nearly every living area.</li><li>Dual-function breakers give AFCI + GFCI together.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Wiring the incoming power to the load terminals of a GFCI receptacle. The downstream receptacles will work but will not be protected.</div><div class=\"callout\"><strong>Common mistake:</strong> Assuming a GFCI protects against every shock. It cannot detect a shock between hot and neutral with no leakage to ground.</div><p><strong>Ready-to-Work link:</strong> If you can name the GFCI locations, explain line vs. load, and state where AFCI is required, you have this module. Module 5 covers lighting layout, switching, and controls.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "GFCI",
      "def": "Ground-fault circuit interrupter; trips on leakage current to protect people from shock."
    },
    {
      "term": "Class A GFCI",
      "def": "A GFCI that trips at 4 to 6 milliamperes of ground-fault current."
    },
    {
      "term": "AFCI",
      "def": "Arc-fault circuit interrupter; trips on the signature of an arcing fault to prevent fire."
    },
    {
      "term": "Dual-function breaker",
      "def": "A breaker providing both AFCI and GFCI protection."
    },
    {
      "term": "210.8(A)",
      "def": "GFCI protection required for 125–250 V receptacles in listed dwelling locations."
    },
    {
      "term": "210.12",
      "def": "AFCI protection required for 120 V, 15/20 A branch circuits in listed dwelling rooms."
    },
    {
      "term": "Line terminals",
      "def": "The GFCI receptacle terminals connected to power from the panel."
    },
    {
      "term": "Load terminals",
      "def": "The GFCI receptacle terminals connected to downstream receptacles the GFCI protects."
    },
    {
      "term": "Ground fault",
      "def": "Current leaking from a hot conductor to ground through an unintended path, such as a person."
    },
    {
      "term": "Arc fault",
      "def": "A sputtering, high-resistance fault from a loose connection or damaged conductor; a fire hazard."
    },
    {
      "term": "Tamper-resistant receptacle",
      "def": "A receptacle with shutters that block foreign objects; required in dwellings by 406.12."
    },
    {
      "term": "Weather-resistant receptacle",
      "def": "A receptacle listed for outdoor use; required outdoors by 406.9."
    },
    {
      "term": "Test button",
      "def": "The GFCI button that simulates a ground fault; press monthly to verify the device trips."
    }
  ],
  "video": {
    "title": "How to Wire a GFCI Outlet from a Standard Outlet",
    "embedUrl": "https://www.youtube.com/embed/csiik8GBVpc",
    "note": "Watch a standard outlet being replaced with a GFCI outlet step by step, with line vs. load explained as the wires are connected. Pause at each connection and say which terminal it goes to before the presenter does.",
    "more": [
      {
        "title": "How to Wire a GFCI Outlet and Avoid Common Mistakes",
        "url": "https://www.youtube.com/watch?v=M3OoHkI0pUA"
      },
      {
        "title": "How to Wire a GFCI Outlet - What's Line vs Load?",
        "url": "https://www.youtube.com/watch?v=Uop79H_iqoQ"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A GFCI receptacle will not trip when the test button is pressed, but it still passes power. What is the correct call?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The GFCI has failed and must be replaced. Step 2: A GFCI that passes power without tripping gives a false sense of safety. Step 3: Replace it with the circuit de-energized and locked out/tagged out under a licensed supervisor, then test the new device.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Which receptacles in a house need GFCI protection? List at least six locations.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Bathrooms, garages, outdoors, crawl spaces, basements, kitchens (countertop and within 6 ft of a sink), sinks, laundry areas, and boathouses (210.8(A)). Step 2: In the 2023 NEC this covers 125-volt through 250-volt receptacles in those areas. Step 3: Bedrooms and living rooms do not need GFCI (they need AFCI).</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A bathroom has one GFCI receptacle and one standard receptacle downstream of it. The standard receptacle is wired to the GFCI's line terminals. Is it protected?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No. Step 2: Only receptacles wired to the load terminals are protected by the GFCI. Step 3: The fix is to move the downstream receptacle's wires to the load terminals, with the circuit de-energized and locked out/tagged out under a licensed supervisor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A kitchen small-appliance circuit needs both AFCI and GFCI protection. What single device satisfies both, and why does the circuit need both?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A dual-function (AFCI/GFCI) breaker. Step 2: The circuit needs AFCI because it is a kitchen circuit under 210.12. Step 3: It needs GFCI because it serves countertop receptacles under 210.8(A). The two protections guard against different hazards — fire and shock.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A bedroom circuit has an AFCI breaker. A nail through the cable causes arcing that draws 8 amperes. Will the 20-ampere breaker trip? Will the AFCI trip?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The 20-ampere breaker will not trip — 8 amperes is below its rating. Step 2: The AFCI should trip, because it detects the arc's waveform pattern, not just the current level. Step 3: That is the point of AFCI protection: arcing faults start fires at currents a normal breaker ignores.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> An old house has two-wire receptacles with no grounding conductor. Can GFCI protection be added, and how must the receptacles be marked?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Yes — a GFCI works by comparing hot and neutral, so it does not need a grounding conductor. Step 2: The NEC permits GFCI receptacles as the fix for ungrounded receptacles. Step 3: Each protected receptacle must be marked “No Equipment Ground.”</p>"
    }
  ],
  "quiz": [
    {
      "q": "A Class A GFCI trips when ground-fault current reaches:",
      "choices": [
        "0.5 milliamperes",
        "4 to 6 milliamperes",
        "20 milliamperes",
        "30 milliamperes"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Class A GFCIs trip at 4–6 mA. (a) 0.5 mA is below the trip range. (c) and (d) 20 and 30 mA are above the Class A trip level."
    },
    {
      "q": "A GFCI protects people by:",
      "choices": [
        "Tripping on overloads",
        "Comparing hot and neutral current and tripping on a difference",
        "Tripping on high voltage",
        "Grounding the appliance"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A GFCI compares outgoing and returning current and trips on leakage. (a) Overloads are the breaker's job. (c) High voltage is not what a GFCI detects. (d) Grounding is a separate function."
    },
    {
      "q": "Which location does NOT require GFCI protection under 210.8(A)?",
      "choices": [
        "Bathroom",
        "Garage",
        "Bedroom",
        "Kitchen countertop"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Bedrooms need AFCI, not GFCI. (a), (b), and (d) Bathrooms, garages, and kitchen countertops all require GFCI."
    },
    {
      "q": "On a GFCI receptacle, the incoming power from the panel connects to the:",
      "choices": [
        "Load terminals",
        "Line terminals",
        "Ground screw only",
        "Either set — it does not matter"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Incoming power goes to the line terminals. (a) Load terminals feed downstream protected receptacles. (c) The ground screw is for the grounding conductor only. (d) Swapping line and load defeats downstream protection."
    },
    {
      "q": "AFCI protection is required by 210.12 on:",
      "choices": [
        "240-volt circuits only",
        "120-volt, 15- and 20-ampere branch circuits in listed dwelling rooms",
        "All circuits in a house",
        "Outdoor circuits only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 210.12 covers 120 V, 15/20 A circuits in the listed rooms. (a) AFCI applies to 120-volt circuits, not 240-volt. (c) Not all circuits — the section lists specific rooms. (d) Outdoor circuits need GFCI, not AFCI."
    },
    {
      "q": "An AFCI detects:",
      "choices": [
        "Overloads",
        "Ground faults",
        "Arcing faults that a normal breaker cannot see",
        "High voltage"
      ],
      "answer": 2,
      "explanation": "Correct: (c). An AFCI detects the waveform signature of arcing faults. (a) Overloads trip a normal breaker. (b) Ground faults trip a GFCI. (d) High voltage is not an AFCI function."
    },
    {
      "q": "A dual-function breaker provides:",
      "choices": [
        "Two 20-ampere circuits",
        "AFCI and GFCI protection in one device",
        "Two-pole 240-volt protection",
        "Surge protection only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Dual-function means AFCI plus GFCI in one breaker. (a) It is one circuit, not two. (c) Two-pole breakers are a different device. (d) Surge protection is a separate device."
    },
    {
      "q": "GFCI receptacles should be tested:",
      "choices": [
        "Once a year",
        "Monthly, by pressing the test button",
        "Only when they trip",
        "Never — they test themselves"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Manufacturers recommend monthly testing with the test button. (a) Once a year is too rare. (c) Waiting for a trip is not a test. (d) GFCIs do not test themselves."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — GFCI &amp; AFCI Protection: Quick Reference</h3>\n<p><strong>Core idea:</strong> GFCI protects people from shock (trips at 4–6 mA of leakage). AFCI protects against fire from arcing faults. The breaker protects wires.</p>\n<p><strong>GFCI locations (210.8(A)):</strong> Bathrooms · garages · outdoors · crawl spaces · basements · kitchens · sinks · laundry · boathouses. 125–250 V in the 2023 NEC.</p>\n<p><strong>Line vs. load:</strong> Line = power in from the panel. Load = downstream receptacles protected. Swap them and protection is lost.</p>\n<p><strong>AFCI (210.12):</strong> 120 V, 15/20 A circuits in kitchens, family, dining, living, bedrooms, sunrooms, recreation, closets, hallways, laundry, and similar rooms.</p>\n<p><strong>Dual-function breaker:</strong> AFCI + GFCI in one device — the usual choice where both are required.</p>\n<p><strong>Self-check:</strong> Name six GFCI locations, explain line vs. load, and state where AFCI is required.</p>\n"
};
