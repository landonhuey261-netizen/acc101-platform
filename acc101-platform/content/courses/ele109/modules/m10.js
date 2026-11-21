// ele109 - Module 10: Networks & Industrial Communications Basics
module.exports = {
  "number": 10,
  "slug": "networks-industrial-communications-basics",
  "title": "Networks & Industrial Communications Basics",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why PLCs are networked and what a network carries.",
    "Describe Ethernet/IP, PROFINET, and Modbus as industrial protocols.",
    "Explain the difference between a producer/consumer and a client/server exchange.",
    "Describe network hardware: switches, cables, and IP addressing basics.",
    "Explain what happens when the network fails and how a PLC responds."
  ],
  "sections": [
    {
      "heading": "Why PLCs Are Networked",
      "html": "<p>A single PLC can run a single machine, but a plant is many machines that must work together — a conveyor that feeds a filler, a filler that feeds a packer, a packer that feeds a palletizer. The PLCs on those machines exchange data over a <strong>network</strong>: the conveyor's PLC tells the filler's PLC that a bottle is coming, the filler's PLC tells the packer's PLC that a case is full, and the HMI (Module 8) reads data from all of them. The network also carries the programming terminal's connection to each PLC, so an engineer can go online with any PLC from one desk, and it carries data to the plant's supervisory systems that track production counts and downtime.</p>\n<p>The network does not carry the control logic's safety functions — a machine's emergency stop and its safety interlocks are hardwired (Module 11), not sent over the network, because the network can fail and the safety function must not. The network carries information: status, commands between machines, setpoints, and production data. When the network fails, each PLC keeps running its own machine on its own logic, and the HMI shows a communication failure (Module 8) rather than stale data.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The network carries information between machines, HMIs, and supervisory systems — status, commands, setpoints, and production data. Safety functions are hardwired, not networked.</div>"
    },
    {
      "heading": "Industrial Protocols: Ethernet/IP, PROFINET & Modbus",
      "html": "<p>A <strong>protocol</strong> is the language the devices on a network speak. The three industrial protocols a technician will meet are <strong>EtherNet/IP</strong>, <strong>PROFINET</strong>, and <strong>Modbus</strong>. EtherNet/IP is the Allen-Bradley/Rockwell protocol, built on standard Ethernet, and it uses a <strong>producer/consumer</strong> model: a device produces data (a tag) and any device that needs it consumes it, with the data sent at a regular rate. PROFINET is the Siemens protocol, also built on Ethernet, and it is used the same way in Siemens systems. Modbus is the older, simpler protocol: it uses a <strong>client/server</strong> model, where a client (usually a PLC or an HMI) asks a server (a drive, a meter, a sensor) for a value, and the server answers. Modbus runs over serial (Modbus RTU) or over Ethernet (Modbus TCP).</p>\n<p>The protocol a plant uses is usually set by the PLC brand: a Rockwell plant speaks EtherNet/IP, a Siemens plant speaks PROFINET, and Modbus is the common language that lets different brands talk to each other — a Modbus TCP connection from a PLC to a power meter, for example. The technician does not need to speak the protocol's details, but must know which protocol a device uses, because a device that speaks only Modbus cannot be connected to an EtherNet/IP network without a gateway, and a gateway is a device that translates one protocol into another.</p>"
    },
    {
      "heading": "Network Hardware, Addressing & What Happens When It Fails",
      "html": "<p>The network's hardware is familiar: <strong>Ethernet cables</strong> (usually shielded, industrial-rated, with M12 or RJ45 connectors), <strong>switches</strong> that connect the devices, and the PLC's <strong>Ethernet port</strong>. Each device on the network has an <strong>IP address</strong> — a number that identifies it, such as 192.168.1.10 — and the devices that must talk to each other must be on the same <strong>subnet</strong>, the range of addresses that can reach each other directly. Two devices with the same IP address will conflict and neither will communicate reliably, and a device with the wrong subnet mask will not be reachable at all. The most common network fault in a plant is a loose or damaged cable, followed by a duplicate IP address.</p>\n<p>When the network fails, each PLC keeps running its own machine — the control logic is local, and the network is only for information. The HMI shows a communication failure, the supervisory system stops receiving production data, and the machines that depend on each other for handshakes (Module 1's conveyor-to-filler signal) stop receiving each other's signals. The correct response is to treat the network as a separate system: check the cables, check the switch's lights, check the IP addresses, and check the protocol — and never assume a network fault is a PLC fault, or a PLC fault is a network fault.</p>"
    },
    {
      "heading": "Industrial Network Security Basics",
      "html": "<p>An industrial network is a tempting target: it controls physical machines, and a person who can reach it can stop a line, change a setpoint, or damage equipment. The basic defenses are simple and they are the technician's responsibility to respect. <strong>Segmentation</strong> means the control network is separate from the office network and from the internet — a firewall sits between them, and only the data that must cross the firewall is allowed through. <strong>Physical access</strong> means the network's switches and the PLCs' Ethernet ports are in locked panels, not on an open office desk. <strong>Passwords</strong> mean the PLCs and the HMIs have their default passwords changed, and the programming terminal's access is controlled.</p>\n<p>The technician's rules are practical: never plug an unknown device (a laptop, a USB drive, a phone) into the control network; never connect the control network to the internet to \"just check something\"; never share a PLC password; and report any unknown device or any unexpected network behavior to the supervisor. A USB drive that has been in an office computer can carry malware into the control network, and a laptop that is connected to both the control network and the internet bridges the two — which is exactly what segmentation is meant to prevent.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Plugging a laptop into the control network and the office Wi-Fi at the same time. The laptop bridges the two networks and defeats segmentation. One network at a time.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>PLCs are networked so machines can exchange status and commands, HMIs can read all of them, and engineers can go online from one desk. Safety functions are hardwired, not networked.</li>\n<li>Protocols: EtherNet/IP (Rockwell, producer/consumer) · PROFINET (Siemens) · Modbus (client/server, the common language between brands). A gateway translates between protocols.</li>\n<li>Hardware: shielded industrial Ethernet cables, switches, and the PLC's Ethernet port. Each device has an IP address and must be on the same subnet as the devices it talks to.</li>\n<li>Common network faults: a loose or damaged cable, a duplicate IP address, a wrong subnet mask. When the network fails, each PLC keeps running its own machine.</li>\n<li>Security: segmentation (control network separate from office and internet, firewall between), physical access (locked panels), changed default passwords, and no unknown devices on the control network.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Assuming a network fault is a PLC fault. Check the cables, the switch lights, and the IP addresses first — and remember that each PLC keeps running its own machine when the network fails.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain the three protocols, the IP address basics, and the security rules, you have this module. Module 11 covers safety in automated systems.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Industrial network", "def": "The network connecting PLCs, HMIs, and supervisory systems in a plant." },
    { "term": "Protocol", "def": "The language devices on a network speak to each other." },
    { "term": "EtherNet/IP", "def": "The Rockwell industrial protocol, built on Ethernet, using a producer/consumer model." },
    { "term": "PROFINET", "def": "The Siemens industrial protocol, built on Ethernet." },
    { "term": "Modbus", "def": "An older, simpler protocol using a client/server model; Modbus RTU over serial, Modbus TCP over Ethernet." },
    { "term": "Producer/consumer", "def": "A network model where a device produces data and any device that needs it consumes it." },
    { "term": "Client/server", "def": "A network model where a client asks a server for a value and the server answers." },
    { "term": "Gateway", "def": "A device that translates one protocol into another." },
    { "term": "IP address", "def": "The number that identifies a device on a network, such as 192.168.1.10." },
    { "term": "Subnet", "def": "The range of IP addresses that can reach each other directly." },
    { "term": "Switch", "def": "The network device that connects PLCs, HMIs, and other devices together." },
    { "term": "Segmentation", "def": "Keeping the control network separate from the office network and the internet, with a firewall between them." },
    { "term": "Supervisory system", "def": "A plant-level system that collects production counts, downtime, and other data from the PLCs." },
    { "term": "Handshake", "def": "A signal exchanged between two machines (or PLCs) to coordinate their work." },
    { "term": "Duplicate IP address", "def": "Two devices with the same IP address, which prevents either from communicating reliably." }
  ],
  "video": {
    "title": "Industrial Networks & Communication Protocols Explained | PROFINET, EtherNet/IP, Modbus & More",
    "embedUrl": "https://www.youtube.com/embed/LT9rgUE1twA",
    "note": "A clear overview of industrial networks — PROFINET, EtherNet/IP, Modbus, and the other protocols — with what each one is used for and how they differ.",
    "more": [
      { "title": "Industrial Network - Explained with Examples (Ethernet/IP, ProfiNet, Modbus)", "url": "https://www.youtube.com/watch?v=txi2p5_OjKU" },
      { "title": "What is Modbus Communication Protocol? | Basics of Modbus TCP/IP and RTU", "url": "https://www.youtube.com/watch?v=o3FtkRTZprk" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A conveyor PLC and a filler PLC must exchange a \"bottle coming\" signal. What carries that signal, and what happens if the network fails?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The industrial network carries it, using the plant's protocol (EtherNet/IP, PROFINET, or Modbus). Step 2: If the network fails, each PLC keeps running its own machine on its own logic. Step 3: The filler stops receiving the \"bottle coming\" signal, so the machines lose coordination — but neither machine runs unsafely, because safety is hardwired.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Two PLCs on the same network both have the IP address 192.168.1.10. What happens, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A duplicate IP address — neither PLC communicates reliably. Step 2: The fix is to give one of them a different, unused address on the same subnet (for example 192.168.1.11). Step 3: Document the plant's IP address list so duplicates do not happen again.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A power meter speaks only Modbus TCP, but the plant's PLCs speak EtherNet/IP. How do they talk to each other?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: They cannot talk directly — the protocols are different. Step 2: Use a gateway that translates Modbus TCP into EtherNet/IP (or use a PLC module that speaks Modbus TCP). Step 3: The gateway is configured with the meter's Modbus addresses and the PLC's tags.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> An HMI shows a communication failure for one PLC, but the machine is still running. What is happening, and what do you check first?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The network link to that PLC has failed; the PLC itself is still running its machine. Step 2: Check the cable to that PLC, the switch port's light, and the PLC's Ethernet port light. Step 3: A loose or damaged cable is the most common cause.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A technician needs to go online with a PLC. Their laptop is connected to the office Wi-Fi. What should they do, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Disconnect from the office Wi-Fi before connecting to the control network. Step 2: A laptop connected to both networks bridges them and defeats segmentation. Step 3: Connect to one network at a time, and never plug an unknown device into the control network.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A plant's control network is connected directly to the internet so the engineer can check it from home. What is wrong with this, and what is the correct arrangement?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A direct internet connection exposes the control network to anyone on the internet. Step 2: The correct arrangement is segmentation: the control network is separate, with a firewall between it and the office network and the internet, and only the data that must cross is allowed through. Step 3: Remote access, if needed, goes through a secured, controlled connection — not a direct link.</p>"
    }
  ],
  "quiz": [
    {
      "q": "PLCs are networked so that:",
      "choices": ["They can share safety interlocks", "Machines can exchange status and commands, HMIs can read them, and engineers can go online", "They can run without power supplies", "They can replace the HMI"],
      "answer": 1,
      "explanation": "Correct: (b). The network carries information between machines and to HMIs and supervisors. (a) Safety interlocks are hardwired, not networked. (c) Power supplies are still needed. (d) The HMI is still needed."
    },
    {
      "q": "EtherNet/IP uses a:",
      "choices": ["Client/server model", "Producer/consumer model", "Serial-only connection", "Wireless-only connection"],
      "answer": 1,
      "explanation": "Correct: (b). EtherNet/IP devices produce data and consumers consume it. (a) Client/server is Modbus. (c) EtherNet/IP runs on Ethernet, not serial-only. (d) It is not wireless-only."
    },
    {
      "q": "Modbus uses a:",
      "choices": ["Producer/consumer model", "Client/server model", "Peer-to-peer only model", "Broadcast-only model"],
      "answer": 1,
      "explanation": "Correct: (b). A Modbus client asks a server for a value and the server answers. (a) Producer/consumer is EtherNet/IP. (c) Modbus is not peer-to-peer only. (d) Modbus is not broadcast-only."
    },
    {
      "q": "Two devices with the same IP address will:",
      "choices": ["Work normally", "Conflict and neither will communicate reliably", "Share the address safely", "Automatically fix themselves"],
      "answer": 1,
      "explanation": "Correct: (b). A duplicate IP address breaks communication for both. (a) They do not work normally. (c) Sharing an address is not safe. (d) They do not fix themselves."
    },
    {
      "q": "When the industrial network fails, each PLC:",
      "choices": ["Stops immediately", "Keeps running its own machine on its own logic", "Loses its program", "Shuts down the HMI"],
      "answer": 1,
      "explanation": "Correct: (b). Control logic is local; the network carries information only. (a) PLCs do not stop on a network failure. (c) The program is not lost. (d) The HMI shows a communication failure but is not shut down by the PLC."
    },
    {
      "q": "Segmentation means:",
      "choices": ["Dividing the PLC program into sections", "Keeping the control network separate from the office network and the internet, with a firewall between", "Cutting the cables shorter", "Using two PLCs for one machine"],
      "answer": 1,
      "explanation": "Correct: (b). Segmentation isolates the control network. (a) Program sections are not segmentation. (c) Cable length is unrelated. (d) Two PLCs is redundancy, not segmentation."
    },
    {
      "q": "A gateway is used to:",
      "choices": ["Supply power to the network", "Translate one protocol into another", "Cool the PLC", "Count parts"],
      "answer": 1,
      "explanation": "Correct: (b). A gateway lets devices that speak different protocols talk. (a) Power comes from the power supply. (c) Cooling is not a gateway's job. (d) Counting is a counter's job."
    },
    {
      "q": "The most common industrial network fault is:",
      "choices": ["A failed CPU", "A loose or damaged cable", "A wrong PLC program", "A failed motor"],
      "answer": 1,
      "explanation": "Correct: (b). Cables are the most common network failure point. (a) A failed CPU is a PLC fault, not a network fault. (c) The program does not affect the cable. (d) A failed motor is a field fault."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Networks &amp; Industrial Communications: Quick Reference</h3>\n<p><strong>Core idea:</strong> The network carries information — status, commands, setpoints, production data — between machines, HMIs, and supervisory systems. Safety functions are hardwired, not networked.</p>\n<p><strong>Protocols:</strong> EtherNet/IP (Rockwell, producer/consumer) · PROFINET (Siemens) · Modbus (client/server; RTU serial, TCP Ethernet). A gateway translates between protocols.</p>\n<p><strong>Hardware &amp; addressing:</strong> Shielded industrial Ethernet cables · Switches · PLC Ethernet port. Each device has an IP address and must be on the same subnet. Duplicate IP = conflict.</p>\n<p><strong>Failure:</strong> A loose or damaged cable is the most common fault. When the network fails, each PLC keeps running its own machine.</p>\n<p><strong>Security:</strong> Segmentation (control network separate, firewall between) · Locked panels · Changed default passwords · No unknown devices on the control network · One network at a time on a laptop.</p>\n<p><strong>Self-check:</strong> Explain the three protocols, the IP basics, and the security rules. If you can, you have this module.</p>\n"
};
