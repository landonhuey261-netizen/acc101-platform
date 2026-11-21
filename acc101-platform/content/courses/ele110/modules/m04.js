module.exports = {
  "number": 4,
  "slug": "fire-alarm-systems-devices-zones",
  "title": "Fire Alarm Systems: Devices & Zones",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe the three parts of a fire alarm system: initiating, control, and notification.",
    "Compare smoke detectors, heat detectors, and manual pull stations.",
    "Explain the difference between conventional and addressable systems.",
    "Explain how zones divide a building and what a zone tells responders.",
    "Describe the fire alarm control panel's normal, alarm, trouble, and supervisory states."
  ],
  "sections": [
    {
      "heading": "The Three Parts of a Fire Alarm System",
      "html": "<p>A fire alarm system has three jobs, and three groups of equipment to do them. <strong>Initiating devices</strong> detect the fire or let a person report it: smoke detectors, heat detectors, flame detectors, sprinkler waterflow switches, and manual pull stations. The <strong>control panel</strong> (the FACP — fire alarm control panel) receives the signals, decides what to do, and sends power and commands out. <strong>Notification appliances</strong> tell the people in the building: horns, strobes, speakers, and bells. If any one part fails, the system fails — a detector that never reports, a panel that never decides, or a horn that never sounds are all the same result: people do not know there is a fire.</p><p>The governing standard for fire alarm systems is NFPA 72, the National Fire Alarm and Signaling Code, and the installation rules are in NEC Article 760. The two work together: NFPA 72 says what the system must do and where devices must go; the NEC says how the wiring must be installed. A technician needs both books, and in Michigan both are enforced through the adopted 2023 NEC and the local building and fire codes. This module covers the devices and the zones; Module 5 covers the wiring and Article 760; Module 6 covers notification and power.</p>"
    },
    {
      "heading": "Initiating Devices: Detectors and Pull Stations",
      "html": "<p><strong>Smoke detectors</strong> are the most common initiating device. Ionization detectors sense the tiny particles of a fast, flaming fire; photoelectric detectors sense the larger particles of a slow, smoldering fire. Most commercial systems use photoelectric or multi-criteria detectors, which combine smoke and heat sensing to reduce false alarms from dust, steam, and cooking. <strong>Heat detectors</strong> respond to temperature: fixed-temperature detectors alarm at a set temperature (commonly 135°F or 194°F), and rate-of-rise detectors alarm when the temperature climbs quickly. Heat detectors are used where smoke detectors would false-alarm constantly — kitchens, garages, and boiler rooms.</p><p><strong>Manual pull stations</strong> let a person start the alarm. They are mounted on the path of exit, usually near exit doors, at a height anyone can reach, and they must be visible and unobstructed. Other initiating devices include <strong>sprinkler waterflow switches</strong>, which report when a sprinkler head opens, and <strong>duct detectors</strong>, which shut down air handlers so smoke is not spread through the ductwork. Every initiating device has a listed spacing and placement rule — a smoke detector on a smooth ceiling covers a defined area, and beams, joists, and sloped ceilings all change the spacing.</p><div class=\"callout\"><strong>Key idea:</strong> The detector must match the room. A smoke detector in a steamy kitchen will false-alarm until someone disables it — and a disabled detector protects no one. Choose the device for the hazard, not for convenience.</div>"
    },
    {
      "heading": "Conventional vs Addressable Systems",
      "html": "<p>In a <strong>conventional</strong> system, devices are wired in groups called zones, and the panel only knows that something in a zone has alarmed — not which device. A zone might be one floor of a small building, or one wing. Conventional systems are simpler and cheaper, and they are still common in small buildings. In an <strong>addressable</strong> system, every device has its own address on a signaling line circuit, and the panel reports exactly which device alarmed — \"smoke detector, 3rd floor, room 312.\" Addressable systems cost more but find the fire faster, make troubleshooting far easier, and are the standard in larger buildings.</p><p>There is also a third term you will hear: <strong>analog addressable</strong>. In these systems the detector does not just say \"alarm\" or \"no alarm\" — it reports its actual smoke level to the panel continuously, and the panel decides when that level means a fire. That lets the panel compensate for dust buildup, warn of a dirty detector before it false-alarms, and set different sensitivities for day and night. When you hear \"intelligent\" or \"analog\" fire alarm, this is what it means.</p>"
    },
    {
      "heading": "Zones: Dividing the Building So Responders Can Find the Fire",
      "html": "<p>A zone is a defined area of a building wired so the panel can report where the alarm came from. In a conventional system the zone is the unit of information: the panel annunciator lights up \"Zone 3 — 2nd floor east wing,\" and the firefighters go there. Zones are drawn on the drawings and on the annunciator, and they follow the building's natural divisions — floors, wings, and fire separations — so that the location is useful to a person walking in with no knowledge of the system.</p><p>Good zone design is a life-safety decision. A zone that is too big — \"the whole building\" — tells responders nothing. A zone that crosses a fire wall or a floor boundary confuses the response. The drawings, the panel programming, and the annunciator labels must all agree, and the labels must be in plain language a firefighter can read at 2 a.m. In an addressable system, zones still exist as software groupings for notification and for the annunciator, even though the panel knows the exact device — because the first question at the panel is still \"where is the fire,\" and the answer must be a place, not a device number.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>A fire alarm system has three parts: initiating devices, the control panel (FACP), and notification appliances.</li><li>Smoke detectors sense smoldering and flaming fires; heat detectors suit kitchens, garages, and boiler rooms; pull stations let people report a fire.</li><li>Conventional systems report by zone; addressable systems report the exact device; analog addressable systems report the smoke level continuously.</li><li>Zones follow floors, wings, and fire separations so responders can find the fire.</li><li>NFPA 72 governs what the system must do; NEC Article 760 governs how it is wired.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Installing a smoke detector where a heat detector belongs — a steamy kitchen, a dusty shop, a garage. The result is false alarms, and false alarms end with the system disabled.</div><div class=\"callout\"><strong>Common mistake:</strong> Labeling zones by device numbers or panel terminals instead of by place. The annunciator must say where the fire is in words a stranger can follow.</div><p><strong>Ready-to-Work link:</strong> If you can name the three parts of a system, compare conventional and addressable systems, and explain what a zone tells a firefighter, you have this module. Module 5 covers the wiring behind it: NEC Article 760.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Fire alarm control panel (FACP)",
      "def": "The panel that receives signals from initiating devices, decides the response, and powers notification appliances."
    },
    {
      "term": "Initiating device",
      "def": "A device that starts the alarm: a detector, a pull station, or a waterflow switch."
    },
    {
      "term": "Notification appliance",
      "def": "A device that alerts occupants: a horn, strobe, speaker, or bell."
    },
    {
      "term": "Smoke detector",
      "def": "A device that senses smoke particles; photoelectric types sense smoldering fires, ionization types sense flaming fires."
    },
    {
      "term": "Heat detector",
      "def": "A device that alarms at a fixed temperature or on a rapid temperature rise."
    },
    {
      "term": "Manual pull station",
      "def": "A device a person operates by hand to start the fire alarm."
    },
    {
      "term": "Conventional system",
      "def": "A fire alarm system that reports alarms by zone, not by individual device."
    },
    {
      "term": "Addressable system",
      "def": "A fire alarm system in which every device has its own address and the panel reports the exact device."
    },
    {
      "term": "Analog addressable",
      "def": "An addressable system in which detectors report their smoke level continuously and the panel decides when to alarm."
    },
    {
      "term": "Zone",
      "def": "A defined area of a building wired so the panel can report where an alarm came from."
    },
    {
      "term": "Annunciator",
      "def": "The display at the panel (or a remote display) showing the system's status and the location of an alarm."
    },
    {
      "term": "NFPA 72",
      "def": "The National Fire Alarm and Signaling Code, which governs what fire alarm systems must do and where devices go."
    },
    {
      "term": "Waterflow switch",
      "def": "A switch on a sprinkler system that reports to the fire alarm panel when a sprinkler head opens."
    },
    {
      "term": "Duct detector",
      "def": "A smoke detector in ductwork that shuts down air handlers so smoke is not spread through the building."
    }
  ],
  "video": {
    "title": "Introduction to Fire Alarm Systems and Main Components",
    "embedUrl": "https://www.youtube.com/embed/gV9znH4RQY0",
    "note": "Watch the video, then work the assignment below. As you watch, note every term from this module's key terms list and write down one question the video raises for you.",
    "more": [
      {
        "title": "Conventional Fire Alarm System Wiring Diagram",
        "url": "https://www.youtube.com/watch?v=mNVhdSyIqx4"
      },
      {
        "title": "Fire Alarm Control Panel and Power Supply",
        "url": "https://www.youtube.com/watch?v=L_7fLtuXe5Q"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A small office building has 2 floors. The fire alarm panel lights up \"Zone 2\" but the building has no zone map. Why is this a problem, and what should exist?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: \"Zone 2\" means nothing without a map — responders do not know where to go. Step 2: Every zone needs a label in plain language (\"2nd floor, east wing\") on the annunciator and a zone map at the panel. Step 3: The map, the panel programming, and the drawings must all agree.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A commercial kitchen keeps getting false alarms from the smoke detector above the range. What is the right fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The smoke detector is the wrong device for a kitchen — steam and cooking smoke false-alarm it. Step 2: Replace it with a fixed-temperature or rate-of-rise heat detector listed for the location. Step 3: Never disable the detector or the zone — a disabled device protects no one.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Compare a conventional and an addressable fire alarm system for a 10-story office building. Which do you recommend and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Recommend addressable. Step 2: In a 10-story building, knowing the exact device (\"smoke detector, 7th floor, room 712\") finds the fire far faster than knowing only the floor. Step 3: Addressable also makes troubleshooting easier — a fault is reported by device, not by zone — which matters in a large system.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A school has a boiler room, a kitchen, classrooms, and a gymnasium with a high ceiling. Which initiating device belongs in each, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Boiler room — heat detector (dust and fumes would false-alarm smoke detectors). Step 2: Kitchen — heat detector (steam and cooking smoke). Step 3: Classrooms — photoelectric smoke detectors. Step 4: Gymnasium — smoke detectors with spacing adjusted for the high ceiling, or beam detection for the large open space.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> The panel shows a TROUBLE signal, not an ALARM. What does that mean, and what should the technician do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Trouble means a fault in the system — an open circuit, a ground fault, a low battery, or a device fault — not a fire. Step 2: The system may not work correctly while the trouble exists. Step 3: Investigate and clear it promptly, document it, and notify the building owner; do not silence it and walk away.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain what an analog addressable detector reports that a conventional detector does not, and why that helps prevent false alarms.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: An analog addressable detector reports its actual smoke level continuously; a conventional detector only reports alarm or no alarm. Step 2: The panel can compensate for slow dust buildup and warn of a dirty detector before it false-alarms. Step 3: The panel can also use different sensitivity levels for day and night.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The three parts of a fire alarm system are:",
      "choices": [
        "Panel, battery, and wire",
        "Initiating devices, control panel, and notification appliances",
        "Detector, strobe, and conduit",
        "Smoke, heat, and flame"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Initiating devices detect, the panel decides, and notification appliances alert people. (a) Battery and wire are components, not the three functional parts. (c) Those are individual devices. (d) Those are fire types, not system parts."
    },
    {
      "q": "A heat detector is the right choice for:",
      "choices": [
        "A bedroom",
        "A commercial kitchen",
        "A library",
        "A hallway"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Kitchens produce steam and cooking smoke that false-alarm smoke detectors, so heat detectors are used. (a), (c), and (d) Bedrooms, libraries, and hallways are served by smoke detectors."
    },
    {
      "q": "In a conventional fire alarm system, the panel reports an alarm by:",
      "choices": [
        "The exact device that alarmed",
        "The zone that alarmed",
        "The time of day only",
        "The color of the wire"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Conventional systems report by zone. (a) Reporting the exact device is an addressable system. (c) Time alone does not locate a fire. (d) Wire color does not report alarms."
    },
    {
      "q": "An addressable fire alarm system is preferred in a large building because:",
      "choices": [
        "It uses no wire",
        "The panel reports the exact device that alarmed",
        "It needs no power",
        "It has no panel"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The panel identifies the exact device and its location. (a) Addressable systems use wire. (c) They need power and batteries. (d) They have a control panel."
    },
    {
      "q": "A manual pull station is mounted:",
      "choices": [
        "On the ceiling",
        "On the path of exit, near exit doors",
        "Inside a locked closet",
        "Behind furniture"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Pull stations go on exit paths where anyone can reach them. (a) Ceilings are for detectors. (c) A locked closet hides the station. (d) Furniture blocking a pull station is a violation."
    },
    {
      "q": "NFPA 72 is:",
      "choices": [
        "The National Electrical Code",
        "The National Fire Alarm and Signaling Code",
        "A cable standard",
        "A Michigan licensing law"
      ],
      "answer": 1,
      "explanation": "Correct: (b). NFPA 72 governs fire alarm systems. (a) The NEC is NFPA 70. (c) Cable standards are ANSI/TIA-568. (d) Michigan licensing is under the Skilled Trades Regulation Act."
    },
    {
      "q": "A TROUBLE signal on the panel means:",
      "choices": [
        "There is a fire",
        "There is a fault in the system, such as an open circuit or low battery",
        "The system is working normally",
        "Someone pulled a station"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Trouble means a system fault that must be investigated. (a) A fire shows as ALARM. (c) Normal is the normal state, not trouble. (d) A pulled station shows as ALARM."
    },
    {
      "q": "A sprinkler waterflow switch is an example of:",
      "choices": [
        "A notification appliance",
        "An initiating device",
        "A power supply",
        "A conduit fitting"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A waterflow switch initiates the alarm when a sprinkler head opens. (a) Notification appliances alert people — horns and strobes. (c) It is not a power supply. (d) It is not a conduit fitting."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Fire Alarm Devices & Zones: Quick Reference</h3>\n<p><strong>Core idea:</strong> Three parts — initiating devices detect, the FACP decides, notification appliances alert. If any part fails, people do not know there is a fire.</p>\n<p><strong>Devices:</strong> Photoelectric smoke (smoldering) · ionization smoke (flaming) · heat, fixed-temperature or rate-of-rise (kitchens, garages, boiler rooms) · pull stations (exit paths) · waterflow switches · duct detectors.</p>\n<p><strong>Systems:</strong> Conventional — reports by zone · Addressable — reports the exact device · Analog addressable — reports smoke level continuously.</p>\n<p><strong>Zones:</strong> Follow floors, wings, and fire separations; label in plain language a firefighter can read.</p>\n<p><strong>Standards:</strong> NFPA 72 says what the system must do; NEC Article 760 says how it is wired.</p>\n<p><strong>Self-check:</strong> Pick a device for a kitchen, a classroom, and a boiler room, and explain why. If you can, you have this module.</p>\n"
};
