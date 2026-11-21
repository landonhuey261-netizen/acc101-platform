// ele106 - Module 4: Branch Circuits in Commercial Work
module.exports = {
  "number": 4,
  "slug": "branch-circuits-commercial-work",
  "title": "Branch Circuits in Commercial Work",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how commercial branch circuits differ from dwelling branch circuits.",
    "Apply 210.8(B): GFCI protection in non-dwelling occupancies.",
    "Explain why AFCI protection is generally a dwelling rule, not a commercial one.",
    "Apply the commercial receptacle rules: show windows, HVAC, service areas, meeting rooms.",
    "Size branch circuits for continuous commercial loads."
  ],
  "sections": [
    {
      "heading": "Commercial Branch Circuits: The Basics",
      "html": "<p>A commercial branch circuit is the same idea as a residential one — conductors from a panelboard to the outlets — but the rules are different. There is no 6-foot receptacle-spacing rule in a commercial building: 210.52(A) applies to dwellings only. Instead, commercial receptacles are placed where the work needs them: at workstations, at equipment, at show windows, and where the specifications call for them. The electrician follows the drawings and the specs, not a spacing rule.</p><p>Commercial branch circuits are usually 20 amperes, 120 volts for receptacles and 277 volts for lighting, and they run in EMT or MC cable rather than NM cable. NM cable (Article 334) is generally not permitted in commercial buildings of Type III, IV, or V construction above certain heights, and it is never the standard commercial wiring method — conduit and MC cable are. A commercial branch circuit is also more likely to be a multiwire branch circuit, sharing a neutral across three phases so that the neutral carries only the unbalanced current.</p><p>The load on a commercial branch circuit is often continuous: lighting that runs 10 hours a day, computers that run all day, refrigeration that never stops. A continuous load must be sized at 125% (210.19(A)(1)), and the branch-circuit overcurrent device must be rated for that calculated load. A 20-ampere circuit may therefore carry only 16 amperes of continuous load.</p><div class=\"callout\"><strong>Key idea:</strong> No 6-foot rule in commercial work — receptacles go where the drawings and specs put them. Commercial branch circuits are usually 20 A, run in EMT or MC cable, and often carry continuous loads sized at 125%.</div>"
    },
    {
      "heading": "GFCI Protection in Non-Dwelling Occupancies (210.8(B))",
      "html": "<p>Section 210.8(B) requires GFCI protection for 125-volt through 250-volt receptacles in non-dwelling occupancies, in the locations it lists: bathrooms, kitchens, rooftops, outdoors, within 6 feet of a sink, indoor wet locations, locker rooms with showering facilities, garages and service bays, and several more. The 2023 NEC expanded this list, and it now covers most of the places in a commercial building where water and electricity meet.</p><p>GFCI protection in commercial work is often provided by a GFCI breaker in the panelboard, because a commercial building may have dozens of GFCI receptacles and a breaker is easier to find and reset than a receptacle behind a piece of equipment. Either way, the protection must be tested — with the test button — and a GFCI that will not trip must be replaced.</p><p>Section 210.8(D) also requires GFCI protection for specific appliances in commercial buildings: dishwashers, and in the 2023 NEC, ranges and dryers in certain locations. The appliance rules apply in commercial kitchens and laundries just as they do in houses.</p><ul><li>210.8(B): GFCI for 125–250 V receptacles in non-dwelling locations — bathrooms, kitchens, rooftops, outdoors, near sinks, wet locations, locker rooms, garages.</li><li>Commercial GFCI is often a breaker in the panelboard — easier to find and reset.</li><li>210.8(D): GFCI for dishwashers, ranges, and dryers in commercial kitchens and laundries.</li></ul>"
    },
    {
      "heading": "AFCI: A Dwelling Rule, Not a Commercial One",
      "html": "<p>Arc-fault circuit-interrupter (AFCI) protection under 210.12 applies to dwelling units — the rooms listed in that section are dwelling rooms: kitchens, family rooms, dining rooms, living rooms, bedrooms, and similar rooms in a home. A commercial building is not a dwelling unit, so 210.12 does not generally require AFCI protection in offices, stores, or warehouses.</p><p>That does not mean arc faults cannot happen in commercial buildings. It means the Code addresses them differently: commercial protection focuses on ground-fault protection of equipment (230.95), on proper overcurrent protection, and on the wiring methods that prevent arcing in the first place — conduit, proper terminations torqued to the manufacturer's values, and boxes that are not overfilled.</p><p>Some commercial occupancies do have AFCI-like requirements through other articles or through the specifications: dormitories and hotels, which contain dwelling units, follow the dwelling rules for those units. And a specification may call for AFCI protection where the Code does not. The Code is the minimum — the spec can ask for more.</p><div class=\"callout\"><strong>Key idea:</strong> AFCI under 210.12 is a dwelling-unit rule. Commercial buildings rely on GFPE, overcurrent protection, and sound wiring methods — unless the occupancy contains dwelling units, or the spec calls for more.</div>"
    },
    {
      "heading": "Commercial Receptacle Rules: Show Windows, HVAC, Service Areas, Meeting Rooms",
      "html": "<p>Commercial receptacles are required by specific rules, not by a general spacing rule. Section 210.62 requires at least one receptacle for every 12 linear feet of show window, so that window displays can be lit. Section 210.63 requires a receptacle within 25 feet of HVAC equipment, so a service technician has power for tools and test equipment. Section 210.64 requires a receptacle in electrical service areas, so the electrician working on the service has power.</p><p>Section 210.65 requires receptacles in meeting rooms: at least one receptacle for the first 12 feet of wall, and additional receptacles as the room gets larger, so that a meeting room has power for projectors, laptops, and charging. The rule exists because meeting rooms are where people gather with devices that need power — and without the rule, they would have none.</p><p>Each of these receptacles is calculated at 180 volt-amperes under 220.14(I) (except in dwellings), and they are added to the load calculation in Module 8. A receptacle is not free: every one of them adds 180 VA to the service calculation.</p><ul><li>Show windows (210.62): at least one receptacle per 12 linear feet.</li><li>HVAC equipment (210.63): a receptacle within 25 feet. Service areas (210.64): a receptacle in the electrical service area.</li><li>Meeting rooms (210.65): receptacles based on wall length. Each commercial receptacle counts 180 VA (220.14(I)).</li></ul>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>No 6-foot receptacle rule in commercial work — receptacles go where the drawings, specs, and the specific rules put them.</li><li>210.8(B): GFCI for 125–250 V receptacles in non-dwelling locations — bathrooms, kitchens, rooftops, outdoors, near sinks, wet locations, locker rooms, garages.</li><li>210.12 AFCI is a dwelling-unit rule; commercial buildings use GFPE, overcurrent protection, and sound wiring methods.</li><li>Commercial receptacle rules: show windows 210.62 (one per 12 ft), HVAC 210.63 (within 25 ft), service areas 210.64, meeting rooms 210.65.</li><li>Each commercial receptacle counts 180 VA (220.14(I)); continuous loads are sized at 125% (210.19(A)(1)).</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Installing NM cable in a commercial building as if it were a house. NM is generally not permitted in commercial construction — EMT and MC cable are the standard methods.</div><div class=\"callout\"><strong>Common mistake:</strong> Applying the dwelling AFCI list to an office. AFCI under 210.12 is for dwelling units; an office panel does not need AFCI breakers because the Code says so.</div><p><strong>Ready-to-Work link:</strong> If you can list the 210.8(B) GFCI locations, explain why AFCI is a dwelling rule, and name the commercial receptacle rules, you have this module. Module 5 covers commercial lighting systems and controls.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "210.52(A)",
      "def": "Receptacle spacing — a dwelling rule; it does not apply to commercial occupancies."
    },
    {
      "term": "210.8(B)",
      "def": "GFCI protection for 125–250 V receptacles in non-dwelling occupancies."
    },
    {
      "term": "210.12",
      "def": "AFCI protection — a dwelling-unit rule."
    },
    {
      "term": "210.19(A)(1)",
      "def": "Branch-circuit conductors are sized at 125% of continuous load plus 100% of noncontinuous load."
    },
    {
      "term": "210.62",
      "def": "Show windows: at least one receptacle per 12 linear feet."
    },
    {
      "term": "210.63",
      "def": "A receptacle within 25 feet of HVAC equipment."
    },
    {
      "term": "210.64",
      "def": "A receptacle in electrical service areas."
    },
    {
      "term": "210.65",
      "def": "Receptacles in meeting rooms, based on wall length."
    },
    {
      "term": "220.14(I)",
      "def": "Each receptacle outlet in a non-dwelling counts 180 VA."
    },
    {
      "term": "MC cable",
      "def": "Metal-clad cable — a standard commercial wiring method (Article 330)."
    },
    {
      "term": "Multiwire branch circuit",
      "def": "A branch circuit with two or three hots sharing one neutral."
    },
    {
      "term": "GFCI breaker",
      "def": "A circuit breaker with ground-fault protection built in, used to protect a whole branch circuit."
    }
  ],
  "video": {
    "title": "How to Master Commercial Panel Wiring: Tips Electricians Swear By!",
    "embedUrl": "https://www.youtube.com/embed/_SbQcswuzns",
    "note": "This panel-wiring video shows a commercial panel being wired — the branch circuits, the breakers, and the layout. Watch it and count: how many of the branch circuits would need GFCI protection under 210.8(B), and where would you put the GFCI breakers?",
    "more": [
      {
        "title": "Commercial Box Fill Calculations: Sizing Multi-Gang Metal Enclosures!",
        "url": "https://www.youtube.com/watch?v=CjyaDypDkPo"
      },
      {
        "title": "Box Fill Calculations - Electrical Box Fill (THE EASY WAY)",
        "url": "https://www.youtube.com/watch?v=Icrnm6cXsR8"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A commercial branch circuit carries a continuous load of 14 amperes. What is the minimum circuit rating?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Continuous loads are sized at 125% (210.19(A)(1)). Step 2: 14 × 1.25 = 17.5 A. Step 3: The minimum standard rating is a 20-ampere circuit.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A store has 36 linear feet of show window. How many receptacles are required by 210.62?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 210.62 requires at least one receptacle per 12 linear feet of show window. Step 2: 36 ÷ 12 = 3. Step 3: At least three receptacles.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A rooftop HVAC unit needs a service receptacle. How far from the unit must it be?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 210.63 requires a receptacle within 25 feet of HVAC equipment. Step 2: The receptacle must be on the same level as the equipment. Step 3: It must be GFCI-protected, because it is on a rooftop (210.8(B)).</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> An office panelboard has 40 receptacles. What is the receptacle load for the load calculation?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 220.14(I) counts each non-dwelling receptacle at 180 VA. Step 2: 40 × 180 = 7,200 VA. Step 3: The receptacle demand factor of 220.47 is applied later, in the load calculation.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A contractor proposes NM cable for a new office building. What is the problem?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: NM cable is generally not permitted in commercial buildings of Type III, IV, or V construction above certain heights, and it is never the standard commercial method. Step 2: The standard commercial wiring methods are EMT, RMC, and MC cable. Step 3: The proposal must be changed to a permitted wiring method.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Does an office building require AFCI breakers under 210.12? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No — 210.12 applies to dwelling units. Step 2: An office is not a dwelling unit, so the AFCI list does not apply. Step 3: The building still needs GFCI protection under 210.8(B), GFPE under 230.95 where applicable, and sound wiring methods.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The dwelling receptacle-spacing rule (210.52(A)):",
      "choices": [
        "Applies to all buildings",
        "Applies to dwellings only, not to commercial occupancies",
        "Applies to offices only",
        "Was repealed in 2023"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 210.52(A) is a dwelling rule. (a) It does not apply to all buildings. (c) It does not apply to offices. (d) It was not repealed."
    },
    {
      "q": "GFCI protection in non-dwelling occupancies is required by:",
      "choices": [
        "210.8(A)",
        "210.8(B)",
        "210.12",
        "210.52"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 210.8(B) covers non-dwelling occupancies. (a) 210.8(A) covers dwellings. (c) 210.12 is AFCI protection. (d) 210.52 is receptacle spacing."
    },
    {
      "q": "AFCI protection under 210.12 applies to:",
      "choices": [
        "Dwelling units",
        "Offices",
        "Warehouses",
        "All commercial buildings"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 210.12 is a dwelling-unit rule. (b), (c), and (d) Offices, warehouses, and commercial buildings generally do not require AFCI protection under 210.12."
    },
    {
      "q": "Show windows require at least one receptacle per:",
      "choices": [
        "6 linear feet",
        "12 linear feet",
        "25 linear feet",
        "48 linear feet"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 210.62: one per 12 linear feet. (a) 6 feet is the dwelling receptacle rule. (c) 25 feet is the HVAC receptacle distance. (d) 48 inches is the dwelling countertop spacing."
    },
    {
      "q": "A receptacle must be installed within 25 feet of:",
      "choices": [
        "Every window",
        "HVAC equipment",
        "Every door",
        "The panelboard"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 210.63 requires a receptacle within 25 feet of HVAC equipment. (a), (c), and (d) Windows, doors, and panelboards do not trigger the 25-foot rule."
    },
    {
      "q": "Each receptacle outlet in a non-dwelling counts as how many volt-amperes?",
      "choices": [
        "90 VA",
        "120 VA",
        "180 VA",
        "200 VA"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 220.14(I): 180 VA per receptacle. (a) and (b) 90 and 120 VA are too low. (d) 200 VA is the show-window lighting value."
    },
    {
      "q": "A continuous load on a branch circuit is sized at:",
      "choices": [
        "100%",
        "110%",
        "125%",
        "150%"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 210.19(A)(1): continuous loads at 125%. (a) 100% is the noncontinuous figure. (b) 110% is not a Code factor. (d) 150% is too high."
    },
    {
      "q": "The standard commercial wiring methods are:",
      "choices": [
        "NM cable only",
        "EMT, RMC, and MC cable",
        "Knob-and-tube",
        "Extension cords"
      ],
      "answer": 1,
      "explanation": "Correct: (b). EMT, RMC, and MC cable are the standard commercial methods. (a) NM cable is generally not permitted in commercial construction. (c) Knob-and-tube is obsolete. (d) Extension cords are not a wiring method."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Commercial Branch Circuits: Quick Reference</h3>\n<p><strong>Core idea:</strong> Commercial branch circuits follow the drawings and the specific rules, not the dwelling spacing rules. GFCI is required in many places; AFCI is a dwelling rule.</p>\n<p><strong>GFCI (210.8(B)):</strong> Bathrooms, kitchens, rooftops, outdoors, near sinks, wet locations, locker rooms, garages. 125–250 V receptacles.</p>\n<p><strong>AFCI (210.12):</strong> Dwelling units only.</p>\n<p><strong>Receptacle rules:</strong> Show windows 210.62 (one per 12 ft) · HVAC 210.63 (within 25 ft) · service areas 210.64 · meeting rooms 210.65. Each receptacle = 180 VA (220.14(I)).</p>\n<p><strong>Sizing:</strong> Continuous loads at 125% (210.19(A)(1)). Wiring: EMT, RMC, MC cable.</p>\n<p><strong>Self-check:</strong> List five 210.8(B) locations, state the show-window and HVAC rules, and explain why an office does not need AFCI breakers.</p>\n"
};
