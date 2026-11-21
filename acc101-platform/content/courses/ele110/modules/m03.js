module.exports = {
  "number": 3,
  "slug": "voice-data-video-distribution",
  "title": "Voice, Data & Video Distribution",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how voice, data, and video share the same structured cabling.",
    "Describe how a telephone system, a data network, and a video system each use the cabling.",
    "Explain Power over Ethernet (PoE) and its uses.",
    "Describe the main video distribution methods in a building.",
    "Explain the technician's role where cabling meets active equipment."
  ],
  "sections": [
    {
      "heading": "One Cable Plant, Three Kinds of Traffic",
      "html": "<p>Twenty years ago a building had three separate wiring systems: telephone cable for voice, network cable for data, and coaxial cable for video. Today one structured cabling system carries all three. A voice call, a file download, and a video stream are all just data on the same Category 6A or fiber plant — the difference is in the equipment at the ends, not in the cable in the wall. That convergence is why the low-voltage technician's job has grown: the person who pulls the cable now has to understand what rides on it.</p><p>Voice today is usually <strong>VoIP</strong> — voice over internet protocol. The desk phone is a small network device that plugs into the same outlet as a computer, gets its address from the network, and sends voice as data packets to a phone system that may be a box in the telecommunications room or a service in the cloud. Data is the ordinary network traffic of computers, printers, and servers. Video includes security cameras, digital signage, conference-room displays, and streaming. All three share the cable plant, the patch panels, and the switches — and all three fail together when the cabling is bad.</p>"
    },
    {
      "heading": "Power over Ethernet: Power on the Data Cable",
      "html": "<p>One of the most useful features of modern structured cabling is <strong>Power over Ethernet (PoE)</strong>: the network switch sends low-voltage DC power down the same twisted-pair cable that carries the data, so a device needs only one cable. PoE powers VoIP phones, wireless access points, security cameras, access-control readers, and even some LED lighting. The standards matter: the original PoE (IEEE 802.3af) delivers up to about 15 watts per port, PoE+ (802.3at) up to about 30 watts, and PoE++ (802.3bt) up to 60 or 90 watts for hungrier devices such as pan-tilt-zoom cameras and high-power access points.</p><p>PoE changes how a technician plans a job. The cable must be rated for the power it will carry, the switch or injector must be sized for the total PoE budget of all connected devices, and the cable bundle must not overheat — a bundle of cables each carrying PoE++ power generates real heat, and the NEC and TIA standards limit bundle sizes and require attention to temperature. The technician also has to know which devices need PoE and which need their own power supply, because a camera that needs 60 watts will not work on a 15-watt port, and the failure will look like a bad camera instead of a bad power plan.</p><div class=\"callout\"><strong>Key idea:</strong> PoE means the data cable is also a power cable. Size the switch's PoE budget, check the device's wattage, and mind bundle heating — a camera that will not power up is often a power problem, not a camera problem.</div>"
    },
    {
      "heading": "Video Distribution in a Building",
      "html": "<p>Video reaches the places it needs to go in three main ways. <strong>IP video</strong> runs over the structured cabling: cameras and displays are network devices, and video is streamed as data. This is how modern CCTV and most digital signage work. <strong>Coaxial video</strong> still exists in older buildings and in cable-TV distribution: RG6 coax carries the signal from a central distribution point to each outlet, with splitters and amplifiers along the way. <strong>HDMI and display connections</strong> cover the last few feet in a conference room or classroom, from a wall plate or a table box to the display.</p><p>The technician's job in video is mostly about the path: the right cable, the right connector, the right distance, and the right signal level. Coax runs have maximum lengths and need the right splitters; HDMI runs are short and often need extenders that convert the signal to run over twisted pair or fiber; IP video needs enough network bandwidth and a switch that can handle the traffic. A video system that stutters or drops out is usually a cabling or bandwidth problem, not a display problem.</p>"
    },
    {
      "heading": "Where Cabling Meets Active Equipment",
      "html": "<p>The low-voltage technician's work ends where the active equipment begins — but the boundary is a working relationship, not a wall. The technician installs the cable plant, terminates it, labels it, and tests it; the network engineer or IT staff configures the switches, the phone system, and the servers. When a workstation will not connect, the two sides meet at the patch panel: is the problem the cable, the patch cord, the switch port, or the device? A technician who can test a cable, read the test result, and say with confidence \"the cable passes, look at the port\" saves everyone hours.</p><p>Documentation is the bridge between the two sides. Every cable gets a label at both ends, every patch panel port is recorded, and the test results are filed with the job. When a device is added a year later, the next technician should be able to find the right cable in minutes instead of tracing it by hand. That documentation habit is what separates a professional installation from a pile of cable — and it is a habit this program expects on every lab.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Voice, data, and video now share one structured cabling plant; the difference is in the equipment, not the cable.</li><li>VoIP phones are network devices that plug into the same outlets as computers.</li><li>PoE powers phones, access points, and cameras over the data cable — 15 W (802.3af), 30 W (802.3at), 60/90 W (802.3bt).</li><li>Video distributes as IP video over the network, coax in older systems, and HDMI for the last few feet.</li><li>Labeling, documentation, and test results are the bridge between the cabling installer and the IT staff.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Plugging a 60-watt camera into a 15-watt PoE port and blaming the camera. Check the device wattage against the port's PoE standard before you troubleshoot the device.</div><div class=\"callout\"><strong>Common mistake:</strong> Treating the cable plant and the network as separate jobs with no handover. The job is not done until the cables are labeled, tested, and documented so the next person can find them.</div><p><strong>Ready-to-Work link:</strong> If you can explain VoIP, size a PoE load, and describe how video gets from a camera to a monitor, you have this module. Module 4 turns to the system where a cabling failure is a life-safety failure: fire alarms.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "VoIP",
      "def": "Voice over Internet Protocol — telephone calls carried as data packets over the network."
    },
    {
      "term": "Power over Ethernet (PoE)",
      "def": "Sending low-voltage DC power and data on the same twisted-pair cable from a switch or injector."
    },
    {
      "term": "IEEE 802.3af",
      "def": "The original PoE standard, up to about 15 watts per port."
    },
    {
      "term": "IEEE 802.3at (PoE+)",
      "def": "The PoE+ standard, up to about 30 watts per port."
    },
    {
      "term": "IEEE 802.3bt (PoE++)",
      "def": "The PoE++ standard, up to 60 or 90 watts per port for high-power devices."
    },
    {
      "term": "PoE budget",
      "def": "The total wattage a switch can deliver across all its PoE ports at once."
    },
    {
      "term": "IP video",
      "def": "Video carried as data over the network, used by modern cameras and digital signage."
    },
    {
      "term": "Coaxial cable (RG6)",
      "def": "Cable with a center conductor and shield, used for cable-TV and older video distribution."
    },
    {
      "term": "HDMI",
      "def": "The digital connection used between a source and a display over short distances."
    },
    {
      "term": "Wireless access point",
      "def": "A network device that provides Wi-Fi coverage, usually powered by PoE."
    },
    {
      "term": "Digital signage",
      "def": "Network-connected displays showing scheduled content in lobbies, stores, and schools."
    },
    {
      "term": "Bandwidth",
      "def": "The amount of data a network link can carry, usually measured in megabits or gigabits per second."
    }
  ],
  "video": {
    "title": "Copper vs Fiber vs Wireless | Networking Fundamentals",
    "embedUrl": "https://www.youtube.com/embed/wEsva1-2kp4",
    "note": "Watch the video, then work the assignment below. As you watch, note every term from this module's key terms list and write down one question the video raises for you.",
    "more": [
      {
        "title": "Straight-Through vs Crossover Cable, Copper, Fiber & Wireless",
        "url": "https://www.youtube.com/watch?v=adKAkHERyBY"
      },
      {
        "title": "The Fiber Optic Association — Lecture 38: Data Center Cabling",
        "url": "https://www.youtube.com/watch?v=lGvucf_XRio"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A new office has 40 VoIP phones, 12 wireless access points, and 16 cameras. How many network drops does the cable plant need at minimum, and what else must be planned?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 40 + 12 + 16 = 68 drops minimum (plus spares). Step 2: Every device needs a PoE port, so the switches need a PoE budget covering all 68 devices at their wattages. Step 3: Plan spare drops and spare switch capacity — a plant with no spares cannot grow.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A camera needs 60 watts. Which PoE standard must the switch port support, and what happens if the port only supports 802.3af?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 802.3bt (PoE++) — 60 W is above the 30 W limit of 802.3at and the 15 W limit of 802.3af. Step 2: On an 802.3af port the camera will not power up, or will power up and fail under load. Step 3: The fix is a PoE++ port or a local power supply — not a new camera.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A switch has a PoE budget of 370 watts. It powers 20 phones at 7 watts each and 10 access points at 15 watts each. How much budget remains, and can it power 4 more cameras at 25 watts each?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Phones use 20 × 7 = 140 W; access points use 10 × 15 = 150 W; total used 290 W. Step 2: Remaining = 370 − 290 = 80 W. Step 3: Four cameras need 4 × 25 = 100 W, which is more than 80 W — no, the switch cannot power all four; add capacity or a second switch.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Explain the difference between IP video and coaxial video distribution in a building.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: IP video runs over the structured cabling as network data — cameras and displays are network devices. Step 2: Coaxial video runs on RG6 coax from a central distribution point through splitters to each outlet. Step 3: IP video is the modern standard for cameras and signage; coax remains in older buildings and cable-TV distribution.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A workstation will not connect. The cable tests good. List three things to check next, in order.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The patch cord at both ends — swap it for a known-good cord. Step 2: The switch port — check link lights and try a different port. Step 3: The device itself — check its network settings and try another device on the same drop. (Document what you find at each step.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why does a low-voltage installation need labels and test records even though \"the network people\" will configure the equipment?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Labels and records are the handover — they let the next person find the right cable without tracing it by hand. Step 2: Test records prove the cable plant passes before the equipment is blamed for a fault. Step 3: A year later, when a device is added or a fault appears, documentation is what makes the fix fast instead of a mystery.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A VoIP desk phone is best described as:",
      "choices": [
        "A device that needs its own telephone cable back to a phone closet",
        "A small network device that plugs into the data outlet",
        "A wireless device with no cable",
        "A device powered only by its own battery"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A VoIP phone is a network device on the structured cabling. (a) That is an old analog phone system. (c) Desk VoIP phones are wired. (d) They are usually powered by PoE, not a battery."
    },
    {
      "q": "PoE+ (IEEE 802.3at) delivers up to about:",
      "choices": [
        "5 watts",
        "15 watts",
        "30 watts",
        "90 watts"
      ],
      "answer": 2,
      "explanation": "Correct: (c). PoE+ delivers up to about 30 W per port. (a) 5 W is below any PoE standard. (b) 15 W is the original 802.3af PoE. (d) 90 W is the top of PoE++ (802.3bt)."
    },
    {
      "q": "A device that needs 60 watts of PoE requires which standard?",
      "choices": [
        "802.3af",
        "802.3at",
        "802.3bt",
        "None — PoE cannot deliver 60 watts"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 802.3bt (PoE++) delivers 60 or 90 W. (a) 802.3af tops out near 15 W. (b) 802.3at tops out near 30 W. (d) PoE++ can deliver 60 W."
    },
    {
      "q": "The PoE budget of a switch is:",
      "choices": [
        "The price of the switch",
        "The total wattage it can deliver across all PoE ports at once",
        "The number of ports it has",
        "The length of cable it supports"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The PoE budget is the total wattage available to all PoE ports together. (a) Price is not a budget. (c) Port count does not set the wattage. (d) Cable length is a channel limit, not a switch budget."
    },
    {
      "q": "Modern CCTV cameras most commonly distribute video as:",
      "choices": [
        "Coaxial cable to a VCR",
        "IP video over the structured cabling",
        "HDMI over 300 meters",
        "Analog radio"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Modern cameras are IP devices on the network. (a) Coax to a VCR is obsolete. (c) HDMI runs are short — a few meters without an extender. (d) Cameras do not distribute by analog radio."
    },
    {
      "q": "A bundle of cables each carrying PoE++ power needs attention because:",
      "choices": [
        "The cables get heavier",
        "The bundle generates heat that must be managed",
        "The data slows down",
        "The cables change color"
      ],
      "answer": 1,
      "explanation": "Correct: (b). PoE power in a bundle produces heat, and standards limit bundle size and temperature. (a) Weight is not the issue. (c) Data speed is not reduced by PoE power. (d) Cables do not change color from PoE."
    },
    {
      "q": "When a workstation will not connect and the cable tests good, the next check is usually:",
      "choices": [
        "Replace the whole cable plant",
        "Check the patch cord, then the switch port, then the device",
        "Rewire the building",
        "Buy a new computer immediately"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Work from the simplest cause outward: patch cord, port, device. (a) Replacing the plant is drastic when the cable passes. (c) Rewiring is not a first step. (d) A new computer does not fix a port or cord problem."
    },
    {
      "q": "The main reason to label every cable at both ends is:",
      "choices": [
        "Labels look professional",
        "So the next technician can find and identify any cable quickly",
        "Labels are required to make the cable work",
        "To use up the label stock"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Labels make troubleshooting and adds fast and accurate. (a) Appearance is a side benefit, not the reason. (c) A cable works without a label. (d) Using stock is not a reason."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Voice, Data & Video: Quick Reference</h3>\n<p><strong>Core idea:</strong> One structured cabling plant now carries voice, data, and video — the difference is in the equipment at the ends, not the cable in the wall.</p>\n<p><strong>Voice:</strong> VoIP phones are network devices on the same outlets as computers.</p>\n<p><strong>PoE:</strong> 802.3af ~15 W · 802.3at (PoE+) ~30 W · 802.3bt (PoE++) 60/90 W. Size the switch PoE budget for all devices; watch bundle heating.</p>\n<p><strong>Video:</strong> IP video over the network (modern) · coax/RG6 (older systems, cable TV) · HDMI for the last few feet.</p>\n<p><strong>Handover:</strong> Label both ends, record test results, document the plant — the job is not done until the next person can find the cable.</p>\n<p><strong>Self-check:</strong> Size a PoE load for a room of phones, access points, and cameras from memory. If you can, you have this module.</p>\n"
};
