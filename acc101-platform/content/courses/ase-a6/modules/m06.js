// ase-a6 - Module 6: Wiring Diagrams & Schematics
module.exports = {
  "number": 6,
  "slug": "wiring-diagrams-schematics",
  "title": "Wiring Diagrams & Schematics",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a wiring diagram is and why technicians use it.",
    "Identify the symbols for the common parts: battery, ground, fuse, relay, switch, load, and connector.",
    "Trace a circuit through a diagram from the power source to the load and back to ground.",
    "Use a diagram to find where to test and what to expect at each test point.",
    "Explain how service information is organized and how to find the right diagram."
  ],
  "sections": [
    {
      "heading": "What a Wiring Diagram Is",
      "html": "<p>A <strong>wiring diagram</strong> (also called a schematic) is a map of a circuit. It shows every part in the circuit, how the parts are connected, and where the wires go — not as they physically sit in the car, but as they work electrically. A wire that runs the length of the car and a wire that is two inches long look the same on the diagram, because the diagram cares about connections, not geography. Learning to read one is the difference between guessing at a circuit and understanding it.</p>\n<p>Technicians use diagrams for two things: to <strong>understand</strong> a circuit before touching it, and to <strong>find the fault</strong> when it stops working. A diagram tells you where the power comes from, which fuse protects the circuit, which relay switches it, where the grounds are, and where the connectors sit. With that map, you can test at each point in turn and find exactly where the power stops — instead of pulling parts at random.</p>"
    },
    {
      "heading": "Reading the Symbols",
      "html": "<p>Diagrams use a small set of standard symbols. The <strong>battery</strong> is shown as long and short lines; <strong>ground</strong> is a set of lines that get shorter, like a small triangle, marking where a circuit returns to the car's body. A <strong>fuse</strong> is a small rectangle or a zigzag in a wire; a <strong>relay</strong> is shown as a coil (the control side) and a set of contacts (the load side); a <strong>switch</strong> is a break in a wire that can close; a <strong>load</strong> — a bulb, a motor — is shown as a circle or a rectangle with a label; and a <strong>connector</strong> is shown where wires join or pass through a plug.</p>\n<p>Wires are lines, and their color is usually written next to them as a code, so you can find the same wire in the car. A dot where two lines cross means the wires are joined; lines that cross without a dot are just passing over each other on the page and are not connected. That dot is one of the most important marks on the whole diagram — missing it means misreading the circuit.</p>"
    },
    {
      "heading": "Tracing a Circuit",
      "html": "<p>To trace a circuit, start at the power source and follow the wire. From the battery, the wire runs through a fuse, then to a switch or a relay, then to the load, then to ground, and back to the battery. At each point, the diagram tells you what to expect: full voltage before the load, a voltage drop across the load, and no voltage after it on the ground side. If you measure at a point and the voltage is not what the diagram says it should be, the fault is between that point and the last good one.</p>\n<p>Worked example: a headlight is dead. The diagram shows battery → fuse → headlight switch → relay → headlight → ground. You measure at the fuse: voltage present. At the relay's output: no voltage. The fault is between the fuse and the relay's output — the switch or the relay itself — not the bulb. One diagram and two measurements have narrowed the fault to two parts.</p>"
    },
    {
      "heading": "Service Information and Finding the Right Diagram",
      "html": "<p>Modern cars have hundreds of circuits, and the diagrams live in the <strong>service information</strong> — the manufacturer's repair data, usually on a computer or a subscription. Diagrams are organized by system: starting, charging, lighting, engine controls, body controls. Each diagram has a title, a list of the parts it shows, and often a legend of the symbols and wire colors used. The first skill is finding the right diagram for the system you are working on; the second is reading it.</p>\n<p>Diagrams also show <strong>connector views</strong> — what a plug looks like and which pin is which — and <strong>component locations</strong> — where in the car a part sits. A diagram that shows a relay in the circuit is only half the job; you also need to know where that relay is bolted down. Service information gives you both: the map and the address.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>A wiring diagram is an electrical map: it shows connections, not physical locations.</li>\n<li>Symbols: battery, ground, fuse, relay (coil and contacts), switch, load, connector; a dot means wires are joined, a crossing without a dot means they are not.</li>\n<li>Trace from the source: battery → fuse → switch or relay → load → ground → battery. Measure at each point; the fault sits between the last good reading and the first bad one.</li>\n<li>Diagrams live in the service information, organized by system, with connector views and component locations alongside.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Testing without a diagram and replacing the load first. A dead headlight with no power at its connector is not a bad bulb — it is a fault upstream, and the diagram would have shown you that before you bought the bulb.</div>\n<p><strong>Ready-to-Work link:</strong> If you can trace a circuit from battery to ground and say where to test next, you have this module. Module 7 puts a meter in your hands: multimeter and scope diagnosis.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Wiring diagram (schematic)",
      "def": "A map of a circuit showing every part, how the parts are connected, and where the wires go — as they work electrically, not as they sit in the car."
    },
    {
      "term": "Symbol",
      "def": "A standard drawing that stands for a part on a diagram — battery, ground, fuse, relay, switch, load, connector."
    },
    {
      "term": "Ground symbol",
      "def": "The mark on a diagram showing where a circuit returns to the car's body and the battery."
    },
    {
      "term": "Fuse symbol",
      "def": "The mark on a diagram showing a fuse in a wire — a small rectangle or zigzag."
    },
    {
      "term": "Relay symbol",
      "def": "A diagram showing a relay as a coil (control side) and a set of contacts (load side)."
    },
    {
      "term": "Connector",
      "def": "A plug where wires join or pass between parts of a circuit; shown on the diagram where wires meet."
    },
    {
      "term": "Wire color code",
      "def": "The letters next to a wire on a diagram that name its color, so you can find the same wire in the car."
    },
    {
      "term": "Junction dot",
      "def": "A dot where two lines cross on a diagram, meaning the wires are joined; lines crossing without a dot are not connected."
    },
    {
      "term": "Service information",
      "def": "The manufacturer's repair data — diagrams, procedures, and specifications — usually on a computer or a subscription."
    },
    {
      "term": "Connector view",
      "def": "A drawing of a plug showing what it looks like and which pin is which."
    },
    {
      "term": "Component location",
      "def": "Information in the service data showing where in the car a part is fitted."
    },
    {
      "term": "Test point",
      "def": "A place in a circuit where you can measure voltage or current to check whether the circuit is working as the diagram says it should."
    },
    {
      "term": "Circuit trace",
      "def": "Following a circuit through its diagram from the power source to the load and back to ground."
    },
    {
      "term": "Legend",
      "def": "The key on a diagram that explains the symbols and wire colors used."
    }
  ],
  "video": {
    "title": "How to Use Wiring Diagrams For Car Electrical Diagnosis and Repair",
    "embedUrl": "https://www.youtube.com/embed/mEJEHxlbn9o",
    "note": "The Car Care Nut shows how to use wiring diagrams for real electrical diagnosis. Watch how he traces a circuit and picks his test points — that method is the heart of this module.",
    "more": [
      {
        "title": "How To Read, Understand, And Use A Wiring Diagram - Part 1 - The Basics",
        "url": "https://www.youtube.com/watch?v=h3FsEV49CvM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A headlight is dead. The diagram shows battery → fuse → headlight switch → relay → headlight → ground. You measure voltage at the fuse (present) and at the relay's output (absent). Where is the fault, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Voltage is present at the fuse, so everything up to the fuse is working. Step 2: Voltage is absent at the relay's output, so the power stops between the fuse and that point. Step 3: The fault is the headlight switch or the relay — not the bulb, because no power is even reaching it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> On a wiring diagram, two wires cross. One crossing has a dot and the other does not. What does each crossing mean?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A dot where wires cross means the wires are joined — they are the same electrical point. Step 2: A crossing without a dot means the wires only pass over each other on the page and are not connected. Step 3: Missing the dot means misreading the circuit — you would think two wires are joined when they are not, or the reverse.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Trace a horn circuit from the battery to ground, naming each part in order.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: From the battery, the wire runs through a fuse. Step 2: Then to the horn relay's contacts. Step 3: Then to the horn itself (the load). Step 4: Then to ground and back to the battery. Step 5: The relay's coil is controlled by the horn switch on the steering wheel, on a separate small-current path.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Why does a wiring diagram show connections rather than physical locations, and what does that mean for finding a part in the car?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A diagram is an electrical map — it cares about how parts connect, not where they sit. Step 2: A wire that runs the length of the car looks the same as a two-inch wire on the diagram. Step 3: To find the part in the car, you use the component location information in the service data alongside the diagram — the diagram is the map, the location data is the address.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A circuit has power at the load's connector but the load does not work. Using the diagram, what are the two remaining possibilities?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Power is reaching the load, so the fuse, switch, and relay are all working. Step 2: The load itself has failed. Step 3: Or the load's ground path is broken — power arrives but has no way back to the battery. Step 4: Check the load first, then its ground.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Where do you find the wiring diagram for a car, and how is the information organized?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: In the service information — the manufacturer's repair data, usually on a computer or a subscription. Step 2: Diagrams are organized by system: starting, charging, lighting, engine controls, body controls. Step 3: Each diagram has a title, a parts list, a legend of symbols and wire colors, and often connector views and component locations.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A wiring diagram is:",
      "choices": [
        "A photograph of the car's wiring",
        "An electrical map showing every part in a circuit and how the parts connect",
        "A list of part numbers",
        "A drawing of where parts sit in the car"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A diagram maps connections, not physical locations. (a) A photograph shows locations, not connections. (c) A parts list is not a diagram. (d) Physical locations come from the component location data, not the diagram."
    },
    {
      "q": "On a diagram, a dot where two wires cross means:",
      "choices": [
        "The wires are joined",
        "The wires are not connected",
        "The wires are damaged",
        "The wires are the same color"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A dot marks a junction — the wires are the same electrical point. (b) A crossing without a dot means no connection. (c) Damage is not shown by a dot. (d) Wire color is written as a code, not shown by a dot."
    },
    {
      "q": "To find a fault with a diagram, you:",
      "choices": [
        "Replace the load first",
        "Measure at points along the circuit; the fault sits between the last good reading and the first bad one",
        "Guess the most expensive part",
        "Ignore the diagram and follow the wire by eye"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Testing point by point narrows the fault to the section between two readings. (a) Replacing the load first wastes money when the fault is upstream. (c) Guessing is not diagnosis. (d) Following a wire by eye cannot show you what is inside a relay or a switch."
    },
    {
      "q": "A relay is shown on a diagram as:",
      "choices": [
        "A single circle",
        "A coil (control side) and a set of contacts (load side)",
        "A zigzag",
        "A battery symbol"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The coil is the small-current control; the contacts carry the large current. (a) A circle usually marks a load. (c) A zigzag marks a resistor or a fuse. (d) The battery has its own symbol."
    },
    {
      "q": "Power is present at a dead load's connector. The fault is:",
      "choices": [
        "The fuse",
        "The load itself or its ground path",
        "The switch",
        "The relay"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Power reaching the load proves the fuse, switch, and relay are working — the load has failed or its ground is broken. (a), (c), and (d) are all upstream of the connector, so they would have stopped the power from arriving."
    },
    {
      "q": "Wiring diagrams are organized in the service information by:",
      "choices": [
        "Alphabetical part name",
        "System — starting, charging, lighting, engine controls, body controls",
        "Wire color",
        "Price of the parts"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Diagrams are grouped by system so you can find the one for the circuit you are working on. (a) Parts are not listed alphabetically in the diagrams. (c) Wire color is a detail inside a diagram, not how they are organized. (d) Price has nothing to do with it."
    },
    {
      "q": "The ground symbol on a diagram marks:",
      "choices": [
        "The battery's positive terminal",
        "Where a circuit returns to the car's body and the battery",
        "A blown fuse",
        "A broken wire"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Ground is the return path to the source. (a) The battery has its own symbol. (c) A blown fuse is a fault, not a symbol. (d) A broken wire is an open, shown as a gap, not a ground symbol."
    },
    {
      "q": "A diagram's legend tells you:",
      "choices": [
        "The price of the parts",
        "What the symbols and wire colors on that diagram mean",
        "How long the repair will take",
        "The car's history"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The legend is the key to the diagram's symbols and color codes. (a) Prices are not on diagrams. (c) Repair times are in the labor data, not the diagram. (d) The car's history is not on a wiring diagram."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Wiring Diagrams & Schematics: Quick Reference</h3>\n<p><strong>Core idea:</strong> A wiring diagram is an electrical map — it shows connections, not physical locations.</p>\n<p><strong>Symbols:</strong> Battery · Ground · Fuse · Relay (coil and contacts) · Switch · Load · Connector. A dot means wires are joined; a crossing without a dot means they are not.</p>\n<p><strong>Trace:</strong> Battery → fuse → switch or relay → load → ground → battery. Measure at each point; the fault sits between the last good reading and the first bad one.</p>\n<p><strong>Service information:</strong> Diagrams are organized by system, with a legend, connector views, and component locations alongside.</p>\n<p><strong>Watch out:</strong> A dead load with no power at its connector is not a bad load — the fault is upstream, and the diagram shows you that before you buy the part.</p>\n<p><strong>Self-check:</strong> Trace a circuit from battery to ground and say where to test next. If you can, you have this module.</p>\n"
};
