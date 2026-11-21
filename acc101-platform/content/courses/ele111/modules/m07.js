module.exports = {
  "number": 7,
  "slug": "batteries-energy-storage-systems",
  "title": "Batteries & Energy Storage Systems",
  "estTime": "3–4 hours",
  "objectives": [
    "Compare lead-acid and lithium-ion batteries for PV systems.",
    "Explain battery capacity, voltage, depth of discharge, and cycle life.",
    "Describe how a battery bank is wired in series and parallel.",
    "Explain the role of the battery management system (BMS).",
    "Describe NEC Article 706 requirements for energy storage systems."
  ],
  "sections": [
    {
      "heading": "Why Storage, and What a Battery Really Is",
      "html": "<p>A battery stores energy chemically and returns it as electricity when it is needed. In a PV system, the battery's job is to hold the daytime sun for the night, to carry the house through a cloudy stretch, and to power the critical loads when the grid goes down. The battery is the most expensive part of a storage system, the part with the shortest life, and the part whose sizing decides whether the system works — so the technician who understands batteries understands the system.</p><p>Two chemistries dominate PV storage. <strong>Lead-acid</strong> batteries — flooded, sealed AGM, and gel — are the older technology: they are cheaper to buy, heavier, and shorter-lived, and they must not be drained deeply (a flooded lead-acid battery regularly drained below 50% will fail early). <strong>Lithium-ion</strong> batteries — most commonly lithium iron phosphate (LFP) in residential storage — cost more up front, weigh less, last far longer, can be drained much deeper (commonly 80–90% usable), and need a battery management system to watch over them. Most new residential storage systems use LFP, and this module treats it as the default while teaching lead-acid as the legacy system the technician will still meet in the field.</p>"
    },
    {
      "heading": "Capacity, Voltage, Depth of Discharge, and Cycle Life",
      "html": "<p>Four numbers describe a battery. <strong>Capacity</strong> is how much energy it holds, measured in kilowatt-hours (kWh) for a system or amp-hours (Ah) for a single battery at its voltage. <strong>Voltage</strong> is the system's nominal voltage — 12, 24, or 48 volts for most residential storage, with 48 volts the standard for a whole-house battery because higher voltage means lower current for the same power. <strong>Depth of discharge (DoD)</strong> is how far the battery may be drained: an LFP battery is commonly used to 80–90% DoD, while a lead-acid battery is commonly limited to 50% DoD. <strong>Cycle life</strong> is how many charge-discharge cycles the battery survives before its capacity falls below a set level — thousands of cycles for LFP, hundreds to a couple of thousand for lead-acid.</p><p>The usable capacity is what matters, not the nameplate capacity. A 10 kWh lead-acid bank at 50% DoD gives 5 kWh of usable energy; a 10 kWh LFP bank at 90% DoD gives 9 kWh. A customer who buys on nameplate capacity alone will be disappointed, and a technician who sizes on nameplate capacity will undersize the system. The sizing rule is simple: usable energy = nameplate capacity × allowed depth of discharge, and the battery bank must hold the usable energy the loads need.</p><div class=\"callout\"><strong>Key idea:</strong> Size on usable energy, not nameplate capacity: usable kWh = nameplate kWh × allowed depth of discharge. A 10 kWh lead-acid bank at 50% DoD gives only 5 kWh.</div>"
    },
    {
      "heading": "Wiring a Battery Bank: Series and Parallel",
      "html": "<p>Batteries are wired together the same way modules are: <strong>series</strong> adds voltage and <strong>parallel</strong> adds capacity. Four 12-volt, 100-Ah batteries in series make a 48-volt, 100-Ah bank; four of the same batteries in parallel make a 12-volt, 400-Ah bank. A 48-volt bank is usually built from native 48-volt batteries wired in parallel, because wiring lower-voltage batteries in series to reach 48 volts can cause the batteries to drift out of balance — one battery reaching its low-voltage cutoff before the others, which shuts the system down and can damage the battery.</p><p>The bank's wiring must be done with equal-length cables to the busbars so that each battery shares the current equally, and the overcurrent protection must be sized for the bank's fault current, which can be very large — a battery bank can deliver hundreds or thousands of amps into a short circuit. The disconnect for the battery must be rated for DC and for the bank's voltage and current, and it must be accessible. And the safety rule applies with full force: a battery bank is energized whenever it is connected, it cannot be turned off the way an array can be covered, and all work is de-energized, locked out and tagged out, and tested dead under a licensed supervisor, per NFPA 70E.</p>"
    },
    {
      "heading": "The BMS and NEC Article 706",
      "html": "<p>Every lithium battery system has a <strong>battery management system (BMS)</strong> — the electronics that watch over the cells. The BMS monitors each cell's voltage, temperature, and current, balances the cells so they stay at the same charge, and disconnects the battery if a cell goes over voltage, under voltage, over temperature, or over current. The BMS is the reason an LFP battery can be used safely at 90% depth of discharge: it is the guardian that stops the battery from being damaged, and a system without a working BMS is a system that must not be operated.</p><p><strong>NEC Article 706</strong> governs energy storage systems: where they may be installed, how they must be separated from living spaces, the working clearances, the labeling, and the disconnects. Residential storage is commonly installed in a garage or a utility room, not in a bedroom or a living space, and the installation must follow the manufacturer's instructions and the listing — including the spacing between battery units, the ventilation (for chemistries that need it), and the fire separation the listing requires. The technician installs to the listing and the code, and the system is inspected before it is energized.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Lead-acid is cheaper and shorter-lived, limited to about 50% depth of discharge; LFP lithium is the modern default, usable to 80–90% DoD with a BMS.</li><li>Usable energy = nameplate capacity × allowed depth of discharge — size on usable energy.</li><li>Series adds voltage, parallel adds capacity; native 48-volt batteries in parallel are preferred over series-built 48-volt banks.</li><li>The BMS monitors every cell and disconnects the battery on over-voltage, under-voltage, over-temperature, or over-current.</li><li>Article 706 governs energy storage installation, separation, clearances, labeling, and disconnects.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Sizing a battery bank on nameplate capacity and forgetting depth of discharge. A 10 kWh bank is not 10 kWh of usable energy — apply the DoD first.</div><div class=\"callout\"><strong>Common mistake:</strong> Building a 48-volt bank from 12-volt batteries in series. The batteries drift out of balance and one hits its cutoff early — use native 48-volt batteries in parallel.</div><p><strong>Ready-to-Work link:</strong> If you can compare lead-acid and LFP, size a bank on usable energy, and explain the BMS, you have this module. Module 8 covers the device that feeds the batteries: the charge controller.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Lead-acid battery",
      "def": "The older battery chemistry: cheaper, heavier, shorter-lived, limited to about 50% depth of discharge."
    },
    {
      "term": "Lithium iron phosphate (LFP)",
      "def": "The lithium battery chemistry most common in residential storage: long-lived, usable to 80–90% depth of discharge."
    },
    {
      "term": "Battery management system (BMS)",
      "def": "The electronics that monitor each cell's voltage, temperature, and current, balance the cells, and disconnect on fault."
    },
    {
      "term": "Depth of discharge (DoD)",
      "def": "How far a battery may be drained, as a percentage of its capacity."
    },
    {
      "term": "Cycle life",
      "def": "How many charge-discharge cycles a battery survives before its capacity falls below a set level."
    },
    {
      "term": "Usable capacity",
      "def": "The energy a battery can actually deliver: nameplate capacity × allowed depth of discharge."
    },
    {
      "term": "Nominal voltage",
      "def": "A battery system's rated voltage, commonly 12, 24, or 48 volts in residential storage."
    },
    {
      "term": "Battery bank",
      "def": "A group of batteries wired together to store energy for a PV system."
    },
    {
      "term": "NEC Article 706",
      "def": "The NEC article governing energy storage systems."
    },
    {
      "term": "State of charge",
      "def": "How full a battery is, as a percentage of its capacity."
    },
    {
      "term": "Busbar (battery)",
      "def": "The conductor bar to which parallel batteries connect so they share current equally."
    },
    {
      "term": "Fault current (battery)",
      "def": "The very large current a battery bank can deliver into a short circuit."
    }
  ],
  "video": {
    "title": "Off-Grid Solar Battery Strings: Why 48-Volt Systems Matter",
    "embedUrl": "https://www.youtube.com/embed/FJzeXWjCqSw",
    "note": "Watch the video, then work the assignment below. As you watch, note every term from this module's key terms list and write down one question the video raises for you.",
    "more": [
      {
        "title": "Choosing a Solar Inverter: Hybrid vs Microinverter",
        "url": "https://www.youtube.com/watch?v=OzvSJsUzE_k"
      },
      {
        "title": "String Inverters with Power Optimizers",
        "url": "https://www.youtube.com/watch?v=nDyZELxabI0"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A customer needs 9 kWh of usable energy overnight. Compare a lead-acid bank (50% DoD) and an LFP bank (90% DoD): what nameplate capacity does each need?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Lead-acid: 9 ÷ 0.50 = 18 kWh of nameplate capacity. Step 2: LFP: 9 ÷ 0.90 = 10 kWh of nameplate capacity. Step 3: The lead-acid bank must be nearly twice as big for the same usable energy — which is why LFP usually wins despite the higher price per kWh.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Four 12-volt, 100-Ah batteries are wired in series. What is the bank's voltage and capacity? What if they are wired in parallel?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Series adds voltage: 4 × 12 = 48 V, capacity stays 100 Ah. Step 2: Parallel adds capacity: voltage stays 12 V, capacity is 4 × 100 = 400 Ah. Step 3: Energy is the same either way (48 × 100 = 4,800 Wh; 12 × 400 = 4,800 Wh) — the wiring chooses the voltage.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> An LFP battery is rated 10 kWh, 6,000 cycles, 90% DoD. A lead-acid battery is rated 10 kWh, 1,000 cycles, 50% DoD. Compare their usable energy per cycle and their total lifetime energy.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: LFP usable per cycle = 10 × 0.90 = 9 kWh; lifetime = 9 × 6,000 = 54,000 kWh. Step 2: Lead-acid usable per cycle = 10 × 0.50 = 5 kWh; lifetime = 5 × 1,000 = 5,000 kWh. Step 3: The LFP battery delivers far more lifetime energy, which is why its higher purchase price is usually the better value.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> What does a BMS do, and why must a lithium system never be operated without a working BMS?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The BMS monitors each cell's voltage, temperature, and current, balances the cells, and disconnects the battery on over-voltage, under-voltage, over-temperature, or over-current. Step 2: Without it, a cell can be overcharged or over-discharged, which damages the battery and can cause a fire. Step 3: A system with a failed BMS is taken out of service until the BMS is repaired or replaced.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A 48-volt battery bank is built from 12-volt batteries in series. One battery keeps hitting its low-voltage cutoff before the others. What is happening, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The series batteries have drifted out of balance — they are not at the same state of charge. Step 2: The weakest battery reaches its cutoff first and shuts the system down, even though the other batteries still have energy. Step 3: The fix is to use native 48-volt batteries wired in parallel, with equal-length cables to a busbar so they share current equally.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Where may a residential battery system be installed, and what does Article 706 require?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Commonly a garage or utility room — not a bedroom or living space. Step 2: Article 706 requires the installation to follow the manufacturer's instructions and the listing: spacing between units, ventilation where required, working clearances, labeling, and disconnects. Step 3: The system is inspected before it is energized.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A 10 kWh lead-acid bank limited to 50% depth of discharge provides:",
      "choices": [
        "10 kWh usable",
        "5 kWh usable",
        "20 kWh usable",
        "0 kWh usable"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 10 × 0.50 = 5 kWh usable. (a) 10 kWh is the nameplate, not the usable energy. (c) 20 kWh is twice the nameplate. (d) The bank provides usable energy — 5 kWh of it."
    },
    {
      "q": "LFP lithium batteries are the modern default for residential storage because they:",
      "choices": [
        "Are the cheapest to buy",
        "Last far longer and can be used to 80–90% depth of discharge",
        "Need no BMS",
        "Are lighter than air"
      ],
      "answer": 1,
      "explanation": "Correct: (b). LFP lasts thousands of cycles and is usable to 80–90% DoD. (a) LFP costs more up front than lead-acid. (c) LFP needs a BMS. (d) No battery is lighter than air."
    },
    {
      "q": "The BMS in a lithium battery system:",
      "choices": [
        "Charges the battery from the grid",
        "Monitors each cell and disconnects on over-voltage, under-voltage, over-temperature, or over-current",
        "Mounts the modules",
        "Measures sunlight"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The BMS is the guardian that watches every cell. (a) Charging is the inverter's or charge controller's job. (c) Mounting is the racking's job. (d) Sunlight is measured by a sensor."
    },
    {
      "q": "Four 12 V, 100 Ah batteries in series make a bank of:",
      "choices": [
        "12 V, 400 Ah",
        "48 V, 100 Ah",
        "48 V, 400 Ah",
        "12 V, 100 Ah"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Series adds voltage (48 V) and capacity stays 100 Ah. (a) That is a parallel connection. (c) Series does not add capacity. (d) That is a single battery."
    },
    {
      "q": "NEC Article 706 governs:",
      "choices": [
        "Fire alarm systems",
        "Energy storage systems",
        "Data cabling",
        "Hazardous locations"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Article 706 covers energy storage systems. (a) Fire alarms are Article 760. (c) Data cabling is Article 800. (d) Hazardous locations are Articles 500–516."
    },
    {
      "q": "A battery bank's fault current is important because:",
      "choices": [
        "It is small and harmless",
        "A battery bank can deliver hundreds or thousands of amps into a short circuit",
        "It determines the battery's color",
        "It is the same as the load current"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Battery fault current is very large, so overcurrent protection and disconnects must be sized for it. (a) It is large, not small. (c) Color is irrelevant. (d) Fault current is far larger than load current."
    },
    {
      "q": "Depth of discharge (DoD) is:",
      "choices": [
        "How deep the battery is buried",
        "How far a battery may be drained, as a percentage of capacity",
        "How long the battery lasts in years",
        "The battery's voltage"
      ],
      "answer": 1,
      "explanation": "Correct: (b). DoD is the allowed drain as a percentage of capacity. (a) Batteries are not buried. (c) Lifespan in years is a different measure. (d) Voltage is the nominal system voltage."
    },
    {
      "q": "Building a 48 V bank from 12 V batteries in series is discouraged because:",
      "choices": [
        "It costs too little",
        "The batteries drift out of balance and one hits its cutoff early",
        "It makes too much voltage",
        "It is illegal everywhere"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Series-built banks drift out of balance. (a) Cost is not the reason. (c) 48 V is the intended voltage. (d) It is not illegal — it is poor practice compared with native 48 V batteries in parallel."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Batteries & Storage: Quick Reference</h3>\n<p><strong>Core idea:</strong> The battery holds the daytime sun for the night and for outages. Size on usable energy, not nameplate capacity.</p>\n<p><strong>Chemistries:</strong> Lead-acid — cheaper, shorter-lived, ~50% DoD · LFP lithium — modern default, thousands of cycles, 80–90% DoD, needs a BMS.</p>\n<p><strong>Usable energy:</strong> Nameplate kWh × allowed DoD. Series adds voltage, parallel adds capacity. Prefer native 48 V batteries in parallel.</p>\n<p><strong>BMS:</strong> Monitors every cell — voltage, temperature, current — balances cells, disconnects on fault. Never operate without it.</p>\n<p><strong>Article 706:</strong> Governs storage installation, separation, clearances, labeling, disconnects. Install to the listing; inspect before energizing.</p>\n<p><strong>Self-check:</strong> Size a bank for 9 kWh usable in lead-acid and in LFP from memory. If you can, you have this module.</p>\n"
};
