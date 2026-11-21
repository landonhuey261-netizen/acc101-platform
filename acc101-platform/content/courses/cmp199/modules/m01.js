module.exports = {
  "number": 1,
  "slug": "a-plus-core-1-review-hardware",
  "title": "A+ Core 1 Review: Hardware",
  "estTime": "3–4 hours",
  "objectives": [
    "Identify the parts of a motherboard — CPU socket, chipset, RAM slots, expansion slots, and connectors — and what each one does.",
    "Compare memory types (DDR3, DDR4, DDR5, SO-DIMM, ECC) and pick the right RAM for a desktop or a laptop.",
    "Compare storage: HDD, SATA SSD, NVMe, and RAID 0, 1, 5, 6, and 1+0, and choose the right one for speed or safety.",
    "Size a power supply, explain cooling, and match display, cable, and connector types to the job.",
    "Explain how printers work (laser, inkjet, thermal, impact) and what to check first when one fails."
  ],
  "sections": [
    {
      "heading": "The Motherboard Is the Map — CPU, Chipset, and Slots",
      "html": "<p>Every hardware question on Core 1 starts with the <strong>motherboard</strong>: the board everything plugs into. The <strong>CPU socket</strong> holds the processor, and it must match the CPU exactly — an Intel LGA 1700 socket takes an LGA 1700 CPU, and an AMD AM5 socket takes an AM5 CPU; forcing the wrong chip in damages both. The <strong>chipset</strong> is the traffic controller: it decides which features the board supports, such as how many USB ports, how many M.2 slots, and whether the CPU can be overclocked. The <strong>BIOS/UEFI</strong> is the firmware that wakes the machine up: it runs the power-on self-test (POST), finds the boot drive, and hands control to the operating system.</p>\n<p><strong>Expansion slots</strong> add features: PCIe x16 is the big slot for a graphics card, PCIe x1 and x4 take smaller cards such as a network card or a sound card. <strong>RAM slots (DIMMs)</strong> hold the memory, and on a laptop they are the smaller <strong>SO-DIMM</strong> form factor. The exam loves the details: DDR5 is the current desktop standard, DDR4 is the previous one, and the notch on a DIMM stops you installing it the wrong way round. Always check the motherboard manual for the supported memory list before buying RAM.</p>"
    },
    {
      "heading": "Memory: DDR, Channels, and ECC",
      "html": "<p><strong>RAM</strong> is the computer's short-term memory: everything the CPU is working on right now lives there, and when the power goes off it is gone. More RAM means more programs open at once without slowing down; faster RAM means the CPU waits less. <strong>DDR</strong> generations are not interchangeable — DDR4 does not fit in a DDR5 slot, and the notch is in a different place so you cannot force it. Running two matched sticks in <strong>dual channel</strong> roughly doubles the memory bandwidth, so pairs beat a single stick of the same total size.</p>\n<p><strong>ECC memory</strong> (error-correcting code) detects and fixes single-bit errors and is used in servers and workstations where a flipped bit could corrupt data; ordinary desktops use non-ECC RAM. <strong>SO-DIMM</strong> is the laptop version, about half the length of a desktop DIMM. When a machine beeps at boot, randomly crashes, or shows the wrong amount of memory, reseat the RAM first, then test one stick at a time — a single bad stick is one of the most common hardware faults you will ever meet.</p>"
    },
    {
      "heading": "Storage: HDD, SSD, NVMe, and RAID",
      "html": "<p>Long-term storage has moved from spinning disks to flash. A <strong>hard disk drive (HDD)</strong> stores data on magnetic platters: cheap per gigabyte and good for bulk storage, but slow and fragile because it has moving parts. A <strong>SATA SSD</strong> has no moving parts and is several times faster than an HDD. An <strong>NVMe SSD</strong> plugs into an M.2 slot and talks directly to the CPU over PCIe — it is the fastest common storage, and the right answer whenever a question asks for maximum speed. Check the M.2 keying (M key for NVMe, B+M key for SATA) and the length (2280 is the common size) before buying.</p>\n<p><strong>RAID</strong> combines disks for speed, safety, or both. <strong>RAID 0</strong> stripes data across disks for speed with no safety — lose one disk, lose everything. <strong>RAID 1</strong> mirrors: two disks hold the same data, so one can die and nothing is lost. <strong>RAID 5</strong> stripes with parity across at least three disks and survives one disk failure. <strong>RAID 6</strong> survives two failures. <strong>RAID 1+0</strong> mirrors then stripes and needs at least four disks. RAID is not a backup: it protects against a dead disk, not against deleted files, ransomware, or fire — backups are a separate job.</p>"
    },
    {
      "heading": "Power, Cooling, Displays, Cables, and Printers",
      "html": "<p>The <strong>power supply unit (PSU)</strong> turns wall power into the low-voltage DC the parts need. Size it by adding up the parts' draw — the graphics card is usually the hungriest — and leave headroom: a PSU running at 50–70% of its rating is efficient and quiet, while an undersized PSU causes random shutdowns under load. The 24-pin connector powers the motherboard, the 4/8-pin EPS connector powers the CPU, and PCIe connectors power the graphics card. Never open a PSU yourself: the capacitors inside hold a dangerous charge even unplugged.</p>\n<p>Heat is the enemy of speed and lifespan. Air cooling uses fans and heatsinks; liquid cooling moves heat to a radiator. Dust-clogged fans and dried-out thermal paste are the two most common causes of overheating, and the fix is cleaning and fresh paste, not a new CPU. For displays, <strong>IPS</strong> panels give the best colour and viewing angles, <strong>OLED</strong> gives true blacks, and refresh rate (60 Hz, 120 Hz, 144 Hz) matters for gaming and smooth video. Match the cable to the job: <strong>HDMI</strong> is the common all-rounder, <strong>DisplayPort</strong> is the PC standard for high refresh rates, and <strong>USB-C</strong> can carry video, data, and power on one cable.</p>\n<p>Core 1 expects you to recognise connectors on sight. you to recognise connectors on sight. <strong>USB-A</strong> is the old rectangular plug, <strong>USB-C</strong> is the small reversible oval, and <strong>Thunderbolt</strong> (3 and 4) uses the USB-C shape at much higher speeds for docks and fast drives. <strong>HDMI</strong> and <strong>DisplayPort</strong> carry video (and audio); <strong>DVI</strong> and <strong>VGA</strong> are older video-only standards you still meet on old monitors. <strong>SATA</strong> connects internal drives, <strong>eSATA</strong> is its external cousin, and <strong>RJ45</strong> is the Ethernet plug while <strong>RJ11</strong> is the smaller telephone plug. Fibre uses <strong>LC, SC, and ST</strong> connectors.</p>\n<p>Printers: a <strong>laser printer</strong> uses a drum, toner, and a fuser that melts toner onto the page — fast and cheap per page for offices. An <strong>inkjet</strong> sprays liquid ink and is best for photos; its heads clog if it sits unused. A <strong>thermal printer</strong> uses heat on special paper — receipts and labels — with no ink at all. An <strong>impact printer</strong> strikes a ribbon and is still used for multi-part forms. When a printer fails, check the obvious first: power, cable, paper, toner, and whether the right printer is selected, before you touch a driver.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Motherboard: socket must match the CPU, chipset sets the features, UEFI/BIOS runs POST and finds the boot drive.</li><li>RAM: DDR generations do not mix, dual channel pairs beat single sticks, SO-DIMM is the laptop form factor, ECC is for servers.</li><li>Storage: HDD is cheap bulk, SATA SSD is fast, NVMe over PCIe is fastest; RAID 0 is speed only, RAID 1 mirrors, RAID 5 survives one disk loss, RAID 6 survives two.</li><li>Power and cooling: size the PSU with headroom, clean dust and replace old thermal paste before blaming the CPU.</li><li>Cables and printers: HDMI/DisplayPort/USB-C for modern video, RJ45 for Ethernet, laser for offices, inkjet for photos, thermal for receipts.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Mixing up RAID levels — remember RAID 0 has ZERO redundancy, and RAID is not a backup.</div><div class=\"callout\"><strong>Common mistake:</strong> Buying DDR5 for a DDR4 board (or the reverse). The notch is different for a reason: check the board's supported list first.</div>\n<p><strong>Ready-to-Work link:</strong> If you can match a CPU to its socket, pick the right RAID level for a scenario, and size a PSU, you have this module. Module 2 moves to the network: IP addresses, Wi-Fi, and mobile devices.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "CPU socket",
      "def": "The fitting on the motherboard that holds the processor; the socket type must match the CPU exactly."
    },
    {
      "term": "Chipset",
      "def": "The motherboard's traffic controller; it decides which features, ports, and speeds the board supports."
    },
    {
      "term": "UEFI / BIOS",
      "def": "Firmware that runs POST at power-on, finds the boot drive, and hands control to the operating system."
    },
    {
      "term": "POST",
      "def": "Power-on self-test: the checks the firmware runs at startup; beeps or codes report a failed part."
    },
    {
      "term": "DDR5",
      "def": "The current desktop memory standard; faster than DDR4 and not interchangeable with it."
    },
    {
      "term": "SO-DIMM",
      "def": "Small Outline DIMM — the shorter memory module used in laptops."
    },
    {
      "term": "ECC memory",
      "def": "Error-correcting memory that fixes single-bit errors; used in servers and workstations."
    },
    {
      "term": "Dual channel",
      "def": "Running two matched RAM sticks together so the memory bus works twice as wide."
    },
    {
      "term": "HDD",
      "def": "Hard disk drive: magnetic platters, cheap per gigabyte, slow, and has moving parts."
    },
    {
      "term": "SATA SSD",
      "def": "Solid-state drive on the SATA interface: no moving parts, several times faster than an HDD."
    },
    {
      "term": "NVMe",
      "def": "Storage that talks to the CPU over PCIe through an M.2 slot — the fastest common storage."
    },
    {
      "term": "RAID 0",
      "def": "Striping for speed with no redundancy: lose one disk, lose all the data."
    },
    {
      "term": "RAID 1",
      "def": "Mirroring: two disks hold identical data, so one can fail with nothing lost."
    },
    {
      "term": "RAID 5",
      "def": "Striping with parity across at least three disks; survives one disk failure."
    },
    {
      "term": "PSU",
      "def": "Power supply unit: converts wall AC power to the DC voltages the parts need."
    },
    {
      "term": "Thermal paste",
      "def": "The compound between CPU and heatsink that carries heat away; old paste causes overheating."
    },
    {
      "term": "IPS / OLED",
      "def": "Display panel types: IPS for colour and viewing angles, OLED for true blacks."
    },
    {
      "term": "Thunderbolt",
      "def": "A high-speed interface using the USB-C shape, for docks, displays, and fast external drives."
    }
  ],
  "video": {
    "title": "Motherboard Form Factors — CompTIA A+ 220-1201 (Professor Messer)",
    "embedUrl": "https://www.youtube.com/embed/dbxM_LFMXpw",
    "note": "Professor Messer walks through ATX, micro-ATX, and ITX boards. As you watch, note which form factor fits which case, and where the CPU socket, RAM slots, and PCIe slots sit.",
    "more": [
      {
        "title": "CPU Features — CompTIA A+ 220-1201 (Professor Messer)",
        "url": "https://www.youtube.com/watch?v=4RPVQQd2sOM"
      },
      {
        "title": "Storage Devices — CompTIA A+ 220-1201 (Professor Messer)",
        "url": "https://www.youtube.com/watch?v=UfLNl8-c9VM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A customer wants a new CPU. Their motherboard has an AM5 socket. Which of these CPUs can they buy: (a) an AM5 Ryzen, (b) an LGA 1700 Intel, (c) an AM4 Ryzen? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The socket must match exactly — only (a), the AM5 Ryzen, fits an AM5 socket. Step 2: (b) is wrong: LGA 1700 is an Intel socket with a different pin layout and will not fit or work. Step 3: (c) is wrong: AM4 is the older AMD socket and is physically different from AM5. Step 4: Rule: check the motherboard's CPU support list before buying.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A small business has two 2 TB drives holding the same customer database on both, and one drive fails. Nothing is lost. Which RAID level is this, and what happens next?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: This is RAID 1 (mirroring) — both disks hold identical data. Step 2: The surviving disk keeps the business running with no data lost. Step 3: Replace the failed drive as soon as possible, and the array rebuilds the mirror. Step 4: Remember RAID 1 is not a backup — a deleted file is deleted on both disks.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A gaming PC shuts down only during long gaming sessions, never when browsing. List the two most likely causes and the first check for each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Cause one is heat — dust-clogged fans or dried thermal paste. First check: temperatures and fan speed, then clean the dust. Step 2: Cause two is an undersized PSU — the graphics card draws most under load. First check: add up the parts' wattage against the PSU rating. Step 3: Do not replace the CPU first; heat and power are far more likely.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A laptop needs a RAM upgrade. The manual says it takes DDR5 SO-DIMM. A shop offers desktop DDR4 DIMMs at half the price. Should the customer buy them?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No — two things are wrong. Step 2: DDR4 does not fit or work in a DDR5 slot; the notch is in a different place. Step 3: Desktop DIMMs are physically too long for a laptop's SO-DIMM slots. Step 4: Buy DDR5 SO-DIMM in the capacity the manual lists.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A video editor wants the fastest possible storage for editing 4K video, and a second cheap drive for finished projects. What do you recommend?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: For editing, an NVMe SSD in an M.2 slot — the fastest common storage, over PCIe. Step 2: For finished projects, a large HDD — cheap per gigabyte, and speed does not matter for files that just sit there. Step 3: Check the M.2 length (2280) and keying before buying. Step 4: Remind them to back the finished projects up: a single drive is not a backup.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A laser printer prints faded pages with vertical white lines. The toner cartridge is new. What is the most likely cause, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The likely cause is a dirty or damaged drum, or a blocked corona wire — the toner is not transferring evenly. Step 2: First check: run the printer's cleaning cycle and inspect the drum for damage. Step 3: If the drum is scored or the lines stay, replace the drum unit. Step 4: Do not keep printing — faded output wastes toner and paper.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Which memory type is used in most laptops?",
      "choices": [
        "DDR5 DIMM",
        "SO-DIMM",
        "ECC RDIMM",
        "VRAM"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Laptops use SO-DIMM, the shorter memory module. (a) is wrong: a desktop DIMM is too long for a laptop slot. (c) is wrong: ECC registered memory is for servers. (d) is wrong: VRAM is graphics memory on the video card, not system RAM."
    },
    {
      "q": "RAID 5 can survive the failure of how many disks?",
      "choices": [
        "None — it is speed only",
        "One disk",
        "Two disks",
        "All disks"
      ],
      "answer": 1,
      "explanation": "Correct: (b). RAID 5 stripes with parity and survives one disk failure. (a) is wrong: that describes RAID 0. (c) is wrong: surviving two failures is RAID 6. (d) is wrong: no RAID level survives all disks failing."
    },
    {
      "q": "What does POST do?",
      "choices": [
        "Installs the operating system",
        "Checks the hardware at power-on and reports failures",
        "Formats the hard drive",
        "Connects to Wi-Fi"
      ],
      "answer": 1,
      "explanation": "Correct: (b). POST is the power-on self-test run by the UEFI/BIOS; beeps or codes report a failed part. (a) is wrong: the OS installs later, after boot. (c) is wrong: formatting is a disk task, not a startup check. (d) is wrong: network setup happens in the OS."
    },
    {
      "q": "Which storage is fastest for editing 4K video?",
      "choices": [
        "5400 RPM HDD",
        "SATA SSD",
        "NVMe SSD over PCIe",
        "USB 2.0 flash drive"
      ],
      "answer": 2,
      "explanation": "Correct: (c). NVMe over PCIe is the fastest common storage. (a) is wrong: a slow spinning HDD is the slowest option here. (b) is wrong: a SATA SSD is fast, but SATA caps its speed well below NVMe. (d) is wrong: USB 2.0 is far too slow for video editing."
    },
    {
      "q": "A PSU is rated 500 W and the parts draw 480 W under load. What is the problem?",
      "choices": [
        "No problem — it fits",
        "The PSU is undersized with no headroom, so expect shutdowns",
        "The CPU will run faster",
        "The RAM will fail"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A PSU should run at roughly 50–70% of its rating; 480 W on a 500 W unit leaves no headroom and causes shutdowns under load. (a) is wrong: fitting on paper is not enough. (c) is wrong: a bigger load does not speed up the CPU. (d) is wrong: RAM failure is not caused by a tight PSU."
    },
    {
      "q": "Which connector is the small reversible oval used for USB-C and Thunderbolt?",
      "choices": [
        "USB-A",
        "RJ45",
        "USB-C",
        "VGA"
      ],
      "answer": 2,
      "explanation": "Correct: (c). USB-C is the small reversible oval; Thunderbolt 3 and 4 use the same shape. (a) is wrong: USB-A is the older large rectangle. (b) is wrong: RJ45 is the Ethernet plug. (d) is wrong: VGA is the old blue video connector."
    },
    {
      "q": "Why is RAID not a backup?",
      "choices": [
        "RAID is too slow",
        "RAID only protects against a dead disk, not deleted files, ransomware, or fire",
        "RAID cannot hold user files",
        "RAID only works on laptops"
      ],
      "answer": 1,
      "explanation": "Correct: (b). RAID protects against disk failure; a deleted file, ransomware, or fire destroys the data on every disk in the array. (a) is wrong: RAID is usually faster than a single disk. (c) is wrong: RAID arrays hold ordinary files. (d) is wrong: RAID is used on desktops and servers, not only laptops."
    },
    {
      "q": "A PC beeps at startup, shows the wrong amount of RAM, and crashes randomly. What do you check first?",
      "choices": [
        "Replace the CPU",
        "Reseat the RAM and test one stick at a time",
        "Reinstall Windows",
        "Buy a new monitor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Reseating the RAM and testing sticks one at a time finds a loose or bad stick, the most common cause. (a) is wrong: the CPU is rarely the cause of RAM symptoms. (c) is wrong: reinstalling the OS does not fix a hardware fault. (d) is wrong: the monitor has nothing to do with RAM errors."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — A+ Core 1 Review: Hardware: Quick Reference</h3>\n<p><strong>Core idea:</strong> Match parts exactly (socket, DDR generation, M.2 keying), then pick storage and RAID by speed vs safety.</p>\n<p><strong>Memory:</strong> DDR4/DDR5 do not mix · SO-DIMM is laptop RAM · dual channel pairs beat single sticks · ECC is for servers.</p>\n<p><strong>Storage:</strong> HDD cheap bulk · SATA SSD fast · NVMe fastest · RAID 0 speed only · RAID 1 mirror · RAID 5 survives 1 disk · RAID 6 survives 2.</p>\n<p><strong>Power/cooling:</strong> Size the PSU with headroom · clean dust and old thermal paste before blaming the CPU · never open a PSU.</p>\n<p><strong>Connectors:</strong> USB-C reversible oval (Thunderbolt uses it) · HDMI all-rounder · DisplayPort high refresh · RJ45 Ethernet · LC/SC/ST fibre.</p>\n<p><strong>Printers:</strong> Laser for offices (drum + toner + fuser) · inkjet for photos (heads clog) · thermal for receipts · impact for multi-part forms.</p>\n<p><strong>Watch out:</strong> RAID is not a backup; a tight PSU causes shutdowns under load.</p>\n<p><strong>Self-check:</strong> Match a CPU to a socket, choose a RAID level for a scenario, and size a PSU out loud, without looking. If you can, you have this module.</p>\n"
};
