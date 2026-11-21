// cmp106 - Module 5: The Motherboard: Everything Connects Here
module.exports = {
  "number": 5,
  "slug": "the-motherboard",
  "title": "The Motherboard: Everything Connects Here",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a motherboard does.",
    "Name the main parts and sockets on a motherboard.",
    "Explain what the chipset and BIOS/UEFI do.",
    "Explain how to find a motherboard's model and manual.",
    "Explain why parts must match the motherboard before you buy them."
  ],
  "sections": [
    {
      "heading": "The Board That Joins Everything",
      "html": "<p>The motherboard is the large circuit board inside the case. Every part plugs into it or connects to it: the CPU sits in its socket, the RAM in its slots, the storage and graphics card in theirs, and the power supply feeds it through a big cable. Thin copper tracks printed on the board carry data and power between the parts, like roads between houses.</p>\n<p>Nothing on a motherboard does the thinking or the storing by itself. Its job is connection: making sure the right signals reach the right part at the right time. When a computer misbehaves, the motherboard is rarely the cause — but when it is, the symptoms are often strange and wide-ranging, because everything passes through it.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> The motherboard connects everything. Its job is joining parts, not thinking or storing. </div></p>\n"
    },
    {
      "heading": "The Main Parts and Sockets",
      "html": "<p>Learn the map. The CPU socket is the large square fitting, usually near the top, with a lever. Beside it are the RAM slots — long, thin, usually in a row of two or four. Lower down are the PCIe slots, long slots for the graphics card and other add-in cards. Around the edges are the storage connectors (SATA ports and M.2 slots), the power connectors, and the small pins for the case's power button, lights, and USB ports.</p>\n<p>At the back of the board, sticking out of the case, is the I/O panel: USB ports, the network socket, and the sound jacks. The round battery on the board — the CMOS battery — keeps the clock and settings alive when the power is off. It lasts for years, and when it dies the computer forgets the date.</p>\n"
    },
    {
      "heading": "Chipset, BIOS, and UEFI",
      "html": "<p>The chipset is a set of chips on the motherboard that manages traffic: which parts can talk to which, and how fast. It decides, for example, how many USB ports the board has and whether it supports the newest storage. When you buy a motherboard, you are mostly buying its chipset and its sockets.</p>\n<p>BIOS, or its modern replacement UEFI, is the small program built into the motherboard that runs first when you press the power button. It checks the parts (a test called POST), then finds the boot drive and starts the operating system. You can open its settings screen by pressing a key — usually Delete or F2 — during startup, to change the boot order or check that parts are detected.</p>\n"
    },
    {
      "heading": "Matching Parts to the Board",
      "html": "<p>Before buying any part, check it against the motherboard. The CPU must fit the socket and be on the board's supported list. The RAM must be the right type (DDR4 or DDR5) and the right speed. The graphics card must fit the PCIe slot and the case, and the power supply must have the right cables. The motherboard's manual — free on the maker's website, found by searching the model number printed on the board — lists all of this.</p>\n<p>The model number is usually printed in large letters on the board itself. Write it down before you buy anything. Guessing compatibility is how parts end up in a drawer, unusable.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>The motherboard is the board everything plugs into; its tracks carry data and power.</li>\n<li>CPU socket, RAM slots, PCIe slots, storage connectors, and the I/O panel are the map to learn.</li>\n<li>BIOS/UEFI runs first, checks the parts (POST), and starts the operating system.</li>\n<li>Check every part against the motherboard's manual before buying.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Buying a part without checking the socket, type, or supported list.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Blaming the motherboard first. It is rarely the cause, and its faults are hard to prove.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Motherboard",
      "def": "The main board inside a computer that everything plugs into."
    },
    {
      "term": "Chipset",
      "def": "Chips on the motherboard that manage traffic between the parts."
    },
    {
      "term": "BIOS",
      "def": "The small program built into a motherboard that runs first and starts the computer."
    },
    {
      "term": "UEFI",
      "def": "The modern replacement for BIOS, with a mouse-friendly settings screen."
    },
    {
      "term": "POST",
      "def": "Power-On Self-Test: the motherboard's check of the parts when the computer starts."
    },
    {
      "term": "CPU socket",
      "def": "The fitting on the motherboard that a CPU sits in."
    },
    {
      "term": "PCIe slot",
      "def": "A long slot on the motherboard for a graphics card or other add-in card."
    },
    {
      "term": "SATA port",
      "def": "A connector on the motherboard for a SATA drive, such as a hard drive or SATA SSD."
    },
    {
      "term": "M.2 slot",
      "def": "A small slot on the motherboard for an NVMe SSD stick."
    },
    {
      "term": "I/O panel",
      "def": "The back of the motherboard sticking out of the case, with USB, network, and sound sockets."
    },
    {
      "term": "CMOS battery",
      "def": "A round battery on the motherboard that keeps the clock and settings alive when off."
    },
    {
      "term": "Boot order",
      "def": "The order the BIOS/UEFI checks drives for an operating system to start."
    },
    {
      "term": "Manual",
      "def": "The maker's guide for a motherboard, listing supported parts and sockets."
    },
    {
      "term": "Circuit board",
      "def": "A board with printed copper tracks carrying electricity between parts."
    },
    {
      "term": "Connector",
      "def": "A fitting where a cable or part plugs in."
    }
  ],
  "video": {
    "title": "Every Motherboard component Explained",
    "embedUrl": "https://www.youtube.com/embed/jfKOl1W8Ml4",
    "note": "Watch the motherboard tour and name each socket as it appears. Then find the model number on a real board if you have one nearby.",
    "more": [
      {
        "title": "Motherboard Connections Explained",
        "url": "https://www.youtube.com/watch?v=31B2_X8n3hg"
      },
      {
        "title": "Motherboards Explained",
        "url": "https://www.youtube.com/watch?v=b2pd3Y6aBag"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Motherboard” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Motherboard — The main board inside a computer that everything plugs into. Step 2: It matters because it is part of: Explain what a motherboard does. Step 3: An example from the module is the way motherboard shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Chipset” and “BIOS”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Chipset — Chips on the motherboard that manage traffic between the parts. Step 2: BIOS — The small program built into a motherboard that runs first and starts the computer. Step 3: They differ because the first is about chipset while the second is about bios; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Name the main parts and sockets on a motherboard.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Name the main parts and sockets on a motherboard. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “UEFI” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: UEFI — The modern replacement for BIOS, with a mouse-friendly settings screen. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: POST — Power-On Self-Test: the motherboard's check of the parts when the computer starts. Step 2: CPU socket — The fitting on the motherboard that a CPU sits in. Step 3: PCIe slot — A long slot on the motherboard for a graphics card or other add-in card. Step 4: Chipset — Chips on the motherboard that manage traffic between the parts. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain what the chipset and BIOS/UEFI do. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Motherboard” mean?",
      "choices": [
        "The main board inside a computer that everything plugs into.",
        "Chips on the motherboard that manage traffic between the parts.",
        "The small program built into a motherboard that runs first and starts the computer.",
        "The modern replacement for BIOS, with a mouse-friendly settings screen."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Motherboard means: The main board inside a computer that everything plugs into. (b) is the definition of Chipset, not of Motherboard. (c) is the definition of BIOS, not of Motherboard. (d) is the definition of UEFI, not of Motherboard."
    },
    {
      "q": "What does the term “Chipset” mean?",
      "choices": [
        "The main board inside a computer that everything plugs into.",
        "Chips on the motherboard that manage traffic between the parts.",
        "The small program built into a motherboard that runs first and starts the computer.",
        "The modern replacement for BIOS, with a mouse-friendly settings screen."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Chipset means: Chips on the motherboard that manage traffic between the parts. (a) is the definition of Motherboard, not of Chipset. (c) is the definition of BIOS, not of Chipset. (d) is the definition of UEFI, not of Chipset."
    },
    {
      "q": "What does the term “BIOS” mean?",
      "choices": [
        "The main board inside a computer that everything plugs into.",
        "Chips on the motherboard that manage traffic between the parts.",
        "The small program built into a motherboard that runs first and starts the computer.",
        "The modern replacement for BIOS, with a mouse-friendly settings screen."
      ],
      "answer": 2,
      "explanation": "Correct: (c). BIOS means: The small program built into a motherboard that runs first and starts the computer. (a) is the definition of Motherboard, not of BIOS. (b) is the definition of Chipset, not of BIOS. (d) is the definition of UEFI, not of BIOS."
    },
    {
      "q": "What does the term “UEFI” mean?",
      "choices": [
        "The main board inside a computer that everything plugs into.",
        "Chips on the motherboard that manage traffic between the parts.",
        "The small program built into a motherboard that runs first and starts the computer.",
        "The modern replacement for BIOS, with a mouse-friendly settings screen."
      ],
      "answer": 3,
      "explanation": "Correct: (d). UEFI means: The modern replacement for BIOS, with a mouse-friendly settings screen. (a) is the definition of Motherboard, not of UEFI. (b) is the definition of Chipset, not of UEFI. (c) is the definition of BIOS, not of UEFI."
    },
    {
      "q": "Which term means: Power-On Self-Test: the motherboard's check of the parts when the computer starts.",
      "choices": [
        "POST",
        "Motherboard",
        "Chipset",
        "BIOS"
      ],
      "answer": 0,
      "explanation": "Correct: (a). POST is the term for: Power-On Self-Test: the motherboard's check of the parts when the computer starts. (b) Motherboard means The main board inside a computer that everything plugs into. (c) Chipset means Chips on the motherboard that manage traffic between the parts. (d) BIOS means The small program built into a motherboard that runs first and starts the computer."
    },
    {
      "q": "Which term means: The fitting on the motherboard that a CPU sits in.",
      "choices": [
        "Motherboard",
        "CPU socket",
        "Chipset",
        "BIOS"
      ],
      "answer": 1,
      "explanation": "Correct: (b). CPU socket is the term for: The fitting on the motherboard that a CPU sits in. (a) Motherboard means The main board inside a computer that everything plugs into. (c) Chipset means Chips on the motherboard that manage traffic between the parts. (d) BIOS means The small program built into a motherboard that runs first and starts the computer."
    },
    {
      "q": "Which term means: A long slot on the motherboard for a graphics card or other add-in card.",
      "choices": [
        "Motherboard",
        "Chipset",
        "PCIe slot",
        "BIOS"
      ],
      "answer": 2,
      "explanation": "Correct: (c). PCIe slot is the term for: A long slot on the motherboard for a graphics card or other add-in card. (a) Motherboard means The main board inside a computer that everything plugs into. (b) Chipset means Chips on the motherboard that manage traffic between the parts. (d) BIOS means The small program built into a motherboard that runs first and starts the computer."
    },
    {
      "q": "Which term means: A connector on the motherboard for a SATA drive, such as a hard drive or SATA SSD.",
      "choices": [
        "Motherboard",
        "Chipset",
        "BIOS",
        "SATA port"
      ],
      "answer": 3,
      "explanation": "Correct: (d). SATA port is the term for: A connector on the motherboard for a SATA drive, such as a hard drive or SATA SSD. (a) Motherboard means The main board inside a computer that everything plugs into. (b) Chipset means Chips on the motherboard that manage traffic between the parts. (c) BIOS means The small program built into a motherboard that runs first and starts the computer."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — The Motherboard: Everything Connects Here: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a motherboard does.</p>\n<p><strong>Key terms:</strong> Motherboard · Chipset · BIOS · UEFI · POST · CPU socket · PCIe slot · SATA port.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a motherboard does.</li>\n<li>Name the main parts and sockets on a motherboard.</li>\n<li>Explain what the chipset and BIOS/UEFI do.</li>\n</ul>\n<p><strong>Watch out:</strong> Power off and unplug before touching anything inside a computer, and never open a power supply.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
