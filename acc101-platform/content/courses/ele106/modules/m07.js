// ele106 - Module 7: Hazardous (Classified) Locations (Article 500)
module.exports = {
  "number": 7,
  "slug": "hazardous-classified-locations",
  "title": "Hazardous (Classified) Locations (Article 500)",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the Class, Division, and Group system of Article 500.",
    "Identify Class I, II, and III locations and their Groups.",
    "Explain Division 1 versus Division 2.",
    "Apply the temperature-code (T-code) system.",
    "Explain sealing, wiring methods, and equipment marking in classified locations."
  ],
  "sections": [
    {
      "heading": "Why Some Locations Are Classified",
      "html": "<p>Most buildings are ordinary locations: the wiring methods of Chapters 1–4 apply, and the equipment is standard. A hazardous (classified) location is different: flammable gases, vapors, dusts, or fibers are present in the air in enough quantity that an arc or a hot surface could ignite them. In those locations, Article 500 and Articles 501–516 add rules on top of the general rules — on the wiring methods, the equipment, the sealing, and the temperature of every surface.</p><p>The places you will meet: a paint spray booth, a gas station, a grain elevator, a chemical plant, a fuel storage room, a repair garage. In each of them, the classification is made by the engineer or the authority having jurisdiction (AHJ), based on the material present and how often it is in the air. The electrician's job is to read the classification on the drawings and install the wiring and equipment that the classification requires.</p><p>The stakes are high: an ordinary switch arcing in a paint booth can ignite the vapor and destroy the building. The classified-location rules exist so that the electrical installation cannot be the ignition source.</p><div class=\"callout\"><strong>Key idea:</strong> A classified location has flammable gas, vapor, dust, or fiber in the air in enough quantity to ignite. Article 500 adds rules so the electrical installation cannot be the ignition source.</div>"
    },
    {
      "heading": "Classes and Groups",
      "html": "<p>Article 500 divides classified locations into three classes by the kind of material. Class I is flammable gases or vapors: gasoline, natural gas, paint solvents, hydrogen. Class II is combustible dusts: grain dust, coal dust, metal dust, flour. Class III is ignitable fibers and flyings: cotton, wood shavings, sawdust in the air. The class tells you what kind of hazard you are dealing with.</p><p>Classes I and II are further divided into groups by the specific material. Class I Groups are A (acetylene), B (hydrogen), C (ethylene), and D (propane and gasoline). Class II Groups are E (metal dusts), F (carbonaceous dusts such as coal), and G (grain dusts such as flour and grain). The group matters because the equipment must be listed for the group — a device listed for Group D is not automatically suitable for Group B.</p><p>Class III has no groups, because fibers and flyings are handled by keeping them out of the equipment rather than by containing an explosion. The wiring methods for Class III are simpler, but the equipment must still be designed so that fibers cannot accumulate on hot surfaces.</p><ul><li>Class I: flammable gases or vapors. Groups A acetylene, B hydrogen, C ethylene, D propane/gasoline.</li><li>Class II: combustible dusts. Groups E metal, F carbonaceous, G grain.</li><li>Class III: ignitable fibers and flyings. No groups.</li></ul>"
    },
    {
      "heading": "Division 1 versus Division 2",
      "html": "<p>Each class is divided into two divisions by how often the hazard is present. Division 1 is where the hazard is present under normal operating conditions — inside a paint spray booth while spraying is going on, or inside a tank that holds flammable liquid. Division 2 is where the hazard is present only under abnormal conditions — a leak, a spill, or a failure — such as the area around a gas pump, where vapor is present only if something goes wrong.</p><p>Division 1 has the strictest rules: explosionproof equipment, sealed conduit, and wiring methods that contain an explosion if one happens inside the equipment. Division 2 has less strict rules, because the hazard is not normally present: the equipment must not arc under normal operation, and it must be suitable for the location, but it does not need to be explosionproof.</p><p>The division is marked on the drawings, and the electrician must know which division each area is in. Installing Division 2 equipment in a Division 1 location is a violation that puts the building at risk — and the inspector will check the equipment markings against the drawings.</p><div class=\"callout\"><strong>Key idea:</strong> Division 1: hazard present under normal conditions — strictest rules. Division 2: hazard present only under abnormal conditions — less strict. The division is on the drawings; the equipment must match it.</div>"
    },
    {
      "heading": "Temperature Codes (T-Codes)",
      "html": "<p>Every piece of equipment in a classified location has a temperature code (T-code) that states the hottest surface temperature it will reach. The codes run from T1 (450°C) down to T6 (85°C): T1 450°C, T2 300°C, T3 200°C, T4 135°C, T5 100°C, T6 85°C. The equipment's T-code must be lower than the ignition temperature of the material in the location — a device marked T3 (200°C) may not be used where the gas ignites at 180°C.</p><p>The T-code is part of the equipment marking, along with the class, division, and group. The marking is the electrician's check: before installing a device in a classified location, read its marking and compare it with the classification on the drawings. If the marking does not cover the class, division, group, and temperature of the location, the device does not go in.</p><p>Sealing is the other key rule in Class I locations: conduit runs must be sealed (501.15) so that gas or vapor cannot travel through the conduit from a classified area into an ordinary area. A seal is a fitting filled with sealing compound, installed at the boundary of the classified location and at the equipment. An unsealed conduit is a pipe that carries flammable vapor straight into the building.</p><ul><li>T-codes: T1 450°C, T2 300°C, T3 200°C, T4 135°C, T5 100°C, T6 85°C. The device's T-code must be below the material's ignition temperature.</li><li>Equipment marking shows class, division, group, and T-code — check it against the drawings before installing.</li><li>Sealing (501.15): conduit must be sealed at the boundary of a Class I location so vapor cannot travel through it.</li></ul>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Class I: gases/vapors. Class II: dusts. Class III: fibers/flyings.</li><li>Groups: Class I A acetylene, B hydrogen, C ethylene, D propane. Class II E metal, F carbonaceous, G grain.</li><li>Division 1: hazard under normal conditions. Division 2: hazard only under abnormal conditions.</li><li>T-codes: T1 450°C down to T6 85°C. The device's T-code must be below the material's ignition temperature.</li><li>Sealing (501.15) stops vapor traveling through conduit. Equipment marking must match the classification.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Installing Division 2 equipment in a Division 1 location. The division is on the drawings, and the equipment marking must match it.</div><div class=\"callout\"><strong>Common mistake:</strong> Forgetting the conduit seal at the boundary of a Class I location. An unsealed conduit carries flammable vapor into the ordinary part of the building.</div><p><strong>Ready-to-Work link:</strong> If you can name the three classes, the groups, the divisions, and the T-codes, you have this module. Module 8 covers commercial load calculations.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Hazardous (classified) location",
      "def": "A location where flammable gas, vapor, dust, or fiber is present in enough quantity to ignite (Article 500)."
    },
    {
      "term": "Class I",
      "def": "Flammable gases or vapors."
    },
    {
      "term": "Class II",
      "def": "Combustible dusts."
    },
    {
      "term": "Class III",
      "def": "Ignitable fibers and flyings."
    },
    {
      "term": "Group A",
      "def": "Acetylene (Class I)."
    },
    {
      "term": "Group B",
      "def": "Hydrogen (Class I)."
    },
    {
      "term": "Group C",
      "def": "Ethylene (Class I)."
    },
    {
      "term": "Group D",
      "def": "Propane and gasoline (Class I)."
    },
    {
      "term": "Group E",
      "def": "Metal dusts (Class II)."
    },
    {
      "term": "Group F",
      "def": "Carbonaceous dusts such as coal (Class II)."
    },
    {
      "term": "Group G",
      "def": "Grain dusts such as flour (Class II)."
    },
    {
      "term": "Division 1",
      "def": "The hazard is present under normal operating conditions."
    },
    {
      "term": "Division 2",
      "def": "The hazard is present only under abnormal conditions."
    },
    {
      "term": "Temperature code (T-code)",
      "def": "The maximum surface temperature of equipment, T1 (450°C) to T6 (85°C)."
    },
    {
      "term": "Explosionproof",
      "def": "Equipment built to contain an explosion inside it and prevent ignition of the surrounding atmosphere."
    },
    {
      "term": "Conduit seal",
      "def": "A fitting filled with sealing compound that stops gas or vapor traveling through conduit (501.15)."
    }
  ],
  "video": {
    "title": "Contactor Working & Types Of Switches | Live Practical Panel Wiring | Control Panel Wiring Part-6",
    "embedUrl": "https://www.youtube.com/embed/PP4P8_zzbV4",
    "note": "This video shows contactors and control-panel wiring in a live practical session. In a classified location, the contactor and its enclosure are the parts that must be rated for the class, division, and group — watch the panel and ask: what would change if this panel were installed in a Class I, Division 1 paint booth?",
    "more": [
      {
        "title": "3 Phase Induction Motor Panel Wiring & Running Practical | ITI Electrician",
        "url": "https://www.youtube.com/watch?v=VxhBSU5sCZg"
      },
      {
        "title": "Star Delta Starter Power Wiring With Motor Connection",
        "url": "https://www.youtube.com/watch?v=_njWBJ2UkgA"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A paint spray booth has flammable vapor present while spraying is going on. What is its class and division?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Flammable vapor means Class I. Step 2: The vapor is present under normal operating conditions, so it is Division 1. Step 3: The location is Class I, Division 1.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A grain elevator has combustible grain dust in the air. What is its class and group?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Combustible dust means Class II. Step 2: Grain dust is Group G. Step 3: The location is Class II, Group G.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A device is marked T3 and will be installed where the gas ignites at 180°C. Is it suitable?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: T3 means the device's hottest surface is 200°C. Step 2: The gas ignites at 180°C, which is below 200°C. Step 3: No — the device's T-code must be below the ignition temperature, so a T4 (135°C) or lower device is needed.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A conduit run leaves a Class I, Division 1 area and enters an ordinary area. What is required at the boundary?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 501.15 requires a conduit seal at the boundary of a Class I location. Step 2: The seal is a fitting filled with sealing compound. Step 3: It stops gas or vapor from traveling through the conduit into the ordinary area.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A repair garage has a classified area near the floor. What class and division is it, and why near the floor?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Gasoline vapor is a Class I hazard, and the area near the floor is Division 2. Step 2: Gasoline vapor is heavier than air, so it collects near the floor. Step 3: Equipment in that area must be suitable for Class I, Division 2.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A motor is marked Class I, Division 2, Groups C and D, T3. Where may it be installed?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It may be installed in a Class I, Division 2 location with Group C or D gases. Step 2: Its T-code is T3 (200°C), so the gas must ignite above 200°C. Step 3: It may NOT be installed in a Division 1 location, or with Group A or B gases, or where the ignition temperature is 200°C or below.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Class I locations contain:",
      "choices": [
        "Combustible dusts",
        "Flammable gases or vapors",
        "Ignitable fibers",
        "Water"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Class I is flammable gases or vapors. (a) Dusts are Class II. (c) Fibers are Class III. (d) Water is not a classified-location hazard."
    },
    {
      "q": "Class II, Group G is:",
      "choices": [
        "Metal dusts",
        "Carbonaceous dusts",
        "Grain dusts",
        "Acetylene"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Group G is grain dusts. (a) Metal dusts are Group E. (b) Carbonaceous dusts are Group F. (d) Acetylene is Class I, Group A."
    },
    {
      "q": "Class I, Group B is:",
      "choices": [
        "Acetylene",
        "Hydrogen",
        "Ethylene",
        "Propane"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Group B is hydrogen. (a) Acetylene is Group A. (c) Ethylene is Group C. (d) Propane is Group D."
    },
    {
      "q": "Division 1 means the hazard is present:",
      "choices": [
        "Only under abnormal conditions",
        "Under normal operating conditions",
        "Never",
        "Only outdoors"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Division 1 is normal conditions. (a) Abnormal conditions is Division 2. (c) A hazard that is never present is not a classified location. (d) Division applies indoors and outdoors."
    },
    {
      "q": "The T-code T6 means a maximum surface temperature of:",
      "choices": [
        "450°C",
        "300°C",
        "135°C",
        "85°C"
      ],
      "answer": 3,
      "explanation": "Correct: (d). T6 is 85°C, the lowest (safest) T-code. (a) 450°C is T1. (b) 300°C is T2. (c) 135°C is T4."
    },
    {
      "q": "A device's T-code must be:",
      "choices": [
        "Above the material's ignition temperature",
        "Below the material's ignition temperature",
        "Equal to the material's ignition temperature",
        "Unrelated to the material"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The device's hottest surface must be below the ignition temperature. (a) Above it would ignite the material. (c) Equal to it is not safe. (d) The T-code is directly related to the material."
    },
    {
      "q": "Conduit seals in Class I locations are required by:",
      "choices": [
        "500.8",
        "501.15",
        "430.52",
        "210.8"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 501.15 requires sealing. (a) 500.8 covers equipment marking. (c) 430.52 is motor short-circuit protection. (d) 210.8 is GFCI protection."
    },
    {
      "q": "Explosionproof equipment is built to:",
      "choices": [
        "Never arc",
        "Contain an explosion inside it and prevent ignition of the surrounding atmosphere",
        "Resist water",
        "Run without power"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Explosionproof equipment contains an internal explosion and prevents it from igniting the atmosphere. (a) It may arc internally — that is what it contains. (c) Water resistance is a different rating. (d) It still needs power."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Hazardous Locations: Quick Reference</h3>\n<p><strong>Core idea:</strong> Classified locations can ignite. The class, division, group, and T-code on the drawings tell you what equipment and wiring methods are allowed.</p>\n<p><strong>Classes:</strong> I gases/vapors · II dusts · III fibers/flyings.</p>\n<p><strong>Groups:</strong> I: A acetylene, B hydrogen, C ethylene, D propane · II: E metal, F carbonaceous, G grain.</p>\n<p><strong>Divisions:</strong> 1 = normal conditions · 2 = abnormal conditions only.</p>\n<p><strong>T-codes:</strong> T1 450°C · T2 300°C · T3 200°C · T4 135°C · T5 100°C · T6 85°C. Device T-code must be below the ignition temperature.</p>\n<p><strong>Sealing:</strong> 501.15 — seal conduit at the Class I boundary so vapor cannot travel through it.</p>\n<p><strong>Self-check:</strong> Classify a paint booth, a grain elevator, and a repair garage, and state the T-code rule.</p>\n"
};
