// egr111 - Module 10: HMI, Networking & Data (SCADA Intro)
module.exports = {
  "number": 10,
  "slug": "hmi-networking-scada",
  "title": "HMI, Networking & Data (SCADA Intro)",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what an HMI does and what a good screen looks like.",
    "Explain the difference between an HMI, a PLC, and SCADA.",
    "Name the main industrial networks and what each is used for.",
    "Explain alarms, trends, and data historians.",
    "Explain the basics of industrial cybersecurity."
  ],
  "sections": [
    {
      "heading": "The HMI: The Machine's Face",
      "html": "<p>An HMI (human-machine interface) is the touchscreen or panel that lets an operator see what a machine is doing and control it. It shows the machine's state with pictures, numbers, and colours — a conveyor running, a tank level, a temperature — and it has buttons for start, stop, and mode changes. A good HMI screen is simple: the most important information is biggest, running states are green, faults are red, and every button does what its label says.</p>\n<p>The HMI does not control the machine — the PLC does. The HMI only displays data from the PLC and sends operator commands to it. That separation matters: if the HMI fails, the PLC keeps running the machine safely; the operator just loses the display. A good HMI is designed for the operator at 2 a.m.: clear, uncluttered, and impossible to misread.</p>\n"
    },
    {
      "heading": "HMI, PLC, and SCADA: Three Different Jobs",
      "html": "<p>The PLC controls one machine, in real time, scan by scan. The HMI shows one machine to one operator. SCADA (supervisory control and data acquisition) supervises a whole plant or process: it collects data from many PLCs, shows the whole system on screens in a control room, logs history, raises alarms, and lets operators supervise from a distance. A water treatment plant has dozens of PLCs and one SCADA system watching them all.</p>\n<p>SCADA adds three things an HMI does not: long-term data logging (a historian), plant-wide alarming, and remote supervision. It also adds risk: a SCADA system connected to the internet can be attacked, so it must be protected. The PLC, the HMI, and the SCADA each have their own job, and confusing them is a common beginner error.</p>\n"
    },
    {
      "heading": "Industrial Networks: How Devices Talk",
      "html": "<p>PLCs, HMIs, and SCADA systems talk over industrial networks. The most common are EtherNet/IP (used widely with Allen-Bradley), PROFINET (used widely with Siemens), and Modbus (an older, simpler protocol that almost everything supports). These are not the same as office Ethernet: they are built for real-time control, with deterministic timing and rugged hardware, though they often run on the same cables and switches.</p>\n<p>OPC UA is a newer standard that lets different brands of equipment share data in a common way — a Siemens PLC can send data to a SCADA system from another vendor through OPC UA. When choosing a network, the deciding factors are what the existing equipment speaks, how fast the data must arrive, and how many devices must connect. Mixing protocols without a plan is how plants end up with devices that cannot talk to each other.</p>\n"
    },
    {
      "heading": "Alarms, Trends, and Historians",
      "html": "<p>An alarm tells the operator that something needs attention: a temperature too high, a tank too low, a motor tripped. A good alarm system has few alarms, each one meaningful, and each one with a clear action — an alarm that nobody acts on is worse than no alarm, because operators learn to ignore them all. Alarms must be acknowledged, and the acknowledgement is logged, so there is a record of who saw what and when.</p>\n<p>A trend is a graph of a value over time — temperature over the last hour, pressure over the last shift — and it is how operators spot a slow drift before it becomes a fault. A historian is the long-term database that stores those trends for months or years, so engineers can analyse batches, prove quality, and investigate incidents. Data is only useful if it is stored with a timestamp and a tag name that means something.</p>\n"
    },
    {
      "heading": "Industrial Cybersecurity Basics",
      "html": "<p>Industrial systems were once isolated, but today they are often connected — to the office network, to remote maintenance, and sometimes to the internet. That connection is a risk: an attacker who reaches a PLC can stop a plant or damage equipment. The basics are simple and effective: keep control networks separate from office networks with a firewall, never connect a PLC directly to the internet, use strong passwords and change the defaults, keep software patched, and allow remote access only through a secure VPN with two-factor authentication.</p>\n<p>The most common attack route is not a clever hack — it is a default password that was never changed, or a USB stick plugged into a control computer. Good cybersecurity in industry is mostly good hygiene: defaults changed, access limited, and anything that can reach the control network carefully controlled.</p>\n<p><p><strong>Takeaways:</strong><ul><li>The PLC controls, the HMI displays one machine, and SCADA supervises the whole plant.</li><li>A good HMI is simple, clear, and impossible to misread at 2 a.m.</li><li>EtherNet/IP, PROFINET, and Modbus are the main industrial networks; OPC UA links different brands.</li><li>Alarms must be few, meaningful, and acknowledged; trends and historians turn data into understanding.</li><li>Keep control networks separate, change default passwords, and never put a PLC on the internet.</li></ul></p>\n<p><strong>Common mistake:</strong> Thinking the HMI controls the machine. The PLC controls; the HMI only displays and sends operator commands — if the HMI fails, the PLC keeps running.</p>\n<p><strong>Common mistake:</strong> Creating too many alarms. An alarm flood teaches operators to ignore alarms, which is worse than having none.</p>\n<p><strong>Ready check:</strong> If you can explain PLC versus HMI versus SCADA, name the main networks, and state three cybersecurity basics, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "HMI",
      "def": "Human-machine interface: the touchscreen or panel that shows a machine's state to an operator and takes their commands."
    },
    {
      "term": "SCADA",
      "def": "Supervisory control and data acquisition: a system that supervises a whole plant, collecting data from many PLCs."
    },
    {
      "term": "EtherNet/IP",
      "def": "An industrial network protocol widely used with Allen-Bradley equipment."
    },
    {
      "term": "PROFINET",
      "def": "An industrial network protocol widely used with Siemens equipment."
    },
    {
      "term": "Modbus",
      "def": "An older, simple industrial protocol supported by almost all brands of equipment."
    },
    {
      "term": "OPC UA",
      "def": "A standard that lets different brands of industrial equipment share data in a common way."
    },
    {
      "term": "Historian",
      "def": "A long-term database that stores process data with timestamps for analysis and investigation."
    },
    {
      "term": "Alarm",
      "def": "A notification that something needs operator attention, which must be acknowledged and logged."
    },
    {
      "term": "Trend",
      "def": "A graph of a value over time, used to spot slow drift before it becomes a fault."
    },
    {
      "term": "Tag",
      "def": "A named data point in a control system, such as a temperature or a motor state."
    },
    {
      "term": "Cybersecurity",
      "def": "Protecting control systems from unauthorised access, through network separation, passwords, and patching."
    },
    {
      "term": "Firewall",
      "def": "A device that separates networks and blocks unauthorised traffic between them."
    },
    {
      "term": "VPN",
      "def": "Virtual private network: a secure encrypted connection for remote access to a control system."
    },
    {
      "term": "Deterministic",
      "def": "With timing that is guaranteed and repeatable, as industrial networks need for real-time control."
    }
  ],
  "video": {
    "title": "What is an HMI?",
    "embedUrl": "https://www.youtube.com/embed/kujHQgK352o",
    "note": "What an HMI is, what it shows, and how it differs from a PLC. Watch it, then sketch an HMI screen for a conveyor: what would you show, and what would you leave out?",
    "more": [
      {
        "title": "What Is the Difference Between PLC and DCS?",
        "url": "https://www.youtube.com/watch?v=iF99iKlDpxA"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> An operator's HMI screen fails, but the machine keeps running normally. Explain why the machine keeps running, and what the operator has lost.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The PLC controls the machine, not the HMI — the HMI only displays data and sends operator commands. Step 2: If the HMI fails, the PLC keeps running its program and the machine keeps working. Step 3: What the operator has lost is visibility and control: they cannot see the machine's state or change its mode until the HMI is fixed. A good answer explains the separation of control and display.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A plant has 40 PLCs across a water treatment site and wants one control room to supervise them all, with long-term data logging. Should it buy more HMIs or a SCADA system? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It needs a SCADA system, because SCADA supervises a whole plant from many PLCs, with long-term logging and plant-wide alarming. Step 2: HMIs are for one machine and one operator — 40 HMIs would not give a single plant-wide view or a historian. Step 3: SCADA collects data from all the PLCs into one control room with trends and a historian. A good answer names SCADA and explains why HMIs are not enough.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> An alarm system raises 200 alarms per shift, and operators have started ignoring them. Explain the problem and suggest three fixes.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The problem is alarm flood — too many alarms, most of them meaningless, so operators learn to ignore them all, including the important ones. Step 2: Fix one — remove nuisance alarms that need no action. Step 3: Fix two — set alarm limits so they only trigger on real problems. Step 4: Fix three — give every alarm a clear action and an owner. A good answer names alarm flood and gives three real fixes.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A trend graph shows a pump's bearing temperature rising slowly over three days, from 60 °C to 85 °C. What does the trend tell you, and what should happen next?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The trend shows a slow drift, not a sudden fault — the bearing is degrading gradually. Step 2: That is exactly what trends are for: spotting a problem before it becomes a failure. Step 3: The next step is to plan maintenance: inspect the bearing, check lubrication, and schedule a replacement before it seizes. A good answer explains the drift and the planned action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A factory wants to let a supplier monitor a machine remotely. Name three cybersecurity measures that must be in place before remote access is allowed.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Remote access only through a secure VPN with two-factor authentication, never a direct internet connection to the PLC. Step 2: A firewall separating the control network from the office network and the internet. Step 3: Strong passwords with all defaults changed, and the supplier's access limited to only the machine they need. A good answer gives three concrete measures.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A plant has Siemens PLCs and a SCADA system from another vendor. Which standard lets them share data, and why is that useful?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: OPC UA lets different brands share data in a common way. Step 2: Without it, the Siemens PLCs would need a Siemens-specific link to the SCADA, or the SCADA would need a custom driver. Step 3: OPC UA means the plant can mix brands and still get one plant-wide view. A good answer names OPC UA and explains the mixing benefit.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What is the job of an HMI?",
      "choices": [
        "To control the machine in real time",
        "To show a machine's state to an operator and take their commands",
        "To store years of process data",
        "To supply power to the PLC"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An HMI displays and takes commands; the PLC does the controlling. (a) is the PLC's job. (c) is a historian's job. (d) is the power supply's job."
    },
    {
      "q": "What is the main difference between an HMI and SCADA?",
      "choices": [
        "An HMI is for one machine; SCADA supervises a whole plant with many PLCs, logging, and plant-wide alarms",
        "SCADA is for one machine; an HMI supervises a whole plant",
        "There is no difference",
        "An HMI is software and SCADA is hardware"
      ],
      "answer": 0,
      "explanation": "Correct: (a). SCADA is plant-wide supervision with a historian; an HMI is one machine's display. (b) has them backwards. (c) is wrong: they have different scopes. (d) is wrong: both are software systems."
    },
    {
      "q": "Which industrial network is most associated with Allen-Bradley equipment?",
      "choices": [
        "PROFINET",
        "EtherNet/IP",
        "Modbus",
        "Wi-Fi"
      ],
      "answer": 1,
      "explanation": "Correct: (b). EtherNet/IP is the Allen-Bradley (Rockwell) network. (a) is the Siemens network. (c) is a brand-neutral older protocol. (d) is an office wireless standard, not an industrial control network."
    },
    {
      "q": "Which protocol is most associated with Siemens equipment?",
      "choices": [
        "EtherNet/IP",
        "PROFINET",
        "Modbus TCP",
        "Bluetooth"
      ],
      "answer": 1,
      "explanation": "Correct: (b). PROFINET is the Siemens industrial network. (a) is the Allen-Bradley network. (c) is a brand-neutral protocol. (d) is a short-range personal wireless standard."
    },
    {
      "q": "What is an alarm flood, and why is it dangerous?",
      "choices": [
        "Too many alarms, so operators learn to ignore them all — including the important ones",
        "A flood of water in the plant",
        "Alarms that are too loud",
        "Alarms that trigger too slowly"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Alarm flood teaches operators to ignore alarms, which defeats the alarm system. (b) is a physical flood, not an alarm problem. (c) is wrong: volume is not the issue. (d) is wrong: slow alarms are a different problem."
    },
    {
      "q": "What is a historian in a SCADA system?",
      "choices": [
        "A person who writes the plant's history",
        "A long-term database that stores process data with timestamps",
        "A type of alarm",
        "A backup PLC"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A historian stores trends for months or years for analysis and investigation. (a) is a job title, not a system. (c) is wrong: alarms are notifications. (d) is wrong: a backup PLC is redundancy."
    },
    {
      "q": "What is the most important rule for connecting a PLC to the outside world?",
      "choices": [
        "Connect it directly to the internet for easy access",
        "Never connect a PLC directly to the internet; use a firewall and a secure VPN",
        "Use the default password so remote engineers can get in",
        "Share the PLC's address publicly"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A PLC must sit behind a firewall, with remote access only through a secure VPN. (a) is dangerous: a PLC on the internet can be attacked. (c) is dangerous: default passwords are the most common attack route. (d) is dangerous: it advertises the target."
    },
    {
      "q": "What does OPC UA do?",
      "choices": [
        "It controls motor speed",
        "It lets different brands of industrial equipment share data in a common way",
        "It stores the PLC program",
        "It filters compressed air"
      ],
      "answer": 1,
      "explanation": "Correct: (b). OPC UA is a brand-neutral standard for sharing industrial data. (a) is a VFD's job. (c) is the CPU's memory. (d) is an FRL unit's job."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — HMI, Networking & Data (SCADA Intro): Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what an HMI does and what a good screen looks like.</p>\n<p><strong>Key terms:</strong> HMI · SCADA · EtherNet/IP · PROFINET · Modbus · OPC UA · Historian · Alarm.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what an HMI does and what a good screen looks like.</li>\n<li>Explain the difference between an HMI, a PLC, and SCADA.</li>\n<li>Name the main industrial networks and what each is used for.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
