// ase-a6 - Module 9: CAN Bus & Networks
module.exports = {
  "number": 9,
  "slug": "can-bus-networks",
  "title": "CAN Bus & Networks",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why cars need networks instead of a wire for every signal.",
    "Describe how CAN bus works: messages, not wires.",
    "Explain what a gateway does and why networks are separated.",
    "Describe how modules share information over the network.",
    "Diagnose network faults: a dead module, a shorted bus, and a lost message."
  ],
  "sections": [
    {
      "heading": "Why Cars Need Networks",
      "html": "<p>A modern car has dozens of modules, and each one needs information from the others. The old way — a dedicated wire from every sensor to every module that needed it — would mean hundreds of wires, thick bundles, heavy connectors, and a wiring loom no one could build or repair. The new way is a <strong>network</strong>: a shared pair of wires that every module connects to, over which the modules send each other messages. One pair of wires carries hundreds of signals, and adding a new module means connecting it to the network, not running a new bundle of wires through the car.</p>\n<p>The network in almost every car is called <strong>CAN bus</strong> — Controller Area Network. It is the car's nervous system: the ECM, the TCM, the BCM, the anti-lock brake module, and the rest all sit on the bus and talk to each other. The ECM sends the engine speed and the torque it is making; the TCM uses that to decide when to shift; the BCM sends the air-conditioning request so the ECM can raise the idle speed. All of it happens as messages on two wires.</p>"
    },
    {
      "heading": "How CAN Bus Works: Messages, Not Wires",
      "html": "<p>CAN bus works by <strong>messages</strong>. Each message has an identifier that says what it is — engine speed, throttle position, wheel speed — and a set of data that carries the value. Every module on the bus hears every message, but each one only acts on the messages it needs. The ECM's engine-speed message is used by the TCM, the instrument cluster, and the cruise control, all from the same single message on the bus — no extra wires, no extra sensors.</p>\n<p>Messages have a priority: the identifier also decides which message goes first when two modules try to talk at the same time. Safety-critical messages — braking, airbags — get the highest priority and always win. And the bus is built to be robust: the two wires carry the signal as a pair, so electrical noise that hits both wires equally cancels out, and a module that talks nonsense is shut off by the others so it cannot jam the bus.</p>"
    },
    {
      "heading": "Gateways and Separate Networks",
      "html": "<p>Not every module sits on the same bus. A car usually has several networks: a fast one for the powertrain (engine, transmission, brakes), a slower one for the body (lights, locks, windows), and a separate one for safety systems. A <strong>gateway</strong> module connects the networks and passes messages between them, translating where needed. That separation matters: a fault on the body network cannot stop the powertrain network, and a module that floods one network with bad messages cannot take down the whole car.</p>\n<p>The gateway also guards the car. The diagnostic port — where the scan tool plugs in — connects through the gateway, so the tool can talk to every network without being wired into all of them. And on newer cars the gateway controls what the outside world can reach, so that a device plugged into the diagnostic port cannot command the brakes or the steering. Networks are about sharing information, but also about keeping the wrong information out.</p>"
    },
    {
      "heading": "Diagnosing Network Faults",
      "html": "<p>Network faults have their own patterns. <strong>One module dead:</strong> the module has lost power or ground, or it has failed — the rest of the network keeps working, but the dead module's messages stop and the other modules set codes saying they have lost communication with it. <strong>The whole bus down:</strong> every module stops talking at once, usually because the two bus wires are shorted together or to ground, or because one module has failed in a way that jams the bus. <strong>A lost message:</strong> a module works sometimes and fails sometimes, because a connector is loose or a wire is damaged, so messages are dropped now and then.</p>\n<p>Diagnosis starts with the scan tool: which modules answer, and which ones do not? A single silent module points at that module's power, ground, or the module itself. Every module silent points at the bus wiring. A scope on the bus wires shows whether messages are flowing and whether they are clean — a flat line means the bus is dead, a ragged pattern means a wiring fault. Network diagnosis is a team sport: the scan tool, the diagram, and the scope together.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Networks replace hundreds of dedicated wires with a shared pair that carries messages.</li>\n<li>CAN bus is the car's nervous system: modules send messages with identifiers, and every module hears every message but only acts on the ones it needs.</li>\n<li>Messages have priority — safety-critical messages always win.</li>\n<li>Gateways connect separate networks (powertrain, body, safety) and pass messages between them, keeping a fault on one network from stopping the others.</li>\n<li>Patterns: one silent module = that module's power, ground, or the module; all silent = bus wiring; intermittent = loose connector or damaged wire.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Replacing a module because the scan tool says it has lost communication with it. Lost communication usually means the module has no power or ground, or the bus wiring is faulty — the module is the last suspect, as always.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain why a car uses messages instead of wires and read a lost-communication pattern, you have this module. Module 10 teaches the two tests that find the faults networks cannot: voltage drop and parasitic draw.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "CAN bus",
      "def": "Controller Area Network — the shared pair of wires that the car's modules use to send each other messages."
    },
    {
      "term": "Network",
      "def": "A shared communication path that lets modules exchange information without a dedicated wire for every signal."
    },
    {
      "term": "Message",
      "def": "A packet of data on the network with an identifier saying what it is and data carrying the value."
    },
    {
      "term": "Identifier",
      "def": "The part of a CAN message that says what the message is — and also sets its priority."
    },
    {
      "term": "Gateway",
      "def": "A module that connects separate networks and passes messages between them, translating where needed."
    },
    {
      "term": "Bus",
      "def": "The shared wires of a network that all the modules connect to."
    },
    {
      "term": "Module",
      "def": "A computer built for a car; on a network, each module sends and receives messages."
    },
    {
      "term": "Priority",
      "def": "The order in which messages go first on the bus; safety-critical messages have the highest priority."
    },
    {
      "term": "Lost communication",
      "def": "A fault code saying a module has stopped hearing from another module — the other module may have lost power, or the bus may be faulty."
    },
    {
      "term": "Diagnostic port",
      "def": "The connector where the scan tool plugs in to talk to the car's networks through the gateway."
    },
    {
      "term": "Powertrain network",
      "def": "The fast network for the engine, transmission, and brakes."
    },
    {
      "term": "Body network",
      "def": "The slower network for the lights, locks, windows, and wipers."
    },
    {
      "term": "Scope",
      "def": "An oscilloscope, used on the bus wires to see whether messages are flowing and whether they are clean."
    },
    {
      "term": "Scan tool",
      "def": "The tool that reads fault codes and live data from the modules, and shows which modules answer and which do not."
    }
  ],
  "video": {
    "title": "CAN Bus Explained - A Simple Intro",
    "embedUrl": "https://www.youtube.com/embed/FqLDpHsxvf8",
    "note": "CSS Electronics explains CAN bus with clear, simple examples. Watch how messages replace wires and how priority works — those two ideas are the heart of this module.",
    "more": [
      {
        "title": "CANBUS – Networking so simple, even YOU can understand it!",
        "url": "https://www.youtube.com/watch?v=QTTCqGtT6I4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Explain why a car uses a network instead of running a dedicated wire from every sensor to every module that needs it.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Dozens of modules each need information from the others. Step 2: Dedicated wires would mean hundreds of wires, thick bundles, heavy connectors, and a loom no one could build or repair. Step 3: A network carries hundreds of signals on one shared pair of wires, and adding a module means connecting it to the network, not running a new bundle.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> How does CAN bus share one pair of wires between dozens of modules without the messages getting mixed up?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Each message has an identifier that says what it is — engine speed, throttle position, wheel speed. Step 2: Every module hears every message but only acts on the ones it needs. Step 3: The identifier also sets priority, so safety-critical messages go first when two modules try to talk at once.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> What is a gateway, and why are a car's networks separated instead of all on one bus?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A gateway connects separate networks and passes messages between them. Step 2: Networks are separated so a fault on one — the body network, for example — cannot stop another, like the powertrain network. Step 3: Separation also guards the car: a module flooding one network with bad messages cannot take down the whole car.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> The scan tool shows that every module has stopped answering at once. What kind of fault does that point to, and what would you check?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Every module silent at once points at the bus itself, not at any one module. Step 2: The two bus wires may be shorted together or to ground, or one module may have failed in a way that jams the bus. Step 3: Check the bus wiring and use a scope on the bus wires to see whether messages are flowing.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> The scan tool shows that one module has stopped answering, but all the others answer normally. What is the most likely fault, and what do you check first?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: One silent module points at that module, not the bus — the rest of the network is working. Step 2: Check that module's power and ground first. Step 3: Only if its power and ground are good do you suspect the module itself or its connection to the bus.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A module works sometimes and fails sometimes, and other modules report lost communication with it now and then. What is the most likely cause?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: An intermittent lost-communication fault points at a connection, not a dead module. Step 2: A loose connector or a damaged wire drops messages now and then. Step 3: The module itself works — its messages are being lost on the way — so inspect its connectors and the bus wiring before replacing anything.</p>"
    }
  ],
  "quiz": [
    {
      "q": "CAN bus is:",
      "choices": [
        "A single wire to each sensor",
        "A shared pair of wires that the car's modules use to send each other messages",
        "A type of battery",
        "A kind of fuse"
      ],
      "answer": 1,
      "explanation": "Correct: (b). One shared pair carries hundreds of signals as messages. (a) A wire to each sensor is the old way networks replaced. (c) A battery stores energy; it is not a network. (d) A fuse protects a circuit; it is not a network."
    },
    {
      "q": "On CAN bus, each message has:",
      "choices": [
        "Only a voltage",
        "An identifier saying what it is, and data carrying the value",
        "A fuse",
        "A battery"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The identifier names the message and sets its priority; the data carries the value. (a) A message is data, not just a voltage. (c) A fuse is a protection device. (d) A battery is a power source."
    },
    {
      "q": "Every module on the bus hears every message, but each one:",
      "choices": [
        "Acts on all of them",
        "Only acts on the messages it needs",
        "Ignores them all",
        "Repeats them back"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Each module filters for the messages it needs — the TCM uses engine speed, the BCM does not. (a) Acting on all of them would make every module do everything. (c) Ignoring them all would make the network useless. (d) Modules do not repeat messages back."
    },
    {
      "q": "A gateway's job is to:",
      "choices": [
        "Charge the battery",
        "Connect separate networks and pass messages between them",
        "Start the engine",
        "Pump fuel"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The gateway joins the powertrain, body, and safety networks and translates between them. (a) The alternator charges the battery. (c) The starter starts the engine. (d) The fuel pump moves fuel."
    },
    {
      "q": "All modules stop answering at once. The most likely fault is:",
      "choices": [
        "One module has failed",
        "The bus wiring — the two bus wires shorted together or to ground, or a module jamming the bus",
        "A burned-out headlight bulb",
        "A flat tire"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Every module silent at once means the bus itself is down, not any one module. (a) One failed module would leave the others talking. (c) A bulb is a load, not a network part. (d) A tire has nothing to do with the network."
    },
    {
      "q": "One module stops answering while all the others answer normally. The first thing to check is:",
      "choices": [
        "The bus wiring for the whole car",
        "That module's power and ground",
        "The battery's age",
        "The tires"
      ],
      "answer": 1,
      "explanation": "Correct: (b). One silent module points at that module's own power or ground — the rest of the network is working. (a) The whole bus would affect all modules. (c) Battery age does not silence one module. (d) Tires are unrelated."
    },
    {
      "q": "Safety-critical messages get the highest priority so that:",
      "choices": [
        "They arrive first when two modules try to talk at the same time",
        "They use the most power",
        "They are the longest",
        "They are the cheapest"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Priority decides which message goes first — braking and airbag messages must never wait. (b) Priority is about order, not power. (c) Messages are short; length is not the point. (d) Cost has nothing to do with priority."
    },
    {
      "q": "Networks are separated into powertrain, body, and safety networks so that:",
      "choices": [
        "Each network is faster",
        "A fault on one network cannot stop the others",
        "The car uses less fuel",
        "The radio sounds better"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Separation contains faults — a body-network fault cannot stop the powertrain network. (a) Separation is about isolation, not speed, though the powertrain network is faster. (c) Networks do not change fuel use. (d) The radio is unaffected by network separation."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — CAN Bus & Networks: Quick Reference</h3>\n<p><strong>Core idea:</strong> Networks replace hundreds of dedicated wires with a shared pair that carries messages — one pair, hundreds of signals.</p>\n<p><strong>CAN bus:</strong> Messages with identifiers (what it is + priority) and data (the value). Every module hears every message; each acts only on the ones it needs.</p>\n<p><strong>Gateway:</strong> Connects separate networks (powertrain, body, safety) and passes messages between them, so a fault on one cannot stop the others.</p>\n<p><strong>Patterns:</strong> One silent module = that module's power or ground · All silent = bus wiring · Intermittent = loose connector or damaged wire.</p>\n<p><strong>Self-check:</strong> Explain why a car uses messages instead of wires and read a lost-communication pattern. If you can, you have this module.</p>\n"
};
