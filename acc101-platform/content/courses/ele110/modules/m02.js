module.exports = {
  "number": 2,
  "slug": "structured-cabling-copper-fiber",
  "title": "Structured Cabling: Copper & Fiber",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe the parts of a structured cabling system from the entrance to the work area.",
    "Compare copper twisted-pair categories and their uses.",
    "Compare singlemode and multimode fiber and when each is used.",
    "Explain T568A and T568B wiring and why one standard must be followed.",
    "Explain bend radius, pull tension, and separation rules that protect cable performance."
  ],
  "sections": [
    {
      "heading": "What Structured Cabling Is — and Why It Is Structured",
      "html": "<p>Structured cabling is a planned, standardized way of wiring a building for data and voice. Instead of running a separate cable for every device wherever it happens to be needed, the building gets a permanent cabling system: an entrance facility where outside services arrive, a main distribution area with the core network equipment, telecommunications rooms on each floor, horizontal cabling running out to each work area, and a work-area outlet where the user's device plugs in. Patch cords connect the permanent cabling to the active equipment, and they are the only part that changes when a desk moves.</p><p>The point of the structure is that the cabling outlasts the equipment. Switches and phones are replaced every few years; good cabling lasts decades. That is why the work is standardized under ANSI/TIA-568: cable categories, connector types, maximum lengths, and test limits are all written down, so any qualified technician can install, test, and troubleshoot a system someone else built. When you follow the standard, the system is documented, labeled, and testable — and when you do not, the building inherits a mystery that every future technician has to solve.</p>"
    },
    {
      "heading": "Copper: Twisted Pair and the Categories",
      "html": "<p>Copper data cable is twisted-pair cable: four pairs of copper conductors, each pair twisted together so that interference picked up on one wire is cancelled by the other. The category system grades the cable by how fast it can carry data. Category 5e supports Gigabit Ethernet; Category 6 supports Gigabit easily and 10-Gigabit over short runs; Category 6A supports 10-Gigabit over the full 100-meter channel; Category 8 supports 25- and 40-Gigabit over short runs in data centers. Each step up uses tighter twists, better shielding options, and stricter manufacturing.</p><p>Two details matter on every copper job. First, the <strong>channel length</strong>: the total run from the switch to the device, including patch cords, is limited to 100 meters (328 feet) for most Ethernet — 90 meters of permanent horizontal cable plus up to 10 meters of patch cords. Second, the cable must be installed without damage: kinks, over-tight cable ties, sharp bends, and staples through the jacket all change the electrical properties of the pairs and cause test failures. Copper is also limited by distance and by interference, which is where fiber takes over.</p><div class=\"callout\"><strong>Key idea:</strong> The category is a performance promise, not a brand. Cat6A cable that is kinked, over-pulled, or terminated wrong will test worse than well-installed Cat5e.</div>"
    },
    {
      "heading": "Fiber: Light Instead of Electricity",
      "html": "<p>Fiber optic cable carries signals as pulses of light through strands of glass, which gives it three big advantages over copper: it can run much farther, it can carry far more data, and it is immune to electromagnetic interference. A fiber backbone can connect buildings across a campus or floors across a high-rise without the 100-meter limit that constrains copper. It also cannot be tapped by reading electrical signals, and it does not conduct lightning or ground currents between buildings.</p><p>There are two kinds of fiber. <strong>Multimode</strong> fiber has a wide core (50 or 62.5 microns) and carries many light paths at once; it is cheaper to terminate and is used for shorter runs inside buildings, typically up to a few hundred meters. <strong>Singlemode</strong> fiber has a narrow core (about 9 microns) and carries a single light path; it costs more to terminate but can run for kilometers, which is why it connects buildings and serves as the backbone of the internet. The two are not interchangeable: the connectors, the transceivers, and the test equipment are all matched to one type.</p>"
    },
    {
      "heading": "T568A, T568B, and Why the Standard Matters",
      "html": "<p>Every copper data cable ends in an eight-position connector (RJ45), and the order of the eight colored conductors inside that connector is set by a standard: T568A or T568B. The two standards differ only in which pair goes on pins 1-2 versus pins 3-6, but mixing them on the two ends of one cable creates a crossover cable instead of a straight-through cable — and on a modern network, a crossover where a straight-through was expected is a fault that wastes hours. The rule is simple: pick one standard for the whole job, write it on the test plan, and use it on every termination.</p><p>Most commercial work in the United States uses T568B, and this program teaches T568B as the default. The termination itself is a craft skill: the jacket is stripped back only as far as needed, the pairs are untwisted only as far as needed (untwisting too much is the most common cause of a failed test), the conductors are seated in the right order, and the connector is crimped or the jack is punched down with the right tool. A termination that looks right can still fail a certification test, which is why Module 10 teaches testing — and why a technician never trusts their eyes alone.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Structured cabling is a permanent, standardized system: entrance, distribution, telecommunications rooms, horizontal cabling, work-area outlets.</li><li>Copper categories run Cat5e (Gigabit) to Cat6A (10-Gigabit full channel); the channel limit is 100 meters.</li><li>Multimode fiber is for shorter in-building runs; singlemode fiber is for long backbone runs.</li><li>T568B is the usual U.S. commercial standard — use one standard on the whole job.</li><li>Bend radius, pull tension, and untwist length decide whether a cable passes its test.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Untwisting the pairs too far back when terminating. Keep the untwist short — about half an inch — or the cable will fail its crosstalk test even though the wire map looks right.</div><div class=\"callout\"><strong>Common mistake:</strong> Pulling cable with a winch or yanking it around a sharp corner. Excess pull tension and tight bends permanently damage the cable. Pull gently, use proper bend radius, and never use cable ties pulled tight enough to dent the jacket.</div><p><strong>Ready-to-Work link:</strong> If you can sketch a structured cabling system, compare Cat6 and Cat6A, compare singlemode and multimode fiber, and wire a T568B jack in order, you have this module. Module 3 puts the systems that ride on this cabling to work: voice, data, and video.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Structured cabling",
      "def": "A planned, standardized building cabling system: entrance, distribution, telecommunications rooms, horizontal cabling, and work-area outlets."
    },
    {
      "term": "Horizontal cabling",
      "def": "The permanent cable run from a telecommunications room to a work-area outlet, limited to 90 meters."
    },
    {
      "term": "Telecommunications room",
      "def": "The closet or room on each floor where horizontal cables terminate on patch panels and connect to network equipment."
    },
    {
      "term": "Patch panel",
      "def": "A panel where horizontal cables terminate, allowing patch cords to connect them to switches and other equipment."
    },
    {
      "term": "Patch cord",
      "def": "A short flexible cable connecting a patch panel to active equipment, or a wall outlet to a device."
    },
    {
      "term": "Category 5e",
      "def": "Twisted-pair cable rated for Gigabit Ethernet."
    },
    {
      "term": "Category 6",
      "def": "Twisted-pair cable rated for Gigabit Ethernet and 10-Gigabit over short runs."
    },
    {
      "term": "Category 6A",
      "def": "Twisted-pair cable rated for 10-Gigabit Ethernet over the full 100-meter channel."
    },
    {
      "term": "Twisted pair",
      "def": "Copper cable in which conductors are twisted in pairs so interference cancels out."
    },
    {
      "term": "Multimode fiber",
      "def": "Fiber with a wide core carrying many light paths, used for shorter in-building runs."
    },
    {
      "term": "Singlemode fiber",
      "def": "Fiber with a narrow core carrying a single light path, used for long backbone runs."
    },
    {
      "term": "T568A / T568B",
      "def": "The two standard orders for the eight conductors in an RJ45 termination; T568B is the usual U.S. commercial choice."
    },
    {
      "term": "Channel length",
      "def": "The total length from switch to device including patch cords, limited to 100 meters for most Ethernet."
    },
    {
      "term": "Bend radius",
      "def": "The minimum radius a cable may be bent without damaging it or degrading its performance."
    },
    {
      "term": "ANSI/TIA-568",
      "def": "The standard that defines commercial building structured cabling, including categories, lengths, and test limits."
    }
  ],
  "video": {
    "title": "Network Cables — CompTIA A+ 220-1201",
    "embedUrl": "https://www.youtube.com/embed/29X5Ho3m2KU",
    "note": "Watch the video, then work the assignment below. As you watch, note every term from this module's key terms list and write down one question the video raises for you.",
    "more": [
      {
        "title": "Copper vs Fiber vs Wireless | Networking Fundamentals",
        "url": "https://www.youtube.com/watch?v=wEsva1-2kp4"
      },
      {
        "title": "The Fiber Optic Association — Lecture 38: Data Center Cabling",
        "url": "https://www.youtube.com/watch?v=lGvucf_XRio"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Sketch (in words) the parts of a structured cabling system in order, from the building entrance to a user's desk.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Entrance facility — outside services arrive. Step 2: Main distribution area — core network equipment. Step 3: Telecommunications room on each floor — patch panels and switches. Step 4: Horizontal cabling — permanent runs to each work area. Step 5: Work-area outlet and patch cord to the user's device.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A customer wants 10-Gigabit Ethernet to every desk in a new office. Which copper category do you recommend, and why not Cat5e?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Recommend Category 6A. Step 2: Cat6A supports 10-Gigabit over the full 100-meter channel. Step 3: Cat5e is rated for Gigabit only, and Cat6 supports 10-Gigabit only over short runs, so neither guarantees 10-Gigabit to every desk.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A campus needs a fiber link between two buildings 800 meters apart. Multimode or singlemode? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Singlemode. Step 2: 800 meters is beyond the practical reach of multimode for high-speed links, while singlemode runs for kilometers. Step 3: The transceivers and connectors must match singlemode — do not mix the two types.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A horizontal run measures 95 meters of permanent cable plus 8 meters of patch cords. Is the channel within limits? Show the math.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Channel = 95 + 8 = 103 meters. Step 2: The limit is 100 meters. Step 3: The channel is 3 meters over — shorten the permanent run or the patch cords, or move the equipment closer.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List the T568B conductor order, pin 1 through pin 8.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Pin 1 white/orange, pin 2 orange. Step 2: Pin 3 white/green, pin 4 blue. Step 3: Pin 5 white/blue, pin 6 green. Step 4: Pin 7 white/brown, pin 8 brown. (Remember: orange pair first, then green pair split around blue.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A cable fails its test after a rough pull. Name three installation faults that could cause the failure and how to avoid each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Excess pull tension — pull gently and use a pull string, never a winch on data cable. Step 2: Bend radius too tight — keep bends at or above the manufacturer's minimum radius. Step 3: Pairs untwisted too far at termination — keep untwist to about half an inch. (Over-tight cable ties and kinks are also valid answers.)</p>"
    }
  ],
  "quiz": [
    {
      "q": "The permanent cable run from a telecommunications room to a work-area outlet is called:",
      "choices": [
        "A patch cord",
        "Horizontal cabling",
        "A backbone",
        "An entrance facility"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Horizontal cabling is the permanent run to the work area, limited to 90 meters. (a) A patch cord is a short flexible cable. (c) A backbone connects telecommunications rooms and buildings. (d) The entrance facility is where outside services arrive."
    },
    {
      "q": "The maximum channel length for most Ethernet, including patch cords, is:",
      "choices": [
        "50 meters",
        "90 meters",
        "100 meters",
        "150 meters"
      ],
      "answer": 2,
      "explanation": "Correct: (c). The channel limit is 100 meters: 90 meters permanent plus up to 10 meters of patch cords. (a) 50 meters is well under the limit. (b) 90 meters is the permanent horizontal limit, not the channel limit. (d) 150 meters exceeds the standard."
    },
    {
      "q": "Category 6A cable supports:",
      "choices": [
        "Gigabit Ethernet only",
        "10-Gigabit Ethernet over the full 100-meter channel",
        "25-Gigabit over 100 meters",
        "Voice only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Cat6A is rated for 10-Gigabit over the full channel. (a) Gigabit is Cat5e territory. (c) 25-Gigabit needs Cat8 over short runs. (d) Cat6A is a data cable, not voice-only."
    },
    {
      "q": "Singlemode fiber differs from multimode fiber because it:",
      "choices": [
        "Has a wider core and shorter reach",
        "Has a narrow core and much longer reach",
        "Uses copper conductors",
        "Cannot be used in buildings"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Singlemode has a ~9-micron core carrying one light path, for runs of kilometers. (a) That describes multimode. (c) Fiber uses glass, not copper. (d) Singlemode is used in buildings as backbone fiber."
    },
    {
      "q": "In T568B, the pair on pins 1 and 2 is:",
      "choices": [
        "White/green and green",
        "White/orange and orange",
        "White/blue and blue",
        "White/brown and brown"
      ],
      "answer": 1,
      "explanation": "Correct: (b). T568B puts white/orange and orange on pins 1-2. (a) White/green and green are pins 3 and 6. (c) White/blue and blue are pins 4-5. (d) White/brown and brown are pins 7-8."
    },
    {
      "q": "Mixing T568A on one end of a cable and T568B on the other end creates:",
      "choices": [
        "A straight-through cable",
        "A crossover cable",
        "A fiber cable",
        "A power cable"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Different standards on the two ends swap the pairs and make a crossover cable. (a) A straight-through cable uses the same standard on both ends. (c) Fiber is a different cable type entirely. (d) Data cable is not a power cable."
    },
    {
      "q": "The standard that defines commercial structured cabling is:",
      "choices": [
        "NEC Article 760",
        "ANSI/TIA-568",
        "NFPA 72",
        "IEEE 1547"
      ],
      "answer": 1,
      "explanation": "Correct: (b). ANSI/TIA-568 defines structured cabling. (a) Article 760 covers fire alarms. (c) NFPA 72 covers fire alarm systems. (d) IEEE 1547 covers interconnecting distributed resources with the grid."
    },
    {
      "q": "The most common cause of a failed crosstalk test at a termination is:",
      "choices": [
        "Using the wrong color patch cord",
        "Untwisting the pairs too far back",
        "Using a cable that is too short",
        "Labeling the jack wrong"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Excess untwist destroys the pair balance and causes crosstalk failures. (a) Patch cord color does not affect performance. (c) A short cable does not cause crosstalk. (d) A wrong label is a documentation error, not a test failure."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Structured Cabling: Quick Reference</h3>\n<p><strong>Core idea:</strong> Structured cabling is a permanent, standardized system — entrance, distribution, telecommunications rooms, horizontal cabling, work-area outlets — built to outlast the equipment it serves.</p>\n<p><strong>Copper:</strong> Cat5e Gigabit · Cat6 Gigabit / 10-Gigabit short runs · Cat6A 10-Gigabit full channel · Cat8 25/40-Gigabit short runs. Channel limit 100 m (90 m permanent + 10 m patch).</p>\n<p><strong>Fiber:</strong> Multimode — wide core, short in-building runs · Singlemode — narrow core, kilometers, backbone and campus links.</p>\n<p><strong>T568B order:</strong> W/O, O, W/G, Bl, W/Bl, G, W/Br, Br. One standard for the whole job.</p>\n<p><strong>Watch out:</strong> Keep untwist short (~1/2 inch), respect bend radius and pull tension, and never cinch cable ties tight enough to dent the jacket.</p>\n<p><strong>Self-check:</strong> Sketch the system, state the channel limit, and recite the T568B order from memory. If you can, you have this module.</p>\n"
};
